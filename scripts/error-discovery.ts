#!/usr/bin/env bun
/**
 * Error Discovery Agent
 *
 * Uses the Claude Agent SDK to autonomously discover undocumented API errors
 * by making real requests to production APIs, then patches the SDK specs
 * to add the newly discovered error types.
 *
 * Authentication: uses your Claude Max plan via the Claude Code CLI auth.
 * Make sure you're logged in with `claude` before running.
 *
 * Usage:
 *   bun scripts/error-discovery.ts <package-name>
 *
 * Examples:
 *   bun scripts/error-discovery.ts neon
 *   bun scripts/error-discovery.ts cloudflare
 *   bun scripts/error-discovery.ts stripe
 */

import { BunRuntime, BunServices } from "@effect/platform-bun";
import { Console, Effect } from "effect";
import * as FileSystem from "effect/FileSystem";
import * as Path from "effect/Path";
import { Argument, Command, Flag } from "effect/unstable/cli";
import { AgentError, AgentStatsAccumulator, BOLD, GREEN, RESET, runAgent } from "./lib/agent.ts";
import { metadataPromptSection } from "./lib/metadata.ts";

// ============================================================================
// Prompt Construction
// ============================================================================

function buildPrompt(
  name: string,
  root: string,
  services: readonly string[],
): string {
  const pkgDir = `packages/${name}`;

  const serviceScope = services.length > 0
    ? `

## SCOPE RESTRICTION

You MUST restrict this run to the following service(s) ONLY:
${services.map((s) => `  - ${s}`).join("\n")}

Concretely:
- Only inspect operations under ${pkgDir}/src/services/{${services.join(",")}}.ts
  (or, for SDKs with per-service operation directories, only those directories).
- Only write/run tests that exercise these services.
- Only add patches under paths scoped to these services
  (e.g. for cloudflare: ${pkgDir}/patches/{${services.join(",")}}/...).
- Ignore all other services even if you notice gaps in them — they are out of scope.
`
    : "";

  return `
You are an error discovery agent for the ${name} SDK in the Distilled monorepo.

Your goal is to discover undocumented API errors by examining the SDK's operations,
making real API requests that trigger error conditions, and then patching the SDK
to add typed error classes for any errors that currently fall through to the
Unknown*Error fallback.

${metadataPromptSection(name)}

When you discover a new typed error, append its class name to the \`errorClasses\`
array in the metadata file so downstream agents (test generation) know to cover it.
${serviceScope}
## Repository Structure

The monorepo root is: ${root}
The SDK package is at: ${pkgDir}/

Key files:
- ${pkgDir}/src/operations/ — generated operations (DO NOT hand-edit these)
- ${pkgDir}/src/errors.ts — error type definitions
- ${pkgDir}/src/client.ts — API client with error matching
- ${pkgDir}/tests/ — test files that exercise the API
- ${pkgDir}/patches/ — patch files that fix vendor spec inaccuracies
- ${pkgDir}/specs/ — vendor API specifications (git submodules)

## How Patches Work

Different SDKs use different patch formats:

### OpenAPI-based SDKs (neon, planetscale, prisma-postgres, stripe, etc.)
- Patches are JSON Patch (RFC 6902) files at \`patches/*.patch.json\`
- They modify the OpenAPI spec to add error responses, fix nullable fields, etc.
- After patching, run \`bun run generate\` to regenerate operations

### Cloudflare
- Patches are per-operation JSON files at \`patches/{service}/{operation}.json\`
- They map error class names to Cloudflare error code matchers
- Example: \`{ "errors": { "BucketAlreadyExists": [{ "code": 10004 }] } }\`
- After patching, run \`bun run generate\` to regenerate services

### AWS
- Patches are per-service JSON files at \`patches/{service}.json\`
- They map operation names to additional error class arrays
- Example: \`{ "operations": { "createBucket": { "errors": ["BucketNotEmpty"] } } }\`
- After patching, run \`bun run generate\` to regenerate services

## Your Workflow

### Step 1: Understand the current state
1. Read ${pkgDir}/src/errors.ts to understand existing error types
2. Read ${pkgDir}/src/client.ts to understand error matching
3. List ${pkgDir}/src/operations/ to see available operations
4. List ${pkgDir}/patches/ to see existing patches
5. Read a few test files in ${pkgDir}/tests/ to see how errors are tested
6. Identify the patch format this SDK uses (OpenAPI JSON Patch, Cloudflare-style, or AWS-style)

### Step 2: Identify operations with weak error typing
Look for operations that only have generic errors (DefaultErrors) and no
operation-specific error types. These are candidates for error discovery.
Also look for tests that assert \`UnknownXxxError\` — these are known gaps.

### Step 3: Trigger errors via real API requests
For each candidate operation, write and run a test script that triggers
common error conditions:
- Invalid/missing required parameters
- Non-existent resources (404-type errors)
- Duplicate creation (conflict errors)
- Invalid input values (validation errors)
- Permission/auth edge cases

Run the test with \`DEBUG=1\` to see the raw HTTP response, which reveals
the actual error shape (status code, error code, message format).

Use the existing test infrastructure:
- \`bun run test\` from ${pkgDir}/ runs vitest
- Write temporary test files in ${pkgDir}/tests/ or use .ai-workspace/
- Import credentials and client setup from the existing test helpers

### Step 4: Add patches for discovered errors
Based on the raw error responses you observe:
1. Determine the appropriate patch format for this SDK
2. Add new error entries to the patch files
3. Run \`bun run generate\` from ${pkgDir}/ to regenerate
4. Verify the new typed error classes appear in the generated code

### Step 5: Verify
1. Run \`bun run typecheck\` from ${pkgDir}/ — must pass
2. Run any existing tests to make sure nothing is broken
3. Summarize what errors you discovered and what patches you added

## Rules
- DO NOT hand-edit files in src/operations/ — they are generated
- DO edit patch files, errors.ts, client.ts, and test files
- Use .ai-workspace/ for scratch/temporary files
- Always run \`bun run generate\` after modifying patches
- Always run \`bun run typecheck\` after regenerating
- Be methodical: discover one error at a time, patch it, verify, move on
- If an API requires credentials you don't have, skip it and note why
`.trim();
}

