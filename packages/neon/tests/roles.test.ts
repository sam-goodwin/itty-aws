import { Effect, Schedule } from "effect";
import { describe, expect, it, beforeAll, afterAll } from "vitest";
import {
  runEffect,
  testRunId,
  setupTestProject,
  teardownTestProject,
  getTestProject,
} from "./setup";
import { createProjectBranchRole } from "../src/operations/createProjectBranchRole";
import { getProjectBranchRole } from "../src/operations/getProjectBranchRole";
import { deleteProjectBranchRole } from "../src/operations/deleteProjectBranchRole";
import { listProjectBranchRoles } from "../src/operations/listProjectBranchRoles";
import { getProjectBranchRolePassword } from "../src/operations/getProjectBranchRolePassword";
import { resetProjectBranchRolePassword } from "../src/operations/resetProjectBranchRolePassword";
import { listProjectOperations } from "../src/operations/listProjectOperations";

const waitForOps = (projectId: string) =>
  Effect.retry(
    listProjectOperations({ project_id: projectId, limit: 10 }).pipe(
      Effect.flatMap((result) => {
        const pending = result.operations.filter(
          (op) => op.status === "running" || op.status === "scheduling",
        );
        if (pending.length > 0) return Effect.fail("pending" as const);
        return Effect.succeed(result);
      }),
    ),
    {
      schedule: Schedule.both(Schedule.recurs(30), Schedule.spaced("3 seconds")),
      while: (e) => e === "pending",
    },
  );

describe("Roles", () => {
  beforeAll(async () => {
    await runEffect(setupTestProject("roles"));
  }, 120_000);

  afterAll(async () => {
    await runEffect(teardownTestProject("roles"));
  }, 60_000);

  describe("createProjectBranchRole", () => {
    it("happy path - creates a role", async () => {
      const project = getTestProject("roles");
      const roleName = `testrole_${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          const result = yield* createProjectBranchRole({
            project_id: project.id,
            branch_id: project.defaultBranchId,
            role: { name: roleName },
          });
          expect(result.role).toBeDefined();
          expect(result.role.name).toBe(roleName);
        }).pipe(
          Effect.ensuring(
            deleteProjectBranchRole({
              project_id: project.id,
              branch_id: project.defaultBranchId,
              role_name: roleName,
            }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 60_000);

    it("error - NotFound for non-existent project", async () => {
      await runEffect(
        createProjectBranchRole({
          project_id: "non-existent-project-id",
          branch_id: "br-non-existent-000000",
          role: { name: "testrole" },
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);

    it("error - Conflict for duplicate role name", async () => {
      const project = getTestProject("roles");
      const roleName = `testrole_dup_${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* createProjectBranchRole({
            project_id: project.id,
            branch_id: project.defaultBranchId,
            role: { name: roleName },
          });
          yield* createProjectBranchRole({
            project_id: project.id,
            branch_id: project.defaultBranchId,
            role: { name: roleName },
          }).pipe(
            Effect.flip,
            Effect.map((e) => expect(e._tag).toBe("Conflict")),
          );
        }).pipe(
          Effect.ensuring(
            deleteProjectBranchRole({
              project_id: project.id,
              branch_id: project.defaultBranchId,
              role_name: roleName,
            }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 60_000);
  });

  describe("getProjectBranchRole", () => {
    it("happy path - retrieves role details", async () => {
      const project = getTestProject("roles");
      await runEffect(
        Effect.gen(function* () {
          // Default role "neondb_owner" should exist
          const result = yield* getProjectBranchRole({
            project_id: project.id,
            branch_id: project.defaultBranchId,
            role_name: "neondb_owner",
          });
          expect(result.role.name).toBe("neondb_owner");
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent role", async () => {
      const project = getTestProject("roles");
      await runEffect(
        getProjectBranchRole({
          project_id: project.id,
          branch_id: project.defaultBranchId,
          role_name: "non_existent_role",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });

  describe("deleteProjectBranchRole", () => {
    it("happy path - deletes a role", async () => {
      const project = getTestProject("roles");
      const roleName = `testrole_del_${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* createProjectBranchRole({
            project_id: project.id,
            branch_id: project.defaultBranchId,
            role: { name: roleName },
          });
          yield* waitForOps(project.id);
          const result = yield* deleteProjectBranchRole({
            project_id: project.id,
            branch_id: project.defaultBranchId,
            role_name: roleName,
          });
          expect(result.role.name).toBe(roleName);
        }),
      );
    }, 120_000);

    it("error - NotFound for non-existent project", async () => {
      await runEffect(
        deleteProjectBranchRole({
          project_id: "non-existent-project-id",
          branch_id: "br-non-existent-000000",
          role_name: "non_existent_role",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });

  describe("listProjectBranchRoles", () => {
    it("happy path - lists roles", async () => {
      const project = getTestProject("roles");
      await runEffect(
        Effect.gen(function* () {
          const result = yield* listProjectBranchRoles({
            project_id: project.id,
            branch_id: project.defaultBranchId,
          });
          expect(result.roles).toBeDefined();
          expect(result.roles.length).toBeGreaterThan(0);
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent project", async () => {
      await runEffect(
        listProjectBranchRoles({
          project_id: "non-existent-project-id",
          branch_id: "br-non-existent-000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });

  describe("getProjectBranchRolePassword", () => {
    it("happy path - retrieves role password", async () => {
      const project = getTestProject("roles");
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getProjectBranchRolePassword({
            project_id: project.id,
            branch_id: project.defaultBranchId,
            role_name: "neondb_owner",
          });
          expect(result.password).toBeDefined();
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent role", async () => {
      const project = getTestProject("roles");
      await runEffect(
        getProjectBranchRolePassword({
          project_id: project.id,
          branch_id: project.defaultBranchId,
          role_name: "non_existent_role",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });

  describe("resetProjectBranchRolePassword", () => {
    it("happy path - resets role password", async () => {
      const project = getTestProject("roles");
      const roleName = `testrole_reset_${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* createProjectBranchRole({
            project_id: project.id,
            branch_id: project.defaultBranchId,
            role: { name: roleName },
          });
          yield* waitForOps(project.id);
          const result = yield* resetProjectBranchRolePassword({
            project_id: project.id,
            branch_id: project.defaultBranchId,
            role_name: roleName,
          });
          expect(result.role.name).toBe(roleName);
        }).pipe(
          Effect.ensuring(
            deleteProjectBranchRole({
              project_id: project.id,
              branch_id: project.defaultBranchId,
              role_name: roleName,
            }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 120_000);

    it("error - NotFound for non-existent role", async () => {
      const project = getTestProject("roles");
      await runEffect(
        resetProjectBranchRolePassword({
          project_id: project.id,
          branch_id: project.defaultBranchId,
          role_name: "non_existent_role",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });
});
