/**
 * Cloudflare CUSTOM-HOSTNAMES API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service custom-hostnames
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

export class CustomHostnameNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<CustomHostnameNotFound>()("CustomHostnameNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1436 }, { status: 404 }],
) {}

export class FallbackOriginNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<FallbackOriginNotFound>()("FallbackOriginNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 404 }],
) {}

export class Forbidden extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<Forbidden>()("Forbidden", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 403 }],
) {}

export class SaasAccessNotGranted extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<SaasAccessNotGranted>()("SaasAccessNotGranted", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1456 }],
) {}

export class SaasQuotaNotAllocated extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<SaasQuotaNotAllocated>()("SaasQuotaNotAllocated", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1404, status: 403 }],
) {}

// =============================================================================
// Shared nested schemas (hoisted, module-private)
// =============================================================================

interface OwnershipVerification {
  /** DNS Name for record. */
  name?: string | null;
  /** DNS Record type. */
  type?: "txt" | null;
  /** Content for the record. */
  value?: string | null;
}
const OwnershipVerification = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    type: Schema.optional(Schema.Union([Schema.Literal("txt"), Schema.Null])),
    value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<OwnershipVerification>;

interface OwnershipVerificationHTTP {
  /** Token to be served. */
  httpBody?: string | null;
  /** The HTTP URL that will be checked during custom hostname verification and where the customer should host the token. */
  httpUrl?: string | null;
}
const OwnershipVerificationHTTP = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    httpBody: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    httpUrl: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(Schema.encodeKeys({ httpBody: "http_body", httpUrl: "http_url" })),
) as unknown as Schema.Codec<OwnershipVerificationHTTP>;

interface DcvdelegationRecord {
  /** The CNAME record hostname for DCV delegation. */
  cname?: string | null;
  /** The CNAME record target value for DCV delegation. */
  cnameTarget?: string | null;
  /** The set of email addresses that the certificate authority (CA) will use to complete domain validation. */
  emails?: string[] | null;
  /** The content that the certificate authority (CA) will expect to find at the http_url during the domain validation. */
  httpBody?: string | null;
  /** The url that will be checked during domain validation. */
  httpUrl?: string | null;
  /** Status of the validation record. */
  status?: string | null;
  /** The hostname that the certificate authority (CA) will check for a TXT record during domain validation . */
  txtName?: string | null;
  /** The TXT record that the certificate authority (CA) will check during domain validation. */
  txtValue?: string | null;
}
const DcvdelegationRecord = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    cname: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    cnameTarget: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    emails: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    httpBody: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    httpUrl: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    status: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    txtName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    txtValue: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      cname: "cname",
      cnameTarget: "cname_target",
      emails: "emails",
      httpBody: "http_body",
      httpUrl: "http_url",
      status: "status",
      txtName: "txt_name",
      txtValue: "txt_value",
    }),
  ),
) as unknown as Schema.Codec<DcvdelegationRecord>;

interface Settings {
  /** An allowlist of ciphers for TLS termination. These ciphers must be in the BoringSSL format. */
  ciphers?: string[] | null;
  /** Whether or not Early Hints is enabled. */
  earlyHints?: "on" | "off" | (string & {}) | null;
  /** Whether or not HTTP2 is enabled. */
  http2?: "on" | "off" | (string & {}) | null;
  /** The minimum TLS version supported. */
  minTlsVersion?: "1.0" | "1.1" | "1.2" | "1.3" | (string & {}) | null;
  /** Whether or not TLS 1.3 is enabled. */
  tls_1_3?: "on" | "off" | (string & {}) | null;
}
const Settings = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    ciphers: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    earlyHints: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
        Schema.Null,
      ]),
    ),
    http2: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
        Schema.Null,
      ]),
    ),
    minTlsVersion: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["1.0", "1.1", "1.2", "1.3"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    tls_1_3: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
        Schema.Null,
      ]),
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
) as unknown as Schema.Codec<Settings>;

interface ValidationError {
  /** A domain validation error. */
  message?: string | null;
}
const ValidationError = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    message: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<ValidationError>;

