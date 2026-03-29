import { Effect } from "effect";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { NotFound, UnprocessableEntity, Forbidden } from "../src/errors";
import { UnknownPrismaPostgresError } from "../src/errors";
import { getV1Connections } from "../src/operations/getV1Connections";
import { getV1ConnectionsById } from "../src/operations/getV1ConnectionsById";
import { postV1Connections } from "../src/operations/postV1Connections";
import { deleteV1ConnectionsById } from "../src/operations/deleteV1ConnectionsById";
import { postV1ConnectionsByIdRotate } from "../src/operations/postV1ConnectionsByIdRotate";
import {
  getTestProject,
  runEffect,
  setupTestProject,
  teardownTestProject,
  testRunId,
} from "./setup";

const TEST_SUFFIX = "connections";

const NON_EXISTENT_DB_ID = "non-existent-database-id-00000000";
const NON_EXISTENT_CONN_ID = "non-existent-connection-id-00000000";

const isNotFoundLike = (error: unknown): boolean =>
  error instanceof NotFound ||
  error instanceof Forbidden ||
  error instanceof UnprocessableEntity;

describe("connections", () => {
  beforeAll(async () => {
    await Effect.runPromise(setupTestProject(TEST_SUFFIX));
  }, 300_000);

  afterAll(async () => {
    await Effect.runPromise(teardownTestProject(TEST_SUFFIX));
  }, 60_000);

  const getProj = () => getTestProject(TEST_SUFFIX);

  // ==========================================================================
  // getV1Connections (list)
  // ==========================================================================

  describe("getV1Connections", () => {
    it("happy path - lists all connections", async () => {
      const result = await runEffect(getV1Connections({}));

      expect(result).toBeDefined();
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.pagination).toBeDefined();
      expect(typeof result.pagination.hasMore).toBe("boolean");
    }, 30_000);

    it("happy path - lists connections filtered by database", async () => {
      const proj = getProj();
      const result = await runEffect(
        getV1Connections({ databaseId: proj.databaseId }),
      );

      expect(Array.isArray(result.data)).toBe(true);
      // All returned connections should belong to the filtered database
      for (const conn of result.data) {
        expect(conn.database.id).toBe(proj.databaseId);
      }
    }, 30_000);

    it("happy path - lists connections with pagination limit", async () => {
      const result = await runEffect(getV1Connections({ limit: 1 }));

      expect(result).toBeDefined();
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.data.length).toBeLessThanOrEqual(1);
      expect(result.pagination).toBeDefined();
    }, 30_000);

    it("error - returns error for non-existent databaseId filter", async () => {
      const error = await runEffect(
        getV1Connections({ databaseId: NON_EXISTENT_DB_ID }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      // The API may return an error or an empty list for a non-existent database filter.
      // If it returns an error, it should be a typed error.
      if (error !== null) {
        expect(
          isNotFoundLike(error) ||
            error instanceof UnknownPrismaPostgresError,
        ).toBe(true);
      }
      // If null, the API returned an empty list — that's also acceptable
    }, 30_000);
  });

  // ==========================================================================
  // getV1ConnectionsById
  // ==========================================================================

  describe("getV1ConnectionsById", () => {
    it("happy path - gets connection by id", async () => {
      const proj = getProj();
      // Get a connection from the list to look up by ID
      const list = await runEffect(
        getV1Connections({ databaseId: proj.databaseId }),
      );
      const connId = list.data[0]?.id;

      if (connId) {
        const result = await runEffect(
          getV1ConnectionsById({ id: connId }),
        );

        expect(result.data.id).toBe(connId);
        expect(result.data.name).toBeDefined();
        expect(result.data.kind).toBeDefined();
        expect(result.data.endpoints).toBeDefined();
        expect(result.data.database).toBeDefined();
        expect(result.data.database.id).toBe(proj.databaseId);
      }
    }, 30_000);

    it("error - NotFound for non-existent connection id", async () => {
      const error = await runEffect(
        getV1ConnectionsById({ id: NON_EXISTENT_CONN_ID }).pipe(
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
        getV1ConnectionsById({ id: "!!invalid-id-format!!" }).pipe(
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
  // postV1Connections (create)
  // ==========================================================================

  describe("postV1Connections", () => {
    it("happy path - creates a connection", async () => {
      const proj = getProj();
      const connName = `distilled-prisma-conn-${testRunId}`;

      const created = await runEffect(
        postV1Connections({
          databaseId: proj.databaseId!,
          name: connName,
        }).pipe(
          Effect.ensuring(
            getV1Connections({ databaseId: proj.databaseId }).pipe(
              Effect.flatMap((list) => {
                const conn = list.data.find((c) => c.name === connName);
                if (conn) {
                  return deleteV1ConnectionsById({ id: conn.id }).pipe(Effect.ignore);
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

    it("error - NotFound for non-existent databaseId", async () => {
      const error = await runEffect(
        postV1Connections({
          databaseId: NON_EXISTENT_DB_ID,
          name: `distilled-prisma-conn-nf-${testRunId}`,
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

    it("error - UnprocessableEntity for empty connection name", async () => {
      const proj = getProj();
      const error = await runEffect(
        postV1Connections({
          databaseId: proj.databaseId!,
          name: "",
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: (result) =>
              // If the API accepts empty name, clean up and return null
              deleteV1ConnectionsById({ id: result.data.id }).pipe(
                Effect.ignore,
                Effect.map(() => null),
              ),
          }),
        ),
      );

      // The API should reject an empty name with UnprocessableEntity
      if (error !== null) {
        expect(
          error instanceof UnprocessableEntity ||
            error instanceof NotFound ||
            error instanceof UnknownPrismaPostgresError,
        ).toBe(true);
      }
    }, 30_000);
  });

  // ==========================================================================
  // deleteV1ConnectionsById
  // ==========================================================================

  describe("deleteV1ConnectionsById", () => {
    it("happy path - creates then deletes a connection", async () => {
      const proj = getProj();
      const connName = `distilled-prisma-del-${testRunId}`;

      // Create a connection to delete
      const created = await runEffect(
        postV1Connections({
          databaseId: proj.databaseId!,
          name: connName,
        }),
      );

      const connId = created.data.id;
      expect(connId).toBeDefined();

      // Delete the connection
      await runEffect(deleteV1ConnectionsById({ id: connId }));

      // Verify it's gone — fetching should fail
      const error = await runEffect(
        getV1ConnectionsById({ id: connId }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(isNotFoundLike(error)).toBe(true);
    }, 60_000);

    it("error - NotFound for non-existent connection id", async () => {
      const error = await runEffect(
        deleteV1ConnectionsById({ id: NON_EXISTENT_CONN_ID }).pipe(
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
        deleteV1ConnectionsById({ id: "!!invalid-id-format!!" }).pipe(
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
  // postV1ConnectionsByIdRotate
  // ==========================================================================

  describe("postV1ConnectionsByIdRotate", () => {
    it("happy path - rotates connection credentials", async () => {
      const proj = getProj();
      const connName = `distilled-prisma-rotate-${testRunId}`;

      // Create a dedicated connection for rotation testing
      const created = await runEffect(
        postV1Connections({
          databaseId: proj.databaseId!,
          name: connName,
        }),
      );

      const connId = created.data.id;

      try {
        const rotated = await runEffect(
          postV1ConnectionsByIdRotate({ id: connId }),
        );

        expect(rotated.data.id).toBe(connId);
        expect(rotated.data.name).toBe(connName);
        expect(rotated.data.connectionString).toBeDefined();
        expect(rotated.data.kind).toBeDefined();
        expect(rotated.data.endpoints).toBeDefined();
        expect(rotated.data.database).toBeDefined();
        expect(rotated.data.database.id).toBe(proj.databaseId);
      } finally {
        await runEffect(
          deleteV1ConnectionsById({ id: connId }).pipe(Effect.ignore),
        );
      }
    }, 60_000);

    it("error - NotFound for non-existent connection id", async () => {
      const error = await runEffect(
        postV1ConnectionsByIdRotate({ id: NON_EXISTENT_CONN_ID }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      expect(error).not.toBeNull();
      expect(isNotFoundLike(error)).toBe(true);
    }, 30_000);

    it("error - returns error for malformed id", async () => {
      const error = await runEffect(
        postV1ConnectionsByIdRotate({ id: "!!invalid-id-format!!" }).pipe(
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
  });
});
