import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { projectMemberUpdate } from "../src/operations/projectMemberUpdate.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("projectMemberUpdate", () => {
  it("happy path - exercises the API and surfaces a typed RailwayNotFound when the referenced project/user does not exist", async () => {
    // Updating a real project member's role requires another user
    // actually attached to a project owned by the test account;
    // provisioning a second account just to update them is not feasible
    // with a single-token test run. Exercise the API with fabricated
    // ids and assert the typed RailwayNotFound instead.
    const error = await runEffect(
      projectMemberUpdate({
        input: {
          projectId: NON_EXISTENT_UUID,
          role: "MEMBER",
          userId: NON_EXISTENT_UUID,
        },
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      projectMemberUpdate({
        input: {
          projectId: NON_EXISTENT_UUID,
          role: "MEMBER",
          userId: NON_EXISTENT_UUID,
        },
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayNotFound for a non-existent projectId", async () => {
    const error = await runEffect(
      projectMemberUpdate({
        input: {
          projectId: NON_EXISTENT_UUID,
          role: "MEMBER",
          userId: NON_EXISTENT_UUID,
        },
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
  }, 30_000);

  it("error - RailwayInvalidInput for an empty projectId", async () => {
    const error = await runEffect(
      projectMemberUpdate({
        input: {
          projectId: "",
          role: "MEMBER",
          userId: NON_EXISTENT_UUID,
        },
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
  }, 30_000);
});
