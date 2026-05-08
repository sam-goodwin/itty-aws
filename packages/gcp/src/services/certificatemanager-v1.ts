// ==========================================================================
// Certificate Manager API (certificatemanager v1)
// DO NOT EDIT - Generated from GCP Discovery Document
// ==========================================================================

import * as Schema from "effect/Schema";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import type { DefaultErrors } from "../errors.ts";
import type * as HttpClient from "effect/unstable/http/HttpClient";

// Service metadata
const svc = T.Service({
  name: "certificatemanager",
  version: "v1",
  rootUrl: "https://certificatemanager.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface CNAME {
  /** Output only. The name of the CNAME record for the domain, equals to `dns_resource_record.name` in the corresponding `DnsAuthorization`. */
  name?: string;
  /** Output only. The expected value of the CNAME record for the domain, equals to `dns_resource_record.data` in the corresponding `DnsAuthorization`. */
  expectedData?: string;
  /** Output only. The resolved CNAME chain. Empty list if the CNAME record for `CNAME.name` is not found. Otherwise the first item is the value of the CNAME record for `CNAME.name`. If the CNAME chain is longer, the second item is the value of the CNAME record for the first item, and so on. */
  resolvedData?: ReadonlyArray<string>;
}

export const CNAME: Schema.Schema<CNAME> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    expectedData: Schema.optional(Schema.String),
    resolvedData: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "CNAME" });

export interface IPs {
  /** Output only. The list of IP addresses, where the certificate is attached and port 443 is open. */
  serving?: ReadonlyArray<string>;
  /** Output only. The list of IP addresses, where the certificate is attached, but port 443 is not open. */
  servingOnAltPorts?: ReadonlyArray<string>;
  /** Output only. The list of IP addresses resolved from the domain's A/AAAA records. Can contain both ipv4 and ipv6 addresses. */
  resolved?: ReadonlyArray<string>;
}

export const IPs: Schema.Schema<IPs> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serving: Schema.optional(Schema.Array(Schema.String)),
    servingOnAltPorts: Schema.optional(Schema.Array(Schema.String)),
    resolved: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "IPs" });

export interface Troubleshooting {
  /** Output only. CNAME troubleshooting information. */
  cname?: CNAME;
  /** Output only. The list of issues discovered during the authorization attempt. */
  issues?: ReadonlyArray<
    | "ISSUE_UNSPECIFIED"
    | "CNAME_MISMATCH"
    | "RESOLVED_TO_NOT_SERVING"
    | "RESOLVED_TO_SERVING_ON_ALT_PORTS"
    | "NO_RESOLVED_IPS"
    | "CERTIFICATE_NOT_ATTACHED"
    | (string & {})
  >;
  /** Output only. IPs troubleshooting information. */
  ips?: IPs;
}

export const Troubleshooting: Schema.Schema<Troubleshooting> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cname: Schema.optional(CNAME),
    issues: Schema.optional(Schema.Array(Schema.String)),
    ips: Schema.optional(IPs),
  }).annotate({ identifier: "Troubleshooting" });

export interface AuthorizationAttemptInfo {
  /** Output only. The timestamp, when the authorization attempt was made. */
  attemptTime?: string;
  /** Output only. Troubleshooting information for the authorization attempt. This field is only populated if the authorization attempt failed. */
  troubleshooting?: Troubleshooting;
  /** Output only. Reason for failure of the authorization attempt for the domain. */
  failureReason?:
    | "FAILURE_REASON_UNSPECIFIED"
    | "CONFIG"
    | "CAA"
    | "RATE_LIMITED"
    | (string & {});
  /** Output only. Human readable explanation for reaching the state. Provided to help address the configuration issues. Not guaranteed to be stable. For programmatic access use FailureReason enum. */
  details?: string;
  /** Output only. Domain name of the authorization attempt. */
  domain?: string;
  /** Output only. State of the domain for managed certificate issuance. */
  state?:
    | "STATE_UNSPECIFIED"
    | "AUTHORIZING"
    | "AUTHORIZED"
    | "FAILED"
    | (string & {});
}

export const AuthorizationAttemptInfo: Schema.Schema<AuthorizationAttemptInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    attemptTime: Schema.optional(Schema.String),
    troubleshooting: Schema.optional(Troubleshooting),
    failureReason: Schema.optional(Schema.String),
    details: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "AuthorizationAttemptInfo" });

export interface Location {
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
}

export const Location: Schema.Schema<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    locationId: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Location" });

export interface ListLocationsResponse {
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** A list of locations that matches the specified filter in the request. */
  locations?: ReadonlyArray<Location>;
}

export const ListLocationsResponse: Schema.Schema<ListLocationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    locations: Schema.optional(Schema.Array(Location)),
  }).annotate({ identifier: "ListLocationsResponse" });

export interface CancelOperationRequest {}

export const CancelOperationRequest: Schema.Schema<CancelOperationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelOperationRequest",
  });

export interface DnsResourceRecord {
  /** Output only. Fully qualified name of the DNS Resource Record. e.g. `_acme-challenge.example.com` */
  name?: string;
  /** Output only. Data of the DNS Resource Record. */
  data?: string;
  /** Output only. Type of the DNS Resource Record. Currently always set to "CNAME". */
  type?: string;
}

export const DnsResourceRecord: Schema.Schema<DnsResourceRecord> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    data: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "DnsResourceRecord" });

export interface DnsAuthorization {
  /** Identifier. A user-defined name of the dns authorization. DnsAuthorization names must be unique globally and match pattern `projects/* /locations/* /dnsAuthorizations/*`. */
  name?: string;
  /** Optional. One or more paragraphs of text description of a DnsAuthorization. */
  description?: string;
  /** Optional. Immutable. Type of DnsAuthorization. If unset during resource creation the following default will be used: - in location `global`: FIXED_RECORD, - in other locations: PER_PROJECT_RECORD. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "FIXED_RECORD"
    | "PER_PROJECT_RECORD"
    | (string & {});
  /** Output only. DNS Resource Record that needs to be added to DNS configuration. */
  dnsResourceRecord?: DnsResourceRecord;
  /** Output only. The creation timestamp of a DnsAuthorization. */
  createTime?: string;
  /** Optional. Set of labels associated with a DnsAuthorization. */
  labels?: Record<string, string>;
  /** Output only. The last update timestamp of a DnsAuthorization. */
  updateTime?: string;
  /** Required. Immutable. A domain that is being authorized. A DnsAuthorization resource covers a single domain and its wildcard, e.g. authorization for `example.com` can be used to issue certificates for `example.com` and `*.example.com`. */
  domain?: string;
}

export const DnsAuthorization: Schema.Schema<DnsAuthorization> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    dnsResourceRecord: Schema.optional(DnsResourceRecord),
    createTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    updateTime: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
  }).annotate({ identifier: "DnsAuthorization" });

export interface IpConfig {
  /** Output only. An external IP address. */
  ipAddress?: string;
  /** Output only. Ports. */
  ports?: ReadonlyArray<number>;
}

export const IpConfig: Schema.Schema<IpConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ipAddress: Schema.optional(Schema.String),
    ports: Schema.optional(Schema.Array(Schema.Number)),
  }).annotate({ identifier: "IpConfig" });

export interface GclbTarget {
  /** Output only. IP configurations for this Target Proxy where the Certificate Map is serving. */
  ipConfigs?: ReadonlyArray<IpConfig>;
  /** Output only. This field returns the resource name in the following format: `//compute.googleapis.com/projects/* /global/targetHttpsProxies/*`. */
  targetHttpsProxy?: string;
  /** Output only. This field returns the resource name in the following format: `//compute.googleapis.com/projects/* /global/targetSslProxies/*`. */
  targetSslProxy?: string;
}

export const GclbTarget: Schema.Schema<GclbTarget> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ipConfigs: Schema.optional(Schema.Array(IpConfig)),
    targetHttpsProxy: Schema.optional(Schema.String),
    targetSslProxy: Schema.optional(Schema.String),
  }).annotate({ identifier: "GclbTarget" });

