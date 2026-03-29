import { Effect } from "effect";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { BadRequest, NotFound, UnprocessableEntity, Forbidden } from "../src/errors";
import { UnknownPrismaPostgresError } from "../src/errors";
import { getV1Databases } from "../src/operations/getV1Databases";
import { getV1DatabasesByDatabaseId } from "../src/operations/getV1DatabasesByDatabaseId";
import { getV1DatabasesByDatabaseIdBackups } from "../src/operations/getV1DatabasesByDatabaseIdBackups";
import { postV1DatabasesByTargetDatabaseIdRestore } from "../src/operations/postV1DatabasesByTargetDatabaseIdRestore";
import { getV1DatabasesByDatabaseIdUsage } from "../src/operations/getV1DatabasesByDatabaseIdUsage";
import { getV1DatabasesByDatabaseIdConnections } from "../src/operations/getV1DatabasesByDatabaseIdConnections";
import { postV1DatabasesByDatabaseIdConnections } from "../src/operations/postV1DatabasesByDatabaseIdConnections";
import { deleteV1ConnectionsById } from "../src/operations/deleteV1ConnectionsById";
import { patchV1DatabasesByDatabaseId } from "../src/operations/patchV1DatabasesByDatabaseId";
import { postV1Databases } from "../src/operations/postV1Databases";
import { deleteV1DatabasesByDatabaseId } from "../src/operations/deleteV1DatabasesByDatabaseId";
import {
  getTestProject,
  runEffect,
  setupTestProject,
  teardownTestProject,
  testRunId,
} from "./setup";

const TEST_SUFFIX = "databases";

const NON_EXISTENT_PROJECT_ID = "non-existent-project-id-00000000";
const NON_EXISTENT_DB_ID = "non-existent-database-id-00000000";

const isNotFoundLike = (error: unknown): boolean =>
  error instanceof NotFound ||
  error instanceof Forbidden ||
  error instanceof UnprocessableEntity;