interface Ssl {
  /** Custom hostname SSL identifier tag. */
  id?: string | null;
  /** A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. An optimal bundle uses the shortest chain and newest intermediates */
  bundleMethod?: "ubiquitous" | "optimal" | "force" | (string & {}) | null;
  /** The Certificate Authority that will issue the certificate. */
  certificateAuthority?:
    | "digicert"
    | "google"
    | "lets_encrypt"
    | "ssl_com"
    | (string & {})
    | null;
  /** If a custom uploaded certificate is used. */
  customCertificate?: string | null;
  /** The identifier for the Custom CSR that was used. */
  customCsrId?: string | null;
  /** The key for a custom uploaded certificate. */
  customKey?: string | null;
  /** DCV Delegation records for domain validation. */
  dcvDelegationRecords?:
    | {
        cname?: string | null;
        cnameTarget?: string | null;
        emails?: string[] | null;
        httpBody?: string | null;
        httpUrl?: string | null;
        status?: string | null;
        txtName?: string | null;
        txtValue?: string | null;
      }[]
    | null;
  /** The time the custom certificate expires on. */
  expiresOn?: string | null;
  /** A list of Hostnames on a custom uploaded certificate. */
  hosts?: string[] | null;
  /** The issuer on a custom uploaded certificate. */
  issuer?: string | null;
  /** Domain control validation (DCV) method used for this hostname. */
  method?: "http" | "txt" | "email" | (string & {}) | null;
  /** The serial number on a custom uploaded certificate. */
  serialNumber?: string | null;
  settings?: {
    ciphers?: string[] | null;
    earlyHints?: "on" | "off" | (string & {}) | null;
    http2?: "on" | "off" | (string & {}) | null;
    minTlsVersion?: "1.0" | "1.1" | "1.2" | "1.3" | (string & {}) | null;
    tls_1_3?: "on" | "off" | (string & {}) | null;
  } | null;
  /** The signature on a custom uploaded certificate. */
  signature?: string | null;
  /** Status of the hostname's SSL certificates. */
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
    | (string & {})
    | null;
  /** Level of validation to be used for this hostname. Domain validation (dv) must be used. */
  type?: "dv" | null;
  /** The time the custom certificate was uploaded. */
  uploadedOn?: string | null;
  /** Domain validation errors that have been received by the certificate authority (CA). */
  validationErrors?: { message?: string | null }[] | null;
  validationRecords?:
    | {
        cname?: string | null;
        cnameTarget?: string | null;
        emails?: string[] | null;
        httpBody?: string | null;
        httpUrl?: string | null;
        status?: string | null;
        txtName?: string | null;
        txtValue?: string | null;
      }[]
    | null;
  /** Indicates whether the certificate covers a wildcard. */
  wildcard?: boolean | null;
}
const Ssl = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    bundleMethod: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["ubiquitous", "optimal", "force"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    certificateAuthority: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["digicert", "google", "lets_encrypt", "ssl_com"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    customCertificate: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    customCsrId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    customKey: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    dcvDelegationRecords: Schema.optional(
      Schema.Union([Schema.Array(DcvdelegationRecord), Schema.Null]),
    ),
    expiresOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    hosts: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    issuer: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    method: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["http", "txt", "email"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    serialNumber: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    signature: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    status: Schema.optional(
      Schema.Union([
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
          Schema.String,
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
      Schema.Union([Schema.Array(DcvdelegationRecord), Schema.Null]),
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
      dcvDelegationRecords: "dcv_delegation_records",
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
) as unknown as Schema.Codec<Ssl>;

interface ListCustomHostnamesResponseResult {
  /** Identifier. */
  id: string;
  /** The custom hostname that will point to your hostname via CNAME. */
  hostname: string;
  /** This is the time the hostname was created. */
  createdAt?: string | null;
  /** Unique key/value metadata for this hostname. These are per-hostname (customer) settings. */
  customMetadata?: Record<string, unknown> | null;
  /** a valid hostname that’s been added to your DNS zone as an A, AAAA, or CNAME record. */
  customOriginServer?: string | null;
  /** A hostname that will be sent to your custom origin server as SNI for TLS handshake. This can be a valid subdomain of the zone or custom origin server name or the string ':request_host_header:' which w */
  customOriginSni?: string | null;
  /** This is a record which can be placed to activate a hostname. */
  ownershipVerification?: {
    name?: string | null;
    type?: "txt" | null;
    value?: string | null;
  } | null;
  /** This presents the token to be served by the given http url to activate a hostname. */
  ownershipVerificationHttp?: {
    httpBody?: string | null;
    httpUrl?: string | null;
  } | null;
  ssl?: {
    id?: string | null;
    bundleMethod?: "ubiquitous" | "optimal" | "force" | (string & {}) | null;
    certificateAuthority?:
      | "digicert"
      | "google"
      | "lets_encrypt"
      | "ssl_com"
      | (string & {})
      | null;
    customCertificate?: string | null;
    customCsrId?: string | null;
    customKey?: string | null;
    dcvDelegationRecords?:
      | {
          cname?: string | null;
          cnameTarget?: string | null;
          emails?: string[] | null;
          httpBody?: string | null;
          httpUrl?: string | null;
          status?: string | null;
          txtName?: string | null;
          txtValue?: string | null;
        }[]
      | null;
    expiresOn?: string | null;
    hosts?: string[] | null;
    issuer?: string | null;
    method?: "http" | "txt" | "email" | (string & {}) | null;
    serialNumber?: string | null;
    settings?: {
      ciphers?: string[] | null;
      earlyHints?: "on" | "off" | (string & {}) | null;
      http2?: "on" | "off" | (string & {}) | null;
      minTlsVersion?: "1.0" | "1.1" | "1.2" | "1.3" | (string & {}) | null;
      tls_1_3?: "on" | "off" | (string & {}) | null;
    } | null;
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
      | (string & {})
      | null;
    type?: "dv" | null;
    uploadedOn?: string | null;
    validationErrors?: { message?: string | null }[] | null;
    validationRecords?:
      | {
          cname?: string | null;
          cnameTarget?: string | null;
          emails?: string[] | null;
          httpBody?: string | null;
          httpUrl?: string | null;
          status?: string | null;
          txtName?: string | null;
          txtValue?: string | null;
        }[]
      | null;
    wildcard?: boolean | null;
  } | null;
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
    | (string & {})
    | null;
  /** These are errors that were encountered while trying to activate a hostname. */
  verificationErrors?: string[] | null;
}
const ListCustomHostnamesResponseResult =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      hostname: Schema.String,
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
      ssl: Schema.optional(Schema.Union([Ssl, Schema.Null])),
      status: Schema.optional(
        Schema.Union([
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
            Schema.String,
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
        createdAt: "created_at",
        customMetadata: "custom_metadata",
        customOriginServer: "custom_origin_server",
        customOriginSni: "custom_origin_sni",
        ownershipVerification: "ownership_verification",
        ownershipVerificationHttp: "ownership_verification_http",
        ssl: "ssl",
        status: "status",
        verificationErrors: "verification_errors",
      }),
    ),
  ) as unknown as Schema.Codec<ListCustomHostnamesResponseResult>;

interface ListCustomHostnamesResponseResultInfo {
  count?: number | null;
  page?: number | null;
  perPage?: number | null;
  totalCount?: number | null;
}
const ListCustomHostnamesResponseResultInfo =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
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
  ) as unknown as Schema.Codec<ListCustomHostnamesResponseResultInfo>;

interface CustomCERTBundle {
  /** If a custom uploaded certificate is used. */
  customCertificate: string;
  /** The key for a custom uploaded certificate. */
  customKey: string;
}
const CustomCERTBundle = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    customCertificate: Schema.String,
    customKey: Schema.String,
  }).pipe(
    Schema.encodeKeys({
      customCertificate: "custom_certificate",
      customKey: "custom_key",
    }),
  ),
) as unknown as Schema.Codec<CustomCERTBundle>;

