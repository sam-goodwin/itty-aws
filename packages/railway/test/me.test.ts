import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { me } from "../src/operations/me.ts";
import { runEffect } from "./setup.ts";

describe("me", () => {
  it(
    "happy path - returns the authenticated user",
    async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* me({});

          expect(typeof result.id).toBe("string");
          expect(typeof result.email).toBe("string");
          expect(typeof result.createdAt).toBe("string");
          expect(typeof result.has2FA).toBe("boolean");
          expect(typeof result.hasPasskeys).toBe("boolean");
          expect(typeof result.isAdmin).toBe("boolean");
          expect(typeof result.isConductor).toBe("boolean");
          expect(typeof result.isVerified).toBe("boolean");
          expect(typeof result.agreedFairUse).toBe("boolean");
          expect(typeof result.lastLogin).toBe("string");
          expect(["ONBOARDED", "REGISTERED", "WAITLISTED"]).toContain(
            result.registrationStatus,
          );
          expect(Array.isArray(result.featureFlags)).toBe(true);
          expect(Array.isArray(result.flags)).toBe(true);
          expect(Array.isArray(result.platformFeatureFlags)).toBe(true);
          expect(Array.isArray(result.workspaces)).toBe(true);
          for (const ws of result.workspaces) {
            expect(typeof ws.id).toBe("string");
            expect(typeof ws.name).toBe("string");
            expect(["FREE", "HOBBY", "PRO"]).toContain(ws.plan);
          }
        }),
      );
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
        me({}).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
        ) as Effect.Effect<{ _tag: string }, never, never>,
      );

      expect(error._tag).toBe("RailwayNotAuthorized");
    },
    30_000,
  );
});
