import { ConfigError } from "@distilled.cloud/core/errors";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";

export const DEFAULT_API_BASE_URL = "https://console.neon.tech/api/v2";

export interface Config {
  readonly apiKey: Redacted.Redacted<string>;
  readonly apiBaseUrl: string;
}

export class Credentials extends Context.Service<
  Credentials,
  Effect.Effect<Config>
>()("NeonCredentials") {}

export const CredentialsFromEnv = Layer.succeed(
  Credentials,
  Effect.gen(function* () {
    const apiKey = process.env.NEON_API_KEY;

    if (!apiKey) {
      return yield* new ConfigError({
        message: "NEON_API_KEY environment variable is required",
      });
    }

    return { apiKey: Redacted.make(apiKey), apiBaseUrl: DEFAULT_API_BASE_URL };
  }).pipe(Effect.orDie),
);
