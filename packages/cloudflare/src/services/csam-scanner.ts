/**
 * Cloudflare CSAM-SCANNER API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service csam-scanner
 */

import * as Schema from "@distilled.cloud/core/schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";

// =============================================================================
// Shared nested schemas (hoisted, module-private)
// =============================================================================

interface Value {
  /** Notification email address for CSAM scan results. Masked in responses unless explicitly unmasked via admin endpoint. */
  email?: string | null;
  /** Current verification state of the notification email. */
  emailState?: "valid" | "pending" | "unverified" | (string & {}) | null;
  /** Whether CSAM scanning is enabled for this zone. */
  enabled?: boolean | null;
  /** Map of scanning sources and their enabled state. */
  sources?: Record<string, unknown> | null;
  /** The zone's plan level. */
  zonePlan?: string | null;
}
const Value = /*@__PURE__*/ Schema.suspend(() =>
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
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    sources: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
    zonePlan: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      email: "email",
      emailState: "email_state",
      enabled: "enabled",
      sources: "sources",
      zonePlan: "zone_plan",
    }),
  ),
) as unknown as Schema.Codec<Value>;

interface Value2 {
  /** Notification email address for CSAM scan results. When changed, email verification is triggered automatically. */
  email?: string | null;
  /** Whether CSAM scanning is enabled for this zone. */
  enabled?: boolean | null;
  /** Set to true to trigger re-sending the email verification. Write-only; never appears in responses (omitted when false). */
  resendEmail?: boolean | null;
  /** Map of scanning sources and their enabled state. */
  sources?: Record<string, unknown> | null;
}
const Value2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    email: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    resendEmail: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    sources: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      email: "email",
      enabled: "enabled",
      resendEmail: "resend_email",
      sources: "sources",
    }),
  ),
) as unknown as Schema.Codec<Value2>;

// =============================================================================
// CsamScanner
// =============================================================================

export interface GetCsamScannerRequest {
  /** Identifier for the zone. */
  zoneId: string;
}

export const GetCsamScannerRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/zones/{zone_id}/settings/csam_scanner_third_party",
    }),
  ),
) as unknown as Schema.Codec<GetCsamScannerRequest>;

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
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(
        Schema.Union([Schema.Literal("csam_scanner"), Schema.Null]),
      ),
      editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      value: Schema.optional(Schema.Union([Value, Schema.Null])),
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
  ) as unknown as Schema.Codec<GetCsamScannerResponse>;

export type GetCsamScannerError = DefaultErrors;

export const getCsamScanner: API.OperationMethod<
  GetCsamScannerRequest,
  GetCsamScannerResponse,
  GetCsamScannerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
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
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      id: Schema.optional(Schema.Literal("csam_scanner")),
      value: Schema.optional(Value2),
    }).pipe(
      T.Http({
        method: "PATCH",
        path: "/zones/{zone_id}/settings/csam_scanner_third_party",
      }),
    ),
  ) as unknown as Schema.Codec<PatchCsamScannerRequest>;

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
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(
        Schema.Union([Schema.Literal("csam_scanner"), Schema.Null]),
      ),
      editable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      value: Schema.optional(Schema.Union([Value, Schema.Null])),
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
  ) as unknown as Schema.Codec<PatchCsamScannerResponse>;

export type PatchCsamScannerError = DefaultErrors;

export const patchCsamScanner: API.OperationMethod<
  PatchCsamScannerRequest,
  PatchCsamScannerResponse,
  PatchCsamScannerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchCsamScannerRequest,
  output: PatchCsamScannerResponse,
  errors: [],
}));
