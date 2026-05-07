import { config } from "dotenv";
import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { getOpenidConnectUserinfo } from "../src/operations/getOpenidConnectUserinfo.ts";
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
// /oauth2/userinfo endpoint rejects the request. The endpoint takes no
// input parameters, so error cases can only be reached by manipulating the
// auth context.
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

// /oauth2/userinfo is the OpenID Connect UserInfo endpoint. It requires a
// Bearer access token issued with the `openid` scope; bot tokens are
// rejected. The happy path is gated behind DISCORD_BEARER_TOKEN being set
// (CredentialsFromEnv switches to Bearer scheme automatically when that env
// var is present).
const HAS_BEARER = Boolean(process.env.DISCORD_BEARER_TOKEN);

describe("getOpenidConnectUserinfo", () => {
  it("happy path - returns the OIDC user info for the bearer token", async () => {
    if (!HAS_BEARER) {
      throw new Error(
        "DISCORD_BEARER_TOKEN must be set for the getOpenidConnectUserinfo happy path. " +
          "The token must be an OAuth2 Bearer with the `openid` scope.",
      );
    }
    const result = await runEffect(getOpenidConnectUserinfo({}));
    expect(typeof result.sub).toBe("string");
    expect(result.sub.length).toBeGreaterThan(0);
    if (result.email !== undefined) {
      expect(result.email === null || typeof result.email === "string").toBe(
        true,
      );
    }
    if (result.email_verified !== undefined) {
      expect(typeof result.email_verified).toBe("boolean");
    }
    if (result.preferred_username !== undefined) {
      expect(typeof result.preferred_username).toBe("string");
    }
    if (result.nickname !== undefined) {
      expect(
        result.nickname === null || typeof result.nickname === "string",
      ).toBe(true);
    }
    if (result.picture !== undefined) {
      expect(typeof result.picture).toBe("string");
    }
    if (result.locale !== undefined) {
      expect(typeof result.locale).toBe("string");
    }
  });

  it("error - NotFound / Forbidden surface when a Bot token is used", async () => {
    // /oauth2/userinfo requires a Bearer access token with the `openid`
    // scope. Sending a Bot token results in 401 Unauthorized in most
    // cases, but Discord may also classify the request as 403/404
    // depending on routing.
    await runWithBogusCreds(
      getOpenidConnectUserinfo({}).pipe(
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
      getOpenidConnectUserinfo({}).pipe(
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
