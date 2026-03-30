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
import { getV1DatabasesByDatabaseId } from "../src/operations/getV1DatabasesByDatabaseId";
import { Credentials, DEFAULT_API_BASE_URL } from "../src/credentials";

// Layer with an invalid token to trigger Forbidden/Unauthorized errors
const BadTokenLayer = Layer.merge(
  Layer.succeed(Credentials, {
    apiToken: Redacted.make("invalid_token_000000"),
    apiBaseUrl: DEFAULT_API_BASE_URL,
  }),
  FetchHttpClient.layer,
);

describe("getV1DatabasesByDatabaseId", () => {
  beforeAll(async () => {
    await Effect.runPromise(setupTestProject("db-get"));
  }, 300_000);

  afterAll(async () => {
    await Effect.runPromise(teardownTestProject("db-get"));
  }, 60_000);

  // ============================================================================
  // Happy path
  // ============================================================================

  it("happy path - gets a database by id", async () => {
    const project = getTestProject("db-get");
    const databaseId = project.databaseId!;

    const result = await runEffect(
      getV1DatabasesByDatabaseId({ databaseId }),
    );

    expect(result.data.id).toBe(databaseId);
    expect(result.data.name).toBeDefined();
    expect(result.data.status).toBeDefined();
    expect(result.data.project).toBeDefined();
    expect(result.data.project.id).toBe(project.projectId);
    expect(result.data.connections).toBeDefined();
    expect(Array.isArray(result.data.connections)).toBe(true);
  }, 30_000);

  // ============================================================================
  // Error tests
  // ============================================================================

  it("error - NotFound for non-existent databaseId", async () => {
    await Effect.runPromise(
      getV1DatabasesByDatabaseId({
        databaseId: "non-existent-db-id-00000000",
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["NotFound", "UnprocessableEntity"]).toContain((e as any)._tag);
        }),
        Effect.provide(TestLayer),
      ),
    );
  }, 30_000);

  it("error - Forbidden with invalid token", async () => {
    const project = getTestProject("db-get");
    const databaseId = project.databaseId!;

    await Effect.runPromise(
      getV1DatabasesByDatabaseId({ databaseId }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["Forbidden", "Unauthorized"]).toContain((e as any)._tag);
        }),
        Effect.provide(BadTokenLayer),
      ),
    );
  }, 30_000);

  it("error - UnprocessableEntity for malformed databaseId", async () => {
    await Effect.runPromise(
      getV1DatabasesByDatabaseId({ databaseId: "" }).pipe(
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
