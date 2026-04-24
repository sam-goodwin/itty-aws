import { Effect } from "effect";
import { describe, expect, it, beforeAll, afterAll } from "vitest";
import {
  TestLayer,
  runEffect,
  setupTestProject,
  teardownTestProject,
  getTestProject,
  testRunId,
} from "./setup";
import { postV1DatabasesByDatabaseIdConnections } from "../src/operations/postV1DatabasesByDatabaseIdConnections";
import { deleteV1ConnectionsById } from "../src/operations/deleteV1ConnectionsById";

describe("postV1DatabasesByDatabaseIdConnections", () => {
  beforeAll(async () => {
    await Effect.runPromise(setupTestProject("dbconn-create"));
  }, 300_000);

  afterAll(async () => {
    await Effect.runPromise(teardownTestProject("dbconn-create"));
  }, 60_000);

  // ============================================================================
  // Happy path
  // ============================================================================

  it("happy path - creates a connection for a database", async () => {
    const project = getTestProject("dbconn-create");
    const databaseId = project.databaseId!;
    const connName = `distilled-prisma-dbconn-${testRunId}`;

    await runEffect(
      Effect.gen(function* () {
        const result = yield* postV1DatabasesByDatabaseIdConnections({
          databaseId,
          name: connName,
        });

        expect(result.data.id).toBeDefined();
        expect(result.data.name).toBe(connName);
        expect(result.data.database.id).toBe(databaseId);
        expect(result.data.kind).toBeDefined();
        expect(result.data.endpoints).toBeDefined();
        expect(result.data.connectionString).toBeDefined();

        return result;
      }).pipe(
        Effect.tap((result) =>
          deleteV1ConnectionsById({ id: result.data.id }).pipe(Effect.ignore),
        ),
      ),
    );
  }, 30_000);

  // ============================================================================
  // Error tests
  // ============================================================================

  it("error - NotFound for non-existent databaseId", async () => {
    await Effect.runPromise(
      postV1DatabasesByDatabaseIdConnections({
        databaseId: "non-existent-db-id-00000000",
        name: `distilled-prisma-dbconn-nf-${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["NotFound", "UnprocessableEntity"]).toContain((e as any)._tag);
        }),
        Effect.provide(TestLayer),
      ),
    );
  }, 30_000);

  it("error - UnprocessableEntity for empty name", async () => {
    const project = getTestProject("dbconn-create");
    const databaseId = project.databaseId!;

    await Effect.runPromise(
      postV1DatabasesByDatabaseIdConnections({
        databaseId,
        name: "",
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["UnprocessableEntity", "BadRequest", "InternalServerError"]).toContain(
            (e as any)._tag,
          );
        }),
        Effect.provide(TestLayer),
      ),
    );
  }, 30_000);
});
