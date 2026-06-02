import { ConfigError } from "@distilled.cloud/core/errors";
import * as EffectConfig from "effect/Config";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";

export const DEFAULT_API_BASE_URL = "https://api.prisma.io";

export interface Config {
  readonly apiToken: Redacted.Redacted<string>;
  readonly apiBaseUrl: string;
}

export class Credentials extends Context.Service<Credentials, Config>()(
  "PrismaPostgresCredentials",
) {}

const envConfig = EffectConfig.all({
  apiToken: EffectConfig.string("PRISMA_POSTGRES_API_TOKEN"),
});

export const CredentialsFromEnv = Layer.effect(
  Credentials,
  envConfig.pipe(
    Effect.mapError(
      () =>
        new ConfigError({
          message: "PRISMA_POSTGRES_API_TOKEN environment variable is required",
        }),
    ),
    Effect.map(({ apiToken }) => ({
      apiToken: Redacted.make(apiToken),
      apiBaseUrl: DEFAULT_API_BASE_URL,
    })),
  ),
);
