/**
 * Clerk Backend API client.
 *
 * Uses {@link BackendCredentials} (an instance secret key, e.g.
 * `sk_test_...` / `sk_live_...`). All `src/operations/backend/*` files
 * import `{ API }` from this module.
 */
import * as Effect from "effect/Effect";
import * as Redacted from "effect/Redacted";
import { makeAPI } from "@distilled.cloud/core/client";
import { matchClerkError } from "./match-error.ts";
import { ClerkParseError } from "./errors.ts";
import { Retry } from "./retry.ts";
import { BackendCredentials } from "./credentials.ts";

export const API = makeAPI<BackendCredentials>({
  credentials: BackendCredentials as any,
  getBaseUrl: (creds: any) => creds.apiBaseUrl,
  getAuthHeaders: (creds: any) => ({
    Authorization: `Bearer ${Redacted.value(creds.secretKey)}`,
  }),
  matchError: matchClerkError as (
    status: number,
    body: unknown,
    errors?: readonly unknown[],
    headers?: Record<string, string | undefined>,
  ) => Effect.Effect<never, unknown>,
  ParseError: ClerkParseError as any,
  retry: Retry as any,
});
