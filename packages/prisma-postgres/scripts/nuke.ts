#!/usr/bin/env bun
/**
 * Prisma Postgres Nuke Script
 *
 * Lists and deletes all resources in a Prisma Postgres account.
 * Supports --dry-run to preview without deleting.
 *
 * Usage:
 *   bun packages/prisma-postgres/scripts/nuke.ts --dry-run
 *   bun packages/prisma-postgres/scripts/nuke.ts
 */
import { config } from "dotenv";
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
import {
  CredentialsFromEnv,
} from "@distilled.cloud/prisma-postgres";
import {
  getV1Workspaces,
  getV1Projects,
  getV1Databases,
  getV1Connections,
  getV1WorkspacesByWorkspaceIdIntegrations,
  deleteV1ConnectionsById,
  deleteV1DatabasesByDatabaseId,
  deleteV1ProjectsById,
  deleteV1IntegrationsById,
} from "@distilled.cloud/prisma-postgres/Operations";

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
let totalDeleted = 0;
let totalFailed = 0;

// ============================================================================
// Paginated list helper
// ============================================================================

function listAll<A extends { data: readonly any[]; pagination: { nextCursor: string | null; hasMore: boolean } }, E, R>(
  fn: (input: any) => Effect.Effect<A, E, R>,
  baseInput: Record<string, unknown> = {},
): Effect.Effect<A["data"][number][], E, R> {
  return Effect.gen(function* () {
    const results: A["data"][number][] = [];
    let cursor: string | undefined;
    let hasMore = true;
    while (hasMore) {
      const input = { ...baseInput, limit: 100, ...(cursor ? { cursor } : {}) };
      const response = yield* fn(input);
      results.push(...response.data);
      hasMore = response.pagination.hasMore;
      cursor = response.pagination.nextCursor ?? undefined;
    }
    return results;
  });
}

// ============================================================================
// Safe list helper (catches errors and returns empty array)
// ============================================================================

function safeList<A extends { data: readonly any[]; pagination: { nextCursor: string | null; hasMore: boolean } }, E, R>(
  fn: (input: any) => Effect.Effect<A, E, R>,
  label: string,
  baseInput: Record<string, unknown> = {},
): Effect.Effect<A["data"][number][], never, R> {
  return listAll(fn, baseInput).pipe(
    Effect.catch(() =>
      Console.log(`  ${RED}Failed to list ${label}${RESET}`).pipe(
        Effect.map(() => [] as any[]),
      ),
    ),
  );
}

// ============================================================================
// Resource operations
// ============================================================================

const listAndDeleteConnections = (dryRun: boolean) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}Connections${RESET}`);

    const connections = yield* safeList(getV1Connections, "connections");
    totalFound += connections.length;

    if (connections.length === 0) {
      yield* Console.log(`  ${DIM}No connections found${RESET}`);
      return;
    }

    for (const conn of connections) {
      yield* Console.log(
        `  ${YELLOW}Connection${RESET} ${conn.name} ${DIM}(${conn.id}, kind: ${conn.kind}, db: ${conn.database.name})${RESET}`,
      );

      if (!dryRun) {
        yield* deleteV1ConnectionsById({ id: conn.id }).pipe(
          Effect.as(() => { totalDeleted++; }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(`    ${RED}Failed to delete connection ${conn.id}${RESET}`);
          }),
        );
        totalDeleted++;
      }
    }
  });

const listAndDeleteDatabases = (dryRun: boolean) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}Databases${RESET}`);

    const databases = yield* safeList(getV1Databases, "databases");
    totalFound += databases.length;

    if (databases.length === 0) {
      yield* Console.log(`  ${DIM}No databases found${RESET}`);
      return;
    }

    for (const db of databases) {
      yield* Console.log(
        `  ${YELLOW}Database${RESET} ${db.name} ${DIM}(${db.id}, status: ${db.status}, project: ${db.project.name})${RESET}`,
      );

      if (!dryRun) {
        yield* deleteV1DatabasesByDatabaseId({ databaseId: db.id }).pipe(
          Effect.andThen(() => { totalDeleted++; }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(`    ${RED}Failed to delete database ${db.id}${RESET}`);
          }),
        );
      }
    }
  });