interface Ssl2 {
  /** A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. An optimal bundle uses the shortest chain and newest intermediates */
  bundleMethod?: "ubiquitous" | "optimal" | "force" | (string & {}) | null;
  /** The Certificate Authority that will issue the certificate. */
  certificateAuthority?:
    | "digicert"
    | "google"
    | "lets_encrypt"
    | "ssl_com"
    | (string & {})
    | null;
  /** Whether or not to add Cloudflare Branding for the order. This will add a subdomain of sni.cloudflaressl.com as the Common Name if set to true. */
  cloudflareBranding?: boolean | null;
  /** Array of custom certificate and key pairs (1 or 2 pairs allowed). */
  customCertBundle?: { customCertificate: string; customKey: string }[] | null;
  /** If a custom uploaded certificate is used. */
  customCertificate?: string | null;
  /** The identifier for the Custom CSR that was used. */
  customCsrId?: string | null;
  /** The key for a custom uploaded certificate. */
  customKey?: string | null;
  /** Domain control validation (DCV) method used for this hostname. */
  method?: "http" | "txt" | "email" | (string & {}) | null;
  /** SSL specific settings. */
  settings?: {
    ciphers?: string[] | null;
    earlyHints?: "on" | "off" | (string & {}) | null;
    http2?: "on" | "off" | (string & {}) | null;
    minTlsVersion?: "1.0" | "1.1" | "1.2" | "1.3" | (string & {}) | null;
    tls_1_3?: "on" | "off" | (string & {}) | null;
  } | null;
  /** Level of validation to be used for this hostname. Domain validation (dv) must be used. */
  type?: "dv" | null;
  /** Indicates whether the certificate covers a wildcard. */
  wildcard?: boolean | null;
}
const Ssl2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    bundleMethod: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["ubiquitous", "optimal", "force"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    certificateAuthority: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["digicert", "google", "lets_encrypt", "ssl_com"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    cloudflareBranding: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    customCertBundle: Schema.optional(
      Schema.Union([Schema.Array(CustomCERTBundle), Schema.Null]),
    ),
    customCertificate: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    customCsrId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    customKey: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    method: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["http", "txt", "email"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    type: Schema.optional(Schema.Union([Schema.Literal("dv"), Schema.Null])),
    wildcard: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      bundleMethod: "bundle_method",
      certificateAuthority: "certificate_authority",
      cloudflareBranding: "cloudflare_branding",
      customCertBundle: "custom_cert_bundle",
      customCertificate: "custom_certificate",
      customCsrId: "custom_csr_id",
      customKey: "custom_key",
      method: "method",
      settings: "settings",
      type: "type",
      wildcard: "wildcard",
    }),
  ),
) as unknown as Schema.Codec<Ssl2>;

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
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
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
    ),
  ) as unknown as Schema.Codec<PutCertificatePackCertificateRequest>;

export interface PutCertificatePackCertificateResponse {
  /** Identifier. */
  id: string;
  /** The custom hostname that will point to your hostname via CNAME. */
  hostname: string;
  /** This is the time the hostname was created. */
  createdAt?: string | null;
  /** Unique key/value metadata for this hostname. These are per-hostname (customer) settings. */
  customMetadata?: Record<string, unknown> | null;
  /** a valid hostname that’s been added to your DNS zone as an A, AAAA, or CNAME record. */
  customOriginServer?: string | null;
  /** A hostname that will be sent to your custom origin server as SNI for TLS handshake. This can be a valid subdomain of the zone or custom origin server name or the string ':request_host_header:' which w */
  customOriginSni?: string | null;
  /** This is a record which can be placed to activate a hostname. */
  ownershipVerification?: {
    name?: string | null;
    type?: "txt" | null;
    value?: string | null;
  } | null;
  /** This presents the token to be served by the given http url to activate a hostname. */
  ownershipVerificationHttp?: {
    httpBody?: string | null;
    httpUrl?: string | null;
  } | null;
  ssl?: {
    id?: string | null;
    bundleMethod?: "ubiquitous" | "optimal" | "force" | (string & {}) | null;
    certificateAuthority?:
      | "digicert"
      | "google"
      | "lets_encrypt"
      | "ssl_com"
      | (string & {})
      | null;
    customCertificate?: string | null;
    customCsrId?: string | null;
    customKey?: string | null;
    dcvDelegationRecords?:
      | {
          cname?: string | null;
          cnameTarget?: string | null;
          emails?: string[] | null;
          httpBody?: string | null;
          httpUrl?: string | null;
          status?: string | null;
          txtName?: string | null;
          txtValue?: string | null;
        }[]
      | null;
    expiresOn?: string | null;
    hosts?: string[] | null;
    issuer?: string | null;
    method?: "http" | "txt" | "email" | (string & {}) | null;
    serialNumber?: string | null;
    settings?: {
      ciphers?: string[] | null;
      earlyHints?: "on" | "off" | (string & {}) | null;
      http2?: "on" | "off" | (string & {}) | null;
      minTlsVersion?: "1.0" | "1.1" | "1.2" | "1.3" | (string & {}) | null;
      tls_1_3?: "on" | "off" | (string & {}) | null;
    } | null;
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
      | (string & {})
      | null;
    type?: "dv" | null;
    uploadedOn?: string | null;
    validationErrors?: { message?: string | null }[] | null;
    validationRecords?:
      | {
          cname?: string | null;
          cnameTarget?: string | null;
          emails?: string[] | null;
          httpBody?: string | null;
          httpUrl?: string | null;
          status?: string | null;
          txtName?: string | null;
          txtValue?: string | null;
        }[]
      | null;
    wildcard?: boolean | null;
  } | null;
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
    | (string & {})
    | null;
  /** These are errors that were encountered while trying to activate a hostname. */
  verificationErrors?: string[] | null;
}

export const PutCertificatePackCertificateResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      hostname: Schema.String,
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
      ssl: Schema.optional(Schema.Union([Ssl, Schema.Null])),
      status: Schema.optional(
        Schema.Union([
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
            Schema.String,
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
          createdAt: "created_at",
          customMetadata: "custom_metadata",
          customOriginServer: "custom_origin_server",
          customOriginSni: "custom_origin_sni",
          ownershipVerification: "ownership_verification",
          ownershipVerificationHttp: "ownership_verification_http",
          ssl: "ssl",
          status: "status",
          verificationErrors: "verification_errors",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<PutCertificatePackCertificateResponse>;

export type PutCertificatePackCertificateError = DefaultErrors;

export const putCertificatePackCertificate: API.OperationMethod<
  PutCertificatePackCertificateRequest,
  PutCertificatePackCertificateResponse,
  PutCertificatePackCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
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
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      customHostnameId: Schema.String.pipe(T.HttpPath("customHostnameId")),
      certificatePackId: Schema.String.pipe(T.HttpPath("certificatePackId")),
      certificateId: Schema.String.pipe(T.HttpPath("certificateId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/zones/{zone_id}/custom_hostnames/{customHostnameId}/certificate_pack/{certificatePackId}/certificates/{certificateId}",
      }),
    ),
  ) as unknown as Schema.Codec<DeleteCertificatePackCertificateRequest>;

export interface DeleteCertificatePackCertificateResponse {
  /** Identifier. */
  id?: string | null;
}

export const DeleteCertificatePackCertificateResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<DeleteCertificatePackCertificateResponse>;

export type DeleteCertificatePackCertificateError = DefaultErrors;

export const deleteCertificatePackCertificate: API.OperationMethod<
  DeleteCertificatePackCertificateRequest,
  DeleteCertificatePackCertificateResponse,
  DeleteCertificatePackCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
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
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      customHostnameId: Schema.String.pipe(T.HttpPath("customHostnameId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/custom_hostnames/{customHostnameId}",
      }),
    ),
  ) as unknown as Schema.Codec<GetCustomHostnameRequest>;

export interface GetCustomHostnameResponse {
  /** Identifier. */
  id: string;
  /** The custom hostname that will point to your hostname via CNAME. */
  hostname: string;
  /** This is the time the hostname was created. */
  createdAt?: string | null;
  /** Unique key/value metadata for this hostname. These are per-hostname (customer) settings. */
  customMetadata?: Record<string, unknown> | null;
  /** a valid hostname that’s been added to your DNS zone as an A, AAAA, or CNAME record. */
  customOriginServer?: string | null;
  /** A hostname that will be sent to your custom origin server as SNI for TLS handshake. This can be a valid subdomain of the zone or custom origin server name or the string ':request_host_header:' which w */
  customOriginSni?: string | null;
  /** This is a record which can be placed to activate a hostname. */
  ownershipVerification?: {
    name?: string | null;
    type?: "txt" | null;
    value?: string | null;
  } | null;
  /** This presents the token to be served by the given http url to activate a hostname. */
  ownershipVerificationHttp?: {
    httpBody?: string | null;
    httpUrl?: string | null;
  } | null;
  ssl?: {
    id?: string | null;
    bundleMethod?: "ubiquitous" | "optimal" | "force" | (string & {}) | null;
    certificateAuthority?:
      | "digicert"
      | "google"
      | "lets_encrypt"
      | "ssl_com"
      | (string & {})
      | null;
    customCertificate?: string | null;
    customCsrId?: string | null;
    customKey?: string | null;
    dcvDelegationRecords?:
      | {
          cname?: string | null;
          cnameTarget?: string | null;
          emails?: string[] | null;
          httpBody?: string | null;
          httpUrl?: string | null;
          status?: string | null;
          txtName?: string | null;
          txtValue?: string | null;
        }[]
      | null;
    expiresOn?: string | null;
    hosts?: string[] | null;
    issuer?: string | null;
    method?: "http" | "txt" | "email" | (string & {}) | null;
    serialNumber?: string | null;
    settings?: {
      ciphers?: string[] | null;
      earlyHints?: "on" | "off" | (string & {}) | null;
      http2?: "on" | "off" | (string & {}) | null;
      minTlsVersion?: "1.0" | "1.1" | "1.2" | "1.3" | (string & {}) | null;
      tls_1_3?: "on" | "off" | (string & {}) | null;
    } | null;
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
      | (string & {})
      | null;
    type?: "dv" | null;
    uploadedOn?: string | null;
    validationErrors?: { message?: string | null }[] | null;
    validationRecords?:
      | {
          cname?: string | null;
          cnameTarget?: string | null;
          emails?: string[] | null;
          httpBody?: string | null;
          httpUrl?: string | null;
          status?: string | null;
          txtName?: string | null;
          txtValue?: string | null;
        }[]
      | null;
    wildcard?: boolean | null;
  } | null;
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
    | (string & {})
    | null;
  /** These are errors that were encountered while trying to activate a hostname. */
  verificationErrors?: string[] | null;
}

