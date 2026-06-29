/**
 * Clerk has two distinct APIs that share a base URL but use different
 * credentials:
 *   - Platform API: workspace-scoped operations, authenticated with a
 *     "Platform API access token" (env var: CLERK_PLATFORM_API_TOKEN).
 *   - Backend API: per-instance operations, authenticated with an instance
 *     secret key like `sk_test_...` / `sk_live_...`
 *     (env var: CLERK_SECRET_KEY).
 *
 * Each API has its own Credentials service so consumers only need to provide
 * the token relevant to the operations they actually call.
 */
import { ConfigError } from "@distilled.cloud/core/errors";
import * as EffectConfig from "effect/Config";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";

export const DEFAULT_API_BASE_URL = "https://api.clerk.com/v1";

// --- Platform API ----------------------------------------------------------

export interface PlatformConfig {
  readonly accessToken: Redacted.Redacted<string>;
  readonly apiBaseUrl: string;
}

export class PlatformCredentials extends Context.Service<
  PlatformCredentials,
  PlatformConfig
>()("ClerkPlatformCredentials") {}

const platformEnvConfig = EffectConfig.all({
  accessToken: EffectConfig.string("CLERK_PLATFORM_API_TOKEN"),
});

export const PlatformCredentialsFromEnv = Layer.effect(
  PlatformCredentials,
  platformEnvConfig.pipe(
    Effect.mapError(
      () =>
        new ConfigError({
          message: "CLERK_PLATFORM_API_TOKEN environment variable is required",
        }),
    ),
    Effect.map(({ accessToken }) => ({
      accessToken: Redacted.make(accessToken),
      apiBaseUrl: DEFAULT_API_BASE_URL,
    })),
  ),
);

// --- Backend API -----------------------------------------------------------

export interface BackendConfig {
  readonly secretKey: Redacted.Redacted<string>;
  readonly apiBaseUrl: string;
}

export class BackendCredentials extends Context.Service<
  BackendCredentials,
  BackendConfig
>()("ClerkBackendCredentials") {}

const backendEnvConfig = EffectConfig.all({
  secretKey: EffectConfig.string("CLERK_SECRET_KEY"),
});

export const BackendCredentialsFromEnv = Layer.effect(
  BackendCredentials,
  backendEnvConfig.pipe(
    Effect.mapError(
      () =>
        new ConfigError({
          message: "CLERK_SECRET_KEY environment variable is required",
        }),
    ),
    Effect.map(({ secretKey }) => ({
      secretKey: Redacted.make(secretKey),
      apiBaseUrl: DEFAULT_API_BASE_URL,
    })),
  ),
);

// --- Convenience layer that provides both -----------------------------------

export const CredentialsFromEnv = Layer.merge(
  PlatformCredentialsFromEnv,
  BackendCredentialsFromEnv,
);
