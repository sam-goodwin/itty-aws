import { describe, expect, it } from "vitest";
import * as Effect from "effect/Effect";
import * as Redacted from "effect/Redacted";
import {
  Credentials,
  CredentialsFromEnv,
  DEFAULT_API_BASE_URL,
  SANDBOX_API_BASE_URL,
} from "../src/credentials.ts";

const withPolarEnv = <A, E, R>(
  env: Record<string, string | undefined>,
  effect: Effect.Effect<A, E, R>,
): Effect.Effect<A, E, R> =>
  Effect.acquireUseRelease(
    Effect.sync(() => {
      const previous = {
        POLAR_ACCESS_TOKEN: process.env.POLAR_ACCESS_TOKEN,
        POLAR_API_BASE_URL: process.env.POLAR_API_BASE_URL,
      };

      for (const [key, value] of Object.entries(env)) {
        if (value === undefined) {
          delete process.env[key];
        } else {
          process.env[key] = value;
        }
      }

      return previous;
    }),
    () => effect,
    (previous) =>
      Effect.sync(() => {
        for (const [key, value] of Object.entries(previous)) {
          if (value === undefined) {
            delete process.env[key];
          } else {
            process.env[key] = value;
          }
        }
      }),
  );

const resolveCredentials = Effect.gen(function* () {
  return yield* Credentials;
}).pipe(Effect.provide(CredentialsFromEnv));

describe("CredentialsFromEnv", () => {
  it("uses production by default", async () => {
    const credentials = await Effect.runPromise(
      withPolarEnv(
        {
          POLAR_ACCESS_TOKEN: "token-123",
          POLAR_API_BASE_URL: undefined,
        },
        resolveCredentials,
      ),
    );

    expect(Redacted.value(credentials.accessToken)).toBe("token-123");
    expect(credentials.apiBaseUrl).toBe(DEFAULT_API_BASE_URL);
  });

  it("supports overriding the API base URL", async () => {
    const credentials = await Effect.runPromise(
      withPolarEnv(
        {
          POLAR_ACCESS_TOKEN: "token-123",
          POLAR_API_BASE_URL: SANDBOX_API_BASE_URL,
        },
        resolveCredentials,
      ),
    );

    expect(credentials.apiBaseUrl).toBe(SANDBOX_API_BASE_URL);
  });

  it("fails when POLAR_ACCESS_TOKEN is missing", async () => {
    const error = await Effect.runPromise(
      withPolarEnv(
        {
          POLAR_ACCESS_TOKEN: undefined,
          POLAR_API_BASE_URL: undefined,
        },
        Effect.flip(resolveCredentials),
      ),
    );

    expect(error._tag).toBe("ConfigError");
    expect(error.message).toContain("POLAR_ACCESS_TOKEN");
  });
});
