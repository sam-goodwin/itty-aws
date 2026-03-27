import { describe, it, expect } from "vitest";
import { Effect } from "effect";
import { runEffect } from "./test";
import {
  getNetworkingAPIGroup,
  getNetworkingV1APIResources,
  listNetworkingV1IngressForAllNamespaces,
  listNetworkingV1NetworkPolicyForAllNamespaces,
  readNetworkingV1NamespacedIngress,
  readNetworkingV1NamespacedNetworkPolicy,
  readNetworkingV1IngressClass,
} from "../src/services/networking";
import { NotFound } from "../src/errors";

describe("Networking API", () => {
  describe("API Discovery", () => {
    it("getNetworkingAPIGroup - returns networking API group info", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getNetworkingAPIGroup({});
          expect(result).toBeDefined();
        }),
      );
    }, 30_000);

    it("getNetworkingV1APIResources - lists networking v1 API resources", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getNetworkingV1APIResources({});
          expect(result).toBeDefined();
        }),
      );
    }, 30_000);
  });

  describe("Ingresses", () => {
    describe("listNetworkingV1IngressForAllNamespaces", () => {
      it("happy path - lists ingresses across all namespaces", async () => {
        await runEffect(
          Effect.gen(function* () {
            const result = yield* listNetworkingV1IngressForAllNamespaces({});
            expect(result.items).toBeDefined();
            expect(Array.isArray(result.items)).toBe(true);
          }),
        );
      }, 30_000);
    });

    describe("readNetworkingV1NamespacedIngress", () => {
      it("error - NotFound for non-existent ingress", () =>
        runEffect(
          readNetworkingV1NamespacedIngress({}).pipe(
            Effect.flip,
            Effect.map((e) => {
              expect(e).toBeInstanceOf(NotFound);
              expect(e._tag).toBe("NotFound");
            }),
          ),
        ), 30_000);
    });
  });

  describe("NetworkPolicies", () => {
    describe("listNetworkingV1NetworkPolicyForAllNamespaces", () => {
      it("happy path - lists network policies across all namespaces", async () => {
        await runEffect(
          Effect.gen(function* () {
            const result = yield* listNetworkingV1NetworkPolicyForAllNamespaces({});
            expect(result.items).toBeDefined();
            expect(Array.isArray(result.items)).toBe(true);
          }),
        );
      }, 30_000);
    });

    describe("readNetworkingV1NamespacedNetworkPolicy", () => {
      it("error - NotFound for non-existent network policy", () =>
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
  });

  describe("IngressClasses", () => {
    describe("readNetworkingV1IngressClass", () => {
      it("error - NotFound for non-existent ingress class", () =>
        runEffect(
          readNetworkingV1IngressClass({}).pipe(
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
