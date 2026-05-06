import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import {
  Credentials,
  CredentialsFromEnv,
  SANDBOX_API_BASE_URL,
} from "../src/credentials.ts";

export const testRunId =
  process.env.DISTILLED_TEST_RUN_ID ??
  `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

export const organizationId = process.env.POLAR_ORGANIZATION_ID;

export const hasLivePolarCredentials =
  Boolean(process.env.POLAR_ACCESS_TOKEN) &&
  process.env.POLAR_SERVER === "sandbox";

export const runEffect = <A, E, R>(
  effect: Effect.Effect<A, E, R>,
): Promise<A> =>
  Effect.runPromise(
    effect.pipe(
      Effect.provide(CredentialsFromEnv),
      Effect.provide(FetchHttpClient.layer),
    ) as Effect.Effect<A, E, never>,
  );

export const runEffectWithAccessToken = <A, E, R>(
  accessToken: string,
  effect: Effect.Effect<A, E, R>,
): Promise<A> =>
  Effect.runPromise(
    effect.pipe(
      Effect.provide(
        Layer.succeed(Credentials, {
          accessToken: Redacted.make(accessToken),
          apiBaseUrl: SANDBOX_API_BASE_URL,
          server: "sandbox",
        }),
      ),
      Effect.provide(FetchHttpClient.layer),
    ) as Effect.Effect<A, E, never>,
  );
