import { config } from "dotenv";
import * as Duration from "effect/Duration";
import * as Effect from "effect/Effect";
import { pipe } from "effect/Function";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";
import * as Schedule from "effect/Schedule";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { Credentials, CredentialsFromEnv } from "../src/credentials.ts";
import { customerscreate } from "../src/operations/customerscreate.ts";
import { customersdelete } from "../src/operations/customersdelete.ts";
import { customerSessionscreate } from "../src/operations/customerSessionscreate.ts";
import { isTransientError } from "@distilled.cloud/core/category";
import { Retry, capped, jittered } from "../src/retry.ts";

config();

/**
 * Retry policy used in tests: 3 attempts with exponential backoff (capped).
 *
 * The default Polar policy is 5 retries that honor `Retry-After` server hints,
 * which on the sandbox can be tens of seconds — a single rate-limited call
 * can stall the runner for minutes. We use a tighter 3-attempt schedule
 * with a 5s per-step cap so failures surface quickly in CI.
 */
const TestRetryLayer = Layer.succeed(Retry, {
  while: isTransientError,
  schedule: pipe(
    Schedule.exponential(200, 2),
    capped(Duration.seconds(5)),
    Schedule.both(Schedule.recurs(3)),
    jittered,
  ),
});

export const TestLayer = Layer.mergeAll(
  CredentialsFromEnv,
  FetchHttpClient.layer,
  TestRetryLayer,
);

export const testRunId: string = crypto
  .randomUUID()
  .replace(/-/g, "")
  .slice(0, 8);

export const organizationId = process.env.POLAR_ORGANIZATION_ID;

export const hasLivePolarCredentials = Boolean(process.env.POLAR_ACCESS_TOKEN);

/**
 * A real-domain email base used to generate per-test addresses. Polar's
 * sandbox rejects `example.com` ("domain does not accept email"), so tests
 * need a real receiving domain. Set `POLAR_TEST_EMAIL` to an address you
 * own; tests append a unique suffix to keep addresses unique per case.
 *
 * If unset, falls back to `example.com` — tests that send actual emails
 * (invitations, verifications) will fail with a domain-rejection error.
 */
const TEST_EMAIL_BASE = process.env.POLAR_TEST_EMAIL ?? "test@example.com";

/** Build a unique test email by inserting `+<suffix>` before the `@`. */
export const testEmail = (suffix: string): string => {
  const at = TEST_EMAIL_BASE.indexOf("@");
  if (at === -1) return `${TEST_EMAIL_BASE}+${suffix}@example.com`;
  const local = TEST_EMAIL_BASE.slice(0, at);
  const domain = TEST_EMAIL_BASE.slice(at + 1);
  return `${local}+${suffix}@${domain}`;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(TestLayer)) as Effect.Effect<A, E, never>,
  );

const apiBaseUrl = (): string =>
  process.env.POLAR_API_BASE_URL ?? "https://api.polar.sh";

/**
 * Run an Effect against a fresh, throwaway customer session.
 *
 * Customer-portal endpoints require a customer session token, not the org
 * access token. This creates a customer with the org token, mints a session
 * token for them, runs the effect with that token as Credentials, then
 * deletes the customer.
 */
export const runEffectAsCustomer = async <A, E>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  effect: Effect.Effect<A, E, any>,
): Promise<A> => {
  const email = testEmail(
    `portal-${testRunId}-${Math.random().toString(36).slice(2, 8)}`,
  );
  const customer = await runEffect(
    customerscreate({
      email,
      name: `Distilled Portal ${testRunId}`,
      metadata: { distilled: true, testRunId },
    }),
  );

  try {
    const session = await runEffect(
      customerSessionscreate({ customer_id: customer.id }),
    );

    const token = Redacted.isRedacted(session.token)
      ? session.token
      : Redacted.make(session.token as unknown as string);

    const sessionLayer = Layer.mergeAll(
      Layer.succeed(Credentials, {
        accessToken: token,
        apiBaseUrl: apiBaseUrl(),
      }),
      FetchHttpClient.layer,
      TestRetryLayer,
    );

    return await Effect.runPromise(
      effect.pipe(Effect.provide(sessionLayer)) as Effect.Effect<A, E, never>,
    );
  } finally {
    await runEffect(customersdelete({ id: customer.id }).pipe(Effect.ignore));
  }
};
