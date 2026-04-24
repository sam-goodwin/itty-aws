#!/usr/bin/env bun
/**
 * Axiom Nuke Script
 *
 * Lists and deletes all resources in an Axiom account.
 * Supports --dry-run to preview without deleting.
 *
 * Usage:
 *   bun packages/axiom/scripts/nuke.ts --dry-run
 *   bun packages/axiom/scripts/nuke.ts
 *
 * Exclusions may be configured via packages/axiom/nuke-config.json.
 *
 * NOTE: The script intentionally lists Orgs and Users but never deletes them:
 * removing them would wipe the account or evict teammates. Use the Axiom UI
 * for those operations.
 */
import { config } from "dotenv";
import * as fs from "node:fs";
import * as nodePath from "node:path";

// Load .env from repo root (two levels up from scripts/)
const envPath = nodePath.resolve(import.meta.dir, "../../../.env");
config({ path: envPath });
if (!process.env.AXIOM_TOKEN && !process.env.AXIOM_API_KEY) {
  // Also try CWD/.env as fallback
  config();
}

import { BunRuntime, BunServices } from "@effect/platform-bun";
import { Console, Effect } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { Command, Flag } from "effect/unstable/cli";
import { CredentialsFromEnv } from "../src/credentials.ts";

// List operations
import { getDatasets } from "../src/operations/v2/getDatasets.ts";
import { getMonitors } from "../src/operations/v2/getMonitors.ts";
import { getNotifiers } from "../src/operations/v2/getNotifiers.ts";
import { getAnnotations } from "../src/operations/v2/getAnnotations.ts";
import { listRoles } from "../src/operations/v2/listRoles.ts";
import { listGroups } from "../src/operations/v2/listGroups.ts";
import { getStarredQueries } from "../src/operations/v2/getStarredQueries.ts";
import { getAPITokens } from "../src/operations/v2/getAPITokens.ts";
import { getVirtualFields } from "../src/operations/v2/getVirtualFields.ts";
import { getViews } from "../src/operations/v2/getViews.ts";
import { listDashboards } from "../src/operations/v2/listDashboards.ts";
import { getMapFields } from "../src/operations/v2/getMapFields.ts";
import { getUsers } from "../src/operations/v2/getUsers.ts";
import { getCurrentUser } from "../src/operations/v2/getCurrentUser.ts";
import { getOrgs } from "../src/operations/v2/getOrgs.ts";

// Delete operations
import { deleteDataset } from "../src/operations/v2/deleteDataset.ts";
import { deleteMonitor } from "../src/operations/v2/deleteMonitor.ts";
import { deleteNotifier } from "../src/operations/v2/deleteNotifier.ts";
import { deleteAnnotation } from "../src/operations/v2/deleteAnnotation.ts";
import { deleteRole } from "../src/operations/v2/deleteRole.ts";
import { deleteGroup } from "../src/operations/v2/deleteGroup.ts";
import { deleteStarred } from "../src/operations/v2/deleteStarred.ts";
import { deleteAPIToken } from "../src/operations/v2/deleteAPIToken.ts";
import { deleteVirtualField } from "../src/operations/v2/deleteVirtualField.ts";
import { deleteView } from "../src/operations/v2/deleteView.ts";
import { deleteDashboard } from "../src/operations/v2/deleteDashboard.ts";
import { deleteMapField } from "../src/operations/v2/deleteMapField.ts";

// ============================================================================
// ANSI colors
// ============================================================================

const RED = "\x1b[31m";
const GREEN = "\x1b[32m";
const YELLOW = "\x1b[33m";
const CYAN = "\x1b[36m";
const BOLD = "\x1b[1m";
const DIM = "\x1b[2m";
const RESET = "\x1b[0m";

// ============================================================================
// Counters
// ============================================================================

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
// Resource operations
// ============================================================================

type DeleteEffect = Effect.Effect<unknown, unknown, never>;

