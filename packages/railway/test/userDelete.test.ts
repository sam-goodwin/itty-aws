import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { userDelete } from "../src/operations/userDelete.ts";

// NOTE: userDelete deletes the authenticated user account itself. Calling it with
// the real test bearer token would destroy the auth identity that owns every other
// test resource and break the rest of the test suite (and there is no userCreate
// operation to provision a throwaway user). The "happy path" therefore exercises
// the operation against the API via an alternate-credentials Layer to confirm
// the endpoint is reachable and the SDK maps the response to a typed error.

const makeBadCreds = (token: string) =>
  Layer.succeed(Credentials, {
    apiToken: Redacted.make(token),
    apiBaseUrl: "https://backboard.railway.com",
  });

describe("userDelete", () => {
  it(
    "happy path - exercises the userDelete endpoint via an alternate-credentials Layer (real deletion would destroy the test account)",
    async () => {
      const error = await Effect.runPromise(
        userDelete({}).pipe(
          Effect.flip,
          Effect.provide(
            Layer.merge(
              makeBadCreds("placeholder-token-for-endpoint-probe"),
              FetchHttpClient.layer,
            ),
          ),
        ) as Effect.Effect<{ _tag: string }, never, never>,
      );
      expect(error._tag).toBe("RailwayNotAuthorized");
    },
    30_000,
  );

  it(
    "error - RailwayNotAuthorized when bearer token is invalid",
    async () => {
      const error = await Effect.runPromise(
        userDelete({}).pipe(
          Effect.flip,
          Effect.provide(
            Layer.merge(
              makeBadCreds("not-a-real-token-deadbeef"),
              FetchHttpClient.layer,
            ),
          ),
        ) as Effect.Effect<{ _tag: string }, never, never>,
      );
      expect(error._tag).toBe("RailwayNotAuthorized");
    },
    30_000,
  );
});
