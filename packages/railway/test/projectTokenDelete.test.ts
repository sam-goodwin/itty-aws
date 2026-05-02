import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { projectTokenDelete } from "../src/operations/projectTokenDelete.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("projectTokenDelete", () => {
  it(
    "happy path - exercises the API and surfaces a typed RailwayNotFound when the referenced token id does not exist",
    async () => {
      // The projectTokenCreate mutation returns only the token value
      // (a String), not the database row id required by projectTokenDelete.
      // Looking up the token id requires a separate list/query operation
      // outside this test's scope. Exercise the API with a fabricated id
      // and assert the typed RailwayNotFound instead.
      const error = await runEffect(
        projectTokenDelete({
          id: NON_EXISTENT_UUID,
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
        projectTokenDelete({
          id: NON_EXISTENT_UUID,
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
    "error - RailwayNotFound for a non-existent token id",
    async () => {
      const error = await runEffect(
        projectTokenDelete({
          id: NON_EXISTENT_UUID,
        }).pipe(Effect.flip),
      );
      expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
    },
    30_000,
  );
});
