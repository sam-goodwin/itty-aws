/**
 * Cloudflare CUSTOM-HOSTNAMES API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service custom-hostnames
 */

import * as stream from "effect/Stream";
import * as Schema from "effect/Schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";

// =============================================================================
// Shared Types
// =============================================================================

export interface CustomCERTBundle {
  customCertificate: string;
  customKey: string;
}

export const CustomCERTBundle: Schema.Schema<CustomCERTBundle> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      customCertificate: Schema.String,
      customKey: Schema.String,
    }).pipe(
      Schema.encodeKeys({
        customCertificate: "custom_certificate",
        customKey: "custom_key",
      }),
    ),
  ) as unknown as Schema.Schema<CustomCERTBundle>;

export interface OwnershipVerification {
  name?: string | null;
  type?: "txt" | null;
  value?: string | null;
}

export const OwnershipVerification: Schema.Schema<OwnershipVerification> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      type: Schema.optional(Schema.Union([Schema.Literal("txt"), Schema.Null])),
      value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }),
  ) as unknown as Schema.Schema<OwnershipVerification>;

export interface OwnershipVerificationHTTP {
  httpBody?: string | null;
  httpUrl?: string | null;
}

export const OwnershipVerificationHTTP: Schema.Schema<OwnershipVerificationHTTP> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      httpBody: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      httpUrl: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(Schema.encodeKeys({ httpBody: "http_body", httpUrl: "http_url" })),
  ) as unknown as Schema.Schema<OwnershipVerificationHTTP>;

export interface Settings {
  ciphers?: string[] | null;
  earlyHints?: "on" | "off" | null;
  http2?: "on" | "off" | null;
  minTlsVersion?: "1.0" | "1.1" | "1.2" | "1.3" | null;
  tls_1_3?: "on" | "off" | null;
}

export const Settings: Schema.Schema<Settings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      ciphers: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      earlyHints: Schema.optional(
        Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
      ),
      http2: Schema.optional(
        Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
      ),
      minTlsVersion: Schema.optional(
        Schema.Union([
          Schema.Literals(["1.0", "1.1", "1.2", "1.3"]),
          Schema.Null,
        ]),
      ),
      tls_1_3: Schema.optional(
        Schema.Union([Schema.Literals(["on", "off"]), Schema.Null]),
      ),
    }).pipe(
      Schema.encodeKeys({
        ciphers: "ciphers",
        earlyHints: "early_hints",
        http2: "http2",
        minTlsVersion: "min_tls_version",
        tls_1_3: "tls_1_3",
      }),
    ),
  ) as unknown as Schema.Schema<Settings>;

export interface Ssl {
  id?: string | null;
  bundleMethod?: "ubiquitous" | "optimal" | "force" | null;
  certificateAuthority?:
    | "digicert"
    | "google"
    | "lets_encrypt"
    | "ssl_com"
    | null;
  customCertificate?: string | null;
  customCsrId?: string | null;
  customKey?: string | null;
  expiresOn?: string | null;
  hosts?: string[] | null;
  issuer?: string | null;
  method?: "http" | "txt" | "email" | null;
  serialNumber?: string | null;
  settings?: Settings | null;
  signature?: string | null;
  status?:
    | "initializing"
    | "pending_validation"
    | "deleted"
    | "pending_issuance"
    | "pending_deployment"
    | "pending_deletion"
    | "pending_expiration"
    | "expired"
    | "active"
    | "initializing_timed_out"
    | "validation_timed_out"
    | "issuance_timed_out"
    | "deployment_timed_out"
    | "deletion_timed_out"
    | "pending_cleanup"
    | "staging_deployment"
    | "staging_active"
    | "deactivating"
    | "inactive"
    | "backup_issued"
    | "holding_deployment"
    | null;
  type?: "dv" | null;
  uploadedOn?: string | null;
  validationErrors?: ValidationError[] | null;
  validationRecords?: ValidationRecord[] | null;
  wildcard?: boolean | null;
}

export const Ssl: Schema.Schema<Ssl> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      bundleMethod: Schema.optional(
        Schema.Union([
          Schema.Literals(["ubiquitous", "optimal", "force"]),
          Schema.Null,
        ]),
      ),
      certificateAuthority: Schema.optional(
        Schema.Union([
          Schema.Literals(["digicert", "google", "lets_encrypt", "ssl_com"]),
          Schema.Null,
        ]),
      ),
      customCertificate: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      customCsrId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      customKey: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      expiresOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      hosts: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      issuer: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      method: Schema.optional(
        Schema.Union([Schema.Literals(["http", "txt", "email"]), Schema.Null]),
      ),
      serialNumber: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
      signature: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      status: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "initializing",
            "pending_validation",
            "deleted",
            "pending_issuance",
            "pending_deployment",
            "pending_deletion",
            "pending_expiration",
            "expired",
            "active",
            "initializing_timed_out",
            "validation_timed_out",
            "issuance_timed_out",
            "deployment_timed_out",
            "deletion_timed_out",
            "pending_cleanup",
            "staging_deployment",
            "staging_active",
            "deactivating",
            "inactive",
            "backup_issued",
            "holding_deployment",
          ]),
          Schema.Null,
        ]),
      ),
      type: Schema.optional(Schema.Union([Schema.Literal("dv"), Schema.Null])),
      uploadedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      validationErrors: Schema.optional(
        Schema.Union([Schema.Array(ValidationError), Schema.Null]),
      ),
      validationRecords: Schema.optional(
        Schema.Union([Schema.Array(ValidationRecord), Schema.Null]),
      ),
      wildcard: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        bundleMethod: "bundle_method",
        certificateAuthority: "certificate_authority",
        customCertificate: "custom_certificate",
        customCsrId: "custom_csr_id",
        customKey: "custom_key",
        expiresOn: "expires_on",
        hosts: "hosts",
        issuer: "issuer",
        method: "method",
        serialNumber: "serial_number",
        settings: "settings",
        signature: "signature",
        status: "status",
        type: "type",
        uploadedOn: "uploaded_on",
        validationErrors: "validation_errors",
        validationRecords: "validation_records",
        wildcard: "wildcard",
      }),
    ),
  ) as unknown as Schema.Schema<Ssl>;

