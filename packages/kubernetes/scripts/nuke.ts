#!/usr/bin/env bun
/**
 * Kubernetes Nuke Script
 *
 * Lists and deletes all resources in a Kubernetes cluster.
 * Supports --dry-run to preview without deleting.
 *
 * Usage:
 *   bun packages/kubernetes/scripts/nuke.ts --dry-run
 *   bun packages/kubernetes/scripts/nuke.ts
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
import { CredentialsFromEnv } from "@distilled.cloud/kubernetes";

// ── Core V1 ─────────────────────────────────────────────────────────────────
import {
  listCoreV1PodForAllNamespaces,
  deleteCoreV1NamespacedPod,
  listCoreV1ServiceForAllNamespaces,
  deleteCoreV1NamespacedService,
  listCoreV1ConfigMapForAllNamespaces,
  deleteCoreV1NamespacedConfigMap,
  listCoreV1SecretForAllNamespaces,
  deleteCoreV1NamespacedSecret,
  listCoreV1ServiceAccountForAllNamespaces,
  deleteCoreV1NamespacedServiceAccount,
  listCoreV1PersistentVolumeClaimForAllNamespaces,
  deleteCoreV1NamespacedPersistentVolumeClaim,
  listCoreV1ReplicationControllerForAllNamespaces,
  deleteCoreV1NamespacedReplicationController,
  listCoreV1EndpointsForAllNamespaces,
  deleteCoreV1NamespacedEndpoints,
  listCoreV1EventForAllNamespaces,
  deleteCoreV1NamespacedEvent,
  listCoreV1LimitRangeForAllNamespaces,
  deleteCoreV1NamespacedLimitRange,
  listCoreV1PodTemplateForAllNamespaces,
  deleteCoreV1NamespacedPodTemplate,
  listCoreV1ResourceQuotaForAllNamespaces,
  deleteCoreV1NamespacedResourceQuota,
  listCoreV1Namespace,
  deleteCoreV1Namespace,
  listCoreV1Node,
  deleteCoreV1Node,
  listCoreV1PersistentVolume,
  deleteCoreV1PersistentVolume,
} from "@distilled.cloud/kubernetes/core";

// ── Apps V1 ─────────────────────────────────────────────────────────────────
import {
  listAppsV1DeploymentForAllNamespaces,
  deleteAppsV1NamespacedDeployment,
  listAppsV1StatefulSetForAllNamespaces,
  deleteAppsV1NamespacedStatefulSet,
  listAppsV1DaemonSetForAllNamespaces,
  deleteAppsV1NamespacedDaemonSet,
  listAppsV1ReplicaSetForAllNamespaces,
  deleteAppsV1NamespacedReplicaSet,
  listAppsV1ControllerRevisionForAllNamespaces,
  deleteAppsV1NamespacedControllerRevision,
} from "@distilled.cloud/kubernetes/apps";

// ── Batch V1 ────────────────────────────────────────────────────────────────
import {
  listBatchV1JobForAllNamespaces,
  deleteBatchV1NamespacedJob,
  listBatchV1CronJobForAllNamespaces,
  deleteBatchV1NamespacedCronJob,
} from "@distilled.cloud/kubernetes/batch";

// ── Networking V1 ───────────────────────────────────────────────────────────
import {
  listNetworkingV1IngressForAllNamespaces,
  deleteNetworkingV1NamespacedIngress,
  listNetworkingV1NetworkPolicyForAllNamespaces,
  deleteNetworkingV1NamespacedNetworkPolicy,
  listNetworkingV1IngressClass,
  deleteNetworkingV1IngressClass,
  listNetworkingV1IPAddress,
  deleteNetworkingV1IPAddress,
  listNetworkingV1ServiceCIDR,
  deleteNetworkingV1ServiceCIDR,
} from "@distilled.cloud/kubernetes/networking";

// ── Storage V1 ──────────────────────────────────────────────────────────────
import {
  listStorageV1StorageClass,
  deleteStorageV1StorageClass,
  listStorageV1CSIDriver,
  deleteStorageV1CSIDriver,
  listStorageV1CSINode,
  deleteStorageV1CSINode,
  listStorageV1VolumeAttachment,
  deleteStorageV1VolumeAttachment,
  listStorageV1VolumeAttributesClass,
  deleteStorageV1VolumeAttributesClass,
  listStorageV1CSIStorageCapacityForAllNamespaces,
  deleteStorageV1NamespacedCSIStorageCapacity,
} from "@distilled.cloud/kubernetes/storage";

// ── RBAC V1 ─────────────────────────────────────────────────────────────────
import {
  listRbacAuthorizationV1ClusterRole,
  deleteRbacAuthorizationV1ClusterRole,
  listRbacAuthorizationV1ClusterRoleBinding,
  deleteRbacAuthorizationV1ClusterRoleBinding,
  listRbacAuthorizationV1RoleForAllNamespaces,
  deleteRbacAuthorizationV1NamespacedRole,
  listRbacAuthorizationV1RoleBindingForAllNamespaces,
  deleteRbacAuthorizationV1NamespacedRoleBinding,
} from "@distilled.cloud/kubernetes/rbac-authorization";

// ── Policy V1 ───────────────────────────────────────────────────────────────
import {
  listPolicyV1PodDisruptionBudgetForAllNamespaces,
  deletePolicyV1NamespacedPodDisruptionBudget,
} from "@distilled.cloud/kubernetes/policy";

// ── Autoscaling V2 ─────────────────────────────────────────────────────────
import {
  listAutoscalingV2HorizontalPodAutoscalerForAllNamespaces,
  deleteAutoscalingV2NamespacedHorizontalPodAutoscaler,
} from "@distilled.cloud/kubernetes/autoscaling";

// ── Certificates V1 ────────────────────────────────────────────────────────
import {
  listCertificatesV1CertificateSigningRequest,
  deleteCertificatesV1CertificateSigningRequest,
} from "@distilled.cloud/kubernetes/certificates";

// ── Coordination V1 ────────────────────────────────────────────────────────
import {
  listCoordinationV1LeaseForAllNamespaces,
  deleteCoordinationV1NamespacedLease,
} from "@distilled.cloud/kubernetes/coordination";

// ── Discovery V1 ───────────────────────────────────────────────────────────
import {
  listDiscoveryV1EndpointSliceForAllNamespaces,
  deleteDiscoveryV1NamespacedEndpointSlice,
} from "@distilled.cloud/kubernetes/discovery";

// ── Events V1 ──────────────────────────────────────────────────────────────
import {
  listEventsV1EventForAllNamespaces,
  deleteEventsV1NamespacedEvent,
} from "@distilled.cloud/kubernetes/events";

// ── Scheduling V1 ──────────────────────────────────────────────────────────
import {
  listSchedulingV1PriorityClass,
  deleteSchedulingV1PriorityClass,
} from "@distilled.cloud/kubernetes/scheduling";

// ── Node V1 ────────────────────────────────────────────────────────────────
import {
  listNodeV1RuntimeClass,
  deleteNodeV1RuntimeClass,
} from "@distilled.cloud/kubernetes/node";

// ── API Extensions V1 ──────────────────────────────────────────────────────
import {
  listApiextensionsV1CustomResourceDefinition,
  deleteApiextensionsV1CustomResourceDefinition,
} from "@distilled.cloud/kubernetes/apiextensions";

// ── API Registration V1 ────────────────────────────────────────────────────
import {
  listApiregistrationV1APIService,
  deleteApiregistrationV1APIService,
} from "@distilled.cloud/kubernetes/apiregistration";

// ── Flow Control V1 ────────────────────────────────────────────────────────
import {
  listFlowcontrolApiserverV1FlowSchema,
  deleteFlowcontrolApiserverV1FlowSchema,
  listFlowcontrolApiserverV1PriorityLevelConfiguration,
  deleteFlowcontrolApiserverV1PriorityLevelConfiguration,
} from "@distilled.cloud/kubernetes/flowcontrol-apiserver";

// ── Admission Registration V1 ──────────────────────────────────────────────
import {
  listAdmissionregistrationV1MutatingWebhookConfiguration,
  deleteAdmissionregistrationV1MutatingWebhookConfiguration,
  listAdmissionregistrationV1ValidatingWebhookConfiguration,
  deleteAdmissionregistrationV1ValidatingWebhookConfiguration,
  listAdmissionregistrationV1ValidatingAdmissionPolicy,
  deleteAdmissionregistrationV1ValidatingAdmissionPolicy,
  listAdmissionregistrationV1ValidatingAdmissionPolicyBinding,
  deleteAdmissionregistrationV1ValidatingAdmissionPolicyBinding,
  listAdmissionregistrationV1MutatingAdmissionPolicy,
  deleteAdmissionregistrationV1MutatingAdmissionPolicy,
  listAdmissionregistrationV1MutatingAdmissionPolicyBinding,
  deleteAdmissionregistrationV1MutatingAdmissionPolicyBinding,
} from "@distilled.cloud/kubernetes/admissionregistration";

// ── Resource V1 ────────────────────────────────────────────────────────────
import {
  listResourceV1DeviceClass,
  deleteResourceV1DeviceClass,
  listResourceV1ResourceSlice,
  deleteResourceV1ResourceSlice,
  listResourceV1ResourceClaimForAllNamespaces,
  deleteResourceV1NamespacedResourceClaim,
  listResourceV1ResourceClaimTemplateForAllNamespaces,
  deleteResourceV1NamespacedResourceClaimTemplate,
} from "@distilled.cloud/kubernetes/resource";

// ── Internal API Server V1alpha1 ───────────────────────────────────────────
import {
  listInternalApiserverV1alpha1StorageVersion,
  deleteInternalApiserverV1alpha1StorageVersion,
} from "@distilled.cloud/kubernetes/internal-apiserver";

// ── Storage Migration V1beta1 ──────────────────────────────────────────────
import {
  listStoragemigrationV1beta1StorageVersionMigration,
  deleteStoragemigrationV1beta1StorageVersionMigration,
} from "@distilled.cloud/kubernetes/storagemigration";

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
    if (name && rule.namePatterns?.some((p) => matchGlob(p, name)))
      return true;
    return false;
  });
}

// ============================================================================
// System namespace filter
// ============================================================================

const SYSTEM_NAMESPACES = new Set([
  "kube-system",
  "kube-public",
  "kube-node-lease",
]);

function isSystemNamespace(ns: string): boolean {
  return SYSTEM_NAMESPACES.has(ns);
}

// ============================================================================
// Helpers
// ============================================================================

/** Extract metadata from a Kubernetes resource item */
function getMeta(item: any): {
  name: string;
  namespace: string | undefined;
  uid: string;
} {
  const m = item?.metadata ?? {};
  return {
    name: m.name ?? "<unknown>",
    namespace: m.namespace,
    uid: m.uid ?? "<no-uid>",
  };
}

