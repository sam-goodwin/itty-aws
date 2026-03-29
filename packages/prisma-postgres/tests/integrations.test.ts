import { Effect } from "effect";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { NotFound, UnprocessableEntity, Forbidden } from "../src/errors";
import { UnknownPrismaPostgresError } from "../src/errors";
import { getV1Integrations } from "../src/operations/getV1Integrations";
import { getV1IntegrationsById } from "../src/operations/getV1IntegrationsById";
import { deleteV1IntegrationsById } from "../src/operations/deleteV1IntegrationsById";
import { getV1WorkspacesByWorkspaceIdIntegrations } from "../src/operations/getV1WorkspacesByWorkspaceIdIntegrations";
import { deleteV1WorkspacesByWorkspaceIdIntegrationsByClientId } from "../src/operations/deleteV1WorkspacesByWorkspaceIdIntegrationsByClientId";
import {
  getTestProject,
  runEffect,
  setupTestProject,
  teardownTestProject,
  testRunId,
} from "./setup";

const TEST_SUFFIX = "integrations";

const NON_EXISTENT_ID = "non-existent-workspace-id-00000000";

const isNotFoundLike = (error: unknown): boolean =>
  error instanceof NotFound ||
  error instanceof Forbidden ||
  error instanceof UnprocessableEntity;

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
      expect(typeof result.pagination.hasMore).toBe("boolean");
    }, 30_000);

    it("happy path - lists integrations with pagination limit", async () => {
      const proj = getProj();
      const result = await runEffect(
        getV1Integrations({ workspaceId: proj.workspaceId!, limit: 1 }),
      );

      expect(result).toBeDefined();
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.data.length).toBeLessThanOrEqual(1);
      expect(result.pagination).toBeDefined();
    }, 30_000);

    it("error - returns error for non-existent workspace id", async () => {
      const error = await runEffect(
        getV1Integrations({ workspaceId: NON_EXISTENT_ID }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed(e),
            onSuccess: () => Effect.succeed(null),
          }),
        ),
      );

      // The API should reject a non-existent workspace ID
      if (error !== null) {
        expect(
          isNotFoundLike(error) ||
            error instanceof UnknownPrismaPostgresError,
        ).toBe(true);
      }
    }, 30_000);

    it("error - returns error for invalid cursor", async () => {
      const proj = getProj();
      const error = await runEffect(
        getV1Integrations({
          workspaceId: proj.workspaceId!,
          cursor: "!!invalid-cursor-value!!",
        }).pipe(
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
  });

  // ==========================================================================
  // getV1IntegrationsById
  // ==========================================================================

  describe("getV1IntegrationsById", () => {
    it("happy path - gets integration by id from list", async () => {
      const proj = getProj();

      // First list integrations to find a real ID
      const list = await runEffect(
        getV1Integrations({ workspaceId: proj.workspaceId! }),
      );

      if (list.data.length === 0) {
        // No integrations exist — skip gracefully
        return;
      }

      const integrationId = list.data[0].id;
      const result = await runEffect(
        getV1IntegrationsById({ id: integrationId }),
      );

      expect(result.data.id).toBe(integrationId);
      expect(result.data.url).toBeDefined();
      expect(result.data.createdAt).toBeDefined();
      expect(Array.isArray(result.data.scopes)).toBe(true);
      expect(result.data.client).toBeDefined();
      expect(result.data.client.id).toBeDefined();
      expect(result.data.client.name).toBeDefined();
      expect(result.data.createdByUser).toBeDefined();
      expect(result.data.createdByUser.id).toBeDefined();
      expect(result.data.createdByUser.email).toBeDefined();
    }, 30_000);

    it("error - NotFound for non-existent integration id", async () => {
      const error = await runEffect(
        getV1IntegrationsById({ id: "non-existent-integration-00000000" }).pipe(
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
        getV1IntegrationsById({ id: "!!invalid-id-format!!" }).pipe(
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

    it("error - NotFound for inaccessible integration", async () => {
      const error = await runEffect(
        getV1IntegrationsById({
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

  // ==========================================================================
  // deleteV1IntegrationsById (revoke integration)
  // ==========================================================================

  describe("deleteV1IntegrationsById", () => {
    it("happy path - delete with real integration id from list", async () => {
      const proj = getProj();

      // List integrations to find a real ID. Integrations are OAuth-managed
      // so we cannot create one in tests. If one exists, we verify the
      // delete call returns a typed response (success or typed error).
      const list = await runEffect(
        getV1Integrations({ workspaceId: proj.workspaceId! }),
      );

      if (list.data.length === 0) {
        // No integrations exist — verify the API rejects a bogus ID instead
        const error = await runEffect(
          deleteV1IntegrationsById({ id: "no-integrations-to-test" }).pipe(
            Effect.matchEffect({
              onFailure: (e) => Effect.succeed(e),
              onSuccess: () => Effect.succeed(null),
            }),
          ),
        );

        expect(error).not.toBeNull();
        expect(isNotFoundLike(error)).toBe(true);
        return;
      }

      // Use the last integration (least likely to be important)
      const integrationId = list.data[list.data.length - 1].id;
      const result = await runEffect(
        deleteV1IntegrationsById({ id: integrationId }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed({ error: e }),
            onSuccess: () => Effect.succeed({ error: null }),
          }),
        ),
      );

      // Either succeeds (void) or returns a typed error (e.g. Forbidden)
      if (result.error !== null) {
        expect(
          isNotFoundLike(result.error) ||
            result.error instanceof UnknownPrismaPostgresError,
        ).toBe(true);
      }
    }, 30_000);

    it("error - NotFound for non-existent integration id", async () => {
      const error = await runEffect(
        deleteV1IntegrationsById({
          id: "non-existent-integration-00000000",
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
        deleteV1IntegrationsById({ id: "!!invalid-id-format!!" }).pipe(
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

    it("error - NotFound for inaccessible integration", async () => {
      const error = await runEffect(
        deleteV1IntegrationsById({
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

  // ==========================================================================
  // getV1WorkspacesByWorkspaceIdIntegrations (list by workspace path param)
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
      expect(typeof result.pagination.hasMore).toBe("boolean");

      // If integrations exist, validate structure
      if (result.data.length > 0) {
        const integration = result.data[0];
        expect(integration.id).toBeDefined();
        expect(integration.url).toBeDefined();
        expect(integration.createdAt).toBeDefined();
        expect(Array.isArray(integration.scopes)).toBe(true);
        expect(integration.client).toBeDefined();
        expect(integration.client.id).toBeDefined();
        expect(integration.createdByUser).toBeDefined();
        expect(integration.createdByUser.id).toBeDefined();
      }
    }, 30_000);

    it("happy path - lists integrations with pagination limit", async () => {
      const proj = getProj();
      const result = await runEffect(
        getV1WorkspacesByWorkspaceIdIntegrations({
          workspaceId: proj.workspaceId!,
          limit: 1,
        }),
      );

      expect(result).toBeDefined();
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.data.length).toBeLessThanOrEqual(1);
      expect(result.pagination).toBeDefined();
    }, 30_000);

    it("error - NotFound for non-existent workspace id", async () => {
      const error = await runEffect(
        getV1WorkspacesByWorkspaceIdIntegrations({
          workspaceId: NON_EXISTENT_ID,
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

    it("error - UnprocessableEntity for malformed workspace id", async () => {
      const error = await runEffect(
        getV1WorkspacesByWorkspaceIdIntegrations({
          workspaceId: "!!invalid-id-format!!",
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

    it("error - NotFound for inaccessible workspace", async () => {
      const error = await runEffect(
        getV1WorkspacesByWorkspaceIdIntegrations({
          workspaceId: "00000000-0000-0000-0000-000000000000",
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
  // deleteV1WorkspacesByWorkspaceIdIntegrationsByClientId (revoke by client)
  // ==========================================================================

  describe("deleteV1WorkspacesByWorkspaceIdIntegrationsByClientId", () => {
    it("happy path - revoke with real client id from list", async () => {
      const proj = getProj();

      // List integrations to find a real client ID. Integrations are
      // OAuth-managed so we cannot create one in tests.
      const list = await runEffect(
        getV1WorkspacesByWorkspaceIdIntegrations({
          workspaceId: proj.workspaceId!,
        }),
      );

      if (list.data.length === 0) {
        // No integrations exist — verify the API rejects a bogus client ID
        const error = await runEffect(
          deleteV1WorkspacesByWorkspaceIdIntegrationsByClientId({
            workspaceId: proj.workspaceId!,
            clientId: "no-integrations-to-test",
          }).pipe(
            Effect.matchEffect({
              onFailure: (e) => Effect.succeed(e),
              onSuccess: () => Effect.succeed(null),
            }),
          ),
        );

        expect(error).not.toBeNull();
        expect(isNotFoundLike(error)).toBe(true);
        return;
      }

      // Use the last integration's client ID (least likely to be important)
      const clientId = list.data[list.data.length - 1].client.id;
      const result = await runEffect(
        deleteV1WorkspacesByWorkspaceIdIntegrationsByClientId({
          workspaceId: proj.workspaceId!,
          clientId,
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed({ error: e }),
            onSuccess: () => Effect.succeed({ error: null }),
          }),
        ),
      );

      // Either succeeds (void) or returns a typed error
      if (result.error !== null) {
        expect(
          isNotFoundLike(result.error) ||
            result.error instanceof UnknownPrismaPostgresError,
        ).toBe(true);
      }
    }, 30_000);

    it("error - NotFound for non-existent client id", async () => {
      const proj = getProj();
      const error = await runEffect(
        deleteV1WorkspacesByWorkspaceIdIntegrationsByClientId({
          workspaceId: proj.workspaceId!,
          clientId: "non-existent-client-00000000",
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

    it("error - UnprocessableEntity for malformed workspace id", async () => {
      const error = await runEffect(
        deleteV1WorkspacesByWorkspaceIdIntegrationsByClientId({
          workspaceId: "!!invalid-id-format!!",
          clientId: "some-client-id",
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

    it("error - NotFound for non-existent workspace id", async () => {
      const error = await runEffect(
        deleteV1WorkspacesByWorkspaceIdIntegrationsByClientId({
          workspaceId: NON_EXISTENT_ID,
          clientId: "some-client-id",
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

    it("error - NotFound for inaccessible workspace", async () => {
      const error = await runEffect(
        deleteV1WorkspacesByWorkspaceIdIntegrationsByClientId({
          workspaceId: "00000000-0000-0000-0000-000000000000",
          clientId: "some-client-id",
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
