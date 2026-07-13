/**
 * Test harness for the better-auth SDK.
 *
 * Unlike the hosted-cloud SDKs, better-auth is self-hosted, so these tests
 * boot a REAL better-auth server in-process (memory adapter + bearer plugin)
 * on an ephemeral port and point the SDK at it. No external credentials or
 * network access required — the suite is fully hermetic.
 */
import { betterAuth } from "better-auth";
import { memoryAdapter } from "better-auth/adapters/memory";
import { toNodeHandler } from "better-auth/node";
import { bearer } from "better-auth/plugins/bearer";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import * as http from "node:http";
import { type Config, Credentials, layer } from "../src/credentials.ts";

/**
 * Short random hex string generated once per test run, mixed into resource
 * names (emails) so parallel runs don't collide.
 */
export const testRunId: string = crypto
  .randomUUID()
  .replace(/-/g, "")
  .slice(0, 8);

/** A running in-process better-auth server. */
export interface AuthServer {
  /** SDK base URL (origin + `/api/auth` mount path). */
  readonly baseUrl: string;
  /** Shut the server down. */
  readonly close: () => Promise<void>;
}

/**
 * Start a self-contained better-auth server on an OS-assigned free port.
 *
 * The port is resolved BEFORE constructing `betterAuth` (its `baseURL` needs
 * the port) by listening first with a deferred request handler, then wiring
 * the handler once the auth instance exists — no port guessing, no race.
 */
export const startAuthServer = async (): Promise<AuthServer> => {
  let handler: http.RequestListener | undefined;
  const server = http.createServer((req, res) => {
    if (handler === undefined) {
      res.statusCode = 503;
      res.end();
      return;
    }
    handler(req, res);
  });

  await new Promise<void>((resolve) => server.listen(0, "127.0.0.1", resolve));
  const address = server.address();
  if (address === null || typeof address === "string") {
    throw new Error("failed to bind test server to a TCP port");
  }
  const origin = `http://127.0.0.1:${address.port}`;

  const auth = betterAuth({
    baseURL: origin,
    basePath: "/api/auth",
    secret: `test-secret-${testRunId}-0123456789abcdef`,
    // The memory adapter only lazily creates a table on the first write, but
    // sign-up reads (`findUserByEmail`) before it writes — seed the default
    // better-auth models up front so those reads don't hit a missing table.
    database: memoryAdapter({
      user: [],
      session: [],
      account: [],
      verification: [],
    }),
    emailAndPassword: { enabled: true },
    plugins: [bearer()],
    // No browser Origin header is sent by node fetch; disable the CSRF origin
    // gate so state-changing POSTs from the SDK are accepted in tests.
    advanced: { disableCSRFCheck: true },
  });
  handler = toNodeHandler(auth);

  return {
    baseUrl: `${origin}/api/auth`,
    close: () =>
      new Promise<void>((resolve, reject) =>
        server.close((err) => (err ? reject(err) : resolve())),
      ),
  };
};

/**
 * Build the Effect layer (credentials + fetch HTTP client) for a given base
 * URL and optional session token.
 */
export const testLayer = (
  baseUrl: string,
  token?: string,
): Layer.Layer<Credentials | FetchHttpClient.FetchHttpClient> =>
  Layer.merge(layer({ baseUrl, token }), FetchHttpClient.layer);

/**
 * Run an Effect against the test server. Pass a `token` to authenticate the
 * call as a signed-in user (sent as `Authorization: Bearer <token>`).
 */
export const runEffect = <A, E>(
  baseUrl: string,
  effect: Effect.Effect<A, E, Credentials | FetchHttpClient.FetchHttpClient>,
  token?: string,
): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(testLayer(baseUrl, token))) as Effect.Effect<
      A,
      E,
      never
    >,
  );

export type { Config };