const deleteOne = (
  dryRun: boolean,
  type: string,
  label: string,
  id: string,
  name: string | undefined,
  nukeConfig: NukeConfig,
  del: () => DeleteEffect,
  indent = "  ",
) =>
  Effect.gen(function* () {
    totalFound++;
    const excluded = isExcluded(nukeConfig, type, id, name);
    if (excluded) {
      totalSkipped++;
      yield* Console.log(
        `${indent}${YELLOW}[SKIP]${RESET} ${type}: ${label} ${DIM}(${id})${RESET} — ${excluded.reason ?? "excluded"}`,
      );
      return;
    }

    if (dryRun) {
      yield* Console.log(
        `${indent}${RED}[DELETE]${RESET} ${type}: ${label} ${DIM}(${id})${RESET}`,
      );
    } else {
      yield* Console.log(
        `${indent}${RED}[DELETE]${RESET} ${type}: ${label} ${DIM}(${id})${RESET}`,
      );
      yield* del().pipe(
        Effect.andThen(() => {
          totalDeleted++;
        }),
        Effect.catch((e) => {
          totalFailed++;
          return Console.log(
            `${indent}  ${RED}Failed to delete ${type} ${id}: ${String(e)}${RESET}`,
          );
        }),
      );
    }
  });

const nukeDashboards = (dryRun: boolean, nukeConfig: NukeConfig) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}Dashboards${RESET}`);

    const dashboards = yield* listDashboards({ limit: 1000 }).pipe(
      Effect.catch((e) =>
        Console.log(`  ${RED}Failed to list dashboards: ${String(e)}${RESET}`).pipe(
          Effect.map(() => [] as any[]),
        ),
      ),
    );

    if (dashboards.length === 0) {
      yield* Console.log(`  ${DIM}No dashboards found${RESET}`);
      return;
    }

    for (const d of dashboards) {
      yield* deleteOne(
        dryRun,
        "Dashboard",
        d.dashboard.name,
        d.uid,
        d.dashboard.name,
        nukeConfig,
        () => deleteDashboard({ uid: d.uid }),
      );
    }
  });

const nukeViews = (dryRun: boolean, nukeConfig: NukeConfig) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}Views${RESET}`);

    const views = yield* getViews({}).pipe(
      Effect.catch((e) =>
        Console.log(`  ${RED}Failed to list views: ${String(e)}${RESET}`).pipe(
          Effect.map(() => [] as any[]),
        ),
      ),
    );

    if (views.length === 0) {
      yield* Console.log(`  ${DIM}No views found${RESET}`);
      return;
    }

    for (const v of views) {
      const id = (v as any).id ?? v.name;
      yield* deleteOne(
        dryRun,
        "View",
        v.name,
        id,
        v.name,
        nukeConfig,
        () => deleteView({ id }),
      );
    }
  });

const nukeMonitors = (dryRun: boolean, nukeConfig: NukeConfig) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}Monitors${RESET}`);

    const monitors = yield* getMonitors({}).pipe(
      Effect.catch((e) =>
        Console.log(`  ${RED}Failed to list monitors: ${String(e)}${RESET}`).pipe(
          Effect.map(() => [] as any[]),
        ),
      ),
    );

    if (monitors.length === 0) {
      yield* Console.log(`  ${DIM}No monitors found${RESET}`);
      return;
    }

    for (const m of monitors) {
      yield* deleteOne(
        dryRun,
        "Monitor",
        m.name,
        m.id,
        m.name,
        nukeConfig,
        () => deleteMonitor({ id: m.id }),
      );
    }
  });

const nukeNotifiers = (dryRun: boolean, nukeConfig: NukeConfig) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}Notifiers${RESET}`);

    const notifiers = yield* getNotifiers({}).pipe(
      Effect.catch((e) =>
        Console.log(
          `  ${RED}Failed to list notifiers: ${String(e)}${RESET}`,
        ).pipe(Effect.map(() => [] as any[])),
      ),
    );

    if (notifiers.length === 0) {
      yield* Console.log(`  ${DIM}No notifiers found${RESET}`);
      return;
    }

    for (const n of notifiers) {
      if (!n.id) continue;
      yield* deleteOne(
        dryRun,
        "Notifier",
        n.name,
        n.id,
        n.name,
        nukeConfig,
        () => deleteNotifier({ id: n.id! }),
      );
    }
  });

