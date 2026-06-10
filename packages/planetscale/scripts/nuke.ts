#!/usr/bin/env bun
/**
 * PlanetScale Nuke Script
 *
 * Lists and deletes all resources in a PlanetScale organization.
 * Supports --dry-run to preview without deleting.
 *
 * Nothing is preserved by default. Add exclusion rules in a
 * `nuke-config.json` next to this package to keep specific resources.
 *
 * Usage:
 *   bun packages/planetscale/scripts/nuke.ts --dry-run
 *   bun packages/planetscale/scripts/nuke.ts
 */
import { config } from "dotenv";
import * as fs from "node:fs";
import * as nodePath from "node:path";

// Load .env from repo root (two levels up from scripts/)
const envPath = nodePath.resolve(import.meta.dir, "../../../.env");
config({ path: envPath });
if (
  !process.env.PLANETSCALE_API_TOKEN ||
  !process.env.PLANETSCALE_API_TOKEN_ID ||
  !process.env.PLANETSCALE_ORGANIZATION
) {
  // Also try CWD/.env as fallback
  config();
}

if (
  !process.env.PLANETSCALE_API_TOKEN ||
  !process.env.PLANETSCALE_API_TOKEN_ID ||
  !process.env.PLANETSCALE_ORGANIZATION
) {
  console.error(
    "PLANETSCALE_API_TOKEN_ID, PLANETSCALE_API_TOKEN, and PLANETSCALE_ORGANIZATION are required.",
  );
  process.exit(1);
}

import { BunRuntime, BunServices } from "@effect/platform-bun";
import { Cause, Console, Effect, Option, Result, Stream } from "effect";
import { Command, Flag } from "effect/unstable/cli";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";

import { Credentials, CredentialsFromEnv } from "../src/credentials.ts";
import { deleteDatabase } from "../src/operations/deleteDatabase.ts";
import { listDatabases } from "../src/operations/listDatabases.ts";

// ANSI colors
const RED = "\x1b[31m";
const GREEN = "\x1b[32m";
const YELLOW = "\x1b[33m";
const CYAN = "\x1b[36m";
const BOLD = "\x1b[1m";
const DIM = "\x1b[2m";
const RESET = "\x1b[0m";

// Counters
let totalFound = 0;
let totalSkipped = 0;
let totalDeleted = 0;
let totalFailed = 0;

// ============================================================================
// Nuke Config
// ============================================================================

interface ExcludeRule {
  type: string;
  ids?: string[];
  namePatterns?: string[];
  reason?: string;
}

interface NukeConfig {
  exclude?: ExcludeRule[];
}

const PKG_DIR = nodePath.resolve(import.meta.dir, "..");

function loadNukeConfig(): NukeConfig {
  const p = nodePath.join(PKG_DIR, "nuke-config.json");
  return fs.existsSync(p)
    ? (JSON.parse(fs.readFileSync(p, "utf-8")) as NukeConfig)
    : {};
}

function matchGlob(pattern: string, value: string): boolean {
  return new RegExp("^" + pattern.replace(/\*/g, ".*") + "$").test(value);
}

function isExcluded(
  config: NukeConfig,
  type: string,
  id: string,
  name?: string,
): ExcludeRule | undefined {
  return config.exclude?.find((rule) => {
    if (rule.type !== type) return false;
    if (rule.ids?.includes(id)) return true;
    if (name && rule.namePatterns?.some((p) => matchGlob(p, name))) return true;
    return false;
  });
}

// ============================================================================
// Error formatting
// ============================================================================