// ============================================================================
// Package Validation
// ============================================================================

const validatePackage = (
  root: string,
  name: string,
  services: readonly string[],
) =>
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

    const opsDir = path.join(pkgDir, "src", "operations");
    const servicesDir = path.join(pkgDir, "src", "services");
    const hasOps = yield* fs.exists(opsDir);
    const hasServices = yield* fs.exists(servicesDir);
    if (!hasOps && !hasServices) {
      return yield* new AgentError({
        message: `Package "${name}" has no operations/ or services/ directory — run code generation first.`,
      });
    }

    if (services.length > 0) {
      if (!hasServices) {
        return yield* new AgentError({
          message: `--service filter is only supported for SDKs with a src/services/ directory; package "${name}" has none.`,
        });
      }
      const entries = yield* fs.readDirectory(servicesDir);
      const available = new Set(
        entries
          .filter((e) => e.endsWith(".ts") && e !== "index.ts")
          .map((e) => e.replace(/\.ts$/, "")),
      );
      const missing = services.filter((s) => !available.has(s));
      if (missing.length > 0) {
        return yield* new AgentError({
          message: `Unknown service(s) for "${name}": ${missing.join(", ")}. Available: ${[...available].sort().join(", ")}`,
        });
      }
    }
  });

// ============================================================================
// CLI Command
// ============================================================================

const errorDiscovery = Command.make(
  "error-discovery",
  {
    name: Argument.string("name").pipe(
      Argument.withDescription(
        "SDK package name (e.g. neon, cloudflare, stripe)",
      ),
    ),
    services: Flag.string("service").pipe(
      Flag.withDescription(
        "Restrict discovery to specific service(s) within the SDK (repeatable). Only supported for SDKs with a src/services/ directory (e.g. cloudflare). Pass the service file basename, e.g. --service r2 --service workers.",
      ),
      Flag.atLeast(0),
    ),
  },
  (config) =>
    Effect.gen(function* () {
      const path = yield* Path.Path;
      const root = path.resolve(import.meta.dir, "..");
      const services = config.services ?? [];

      yield* Console.log(
        `\n${BOLD}Error Discovery: @distilled.cloud/${config.name}${RESET}${
          services.length > 0 ? ` (services: ${services.join(", ")})` : ""
        }`,
      );

      yield* validatePackage(root, config.name, services);

      const stats = new AgentStatsAccumulator();

      yield* runAgent({
        prompt: buildPrompt(config.name, root, services),
        cwd: root,
        systemPromptAppend:
          "You are an error discovery agent. Your job is to find undocumented API errors " +
          "and add typed error classes to the SDK. Be methodical and thorough. " +
          "When looking for files, prefer direct file reads over broad searches. " +
          "Always start by reading files at the repo root or package root directly.",
      }, stats);

      yield* Console.log(
        `\n${GREEN}${BOLD}Error discovery complete for ${config.name}.${RESET}`,
      );
      stats.print();
    }),
).pipe(
  Command.withDescription(
    "Discover undocumented API errors and patch the SDK to add typed error classes",
  ),
  Command.withExamples([
    {
      command: "bun scripts/error-discovery.ts neon",
      description: "Discover errors in the Neon SDK",
    },
    {
      command: "bun scripts/error-discovery.ts cloudflare",
      description: "Discover errors in the Cloudflare SDK",
    },
    {
      command:
        "bun scripts/error-discovery.ts cloudflare --service r2 --service workers",
      description: "Discover errors only in Cloudflare's R2 and Workers services",
    },
    {
      command: "bun scripts/error-discovery.ts stripe",
      description: "Discover errors in the Stripe SDK",
    },
  ]),
);

// ============================================================================
// Entry Point
// ============================================================================

const program = Command.run(errorDiscovery, { version: "1.0.0" });

BunRuntime.runMain(Effect.provide(program, BunServices.layer));
