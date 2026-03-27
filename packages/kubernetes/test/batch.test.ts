import { describe, it, expect } from "vitest";
import { Effect } from "effect";
import { runEffect } from "./test";
import {
  getBatchAPIGroup,
  getBatchV1APIResources,
  listBatchV1JobForAllNamespaces,
  listBatchV1CronJobForAllNamespaces,
  readBatchV1NamespacedJob,
  readBatchV1NamespacedCronJob,
} from "../src/services/batch";
import { NotFound } from "../src/errors";

describe("Batch API", () => {
  describe("API Discovery", () => {
    it("getBatchAPIGroup - returns batch API group info", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getBatchAPIGroup({});
          expect(result).toBeDefined();
        }),
      );
    }, 30_000);

    it("getBatchV1APIResources - lists batch v1 API resources", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getBatchV1APIResources({});
          expect(result).toBeDefined();
        }),
      );
    }, 30_000);
  });

  describe("Jobs", () => {
    describe("listBatchV1JobForAllNamespaces", () => {
      it("happy path - lists jobs across all namespaces", async () => {
        await runEffect(
          Effect.gen(function* () {
            const result = yield* listBatchV1JobForAllNamespaces({});
            expect(result.items).toBeDefined();
            expect(Array.isArray(result.items)).toBe(true);
          }),
        );
      }, 30_000);
    });

    describe("readBatchV1NamespacedJob", () => {
      it("error - NotFound for non-existent job", () =>
        runEffect(
          readBatchV1NamespacedJob({}).pipe(
            Effect.flip,
            Effect.map((e) => {
              expect(e).toBeInstanceOf(NotFound);
              expect(e._tag).toBe("NotFound");
            }),
          ),
        ), 30_000);
    });
  });

  describe("CronJobs", () => {
    describe("listBatchV1CronJobForAllNamespaces", () => {
      it("happy path - lists cronjobs across all namespaces", async () => {
        await runEffect(
          Effect.gen(function* () {
            const result = yield* listBatchV1CronJobForAllNamespaces({});
            expect(result.items).toBeDefined();
            expect(Array.isArray(result.items)).toBe(true);
          }),
        );
      }, 30_000);
    });

    describe("readBatchV1NamespacedCronJob", () => {
      it("error - NotFound for non-existent cronjob", () =>
        runEffect(
          readBatchV1NamespacedCronJob({}).pipe(
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
