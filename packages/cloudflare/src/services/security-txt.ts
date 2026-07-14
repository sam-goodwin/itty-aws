/**
 * Cloudflare SECURITY-TXT API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service security-txt
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

export class SecurityTxtInvalid extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<SecurityTxtInvalid>()("SecurityTxtInvalid", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 10400, message: { includes: "invalid or missing values" } }],
) {}

// =============================================================================
// Shared nested schemas (hoisted, module-private)
// =============================================================================

interface GetSecurityTxtResponse2 {
  acknowledgments?: string[] | null;
  canonical?: string[] | null;
  contact?: string[] | null;
  enabled?: boolean | null;
  encryption?: string[] | null;
  expires?: string | null;
  hiring?: string[] | null;
  policy?: string[] | null;
  preferredLanguages?: string | null;
}
const GetSecurityTxtResponse2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    acknowledgments: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    canonical: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    contact: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    encryption: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    expires: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    hiring: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    policy: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    preferredLanguages: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      acknowledgments: "acknowledgments",
      canonical: "canonical",
      contact: "contact",
      enabled: "enabled",
      encryption: "encryption",
      expires: "expires",
      hiring: "hiring",
      policy: "policy",
      preferredLanguages: "preferred_languages",
    }),
  ),
) as unknown as Schema.Codec<GetSecurityTxtResponse2>;

interface Source {
  pointer?: string | null;
}
const Source = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    pointer: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Source>;

interface Error2 {
  code: number;
  message: string;
  documentationUrl?: string | null;
  source?: { pointer?: string | null } | null;
}
const Error2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    code: Schema.Number,
    message: Schema.String,
    documentationUrl: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    source: Schema.optional(Schema.Union([Source, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      code: "code",
      message: "message",
      documentationUrl: "documentation_url",
      source: "source",
    }),
  ),
) as unknown as Schema.Codec<Error2>;

// =============================================================================
// SecurityTxt
// =============================================================================

export interface GetSecurityTxtRequest {
  /** Identifier. */
  zoneId: string;
}

export const GetSecurityTxtRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/zones/{zone_id}/security-center/securitytxt",
    }),
  ),
) as unknown as Schema.Codec<GetSecurityTxtRequest>;

export type GetSecurityTxtResponse =
  | {
      acknowledgments?: string[] | null;
      canonical?: string[] | null;
      contact?: string[] | null;
      enabled?: boolean | null;
      encryption?: string[] | null;
      expires?: string | null;
      hiring?: string[] | null;
      policy?: string[] | null;
      preferredLanguages?: string | null;
    }
  | string;

export const GetSecurityTxtResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Union([GetSecurityTxtResponse2, Schema.String]).pipe(
      T.ResponsePath("result"),
    ),
  ) as unknown as Schema.Codec<GetSecurityTxtResponse>;

export type GetSecurityTxtError = DefaultErrors | Forbidden;

export const getSecurityTxt: API.OperationMethod<
  GetSecurityTxtRequest,
  GetSecurityTxtResponse,
  GetSecurityTxtError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSecurityTxtRequest,
  output: GetSecurityTxtResponse,
  errors: [Forbidden],
}));

export interface PutSecurityTxtRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param */
  acknowledgments?: string[];
  /** Body param */
  canonical?: string[];
  /** Body param */
  contact?: string[];
  /** Body param */
  enabled?: boolean;
  /** Body param */
  encryption?: string[];
  /** Body param */
  expires?: string;
  /** Body param */
  hiring?: string[];
  /** Body param */
  policy?: string[];
  /** Body param */
  preferredLanguages?: string;
}

export const PutSecurityTxtRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    acknowledgments: Schema.optional(Schema.Array(Schema.String)),
    canonical: Schema.optional(Schema.Array(Schema.String)),
    contact: Schema.optional(Schema.Array(Schema.String)),
    enabled: Schema.optional(Schema.Boolean),
    encryption: Schema.optional(Schema.Array(Schema.String)),
    expires: Schema.optional(Schema.String),
    hiring: Schema.optional(Schema.Array(Schema.String)),
    policy: Schema.optional(Schema.Array(Schema.String)),
    preferredLanguages: Schema.optional(Schema.String),
  }).pipe(
    Schema.encodeKeys({
      acknowledgments: "acknowledgments",
      canonical: "canonical",
      contact: "contact",
      enabled: "enabled",
      encryption: "encryption",
      expires: "expires",
      hiring: "hiring",
      policy: "policy",
      preferredLanguages: "preferred_languages",
    }),
    T.Http({
      method: "PUT",
      path: "/zones/{zone_id}/security-center/securitytxt",
    }),
  ),
) as unknown as Schema.Codec<PutSecurityTxtRequest>;

export interface PutSecurityTxtResponse {
  errors: {
    code: number;
    message: string;
    documentationUrl?: string | null;
    source?: { pointer?: string | null } | null;
  }[];
  messages: {
    code: number;
    message: string;
    documentationUrl?: string | null;
    source?: { pointer?: string | null } | null;
  }[];
  /** Whether the API call was successful. */
  success: true;
}

export const PutSecurityTxtResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      errors: Schema.Array(Error2),
      messages: Schema.Array(Error2),
      success: Schema.Literal(true),
    }),
  ) as unknown as Schema.Codec<PutSecurityTxtResponse>;

export type PutSecurityTxtError =
  | DefaultErrors
  | Forbidden
  | SecurityTxtInvalid;

export const putSecurityTxt: API.OperationMethod<
  PutSecurityTxtRequest,
  PutSecurityTxtResponse,
  PutSecurityTxtError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutSecurityTxtRequest,
  output: PutSecurityTxtResponse,
  errors: [Forbidden, SecurityTxtInvalid],
}));

export interface DeleteSecurityTxtRequest {
  /** Identifier. */
  zoneId: string;
}

export const DeleteSecurityTxtRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/zones/{zone_id}/security-center/securitytxt",
      }),
    ),
  ) as unknown as Schema.Codec<DeleteSecurityTxtRequest>;

export interface DeleteSecurityTxtResponse {
  errors: {
    code: number;
    message: string;
    documentationUrl?: string | null;
    source?: { pointer?: string | null } | null;
  }[];
  messages: {
    code: number;
    message: string;
    documentationUrl?: string | null;
    source?: { pointer?: string | null } | null;
  }[];
  /** Whether the API call was successful. */
  success: true;
}

export const DeleteSecurityTxtResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      errors: Schema.Array(Error2),
      messages: Schema.Array(Error2),
      success: Schema.Literal(true),
    }),
  ) as unknown as Schema.Codec<DeleteSecurityTxtResponse>;

export type DeleteSecurityTxtError = DefaultErrors | Forbidden;

export const deleteSecurityTxt: API.OperationMethod<
  DeleteSecurityTxtRequest,
  DeleteSecurityTxtResponse,
  DeleteSecurityTxtError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteSecurityTxtRequest,
  output: DeleteSecurityTxtResponse,
  errors: [Forbidden],
}));
