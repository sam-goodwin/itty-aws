import { Effect } from "effect";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { NotFound, UnprocessableEntity } from "../src/errors";
import { getV1Integrations } from "../src/operations/getV1Integrations";
import { getV1IntegrationsById } from "../src/operations/getV1IntegrationsById";
import { deleteV1IntegrationsById } from "../src/operations/deleteV1IntegrationsById";
import {
  getTestProject,
  runEffect,
  setupTestProject,
  teardownTestProject,
} from "./setup";

const TEST_SUFFIX = "integrations";

const NON_EXISTENT_INTEGRATION_ID = "non-existent-integration-id-00000000";

const isNotFoundLike = (error: unknown): boolean =>
  error instanceof NotFound || error instanceof UnprocessableEntity;

describe("integrations", () => {
  beforeAll(async () => {
    await Effect.runPromise(setupTestProject(TEST_SUFFIX));
  }, 300_000);

  afterAll(async () => {
    await Effect.runPromise(teardownTestProject(TEST_SUFFIX));
  }, 60_000);

  const getProj = () => getTestProject(TEST_SUFFIX);

  // ==========================================================================
  // getV1Integrations (list)
  // ==========================================================================

  describe("getV1Integrations", () => {
    it("happy path - lists integrations for workspace", async () => {
      const proj = getProj();
      const result = await runEffect(
        getV1Integrations({ workspaceId: proj.workspaceId! }),
      );

      expect(result).toBeDefined();
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.pagination).toBeDefined();
    }, 30_000);

    it("happy path - lists integrations with pagination", async () => {
      const proj = getProj();
      const result = await runEffect(
        getV1Integrations({ workspaceId: proj.workspaceId!, limit: 1 }),
      );

      expect(Array.isArray(result.data)).toBe(true);
      expect(result.pagination).toBeDefined();
    }, 30_000);
  });

  // ==========================================================================
  // getV1IntegrationsById
  // ==========================================================================

  describe("getV1IntegrationsById", () => {
    // NOTE: Happy path requires an existing integration ID, which we may not have

    it("error - NotFound for non-existent integration", async () => {
      const error = await runEffect(
        getV1IntegrationsById({ id: NON_EXISTENT_INTEGRATION_ID }).pipe(
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
  // deleteV1IntegrationsById
  // ==========================================================================

  describe("deleteV1IntegrationsById", () => {
    // NOTE: Cannot test happy path without a valid integration to delete

    it("error - NotFound for non-existent integration", async () => {
      const error = await runEffect(
        deleteV1IntegrationsById({ id: NON_EXISTENT_INTEGRATION_ID }).pipe(
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
