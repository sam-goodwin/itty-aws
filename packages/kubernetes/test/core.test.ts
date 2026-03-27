import { describe, it, expect, afterAll } from "vitest";
import { Effect } from "effect";
import { runEffect, resourceName } from "./test";
import {
  getAPIVersions,
  getCodeVersion,
  getCoreAPIVersions,
  getCoreV1APIResources,
  listCoreV1Namespace,
  listCoreV1Node,
  listCoreV1PodForAllNamespaces,
  listCoreV1ConfigMapForAllNamespaces,
  listCoreV1ServiceForAllNamespaces,
  listCoreV1SecretForAllNamespaces,
  listCoreV1ServiceAccountForAllNamespaces,
  createCoreV1Namespace,
  readCoreV1Namespace,
  deleteCoreV1Namespace,
  readCoreV1Node,
  readCoreV1NamespacedPod,
  deleteCoreV1NamespacedConfigMap,
  readCoreV1NamespacedConfigMap,
  readCoreV1NamespacedService,
} from "../src/services/core";
import { NotFound, Conflict } from "../src/errors";

describe("Core API", () => {
  describe("API Discovery", () => {
    it("getAPIVersions - lists available API versions", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getAPIVersions({});
          expect(result).toBeDefined();
        }),
      );
    }, 30_000);

    it("getCodeVersion - returns server version info", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getCodeVersion({});
          expect(result.gitVersion).toBeDefined();
          expect(result.major).toBeDefined();
          expect(result.minor).toBeDefined();
          expect(result.platform).toBeDefined();
          expect(result.goVersion).toBeDefined();
        }),
      );
    }, 30_000);

    it("getCoreAPIVersions - lists core API versions", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getCoreAPIVersions({});
          expect(result).toBeDefined();
        }),
      );
    }, 30_000);

    it("getCoreV1APIResources - lists core v1 API resources", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getCoreV1APIResources({});
          expect(result).toBeDefined();
        }),
      );
    }, 30_000);
  });

  describe("Namespaces", () => {
    describe("listCoreV1Namespace", () => {
      it("happy path - lists namespaces", async () => {
        await runEffect(
          Effect.gen(function* () {
            const result = yield* listCoreV1Namespace({});
            expect(result.items).toBeDefined();
            expect(Array.isArray(result.items)).toBe(true);
            // At minimum, kube-system namespace should exist
            expect(result.items.length).toBeGreaterThan(0);
          }),
        );
      }, 30_000);
    });

    describe("readCoreV1Namespace", () => {
      it("error - NotFound for non-existent namespace", () =>
        runEffect(
          readCoreV1Namespace({}).pipe(
            Effect.flip,
            Effect.map((e) => {
              expect(e).toBeInstanceOf(NotFound);
              expect(e._tag).toBe("NotFound");
            }),
          ),
        ), 30_000);
    });

    describe("deleteCoreV1Namespace", () => {
      it("error - NotFound for non-existent namespace", () =>
        runEffect(
          deleteCoreV1Namespace({}).pipe(
            Effect.flip,
            Effect.map((e) => {
              expect(e).toBeInstanceOf(NotFound);
              expect(e._tag).toBe("NotFound");
            }),
          ),
        ), 30_000);
    });
  });

  describe("Nodes", () => {
    describe("listCoreV1Node", () => {
      it("happy path - lists nodes", async () => {
        await runEffect(
          Effect.gen(function* () {
            const result = yield* listCoreV1Node({});
            expect(result.items).toBeDefined();
            expect(Array.isArray(result.items)).toBe(true);
            // At minimum, one node should exist
            expect(result.items.length).toBeGreaterThan(0);
          }),
        );
      }, 30_000);
    });

    describe("readCoreV1Node", () => {
      it("error - NotFound for non-existent node", () =>
        runEffect(
          readCoreV1Node({}).pipe(
            Effect.flip,
            Effect.map((e) => {
              expect(e).toBeInstanceOf(NotFound);
              expect(e._tag).toBe("NotFound");
            }),
          ),
        ), 30_000);
    });
  });

  describe("Pods", () => {
    describe("listCoreV1PodForAllNamespaces", () => {
      it("happy path - lists pods across all namespaces", async () => {
        await runEffect(
          Effect.gen(function* () {
            const result = yield* listCoreV1PodForAllNamespaces({});
            expect(result.items).toBeDefined();
            expect(Array.isArray(result.items)).toBe(true);
          }),
        );
      }, 30_000);
    });

    describe("readCoreV1NamespacedPod", () => {
      it("error - NotFound for non-existent pod", () =>
        runEffect(
          readCoreV1NamespacedPod({}).pipe(
            Effect.flip,
            Effect.map((e) => {
              expect(e).toBeInstanceOf(NotFound);
              expect(e._tag).toBe("NotFound");
            }),
          ),
        ), 30_000);
    });
  });

  describe("ConfigMaps", () => {
    describe("listCoreV1ConfigMapForAllNamespaces", () => {
      it("happy path - lists configmaps across all namespaces", async () => {
        await runEffect(
          Effect.gen(function* () {
            const result = yield* listCoreV1ConfigMapForAllNamespaces({});
            expect(result.items).toBeDefined();
            expect(Array.isArray(result.items)).toBe(true);
          }),
        );
      }, 30_000);
    });

    describe("readCoreV1NamespacedConfigMap", () => {
      it("error - NotFound for non-existent configmap", () =>
        runEffect(
          readCoreV1NamespacedConfigMap({}).pipe(
            Effect.flip,
            Effect.map((e) => {
              expect(e).toBeInstanceOf(NotFound);
              expect(e._tag).toBe("NotFound");
            }),
          ),
        ), 30_000);
    });

    describe("deleteCoreV1NamespacedConfigMap", () => {
      it("error - NotFound for non-existent configmap", () =>
        runEffect(
          deleteCoreV1NamespacedConfigMap({}).pipe(
            Effect.flip,
            Effect.map((e) => {
              expect(e).toBeInstanceOf(NotFound);
              expect(e._tag).toBe("NotFound");
            }),
          ),
        ), 30_000);
    });
  });

  describe("Services", () => {
    describe("listCoreV1ServiceForAllNamespaces", () => {
      it("happy path - lists services across all namespaces", async () => {
        await runEffect(
          Effect.gen(function* () {
            const result = yield* listCoreV1ServiceForAllNamespaces({});
            expect(result.items).toBeDefined();
            expect(Array.isArray(result.items)).toBe(true);
            // kubernetes service should always exist
            expect(result.items.length).toBeGreaterThan(0);
          }),
        );
      }, 30_000);
    });

    describe("readCoreV1NamespacedService", () => {
      it("error - NotFound for non-existent service", () =>
        runEffect(
          readCoreV1NamespacedService({}).pipe(
            Effect.flip,
            Effect.map((e) => {
              expect(e).toBeInstanceOf(NotFound);
              expect(e._tag).toBe("NotFound");
            }),
          ),
        ), 30_000);
    });
  });

  describe("Secrets", () => {
    describe("listCoreV1SecretForAllNamespaces", () => {
      it("happy path - lists secrets across all namespaces", async () => {
        await runEffect(
          Effect.gen(function* () {
            const result = yield* listCoreV1SecretForAllNamespaces({});
            expect(result.items).toBeDefined();
            expect(Array.isArray(result.items)).toBe(true);
          }),
        );
      }, 30_000);
    });
  });

  describe("ServiceAccounts", () => {
    describe("listCoreV1ServiceAccountForAllNamespaces", () => {
      it("happy path - lists service accounts across all namespaces", async () => {
        await runEffect(
          Effect.gen(function* () {
            const result = yield* listCoreV1ServiceAccountForAllNamespaces({});
            expect(result.items).toBeDefined();
            expect(Array.isArray(result.items)).toBe(true);
            // default service account should exist
            expect(result.items.length).toBeGreaterThan(0);
          }),
        );
      }, 30_000);
    });
  });
});