export interface ValidationError {
  message?: string | null;
}

export const ValidationError: Schema.Schema<ValidationError> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      message: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }),
  ) as unknown as Schema.Schema<ValidationError>;

export interface ValidationRecord {
  emails?: string[] | null;
  httpBody?: string | null;
  httpUrl?: string | null;
  txtName?: string | null;
  txtValue?: string | null;
}

export const ValidationRecord: Schema.Schema<ValidationRecord> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      emails: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      httpBody: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      httpUrl: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      txtName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      txtValue: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        emails: "emails",
        httpBody: "http_body",
        httpUrl: "http_url",
        txtName: "txt_name",
        txtValue: "txt_value",
      }),
    ),
  ) as unknown as Schema.Schema<ValidationRecord>;

// =============================================================================
// CertificatePackCertificate
// =============================================================================

export interface PutCertificatePackCertificateRequest {
  customHostnameId: string;
  certificatePackId: string;
  certificateId: string;
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: If a custom uploaded certificate is used. */
  customCertificate: string;
  /** Body param: The key for a custom uploaded certificate. */
  customKey: string;
}

export const PutCertificatePackCertificateRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customHostnameId: Schema.String.pipe(T.HttpPath("customHostnameId")),
    certificatePackId: Schema.String.pipe(T.HttpPath("certificatePackId")),
    certificateId: Schema.String.pipe(T.HttpPath("certificateId")),
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    customCertificate: Schema.String,
    customKey: Schema.String,
  }).pipe(
    Schema.encodeKeys({
      customCertificate: "custom_certificate",
      customKey: "custom_key",
    }),
    T.Http({
      method: "PUT",
      path: "/zones/{zone_id}/custom_hostnames/{customHostnameId}/certificate_pack/{certificatePackId}/certificates/{certificateId}",
    }),
  ) as unknown as Schema.Schema<PutCertificatePackCertificateRequest>;

export interface PutCertificatePackCertificateResponse {
  /** Identifier. */
  id: string;
  /** The custom hostname that will point to your hostname via CNAME. */
  hostname: string;
  ssl: Ssl;
  /** This is the time the hostname was created. */
  createdAt?: string | null;
  /** Unique key/value metadata for this hostname. These are per-hostname (customer) settings. */
  customMetadata?: Record<string, unknown> | null;
  /** a valid hostname that’s been added to your DNS zone as an A, AAAA, or CNAME record. */
  customOriginServer?: string | null;
  /** A hostname that will be sent to your custom origin server as SNI for TLS handshake. This can be a valid subdomain of the zone or custom origin server name or the string ':request_host_header:' which w */
  customOriginSni?: string | null;
  /** This is a record which can be placed to activate a hostname. */
  ownershipVerification?: OwnershipVerification | null;
  /** This presents the token to be served by the given http url to activate a hostname. */
  ownershipVerificationHttp?: OwnershipVerificationHTTP | null;
  /** Status of the hostname's activation. */
  status?:
    | "active"
    | "pending"
    | "active_redeploying"
    | "moved"
    | "pending_deletion"
    | "deleted"
    | "pending_blocked"
    | "pending_migration"
    | "pending_provisioned"
    | "test_pending"
    | "test_active"
    | "test_active_apex"
    | "test_blocked"
    | "test_failed"
    | "provisioned"
    | "blocked"
    | null;
  /** These are errors that were encountered while trying to activate a hostname. */
  verificationErrors?: string[] | null;
}

export const PutCertificatePackCertificateResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    hostname: Schema.String,
    ssl: Ssl,
    createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    customMetadata: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
    customOriginServer: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    customOriginSni: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    ownershipVerification: Schema.optional(
      Schema.Union([OwnershipVerification, Schema.Null]),
    ),
    ownershipVerificationHttp: Schema.optional(
      Schema.Union([OwnershipVerificationHTTP, Schema.Null]),
    ),
    status: Schema.optional(
      Schema.Union([
        Schema.Literals([
          "active",
          "pending",
          "active_redeploying",
          "moved",
          "pending_deletion",
          "deleted",
          "pending_blocked",
          "pending_migration",
          "pending_provisioned",
          "test_pending",
          "test_active",
          "test_active_apex",
          "test_blocked",
          "test_failed",
          "provisioned",
          "blocked",
        ]),
        Schema.Null,
      ]),
    ),
    verificationErrors: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        hostname: "hostname",
        ssl: "ssl",
        createdAt: "created_at",
        customMetadata: "custom_metadata",
        customOriginServer: "custom_origin_server",
        customOriginSni: "custom_origin_sni",
        ownershipVerification: "ownership_verification",
        ownershipVerificationHttp: "ownership_verification_http",
        status: "status",
        verificationErrors: "verification_errors",
      }),
    )
    .pipe(
      T.ResponsePath("result"),
    ) as unknown as Schema.Schema<PutCertificatePackCertificateResponse>;

export type PutCertificatePackCertificateError = DefaultErrors;

export const putCertificatePackCertificate: API.OperationMethod<
  PutCertificatePackCertificateRequest,
  PutCertificatePackCertificateResponse,
  PutCertificatePackCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PutCertificatePackCertificateRequest,
  output: PutCertificatePackCertificateResponse,
  errors: [],
}));

export interface DeleteCertificatePackCertificateRequest {
  customHostnameId: string;
  certificatePackId: string;
  certificateId: string;
  /** Identifier. */
  zoneId: string;
}

export const DeleteCertificatePackCertificateRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customHostnameId: Schema.String.pipe(T.HttpPath("customHostnameId")),
    certificatePackId: Schema.String.pipe(T.HttpPath("certificatePackId")),
    certificateId: Schema.String.pipe(T.HttpPath("certificateId")),
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/zones/{zone_id}/custom_hostnames/{customHostnameId}/certificate_pack/{certificatePackId}/certificates/{certificateId}",
    }),
  ) as unknown as Schema.Schema<DeleteCertificatePackCertificateRequest>;

export interface DeleteCertificatePackCertificateResponse {
  /** Identifier. */
  id?: string | null;
}

export const DeleteCertificatePackCertificateResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }) as unknown as Schema.Schema<DeleteCertificatePackCertificateResponse>;

export type DeleteCertificatePackCertificateError = DefaultErrors;

export const deleteCertificatePackCertificate: API.OperationMethod<
  DeleteCertificatePackCertificateRequest,
  DeleteCertificatePackCertificateResponse,
  DeleteCertificatePackCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteCertificatePackCertificateRequest,
  output: DeleteCertificatePackCertificateResponse,
  errors: [],
}));

// =============================================================================
// CustomHostname
// =============================================================================

export interface GetCustomHostnameRequest {
  customHostnameId: string;
  /** Identifier. */
  zoneId: string;
}

export const GetCustomHostnameRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customHostnameId: Schema.String.pipe(T.HttpPath("customHostnameId")),
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/zones/{zone_id}/custom_hostnames/{customHostnameId}",
    }),
  ) as unknown as Schema.Schema<GetCustomHostnameRequest>;

export interface GetCustomHostnameResponse {
  /** Identifier. */
  id: string;
  /** The custom hostname that will point to your hostname via CNAME. */
  hostname: string;
  ssl: Ssl;
  /** This is the time the hostname was created. */
  createdAt?: string | null;
  /** Unique key/value metadata for this hostname. These are per-hostname (customer) settings. */
  customMetadata?: Record<string, unknown> | null;
  /** a valid hostname that’s been added to your DNS zone as an A, AAAA, or CNAME record. */
  customOriginServer?: string | null;
  /** A hostname that will be sent to your custom origin server as SNI for TLS handshake. This can be a valid subdomain of the zone or custom origin server name or the string ':request_host_header:' which w */
  customOriginSni?: string | null;
  /** This is a record which can be placed to activate a hostname. */
  ownershipVerification?: OwnershipVerification | null;
  /** This presents the token to be served by the given http url to activate a hostname. */
  ownershipVerificationHttp?: OwnershipVerificationHTTP | null;
  /** Status of the hostname's activation. */
  status?:
    | "active"
    | "pending"
    | "active_redeploying"
    | "moved"
    | "pending_deletion"
    | "deleted"
    | "pending_blocked"
    | "pending_migration"
    | "pending_provisioned"
    | "test_pending"
    | "test_active"
    | "test_active_apex"
    | "test_blocked"
    | "test_failed"
    | "provisioned"
    | "blocked"
    | null;
  /** These are errors that were encountered while trying to activate a hostname. */
  verificationErrors?: string[] | null;
}

