/**
 * Cloudflare ORIGIN-TLS-COMPLIANCE-MODES API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service origin-tls-compliance-modes
 */

import * as Schema from "effect/Schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";

// =============================================================================
// OriginTlsComplianceMode
// =============================================================================

export interface GetOriginTlsComplianceModeRequest {
  /** Identifier. */
  zoneId: string;
}

export const GetOriginTlsComplianceModeRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/settings/origin_tls_compliance_modes",
      }),
    ),
  ) as unknown as Schema.Schema<GetOriginTlsComplianceModeRequest>;

export interface GetOriginTlsComplianceModeResponse {
  /** The identifier of the caching setting. */
  id: "origin_tls_compliance_modes";
  /** Whether the setting is editable. */
  editable: boolean;
  /** List of TLS compliance modes that constrain the key-exchange algorithms Cloudflare may use when establishing the TLS connection to the zone's origin. Currently supported values are `fips` (FIPS-approv */
  value: string[];
  /** Last time this setting was modified. */
  modifiedOn?: string | null;
}

export const GetOriginTlsComplianceModeResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.Literal("origin_tls_compliance_modes"),
      editable: Schema.Boolean,
      value: Schema.Array(Schema.String),
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
  ) as unknown as Schema.Schema<GetOriginTlsComplianceModeResponse>;

export type GetOriginTlsComplianceModeError = DefaultErrors;

export const getOriginTlsComplianceMode: API.OperationMethod<
  GetOriginTlsComplianceModeRequest,
  GetOriginTlsComplianceModeResponse,
  GetOriginTlsComplianceModeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOriginTlsComplianceModeRequest,
  output: GetOriginTlsComplianceModeResponse,
  errors: [],
}));

export interface PutOriginTlsComplianceModeRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: List of TLS compliance modes that constrain the key-exchange algorithms Cloudflare may use when establishing the TLS connection to the zone's origin. Currently supported values are `fips`  */
  value: string[];
}

export const PutOriginTlsComplianceModeRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      value: Schema.Array(Schema.String),
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/zones/{zone_id}/settings/origin_tls_compliance_modes",
      }),
    ),
  ) as unknown as Schema.Schema<PutOriginTlsComplianceModeRequest>;

export interface PutOriginTlsComplianceModeResponse {
  /** The identifier of the caching setting. */
  id: "origin_tls_compliance_modes";
  /** Whether the setting is editable. */
  editable: boolean;
  /** List of TLS compliance modes that constrain the key-exchange algorithms Cloudflare may use when establishing the TLS connection to the zone's origin. Currently supported values are `fips` (FIPS-approv */
  value: string[];
  /** Last time this setting was modified. */
  modifiedOn?: string | null;
}

export const PutOriginTlsComplianceModeResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.Literal("origin_tls_compliance_modes"),
      editable: Schema.Boolean,
      value: Schema.Array(Schema.String),
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
  ) as unknown as Schema.Schema<PutOriginTlsComplianceModeResponse>;

export type PutOriginTlsComplianceModeError = DefaultErrors;

export const putOriginTlsComplianceMode: API.OperationMethod<
  PutOriginTlsComplianceModeRequest,
  PutOriginTlsComplianceModeResponse,
  PutOriginTlsComplianceModeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PutOriginTlsComplianceModeRequest,
  output: PutOriginTlsComplianceModeResponse,
  errors: [],
}));

export interface PatchOriginTlsComplianceModeRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: List of TLS compliance modes that constrain the key-exchange algorithms Cloudflare may use when establishing the TLS connection to the zone's origin. Currently supported values are `fips`  */
  value: string[];
}

export const PatchOriginTlsComplianceModeRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      value: Schema.Array(Schema.String),
    }).pipe(
      T.Http({
        method: "PATCH",
        path: "/zones/{zone_id}/settings/origin_tls_compliance_modes",
      }),
    ),
  ) as unknown as Schema.Schema<PatchOriginTlsComplianceModeRequest>;

export interface PatchOriginTlsComplianceModeResponse {
  /** The identifier of the caching setting. */
  id: "origin_tls_compliance_modes";
  /** Whether the setting is editable. */
  editable: boolean;
  /** List of TLS compliance modes that constrain the key-exchange algorithms Cloudflare may use when establishing the TLS connection to the zone's origin. Currently supported values are `fips` (FIPS-approv */
  value: string[];
  /** Last time this setting was modified. */
  modifiedOn?: string | null;
}

export const PatchOriginTlsComplianceModeResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.Literal("origin_tls_compliance_modes"),
      editable: Schema.Boolean,
      value: Schema.Array(Schema.String),
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
  ) as unknown as Schema.Schema<PatchOriginTlsComplianceModeResponse>;

export type PatchOriginTlsComplianceModeError = DefaultErrors;

export const patchOriginTlsComplianceMode: API.OperationMethod<
  PatchOriginTlsComplianceModeRequest,
  PatchOriginTlsComplianceModeResponse,
  PatchOriginTlsComplianceModeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchOriginTlsComplianceModeRequest,
  output: PatchOriginTlsComplianceModeResponse,
  errors: [],
}));

export interface DeleteOriginTlsComplianceModeRequest {
  /** Identifier. */
  zoneId: string;
}

export const DeleteOriginTlsComplianceModeRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/zones/{zone_id}/settings/origin_tls_compliance_modes",
      }),
    ),
  ) as unknown as Schema.Schema<DeleteOriginTlsComplianceModeRequest>;

export interface DeleteOriginTlsComplianceModeResponse {
  /** The identifier of the caching setting. */
  id: "origin_tls_compliance_modes";
  /** Whether the setting is editable. */
  editable: boolean;
  /** Last time this setting was modified. */
  modifiedOn?: string | null;
}

export const DeleteOriginTlsComplianceModeResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.Literal("origin_tls_compliance_modes"),
      editable: Schema.Boolean,
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          editable: "editable",
          modifiedOn: "modified_on",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<DeleteOriginTlsComplianceModeResponse>;

export type DeleteOriginTlsComplianceModeError = DefaultErrors;

export const deleteOriginTlsComplianceMode: API.OperationMethod<
  DeleteOriginTlsComplianceModeRequest,
  DeleteOriginTlsComplianceModeResponse,
  DeleteOriginTlsComplianceModeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteOriginTlsComplianceModeRequest,
  output: DeleteOriginTlsComplianceModeResponse,
  errors: [],
}));
