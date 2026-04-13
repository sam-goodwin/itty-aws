import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";
import * as ServiceMap from "effect/ServiceMap";
import { ConfigError } from "@distilled.cloud/core/errors";

export const DEFAULT_API_BASE_URL = "https://api.planetscale.com/v1";

export interface Config {
  readonly tokenId: string;
  readonly token: Redacted.Redacted<string>;
  readonly organization: string;
  readonly apiBaseUrl: string;
}

export class Credentials extends ServiceMap.Service<Credentials, Config>()(
  "PlanetScaleCredentials",
) {}

export const CredentialsFromEnv = Layer.effect(
  Credentials,
  Effect.gen(function* () {
    const tokenId = process.env.PLANETSCALE_API_TOKEN_ID;
    const token = process.env.PLANETSCALE_API_TOKEN;
    const organization = process.env.PLANETSCALE_ORGANIZATION;

    if (!tokenId) {
      return yield* new ConfigError({
        message: "PLANETSCALE_API_TOKEN_ID environment variable is required",
      });
    }

    if (!token) {
      return yield* new ConfigError({
        message: "PLANETSCALE_API_TOKEN environment variable is required",
      });
    }

    if (!organization) {
      return yield* new ConfigError({
        message: "PLANETSCALE_ORGANIZATION environment variable is required",
      });
    }

    return {
      tokenId,
      token: Redacted.make(token),
      organization,
      apiBaseUrl: DEFAULT_API_BASE_URL,
    };
  }),
);
