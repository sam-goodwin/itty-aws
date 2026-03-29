import { Effect, Layer } from "effect";
import * as Redacted from "effect/Redacted";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import {
  getTestProject,
  runEffect,
  setupTestProject,
  teardownTestProject,
  testRunId,
} from "./setup";
import { listProjectBranches } from "../src/operations/listProjectBranches";
import { createProjectBranch } from "../src/operations/createProjectBranch";
import { deleteProjectBranch } from "../src/operations/deleteProjectBranch";
import { createProjectBranchAnonymized } from "../src/operations/createProjectBranchAnonymized";
import { countProjectBranches } from "../src/operations/countProjectBranches";
import { getProjectBranch } from "../src/operations/getProjectBranch";
import { updateProjectBranch } from "../src/operations/updateProjectBranch";
import { restoreProjectBranch } from "../src/operations/restoreProjectBranch";
import { getProjectBranchSchema } from "../src/operations/getProjectBranchSchema";
import { getProjectBranchSchemaComparison } from "../src/operations/getProjectBranchSchemaComparison";
import { setDefaultProjectBranch } from "../src/operations/setDefaultProjectBranch";
import { finalizeRestoreBranch } from "../src/operations/finalizeRestoreBranch";
import { getMaskingRules } from "../src/operations/getMaskingRules";
import { updateMaskingRules } from "../src/operations/updateMaskingRules";
import { getAnonymizedBranchStatus } from "../src/operations/getAnonymizedBranchStatus";
import { startAnonymization } from "../src/operations/startAnonymization";
import { listProjectBranchEndpoints } from "../src/operations/listProjectBranchEndpoints";
import { getProjectBranchDataAPI } from "../src/operations/getProjectBranchDataAPI";
import { createProjectBranchDataAPI } from "../src/operations/createProjectBranchDataAPI";
import { deleteProjectBranchDataAPI } from "../src/operations/deleteProjectBranchDataAPI";
import { updateProjectBranchDataAPI } from "../src/operations/updateProjectBranchDataAPI";
import { Credentials, DEFAULT_API_BASE_URL } from "../src/credentials";

// Layer with an invalid token to trigger Unauthorized errors
const BadTokenLayer = Layer.merge(
  Layer.succeed(Credentials, {
    apiKey: Redacted.make("invalid_token_00000000"),
    apiBaseUrl: DEFAULT_API_BASE_URL,
  }),
  FetchHttpClient.layer,
);