export const GetCustomHostnameResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    hostname: Schema.String,
    ssl: Ssl,
    createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    customMetadata: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
    customOriginServer: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    customOriginSni: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    ownershipVerification: Schema.optional(
      Schema.Union([OwnershipVerification, Schema.Null]),
    ),
    ownershipVerificationHttp: Schema.optional(
      Schema.Union([OwnershipVerificationHTTP, Schema.Null]),
    ),
    status: Schema.optional(
      Schema.Union([
        Schema.Literals([
          "active",
          "pending",
          "active_redeploying",
          "moved",
          "pending_deletion",
          "deleted",
          "pending_blocked",
          "pending_migration",
          "pending_provisioned",
          "test_pending",
          "test_active",
          "test_active_apex",
          "test_blocked",
          "test_failed",
          "provisioned",
          "blocked",
        ]),
        Schema.Null,
      ]),
    ),
    verificationErrors: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        hostname: "hostname",
        ssl: "ssl",
        createdAt: "created_at",
        customMetadata: "custom_metadata",
        customOriginServer: "custom_origin_server",
        customOriginSni: "custom_origin_sni",
        ownershipVerification: "ownership_verification",
        ownershipVerificationHttp: "ownership_verification_http",
        status: "status",
        verificationErrors: "verification_errors",
      }),
    )
    .pipe(
      T.ResponsePath("result"),
    ) as unknown as Schema.Schema<GetCustomHostnameResponse>;

export type GetCustomHostnameError = DefaultErrors;

export const getCustomHostname: API.OperationMethod<
  GetCustomHostnameRequest,
  GetCustomHostnameResponse,
  GetCustomHostnameError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetCustomHostnameRequest,
  output: GetCustomHostnameResponse,
  errors: [],
}));

export interface ListCustomHostnamesRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Query param: Hostname ID to match against. This ID was generated and returned during the initial custom_hostname creation. This parameter cannot be used with the 'hostname' parameter. */
  id?: string;
  /** Query param: Direction to order hostnames. */
  direction?: "asc" | "desc";
  /** Query param: Fully qualified domain name to match against. This parameter cannot be used with the 'id' parameter. */
  hostname?: string;
  /** Query param: Field to order hostnames by. */
  order?: "ssl" | "ssl_status";
  /** Query param: Whether to filter hostnames based on if they have SSL enabled. */
  ssl?: "0" | "1";
}

export const ListCustomHostnamesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    id: Schema.optional(Schema.String).pipe(T.HttpQuery("id")),
    direction: Schema.optional(Schema.Literals(["asc", "desc"])).pipe(
      T.HttpQuery("direction"),
    ),
    hostname: Schema.optional(Schema.String).pipe(T.HttpQuery("hostname")),
    order: Schema.optional(Schema.Literals(["ssl", "ssl_status"])).pipe(
      T.HttpQuery("order"),
    ),
    ssl: Schema.optional(Schema.Literals(["0", "1"])).pipe(T.HttpQuery("ssl")),
  }).pipe(
    T.Http({ method: "GET", path: "/zones/{zone_id}/custom_hostnames" }),
  ) as unknown as Schema.Schema<ListCustomHostnamesRequest>;

export interface ListCustomHostnamesResponse {
  result: {
    id: string;
    hostname: string;
    ssl: Ssl;
    createdAt?: string | null;
    customMetadata?: Record<string, unknown> | null;
    customOriginServer?: string | null;
    customOriginSni?: string | null;
    ownershipVerification?: OwnershipVerification | null;
    ownershipVerificationHttp?: OwnershipVerificationHTTP | null;
    status?:
      | "active"
      | "pending"
      | "active_redeploying"
      | "moved"
      | "pending_deletion"
      | "deleted"
      | "pending_blocked"
      | "pending_migration"
      | "pending_provisioned"
      | "test_pending"
      | "test_active"
      | "test_active_apex"
      | "test_blocked"
      | "test_failed"
      | "provisioned"
      | "blocked"
      | null;
    verificationErrors?: string[] | null;
  }[];
  resultInfo: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  };
}

export const ListCustomHostnamesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    result: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        hostname: Schema.String,
        ssl: Ssl,
        createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        customMetadata: Schema.optional(
          Schema.Union([
            Schema.Record(Schema.String, Schema.Unknown),
            Schema.Null,
          ]),
        ),
        customOriginServer: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        customOriginSni: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        ownershipVerification: Schema.optional(
          Schema.Union([OwnershipVerification, Schema.Null]),
        ),
        ownershipVerificationHttp: Schema.optional(
          Schema.Union([OwnershipVerificationHTTP, Schema.Null]),
        ),
        status: Schema.optional(
          Schema.Union([
            Schema.Literals([
              "active",
              "pending",
              "active_redeploying",
              "moved",
              "pending_deletion",
              "deleted",
              "pending_blocked",
              "pending_migration",
              "pending_provisioned",
              "test_pending",
              "test_active",
              "test_active_apex",
              "test_blocked",
              "test_failed",
              "provisioned",
              "blocked",
            ]),
            Schema.Null,
          ]),
        ),
        verificationErrors: Schema.optional(
          Schema.Union([Schema.Array(Schema.String), Schema.Null]),
        ),
      }).pipe(
        Schema.encodeKeys({
          id: "id",
          hostname: "hostname",
          ssl: "ssl",
          createdAt: "created_at",
          customMetadata: "custom_metadata",
          customOriginServer: "custom_origin_server",
          customOriginSni: "custom_origin_sni",
          ownershipVerification: "ownership_verification",
          ownershipVerificationHttp: "ownership_verification_http",
          status: "status",
          verificationErrors: "verification_errors",
        }),
      ),
    ),
    resultInfo: Schema.Struct({
      count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      page: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      perPage: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      totalCount: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        count: "count",
        page: "page",
        perPage: "per_page",
        totalCount: "total_count",
      }),
    ),
  }).pipe(
    Schema.encodeKeys({ result: "result", resultInfo: "result_info" }),
  ) as unknown as Schema.Schema<ListCustomHostnamesResponse>;

