import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import { ConfigError } from "@distilled.cloud/core/errors";

export const DEFAULT_API_BASE_URL = "https://api.modrinth.com/v2";

/**
 * A `User-Agent` header is required by the Modrinth API. Modrinth recommends
 * `<github_username>/<project_name>/<version> (<contact>)`. We default to a
 * generic identifier but strongly recommend users override this via env.
 *
 * See https://docs.modrinth.com/api/ ("User Agents").
 */
export const DEFAULT_USER_AGENT = "distilled.cloud/modrinth-sdk";

export interface Config {
  /**
   * Modrinth personal access token (PAT) or OAuth2 access token.
   *
   * Sent verbatim in the `Authorization` header (no `Bearer ` prefix). PATs are
   * generated at https://modrinth.com/settings/account.
   *
   * Optional: many read endpoints (browsing public projects/versions) work
   * without a token. Provide one for any operation that creates or modifies
   * data, or that touches private resources.
   */
  readonly apiKey?: string;
  readonly apiBaseUrl: string;
  /**
   * Value sent in the `User-Agent` header. Modrinth requires a
   * uniquely-identifying user agent and may block traffic that only identifies
   * the underlying HTTP client.
   */
  readonly userAgent: string;
}

export class Credentials extends Context.Service<Credentials, Config>()(
  "ModrinthCredentials",
) {}

export const CredentialsFromEnv = Layer.effect(
  Credentials,
  Effect.gen(function* () {
    const apiKey = process.env.MODRINTH_API_KEY;
    const apiBaseUrl =
      process.env.MODRINTH_API_BASE_URL ?? DEFAULT_API_BASE_URL;
    const userAgent = process.env.MODRINTH_USER_AGENT ?? DEFAULT_USER_AGENT;

    if (!userAgent) {
      return yield* new ConfigError({
        message: "MODRINTH_USER_AGENT environment variable is required",
      });
    }

    return { apiKey, apiBaseUrl, userAgent };
  }),
);