export interface CertificateMap {
  /** Identifier. A user-defined name of the Certificate Map. Certificate Map names must be unique globally and match pattern `projects/* /locations/* /certificateMaps/*`. */
  name?: string;
  /** Optional. One or more paragraphs of text description of a certificate map. */
  description?: string;
  /** Optional. Set of labels associated with a Certificate Map. */
  labels?: Record<string, string>;
  /** Output only. The update timestamp of a Certificate Map. */
  updateTime?: string;
  /** Output only. A list of GCLB targets that use this Certificate Map. A Target Proxy is only present on this list if it's attached to a Forwarding Rule. */
  gclbTargets?: ReadonlyArray<GclbTarget>;
  /** Output only. The creation timestamp of a Certificate Map. */
  createTime?: string;
}

export const CertificateMap: Schema.Schema<CertificateMap> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    updateTime: Schema.optional(Schema.String),
    gclbTargets: Schema.optional(Schema.Array(GclbTarget)),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "CertificateMap" });

export interface Status {
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
}

export const Status: Schema.Schema<Status> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.Number),
    message: Schema.optional(Schema.String),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).annotate({ identifier: "Status" });

export interface Operation {
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
    done: Schema.optional(Schema.Boolean),
    error: Schema.optional(Status),
  }).annotate({ identifier: "Operation" });

export interface ListOperationsResponse {
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<Operation>;
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
}

export const ListOperationsResponse: Schema.Schema<ListOperationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operations: Schema.optional(Schema.Array(Operation)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListOperationsResponse" });

export interface ListCertificateMapsResponse {
  /** A list of certificate maps for the parent resource. */
  certificateMaps?: ReadonlyArray<CertificateMap>;
  /** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListCertificateMapsResponse: Schema.Schema<ListCertificateMapsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    certificateMaps: Schema.optional(Schema.Array(CertificateMap)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListCertificateMapsResponse" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface TrustAnchor {
  /** PEM root certificate of the PKI used for validation. Each certificate provided in PEM format may occupy up to 5kB. */
  pemCertificate?: string;
}

export const TrustAnchor: Schema.Schema<TrustAnchor> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pemCertificate: Schema.optional(Schema.String),
  }).annotate({ identifier: "TrustAnchor" });

export interface ListDnsAuthorizationsResponse {
  /** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A list of dns authorizations for the parent resource. */
  dnsAuthorizations?: ReadonlyArray<DnsAuthorization>;
}

export const ListDnsAuthorizationsResponse: Schema.Schema<ListDnsAuthorizationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    dnsAuthorizations: Schema.optional(Schema.Array(DnsAuthorization)),
  }).annotate({ identifier: "ListDnsAuthorizationsResponse" });

export interface CertificateMapEntry {
  /** Output only. The update timestamp of a Certificate Map Entry. */
  updateTime?: string;
  /** Output only. A serving state of this Certificate Map Entry. */
  state?: "SERVING_STATE_UNSPECIFIED" | "ACTIVE" | "PENDING" | (string & {});
  /** Optional. Set of labels associated with a Certificate Map Entry. */
  labels?: Record<string, string>;
  /** Output only. The creation timestamp of a Certificate Map Entry. */
  createTime?: string;
  /** Optional. One or more paragraphs of text description of a certificate map entry. */
  description?: string;
  /** A predefined matcher for particular cases, other than SNI selection. */
  matcher?: "MATCHER_UNSPECIFIED" | "PRIMARY" | (string & {});
  /** A Hostname (FQDN, e.g. `example.com`) or a wildcard hostname expression (`*.example.com`) for a set of hostnames with common suffix. Used as Server Name Indication (SNI) for selecting a proper certificate. */
  hostname?: string;
  /** Optional. A set of Certificates defines for the given `hostname`. There can be defined up to four certificates in each Certificate Map Entry. Each certificate must match pattern `projects/* /locations/* /certificates/*`. */
  certificates?: ReadonlyArray<string>;
  /** Identifier. A user-defined name of the Certificate Map Entry. Certificate Map Entry names must be unique globally and match pattern `projects/* /locations/* /certificateMaps/* /certificateMapEntries/*`. */
  name?: string;
}

export const CertificateMapEntry: Schema.Schema<CertificateMapEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    createTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    matcher: Schema.optional(Schema.String),
    hostname: Schema.optional(Schema.String),
    certificates: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "CertificateMapEntry" });

export interface IntermediateCA {
  /** PEM intermediate certificate used for building up paths for validation. Each certificate provided in PEM format may occupy up to 5kB. */
  pemCertificate?: string;
}

export const IntermediateCA: Schema.Schema<IntermediateCA> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pemCertificate: Schema.optional(Schema.String),
  }).annotate({ identifier: "IntermediateCA" });

export interface TrustStore {
  /** Optional. List of Trust Anchors to be used while performing validation against a given TrustStore. */
  trustAnchors?: ReadonlyArray<TrustAnchor>;
  /** Optional. Set of intermediate CA certificates used for the path building phase of chain validation. The field is currently not supported if TrustConfig is used for the workload certificate feature. */
  intermediateCas?: ReadonlyArray<IntermediateCA>;
}

export const TrustStore: Schema.Schema<TrustStore> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    trustAnchors: Schema.optional(Schema.Array(TrustAnchor)),
    intermediateCas: Schema.optional(Schema.Array(IntermediateCA)),
  }).annotate({ identifier: "TrustStore" });

export interface CertificateAuthorityServiceConfig {
  /** Required. A CA pool resource used to issue a certificate. The CA pool string has a relative resource path following the form "projects/{project}/locations/{location}/caPools/{ca_pool}". */
  caPool?: string;
}

export const CertificateAuthorityServiceConfig: Schema.Schema<CertificateAuthorityServiceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    caPool: Schema.optional(Schema.String),
  }).annotate({ identifier: "CertificateAuthorityServiceConfig" });

export interface CertificateAuthorityConfig {
  /** Defines a CertificateAuthorityServiceConfig. */
  certificateAuthorityServiceConfig?: CertificateAuthorityServiceConfig;
}

export const CertificateAuthorityConfig: Schema.Schema<CertificateAuthorityConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    certificateAuthorityServiceConfig: Schema.optional(
      CertificateAuthorityServiceConfig,
    ),
  }).annotate({ identifier: "CertificateAuthorityConfig" });

export interface CertificateIssuanceConfig {
  /** Required. The CA that issues the workload certificate. It includes the CA address, type, authentication to CA service, etc. */
  certificateAuthorityConfig?: CertificateAuthorityConfig;
  /** Optional. One or more paragraphs of text description of a CertificateIssuanceConfig. */
  description?: string;
  /** Optional. Set of labels associated with a CertificateIssuanceConfig. */
  labels?: Record<string, string>;
  /** Required. Specifies the percentage of elapsed time of the certificate lifetime to wait before renewing the certificate. Must be a number between 1-99, inclusive. */
  rotationWindowPercentage?: number;
  /** Output only. The last update timestamp of a CertificateIssuanceConfig. */
  updateTime?: string;
  /** Required. The key algorithm to use when generating the private key. */
  keyAlgorithm?:
    | "KEY_ALGORITHM_UNSPECIFIED"
    | "RSA_2048"
    | "ECDSA_P256"
    | (string & {});
  /** Output only. The creation timestamp of a CertificateIssuanceConfig. */
  createTime?: string;
  /** Identifier. A user-defined name of the certificate issuance config. CertificateIssuanceConfig names must be unique globally and match pattern `projects/* /locations/* /certificateIssuanceConfigs/*`. */
  name?: string;
  /** Required. Workload certificate lifetime requested. */
  lifetime?: string;
}

export const CertificateIssuanceConfig: Schema.Schema<CertificateIssuanceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    certificateAuthorityConfig: Schema.optional(CertificateAuthorityConfig),
    description: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    rotationWindowPercentage: Schema.optional(Schema.Number),
    updateTime: Schema.optional(Schema.String),
    keyAlgorithm: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    lifetime: Schema.optional(Schema.String),
  }).annotate({ identifier: "CertificateIssuanceConfig" });

