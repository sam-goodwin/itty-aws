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
import { listVoiceRegions } from "../src/operations/listVoiceRegions.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// GET /voice/regions returns a list of available voice regions. Parameterless
// endpoint; a valid bot token is sufficient. Error tests use the credentials
// override pattern with a bogus bearer token to drive auth failures
// independent of operator setup.
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

describe("listVoiceRegions", () => {
  it(
    "happy path - lists available voice regions",
    async () => {
      const result = await runEffect(listVoiceRegions({}));
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
      for (const region of result) {
        expect(typeof region.id).toBe("string");
        expect(typeof region.name).toBe("string");
        expect(typeof region.custom).toBe("boolean");
        expect(typeof region.deprecated).toBe("boolean");
        expect(typeof region.optimal).toBe("boolean");
      }
    },
    { timeout: 30_000 },
  );

  it("error - NotFound or Forbidden for an invalid bearer token", async () => {
    // Driving an auth failure against /voice/regions. Discord may surface
    // this as Forbidden, NotFound (to avoid leaking existence), BadRequest,
    // or Unauthorized depending on routing.
    await runWithInvalidBearer(
      `invalid-bearer-${testRunId}`,
      listVoiceRegions({}).pipe(
        Effect.flip,
        Effect.map((e) => {
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

  it("error - Forbidden or NotFound for a malformed bearer token", async () => {
    // A second deliberately bogus token framed as a malformed credential.
    // Discord may surface this as Forbidden, NotFound, BadRequest, or
    // Unauthorized.
    await runWithInvalidBearer(
      `malformed-token-${testRunId}`,
      listVoiceRegions({}).pipe(
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
