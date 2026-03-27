import { describe, it, expect } from "vitest";
import { Effect } from "effect";
import { runEffect } from "./test";
import {
  getPolicyAPIGroup,
  getPolicyV1APIResources,
  listPolicyV1PodDisruptionBudgetForAllNamespaces,
  readPolicyV1NamespacedPodDisruptionBudget,
} from "../src/services/policy";
import { NotFound } from "../src/errors";

describe("Policy API", () => {
  describe("API Discovery", () => {
    it("getPolicyAPIGroup - returns policy API group info", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getPolicyAPIGroup({});
          expect(result).toBeDefined();
        }),
      );
    }, 30_000);

    it("getPolicyV1APIResources - lists policy v1 API resources", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getPolicyV1APIResources({});
          expect(result).toBeDefined();
        }),
      );
    }, 30_000);
  });

  describe("PodDisruptionBudgets", () => {
    describe("listPolicyV1PodDisruptionBudgetForAllNamespaces", () => {
      it("happy path - lists PDBs across all namespaces", async () => {
        await runEffect(
          Effect.gen(function* () {
            const result = yield* listPolicyV1PodDisruptionBudgetForAllNamespaces({});
            expect(result.items).toBeDefined();
            expect(Array.isArray(result.items)).toBe(true);
          }),
        );
      }, 30_000);
    });

    describe("readPolicyV1NamespacedPodDisruptionBudget", () => {
      it("error - NotFound for non-existent PDB", () =>
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
  });
});
