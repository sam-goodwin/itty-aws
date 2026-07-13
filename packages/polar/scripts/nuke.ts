#!/usr/bin/env bun
/**
 * Polar Nuke Script
 *
 * Lists and deletes/archives all resources in a Polar account — intended for
 * cleaning up test resources. Supports `--dry-run` to preview without acting.
 *
 * SAFETY: Polar holds real billing data, so this refuses to run against
 * production unless `--allow-production` is passed. Point it at the sandbox
 * (`POLAR_SERVER=sandbox`) for normal test cleanup. An optional
 * `nuke-config.json` (same shape as the other SDKs) excludes resources by id
 * or name glob.
 *
 * Usage:
 *   POLAR_SERVER=sandbox bun packages/polar/scripts/nuke.ts --dry-run
 *   POLAR_SERVER=sandbox bun packages/polar/scripts/nuke.ts
 */
import { config } from "dotenv";
import * as fs from "node:fs";
import * as nodePath from "node:path";

// Load .env from repo root (three levels up from scripts/), then CWD as fallback.
config({ path: nodePath.resolve(import.meta.dir, "../../../.env") });
config();

import { BunRuntime, BunServices } from "@effect/platform-bun";
import { Console, Effect } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { Command, Flag } from "effect/unstable/cli";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { productslist } from "../src/operations/productslist.ts";
import { productsupdate } from "../src/operations/productsupdate.ts";
import { discountslist } from "../src/operations/discountslist.ts";
import { discountsdelete } from "../src/operations/discountsdelete.ts";
import { benefitslist } from "../src/operations/benefitslist.ts";
import { benefitsdelete } from "../src/operations/benefitsdelete.ts";
import { customerslist } from "../src/operations/customerslist.ts";
import { customersdelete } from "../src/operations/customersdelete.ts";

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
// Nuke Config (exclusions)
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

const loadNukeConfig = (): NukeConfig => {
  const p = nodePath.join(PKG_DIR, "nuke-config.json");
  if (!fs.existsSync(p)) return {};
  return JSON.parse(fs.readFileSync(p, "utf-8"));
};

const matchGlob = (pattern: string, value: string): boolean =>
  new RegExp("^" + pattern.replace(/\*/g, ".*") + "$").test(value);

const isExcluded = (
  cfg: NukeConfig,
  type: string,
  id: string,
  name?: string,
): ExcludeRule | undefined =>
  cfg.exclude?.find((rule) => {
    if (rule.type !== type) return false;
    if (rule.ids?.includes(id)) return true;
    if (name && rule.namePatterns?.some((p) => matchGlob(p, name))) return true;
    return false;
  });

// ============================================================================
// Pagination
// ============================================================================

interface ListItem {
  id: string;
  name?: string;
  is_archived?: boolean;
}

interface ListPage {
  items?: ReadonlyArray<ListItem>;
  pagination?: { max_page?: number };
}

/** Page through a Polar list endpoint (100 per page) and collect every item. */
const listAll = (
  listOp: (input: {
    page?: number;
    limit?: number;
  }) => Effect.Effect<unknown, unknown, never>,
) =>
  Effect.gen(function* () {
    const all: ListItem[] = [];
    let page = 1;
    while (true) {
      const result = (yield* listOp({ page, limit: 100 })) as ListPage;
      const items = result.items ?? [];
      all.push(...items);
      const maxPage = result.pagination?.max_page ?? page;
      if (items.length === 0 || page >= maxPage) break;
      page += 1;
    }
    return all;
  });

// ============================================================================
// Resource sweeps
// ============================================================================

/**
 * Sweep a deletable resource: list every item, skip excluded ones, then delete
 * (or archive, for products which cannot be deleted).
 */
const sweep = (
  label: string,
  type: string,
  dryRun: boolean,
  cfg: NukeConfig,
  listOp: (input: {
    page?: number;
    limit?: number;
  }) => Effect.Effect<unknown, unknown, never>,
  act: (item: ListItem) => Effect.Effect<unknown, unknown, never>,
  actVerb = "DELETE",
) =>
  Effect.gen(function* () {
    yield* Console.log(`\n  ${BOLD}${CYAN}${label}${RESET}`);
    const items = yield* listAll(listOp).pipe(
      Effect.catch(() =>
        Console.log(`    ${RED}Failed to list ${label}${RESET}`).pipe(
          Effect.as([] as ListItem[]),
        ),
      ),
    );
    if (items.length === 0) {
      yield* Console.log(`    ${DIM}None found${RESET}`);
      return;
    }
    for (const item of items) {
      const name = item.name ?? "unnamed";
      totalFound++;
      const excluded = isExcluded(cfg, type, item.id, item.name);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} ${name} ${DIM}(${item.id})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }
      yield* Console.log(
        `    ${RED}[${actVerb}]${RESET} ${name} ${DIM}(${item.id})${RESET}`,
      );
      if (!dryRun) {
        yield* act(item).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(`      ${RED}Failed on ${name}${RESET}`);
          }),
        );
      }
    }
  });

