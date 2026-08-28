#!/usr/bin/env node
/**
 * Relay merge-gate invariant (PP-RELAY-059).
 *
 * PP-RELAY-057 PR #104 and PP-RELAY-058 PRs #105/#106 merged to `main`
 * without the Director ever writing `status: MERGE_APPROVED` with a
 * matching `approved_pr`/`approved_head_sha` in `.ai-ops/state.json` first
 * (confirmed: `merged_by` on all three PRs is the repository owner's own
 * account, not the `relay-automerge` workflow, and the squash-merge commit
 * subjects are GitHub's default "<PR title> (#N)" rather than the
 * "[RELAY <task>] Director-approved squash merge" title that
 * `.github/workflows/relay-automerge.yml` always sets). GitHub allows any
 * account with merge rights on the repo to click "Squash and merge" (or
 * call the merge API directly) on an open, green, non-draft PR regardless
 * of what `.ai-ops/state.json` says — nothing in the repository can
 * prevent that click by itself; only a required-status-check branch
 * protection rule on `main` can (see `.ai-ops/README.md`).
 *
 * This module is the single, testable source of truth for the invariant
 * `.github/workflows/relay-automerge.yml` and `relay-fastlane.yml` already
 * enforce in bash: a PR may be merged only when `state.json` already
 * records `status: MERGE_APPROVED` with the *exact* `approved_pr` number
 * and the *exact* current `approved_head_sha` for that PR.
 *
 * Revision 1 published this invariant only as a `pull_request`-triggered
 * check evaluated against the PR's base commit. That check never re-runs
 * when the Director later commits `MERGE_APPROVED` to `state.json` on
 * `main` (a push, not a PR event on the Relay PR itself) — so if made a
 * required status check as proposed, a legitimate approved PR could stay
 * red forever. `planRefreshStatuses` below is the pure decision function
 * for the revision-2 fix: given the freshly-pushed `state.json` on `main`
 * and the current list of open PRs targeting `main`, decide the gate
 * status to (re)publish for every open `[RELAY ...]` PR head, so the
 * signal can flip from blocking to passing after approval without
 * mutating the approved PR head. See `scripts/publish-relay-merge-gate-status.mjs`
 * for the I/O layer (GitHub API calls) built on top of these two pure
 * functions, and `.github/workflows/relay-merge-gate.yml` for the two
 * triggers (`pull_request` and `push` to `main` on `.ai-ops/state.json`)
 * that both publish the same `relay-merge-gate` commit-status context.
 *
 * Usage:
 *   node scripts/verify-relay-merge-gate.mjs --state <path> --pr <number> --head <sha> [--task <id>]
 *   node scripts/verify-relay-merge-gate.mjs --self-test
 */

