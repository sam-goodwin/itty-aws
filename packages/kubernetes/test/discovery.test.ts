import { describe, it, expect } from "vitest";
import { Effect } from "effect";
import { runEffect } from "./test";
import {
  getDiscoveryAPIGroup,
  getDiscoveryV1APIResources,
  listDiscoveryV1EndpointSliceForAllNamespaces,
  readDiscoveryV1NamespacedEndpointSlice,
} from "../src/services/discovery";
import { NotFound } from "../src/errors";

describe("Discovery API", () => {
  describe("API Discovery", () => {
    it("getDiscoveryAPIGroup - returns discovery API group info", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getDiscoveryAPIGroup({});
          expect(result).toBeDefined();
        }),
      );
    }, 30_000);

    it("getDiscoveryV1APIResources - lists discovery v1 API resources", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getDiscoveryV1APIResources({});
          expect(result).toBeDefined();
        }),
      );
    }, 30_000);
  });

  describe("EndpointSlices", () => {
    describe("listDiscoveryV1EndpointSliceForAllNamespaces", () => {
      it("happy path - lists endpoint slices across all namespaces", async () => {
        await runEffect(
          Effect.gen(function* () {
            const result = yield* listDiscoveryV1EndpointSliceForAllNamespaces({});
            expect(result.items).toBeDefined();
            expect(Array.isArray(result.items)).toBe(true);
            // kubernetes endpoint slice should exist
            expect(result.items.length).toBeGreaterThan(0);
          }),
        );
      }, 30_000);
    });

    describe("readDiscoveryV1NamespacedEndpointSlice", () => {
      it("error - NotFound for non-existent endpoint slice", () =>
        runEffect(
          readDiscoveryV1NamespacedEndpointSlice({}).pipe(
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
