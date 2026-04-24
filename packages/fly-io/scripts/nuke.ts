#!/usr/bin/env bun
/**
 * Fly.io Nuke Script
 *
 * Lists and deletes all resources in a Fly.io account.
 * Supports --dry-run to preview without deleting.
 *
 * Usage:
 *   bun packages/fly-io/scripts/nuke.ts --dry-run
 *   bun packages/fly-io/scripts/nuke.ts
 */
import { config } from "dotenv";
import * as fs from "node:fs";
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
import { CredentialsFromEnv } from "@distilled.cloud/fly-io";
import {
  AppsList,
  AppsDelete,
  MachinesList,
  MachinesDelete,
  MachinesStop,
  VolumesList,
  VolumeDelete,
  SecretsList,
  SecretDelete,
  SecretkeysList,
  SecretkeyDelete,
} from "@distilled.cloud/fly-io/Operations";

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
// Nuke config types and loading
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
    if (name && rule.namePatterns?.some((p) => matchGlob(p, name)))
      return true;
    return false;
  });
}

// ============================================================================
// Counters
// ============================================================================

let totalFound = 0;
let totalSkipped = 0;
let totalDeleted = 0;
let totalFailed = 0;

// ============================================================================
// Resource operations
// ============================================================================

const listAndDeleteMachines = (
  appName: string,
  dryRun: boolean,
  nukeConfig: NukeConfig,
) =>
  Effect.gen(function* () {
    yield* Console.log(`\n  ${BOLD}${CYAN}Machines${RESET} ${DIM}(app: ${appName})${RESET}`);

    const machines = yield* MachinesList({ app_name: appName }).pipe(
      Effect.catch(() =>
        Console.log(`    ${RED}Failed to list machines${RESET}`).pipe(
          Effect.map(() => [] as any[]),
        ),
      ),
    );
    totalFound += machines.length;

    if (machines.length === 0) {
      yield* Console.log(`    ${DIM}No machines found${RESET}`);
      return;
    }

    for (const machine of machines) {
      const id = machine.id ?? "unknown";
      const name = machine.name ?? "unnamed";
      const state = machine.state ?? "unknown";
      const region = machine.region ?? "?";

      const excluded = isExcluded(nukeConfig, "Machine", id, name);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} Machine: ${name} ${DIM}(id: ${id}, state: ${state}, region: ${region})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} Machine: ${name} ${DIM}(id: ${id}, state: ${state}, region: ${region})${RESET}`,
        );
      } else {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} Machine: ${name} ${DIM}(id: ${id}, state: ${state}, region: ${region})${RESET}`,
        );
        // Stop the machine first if running, then force delete
        if (state === "started" || state === "running") {
          yield* MachinesStop({ app_name: appName, machine_id: id }).pipe(
            Effect.catch(() => Effect.void),
          );
        }
        yield* MachinesDelete({
          app_name: appName,
          machine_id: id,
          force: true,
        }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `      ${RED}Failed to delete machine ${id}${RESET}`,
            );
          }),
        );
      }
    }
  });

const listAndDeleteVolumes = (
  appName: string,
  dryRun: boolean,
  nukeConfig: NukeConfig,
) =>
  Effect.gen(function* () {
    yield* Console.log(`\n  ${BOLD}${CYAN}Volumes${RESET} ${DIM}(app: ${appName})${RESET}`);

    const volumes = yield* VolumesList({ app_name: appName }).pipe(
      Effect.catch(() =>
        Console.log(`    ${RED}Failed to list volumes${RESET}`).pipe(
          Effect.map(() => [] as any[]),
        ),
      ),
    );
    totalFound += volumes.length;

    if (volumes.length === 0) {
      yield* Console.log(`    ${DIM}No volumes found${RESET}`);
      return;
    }

    for (const volume of volumes) {
      const id = volume.id ?? "unknown";
      const name = volume.name ?? "unnamed";
      const region = volume.region ?? "?";
      const sizeGb = volume.size_gb ?? 0;

      const excluded = isExcluded(nukeConfig, "Volume", id, name);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} Volume: ${name} ${DIM}(id: ${id}, region: ${region}, size: ${sizeGb}GB)${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} Volume: ${name} ${DIM}(id: ${id}, region: ${region}, size: ${sizeGb}GB)${RESET}`,
        );
      } else {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} Volume: ${name} ${DIM}(id: ${id}, region: ${region}, size: ${sizeGb}GB)${RESET}`,
        );
        yield* VolumeDelete({ app_name: appName, volume_id: id }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `      ${RED}Failed to delete volume ${id}${RESET}`,
            );
          }),
        );
      }
    }
  });

