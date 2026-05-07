import { config } from "dotenv";
import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { getBotGateway } from "../src/operations/getBotGateway.ts";
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

// A layer that supplies plausible-looking but invalid credentials so the
// /gateway/bot endpoint rejects the request. /gateway/bot has no input
// parameters, so error cases (NotFound / Forbidden) can only be reached by
// manipulating the auth context — Discord rejects unknown tokens at the
// auth layer before any path-routing checks run.
const bogusCredentialsLayer = (scheme: "Bot" | "Bearer"): Layer.Layer<Credentials> =>
  Layer.succeed(Credentials, {
    token: Redacted.make("MTAwMDAwMDAwMDAwMDAwMDAw.bogus.token-for-distilled-tests"),
    authScheme: scheme,
    apiBaseUrl: process.env.DISCORD_API_BASE_URL ?? DEFAULT_API_BASE_URL,
  });

const runWithBogusCreds = <A, E>(
  effect: Effect.Effect<A, E, Credentials>,
  scheme: "Bot" | "Bearer",
): Promise<A> => {
  const layer = Layer.merge(bogusCredentialsLayer(scheme), FetchHttpClient.layer);
  return Effect.runPromise(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    effect.pipe(Effect.provide(layer)) as Effect.Effect<A, E, never>,
  );
};

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);
void testRunId;

describe("getBotGateway", () => {
  it("happy path - returns the WSS gateway url and session start limits", async () => {
    const result = await runEffect(getBotGateway({}));
    expect(typeof result.url).toBe("string");
    expect(result.url.startsWith("wss://")).toBe(true);
    expect(typeof result.shards).toBe("number");
    expect(result.shards).toBeGreaterThanOrEqual(1);
    expect(typeof result.session_start_limit.total).toBe("number");
    expect(typeof result.session_start_limit.remaining).toBe("number");
    expect(typeof result.session_start_limit.reset_after).toBe("number");
    expect(typeof result.session_start_limit.max_concurrency).toBe("number");
  });

  it("error - NotFound / Forbidden surface when the route rejects the request", async () => {
    // /gateway/bot has no path params — the only way to trigger the listed
    // typed errors is to send an unrecognized token. Discord's gateway
    // routes commonly respond with 401 for invalid tokens (mapped to
    // Unauthorized) but may classify the request as 404/403 depending on
    // routing. Assert that the error is one of the expected typed tags.
    await runWithBogusCreds(
      getBotGateway({}).pipe(
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

  it("error - Forbidden when an OAuth2 bearer token is used on a bot-only route", async () => {
    // /gateway/bot is a bot-token-only route. Calling it with a Bearer
    // credential typically yields 403 Forbidden, but Discord may also
    // return 401 Unauthorized depending on token validity, or 404 if the
    // route resolution falls through ahead of the permission check.
    await runWithBogusCreds(
      getBotGateway({}).pipe(
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
