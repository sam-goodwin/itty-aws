#!/usr/bin/env bun
/**
 * Generate Nuke Script
 *
 * Uses the Claude Agent SDK to generate a reusable nuke script for a cloud
 * provider. The generated script lives at packages/<provider>/scripts/nuke.ts
 * and can list or delete all resources in the account.
 *
 * If the nuke script already exists, this is a no-op.
 *
 * Authentication: uses your Claude Max plan via the Claude Code CLI auth.
 * Make sure you're logged in with `claude` before running.
 *
 * Usage:
 *   bun scripts/generate-nuke.ts <provider>
 *
 * Examples:
 *   bun scripts/generate-nuke.ts neon
 *   bun scripts/generate-nuke.ts cloudflare
 *   bun scripts/generate-nuke.ts aws
 *
 * Then run the generated script:
 *   bun packages/neon/scripts/nuke.ts --dry-run    # List only
 *   bun packages/neon/scripts/nuke.ts              # Delete everything
 */

import { BunRuntime, BunServices } from "@effect/platform-bun";
import { Console, Effect } from "effect";
import * as FileSystem from "effect/FileSystem";
import * as Path from "effect/Path";
import { Argument, Command, Flag } from "effect/unstable/cli";
import { AgentError, AgentStatsAccumulator, BOLD, DIM, GREEN, RESET, YELLOW, runAgent } from "./lib/agent.ts";
import { metadataPromptSection } from "./lib/metadata.ts";

// ============================================================================
// Prompt Construction
// ============================================================================

