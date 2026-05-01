/**
 * EAS (Expo Application Services) credentials.
 *
 * The EAS backend is a single GraphQL endpoint. Authentication is via a
 * Personal/Organization Access Token issued from
 * https://expo.dev/settings/access-tokens, sent as `Authorization: Bearer <token>`.
 */
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Context from "effect/Context";
import * as Redacted from "effect/Redacted";
import { ConfigError } from "@distilled.cloud/core/errors";

/** Default EAS GraphQL host. The endpoint path (`/graphql`) is set per operation. */
export const DEFAULT_API_BASE_URL = "https://api.expo.dev";

export interface Config {
  readonly accessToken: Redacted.Redacted<string>;
  readonly apiBaseUrl: string;
}

export class Credentials extends Context.Service<Credentials, Config>()(
  "EasCredentials",
) {}

/**
 * Build credentials from environment variables.
 *
 * - `EXPO_TOKEN` — Personal/Organization access token from
 *   https://expo.dev/settings/access-tokens (required)
 * - `EXPO_API_URL` — override the API host (optional, defaults to
 *   https://api.expo.dev). Set to `https://staging-api.expo.dev` to target
 *   staging, mirroring eas-cli's `EXPO_STAGING=1` flag.
 */
export const CredentialsFromEnv = Layer.effect(
  Credentials,
  Effect.gen(function* () {
    const accessToken = process.env.EXPO_TOKEN;

    if (!accessToken) {
      return yield* new ConfigError({
        message: "EXPO_TOKEN environment variable is required",
      });
    }

    const apiBaseUrl = process.env.EXPO_API_URL ?? DEFAULT_API_BASE_URL;

    return { accessToken: Redacted.make(accessToken), apiBaseUrl };
  }),
);
