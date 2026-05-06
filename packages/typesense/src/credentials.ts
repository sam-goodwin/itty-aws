import * as EffectConfig from "effect/Config";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";
import { ConfigError } from "@distilled.cloud/core/errors";

/**
 * Typesense has no fixed default base URL — users run their own server
 * (e.g. http://localhost:8108) or use Typesense Cloud (per-cluster URLs
 * like https://xxx.a1.typesense.net). Users must supply TYPESENSE_API_URL.
 */
export const DEFAULT_API_BASE_URL = "";

export interface Config {
  readonly apiKey: Redacted.Redacted<string>;
  readonly apiBaseUrl: string;
}

export class Credentials extends Context.Service<Credentials, Config>()(
  "TypesenseCredentials",
) {}

const envConfig = EffectConfig.all({
  apiKey: EffectConfig.string("TYPESENSE_API_KEY"),
  apiBaseUrl: EffectConfig.string("TYPESENSE_API_URL"),
});

export const CredentialsFromEnv = Layer.effect(
  Credentials,
  envConfig.asEffect().pipe(
    Effect.mapError(
      () =>
        new ConfigError({
          message:
            "TYPESENSE_API_KEY and TYPESENSE_API_URL environment variables are required",
        }),
    ),
    Effect.map(({ apiKey, apiBaseUrl }) => ({
      apiKey: Redacted.make(apiKey),
      apiBaseUrl,
    })),
  ),
);
