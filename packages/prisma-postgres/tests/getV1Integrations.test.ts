import { Effect, Layer } from "effect";
import * as Redacted from "effect/Redacted";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { Credentials, DEFAULT_API_BASE_URL } from "../src/credentials";
import { getV1Integrations } from "../src/operations/getV1Integrations";
import {
  getTestProject,
  runEffect,
  setupTestProject,
  teardownTestProject,
} from "./setup";

// Layer with an invalid token to trigger Unauthorized/Forbidden errors
const BadTokenLayer = Layer.merge(
  Layer.succeed(
    Credentials,
    Effect.succeed({
      apiToken: Redacted.make("invalid_token_000000"),
      apiBaseUrl: DEFAULT_API_BASE_URL,
    }),
  ),
  FetchHttpClient.layer,
);

describe("getV1Integrations", () => {
  beforeAll(async () => {
    await Effect.runPromise(setupTestProject("integ-list"));
  }, 300_000);

  afterAll(async () => {
    await Effect.runPromise(teardownTestProject("integ-list"));
  }, 60_000);

  // ============================================================================
  // Happy path
  // ============================================================================

  it("happy path - lists integrations for a workspace", async () => {
    const project = getTestProject("integ-list");
    const workspaceId = project.workspaceId!;

    const result = await runEffect(getV1Integrations({ workspaceId }));

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
    const project = getTestProject("integ-list");
    const workspaceId = project.workspaceId!;

    const result = await runEffect(
      getV1Integrations({ workspaceId, limit: 1 }),
    );

    expect(result.data).toBeDefined();
    expect(result.data.length).toBeLessThanOrEqual(1);
  }, 30_000);

  // ============================================================================
  // Error tests
  // ============================================================================

  it("error - Unauthorized with invalid token", async () => {
    const project = getTestProject("integ-list");
    const workspaceId = project.workspaceId!;

    await Effect.runPromise(
      getV1Integrations({ workspaceId }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["Unauthorized", "Forbidden"]).toContain((e as any)._tag);
        }),
        Effect.provide(BadTokenLayer),
      ),
    );
  }, 30_000);
});
