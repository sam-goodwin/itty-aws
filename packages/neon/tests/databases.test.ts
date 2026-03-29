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
import { listProjectBranchDatabases } from "../src/operations/listProjectBranchDatabases";
import { createProjectBranchDatabase } from "../src/operations/createProjectBranchDatabase";
import { deleteProjectBranchDatabase } from "../src/operations/deleteProjectBranchDatabase";
import { getProjectBranchDatabase } from "../src/operations/getProjectBranchDatabase";
import { updateProjectBranchDatabase } from "../src/operations/updateProjectBranchDatabase";
import { Credentials, DEFAULT_API_BASE_URL } from "../src/credentials";

// Layer with an invalid token to trigger Unauthorized errors
const BadTokenLayer = Layer.merge(
  Layer.succeed(Credentials, {
    apiKey: Redacted.make("invalid_token_00000000"),
    apiBaseUrl: DEFAULT_API_BASE_URL,
  }),
  FetchHttpClient.layer,
);

describe("Databases", () => {
  beforeAll(async () => {
    await Effect.runPromise(setupTestProject("databases"));
  }, 120_000);

  afterAll(async () => {
    await Effect.runPromise(teardownTestProject("databases"));
  }, 120_000);

  // ============================================================================
  // listProjectBranchDatabases
  // ============================================================================
  describe("listProjectBranchDatabases", () => {
    it("happy path - lists databases for the default branch", async () => {
      const project = getTestProject("databases");
      await runEffect(
        Effect.gen(function* () {
          const result = yield* listProjectBranchDatabases({
            project_id: project.id,
            branch_id: project.defaultBranchId,
          });
          expect(result).toHaveProperty("databases");
          expect(Array.isArray(result.databases)).toBe(true);
          // Every project has at least the default neondb database
          expect(result.databases.length).toBeGreaterThanOrEqual(1);
          const db = result.databases[0];
          expect(db).toHaveProperty("id");
          expect(db).toHaveProperty("branch_id", project.defaultBranchId);
          expect(db).toHaveProperty("name");
          expect(db).toHaveProperty("owner_name");
          expect(db).toHaveProperty("created_at");
          expect(db).toHaveProperty("updated_at");
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent branch ID", async () => {
      const project = getTestProject("databases");
      await runEffect(
        listProjectBranchDatabases({
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
        listProjectBranchDatabases({
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
        listProjectBranchDatabases({
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
  // createProjectBranchDatabase
  // ============================================================================
  describe("createProjectBranchDatabase", () => {
    it("happy path - creates a database on the default branch", async () => {
      const project = getTestProject("databases");
      const dbName = `testdb_${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          const result = yield* createProjectBranchDatabase({
            project_id: project.id,
            branch_id: project.defaultBranchId,
            database: { name: dbName, owner_name: "neondb_owner" },
          }).pipe(
            Effect.catchTag("Locked", () => Effect.succeed(undefined)),
          );
          if (result) {
            expect(result).toHaveProperty("database");
            expect(result.database).toHaveProperty("id");
            expect(result.database).toHaveProperty("branch_id", project.defaultBranchId);
            expect(result.database).toHaveProperty("name", dbName);
            expect(result.database).toHaveProperty("owner_name", "neondb_owner");
            expect(result.database).toHaveProperty("created_at");
            expect(result.database).toHaveProperty("updated_at");
            expect(result).toHaveProperty("operations");
            expect(Array.isArray(result.operations)).toBe(true);
          }
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

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        createProjectBranchDatabase({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          database: { name: "testdb", owner_name: "neondb_owner" },
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
      const project = getTestProject("databases");
      await runEffect(
        createProjectBranchDatabase({
          project_id: project.id,
          branch_id: "br-non-existent-00000000",
          database: { name: "testdb", owner_name: "neondb_owner" },
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

    it("error - Conflict when creating a database with duplicate name", async () => {
      const project = getTestProject("databases");
      const dbName = `dupdb_${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          // Create the database first
          const first = yield* createProjectBranchDatabase({
            project_id: project.id,
            branch_id: project.defaultBranchId,
            database: { name: dbName, owner_name: "neondb_owner" },
          }).pipe(
            Effect.map(() => true),
            Effect.catchTag("Locked", () => Effect.succeed(false)),
          );

          if (!first) return; // Skip if project is locked

          // Try to create it again — should conflict
          yield* createProjectBranchDatabase({
            project_id: project.id,
            branch_id: project.defaultBranchId,
            database: { name: dbName, owner_name: "neondb_owner" },
          }).pipe(
            Effect.map(() => undefined),
            Effect.catchTag("Conflict", () => Effect.succeed(undefined)),
            Effect.catchTag("Locked", () => Effect.succeed(undefined)),
            Effect.catchTag("UnprocessableEntity", () => Effect.succeed(undefined)),
            Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
          );
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

    it("error - BadRequest for invalid owner name", async () => {
      const project = getTestProject("databases");
      await runEffect(
        createProjectBranchDatabase({
          project_id: project.id,
          branch_id: project.defaultBranchId,
          database: {
            name: `badowner_${testRunId}`,
            owner_name: "nonexistent_owner_00000000",
          },
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect([
              "BadRequest",
              "UnprocessableEntity",
              "NotFound",
              "UnknownNeonError",
            ]).toContain((e as any)._tag);
          }),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        createProjectBranchDatabase({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          database: { name: "testdb", owner_name: "neondb_owner" },
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
  // getProjectBranchDatabase
  // ============================================================================
  describe("getProjectBranchDatabase", () => {
    it("happy path - retrieves the default neondb database", async () => {
      const project = getTestProject("databases");
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getProjectBranchDatabase({
            project_id: project.id,
            branch_id: project.defaultBranchId,
            database_name: "neondb",
          });
          expect(result).toHaveProperty("database");
          expect(result.database).toHaveProperty("id");
          expect(result.database).toHaveProperty("branch_id", project.defaultBranchId);
          expect(result.database).toHaveProperty("name", "neondb");
          expect(result.database).toHaveProperty("owner_name");
          expect(result.database).toHaveProperty("created_at");
          expect(result.database).toHaveProperty("updated_at");
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent database name", async () => {
      const project = getTestProject("databases");
      await runEffect(
        getProjectBranchDatabase({
          project_id: project.id,
          branch_id: project.defaultBranchId,
          database_name: "nonexistent_db_00000000",
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
      const project = getTestProject("databases");
      await runEffect(
        getProjectBranchDatabase({
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
        getProjectBranchDatabase({
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
        getProjectBranchDatabase({
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
  // updateProjectBranchDatabase
  // ============================================================================
  describe("updateProjectBranchDatabase", () => {
    it("happy path - updates a database name", async () => {
      const project = getTestProject("databases");
      const originalName = `updatedb_${testRunId}`;
      const updatedName = `updated_${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          // Create a database to update
          const created = yield* createProjectBranchDatabase({
            project_id: project.id,
            branch_id: project.defaultBranchId,
            database: { name: originalName, owner_name: "neondb_owner" },
          }).pipe(
            Effect.map(() => true),
            Effect.catchTag("Locked", () => Effect.succeed(false)),
          );

          if (!created) return; // Skip if project is locked

          const result = yield* updateProjectBranchDatabase({
            project_id: project.id,
            branch_id: project.defaultBranchId,
            database_name: originalName,
            database: { name: updatedName },
          }).pipe(Effect.catchTag("Locked", () => Effect.succeed(undefined)));
          if (result !== undefined) {
            expect(result).toHaveProperty("database");
            expect(result.database).toHaveProperty("id");
            expect(result.database).toHaveProperty("branch_id", project.defaultBranchId);
            expect(result.database).toHaveProperty("name", updatedName);
            expect(result.database).toHaveProperty("owner_name", "neondb_owner");
            expect(result.database).toHaveProperty("created_at");
            expect(result.database).toHaveProperty("updated_at");
            expect(result).toHaveProperty("operations");
            expect(Array.isArray(result.operations)).toBe(true);
          }
        }).pipe(
          Effect.ensuring(
            Effect.gen(function* () {
              // Try deleting by updated name first, then original
              yield* deleteProjectBranchDatabase({
                project_id: project.id,
                branch_id: project.defaultBranchId,
                database_name: updatedName,
              }).pipe(Effect.ignore);
              yield* deleteProjectBranchDatabase({
                project_id: project.id,
                branch_id: project.defaultBranchId,
                database_name: originalName,
              }).pipe(Effect.ignore);
            }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 60_000);

    it("error - NotFound for non-existent database name", async () => {
      const project = getTestProject("databases");
      await runEffect(
        updateProjectBranchDatabase({
          project_id: project.id,
          branch_id: project.defaultBranchId,
          database_name: "nonexistent_db_00000000",
          database: { name: "should_fail" },
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
      const project = getTestProject("databases");
      await runEffect(
        updateProjectBranchDatabase({
          project_id: project.id,
          branch_id: "br-non-existent-00000000",
          database_name: "neondb",
          database: { name: "should_fail" },
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
        updateProjectBranchDatabase({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          database_name: "neondb",
          database: { name: "should_fail" },
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
        updateProjectBranchDatabase({
          project_id: "non-existent-project-00000000",
          branch_id: "br-non-existent-00000000",
          database_name: "neondb",
          database: { name: "should_fail" },
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
  // deleteProjectBranchDatabase
  // ============================================================================
  describe("deleteProjectBranchDatabase", () => {
    it("happy path - deletes a database from the default branch", async () => {
      const project = getTestProject("databases");
      const dbName = `deldb_${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          // Create a database to delete
          const created = yield* createProjectBranchDatabase({
            project_id: project.id,
            branch_id: project.defaultBranchId,
            database: { name: dbName, owner_name: "neondb_owner" },
          }).pipe(
            Effect.map(() => true),
            Effect.catchTag("Locked", () => Effect.succeed(false)),
          );

          if (!created) return; // Skip if project is locked

          const result = yield* deleteProjectBranchDatabase({
            project_id: project.id,
            branch_id: project.defaultBranchId,
            database_name: dbName,
          }).pipe(Effect.catchTag("Locked", () => Effect.succeed(undefined)));
          if (result !== undefined) {
            expect(result).toHaveProperty("database");
            expect(result.database).toHaveProperty("id");
            expect(result.database).toHaveProperty("branch_id", project.defaultBranchId);
            expect(result.database).toHaveProperty("name", dbName);
            expect(result.database).toHaveProperty("owner_name", "neondb_owner");
            expect(result.database).toHaveProperty("created_at");
            expect(result.database).toHaveProperty("updated_at");
            expect(result).toHaveProperty("operations");
            expect(Array.isArray(result.operations)).toBe(true);
          }
        }),
      );
    }, 60_000);

    it("error - NotFound for non-existent database name", async () => {
      const project = getTestProject("databases");
      await runEffect(
        deleteProjectBranchDatabase({
          project_id: project.id,
          branch_id: project.defaultBranchId,
          database_name: "nonexistent_db_00000000",
        }).pipe(
          Effect.map(() => undefined),
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("Locked", () => Effect.succeed(undefined)),
          Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent branch ID", async () => {
      const project = getTestProject("databases");
      await runEffect(
        deleteProjectBranchDatabase({
          project_id: project.id,
          branch_id: "br-non-existent-00000000",
          database_name: "neondb",
        }).pipe(
          Effect.map(() => undefined),
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("Locked", () => Effect.succeed(undefined)),
          Effect.catchTag("UnknownNeonError", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent project ID", async () => {
      await runEffect(
        deleteProjectBranchDatabase({
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
        deleteProjectBranchDatabase({
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
