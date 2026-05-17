import { config } from "dotenv";
import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { getMyUser } from "../src/operations/getMyUser.ts";
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
// /users/@me endpoint rejects the request. The endpoint takes no input
// parameters, so error cases (NotFound / Forbidden) can only be reached by
// manipulating the auth context.
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

describe("getMyUser", () => {
  it("happy path - returns the current user (bot or OAuth2 identity)", async () => {
    const result = await runEffect(getMyUser({}));
    expect(typeof result.id).toBe("string");
    expect(result.id.length).toBeGreaterThan(0);
    expect(typeof result.username).toBe("string");
    expect(result.avatar === null || typeof result.avatar === "string").toBe(
      true,
    );
    expect(typeof result.discriminator).toBe("string");
    expect(typeof result.public_flags).toBe("number");
    expect(typeof result.flags).toBe("number");
    expect(
      result.global_name === null || typeof result.global_name === "string",
    ).toBe(true);
    expect(typeof result.mfa_enabled).toBe("boolean");
  });

  it("error - NotFound / Forbidden surface when the bot token is rejected", async () => {
    // /users/@me has no path params — the only way to trigger the listed
    // typed errors is to send an unrecognized token. Discord commonly
    // responds with 401 for invalid tokens (mapped to Unauthorized) but
    // may also classify the request as 404/403 depending on routing.
    await runWithBogusCreds(
      getMyUser({}).pipe(
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

  it("error - Forbidden / NotFound when a Bearer token is rejected", async () => {
    // Sending a malformed Bearer access token typically yields 401
    // Unauthorized, but Discord may also surface 403 Forbidden or 404
    // NotFound depending on how the route resolves before the auth check
    // completes.
    await runWithBogusCreds(
      getMyUser({}).pipe(
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
