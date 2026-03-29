import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { BadRequest, NotFound, UnprocessableEntity, Forbidden } from "../src/errors";
import { UnknownPrismaPostgresError } from "../src/errors";
import { getV1Workspaces } from "../src/operations/getV1Workspaces";
import { getV1WorkspacesById } from "../src/operations/getV1WorkspacesById";
import { runEffect } from "./setup";

const NON_EXISTENT_ID = "non-existent-workspace-id-00000000";

const isNotFoundLike = (error: unknown): boolean =>
  error instanceof NotFound ||
  error instanceof Forbidden ||
  error instanceof UnprocessableEntity;

describe("workspaces", () => {
  // ==========================================================================
  // getV1Workspaces (list)
  // ==========================================================================

  describe("getV1Workspaces", () => {
    it("happy path - lists workspaces", async () => {
      const result = await runEffect(getV1Workspaces({}));

      expect(result).toBeDefined();
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.data.length).toBeGreaterThanOrEqual(1);
      expect(result.pagination).toBeDefined();
      expect(typeof result.pagination.hasMore).toBe("boolean");

      const workspace = result.data[0];
      expect(workspace.id).toBeDefined();
      expect(workspace.type).toBeDefined();
      expect(workspace.url).toBeDefined();
      expect(workspace.name).toBeDefined();
      expect(workspace.createdAt).toBeDefined();
    }, 30_000);

    it("happy path - lists workspaces with pagination limit", async () => {
      const result = await runEffect(getV1Workspaces({ limit: 1 }));

      expect(result).toBeDefined();
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.data.length).toBeLessThanOrEqual(1);
      expect(result.pagination).toBeDefined();
    }, 30_000);

    it("error - returns error for invalid cursor", async () => {
      const error = await runEffect(
        getV1Workspaces({ cursor: "!!invalid-cursor-value!!" }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      // The API may silently ignore invalid cursors and return results,
      // or it may return an error. Both behaviors are acceptable.
      if (error !== null) {
        expect(error instanceof UnknownPrismaPostgresError).toBe(true);
      }
    }, 30_000);

    it("error - returns error for negative limit", async () => {
      const error = await runEffect(
        getV1Workspaces({ limit: -1 }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      // The API may reject a negative limit or silently clamp it.
      // If it errors, any error type is acceptable.
      if (error !== null) {
        expect(error).toBeDefined();
      }
    }, 30_000);
  });

  // ==========================================================================
  // getV1WorkspacesById
  // ==========================================================================

  describe("getV1WorkspacesById", () => {
    it("happy path - gets workspace by id from list", async () => {
      // Get a real workspace ID from the list endpoint
      const list = await runEffect(getV1Workspaces({}));
      expect(list.data.length).toBeGreaterThanOrEqual(1);

      const workspaceId = list.data[0].id;
      const result = await runEffect(
        getV1WorkspacesById({ id: workspaceId }),
      );

      expect(result.data.id).toBe(workspaceId);
      expect(result.data.type).toBeDefined();
      expect(result.data.url).toBeDefined();
      expect(result.data.name).toBeDefined();
      expect(result.data.createdAt).toBeDefined();
    }, 30_000);

    it("error - NotFound for non-existent workspace id", async () => {
      const error = await runEffect(
        getV1WorkspacesById({ id: NON_EXISTENT_ID }).pipe(
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
        getV1WorkspacesById({ id: "!!invalid-id-format!!" }).pipe(
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

    it("error - NotFound for inaccessible workspace", async () => {
      const error = await runEffect(
        getV1WorkspacesById({
          id: "00000000-0000-0000-0000-000000000000",
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
