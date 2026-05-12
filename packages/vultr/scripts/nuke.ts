#!/usr/bin/env bun
/**
 * Vultr Nuke Script
 *
 * Lists and deletes all resources in a Vultr account.
 * Supports --dry-run to preview without deleting.
 *
 * Usage:
 *   bun packages/vultr/scripts/nuke.ts --dry-run
 *   bun packages/vultr/scripts/nuke.ts
 */
import { config } from "dotenv";
import * as fs from "node:fs";
import * as nodePath from "node:path";

// Load .env from repo root (two levels up from scripts/)
const envPath = nodePath.resolve(import.meta.dir, "../../../.env");
config({ path: envPath });
if (!process.env.VULTR_API_KEY) {
  // Also try CWD/.env as fallback
  config();
}

import { BunRuntime, BunServices } from "@effect/platform-bun";
import { Console, Effect } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { Command, Flag } from "effect/unstable/cli";

import { CredentialsFromEnv } from "../src/credentials.ts";
import { listInstances } from "../src/operations/listInstances.ts";
import { deleteInstance } from "../src/operations/deleteInstance.ts";
import { listBaremetals } from "../src/operations/listBaremetals.ts";
import { deleteBaremetal } from "../src/operations/deleteBaremetal.ts";
import { listKubernetesClusters } from "../src/operations/listKubernetesClusters.ts";
import { deleteKubernetesCluster } from "../src/operations/deleteKubernetesCluster.ts";
import { listDatabases } from "../src/operations/listDatabases.ts";
import { deleteDatabase } from "../src/operations/deleteDatabase.ts";
import { listLoadBalancers } from "../src/operations/listLoadBalancers.ts";
import { deleteLoadBalancer } from "../src/operations/deleteLoadBalancer.ts";
import { listBlocks } from "../src/operations/listBlocks.ts";
import { deleteBlock } from "../src/operations/deleteBlock.ts";
import { listBlockSnapshots } from "../src/operations/listBlockSnapshots.ts";
import { deleteBlockSnapshot } from "../src/operations/deleteBlockSnapshot.ts";
import { listSnapshots } from "../src/operations/listSnapshots.ts";
import { deleteSnapshot } from "../src/operations/deleteSnapshot.ts";
import { listIsos } from "../src/operations/listIsos.ts";
import { deleteIso } from "../src/operations/deleteIso.ts";
import { listObjectStorages } from "../src/operations/listObjectStorages.ts";
import { deleteObjectStorage } from "../src/operations/deleteObjectStorage.ts";
import { listVpcs } from "../src/operations/listVpcs.ts";
import { deleteVpc } from "../src/operations/deleteVpc.ts";
import { listVpc2 } from "../src/operations/listVpc2.ts";
import { deleteVpc2 } from "../src/operations/deleteVpc2.ts";
import { listNatGateways } from "../src/operations/listNatGateways.ts";
import { deleteNatGateway } from "../src/operations/deleteNatGateway.ts";
import { listReservedIps } from "../src/operations/listReservedIps.ts";
import { deleteReservedIp } from "../src/operations/deleteReservedIp.ts";
import { listDnsDomains } from "../src/operations/listDnsDomains.ts";
import { deleteDnsDomain } from "../src/operations/deleteDnsDomain.ts";
import { listFirewallGroups } from "../src/operations/listFirewallGroups.ts";
import { deleteFirewallGroup } from "../src/operations/deleteFirewallGroup.ts";
import { listSshKeys } from "../src/operations/listSshKeys.ts";
import { deleteSshKey } from "../src/operations/deleteSshKey.ts";
import { listStartupScripts } from "../src/operations/listStartupScripts.ts";
import { deleteStartupScript } from "../src/operations/deleteStartupScript.ts";
import { listInstanceTemplates } from "../src/operations/listInstanceTemplates.ts";
import { deleteInstanceTemplate } from "../src/operations/deleteInstanceTemplate.ts";
import { listStorageGateways } from "../src/operations/listStorageGateways.ts";
import { deleteStorageGateway } from "../src/operations/deleteStorageGateway.ts";
import { listVFS } from "../src/operations/listVFS.ts";
import { deleteVFS } from "../src/operations/deleteVFS.ts";
import { listInference } from "../src/operations/listInference.ts";
import { deleteInference } from "../src/operations/deleteInference.ts";
import { listRegistries } from "../src/operations/listRegistries.ts";
import { deleteRegistry } from "../src/operations/deleteRegistry.ts";
import { listPullzones } from "../src/operations/listPullzones.ts";
import { deletePullzone } from "../src/operations/deletePullzone.ts";
import { listPushzones } from "../src/operations/listPushzones.ts";
import { deletePushzone } from "../src/operations/deletePushzone.ts";

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
  cfg: NukeConfig,
  type: string,
  id: string,
  name?: string,
): ExcludeRule | undefined {
  return cfg.exclude?.find((rule) => {
    if (rule.type !== type) return false;
    if (rule.ids?.includes(id)) return true;
    if (name && rule.namePatterns?.some((p) => matchGlob(p, name))) return true;
    return false;
  });
}

