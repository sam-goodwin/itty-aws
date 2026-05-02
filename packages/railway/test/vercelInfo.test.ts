import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { vercelInfo } from "../src/operations/vercelInfo.ts";
import { runEffect } from "./setup.ts";

describe("vercelInfo", () => {
  it(
    "happy path - returns Vercel account info for the authenticated user",
    async () => {
      const result = await runEffect(vercelInfo({}));

      expect(result).toBeDefined();
      expect(Array.isArray(result.accounts)).toBe(true);

      for (const account of result.accounts) {
        expect(typeof account.id).toBe("string");
        expect(typeof account.integrationAuthId).toBe("string");
        expect(typeof account.isUser).toBe("boolean");
        if (account.name !== null) {
          expect(typeof account.name).toBe("string");
        }
        if (account.slug !== null) {
          expect(typeof account.slug).toBe("string");
        }
        expect(Array.isArray(account.projects)).toBe(true);
        for (const project of account.projects) {
          expect(typeof project.id).toBe("string");
          expect(typeof project.name).toBe("string");
          expect(project.accountId).toBe(account.id);
        }
      }
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
        vercelInfo({}).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
        ) as Effect.Effect<{ _tag: string }, never, never>,
      );

      expect(error._tag).toBe("RailwayNotAuthorized");
    },
    30_000,
  );
});
