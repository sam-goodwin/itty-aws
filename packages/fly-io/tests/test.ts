import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { CredentialsFromEnv } from "../src/credentials";

// Load environment variables from .env file
config();

// Main layer providing credentials and HTTP client for all tests
export const TestLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

/**
 * Short random hex string generated once per test run.
 * Append this to resource names so parallel test runs don't collide.
 */
export const testRunId: string = crypto
  .randomUUID()
  .replace(/-/g, "")
  .slice(0, 8);

/**
 * Run an Effect with the TestLayer provided.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(TestLayer)) as Effect.Effect<A, E, never>,
  );

/**
 * Cached check for whether the token can manage apps (create/list/delete).
 * Resolves once and caches. Use with `ctx.skip()` in tests that need app access.
 */
let _canManageApps: boolean | undefined;
export async function canManageApps(): Promise<boolean> {
  if (_canManageApps !== undefined) return _canManageApps;
  try {
    // Dynamic import to avoid circular dependencies
    const { AppsList } = await import("../src/operations/AppsList");
    await Effect.runPromise(
      AppsList({ org_slug: "personal" }).pipe(
        Effect.provide(TestLayer),
      ) as Effect.Effect<unknown, unknown, never>,
    );
    _canManageApps = true;
  } catch {
    _canManageApps = false;
  }
  return _canManageApps;
}
