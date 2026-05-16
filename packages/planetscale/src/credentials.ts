import { ConfigError } from "@distilled.cloud/core/errors";
import * as EffectConfig from "effect/Config";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";

export const DEFAULT_API_BASE_URL = "https://api.planetscale.com/v1";

export interface Config {
  readonly tokenId: Redacted.Redacted<string>;
  readonly token: Redacted.Redacted<string>;
  readonly organization: string;
  readonly apiBaseUrl: string;
}

export class Credentials extends Context.Service<Credentials, Config>()(
  "PlanetScaleCredentials",
) {}

const envConfig = EffectConfig.all({
  tokenId: EffectConfig.string("PLANETSCALE_API_TOKEN_ID"),
  token: EffectConfig.string("PLANETSCALE_API_TOKEN"),
  organization: EffectConfig.string("PLANETSCALE_ORGANIZATION"),
});

export const CredentialsFromEnv = Layer.effect(
  Credentials,
  envConfig.pipe(
    Effect.mapError(
      () =>
        new ConfigError({
          message:
            "PLANETSCALE_API_TOKEN_ID, PLANETSCALE_API_TOKEN, and PLANETSCALE_ORGANIZATION environment variables are required",
        }),
    ),
    Effect.map(({ tokenId, token, organization }) => ({
      tokenId: Redacted.make(tokenId),
      token: Redacted.make(token),
      organization,
      apiBaseUrl: DEFAULT_API_BASE_URL,
    })),
  ),
);