const listAndDeleteProjects = (dryRun: boolean) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}Projects${RESET}`);

    const projects = yield* safeList(getV1Projects, "projects");
    totalFound += projects.length;

    if (projects.length === 0) {
      yield* Console.log(`  ${DIM}No projects found${RESET}`);
      return;
    }

    for (const project of projects) {
      yield* Console.log(
        `  ${YELLOW}Project${RESET} ${project.name} ${DIM}(${project.id}, workspace: ${project.workspace.name})${RESET}`,
      );

      if (!dryRun) {
        yield* deleteV1ProjectsById({ id: project.id }).pipe(
          Effect.andThen(() => { totalDeleted++; }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(`    ${RED}Failed to delete project ${project.id}${RESET}`);
          }),
        );
      }
    }
  });

const listAndDeleteIntegrations = (dryRun: boolean) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}Integrations${RESET}`);

    const workspaces = yield* safeList(getV1Workspaces, "workspaces");
    let integrationCount = 0;

    for (const ws of workspaces) {
      const integrations = yield* safeList(
        getV1WorkspacesByWorkspaceIdIntegrations,
        `integrations for workspace ${ws.name}`,
        { workspaceId: ws.id },
      );

      integrationCount += integrations.length;
      totalFound += integrations.length;

      for (const integration of integrations) {
        yield* Console.log(
          `  ${YELLOW}Integration${RESET} ${integration.client.name} ${DIM}(${integration.id}, workspace: ${ws.name}, scopes: ${integration.scopes.join(", ")})${RESET}`,
        );

        if (!dryRun) {
          yield* deleteV1IntegrationsById({ id: integration.id }).pipe(
            Effect.andThen(() => { totalDeleted++; }),
            Effect.catch(() => {
              totalFailed++;
              return Console.log(`    ${RED}Failed to delete integration ${integration.id}${RESET}`);
            }),
          );
        }
      }
    }

    if (integrationCount === 0) {
      yield* Console.log(`  ${DIM}No integrations found${RESET}`);
    }
  });

const listWorkspaces = () =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}Workspaces ${DIM}(read-only, cannot be deleted)${RESET}`);

    const workspaces = yield* safeList(getV1Workspaces, "workspaces");

    if (workspaces.length === 0) {
      yield* Console.log(`  ${DIM}No workspaces found${RESET}`);
      return;
    }

    for (const ws of workspaces) {
      yield* Console.log(
        `  ${DIM}Workspace${RESET} ${ws.name} ${DIM}(${ws.id})${RESET}`,
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
      const mode = config.dryRun ? `${YELLOW}DRY RUN${RESET}` : `${RED}LIVE${RESET}`;
      yield* Console.log(
        `\n${BOLD}Prisma Postgres Nuke${RESET} ${DIM}(${mode}${DIM})${RESET}`,
      );

      if (!config.dryRun) {
        yield* Console.log(
          `${RED}${BOLD}WARNING: This will DELETE all resources!${RESET}`,
        );
      }

      // List workspaces (read-only)
      yield* listWorkspaces();

      // Delete in dependency order: connections -> databases -> projects -> integrations
      yield* listAndDeleteConnections(config.dryRun);
      yield* listAndDeleteDatabases(config.dryRun);
      yield* listAndDeleteProjects(config.dryRun);
      yield* listAndDeleteIntegrations(config.dryRun);

      // Summary
      yield* Console.log(`\n${BOLD}Summary${RESET}`);
      yield* Console.log(`  Total found:   ${totalFound}`);
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
).pipe(
  Command.withDescription(
    "List and delete all Prisma Postgres resources",
  ),
);

// ============================================================================
// Entry Point
// ============================================================================

BunRuntime.runMain(
  Effect.provide(Command.run(nuke, { version: "1.0.0" }), BunServices.layer),
);
