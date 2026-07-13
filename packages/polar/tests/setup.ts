import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { CredentialsFromEnv } from "../src/credentials.ts";

// Load environment variables from .env file (repo root + package).
config();

/** True when a Polar token is available, so live tests can run. */
export const hasCredentials: boolean =
  typeof process.env.POLAR_ACCESS_TOKEN === "string" &&
  process.env.POLAR_ACCESS_TOKEN.length > 0;

/** Credentials (from env) + HTTP client for all tests. */
export const TestLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

/** Short random hex string generated once per test run. */
export const testRunId: string = crypto
  .randomUUID()
  .replace(/-/g, "")
  .slice(0, 8);

/** Run an Effect (requiring the SDK's Credentials + HttpClient) with the TestLayer provided. */
export const runEffect = <A, E, R>(
  effect: Effect.Effect<A, E, R>,
): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(TestLayer)) as Effect.Effect<A, E, never>,
  );
