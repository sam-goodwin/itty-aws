import { ConfigError } from "@distilled.cloud/core/errors";
import * as EffectConfig from "effect/Config";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";

export const DEFAULT_REGION = "gcp-us-central1";
export const DEFAULT_BASE_URL = "https://{region}.turbopuffer.com";

export interface Config {
  readonly apiKey: Redacted.Redacted<string>;
  readonly region: string;
  readonly baseUrl?: string;
}

export class Credentials extends Context.Service<
  Credentials,
  Effect.Effect<Config>
>()("TurbopufferCredentials") {}

export const resolveBaseUrl = (
  credentials: Pick<Config, "region" | "baseUrl">,
): string => {
  const template = credentials.baseUrl ?? DEFAULT_BASE_URL;
  if (template.includes("{region}")) {
    return template.replace("{region}", credentials.region);
  }
  return template;
};

export const fromToken = (
  apiKey: string | Redacted.Redacted<string>,
  options: { readonly region?: string; readonly baseUrl?: string } = {},
): Layer.Layer<Credentials> =>
  Layer.succeed(
    Credentials,
    Effect.succeed({
      apiKey: typeof apiKey === "string" ? Redacted.make(apiKey) : apiKey,
      region: options.region ?? DEFAULT_REGION,
      baseUrl: options.baseUrl,
    }),
  );

const envConfig = EffectConfig.all({
  apiKey: EffectConfig.redacted("TURBOPUFFER_API_KEY"),
  region: EffectConfig.withDefault(
    EffectConfig.string("TURBOPUFFER_REGION"),
    DEFAULT_REGION,
  ),
  baseUrl: EffectConfig.option(
    EffectConfig.string("TURBOPUFFER_BASE_URL"),
  ).pipe(
    EffectConfig.map((opt) => (opt._tag === "Some" ? opt.value : undefined)),
  ),
});

export const CredentialsFromEnv = Layer.succeed(
  Credentials,
  envConfig.pipe(
    Effect.mapError(
      () =>
        new ConfigError({
          message: "TURBOPUFFER_API_KEY environment variable is required",
        }),
    ),
    Effect.map(({ apiKey, region, baseUrl }) => ({
      apiKey,
      region,
      baseUrl,
    })),
    Effect.orDie,
  ),
);
