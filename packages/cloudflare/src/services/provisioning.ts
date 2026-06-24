/**
 * Cloudflare PROVISIONING API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service provisioning
 */

import * as Schema from "effect/Schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// =============================================================================
// Errors
// =============================================================================

export class InvalidRoute extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<InvalidRoute>()("InvalidRoute", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 7003 }],
) {}

export class RateLimited extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<RateLimited>()("RateLimited", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 429 }],
) {}

// =============================================================================
// TemporaryAccount
// =============================================================================

export interface CreateTemporaryAccountRequest {
  /** URL of the Cloudflare Terms of Service the caller is accepting. */
  termsOfService?: string;
  /** URL of the Cloudflare Privacy Policy the caller is accepting. */
  privacyPolicy?: string;
  /** Must be the literal string `"yes"` to indicate acceptance of the terms. */
  acceptTermsOfService: string;
  /** The `challengeToken` returned by createTemporaryAccountChallenge. */
  challengeToken: string;
  solution: { checkpoints: string };
}

export const CreateTemporaryAccountRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      termsOfService: Schema.optional(Schema.String),
      privacyPolicy: Schema.optional(Schema.String),
      acceptTermsOfService: Schema.String,
      challengeToken: Schema.String,
      solution: Schema.Struct({
        checkpoints: Schema.String,
      }),
    }).pipe(T.Http({ method: "POST", path: "/provisioning/previews" })),
  ) as unknown as Schema.Schema<CreateTemporaryAccountRequest>;

export interface CreateTemporaryAccountResponse {
  account: {
    id: string;
    name: string;
    type?: string | null;
    apiToken: string;
    tokenId?: string | null;
    expiresAt: string;
  };
  claim: { token?: string | null; url: string; expiresAt: string };
}

export const CreateTemporaryAccountResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      account: Schema.Struct({
        id: Schema.String,
        name: Schema.String,
        type: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        apiToken: SensitiveString,
        tokenId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        expiresAt: Schema.String,
      }),
      claim: Schema.Struct({
        token: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        url: Schema.String,
        expiresAt: Schema.String,
      }),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<CreateTemporaryAccountResponse>;

export type CreateTemporaryAccountError =
  | DefaultErrors
  | InvalidRoute
  | RateLimited;

export const createTemporaryAccount: API.OperationMethod<
  CreateTemporaryAccountRequest,
  CreateTemporaryAccountResponse,
  CreateTemporaryAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateTemporaryAccountRequest,
  output: CreateTemporaryAccountResponse,
  errors: [InvalidRoute, RateLimited],
}));

// =============================================================================
// TemporaryAccountChallenge
// =============================================================================

export interface CreateTemporaryAccountChallengeRequest {}

export const CreateTemporaryAccountChallengeRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({}).pipe(
      T.Http({ method: "POST", path: "/provisioning/previews/challenge" }),
    ),
  ) as unknown as Schema.Schema<CreateTemporaryAccountChallengeRequest>;

export interface CreateTemporaryAccountChallengeResponse {
  /** Opaque token identifying this challenge; echoed back when redeeming the solution. */
  challengeToken: string;
  /** Base64url-encoded 32-byte seed for the proof-of-work hash chain. */
  seed: string;
  /** Number of segments in the hash chain (number of checkpoints minus one). */
  k: number;
  /** Number of SHA-256 iterations per segment. Total work is `k * g` hashes. */
  g: number;
}

export const CreateTemporaryAccountChallengeResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      challengeToken: Schema.String,
      seed: Schema.String,
      k: Schema.Number,
      g: Schema.Number,
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<CreateTemporaryAccountChallengeResponse>;

export type CreateTemporaryAccountChallengeError =
  | DefaultErrors
  | InvalidRoute
  | RateLimited;

export const createTemporaryAccountChallenge: API.OperationMethod<
  CreateTemporaryAccountChallengeRequest,
  CreateTemporaryAccountChallengeResponse,
  CreateTemporaryAccountChallengeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateTemporaryAccountChallengeRequest,
  output: CreateTemporaryAccountChallengeResponse,
  errors: [InvalidRoute, RateLimited],
}));