export interface UsedBy {
  /** Output only. Full name of the resource https://google.aip.dev/122#full-resource-names, e.g. `//certificatemanager.googleapis.com/projects/* /locations/* /certificateMaps/* /certificateMapEntries/*` or `//compute.googleapis.com/projects/* /locations/* /targetHttpsProxies/*`. */
  name?: string;
}

export const UsedBy: Schema.Schema<UsedBy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "UsedBy" });

export interface SelfManagedCertificate {
  /** Optional. Input only. The PEM-encoded certificate chain. Leaf certificate comes first, followed by intermediate ones if any. */
  pemCertificate?: string;
  /** Optional. Input only. The PEM-encoded private key of the leaf certificate. */
  pemPrivateKey?: string;
}

export const SelfManagedCertificate: Schema.Schema<SelfManagedCertificate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pemCertificate: Schema.optional(Schema.String),
    pemPrivateKey: Schema.optional(Schema.String),
  }).annotate({ identifier: "SelfManagedCertificate" });

export interface ProvisioningIssue {
  /** Output only. Human readable explanation about the issue. Provided to help address the configuration issues. Not guaranteed to be stable. For programmatic access use Reason enum. */
  details?: string;
  /** Output only. Reason for provisioning failures. */
  reason?:
    | "REASON_UNSPECIFIED"
    | "AUTHORIZATION_ISSUE"
    | "RATE_LIMITED"
    | (string & {});
}

export const ProvisioningIssue: Schema.Schema<ProvisioningIssue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    details: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProvisioningIssue" });

export interface ManagedIdentityCertificate {
  /** Required. Immutable. SPIFFE ID of the Managed Identity used for this certificate. */
  identity?: string;
  /** Output only. State of the managed certificate resource. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PROVISIONING"
    | "FAILED"
    | "ACTIVE"
    | (string & {});
  /** Output only. Information about issues with provisioning a managed certificate. */
  provisioningIssue?: ProvisioningIssue;
}

export const ManagedIdentityCertificate: Schema.Schema<ManagedIdentityCertificate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    identity: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    provisioningIssue: Schema.optional(ProvisioningIssue),
  }).annotate({ identifier: "ManagedIdentityCertificate" });

export interface ManagedCertificate {
  /** Optional. Immutable. Authorizations that will be used for performing domain authorization. */
  dnsAuthorizations?: ReadonlyArray<string>;
  /** Output only. State of the managed certificate resource. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PROVISIONING"
    | "FAILED"
    | "ACTIVE"
    | (string & {});
  /** Optional. Immutable. The domains for which a managed SSL certificate will be generated. Wildcard domains are only supported with DNS challenge resolution. */
  domains?: ReadonlyArray<string>;
  /** Optional. Immutable. The resource name for a CertificateIssuanceConfig used to configure private PKI certificates in the format `projects/* /locations/* /certificateIssuanceConfigs/*`. If this field is not set, the certificates will instead be publicly signed as documented at https://cloud.google.com/load-balancing/docs/ssl-certificates/google-managed-certs#caa. */
  issuanceConfig?: string;
  /** Output only. Information about issues with provisioning a Managed Certificate. */
  provisioningIssue?: ProvisioningIssue;
  /** Output only. Detailed state of the latest authorization attempt for each domain specified for managed certificate resource. */
  authorizationAttemptInfo?: ReadonlyArray<AuthorizationAttemptInfo>;
}

export const ManagedCertificate: Schema.Schema<ManagedCertificate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dnsAuthorizations: Schema.optional(Schema.Array(Schema.String)),
    state: Schema.optional(Schema.String),
    domains: Schema.optional(Schema.Array(Schema.String)),
    issuanceConfig: Schema.optional(Schema.String),
    provisioningIssue: Schema.optional(ProvisioningIssue),
    authorizationAttemptInfo: Schema.optional(
      Schema.Array(AuthorizationAttemptInfo),
    ),
  }).annotate({ identifier: "ManagedCertificate" });

export interface Certificate {
  /** Optional. Immutable. The scope of the certificate. */
  scope?:
    | "DEFAULT"
    | "EDGE_CACHE"
    | "ALL_REGIONS"
    | "CLIENT_AUTH"
    | (string & {});
  /** Identifier. A user-defined name of the certificate. Certificate names must be unique globally and match pattern `projects/* /locations/* /certificates/*`. */
  name?: string;
  /** If set, contains configuration and state of a managed identity certificate. */
  managedIdentity?: ManagedIdentityCertificate;
  /** Output only. The list of resources that use this Certificate. */
  usedBy?: ReadonlyArray<UsedBy>;
  /** Output only. The list of Subject Alternative Names of dnsName type defined in the certificate (see RFC 5280 4.2.1.6). Managed certificates that haven't been provisioned yet have this field populated with a value of the managed.domains field. */
  sanDnsnames?: ReadonlyArray<string>;
  /** Optional. One or more paragraphs of text description of a certificate. */
  description?: string;
  /** Optional. Set of labels associated with a Certificate. */
  labels?: Record<string, string>;
  /** Output only. The last update timestamp of a Certificate. */
  updateTime?: string;
  /** If set, contains configuration and state of a managed certificate. */
  managed?: ManagedCertificate;
  /** Output only. The creation timestamp of a Certificate. */
  createTime?: string;
  /** Output only. The PEM-encoded certificate chain. */
  pemCertificate?: string;
  /** Output only. The expiry timestamp of a Certificate. */
  expireTime?: string;
  /** If set, defines data of a self-managed certificate. */
  selfManaged?: SelfManagedCertificate;
}

export const Certificate: Schema.Schema<Certificate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scope: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    managedIdentity: Schema.optional(ManagedIdentityCertificate),
    usedBy: Schema.optional(Schema.Array(UsedBy)),
    sanDnsnames: Schema.optional(Schema.Array(Schema.String)),
    description: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    updateTime: Schema.optional(Schema.String),
    managed: Schema.optional(ManagedCertificate),
    createTime: Schema.optional(Schema.String),
    pemCertificate: Schema.optional(Schema.String),
    expireTime: Schema.optional(Schema.String),
    selfManaged: Schema.optional(SelfManagedCertificate),
  }).annotate({ identifier: "Certificate" });

export interface ListCertificateMapEntriesResponse {
  /** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A list of certificate map entries for the parent resource. */
  certificateMapEntries?: ReadonlyArray<CertificateMapEntry>;
}

export const ListCertificateMapEntriesResponse: Schema.Schema<ListCertificateMapEntriesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    certificateMapEntries: Schema.optional(Schema.Array(CertificateMapEntry)),
  }).annotate({ identifier: "ListCertificateMapEntriesResponse" });

export interface OperationMetadata {
  /** Name of the verb executed by the operation. */
  verb?: string;
  /** API version used to start the operation. */
  apiVersion?: string;
  /** The time the operation finished running. */
  endTime?: string;
  /** Server-defined resource path for the target of the operation. */
  target?: string;
  /** The time the operation was created. */
  createTime?: string;
  /** Human-readable status of the operation, if any. */
  statusMessage?: string;
  /** Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have google.longrunning.Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
}

export const OperationMetadata: Schema.Schema<OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    verb: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    statusMessage: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "OperationMetadata" });

export interface AllowlistedCertificate {
  /** Required. PEM certificate that is allowlisted. The certificate can be up to 5k bytes, and must be a parseable X.509 certificate. */
  pemCertificate?: string;
}

export const AllowlistedCertificate: Schema.Schema<AllowlistedCertificate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pemCertificate: Schema.optional(Schema.String),
  }).annotate({ identifier: "AllowlistedCertificate" });

