#!/usr/bin/env bun
/**
 * Neon Nuke Script
 *
 * Lists and deletes all resources in a Neon account.
 * Supports --dry-run to preview without deleting.
 *
 * Usage:
 *   bun packages/neon/scripts/nuke.ts --dry-run
 *   bun packages/neon/scripts/nuke.ts
 */
import { config } from "dotenv";
import * as fs from "node:fs";
import * as nodePath from "node:path";

// Load .env from repo root (two levels up from scripts/)
const envPath = nodePath.resolve(import.meta.dir, "../../../.env");
config({ path: envPath });
if (!process.env.NEON_API_KEY) {
  // Also try CWD/.env as fallback
  config();
}
import { BunRuntime, BunServices } from "@effect/platform-bun";
import { Console, Effect } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { Command, Flag } from "effect/unstable/cli";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { listProjects } from "../src/operations/listProjects.ts";
import { deleteProject } from "../src/operations/deleteProject.ts";
import { listProjectBranches } from "../src/operations/listProjectBranches.ts";
import { deleteProjectBranch } from "../src/operations/deleteProjectBranch.ts";
import { listProjectBranchDatabases } from "../src/operations/listProjectBranchDatabases.ts";
import { deleteProjectBranchDatabase } from "../src/operations/deleteProjectBranchDatabase.ts";
import { listProjectBranchRoles } from "../src/operations/listProjectBranchRoles.ts";
import { deleteProjectBranchRole } from "../src/operations/deleteProjectBranchRole.ts";
import { listProjectEndpoints } from "../src/operations/listProjectEndpoints.ts";
import { deleteProjectEndpoint } from "../src/operations/deleteProjectEndpoint.ts";
import { listProjectVPCEndpoints } from "../src/operations/listProjectVPCEndpoints.ts";
import { deleteProjectVPCEndpoint } from "../src/operations/deleteProjectVPCEndpoint.ts";
import { listSnapshots } from "../src/operations/listSnapshots.ts";
import { deleteSnapshot } from "../src/operations/deleteSnapshot.ts";
import { listApiKeys } from "../src/operations/listApiKeys.ts";
import { revokeApiKey } from "../src/operations/revokeApiKey.ts";

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

