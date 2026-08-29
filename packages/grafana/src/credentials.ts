/**
 * Grafana credentials — hand-written.
 *
 * This package targets self-hosted Grafana OSS and Enterprise.  A Grafana
 * Cloud stack URL, stack namespace, or Cloud OAuth flow is intentionally not
 * part of this configuration.  The API endpoint is always supplied as the
 * base URL of the Grafana instance; generated operations add their `/apis`
 * paths.
 */
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";
import { ConfigError } from "@distilled.cloud/core/errors";

/** The self-hosted Grafana API authentication methods supported here. */
export type Auth =
  | {
      readonly _tag: "Bearer";
      readonly token: Redacted.Redacted<string>;
    }
  | {
      readonly _tag: "Basic";
      readonly username: string;
      readonly password: Redacted.Redacted<string>;
    };

/** Resolved credentials consumed by the protocol on every request. */
export interface Config {
  /** Base URL of the self-hosted Grafana instance, without a trailing slash. */
  readonly apiBaseUrl: string;
  /** Bearer service-account token or on-premises Basic Auth credentials. */
  readonly auth: Auth;
  /** Namespace used by the structured `/apis` endpoints. */
  readonly namespace: string;
  /** Organization ID, when the caller selected one explicitly. */
  readonly organizationId?: number;
}

export class Credentials extends Context.Service<
  Credentials,
  Effect.Effect<Config, ConfigError>
>()("GrafanaCredentials") {}

/** Organization 1 is exposed by Grafana's new API as the `default` namespace. */
export const namespaceForOrganization = (organizationId: number): string =>
  organizationId === 1 ? "default" : `org-${organizationId}`;

const normalizeBaseUrl = (apiBaseUrl: string): string => {
  const value = apiBaseUrl.trim();
  const parsed = new URL(value);
  if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
    throw new Error("Grafana API URL must use http:// or https://");
  }
  if (parsed.search || parsed.hash) {
    throw new Error("Grafana API URL must not contain a query or fragment");
  }
  const hostname = parsed.hostname.toLowerCase();
  if (hostname === "grafana.net" || hostname.endsWith(".grafana.net")) {
    throw new Error(
      "Grafana Cloud stack URLs are not supported; use a self-hosted Grafana URL",
    );
  }
  return value.replace(/\/+$/, "");
};

const validateNamespace = (namespace: string): string => {
  const value = namespace.trim();
  if (value.length === 0 || value.startsWith("stacks-")) {
    throw new Error(
      "Grafana namespace must be a self-hosted namespace such as default or org-2",
    );
  }
  return value;
};

const makeConfig = (config: {
  readonly apiBaseUrl: string;
  readonly auth: Auth;
  readonly namespace?: string;
  readonly organizationId?: number;
}): Config => {
  if (
    config.organizationId !== undefined &&
    (!Number.isInteger(config.organizationId) || config.organizationId < 1)
  ) {
    throw new Error("Grafana organizationId must be a positive integer");
  }
  return {
    apiBaseUrl: normalizeBaseUrl(config.apiBaseUrl),
    auth: config.auth,
    namespace: validateNamespace(
      config.namespace ?? namespaceForOrganization(config.organizationId ?? 1),
    ),
    organizationId: config.organizationId,
  };
};

/** Configuration accepted by {@link credentials}. */
export type CredentialsConfig =
  | {
      readonly apiBaseUrl: string;
      readonly token: string;
      readonly namespace?: string;
      readonly organizationId?: number;
    }
  | {
      readonly apiBaseUrl: string;
      readonly username: string;
      readonly password: string;
      readonly namespace?: string;
      readonly organizationId?: number;
    };

/** Create a credentials layer from a service-account bearer token. */
export const fromToken = (config: {
  readonly apiBaseUrl: string;
  readonly token: string;
  readonly namespace?: string;
  readonly organizationId?: number;
}): Layer.Layer<Credentials> =>
  Layer.succeed(
    Credentials,
    Effect.succeed(
      makeConfig({
        ...config,
        auth: { _tag: "Bearer", token: Redacted.make(config.token) },
      }),
    ),
  );