export const GetCustomHostnameResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      hostname: Schema.String,
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
      ssl: Schema.optional(Schema.Union([Ssl, Schema.Null])),
      status: Schema.optional(
        Schema.Union([
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
            Schema.String,
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
          createdAt: "created_at",
          customMetadata: "custom_metadata",
          customOriginServer: "custom_origin_server",
          customOriginSni: "custom_origin_sni",
          ownershipVerification: "ownership_verification",
          ownershipVerificationHttp: "ownership_verification_http",
          ssl: "ssl",
          status: "status",
          verificationErrors: "verification_errors",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetCustomHostnameResponse>;

export type GetCustomHostnameError =
  | DefaultErrors
  | CustomHostnameNotFound
  | SaasQuotaNotAllocated
  | Forbidden;

export const getCustomHostname: API.OperationMethod<
  GetCustomHostnameRequest,
  GetCustomHostnameResponse,
  GetCustomHostnameError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetCustomHostnameRequest,
  output: GetCustomHostnameResponse,
  errors: [CustomHostnameNotFound, SaasQuotaNotAllocated, Forbidden],
}));

export interface ListCustomHostnamesRequest {
  /** Path param: Identifier. */
  zoneId: string;
  page?: number;
  perPage?: number;
  /** Query param: Hostname ID to match against. This ID was generated and returned during the initial custom_hostname creation. This parameter cannot be used with the 'hostname', 'hostname.exact', 'hostnam */
  id?: string;
  /** Query param: Filter by the certificate authority that issued the SSL certificate. */
  certificateAuthority?: "google" | "lets_encrypt" | "ssl_com" | (string & {});
  /** Query param: Filter by custom origin server name. */
  customOriginServer?: string;
  /** Query param: Direction to order hostnames. */
  direction?: "asc" | "desc" | (string & {});
  /** Query param */
  hostname?: { contain?: string; exact?: string; startsWith?: string };
  /** Query param: Filter by the hostname's activation status. */
  hostnameStatus?:
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
    | (string & {});
  /** Query param: Field to order hostnames by. */
  order?: "ssl" | "ssl_status" | (string & {});
  /** Query param: Whether to filter hostnames based on if they have SSL enabled. */
  ssl?: "0" | "1" | (string & {});
  /** Query param: Filter by SSL certificate status. */
  sslStatus?:
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
    | (string & {});
  /** Query param: Filter by whether the custom hostname is a wildcard hostname. */
  wildcard?: boolean;
}

export const ListCustomHostnamesRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      id: Schema.optional(Schema.String).pipe(T.HttpQuery("id")),
      certificateAuthority: Schema.optional(
        Schema.Union([
          Schema.Literals(["google", "lets_encrypt", "ssl_com"]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("certificate_authority")),
      customOriginServer: Schema.optional(Schema.String).pipe(
        T.HttpQuery("custom_origin_server"),
      ),
      direction: Schema.optional(
        Schema.Union([Schema.Literals(["asc", "desc"]), Schema.String]),
      ).pipe(T.HttpQuery("direction")),
      hostname: Schema.optional(
        Schema.Struct({
          contain: Schema.optional(Schema.String),
          exact: Schema.optional(Schema.String),
          startsWith: Schema.optional(Schema.String),
        }),
      ).pipe(T.HttpQuery("hostname")),
      hostnameStatus: Schema.optional(
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
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("hostname_status")),
      order: Schema.optional(
        Schema.Union([Schema.Literals(["ssl", "ssl_status"]), Schema.String]),
      ).pipe(T.HttpQuery("order")),
      ssl: Schema.optional(
        Schema.Union([Schema.Literals(["0", "1"]), Schema.String]),
      ).pipe(T.HttpQuery("ssl")),
      sslStatus: Schema.optional(
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
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("ssl_status")),
      wildcard: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("wildcard")),
    }).pipe(
      T.Http({ method: "GET", path: "/zones/{zone_id}/custom_hostnames" }),
    ),
  ) as unknown as Schema.Codec<ListCustomHostnamesRequest>;

