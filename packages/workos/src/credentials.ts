import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";
import * as Context from "effect/Context";
import { ConfigError } from "@distilled.cloud/core/errors";

/**
 * WorkOS production API base URL.
 *
 * The staging environment is reachable at https://api.workos-test.com — set
 * the `WORKOS_API_URL` environment variable to override the default.
 */
export const DEFAULT_API_BASE_URL = "https://api.workos.com";

export interface Config {
  readonly apiKey: Redacted.Redacted<string>;
  readonly apiBaseUrl: string;
}

export class Credentials extends Context.Service<Credentials, Config>()(
  "WorkosCredentials",
) {}

export const CredentialsFromEnv = Layer.effect(
  Credentials,
  Effect.gen(function* () {
    const apiKey = process.env.WORKOS_API_KEY;
    const apiBaseUrl = process.env.WORKOS_API_URL ?? DEFAULT_API_BASE_URL;

    if (!apiKey) {
      return yield* new ConfigError({
        message: "WORKOS_API_KEY environment variable is required",
      });
    }

    return { apiKey: Redacted.make(apiKey), apiBaseUrl };
  }),
);
