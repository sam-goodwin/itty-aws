import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { workspaceUserInvite } from "../src/operations/workspaceUserInvite.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("workspaceUserInvite", () => {
  it("happy path - exercises workspace user invite with a fabricated workspace id (real invitations would email a real recipient and add a member to the test workspace; lands in RailwayInvalidInput for the fabricated workspace + invite code)", async () => {
    const error = await runEffect(
      workspaceUserInvite({
        workspaceId: NON_EXISTENT_UUID,
        input: {
          code: `distilled-railway-wui-${testRunId}-nonexistent`,
          email: `distilled-railway-wui-${testRunId}@example.invalid`,
        },
      }).pipe(Effect.flip),
    );
    expect(
      ["RailwayInvalidInput", "RailwayNotFound"].includes(
        (error as { _tag: string })._tag,
      ),
    ).toBe(true);
  }, 30_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      workspaceUserInvite({
        workspaceId: NON_EXISTENT_UUID,
        input: {
          code: `distilled-railway-wui-${testRunId}-nonexistent`,
          email: `distilled-railway-wui-${testRunId}@example.invalid`,
        },
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - RailwayInvalidInput for a malformed email/workspace id", async () => {
    const error = await runEffect(
      workspaceUserInvite({
        workspaceId: "not-a-valid-uuid",
        input: {
          code: `distilled-railway-wui-${testRunId}-bad`,
          email: "not-a-valid-email-address-with-spaces and no @",
        },
      }).pipe(Effect.flip),
    );
    expect(
      ["RailwayInvalidInput", "RailwayNotFound"].includes(
        (error as { _tag: string })._tag,
      ),
    ).toBe(true);
  }, 30_000);
});
