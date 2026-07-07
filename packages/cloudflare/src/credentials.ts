/**
 * Cloudflare credentials — hand-written.
 *
 * The protocol layer reads these to set the base URL and the
 * `Authorization: Bearer <token>` header on every request.
 */
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";

export const DEFAULT_BASE_URL = "https://api.cloudflare.com/client/v4";

export interface CloudflareConfig {
  /** API token (used as `Authorization: Bearer <token>`). */
  readonly apiToken: string;
  /** Override the API base URL. Defaults to {@link DEFAULT_BASE_URL}. */
  readonly baseUrl: string;
}

export class CloudflareCredentials extends Context.Service<
  CloudflareCredentials,
  CloudflareConfig
>()("CloudflareCredentials") {}

/** Build a credentials layer from an explicit token. */
export const credentials = (config: {
  readonly apiToken: string;
  readonly baseUrl?: string;
}): Layer.Layer<CloudflareCredentials> =>
  Layer.succeed(CloudflareCredentials, {
    apiToken: config.apiToken,
    baseUrl: config.baseUrl ?? DEFAULT_BASE_URL,
  });

/** Build a credentials layer from `CLOUDFLARE_API_TOKEN` / `CLOUDFLARE_BASE_URL`. */
export const CredentialsFromEnv: Layer.Layer<CloudflareCredentials> =
  Layer.effect(
    CloudflareCredentials,
    Effect.sync(() => ({
      apiToken: process.env.CLOUDFLARE_API_TOKEN ?? "",
      baseUrl: process.env.CLOUDFLARE_BASE_URL ?? DEFAULT_BASE_URL,
    })),
  );
