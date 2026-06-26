#!/usr/bin/env bun
/**
 * Turbopuffer Nuke Script
 *
 * Lists and deletes all namespaces in a Turbopuffer account.
 * Supports --dry-run to preview without deleting.
 *
 * Usage:
 *   bun packages/turbopuffer/scripts/nuke.ts --dry-run
 *   bun packages/turbopuffer/scripts/nuke.ts
 */
import { config } from "dotenv";
import * as nodePath from "node:path";

// Load .env from repo root (three levels up from scripts/)
const envPath = nodePath.resolve(import.meta.dir, "../../../.env");
config({ path: envPath });
// Also try CWD/.env as fallback
config();
import { BunRuntime, BunServices } from "@effect/platform-bun";
import { Console, Effect } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { Command, Flag } from "effect/unstable/cli";
import { CredentialsFromEnv } from "@distilled.cloud/turbopuffer";
import {
  DeleteNamespace,
  ListNamespaces,
} from "@distilled.cloud/turbopuffer/Operations";

// ANSI colors
const RED = "\x1b[31m";
const GREEN = "\x1b[32m";
const YELLOW = "\x1b[33m";
const CYAN = "\x1b[36m";
const BOLD = "\x1b[1m";
const DIM = "\x1b[2m";
const RESET = "\x1b[0m";

// ============================================================================
// Pagination helper (turbopuffer uses cursor-based pagination)
// ============================================================================

function listAllNamespaces(): Effect.Effect<
  string[],
  unknown,
  never
> {
  return Effect.gen(function* () {
    const names: string[] = [];
    let cursor: string | undefined;
    do {
      const page = yield* ListNamespaces({ cursor });
      for (const ns of page.namespaces ?? []) {
        names.push((ns as { id: string }).id);
      }
      cursor = (page as { next_cursor?: string }).next_cursor ?? undefined;
    } while (cursor !== undefined);
    return names;
  });
}

// ============================================================================
// Main command
// ============================================================================

const nuke = Command.make(
  "nuke",
  {
    dryRun: Flag.boolean("dry-run").pipe(
      Flag.withDescription("Only list namespaces without deleting them"),
      Flag.withDefault(false),
    ),
    prefix: Flag.optional(Flag.text("prefix")).pipe(
      Flag.withDescription("Only delete namespaces matching this prefix"),
    ),
  },
  (config) =>
    Effect.gen(function* () {
      const mode = config.dryRun
        ? `${YELLOW}DRY RUN${RESET}`
        : `${RED}LIVE${RESET}`;
      yield* Console.log(
        `\n${BOLD}Turbopuffer Nuke${RESET} ${DIM}(${mode}${DIM})${RESET}`,
      );

      if (!config.dryRun) {
        yield* Console.log(
          `${RED}${BOLD}WARNING: This will DELETE all namespaces!${RESET}`,
        );
      }

      yield* Console.log(`\n${BOLD}${CYAN}Namespaces${RESET}`);

      const allNames = yield* listAllNamespaces().pipe(
        Effect.catch(() =>
          Console.log(`  ${RED}Failed to list namespaces${RESET}`).pipe(
            Effect.map(() => [] as string[]),
          ),
        ),
      );

      const prefix =
        config.prefix._tag === "Some" ? config.prefix.value : undefined;
      const names = prefix
        ? allNames.filter((n) => n.startsWith(prefix))
        : allNames;

      let deleted = 0;
      let failed = 0;

      if (names.length === 0) {
        yield* Console.log(`  ${DIM}No namespaces found${RESET}`);
      } else {
        for (const name of names) {
          if (config.dryRun) {
            yield* Console.log(`  ${RED}[DELETE]${RESET} ${name}`);
          } else {
            yield* Console.log(`  ${RED}[DELETE]${RESET} ${name}`);
            yield* DeleteNamespace({ namespace: name }).pipe(
              Effect.andThen(() => {
                deleted++;
              }),
              Effect.catch(() => {
                failed++;
                return Console.log(
                  `    ${RED}Failed to delete namespace ${name}${RESET}`,
                );
              }),
            );
          }
        }
      }

      yield* Console.log(`\n${BOLD}Summary${RESET}`);
      yield* Console.log(`  Total found:   ${names.length}`);
      if (!config.dryRun) {
        yield* Console.log(`  ${GREEN}Deleted:       ${deleted}${RESET}`);
      }
      if (failed > 0) {
        yield* Console.log(`  ${RED}Failed:        ${failed}${RESET}`);
      }
    }).pipe(
      Effect.provide(CredentialsFromEnv),
      Effect.provide(FetchHttpClient.layer),
    ),
).pipe(Command.withDescription("List and delete all Turbopuffer namespaces"));

// ============================================================================
// Entry Point
// ============================================================================

BunRuntime.runMain(
  Effect.provide(Command.run(nuke, { version: "1.0.0" }), BunServices.layer),
);