export interface TrustConfig {
  /** Optional. A certificate matching an allowlisted certificate is always considered valid as long as the certificate is parseable, proof of private key possession is established, and constraints on the certificate's SAN field are met. */
  allowlistedCertificates?: ReadonlyArray<AllowlistedCertificate>;
  /** Identifier. A user-defined name of the trust config. TrustConfig names must be unique globally and match pattern `projects/* /locations/* /trustConfigs/*`. */
  name?: string;
  /** This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
  /** Optional. Defines a mapping from a trust domain to a TrustStore. This is used for SPIFFE certificate validation. */
  spiffeTrustStores?: Record<string, TrustStore>;
  /** Optional. One or more paragraphs of text description of a TrustConfig. */
  description?: string;
  /** Output only. The last update timestamp of a TrustConfig. */
  updateTime?: string;
  /** Optional. Set of trust stores to perform validation against. This field is supported when TrustConfig is configured with Load Balancers, currently not supported for SPIFFE certificate validation. Only one TrustStore specified is currently allowed. */
  trustStores?: ReadonlyArray<TrustStore>;
  /** Optional. Set of labels associated with a TrustConfig. */
  labels?: Record<string, string>;
  /** Output only. The creation timestamp of a TrustConfig. */
  createTime?: string;
}

export const TrustConfig: Schema.Schema<TrustConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowlistedCertificates: Schema.optional(
      Schema.Array(AllowlistedCertificate),
    ),
    name: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    spiffeTrustStores: Schema.optional(
      Schema.Record(Schema.String, TrustStore),
    ),
    description: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    trustStores: Schema.optional(Schema.Array(TrustStore)),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "TrustConfig" });

export interface ListTrustConfigsResponse {
  /** A list of TrustConfigs for the parent resource. */
  trustConfigs?: ReadonlyArray<TrustConfig>;
  /** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListTrustConfigsResponse: Schema.Schema<ListTrustConfigsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    trustConfigs: Schema.optional(Schema.Array(TrustConfig)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListTrustConfigsResponse" });

export interface ListCertificatesResponse {
  /** A list of certificates for the parent resource. */
  certificates?: ReadonlyArray<Certificate>;
  /** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
  nextPageToken?: string;
  /** A list of locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListCertificatesResponse: Schema.Schema<ListCertificatesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    certificates: Schema.optional(Schema.Array(Certificate)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListCertificatesResponse" });

export interface ListCertificateIssuanceConfigsResponse {
  /** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A list of certificate configs for the parent resource. */
  certificateIssuanceConfigs?: ReadonlyArray<CertificateIssuanceConfig>;
}

export const ListCertificateIssuanceConfigsResponse: Schema.Schema<ListCertificateIssuanceConfigsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    certificateIssuanceConfigs: Schema.optional(
      Schema.Array(CertificateIssuanceConfig),
    ),
  }).annotate({ identifier: "ListCertificateIssuanceConfigsResponse" });

// ==========================================================================
// Errors
// ==========================================================================

export class NotFound extends Schema.TaggedErrorClass<NotFound>()("NotFound", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
  details: Schema.optional(Schema.Array(Schema.Unknown)),
}) {}
T.applyErrorMatchers(NotFound, [{ httpStatus: 404 }]);

export class Forbidden extends Schema.TaggedErrorClass<Forbidden>()(
  "Forbidden",
  {
    code: Schema.optional(Schema.Number),
    message: Schema.String,
    status: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    details: Schema.optional(Schema.Array(Schema.Unknown)),
  },
) {}
T.applyErrorMatchers(Forbidden, [{ httpStatus: 403 }]);

export class BadRequest extends Schema.TaggedErrorClass<BadRequest>()(
  "BadRequest",
  {
    code: Schema.optional(Schema.Number),
    message: Schema.String,
    status: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    details: Schema.optional(Schema.Array(Schema.Unknown)),
  },
) {}
T.applyErrorMatchers(BadRequest, [{ httpStatus: 400 }]);

export class Conflict extends Schema.TaggedErrorClass<Conflict>()("Conflict", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
  details: Schema.optional(Schema.Array(Schema.Unknown)),
}) {}
T.applyErrorMatchers(Conflict, [{ httpStatus: 409 }]);

// ==========================================================================
// Operations
// ==========================================================================

export interface ListProjectsLocationsRequest {
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
  /** The resource that owns the locations collection, if applicable. */
  name: string;
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/locations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRequest>;

export type ListProjectsLocationsResponse = ListLocationsResponse;
export const ListProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListLocationsResponse;

export type ListProjectsLocationsError = DefaultErrors | NotFound | Forbidden;

/** Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the ListLocationsRequest.name field: * **Global locations**: If `name` is empty, the method lists the public locations available to all projects. * **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version. */
export const listProjectsLocations: API.PaginatedOperationMethod<
  ListProjectsLocationsRequest,
  ListProjectsLocationsResponse,
  ListProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRequest,
  output: ListProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsRequest {
  /** Resource name for the location. */
  name: string;
}

export const GetProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsRequest>;

export type GetProjectsLocationsResponse = Location;
export const GetProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Location;

export type GetProjectsLocationsError = DefaultErrors | NotFound | Forbidden;

/** Gets information about a location. */
export const getProjectsLocations: API.OperationMethod<
  GetProjectsLocationsRequest,
  GetProjectsLocationsResponse,
  GetProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRequest,
  output: GetProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsOperationsRequest {
  /** The standard list filter. */
  filter?: string;
  /** The standard list page size. */
  pageSize?: number;
  /** The standard list page token. */
  pageToken?: string;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The name of the operation's parent resource. */
  name: string;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/operations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsOperationsRequest>;

export type ListProjectsLocationsOperationsResponse = ListOperationsResponse;
export const ListProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListOperationsResponse;

export type ListProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. */
export const listProjectsLocationsOperations: API.PaginatedOperationMethod<
  ListProjectsLocationsOperationsRequest,
  ListProjectsLocationsOperationsResponse,
  ListProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsOperationsRequest,
  output: ListProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsOperationsRequest>;

export type GetProjectsLocationsOperationsResponse = Operation;
export const GetProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type GetProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getProjectsLocationsOperations: API.OperationMethod<
  GetProjectsLocationsOperationsRequest,
  GetProjectsLocationsOperationsResponse,
  GetProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsOperationsRequest,
  output: GetProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CancelProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be cancelled. */
  name: string;
  /** Request body */
  body?: CancelOperationRequest;
}

export const CancelProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CancelOperationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CancelProjectsLocationsOperationsRequest>;

export type CancelProjectsLocationsOperationsResponse = Empty;
export const CancelProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type CancelProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`. */
export const cancelProjectsLocationsOperations: API.OperationMethod<
  CancelProjectsLocationsOperationsRequest,
  CancelProjectsLocationsOperationsResponse,
  CancelProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelProjectsLocationsOperationsRequest,
  output: CancelProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be deleted. */
  name: string;
}

export const DeleteProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsOperationsRequest>;

export type DeleteProjectsLocationsOperationsResponse = Empty;
export const DeleteProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. */
export const deleteProjectsLocationsOperations: API.OperationMethod<
  DeleteProjectsLocationsOperationsRequest,
  DeleteProjectsLocationsOperationsResponse,
  DeleteProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsOperationsRequest,
  output: DeleteProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsCertificateMapsRequest {
  /** Required. The parent resource of the certificate map. Must be in the format `projects/* /locations/*`. */
  parent: string;
  /** Required. A user-provided name of the certificate map. */
  certificateMapId?: string;
  /** Request body */
  body?: CertificateMap;
}

export const CreateProjectsLocationsCertificateMapsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    certificateMapId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("certificateMapId"),
    ),
    body: Schema.optional(CertificateMap).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/certificateMaps",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsCertificateMapsRequest>;