// ============================================================================
// Command
// ============================================================================

const nuke = Command.make(
  "nuke",
  {
    dryRun: Flag.boolean("dry-run").pipe(
      Flag.withDescription("Only list resources without deleting them"),
      Flag.withDefault(false),
    ),
    allowProduction: Flag.boolean("allow-production").pipe(
      Flag.withDescription(
        "Permit running against the PRODUCTION Polar account",
      ),
      Flag.withDefault(false),
    ),
  },
  (opts) =>
    Effect.gen(function* () {
      const server = process.env.POLAR_SERVER ?? "production";
      const isProduction =
        server === "production" &&
        !(process.env.POLAR_BASE_URL ?? "").includes("sandbox");
      if (isProduction && !opts.allowProduction) {
        yield* Console.log(
          `${RED}${BOLD}Refusing to nuke the PRODUCTION Polar account.${RESET}\n` +
            `Set ${BOLD}POLAR_SERVER=sandbox${RESET} for test cleanup, or pass ` +
            `${BOLD}--allow-production${RESET} to override.`,
        );
        return;
      }

      const cfg = loadNukeConfig();
      yield* Console.log(
        `${BOLD}Polar Nuke${RESET} ${DIM}(server: ${server}${opts.dryRun ? ", dry-run" : ""})${RESET}`,
      );
      if (cfg.exclude?.length) {
        yield* Console.log(
          `${DIM}Loaded ${cfg.exclude.length} exclusion rule(s)${RESET}`,
        );
      }

      // Products cannot be deleted — archive any that are still active.
      yield* sweep(
        "Products",
        "Product",
        opts.dryRun,
        cfg,
        (input) =>
          productslist(input) as Effect.Effect<unknown, unknown, never>,
        (item) =>
          productsupdate({ id: item.id, is_archived: true }) as Effect.Effect<
            unknown,
            unknown,
            never
          >,
        "ARCHIVE",
      );
      yield* sweep(
        "Discounts",
        "Discount",
        opts.dryRun,
        cfg,
        (input) =>
          discountslist(input) as Effect.Effect<unknown, unknown, never>,
        (item) =>
          discountsdelete({ id: item.id }) as Effect.Effect<
            unknown,
            unknown,
            never
          >,
      );
      yield* sweep(
        "Benefits",
        "Benefit",
        opts.dryRun,
        cfg,
        (input) =>
          benefitslist(input) as Effect.Effect<unknown, unknown, never>,
        (item) =>
          benefitsdelete({ id: item.id }) as Effect.Effect<
            unknown,
            unknown,
            never
          >,
      );
      yield* sweep(
        "Customers",
        "Customer",
        opts.dryRun,
        cfg,
        (input) =>
          customerslist(input) as Effect.Effect<unknown, unknown, never>,
        (item) =>
          customersdelete({ id: item.id }) as Effect.Effect<
            unknown,
            unknown,
            never
          >,
      );

      yield* Console.log(`\n${BOLD}Summary${RESET}`);
      yield* Console.log(`  Total found:   ${totalFound}`);
      yield* Console.log(`  ${YELLOW}Skipped:       ${totalSkipped}${RESET}`);
      if (!opts.dryRun) {
        yield* Console.log(`  ${GREEN}Actioned:      ${totalDeleted}${RESET}`);
        if (totalFailed > 0) {
          yield* Console.log(`  ${RED}Failed:        ${totalFailed}${RESET}`);
        }
      }
    }).pipe(
      Effect.provide(CredentialsFromEnv),
      Effect.provide(FetchHttpClient.layer),
    ),
).pipe(Command.withDescription("List and delete/archive all Polar resources"));

// ============================================================================
// Entry Point
// ============================================================================

BunRuntime.runMain(
  Effect.provide(Command.run(nuke, { version: "1.0.0" }), BunServices.layer),
);
