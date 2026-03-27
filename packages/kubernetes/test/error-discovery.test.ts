import { describe, it, expect } from "vitest";
import { Effect } from "effect";
import { runEffect } from "./test";
import { NotFound } from "../src/errors";

// Core API - read operations with path params trigger NotFound
import {
  readCoreV1Namespace,
  readCoreV1Node,
  readCoreV1NamespacedPod,
  readCoreV1NamespacedConfigMap,
  readCoreV1NamespacedSecret,
  readCoreV1NamespacedService,
  readCoreV1NamespacedServiceAccount,
  readCoreV1PersistentVolume,
  readCoreV1NamespacedPersistentVolumeClaim,
  readCoreV1NamespacedEndpoints,
  readCoreV1NamespacedEvent,
  readCoreV1NamespacedLimitRange,
  readCoreV1NamespacedResourceQuota,
  readCoreV1NamespacedReplicationController,
  deleteCoreV1Namespace,
  deleteCoreV1Node,
  deleteCoreV1NamespacedPod,
  deleteCoreV1NamespacedConfigMap,
  deleteCoreV1NamespacedSecret,
  deleteCoreV1NamespacedService,
  deleteCoreV1PersistentVolume,
} from "../src/services/core";

// Apps API
import {
  readAppsV1NamespacedDeployment,
  readAppsV1NamespacedDaemonSet,
  readAppsV1NamespacedStatefulSet,
  readAppsV1NamespacedReplicaSet,
  deleteAppsV1NamespacedDeployment,
} from "../src/services/apps";

// Batch API
import {
  readBatchV1NamespacedJob,
  readBatchV1NamespacedCronJob,
  deleteBatchV1NamespacedJob,
  deleteBatchV1NamespacedCronJob,
} from "../src/services/batch";

// Networking API
import {
  readNetworkingV1NamespacedIngress,
  readNetworkingV1IngressClass,
  readNetworkingV1NamespacedNetworkPolicy,
} from "../src/services/networking";

// RBAC API
import {
  readRbacAuthorizationV1ClusterRole,
  readRbacAuthorizationV1ClusterRoleBinding,
  readRbacAuthorizationV1NamespacedRole,
  readRbacAuthorizationV1NamespacedRoleBinding,
} from "../src/services/rbac-authorization";

// Storage API
import {
  readStorageV1StorageClass,
  readStorageV1CSIDriver,
  readStorageV1CSINode,
  readStorageV1VolumeAttachment,
} from "../src/services/storage";

// Autoscaling API
import {
  readAutoscalingV1NamespacedHorizontalPodAutoscaler,
  readAutoscalingV2NamespacedHorizontalPodAutoscaler,
} from "../src/services/autoscaling";

// Coordination API
import { readCoordinationV1NamespacedLease } from "../src/services/coordination";

// Discovery API
import { readDiscoveryV1NamespacedEndpointSlice } from "../src/services/discovery";

// Events API
import { readEventsV1NamespacedEvent } from "../src/services/events";

// Policy API
import { readPolicyV1NamespacedPodDisruptionBudget } from "../src/services/policy";

// Node API
import { readNodeV1RuntimeClass } from "../src/services/node";

// Scheduling API
import { readSchedulingV1PriorityClass } from "../src/services/scheduling";

// API Extensions
import { readApiextensionsV1CustomResourceDefinition } from "../src/services/apiextensions";

// API Registration
import { readApiregistrationV1APIService } from "../src/services/apiregistration";