const listAndDeleteSecrets = (
  appName: string,
  dryRun: boolean,
  nukeConfig: NukeConfig,
) =>
  Effect.gen(function* () {
    yield* Console.log(`\n  ${BOLD}${CYAN}Secrets${RESET} ${DIM}(app: ${appName})${RESET}`);

    const result = yield* SecretsList({ app_name: appName }).pipe(
      Effect.catch(() =>
        Console.log(`    ${RED}Failed to list secrets${RESET}`).pipe(
          Effect.map(() => ({ secrets: [] as any[] })),
        ),
      ),
    );
    const secrets = result.secrets ?? [];
    totalFound += secrets.length;

    if (secrets.length === 0) {
      yield* Console.log(`    ${DIM}No secrets found${RESET}`);
      return;
    }

    for (const secret of secrets) {
      const name = secret.name ?? "unnamed";

      const excluded = isExcluded(nukeConfig, "Secret", name, name);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} Secret: ${name} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} Secret: ${name}`,
        );
      } else {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} Secret: ${name}`,
        );
        yield* SecretDelete({ app_name: appName, secret_name: name }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `      ${RED}Failed to delete secret ${name}${RESET}`,
            );
          }),
        );
      }
    }
  });

const listAndDeleteSecretKeys = (
  appName: string,
  dryRun: boolean,
  nukeConfig: NukeConfig,
) =>
  Effect.gen(function* () {
    yield* Console.log(`\n  ${BOLD}${CYAN}Secret Keys${RESET} ${DIM}(app: ${appName})${RESET}`);

    const result = yield* SecretkeysList({ app_name: appName }).pipe(
      Effect.catch(() =>
        Console.log(`    ${RED}Failed to list secret keys${RESET}`).pipe(
          Effect.map(() => ({ secret_keys: [] as any[] })),
        ),
      ),
    );
    const secretKeys = result.secret_keys ?? [];
    totalFound += secretKeys.length;

    if (secretKeys.length === 0) {
      yield* Console.log(`    ${DIM}No secret keys found${RESET}`);
      return;
    }

    for (const key of secretKeys) {
      const name = key.name ?? "unnamed";
      const type = key.type ?? "unknown";

      const excluded = isExcluded(nukeConfig, "SecretKey", name, name);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} SecretKey: ${name} ${DIM}(type: ${type})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} SecretKey: ${name} ${DIM}(type: ${type})${RESET}`,
        );
      } else {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} SecretKey: ${name} ${DIM}(type: ${type})${RESET}`,
        );
        yield* SecretkeyDelete({ app_name: appName, secret_name: name }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `      ${RED}Failed to delete secret key ${name}${RESET}`,
            );
          }),
        );
      }
    }
  });

