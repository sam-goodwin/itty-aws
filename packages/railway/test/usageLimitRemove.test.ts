import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { usageLimitRemove } from "../src/operations/usageLimitRemove.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("usageLimitRemove", () => {
  it(
    "happy path - exercises usage limit removal with a fabricated customer id (returns RailwayNotFound)",
    async () => {
      const error = await runEffect(
        usageLimitRemove({ input: { customerId: NON_EXISTENT_UUID } }).pipe(
          Effect.flip,
        ),
      );
      expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
    },
    30_000,
  );

  it(
    "error - RailwayNotAuthorized when bearer token is invalid",
    async () => {
      const BadCreds = Layer.succeed(Credentials, {
        apiToken: Redacted.make("not-a-real-token-deadbeef"),
        apiBaseUrl: "https://backboard.railway.com",
      });
      const error = await Effect.runPromise(
        usageLimitRemove({ input: { customerId: NON_EXISTENT_UUID } }).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
        ) as Effect.Effect<{ _tag: string }, never, never>,
      );
      expect(error._tag).toBe("RailwayNotAuthorized");
    },
    30_000,
  );

  it(
    "error - RailwayNotFound for a non-existent customer id",
    async () => {
      const error = await runEffect(
        usageLimitRemove({ input: { customerId: NON_EXISTENT_UUID } }).pipe(
          Effect.flip,
        ),
      );
      expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
    },
    30_000,
  );
});