/** Pull a useful one-liner out of any tagged error / HttpError / plain Error / Cause. */
function formatError(err: unknown): string {
  if (!err) return String(err);
  if (Cause.isCause(err as Cause.Cause<unknown>)) {
    const cause = err as Cause.Cause<unknown>;
    const failOpt = Cause.findErrorOption(cause);
    if (Option.isSome(failOpt)) return formatError(failOpt.value);
    const defectRes = Cause.findDefect(cause);
    if (Result.isSuccess(defectRes))
      return `defect: ${formatError(defectRes.success)}`;
    return Cause.pretty(cause);
  }
  const e = err as Record<string, unknown>;
  const tag = typeof e._tag === "string" ? e._tag : undefined;
  const code = typeof e.code === "number" ? e.code : undefined;
  const status = typeof e.status === "number" ? e.status : undefined;
  const message =
    typeof e.message === "string"
      ? e.message
      : typeof e.statusText === "string"
        ? e.statusText
        : undefined;
  const body =
    typeof e.body === "string" && e.body.length > 0
      ? e.body.slice(0, 400)
      : undefined;
  const parts: string[] = [];
  if (tag) parts.push(tag);
  if (code !== undefined) parts.push(`code=${code}`);
  if (status !== undefined && !tag) parts.push(`status=${status}`);
  if (message) parts.push(message);
  if (body && !message) parts.push(body);
  return parts.length > 0 ? parts.join(" ") : String(err);
}

// ============================================================================
// Generic resource nuker
// ============================================================================

