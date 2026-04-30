#!/usr/bin/env bun
/**
 * WorkOS Nuke Script
 *
 * Lists and deletes all resources in a WorkOS environment.
 * Supports --dry-run to preview without deleting.
 *
 * Usage:
 *   bun packages/workos/scripts/nuke.ts --dry-run
 *   bun packages/workos/scripts/nuke.ts
 */
import { config } from "dotenv";
import * as fs from "node:fs";
import * as nodePath from "node:path";

// Load .env from repo root (three levels up from scripts/)
const envPath = nodePath.resolve(import.meta.dir, "../../../.env");
config({ path: envPath });
if (!process.env.WORKOS_API_KEY) {
  // Fallback: CWD/.env
  config();
}

import { BunRuntime, BunServices } from "@effect/platform-bun";
import { Console, Effect } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { Command, Flag } from "effect/unstable/cli";

import { CredentialsFromEnv } from "../src/credentials.ts";

// List + Delete operations
import { OrganizationsControllerList } from "../src/operations/OrganizationsControllerList.ts";
import { OrganizationsControllerDeleteOrganization } from "../src/operations/OrganizationsControllerDeleteOrganization.ts";
import { ApplicationsControllerList } from "../src/operations/ApplicationsControllerList.ts";
import { ApplicationsControllerDelete } from "../src/operations/ApplicationsControllerDelete.ts";
import { ApplicationCredentialsControllerList } from "../src/operations/ApplicationCredentialsControllerList.ts";
import { ApplicationCredentialsControllerDelete } from "../src/operations/ApplicationCredentialsControllerDelete.ts";
import { ConnectionsControllerList } from "../src/operations/ConnectionsControllerList.ts";
import { ConnectionsControllerDelete } from "../src/operations/ConnectionsControllerDelete.ts";
import { DirectoriesControllerList } from "../src/operations/DirectoriesControllerList.ts";
import { DirectoriesControllerDeleteDirectory } from "../src/operations/DirectoriesControllerDeleteDirectory.ts";
import { GroupsControllerList } from "../src/operations/GroupsControllerList.ts";
import { GroupsControllerDelete } from "../src/operations/GroupsControllerDelete.ts";
import { AuthorizationOrganizationRolesControllerList } from "../src/operations/AuthorizationOrganizationRolesControllerList.ts";
import { AuthorizationOrganizationRolesControllerDelete } from "../src/operations/AuthorizationOrganizationRolesControllerDelete.ts";
import { AuthorizationResourcesControllerList } from "../src/operations/AuthorizationResourcesControllerList.ts";
import { AuthorizationResourcesControllerDelete } from "../src/operations/AuthorizationResourcesControllerDelete.ts";
import { AuthorizationPermissionsControllerList } from "../src/operations/AuthorizationPermissionsControllerList.ts";
import { AuthorizationPermissionsControllerDelete } from "../src/operations/AuthorizationPermissionsControllerDelete.ts";
import { WebhookEndpointsControllerList } from "../src/operations/WebhookEndpointsControllerList.ts";
import { WebhookEndpointsControllerDelete } from "../src/operations/WebhookEndpointsControllerDelete.ts";
import { UserlandUsersControllerList } from "../src/operations/UserlandUsersControllerList.ts";
import { UserlandUsersControllerDelete } from "../src/operations/UserlandUsersControllerDelete.ts";

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
// Pagination helper for cursor-based list_metadata { after } endpoints
// ============================================================================

const paginateAfter = <T, In extends { after?: string; limit?: number }>(
  op: (input: In) => Effect.Effect<
    {
      data: ReadonlyArray<T>;
      list_metadata: { after: string | null; before: string | null };
    },
    unknown,
    never
  >,
  input: Omit<In, "after">,
): Effect.Effect<T[], unknown, never> =>
  Effect.gen(function* () {
    const all: T[] = [];
    let after: string | null = null;
    do {
      const res = yield* op({ ...(input as object), limit: 100, after: after ?? undefined } as In);
      all.push(...res.data);
      after = res.list_metadata.after;
    } while (after);
    return all;
  });

// ============================================================================
// Resource nuke functions
// ============================================================================

