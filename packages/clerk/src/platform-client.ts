/**
 * Clerk Platform API client.
 *
 * Uses {@link PlatformCredentials} (a Platform API access token). All
 * `src/operations/platform/*` files import `{ API }` from this module.
 */
import * as Effect from "effect/Effect";
import * as Redacted from "effect/Redacted";
import { makeAPI } from "@distilled.cloud/core/client";
import { matchClerkError } from "./match-error.ts";
import { ClerkParseError } from "./errors.ts";
import { Retry } from "./retry.ts";
import { PlatformCredentials } from "./credentials.ts";

export const API = makeAPI<PlatformCredentials>({
  credentials: PlatformCredentials as any,
  getBaseUrl: (creds: any) => creds.apiBaseUrl,
  getAuthHeaders: (creds: any) => ({
    Authorization: `Bearer ${Redacted.value(creds.accessToken)}`,
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
