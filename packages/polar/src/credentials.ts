import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";
import { ConfigError } from "@distilled.cloud/core/errors";

export const DEFAULT_API_BASE_URL = "https://api.polar.sh";
export const SANDBOX_API_BASE_URL = "https://sandbox-api.polar.sh";
export type PolarServer = "production" | "sandbox";

export interface Config {
  readonly accessToken: Redacted.Redacted<string>;
  readonly apiBaseUrl: string;
  readonly server: PolarServer;
}

export class Credentials extends Context.Service<Credentials, Config>()(
  "PolarCredentials",
) {}

export const CredentialsFromEnv = Layer.effect(
  Credentials,
  Effect.gen(function* () {
    const accessToken = process.env.POLAR_ACCESS_TOKEN;

    if (!accessToken) {
      return yield* new ConfigError({
        message: "POLAR_ACCESS_TOKEN environment variable is required",
      });
    }

    const server = yield* parseServer(process.env.POLAR_SERVER);

    return {
      accessToken: Redacted.make(accessToken),
      apiBaseUrl:
        server === "sandbox" ? SANDBOX_API_BASE_URL : DEFAULT_API_BASE_URL,
      server,
    };
  }),
);

const parseServer = (
  value: string | undefined,
): Effect.Effect<PolarServer, ConfigError> => {
  if (value == null || value === "" || value === "production") {
    return Effect.succeed("production");
  }
  if (value === "sandbox") {
    return Effect.succeed("sandbox");
  }
  return Effect.fail(
    new ConfigError({
      message: 'POLAR_SERVER must be "production" or "sandbox" when provided',
    }),
  );
};
