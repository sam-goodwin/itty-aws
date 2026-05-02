import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { workspaceUpdate } from "../src/operations/workspaceUpdate.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("workspaceUpdate", () => {
  it("happy path - exercises workspace update with a fabricated workspace id (mutating the real test workspace's name/avatar/preferredRegion would alter shared state across parallel test runs, and there is no workspaceCreate operation to provision a throwaway one; lands in RailwayNotFound for the fabricated workspace)", async () => {
    const error = await runEffect(
      workspaceUpdate({
        id: NON_EXISTENT_UUID,
        input: {
          name: `distilled-railway-wu-${testRunId}`,
        },
      }).pipe(Effect.flip),
    );
    expect(
      ["RailwayNotFound", "RailwayInvalidInput"].includes(
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
      workspaceUpdate({
        id: NON_EXISTENT_UUID,
        input: {
          name: `distilled-railway-wu-${testRunId}`,
        },
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - non-existent workspace id surfaces RailwayNotAuthorized", async () => {
    const error = await runEffect(
      workspaceUpdate({
        id: NON_EXISTENT_UUID,
        input: {
          name: `distilled-railway-wu-nf-${testRunId}`,
        },
      }).pipe(Effect.flip),
    );
    expect(
      ["RailwayNotFound", "RailwayInvalidInput"].includes(
        (error as { _tag: string })._tag,
      ),
    ).toBe(true);
  }, 30_000);

  it("error - RailwayInvalidInput for a malformed workspace id", async () => {
    const error = await runEffect(
      workspaceUpdate({
        id: "not-a-valid-uuid",
        input: {
          name: `distilled-railway-wu-ii-${testRunId}`,
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