function buildPrompt(provider: string, root: string): string {
  const pkgDir = `packages/${provider}`;

  return `
You are a code generation agent. Your job is to create a nuke script for the
${provider} SDK that can list and delete all resources in a cloud account.

The generated script should be written to: ${pkgDir}/scripts/nuke.ts

${metadataPromptSection(provider)}

## Repository Structure

The monorepo root is: ${root}
The SDK package is at: ${pkgDir}/

Key files to study:
- ${pkgDir}/src/operations/ or ${pkgDir}/src/services/ — all API operations
- ${pkgDir}/src/credentials.ts — how credentials are configured
- ${pkgDir}/src/index.ts — main exports
- ${pkgDir}/tests/ — test files showing how to call operations and provide layers

## What the Generated Script Must Do

The nuke script at ${pkgDir}/scripts/nuke.ts should:

1. Accept a \`--dry-run\` flag (when set, only list resources; when absent, delete them)
2. Use Effect CLI (\`effect/unstable/cli\`) for argument parsing, following the same
   pattern as other scripts in scripts/ (e.g. see scripts/error-discovery.ts or scripts/create-sdk.ts)
3. Use the Distilled SDK (\`@distilled.cloud/${provider}\`) to make API calls
4. Load credentials from the environment via \`dotenv/config\` and the SDK's \`CredentialsFromEnv\`
5. Use \`@effect/platform-bun\` for BunRuntime/BunServices ONLY
6. Use \`effect/unstable/http/FetchHttpClient\` for FetchHttpClient — NOT \`@effect/platform\`

### Resource Enumeration

The script must enumerate ALL resource types available in the SDK by calling
every "list" operation. Study the operations/services directory to find them all.

For each resource type:
- Call the list operation
- Print each resource found (type, name/ID, key metadata)
- Check if the resource is excluded by the nuke config (see below)
- If excluded, print it as "SKIP" with the reason — do NOT delete it
- If NOT excluded and NOT dry-run, call the corresponding delete operation

### Nuke Config (Exclusions)

The script must load an optional config file at \`${pkgDir}/nuke-config.json\` that
lets users exclude resources from deletion. If the file doesn't exist, treat it
as no exclusions (delete everything).

The config format is:

\`\`\`json
{
  "exclude": [
    {
      "type": "Project",
      "ids": ["proj-abc123", "proj-def456"],
      "reason": "Production projects"
    },
    {
      "type": "Database",
      "namePatterns": ["prod-*", "staging-*"],
      "reason": "Non-test databases"
    },
    {
      "type": "Bucket",
      "namePatterns": ["important-*"],
      "reason": "Contains production data"
    }
  ]
}
\`\`\`

Each exclusion rule has:
- \`type\` (required): the resource type name (should match what the script prints, e.g. "Project", "Bucket", "Worker")
- \`ids\` (optional): array of exact resource IDs to exclude
- \`namePatterns\` (optional): array of glob patterns to match against resource names (support \`*\` wildcards)
- \`reason\` (optional): human-readable reason shown in output

**Loading the config:**
\`\`\`typescript
// Load nuke-config.json if it exists
import * as fs from "node:fs";
import * as path from "node:path";

interface ExcludeRule {
  type: string;
  ids?: string[];
  namePatterns?: string[];
  reason?: string;
}

interface NukeConfig {
  exclude?: ExcludeRule[];
}

function loadNukeConfig(pkgDir: string): NukeConfig {
  const configPath = path.join(pkgDir, "nuke-config.json");
  if (!fs.existsSync(configPath)) return {};
  return JSON.parse(fs.readFileSync(configPath, "utf-8"));
}

function isExcluded(config: NukeConfig, type: string, id: string, name?: string): ExcludeRule | undefined {
  if (!config.exclude) return undefined;
  return config.exclude.find(rule => {
    if (rule.type !== type) return false;
    if (rule.ids?.includes(id)) return true;
    if (name && rule.namePatterns?.some(p => matchGlob(p, name))) return true;
    return false;
  });
}

function matchGlob(pattern: string, value: string): boolean {
  const regex = new RegExp("^" + pattern.replace(/\\*/g, ".*") + "$");
  return regex.test(value);
}
\`\`\`

**Output format for excluded resources:**
\`\`\`
  [SKIP] Project: my-prod-project (id: proj-abc123) — Production projects
  [SKIP] Bucket: important-data (id: bucket-xyz) — Contains production data
  [DELETE] Project: test-project-abc (id: proj-test1)
\`\`\`

Use a yellow color for SKIP and red for DELETE in the output.

### Deletion Order

Resources must be deleted in dependency order. For example:
- Delete child resources before parents (branches before projects, objects before buckets)
- Delete resources that reference other resources first

### Error Handling

- Wrap each list/delete call in error handling — log failures and continue
- Use \`Effect.ignore\` or \`Effect.catch\` so one failure doesn't stop the whole run
- Print a final summary: total found, skipped (excluded), deleted, failed

### Output Format

The script should print clear, colored output:
- Use ANSI colors for readability
- Group resources by type
- Show excluded resources as SKIP with the reason from nuke-config.json
- In dry-run mode, print a summary table at the end (including skip counts)
- In live mode, print what's being deleted/skipped and a final summary

## How to Study the SDK

1. First, read ${pkgDir}/src/credentials.ts to understand auth setup
2. Read a test file to see the layer/provider pattern (CredentialsFromEnv, FetchHttpClient.layer, etc.)
3. List all operations: read ${pkgDir}/src/operations/index.ts or list ${pkgDir}/src/services/
4. For each "list*" or "describe*" operation, find the corresponding "delete*" operation
5. Read the input/output schemas to understand required parameters (e.g. account_id for Cloudflare)

## CRITICAL: Import Paths and Dependencies

This project uses **Effect 4** which has different import paths from Effect 3.
DO NOT guess import paths — always read the actual test/source files to confirm.

Key imports that are different from what you might expect:
- \`FetchHttpClient\` is at \`effect/unstable/http/FetchHttpClient\` — NOT \`@effect/platform\`
- \`BunRuntime\` and \`BunServices\` are at \`@effect/platform-bun\`
- CLI tools are at \`effect/unstable/cli\` — e.g. \`import { Command, Flag } from "effect/unstable/cli"\`
- \`Effect.catch\` replaces \`Effect.catchAll\` (Effect 4 breaking change)

ALWAYS read the test setup file (e.g. \`${pkgDir}/tests/setup.ts\`) before writing
imports. Copy the exact import paths used there.

Only use dependencies that are already in the package's \`package.json\` or the
root \`package.json\`. Do NOT add new dependencies. If you need a package that
isn't installed, find an alternative that is.

## Important Patterns

Look at the test files to understand:
- What layers need to be provided (credentials, HTTP client, region for AWS, etc.)
- Whether operations need account/org IDs as parameters
- How pagination works (some list operations return pages)

## Script Template

The script should follow this structure:

\`\`\`typescript
#!/usr/bin/env bun
import "dotenv/config";
import * as fs from "node:fs";
import * as nodePath from "node:path";
import { BunRuntime, BunServices } from "@effect/platform-bun";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { Console, Effect } from "effect";
import { Command, Flag } from "effect/unstable/cli";
// ... SDK imports ...

// Nuke config types and loading
interface ExcludeRule { type: string; ids?: string[]; namePatterns?: string[]; reason?: string; }
interface NukeConfig { exclude?: ExcludeRule[]; }

const PKG_DIR = nodePath.resolve(import.meta.dir, "..");
function loadNukeConfig(): NukeConfig {
  const p = nodePath.join(PKG_DIR, "nuke-config.json");
  if (!fs.existsSync(p)) return {};
  return JSON.parse(fs.readFileSync(p, "utf-8"));
}
function matchGlob(pattern: string, value: string): boolean {
  return new RegExp("^" + pattern.replace(/\\*/g, ".*") + "$").test(value);
}
function isExcluded(config: NukeConfig, type: string, id: string, name?: string): ExcludeRule | undefined {
  return config.exclude?.find(rule => {
    if (rule.type !== type) return false;
    if (rule.ids?.includes(id)) return true;
    if (name && rule.namePatterns?.some(p => matchGlob(p, name))) return true;
    return false;
  });
}

// Resource listing and deletion functions

const nuke = Command.make("nuke", { dryRun: Flag.boolean("dry-run").pipe(...) }, (config) =>
  Effect.gen(function* () {
    const nukeConfig = loadNukeConfig();
    // 1. List all resources
    // 2. For each: check isExcluded() — if excluded, print SKIP; otherwise delete
    // 3. Print summary (found, skipped, deleted, failed)
  }).pipe(
    Effect.provide(CredentialsFromEnv),
    Effect.provide(FetchHttpClient.layer),
  )
);

BunRuntime.runMain(
  Effect.provide(Command.run(nuke, { version: "1.0.0" }), BunServices.layer)
);
\`\`\`

## Rules
- Write the script to ${pkgDir}/scripts/nuke.ts
- Do NOT modify any other files in the SDK
- After writing the script, RUN it with \`bun ${pkgDir}/scripts/nuke.ts --dry-run\` to verify it works
- If it fails with import errors, module not found, or type errors — FIX IT and re-run until it works
- Only use dependencies already installed in the monorepo — do NOT run \`bun add\` or \`npm install\`
- Cover ALL resource types the SDK can list, not just common ones
- Handle pagination if the SDK supports it
- Use .ai-workspace/ for any scratch work
`.trim();
}