function nukeResources<T>(opts: {
  type: string;
  header: string;
  dryRun: boolean;
  nukeConfig: NukeConfig;
  list: Effect.Effect<readonly T[], any, any>;
  getId: (item: T) => string;
  getName?: (item: T) => string | undefined;
  getMeta?: (item: T) => string | undefined;
  delete: (item: T) => Effect.Effect<unknown, any, any>;
}): Effect.Effect<void, never, any> {
  const body = Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}${opts.header}${RESET}`);

    const items = yield* opts.list.pipe(
      Effect.catchCause((cause) =>
        Console.log(
          `  ${RED}Failed to list ${opts.type}: ${formatError(cause)}${RESET}`,
        ).pipe(Effect.map(() => [] as readonly T[])),
      ),
    );

    if (items.length === 0) {
      yield* Console.log(`  ${DIM}No ${opts.type} found${RESET}`);
      return;
    }

    for (const item of items) {
      yield* Effect.suspend(() =>
        Effect.gen(function* () {
          totalFound++;
          const id = opts.getId(item);
          const name = opts.getName ? opts.getName(item) : undefined;
          const meta = opts.getMeta ? opts.getMeta(item) : undefined;
          const label =
            name && name !== id ? `${name} ${DIM}(${id})${RESET}` : id;
          const metaSuffix = meta ? ` ${DIM}${meta}${RESET}` : "";

          const excluded = isExcluded(opts.nukeConfig, opts.type, id, name);
          if (excluded) {
            totalSkipped++;
            yield* Console.log(
              `  ${YELLOW}[SKIP]${RESET} ${opts.type}: ${label}${metaSuffix} — ${excluded.reason ?? "excluded"}`,
            );
            return;
          }

          if (opts.dryRun) {
            yield* Console.log(
              `  ${RED}[DELETE]${RESET} ${opts.type}: ${label}${metaSuffix}`,
            );
            return;
          }

          yield* Console.log(
            `  ${RED}[DELETE]${RESET} ${opts.type}: ${label}${metaSuffix}`,
          );
          yield* opts.delete(item).pipe(
            Effect.matchCauseEffect({
              onSuccess: () => {
                totalDeleted++;
                return Console.log(`    ${GREEN}Success${RESET}`);
              },
              onFailure: (cause) => {
                totalFailed++;
                return Console.log(
                  `    ${RED}Failed: ${formatError(cause)}${RESET}`,
                );
              },
            }),
          );
        }),
      ).pipe(
        Effect.catchCause((cause) =>
          Console.log(
            `  ${RED}Error processing ${opts.type} item: ${formatError(cause)}${RESET}`,
          ),
        ),
      );
    }
  });
  return body.pipe(
    Effect.catchCause((cause) =>
      Console.log(
        `  ${RED}Section ${opts.type} aborted: ${formatError(cause)}${RESET}`,
      ),
    ),
    Effect.catch((err) =>
      Console.log(
        `  ${RED}Section ${opts.type} aborted: ${formatError(err)}${RESET}`,
      ),
    ),
  );
}

// ============================================================================
// Resource definitions
// ============================================================================

const collectAll = <A, E, R>(stream: Stream.Stream<A, E, R>) =>
  Stream.runCollect(stream);

const nukeAll = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  organization: string,
) =>
  Effect.gen(function* () {
    // ----- Databases (cascades branches, passwords, keyspaces, bouncers,
    // webhooks, deploy requests, traffic budgets, roles, etc.) -----
    yield* nukeResources({
      type: "Database",
      header: "Databases",
      dryRun,
      nukeConfig,
      list: collectAll(listDatabases.items({ organization, per_page: 100 })),
      getId: (d: any) => d.id ?? d.name ?? "",
      getName: (d: any) => d.name ?? undefined,
      getMeta: (d: any) => {
        const parts: string[] = [];
        if (d.kind) parts.push(`kind: ${d.kind}`);
        if (d.region?.slug) parts.push(`region: ${d.region.slug}`);
        if (d.state) parts.push(`state: ${d.state}`);
        return parts.length > 0 ? parts.join(" | ") : undefined;
      },
      delete: (d: any) =>
        deleteDatabase({ organization, database: d.name ?? "" }),
    });

    // ----- Service Tokens -----
    // yield* nukeResources({
    //   type: "ServiceToken",
    //   header: "Service Tokens",
    //   dryRun,
    //   nukeConfig,
    //   list: collectAll(
    //     listServiceTokens.items({ organization, per_page: 100 }),
    //   ),
    //   getId: (t: any) => t.id ?? "",
    //   getName: (t: any) => t.name ?? t.id ?? undefined,
    //   delete: (t: any) =>
    //     deleteServiceToken({ organization, id: t.id ?? "" }),
    // });
  });

// ============================================================================
// Main command
// ============================================================================

const nuke = Command.make(
  "nuke",
  {
    dryRun: Flag.boolean("dry-run").pipe(
      Flag.withDescription("Only list resources without deleting them"),
      Flag.withDefault(false),
    ),
  },
  (cfg) =>
    Effect.gen(function* () {
      const creds = yield* yield* Credentials;
      const organization = creds.organization;
      const nukeConfig = loadNukeConfig();
      const mode = cfg.dryRun
        ? `${YELLOW}DRY RUN${RESET}`
        : `${RED}LIVE${RESET}`;
      yield* Console.log(
        `\n${BOLD}PlanetScale Nuke${RESET} ${DIM}(organization: ${organization}, mode: ${mode}${DIM})${RESET}`,
      );

      if (!cfg.dryRun) {
        yield* Console.log(
          `${RED}${BOLD}WARNING: This will DELETE all resources in this PlanetScale organization!${RESET}`,
        );
      }

      if (nukeConfig.exclude && nukeConfig.exclude.length > 0) {
        yield* Console.log(
          `${DIM}Loaded ${nukeConfig.exclude.length} exclusion rule(s) from nuke-config.json${RESET}`,
        );
      } else {
        yield* Console.log(
          `${DIM}No nuke-config.json — nothing preserved by default${RESET}`,
        );
      }

      yield* nukeAll(cfg.dryRun, nukeConfig, organization);

      // Summary
      yield* Console.log(`\n${BOLD}Summary${RESET}`);
      yield* Console.log(`  Total found:   ${totalFound}`);
      yield* Console.log(`  ${YELLOW}Skipped:       ${totalSkipped}${RESET}`);
      if (!cfg.dryRun) {
        yield* Console.log(`  ${GREEN}Deleted:       ${totalDeleted}${RESET}`);
        if (totalFailed > 0) {
          yield* Console.log(`  ${RED}Failed:        ${totalFailed}${RESET}`);
        }
      }
    }).pipe(
      Effect.provide(CredentialsFromEnv),
      Effect.provide(FetchHttpClient.layer),
    ),
).pipe(Command.withDescription("List and delete all PlanetScale resources"));

// ============================================================================
// Entry Point
// ============================================================================

process.on("uncaughtException", (err) => {
  console.error(`${RED}Uncaught exception:${RESET}`, err);
});
process.on("unhandledRejection", (reason) => {
  console.error(`${RED}Unhandled rejection:${RESET}`, reason);
});
process.on("exit", (code) => {
  if (code !== 0)
    console.error(`${DIM}Process exiting with code ${code}${RESET}`);
});

BunRuntime.runMain(
  Effect.provide(Command.run(nuke, { version: "1.0.0" }), BunServices.layer),
);
