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
import { postV1Connections } from "../src/operations/postV1Connections";
import { deleteV1ConnectionsById } from "../src/operations/deleteV1ConnectionsById";

describe("postV1Connections", () => {
  beforeAll(async () => {
    await Effect.runPromise(setupTestProject("conn-create"));
  }, 300_000);

  afterAll(async () => {
    await Effect.runPromise(teardownTestProject("conn-create"));
  }, 60_000);

  // ============================================================================
  // Happy path
  // ============================================================================

  it("happy path - creates a connection for a database", async () => {
    const project = getTestProject("conn-create");
    const databaseId = project.databaseId!;
    const connName = `distilled-prisma-conn-${testRunId}`;

    const result = await runEffect(
      Effect.gen(function* () {
        const created = yield* postV1Connections({
          databaseId,
          name: connName,
        });

        expect(created.data.id).toBeDefined();
        expect(created.data.name).toBe(connName);
        expect(created.data.database.id).toBe(databaseId);
        expect(created.data.kind).toBeDefined();
        expect(created.data.endpoints).toBeDefined();
        expect(created.data.connectionString).toBeDefined();

        return created;
      }).pipe(
        Effect.tap((created) =>
          deleteV1ConnectionsById({ id: created.data.id }).pipe(Effect.ignore),
        ),
      ),
    );

    expect(result.data.id).toBeDefined();
  }, 30_000);

  // ============================================================================
  // Error tests
  // ============================================================================

  it("error - NotFound for non-existent databaseId", async () => {
    await Effect.runPromise(
      postV1Connections({
        databaseId: "non-existent-db-id-00000000",
        name: `distilled-prisma-conn-nf-${testRunId}`,
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
    const project = getTestProject("conn-create");
    const databaseId = project.databaseId!;

    await Effect.runPromise(
      postV1Connections({
        databaseId,
        name: "",
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["UnprocessableEntity", "BadRequest"]).toContain(
            (e as any)._tag,
          );
        }),
        Effect.provide(TestLayer),
      ),
    );
  }, 30_000);
});
