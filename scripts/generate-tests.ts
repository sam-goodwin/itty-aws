#!/usr/bin/env bun
/**
 * Generate Tests Agent
 *
 * Uses the Claude Agent SDK to generate tests for all operations (or a specific
 * one) in an SDK package. For each operation, generates at least 1 happy path
 * test and at least 1 error test for every non-generic (operation-specific) error.
 *
 * Authentication: uses your Claude Max plan via the Claude Code CLI auth.
 * Make sure you're logged in with `claude` before running.
 *
 * Usage:
 *   bun scripts/generate-tests.ts <provider>
 *   bun scripts/generate-tests.ts <provider> --operation createProject
 *
 * Examples:
 *   bun scripts/generate-tests.ts neon                         # All operations
 *   bun scripts/generate-tests.ts neon --operation createProject  # Single operation
 *   bun scripts/generate-tests.ts cloudflare --operation createBucket
 */

import { BunRuntime, BunServices } from "@effect/platform-bun";
import { Console, Effect, Option } from "effect";
import * as FileSystem from "effect/FileSystem";
import * as Path from "effect/Path";
import { Argument, Command, Flag } from "effect/unstable/cli";
import { AgentError, AgentStatsAccumulator, BOLD, CYAN, DIM, GREEN, RED, RESET, YELLOW, runAgent } from "./lib/agent.ts";
import {
  ensureMetadataDir,
  metadataPromptSection,
  metadataRelPath,
} from "./lib/metadata.ts";

// ============================================================================
// Prompt Construction
// ============================================================================

function buildPrompt(provider: string, root: string, operation?: string, reset?: boolean): string {
  const pkgDir = `packages/${provider}`;

  const scopeDescription = operation
    ? `Your goal is to generate comprehensive tests for the \`${operation}\` operation.`
    : `Your goal is to generate comprehensive tests for the ${provider} SDK, covering
as many operations as possible. For large SDKs (100+ operations), focus on CRUD
operations for every major resource type rather than trying to test every single
endpoint. Prioritize operations that create, read, update, delete, and list resources.`;

  const scopeWorkflow = operation
    ? `
### Step 3: Generate tests for \`${operation}\`
${reset ? `**RESET MODE**: Find any existing test file that contains tests for \`${operation}\`,
remove the describe block for \`${operation}\` from it, then regenerate those tests fresh.
If the file becomes empty (no other describe blocks), delete it entirely.` : ""}
Find the operation source, read its input/output schemas and error types, then
generate tests following the rules below.

