import { Effect } from "effect";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { NotFound, UnprocessableEntity, Forbidden } from "../src/errors";
import { getV1Connections } from "../src/operations/getV1Connections";
import { getV1ConnectionsById } from "../src/operations/getV1ConnectionsById";
import { postV1Connections } from "../src/operations/postV1Connections";
import { deleteV1ConnectionsById } from "../src/operations/deleteV1ConnectionsById";
import { postV1DatabasesByDatabaseIdConnections } from "../src/operations/postV1DatabasesByDatabaseIdConnections";
import { postV1ConnectionsByIdRotate } from "../src/operations/postV1ConnectionsByIdRotate";
import {
  getTestProject,
  runEffect,
  setupTestProject,
  teardownTestProject,
  testRunId,
} from "./setup";

const TEST_SUFFIX = "connections";

const NON_EXISTENT_CONN_ID = "non-existent-connection-id-00000000";
const NON_EXISTENT_DB_ID = "non-existent-database-id-00000000";

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
    }, 30_000);

    it("happy path - lists connections filtered by database", async () => {
      const proj = getProj();
      const result = await runEffect(
        getV1Connections({ databaseId: proj.databaseId }),
      );

      expect(Array.isArray(result.data)).toBe(true);
    }, 30_000);
  });

  // ==========================================================================
  // getV1ConnectionsById
  // ==========================================================================

  describe("getV1ConnectionsById", () => {
    it("happy path - gets connection by id", async () => {
      const proj = getProj();
      // Get first connection from the list
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
      }
    }, 30_000);

    it("error - NotFound for non-existent connection", async () => {
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
  });

  // ==========================================================================
  // postV1Connections & deleteV1ConnectionsById (create + delete lifecycle)
  // ==========================================================================

  describe("postV1Connections & deleteV1ConnectionsById", () => {
    it("happy path - creates and deletes a connection", async () => {
      const proj = getProj();
      const connName = `distilled-prisma-conn-${testRunId}`;
      let createdConnId: string | null = null;

      try {
        const created = await runEffect(
          postV1Connections({
            databaseId: proj.databaseId!,
            name: connName,
          }),
        );

        createdConnId = created.data.id;
        expect(created.data.id).toBeDefined();
        expect(created.data.name).toBe(connName);
        expect(created.data.database.id).toBe(proj.databaseId);
      } finally {
        if (createdConnId) {
          await runEffect(
            deleteV1ConnectionsById({ id: createdConnId }).pipe(Effect.ignore),
          );
        }
      }
    }, 60_000);

    it("error - NotFound when creating connection for non-existent database", async () => {
      const error = await runEffect(
        postV1Connections({
          databaseId: NON_EXISTENT_DB_ID,
          name: "test-conn",
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

    it("error - NotFound when deleting non-existent connection", async () => {
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
  });

  // ==========================================================================
  // postV1DatabasesByDatabaseIdConnections
  // ==========================================================================

  describe("postV1DatabasesByDatabaseIdConnections", () => {
    it("happy path - creates a connection via database path", async () => {
      const proj = getProj();
      const connName = `distilled-prisma-dbconn-${testRunId}`;
      let createdConnId: string | null = null;

      try {
        const created = await runEffect(
          postV1DatabasesByDatabaseIdConnections({
            databaseId: proj.databaseId!,
            name: connName,
          }),
        );

        createdConnId = created.data.id;
        expect(created.data.id).toBeDefined();
        expect(created.data.name).toBe(connName);
        expect(created.data.database.id).toBe(proj.databaseId);
      } finally {
        if (createdConnId) {
          await runEffect(
            deleteV1ConnectionsById({ id: createdConnId }).pipe(Effect.ignore),
          );
        }
      }
    }, 60_000);

    it("error - NotFound for non-existent database", async () => {
      const error = await runEffect(
        postV1DatabasesByDatabaseIdConnections({
          databaseId: NON_EXISTENT_DB_ID,
          name: "test-conn",
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
  // postV1ConnectionsByIdRotate
  // ==========================================================================

  describe("postV1ConnectionsByIdRotate", () => {
    it("happy path - rotates connection credentials", async () => {
      const proj = getProj();
      // Create a connection to rotate
      const connName = `distilled-prisma-rotate-${testRunId}`;
      let createdConnId: string | null = null;

      try {
        const created = await runEffect(
          postV1Connections({
            databaseId: proj.databaseId!,
            name: connName,
          }),
        );

        createdConnId = created.data.id;

        const rotated = await runEffect(
          postV1ConnectionsByIdRotate({ id: createdConnId }),
        );

        expect(rotated.data.id).toBe(createdConnId);
        expect(rotated.data.name).toBe(connName);
      } finally {
        if (createdConnId) {
          await runEffect(
            deleteV1ConnectionsById({ id: createdConnId }).pipe(Effect.ignore),
          );
        }
      }
    }, 60_000);
  });
});
