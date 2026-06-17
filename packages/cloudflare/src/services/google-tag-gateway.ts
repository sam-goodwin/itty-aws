/**
 * Cloudflare GOOGLE-TAG-GATEWAY API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service google-tag-gateway
 */

import * as Schema from "effect/Schema";
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

// =============================================================================
// Config
// =============================================================================

export interface GetConfigRequest {
  /** Identifier. */
  zoneId: string;
}

export const GetConfigRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/zones/{zone_id}/settings/google-tag-gateway/config",
    }),
  ),
) as unknown as Schema.Schema<GetConfigRequest>;

export type GetConfigResponse = {
  enabled: boolean;
  endpoint: string;
  hideOriginalIp: boolean;
  measurementId: string;
  setUpTag?: boolean | null;
} | null;

export const GetConfigResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Union([
      Schema.Struct({
        enabled: Schema.Boolean,
        endpoint: Schema.String,
        hideOriginalIp: Schema.Boolean,
        measurementId: Schema.String,
        setUpTag: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      }),
      Schema.Null,
    ]).pipe(T.ResponsePath("result")),
) as unknown as Schema.Schema<GetConfigResponse>;

export type GetConfigError = DefaultErrors | Forbidden;

export const getConfig: API.OperationMethod<
  GetConfigRequest,
  GetConfigResponse,
  GetConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetConfigRequest,
  output: GetConfigResponse,
  errors: [Forbidden],
}));

export interface PutConfigRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: Enables or disables Google Tag Gateway for this zone. */
  enabled: boolean;
  /** Body param: Specifies the endpoint path for proxying Google Tag Manager requests. Use an absolute path starting with '/', with no nested paths and alphanumeric characters only (e.g. /metrics). */
  endpoint: string;
  /** Body param: Hides the original client IP address from Google when enabled. */
  hideOriginalIp: boolean;
  /** Body param: Specify the Google Tag Manager container or measurement ID (e.g. GTM-XXXXXXX or G-XXXXXXXXXX). */
  measurementId: string;
  /** Body param: Set up the associated Google Tag on the zone automatically when enabled. */
  setUpTag?: boolean | null;
}

export const PutConfigRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    enabled: Schema.Boolean,
    endpoint: Schema.String,
    hideOriginalIp: Schema.Boolean,
    measurementId: Schema.String,
    setUpTag: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/zones/{zone_id}/settings/google-tag-gateway/config",
    }),
  ),
) as unknown as Schema.Schema<PutConfigRequest>;

export interface PutConfigResponse {
  /** Enables or disables Google Tag Gateway for this zone. */
  enabled: boolean;
  /** Specifies the endpoint path for proxying Google Tag Manager requests. Use an absolute path starting with '/', with no nested paths and alphanumeric characters only (e.g. /metrics). */
  endpoint: string;
  /** Hides the original client IP address from Google when enabled. */
  hideOriginalIp: boolean;
  /** Specify the Google Tag Manager container or measurement ID (e.g. GTM-XXXXXXX or G-XXXXXXXXXX). */
  measurementId: string;
  /** Set up the associated Google Tag on the zone automatically when enabled. */
  setUpTag?: boolean | null;
}

export const PutConfigResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      enabled: Schema.Boolean,
      endpoint: Schema.String,
      hideOriginalIp: Schema.Boolean,
      measurementId: Schema.String,
      setUpTag: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Schema<PutConfigResponse>;

export type PutConfigError = DefaultErrors | Forbidden;

export const putConfig: API.OperationMethod<
  PutConfigRequest,
  PutConfigResponse,
  PutConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PutConfigRequest,
  output: PutConfigResponse,
  errors: [Forbidden],
}));
