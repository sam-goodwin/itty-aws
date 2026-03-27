import { describe, it, expect } from "vitest";
import { Effect } from "effect";
import { runEffect } from "./test";
import {
  getEventsAPIGroup,
  getEventsV1APIResources,
  listEventsV1EventForAllNamespaces,
  readEventsV1NamespacedEvent,
} from "../src/services/events";
import { NotFound } from "../src/errors";

describe("Events API", () => {
  describe("API Discovery", () => {
    it("getEventsAPIGroup - returns events API group info", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getEventsAPIGroup({});
          expect(result).toBeDefined();
        }),
      );
    }, 30_000);

    it("getEventsV1APIResources - lists events v1 API resources", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getEventsV1APIResources({});
          expect(result).toBeDefined();
        }),
      );
    }, 30_000);
  });

  describe("Events", () => {
    describe("listEventsV1EventForAllNamespaces", () => {
      it("happy path - lists events across all namespaces", async () => {
        await runEffect(
          Effect.gen(function* () {
            const result = yield* listEventsV1EventForAllNamespaces({});
            expect(result.items).toBeDefined();
            expect(Array.isArray(result.items)).toBe(true);
          }),
        );
      }, 30_000);
    });

    describe("readEventsV1NamespacedEvent", () => {
      it("error - NotFound for non-existent event", () =>
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
  });
});
