import { Effect } from "effect";
import { describe, expect, it, beforeAll, afterAll } from "vitest";
import {
  TestLayer,
  runEffect,
  setupTestProject,
  teardownTestProject,
  getTestProject,
} from "./setup";
import { getV1IntegrationsById } from "../src/operations/getV1IntegrationsById";
import { getV1Integrations } from "../src/operations/getV1Integrations";

describe("getV1IntegrationsById", () => {
  let existingIntegrationId: string | undefined;

  beforeAll(async () => {
    await Effect.runPromise(setupTestProject("integ-get"));

    // Try to find an existing integration to use for the happy path
    const project = getTestProject("integ-get");
    const workspaceId = project.workspaceId!;
    const result = await runEffect(
      getV1Integrations({ workspaceId, limit: 1 }),
    );
    if (result.data.length > 0) {
      existingIntegrationId = result.data[0].id;
    }
  }, 300_000);

  afterAll(async () => {
    await Effect.runPromise(teardownTestProject("integ-get"));
  }, 60_000);

  // ============================================================================
  // Happy path
  // ============================================================================

  it("happy path - gets an integration by id", async (ctx) => {
    if (!existingIntegrationId) {
      ctx.skip();
      return;
    }

    const result = await runEffect(
      getV1IntegrationsById({ id: existingIntegrationId }),
    );

    expect(result.data.id).toBe(existingIntegrationId);
    expect(result.data.url).toBeDefined();
    expect(result.data.scopes).toBeDefined();
    expect(result.data.client).toBeDefined();
    expect(result.data.client.id).toBeDefined();
    expect(result.data.createdByUser).toBeDefined();
  }, 30_000);

  // ============================================================================
  // Error tests
  // ============================================================================

  it("error - NotFound for non-existent integration id", async () => {
    await Effect.runPromise(
      getV1IntegrationsById({ id: "non-existent-integ-id-00000000" }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["NotFound", "UnprocessableEntity"]).toContain((e as any)._tag);
        }),
        Effect.provide(TestLayer),
      ),
    );
  }, 30_000);

  it("error - UnprocessableEntity for malformed id", async () => {
    await Effect.runPromise(
      getV1IntegrationsById({ id: "" }).pipe(
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