After writing, run the tests to verify they pass:
\`\`\`
bun run test -- --run ${operation}
\`\`\`
from ${pkgDir}/. If tests fail, fix and re-run.`
    : `
### Step 3: Generate tests for each resource type
${reset ? `**RESET MODE**: All existing test files (*.test.ts) have been deleted. Regenerate
tests from scratch for every operation. The setup/helper file has been preserved.` : ""}

**For small SDKs (<50 operations):** test every operation.
**For large SDKs (50+ operations):** identify every distinct resource type
(e.g. customers, products, invoices, projects, branches, buckets, workers)
and generate a FULL CRUD test suite for each one.

For each resource type, generate a test file (e.g. \`customers.test.ts\`) with:
1. Happy path: create, get/show, update, list, delete (where applicable)
2. Error path: at least 1 error test PER operation (non-existent ID, invalid input, etc.)
3. ${reset ? "Generate tests (all old tests have been cleared)" : "Check if tests already exist (skip if fully covered)"}

**IMPORTANT: EVERY test file MUST have both happy path AND error tests.
If you write a test file with only happy paths, go back and add error tests.**

After writing all tests, run the full test suite to verify:
\`\`\`
bun run test
\`\`\`
from ${pkgDir}/. If tests fail, fix and re-run.`;

  return `
You are a test generation agent for the ${provider} SDK in the Distilled monorepo.

${scopeDescription}

For each operation you MUST generate BOTH:
1. At least 1 happy path test (successful API call with assertions on the response)
2. At least 1 error test — triggering a real API error and asserting the SDK maps
   it to the correct typed error class (NOT just testing happy paths!)

**CRITICAL: Every test file MUST have error tests. A file with only happy path tests
is INCOMPLETE and UNACCEPTABLE.**

${metadataPromptSection(provider)}

## Repository Structure

The monorepo root is: ${root}
The SDK package is at: ${pkgDir}/

## CRITICAL: Study Before Writing

Before writing ANY test code, you MUST:

1. **Read the test setup file** — this is the MOST important file:
   - ${pkgDir}/tests/setup.ts or ${pkgDir}/test/test.ts
   - This shows you how layers are provided, how \`runEffect\` works, etc.

2. **Read existing test files** to understand the EXACT patterns used:
   - List ${pkgDir}/tests/ or ${pkgDir}/test/ to see all test files
   - Read at least 2 existing test files FULLY to understand the style
   - Pay attention to: imports, describe/it nesting, layer provision, cleanup

3. **Read the operation sources** to understand inputs, outputs, and errors:
   - List ${pkgDir}/src/operations/ or ${pkgDir}/src/services/
   - For each operation, read its input schema, output schema, and error types

4. **Read the credentials file** to understand auth configuration:
   - ${pkgDir}/src/credentials.ts

## CRITICAL: Import Paths (Effect 4)

This project uses **Effect 4** which has different import paths from Effect 3.
DO NOT guess import paths. ALWAYS copy them from existing test files.

Key imports:
- \`FetchHttpClient\` is at \`effect/unstable/http/FetchHttpClient\` — NOT \`@effect/platform\`
- \`Effect.catch\` replaces \`Effect.catchAll\` (Effect 4 breaking change)
- CLI tools at \`effect/unstable/cli\`

## Your Workflow

### Step 1: Understand the test infrastructure
Read the setup/test helper file and at least 2 existing test files completely.

### Step 2: Inventory operations and existing coverage
List all operations. Check which ones already have tests. Identify gaps.
${scopeWorkflow}

## Test Patterns

### Two test frameworks are used:

**Pattern A: Neon / PlanetScale / Stripe (vitest + runEffect helper)**
\`\`\`typescript
import { Effect } from "effect";
import { describe, expect, it, beforeAll, afterAll } from "vitest";
import { runEffect, testRunId, setupTestProject, teardownTestProject, getTestProject } from "./setup";
import { someOperation } from "../src/operations/someOperation";

describe("SomeService", () => {
  beforeAll(async () => { await setupTestProject("suffix"); }, 60_000);
  afterAll(async () => { await teardownTestProject("suffix"); }, 60_000);

  describe("someOperation", () => {
    it("happy path - does something", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* someOperation({ ... });
          expect(result).toBeDefined();
        })
      );
    }, 30_000);

    it("error - NotFound for non-existent resource", async () => {
      await runEffect(
        someOperation({ id: "non-existent" }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        )
      );
    }, 30_000);
  });
});
\`\`\`

**Pattern B: Cloudflare (@effect/vitest + custom test helper)**
\`\`\`typescript
import { describe, expect } from "vitest";
import * as Effect from "effect/Effect";
import { test, getAccountId, testRunId } from "./test.ts";
import * as ServiceName from "~/services/serviceName";

describe("ServiceName", () => {
  describe("operationName", () => {
    test("happy path - creates a resource", () =>
      Effect.gen(function* () {
        const result = yield* ServiceName.operationName({ ... });
        expect(result).toBeDefined();
      }));

    test("error - SpecificError for bad input", () =>
      ServiceName.operationName({ bad: "input" }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("SpecificError")),
      ));
  });
});
\`\`\`

### Resource naming
ALWAYS include \`testRunId\` in resource names to prevent collisions:
\`\`\`typescript
const resourceName = \`distilled-${provider}-\${testname}-\${testRunId}\`;
\`\`\`

### Resource cleanup
ALWAYS clean up resources, even on failure:
\`\`\`typescript
// Cleanup-first pattern
yield* deleteResource({ ... }).pipe(Effect.ignore);
// Create
const result = yield* createResource({ ... });
// Use + cleanup
yield* testFn().pipe(
  Effect.ensuring(deleteResource({ ... }).pipe(Effect.ignore))
);
\`\`\`

### Error testing patterns

**ALWAYS check errors using \`_tag\`.** This is the canonical way to identify
errors in this codebase. Never use \`instanceof\`, \`rejects.toThrow()\`,
or other patterns.

\`\`\`typescript
// GOOD — check _tag with Effect.flip
someOperation({ ... }).pipe(
  Effect.flip,
  Effect.map((e) => expect(e._tag).toBe("NotFound")),
)

// GOOD — matchEffect when you need to assert success doesn't happen
someOperation({ ... }).pipe(
  Effect.matchEffect({
    onFailure: (e) => Effect.succeed(expect(e._tag).toBe("NotFound")),
    onSuccess: () => Effect.succeed(expect.fail("should have failed")),
  }),
)
\`\`\`

**BANNED patterns — never use these:**
\`\`\`typescript
// BAD — instanceof is fragile and verbose
expect(error).toBeInstanceOf(NotFound);
expect((error as NotFound)._tag).toBe("NotFound"); // redundant double-check

// BAD — rejects.toThrow doesn't work with Effect error channels
expect(promise).rejects.toThrow(NotFound);

// BAD — checking error.name or error.message instead of _tag
expect(error.name).toBe("NotFound");
\`\`\`

## CRITICAL: NEVER Swallow Errors In Happy Path Tests

**The following pattern is BANNED. Never write this:**

\`\`\`typescript
// BAD — silently passes the test when the operation fails
const result = yield* someOperation({ ... }).pipe(
  Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
  Effect.catchTag("BadRequest", () => Effect.succeed(undefined)),
  Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
);
if (result === undefined) return; // <-- test passes even though the operation failed!
expect(result).toBeDefined();
\`\`\`

This is wrong because:
- The test passes even when the API call fails
- Errors are silently swallowed — you will never know the test is broken
- It defeats the entire purpose of having a test

**Instead, use these patterns:**

### Happy path tests: let errors propagate
\`\`\`typescript
// GOOD — if the operation fails, the test fails
it("happy path - creates a project", async () => {
  await runEffect(
    Effect.gen(function* () {
      const result = yield* createProject({ name: \`test-\${testRunId}\` });
      expect(result.id).toBeDefined();
    }).pipe(
      Effect.ensuring(
        deleteProject({ project_id: result.id }).pipe(Effect.ignore),
      ),
    ),
  );
}, 30_000);
\`\`\`

### Error tests: use Effect.flip
\`\`\`typescript
// GOOD — explicitly tests that the operation fails with the expected error
it("error - NotFound for non-existent project", async () => {
  await runEffect(
    getProject({ project_id: "nonexistent" }).pipe(
      Effect.flip,
      Effect.map((e) => expect(e._tag).toBe("NotFound")),
    ),
  );
}, 30_000);
\`\`\`

### Transient/eventual-consistency errors: use Effect.retry
\`\`\`typescript
// GOOD — retries on eventual consistency, fails on unexpected errors
it("happy path - gets queue after creation", async () => {
  await runEffect(
    Effect.gen(function* () {
      yield* createQueue({ name: \`test-\${testRunId}\` });
      const result = yield* getQueue({ name: \`test-\${testRunId}\` }).pipe(
        Effect.retry({
          while: (err) => err._tag === "QueueDoesNotExist",
          schedule: Schedule.spaced("1 second").pipe(
            Schedule.both(Schedule.recurs(10)),
          ),
        }),
      );
      expect(result).toBeDefined();
    }),
  );
}, 30_000);
\`\`\`

### Beta/tier-restricted endpoints: skip the test
\`\`\`typescript
// GOOD — skip if the feature isn't available, don't silently pass
it("happy path - enables beta feature", async (ctx) => {
  // This endpoint requires enterprise tier
  if (!hasEnterpriseTier) return ctx.skip();
  await runEffect(/* ... */);
}, 30_000);
\`\`\`

### Summary of rules:
- **Happy path**: NO catchTag at all. Let errors propagate and fail the test.
- **Error path**: Use Effect.flip + assert the \_tag. Never catch-and-succeed.
- **Transient errors**: Use Effect.retry with a \`while\` predicate and schedule.
- **Unavailable features**: Skip the test, don't silently pass it.
- **Cleanup code**: Effect.ignore is fine ONLY in cleanup/teardown (Effect.ensuring),
  never in the test body itself.

## What Errors to Test

There are TWO levels of error typing in these SDKs. You must handle both.

### Level 1: Per-operation errors (Neon, PlanetScale, Cloudflare, AWS)
Some SDKs define \`errors: [NotFound, BadRequest]\` in each operation.
For these, test every non-generic error in the array. Generic errors
(Unauthorized, TooManyRequests, InternalServerError) don't need tests.

### Level 2: Client-level error mapping (Stripe, Supabase, etc.)
Some SDKs have NO per-operation error arrays. Instead, errors are mapped
by the \`matchError\` function in \`client.ts\` based on HTTP status codes
and the error response body shape. **You MUST still test errors for these SDKs!**

To find what errors to test:
1. Read \`${pkgDir}/src/errors.ts\` — find all custom error classes beyond the
   generic ones (e.g. \`InvalidRequestError\`, \`CardError\`, \`IdempotencyError\`)
2. Read \`${pkgDir}/src/client.ts\` — find the \`matchError\` function to see how
   errors are dispatched (by error type string, HTTP status code, etc.)
3. For each custom error class, write a test that triggers it via a real API call

## CRITICAL: UnknownXxxError Is ALWAYS A Bug — Fix It, Never Accept It

**The string "Unknown" must NEVER appear in any test file.** This includes:

- \`expect(e._tag).toBe("UnknownXxxError")\` — BANNED
- \`["Unauthorized", "UnknownFlyIoError"].toContain(e._tag)\` — BANNED
- \`Effect.catchTag("UnknownNeonError", ...)\` — BANNED
- Any assertion, array, or catchTag that references an Unknown error — BANNED

An \`UnknownXxxError\` (e.g. \`UnknownCloudflareError\`, \`UnknownNeonError\`,
\`UnknownFlyIoError\`, \`UnknownStripeError\`) means the API returned an error
that the SDK's \`matchError\` function in \`client.ts\` does not handle.
This is a BUG in the SDK, not expected behavior. Your job is to FIX it.

### When you encounter UnknownXxxError, STOP generating tests and fix the bug:

1. **Run with \`DEBUG=1\`** to see the raw HTTP error response:
   \`\`\`
   DEBUG=1 bun run test -- --run operationName 2>&1 | head -100
   \`\`\`

2. **Identify the root cause** — common causes:
   - **Non-JSON error response**: The API returns plain text (e.g. "Unauthorized"),
     HTML, or an empty body on 401/403/404/etc. The \`matchError\` function only
     handles JSON responses and falls through to UnknownXxxError for non-JSON.
   - **Unexpected JSON shape**: The error JSON has a different structure than
     what \`matchError\` expects (e.g. \`{ "error": "msg" }\` vs \`{ "message": "msg" }\`)
   - **Missing status code handling**: The \`matchError\` function doesn't have a
     case for this HTTP status code

3. **Fix the \`matchError\` function** in \`${pkgDir}/src/client.ts\`:
   - Add handling for non-JSON responses by checking Content-Type or catching
     JSON parse failures and mapping based on HTTP status code alone
   - Add cases for missing status codes (e.g. map 401 → Unauthorized, 403 → Forbidden)
   - Example fix for non-JSON 401:
     \`\`\`typescript
     // In matchError, before trying to parse JSON:
     if (status === 401) return new Unauthorized({ ... });
     if (status === 403) return new Forbidden({ ... });
     \`\`\`

4. **OR create a patch** if the error is operation-specific:
   - For OpenAPI SDKs: add a JSON Patch entry to \`patches/*.patch.json\`
   - For Cloudflare: add an error matcher to \`patches/{service}/{operation}.json\`
   - For AWS: add the error to \`patches/{service}.json\`

5. **Regenerate** if you modified patches: \`bun run generate\`

6. **Verify the fix**: re-run the failing test and confirm the error now comes
   back as a typed error (e.g. \`Unauthorized\`, \`NotFound\`, \`BadRequest\`)

7. **THEN write the test** asserting the NEW typed error class

Example workflow:
\`\`\`
# 1. You try to trigger a 401 error for a Forbidden test
getToken({ token_id: "bad" })  →  UnknownFlyIoError

# 2. DEBUG=1 shows: HTTP 401, body is plain text "Unauthorized" (not JSON)

# 3. Fix matchError in client.ts to handle non-JSON 401 responses:
#    if (status === 401) return new Unauthorized({ message: body, statusCode: 401 });

# 4. Re-run: getToken({ token_id: "bad" })  →  Unauthorized  ✓

# 5. Write the test:
getToken({ token_id: "bad" }).pipe(
  Effect.flip,
  Effect.map((e) => expect(e._tag).toBe("Unauthorized")),
)
\`\`\`

### IMPORTANT: Fix the client, not the test

The correct fix is ALWAYS to improve the SDK's error handling so that
\`UnknownXxxError\` never occurs for standard HTTP error codes (400, 401,
403, 404, 409, 422, 429, 500, 502, 503). The test should assert a
properly typed error class. If you find yourself wanting to write
\`UnknownXxxError\` in a test, you have found a bug — fix it first.

### How to trigger common errors via API calls

For EVERY operation that takes a resource ID, test with a non-existent ID:
\`\`\`typescript
// GET /resource/:id with bad ID → NotFound or InvalidRequestError
getResource({ id: "nonexistent_00000000" }).pipe(
  Effect.flip,
  Effect.map((e) => expect(e._tag).toBe("NotFound")),
)
\`\`\`

For EVERY operation that creates a resource, test with invalid input:
\`\`\`typescript
// POST with invalid/missing required fields → BadRequest or InvalidRequestError
createResource({ name: "" }).pipe(
  Effect.flip,
  Effect.map((e) => expect(e._tag).toBe("InvalidRequestError")),
)
\`\`\`

For EVERY operation that deletes a resource, test with a non-existent ID:
\`\`\`typescript
deleteResource({ id: "nonexistent_00000000" }).pipe(
  Effect.flip,
  Effect.map((e) => expect(e._tag).toBe("NotFound")),
)
\`\`\`

Other common error triggers:
- **Duplicate creation**: create the same resource twice (Conflict/AlreadyExists)
- **Invalid parameters**: negative amounts, invalid currencies, malformed IDs
- **Missing required fields**: omit required fields to trigger validation errors

### Stripe-specific error testing
Stripe has these custom error classes in errors.ts:
- \`InvalidRequestError\` — triggered by bad parameters, non-existent resources
- \`CardError\` — triggered by declined cards (use test card \`tok_chargeDeclined\`)
- \`IdempotencyError\` — conflicting idempotency keys
- \`PaymentError\` — HTTP 402

At minimum, test \`InvalidRequestError\` for every resource type by using
non-existent IDs (e.g. \`cus_nonexistent000\`, \`pi_nonexistent000\`).

### Cloudflare-specific error testing
Cloudflare has per-operation errors with numeric codes. Each error class
uses \`T.applyErrorMatchers\` with codes like \`{ code: 10004 }\`. Test them
by triggering the condition (invalid names, duplicate resources, etc.).

## Where to Write Tests

- Check if a test file already exists for this operation/service
- If yes, ADD tests to the existing file (don't duplicate describe blocks)
- If no, create a new test file following the naming convention of existing files
- Group related operations together (e.g. all CRUD operations for the same resource)

## These Are Tests — Destructive Operations Are Fine

All tests run against TEST data. Every resource is created by the test, owned
by the test, and cleaned up by the test. There is NO production data at risk.

- **Destructive operations** (delete, restore, overwrite, purge, destroy) are
  not just fine — they MUST be tested. Never skip a happy path because the
  operation is "destructive" or "risky."
- **If an operation needs a prerequisite resource** (e.g. a backup to test restore,
  a database to test delete, a snapshot to test revert), create it as part of the
  test setup. This is normal test infrastructure.
- **Never write a "conditional" or "best-effort" happy path** that doesn't actually
  call the operation. If the happy path says "creates a backup and restores it",
  then the test must actually create a backup and restore it.
- **Never skip a happy path test** because you think it might be dangerous. The
  only reason to skip is if the operation requires credentials or tier access
  that the test environment doesn't have (e.g. enterprise-only features).

## Rules
- Match the EXACT test style used in existing test files for this package
- Use the same imports, layer provision, and helpers as existing tests
- Include timeouts on all tests that hit real APIs: \`{ timeout: 30_000 }\` or the second arg
- Always clean up resources you create
- Always include testRunId in resource names
- If tests fail, read the error output, fix the tests, and re-run
- Only use dependencies already installed — do NOT run \`bun add\`
- Skip operations that require credentials or tier access you don't have (e.g.
  enterprise-only, billing, admin-only) but note them in a comment
- **EVERY test file MUST have error tests, not just happy paths**
- **After writing each test file, review it and count: if there are 0 error tests, ADD SOME**
- **The word "Unknown" must NEVER appear in any test file** — no assertions, no arrays, no catchTag. Fix the client's matchError or add a patch instead.
- **NEVER use catchTag + succeed(undefined) in test bodies** — this swallows errors and makes tests meaninglessly pass
- **Happy paths: let errors propagate.** Error paths: use Effect.flip + check \`_tag\`. Transient: use Effect.retry.
- **ALWAYS check errors via \`_tag\`** — never use \`instanceof\`, \`rejects.toThrow()\`, or \`error.name\`
- Read errors.ts and client.ts to understand the SDK's error mapping before writing tests
`.trim();
}

