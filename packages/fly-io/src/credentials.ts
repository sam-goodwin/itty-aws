import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";
import * as Context from "effect/Context";
import { ConfigError } from "@distilled.cloud/core/errors";

export const DEFAULT_API_BASE_URL = "https://api.machines.dev/v1";

export interface Config {
  readonly apiKey: Redacted.Redacted<string>;
  readonly apiBaseUrl: string;
}

export class Credentials extends Context.Service<Credentials, Config>()(
  "Fly-ioCredentials",
) {}

export const CredentialsFromEnv = Layer.effect(
  Credentials,
  Effect.gen(function* () {
    const apiKey = process.env.FLY_IO_API_KEY;

    if (!apiKey) {
      return yield* new ConfigError({
        message: "FLY_IO_API_KEY environment variable is required",
      });
    }

    return { apiKey: Redacted.make(apiKey), apiBaseUrl: DEFAULT_API_BASE_URL };
  }),
);
