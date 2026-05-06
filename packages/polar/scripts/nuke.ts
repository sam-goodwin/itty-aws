#!/usr/bin/env bun
/**
 * Polar Nuke Script
 *
 * Lists and removes resources in a Polar account.
 * Supports --dry-run to preview without deleting.
 *
 * Usage:
 *   bun packages/polar/scripts/nuke.ts --dry-run
 *   bun packages/polar/scripts/nuke.ts
 */
import { config } from "dotenv";
import * as fs from "node:fs";
import * as nodePath from "node:path";

const envPath = nodePath.resolve(import.meta.dir, "../../../.env");
config({ path: envPath });
config();

import { BunRuntime, BunServices } from "@effect/platform-bun";
import { Console, Effect } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { Command, Flag } from "effect/unstable/cli";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { benefitsdelete } from "../src/operations/benefitsdelete.ts";
import { benefitslist } from "../src/operations/benefitslist.ts";
import { checkoutLinksdelete } from "../src/operations/checkoutLinksdelete.ts";
import { checkoutLinkslist } from "../src/operations/checkoutLinkslist.ts";
import { customFieldsdelete } from "../src/operations/customFieldsdelete.ts";
import { customFieldslist } from "../src/operations/customFieldslist.ts";
import { customersdelete } from "../src/operations/customersdelete.ts";
import { customerslist } from "../src/operations/customerslist.ts";
import { discountsdelete } from "../src/operations/discountsdelete.ts";
import { discountslist } from "../src/operations/discountslist.ts";
import { filesdelete } from "../src/operations/filesdelete.ts";
import { fileslist } from "../src/operations/fileslist.ts";
import { meterslist } from "../src/operations/meterslist.ts";
import { metersupdate } from "../src/operations/metersupdate.ts";
import { metricsdeleteDashboard } from "../src/operations/metricsdeleteDashboard.ts";
import { metricslistDashboards } from "../src/operations/metricslistDashboards.ts";
import { organizationAccessTokensdelete } from "../src/operations/organizationAccessTokensdelete.ts";
import { organizationAccessTokenslist } from "../src/operations/organizationAccessTokenslist.ts";
import { productslist } from "../src/operations/productslist.ts";
import { productsupdate } from "../src/operations/productsupdate.ts";
import { webhooksdeleteWebhookEndpoint } from "../src/operations/webhooksdeleteWebhookEndpoint.ts";
import { webhookslistWebhookEndpoints } from "../src/operations/webhookslistWebhookEndpoints.ts";

const RED = "\x1b[31m";
const GREEN = "\x1b[32m";
const YELLOW = "\x1b[33m";
const CYAN = "\x1b[36m";
const BOLD = "\x1b[1m";
const DIM = "\x1b[2m";
const RESET = "\x1b[0m";

let totalFound = 0;
let totalSkipped = 0;
let totalDeleted = 0;
let totalFailed = 0;

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
  if (!fs.existsSync(p)) return {};
  return JSON.parse(fs.readFileSync(p, "utf-8"));
}

function matchGlob(pattern: string, value: string): boolean {
  return new RegExp("^" + pattern.replace(/\*/g, ".*") + "$").test(value);
}

function isExcluded(
  config: NukeConfig,
  type: string,
  id: string,
  name?: string | null,
): ExcludeRule | undefined {
  return config.exclude?.find((rule) => {
    if (rule.type !== type) return false;
    if (rule.ids?.includes(id)) return true;
    if (name && rule.namePatterns?.some((p) => matchGlob(p, name))) return true;
    return false;
  });
}

type Page = {
  items: readonly Record<string, any>[];
  pagination?: { max_page: number; total_count: number };
};

const listAll = (
  list: (input: any) => Effect.Effect<Page, unknown, unknown>,
  baseInput: Record<string, unknown> = {},
): Effect.Effect<readonly Record<string, any>[], unknown, unknown> =>
  Effect.gen(function* () {
    const items: Record<string, any>[] = [];
    let page = 1;
    let maxPage = 1;

    do {
      const result = yield* list({ ...baseInput, page, limit: 100 }).pipe(
        Effect.timeout("15 seconds"),
      );
      items.push(...result.items);
      maxPage = result.pagination?.max_page ?? page;
      page++;
    } while (page <= maxPage);

    return items;
  });

