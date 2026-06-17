/**
 * Cloudflare ORIGIN-CA-CERTIFICATES API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service origin-ca-certificates
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

export class CertificateAlreadyRevoked extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<CertificateAlreadyRevoked>()(
    "CertificateAlreadyRevoked",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 1014 }],
) {}

export class CertificateNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<CertificateNotFound>()("CertificateNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1101 }],
) {}

export class CertificateRevocationFailed extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<CertificateRevocationFailed>()(
    "CertificateRevocationFailed",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 1000 }],
) {}

export class Forbidden extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<Forbidden>()("Forbidden", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 403 }],
) {}

export class HostnameNotAuthorized extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<HostnameNotAuthorized>()("HostnameNotAuthorized", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1010 }],
) {}

// =============================================================================
// OriginCaCertificate
// =============================================================================

export interface GetOriginCaCertificateRequest {
  certificateId: string;
}

export const GetOriginCaCertificateRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      certificateId: Schema.String.pipe(T.HttpPath("certificateId")),
    }).pipe(T.Http({ method: "GET", path: "/certificates/{certificateId}" })),
  ) as unknown as Schema.Schema<GetOriginCaCertificateRequest>;

export interface GetOriginCaCertificateResponse {
  /** The Certificate Signing Request (CSR). Must be newline-encoded. */
  csr?: string | null;
  /** Array of hostnames or wildcard names bound to the certificate. Hostnames must be fully qualified domain names (FQDNs) belonging to zones on your account (e.g., `example.com` or `sub.example.com`). Wil */
  hostnames: string[];
  /** Signature type desired on certificate ("origin-rsa" (rsa), "origin-ecc" (ecdsa), or "keyless-certificate" (for Keyless SSL servers). */
  requestType:
    | "origin-rsa"
    | "origin-ecc"
    | "keyless-certificate"
    | (string & {});
  /** The number of days for which the certificate should be valid. */
  requestedValidity?: number | null;
  /** Identifier. */
  id?: string | null;
  /** The Origin CA certificate. Will be newline-encoded. */
  certificate?: string | null;
  /** When the certificate will expire. */
  expiresOn?: string | null;
  revokedAt?: string | null;
}

export const GetOriginCaCertificateResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      csr: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      hostnames: Schema.Array(Schema.String),
      requestType: Schema.Union([
        Schema.Literals(["origin-rsa", "origin-ecc", "keyless-certificate"]),
        Schema.String,
      ]),
      requestedValidity: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      certificate: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      expiresOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      revokedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          csr: "csr",
          hostnames: "hostnames",
          requestType: "request_type",
          requestedValidity: "requested_validity",
          id: "id",
          certificate: "certificate",
          expiresOn: "expires_on",
          revokedAt: "revoked_at",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<GetOriginCaCertificateResponse>;

export type GetOriginCaCertificateError =
  | DefaultErrors
  | CertificateNotFound
  | Forbidden;

export const getOriginCaCertificate: API.OperationMethod<
  GetOriginCaCertificateRequest,
  GetOriginCaCertificateResponse,
  GetOriginCaCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOriginCaCertificateRequest,
  output: GetOriginCaCertificateResponse,
  errors: [CertificateNotFound, Forbidden],
}));

export interface ListOriginCaCertificatesRequest {
  page?: number;
  perPage?: number;
  /** Identifier. */
  zoneId: string;
  /** Limit to the number of records returned. */
  limit?: number;
  /** Offset the results. */
  offset?: number;
}

export const ListOriginCaCertificatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      zoneId: Schema.String.pipe(T.HttpQuery("zone_id")),
      limit: Schema.optional(Schema.Number).pipe(T.HttpQuery("limit")),
      offset: Schema.optional(Schema.Number).pipe(T.HttpQuery("offset")),
    }).pipe(T.Http({ method: "GET", path: "/certificates" })),
  ) as unknown as Schema.Schema<ListOriginCaCertificatesRequest>;

