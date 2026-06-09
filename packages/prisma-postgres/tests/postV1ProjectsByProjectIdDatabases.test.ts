import { Effect, Layer } from "effect";
import * as Redacted from "effect/Redacted";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { Credentials, DEFAULT_API_BASE_URL } from "../src/credentials";
import { deleteV1DatabasesByDatabaseId } from "../src/operations/deleteV1DatabasesByDatabaseId";
import { postV1ProjectsByProjectIdDatabases } from "../src/operations/postV1ProjectsByProjectIdDatabases";
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

describe("postV1ProjectsByProjectIdDatabases", () => {
  beforeAll(async () => {
    await Effect.runPromise(setupTestProject("projdb-create"));
  }, 300_000);

  afterAll(async () => {
    await Effect.runPromise(teardownTestProject("projdb-create"));
  }, 60_000);

  // ============================================================================
  // Happy path
  // ============================================================================

  it("happy path - creates a database in a project", async () => {
    const project = getTestProject("projdb-create");
    const dbName = `distilled-prisma-projdb-${testRunId}`;

    await runEffect(
      Effect.gen(function* () {
        const result = yield* postV1ProjectsByProjectIdDatabases({
          projectId: project.projectId,
          name: dbName,
          region: "us-east-1",
        });

        expect(result.data.id).toBeDefined();
        expect(result.data.name).toBe(dbName);
        expect(result.data.project.id).toBe(project.projectId);
        expect(result.data.status).toBeDefined();
        expect(result.data.connections).toBeDefined();
        expect(result.data.region).toBeDefined();

        return result;
      }).pipe(
        Effect.tap((result) =>
          deleteV1DatabasesByDatabaseId({ databaseId: result.data.id }).pipe(
            Effect.ignore,
          ),
        ),
      ),
    );
  }, 60_000);

  // ============================================================================
  // Error tests
  // ============================================================================

  it("error - NotFound for non-existent projectId", async () => {
    await Effect.runPromise(
      postV1ProjectsByProjectIdDatabases({
        projectId: "non-existent-proj-id-00000000",
        region: "us-east-1",
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
    const project = getTestProject("projdb-create");

    await Effect.runPromise(
      postV1ProjectsByProjectIdDatabases({
        projectId: project.projectId,
        region: "us-east-1",
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["Forbidden", "Unauthorized"]).toContain((e as any)._tag);
        }),
        Effect.provide(BadTokenLayer),
      ),
    );
  }, 30_000);

  it("error - BadRequest or UnprocessableEntity for empty projectId", async () => {
    await Effect.runPromise(
      postV1ProjectsByProjectIdDatabases({
        projectId: "",
        region: "us-east-1",
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["BadRequest", "UnprocessableEntity", "NotFound"]).toContain(
            (e as any)._tag,
          );
        }),
        Effect.provide(TestLayer),
      ),
    );
  }, 30_000);
});
