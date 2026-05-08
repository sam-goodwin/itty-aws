import * as EffectConfig from "effect/Config";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";
import { ConfigError } from "@distilled.cloud/core/errors";

export const DEFAULT_API_BASE_URL = "https://api.supabase.com";

export interface Config {
  readonly accessToken: Redacted.Redacted<string>;
  readonly apiBaseUrl: string;
}

export class Credentials extends Context.Service<Credentials, Config>()(
  "SupabaseCredentials",
) {}

const envConfig = EffectConfig.all({
  accessToken: EffectConfig.string("SUPABASE_ACCESS_TOKEN"),
});

export const CredentialsFromEnv = Layer.effect(
  Credentials,
  envConfig.asEffect().pipe(
    Effect.mapError(
      () =>
        new ConfigError({
          message: "SUPABASE_ACCESS_TOKEN environment variable is required",
        }),
    ),
    Effect.map(({ accessToken }) => ({
      accessToken: Redacted.make(accessToken),
      apiBaseUrl: DEFAULT_API_BASE_URL,
    })),
  ),
);
