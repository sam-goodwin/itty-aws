/**
 * Cloudflare ACM API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service acm
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

export class AdvancedCertificateManagerRequired extends Schema.TaggedErrorClass<AdvancedCertificateManagerRequired>()(
  "AdvancedCertificateManagerRequired",
  { code: Schema.Number, message: Schema.String },
) {}
T.applyErrorMatchers(AdvancedCertificateManagerRequired, [{ code: 1450 }]);

export class InvalidObjectIdentifier extends Schema.TaggedErrorClass<InvalidObjectIdentifier>()(
  "InvalidObjectIdentifier",
  { code: Schema.Number, message: Schema.String },
) {}
T.applyErrorMatchers(InvalidObjectIdentifier, [{ code: 7003 }]);

// =============================================================================
// CustomTrustStore
// =============================================================================

export interface GetCustomTrustStoreRequest {
  customOriginTrustStoreId: string;
  /** Identifier. */
  zoneId: string;
}

export const GetCustomTrustStoreRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customOriginTrustStoreId: Schema.String.pipe(
      T.HttpPath("customOriginTrustStoreId"),
    ),
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/zones/{zone_id}/acm/custom_trust_store/{customOriginTrustStoreId}",
    }),
  ) as unknown as Schema.Schema<GetCustomTrustStoreRequest>;

export interface GetCustomTrustStoreResponse {
  /** Identifier. */
  id: string;
  /** The root CA certificate in PEM format. Only root CA certificates are accepted; intermediate and leaf certificates are not supported. */
  certificate: string;
  /** When the certificate expires. */
  expiresOn: string;
  /** The certificate authority that issued the certificate. */
  issuer: string;
  /** The type of hash used for the certificate. */
  signature: string;
  /** Status of the zone's custom SSL. */
  status:
    | "initializing"
    | "pending_deployment"
    | "active"
    | "pending_deletion"
    | "deleted"
    | "expired"
    | (string & {});
  /** When the certificate was last modified. */
  updatedAt: string;
  /** When the certificate was uploaded to Cloudflare. */
  uploadedOn: string;
}

export const GetCustomTrustStoreResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    certificate: Schema.String,
    expiresOn: Schema.String,
    issuer: Schema.String,
    signature: Schema.String,
    status: Schema.Union([
      Schema.Literals([
        "initializing",
        "pending_deployment",
        "active",
        "pending_deletion",
        "deleted",
        "expired",
      ]),
      Schema.String,
    ]),
    updatedAt: Schema.String,
    uploadedOn: Schema.String,
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        certificate: "certificate",
        expiresOn: "expires_on",
        issuer: "issuer",
        signature: "signature",
        status: "status",
        updatedAt: "updated_at",
        uploadedOn: "uploaded_on",
      }),
    )
    .pipe(
      T.ResponsePath("result"),
    ) as unknown as Schema.Schema<GetCustomTrustStoreResponse>;

export type GetCustomTrustStoreError = DefaultErrors;

export const getCustomTrustStore: API.OperationMethod<
  GetCustomTrustStoreRequest,
  GetCustomTrustStoreResponse,
  GetCustomTrustStoreError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetCustomTrustStoreRequest,
  output: GetCustomTrustStoreResponse,
  errors: [],
}));

export interface ListCustomTrustStoresRequest {
  /** Path param: Identifier. */
  zoneId: string;
  page?: number;
  perPage?: number;
  /** Query param: Limit to the number of records returned. */
  limit?: number;
  /** Query param: Offset the results */
  offset?: number;
}

export const ListCustomTrustStoresRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
    perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
    limit: Schema.optional(Schema.Number).pipe(T.HttpQuery("limit")),
    offset: Schema.optional(Schema.Number).pipe(T.HttpQuery("offset")),
  }).pipe(
    T.Http({ method: "GET", path: "/zones/{zone_id}/acm/custom_trust_store" }),
  ) as unknown as Schema.Schema<ListCustomTrustStoresRequest>;