const nukeEndpoints = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  projectId: string,
) =>
  Effect.gen(function* () {
    const result = yield* listProjectEndpoints({ project_id: projectId }).pipe(
      Effect.catch(() =>
        Console.log(
          `    ${RED}Failed to list endpoints for project ${projectId}${RESET}`,
        ).pipe(Effect.map(() => ({ endpoints: [] as any[] }))),
      ),
    );

    for (const ep of result.endpoints) {
      totalFound++;
      const excluded = isExcluded(nukeConfig, "Endpoint", ep.id, ep.name);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} Endpoint: ${ep.id} ${DIM}(host: ${ep.host}, branch: ${ep.branch_id})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} Endpoint: ${ep.id} ${DIM}(host: ${ep.host}, branch: ${ep.branch_id})${RESET}`,
        );
      } else {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} Endpoint: ${ep.id} ${DIM}(host: ${ep.host})${RESET}`,
        );
        yield* deleteProjectEndpoint({
          project_id: projectId,
          endpoint_id: ep.id,
        }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `      ${RED}Failed to delete endpoint ${ep.id}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeVPCEndpoints = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  projectId: string,
) =>
  Effect.gen(function* () {
    const result = yield* listProjectVPCEndpoints({
      project_id: projectId,
    }).pipe(
      Effect.catch(() =>
        Console.log(
          `    ${RED}Failed to list VPC endpoints for project ${projectId}${RESET}`,
        ).pipe(Effect.map(() => ({ endpoints: [] as any[] }))),
      ),
    );

    for (const ep of result.endpoints) {
      totalFound++;
      const excluded = isExcluded(
        nukeConfig,
        "VPCEndpoint",
        ep.vpc_endpoint_id,
        ep.label,
      );
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} VPCEndpoint: ${ep.label} ${DIM}(${ep.vpc_endpoint_id})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} VPCEndpoint: ${ep.label} ${DIM}(${ep.vpc_endpoint_id})${RESET}`,
        );
      } else {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} VPCEndpoint: ${ep.label} ${DIM}(${ep.vpc_endpoint_id})${RESET}`,
        );
        yield* deleteProjectVPCEndpoint({
          project_id: projectId,
          vpc_endpoint_id: ep.vpc_endpoint_id,
        }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `      ${RED}Failed to delete VPC endpoint ${ep.vpc_endpoint_id}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeSnapshots = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  projectId: string,
) =>
  Effect.gen(function* () {
    const result = yield* listSnapshots({ project_id: projectId }).pipe(
      Effect.catch(() =>
        Console.log(
          `    ${RED}Failed to list snapshots for project ${projectId}${RESET}`,
        ).pipe(Effect.map(() => ({ snapshots: [] as any[] }))),
      ),
    );

    for (const snap of result.snapshots) {
      totalFound++;
      const excluded = isExcluded(nukeConfig, "Snapshot", snap.id, snap.name);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} Snapshot: ${snap.name} ${DIM}(${snap.id})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} Snapshot: ${snap.name} ${DIM}(${snap.id})${RESET}`,
        );
      } else {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} Snapshot: ${snap.name} ${DIM}(${snap.id})${RESET}`,
        );
        yield* deleteSnapshot({
          project_id: projectId,
          snapshot_id: snap.id,
        }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `      ${RED}Failed to delete snapshot ${snap.id}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeDatabases = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  projectId: string,
  branchId: string,
) =>
  Effect.gen(function* () {
    const result = yield* listProjectBranchDatabases({
      project_id: projectId,
      branch_id: branchId,
    }).pipe(
      Effect.catch(() =>
        Console.log(
          `      ${RED}Failed to list databases for branch ${branchId}${RESET}`,
        ).pipe(Effect.map(() => ({ databases: [] as any[] }))),
      ),
    );

    for (const db of result.databases) {
      // Skip default neondb database — it can't be deleted without deleting the branch
      if (db.name === "neondb") continue;

      totalFound++;
      const excluded = isExcluded(
        nukeConfig,
        "Database",
        String(db.id),
        db.name,
      );
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `      ${YELLOW}[SKIP]${RESET} Database: ${db.name} ${DIM}(id: ${db.id}, owner: ${db.owner_name})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `      ${RED}[DELETE]${RESET} Database: ${db.name} ${DIM}(id: ${db.id}, owner: ${db.owner_name})${RESET}`,
        );
      } else {
        yield* Console.log(
          `      ${RED}[DELETE]${RESET} Database: ${db.name} ${DIM}(id: ${db.id})${RESET}`,
        );
        yield* deleteProjectBranchDatabase({
          project_id: projectId,
          branch_id: branchId,
          database_name: db.name,
        }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `        ${RED}Failed to delete database ${db.name}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeRoles = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  projectId: string,
  branchId: string,
) =>
  Effect.gen(function* () {
    const result = yield* listProjectBranchRoles({
      project_id: projectId,
      branch_id: branchId,
    }).pipe(
      Effect.catch(() =>
        Console.log(
          `      ${RED}Failed to list roles for branch ${branchId}${RESET}`,
        ).pipe(Effect.map(() => ({ roles: [] as any[] }))),
      ),
    );

    for (const role of result.roles) {
      // Skip protected/system roles
      if (role.protected) continue;
      // Skip default owner role
      if (role.name === "neondb_owner") continue;

      totalFound++;
      const excluded = isExcluded(nukeConfig, "Role", role.name, role.name);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `      ${YELLOW}[SKIP]${RESET} Role: ${role.name} ${DIM}(branch: ${branchId})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `      ${RED}[DELETE]${RESET} Role: ${role.name} ${DIM}(branch: ${branchId})${RESET}`,
        );
      } else {
        yield* Console.log(
          `      ${RED}[DELETE]${RESET} Role: ${role.name} ${DIM}(branch: ${branchId})${RESET}`,
        );
        yield* deleteProjectBranchRole({
          project_id: projectId,
          branch_id: branchId,
          role_name: role.name,
        }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `        ${RED}Failed to delete role ${role.name}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeBranches = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  projectId: string,
) =>
  Effect.gen(function* () {
    const result = yield* listProjectBranches({
      project_id: projectId,
    }).pipe(
      Effect.catch(() =>
        Console.log(
          `    ${RED}Failed to list branches for project ${projectId}${RESET}`,
        ).pipe(Effect.map(() => ({ branches: [] as any[] }))),
      ),
    );

    // Process all branches: clean children first, then delete non-default ones
    // Sort: non-default branches first (children), default branch last
    const sorted = [...result.branches].sort((a, b) => {
      if (a.default && !b.default) return 1;
      if (!a.default && b.default) return -1;
      return 0;
    });

    for (const branch of sorted) {
      yield* Console.log(
        `    ${CYAN}Branch: ${branch.name}${RESET} ${DIM}(${branch.id}, default: ${branch.default})${RESET}`,
      );

      // Clean databases and roles on every branch
      yield* nukeDatabases(dryRun, nukeConfig, projectId, branch.id);
      yield* nukeRoles(dryRun, nukeConfig, projectId, branch.id);

      // Only delete non-default branches (can't delete default)
      if (!branch.default) {
        totalFound++;
        const excluded = isExcluded(
          nukeConfig,
          "Branch",
          branch.id,
          branch.name,
        );
        if (excluded) {
          totalSkipped++;
          yield* Console.log(
            `    ${YELLOW}[SKIP]${RESET} Branch: ${branch.name} ${DIM}(${branch.id})${RESET} — ${excluded.reason ?? "excluded"}`,
          );
          continue;
        }

        if (dryRun) {
          yield* Console.log(
            `    ${RED}[DELETE]${RESET} Branch: ${branch.name} ${DIM}(${branch.id})${RESET}`,
          );
        } else {
          yield* Console.log(
            `    ${RED}[DELETE]${RESET} Branch: ${branch.name} ${DIM}(${branch.id})${RESET}`,
          );
          yield* deleteProjectBranch({
            project_id: projectId,
            branch_id: branch.id,
          }).pipe(
            Effect.andThen(() => {
              totalDeleted++;
            }),
            Effect.catch(() => {
              totalFailed++;
              return Console.log(
                `      ${RED}Failed to delete branch ${branch.id}${RESET}`,
              );
            }),
          );
        }
      }
    }
  });

const nukeApiKeys = (dryRun: boolean, nukeConfig: NukeConfig) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}API Keys${RESET}`);

    const keys = yield* listApiKeys({}).pipe(
      Effect.catch(() =>
        Console.log(`  ${RED}Failed to list API keys${RESET}`).pipe(
          Effect.map(() => [] as any[]),
        ),
      ),
    );

    if (keys.length === 0) {
      yield* Console.log(`  ${DIM}No API keys found${RESET}`);
      return;
    }

    for (const key of keys) {
      totalFound++;
      const excluded = isExcluded(
        nukeConfig,
        "ApiKey",
        String(key.id),
        key.name,
      );
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `  ${YELLOW}[SKIP]${RESET} ApiKey: ${key.name} ${DIM}(id: ${key.id})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `  ${RED}[DELETE]${RESET} ApiKey: ${key.name} ${DIM}(id: ${key.id}, created: ${key.created_at})${RESET}`,
        );
      } else {
        yield* Console.log(
          `  ${RED}[DELETE]${RESET} ApiKey: ${key.name} ${DIM}(id: ${key.id})${RESET}`,
        );
        yield* revokeApiKey({ key_id: key.id }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `    ${RED}Failed to revoke API key ${key.id}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeProjects = (dryRun: boolean, nukeConfig: NukeConfig) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}Projects${RESET}`);

    const projectsResult = yield* listProjects({ limit: 400 }).pipe(
      Effect.catch(() => {
        console.error(`  ${RED}Failed to list projects${RESET}`);
        return Effect.succeed({ projects: [] as any[] });
      }),
    );
    const projects = projectsResult.projects;

    if (projects.length === 0) {
      yield* Console.log(`  ${DIM}No projects found${RESET}`);
      return;
    }

    for (const project of projects) {
      totalFound++;
      const excluded = isExcluded(
        nukeConfig,
        "Project",
        project.id,
        project.name,
      );

      yield* Console.log(
        `\n  ${BOLD}Project: ${project.name}${RESET} ${DIM}(${project.id}, region: ${project.region_id})${RESET}`,
      );

      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `  ${YELLOW}[SKIP]${RESET} Project: ${project.name} ${DIM}(${project.id})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        // Still list child resources but skip deletion
        yield* nukeEndpoints(true, nukeConfig, project.id);
        yield* nukeVPCEndpoints(true, nukeConfig, project.id);
        yield* nukeSnapshots(true, nukeConfig, project.id);
        yield* nukeBranches(true, nukeConfig, project.id);
        continue;
      }

      // Delete child resources first (dependency order)
      // 1. Endpoints
      yield* nukeEndpoints(dryRun, nukeConfig, project.id);
      // 2. VPC Endpoints
      yield* nukeVPCEndpoints(dryRun, nukeConfig, project.id);
      // 3. Snapshots
      yield* nukeSnapshots(dryRun, nukeConfig, project.id);
      // 4. Branches (which handles databases and roles internally)
      yield* nukeBranches(dryRun, nukeConfig, project.id);

      // 5. Delete the project itself
      if (dryRun) {
        yield* Console.log(
          `  ${RED}[DELETE]${RESET} Project: ${project.name} ${DIM}(${project.id})${RESET}`,
        );
      } else {
        yield* Console.log(
          `  ${RED}[DELETE]${RESET} Project: ${project.name} ${DIM}(${project.id})${RESET}`,
        );
        yield* deleteProject({ project_id: project.id }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `    ${RED}Failed to delete project ${project.id}${RESET}`,
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
        `\n${BOLD}Neon Nuke${RESET} ${DIM}(${mode}${DIM})${RESET}`,
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

      // Delete in dependency order:
      // 1. Projects (with all child resources: endpoints, VPC endpoints, snapshots, branches, databases, roles)
      yield* nukeProjects(config.dryRun, nukeConfig);

      // 2. API Keys (standalone, no parent dependency)
      yield* nukeApiKeys(config.dryRun, nukeConfig);

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
).pipe(Command.withDescription("List and delete all Neon resources"));

// ============================================================================
// Entry Point
// ============================================================================

BunRuntime.runMain(
  Effect.provide(Command.run(nuke, { version: "1.0.0" }), BunServices.layer),
);
