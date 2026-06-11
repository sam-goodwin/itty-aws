/**
 * Railway credentials.
 *
 * Railway's public API is a single GraphQL endpoint at
 * https://backboard.railway.com/graphql/v2. Authentication is via one of:
 *
 * - Account / workspace / OAuth token — sent as `Authorization: Bearer <token>`
 *   (create one at https://railway.com/account/tokens)
 * - Project token — scoped to a single environment in a project, sent as
 *   `Project-Access-Token: <token>`
 */
import { ConfigError } from "@distilled.cloud/core/errors";
import * as EffectConfig from "effect/Config";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import * as Redacted from "effect/Redacted";

/** Default Railway API host. The endpoint path (`/graphql/v2`) is set per operation. */
export const DEFAULT_API_BASE_URL = "https://backboard.railway.com";

export interface Config {
  /** Account / workspace / OAuth token (sent as `Authorization: Bearer`). */
  readonly apiToken?: Redacted.Redacted<string>;
  /** Project token (sent as `Project-Access-Token`). */
  readonly projectToken?: Redacted.Redacted<string>;
  readonly apiBaseUrl: string;
}

export class Credentials extends Context.Service<
  Credentials,
  Effect.Effect<Config>
>()("RailwayCredentials") {}

const envConfig = EffectConfig.all({
  apiToken: EffectConfig.option(EffectConfig.string("RAILWAY_API_TOKEN")),
  projectToken: EffectConfig.option(
    EffectConfig.string("RAILWAY_PROJECT_TOKEN"),
  ),
  apiBaseUrl: EffectConfig.string("RAILWAY_API_URL").pipe(
    EffectConfig.withDefault(DEFAULT_API_BASE_URL),
  ),
});

/**
 * Build credentials from environment variables.
 *
 * - `RAILWAY_API_TOKEN` — account or workspace token from
 *   https://railway.com/account/tokens
 * - `RAILWAY_PROJECT_TOKEN` — project token scoped to a single environment
 *   (used when `RAILWAY_API_TOKEN` is not set)
 * - `RAILWAY_API_URL` — override the API host (optional, defaults to
 *   https://backboard.railway.com)
 *
 * At least one of `RAILWAY_API_TOKEN` / `RAILWAY_PROJECT_TOKEN` is required.
 */
export const CredentialsFromEnv = Layer.succeed(
  Credentials,
  envConfig.pipe(
    Effect.mapError(
      () =>
        new ConfigError({
          message:
            "RAILWAY_API_TOKEN (or RAILWAY_PROJECT_TOKEN) environment variable is required",
        }),
    ),
    Effect.flatMap(({ apiToken, projectToken, apiBaseUrl }) => {
      if (Option.isNone(apiToken) && Option.isNone(projectToken)) {
        return Effect.fail(
          new ConfigError({
            message:
              "RAILWAY_API_TOKEN (or RAILWAY_PROJECT_TOKEN) environment variable is required",
          }),
        );
      }
      return Effect.succeed({
        apiToken: Option.getOrUndefined(Option.map(apiToken, Redacted.make)),
        projectToken: Option.getOrUndefined(
          Option.map(projectToken, Redacted.make),
        ),
        apiBaseUrl,
      });
    }),
    Effect.orDie,
  ),
);
