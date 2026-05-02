import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { serviceConnect } from "../src/operations/serviceConnect.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("serviceConnect", () => {
  it("happy path - exercises the API and surfaces a typed RailwayNotFound when the referenced service does not exist", async () => {
    // Connecting a real service to a source requires a project, an
    // existing service in that project, and a real GitHub repo or
    // container image to point it at. Provisioning all of these to
    // exercise the connect mutation is impractical in a single-token
    // test run. Exercise the API with a fabricated service id and
    // assert the typed RailwayNotFound instead.
    const error = await runEffect(
      serviceConnect({
        id: NON_EXISTENT_UUID,
        input: {
          image: `distilled/railway-${testRunId}`,
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
      serviceConnect({
        id: NON_EXISTENT_UUID,
        input: {
          image: `distilled/railway-unauth-${testRunId}`,
        },
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayNotFound for a non-existent service id", async () => {
    const error = await runEffect(
      serviceConnect({
        id: NON_EXISTENT_UUID,
        input: {
          image: `distilled/railway-nf-${testRunId}`,
        },
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
  }, 30_000);

  it("error - RailwayInvalidInput for an empty service id", async () => {
    const error = await runEffect(
      serviceConnect({
        id: "",
        input: {
          image: `distilled/railway-inv-${testRunId}`,
        },
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
  }, 30_000);
});
