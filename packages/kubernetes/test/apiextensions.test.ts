import { describe, it, expect } from "vitest";
import { Effect } from "effect";
import { runEffect } from "./test";
import {
  getApiextensionsAPIGroup,
  getApiextensionsV1APIResources,
  listApiextensionsV1CustomResourceDefinition,
  readApiextensionsV1CustomResourceDefinition,
} from "../src/services/apiextensions";
import { NotFound } from "../src/errors";

describe("API Extensions", () => {
  describe("API Discovery", () => {
    it("getApiextensionsAPIGroup - returns apiextensions API group info", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getApiextensionsAPIGroup({});
          expect(result).toBeDefined();
        }),
      );
    }, 30_000);

    it("getApiextensionsV1APIResources - lists apiextensions v1 API resources", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getApiextensionsV1APIResources({});
          expect(result).toBeDefined();
        }),
      );
    }, 30_000);
  });

  describe("CustomResourceDefinitions", () => {
    describe("listApiextensionsV1CustomResourceDefinition", () => {
      it("happy path - lists CRDs", async () => {
        await runEffect(
          Effect.gen(function* () {
            const result = yield* listApiextensionsV1CustomResourceDefinition({});
            expect(result.items).toBeDefined();
            expect(Array.isArray(result.items)).toBe(true);
          }),
        );
      }, 30_000);
    });

    describe("readApiextensionsV1CustomResourceDefinition", () => {
      it("error - NotFound for non-existent CRD", () =>
        runEffect(
          readApiextensionsV1CustomResourceDefinition({}).pipe(
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