export interface ListCustomTrustStoresResponse {
  result: {
    id: string;
    certificate: string;
    expiresOn: string;
    issuer: string;
    signature: string;
    status:
      | "initializing"
      | "pending_deployment"
      | "active"
      | "pending_deletion"
      | "deleted"
      | "expired"
      | (string & {});
    updatedAt: string;
    uploadedOn: string;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListCustomTrustStoresResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    result: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        certificate: Schema.String,
        expiresOn: Schema.String,
        issuer: Schema.String,
        signature: Schema.String,
        status: Schema.Union([
          Schema.Literals([
            "initializing",
            "pending_deployment",
            "active",
            "pending_deletion",
            "deleted",
            "expired",
          ]),
          Schema.String,
        ]),
        updatedAt: Schema.String,
        uploadedOn: Schema.String,
      }).pipe(
        Schema.encodeKeys({
          id: "id",
          certificate: "certificate",
          expiresOn: "expires_on",
          issuer: "issuer",
          signature: "signature",
          status: "status",
          updatedAt: "updated_at",
          uploadedOn: "uploaded_on",
        }),
      ),
    ),
    resultInfo: Schema.optional(
      Schema.Union([
        Schema.Struct({
          count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
          page: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
          perPage: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
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
  }).pipe(
    Schema.encodeKeys({ result: "result", resultInfo: "result_info" }),
  ) as unknown as Schema.Schema<ListCustomTrustStoresResponse>;

export type ListCustomTrustStoresError = DefaultErrors;

export const listCustomTrustStores: API.PaginatedOperationMethod<
  ListCustomTrustStoresRequest,
  ListCustomTrustStoresResponse,
  ListCustomTrustStoresError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListCustomTrustStoresRequest,
  output: ListCustomTrustStoresResponse,
  errors: [],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateCustomTrustStoreRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: The root CA certificate in PEM format. Only root CA certificates are accepted; intermediate and leaf certificates are not supported. */
  certificate: string;
}

export const CreateCustomTrustStoreRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    certificate: Schema.String,
  }).pipe(
    T.Http({ method: "POST", path: "/zones/{zone_id}/acm/custom_trust_store" }),
  ) as unknown as Schema.Schema<CreateCustomTrustStoreRequest>;

export interface CreateCustomTrustStoreResponse {
  /** Identifier. */
  id: string;
  /** The root CA certificate in PEM format. Only root CA certificates are accepted; intermediate and leaf certificates are not supported. */
  certificate: string;
  /** When the certificate expires. */
  expiresOn: string;
  /** The certificate authority that issued the certificate. */
  issuer: string;
  /** The type of hash used for the certificate. */
  signature: string;
  /** Status of the zone's custom SSL. */
  status:
    | "initializing"
    | "pending_deployment"
    | "active"
    | "pending_deletion"
    | "deleted"
    | "expired"
    | (string & {});
  /** When the certificate was last modified. */
  updatedAt: string;
  /** When the certificate was uploaded to Cloudflare. */
  uploadedOn: string;
}

export const CreateCustomTrustStoreResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    certificate: Schema.String,
    expiresOn: Schema.String,
    issuer: Schema.String,
    signature: Schema.String,
    status: Schema.Union([
      Schema.Literals([
        "initializing",
        "pending_deployment",
        "active",
        "pending_deletion",
        "deleted",
        "expired",
      ]),
      Schema.String,
    ]),
    updatedAt: Schema.String,
    uploadedOn: Schema.String,
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        certificate: "certificate",
        expiresOn: "expires_on",
        issuer: "issuer",
        signature: "signature",
        status: "status",
        updatedAt: "updated_at",
        uploadedOn: "uploaded_on",
      }),
    )
    .pipe(
      T.ResponsePath("result"),
    ) as unknown as Schema.Schema<CreateCustomTrustStoreResponse>;

export type CreateCustomTrustStoreError = DefaultErrors;