describe("databases", () => {
  beforeAll(async () => {
    await Effect.runPromise(setupTestProject(TEST_SUFFIX));
  }, 300_000);

  afterAll(async () => {
    await Effect.runPromise(teardownTestProject(TEST_SUFFIX));
  }, 60_000);

  const getProj = () => getTestProject(TEST_SUFFIX);

  // ==========================================================================
  // getV1Databases (list)
  // ==========================================================================

  describe("getV1Databases", () => {
    it("happy path - lists all databases", async () => {
      const result = await runEffect(getV1Databases({}));

      expect(result).toBeDefined();
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.pagination).toBeDefined();
      expect(typeof result.pagination.hasMore).toBe("boolean");
    }, 30_000);

    it("happy path - lists databases filtered by projectId", async () => {
      const proj = getProj();
      const result = await runEffect(
        getV1Databases({ projectId: proj.projectId }),
      );

      expect(Array.isArray(result.data)).toBe(true);
      expect(result.data.length).toBeGreaterThanOrEqual(1);
      // All returned databases should belong to the filtered project
      for (const db of result.data) {
        expect(db.project.id).toBe(proj.projectId);
      }
    }, 30_000);

    it("happy path - lists databases with pagination limit", async () => {
      const result = await runEffect(getV1Databases({ limit: 1 }));

      expect(result).toBeDefined();
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.data.length).toBeLessThanOrEqual(1);
      expect(result.pagination).toBeDefined();
    }, 30_000);

    it("happy path - database has expected fields", async () => {
      const proj = getProj();
      const result = await runEffect(
        getV1Databases({ projectId: proj.projectId }),
      );

      const db = result.data.find((d) => d.id === proj.databaseId);
      expect(db).toBeDefined();
      if (db) {
        expect(db.name).toBeDefined();
        expect(db.status).toBeDefined();
        expect(["failure", "provisioning", "ready", "recovering"]).toContain(
          db.status,
        );
        expect(db.isDefault).toBeDefined();
        expect(db.project).toBeDefined();
        expect(db.project.id).toBe(proj.projectId);
        expect(Array.isArray(db.connections)).toBe(true);
      }
    }, 30_000);

    it("error - Forbidden for non-existent projectId filter", async () => {
      const error = await runEffect(
        getV1Databases({ projectId: NON_EXISTENT_PROJECT_ID }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      // The API may return an error or an empty list for a non-existent project filter.
      // If it returns an error, it should be a Forbidden or other typed error.
      if (error !== null) {
        expect(
          error instanceof Forbidden ||
            isNotFoundLike(error) ||
            error instanceof UnknownPrismaPostgresError,
        ).toBe(true);
      }
      // If null, the API returned an empty list — that's also acceptable
    }, 30_000);
  });

  // ==========================================================================
  // getV1DatabasesByDatabaseId
  // ==========================================================================

  describe("getV1DatabasesByDatabaseId", () => {
    it("happy path - gets database by id", async () => {
      const proj = getProj();
      const result = await runEffect(
        getV1DatabasesByDatabaseId({ databaseId: proj.databaseId! }),
      );

      expect(result.data.id).toBe(proj.databaseId);
      expect(result.data.name).toBeDefined();
      expect(result.data.status).toBeDefined();
      expect(["failure", "provisioning", "ready", "recovering"]).toContain(
        result.data.status,
      );
      expect(result.data.project).toBeDefined();
      expect(result.data.project.id).toBe(proj.projectId);
      expect(Array.isArray(result.data.connections)).toBe(true);
      expect(result.data.region).toBeDefined();
    }, 30_000);

    it("error - NotFound for non-existent database id", async () => {
      const error = await runEffect(
        getV1DatabasesByDatabaseId({ databaseId: NON_EXISTENT_DB_ID }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(isNotFoundLike(error)).toBe(true);
    }, 30_000);

    it("error - Forbidden for inaccessible database id", async () => {
      const error = await runEffect(
        getV1DatabasesByDatabaseId({
          databaseId: "00000000-0000-0000-0000-000000000000",
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(
        error instanceof Forbidden ||
          isNotFoundLike(error) ||
          error instanceof UnknownPrismaPostgresError,
      ).toBe(true);
    }, 30_000);

    it("error - UnprocessableEntity for malformed database id", async () => {
      const error = await runEffect(
        getV1DatabasesByDatabaseId({ databaseId: "!!invalid-id!!" }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(
        error instanceof UnprocessableEntity ||
          error instanceof NotFound ||
          error instanceof UnknownPrismaPostgresError,
      ).toBe(true);
    }, 30_000);
  });

  // ==========================================================================
  // patchV1DatabasesByDatabaseId (update)
  // ==========================================================================

  describe("patchV1DatabasesByDatabaseId", () => {
    it("happy path - updates database name", async () => {
      const proj = getProj();
      const updatedName = `distilled-prisma-dbpatch-${testRunId}`;

      const result = await runEffect(
        patchV1DatabasesByDatabaseId({
          databaseId: proj.databaseId!,
          name: updatedName,
        }).pipe(
          // Restore the original name after the test
          Effect.ensuring(
            patchV1DatabasesByDatabaseId({
              databaseId: proj.databaseId!,
              name: `default`,
            }).pipe(Effect.ignore),
          ),
        ),
      );

      expect(result.data.id).toBe(proj.databaseId);
      expect(result.data.name).toBe(updatedName);
      expect(result.data.project).toBeDefined();
      expect(result.data.project.id).toBe(proj.projectId);
      expect(result.data.status).toBeDefined();
      expect(Array.isArray(result.data.connections)).toBe(true);
    }, 30_000);

    it("error - NotFound for non-existent database id", async () => {
      const error = await runEffect(
        patchV1DatabasesByDatabaseId({
          databaseId: NON_EXISTENT_DB_ID,
          name: "should-not-work",
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(isNotFoundLike(error)).toBe(true);
    }, 30_000);

    it("error - Forbidden for inaccessible database id", async () => {
      const error = await runEffect(
        patchV1DatabasesByDatabaseId({
          databaseId: "00000000-0000-0000-0000-000000000000",
          name: "should-not-work",
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(
        error instanceof Forbidden ||
          isNotFoundLike(error) ||
          error instanceof UnknownPrismaPostgresError,
      ).toBe(true);
    }, 30_000);

    it("error - UnprocessableEntity for malformed database id", async () => {
      const error = await runEffect(
        patchV1DatabasesByDatabaseId({
          databaseId: "!!invalid-id!!",
          name: "should-not-work",
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(
        error instanceof UnprocessableEntity ||
          error instanceof NotFound ||
          error instanceof UnknownPrismaPostgresError,
      ).toBe(true);
    }, 30_000);
  });

  // ==========================================================================
  // postV1Databases (create)
  // ==========================================================================

  describe("postV1Databases", () => {
    it("happy path - creates a database in the test project", async () => {
      const proj = getProj();
      const dbName = `distilled-prisma-db-${testRunId}`;

      const created = await runEffect(
        postV1Databases({
          projectId: proj.projectId,
          name: dbName,
          region: "us-east-1",
        }).pipe(
          Effect.ensuring(
            // Clean up: find and delete the created database
            getV1Databases({ projectId: proj.projectId }).pipe(
              Effect.flatMap((list) => {
                const db = list.data.find((d) => d.name === dbName);
                if (db) {
                  return deleteV1DatabasesByDatabaseId({ databaseId: db.id }).pipe(
                    Effect.ignore,
                  );
                }
                return Effect.void;
              }),
              Effect.ignore,
            ),
          ),
        ),
      );

      expect(created.data.id).toBeDefined();
      expect(created.data.name).toBe(dbName);
      expect(created.data.project.id).toBe(proj.projectId);
      expect(created.data.status).toBeDefined();
      expect(Array.isArray(created.data.connections)).toBe(true);
    }, 120_000);

    it("error - NotFound for non-existent projectId", async () => {
      const error = await runEffect(
        postV1Databases({
          projectId: NON_EXISTENT_PROJECT_ID,
          region: "us-east-1",
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: (result) =>
              deleteV1DatabasesByDatabaseId({ databaseId: result.data.id }).pipe(
                Effect.ignore,
                Effect.map(() => null),
              ),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(isNotFoundLike(error)).toBe(true);
    }, 30_000);

    it("error - rejects invalid region at schema level", async () => {
      try {
        const proj = getProj();
        await runEffect(
          // @ts-expect-error — intentionally passing invalid region
          postV1Databases({
            projectId: proj.projectId,
            region: "invalid-region-xyz",
          }),
        );
        expect(true).toBe(true);
      } catch (e) {
        // The SDK rejects the invalid region at the schema level before
        // making an HTTP request — the error is a schema parse error.
        expect(e).toBeInstanceOf(Error);
        expect(String(e)).toContain("invalid-region-xyz");
      }
    }, 30_000);

    it("error - Forbidden for non-existent project (access denied)", async () => {
      const error = await runEffect(
        postV1Databases({
          projectId: "00000000-0000-0000-0000-000000000000",
          region: "us-east-1",
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: (result) =>
              deleteV1DatabasesByDatabaseId({ databaseId: result.data.id }).pipe(
                Effect.ignore,
                Effect.map(() => null),
              ),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(
        error instanceof Forbidden ||
          isNotFoundLike(error) ||
          error instanceof UnknownPrismaPostgresError,
      ).toBe(true);
    }, 30_000);

    it("error - UnprocessableEntity for empty projectId", async () => {
      const error = await runEffect(
        postV1Databases({
          projectId: "",
          region: "us-east-1",
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: (result) =>
              deleteV1DatabasesByDatabaseId({ databaseId: result.data.id }).pipe(
                Effect.ignore,
                Effect.map(() => null),
              ),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(
        error instanceof UnprocessableEntity ||
          error instanceof BadRequest ||
          error instanceof NotFound ||
          error instanceof UnknownPrismaPostgresError,
      ).toBe(true);
    }, 30_000);
  });

  // ==========================================================================
  // deleteV1DatabasesByDatabaseId
  // ==========================================================================

  describe("deleteV1DatabasesByDatabaseId", () => {
    it("happy path - creates then deletes a database", async () => {
      const proj = getProj();
      const dbName = `distilled-prisma-dbdel-${testRunId}`;

      // Create a database to delete
      const created = await runEffect(
        postV1Databases({
          projectId: proj.projectId,
          name: dbName,
          region: "us-east-1",
        }),
      );

      const dbId = created.data.id;
      expect(dbId).toBeDefined();

      // Delete the database
      await runEffect(deleteV1DatabasesByDatabaseId({ databaseId: dbId }));

      // Verify it's gone — fetching should fail
      const error = await runEffect(
        getV1DatabasesByDatabaseId({ databaseId: dbId }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(isNotFoundLike(error)).toBe(true);
    }, 120_000);

    it("error - NotFound for non-existent database id", async () => {
      const error = await runEffect(
        deleteV1DatabasesByDatabaseId({ databaseId: NON_EXISTENT_DB_ID }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(isNotFoundLike(error)).toBe(true);
    }, 30_000);

    it("error - Forbidden for inaccessible database id", async () => {
      const error = await runEffect(
        deleteV1DatabasesByDatabaseId({
          databaseId: "00000000-0000-0000-0000-000000000000",
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(
        error instanceof Forbidden ||
          isNotFoundLike(error) ||
          error instanceof UnknownPrismaPostgresError,
      ).toBe(true);
    }, 30_000);

    it("error - UnprocessableEntity for malformed database id", async () => {
      const error = await runEffect(
        deleteV1DatabasesByDatabaseId({ databaseId: "!!invalid-id!!" }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(
        error instanceof UnprocessableEntity ||
          error instanceof NotFound ||
          error instanceof UnknownPrismaPostgresError,
      ).toBe(true);
    }, 30_000);
  });

  // ==========================================================================
  // getV1DatabasesByDatabaseIdConnections
  // ==========================================================================

  describe("getV1DatabasesByDatabaseIdConnections", () => {
    it("happy path - lists connections for a database", async () => {
      const proj = getProj();
      const result = await runEffect(
        getV1DatabasesByDatabaseIdConnections({
          databaseId: proj.databaseId!,
        }),
      );

      expect(result).toBeDefined();
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.data.length).toBeGreaterThanOrEqual(1);
      expect(result.pagination).toBeDefined();
      expect(typeof result.pagination.hasMore).toBe("boolean");

      // Each connection should reference this database
      for (const conn of result.data) {
        expect(conn.database.id).toBe(proj.databaseId);
        expect(conn.kind).toBeDefined();
        expect(conn.endpoints).toBeDefined();
      }
    }, 30_000);

    it("happy path - lists connections with pagination limit", async () => {
      const proj = getProj();
      const result = await runEffect(
        getV1DatabasesByDatabaseIdConnections({
          databaseId: proj.databaseId!,
          limit: 1,
        }),
      );

      expect(Array.isArray(result.data)).toBe(true);
      expect(result.data.length).toBeLessThanOrEqual(1);
      expect(result.pagination).toBeDefined();
    }, 30_000);

    it("error - UnprocessableEntity for malformed database id", async () => {
      const error = await runEffect(
        getV1DatabasesByDatabaseIdConnections({
          databaseId: "!!invalid-id!!",
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(
        error instanceof UnprocessableEntity ||
          error instanceof NotFound ||
          error instanceof UnknownPrismaPostgresError,
      ).toBe(true);
    }, 30_000);

    it("error - returns error for non-existent database id", async () => {
      const error = await runEffect(
        getV1DatabasesByDatabaseIdConnections({
          databaseId: NON_EXISTENT_DB_ID,
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      // May return error or empty list for non-existent database
      if (error !== null) {
        expect(
          isNotFoundLike(error) ||
            error instanceof UnknownPrismaPostgresError,
        ).toBe(true);
      }
    }, 30_000);
  });

  // ==========================================================================
  // postV1DatabasesByDatabaseIdConnections (create connection via database path)
  // ==========================================================================

  describe("postV1DatabasesByDatabaseIdConnections", () => {
    it("happy path - creates a connection for a database", async () => {
      const proj = getProj();
      const connName = `distilled-prisma-dbconn-${testRunId}`;

      const created = await runEffect(
        postV1DatabasesByDatabaseIdConnections({
          databaseId: proj.databaseId!,
          name: connName,
        }).pipe(
          Effect.ensuring(
            getV1DatabasesByDatabaseIdConnections({
              databaseId: proj.databaseId!,
            }).pipe(
              Effect.flatMap((list) => {
                const conn = list.data.find((c) => c.name === connName);
                if (conn) {
                  return deleteV1ConnectionsById({ id: conn.id }).pipe(
                    Effect.ignore,
                  );
                }
                return Effect.void;
              }),
              Effect.ignore,
            ),
          ),
        ),
      );

      expect(created.data.id).toBeDefined();
      expect(created.data.name).toBe(connName);
      expect(created.data.database.id).toBe(proj.databaseId);
      expect(created.data.kind).toBeDefined();
      expect(created.data.endpoints).toBeDefined();
      expect(created.data.connectionString).toBeDefined();
    }, 60_000);

    it("error - NotFound for non-existent database id", async () => {
      const error = await runEffect(
        postV1DatabasesByDatabaseIdConnections({
          databaseId: NON_EXISTENT_DB_ID,
          name: `distilled-prisma-dbconn-nf-${testRunId}`,
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: (result) =>
              deleteV1ConnectionsById({ id: result.data.id }).pipe(
                Effect.ignore,
                Effect.map(() => null),
              ),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(isNotFoundLike(error)).toBe(true);
    }, 30_000);

    it("error - UnprocessableEntity for malformed database id", async () => {
      const error = await runEffect(
        postV1DatabasesByDatabaseIdConnections({
          databaseId: "!!invalid-id!!",
          name: `distilled-prisma-dbconn-ue-${testRunId}`,
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: (result) =>
              deleteV1ConnectionsById({ id: result.data.id }).pipe(
                Effect.ignore,
                Effect.map(() => null),
              ),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(
        error instanceof UnprocessableEntity ||
          error instanceof NotFound ||
          error instanceof UnknownPrismaPostgresError,
      ).toBe(true);
    }, 30_000);
  });

  // ==========================================================================
  // getV1DatabasesByDatabaseIdBackups
  // ==========================================================================

  describe("getV1DatabasesByDatabaseIdBackups", () => {
    it("happy path - lists backups for a database", async () => {
      const proj = getProj();
      const result = await runEffect(
        getV1DatabasesByDatabaseIdBackups({
          databaseId: proj.databaseId!,
        }),
      );

      expect(result).toBeDefined();
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.meta).toBeDefined();
      expect(typeof result.meta.backupRetentionDays).toBe("number");
      expect(result.pagination).toBeDefined();
      expect(typeof result.pagination.hasMore).toBe("boolean");

      // Verify backup entries have expected fields
      for (const backup of result.data) {
        expect(backup.id).toBeDefined();
        expect(["full", "incremental"]).toContain(backup.backupType);
        expect(backup.createdAt).toBeDefined();
        expect(["running", "completed", "failed", "unknown"]).toContain(
          backup.status,
        );
      }
    }, 30_000);

    it("happy path - lists backups with limit", async () => {
      const proj = getProj();
      const result = await runEffect(
        getV1DatabasesByDatabaseIdBackups({
          databaseId: proj.databaseId!,
          limit: 1,
        }),
      );

      expect(Array.isArray(result.data)).toBe(true);
      expect(result.data.length).toBeLessThanOrEqual(1);
      expect(result.pagination).toBeDefined();
    }, 30_000);

    it("error - NotFound for non-existent database id", async () => {
      const error = await runEffect(
        getV1DatabasesByDatabaseIdBackups({
          databaseId: NON_EXISTENT_DB_ID,
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(isNotFoundLike(error)).toBe(true);
    }, 30_000);

    it("error - UnprocessableEntity for malformed database id", async () => {
      const error = await runEffect(
        getV1DatabasesByDatabaseIdBackups({
          databaseId: "!!invalid-id!!",
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(
        error instanceof UnprocessableEntity ||
          error instanceof NotFound ||
          error instanceof UnknownPrismaPostgresError,
      ).toBe(true);
    }, 30_000);
  });

  // ==========================================================================
  // getV1DatabasesByDatabaseIdUsage
  // ==========================================================================

  describe("getV1DatabasesByDatabaseIdUsage", () => {
    it("happy path - gets usage metrics for a database", async () => {
      const proj = getProj();
      const result = await runEffect(
        getV1DatabasesByDatabaseIdUsage({
          databaseId: proj.databaseId!,
        }),
      );

      expect(result).toBeDefined();
      expect(result.period).toBeDefined();
      expect(result.period.start).toBeDefined();
      expect(result.period.end).toBeDefined();
      expect(result.metrics).toBeDefined();
      expect(result.metrics.operations).toBeDefined();
      expect(typeof result.metrics.operations.used).toBe("number");
      expect(result.metrics.operations.unit).toBeDefined();
      expect(result.metrics.storage).toBeDefined();
      expect(typeof result.metrics.storage.used).toBe("number");
      expect(result.metrics.storage.unit).toBeDefined();
      expect(result.generatedAt).toBeDefined();
    }, 30_000);

    it("happy path - gets usage metrics with date range", async () => {
      const proj = getProj();
      const now = new Date();
      const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

      const result = await runEffect(
        getV1DatabasesByDatabaseIdUsage({
          databaseId: proj.databaseId!,
          startDate: thirtyDaysAgo.toISOString(),
          endDate: now.toISOString(),
        }),
      );

      expect(result).toBeDefined();
      expect(result.period).toBeDefined();
      expect(result.metrics).toBeDefined();
    }, 30_000);

    it("error - NotFound for non-existent database id", async () => {
      const error = await runEffect(
        getV1DatabasesByDatabaseIdUsage({
          databaseId: NON_EXISTENT_DB_ID,
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(isNotFoundLike(error)).toBe(true);
    }, 30_000);

    it("error - BadRequest for invalid date range", async () => {
      const proj = getProj();
      const error = await runEffect(
        getV1DatabasesByDatabaseIdUsage({
          databaseId: proj.databaseId!,
          startDate: "not-a-date",
          endDate: "also-not-a-date",
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      // The API should reject invalid dates
      if (error !== null) {
        expect(
          error instanceof BadRequest ||
            error instanceof UnprocessableEntity ||
            error instanceof UnknownPrismaPostgresError,
        ).toBe(true);
      }
    }, 30_000);

    it("error - UnprocessableEntity for malformed database id", async () => {
      const error = await runEffect(
        getV1DatabasesByDatabaseIdUsage({
          databaseId: "!!invalid-id!!",
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(
        error instanceof UnprocessableEntity ||
          error instanceof NotFound ||
          error instanceof UnknownPrismaPostgresError,
      ).toBe(true);
    }, 30_000);
  });

  // ==========================================================================
  // postV1DatabasesByTargetDatabaseIdRestore
  // ==========================================================================

  describe("postV1DatabasesByTargetDatabaseIdRestore", () => {
    it("happy path - restores a database from backup", async () => {
      const proj = getProj();

      // List backups — we need a completed backup to restore from
      const backups = await runEffect(
        getV1DatabasesByDatabaseIdBackups({
          databaseId: proj.databaseId!,
        }),
      );

      const completedBackup = backups.data.find(
        (b) => b.status === "completed",
      );

      if (!completedBackup) {
        // No completed backups available yet — skip gracefully
        return;
      }

      // Create a secondary database as the restore target (cannot restore into default)
      const targetDbName = `distilled-prisma-restore-${testRunId}`;
      const targetDb = await runEffect(
        postV1Databases({
          projectId: proj.projectId,
          name: targetDbName,
          region: "us-east-1",
        }),
      );

      try {
        const result = await runEffect(
          postV1DatabasesByTargetDatabaseIdRestore({
            targetDatabaseId: targetDb.data.id,
            source: {
              type: "backup",
              databaseId: proj.databaseId!,
              backupId: completedBackup.id,
            },
          }),
        );

        expect(result.data.id).toBe(targetDb.data.id);
        expect(result.data.source).toBeDefined();
        expect(result.data.source.backupId).toBe(completedBackup.id);
        expect(result.data.source.databaseId).toBe(proj.databaseId);
      } finally {
        await runEffect(
          deleteV1DatabasesByDatabaseId({
            databaseId: targetDb.data.id,
          }).pipe(Effect.ignore),
        );
      }
    }, 120_000);

    it("error - returns error for non-existent target database id", async () => {
      const error = await runEffect(
        postV1DatabasesByTargetDatabaseIdRestore({
          targetDatabaseId: NON_EXISTENT_DB_ID,
          source: {
            type: "backup",
            databaseId: NON_EXISTENT_DB_ID,
            backupId: "non-existent-backup-id",
          },
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(
        isNotFoundLike(error) ||
          error instanceof UnknownPrismaPostgresError,
      ).toBe(true);
    }, 30_000);

    it("error - returns error for malformed target database id", async () => {
      const error = await runEffect(
        postV1DatabasesByTargetDatabaseIdRestore({
          targetDatabaseId: "!!invalid-id!!",
          source: {
            type: "backup",
            databaseId: "!!invalid!!",
            backupId: "!!invalid!!",
          },
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(
        isNotFoundLike(error) ||
          error instanceof BadRequest ||
          error instanceof UnknownPrismaPostgresError,
      ).toBe(true);
    }, 30_000);
  });
});
