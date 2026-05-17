import { config } from "dotenv";
import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { getMyOauth2Authorization } from "../src/operations/getMyOauth2Authorization.ts";
import {
  Credentials,
  CredentialsFromEnv,
  DEFAULT_API_BASE_URL,
} from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

// Layer that supplies plausible-looking but invalid credentials so the
// /oauth2/@me endpoint rejects the request. The endpoint takes no input
// parameters, so error cases can only be reached by manipulating the auth
// context.
const bogusCredentialsLayer = (
  scheme: "Bot" | "Bearer",
): Layer.Layer<Credentials> =>
  Layer.succeed(Credentials, {
    token: Redacted.make(
      "MTAwMDAwMDAwMDAwMDAwMDAw.bogus.token-for-distilled-tests",
    ),
    authScheme: scheme,
    apiBaseUrl: process.env.DISCORD_API_BASE_URL ?? DEFAULT_API_BASE_URL,
  });

const runWithBogusCreds = <A, E>(
  effect: Effect.Effect<A, E, Credentials>,
  scheme: "Bot" | "Bearer",
): Promise<A> => {
  const layer = Layer.merge(
    bogusCredentialsLayer(scheme),
    FetchHttpClient.layer,
  );
  return Effect.runPromise(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    effect.pipe(Effect.provide(layer)) as Effect.Effect<A, E, never>,
  );
};

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);
void testRunId;

// /oauth2/@me requires a Bearer access token (NOT a bot token). The happy
// path is gated behind DISCORD_BEARER_TOKEN being set; CredentialsFromEnv
// switches to Bearer scheme automatically when that env var is present.
const HAS_BEARER = Boolean(process.env.DISCORD_BEARER_TOKEN);

describe("getMyOauth2Authorization", () => {
  it("happy path - returns the current bearer-token authorization", async () => {
    if (!HAS_BEARER) {
      throw new Error(
        "DISCORD_BEARER_TOKEN must be set for the getMyOauth2Authorization happy path. " +
          "The token must be an OAuth2 Bearer access token (not a bot token).",
      );
    }
    const result = await runEffect(getMyOauth2Authorization({}));
    expect(typeof result.application.id).toBe("string");
    expect(typeof result.application.name).toBe("string");
    expect(typeof result.application.description).toBe("string");
    expect(typeof result.application.verify_key).toBe("string");
    expect(typeof result.application.flags).toBe("number");
    expect(typeof result.application.flags_new).toBe("string");
    expect(typeof result.expires).toBe("string");
    expect(Array.isArray(result.scopes)).toBe(true);
    expect(result.scopes.length).toBeGreaterThan(0);
    if (result.user) {
      expect(typeof result.user.id).toBe("string");
      expect(typeof result.user.username).toBe("string");
    }
  });

  it("error - NotFound / Forbidden surface when a Bot token is used", async () => {
    // /oauth2/@me requires a Bearer access token. Sending a Bot token (or
    // any unrecognized token) results in 401 Unauthorized in most cases,
    // but Discord may also classify the request as 403/404 depending on
    // routing.
    await runWithBogusCreds(
      getMyOauth2Authorization({}).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect([
            "NotFound",
            "Forbidden",
            "Unauthorized",
            "BadRequest",
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ]).toContain((e as any)._tag);
        }),
      ),
      "Bot",
    );
  });

  it("error - Forbidden / NotFound when the Bearer token is rejected", async () => {
    // Sending a malformed Bearer access token typically yields 401
    // Unauthorized, but Discord may also surface 403 Forbidden or 404
    // NotFound depending on how the route resolves before the auth check
    // completes.
    await runWithBogusCreds(
      getMyOauth2Authorization({}).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect([
            "Forbidden",
            "NotFound",
            "Unauthorized",
            "BadRequest",
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ]).toContain((e as any)._tag);
        }),
      ),
      "Bearer",
    );
  });
});
