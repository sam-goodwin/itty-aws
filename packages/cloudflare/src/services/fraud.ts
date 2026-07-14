/**
 * Cloudflare FRAUD API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service fraud
 */

import * as Schema from "@distilled.cloud/core/schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";

// =============================================================================
// Errors
// =============================================================================

export class Forbidden extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<Forbidden>()("Forbidden", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 403 }],
) {}

export class FraudDetectionNotEntitled extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<FraudDetectionNotEntitled>()(
    "FraudDetectionNotEntitled",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 10400 }],
) {}

// =============================================================================
// Shared nested schemas (hoisted, module-private)
// =============================================================================

interface FailureCriteria {
  /** The type of criterion. Currently only `status_code` is supported. */
  kind: "status_code";
  /** HTTP status codes to match against the origin response.  - Maximum of 10 codes per criterion. - Each code must be a valid HTTP status code (100-599). - Codes are deduplicated and sorted on save. - Omi */
  statusCodes?: number[] | null;
}
const FailureCriteria = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    kind: Schema.Literal("status_code"),
    statusCodes: Schema.optional(
      Schema.Union([Schema.Array(Schema.Number), Schema.Null]),
    ),
  }).pipe(Schema.encodeKeys({ kind: "kind", statusCodes: "status_codes" })),
) as unknown as Schema.Codec<FailureCriteria>;

interface AuthenticationSettings {
  /** Criterion for identifying failed login responses. */
  failureCriteria?: {
    kind: "status_code";
    statusCodes?: number[] | null;
  } | null;
  /** Criterion for identifying successful login responses. */
  successCriteria?: {
    kind: "status_code";
    statusCodes?: number[] | null;
  } | null;
}
const AuthenticationSettings = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    failureCriteria: Schema.optional(
      Schema.Union([FailureCriteria, Schema.Null]),
    ),
    successCriteria: Schema.optional(
      Schema.Union([FailureCriteria, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      failureCriteria: "failure_criteria",
      successCriteria: "success_criteria",
    }),
  ),
) as unknown as Schema.Codec<AuthenticationSettings>;

// =============================================================================
// Fraud
// =============================================================================

export interface GetFraudRequest {
  /** Identifier. */
  zoneId: string;
}

export const GetFraudRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/zones/{zone_id}/fraud_detection/settings",
    }),
  ),
) as unknown as Schema.Codec<GetFraudRequest>;

export interface GetFraudResponse {
  /** Configuration for classifying login authentication outcomes based on the origin response. Requires `user_profiles` to be enabled.  - Success and failure criteria are independently updatable — sending  */
  authenticationSettings?: {
    failureCriteria?: {
      kind: "status_code";
      statusCodes?: number[] | null;
    } | null;
    successCriteria?: {
      kind: "status_code";
      statusCodes?: number[] | null;
    } | null;
  } | null;
  /** Whether Fraud User Profiles is enabled for the zone. */
  userProfiles?: "enabled" | "disabled" | (string & {}) | null;
  /** List of expressions to detect usernames in write HTTP requests.  - Maximum of 10 expressions. - Omit or set to null to leave unchanged on update. - Provide an empty array `[]` to clear all expressions */
  usernameExpressions?: string[] | null;
}

export const GetFraudResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    authenticationSettings: Schema.optional(
      Schema.Union([AuthenticationSettings, Schema.Null]),
    ),
    userProfiles: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["enabled", "disabled"]), Schema.String]),
        Schema.Null,
      ]),
    ),
    usernameExpressions: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
  })
    .pipe(
      Schema.encodeKeys({
        authenticationSettings: "authentication_settings",
        userProfiles: "user_profiles",
        usernameExpressions: "username_expressions",
      }),
    )
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetFraudResponse>;

export type GetFraudError = DefaultErrors | Forbidden;

export const getFraud: API.OperationMethod<
  GetFraudRequest,
  GetFraudResponse,
  GetFraudError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetFraudRequest,
  output: GetFraudResponse,
  errors: [Forbidden],
}));

export interface PutFraudRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: Configuration for classifying login authentication outcomes based on the origin response. Requires `user_profiles` to be enabled.  - Success and failure criteria are independently updatabl */
  authenticationSettings?: {
    failureCriteria?: { kind: "status_code"; statusCodes?: number[] };
    successCriteria?: { kind: "status_code"; statusCodes?: number[] };
  };
  /** Body param: Whether Fraud User Profiles is enabled for the zone. */
  userProfiles?: "enabled" | "disabled" | (string & {});
  /** Body param: List of expressions to detect usernames in write HTTP requests.  - Maximum of 10 expressions. - Omit or set to null to leave unchanged on update. - Provide an empty array `[]` to clear all */
  usernameExpressions?: string[];
}

export const PutFraudRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    authenticationSettings: Schema.optional(AuthenticationSettings),
    userProfiles: Schema.optional(
      Schema.Union([Schema.Literals(["enabled", "disabled"]), Schema.String]),
    ),
    usernameExpressions: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    Schema.encodeKeys({
      authenticationSettings: "authentication_settings",
      userProfiles: "user_profiles",
      usernameExpressions: "username_expressions",
    }),
    T.Http({
      method: "PUT",
      path: "/zones/{zone_id}/fraud_detection/settings",
    }),
  ),
) as unknown as Schema.Codec<PutFraudRequest>;

export interface PutFraudResponse {
  /** Configuration for classifying login authentication outcomes based on the origin response. Requires `user_profiles` to be enabled.  - Success and failure criteria are independently updatable — sending  */
  authenticationSettings?: {
    failureCriteria?: {
      kind: "status_code";
      statusCodes?: number[] | null;
    } | null;
    successCriteria?: {
      kind: "status_code";
      statusCodes?: number[] | null;
    } | null;
  } | null;
  /** Whether Fraud User Profiles is enabled for the zone. */
  userProfiles?: "enabled" | "disabled" | (string & {}) | null;
  /** List of expressions to detect usernames in write HTTP requests.  - Maximum of 10 expressions. - Omit or set to null to leave unchanged on update. - Provide an empty array `[]` to clear all expressions */
  usernameExpressions?: string[] | null;
}

export const PutFraudResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    authenticationSettings: Schema.optional(
      Schema.Union([AuthenticationSettings, Schema.Null]),
    ),
    userProfiles: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["enabled", "disabled"]), Schema.String]),
        Schema.Null,
      ]),
    ),
    usernameExpressions: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
  })
    .pipe(
      Schema.encodeKeys({
        authenticationSettings: "authentication_settings",
        userProfiles: "user_profiles",
        usernameExpressions: "username_expressions",
      }),
    )
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<PutFraudResponse>;

export type PutFraudError =
  | DefaultErrors
  | Forbidden
  | FraudDetectionNotEntitled;

export const putFraud: API.OperationMethod<
  PutFraudRequest,
  PutFraudResponse,
  PutFraudError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutFraudRequest,
  output: PutFraudResponse,
  errors: [Forbidden, FraudDetectionNotEntitled],
}));
