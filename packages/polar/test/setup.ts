import * as Effect from "effect/Effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { CredentialsFromEnv } from "../src/credentials.ts";

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
