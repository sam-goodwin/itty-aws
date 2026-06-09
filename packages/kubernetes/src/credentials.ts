import { ConfigError } from "@distilled.cloud/core/errors";
import * as EffectConfig from "effect/Config";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";

export interface Config {
  /**
   * Bearer token for authenticating to the Kubernetes API server.
   * This can be a service account token, an OIDC token, an EKS
   * presigned STS token, or any token accepted by the cluster's
   * authentication layer.
   */
  readonly token: Redacted.Redacted<string>;

  /**
   * Base URL of the Kubernetes API server.
   *
   * There is no default — the URL must always be provided explicitly
   * because it varies per cluster (e.g. EKS endpoint, GKE endpoint,
   * `https://localhost:6443`, etc.).
   */
  readonly apiBaseUrl: string;
}

export class Credentials extends Context.Service<
  Credentials,
  Effect.Effect<Config>
>()("KubernetesCredentials") {}

const envConfig = EffectConfig.all({
  token: EffectConfig.string("KUBERNETES_TOKEN"),
  apiBaseUrl: EffectConfig.string("KUBERNETES_API_URL"),
});

/**
 * Build a credentials layer from environment variables.
 *
 * | Variable | Required | Description |
 * |---|---|---|
 * | `KUBERNETES_TOKEN` | yes | Bearer token for authentication |
 * | `KUBERNETES_API_URL` | yes | API server URL (e.g. from `kubectl cluster-info`) |
 */
export const CredentialsFromEnv = Layer.succeed(
  Credentials,
  envConfig.pipe(
    Effect.mapError(
      () =>
        new ConfigError({
          message:
            "KUBERNETES_TOKEN and KUBERNETES_API_URL environment variables are required. " +
            "Set KUBERNETES_TOKEN to a bearer token for your Kubernetes cluster, " +
            "and KUBERNETES_API_URL to the API server URL (e.g. from `kubectl cluster-info` " +
            "or the EKS cluster endpoint).",
        }),
    ),
    Effect.map(({ token, apiBaseUrl }) => ({
      token: Redacted.make(token),
      apiBaseUrl,
    })),
    Effect.orDie,
  ),
);
