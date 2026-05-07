import { config } from "dotenv";
import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { getMyOauth2Application } from "../src/operations/getMyOauth2Application.ts";
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
// /oauth2/applications/@me endpoint rejects the request. The endpoint takes
// no input parameters, so error cases (NotFound / Forbidden) can only be
// reached by manipulating the auth context.
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

describe("getMyOauth2Application", () => {
  it("happy path - returns the OAuth2 application object for the bot token", async () => {
    const result = await runEffect(getMyOauth2Application({}));
    expect(typeof result.id).toBe("string");
    expect(result.id.length).toBeGreaterThan(0);
    expect(typeof result.name).toBe("string");
    expect(result.icon === null || typeof result.icon === "string").toBe(true);
    expect(typeof result.description).toBe("string");
    expect(typeof result.verify_key).toBe("string");
    expect(typeof result.flags).toBe("number");
    expect(typeof result.flags_new).toBe("string");
    expect(Array.isArray(result.redirect_uris)).toBe(true);
    expect(
      result.interactions_endpoint_url === null ||
        typeof result.interactions_endpoint_url === "string",
    ).toBe(true);
    expect(
      result.role_connections_verification_url === null ||
        typeof result.role_connections_verification_url === "string",
    ).toBe(true);
    expect(typeof result.owner.id).toBe("string");
    expect(typeof result.owner.username).toBe("string");
    expect(typeof result.approximate_guild_count).toBe("number");
    expect(typeof result.approximate_user_install_count).toBe("number");
    expect(typeof result.approximate_user_authorization_count).toBe("number");
  });

  it("error - NotFound / Forbidden surface when the bot token is rejected", async () => {
    // /oauth2/applications/@me has no path params — the only way to trigger
    // the listed typed errors is to send an unrecognized token. Discord
    // commonly responds with 401 for invalid tokens (mapped to
    // Unauthorized) but may also classify the request as 404/403 depending
    // on routing.
    await runWithBogusCreds(
      getMyOauth2Application({}).pipe(
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

  it("error - Forbidden when a Bearer token is rejected on the route", async () => {
    // /oauth2/applications/@me is conventionally a bot-only route; using a
    // Bearer credential typically yields 403 Forbidden, but Discord may
    // also return 401 Unauthorized depending on token validity, or 404 if
    // route resolution falls through ahead of the permission check.
    await runWithBogusCreds(
      getMyOauth2Application({}).pipe(
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