/** Alias that makes the Grafana credential type explicit at call sites. */
export const fromServiceAccountToken = fromToken;

/** Create a credentials layer from self-hosted Basic Auth credentials. */
export const fromBasicAuth = (config: {
  readonly apiBaseUrl: string;
  readonly username: string;
  readonly password: string;
  readonly namespace?: string;
  readonly organizationId?: number;
}): Layer.Layer<Credentials> =>
  Layer.succeed(
    Credentials,
    Effect.succeed(
      makeConfig({
        ...config,
        auth: {
          _tag: "Basic",
          username: config.username,
          password: Redacted.make(config.password),
        },
      }),
    ),
  );

/** Create a credentials layer from either supported self-hosted auth method. */
export const credentials = (
  config: CredentialsConfig,
): Layer.Layer<Credentials> =>
  "token" in config ? fromToken(config) : fromBasicAuth(config);

const fromEnvironment = Effect.gen(function* () {
  const apiBaseUrl =
    process.env.GRAFANA_API_URL?.trim() || process.env.GRAFANA_URL?.trim();
  if (!apiBaseUrl) {
    return yield* new ConfigError({
      message:
        "GRAFANA_API_URL (or GRAFANA_URL) is required for a self-hosted Grafana instance",
    });
  }

  const token =
    process.env.GRAFANA_SERVICE_ACCOUNT_TOKEN?.trim() ||
    process.env.GRAFANA_TOKEN?.trim();
  const username = process.env.GRAFANA_USERNAME;
  const password = process.env.GRAFANA_PASSWORD;
  const hasBasic = username !== undefined || password !== undefined;

  if (token && hasBasic) {
    return yield* new ConfigError({
      message:
        "Configure either GRAFANA_SERVICE_ACCOUNT_TOKEN/GRAFANA_TOKEN or GRAFANA_USERNAME plus GRAFANA_PASSWORD, not both",
    });
  }
  if (!token && (username === undefined || password === undefined)) {
    return yield* new ConfigError({
      message:
        "Self-hosted Grafana credentials are required: set GRAFANA_SERVICE_ACCOUNT_TOKEN (or GRAFANA_TOKEN), or set GRAFANA_USERNAME and GRAFANA_PASSWORD",
    });
  }

  const rawOrganizationId = process.env.GRAFANA_ORG_ID?.trim();
  const organizationId = rawOrganizationId
    ? Number.parseInt(rawOrganizationId, 10)
    : undefined;
  if (
    rawOrganizationId !== undefined &&
    (!Number.isInteger(organizationId) || organizationId! < 1)
  ) {
    return yield* new ConfigError({
      message: "GRAFANA_ORG_ID must be a positive integer",
    });
  }

  try {
    return makeConfig({
      apiBaseUrl,
      organizationId,
      namespace: process.env.GRAFANA_NAMESPACE,
      auth: token
        ? { _tag: "Bearer", token: Redacted.make(token) }
        : {
            _tag: "Basic",
            username: username!,
            password: Redacted.make(password!),
          },
    });
  } catch (cause) {
    return yield* new ConfigError({
      message: `Invalid Grafana configuration: ${String(cause)}`,
    });
  }
});

/**
 * Read self-hosted Grafana credentials from the environment.
 *
 * `GRAFANA_API_URL` (or `GRAFANA_URL`) and either a service-account token or
 * Basic Auth are required.  `GRAFANA_ORG_ID` and `GRAFANA_NAMESPACE` are
 * optional; organization 1 defaults to `default`.
 */
export const CredentialsFromEnv: Layer.Layer<Credentials> = Layer.succeed(
  Credentials,
  fromEnvironment,
);

/** Function form for callers that prefer an explicit layer constructor. */
export const fromEnv = (): Layer.Layer<Credentials> => CredentialsFromEnv;