export type CreateProjectsLocationsCertificateMapsResponse = Operation;
export const CreateProjectsLocationsCertificateMapsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsCertificateMapsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new CertificateMap in a given project and location. */
export const createProjectsLocationsCertificateMaps: API.OperationMethod<
  CreateProjectsLocationsCertificateMapsRequest,
  CreateProjectsLocationsCertificateMapsResponse,
  CreateProjectsLocationsCertificateMapsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsCertificateMapsRequest,
  output: CreateProjectsLocationsCertificateMapsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsCertificateMapsRequest {
  /** Identifier. A user-defined name of the Certificate Map. Certificate Map names must be unique globally and match pattern `projects/* /locations/* /certificateMaps/*`. */
  name: string;
  /** Required. The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask. */
  updateMask?: string;
  /** Request body */
  body?: CertificateMap;
}

export const PatchProjectsLocationsCertificateMapsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(CertificateMap).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsCertificateMapsRequest>;

export type PatchProjectsLocationsCertificateMapsResponse = Operation;
export const PatchProjectsLocationsCertificateMapsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsCertificateMapsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a CertificateMap. */
export const patchProjectsLocationsCertificateMaps: API.OperationMethod<
  PatchProjectsLocationsCertificateMapsRequest,
  PatchProjectsLocationsCertificateMapsResponse,
  PatchProjectsLocationsCertificateMapsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsCertificateMapsRequest,
  output: PatchProjectsLocationsCertificateMapsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsCertificateMapsRequest {
  /** Required. A name of the certificate map to delete. Must be in the format `projects/* /locations/* /certificateMaps/*`. */
  name: string;
}

export const DeleteProjectsLocationsCertificateMapsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsCertificateMapsRequest>;

export type DeleteProjectsLocationsCertificateMapsResponse = Operation;
export const DeleteProjectsLocationsCertificateMapsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsCertificateMapsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single CertificateMap. A Certificate Map can't be deleted if it contains Certificate Map Entries. Remove all the entries from the map before calling this method. */
export const deleteProjectsLocationsCertificateMaps: API.OperationMethod<
  DeleteProjectsLocationsCertificateMapsRequest,
  DeleteProjectsLocationsCertificateMapsResponse,
  DeleteProjectsLocationsCertificateMapsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsCertificateMapsRequest,
  output: DeleteProjectsLocationsCertificateMapsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsCertificateMapsRequest {
  /** Required. The project and location from which the certificate maps should be listed, specified in the format `projects/* /locations/*`. */
  parent: string;
  /** Optional. Maximum number of certificate maps to return per call. */
  pageSize?: number;
  /** Optional. Filter expression to restrict the Certificates Maps returned. */
  filter?: string;
  /** Optional. A list of Certificate Map field names used to specify the order of the returned results. The default sorting order is ascending. To specify descending order for a field, add a suffix `" desc"`. */
  orderBy?: string;
  /** Optional. The value returned by the last `ListCertificateMapsResponse`. Indicates that this is a continuation of a prior `ListCertificateMaps` call, and that the system should return the next page of data. */
  pageToken?: string;
}

export const ListProjectsLocationsCertificateMapsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/certificateMaps" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsCertificateMapsRequest>;

export type ListProjectsLocationsCertificateMapsResponse =
  ListCertificateMapsResponse;
export const ListProjectsLocationsCertificateMapsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListCertificateMapsResponse;

export type ListProjectsLocationsCertificateMapsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists CertificateMaps in a given project and location. */
export const listProjectsLocationsCertificateMaps: API.PaginatedOperationMethod<
  ListProjectsLocationsCertificateMapsRequest,
  ListProjectsLocationsCertificateMapsResponse,
  ListProjectsLocationsCertificateMapsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsCertificateMapsRequest,
  output: ListProjectsLocationsCertificateMapsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsCertificateMapsRequest {
  /** Required. A name of the certificate map to describe. Must be in the format `projects/* /locations/* /certificateMaps/*`. */
  name: string;
}

export const GetProjectsLocationsCertificateMapsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsCertificateMapsRequest>;

export type GetProjectsLocationsCertificateMapsResponse = CertificateMap;
export const GetProjectsLocationsCertificateMapsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CertificateMap;

export type GetProjectsLocationsCertificateMapsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single CertificateMap. */
export const getProjectsLocationsCertificateMaps: API.OperationMethod<
  GetProjectsLocationsCertificateMapsRequest,
  GetProjectsLocationsCertificateMapsResponse,
  GetProjectsLocationsCertificateMapsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsCertificateMapsRequest,
  output: GetProjectsLocationsCertificateMapsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsCertificateMapsCertificateMapEntriesRequest {
  /** Optional. The value returned by the last `ListCertificateMapEntriesResponse`. Indicates that this is a continuation of a prior `ListCertificateMapEntries` call, and that the system should return the next page of data. */
  pageToken?: string;
  /** Optional. A list of Certificate Map Entry field names used to specify the order of the returned results. The default sorting order is ascending. To specify descending order for a field, add a suffix `" desc"`. */
  orderBy?: string;
  /** Optional. Maximum number of certificate map entries to return. The service may return fewer than this value. If unspecified, at most 50 certificate map entries will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. Filter expression to restrict the returned Certificate Map Entries. */
  filter?: string;
  /** Required. The project, location and certificate map from which the certificate map entries should be listed, specified in the format `projects/* /locations/* /certificateMaps/*`. */
  parent: string;
}

export const ListProjectsLocationsCertificateMapsCertificateMapEntriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/certificateMapEntries" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsCertificateMapsCertificateMapEntriesRequest>;

export type ListProjectsLocationsCertificateMapsCertificateMapEntriesResponse =
  ListCertificateMapEntriesResponse;
export const ListProjectsLocationsCertificateMapsCertificateMapEntriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListCertificateMapEntriesResponse;

export type ListProjectsLocationsCertificateMapsCertificateMapEntriesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists CertificateMapEntries in a given project and location. */
export const listProjectsLocationsCertificateMapsCertificateMapEntries: API.PaginatedOperationMethod<
  ListProjectsLocationsCertificateMapsCertificateMapEntriesRequest,
  ListProjectsLocationsCertificateMapsCertificateMapEntriesResponse,
  ListProjectsLocationsCertificateMapsCertificateMapEntriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsCertificateMapsCertificateMapEntriesRequest,
  output: ListProjectsLocationsCertificateMapsCertificateMapEntriesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsCertificateMapsCertificateMapEntriesRequest {
  /** Required. A name of the certificate map entry to describe. Must be in the format `projects/* /locations/* /certificateMaps/* /certificateMapEntries/*`. */
  name: string;
}

export const GetProjectsLocationsCertificateMapsCertificateMapEntriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsCertificateMapsCertificateMapEntriesRequest>;

export type GetProjectsLocationsCertificateMapsCertificateMapEntriesResponse =
  CertificateMapEntry;
export const GetProjectsLocationsCertificateMapsCertificateMapEntriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ CertificateMapEntry;

export type GetProjectsLocationsCertificateMapsCertificateMapEntriesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single CertificateMapEntry. */
export const getProjectsLocationsCertificateMapsCertificateMapEntries: API.OperationMethod<
  GetProjectsLocationsCertificateMapsCertificateMapEntriesRequest,
  GetProjectsLocationsCertificateMapsCertificateMapEntriesResponse,
  GetProjectsLocationsCertificateMapsCertificateMapEntriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsCertificateMapsCertificateMapEntriesRequest,
  output: GetProjectsLocationsCertificateMapsCertificateMapEntriesResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsCertificateMapsCertificateMapEntriesRequest {
  /** Required. A name of the certificate map entry to delete. Must be in the format `projects/* /locations/* /certificateMaps/* /certificateMapEntries/*`. */
  name: string;
}

export const DeleteProjectsLocationsCertificateMapsCertificateMapEntriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsCertificateMapsCertificateMapEntriesRequest>;

export type DeleteProjectsLocationsCertificateMapsCertificateMapEntriesResponse =
  Operation;
