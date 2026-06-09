import { Effect, Layer } from "effect";
import * as Redacted from "effect/Redacted";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials, DEFAULT_API_BASE_URL } from "../src/credentials";
import { getV1Workspaces } from "../src/operations/getV1Workspaces";
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

describe("getV1Workspaces", () => {
  // ============================================================================
  // Happy path
  // ============================================================================

  it("happy path - lists workspaces", async () => {
    const result = await runEffect(getV1Workspaces({}));
    expect(result.data).toBeDefined();
    expect(Array.isArray(result.data)).toBe(true);
    expect(result.pagination).toBeDefined();
    expect(typeof result.pagination.hasMore).toBe("boolean");
    expect(result.data.length).toBeGreaterThan(0);
    const ws = result.data[0];
    expect(ws.id).toBeDefined();
    expect(ws.name).toBeDefined();
    expect(ws.createdAt).toBeDefined();
  }, 30_000);

  it("happy path - supports limit parameter", async () => {
    const result = await runEffect(getV1Workspaces({ limit: 1 }));
    expect(result.data).toBeDefined();
    expect(result.data.length).toBeLessThanOrEqual(1);
  }, 30_000);

  // ============================================================================
  // Error tests
  // ============================================================================

  it("error - Unauthorized with invalid token", async () => {
    await Effect.runPromise(
      getV1Workspaces({}).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["Unauthorized", "Forbidden"]).toContain((e as any)._tag);
        }),
        Effect.provide(BadTokenLayer),
      ),
    );
  }, 30_000);
});