const nukeAnnotations = (dryRun: boolean, nukeConfig: NukeConfig) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}Annotations${RESET}`);

    const annotations = yield* getAnnotations({}).pipe(
      Effect.catch((e) =>
        Console.log(
          `  ${RED}Failed to list annotations: ${String(e)}${RESET}`,
        ).pipe(Effect.map(() => [] as any[])),
      ),
    );

    if (annotations.length === 0) {
      yield* Console.log(`  ${DIM}No annotations found${RESET}`);
      return;
    }

    for (const a of annotations) {
      yield* deleteOne(
        dryRun,
        "Annotation",
        a.title ?? a.type,
        a.id,
        a.title,
        nukeConfig,
        () => deleteAnnotation({ id: a.id }),
      );
    }
  });

const nukeRoles = (dryRun: boolean, nukeConfig: NukeConfig) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}Roles${RESET}`);

    const roles = yield* listRoles({}).pipe(
      Effect.catch((e) =>
        Console.log(`  ${RED}Failed to list roles: ${String(e)}${RESET}`).pipe(
          Effect.map(() => [] as any[]),
        ),
      ),
    );

    if (roles.length === 0) {
      yield* Console.log(`  ${DIM}No roles found${RESET}`);
      return;
    }

    for (const r of roles) {
      // Skip built-in system roles (common names): owner, admin, user, read-only
      const lower = r.name.toLowerCase();
      if (
        lower === "owner" ||
        lower === "admin" ||
        lower === "user" ||
        lower === "read-only" ||
        lower === "none"
      ) {
        yield* Console.log(
          `  ${DIM}[SKIP] Role: ${r.name} (built-in system role)${RESET}`,
        );
        continue;
      }
      yield* deleteOne(
        dryRun,
        "Role",
        r.name,
        r.id,
        r.name,
        nukeConfig,
        () => deleteRole({ id: r.id }),
      );
    }
  });

const nukeGroups = (dryRun: boolean, nukeConfig: NukeConfig) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}Groups${RESET}`);

    const groups = yield* listGroups({}).pipe(
      Effect.catch((e) =>
        Console.log(`  ${RED}Failed to list groups: ${String(e)}${RESET}`).pipe(
          Effect.map(() => [] as any[]),
        ),
      ),
    );

    if (groups.length === 0) {
      yield* Console.log(`  ${DIM}No groups found${RESET}`);
      return;
    }

    for (const g of groups) {
      if (g.isManaged) {
        yield* Console.log(
          `  ${DIM}[SKIP] Group: ${g.name} (managed / built-in)${RESET}`,
        );
        continue;
      }
      yield* deleteOne(
        dryRun,
        "Group",
        g.name,
        g.id,
        g.name,
        nukeConfig,
        () => deleteGroup({ id: g.id }),
      );
    }
  });

const nukeStarredQueries = (dryRun: boolean, nukeConfig: NukeConfig) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}Starred Queries${RESET}`);

    const starred = yield* getStarredQueries({ limit: 1000, who: "all" }).pipe(
      Effect.catch((e) =>
        Console.log(
          `  ${RED}Failed to list starred queries: ${String(e)}${RESET}`,
        ).pipe(Effect.map(() => [] as any[])),
      ),
    );

    if (starred.length === 0) {
      yield* Console.log(`  ${DIM}No starred queries found${RESET}`);
      return;
    }

    for (const s of starred) {
      yield* deleteOne(
        dryRun,
        "StarredQuery",
        s.name,
        s.id,
        s.name,
        nukeConfig,
        () => deleteStarred({ id: s.id }),
      );
    }
  });