// ============================================================================
// Phase 1: Research Prompt
// ============================================================================

function buildResearchPrompt(provider: string): string {
  const pkgDir = `packages/${provider}`;
  const metaPath = metadataRelPath(provider);

  return `
You are a test generation agent for the ${provider} SDK. Your task right now is
RESEARCH ONLY — do NOT write any test files yet.

${metadataPromptSection(provider)}

## Your Task

Study the SDK thoroughly and update \`${metaPath}\` with a complete manifest of
all operations that need tests. Read the file first — earlier pipeline stages
may have already filled in \`layout\`, \`baseUrl\`, \`authScheme\`, \`envVars\`, etc.
If they have, trust those values and skip re-discovering them.

### Step 1: Read the test infrastructure (only if metadata doesn't cover it)
1. Read ${pkgDir}/tests/setup.ts or ${pkgDir}/test/test.ts (the test helper)
2. Read at least 2 existing test files to understand the exact patterns
3. Read ${pkgDir}/src/errors.ts to understand all error classes
4. Read ${pkgDir}/src/client.ts to understand error matching (the matchError function)
5. Read ${pkgDir}/src/credentials.ts to understand auth

### Step 2: List ALL operations
Check BOTH directories (SDKs use one or the other, not both):
- \`${pkgDir}/src/operations/\` — flat per-operation files (Neon, PlanetScale, Stripe, etc.)
- \`${pkgDir}/src/services/\` — grouped per-service files (Cloudflare, AWS). Each
  service file exports multiple operations (e.g. \`createBucket\`, \`listBuckets\`).

Read the appropriate index (\`operations/index.ts\` or \`services/index.ts\`) AND
inspect individual files to enumerate every single operation. For services-style
SDKs, extract each exported operation from each service file — treat the service
name as a grouping, but still emit one manifest entry per operation.

Update the metadata file's \`layout\` key to \`"operations"\` or \`"services"\` based
on what you find.

### Step 3: For each operation, determine:
- The operation name (export name)
- The source file path — \`src/operations/<name>.ts\` or \`src/services/<serviceName>.ts\`
  (the same service file may be referenced by multiple operations)
- The HTTP method (GET, POST, PUT, PATCH, DELETE)
- What non-generic errors it can produce (from \`errors: [...]\` array if present,
  or from the client-level matchError for SDKs without per-operation errors)
- The test file: use ONE file per operation, named after the operation.
  Use the same directory as existing tests (tests/ or test/).
  Example: \`tests/getProject.test.ts\`, \`tests/createProject.test.ts\`, \`test/createBucket.test.ts\`

### Step 4: Write the manifest
Update \`${metaPath}\` — specifically the \`operations\` array — with entries like:

\`\`\`json
{
  "operations": [
    {
      "name": "getProject",
      "file": "src/operations/getProject.ts",
      "httpMethod": "GET",
      "errors": ["NotFound", "BadRequest"],
      "testFile": "tests/getProject.test.ts"
    },
    {
      "name": "createProject",
      "file": "src/operations/createProject.ts",
      "httpMethod": "POST",
      "errors": ["BadRequest", "Conflict"],
      "testFile": "tests/createProject.test.ts"
    }
  ]
}
\`\`\`

PRESERVE all other keys in the metadata file — only replace the \`operations\`
array. Use Read → parse → modify → Write, not blind overwrite.

IMPORTANT: Each operation gets its OWN test file. Do NOT group operations together.

For SDKs WITHOUT per-operation errors (like Stripe), list the client-level
error classes that could reasonably be triggered (e.g. InvalidRequestError
for any operation that takes an ID).

Include EVERY operation. Do not skip any.

### Rules
- Do NOT write any test files yet — only update the metadata file
- One test file per operation — do NOT group multiple operations into one file
`.trim();
}