/**
 * Generic handler for namespaced resources listed via ForAllNamespaces.
 * Lists all items, filters system namespaces, checks exclusions, and deletes.
 */
function nukeNamespacedResource(
  typeName: string,
  listFn: (input: any) => Effect.Effect<any, any, any>,
  deleteFn: (input: any) => Effect.Effect<any, any, any>,
  dryRun: boolean,
  nukeConfig: NukeConfig,
) {
  return Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}${typeName}${RESET}`);

    const result = yield* listFn({}).pipe(
      Effect.catch(() =>
        Console.log(
          `  ${RED}Failed to list ${typeName}${RESET}`,
        ).pipe(Effect.map(() => ({ items: [] as any[] }))),
      ),
    );

    const items = result?.items ?? [];
    if (items.length === 0) {
      yield* Console.log(`  ${DIM}No ${typeName} found${RESET}`);
      return;
    }

    for (const item of items) {
      const meta = getMeta(item);

      // Skip system namespaces
      if (meta.namespace && isSystemNamespace(meta.namespace)) {
        continue;
      }

      totalFound++;
      const excluded = isExcluded(nukeConfig, typeName, meta.uid, meta.name);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `  ${YELLOW}[SKIP]${RESET} ${typeName}: ${meta.name} ${DIM}(ns: ${meta.namespace}, uid: ${meta.uid})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `  ${RED}[DELETE]${RESET} ${typeName}: ${meta.name} ${DIM}(ns: ${meta.namespace}, uid: ${meta.uid})${RESET}`,
        );
      } else {
        yield* Console.log(
          `  ${RED}[DELETE]${RESET} ${typeName}: ${meta.name} ${DIM}(ns: ${meta.namespace})${RESET}`,
        );
        yield* deleteFn({
          namespace: meta.namespace,
          name: meta.name,
        }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `    ${RED}Failed to delete ${typeName} ${meta.namespace}/${meta.name}${RESET}`,
            );
          }),
        );
      }
    }
  });
}