export const DeleteProjectsLocationsCertificateMapsCertificateMapEntriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsCertificateMapsCertificateMapEntriesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single CertificateMapEntry. */
export const deleteProjectsLocationsCertificateMapsCertificateMapEntries: API.OperationMethod<
  DeleteProjectsLocationsCertificateMapsCertificateMapEntriesRequest,
  DeleteProjectsLocationsCertificateMapsCertificateMapEntriesResponse,
  DeleteProjectsLocationsCertificateMapsCertificateMapEntriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsCertificateMapsCertificateMapEntriesRequest,
  output: DeleteProjectsLocationsCertificateMapsCertificateMapEntriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsCertificateMapsCertificateMapEntriesRequest {
  /** Required. The parent resource of the certificate map entry. Must be in the format `projects/* /locations/* /certificateMaps/*`. */
  parent: string;
  /** Required. A user-provided name of the certificate map entry. */
  certificateMapEntryId?: string;
  /** Request body */
  body?: CertificateMapEntry;
}

export const CreateProjectsLocationsCertificateMapsCertificateMapEntriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    certificateMapEntryId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("certificateMapEntryId"),
    ),
    body: Schema.optional(CertificateMapEntry).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/certificateMapEntries",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsCertificateMapsCertificateMapEntriesRequest>;

export type CreateProjectsLocationsCertificateMapsCertificateMapEntriesResponse =
  Operation;
export const CreateProjectsLocationsCertificateMapsCertificateMapEntriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsCertificateMapsCertificateMapEntriesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new CertificateMapEntry in a given project and location. */
export const createProjectsLocationsCertificateMapsCertificateMapEntries: API.OperationMethod<
  CreateProjectsLocationsCertificateMapsCertificateMapEntriesRequest,
  CreateProjectsLocationsCertificateMapsCertificateMapEntriesResponse,
  CreateProjectsLocationsCertificateMapsCertificateMapEntriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsCertificateMapsCertificateMapEntriesRequest,
  output: CreateProjectsLocationsCertificateMapsCertificateMapEntriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsCertificateMapsCertificateMapEntriesRequest {
  /** Identifier. A user-defined name of the Certificate Map Entry. Certificate Map Entry names must be unique globally and match pattern `projects/* /locations/* /certificateMaps/* /certificateMapEntries/*`. */
  name: string;
  /** Required. The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask. */
  updateMask?: string;
  /** Request body */
  body?: CertificateMapEntry;
}

export const PatchProjectsLocationsCertificateMapsCertificateMapEntriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(CertificateMapEntry).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsCertificateMapsCertificateMapEntriesRequest>;

export type PatchProjectsLocationsCertificateMapsCertificateMapEntriesResponse =
  Operation;
export const PatchProjectsLocationsCertificateMapsCertificateMapEntriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsCertificateMapsCertificateMapEntriesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a CertificateMapEntry. */
export const patchProjectsLocationsCertificateMapsCertificateMapEntries: API.OperationMethod<
  PatchProjectsLocationsCertificateMapsCertificateMapEntriesRequest,
  PatchProjectsLocationsCertificateMapsCertificateMapEntriesResponse,
  PatchProjectsLocationsCertificateMapsCertificateMapEntriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsCertificateMapsCertificateMapEntriesRequest,
  output: PatchProjectsLocationsCertificateMapsCertificateMapEntriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsCertificateIssuanceConfigsRequest {
  /** Required. The parent resource of the certificate issuance config. Must be in the format `projects/* /locations/*`. */
  parent: string;
  /** Required. A user-provided name of the certificate config. */
  certificateIssuanceConfigId?: string;
  /** Request body */
  body?: CertificateIssuanceConfig;
}

