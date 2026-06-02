/**
 * Cloudflare URL-NORMALIZATION API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service url-normalization
 */

import * as Schema from "effect/Schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";

// =============================================================================
// UrlNormalization
// =============================================================================

export interface GetUrlNormalizationRequest {
  /** The unique ID of the zone. */
  zoneId: string;
}

export const GetUrlNormalizationRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(
    T.Http({ method: "GET", path: "/zones/{zone_id}/url_normalization" }),
  ) as unknown as Schema.Schema<GetUrlNormalizationRequest>;

export interface GetUrlNormalizationResponse {
  /** The scope of the URL normalization. */
  scope: "incoming" | "both" | "none" | (string & {});
  /** The type of URL normalization performed by Cloudflare. */
  type: "cloudflare" | "rfc3986" | (string & {});
}

export const GetUrlNormalizationResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scope: Schema.Union([
      Schema.Literals(["incoming", "both", "none"]),
      Schema.String,
    ]),
    type: Schema.Union([
      Schema.Literals(["cloudflare", "rfc3986"]),
      Schema.String,
    ]),
  }).pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<GetUrlNormalizationResponse>;

export type GetUrlNormalizationError = DefaultErrors;

export const getUrlNormalization: API.OperationMethod<
  GetUrlNormalizationRequest,
  GetUrlNormalizationResponse,
  GetUrlNormalizationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetUrlNormalizationRequest,
  output: GetUrlNormalizationResponse,
  errors: [],
}));

export interface PutUrlNormalizationRequest {
  /** Path param: The unique ID of the zone. */
  zoneId: string;
  /** Body param: The scope of the URL normalization. */
  scope: "incoming" | "both" | "none" | (string & {});
  /** Body param: The type of URL normalization performed by Cloudflare. */
  type: "cloudflare" | "rfc3986" | (string & {});
}

export const PutUrlNormalizationRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    scope: Schema.Union([
      Schema.Literals(["incoming", "both", "none"]),
      Schema.String,
    ]),
    type: Schema.Union([
      Schema.Literals(["cloudflare", "rfc3986"]),
      Schema.String,
    ]),
  }).pipe(
    T.Http({ method: "PUT", path: "/zones/{zone_id}/url_normalization" }),
  ) as unknown as Schema.Schema<PutUrlNormalizationRequest>;

export interface PutUrlNormalizationResponse {
  /** The scope of the URL normalization. */
  scope: "incoming" | "both" | "none" | (string & {});
  /** The type of URL normalization performed by Cloudflare. */
  type: "cloudflare" | "rfc3986" | (string & {});
}

export const PutUrlNormalizationResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scope: Schema.Union([
      Schema.Literals(["incoming", "both", "none"]),
      Schema.String,
    ]),
    type: Schema.Union([
      Schema.Literals(["cloudflare", "rfc3986"]),
      Schema.String,
    ]),
  }).pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<PutUrlNormalizationResponse>;

export type PutUrlNormalizationError = DefaultErrors;

export const putUrlNormalization: API.OperationMethod<
  PutUrlNormalizationRequest,
  PutUrlNormalizationResponse,
  PutUrlNormalizationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PutUrlNormalizationRequest,
  output: PutUrlNormalizationResponse,
  errors: [],
}));

export interface DeleteUrlNormalizationRequest {
  /** The unique ID of the zone. */
  zoneId: string;
}

export const DeleteUrlNormalizationRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(
    T.Http({ method: "DELETE", path: "/zones/{zone_id}/url_normalization" }),
  ) as unknown as Schema.Schema<DeleteUrlNormalizationRequest>;

export type DeleteUrlNormalizationResponse = unknown;

export const DeleteUrlNormalizationResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown as unknown as Schema.Schema<DeleteUrlNormalizationResponse>;

export type DeleteUrlNormalizationError = DefaultErrors;

export const deleteUrlNormalization: API.OperationMethod<
  DeleteUrlNormalizationRequest,
  DeleteUrlNormalizationResponse,
  DeleteUrlNormalizationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteUrlNormalizationRequest,
  output: DeleteUrlNormalizationResponse,
  errors: [],
}));
