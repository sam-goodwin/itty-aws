import { describe, it, expect } from "vitest";
import { Effect } from "effect";
import { runEffect } from "./test";
import {
  getRbacAuthorizationAPIGroup,
  getRbacAuthorizationV1APIResources,
  listRbacAuthorizationV1ClusterRole,
  listRbacAuthorizationV1ClusterRoleBinding,
  listRbacAuthorizationV1RoleForAllNamespaces,
  listRbacAuthorizationV1RoleBindingForAllNamespaces,
  readRbacAuthorizationV1ClusterRole,
  readRbacAuthorizationV1ClusterRoleBinding,
  readRbacAuthorizationV1NamespacedRole,
  readRbacAuthorizationV1NamespacedRoleBinding,
} from "../src/services/rbac-authorization";
import { NotFound } from "../src/errors";

describe("RBAC Authorization API", () => {
  describe("API Discovery", () => {
    it("getRbacAuthorizationAPIGroup - returns RBAC API group info", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getRbacAuthorizationAPIGroup({});
          expect(result).toBeDefined();
        }),
      );
    }, 30_000);

    it("getRbacAuthorizationV1APIResources - lists RBAC v1 API resources", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getRbacAuthorizationV1APIResources({});
          expect(result).toBeDefined();
        }),
      );
    }, 30_000);
  });

  describe("ClusterRoles", () => {
    describe("listRbacAuthorizationV1ClusterRole", () => {
      it("happy path - lists cluster roles", async () => {
        await runEffect(
          Effect.gen(function* () {
            const result = yield* listRbacAuthorizationV1ClusterRole({});
            expect(result.items).toBeDefined();
            expect(Array.isArray(result.items)).toBe(true);
            // Built-in cluster roles should exist
            expect(result.items.length).toBeGreaterThan(0);
          }),
        );
      }, 30_000);
    });

    describe("readRbacAuthorizationV1ClusterRole", () => {
      it("error - NotFound for non-existent cluster role", () =>
        runEffect(
          readRbacAuthorizationV1ClusterRole({}).pipe(
            Effect.flip,
            Effect.map((e) => {
              expect(e).toBeInstanceOf(NotFound);
              expect(e._tag).toBe("NotFound");
            }),
          ),
        ), 30_000);
    });
  });

  describe("ClusterRoleBindings", () => {
    describe("listRbacAuthorizationV1ClusterRoleBinding", () => {
      it("happy path - lists cluster role bindings", async () => {
        await runEffect(
          Effect.gen(function* () {
            const result = yield* listRbacAuthorizationV1ClusterRoleBinding({});
            expect(result.items).toBeDefined();
            expect(Array.isArray(result.items)).toBe(true);
            expect(result.items.length).toBeGreaterThan(0);
          }),
        );
      }, 30_000);
    });

    describe("readRbacAuthorizationV1ClusterRoleBinding", () => {
      it("error - NotFound for non-existent cluster role binding", () =>
        runEffect(
          readRbacAuthorizationV1ClusterRoleBinding({}).pipe(
            Effect.flip,
            Effect.map((e) => {
              expect(e).toBeInstanceOf(NotFound);
              expect(e._tag).toBe("NotFound");
            }),
          ),
        ), 30_000);
    });
  });

  describe("Roles", () => {
    describe("listRbacAuthorizationV1RoleForAllNamespaces", () => {
      it("happy path - lists roles across all namespaces", async () => {
        await runEffect(
          Effect.gen(function* () {
            const result = yield* listRbacAuthorizationV1RoleForAllNamespaces({});
            expect(result.items).toBeDefined();
            expect(Array.isArray(result.items)).toBe(true);
          }),
        );
      }, 30_000);
    });

    describe("readRbacAuthorizationV1NamespacedRole", () => {
      it("error - NotFound for non-existent role", () =>
        runEffect(
          readRbacAuthorizationV1NamespacedRole({}).pipe(
            Effect.flip,
            Effect.map((e) => {
              expect(e).toBeInstanceOf(NotFound);
              expect(e._tag).toBe("NotFound");
            }),
          ),
        ), 30_000);
    });
  });

  describe("RoleBindings", () => {
    describe("listRbacAuthorizationV1RoleBindingForAllNamespaces", () => {
      it("happy path - lists role bindings across all namespaces", async () => {
        await runEffect(
          Effect.gen(function* () {
            const result = yield* listRbacAuthorizationV1RoleBindingForAllNamespaces({});
            expect(result.items).toBeDefined();
            expect(Array.isArray(result.items)).toBe(true);
          }),
        );
      }, 30_000);
    });

    describe("readRbacAuthorizationV1NamespacedRoleBinding", () => {
      it("error - NotFound for non-existent role binding", () =>
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
  });
});