/**
 * Generic handler for cluster-scoped resources.
 * Lists all items, checks exclusions, and deletes.
 */
function nukeClusterResource(
  typeName: string,
  listFn: (input: any) => Effect.Effect<any, any, any>,
  deleteFn: (input: any) => Effect.Effect<any, any, any>,
  dryRun: boolean,
  nukeConfig: NukeConfig,
) {
  return Effect.gen(function* () {
    yield* Console.log(`\n${BOLD}${CYAN}${typeName}${RESET}`);

    const result = yield* listFn({}).pipe(
      Effect.catch(() =>
        Console.log(
          `  ${RED}Failed to list ${typeName}${RESET}`,
        ).pipe(Effect.map(() => ({ items: [] as any[] }))),
      ),
    );

    const items = result?.items ?? [];
    if (items.length === 0) {
      yield* Console.log(`  ${DIM}No ${typeName} found${RESET}`);
      return;
    }

    for (const item of items) {
      const meta = getMeta(item);

      totalFound++;
      const excluded = isExcluded(nukeConfig, typeName, meta.uid, meta.name);
      if (excluded) {
        totalSkipped++;
        yield* Console.log(
          `  ${YELLOW}[SKIP]${RESET} ${typeName}: ${meta.name} ${DIM}(uid: ${meta.uid})${RESET} — ${excluded.reason ?? "excluded"}`,
        );
        continue;
      }

      if (dryRun) {
        yield* Console.log(
          `  ${RED}[DELETE]${RESET} ${typeName}: ${meta.name} ${DIM}(uid: ${meta.uid})${RESET}`,
        );
      } else {
        yield* Console.log(
          `  ${RED}[DELETE]${RESET} ${typeName}: ${meta.name}${RESET}`,
        );
        yield* deleteFn({ name: meta.name }).pipe(
          Effect.andThen(() => {
            totalDeleted++;
          }),
          Effect.catch(() => {
            totalFailed++;
            return Console.log(
              `    ${RED}Failed to delete ${typeName} ${meta.name}${RESET}`,
            );
          }),
        );
      }
    }
  });
}

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
        `\n${BOLD}Kubernetes Nuke${RESET} ${DIM}(${mode}${DIM})${RESET}`,
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

      yield* Console.log(
        `${DIM}Skipping system namespaces: ${[...SYSTEM_NAMESPACES].join(", ")}${RESET}`,
      );

      // ====================================================================
      // Phase 1: Namespaced workload resources (children first)
      // ====================================================================

      // Jobs & CronJobs (batch workloads)
      yield* nukeNamespacedResource("Job", listBatchV1JobForAllNamespaces, deleteBatchV1NamespacedJob, config.dryRun, nukeConfig);
      yield* nukeNamespacedResource("CronJob", listBatchV1CronJobForAllNamespaces, deleteBatchV1NamespacedCronJob, config.dryRun, nukeConfig);

      // Pods (before controllers that manage them)
      yield* nukeNamespacedResource("Pod", listCoreV1PodForAllNamespaces, deleteCoreV1NamespacedPod, config.dryRun, nukeConfig);

      // Workload controllers
      yield* nukeNamespacedResource("Deployment", listAppsV1DeploymentForAllNamespaces, deleteAppsV1NamespacedDeployment, config.dryRun, nukeConfig);
      yield* nukeNamespacedResource("StatefulSet", listAppsV1StatefulSetForAllNamespaces, deleteAppsV1NamespacedStatefulSet, config.dryRun, nukeConfig);
      yield* nukeNamespacedResource("DaemonSet", listAppsV1DaemonSetForAllNamespaces, deleteAppsV1NamespacedDaemonSet, config.dryRun, nukeConfig);
      yield* nukeNamespacedResource("ReplicaSet", listAppsV1ReplicaSetForAllNamespaces, deleteAppsV1NamespacedReplicaSet, config.dryRun, nukeConfig);
      yield* nukeNamespacedResource("ReplicationController", listCoreV1ReplicationControllerForAllNamespaces, deleteCoreV1NamespacedReplicationController, config.dryRun, nukeConfig);
      yield* nukeNamespacedResource("ControllerRevision", listAppsV1ControllerRevisionForAllNamespaces, deleteAppsV1NamespacedControllerRevision, config.dryRun, nukeConfig);

      // ====================================================================
      // Phase 2: Namespaced networking resources
      // ====================================================================

      yield* nukeNamespacedResource("Ingress", listNetworkingV1IngressForAllNamespaces, deleteNetworkingV1NamespacedIngress, config.dryRun, nukeConfig);
      yield* nukeNamespacedResource("NetworkPolicy", listNetworkingV1NetworkPolicyForAllNamespaces, deleteNetworkingV1NamespacedNetworkPolicy, config.dryRun, nukeConfig);
      yield* nukeNamespacedResource("Service", listCoreV1ServiceForAllNamespaces, deleteCoreV1NamespacedService, config.dryRun, nukeConfig);
      yield* nukeNamespacedResource("Endpoints", listCoreV1EndpointsForAllNamespaces, deleteCoreV1NamespacedEndpoints, config.dryRun, nukeConfig);
      yield* nukeNamespacedResource("EndpointSlice", listDiscoveryV1EndpointSliceForAllNamespaces, deleteDiscoveryV1NamespacedEndpointSlice, config.dryRun, nukeConfig);

      // ====================================================================
      // Phase 3: Namespaced config & storage resources
      // ====================================================================

      yield* nukeNamespacedResource("ConfigMap", listCoreV1ConfigMapForAllNamespaces, deleteCoreV1NamespacedConfigMap, config.dryRun, nukeConfig);
      yield* nukeNamespacedResource("Secret", listCoreV1SecretForAllNamespaces, deleteCoreV1NamespacedSecret, config.dryRun, nukeConfig);
      yield* nukeNamespacedResource("PersistentVolumeClaim", listCoreV1PersistentVolumeClaimForAllNamespaces, deleteCoreV1NamespacedPersistentVolumeClaim, config.dryRun, nukeConfig);
      yield* nukeNamespacedResource("CSIStorageCapacity", listStorageV1CSIStorageCapacityForAllNamespaces, deleteStorageV1NamespacedCSIStorageCapacity, config.dryRun, nukeConfig);
      yield* nukeNamespacedResource("ResourceClaim", listResourceV1ResourceClaimForAllNamespaces, deleteResourceV1NamespacedResourceClaim, config.dryRun, nukeConfig);
      yield* nukeNamespacedResource("ResourceClaimTemplate", listResourceV1ResourceClaimTemplateForAllNamespaces, deleteResourceV1NamespacedResourceClaimTemplate, config.dryRun, nukeConfig);

      // ====================================================================
      // Phase 4: Namespaced autoscaling, policy, and misc resources
      // ====================================================================

      yield* nukeNamespacedResource("HorizontalPodAutoscaler", listAutoscalingV2HorizontalPodAutoscalerForAllNamespaces, deleteAutoscalingV2NamespacedHorizontalPodAutoscaler, config.dryRun, nukeConfig);
      yield* nukeNamespacedResource("PodDisruptionBudget", listPolicyV1PodDisruptionBudgetForAllNamespaces, deletePolicyV1NamespacedPodDisruptionBudget, config.dryRun, nukeConfig);
      yield* nukeNamespacedResource("LimitRange", listCoreV1LimitRangeForAllNamespaces, deleteCoreV1NamespacedLimitRange, config.dryRun, nukeConfig);
      yield* nukeNamespacedResource("ResourceQuota", listCoreV1ResourceQuotaForAllNamespaces, deleteCoreV1NamespacedResourceQuota, config.dryRun, nukeConfig);
      yield* nukeNamespacedResource("PodTemplate", listCoreV1PodTemplateForAllNamespaces, deleteCoreV1NamespacedPodTemplate, config.dryRun, nukeConfig);
      yield* nukeNamespacedResource("ServiceAccount", listCoreV1ServiceAccountForAllNamespaces, deleteCoreV1NamespacedServiceAccount, config.dryRun, nukeConfig);

      // ====================================================================
      // Phase 5: Namespaced RBAC
      // ====================================================================

      yield* nukeNamespacedResource("RoleBinding", listRbacAuthorizationV1RoleBindingForAllNamespaces, deleteRbacAuthorizationV1NamespacedRoleBinding, config.dryRun, nukeConfig);
      yield* nukeNamespacedResource("Role", listRbacAuthorizationV1RoleForAllNamespaces, deleteRbacAuthorizationV1NamespacedRole, config.dryRun, nukeConfig);

      // ====================================================================
      // Phase 6: Namespaced coordination & events
      // ====================================================================

      yield* nukeNamespacedResource("Lease", listCoordinationV1LeaseForAllNamespaces, deleteCoordinationV1NamespacedLease, config.dryRun, nukeConfig);
      yield* nukeNamespacedResource("Event (core)", listCoreV1EventForAllNamespaces, deleteCoreV1NamespacedEvent, config.dryRun, nukeConfig);
      yield* nukeNamespacedResource("Event (events.k8s.io)", listEventsV1EventForAllNamespaces, deleteEventsV1NamespacedEvent, config.dryRun, nukeConfig);

      // ====================================================================
      // Phase 7: Cluster-scoped resources (parents last)
      // ====================================================================

      // RBAC cluster-scoped
      yield* nukeClusterResource("ClusterRoleBinding", listRbacAuthorizationV1ClusterRoleBinding, deleteRbacAuthorizationV1ClusterRoleBinding, config.dryRun, nukeConfig);
      yield* nukeClusterResource("ClusterRole", listRbacAuthorizationV1ClusterRole, deleteRbacAuthorizationV1ClusterRole, config.dryRun, nukeConfig);

      // Admission controllers
      yield* nukeClusterResource("MutatingWebhookConfiguration", listAdmissionregistrationV1MutatingWebhookConfiguration, deleteAdmissionregistrationV1MutatingWebhookConfiguration, config.dryRun, nukeConfig);
      yield* nukeClusterResource("ValidatingWebhookConfiguration", listAdmissionregistrationV1ValidatingWebhookConfiguration, deleteAdmissionregistrationV1ValidatingWebhookConfiguration, config.dryRun, nukeConfig);
      yield* nukeClusterResource("ValidatingAdmissionPolicy", listAdmissionregistrationV1ValidatingAdmissionPolicy, deleteAdmissionregistrationV1ValidatingAdmissionPolicy, config.dryRun, nukeConfig);
      yield* nukeClusterResource("ValidatingAdmissionPolicyBinding", listAdmissionregistrationV1ValidatingAdmissionPolicyBinding, deleteAdmissionregistrationV1ValidatingAdmissionPolicyBinding, config.dryRun, nukeConfig);
      yield* nukeClusterResource("MutatingAdmissionPolicy", listAdmissionregistrationV1MutatingAdmissionPolicy, deleteAdmissionregistrationV1MutatingAdmissionPolicy, config.dryRun, nukeConfig);
      yield* nukeClusterResource("MutatingAdmissionPolicyBinding", listAdmissionregistrationV1MutatingAdmissionPolicyBinding, deleteAdmissionregistrationV1MutatingAdmissionPolicyBinding, config.dryRun, nukeConfig);

      // Networking cluster-scoped
      yield* nukeClusterResource("IngressClass", listNetworkingV1IngressClass, deleteNetworkingV1IngressClass, config.dryRun, nukeConfig);
      yield* nukeClusterResource("IPAddress", listNetworkingV1IPAddress, deleteNetworkingV1IPAddress, config.dryRun, nukeConfig);
      yield* nukeClusterResource("ServiceCIDR", listNetworkingV1ServiceCIDR, deleteNetworkingV1ServiceCIDR, config.dryRun, nukeConfig);

      // Storage cluster-scoped
      yield* nukeClusterResource("StorageClass", listStorageV1StorageClass, deleteStorageV1StorageClass, config.dryRun, nukeConfig);
      yield* nukeClusterResource("CSIDriver", listStorageV1CSIDriver, deleteStorageV1CSIDriver, config.dryRun, nukeConfig);
      yield* nukeClusterResource("CSINode", listStorageV1CSINode, deleteStorageV1CSINode, config.dryRun, nukeConfig);
      yield* nukeClusterResource("VolumeAttachment", listStorageV1VolumeAttachment, deleteStorageV1VolumeAttachment, config.dryRun, nukeConfig);
      yield* nukeClusterResource("VolumeAttributesClass", listStorageV1VolumeAttributesClass, deleteStorageV1VolumeAttributesClass, config.dryRun, nukeConfig);

      // Certificates
      yield* nukeClusterResource("CertificateSigningRequest", listCertificatesV1CertificateSigningRequest, deleteCertificatesV1CertificateSigningRequest, config.dryRun, nukeConfig);

      // Scheduling
      yield* nukeClusterResource("PriorityClass", listSchedulingV1PriorityClass, deleteSchedulingV1PriorityClass, config.dryRun, nukeConfig);

      // Node
      yield* nukeClusterResource("RuntimeClass", listNodeV1RuntimeClass, deleteNodeV1RuntimeClass, config.dryRun, nukeConfig);

      // Resource API
      yield* nukeClusterResource("DeviceClass", listResourceV1DeviceClass, deleteResourceV1DeviceClass, config.dryRun, nukeConfig);
      yield* nukeClusterResource("ResourceSlice", listResourceV1ResourceSlice, deleteResourceV1ResourceSlice, config.dryRun, nukeConfig);

      // Flow Control
      yield* nukeClusterResource("FlowSchema", listFlowcontrolApiserverV1FlowSchema, deleteFlowcontrolApiserverV1FlowSchema, config.dryRun, nukeConfig);
      yield* nukeClusterResource("PriorityLevelConfiguration", listFlowcontrolApiserverV1PriorityLevelConfiguration, deleteFlowcontrolApiserverV1PriorityLevelConfiguration, config.dryRun, nukeConfig);

      // API Extensions
      yield* nukeClusterResource("CustomResourceDefinition", listApiextensionsV1CustomResourceDefinition, deleteApiextensionsV1CustomResourceDefinition, config.dryRun, nukeConfig);

      // API Registration
      yield* nukeClusterResource("APIService", listApiregistrationV1APIService, deleteApiregistrationV1APIService, config.dryRun, nukeConfig);

      // Internal API Server (alpha)
      yield* nukeClusterResource("StorageVersion", listInternalApiserverV1alpha1StorageVersion, deleteInternalApiserverV1alpha1StorageVersion, config.dryRun, nukeConfig);

      // Storage Migration (beta)
      yield* nukeClusterResource("StorageVersionMigration", listStoragemigrationV1beta1StorageVersionMigration, deleteStoragemigrationV1beta1StorageVersionMigration, config.dryRun, nukeConfig);

      // PersistentVolumes (cluster-scoped, after PVCs)
      yield* nukeClusterResource("PersistentVolume", listCoreV1PersistentVolume, deleteCoreV1PersistentVolume, config.dryRun, nukeConfig);

      // Nodes
      yield* nukeClusterResource("Node", listCoreV1Node, deleteCoreV1Node, config.dryRun, nukeConfig);

      // ====================================================================
      // Phase 8: Namespaces (last — everything else must be deleted first)
      // ====================================================================

      yield* Effect.gen(function* () {
        yield* Console.log(`\n${BOLD}${CYAN}Namespace${RESET}`);

        const result = yield* listCoreV1Namespace({}).pipe(
          Effect.catch(() =>
            Console.log(
              `  ${RED}Failed to list Namespaces${RESET}`,
            ).pipe(Effect.map(() => ({ items: [] as any[] }))),
          ),
        );

        const items = result?.items ?? [];
        if (items.length === 0) {
          yield* Console.log(`  ${DIM}No Namespaces found${RESET}`);
          return;
        }

        for (const item of items) {
          const meta = getMeta(item);

          // Always skip system namespaces and default
          if (isSystemNamespace(meta.name) || meta.name === "default") {
            continue;
          }

          totalFound++;
          const excluded = isExcluded(
            nukeConfig,
            "Namespace",
            meta.uid,
            meta.name,
          );
          if (excluded) {
            totalSkipped++;
            yield* Console.log(
              `  ${YELLOW}[SKIP]${RESET} Namespace: ${meta.name} ${DIM}(uid: ${meta.uid})${RESET} — ${excluded.reason ?? "excluded"}`,
            );
            continue;
          }

          if (config.dryRun) {
            yield* Console.log(
              `  ${RED}[DELETE]${RESET} Namespace: ${meta.name} ${DIM}(uid: ${meta.uid})${RESET}`,
            );
          } else {
            yield* Console.log(
              `  ${RED}[DELETE]${RESET} Namespace: ${meta.name}${RESET}`,
            );
            yield* deleteCoreV1Namespace({ name: meta.name }).pipe(
              Effect.andThen(() => {
                totalDeleted++;
              }),
              Effect.catch(() => {
                totalFailed++;
                return Console.log(
                  `    ${RED}Failed to delete Namespace ${meta.name}${RESET}`,
                );
              }),
            );
          }
        }
      });

      // ====================================================================
      // Summary
      // ====================================================================

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
).pipe(Command.withDescription("List and delete all Kubernetes resources"));

// ============================================================================
// Entry Point
// ============================================================================

BunRuntime.runMain(
  Effect.provide(Command.run(nuke, { version: "1.0.0" }), BunServices.layer),
);
