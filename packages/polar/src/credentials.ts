import * as EffectConfig from "effect/Config";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";
import { ConfigError } from "@distilled.cloud/core/errors";

export const DEFAULT_API_BASE_URL = "https://api.polar.sh";
export const SANDBOX_API_BASE_URL = "https://sandbox-api.polar.sh";

export interface Config {
  readonly accessToken: Redacted.Redacted<string>;
  readonly apiBaseUrl: string;
}

export class Credentials extends Context.Service<Credentials, Config>()(
  "PolarCredentials",
) {}

const envConfig = EffectConfig.all({
  accessToken: EffectConfig.string("POLAR_ACCESS_TOKEN"),
  apiBaseUrl: EffectConfig.string("POLAR_API_BASE_URL").pipe(
    EffectConfig.withDefault(DEFAULT_API_BASE_URL),
  ),
});

export const CredentialsFromEnv = Layer.effect(
  Credentials,
  envConfig.asEffect().pipe(
    Effect.mapError(
      () =>
        new ConfigError({
          message: "POLAR_ACCESS_TOKEN environment variable is required",
        }),
    ),
    Effect.map(({ accessToken, apiBaseUrl }) => ({
      accessToken: Redacted.make(accessToken),
      apiBaseUrl,
    })),
  ),
);