export interface ListCustomHostnamesResponse {
  result: {
    id: string;
    hostname: string;
    createdAt?: string | null;
    customMetadata?: Record<string, unknown> | null;
    customOriginServer?: string | null;
    customOriginSni?: string | null;
    ownershipVerification?: {
      name?: string | null;
      type?: "txt" | null;
      value?: string | null;
    } | null;
    ownershipVerificationHttp?: {
      httpBody?: string | null;
      httpUrl?: string | null;
    } | null;
    ssl?: {
      id?: string | null;
      bundleMethod?: "ubiquitous" | "optimal" | "force" | (string & {}) | null;
      certificateAuthority?:
        | "digicert"
        | "google"
        | "lets_encrypt"
        | "ssl_com"
        | (string & {})
        | null;
      customCertificate?: string | null;
      customCsrId?: string | null;
      customKey?: string | null;
      dcvDelegationRecords?:
        | {
            cname?: string | null;
            cnameTarget?: string | null;
            emails?: string[] | null;
            httpBody?: string | null;
            httpUrl?: string | null;
            status?: string | null;
            txtName?: string | null;
            txtValue?: string | null;
          }[]
        | null;
      expiresOn?: string | null;
      hosts?: string[] | null;
      issuer?: string | null;
      method?: "http" | "txt" | "email" | (string & {}) | null;
      serialNumber?: string | null;
      settings?: {
        ciphers?: string[] | null;
        earlyHints?: "on" | "off" | (string & {}) | null;
        http2?: "on" | "off" | (string & {}) | null;
        minTlsVersion?: "1.0" | "1.1" | "1.2" | "1.3" | (string & {}) | null;
        tls_1_3?: "on" | "off" | (string & {}) | null;
      } | null;
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
        | (string & {})
        | null;
      type?: "dv" | null;
      uploadedOn?: string | null;
      validationErrors?: { message?: string | null }[] | null;
      validationRecords?:
        | {
            cname?: string | null;
            cnameTarget?: string | null;
            emails?: string[] | null;
            httpBody?: string | null;
            httpUrl?: string | null;
            status?: string | null;
            txtName?: string | null;
            txtValue?: string | null;
          }[]
        | null;
      wildcard?: boolean | null;
    } | null;
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
      | (string & {})
      | null;
    verificationErrors?: string[] | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListCustomHostnamesResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(ListCustomHostnamesResponseResult),
      resultInfo: Schema.optional(
        Schema.Union([ListCustomHostnamesResponseResultInfo, Schema.Null]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
  ) as unknown as Schema.Codec<ListCustomHostnamesResponse>;

export type ListCustomHostnamesError =
  | DefaultErrors
  | SaasQuotaNotAllocated
  | Forbidden;

export const listCustomHostnames: API.PaginatedOperationMethod<
  ListCustomHostnamesRequest,
  ListCustomHostnamesResponse,
  ListCustomHostnamesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListCustomHostnamesRequest,
  output: ListCustomHostnamesResponse,
  errors: [SaasQuotaNotAllocated, Forbidden],
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
    bundleMethod?: "ubiquitous" | "optimal" | "force" | (string & {});
    certificateAuthority?:
      | "digicert"
      | "google"
      | "lets_encrypt"
      | "ssl_com"
      | (string & {});
    cloudflareBranding?: boolean;
    customCertBundle?: { customCertificate: string; customKey: string }[];
    customCertificate?: string;
    customCsrId?: string;
    customKey?: string;
    method?: "http" | "txt" | "email" | (string & {});
    settings?: {
      ciphers?: string[];
      earlyHints?: "on" | "off" | (string & {});
      http2?: "on" | "off" | (string & {});
      minTlsVersion?: "1.0" | "1.1" | "1.2" | "1.3" | (string & {});
      tls_1_3?: "on" | "off" | (string & {});
    };
    type?: "dv";
    wildcard?: boolean;
  };
}

export const CreateCustomHostnameRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      hostname: Schema.String,
      customMetadata: Schema.optional(
        Schema.Record(Schema.String, Schema.Unknown),
      ),
      ssl: Schema.optional(Ssl2),
    }).pipe(
      Schema.encodeKeys({
        hostname: "hostname",
        customMetadata: "custom_metadata",
        ssl: "ssl",
      }),
      T.Http({ method: "POST", path: "/zones/{zone_id}/custom_hostnames" }),
    ),
  ) as unknown as Schema.Codec<CreateCustomHostnameRequest>;

export interface CreateCustomHostnameResponse {
  /** Identifier. */
  id: string;
  /** The custom hostname that will point to your hostname via CNAME. */
  hostname: string;
  /** This is the time the hostname was created. */
  createdAt?: string | null;
  /** Unique key/value metadata for this hostname. These are per-hostname (customer) settings. */
  customMetadata?: Record<string, unknown> | null;
  /** a valid hostname that’s been added to your DNS zone as an A, AAAA, or CNAME record. */
  customOriginServer?: string | null;
  /** A hostname that will be sent to your custom origin server as SNI for TLS handshake. This can be a valid subdomain of the zone or custom origin server name or the string ':request_host_header:' which w */
  customOriginSni?: string | null;
  /** This is a record which can be placed to activate a hostname. */
  ownershipVerification?: {
    name?: string | null;
    type?: "txt" | null;
    value?: string | null;
  } | null;
  /** This presents the token to be served by the given http url to activate a hostname. */
  ownershipVerificationHttp?: {
    httpBody?: string | null;
    httpUrl?: string | null;
  } | null;
  ssl?: {
    id?: string | null;
    bundleMethod?: "ubiquitous" | "optimal" | "force" | (string & {}) | null;
    certificateAuthority?:
      | "digicert"
      | "google"
      | "lets_encrypt"
      | "ssl_com"
      | (string & {})
      | null;
    customCertificate?: string | null;
    customCsrId?: string | null;
    customKey?: string | null;
    dcvDelegationRecords?:
      | {
          cname?: string | null;
          cnameTarget?: string | null;
          emails?: string[] | null;
          httpBody?: string | null;
          httpUrl?: string | null;
          status?: string | null;
          txtName?: string | null;
          txtValue?: string | null;
        }[]
      | null;
    expiresOn?: string | null;
    hosts?: string[] | null;
    issuer?: string | null;
    method?: "http" | "txt" | "email" | (string & {}) | null;
    serialNumber?: string | null;
    settings?: {
      ciphers?: string[] | null;
      earlyHints?: "on" | "off" | (string & {}) | null;
      http2?: "on" | "off" | (string & {}) | null;
      minTlsVersion?: "1.0" | "1.1" | "1.2" | "1.3" | (string & {}) | null;
      tls_1_3?: "on" | "off" | (string & {}) | null;
    } | null;
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
      | (string & {})
      | null;
    type?: "dv" | null;
    uploadedOn?: string | null;
    validationErrors?: { message?: string | null }[] | null;
    validationRecords?:
      | {
          cname?: string | null;
          cnameTarget?: string | null;
          emails?: string[] | null;
          httpBody?: string | null;
          httpUrl?: string | null;
          status?: string | null;
          txtName?: string | null;
          txtValue?: string | null;
        }[]
      | null;
    wildcard?: boolean | null;
  } | null;
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
    | (string & {})
    | null;
  /** These are errors that were encountered while trying to activate a hostname. */
  verificationErrors?: string[] | null;
}

