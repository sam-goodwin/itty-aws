/**
 * Polar credentials.
 *
 * Auth is a Bearer token — a Personal Access Token (PAT) or Organization
 * Access Token (OAT) from the Polar dashboard, sent as
 * `Authorization: Bearer <token>`. Polar runs two environments; select with
 * `POLAR_SERVER` (`production` | `sandbox`) or pin a base URL directly.
 */
import { ConfigError } from "@distilled.cloud/core/errors";
import * as EffectConfig from "effect/Config";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";

/** Production API base URL. */
export const PRODUCTION_BASE_URL = "https://api.polar.sh";
/** Sandbox API base URL. */
export const SANDBOX_BASE_URL = "https://sandbox-api.polar.sh";

export type Server = "production" | "sandbox";

export interface Config {
  readonly accessToken: Redacted.Redacted<string>;
  readonly apiBaseUrl: string;
}

export class Credentials extends Context.Service<
  Credentials,
  Effect.Effect<Config>
>()("PolarCredentials") {}

const baseUrlForServer = (server: string): string =>
  server === "production" ? PRODUCTION_BASE_URL : SANDBOX_BASE_URL;

/**
 * Build a credentials Layer directly from an access token and target server
 * (defaults to `sandbox`) or an explicit base URL.
 */
export const layer = (config: {
  accessToken: string | Redacted.Redacted<string>;
  server?: Server;
  baseUrl?: string;
}): Layer.Layer<Credentials> =>
  Layer.succeed(
    Credentials,
    Effect.succeed({
      accessToken: Redacted.isRedacted(config.accessToken)
        ? config.accessToken
        : Redacted.make(config.accessToken),
      apiBaseUrl:
        config.baseUrl ?? baseUrlForServer(config.server ?? "sandbox"),
    }),
  );

const envConfig = EffectConfig.all({
  accessToken: EffectConfig.string("POLAR_ACCESS_TOKEN"),
  server: EffectConfig.string("POLAR_SERVER").pipe(
    EffectConfig.withDefault("production"),
  ),
  baseUrl: EffectConfig.option(EffectConfig.string("POLAR_BASE_URL")),
});

/**
 * Credentials from the environment.
 *
 * - `POLAR_ACCESS_TOKEN` (required) — PAT or OAT.
 * - `POLAR_SERVER` (optional) — `production` (default) or `sandbox`.
 * - `POLAR_BASE_URL` (optional) — override the base URL entirely.
 */
export const CredentialsFromEnv = Layer.succeed(
  Credentials,
  envConfig.pipe(
    Effect.mapError(
      () =>
        new ConfigError({
          message: "POLAR_ACCESS_TOKEN environment variable is required",
        }),
    ),
    Effect.map(({ accessToken, server, baseUrl }) => ({
      accessToken: Redacted.make(accessToken),
      apiBaseUrl:
        baseUrl._tag === "Some" ? baseUrl.value : baseUrlForServer(server),
    })),
    Effect.orDie,
  ),
);
