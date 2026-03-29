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
import { AgentError, BOLD, CYAN, DIM, GREEN, RED, RESET, YELLOW, runAgent } from "./lib/agent.ts";

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
\`\`\`typescript
// Pattern 1: Effect.flip (simplest, for single error assertion)
someOperation({ ... }).pipe(
  Effect.flip,
  Effect.map((e) => expect(e._tag).toBe("SpecificError")),
)

// Pattern 2: matchEffect (when you need to assert success doesn't happen)
someOperation({ ... }).pipe(
  Effect.matchEffect({
    onFailure: (e) => Effect.succeed(expect(e._tag).toBe("SpecificError")),
    onSuccess: () => Effect.succeed(expect.fail("should have failed")),
  }),
)
\`\`\`

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

## Rules
- Match the EXACT test style used in existing test files for this package
- Use the same imports, layer provision, and helpers as existing tests
- Include timeouts on all tests that hit real APIs: \`{ timeout: 30_000 }\` or the second arg
- Always clean up resources you create
- Always include testRunId in resource names
- If tests fail, read the error output, fix the tests, and re-run
- Only use dependencies already installed — do NOT run \`bun add\`
- Skip operations that require resources you can't create (e.g. billing, admin-only)
  but note them in a comment
- **EVERY test file MUST have error tests, not just happy paths**
- **After writing each test file, review it and count: if there are 0 error tests, ADD SOME**
- Read errors.ts and client.ts to understand the SDK's error mapping before writing tests
`.trim();
}

// ============================================================================
// Phase 1: Research Prompt
// ============================================================================

function buildResearchPrompt(provider: string, root: string, manifestPath: string): string {
  const pkgDir = `packages/${provider}`;

  return `
You are a test generation agent for the ${provider} SDK. Your task right now is
RESEARCH ONLY — do NOT write any test files yet.

## Your Task

Study the SDK thoroughly and produce a JSON manifest of all operations that need tests.

### Step 1: Read the test infrastructure
1. Read ${pkgDir}/tests/setup.ts or ${pkgDir}/test/test.ts (the test helper)
2. Read at least 2 existing test files to understand the exact patterns
3. Read ${pkgDir}/src/errors.ts to understand all error classes
4. Read ${pkgDir}/src/client.ts to understand error matching (the matchError function)
5. Read ${pkgDir}/src/credentials.ts to understand auth

### Step 2: List ALL operations
Read ${pkgDir}/src/operations/index.ts or list ${pkgDir}/src/services/ to enumerate
every single operation in the SDK.

### Step 3: For each operation, determine:
- The operation name (export name)
- The source file path
- The HTTP method (GET, POST, PUT, PATCH, DELETE)
- What non-generic errors it can produce (from \`errors: [...]\` array if present,
  or from the client-level matchError for SDKs without per-operation errors)
- What test file it should go in (group related operations by resource type,
  e.g. customers.test.ts, projects.test.ts)

### Step 4: Write the manifest
Write a JSON file to ${manifestPath} with this structure:

\`\`\`json
[
  {
    "name": "getProject",
    "file": "src/operations/getProject.ts",
    "httpMethod": "GET",
    "errors": ["NotFound", "BadRequest"],
    "testFile": "tests/projects.test.ts"
  },
  {
    "name": "createProject",
    "file": "src/operations/createProject.ts",
    "httpMethod": "POST",
    "errors": ["BadRequest", "Conflict"],
    "testFile": "tests/projects.test.ts"
  }
]
\`\`\`

For SDKs WITHOUT per-operation errors (like Stripe), list the client-level
error classes that could reasonably be triggered (e.g. InvalidRequestError
for any operation that takes an ID).

Include EVERY operation. Do not skip any.

### Rules
- Do NOT write any test files yet — only the manifest
- Make sure .ai-workspace/ directory exists before writing
- Group operations into test files by resource type
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
Test file: ${pkgDir}/${operation.testFile}
${errorsDesc}

${reset ? `If ${pkgDir}/${operation.testFile} already has tests for ${operation.name}, remove them first.` : `If ${pkgDir}/${operation.testFile} already has tests for ${operation.name}, skip this operation.`}

You MUST generate:
1. At least 1 happy path test
2. At least 1 error test for EACH error listed above

If no specific errors are listed, generate at minimum:
- 1 error test using a non-existent resource ID (expect NotFound or InvalidRequestError)
- 1 error test using invalid input parameters (expect BadRequest or InvalidRequestError)

Use the EXACT test patterns you learned during research. Match imports, layer
provision, describe/it nesting, timeouts, and cleanup patterns exactly.

Include testRunId in all resource names. Clean up resources with Effect.ensuring.

After writing, do a quick sanity check — if the test file has ZERO error tests,
that is WRONG. Go back and add error tests.
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
            // Single operation: we don't know which file it's in, so tell the agent
            yield* Console.log(
              `${YELLOW}--reset with --operation: agent will remove existing tests for ${op} before regenerating${RESET}`,
            );
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
        "ALWAYS read existing test files first to match the exact patterns. " +
        "When looking for files, prefer direct file reads over broad searches. " +
        "Always start by reading files at the package root directly.";

      if (op) {
        // Single operation mode — one agent call
        yield* Console.log(
          `${DIM}Generating tests for ${op}...${RESET}\n`,
        );

        yield* runAgent({
          prompt: buildPrompt(config.provider, root, op, config.reset),
          cwd: root,
          systemPromptAppend,
        });
      } else {
        // All operations mode — two phases:
        // Phase 1: research & produce manifest
        // Phase 2: resume session per-operation
        const pkgDir = `packages/${config.provider}`;
        const manifestPath = `.ai-workspace/${config.provider}-test-manifest.json`;

        yield* Console.log(
          `${DIM}Phase 1: Researching SDK and building operation manifest...${RESET}\n`,
        );

        const sessionId = yield* runAgent({
          prompt: buildResearchPrompt(config.provider, root, manifestPath),
          cwd: root,
          systemPromptAppend,
        });

        // Read the manifest
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
          });
          yield* Console.log(
            `\n${GREEN}${BOLD}Test generation complete for ${config.provider} / ${scope}.${RESET}`,
          );
          return;
        }

        yield* Console.log(
          `\n${BOLD}Found ${operations.length} operations to test${RESET}\n`,
        );

        // Phase 2: generate tests per operation, resuming the same session
        let completed = 0;
        for (const operation of operations) {
          completed++;
          yield* Console.log(
            `\n${CYAN}[${completed}/${operations.length}]${RESET} ${BOLD}${operation.name}${RESET} ${DIM}→ ${operation.testFile}${RESET}`,
          );

          yield* runAgent({
            prompt: buildOperationPrompt(config.provider, root, operation, config.reset),
            cwd: root,
            resume: sessionId,
            systemPromptAppend,
          });
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
        });
      }

      yield* Console.log(
        `\n${GREEN}${BOLD}Test generation complete for ${config.provider} / ${scope}.${RESET}`,
      );
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
