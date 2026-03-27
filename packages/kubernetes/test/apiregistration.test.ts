import { describe, it, expect } from "vitest";
import { Effect } from "effect";
import { runEffect } from "./test";
import {
  getApiregistrationAPIGroup,
  getApiregistrationV1APIResources,
  listApiregistrationV1APIService,
  readApiregistrationV1APIService,
} from "../src/services/apiregistration";
import { NotFound } from "../src/errors";

describe("API Registration", () => {
  describe("API Discovery", () => {
    it("getApiregistrationAPIGroup - returns apiregistration API group info", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getApiregistrationAPIGroup({});
          expect(result).toBeDefined();
        }),
      );
    }, 30_000);

    it("getApiregistrationV1APIResources - lists apiregistration v1 API resources", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getApiregistrationV1APIResources({});
          expect(result).toBeDefined();
        }),
      );
    }, 30_000);
  });

  describe("APIServices", () => {
    describe("listApiregistrationV1APIService", () => {
      it("happy path - lists API services", async () => {
        await runEffect(
          Effect.gen(function* () {
            const result = yield* listApiregistrationV1APIService({});
            expect(result.items).toBeDefined();
            expect(Array.isArray(result.items)).toBe(true);
            // Built-in API services should exist
            expect(result.items.length).toBeGreaterThan(0);
          }),
        );
      }, 30_000);
    });

    describe("readApiregistrationV1APIService", () => {
      it("error - NotFound for non-existent API service", () =>
        runEffect(
          readApiregistrationV1APIService({}).pipe(
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
