/**
 * Cloudflare ARGO API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service argo
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

export class InvalidObjectIdentifier extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<InvalidObjectIdentifier>()(
    "InvalidObjectIdentifier",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 7003 }],
) {}

export class NotAuthorized extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<NotAuthorized>()("NotAuthorized", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1015 }],
) {}

export class ZoneNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<ZoneNotFound>()("ZoneNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 404, message: { includes: "Invalid or missing zone" } }],
) {}

// =============================================================================
// SmartRouting
// =============================================================================

export interface GetSmartRoutingRequest {
  /** Specifies the zone associated with the API call. */
  zoneId: string;
}

export const GetSmartRoutingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({ method: "GET", path: "/zones/{zone_id}/argo/smart_routing" }),
    ),
  ) as unknown as Schema.Schema<GetSmartRoutingRequest>;

export interface GetSmartRoutingResponse {
  /** Specifies the identifier of the Argo Smart Routing setting. */
  id: string;
  /** Specifies if the setting is editable. */
  editable: boolean;
  /** Specifies the enablement value of Argo Smart Routing. */
  value: "on" | "off" | (string & {});
  /** Specifies the time when the setting was last modified. */
  modifiedOn?: string | null;
}

export const GetSmartRoutingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      editable: Schema.Boolean,
      value: Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          editable: "editable",
          value: "value",
          modifiedOn: "modified_on",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<GetSmartRoutingResponse>;

export type GetSmartRoutingError =
  | DefaultErrors
  | InvalidObjectIdentifier
  | NotAuthorized
  | Forbidden;

export const getSmartRouting: API.OperationMethod<
  GetSmartRoutingRequest,
  GetSmartRoutingResponse,
  GetSmartRoutingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSmartRoutingRequest,
  output: GetSmartRoutingResponse,
  errors: [InvalidObjectIdentifier, NotAuthorized, Forbidden],
}));

export interface PatchSmartRoutingRequest {
  /** Path param: Specifies the zone associated with the API call. */
  zoneId: string;
  /** Body param: Specifies the enablement value of Argo Smart Routing. */
  value: "on" | "off" | (string & {});
}

export const PatchSmartRoutingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      value: Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
    }).pipe(
      T.Http({ method: "PATCH", path: "/zones/{zone_id}/argo/smart_routing" }),
    ),
  ) as unknown as Schema.Schema<PatchSmartRoutingRequest>;

export interface PatchSmartRoutingResponse {
  /** Specifies the identifier of the Argo Smart Routing setting. */
  id: string;
  /** Specifies if the setting is editable. */
  editable: boolean;
  /** Specifies the enablement value of Argo Smart Routing. */
  value: "on" | "off" | (string & {});
  /** Specifies the time when the setting was last modified. */
  modifiedOn?: string | null;
}

export const PatchSmartRoutingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      editable: Schema.Boolean,
      value: Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          editable: "editable",
          value: "value",
          modifiedOn: "modified_on",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<PatchSmartRoutingResponse>;

export type PatchSmartRoutingError =
  | DefaultErrors
  | InvalidObjectIdentifier
  | NotAuthorized
  | Forbidden;

export const patchSmartRouting: API.OperationMethod<
  PatchSmartRoutingRequest,
  PatchSmartRoutingResponse,
  PatchSmartRoutingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchSmartRoutingRequest,
  output: PatchSmartRoutingResponse,
  errors: [InvalidObjectIdentifier, NotAuthorized, Forbidden],
}));

// =============================================================================
// TieredCaching
// =============================================================================

export interface GetTieredCachingRequest {
  /** Identifier. */
  zoneId: string;
}

export const GetTieredCachingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({ method: "GET", path: "/zones/{zone_id}/argo/tiered_caching" }),
    ),
  ) as unknown as Schema.Schema<GetTieredCachingRequest>;

export interface GetTieredCachingResponse {
  /** The identifier of the caching setting. */
  id: "tiered_caching";
  /** Whether the setting is editable. */
  editable: boolean;
  /** Value of the Tiered Cache zone setting. */
  value: "on" | "off" | (string & {});
  /** Last time this setting was modified. */
  modifiedOn?: string | null;
}

export const GetTieredCachingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.Literal("tiered_caching"),
      editable: Schema.Boolean,
      value: Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          editable: "editable",
          value: "value",
          modifiedOn: "modified_on",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<GetTieredCachingResponse>;

export type GetTieredCachingError =
  | DefaultErrors
  | InvalidObjectIdentifier
  | ZoneNotFound
  | Forbidden;

export const getTieredCaching: API.OperationMethod<
  GetTieredCachingRequest,
  GetTieredCachingResponse,
  GetTieredCachingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetTieredCachingRequest,
  output: GetTieredCachingResponse,
  errors: [InvalidObjectIdentifier, ZoneNotFound, Forbidden],
}));

export interface PatchTieredCachingRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: Enables Tiered Caching. */
  value: "on" | "off" | (string & {});
}

export const PatchTieredCachingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      value: Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
    }).pipe(
      T.Http({ method: "PATCH", path: "/zones/{zone_id}/argo/tiered_caching" }),
    ),
  ) as unknown as Schema.Schema<PatchTieredCachingRequest>;

export interface PatchTieredCachingResponse {
  /** The identifier of the caching setting. */
  id: "tiered_caching";
  /** Whether the setting is editable. */
  editable: boolean;
  /** Value of the Tiered Cache zone setting. */
  value: "on" | "off" | (string & {});
  /** Last time this setting was modified. */
  modifiedOn?: string | null;
}

export const PatchTieredCachingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.Literal("tiered_caching"),
      editable: Schema.Boolean,
      value: Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          editable: "editable",
          value: "value",
          modifiedOn: "modified_on",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<PatchTieredCachingResponse>;

export type PatchTieredCachingError =
  | DefaultErrors
  | InvalidObjectIdentifier
  | Forbidden;

export const patchTieredCaching: API.OperationMethod<
  PatchTieredCachingRequest,
  PatchTieredCachingResponse,
  PatchTieredCachingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchTieredCachingRequest,
  output: PatchTieredCachingResponse,
  errors: [InvalidObjectIdentifier, Forbidden],
}));