export interface ListOriginCaCertificatesResponse {
  result: {
    csr?: string | null;
    hostnames: string[];
    requestType?:
      | "origin-rsa"
      | "origin-ecc"
      | "keyless-certificate"
      | (string & {})
      | null;
    requestedValidity?: number | null;
    id?: string | null;
    certificate?: string | null;
    expiresOn?: string | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListOriginCaCertificatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Struct({
          csr: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          hostnames: Schema.Array(Schema.String),
          requestType: Schema.optional(
            Schema.Union([
              Schema.Union([
                Schema.Literals([
                  "origin-rsa",
                  "origin-ecc",
                  "keyless-certificate",
                ]),
                Schema.String,
              ]),
              Schema.Null,
            ]),
          ),
          requestedValidity: Schema.optional(
            Schema.Union([Schema.Number, Schema.Null]),
          ),
          id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          certificate: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          expiresOn: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
        }).pipe(
          Schema.encodeKeys({
            csr: "csr",
            hostnames: "hostnames",
            requestType: "request_type",
            requestedValidity: "requested_validity",
            id: "id",
            certificate: "certificate",
            expiresOn: "expires_on",
          }),
        ),
      ),
      resultInfo: Schema.optional(
        Schema.Union([
          Schema.Struct({
            count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
            page: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
            perPage: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
            totalCount: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
          }).pipe(
            Schema.encodeKeys({
              count: "count",
              page: "page",
              perPage: "per_page",
              totalCount: "total_count",
            }),
          ),
          Schema.Null,
        ]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
  ) as unknown as Schema.Schema<ListOriginCaCertificatesResponse>;

export type ListOriginCaCertificatesError = DefaultErrors | Forbidden;

export const listOriginCaCertificates: API.PaginatedOperationMethod<
  ListOriginCaCertificatesRequest,
  ListOriginCaCertificatesResponse,
  ListOriginCaCertificatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOriginCaCertificatesRequest,
  output: ListOriginCaCertificatesResponse,
  errors: [Forbidden],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateOriginCaCertificateRequest {
  /** The Certificate Signing Request (CSR). Must be newline-encoded. */
  csr: string;
  /** Array of hostnames or wildcard names bound to the certificate. Hostnames must be fully qualified domain names (FQDNs) belonging to zones on your account (e.g., `example.com` or `sub.example.com`). Wil */
  hostnames: string[];
  /** Signature type desired on certificate ("origin-rsa" (rsa), "origin-ecc" (ecdsa), or "keyless-certificate" (for Keyless SSL servers). */
  requestType:
    | "origin-rsa"
    | "origin-ecc"
    | "keyless-certificate"
    | (string & {});
  /** The number of days for which the certificate should be valid. */
  requestedValidity?: number;
}

export const CreateOriginCaCertificateRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      csr: Schema.String,
      hostnames: Schema.Array(Schema.String),
      requestType: Schema.Union([
        Schema.Literals(["origin-rsa", "origin-ecc", "keyless-certificate"]),
        Schema.String,
      ]),
      requestedValidity: Schema.optional(Schema.Number),
    }).pipe(
      Schema.encodeKeys({
        csr: "csr",
        hostnames: "hostnames",
        requestType: "request_type",
        requestedValidity: "requested_validity",
      }),
      T.Http({ method: "POST", path: "/certificates" }),
    ),
  ) as unknown as Schema.Schema<CreateOriginCaCertificateRequest>;

export interface CreateOriginCaCertificateResponse {
  /** The Certificate Signing Request (CSR). Must be newline-encoded. */
  csr: string;
  /** Array of hostnames or wildcard names bound to the certificate. Hostnames must be fully qualified domain names (FQDNs) belonging to zones on your account (e.g., `example.com` or `sub.example.com`). Wil */
  hostnames: string[];
  /** Signature type desired on certificate ("origin-rsa" (rsa), "origin-ecc" (ecdsa), or "keyless-certificate" (for Keyless SSL servers). */
  requestType:
    | "origin-rsa"
    | "origin-ecc"
    | "keyless-certificate"
    | (string & {});
  /** The number of days for which the certificate should be valid. */
  requestedValidity: number;
  /** Identifier. */
  id?: string | null;
  /** The Origin CA certificate. Will be newline-encoded. */
  certificate?: string | null;
  /** When the certificate will expire. */
  expiresOn?: string | null;
}

export const CreateOriginCaCertificateResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      csr: Schema.String,
      hostnames: Schema.Array(Schema.String),
      requestType: Schema.Union([
        Schema.Literals(["origin-rsa", "origin-ecc", "keyless-certificate"]),
        Schema.String,
      ]),
      requestedValidity: Schema.Number,
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      certificate: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      expiresOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          csr: "csr",
          hostnames: "hostnames",
          requestType: "request_type",
          requestedValidity: "requested_validity",
          id: "id",
          certificate: "certificate",
          expiresOn: "expires_on",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<CreateOriginCaCertificateResponse>;

export type CreateOriginCaCertificateError =
  | DefaultErrors
  | HostnameNotAuthorized
  | Forbidden;

export const createOriginCaCertificate: API.OperationMethod<
  CreateOriginCaCertificateRequest,
  CreateOriginCaCertificateResponse,
  CreateOriginCaCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateOriginCaCertificateRequest,
  output: CreateOriginCaCertificateResponse,
  errors: [HostnameNotAuthorized, Forbidden],
}));

export interface DeleteOriginCaCertificateRequest {
  certificateId: string;
}

export const DeleteOriginCaCertificateRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      certificateId: Schema.String.pipe(T.HttpPath("certificateId")),
    }).pipe(
      T.Http({ method: "DELETE", path: "/certificates/{certificateId}" }),
    ),
  ) as unknown as Schema.Schema<DeleteOriginCaCertificateRequest>;

export interface DeleteOriginCaCertificateResponse {
  /** Identifier. */
  id?: string | null;
  /** When the certificate was revoked. */
  revokedAt?: string | null;
}

export const DeleteOriginCaCertificateResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      revokedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(Schema.encodeKeys({ id: "id", revokedAt: "revoked_at" }))
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<DeleteOriginCaCertificateResponse>;

export type DeleteOriginCaCertificateError =
  | DefaultErrors
  | CertificateNotFound
  | CertificateAlreadyRevoked
  | CertificateRevocationFailed
  | Forbidden;

export const deleteOriginCaCertificate: API.OperationMethod<
  DeleteOriginCaCertificateRequest,
  DeleteOriginCaCertificateResponse,
  DeleteOriginCaCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteOriginCaCertificateRequest,
  output: DeleteOriginCaCertificateResponse,
  errors: [
    CertificateNotFound,
    CertificateAlreadyRevoked,
    CertificateRevocationFailed,
    Forbidden,
  ],
}));