export const CreateProjectsLocationsCertificateIssuanceConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    certificateIssuanceConfigId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("certificateIssuanceConfigId"),
    ),
    body: Schema.optional(CertificateIssuanceConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/certificateIssuanceConfigs",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsCertificateIssuanceConfigsRequest>;

export type CreateProjectsLocationsCertificateIssuanceConfigsResponse =
  Operation;
export const CreateProjectsLocationsCertificateIssuanceConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsCertificateIssuanceConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new CertificateIssuanceConfig in a given project and location. */
export const createProjectsLocationsCertificateIssuanceConfigs: API.OperationMethod<
  CreateProjectsLocationsCertificateIssuanceConfigsRequest,
  CreateProjectsLocationsCertificateIssuanceConfigsResponse,
  CreateProjectsLocationsCertificateIssuanceConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsCertificateIssuanceConfigsRequest,
  output: CreateProjectsLocationsCertificateIssuanceConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsCertificateIssuanceConfigsRequest {
  /** Identifier. A user-defined name of the certificate issuance config. CertificateIssuanceConfig names must be unique globally and match pattern `projects/* /locations/* /certificateIssuanceConfigs/*`. */
  name: string;
  /** Required. The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask. */
  updateMask?: string;
  /** Request body */
  body?: CertificateIssuanceConfig;
}

export const PatchProjectsLocationsCertificateIssuanceConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(CertificateIssuanceConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsCertificateIssuanceConfigsRequest>;

export type PatchProjectsLocationsCertificateIssuanceConfigsResponse =
  Operation;
export const PatchProjectsLocationsCertificateIssuanceConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsCertificateIssuanceConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a CertificateIssuanceConfig. */
export const patchProjectsLocationsCertificateIssuanceConfigs: API.OperationMethod<
  PatchProjectsLocationsCertificateIssuanceConfigsRequest,
  PatchProjectsLocationsCertificateIssuanceConfigsResponse,
  PatchProjectsLocationsCertificateIssuanceConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsCertificateIssuanceConfigsRequest,
  output: PatchProjectsLocationsCertificateIssuanceConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsCertificateIssuanceConfigsRequest {
  /** Required. A name of the certificate issuance config to delete. Must be in the format `projects/* /locations/* /certificateIssuanceConfigs/*`. */
  name: string;
}

export const DeleteProjectsLocationsCertificateIssuanceConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsCertificateIssuanceConfigsRequest>;

export type DeleteProjectsLocationsCertificateIssuanceConfigsResponse =
  Operation;
export const DeleteProjectsLocationsCertificateIssuanceConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsCertificateIssuanceConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single CertificateIssuanceConfig. */
export const deleteProjectsLocationsCertificateIssuanceConfigs: API.OperationMethod<
  DeleteProjectsLocationsCertificateIssuanceConfigsRequest,
  DeleteProjectsLocationsCertificateIssuanceConfigsResponse,
  DeleteProjectsLocationsCertificateIssuanceConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsCertificateIssuanceConfigsRequest,
  output: DeleteProjectsLocationsCertificateIssuanceConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsCertificateIssuanceConfigsRequest {
  /** Optional. The value returned by the last `ListCertificateIssuanceConfigsResponse`. Indicates that this is a continuation of a prior `ListCertificateIssuanceConfigs` call, and that the system should return the next page of data. */
  pageToken?: string;
  /** Optional. A list of Certificate Config field names used to specify the order of the returned results. The default sorting order is ascending. To specify descending order for a field, add a suffix `" desc"`. */
  orderBy?: string;
  /** Optional. Maximum number of certificate configs to return per call. */
  pageSize?: number;
  /** Optional. Filter expression to restrict the Certificates Configs returned. */
  filter?: string;
  /** Required. The project and location from which the certificate should be listed, specified in the format `projects/* /locations/*`. */
  parent: string;
}

export const ListProjectsLocationsCertificateIssuanceConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/certificateIssuanceConfigs" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsCertificateIssuanceConfigsRequest>;

export type ListProjectsLocationsCertificateIssuanceConfigsResponse =
  ListCertificateIssuanceConfigsResponse;
export const ListProjectsLocationsCertificateIssuanceConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListCertificateIssuanceConfigsResponse;

export type ListProjectsLocationsCertificateIssuanceConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists CertificateIssuanceConfigs in a given project and location. */
export const listProjectsLocationsCertificateIssuanceConfigs: API.PaginatedOperationMethod<
  ListProjectsLocationsCertificateIssuanceConfigsRequest,
  ListProjectsLocationsCertificateIssuanceConfigsResponse,
  ListProjectsLocationsCertificateIssuanceConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsCertificateIssuanceConfigsRequest,
  output: ListProjectsLocationsCertificateIssuanceConfigsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsCertificateIssuanceConfigsRequest {
  /** Required. A name of the certificate issuance config to describe. Must be in the format `projects/* /locations/* /certificateIssuanceConfigs/*`. */
  name: string;
}

export const GetProjectsLocationsCertificateIssuanceConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsCertificateIssuanceConfigsRequest>;

export type GetProjectsLocationsCertificateIssuanceConfigsResponse =
  CertificateIssuanceConfig;
export const GetProjectsLocationsCertificateIssuanceConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CertificateIssuanceConfig;

export type GetProjectsLocationsCertificateIssuanceConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single CertificateIssuanceConfig. */
export const getProjectsLocationsCertificateIssuanceConfigs: API.OperationMethod<
  GetProjectsLocationsCertificateIssuanceConfigsRequest,
  GetProjectsLocationsCertificateIssuanceConfigsResponse,
  GetProjectsLocationsCertificateIssuanceConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsCertificateIssuanceConfigsRequest,
  output: GetProjectsLocationsCertificateIssuanceConfigsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsDnsAuthorizationsRequest {
  /** Required. The project and location from which the dns authorizations should be listed, specified in the format `projects/* /locations/*`. */
  parent: string;
  /** Optional. The value returned by the last `ListDnsAuthorizationsResponse`. Indicates that this is a continuation of a prior `ListDnsAuthorizations` call, and that the system should return the next page of data. */
  pageToken?: string;
  /** Optional. A list of Dns Authorization field names used to specify the order of the returned results. The default sorting order is ascending. To specify descending order for a field, add a suffix `" desc"`. */
  orderBy?: string;
  /** Optional. Maximum number of dns authorizations to return per call. */
  pageSize?: number;
  /** Optional. Filter expression to restrict the Dns Authorizations returned. */
  filter?: string;
}

export const ListProjectsLocationsDnsAuthorizationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/dnsAuthorizations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsDnsAuthorizationsRequest>;

export type ListProjectsLocationsDnsAuthorizationsResponse =
  ListDnsAuthorizationsResponse;
export const ListProjectsLocationsDnsAuthorizationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListDnsAuthorizationsResponse;

export type ListProjectsLocationsDnsAuthorizationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists DnsAuthorizations in a given project and location. */
export const listProjectsLocationsDnsAuthorizations: API.PaginatedOperationMethod<
  ListProjectsLocationsDnsAuthorizationsRequest,
  ListProjectsLocationsDnsAuthorizationsResponse,
  ListProjectsLocationsDnsAuthorizationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsDnsAuthorizationsRequest,
  output: ListProjectsLocationsDnsAuthorizationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsDnsAuthorizationsRequest {
  /** Required. A name of the dns authorization to describe. Must be in the format `projects/* /locations/* /dnsAuthorizations/*`. */
  name: string;
}

export const GetProjectsLocationsDnsAuthorizationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsDnsAuthorizationsRequest>;

export type GetProjectsLocationsDnsAuthorizationsResponse = DnsAuthorization;
export const GetProjectsLocationsDnsAuthorizationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ DnsAuthorization;

export type GetProjectsLocationsDnsAuthorizationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single DnsAuthorization. */
export const getProjectsLocationsDnsAuthorizations: API.OperationMethod<
  GetProjectsLocationsDnsAuthorizationsRequest,
  GetProjectsLocationsDnsAuthorizationsResponse,
  GetProjectsLocationsDnsAuthorizationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsDnsAuthorizationsRequest,
  output: GetProjectsLocationsDnsAuthorizationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsDnsAuthorizationsRequest {
  /** Required. The parent resource of the dns authorization. Must be in the format `projects/* /locations/*`. */
  parent: string;
  /** Required. A user-provided name of the dns authorization. */
  dnsAuthorizationId?: string;
  /** Request body */
  body?: DnsAuthorization;
}

export const CreateProjectsLocationsDnsAuthorizationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    dnsAuthorizationId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("dnsAuthorizationId"),
    ),
    body: Schema.optional(DnsAuthorization).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/dnsAuthorizations",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsDnsAuthorizationsRequest>;

export type CreateProjectsLocationsDnsAuthorizationsResponse = Operation;
export const CreateProjectsLocationsDnsAuthorizationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsDnsAuthorizationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new DnsAuthorization in a given project and location. */
export const createProjectsLocationsDnsAuthorizations: API.OperationMethod<
  CreateProjectsLocationsDnsAuthorizationsRequest,
  CreateProjectsLocationsDnsAuthorizationsResponse,
  CreateProjectsLocationsDnsAuthorizationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsDnsAuthorizationsRequest,
  output: CreateProjectsLocationsDnsAuthorizationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsDnsAuthorizationsRequest {
  /** Identifier. A user-defined name of the dns authorization. DnsAuthorization names must be unique globally and match pattern `projects/* /locations/* /dnsAuthorizations/*`. */
  name: string;
  /** Required. The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask. */
  updateMask?: string;
  /** Request body */
  body?: DnsAuthorization;
}

export const PatchProjectsLocationsDnsAuthorizationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(DnsAuthorization).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsDnsAuthorizationsRequest>;

export type PatchProjectsLocationsDnsAuthorizationsResponse = Operation;
export const PatchProjectsLocationsDnsAuthorizationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsDnsAuthorizationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a DnsAuthorization. */
export const patchProjectsLocationsDnsAuthorizations: API.OperationMethod<
  PatchProjectsLocationsDnsAuthorizationsRequest,
  PatchProjectsLocationsDnsAuthorizationsResponse,
  PatchProjectsLocationsDnsAuthorizationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsDnsAuthorizationsRequest,
  output: PatchProjectsLocationsDnsAuthorizationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsDnsAuthorizationsRequest {
  /** Required. A name of the dns authorization to delete. Must be in the format `projects/* /locations/* /dnsAuthorizations/*`. */
  name: string;
}

export const DeleteProjectsLocationsDnsAuthorizationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsDnsAuthorizationsRequest>;

export type DeleteProjectsLocationsDnsAuthorizationsResponse = Operation;
export const DeleteProjectsLocationsDnsAuthorizationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsDnsAuthorizationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single DnsAuthorization. */
export const deleteProjectsLocationsDnsAuthorizations: API.OperationMethod<
  DeleteProjectsLocationsDnsAuthorizationsRequest,
  DeleteProjectsLocationsDnsAuthorizationsResponse,
  DeleteProjectsLocationsDnsAuthorizationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsDnsAuthorizationsRequest,
  output: DeleteProjectsLocationsDnsAuthorizationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsCertificatesRequest {
  /** Required. The parent resource of the certificate. Must be in the format `projects/* /locations/*`. */
  parent: string;
  /** Required. A user-provided name of the certificate. */
  certificateId?: string;
  /** Request body */
  body?: Certificate;
}

export const CreateProjectsLocationsCertificatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    certificateId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("certificateId"),
    ),
    body: Schema.optional(Certificate).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/certificates",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsCertificatesRequest>;

export type CreateProjectsLocationsCertificatesResponse = Operation;
export const CreateProjectsLocationsCertificatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsCertificatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new Certificate in a given project and location. */
export const createProjectsLocationsCertificates: API.OperationMethod<
  CreateProjectsLocationsCertificatesRequest,
  CreateProjectsLocationsCertificatesResponse,
  CreateProjectsLocationsCertificatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsCertificatesRequest,
  output: CreateProjectsLocationsCertificatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsCertificatesRequest {
  /** Identifier. A user-defined name of the certificate. Certificate names must be unique globally and match pattern `projects/* /locations/* /certificates/*`. */
  name: string;
  /** Required. The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask. */
  updateMask?: string;
  /** Request body */
  body?: Certificate;
}

export const PatchProjectsLocationsCertificatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Certificate).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsCertificatesRequest>;