export const createCustomTrustStore: API.OperationMethod<
  CreateCustomTrustStoreRequest,
  CreateCustomTrustStoreResponse,
  CreateCustomTrustStoreError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateCustomTrustStoreRequest,
  output: CreateCustomTrustStoreResponse,
  errors: [],
}));

export interface DeleteCustomTrustStoreRequest {
  customOriginTrustStoreId: string;
  /** Identifier. */
  zoneId: string;
}

export const DeleteCustomTrustStoreRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customOriginTrustStoreId: Schema.String.pipe(
      T.HttpPath("customOriginTrustStoreId"),
    ),
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/zones/{zone_id}/acm/custom_trust_store/{customOriginTrustStoreId}",
    }),
  ) as unknown as Schema.Schema<DeleteCustomTrustStoreRequest>;

export interface DeleteCustomTrustStoreResponse {
  /** Identifier. */
  id?: string | null;
}

export const DeleteCustomTrustStoreResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<DeleteCustomTrustStoreResponse>;

export type DeleteCustomTrustStoreError = DefaultErrors;

export const deleteCustomTrustStore: API.OperationMethod<
  DeleteCustomTrustStoreRequest,
  DeleteCustomTrustStoreResponse,
  DeleteCustomTrustStoreError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteCustomTrustStoreRequest,
  output: DeleteCustomTrustStoreResponse,
  errors: [],
}));

// =============================================================================
// TotalTl
// =============================================================================

export interface GetTotalTlRequest {
  /** Identifier. */
  zoneId: string;
}

export const GetTotalTlRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
}).pipe(
  T.Http({ method: "GET", path: "/zones/{zone_id}/acm/total_tls" }),
) as unknown as Schema.Schema<GetTotalTlRequest>;

export interface GetTotalTlResponse {
  /** The Certificate Authority that Total TLS certificates will be issued through. */
  certificateAuthority?:
    | "google"
    | "lets_encrypt"
    | "ssl_com"
    | (string & {})
    | null;
  /** If enabled, Total TLS will order a hostname specific TLS certificate for any proxied A, AAAA, or CNAME record in your zone. */
  enabled?: boolean | null;
  /** The validity period in days for the certificates ordered via Total TLS. */
  validityPeriod?: number | null;
}

export const GetTotalTlResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  certificateAuthority: Schema.optional(
    Schema.Union([
      Schema.Union([
        Schema.Literals(["google", "lets_encrypt", "ssl_com"]),
        Schema.String,
      ]),
      Schema.Null,
    ]),
  ),
  enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  validityPeriod: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
})
  .pipe(
    Schema.encodeKeys({
      certificateAuthority: "certificate_authority",
      enabled: "enabled",
      validityPeriod: "validity_period",
    }),
  )
  .pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<GetTotalTlResponse>;

export type GetTotalTlError =
  | DefaultErrors
  | InvalidObjectIdentifier
  | AdvancedCertificateManagerRequired;

export const getTotalTl: API.OperationMethod<
  GetTotalTlRequest,
  GetTotalTlResponse,
  GetTotalTlError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetTotalTlRequest,
  output: GetTotalTlResponse,
  errors: [InvalidObjectIdentifier, AdvancedCertificateManagerRequired],
}));

export interface UpdateTotalTlRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: If enabled, Total TLS will order a hostname specific TLS certificate for any proxied A, AAAA, or CNAME record in your zone. */
  enabled: boolean;
  /** Body param: The Certificate Authority that Total TLS certificates will be issued through. */
  certificateAuthority?: "google" | "lets_encrypt" | "ssl_com" | (string & {});
}

export const UpdateTotalTlRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  enabled: Schema.Boolean,
  certificateAuthority: Schema.optional(
    Schema.Union([
      Schema.Literals(["google", "lets_encrypt", "ssl_com"]),
      Schema.String,
    ]),
  ),
}).pipe(
  Schema.encodeKeys({
    enabled: "enabled",
    certificateAuthority: "certificate_authority",
  }),
  T.Http({ method: "POST", path: "/zones/{zone_id}/acm/total_tls" }),
) as unknown as Schema.Schema<UpdateTotalTlRequest>;

