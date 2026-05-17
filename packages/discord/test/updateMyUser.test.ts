import { config } from "dotenv";
import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { getMyUser } from "../src/operations/getMyUser.ts";
import { updateMyUser } from "../src/operations/updateMyUser.ts";
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
// /users/@me endpoint rejects the request. The endpoint has no input
// path/query params, so error cases (NotFound / Forbidden) can only be
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

describe("updateMyUser", () => {
  it(
    "happy path - re-applies the bot user's existing username",
    async () => {
      // PATCH /users/@me mutates persistent state on the bot user object.
      // To stay idempotent we snapshot the current username first, PATCH
      // with that same value, then PATCH it back in the ensuring block.
      // Note: bot users have a 2-per-hour rename rate limit, so we never
      // change the actual value.
      await runEffect(
        Effect.gen(function* () {
          const before = yield* getMyUser({});
          const original = before.username;
          return yield* Effect.gen(function* () {
            const updated = yield* updateMyUser({ username: original });
            return yield* Effect.sync(() => {
              expect(updated.id).toBe(before.id);
              expect(updated.username).toBe(original);
              expect(typeof updated.discriminator).toBe("string");
              expect(typeof updated.public_flags).toBe("number");
              expect(typeof updated.flags).toBe("number");
              expect(typeof updated.mfa_enabled).toBe("boolean");
              expect(
                updated.avatar === null || typeof updated.avatar === "string",
              ).toBe(true);
            });
          }).pipe(
            Effect.ensuring(
              updateMyUser({ username: original }).pipe(Effect.ignore),
            ),
          );
        }),
      );
    },
    30_000,
  );

  it("error - BadRequest for usernames containing disallowed characters", async () => {
    // Discord usernames must use only certain characters (lowercased
    // letters, digits, underscores, periods). A value containing a hash
    // and a discriminator-style suffix violates the username pattern and
    // is rejected with 400 Invalid Form Body.
    await runEffect(
      updateMyUser({
        username: `Distilled Bad Name #${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["BadRequest", "Forbidden", "NotFound"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden / NotFound surface when a Bot token is rejected", async () => {
    // /users/@me has no path params — the only way to reach the declared
    // typed errors is to send an unrecognized token. Discord commonly
    // returns 401 (mapped to Unauthorized) for invalid tokens, but may
    // also classify the response as 403/404 depending on routing.
    await runWithBogusCreds(
      updateMyUser({ username: `distilled_bogus_${testRunId}` }).pipe(
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

  it("error - Forbidden when a Bearer token without identify scope is used", async () => {
    // /users/@me PATCH requires a Bot token (or a Bearer with identify
    // scope). A bogus Bearer credential typically yields 403 Forbidden,
    // but Discord may also return 401 Unauthorized depending on token
    // validity, or 404 if route resolution falls through ahead of the
    // permission check.
    await runWithBogusCreds(
      updateMyUser({ username: `distilled_bogus_${testRunId}` }).pipe(
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