export type ListCustomHostnamesError = DefaultErrors;

export const listCustomHostnames: API.PaginatedOperationMethod<
  ListCustomHostnamesRequest,
  ListCustomHostnamesResponse,
  ListCustomHostnamesError,
  Credentials | HttpClient.HttpClient
> & {
  pages: (
    input: ListCustomHostnamesRequest,
  ) => stream.Stream<
    ListCustomHostnamesResponse,
    ListCustomHostnamesError,
    Credentials | HttpClient.HttpClient
  >;
  items: (input: ListCustomHostnamesRequest) => stream.Stream<
    {
      id: string;
      hostname: string;
      ssl: Ssl;
      createdAt?: string | null;
      customMetadata?: Record<string, unknown> | null;
      customOriginServer?: string | null;
      customOriginSni?: string | null;
      ownershipVerification?: OwnershipVerification | null;
      ownershipVerificationHttp?: OwnershipVerificationHTTP | null;
      status?:
        | "active"
        | "pending"
        | "active_redeploying"
        | "moved"
        | "pending_deletion"
        | "deleted"
        | "pending_blocked"
        | "pending_migration"
        | "pending_provisioned"
        | "test_pending"
        | "test_active"
        | "test_active_apex"
        | "test_blocked"
        | "test_failed"
        | "provisioned"
        | "blocked"
        | null;
      verificationErrors?: string[] | null;
    },
    ListCustomHostnamesError,
    Credentials | HttpClient.HttpClient
  >;
} = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListCustomHostnamesRequest,
  output: ListCustomHostnamesResponse,
  errors: [],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateCustomHostnameRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: The custom hostname that will point to your hostname via CNAME. */
  hostname: string;
  /** Body param: Unique key/value metadata for this hostname. These are per-hostname (customer) settings. */
  customMetadata?: Record<string, unknown>;
  /** Body param: SSL properties used when creating the custom hostname. */
  ssl?: {
    bundleMethod?: "ubiquitous" | "optimal" | "force";
    certificateAuthority?: "digicert" | "google" | "lets_encrypt" | "ssl_com";
    cloudflareBranding?: boolean;
    customCertBundle?: CustomCERTBundle[];
    customCertificate?: string;
    customKey?: string;
    method?: "http" | "txt" | "email";
    settings?: Settings;
    type?: "dv";
    wildcard?: boolean;
  };
}

export const CreateCustomHostnameRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    hostname: Schema.String,
    customMetadata: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    ssl: Schema.optional(
      Schema.Struct({
        bundleMethod: Schema.optional(
          Schema.Literals(["ubiquitous", "optimal", "force"]),
        ),
        certificateAuthority: Schema.optional(
          Schema.Literals(["digicert", "google", "lets_encrypt", "ssl_com"]),
        ),
        cloudflareBranding: Schema.optional(Schema.Boolean),
        customCertBundle: Schema.optional(Schema.Array(CustomCERTBundle)),
        customCertificate: Schema.optional(Schema.String),
        customKey: Schema.optional(Schema.String),
        method: Schema.optional(Schema.Literals(["http", "txt", "email"])),
        settings: Schema.optional(Settings),
        type: Schema.optional(Schema.Literal("dv")),
        wildcard: Schema.optional(Schema.Boolean),
      }).pipe(
        Schema.encodeKeys({
          bundleMethod: "bundle_method",
          certificateAuthority: "certificate_authority",
          cloudflareBranding: "cloudflare_branding",
          customCertBundle: "custom_cert_bundle",
          customCertificate: "custom_certificate",
          customKey: "custom_key",
          method: "method",
          settings: "settings",
          type: "type",
          wildcard: "wildcard",
        }),
      ),
    ),
  }).pipe(
    Schema.encodeKeys({
      hostname: "hostname",
      customMetadata: "custom_metadata",
      ssl: "ssl",
    }),
    T.Http({ method: "POST", path: "/zones/{zone_id}/custom_hostnames" }),
  ) as unknown as Schema.Schema<CreateCustomHostnameRequest>;

export interface CreateCustomHostnameResponse {
  /** Identifier. */
  id: string;
  /** The custom hostname that will point to your hostname via CNAME. */
  hostname: string;
  ssl: Ssl;
  /** This is the time the hostname was created. */
  createdAt?: string | null;
  /** Unique key/value metadata for this hostname. These are per-hostname (customer) settings. */
  customMetadata?: Record<string, unknown> | null;
  /** a valid hostname that’s been added to your DNS zone as an A, AAAA, or CNAME record. */
  customOriginServer?: string | null;
  /** A hostname that will be sent to your custom origin server as SNI for TLS handshake. This can be a valid subdomain of the zone or custom origin server name or the string ':request_host_header:' which w */
  customOriginSni?: string | null;
  /** This is a record which can be placed to activate a hostname. */
  ownershipVerification?: OwnershipVerification | null;
  /** This presents the token to be served by the given http url to activate a hostname. */
  ownershipVerificationHttp?: OwnershipVerificationHTTP | null;
  /** Status of the hostname's activation. */
  status?:
    | "active"
    | "pending"
    | "active_redeploying"
    | "moved"
    | "pending_deletion"
    | "deleted"
    | "pending_blocked"
    | "pending_migration"
    | "pending_provisioned"
    | "test_pending"
    | "test_active"
    | "test_active_apex"
    | "test_blocked"
    | "test_failed"
    | "provisioned"
    | "blocked"
    | null;
  /** These are errors that were encountered while trying to activate a hostname. */
  verificationErrors?: string[] | null;
}

