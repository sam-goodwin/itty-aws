import { Effect, Layer } from "effect";
import * as Redacted from "effect/Redacted";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it, beforeAll, afterAll } from "vitest";
import {
  TestLayer,
  runEffect,
  setupTestProject,
  teardownTestProject,
  getTestProject,
} from "./setup";
import { getV1Databases } from "../src/operations/getV1Databases";
import { Credentials, DEFAULT_API_BASE_URL } from "../src/credentials";

// Layer with an invalid token to trigger Forbidden/Unauthorized errors
const BadTokenLayer = Layer.merge(
  Layer.succeed(Credentials, {
    apiToken: Redacted.make("invalid_token_000000"),
    apiBaseUrl: DEFAULT_API_BASE_URL,
  }),
  FetchHttpClient.layer,
);

describe("getV1Databases", () => {
  beforeAll(async () => {
    await Effect.runPromise(setupTestProject("db-list"));
  }, 300_000);

  afterAll(async () => {
    await Effect.runPromise(teardownTestProject("db-list"));
  }, 60_000);

  // ============================================================================
  // Happy path
  // ============================================================================

  it("happy path - lists databases", async () => {
    const result = await runEffect(getV1Databases({}));
    expect(result.data).toBeDefined();
    expect(Array.isArray(result.data)).toBe(true);
    expect(result.pagination).toBeDefined();
    expect(typeof result.pagination.hasMore).toBe("boolean");
    // We created a project with a database, so there should be at least one
    expect(result.data.length).toBeGreaterThanOrEqual(1);
    const db = result.data[0];
    expect(db.id).toBeDefined();
    expect(db.name).toBeDefined();
    expect(db.status).toBeDefined();
    expect(db.project).toBeDefined();
    expect(db.project.id).toBeDefined();
  }, 30_000);

  it("happy path - filters by projectId", async () => {
    const project = getTestProject("db-list");
    const result = await runEffect(
      getV1Databases({ projectId: project.projectId }),
    );
    expect(result.data).toBeDefined();
    expect(result.data.length).toBeGreaterThanOrEqual(1);
    for (const db of result.data) {
      expect(db.project.id).toBe(project.projectId);
    }
  }, 30_000);

  it("happy path - supports limit parameter", async () => {
    const result = await runEffect(getV1Databases({ limit: 1 }));
    expect(result.data).toBeDefined();
    expect(result.data.length).toBeLessThanOrEqual(1);
  }, 30_000);

  // ============================================================================
  // Error tests
  // ============================================================================

  it("error - Forbidden with invalid token", async () => {
    await Effect.runPromise(
      getV1Databases({}).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["Forbidden", "Unauthorized"]).toContain((e as any)._tag);
        }),
        Effect.provide(BadTokenLayer),
      ),
    );
  }, 30_000);
});
