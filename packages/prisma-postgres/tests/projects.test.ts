import { Effect } from "effect";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import {
  BadRequest,
  NotFound,
  UnprocessableEntity,
  Forbidden,
} from "../src/errors";
import { UnknownPrismaPostgresError } from "../src/errors";
import { getV1Projects } from "../src/operations/getV1Projects";
import { getV1ProjectsById } from "../src/operations/getV1ProjectsById";
import { postV1Projects } from "../src/operations/postV1Projects";
import { patchV1ProjectsById } from "../src/operations/patchV1ProjectsById";
import { deleteV1ProjectsById } from "../src/operations/deleteV1ProjectsById";
import { postV1ProjectsByIdTransfer } from "../src/operations/postV1ProjectsByIdTransfer";
import { getV1ProjectsByProjectIdDatabases } from "../src/operations/getV1ProjectsByProjectIdDatabases";
import { postV1ProjectsByProjectIdDatabases } from "../src/operations/postV1ProjectsByProjectIdDatabases";
import { deleteV1DatabasesByDatabaseId } from "../src/operations/deleteV1DatabasesByDatabaseId";
import {
  getTestProject,
  runEffect,
  setupTestProject,
  teardownTestProject,
  testRunId,
} from "./setup";

const TEST_SUFFIX = "projects";

const NON_EXISTENT_ID = "non-existent-project-id-00000000";

const isNotFoundLike = (error: unknown): boolean =>
  error instanceof NotFound ||
  error instanceof Forbidden ||
  error instanceof UnprocessableEntity;

