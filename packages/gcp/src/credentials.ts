import { ConfigError } from "@distilled.cloud/core/errors";
import * as EffectConfig from "effect/Config";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import * as Redacted from "effect/Redacted";

export interface Config {
  readonly accessToken: Redacted.Redacted<string>;
  readonly project?: string;
}

export class Credentials extends Context.Service<
  Credentials,
  Effect.Effect<Config>
>()("GCPCredentials") {}

const envConfig = EffectConfig.all({
  accessToken: EffectConfig.string("GOOGLE_ACCESS_TOKEN"),
  project: EffectConfig.option(EffectConfig.string("GOOGLE_PROJECT_ID")),
});

export const CredentialsFromEnv = Layer.succeed(
  Credentials,
  envConfig.pipe(
    Effect.mapError(
      () =>
        new ConfigError({
          message: "GOOGLE_ACCESS_TOKEN environment variable is required",
        }),
    ),
    Effect.map(({ accessToken, project }) => ({
      accessToken: Redacted.make(accessToken),
      project: Option.getOrUndefined(project),
    })),
    Effect.orDie,
  ),
);