export const CreateCustomHostnameResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    hostname: Schema.String,
    ssl: Ssl,
    createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    customMetadata: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
    customOriginServer: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    customOriginSni: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    ownershipVerification: Schema.optional(
      Schema.Union([OwnershipVerification, Schema.Null]),
    ),
    ownershipVerificationHttp: Schema.optional(
      Schema.Union([OwnershipVerificationHTTP, Schema.Null]),
    ),
    status: Schema.optional(
      Schema.Union([
        Schema.Literals([
          "active",
          "pending",
          "active_redeploying",
          "moved",
          "pending_deletion",
          "deleted",
          "pending_blocked",
          "pending_migration",
          "pending_provisioned",
          "test_pending",
          "test_active",
          "test_active_apex",
          "test_blocked",
          "test_failed",
          "provisioned",
          "blocked",
        ]),
        Schema.Null,
      ]),
    ),
    verificationErrors: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        hostname: "hostname",
        ssl: "ssl",
        createdAt: "created_at",
        customMetadata: "custom_metadata",
        customOriginServer: "custom_origin_server",
        customOriginSni: "custom_origin_sni",
        ownershipVerification: "ownership_verification",
        ownershipVerificationHttp: "ownership_verification_http",
        status: "status",
        verificationErrors: "verification_errors",
      }),
    )
    .pipe(
      T.ResponsePath("result"),
    ) as unknown as Schema.Schema<CreateCustomHostnameResponse>;

export type CreateCustomHostnameError = DefaultErrors;

export const createCustomHostname: API.OperationMethod<
  CreateCustomHostnameRequest,
  CreateCustomHostnameResponse,
  CreateCustomHostnameError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateCustomHostnameRequest,
  output: CreateCustomHostnameResponse,
  errors: [],
}));

export interface PatchCustomHostnameRequest {
  customHostnameId: string;
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: Unique key/value metadata for this hostname. These are per-hostname (customer) settings. */
  customMetadata?: Record<string, unknown>;
  /** Body param: a valid hostname that’s been added to your DNS zone as an A, AAAA, or CNAME record. */
  customOriginServer?: string;
  /** Body param: A hostname that will be sent to your custom origin server as SNI for TLS handshake. This can be a valid subdomain of the zone or custom origin server name or the string ':request_host_head */
  customOriginSni?: string;
  /** Body param: SSL properties used when creating the custom hostname. */
  ssl?: {
    bundleMethod?: "ubiquitous" | "optimal" | "force";
    certificateAuthority?: "digicert" | "google" | "lets_encrypt" | "ssl_com";
    cloudflareBranding?: boolean;
    customCertBundle?: CustomCERTBundle[];
    customCertificate?: string;
    customKey?: string;
    method?: "http" | "txt" | "email";
    settings?: Settings;
    type?: "dv";
    wildcard?: boolean;
  };
}

export const PatchCustomHostnameRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customHostnameId: Schema.String.pipe(T.HttpPath("customHostnameId")),
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    customMetadata: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    customOriginServer: Schema.optional(Schema.String),
    customOriginSni: Schema.optional(Schema.String),
    ssl: Schema.optional(
      Schema.Struct({
        bundleMethod: Schema.optional(
          Schema.Literals(["ubiquitous", "optimal", "force"]),
        ),
        certificateAuthority: Schema.optional(
          Schema.Literals(["digicert", "google", "lets_encrypt", "ssl_com"]),
        ),
        cloudflareBranding: Schema.optional(Schema.Boolean),
        customCertBundle: Schema.optional(Schema.Array(CustomCERTBundle)),
        customCertificate: Schema.optional(Schema.String),
        customKey: Schema.optional(Schema.String),
        method: Schema.optional(Schema.Literals(["http", "txt", "email"])),
        settings: Schema.optional(Settings),
        type: Schema.optional(Schema.Literal("dv")),
        wildcard: Schema.optional(Schema.Boolean),
      }).pipe(
        Schema.encodeKeys({
          bundleMethod: "bundle_method",
          certificateAuthority: "certificate_authority",
          cloudflareBranding: "cloudflare_branding",
          customCertBundle: "custom_cert_bundle",
          customCertificate: "custom_certificate",
          customKey: "custom_key",
          method: "method",
          settings: "settings",
          type: "type",
          wildcard: "wildcard",
        }),
      ),
    ),
  }).pipe(
    Schema.encodeKeys({
      customMetadata: "custom_metadata",
      customOriginServer: "custom_origin_server",
      customOriginSni: "custom_origin_sni",
      ssl: "ssl",
    }),
    T.Http({
      method: "PATCH",
      path: "/zones/{zone_id}/custom_hostnames/{customHostnameId}",
    }),
  ) as unknown as Schema.Schema<PatchCustomHostnameRequest>;

