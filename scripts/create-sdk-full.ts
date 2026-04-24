#!/usr/bin/env bun
/**
 * End-to-end pipeline for creating a new SDK package.
 *
 * Chains the four stages in order:
 *   1. create-sdk          — scaffolds the package + initial generator
 *   2. error-discovery     — triggers real API errors and patches the SDK
 *   3. generate-tests      — writes happy-path + error tests
 *   4. generate-nuke       — writes the resource cleanup script
 *
 * Each stage runs as its own subprocess so the Claude Agent SDK session is
 * isolated. Output streams to the terminal live.
 *
 * Usage:
 *   bun scripts/create-sdk-full.ts <name> --specs <url-or-repo>... [flags]
 *
 * Flags:
 *   --register-package            Publish a 0.0.0 placeholder to npm
 *   --skip-create                 Skip the create-sdk stage (package already exists)
 *   --skip-error-discovery        Skip the error-discovery stage
 *   --skip-tests                  Skip the generate-tests stage
 *   --skip-nuke                   Skip the generate-nuke stage
 *   --continue-on-error           Keep running later stages even if one fails
 */

import { BunRuntime, BunServices } from "@effect/platform-bun";
import { spawn } from "node:child_process";
import { Console, Data, Effect } from "effect";
import * as Path from "effect/Path";
import { Argument, Command, Flag } from "effect/unstable/cli";
import { BOLD, DIM, GREEN, RED, RESET, YELLOW } from "./lib/agent.ts";
import { initMetadata } from "./lib/metadata.ts";

// ============================================================================
// Errors
// ============================================================================

class StageError extends Data.TaggedError("StageError")<{
  readonly stage: string;
  readonly code: number;
}> {}

// ============================================================================
// Subprocess Runner
// ============================================================================

const runStage = (
  label: string,
  scriptPath: string,
  args: string[],
  cwd: string,
): Effect.Effect<void, StageError, never> =>
  Effect.gen(function* () {
    yield* Console.log(
      `\n${BOLD}${"═".repeat(70)}${RESET}\n` +
        `${BOLD}▶ Stage: ${label}${RESET}\n` +
        `${DIM}  bun ${scriptPath} ${args.join(" ")}${RESET}\n` +
        `${BOLD}${"═".repeat(70)}${RESET}\n`,
    );

    const code = yield* Effect.callback<number, never>((resume) => {
      const cp = spawn("bun", [scriptPath, ...args], {
        cwd,
        stdio: "inherit",
        shell: process.platform === "win32",
      });
      cp.on("close", (c: number | null) => resume(Effect.succeed(c ?? 1)));
      cp.on("error", () => resume(Effect.succeed(1)));
    });

    if (code !== 0) {
      yield* Console.log(
        `\n${RED}✗ Stage "${label}" failed with exit code ${code}${RESET}`,
      );
      return yield* new StageError({ stage: label, code });
    }

    yield* Console.log(`\n${GREEN}✓ Stage "${label}" complete${RESET}`);
  });

// ============================================================================
// CLI Command
// ============================================================================

