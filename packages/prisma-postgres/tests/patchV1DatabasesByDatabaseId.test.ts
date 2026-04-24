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
  testRunId,
} from "./setup";
import { patchV1DatabasesByDatabaseId } from "../src/operations/patchV1DatabasesByDatabaseId";
import { Credentials, DEFAULT_API_BASE_URL } from "../src/credentials";

// Layer with an invalid token to trigger Forbidden/Unauthorized errors
const BadTokenLayer = Layer.merge(
  Layer.succeed(Credentials, {
    apiToken: Redacted.make("invalid_token_000000"),
    apiBaseUrl: DEFAULT_API_BASE_URL,
  }),
  FetchHttpClient.layer,
);

describe("patchV1DatabasesByDatabaseId", () => {
  beforeAll(async () => {
    await Effect.runPromise(setupTestProject("db-patch"));
  }, 300_000);

  afterAll(async () => {
    await Effect.runPromise(teardownTestProject("db-patch"));
  }, 60_000);

  // ============================================================================
  // Happy path
  // ============================================================================

  it("happy path - updates database name", async () => {
    const project = getTestProject("db-patch");
    const databaseId = project.databaseId!;
    const newName = `distilled-prisma-db-renamed-${testRunId}`;

    const result = await runEffect(
      patchV1DatabasesByDatabaseId({
        databaseId,
        name: newName,
      }),
    );

    expect(result.data.id).toBe(databaseId);
    expect(result.data.name).toBe(newName);
    expect(result.data.status).toBeDefined();
    expect(result.data.project).toBeDefined();
    expect(result.data.project.id).toBe(project.projectId);
  }, 30_000);

  // ============================================================================
  // Error tests
  // ============================================================================

  it("error - NotFound for non-existent databaseId", async () => {
    await Effect.runPromise(
      patchV1DatabasesByDatabaseId({
        databaseId: "non-existent-db-id-00000000",
        name: "should-not-exist",
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
    const project = getTestProject("db-patch");
    const databaseId = project.databaseId!;

    await Effect.runPromise(
      patchV1DatabasesByDatabaseId({
        databaseId,
        name: "should-fail-auth",
      }).pipe(
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
      patchV1DatabasesByDatabaseId({
        databaseId: "",
        name: "should-fail-validation",
      }).pipe(
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
