/**
 * Datadog credentials — hand-written.
 *
 * The `Credentials` service holds an *effect* that resolves the current
 * credentials on every request (the protocol layer resolves it per request
 * on the calling fiber).
 *
 * Datadog authenticates with two header-borne keys: the org-wide API key
 * (`DD-API-KEY`) and a per-user/service application key
 * (`DD-APPLICATION-KEY`). Reads and management endpoints (monitors, SLOs,
 * dashboards, …) require both; a handful of intake endpoints accept the API
 * key alone, so `appKey` is optional here and the header is only sent when
 * set.
 */
import * as EffectConfig from "effect/Config";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import * as Redacted from "effect/Redacted";
import { ConfigError } from "@distilled.cloud/core/errors";

/** Default base URL for Datadog US1. */
export const DEFAULT_API_BASE_URL = "https://api.datadoghq.com";

/** Datadog US1. Other sites: `us3.datadoghq.com`, `us5.datadoghq.com`, `datadoghq.eu`, `ap1.datadoghq.com`, `ddog-gov.com`, … */
export const DEFAULT_SITE = "datadoghq.com";

/**
 * Resolve a Datadog "site" (e.g. `us5.datadoghq.com`) into the API base URL
 * (`https://api.us5.datadoghq.com`). A value that is already a URL is used
 * verbatim, so a full endpoint override (proxies, testing) also works.
 */
export const siteToApiBaseUrl = (site: string): string =>
  site.startsWith("http://") || site.startsWith("https://")
    ? site.replace(/\/+$/, "")
    : `https://api.${site}`;

export interface Config {
  /** The Datadog API key, sent as the `DD-API-KEY` header. */
  readonly apiKey: Redacted.Redacted<string>;
  /**
   * The Datadog application key, sent as the `DD-APPLICATION-KEY` header
   * when set. Required by management endpoints (monitors, SLOs, …); the
   * key's scopes (e.g. `monitors_write`, `slos_write`) bound what it can do.
   */
  readonly appKey?: Redacted.Redacted<string>;
  /** API base URL, e.g. `https://api.datadoghq.com`. */
  readonly apiBaseUrl: string;
}

export class Credentials extends Context.Service<
  Credentials,
  Effect.Effect<Config>
>()("DatadogCredentials") {}

const redact = (
  value: string | Redacted.Redacted<string>,
): Redacted.Redacted<string> =>
  Redacted.isRedacted(value) ? value : Redacted.make(value);

/** Layer from plain keys + optional site / base URL override. */
export const fromKeys = (config: {
  readonly apiKey: string | Redacted.Redacted<string>;
  readonly appKey?: string | Redacted.Redacted<string>;
  /** A site (`us5.datadoghq.com`) or a full base URL (`https://…`). */
  readonly site?: string;
}): Layer.Layer<Credentials> =>
  Layer.succeed(
    Credentials,
    Effect.succeed({
      apiKey: redact(config.apiKey),
      appKey: config.appKey !== undefined ? redact(config.appKey) : undefined,
      apiBaseUrl: siteToApiBaseUrl(config.site ?? DEFAULT_SITE),
    }),
  );

const envConfig = EffectConfig.all({
  apiKey: EffectConfig.option(EffectConfig.redacted("DD_API_KEY")),
  apiKeyAlias: EffectConfig.option(EffectConfig.redacted("DATADOG_API_KEY")),
  appKey: EffectConfig.option(EffectConfig.redacted("DD_APP_KEY")),
  appKeyAlias: EffectConfig.option(EffectConfig.redacted("DATADOG_APP_KEY")),
  site: EffectConfig.option(EffectConfig.string("DD_SITE")),
  siteAlias: EffectConfig.option(EffectConfig.string("DATADOG_SITE")),
});

/**
 * Build {@link Credentials} from environment variables.
 *
 * - `DD_API_KEY` or `DATADOG_API_KEY` (required) — the org API key.
 * - `DD_APP_KEY` or `DATADOG_APP_KEY` (optional) — the application key,
 *   required by management endpoints.
 * - `DD_SITE` or `DATADOG_SITE` (optional) — the regional site
 *   (`us5.datadoghq.com`, `datadoghq.eu`, …) or a full base URL. Defaults
 *   to `datadoghq.com` (US1).
 */
export const CredentialsFromEnv: Layer.Layer<Credentials> = Layer.succeed(
  Credentials,
  Effect.gen(function* () {
    const config = yield* envConfig.pipe(
      Effect.mapError(
        () =>
          new ConfigError({
            message:
              "DD_API_KEY (or DATADOG_API_KEY) environment variable is required",
          }),
      ),
    );
    const apiKey =
      Option.getOrUndefined(config.apiKey) ??
      Option.getOrUndefined(config.apiKeyAlias);
    if (!apiKey) {
      return yield* new ConfigError({
        message:
          "DD_API_KEY (or DATADOG_API_KEY) environment variable is required",
      });
    }
    const site =
      Option.getOrUndefined(config.site) ??
      Option.getOrUndefined(config.siteAlias) ??
      DEFAULT_SITE;
    return {
      apiKey,
      appKey:
        Option.getOrUndefined(config.appKey) ??
        Option.getOrUndefined(config.appKeyAlias),
      apiBaseUrl: siteToApiBaseUrl(site),
    };
  }).pipe(Effect.orDie),
);
