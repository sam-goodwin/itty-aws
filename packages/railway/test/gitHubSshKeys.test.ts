import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { gitHubSshKeys } from "../src/operations/gitHubSshKeys.ts";
import { runEffect } from "./setup.ts";

describe("gitHubSshKeys", () => {
  it(
    "happy path - returns SSH public keys for the authenticated user's GitHub",
    async () => {
      const result = await runEffect(gitHubSshKeys({}));

      expect(Array.isArray(result)).toBe(true);
      for (const k of result) {
        expect(typeof k.id).toBe("number");
        expect(typeof k.key).toBe("string");
        expect(typeof k.title).toBe("string");
      }
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
        gitHubSshKeys({}).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
        ) as Effect.Effect<{ _tag: string }, never, never>,
      );

      expect(error._tag).toBe("RailwayNotAuthorized");
    },
    30_000,
  );
});
