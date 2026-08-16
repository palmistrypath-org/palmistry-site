# Relay Current Task

Status: AUTHORIZED

## Task ID
PP-RELAY-002

## Revision
1

## Objective
Add a small, deterministic GitHub Actions validation workflow so ordinary pull requests and pushes to `main` automatically prove that the Palmistry Path site still builds and that its existing repository audits pass.

The repository currently has strong local validation scripts but no general CI workflow beyond Relay dispatch. Reuse those existing scripts rather than inventing a new test framework.

## Authorized scope
- Inspect `package.json`, `package-lock.json`, `AGENTS.md`, and the existing `.github/workflows/relay-dispatch.yml` before editing.
- Add exactly one general-purpose validation workflow under `.github/workflows/` for pull requests targeting `main` and pushes to `main`.
- Use the Node version compatible with the repository's declared engine (`>=22.12.0`), `npm ci`, and existing scripts.
- The workflow should run, in a sensible order, at minimum:
  - `npm run build`
  - `npm run content-audit`
  - `npm run audit:all`
- Keep permissions least-privilege/read-only unless GitHub requires otherwise for checkout.
- Add practical concurrency/cancellation behavior so superseded PR runs do not waste resources, if this can be done without complexity.
- Keep the Relay dispatch workflow behavior unchanged.
- Update only directly relevant project docs/changelog if required by `AGENTS.md`.

## Non-goals / prohibited changes
- No production deployment, Cloudflare/Vercel changes, Pages publishing, secrets, credentials, or environment-variable changes.
- No dependency upgrades or lockfile changes unless absolutely required to make the existing locked install work; if required, stop with `HUMAN_REQUIRED` instead of changing dependencies.
- No article/lesson/content edits, palmistry claims, SEO strategy changes, visual changes, monetization changes, or curriculum work.
- Do not modify existing audit semantics merely to make CI green.
- Do not merge the PR or choose the next task.

## Acceptance criteria
- A new PR/main validation workflow exists and is syntactically valid YAML.
- It runs on pull requests to `main` and pushes to `main`.
- It checks out the repository, sets up a compatible Node 22 environment, installs from `package-lock.json` with `npm ci`, builds the site, and executes both `content-audit` and `audit:all` using the existing scripts.
- Workflow permissions are no broader than needed.
- `relay-dispatch.yml` behavior remains unchanged.
- Local equivalents of the workflow commands pass from a clean dependency install, or any pre-existing/environment-only failure is clearly demonstrated rather than masked.
- Final diff is limited to CI/tooling and directly relevant documentation.

## Required verification
- Run `npm ci` (or establish a clean equivalent if the environment already has dependencies), then `npm run build`, `npm run content-audit`, and `npm run audit:all`.
- Validate the workflow YAML with an available parser/linter or careful deterministic parse/check; do not add a dependency solely for YAML linting.
- Inspect Git diff for unintended changes, especially `package-lock.json`, content, and the existing Relay workflow.
- `git diff --check`.

## Human gates
All Palmistry Relay human gates remain in force. If CI requires secrets, paid services, deployment permissions, dependency upgrades, or a broad tooling redesign, stop with `HUMAN_REQUIRED`.

## Expected result
Push a `claude/relay-PP-RELAY-002-...` branch and open exactly one PR to `main` titled with `[RELAY PP-RELAY-002]`. Include implementation summary, verification evidence, risks, and:

`RELAY_TASK_ID: PP-RELAY-002`

`RELAY_TASK_REVISION: 1`

`RELAY_RESULT: READY_FOR_REVIEW`

Stop after the PR/result.