export const CreateCustomHostnameResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      hostname: Schema.String,
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
      ssl: Schema.optional(Schema.Union([Ssl, Schema.Null])),
      status: Schema.optional(
        Schema.Union([
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
            Schema.String,
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
          createdAt: "created_at",
          customMetadata: "custom_metadata",
          customOriginServer: "custom_origin_server",
          customOriginSni: "custom_origin_sni",
          ownershipVerification: "ownership_verification",
          ownershipVerificationHttp: "ownership_verification_http",
          ssl: "ssl",
          status: "status",
          verificationErrors: "verification_errors",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateCustomHostnameResponse>;

export type CreateCustomHostnameError = DefaultErrors | SaasQuotaNotAllocated;

export const createCustomHostname: API.OperationMethod<
  CreateCustomHostnameRequest,
  CreateCustomHostnameResponse,
  CreateCustomHostnameError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateCustomHostnameRequest,
  output: CreateCustomHostnameResponse,
  errors: [SaasQuotaNotAllocated],
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
    bundleMethod?: "ubiquitous" | "optimal" | "force" | (string & {});
    certificateAuthority?:
      | "digicert"
      | "google"
      | "lets_encrypt"
      | "ssl_com"
      | (string & {});
    cloudflareBranding?: boolean;
    customCertBundle?: { customCertificate: string; customKey: string }[];
    customCertificate?: string;
    customCsrId?: string;
    customKey?: string;
    method?: "http" | "txt" | "email" | (string & {});
    settings?: {
      ciphers?: string[];
      earlyHints?: "on" | "off" | (string & {});
      http2?: "on" | "off" | (string & {});
      minTlsVersion?: "1.0" | "1.1" | "1.2" | "1.3" | (string & {});
      tls_1_3?: "on" | "off" | (string & {});
    };
    type?: "dv";
    wildcard?: boolean;
  };
}

export const PatchCustomHostnameRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      customHostnameId: Schema.String.pipe(T.HttpPath("customHostnameId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      customMetadata: Schema.optional(
        Schema.Record(Schema.String, Schema.Unknown),
      ),
      customOriginServer: Schema.optional(Schema.String),
      customOriginSni: Schema.optional(Schema.String),
      ssl: Schema.optional(Ssl2),
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
    ),
  ) as unknown as Schema.Codec<PatchCustomHostnameRequest>;

export interface PatchCustomHostnameResponse {
  /** Identifier. */
  id: string;
  /** The custom hostname that will point to your hostname via CNAME. */
  hostname: string;
  /** This is the time the hostname was created. */
  createdAt?: string | null;
  /** Unique key/value metadata for this hostname. These are per-hostname (customer) settings. */
  customMetadata?: Record<string, unknown> | null;
  /** a valid hostname that’s been added to your DNS zone as an A, AAAA, or CNAME record. */
  customOriginServer?: string | null;
  /** A hostname that will be sent to your custom origin server as SNI for TLS handshake. This can be a valid subdomain of the zone or custom origin server name or the string ':request_host_header:' which w */
  customOriginSni?: string | null;
  /** This is a record which can be placed to activate a hostname. */
  ownershipVerification?: {
    name?: string | null;
    type?: "txt" | null;
    value?: string | null;
  } | null;
  /** This presents the token to be served by the given http url to activate a hostname. */
  ownershipVerificationHttp?: {
    httpBody?: string | null;
    httpUrl?: string | null;
  } | null;
  ssl?: {
    id?: string | null;
    bundleMethod?: "ubiquitous" | "optimal" | "force" | (string & {}) | null;
    certificateAuthority?:
      | "digicert"
      | "google"
      | "lets_encrypt"
      | "ssl_com"
      | (string & {})
      | null;
    customCertificate?: string | null;
    customCsrId?: string | null;
    customKey?: string | null;
    dcvDelegationRecords?:
      | {
          cname?: string | null;
          cnameTarget?: string | null;
          emails?: string[] | null;
          httpBody?: string | null;
          httpUrl?: string | null;
          status?: string | null;
          txtName?: string | null;
          txtValue?: string | null;
        }[]
      | null;
    expiresOn?: string | null;
    hosts?: string[] | null;
    issuer?: string | null;
    method?: "http" | "txt" | "email" | (string & {}) | null;
    serialNumber?: string | null;
    settings?: {
      ciphers?: string[] | null;
      earlyHints?: "on" | "off" | (string & {}) | null;
      http2?: "on" | "off" | (string & {}) | null;
      minTlsVersion?: "1.0" | "1.1" | "1.2" | "1.3" | (string & {}) | null;
      tls_1_3?: "on" | "off" | (string & {}) | null;
    } | null;
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
      | (string & {})
      | null;
    type?: "dv" | null;
    uploadedOn?: string | null;
    validationErrors?: { message?: string | null }[] | null;
    validationRecords?:
      | {
          cname?: string | null;
          cnameTarget?: string | null;
          emails?: string[] | null;
          httpBody?: string | null;
          httpUrl?: string | null;
          status?: string | null;
          txtName?: string | null;
          txtValue?: string | null;
        }[]
      | null;
    wildcard?: boolean | null;
  } | null;
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
    | (string & {})
    | null;
  /** These are errors that were encountered while trying to activate a hostname. */
  verificationErrors?: string[] | null;
}

