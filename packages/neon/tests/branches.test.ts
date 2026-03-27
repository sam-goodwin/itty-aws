import { Effect } from "effect";
import { describe, expect, it, beforeAll, afterAll } from "vitest";
import {
  runEffect,
  testRunId,
  setupTestProject,
  teardownTestProject,
  getTestProject,
} from "./setup";
import { createProjectBranch } from "../src/operations/createProjectBranch";
import { getProjectBranch } from "../src/operations/getProjectBranch";
import { updateProjectBranch } from "../src/operations/updateProjectBranch";
import { deleteProjectBranch } from "../src/operations/deleteProjectBranch";
import { listProjectBranches } from "../src/operations/listProjectBranches";
import { countProjectBranches } from "../src/operations/countProjectBranches";
import { setDefaultProjectBranch } from "../src/operations/setDefaultProjectBranch";
import { restoreProjectBranch } from "../src/operations/restoreProjectBranch";

describe("Branches", () => {
  beforeAll(async () => {
    await runEffect(setupTestProject("branches"));
  }, 120_000);

  afterAll(async () => {
    await runEffect(teardownTestProject("branches"));
  }, 60_000);

  describe("createProjectBranch", () => {
    it("happy path - creates a branch", async () => {
      const project = getTestProject("branches");
      const branchName = `test-branch-create-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          const result = yield* createProjectBranch({
            project_id: project.id,
          });
          expect(result.branch).toBeDefined();
          expect(result.branch.id).toBeDefined();
          expect(result.branch.project_id).toBe(project.id);
        }).pipe(
          // branches auto-cleanup with project teardown
        ),
      );
    }, 60_000);
  });

  describe("getProjectBranch", () => {
    it("happy path - retrieves branch details", async () => {
      const project = getTestProject("branches");
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getProjectBranch({
            project_id: project.id,
            branch_id: project.defaultBranchId,
          });
          expect(result.branch.id).toBe(project.defaultBranchId);
          expect(result.branch.project_id).toBe(project.id);
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent branch", async () => {
      const project = getTestProject("branches");
      await runEffect(
        getProjectBranch({
          project_id: project.id,
          branch_id: "br-non-existent-000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });

  describe("updateProjectBranch", () => {
    it("happy path - updates branch name", async () => {
      const project = getTestProject("branches");
      await runEffect(
        Effect.gen(function* () {
          const created = yield* createProjectBranch({
            project_id: project.id,
          });
          const newName = `updated-branch-${testRunId}`;
          const result = yield* updateProjectBranch({
            project_id: project.id,
            branch_id: created.branch.id,
            branch: { name: newName },
          });
          expect(result.branch.name).toBe(newName);
        }),
      );
    }, 60_000);

    it("error - NotFound for non-existent branch", async () => {
      const project = getTestProject("branches");
      await runEffect(
        updateProjectBranch({
          project_id: project.id,
          branch_id: "br-non-existent-000000",
          branch: { name: "test" },
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });

  describe("deleteProjectBranch", () => {
    it("happy path - deletes a branch", async () => {
      const project = getTestProject("branches");
      await runEffect(
        Effect.gen(function* () {
          const created = yield* createProjectBranch({
            project_id: project.id,
          });
          const result = yield* deleteProjectBranch({
            project_id: project.id,
            branch_id: created.branch.id,
          });
          expect(result.branch.id).toBe(created.branch.id);
        }),
      );
    }, 60_000);

    it("error - NotFound for non-existent project", async () => {
      await runEffect(
        deleteProjectBranch({
          project_id: "non-existent-project-id",
          branch_id: "br-non-existent-000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });

  describe("listProjectBranches", () => {
    it("happy path - lists branches", async () => {
      const project = getTestProject("branches");
      await runEffect(
        Effect.gen(function* () {
          const result = yield* listProjectBranches({
            project_id: project.id,
          });
          expect(result.branches).toBeDefined();
          expect(result.branches.length).toBeGreaterThan(0);
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent project", async () => {
      await runEffect(
        listProjectBranches({
          project_id: "non-existent-project-id",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });

  describe("countProjectBranches", () => {
    it("happy path - counts branches", async () => {
      const project = getTestProject("branches");
      await runEffect(
        Effect.gen(function* () {
          const result = yield* countProjectBranches({
            project_id: project.id,
          });
          expect(result.count).toBeGreaterThan(0);
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent project", async () => {
      await runEffect(
        countProjectBranches({
          project_id: "non-existent-project-id",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });

  describe("setDefaultProjectBranch", () => {
    it("happy path - sets default branch", async () => {
      const project = getTestProject("branches");
      await runEffect(
        Effect.gen(function* () {
          // Create a new branch
          const created = yield* createProjectBranch({
            project_id: project.id,
          });
          // Set it as default
          const result = yield* setDefaultProjectBranch({
            project_id: project.id,
            branch_id: created.branch.id,
          });
          expect(result.branch.id).toBe(created.branch.id);
          expect(result.branch.default).toBe(true);
          // Restore original default
          yield* setDefaultProjectBranch({
            project_id: project.id,
            branch_id: project.defaultBranchId,
          });
        }),
      );
    }, 60_000);

    it("error - NotFound for non-existent branch", async () => {
      const project = getTestProject("branches");
      await runEffect(
        setDefaultProjectBranch({
          project_id: project.id,
          branch_id: "br-non-existent-000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });

  describe("restoreProjectBranch", () => {
    it("error - NotFound for non-existent branch", async () => {
      const project = getTestProject("branches");
      await runEffect(
        restoreProjectBranch({
          project_id: project.id,
          branch_id: "br-non-existent-000000",
          source_branch_id: project.defaultBranchId,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });
});
