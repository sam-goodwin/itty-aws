import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { TestLayer, runEffect, testRunId } from "./setup";
import { deleteV1ProjectsById } from "../src/operations/deleteV1ProjectsById";
import { postV1Projects } from "../src/operations/postV1Projects";
import { getV1ProjectsById } from "../src/operations/getV1ProjectsById";

describe("deleteV1ProjectsById", () => {
  // ============================================================================
  // Happy path
  // ============================================================================

  it("happy path - deletes a project", async () => {
    const projectName = `distilled-prisma-proj-del-${testRunId}`;

    await runEffect(
      Effect.gen(function* () {
        // Create a project to delete
        const created = yield* postV1Projects({
          name: projectName,
          region: "us-east-1",
        });
        const projectId = created.data.id;
        expect(projectId).toBeDefined();

        // Delete it
        yield* deleteV1ProjectsById({ id: projectId });

        // Verify it's gone
        const err = yield* getV1ProjectsById({ id: projectId }).pipe(
          Effect.flip,
        );
        expect((err as any)._tag).toBe("NotFound");
      }),
    );
  }, 60_000);

  // ============================================================================
  // Error tests
  // ============================================================================

  it("error - NotFound for non-existent project id", async () => {
    await Effect.runPromise(
      deleteV1ProjectsById({ id: "non-existent-proj-id-00000000" }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["NotFound", "UnprocessableEntity"]).toContain((e as any)._tag);
        }),
        Effect.provide(TestLayer),
      ),
    );
  }, 30_000);

  it("error - BadRequest or UnprocessableEntity for malformed id", async () => {
    await Effect.runPromise(
      deleteV1ProjectsById({ id: "" }).pipe(
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