// ============================================================================
// Generic helper for list + delete
// ============================================================================

interface NukeOptions<I, O> {
  type: string;
  list: () => Effect.Effect<O, unknown, any>;
  itemsOf: (out: O) => ReadonlyArray<I>;
  idOf: (item: I) => string;
  nameOf?: (item: I) => string | undefined;
  describe: (item: I) => string;
  del: (item: I) => Effect.Effect<unknown, unknown, any>;
  indent?: string;
}

const nukeResource = <I, O>(
  dryRun: boolean,
  nukeConfig: NukeConfig,
  opts: NukeOptions<I, O>,
) =>
  Effect.gen(function* () {
    const indent = opts.indent ?? "  ";
    yield* Console.log(`\n${BOLD}${CYAN}${opts.type}${RESET}`);

    const result = yield* opts.list().pipe(
      Effect.catch((e) =>
        Console.log(
          `${indent}${RED}Failed to list ${opts.type}: ${(e as { message?: string })?.message ?? String(e)}${RESET}`,
        ).pipe(Effect.map(() => null as O | null)),
      ),
    );

    if (result === null) return;

    const items = opts.itemsOf(result);
    if (items.length === 0) {
      yield* Console.log(`${indent}${DIM}No ${opts.type} found${RESET}`);
      return;
    }

    for (const item of items) {
      totalFound++;
      const id = opts.idOf(item);
      const name = opts.nameOf?.(item);
      const excluded = isExcluded(nukeConfig, opts.type, id, name);

      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `${indent}${YELLOW}[SKIP]${RESET} ${opts.type}: ${opts.describe(item)} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `${indent}${RED}[DELETE]${RESET} ${opts.type}: ${opts.describe(item)}`,
        );
      } else {
        yield* Console.log(
          `${indent}${RED}[DELETE]${RESET} ${opts.type}: ${opts.describe(item)}`,
        );
        yield* opts.del(item).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch((e) => {
            totalFailed++;
            return Console.log(
              `${indent}  ${RED}Failed to delete ${opts.type} ${id}: ${(e as { message?: string })?.message ?? String(e)}${RESET}`,
            );
          }),
        );
      }
    }
  });

// ============================================================================
// NAT Gateways (nested under VPCs)
// ============================================================================

const nukeNatGateways = (dryRun: boolean, nukeConfig: NukeConfig) =>
  Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}NatGateway${RESET}`);

    const vpcs = yield* listVpcs({}).pipe(
      Effect.catch(() => Effect.succeed({ vpcs: [] as Array<{ id: string }> })),
    );

    const vpcList = vpcs.vpcs ?? [];
    if (vpcList.length === 0) {
      yield* Console.log(`  ${DIM}No VPCs (no NAT Gateways to scan)${RESET}`);
      return;
    }

    let anyFound = false;
    for (const vpc of vpcList) {
      const result = yield* listNatGateways({ vpcId: vpc.id }).pipe(
        Effect.catch(() =>
          Effect.succeed({ nat_gateways: [] as Array<any> }),
        ),
      );

      const gateways = result.nat_gateways ?? [];
      for (const gw of gateways) {
        anyFound = true;
        const id = gw.id ?? "";
        const label = gw.label;
        totalFound++;
        const excluded = isExcluded(nukeConfig, "NatGateway", id, label);

        if (excluded) {
          totalSkipped++;
          yield* Console.log(
            `  ${YELLOW}[SKIP]${RESET} NatGateway: ${label ?? id} ${DIM}(${id}, vpc: ${vpc.id})${RESET} — ${excluded.reason ?? "excluded"}`,
          );
          continue;
        }

        if (dryRun) {
          yield* Console.log(
            `  ${RED}[DELETE]${RESET} NatGateway: ${label ?? id} ${DIM}(${id}, vpc: ${vpc.id})${RESET}`,
          );
        } else {
          yield* Console.log(
            `  ${RED}[DELETE]${RESET} NatGateway: ${label ?? id} ${DIM}(${id}, vpc: ${vpc.id})${RESET}`,
          );
          yield* deleteNatGateway({ vpcId: vpc.id, natGatewayId: id }).pipe(
            Effect.andThen(() => {
              totalDeleted++;
            }),
            Effect.catch((e) => {
              totalFailed++;
              return Console.log(
                `    ${RED}Failed to delete NAT gateway ${id}: ${(e as { message?: string })?.message ?? String(e)}${RESET}`,
              );
            }),
          );
        }
      }
    }

    if (!anyFound) {
      yield* Console.log(`  ${DIM}No NatGateway found${RESET}`);
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
      const mode = cfg.dryRun
        ? `${YELLOW}DRY RUN${RESET}`
        : `${RED}LIVE${RESET}`;
      yield* Console.log(
        `\n${BOLD}Vultr Nuke${RESET} ${DIM}(${mode}${DIM})${RESET}`,
      );

      if (!cfg.dryRun) {
        yield* Console.log(
          `${RED}${BOLD}WARNING: This will DELETE all resources!${RESET}`,
        );
      }

      if (nukeConfig.exclude && nukeConfig.exclude.length > 0) {
        yield* Console.log(
          `${DIM}Loaded ${nukeConfig.exclude.length} exclusion rule(s) from nuke-config.json${RESET}`,
        );
      }

      // Deletion order: compute resources (depend on infra) → infra
      // 1. Compute / managed services (referenced by firewalls, VPCs, etc.)
      yield* nukeResource(cfg.dryRun, nukeConfig, {
        type: "Instance",
        list: () => listInstances({}),
        itemsOf: (o) => o.instances ?? [],
        idOf: (i) => i.id ?? "",
        nameOf: (i) => i.label,
        describe: (i) =>
          `${i.label ?? "(no label)"} ${DIM}(${i.id}, region: ${i.region}, plan: ${i.plan})${RESET}`,
        del: (i) => deleteInstance({ instanceId: i.id ?? "" }),
      });

      yield* nukeResource(cfg.dryRun, nukeConfig, {
        type: "BareMetal",
        list: () => listBaremetals({}),
        itemsOf: (o) => o.bare_metals ?? [],
        idOf: (i) => i.id ?? "",
        nameOf: (i) => i.label,
        describe: (i) =>
          `${i.label ?? "(no label)"} ${DIM}(${i.id}, region: ${i.region})${RESET}`,
        del: (i) => deleteBaremetal({ baremetalId: i.id ?? "" }),
      });

      yield* nukeResource(cfg.dryRun, nukeConfig, {
        type: "KubernetesCluster",
        list: () => listKubernetesClusters({}),
        itemsOf: (o) => o.vke_clusters ?? [],
        idOf: (c) => c.id ?? "",
        nameOf: (c) => c.label,
        describe: (c) =>
          `${c.label ?? "(no label)"} ${DIM}(${c.id}, region: ${c.region})${RESET}`,
        del: (c) => deleteKubernetesCluster({ vkeId: c.id ?? "" }),
      });

      yield* nukeResource(cfg.dryRun, nukeConfig, {
        type: "Database",
        list: () => listDatabases({}),
        itemsOf: (o) => o.databases ?? [],
        idOf: (d) => d.id ?? "",
        nameOf: (d) => d.label,
        describe: (d) =>
          `${d.label ?? "(no label)"} ${DIM}(${d.id}, engine: ${d.database_engine}, region: ${d.region})${RESET}`,
        del: (d) => deleteDatabase({ databaseId: d.id ?? "" }),
      });

      yield* nukeResource(cfg.dryRun, nukeConfig, {
        type: "LoadBalancer",
        list: () => listLoadBalancers({}),
        itemsOf: (o) => o.load_balancers ?? [],
        idOf: (l) => l.id ?? "",
        nameOf: (l) => l.label,
        describe: (l) =>
          `${l.label ?? "(no label)"} ${DIM}(${l.id}, region: ${l.region})${RESET}`,
        del: (l) => deleteLoadBalancer({ loadBalancerId: l.id ?? "" }),
      });

      yield* nukeResource(cfg.dryRun, nukeConfig, {
        type: "ObjectStorage",
        list: () => listObjectStorages({}),
        itemsOf: (o) => o.object_storages ?? [],
        idOf: (s) => s.id ?? "",
        nameOf: (s) => s.label,
        describe: (s) =>
          `${s.label ?? "(no label)"} ${DIM}(${s.id}, region: ${s.region})${RESET}`,
        del: (s) => deleteObjectStorage({ objectStorageId: s.id ?? "" }),
      });

      yield* nukeResource(cfg.dryRun, nukeConfig, {
        type: "VFS",
        list: () => listVFS({}),
        itemsOf: (o) => o.vfs ?? [],
        idOf: (v) => v.id ?? "",
        nameOf: (v) => v.label,
        describe: (v) =>
          `${v.label ?? "(no label)"} ${DIM}(${v.id}, region: ${v.region})${RESET}`,
        del: (v) => deleteVFS({ vfs_id: v.id ?? "" }),
      });

      yield* nukeResource(cfg.dryRun, nukeConfig, {
        type: "StorageGateway",
        list: () => listStorageGateways({}),
        itemsOf: (o) => o.storage_gateway ?? [],
        idOf: (g) => g.id ?? "",
        nameOf: (g) => g.label,
        describe: (g) =>
          `${g.label ?? "(no label)"} ${DIM}(${g.id}, type: ${g.type})${RESET}`,
        del: (g) => deleteStorageGateway({ storageGatewayId: g.id ?? "" }),
      });

      yield* nukeResource(cfg.dryRun, nukeConfig, {
        type: "Inference",
        list: () => listInference({}),
        itemsOf: (o) => o.subscriptions ?? [],
        idOf: (i) => i.id ?? "",
        nameOf: (i) => i.label,
        describe: (i) => `${i.label ?? "(no label)"} ${DIM}(${i.id})${RESET}`,
        del: (i) => deleteInference({ inferenceId: i.id ?? "" }),
      });

      yield* nukeResource(cfg.dryRun, nukeConfig, {
        type: "PullZone",
        list: () => listPullzones({}),
        itemsOf: (o) => o.pull_zones ?? [],
        idOf: (z) => z.id ?? "",
        nameOf: (z) => z.label,
        describe: (z) =>
          `${z.label ?? "(no label)"} ${DIM}(${z.id}, cdn: ${z.cdn_url})${RESET}`,
        del: (z) => deletePullzone({ pullzoneId: z.id ?? "" }),
      });

      yield* nukeResource(cfg.dryRun, nukeConfig, {
        type: "PushZone",
        list: () => listPushzones({}),
        itemsOf: (o) => o.push_zones ?? [],
        idOf: (z) => z.id ?? "",
        nameOf: (z) => z.label,
        describe: (z) =>
          `${z.label ?? "(no label)"} ${DIM}(${z.id}, cdn: ${z.cdn_url})${RESET}`,
        del: (z) => deletePushzone({ pushzoneId: z.id ?? "" }),
      });

      yield* nukeResource(cfg.dryRun, nukeConfig, {
        type: "Registry",
        list: () => listRegistries({}),
        itemsOf: (o) => o.registries ?? [],
        idOf: (r) => r.id ?? "",
        nameOf: (r) => r.name,
        describe: (r) =>
          `${r.name ?? "(no name)"} ${DIM}(${r.id})${RESET}`,
        del: (r) => deleteRegistry({ registryId: r.id ?? "" }),
      });

      // 2. NAT gateways (require VPCs to still exist)
      yield* nukeNatGateways(cfg.dryRun, nukeConfig);

      // 3. Block snapshots before blocks
      yield* nukeResource(cfg.dryRun, nukeConfig, {
        type: "BlockSnapshot",
        list: () => listBlockSnapshots({}),
        itemsOf: (o) => o.snapshots ?? [],
        idOf: (s) => s.id ?? "",
        describe: (s) =>
          `${s.id} ${DIM}(block: ${s.block_id}, size: ${s.size}GB)${RESET}`,
        del: (s) => deleteBlockSnapshot({ snapshotId: s.id ?? "" }),
      });

      yield* nukeResource(cfg.dryRun, nukeConfig, {
        type: "Block",
        list: () => listBlocks({}),
        itemsOf: (o) => o.blocks ?? [],
        idOf: (b) => b.id ?? "",
        nameOf: (b) => b.label,
        describe: (b) =>
          `${b.label ?? "(no label)"} ${DIM}(${b.id}, size: ${b.size_gb}GB, region: ${b.region})${RESET}`,
        del: (b) => deleteBlock({ blockId: b.id ?? "" }),
      });

      yield* nukeResource(cfg.dryRun, nukeConfig, {
        type: "Snapshot",
        list: () => listSnapshots({}),
        itemsOf: (o) => o.snapshots ?? [],
        idOf: (s) => s.id ?? "",
        nameOf: (s) => s.description,
        describe: (s) =>
          `${s.description ?? "(no description)"} ${DIM}(${s.id})${RESET}`,
        del: (s) => deleteSnapshot({ snapshotId: s.id ?? "" }),
      });

      yield* nukeResource(cfg.dryRun, nukeConfig, {
        type: "Iso",
        list: () => listIsos({}),
        itemsOf: (o) => o.isos ?? [],
        idOf: (i) => i.id ?? "",
        nameOf: (i) => i.filename,
        describe: (i) =>
          `${i.filename ?? "(no filename)"} ${DIM}(${i.id})${RESET}`,
        del: (i) => deleteIso({ isoId: i.id ?? "" }),
      });

      yield* nukeResource(cfg.dryRun, nukeConfig, {
        type: "InstanceTemplate",
        list: () => listInstanceTemplates({}),
        itemsOf: (o) => o.instance_templates ?? [],
        idOf: (t) => t.id ?? "",
        nameOf: (t) => t.label,
        describe: (t) =>
          `${t.label ?? "(no label)"} ${DIM}(${t.id}, plan: ${t.plan})${RESET}`,
        del: (t) =>
          deleteInstanceTemplate({ instancetemplateId: t.id ?? "" }),
      });

      yield* nukeResource(cfg.dryRun, nukeConfig, {
        type: "ReservedIp",
        list: () => listReservedIps({}),
        itemsOf: (o) => o.reserved_ips ?? [],
        idOf: (r) => r.id ?? "",
        nameOf: (r) => r.label,
        describe: (r) =>
          `${r.label ?? "(no label)"} ${DIM}(${r.id}, ${r.subnet}, region: ${r.region})${RESET}`,
        del: (r) => deleteReservedIp({ reservedIp: r.id ?? "" }),
      });

      // 4. VPCs (after NAT gateways, instances, load balancers, etc. are gone)
      yield* nukeResource(cfg.dryRun, nukeConfig, {
        type: "Vpc",
        list: () => listVpcs({}),
        itemsOf: (o) => o.vpcs ?? [],
        idOf: (v) => v.id,
        nameOf: (v) => v.description,
        describe: (v) =>
          `${v.description ?? "(no description)"} ${DIM}(${v.id}, region: ${v.region})${RESET}`,
        del: (v) => deleteVpc({ vpcId: v.id }),
      });

      yield* nukeResource(cfg.dryRun, nukeConfig, {
        type: "Vpc2",
        list: () => listVpc2({}),
        itemsOf: (o) => o.vpcs ?? [],
        idOf: (v) => v.id,
        nameOf: (v) => v.description,
        describe: (v) =>
          `${v.description ?? "(no description)"} ${DIM}(${v.id}, region: ${v.region})${RESET}`,
        del: (v) => deleteVpc2({ vpcId: v.id }),
      });

      // 5. Firewall groups (after instances)
      yield* nukeResource(cfg.dryRun, nukeConfig, {
        type: "FirewallGroup",
        list: () => listFirewallGroups({}),
        itemsOf: (o) => o.firewall_groups ?? [],
        idOf: (f) => f.id ?? "",
        nameOf: (f) => f.description,
        describe: (f) =>
          `${f.description ?? "(no description)"} ${DIM}(${f.id})${RESET}`,
        del: (f) => deleteFirewallGroup({ firewallGroupId: f.id ?? "" }),
      });

      // 6. DNS Domains
      yield* nukeResource(cfg.dryRun, nukeConfig, {
        type: "DnsDomain",
        list: () => listDnsDomains({}),
        itemsOf: (o) => o.domains ?? [],
        idOf: (d) => d.domain ?? "",
        nameOf: (d) => d.domain,
        describe: (d) =>
          `${d.domain} ${DIM}(created: ${d.date_created})${RESET}`,
        del: (d) => deleteDnsDomain({ dnsDomain: d.domain ?? "" }),
      });

      // 7. Misc account-level resources (safe last — provisioning helpers)
      yield* nukeResource(cfg.dryRun, nukeConfig, {
        type: "SshKey",
        list: () => listSshKeys({}),
        itemsOf: (o) => o.ssh_keys ?? [],
        idOf: (k) => k.id ?? "",
        nameOf: (k) => k.name,
        describe: (k) =>
          `${k.name ?? "(no name)"} ${DIM}(${k.id})${RESET}`,
        del: (k) => deleteSshKey({ sshKeyId: k.id ?? "" }),
      });

      yield* nukeResource(cfg.dryRun, nukeConfig, {
        type: "StartupScript",
        list: () => listStartupScripts({}),
        itemsOf: (o) => o.startup_scripts ?? [],
        idOf: (s) => s.id ?? "",
        nameOf: (s) => s.name,
        describe: (s) =>
          `${s.name ?? "(no name)"} ${DIM}(${s.id}, type: ${s.type})${RESET}`,
        del: (s) => deleteStartupScript({ startupId: s.id ?? "" }),
      });

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
).pipe(Command.withDescription("List and delete all Vultr resources"));

// ============================================================================
// Entry Point
// ============================================================================

BunRuntime.runMain(
  Effect.provide(Command.run(nuke, { version: "1.0.0" }), BunServices.layer),
);