describe("Kubernetes Error Discovery", () => {
  describe("Core API - NotFound errors", () => {
    it("readCoreV1Namespace returns NotFound", () =>
      runEffect(
        readCoreV1Namespace({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);

    it("readCoreV1Node returns NotFound", () =>
      runEffect(
        readCoreV1Node({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);

    it("readCoreV1NamespacedPod returns NotFound", () =>
      runEffect(
        readCoreV1NamespacedPod({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);

    it("readCoreV1NamespacedConfigMap returns NotFound", () =>
      runEffect(
        readCoreV1NamespacedConfigMap({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);

    it("readCoreV1NamespacedSecret returns NotFound", () =>
      runEffect(
        readCoreV1NamespacedSecret({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);

    it("readCoreV1NamespacedService returns NotFound", () =>
      runEffect(
        readCoreV1NamespacedService({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);

    it("readCoreV1NamespacedServiceAccount returns NotFound", () =>
      runEffect(
        readCoreV1NamespacedServiceAccount({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);

    it("readCoreV1PersistentVolume returns NotFound", () =>
      runEffect(
        readCoreV1PersistentVolume({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);

    it("readCoreV1NamespacedPersistentVolumeClaim returns NotFound", () =>
      runEffect(
        readCoreV1NamespacedPersistentVolumeClaim({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);

    it("readCoreV1NamespacedEndpoints returns NotFound", () =>
      runEffect(
        readCoreV1NamespacedEndpoints({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);

    it("readCoreV1NamespacedEvent returns NotFound", () =>
      runEffect(
        readCoreV1NamespacedEvent({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);

    it("readCoreV1NamespacedLimitRange returns NotFound", () =>
      runEffect(
        readCoreV1NamespacedLimitRange({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);

    it("readCoreV1NamespacedResourceQuota returns NotFound", () =>
      runEffect(
        readCoreV1NamespacedResourceQuota({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);

    it("readCoreV1NamespacedReplicationController returns NotFound", () =>
      runEffect(
        readCoreV1NamespacedReplicationController({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);
  });

  describe("Core API - Delete NotFound errors", () => {
    it("deleteCoreV1Namespace returns NotFound", () =>
      runEffect(
        deleteCoreV1Namespace({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);

    it("deleteCoreV1Node returns NotFound", () =>
      runEffect(
        deleteCoreV1Node({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);

    it("deleteCoreV1NamespacedPod returns NotFound", () =>
      runEffect(
        deleteCoreV1NamespacedPod({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);

    it("deleteCoreV1NamespacedConfigMap returns NotFound", () =>
      runEffect(
        deleteCoreV1NamespacedConfigMap({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);

    it("deleteCoreV1NamespacedSecret returns NotFound", () =>
      runEffect(
        deleteCoreV1NamespacedSecret({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);

    it("deleteCoreV1NamespacedService returns NotFound", () =>
      runEffect(
        deleteCoreV1NamespacedService({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);

    it("deleteCoreV1PersistentVolume returns NotFound", () =>
      runEffect(
        deleteCoreV1PersistentVolume({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);
  });

  describe("Apps API - NotFound errors", () => {
    it("readAppsV1NamespacedDeployment returns NotFound", () =>
      runEffect(
        readAppsV1NamespacedDeployment({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);

    it("readAppsV1NamespacedDaemonSet returns NotFound", () =>
      runEffect(
        readAppsV1NamespacedDaemonSet({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);

    it("readAppsV1NamespacedStatefulSet returns NotFound", () =>
      runEffect(
        readAppsV1NamespacedStatefulSet({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);

    it("readAppsV1NamespacedReplicaSet returns NotFound", () =>
      runEffect(
        readAppsV1NamespacedReplicaSet({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);

    it("deleteAppsV1NamespacedDeployment returns NotFound", () =>
      runEffect(
        deleteAppsV1NamespacedDeployment({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);
  });

  describe("Batch API - NotFound errors", () => {
    it("readBatchV1NamespacedJob returns NotFound", () =>
      runEffect(
        readBatchV1NamespacedJob({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);

    it("readBatchV1NamespacedCronJob returns NotFound", () =>
      runEffect(
        readBatchV1NamespacedCronJob({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);

    it("deleteBatchV1NamespacedJob returns NotFound", () =>
      runEffect(
        deleteBatchV1NamespacedJob({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);

    it("deleteBatchV1NamespacedCronJob returns NotFound", () =>
      runEffect(
        deleteBatchV1NamespacedCronJob({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);
  });

  describe("Networking API - NotFound errors", () => {
    it("readNetworkingV1NamespacedIngress returns NotFound", () =>
      runEffect(
        readNetworkingV1NamespacedIngress({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);

    it("readNetworkingV1IngressClass returns NotFound", () =>
      runEffect(
        readNetworkingV1IngressClass({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);

    it("readNetworkingV1NamespacedNetworkPolicy returns NotFound", () =>
      runEffect(
        readNetworkingV1NamespacedNetworkPolicy({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);
  });

  describe("RBAC API - NotFound errors", () => {
    it("readRbacAuthorizationV1ClusterRole returns NotFound", () =>
      runEffect(
        readRbacAuthorizationV1ClusterRole({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);

    it("readRbacAuthorizationV1ClusterRoleBinding returns NotFound", () =>
      runEffect(
        readRbacAuthorizationV1ClusterRoleBinding({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);

    it("readRbacAuthorizationV1NamespacedRole returns NotFound", () =>
      runEffect(
        readRbacAuthorizationV1NamespacedRole({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);

    it("readRbacAuthorizationV1NamespacedRoleBinding returns NotFound", () =>
      runEffect(
        readRbacAuthorizationV1NamespacedRoleBinding({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);
  });

  describe("Storage API - NotFound errors", () => {
    it("readStorageV1StorageClass returns NotFound", () =>
      runEffect(
        readStorageV1StorageClass({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);

    it("readStorageV1CSIDriver returns NotFound", () =>
      runEffect(
        readStorageV1CSIDriver({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);

    it("readStorageV1CSINode returns NotFound", () =>
      runEffect(
        readStorageV1CSINode({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);

    it("readStorageV1VolumeAttachment returns NotFound", () =>
      runEffect(
        readStorageV1VolumeAttachment({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);
  });

  describe("Autoscaling API - NotFound errors", () => {
    it("readAutoscalingV1NamespacedHorizontalPodAutoscaler returns NotFound", () =>
      runEffect(
        readAutoscalingV1NamespacedHorizontalPodAutoscaler({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);

    it("readAutoscalingV2NamespacedHorizontalPodAutoscaler returns NotFound", () =>
      runEffect(
        readAutoscalingV2NamespacedHorizontalPodAutoscaler({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);
  });

  describe("Coordination API - NotFound errors", () => {
    it("readCoordinationV1NamespacedLease returns NotFound", () =>
      runEffect(
        readCoordinationV1NamespacedLease({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);
  });

  describe("Discovery API - NotFound errors", () => {
    it("readDiscoveryV1NamespacedEndpointSlice returns NotFound", () =>
      runEffect(
        readDiscoveryV1NamespacedEndpointSlice({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);
  });

  describe("Events API - NotFound errors", () => {
    it("readEventsV1NamespacedEvent returns NotFound", () =>
      runEffect(
        readEventsV1NamespacedEvent({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);
  });

  describe("Policy API - NotFound errors", () => {
    it("readPolicyV1NamespacedPodDisruptionBudget returns NotFound", () =>
      runEffect(
        readPolicyV1NamespacedPodDisruptionBudget({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);
  });

  describe("Node API - NotFound errors", () => {
    it("readNodeV1RuntimeClass returns NotFound", () =>
      runEffect(
        readNodeV1RuntimeClass({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);
  });

  describe("Scheduling API - NotFound errors", () => {
    it("readSchedulingV1PriorityClass returns NotFound", () =>
      runEffect(
        readSchedulingV1PriorityClass({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);
  });

  describe("API Extensions - NotFound errors", () => {
    it("readApiextensionsV1CustomResourceDefinition returns NotFound", () =>
      runEffect(
        readApiextensionsV1CustomResourceDefinition({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);
  });

  describe("API Registration - NotFound errors", () => {
    it("readApiregistrationV1APIService returns NotFound", () =>
      runEffect(
        readApiregistrationV1APIService({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);
  });
});
