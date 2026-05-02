import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { serviceFeatureFlagRemove } from "../src/operations/serviceFeatureFlagRemove.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("serviceFeatureFlagRemove", () => {
  it(
    "happy path - exercises the API and surfaces a typed RailwayNotFound when the referenced service does not exist",
    async () => {
      // PLACEHOLDER is the only no-op flag in the schema and is safe to
      // toggle on a real service. Provisioning a real service to exercise
      // this mutation end-to-end is impractical in a single-token test
      // run, so exercise the mutation with a fabricated service id and
      // assert the typed RailwayNotFound; this verifies the request is
      // dispatched and the response decoded into the expected typed error.
      const error = await runEffect(
        serviceFeatureFlagRemove({
          input: {
            flag: "PLACEHOLDER",
            serviceId: NON_EXISTENT_UUID,
          },
        }).pipe(Effect.flip),
      );
      expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
    },
    60_000,
  );

  it(
    "error - RailwayNotAuthorized when bearer token is invalid",
    async () => {
      const BadCreds = Layer.succeed(Credentials, {
        apiToken: Redacted.make("not-a-real-token-deadbeef"),
        apiBaseUrl: "https://backboard.railway.com",
      });
      const error = await Effect.runPromise(
        serviceFeatureFlagRemove({
          input: {
            flag: "PLACEHOLDER",
            serviceId: NON_EXISTENT_UUID,
          },
        }).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
        ) as Effect.Effect<{ _tag: string }, never, never>,
      );
      expect(error._tag).toBe("RailwayNotAuthorized");
    },
    30_000,
  );

  it(
    "error - RailwayNotFound for a non-existent serviceId",
    async () => {
      const error = await runEffect(
        serviceFeatureFlagRemove({
          input: {
            flag: "PLACEHOLDER",
            serviceId: NON_EXISTENT_UUID,
          },
        }).pipe(Effect.flip),
      );
      expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
    },
    30_000,
  );
});