export interface PatchCustomHostnameResponse {
  /** Identifier. */
  id: string;
  /** The custom hostname that will point to your hostname via CNAME. */
  hostname: string;
  ssl: Ssl;
  /** This is the time the hostname was created. */
  createdAt?: string | null;
  /** Unique key/value metadata for this hostname. These are per-hostname (customer) settings. */
  customMetadata?: Record<string, unknown> | null;
  /** a valid hostname that’s been added to your DNS zone as an A, AAAA, or CNAME record. */
  customOriginServer?: string | null;
  /** A hostname that will be sent to your custom origin server as SNI for TLS handshake. This can be a valid subdomain of the zone or custom origin server name or the string ':request_host_header:' which w */
  customOriginSni?: string | null;
  /** This is a record which can be placed to activate a hostname. */
  ownershipVerification?: OwnershipVerification | null;
  /** This presents the token to be served by the given http url to activate a hostname. */
  ownershipVerificationHttp?: OwnershipVerificationHTTP | null;
  /** Status of the hostname's activation. */
  status?:
    | "active"
    | "pending"
    | "active_redeploying"
    | "moved"
    | "pending_deletion"
    | "deleted"
    | "pending_blocked"
    | "pending_migration"
    | "pending_provisioned"
    | "test_pending"
    | "test_active"
    | "test_active_apex"
    | "test_blocked"
    | "test_failed"
    | "provisioned"
    | "blocked"
    | null;
  /** These are errors that were encountered while trying to activate a hostname. */
  verificationErrors?: string[] | null;
}

export const PatchCustomHostnameResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    hostname: Schema.String,
    ssl: Ssl,
    createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    customMetadata: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
    customOriginServer: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    customOriginSni: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    ownershipVerification: Schema.optional(
      Schema.Union([OwnershipVerification, Schema.Null]),
    ),
    ownershipVerificationHttp: Schema.optional(
      Schema.Union([OwnershipVerificationHTTP, Schema.Null]),
    ),
    status: Schema.optional(
      Schema.Union([
        Schema.Literals([
          "active",
          "pending",
          "active_redeploying",
          "moved",
          "pending_deletion",
          "deleted",
          "pending_blocked",
          "pending_migration",
          "pending_provisioned",
          "test_pending",
          "test_active",
          "test_active_apex",
          "test_blocked",
          "test_failed",
          "provisioned",
          "blocked",
        ]),
        Schema.Null,
      ]),
    ),
    verificationErrors: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        hostname: "hostname",
        ssl: "ssl",
        createdAt: "created_at",
        customMetadata: "custom_metadata",
        customOriginServer: "custom_origin_server",
        customOriginSni: "custom_origin_sni",
        ownershipVerification: "ownership_verification",
        ownershipVerificationHttp: "ownership_verification_http",
        status: "status",
        verificationErrors: "verification_errors",
      }),
    )
    .pipe(
      T.ResponsePath("result"),
    ) as unknown as Schema.Schema<PatchCustomHostnameResponse>;

export type PatchCustomHostnameError = DefaultErrors;

export const patchCustomHostname: API.OperationMethod<
  PatchCustomHostnameRequest,
  PatchCustomHostnameResponse,
  PatchCustomHostnameError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchCustomHostnameRequest,
  output: PatchCustomHostnameResponse,
  errors: [],
}));

export interface DeleteCustomHostnameRequest {
  customHostnameId: string;
  /** Identifier. */
  zoneId: string;
}

export const DeleteCustomHostnameRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customHostnameId: Schema.String.pipe(T.HttpPath("customHostnameId")),
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/zones/{zone_id}/custom_hostnames/{customHostnameId}",
    }),
  ) as unknown as Schema.Schema<DeleteCustomHostnameRequest>;

export interface DeleteCustomHostnameResponse {
  /** Identifier. */
  id?: string | null;
}

export const DeleteCustomHostnameResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }) as unknown as Schema.Schema<DeleteCustomHostnameResponse>;

export type DeleteCustomHostnameError = DefaultErrors;

export const deleteCustomHostname: API.OperationMethod<
  DeleteCustomHostnameRequest,
  DeleteCustomHostnameResponse,
  DeleteCustomHostnameError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteCustomHostnameRequest,
  output: DeleteCustomHostnameResponse,
  errors: [],
}));

// =============================================================================
// FallbackOrigin
// =============================================================================

export interface GetFallbackOriginRequest {
  /** Identifier. */
  zoneId: string;
}

export const GetFallbackOriginRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/zones/{zone_id}/custom_hostnames/fallback_origin",
    }),
  ) as unknown as Schema.Schema<GetFallbackOriginRequest>;

export interface GetFallbackOriginResponse {
  /** This is the time the fallback origin was created. */
  createdAt?: string | null;
  /** These are errors that were encountered while trying to activate a fallback origin. */
  errors?: string[] | null;
  /** Your origin hostname that requests to your custom hostnames will be sent to. */
  origin?: string | null;
  /** Status of the fallback origin's activation. */
  status?:
    | "initializing"
    | "pending_deployment"
    | "pending_deletion"
    | "active"
    | "deployment_timed_out"
    | "deletion_timed_out"
    | null;
  /** This is the time the fallback origin was updated. */
  updatedAt?: string | null;
}

