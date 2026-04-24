#!/usr/bin/env bun
/**
 * MongoDB Atlas Nuke Script
 *
 * Lists and deletes all resources in a MongoDB Atlas account.
 * Supports --dry-run to preview without deleting.
 *
 * Usage:
 *   bun packages/mongodb-atlas/scripts/nuke.ts --dry-run
 *   bun packages/mongodb-atlas/scripts/nuke.ts
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
import { CredentialsFromEnv } from "@distilled.cloud/mongodb-atlas";

// Organization-level list/delete
import { listOrgs } from "@distilled.cloud/mongodb-atlas/Operations";
import { listOrgApiKeys } from "@distilled.cloud/mongodb-atlas/Operations";
import { deleteOrgApiKey } from "@distilled.cloud/mongodb-atlas/Operations";
import { listOrgTeams } from "@distilled.cloud/mongodb-atlas/Operations";
import { deleteOrgTeam } from "@distilled.cloud/mongodb-atlas/Operations";
import { listOrgServiceAccounts } from "@distilled.cloud/mongodb-atlas/Operations";
import { deleteOrgServiceAccount } from "@distilled.cloud/mongodb-atlas/Operations";
import { listOrgResourcePolicies } from "@distilled.cloud/mongodb-atlas/Operations";
import { deleteOrgResourcePolicy } from "@distilled.cloud/mongodb-atlas/Operations";

// Project (Group) level
import { listGroups } from "@distilled.cloud/mongodb-atlas/Operations";
import { deleteGroup } from "@distilled.cloud/mongodb-atlas/Operations";

// Cluster-level
import { listGroupClusters } from "@distilled.cloud/mongodb-atlas/Operations";
import { deleteGroupCluster } from "@distilled.cloud/mongodb-atlas/Operations";
import { listGroupFlexClusters } from "@distilled.cloud/mongodb-atlas/Operations";
import { deleteGroupFlexCluster } from "@distilled.cloud/mongodb-atlas/Operations";

// Database users
import { listGroupDatabaseUsers } from "@distilled.cloud/mongodb-atlas/Operations";
import { deleteGroupDatabaseUser } from "@distilled.cloud/mongodb-atlas/Operations";

// Custom DB roles
import { listGroupCustomDbRoleRoles } from "@distilled.cloud/mongodb-atlas/Operations";
import { deleteGroupCustomDbRoleRole } from "@distilled.cloud/mongodb-atlas/Operations";

// Network containers
import { listGroupContainerAll } from "@distilled.cloud/mongodb-atlas/Operations";
import { deleteGroupContainer } from "@distilled.cloud/mongodb-atlas/Operations";

// Network peering
import { listGroupPeers } from "@distilled.cloud/mongodb-atlas/Operations";
import { deleteGroupPeer } from "@distilled.cloud/mongodb-atlas/Operations";

// Private endpoints
import { listGroupPrivateEndpointEndpointService } from "@distilled.cloud/mongodb-atlas/Operations";
import { deleteGroupPrivateEndpointEndpointService } from "@distilled.cloud/mongodb-atlas/Operations";

// Private network settings
import { listGroupPrivateNetworkSettingEndpointIds } from "@distilled.cloud/mongodb-atlas/Operations";
import { deleteGroupPrivateNetworkSettingEndpointId } from "@distilled.cloud/mongodb-atlas/Operations";

// Data federation
import { listGroupDataFederation } from "@distilled.cloud/mongodb-atlas/Operations";
import { deleteGroupDataFederation } from "@distilled.cloud/mongodb-atlas/Operations";

// Alert configs
import { listGroupAlertConfigs } from "@distilled.cloud/mongodb-atlas/Operations";
import { deleteGroupAlertConfig } from "@distilled.cloud/mongodb-atlas/Operations";

// Access list
import { listGroupAccessListEntries } from "@distilled.cloud/mongodb-atlas/Operations";
import { deleteGroupAccessListEntry } from "@distilled.cloud/mongodb-atlas/Operations";

// Backup export buckets
import { listGroupBackupExportBuckets } from "@distilled.cloud/mongodb-atlas/Operations";
import { deleteGroupBackupExportBucket } from "@distilled.cloud/mongodb-atlas/Operations";

// Backup private endpoints
import { listGroupBackupPrivateEndpoints } from "@distilled.cloud/mongodb-atlas/Operations";
import { deleteGroupBackupPrivateEndpoint } from "@distilled.cloud/mongodb-atlas/Operations";

// Integrations
import { listGroupIntegrations } from "@distilled.cloud/mongodb-atlas/Operations";
import { deleteGroupIntegration } from "@distilled.cloud/mongodb-atlas/Operations";

// Log integrations
import { listGroupLogIntegrations } from "@distilled.cloud/mongodb-atlas/Operations";
import { deleteGroupLogIntegration } from "@distilled.cloud/mongodb-atlas/Operations";

// Service accounts (group-level)
import { listGroupServiceAccounts } from "@distilled.cloud/mongodb-atlas/Operations";
import { deleteGroupServiceAccount } from "@distilled.cloud/mongodb-atlas/Operations";

// Stream workspaces, connections, processors
import { listGroupStreamWorkspaces } from "@distilled.cloud/mongodb-atlas/Operations";
import { deleteGroupStreamWorkspace } from "@distilled.cloud/mongodb-atlas/Operations";
import { listGroupStreamConnections } from "@distilled.cloud/mongodb-atlas/Operations";
import { deleteGroupStreamConnection } from "@distilled.cloud/mongodb-atlas/Operations";
import { getGroupStreamProcessors } from "@distilled.cloud/mongodb-atlas/Operations";
import { deleteGroupStreamProcessor } from "@distilled.cloud/mongodb-atlas/Operations";

// Stream private link connections
import { listGroupStreamPrivateLinkConnections } from "@distilled.cloud/mongodb-atlas/Operations";
import { deleteGroupStreamPrivateLinkConnection } from "@distilled.cloud/mongodb-atlas/Operations";

// Stream VPC peering
import { listGroupStreamVpcPeeringConnections } from "@distilled.cloud/mongodb-atlas/Operations";
import { deleteGroupStreamVpcPeeringConnection } from "@distilled.cloud/mongodb-atlas/Operations";

// Encryption at rest private endpoints
import { listGroupEncryptionAtRestPrivateEndpoints } from "@distilled.cloud/mongodb-atlas/Operations";

// Cluster child resources
import { listGroupClusterOnlineArchives } from "@distilled.cloud/mongodb-atlas/Operations";
import { deleteGroupClusterOnlineArchive } from "@distilled.cloud/mongodb-atlas/Operations";
import { listGroupClusterSearchIndexes } from "@distilled.cloud/mongodb-atlas/Operations";
import { deleteGroupClusterSearchIndex } from "@distilled.cloud/mongodb-atlas/Operations";
import { deleteGroupClusterSearchDeployment } from "@distilled.cloud/mongodb-atlas/Operations";
import { listGroupClusterBackupSnapshots } from "@distilled.cloud/mongodb-atlas/Operations";
import { deleteGroupClusterBackupSnapshot } from "@distilled.cloud/mongodb-atlas/Operations";

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
    if (name && rule.namePatterns?.some((p) => matchGlob(p, name)))
      return true;
    return false;
  });
}

// Helper to safely extract results array from Atlas paginated responses
function getResults(response: any): any[] {
  if (!response) return [];
  if (Array.isArray(response.results)) return response.results;
  if (Array.isArray(response)) return response;
  return [];
}

// ============================================================================
// Cluster child resource operations
// ============================================================================

const nukeClusterOnlineArchives = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  groupId: string,
  clusterName: string,
) =>
  Effect.gen(function* () {
    const response = yield* listGroupClusterOnlineArchives({
      groupId,
      clusterName,
    }).pipe(
      Effect.catch(() =>
        Console.log(
          `      ${RED}Failed to list online archives for cluster ${clusterName}${RESET}`,
        ).pipe(Effect.map(() => ({ results: [] }))),
      ),
    );

    for (const archive of getResults(response)) {
      totalFound++;
      const id = archive.id ?? archive._id ?? "";
      const excluded = isExcluded(nukeConfig, "OnlineArchive", id);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `      ${YELLOW}[SKIP]${RESET} OnlineArchive: ${id} ${DIM}(cluster: ${clusterName})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `      ${RED}[DELETE]${RESET} OnlineArchive: ${id} ${DIM}(cluster: ${clusterName})${RESET}`,
        );
      } else {
        yield* Console.log(
          `      ${RED}[DELETE]${RESET} OnlineArchive: ${id}`,
        );
        yield* deleteGroupClusterOnlineArchive({
          groupId,
          clusterName,
          archiveId: id,
        }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `        ${RED}Failed to delete online archive ${id}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeClusterSearchIndexes = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  groupId: string,
  clusterName: string,
) =>
  Effect.gen(function* () {
    const response = yield* listGroupClusterSearchIndexes({
      groupId,
      clusterName,
    }).pipe(
      Effect.catch(() =>
        Console.log(
          `      ${RED}Failed to list search indexes for cluster ${clusterName}${RESET}`,
        ).pipe(Effect.map(() => ([]))),
      ),
    );

    for (const idx of getResults(response)) {
      totalFound++;
      const id = idx.indexID ?? idx.id ?? idx._id ?? "";
      const name = idx.name ?? "";
      const excluded = isExcluded(nukeConfig, "SearchIndex", id, name);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `      ${YELLOW}[SKIP]${RESET} SearchIndex: ${name} ${DIM}(id: ${id}, cluster: ${clusterName})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `      ${RED}[DELETE]${RESET} SearchIndex: ${name} ${DIM}(id: ${id}, cluster: ${clusterName})${RESET}`,
        );
      } else {
        yield* Console.log(
          `      ${RED}[DELETE]${RESET} SearchIndex: ${name} ${DIM}(id: ${id})${RESET}`,
        );
        yield* deleteGroupClusterSearchIndex({
          groupId,
          clusterName,
          indexId: id,
        }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `        ${RED}Failed to delete search index ${id}${RESET}`,
            );
          }),
        );
      }
    }

    // Also try to delete the search deployment itself
    if (!dryRun) {
      yield* deleteGroupClusterSearchDeployment({ groupId, clusterName }).pipe(
        Effect.andThen(() => {
          totalDeleted++;
        }),
        Effect.catch(() => Effect.void),
      );
    }
  });

const nukeClusterBackupSnapshots = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  groupId: string,
  clusterName: string,
) =>
  Effect.gen(function* () {
    const response = yield* listGroupClusterBackupSnapshots({
      groupId,
      clusterName,
    }).pipe(
      Effect.catch(() =>
        Console.log(
          `      ${RED}Failed to list backup snapshots for cluster ${clusterName}${RESET}`,
        ).pipe(Effect.map(() => ({ results: [] }))),
      ),
    );

    for (const snap of getResults(response)) {
      totalFound++;
      const id = snap.id ?? snap._id ?? "";
      const excluded = isExcluded(nukeConfig, "BackupSnapshot", id);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `      ${YELLOW}[SKIP]${RESET} BackupSnapshot: ${id} ${DIM}(cluster: ${clusterName})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `      ${RED}[DELETE]${RESET} BackupSnapshot: ${id} ${DIM}(cluster: ${clusterName}, type: ${snap.snapshotType ?? "unknown"})${RESET}`,
        );
      } else {
        yield* Console.log(
          `      ${RED}[DELETE]${RESET} BackupSnapshot: ${id}`,
        );
        yield* deleteGroupClusterBackupSnapshot({
          groupId,
          clusterName,
          snapshotId: id,
        }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `        ${RED}Failed to delete backup snapshot ${id}${RESET}`,
            );
          }),
        );
      }
    }
  });

// ============================================================================
// Group (Project) child resource operations
// ============================================================================

const nukeClusters = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  groupId: string,
) =>
  Effect.gen(function* () {
    const response = yield* listGroupClusters({ groupId }).pipe(
      Effect.catch(() =>
        Console.log(
          `    ${RED}Failed to list clusters for project ${groupId}${RESET}`,
        ).pipe(Effect.map(() => ({ results: [] }))),
      ),
    );

    for (const cluster of getResults(response)) {
      const name = cluster.name ?? "";
      const id = cluster.id ?? cluster._id ?? name;
      totalFound++;
      const excluded = isExcluded(nukeConfig, "Cluster", id, name);

      yield* Console.log(
        `    ${CYAN}Cluster: ${name}${RESET} ${DIM}(id: ${id}, state: ${cluster.stateName ?? "unknown"})${RESET}`,
      );

      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} Cluster: ${name} ${DIM}(${id})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      // Delete cluster child resources first
      yield* nukeClusterOnlineArchives(dryRun, nukeConfig, groupId, name);
      yield* nukeClusterSearchIndexes(dryRun, nukeConfig, groupId, name);
      yield* nukeClusterBackupSnapshots(dryRun, nukeConfig, groupId, name);

      if (dryRun) {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} Cluster: ${name} ${DIM}(${id})${RESET}`,
        );
      } else {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} Cluster: ${name} ${DIM}(${id})${RESET}`,
        );
        yield* deleteGroupCluster({ groupId, clusterName: name }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `      ${RED}Failed to delete cluster ${name}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeFlexClusters = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  groupId: string,
) =>
  Effect.gen(function* () {
    const response = yield* listGroupFlexClusters({ groupId }).pipe(
      Effect.catch(() =>
        Console.log(
          `    ${RED}Failed to list flex clusters for project ${groupId}${RESET}`,
        ).pipe(Effect.map(() => ({ results: [] }))),
      ),
    );

    for (const cluster of getResults(response)) {
      const name = cluster.name ?? "";
      const id = cluster.id ?? cluster._id ?? name;
      totalFound++;
      const excluded = isExcluded(nukeConfig, "FlexCluster", id, name);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} FlexCluster: ${name} ${DIM}(${id})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} FlexCluster: ${name} ${DIM}(${id})${RESET}`,
        );
      } else {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} FlexCluster: ${name} ${DIM}(${id})${RESET}`,
        );
        yield* deleteGroupFlexCluster({ groupId, name }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `      ${RED}Failed to delete flex cluster ${name}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeDatabaseUsers = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  groupId: string,
) =>
  Effect.gen(function* () {
    const response = yield* listGroupDatabaseUsers({ groupId }).pipe(
      Effect.catch(() =>
        Console.log(
          `    ${RED}Failed to list database users for project ${groupId}${RESET}`,
        ).pipe(Effect.map(() => ({ results: [] }))),
      ),
    );

    for (const user of getResults(response)) {
      const username = user.username ?? "";
      const databaseName = user.databaseName ?? "admin";
      totalFound++;
      const excluded = isExcluded(
        nukeConfig,
        "DatabaseUser",
        username,
        username,
      );
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} DatabaseUser: ${username} ${DIM}(db: ${databaseName})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} DatabaseUser: ${username} ${DIM}(db: ${databaseName})${RESET}`,
        );
      } else {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} DatabaseUser: ${username} ${DIM}(db: ${databaseName})${RESET}`,
        );
        yield* deleteGroupDatabaseUser({ groupId, databaseName, username }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `      ${RED}Failed to delete database user ${username}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeCustomDbRoles = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  groupId: string,
) =>
  Effect.gen(function* () {
    const response = yield* listGroupCustomDbRoleRoles({ groupId }).pipe(
      Effect.catch(() =>
        Console.log(
          `    ${RED}Failed to list custom DB roles for project ${groupId}${RESET}`,
        ).pipe(Effect.map(() => ([]))),
      ),
    );

    for (const role of getResults(response)) {
      const roleName = role.roleName ?? "";
      totalFound++;
      const excluded = isExcluded(
        nukeConfig,
        "CustomDbRole",
        roleName,
        roleName,
      );
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} CustomDbRole: ${roleName} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} CustomDbRole: ${roleName}`,
        );
      } else {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} CustomDbRole: ${roleName}`,
        );
        yield* deleteGroupCustomDbRoleRole({ groupId, roleName }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `      ${RED}Failed to delete custom DB role ${roleName}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeNetworkPeering = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  groupId: string,
) =>
  Effect.gen(function* () {
    const response = yield* listGroupPeers({ groupId }).pipe(
      Effect.catch(() =>
        Console.log(
          `    ${RED}Failed to list network peers for project ${groupId}${RESET}`,
        ).pipe(Effect.map(() => ({ results: [] }))),
      ),
    );

    for (const peer of getResults(response)) {
      const id = peer.id ?? peer._id ?? "";
      totalFound++;
      const excluded = isExcluded(nukeConfig, "NetworkPeer", id);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} NetworkPeer: ${id} ${DIM}(status: ${peer.statusName ?? "unknown"})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} NetworkPeer: ${id} ${DIM}(status: ${peer.statusName ?? "unknown"})${RESET}`,
        );
      } else {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} NetworkPeer: ${id}`,
        );
        yield* deleteGroupPeer({ groupId, peerId: id }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `      ${RED}Failed to delete network peer ${id}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeContainers = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  groupId: string,
) =>
  Effect.gen(function* () {
    const response = yield* listGroupContainerAll({ groupId }).pipe(
      Effect.catch(() =>
        Console.log(
          `    ${RED}Failed to list containers for project ${groupId}${RESET}`,
        ).pipe(Effect.map(() => ({ results: [] }))),
      ),
    );

    for (const container of getResults(response)) {
      const id = container.id ?? container._id ?? "";
      totalFound++;
      const excluded = isExcluded(nukeConfig, "Container", id);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} Container: ${id} ${DIM}(provider: ${container.providerName ?? "unknown"})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} Container: ${id} ${DIM}(provider: ${container.providerName ?? "unknown"})${RESET}`,
        );
      } else {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} Container: ${id}`,
        );
        yield* deleteGroupContainer({ groupId, containerId: id }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `      ${RED}Failed to delete container ${id}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukePrivateEndpoints = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  groupId: string,
) =>
  Effect.gen(function* () {
    for (const provider of ["AWS", "AZURE", "GCP"] as const) {
      const response = yield* listGroupPrivateEndpointEndpointService({
        groupId,
        cloudProvider: provider,
      }).pipe(
        Effect.catch(() =>
          Console.log(
            `    ${RED}Failed to list private endpoints (${provider}) for project ${groupId}${RESET}`,
          ).pipe(Effect.map(() => ([]))),
        ),
      );

      for (const ep of getResults(response)) {
        const id = ep.id ?? ep._id ?? ep.endpointServiceId ?? "";
        totalFound++;
        const excluded = isExcluded(nukeConfig, "PrivateEndpoint", id);
        if (excluded) {
          totalSkipped++;
          yield* Console.log(
            `    ${YELLOW}[SKIP]${RESET} PrivateEndpoint: ${id} ${DIM}(${provider})${RESET} — ${excluded.reason ?? "excluded"}`,
          );
          continue;
        }

        if (dryRun) {
          yield* Console.log(
            `    ${RED}[DELETE]${RESET} PrivateEndpoint: ${id} ${DIM}(${provider})${RESET}`,
          );
        } else {
          yield* Console.log(
            `    ${RED}[DELETE]${RESET} PrivateEndpoint: ${id} ${DIM}(${provider})${RESET}`,
          );
          yield* deleteGroupPrivateEndpointEndpointService({
            groupId,
            cloudProvider: provider,
            endpointServiceId: id,
          }).pipe(
            Effect.andThen(() => {
              totalDeleted++;
            }),
            Effect.catch(() => {
              totalFailed++;
              return Console.log(
                `      ${RED}Failed to delete private endpoint ${id}${RESET}`,
              );
            }),
          );
        }
      }
    }
  });

const nukePrivateNetworkSettings = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  groupId: string,
) =>
  Effect.gen(function* () {
    const response = yield* listGroupPrivateNetworkSettingEndpointIds({
      groupId,
    }).pipe(
      Effect.catch(() =>
        Console.log(
          `    ${RED}Failed to list private network settings for project ${groupId}${RESET}`,
        ).pipe(Effect.map(() => ({ results: [] }))),
      ),
    );

    for (const setting of getResults(response)) {
      const id = setting.endpointId ?? setting.id ?? setting._id ?? "";
      totalFound++;
      const excluded = isExcluded(nukeConfig, "PrivateNetworkSetting", id);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} PrivateNetworkSetting: ${id} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} PrivateNetworkSetting: ${id}`,
        );
      } else {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} PrivateNetworkSetting: ${id}`,
        );
        yield* deleteGroupPrivateNetworkSettingEndpointId({
          groupId,
          endpointId: id,
        }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `      ${RED}Failed to delete private network setting ${id}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeDataFederation = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  groupId: string,
) =>
  Effect.gen(function* () {
    const response = yield* listGroupDataFederation({ groupId }).pipe(
      Effect.catch(() =>
        Console.log(
          `    ${RED}Failed to list data federation for project ${groupId}${RESET}`,
        ).pipe(Effect.map(() => ([]))),
      ),
    );

    for (const df of getResults(response)) {
      const name = df.name ?? "";
      const id = df.name ?? df.id ?? df._id ?? "";
      totalFound++;
      const excluded = isExcluded(nukeConfig, "DataFederation", id, name);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} DataFederation: ${name} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} DataFederation: ${name}`,
        );
      } else {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} DataFederation: ${name}`,
        );
        yield* deleteGroupDataFederation({ groupId, tenantName: name }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `      ${RED}Failed to delete data federation ${name}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeAlertConfigs = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  groupId: string,
) =>
  Effect.gen(function* () {
    const response = yield* listGroupAlertConfigs({ groupId }).pipe(
      Effect.catch(() =>
        Console.log(
          `    ${RED}Failed to list alert configs for project ${groupId}${RESET}`,
        ).pipe(Effect.map(() => ({ results: [] }))),
      ),
    );

    for (const alert of getResults(response)) {
      const id = alert.id ?? alert._id ?? "";
      totalFound++;
      const excluded = isExcluded(nukeConfig, "AlertConfig", id);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} AlertConfig: ${id} ${DIM}(event: ${alert.eventTypeName ?? "unknown"})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} AlertConfig: ${id} ${DIM}(event: ${alert.eventTypeName ?? "unknown"})${RESET}`,
        );
      } else {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} AlertConfig: ${id}`,
        );
        yield* deleteGroupAlertConfig({ groupId, alertConfigId: id }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `      ${RED}Failed to delete alert config ${id}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeAccessListEntries = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  groupId: string,
) =>
  Effect.gen(function* () {
    const response = yield* listGroupAccessListEntries({ groupId }).pipe(
      Effect.catch(() =>
        Console.log(
          `    ${RED}Failed to list access list entries for project ${groupId}${RESET}`,
        ).pipe(Effect.map(() => ({ results: [] }))),
      ),
    );

    for (const entry of getResults(response)) {
      const entryValue =
        entry.ipAddress ?? entry.cidrBlock ?? entry.awsSecurityGroup ?? "";
      totalFound++;
      const excluded = isExcluded(
        nukeConfig,
        "AccessListEntry",
        entryValue,
        entryValue,
      );
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} AccessListEntry: ${entryValue} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} AccessListEntry: ${entryValue}`,
        );
      } else {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} AccessListEntry: ${entryValue}`,
        );
        yield* deleteGroupAccessListEntry({ groupId, entryValue }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `      ${RED}Failed to delete access list entry ${entryValue}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeBackupExportBuckets = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  groupId: string,
) =>
  Effect.gen(function* () {
    const response = yield* listGroupBackupExportBuckets({ groupId }).pipe(
      Effect.catch(() =>
        Console.log(
          `    ${RED}Failed to list backup export buckets for project ${groupId}${RESET}`,
        ).pipe(Effect.map(() => ({ results: [] }))),
      ),
    );

    for (const bucket of getResults(response)) {
      const id = bucket.id ?? bucket._id ?? "";
      const name = bucket.bucketName ?? "";
      totalFound++;
      const excluded = isExcluded(nukeConfig, "BackupExportBucket", id, name);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} BackupExportBucket: ${name} ${DIM}(id: ${id})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} BackupExportBucket: ${name} ${DIM}(id: ${id})${RESET}`,
        );
      } else {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} BackupExportBucket: ${name} ${DIM}(id: ${id})${RESET}`,
        );
        yield* deleteGroupBackupExportBucket({
          groupId,
          exportBucketId: id,
        }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `      ${RED}Failed to delete backup export bucket ${id}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeBackupPrivateEndpoints = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  groupId: string,
) =>
  Effect.gen(function* () {
    const response = yield* listGroupBackupPrivateEndpoints({
      groupId,
      cloudProvider: "AWS",
    }).pipe(
      Effect.catch(() =>
        Console.log(
          `    ${RED}Failed to list backup private endpoints for project ${groupId}${RESET}`,
        ).pipe(Effect.map(() => ({ results: [] }))),
      ),
    );

    for (const ep of getResults(response)) {
      const id = ep.id ?? ep._id ?? "";
      totalFound++;
      const excluded = isExcluded(nukeConfig, "BackupPrivateEndpoint", id);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} BackupPrivateEndpoint: ${id} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} BackupPrivateEndpoint: ${id}`,
        );
      } else {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} BackupPrivateEndpoint: ${id}`,
        );
        yield* deleteGroupBackupPrivateEndpoint({
          groupId,
          cloudProvider: "AWS",
          endpointId: id,
        }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `      ${RED}Failed to delete backup private endpoint ${id}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeIntegrations = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  groupId: string,
) =>
  Effect.gen(function* () {
    const response = yield* listGroupIntegrations({ groupId }).pipe(
      Effect.catch(() =>
        Console.log(
          `    ${RED}Failed to list integrations for project ${groupId}${RESET}`,
        ).pipe(Effect.map(() => ({ results: [] }))),
      ),
    );

    for (const integration of getResults(response)) {
      const type = integration.type ?? "";
      totalFound++;
      const excluded = isExcluded(nukeConfig, "Integration", type, type);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} Integration: ${type} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} Integration: ${type}`,
        );
      } else {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} Integration: ${type}`,
        );
        yield* deleteGroupIntegration({
          groupId,
          integrationType: type,
        }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `      ${RED}Failed to delete integration ${type}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeLogIntegrations = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  groupId: string,
) =>
  Effect.gen(function* () {
    const response = yield* listGroupLogIntegrations({ groupId }).pipe(
      Effect.catch(() =>
        Console.log(
          `    ${RED}Failed to list log integrations for project ${groupId}${RESET}`,
        ).pipe(Effect.map(() => ({ results: [] }))),
      ),
    );

    for (const li of getResults(response)) {
      const id = li.id ?? li._id ?? "";
      totalFound++;
      const excluded = isExcluded(nukeConfig, "LogIntegration", id);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} LogIntegration: ${id} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} LogIntegration: ${id}`,
        );
      } else {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} LogIntegration: ${id}`,
        );
        yield* deleteGroupLogIntegration({ groupId, id }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `      ${RED}Failed to delete log integration ${id}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeGroupServiceAccounts = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  groupId: string,
) =>
  Effect.gen(function* () {
    const response = yield* listGroupServiceAccounts({ groupId }).pipe(
      Effect.catch(() =>
        Console.log(
          `    ${RED}Failed to list service accounts for project ${groupId}${RESET}`,
        ).pipe(Effect.map(() => ({ results: [] }))),
      ),
    );

    for (const sa of getResults(response)) {
      const id = sa.clientId ?? sa.id ?? sa._id ?? "";
      const name = sa.name ?? "";
      totalFound++;
      const excluded = isExcluded(
        nukeConfig,
        "GroupServiceAccount",
        id,
        name,
      );
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} GroupServiceAccount: ${name} ${DIM}(id: ${id})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} GroupServiceAccount: ${name} ${DIM}(id: ${id})${RESET}`,
        );
      } else {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} GroupServiceAccount: ${name} ${DIM}(id: ${id})${RESET}`,
        );
        yield* deleteGroupServiceAccount({ groupId, clientId: id }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `      ${RED}Failed to delete service account ${id}${RESET}`,
            );
          }),
        );
      }
    }
  });

// ============================================================================
// Stream resources (workspace-scoped)
// ============================================================================

const nukeStreamConnections = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  groupId: string,
  tenantName: string,
) =>
  Effect.gen(function* () {
    const response = yield* listGroupStreamConnections({
      groupId,
      tenantName,
    }).pipe(
      Effect.catch(() =>
        Console.log(
          `      ${RED}Failed to list stream connections for workspace ${tenantName}${RESET}`,
        ).pipe(Effect.map(() => ({ results: [] }))),
      ),
    );

    for (const conn of getResults(response)) {
      const name = conn.name ?? "";
      totalFound++;
      const excluded = isExcluded(nukeConfig, "StreamConnection", name, name);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `      ${YELLOW}[SKIP]${RESET} StreamConnection: ${name} ${DIM}(workspace: ${tenantName})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `      ${RED}[DELETE]${RESET} StreamConnection: ${name} ${DIM}(workspace: ${tenantName})${RESET}`,
        );
      } else {
        yield* Console.log(
          `      ${RED}[DELETE]${RESET} StreamConnection: ${name}`,
        );
        yield* deleteGroupStreamConnection({
          groupId,
          tenantName,
          connectionName: name,
        }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `        ${RED}Failed to delete stream connection ${name}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeStreamProcessors = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  groupId: string,
  tenantName: string,
) =>
  Effect.gen(function* () {
    const response = yield* getGroupStreamProcessors({
      groupId,
      tenantName,
    }).pipe(
      Effect.catch(() =>
        Console.log(
          `      ${RED}Failed to list stream processors for workspace ${tenantName}${RESET}`,
        ).pipe(Effect.map(() => ({ results: [] }))),
      ),
    );

    for (const proc of getResults(response)) {
      const name = proc.name ?? "";
      const id = proc.id ?? proc._id ?? name;
      totalFound++;
      const excluded = isExcluded(nukeConfig, "StreamProcessor", id, name);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `      ${YELLOW}[SKIP]${RESET} StreamProcessor: ${name} ${DIM}(workspace: ${tenantName})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `      ${RED}[DELETE]${RESET} StreamProcessor: ${name} ${DIM}(workspace: ${tenantName})${RESET}`,
        );
      } else {
        yield* Console.log(
          `      ${RED}[DELETE]${RESET} StreamProcessor: ${name}`,
        );
        yield* deleteGroupStreamProcessor({
          groupId,
          tenantName,
          processorName: name,
        }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `        ${RED}Failed to delete stream processor ${name}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeStreamWorkspaces = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  groupId: string,
) =>
  Effect.gen(function* () {
    const response = yield* listGroupStreamWorkspaces({ groupId }).pipe(
      Effect.catch(() =>
        Console.log(
          `    ${RED}Failed to list stream workspaces for project ${groupId}${RESET}`,
        ).pipe(Effect.map(() => ({ results: [] }))),
      ),
    );

    for (const ws of getResults(response)) {
      const name = ws.name ?? "";
      const id = ws.id ?? ws._id ?? name;
      totalFound++;
      const excluded = isExcluded(nukeConfig, "StreamWorkspace", id, name);

      yield* Console.log(
        `    ${CYAN}StreamWorkspace: ${name}${RESET} ${DIM}(id: ${id})${RESET}`,
      );

      // Delete child resources regardless
      yield* nukeStreamConnections(
        excluded ? true : dryRun,
        nukeConfig,
        groupId,
        name,
      );
      yield* nukeStreamProcessors(
        excluded ? true : dryRun,
        nukeConfig,
        groupId,
        name,
      );

      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} StreamWorkspace: ${name} ${DIM}(${id})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} StreamWorkspace: ${name} ${DIM}(${id})${RESET}`,
        );
      } else {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} StreamWorkspace: ${name} ${DIM}(${id})${RESET}`,
        );
        yield* deleteGroupStreamWorkspace({ groupId, tenantName: name }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `      ${RED}Failed to delete stream workspace ${name}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeStreamPrivateLinkConnections = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  groupId: string,
) =>
  Effect.gen(function* () {
    const response = yield* listGroupStreamPrivateLinkConnections({
      groupId,
    }).pipe(
      Effect.catch(() =>
        Console.log(
          `    ${RED}Failed to list stream private link connections for project ${groupId}${RESET}`,
        ).pipe(Effect.map(() => ({ results: [] }))),
      ),
    );

    for (const conn of getResults(response)) {
      const id = conn.id ?? conn._id ?? conn.connectionId ?? "";
      totalFound++;
      const excluded = isExcluded(
        nukeConfig,
        "StreamPrivateLinkConnection",
        id,
      );
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} StreamPrivateLinkConnection: ${id} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} StreamPrivateLinkConnection: ${id}`,
        );
      } else {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} StreamPrivateLinkConnection: ${id}`,
        );
        yield* deleteGroupStreamPrivateLinkConnection({
          groupId,
          connectionId: id,
        }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `      ${RED}Failed to delete stream private link connection ${id}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeStreamVpcPeeringConnections = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  groupId: string,
) =>
  Effect.gen(function* () {
    const response = yield* listGroupStreamVpcPeeringConnections({
      groupId,
    }).pipe(
      Effect.catch(() =>
        Console.log(
          `    ${RED}Failed to list stream VPC peering for project ${groupId}${RESET}`,
        ).pipe(Effect.map(() => ({ results: [] }))),
      ),
    );

    for (const conn of getResults(response)) {
      const id = conn.id ?? conn._id ?? "";
      totalFound++;
      const excluded = isExcluded(
        nukeConfig,
        "StreamVpcPeeringConnection",
        id,
      );
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `    ${YELLOW}[SKIP]${RESET} StreamVpcPeeringConnection: ${id} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} StreamVpcPeeringConnection: ${id}`,
        );
      } else {
        yield* Console.log(
          `    ${RED}[DELETE]${RESET} StreamVpcPeeringConnection: ${id}`,
        );
        yield* deleteGroupStreamVpcPeeringConnection({ groupId, id }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `      ${RED}Failed to delete stream VPC peering ${id}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeEncryptionAtRestPrivateEndpoints = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  groupId: string,
) =>
  Effect.gen(function* () {
    for (const provider of ["AWS", "AZURE"] as const) {
      const response = yield* listGroupEncryptionAtRestPrivateEndpoints({
        groupId,
        cloudProvider: provider,
      }).pipe(
        Effect.catch(() =>
          Console.log(
            `    ${RED}Failed to list encryption-at-rest private endpoints (${provider}) for project ${groupId}${RESET}`,
          ).pipe(Effect.map(() => ({ results: [] }))),
        ),
      );

      for (const ep of getResults(response)) {
        const id = ep.id ?? ep._id ?? "";
        totalFound++;
        yield* Console.log(
          `    ${DIM}[LIST]${RESET} EncryptionAtRestPrivateEndpoint: ${id} ${DIM}(${provider})${RESET}`,
        );
        // No direct delete operation for individual encryption-at-rest private endpoints
        // via deleteGroupEncryptionAtRestPrivateEndpoint — they use a "request deletion" pattern.
        // Listing only for awareness.
      }
    }
  });

// ============================================================================
// Project-level orchestration
// ============================================================================

const nukeProject = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  groupId: string,
  groupName: string,
) =>
  Effect.gen(function* () {
    // Delete child resources in dependency order:
    // 1. Stream child resources (connections, processors) via workspaces
    yield* Console.log(`    ${DIM}--- Stream Resources ---${RESET}`);
    yield* nukeStreamWorkspaces(dryRun, nukeConfig, groupId);
    yield* nukeStreamPrivateLinkConnections(dryRun, nukeConfig, groupId);
    yield* nukeStreamVpcPeeringConnections(dryRun, nukeConfig, groupId);

    // 2. Cluster child resources (archives, search, snapshots) then clusters
    yield* Console.log(`    ${DIM}--- Clusters ---${RESET}`);
    yield* nukeClusters(dryRun, nukeConfig, groupId);
    yield* nukeFlexClusters(dryRun, nukeConfig, groupId);

    // 3. Database users and custom roles
    yield* Console.log(`    ${DIM}--- Users & Roles ---${RESET}`);
    yield* nukeDatabaseUsers(dryRun, nukeConfig, groupId);
    yield* nukeCustomDbRoles(dryRun, nukeConfig, groupId);

    // 4. Data federation
    yield* Console.log(`    ${DIM}--- Data Federation ---${RESET}`);
    yield* nukeDataFederation(dryRun, nukeConfig, groupId);

    // 5. Networking (peers before containers, endpoints)
    yield* Console.log(`    ${DIM}--- Networking ---${RESET}`);
    yield* nukePrivateEndpoints(dryRun, nukeConfig, groupId);
    yield* nukePrivateNetworkSettings(dryRun, nukeConfig, groupId);
    yield* nukeNetworkPeering(dryRun, nukeConfig, groupId);
    yield* nukeContainers(dryRun, nukeConfig, groupId);

    // 6. Backup resources
    yield* Console.log(`    ${DIM}--- Backup ---${RESET}`);
    yield* nukeBackupExportBuckets(dryRun, nukeConfig, groupId);
    yield* nukeBackupPrivateEndpoints(dryRun, nukeConfig, groupId);

    // 7. Integrations
    yield* Console.log(`    ${DIM}--- Integrations ---${RESET}`);
    yield* nukeIntegrations(dryRun, nukeConfig, groupId);
    yield* nukeLogIntegrations(dryRun, nukeConfig, groupId);

    // 8. Alert configs and access lists
    yield* Console.log(`    ${DIM}--- Alerts & Access ---${RESET}`);
    yield* nukeAlertConfigs(dryRun, nukeConfig, groupId);
    yield* nukeAccessListEntries(dryRun, nukeConfig, groupId);

    // 9. Service accounts
    yield* Console.log(`    ${DIM}--- Service Accounts ---${RESET}`);
    yield* nukeGroupServiceAccounts(dryRun, nukeConfig, groupId);

    // 10. Encryption at rest private endpoints (list only)
    yield* nukeEncryptionAtRestPrivateEndpoints(dryRun, nukeConfig, groupId);
  });

// ============================================================================
// Organization-level operations
// ============================================================================

const nukeOrgApiKeys = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  orgId: string,
) =>
  Effect.gen(function* () {
    const response = yield* listOrgApiKeys({ orgId }).pipe(
      Effect.catch(() =>
        Console.log(
          `  ${RED}Failed to list org API keys for org ${orgId}${RESET}`,
        ).pipe(Effect.map(() => ({ results: [] }))),
      ),
    );

    for (const key of getResults(response)) {
      const id = key.id ?? key._id ?? "";
      const desc = key.desc ?? "";
      totalFound++;
      const excluded = isExcluded(nukeConfig, "OrgApiKey", id, desc);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `  ${YELLOW}[SKIP]${RESET} OrgApiKey: ${desc} ${DIM}(id: ${id})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `  ${RED}[DELETE]${RESET} OrgApiKey: ${desc} ${DIM}(id: ${id})${RESET}`,
        );
      } else {
        yield* Console.log(
          `  ${RED}[DELETE]${RESET} OrgApiKey: ${desc} ${DIM}(id: ${id})${RESET}`,
        );
        yield* deleteOrgApiKey({ orgId, apiUserId: id }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `    ${RED}Failed to delete org API key ${id}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeOrgTeams = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  orgId: string,
) =>
  Effect.gen(function* () {
    const response = yield* listOrgTeams({ orgId }).pipe(
      Effect.catch(() =>
        Console.log(
          `  ${RED}Failed to list org teams for org ${orgId}${RESET}`,
        ).pipe(Effect.map(() => ({ results: [] }))),
      ),
    );

    for (const team of getResults(response)) {
      const id = team.id ?? team._id ?? "";
      const name = team.name ?? "";
      totalFound++;
      const excluded = isExcluded(nukeConfig, "OrgTeam", id, name);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `  ${YELLOW}[SKIP]${RESET} OrgTeam: ${name} ${DIM}(id: ${id})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `  ${RED}[DELETE]${RESET} OrgTeam: ${name} ${DIM}(id: ${id})${RESET}`,
        );
      } else {
        yield* Console.log(
          `  ${RED}[DELETE]${RESET} OrgTeam: ${name} ${DIM}(id: ${id})${RESET}`,
        );
        yield* deleteOrgTeam({ orgId, teamId: id }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `    ${RED}Failed to delete org team ${id}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeOrgServiceAccounts = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  orgId: string,
) =>
  Effect.gen(function* () {
    const response = yield* listOrgServiceAccounts({ orgId }).pipe(
      Effect.catch(() =>
        Console.log(
          `  ${RED}Failed to list org service accounts for org ${orgId}${RESET}`,
        ).pipe(Effect.map(() => ({ results: [] }))),
      ),
    );

    for (const sa of getResults(response)) {
      const id = sa.clientId ?? sa.id ?? sa._id ?? "";
      const name = sa.name ?? "";
      totalFound++;
      const excluded = isExcluded(
        nukeConfig,
        "OrgServiceAccount",
        id,
        name,
      );
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `  ${YELLOW}[SKIP]${RESET} OrgServiceAccount: ${name} ${DIM}(id: ${id})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `  ${RED}[DELETE]${RESET} OrgServiceAccount: ${name} ${DIM}(id: ${id})${RESET}`,
        );
      } else {
        yield* Console.log(
          `  ${RED}[DELETE]${RESET} OrgServiceAccount: ${name} ${DIM}(id: ${id})${RESET}`,
        );
        yield* deleteOrgServiceAccount({ orgId, clientId: id }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `    ${RED}Failed to delete org service account ${id}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeOrgResourcePolicies = (
  dryRun: boolean,
  nukeConfig: NukeConfig,
  orgId: string,
) =>
  Effect.gen(function* () {
    const response = yield* listOrgResourcePolicies({ orgId }).pipe(
      Effect.catch(() =>
        Console.log(
          `  ${RED}Failed to list org resource policies for org ${orgId}${RESET}`,
        ).pipe(Effect.map(() => ({ results: [] }))),
      ),
    );

    for (const policy of getResults(response)) {
      const id = policy.id ?? policy._id ?? "";
      const name = policy.name ?? "";
      totalFound++;
      const excluded = isExcluded(nukeConfig, "OrgResourcePolicy", id, name);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `  ${YELLOW}[SKIP]${RESET} OrgResourcePolicy: ${name} ${DIM}(id: ${id})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `  ${RED}[DELETE]${RESET} OrgResourcePolicy: ${name} ${DIM}(id: ${id})${RESET}`,
        );
      } else {
        yield* Console.log(
          `  ${RED}[DELETE]${RESET} OrgResourcePolicy: ${name} ${DIM}(id: ${id})${RESET}`,
        );
        yield* deleteOrgResourcePolicy({ orgId, resourcePolicyId: id }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `    ${RED}Failed to delete org resource policy ${id}${RESET}`,
            );
          }),
        );
      }
    }
  });

// ============================================================================
// Top-level orchestration
// ============================================================================

const nukeAllProjects = (dryRun: boolean, nukeConfig: NukeConfig) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}Projects (Groups)${RESET}`);

    const response = yield* listGroups({}).pipe(
      Effect.catch(() =>
        Console.log(`  ${RED}Failed to list projects${RESET}`).pipe(
          Effect.map(() => ({ results: [] })),
        ),
      ),
    );

    const projects = getResults(response);
    if (projects.length === 0) {
      yield* Console.log(`  ${DIM}No projects found${RESET}`);
      return;
    }

    for (const project of projects) {
      const id = project.id ?? project._id ?? "";
      const name = project.name ?? "";
      totalFound++;

      const excluded = isExcluded(nukeConfig, "Project", id, name);

      yield* Console.log(
        `\n  ${BOLD}Project: ${name}${RESET} ${DIM}(${id})${RESET}`,
      );

      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `  ${YELLOW}[SKIP]${RESET} Project: ${name} ${DIM}(${id})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        // Still list child resources for awareness
        yield* nukeProject(true, nukeConfig, id, name);
        continue;
      }

      // Nuke all child resources first, then the project
      yield* nukeProject(dryRun, nukeConfig, id, name);

      if (dryRun) {
        yield* Console.log(
          `  ${RED}[DELETE]${RESET} Project: ${name} ${DIM}(${id})${RESET}`,
        );
      } else {
        yield* Console.log(
          `  ${RED}[DELETE]${RESET} Project: ${name} ${DIM}(${id})${RESET}`,
        );
        yield* deleteGroup({ groupId: id }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `    ${RED}Failed to delete project ${id}${RESET}`,
            );
          }),
        );
      }
    }
  });

const nukeAllOrgs = (dryRun: boolean, nukeConfig: NukeConfig) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}Organizations${RESET}`);

    const response = yield* listOrgs({}).pipe(
      Effect.catch(() =>
        Console.log(`  ${RED}Failed to list organizations${RESET}`).pipe(
          Effect.map(() => ({ results: [] })),
        ),
      ),
    );

    const orgs = getResults(response);
    if (orgs.length === 0) {
      yield* Console.log(`  ${DIM}No organizations found${RESET}`);
      return;
    }

    for (const org of orgs) {
      const id = org.id ?? org._id ?? "";
      const name = org.name ?? "";

      yield* Console.log(
        `\n  ${BOLD}Org: ${name}${RESET} ${DIM}(${id})${RESET}`,
      );

      // Delete org-level child resources
      yield* nukeOrgApiKeys(dryRun, nukeConfig, id);
      yield* nukeOrgTeams(dryRun, nukeConfig, id);
      yield* nukeOrgServiceAccounts(dryRun, nukeConfig, id);
      yield* nukeOrgResourcePolicies(dryRun, nukeConfig, id);

      // Note: We do NOT delete the org itself — that's too destructive
      // and requires special permissions. Org deletion is intentionally omitted.
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
        `\n${BOLD}MongoDB Atlas Nuke${RESET} ${DIM}(${mode}${DIM})${RESET}`,
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

      // 1. Projects and all their child resources
      yield* nukeAllProjects(config.dryRun, nukeConfig);

      // 2. Organization-level resources
      yield* nukeAllOrgs(config.dryRun, nukeConfig);

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
).pipe(Command.withDescription("List and delete all MongoDB Atlas resources"));

// ============================================================================
// Entry Point
// ============================================================================

BunRuntime.runMain(
  Effect.provide(Command.run(nuke, { version: "1.0.0" }), BunServices.layer),
);
