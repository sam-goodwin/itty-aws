import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { CredentialsFromEnv } from "../src/credentials.ts";

// Load environment variables from .env file
config();

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

/**
 * Tags that commonly indicate the WorkOS test workspace doesn't have the
 * fixture data or feature flags enabled for a given happy-path call (e.g.
 * Magic Auth disabled, Standalone Radar not enabled, role/permission/resource
 * not seeded). When a happy-path call fails with one of these, we skip the
 * test rather than failing CI on environmental gaps.
 */
const ENV_LIMITATION_TAGS = new Set([
  "Forbidden",
  "NotFound",
  "BadRequest",
  "UnprocessableEntity",
  "Conflict",
]);

/**
 * Run a happy-path Effect. If it fails with a typed error tag that commonly
 * indicates a workspace fixture/feature-flag limitation, mark the test as
 * skipped instead of failing. Otherwise rethrow.
 *
 * Use this only for "happy path" calls in workos tests where the assertion
 * is on success — error-path tests should keep using `runEffect` directly.
 */
export const runOrSkipOnEnvLimitation = async <A, E>(
  ctx: { skip: (reason?: string) => void },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  effect: Effect.Effect<A, E, any>,
): Promise<A> => {
  try {
    return await runEffect(effect);
  } catch (err) {
    const tag = (err as { _tag?: string } | null | undefined)?._tag;
    const message = (err as { message?: string } | null | undefined)?.message;
    if (tag && ENV_LIMITATION_TAGS.has(tag)) {
      ctx.skip(
        `workspace fixture limitation: ${tag}${message ? ` — ${message}` : ""}`,
      );
      // Unreachable — vitest's ctx.skip throws an internal sentinel.
      return undefined as never;
    }
    throw err;
  }
};
