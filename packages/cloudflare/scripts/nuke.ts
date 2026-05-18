#!/usr/bin/env bun
/**
 * Cloudflare Nuke Script
 *
 * Lists and deletes all resources in a Cloudflare account.
 * Supports --dry-run to preview without deleting.
 *
 * Usage:
 *   bun packages/cloudflare/scripts/nuke.ts --dry-run
 *   bun packages/cloudflare/scripts/nuke.ts
 */
import { config } from "dotenv";
import * as fs from "node:fs";
import * as nodePath from "node:path";

// Load .env from repo root (two levels up from scripts/)
const envPath = nodePath.resolve(import.meta.dir, "../../../.env");
config({ path: envPath });
if (!process.env.CLOUDFLARE_API_TOKEN && !process.env.CLOUDFLARE_API_KEY) {
  // Also try CWD/.env as fallback
  config();
}

import { BunRuntime, BunServices } from "@effect/platform-bun";
import { Console, Effect } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { Command, Flag } from "effect/unstable/cli";

import { CredentialsFromEnv } from "../src/credentials.ts";
import * as R2 from "../src/services/r2.ts";
import * as KV from "../src/services/kv.ts";
import * as D1 from "../src/services/d1.ts";
import * as Queues from "../src/services/queues.ts";
import * as Workers from "../src/services/workers.ts";
import * as Hyperdrive from "../src/services/hyperdrive.ts";
import * as Vectorize from "../src/services/vectorize.ts";
import * as Pipelines from "../src/services/pipelines.ts";
import * as Workflows from "../src/services/workflows.ts";
import * as AIGateway from "../src/services/ai-gateway.ts";
import * as SecretsStore from "../src/services/secrets-store.ts";
import * as Containers from "../src/services/containers.ts";
import * as AISearch from "../src/services/aisearch.ts";
import * as Pages from "../src/services/pages.ts";
import * as WorkersForPlatforms from "../src/services/workers-for-platforms.ts";
import * as Stream from "../src/services/stream.ts";

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
// Account ID
// ============================================================================

function getAccountId(): string {
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
  if (!accountId) {
    throw new Error(
      "CLOUDFLARE_ACCOUNT_ID environment variable is required to run nuke",
    );
  }
  return accountId;
}

// ============================================================================
// Generic resource nuker
// ============================================================================

/**
 * Generic helper: list resources, then for each: print, optionally delete.
 *
 * - `type`: resource type name (matches nuke-config.json `type`)
 * - `header`: section header (e.g. "R2 Buckets")
 * - `list`: effect that resolves to an array of resources
 * - `getId`: extract id from a resource
 * - `getName`: extract display name from a resource (defaults to id)
 * - `getMeta`: optional extra info shown after the id (e.g. region, status)
 * - `delete`: effect that deletes one resource
 */
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
  return Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}${opts.header}${RESET}`);

    const items = yield* opts.list.pipe(
      Effect.catch((err) =>
        Console.log(
          `  ${RED}Failed to list ${opts.type}: ${err?._tag ?? err?.message ?? String(err)}${RESET}`,
        ).pipe(Effect.map(() => [] as readonly T[])),
      ),
    );

    if (items.length === 0) {
      yield* Console.log(`  ${DIM}No ${opts.type} found${RESET}`);
      return;
    }

    for (const item of items) {
      totalFound++;
      const id = opts.getId(item);
      const name = opts.getName ? opts.getName(item) : undefined;
      const meta = opts.getMeta ? opts.getMeta(item) : undefined;
      const label = name && name !== id ? `${name} ${DIM}(${id})${RESET}` : id;
      const metaSuffix = meta ? ` ${DIM}${meta}${RESET}` : "";

      const excluded = isExcluded(opts.nukeConfig, opts.type, id, name);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `  ${YELLOW}[SKIP]${RESET} ${opts.type}: ${label}${metaSuffix} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (opts.dryRun) {
        yield* Console.log(
          `  ${RED}[DELETE]${RESET} ${opts.type}: ${label}${metaSuffix}`,
        );
      } else {
        yield* Console.log(
          `  ${RED}[DELETE]${RESET} ${opts.type}: ${label}${metaSuffix}`,
        );
        yield* opts.delete(item).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch((err) => {
            totalFailed++;
            return Console.log(
              `    ${RED}Failed: ${err?._tag ?? err?.message ?? String(err)}${RESET}`,
            );
          }),
        );
      }
    }
  });
}

