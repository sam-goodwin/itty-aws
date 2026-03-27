import { describe, it, expect } from "vitest";
import { Effect } from "effect";
import { runEffect } from "./test";
import {
  getSchedulingAPIGroup,
  getSchedulingV1APIResources,
  listSchedulingV1PriorityClass,
  readSchedulingV1PriorityClass,
} from "../src/services/scheduling";
import { NotFound } from "../src/errors";

describe("Scheduling API", () => {
  describe("API Discovery", () => {
    it("getSchedulingAPIGroup - returns scheduling API group info", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getSchedulingAPIGroup({});
          expect(result).toBeDefined();
        }),
      );
    }, 30_000);

    it("getSchedulingV1APIResources - lists scheduling v1 API resources", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getSchedulingV1APIResources({});
          expect(result).toBeDefined();
        }),
      );
    }, 30_000);
  });

  describe("PriorityClasses", () => {
    describe("listSchedulingV1PriorityClass", () => {
      it("happy path - lists priority classes", async () => {
        await runEffect(
          Effect.gen(function* () {
            const result = yield* listSchedulingV1PriorityClass({});
            expect(result.items).toBeDefined();
            expect(Array.isArray(result.items)).toBe(true);
            // system-cluster-critical and system-node-critical should exist
            expect(result.items.length).toBeGreaterThan(0);
          }),
        );
      }, 30_000);
    });

    describe("readSchedulingV1PriorityClass", () => {
      it("error - NotFound for non-existent priority class", () =>
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
  });
});
