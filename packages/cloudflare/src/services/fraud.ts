/**
 * Cloudflare FRAUD API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service fraud
 */

import * as Schema from "effect/Schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";

// =============================================================================
// Fraud
// =============================================================================

export interface GetFraudRequest {
  /** Identifier. */
  zoneId: string;
}

export const GetFraudRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
}).pipe(
  T.Http({ method: "GET", path: "/zones/{zone_id}/fraud_detection/settings" }),
) as unknown as Schema.Schema<GetFraudRequest>;

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
  userProfiles?: "enabled" | "disabled" | null;
  /** List of expressions to detect usernames in write HTTP requests.  - Maximum of 10 expressions. - Omit or set to null to leave unchanged on update. - Provide an empty array `[]` to clear all expressions */
  usernameExpressions?: string[] | null;
}

export const GetFraudResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  authenticationSettings: Schema.optional(
    Schema.Union([
      Schema.Struct({
        failureCriteria: Schema.optional(
          Schema.Union([
            Schema.Struct({
              kind: Schema.Literal("status_code"),
              statusCodes: Schema.optional(
                Schema.Union([Schema.Array(Schema.Number), Schema.Null]),
              ),
            }).pipe(
              Schema.encodeKeys({ kind: "kind", statusCodes: "status_codes" }),
            ),
            Schema.Null,
          ]),
        ),
        successCriteria: Schema.optional(
          Schema.Union([
            Schema.Struct({
              kind: Schema.Literal("status_code"),
              statusCodes: Schema.optional(
                Schema.Union([Schema.Array(Schema.Number), Schema.Null]),
              ),
            }).pipe(
              Schema.encodeKeys({ kind: "kind", statusCodes: "status_codes" }),
            ),
            Schema.Null,
          ]),
        ),
      }).pipe(
        Schema.encodeKeys({
          failureCriteria: "failure_criteria",
          successCriteria: "success_criteria",
        }),
      ),
      Schema.Null,
    ]),
  ),
  userProfiles: Schema.optional(
    Schema.Union([Schema.Literals(["enabled", "disabled"]), Schema.Null]),
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
  .pipe(T.ResponsePath("result")) as unknown as Schema.Schema<GetFraudResponse>;

export type GetFraudError = DefaultErrors;

export const getFraud: API.OperationMethod<
  GetFraudRequest,
  GetFraudResponse,
  GetFraudError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetFraudRequest,
  output: GetFraudResponse,
  errors: [],
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
  userProfiles?: "enabled" | "disabled";
  /** Body param: List of expressions to detect usernames in write HTTP requests.  - Maximum of 10 expressions. - Omit or set to null to leave unchanged on update. - Provide an empty array `[]` to clear all */
  usernameExpressions?: string[];
}

export const PutFraudRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  authenticationSettings: Schema.optional(
    Schema.Struct({
      failureCriteria: Schema.optional(
        Schema.Struct({
          kind: Schema.Literal("status_code"),
          statusCodes: Schema.optional(Schema.Array(Schema.Number)),
        }).pipe(
          Schema.encodeKeys({ kind: "kind", statusCodes: "status_codes" }),
        ),
      ),
      successCriteria: Schema.optional(
        Schema.Struct({
          kind: Schema.Literal("status_code"),
          statusCodes: Schema.optional(Schema.Array(Schema.Number)),
        }).pipe(
          Schema.encodeKeys({ kind: "kind", statusCodes: "status_codes" }),
        ),
      ),
    }).pipe(
      Schema.encodeKeys({
        failureCriteria: "failure_criteria",
        successCriteria: "success_criteria",
      }),
    ),
  ),
  userProfiles: Schema.optional(Schema.Literals(["enabled", "disabled"])),
  usernameExpressions: Schema.optional(Schema.Array(Schema.String)),
}).pipe(
  Schema.encodeKeys({
    authenticationSettings: "authentication_settings",
    userProfiles: "user_profiles",
    usernameExpressions: "username_expressions",
  }),
  T.Http({ method: "PUT", path: "/zones/{zone_id}/fraud_detection/settings" }),
) as unknown as Schema.Schema<PutFraudRequest>;

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
  userProfiles?: "enabled" | "disabled" | null;
  /** List of expressions to detect usernames in write HTTP requests.  - Maximum of 10 expressions. - Omit or set to null to leave unchanged on update. - Provide an empty array `[]` to clear all expressions */
  usernameExpressions?: string[] | null;
}

export const PutFraudResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  authenticationSettings: Schema.optional(
    Schema.Union([
      Schema.Struct({
        failureCriteria: Schema.optional(
          Schema.Union([
            Schema.Struct({
              kind: Schema.Literal("status_code"),
              statusCodes: Schema.optional(
                Schema.Union([Schema.Array(Schema.Number), Schema.Null]),
              ),
            }).pipe(
              Schema.encodeKeys({ kind: "kind", statusCodes: "status_codes" }),
            ),
            Schema.Null,
          ]),
        ),
        successCriteria: Schema.optional(
          Schema.Union([
            Schema.Struct({
              kind: Schema.Literal("status_code"),
              statusCodes: Schema.optional(
                Schema.Union([Schema.Array(Schema.Number), Schema.Null]),
              ),
            }).pipe(
              Schema.encodeKeys({ kind: "kind", statusCodes: "status_codes" }),
            ),
            Schema.Null,
          ]),
        ),
      }).pipe(
        Schema.encodeKeys({
          failureCriteria: "failure_criteria",
          successCriteria: "success_criteria",
        }),
      ),
      Schema.Null,
    ]),
  ),
  userProfiles: Schema.optional(
    Schema.Union([Schema.Literals(["enabled", "disabled"]), Schema.Null]),
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
  .pipe(T.ResponsePath("result")) as unknown as Schema.Schema<PutFraudResponse>;

export type PutFraudError = DefaultErrors;

export const putFraud: API.OperationMethod<
  PutFraudRequest,
  PutFraudResponse,
  PutFraudError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PutFraudRequest,
  output: PutFraudResponse,
  errors: [],
}));