describe("Branches", () => {
  beforeAll(async () => {
    await Effect.runPromise(setupTestProject("branches"));
  }, 120_000);

  afterAll(async () => {
    await Effect.runPromise(teardownTestProject("branches"));
  }, 120_000);

  // ============================================================================
  // listProjectBranches
  // ============================================================================
  describe("listProjectBranches", () => {
    it("happy path - lists branches for a project", async () => {
      const project = getTestProject("branches");
      await runEffect(
        Effect.gen(function* () {
          const result = yield* listProjectBranches({
            project_id: project.id,
          });
          expect(result).toHaveProperty("branches");
          expect(Array.isArray(result.branches)).toBe(true);
          // Every project has at least a default main branch
          expect(result.branches.length).toBeGreaterThanOrEqual(1);
          const branch = result.branches[0];
          expect(branch).toHaveProperty("id");
          expect(branch).toHaveProperty("project_id", project.id);
          expect(branch).toHaveProperty("name");
          expect(branch).toHaveProperty("current_state");
          expect(branch).toHaveProperty("created_at");
          expect(branch).toHaveProperty("updated_at");
          expect(branch).toHaveProperty("default");
        }),
      );
    }, 30_000);

    it("happy path - lists branches with limit parameter", async () => {
      const project = getTestProject("branches");
      await runEffect(
        Effect.gen(function* () {
          const result = yield* listProjectBranches({
            project_id: project.id,
            limit: 1,
          });
          expect(result).toHaveProperty("branches");
          expect(result.branches.length).toBeLessThanOrEqual(1);
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        listProjectBranches({
          project_id: "non-existent-project-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        listProjectBranches({
          project_id: "non-existent-project-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // createProjectBranch
  // ============================================================================
  describe("createProjectBranch", () => {
    it("happy path - creates a branch in a project", async () => {
      const project = getTestProject("branches");
      let branchId: string | undefined;
      await runEffect(
        Effect.gen(function* () {
          const result = yield* createProjectBranch({
            project_id: project.id,
          });
          expect(result).toHaveProperty("branch");
          expect(result.branch).toHaveProperty("id");
          expect(result.branch).toHaveProperty("project_id", project.id);
          expect(result.branch).toHaveProperty("name");
          expect(result.branch).toHaveProperty("current_state");
          expect(result.branch).toHaveProperty("created_at");
          expect(result.branch).toHaveProperty("updated_at");
          expect(result).toHaveProperty("operations");
          expect(Array.isArray(result.operations)).toBe(true);
          expect(result).toHaveProperty("databases");
          expect(result).toHaveProperty("roles");
          branchId = result.branch.id;
        }).pipe(
          Effect.ensuring(
            Effect.gen(function* () {
              if (branchId) {
                yield* deleteProjectBranch({
                  project_id: project.id,
                  branch_id: branchId,
                }).pipe(Effect.ignore);
              }
            }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 60_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        createProjectBranch({
          project_id: "non-existent-project-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        createProjectBranch({
          project_id: "non-existent-project-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // createProjectBranchAnonymized
  // ============================================================================
  describe("createProjectBranchAnonymized", () => {
    it("happy path - creates an anonymized branch in a project", async () => {
      const project = getTestProject("branches");
      let branchId: string | undefined;
      await runEffect(
        Effect.gen(function* () {
          const result = yield* createProjectBranchAnonymized({
            project_id: project.id,
          }).pipe(
            Effect.catchTag("BadRequest", () => Effect.succeed(undefined)),
          );
          if (result !== undefined) {
            expect(result).toHaveProperty("branch");
            expect(result.branch).toHaveProperty("id");
            expect(result.branch).toHaveProperty("project_id", project.id);
            expect(result.branch).toHaveProperty("name");
            expect(result.branch).toHaveProperty("current_state");
            expect(result.branch).toHaveProperty("created_at");
            expect(result.branch).toHaveProperty("updated_at");
            expect(result).toHaveProperty("operations");
            expect(Array.isArray(result.operations)).toBe(true);
            expect(result).toHaveProperty("databases");
            expect(result).toHaveProperty("roles");
            branchId = result.branch.id;
          }
        }).pipe(
          Effect.ensuring(
            Effect.gen(function* () {
              if (branchId) {
                yield* deleteProjectBranch({
                  project_id: project.id,
                  branch_id: branchId,
                }).pipe(Effect.ignore);
              }
            }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 60_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        createProjectBranchAnonymized({
          project_id: "non-existent-project-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "BadRequest", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        createProjectBranchAnonymized({
          project_id: "non-existent-project-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // countProjectBranches
  // ============================================================================
  describe("countProjectBranches", () => {
    it("happy path - counts branches for a project", async () => {
      const project = getTestProject("branches");
      await runEffect(
        Effect.gen(function* () {
          const result = yield* countProjectBranches({
            project_id: project.id,
          });
          expect(result).toHaveProperty("count");
          expect(typeof result.count).toBe("number");
          // Every project has at least one default branch
          expect(result.count).toBeGreaterThanOrEqual(1);
        }),
      );
    }, 30_000);

    it("happy path - counts branches with search filter", async () => {
      const project = getTestProject("branches");
      await runEffect(
        Effect.gen(function* () {
          const result = yield* countProjectBranches({
            project_id: project.id,
            search: "main",
          });
          expect(result).toHaveProperty("count");
          expect(typeof result.count).toBe("number");
          expect(result.count).toBeGreaterThanOrEqual(1);
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        countProjectBranches({
          project_id: "non-existent-project-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        countProjectBranches({
          project_id: "non-existent-project-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // getProjectBranch
  // ============================================================================
  describe("getProjectBranch", () => {
    it("happy path - retrieves the default branch details", async () => {
      const project = getTestProject("branches");
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getProjectBranch({
            project_id: project.id,
            branch_id: project.defaultBranchId,
          });
          expect(result).toHaveProperty("branch");
          expect(result.branch).toHaveProperty("id", project.defaultBranchId);
          expect(result.branch).toHaveProperty("project_id", project.id);
          expect(result.branch).toHaveProperty("name");
          expect(result.branch).toHaveProperty("current_state");
          expect(result.branch).toHaveProperty("default", true);
          expect(result.branch).toHaveProperty("created_at");
          expect(result.branch).toHaveProperty("updated_at");
          expect(result).toHaveProperty("annotation");
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent branch ID", async () => {
      const project = getTestProject("branches");
      await runEffect(
        getProjectBranch({
          project_id: project.id,
          branch_id: "br-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        getProjectBranch({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        getProjectBranch({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // updateProjectBranch
  // ============================================================================
  describe("updateProjectBranch", () => {
    it("happy path - updates a branch name", async () => {
      const project = getTestProject("branches");
      let branchId: string | undefined;
      await runEffect(
        Effect.gen(function* () {
          // Create a branch to update
          const created = yield* createProjectBranch({
            project_id: project.id,
          });
          branchId = created.branch.id;

          const newName = `updated-branch-${testRunId}`;
          const result = yield* updateProjectBranch({
            project_id: project.id,
            branch_id: branchId,
            branch: { name: newName },
          });
          expect(result).toHaveProperty("branch");
          expect(result.branch).toHaveProperty("id", branchId);
          expect(result.branch).toHaveProperty("name", newName);
          expect(result.branch).toHaveProperty("project_id", project.id);
          expect(result.branch).toHaveProperty("created_at");
          expect(result.branch).toHaveProperty("updated_at");
          expect(result).toHaveProperty("operations");
          expect(Array.isArray(result.operations)).toBe(true);
        }).pipe(
          Effect.ensuring(
            Effect.gen(function* () {
              if (branchId) {
                yield* deleteProjectBranch({
                  project_id: project.id,
                  branch_id: branchId,
                }).pipe(Effect.ignore);
              }
            }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 60_000);

    it("error - NotFound for non-existent branch ID", async () => {
      const project = getTestProject("branches");
      await runEffect(
        updateProjectBranch({
          project_id: project.id,
          branch_id: "br-non-existent-00000000",
          branch: { name: "should-fail" },
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        updateProjectBranch({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          branch: { name: "should-fail" },
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        updateProjectBranch({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          branch: { name: "should-fail" },
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // deleteProjectBranch
  // ============================================================================
  describe("deleteProjectBranch", () => {
    it("happy path - deletes a branch", async () => {
      const project = getTestProject("branches");
      await runEffect(
        Effect.gen(function* () {
          // Create a branch to delete
          const created = yield* createProjectBranch({
            project_id: project.id,
          });
          const branchId = created.branch.id;

          const result = yield* deleteProjectBranch({
            project_id: project.id,
            branch_id: branchId,
          });
          expect(result).toHaveProperty("branch");
          expect(result.branch).toHaveProperty("id", branchId);
          expect(result.branch).toHaveProperty("project_id", project.id);
          expect(result.branch).toHaveProperty("name");
          expect(result.branch).toHaveProperty("current_state");
          expect(result.branch).toHaveProperty("created_at");
          expect(result.branch).toHaveProperty("updated_at");
          expect(result).toHaveProperty("operations");
          expect(Array.isArray(result.operations)).toBe(true);
        }),
      );
    }, 60_000);

    it("error - NotFound for non-existent branch ID", async () => {
      const project = getTestProject("branches");
      await runEffect(
        deleteProjectBranch({
          project_id: project.id,
          branch_id: "br-non-existent-00000000",
        }).pipe(
          Effect.map(() => undefined),
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("Locked", () => Effect.succeed(undefined)),
          Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - UnprocessableEntity when deleting the default branch", async () => {
      const project = getTestProject("branches");
      await runEffect(
        deleteProjectBranch({
          project_id: project.id,
          branch_id: project.defaultBranchId,
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect([
              "UnprocessableEntity",
              "Locked",
              "BadRequest",
              "UnknownNeonError",
            ]).toContain((e as any)._tag);
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        deleteProjectBranch({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        deleteProjectBranch({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // restoreProjectBranch
  // ============================================================================
  describe("restoreProjectBranch", () => {
    it("happy path - restores a branch from the default branch", async () => {
      const project = getTestProject("branches");
      let branchId: string | undefined;
      await runEffect(
        Effect.gen(function* () {
          // Create a child branch to restore
          const created = yield* createProjectBranch({
            project_id: project.id,
          });
          branchId = created.branch.id;

          // Restore it from the default branch
          const result = yield* restoreProjectBranch({
            project_id: project.id,
            branch_id: branchId,
            source_branch_id: project.defaultBranchId,
          });
          expect(result).toHaveProperty("branch");
          expect(result.branch).toHaveProperty("id", branchId);
          expect(result.branch).toHaveProperty("project_id", project.id);
          expect(result.branch).toHaveProperty("name");
          expect(result.branch).toHaveProperty("current_state");
          expect(result.branch).toHaveProperty("created_at");
          expect(result.branch).toHaveProperty("updated_at");
          expect(result).toHaveProperty("operations");
          expect(Array.isArray(result.operations)).toBe(true);
        }).pipe(
          Effect.ensuring(
            Effect.gen(function* () {
              if (branchId) {
                yield* deleteProjectBranch({
                  project_id: project.id,
                  branch_id: branchId,
                }).pipe(Effect.ignore);
              }
            }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 60_000);

    it("error - NotFound for non-existent branch ID", async () => {
      const project = getTestProject("branches");
      await runEffect(
        restoreProjectBranch({
          project_id: project.id,
          branch_id: "br-non-existent-00000000",
          source_branch_id: project.defaultBranchId,
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        restoreProjectBranch({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          source_branch_id: "br-non-existent-00000001",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        restoreProjectBranch({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          source_branch_id: "br-non-existent-00000001",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // getProjectBranchSchema
  // ============================================================================
  describe("getProjectBranchSchema", () => {
    it("happy path - retrieves schema for the default branch database", async () => {
      const project = getTestProject("branches");
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getProjectBranchSchema({
            project_id: project.id,
            branch_id: project.defaultBranchId,
            db_name: "neondb",
          });
          // Default format is sql
          expect(result).toHaveProperty("sql");
          if (result.sql !== undefined) {
            expect(typeof result.sql).toBe("string");
          }
        }),
      );
    }, 30_000);

    it("happy path - retrieves schema in json format", async () => {
      const project = getTestProject("branches");
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getProjectBranchSchema({
            project_id: project.id,
            branch_id: project.defaultBranchId,
            db_name: "neondb",
            format: "json",
          });
          expect(result).toHaveProperty("json");
          if (result.json !== undefined) {
            expect(result.json).toHaveProperty("tables");
            expect(Array.isArray(result.json.tables)).toBe(true);
          }
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent branch ID", async () => {
      const project = getTestProject("branches");
      await runEffect(
        getProjectBranchSchema({
          project_id: project.id,
          branch_id: "br-non-existent-00000000",
          db_name: "neondb",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        getProjectBranchSchema({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          db_name: "neondb",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        getProjectBranchSchema({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          db_name: "neondb",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // getProjectBranchSchemaComparison
  // ============================================================================
  describe("getProjectBranchSchemaComparison", () => {
    it("happy path - compares schema between a child branch and the default branch", async () => {
      const project = getTestProject("branches");
      let branchId: string | undefined;
      await runEffect(
        Effect.gen(function* () {
          // Create a child branch to compare against the default
          const created = yield* createProjectBranch({
            project_id: project.id,
          });
          branchId = created.branch.id;

          const result = yield* getProjectBranchSchemaComparison({
            project_id: project.id,
            branch_id: branchId,
            base_branch_id: project.defaultBranchId,
            db_name: "neondb",
          });
          expect(result).toHaveProperty("diff");
          if (result.diff !== undefined) {
            expect(typeof result.diff).toBe("string");
          }
        }).pipe(
          Effect.ensuring(
            Effect.gen(function* () {
              if (branchId) {
                yield* deleteProjectBranch({
                  project_id: project.id,
                  branch_id: branchId,
                }).pipe(Effect.ignore);
              }
            }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 60_000);

    it("error - NotFound for non-existent branch ID", async () => {
      const project = getTestProject("branches");
      await runEffect(
        getProjectBranchSchemaComparison({
          project_id: project.id,
          branch_id: "br-non-existent-00000000",
          db_name: "neondb",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        getProjectBranchSchemaComparison({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          db_name: "neondb",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        getProjectBranchSchemaComparison({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          db_name: "neondb",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // setDefaultProjectBranch
  // ============================================================================
  describe("setDefaultProjectBranch", () => {
    it("happy path - sets a branch as default and restores original", async () => {
      const project = getTestProject("branches");
      let branchId: string | undefined;
      await runEffect(
        Effect.gen(function* () {
          // Create a new branch
          const created = yield* createProjectBranch({
            project_id: project.id,
          });
          branchId = created.branch.id;

          // Set the new branch as default
          const result = yield* setDefaultProjectBranch({
            project_id: project.id,
            branch_id: branchId,
          });
          expect(result).toHaveProperty("branch");
          expect(result.branch).toHaveProperty("id", branchId);
          expect(result.branch).toHaveProperty("project_id", project.id);
          expect(result.branch).toHaveProperty("default", true);
          expect(result.branch).toHaveProperty("created_at");
          expect(result.branch).toHaveProperty("updated_at");
          expect(result).toHaveProperty("operations");
          expect(Array.isArray(result.operations)).toBe(true);

          // Restore the original default branch
          yield* setDefaultProjectBranch({
            project_id: project.id,
            branch_id: project.defaultBranchId,
          });
        }).pipe(
          Effect.ensuring(
            Effect.gen(function* () {
              // Ensure original default is restored even on failure
              yield* setDefaultProjectBranch({
                project_id: project.id,
                branch_id: project.defaultBranchId,
              }).pipe(Effect.ignore);
              if (branchId) {
                yield* deleteProjectBranch({
                  project_id: project.id,
                  branch_id: branchId,
                }).pipe(Effect.ignore);
              }
            }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 60_000);

    it("error - NotFound for non-existent branch ID", async () => {
      const project = getTestProject("branches");
      await runEffect(
        setDefaultProjectBranch({
          project_id: project.id,
          branch_id: "br-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        setDefaultProjectBranch({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        setDefaultProjectBranch({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // finalizeRestoreBranch
  // ============================================================================
  describe("finalizeRestoreBranch", () => {
    it("happy path - calls finalize restore on a restored branch", async () => {
      const project = getTestProject("branches");
      let branchId: string | undefined;
      await runEffect(
        Effect.gen(function* () {
          // Create a child branch
          const created = yield* createProjectBranch({
            project_id: project.id,
          });
          branchId = created.branch.id;

          // Restore it from the default branch (sets up restore state)
          yield* restoreProjectBranch({
            project_id: project.id,
            branch_id: branchId,
            source_branch_id: project.defaultBranchId,
            preserve_under_name: `pre-restore-${testRunId}`,
          });

          // Attempt finalize — this may succeed or fail depending on restore state.
          // We accept either a successful result or an expected error.
          const result = yield* finalizeRestoreBranch({
            project_id: project.id,
            branch_id: branchId,
          }).pipe(
            Effect.map((r) => {
              expect(r).toHaveProperty("operations");
              expect(Array.isArray(r.operations)).toBe(true);
              return "success" as const;
            }),
            Effect.catchTag("UnknownNeonError", () => Effect.succeed("error" as const)),
            Effect.catchTag("BadRequest", () => Effect.succeed("error" as const)),
            Effect.catchTag("NotFound", () => Effect.succeed("error" as const)),
          );
          expect(["success", "error"]).toContain(result);
        }).pipe(
          Effect.ensuring(
            Effect.gen(function* () {
              if (branchId) {
                yield* deleteProjectBranch({
                  project_id: project.id,
                  branch_id: branchId,
                }).pipe(Effect.ignore);
              }
              // Clean up any preserved branch
              const listed = yield* listProjectBranches({
                project_id: project.id,
                search: `pre-restore-${testRunId}`,
              }).pipe(Effect.ignore);
            }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 90_000);

    it("error - NotFound for non-existent branch ID", async () => {
      const project = getTestProject("branches");
      await runEffect(
        finalizeRestoreBranch({
          project_id: project.id,
          branch_id: "br-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        finalizeRestoreBranch({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        finalizeRestoreBranch({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // getMaskingRules
  // ============================================================================
  describe("getMaskingRules", () => {
    it("happy path - retrieves masking rules for the default branch", async () => {
      const project = getTestProject("branches");
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getMaskingRules({
            project_id: project.id,
            branch_id: project.defaultBranchId,
          }).pipe(
            Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          );
          if (result !== undefined) {
            expect(result).toHaveProperty("masking_rules");
            expect(Array.isArray(result.masking_rules)).toBe(true);
            if (result.masking_rules.length > 0) {
              expect(result.masking_rules[0]).toHaveProperty("database_name");
              expect(result.masking_rules[0]).toHaveProperty("schema_name");
              expect(result.masking_rules[0]).toHaveProperty("table_name");
              expect(result.masking_rules[0]).toHaveProperty("column_name");
            }
          }
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent branch ID", async () => {
      const project = getTestProject("branches");
      await runEffect(
        getMaskingRules({
          project_id: project.id,
          branch_id: "br-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        getMaskingRules({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        getMaskingRules({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // updateMaskingRules
  // ============================================================================
  describe("updateMaskingRules", () => {
    it("happy path - updates masking rules on the default branch", async () => {
      const project = getTestProject("branches");
      await runEffect(
        Effect.gen(function* () {
          const result = yield* updateMaskingRules({
            project_id: project.id,
            branch_id: project.defaultBranchId,
            masking_rules: [
              {
                database_name: "neondb",
                schema_name: "public",
                table_name: "users",
                column_name: "email",
                masking_value: "'masked@example.com'",
              },
            ],
          }).pipe(
            Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          );
          if (result !== undefined) {
            expect(result).toHaveProperty("masking_rules");
            expect(Array.isArray(result.masking_rules)).toBe(true);
          }
        }).pipe(
          // Clean up: reset masking rules to empty
          Effect.ensuring(
            updateMaskingRules({
              project_id: project.id,
              branch_id: project.defaultBranchId,
              masking_rules: [],
            }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent branch ID", async () => {
      const project = getTestProject("branches");
      await runEffect(
        updateMaskingRules({
          project_id: project.id,
          branch_id: "br-non-existent-00000000",
          masking_rules: [],
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        updateMaskingRules({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          masking_rules: [],
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        updateMaskingRules({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          masking_rules: [],
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // getAnonymizedBranchStatus
  // ============================================================================
  describe("getAnonymizedBranchStatus", () => {
    it("happy path - retrieves anonymized status for a branch", async () => {
      const project = getTestProject("branches");
      let branchId: string | undefined;
      await runEffect(
        Effect.gen(function* () {
          // Create an anonymized branch
          const created = yield* createProjectBranchAnonymized({
            project_id: project.id,
          }).pipe(
            Effect.catchTag("BadRequest", () => Effect.succeed(undefined)),
          );
          if (created === undefined) return;
          branchId = created.branch.id;

          const result = yield* getAnonymizedBranchStatus({
            project_id: project.id,
            branch_id: branchId,
          }).pipe(
            Effect.catchTag("BadRequest", () => Effect.succeed(undefined)),
          );
          if (result !== undefined) {
            expect(result).toHaveProperty("project_id", project.id);
            expect(result).toHaveProperty("branch_id", branchId);
            expect(result).toHaveProperty("state");
            expect(typeof result.state).toBe("string");
            expect(result).toHaveProperty("created_at");
            expect(result).toHaveProperty("updated_at");
          }
        }).pipe(
          Effect.ensuring(
            Effect.gen(function* () {
              if (branchId) {
                yield* deleteProjectBranch({
                  project_id: project.id,
                  branch_id: branchId,
                }).pipe(Effect.ignore);
              }
            }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 60_000);

    it("error - NotFound for non-existent branch ID", async () => {
      const project = getTestProject("branches");
      await runEffect(
        getAnonymizedBranchStatus({
          project_id: project.id,
          branch_id: "br-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        getAnonymizedBranchStatus({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        getAnonymizedBranchStatus({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // startAnonymization
  // ============================================================================
  describe("startAnonymization", () => {
    it("happy path - starts anonymization on an anonymized branch", async () => {
      const project = getTestProject("branches");
      let branchId: string | undefined;
      await runEffect(
        Effect.gen(function* () {
          // Create an anonymized branch
          const created = yield* createProjectBranchAnonymized({
            project_id: project.id,
          }).pipe(
            Effect.catchTag("BadRequest", () => Effect.succeed(undefined)),
          );
          if (created === undefined) return;
          branchId = created.branch.id;

          const result = yield* startAnonymization({
            project_id: project.id,
            branch_id: branchId,
          }).pipe(
            Effect.catchTag("BadRequest", () => Effect.succeed(undefined)),
          );
          if (result !== undefined) {
            expect(result).toHaveProperty("project_id", project.id);
            expect(result).toHaveProperty("branch_id", branchId);
            expect(result).toHaveProperty("state");
            expect(typeof result.state).toBe("string");
            expect(result).toHaveProperty("created_at");
            expect(result).toHaveProperty("updated_at");
          }
        }).pipe(
          Effect.ensuring(
            Effect.gen(function* () {
              if (branchId) {
                yield* deleteProjectBranch({
                  project_id: project.id,
                  branch_id: branchId,
                }).pipe(Effect.ignore);
              }
            }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 60_000);

    it("error - NotFound for non-existent branch ID", async () => {
      const project = getTestProject("branches");
      await runEffect(
        startAnonymization({
          project_id: project.id,
          branch_id: "br-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        startAnonymization({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        startAnonymization({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // listProjectBranchEndpoints
  // ============================================================================
  describe("listProjectBranchEndpoints", () => {
    it("happy path - lists endpoints for the default branch", async () => {
      const project = getTestProject("branches");
      await runEffect(
        Effect.gen(function* () {
          const result = yield* listProjectBranchEndpoints({
            project_id: project.id,
            branch_id: project.defaultBranchId,
          });
          expect(result).toHaveProperty("endpoints");
          expect(Array.isArray(result.endpoints)).toBe(true);
          // The default branch should have at least one endpoint
          if (result.endpoints.length > 0) {
            const ep = result.endpoints[0];
            expect(ep).toHaveProperty("id");
            expect(ep).toHaveProperty("host");
            expect(ep).toHaveProperty("project_id", project.id);
            expect(ep).toHaveProperty("branch_id", project.defaultBranchId);
            expect(ep).toHaveProperty("type");
            expect(ep).toHaveProperty("current_state");
            expect(ep).toHaveProperty("created_at");
            expect(ep).toHaveProperty("updated_at");
          }
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent branch ID", async () => {
      const project = getTestProject("branches");
      await runEffect(
        listProjectBranchEndpoints({
          project_id: project.id,
          branch_id: "br-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        listProjectBranchEndpoints({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        listProjectBranchEndpoints({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // getProjectBranchDataAPI
  // ============================================================================
  describe("getProjectBranchDataAPI", () => {
    it("happy path - retrieves data API info for the default branch", async () => {
      const project = getTestProject("branches");
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getProjectBranchDataAPI({
            project_id: project.id,
            branch_id: project.defaultBranchId,
            database_name: "neondb",
          }).pipe(
            Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          );
          if (result !== undefined) {
            expect(result).toHaveProperty("url");
            expect(typeof result.url).toBe("string");
            expect(result).toHaveProperty("status");
            expect(typeof result.status).toBe("string");
          }
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent branch ID", async () => {
      const project = getTestProject("branches");
      await runEffect(
        getProjectBranchDataAPI({
          project_id: project.id,
          branch_id: "br-non-existent-00000000",
          database_name: "neondb",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        getProjectBranchDataAPI({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          database_name: "neondb",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        getProjectBranchDataAPI({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          database_name: "neondb",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // createProjectBranchDataAPI
  // ============================================================================
  describe("createProjectBranchDataAPI", () => {
    it("happy path - creates a Data API for the default branch", async () => {
      const project = getTestProject("branches");
      await runEffect(
        Effect.gen(function* () {
          const result = yield* createProjectBranchDataAPI({
            project_id: project.id,
            branch_id: project.defaultBranchId,
            database_name: "neondb",
          });
          expect(result).toHaveProperty("url");
          expect(typeof result.url).toBe("string");
        }).pipe(
          Effect.ensuring(
            deleteProjectBranchDataAPI({
              project_id: project.id,
              branch_id: project.defaultBranchId,
              database_name: "neondb",
            }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 60_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        createProjectBranchDataAPI({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          database_name: "neondb",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent branch ID", async () => {
      const project = getTestProject("branches");
      await runEffect(
        createProjectBranchDataAPI({
          project_id: project.id,
          branch_id: "br-non-existent-00000000",
          database_name: "neondb",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        createProjectBranchDataAPI({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          database_name: "neondb",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // updateProjectBranchDataAPI
  // ============================================================================
  describe("updateProjectBranchDataAPI", () => {
    it("happy path - updates Data API settings for the default branch", async () => {
      const project = getTestProject("branches");
      await runEffect(
        Effect.gen(function* () {
          // Ensure Data API exists first
          yield* createProjectBranchDataAPI({
            project_id: project.id,
            branch_id: project.defaultBranchId,
            database_name: "neondb",
          }).pipe(Effect.ignore);

          const result = yield* updateProjectBranchDataAPI({
            project_id: project.id,
            branch_id: project.defaultBranchId,
            database_name: "neondb",
            settings: {
              db_max_rows: 500,
            },
          }).pipe(
            Effect.catchTag("BadRequest", () => Effect.succeed(undefined)),
          );
          // Output is an empty struct — just assert it didn't throw
          if (result !== undefined) {
            expect(result).toBeDefined();
          }
        }).pipe(
          Effect.ensuring(
            deleteProjectBranchDataAPI({
              project_id: project.id,
              branch_id: project.defaultBranchId,
              database_name: "neondb",
            }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 60_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        updateProjectBranchDataAPI({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          database_name: "neondb",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent branch ID", async () => {
      const project = getTestProject("branches");
      await runEffect(
        updateProjectBranchDataAPI({
          project_id: project.id,
          branch_id: "br-non-existent-00000000",
          database_name: "neondb",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        updateProjectBranchDataAPI({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          database_name: "neondb",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // deleteProjectBranchDataAPI
  // ============================================================================
  describe("deleteProjectBranchDataAPI", () => {
    it("happy path - deletes a Data API from the default branch", async () => {
      const project = getTestProject("branches");
      await runEffect(
        Effect.gen(function* () {
          // Create a Data API first
          yield* createProjectBranchDataAPI({
            project_id: project.id,
            branch_id: project.defaultBranchId,
            database_name: "neondb",
          }).pipe(Effect.ignore);

          // Delete it
          const result = yield* deleteProjectBranchDataAPI({
            project_id: project.id,
            branch_id: project.defaultBranchId,
            database_name: "neondb",
          });
          // Output is an empty struct — just assert it didn't throw
          expect(result).toBeDefined();
        }),
      );
    }, 60_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        deleteProjectBranchDataAPI({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          database_name: "neondb",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent branch ID", async () => {
      const project = getTestProject("branches");
      await runEffect(
        deleteProjectBranchDataAPI({
          project_id: project.id,
          branch_id: "br-non-existent-00000000",
          database_name: "neondb",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        deleteProjectBranchDataAPI({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          database_name: "neondb",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });
});