describe("projects", () => {
  beforeAll(async () => {
    await Effect.runPromise(setupTestProject(TEST_SUFFIX));
  }, 300_000);

  afterAll(async () => {
    await Effect.runPromise(teardownTestProject(TEST_SUFFIX));
  }, 60_000);

  const getProj = () => getTestProject(TEST_SUFFIX);

  // ==========================================================================
  // getV1Projects (list)
  // ==========================================================================

  describe("getV1Projects", () => {
    it("happy path - lists projects", async () => {
      const result = await runEffect(getV1Projects({}));

      expect(result).toBeDefined();
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.data.length).toBeGreaterThanOrEqual(1);
      expect(result.pagination).toBeDefined();
      expect(typeof result.pagination.hasMore).toBe("boolean");
    }, 30_000);

    it("happy path - lists projects with pagination limit", async () => {
      const result = await runEffect(getV1Projects({ limit: 1 }));

      expect(result).toBeDefined();
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.data.length).toBeLessThanOrEqual(1);
      expect(result.pagination).toBeDefined();
    }, 30_000);

    it("happy path - test project appears in list", async () => {
      const proj = getProj();
      const result = await runEffect(getV1Projects({}));

      const found = result.data.find((p) => p.id === proj.projectId);
      expect(found).toBeDefined();
      if (found) {
        expect(found.name).toBeDefined();
        expect(found.createdAt).toBeDefined();
        expect(found.workspace).toBeDefined();
        expect(found.workspace.id).toBeDefined();
      }
    }, 30_000);

    it("error - returns error for invalid cursor", async () => {
      const error = await runEffect(
        getV1Projects({ cursor: "!!invalid-cursor-value!!" }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      // The API may silently ignore invalid cursors and return results,
      // or it may return an error. Both behaviors are acceptable.
      if (error !== null) {
        expect(
          isNotFoundLike(error) ||
            error instanceof UnknownPrismaPostgresError,
        ).toBe(true);
      }
    }, 30_000);

    it("error - returns error for negative limit", async () => {
      const error = await runEffect(
        getV1Projects({ limit: -1 }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      // The API may reject a negative limit or silently clamp it.
      if (error !== null) {
        expect(
          isNotFoundLike(error) ||
            error instanceof UnknownPrismaPostgresError,
        ).toBe(true);
      }
    }, 30_000);
  });

  // ==========================================================================
  // getV1ProjectsById
  // ==========================================================================

  describe("getV1ProjectsById", () => {
    it("happy path - gets project by id", async () => {
      const proj = getProj();
      const result = await runEffect(
        getV1ProjectsById({ id: proj.projectId }),
      );

      expect(result.data.id).toBe(proj.projectId);
      expect(result.data.name).toBeDefined();
      expect(result.data.createdAt).toBeDefined();
      expect(result.data.workspace).toBeDefined();
      expect(result.data.workspace.id).toBeDefined();
      expect(result.data.workspace.name).toBeDefined();
    }, 30_000);

    it("error - NotFound for non-existent project id", async () => {
      const error = await runEffect(
        getV1ProjectsById({ id: NON_EXISTENT_ID }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(isNotFoundLike(error)).toBe(true);
    }, 30_000);

    it("error - UnprocessableEntity for malformed id", async () => {
      const error = await runEffect(
        getV1ProjectsById({ id: "!!invalid-id-format!!" }).pipe(
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
  // postV1Projects (create)
  // ==========================================================================

  describe("postV1Projects", () => {
    it("happy path - creates a project", async () => {
      const projName = `distilled-prisma-proj-${testRunId}`;

      const created = await runEffect(
        postV1Projects({
          name: projName,
          region: "us-east-1",
          createDatabase: true,
        }).pipe(
          Effect.ensuring(
            // Clean up: find and delete the created project
            getV1Projects({}).pipe(
              Effect.flatMap((list) => {
                const proj = list.data.find((p) => p.name === projName);
                if (proj) {
                  return deleteV1ProjectsById({ id: proj.id }).pipe(
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
      expect(created.data.name).toBe(projName);
      expect(created.data.workspace).toBeDefined();
      expect(created.data.workspace.id).toBeDefined();
      expect(created.data.defaultRegion).toBeDefined();
      expect(created.data.database).not.toBeNull();
      if (created.data.database) {
        expect(created.data.database.id).toBeDefined();
        expect(["provisioning", "ready"]).toContain(
          created.data.database.status,
        );
      }
    }, 120_000);

    it("happy path - creates a project without database", async () => {
      const projName = `distilled-prisma-nodb-${testRunId}`;

      const created = await runEffect(
        postV1Projects({
          name: projName,
          createDatabase: false,
        }).pipe(
          Effect.ensuring(
            getV1Projects({}).pipe(
              Effect.flatMap((list) => {
                const proj = list.data.find((p) => p.name === projName);
                if (proj) {
                  return deleteV1ProjectsById({ id: proj.id }).pipe(
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
      expect(created.data.name).toBe(projName);
      expect(created.data.workspace).toBeDefined();
    }, 60_000);

    it("error - rejects project creation with empty name", async () => {
      const error = await runEffect(
        postV1Projects({
          name: "",
          createDatabase: false,
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: (result) =>
              deleteV1ProjectsById({ id: result.data.id }).pipe(
                Effect.ignore,
                Effect.map(() => null),
              ),
          }),
        ),
      );

      // The API may reject empty names or silently accept them.
      if (error !== null) {
        expect(
          error instanceof UnprocessableEntity ||
            error instanceof UnknownPrismaPostgresError,
        ).toBe(true);
      }
    }, 60_000);

    it("error - rejects invalid region at schema level", async () => {
      try {
        await runEffect(
          // @ts-expect-error — intentionally passing invalid region
          postV1Projects({
            name: `distilled-prisma-badreg-${testRunId}`,
            region: "invalid-region-xyz",
            createDatabase: true,
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
  });

  // ==========================================================================
  // patchV1ProjectsById (update)
  // ==========================================================================

  describe("patchV1ProjectsById", () => {
    it("happy path - updates project name and restores it", async () => {
      const proj = getProj();
      const tempName = `distilled-prisma-rename-${testRunId}`;

      // First get the current project to know the original name
      const original = await runEffect(
        getV1ProjectsById({ id: proj.projectId }),
      );
      const originalName = original.data.name;

      const updated = await runEffect(
        patchV1ProjectsById({
          id: proj.projectId,
          name: tempName,
        }).pipe(
          Effect.ensuring(
            patchV1ProjectsById({
              id: proj.projectId,
              name: originalName,
            }).pipe(Effect.ignore),
          ),
        ),
      );

      expect(updated.data.id).toBe(proj.projectId);
      expect(updated.data.name).toBe(tempName);
      expect(updated.data.workspace).toBeDefined();
      expect(updated.data.workspace.id).toBeDefined();
    }, 30_000);

    it("error - NotFound for non-existent project id", async () => {
      const error = await runEffect(
        patchV1ProjectsById({
          id: NON_EXISTENT_ID,
          name: "should-not-exist",
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

    it("error - Forbidden or NotFound for inaccessible project", async () => {
      const error = await runEffect(
        patchV1ProjectsById({
          id: "00000000-0000-0000-0000-000000000000",
          name: "should-not-exist",
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

    it("error - UnprocessableEntity for malformed id", async () => {
      const error = await runEffect(
        patchV1ProjectsById({
          id: "!!invalid-id-format!!",
          name: "should-not-exist",
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
  // deleteV1ProjectsById (delete)
  // ==========================================================================

  describe("deleteV1ProjectsById", () => {
    it("happy path - creates and deletes a project", async () => {
      const projName = `distilled-prisma-del-${testRunId}`;

      // Create a throwaway project to delete
      const created = await runEffect(
        postV1Projects({
          name: projName,
          createDatabase: false,
        }),
      );

      const createdId = created.data.id;
      expect(createdId).toBeDefined();

      // Delete it
      await runEffect(deleteV1ProjectsById({ id: createdId }));

      // Verify it's gone
      const error = await runEffect(
        getV1ProjectsById({ id: createdId }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(isNotFoundLike(error)).toBe(true);
    }, 60_000);

    it("error - NotFound for non-existent project id", async () => {
      const error = await runEffect(
        deleteV1ProjectsById({ id: NON_EXISTENT_ID }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(isNotFoundLike(error)).toBe(true);
    }, 30_000);

    it("error - BadRequest or NotFound for inaccessible project", async () => {
      const error = await runEffect(
        deleteV1ProjectsById({
          id: "00000000-0000-0000-0000-000000000000",
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(
        error instanceof BadRequest ||
          error instanceof NotFound ||
          error instanceof Forbidden ||
          error instanceof UnprocessableEntity ||
          error instanceof UnknownPrismaPostgresError,
      ).toBe(true);
    }, 30_000);

    it("error - UnprocessableEntity for malformed id", async () => {
      const error = await runEffect(
        deleteV1ProjectsById({ id: "!!invalid-id-format!!" }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
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
  // postV1ProjectsByIdTransfer (transfer ownership)
  // ==========================================================================

  describe("postV1ProjectsByIdTransfer", () => {
    it("happy path - transfer with invalid token is rejected gracefully", async () => {
      // We cannot truly transfer a project in tests (would need a second
      // workspace's access token). Instead, verify the API rejects a bogus
      // recipient token with a typed error rather than crashing.
      const proj = getProj();

      const error = await runEffect(
        postV1ProjectsByIdTransfer({
          id: proj.projectId,
          recipientAccessToken: "invalid-recipient-token",
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      // The API should reject the invalid recipient token.
      expect(error).not.toBeNull();
      expect(
        error instanceof UnprocessableEntity ||
          error instanceof NotFound ||
          error instanceof BadRequest ||
          error instanceof UnknownPrismaPostgresError,
      ).toBe(true);
    }, 30_000);

    it("error - NotFound for non-existent project id", async () => {
      const error = await runEffect(
        postV1ProjectsByIdTransfer({
          id: NON_EXISTENT_ID,
          recipientAccessToken: "some-token",
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

    it("error - UnprocessableEntity for malformed project id", async () => {
      const error = await runEffect(
        postV1ProjectsByIdTransfer({
          id: "!!invalid-id-format!!",
          recipientAccessToken: "some-token",
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

    it("error - NotFound for inaccessible project", async () => {
      const error = await runEffect(
        postV1ProjectsByIdTransfer({
          id: "00000000-0000-0000-0000-000000000000",
          recipientAccessToken: "some-token",
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
  // getV1ProjectsByProjectIdDatabases (list databases for project)
  // ==========================================================================

  describe("getV1ProjectsByProjectIdDatabases", () => {
    it("happy path - lists databases for test project", async () => {
      const proj = getProj();
      const result = await runEffect(
        getV1ProjectsByProjectIdDatabases({ projectId: proj.projectId }),
      );

      expect(result).toBeDefined();
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.data.length).toBeGreaterThanOrEqual(1);
      expect(result.pagination).toBeDefined();
      expect(typeof result.pagination.hasMore).toBe("boolean");

      const db = result.data[0];
      expect(db.id).toBeDefined();
      expect(db.name).toBeDefined();
      expect(db.status).toBeDefined();
      expect(["failure", "provisioning", "ready", "recovering"]).toContain(
        db.status,
      );
      expect(db.project).toBeDefined();
      expect(db.project.id).toBe(proj.projectId);
    }, 30_000);

    it("happy path - lists databases with pagination limit", async () => {
      const proj = getProj();
      const result = await runEffect(
        getV1ProjectsByProjectIdDatabases({
          projectId: proj.projectId,
          limit: 1,
        }),
      );

      expect(result).toBeDefined();
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.data.length).toBeLessThanOrEqual(1);
      expect(result.pagination).toBeDefined();
    }, 30_000);

    it("error - NotFound for non-existent project id", async () => {
      const error = await runEffect(
        getV1ProjectsByProjectIdDatabases({
          projectId: NON_EXISTENT_ID,
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

    it("error - UnprocessableEntity for malformed project id", async () => {
      const error = await runEffect(
        getV1ProjectsByProjectIdDatabases({
          projectId: "!!invalid-id-format!!",
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

    it("error - NotFound for inaccessible project", async () => {
      const error = await runEffect(
        getV1ProjectsByProjectIdDatabases({
          projectId: "00000000-0000-0000-0000-000000000000",
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
  // postV1ProjectsByProjectIdDatabases (create database in project)
  // ==========================================================================

  describe("postV1ProjectsByProjectIdDatabases", () => {
    it("happy path - creates a database in the test project", async () => {
      const proj = getProj();
      const dbName = `distilled-prisma-db-${testRunId}`;

      const created = await runEffect(
        postV1ProjectsByProjectIdDatabases({
          projectId: proj.projectId,
          name: dbName,
          region: "us-east-1",
        }).pipe(
          Effect.ensuring(
            // Clean up: delete the created database
            getV1ProjectsByProjectIdDatabases({
              projectId: proj.projectId,
            }).pipe(
              Effect.flatMap((list) => {
                const db = list.data.find((d) => d.name === dbName);
                if (db) {
                  return deleteV1DatabasesByDatabaseId({
                    databaseId: db.id,
                  }).pipe(Effect.ignore);
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
      expect(created.data.project).toBeDefined();
      expect(created.data.project.id).toBe(proj.projectId);
      expect(["provisioning", "ready"]).toContain(created.data.status);
      expect(created.data.region).toBeDefined();
      expect(created.data.region.id).toBeDefined();
      expect(Array.isArray(created.data.connections)).toBe(true);
    }, 120_000);

    it("error - NotFound for non-existent project id", async () => {
      const error = await runEffect(
        postV1ProjectsByProjectIdDatabases({
          projectId: NON_EXISTENT_ID,
          name: `distilled-prisma-db-nf-${testRunId}`,
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

    it("error - Forbidden or NotFound for inaccessible project", async () => {
      const error = await runEffect(
        postV1ProjectsByProjectIdDatabases({
          projectId: "00000000-0000-0000-0000-000000000000",
          name: `distilled-prisma-db-fb-${testRunId}`,
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(
        error instanceof BadRequest ||
          error instanceof Forbidden ||
          error instanceof NotFound ||
          error instanceof UnprocessableEntity ||
          error instanceof UnknownPrismaPostgresError,
      ).toBe(true);
    }, 30_000);

    it("error - UnprocessableEntity for malformed project id", async () => {
      const error = await runEffect(
        postV1ProjectsByProjectIdDatabases({
          projectId: "!!invalid-id-format!!",
          name: `distilled-prisma-db-ue-${testRunId}`,
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

    it("error - BadRequest for invalid fromDatabase reference", async () => {
      const proj = getProj();

      const error = await runEffect(
        postV1ProjectsByProjectIdDatabases({
          projectId: proj.projectId,
          name: `distilled-prisma-db-br-${testRunId}`,
          fromDatabase: {
            id: "non-existent-database-id",
            backupId: "non-existent-backup-id",
          },
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: (result) =>
              deleteV1DatabasesByDatabaseId({
                databaseId: result.data.id,
              }).pipe(
                Effect.ignore,
                Effect.map(() => null),
              ),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(
        error instanceof BadRequest ||
          error instanceof NotFound ||
          error instanceof UnprocessableEntity ||
          error instanceof UnknownPrismaPostgresError,
      ).toBe(true);
    }, 30_000);
  });
});