// ============================================================================
// Phase 2: Per-Operation Prompt
// ============================================================================

function buildOperationPrompt(
  provider: string,
  root: string,
  operation: { name: string; file: string; errors: string[]; httpMethod: string; testFile: string },
  reset?: boolean,
): string {
  const pkgDir = `packages/${provider}`;
  const errorsDesc = operation.errors.length > 0
    ? `Non-generic errors to test: ${operation.errors.join(", ")}`
    : "No per-operation errors — test client-level errors (e.g. InvalidRequestError for bad IDs)";

  return `
Generate tests for the \`${operation.name}\` operation (${operation.httpMethod}) in the ${provider} SDK.

Source: ${pkgDir}/${operation.file}
Test file: ${pkgDir}/${operation.testFile} (this file is DEDICATED to this operation only)
${errorsDesc}

${reset ? `Delete ${pkgDir}/${operation.testFile} if it exists and recreate it from scratch.` : ""}

Write a complete test file at ${pkgDir}/${operation.testFile} with all necessary
imports, describe block, and both happy path + error tests.

You MUST generate:
1. At least 1 happy path test that ACTUALLY CALLS the operation and asserts the result
2. At least 1 error test for EACH error listed above

If no specific errors are listed, generate at minimum:
- 1 error test using a non-existent resource ID (expect NotFound or InvalidRequestError)
- 1 error test using invalid input parameters (expect BadRequest or InvalidRequestError)

**All tests run on test data — destructive operations are fine.** If the operation
is a delete, restore, overwrite, or destroy — test it. If it needs a prerequisite
resource (backup, snapshot, database), create it in the test setup. Never skip a
happy path because the operation is "destructive" or "risky."

Use the EXACT test patterns you learned during research. Match imports, layer
provision, describe/it nesting, timeouts, and cleanup patterns exactly.

Include testRunId in all resource names. Clean up resources with Effect.ensuring.

**CRITICAL RULES:**
- **The word "Unknown" must NEVER appear in the test file.** Not in assertions,
  not in arrays like \`["Unauthorized", "UnknownFlyIoError"]\`, not in catchTag,
  not in comments explaining expected behavior. If you encounter an UnknownXxxError
  when running a test, STOP — fix the SDK's matchError in client.ts to handle
  that error response (often non-JSON 401/403 responses that need status-code-based
  matching), then write the test against the properly typed error.
- **NEVER use \`Effect.catchTag("...", () => Effect.succeed(undefined))\` in test bodies.**
  This silently swallows errors and makes tests pass when they should fail.
  Happy path tests must let errors propagate. Error tests must use Effect.flip.
  Only use Effect.ignore in cleanup code inside Effect.ensuring.
- **Transient errors** (eventual consistency, recently deleted resources): use
  Effect.retry with a \`while\` predicate and schedule, not catch-and-succeed.

After writing, review the test file and check:
1. Are there ZERO error tests? That is WRONG — add error tests.
2. Does the word "Unknown" appear anywhere? That is WRONG — fix client.ts first.
3. Is there any \`instanceof\`, \`rejects.toThrow\`, or \`error.name\` check?
   That is WRONG — always use \`Effect.flip\` + \`expect(e._tag).toBe("...")\`.
4. Is there any \`Effect.catchTag(..., () => Effect.succeed(undefined))\` in the
   test body (not cleanup)? That is WRONG — remove it and let errors propagate.
`.trim();
}