import { readFileSync, readdirSync, existsSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const FIXTURES_DIR = resolve(__dirname, 'fixtures', 'relay-merge-gate');
const REFRESH_FIXTURES_DIR = resolve(__dirname, 'fixtures', 'relay-merge-gate-refresh');

const FULL_SHA_RE = /^[0-9a-f]{40}$/;

/**
 * The exact, stable required-check context this invariant is published
 * under. It is a Statuses API (`POST /repos/{owner}/{repo}/statuses/{sha}`)
 * `context` string, not a GitHub Actions check-run name — check-run names
 * are derived from the workflow/job display names (e.g. "Relay Merge Gate
 * / gate-pr") and shift if either is renamed. Branch protection must
 * require this exact status context, found in GitHub's required-checks
 * picker only after this workflow has run at least once.
 */
export const MERGE_GATE_STATUS_CONTEXT = 'relay-merge-gate';

/** Matches a Relay PR title and captures its task id, e.g. "[RELAY PP-RELAY-059] ...". */
const RELAY_PR_TITLE_RE = /^\[RELAY\s+(PP-RELAY-\d+)\]/;

/**
 * Pure decision function mirroring relay-automerge.yml's bash gate.
 * @param {object} state - parsed .ai-ops/state.json (must come from a
 *   trusted source: the PR's base commit for a `pull_request` evaluation,
 *   or the pushed commit itself for a `push`-triggered refresh — never
 *   from the PR branch under evaluation).
 * @param {{prNumber: number, headSha: string, taskId?: string}} check
 * @returns {{allowed: boolean, reason: string}}
 */
export function evaluateMergeGate(state, check) {
	const { prNumber, headSha, taskId } = check;

	if (!state || typeof state !== 'object') {
		return { allowed: false, reason: 'state.json is missing or not an object' };
	}
	if (state.relay_enabled !== true) {
		return { allowed: false, reason: `relay_enabled is not true (${state.relay_enabled})` };
	}
	if (state.credit_guard !== 'CONFIRMED_DISABLED') {
		return { allowed: false, reason: `credit_guard is not CONFIRMED_DISABLED (${state.credit_guard})` };
	}
	if (state.autonomous_merge !== true) {
		return { allowed: false, reason: `autonomous_merge is not true (${state.autonomous_merge})` };
	}
	if (state.status !== 'MERGE_APPROVED') {
		return { allowed: false, reason: `status is not MERGE_APPROVED (${state.status})` };
	}
	if (taskId && state.current_task_id !== taskId) {
		return {
			allowed: false,
			reason: `current_task_id does not match PR task (state=${state.current_task_id} pr=${taskId})`,
		};
	}
	if (!Number.isInteger(state.approved_pr) || state.approved_pr <= 0) {
		return { allowed: false, reason: `approved_pr is not a positive integer (${state.approved_pr})` };
	}
	if (state.approved_pr !== prNumber) {
		return {
			allowed: false,
			reason: `approved_pr does not match this PR (approved=${state.approved_pr} pr=${prNumber})`,
		};
	}
	if (typeof state.approved_head_sha !== 'string' || !FULL_SHA_RE.test(state.approved_head_sha)) {
		return { allowed: false, reason: `approved_head_sha is not a full 40-character SHA (${state.approved_head_sha})` };
	}
	if (state.approved_head_sha !== headSha) {
		return {
			allowed: false,
			reason: `approved_head_sha does not match live PR head (approved=${state.approved_head_sha} live=${headSha})`,
		};
	}

	return { allowed: true, reason: 'state.json records MERGE_APPROVED for this exact PR and head SHA' };
}

/**
 * Pure decision function for the push-triggered refresh (PP-RELAY-059 r2).
 * Given the freshly-pushed `state.json` on `main` and the current list of
 * open pull requests targeting `main`, decide which commit-status update
 * to publish for each open Relay PR head. Non-Relay-titled PRs are
 * ignored entirely (never published to).
 *
 * @param {object} state - parsed .ai-ops/state.json from the pushed commit.
 * @param {Array<{number:number, head_sha:string, title:string}>} openPullRequests
 * @returns {Array<{prNumber:number, headSha:string, taskId:string, allowed:boolean, reason:string}>}
 */
export function planRefreshStatuses(state, openPullRequests) {
	const plans = [];
	for (const pr of openPullRequests ?? []) {
		const match = RELAY_PR_TITLE_RE.exec(pr?.title ?? '');
		if (!match) continue;
		const taskId = match[1];
		const result = evaluateMergeGate(state, { prNumber: pr.number, headSha: pr.head_sha, taskId });
		plans.push({ prNumber: pr.number, headSha: pr.head_sha, taskId, allowed: result.allowed, reason: result.reason });
	}
	return plans;
}

function parseArgs(argv) {
	const args = { selfTest: false };
	for (let i = 0; i < argv.length; i += 1) {
		const arg = argv[i];
		if (arg === '--self-test') args.selfTest = true;
		else if (arg === '--state') args.state = argv[++i];
		else if (arg === '--pr') args.pr = argv[++i];
		else if (arg === '--head') args.head = argv[++i];
		else if (arg === '--task') args.task = argv[++i];
	}
	return args;
}

function runSingleFixtures(dir) {
	const files = readdirSync(dir).filter((f) => f.endsWith('.json')).sort();
	let failures = 0;
	for (const file of files) {
		const fixture = JSON.parse(readFileSync(resolve(dir, file), 'utf8'));
		const result = evaluateMergeGate(fixture.state, fixture.check);
		const expected = fixture.expected.allowed;
		const pass = result.allowed === expected;
		if (!pass) failures += 1;
		console.log(
			`${pass ? 'PASS' : 'FAIL'}  relay-merge-gate/${file}  expected allowed=${expected} got allowed=${result.allowed} (${result.reason})`
		);
	}
	return { total: files.length, failures };
}

function runRefreshFixtures(dir) {
	if (!existsSync(dir)) return { total: 0, failures: 0 };
	const files = readdirSync(dir).filter((f) => f.endsWith('.json')).sort();
	let failures = 0;
	for (const file of files) {
		const fixture = JSON.parse(readFileSync(resolve(dir, file), 'utf8'));
		const plans = planRefreshStatuses(fixture.state, fixture.openPullRequests);
		const expected = fixture.expected;
		const pass = JSON.stringify(plans.map((p) => ({ prNumber: p.prNumber, allowed: p.allowed })).sort((a, b) => a.prNumber - b.prNumber)) ===
			JSON.stringify(expected.map((p) => ({ prNumber: p.prNumber, allowed: p.allowed })).sort((a, b) => a.prNumber - b.prNumber));
		if (!pass) failures += 1;
		console.log(
			`${pass ? 'PASS' : 'FAIL'}  relay-merge-gate-refresh/${file}  expected=${JSON.stringify(expected)} got=${JSON.stringify(
				plans.map((p) => ({ prNumber: p.prNumber, allowed: p.allowed }))
			)}`
		);
	}
	return { total: files.length, failures };
}

async function selfTest() {
	const single = runSingleFixtures(FIXTURES_DIR);
	const refresh = runRefreshFixtures(REFRESH_FIXTURES_DIR);
	const total = single.total + refresh.total;
	const failures = single.failures + refresh.failures;
	console.log(`\n${total - failures}/${total} relay-merge-gate fixtures passed.`);
	if (total === 0) {
		console.error(`No fixtures found in ${FIXTURES_DIR} or ${REFRESH_FIXTURES_DIR}`);
		process.exitCode = 1;
		return;
	}
	if (failures > 0) process.exitCode = 1;
}

async function main() {
	const args = parseArgs(process.argv.slice(2));

	if (args.selfTest) {
		await selfTest();
		return;
	}

	if (!args.state || !args.pr || !args.head) {
		console.error('Usage: verify-relay-merge-gate.mjs --state <path> --pr <number> --head <sha> [--task <id>]');
		process.exitCode = 2;
		return;
	}

	const state = JSON.parse(readFileSync(resolve(args.state), 'utf8'));
	const prNumber = Number.parseInt(args.pr, 10);
	const result = evaluateMergeGate(state, { prNumber, headSha: args.head, taskId: args.task });

	console.log(result.reason);
	process.exitCode = result.allowed ? 0 : 1;
}

const isMain = process.argv[1] && resolve(process.argv[1]) === resolve(fileURLToPath(import.meta.url));
if (isMain) {
	main();
}
