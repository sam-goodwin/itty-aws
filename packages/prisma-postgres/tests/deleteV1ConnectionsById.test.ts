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
import { deleteV1ConnectionsById } from "../src/operations/deleteV1ConnectionsById";
import { postV1Connections } from "../src/operations/postV1Connections";
import { getV1ConnectionsById } from "../src/operations/getV1ConnectionsById";

describe("deleteV1ConnectionsById", () => {
  beforeAll(async () => {
    await Effect.runPromise(setupTestProject("conn-del"));
  }, 300_000);

  afterAll(async () => {
    await Effect.runPromise(teardownTestProject("conn-del"));
  }, 60_000);

  // ============================================================================
  // Happy path
  // ============================================================================

  it("happy path - deletes a connection", async () => {
    const project = getTestProject("conn-del");
    const databaseId = project.databaseId!;
    const connName = `distilled-prisma-conn-del-${testRunId}`;

    await runEffect(
      Effect.gen(function* () {
        // Create a connection to delete
        const created = yield* postV1Connections({
          databaseId,
          name: connName,
        });
        const connId = created.data.id;
        expect(connId).toBeDefined();

        // Delete it
        yield* deleteV1ConnectionsById({ id: connId });

        // Verify it's gone
        const err = yield* getV1ConnectionsById({ id: connId }).pipe(
          Effect.flip,
        );
        expect((err as any)._tag).toBe("NotFound");
      }),
    );
  }, 30_000);

  // ============================================================================
  // Error tests
  // ============================================================================

  it("error - NotFound for non-existent connection id", async () => {
    await Effect.runPromise(
      deleteV1ConnectionsById({ id: "non-existent-conn-id-00000000" }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["NotFound", "UnprocessableEntity"]).toContain((e as any)._tag);
        }),
        Effect.provide(TestLayer),
      ),
    );
  }, 30_000);

  it("error - UnprocessableEntity for malformed id", async () => {
    await Effect.runPromise(
      deleteV1ConnectionsById({ id: "" }).pipe(
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
