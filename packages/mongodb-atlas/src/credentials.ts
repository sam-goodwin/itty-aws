import { ConfigError } from "@distilled.cloud/core/errors";
import * as EffectConfig from "effect/Config";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";

export const DEFAULT_API_BASE_URL = "https://cloud.mongodb.com";

export interface Config {
  readonly accessToken: Redacted.Redacted<string>;
  readonly apiBaseUrl: string;
}

export class Credentials extends Context.Service<Credentials, Config>()(
  "Mongodb-atlasCredentials",
) {}

const envConfig = EffectConfig.all({
  clientId: EffectConfig.string("MONGODB_ATLAS_CLIENT_ID"),
  clientSecret: EffectConfig.string("MONGODB_ATLAS_CLIENT_SECRET"),
  apiBaseUrl: EffectConfig.string("MONGODB_ATLAS_API_BASE_URL").pipe(
    EffectConfig.withDefault(DEFAULT_API_BASE_URL),
  ),
});

export const CredentialsFromEnv = Layer.effect(
  Credentials,
  Effect.gen(function* () {
    const { clientId, clientSecret, apiBaseUrl } = yield* envConfig.pipe(
      Effect.mapError(
        () =>
          new ConfigError({
            message:
              "MONGODB_ATLAS_CLIENT_ID and MONGODB_ATLAS_CLIENT_SECRET environment variables are required",
          }),
      ),
    );

    // Exchange service account credentials for OAuth2 access token
    const res = yield* Effect.tryPromise(() =>
      fetch(`${apiBaseUrl}/api/oauth/token`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
        },
        body: "grant_type=client_credentials",
      }),
    );

    if (!res.ok) {
      const text = yield* Effect.tryPromise(() => res.text());
      return yield* new ConfigError({
        message: `OAuth2 token exchange failed: ${res.status} ${text}`,
      });
    }

    const data = (yield* Effect.tryPromise(() => res.json())) as {
      access_token: string;
      expires_in: number;
    };

    return {
      accessToken: Redacted.make(data.access_token),
      apiBaseUrl,
    };
  }),
);
