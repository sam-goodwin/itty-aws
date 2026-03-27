import { Effect } from "effect";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { NotFound, Forbidden, UnprocessableEntity, BadRequest } from "../src/errors";
import { getV1Databases } from "../src/operations/getV1Databases";
import { getV1DatabasesByDatabaseId } from "../src/operations/getV1DatabasesByDatabaseId";
import { patchV1DatabasesByDatabaseId } from "../src/operations/patchV1DatabasesByDatabaseId";
import { deleteV1DatabasesByDatabaseId } from "../src/operations/deleteV1DatabasesByDatabaseId";
import { postV1Databases } from "../src/operations/postV1Databases";
import { postV1ProjectsByProjectIdDatabases } from "../src/operations/postV1ProjectsByProjectIdDatabases";
import { getV1DatabasesByDatabaseIdBackups } from "../src/operations/getV1DatabasesByDatabaseIdBackups";
import { getV1DatabasesByDatabaseIdUsage } from "../src/operations/getV1DatabasesByDatabaseIdUsage";
import { getV1DatabasesByDatabaseIdConnections } from "../src/operations/getV1DatabasesByDatabaseIdConnections";
import {
  getTestProject,
  runEffect,
  setupTestProject,
  teardownTestProject,
  testRunId,
} from "./setup";

const TEST_SUFFIX = "databases";

const NON_EXISTENT_DB_ID = "non-existent-database-id-00000000";
const NON_EXISTENT_PROJECT_ID = "non-existent-project-id-00000000";

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
    }, 30_000);

    it("happy path - lists databases filtered by project", async () => {
      const proj = getProj();
      const result = await runEffect(
        getV1Databases({ projectId: proj.projectId }),
      );

      expect(Array.isArray(result.data)).toBe(true);
      expect(result.data.length).toBeGreaterThan(0);
    }, 30_000);

    it("happy path - lists databases with pagination", async () => {
      const result = await runEffect(getV1Databases({ limit: 1 }));

      expect(Array.isArray(result.data)).toBe(true);
      expect(result.pagination).toBeDefined();
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
      expect(result.data.project).toBeDefined();
      expect(result.data.connections).toBeDefined();
    }, 30_000);

    it("error - NotFound for non-existent database", async () => {
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
  });

  // ==========================================================================
  // patchV1DatabasesByDatabaseId
  // ==========================================================================

  describe("patchV1DatabasesByDatabaseId", () => {
    it("happy path - updates database name", async () => {
      const proj = getProj();
      const newName = `distilled-prisma-db-renamed-${testRunId}`;

      const updated = await runEffect(
        patchV1DatabasesByDatabaseId({
          databaseId: proj.databaseId!,
          name: newName,
        }),
      );

      expect(updated.data.name).toBe(newName);
    }, 30_000);

    it("error - NotFound for non-existent database", async () => {
      const error = await runEffect(
        patchV1DatabasesByDatabaseId({
          databaseId: NON_EXISTENT_DB_ID,
          name: "test",
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

      expect(Array.isArray(result.data)).toBe(true);
      expect(result.pagination).toBeDefined();
    }, 30_000);

    it("error - UnprocessableEntity for non-existent database", async () => {
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

      // This endpoint only declares UnprocessableEntity
      expect(error).not.toBeNull();
      expect(isNotFoundLike(error)).toBe(true);
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
      expect(result.meta.backupRetentionDays).toBeDefined();
    }, 30_000);

    it("error - NotFound for non-existent database", async () => {
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
      expect(result.metrics).toBeDefined();
      expect(result.metrics.operations).toBeDefined();
      expect(result.metrics.storage).toBeDefined();
      expect(result.generatedAt).toBeDefined();
    }, 30_000);

    it("error - NotFound for non-existent database", async () => {
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
  });

  // ==========================================================================
  // postV1Databases & deleteV1DatabasesByDatabaseId (create + delete lifecycle)
  // ==========================================================================

  describe("postV1Databases & deleteV1DatabasesByDatabaseId", () => {
    it("happy path - creates and deletes a database", async () => {
      const proj = getProj();
      const dbName = `distilled-prisma-db-create-${testRunId}`;
      let createdDbId: string | null = null;

      try {
        const created = await runEffect(
          postV1Databases({
            projectId: proj.projectId,
            name: dbName,
            region: "us-east-1",
          }),
        );

        createdDbId = created.data.id;
        expect(created.data.id).toBeDefined();
        expect(created.data.name).toBe(dbName);
        expect(created.data.project.id).toBe(proj.projectId);
      } finally {
        if (createdDbId) {
          await runEffect(
            deleteV1DatabasesByDatabaseId({ databaseId: createdDbId }).pipe(
              Effect.ignore,
            ),
          );
        }
      }
    }, 120_000);

    it("error - NotFound for non-existent project", async () => {
      const error = await runEffect(
        postV1Databases({
          projectId: NON_EXISTENT_PROJECT_ID,
          name: "test-db",
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

    it("error - NotFound when deleting non-existent database", async () => {
      const error = await runEffect(
        deleteV1DatabasesByDatabaseId({
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
  });

  // ==========================================================================
  // postV1ProjectsByProjectIdDatabases
  // ==========================================================================

  describe("postV1ProjectsByProjectIdDatabases", () => {
    it("happy path - creates a database under project path", async () => {
      const proj = getProj();
      const dbName = `distilled-prisma-db-proj-${testRunId}`;
      let createdDbId: string | null = null;

      try {
        const created = await runEffect(
          postV1ProjectsByProjectIdDatabases({
            projectId: proj.projectId,
            name: dbName,
            region: "us-east-1",
          }),
        );

        createdDbId = created.data.id;
        expect(created.data.id).toBeDefined();
        expect(created.data.name).toBe(dbName);
        expect(created.data.project.id).toBe(proj.projectId);
      } finally {
        if (createdDbId) {
          await runEffect(
            deleteV1DatabasesByDatabaseId({ databaseId: createdDbId }).pipe(
              Effect.ignore,
            ),
          );
        }
      }
    }, 120_000);

    it("error - NotFound for non-existent project", async () => {
      const error = await runEffect(
        postV1ProjectsByProjectIdDatabases({
          projectId: NON_EXISTENT_PROJECT_ID,
          name: "test-db",
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
  });
});
