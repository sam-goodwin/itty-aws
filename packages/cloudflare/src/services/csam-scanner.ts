/**
 * Cloudflare CSAM-SCANNER API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service csam-scanner
 */

import * as Schema from "effect/Schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";

// =============================================================================
// CsamScanner
// =============================================================================

export interface GetCsamScannerRequest {
  /** Identifier for the zone. */
  zoneId: string;
}

export const GetCsamScannerRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/settings/csam_scanner_third_party",
      }),
    ),
) as unknown as Schema.Schema<GetCsamScannerRequest>;

export interface GetCsamScannerResponse {
  /** The feature identifier. */
  id?: "csam_scanner" | null;
  /** Whether the feature state can be changed. When false, the zone or account may be locked by Trust & Safety. */
  editable?: boolean | null;
  /** When the setting was last modified. Currently always null as the server does not populate this field. */
  modifiedOn?: string | null;
  /** The CSAM Scanner feature configuration values. Contains the notification email and scanning enablement settings. */
  value?: {
    email?: string | null;
    emailState?: "valid" | "pending" | "unverified" | (string & {}) | null;
    enabled?: boolean | null;
    sources?: Record<string, unknown> | null;
    zonePlan?: string | null;
  } | null;
}

export const GetCsamScannerResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(
        Schema.Union([Schema.Literal("csam_scanner"), Schema.Null]),
      ),
      editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      value: Schema.optional(
        Schema.Union([
          Schema.Struct({
            email: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
            emailState: Schema.optional(
              Schema.Union([
                Schema.Union([
                  Schema.Literals(["valid", "pending", "unverified"]),
                  Schema.String,
                ]),
                Schema.Null,
              ]),
            ),
            enabled: Schema.optional(
              Schema.Union([Schema.Boolean, Schema.Null]),
            ),
            sources: Schema.optional(
              Schema.Union([
                Schema.Record(Schema.String, Schema.Unknown),
                Schema.Null,
              ]),
            ),
            zonePlan: Schema.optional(
              Schema.Union([Schema.String, Schema.Null]),
            ),
          }).pipe(
            Schema.encodeKeys({
              email: "email",
              emailState: "email_state",
              enabled: "enabled",
              sources: "sources",
              zonePlan: "zone_plan",
            }),
          ),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          editable: "editable",
          modifiedOn: "modified_on",
          value: "value",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<GetCsamScannerResponse>;

export type GetCsamScannerError = DefaultErrors;

export const getCsamScanner: API.OperationMethod<
  GetCsamScannerRequest,
  GetCsamScannerResponse,
  GetCsamScannerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetCsamScannerRequest,
  output: GetCsamScannerResponse,
  errors: [],
}));

export interface PatchCsamScannerRequest {
  /** Path param: Identifier for the zone. */
  zoneId: string;
  /** Body param: The feature identifier. */
  id?: "csam_scanner";
  /** Body param: Writable CSAM Scanner feature configuration values. */
  value?: {
    email?: string;
    enabled?: boolean;
    resendEmail?: boolean;
    sources?: Record<string, unknown>;
  };
}

export const PatchCsamScannerRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      id: Schema.optional(Schema.Literal("csam_scanner")),
      value: Schema.optional(
        Schema.Struct({
          email: Schema.optional(Schema.String),
          enabled: Schema.optional(Schema.Boolean),
          resendEmail: Schema.optional(Schema.Boolean),
          sources: Schema.optional(
            Schema.Record(Schema.String, Schema.Unknown),
          ),
        }).pipe(
          Schema.encodeKeys({
            email: "email",
            enabled: "enabled",
            resendEmail: "resend_email",
            sources: "sources",
          }),
        ),
      ),
    }).pipe(
      T.Http({
        method: "PATCH",
        path: "/zones/{zone_id}/settings/csam_scanner_third_party",
      }),
    ),
  ) as unknown as Schema.Schema<PatchCsamScannerRequest>;

export interface PatchCsamScannerResponse {
  /** The feature identifier. */
  id?: "csam_scanner" | null;
  /** Whether the feature state can be changed. When false, the zone or account may be locked by Trust & Safety. */
  editable?: boolean | null;
  /** When the setting was last modified. Currently always null as the server does not populate this field. */
  modifiedOn?: string | null;
  /** The CSAM Scanner feature configuration values. Contains the notification email and scanning enablement settings. */
  value?: {
    email?: string | null;
    emailState?: "valid" | "pending" | "unverified" | (string & {}) | null;
    enabled?: boolean | null;
    sources?: Record<string, unknown> | null;
    zonePlan?: string | null;
  } | null;
}

export const PatchCsamScannerResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(
        Schema.Union([Schema.Literal("csam_scanner"), Schema.Null]),
      ),
      editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      value: Schema.optional(
        Schema.Union([
          Schema.Struct({
            email: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
            emailState: Schema.optional(
              Schema.Union([
                Schema.Union([
                  Schema.Literals(["valid", "pending", "unverified"]),
                  Schema.String,
                ]),
                Schema.Null,
              ]),
            ),
            enabled: Schema.optional(
              Schema.Union([Schema.Boolean, Schema.Null]),
            ),
            sources: Schema.optional(
              Schema.Union([
                Schema.Record(Schema.String, Schema.Unknown),
                Schema.Null,
              ]),
            ),
            zonePlan: Schema.optional(
              Schema.Union([Schema.String, Schema.Null]),
            ),
          }).pipe(
            Schema.encodeKeys({
              email: "email",
              emailState: "email_state",
              enabled: "enabled",
              sources: "sources",
              zonePlan: "zone_plan",
            }),
          ),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          editable: "editable",
          modifiedOn: "modified_on",
          value: "value",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<PatchCsamScannerResponse>;

export type PatchCsamScannerError = DefaultErrors;

export const patchCsamScanner: API.OperationMethod<
  PatchCsamScannerRequest,
  PatchCsamScannerResponse,
  PatchCsamScannerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchCsamScannerRequest,
  output: PatchCsamScannerResponse,
  errors: [],
}));
