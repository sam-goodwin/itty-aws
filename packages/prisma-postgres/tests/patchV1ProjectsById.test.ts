import { Effect, Layer } from "effect";
import * as Redacted from "effect/Redacted";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it, beforeAll, afterAll } from "vitest";
import {
  TestLayer,
  runEffect,
  setupTestProject,
  teardownTestProject,
  getTestProject,
  testRunId,
} from "./setup";
import { patchV1ProjectsById } from "../src/operations/patchV1ProjectsById";
import { Credentials, DEFAULT_API_BASE_URL } from "../src/credentials";

// Layer with an invalid token to trigger Forbidden/Unauthorized errors
const BadTokenLayer = Layer.merge(
  Layer.succeed(Credentials, {
    apiToken: Redacted.make("invalid_token_000000"),
    apiBaseUrl: DEFAULT_API_BASE_URL,
  }),
  FetchHttpClient.layer,
);

describe("patchV1ProjectsById", () => {
  beforeAll(async () => {
    await Effect.runPromise(setupTestProject("proj-patch"));
  }, 300_000);

  afterAll(async () => {
    await Effect.runPromise(teardownTestProject("proj-patch"));
  }, 60_000);

  // ============================================================================
  // Happy path
  // ============================================================================

  it("happy path - updates project name", async () => {
    const project = getTestProject("proj-patch");
    const newName = `distilled-prisma-proj-renamed-${testRunId}`;

    const result = await runEffect(
      patchV1ProjectsById({
        id: project.projectId,
        name: newName,
      }),
    );

    expect(result.data.id).toBe(project.projectId);
    expect(result.data.name).toBe(newName);
    expect(result.data.workspace).toBeDefined();
    expect(result.data.workspace.id).toBeDefined();
  }, 30_000);

  // ============================================================================
  // Error tests
  // ============================================================================

  it("error - NotFound for non-existent project id", async () => {
    await Effect.runPromise(
      patchV1ProjectsById({
        id: "non-existent-proj-id-00000000",
        name: "should-not-exist",
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["NotFound", "UnprocessableEntity"]).toContain((e as any)._tag);
        }),
        Effect.provide(TestLayer),
      ),
    );
  }, 30_000);

  it("error - Forbidden with invalid token", async () => {
    const project = getTestProject("proj-patch");

    await Effect.runPromise(
      patchV1ProjectsById({
        id: project.projectId,
        name: "should-fail-auth",
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["Forbidden", "Unauthorized"]).toContain((e as any)._tag);
        }),
        Effect.provide(BadTokenLayer),
      ),
    );
  }, 30_000);

  it("error - UnprocessableEntity for malformed id", async () => {
    await Effect.runPromise(
      patchV1ProjectsById({
        id: "",
        name: "should-fail-validation",
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