export type PatchProjectsLocationsCertificatesResponse = Operation;
export const PatchProjectsLocationsCertificatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsCertificatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a Certificate. */
export const patchProjectsLocationsCertificates: API.OperationMethod<
  PatchProjectsLocationsCertificatesRequest,
  PatchProjectsLocationsCertificatesResponse,
  PatchProjectsLocationsCertificatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsCertificatesRequest,
  output: PatchProjectsLocationsCertificatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsCertificatesRequest {
  /** Required. A name of the certificate to delete. Must be in the format `projects/* /locations/* /certificates/*`. */
  name: string;
}

export const DeleteProjectsLocationsCertificatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsCertificatesRequest>;

export type DeleteProjectsLocationsCertificatesResponse = Operation;
export const DeleteProjectsLocationsCertificatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsCertificatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single Certificate. */
export const deleteProjectsLocationsCertificates: API.OperationMethod<
  DeleteProjectsLocationsCertificatesRequest,
  DeleteProjectsLocationsCertificatesResponse,
  DeleteProjectsLocationsCertificatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsCertificatesRequest,
  output: DeleteProjectsLocationsCertificatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsCertificatesRequest {
  /** Required. The project and location from which the certificate should be listed, specified in the format `projects/* /locations/*`. */
  parent: string;
  /** Optional. The value returned by the last `ListCertificatesResponse`. Indicates that this is a continuation of a prior `ListCertificates` call, and that the system should return the next page of data. */
  pageToken?: string;
  /** Optional. A list of Certificate field names used to specify the order of the returned results. The default sorting order is ascending. To specify descending order for a field, add a suffix `" desc"`. */
  orderBy?: string;
  /** Optional. Maximum number of certificates to return per call. */
  pageSize?: number;
  /** Optional. Filter expression to restrict the Certificates returned. */
  filter?: string;
}

export const ListProjectsLocationsCertificatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/certificates" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsCertificatesRequest>;

export type ListProjectsLocationsCertificatesResponse =
  ListCertificatesResponse;
export const ListProjectsLocationsCertificatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListCertificatesResponse;

export type ListProjectsLocationsCertificatesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Certificates in a given project and location. */
export const listProjectsLocationsCertificates: API.PaginatedOperationMethod<
  ListProjectsLocationsCertificatesRequest,
  ListProjectsLocationsCertificatesResponse,
  ListProjectsLocationsCertificatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsCertificatesRequest,
  output: ListProjectsLocationsCertificatesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsCertificatesRequest {
  /** Required. A name of the certificate to describe. Must be in the format `projects/* /locations/* /certificates/*`. */
  name: string;
}

export const GetProjectsLocationsCertificatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsCertificatesRequest>;

export type GetProjectsLocationsCertificatesResponse = Certificate;
export const GetProjectsLocationsCertificatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Certificate;

export type GetProjectsLocationsCertificatesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single Certificate. */
export const getProjectsLocationsCertificates: API.OperationMethod<
  GetProjectsLocationsCertificatesRequest,
  GetProjectsLocationsCertificatesResponse,
  GetProjectsLocationsCertificatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsCertificatesRequest,
  output: GetProjectsLocationsCertificatesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsTrustConfigsRequest {
  /** Required. The project and location from which the TrustConfigs should be listed, specified in the format `projects/* /locations/*`. */
  parent: string;
  /** Optional. Maximum number of TrustConfigs to return per call. */
  pageSize?: number;
  /** Optional. Filter expression to restrict the TrustConfigs returned. */
  filter?: string;
  /** Optional. A list of TrustConfig field names used to specify the order of the returned results. The default sorting order is ascending. To specify descending order for a field, add a suffix `" desc"`. */
  orderBy?: string;
  /** Optional. The value returned by the last `ListTrustConfigsResponse`. Indicates that this is a continuation of a prior `ListTrustConfigs` call, and that the system should return the next page of data. */
  pageToken?: string;
}

export const ListProjectsLocationsTrustConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/trustConfigs" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsTrustConfigsRequest>;

export type ListProjectsLocationsTrustConfigsResponse =
  ListTrustConfigsResponse;
export const ListProjectsLocationsTrustConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListTrustConfigsResponse;

export type ListProjectsLocationsTrustConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists TrustConfigs in a given project and location. */
export const listProjectsLocationsTrustConfigs: API.PaginatedOperationMethod<
  ListProjectsLocationsTrustConfigsRequest,
  ListProjectsLocationsTrustConfigsResponse,
  ListProjectsLocationsTrustConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsTrustConfigsRequest,
  output: ListProjectsLocationsTrustConfigsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsTrustConfigsRequest {
  /** Required. A name of the TrustConfig to describe. Must be in the format `projects/* /locations/* /trustConfigs/*`. */
  name: string;
}

export const GetProjectsLocationsTrustConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsTrustConfigsRequest>;

export type GetProjectsLocationsTrustConfigsResponse = TrustConfig;
export const GetProjectsLocationsTrustConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TrustConfig;

export type GetProjectsLocationsTrustConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single TrustConfig. */
export const getProjectsLocationsTrustConfigs: API.OperationMethod<
  GetProjectsLocationsTrustConfigsRequest,
  GetProjectsLocationsTrustConfigsResponse,
  GetProjectsLocationsTrustConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsTrustConfigsRequest,
  output: GetProjectsLocationsTrustConfigsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsTrustConfigsRequest {
  /** Required. The parent resource of the TrustConfig. Must be in the format `projects/* /locations/*`. */
  parent: string;
  /** Required. A user-provided name of the TrustConfig. Must match the regexp `[a-z0-9-]{1,63}`. */
  trustConfigId?: string;
  /** Request body */
  body?: TrustConfig;
}

export const CreateProjectsLocationsTrustConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    trustConfigId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("trustConfigId"),
    ),
    body: Schema.optional(TrustConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/trustConfigs",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsTrustConfigsRequest>;

export type CreateProjectsLocationsTrustConfigsResponse = Operation;
export const CreateProjectsLocationsTrustConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsTrustConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new TrustConfig in a given project and location. */
export const createProjectsLocationsTrustConfigs: API.OperationMethod<
  CreateProjectsLocationsTrustConfigsRequest,
  CreateProjectsLocationsTrustConfigsResponse,
  CreateProjectsLocationsTrustConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsTrustConfigsRequest,
  output: CreateProjectsLocationsTrustConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsTrustConfigsRequest {
  /** Identifier. A user-defined name of the trust config. TrustConfig names must be unique globally and match pattern `projects/* /locations/* /trustConfigs/*`. */
  name: string;
  /** Required. The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask. */
  updateMask?: string;
  /** Request body */
  body?: TrustConfig;
}

export const PatchProjectsLocationsTrustConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(TrustConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsTrustConfigsRequest>;

export type PatchProjectsLocationsTrustConfigsResponse = Operation;
export const PatchProjectsLocationsTrustConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsTrustConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a TrustConfig. */
export const patchProjectsLocationsTrustConfigs: API.OperationMethod<
  PatchProjectsLocationsTrustConfigsRequest,
  PatchProjectsLocationsTrustConfigsResponse,
  PatchProjectsLocationsTrustConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsTrustConfigsRequest,
  output: PatchProjectsLocationsTrustConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsTrustConfigsRequest {
  /** Required. A name of the TrustConfig to delete. Must be in the format `projects/* /locations/* /trustConfigs/*`. */
  name: string;
  /** Optional. The current etag of the TrustConfig. If an etag is provided and does not match the current etag of the resource, deletion will be blocked and an ABORTED error will be returned. */
  etag?: string;
}

export const DeleteProjectsLocationsTrustConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsTrustConfigsRequest>;

export type DeleteProjectsLocationsTrustConfigsResponse = Operation;
export const DeleteProjectsLocationsTrustConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsTrustConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single TrustConfig. */
export const deleteProjectsLocationsTrustConfigs: API.OperationMethod<
  DeleteProjectsLocationsTrustConfigsRequest,
  DeleteProjectsLocationsTrustConfigsResponse,
  DeleteProjectsLocationsTrustConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsTrustConfigsRequest,
  output: DeleteProjectsLocationsTrustConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
