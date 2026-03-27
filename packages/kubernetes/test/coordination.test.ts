import { describe, it, expect } from "vitest";
import { Effect } from "effect";
import { runEffect } from "./test";
import {
  getCoordinationAPIGroup,
  getCoordinationV1APIResources,
  listCoordinationV1LeaseForAllNamespaces,
  readCoordinationV1NamespacedLease,
} from "../src/services/coordination";
import { NotFound } from "../src/errors";

describe("Coordination API", () => {
  describe("API Discovery", () => {
    it("getCoordinationAPIGroup - returns coordination API group info", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getCoordinationAPIGroup({});
          expect(result).toBeDefined();
        }),
      );
    }, 30_000);

    it("getCoordinationV1APIResources - lists coordination v1 API resources", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getCoordinationV1APIResources({});
          expect(result).toBeDefined();
        }),
      );
    }, 30_000);
  });

  describe("Leases", () => {
    describe("listCoordinationV1LeaseForAllNamespaces", () => {
      it("happy path - lists leases across all namespaces", async () => {
        await runEffect(
          Effect.gen(function* () {
            const result = yield* listCoordinationV1LeaseForAllNamespaces({});
            expect(result.items).toBeDefined();
            expect(Array.isArray(result.items)).toBe(true);
            // Kubernetes system leases should exist
            expect(result.items.length).toBeGreaterThan(0);
          }),
        );
      }, 30_000);
    });

    describe("readCoordinationV1NamespacedLease", () => {
      it("error - NotFound for non-existent lease", () =>
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
  });
});