const listAndDeleteApps = (
  orgSlug: string,
  dryRun: boolean,
  nukeConfig: NukeConfig,
) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}Apps${RESET} ${DIM}(org: ${orgSlug})${RESET}`);

    const result = yield* AppsList({ org_slug: orgSlug }).pipe(
      Effect.catch(() =>
        Console.log(`  ${RED}Failed to list apps${RESET}`).pipe(
          Effect.map(() => ({ apps: [] as any[] })),
        ),
      ),
    );
    const apps = result.apps ?? [];
    totalFound += apps.length;

    if (apps.length === 0) {
      yield* Console.log(`  ${DIM}No apps found${RESET}`);
      return;
    }

    // First pass: list and delete child resources for each app
    for (const app of apps) {
      const id = app.id ?? "unknown";
      const name = app.name ?? "unnamed";
      const status = app.status ?? "unknown";
      const machineCount = app.machine_count ?? 0;
      const volumeCount = app.volume_count ?? 0;

      const excluded = isExcluded(nukeConfig, "App", id, name);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `  ${YELLOW}[SKIP]${RESET} App: ${name} ${DIM}(id: ${id}, status: ${status}, machines: ${machineCount}, volumes: ${volumeCount})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      yield* Console.log(
        `\n  ${BOLD}App: ${name}${RESET} ${DIM}(id: ${id}, status: ${status}, machines: ${machineCount}, volumes: ${volumeCount})${RESET}`,
      );

      // Delete child resources before app (dependency order)
      yield* listAndDeleteMachines(name, dryRun, nukeConfig);
      yield* listAndDeleteVolumes(name, dryRun, nukeConfig);
      yield* listAndDeleteSecrets(name, dryRun, nukeConfig);
      yield* listAndDeleteSecretKeys(name, dryRun, nukeConfig);

      // Delete the app itself
      if (dryRun) {
        yield* Console.log(
          `\n  ${RED}[DELETE]${RESET} App: ${name} ${DIM}(id: ${id})${RESET}`,
        );
      } else {
        yield* Console.log(
          `\n  ${RED}[DELETE]${RESET} App: ${name} ${DIM}(id: ${id})${RESET}`,
        );
        yield* AppsDelete({ app_name: name }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `    ${RED}Failed to delete app ${name}${RESET}`,
            );
          }),
        );
      }
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
    orgSlug: Flag.string("org").pipe(
      Flag.withDescription(
        "Organization slug to nuke (default: 'personal')",
      ),
      Flag.withDefault("personal"),
    ),
  },
  (config) =>
    Effect.gen(function* () {
      const mode = config.dryRun
        ? `${YELLOW}DRY RUN${RESET}`
        : `${RED}LIVE${RESET}`;
      yield* Console.log(
        `\n${BOLD}Fly.io Nuke${RESET} ${DIM}(${mode}${DIM})${RESET}`,
      );

      if (!config.dryRun) {
        yield* Console.log(
          `${RED}${BOLD}WARNING: This will DELETE all resources!${RESET}`,
        );
      }

      const nukeConfig = loadNukeConfig();
      if (nukeConfig.exclude?.length) {
        yield* Console.log(
          `${DIM}Loaded ${nukeConfig.exclude.length} exclusion rule(s) from nuke-config.json${RESET}`,
        );
      }

      // List and delete all apps and their child resources
      yield* listAndDeleteApps(config.orgSlug, config.dryRun, nukeConfig);

      // Summary
      yield* Console.log(`\n${BOLD}Summary${RESET}`);
      yield* Console.log(`  Total found:   ${totalFound}`);
      yield* Console.log(`  ${YELLOW}Skipped:       ${totalSkipped}${RESET}`);
      if (!config.dryRun) {
        yield* Console.log(`  ${GREEN}Deleted:       ${totalDeleted}${RESET}`);
        if (totalFailed > 0) {
          yield* Console.log(`  ${RED}Failed:        ${totalFailed}${RESET}`);
        }
      }
    }).pipe(
      Effect.provide(CredentialsFromEnv),
      Effect.provide(FetchHttpClient.layer),
    ),
).pipe(Command.withDescription("List and delete all Fly.io resources"));

// ============================================================================
// Entry Point
// ============================================================================

BunRuntime.runMain(
  Effect.provide(Command.run(nuke, { version: "1.0.0" }), BunServices.layer),
);