const nukeWebhookEndpoints = (dryRun: boolean, nukeConfig: NukeConfig) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}Webhook Endpoints${RESET}`);

    const endpoints = yield* paginateAfter(WebhookEndpointsControllerList, {}).pipe(
      Effect.catch(() =>
        Console.log(`  ${RED}Failed to list webhook endpoints${RESET}`).pipe(
          Effect.map(() => [] as Array<{ id: string; endpoint_url: string }>),
        ),
      ),
    );

    if (endpoints.length === 0) {
      yield* Console.log(`  ${DIM}No webhook endpoints found${RESET}`);
      return;
    }

    for (const ep of endpoints) {
      totalFound++;
      const excluded = isExcluded(nukeConfig, "WebhookEndpoint", ep.id, ep.endpoint_url);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `  ${YELLOW}[SKIP]${RESET} WebhookEndpoint: ${ep.endpoint_url} ${DIM}(${ep.id})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }
      yield* Console.log(
        `  ${RED}[DELETE]${RESET} WebhookEndpoint: ${ep.endpoint_url} ${DIM}(${ep.id})${RESET}`,
      );
      if (!dryRun) {
        yield* WebhookEndpointsControllerDelete({ id: ep.id }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `    ${RED}Failed to delete webhook endpoint ${ep.id}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeApplicationCredentials = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  appId: string,
) =>
  Effect.gen(function* () {
    const secrets = yield* ApplicationCredentialsControllerList({ id: appId }).pipe(
      Effect.catch(() =>
        Console.log(
          `    ${RED}Failed to list client secrets for application ${appId}${RESET}`,
        ).pipe(Effect.map(() => [] as Array<{ id: string; secret_hint: string }>)),
      ),
    );
    for (const sec of secrets) {
      totalFound++;
      const excluded = isExcluded(nukeConfig, "ApplicationCredential", sec.id, sec.secret_hint);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} ApplicationCredential: ${sec.secret_hint} ${DIM}(${sec.id})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }
      yield* Console.log(
        `    ${RED}[DELETE]${RESET} ApplicationCredential: ${sec.secret_hint} ${DIM}(${sec.id})${RESET}`,
      );
      if (!dryRun) {
        yield* ApplicationCredentialsControllerDelete({ id: sec.id }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `      ${RED}Failed to delete application credential ${sec.id}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeApplications = (dryRun: boolean, nukeConfig: NukeConfig) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}Connect Applications${RESET}`);

    const apps = yield* paginateAfter(ApplicationsControllerList, {}).pipe(
      Effect.catch(() =>
        Console.log(`  ${RED}Failed to list applications${RESET}`).pipe(
          Effect.map(() => [] as Array<{ id: string; name: string; client_id: string }>),
        ),
      ),
    );

    if (apps.length === 0) {
      yield* Console.log(`  ${DIM}No applications found${RESET}`);
      return;
    }

    for (const app of apps) {
      totalFound++;
      const excluded = isExcluded(nukeConfig, "Application", app.id, app.name);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `  ${YELLOW}[SKIP]${RESET} Application: ${app.name} ${DIM}(${app.id})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        // Still list child credentials for visibility
        yield* nukeApplicationCredentials(true, nukeConfig, app.id);
        continue;
      }
      yield* Console.log(
        `  ${BOLD}Application: ${app.name}${RESET} ${DIM}(${app.id}, client_id: ${app.client_id})${RESET}`,
      );
      // Delete child credentials first
      yield* nukeApplicationCredentials(dryRun, nukeConfig, app.id);
      // Then delete the application
      yield* Console.log(
        `  ${RED}[DELETE]${RESET} Application: ${app.name} ${DIM}(${app.id})${RESET}`,
      );
      if (!dryRun) {
        yield* ApplicationsControllerDelete({ id: app.id }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `    ${RED}Failed to delete application ${app.id}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeConnections = (dryRun: boolean, nukeConfig: NukeConfig) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}Connections${RESET}`);

    const conns = yield* paginateAfter(ConnectionsControllerList, {}).pipe(
      Effect.catch(() =>
        Console.log(`  ${RED}Failed to list connections${RESET}`).pipe(
          Effect.map(
            () =>
              [] as Array<{
                id: string;
                name: string;
                connection_type: string;
                organization_id?: string;
              }>,
          ),
        ),
      ),
    );

    if (conns.length === 0) {
      yield* Console.log(`  ${DIM}No connections found${RESET}`);
      return;
    }

    for (const c of conns) {
      totalFound++;
      const excluded = isExcluded(nukeConfig, "Connection", c.id, c.name);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `  ${YELLOW}[SKIP]${RESET} Connection: ${c.name} ${DIM}(${c.id}, type: ${c.connection_type})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }
      yield* Console.log(
        `  ${RED}[DELETE]${RESET} Connection: ${c.name} ${DIM}(${c.id}, type: ${c.connection_type}, org: ${c.organization_id ?? "—"})${RESET}`,
      );
      if (!dryRun) {
        yield* ConnectionsControllerDelete({ id: c.id }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `    ${RED}Failed to delete connection ${c.id}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeDirectories = (dryRun: boolean, nukeConfig: NukeConfig) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}Directories${RESET}`);

    const dirs = yield* paginateAfter(DirectoriesControllerList, {}).pipe(
      Effect.catch(() =>
        Console.log(`  ${RED}Failed to list directories${RESET}`).pipe(
          Effect.map(
            () =>
              [] as Array<{
                id: string;
                name: string;
                type: string;
                organization_id: string;
              }>,
          ),
        ),
      ),
    );

    if (dirs.length === 0) {
      yield* Console.log(`  ${DIM}No directories found${RESET}`);
      return;
    }

    for (const d of dirs) {
      totalFound++;
      const excluded = isExcluded(nukeConfig, "Directory", d.id, d.name);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `  ${YELLOW}[SKIP]${RESET} Directory: ${d.name} ${DIM}(${d.id}, type: ${d.type})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }
      yield* Console.log(
        `  ${RED}[DELETE]${RESET} Directory: ${d.name} ${DIM}(${d.id}, type: ${d.type}, org: ${d.organization_id})${RESET}`,
      );
      if (!dryRun) {
        yield* DirectoriesControllerDeleteDirectory({ id: d.id }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `    ${RED}Failed to delete directory ${d.id}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeAuthorizationResources = (dryRun: boolean, nukeConfig: NukeConfig) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}Authorization Resources${RESET}`);

    const resources = yield* paginateAfter(AuthorizationResourcesControllerList, {}).pipe(
      Effect.catch(() =>
        Console.log(`  ${RED}Failed to list authorization resources${RESET}`).pipe(
          Effect.map(
            () =>
              [] as Array<{
                id: string;
                name: string;
                resource_type_slug: string;
                external_id: string;
                organization_id: string;
                parent_resource_id: string | null;
              }>,
          ),
        ),
      ),
    );

    if (resources.length === 0) {
      yield* Console.log(`  ${DIM}No authorization resources found${RESET}`);
      return;
    }

    // Delete leaves first: sort so resources with no children come first.
    // Simple heuristic: resources without a parent that are referenced as
    // parent_resource_id by others should be deleted last. Use cascade_delete
    // to avoid having to compute a true topological order.
    for (const r of resources) {
      totalFound++;
      const excluded = isExcluded(nukeConfig, "AuthorizationResource", r.id, r.name);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `  ${YELLOW}[SKIP]${RESET} AuthorizationResource: ${r.name} ${DIM}(${r.id}, type: ${r.resource_type_slug})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }
      yield* Console.log(
        `  ${RED}[DELETE]${RESET} AuthorizationResource: ${r.name} ${DIM}(${r.id}, type: ${r.resource_type_slug}, ext: ${r.external_id})${RESET}`,
      );
      if (!dryRun) {
        yield* AuthorizationResourcesControllerDelete({
          resource_id: r.id,
          cascade_delete: true,
        }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `    ${RED}Failed to delete authorization resource ${r.id}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeAuthorizationPermissions = (dryRun: boolean, nukeConfig: NukeConfig) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}Authorization Permissions${RESET}`);

    const permissions = yield* paginateAfter(AuthorizationPermissionsControllerList, {}).pipe(
      Effect.catch(() =>
        Console.log(`  ${RED}Failed to list authorization permissions${RESET}`).pipe(
          Effect.map(
            () =>
              [] as Array<{
                id: string;
                slug: string;
                name: string;
                system: boolean;
                resource_type_slug: string;
              }>,
          ),
        ),
      ),
    );

    if (permissions.length === 0) {
      yield* Console.log(`  ${DIM}No authorization permissions found${RESET}`);
      return;
    }

    for (const p of permissions) {
      // System permissions cannot be deleted
      if (p.system) continue;

      totalFound++;
      const excluded = isExcluded(nukeConfig, "AuthorizationPermission", p.slug, p.name);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `  ${YELLOW}[SKIP]${RESET} AuthorizationPermission: ${p.name} ${DIM}(slug: ${p.slug})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }
      yield* Console.log(
        `  ${RED}[DELETE]${RESET} AuthorizationPermission: ${p.name} ${DIM}(slug: ${p.slug}, type: ${p.resource_type_slug})${RESET}`,
      );
      if (!dryRun) {
        yield* AuthorizationPermissionsControllerDelete({ slug: p.slug }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `    ${RED}Failed to delete authorization permission ${p.slug}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeOrganizationGroups = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  organizationId: string,
) =>
  Effect.gen(function* () {
    // GroupsControllerList paginates with after cursor
    const all: Array<{ id: string; name: string }> = [];
    let after: string | null = null;
    let failed = false;
    do {
      const res = yield* GroupsControllerList({
        organizationId,
        limit: 100,
        after: after ?? undefined,
      }).pipe(
        Effect.catch(() => {
          failed = true;
          return Effect.succeed({
            object: "list" as const,
            data: [] as Array<{
              object: string;
              id: string;
              organization_id: string;
              name: string;
              description: string | null;
              created_at: string;
              updated_at: string;
            }>,
            list_metadata: { before: null, after: null },
          });
        }),
      );
      if (failed) break;
      all.push(...res.data.map((g) => ({ id: g.id, name: g.name })));
      after = res.list_metadata.after;
    } while (after);

    if (failed) {
      yield* Console.log(
        `    ${RED}Failed to list groups for org ${organizationId}${RESET}`,
      );
      return;
    }

    for (const g of all) {
      totalFound++;
      const excluded = isExcluded(nukeConfig, "Group", g.id, g.name);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} Group: ${g.name} ${DIM}(${g.id})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }
      yield* Console.log(
        `    ${RED}[DELETE]${RESET} Group: ${g.name} ${DIM}(${g.id})${RESET}`,
      );
      if (!dryRun) {
        yield* GroupsControllerDelete({
          organizationId,
          groupId: g.id,
        }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `      ${RED}Failed to delete group ${g.id}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeOrganizationRoles = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  organizationId: string,
) =>
  Effect.gen(function* () {
    const res = yield* AuthorizationOrganizationRolesControllerList({
      organizationId,
    }).pipe(
      Effect.catch(() =>
        Console.log(
          `    ${RED}Failed to list custom roles for org ${organizationId}${RESET}`,
        ).pipe(
          Effect.map(() => ({
            object: "list" as const,
            data: [] as Array<{
              slug: string;
              id: string;
              name: string;
              type: "EnvironmentRole" | "OrganizationRole";
            }>,
          })),
        ),
      ),
    );

    for (const role of res.data) {
      // Only OrganizationRole types are deletable at the organization scope.
      if (role.type !== "OrganizationRole") continue;

      totalFound++;
      const excluded = isExcluded(nukeConfig, "OrganizationRole", role.slug, role.name);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} OrganizationRole: ${role.name} ${DIM}(slug: ${role.slug})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }
      yield* Console.log(
        `    ${RED}[DELETE]${RESET} OrganizationRole: ${role.name} ${DIM}(slug: ${role.slug})${RESET}`,
      );
      if (!dryRun) {
        yield* AuthorizationOrganizationRolesControllerDelete({
          organizationId,
          slug: role.slug,
        }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `      ${RED}Failed to delete organization role ${role.slug}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeUsers = (dryRun: boolean, nukeConfig: NukeConfig) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}Users${RESET}`);

    const users = yield* paginateAfter(UserlandUsersControllerList, {}).pipe(
      Effect.catch(() =>
        Console.log(`  ${RED}Failed to list users${RESET}`).pipe(
          Effect.map(() => [] as Array<{ id: string; email: string }>),
        ),
      ),
    );

    if (users.length === 0) {
      yield* Console.log(`  ${DIM}No users found${RESET}`);
      return;
    }

    for (const u of users) {
      totalFound++;
      const excluded = isExcluded(nukeConfig, "User", u.id, u.email);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `  ${YELLOW}[SKIP]${RESET} User: ${u.email} ${DIM}(${u.id})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }
      yield* Console.log(
        `  ${RED}[DELETE]${RESET} User: ${u.email} ${DIM}(${u.id})${RESET}`,
      );
      if (!dryRun) {
        yield* UserlandUsersControllerDelete({ id: u.id }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `    ${RED}Failed to delete user ${u.id}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeOrganizations = (dryRun: boolean, nukeConfig: NukeConfig) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}Organizations${RESET}`);

    const orgs = yield* paginateAfter(OrganizationsControllerList, {}).pipe(
      Effect.catch(() =>
        Console.log(`  ${RED}Failed to list organizations${RESET}`).pipe(
          Effect.map(() => [] as Array<{ id: string; name: string }>),
        ),
      ),
    );

    if (orgs.length === 0) {
      yield* Console.log(`  ${DIM}No organizations found${RESET}`);
      return;
    }

    for (const org of orgs) {
      totalFound++;
      const excluded = isExcluded(nukeConfig, "Organization", org.id, org.name);

      yield* Console.log(
        `\n  ${BOLD}Organization: ${org.name}${RESET} ${DIM}(${org.id})${RESET}`,
      );

      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `  ${YELLOW}[SKIP]${RESET} Organization: ${org.name} ${DIM}(${org.id})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        // Still enumerate children for visibility (in dry-run mode)
        yield* nukeOrganizationGroups(true, nukeConfig, org.id);
        yield* nukeOrganizationRoles(true, nukeConfig, org.id);
        continue;
      }

      // Delete child resources first (groups, custom roles)
      yield* nukeOrganizationGroups(dryRun, nukeConfig, org.id);
      yield* nukeOrganizationRoles(dryRun, nukeConfig, org.id);

      // Delete the organization itself
      yield* Console.log(
        `  ${RED}[DELETE]${RESET} Organization: ${org.name} ${DIM}(${org.id})${RESET}`,
      );
      if (!dryRun) {
        yield* OrganizationsControllerDeleteOrganization({ id: org.id }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `    ${RED}Failed to delete organization ${org.id}${RESET}`,
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
      yield* Console.log(`\n${BOLD}WorkOS Nuke${RESET} ${DIM}(${mode}${DIM})${RESET}`);

      if (!config.dryRun) {
        yield* Console.log(
          `${RED}${BOLD}WARNING: This will DELETE all resources in the WorkOS environment!${RESET}`,
        );
      }

      if (nukeConfig.exclude && nukeConfig.exclude.length > 0) {
        yield* Console.log(
          `${DIM}Loaded ${nukeConfig.exclude.length} exclusion rule(s) from nuke-config.json${RESET}`,
        );
      }

      // Deletion order — children before parents:
      // 1. Webhook endpoints (independent, no dependencies)
      yield* nukeWebhookEndpoints(config.dryRun, nukeConfig);
      // 2. Authorization resources (use cascade_delete) — must come before permissions
      yield* nukeAuthorizationResources(config.dryRun, nukeConfig);
      // 3. Authorization permissions (env-scoped, non-system only)
      yield* nukeAuthorizationPermissions(config.dryRun, nukeConfig);
      // 4. Connections (organization-scoped but deletable independently)
      yield* nukeConnections(config.dryRun, nukeConfig);
      // 5. Directories (organization-scoped but deletable independently)
      yield* nukeDirectories(config.dryRun, nukeConfig);
      // 6. Connect applications (with their client secrets)
      yield* nukeApplications(config.dryRun, nukeConfig);
      // 7. Users (cleared before organizations to drop memberships cleanly)
      yield* nukeUsers(config.dryRun, nukeConfig);
      // 8. Organizations (with their groups and custom roles) — last
      yield* nukeOrganizations(config.dryRun, nukeConfig);

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
).pipe(Command.withDescription("List and delete all WorkOS resources"));

// ============================================================================
// Entry Point
// ============================================================================

BunRuntime.runMain(
  Effect.provide(Command.run(nuke, { version: "1.0.0" }), BunServices.layer),
);
