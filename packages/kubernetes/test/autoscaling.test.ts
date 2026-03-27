import { describe, it, expect } from "vitest";
import { Effect } from "effect";
import { runEffect } from "./test";
import {
  getAutoscalingAPIGroup,
  getAutoscalingV1APIResources,
  getAutoscalingV2APIResources,
  listAutoscalingV1HorizontalPodAutoscalerForAllNamespaces,
  listAutoscalingV2HorizontalPodAutoscalerForAllNamespaces,
  readAutoscalingV1NamespacedHorizontalPodAutoscaler,
  readAutoscalingV2NamespacedHorizontalPodAutoscaler,
} from "../src/services/autoscaling";
import { NotFound } from "../src/errors";

describe("Autoscaling API", () => {
  describe("API Discovery", () => {
    it("getAutoscalingAPIGroup - returns autoscaling API group info", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getAutoscalingAPIGroup({});
          expect(result).toBeDefined();
        }),
      );
    }, 30_000);

    it("getAutoscalingV1APIResources - lists autoscaling v1 API resources", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getAutoscalingV1APIResources({});
          expect(result).toBeDefined();
        }),
      );
    }, 30_000);

    it("getAutoscalingV2APIResources - lists autoscaling v2 API resources", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getAutoscalingV2APIResources({});
          expect(result).toBeDefined();
        }),
      );
    }, 30_000);
  });

  describe("HorizontalPodAutoscaler v1", () => {
    describe("listAutoscalingV1HorizontalPodAutoscalerForAllNamespaces", () => {
      it("happy path - lists HPAs across all namespaces", async () => {
        await runEffect(
          Effect.gen(function* () {
            const result = yield* listAutoscalingV1HorizontalPodAutoscalerForAllNamespaces({});
            expect(result.items).toBeDefined();
            expect(Array.isArray(result.items)).toBe(true);
          }),
        );
      }, 30_000);
    });

    describe("readAutoscalingV1NamespacedHorizontalPodAutoscaler", () => {
      it("error - NotFound for non-existent HPA", () =>
        runEffect(
          readAutoscalingV1NamespacedHorizontalPodAutoscaler({}).pipe(
            Effect.flip,
            Effect.map((e) => {
              expect(e).toBeInstanceOf(NotFound);
              expect(e._tag).toBe("NotFound");
            }),
          ),
        ), 30_000);
    });
  });

  describe("HorizontalPodAutoscaler v2", () => {
    describe("listAutoscalingV2HorizontalPodAutoscalerForAllNamespaces", () => {
      it("happy path - lists v2 HPAs across all namespaces", async () => {
        await runEffect(
          Effect.gen(function* () {
            const result = yield* listAutoscalingV2HorizontalPodAutoscalerForAllNamespaces({});
            expect(result.items).toBeDefined();
            expect(Array.isArray(result.items)).toBe(true);
          }),
        );
      }, 30_000);
    });

    describe("readAutoscalingV2NamespacedHorizontalPodAutoscaler", () => {
      it("error - NotFound for non-existent v2 HPA", () =>
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
  });
});
