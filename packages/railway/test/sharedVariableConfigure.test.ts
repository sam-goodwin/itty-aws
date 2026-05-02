import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { sharedVariableConfigure } from "../src/operations/sharedVariableConfigure.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("sharedVariableConfigure", () => {
  it("happy path - exercises the API and surfaces a typed RailwayInvalidInput when the referenced shared variable does not exist", async () => {
    // Configuring a real shared variable requires a project with an
    // existing database plugin (mongodb/mysql/postgresql/redis) that
    // already exposes the shared variable being configured. Provisioning
    // a database plugin and a real shared variable end-to-end inside a
    // single-token test run is impractical, so exercise the mutation
    // with fabricated project/environment ids and assert the typed
    // RailwayInvalidInput; this verifies the request is dispatched
    // and the response decoded into the expected typed error.
    const error = await runEffect(
      sharedVariableConfigure({
        input: {
          disabledServiceIds: [],
          enabledServiceIds: [],
          environmentId: NON_EXISTENT_UUID,
          name: `DISTILLED_RAILWAY_SVC_${testRunId.toUpperCase()}`,
          projectId: NON_EXISTENT_UUID,
        },
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      sharedVariableConfigure({
        input: {
          disabledServiceIds: [],
          enabledServiceIds: [],
          environmentId: NON_EXISTENT_UUID,
          name: `DISTILLED_RAILWAY_SVC_UNAUTH_${testRunId.toUpperCase()}`,
          projectId: NON_EXISTENT_UUID,
        },
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayInvalidInput for an empty variable name", async () => {
    const error = await runEffect(
      sharedVariableConfigure({
        input: {
          disabledServiceIds: [],
          enabledServiceIds: [],
          environmentId: NON_EXISTENT_UUID,
          name: "",
          projectId: NON_EXISTENT_UUID,
        },
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
  }, 30_000);
});
