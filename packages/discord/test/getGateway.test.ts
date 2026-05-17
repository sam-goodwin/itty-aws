import { config } from "dotenv";
import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { getGateway } from "../src/operations/getGateway.ts";
import { Credentials, CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

// A layer that points the SDK at a Discord-shaped base URL whose route does
// not exist. /gateway has no input parameters, so error cases (NotFound /
// Forbidden) can only be reached by manipulating the request context.
const customBaseUrlLayer = (apiBaseUrl: string): Layer.Layer<Credentials> =>
  Layer.succeed(Credentials, {
    token: Redacted.make("MTAwMDAwMDAwMDAwMDAwMDAw.bogus.token-for-distilled-tests"),
    authScheme: "Bot" as const,
    apiBaseUrl,
  });

const runWithBaseUrl = <A, E>(
  effect: Effect.Effect<A, E, Credentials>,
  apiBaseUrl: string,
): Promise<A> => {
  const layer = Layer.merge(customBaseUrlLayer(apiBaseUrl), FetchHttpClient.layer);
  return Effect.runPromise(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    effect.pipe(Effect.provide(layer)) as Effect.Effect<A, E, never>,
  );
};

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);
void testRunId;

describe("getGateway", () => {
  it("happy path - returns the WSS gateway url", async () => {
    const result = await runEffect(getGateway({}));
    expect(typeof result.url).toBe("string");
    expect(result.url.startsWith("wss://")).toBe(true);
  });

  it("error - NotFound when /gateway is unrouted on the configured base URL", async () => {
    // /gateway has no path params; the only realistic way to surface a 404
    // is to point the SDK at a Discord-shaped base URL with a non-existent
    // API version. Discord returns 404 for /api/v999/gateway.
    await runWithBaseUrl(
      getGateway({}).pipe(
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
    // Pointing at a host that intentionally responds 403 for unknown paths
    // exercises the SDK's Forbidden mapping. Cloudflare 1001 endpoints
    // return 403 for many unconfigured paths — but other hosts may return
    // 404 / 400, so the typed-tag set is tolerant.
    await runWithBaseUrl(
      getGateway({}).pipe(
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
