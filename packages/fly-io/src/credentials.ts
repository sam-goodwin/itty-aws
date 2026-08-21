/**
 * Fly.io credentials — hand-written.
 *
 * The `Credentials` service holds an *effect* that resolves the current
 * credentials on every request. The protocol layer resolves it per request
 * and formats the `Authorization: Bearer <apiKey>` header.
 *
 * Alchemy and `flyctl` read `FLY_API_TOKEN`. `FLY_IO_API_KEY` is kept as a
 * fallback for older distilled consumers. Optional `FLY_API_HOSTNAME`
 * overrides the Machines API root (default `https://api.machines.dev/v1`).
 *
 * Managed REST (MPG) and GraphQL add-ons (Tigris, Redis) reuse this token
 * against `https://api.fly.io`. Sprites use a separate
 * {@link SpritesCredentials} service reading `SPRITES_TOKEN` only.
 */
import { ConfigError } from "@distilled.cloud/core/errors";
import * as EffectConfig from "effect/Config";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";

export const DEFAULT_API_BASE_URL = "https://api.machines.dev/v1";

/** UI-EX REST + GraphQL host (MPG, Tigris, Redis). Not overridable via an invented env var. */
export const DEFAULT_FLY_API_BASE_URL = "https://api.fly.io";

/** Sprites REST root. Auth is `SPRITES_TOKEN` — never `FLY_API_TOKEN`. */
export const DEFAULT_SPRITES_API_BASE_URL = "https://api.sprites.dev/v1";

/**
 * Normalize a Fly API hostname into the Machines API root.
 *
 * - unset / empty → `https://api.machines.dev/v1`
 * - already ends with `/v1` → used as-is (trailing slashes stripped)
 * - otherwise `/v1` is appended
 */
export const normalizeApiBaseUrl = (hostname?: string): string => {
  if (hostname === undefined) return DEFAULT_API_BASE_URL;
  const trimmed = hostname.trim().replace(/\/+$/, "");
  if (trimmed.length === 0) return DEFAULT_API_BASE_URL;
  return trimmed.endsWith("/v1") ? trimmed : `${trimmed}/v1`;
};

export interface Config {
  readonly apiKey: Redacted.Redacted<string>;
  readonly apiBaseUrl: string;
}

export class Credentials extends Context.Service<
  Credentials,
  Effect.Effect<Config>
>()("Fly-ioCredentials") {}

const envConfig = EffectConfig.all({
  apiKey: EffectConfig.string("FLY_API_TOKEN").pipe(
    EffectConfig.orElse(() => EffectConfig.string("FLY_IO_API_KEY")),
  ),
  apiBaseUrl: EffectConfig.string("FLY_API_HOSTNAME").pipe(
    EffectConfig.withDefault(""),
  ),
});

export const CredentialsFromEnv = Layer.succeed(
  Credentials,
  envConfig.pipe(
    Effect.mapError(
      () =>
        new ConfigError({
          message:
            "FLY_API_TOKEN (or FLY_IO_API_KEY) environment variable is required",
        }),
    ),
    Effect.map(({ apiKey, apiBaseUrl }) => ({
      apiKey: Redacted.make(apiKey),
      apiBaseUrl: normalizeApiBaseUrl(apiBaseUrl || undefined),
    })),
    Effect.orDie,
  ),
);

/** Convenience layer from a plain API token + optional base URL. */
export const credentials = (config: {
  readonly apiKey: string;
  readonly apiBaseUrl?: string;
}): Layer.Layer<Credentials> =>
  Layer.succeed(
    Credentials,
    Effect.succeed({
      apiKey: Redacted.make(config.apiKey),
      apiBaseUrl: normalizeApiBaseUrl(config.apiBaseUrl),
    }),
  );

// =============================================================================
// Sprites — SPRITES_TOKEN against api.sprites.dev
// =============================================================================

export interface SpritesConfig {
  readonly apiKey: Redacted.Redacted<string>;
  readonly apiBaseUrl: string;
}

/**
 * Sprites credentials. Reads `SPRITES_TOKEN` only (`SPRITE_TOKEN` is
 * CLI-legacy and is not accepted).
 */
export class SpritesCredentials extends Context.Service<
  SpritesCredentials,
  Effect.Effect<SpritesConfig>
>()("Fly-ioSpritesCredentials") {}

const spritesEnvConfig = EffectConfig.all({
  apiKey: EffectConfig.string("SPRITES_TOKEN"),
});

export const SpritesCredentialsFromEnv = Layer.succeed(
  SpritesCredentials,
  spritesEnvConfig.pipe(
    Effect.mapError(
      () =>
        new ConfigError({
          message: "SPRITES_TOKEN environment variable is required",
        }),
    ),
    Effect.map(({ apiKey }) => ({
      apiKey: Redacted.make(apiKey),
      apiBaseUrl: DEFAULT_SPRITES_API_BASE_URL,
    })),
    Effect.orDie,
  ),
);

/** Convenience layer from a plain Sprites token. */
export const spritesCredentials = (config: {
  readonly apiKey: string;
  readonly apiBaseUrl?: string;
}): Layer.Layer<SpritesCredentials> =>
  Layer.succeed(
    SpritesCredentials,
    Effect.succeed({
      apiKey: Redacted.make(config.apiKey),
      apiBaseUrl: config.apiBaseUrl ?? DEFAULT_SPRITES_API_BASE_URL,
    }),
  );
