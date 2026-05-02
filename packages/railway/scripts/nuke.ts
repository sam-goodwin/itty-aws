#!/usr/bin/env bun
/**
 * Railway Nuke Script
 *
 * Lists and deletes all resources reachable via the configured Railway API
 * token. Supports --dry-run to preview without deleting.
 *
 * Usage:
 *   bun packages/railway/scripts/nuke.ts --dry-run
 *   bun packages/railway/scripts/nuke.ts
 */
import { config } from "dotenv";
import * as fs from "node:fs";
import * as nodePath from "node:path";

// Load .env from repo root (two levels up from scripts/)
const envPath = nodePath.resolve(import.meta.dir, "../../../.env");
config({ path: envPath });
if (!process.env.RAILWAY_API_TOKEN && !process.env.RAILWAY_TOKEN) {
  // Also try CWD/.env as fallback
  config();
}

import { BunRuntime, BunServices } from "@effect/platform-bun";
import { Console, Effect } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { Command, Flag } from "effect/unstable/cli";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { apiToken } from "../src/operations/apiToken.ts";
import { apiTokens } from "../src/operations/apiTokens.ts";
import { apiTokenDelete } from "../src/operations/apiTokenDelete.ts";
import { projects } from "../src/operations/projects.ts";
import { projectDelete } from "../src/operations/projectDelete.ts";
import { projectTokens } from "../src/operations/projectTokens.ts";
import { projectTokenDelete } from "../src/operations/projectTokenDelete.ts";
import { sshPublicKeys } from "../src/operations/sshPublicKeys.ts";
import { sshPublicKeyDelete } from "../src/operations/sshPublicKeyDelete.ts";
import { sessions } from "../src/operations/sessions.ts";
import { sessionDelete } from "../src/operations/sessionDelete.ts";
import { passkeys } from "../src/operations/passkeys.ts";
import { passkeyDelete } from "../src/operations/passkeyDelete.ts";
import { notificationRules } from "../src/operations/notificationRules.ts";
import { notificationRuleDelete } from "../src/operations/notificationRuleDelete.ts";
import { trustedDomains } from "../src/operations/trustedDomains.ts";
import { trustedDomainDelete } from "../src/operations/trustedDomainDelete.ts";

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
// Resource operations
// ============================================================================