const safeList = (
  label: string,
  list: (input: any) => Effect.Effect<Page, unknown, unknown>,
  baseInput: Record<string, unknown> = {},
): Effect.Effect<readonly Record<string, any>[], never, unknown> =>
  listAll(list, baseInput).pipe(
    Effect.catch(() =>
      Console.log(`  ${RED}Failed to list ${label}${RESET}`).pipe(
        Effect.map(() => {
          totalFailed++;
          return [];
        }),
      ),
    ),
  );

const safeArrayList = (
  label: string,
  list: (
    input: any,
  ) => Effect.Effect<readonly Record<string, any>[], unknown, unknown>,
  baseInput: Record<string, unknown> = {},
): Effect.Effect<readonly Record<string, any>[], never, unknown> =>
  list(baseInput).pipe(
    Effect.timeout("15 seconds"),
    Effect.catch(() =>
      Console.log(`  ${RED}Failed to list ${label}${RESET}`).pipe(
        Effect.map(() => {
          totalFailed++;
          return [];
        }),
      ),
    ),
  );

const nukeResource = (options: {
  label: string;
  type: string;
  list: (input: any) => Effect.Effect<Page, unknown, unknown>;
  del: (input: any) => Effect.Effect<unknown, unknown, unknown>;
  getDeleteInput: (item: Record<string, any>) => Record<string, unknown>;
  getName: (item: Record<string, any>) => string | null | undefined;
  baseInput?: Record<string, unknown>;
}) =>
  Effect.gen(function* () {
    yield* Console.log(`${CYAN}${BOLD}${options.label}${RESET}`);
    const items = yield* safeList(
      options.label,
      options.list,
      options.baseInput ?? {},
    );

    for (const item of items) {
      totalFound++;
      const id = String(item.id);
      const name = options.getName(item);
      const excluded = isExcluded(currentNukeConfig, options.type, id, name);

      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `  ${YELLOW}[SKIP]${RESET} ${options.type}: ${name ?? id} ${DIM}(${id})${RESET} - ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (currentDryRun) {
        totalDeleted++;
        yield* Console.log(
          `  ${RED}[DELETE]${RESET} ${options.type}: ${name ?? id} ${DIM}(${id})${RESET}`,
        );
      } else {
        yield* options.del(options.getDeleteInput(item)).pipe(
          Effect.andThen(() => {
            totalDeleted++;
            return Console.log(
              `  ${RED}[DELETE]${RESET} ${options.type}: ${name ?? id} ${DIM}(${id})${RESET}`,
            );
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `  ${RED}[FAIL]${RESET} ${options.type}: ${name ?? id} ${DIM}(${id})${RESET}`,
            );
          }),
        );
      }
    }
  });

const archiveResource = (options: {
  label: string;
  type: string;
  list: (input: any) => Effect.Effect<Page, unknown, unknown>;
  update: (input: any) => Effect.Effect<unknown, unknown, unknown>;
  getName: (item: Record<string, any>) => string | null | undefined;
  baseInput?: Record<string, unknown>;
}) =>
  Effect.gen(function* () {
    yield* Console.log(`${CYAN}${BOLD}${options.label}${RESET}`);
    const items = yield* safeList(
      options.label,
      options.list,
      options.baseInput ?? {},
    );

    for (const item of items) {
      totalFound++;
      const id = String(item.id);
      const name = options.getName(item);
      const excluded = isExcluded(currentNukeConfig, options.type, id, name);

      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `  ${YELLOW}[SKIP]${RESET} ${options.type}: ${name ?? id} ${DIM}(${id})${RESET} - ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (currentDryRun) {
        totalDeleted++;
        yield* Console.log(
          `  ${RED}[ARCHIVE]${RESET} ${options.type}: ${name ?? id} ${DIM}(${id})${RESET}`,
        );
      } else {
        yield* options.update({ id, is_archived: true }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
            return Console.log(
              `  ${RED}[ARCHIVE]${RESET} ${options.type}: ${name ?? id} ${DIM}(${id})${RESET}`,
            );
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `  ${RED}[FAIL]${RESET} ${options.type}: ${name ?? id} ${DIM}(${id})${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeDashboards = () =>
  Effect.gen(function* () {
    yield* Console.log(`${CYAN}${BOLD}Metric Dashboards${RESET}`);
    const dashboards = yield* safeArrayList(
      "Metric Dashboards",
      metricslistDashboards as any,
    );

    for (const dashboard of dashboards) {
      totalFound++;
      const id = String(dashboard.id);
      const name = dashboard.name as string | undefined;
      const excluded = isExcluded(
        currentNukeConfig,
        "MetricDashboard",
        id,
        name,
      );

      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `  ${YELLOW}[SKIP]${RESET} MetricDashboard: ${name ?? id} ${DIM}(${id})${RESET} - ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (currentDryRun) {
        totalDeleted++;
        yield* Console.log(
          `  ${RED}[DELETE]${RESET} MetricDashboard: ${name ?? id} ${DIM}(${id})${RESET}`,
        );
      } else {
        yield* metricsdeleteDashboard({ id }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
            return Console.log(
              `  ${RED}[DELETE]${RESET} MetricDashboard: ${name ?? id} ${DIM}(${id})${RESET}`,
            );
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `  ${RED}[FAIL]${RESET} MetricDashboard: ${name ?? id} ${DIM}(${id})${RESET}`,
            );
          }),
        );
      }
    }
  });