// ============================================================================
// Provider Validation
// ============================================================================

const validateProvider = (root: string, provider: string) =>
  Effect.gen(function* () {
    const path = yield* Path.Path;
    const fs = yield* FileSystem.FileSystem;
    const pkgDir = path.join(root, "packages", provider);

    const exists = yield* fs.exists(pkgDir);
    if (!exists) {
      const packagesDir = path.join(root, "packages");
      const entries = yield* fs
        .readDirectory(packagesDir)
        .pipe(Effect.catch(() => Effect.succeed([] as string[])));
      const providers = entries.filter((e: string) => e !== "core");
      return yield* new AgentError({
        message: `Provider "${provider}" not found. Available providers: ${providers.join(", ")}`,
      });
    }

    const srcDir = path.join(pkgDir, "src");
    const srcExists = yield* fs.exists(srcDir);
    if (!srcExists) {
      return yield* new AgentError({
        message: `Provider "${provider}" has no src/ directory — is it scaffolded?`,
      });
    }
  });

// ============================================================================
// CLI Command
// ============================================================================

const generateNuke = Command.make(
  "generate-nuke",
  {
    provider: Argument.string("provider").pipe(
      Argument.withDescription(
        "Cloud provider SDK name (e.g. aws, cloudflare, neon)",
      ),
    ),
    reset: Flag.boolean("reset").pipe(
      Flag.withDefault(false),
      Flag.withDescription(
        "Delete existing nuke script and regenerate it",
      ),
    ),
  },
  (config) =>
    Effect.gen(function* () {
      const path = yield* Path.Path;
      const fs = yield* FileSystem.FileSystem;
      const root = path.resolve(import.meta.dir, "..");
      const nukeScript = path.join(root, "packages", config.provider, "scripts", "nuke.ts");

      yield* Console.log(
        `\n${BOLD}Generate Nuke: ${config.provider}${RESET}`,
      );

      // Handle existing script
      const exists = yield* fs.exists(nukeScript);
      if (exists && config.reset) {
        yield* fs.remove(nukeScript);
        yield* Console.log(
          `${YELLOW}Removed existing nuke script (--reset)${RESET}`,
        );
      } else if (exists) {
        yield* Console.log(
          `\n${YELLOW}Nuke script already exists at packages/${config.provider}/scripts/nuke.ts${RESET}`,
        );
        yield* Console.log(
          `${DIM}Run it with: bun packages/${config.provider}/scripts/nuke.ts --dry-run${RESET}`,
        );
        yield* Console.log(
          `${DIM}Use --reset to regenerate${RESET}`,
        );
        return;
      }

      yield* validateProvider(root, config.provider);

      const stats = new AgentStatsAccumulator();

      yield* runAgent({
        prompt: buildPrompt(config.provider, root),
        cwd: root,
        systemPromptAppend:
          "You are generating a nuke script for a cloud provider SDK. " +
          "Study the SDK's operations, credentials, and test files thoroughly " +
          "before writing the script. The script must be complete and runnable. " +
          "When looking for files, prefer direct file reads over broad searches. " +
          "Always start by reading files at the package root directly.",
      }, stats);

      // Verify it was created
      const created = yield* fs.exists(nukeScript);
      if (created) {
        yield* Console.log(
          `\n${GREEN}${BOLD}Nuke script generated at packages/${config.provider}/scripts/nuke.ts${RESET}`,
        );
        yield* Console.log(
          `\n${DIM}Usage:${RESET}`,
        );
        yield* Console.log(
          `  bun packages/${config.provider}/scripts/nuke.ts --dry-run  ${DIM}# List all resources${RESET}`,
        );
        yield* Console.log(
          `  bun packages/${config.provider}/scripts/nuke.ts            ${DIM}# Delete everything${RESET}`,
        );
      } else {
        yield* Console.log(
          `\n${YELLOW}Warning: nuke script was not created at the expected path.${RESET}`,
        );
        yield* Console.log(
          `${DIM}Check .ai-workspace/ or the agent output for what was generated.${RESET}`,
        );
      }
      stats.print();
    }),
).pipe(
  Command.withDescription(
    "Generate a reusable nuke script for a cloud provider that lists and deletes all resources",
  ),
  Command.withExamples([
    {
      command: "bun scripts/generate-nuke.ts neon",
      description: "Generate a nuke script for the Neon SDK",
    },
    {
      command: "bun scripts/generate-nuke.ts cloudflare",
      description: "Generate a nuke script for the Cloudflare SDK",
    },
    {
      command: "bun scripts/generate-nuke.ts aws",
      description: "Generate a nuke script for the AWS SDK",
    },
  ]),
);

// ============================================================================
// Entry Point
// ============================================================================

const program = Command.run(generateNuke, { version: "1.0.0" });

BunRuntime.runMain(Effect.provide(program, BunServices.layer));
