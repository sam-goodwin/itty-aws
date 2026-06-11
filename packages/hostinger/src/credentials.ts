import { ConfigError } from "@distilled.cloud/core/errors";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";

export const DEFAULT_API_BASE_URL = "https://developers.hostinger.com";

export interface Config {
  readonly apiKey: Redacted.Redacted<string>;
  readonly apiBaseUrl: string;
}

export class Credentials extends Context.Service<
  Credentials,
  Effect.Effect<Config>
>()("HostingerCredentials") {}

export const CredentialsFromEnv = Layer.succeed(
  Credentials,
  Effect.gen(function* () {
    const apiKey = process.env.HOSTINGER_API_TOKEN;

    if (!apiKey) {
      return yield* new ConfigError({
        message:
          "HOSTINGER_API_TOKEN environment variable is required — create a token at https://hpanel.hostinger.com/profile/api",
      });
    }

    return {
      apiKey: Redacted.make(apiKey),
      apiBaseUrl: process.env.HOSTINGER_API_BASE_URL ?? DEFAULT_API_BASE_URL,
    };
  }).pipe(Effect.orDie),
);
