#!/usr/bin/env node
/**
 * I/O layer for the relay-merge-gate commit status (PP-RELAY-059 revision 2).
 *
 * Thin wrapper around the pure decision functions in
 * `verify-relay-merge-gate.mjs`. It never contains merge-authorization
 * logic itself — only GitHub API calls to publish the outcome as a commit
 * status under the fixed context `relay-merge-gate` (see
 * `MERGE_GATE_STATUS_CONTEXT`), which is what branch protection must be
 * configured to require.
 *
 * Two modes, matching the two triggers in `.github/workflows/relay-merge-gate.yml`:
 *
 *   --mode pr --state <path> --pr <n> --head <sha> [--task <id>]
 *     One PR, one head. Used on `pull_request` events (opened, reopened,
 *     synchronize, edited, ready_for_review). `<path>` must be
 *     `.ai-ops/state.json` checked out from the PR's trusted base commit,
 *     never the PR branch.
 *
 *   --mode refresh --state <path>
 *     Re-evaluates every currently open `[RELAY ...]` PR against `<path>`
 *     and republishes a status for each. Used on `push` to `main` when
 *     `.ai-ops/state.json` changes — this is the fix for the bug that got
 *     revision 1 rejected: without this trigger, a PR's status never
 *     re-runs when the Director's `MERGE_APPROVED` commit lands on `main`
 *     after the PR was opened. `<path>` must be `.ai-ops/state.json` from
 *     the pushed commit itself (already trusted, since this only runs on
 *     `push` to `main`, never on a PR branch).
 *
 * Both modes accept `--dry-run`, which prints the intended status
 * update(s) as JSON instead of calling the GitHub API — used for local
 * testing without a token or network access.
 *
 * Exit code reflects only whether the publishing mechanism itself worked
 * (API calls succeeded, state.json parsed, etc.), never the allowed/blocked
 * outcome of the invariant — that outcome lives solely in the published
 * `relay-merge-gate` status context, so a blocked PR does not also fail
 * this workflow job in a way that could be confused for a required check.
 */

import { readFileSync } from 'fs';
import { resolve } from 'path';
import { evaluateMergeGate, planRefreshStatuses, MERGE_GATE_STATUS_CONTEXT } from './verify-relay-merge-gate.mjs';

const GITHUB_API = 'https://api.github.com';

function parseArgs(argv) {
	const args = { dryRun: false };
	for (let i = 0; i < argv.length; i += 1) {
		const arg = argv[i];
		if (arg === '--dry-run') args.dryRun = true;
		else if (arg === '--mode') args.mode = argv[++i];
		else if (arg === '--state') args.state = argv[++i];
		else if (arg === '--pr') args.pr = argv[++i];
		else if (arg === '--head') args.head = argv[++i];
		else if (arg === '--task') args.task = argv[++i];
		else if (arg === '--prs-file') args.prsFile = argv[++i];
	}
	return args;
}

function readState(path) {
	try {
		return JSON.parse(readFileSync(resolve(path), 'utf8'));
	} catch (err) {
		// Fail closed: an unreadable/malformed state.json must never be
		// treated as authorizing a merge. Feeding `null` through
		// evaluateMergeGate reliably produces `allowed: false`.
		console.error(`Warning: could not read/parse state file at ${path}: ${err.message}`);
		return null;
	}
}

async function fetchOpenRelayPullRequests({ owner, repo, token }) {
	const url = `${GITHUB_API}/repos/${owner}/${repo}/pulls?state=open&base=main&per_page=100`;
	const res = await fetch(url, {
		headers: {
			Authorization: `Bearer ${token}`,
			Accept: 'application/vnd.github+json',
			'User-Agent': 'palmistry-path-relay-merge-gate',
		},
	});
	if (!res.ok) {
		throw new Error(`Failed to list open pull requests: ${res.status} ${res.statusText}`);
	}
	const prs = await res.json();
	return prs.map((pr) => ({ number: pr.number, head_sha: pr.head.sha, title: pr.title }));
}

