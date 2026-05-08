import * as EffectConfig from "effect/Config";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";
import { ConfigError } from "@distilled.cloud/core/errors";

export const DEFAULT_API_BASE_URL = "https://api.turso.tech";

export interface Config {
  readonly apiKey: Redacted.Redacted<string>;
  readonly apiBaseUrl: string;
}

export class Credentials extends Context.Service<Credentials, Config>()(
  "TursoCredentials",
) {}

const envConfig = EffectConfig.all({
  apiKey: EffectConfig.string("TURSO_API_KEY"),
});

export const CredentialsFromEnv = Layer.effect(
  Credentials,
  envConfig.asEffect().pipe(
    Effect.mapError(
      () =>
        new ConfigError({
          message: "TURSO_API_KEY environment variable is required",
        }),
    ),
    Effect.map(({ apiKey }) => ({
      apiKey: Redacted.make(apiKey),
      apiBaseUrl: DEFAULT_API_BASE_URL,
    })),
  ),
);
