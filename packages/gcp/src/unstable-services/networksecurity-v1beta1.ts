// ==========================================================================
// Network Security API (networksecurity v1beta1)
// DO NOT EDIT - Generated from GCP Discovery Document
// ==========================================================================

import * as Schema from "@distilled.cloud/core/schema";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import type { DefaultErrors } from "../errors.ts";
import type * as HttpClient from "effect/unstable/http/HttpClient";

// Service metadata
const svc = T.Service({
  name: "networksecurity",
  version: "v1beta1",
  rootUrl: "https://networksecurity.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface GoogleIamV1AuditLogConfig {
  /** Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members. */
  exemptedMembers?: ReadonlyArray<string>;
  /** The log type that this config enables. */
  logType?:
    | "LOG_TYPE_UNSPECIFIED"
    | "ADMIN_READ"
    | "DATA_WRITE"
    | "DATA_READ"
    | (string & {});
}

export const GoogleIamV1AuditLogConfig: Schema.Codec<GoogleIamV1AuditLogConfig> =
  /*@__PURE__*/ Schema.Struct({
    exemptedMembers: Schema.optional(Schema.Array(Schema.String)),
    logType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleIamV1AuditLogConfig" });

export interface GoogleIamV1AuditConfig {
  /** The configuration for logging of each type of permission. */
  auditLogConfigs?: ReadonlyArray<GoogleIamV1AuditLogConfig>;
  /** Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services. */
  service?: string;
}

export const GoogleIamV1AuditConfig: Schema.Codec<GoogleIamV1AuditConfig> =
  /*@__PURE__*/ Schema.Struct({
    auditLogConfigs: Schema.optional(Schema.Array(GoogleIamV1AuditLogConfig)),
    service: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleIamV1AuditConfig" });

export interface SACAttachmentSACAttachmentSymantecOptions {
  /** Immutable. Name to be used when creating a location on the customer's behalf in Symantec's Location API. Not to be confused with Google Cloud locations. */
  symantecLocationName?: string;
  /** Immutable. Symantec data center identifier that this attachment will connect to. */
  symantecSite?: string;
}

export const SACAttachmentSACAttachmentSymantecOptions: Schema.Codec<SACAttachmentSACAttachmentSymantecOptions> =
  /*@__PURE__*/ Schema.Struct({
    symantecLocationName: Schema.optional(Schema.String),
    symantecSite: Schema.optional(Schema.String),
  }).annotate({ identifier: "SACAttachmentSACAttachmentSymantecOptions" });

export interface SACAttachment {
  /** Optional. Case-insensitive ISO-3166 alpha-2 country code used for localization. Only valid for Symantec attachments. */
  country?: string;
  /** Optional. Case-sensitive tzinfo identifier used for localization. Only valid for Symantec attachments. */
  timeZone?: string;
  /** Identifier. Resource name, in the form `projects/{project}/locations/{location}/sacAttachments/{sac_attachment}`. */
  name?: string;
  /** Output only. Timestamp when the attachment was created. */
  createTime?: string;
  /** Optional. Optional list of labels applied to the resource. */
  labels?: Record<string, string>;
  /** Required. NCC Gateway associated with the attachment. This can be input as an ID or a full resource name. The output always has the form `projects/{project_number}/locations/{location}/spokes/{ncc_gateway}`. */
  nccGateway?: string;
  /** Required. SAC Realm which owns the attachment. This can be input as an ID or a full resource name. The output always has the form `projects/{project_number}/locations/{location}/sacRealms/{sac_realm}`. */
  sacRealm?: string;
  /** Output only. Timestamp when the attachment was last updated. */
  updateTime?: string;
  /** Optional. Configuration required for Symantec attachments. */
  symantecOptions?: SACAttachmentSACAttachmentSymantecOptions;
  /** Output only. State of the attachment. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PENDING_PARTNER_ATTACHMENT"
    | "PARTNER_ATTACHED"
    | "PARTNER_DETACHED"
    | (string & {});
}

export const SACAttachment: Schema.Codec<SACAttachment> =
  /*@__PURE__*/ Schema.Struct({
    country: Schema.optional(Schema.String),
    timeZone: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    nccGateway: Schema.optional(Schema.String),
    sacRealm: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    symantecOptions: Schema.optional(SACAttachmentSACAttachmentSymantecOptions),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "SACAttachment" });

export interface ListSACAttachmentsResponse {
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** The list of SACAttachments. */
  sacAttachments?: ReadonlyArray<SACAttachment>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListSACAttachmentsResponse: Schema.Codec<ListSACAttachmentsResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    sacAttachments: Schema.optional(Schema.Array(SACAttachment)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListSACAttachmentsResponse" });

export interface GoogleCloudNetworksecurityV1beta1GrpcEndpoint {
  /** Required. The target URI of the gRPC endpoint. Only UDS path is supported, and should start with "unix:". */
  targetUri?: string;
}

export const GoogleCloudNetworksecurityV1beta1GrpcEndpoint: Schema.Codec<GoogleCloudNetworksecurityV1beta1GrpcEndpoint> =
  /*@__PURE__*/ Schema.Struct({
    targetUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudNetworksecurityV1beta1GrpcEndpoint" });

export interface CertificateProviderInstance {
  /** Required. Plugin instance name, used to locate and load CertificateProvider instance configuration. Set to "google_cloud_private_spiffe" to use Certificate Authority Service certificate provider instance. */
  pluginInstance?: string;
}

export const CertificateProviderInstance: Schema.Codec<CertificateProviderInstance> =
  /*@__PURE__*/ Schema.Struct({
    pluginInstance: Schema.optional(Schema.String),
  }).annotate({ identifier: "CertificateProviderInstance" });

export interface GoogleCloudNetworksecurityV1beta1CertificateProvider {
  /** gRPC specific configuration to access the gRPC server to obtain the cert and private key. */
  grpcEndpoint?: GoogleCloudNetworksecurityV1beta1GrpcEndpoint;
  /** The certificate provider instance specification that will be passed to the data plane, which will be used to load necessary credential information. */
  certificateProviderInstance?: CertificateProviderInstance;
}

export const GoogleCloudNetworksecurityV1beta1CertificateProvider: Schema.Codec<GoogleCloudNetworksecurityV1beta1CertificateProvider> =
  /*@__PURE__*/ Schema.Struct({
    grpcEndpoint: Schema.optional(
      GoogleCloudNetworksecurityV1beta1GrpcEndpoint,
    ),
    certificateProviderInstance: Schema.optional(CertificateProviderInstance),
  }).annotate({
    identifier: "GoogleCloudNetworksecurityV1beta1CertificateProvider",
  });

export interface MirroringDeployment {
  /** Required. Immutable. The regional forwarding rule that fronts the mirroring collectors, for example: `projects/123456789/regions/us-central1/forwardingRules/my-rule`. See https://google.aip.dev/124. */
  forwardingRule?: string;
  /** Immutable. Identifier. The resource name of this deployment, for example: `projects/123456789/locations/us-central1-a/mirroringDeployments/my-dep`. See https://google.aip.dev/122 for more details. */
  name?: string;
  /** Output only. The timestamp when the resource was created. See https://google.aip.dev/148#timestamps. */
  createTime?: string;
  /** Optional. Labels are key/value pairs that help to organize and filter resources. */
  labels?: Record<string, string>;
  /** Optional. User-provided description of the deployment. Used as additional context for the deployment. */
  description?: string;
  /** Output only. The timestamp when the resource was most recently updated. See https://google.aip.dev/148#timestamps. */
  updateTime?: string;
  /** Required. Immutable. The deployment group that this deployment is a part of, for example: `projects/123456789/locations/global/mirroringDeploymentGroups/my-dg`. See https://google.aip.dev/124. */
  mirroringDeploymentGroup?: string;
  /** Output only. The current state of the resource does not match the user's intended state, and the system is working to reconcile them. This part of the normal operation (e.g. linking a new association to the parent group). See https://google.aip.dev/128. */
  reconciling?: boolean;
  /** Output only. The current state of the deployment. See https://google.aip.dev/216. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "CREATING"
    | "DELETING"
    | "OUT_OF_SYNC"
    | "DELETE_FAILED"
    | (string & {});
}

export const MirroringDeployment: Schema.Codec<MirroringDeployment> =
  /*@__PURE__*/ Schema.Struct({
    forwardingRule: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    description: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    mirroringDeploymentGroup: Schema.optional(Schema.String),
    reconciling: Schema.optional(Schema.Boolean),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "MirroringDeployment" });

export interface Status {
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
}

export const Status: Schema.Codec<Status> =
  /*@__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.Number),
    message: Schema.optional(Schema.String),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).annotate({ identifier: "Status" });

export interface Operation {
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
}

export const Operation: Schema.Codec<Operation> =
  /*@__PURE__*/ Schema.Struct({
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
    done: Schema.optional(Schema.Boolean),
    error: Schema.optional(Status),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "Operation" });

export interface UrlList {
  /** Required. Name of the resource provided by the user. Name is of the form projects/{project}/locations/{location}/urlLists/{url_list} url_list should match the pattern:(^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$). */
  name?: string;
  /** Output only. Time when the security policy was created. */
  createTime?: string;
  /** Optional. Free-text description of the resource. */
  description?: string;
  /** Required. FQDNs and URLs. */
  values?: ReadonlyArray<string>;
  /** Output only. Time when the security policy was updated. */
  updateTime?: string;
}

export const UrlList: Schema.Codec<UrlList> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    values: Schema.optional(Schema.Array(Schema.String)),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "UrlList" });

export interface InterceptLocation {
  /** Output only. The cloud location, e.g. "us-central1-a" or "asia-south1". */
  location?: string;
  /** Output only. The current state of the association in this location. */
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "OUT_OF_SYNC" | (string & {});
}

export const InterceptLocation: Schema.Codec<InterceptLocation> =
  /*@__PURE__*/ Schema.Struct({
    location: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "InterceptLocation" });

export interface InterceptEndpointGroupAssociationLocationDetails {
  /** Output only. The cloud location, e.g. "us-central1-a" or "asia-south1". */
  location?: string;
  /** Output only. The current state of the association in this location. */
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "OUT_OF_SYNC" | (string & {});
}

export const InterceptEndpointGroupAssociationLocationDetails: Schema.Codec<InterceptEndpointGroupAssociationLocationDetails> =
  /*@__PURE__*/ Schema.Struct({
    location: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({
    identifier: "InterceptEndpointGroupAssociationLocationDetails",
  });

export interface InterceptEndpointGroupAssociation {
  /** Output only. Identifier used by the data-path. See the NSI GENEVE format for more details: https://docs.cloud.google.com/network-security-integration/docs/understand-geneve#network_id */
  networkCookie?: number;
  /** Output only. The timestamp when the resource was most recently updated. See https://google.aip.dev/148#timestamps. */
  updateTime?: string;
  /** Required. Immutable. The endpoint group that this association is connected to, for example: `projects/123456789/locations/global/interceptEndpointGroups/my-eg`. See https://google.aip.dev/124. */
  interceptEndpointGroup?: string;
  /** Output only. Current state of the endpoint group association. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "CREATING"
    | "DELETING"
    | "CLOSED"
    | "OUT_OF_SYNC"
    | "DELETE_FAILED"
    | (string & {});
  /** Required. Immutable. The VPC network that is associated. for example: `projects/123456789/global/networks/my-network`. See https://google.aip.dev/124. */
  network?: string;
  /** Output only. The current state of the resource does not match the user's intended state, and the system is working to reconcile them. This part of the normal operation (e.g. adding a new location to the target deployment group). See https://google.aip.dev/128. */
  reconciling?: boolean;
  /** Output only. The list of locations where the association is configured. This information is retrieved from the linked endpoint group. */
  locations?: ReadonlyArray<InterceptLocation>;
  /** Immutable. Identifier. The resource name of this endpoint group association, for example: `projects/123456789/locations/global/interceptEndpointGroupAssociations/my-eg-association`. See https://google.aip.dev/122 for more details. */
  name?: string;
  /** Output only. The timestamp when the resource was created. See https://google.aip.dev/148#timestamps. */
  createTime?: string;
  /** Optional. Labels are key/value pairs that help to organize and filter resources. */
  labels?: Record<string, string>;
  /** Output only. The list of locations where the association is present. This information is retrieved from the linked endpoint group, and not configured as part of the association itself. */
  locationsDetails?: ReadonlyArray<InterceptEndpointGroupAssociationLocationDetails>;
}

export const InterceptEndpointGroupAssociation: Schema.Codec<InterceptEndpointGroupAssociation> =
  /*@__PURE__*/ Schema.Struct({
    networkCookie: Schema.optional(Schema.Number),
    updateTime: Schema.optional(Schema.String),
    interceptEndpointGroup: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    network: Schema.optional(Schema.String),
    reconciling: Schema.optional(Schema.Boolean),
    locations: Schema.optional(Schema.Array(InterceptLocation)),
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    locationsDetails: Schema.optional(
      Schema.Array(InterceptEndpointGroupAssociationLocationDetails),
    ),
  }).annotate({ identifier: "InterceptEndpointGroupAssociation" });

export interface BackendAuthenticationConfig {
  /** Output only. The timestamp when the resource was updated. */
  updateTime?: string;
  /** Optional. A reference to a TrustConfig resource from the certificatemanager.googleapis.com namespace. This is a relative resource path following the form "projects/{project}/locations/{location}/trustConfigs/{trust_config}". A BackendService uses the chain of trust represented by this TrustConfig, if specified, to validate the server certificates presented by the backend. Required unless wellKnownRoots is set to PUBLIC_ROOTS. */
  trustConfig?: string;
  /** Optional. A reference to a certificatemanager.googleapis.com.Certificate resource. This is a relative resource path following the form "projects/{project}/locations/{location}/certificates/{certificate}". Used by a BackendService to negotiate mTLS when the backend connection uses TLS and the backend requests a client certificate. Must have a CLIENT_AUTH scope. */
  clientCertificate?: string;
  /** Required. Name of the BackendAuthenticationConfig resource. It matches the pattern `projects/* /locations/{location}/backendAuthenticationConfigs/{backend_authentication_config}` */
  name?: string;
  /** Optional. Free-text description of the resource. */
  description?: string;
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Set of label tags associated with the resource. */
  labels?: Record<string, string>;
  /** Output only. Etag of the resource. */
  etag?: string;
  /** Well known roots to use for server certificate validation. */
  wellKnownRoots?:
    | "WELL_KNOWN_ROOTS_UNSPECIFIED"
    | "NONE"
    | "PUBLIC_ROOTS"
    | (string & {});
}

export const BackendAuthenticationConfig: Schema.Codec<BackendAuthenticationConfig> =
  /*@__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    trustConfig: Schema.optional(Schema.String),
    clientCertificate: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    wellKnownRoots: Schema.optional(Schema.String),
  }).annotate({ identifier: "BackendAuthenticationConfig" });

export interface ListBackendAuthenticationConfigsResponse {
  /** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** List of BackendAuthenticationConfig resources. */
  backendAuthenticationConfigs?: ReadonlyArray<BackendAuthenticationConfig>;
}

export const ListBackendAuthenticationConfigsResponse: Schema.Codec<ListBackendAuthenticationConfigsResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    backendAuthenticationConfigs: Schema.optional(
      Schema.Array(BackendAuthenticationConfig),
    ),
  }).annotate({ identifier: "ListBackendAuthenticationConfigsResponse" });

export interface SeverityOverride {
  /** Required. Threat action override. */
  action?:
    | "THREAT_ACTION_UNSPECIFIED"
    | "DEFAULT_ACTION"
    | "ALLOW"
    | "ALERT"
    | "DENY"
    | (string & {});
  /** Required. Severity level to match. */
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "INFORMATIONAL"
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | "CRITICAL"
    | (string & {});
}

export const SeverityOverride: Schema.Codec<SeverityOverride> =
  /*@__PURE__*/ Schema.Struct({
    action: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.String),
  }).annotate({ identifier: "SeverityOverride" });

export interface WildfireOverride {
  /** Required. Protocol to match. */
  protocol?:
    | "WILDFIRE_PROTOCOL_UNSPECIFIED"
    | "WILDFIRE_SMTP"
    | "WILDFIRE_SMB"
    | "WILDFIRE_POP3"
    | "WILDFIRE_IMAP"
    | "WILDFIRE_HTTP2"
    | "WILDFIRE_HTTP"
    | "WILDFIRE_FTP"
    | (string & {});
  /** Required. Threat action override. For some threat types, only a subset of actions applies. */
  action?:
    | "WILDFIRE_THREAT_ACTION_UNSPECIFIED"
    | "WILDFIRE_DEFAULT_ACTION"
    | "WILDFIRE_ALLOW"
    | "WILDFIRE_ALERT"
    | "WILDFIRE_DENY"
    | (string & {});
}

export const WildfireOverride: Schema.Codec<WildfireOverride> =
  /*@__PURE__*/ Schema.Struct({
    protocol: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
  }).annotate({ identifier: "WildfireOverride" });

export interface GoogleIamV1TestIamPermissionsResponse {
  /** A subset of `TestPermissionsRequest.permissions` that the caller is allowed. */
  permissions?: ReadonlyArray<string>;
}

export const GoogleIamV1TestIamPermissionsResponse: Schema.Codec<GoogleIamV1TestIamPermissionsResponse> =
  /*@__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleIamV1TestIamPermissionsResponse" });

export interface HttpHeaderMatch {
  /** Required. The value of the header must match the regular expression specified in regexMatch. For regular expression grammar, please see: en.cppreference.com/w/cpp/regex/ecmascript For matching against a port specified in the HTTP request, use a headerMatch with headerName set to Host and a regular expression that satisfies the RFC2616 Host header's port specifier. */
  regexMatch?: string;
  /** Required. The name of the HTTP header to match. For matching against the HTTP request's authority, use a headerMatch with the header name ":authority". For matching a request's method, use the headerName ":method". */
  headerName?: string;
}

export const HttpHeaderMatch: Schema.Codec<HttpHeaderMatch> =
  /*@__PURE__*/ Schema.Struct({
    regexMatch: Schema.optional(Schema.String),
    headerName: Schema.optional(Schema.String),
  }).annotate({ identifier: "HttpHeaderMatch" });

export interface DnsThreatDetector {
  /** Immutable. Identifier. Name of the DnsThreatDetector resource. */
  name?: string;
  /** Output only. Create time stamp. */
  createTime?: string;
  /** Optional. Any labels associated with the DnsThreatDetector, listed as key value pairs. */
  labels?: Record<string, string>;
  /** Optional. A list of network resource names which aren't monitored by this DnsThreatDetector. Example: `projects/PROJECT_ID/global/networks/NETWORK_NAME`. */
  excludedNetworks?: ReadonlyArray<string>;
  /** Required. The provider used for DNS threat analysis. */
  provider?: "PROVIDER_UNSPECIFIED" | "INFOBLOX" | (string & {});
  /** Output only. Update time stamp. */
  updateTime?: string;
}

export const DnsThreatDetector: Schema.Codec<DnsThreatDetector> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    excludedNetworks: Schema.optional(Schema.Array(Schema.String)),
    provider: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "DnsThreatDetector" });

export interface ListDnsThreatDetectorsResponse {
  /** Unordered list. Unreachable `DnsThreatDetector` resources. */
  unreachable?: ReadonlyArray<string>;
  /** The list of DnsThreatDetector resources. */
  dnsThreatDetectors?: ReadonlyArray<DnsThreatDetector>;
  /** A token, which can be sent as `page_token`, to retrieve the next page. */
  nextPageToken?: string;
}

export const ListDnsThreatDetectorsResponse: Schema.Codec<ListDnsThreatDetectorsResponse> =
  /*@__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    dnsThreatDetectors: Schema.optional(Schema.Array(DnsThreatDetector)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListDnsThreatDetectorsResponse" });

export interface MirroringEndpointGroupAssociationLocationDetails {
  /** Output only. The cloud location, e.g. "us-central1-a" or "asia-south1". */
  location?: string;
  /** Output only. The current state of the association in this location. */
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "OUT_OF_SYNC" | (string & {});
}

export const MirroringEndpointGroupAssociationLocationDetails: Schema.Codec<MirroringEndpointGroupAssociationLocationDetails> =
  /*@__PURE__*/ Schema.Struct({
    location: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({
    identifier: "MirroringEndpointGroupAssociationLocationDetails",
  });

export interface MirroringLocation {
  /** Output only. The cloud location, e.g. "us-central1-a" or "asia-south1". */
  location?: string;
  /** Output only. The current state of the association in this location. */
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "OUT_OF_SYNC" | (string & {});
}

export const MirroringLocation: Schema.Codec<MirroringLocation> =
  /*@__PURE__*/ Schema.Struct({
    location: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "MirroringLocation" });

export interface MirroringEndpointGroupAssociation {
  /** Output only. The list of locations where the association is present. This information is retrieved from the linked endpoint group, and not configured as part of the association itself. */
  locationsDetails?: ReadonlyArray<MirroringEndpointGroupAssociationLocationDetails>;
  /** Immutable. Identifier. The resource name of this endpoint group association, for example: `projects/123456789/locations/global/mirroringEndpointGroupAssociations/my-eg-association`. See https://google.aip.dev/122 for more details. */
  name?: string;
  /** Output only. The timestamp when the resource was created. See https://google.aip.dev/148#timestamps. */
  createTime?: string;
  /** Optional. Labels are key/value pairs that help to organize and filter resources. */
  labels?: Record<string, string>;
  /** Output only. The timestamp when the resource was most recently updated. See https://google.aip.dev/148#timestamps. */
  updateTime?: string;
  /** Output only. The list of locations where the association is configured. This information is retrieved from the linked endpoint group. */
  locations?: ReadonlyArray<MirroringLocation>;
  /** Immutable. The endpoint group that this association is connected to, for example: `projects/123456789/locations/global/mirroringEndpointGroups/my-eg`. See https://google.aip.dev/124. */
  mirroringEndpointGroup?: string;
  /** Output only. Current state of the endpoint group association. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "CREATING"
    | "DELETING"
    | "CLOSED"
    | "OUT_OF_SYNC"
    | "DELETE_FAILED"
    | (string & {});
  /** Immutable. The VPC network that is associated. for example: `projects/123456789/global/networks/my-network`. See https://google.aip.dev/124. */
  network?: string;
  /** Output only. The current state of the resource does not match the user's intended state, and the system is working to reconcile them. This part of the normal operation (e.g. adding a new location to the target deployment group). See https://google.aip.dev/128. */
  reconciling?: boolean;
}

export const MirroringEndpointGroupAssociation: Schema.Codec<MirroringEndpointGroupAssociation> =
  /*@__PURE__*/ Schema.Struct({
    locationsDetails: Schema.optional(
      Schema.Array(MirroringEndpointGroupAssociationLocationDetails),
    ),
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    updateTime: Schema.optional(Schema.String),
    locations: Schema.optional(Schema.Array(MirroringLocation)),
    mirroringEndpointGroup: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    network: Schema.optional(Schema.String),
    reconciling: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "MirroringEndpointGroupAssociation" });

export interface UrlFilter {
  /** Required. The list of strings that a URL must match with for this filter to be applied. */
  urls?: ReadonlyArray<string>;
  /** Required. The action taken when this filter is applied. */
  filteringAction?:
    | "URL_FILTERING_ACTION_UNSPECIFIED"
    | "ALLOW"
    | "DENY"
    | (string & {});
  /** Required. The priority of this filter within the URL Filtering Profile. Lower integers indicate higher priorities. The priority of a filter must be unique within a URL Filtering Profile. */
  priority?: number;
}

export const UrlFilter: Schema.Codec<UrlFilter> =
  /*@__PURE__*/ Schema.Struct({
    urls: Schema.optional(Schema.Array(Schema.String)),
    filteringAction: Schema.optional(Schema.String),
    priority: Schema.optional(Schema.Number),
  }).annotate({ identifier: "UrlFilter" });

export interface Location {
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
}

export const Location: Schema.Codec<Location> =
  /*@__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    locationId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "Location" });

export interface AddressGroup {
  /** Optional. List of supported purposes of the Address Group. */
  purpose?: ReadonlyArray<
    "PURPOSE_UNSPECIFIED" | "DEFAULT" | "CLOUD_ARMOR" | (string & {})
  >;
  /** Required. Name of the AddressGroup resource. It matches pattern `projects/* /locations/{location}/addressGroups/`. */
  name?: string;
  /** Optional. Free-text description of the resource. */
  description?: string;
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Optional. Set of label tags associated with the AddressGroup resource. */
  labels?: Record<string, string>;
  /** Output only. Server-defined fully-qualified URL for this resource. */
  selfLink?: string;
  /** Required. The type of the Address Group. Possible values are "IPv4" or "IPV6". */
  type?: "TYPE_UNSPECIFIED" | "IPV4" | "IPV6" | (string & {});
  /** Optional. List of items. */
  items?: ReadonlyArray<string>;
  /** Output only. The timestamp when the resource was updated. */
  updateTime?: string;
  /** Required. Capacity of the Address Group */
  capacity?: number;
}

export const AddressGroup: Schema.Codec<AddressGroup> =
  /*@__PURE__*/ Schema.Struct({
    purpose: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    selfLink: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(Schema.String)),
    updateTime: Schema.optional(Schema.String),
    capacity: Schema.optional(Schema.Number),
  }).annotate({ identifier: "AddressGroup" });

export interface ListAddressGroupsResponse {
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** List of AddressGroups resources. */
  addressGroups?: ReadonlyArray<AddressGroup>;
  /** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
  nextPageToken?: string;
}

export const ListAddressGroupsResponse: Schema.Codec<ListAddressGroupsResponse> =
  /*@__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    addressGroups: Schema.optional(Schema.Array(AddressGroup)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListAddressGroupsResponse" });

export interface SecurityProfileGroup {
  /** Immutable. Identifier. Name of the SecurityProfileGroup resource. It matches pattern `projects|organizations/* /locations/{location}/securityProfileGroups/{security_profile_group}`. */
  name?: string;
  /** Optional. An optional description of the profile group. Max length 2048 characters. */
  description?: string;
  /** Output only. Resource creation timestamp. */
  createTime?: string;
  /** Optional. Labels as key value pairs. */
  labels?: Record<string, string>;
  /** Optional. Reference to a SecurityProfile with the WildFire configuration. */
  wildfireAnalysisProfile?: string;
  /** Optional. Reference to a SecurityProfile with the ThreatPrevention configuration. */
  threatPreventionProfile?: string;
  /** Optional. Reference to a SecurityProfile with the UrlFiltering configuration. */
  urlFilteringProfile?: string;
  /** Output only. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
  /** Output only. Identifier used by the data-path. Unique within {container, location}. */
  dataPathId?: string;
  /** Optional. Reference to a SecurityProfile with the CustomIntercept configuration. */
  customInterceptProfile?: string;
  /** Output only. Last resource update timestamp. */
  updateTime?: string;
  /** Optional. Reference to a SecurityProfile with the CustomMirroring configuration. */
  customMirroringProfile?: string;
}

export const SecurityProfileGroup: Schema.Codec<SecurityProfileGroup> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    wildfireAnalysisProfile: Schema.optional(Schema.String),
    threatPreventionProfile: Schema.optional(Schema.String),
    urlFilteringProfile: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    dataPathId: Schema.optional(Schema.String),
    customInterceptProfile: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    customMirroringProfile: Schema.optional(Schema.String),
  }).annotate({ identifier: "SecurityProfileGroup" });

export interface CancelOperationRequest {}

export const CancelOperationRequest: Schema.Codec<CancelOperationRequest> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelOperationRequest",
  });

export interface MirroringDeploymentGroupConnectedEndpointGroup {
  /** Output only. The connected endpoint group's resource name, for example: `projects/123456789/locations/global/mirroringEndpointGroups/my-eg`. See https://google.aip.dev/124. */
  name?: string;
}

export const MirroringDeploymentGroupConnectedEndpointGroup: Schema.Codec<MirroringDeploymentGroupConnectedEndpointGroup> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "MirroringDeploymentGroupConnectedEndpointGroup" });

export interface CustomMirroringProfile {
  /** Required. Immutable. The target MirroringEndpointGroup. When a mirroring rule with this security profile attached matches a packet, a replica will be mirrored to the location-local target in this group. */
  mirroringEndpointGroup?: string;
}

export const CustomMirroringProfile: Schema.Codec<CustomMirroringProfile> =
  /*@__PURE__*/ Schema.Struct({
    mirroringEndpointGroup: Schema.optional(Schema.String),
  }).annotate({ identifier: "CustomMirroringProfile" });

export interface ValidationCA {
  /** gRPC specific configuration to access the gRPC server to obtain the CA certificate. */
  grpcEndpoint?: GoogleCloudNetworksecurityV1beta1GrpcEndpoint;
  /** The certificate provider instance specification that will be passed to the data plane, which will be used to load necessary credential information. */
  certificateProviderInstance?: CertificateProviderInstance;
}

export const ValidationCA: Schema.Codec<ValidationCA> =
  /*@__PURE__*/ Schema.Struct({
    grpcEndpoint: Schema.optional(
      GoogleCloudNetworksecurityV1beta1GrpcEndpoint,
    ),
    certificateProviderInstance: Schema.optional(CertificateProviderInstance),
  }).annotate({ identifier: "ValidationCA" });

export interface MTLSPolicy {
  /** When the client presents an invalid certificate or no certificate to the load balancer, the `client_validation_mode` specifies how the client connection is handled. Required if the policy is to be used with the Application Load Balancers. For Traffic Director it must be empty. */
  clientValidationMode?:
    | "CLIENT_VALIDATION_MODE_UNSPECIFIED"
    | "ALLOW_INVALID_OR_MISSING_CLIENT_CERT"
    | "REJECT_INVALID"
    | (string & {});
  /** Required if the policy is to be used with Traffic Director. For Application Load Balancers it must be empty. Defines the mechanism to obtain the Certificate Authority certificate to validate the client certificate. */
  clientValidationCa?: ReadonlyArray<ValidationCA>;
  /** Reference to the TrustConfig from certificatemanager.googleapis.com namespace. If specified, the chain validation will be performed against certificates configured in the given TrustConfig. Allowed only if the policy is to be used with Application Load Balancers. */
  clientValidationTrustConfig?: string;
}

export const MTLSPolicy: Schema.Codec<MTLSPolicy> =
  /*@__PURE__*/ Schema.Struct({
    clientValidationMode: Schema.optional(Schema.String),
    clientValidationCa: Schema.optional(Schema.Array(ValidationCA)),
    clientValidationTrustConfig: Schema.optional(Schema.String),
  }).annotate({ identifier: "MTLSPolicy" });

export interface GoogleIamV1TestIamPermissionsRequest {
  /** The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). */
  permissions?: ReadonlyArray<string>;
}

export const GoogleIamV1TestIamPermissionsRequest: Schema.Codec<GoogleIamV1TestIamPermissionsRequest> =
  /*@__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleIamV1TestIamPermissionsRequest" });

export interface AuthzPolicyAuthzRuleStringMatch {
  /** The input string must have the prefix specified here. Note: empty prefix is not allowed, please use regex instead. Examples: * ``abc`` matches the value ``abc.xyz`` */
  prefix?: string;
  /** The input string must have the suffix specified here. Note: empty prefix is not allowed, please use regex instead. Examples: * ``abc`` matches the value ``xyz.abc`` */
  suffix?: string;
  /** The input string must have the substring specified here. Note: empty contains match is not allowed, please use regex instead. Examples: * ``abc`` matches the value ``xyz.abc.def`` */
  contains?: string;
  /** The input string must match exactly the string specified here. Examples: * ``abc`` only matches the value ``abc``. */
  exact?: string;
  /** If true, indicates the exact/prefix/suffix/contains matching should be case insensitive. For example, the matcher ``data`` will match both input string ``Data`` and ``data`` if set to true. */
  ignoreCase?: boolean;
}

export const AuthzPolicyAuthzRuleStringMatch: Schema.Codec<AuthzPolicyAuthzRuleStringMatch> =
  /*@__PURE__*/ Schema.Struct({
    prefix: Schema.optional(Schema.String),
    suffix: Schema.optional(Schema.String),
    contains: Schema.optional(Schema.String),
    exact: Schema.optional(Schema.String),
    ignoreCase: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "AuthzPolicyAuthzRuleStringMatch" });

export interface AuthzPolicyAuthzRuleToRequestOperationMCPMethod {
  /** Required. The MCP method to match against. Allowed values are as follows: 1. `tools`, `prompts`, `resources` - these will match against all sub methods under the respective methods. 2. `prompts/list`, `tools/list`, `resources/list`, `resources/templates/list` 3. `prompts/get`, `tools/call`, `resources/subscribe`, `resources/unsubscribe`, `resources/read` Params cannot be specified for categories 1 and 2. */
  name?: string;
  /** Optional. A list of MCP method parameters to match against. The match can be one of exact, prefix, suffix, or contains (substring match). Matches are always case sensitive unless the ignoreCase is set. Limited to 10 MCP method parameters per Authorization Policy. */
  params?: ReadonlyArray<AuthzPolicyAuthzRuleStringMatch>;
}

export const AuthzPolicyAuthzRuleToRequestOperationMCPMethod: Schema.Codec<AuthzPolicyAuthzRuleToRequestOperationMCPMethod> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    params: Schema.optional(Schema.Array(AuthzPolicyAuthzRuleStringMatch)),
  }).annotate({
    identifier: "AuthzPolicyAuthzRuleToRequestOperationMCPMethod",
  });

export interface AuthzPolicyAuthzRuleToRequestOperationMCP {
  /** Optional. A list of MCP methods and associated parameters to match on. It is recommended to use this field to match on tools, prompts and resource accesses while setting the baseProtocolMethodsOption to MATCH_BASE_PROTOCOL_METHODS to match on all the other MCP protocol methods. Limited to 10 MCP methods per Authorization Policy. */
  methods?: ReadonlyArray<AuthzPolicyAuthzRuleToRequestOperationMCPMethod>;
  /** Optional. If specified, matches on the MCP protocol’s non-access specific methods namely: * initialize * completion/ * logging/ * notifications/ * ping Defaults to SKIP_BASE_PROTOCOL_METHODS if not specified. */
  baseProtocolMethodsOption?:
    | "BASE_PROTOCOL_METHODS_OPTION_UNSPECIFIED"
    | "SKIP_BASE_PROTOCOL_METHODS"
    | "MATCH_BASE_PROTOCOL_METHODS"
    | (string & {});
}

export const AuthzPolicyAuthzRuleToRequestOperationMCP: Schema.Codec<AuthzPolicyAuthzRuleToRequestOperationMCP> =
  /*@__PURE__*/ Schema.Struct({
    methods: Schema.optional(
      Schema.Array(AuthzPolicyAuthzRuleToRequestOperationMCPMethod),
    ),
    baseProtocolMethodsOption: Schema.optional(Schema.String),
  }).annotate({ identifier: "AuthzPolicyAuthzRuleToRequestOperationMCP" });

export interface AuthzPolicyAuthzRuleHeaderMatch {
  /** Optional. Specifies how the header match will be performed. */
  value?: AuthzPolicyAuthzRuleStringMatch;
  /** Optional. Specifies the name of the header in the request. */
  name?: string;
}

export const AuthzPolicyAuthzRuleHeaderMatch: Schema.Codec<AuthzPolicyAuthzRuleHeaderMatch> =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(AuthzPolicyAuthzRuleStringMatch),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "AuthzPolicyAuthzRuleHeaderMatch" });

export interface AuthzPolicyAuthzRuleToRequestOperationHeaderSet {
  /** Required. A list of headers to match against in http header. The match can be one of exact, prefix, suffix, or contains (substring match). The match follows AND semantics which means all the headers must match. Matches are always case sensitive unless the ignoreCase is set. Limited to 10 headers per Authorization Policy. */
  headers?: ReadonlyArray<AuthzPolicyAuthzRuleHeaderMatch>;
}

export const AuthzPolicyAuthzRuleToRequestOperationHeaderSet: Schema.Codec<AuthzPolicyAuthzRuleToRequestOperationHeaderSet> =
  /*@__PURE__*/ Schema.Struct({
    headers: Schema.optional(Schema.Array(AuthzPolicyAuthzRuleHeaderMatch)),
  }).annotate({
    identifier: "AuthzPolicyAuthzRuleToRequestOperationHeaderSet",
  });

export interface AuthzPolicyAuthzRuleToRequestOperation {
  /** Optional. Defines the MCP protocol attributes to match on. If the MCP payload in the request body cannot be successfully parsed, the request will be denied. This field can be set only for AuthzPolicies targeting AgentGateway resources. */
  mcp?: AuthzPolicyAuthzRuleToRequestOperationMCP;
  /** Optional. A list of SNIs to match against. The match can be one of exact, prefix, suffix, or contains (substring match). If there is no SNI (i.e. plaintext HTTP traffic), the request will be denied. Matches are always case sensitive unless the ignoreCase is set. Limited to 10 SNIs per Authorization Policy. */
  snis?: ReadonlyArray<AuthzPolicyAuthzRuleStringMatch>;
  /** Optional. A list of HTTP Hosts to match against. The match can be one of exact, prefix, suffix, or contains (substring match). Matches are always case sensitive unless the ignoreCase is set. Limited to 10 hosts per Authorization Policy. */
  hosts?: ReadonlyArray<AuthzPolicyAuthzRuleStringMatch>;
  /** Optional. A list of paths to match against. The match can be one of exact, prefix, suffix, or contains (substring match). Matches are always case sensitive unless the ignoreCase is set. Limited to 10 paths per Authorization Policy. Note that this path match includes the query parameters. For gRPC services, this should be a fully-qualified name of the form /package.service/method. */
  paths?: ReadonlyArray<AuthzPolicyAuthzRuleStringMatch>;
  /** Optional. A list of HTTP methods to match against. Each entry must be a valid HTTP method name (GET, PUT, POST, HEAD, PATCH, DELETE, OPTIONS). It only allows exact match and is always case sensitive. Limited to 10 methods per Authorization Policy. */
  methods?: ReadonlyArray<string>;
  /** Optional. A list of headers to match against in http header. */
  headerSet?: AuthzPolicyAuthzRuleToRequestOperationHeaderSet;
}

export const AuthzPolicyAuthzRuleToRequestOperation: Schema.Codec<AuthzPolicyAuthzRuleToRequestOperation> =
  /*@__PURE__*/ Schema.Struct({
    mcp: Schema.optional(AuthzPolicyAuthzRuleToRequestOperationMCP),
    snis: Schema.optional(Schema.Array(AuthzPolicyAuthzRuleStringMatch)),
    hosts: Schema.optional(Schema.Array(AuthzPolicyAuthzRuleStringMatch)),
    paths: Schema.optional(Schema.Array(AuthzPolicyAuthzRuleStringMatch)),
    methods: Schema.optional(Schema.Array(Schema.String)),
    headerSet: Schema.optional(AuthzPolicyAuthzRuleToRequestOperationHeaderSet),
  }).annotate({ identifier: "AuthzPolicyAuthzRuleToRequestOperation" });

export interface InterceptEndpointGroupConnectedDeploymentGroup {
  /** Output only. The connected deployment group's resource name, for example: `projects/123456789/locations/global/interceptDeploymentGroups/my-dg`. See https://google.aip.dev/124. */
  name?: string;
  /** Output only. The list of locations where the deployment group is present. */
  locations?: ReadonlyArray<InterceptLocation>;
}

export const InterceptEndpointGroupConnectedDeploymentGroup: Schema.Codec<InterceptEndpointGroupConnectedDeploymentGroup> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    locations: Schema.optional(Schema.Array(InterceptLocation)),
  }).annotate({ identifier: "InterceptEndpointGroupConnectedDeploymentGroup" });

export interface InterceptEndpointGroupAssociationDetails {
  /** Output only. Most recent known state of the association. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "CREATING"
    | "DELETING"
    | "CLOSED"
    | "OUT_OF_SYNC"
    | "DELETE_FAILED"
    | (string & {});
  /** Output only. The connected association's resource name, for example: `projects/123456789/locations/global/interceptEndpointGroupAssociations/my-ega`. See https://google.aip.dev/124. */
  name?: string;
  /** Output only. The associated network, for example: projects/123456789/global/networks/my-network. See https://google.aip.dev/124. */
  network?: string;
}

export const InterceptEndpointGroupAssociationDetails: Schema.Codec<InterceptEndpointGroupAssociationDetails> =
  /*@__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    network: Schema.optional(Schema.String),
  }).annotate({ identifier: "InterceptEndpointGroupAssociationDetails" });

export interface InterceptEndpointGroup {
  /** Output only. The timestamp when the resource was most recently updated. See https://google.aip.dev/148#timestamps. */
  updateTime?: string;
  /** Output only. The current state of the endpoint group. See https://google.aip.dev/216. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "CLOSED"
    | "CREATING"
    | "DELETING"
    | "OUT_OF_SYNC"
    | "DELETE_FAILED"
    | (string & {});
  /** Required. Immutable. The deployment group that this endpoint group is connected to, for example: `projects/123456789/locations/global/interceptDeploymentGroups/my-dg`. See https://google.aip.dev/124. */
  interceptDeploymentGroup?: string;
  /** Output only. Details about the connected deployment group to this endpoint group. */
  connectedDeploymentGroup?: InterceptEndpointGroupConnectedDeploymentGroup;
  /** Output only. The current state of the resource does not match the user's intended state, and the system is working to reconcile them. This is part of the normal operation (e.g. adding a new association to the group). See https://google.aip.dev/128. */
  reconciling?: boolean;
  /** Output only. List of associations to this endpoint group. */
  associations?: ReadonlyArray<InterceptEndpointGroupAssociationDetails>;
  /** Immutable. Identifier. The resource name of this endpoint group, for example: `projects/123456789/locations/global/interceptEndpointGroups/my-eg`. See https://google.aip.dev/122 for more details. */
  name?: string;
  /** Output only. The timestamp when the resource was created. See https://google.aip.dev/148#timestamps. */
  createTime?: string;
  /** Optional. Labels are key/value pairs that help to organize and filter resources. */
  labels?: Record<string, string>;
  /** Optional. User-provided description of the endpoint group. Used as additional context for the endpoint group. */
  description?: string;
}

export const InterceptEndpointGroup: Schema.Codec<InterceptEndpointGroup> =
  /*@__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    interceptDeploymentGroup: Schema.optional(Schema.String),
    connectedDeploymentGroup: Schema.optional(
      InterceptEndpointGroupConnectedDeploymentGroup,
    ),
    reconciling: Schema.optional(Schema.Boolean),
    associations: Schema.optional(
      Schema.Array(InterceptEndpointGroupAssociationDetails),
    ),
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "InterceptEndpointGroup" });

export interface ListInterceptEndpointGroupsResponse {
  /** The endpoint groups from the specified parent. */
  interceptEndpointGroups?: ReadonlyArray<InterceptEndpointGroup>;
  /** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. See https://google.aip.dev/158 for more details. */
  nextPageToken?: string;
}

export const ListInterceptEndpointGroupsResponse: Schema.Codec<ListInterceptEndpointGroupsResponse> =
  /*@__PURE__*/ Schema.Struct({
    interceptEndpointGroups: Schema.optional(
      Schema.Array(InterceptEndpointGroup),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListInterceptEndpointGroupsResponse" });

export interface UrlFilteringProfile {
  /** Optional. The list of filtering configs in which each config defines an action to take for some URL match. */
  urlFilters?: ReadonlyArray<UrlFilter>;
}

export const UrlFilteringProfile: Schema.Codec<UrlFilteringProfile> =
  /*@__PURE__*/ Schema.Struct({
    urlFilters: Schema.optional(Schema.Array(UrlFilter)),
  }).annotate({ identifier: "UrlFilteringProfile" });

export interface GatewaySecurityPolicy {
  /** Output only. The timestamp when the resource was updated. */
  updateTime?: string;
  /** Required. Name of the resource. Name is of the form projects/{project}/locations/{location}/gatewaySecurityPolicies/{gateway_security_policy} gateway_security_policy should match the pattern:(^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$). */
  name?: string;
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Optional. Free-text description of the resource. */
  description?: string;
  /** Optional. Name of a TLS Inspection Policy resource that defines how TLS inspection will be performed for any rule(s) which enables it. */
  tlsInspectionPolicy?: string;
}

export const GatewaySecurityPolicy: Schema.Codec<GatewaySecurityPolicy> =
  /*@__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    tlsInspectionPolicy: Schema.optional(Schema.String),
  }).annotate({ identifier: "GatewaySecurityPolicy" });

export interface SACRealmPairingKey {
  /** Output only. Timestamp in UTC of when this resource is considered expired. It expires 7 days after creation. */
  expireTime?: string;
  /** Output only. Key value. */
  key?: string;
}

export const SACRealmPairingKey: Schema.Codec<SACRealmPairingKey> =
  /*@__PURE__*/ Schema.Struct({
    expireTime: Schema.optional(Schema.String),
    key: Schema.optional(Schema.String),
  }).annotate({ identifier: "SACRealmPairingKey" });

export interface SACRealmSACRealmSymantecOptions {
  /** Output only. Symantec site IDs which the user can choose to connect to. */
  availableSymantecSites?: ReadonlyArray<string>;
  /** Optional. API Key used to call Symantec APIs on the user's behalf. Required if using Symantec Cloud SWG. P4SA account needs permissions granted to read this secret. A secret ID, secret name, or secret URI can be specified, but it will be parsed and stored as a secret URI in the form `projects/{project_number}/secrets/my-secret`. */
  secretPath?: string;
  /** Output only. Connection status to Symantec API. */
  symantecConnectionState?:
    | "SYMANTEC_CONNECTION_STATE_UNSPECIFIED"
    | "SUCCEEDED"
    | "READ_SECRET_FAILED"
    | "REQUEST_TO_SYMANTEC_FAILED"
    | "UNAVAILABLE_FOR_HISTORICAL_REQUESTS"
    | (string & {});
}

export const SACRealmSACRealmSymantecOptions: Schema.Codec<SACRealmSACRealmSymantecOptions> =
  /*@__PURE__*/ Schema.Struct({
    availableSymantecSites: Schema.optional(Schema.Array(Schema.String)),
    secretPath: Schema.optional(Schema.String),
    symantecConnectionState: Schema.optional(Schema.String),
  }).annotate({ identifier: "SACRealmSACRealmSymantecOptions" });

export interface SACRealm {
  /** Output only. Key to be shared with SSE service provider during pairing. */
  pairingKey?: SACRealmPairingKey;
  /** Output only. State of the realm. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PENDING_PARTNER_ATTACHMENT"
    | "PARTNER_ATTACHED"
    | "PARTNER_DETACHED"
    | "KEY_EXPIRED"
    | (string & {});
  /** Identifier. Resource name, in the form `projects/{project}/locations/global/sacRealms/{sacRealm}`. */
  name?: string;
  /** Output only. Timestamp when the realm was created. */
  createTime?: string;
  /** Optional. Optional list of labels applied to the resource. */
  labels?: Record<string, string>;
  /** Immutable. SSE service provider associated with the realm. */
  securityService?:
    | "SECURITY_SERVICE_UNSPECIFIED"
    | "PALO_ALTO_PRISMA_ACCESS"
    | "SYMANTEC_CLOUD_SWG"
    | (string & {});
  /** Optional. Configuration required for Symantec realms. */
  symantecOptions?: SACRealmSACRealmSymantecOptions;
  /** Output only. Timestamp when the realm was last updated. */
  updateTime?: string;
}

export const SACRealm: Schema.Codec<SACRealm> =
  /*@__PURE__*/ Schema.Struct({
    pairingKey: Schema.optional(SACRealmPairingKey),
    state: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    securityService: Schema.optional(Schema.String),
    symantecOptions: Schema.optional(SACRealmSACRealmSymantecOptions),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "SACRealm" });

export interface ListSACRealmsResponse {
  /** The list of SACRealms. */
  sacRealms?: ReadonlyArray<SACRealm>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListSACRealmsResponse: Schema.Codec<ListSACRealmsResponse> =
  /*@__PURE__*/ Schema.Struct({
    sacRealms: Schema.optional(Schema.Array(SACRealm)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListSACRealmsResponse" });

export interface Destination {
  /** Required. List of destination ports to match. At least one port should match. */
  ports?: ReadonlyArray<number>;
  /** Optional. Match against key:value pair in http header. Provides a flexible match based on HTTP headers, for potentially advanced use cases. At least one header should match. Avoid using header matches to make authorization decisions unless there is a strong guarantee that requests arrive through a trusted client or proxy. */
  httpHeaderMatch?: HttpHeaderMatch;
  /** Required. List of host names to match. Matched against the ":authority" header in http requests. At least one host should match. Each host can be an exact match, or a prefix match (example "mydomain.*") or a suffix match (example "*.myorg.com") or a presence (any) match "*". */
  hosts?: ReadonlyArray<string>;
  /** Optional. A list of HTTP methods to match. At least one method should match. Should not be set for gRPC services. */
  methods?: ReadonlyArray<string>;
}

export const Destination: Schema.Codec<Destination> =
  /*@__PURE__*/ Schema.Struct({
    ports: Schema.optional(Schema.Array(Schema.Number)),
    httpHeaderMatch: Schema.optional(HttpHeaderMatch),
    hosts: Schema.optional(Schema.Array(Schema.String)),
    methods: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Destination" });

export interface AuthzPolicyCustomProviderAuthzExtension {
  /** Required. A list of references to authorization extensions that will be invoked for requests matching this policy. Limited to 1 custom provider. */
  resources?: ReadonlyArray<string>;
}

export const AuthzPolicyCustomProviderAuthzExtension: Schema.Codec<AuthzPolicyCustomProviderAuthzExtension> =
  /*@__PURE__*/ Schema.Struct({
    resources: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "AuthzPolicyCustomProviderAuthzExtension" });

export interface OperationMetadata {
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
}

export const OperationMetadata: Schema.Codec<OperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
    endTime: Schema.optional(Schema.String),
    statusMessage: Schema.optional(Schema.String),
  }).annotate({ identifier: "OperationMetadata" });

export interface WildfireVerdictChangeRequest {
  /** Output only. The file type of the Malware Sample. */
  fileType?: string;
  /** Output only. The region of the file associated with the Malware Sample. */
  sourceRegion?: string;
  /** Required. The SHA256 hash of the Malware Sample to change the verdict of. */
  sha256?: string;
  /** Output only. The file name of the Malware Sample. */
  fileName?: string;
  /** Output only. Identifier. The relative name of the WildfireVerdictChangeRequest. Output only. This is a unique identifier generated by the third party API. Format: organizations|projects/{project_or_organization}/locations/{location}/firewallEndpoints/{firewall_endpoint}/wildfireVerdictChangeRequests/{wildfire_verdict_change_request_id} Where {wildfire_verdict_change_request_id} is the ID in the format: ^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$ */
  name?: string;
  /** Output only. The final verdict of the Malware Sample. */
  finalVerdict?:
    | "WILDFIRE_SAMPLE_VERDICT_UNKNOWN"
    | "BENIGN"
    | "MALWARE"
    | "GRAYWARE"
    | "PHISHING"
    | (string & {});
  /** Required. The justification for the verdict change request. Max length 2048 characters. */
  comment?: string;
  /** Output only. The original verdict of the Malware Sample. */
  oldVerdict?:
    | "WILDFIRE_SAMPLE_VERDICT_UNKNOWN"
    | "BENIGN"
    | "MALWARE"
    | "GRAYWARE"
    | "PHISHING"
    | (string & {});
  /** Required. The suggested verdict to apply to the Malware Sample. */
  newVerdict?:
    | "WILDFIRE_SAMPLE_VERDICT_UNKNOWN"
    | "BENIGN"
    | "MALWARE"
    | "GRAYWARE"
    | "PHISHING"
    | (string & {});
  /** Output only. The timestamp when the WildfireVerdictChangeRequest was last updated. */
  updateTime?: string;
  /** Output only. The timestamp when the WildfireVerdictChangeRequest was created. */
  createTime?: string;
  /** Output only. The timestamp when the WildfireVerdictChangeRequest was resolved. */
  resolutionTime?: string;
  /** Output only. The ID of the WildfireVerdictChangeRequest. This is a unique identifier generated by the third party API. Format: ^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$ */
  wildfireVerdictChangeRequestId?: string;
  /** Output only. The review state of the WildfireVerdictChangeRequest. */
  state?:
    | "VERDICT_CHANGE_REQUEST_STATE_UNSPECIFIED"
    | "OPEN"
    | "CLOSED"
    | "PENDING"
    | (string & {});
}

export const WildfireVerdictChangeRequest: Schema.Codec<WildfireVerdictChangeRequest> =
  /*@__PURE__*/ Schema.Struct({
    fileType: Schema.optional(Schema.String),
    sourceRegion: Schema.optional(Schema.String),
    sha256: Schema.optional(Schema.String),
    fileName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    finalVerdict: Schema.optional(Schema.String),
    comment: Schema.optional(Schema.String),
    oldVerdict: Schema.optional(Schema.String),
    newVerdict: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    resolutionTime: Schema.optional(Schema.String),
    wildfireVerdictChangeRequestId: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "WildfireVerdictChangeRequest" });

export interface AuthzPolicyAuthzRuleTo {
  /** Optional. Describes the negated properties of the targets of a request. Matches requests for operations that do not match the criteria specified in this field. At least one of operations or notOperations must be specified. */
  notOperations?: ReadonlyArray<AuthzPolicyAuthzRuleToRequestOperation>;
  /** Optional. Describes properties of one or more targets of a request. At least one of operations or notOperations must be specified. Limited to 1 operation. A match occurs when ANY operation (in operations or notOperations) matches. Within an operation, the match follows AND semantics across fields and OR semantics within a field, i.e. a match occurs when ANY path matches AND ANY header matches and ANY method matches. */
  operations?: ReadonlyArray<AuthzPolicyAuthzRuleToRequestOperation>;
}

export const AuthzPolicyAuthzRuleTo: Schema.Codec<AuthzPolicyAuthzRuleTo> =
  /*@__PURE__*/ Schema.Struct({
    notOperations: Schema.optional(
      Schema.Array(AuthzPolicyAuthzRuleToRequestOperation),
    ),
    operations: Schema.optional(
      Schema.Array(AuthzPolicyAuthzRuleToRequestOperation),
    ),
  }).annotate({ identifier: "AuthzPolicyAuthzRuleTo" });

export interface AuthzPolicyAuthzRulePrincipal {
  /** Optional. An enum to decide what principal value the principal rule will match against. If not specified, the PrincipalSelector is CLIENT_CERT_URI_SAN. */
  principalSelector?:
    | "PRINCIPAL_SELECTOR_UNSPECIFIED"
    | "CLIENT_CERT_URI_SAN"
    | "CLIENT_CERT_DNS_NAME_SAN"
    | "CLIENT_CERT_COMMON_NAME"
    | (string & {});
  /** Required. A non-empty string whose value is matched against the principal value based on the principal_selector. Only exact match can be applied for CLIENT_CERT_URI_SAN, CLIENT_CERT_DNS_NAME_SAN, CLIENT_CERT_COMMON_NAME selectors. */
  principal?: AuthzPolicyAuthzRuleStringMatch;
}

export const AuthzPolicyAuthzRulePrincipal: Schema.Codec<AuthzPolicyAuthzRulePrincipal> =
  /*@__PURE__*/ Schema.Struct({
    principalSelector: Schema.optional(Schema.String),
    principal: Schema.optional(AuthzPolicyAuthzRuleStringMatch),
  }).annotate({ identifier: "AuthzPolicyAuthzRulePrincipal" });

export interface AuthzPolicyAuthzRuleIpBlock {
  /** Required. The address prefix. */
  prefix?: string;
  /** Required. The length of the address range. */
  length?: number;
}

export const AuthzPolicyAuthzRuleIpBlock: Schema.Codec<AuthzPolicyAuthzRuleIpBlock> =
  /*@__PURE__*/ Schema.Struct({
    prefix: Schema.optional(Schema.String),
    length: Schema.optional(Schema.Number),
  }).annotate({ identifier: "AuthzPolicyAuthzRuleIpBlock" });

export interface AuthzPolicyAuthzRuleRequestResourceTagValueIdSet {
  /** Required. A list of resource tag value permanent IDs to match against the resource manager tags value associated with the source VM of a request. The match follows AND semantics which means all the ids must match. Limited to 5 ids in the Tag value id set. */
  ids?: ReadonlyArray<string>;
}

export const AuthzPolicyAuthzRuleRequestResourceTagValueIdSet: Schema.Codec<AuthzPolicyAuthzRuleRequestResourceTagValueIdSet> =
  /*@__PURE__*/ Schema.Struct({
    ids: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "AuthzPolicyAuthzRuleRequestResourceTagValueIdSet",
  });

export interface AuthzPolicyAuthzRuleRequestResource {
  /** Optional. An IAM service account to match against the source service account of the VM sending the request. */
  iamServiceAccount?: AuthzPolicyAuthzRuleStringMatch;
  /** Optional. A list of resource tag value permanent IDs to match against the resource manager tags value associated with the source VM of a request. */
  tagValueIdSet?: AuthzPolicyAuthzRuleRequestResourceTagValueIdSet;
}

export const AuthzPolicyAuthzRuleRequestResource: Schema.Codec<AuthzPolicyAuthzRuleRequestResource> =
  /*@__PURE__*/ Schema.Struct({
    iamServiceAccount: Schema.optional(AuthzPolicyAuthzRuleStringMatch),
    tagValueIdSet: Schema.optional(
      AuthzPolicyAuthzRuleRequestResourceTagValueIdSet,
    ),
  }).annotate({ identifier: "AuthzPolicyAuthzRuleRequestResource" });

export interface AuthzPolicyAuthzRuleFromRequestSource {
  /** Optional. A list of identities derived from the client's certificate. This field will not match on a request unless frontend mutual TLS is enabled for the forwarding rule or Gateway and the client certificate has been successfully validated by mTLS. Each identity is a string whose value is matched against a list of URI SANs, DNS Name SANs, or the common name in the client's certificate. A match happens when any principal matches with the rule. Limited to 50 principals per Authorization Policy for regional internal Application Load Balancers, regional external Application Load Balancers, cross-region internal Application Load Balancers, and Cloud Service Mesh. This field is not supported for global external Application Load Balancers. */
  principals?: ReadonlyArray<AuthzPolicyAuthzRulePrincipal>;
  /** Optional. A list of IP addresses or IP address ranges to match against the source IP address of the request. Limited to 10 ip_blocks per Authorization Policy */
  ipBlocks?: ReadonlyArray<AuthzPolicyAuthzRuleIpBlock>;
  /** Optional. A list of resources to match against the resource of the source VM of a request. Limited to 10 resources per Authorization Policy. */
  resources?: ReadonlyArray<AuthzPolicyAuthzRuleRequestResource>;
}

export const AuthzPolicyAuthzRuleFromRequestSource: Schema.Codec<AuthzPolicyAuthzRuleFromRequestSource> =
  /*@__PURE__*/ Schema.Struct({
    principals: Schema.optional(Schema.Array(AuthzPolicyAuthzRulePrincipal)),
    ipBlocks: Schema.optional(Schema.Array(AuthzPolicyAuthzRuleIpBlock)),
    resources: Schema.optional(
      Schema.Array(AuthzPolicyAuthzRuleRequestResource),
    ),
  }).annotate({ identifier: "AuthzPolicyAuthzRuleFromRequestSource" });

export interface AuthzPolicyAuthzRuleFrom {
  /** Optional. Describes the properties of a request's sources. At least one of sources or notSources must be specified. Limited to 1 source. A match occurs when ANY source (in sources or notSources) matches the request. Within a single source, the match follows AND semantics across fields and OR semantics within a single field, i.e. a match occurs when ANY principal matches AND ANY ipBlocks match. */
  sources?: ReadonlyArray<AuthzPolicyAuthzRuleFromRequestSource>;
  /** Optional. Describes the negated properties of request sources. Matches requests from sources that do not match the criteria specified in this field. At least one of sources or notSources must be specified. */
  notSources?: ReadonlyArray<AuthzPolicyAuthzRuleFromRequestSource>;
}

export const AuthzPolicyAuthzRuleFrom: Schema.Codec<AuthzPolicyAuthzRuleFrom> =
  /*@__PURE__*/ Schema.Struct({
    sources: Schema.optional(
      Schema.Array(AuthzPolicyAuthzRuleFromRequestSource),
    ),
    notSources: Schema.optional(
      Schema.Array(AuthzPolicyAuthzRuleFromRequestSource),
    ),
  }).annotate({ identifier: "AuthzPolicyAuthzRuleFrom" });

export interface AuthzPolicyAuthzRule {
  /** Optional. Describes properties of a target of a request. */
  to?: AuthzPolicyAuthzRuleTo;
  /** Optional. Describes properties of a source of a request. */
  from?: AuthzPolicyAuthzRuleFrom;
  /** Optional. CEL expression that describes the conditions to be satisfied for the action. The result of the CEL expression is ANDed with the from and to. Refer to the CEL language reference for a list of available attributes. */
  when?: string;
}

export const AuthzPolicyAuthzRule: Schema.Codec<AuthzPolicyAuthzRule> =
  /*@__PURE__*/ Schema.Struct({
    to: Schema.optional(AuthzPolicyAuthzRuleTo),
    from: Schema.optional(AuthzPolicyAuthzRuleFrom),
    when: Schema.optional(Schema.String),
  }).annotate({ identifier: "AuthzPolicyAuthzRule" });

export interface AuthzPolicyTarget {
  /** Optional. All gateways and forwarding rules referenced by this policy and extensions must share the same load balancing scheme. Required only when targeting forwarding rules. If targeting Secure Web Proxy, this field must be `INTERNAL_MANAGED` or not specified. Must not be specified when targeting Agent Gateway. Supported values: `INTERNAL_MANAGED` and `EXTERNAL_MANAGED`. For more information, refer to [Backend services overview](https://cloud.google.com/load-balancing/docs/backend-service). */
  loadBalancingScheme?:
    | "LOAD_BALANCING_SCHEME_UNSPECIFIED"
    | "INTERNAL_MANAGED"
    | "EXTERNAL_MANAGED"
    | "INTERNAL_SELF_MANAGED"
    | (string & {});
  /** Required. A list of references to the Forwarding Rules, Secure Web Proxy Gateways, or Agent Gateways on which this policy will be applied. */
  resources?: ReadonlyArray<string>;
}

export const AuthzPolicyTarget: Schema.Codec<AuthzPolicyTarget> =
  /*@__PURE__*/ Schema.Struct({
    loadBalancingScheme: Schema.optional(Schema.String),
    resources: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "AuthzPolicyTarget" });

export interface AuthzPolicyCustomProviderCloudIap {}

export const AuthzPolicyCustomProviderCloudIap: Schema.Codec<AuthzPolicyCustomProviderCloudIap> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AuthzPolicyCustomProviderCloudIap",
  });

export interface AuthzPolicyCustomProvider {
  /** Optional. Delegates authorization decisions to Cloud IAP. Applicable only for managed load balancers. Enabling Cloud IAP at the AuthzPolicy level is not compatible with Cloud IAP settings in the BackendService. Enabling IAP in both places will result in request failure. Ensure that IAP is enabled in either the AuthzPolicy or the BackendService but not in both places. */
  cloudIap?: AuthzPolicyCustomProviderCloudIap;
  /** Optional. Delegate authorization decision to user authored Service Extension. Only one of cloudIap or authzExtension can be specified. */
  authzExtension?: AuthzPolicyCustomProviderAuthzExtension;
}

export const AuthzPolicyCustomProvider: Schema.Codec<AuthzPolicyCustomProvider> =
  /*@__PURE__*/ Schema.Struct({
    cloudIap: Schema.optional(AuthzPolicyCustomProviderCloudIap),
    authzExtension: Schema.optional(AuthzPolicyCustomProviderAuthzExtension),
  }).annotate({ identifier: "AuthzPolicyCustomProvider" });

export interface AuthzPolicy {
  /** Required. Can be one of `ALLOW`, `DENY`, `CUSTOM`. When the action is `CUSTOM`, `customProvider` must be specified. When the action is `ALLOW`, only requests matching the policy will be allowed. When the action is `DENY`, only requests matching the policy will be denied. When a request arrives, the policies are evaluated in the following order: 1. If there is a `CUSTOM` policy that matches the request, the `CUSTOM` policy is evaluated using the custom authorization providers and the request is denied if the provider rejects the request. 2. If there are any `DENY` policies that match the request, the request is denied. 3. If there are no `ALLOW` policies for the resource or if any of the `ALLOW` policies match the request, the request is allowed. 4. Else the request is denied by default if none of the configured AuthzPolicies with `ALLOW` action match the request. */
  action?:
    | "AUTHZ_ACTION_UNSPECIFIED"
    | "ALLOW"
    | "DENY"
    | "CUSTOM"
    | (string & {});
  /** Optional. A list of authorization network rules to match against the incoming request. A policy match occurs when at least one network rule matches the request. At least one network rule is required for Allow or Deny Action if no HTTP rules are provided. Network rules are mutually exclusive with HTTP rules. Limited to 5 rules. */
  networkRules?: ReadonlyArray<AuthzPolicyAuthzRule>;
  /** Output only. The timestamp when the resource was updated. */
  updateTime?: string;
  /** Required. Identifier. Name of the `AuthzPolicy` resource in the following format: `projects/{project}/locations/{location}/authzPolicies/{authz_policy}`. */
  name?: string;
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Optional. A human-readable description of the resource. */
  description?: string;
  /** Optional. Set of labels associated with the `AuthzPolicy` resource. The format must comply with [the following requirements](/compute/docs/labeling-resources#requirements). */
  labels?: Record<string, string>;
  /** Required. Specifies the set of resources to which this policy should be applied to. */
  target?: AuthzPolicyTarget;
  /** Optional. Required if the action is `CUSTOM`. Allows delegating authorization decisions to Cloud IAP or to Service Extensions. One of `cloudIap` or `authzExtension` must be specified. */
  customProvider?: AuthzPolicyCustomProvider;
  /** Optional. A list of authorization HTTP rules to match against the incoming request. A policy match occurs when at least one HTTP rule matches the request or when no HTTP rules are specified in the policy. At least one HTTP Rule is required for Allow or Deny Action. Limited to 5 rules. */
  httpRules?: ReadonlyArray<AuthzPolicyAuthzRule>;
  /** Optional. Immutable. Defines the type of authorization being performed. If not specified, `REQUEST_AUTHZ` is applied. This field cannot be changed once AuthzPolicy is created. */
  policyProfile?:
    | "POLICY_PROFILE_UNSPECIFIED"
    | "REQUEST_AUTHZ"
    | "CONTENT_AUTHZ"
    | (string & {});
}

export const AuthzPolicy: Schema.Codec<AuthzPolicy> =
  /*@__PURE__*/ Schema.Struct({
    action: Schema.optional(Schema.String),
    networkRules: Schema.optional(Schema.Array(AuthzPolicyAuthzRule)),
    updateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    target: Schema.optional(AuthzPolicyTarget),
    customProvider: Schema.optional(AuthzPolicyCustomProvider),
    httpRules: Schema.optional(Schema.Array(AuthzPolicyAuthzRule)),
    policyProfile: Schema.optional(Schema.String),
  }).annotate({ identifier: "AuthzPolicy" });

export interface InterceptDeploymentGroupConnectedEndpointGroup {
  /** Output only. The connected endpoint group's resource name, for example: `projects/123456789/locations/global/interceptEndpointGroups/my-eg`. See https://google.aip.dev/124. */
  name?: string;
}

export const InterceptDeploymentGroupConnectedEndpointGroup: Schema.Codec<InterceptDeploymentGroupConnectedEndpointGroup> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "InterceptDeploymentGroupConnectedEndpointGroup" });

export interface InterceptDeploymentGroupDeployment {
  /** Output only. The name of the Intercept Deployment, in the format: `projects/{project}/locations/{location}/interceptDeployments/{intercept_deployment}`. */
  name?: string;
  /** Output only. Most recent known state of the deployment. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "CREATING"
    | "DELETING"
    | "OUT_OF_SYNC"
    | "DELETE_FAILED"
    | (string & {});
}

export const InterceptDeploymentGroupDeployment: Schema.Codec<InterceptDeploymentGroupDeployment> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "InterceptDeploymentGroupDeployment" });

export interface InterceptDeploymentGroup {
  /** Output only. The timestamp when the resource was most recently updated. See https://google.aip.dev/148#timestamps. */
  updateTime?: string;
  /** Output only. The list of endpoint groups that are connected to this resource. */
  connectedEndpointGroups?: ReadonlyArray<InterceptDeploymentGroupConnectedEndpointGroup>;
  /** Required. Immutable. The network that will be used for all child deployments, for example: `projects/{project}/global/networks/{network}`. See https://google.aip.dev/124. */
  network?: string;
  /** Output only. The current state of the resource does not match the user's intended state, and the system is working to reconcile them. This is part of the normal operation (e.g. adding a new deployment to the group) See https://google.aip.dev/128. */
  reconciling?: boolean;
  /** Output only. The current state of the deployment group. See https://google.aip.dev/216. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "CREATING"
    | "DELETING"
    | (string & {});
  /** Output only. The list of locations where the deployment group is present. */
  locations?: ReadonlyArray<InterceptLocation>;
  /** Output only. The list of Intercept Deployments that belong to this group. */
  nestedDeployments?: ReadonlyArray<InterceptDeploymentGroupDeployment>;
  /** Immutable. Identifier. The resource name of this deployment group, for example: `projects/123456789/locations/global/interceptDeploymentGroups/my-dg`. See https://google.aip.dev/122 for more details. */
  name?: string;
  /** Output only. The timestamp when the resource was created. See https://google.aip.dev/148#timestamps. */
  createTime?: string;
  /** Optional. Labels are key/value pairs that help to organize and filter resources. */
  labels?: Record<string, string>;
  /** Optional. User-provided description of the deployment group. Used as additional context for the deployment group. */
  description?: string;
}

export const InterceptDeploymentGroup: Schema.Codec<InterceptDeploymentGroup> =
  /*@__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    connectedEndpointGroups: Schema.optional(
      Schema.Array(InterceptDeploymentGroupConnectedEndpointGroup),
    ),
    network: Schema.optional(Schema.String),
    reconciling: Schema.optional(Schema.Boolean),
    state: Schema.optional(Schema.String),
    locations: Schema.optional(Schema.Array(InterceptLocation)),
    nestedDeployments: Schema.optional(
      Schema.Array(InterceptDeploymentGroupDeployment),
    ),
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "InterceptDeploymentGroup" });

export interface ListInterceptDeploymentGroupsResponse {
  /** The deployment groups from the specified parent. */
  interceptDeploymentGroups?: ReadonlyArray<InterceptDeploymentGroup>;
  /** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. See https://google.aip.dev/158 for more details. */
  nextPageToken?: string;
}

export const ListInterceptDeploymentGroupsResponse: Schema.Codec<ListInterceptDeploymentGroupsResponse> =
  /*@__PURE__*/ Schema.Struct({
    interceptDeploymentGroups: Schema.optional(
      Schema.Array(InterceptDeploymentGroup),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListInterceptDeploymentGroupsResponse" });

export interface ListOperationsResponse {
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<Operation>;
}

export const ListOperationsResponse: Schema.Codec<ListOperationsResponse> =
  /*@__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
    operations: Schema.optional(Schema.Array(Operation)),
  }).annotate({ identifier: "ListOperationsResponse" });

export interface ListSecurityProfileGroupsResponse {
  /** List of SecurityProfileGroups resources. */
  securityProfileGroups?: ReadonlyArray<SecurityProfileGroup>;
  /** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
  nextPageToken?: string;
}

export const ListSecurityProfileGroupsResponse: Schema.Codec<ListSecurityProfileGroupsResponse> =
  /*@__PURE__*/ Schema.Struct({
    securityProfileGroups: Schema.optional(Schema.Array(SecurityProfileGroup)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListSecurityProfileGroupsResponse" });

export interface WildfireInlineCloudAnalysisRuleCustomFileTypes {
  /** Required. File types to be submitted for WildFire inline cloud analysis. */
  fileTypes?: ReadonlyArray<"FILE_TYPE_UNSPECIFIED" | "PE" | (string & {})>;
}

export const WildfireInlineCloudAnalysisRuleCustomFileTypes: Schema.Codec<WildfireInlineCloudAnalysisRuleCustomFileTypes> =
  /*@__PURE__*/ Schema.Struct({
    fileTypes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "WildfireInlineCloudAnalysisRuleCustomFileTypes" });

export interface WildfireInlineCloudAnalysisRule {
  /** Submit a custom list of file types for WildFire analysis. */
  customFileTypes?: WildfireInlineCloudAnalysisRuleCustomFileTypes;
  /** Required. File selection mode for WildFire inline cloud analysis. */
  fileSelectionMode?:
    | "FILE_SELECTION_MODE_UNSPECIFIED"
    | "ALL_FILE_TYPES"
    | "CUSTOM_FILE_TYPES"
    | (string & {});
  /** Required. Direction for the file to be analyzed by WildFire Inline Cloud Analysis. */
  direction?:
    | "DIRECTION_UNSPECIFIED"
    | "UPLOAD"
    | "DOWNLOAD"
    | "BOTH"
    | (string & {});
  /** Required. Action to take when a threat is detected using WildFire Inline Cloud Analysis. The default Value is DENY. */
  action?:
    | "WILDFIRE_INLINE_CLOUD_ANALYSIS_ACTION_UNSPECIFIED"
    | "ALLOW"
    | "DENY"
    | "ALERT"
    | (string & {});
}

export const WildfireInlineCloudAnalysisRule: Schema.Codec<WildfireInlineCloudAnalysisRule> =
  /*@__PURE__*/ Schema.Struct({
    customFileTypes: Schema.optional(
      WildfireInlineCloudAnalysisRuleCustomFileTypes,
    ),
    fileSelectionMode: Schema.optional(Schema.String),
    direction: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
  }).annotate({ identifier: "WildfireInlineCloudAnalysisRule" });

export interface Expr {
  /** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
  title?: string;
  /** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
  location?: string;
  /** Textual representation of an expression in Common Expression Language syntax. */
  expression?: string;
  /** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
  description?: string;
}

export const Expr: Schema.Codec<Expr> =
  /*@__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    expression: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "Expr" });

export interface GoogleIamV1Binding {
  /** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. For an overview of the IAM roles and permissions, see the [IAM documentation](https://cloud.google.com/iam/docs/roles-overview). For a list of the available pre-defined roles, see [here](https://cloud.google.com/iam/docs/understanding-roles). */
  role?: string;
  /** The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  condition?: Expr;
  /** Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*`: All identities in a workload identity pool. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`. */
  members?: ReadonlyArray<string>;
}

export const GoogleIamV1Binding: Schema.Codec<GoogleIamV1Binding> =
  /*@__PURE__*/ Schema.Struct({
    role: Schema.optional(Schema.String),
    condition: Schema.optional(Expr),
    members: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleIamV1Binding" });

export interface GoogleIamV1Policy {
  /** Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`. */
  bindings?: ReadonlyArray<GoogleIamV1Binding>;
  /** Specifies cloud audit logging configuration for this policy. */
  auditConfigs?: ReadonlyArray<GoogleIamV1AuditConfig>;
  /** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
  etag?: string;
  /** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  version?: number;
}

export const GoogleIamV1Policy: Schema.Codec<GoogleIamV1Policy> =
  /*@__PURE__*/ Schema.Struct({
    bindings: Schema.optional(Schema.Array(GoogleIamV1Binding)),
    auditConfigs: Schema.optional(Schema.Array(GoogleIamV1AuditConfig)),
    etag: Schema.optional(Schema.String),
    version: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleIamV1Policy" });

export interface GoogleIamV1SetIamPolicyRequest {
  /** REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them. */
  policy?: GoogleIamV1Policy;
  /** OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"` */
  updateMask?: string;
}

export const GoogleIamV1SetIamPolicyRequest: Schema.Codec<GoogleIamV1SetIamPolicyRequest> =
  /*@__PURE__*/ Schema.Struct({
    policy: Schema.optional(GoogleIamV1Policy),
    updateMask: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleIamV1SetIamPolicyRequest" });

export interface Source {
  /** Optional. List of CIDR ranges to match based on source IP address. At least one IP block should match. Single IP (e.g., "1.2.3.4") and CIDR (e.g., "1.2.3.0/24") are supported. Authorization based on source IP alone should be avoided. The IP addresses of any load balancers or proxies should be considered untrusted. */
  ipBlocks?: ReadonlyArray<string>;
  /** Optional. List of peer identities to match for authorization. At least one principal should match. Each peer can be an exact match, or a prefix match (example, "namespace/*") or a suffix match (example, "* /service-account") or a presence match "*". Authorization based on the principal name without certificate validation (configured by ServerTlsPolicy resource) is considered insecure. */
  principals?: ReadonlyArray<string>;
}

export const Source: Schema.Codec<Source> =
  /*@__PURE__*/ Schema.Struct({
    ipBlocks: Schema.optional(Schema.Array(Schema.String)),
    principals: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Source" });

export interface Rule {
  /** Optional. List of attributes for the traffic destination. All of the destinations must match. A destination is a match if a request matches all the specified hosts, ports, methods and headers. If not set, the action specified in the 'action' field will be applied without any rule checks for the destination. */
  destinations?: ReadonlyArray<Destination>;
  /** Optional. List of attributes for the traffic source. All of the sources must match. A source is a match if both principals and ip_blocks match. If not set, the action specified in the 'action' field will be applied without any rule checks for the source. */
  sources?: ReadonlyArray<Source>;
}

export const Rule: Schema.Codec<Rule> =
  /*@__PURE__*/ Schema.Struct({
    destinations: Schema.optional(Schema.Array(Destination)),
    sources: Schema.optional(Schema.Array(Source)),
  }).annotate({ identifier: "Rule" });

export interface AuthorizationPolicy {
  /** Output only. The timestamp when the resource was updated. */
  updateTime?: string;
  /** Optional. List of rules to match. Note that at least one of the rules must match in order for the action specified in the 'action' field to be taken. A rule is a match if there is a matching source and destination. If left blank, the action specified in the `action` field will be applied on every request. */
  rules?: ReadonlyArray<Rule>;
  /** Required. The action to take when a rule match is found. Possible values are "ALLOW" or "DENY". */
  action?: "ACTION_UNSPECIFIED" | "ALLOW" | "DENY" | (string & {});
  /** Required. Name of the AuthorizationPolicy resource. It matches pattern `projects/{project}/locations/{location}/authorizationPolicies/`. */
  name?: string;
  /** Optional. Free-text description of the resource. */
  description?: string;
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Optional. Set of label tags associated with the AuthorizationPolicy resource. */
  labels?: Record<string, string>;
}

export const AuthorizationPolicy: Schema.Codec<AuthorizationPolicy> =
  /*@__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    rules: Schema.optional(Schema.Array(Rule)),
    action: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "AuthorizationPolicy" });

export interface ListAuthorizationPoliciesResponse {
  /** List of AuthorizationPolicies resources. */
  authorizationPolicies?: ReadonlyArray<AuthorizationPolicy>;
  /** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
  nextPageToken?: string;
}

export const ListAuthorizationPoliciesResponse: Schema.Codec<ListAuthorizationPoliciesResponse> =
  /*@__PURE__*/ Schema.Struct({
    authorizationPolicies: Schema.optional(Schema.Array(AuthorizationPolicy)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListAuthorizationPoliciesResponse" });

export interface WildfireSubmissionRuleCustomFileTypes {
  /** Required. File types to be submitted for WildFire analysis. */
  fileTypes?: ReadonlyArray<
    | "FILE_TYPE_UNSPECIFIED"
    | "APK"
    | "ARCHIVE"
    | "EMAIL_LINK"
    | "FLASH"
    | "JAR"
    | "LINUX"
    | "MS_OFFICE"
    | "PDF"
    | "PE"
    | "SCRIPT"
    | (string & {})
  >;
}

export const WildfireSubmissionRuleCustomFileTypes: Schema.Codec<WildfireSubmissionRuleCustomFileTypes> =
  /*@__PURE__*/ Schema.Struct({
    fileTypes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "WildfireSubmissionRuleCustomFileTypes" });

export interface FirewallEndpointAssociation {
  /** Required. The URL of the network that is being associated. */
  network?: string;
  /** Output only. Whether reconciling is in progress, recommended per https://google.aip.dev/128. */
  reconciling?: boolean;
  /** Output only. Current state of the association. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "ACTIVE"
    | "DELETING"
    | "INACTIVE"
    | "ORPHAN"
    | (string & {});
  /** Optional. Whether the association is disabled. True indicates that traffic won't be intercepted */
  disabled?: boolean;
  /** Output only. Update time stamp */
  updateTime?: string;
  /** Required. The URL of the FirewallEndpoint that is being associated. */
  firewallEndpoint?: string;
  /** Immutable. Identifier. name of resource */
  name?: string;
  /** Output only. Create time stamp */
  createTime?: string;
  /** Optional. Labels as key value pairs */
  labels?: Record<string, string>;
  /** Optional. The URL of the TlsInspectionPolicy that is being associated. */
  tlsInspectionPolicy?: string;
}

export const FirewallEndpointAssociation: Schema.Codec<FirewallEndpointAssociation> =
  /*@__PURE__*/ Schema.Struct({
    network: Schema.optional(Schema.String),
    reconciling: Schema.optional(Schema.Boolean),
    state: Schema.optional(Schema.String),
    disabled: Schema.optional(Schema.Boolean),
    updateTime: Schema.optional(Schema.String),
    firewallEndpoint: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    tlsInspectionPolicy: Schema.optional(Schema.String),
  }).annotate({ identifier: "FirewallEndpointAssociation" });

export interface ListFirewallEndpointAssociationsResponse {
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The list of Association */
  firewallEndpointAssociations?: ReadonlyArray<FirewallEndpointAssociation>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListFirewallEndpointAssociationsResponse: Schema.Codec<ListFirewallEndpointAssociationsResponse> =
  /*@__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    firewallEndpointAssociations: Schema.optional(
      Schema.Array(FirewallEndpointAssociation),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListFirewallEndpointAssociationsResponse" });

export interface ListAuthzPoliciesResponse {
  /** The list of `AuthzPolicy` resources. */
  authzPolicies?: ReadonlyArray<AuthzPolicy>;
  /** A token identifying a page of results that the server returns. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListAuthzPoliciesResponse: Schema.Codec<ListAuthzPoliciesResponse> =
  /*@__PURE__*/ Schema.Struct({
    authzPolicies: Schema.optional(Schema.Array(AuthzPolicy)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListAuthzPoliciesResponse" });

export interface ListMirroringDeploymentsResponse {
  /** Unordered list. Locations that could not be reached. See https://google.aip.dev/217 for more details. */
  unreachable?: ReadonlyArray<string>;
  /** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. See https://google.aip.dev/158 for more details. */
  nextPageToken?: string;
  /** The deployments from the specified parent. */
  mirroringDeployments?: ReadonlyArray<MirroringDeployment>;
}

export const ListMirroringDeploymentsResponse: Schema.Codec<ListMirroringDeploymentsResponse> =
  /*@__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
    mirroringDeployments: Schema.optional(Schema.Array(MirroringDeployment)),
  }).annotate({ identifier: "ListMirroringDeploymentsResponse" });

export interface ListInterceptEndpointGroupAssociationsResponse {
  /** The associations from the specified parent. */
  interceptEndpointGroupAssociations?: ReadonlyArray<InterceptEndpointGroupAssociation>;
  /** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. See https://google.aip.dev/158 for more details. */
  nextPageToken?: string;
}

export const ListInterceptEndpointGroupAssociationsResponse: Schema.Codec<ListInterceptEndpointGroupAssociationsResponse> =
  /*@__PURE__*/ Schema.Struct({
    interceptEndpointGroupAssociations: Schema.optional(
      Schema.Array(InterceptEndpointGroupAssociation),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListInterceptEndpointGroupAssociationsResponse" });

export interface FirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings {
  /** Optional. Timeout in milliseconds on a file being held while WildFire inline cloud analysis is performed. Value between 1 to 240000 is valid. Default value is 30000. */
  maxAnalysisDuration?: string;
  /** Optional. Whether to disable WildFire submission log generation for files that timeout during WildFire inline cloud analysis. */
  submissionTimeoutLoggingDisabled?: boolean;
  /** Optional. Action to take when WildFire inline cloud analysis times out. Default value is ALLOW. */
  timeoutAction?:
    | "WILDFIRE_INLINE_CLOUD_ANALYSIS_TIMEOUT_ACTION_UNSPECIFIED"
    | "ALLOW"
    | "DENY"
    | (string & {});
}

export const FirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings: Schema.Codec<FirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings> =
  /*@__PURE__*/ Schema.Struct({
    maxAnalysisDuration: Schema.optional(Schema.String),
    submissionTimeoutLoggingDisabled: Schema.optional(Schema.Boolean),
    timeoutAction: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "FirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings",
  });

export interface FirewallEndpointWildfireSettings {
  /** Optional. Action to take on WildFire real time signature lookup timeout. Default value is ALLOW. */
  wildfireRealtimeLookupTimeoutAction?:
    | "WILDFIRE_REALTIME_SIGNATURE_LOOKUP_TIMEOUT_ACTION_UNSPECIFIED"
    | "ALLOW"
    | "DENY"
    | (string & {});
  /** Optional. The region where WildFire analysis will be performed. PAN supports regions: https://docs.paloaltonetworks.com/advanced-wildfire/administration/advanced-wildfire-overview/advanced-wildfire-deployments/advanced-wildfire-global-cloud */
  wildfireRegion?:
    | "WILDFIRE_REGION_UNSPECIFIED"
    | "CANADA"
    | "UNITED_STATES"
    | "JAPAN"
    | "SINGAPORE"
    | "UNITED_KINGDOM"
    | "AUSTRALIA"
    | "GERMANY"
    | "INDIA"
    | "SWITZERLAND"
    | "POLAND"
    | "INDONESIA"
    | "TAIWAN"
    | "FRANCE"
    | "QATAR"
    | "SOUTH_KOREA"
    | "ISRAEL"
    | "SAUDI_ARABIA"
    | "SPAIN"
    | (string & {});
  /** Optional. Settings for WildFire inline cloud analysis. */
  wildfireInlineCloudAnalysisSettings?: FirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings;
  /** Optional. Indicates whether WildFire analysis is enabled. Default value is false. */
  enabled?: boolean;
  /** Optional. Duration in milliseconds on a file being held while the WildFire real time signature cloud performs a signature lookup. Value between 1 to 5000 is valid. Default value is 1000. */
  wildfireRealtimeLookupDuration?: string;
}

export const FirewallEndpointWildfireSettings: Schema.Codec<FirewallEndpointWildfireSettings> =
  /*@__PURE__*/ Schema.Struct({
    wildfireRealtimeLookupTimeoutAction: Schema.optional(Schema.String),
    wildfireRegion: Schema.optional(Schema.String),
    wildfireInlineCloudAnalysisSettings: Schema.optional(
      FirewallEndpointWildfireSettingsWildfireInlineCloudAnalysisSettings,
    ),
    enabled: Schema.optional(Schema.Boolean),
    wildfireRealtimeLookupDuration: Schema.optional(Schema.String),
  }).annotate({ identifier: "FirewallEndpointWildfireSettings" });

export interface FirewallEndpointAssociationReference {
  /** Output only. The resource name of the FirewallEndpointAssociation. Format: projects/{project}/locations/{location}/firewallEndpointAssociations/{id} */
  name?: string;
  /** Output only. The VPC network associated. Format: projects/{project}/global/networks/{name}. */
  network?: string;
}

export const FirewallEndpointAssociationReference: Schema.Codec<FirewallEndpointAssociationReference> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    network: Schema.optional(Schema.String),
  }).annotate({ identifier: "FirewallEndpointAssociationReference" });

export interface FirewallEndpointEndpointSettings {
  /** Optional. The content cloud region of the endpoint. */
  contentCloudRegion?:
    | "CONTENT_CLOUD_REGION_UNSPECIFIED"
    | "US_CENTRAL"
    | "APAC"
    | "INDIA"
    | "UK"
    | "FRANCE"
    | "JAPAN"
    | "AUSTRALIA"
    | "CANADA"
    | "SWITZERLAND"
    | "NETHERLANDS"
    | "INDONESIA"
    | "QATAR"
    | "TAIWAN"
    | "POLAND"
    | "SOUTH_KOREA"
    | "SAUDI_ARABIA"
    | "ITALY"
    | (string & {});
  /** Optional. Immutable. Indicates whether Jumbo Frames are enabled. Default value is false. */
  jumboFramesEnabled?: boolean;
  /** Optional. Whether to block HTTP partial responses for the endpoint. When this is true, resumption of blocked malicious HTTP file downloads will be blocked by the firewall. False provides maximum availability, true provides maximum security. */
  httpPartialResponseBlocked?: boolean;
}

export const FirewallEndpointEndpointSettings: Schema.Codec<FirewallEndpointEndpointSettings> =
  /*@__PURE__*/ Schema.Struct({
    contentCloudRegion: Schema.optional(Schema.String),
    jumboFramesEnabled: Schema.optional(Schema.Boolean),
    httpPartialResponseBlocked: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "FirewallEndpointEndpointSettings" });

export interface FirewallEndpoint {
  /** Optional. Description of the firewall endpoint. Max length 2048 characters. */
  description?: string;
  /** Output only. Create time stamp. */
  createTime?: string;
  /** Output only. Current state of the endpoint. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "ACTIVE"
    | "DELETING"
    | "INACTIVE"
    | (string & {});
  /** Optional. Project to charge for the deployed firewall endpoint. This field must be specified when creating the endpoint in the organization scope, and should be omitted otherwise. */
  billingProjectId?: string;
  /** Optional. Settings for WildFire analysis. */
  wildfireSettings?: FirewallEndpointWildfireSettings;
  /** Output only. [Output Only] Reserved for future use. */
  satisfiesPzs?: boolean;
  /** Immutable. Identifier. Name of resource. */
  name?: string;
  /** Optional. Labels as key value pairs */
  labels?: Record<string, string>;
  /** Output only. Deprecated: List of networks that are associated with this endpoint in the local zone. This is a projection of the FirewallEndpointAssociations pointing at this endpoint. A network will only appear in this list after traffic routing is fully configured. Format: projects/{project}/global/networks/{name}. */
  associatedNetworks?: ReadonlyArray<string>;
  /** Output only. List of FirewallEndpointAssociations that are associated to this endpoint. An association will only appear in this list after traffic routing is fully configured. */
  associations?: ReadonlyArray<FirewallEndpointAssociationReference>;
  /** Output only. [Output Only] Reserved for future use. */
  satisfiesPzi?: boolean;
  /** Output only. Whether reconciling is in progress, recommended per https://google.aip.dev/128. */
  reconciling?: boolean;
  /** Optional. Settings for the endpoint. */
  endpointSettings?: FirewallEndpointEndpointSettings;
  /** Output only. Update time stamp */
  updateTime?: string;
}

export const FirewallEndpoint: Schema.Codec<FirewallEndpoint> =
  /*@__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    billingProjectId: Schema.optional(Schema.String),
    wildfireSettings: Schema.optional(FirewallEndpointWildfireSettings),
    satisfiesPzs: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    associatedNetworks: Schema.optional(Schema.Array(Schema.String)),
    associations: Schema.optional(
      Schema.Array(FirewallEndpointAssociationReference),
    ),
    satisfiesPzi: Schema.optional(Schema.Boolean),
    reconciling: Schema.optional(Schema.Boolean),
    endpointSettings: Schema.optional(FirewallEndpointEndpointSettings),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "FirewallEndpoint" });

export interface WildfireInlineMlOverride {
  /** Required. Protocol to match for WildFire Inline ML override. */
  protocol?:
    | "WILDFIRE_PROTOCOL_UNSPECIFIED"
    | "WILDFIRE_SMTP"
    | "WILDFIRE_SMB"
    | "WILDFIRE_POP3"
    | "WILDFIRE_IMAP"
    | "WILDFIRE_HTTP2"
    | "WILDFIRE_HTTP"
    | "WILDFIRE_FTP"
    | (string & {});
  /** Required. The action to take for WildFire Inline ML override. */
  action?:
    | "WILDFIRE_THREAT_ACTION_UNSPECIFIED"
    | "WILDFIRE_DEFAULT_ACTION"
    | "WILDFIRE_ALLOW"
    | "WILDFIRE_ALERT"
    | "WILDFIRE_DENY"
    | (string & {});
}

export const WildfireInlineMlOverride: Schema.Codec<WildfireInlineMlOverride> =
  /*@__PURE__*/ Schema.Struct({
    protocol: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
  }).annotate({ identifier: "WildfireInlineMlOverride" });

export interface CustomInterceptProfile {
  /** Required. The target InterceptEndpointGroup. When a firewall rule with this security profile attached matches a packet, the packet will be intercepted to the location-local target in this group. */
  interceptEndpointGroup?: string;
}

export const CustomInterceptProfile: Schema.Codec<CustomInterceptProfile> =
  /*@__PURE__*/ Schema.Struct({
    interceptEndpointGroup: Schema.optional(Schema.String),
  }).annotate({ identifier: "CustomInterceptProfile" });

export interface ListUrlListsResponse {
  /** List of UrlList resources. */
  urlLists?: ReadonlyArray<UrlList>;
  /** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListUrlListsResponse: Schema.Codec<ListUrlListsResponse> =
  /*@__PURE__*/ Schema.Struct({
    urlLists: Schema.optional(Schema.Array(UrlList)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListUrlListsResponse" });

export interface AddAddressGroupItemsRequest {
  /** Required. List of items to add. */
  items?: ReadonlyArray<string>;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const AddAddressGroupItemsRequest: Schema.Codec<AddAddressGroupItemsRequest> =
  /*@__PURE__*/ Schema.Struct({
    items: Schema.optional(Schema.Array(Schema.String)),
    requestId: Schema.optional(Schema.String),
  }).annotate({ identifier: "AddAddressGroupItemsRequest" });

export interface MirroringDeploymentGroupDeployment {
  /** Output only. Most recent known state of the deployment. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "CREATING"
    | "DELETING"
    | "OUT_OF_SYNC"
    | "DELETE_FAILED"
    | (string & {});
  /** Output only. The name of the Mirroring Deployment, in the format: `projects/{project}/locations/{location}/mirroringDeployments/{mirroring_deployment}`. */
  name?: string;
}

export const MirroringDeploymentGroupDeployment: Schema.Codec<MirroringDeploymentGroupDeployment> =
  /*@__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "MirroringDeploymentGroupDeployment" });

export interface MirroringDeploymentGroup {
  /** Immutable. Identifier. The resource name of this deployment group, for example: `projects/123456789/locations/global/mirroringDeploymentGroups/my-dg`. See https://google.aip.dev/122 for more details. */
  name?: string;
  /** Output only. The timestamp when the resource was created. See https://google.aip.dev/148#timestamps. */
  createTime?: string;
  /** Optional. Labels are key/value pairs that help to organize and filter resources. */
  labels?: Record<string, string>;
  /** Optional. User-provided description of the deployment group. Used as additional context for the deployment group. */
  description?: string;
  /** Output only. The list of Mirroring Deployments that belong to this group. */
  nestedDeployments?: ReadonlyArray<MirroringDeploymentGroupDeployment>;
  /** Required. Immutable. The network that will be used for all child deployments, for example: `projects/{project}/global/networks/{network}`. See https://google.aip.dev/124. */
  network?: string;
  /** Output only. The current state of the resource does not match the user's intended state, and the system is working to reconcile them. This is part of the normal operation (e.g. adding a new deployment to the group) See https://google.aip.dev/128. */
  reconciling?: boolean;
  /** Output only. The current state of the deployment group. See https://google.aip.dev/216. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "CREATING"
    | "DELETING"
    | "CLOSED"
    | (string & {});
  /** Output only. The list of locations where the deployment group is present. */
  locations?: ReadonlyArray<MirroringLocation>;
  /** Output only. The timestamp when the resource was most recently updated. See https://google.aip.dev/148#timestamps. */
  updateTime?: string;
  /** Output only. The list of endpoint groups that are connected to this resource. */
  connectedEndpointGroups?: ReadonlyArray<MirroringDeploymentGroupConnectedEndpointGroup>;
}

export const MirroringDeploymentGroup: Schema.Codec<MirroringDeploymentGroup> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    description: Schema.optional(Schema.String),
    nestedDeployments: Schema.optional(
      Schema.Array(MirroringDeploymentGroupDeployment),
    ),
    network: Schema.optional(Schema.String),
    reconciling: Schema.optional(Schema.Boolean),
    state: Schema.optional(Schema.String),
    locations: Schema.optional(Schema.Array(MirroringLocation)),
    updateTime: Schema.optional(Schema.String),
    connectedEndpointGroups: Schema.optional(
      Schema.Array(MirroringDeploymentGroupConnectedEndpointGroup),
    ),
  }).annotate({ identifier: "MirroringDeploymentGroup" });

export interface ListMirroringDeploymentGroupsResponse {
  /** The deployment groups from the specified parent. */
  mirroringDeploymentGroups?: ReadonlyArray<MirroringDeploymentGroup>;
  /** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. See https://google.aip.dev/158 for more details. */
  nextPageToken?: string;
}

export const ListMirroringDeploymentGroupsResponse: Schema.Codec<ListMirroringDeploymentGroupsResponse> =
  /*@__PURE__*/ Schema.Struct({
    mirroringDeploymentGroups: Schema.optional(
      Schema.Array(MirroringDeploymentGroup),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListMirroringDeploymentGroupsResponse" });

export interface TlsInspectionPolicy {
  /** Optional. Minimum TLS version that the firewall should use when negotiating connections with both clients and servers. If this is not set, then the default value is to allow the broadest set of clients and servers (TLS 1.0 or higher). Setting this to more restrictive values may improve security, but may also prevent the firewall from connecting to some clients or servers. Note that Secure Web Proxy does not yet honor this field. */
  minTlsVersion?:
    | "TLS_VERSION_UNSPECIFIED"
    | "TLS_1_0"
    | "TLS_1_1"
    | "TLS_1_2"
    | "TLS_1_3"
    | (string & {});
  /** Optional. The selected Profile. If this is not set, then the default value is to allow the broadest set of clients and servers ("PROFILE_COMPATIBLE"). Setting this to more restrictive values may improve security, but may also prevent the TLS inspection proxy from connecting to some clients or servers. Note that Secure Web Proxy does not yet honor this field. */
  tlsFeatureProfile?:
    | "PROFILE_UNSPECIFIED"
    | "PROFILE_COMPATIBLE"
    | "PROFILE_MODERN"
    | "PROFILE_RESTRICTED"
    | "PROFILE_CUSTOM"
    | (string & {});
  /** Required. Name of the resource. Name is of the form projects/{project}/locations/{location}/tlsInspectionPolicies/{tls_inspection_policy} tls_inspection_policy should match the pattern:(^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$). */
  name?: string;
  /** Optional. Free-text description of the resource. */
  description?: string;
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Optional. If FALSE (the default), use our default set of public CAs in addition to any CAs specified in trust_config. These public CAs are currently based on the Mozilla Root Program and are subject to change over time. If TRUE, do not accept our default set of public CAs. Only CAs specified in trust_config will be accepted. This defaults to FALSE (use public CAs in addition to trust_config) for backwards compatibility, but trusting public root CAs is *not recommended* unless the traffic in question is outbound to public web servers. When possible, prefer setting this to "false" and explicitly specifying trusted CAs and certificates in a TrustConfig. Note that Secure Web Proxy does not yet honor this field. */
  excludePublicCaSet?: boolean;
  /** Output only. The timestamp when the resource was updated. */
  updateTime?: string;
  /** Optional. A TrustConfig resource used when making a connection to the TLS server. This is a relative resource path following the form "projects/{project}/locations/{location}/trustConfigs/{trust_config}". This is necessary to intercept TLS connections to servers with certificates signed by a private CA or self-signed certificates. Note that Secure Web Proxy does not yet honor this field. */
  trustConfig?: string;
  /** Optional. List of custom TLS cipher suites selected. This field is valid only if the selected tls_feature_profile is CUSTOM. The compute.SslPoliciesService.ListAvailableFeatures method returns the set of features that can be specified in this list. Note that Secure Web Proxy does not yet honor this field. */
  customTlsFeatures?: ReadonlyArray<string>;
  /** Required. A CA pool resource used to issue interception certificates. The CA pool string has a relative resource path following the form "projects/{project}/locations/{location}/caPools/{ca_pool}". */
  caPool?: string;
}

export const TlsInspectionPolicy: Schema.Codec<TlsInspectionPolicy> =
  /*@__PURE__*/ Schema.Struct({
    minTlsVersion: Schema.optional(Schema.String),
    tlsFeatureProfile: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    excludePublicCaSet: Schema.optional(Schema.Boolean),
    updateTime: Schema.optional(Schema.String),
    trustConfig: Schema.optional(Schema.String),
    customTlsFeatures: Schema.optional(Schema.Array(Schema.String)),
    caPool: Schema.optional(Schema.String),
  }).annotate({ identifier: "TlsInspectionPolicy" });

export interface ListTlsInspectionPoliciesResponse {
  /** List of TlsInspectionPolicies resources. */
  tlsInspectionPolicies?: ReadonlyArray<TlsInspectionPolicy>;
  /** If there might be more results than those appearing in this response, then 'next_page_token' is included. To get the next set of results, call this method again using the value of 'next_page_token' as 'page_token'. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListTlsInspectionPoliciesResponse: Schema.Codec<ListTlsInspectionPoliciesResponse> =
  /*@__PURE__*/ Schema.Struct({
    tlsInspectionPolicies: Schema.optional(Schema.Array(TlsInspectionPolicy)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListTlsInspectionPoliciesResponse" });

export interface ServerTlsPolicy {
  /** Required. Name of the ServerTlsPolicy resource. It matches the pattern `projects/* /locations/{location}/serverTlsPolicies/{server_tls_policy}` */
  name?: string;
  /** Free-text description of the resource. */
  description?: string;
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Set of label tags associated with the resource. */
  labels?: Record<string, string>;
  /** Optional if policy is to be used with Traffic Director. For Application Load Balancers must be empty. Defines a mechanism to provision server identity (public and private keys). Cannot be combined with `allow_open` as a permissive mode that allows both plain text and TLS is not supported. */
  serverCertificate?: GoogleCloudNetworksecurityV1beta1CertificateProvider;
  /** This field is required if the policy is used with Application Load Balancers. This field can be empty for Traffic Director. Defines a mechanism to provision peer validation certificates for peer to peer authentication (Mutual TLS - mTLS). If not specified, client certificate will not be requested. The connection is treated as TLS and not mTLS. If `allow_open` and `mtls_policy` are set, server allows both plain text and mTLS connections. */
  mtlsPolicy?: MTLSPolicy;
  /** Output only. The timestamp when the resource was updated. */
  updateTime?: string;
  /** This field applies only for Traffic Director policies. It is must be set to false for Application Load Balancer policies. Determines if server allows plaintext connections. If set to true, server allows plain text connections. By default, it is set to false. This setting is not exclusive of other encryption modes. For example, if `allow_open` and `mtls_policy` are set, server allows both plain text and mTLS connections. See documentation of other encryption modes to confirm compatibility. Consider using it if you wish to upgrade in place your deployment to TLS while having mixed TLS and non-TLS traffic reaching port :80. */
  allowOpen?: boolean;
}

export const ServerTlsPolicy: Schema.Codec<ServerTlsPolicy> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    serverCertificate: Schema.optional(
      GoogleCloudNetworksecurityV1beta1CertificateProvider,
    ),
    mtlsPolicy: Schema.optional(MTLSPolicy),
    updateTime: Schema.optional(Schema.String),
    allowOpen: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ServerTlsPolicy" });

export interface ListServerTlsPoliciesResponse {
  /** Unreachable resources. Populated when the request opts into `return_partial_success` and reading across collections e.g. when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
  /** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
  nextPageToken?: string;
  /** List of ServerTlsPolicy resources. */
  serverTlsPolicies?: ReadonlyArray<ServerTlsPolicy>;
}

export const ListServerTlsPoliciesResponse: Schema.Codec<ListServerTlsPoliciesResponse> =
  /*@__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
    serverTlsPolicies: Schema.optional(Schema.Array(ServerTlsPolicy)),
  }).annotate({ identifier: "ListServerTlsPoliciesResponse" });

export interface WildfireInlineMlFileException {
  /** Optional. Name of the file to exclude from WildFire Inline ML analysis. */
  filename?: string;
  /** Required. Machine learning partial hash of the file to exclude from WildFire Inline ML analysis. */
  partialHash?: string;
}

export const WildfireInlineMlFileException: Schema.Codec<WildfireInlineMlFileException> =
  /*@__PURE__*/ Schema.Struct({
    filename: Schema.optional(Schema.String),
    partialHash: Schema.optional(Schema.String),
  }).annotate({ identifier: "WildfireInlineMlFileException" });

export interface MirroringEndpointGroupConnectedDeploymentGroup {
  /** Output only. The connected deployment group's resource name, for example: `projects/123456789/locations/global/mirroringDeploymentGroups/my-dg`. See https://google.aip.dev/124. */
  name?: string;
  /** Output only. The list of locations where the deployment group is present. */
  locations?: ReadonlyArray<MirroringLocation>;
}

export const MirroringEndpointGroupConnectedDeploymentGroup: Schema.Codec<MirroringEndpointGroupConnectedDeploymentGroup> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    locations: Schema.optional(Schema.Array(MirroringLocation)),
  }).annotate({ identifier: "MirroringEndpointGroupConnectedDeploymentGroup" });

export interface MirroringEndpointGroupAssociationDetails {
  /** Output only. Most recent known state of the association. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "CREATING"
    | "DELETING"
    | "CLOSED"
    | "OUT_OF_SYNC"
    | "DELETE_FAILED"
    | (string & {});
  /** Output only. The connected association's resource name, for example: `projects/123456789/locations/global/mirroringEndpointGroupAssociations/my-ega`. See https://google.aip.dev/124. */
  name?: string;
  /** Output only. The associated network, for example: projects/123456789/global/networks/my-network. See https://google.aip.dev/124. */
  network?: string;
}

export const MirroringEndpointGroupAssociationDetails: Schema.Codec<MirroringEndpointGroupAssociationDetails> =
  /*@__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    network: Schema.optional(Schema.String),
  }).annotate({ identifier: "MirroringEndpointGroupAssociationDetails" });

export interface MirroringEndpointGroup {
  /** Output only. The timestamp when the resource was most recently updated. See https://google.aip.dev/148#timestamps. */
  updateTime?: string;
  /** Immutable. The deployment group that this DIRECT endpoint group is connected to, for example: `projects/123456789/locations/global/mirroringDeploymentGroups/my-dg`. See https://google.aip.dev/124. */
  mirroringDeploymentGroup?: string;
  /** Output only. The current state of the resource does not match the user's intended state, and the system is working to reconcile them. This is part of the normal operation (e.g. adding a new association to the group). See https://google.aip.dev/128. */
  reconciling?: boolean;
  /** Output only. The current state of the endpoint group. See https://google.aip.dev/216. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "CLOSED"
    | "CREATING"
    | "DELETING"
    | "OUT_OF_SYNC"
    | "DELETE_FAILED"
    | (string & {});
  /** Output only. List of details about the connected deployment groups to this endpoint group. */
  connectedDeploymentGroups?: ReadonlyArray<MirroringEndpointGroupConnectedDeploymentGroup>;
  /** Immutable. The type of the endpoint group. If left unspecified, defaults to DIRECT. */
  type?: "TYPE_UNSPECIFIED" | "DIRECT" | (string & {});
  /** Output only. List of associations to this endpoint group. */
  associations?: ReadonlyArray<MirroringEndpointGroupAssociationDetails>;
  /** Immutable. Identifier. The resource name of this endpoint group, for example: `projects/123456789/locations/global/mirroringEndpointGroups/my-eg`. See https://google.aip.dev/122 for more details. */
  name?: string;
  /** Output only. The timestamp when the resource was created. See https://google.aip.dev/148#timestamps. */
  createTime?: string;
  /** Optional. Labels are key/value pairs that help to organize and filter resources. */
  labels?: Record<string, string>;
  /** Optional. User-provided description of the endpoint group. Used as additional context for the endpoint group. */
  description?: string;
}

export const MirroringEndpointGroup: Schema.Codec<MirroringEndpointGroup> =
  /*@__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    mirroringDeploymentGroup: Schema.optional(Schema.String),
    reconciling: Schema.optional(Schema.Boolean),
    state: Schema.optional(Schema.String),
    connectedDeploymentGroups: Schema.optional(
      Schema.Array(MirroringEndpointGroupConnectedDeploymentGroup),
    ),
    type: Schema.optional(Schema.String),
    associations: Schema.optional(
      Schema.Array(MirroringEndpointGroupAssociationDetails),
    ),
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "MirroringEndpointGroup" });

export interface ListMirroringEndpointGroupsResponse {
  /** The endpoint groups from the specified parent. */
  mirroringEndpointGroups?: ReadonlyArray<MirroringEndpointGroup>;
  /** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. See https://google.aip.dev/158 for more details. */
  nextPageToken?: string;
}

export const ListMirroringEndpointGroupsResponse: Schema.Codec<ListMirroringEndpointGroupsResponse> =
  /*@__PURE__*/ Schema.Struct({
    mirroringEndpointGroups: Schema.optional(
      Schema.Array(MirroringEndpointGroup),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListMirroringEndpointGroupsResponse" });

export interface ListAddressGroupReferencesResponseAddressGroupReference {
  /** FirewallPolicy that is using the Address Group. */
  firewallPolicy?: string;
  /** Cloud Armor SecurityPolicy that is using the Address Group. */
  securityPolicy?: string;
  /** Rule priority of the FirewallPolicy that is using the Address Group. */
  rulePriority?: number;
}

export const ListAddressGroupReferencesResponseAddressGroupReference: Schema.Codec<ListAddressGroupReferencesResponseAddressGroupReference> =
  /*@__PURE__*/ Schema.Struct({
    firewallPolicy: Schema.optional(Schema.String),
    securityPolicy: Schema.optional(Schema.String),
    rulePriority: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "ListAddressGroupReferencesResponseAddressGroupReference",
  });

export interface ListLocationsResponse {
  /** A list of locations that matches the specified filter in the request. */
  locations?: ReadonlyArray<Location>;
  /** The standard List next-page token. */
  nextPageToken?: string;
}

export const ListLocationsResponse: Schema.Codec<ListLocationsResponse> =
  /*@__PURE__*/ Schema.Struct({
    locations: Schema.optional(Schema.Array(Location)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListLocationsResponse" });

export interface WildfireInlineMlSettingsInlineMlConfig {
  /** Required. File type to configure Inline ML for. */
  fileType?:
    | "INLINE_ML_CONFIG_UNSPECIFIED"
    | "WINDOWS_EXECUTABLE"
    | "POWERSHELL_SCRIPT1"
    | "POWERSHELL_SCRIPT2"
    | "ELF"
    | "MS_OFFICE"
    | "SHELL"
    | "OOXML"
    | "MACHO"
    | (string & {});
  /** Required. Action to take when a threat is detected using Inline ML. */
  action?:
    | "INLINE_ML_ACTION_UNSPECIFIED"
    | "DISABLE"
    | "ALERT"
    | "ENABLE"
    | (string & {});
}

export const WildfireInlineMlSettingsInlineMlConfig: Schema.Codec<WildfireInlineMlSettingsInlineMlConfig> =
  /*@__PURE__*/ Schema.Struct({
    fileType: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
  }).annotate({ identifier: "WildfireInlineMlSettingsInlineMlConfig" });

export interface GatewaySecurityPolicyRule {
  /** Output only. Time when the rule was updated. */
  updateTime?: string;
  /** Required. Whether the rule is enforced. */
  enabled?: boolean;
  /** Optional. CEL expression for matching on L7/application level criteria. */
  applicationMatcher?: string;
  /** Required. CEL expression for matching on session criteria. */
  sessionMatcher?: string;
  /** Required. Priority of the rule. Lower number corresponds to higher precedence. */
  priority?: number;
  /** Required. Profile which tells what the primitive action should be. */
  basicProfile?: "BASIC_PROFILE_UNSPECIFIED" | "ALLOW" | "DENY" | (string & {});
  /** Required. Immutable. Name of the resource. ame is the full resource name so projects/{project}/locations/{location}/gatewaySecurityPolicies/{gateway_security_policy}/rules/{rule} rule should match the pattern: (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$). */
  name?: string;
  /** Output only. Time when the rule was created. */
  createTime?: string;
  /** Optional. Free-text description of the resource. */
  description?: string;
  /** Optional. Flag to enable TLS inspection of traffic matching on , can only be true if the parent GatewaySecurityPolicy references a TLSInspectionConfig. */
  tlsInspectionEnabled?: boolean;
}

export const GatewaySecurityPolicyRule: Schema.Codec<GatewaySecurityPolicyRule> =
  /*@__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
    applicationMatcher: Schema.optional(Schema.String),
    sessionMatcher: Schema.optional(Schema.String),
    priority: Schema.optional(Schema.Number),
    basicProfile: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    tlsInspectionEnabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GatewaySecurityPolicyRule" });

export interface WildfireSubmissionRule {
  /** Required. Direction for the files to be analyzed by WildFire. */
  direction?:
    | "DIRECTION_UNSPECIFIED"
    | "UPLOAD"
    | "DOWNLOAD"
    | "BOTH"
    | (string & {});
  /** Submit a custom list of file types for WildFire analysis. */
  customFileTypes?: WildfireSubmissionRuleCustomFileTypes;
  /** Required. File selection mode for WildFire analysis. */
  fileSelectionMode?:
    | "FILE_SELECTION_MODE_UNSPECIFIED"
    | "ALL_FILE_TYPES"
    | "CUSTOM_FILE_TYPES"
    | (string & {});
}

export const WildfireSubmissionRule: Schema.Codec<WildfireSubmissionRule> =
  /*@__PURE__*/ Schema.Struct({
    direction: Schema.optional(Schema.String),
    customFileTypes: Schema.optional(WildfireSubmissionRuleCustomFileTypes),
    fileSelectionMode: Schema.optional(Schema.String),
  }).annotate({ identifier: "WildfireSubmissionRule" });

export interface WildfireThreatOverride {
  /** Required. Threat ID to match. */
  threatId?: string;
  /** Required. Threat action override. */
  action?:
    | "WILDFIRE_THREAT_ACTION_UNSPECIFIED"
    | "WILDFIRE_DEFAULT_ACTION"
    | "WILDFIRE_ALLOW"
    | "WILDFIRE_ALERT"
    | "WILDFIRE_DENY"
    | (string & {});
}

export const WildfireThreatOverride: Schema.Codec<WildfireThreatOverride> =
  /*@__PURE__*/ Schema.Struct({
    threatId: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
  }).annotate({ identifier: "WildfireThreatOverride" });

export interface WildfireInlineMlSettings {
  /** Optional. List of Inline ML configs to enable in WildFire Inline ML analysis. */
  inlineMlConfigs?: ReadonlyArray<WildfireInlineMlSettingsInlineMlConfig>;
  /** Optional. List of files to exclude from WildFire Inline ML analysis. */
  fileExceptions?: ReadonlyArray<WildfireInlineMlFileException>;
}

export const WildfireInlineMlSettings: Schema.Codec<WildfireInlineMlSettings> =
  /*@__PURE__*/ Schema.Struct({
    inlineMlConfigs: Schema.optional(
      Schema.Array(WildfireInlineMlSettingsInlineMlConfig),
    ),
    fileExceptions: Schema.optional(
      Schema.Array(WildfireInlineMlFileException),
    ),
  }).annotate({ identifier: "WildfireInlineMlSettings" });

export interface WildfireAnalysisProfile {
  /** Optional. Configurations for WildFire file submissions. */
  wildfireSubmissionRules?: ReadonlyArray<WildfireSubmissionRule>;
  /** Optional. Whether to hold the transfer of a file while the WildFire real-time signature cloud performs a signature lookup. Default value is false. */
  wildfireRealtimeLookup?: boolean;
  /** Optional. Configuration for overriding WildFire threats action by threat_id match. */
  wildfireThreatOverrides?: ReadonlyArray<WildfireThreatOverride>;
  /** Optional. Settings for WildFire Inline ML analysis. */
  wildfireInlineMlSetting?: WildfireInlineMlSettings;
  /** Optional. Configuration for overriding inline ML WildFire actions per protocol. */
  wildfireInlineMlOverrides?: ReadonlyArray<WildfireInlineMlOverride>;
  /** Optional. Configuration for overriding WildFire actions per protocol. */
  wildfireOverrides?: ReadonlyArray<WildfireOverride>;
  /** Optional. Settings for WildFire Inline ML analysis. */
  wildfireInlineMlSettings?: ReadonlyArray<WildfireInlineMlSettings>;
  /** Optional. Configuration for WildFire inline cloud analysis. */
  wildfireInlineCloudAnalysisRules?: ReadonlyArray<WildfireInlineCloudAnalysisRule>;
}

export const WildfireAnalysisProfile: Schema.Codec<WildfireAnalysisProfile> =
  /*@__PURE__*/ Schema.Struct({
    wildfireSubmissionRules: Schema.optional(
      Schema.Array(WildfireSubmissionRule),
    ),
    wildfireRealtimeLookup: Schema.optional(Schema.Boolean),
    wildfireThreatOverrides: Schema.optional(
      Schema.Array(WildfireThreatOverride),
    ),
    wildfireInlineMlSetting: Schema.optional(WildfireInlineMlSettings),
    wildfireInlineMlOverrides: Schema.optional(
      Schema.Array(WildfireInlineMlOverride),
    ),
    wildfireOverrides: Schema.optional(Schema.Array(WildfireOverride)),
    wildfireInlineMlSettings: Schema.optional(
      Schema.Array(WildfireInlineMlSettings),
    ),
    wildfireInlineCloudAnalysisRules: Schema.optional(
      Schema.Array(WildfireInlineCloudAnalysisRule),
    ),
  }).annotate({ identifier: "WildfireAnalysisProfile" });

export interface AntivirusOverride {
  /** Required. Protocol to match. */
  protocol?:
    | "PROTOCOL_UNSPECIFIED"
    | "SMTP"
    | "SMB"
    | "POP3"
    | "IMAP"
    | "HTTP2"
    | "HTTP"
    | "FTP"
    | (string & {});
  /** Required. Threat action override. For some threat types, only a subset of actions applies. */
  action?:
    | "THREAT_ACTION_UNSPECIFIED"
    | "DEFAULT_ACTION"
    | "ALLOW"
    | "ALERT"
    | "DENY"
    | (string & {});
}

export const AntivirusOverride: Schema.Codec<AntivirusOverride> =
  /*@__PURE__*/ Schema.Struct({
    protocol: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
  }).annotate({ identifier: "AntivirusOverride" });

export interface ThreatOverride {
  /** Required. Vendor-specific ID of a threat to override. */
  threatId?: string;
  /** Required. Threat action override. For some threat types, only a subset of actions applies. */
  action?:
    | "THREAT_ACTION_UNSPECIFIED"
    | "DEFAULT_ACTION"
    | "ALLOW"
    | "ALERT"
    | "DENY"
    | (string & {});
  /** Output only. Type of the threat (read only). */
  type?:
    | "THREAT_TYPE_UNSPECIFIED"
    | "UNKNOWN"
    | "VULNERABILITY"
    | "ANTIVIRUS"
    | "SPYWARE"
    | "DNS"
    | (string & {});
}

export const ThreatOverride: Schema.Codec<ThreatOverride> =
  /*@__PURE__*/ Schema.Struct({
    threatId: Schema.optional(Schema.String),
    action: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "ThreatOverride" });

export interface ThreatPreventionProfile {
  /** Optional. Configuration for overriding threats actions by severity match. */
  severityOverrides?: ReadonlyArray<SeverityOverride>;
  /** Optional. Configuration for overriding antivirus actions per protocol. */
  antivirusOverrides?: ReadonlyArray<AntivirusOverride>;
  /** Optional. Configuration for overriding threats actions by threat_id match. If a threat is matched both by configuration provided in severity_overrides and threat_overrides, the threat_overrides action is applied. */
  threatOverrides?: ReadonlyArray<ThreatOverride>;
}

export const ThreatPreventionProfile: Schema.Codec<ThreatPreventionProfile> =
  /*@__PURE__*/ Schema.Struct({
    severityOverrides: Schema.optional(Schema.Array(SeverityOverride)),
    antivirusOverrides: Schema.optional(Schema.Array(AntivirusOverride)),
    threatOverrides: Schema.optional(Schema.Array(ThreatOverride)),
  }).annotate({ identifier: "ThreatPreventionProfile" });

export interface SecurityProfile {
  /** The WildFire Analysis configurations for SecurityProfile. */
  wildfireAnalysisProfile?: WildfireAnalysisProfile;
  /** Immutable. Identifier. Name of the SecurityProfile resource. It matches pattern `projects|organizations/* /locations/{location}/securityProfiles/{security_profile}`. */
  name?: string;
  /** Optional. An optional description of the profile. Max length 512 characters. */
  description?: string;
  /** Output only. Resource creation timestamp. */
  createTime?: string;
  /** Optional. Labels as key value pairs. */
  labels?: Record<string, string>;
  /** Output only. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
  /** The threat prevention configuration for the SecurityProfile. */
  threatPreventionProfile?: ThreatPreventionProfile;
  /** The URL filtering configuration for the SecurityProfile. */
  urlFilteringProfile?: UrlFilteringProfile;
  /** Immutable. The single ProfileType that the SecurityProfile resource configures. */
  type?:
    | "PROFILE_TYPE_UNSPECIFIED"
    | "THREAT_PREVENTION"
    | "CUSTOM_MIRRORING"
    | "CUSTOM_INTERCEPT"
    | "URL_FILTERING"
    | "WILDFIRE_ANALYSIS"
    | (string & {});
  /** The custom TPPI configuration for the SecurityProfile. */
  customInterceptProfile?: CustomInterceptProfile;
  /** The custom Packet Mirroring v2 configuration for the SecurityProfile. */
  customMirroringProfile?: CustomMirroringProfile;
  /** Output only. Last resource update timestamp. */
  updateTime?: string;
}

export const SecurityProfile: Schema.Codec<SecurityProfile> =
  /*@__PURE__*/ Schema.Struct({
    wildfireAnalysisProfile: Schema.optional(WildfireAnalysisProfile),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    threatPreventionProfile: Schema.optional(ThreatPreventionProfile),
    urlFilteringProfile: Schema.optional(UrlFilteringProfile),
    type: Schema.optional(Schema.String),
    customInterceptProfile: Schema.optional(CustomInterceptProfile),
    customMirroringProfile: Schema.optional(CustomMirroringProfile),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "SecurityProfile" });

export interface ListFirewallEndpointsResponse {
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** The list of Endpoint */
  firewallEndpoints?: ReadonlyArray<FirewallEndpoint>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListFirewallEndpointsResponse: Schema.Codec<ListFirewallEndpointsResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    firewallEndpoints: Schema.optional(Schema.Array(FirewallEndpoint)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListFirewallEndpointsResponse" });

export interface ListWildfireVerdictChangeRequestsResponse {
  /** Unordered list. Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** The list of WildfireVerdictChangeRequests */
  wildfireVerdictChangeRequests?: ReadonlyArray<WildfireVerdictChangeRequest>;
}

export const ListWildfireVerdictChangeRequestsResponse: Schema.Codec<ListWildfireVerdictChangeRequestsResponse> =
  /*@__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
    wildfireVerdictChangeRequests: Schema.optional(
      Schema.Array(WildfireVerdictChangeRequest),
    ),
  }).annotate({ identifier: "ListWildfireVerdictChangeRequestsResponse" });

export interface InterceptDeployment {
  /** Required. Immutable. The regional forwarding rule that fronts the interceptors, for example: `projects/123456789/regions/us-central1/forwardingRules/my-rule`. See https://google.aip.dev/124. */
  forwardingRule?: string;
  /** Immutable. Identifier. The resource name of this deployment, for example: `projects/123456789/locations/us-central1-a/interceptDeployments/my-dep`. See https://google.aip.dev/122 for more details. */
  name?: string;
  /** Output only. The timestamp when the resource was created. See https://google.aip.dev/148#timestamps. */
  createTime?: string;
  /** Optional. Labels are key/value pairs that help to organize and filter resources. */
  labels?: Record<string, string>;
  /** Optional. User-provided description of the deployment. Used as additional context for the deployment. */
  description?: string;
  /** Output only. The timestamp when the resource was most recently updated. See https://google.aip.dev/148#timestamps. */
  updateTime?: string;
  /** Output only. The current state of the deployment. See https://google.aip.dev/216. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "CREATING"
    | "DELETING"
    | "OUT_OF_SYNC"
    | "DELETE_FAILED"
    | (string & {});
  /** Required. Immutable. The deployment group that this deployment is a part of, for example: `projects/123456789/locations/global/interceptDeploymentGroups/my-dg`. See https://google.aip.dev/124. */
  interceptDeploymentGroup?: string;
  /** Output only. The current state of the resource does not match the user's intended state, and the system is working to reconcile them. This part of the normal operation (e.g. linking a new association to the parent group). See https://google.aip.dev/128. */
  reconciling?: boolean;
}

export const InterceptDeployment: Schema.Codec<InterceptDeployment> =
  /*@__PURE__*/ Schema.Struct({
    forwardingRule: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    description: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    interceptDeploymentGroup: Schema.optional(Schema.String),
    reconciling: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "InterceptDeployment" });

export interface ListInterceptDeploymentsResponse {
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The deployments from the specified parent. */
  interceptDeployments?: ReadonlyArray<InterceptDeployment>;
  /** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. See https://google.aip.dev/158 for more details. */
  nextPageToken?: string;
}

export const ListInterceptDeploymentsResponse: Schema.Codec<ListInterceptDeploymentsResponse> =
  /*@__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    interceptDeployments: Schema.optional(Schema.Array(InterceptDeployment)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListInterceptDeploymentsResponse" });

export interface RemoveAddressGroupItemsRequest {
  /** Required. List of items to remove. */
  items?: ReadonlyArray<string>;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const RemoveAddressGroupItemsRequest: Schema.Codec<RemoveAddressGroupItemsRequest> =
  /*@__PURE__*/ Schema.Struct({
    items: Schema.optional(Schema.Array(Schema.String)),
    requestId: Schema.optional(Schema.String),
  }).annotate({ identifier: "RemoveAddressGroupItemsRequest" });

export interface ClientTlsPolicy {
  /** Optional. Server Name Indication string to present to the server during TLS handshake. E.g: "secure.example.com". */
  sni?: string;
  /** Optional. Defines a mechanism to provision client identity (public and private keys) for peer to peer authentication. The presence of this dictates mTLS. */
  clientCertificate?: GoogleCloudNetworksecurityV1beta1CertificateProvider;
  /** Required. Name of the ClientTlsPolicy resource. It matches the pattern `projects/{project}/locations/{location}/clientTlsPolicies/{client_tls_policy}` */
  name?: string;
  /** Optional. Free-text description of the resource. */
  description?: string;
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Optional. Set of label tags associated with the resource. */
  labels?: Record<string, string>;
  /** Optional. Defines the mechanism to obtain the Certificate Authority certificate to validate the server certificate. If empty, client does not validate the server certificate. */
  serverValidationCa?: ReadonlyArray<ValidationCA>;
  /** Output only. The timestamp when the resource was updated. */
  updateTime?: string;
}

export const ClientTlsPolicy: Schema.Codec<ClientTlsPolicy> =
  /*@__PURE__*/ Schema.Struct({
    sni: Schema.optional(Schema.String),
    clientCertificate: Schema.optional(
      GoogleCloudNetworksecurityV1beta1CertificateProvider,
    ),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    serverValidationCa: Schema.optional(Schema.Array(ValidationCA)),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "ClientTlsPolicy" });

export interface ListClientTlsPoliciesResponse {
  /** List of ClientTlsPolicy resources. */
  clientTlsPolicies?: ReadonlyArray<ClientTlsPolicy>;
  /** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
  nextPageToken?: string;
}

export const ListClientTlsPoliciesResponse: Schema.Codec<ListClientTlsPoliciesResponse> =
  /*@__PURE__*/ Schema.Struct({
    clientTlsPolicies: Schema.optional(Schema.Array(ClientTlsPolicy)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListClientTlsPoliciesResponse" });

export interface Empty {}

export const Empty: Schema.Codec<Empty> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface ListSecurityProfilesResponse {
  /** List of SecurityProfile resources. */
  securityProfiles?: ReadonlyArray<SecurityProfile>;
  /** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
  nextPageToken?: string;
}

export const ListSecurityProfilesResponse: Schema.Codec<ListSecurityProfilesResponse> =
  /*@__PURE__*/ Schema.Struct({
    securityProfiles: Schema.optional(Schema.Array(SecurityProfile)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListSecurityProfilesResponse" });

export interface CloneAddressGroupItemsRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Source address group to clone items from. */
  sourceAddressGroup?: string;
}

export const CloneAddressGroupItemsRequest: Schema.Codec<CloneAddressGroupItemsRequest> =
  /*@__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String),
    sourceAddressGroup: Schema.optional(Schema.String),
  }).annotate({ identifier: "CloneAddressGroupItemsRequest" });

export interface ListGatewaySecurityPolicyRulesResponse {
  /** If there might be more results than those appearing in this response, then 'next_page_token' is included. To get the next set of results, call this method again using the value of 'next_page_token' as 'page_token'. */
  nextPageToken?: string;
  /** List of GatewaySecurityPolicyRule resources. */
  gatewaySecurityPolicyRules?: ReadonlyArray<GatewaySecurityPolicyRule>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListGatewaySecurityPolicyRulesResponse: Schema.Codec<ListGatewaySecurityPolicyRulesResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    gatewaySecurityPolicyRules: Schema.optional(
      Schema.Array(GatewaySecurityPolicyRule),
    ),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListGatewaySecurityPolicyRulesResponse" });

export interface ListAddressGroupReferencesResponse {
  /** A list of references that matches the specified filter in the request. */
  addressGroupReferences?: ReadonlyArray<ListAddressGroupReferencesResponseAddressGroupReference>;
  /** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
  nextPageToken?: string;
}

export const ListAddressGroupReferencesResponse: Schema.Codec<ListAddressGroupReferencesResponse> =
  /*@__PURE__*/ Schema.Struct({
    addressGroupReferences: Schema.optional(
      Schema.Array(ListAddressGroupReferencesResponseAddressGroupReference),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListAddressGroupReferencesResponse" });

export interface ListMirroringEndpointGroupAssociationsResponse {
  /** The associations from the specified parent. */
  mirroringEndpointGroupAssociations?: ReadonlyArray<MirroringEndpointGroupAssociation>;
  /** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. See https://google.aip.dev/158 for more details. */
  nextPageToken?: string;
}

export const ListMirroringEndpointGroupAssociationsResponse: Schema.Codec<ListMirroringEndpointGroupAssociationsResponse> =
  /*@__PURE__*/ Schema.Struct({
    mirroringEndpointGroupAssociations: Schema.optional(
      Schema.Array(MirroringEndpointGroupAssociation),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListMirroringEndpointGroupAssociationsResponse" });

export interface ListGatewaySecurityPoliciesResponse {
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** If there might be more results than those appearing in this response, then 'next_page_token' is included. To get the next set of results, call this method again using the value of 'next_page_token' as 'page_token'. */
  nextPageToken?: string;
  /** List of GatewaySecurityPolicies resources. */
  gatewaySecurityPolicies?: ReadonlyArray<GatewaySecurityPolicy>;
}

export const ListGatewaySecurityPoliciesResponse: Schema.Codec<ListGatewaySecurityPoliciesResponse> =
  /*@__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
    gatewaySecurityPolicies: Schema.optional(
      Schema.Array(GatewaySecurityPolicy),
    ),
  }).annotate({ identifier: "ListGatewaySecurityPoliciesResponse" });

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
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}/locations" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsRequest>;

export type ListProjectsLocationsResponse = ListLocationsResponse;
export const ListProjectsLocationsResponse =
  /*@__PURE__*/ ListLocationsResponse;

export type ListProjectsLocationsError = DefaultErrors | NotFound | Forbidden;

/** Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the ListLocationsRequest.name field: * **Global locations**: If `name` is empty, the method lists the public locations available to all projects. * **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version. */
export const listProjectsLocations: API.PaginatedOperationMethod<
  ListProjectsLocationsRequest,
  ListProjectsLocationsResponse,
  ListProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
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
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsRequest>;

export type GetProjectsLocationsResponse = Location;
export const GetProjectsLocationsResponse = /*@__PURE__*/ Location;

export type GetProjectsLocationsError = DefaultErrors | NotFound | Forbidden;

/** Gets information about a location. */
export const getProjectsLocations: API.OperationMethod<
  GetProjectsLocationsRequest,
  GetProjectsLocationsResponse,
  GetProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRequest,
  output: GetProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CancelProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be cancelled. */
  name: string;
  /** Request body */
  body?: CancelOperationRequest;
}

export const CancelProjectsLocationsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CancelOperationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta1/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CancelProjectsLocationsOperationsRequest>;

export type CancelProjectsLocationsOperationsResponse = Empty;
export const CancelProjectsLocationsOperationsResponse = /*@__PURE__*/ Empty;

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
> = /*@__PURE__*/ API.make(() => ({
  input: CancelProjectsLocationsOperationsRequest,
  output: CancelProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetProjectsLocationsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsOperationsRequest>;

export type GetProjectsLocationsOperationsResponse = Operation;
export const GetProjectsLocationsOperationsResponse = /*@__PURE__*/ Operation;

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
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsOperationsRequest,
  output: GetProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be deleted. */
  name: string;
}

export const DeleteProjectsLocationsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsOperationsRequest>;

export type DeleteProjectsLocationsOperationsResponse = Empty;
export const DeleteProjectsLocationsOperationsResponse = /*@__PURE__*/ Empty;

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
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsOperationsRequest,
  output: DeleteProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsOperationsRequest {
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list page size. */
  pageSize?: number;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The standard list page token. */
  pageToken?: string;
  /** The standard list filter. */
  filter?: string;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}/operations" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsOperationsRequest>;

export type ListProjectsLocationsOperationsResponse = ListOperationsResponse;
export const ListProjectsLocationsOperationsResponse =
  /*@__PURE__*/ ListOperationsResponse;

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
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsOperationsRequest,
  output: ListProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsAuthzPoliciesRequest {
  /** Required. The name of the `AuthzPolicy` resource to delete. Must be in the format `projects/{project}/locations/{location}/authzPolicies/{authz_policy}`. */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsAuthzPoliciesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsAuthzPoliciesRequest>;

export type DeleteProjectsLocationsAuthzPoliciesResponse = Operation;
export const DeleteProjectsLocationsAuthzPoliciesResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsAuthzPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single AuthzPolicy. */
export const deleteProjectsLocationsAuthzPolicies: API.OperationMethod<
  DeleteProjectsLocationsAuthzPoliciesRequest,
  DeleteProjectsLocationsAuthzPoliciesResponse,
  DeleteProjectsLocationsAuthzPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAuthzPoliciesRequest,
  output: DeleteProjectsLocationsAuthzPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAuthzPoliciesRequest {
  /** Optional. Filtering results. */
  filter?: string;
  /** Optional. Requested page size. The server might return fewer items than requested. If unspecified, the server picks an appropriate default. */
  pageSize?: number;
  /** Optional. Hint for how to order the results. */
  orderBy?: string;
  /** Required. The project and location from which the `AuthzPolicy` resources are listed, specified in the following format: `projects/{project}/locations/{location}`. */
  parent: string;
  /** Optional. A token identifying a page of results that the server returns. */
  pageToken?: string;
}

export const ListProjectsLocationsAuthzPoliciesRequest =
  /*@__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/authzPolicies" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsAuthzPoliciesRequest>;

export type ListProjectsLocationsAuthzPoliciesResponse =
  ListAuthzPoliciesResponse;
export const ListProjectsLocationsAuthzPoliciesResponse =
  /*@__PURE__*/ ListAuthzPoliciesResponse;

export type ListProjectsLocationsAuthzPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists AuthzPolicies in a given project and location. */
export const listProjectsLocationsAuthzPolicies: API.PaginatedOperationMethod<
  ListProjectsLocationsAuthzPoliciesRequest,
  ListProjectsLocationsAuthzPoliciesResponse,
  ListProjectsLocationsAuthzPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAuthzPoliciesRequest,
  output: ListProjectsLocationsAuthzPoliciesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetIamPolicyProjectsLocationsAuthzPoliciesRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsAuthzPoliciesRequest =
  /*@__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Codec<GetIamPolicyProjectsLocationsAuthzPoliciesRequest>;

export type GetIamPolicyProjectsLocationsAuthzPoliciesResponse =
  GoogleIamV1Policy;
export const GetIamPolicyProjectsLocationsAuthzPoliciesResponse =
  /*@__PURE__*/ GoogleIamV1Policy;

export type GetIamPolicyProjectsLocationsAuthzPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsAuthzPolicies: API.OperationMethod<
  GetIamPolicyProjectsLocationsAuthzPoliciesRequest,
  GetIamPolicyProjectsLocationsAuthzPoliciesResponse,
  GetIamPolicyProjectsLocationsAuthzPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsAuthzPoliciesRequest,
  output: GetIamPolicyProjectsLocationsAuthzPoliciesResponse,
  errors: [NotFound, Forbidden],
}));

export interface TestIamPermissionsProjectsLocationsAuthzPoliciesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsAuthzPoliciesRequest =
  /*@__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1TestIamPermissionsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<TestIamPermissionsProjectsLocationsAuthzPoliciesRequest>;

export type TestIamPermissionsProjectsLocationsAuthzPoliciesResponse =
  GoogleIamV1TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsAuthzPoliciesResponse =
  /*@__PURE__*/ GoogleIamV1TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsAuthzPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsAuthzPolicies: API.OperationMethod<
  TestIamPermissionsProjectsLocationsAuthzPoliciesRequest,
  TestIamPermissionsProjectsLocationsAuthzPoliciesResponse,
  TestIamPermissionsProjectsLocationsAuthzPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsAuthzPoliciesRequest,
  output: TestIamPermissionsProjectsLocationsAuthzPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAuthzPoliciesRequest {
  /** Required. A name of the `AuthzPolicy` resource to get. Must be in the format `projects/{project}/locations/{location}/authzPolicies/{authz_policy}`. */
  name: string;
}

export const GetProjectsLocationsAuthzPoliciesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsAuthzPoliciesRequest>;

export type GetProjectsLocationsAuthzPoliciesResponse = AuthzPolicy;
export const GetProjectsLocationsAuthzPoliciesResponse =
  /*@__PURE__*/ AuthzPolicy;

export type GetProjectsLocationsAuthzPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single AuthzPolicy. */
export const getProjectsLocationsAuthzPolicies: API.OperationMethod<
  GetProjectsLocationsAuthzPoliciesRequest,
  GetProjectsLocationsAuthzPoliciesResponse,
  GetProjectsLocationsAuthzPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAuthzPoliciesRequest,
  output: GetProjectsLocationsAuthzPoliciesResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsAuthzPoliciesRequest {
  /** Required. Identifier. Name of the `AuthzPolicy` resource in the following format: `projects/{project}/locations/{location}/authzPolicies/{authz_policy}`. */
  name: string;
  /** Required. Used to specify the fields to be overwritten in the `AuthzPolicy` resource by the update. The fields specified in the `update_mask` are relative to the resource, not the full request. A field is overwritten if it is in the mask. If the user does not specify a mask, then all fields are overwritten. */
  updateMask?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: AuthzPolicy;
}

export const PatchProjectsLocationsAuthzPoliciesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(AuthzPolicy).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsAuthzPoliciesRequest>;

export type PatchProjectsLocationsAuthzPoliciesResponse = Operation;
export const PatchProjectsLocationsAuthzPoliciesResponse =
  /*@__PURE__*/ Operation;

export type PatchProjectsLocationsAuthzPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single AuthzPolicy. */
export const patchProjectsLocationsAuthzPolicies: API.OperationMethod<
  PatchProjectsLocationsAuthzPoliciesRequest,
  PatchProjectsLocationsAuthzPoliciesResponse,
  PatchProjectsLocationsAuthzPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAuthzPoliciesRequest,
  output: PatchProjectsLocationsAuthzPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsAuthzPoliciesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsAuthzPoliciesRequest =
  /*@__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<SetIamPolicyProjectsLocationsAuthzPoliciesRequest>;

export type SetIamPolicyProjectsLocationsAuthzPoliciesResponse =
  GoogleIamV1Policy;
export const SetIamPolicyProjectsLocationsAuthzPoliciesResponse =
  /*@__PURE__*/ GoogleIamV1Policy;

export type SetIamPolicyProjectsLocationsAuthzPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsAuthzPolicies: API.OperationMethod<
  SetIamPolicyProjectsLocationsAuthzPoliciesRequest,
  SetIamPolicyProjectsLocationsAuthzPoliciesResponse,
  SetIamPolicyProjectsLocationsAuthzPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsAuthzPoliciesRequest,
  output: SetIamPolicyProjectsLocationsAuthzPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsAuthzPoliciesRequest {
  /** Required. User-provided ID of the `AuthzPolicy` resource to be created. */
  authzPolicyId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The parent resource of the `AuthzPolicy` resource. Must be in the format `projects/{project}/locations/{location}`. */
  parent: string;
  /** Request body */
  body?: AuthzPolicy;
}

export const CreateProjectsLocationsAuthzPoliciesRequest =
  /*@__PURE__*/ Schema.Struct({
    authzPolicyId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("authzPolicyId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(AuthzPolicy).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/authzPolicies",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsAuthzPoliciesRequest>;

export type CreateProjectsLocationsAuthzPoliciesResponse = Operation;
export const CreateProjectsLocationsAuthzPoliciesResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsAuthzPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new AuthzPolicy in a given project and location. */
export const createProjectsLocationsAuthzPolicies: API.OperationMethod<
  CreateProjectsLocationsAuthzPoliciesRequest,
  CreateProjectsLocationsAuthzPoliciesResponse,
  CreateProjectsLocationsAuthzPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAuthzPoliciesRequest,
  output: CreateProjectsLocationsAuthzPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsInterceptDeploymentsRequest {
  /** Required. The parent resource where this deployment will be created. Format: projects/{project}/locations/{location} */
  parent: string;
  /** Required. The ID to use for the new deployment, which will become the final component of the deployment's resource name. */
  interceptDeploymentId?: string;
  /** Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. */
  requestId?: string;
  /** Request body */
  body?: InterceptDeployment;
}

export const CreateProjectsLocationsInterceptDeploymentsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    interceptDeploymentId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("interceptDeploymentId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(InterceptDeployment).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/interceptDeployments",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsInterceptDeploymentsRequest>;

export type CreateProjectsLocationsInterceptDeploymentsResponse = Operation;
export const CreateProjectsLocationsInterceptDeploymentsResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsInterceptDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a deployment in a given project and location. See https://google.aip.dev/133. */
export const createProjectsLocationsInterceptDeployments: API.OperationMethod<
  CreateProjectsLocationsInterceptDeploymentsRequest,
  CreateProjectsLocationsInterceptDeploymentsResponse,
  CreateProjectsLocationsInterceptDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsInterceptDeploymentsRequest,
  output: CreateProjectsLocationsInterceptDeploymentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsInterceptDeploymentsRequest {
  /** Required. The name of the deployment to retrieve. Format: projects/{project}/locations/{location}/interceptDeployments/{intercept_deployment} */
  name: string;
}

export const GetProjectsLocationsInterceptDeploymentsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsInterceptDeploymentsRequest>;

export type GetProjectsLocationsInterceptDeploymentsResponse =
  InterceptDeployment;
export const GetProjectsLocationsInterceptDeploymentsResponse =
  /*@__PURE__*/ InterceptDeployment;

export type GetProjectsLocationsInterceptDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a specific deployment. See https://google.aip.dev/131. */
export const getProjectsLocationsInterceptDeployments: API.OperationMethod<
  GetProjectsLocationsInterceptDeploymentsRequest,
  GetProjectsLocationsInterceptDeploymentsResponse,
  GetProjectsLocationsInterceptDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsInterceptDeploymentsRequest,
  output: GetProjectsLocationsInterceptDeploymentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsInterceptDeploymentsRequest {
  /** Immutable. Identifier. The resource name of this deployment, for example: `projects/123456789/locations/us-central1-a/interceptDeployments/my-dep`. See https://google.aip.dev/122 for more details. */
  name: string;
  /** Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. */
  requestId?: string;
  /** Optional. The list of fields to update. Fields are specified relative to the deployment (e.g. `description`; *not* `intercept_deployment.description`). See https://google.aip.dev/161 for more details. */
  updateMask?: string;
  /** Request body */
  body?: InterceptDeployment;
}

export const PatchProjectsLocationsInterceptDeploymentsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(InterceptDeployment).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsInterceptDeploymentsRequest>;

export type PatchProjectsLocationsInterceptDeploymentsResponse = Operation;
export const PatchProjectsLocationsInterceptDeploymentsResponse =
  /*@__PURE__*/ Operation;

export type PatchProjectsLocationsInterceptDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a deployment. See https://google.aip.dev/134. */
export const patchProjectsLocationsInterceptDeployments: API.OperationMethod<
  PatchProjectsLocationsInterceptDeploymentsRequest,
  PatchProjectsLocationsInterceptDeploymentsResponse,
  PatchProjectsLocationsInterceptDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsInterceptDeploymentsRequest,
  output: PatchProjectsLocationsInterceptDeploymentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsInterceptDeploymentsRequest {
  /** Optional. Filter expression. See https://google.aip.dev/160#filtering for more details. */
  filter?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. See https://google.aip.dev/158 for more details. */
  pageSize?: number;
  /** Optional. Sort expression. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Required. The parent, which owns this collection of deployments. Example: `projects/123456789/locations/us-central1-a`. See https://google.aip.dev/132 for more details. */
  parent: string;
  /** Optional. A page token, received from a previous `ListInterceptDeployments` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListInterceptDeployments` must match the call that provided the page token. See https://google.aip.dev/158 for more details. */
  pageToken?: string;
}

export const ListProjectsLocationsInterceptDeploymentsRequest =
  /*@__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/interceptDeployments" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsInterceptDeploymentsRequest>;

export type ListProjectsLocationsInterceptDeploymentsResponse =
  ListInterceptDeploymentsResponse;
export const ListProjectsLocationsInterceptDeploymentsResponse =
  /*@__PURE__*/ ListInterceptDeploymentsResponse;

export type ListProjectsLocationsInterceptDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists deployments in a given project and location. See https://google.aip.dev/132. */
export const listProjectsLocationsInterceptDeployments: API.PaginatedOperationMethod<
  ListProjectsLocationsInterceptDeploymentsRequest,
  ListProjectsLocationsInterceptDeploymentsResponse,
  ListProjectsLocationsInterceptDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsInterceptDeploymentsRequest,
  output: ListProjectsLocationsInterceptDeploymentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsInterceptDeploymentsRequest {
  /** Required. Name of the resource */
  name: string;
  /** Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. */
  requestId?: string;
}

export const DeleteProjectsLocationsInterceptDeploymentsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsInterceptDeploymentsRequest>;

export type DeleteProjectsLocationsInterceptDeploymentsResponse = Operation;
export const DeleteProjectsLocationsInterceptDeploymentsResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsInterceptDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a deployment. See https://google.aip.dev/135. */
export const deleteProjectsLocationsInterceptDeployments: API.OperationMethod<
  DeleteProjectsLocationsInterceptDeploymentsRequest,
  DeleteProjectsLocationsInterceptDeploymentsResponse,
  DeleteProjectsLocationsInterceptDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsInterceptDeploymentsRequest,
  output: DeleteProjectsLocationsInterceptDeploymentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsDnsThreatDetectorsRequest {
  /** Optional. The requested page size. The server may return fewer items than requested. If unspecified, the server picks an appropriate default. */
  pageSize?: number;
  /** Required. The parent value for `ListDnsThreatDetectorsRequest`. */
  parent: string;
  /** Optional. A page token received from a previous `ListDnsThreatDetectorsRequest` call. Provide this to retrieve the subsequent page. */
  pageToken?: string;
}

export const ListProjectsLocationsDnsThreatDetectorsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/dnsThreatDetectors" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsDnsThreatDetectorsRequest>;

export type ListProjectsLocationsDnsThreatDetectorsResponse =
  ListDnsThreatDetectorsResponse;
export const ListProjectsLocationsDnsThreatDetectorsResponse =
  /*@__PURE__*/ ListDnsThreatDetectorsResponse;

export type ListProjectsLocationsDnsThreatDetectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists DnsThreatDetectors in a given project and location. */
export const listProjectsLocationsDnsThreatDetectors: API.PaginatedOperationMethod<
  ListProjectsLocationsDnsThreatDetectorsRequest,
  ListProjectsLocationsDnsThreatDetectorsResponse,
  ListProjectsLocationsDnsThreatDetectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsDnsThreatDetectorsRequest,
  output: ListProjectsLocationsDnsThreatDetectorsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsDnsThreatDetectorsRequest {
  /** Required. Name of the DnsThreatDetector resource. */
  name: string;
}

export const DeleteProjectsLocationsDnsThreatDetectorsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsDnsThreatDetectorsRequest>;

export type DeleteProjectsLocationsDnsThreatDetectorsResponse = Empty;
export const DeleteProjectsLocationsDnsThreatDetectorsResponse =
  /*@__PURE__*/ Empty;

export type DeleteProjectsLocationsDnsThreatDetectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single DnsThreatDetector. */
export const deleteProjectsLocationsDnsThreatDetectors: API.OperationMethod<
  DeleteProjectsLocationsDnsThreatDetectorsRequest,
  DeleteProjectsLocationsDnsThreatDetectorsResponse,
  DeleteProjectsLocationsDnsThreatDetectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsDnsThreatDetectorsRequest,
  output: DeleteProjectsLocationsDnsThreatDetectorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsDnsThreatDetectorsRequest {
  /** Optional. The ID of the requesting DnsThreatDetector object. If this field is not supplied, the service generates an identifier. */
  dnsThreatDetectorId?: string;
  /** Required. The value for the parent of the DnsThreatDetector resource. */
  parent: string;
  /** Request body */
  body?: DnsThreatDetector;
}

export const CreateProjectsLocationsDnsThreatDetectorsRequest =
  /*@__PURE__*/ Schema.Struct({
    dnsThreatDetectorId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("dnsThreatDetectorId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(DnsThreatDetector).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/dnsThreatDetectors",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsDnsThreatDetectorsRequest>;

export type CreateProjectsLocationsDnsThreatDetectorsResponse =
  DnsThreatDetector;
export const CreateProjectsLocationsDnsThreatDetectorsResponse =
  /*@__PURE__*/ DnsThreatDetector;

export type CreateProjectsLocationsDnsThreatDetectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new DnsThreatDetector in a given project and location. */
export const createProjectsLocationsDnsThreatDetectors: API.OperationMethod<
  CreateProjectsLocationsDnsThreatDetectorsRequest,
  CreateProjectsLocationsDnsThreatDetectorsResponse,
  CreateProjectsLocationsDnsThreatDetectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsDnsThreatDetectorsRequest,
  output: CreateProjectsLocationsDnsThreatDetectorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsDnsThreatDetectorsRequest {
  /** Required. Name of the DnsThreatDetector resource. */
  name: string;
}

export const GetProjectsLocationsDnsThreatDetectorsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsDnsThreatDetectorsRequest>;

export type GetProjectsLocationsDnsThreatDetectorsResponse = DnsThreatDetector;
export const GetProjectsLocationsDnsThreatDetectorsResponse =
  /*@__PURE__*/ DnsThreatDetector;

export type GetProjectsLocationsDnsThreatDetectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the details of a single DnsThreatDetector. */
export const getProjectsLocationsDnsThreatDetectors: API.OperationMethod<
  GetProjectsLocationsDnsThreatDetectorsRequest,
  GetProjectsLocationsDnsThreatDetectorsResponse,
  GetProjectsLocationsDnsThreatDetectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsDnsThreatDetectorsRequest,
  output: GetProjectsLocationsDnsThreatDetectorsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsDnsThreatDetectorsRequest {
  /** Immutable. Identifier. Name of the DnsThreatDetector resource. */
  name: string;
  /** Optional. The field mask is used to specify the fields to be overwritten in the DnsThreatDetector resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the mask is not provided then all fields present in the request will be overwritten. */
  updateMask?: string;
  /** Request body */
  body?: DnsThreatDetector;
}

export const PatchProjectsLocationsDnsThreatDetectorsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(DnsThreatDetector).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsDnsThreatDetectorsRequest>;

export type PatchProjectsLocationsDnsThreatDetectorsResponse =
  DnsThreatDetector;
export const PatchProjectsLocationsDnsThreatDetectorsResponse =
  /*@__PURE__*/ DnsThreatDetector;

export type PatchProjectsLocationsDnsThreatDetectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a single DnsThreatDetector. */
export const patchProjectsLocationsDnsThreatDetectors: API.OperationMethod<
  PatchProjectsLocationsDnsThreatDetectorsRequest,
  PatchProjectsLocationsDnsThreatDetectorsResponse,
  PatchProjectsLocationsDnsThreatDetectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsDnsThreatDetectorsRequest,
  output: PatchProjectsLocationsDnsThreatDetectorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsMirroringDeploymentGroupsRequest {
  /** Optional. Filter expression. See https://google.aip.dev/160#filtering for more details. */
  filter?: string;
  /** Required. The parent, which owns this collection of deployment groups. Example: `projects/123456789/locations/global`. See https://google.aip.dev/132 for more details. */
  parent: string;
  /** Optional. A page token, received from a previous `ListMirroringDeploymentGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMirroringDeploymentGroups` must match the call that provided the page token. See https://google.aip.dev/158 for more details. */
  pageToken?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. See https://google.aip.dev/158 for more details. */
  pageSize?: number;
  /** Optional. Sort expression. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
}

export const ListProjectsLocationsMirroringDeploymentGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1beta1/{+parent}/mirroringDeploymentGroups",
    }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsMirroringDeploymentGroupsRequest>;

export type ListProjectsLocationsMirroringDeploymentGroupsResponse =
  ListMirroringDeploymentGroupsResponse;
export const ListProjectsLocationsMirroringDeploymentGroupsResponse =
  /*@__PURE__*/ ListMirroringDeploymentGroupsResponse;

export type ListProjectsLocationsMirroringDeploymentGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists deployment groups in a given project and location. See https://google.aip.dev/132. */
export const listProjectsLocationsMirroringDeploymentGroups: API.PaginatedOperationMethod<
  ListProjectsLocationsMirroringDeploymentGroupsRequest,
  ListProjectsLocationsMirroringDeploymentGroupsResponse,
  ListProjectsLocationsMirroringDeploymentGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsMirroringDeploymentGroupsRequest,
  output: ListProjectsLocationsMirroringDeploymentGroupsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsMirroringDeploymentGroupsRequest {
  /** Required. The deployment group to delete. */
  name: string;
  /** Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. */
  requestId?: string;
}

export const DeleteProjectsLocationsMirroringDeploymentGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsMirroringDeploymentGroupsRequest>;

export type DeleteProjectsLocationsMirroringDeploymentGroupsResponse =
  Operation;
export const DeleteProjectsLocationsMirroringDeploymentGroupsResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsMirroringDeploymentGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a deployment group. See https://google.aip.dev/135. */
export const deleteProjectsLocationsMirroringDeploymentGroups: API.OperationMethod<
  DeleteProjectsLocationsMirroringDeploymentGroupsRequest,
  DeleteProjectsLocationsMirroringDeploymentGroupsResponse,
  DeleteProjectsLocationsMirroringDeploymentGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsMirroringDeploymentGroupsRequest,
  output: DeleteProjectsLocationsMirroringDeploymentGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsMirroringDeploymentGroupsRequest {
  /** Required. The parent resource where this deployment group will be created. Format: projects/{project}/locations/{location} */
  parent: string;
  /** Required. The ID to use for the new deployment group, which will become the final component of the deployment group's resource name. */
  mirroringDeploymentGroupId?: string;
  /** Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. */
  requestId?: string;
  /** Request body */
  body?: MirroringDeploymentGroup;
}

export const CreateProjectsLocationsMirroringDeploymentGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    mirroringDeploymentGroupId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("mirroringDeploymentGroupId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(MirroringDeploymentGroup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/mirroringDeploymentGroups",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsMirroringDeploymentGroupsRequest>;

export type CreateProjectsLocationsMirroringDeploymentGroupsResponse =
  Operation;
export const CreateProjectsLocationsMirroringDeploymentGroupsResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsMirroringDeploymentGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a deployment group in a given project and location. See https://google.aip.dev/133. */
export const createProjectsLocationsMirroringDeploymentGroups: API.OperationMethod<
  CreateProjectsLocationsMirroringDeploymentGroupsRequest,
  CreateProjectsLocationsMirroringDeploymentGroupsResponse,
  CreateProjectsLocationsMirroringDeploymentGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsMirroringDeploymentGroupsRequest,
  output: CreateProjectsLocationsMirroringDeploymentGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsMirroringDeploymentGroupsRequest {
  /** Required. The name of the deployment group to retrieve. Format: projects/{project}/locations/{location}/mirroringDeploymentGroups/{mirroring_deployment_group} */
  name: string;
}

export const GetProjectsLocationsMirroringDeploymentGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsMirroringDeploymentGroupsRequest>;

export type GetProjectsLocationsMirroringDeploymentGroupsResponse =
  MirroringDeploymentGroup;
export const GetProjectsLocationsMirroringDeploymentGroupsResponse =
  /*@__PURE__*/ MirroringDeploymentGroup;

export type GetProjectsLocationsMirroringDeploymentGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a specific deployment group. See https://google.aip.dev/131. */
export const getProjectsLocationsMirroringDeploymentGroups: API.OperationMethod<
  GetProjectsLocationsMirroringDeploymentGroupsRequest,
  GetProjectsLocationsMirroringDeploymentGroupsResponse,
  GetProjectsLocationsMirroringDeploymentGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsMirroringDeploymentGroupsRequest,
  output: GetProjectsLocationsMirroringDeploymentGroupsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsMirroringDeploymentGroupsRequest {
  /** Optional. The list of fields to update. Fields are specified relative to the deployment group (e.g. `description`; *not* `mirroring_deployment_group.description`). See https://google.aip.dev/161 for more details. */
  updateMask?: string;
  /** Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. */
  requestId?: string;
  /** Immutable. Identifier. The resource name of this deployment group, for example: `projects/123456789/locations/global/mirroringDeploymentGroups/my-dg`. See https://google.aip.dev/122 for more details. */
  name: string;
  /** Request body */
  body?: MirroringDeploymentGroup;
}

export const PatchProjectsLocationsMirroringDeploymentGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(MirroringDeploymentGroup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsMirroringDeploymentGroupsRequest>;

export type PatchProjectsLocationsMirroringDeploymentGroupsResponse = Operation;
export const PatchProjectsLocationsMirroringDeploymentGroupsResponse =
  /*@__PURE__*/ Operation;

export type PatchProjectsLocationsMirroringDeploymentGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a deployment group. See https://google.aip.dev/134. */
export const patchProjectsLocationsMirroringDeploymentGroups: API.OperationMethod<
  PatchProjectsLocationsMirroringDeploymentGroupsRequest,
  PatchProjectsLocationsMirroringDeploymentGroupsResponse,
  PatchProjectsLocationsMirroringDeploymentGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsMirroringDeploymentGroupsRequest,
  output: PatchProjectsLocationsMirroringDeploymentGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsClientTlsPoliciesRequest {
  /** Required. A name of the ClientTlsPolicy to delete. Must be in the format `projects/* /locations/{location}/clientTlsPolicies/*`. */
  name: string;
}

export const DeleteProjectsLocationsClientTlsPoliciesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsClientTlsPoliciesRequest>;

export type DeleteProjectsLocationsClientTlsPoliciesResponse = Operation;
export const DeleteProjectsLocationsClientTlsPoliciesResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsClientTlsPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single ClientTlsPolicy. */
export const deleteProjectsLocationsClientTlsPolicies: API.OperationMethod<
  DeleteProjectsLocationsClientTlsPoliciesRequest,
  DeleteProjectsLocationsClientTlsPoliciesResponse,
  DeleteProjectsLocationsClientTlsPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsClientTlsPoliciesRequest,
  output: DeleteProjectsLocationsClientTlsPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsClientTlsPoliciesRequest {
  /** Maximum number of ClientTlsPolicies to return per call. */
  pageSize?: number;
  /** Required. The project and location from which the ClientTlsPolicies should be listed, specified in the format `projects/* /locations/{location}`. */
  parent: string;
  /** The value returned by the last `ListClientTlsPoliciesResponse` Indicates that this is a continuation of a prior `ListClientTlsPolicies` call, and that the system should return the next page of data. */
  pageToken?: string;
}

export const ListProjectsLocationsClientTlsPoliciesRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/clientTlsPolicies" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsClientTlsPoliciesRequest>;

export type ListProjectsLocationsClientTlsPoliciesResponse =
  ListClientTlsPoliciesResponse;
export const ListProjectsLocationsClientTlsPoliciesResponse =
  /*@__PURE__*/ ListClientTlsPoliciesResponse;

export type ListProjectsLocationsClientTlsPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists ClientTlsPolicies in a given project and location. */
export const listProjectsLocationsClientTlsPolicies: API.PaginatedOperationMethod<
  ListProjectsLocationsClientTlsPoliciesRequest,
  ListProjectsLocationsClientTlsPoliciesResponse,
  ListProjectsLocationsClientTlsPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsClientTlsPoliciesRequest,
  output: ListProjectsLocationsClientTlsPoliciesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetIamPolicyProjectsLocationsClientTlsPoliciesRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsClientTlsPoliciesRequest =
  /*@__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Codec<GetIamPolicyProjectsLocationsClientTlsPoliciesRequest>;

export type GetIamPolicyProjectsLocationsClientTlsPoliciesResponse =
  GoogleIamV1Policy;
export const GetIamPolicyProjectsLocationsClientTlsPoliciesResponse =
  /*@__PURE__*/ GoogleIamV1Policy;

export type GetIamPolicyProjectsLocationsClientTlsPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsClientTlsPolicies: API.OperationMethod<
  GetIamPolicyProjectsLocationsClientTlsPoliciesRequest,
  GetIamPolicyProjectsLocationsClientTlsPoliciesResponse,
  GetIamPolicyProjectsLocationsClientTlsPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsClientTlsPoliciesRequest,
  output: GetIamPolicyProjectsLocationsClientTlsPoliciesResponse,
  errors: [NotFound, Forbidden],
}));

export interface TestIamPermissionsProjectsLocationsClientTlsPoliciesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsClientTlsPoliciesRequest =
  /*@__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1TestIamPermissionsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<TestIamPermissionsProjectsLocationsClientTlsPoliciesRequest>;

export type TestIamPermissionsProjectsLocationsClientTlsPoliciesResponse =
  GoogleIamV1TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsClientTlsPoliciesResponse =
  /*@__PURE__*/ GoogleIamV1TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsClientTlsPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsClientTlsPolicies: API.OperationMethod<
  TestIamPermissionsProjectsLocationsClientTlsPoliciesRequest,
  TestIamPermissionsProjectsLocationsClientTlsPoliciesResponse,
  TestIamPermissionsProjectsLocationsClientTlsPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsClientTlsPoliciesRequest,
  output: TestIamPermissionsProjectsLocationsClientTlsPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsClientTlsPoliciesRequest {
  /** Required. A name of the ClientTlsPolicy to get. Must be in the format `projects/* /locations/{location}/clientTlsPolicies/*`. */
  name: string;
}

export const GetProjectsLocationsClientTlsPoliciesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsClientTlsPoliciesRequest>;

export type GetProjectsLocationsClientTlsPoliciesResponse = ClientTlsPolicy;
export const GetProjectsLocationsClientTlsPoliciesResponse =
  /*@__PURE__*/ ClientTlsPolicy;

export type GetProjectsLocationsClientTlsPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single ClientTlsPolicy. */
export const getProjectsLocationsClientTlsPolicies: API.OperationMethod<
  GetProjectsLocationsClientTlsPoliciesRequest,
  GetProjectsLocationsClientTlsPoliciesResponse,
  GetProjectsLocationsClientTlsPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsClientTlsPoliciesRequest,
  output: GetProjectsLocationsClientTlsPoliciesResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsClientTlsPoliciesRequest {
  /** Required. Name of the ClientTlsPolicy resource. It matches the pattern `projects/{project}/locations/{location}/clientTlsPolicies/{client_tls_policy}` */
  name: string;
  /** Optional. Field mask is used to specify the fields to be overwritten in the ClientTlsPolicy resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Request body */
  body?: ClientTlsPolicy;
}

export const PatchProjectsLocationsClientTlsPoliciesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(ClientTlsPolicy).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsClientTlsPoliciesRequest>;

export type PatchProjectsLocationsClientTlsPoliciesResponse = Operation;
export const PatchProjectsLocationsClientTlsPoliciesResponse =
  /*@__PURE__*/ Operation;

export type PatchProjectsLocationsClientTlsPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single ClientTlsPolicy. */
export const patchProjectsLocationsClientTlsPolicies: API.OperationMethod<
  PatchProjectsLocationsClientTlsPoliciesRequest,
  PatchProjectsLocationsClientTlsPoliciesResponse,
  PatchProjectsLocationsClientTlsPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsClientTlsPoliciesRequest,
  output: PatchProjectsLocationsClientTlsPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsClientTlsPoliciesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsClientTlsPoliciesRequest =
  /*@__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<SetIamPolicyProjectsLocationsClientTlsPoliciesRequest>;

export type SetIamPolicyProjectsLocationsClientTlsPoliciesResponse =
  GoogleIamV1Policy;
export const SetIamPolicyProjectsLocationsClientTlsPoliciesResponse =
  /*@__PURE__*/ GoogleIamV1Policy;

export type SetIamPolicyProjectsLocationsClientTlsPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsClientTlsPolicies: API.OperationMethod<
  SetIamPolicyProjectsLocationsClientTlsPoliciesRequest,
  SetIamPolicyProjectsLocationsClientTlsPoliciesResponse,
  SetIamPolicyProjectsLocationsClientTlsPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsClientTlsPoliciesRequest,
  output: SetIamPolicyProjectsLocationsClientTlsPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsClientTlsPoliciesRequest {
  /** Required. The parent resource of the ClientTlsPolicy. Must be in the format `projects/* /locations/{location}`. */
  parent: string;
  /** Required. Short name of the ClientTlsPolicy resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "client_mtls_policy". */
  clientTlsPolicyId?: string;
  /** Request body */
  body?: ClientTlsPolicy;
}

export const CreateProjectsLocationsClientTlsPoliciesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    clientTlsPolicyId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("clientTlsPolicyId"),
    ),
    body: Schema.optional(ClientTlsPolicy).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/clientTlsPolicies",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsClientTlsPoliciesRequest>;

export type CreateProjectsLocationsClientTlsPoliciesResponse = Operation;
export const CreateProjectsLocationsClientTlsPoliciesResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsClientTlsPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new ClientTlsPolicy in a given project and location. */
export const createProjectsLocationsClientTlsPolicies: API.OperationMethod<
  CreateProjectsLocationsClientTlsPoliciesRequest,
  CreateProjectsLocationsClientTlsPoliciesResponse,
  CreateProjectsLocationsClientTlsPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsClientTlsPoliciesRequest,
  output: CreateProjectsLocationsClientTlsPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsUrlListsRequest {
  /** Required. The parent resource of the UrlList. Must be in the format `projects/* /locations/{location}`. */
  parent: string;
  /** Required. Short name of the UrlList resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "url_list". */
  urlListId?: string;
  /** Request body */
  body?: UrlList;
}

export const CreateProjectsLocationsUrlListsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    urlListId: Schema.optional(Schema.String).pipe(T.HttpQuery("urlListId")),
    body: Schema.optional(UrlList).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/urlLists",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsUrlListsRequest>;

export type CreateProjectsLocationsUrlListsResponse = Operation;
export const CreateProjectsLocationsUrlListsResponse = /*@__PURE__*/ Operation;

export type CreateProjectsLocationsUrlListsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new UrlList in a given project and location. */
export const createProjectsLocationsUrlLists: API.OperationMethod<
  CreateProjectsLocationsUrlListsRequest,
  CreateProjectsLocationsUrlListsResponse,
  CreateProjectsLocationsUrlListsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsUrlListsRequest,
  output: CreateProjectsLocationsUrlListsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsUrlListsRequest {
  /** Required. A name of the UrlList to get. Must be in the format `projects/* /locations/{location}/urlLists/*`. */
  name: string;
}

export const GetProjectsLocationsUrlListsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsUrlListsRequest>;

export type GetProjectsLocationsUrlListsResponse = UrlList;
export const GetProjectsLocationsUrlListsResponse = /*@__PURE__*/ UrlList;

export type GetProjectsLocationsUrlListsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single UrlList. */
export const getProjectsLocationsUrlLists: API.OperationMethod<
  GetProjectsLocationsUrlListsRequest,
  GetProjectsLocationsUrlListsResponse,
  GetProjectsLocationsUrlListsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsUrlListsRequest,
  output: GetProjectsLocationsUrlListsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsUrlListsRequest {
  /** Required. Name of the resource provided by the user. Name is of the form projects/{project}/locations/{location}/urlLists/{url_list} url_list should match the pattern:(^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$). */
  name: string;
  /** Optional. Field mask is used to specify the fields to be overwritten in the UrlList resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Request body */
  body?: UrlList;
}

export const PatchProjectsLocationsUrlListsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(UrlList).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsUrlListsRequest>;

export type PatchProjectsLocationsUrlListsResponse = Operation;
export const PatchProjectsLocationsUrlListsResponse = /*@__PURE__*/ Operation;

export type PatchProjectsLocationsUrlListsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single UrlList. */
export const patchProjectsLocationsUrlLists: API.OperationMethod<
  PatchProjectsLocationsUrlListsRequest,
  PatchProjectsLocationsUrlListsResponse,
  PatchProjectsLocationsUrlListsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsUrlListsRequest,
  output: PatchProjectsLocationsUrlListsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsUrlListsRequest {
  /** Required. The project and location from which the UrlLists should be listed, specified in the format `projects/{project}/locations/{location}`. */
  parent: string;
  /** The value returned by the last `ListUrlListsResponse` Indicates that this is a continuation of a prior `ListUrlLists` call, and that the system should return the next page of data. */
  pageToken?: string;
  /** Maximum number of UrlLists to return per call. */
  pageSize?: number;
}

export const ListProjectsLocationsUrlListsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/urlLists" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsUrlListsRequest>;

export type ListProjectsLocationsUrlListsResponse = ListUrlListsResponse;
export const ListProjectsLocationsUrlListsResponse =
  /*@__PURE__*/ ListUrlListsResponse;

export type ListProjectsLocationsUrlListsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists UrlLists in a given project and location. */
export const listProjectsLocationsUrlLists: API.PaginatedOperationMethod<
  ListProjectsLocationsUrlListsRequest,
  ListProjectsLocationsUrlListsResponse,
  ListProjectsLocationsUrlListsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsUrlListsRequest,
  output: ListProjectsLocationsUrlListsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsUrlListsRequest {
  /** Required. A name of the UrlList to delete. Must be in the format `projects/* /locations/{location}/urlLists/*`. */
  name: string;
}

export const DeleteProjectsLocationsUrlListsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsUrlListsRequest>;

export type DeleteProjectsLocationsUrlListsResponse = Operation;
export const DeleteProjectsLocationsUrlListsResponse = /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsUrlListsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single UrlList. */
export const deleteProjectsLocationsUrlLists: API.OperationMethod<
  DeleteProjectsLocationsUrlListsRequest,
  DeleteProjectsLocationsUrlListsResponse,
  DeleteProjectsLocationsUrlListsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsUrlListsRequest,
  output: DeleteProjectsLocationsUrlListsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsSecurityProfilesRequest {
  /** Required. Short name of the SecurityProfile resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "security_profile1". */
  securityProfileId?: string;
  /** Required. The parent resource of the SecurityProfile. Must be in the format `projects|organizations/* /locations/{location}`. */
  parent: string;
  /** Request body */
  body?: SecurityProfile;
}

export const CreateProjectsLocationsSecurityProfilesRequest =
  /*@__PURE__*/ Schema.Struct({
    securityProfileId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("securityProfileId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(SecurityProfile).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/securityProfiles",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsSecurityProfilesRequest>;

export type CreateProjectsLocationsSecurityProfilesResponse = Operation;
export const CreateProjectsLocationsSecurityProfilesResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsSecurityProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new SecurityProfile in a given project and location. */
export const createProjectsLocationsSecurityProfiles: API.OperationMethod<
  CreateProjectsLocationsSecurityProfilesRequest,
  CreateProjectsLocationsSecurityProfilesResponse,
  CreateProjectsLocationsSecurityProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsSecurityProfilesRequest,
  output: CreateProjectsLocationsSecurityProfilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsSecurityProfilesRequest {
  /** Required. A name of the SecurityProfile to get. Must be in the format `projects|organizations/* /locations/{location}/securityProfiles/{security_profile_id}`. */
  name: string;
}

export const GetProjectsLocationsSecurityProfilesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsSecurityProfilesRequest>;

export type GetProjectsLocationsSecurityProfilesResponse = SecurityProfile;
export const GetProjectsLocationsSecurityProfilesResponse =
  /*@__PURE__*/ SecurityProfile;

export type GetProjectsLocationsSecurityProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single SecurityProfile. */
export const getProjectsLocationsSecurityProfiles: API.OperationMethod<
  GetProjectsLocationsSecurityProfilesRequest,
  GetProjectsLocationsSecurityProfilesResponse,
  GetProjectsLocationsSecurityProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsSecurityProfilesRequest,
  output: GetProjectsLocationsSecurityProfilesResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsSecurityProfilesRequest {
  /** Required. Field mask is used to specify the fields to be overwritten in the SecurityProfile resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. */
  updateMask?: string;
  /** Immutable. Identifier. Name of the SecurityProfile resource. It matches pattern `projects|organizations/* /locations/{location}/securityProfiles/{security_profile}`. */
  name: string;
  /** Request body */
  body?: SecurityProfile;
}

export const PatchProjectsLocationsSecurityProfilesRequest =
  /*@__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SecurityProfile).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsSecurityProfilesRequest>;

export type PatchProjectsLocationsSecurityProfilesResponse = Operation;
export const PatchProjectsLocationsSecurityProfilesResponse =
  /*@__PURE__*/ Operation;

export type PatchProjectsLocationsSecurityProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single SecurityProfile. */
export const patchProjectsLocationsSecurityProfiles: API.OperationMethod<
  PatchProjectsLocationsSecurityProfilesRequest,
  PatchProjectsLocationsSecurityProfilesResponse,
  PatchProjectsLocationsSecurityProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsSecurityProfilesRequest,
  output: PatchProjectsLocationsSecurityProfilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsSecurityProfilesRequest {
  /** Optional. Maximum number of SecurityProfiles to return per call. */
  pageSize?: number;
  /** Required. The project or organization and location from which the SecurityProfiles should be listed, specified in the format `projects|organizations/* /locations/{location}`. */
  parent: string;
  /** Optional. The value returned by the last `ListSecurityProfilesResponse` Indicates that this is a continuation of a prior `ListSecurityProfiles` call, and that the system should return the next page of data. */
  pageToken?: string;
}

export const ListProjectsLocationsSecurityProfilesRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/securityProfiles" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsSecurityProfilesRequest>;

export type ListProjectsLocationsSecurityProfilesResponse =
  ListSecurityProfilesResponse;
export const ListProjectsLocationsSecurityProfilesResponse =
  /*@__PURE__*/ ListSecurityProfilesResponse;

export type ListProjectsLocationsSecurityProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists SecurityProfiles in a given project and location. */
export const listProjectsLocationsSecurityProfiles: API.PaginatedOperationMethod<
  ListProjectsLocationsSecurityProfilesRequest,
  ListProjectsLocationsSecurityProfilesResponse,
  ListProjectsLocationsSecurityProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsSecurityProfilesRequest,
  output: ListProjectsLocationsSecurityProfilesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsSecurityProfilesRequest {
  /** Required. A name of the SecurityProfile to delete. Must be in the format `projects|organizations/* /locations/{location}/securityProfiles/{security_profile_id}`. */
  name: string;
  /** Optional. If client provided etag is out of date, delete will return FAILED_PRECONDITION error. */
  etag?: string;
}

export const DeleteProjectsLocationsSecurityProfilesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsSecurityProfilesRequest>;

export type DeleteProjectsLocationsSecurityProfilesResponse = Operation;
export const DeleteProjectsLocationsSecurityProfilesResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsSecurityProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single SecurityProfile. */
export const deleteProjectsLocationsSecurityProfiles: API.OperationMethod<
  DeleteProjectsLocationsSecurityProfilesRequest,
  DeleteProjectsLocationsSecurityProfilesResponse,
  DeleteProjectsLocationsSecurityProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsSecurityProfilesRequest,
  output: DeleteProjectsLocationsSecurityProfilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsInterceptEndpointGroupsRequest {
  /** Required. The parent resource where this endpoint group will be created. Format: projects/{project}/locations/{location} */
  parent: string;
  /** Required. The ID to use for the endpoint group, which will become the final component of the endpoint group's resource name. */
  interceptEndpointGroupId?: string;
  /** Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. */
  requestId?: string;
  /** Request body */
  body?: InterceptEndpointGroup;
}

export const CreateProjectsLocationsInterceptEndpointGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    interceptEndpointGroupId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("interceptEndpointGroupId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(InterceptEndpointGroup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/interceptEndpointGroups",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsInterceptEndpointGroupsRequest>;

export type CreateProjectsLocationsInterceptEndpointGroupsResponse = Operation;
export const CreateProjectsLocationsInterceptEndpointGroupsResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsInterceptEndpointGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates an endpoint group in a given project and location. See https://google.aip.dev/133. */
export const createProjectsLocationsInterceptEndpointGroups: API.OperationMethod<
  CreateProjectsLocationsInterceptEndpointGroupsRequest,
  CreateProjectsLocationsInterceptEndpointGroupsResponse,
  CreateProjectsLocationsInterceptEndpointGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsInterceptEndpointGroupsRequest,
  output: CreateProjectsLocationsInterceptEndpointGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsInterceptEndpointGroupsRequest {
  /** Required. The name of the endpoint group to retrieve. Format: projects/{project}/locations/{location}/interceptEndpointGroups/{intercept_endpoint_group} */
  name: string;
}

export const GetProjectsLocationsInterceptEndpointGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsInterceptEndpointGroupsRequest>;

export type GetProjectsLocationsInterceptEndpointGroupsResponse =
  InterceptEndpointGroup;
export const GetProjectsLocationsInterceptEndpointGroupsResponse =
  /*@__PURE__*/ InterceptEndpointGroup;

export type GetProjectsLocationsInterceptEndpointGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a specific endpoint group. See https://google.aip.dev/131. */
export const getProjectsLocationsInterceptEndpointGroups: API.OperationMethod<
  GetProjectsLocationsInterceptEndpointGroupsRequest,
  GetProjectsLocationsInterceptEndpointGroupsResponse,
  GetProjectsLocationsInterceptEndpointGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsInterceptEndpointGroupsRequest,
  output: GetProjectsLocationsInterceptEndpointGroupsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsInterceptEndpointGroupsRequest {
  /** Immutable. Identifier. The resource name of this endpoint group, for example: `projects/123456789/locations/global/interceptEndpointGroups/my-eg`. See https://google.aip.dev/122 for more details. */
  name: string;
  /** Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. */
  requestId?: string;
  /** Optional. The list of fields to update. Fields are specified relative to the endpoint group (e.g. `description`; *not* `intercept_endpoint_group.description`). See https://google.aip.dev/161 for more details. */
  updateMask?: string;
  /** Request body */
  body?: InterceptEndpointGroup;
}

export const PatchProjectsLocationsInterceptEndpointGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(InterceptEndpointGroup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsInterceptEndpointGroupsRequest>;

export type PatchProjectsLocationsInterceptEndpointGroupsResponse = Operation;
export const PatchProjectsLocationsInterceptEndpointGroupsResponse =
  /*@__PURE__*/ Operation;

export type PatchProjectsLocationsInterceptEndpointGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an endpoint group. See https://google.aip.dev/134. */
export const patchProjectsLocationsInterceptEndpointGroups: API.OperationMethod<
  PatchProjectsLocationsInterceptEndpointGroupsRequest,
  PatchProjectsLocationsInterceptEndpointGroupsResponse,
  PatchProjectsLocationsInterceptEndpointGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsInterceptEndpointGroupsRequest,
  output: PatchProjectsLocationsInterceptEndpointGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsInterceptEndpointGroupsRequest {
  /** Optional. Filter expression. See https://google.aip.dev/160#filtering for more details. */
  filter?: string;
  /** Required. The parent, which owns this collection of endpoint groups. Example: `projects/123456789/locations/global`. See https://google.aip.dev/132 for more details. */
  parent: string;
  /** Optional. A page token, received from a previous `ListInterceptEndpointGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListInterceptEndpointGroups` must match the call that provided the page token. See https://google.aip.dev/158 for more details. */
  pageToken?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. See https://google.aip.dev/158 for more details. */
  pageSize?: number;
  /** Optional. Sort expression. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
}

export const ListProjectsLocationsInterceptEndpointGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1beta1/{+parent}/interceptEndpointGroups",
    }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsInterceptEndpointGroupsRequest>;

export type ListProjectsLocationsInterceptEndpointGroupsResponse =
  ListInterceptEndpointGroupsResponse;
export const ListProjectsLocationsInterceptEndpointGroupsResponse =
  /*@__PURE__*/ ListInterceptEndpointGroupsResponse;

export type ListProjectsLocationsInterceptEndpointGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists endpoint groups in a given project and location. See https://google.aip.dev/132. */
export const listProjectsLocationsInterceptEndpointGroups: API.PaginatedOperationMethod<
  ListProjectsLocationsInterceptEndpointGroupsRequest,
  ListProjectsLocationsInterceptEndpointGroupsResponse,
  ListProjectsLocationsInterceptEndpointGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsInterceptEndpointGroupsRequest,
  output: ListProjectsLocationsInterceptEndpointGroupsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsInterceptEndpointGroupsRequest {
  /** Required. The endpoint group to delete. */
  name: string;
  /** Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. */
  requestId?: string;
}

export const DeleteProjectsLocationsInterceptEndpointGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsInterceptEndpointGroupsRequest>;

export type DeleteProjectsLocationsInterceptEndpointGroupsResponse = Operation;
export const DeleteProjectsLocationsInterceptEndpointGroupsResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsInterceptEndpointGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an endpoint group. See https://google.aip.dev/135. */
export const deleteProjectsLocationsInterceptEndpointGroups: API.OperationMethod<
  DeleteProjectsLocationsInterceptEndpointGroupsRequest,
  DeleteProjectsLocationsInterceptEndpointGroupsResponse,
  DeleteProjectsLocationsInterceptEndpointGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsInterceptEndpointGroupsRequest,
  output: DeleteProjectsLocationsInterceptEndpointGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface AddItemsProjectsLocationsAddressGroupsRequest {
  /** Required. A name of the AddressGroup to add items to. Must be in the format `projects|organization/* /locations/{location}/addressGroups/*`. */
  addressGroup: string;
  /** Request body */
  body?: AddAddressGroupItemsRequest;
}

export const AddItemsProjectsLocationsAddressGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    addressGroup: Schema.String.pipe(T.HttpPath("addressGroup")),
    body: Schema.optional(AddAddressGroupItemsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+addressGroup}:addItems",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<AddItemsProjectsLocationsAddressGroupsRequest>;

export type AddItemsProjectsLocationsAddressGroupsResponse = Operation;
export const AddItemsProjectsLocationsAddressGroupsResponse =
  /*@__PURE__*/ Operation;

export type AddItemsProjectsLocationsAddressGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Adds items to an address group. */
export const addItemsProjectsLocationsAddressGroups: API.OperationMethod<
  AddItemsProjectsLocationsAddressGroupsRequest,
  AddItemsProjectsLocationsAddressGroupsResponse,
  AddItemsProjectsLocationsAddressGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AddItemsProjectsLocationsAddressGroupsRequest,
  output: AddItemsProjectsLocationsAddressGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsAddressGroupsRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsAddressGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Codec<GetIamPolicyProjectsLocationsAddressGroupsRequest>;

export type GetIamPolicyProjectsLocationsAddressGroupsResponse =
  GoogleIamV1Policy;
export const GetIamPolicyProjectsLocationsAddressGroupsResponse =
  /*@__PURE__*/ GoogleIamV1Policy;

export type GetIamPolicyProjectsLocationsAddressGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsAddressGroups: API.OperationMethod<
  GetIamPolicyProjectsLocationsAddressGroupsRequest,
  GetIamPolicyProjectsLocationsAddressGroupsResponse,
  GetIamPolicyProjectsLocationsAddressGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsAddressGroupsRequest,
  output: GetIamPolicyProjectsLocationsAddressGroupsResponse,
  errors: [NotFound, Forbidden],
}));

export interface TestIamPermissionsProjectsLocationsAddressGroupsRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsAddressGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1TestIamPermissionsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<TestIamPermissionsProjectsLocationsAddressGroupsRequest>;

export type TestIamPermissionsProjectsLocationsAddressGroupsResponse =
  GoogleIamV1TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsAddressGroupsResponse =
  /*@__PURE__*/ GoogleIamV1TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsAddressGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsAddressGroups: API.OperationMethod<
  TestIamPermissionsProjectsLocationsAddressGroupsRequest,
  TestIamPermissionsProjectsLocationsAddressGroupsResponse,
  TestIamPermissionsProjectsLocationsAddressGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsAddressGroupsRequest,
  output: TestIamPermissionsProjectsLocationsAddressGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CloneItemsProjectsLocationsAddressGroupsRequest {
  /** Required. A name of the AddressGroup to clone items to. Must be in the format `projects|organization/* /locations/{location}/addressGroups/*`. */
  addressGroup: string;
  /** Request body */
  body?: CloneAddressGroupItemsRequest;
}

export const CloneItemsProjectsLocationsAddressGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    addressGroup: Schema.String.pipe(T.HttpPath("addressGroup")),
    body: Schema.optional(CloneAddressGroupItemsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+addressGroup}:cloneItems",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CloneItemsProjectsLocationsAddressGroupsRequest>;

export type CloneItemsProjectsLocationsAddressGroupsResponse = Operation;
export const CloneItemsProjectsLocationsAddressGroupsResponse =
  /*@__PURE__*/ Operation;

export type CloneItemsProjectsLocationsAddressGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Clones items from one address group to another. */
export const cloneItemsProjectsLocationsAddressGroups: API.OperationMethod<
  CloneItemsProjectsLocationsAddressGroupsRequest,
  CloneItemsProjectsLocationsAddressGroupsResponse,
  CloneItemsProjectsLocationsAddressGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CloneItemsProjectsLocationsAddressGroupsRequest,
  output: CloneItemsProjectsLocationsAddressGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsAddressGroupsRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The parent resource of the AddressGroup. Must be in the format `projects/* /locations/{location}`. */
  parent: string;
  /** Required. Short name of the AddressGroup resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "authz_policy". */
  addressGroupId?: string;
  /** Request body */
  body?: AddressGroup;
}

export const CreateProjectsLocationsAddressGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    addressGroupId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("addressGroupId"),
    ),
    body: Schema.optional(AddressGroup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/addressGroups",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsAddressGroupsRequest>;

export type CreateProjectsLocationsAddressGroupsResponse = Operation;
export const CreateProjectsLocationsAddressGroupsResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsAddressGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new address group in a given project and location. */
export const createProjectsLocationsAddressGroups: API.OperationMethod<
  CreateProjectsLocationsAddressGroupsRequest,
  CreateProjectsLocationsAddressGroupsResponse,
  CreateProjectsLocationsAddressGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAddressGroupsRequest,
  output: CreateProjectsLocationsAddressGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsAddressGroupsRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. Field mask is used to specify the fields to be overwritten in the AddressGroup resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Required. Name of the AddressGroup resource. It matches pattern `projects/* /locations/{location}/addressGroups/`. */
  name: string;
  /** Request body */
  body?: AddressGroup;
}

export const PatchProjectsLocationsAddressGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(AddressGroup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsAddressGroupsRequest>;

export type PatchProjectsLocationsAddressGroupsResponse = Operation;
export const PatchProjectsLocationsAddressGroupsResponse =
  /*@__PURE__*/ Operation;

export type PatchProjectsLocationsAddressGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single address group. */
export const patchProjectsLocationsAddressGroups: API.OperationMethod<
  PatchProjectsLocationsAddressGroupsRequest,
  PatchProjectsLocationsAddressGroupsResponse,
  PatchProjectsLocationsAddressGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAddressGroupsRequest,
  output: PatchProjectsLocationsAddressGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsAddressGroupsRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsAddressGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<SetIamPolicyProjectsLocationsAddressGroupsRequest>;

export type SetIamPolicyProjectsLocationsAddressGroupsResponse =
  GoogleIamV1Policy;
export const SetIamPolicyProjectsLocationsAddressGroupsResponse =
  /*@__PURE__*/ GoogleIamV1Policy;

export type SetIamPolicyProjectsLocationsAddressGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsAddressGroups: API.OperationMethod<
  SetIamPolicyProjectsLocationsAddressGroupsRequest,
  SetIamPolicyProjectsLocationsAddressGroupsResponse,
  SetIamPolicyProjectsLocationsAddressGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsAddressGroupsRequest,
  output: SetIamPolicyProjectsLocationsAddressGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAddressGroupsRequest {
  /** Required. The project and location from which the AddressGroups should be listed, specified in the format `projects/* /locations/{location}`. */
  parent: string;
  /** The value returned by the last `ListAddressGroupsResponse` Indicates that this is a continuation of a prior `ListAddressGroups` call, and that the system should return the next page of data. */
  pageToken?: string;
  /** Maximum number of AddressGroups to return per call. */
  pageSize?: number;
  /** Optional. If true, allow partial responses for multi-regional Aggregated List requests. */
  returnPartialSuccess?: boolean;
}

export const ListProjectsLocationsAddressGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/addressGroups" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsAddressGroupsRequest>;

export type ListProjectsLocationsAddressGroupsResponse =
  ListAddressGroupsResponse;
export const ListProjectsLocationsAddressGroupsResponse =
  /*@__PURE__*/ ListAddressGroupsResponse;

export type ListProjectsLocationsAddressGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists address groups in a given project and location. */
export const listProjectsLocationsAddressGroups: API.PaginatedOperationMethod<
  ListProjectsLocationsAddressGroupsRequest,
  ListProjectsLocationsAddressGroupsResponse,
  ListProjectsLocationsAddressGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAddressGroupsRequest,
  output: ListProjectsLocationsAddressGroupsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsAddressGroupsRequest {
  /** Required. A name of the AddressGroup to delete. Must be in the format `projects/* /locations/{location}/addressGroups/*`. */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsAddressGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsAddressGroupsRequest>;

export type DeleteProjectsLocationsAddressGroupsResponse = Operation;
export const DeleteProjectsLocationsAddressGroupsResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsAddressGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single address group. */
export const deleteProjectsLocationsAddressGroups: API.OperationMethod<
  DeleteProjectsLocationsAddressGroupsRequest,
  DeleteProjectsLocationsAddressGroupsResponse,
  DeleteProjectsLocationsAddressGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAddressGroupsRequest,
  output: DeleteProjectsLocationsAddressGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListReferencesProjectsLocationsAddressGroupsRequest {
  /** Required. A name of the AddressGroup to clone items to. Must be in the format `projects|organization/* /locations/{location}/addressGroups/*`. */
  addressGroup: string;
  /** The maximum number of references to return. If unspecified, server will pick an appropriate default. Server may return fewer items than requested. A caller should only rely on response's next_page_token to determine if there are more AddressGroupUsers left to be queried. */
  pageSize?: number;
  /** The next_page_token value returned from a previous List request, if any. */
  pageToken?: string;
}

export const ListReferencesProjectsLocationsAddressGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    addressGroup: Schema.String.pipe(T.HttpPath("addressGroup")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+addressGroup}:listReferences" }),
    svc,
  ) as unknown as Schema.Codec<ListReferencesProjectsLocationsAddressGroupsRequest>;

export type ListReferencesProjectsLocationsAddressGroupsResponse =
  ListAddressGroupReferencesResponse;
export const ListReferencesProjectsLocationsAddressGroupsResponse =
  /*@__PURE__*/ ListAddressGroupReferencesResponse;

export type ListReferencesProjectsLocationsAddressGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists references of an address group. */
export const listReferencesProjectsLocationsAddressGroups: API.PaginatedOperationMethod<
  ListReferencesProjectsLocationsAddressGroupsRequest,
  ListReferencesProjectsLocationsAddressGroupsResponse,
  ListReferencesProjectsLocationsAddressGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListReferencesProjectsLocationsAddressGroupsRequest,
  output: ListReferencesProjectsLocationsAddressGroupsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsAddressGroupsRequest {
  /** Required. A name of the AddressGroup to get. Must be in the format `projects/* /locations/{location}/addressGroups/*`. */
  name: string;
}

export const GetProjectsLocationsAddressGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsAddressGroupsRequest>;

export type GetProjectsLocationsAddressGroupsResponse = AddressGroup;
export const GetProjectsLocationsAddressGroupsResponse =
  /*@__PURE__*/ AddressGroup;

export type GetProjectsLocationsAddressGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single address group. */
export const getProjectsLocationsAddressGroups: API.OperationMethod<
  GetProjectsLocationsAddressGroupsRequest,
  GetProjectsLocationsAddressGroupsResponse,
  GetProjectsLocationsAddressGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAddressGroupsRequest,
  output: GetProjectsLocationsAddressGroupsResponse,
  errors: [NotFound, Forbidden],
}));

export interface RemoveItemsProjectsLocationsAddressGroupsRequest {
  /** Required. A name of the AddressGroup to remove items from. Must be in the format `projects|organization/* /locations/{location}/addressGroups/*`. */
  addressGroup: string;
  /** Request body */
  body?: RemoveAddressGroupItemsRequest;
}

export const RemoveItemsProjectsLocationsAddressGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    addressGroup: Schema.String.pipe(T.HttpPath("addressGroup")),
    body: Schema.optional(RemoveAddressGroupItemsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+addressGroup}:removeItems",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<RemoveItemsProjectsLocationsAddressGroupsRequest>;

export type RemoveItemsProjectsLocationsAddressGroupsResponse = Operation;
export const RemoveItemsProjectsLocationsAddressGroupsResponse =
  /*@__PURE__*/ Operation;

export type RemoveItemsProjectsLocationsAddressGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Removes items from an address group. */
export const removeItemsProjectsLocationsAddressGroups: API.OperationMethod<
  RemoveItemsProjectsLocationsAddressGroupsRequest,
  RemoveItemsProjectsLocationsAddressGroupsResponse,
  RemoveItemsProjectsLocationsAddressGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RemoveItemsProjectsLocationsAddressGroupsRequest,
  output: RemoveItemsProjectsLocationsAddressGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsMirroringEndpointGroupAssociationsRequest {
  /** Required. The name of the association to retrieve. Format: projects/{project}/locations/{location}/mirroringEndpointGroupAssociations/{mirroring_endpoint_group_association} */
  name: string;
}

export const GetProjectsLocationsMirroringEndpointGroupAssociationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsMirroringEndpointGroupAssociationsRequest>;

export type GetProjectsLocationsMirroringEndpointGroupAssociationsResponse =
  MirroringEndpointGroupAssociation;
export const GetProjectsLocationsMirroringEndpointGroupAssociationsResponse =
  /*@__PURE__*/ MirroringEndpointGroupAssociation;

export type GetProjectsLocationsMirroringEndpointGroupAssociationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a specific association. See https://google.aip.dev/131. */
export const getProjectsLocationsMirroringEndpointGroupAssociations: API.OperationMethod<
  GetProjectsLocationsMirroringEndpointGroupAssociationsRequest,
  GetProjectsLocationsMirroringEndpointGroupAssociationsResponse,
  GetProjectsLocationsMirroringEndpointGroupAssociationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsMirroringEndpointGroupAssociationsRequest,
  output: GetProjectsLocationsMirroringEndpointGroupAssociationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsMirroringEndpointGroupAssociationsRequest {
  /** Immutable. Identifier. The resource name of this endpoint group association, for example: `projects/123456789/locations/global/mirroringEndpointGroupAssociations/my-eg-association`. See https://google.aip.dev/122 for more details. */
  name: string;
  /** Optional. The list of fields to update. Fields are specified relative to the association (e.g. `description`; *not* `mirroring_endpoint_group_association.description`). See https://google.aip.dev/161 for more details. */
  updateMask?: string;
  /** Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. */
  requestId?: string;
  /** Request body */
  body?: MirroringEndpointGroupAssociation;
}

export const PatchProjectsLocationsMirroringEndpointGroupAssociationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(MirroringEndpointGroupAssociation).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsMirroringEndpointGroupAssociationsRequest>;

export type PatchProjectsLocationsMirroringEndpointGroupAssociationsResponse =
  Operation;
export const PatchProjectsLocationsMirroringEndpointGroupAssociationsResponse =
  /*@__PURE__*/ Operation;

export type PatchProjectsLocationsMirroringEndpointGroupAssociationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an association. See https://google.aip.dev/134. */
export const patchProjectsLocationsMirroringEndpointGroupAssociations: API.OperationMethod<
  PatchProjectsLocationsMirroringEndpointGroupAssociationsRequest,
  PatchProjectsLocationsMirroringEndpointGroupAssociationsResponse,
  PatchProjectsLocationsMirroringEndpointGroupAssociationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsMirroringEndpointGroupAssociationsRequest,
  output: PatchProjectsLocationsMirroringEndpointGroupAssociationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsMirroringEndpointGroupAssociationsRequest {
  /** Required. The parent resource where this association will be created. Format: projects/{project}/locations/{location} */
  parent: string;
  /** Optional. The ID to use for the new association, which will become the final component of the endpoint group's resource name. If not provided, the server will generate a unique ID. */
  mirroringEndpointGroupAssociationId?: string;
  /** Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. */
  requestId?: string;
  /** Request body */
  body?: MirroringEndpointGroupAssociation;
}

export const CreateProjectsLocationsMirroringEndpointGroupAssociationsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    mirroringEndpointGroupAssociationId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("mirroringEndpointGroupAssociationId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(MirroringEndpointGroupAssociation).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/mirroringEndpointGroupAssociations",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsMirroringEndpointGroupAssociationsRequest>;

export type CreateProjectsLocationsMirroringEndpointGroupAssociationsResponse =
  Operation;
export const CreateProjectsLocationsMirroringEndpointGroupAssociationsResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsMirroringEndpointGroupAssociationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates an association in a given project and location. See https://google.aip.dev/133. */
export const createProjectsLocationsMirroringEndpointGroupAssociations: API.OperationMethod<
  CreateProjectsLocationsMirroringEndpointGroupAssociationsRequest,
  CreateProjectsLocationsMirroringEndpointGroupAssociationsResponse,
  CreateProjectsLocationsMirroringEndpointGroupAssociationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsMirroringEndpointGroupAssociationsRequest,
  output: CreateProjectsLocationsMirroringEndpointGroupAssociationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsMirroringEndpointGroupAssociationsRequest {
  /** Required. The association to delete. */
  name: string;
  /** Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. */
  requestId?: string;
}

export const DeleteProjectsLocationsMirroringEndpointGroupAssociationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsMirroringEndpointGroupAssociationsRequest>;

export type DeleteProjectsLocationsMirroringEndpointGroupAssociationsResponse =
  Operation;
export const DeleteProjectsLocationsMirroringEndpointGroupAssociationsResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsMirroringEndpointGroupAssociationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an association. See https://google.aip.dev/135. */
export const deleteProjectsLocationsMirroringEndpointGroupAssociations: API.OperationMethod<
  DeleteProjectsLocationsMirroringEndpointGroupAssociationsRequest,
  DeleteProjectsLocationsMirroringEndpointGroupAssociationsResponse,
  DeleteProjectsLocationsMirroringEndpointGroupAssociationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsMirroringEndpointGroupAssociationsRequest,
  output: DeleteProjectsLocationsMirroringEndpointGroupAssociationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsMirroringEndpointGroupAssociationsRequest {
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. See https://google.aip.dev/158 for more details. */
  pageSize?: number;
  /** Optional. Sort expression. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Required. The parent, which owns this collection of associations. Example: `projects/123456789/locations/global`. See https://google.aip.dev/132 for more details. */
  parent: string;
  /** Optional. A page token, received from a previous `ListMirroringEndpointGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMirroringEndpointGroups` must match the call that provided the page token. See https://google.aip.dev/158 for more details. */
  pageToken?: string;
  /** Optional. Filter expression. See https://google.aip.dev/160#filtering for more details. */
  filter?: string;
}

export const ListProjectsLocationsMirroringEndpointGroupAssociationsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1beta1/{+parent}/mirroringEndpointGroupAssociations",
    }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsMirroringEndpointGroupAssociationsRequest>;

export type ListProjectsLocationsMirroringEndpointGroupAssociationsResponse =
  ListMirroringEndpointGroupAssociationsResponse;
export const ListProjectsLocationsMirroringEndpointGroupAssociationsResponse =
  /*@__PURE__*/ ListMirroringEndpointGroupAssociationsResponse;

export type ListProjectsLocationsMirroringEndpointGroupAssociationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists associations in a given project and location. See https://google.aip.dev/132. */
export const listProjectsLocationsMirroringEndpointGroupAssociations: API.PaginatedOperationMethod<
  ListProjectsLocationsMirroringEndpointGroupAssociationsRequest,
  ListProjectsLocationsMirroringEndpointGroupAssociationsResponse,
  ListProjectsLocationsMirroringEndpointGroupAssociationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsMirroringEndpointGroupAssociationsRequest,
  output: ListProjectsLocationsMirroringEndpointGroupAssociationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsServerTlsPoliciesRequest {
  /** Maximum number of ServerTlsPolicies to return per call. */
  pageSize?: number;
  /** Optional. Setting this field to `true` will opt the request into returning the resources that are reachable, and into including the names of those that were unreachable in the [ListServerTlsPoliciesResponse.unreachable] field. This can only be `true` when reading across collections e.g. when `parent` is set to `"projects/example/locations/-"`. */
  returnPartialSuccess?: boolean;
  /** Required. The project and location from which the ServerTlsPolicies should be listed, specified in the format `projects/* /locations/{location}`. */
  parent: string;
  /** The value returned by the last `ListServerTlsPoliciesResponse` Indicates that this is a continuation of a prior `ListServerTlsPolicies` call, and that the system should return the next page of data. */
  pageToken?: string;
}

export const ListProjectsLocationsServerTlsPoliciesRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/serverTlsPolicies" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsServerTlsPoliciesRequest>;

export type ListProjectsLocationsServerTlsPoliciesResponse =
  ListServerTlsPoliciesResponse;
export const ListProjectsLocationsServerTlsPoliciesResponse =
  /*@__PURE__*/ ListServerTlsPoliciesResponse;

export type ListProjectsLocationsServerTlsPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists ServerTlsPolicies in a given project and location. */
export const listProjectsLocationsServerTlsPolicies: API.PaginatedOperationMethod<
  ListProjectsLocationsServerTlsPoliciesRequest,
  ListProjectsLocationsServerTlsPoliciesResponse,
  ListProjectsLocationsServerTlsPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsServerTlsPoliciesRequest,
  output: ListProjectsLocationsServerTlsPoliciesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetIamPolicyProjectsLocationsServerTlsPoliciesRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsServerTlsPoliciesRequest =
  /*@__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Codec<GetIamPolicyProjectsLocationsServerTlsPoliciesRequest>;

export type GetIamPolicyProjectsLocationsServerTlsPoliciesResponse =
  GoogleIamV1Policy;
export const GetIamPolicyProjectsLocationsServerTlsPoliciesResponse =
  /*@__PURE__*/ GoogleIamV1Policy;

export type GetIamPolicyProjectsLocationsServerTlsPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsServerTlsPolicies: API.OperationMethod<
  GetIamPolicyProjectsLocationsServerTlsPoliciesRequest,
  GetIamPolicyProjectsLocationsServerTlsPoliciesResponse,
  GetIamPolicyProjectsLocationsServerTlsPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsServerTlsPoliciesRequest,
  output: GetIamPolicyProjectsLocationsServerTlsPoliciesResponse,
  errors: [NotFound, Forbidden],
}));

export interface TestIamPermissionsProjectsLocationsServerTlsPoliciesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsServerTlsPoliciesRequest =
  /*@__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1TestIamPermissionsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<TestIamPermissionsProjectsLocationsServerTlsPoliciesRequest>;

export type TestIamPermissionsProjectsLocationsServerTlsPoliciesResponse =
  GoogleIamV1TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsServerTlsPoliciesResponse =
  /*@__PURE__*/ GoogleIamV1TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsServerTlsPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsServerTlsPolicies: API.OperationMethod<
  TestIamPermissionsProjectsLocationsServerTlsPoliciesRequest,
  TestIamPermissionsProjectsLocationsServerTlsPoliciesResponse,
  TestIamPermissionsProjectsLocationsServerTlsPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsServerTlsPoliciesRequest,
  output: TestIamPermissionsProjectsLocationsServerTlsPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsServerTlsPoliciesRequest {
  /** Required. A name of the ServerTlsPolicy to delete. Must be in the format `projects/* /locations/{location}/serverTlsPolicies/*`. */
  name: string;
}

export const DeleteProjectsLocationsServerTlsPoliciesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsServerTlsPoliciesRequest>;

export type DeleteProjectsLocationsServerTlsPoliciesResponse = Operation;
export const DeleteProjectsLocationsServerTlsPoliciesResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsServerTlsPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single ServerTlsPolicy. */
export const deleteProjectsLocationsServerTlsPolicies: API.OperationMethod<
  DeleteProjectsLocationsServerTlsPoliciesRequest,
  DeleteProjectsLocationsServerTlsPoliciesResponse,
  DeleteProjectsLocationsServerTlsPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsServerTlsPoliciesRequest,
  output: DeleteProjectsLocationsServerTlsPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsServerTlsPoliciesRequest {
  /** Required. The parent resource of the ServerTlsPolicy. Must be in the format `projects/* /locations/{location}`. */
  parent: string;
  /** Required. Short name of the ServerTlsPolicy resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "server_mtls_policy". */
  serverTlsPolicyId?: string;
  /** Request body */
  body?: ServerTlsPolicy;
}

export const CreateProjectsLocationsServerTlsPoliciesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    serverTlsPolicyId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("serverTlsPolicyId"),
    ),
    body: Schema.optional(ServerTlsPolicy).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/serverTlsPolicies",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsServerTlsPoliciesRequest>;

export type CreateProjectsLocationsServerTlsPoliciesResponse = Operation;
export const CreateProjectsLocationsServerTlsPoliciesResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsServerTlsPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new ServerTlsPolicy in a given project and location. */
export const createProjectsLocationsServerTlsPolicies: API.OperationMethod<
  CreateProjectsLocationsServerTlsPoliciesRequest,
  CreateProjectsLocationsServerTlsPoliciesResponse,
  CreateProjectsLocationsServerTlsPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsServerTlsPoliciesRequest,
  output: CreateProjectsLocationsServerTlsPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsServerTlsPoliciesRequest {
  /** Required. A name of the ServerTlsPolicy to get. Must be in the format `projects/* /locations/{location}/serverTlsPolicies/*`. */
  name: string;
}

export const GetProjectsLocationsServerTlsPoliciesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsServerTlsPoliciesRequest>;

export type GetProjectsLocationsServerTlsPoliciesResponse = ServerTlsPolicy;
export const GetProjectsLocationsServerTlsPoliciesResponse =
  /*@__PURE__*/ ServerTlsPolicy;

export type GetProjectsLocationsServerTlsPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single ServerTlsPolicy. */
export const getProjectsLocationsServerTlsPolicies: API.OperationMethod<
  GetProjectsLocationsServerTlsPoliciesRequest,
  GetProjectsLocationsServerTlsPoliciesResponse,
  GetProjectsLocationsServerTlsPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsServerTlsPoliciesRequest,
  output: GetProjectsLocationsServerTlsPoliciesResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsServerTlsPoliciesRequest {
  /** Required. Name of the ServerTlsPolicy resource. It matches the pattern `projects/* /locations/{location}/serverTlsPolicies/{server_tls_policy}` */
  name: string;
  /** Optional. Field mask is used to specify the fields to be overwritten in the ServerTlsPolicy resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Request body */
  body?: ServerTlsPolicy;
}

export const PatchProjectsLocationsServerTlsPoliciesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(ServerTlsPolicy).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsServerTlsPoliciesRequest>;

export type PatchProjectsLocationsServerTlsPoliciesResponse = Operation;
export const PatchProjectsLocationsServerTlsPoliciesResponse =
  /*@__PURE__*/ Operation;

export type PatchProjectsLocationsServerTlsPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single ServerTlsPolicy. */
export const patchProjectsLocationsServerTlsPolicies: API.OperationMethod<
  PatchProjectsLocationsServerTlsPoliciesRequest,
  PatchProjectsLocationsServerTlsPoliciesResponse,
  PatchProjectsLocationsServerTlsPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsServerTlsPoliciesRequest,
  output: PatchProjectsLocationsServerTlsPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsServerTlsPoliciesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsServerTlsPoliciesRequest =
  /*@__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<SetIamPolicyProjectsLocationsServerTlsPoliciesRequest>;

export type SetIamPolicyProjectsLocationsServerTlsPoliciesResponse =
  GoogleIamV1Policy;
export const SetIamPolicyProjectsLocationsServerTlsPoliciesResponse =
  /*@__PURE__*/ GoogleIamV1Policy;

export type SetIamPolicyProjectsLocationsServerTlsPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsServerTlsPolicies: API.OperationMethod<
  SetIamPolicyProjectsLocationsServerTlsPoliciesRequest,
  SetIamPolicyProjectsLocationsServerTlsPoliciesResponse,
  SetIamPolicyProjectsLocationsServerTlsPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsServerTlsPoliciesRequest,
  output: SetIamPolicyProjectsLocationsServerTlsPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsSacAttachmentsRequest {
  /** Required. Name of the resource, in the form `projects/{project}/locations/{location}/sacAttachments/{sac_attachment}`. */
  name: string;
}

export const GetProjectsLocationsSacAttachmentsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsSacAttachmentsRequest>;

export type GetProjectsLocationsSacAttachmentsResponse = SACAttachment;
export const GetProjectsLocationsSacAttachmentsResponse =
  /*@__PURE__*/ SACAttachment;

export type GetProjectsLocationsSacAttachmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns the specified attachment. */
export const getProjectsLocationsSacAttachments: API.OperationMethod<
  GetProjectsLocationsSacAttachmentsRequest,
  GetProjectsLocationsSacAttachmentsResponse,
  GetProjectsLocationsSacAttachmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsSacAttachmentsRequest,
  output: GetProjectsLocationsSacAttachmentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsSacAttachmentsRequest {
  /** Required. Name of the resource, in the form `projects/{project}/locations/{location}/sacAttachments/{sac_attachment}`. */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsSacAttachmentsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsSacAttachmentsRequest>;

export type DeleteProjectsLocationsSacAttachmentsResponse = Operation;
export const DeleteProjectsLocationsSacAttachmentsResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsSacAttachmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the specified attachment. */
export const deleteProjectsLocationsSacAttachments: API.OperationMethod<
  DeleteProjectsLocationsSacAttachmentsRequest,
  DeleteProjectsLocationsSacAttachmentsResponse,
  DeleteProjectsLocationsSacAttachmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsSacAttachmentsRequest,
  output: DeleteProjectsLocationsSacAttachmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsSacAttachmentsRequest {
  /** Optional. An expression that filters the list of results. */
  filter?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. Sort the results by a certain order. */
  orderBy?: string;
  /** Required. The parent, in the form `projects/{project}/locations/{location}`. */
  parent: string;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
}

export const ListProjectsLocationsSacAttachmentsRequest =
  /*@__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/sacAttachments" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsSacAttachmentsRequest>;

export type ListProjectsLocationsSacAttachmentsResponse =
  ListSACAttachmentsResponse;
export const ListProjectsLocationsSacAttachmentsResponse =
  /*@__PURE__*/ ListSACAttachmentsResponse;

export type ListProjectsLocationsSacAttachmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists SACAttachments in a given project and location. */
export const listProjectsLocationsSacAttachments: API.PaginatedOperationMethod<
  ListProjectsLocationsSacAttachmentsRequest,
  ListProjectsLocationsSacAttachmentsResponse,
  ListProjectsLocationsSacAttachmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsSacAttachmentsRequest,
  output: ListProjectsLocationsSacAttachmentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsSacAttachmentsRequest {
  /** Required. The parent, in the form `projects/{project}/locations/{location}`. */
  parent: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. ID of the created attachment. The ID must be 1-63 characters long, and comply with RFC1035. Specifically, it must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash. */
  sacAttachmentId?: string;
  /** Request body */
  body?: SACAttachment;
}

export const CreateProjectsLocationsSacAttachmentsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    sacAttachmentId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("sacAttachmentId"),
    ),
    body: Schema.optional(SACAttachment).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/sacAttachments",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsSacAttachmentsRequest>;

export type CreateProjectsLocationsSacAttachmentsResponse = Operation;
export const CreateProjectsLocationsSacAttachmentsResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsSacAttachmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new SACAttachment in a given project and location. */
export const createProjectsLocationsSacAttachments: API.OperationMethod<
  CreateProjectsLocationsSacAttachmentsRequest,
  CreateProjectsLocationsSacAttachmentsResponse,
  CreateProjectsLocationsSacAttachmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsSacAttachmentsRequest,
  output: CreateProjectsLocationsSacAttachmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsMirroringEndpointGroupsRequest {
  /** Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. */
  requestId?: string;
  /** Required. The parent resource where this endpoint group will be created. Format: projects/{project}/locations/{location} */
  parent: string;
  /** Required. The ID to use for the endpoint group, which will become the final component of the endpoint group's resource name. */
  mirroringEndpointGroupId?: string;
  /** Request body */
  body?: MirroringEndpointGroup;
}

export const CreateProjectsLocationsMirroringEndpointGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    mirroringEndpointGroupId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("mirroringEndpointGroupId"),
    ),
    body: Schema.optional(MirroringEndpointGroup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/mirroringEndpointGroups",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsMirroringEndpointGroupsRequest>;

export type CreateProjectsLocationsMirroringEndpointGroupsResponse = Operation;
export const CreateProjectsLocationsMirroringEndpointGroupsResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsMirroringEndpointGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates an endpoint group in a given project and location. See https://google.aip.dev/133. */
export const createProjectsLocationsMirroringEndpointGroups: API.OperationMethod<
  CreateProjectsLocationsMirroringEndpointGroupsRequest,
  CreateProjectsLocationsMirroringEndpointGroupsResponse,
  CreateProjectsLocationsMirroringEndpointGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsMirroringEndpointGroupsRequest,
  output: CreateProjectsLocationsMirroringEndpointGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsMirroringEndpointGroupsRequest {
  /** Required. The name of the endpoint group to retrieve. Format: projects/{project}/locations/{location}/mirroringEndpointGroups/{mirroring_endpoint_group} */
  name: string;
}

export const GetProjectsLocationsMirroringEndpointGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsMirroringEndpointGroupsRequest>;

export type GetProjectsLocationsMirroringEndpointGroupsResponse =
  MirroringEndpointGroup;
export const GetProjectsLocationsMirroringEndpointGroupsResponse =
  /*@__PURE__*/ MirroringEndpointGroup;

export type GetProjectsLocationsMirroringEndpointGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a specific endpoint group. See https://google.aip.dev/131. */
export const getProjectsLocationsMirroringEndpointGroups: API.OperationMethod<
  GetProjectsLocationsMirroringEndpointGroupsRequest,
  GetProjectsLocationsMirroringEndpointGroupsResponse,
  GetProjectsLocationsMirroringEndpointGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsMirroringEndpointGroupsRequest,
  output: GetProjectsLocationsMirroringEndpointGroupsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsMirroringEndpointGroupsRequest {
  /** Immutable. Identifier. The resource name of this endpoint group, for example: `projects/123456789/locations/global/mirroringEndpointGroups/my-eg`. See https://google.aip.dev/122 for more details. */
  name: string;
  /** Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. */
  requestId?: string;
  /** Optional. The list of fields to update. Fields are specified relative to the endpoint group (e.g. `description`; *not* `mirroring_endpoint_group.description`). See https://google.aip.dev/161 for more details. */
  updateMask?: string;
  /** Request body */
  body?: MirroringEndpointGroup;
}

export const PatchProjectsLocationsMirroringEndpointGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(MirroringEndpointGroup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsMirroringEndpointGroupsRequest>;

export type PatchProjectsLocationsMirroringEndpointGroupsResponse = Operation;
export const PatchProjectsLocationsMirroringEndpointGroupsResponse =
  /*@__PURE__*/ Operation;

export type PatchProjectsLocationsMirroringEndpointGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an endpoint group. See https://google.aip.dev/134. */
export const patchProjectsLocationsMirroringEndpointGroups: API.OperationMethod<
  PatchProjectsLocationsMirroringEndpointGroupsRequest,
  PatchProjectsLocationsMirroringEndpointGroupsResponse,
  PatchProjectsLocationsMirroringEndpointGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsMirroringEndpointGroupsRequest,
  output: PatchProjectsLocationsMirroringEndpointGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsMirroringEndpointGroupsRequest {
  /** Required. The parent, which owns this collection of endpoint groups. Example: `projects/123456789/locations/global`. See https://google.aip.dev/132 for more details. */
  parent: string;
  /** Optional. A page token, received from a previous `ListMirroringEndpointGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMirroringEndpointGroups` must match the call that provided the page token. See https://google.aip.dev/158 for more details. */
  pageToken?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. See https://google.aip.dev/158 for more details. */
  pageSize?: number;
  /** Optional. Sort expression. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Optional. Filter expression. See https://google.aip.dev/160#filtering for more details. */
  filter?: string;
}

export const ListProjectsLocationsMirroringEndpointGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1beta1/{+parent}/mirroringEndpointGroups",
    }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsMirroringEndpointGroupsRequest>;

export type ListProjectsLocationsMirroringEndpointGroupsResponse =
  ListMirroringEndpointGroupsResponse;
export const ListProjectsLocationsMirroringEndpointGroupsResponse =
  /*@__PURE__*/ ListMirroringEndpointGroupsResponse;

export type ListProjectsLocationsMirroringEndpointGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists endpoint groups in a given project and location. See https://google.aip.dev/132. */
export const listProjectsLocationsMirroringEndpointGroups: API.PaginatedOperationMethod<
  ListProjectsLocationsMirroringEndpointGroupsRequest,
  ListProjectsLocationsMirroringEndpointGroupsResponse,
  ListProjectsLocationsMirroringEndpointGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsMirroringEndpointGroupsRequest,
  output: ListProjectsLocationsMirroringEndpointGroupsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsMirroringEndpointGroupsRequest {
  /** Required. The endpoint group to delete. */
  name: string;
  /** Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. */
  requestId?: string;
}

export const DeleteProjectsLocationsMirroringEndpointGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsMirroringEndpointGroupsRequest>;

export type DeleteProjectsLocationsMirroringEndpointGroupsResponse = Operation;
export const DeleteProjectsLocationsMirroringEndpointGroupsResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsMirroringEndpointGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an endpoint group. See https://google.aip.dev/135. */
export const deleteProjectsLocationsMirroringEndpointGroups: API.OperationMethod<
  DeleteProjectsLocationsMirroringEndpointGroupsRequest,
  DeleteProjectsLocationsMirroringEndpointGroupsResponse,
  DeleteProjectsLocationsMirroringEndpointGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsMirroringEndpointGroupsRequest,
  output: DeleteProjectsLocationsMirroringEndpointGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsFirewallEndpointsRequest {
  /** Required. Name of the resource */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsFirewallEndpointsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsFirewallEndpointsRequest>;

export type DeleteProjectsLocationsFirewallEndpointsResponse = Operation;
export const DeleteProjectsLocationsFirewallEndpointsResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsFirewallEndpointsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single project Endpoint. */
export const deleteProjectsLocationsFirewallEndpoints: API.OperationMethod<
  DeleteProjectsLocationsFirewallEndpointsRequest,
  DeleteProjectsLocationsFirewallEndpointsResponse,
  DeleteProjectsLocationsFirewallEndpointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsFirewallEndpointsRequest,
  output: DeleteProjectsLocationsFirewallEndpointsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsFirewallEndpointsRequest {
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Hint for how to order the results */
  orderBy?: string;
  /** Required. Parent value for ListEndpointsRequest */
  parent: string;
  /** A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Optional. Filtering results */
  filter?: string;
}

export const ListProjectsLocationsFirewallEndpointsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/firewallEndpoints" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsFirewallEndpointsRequest>;

export type ListProjectsLocationsFirewallEndpointsResponse =
  ListFirewallEndpointsResponse;
export const ListProjectsLocationsFirewallEndpointsResponse =
  /*@__PURE__*/ ListFirewallEndpointsResponse;

export type ListProjectsLocationsFirewallEndpointsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists FirewallEndpoints in a given project and location. */
export const listProjectsLocationsFirewallEndpoints: API.PaginatedOperationMethod<
  ListProjectsLocationsFirewallEndpointsRequest,
  ListProjectsLocationsFirewallEndpointsResponse,
  ListProjectsLocationsFirewallEndpointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsFirewallEndpointsRequest,
  output: ListProjectsLocationsFirewallEndpointsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsFirewallEndpointsRequest {
  /** Required. Name of the resource */
  name: string;
}

export const GetProjectsLocationsFirewallEndpointsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsFirewallEndpointsRequest>;

export type GetProjectsLocationsFirewallEndpointsResponse = FirewallEndpoint;
export const GetProjectsLocationsFirewallEndpointsResponse =
  /*@__PURE__*/ FirewallEndpoint;

export type GetProjectsLocationsFirewallEndpointsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single project Endpoint. */
export const getProjectsLocationsFirewallEndpoints: API.OperationMethod<
  GetProjectsLocationsFirewallEndpointsRequest,
  GetProjectsLocationsFirewallEndpointsResponse,
  GetProjectsLocationsFirewallEndpointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsFirewallEndpointsRequest,
  output: GetProjectsLocationsFirewallEndpointsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsFirewallEndpointsRequest {
  /** Immutable. Identifier. Name of resource. */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Field mask is used to specify the fields to be overwritten in the Endpoint resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Request body */
  body?: FirewallEndpoint;
}

export const PatchProjectsLocationsFirewallEndpointsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(FirewallEndpoint).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsFirewallEndpointsRequest>;

export type PatchProjectsLocationsFirewallEndpointsResponse = Operation;
export const PatchProjectsLocationsFirewallEndpointsResponse =
  /*@__PURE__*/ Operation;

export type PatchProjectsLocationsFirewallEndpointsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update a single project Endpoint. */
export const patchProjectsLocationsFirewallEndpoints: API.OperationMethod<
  PatchProjectsLocationsFirewallEndpointsRequest,
  PatchProjectsLocationsFirewallEndpointsResponse,
  PatchProjectsLocationsFirewallEndpointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsFirewallEndpointsRequest,
  output: PatchProjectsLocationsFirewallEndpointsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsFirewallEndpointsRequest {
  /** Required. Value for parent. */
  parent: string;
  /** Required. Id of the requesting object. If auto-generating Id server-side, remove this field and firewall_endpoint_id from the method_signature of Create RPC. */
  firewallEndpointId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: FirewallEndpoint;
}

export const CreateProjectsLocationsFirewallEndpointsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    firewallEndpointId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("firewallEndpointId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(FirewallEndpoint).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/firewallEndpoints",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsFirewallEndpointsRequest>;

export type CreateProjectsLocationsFirewallEndpointsResponse = Operation;
export const CreateProjectsLocationsFirewallEndpointsResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsFirewallEndpointsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new FirewallEndpoint in a given project and location. */
export const createProjectsLocationsFirewallEndpoints: API.OperationMethod<
  CreateProjectsLocationsFirewallEndpointsRequest,
  CreateProjectsLocationsFirewallEndpointsResponse,
  CreateProjectsLocationsFirewallEndpointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsFirewallEndpointsRequest,
  output: CreateProjectsLocationsFirewallEndpointsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsFirewallEndpointsWildfireVerdictChangeRequestsRequest {
  /** Required. Name of the WildfireVerdictChangeRequest to retrieve. Format: organizations|projects/{project_or_organization}/locations/{location}/firewallEndpoints/{firewall_endpoint}/wildfireVerdictChangeRequests/{wildfire_verdict_change_request_id} Where {wildfire_verdict_change_request_id} is the ID in the format: ^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$ */
  name: string;
}

export const GetProjectsLocationsFirewallEndpointsWildfireVerdictChangeRequestsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsFirewallEndpointsWildfireVerdictChangeRequestsRequest>;

export type GetProjectsLocationsFirewallEndpointsWildfireVerdictChangeRequestsResponse =
  WildfireVerdictChangeRequest;
export const GetProjectsLocationsFirewallEndpointsWildfireVerdictChangeRequestsResponse =
  /*@__PURE__*/ WildfireVerdictChangeRequest;

export type GetProjectsLocationsFirewallEndpointsWildfireVerdictChangeRequestsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get WildfireVerdictChangeRequest in a given Firewall Endpoint in a project and location. */
export const getProjectsLocationsFirewallEndpointsWildfireVerdictChangeRequests: API.OperationMethod<
  GetProjectsLocationsFirewallEndpointsWildfireVerdictChangeRequestsRequest,
  GetProjectsLocationsFirewallEndpointsWildfireVerdictChangeRequestsResponse,
  GetProjectsLocationsFirewallEndpointsWildfireVerdictChangeRequestsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input:
    GetProjectsLocationsFirewallEndpointsWildfireVerdictChangeRequestsRequest,
  output:
    GetProjectsLocationsFirewallEndpointsWildfireVerdictChangeRequestsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsFirewallEndpointsWildfireVerdictChangeRequestsRequest {
  /** Required. Parent value for ListWildfireVerdictChangeRequestsRequest. The parent is a firewall endpoint resource. Format: organizations|projects/{project_or_organization}/locations/{location}/firewallEndpoints/{firewall_endpoint} */
  parent: string;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. Filter expression to filter the results. See AIP-160 for filtering syntax. Supported fields are: - `sha256` (string, equality only, e.g. `sha256 = "..."`) - `state` (enum, equality only, e.g. `state = "ACTIVE"`) - `create_time` (timestamp, comparisons, e.g. `create_time > "2026-01-01T00:00:00Z"`) */
  filter?: string;
}

export const ListProjectsLocationsFirewallEndpointsWildfireVerdictChangeRequestsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1beta1/{+parent}/wildfireVerdictChangeRequests",
    }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsFirewallEndpointsWildfireVerdictChangeRequestsRequest>;

export type ListProjectsLocationsFirewallEndpointsWildfireVerdictChangeRequestsResponse =
  ListWildfireVerdictChangeRequestsResponse;
export const ListProjectsLocationsFirewallEndpointsWildfireVerdictChangeRequestsResponse =
  /*@__PURE__*/ ListWildfireVerdictChangeRequestsResponse;

export type ListProjectsLocationsFirewallEndpointsWildfireVerdictChangeRequestsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists WildfireVerdictChangeRequests in a given Firewall Endpoint in a project and location. */
export const listProjectsLocationsFirewallEndpointsWildfireVerdictChangeRequests: API.PaginatedOperationMethod<
  ListProjectsLocationsFirewallEndpointsWildfireVerdictChangeRequestsRequest,
  ListProjectsLocationsFirewallEndpointsWildfireVerdictChangeRequestsResponse,
  ListProjectsLocationsFirewallEndpointsWildfireVerdictChangeRequestsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input:
    ListProjectsLocationsFirewallEndpointsWildfireVerdictChangeRequestsRequest,
  output:
    ListProjectsLocationsFirewallEndpointsWildfireVerdictChangeRequestsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsFirewallEndpointsWildfireVerdictChangeRequestsRequest {
  /** Required. Parent value for CreateWildfireVerdictChangeRequestRequest. The parent is a firewall endpoint resource. Format: organizations|projects/{project_or_organization}/locations/{location}/firewallEndpoints/{firewall_endpoint} */
  parent: string;
  /** Request body */
  body?: WildfireVerdictChangeRequest;
}

export const CreateProjectsLocationsFirewallEndpointsWildfireVerdictChangeRequestsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(WildfireVerdictChangeRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/wildfireVerdictChangeRequests",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsFirewallEndpointsWildfireVerdictChangeRequestsRequest>;

export type CreateProjectsLocationsFirewallEndpointsWildfireVerdictChangeRequestsResponse =
  WildfireVerdictChangeRequest;
export const CreateProjectsLocationsFirewallEndpointsWildfireVerdictChangeRequestsResponse =
  /*@__PURE__*/ WildfireVerdictChangeRequest;

export type CreateProjectsLocationsFirewallEndpointsWildfireVerdictChangeRequestsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create WildfireVerdictChangeRequest in a given Firewall Endpoint in a project and location. */
export const createProjectsLocationsFirewallEndpointsWildfireVerdictChangeRequests: API.OperationMethod<
  CreateProjectsLocationsFirewallEndpointsWildfireVerdictChangeRequestsRequest,
  CreateProjectsLocationsFirewallEndpointsWildfireVerdictChangeRequestsResponse,
  CreateProjectsLocationsFirewallEndpointsWildfireVerdictChangeRequestsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input:
    CreateProjectsLocationsFirewallEndpointsWildfireVerdictChangeRequestsRequest,
  output:
    CreateProjectsLocationsFirewallEndpointsWildfireVerdictChangeRequestsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsBackendAuthenticationConfigsRequest {
  /** Required. A name of the BackendAuthenticationConfig to get. Must be in the format `projects/* /locations/{location}/backendAuthenticationConfigs/*`. */
  name: string;
}

export const GetProjectsLocationsBackendAuthenticationConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsBackendAuthenticationConfigsRequest>;

export type GetProjectsLocationsBackendAuthenticationConfigsResponse =
  BackendAuthenticationConfig;
export const GetProjectsLocationsBackendAuthenticationConfigsResponse =
  /*@__PURE__*/ BackendAuthenticationConfig;

export type GetProjectsLocationsBackendAuthenticationConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single BackendAuthenticationConfig to BackendAuthenticationConfig. */
export const getProjectsLocationsBackendAuthenticationConfigs: API.OperationMethod<
  GetProjectsLocationsBackendAuthenticationConfigsRequest,
  GetProjectsLocationsBackendAuthenticationConfigsResponse,
  GetProjectsLocationsBackendAuthenticationConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsBackendAuthenticationConfigsRequest,
  output: GetProjectsLocationsBackendAuthenticationConfigsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsBackendAuthenticationConfigsRequest {
  /** Required. Name of the BackendAuthenticationConfig resource. It matches the pattern `projects/* /locations/{location}/backendAuthenticationConfigs/{backend_authentication_config}` */
  name: string;
  /** Optional. Field mask is used to specify the fields to be overwritten in the BackendAuthenticationConfig resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Request body */
  body?: BackendAuthenticationConfig;
}

export const PatchProjectsLocationsBackendAuthenticationConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(BackendAuthenticationConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsBackendAuthenticationConfigsRequest>;

export type PatchProjectsLocationsBackendAuthenticationConfigsResponse =
  Operation;
export const PatchProjectsLocationsBackendAuthenticationConfigsResponse =
  /*@__PURE__*/ Operation;

export type PatchProjectsLocationsBackendAuthenticationConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single BackendAuthenticationConfig to BackendAuthenticationConfig. */
export const patchProjectsLocationsBackendAuthenticationConfigs: API.OperationMethod<
  PatchProjectsLocationsBackendAuthenticationConfigsRequest,
  PatchProjectsLocationsBackendAuthenticationConfigsResponse,
  PatchProjectsLocationsBackendAuthenticationConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsBackendAuthenticationConfigsRequest,
  output: PatchProjectsLocationsBackendAuthenticationConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsBackendAuthenticationConfigsRequest {
  /** Required. The parent resource of the BackendAuthenticationConfig. Must be in the format `projects/* /locations/{location}`. */
  parent: string;
  /** Required. Short name of the BackendAuthenticationConfig resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "backend-auth-config". */
  backendAuthenticationConfigId?: string;
  /** Request body */
  body?: BackendAuthenticationConfig;
}

export const CreateProjectsLocationsBackendAuthenticationConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    backendAuthenticationConfigId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("backendAuthenticationConfigId"),
    ),
    body: Schema.optional(BackendAuthenticationConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/backendAuthenticationConfigs",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsBackendAuthenticationConfigsRequest>;

export type CreateProjectsLocationsBackendAuthenticationConfigsResponse =
  Operation;
export const CreateProjectsLocationsBackendAuthenticationConfigsResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsBackendAuthenticationConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new BackendAuthenticationConfig in a given project and location. */
export const createProjectsLocationsBackendAuthenticationConfigs: API.OperationMethod<
  CreateProjectsLocationsBackendAuthenticationConfigsRequest,
  CreateProjectsLocationsBackendAuthenticationConfigsResponse,
  CreateProjectsLocationsBackendAuthenticationConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsBackendAuthenticationConfigsRequest,
  output: CreateProjectsLocationsBackendAuthenticationConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsBackendAuthenticationConfigsRequest {
  /** Required. A name of the BackendAuthenticationConfig to delete. Must be in the format `projects/* /locations/{location}/backendAuthenticationConfigs/*`. */
  name: string;
  /** Optional. Etag of the resource. If this is provided, it must match the server's etag. */
  etag?: string;
}

export const DeleteProjectsLocationsBackendAuthenticationConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsBackendAuthenticationConfigsRequest>;

export type DeleteProjectsLocationsBackendAuthenticationConfigsResponse =
  Operation;
export const DeleteProjectsLocationsBackendAuthenticationConfigsResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsBackendAuthenticationConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single BackendAuthenticationConfig to BackendAuthenticationConfig. */
export const deleteProjectsLocationsBackendAuthenticationConfigs: API.OperationMethod<
  DeleteProjectsLocationsBackendAuthenticationConfigsRequest,
  DeleteProjectsLocationsBackendAuthenticationConfigsResponse,
  DeleteProjectsLocationsBackendAuthenticationConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsBackendAuthenticationConfigsRequest,
  output: DeleteProjectsLocationsBackendAuthenticationConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsBackendAuthenticationConfigsRequest {
  /** Maximum number of BackendAuthenticationConfigs to return per call. */
  pageSize?: number;
  /** Required. The project and location from which the BackendAuthenticationConfigs should be listed, specified in the format `projects/* /locations/{location}`. */
  parent: string;
  /** The value returned by the last `ListBackendAuthenticationConfigsResponse` Indicates that this is a continuation of a prior `ListBackendAuthenticationConfigs` call, and that the system should return the next page of data. */
  pageToken?: string;
}

export const ListProjectsLocationsBackendAuthenticationConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1beta1/{+parent}/backendAuthenticationConfigs",
    }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsBackendAuthenticationConfigsRequest>;

export type ListProjectsLocationsBackendAuthenticationConfigsResponse =
  ListBackendAuthenticationConfigsResponse;
export const ListProjectsLocationsBackendAuthenticationConfigsResponse =
  /*@__PURE__*/ ListBackendAuthenticationConfigsResponse;

export type ListProjectsLocationsBackendAuthenticationConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists BackendAuthenticationConfigs in a given project and location. */
export const listProjectsLocationsBackendAuthenticationConfigs: API.PaginatedOperationMethod<
  ListProjectsLocationsBackendAuthenticationConfigsRequest,
  ListProjectsLocationsBackendAuthenticationConfigsResponse,
  ListProjectsLocationsBackendAuthenticationConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsBackendAuthenticationConfigsRequest,
  output: ListProjectsLocationsBackendAuthenticationConfigsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsMirroringDeploymentsRequest {
  /** Optional. Filter expression. See https://google.aip.dev/160#filtering for more details. */
  filter?: string;
  /** Required. The parent, which owns this collection of deployments. Example: `projects/123456789/locations/us-central1-a`. See https://google.aip.dev/132 for more details. */
  parent: string;
  /** Optional. A page token, received from a previous `ListMirroringDeployments` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMirroringDeployments` must match the call that provided the page token. See https://google.aip.dev/158 for more details. */
  pageToken?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. See https://google.aip.dev/158 for more details. */
  pageSize?: number;
  /** Optional. Sort expression. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
}

export const ListProjectsLocationsMirroringDeploymentsRequest =
  /*@__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/mirroringDeployments" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsMirroringDeploymentsRequest>;

export type ListProjectsLocationsMirroringDeploymentsResponse =
  ListMirroringDeploymentsResponse;
export const ListProjectsLocationsMirroringDeploymentsResponse =
  /*@__PURE__*/ ListMirroringDeploymentsResponse;

export type ListProjectsLocationsMirroringDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists deployments in a given project and location. See https://google.aip.dev/132. */
export const listProjectsLocationsMirroringDeployments: API.PaginatedOperationMethod<
  ListProjectsLocationsMirroringDeploymentsRequest,
  ListProjectsLocationsMirroringDeploymentsResponse,
  ListProjectsLocationsMirroringDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsMirroringDeploymentsRequest,
  output: ListProjectsLocationsMirroringDeploymentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsMirroringDeploymentsRequest {
  /** Required. Name of the resource */
  name: string;
  /** Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. */
  requestId?: string;
}

export const DeleteProjectsLocationsMirroringDeploymentsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsMirroringDeploymentsRequest>;

export type DeleteProjectsLocationsMirroringDeploymentsResponse = Operation;
export const DeleteProjectsLocationsMirroringDeploymentsResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsMirroringDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a deployment. See https://google.aip.dev/135. */
export const deleteProjectsLocationsMirroringDeployments: API.OperationMethod<
  DeleteProjectsLocationsMirroringDeploymentsRequest,
  DeleteProjectsLocationsMirroringDeploymentsResponse,
  DeleteProjectsLocationsMirroringDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsMirroringDeploymentsRequest,
  output: DeleteProjectsLocationsMirroringDeploymentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsMirroringDeploymentsRequest {
  /** Required. The parent resource where this deployment will be created. Format: projects/{project}/locations/{location} */
  parent: string;
  /** Required. The ID to use for the new deployment, which will become the final component of the deployment's resource name. */
  mirroringDeploymentId?: string;
  /** Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. */
  requestId?: string;
  /** Request body */
  body?: MirroringDeployment;
}

export const CreateProjectsLocationsMirroringDeploymentsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    mirroringDeploymentId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("mirroringDeploymentId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(MirroringDeployment).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/mirroringDeployments",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsMirroringDeploymentsRequest>;

export type CreateProjectsLocationsMirroringDeploymentsResponse = Operation;
export const CreateProjectsLocationsMirroringDeploymentsResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsMirroringDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a deployment in a given project and location. See https://google.aip.dev/133. */
export const createProjectsLocationsMirroringDeployments: API.OperationMethod<
  CreateProjectsLocationsMirroringDeploymentsRequest,
  CreateProjectsLocationsMirroringDeploymentsResponse,
  CreateProjectsLocationsMirroringDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsMirroringDeploymentsRequest,
  output: CreateProjectsLocationsMirroringDeploymentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsMirroringDeploymentsRequest {
  /** Required. The name of the deployment to retrieve. Format: projects/{project}/locations/{location}/mirroringDeployments/{mirroring_deployment} */
  name: string;
}

export const GetProjectsLocationsMirroringDeploymentsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsMirroringDeploymentsRequest>;

export type GetProjectsLocationsMirroringDeploymentsResponse =
  MirroringDeployment;
export const GetProjectsLocationsMirroringDeploymentsResponse =
  /*@__PURE__*/ MirroringDeployment;

export type GetProjectsLocationsMirroringDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a specific deployment. See https://google.aip.dev/131. */
export const getProjectsLocationsMirroringDeployments: API.OperationMethod<
  GetProjectsLocationsMirroringDeploymentsRequest,
  GetProjectsLocationsMirroringDeploymentsResponse,
  GetProjectsLocationsMirroringDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsMirroringDeploymentsRequest,
  output: GetProjectsLocationsMirroringDeploymentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsMirroringDeploymentsRequest {
  /** Immutable. Identifier. The resource name of this deployment, for example: `projects/123456789/locations/us-central1-a/mirroringDeployments/my-dep`. See https://google.aip.dev/122 for more details. */
  name: string;
  /** Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. */
  requestId?: string;
  /** Optional. The list of fields to update. Fields are specified relative to the deployment (e.g. `description`; *not* `mirroring_deployment.description`). See https://google.aip.dev/161 for more details. */
  updateMask?: string;
  /** Request body */
  body?: MirroringDeployment;
}

export const PatchProjectsLocationsMirroringDeploymentsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(MirroringDeployment).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsMirroringDeploymentsRequest>;

export type PatchProjectsLocationsMirroringDeploymentsResponse = Operation;
export const PatchProjectsLocationsMirroringDeploymentsResponse =
  /*@__PURE__*/ Operation;

export type PatchProjectsLocationsMirroringDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a deployment. See https://google.aip.dev/134. */
export const patchProjectsLocationsMirroringDeployments: API.OperationMethod<
  PatchProjectsLocationsMirroringDeploymentsRequest,
  PatchProjectsLocationsMirroringDeploymentsResponse,
  PatchProjectsLocationsMirroringDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsMirroringDeploymentsRequest,
  output: PatchProjectsLocationsMirroringDeploymentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsSecurityProfileGroupsRequest {
  /** Required. The parent resource of the SecurityProfileGroup. Must be in the format `projects|organizations/* /locations/{location}`. */
  parent: string;
  /** Required. Short name of the SecurityProfileGroup resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "security_profile_group1". */
  securityProfileGroupId?: string;
  /** Request body */
  body?: SecurityProfileGroup;
}

export const CreateProjectsLocationsSecurityProfileGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    securityProfileGroupId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("securityProfileGroupId"),
    ),
    body: Schema.optional(SecurityProfileGroup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/securityProfileGroups",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsSecurityProfileGroupsRequest>;

export type CreateProjectsLocationsSecurityProfileGroupsResponse = Operation;
export const CreateProjectsLocationsSecurityProfileGroupsResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsSecurityProfileGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new SecurityProfileGroup in a given project and location. */
export const createProjectsLocationsSecurityProfileGroups: API.OperationMethod<
  CreateProjectsLocationsSecurityProfileGroupsRequest,
  CreateProjectsLocationsSecurityProfileGroupsResponse,
  CreateProjectsLocationsSecurityProfileGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsSecurityProfileGroupsRequest,
  output: CreateProjectsLocationsSecurityProfileGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsSecurityProfileGroupsRequest {
  /** Required. A name of the SecurityProfileGroup to get. Must be in the format `projects|organizations/* /locations/{location}/securityProfileGroups/{security_profile_group}`. */
  name: string;
}

export const GetProjectsLocationsSecurityProfileGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsSecurityProfileGroupsRequest>;

export type GetProjectsLocationsSecurityProfileGroupsResponse =
  SecurityProfileGroup;
export const GetProjectsLocationsSecurityProfileGroupsResponse =
  /*@__PURE__*/ SecurityProfileGroup;

export type GetProjectsLocationsSecurityProfileGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single SecurityProfileGroup. */
export const getProjectsLocationsSecurityProfileGroups: API.OperationMethod<
  GetProjectsLocationsSecurityProfileGroupsRequest,
  GetProjectsLocationsSecurityProfileGroupsResponse,
  GetProjectsLocationsSecurityProfileGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsSecurityProfileGroupsRequest,
  output: GetProjectsLocationsSecurityProfileGroupsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsSecurityProfileGroupsRequest {
  /** Required. Field mask is used to specify the fields to be overwritten in the SecurityProfileGroup resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. */
  updateMask?: string;
  /** Immutable. Identifier. Name of the SecurityProfileGroup resource. It matches pattern `projects|organizations/* /locations/{location}/securityProfileGroups/{security_profile_group}`. */
  name: string;
  /** Request body */
  body?: SecurityProfileGroup;
}

export const PatchProjectsLocationsSecurityProfileGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SecurityProfileGroup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsSecurityProfileGroupsRequest>;

export type PatchProjectsLocationsSecurityProfileGroupsResponse = Operation;
export const PatchProjectsLocationsSecurityProfileGroupsResponse =
  /*@__PURE__*/ Operation;

export type PatchProjectsLocationsSecurityProfileGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single SecurityProfileGroup. */
export const patchProjectsLocationsSecurityProfileGroups: API.OperationMethod<
  PatchProjectsLocationsSecurityProfileGroupsRequest,
  PatchProjectsLocationsSecurityProfileGroupsResponse,
  PatchProjectsLocationsSecurityProfileGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsSecurityProfileGroupsRequest,
  output: PatchProjectsLocationsSecurityProfileGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsSecurityProfileGroupsRequest {
  /** Optional. Maximum number of SecurityProfileGroups to return per call. */
  pageSize?: number;
  /** Required. The project or organization and location from which the SecurityProfileGroups should be listed, specified in the format `projects|organizations/* /locations/{location}`. */
  parent: string;
  /** Optional. The value returned by the last `ListSecurityProfileGroupsResponse` Indicates that this is a continuation of a prior `ListSecurityProfileGroups` call, and that the system should return the next page of data. */
  pageToken?: string;
}

export const ListProjectsLocationsSecurityProfileGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/securityProfileGroups" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsSecurityProfileGroupsRequest>;

export type ListProjectsLocationsSecurityProfileGroupsResponse =
  ListSecurityProfileGroupsResponse;
export const ListProjectsLocationsSecurityProfileGroupsResponse =
  /*@__PURE__*/ ListSecurityProfileGroupsResponse;

export type ListProjectsLocationsSecurityProfileGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists SecurityProfileGroups in a given project and location. */
export const listProjectsLocationsSecurityProfileGroups: API.PaginatedOperationMethod<
  ListProjectsLocationsSecurityProfileGroupsRequest,
  ListProjectsLocationsSecurityProfileGroupsResponse,
  ListProjectsLocationsSecurityProfileGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsSecurityProfileGroupsRequest,
  output: ListProjectsLocationsSecurityProfileGroupsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsSecurityProfileGroupsRequest {
  /** Required. A name of the SecurityProfileGroup to delete. Must be in the format `projects|organizations/* /locations/{location}/securityProfileGroups/{security_profile_group}`. */
  name: string;
  /** Optional. If client provided etag is out of date, delete will return FAILED_PRECONDITION error. */
  etag?: string;
}

export const DeleteProjectsLocationsSecurityProfileGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsSecurityProfileGroupsRequest>;

export type DeleteProjectsLocationsSecurityProfileGroupsResponse = Operation;
export const DeleteProjectsLocationsSecurityProfileGroupsResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsSecurityProfileGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single SecurityProfileGroup. */
export const deleteProjectsLocationsSecurityProfileGroups: API.OperationMethod<
  DeleteProjectsLocationsSecurityProfileGroupsRequest,
  DeleteProjectsLocationsSecurityProfileGroupsResponse,
  DeleteProjectsLocationsSecurityProfileGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsSecurityProfileGroupsRequest,
  output: DeleteProjectsLocationsSecurityProfileGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsSacRealmsRequest {
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. Sort the results by a certain order. */
  orderBy?: string;
  /** Required. The parent, in the form `projects/{project}/locations/global`. */
  parent: string;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Optional. An expression that filters the list of results. */
  filter?: string;
}

export const ListProjectsLocationsSacRealmsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/sacRealms" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsSacRealmsRequest>;

export type ListProjectsLocationsSacRealmsResponse = ListSACRealmsResponse;
export const ListProjectsLocationsSacRealmsResponse =
  /*@__PURE__*/ ListSACRealmsResponse;

export type ListProjectsLocationsSacRealmsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists SACRealms in a given project. */
export const listProjectsLocationsSacRealms: API.PaginatedOperationMethod<
  ListProjectsLocationsSacRealmsRequest,
  ListProjectsLocationsSacRealmsResponse,
  ListProjectsLocationsSacRealmsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsSacRealmsRequest,
  output: ListProjectsLocationsSacRealmsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsSacRealmsRequest {
  /** Required. ID of the created realm. The ID must be 1-63 characters long, and comply with RFC1035. Specifically, it must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash. */
  sacRealmId?: string;
  /** Required. The parent, in the form `projects/{project}/locations/global`. */
  parent: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: SACRealm;
}

export const CreateProjectsLocationsSacRealmsRequest =
  /*@__PURE__*/ Schema.Struct({
    sacRealmId: Schema.optional(Schema.String).pipe(T.HttpQuery("sacRealmId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(SACRealm).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/sacRealms",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsSacRealmsRequest>;

export type CreateProjectsLocationsSacRealmsResponse = Operation;
export const CreateProjectsLocationsSacRealmsResponse = /*@__PURE__*/ Operation;

export type CreateProjectsLocationsSacRealmsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new SACRealm in a given project. */
export const createProjectsLocationsSacRealms: API.OperationMethod<
  CreateProjectsLocationsSacRealmsRequest,
  CreateProjectsLocationsSacRealmsResponse,
  CreateProjectsLocationsSacRealmsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsSacRealmsRequest,
  output: CreateProjectsLocationsSacRealmsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsSacRealmsRequest {
  /** Required. Name of the resource, in the form `projects/{project}/locations/global/sacRealms/{sacRealm}`. */
  name: string;
}

export const GetProjectsLocationsSacRealmsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsSacRealmsRequest>;

export type GetProjectsLocationsSacRealmsResponse = SACRealm;
export const GetProjectsLocationsSacRealmsResponse = /*@__PURE__*/ SACRealm;

export type GetProjectsLocationsSacRealmsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns the specified realm. */
export const getProjectsLocationsSacRealms: API.OperationMethod<
  GetProjectsLocationsSacRealmsRequest,
  GetProjectsLocationsSacRealmsResponse,
  GetProjectsLocationsSacRealmsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsSacRealmsRequest,
  output: GetProjectsLocationsSacRealmsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsSacRealmsRequest {
  /** Required. Name of the resource, in the form `projects/{project}/locations/global/sacRealms/{sacRealm}`. */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsSacRealmsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsSacRealmsRequest>;

export type DeleteProjectsLocationsSacRealmsResponse = Operation;
export const DeleteProjectsLocationsSacRealmsResponse = /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsSacRealmsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the specified realm. */
export const deleteProjectsLocationsSacRealms: API.OperationMethod<
  DeleteProjectsLocationsSacRealmsRequest,
  DeleteProjectsLocationsSacRealmsResponse,
  DeleteProjectsLocationsSacRealmsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsSacRealmsRequest,
  output: DeleteProjectsLocationsSacRealmsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsInterceptEndpointGroupAssociationsRequest {
  /** Required. The name of the association to retrieve. Format: projects/{project}/locations/{location}/interceptEndpointGroupAssociations/{intercept_endpoint_group_association} */
  name: string;
}

export const GetProjectsLocationsInterceptEndpointGroupAssociationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsInterceptEndpointGroupAssociationsRequest>;

export type GetProjectsLocationsInterceptEndpointGroupAssociationsResponse =
  InterceptEndpointGroupAssociation;
export const GetProjectsLocationsInterceptEndpointGroupAssociationsResponse =
  /*@__PURE__*/ InterceptEndpointGroupAssociation;

export type GetProjectsLocationsInterceptEndpointGroupAssociationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a specific association. See https://google.aip.dev/131. */
export const getProjectsLocationsInterceptEndpointGroupAssociations: API.OperationMethod<
  GetProjectsLocationsInterceptEndpointGroupAssociationsRequest,
  GetProjectsLocationsInterceptEndpointGroupAssociationsResponse,
  GetProjectsLocationsInterceptEndpointGroupAssociationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsInterceptEndpointGroupAssociationsRequest,
  output: GetProjectsLocationsInterceptEndpointGroupAssociationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsInterceptEndpointGroupAssociationsRequest {
  /** Immutable. Identifier. The resource name of this endpoint group association, for example: `projects/123456789/locations/global/interceptEndpointGroupAssociations/my-eg-association`. See https://google.aip.dev/122 for more details. */
  name: string;
  /** Optional. The list of fields to update. Fields are specified relative to the association (e.g. `description`; *not* `intercept_endpoint_group_association.description`). See https://google.aip.dev/161 for more details. */
  updateMask?: string;
  /** Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. */
  requestId?: string;
  /** Request body */
  body?: InterceptEndpointGroupAssociation;
}

export const PatchProjectsLocationsInterceptEndpointGroupAssociationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(InterceptEndpointGroupAssociation).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsInterceptEndpointGroupAssociationsRequest>;

export type PatchProjectsLocationsInterceptEndpointGroupAssociationsResponse =
  Operation;
export const PatchProjectsLocationsInterceptEndpointGroupAssociationsResponse =
  /*@__PURE__*/ Operation;

export type PatchProjectsLocationsInterceptEndpointGroupAssociationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an association. See https://google.aip.dev/134. */
export const patchProjectsLocationsInterceptEndpointGroupAssociations: API.OperationMethod<
  PatchProjectsLocationsInterceptEndpointGroupAssociationsRequest,
  PatchProjectsLocationsInterceptEndpointGroupAssociationsResponse,
  PatchProjectsLocationsInterceptEndpointGroupAssociationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsInterceptEndpointGroupAssociationsRequest,
  output: PatchProjectsLocationsInterceptEndpointGroupAssociationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsInterceptEndpointGroupAssociationsRequest {
  /** Required. The parent resource where this association will be created. Format: projects/{project}/locations/{location} */
  parent: string;
  /** Optional. The ID to use for the new association, which will become the final component of the endpoint group's resource name. If not provided, the server will generate a unique ID. */
  interceptEndpointGroupAssociationId?: string;
  /** Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. */
  requestId?: string;
  /** Request body */
  body?: InterceptEndpointGroupAssociation;
}

export const CreateProjectsLocationsInterceptEndpointGroupAssociationsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    interceptEndpointGroupAssociationId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("interceptEndpointGroupAssociationId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(InterceptEndpointGroupAssociation).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/interceptEndpointGroupAssociations",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsInterceptEndpointGroupAssociationsRequest>;

export type CreateProjectsLocationsInterceptEndpointGroupAssociationsResponse =
  Operation;
export const CreateProjectsLocationsInterceptEndpointGroupAssociationsResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsInterceptEndpointGroupAssociationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates an association in a given project and location. See https://google.aip.dev/133. */
export const createProjectsLocationsInterceptEndpointGroupAssociations: API.OperationMethod<
  CreateProjectsLocationsInterceptEndpointGroupAssociationsRequest,
  CreateProjectsLocationsInterceptEndpointGroupAssociationsResponse,
  CreateProjectsLocationsInterceptEndpointGroupAssociationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsInterceptEndpointGroupAssociationsRequest,
  output: CreateProjectsLocationsInterceptEndpointGroupAssociationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsInterceptEndpointGroupAssociationsRequest {
  /** Required. The association to delete. */
  name: string;
  /** Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. */
  requestId?: string;
}

export const DeleteProjectsLocationsInterceptEndpointGroupAssociationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsInterceptEndpointGroupAssociationsRequest>;

export type DeleteProjectsLocationsInterceptEndpointGroupAssociationsResponse =
  Operation;
export const DeleteProjectsLocationsInterceptEndpointGroupAssociationsResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsInterceptEndpointGroupAssociationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an association. See https://google.aip.dev/135. */
export const deleteProjectsLocationsInterceptEndpointGroupAssociations: API.OperationMethod<
  DeleteProjectsLocationsInterceptEndpointGroupAssociationsRequest,
  DeleteProjectsLocationsInterceptEndpointGroupAssociationsResponse,
  DeleteProjectsLocationsInterceptEndpointGroupAssociationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsInterceptEndpointGroupAssociationsRequest,
  output: DeleteProjectsLocationsInterceptEndpointGroupAssociationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsInterceptEndpointGroupAssociationsRequest {
  /** Optional. Filter expression. See https://google.aip.dev/160#filtering for more details. */
  filter?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. See https://google.aip.dev/158 for more details. */
  pageSize?: number;
  /** Optional. Sort expression. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Required. The parent, which owns this collection of associations. Example: `projects/123456789/locations/global`. See https://google.aip.dev/132 for more details. */
  parent: string;
  /** Optional. A page token, received from a previous `ListInterceptEndpointGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListInterceptEndpointGroups` must match the call that provided the page token. See https://google.aip.dev/158 for more details. */
  pageToken?: string;
}

export const ListProjectsLocationsInterceptEndpointGroupAssociationsRequest =
  /*@__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1beta1/{+parent}/interceptEndpointGroupAssociations",
    }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsInterceptEndpointGroupAssociationsRequest>;

export type ListProjectsLocationsInterceptEndpointGroupAssociationsResponse =
  ListInterceptEndpointGroupAssociationsResponse;
export const ListProjectsLocationsInterceptEndpointGroupAssociationsResponse =
  /*@__PURE__*/ ListInterceptEndpointGroupAssociationsResponse;

export type ListProjectsLocationsInterceptEndpointGroupAssociationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists associations in a given project and location. See https://google.aip.dev/132. */
export const listProjectsLocationsInterceptEndpointGroupAssociations: API.PaginatedOperationMethod<
  ListProjectsLocationsInterceptEndpointGroupAssociationsRequest,
  ListProjectsLocationsInterceptEndpointGroupAssociationsResponse,
  ListProjectsLocationsInterceptEndpointGroupAssociationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsInterceptEndpointGroupAssociationsRequest,
  output: ListProjectsLocationsInterceptEndpointGroupAssociationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsInterceptDeploymentGroupsRequest {
  /** Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. */
  requestId?: string;
  /** Required. The parent resource where this deployment group will be created. Format: projects/{project}/locations/{location} */
  parent: string;
  /** Required. The ID to use for the new deployment group, which will become the final component of the deployment group's resource name. */
  interceptDeploymentGroupId?: string;
  /** Request body */
  body?: InterceptDeploymentGroup;
}

export const CreateProjectsLocationsInterceptDeploymentGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    interceptDeploymentGroupId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("interceptDeploymentGroupId"),
    ),
    body: Schema.optional(InterceptDeploymentGroup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/interceptDeploymentGroups",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsInterceptDeploymentGroupsRequest>;

export type CreateProjectsLocationsInterceptDeploymentGroupsResponse =
  Operation;
export const CreateProjectsLocationsInterceptDeploymentGroupsResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsInterceptDeploymentGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a deployment group in a given project and location. See https://google.aip.dev/133. */
export const createProjectsLocationsInterceptDeploymentGroups: API.OperationMethod<
  CreateProjectsLocationsInterceptDeploymentGroupsRequest,
  CreateProjectsLocationsInterceptDeploymentGroupsResponse,
  CreateProjectsLocationsInterceptDeploymentGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsInterceptDeploymentGroupsRequest,
  output: CreateProjectsLocationsInterceptDeploymentGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsInterceptDeploymentGroupsRequest {
  /** Required. The name of the deployment group to retrieve. Format: projects/{project}/locations/{location}/interceptDeploymentGroups/{intercept_deployment_group} */
  name: string;
}

export const GetProjectsLocationsInterceptDeploymentGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsInterceptDeploymentGroupsRequest>;

export type GetProjectsLocationsInterceptDeploymentGroupsResponse =
  InterceptDeploymentGroup;
export const GetProjectsLocationsInterceptDeploymentGroupsResponse =
  /*@__PURE__*/ InterceptDeploymentGroup;

export type GetProjectsLocationsInterceptDeploymentGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a specific deployment group. See https://google.aip.dev/131. */
export const getProjectsLocationsInterceptDeploymentGroups: API.OperationMethod<
  GetProjectsLocationsInterceptDeploymentGroupsRequest,
  GetProjectsLocationsInterceptDeploymentGroupsResponse,
  GetProjectsLocationsInterceptDeploymentGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsInterceptDeploymentGroupsRequest,
  output: GetProjectsLocationsInterceptDeploymentGroupsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsInterceptDeploymentGroupsRequest {
  /** Immutable. Identifier. The resource name of this deployment group, for example: `projects/123456789/locations/global/interceptDeploymentGroups/my-dg`. See https://google.aip.dev/122 for more details. */
  name: string;
  /** Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. */
  requestId?: string;
  /** Optional. The list of fields to update. Fields are specified relative to the deployment group (e.g. `description`; *not* `intercept_deployment_group.description`). See https://google.aip.dev/161 for more details. */
  updateMask?: string;
  /** Request body */
  body?: InterceptDeploymentGroup;
}

export const PatchProjectsLocationsInterceptDeploymentGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(InterceptDeploymentGroup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsInterceptDeploymentGroupsRequest>;

export type PatchProjectsLocationsInterceptDeploymentGroupsResponse = Operation;
export const PatchProjectsLocationsInterceptDeploymentGroupsResponse =
  /*@__PURE__*/ Operation;

export type PatchProjectsLocationsInterceptDeploymentGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a deployment group. See https://google.aip.dev/134. */
export const patchProjectsLocationsInterceptDeploymentGroups: API.OperationMethod<
  PatchProjectsLocationsInterceptDeploymentGroupsRequest,
  PatchProjectsLocationsInterceptDeploymentGroupsResponse,
  PatchProjectsLocationsInterceptDeploymentGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsInterceptDeploymentGroupsRequest,
  output: PatchProjectsLocationsInterceptDeploymentGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsInterceptDeploymentGroupsRequest {
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. See https://google.aip.dev/158 for more details. */
  pageSize?: number;
  /** Optional. Sort expression. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Required. The parent, which owns this collection of deployment groups. Example: `projects/123456789/locations/global`. See https://google.aip.dev/132 for more details. */
  parent: string;
  /** Optional. A page token, received from a previous `ListInterceptDeploymentGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListInterceptDeploymentGroups` must match the call that provided the page token. See https://google.aip.dev/158 for more details. */
  pageToken?: string;
  /** Optional. Filter expression. See https://google.aip.dev/160#filtering for more details. */
  filter?: string;
}

export const ListProjectsLocationsInterceptDeploymentGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1beta1/{+parent}/interceptDeploymentGroups",
    }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsInterceptDeploymentGroupsRequest>;

export type ListProjectsLocationsInterceptDeploymentGroupsResponse =
  ListInterceptDeploymentGroupsResponse;
export const ListProjectsLocationsInterceptDeploymentGroupsResponse =
  /*@__PURE__*/ ListInterceptDeploymentGroupsResponse;

export type ListProjectsLocationsInterceptDeploymentGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists deployment groups in a given project and location. See https://google.aip.dev/132. */
export const listProjectsLocationsInterceptDeploymentGroups: API.PaginatedOperationMethod<
  ListProjectsLocationsInterceptDeploymentGroupsRequest,
  ListProjectsLocationsInterceptDeploymentGroupsResponse,
  ListProjectsLocationsInterceptDeploymentGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsInterceptDeploymentGroupsRequest,
  output: ListProjectsLocationsInterceptDeploymentGroupsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsInterceptDeploymentGroupsRequest {
  /** Required. The deployment group to delete. */
  name: string;
  /** Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details. */
  requestId?: string;
}

export const DeleteProjectsLocationsInterceptDeploymentGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsInterceptDeploymentGroupsRequest>;

export type DeleteProjectsLocationsInterceptDeploymentGroupsResponse =
  Operation;
export const DeleteProjectsLocationsInterceptDeploymentGroupsResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsInterceptDeploymentGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a deployment group. See https://google.aip.dev/135. */
export const deleteProjectsLocationsInterceptDeploymentGroups: API.OperationMethod<
  DeleteProjectsLocationsInterceptDeploymentGroupsRequest,
  DeleteProjectsLocationsInterceptDeploymentGroupsResponse,
  DeleteProjectsLocationsInterceptDeploymentGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsInterceptDeploymentGroupsRequest,
  output: DeleteProjectsLocationsInterceptDeploymentGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsFirewallEndpointAssociationsRequest {
  /** Required. Value for parent. */
  parent: string;
  /** Optional. Id of the requesting object. If auto-generating Id server-side, remove this field and firewall_endpoint_association_id from the method_signature of Create RPC. */
  firewallEndpointAssociationId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: FirewallEndpointAssociation;
}

export const CreateProjectsLocationsFirewallEndpointAssociationsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    firewallEndpointAssociationId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("firewallEndpointAssociationId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(FirewallEndpointAssociation).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/firewallEndpointAssociations",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsFirewallEndpointAssociationsRequest>;

export type CreateProjectsLocationsFirewallEndpointAssociationsResponse =
  Operation;
export const CreateProjectsLocationsFirewallEndpointAssociationsResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsFirewallEndpointAssociationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new FirewallEndpointAssociation in a given project and location. */
export const createProjectsLocationsFirewallEndpointAssociations: API.OperationMethod<
  CreateProjectsLocationsFirewallEndpointAssociationsRequest,
  CreateProjectsLocationsFirewallEndpointAssociationsResponse,
  CreateProjectsLocationsFirewallEndpointAssociationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsFirewallEndpointAssociationsRequest,
  output: CreateProjectsLocationsFirewallEndpointAssociationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsFirewallEndpointAssociationsRequest {
  /** Required. Name of the resource */
  name: string;
}

export const GetProjectsLocationsFirewallEndpointAssociationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsFirewallEndpointAssociationsRequest>;

export type GetProjectsLocationsFirewallEndpointAssociationsResponse =
  FirewallEndpointAssociation;
export const GetProjectsLocationsFirewallEndpointAssociationsResponse =
  /*@__PURE__*/ FirewallEndpointAssociation;

export type GetProjectsLocationsFirewallEndpointAssociationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single FirewallEndpointAssociation. */
export const getProjectsLocationsFirewallEndpointAssociations: API.OperationMethod<
  GetProjectsLocationsFirewallEndpointAssociationsRequest,
  GetProjectsLocationsFirewallEndpointAssociationsResponse,
  GetProjectsLocationsFirewallEndpointAssociationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsFirewallEndpointAssociationsRequest,
  output: GetProjectsLocationsFirewallEndpointAssociationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsFirewallEndpointAssociationsRequest {
  /** Immutable. Identifier. name of resource */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Field mask is used to specify the fields to be overwritten in the Association resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Request body */
  body?: FirewallEndpointAssociation;
}

export const PatchProjectsLocationsFirewallEndpointAssociationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(FirewallEndpointAssociation).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsFirewallEndpointAssociationsRequest>;

export type PatchProjectsLocationsFirewallEndpointAssociationsResponse =
  Operation;
export const PatchProjectsLocationsFirewallEndpointAssociationsResponse =
  /*@__PURE__*/ Operation;

export type PatchProjectsLocationsFirewallEndpointAssociationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update a single FirewallEndpointAssociation. */
export const patchProjectsLocationsFirewallEndpointAssociations: API.OperationMethod<
  PatchProjectsLocationsFirewallEndpointAssociationsRequest,
  PatchProjectsLocationsFirewallEndpointAssociationsResponse,
  PatchProjectsLocationsFirewallEndpointAssociationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsFirewallEndpointAssociationsRequest,
  output: PatchProjectsLocationsFirewallEndpointAssociationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsFirewallEndpointAssociationsRequest {
  /** Required. Parent value for ListAssociationsRequest */
  parent: string;
  /** A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Hint for how to order the results */
  orderBy?: string;
  /** Optional. Filtering results */
  filter?: string;
}

export const ListProjectsLocationsFirewallEndpointAssociationsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1beta1/{+parent}/firewallEndpointAssociations",
    }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsFirewallEndpointAssociationsRequest>;

export type ListProjectsLocationsFirewallEndpointAssociationsResponse =
  ListFirewallEndpointAssociationsResponse;
export const ListProjectsLocationsFirewallEndpointAssociationsResponse =
  /*@__PURE__*/ ListFirewallEndpointAssociationsResponse;

export type ListProjectsLocationsFirewallEndpointAssociationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Associations in a given project and location. */
export const listProjectsLocationsFirewallEndpointAssociations: API.PaginatedOperationMethod<
  ListProjectsLocationsFirewallEndpointAssociationsRequest,
  ListProjectsLocationsFirewallEndpointAssociationsResponse,
  ListProjectsLocationsFirewallEndpointAssociationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsFirewallEndpointAssociationsRequest,
  output: ListProjectsLocationsFirewallEndpointAssociationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsFirewallEndpointAssociationsRequest {
  /** Required. Name of the resource */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsFirewallEndpointAssociationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsFirewallEndpointAssociationsRequest>;

export type DeleteProjectsLocationsFirewallEndpointAssociationsResponse =
  Operation;
export const DeleteProjectsLocationsFirewallEndpointAssociationsResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsFirewallEndpointAssociationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single FirewallEndpointAssociation. */
export const deleteProjectsLocationsFirewallEndpointAssociations: API.OperationMethod<
  DeleteProjectsLocationsFirewallEndpointAssociationsRequest,
  DeleteProjectsLocationsFirewallEndpointAssociationsResponse,
  DeleteProjectsLocationsFirewallEndpointAssociationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsFirewallEndpointAssociationsRequest,
  output: DeleteProjectsLocationsFirewallEndpointAssociationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsTlsInspectionPoliciesRequest {
  /** Maximum number of TlsInspectionPolicies to return per call. */
  pageSize?: number;
  /** Required. The project and location from which the TlsInspectionPolicies should be listed, specified in the format `projects/{project}/locations/{location}`. */
  parent: string;
  /** The value returned by the last 'ListTlsInspectionPoliciesResponse' Indicates that this is a continuation of a prior 'ListTlsInspectionPolicies' call, and that the system should return the next page of data. */
  pageToken?: string;
}

export const ListProjectsLocationsTlsInspectionPoliciesRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/tlsInspectionPolicies" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsTlsInspectionPoliciesRequest>;

export type ListProjectsLocationsTlsInspectionPoliciesResponse =
  ListTlsInspectionPoliciesResponse;
export const ListProjectsLocationsTlsInspectionPoliciesResponse =
  /*@__PURE__*/ ListTlsInspectionPoliciesResponse;

export type ListProjectsLocationsTlsInspectionPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists TlsInspectionPolicies in a given project and location. */
export const listProjectsLocationsTlsInspectionPolicies: API.PaginatedOperationMethod<
  ListProjectsLocationsTlsInspectionPoliciesRequest,
  ListProjectsLocationsTlsInspectionPoliciesResponse,
  ListProjectsLocationsTlsInspectionPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsTlsInspectionPoliciesRequest,
  output: ListProjectsLocationsTlsInspectionPoliciesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsTlsInspectionPoliciesRequest {
  /** Required. A name of the TlsInspectionPolicy to delete. Must be in the format `projects/{project}/locations/{location}/tlsInspectionPolicies/{tls_inspection_policy}`. */
  name: string;
  /** If set to true, any rules for this TlsInspectionPolicy will also be deleted. (Otherwise, the request will only work if the TlsInspectionPolicy has no rules.) */
  force?: boolean;
}

export const DeleteProjectsLocationsTlsInspectionPoliciesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsTlsInspectionPoliciesRequest>;

export type DeleteProjectsLocationsTlsInspectionPoliciesResponse = Operation;
export const DeleteProjectsLocationsTlsInspectionPoliciesResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsTlsInspectionPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single TlsInspectionPolicy. */
export const deleteProjectsLocationsTlsInspectionPolicies: API.OperationMethod<
  DeleteProjectsLocationsTlsInspectionPoliciesRequest,
  DeleteProjectsLocationsTlsInspectionPoliciesResponse,
  DeleteProjectsLocationsTlsInspectionPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsTlsInspectionPoliciesRequest,
  output: DeleteProjectsLocationsTlsInspectionPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsTlsInspectionPoliciesRequest {
  /** Required. The parent resource of the TlsInspectionPolicy. Must be in the format `projects/{project}/locations/{location}`. */
  parent: string;
  /** Required. Short name of the TlsInspectionPolicy resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "tls_inspection_policy1". */
  tlsInspectionPolicyId?: string;
  /** Request body */
  body?: TlsInspectionPolicy;
}

export const CreateProjectsLocationsTlsInspectionPoliciesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    tlsInspectionPolicyId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("tlsInspectionPolicyId"),
    ),
    body: Schema.optional(TlsInspectionPolicy).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/tlsInspectionPolicies",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsTlsInspectionPoliciesRequest>;

export type CreateProjectsLocationsTlsInspectionPoliciesResponse = Operation;
export const CreateProjectsLocationsTlsInspectionPoliciesResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsTlsInspectionPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new TlsInspectionPolicy in a given project and location. */
export const createProjectsLocationsTlsInspectionPolicies: API.OperationMethod<
  CreateProjectsLocationsTlsInspectionPoliciesRequest,
  CreateProjectsLocationsTlsInspectionPoliciesResponse,
  CreateProjectsLocationsTlsInspectionPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsTlsInspectionPoliciesRequest,
  output: CreateProjectsLocationsTlsInspectionPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsTlsInspectionPoliciesRequest {
  /** Required. A name of the TlsInspectionPolicy to get. Must be in the format `projects/{project}/locations/{location}/tlsInspectionPolicies/{tls_inspection_policy}`. */
  name: string;
}

export const GetProjectsLocationsTlsInspectionPoliciesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsTlsInspectionPoliciesRequest>;

export type GetProjectsLocationsTlsInspectionPoliciesResponse =
  TlsInspectionPolicy;
export const GetProjectsLocationsTlsInspectionPoliciesResponse =
  /*@__PURE__*/ TlsInspectionPolicy;

export type GetProjectsLocationsTlsInspectionPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single TlsInspectionPolicy. */
export const getProjectsLocationsTlsInspectionPolicies: API.OperationMethod<
  GetProjectsLocationsTlsInspectionPoliciesRequest,
  GetProjectsLocationsTlsInspectionPoliciesResponse,
  GetProjectsLocationsTlsInspectionPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsTlsInspectionPoliciesRequest,
  output: GetProjectsLocationsTlsInspectionPoliciesResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsTlsInspectionPoliciesRequest {
  /** Optional. Field mask is used to specify the fields to be overwritten in the TlsInspectionPolicy resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Required. Name of the resource. Name is of the form projects/{project}/locations/{location}/tlsInspectionPolicies/{tls_inspection_policy} tls_inspection_policy should match the pattern:(^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$). */
  name: string;
  /** Request body */
  body?: TlsInspectionPolicy;
}

export const PatchProjectsLocationsTlsInspectionPoliciesRequest =
  /*@__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(TlsInspectionPolicy).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsTlsInspectionPoliciesRequest>;

export type PatchProjectsLocationsTlsInspectionPoliciesResponse = Operation;
export const PatchProjectsLocationsTlsInspectionPoliciesResponse =
  /*@__PURE__*/ Operation;

export type PatchProjectsLocationsTlsInspectionPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single TlsInspectionPolicy. */
export const patchProjectsLocationsTlsInspectionPolicies: API.OperationMethod<
  PatchProjectsLocationsTlsInspectionPoliciesRequest,
  PatchProjectsLocationsTlsInspectionPoliciesResponse,
  PatchProjectsLocationsTlsInspectionPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsTlsInspectionPoliciesRequest,
  output: PatchProjectsLocationsTlsInspectionPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsGatewaySecurityPoliciesRequest {
  /** Required. The parent resource of the GatewaySecurityPolicy. Must be in the format `projects/{project}/locations/{location}`. */
  parent: string;
  /** Required. Short name of the GatewaySecurityPolicy resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "gateway_security_policy1". */
  gatewaySecurityPolicyId?: string;
  /** Request body */
  body?: GatewaySecurityPolicy;
}

export const CreateProjectsLocationsGatewaySecurityPoliciesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    gatewaySecurityPolicyId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("gatewaySecurityPolicyId"),
    ),
    body: Schema.optional(GatewaySecurityPolicy).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/gatewaySecurityPolicies",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsGatewaySecurityPoliciesRequest>;

export type CreateProjectsLocationsGatewaySecurityPoliciesResponse = Operation;
export const CreateProjectsLocationsGatewaySecurityPoliciesResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsGatewaySecurityPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new GatewaySecurityPolicy in a given project and location. */
export const createProjectsLocationsGatewaySecurityPolicies: API.OperationMethod<
  CreateProjectsLocationsGatewaySecurityPoliciesRequest,
  CreateProjectsLocationsGatewaySecurityPoliciesResponse,
  CreateProjectsLocationsGatewaySecurityPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsGatewaySecurityPoliciesRequest,
  output: CreateProjectsLocationsGatewaySecurityPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsGatewaySecurityPoliciesRequest {
  /** Required. A name of the GatewaySecurityPolicy to get. Must be in the format `projects/{project}/locations/{location}/gatewaySecurityPolicies/*`. */
  name: string;
}

export const GetProjectsLocationsGatewaySecurityPoliciesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsGatewaySecurityPoliciesRequest>;

export type GetProjectsLocationsGatewaySecurityPoliciesResponse =
  GatewaySecurityPolicy;
export const GetProjectsLocationsGatewaySecurityPoliciesResponse =
  /*@__PURE__*/ GatewaySecurityPolicy;

export type GetProjectsLocationsGatewaySecurityPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single GatewaySecurityPolicy. */
export const getProjectsLocationsGatewaySecurityPolicies: API.OperationMethod<
  GetProjectsLocationsGatewaySecurityPoliciesRequest,
  GetProjectsLocationsGatewaySecurityPoliciesResponse,
  GetProjectsLocationsGatewaySecurityPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsGatewaySecurityPoliciesRequest,
  output: GetProjectsLocationsGatewaySecurityPoliciesResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsGatewaySecurityPoliciesRequest {
  /** Optional. Field mask is used to specify the fields to be overwritten in the GatewaySecurityPolicy resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Required. Name of the resource. Name is of the form projects/{project}/locations/{location}/gatewaySecurityPolicies/{gateway_security_policy} gateway_security_policy should match the pattern:(^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$). */
  name: string;
  /** Request body */
  body?: GatewaySecurityPolicy;
}

export const PatchProjectsLocationsGatewaySecurityPoliciesRequest =
  /*@__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GatewaySecurityPolicy).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsGatewaySecurityPoliciesRequest>;

export type PatchProjectsLocationsGatewaySecurityPoliciesResponse = Operation;
export const PatchProjectsLocationsGatewaySecurityPoliciesResponse =
  /*@__PURE__*/ Operation;

export type PatchProjectsLocationsGatewaySecurityPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single GatewaySecurityPolicy. */
export const patchProjectsLocationsGatewaySecurityPolicies: API.OperationMethod<
  PatchProjectsLocationsGatewaySecurityPoliciesRequest,
  PatchProjectsLocationsGatewaySecurityPoliciesResponse,
  PatchProjectsLocationsGatewaySecurityPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsGatewaySecurityPoliciesRequest,
  output: PatchProjectsLocationsGatewaySecurityPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsGatewaySecurityPoliciesRequest {
  /** Required. The project and location from which the GatewaySecurityPolicies should be listed, specified in the format `projects/{project}/locations/{location}`. */
  parent: string;
  /** The value returned by the last 'ListGatewaySecurityPoliciesResponse' Indicates that this is a continuation of a prior 'ListGatewaySecurityPolicies' call, and that the system should return the next page of data. */
  pageToken?: string;
  /** Maximum number of GatewaySecurityPolicies to return per call. */
  pageSize?: number;
}

export const ListProjectsLocationsGatewaySecurityPoliciesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1beta1/{+parent}/gatewaySecurityPolicies",
    }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsGatewaySecurityPoliciesRequest>;

export type ListProjectsLocationsGatewaySecurityPoliciesResponse =
  ListGatewaySecurityPoliciesResponse;
export const ListProjectsLocationsGatewaySecurityPoliciesResponse =
  /*@__PURE__*/ ListGatewaySecurityPoliciesResponse;

export type ListProjectsLocationsGatewaySecurityPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists GatewaySecurityPolicies in a given project and location. */
export const listProjectsLocationsGatewaySecurityPolicies: API.PaginatedOperationMethod<
  ListProjectsLocationsGatewaySecurityPoliciesRequest,
  ListProjectsLocationsGatewaySecurityPoliciesResponse,
  ListProjectsLocationsGatewaySecurityPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsGatewaySecurityPoliciesRequest,
  output: ListProjectsLocationsGatewaySecurityPoliciesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsGatewaySecurityPoliciesRequest {
  /** Required. A name of the GatewaySecurityPolicy to delete. Must be in the format `projects/{project}/locations/{location}/gatewaySecurityPolicies/*`. */
  name: string;
}

export const DeleteProjectsLocationsGatewaySecurityPoliciesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsGatewaySecurityPoliciesRequest>;

export type DeleteProjectsLocationsGatewaySecurityPoliciesResponse = Operation;
export const DeleteProjectsLocationsGatewaySecurityPoliciesResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsGatewaySecurityPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single GatewaySecurityPolicy. */
export const deleteProjectsLocationsGatewaySecurityPolicies: API.OperationMethod<
  DeleteProjectsLocationsGatewaySecurityPoliciesRequest,
  DeleteProjectsLocationsGatewaySecurityPoliciesResponse,
  DeleteProjectsLocationsGatewaySecurityPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsGatewaySecurityPoliciesRequest,
  output: DeleteProjectsLocationsGatewaySecurityPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsGatewaySecurityPoliciesRulesRequest {
  /** Required. The project, location and GatewaySecurityPolicy from which the GatewaySecurityPolicyRules should be listed, specified in the format `projects/{project}/locations/{location}/gatewaySecurityPolicies/{gatewaySecurityPolicy}`. */
  parent: string;
  /** The value returned by the last 'ListGatewaySecurityPolicyRulesResponse' Indicates that this is a continuation of a prior 'ListGatewaySecurityPolicyRules' call, and that the system should return the next page of data. */
  pageToken?: string;
  /** Maximum number of GatewaySecurityPolicyRules to return per call. */
  pageSize?: number;
}

export const ListProjectsLocationsGatewaySecurityPoliciesRulesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/rules" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsGatewaySecurityPoliciesRulesRequest>;

export type ListProjectsLocationsGatewaySecurityPoliciesRulesResponse =
  ListGatewaySecurityPolicyRulesResponse;
export const ListProjectsLocationsGatewaySecurityPoliciesRulesResponse =
  /*@__PURE__*/ ListGatewaySecurityPolicyRulesResponse;

export type ListProjectsLocationsGatewaySecurityPoliciesRulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists GatewaySecurityPolicyRules in a given project and location. */
export const listProjectsLocationsGatewaySecurityPoliciesRules: API.PaginatedOperationMethod<
  ListProjectsLocationsGatewaySecurityPoliciesRulesRequest,
  ListProjectsLocationsGatewaySecurityPoliciesRulesResponse,
  ListProjectsLocationsGatewaySecurityPoliciesRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsGatewaySecurityPoliciesRulesRequest,
  output: ListProjectsLocationsGatewaySecurityPoliciesRulesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsGatewaySecurityPoliciesRulesRequest {
  /** Required. A name of the GatewaySecurityPolicyRule to delete. Must be in the format `projects/{project}/locations/{location}/gatewaySecurityPolicies/{gatewaySecurityPolicy}/rules/*`. */
  name: string;
}

export const DeleteProjectsLocationsGatewaySecurityPoliciesRulesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsGatewaySecurityPoliciesRulesRequest>;

export type DeleteProjectsLocationsGatewaySecurityPoliciesRulesResponse =
  Operation;
export const DeleteProjectsLocationsGatewaySecurityPoliciesRulesResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsGatewaySecurityPoliciesRulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single GatewaySecurityPolicyRule. */
export const deleteProjectsLocationsGatewaySecurityPoliciesRules: API.OperationMethod<
  DeleteProjectsLocationsGatewaySecurityPoliciesRulesRequest,
  DeleteProjectsLocationsGatewaySecurityPoliciesRulesResponse,
  DeleteProjectsLocationsGatewaySecurityPoliciesRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsGatewaySecurityPoliciesRulesRequest,
  output: DeleteProjectsLocationsGatewaySecurityPoliciesRulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsGatewaySecurityPoliciesRulesRequest {
  /** Required. The parent where this rule will be created. Format : projects/{project}/location/{location}/gatewaySecurityPolicies/* */
  parent: string;
  /** The ID to use for the rule, which will become the final component of the rule's resource name. This value should be 4-63 characters, and valid characters are /a-z-/. */
  gatewaySecurityPolicyRuleId?: string;
  /** Request body */
  body?: GatewaySecurityPolicyRule;
}

export const CreateProjectsLocationsGatewaySecurityPoliciesRulesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    gatewaySecurityPolicyRuleId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("gatewaySecurityPolicyRuleId"),
    ),
    body: Schema.optional(GatewaySecurityPolicyRule).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta1/{+parent}/rules", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsGatewaySecurityPoliciesRulesRequest>;

export type CreateProjectsLocationsGatewaySecurityPoliciesRulesResponse =
  Operation;
export const CreateProjectsLocationsGatewaySecurityPoliciesRulesResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsGatewaySecurityPoliciesRulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new GatewaySecurityPolicy in a given project and location. */
export const createProjectsLocationsGatewaySecurityPoliciesRules: API.OperationMethod<
  CreateProjectsLocationsGatewaySecurityPoliciesRulesRequest,
  CreateProjectsLocationsGatewaySecurityPoliciesRulesResponse,
  CreateProjectsLocationsGatewaySecurityPoliciesRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsGatewaySecurityPoliciesRulesRequest,
  output: CreateProjectsLocationsGatewaySecurityPoliciesRulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsGatewaySecurityPoliciesRulesRequest {
  /** Required. The name of the GatewaySecurityPolicyRule to retrieve. Format: projects/{project}/location/{location}/gatewaySecurityPolicies/* /rules/* */
  name: string;
}

export const GetProjectsLocationsGatewaySecurityPoliciesRulesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsGatewaySecurityPoliciesRulesRequest>;

export type GetProjectsLocationsGatewaySecurityPoliciesRulesResponse =
  GatewaySecurityPolicyRule;
export const GetProjectsLocationsGatewaySecurityPoliciesRulesResponse =
  /*@__PURE__*/ GatewaySecurityPolicyRule;

export type GetProjectsLocationsGatewaySecurityPoliciesRulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single GatewaySecurityPolicyRule. */
export const getProjectsLocationsGatewaySecurityPoliciesRules: API.OperationMethod<
  GetProjectsLocationsGatewaySecurityPoliciesRulesRequest,
  GetProjectsLocationsGatewaySecurityPoliciesRulesResponse,
  GetProjectsLocationsGatewaySecurityPoliciesRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsGatewaySecurityPoliciesRulesRequest,
  output: GetProjectsLocationsGatewaySecurityPoliciesRulesResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsGatewaySecurityPoliciesRulesRequest {
  /** Required. Immutable. Name of the resource. ame is the full resource name so projects/{project}/locations/{location}/gatewaySecurityPolicies/{gateway_security_policy}/rules/{rule} rule should match the pattern: (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$). */
  name: string;
  /** Optional. Field mask is used to specify the fields to be overwritten in the GatewaySecurityPolicy resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Request body */
  body?: GatewaySecurityPolicyRule;
}

export const PatchProjectsLocationsGatewaySecurityPoliciesRulesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GatewaySecurityPolicyRule).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsGatewaySecurityPoliciesRulesRequest>;

export type PatchProjectsLocationsGatewaySecurityPoliciesRulesResponse =
  Operation;
export const PatchProjectsLocationsGatewaySecurityPoliciesRulesResponse =
  /*@__PURE__*/ Operation;

export type PatchProjectsLocationsGatewaySecurityPoliciesRulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single GatewaySecurityPolicyRule. */
export const patchProjectsLocationsGatewaySecurityPoliciesRules: API.OperationMethod<
  PatchProjectsLocationsGatewaySecurityPoliciesRulesRequest,
  PatchProjectsLocationsGatewaySecurityPoliciesRulesResponse,
  PatchProjectsLocationsGatewaySecurityPoliciesRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsGatewaySecurityPoliciesRulesRequest,
  output: PatchProjectsLocationsGatewaySecurityPoliciesRulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsAuthorizationPoliciesRequest {
  /** Required. The parent resource of the AuthorizationPolicy. Must be in the format `projects/{project}/locations/{location}`. */
  parent: string;
  /** Required. Short name of the AuthorizationPolicy resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "authz_policy". */
  authorizationPolicyId?: string;
  /** Request body */
  body?: AuthorizationPolicy;
}

export const CreateProjectsLocationsAuthorizationPoliciesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    authorizationPolicyId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("authorizationPolicyId"),
    ),
    body: Schema.optional(AuthorizationPolicy).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/authorizationPolicies",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsAuthorizationPoliciesRequest>;

export type CreateProjectsLocationsAuthorizationPoliciesResponse = Operation;
export const CreateProjectsLocationsAuthorizationPoliciesResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsAuthorizationPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new AuthorizationPolicy in a given project and location. */
export const createProjectsLocationsAuthorizationPolicies: API.OperationMethod<
  CreateProjectsLocationsAuthorizationPoliciesRequest,
  CreateProjectsLocationsAuthorizationPoliciesResponse,
  CreateProjectsLocationsAuthorizationPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAuthorizationPoliciesRequest,
  output: CreateProjectsLocationsAuthorizationPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAuthorizationPoliciesRequest {
  /** Required. A name of the AuthorizationPolicy to get. Must be in the format `projects/{project}/locations/{location}/authorizationPolicies/*`. */
  name: string;
}

export const GetProjectsLocationsAuthorizationPoliciesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsAuthorizationPoliciesRequest>;

export type GetProjectsLocationsAuthorizationPoliciesResponse =
  AuthorizationPolicy;
export const GetProjectsLocationsAuthorizationPoliciesResponse =
  /*@__PURE__*/ AuthorizationPolicy;

export type GetProjectsLocationsAuthorizationPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single AuthorizationPolicy. */
export const getProjectsLocationsAuthorizationPolicies: API.OperationMethod<
  GetProjectsLocationsAuthorizationPoliciesRequest,
  GetProjectsLocationsAuthorizationPoliciesResponse,
  GetProjectsLocationsAuthorizationPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAuthorizationPoliciesRequest,
  output: GetProjectsLocationsAuthorizationPoliciesResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsAuthorizationPoliciesRequest {
  /** Optional. Field mask is used to specify the fields to be overwritten in the AuthorizationPolicy resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Required. Name of the AuthorizationPolicy resource. It matches pattern `projects/{project}/locations/{location}/authorizationPolicies/`. */
  name: string;
  /** Request body */
  body?: AuthorizationPolicy;
}

export const PatchProjectsLocationsAuthorizationPoliciesRequest =
  /*@__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(AuthorizationPolicy).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsAuthorizationPoliciesRequest>;

export type PatchProjectsLocationsAuthorizationPoliciesResponse = Operation;
export const PatchProjectsLocationsAuthorizationPoliciesResponse =
  /*@__PURE__*/ Operation;

export type PatchProjectsLocationsAuthorizationPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single AuthorizationPolicy. */
export const patchProjectsLocationsAuthorizationPolicies: API.OperationMethod<
  PatchProjectsLocationsAuthorizationPoliciesRequest,
  PatchProjectsLocationsAuthorizationPoliciesResponse,
  PatchProjectsLocationsAuthorizationPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAuthorizationPoliciesRequest,
  output: PatchProjectsLocationsAuthorizationPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsAuthorizationPoliciesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsAuthorizationPoliciesRequest =
  /*@__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<SetIamPolicyProjectsLocationsAuthorizationPoliciesRequest>;

export type SetIamPolicyProjectsLocationsAuthorizationPoliciesResponse =
  GoogleIamV1Policy;
export const SetIamPolicyProjectsLocationsAuthorizationPoliciesResponse =
  /*@__PURE__*/ GoogleIamV1Policy;

export type SetIamPolicyProjectsLocationsAuthorizationPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsAuthorizationPolicies: API.OperationMethod<
  SetIamPolicyProjectsLocationsAuthorizationPoliciesRequest,
  SetIamPolicyProjectsLocationsAuthorizationPoliciesResponse,
  SetIamPolicyProjectsLocationsAuthorizationPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsAuthorizationPoliciesRequest,
  output: SetIamPolicyProjectsLocationsAuthorizationPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAuthorizationPoliciesRequest {
  /** Maximum number of AuthorizationPolicies to return per call. */
  pageSize?: number;
  /** Required. The project and location from which the AuthorizationPolicies should be listed, specified in the format `projects/{project}/locations/{location}`. */
  parent: string;
  /** The value returned by the last `ListAuthorizationPoliciesResponse` Indicates that this is a continuation of a prior `ListAuthorizationPolicies` call, and that the system should return the next page of data. */
  pageToken?: string;
}

export const ListProjectsLocationsAuthorizationPoliciesRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/authorizationPolicies" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsAuthorizationPoliciesRequest>;

export type ListProjectsLocationsAuthorizationPoliciesResponse =
  ListAuthorizationPoliciesResponse;
export const ListProjectsLocationsAuthorizationPoliciesResponse =
  /*@__PURE__*/ ListAuthorizationPoliciesResponse;

export type ListProjectsLocationsAuthorizationPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists AuthorizationPolicies in a given project and location. */
export const listProjectsLocationsAuthorizationPolicies: API.PaginatedOperationMethod<
  ListProjectsLocationsAuthorizationPoliciesRequest,
  ListProjectsLocationsAuthorizationPoliciesResponse,
  ListProjectsLocationsAuthorizationPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAuthorizationPoliciesRequest,
  output: ListProjectsLocationsAuthorizationPoliciesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetIamPolicyProjectsLocationsAuthorizationPoliciesRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsAuthorizationPoliciesRequest =
  /*@__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Codec<GetIamPolicyProjectsLocationsAuthorizationPoliciesRequest>;

export type GetIamPolicyProjectsLocationsAuthorizationPoliciesResponse =
  GoogleIamV1Policy;
export const GetIamPolicyProjectsLocationsAuthorizationPoliciesResponse =
  /*@__PURE__*/ GoogleIamV1Policy;

export type GetIamPolicyProjectsLocationsAuthorizationPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsAuthorizationPolicies: API.OperationMethod<
  GetIamPolicyProjectsLocationsAuthorizationPoliciesRequest,
  GetIamPolicyProjectsLocationsAuthorizationPoliciesResponse,
  GetIamPolicyProjectsLocationsAuthorizationPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsAuthorizationPoliciesRequest,
  output: GetIamPolicyProjectsLocationsAuthorizationPoliciesResponse,
  errors: [NotFound, Forbidden],
}));

export interface TestIamPermissionsProjectsLocationsAuthorizationPoliciesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsAuthorizationPoliciesRequest =
  /*@__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1TestIamPermissionsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<TestIamPermissionsProjectsLocationsAuthorizationPoliciesRequest>;

export type TestIamPermissionsProjectsLocationsAuthorizationPoliciesResponse =
  GoogleIamV1TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsAuthorizationPoliciesResponse =
  /*@__PURE__*/ GoogleIamV1TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsAuthorizationPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsAuthorizationPolicies: API.OperationMethod<
  TestIamPermissionsProjectsLocationsAuthorizationPoliciesRequest,
  TestIamPermissionsProjectsLocationsAuthorizationPoliciesResponse,
  TestIamPermissionsProjectsLocationsAuthorizationPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsAuthorizationPoliciesRequest,
  output: TestIamPermissionsProjectsLocationsAuthorizationPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsAuthorizationPoliciesRequest {
  /** Required. A name of the AuthorizationPolicy to delete. Must be in the format `projects/{project}/locations/{location}/authorizationPolicies/*`. */
  name: string;
}

export const DeleteProjectsLocationsAuthorizationPoliciesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsAuthorizationPoliciesRequest>;

export type DeleteProjectsLocationsAuthorizationPoliciesResponse = Operation;
export const DeleteProjectsLocationsAuthorizationPoliciesResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsAuthorizationPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single AuthorizationPolicy. */
export const deleteProjectsLocationsAuthorizationPolicies: API.OperationMethod<
  DeleteProjectsLocationsAuthorizationPoliciesRequest,
  DeleteProjectsLocationsAuthorizationPoliciesResponse,
  DeleteProjectsLocationsAuthorizationPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAuthorizationPoliciesRequest,
  output: DeleteProjectsLocationsAuthorizationPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOrganizationsLocationsRequest {
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
}

export const ListOrganizationsLocationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}/locations" }),
    svc,
  ) as unknown as Schema.Codec<ListOrganizationsLocationsRequest>;

export type ListOrganizationsLocationsResponse = ListLocationsResponse;
export const ListOrganizationsLocationsResponse =
  /*@__PURE__*/ ListLocationsResponse;

export type ListOrganizationsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the ListLocationsRequest.name field: * **Global locations**: If `name` is empty, the method lists the public locations available to all projects. * **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version. */
export const listOrganizationsLocations: API.PaginatedOperationMethod<
  ListOrganizationsLocationsRequest,
  ListOrganizationsLocationsResponse,
  ListOrganizationsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsLocationsRequest,
  output: ListOrganizationsLocationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetOrganizationsLocationsRequest {
  /** Resource name for the location. */
  name: string;
}

export const GetOrganizationsLocationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetOrganizationsLocationsRequest>;

export type GetOrganizationsLocationsResponse = Location;
export const GetOrganizationsLocationsResponse = /*@__PURE__*/ Location;

export type GetOrganizationsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets information about a location. */
export const getOrganizationsLocations: API.OperationMethod<
  GetOrganizationsLocationsRequest,
  GetOrganizationsLocationsResponse,
  GetOrganizationsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetOrganizationsLocationsRequest,
  output: GetOrganizationsLocationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteOrganizationsLocationsFirewallEndpointsRequest {
  /** Required. Name of the resource */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteOrganizationsLocationsFirewallEndpointsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteOrganizationsLocationsFirewallEndpointsRequest>;

export type DeleteOrganizationsLocationsFirewallEndpointsResponse = Operation;
export const DeleteOrganizationsLocationsFirewallEndpointsResponse =
  /*@__PURE__*/ Operation;

export type DeleteOrganizationsLocationsFirewallEndpointsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single org Endpoint. */
export const deleteOrganizationsLocationsFirewallEndpoints: API.OperationMethod<
  DeleteOrganizationsLocationsFirewallEndpointsRequest,
  DeleteOrganizationsLocationsFirewallEndpointsResponse,
  DeleteOrganizationsLocationsFirewallEndpointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteOrganizationsLocationsFirewallEndpointsRequest,
  output: DeleteOrganizationsLocationsFirewallEndpointsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOrganizationsLocationsFirewallEndpointsRequest {
  /** Required. Parent value for ListEndpointsRequest */
  parent: string;
  /** A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Hint for how to order the results */
  orderBy?: string;
  /** Optional. Filtering results */
  filter?: string;
}

export const ListOrganizationsLocationsFirewallEndpointsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/firewallEndpoints" }),
    svc,
  ) as unknown as Schema.Codec<ListOrganizationsLocationsFirewallEndpointsRequest>;

export type ListOrganizationsLocationsFirewallEndpointsResponse =
  ListFirewallEndpointsResponse;
export const ListOrganizationsLocationsFirewallEndpointsResponse =
  /*@__PURE__*/ ListFirewallEndpointsResponse;

export type ListOrganizationsLocationsFirewallEndpointsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists FirewallEndpoints in a given organization and location. */
export const listOrganizationsLocationsFirewallEndpoints: API.PaginatedOperationMethod<
  ListOrganizationsLocationsFirewallEndpointsRequest,
  ListOrganizationsLocationsFirewallEndpointsResponse,
  ListOrganizationsLocationsFirewallEndpointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsLocationsFirewallEndpointsRequest,
  output: ListOrganizationsLocationsFirewallEndpointsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetOrganizationsLocationsFirewallEndpointsRequest {
  /** Required. Name of the resource */
  name: string;
}

export const GetOrganizationsLocationsFirewallEndpointsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetOrganizationsLocationsFirewallEndpointsRequest>;

export type GetOrganizationsLocationsFirewallEndpointsResponse =
  FirewallEndpoint;
export const GetOrganizationsLocationsFirewallEndpointsResponse =
  /*@__PURE__*/ FirewallEndpoint;

export type GetOrganizationsLocationsFirewallEndpointsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single org Endpoint. */
export const getOrganizationsLocationsFirewallEndpoints: API.OperationMethod<
  GetOrganizationsLocationsFirewallEndpointsRequest,
  GetOrganizationsLocationsFirewallEndpointsResponse,
  GetOrganizationsLocationsFirewallEndpointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetOrganizationsLocationsFirewallEndpointsRequest,
  output: GetOrganizationsLocationsFirewallEndpointsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchOrganizationsLocationsFirewallEndpointsRequest {
  /** Required. Field mask is used to specify the fields to be overwritten in the Endpoint resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Immutable. Identifier. Name of resource. */
  name: string;
  /** Request body */
  body?: FirewallEndpoint;
}

export const PatchOrganizationsLocationsFirewallEndpointsRequest =
  /*@__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(FirewallEndpoint).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchOrganizationsLocationsFirewallEndpointsRequest>;

export type PatchOrganizationsLocationsFirewallEndpointsResponse = Operation;
export const PatchOrganizationsLocationsFirewallEndpointsResponse =
  /*@__PURE__*/ Operation;

export type PatchOrganizationsLocationsFirewallEndpointsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update a single org Endpoint. */
export const patchOrganizationsLocationsFirewallEndpoints: API.OperationMethod<
  PatchOrganizationsLocationsFirewallEndpointsRequest,
  PatchOrganizationsLocationsFirewallEndpointsResponse,
  PatchOrganizationsLocationsFirewallEndpointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchOrganizationsLocationsFirewallEndpointsRequest,
  output: PatchOrganizationsLocationsFirewallEndpointsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateOrganizationsLocationsFirewallEndpointsRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Value for parent. */
  parent: string;
  /** Required. Id of the requesting object. If auto-generating Id server-side, remove this field and firewall_endpoint_id from the method_signature of Create RPC. */
  firewallEndpointId?: string;
  /** Request body */
  body?: FirewallEndpoint;
}

export const CreateOrganizationsLocationsFirewallEndpointsRequest =
  /*@__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    firewallEndpointId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("firewallEndpointId"),
    ),
    body: Schema.optional(FirewallEndpoint).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/firewallEndpoints",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateOrganizationsLocationsFirewallEndpointsRequest>;

export type CreateOrganizationsLocationsFirewallEndpointsResponse = Operation;
export const CreateOrganizationsLocationsFirewallEndpointsResponse =
  /*@__PURE__*/ Operation;

export type CreateOrganizationsLocationsFirewallEndpointsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new FirewallEndpoint in a given organization and location. */
export const createOrganizationsLocationsFirewallEndpoints: API.OperationMethod<
  CreateOrganizationsLocationsFirewallEndpointsRequest,
  CreateOrganizationsLocationsFirewallEndpointsResponse,
  CreateOrganizationsLocationsFirewallEndpointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateOrganizationsLocationsFirewallEndpointsRequest,
  output: CreateOrganizationsLocationsFirewallEndpointsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOrganizationsLocationsFirewallEndpointsWildfireVerdictChangeRequestsRequest {
  /** Required. Parent value for ListWildfireVerdictChangeRequestsRequest. The parent is a firewall endpoint resource. Format: organizations|projects/{project_or_organization}/locations/{location}/firewallEndpoints/{firewall_endpoint} */
  parent: string;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. Filter expression to filter the results. See AIP-160 for filtering syntax. Supported fields are: - `sha256` (string, equality only, e.g. `sha256 = "..."`) - `state` (enum, equality only, e.g. `state = "ACTIVE"`) - `create_time` (timestamp, comparisons, e.g. `create_time > "2026-01-01T00:00:00Z"`) */
  filter?: string;
}

export const ListOrganizationsLocationsFirewallEndpointsWildfireVerdictChangeRequestsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1beta1/{+parent}/wildfireVerdictChangeRequests",
    }),
    svc,
  ) as unknown as Schema.Codec<ListOrganizationsLocationsFirewallEndpointsWildfireVerdictChangeRequestsRequest>;

export type ListOrganizationsLocationsFirewallEndpointsWildfireVerdictChangeRequestsResponse =
  ListWildfireVerdictChangeRequestsResponse;
export const ListOrganizationsLocationsFirewallEndpointsWildfireVerdictChangeRequestsResponse =
  /*@__PURE__*/ ListWildfireVerdictChangeRequestsResponse;

export type ListOrganizationsLocationsFirewallEndpointsWildfireVerdictChangeRequestsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists WildfireVerdictChangeRequests in a given Firewall Endpoint in an organization and location. */
export const listOrganizationsLocationsFirewallEndpointsWildfireVerdictChangeRequests: API.PaginatedOperationMethod<
  ListOrganizationsLocationsFirewallEndpointsWildfireVerdictChangeRequestsRequest,
  ListOrganizationsLocationsFirewallEndpointsWildfireVerdictChangeRequestsResponse,
  ListOrganizationsLocationsFirewallEndpointsWildfireVerdictChangeRequestsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input:
    ListOrganizationsLocationsFirewallEndpointsWildfireVerdictChangeRequestsRequest,
  output:
    ListOrganizationsLocationsFirewallEndpointsWildfireVerdictChangeRequestsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateOrganizationsLocationsFirewallEndpointsWildfireVerdictChangeRequestsRequest {
  /** Required. Parent value for CreateWildfireVerdictChangeRequestRequest. The parent is a firewall endpoint resource. Format: organizations|projects/{project_or_organization}/locations/{location}/firewallEndpoints/{firewall_endpoint} */
  parent: string;
  /** Request body */
  body?: WildfireVerdictChangeRequest;
}

export const CreateOrganizationsLocationsFirewallEndpointsWildfireVerdictChangeRequestsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(WildfireVerdictChangeRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/wildfireVerdictChangeRequests",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateOrganizationsLocationsFirewallEndpointsWildfireVerdictChangeRequestsRequest>;

export type CreateOrganizationsLocationsFirewallEndpointsWildfireVerdictChangeRequestsResponse =
  WildfireVerdictChangeRequest;
export const CreateOrganizationsLocationsFirewallEndpointsWildfireVerdictChangeRequestsResponse =
  /*@__PURE__*/ WildfireVerdictChangeRequest;

export type CreateOrganizationsLocationsFirewallEndpointsWildfireVerdictChangeRequestsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create WildfireVerdictChangeRequest in a given Firewall Endpoint in an organization and location. */
export const createOrganizationsLocationsFirewallEndpointsWildfireVerdictChangeRequests: API.OperationMethod<
  CreateOrganizationsLocationsFirewallEndpointsWildfireVerdictChangeRequestsRequest,
  CreateOrganizationsLocationsFirewallEndpointsWildfireVerdictChangeRequestsResponse,
  CreateOrganizationsLocationsFirewallEndpointsWildfireVerdictChangeRequestsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input:
    CreateOrganizationsLocationsFirewallEndpointsWildfireVerdictChangeRequestsRequest,
  output:
    CreateOrganizationsLocationsFirewallEndpointsWildfireVerdictChangeRequestsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetOrganizationsLocationsFirewallEndpointsWildfireVerdictChangeRequestsRequest {
  /** Required. Name of the WildfireVerdictChangeRequest to retrieve. Format: organizations|projects/{project_or_organization}/locations/{location}/firewallEndpoints/{firewall_endpoint}/wildfireVerdictChangeRequests/{wildfire_verdict_change_request_id} Where {wildfire_verdict_change_request_id} is the ID in the format: ^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$ */
  name: string;
}

export const GetOrganizationsLocationsFirewallEndpointsWildfireVerdictChangeRequestsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetOrganizationsLocationsFirewallEndpointsWildfireVerdictChangeRequestsRequest>;

export type GetOrganizationsLocationsFirewallEndpointsWildfireVerdictChangeRequestsResponse =
  WildfireVerdictChangeRequest;
export const GetOrganizationsLocationsFirewallEndpointsWildfireVerdictChangeRequestsResponse =
  /*@__PURE__*/ WildfireVerdictChangeRequest;

export type GetOrganizationsLocationsFirewallEndpointsWildfireVerdictChangeRequestsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get WildfireVerdictChangeRequest in a given Firewall Endpoint in an organization and location. */
export const getOrganizationsLocationsFirewallEndpointsWildfireVerdictChangeRequests: API.OperationMethod<
  GetOrganizationsLocationsFirewallEndpointsWildfireVerdictChangeRequestsRequest,
  GetOrganizationsLocationsFirewallEndpointsWildfireVerdictChangeRequestsResponse,
  GetOrganizationsLocationsFirewallEndpointsWildfireVerdictChangeRequestsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input:
    GetOrganizationsLocationsFirewallEndpointsWildfireVerdictChangeRequestsRequest,
  output:
    GetOrganizationsLocationsFirewallEndpointsWildfireVerdictChangeRequestsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetOrganizationsLocationsSecurityProfilesRequest {
  /** Required. A name of the SecurityProfile to get. Must be in the format `projects|organizations/* /locations/{location}/securityProfiles/{security_profile_id}`. */
  name: string;
}

export const GetOrganizationsLocationsSecurityProfilesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetOrganizationsLocationsSecurityProfilesRequest>;

export type GetOrganizationsLocationsSecurityProfilesResponse = SecurityProfile;
export const GetOrganizationsLocationsSecurityProfilesResponse =
  /*@__PURE__*/ SecurityProfile;

export type GetOrganizationsLocationsSecurityProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single SecurityProfile. */
export const getOrganizationsLocationsSecurityProfiles: API.OperationMethod<
  GetOrganizationsLocationsSecurityProfilesRequest,
  GetOrganizationsLocationsSecurityProfilesResponse,
  GetOrganizationsLocationsSecurityProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetOrganizationsLocationsSecurityProfilesRequest,
  output: GetOrganizationsLocationsSecurityProfilesResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchOrganizationsLocationsSecurityProfilesRequest {
  /** Required. Field mask is used to specify the fields to be overwritten in the SecurityProfile resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. */
  updateMask?: string;
  /** Immutable. Identifier. Name of the SecurityProfile resource. It matches pattern `projects|organizations/* /locations/{location}/securityProfiles/{security_profile}`. */
  name: string;
  /** Request body */
  body?: SecurityProfile;
}

export const PatchOrganizationsLocationsSecurityProfilesRequest =
  /*@__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SecurityProfile).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchOrganizationsLocationsSecurityProfilesRequest>;

export type PatchOrganizationsLocationsSecurityProfilesResponse = Operation;
export const PatchOrganizationsLocationsSecurityProfilesResponse =
  /*@__PURE__*/ Operation;

export type PatchOrganizationsLocationsSecurityProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single SecurityProfile. */
export const patchOrganizationsLocationsSecurityProfiles: API.OperationMethod<
  PatchOrganizationsLocationsSecurityProfilesRequest,
  PatchOrganizationsLocationsSecurityProfilesResponse,
  PatchOrganizationsLocationsSecurityProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchOrganizationsLocationsSecurityProfilesRequest,
  output: PatchOrganizationsLocationsSecurityProfilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateOrganizationsLocationsSecurityProfilesRequest {
  /** Required. Short name of the SecurityProfile resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "security_profile1". */
  securityProfileId?: string;
  /** Required. The parent resource of the SecurityProfile. Must be in the format `projects|organizations/* /locations/{location}`. */
  parent: string;
  /** Request body */
  body?: SecurityProfile;
}

export const CreateOrganizationsLocationsSecurityProfilesRequest =
  /*@__PURE__*/ Schema.Struct({
    securityProfileId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("securityProfileId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(SecurityProfile).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/securityProfiles",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateOrganizationsLocationsSecurityProfilesRequest>;

export type CreateOrganizationsLocationsSecurityProfilesResponse = Operation;
export const CreateOrganizationsLocationsSecurityProfilesResponse =
  /*@__PURE__*/ Operation;

export type CreateOrganizationsLocationsSecurityProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new SecurityProfile in a given organization and location. */
export const createOrganizationsLocationsSecurityProfiles: API.OperationMethod<
  CreateOrganizationsLocationsSecurityProfilesRequest,
  CreateOrganizationsLocationsSecurityProfilesResponse,
  CreateOrganizationsLocationsSecurityProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateOrganizationsLocationsSecurityProfilesRequest,
  output: CreateOrganizationsLocationsSecurityProfilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteOrganizationsLocationsSecurityProfilesRequest {
  /** Required. A name of the SecurityProfile to delete. Must be in the format `projects|organizations/* /locations/{location}/securityProfiles/{security_profile_id}`. */
  name: string;
  /** Optional. If client provided etag is out of date, delete will return FAILED_PRECONDITION error. */
  etag?: string;
}

export const DeleteOrganizationsLocationsSecurityProfilesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteOrganizationsLocationsSecurityProfilesRequest>;

export type DeleteOrganizationsLocationsSecurityProfilesResponse = Operation;
export const DeleteOrganizationsLocationsSecurityProfilesResponse =
  /*@__PURE__*/ Operation;

export type DeleteOrganizationsLocationsSecurityProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single SecurityProfile. */
export const deleteOrganizationsLocationsSecurityProfiles: API.OperationMethod<
  DeleteOrganizationsLocationsSecurityProfilesRequest,
  DeleteOrganizationsLocationsSecurityProfilesResponse,
  DeleteOrganizationsLocationsSecurityProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteOrganizationsLocationsSecurityProfilesRequest,
  output: DeleteOrganizationsLocationsSecurityProfilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOrganizationsLocationsSecurityProfilesRequest {
  /** Optional. Maximum number of SecurityProfiles to return per call. */
  pageSize?: number;
  /** Required. The project or organization and location from which the SecurityProfiles should be listed, specified in the format `projects|organizations/* /locations/{location}`. */
  parent: string;
  /** Optional. The value returned by the last `ListSecurityProfilesResponse` Indicates that this is a continuation of a prior `ListSecurityProfiles` call, and that the system should return the next page of data. */
  pageToken?: string;
}

export const ListOrganizationsLocationsSecurityProfilesRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/securityProfiles" }),
    svc,
  ) as unknown as Schema.Codec<ListOrganizationsLocationsSecurityProfilesRequest>;

export type ListOrganizationsLocationsSecurityProfilesResponse =
  ListSecurityProfilesResponse;
export const ListOrganizationsLocationsSecurityProfilesResponse =
  /*@__PURE__*/ ListSecurityProfilesResponse;

export type ListOrganizationsLocationsSecurityProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists SecurityProfiles in a given organization and location. */
export const listOrganizationsLocationsSecurityProfiles: API.PaginatedOperationMethod<
  ListOrganizationsLocationsSecurityProfilesRequest,
  ListOrganizationsLocationsSecurityProfilesResponse,
  ListOrganizationsLocationsSecurityProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsLocationsSecurityProfilesRequest,
  output: ListOrganizationsLocationsSecurityProfilesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListReferencesOrganizationsLocationsAddressGroupsRequest {
  /** Required. A name of the AddressGroup to clone items to. Must be in the format `projects|organization/* /locations/{location}/addressGroups/*`. */
  addressGroup: string;
  /** The maximum number of references to return. If unspecified, server will pick an appropriate default. Server may return fewer items than requested. A caller should only rely on response's next_page_token to determine if there are more AddressGroupUsers left to be queried. */
  pageSize?: number;
  /** The next_page_token value returned from a previous List request, if any. */
  pageToken?: string;
}

export const ListReferencesOrganizationsLocationsAddressGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    addressGroup: Schema.String.pipe(T.HttpPath("addressGroup")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+addressGroup}:listReferences" }),
    svc,
  ) as unknown as Schema.Codec<ListReferencesOrganizationsLocationsAddressGroupsRequest>;

export type ListReferencesOrganizationsLocationsAddressGroupsResponse =
  ListAddressGroupReferencesResponse;
export const ListReferencesOrganizationsLocationsAddressGroupsResponse =
  /*@__PURE__*/ ListAddressGroupReferencesResponse;

export type ListReferencesOrganizationsLocationsAddressGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists references of an address group. */
export const listReferencesOrganizationsLocationsAddressGroups: API.PaginatedOperationMethod<
  ListReferencesOrganizationsLocationsAddressGroupsRequest,
  ListReferencesOrganizationsLocationsAddressGroupsResponse,
  ListReferencesOrganizationsLocationsAddressGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListReferencesOrganizationsLocationsAddressGroupsRequest,
  output: ListReferencesOrganizationsLocationsAddressGroupsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetOrganizationsLocationsAddressGroupsRequest {
  /** Required. A name of the AddressGroup to get. Must be in the format `projects/* /locations/{location}/addressGroups/*`. */
  name: string;
}

export const GetOrganizationsLocationsAddressGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetOrganizationsLocationsAddressGroupsRequest>;

export type GetOrganizationsLocationsAddressGroupsResponse = AddressGroup;
export const GetOrganizationsLocationsAddressGroupsResponse =
  /*@__PURE__*/ AddressGroup;

export type GetOrganizationsLocationsAddressGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single address group. */
export const getOrganizationsLocationsAddressGroups: API.OperationMethod<
  GetOrganizationsLocationsAddressGroupsRequest,
  GetOrganizationsLocationsAddressGroupsResponse,
  GetOrganizationsLocationsAddressGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetOrganizationsLocationsAddressGroupsRequest,
  output: GetOrganizationsLocationsAddressGroupsResponse,
  errors: [NotFound, Forbidden],
}));

export interface RemoveItemsOrganizationsLocationsAddressGroupsRequest {
  /** Required. A name of the AddressGroup to remove items from. Must be in the format `projects|organization/* /locations/{location}/addressGroups/*`. */
  addressGroup: string;
  /** Request body */
  body?: RemoveAddressGroupItemsRequest;
}

export const RemoveItemsOrganizationsLocationsAddressGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    addressGroup: Schema.String.pipe(T.HttpPath("addressGroup")),
    body: Schema.optional(RemoveAddressGroupItemsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+addressGroup}:removeItems",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<RemoveItemsOrganizationsLocationsAddressGroupsRequest>;

export type RemoveItemsOrganizationsLocationsAddressGroupsResponse = Operation;
export const RemoveItemsOrganizationsLocationsAddressGroupsResponse =
  /*@__PURE__*/ Operation;

export type RemoveItemsOrganizationsLocationsAddressGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Removes items from an address group. */
export const removeItemsOrganizationsLocationsAddressGroups: API.OperationMethod<
  RemoveItemsOrganizationsLocationsAddressGroupsRequest,
  RemoveItemsOrganizationsLocationsAddressGroupsResponse,
  RemoveItemsOrganizationsLocationsAddressGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RemoveItemsOrganizationsLocationsAddressGroupsRequest,
  output: RemoveItemsOrganizationsLocationsAddressGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOrganizationsLocationsAddressGroupsRequest {
  /** Maximum number of AddressGroups to return per call. */
  pageSize?: number;
  /** Optional. If true, allow partial responses for multi-regional Aggregated List requests. */
  returnPartialSuccess?: boolean;
  /** Required. The project and location from which the AddressGroups should be listed, specified in the format `projects/* /locations/{location}`. */
  parent: string;
  /** The value returned by the last `ListAddressGroupsResponse` Indicates that this is a continuation of a prior `ListAddressGroups` call, and that the system should return the next page of data. */
  pageToken?: string;
}

export const ListOrganizationsLocationsAddressGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/addressGroups" }),
    svc,
  ) as unknown as Schema.Codec<ListOrganizationsLocationsAddressGroupsRequest>;

export type ListOrganizationsLocationsAddressGroupsResponse =
  ListAddressGroupsResponse;
export const ListOrganizationsLocationsAddressGroupsResponse =
  /*@__PURE__*/ ListAddressGroupsResponse;

export type ListOrganizationsLocationsAddressGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists address groups in a given project and location. */
export const listOrganizationsLocationsAddressGroups: API.PaginatedOperationMethod<
  ListOrganizationsLocationsAddressGroupsRequest,
  ListOrganizationsLocationsAddressGroupsResponse,
  ListOrganizationsLocationsAddressGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsLocationsAddressGroupsRequest,
  output: ListOrganizationsLocationsAddressGroupsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteOrganizationsLocationsAddressGroupsRequest {
  /** Required. A name of the AddressGroup to delete. Must be in the format `projects/* /locations/{location}/addressGroups/*`. */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteOrganizationsLocationsAddressGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteOrganizationsLocationsAddressGroupsRequest>;

export type DeleteOrganizationsLocationsAddressGroupsResponse = Operation;
export const DeleteOrganizationsLocationsAddressGroupsResponse =
  /*@__PURE__*/ Operation;

export type DeleteOrganizationsLocationsAddressGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an address group. */
export const deleteOrganizationsLocationsAddressGroups: API.OperationMethod<
  DeleteOrganizationsLocationsAddressGroupsRequest,
  DeleteOrganizationsLocationsAddressGroupsResponse,
  DeleteOrganizationsLocationsAddressGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteOrganizationsLocationsAddressGroupsRequest,
  output: DeleteOrganizationsLocationsAddressGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateOrganizationsLocationsAddressGroupsRequest {
  /** Required. The parent resource of the AddressGroup. Must be in the format `projects/* /locations/{location}`. */
  parent: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Short name of the AddressGroup resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "authz_policy". */
  addressGroupId?: string;
  /** Request body */
  body?: AddressGroup;
}

export const CreateOrganizationsLocationsAddressGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    addressGroupId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("addressGroupId"),
    ),
    body: Schema.optional(AddressGroup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/addressGroups",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateOrganizationsLocationsAddressGroupsRequest>;

export type CreateOrganizationsLocationsAddressGroupsResponse = Operation;
export const CreateOrganizationsLocationsAddressGroupsResponse =
  /*@__PURE__*/ Operation;

export type CreateOrganizationsLocationsAddressGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new address group in a given project and location. */
export const createOrganizationsLocationsAddressGroups: API.OperationMethod<
  CreateOrganizationsLocationsAddressGroupsRequest,
  CreateOrganizationsLocationsAddressGroupsResponse,
  CreateOrganizationsLocationsAddressGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateOrganizationsLocationsAddressGroupsRequest,
  output: CreateOrganizationsLocationsAddressGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchOrganizationsLocationsAddressGroupsRequest {
  /** Required. Name of the AddressGroup resource. It matches pattern `projects/* /locations/{location}/addressGroups/`. */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. Field mask is used to specify the fields to be overwritten in the AddressGroup resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Request body */
  body?: AddressGroup;
}

export const PatchOrganizationsLocationsAddressGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(AddressGroup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchOrganizationsLocationsAddressGroupsRequest>;

export type PatchOrganizationsLocationsAddressGroupsResponse = Operation;
export const PatchOrganizationsLocationsAddressGroupsResponse =
  /*@__PURE__*/ Operation;

export type PatchOrganizationsLocationsAddressGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates parameters of an address group. */
export const patchOrganizationsLocationsAddressGroups: API.OperationMethod<
  PatchOrganizationsLocationsAddressGroupsRequest,
  PatchOrganizationsLocationsAddressGroupsResponse,
  PatchOrganizationsLocationsAddressGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchOrganizationsLocationsAddressGroupsRequest,
  output: PatchOrganizationsLocationsAddressGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface AddItemsOrganizationsLocationsAddressGroupsRequest {
  /** Required. A name of the AddressGroup to add items to. Must be in the format `projects|organization/* /locations/{location}/addressGroups/*`. */
  addressGroup: string;
  /** Request body */
  body?: AddAddressGroupItemsRequest;
}

export const AddItemsOrganizationsLocationsAddressGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    addressGroup: Schema.String.pipe(T.HttpPath("addressGroup")),
    body: Schema.optional(AddAddressGroupItemsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+addressGroup}:addItems",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<AddItemsOrganizationsLocationsAddressGroupsRequest>;

export type AddItemsOrganizationsLocationsAddressGroupsResponse = Operation;
export const AddItemsOrganizationsLocationsAddressGroupsResponse =
  /*@__PURE__*/ Operation;

export type AddItemsOrganizationsLocationsAddressGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Adds items to an address group. */
export const addItemsOrganizationsLocationsAddressGroups: API.OperationMethod<
  AddItemsOrganizationsLocationsAddressGroupsRequest,
  AddItemsOrganizationsLocationsAddressGroupsResponse,
  AddItemsOrganizationsLocationsAddressGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AddItemsOrganizationsLocationsAddressGroupsRequest,
  output: AddItemsOrganizationsLocationsAddressGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsOrganizationsLocationsAddressGroupsRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1TestIamPermissionsRequest;
}

export const TestIamPermissionsOrganizationsLocationsAddressGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1TestIamPermissionsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<TestIamPermissionsOrganizationsLocationsAddressGroupsRequest>;

export type TestIamPermissionsOrganizationsLocationsAddressGroupsResponse =
  GoogleIamV1TestIamPermissionsResponse;
export const TestIamPermissionsOrganizationsLocationsAddressGroupsResponse =
  /*@__PURE__*/ GoogleIamV1TestIamPermissionsResponse;

export type TestIamPermissionsOrganizationsLocationsAddressGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsOrganizationsLocationsAddressGroups: API.OperationMethod<
  TestIamPermissionsOrganizationsLocationsAddressGroupsRequest,
  TestIamPermissionsOrganizationsLocationsAddressGroupsResponse,
  TestIamPermissionsOrganizationsLocationsAddressGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TestIamPermissionsOrganizationsLocationsAddressGroupsRequest,
  output: TestIamPermissionsOrganizationsLocationsAddressGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CloneItemsOrganizationsLocationsAddressGroupsRequest {
  /** Required. A name of the AddressGroup to clone items to. Must be in the format `projects|organization/* /locations/{location}/addressGroups/*`. */
  addressGroup: string;
  /** Request body */
  body?: CloneAddressGroupItemsRequest;
}

export const CloneItemsOrganizationsLocationsAddressGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    addressGroup: Schema.String.pipe(T.HttpPath("addressGroup")),
    body: Schema.optional(CloneAddressGroupItemsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+addressGroup}:cloneItems",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CloneItemsOrganizationsLocationsAddressGroupsRequest>;

export type CloneItemsOrganizationsLocationsAddressGroupsResponse = Operation;
export const CloneItemsOrganizationsLocationsAddressGroupsResponse =
  /*@__PURE__*/ Operation;

export type CloneItemsOrganizationsLocationsAddressGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Clones items from one address group to another. */
export const cloneItemsOrganizationsLocationsAddressGroups: API.OperationMethod<
  CloneItemsOrganizationsLocationsAddressGroupsRequest,
  CloneItemsOrganizationsLocationsAddressGroupsResponse,
  CloneItemsOrganizationsLocationsAddressGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CloneItemsOrganizationsLocationsAddressGroupsRequest,
  output: CloneItemsOrganizationsLocationsAddressGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOrganizationsLocationsOperationsRequest {
  /** The standard list page token. */
  pageToken?: string;
  /** The standard list page size. */
  pageSize?: number;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list filter. */
  filter?: string;
}

export const ListOrganizationsLocationsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}/operations" }),
    svc,
  ) as unknown as Schema.Codec<ListOrganizationsLocationsOperationsRequest>;

export type ListOrganizationsLocationsOperationsResponse =
  ListOperationsResponse;
export const ListOrganizationsLocationsOperationsResponse =
  /*@__PURE__*/ ListOperationsResponse;

export type ListOrganizationsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. */
export const listOrganizationsLocationsOperations: API.PaginatedOperationMethod<
  ListOrganizationsLocationsOperationsRequest,
  ListOrganizationsLocationsOperationsResponse,
  ListOrganizationsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsLocationsOperationsRequest,
  output: ListOrganizationsLocationsOperationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CancelOrganizationsLocationsOperationsRequest {
  /** The name of the operation resource to be cancelled. */
  name: string;
  /** Request body */
  body?: CancelOperationRequest;
}

export const CancelOrganizationsLocationsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CancelOperationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta1/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CancelOrganizationsLocationsOperationsRequest>;

export type CancelOrganizationsLocationsOperationsResponse = Empty;
export const CancelOrganizationsLocationsOperationsResponse =
  /*@__PURE__*/ Empty;

export type CancelOrganizationsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`. */
export const cancelOrganizationsLocationsOperations: API.OperationMethod<
  CancelOrganizationsLocationsOperationsRequest,
  CancelOrganizationsLocationsOperationsResponse,
  CancelOrganizationsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CancelOrganizationsLocationsOperationsRequest,
  output: CancelOrganizationsLocationsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetOrganizationsLocationsOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetOrganizationsLocationsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetOrganizationsLocationsOperationsRequest>;

export type GetOrganizationsLocationsOperationsResponse = Operation;
export const GetOrganizationsLocationsOperationsResponse =
  /*@__PURE__*/ Operation;

export type GetOrganizationsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getOrganizationsLocationsOperations: API.OperationMethod<
  GetOrganizationsLocationsOperationsRequest,
  GetOrganizationsLocationsOperationsResponse,
  GetOrganizationsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetOrganizationsLocationsOperationsRequest,
  output: GetOrganizationsLocationsOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteOrganizationsLocationsOperationsRequest {
  /** The name of the operation resource to be deleted. */
  name: string;
}

export const DeleteOrganizationsLocationsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteOrganizationsLocationsOperationsRequest>;

export type DeleteOrganizationsLocationsOperationsResponse = Empty;
export const DeleteOrganizationsLocationsOperationsResponse =
  /*@__PURE__*/ Empty;

export type DeleteOrganizationsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. */
export const deleteOrganizationsLocationsOperations: API.OperationMethod<
  DeleteOrganizationsLocationsOperationsRequest,
  DeleteOrganizationsLocationsOperationsResponse,
  DeleteOrganizationsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteOrganizationsLocationsOperationsRequest,
  output: DeleteOrganizationsLocationsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteOrganizationsLocationsSecurityProfileGroupsRequest {
  /** Required. A name of the SecurityProfileGroup to delete. Must be in the format `projects|organizations/* /locations/{location}/securityProfileGroups/{security_profile_group}`. */
  name: string;
  /** Optional. If client provided etag is out of date, delete will return FAILED_PRECONDITION error. */
  etag?: string;
}

export const DeleteOrganizationsLocationsSecurityProfileGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteOrganizationsLocationsSecurityProfileGroupsRequest>;

export type DeleteOrganizationsLocationsSecurityProfileGroupsResponse =
  Operation;
export const DeleteOrganizationsLocationsSecurityProfileGroupsResponse =
  /*@__PURE__*/ Operation;

export type DeleteOrganizationsLocationsSecurityProfileGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single SecurityProfileGroup. */
export const deleteOrganizationsLocationsSecurityProfileGroups: API.OperationMethod<
  DeleteOrganizationsLocationsSecurityProfileGroupsRequest,
  DeleteOrganizationsLocationsSecurityProfileGroupsResponse,
  DeleteOrganizationsLocationsSecurityProfileGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteOrganizationsLocationsSecurityProfileGroupsRequest,
  output: DeleteOrganizationsLocationsSecurityProfileGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOrganizationsLocationsSecurityProfileGroupsRequest {
  /** Required. The project or organization and location from which the SecurityProfileGroups should be listed, specified in the format `projects|organizations/* /locations/{location}`. */
  parent: string;
  /** Optional. The value returned by the last `ListSecurityProfileGroupsResponse` Indicates that this is a continuation of a prior `ListSecurityProfileGroups` call, and that the system should return the next page of data. */
  pageToken?: string;
  /** Optional. Maximum number of SecurityProfileGroups to return per call. */
  pageSize?: number;
}

export const ListOrganizationsLocationsSecurityProfileGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/securityProfileGroups" }),
    svc,
  ) as unknown as Schema.Codec<ListOrganizationsLocationsSecurityProfileGroupsRequest>;

export type ListOrganizationsLocationsSecurityProfileGroupsResponse =
  ListSecurityProfileGroupsResponse;
export const ListOrganizationsLocationsSecurityProfileGroupsResponse =
  /*@__PURE__*/ ListSecurityProfileGroupsResponse;

export type ListOrganizationsLocationsSecurityProfileGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists SecurityProfileGroups in a given organization and location. */
export const listOrganizationsLocationsSecurityProfileGroups: API.PaginatedOperationMethod<
  ListOrganizationsLocationsSecurityProfileGroupsRequest,
  ListOrganizationsLocationsSecurityProfileGroupsResponse,
  ListOrganizationsLocationsSecurityProfileGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsLocationsSecurityProfileGroupsRequest,
  output: ListOrganizationsLocationsSecurityProfileGroupsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetOrganizationsLocationsSecurityProfileGroupsRequest {
  /** Required. A name of the SecurityProfileGroup to get. Must be in the format `projects|organizations/* /locations/{location}/securityProfileGroups/{security_profile_group}`. */
  name: string;
}

export const GetOrganizationsLocationsSecurityProfileGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetOrganizationsLocationsSecurityProfileGroupsRequest>;

export type GetOrganizationsLocationsSecurityProfileGroupsResponse =
  SecurityProfileGroup;
export const GetOrganizationsLocationsSecurityProfileGroupsResponse =
  /*@__PURE__*/ SecurityProfileGroup;

export type GetOrganizationsLocationsSecurityProfileGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single SecurityProfileGroup. */
export const getOrganizationsLocationsSecurityProfileGroups: API.OperationMethod<
  GetOrganizationsLocationsSecurityProfileGroupsRequest,
  GetOrganizationsLocationsSecurityProfileGroupsResponse,
  GetOrganizationsLocationsSecurityProfileGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetOrganizationsLocationsSecurityProfileGroupsRequest,
  output: GetOrganizationsLocationsSecurityProfileGroupsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchOrganizationsLocationsSecurityProfileGroupsRequest {
  /** Required. Field mask is used to specify the fields to be overwritten in the SecurityProfileGroup resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. */
  updateMask?: string;
  /** Immutable. Identifier. Name of the SecurityProfileGroup resource. It matches pattern `projects|organizations/* /locations/{location}/securityProfileGroups/{security_profile_group}`. */
  name: string;
  /** Request body */
  body?: SecurityProfileGroup;
}

export const PatchOrganizationsLocationsSecurityProfileGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SecurityProfileGroup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchOrganizationsLocationsSecurityProfileGroupsRequest>;

export type PatchOrganizationsLocationsSecurityProfileGroupsResponse =
  Operation;
export const PatchOrganizationsLocationsSecurityProfileGroupsResponse =
  /*@__PURE__*/ Operation;

export type PatchOrganizationsLocationsSecurityProfileGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single SecurityProfileGroup. */
export const patchOrganizationsLocationsSecurityProfileGroups: API.OperationMethod<
  PatchOrganizationsLocationsSecurityProfileGroupsRequest,
  PatchOrganizationsLocationsSecurityProfileGroupsResponse,
  PatchOrganizationsLocationsSecurityProfileGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchOrganizationsLocationsSecurityProfileGroupsRequest,
  output: PatchOrganizationsLocationsSecurityProfileGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateOrganizationsLocationsSecurityProfileGroupsRequest {
  /** Required. Short name of the SecurityProfileGroup resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "security_profile_group1". */
  securityProfileGroupId?: string;
  /** Required. The parent resource of the SecurityProfileGroup. Must be in the format `projects|organizations/* /locations/{location}`. */
  parent: string;
  /** Request body */
  body?: SecurityProfileGroup;
}

export const CreateOrganizationsLocationsSecurityProfileGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    securityProfileGroupId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("securityProfileGroupId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(SecurityProfileGroup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/securityProfileGroups",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateOrganizationsLocationsSecurityProfileGroupsRequest>;

export type CreateOrganizationsLocationsSecurityProfileGroupsResponse =
  Operation;
export const CreateOrganizationsLocationsSecurityProfileGroupsResponse =
  /*@__PURE__*/ Operation;

export type CreateOrganizationsLocationsSecurityProfileGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new SecurityProfileGroup in a given organization and location. */
export const createOrganizationsLocationsSecurityProfileGroups: API.OperationMethod<
  CreateOrganizationsLocationsSecurityProfileGroupsRequest,
  CreateOrganizationsLocationsSecurityProfileGroupsResponse,
  CreateOrganizationsLocationsSecurityProfileGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateOrganizationsLocationsSecurityProfileGroupsRequest,
  output: CreateOrganizationsLocationsSecurityProfileGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
