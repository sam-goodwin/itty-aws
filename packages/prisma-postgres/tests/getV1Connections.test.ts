import { Effect, Layer } from "effect";
import * as Redacted from "effect/Redacted";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { Credentials, DEFAULT_API_BASE_URL } from "../src/credentials";
import { getV1Connections } from "../src/operations/getV1Connections";
import {
  TestLayer,
  getTestProject,
  runEffect,
  setupTestProject,
  teardownTestProject,
} from "./setup";

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

describe("getV1Connections", () => {
  beforeAll(async () => {
    await Effect.runPromise(setupTestProject("conn-list"));
  }, 300_000);

  afterAll(async () => {
    await Effect.runPromise(teardownTestProject("conn-list"));
  }, 60_000);

  // ============================================================================
  // Happy path
  // ============================================================================

  it("happy path - lists connections", async () => {
    const result = await runEffect(getV1Connections({}));
    expect(result.data).toBeDefined();
    expect(Array.isArray(result.data)).toBe(true);
    expect(result.pagination).toBeDefined();
    expect(typeof result.pagination.hasMore).toBe("boolean");
    if (result.data.length > 0) {
      const conn = result.data[0];
      expect(conn.id).toBeDefined();
      expect(conn.name).toBeDefined();
      expect(conn.kind).toBeDefined();
      expect(conn.database).toBeDefined();
      expect(conn.database.id).toBeDefined();
    }
  }, 30_000);

  it("happy path - lists connections filtered by databaseId", async () => {
    const project = getTestProject("conn-list");
    const databaseId = project.databaseId!;
    const result = await runEffect(getV1Connections({ databaseId }));
    expect(result.data).toBeDefined();
    expect(Array.isArray(result.data)).toBe(true);
    // All returned connections should belong to the specified database
    for (const conn of result.data) {
      expect(conn.database.id).toBe(databaseId);
    }
  }, 30_000);

  it("happy path - supports limit parameter", async () => {
    const result = await runEffect(getV1Connections({ limit: 1 }));
    expect(result.data).toBeDefined();
    expect(result.data.length).toBeLessThanOrEqual(1);
  }, 30_000);

  // ============================================================================
  // Error tests
  // ============================================================================

  it("error - Unauthorized with invalid token", async () => {
    await Effect.runPromise(
      getV1Connections({}).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["Unauthorized", "Forbidden"]).toContain((e as any)._tag);
        }),
        Effect.provide(BadTokenLayer),
      ),
    );
  }, 30_000);

  it("error - UnprocessableEntity for non-existent databaseId filter", async () => {
    await Effect.runPromise(
      getV1Connections({ databaseId: "non-existent-db-id-00000000" }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["UnprocessableEntity", "NotFound", "BadRequest"]).toContain(
            (e as any)._tag,
          );
        }),
        Effect.provide(TestLayer),
      ),
    );
  }, 30_000);
});
