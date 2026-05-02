import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { templatePublish } from "../src/operations/templatePublish.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

const baseInput = {
  category: "Other",
  description: `distilled-railway-tp-${testRunId}`,
  readme: `distilled-railway-tp-readme-${testRunId}`,
};

describe("templatePublish", () => {
  it("happy path - exercises the API and surfaces a typed RailwayNotFound when the referenced template does not exist", async () => {
    // Publishing a template promotes it to Railway's public template
    // gallery — a real publish here would pollute a shared, public
    // namespace with test artifacts. Exercise the mutation with a
    // fabricated template id and assert the typed RailwayNotFound;
    // this verifies the request is dispatched and the response
    // decoded into the expected typed error without contaminating
    // the public template registry.
    const error = await runEffect(
      templatePublish({
        id: NON_EXISTENT_UUID,
        input: baseInput,
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
      templatePublish({
        id: NON_EXISTENT_UUID,
        input: baseInput,
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayNotFound for a non-existent template id", async () => {
    const error = await runEffect(
      templatePublish({
        id: NON_EXISTENT_UUID,
        input: baseInput,
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
  }, 30_000);

  it("error - RailwayInvalidInput for an empty template id", async () => {
    const error = await runEffect(
      templatePublish({
        id: "",
        input: baseInput,
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
  }, 30_000);
});
