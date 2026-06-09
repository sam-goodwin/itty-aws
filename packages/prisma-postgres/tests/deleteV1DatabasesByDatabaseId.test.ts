import { Effect, Layer } from "effect";
import * as Redacted from "effect/Redacted";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { Credentials, DEFAULT_API_BASE_URL } from "../src/credentials";
import { deleteV1DatabasesByDatabaseId } from "../src/operations/deleteV1DatabasesByDatabaseId";
import { getV1DatabasesByDatabaseId } from "../src/operations/getV1DatabasesByDatabaseId";
import { postV1Databases } from "../src/operations/postV1Databases";
import {
  TestLayer,
  getTestProject,
  runEffect,
  setupTestProject,
  teardownTestProject,
  testRunId,
} from "./setup";

// Layer with an invalid token to trigger Forbidden/Unauthorized errors
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

describe("deleteV1DatabasesByDatabaseId", () => {
  beforeAll(async () => {
    await Effect.runPromise(setupTestProject("db-del"));
  }, 300_000);

  afterAll(async () => {
    await Effect.runPromise(teardownTestProject("db-del"));
  }, 60_000);

  // ============================================================================
  // Happy path
  // ============================================================================

  it("happy path - deletes a database", async () => {
    const project = getTestProject("db-del");
    const dbName = `distilled-prisma-db-del-${testRunId}`;

    await runEffect(
      Effect.gen(function* () {
        // Create a database to delete
        const created = yield* postV1Databases({
          projectId: project.projectId,
          name: dbName,
          region: "us-east-1",
        });
        const dbId = created.data.id;
        expect(dbId).toBeDefined();

        // Delete it
        yield* deleteV1DatabasesByDatabaseId({ databaseId: dbId });

        // Verify it's gone
        const err = yield* getV1DatabasesByDatabaseId({
          databaseId: dbId,
        }).pipe(Effect.flip);
        expect((err as any)._tag).toBe("NotFound");
      }),
    );
  }, 60_000);

  // ============================================================================
  // Error tests
  // ============================================================================

  it("error - NotFound for non-existent databaseId", async () => {
    await Effect.runPromise(
      deleteV1DatabasesByDatabaseId({
        databaseId: "non-existent-db-id-00000000",
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["NotFound", "UnprocessableEntity"]).toContain(
            (e as any)._tag,
          );
        }),
        Effect.provide(TestLayer),
      ),
    );
  }, 30_000);

  it("error - Forbidden with invalid token", async () => {
    const project = getTestProject("db-del");
    const databaseId = project.databaseId!;

    await Effect.runPromise(
      deleteV1DatabasesByDatabaseId({ databaseId }).pipe(
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
      deleteV1DatabasesByDatabaseId({ databaseId: "" }).pipe(
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
