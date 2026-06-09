import { Effect, Layer } from "effect";
import * as Redacted from "effect/Redacted";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials, DEFAULT_API_BASE_URL } from "../src/credentials";
import { getV1RegionsPostgres } from "../src/operations/getV1RegionsPostgres";
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

describe("getV1RegionsPostgres", () => {
  // ============================================================================
  // Happy path
  // ============================================================================

  it("happy path - lists postgres regions", async () => {
    const result = await runEffect(getV1RegionsPostgres({}));
    expect(result.data).toBeDefined();
    expect(Array.isArray(result.data)).toBe(true);
    expect(result.data.length).toBeGreaterThan(0);
    const region = result.data[0];
    expect(region.id).toBeDefined();
    expect(region.name).toBeDefined();
    expect(region.status).toBeDefined();
    expect(["available", "unavailable"]).toContain(region.status);
  }, 30_000);

  // ============================================================================
  // Error tests
  // ============================================================================

  it("error - Unauthorized with invalid token", async () => {
    await Effect.runPromise(
      getV1RegionsPostgres({}).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["Unauthorized", "Forbidden"]).toContain((e as any)._tag);
        }),
        Effect.provide(BadTokenLayer),
      ),
    );
  }, 30_000);
});
