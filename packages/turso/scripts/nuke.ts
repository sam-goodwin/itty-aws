#!/usr/bin/env bun
/**
 * Turso Nuke Script
 *
 * Lists and deletes all resources in a Turso account.
 * Supports --dry-run to preview without deleting.
 *
 * Usage:
 *   bun packages/turso/scripts/nuke.ts --dry-run
 *   bun packages/turso/scripts/nuke.ts
 */
import { config } from "dotenv";
import * as fs from "node:fs";
import * as nodePath from "node:path";

// Load .env from repo root (two levels up from scripts/)
const envPath = nodePath.resolve(import.meta.dir, "../../../.env");
config({ path: envPath });
if (!process.env.TURSO_API_KEY) {
  // Also try CWD/.env as fallback
  config();
}
import { BunRuntime, BunServices } from "@effect/platform-bun";
import { Console, Effect } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { Command, Flag } from "effect/unstable/cli";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { listOrganizations } from "../src/operations/listOrganizations.ts";
import { listDatabases } from "../src/operations/listDatabases.ts";
import { deleteDatabase } from "../src/operations/deleteDatabase.ts";
import { listGroups } from "../src/operations/listGroups.ts";
import { deleteGroup } from "../src/operations/deleteGroup.ts";
import { listAPITokens } from "../src/operations/listAPITokens.ts";
import { revokeAPIToken } from "../src/operations/revokeAPIToken.ts";
import { listOrganizationMembers } from "../src/operations/listOrganizationMembers.ts";
import { removeOrganizationMember } from "../src/operations/removeOrganizationMember.ts";
import { listOrganizationInvites } from "../src/operations/listOrganizationInvites.ts";
import { deleteOrganizationInviteByEmail } from "../src/operations/deleteOrganizationInviteByEmail.ts";

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

