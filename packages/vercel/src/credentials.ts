/**
 * Vercel credentials — hand-written.
 *
 * The `Credentials` service resolves `{ token, apiBaseUrl }` per request; the
 * protocol layer formats the `Authorization: Bearer <token>` header from it.
 *
 * Vercel scopes calls to a team with a `teamId` / `slug` QUERY parameter, not
 * a credential — every team-scoped operation takes both as optional inputs,
 * so they stay where the API puts them rather than hiding in the layer.
 */
import * as EffectConfig from "effect/Config";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";
import { ConfigError } from "@distilled.cloud/core/errors";

/** Vercel REST API base URL. */
export const DEFAULT_API_BASE_URL = "https://api.vercel.com";

export interface Config {
  readonly token: Redacted.Redacted<string>;
  readonly apiBaseUrl: string;
}

export class Credentials extends Context.Service<
  Credentials,
  Effect.Effect<Config>
>()("VercelCredentials") {}

const envConfig = EffectConfig.all({
  token: EffectConfig.string("VERCEL_TOKEN"),
  apiBaseUrl: EffectConfig.string("VERCEL_API_URL").pipe(
    EffectConfig.withDefault(DEFAULT_API_BASE_URL),
  ),
});

export const CredentialsFromEnv = Layer.succeed(
  Credentials,
  envConfig.pipe(
    Effect.mapError(
      () =>
        new ConfigError({
          message: "VERCEL_TOKEN environment variable is required",
        }),
    ),
    Effect.map(({ token, apiBaseUrl }) => ({
      token: Redacted.make(token),
      apiBaseUrl,
    })),
    Effect.orDie,
  ),
);

/** Convenience layer from a plain token + optional base URL. */
export const credentials = (config: {
  readonly token: string;
  readonly apiBaseUrl?: string;
}): Layer.Layer<Credentials> =>
  Layer.succeed(
    Credentials,
    Effect.succeed({
      token: Redacted.make(config.token),
      apiBaseUrl: config.apiBaseUrl ?? DEFAULT_API_BASE_URL,
    }),
  );
