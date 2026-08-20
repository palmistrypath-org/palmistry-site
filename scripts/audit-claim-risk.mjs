#!/usr/bin/env node
/**
 * Claim-risk preflight aid for SOURCE_SENSITIVE editorial work (PP-RELAY-028).
 *
 * Scans explicitly supplied Markdown/MDX files for wording patterns that
 * historically drove Relay rework on PP-RELAY-024: unsupported
 * prevalence/consensus language, vague anonymous-authority attribution, and
 * strong unsupported empirical-overstatement claims.
 *
 * This is a heuristic review prompt, not a source-validity check. A match
 * means "have a human/worker check this claim against approved repository
 * evidence" — it does not mean the wording is wrong, and the absence of a
 * match does not mean a claim is sourced. It never rewrites prose and never
 * approves or rejects content on its own. See docs/editorial-style-guide.md
 * §5 and the source-claim preflight in .ai-ops/CLAUDE_ROUTINE_PROMPT.md for
 * the authoritative rules this tool only assists with.
 *
 * Usage:
 *   node scripts/audit-claim-risk.mjs <file> [file...]   Scan specific files
 *   node scripts/audit-claim-risk.mjs --self-test         Run fixture checks
 */

import { readFileSync } from 'fs';
import { dirname, relative, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const FIXTURES_DIR = resolve(__dirname, 'fixtures', 'claim-risk');

const CATEGORIES = [
	{
		key: 'PREVALENCE_OR_CONSENSUS',
		label: 'Unsupported prevalence/consensus wording',
		pattern:
			/\b(most|many|often|commonly|typically|generally|usual(?:ly)?|rare(?:ly)?|majority)\b/gi,
	},
	{
		key: 'ANONYMOUS_AUTHORITY',
		label: 'Vague anonymous-authority attribution',
		pattern:
			/\b(modern palmists|some (?:writers|palmists|experts|scholars)|traditional readers|experts?|researchers?|scholars agree)\b/gi,
	},
	{
		key: 'SCIENTIFIC_OR_HISTORICAL_OVERSTATEMENT',
		label: 'Strong unsupported empirical-overstatement wording',
		pattern:
			/\b(proves?|proven|has been proven|scientifically (?:proven|confirmed)|studies (?:show|prove|confirm)|science (?:confirms|proves)|research (?:proves|confirms)|clinically proven|conclusively (?:proves|shows)|definitively (?:proves|shows))\b/gi,
	},
];

/** Blank out fenced code blocks in place so line numbers stay stable. */
function stripCodeFences(content) {
	const lines = content.split(/\r?\n/);
	let inFence = false;
	return lines
		.map((line) => {
			if (/^\s*```/.test(line)) {
				inFence = !inFence;
				return '';
			}
			return inFence ? '' : line;
		})
		.join('\n');
}

function scanContent(content) {
	const scanned = stripCodeFences(content);
	const lines = scanned.split(/\r?\n/);
	const findings = [];

	lines.forEach((line, index) => {
		for (const category of CATEGORIES) {
			category.pattern.lastIndex = 0;
			let match;
			while ((match = category.pattern.exec(line)) !== null) {
				findings.push({
					line: index + 1,
					category: category.key,
					label: category.label,
					matched: match[0],
					context: line.trim(),
				});
			}
		}
	});

	return findings;
}

function scanFile(filePath) {
	const content = readFileSync(filePath, 'utf8');
	return scanContent(content);
}

function formatFindings(filePath, findings, baseDir = ROOT) {
	const displayPath = relative(baseDir, filePath);
	return findings.map(
		(f) =>
			`[${displayPath}:${f.line}] ${f.category} — "${f.matched}" in: ${f.context}`,
	);
}

function runScan(files) {
	let total = 0;
	const byCategory = {};

	for (const file of files) {
		const findings = scanFile(file);
		total += findings.length;
		for (const f of findings) {
			byCategory[f.category] = (byCategory[f.category] || 0) + 1;
		}
		for (const line of formatFindings(file, findings)) {
			console.log(line);
		}
	}

	console.log('');
	console.log(`Claim-risk scan complete — ${files.length} file(s), ${total} finding(s).`);
	if (total > 0) {
		for (const category of CATEGORIES) {
			const count = byCategory[category.key] || 0;
			if (count > 0) console.log(`  ${category.key}: ${count}`);
		}
		console.log(
			'\nEach finding is a review prompt, not proof the wording is wrong. Check every',
			'flagged claim against approved repository evidence (docs/editorial-style-guide.md §5)',
			'before publishing. This tool does not replace the source-claim preflight or Director review.',
		);
	}

	return { total, byCategory };
}

function runSelfTest() {
	const cases = [
		{
			file: resolve(FIXTURES_DIR, 'risky-prevalence.md'),
			expectCategories: ['PREVALENCE_OR_CONSENSUS', 'ANONYMOUS_AUTHORITY'],
			expectNone: ['SCIENTIFIC_OR_HISTORICAL_OVERSTATEMENT'],
		},
		{
			file: resolve(FIXTURES_DIR, 'risky-empirical.md'),
			expectCategories: ['SCIENTIFIC_OR_HISTORICAL_OVERSTATEMENT'],
			expectNone: [],
		},
		{
			file: resolve(FIXTURES_DIR, 'neutral-observational.md'),
			expectCategories: [],
			expectNone: [
				'PREVALENCE_OR_CONSENSUS',
				'ANONYMOUS_AUTHORITY',
				'SCIENTIFIC_OR_HISTORICAL_OVERSTATEMENT',
			],
		},
	];

	let failed = false;

	for (const testCase of cases) {
		const findings = scanFile(testCase.file);
		const seen = new Set(findings.map((f) => f.category));
		const label = relative(ROOT, testCase.file);

		for (const expected of testCase.expectCategories) {
			if (!seen.has(expected)) {
				failed = true;
				console.error(`FAIL [${label}] expected category ${expected} to be flagged, but it was not.`);
			}
		}
		for (const forbidden of testCase.expectNone) {
			if (seen.has(forbidden)) {
				failed = true;
				console.error(`FAIL [${label}] expected category ${forbidden} to NOT be flagged, but it was.`);
			}
		}
		if (
			testCase.expectCategories.every((c) => seen.has(c)) &&
			testCase.expectNone.every((c) => !seen.has(c))
		) {
			console.log(`PASS [${label}]`);
		}
	}

	if (failed) {
		console.error('\nClaim-risk self-test failed.');
		process.exit(1);
	}

	console.log('\nClaim-risk self-test passed — risky and neutral fixtures behave as expected.');
}

const args = process.argv.slice(2);

if (args.includes('--self-test')) {
	runSelfTest();
} else if (args.length === 0) {
	console.error('Usage: node scripts/audit-claim-risk.mjs <file> [file...]');
	console.error('       node scripts/audit-claim-risk.mjs --self-test');
	console.error('\nTargeted preflight aid for SOURCE_SENSITIVE content; does not scan the whole repo.');
	process.exit(1);
} else {
	runScan(args.map((f) => resolve(process.cwd(), f)));
}
