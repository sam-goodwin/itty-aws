import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Context from "effect/Context";
import { ConfigError } from "@distilled.cloud/core/errors";

/**
 * Default PostHog API host (US Cloud).
 *
 * Override per-region by setting `POSTHOG_HOST` (e.g. `https://eu.posthog.com`
 * for EU Cloud, or your self-hosted instance URL). Operation paths in the spec
 * already include the `/api/...` prefix, so the host should NOT include it.
 */
export const DEFAULT_API_BASE_URL = "https://us.posthog.com";

export interface Config {
  /** PostHog Personal API key (sent as `Authorization: Bearer <key>`). */
  readonly apiKey: string;
  /** Base host URL, e.g. `https://us.posthog.com`. */
  readonly apiBaseUrl: string;
}

export class Credentials extends Context.Service<Credentials, Config>()(
  "PosthogCredentials",
) {}

export const CredentialsFromEnv = Layer.effect(
  Credentials,
  Effect.gen(function* () {
    const apiKey = process.env.POSTHOG_API_KEY;

    if (!apiKey) {
      return yield* new ConfigError({
        message: "POSTHOG_API_KEY environment variable is required",
      });
    }

    const apiBaseUrl = process.env.POSTHOG_HOST ?? DEFAULT_API_BASE_URL;

    return { apiKey, apiBaseUrl };
  }),
);
