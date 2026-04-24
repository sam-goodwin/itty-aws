import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";
import * as Context from "effect/Context";
import { ConfigError } from "@distilled.cloud/core/errors";

/** Default base URL for Axiom Cloud. Self-hosted users can override via AXIOM_URL. */
export const DEFAULT_API_BASE_URL = "https://api.axiom.co";

export interface Config {
  readonly apiKey: Redacted.Redacted<string>;
  readonly apiBaseUrl: string;
  /**
   * Optional organization ID. Required when authenticating with a Personal
   * Access Token (PAT); optional for API tokens scoped to a single org.
   * Sent on every request as the `X-Axiom-Org-ID` header when set.
   */
  readonly orgId?: string;
}

export class Credentials extends Context.Service<Credentials, Config>()(
  "AxiomCredentials",
) {}

/**
 * Build {@link Credentials} from environment variables.
 *
 * - `AXIOM_TOKEN` or `AXIOM_API_KEY` (required) — Axiom API token or PAT.
 * - `AXIOM_URL` (optional) — override the API base URL (for self-hosted or
 *   regional edge deployments). Defaults to `https://api.axiom.co`.
 * - `AXIOM_ORG_ID` (optional) — organization ID, required for PATs.
 */
export const CredentialsFromEnv = Layer.effect(
  Credentials,
  Effect.gen(function* () {
    const apiKey = process.env.AXIOM_TOKEN ?? process.env.AXIOM_API_KEY;

    if (!apiKey) {
      return yield* new ConfigError({
        message:
          "AXIOM_TOKEN (or AXIOM_API_KEY) environment variable is required",
      });
    }

    return {
      apiKey: Redacted.make(apiKey),
      apiBaseUrl: process.env.AXIOM_URL ?? DEFAULT_API_BASE_URL,
      orgId: process.env.AXIOM_ORG_ID,
    };
  }),
);
