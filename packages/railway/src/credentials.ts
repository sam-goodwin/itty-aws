/**
 * Railway credentials.
 *
 * The Railway public API is a single GraphQL endpoint at
 * `https://backboard.railway.com/graphql/v2`. Authentication is via a personal
 * or team API token issued from https://railway.com/account/tokens, sent as
 * `Authorization: Bearer <token>`.
 */
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";
import * as Context from "effect/Context";
import { ConfigError } from "@distilled.cloud/core/errors";

/** Default Railway backboard host. The endpoint path (`/graphql/v2`) is set per operation. */
export const DEFAULT_API_BASE_URL = "https://backboard.railway.com";

export interface Config {
  readonly apiToken: Redacted.Redacted<string>;
  readonly apiBaseUrl: string;
}

export class Credentials extends Context.Service<Credentials, Config>()(
  "RailwayCredentials",
) {}

/**
 * Build credentials from environment variables.
 *
 * - `RAILWAY_API_TOKEN` — personal/team API token from
 *   https://railway.com/account/tokens (required). Falls back to `RAILWAY_TOKEN`.
 * - `RAILWAY_API_URL` — override the API host (optional, defaults to
 *   https://backboard.railway.com).
 */
export const CredentialsFromEnv = Layer.effect(
  Credentials,
  Effect.gen(function* () {
    const apiToken = process.env.RAILWAY_API_TOKEN ?? process.env.RAILWAY_TOKEN;

    if (!apiToken) {
      return yield* new ConfigError({
        message: "RAILWAY_API_TOKEN environment variable is required",
      });
    }

    const apiBaseUrl = process.env.RAILWAY_API_URL ?? DEFAULT_API_BASE_URL;

    return { apiToken: Redacted.make(apiToken), apiBaseUrl };
  }),
);