// ============================================================================
// Validation
// ============================================================================

const validatePackage = (root: string, name: string) =>
  Effect.gen(function* () {
    const path = yield* Path.Path;
    const fs = yield* FileSystem.FileSystem;
    const pkgDir = path.join(root, "packages", name);

    const exists = yield* fs.exists(pkgDir);
    if (!exists) {
      const packagesDir = path.join(root, "packages");
      const entries = yield* fs
        .readDirectory(packagesDir)
        .pipe(Effect.catch(() => Effect.succeed([] as string[])));
      return yield* new AgentError({
        message: `Package "${name}" not found at ${pkgDir}. Available packages: ${entries.join(", ")}`,
      });
    }

    const srcDir = path.join(pkgDir, "src");
    const srcExists = yield* fs.exists(srcDir);
    if (!srcExists) {
      return yield* new AgentError({
        message: `Package "${name}" has no src/ directory — is it scaffolded?`,
      });
    }
  });

// ============================================================================
// CLI Command
// ============================================================================

const generateTests = Command.make(
  "generate-tests",
  {
    provider: Argument.string("provider").pipe(
      Argument.withDescription(
        "SDK package name (e.g. neon, cloudflare, stripe)",
      ),
    ),
    operation: Flag.string("operation").pipe(
      Flag.optional,
      Flag.withDescription(
        "Specific operation to generate tests for (default: all operations)",
      ),
    ),
    reset: Flag.boolean("reset").pipe(
      Flag.withDefault(false),
      Flag.withDescription(
        "Delete existing tests and regenerate them",
      ),
    ),
  },
  (config) =>
    Effect.gen(function* () {
      const path = yield* Path.Path;
      const fs = yield* FileSystem.FileSystem;
      const root = path.resolve(import.meta.dir, "..");
      const op = Option.getOrUndefined(config.operation);

      const scope = op ?? "all operations";
      yield* Console.log(
        `\n${BOLD}Generate Tests: ${config.provider} / ${scope}${RESET}`,
      );

      yield* validatePackage(root, config.provider);

      // Handle --reset: delete existing test files
      if (config.reset) {
        const testsDir = path.join(root, "packages", config.provider, "tests");
        const testDir = path.join(root, "packages", config.provider, "test");
        const dir = (yield* fs.exists(testsDir))
          ? testsDir
          : (yield* fs.exists(testDir))
            ? testDir
            : undefined;

        if (dir) {
          if (op) {
            // Single operation: delete its specific test file
            const testFile = path.join(dir, `${op}.test.ts`);
            if (yield* fs.exists(testFile)) {
              yield* fs.remove(testFile);
              yield* Console.log(
                `${YELLOW}Removed ${op}.test.ts (--reset)${RESET}`,
              );
            }
          } else {
            // All operations: delete all *.test.ts files (keep setup.ts / test.ts)
            const entries = yield* fs.readDirectory(dir);
            let removed = 0;
            for (const entry of entries) {
              if (entry.endsWith(".test.ts")) {
                yield* fs.remove(path.join(dir, entry));
                removed++;
              }
            }
            if (removed > 0) {
              yield* Console.log(
                `${YELLOW}Removed ${removed} test file(s) (--reset)${RESET}`,
              );
            }
          }
        }
      }

      const systemPromptAppend =
        "You are a test generation agent. Your job is to write thorough tests — " +
        "BOTH happy path AND error tests for every operation. A test file with only " +
        "happy paths is INCOMPLETE. You must read errors.ts and client.ts to understand " +
        "what error classes exist, then trigger real API errors (non-existent IDs, " +
        "invalid input, duplicates) and assert the SDK maps them to typed error classes. " +
        "The word 'Unknown' must NEVER appear in any test file — not in assertions, " +
        "not in arrays, not in catchTag. If you encounter UnknownXxxError, STOP and fix " +
        "the matchError function in client.ts (common cause: non-JSON 401/403 responses " +
        "that need status-code-based matching), then test the properly typed error. " +
        "NEVER use Effect.catchTag + Effect.succeed(undefined) to swallow errors in test " +
        "bodies. Happy path tests must let errors propagate. Error tests use Effect.flip. " +
        "Transient errors use Effect.retry. Effect.ignore is only for cleanup in Effect.ensuring. " +
        "All tests run on TEST data — destructive operations (delete, restore, overwrite) " +
        "are fine and MUST be tested. Never skip a happy path because it's 'destructive'. " +
        "If an operation needs a prerequisite resource, create it in the test setup. " +
        "ALWAYS read existing test files first to match the exact patterns. " +
        "When looking for files, prefer direct file reads over broad searches. " +
        "Always start by reading files at the package root directly.";

      const stats = new AgentStatsAccumulator();

      if (op) {
        // Single operation mode — one agent call
        yield* Console.log(
          `${DIM}Generating tests for ${op}...${RESET}\n`,
        );

        yield* runAgent({
          prompt: buildPrompt(config.provider, root, op, config.reset),
          cwd: root,
          systemPromptAppend,
        }, stats);
      } else {
        // All operations mode — two phases:
        // Phase 1: research & populate shared metadata file
        // Phase 2: resume session per-operation
        const pkgDir = `packages/${config.provider}`;
        yield* ensureMetadataDir(root);
        const manifestPath = metadataRelPath(config.provider);

        yield* Console.log(
          `${DIM}Phase 1: Researching SDK and building operation manifest...${RESET}\n`,
        );

        const researchResult = yield* runAgent({
          prompt: buildResearchPrompt(config.provider),
          cwd: root,
          systemPromptAppend,
        }, stats);

        const sessionId = researchResult.sessionId;

        // Read the metadata file
        const manifestRaw = yield* fs
          .readFileString(path.join(root, manifestPath))
          .pipe(
            Effect.catch(() =>
              Effect.succeed("[]"),
            ),
          );

        let operations: Array<{
          name: string;
          file: string;
          errors: string[];
          httpMethod: string;
          testFile: string;
        }>;
        try {
          const parsed = JSON.parse(manifestRaw);
          operations = Array.isArray(parsed) ? parsed : parsed.operations ?? [];
        } catch {
          yield* Console.log(
            `${RED}Failed to parse manifest — falling back to single agent call${RESET}\n`,
          );
          yield* runAgent({
            prompt: buildPrompt(config.provider, root, undefined, config.reset),
            cwd: root,
            systemPromptAppend,
          }, stats);
          yield* Console.log(
            `\n${GREEN}${BOLD}Test generation complete for ${config.provider} / ${scope}.${RESET}`,
          );
          stats.print();
          return;
        }

        // Filter out operations whose test files already exist (unless --reset)
        let skipped = 0;
        const toGenerate: typeof operations = [];
        for (const operation of operations) {
          const testFilePath = path.join(root, "packages", config.provider, operation.testFile);
          const testExists = yield* fs.exists(testFilePath);
          if (testExists && !config.reset) {
            skipped++;
          } else {
            toGenerate.push(operation);
          }
        }

        yield* Console.log(
          `\n${BOLD}Found ${operations.length} operations:${RESET} ` +
            `${toGenerate.length} to generate` +
            (skipped > 0 ? `, ${DIM}${skipped} skipped (test file exists)${RESET}` : ""),
        );

        // Phase 2: generate tests per operation, resuming the same session
        let completed = 0;
        for (const operation of toGenerate) {
          completed++;
          yield* Console.log(
            `\n${CYAN}[${completed}/${toGenerate.length}]${RESET} ${BOLD}${operation.name}${RESET} ${DIM}→ ${operation.testFile}${RESET}`,
          );

          yield* runAgent({
            prompt: buildOperationPrompt(config.provider, root, operation, config.reset),
            cwd: root,
            resume: sessionId,
            systemPromptAppend,
          }, stats);
        }

        // Phase 3: run the full test suite
        yield* Console.log(
          `\n${DIM}Running full test suite to verify...${RESET}\n`,
        );
        yield* runAgent({
          prompt: `Run the full test suite for ${pkgDir}/ with \`bun run test\` from that directory. If any tests fail, fix them and re-run until they pass. Report a summary of total tests, passed, and failed.`,
          cwd: root,
          resume: sessionId,
          systemPromptAppend,
        }, stats);
      }

      yield* Console.log(
        `\n${GREEN}${BOLD}Test generation complete for ${config.provider} / ${scope}.${RESET}`,
      );
      stats.print();
    }),
).pipe(
  Command.withDescription(
    "Generate happy path and error tests for SDK operations",
  ),
  Command.withExamples([
    {
      command: "bun scripts/generate-tests.ts neon",
      description: "Generate tests for all Neon operations",
    },
    {
      command: "bun scripts/generate-tests.ts neon --operation createProject",
      description: "Generate tests for Neon's createProject only",
    },
    {
      command: "bun scripts/generate-tests.ts cloudflare --operation createBucket",
      description: "Generate tests for Cloudflare's R2 createBucket",
    },
  ]),
);

// ============================================================================
// Entry Point
// ============================================================================

const program = Command.run(generateTests, { version: "1.0.0" });

BunRuntime.runMain(Effect.provide(program, BunServices.layer));
