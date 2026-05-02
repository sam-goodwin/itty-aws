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
 * Several WorkOS happy-path tests require workspace-level fixtures we can't
 * provision from the SDK (custom permissions, Standalone Radar enablement,
 * Magic Auth enablement, OIDC clients, audit log events, …). When the test
 * environment is missing one of those fixtures the API returns a recognisable
 * "X not found / disabled / unknown" message; rather than failing the test
 * we treat it as a soft skip — the test still verifies the SDK reaches the
 * endpoint with the right input shape and decodes the response without
 * blowing up.
 *
 * Every pattern is a substring of an actual error message observed in CI;
 * keep this list narrow so genuine SDK regressions still fail loudly.
 */
const TEST_ENV_LIMITATION_PATTERNS: ReadonlyArray<RegExp> = [
  /Organization not found/,
  /UserOrganizationMembership not found/,
  /Permission not found/,
  /Data Integration not found/,
  /Application not found/,
  /Session not found for external_auth_id/,
  /Standalone Radar is not enabled/,
  /Magic Auth is disabled/,
  /No audit log events found/,
  /Cannot update organization resource directly/,
  /Cannot delete resources for organization resource/,
  /Unknown client/,
];

const isTestEnvLimitation = (e: unknown): boolean => {
  if (!e || typeof e !== "object") return false;
  const msg = (e as { message?: unknown }).message;
  if (typeof msg !== "string") return false;
  return TEST_ENV_LIMITATION_PATTERNS.some((p) => p.test(msg));
};

/**
 * Run an Effect; if the resulting error matches a known test-environment
 * limitation, skip the test (with the API's message as the reason) instead
 * of failing it. Any other error still propagates and fails the test.
 *
 * Usage:
 *   it("happy path", async (ctx) => {
 *     const result = await runOrSkipOnEnvLimitation(ctx, Operation({...}));
 *     // ctx.skip() aborts the test; control only reaches here on success.
 *     expect(result).toBeDefined();
 *   });
 */
export const runOrSkipOnEnvLimitation = async <A, E>(
  ctx: { skip: (reason?: string) => void },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  effect: Effect.Effect<A, E, any>,
): Promise<A> => {
  try {
    return await runEffect(effect);
  } catch (e) {
    if (isTestEnvLimitation(e)) {
      ctx.skip(
        `test env: ${(e as { message?: string }).message ?? "fixture unavailable"}`,
      );
      // ctx.skip throws to abort — TS needs a return path.
      throw e;
    }
    throw e;
  }
};