const nukeAPITokens = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  currentRawToken: string,
) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}API Tokens${RESET}`);

    const tokens = yield* getAPITokens({}).pipe(
      Effect.catch((e) =>
        Console.log(`  ${RED}Failed to list API tokens: ${String(e)}${RESET}`).pipe(
          Effect.map(() => [] as any[]),
        ),
      ),
    );

    if (tokens.length === 0) {
      yield* Console.log(`  ${DIM}No API tokens found${RESET}`);
      return;
    }

    for (const t of tokens) {
      // Never delete the token currently in use (we'd lose auth mid-run).
      // Best-effort match: if the env token contains the id, treat as in-use.
      if (currentRawToken && t.id && currentRawToken.includes(t.id)) {
        yield* Console.log(
          `  ${DIM}[SKIP] APIToken: ${t.name || "(unnamed)"} (${t.id}) — currently in use${RESET}`,
        );
        continue;
      }
      yield* deleteOne(
        dryRun,
        "APIToken",
        t.name,
        t.id,
        t.name,
        nukeConfig,
        () => deleteAPIToken({ id: t.id }),
      );
    }
  });

const nukeVirtualFieldsForDataset = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  dataset: string,
) =>
  Effect.gen(function* () {
    const vfields = yield* getVirtualFields({ dataset }).pipe(
      Effect.catch((e) =>
        Console.log(
          `    ${RED}Failed to list virtual fields for ${dataset}: ${String(e)}${RESET}`,
        ).pipe(Effect.map(() => [] as any[])),
      ),
    );

    for (const vf of vfields) {
      yield* deleteOne(
        dryRun,
        "VirtualField",
        `${dataset}/${vf.name}`,
        vf.id,
        vf.name,
        nukeConfig,
        () => deleteVirtualField({ id: vf.id }),
        "    ",
      );
    }
  });

const nukeMapFieldsForDataset = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  datasetId: string,
) =>
  Effect.gen(function* () {
    const mapFields = yield* getMapFields({ dataset_id: datasetId }).pipe(
      Effect.catch((e) =>
        Console.log(
          `    ${RED}Failed to list map fields for ${datasetId}: ${String(e)}${RESET}`,
        ).pipe(Effect.map(() => [] as string[])),
      ),
    );

    for (const mf of mapFields) {
      yield* deleteOne(
        dryRun,
        "MapField",
        `${datasetId}/${mf}`,
        `${datasetId}/${mf}`,
        mf,
        nukeConfig,
        () =>
          deleteMapField({
            dataset_id: datasetId,
            map_field_name: mf,
          }),
        "    ",
      );
    }
  });

const nukeDatasets = (dryRun: boolean, nukeConfig: NukeConfig) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}Datasets${RESET}`);

    const datasets = yield* getDatasets({}).pipe(
      Effect.catch((e) =>
        Console.log(`  ${RED}Failed to list datasets: ${String(e)}${RESET}`).pipe(
          Effect.map(() => [] as any[]),
        ),
      ),
    );

    if (datasets.length === 0) {
      yield* Console.log(`  ${DIM}No datasets found${RESET}`);
      return;
    }

    for (const ds of datasets) {
      yield* Console.log(
        `\n  ${BOLD}Dataset: ${ds.name}${RESET} ${DIM}(id: ${ds.id}, kind: ${ds.kind})${RESET}`,
      );

      const excluded = isExcluded(nukeConfig, "Dataset", ds.id, ds.name);
      if (excluded) {
        totalFound++;
        totalSkipped++;
        yield* Console.log(
          `  ${YELLOW}[SKIP]${RESET} Dataset: ${ds.name} ${DIM}(${ds.id})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        // Still list (dry-run only) child resources for visibility
        yield* nukeVirtualFieldsForDataset(true, nukeConfig, ds.name);
        yield* nukeMapFieldsForDataset(true, nukeConfig, ds.id);
        continue;
      }

      // Delete children first
      yield* nukeVirtualFieldsForDataset(dryRun, nukeConfig, ds.name);
      yield* nukeMapFieldsForDataset(dryRun, nukeConfig, ds.id);

      // Then the dataset itself
      yield* deleteOne(
        dryRun,
        "Dataset",
        ds.name,
        ds.id,
        ds.name,
        nukeConfig,
        () => deleteDataset({ dataset_id: ds.id }),
      );
    }
  });

const listUsersReadOnly = (currentUserId: string) =>
  Effect.gen(function* () {
    yield* Console.log(
      `\n${BOLD}${CYAN}Users${RESET} ${DIM}(list-only; users are never auto-deleted)${RESET}`,
    );

    const users = yield* getUsers({}).pipe(
      Effect.catch((e) =>
        Console.log(`  ${RED}Failed to list users: ${String(e)}${RESET}`).pipe(
          Effect.map(() => [] as any[]),
        ),
      ),
    );

    if (users.length === 0) {
      yield* Console.log(`  ${DIM}No users found${RESET}`);
      return;
    }

    for (const u of users) {
      const marker = u.id === currentUserId ? ` ${CYAN}(you)${RESET}` : "";
      yield* Console.log(
        `  ${DIM}- ${u.name} <${u.email}> role=${u.role.name}${marker}${RESET}`,
      );
    }
  });

const listOrgsReadOnly = () =>
  Effect.gen(function* () {
    yield* Console.log(
      `\n${BOLD}${CYAN}Orgs${RESET} ${DIM}(list-only; orgs are never auto-deleted)${RESET}`,
    );

    const orgs = yield* getOrgs({}).pipe(
      Effect.catch((e) =>
        Console.log(`  ${RED}Failed to list orgs: ${String(e)}${RESET}`).pipe(
          Effect.map(() => [] as any[]),
        ),
      ),
    );

    if (orgs.length === 0) {
      yield* Console.log(`  ${DIM}No orgs found${RESET}`);
      return;
    }

    for (const o of orgs) {
      yield* Console.log(
        `  ${DIM}- ${o.name} (${o.id}) plan=${o.plan}${RESET}`,
      );
    }
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
      const nukeConfig = loadNukeConfig();
      const mode = cfg.dryRun ? `${YELLOW}DRY RUN${RESET}` : `${RED}LIVE${RESET}`;
      yield* Console.log(
        `\n${BOLD}Axiom Nuke${RESET} ${DIM}(${mode}${DIM})${RESET}`,
      );

      if (!cfg.dryRun) {
        yield* Console.log(
          `${RED}${BOLD}WARNING: This will DELETE all resources in the Axiom account!${RESET}`,
        );
        yield* Console.log(
          `${DIM}Users and Orgs are never auto-deleted — they are listed only.${RESET}`,
        );
      }

      if (nukeConfig.exclude && nukeConfig.exclude.length > 0) {
        yield* Console.log(
          `${DIM}Loaded ${nukeConfig.exclude.length} exclusion rule(s) from nuke-config.json${RESET}`,
        );
      }

      // Identify current user and token (so we never remove them)
      const currentUser = yield* getCurrentUser({}).pipe(
        Effect.catch((e) =>
          Console.log(
            `${YELLOW}Warning: could not resolve current user: ${String(e)}${RESET}`,
          ).pipe(Effect.map(() => null as any)),
        ),
      );
      if (currentUser) {
        yield* Console.log(
          `${DIM}Authenticated as: ${currentUser.name} <${currentUser.email}> (id: ${currentUser.id})${RESET}`,
        );
      }

      const rawToken = process.env.AXIOM_TOKEN ?? process.env.AXIOM_API_KEY ?? "";

      // Deletion order (leaves -> roots):
      // 1. Dashboards (UI-only, independent)
      yield* nukeDashboards(cfg.dryRun, nukeConfig);
      // 2. Views (independent)
      yield* nukeViews(cfg.dryRun, nukeConfig);
      // 3. Monitors (depend on notifiers & datasets; delete before notifiers)
      yield* nukeMonitors(cfg.dryRun, nukeConfig);
      // 4. Notifiers (after monitors are gone)
      yield* nukeNotifiers(cfg.dryRun, nukeConfig);
      // 5. Annotations (reference datasets)
      yield* nukeAnnotations(cfg.dryRun, nukeConfig);
      // 6. Starred queries (reference datasets)
      yield* nukeStarredQueries(cfg.dryRun, nukeConfig);
      // 7. API tokens (auth — skip current one)
      yield* nukeAPITokens(cfg.dryRun, nukeConfig, rawToken);
      // 8. Groups (RBAC)
      yield* nukeGroups(cfg.dryRun, nukeConfig);
      // 9. Roles (RBAC — after groups release them)
      yield* nukeRoles(cfg.dryRun, nukeConfig);
      // 10. Datasets + their virtual fields + map fields (last — most foundational)
      yield* nukeDatasets(cfg.dryRun, nukeConfig);

      // Read-only listings (safety: never delete these)
      yield* listUsersReadOnly(currentUser?.id ?? "");
      yield* listOrgsReadOnly();

      // Summary
      yield* Console.log(`\n${BOLD}Summary${RESET}`);
      yield* Console.log(`  Total found:   ${totalFound}`);
      yield* Console.log(`  ${YELLOW}Skipped:       ${totalSkipped}${RESET}`);
      if (!cfg.dryRun) {
        yield* Console.log(`  ${GREEN}Deleted:       ${totalDeleted}${RESET}`);
        if (totalFailed > 0) {
          yield* Console.log(`  ${RED}Failed:        ${totalFailed}${RESET}`);
        }
      } else {
        yield* Console.log(
          `  ${DIM}(dry-run: no deletions performed)${RESET}`,
        );
      }
    }).pipe(
      Effect.provide(CredentialsFromEnv),
      Effect.provide(FetchHttpClient.layer),
    ),
).pipe(Command.withDescription("List and delete all Axiom resources"));

// ============================================================================
// Entry Point
// ============================================================================

BunRuntime.runMain(
  Effect.provide(Command.run(nuke, { version: "1.0.0" }), BunServices.layer),
);
