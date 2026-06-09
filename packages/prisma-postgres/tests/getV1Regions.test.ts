import { Effect, Layer } from "effect";
import * as Redacted from "effect/Redacted";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials, DEFAULT_API_BASE_URL } from "../src/credentials";
import { getV1Regions } from "../src/operations/getV1Regions";
import { runEffect } from "./setup";

// Layer with an invalid token to trigger Unauthorized/Forbidden errors
const BadTokenLayer = Layer.merge(
  Layer.succeed(
    Credentials,
    Effect.succeed({
      apiToken: Redacted.make("invalid_token_000000"),
      apiBaseUrl: DEFAULT_API_BASE_URL,
    }),
  ),
  FetchHttpClient.layer,
);

describe("getV1Regions", () => {
  // ============================================================================
  // Happy path
  // ============================================================================

  it("happy path - lists all regions", async () => {
    const result = await runEffect(getV1Regions({}));
    expect(result.data).toBeDefined();
    expect(Array.isArray(result.data)).toBe(true);
    expect(result.data.length).toBeGreaterThan(0);
    const region = result.data[0];
    expect(region.id).toBeDefined();
    expect(region.name).toBeDefined();
    expect(region.product).toBeDefined();
  }, 30_000);

  it("happy path - filters by postgres product", async () => {
    const result = await runEffect(getV1Regions({ product: "postgres" }));
    expect(result.data).toBeDefined();
    expect(result.data.length).toBeGreaterThan(0);
    for (const region of result.data) {
      expect(region.product).toBe("postgres");
    }
  }, 30_000);

  it("happy path - filters by accelerate product", async () => {
    const result = await runEffect(getV1Regions({ product: "accelerate" }));
    expect(result.data).toBeDefined();
    expect(result.data.length).toBeGreaterThan(0);
    for (const region of result.data) {
      expect(region.product).toBe("accelerate");
    }
  }, 30_000);

  // ============================================================================
  // Error tests
  // ============================================================================

  it("error - Unauthorized with invalid token", async () => {
    await Effect.runPromise(
      getV1Regions({}).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["Unauthorized", "Forbidden"]).toContain((e as any)._tag);
        }),
        Effect.provide(BadTokenLayer),
      ),
    );
  }, 30_000);
});
