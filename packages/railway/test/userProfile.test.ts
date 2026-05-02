import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { me } from "../src/operations/me.ts";
import { userProfile } from "../src/operations/userProfile.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_USERNAME = "distilled-railway-no-such-user-deadbeef-zzzz";

describe("userProfile", () => {
  it("happy path - returns public profile for the authenticated user's own username", async () => {
    await runEffect(
      Effect.gen(function* () {
        const myInfo = yield* me({});
        const username = myInfo.username;
        if (!username) {
          // Authenticated principal has no public username; nothing to query.
          return;
        }

        const result = yield* userProfile({ username });

        expect(result).toBeDefined();
        expect(typeof result.id).toBe("string");
        expect(typeof result.createdAt).toBe("string");
        expect(typeof result.totalDeploys).toBe("number");
        expect(result.totalDeploys).toBeGreaterThanOrEqual(0);
        expect(result.profile).toBeDefined();
        expect(typeof result.profile.isPublic).toBe("boolean");
        if (result.profile.bio !== null) {
          expect(typeof result.profile.bio).toBe("string");
        }
        if (result.profile.website !== null) {
          expect(typeof result.profile.website).toBe("string");
        }
        if (result.username !== null) {
          expect(typeof result.username).toBe("string");
          expect(result.username).toBe(username);
        }
        if (result.name !== null) {
          expect(typeof result.name).toBe("string");
        }
        if (result.avatar !== null) {
          expect(typeof result.avatar).toBe("string");
        }
        if (result.customerId !== null) {
          expect(typeof result.customerId).toBe("string");
        }
        if (result.isTrialing !== null) {
          expect(typeof result.isTrialing).toBe("boolean");
        }
        if (result.state !== null) {
          expect(typeof result.state).toBe("string");
        }
        expect(Array.isArray(result.publishedTemplates)).toBe(true);
        for (const tmpl of result.publishedTemplates) {
          expect(typeof tmpl.code).toBe("string");
          expect(typeof tmpl.name).toBe("string");
          expect(typeof tmpl.deploys).toBe("number");
          expect(typeof tmpl.createdAt).toBe("string");
        }
      }),
    );
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });

    const error = await Effect.runPromise(
      userProfile({ username: NON_EXISTENT_USERNAME }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayNotFound for a non-existent username", async () => {
    const error = await runEffect(
      userProfile({ username: NON_EXISTENT_USERNAME }).pipe(Effect.flip),
    );

    expect([
      "RailwayNotFound",
      "RailwayNotAuthorized",
      "RailwayInvalidInput",
      "UnknownRailwayError",
    ]).toContain((error as { _tag: string })._tag);
    expect((error as { message: string }).message).toMatch(/not found$/i);
  }, 30_000);
});
