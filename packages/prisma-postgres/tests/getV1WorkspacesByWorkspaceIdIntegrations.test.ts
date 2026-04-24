import { Effect } from "effect";
import { describe, expect, it, beforeAll, afterAll } from "vitest";
import {
  TestLayer,
  runEffect,
  setupTestProject,
  teardownTestProject,
  getTestProject,
} from "./setup";
import { getV1WorkspacesByWorkspaceIdIntegrations } from "../src/operations/getV1WorkspacesByWorkspaceIdIntegrations";

describe("getV1WorkspacesByWorkspaceIdIntegrations", () => {
  beforeAll(async () => {
    await Effect.runPromise(setupTestProject("ws-integ"));
  }, 300_000);

  afterAll(async () => {
    await Effect.runPromise(teardownTestProject("ws-integ"));
  }, 60_000);

  // ============================================================================
  // Happy path
  // ============================================================================

  it("happy path - lists integrations for a workspace", async () => {
    const project = getTestProject("ws-integ");
    const workspaceId = project.workspaceId!;

    const result = await runEffect(
      getV1WorkspacesByWorkspaceIdIntegrations({ workspaceId }),
    );

    expect(result.data).toBeDefined();
    expect(Array.isArray(result.data)).toBe(true);
    expect(result.pagination).toBeDefined();
    expect(typeof result.pagination.hasMore).toBe("boolean");
    if (result.data.length > 0) {
      const integration = result.data[0];
      expect(integration.id).toBeDefined();
      expect(integration.client).toBeDefined();
      expect(integration.client.id).toBeDefined();
      expect(integration.scopes).toBeDefined();
    }
  }, 30_000);

  it("happy path - supports limit parameter", async () => {
    const project = getTestProject("ws-integ");
    const workspaceId = project.workspaceId!;

    const result = await runEffect(
      getV1WorkspacesByWorkspaceIdIntegrations({ workspaceId, limit: 1 }),
    );

    expect(result.data).toBeDefined();
    expect(result.data.length).toBeLessThanOrEqual(1);
  }, 30_000);

  // ============================================================================
  // Error tests
  // ============================================================================

  it("error - NotFound for non-existent workspaceId", async () => {
    await Effect.runPromise(
      getV1WorkspacesByWorkspaceIdIntegrations({
        workspaceId: "non-existent-ws-id-00000000",
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["NotFound", "UnprocessableEntity"]).toContain((e as any)._tag);
        }),
        Effect.provide(TestLayer),
      ),
    );
  }, 30_000);

  it("error - UnprocessableEntity for malformed workspaceId", async () => {
    await Effect.runPromise(
      getV1WorkspacesByWorkspaceIdIntegrations({ workspaceId: "" }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["UnprocessableEntity", "NotFound", "BadRequest"]).toContain(
            (e as any)._tag,
          );
        }),
        Effect.provide(TestLayer),
      ),
    );
  }, 30_000);
});
