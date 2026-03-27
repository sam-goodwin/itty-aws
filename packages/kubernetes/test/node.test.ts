import { describe, it, expect } from "vitest";
import { Effect } from "effect";
import { runEffect } from "./test";
import {
  getNodeAPIGroup,
  getNodeV1APIResources,
  listNodeV1RuntimeClass,
  readNodeV1RuntimeClass,
} from "../src/services/node";
import { NotFound } from "../src/errors";

describe("Node API", () => {
  describe("API Discovery", () => {
    it("getNodeAPIGroup - returns node API group info", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getNodeAPIGroup({});
          expect(result).toBeDefined();
        }),
      );
    }, 30_000);

    it("getNodeV1APIResources - lists node v1 API resources", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getNodeV1APIResources({});
          expect(result).toBeDefined();
        }),
      );
    }, 30_000);
  });

  describe("RuntimeClasses", () => {
    describe("listNodeV1RuntimeClass", () => {
      it("happy path - lists runtime classes", async () => {
        await runEffect(
          Effect.gen(function* () {
            const result = yield* listNodeV1RuntimeClass({});
            expect(result.items).toBeDefined();
            expect(Array.isArray(result.items)).toBe(true);
          }),
        );
      }, 30_000);
    });

    describe("readNodeV1RuntimeClass", () => {
      it("error - NotFound for non-existent runtime class", () =>
        runEffect(
          readNodeV1RuntimeClass({}).pipe(
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
