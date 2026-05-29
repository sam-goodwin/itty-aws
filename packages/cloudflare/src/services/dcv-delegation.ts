/**
 * Cloudflare DCV-DELEGATION API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service dcv-delegation
 */

import * as Schema from "effect/Schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";

// =============================================================================
// DcvDelegation
// =============================================================================

export interface GetDcvDelegationRequest {
  /** Identifier. */
  zoneId: string;
}

export const GetDcvDelegationRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(
    T.Http({ method: "GET", path: "/zones/{zone_id}/dcv_delegation/uuid" }),
  ) as unknown as Schema.Schema<GetDcvDelegationRequest>;

export interface GetDcvDelegationResponse {
  /** The DCV Delegation unique identifier. */
  uuid?: string | null;
}

export const GetDcvDelegationResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uuid: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<GetDcvDelegationResponse>;

export type GetDcvDelegationError = DefaultErrors;

export const getDcvDelegation: API.OperationMethod<
  GetDcvDelegationRequest,
  GetDcvDelegationResponse,
  GetDcvDelegationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetDcvDelegationRequest,
  output: GetDcvDelegationResponse,
  errors: [],
}));