// ============================================================================
// Resource definitions
// ============================================================================

const nukeAll = (dryRun: boolean, nukeConfig: NukeConfig, accountId: string) =>
  Effect.gen(function* () {
    // ----- Workers (delete first - may have bindings to other resources) -----
    yield* nukeResources({
      type: "WorkerScript",
      header: "Worker Scripts",
      dryRun,
      nukeConfig,
      list: Workers.listScripts({ accountId }).pipe(
        Effect.map((r) => r.result ?? []),
      ),
      getId: (s) => s.id ?? "",
      getName: (s) => s.id ?? undefined,
      getMeta: (s) =>
        s.modifiedOn ? `modified: ${s.modifiedOn}` : undefined,
      delete: (s) =>
        Workers.deleteScript({
          accountId,
          scriptName: s.id ?? "",
          force: true,
        }),
    });

    // ----- Workers for Platforms dispatch namespaces -----
    yield* nukeResources({
      type: "DispatchNamespace",
      header: "Workers for Platforms — Dispatch Namespaces",
      dryRun,
      nukeConfig,
      list: WorkersForPlatforms.listDispatchNamespaces({ accountId }).pipe(
        Effect.map((r) => r.result ?? []),
      ),
      getId: (n) => n.namespaceId ?? "",
      getName: (n) => n.namespaceName ?? undefined,
      getMeta: (n) =>
        n.scriptCount !== null && n.scriptCount !== undefined
          ? `scripts: ${n.scriptCount}`
          : undefined,
      delete: (n) =>
        WorkersForPlatforms.deleteDispatchNamespace({
          accountId,
          dispatchNamespace: n.namespaceName ?? "",
        }),
    });

    // ----- Pages projects -----
    yield* nukeResources({
      type: "PagesProject",
      header: "Pages Projects",
      dryRun,
      nukeConfig,
      list: Pages.listProjects({ accountId }).pipe(
        Effect.map((r) => r.result ?? []),
      ),
      getId: (p: any) => p.id ?? p.name ?? "",
      getName: (p: any) => p.name ?? undefined,
      delete: (p: any) =>
        Pages.deleteProject({ accountId, projectName: p.name ?? "" }),
    });

    // ----- Workflows -----
    yield* nukeResources({
      type: "Workflow",
      header: "Workflows",
      dryRun,
      nukeConfig,
      list: Workflows.listWorkflows({ accountId }).pipe(
        Effect.map((r) => r.result ?? []),
      ),
      getId: (w) => w.id,
      getName: (w) => w.name,
      getMeta: (w) => `class: ${w.className}`,
      delete: (w) =>
        Workflows.deleteWorkflow({ accountId, workflowName: w.name }),
    });

    // ----- Queues -----
    yield* nukeResources({
      type: "Queue",
      header: "Queues",
      dryRun,
      nukeConfig,
      list: Queues.listQueues({ accountId }).pipe(
        Effect.map((r) => (r as any).result ?? []),
      ),
      getId: (q: any) => q.queueId ?? "",
      getName: (q: any) => q.queueName ?? undefined,
      delete: (q: any) =>
        Queues.deleteQueue({ accountId, queueId: q.queueId ?? "" }),
    });

    // ----- Vectorize indexes -----
    yield* nukeResources({
      type: "VectorizeIndex",
      header: "Vectorize Indexes",
      dryRun,
      nukeConfig,
      list: Vectorize.listIndexes({ accountId }).pipe(
        Effect.map((r) => (r as any).result ?? []),
      ),
      getId: (i: any) => i.name ?? "",
      getName: (i: any) => i.name ?? undefined,
      delete: (i: any) =>
        Vectorize.deleteIndex({ accountId, indexName: i.name ?? "" }),
    });

    // ----- Hyperdrive configs -----
    yield* nukeResources({
      type: "HyperdriveConfig",
      header: "Hyperdrive Configs",
      dryRun,
      nukeConfig,
      list: Hyperdrive.listConfigs({ accountId }).pipe(
        Effect.map((r) => (r as any).result ?? []),
      ),
      getId: (c: any) => c.id ?? "",
      getName: (c: any) => c.name ?? undefined,
      delete: (c: any) =>
        Hyperdrive.deleteConfig({ accountId, hyperdriveId: c.id ?? "" }),
    });

    // ----- D1 databases -----
    yield* nukeResources({
      type: "D1Database",
      header: "D1 Databases",
      dryRun,
      nukeConfig,
      list: D1.listDatabases({ accountId }).pipe(
        Effect.map((r) => r.result ?? []),
      ),
      getId: (d) => d.uuid ?? "",
      getName: (d) => d.name ?? undefined,
      delete: (d) =>
        D1.deleteDatabase({ accountId, databaseId: d.uuid ?? "" }),
    });

    // ----- KV namespaces -----
    yield* nukeResources({
      type: "KVNamespace",
      header: "KV Namespaces",
      dryRun,
      nukeConfig,
      list: KV.listNamespaces({ accountId }).pipe(
        Effect.map((r) => r.result ?? []),
      ),
      getId: (n) => n.id,
      getName: (n) => n.title,
      delete: (n) =>
        KV.deleteNamespace({ accountId, namespaceId: n.id }),
    });

    // ----- AI Gateway -----
    yield* nukeResources({
      type: "AIGateway",
      header: "AI Gateways",
      dryRun,
      nukeConfig,
      list: AIGateway.listAiGateways({ accountId }).pipe(
        Effect.map((r) => r.result ?? []),
      ),
      getId: (g) => g.id,
      getName: (g) => g.id,
      delete: (g) => AIGateway.deleteAiGateway({ accountId, id: g.id }),
    });

    // ----- AI Search instances -----
    yield* nukeResources({
      type: "AISearchInstance",
      header: "AI Search Instances",
      dryRun,
      nukeConfig,
      list: AISearch.listInstances({ accountId }).pipe(
        Effect.map((r) => r.result ?? []),
      ),
      getId: (i: any) => i.id,
      getName: (i: any) => i.name ?? i.id,
      delete: (i: any) => AISearch.deleteInstance({ accountId, id: i.id }),
    });

    // ----- Secrets Store -----
    yield* nukeResources({
      type: "SecretsStore",
      header: "Secrets Stores",
      dryRun,
      nukeConfig,
      list: SecretsStore.listStores({ accountId }).pipe(
        Effect.map((r) => r.result ?? []),
      ),
      getId: (s) => s.id,
      getName: (s) => s.name,
      delete: (s) =>
        SecretsStore.deleteStore({ accountId, storeId: s.id }),
    });

    // ----- Containers -----
    yield* nukeResources({
      type: "ContainerApplication",
      header: "Container Applications",
      dryRun,
      nukeConfig,
      list: Containers.listContainerApplications({ accountId }).pipe(
        Effect.map((r) => (Array.isArray(r) ? r : [])),
      ),
      getId: (c: any) => c.id,
      getName: (c: any) => c.name,
      delete: (c: any) =>
        Containers.deleteContainerApplication({
          accountId,
          applicationId: c.id,
        }),
    });

    // ----- Stream videos -----
    yield* nukeResources({
      type: "StreamVideo",
      header: "Stream Videos",
      dryRun,
      nukeConfig,
      list: Stream.listStreams({ accountId }).pipe(
        Effect.map((r) => r.result ?? []),
      ),
      getId: (v: any) => v.uid ?? "",
      getName: (v: any) => v.uid ?? undefined,
      delete: (v: any) =>
        Stream.deleteStream({ accountId, identifier: v.uid ?? "" }),
    });

    // ----- Stream Live Inputs -----
    yield* nukeResources({
      type: "StreamLiveInput",
      header: "Stream Live Inputs",
      dryRun,
      nukeConfig,
      list: Stream.listLiveInputs({ accountId }).pipe(
        Effect.map((r) => r.liveInputs ?? []),
      ),
      getId: (l: any) => l.uid ?? "",
      getName: (l: any) => l.uid ?? undefined,
      delete: (l: any) =>
        Stream.deleteLiveInput({
          accountId,
          liveInputIdentifier: l.uid ?? "",
        }),
    });

    // ----- Stream Watermarks -----
    yield* nukeResources({
      type: "StreamWatermark",
      header: "Stream Watermarks",
      dryRun,
      nukeConfig,
      list: Stream.listWatermarks({ accountId }).pipe(
        Effect.map((r) => r.result ?? []),
      ),
      getId: (w: any) => w.uid ?? "",
      getName: (w: any) => w.name ?? undefined,
      delete: (w: any) =>
        Stream.deleteWatermark({ accountId, identifier: w.uid ?? "" }),
    });

    // ----- Pipelines (delete before R2 - R2 buckets may be referenced) -----
    yield* nukeResources({
      type: "Pipeline",
      header: "Pipelines",
      dryRun,
      nukeConfig,
      list: Pipelines.listPipelines({ accountId }).pipe(
        Effect.map((r) => (r as any).results ?? []),
      ),
      getId: (p: any) => p.id ?? p.name ?? "",
      getName: (p: any) => p.name ?? undefined,
      delete: (p: any) =>
        Pipelines.deletePipeline({
          accountId,
          pipelineName: p.name ?? "",
        }),
    });

    // ----- R2 buckets (delete last - may contain test data) -----
    yield* nukeResources({
      type: "R2Bucket",
      header: "R2 Buckets",
      dryRun,
      nukeConfig,
      list: R2.listBuckets({ accountId }).pipe(
        Effect.map((r) => r.buckets ?? []),
      ),
      getId: (b: any) => b.name ?? "",
      getName: (b: any) => b.name ?? undefined,
      getMeta: (b: any) =>
        b.location ? `location: ${b.location}` : undefined,
      delete: (b: any) =>
        R2.deleteBucket({ accountId, bucketName: b.name ?? "" }),
    });
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
      const accountId = getAccountId();
      const nukeConfig = loadNukeConfig();
      const mode = cfg.dryRun
        ? `${YELLOW}DRY RUN${RESET}`
        : `${RED}LIVE${RESET}`;
      yield* Console.log(
        `\n${BOLD}Cloudflare Nuke${RESET} ${DIM}(account: ${accountId}, mode: ${mode}${DIM})${RESET}`,
      );

      if (!cfg.dryRun) {
        yield* Console.log(
          `${RED}${BOLD}WARNING: This will DELETE all resources in this Cloudflare account!${RESET}`,
        );
      }

      if (nukeConfig.exclude && nukeConfig.exclude.length > 0) {
        yield* Console.log(
          `${DIM}Loaded ${nukeConfig.exclude.length} exclusion rule(s) from nuke-config.json${RESET}`,
        );
      }

      yield* nukeAll(cfg.dryRun, nukeConfig, accountId);

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
).pipe(Command.withDescription("List and delete all Cloudflare resources"));

// ============================================================================
// Entry Point
// ============================================================================

BunRuntime.runMain(
  Effect.provide(Command.run(nuke, { version: "1.0.0" }), BunServices.layer),
);