const nukeDatabases = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  orgSlug: string,
) =>
  Effect.gen(function* () {
    yield* Console.log(`\n  ${BOLD}${CYAN}Databases${RESET} ${DIM}(org: ${orgSlug})${RESET}`);

    const result = yield* listDatabases({ organizationSlug: orgSlug }).pipe(
      Effect.catch(() =>
        Console.log(`    ${RED}Failed to list databases for ${orgSlug}${RESET}`).pipe(
          Effect.map(() => ({ databases: [] as any[] })),
        ),
      ),
    );

    const databases = result.databases ?? [];

    if (databases.length === 0) {
      yield* Console.log(`    ${DIM}No databases found${RESET}`);
      return;
    }

    for (const db of databases) {
      const dbName = db.Name ?? "unknown";
      const dbId = db.DbId ?? "unknown";
      totalFound++;

      const excluded = isExcluded(nukeConfig, "Database", dbId, dbName);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} Database: ${dbName} ${DIM}(id: ${dbId}, group: ${db.group ?? "none"})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} Database: ${dbName} ${DIM}(id: ${dbId}, group: ${db.group ?? "none"}, region: ${db.primaryRegion ?? "unknown"})${RESET}`,
        );
      } else {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} Database: ${dbName} ${DIM}(id: ${dbId})${RESET}`,
        );
        yield* deleteDatabase({
          organizationSlug: orgSlug,
          databaseName: dbName,
        }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `      ${RED}Failed to delete database ${dbName}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeGroups = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  orgSlug: string,
) =>
  Effect.gen(function* () {
    yield* Console.log(`\n  ${BOLD}${CYAN}Groups${RESET} ${DIM}(org: ${orgSlug})${RESET}`);

    const result = yield* listGroups({ organizationSlug: orgSlug }).pipe(
      Effect.catch(() =>
        Console.log(`    ${RED}Failed to list groups for ${orgSlug}${RESET}`).pipe(
          Effect.map(() => ({ groups: [] as any[] })),
        ),
      ),
    );

    const groups = result.groups ?? [];

    if (groups.length === 0) {
      yield* Console.log(`    ${DIM}No groups found${RESET}`);
      return;
    }

    for (const group of groups) {
      const groupName = group.name ?? "unknown";
      const groupId = group.uuid ?? "unknown";
      totalFound++;

      const excluded = isExcluded(nukeConfig, "Group", groupId, groupName);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} Group: ${groupName} ${DIM}(uuid: ${groupId}, primary: ${group.primary ?? "unknown"})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} Group: ${groupName} ${DIM}(uuid: ${groupId}, primary: ${group.primary ?? "unknown"}, locations: ${(group.locations ?? []).join(", ")})${RESET}`,
        );
      } else {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} Group: ${groupName} ${DIM}(uuid: ${groupId})${RESET}`,
        );
        yield* deleteGroup({
          organizationSlug: orgSlug,
          groupName: groupName,
        }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `      ${RED}Failed to delete group ${groupName}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeOrganizationMembers = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  orgSlug: string,
) =>
  Effect.gen(function* () {
    yield* Console.log(`\n  ${BOLD}${CYAN}Organization Members${RESET} ${DIM}(org: ${orgSlug})${RESET}`);

    const result = yield* listOrganizationMembers({ organizationSlug: orgSlug }).pipe(
      Effect.catch(() =>
        Console.log(`    ${RED}Failed to list members for ${orgSlug}${RESET}`).pipe(
          Effect.map(() => ({ members: [] as any[] })),
        ),
      ),
    );

    const members = result.members ?? [];

    // Filter out owners — can't remove org owners
    const removableMembers = members.filter((m: any) => m.role !== "owner");

    if (removableMembers.length === 0) {
      yield* Console.log(`    ${DIM}No removable members found (owners are preserved)${RESET}`);
      return;
    }

    for (const member of removableMembers) {
      const username = member.username ?? "unknown";
      totalFound++;

      const excluded = isExcluded(nukeConfig, "OrganizationMember", username, username);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} Member: ${username} ${DIM}(role: ${member.role ?? "unknown"})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} Member: ${username} ${DIM}(role: ${member.role ?? "unknown"}, email: ${member.email ?? "unknown"})${RESET}`,
        );
      } else {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} Member: ${username} ${DIM}(role: ${member.role ?? "unknown"})${RESET}`,
        );
        yield* removeOrganizationMember({
          organizationSlug: orgSlug,
          username: username,
        }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `      ${RED}Failed to remove member ${username}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeOrganizationInvites = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  orgSlug: string,
) =>
  Effect.gen(function* () {
    yield* Console.log(`\n  ${BOLD}${CYAN}Organization Invites${RESET} ${DIM}(org: ${orgSlug})${RESET}`);

    const result = yield* listOrganizationInvites({ organizationSlug: orgSlug }).pipe(
      Effect.catch(() =>
        Console.log(`    ${RED}Failed to list invites for ${orgSlug}${RESET}`).pipe(
          Effect.map(() => ({ invites: [] as any[] })),
        ),
      ),
    );

    const invites = result.invites ?? [];

    if (invites.length === 0) {
      yield* Console.log(`    ${DIM}No invites found${RESET}`);
      return;
    }

    for (const invite of invites) {
      const email = invite.Email ?? "unknown";
      const inviteId = String(invite.ID ?? "unknown");
      totalFound++;

      const excluded = isExcluded(nukeConfig, "OrganizationInvite", inviteId, email);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} Invite: ${email} ${DIM}(id: ${inviteId}, role: ${invite.Role ?? "unknown"})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} Invite: ${email} ${DIM}(id: ${inviteId}, role: ${invite.Role ?? "unknown"})${RESET}`,
        );
      } else {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} Invite: ${email} ${DIM}(id: ${inviteId})${RESET}`,
        );
        yield* deleteOrganizationInviteByEmail({
          organizationSlug: orgSlug,
          email: email,
        }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `      ${RED}Failed to delete invite for ${email}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeAPITokens = (dryRun: boolean, nukeConfig: NukeConfig) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}API Tokens${RESET}`);

    const result = yield* listAPITokens({}).pipe(
      Effect.catch(() =>
        Console.log(`  ${RED}Failed to list API tokens${RESET}`).pipe(
          Effect.map(() => ({ tokens: [] as any[] })),
        ),
      ),
    );

    const tokens = result.tokens ?? [];

    if (tokens.length === 0) {
      yield* Console.log(`  ${DIM}No API tokens found${RESET}`);
      return;
    }

    for (const token of tokens) {
      const tokenName = token.name ?? "unknown";
      const tokenId = token.id ?? "unknown";
      totalFound++;

      const excluded = isExcluded(nukeConfig, "APIToken", tokenId, tokenName);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `  ${YELLOW}[SKIP]${RESET} APIToken: ${tokenName} ${DIM}(id: ${tokenId})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `  ${RED}[DELETE]${RESET} APIToken: ${tokenName} ${DIM}(id: ${tokenId})${RESET}`,
        );
      } else {
        yield* Console.log(
          `  ${RED}[DELETE]${RESET} APIToken: ${tokenName} ${DIM}(id: ${tokenId})${RESET}`,
        );
        yield* revokeAPIToken({ tokenName: tokenName }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `    ${RED}Failed to revoke API token ${tokenName}${RESET}`,
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
  (config) =>
    Effect.gen(function* () {
      const nukeConfig = loadNukeConfig();
      const mode = config.dryRun
        ? `${YELLOW}DRY RUN${RESET}`
        : `${RED}LIVE${RESET}`;
      yield* Console.log(
        `\n${BOLD}Turso Nuke${RESET} ${DIM}(${mode}${DIM})${RESET}`,
      );

      if (!config.dryRun) {
        yield* Console.log(
          `${RED}${BOLD}WARNING: This will DELETE all resources!${RESET}`,
        );
      }

      if (nukeConfig.exclude && nukeConfig.exclude.length > 0) {
        yield* Console.log(
          `${DIM}Loaded ${nukeConfig.exclude.length} exclusion rule(s) from nuke-config.json${RESET}`,
        );
      }

      // 1. List all organizations
      yield* Console.log(`\n${BOLD}${CYAN}Organizations${RESET}`);
      const orgs = yield* listOrganizations({}).pipe(
        Effect.catch(() =>
          Console.log(`  ${RED}Failed to list organizations${RESET}`).pipe(
            Effect.map(() => [] as any[]),
          ),
        ),
      );

      if (orgs.length === 0) {
        yield* Console.log(`  ${DIM}No organizations found${RESET}`);
      }

      for (const org of orgs) {
        const orgSlug = org.slug ?? "unknown";
        yield* Console.log(
          `\n${BOLD}Organization: ${org.name ?? orgSlug}${RESET} ${DIM}(slug: ${orgSlug}, type: ${org.type ?? "unknown"})${RESET}`,
        );

        // Dependency order: databases before groups (databases belong to groups)
        // 1. Databases
        yield* nukeDatabases(config.dryRun, nukeConfig, orgSlug);

        // 2. Groups (after databases are deleted)
        yield* nukeGroups(config.dryRun, nukeConfig, orgSlug);

        // 3. Organization Members (non-owners only)
        yield* nukeOrganizationMembers(config.dryRun, nukeConfig, orgSlug);

        // 4. Organization Invites
        yield* nukeOrganizationInvites(config.dryRun, nukeConfig, orgSlug);
      }

      // 5. API Tokens (standalone, no org dependency)
      yield* nukeAPITokens(config.dryRun, nukeConfig);

      // Summary
      yield* Console.log(`\n${BOLD}Summary${RESET}`);
      yield* Console.log(`  Total found:   ${totalFound}`);
      yield* Console.log(
        `  ${YELLOW}Skipped:       ${totalSkipped}${RESET}`,
      );
      if (!config.dryRun) {
        yield* Console.log(
          `  ${GREEN}Deleted:       ${totalDeleted}${RESET}`,
        );
        if (totalFailed > 0) {
          yield* Console.log(
            `  ${RED}Failed:        ${totalFailed}${RESET}`,
          );
        }
      }
    }).pipe(
      Effect.provide(CredentialsFromEnv),
      Effect.provide(FetchHttpClient.layer),
    ),
).pipe(Command.withDescription("List and delete all Turso resources"));

// ============================================================================
// Entry Point
// ============================================================================

BunRuntime.runMain(
  Effect.provide(Command.run(nuke, { version: "1.0.0" }), BunServices.layer),
);
