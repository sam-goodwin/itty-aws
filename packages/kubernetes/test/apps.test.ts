import { describe, it, expect } from "vitest";
import { Effect } from "effect";
import { runEffect } from "./test";
import {
  getAppsAPIGroup,
  getAppsV1APIResources,
  listAppsV1DeploymentForAllNamespaces,
  listAppsV1DaemonSetForAllNamespaces,
  listAppsV1ReplicaSetForAllNamespaces,
  listAppsV1StatefulSetForAllNamespaces,
  listAppsV1ControllerRevisionForAllNamespaces,
  readAppsV1NamespacedDeployment,
  readAppsV1NamespacedDaemonSet,
  readAppsV1NamespacedStatefulSet,
} from "../src/services/apps";
import { NotFound } from "../src/errors";

describe("Apps API", () => {
  describe("API Discovery", () => {
    it("getAppsAPIGroup - returns apps API group info", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getAppsAPIGroup({});
          expect(result).toBeDefined();
        }),
      );
    }, 30_000);

    it("getAppsV1APIResources - lists apps v1 API resources", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getAppsV1APIResources({});
          expect(result).toBeDefined();
        }),
      );
    }, 30_000);
  });

  describe("Deployments", () => {
    describe("listAppsV1DeploymentForAllNamespaces", () => {
      it("happy path - lists deployments across all namespaces", async () => {
        await runEffect(
          Effect.gen(function* () {
            const result = yield* listAppsV1DeploymentForAllNamespaces({});
            expect(result.items).toBeDefined();
            expect(Array.isArray(result.items)).toBe(true);
          }),
        );
      }, 30_000);
    });

    describe("readAppsV1NamespacedDeployment", () => {
      it("error - NotFound for non-existent deployment", () =>
        runEffect(
          readAppsV1NamespacedDeployment({}).pipe(
            Effect.flip,
            Effect.map((e) => {
              expect(e).toBeInstanceOf(NotFound);
              expect(e._tag).toBe("NotFound");
            }),
          ),
        ), 30_000);
    });
  });

  describe("DaemonSets", () => {
    describe("listAppsV1DaemonSetForAllNamespaces", () => {
      it("happy path - lists daemonsets across all namespaces", async () => {
        await runEffect(
          Effect.gen(function* () {
            const result = yield* listAppsV1DaemonSetForAllNamespaces({});
            expect(result.items).toBeDefined();
            expect(Array.isArray(result.items)).toBe(true);
          }),
        );
      }, 30_000);
    });

    describe("readAppsV1NamespacedDaemonSet", () => {
      it("error - NotFound for non-existent daemonset", () =>
        runEffect(
          readAppsV1NamespacedDaemonSet({}).pipe(
            Effect.flip,
            Effect.map((e) => {
              expect(e).toBeInstanceOf(NotFound);
              expect(e._tag).toBe("NotFound");
            }),
          ),
        ), 30_000);
    });
  });

  describe("ReplicaSets", () => {
    describe("listAppsV1ReplicaSetForAllNamespaces", () => {
      it("happy path - lists replicasets across all namespaces", async () => {
        await runEffect(
          Effect.gen(function* () {
            const result = yield* listAppsV1ReplicaSetForAllNamespaces({});
            expect(result.items).toBeDefined();
            expect(Array.isArray(result.items)).toBe(true);
          }),
        );
      }, 30_000);
    });
  });

  describe("StatefulSets", () => {
    describe("listAppsV1StatefulSetForAllNamespaces", () => {
      it("happy path - lists statefulsets across all namespaces", async () => {
        await runEffect(
          Effect.gen(function* () {
            const result = yield* listAppsV1StatefulSetForAllNamespaces({});
            expect(result.items).toBeDefined();
            expect(Array.isArray(result.items)).toBe(true);
          }),
        );
      }, 30_000);
    });

    describe("readAppsV1NamespacedStatefulSet", () => {
      it("error - NotFound for non-existent statefulset", () =>
        runEffect(
          readAppsV1NamespacedStatefulSet({}).pipe(
            Effect.flip,
            Effect.map((e) => {
              expect(e).toBeInstanceOf(NotFound);
              expect(e._tag).toBe("NotFound");
            }),
          ),
        ), 30_000);
    });
  });

  describe("ControllerRevisions", () => {
    describe("listAppsV1ControllerRevisionForAllNamespaces", () => {
      it("happy path - lists controller revisions across all namespaces", async () => {
        await runEffect(
          Effect.gen(function* () {
            const result = yield* listAppsV1ControllerRevisionForAllNamespaces({});
            expect(result.items).toBeDefined();
            expect(Array.isArray(result.items)).toBe(true);
          }),
        );
      }, 30_000);
    });
  });
});