let currentDryRun = true;
let currentNukeConfig: NukeConfig = {};

const nuke = Command.make(
  "nuke",
  {
    dryRun: Flag.boolean("dry-run"),
  },
  (args) =>
    Effect.gen(function* () {
      currentDryRun = args.dryRun;
      currentNukeConfig = loadNukeConfig();

      yield* Console.log(
        `\n${BOLD}Polar Nuke${RESET} ${args.dryRun ? `${YELLOW}(dry run)${RESET}` : `${RED}(live)${RESET}`}\n`,
      );

      yield* nukeResource({
        label: "Webhook Endpoints",
        type: "WebhookEndpoint",
        list: webhookslistWebhookEndpoints as any,
        del: webhooksdeleteWebhookEndpoint as any,
        getDeleteInput: (item) => ({ id: item.id }),
        getName: (item) => item.name ?? item.url,
      });

      yield* nukeResource({
        label: "Checkout Links",
        type: "CheckoutLink",
        list: checkoutLinkslist as any,
        del: checkoutLinksdelete as any,
        getDeleteInput: (item) => ({ id: item.id }),
        getName: (item) => item.label,
      });

      yield* nukeResource({
        label: "Discounts",
        type: "Discount",
        list: discountslist as any,
        del: discountsdelete as any,
        getDeleteInput: (item) => ({ id: item.id }),
        getName: (item) => item.name ?? item.code,
      });

      yield* nukeResource({
        label: "Custom Fields",
        type: "CustomField",
        list: customFieldslist as any,
        del: customFieldsdelete as any,
        getDeleteInput: (item) => ({ id: item.id }),
        getName: (item) => item.name ?? item.slug,
      });

      yield* nukeResource({
        label: "Benefits",
        type: "Benefit",
        list: benefitslist as any,
        del: benefitsdelete as any,
        getDeleteInput: (item) => ({ id: item.id }),
        getName: (item) => item.description,
      });

      yield* nukeResource({
        label: "Files",
        type: "File",
        list: fileslist as any,
        del: filesdelete as any,
        getDeleteInput: (item) => ({ id: item.id }),
        getName: (item) => item.name ?? item.path,
      });

      yield* archiveResource({
        label: "Products",
        type: "Product",
        list: productslist as any,
        update: productsupdate as any,
        getName: (item) => item.name,
        baseInput: { is_archived: false },
      });

      yield* archiveResource({
        label: "Meters",
        type: "Meter",
        list: meterslist as any,
        update: metersupdate as any,
        getName: (item) => item.name,
        baseInput: { is_archived: false },
      });

      yield* nukeResource({
        label: "Customers",
        type: "Customer",
        list: customerslist as any,
        del: customersdelete as any,
        getDeleteInput: (item) => ({ id: item.id, anonymize: true }),
        getName: (item) => item.email ?? item.name ?? item.external_id,
      });

      yield* nukeDashboards();

      yield* nukeResource({
        label: "Organization Access Tokens",
        type: "OrganizationAccessToken",
        list: organizationAccessTokenslist as any,
        del: organizationAccessTokensdelete as any,
        getDeleteInput: (item) => ({ id: item.id }),
        getName: (item) => item.comment,
      });

      yield* Console.log(
        `\n${BOLD}Summary${RESET}: found=${totalFound}, skipped=${totalSkipped}, ${args.dryRun ? "would_delete" : "deleted"}=${totalDeleted}, failed=${totalFailed}`,
      );
    }).pipe(
      Effect.provide(CredentialsFromEnv),
      Effect.provide(FetchHttpClient.layer),
    ),
);

BunRuntime.runMain(
  Effect.provide(Command.run(nuke, { version: "1.0.0" }), BunServices.layer),
);