export interface UpdateTotalTlResponse {
  /** The Certificate Authority that Total TLS certificates will be issued through. */
  certificateAuthority?:
    | "google"
    | "lets_encrypt"
    | "ssl_com"
    | (string & {})
    | null;
  /** If enabled, Total TLS will order a hostname specific TLS certificate for any proxied A, AAAA, or CNAME record in your zone. */
  enabled?: boolean | null;
  /** The validity period in days for the certificates ordered via Total TLS. */
  validityPeriod?: "90" | null;
}

export const UpdateTotalTlResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  certificateAuthority: Schema.optional(
    Schema.Union([
      Schema.Union([
        Schema.Literals(["google", "lets_encrypt", "ssl_com"]),
        Schema.String,
      ]),
      Schema.Null,
    ]),
  ),
  enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  validityPeriod: Schema.optional(
    Schema.Union([Schema.Literal("90"), Schema.Null]),
  ),
})
  .pipe(
    Schema.encodeKeys({
      certificateAuthority: "certificate_authority",
      enabled: "enabled",
      validityPeriod: "validity_period",
    }),
  )
  .pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<UpdateTotalTlResponse>;

export type UpdateTotalTlError = DefaultErrors;

export const updateTotalTl: API.OperationMethod<
  UpdateTotalTlRequest,
  UpdateTotalTlResponse,
  UpdateTotalTlError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateTotalTlRequest,
  output: UpdateTotalTlResponse,
  errors: [],
}));

export interface EditTotalTlRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: If enabled, Total TLS will order a hostname specific TLS certificate for any proxied A, AAAA, or CNAME record in your zone. */
  enabled: boolean;
  /** Body param: The Certificate Authority that Total TLS certificates will be issued through. */
  certificateAuthority?: "google" | "lets_encrypt" | "ssl_com" | (string & {});
}

export const EditTotalTlRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  enabled: Schema.Boolean,
  certificateAuthority: Schema.optional(
    Schema.Union([
      Schema.Literals(["google", "lets_encrypt", "ssl_com"]),
      Schema.String,
    ]),
  ),
}).pipe(
  Schema.encodeKeys({
    enabled: "enabled",
    certificateAuthority: "certificate_authority",
  }),
  T.Http({ method: "POST", path: "/zones/{zone_id}/acm/total_tls" }),
) as unknown as Schema.Schema<EditTotalTlRequest>;

export interface EditTotalTlResponse {
  /** The Certificate Authority that Total TLS certificates will be issued through. */
  certificateAuthority?:
    | "google"
    | "lets_encrypt"
    | "ssl_com"
    | (string & {})
    | null;
  /** If enabled, Total TLS will order a hostname specific TLS certificate for any proxied A, AAAA, or CNAME record in your zone. */
  enabled?: boolean | null;
  /** The validity period in days for the certificates ordered via Total TLS. */
  validityPeriod?: "90" | null;
}

export const EditTotalTlResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  certificateAuthority: Schema.optional(
    Schema.Union([
      Schema.Union([
        Schema.Literals(["google", "lets_encrypt", "ssl_com"]),
        Schema.String,
      ]),
      Schema.Null,
    ]),
  ),
  enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  validityPeriod: Schema.optional(
    Schema.Union([Schema.Literal("90"), Schema.Null]),
  ),
})
  .pipe(
    Schema.encodeKeys({
      certificateAuthority: "certificate_authority",
      enabled: "enabled",
      validityPeriod: "validity_period",
    }),
  )
  .pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<EditTotalTlResponse>;

export type EditTotalTlError = DefaultErrors;

export const editTotalTl: API.OperationMethod<
  EditTotalTlRequest,
  EditTotalTlResponse,
  EditTotalTlError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: EditTotalTlRequest,
  output: EditTotalTlResponse,
  errors: [],
}));
