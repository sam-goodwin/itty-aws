import { Effect } from "effect";
import { describe, expect, it, beforeAll, afterAll } from "vitest";
import {
  TestLayer,
  runEffect,
  setupTestProject,
  teardownTestProject,
  getTestProject,
} from "./setup";
import { postV1ProjectsByIdTransfer } from "../src/operations/postV1ProjectsByIdTransfer";

describe("postV1ProjectsByIdTransfer", () => {
  beforeAll(async () => {
    await Effect.runPromise(setupTestProject("proj-xfer"));
  }, 300_000);

  afterAll(async () => {
    await Effect.runPromise(teardownTestProject("proj-xfer"));
  }, 60_000);

  // ============================================================================
  // Happy path
  // ============================================================================

  it("happy path - transfer with invalid recipient token returns typed error", async () => {
    // A real transfer requires a second account's token, which we don't have.
    // Passing an invalid recipientAccessToken should produce a typed error
    // (UnprocessableEntity or BadRequest), confirming the endpoint is reachable
    // and the SDK correctly maps the error.
    const project = getTestProject("proj-xfer");

    await Effect.runPromise(
      postV1ProjectsByIdTransfer({
        id: project.projectId,
        recipientAccessToken: "invalid-recipient-token-00000000",
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect([
            "UnprocessableEntity",
            "BadRequest",
            "Forbidden",
            "Unauthorized",
            "NotFound",
          ]).toContain((e as any)._tag);
        }),
        Effect.provide(TestLayer),
      ),
    );
  }, 30_000);

  // ============================================================================
  // Error tests
  // ============================================================================

  it("error - NotFound for non-existent project id", async () => {
    await Effect.runPromise(
      postV1ProjectsByIdTransfer({
        id: "non-existent-proj-id-00000000",
        recipientAccessToken: "some-token",
      }).pipe(
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
      postV1ProjectsByIdTransfer({
        id: "",
        recipientAccessToken: "some-token",
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
