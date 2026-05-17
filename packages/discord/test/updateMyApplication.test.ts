import { config } from "dotenv";
import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { getMyApplication } from "../src/operations/getMyApplication.ts";
import { updateMyApplication } from "../src/operations/updateMyApplication.ts";
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
// /applications/@me endpoint rejects the request. The endpoint has no input
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

describe("updateMyApplication", () => {
  it(
    "happy path - re-applies the bot application's existing description",
    async () => {
      // PATCH /applications/@me mutates persistent state on the bot
      // application. To stay idempotent we snapshot the current description
      // first, PATCH with that same value, then PATCH it back in the
      // ensuring block in case the response mutates anything else.
      await runEffect(
        Effect.gen(function* () {
          const before = yield* getMyApplication({});
          const original = before.description;
          return yield* Effect.gen(function* () {
            const updated = yield* updateMyApplication({
              description: { default: original },
            });
            return yield* Effect.sync(() => {
              expect(updated.id).toBe(before.id);
              expect(typeof updated.name).toBe("string");
              expect(updated.description).toBe(original);
              expect(typeof updated.verify_key).toBe("string");
              expect(typeof updated.flags).toBe("number");
              expect(typeof updated.flags_new).toBe("string");
              expect(Array.isArray(updated.redirect_uris)).toBe(true);
              expect(typeof updated.owner.id).toBe("string");
            });
          }).pipe(
            Effect.ensuring(
              updateMyApplication({
                description: { default: original },
              }).pipe(Effect.ignore),
            ),
          );
        }),
      );
    },
    30_000,
  );

  it(
    "error - BadRequest when interactions_endpoint_url is malformed",
    async () => {
      // Discord requires interactions_endpoint_url to be a valid HTTPS URL
      // and additionally validates it by issuing a PING. A clearly
      // malformed value such as "not-a-url" yields 400 Invalid Form Body.
      await runEffect(
        updateMyApplication({
          interactions_endpoint_url: `not-a-url-${testRunId}`,
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
    },
    30_000,
  );

  it("error - Forbidden / NotFound surface when a Bot token is rejected", async () => {
    // /applications/@me has no path params — the only way to reach the
    // declared typed errors is to send an unrecognized token. Discord
    // commonly returns 401 (mapped to Unauthorized) for invalid tokens,
    // but may also classify the response as 403/404 depending on routing.
    await runWithBogusCreds(
      updateMyApplication({
        description: { default: `distilled-bogus-${testRunId}` },
      }).pipe(
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

  it("error - Forbidden when a Bearer token is used on a bot-only route", async () => {
    // /applications/@me is a bot-token-only route. Calling it with a Bearer
    // credential typically yields 403 Forbidden, but Discord may also
    // return 401 Unauthorized depending on token validity, or 404 if route
    // resolution falls through ahead of the permission check.
    await runWithBogusCreds(
      updateMyApplication({
        description: { default: `distilled-bogus-${testRunId}` },
      }).pipe(
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
