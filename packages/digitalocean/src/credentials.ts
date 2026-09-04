/**
 * DigitalOcean credentials — hand-written.
 *
 * The `Credentials` service holds an *effect* that resolves the current
 * credentials on every request. The protocol layer resolves it per request
 * and formats the `Authorization: Bearer <apiToken>` header.
 */
import { ConfigError } from "@distilled.cloud/core/errors";
import * as EffectConfig from "effect/Config";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";

export const DEFAULT_API_BASE_URL = "https://api.digitalocean.com";

export interface Config {
  readonly apiToken: Redacted.Redacted<string>;
  readonly apiBaseUrl: string;
}

export class Credentials extends Context.Service<
  Credentials,
  Effect.Effect<Config>
>()("DigitalOceanCredentials") {}

// doctl reads DIGITALOCEAN_ACCESS_TOKEN; the terraform provider reads
// DIGITALOCEAN_TOKEN. Accept both, preferring DIGITALOCEAN_TOKEN.
const envConfig = EffectConfig.string("DIGITALOCEAN_TOKEN").pipe(
  EffectConfig.orElse(() => EffectConfig.string("DIGITALOCEAN_ACCESS_TOKEN")),
);

export const CredentialsFromEnv = Layer.succeed(
  Credentials,
  envConfig.pipe(
    Effect.mapError(
      () =>
        new ConfigError({
          message:
            "DIGITALOCEAN_TOKEN (or DIGITALOCEAN_ACCESS_TOKEN) environment variable is required",
        }),
    ),
    Effect.map((apiToken) => ({
      apiToken: Redacted.make(apiToken),
      apiBaseUrl: DEFAULT_API_BASE_URL,
    })),
    Effect.orDie,
  ),
);
