import { Effect, Schedule } from "effect";
import { describe, expect, it, beforeAll, afterAll } from "vitest";
import {
  runEffect,
  testRunId,
  setupTestProject,
  teardownTestProject,
  getTestProject,
} from "./setup";
import { createProjectBranchDatabase } from "../src/operations/createProjectBranchDatabase";
import { getProjectBranchDatabase } from "../src/operations/getProjectBranchDatabase";
import { updateProjectBranchDatabase } from "../src/operations/updateProjectBranchDatabase";
import { deleteProjectBranchDatabase } from "../src/operations/deleteProjectBranchDatabase";
import { listProjectBranchDatabases } from "../src/operations/listProjectBranchDatabases";
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

describe("Databases", () => {
  beforeAll(async () => {
    await runEffect(setupTestProject("databases"));
  }, 120_000);

  afterAll(async () => {
    await runEffect(teardownTestProject("databases"));
  }, 60_000);

  describe("createProjectBranchDatabase", () => {
    it("happy path - creates a database", async () => {
      const project = getTestProject("databases");
      const dbName = `testdb_${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          const result = yield* createProjectBranchDatabase({
            project_id: project.id,
            branch_id: project.defaultBranchId,
            database: {
              name: dbName,
              owner_name: "neondb_owner",
            },
          });
          expect(result.database).toBeDefined();
          expect(result.database.name).toBe(dbName);
          expect(result.database.owner_name).toBe("neondb_owner");
        }).pipe(
          Effect.ensuring(
            deleteProjectBranchDatabase({
              project_id: project.id,
              branch_id: project.defaultBranchId,
              database_name: dbName,
            }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 60_000);

    it("error - NotFound for non-existent project", async () => {
      await runEffect(
        createProjectBranchDatabase({
          project_id: "non-existent-project-id",
          branch_id: "br-non-existent-000000",
          database: {
            name: "testdb",
            owner_name: "neondb_owner",
          },
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);

    it("error - Conflict for duplicate database name", async () => {
      const project = getTestProject("databases");
      const dbName = `testdb_dup_${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* createProjectBranchDatabase({
            project_id: project.id,
            branch_id: project.defaultBranchId,
            database: {
              name: dbName,
              owner_name: "neondb_owner",
            },
          });
          // Wait for the operation to complete before creating a duplicate
          yield* waitForOps(project.id);
          // Try creating the same database again - retry on Locked errors
          const error = yield* Effect.retry(
            createProjectBranchDatabase({
              project_id: project.id,
              branch_id: project.defaultBranchId,
              database: {
                name: dbName,
                owner_name: "neondb_owner",
              },
            }).pipe(
              Effect.flip,
              Effect.flatMap((e) =>
                e._tag === "Locked"
                  ? Effect.fail(e)
                  : Effect.succeed(e),
              ),
            ),
            {
              while: (e) => e._tag === "Locked",
              schedule: Schedule.both(
                Schedule.recurs(10),
                Schedule.spaced("3 seconds"),
              ),
            },
          );
          expect(error._tag).toBe("Conflict");
        }).pipe(
          Effect.ensuring(
            deleteProjectBranchDatabase({
              project_id: project.id,
              branch_id: project.defaultBranchId,
              database_name: dbName,
            }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 120_000);
  });

  describe("getProjectBranchDatabase", () => {
    it("happy path - retrieves database details", async () => {
      const project = getTestProject("databases");
      await runEffect(
        Effect.gen(function* () {
          // Default database "neondb" should exist
          const result = yield* getProjectBranchDatabase({
            project_id: project.id,
            branch_id: project.defaultBranchId,
            database_name: "neondb",
          });
          expect(result.database.name).toBe("neondb");
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent database", async () => {
      const project = getTestProject("databases");
      await runEffect(
        getProjectBranchDatabase({
          project_id: project.id,
          branch_id: project.defaultBranchId,
          database_name: "non_existent_db",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });

  describe("updateProjectBranchDatabase", () => {
    it("happy path - updates database owner", async () => {
      const project = getTestProject("databases");
      const dbName = `testdb_upd_${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* createProjectBranchDatabase({
            project_id: project.id,
            branch_id: project.defaultBranchId,
            database: {
              name: dbName,
              owner_name: "neondb_owner",
            },
          });
          yield* waitForOps(project.id);
          const result = yield* updateProjectBranchDatabase({
            project_id: project.id,
            branch_id: project.defaultBranchId,
            database_name: dbName,
            database: { owner_name: "neondb_owner" },
          });
          expect(result.database.name).toBe(dbName);
        }).pipe(
          Effect.ensuring(
            deleteProjectBranchDatabase({
              project_id: project.id,
              branch_id: project.defaultBranchId,
              database_name: dbName,
            }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 120_000);

    it("error - NotFound for non-existent database", async () => {
      const project = getTestProject("databases");
      await runEffect(
        updateProjectBranchDatabase({
          project_id: project.id,
          branch_id: project.defaultBranchId,
          database_name: "non_existent_db",
          database: { owner_name: "neondb_owner" },
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });

  describe("deleteProjectBranchDatabase", () => {
    it("happy path - deletes a database", async () => {
      const project = getTestProject("databases");
      const dbName = `testdb_del_${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* createProjectBranchDatabase({
            project_id: project.id,
            branch_id: project.defaultBranchId,
            database: {
              name: dbName,
              owner_name: "neondb_owner",
            },
          });
          yield* waitForOps(project.id);
          const result = yield* deleteProjectBranchDatabase({
            project_id: project.id,
            branch_id: project.defaultBranchId,
            database_name: dbName,
          });
          expect(result.database.name).toBe(dbName);
        }),
      );
    }, 120_000);

    it("error - NotFound for non-existent project", async () => {
      await runEffect(
        deleteProjectBranchDatabase({
          project_id: "non-existent-project-id",
          branch_id: "br-non-existent-000000",
          database_name: "non_existent_db",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });

  describe("listProjectBranchDatabases", () => {
    it("happy path - lists databases", async () => {
      const project = getTestProject("databases");
      await runEffect(
        Effect.gen(function* () {
          const result = yield* listProjectBranchDatabases({
            project_id: project.id,
            branch_id: project.defaultBranchId,
          });
          expect(result.databases).toBeDefined();
          expect(result.databases.length).toBeGreaterThan(0);
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent project", async () => {
      await runEffect(
        listProjectBranchDatabases({
          project_id: "non-existent-project-id",
          branch_id: "br-non-existent-000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });
});