export const PatchCustomHostnameResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      hostname: Schema.String,
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
      ssl: Schema.optional(Schema.Union([Ssl, Schema.Null])),
      status: Schema.optional(
        Schema.Union([
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
            Schema.String,
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
          createdAt: "created_at",
          customMetadata: "custom_metadata",
          customOriginServer: "custom_origin_server",
          customOriginSni: "custom_origin_sni",
          ownershipVerification: "ownership_verification",
          ownershipVerificationHttp: "ownership_verification_http",
          ssl: "ssl",
          status: "status",
          verificationErrors: "verification_errors",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<PatchCustomHostnameResponse>;

export type PatchCustomHostnameError =
  | DefaultErrors
  | CustomHostnameNotFound
  | SaasQuotaNotAllocated;

export const patchCustomHostname: API.OperationMethod<
  PatchCustomHostnameRequest,
  PatchCustomHostnameResponse,
  PatchCustomHostnameError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchCustomHostnameRequest,
  output: PatchCustomHostnameResponse,
  errors: [CustomHostnameNotFound, SaasQuotaNotAllocated],
}));

export interface DeleteCustomHostnameRequest {
  customHostnameId: string;
  /** Identifier. */
  zoneId: string;
}

export const DeleteCustomHostnameRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      customHostnameId: Schema.String.pipe(T.HttpPath("customHostnameId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/zones/{zone_id}/custom_hostnames/{customHostnameId}",
      }),
    ),
  ) as unknown as Schema.Codec<DeleteCustomHostnameRequest>;

export interface DeleteCustomHostnameResponse {
  /** Identifier. */
  id?: string | null;
}

export const DeleteCustomHostnameResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<DeleteCustomHostnameResponse>;

export type DeleteCustomHostnameError =
  | DefaultErrors
  | CustomHostnameNotFound
  | SaasQuotaNotAllocated;

export const deleteCustomHostname: API.OperationMethod<
  DeleteCustomHostnameRequest,
  DeleteCustomHostnameResponse,
  DeleteCustomHostnameError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteCustomHostnameRequest,
  output: DeleteCustomHostnameResponse,
  errors: [CustomHostnameNotFound, SaasQuotaNotAllocated],
}));

// =============================================================================
// FallbackOrigin
// =============================================================================

export interface GetFallbackOriginRequest {
  /** Identifier. */
  zoneId: string;
}

export const GetFallbackOriginRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/custom_hostnames/fallback_origin",
      }),
    ),
  ) as unknown as Schema.Codec<GetFallbackOriginRequest>;

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
    | (string & {})
    | null;
  /** This is the time the fallback origin was updated. */
  updatedAt?: string | null;
}

export const GetFallbackOriginResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      errors: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      origin: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      status: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "initializing",
              "pending_deployment",
              "pending_deletion",
              "active",
              "deployment_timed_out",
              "deletion_timed_out",
            ]),
            Schema.String,
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
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetFallbackOriginResponse>;

export type GetFallbackOriginError =
  | DefaultErrors
  | FallbackOriginNotFound
  | SaasAccessNotGranted
  | Forbidden;

export const getFallbackOrigin: API.OperationMethod<
  GetFallbackOriginRequest,
  GetFallbackOriginResponse,
  GetFallbackOriginError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetFallbackOriginRequest,
  output: GetFallbackOriginResponse,
  errors: [FallbackOriginNotFound, SaasAccessNotGranted, Forbidden],
}));

export interface PutFallbackOriginRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: Your origin hostname that requests to your custom hostnames will be sent to. */
  origin: string;
}

export const PutFallbackOriginRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      origin: Schema.String,
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/zones/{zone_id}/custom_hostnames/fallback_origin",
      }),
    ),
  ) as unknown as Schema.Codec<PutFallbackOriginRequest>;

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
    | (string & {})
    | null;
  /** This is the time the fallback origin was updated. */
  updatedAt?: string | null;
}

export const PutFallbackOriginResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      errors: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      origin: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      status: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "initializing",
              "pending_deployment",
              "pending_deletion",
              "active",
              "deployment_timed_out",
              "deletion_timed_out",
            ]),
            Schema.String,
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
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<PutFallbackOriginResponse>;

export type PutFallbackOriginError = DefaultErrors | SaasAccessNotGranted;

export const putFallbackOrigin: API.OperationMethod<
  PutFallbackOriginRequest,
  PutFallbackOriginResponse,
  PutFallbackOriginError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutFallbackOriginRequest,
  output: PutFallbackOriginResponse,
  errors: [SaasAccessNotGranted],
}));

export interface DeleteFallbackOriginRequest {
  /** Identifier. */
  zoneId: string;
}

export const DeleteFallbackOriginRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/zones/{zone_id}/custom_hostnames/fallback_origin",
      }),
    ),
  ) as unknown as Schema.Codec<DeleteFallbackOriginRequest>;

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
    | (string & {})
    | null;
  /** This is the time the fallback origin was updated. */
  updatedAt?: string | null;
}

export const DeleteFallbackOriginResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      errors: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      origin: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      status: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "initializing",
              "pending_deployment",
              "pending_deletion",
              "active",
              "deployment_timed_out",
              "deletion_timed_out",
            ]),
            Schema.String,
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
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<DeleteFallbackOriginResponse>;

export type DeleteFallbackOriginError =
  | DefaultErrors
  | FallbackOriginNotFound
  | SaasAccessNotGranted;

export const deleteFallbackOrigin: API.OperationMethod<
  DeleteFallbackOriginRequest,
  DeleteFallbackOriginResponse,
  DeleteFallbackOriginError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteFallbackOriginRequest,
  output: DeleteFallbackOriginResponse,
  errors: [FallbackOriginNotFound, SaasAccessNotGranted],
}));