const nukeProjectTokens = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  projectId: string,
) =>
  Effect.gen(function* () {
    const result = yield* projectTokens({ projectId, first: 500 }).pipe(
      Effect.catch(() =>
        Console.log(
          `    ${RED}Failed to list project tokens for ${projectId}${RESET}`,
        ).pipe(
          Effect.map(() => ({
            edges: [] as { node: { id: string; name: string } }[],
          })),
        ),
      ),
    );

    for (const edge of result.edges) {
      const tok = edge.node;
      totalFound++;
      const excluded = isExcluded(nukeConfig, "ProjectToken", tok.id, tok.name);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} ProjectToken: ${tok.name} ${DIM}(${tok.id})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      yield* Console.log(
        `    ${RED}[DELETE]${RESET} ProjectToken: ${tok.name} ${DIM}(${tok.id})${RESET}`,
      );
      if (!dryRun) {
        yield* projectTokenDelete({ id: tok.id }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `      ${RED}Failed to delete project token ${tok.id}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeProjects = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  workspaceId: string,
) =>
  Effect.gen(function* () {
    yield* Console.log(`\n  ${BOLD}${CYAN}Projects${RESET}`);

    const result = yield* projects({
      workspaceId,
      first: 500,
      orderBy: "CREATED_AT_DESC",
    }).pipe(
      Effect.catch(() => {
        console.error(`    ${RED}Failed to list projects${RESET}`);
        return Effect.succeed({
          edges: [] as {
            node: {
              id: string;
              name: string;
              deletedAt: string | null;
            };
          }[],
        });
      }),
    );

    if (result.edges.length === 0) {
      yield* Console.log(`    ${DIM}No projects found${RESET}`);
      return;
    }

    for (const edge of result.edges) {
      const project = edge.node;
      // Skip already-deleted projects (Railway soft-deletes)
      if (project.deletedAt) continue;

      totalFound++;
      const excluded = isExcluded(
        nukeConfig,
        "Project",
        project.id,
        project.name,
      );

      yield* Console.log(
        `\n    ${BOLD}Project: ${project.name}${RESET} ${DIM}(${project.id})${RESET}`,
      );

      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} Project: ${project.name} ${DIM}(${project.id})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        // Still list child resources but skip deletion (dry-run mode for them)
        yield* nukeProjectTokens(true, nukeConfig, project.id);
        continue;
      }

      // Delete child resources first.
      // Project tokens are scoped to a project — clean them up before deleting
      // the project (the project delete likely cascades anyway, but listing
      // them gives visibility).
      yield* nukeProjectTokens(dryRun, nukeConfig, project.id);

      // Note: deleting the project also cascades services, environments,
      // deployments, volumes, custom domains, deployment triggers, etc.
      yield* Console.log(
        `    ${RED}[DELETE]${RESET} Project: ${project.name} ${DIM}(${project.id})${RESET}`,
      );
      if (!dryRun) {
        yield* projectDelete({ id: project.id }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `      ${RED}Failed to delete project ${project.id}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeNotificationRules = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  workspaceId: string,
) =>
  Effect.gen(function* () {
    yield* Console.log(`\n  ${BOLD}${CYAN}Notification Rules${RESET}`);

    const rules = yield* notificationRules({ workspaceId }).pipe(
      Effect.catch(() =>
        Console.log(
          `    ${RED}Failed to list notification rules${RESET}`,
        ).pipe(
          Effect.map(
            () =>
              [] as readonly {
                id: string;
                projectId: string | null;
                serviceId: string | null;
              }[],
          ),
        ),
      ),
    );

    if (rules.length === 0) {
      yield* Console.log(`    ${DIM}No notification rules found${RESET}`);
      return;
    }

    for (const rule of rules) {
      totalFound++;
      const excluded = isExcluded(nukeConfig, "NotificationRule", rule.id);
      const label = `project: ${rule.projectId ?? "<workspace>"}, service: ${rule.serviceId ?? "<all>"}`;
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} NotificationRule: ${rule.id} ${DIM}(${label})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      yield* Console.log(
        `    ${RED}[DELETE]${RESET} NotificationRule: ${rule.id} ${DIM}(${label})${RESET}`,
      );
      if (!dryRun) {
        yield* notificationRuleDelete({ id: rule.id }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `      ${RED}Failed to delete notification rule ${rule.id}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeTrustedDomains = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  workspaceId: string,
) =>
  Effect.gen(function* () {
    yield* Console.log(`\n  ${BOLD}${CYAN}Trusted Domains${RESET}`);

    const result = yield* trustedDomains({ workspaceId, first: 500 }).pipe(
      Effect.catch(() =>
        Console.log(`    ${RED}Failed to list trusted domains${RESET}`).pipe(
          Effect.map(() => ({
            edges: [] as { node: { id: string; domainName: string } }[],
          })),
        ),
      ),
    );

    if (result.edges.length === 0) {
      yield* Console.log(`    ${DIM}No trusted domains found${RESET}`);
      return;
    }

    for (const edge of result.edges) {
      const td = edge.node;
      totalFound++;
      const excluded = isExcluded(
        nukeConfig,
        "TrustedDomain",
        td.id,
        td.domainName,
      );
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} TrustedDomain: ${td.domainName} ${DIM}(${td.id})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      yield* Console.log(
        `    ${RED}[DELETE]${RESET} TrustedDomain: ${td.domainName} ${DIM}(${td.id})${RESET}`,
      );
      if (!dryRun) {
        yield* trustedDomainDelete({ id: td.id }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `      ${RED}Failed to delete trusted domain ${td.id}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeSshKeysScoped = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  workspaceId: string | undefined,
  scopeLabel: string,
) =>
  Effect.gen(function* () {
    yield* Console.log(
      `\n  ${BOLD}${CYAN}SSH Public Keys${RESET} ${DIM}(${scopeLabel})${RESET}`,
    );

    const input: { first: number; workspaceId?: string } = { first: 500 };
    if (workspaceId) input.workspaceId = workspaceId;

    const result = yield* sshPublicKeys(input).pipe(
      Effect.catch(() =>
        Console.log(`    ${RED}Failed to list SSH public keys${RESET}`).pipe(
          Effect.map(() => ({
            edges: [] as { node: { id: string; name: string } }[],
          })),
        ),
      ),
    );

    if (result.edges.length === 0) {
      yield* Console.log(`    ${DIM}No SSH public keys found${RESET}`);
      return;
    }

    for (const edge of result.edges) {
      const key = edge.node;
      totalFound++;
      const excluded = isExcluded(nukeConfig, "SshPublicKey", key.id, key.name);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} SshPublicKey: ${key.name} ${DIM}(${key.id})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      yield* Console.log(
        `    ${RED}[DELETE]${RESET} SshPublicKey: ${key.name} ${DIM}(${key.id})${RESET}`,
      );
      if (!dryRun) {
        yield* sshPublicKeyDelete({ id: key.id }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `      ${RED}Failed to delete SSH public key ${key.id}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeApiTokens = (dryRun: boolean, nukeConfig: NukeConfig) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}API Tokens${RESET}`);

    const result = yield* apiTokens({ first: 500 }).pipe(
      Effect.catch(() =>
        Console.log(`  ${RED}Failed to list API tokens${RESET}`).pipe(
          Effect.map(() => ({
            edges: [] as {
              node: { id: string; name: string; displayToken: string };
            }[],
          })),
        ),
      ),
    );

    if (result.edges.length === 0) {
      yield* Console.log(`  ${DIM}No API tokens found${RESET}`);
      return;
    }

    for (const edge of result.edges) {
      const tok = edge.node;
      totalFound++;
      const excluded = isExcluded(nukeConfig, "ApiToken", tok.id, tok.name);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `  ${YELLOW}[SKIP]${RESET} ApiToken: ${tok.name} ${DIM}(${tok.id}, ${tok.displayToken})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      yield* Console.log(
        `  ${RED}[DELETE]${RESET} ApiToken: ${tok.name} ${DIM}(${tok.id}, ${tok.displayToken})${RESET}`,
      );
      if (!dryRun) {
        yield* apiTokenDelete({ id: tok.id }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `    ${RED}Failed to delete API token ${tok.id}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeSessions = (dryRun: boolean, nukeConfig: NukeConfig) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}Sessions${RESET}`);

    const result = yield* sessions({ first: 500 }).pipe(
      Effect.catch(() =>
        Console.log(`  ${RED}Failed to list sessions${RESET}`).pipe(
          Effect.map(() => ({
            edges: [] as {
              node: {
                id: string;
                name: string;
                isCurrent: boolean;
                type: string;
              };
            }[],
          })),
        ),
      ),
    );

    if (result.edges.length === 0) {
      yield* Console.log(`  ${DIM}No sessions found${RESET}`);
      return;
    }

    for (const edge of result.edges) {
      const sess = edge.node;
      // Never delete the current session — it would log out the running script.
      if (sess.isCurrent) {
        yield* Console.log(
          `  ${DIM}[SKIP] Session: ${sess.name} (${sess.id}, ${sess.type}) — current session${RESET}`,
        );
        continue;
      }

      totalFound++;
      const excluded = isExcluded(nukeConfig, "Session", sess.id, sess.name);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `  ${YELLOW}[SKIP]${RESET} Session: ${sess.name} ${DIM}(${sess.id}, ${sess.type})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      yield* Console.log(
        `  ${RED}[DELETE]${RESET} Session: ${sess.name} ${DIM}(${sess.id}, ${sess.type})${RESET}`,
      );
      if (!dryRun) {
        yield* sessionDelete({ id: sess.id }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `    ${RED}Failed to delete session ${sess.id}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukePasskeys = (dryRun: boolean, nukeConfig: NukeConfig) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}Passkeys${RESET}`);

    const result = yield* passkeys({ first: 500 }).pipe(
      Effect.catch(() =>
        Console.log(`  ${RED}Failed to list passkeys${RESET}`).pipe(
          Effect.map(() => ({
            edges: [] as {
              node: {
                id: string;
                deviceName: string;
                displayName: string | null;
              };
            }[],
          })),
        ),
      ),
    );

    if (result.edges.length === 0) {
      yield* Console.log(`  ${DIM}No passkeys found${RESET}`);
      return;
    }

    for (const edge of result.edges) {
      const pk = edge.node;
      totalFound++;
      const label = pk.displayName ?? pk.deviceName;
      const excluded = isExcluded(nukeConfig, "Passkey", pk.id, label);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `  ${YELLOW}[SKIP]${RESET} Passkey: ${label} ${DIM}(${pk.id})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      yield* Console.log(
        `  ${RED}[DELETE]${RESET} Passkey: ${label} ${DIM}(${pk.id})${RESET}`,
      );
      if (!dryRun) {
        yield* passkeyDelete({ id: pk.id }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `    ${RED}Failed to delete passkey ${pk.id}${RESET}`,
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
  },
  (cliConfig) =>
    Effect.gen(function* () {
      const nukeConfig = loadNukeConfig();
      const mode = cliConfig.dryRun
        ? `${YELLOW}DRY RUN${RESET}`
        : `${RED}LIVE${RESET}`;
      yield* Console.log(
        `\n${BOLD}Railway Nuke${RESET} ${DIM}(${mode}${DIM})${RESET}`,
      );

      if (!cliConfig.dryRun) {
        yield* Console.log(
          `${RED}${BOLD}WARNING: This will DELETE all resources!${RESET}`,
        );
      }

      if (nukeConfig.exclude && nukeConfig.exclude.length > 0) {
        yield* Console.log(
          `${DIM}Loaded ${nukeConfig.exclude.length} exclusion rule(s) from nuke-config.json${RESET}`,
        );
      }

      // Discover the workspaces accessible to this token.
      const tokenInfo = yield* apiToken({}).pipe(
        Effect.catch(() => {
          console.error(
            `${RED}Failed to introspect API token (apiToken query)${RESET}`,
          );
          return Effect.succeed({
            workspaces: [] as readonly { id: string; name: string }[],
          });
        }),
      );

      yield* Console.log(
        `${DIM}Token has access to ${tokenInfo.workspaces.length} workspace(s)${RESET}`,
      );

      // For each workspace, clean the workspace-scoped resources first
      // (notification rules, trusted domains, ssh keys), then delete projects
      // (which cascade: services, environments, deployments, volumes, custom
      // domains, deployment triggers, tcp proxies, etc.).
      for (const ws of tokenInfo.workspaces) {
        yield* Console.log(
          `\n${BOLD}Workspace: ${ws.name}${RESET} ${DIM}(${ws.id})${RESET}`,
        );

        yield* nukeNotificationRules(cliConfig.dryRun, nukeConfig, ws.id);
        yield* nukeTrustedDomains(cliConfig.dryRun, nukeConfig, ws.id);
        yield* nukeSshKeysScoped(
          cliConfig.dryRun,
          nukeConfig,
          ws.id,
          `workspace ${ws.id}`,
        );
        yield* nukeProjects(cliConfig.dryRun, nukeConfig, ws.id);
      }

      // Personal SSH keys (workspaceId omitted → personal scope)
      yield* nukeSshKeysScoped(
        cliConfig.dryRun,
        nukeConfig,
        undefined,
        "personal",
      );

      // Account-level resources (token, sessions, passkeys).
      // Note: deleting all API tokens may include the one this script is
      // authenticated with — that is acceptable for a true nuke. Use the
      // nuke-config.json `ApiToken` exclusion to keep specific tokens.
      yield* nukePasskeys(cliConfig.dryRun, nukeConfig);
      yield* nukeSessions(cliConfig.dryRun, nukeConfig);
      yield* nukeApiTokens(cliConfig.dryRun, nukeConfig);

      // Summary
      yield* Console.log(`\n${BOLD}Summary${RESET}`);
      yield* Console.log(`  Total found:   ${totalFound}`);
      yield* Console.log(`  ${YELLOW}Skipped:       ${totalSkipped}${RESET}`);
      if (!cliConfig.dryRun) {
        yield* Console.log(`  ${GREEN}Deleted:       ${totalDeleted}${RESET}`);
        if (totalFailed > 0) {
          yield* Console.log(`  ${RED}Failed:        ${totalFailed}${RESET}`);
        }
      }
    }).pipe(
      Effect.provide(CredentialsFromEnv),
      Effect.provide(FetchHttpClient.layer),
    ),
).pipe(Command.withDescription("List and delete all Railway resources"));

// ============================================================================
// Entry Point
// ============================================================================

BunRuntime.runMain(
  Effect.provide(Command.run(nuke, { version: "1.0.0" }), BunServices.layer),
);
