import { Effect } from "effect";
import { describe, expect, it, beforeAll, afterAll } from "vitest";
import {
  runEffect,
  setupTestProject,
  teardownTestProject,
  getTestProject,
} from "./setup";
import { getProjectOperation } from "../src/operations/getProjectOperation";
import { listProjectOperations } from "../src/operations/listProjectOperations";

describe("Operations", () => {
  beforeAll(async () => {
    await runEffect(setupTestProject("operations"));
  }, 120_000);

  afterAll(async () => {
    await runEffect(teardownTestProject("operations"));
  }, 60_000);

  describe("listProjectOperations", () => {
    it("happy path - lists operations", async () => {
      const project = getTestProject("operations");
      await runEffect(
        Effect.gen(function* () {
          const result = yield* listProjectOperations({
            project_id: project.id,
          });
          expect(result.operations).toBeDefined();
          expect(result.operations.length).toBeGreaterThan(0);
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent project", async () => {
      await runEffect(
        listProjectOperations({
          project_id: "non-existent-project-id",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });

  describe("getProjectOperation", () => {
    it("happy path - retrieves operation details", async () => {
      const project = getTestProject("operations");
      await runEffect(
        Effect.gen(function* () {
          // Get a real operation ID from the list
          const ops = yield* listProjectOperations({
            project_id: project.id,
          });
          expect(ops.operations.length).toBeGreaterThan(0);
          const operationId = ops.operations[0].id;

          const result = yield* getProjectOperation({
            project_id: project.id,
            operation_id: operationId,
          });
          expect(result.operation.id).toBe(operationId);
          expect(result.operation.project_id).toBe(project.id);
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent operation", async () => {
      const project = getTestProject("operations");
      await runEffect(
        getProjectOperation({
          project_id: project.id,
          operation_id: "00000000-0000-0000-0000-000000000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });
});
