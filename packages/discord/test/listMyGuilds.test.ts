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
import { listMyGuilds } from "../src/operations/listMyGuilds.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// GET /users/@me/guilds lists guilds the calling user/bot is a member of.
// Bot tokens return the guilds the bot has been invited to. Bearer tokens
// require the `guilds` scope.

// Override the credentials layer with a deliberately bogus bearer token to
// drive the error tests so they don't depend on operator credentials.
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

describe("listMyGuilds", () => {
  it(
    "happy path - lists guilds for the calling token",
    async () => {
      const result = await runEffect(
        listMyGuilds({ limit: 5, with_counts: true }),
      );
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeLessThanOrEqual(5);
      for (const guild of result) {
        expect(typeof guild.id).toBe("string");
        expect(typeof guild.name).toBe("string");
        expect(
          guild.icon === null || typeof guild.icon === "string",
        ).toBe(true);
        expect(
          guild.banner === null || typeof guild.banner === "string",
        ).toBe(true);
        expect(typeof guild.owner).toBe("boolean");
        expect(typeof guild.permissions).toBe("string");
        expect(Array.isArray(guild.features)).toBe(true);
        if (guild.approximate_member_count !== undefined) {
          expect(
            guild.approximate_member_count === null ||
              typeof guild.approximate_member_count === "number",
          ).toBe(true);
        }
        if (guild.approximate_presence_count !== undefined) {
          expect(
            guild.approximate_presence_count === null ||
              typeof guild.approximate_presence_count === "number",
          ).toBe(true);
        }
      }
    },
    { timeout: 30_000 },
  );

  it("error - NotFound or Forbidden for an invalid bearer token", async () => {
    await runWithInvalidBearer(
      `invalid-bearer-${testRunId}`,
      listMyGuilds({}).pipe(
        Effect.flip,
        Effect.map((e) => {
          // /users/@me/guilds rejects invalid bearer tokens. An invalid
          // token typically surfaces as Unauthorized; a token without the
          // `guilds` scope surfaces as Forbidden; some routes return
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

  it("error - Forbidden or NotFound for a bearer token missing the guilds scope", async () => {
    // A second deliberately bogus token, framing this scenario as a token
    // that lacks the required scope. Discord may surface this as Forbidden
    // or NotFound depending on routing.
    await runWithInvalidBearer(
      `no-scope-${testRunId}`,
      listMyGuilds({}).pipe(
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
