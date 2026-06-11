import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { CredentialsFromEnv } from "../src/credentials.ts";

// Load environment variables from .env file
config();

/** True when a Railway token is available — tests are skipped otherwise. */
export const hasCredentials: boolean =
  !!process.env.RAILWAY_API_TOKEN || !!process.env.RAILWAY_PROJECT_TOKEN;

// Main layer providing credentials and HTTP client for all tests
export const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

/**
 * Short random hex string generated once per test run.
 * Append this to resource names so parallel test runs don't collide.
 */
export const testRunId: string = crypto
  .randomUUID()
  .replace(/-/g, "")
  .slice(0, 8);

/**
 * Run an Effect with the MainLayer provided.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );
