import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";
import * as Context from "effect/Context";
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

export const CredentialsFromEnv = Layer.effect(
  Credentials,
  Effect.gen(function* () {
    const apiKey = process.env.TYPESENSE_API_KEY;
    const apiBaseUrl = process.env.TYPESENSE_API_URL ?? DEFAULT_API_BASE_URL;

    if (!apiKey) {
      return yield* new ConfigError({
        message: "TYPESENSE_API_KEY environment variable is required",
      });
    }

    if (!apiBaseUrl) {
      return yield* new ConfigError({
        message: "TYPESENSE_API_URL environment variable is required",
      });
    }

    return { apiKey: Redacted.make(apiKey), apiBaseUrl };
  }),
);
