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
import { AgentError, BOLD, DIM, GREEN, RESET, YELLOW, runAgent } from "./lib/agent.ts";

// ============================================================================
// Prompt Construction
// ============================================================================

function buildPrompt(provider: string, root: string, operation?: string, reset?: boolean): string {
  const pkgDir = `packages/${provider}`;

  const scopeDescription = operation
    ? `Your goal is to generate comprehensive tests for the \`${operation}\` operation.`
    : `Your goal is to generate comprehensive tests for ALL operations in the ${provider} SDK.`;

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
### Step 3: Generate tests for each operation
${reset ? `**RESET MODE**: All existing test files (*.test.ts) have been deleted. Regenerate
tests from scratch for every operation. The setup/helper file has been preserved.` : ""}
Go through ALL operations systematically. For each one:
1. Read its source to find input/output schemas and error types
2. ${reset ? "Generate tests (all old tests have been cleared)" : "Check if tests already exist for it (skip if fully covered)"}
3. Generate tests following the rules below
4. Group related operations into the same test file (e.g. all project operations
   in projects.test.ts, all branch operations in branches.test.ts)

After writing all tests, run the full test suite to verify:
\`\`\`
bun run test
\`\`\`
from ${pkgDir}/. If tests fail, fix and re-run.`;

  return `
You are a test generation agent for the ${provider} SDK in the Distilled monorepo.

${scopeDescription}

For each operation you must generate:
1. At least 1 happy path test (successful API call with assertions on the response)
2. At least 1 error test for EVERY non-generic error the operation can return

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

For each operation, test EVERY non-generic error.

**Generic errors** (from DefaultErrors) do NOT need dedicated tests:
- Unauthorized, TooManyRequests, InternalServerError, ServiceUnavailable, etc.

**Non-generic errors** MUST have at least 1 test each. These are:
- Operation-specific errors defined in the operation's error type
- Service-specific errors defined in the service file
- Errors in the operation's \`errors: [...]\` array

To find them:
1. Read the operation source to find its error type union
2. Subtract the generic DefaultErrors
3. What remains are the non-generic errors that need tests

For each non-generic error, figure out what input would trigger it:
- NotFound -> use a non-existent resource ID
- InvalidBucketName -> use an invalid name (empty, uppercase, special chars)
- BucketAlreadyExists -> create the same resource twice
- Forbidden -> use an unauthorized resource ID (sometimes returns for non-existent too)

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

      yield* Console.log(
        `${DIM}Generating happy path + error tests for ${scope}...${RESET}\n`,
      );

      yield* runAgent({
        prompt: buildPrompt(config.provider, root, op, config.reset),
        cwd: root,
        systemPromptAppend:
          "You are a test generation agent. Your job is to write thorough tests — " +
          "at least 1 happy path and 1 test per non-generic error for each operation. " +
          "ALWAYS read existing test files first to match the exact patterns. " +
          "When looking for files, prefer direct file reads over broad searches. " +
          "Always start by reading files at the package root directly.",
      });

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
