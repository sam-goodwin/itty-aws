/**
 * better-auth credentials.
 *
 * Unlike a hosted cloud API, better-auth is self-hosted: the base URL is the
 * origin + mount path of *your* deployed auth handler (default mount path
 * `/api/auth`), e.g. `https://app.example.com/api/auth`.
 *
 * Authentication is session-based. Public endpoints (`signInEmail`,
 * `signUpEmail`, `requestPasswordReset`, `ok`, ...) need no token. For
 * session-protected endpoints (`getSession`, `signOut`, `updateUser`,
 * `listSessions`, ...) provide the session `token` returned in the body of
 * `signInEmail`/`signUpEmail`; it is sent as `Authorization: Bearer <token>`,
 * which the server resolves when the `bearer` plugin is enabled.
 *
 * Because the token is obtained *at runtime* (after signing in), the usual
 * flow is to sign in with an unauthenticated layer, then re-provide a
 * token-bearing layer built with {@link layer} for the authenticated calls.
 *
 * @example
 * ```ts
 * import * as BetterAuth from "@distilled.cloud/better-auth";
 *
 * const authed = BetterAuth.layer({
 *   baseUrl: "https://app.example.com/api/auth",
 *   token: sessionToken,
 * });
 * ```
 */
import { ConfigError } from "@distilled.cloud/core/errors";
import * as EffectConfig from "effect/Config";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import * as Redacted from "effect/Redacted";

/** Default base URL — a local better-auth dev server mounted at `/api/auth`. */
export const DEFAULT_BASE_URL = "http://localhost:3000/api/auth";

export interface Config {
  /** Base URL of the better-auth handler, including its mount path. */
  readonly baseUrl: string;
  /** Optional session token for authenticated endpoints (sent as a bearer). */
  readonly token?: Redacted.Redacted<string>;
}

export class Credentials extends Context.Service<
  Credentials,
  Effect.Effect<Config>
>()("BetterAuthCredentials") {}

/**
 * Build a credentials Layer directly from a base URL and optional session
 * token. Use this to inject a token captured from a sign-in response.
 */
export const layer = (config: {
  baseUrl: string;
  token?: string | Redacted.Redacted<string>;
}): Layer.Layer<Credentials> =>
  Layer.succeed(
    Credentials,
    Effect.succeed({
      baseUrl: config.baseUrl,
      token:
        config.token === undefined
          ? undefined
          : Redacted.isRedacted(config.token)
            ? config.token
            : Redacted.make(config.token),
    }),
  );

const envConfig = EffectConfig.all({
  baseUrl: EffectConfig.string("BETTER_AUTH_URL").pipe(
    EffectConfig.withDefault(DEFAULT_BASE_URL),
  ),
  token: EffectConfig.option(EffectConfig.string("BETTER_AUTH_TOKEN")),
});

/**
 * Credentials from the environment.
 *
 * - `BETTER_AUTH_URL` — base URL of the auth handler (default
 *   `http://localhost:3000/api/auth`).
 * - `BETTER_AUTH_TOKEN` — optional session token for authenticated calls.
 */
export const CredentialsFromEnv = Layer.succeed(
  Credentials,
  envConfig.pipe(
    Effect.mapError(
      () =>
        new ConfigError({
          message: "BETTER_AUTH_URL environment variable is required",
        }),
    ),
    Effect.map(({ baseUrl, token }) => {
      const raw = Option.getOrUndefined(token);
      return {
        baseUrl,
        token: raw === undefined ? undefined : Redacted.make(raw),
      };
    }),
    Effect.orDie,
  ),
);
