import { Effect, Layer } from "effect";
import * as Redacted from "effect/Redacted";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { runEffect } from "./setup";
import { getV1Projects } from "../src/operations/getV1Projects";
import { Credentials, DEFAULT_API_BASE_URL } from "../src/credentials";

// Layer with an invalid token to trigger Unauthorized/Forbidden errors
const BadTokenLayer = Layer.merge(
  Layer.succeed(Credentials, {
    apiToken: Redacted.make("invalid_token_000000"),
    apiBaseUrl: DEFAULT_API_BASE_URL,
  }),
  FetchHttpClient.layer,
);

describe("getV1Projects", () => {
  // ============================================================================
  // Happy path
  // ============================================================================

  it("happy path - lists projects", async () => {
    const result = await runEffect(getV1Projects({}));
    expect(result.data).toBeDefined();
    expect(Array.isArray(result.data)).toBe(true);
    expect(result.pagination).toBeDefined();
    expect(typeof result.pagination.hasMore).toBe("boolean");
    if (result.data.length > 0) {
      const project = result.data[0];
      expect(project.id).toBeDefined();
      expect(project.name).toBeDefined();
      expect(project.workspace).toBeDefined();
      expect(project.workspace.id).toBeDefined();
    }
  }, 30_000);

  it("happy path - supports limit parameter", async () => {
    const result = await runEffect(getV1Projects({ limit: 1 }));
    expect(result.data).toBeDefined();
    expect(result.data.length).toBeLessThanOrEqual(1);
  }, 30_000);

  // ============================================================================
  // Error tests
  // ============================================================================

  it("error - Unauthorized with invalid token", async () => {
    await Effect.runPromise(
      getV1Projects({}).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["Unauthorized", "Forbidden"]).toContain((e as any)._tag);
        }),
        Effect.provide(BadTokenLayer),
      ),
    );
  }, 30_000);
});
