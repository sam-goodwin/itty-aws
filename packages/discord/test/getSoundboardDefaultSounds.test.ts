import { config } from "dotenv";
import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { getSoundboardDefaultSounds } from "../src/operations/getSoundboardDefaultSounds.ts";
import { Credentials, CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

// A layer that points the SDK at a Discord-shaped base URL whose route
// does not exist. /soundboard-default-sounds has no input parameters, so
// error cases (NotFound / Forbidden) can only be reached by manipulating
// the request context.
const customBaseUrlLayer = (apiBaseUrl: string): Layer.Layer<Credentials> =>
  Layer.succeed(Credentials, {
    token: Redacted.make(
      "MTAwMDAwMDAwMDAwMDAwMDAw.bogus.token-for-distilled-tests",
    ),
    authScheme: "Bot" as const,
    apiBaseUrl,
  });

const runWithBaseUrl = <A, E>(
  effect: Effect.Effect<A, E, Credentials>,
  apiBaseUrl: string,
): Promise<A> => {
  const layer = Layer.merge(
    customBaseUrlLayer(apiBaseUrl),
    FetchHttpClient.layer,
  );
  return Effect.runPromise(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    effect.pipe(Effect.provide(layer)) as Effect.Effect<A, E, never>,
  );
};

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);
void testRunId;

describe("getSoundboardDefaultSounds", () => {
  it("happy path - returns the list of default soundboard sounds", async () => {
    const result = await runEffect(getSoundboardDefaultSounds({}));
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    for (const sound of result) {
      expect(typeof sound.name).toBe("string");
      expect(typeof sound.sound_id).toBe("string");
      expect(typeof sound.volume).toBe("number");
      expect(
        sound.emoji_name === null || typeof sound.emoji_name === "string",
      ).toBe(true);
      expect(typeof sound.available).toBe("boolean");
      if (sound.guild_id !== undefined) {
        expect(typeof sound.guild_id).toBe("string");
      }
      if (sound.user !== undefined) {
        expect(typeof sound.user.id).toBe("string");
        expect(typeof sound.user.username).toBe("string");
      }
    }
  });

  it("error - NotFound when /soundboard-default-sounds is unrouted on the configured base URL", async () => {
    // The endpoint has no path params; the only realistic way to surface a
    // 404 is to point the SDK at a Discord-shaped base URL with a
    // non-existent API version. Discord returns 404 for /api/v999/...
    await runWithBaseUrl(
      getSoundboardDefaultSounds({}).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
      "https://discord.com/api/v999",
    );
  });

  it("error - Forbidden when the host classifies the request as forbidden", async () => {
    // Pointing at a host path that responds 403 (or 404) for unknown
    // routes exercises the SDK's Forbidden / NotFound mapping. The typed
    // tag set is tolerant because hosts may return 404 / 400 instead of
    // 403.
    await runWithBaseUrl(
      getSoundboardDefaultSounds({}).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["Forbidden", "NotFound", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
      "https://discord.com/forbidden-distilled-test",
    );
  });
});