export const GetFallbackOriginResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    errors: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    origin: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    status: Schema.optional(
      Schema.Union([
        Schema.Literals([
          "initializing",
          "pending_deployment",
          "pending_deletion",
          "active",
          "deployment_timed_out",
          "deletion_timed_out",
        ]),
        Schema.Null,
      ]),
    ),
    updatedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  })
    .pipe(
      Schema.encodeKeys({
        createdAt: "created_at",
        errors: "errors",
        origin: "origin",
        status: "status",
        updatedAt: "updated_at",
      }),
    )
    .pipe(
      T.ResponsePath("result"),
    ) as unknown as Schema.Schema<GetFallbackOriginResponse>;

export type GetFallbackOriginError = DefaultErrors;

export const getFallbackOrigin: API.OperationMethod<
  GetFallbackOriginRequest,
  GetFallbackOriginResponse,
  GetFallbackOriginError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetFallbackOriginRequest,
  output: GetFallbackOriginResponse,
  errors: [],
}));

export interface PutFallbackOriginRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: Your origin hostname that requests to your custom hostnames will be sent to. */
  origin: string;
}

export const PutFallbackOriginRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    origin: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/zones/{zone_id}/custom_hostnames/fallback_origin",
    }),
  ) as unknown as Schema.Schema<PutFallbackOriginRequest>;

export interface PutFallbackOriginResponse {
  /** This is the time the fallback origin was created. */
  createdAt?: string | null;
  /** These are errors that were encountered while trying to activate a fallback origin. */
  errors?: string[] | null;
  /** Your origin hostname that requests to your custom hostnames will be sent to. */
  origin?: string | null;
  /** Status of the fallback origin's activation. */
  status?:
    | "initializing"
    | "pending_deployment"
    | "pending_deletion"
    | "active"
    | "deployment_timed_out"
    | "deletion_timed_out"
    | null;
  /** This is the time the fallback origin was updated. */
  updatedAt?: string | null;
}

export const PutFallbackOriginResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    errors: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    origin: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    status: Schema.optional(
      Schema.Union([
        Schema.Literals([
          "initializing",
          "pending_deployment",
          "pending_deletion",
          "active",
          "deployment_timed_out",
          "deletion_timed_out",
        ]),
        Schema.Null,
      ]),
    ),
    updatedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  })
    .pipe(
      Schema.encodeKeys({
        createdAt: "created_at",
        errors: "errors",
        origin: "origin",
        status: "status",
        updatedAt: "updated_at",
      }),
    )
    .pipe(
      T.ResponsePath("result"),
    ) as unknown as Schema.Schema<PutFallbackOriginResponse>;

export type PutFallbackOriginError = DefaultErrors;

export const putFallbackOrigin: API.OperationMethod<
  PutFallbackOriginRequest,
  PutFallbackOriginResponse,
  PutFallbackOriginError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PutFallbackOriginRequest,
  output: PutFallbackOriginResponse,
  errors: [],
}));

export interface DeleteFallbackOriginRequest {
  /** Identifier. */
  zoneId: string;
}

export const DeleteFallbackOriginRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/zones/{zone_id}/custom_hostnames/fallback_origin",
    }),
  ) as unknown as Schema.Schema<DeleteFallbackOriginRequest>;

export interface DeleteFallbackOriginResponse {
  /** This is the time the fallback origin was created. */
  createdAt?: string | null;
  /** These are errors that were encountered while trying to activate a fallback origin. */
  errors?: string[] | null;
  /** Your origin hostname that requests to your custom hostnames will be sent to. */
  origin?: string | null;
  /** Status of the fallback origin's activation. */
  status?:
    | "initializing"
    | "pending_deployment"
    | "pending_deletion"
    | "active"
    | "deployment_timed_out"
    | "deletion_timed_out"
    | null;
  /** This is the time the fallback origin was updated. */
  updatedAt?: string | null;
}

export const DeleteFallbackOriginResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    errors: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    origin: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    status: Schema.optional(
      Schema.Union([
        Schema.Literals([
          "initializing",
          "pending_deployment",
          "pending_deletion",
          "active",
          "deployment_timed_out",
          "deletion_timed_out",
        ]),
        Schema.Null,
      ]),
    ),
    updatedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  })
    .pipe(
      Schema.encodeKeys({
        createdAt: "created_at",
        errors: "errors",
        origin: "origin",
        status: "status",
        updatedAt: "updated_at",
      }),
    )
    .pipe(
      T.ResponsePath("result"),
    ) as unknown as Schema.Schema<DeleteFallbackOriginResponse>;

export type DeleteFallbackOriginError = DefaultErrors;

export const deleteFallbackOrigin: API.OperationMethod<
  DeleteFallbackOriginRequest,
  DeleteFallbackOriginResponse,
  DeleteFallbackOriginError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteFallbackOriginRequest,
  output: DeleteFallbackOriginResponse,
  errors: [],
}));