const createSdkFull = Command.make(
  "create-sdk-full",
  {
    name: Argument.string("name").pipe(
      Argument.withDescription("SDK package name (e.g. stripe, neon, fly-io)"),
    ),
    specs: Flag.string("specs").pipe(
      Flag.withDescription(
        "Spec source (git repo URL or HTTP URL to fetch). Can be repeated.",
      ),
      Flag.atLeast(0),
    ),
    registerPackage: Flag.boolean("register-package").pipe(
      Flag.withDefault(false),
      Flag.withDescription(
        "Publish a 0.0.0 placeholder to npm as @distilled.cloud/<name>",
      ),
    ),
    note: Flag.string("note").pipe(
      Flag.withDefault(""),
      Flag.withDescription(
        "Free-form guidance forwarded to every pipeline stage via metadata.json (e.g. 'the spec for this SDK is at restapi/versions/query in the submodule').",
      ),
    ),
    skipCreate: Flag.boolean("skip-create").pipe(
      Flag.withDefault(false),
      Flag.withDescription("Skip the create-sdk stage"),
    ),
    skipErrorDiscovery: Flag.boolean("skip-error-discovery").pipe(
      Flag.withDefault(false),
      Flag.withDescription("Skip the error-discovery stage"),
    ),
    skipTests: Flag.boolean("skip-tests").pipe(
      Flag.withDefault(false),
      Flag.withDescription("Skip the generate-tests stage"),
    ),
    skipNuke: Flag.boolean("skip-nuke").pipe(
      Flag.withDefault(false),
      Flag.withDescription("Skip the generate-nuke stage"),
    ),
    continueOnError: Flag.boolean("continue-on-error").pipe(
      Flag.withDefault(false),
      Flag.withDescription("Keep running later stages even if one fails"),
    ),
  },
  (config) =>
    Effect.gen(function* () {
      const path = yield* Path.Path;
      const root = path.resolve(import.meta.dir, "..");
      const scriptsDir = path.join(root, "scripts");

      yield* Console.log(
        `\n${BOLD}🚀 Pipeline: create full SDK @distilled.cloud/${config.name}${RESET}`,
      );

      const runOrContinue = (
        label: string,
        script: string,
        args: string[],
      ): Effect.Effect<void, StageError, never> =>
        runStage(label, path.join(scriptsDir, script), args, root).pipe(
          config.continueOnError
            ? Effect.catch((err) =>
                Console.log(
                  `${YELLOW}⚠  ${label} failed (code ${err.code}) — continuing because --continue-on-error is set${RESET}`,
                ),
              )
            : (eff) => eff,
        );

      const note = config.note.trim();

      // If the create-sdk stage is skipped but a note was supplied, write it
      // into the existing metadata file so downstream stages still see it.
      if (config.skipCreate && note) {
        yield* initMetadata(
          root,
          config.name,
          `packages/${config.name}`,
          note,
        );
        yield* Console.log(
          `${DIM}ℹ Wrote userNote to .ai-workspace/${config.name}-metadata.json${RESET}`,
        );
      }

      // Stage 1: create-sdk
      if (!config.skipCreate) {
        const createArgs = [config.name];
        for (const spec of config.specs) {
          createArgs.push("--specs", spec);
        }
        if (config.registerPackage) createArgs.push("--register-package");
        if (note) createArgs.push("--note", note);
        yield* runOrContinue("create-sdk", "create-sdk.ts", createArgs);
      } else {
        yield* Console.log(`${DIM}⏭  Skipping create-sdk${RESET}`);
      }

      // Stage 2: error-discovery
      if (!config.skipErrorDiscovery) {
        yield* runOrContinue("error-discovery", "error-discovery.ts", [
          config.name,
        ]);
      } else {
        yield* Console.log(`${DIM}⏭  Skipping error-discovery${RESET}`);
      }

      // Stage 3: generate-tests
      if (!config.skipTests) {
        yield* runOrContinue("generate-tests", "generate-tests.ts", [
          config.name,
        ]);
      } else {
        yield* Console.log(`${DIM}⏭  Skipping generate-tests${RESET}`);
      }

      // Stage 4: generate-nuke
      if (!config.skipNuke) {
        yield* runOrContinue("generate-nuke", "generate-nuke.ts", [
          config.name,
        ]);
      } else {
        yield* Console.log(`${DIM}⏭  Skipping generate-nuke${RESET}`);
      }

      yield* Console.log(
        `\n${GREEN}${BOLD}✨ Pipeline complete for @distilled.cloud/${config.name}${RESET}\n`,
      );
    }),
).pipe(
  Command.withDescription(
    "Run the full new-SDK pipeline: scaffold, discover errors, write tests, generate nuke",
  ),
  Command.withExamples([
    {
      command:
        "bun scripts/create-sdk-full.ts stripe --specs https://raw.githubusercontent.com/stripe/openapi/master/openapi/spec3.json",
      description: "Full pipeline from an OpenAPI URL",
    },
    {
      command:
        "bun scripts/create-sdk-full.ts axiom-query --specs https://github.com/axiomhq/docs.git --note 'The API spec lives at restapi/versions/<version>/ inside the submodule. This SDK should cover the query service only — ignore ingest, dashboards, etc.'",
      description:
        "Nudge the agent when one repo contains many services or the spec is in a subdirectory",
    },
    {
      command:
        "bun scripts/create-sdk-full.ts stripe --skip-create --skip-nuke",
      description:
        "Re-run only error-discovery and generate-tests for an existing SDK",
    },
  ]),
);

const program = Command.run(createSdkFull, { version: "1.0.0" });
BunRuntime.runMain(Effect.provide(program, BunServices.layer));
