import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { TestLayer, runEffect, testRunId } from "./setup";
import { postV1Projects } from "../src/operations/postV1Projects";
import { deleteV1ProjectsById } from "../src/operations/deleteV1ProjectsById";

describe("postV1Projects", () => {
  // ============================================================================
  // Happy path
  // ============================================================================

  it("happy path - creates a project", async () => {
    const projectName = `distilled-prisma-proj-create-${testRunId}`;

    await runEffect(
      Effect.gen(function* () {
        const result = yield* postV1Projects({
          name: projectName,
          region: "us-east-1",
        });

        expect(result.data.id).toBeDefined();
        expect(result.data.name).toBe(projectName);
        expect(result.data.workspace).toBeDefined();
        expect(result.data.workspace.id).toBeDefined();

        return result;
      }).pipe(
        Effect.tap((result) =>
          deleteV1ProjectsById({ id: result.data.id }).pipe(Effect.ignore),
        ),
      ),
    );
  }, 60_000);

  it("happy path - creates a project with a database", async () => {
    const projectName = `distilled-prisma-proj-db-${testRunId}`;

    await runEffect(
      Effect.gen(function* () {
        const result = yield* postV1Projects({
          name: projectName,
          createDatabase: true,
          region: "us-east-1",
        });

        expect(result.data.id).toBeDefined();
        expect(result.data.name).toBe(projectName);
        expect(result.data.database).toBeDefined();
        expect(result.data.database).not.toBeNull();
        expect(result.data.database!.id).toBeDefined();
        expect(result.data.database!.status).toBeDefined();

        return result;
      }).pipe(
        Effect.tap((result) =>
          deleteV1ProjectsById({ id: result.data.id }).pipe(Effect.ignore),
        ),
      ),
    );
  }, 60_000);

  // ============================================================================
  // Error tests
  // ============================================================================

  it("error - UnprocessableEntity for empty name", async () => {
    await Effect.runPromise(
      postV1Projects({
        name: "",
        region: "us-east-1",
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
