import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";
import { i as ConfigError } from "./_chunks/errors-DKUnwzoV.js";

//#region ../resend/lib/credentials.js
const DEFAULT_API_BASE_URL = "https://api.resend.com";
var Credentials = class extends Context.Service()("ResendCredentials") {};
const fromApiKey = (config) =>
  Layer.succeed(
    Credentials,
    Effect.succeed({
      apiKey: config.apiKey,
      apiBaseUrl: config.apiBaseUrl ?? "https://api.resend.com",
    }),
  );
const CredentialsFromEnv = Layer.succeed(
  Credentials,
  Effect.gen(function* () {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey)
      return yield* new ConfigError({ message: "RESEND_API_KEY environment variable is required" });
    return {
      apiKey: Redacted.make(apiKey),
      apiBaseUrl: process.env.RESEND_API_BASE_URL ?? "https://api.resend.com",
    };
  }).pipe(Effect.orDie),
);

//#endregion
export { Credentials, CredentialsFromEnv, DEFAULT_API_BASE_URL, fromApiKey };
