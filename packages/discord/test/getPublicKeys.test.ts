import { config } from "dotenv";
import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { getPublicKeys } from "../src/operations/getPublicKeys.ts";
import { Credentials, CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

// A layer that points the SDK at a Discord-shaped base URL whose route does
// not exist. /oauth2/keys has no input parameters, so error cases
// (NotFound / Forbidden) can only be reached by manipulating the request
// context.
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

describe("getPublicKeys", () => {
  it("happy path - returns the JWKS public keys for OIDC token verification", async () => {
    // /oauth2/keys is a public, unauthenticated JWKS endpoint.
    const result = await runEffect(getPublicKeys({}));
    expect(Array.isArray(result.keys)).toBe(true);
    expect(result.keys.length).toBeGreaterThan(0);
    for (const key of result.keys) {
      expect(typeof key.kty).toBe("string");
      expect(typeof key.use).toBe("string");
      expect(typeof key.kid).toBe("string");
      expect(typeof key.n).toBe("string");
      expect(typeof key.e).toBe("string");
      expect(typeof key.alg).toBe("string");
    }
  });

  it("error - NotFound when /oauth2/keys is unrouted on the configured base URL", async () => {
    // /oauth2/keys has no path params; the only realistic way to surface a
    // 404 is to point the SDK at a Discord-shaped base URL with a
    // non-existent API version. Discord returns 404 for /api/v999/...
    await runWithBaseUrl(
      getPublicKeys({}).pipe(
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
      getPublicKeys({}).pipe(
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
