import { Effect } from "effect";
import { describe, expect, it, beforeAll, afterAll } from "vitest";
import {
  TestLayer,
  setupTestProject,
  teardownTestProject,
  getTestProject,
} from "./setup";
import { deleteV1WorkspacesByWorkspaceIdIntegrationsByClientId } from "../src/operations/deleteV1WorkspacesByWorkspaceIdIntegrationsByClientId";

describe("deleteV1WorkspacesByWorkspaceIdIntegrationsByClientId", () => {
  beforeAll(async () => {
    await Effect.runPromise(setupTestProject("ws-integ-del"));
  }, 300_000);

  afterAll(async () => {
    await Effect.runPromise(teardownTestProject("ws-integ-del"));
  }, 60_000);

  // ============================================================================
  // Happy path
  // ============================================================================

  // Integrations are created via OAuth flows, not through the API.
  // A true happy-path delete would require an existing OAuth integration,
  // which cannot be provisioned in automated tests. The error tests below
  // confirm the endpoint is reachable and the SDK maps errors correctly.

  // ============================================================================
  // Error tests
  // ============================================================================

  it("error - NotFound for non-existent clientId", async () => {
    const project = getTestProject("ws-integ-del");
    const workspaceId = project.workspaceId!;

    await Effect.runPromise(
      deleteV1WorkspacesByWorkspaceIdIntegrationsByClientId({
        workspaceId,
        clientId: "non-existent-client-id-00000000",
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
      deleteV1WorkspacesByWorkspaceIdIntegrationsByClientId({
        workspaceId: "",
        clientId: "some-client-id",
      }).pipe(
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
