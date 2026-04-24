#!/usr/bin/env bun
/**
 * Supabase Nuke Script
 *
 * Lists and deletes all resources in a Supabase account.
 * Supports --dry-run to preview without deleting.
 *
 * Usage:
 *   bun packages/supabase/scripts/nuke.ts --dry-run
 *   bun packages/supabase/scripts/nuke.ts
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
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { Console, Effect } from "effect";
import { Command, Flag } from "effect/unstable/cli";
import { CredentialsFromEnv } from "@distilled.cloud/supabase";
import {
  v1ListAllProjects,
  v1ListAllOrganizations,
  v1ListAllBranches,
  v1ListAllBuckets,
  v1ListAllFunctions,
  v1ListAllSecrets,
  v1ListAllSnippets,
  v1ListAllSsoProvider,
  v1ListAllBackups,
  v1ListAllNetworkBans,
  v1ListProjectTpaIntegrations,
  v1ListProjectAddons,
  v1GetProjectApiKeys,
  v1GetProjectSigningKeys,
  v1ListJitAccess,
  v1DeleteAProject,
  v1DeleteABranch,
  v1DeleteAFunction,
  v1DeleteASsoProvider,
  v1BulkDeleteSecrets,
  v1DeleteNetworkBans,
  v1DeleteProjectApiKey,
  v1DeleteProjectTpaIntegration,
  v1RemoveProjectSigningKey,
  v1RemoveProjectAddon,
  v1DeleteJitAccess,
} from "@distilled.cloud/supabase/Operations";

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
// Safe wrapper — catches errors and returns empty array / undefined
// ============================================================================

function safeList<A, E, R>(
  effect: Effect.Effect<A, E, R>,
  label: string,
): Effect.Effect<A | undefined, never, R> {
  return effect.pipe(
    Effect.catch(() =>
      Console.log(`  ${RED}Failed to list ${label}${RESET}`).pipe(
        Effect.map(() => undefined as A | undefined),
      ),
    ),
  );
}

function safeDelete<A, E, R>(
  effect: Effect.Effect<A, E, R>,
  label: string,
): Effect.Effect<boolean, never, R> {
  return effect.pipe(
    Effect.map(() => {
      totalDeleted++;
      return true;
    }),
    Effect.catch(() => {
      totalFailed++;
      return Console.log(`    ${RED}Failed to delete ${label}${RESET}`).pipe(
        Effect.map(() => false),
      );
    }),
  );
}

// ============================================================================
// Per-project child resource handlers
// ============================================================================

const nukeProjectBranches = (
  ref: string,
  dryRun: boolean,
  nukeConfig: NukeConfig,
) =>
  Effect.gen(function* () {
    const branches = yield* safeList(
      v1ListAllBranches({ ref }),
      `branches for ${ref}`,
    );
    if (!branches || branches.length === 0) return;

    yield* Console.log(`\n  ${BOLD}${CYAN}Branches${RESET} ${DIM}(project: ${ref})${RESET}`);
    for (const branch of branches) {
      if (branch.is_default) continue; // skip default branch
      totalFound++;
      const excluded = isExcluded(nukeConfig, "Branch", branch.id, branch.name);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} Branch: ${branch.name} ${DIM}(id: ${branch.id})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
      } else if (dryRun) {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} Branch: ${branch.name} ${DIM}(id: ${branch.id})${RESET}`,
        );
      } else {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} Branch: ${branch.name} ${DIM}(id: ${branch.id})${RESET}`,
        );
        yield* safeDelete(
          v1DeleteABranch({ branch_id_or_ref: branch.id }),
          `branch ${branch.id}`,
        );
      }
    }
  });

const nukeProjectFunctions = (
  ref: string,
  dryRun: boolean,
  nukeConfig: NukeConfig,
) =>
  Effect.gen(function* () {
    const functions = yield* safeList(
      v1ListAllFunctions({ ref }),
      `functions for ${ref}`,
    );
    if (!functions || functions.length === 0) return;

    yield* Console.log(`\n  ${BOLD}${CYAN}Functions${RESET} ${DIM}(project: ${ref})${RESET}`);
    for (const fn of functions) {
      totalFound++;
      const excluded = isExcluded(nukeConfig, "Function", fn.id, fn.name);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} Function: ${fn.name} ${DIM}(id: ${fn.id}, slug: ${fn.slug})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
      } else if (dryRun) {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} Function: ${fn.name} ${DIM}(id: ${fn.id}, slug: ${fn.slug})${RESET}`,
        );
      } else {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} Function: ${fn.name} ${DIM}(id: ${fn.id}, slug: ${fn.slug})${RESET}`,
        );
        yield* safeDelete(
          v1DeleteAFunction({ ref, function_slug: fn.slug }),
          `function ${fn.slug}`,
        );
      }
    }
  });

const nukeProjectSecrets = (
  ref: string,
  dryRun: boolean,
  nukeConfig: NukeConfig,
) =>
  Effect.gen(function* () {
    const secrets = yield* safeList(
      v1ListAllSecrets({ ref }),
      `secrets for ${ref}`,
    );
    if (!secrets || secrets.length === 0) return;

    yield* Console.log(`\n  ${BOLD}${CYAN}Secrets${RESET} ${DIM}(project: ${ref})${RESET}`);
    for (const secret of secrets) {
      totalFound++;
      const excluded = isExcluded(nukeConfig, "Secret", secret.name, secret.name);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} Secret: ${secret.name} — ${excluded.reason ?? "excluded"}`,
        );
      } else if (dryRun) {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} Secret: ${secret.name}`,
        );
      } else {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} Secret: ${secret.name}`,
        );
        yield* safeDelete(
          v1BulkDeleteSecrets({ ref }),
          `secrets for ${ref}`,
        );
      }
    }
  });

const nukeProjectSsoProviders = (
  ref: string,
  dryRun: boolean,
  nukeConfig: NukeConfig,
) =>
  Effect.gen(function* () {
    const result = yield* safeList(
      v1ListAllSsoProvider({ ref }),
      `SSO providers for ${ref}`,
    );
    if (!result || !result.items || result.items.length === 0) return;

    yield* Console.log(`\n  ${BOLD}${CYAN}SSO Providers${RESET} ${DIM}(project: ${ref})${RESET}`);
    for (const provider of result.items) {
      totalFound++;
      const excluded = isExcluded(nukeConfig, "SsoProvider", provider.id);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} SSO Provider: ${provider.id} — ${excluded.reason ?? "excluded"}`,
        );
      } else if (dryRun) {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} SSO Provider: ${provider.id}`,
        );
      } else {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} SSO Provider: ${provider.id}`,
        );
        yield* safeDelete(
          v1DeleteASsoProvider({ ref, provider_id: provider.id }),
          `SSO provider ${provider.id}`,
        );
      }
    }
  });

const nukeProjectNetworkBans = (
  ref: string,
  dryRun: boolean,
  nukeConfig: NukeConfig,
) =>
  Effect.gen(function* () {
    const result = yield* safeList(
      v1ListAllNetworkBans({ ref }),
      `network bans for ${ref}`,
    );
    if (!result || !result.banned_ipv4_addresses || result.banned_ipv4_addresses.length === 0)
      return;

    yield* Console.log(`\n  ${BOLD}${CYAN}Network Bans${RESET} ${DIM}(project: ${ref})${RESET}`);
    const ips = result.banned_ipv4_addresses;
    totalFound += ips.length;

    const toDelete: string[] = [];
    for (const ip of ips) {
      const excluded = isExcluded(nukeConfig, "NetworkBan", ip, ip);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} NetworkBan: ${ip} — ${excluded.reason ?? "excluded"}`,
        );
      } else {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} NetworkBan: ${ip}`,
        );
        toDelete.push(ip);
      }
    }

    if (!dryRun && toDelete.length > 0) {
      yield* safeDelete(
        v1DeleteNetworkBans({ ref, ipv4_addresses: toDelete }),
        `network bans for ${ref}`,
      );
    }
  });

const nukeProjectApiKeys = (
  ref: string,
  dryRun: boolean,
  nukeConfig: NukeConfig,
) =>
  Effect.gen(function* () {
    const keys = yield* safeList(
      v1GetProjectApiKeys({ ref }),
      `API keys for ${ref}`,
    );
    if (!keys || keys.length === 0) return;

    yield* Console.log(`\n  ${BOLD}${CYAN}API Keys${RESET} ${DIM}(project: ${ref})${RESET}`);
    for (const key of keys) {
      totalFound++;
      const excluded = isExcluded(nukeConfig, "ApiKey", key.id, key.name);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} ApiKey: ${key.name} ${DIM}(id: ${key.id}, type: ${key.type})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
      } else if (dryRun) {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} ApiKey: ${key.name} ${DIM}(id: ${key.id}, type: ${key.type})${RESET}`,
        );
      } else {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} ApiKey: ${key.name} ${DIM}(id: ${key.id}, type: ${key.type})${RESET}`,
        );
        yield* safeDelete(
          v1DeleteProjectApiKey({ ref, id: key.id }),
          `API key ${key.id}`,
        );
      }
    }
  });

const nukeProjectSigningKeys = (
  ref: string,
  dryRun: boolean,
  nukeConfig: NukeConfig,
) =>
  Effect.gen(function* () {
    const result = yield* safeList(
      v1GetProjectSigningKeys({ ref }),
      `signing keys for ${ref}`,
    );
    if (!result || !result.keys || result.keys.length === 0) return;

    yield* Console.log(`\n  ${BOLD}${CYAN}Signing Keys${RESET} ${DIM}(project: ${ref})${RESET}`);
    for (const key of result.keys) {
      totalFound++;
      const excluded = isExcluded(nukeConfig, "SigningKey", key.id);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} SigningKey: ${key.id} ${DIM}(algorithm: ${key.algorithm}, status: ${key.status})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
      } else if (dryRun) {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} SigningKey: ${key.id} ${DIM}(algorithm: ${key.algorithm}, status: ${key.status})${RESET}`,
        );
      } else {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} SigningKey: ${key.id} ${DIM}(algorithm: ${key.algorithm}, status: ${key.status})${RESET}`,
        );
        yield* safeDelete(
          v1RemoveProjectSigningKey({ ref, id: key.id }),
          `signing key ${key.id}`,
        );
      }
    }
  });

const nukeProjectTpaIntegrations = (
  ref: string,
  dryRun: boolean,
  nukeConfig: NukeConfig,
) =>
  Effect.gen(function* () {
    const integrations = yield* safeList(
      v1ListProjectTpaIntegrations({ ref }),
      `TPA integrations for ${ref}`,
    );
    if (!integrations || integrations.length === 0) return;

    yield* Console.log(`\n  ${BOLD}${CYAN}TPA Integrations${RESET} ${DIM}(project: ${ref})${RESET}`);
    for (const integration of integrations) {
      totalFound++;
      const excluded = isExcluded(
        nukeConfig,
        "TpaIntegration",
        integration.id,
      );
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} TPA Integration: ${integration.id} ${DIM}(type: ${integration.type})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
      } else if (dryRun) {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} TPA Integration: ${integration.id} ${DIM}(type: ${integration.type})${RESET}`,
        );
      } else {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} TPA Integration: ${integration.id} ${DIM}(type: ${integration.type})${RESET}`,
        );
        yield* safeDelete(
          v1DeleteProjectTpaIntegration({ ref, tpa_id: integration.id }),
          `TPA integration ${integration.id}`,
        );
      }
    }
  });

const nukeProjectAddons = (
  ref: string,
  dryRun: boolean,
  nukeConfig: NukeConfig,
) =>
  Effect.gen(function* () {
    const result = yield* safeList(
      v1ListProjectAddons({ ref }),
      `addons for ${ref}`,
    );
    if (!result || !result.selected_addons || result.selected_addons.length === 0) return;

    yield* Console.log(`\n  ${BOLD}${CYAN}Addons${RESET} ${DIM}(project: ${ref})${RESET}`);
    for (const addon of result.selected_addons) {
      totalFound++;
      const variantId = String(addon.variant.id);
      const excluded = isExcluded(nukeConfig, "Addon", variantId, addon.type);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} Addon: ${addon.type} ${DIM}(variant: ${variantId})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
      } else if (dryRun) {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} Addon: ${addon.type} ${DIM}(variant: ${variantId})${RESET}`,
        );
      } else {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} Addon: ${addon.type} ${DIM}(variant: ${variantId})${RESET}`,
        );
        yield* safeDelete(
          v1RemoveProjectAddon({ ref, addon_variant: variantId }),
          `addon ${variantId}`,
        );
      }
    }
  });

const nukeProjectJitAccess = (
  ref: string,
  dryRun: boolean,
  nukeConfig: NukeConfig,
) =>
  Effect.gen(function* () {
    const result = yield* safeList(
      v1ListJitAccess({ ref }),
      `JIT access for ${ref}`,
    );
    if (!result || !result.items || result.items.length === 0) return;

    yield* Console.log(`\n  ${BOLD}${CYAN}JIT Access${RESET} ${DIM}(project: ${ref})${RESET}`);
    for (const item of result.items) {
      totalFound++;
      const excluded = isExcluded(nukeConfig, "JitAccess", item.user_id);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} JIT Access: user ${item.user_id} — ${excluded.reason ?? "excluded"}`,
        );
      } else if (dryRun) {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} JIT Access: user ${item.user_id}`,
        );
      } else {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} JIT Access: user ${item.user_id}`,
        );
        yield* safeDelete(
          v1DeleteJitAccess({ ref, user_id: item.user_id }),
          `JIT access for user ${item.user_id}`,
        );
      }
    }
  });

const nukeProjectBuckets = (
  ref: string,
  _dryRun: boolean,
  _nukeConfig: NukeConfig,
) =>
  Effect.gen(function* () {
    const buckets = yield* safeList(
      v1ListAllBuckets({ ref }),
      `buckets for ${ref}`,
    );
    if (!buckets || buckets.length === 0) return;

    // Buckets are listed but there is no delete bucket API in the management SDK
    yield* Console.log(`\n  ${BOLD}${CYAN}Buckets${RESET} ${DIM}(project: ${ref}, read-only — no delete API)${RESET}`);
    for (const bucket of buckets) {
      yield* Console.log(
        `    ${DIM}Bucket: ${bucket.name} (id: ${bucket.id}, public: ${bucket.public})${RESET}`,
      );
    }
  });

const nukeProjectBackups = (ref: string) =>
  Effect.gen(function* () {
    const result = yield* safeList(
      v1ListAllBackups({ ref }),
      `backups for ${ref}`,
    );
    if (!result || !result.backups || result.backups.length === 0) return;

    // Backups are listed but there is no delete backup API
    yield* Console.log(`\n  ${BOLD}${CYAN}Backups${RESET} ${DIM}(project: ${ref}, read-only — no delete API)${RESET}`);
    for (const backup of result.backups) {
      yield* Console.log(
        `    ${DIM}Backup: ${backup.status} ${DIM}(inserted_at: ${backup.inserted_at})${RESET}`,
      );
    }
  });

const nukeProjectSnippets = (ref: string) =>
  Effect.gen(function* () {
    const result = yield* safeList(
      v1ListAllSnippets({ project_ref: ref }),
      `snippets for ${ref}`,
    );
    if (!result || !result.data || result.data.length === 0) return;

    // Snippets are listed but there is no delete snippet API
    yield* Console.log(`\n  ${BOLD}${CYAN}Snippets${RESET} ${DIM}(project: ${ref}, read-only — no delete API)${RESET}`);
    for (const snippet of result.data) {
      yield* Console.log(
        `    ${DIM}Snippet: ${snippet.name} (id: ${snippet.id}, type: ${snippet.type})${RESET}`,
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
  (config) =>
    Effect.gen(function* () {
      const nukeConfig = loadNukeConfig();
      const mode = config.dryRun
        ? `${YELLOW}DRY RUN${RESET}`
        : `${RED}LIVE${RESET}`;
      yield* Console.log(
        `\n${BOLD}Supabase Nuke${RESET} ${DIM}(${mode}${DIM})${RESET}`,
      );

      if (!config.dryRun) {
        yield* Console.log(
          `${RED}${BOLD}WARNING: This will DELETE all resources!${RESET}`,
        );
      }

      // ── Organizations (read-only, cannot be deleted via management API) ──
      yield* Console.log(`\n${BOLD}${CYAN}Organizations${RESET} ${DIM}(read-only)${RESET}`);
      const orgs = yield* safeList(
        v1ListAllOrganizations({}),
        "organizations",
      );
      if (orgs && orgs.length > 0) {
        for (const org of orgs) {
          yield* Console.log(
            `  ${DIM}Organization: ${org.name} (id: ${org.id}, slug: ${org.slug})${RESET}`,
          );
        }
      } else {
        yield* Console.log(`  ${DIM}No organizations found${RESET}`);
      }

      // ── Projects ──
      yield* Console.log(`\n${BOLD}${CYAN}Projects${RESET}`);
      const projects = yield* safeList(
        v1ListAllProjects({}),
        "projects",
      );
      if (!projects || projects.length === 0) {
        yield* Console.log(`  ${DIM}No projects found${RESET}`);
      } else {
        for (const project of projects) {
          totalFound++;
          const excluded = isExcluded(
            nukeConfig,
            "Project",
            project.id,
            project.name,
          );

          if (excluded) {
            totalSkipped++;
            yield* Console.log(
              `  ${YELLOW}[SKIP]${RESET} Project: ${project.name} ${DIM}(id: ${project.id}, ref: ${project.ref}, region: ${project.region}, status: ${project.status})${RESET} — ${excluded.reason ?? "excluded"}`,
            );
          } else {
            yield* Console.log(
              `  ${RED}[DELETE]${RESET} Project: ${project.name} ${DIM}(id: ${project.id}, ref: ${project.ref}, region: ${project.region}, status: ${project.status})${RESET}`,
            );
          }
        }

        // Delete child resources first for non-excluded projects, then delete the project
        for (const project of projects) {
          const excluded = isExcluded(
            nukeConfig,
            "Project",
            project.id,
            project.name,
          );
          if (excluded) continue;

          // Delete child resources in dependency order
          yield* nukeProjectBranches(project.ref, config.dryRun, nukeConfig);
          yield* nukeProjectFunctions(project.ref, config.dryRun, nukeConfig);
          yield* nukeProjectSecrets(project.ref, config.dryRun, nukeConfig);
          yield* nukeProjectSsoProviders(project.ref, config.dryRun, nukeConfig);
          yield* nukeProjectNetworkBans(project.ref, config.dryRun, nukeConfig);
          yield* nukeProjectApiKeys(project.ref, config.dryRun, nukeConfig);
          yield* nukeProjectSigningKeys(project.ref, config.dryRun, nukeConfig);
          yield* nukeProjectTpaIntegrations(project.ref, config.dryRun, nukeConfig);
          yield* nukeProjectAddons(project.ref, config.dryRun, nukeConfig);
          yield* nukeProjectJitAccess(project.ref, config.dryRun, nukeConfig);
          yield* nukeProjectBuckets(project.ref, config.dryRun, nukeConfig);
          yield* nukeProjectBackups(project.ref);
          yield* nukeProjectSnippets(project.ref);

          // Finally delete the project itself
          if (!config.dryRun) {
            yield* safeDelete(
              v1DeleteAProject({ ref: project.ref }),
              `project ${project.ref}`,
            );
          }
        }
      }

      // ── Summary ──
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
).pipe(Command.withDescription("List and delete all Supabase resources"));

// ============================================================================
// Entry Point
// ============================================================================

BunRuntime.runMain(
  Effect.provide(Command.run(nuke, { version: "1.0.0" }), BunServices.layer),
);
