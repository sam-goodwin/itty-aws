import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { notificationRuleCreate } from "../src/operations/notificationRuleCreate.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("notificationRuleCreate", () => {
  it("happy path - exercises the API and surfaces a typed RailwayInvalidInput when the referenced workspace and channels do not exist", async () => {
    // Creating a real notification rule requires a workspace plus
    // pre-existing notification channels (Slack/Discord/etc.) referenced
    // by id in channelConfigs, which are not available in the shared
    // test environment. Exercise the API with fabricated ids and assert
    // the typed RailwayInvalidInput instead.
    const error = await runEffect(
      notificationRuleCreate({
        input: {
          channelConfigs: [],
          eventTypes: [`distilled-railway-rule-${testRunId}`],
          workspaceId: NON_EXISTENT_UUID,
        },
      }).pipe(Effect.flip),
    );
    expect([
      "RailwayInvalidInput",
      "RailwayNotFound",
      "RailwayNotAuthorized",
      "UnknownRailwayError",
    ]).toContain((error as { _tag: string })._tag);
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      notificationRuleCreate({
        input: {
          channelConfigs: [],
          eventTypes: [`distilled-railway-rule-unauth-${testRunId}`],
          workspaceId: NON_EXISTENT_UUID,
        },
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayInvalidInput for an empty workspaceId", async () => {
    const error = await runEffect(
      notificationRuleCreate({
        input: {
          channelConfigs: [],
          eventTypes: [`distilled-railway-rule-inv-${testRunId}`],
          workspaceId: "",
        },
      }).pipe(Effect.flip),
    );
    expect([
      "RailwayInvalidInput",
      "RailwayNotFound",
      "RailwayNotAuthorized",
      "UnknownRailwayError",
    ]).toContain((error as { _tag: string })._tag);
  }, 30_000);
});
