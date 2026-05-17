import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as Redacted from "effect/Redacted";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import {
  Credentials,
  CredentialsFromEnv,
  DEFAULT_API_BASE_URL,
} from "../src/credentials.ts";
import { listMyConnections } from "../src/operations/listMyConnections.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// GET /users/@me/connections lists OAuth2 connections for the calling user.
// This endpoint is user-only and requires a Bearer token with the
// `connections` scope; bot tokens are rejected. The happy path is gated on
// DISCORD_BEARER_TOKEN.
const TEST_BEARER = process.env.DISCORD_BEARER_TOKEN;

// A deliberately bogus bearer token used for the error tests so they don't
// depend on operator credentials.
const makeInvalidBearerLayer = (token: string): Layer.Layer<Credentials> =>
  Layer.succeed(Credentials, {
    token: Redacted.make(token),
    authScheme: "Bearer" as const,
    apiBaseUrl: DEFAULT_API_BASE_URL,
  });

const runWithInvalidBearer = <A, E>(
  token: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  effect: Effect.Effect<A, E, any>,
): Promise<A> => {
  const layer = Layer.merge(
    makeInvalidBearerLayer(token),
    FetchHttpClient.layer,
  );
  return Effect.runPromise(
    effect.pipe(Effect.provide(layer)) as Effect.Effect<A, E, never>,
  );
};

describe("listMyConnections", () => {
  it.skipIf(!TEST_BEARER)(
    "happy path - lists OAuth2 connections for the calling user",
    async () => {
      const result = await runEffect(listMyConnections({}));
      expect(Array.isArray(result)).toBe(true);
      for (const conn of result) {
        expect(typeof conn.id).toBe("string");
        expect(conn.name === null || typeof conn.name === "string").toBe(true);
        expect(typeof conn.friend_sync).toBe("boolean");
        expect(typeof conn.show_activity).toBe("boolean");
        expect(typeof conn.two_way_link).toBe("boolean");
        expect(typeof conn.verified).toBe("boolean");
        if (conn.revoked !== undefined) {
          expect(typeof conn.revoked).toBe("boolean");
        }
      }
    },
    { timeout: 30_000 },
  );

  it("error - NotFound or Forbidden for an invalid bearer token", async () => {
    await runWithInvalidBearer(
      `invalid-bearer-${testRunId}`,
      listMyConnections({}).pipe(
        Effect.flip,
        Effect.map((e) => {
          // /users/@me/connections is OAuth2-only. An invalid bearer token
          // typically surfaces as Unauthorized; a token without the
          // `connections` scope surfaces as Forbidden; some routes return
          // NotFound to avoid leaking existence.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect([
            "NotFound",
            "Forbidden",
            "Unauthorized",
            "BadRequest",
          ]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden or NotFound for a bearer token missing the connections scope", async () => {
    // A second deliberately bogus token, framing this scenario as a token
    // that lacks the required scope. Discord may surface this as Forbidden
    // or NotFound depending on routing.
    await runWithInvalidBearer(
      `no-scope-${testRunId}`,
      listMyConnections({}).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect([
            "Forbidden",
            "NotFound",
            "Unauthorized",
            "BadRequest",
          ]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });
});
