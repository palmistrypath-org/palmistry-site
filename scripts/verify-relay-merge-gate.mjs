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
 * and the *exact* current `approved_head_sha` for that PR. It exists so
 * that invariant is mechanically verifiable in isolation (via
 * `--self-test`) and so a required `relay-merge-gate` status check
 * (`.github/workflows/relay-merge-gate.yml`) can evaluate it against the
 * trusted base-branch copy of `state.json` for every PR targeting `main`.
 *
 * Usage:
 *   node scripts/verify-relay-merge-gate.mjs --state <path> --pr <number> --head <sha> [--task <id>]
 *   node scripts/verify-relay-merge-gate.mjs --self-test
 */

import { readFileSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const FIXTURES_DIR = resolve(__dirname, 'fixtures', 'relay-merge-gate');

const FULL_SHA_RE = /^[0-9a-f]{40}$/;

/**
 * Pure decision function mirroring relay-automerge.yml's bash gate.
 * @param {object} state - parsed .ai-ops/state.json (must come from the
 *   trusted base branch, never from the PR branch under evaluation).
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

async function selfTest() {
	const { readdirSync } = await import('fs');
	const files = readdirSync(FIXTURES_DIR).filter((f) => f.endsWith('.json')).sort();
	if (files.length === 0) {
		console.error(`No fixtures found in ${FIXTURES_DIR}`);
		process.exitCode = 1;
		return;
	}

	let failures = 0;
	for (const file of files) {
		const fixturePath = resolve(FIXTURES_DIR, file);
		const fixture = JSON.parse(readFileSync(fixturePath, 'utf8'));
		const result = evaluateMergeGate(fixture.state, fixture.check);
		const expected = fixture.expected.allowed;
		const pass = result.allowed === expected;
		if (!pass) failures += 1;
		console.log(
			`${pass ? 'PASS' : 'FAIL'}  ${file}  expected allowed=${expected} got allowed=${result.allowed} (${result.reason})`
		);
	}

	console.log(`\n${files.length - failures}/${files.length} relay-merge-gate fixtures passed.`);
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

main();