async function publishStatus({ owner, repo, token, sha, allowed, reason, dryRun }) {
	const payload = {
		state: allowed ? 'success' : 'failure',
		context: MERGE_GATE_STATUS_CONTEXT,
		description: reason.slice(0, 140),
		target_url: process.env.GITHUB_SERVER_URL && process.env.GITHUB_REPOSITORY && process.env.GITHUB_RUN_ID
			? `${process.env.GITHUB_SERVER_URL}/${process.env.GITHUB_REPOSITORY}/actions/runs/${process.env.GITHUB_RUN_ID}`
			: undefined,
	};

	if (dryRun) {
		console.log(JSON.stringify({ sha, ...payload }));
		return;
	}

	const url = `${GITHUB_API}/repos/${owner}/${repo}/statuses/${sha}`;
	const res = await fetch(url, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${token}`,
			Accept: 'application/vnd.github+json',
			'User-Agent': 'palmistry-path-relay-merge-gate',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(payload),
	});
	if (!res.ok) {
		const body = await res.text();
		throw new Error(`Failed to publish status for ${sha}: ${res.status} ${res.statusText} ${body}`);
	}
	console.log(`Published ${payload.state} (${MERGE_GATE_STATUS_CONTEXT}) for ${sha}: ${reason}`);
}

async function runPrMode(args) {
	if (!args.state || !args.pr || !args.head) {
		throw new Error('mode pr requires --state, --pr, and --head');
	}
	const state = readState(args.state);
	const prNumber = Number.parseInt(args.pr, 10);
	const result = evaluateMergeGate(state, { prNumber, headSha: args.head, taskId: args.task });

	const { owner, repo } = repoFromEnv();
	await publishStatus({
		owner,
		repo,
		token: process.env.GITHUB_TOKEN,
		sha: args.head,
		allowed: result.allowed,
		reason: result.reason,
		dryRun: args.dryRun,
	});
}

async function runRefreshMode(args) {
	if (!args.state) {
		throw new Error('mode refresh requires --state');
	}
	const state = readState(args.state);
	const { owner, repo } = repoFromEnv();

	// --prs-file lets a dry run (or a future test) supply a fixed PR list
	// instead of calling the GitHub API; production invocations omit it.
	const openPullRequests = args.prsFile
		? JSON.parse(readFileSync(resolve(args.prsFile), 'utf8'))
		: await fetchOpenRelayPullRequests({ owner, repo, token: process.env.GITHUB_TOKEN });

	const plans = planRefreshStatuses(state, openPullRequests);
	if (plans.length === 0) {
		console.log('No open [RELAY ...] pull requests targeting main; nothing to refresh.');
		return;
	}
	for (const plan of plans) {
		await publishStatus({
			owner,
			repo,
			token: process.env.GITHUB_TOKEN,
			sha: plan.headSha,
			allowed: plan.allowed,
			reason: plan.reason,
			dryRun: args.dryRun,
		});
	}
}

function repoFromEnv() {
	const [owner, repo] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
	if (!owner || !repo) {
		throw new Error('GITHUB_REPOSITORY env var must be set as "<owner>/<repo>"');
	}
	return { owner, repo };
}

async function main() {
	const args = parseArgs(process.argv.slice(2));
	if (!args.dryRun && !process.env.GITHUB_TOKEN) {
		throw new Error('GITHUB_TOKEN env var is required unless --dry-run is set');
	}

	if (args.mode === 'pr') {
		await runPrMode(args);
	} else if (args.mode === 'refresh') {
		await runRefreshMode(args);
	} else {
		throw new Error('Usage: publish-relay-merge-gate-status.mjs --mode <pr|refresh> --state <path> [...] [--dry-run]');
	}
}

main().catch((err) => {
	console.error(err.message);
	process.exitCode = 1;
});
