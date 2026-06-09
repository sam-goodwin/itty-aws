import { ConfigError } from "@distilled.cloud/core/errors";
import * as EffectConfig from "effect/Config";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";

export const DEFAULT_API_BASE_URL = "https://api.machines.dev/v1";

export interface Config {
  readonly apiKey: Redacted.Redacted<string>;
  readonly apiBaseUrl: string;
}

export class Credentials extends Context.Service<
  Credentials,
  Effect.Effect<Config>
>()("Fly-ioCredentials") {}

const envConfig = EffectConfig.all({
  apiKey: EffectConfig.string("FLY_IO_API_KEY"),
});

export const CredentialsFromEnv = Layer.succeed(
  Credentials,
  envConfig.pipe(
    Effect.mapError(
      () =>
        new ConfigError({
          message: "FLY_IO_API_KEY environment variable is required",
        }),
    ),
    Effect.map(({ apiKey }) => ({
      apiKey: Redacted.make(apiKey),
      apiBaseUrl: DEFAULT_API_BASE_URL,
    })),
    Effect.orDie,
  ),
);
