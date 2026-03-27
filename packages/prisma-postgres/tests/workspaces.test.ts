import { Effect } from "effect";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { NotFound, UnprocessableEntity } from "../src/errors";
import { getV1Workspaces } from "../src/operations/getV1Workspaces";
import { getV1WorkspacesById } from "../src/operations/getV1WorkspacesById";
import { getV1WorkspacesByWorkspaceIdIntegrations } from "../src/operations/getV1WorkspacesByWorkspaceIdIntegrations";
import { deleteV1WorkspacesByWorkspaceIdIntegrationsByClientId } from "../src/operations/deleteV1WorkspacesByWorkspaceIdIntegrationsByClientId";
import {
  getTestProject,
  runEffect,
  setupTestProject,
  teardownTestProject,
} from "./setup";

const TEST_SUFFIX = "workspaces";

const NON_EXISTENT_WORKSPACE_ID = "non-existent-workspace-id-00000000";
const NON_EXISTENT_CLIENT_ID = "non-existent-client-id-00000000";

const isNotFoundLike = (error: unknown): boolean =>
  error instanceof NotFound || error instanceof UnprocessableEntity;

describe("workspaces", () => {
  beforeAll(async () => {
    await Effect.runPromise(setupTestProject(TEST_SUFFIX));
  }, 300_000);

  afterAll(async () => {
    await Effect.runPromise(teardownTestProject(TEST_SUFFIX));
  }, 60_000);

  const getProj = () => getTestProject(TEST_SUFFIX);

  // ==========================================================================
  // getV1Workspaces (list)
  // ==========================================================================

  describe("getV1Workspaces", () => {
    it("happy path - lists workspaces", async () => {
      const result = await runEffect(getV1Workspaces({}));

      expect(result).toBeDefined();
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.data.length).toBeGreaterThan(0);
      expect(result.pagination).toBeDefined();
    }, 30_000);

    it("happy path - lists workspaces with pagination", async () => {
      const result = await runEffect(getV1Workspaces({ limit: 1 }));

      expect(Array.isArray(result.data)).toBe(true);
      expect(result.pagination).toBeDefined();
    }, 30_000);
  });

  // ==========================================================================
  // getV1WorkspacesById
  // ==========================================================================

  describe("getV1WorkspacesById", () => {
    it("happy path - gets workspace by id", async () => {
      const proj = getProj();
      const result = await runEffect(
        getV1WorkspacesById({ id: proj.workspaceId! }),
      );

      expect(result.data.id).toBe(proj.workspaceId);
      expect(result.data.name).toBeDefined();
      expect(result.data.createdAt).toBeDefined();
    }, 30_000);

    it("error - NotFound for non-existent workspace", async () => {
      const error = await runEffect(
        getV1WorkspacesById({ id: NON_EXISTENT_WORKSPACE_ID }).pipe(
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
  // getV1WorkspacesByWorkspaceIdIntegrations
  // ==========================================================================

  describe("getV1WorkspacesByWorkspaceIdIntegrations", () => {
    it("happy path - lists integrations for workspace", async () => {
      const proj = getProj();
      const result = await runEffect(
        getV1WorkspacesByWorkspaceIdIntegrations({
          workspaceId: proj.workspaceId!,
        }),
      );

      expect(result).toBeDefined();
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.pagination).toBeDefined();
    }, 30_000);

    it("error - NotFound for non-existent workspace", async () => {
      const error = await runEffect(
        getV1WorkspacesByWorkspaceIdIntegrations({
          workspaceId: NON_EXISTENT_WORKSPACE_ID,
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
  // deleteV1WorkspacesByWorkspaceIdIntegrationsByClientId
  // ==========================================================================

  describe("deleteV1WorkspacesByWorkspaceIdIntegrationsByClientId", () => {
    // NOTE: Cannot test happy path without a valid integration to revoke

    it("error - NotFound for non-existent integration", async () => {
      const proj = getProj();
      const error = await runEffect(
        deleteV1WorkspacesByWorkspaceIdIntegrationsByClientId({
          workspaceId: proj.workspaceId!,
          clientId: NON_EXISTENT_CLIENT_ID,
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
