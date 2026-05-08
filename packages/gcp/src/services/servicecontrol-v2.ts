// ==========================================================================
// Service Control API (servicecontrol v2)
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
  name: "servicecontrol",
  version: "v2",
  rootUrl: "https://servicecontrol.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface Peer {
  /** The IP address of the peer. */
  ip?: string;
  /** The network port of the peer. */
  port?: string;
  /** The labels associated with the peer. */
  labels?: Record<string, string>;
  /** The identity of this peer. Similar to `Request.auth.principal`, but relative to the peer instead of the request. For example, the identity associated with a load balancer that forwarded the request. */
  principal?: string;
  /** The CLDR country/region code associated with the above IP address. If the IP address is private, the `region_code` should reflect the physical location where this peer is running. */
  regionCode?: string;
}

export const Peer: Schema.Schema<Peer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ip: Schema.optional(Schema.String),
    port: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    principal: Schema.optional(Schema.String),
    regionCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "Peer" });

export interface Oauth {
  /** The optional OAuth client ID. This is the unique public identifier issued by an authorization server to a registered client application. Empty string is equivalent to no oauth client id. WARNING: This is for MCP tools/call and tools/list authorization and not for general use. */
  clientId?: string;
}

export const Oauth: Schema.Schema<Oauth> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clientId: Schema.optional(Schema.String),
  }).annotate({ identifier: "Oauth" });

export interface Auth {
  /** The authenticated principal. Reflects the issuer (`iss`) and subject (`sub`) claims within a JWT. The issuer and subject should be `/` delimited, with `/` percent-encoded within the subject fragment. For Google accounts, the principal format is: "https://accounts.google.com/{id}" */
  principal?: string;
  /** The intended audience(s) for this authentication information. Reflects the audience (`aud`) claim within a JWT. The audience value(s) depends on the `issuer`, but typically include one or more of the following pieces of information: * The services intended to receive the credential. For example, ["https://pubsub.googleapis.com/", "https://storage.googleapis.com/"]. * A set of service-based scopes. For example, ["https://www.googleapis.com/auth/cloud-platform"]. * The client id of an app, such as the Firebase project id for JWTs from Firebase Auth. Consult the documentation for the credential issuer to determine the information provided. */
  audiences?: ReadonlyArray<string>;
  /** The authorized presenter of the credential. Reflects the optional Authorized Presenter (`azp`) claim within a JWT or the OAuth client id. For example, a Google Cloud Platform client id looks as follows: "123456789012.apps.googleusercontent.com". */
  presenter?: string;
  /** Structured claims presented with the credential. JWTs include `{key: value}` pairs for standard and private claims. The following is a subset of the standard required and optional claims that would typically be presented for a Google-based JWT: {'iss': 'accounts.google.com', 'sub': '113289723416554971153', 'aud': ['123456789012', 'pubsub.googleapis.com'], 'azp': '123456789012.apps.googleusercontent.com', 'email': 'jsmith@example.com', 'iat': 1353601026, 'exp': 1353604926} SAML assertions are similarly specified, but with an identity provider dependent structure. */
  claims?: Record<string, unknown>;
  /** A list of access level resource names that allow resources to be accessed by authenticated requester. It is part of Secure GCP processing for the incoming request. An access level string has the format: "//{api_service_name}/accessPolicies/{policy_id}/accessLevels/{short_name}" Example: "//accesscontextmanager.googleapis.com/accessPolicies/MY_POLICY_ID/accessLevels/MY_LEVEL" */
  accessLevels?: ReadonlyArray<string>;
  /** Attributes of the OAuth token associated with the request. */
  oauth?: Oauth;
}

export const Auth: Schema.Schema<Auth> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    principal: Schema.optional(Schema.String),
    audiences: Schema.optional(Schema.Array(Schema.String)),
    presenter: Schema.optional(Schema.String),
    claims: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    accessLevels: Schema.optional(Schema.Array(Schema.String)),
    oauth: Schema.optional(Oauth),
  }).annotate({ identifier: "Auth" });

export interface Request {
  /** The unique ID for a request, which can be propagated to downstream systems. The ID should have low probability of collision within a single day for a specific service. */
  id?: string;
  /** The HTTP request method, such as `GET`, `POST`. */
  method?: string;
  /** The HTTP request headers. If multiple headers share the same key, they must be merged according to the HTTP spec. All header keys must be lowercased, because HTTP header keys are case-insensitive. */
  headers?: Record<string, string>;
  /** The HTTP URL path, excluding the query parameters. */
  path?: string;
  /** The HTTP request `Host` header value. */
  host?: string;
  /** The HTTP URL scheme, such as `http` and `https`. */
  scheme?: string;
  /** The HTTP URL query in the format of `name1=value1&name2=value2`, as it appears in the first line of the HTTP request. No decoding is performed. */
  query?: string;
  /** The timestamp when the `destination` service receives the last byte of the request. */
  time?: string;
  /** The HTTP request size in bytes. If unknown, it must be -1. */
  size?: string;
  /** The network protocol used with the request, such as "http/1.1", "spdy/3", "h2", "h2c", "webrtc", "tcp", "udp", "quic". See https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids for details. */
  protocol?: string;
  /** A special parameter for request reason. It is used by security systems to associate auditing information with a request. */
  reason?: string;
  /** The request authentication. May be absent for unauthenticated requests. Derived from the HTTP request `Authorization` header or equivalent. */
  auth?: Auth;
  /** The values from Origin header from the HTTP request, such as "https://console.cloud.google.com". Modern browsers can only have one origin. Special browsers and/or HTTP clients may require multiple origins. */
  origin?: string;
}

export const Request: Schema.Schema<Request> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    method: Schema.optional(Schema.String),
    headers: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    path: Schema.optional(Schema.String),
    host: Schema.optional(Schema.String),
    scheme: Schema.optional(Schema.String),
    query: Schema.optional(Schema.String),
    time: Schema.optional(Schema.String),
    size: Schema.optional(Schema.String),
    protocol: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    auth: Schema.optional(Auth),
    origin: Schema.optional(Schema.String),
  }).annotate({ identifier: "Request" });

export interface Response {
  /** The HTTP response status code, such as `200` and `404`. */
  code?: string;
  /** The HTTP response size in bytes. If unknown, it must be -1. */
  size?: string;
  /** The HTTP response headers. If multiple headers share the same key, they must be merged according to HTTP spec. All header keys must be lowercased, because HTTP header keys are case-insensitive. */
  headers?: Record<string, string>;
  /** The timestamp when the `destination` service sends the last byte of the response. */
  time?: string;
  /** The amount of time it takes the backend service to fully respond to a request. Measured from when the destination service starts to send the request to the backend until when the destination service receives the complete response from the backend. */
  backendLatency?: string;
}

export const Response: Schema.Schema<Response> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.String),
    size: Schema.optional(Schema.String),
    headers: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    time: Schema.optional(Schema.String),
    backendLatency: Schema.optional(Schema.String),
  }).annotate({ identifier: "Response" });

export interface Resource {
  /** The name of the service that this resource belongs to, such as `pubsub.googleapis.com`. The service may be different from the DNS hostname that actually serves the request. */
  service?: string;
  /** The stable identifier (name) of a resource on the `service`. A resource can be logically identified as "//{resource.service}/{resource.name}". The differences between a resource name and a URI are: * Resource name is a logical identifier, independent of network protocol and API version. For example, `//pubsub.googleapis.com/projects/123/topics/news-feed`. * URI often includes protocol and version information, so it can be used directly by applications. For example, `https://pubsub.googleapis.com/v1/projects/123/topics/news-feed`. See https://cloud.google.com/apis/design/resource_names for details. */
  name?: string;
  /** The type of the resource. The syntax is platform-specific because different platforms define their resources differently. For Google APIs, the type format must be "{service}/{kind}", such as "pubsub.googleapis.com/Topic". */
  type?: string;
  /** The labels or tags on the resource, such as AWS resource tags and Kubernetes resource labels. */
  labels?: Record<string, string>;
  /** The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4. */
  uid?: string;
  /** Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ */
  annotations?: Record<string, string>;
  /** Mutable. The display name set by clients. Must be <= 63 characters. */
  displayName?: string;
  /** Output only. The timestamp when the resource was created. This may be either the time creation was initiated or when it was completed. */
  createTime?: string;
  /** Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value. */
  updateTime?: string;
  /** Output only. The timestamp when the resource was deleted. If the resource is not deleted, this must be empty. */
  deleteTime?: string;
  /** Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written. */
  etag?: string;
  /** Immutable. The location of the resource. The location encoding is specific to the service provider, and new encoding may be introduced as the service evolves. For Google Cloud products, the encoding is what is used by Google Cloud APIs, such as `us-east1`, `aws-us-east-1`, and `azure-eastus2`. The semantics of `location` is identical to the `cloud.googleapis.com/location` label used by some Google Cloud APIs. */
  location?: string;
}

export const Resource: Schema.Schema<Resource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    service: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    uid: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    displayName: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    deleteTime: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
  }).annotate({ identifier: "Resource" });

export interface Api {
  /** The API service name. It is a logical identifier for a networked API, such as "pubsub.googleapis.com". The naming syntax depends on the API management system being used for handling the request. */
  service?: string;
  /** The API operation name. For gRPC requests, it is the fully qualified API method name, such as "google.pubsub.v1.Publisher.Publish". For OpenAPI requests, it is the `operationId`, such as "getPet". */
  operation?: string;
  /** The API protocol used for sending the request, such as "http", "https", "grpc", or "internal". */
  protocol?: string;
  /** The API version associated with the API operation above, such as "v1" or "v1alpha1". */
  version?: string;
}

export const Api: Schema.Schema<Api> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    service: Schema.optional(Schema.String),
    operation: Schema.optional(Schema.String),
    protocol: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "Api" });

export interface AttributeContext {
  /** The origin of a network activity. In a multi hop network activity, the origin represents the sender of the first hop. For the first hop, the `source` and the `origin` must have the same content. */
  origin?: Peer;
  /** The source of a network activity, such as starting a TCP connection. In a multi hop network activity, the source represents the sender of the last hop. */
  source?: Peer;
  /** The destination of a network activity, such as accepting a TCP connection. In a multi hop network activity, the destination represents the receiver of the last hop. */
  destination?: Peer;
  /** Represents a network request, such as an HTTP request. */
  request?: Request;
  /** Represents a network response, such as an HTTP response. */
  response?: Response;
  /** Represents a target resource that is involved with a network activity. If multiple resources are involved with an activity, this must be the primary one. */
  resource?: Resource;
  /** Represents an API operation that is involved to a network activity. */
  api?: Api;
  /** Supports extensions for advanced use cases, such as logs and metrics. */
  extensions?: ReadonlyArray<Record<string, unknown>>;
}

export const AttributeContext: Schema.Schema<AttributeContext> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    origin: Schema.optional(Peer),
    source: Schema.optional(Peer),
    destination: Schema.optional(Peer),
    request: Schema.optional(Request),
    response: Schema.optional(Response),
    resource: Schema.optional(Resource),
    api: Schema.optional(Api),
    extensions: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).annotate({ identifier: "AttributeContext" });

export interface ResourceInfo {
  /** The name of the resource referenced in the request. */
  name?: string;
  /** The resource type in the format of "{service}/{kind}". */
  type?: string;
  /** The resource permission needed for this request. The format must be "{service}/{plural}.{verb}". */
  permission?: string;
  /** Optional. The identifier of the container of this resource. For Google Cloud APIs, the resource container must be one of the following formats: - `projects/` - `folders/` - `organizations/` Required for the policy enforcement on the container level (e.g. VPCSC, Location Policy check, Org Policy check). */
  container?: string;
  /** Optional. The location of the resource, it must be a valid zone, region or multiregion, for example: "europe-west4", "northamerica-northeast1-a". Required for location policy check. */
  location?: string;
}

export const ResourceInfo: Schema.Schema<ResourceInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    permission: Schema.optional(Schema.String),
    container: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
  }).annotate({ identifier: "ResourceInfo" });

export interface CheckRequest {
  /** Specifies the version of the service configuration that should be used to process the request. Must not be empty. Set this field to 'latest' to specify using the latest configuration. */
  serviceConfigId?: string;
  /** Describes attributes about the operation being executed by the service. */
  attributes?: AttributeContext;
  /** Describes the resources and the policies applied to each resource. */
  resources?: ReadonlyArray<ResourceInfo>;
  /** Optional. Contains a comma-separated list of flags. */
  flags?: string;
}

export const CheckRequest: Schema.Schema<CheckRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceConfigId: Schema.optional(Schema.String),
    attributes: Schema.optional(AttributeContext),
    resources: Schema.optional(Schema.Array(ResourceInfo)),
    flags: Schema.optional(Schema.String),
  }).annotate({ identifier: "CheckRequest" });

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

export interface CheckResponse {
  /** Operation is allowed when this field is not set. Any non-'OK' status indicates a denial; google.rpc.Status.details would contain additional details about the denial. */
  status?: Status;
  /** Returns a set of request contexts generated from the `CheckRequest`. */
  headers?: Record<string, string>;
  /** Optional response metadata that will be emitted as dynamic metadata to be consumed by the caller of ServiceController. For compatibility with the ext_authz interface. */
  dynamicMetadata?: Record<string, unknown>;
}

export const CheckResponse: Schema.Schema<CheckResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(Status),
    headers: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    dynamicMetadata: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
  }).annotate({ identifier: "CheckResponse" });

export interface ReportRequest {
  /** Specifies the version of the service configuration that should be used to process the request. Must not be empty. Set this field to 'latest' to specify using the latest configuration. */
  serviceConfigId?: string;
  /** Describes the list of operations to be reported. Each operation is represented as an AttributeContext, and contains all attributes around an API access. */
  operations?: ReadonlyArray<AttributeContext>;
}

export const ReportRequest: Schema.Schema<ReportRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceConfigId: Schema.optional(Schema.String),
    operations: Schema.optional(Schema.Array(AttributeContext)),
  }).annotate({ identifier: "ReportRequest" });

export interface ReportResponse {
  /** The extension field to store serialized OTel responses. e.g. ExportLogsServiceResponse, ExportMetricsServiceResponse. */
  extensions?: Record<string, unknown>;
}

export const ReportResponse: Schema.Schema<ReportResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    extensions: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "ReportResponse" });

export interface ResourceLocation {
  /** The locations of a resource after the execution of the operation. Requests to create or delete a location based resource must populate the 'current_locations' field and not the 'original_locations' field. For example: "europe-west1-a" "us-east1" "nam3" */
  currentLocations?: ReadonlyArray<string>;
  /** The locations of a resource prior to the execution of the operation. Requests that mutate the resource's location must populate both the 'original_locations' as well as the 'current_locations' fields. For example: "europe-west1-a" "us-east1" "nam3" */
  originalLocations?: ReadonlyArray<string>;
}

export const ResourceLocation: Schema.Schema<ResourceLocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    currentLocations: Schema.optional(Schema.Array(Schema.String)),
    originalLocations: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ResourceLocation" });

export interface FirstPartyPrincipal {
  /** The email address of a Google account. . */
  principalEmail?: string;
  /** Metadata about the service that uses the service account. . */
  serviceMetadata?: Record<string, unknown>;
}

export const FirstPartyPrincipal: Schema.Schema<FirstPartyPrincipal> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    principalEmail: Schema.optional(Schema.String),
    serviceMetadata: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
  }).annotate({ identifier: "FirstPartyPrincipal" });

export interface ThirdPartyPrincipal {
  /** Metadata about third party identity. */
  thirdPartyClaims?: Record<string, unknown>;
}

export const ThirdPartyPrincipal: Schema.Schema<ThirdPartyPrincipal> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    thirdPartyClaims: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
  }).annotate({ identifier: "ThirdPartyPrincipal" });

export interface ServiceAccountDelegationInfo {
  /** A string representing the principal_subject associated with the identity. For most identities, the format will be `principal://iam.googleapis.com/{identity pool name}/subject/{subject)` except for some GKE identities (GKE_WORKLOAD, FREEFORM, GKE_HUB_WORKLOAD) that are still in the legacy format `serviceAccount:{identity pool name}[{subject}]` */
  principalSubject?: string;
  /** First party (Google) identity as the real authority. */
  firstPartyPrincipal?: FirstPartyPrincipal;
  /** Third party identity as the real authority. */
  thirdPartyPrincipal?: ThirdPartyPrincipal;
}

export const ServiceAccountDelegationInfo: Schema.Schema<ServiceAccountDelegationInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    principalSubject: Schema.optional(Schema.String),
    firstPartyPrincipal: Schema.optional(FirstPartyPrincipal),
    thirdPartyPrincipal: Schema.optional(ThirdPartyPrincipal),
  }).annotate({ identifier: "ServiceAccountDelegationInfo" });

export interface ServiceMetadata {
  /** A string representing the principal_subject associated with the identity. For most identities, the format will be `principal://iam.googleapis.com/{identity pool name}/subject/{subject)` except for some GKE identities (GKE_WORKLOAD, FREEFORM, GKE_HUB_WORKLOAD) that are still in the legacy format `serviceAccount:{identity pool name}[{subject}]` If the identity is a Google account (e.g. workspace user account or service account), this will be the email of the prefixed by `serviceAccount:`. For example: `serviceAccount:my-service-account@project-1.iam.gserviceaccount.com`. If the identity is an individual user, the identity will be formatted as: `user:user_ABC@email.com`. */
  principalSubject?: string;
  /** The service's fully qualified domain name, e.g. "dataproc.googleapis.com". */
  serviceDomain?: string;
  /** Additional metadata provided by service teams to describe service specific job information that was triggered by the original principal. */
  jobMetadata?: Record<string, unknown>;
}

export const ServiceMetadata: Schema.Schema<ServiceMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    principalSubject: Schema.optional(Schema.String),
    serviceDomain: Schema.optional(Schema.String),
    jobMetadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "ServiceMetadata" });

export interface ServiceDelegationHistory {
  /** The original end user who initiated the request to GCP. */
  originalPrincipal?: string;
  /** Data identifying the service specific jobs or units of work that were involved in a chain of service calls. */
  serviceMetadata?: ReadonlyArray<ServiceMetadata>;
}

export const ServiceDelegationHistory: Schema.Schema<ServiceDelegationHistory> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    originalPrincipal: Schema.optional(Schema.String),
    serviceMetadata: Schema.optional(Schema.Array(ServiceMetadata)),
  }).annotate({ identifier: "ServiceDelegationHistory" });

export interface OAuthInfo {
  /** The OAuth client ID of the 1P or 3P application acting on behalf of the user. */
  oauthClientId?: string;
}

export const OAuthInfo: Schema.Schema<OAuthInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    oauthClientId: Schema.optional(Schema.String),
  }).annotate({ identifier: "OAuthInfo" });

export interface AuthenticationInfo {
  /** The email address of the authenticated user (or service account on behalf of third party principal) making the request. For third party identity callers, the `principal_subject` field is populated instead of this field. For privacy reasons, the principal email address is sometimes redacted. For more information, see [Caller identities in audit logs](https://cloud.google.com/logging/docs/audit#user-id). */
  principalEmail?: string;
  /** The authority selector specified by the requestor, if any. It is not guaranteed that the principal was allowed to use this authority. */
  authoritySelector?: string;
  /** The third party identification (if any) of the authenticated user making the request. When the JSON object represented here has a proto equivalent, the proto name will be indicated in the `@type` property. */
  thirdPartyPrincipal?: Record<string, unknown>;
  /** The name of the service account key used to create or exchange credentials for authenticating the service account making the request. This is a scheme-less URI full resource name. For example: "//iam.googleapis.com/projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}/keys/{key}" */
  serviceAccountKeyName?: string;
  /** Identity delegation history of an authenticated service account that makes the request. It contains information on the real authorities that try to access GCP resources by delegating on a service account. When multiple authorities present, they are guaranteed to be sorted based on the original ordering of the identity delegation events. */
  serviceAccountDelegationInfo?: ReadonlyArray<ServiceAccountDelegationInfo>;
  /** String representation of identity of requesting party. Populated for both first and third party identities. */
  principalSubject?: string;
  /** Records the history of delegated resource access across Google services. */
  serviceDelegationHistory?: ServiceDelegationHistory;
  /** Converted from "identity_cloudgaia.AuditLoggableShortLivedCredential" proto. This message will be used by security, detection and response team. For context please refer to go/cg:short-lived-credential-logging. When the JSON object represented here has a proto equivalent, the proto name will be indicated in the `@type` property. */
  loggableShortLivedCredential?: Record<string, unknown>;
  /** OAuth authentication information such as the OAuth client ID. */
  oauthInfo?: OAuthInfo;
}

export const AuthenticationInfo: Schema.Schema<AuthenticationInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    principalEmail: Schema.optional(Schema.String),
    authoritySelector: Schema.optional(Schema.String),
    thirdPartyPrincipal: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    serviceAccountKeyName: Schema.optional(Schema.String),
    serviceAccountDelegationInfo: Schema.optional(
      Schema.Array(ServiceAccountDelegationInfo),
    ),
    principalSubject: Schema.optional(Schema.String),
    serviceDelegationHistory: Schema.optional(ServiceDelegationHistory),
    loggableShortLivedCredential: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    oauthInfo: Schema.optional(OAuthInfo),
  }).annotate({ identifier: "AuthenticationInfo" });

export interface AuthorizationInfo {
  /** The resource being accessed, as a REST-style or cloud resource string. For example: bigquery.googleapis.com/projects/PROJECTID/datasets/DATASETID or projects/PROJECTID/datasets/DATASETID */
  resource?: string;
  /** The required IAM permission. */
  permission?: string;
  /** Whether or not authorization for `resource` and `permission` was granted. */
  granted?: boolean;
  /** Resource attributes used in IAM condition evaluation. This field contains resource attributes like resource type and resource name. To get the whole view of the attributes used in IAM condition evaluation, the user must also look into `AuditLog.request_metadata.request_attributes`. */
  resourceAttributes?: Resource;
  /** The type of the permission that was checked. For data access audit logs this corresponds with the permission type that must be enabled in the project/folder/organization IAM policy in order for the log to be written. */
  permissionType?:
    | "PERMISSION_TYPE_UNSPECIFIED"
    | "ADMIN_READ"
    | "ADMIN_WRITE"
    | "DATA_READ"
    | "DATA_WRITE"
    | (string & {});
}

export const AuthorizationInfo: Schema.Schema<AuthorizationInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.optional(Schema.String),
    permission: Schema.optional(Schema.String),
    granted: Schema.optional(Schema.Boolean),
    resourceAttributes: Schema.optional(Resource),
    permissionType: Schema.optional(Schema.String),
  }).annotate({ identifier: "AuthorizationInfo" });

export interface ViolationInfo {
  /** Optional. Constraint name */
  constraint?: string;
  /** Optional. Error message that policy is indicating. */
  errorMessage?: string;
  /** Optional. Value that is being checked for the policy. This could be in encrypted form (if pii sensitive). This field will only be emitted in LIST_POLICY types */
  checkedValue?: string;
  /** Optional. Indicates the type of the policy. */
  policyType?:
    | "POLICY_TYPE_UNSPECIFIED"
    | "BOOLEAN_CONSTRAINT"
    | "LIST_CONSTRAINT"
    | "CUSTOM_CONSTRAINT"
    | (string & {});
  /** Optional. Provides extra information for the specific violated constraint. See the constraint's documentation to determine if this field is populated and what the structure of the message should be. */
  constraintViolationInfo?: Record<string, unknown>;
}

export const ViolationInfo: Schema.Schema<ViolationInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    constraint: Schema.optional(Schema.String),
    errorMessage: Schema.optional(Schema.String),
    checkedValue: Schema.optional(Schema.String),
    policyType: Schema.optional(Schema.String),
    constraintViolationInfo: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
  }).annotate({ identifier: "ViolationInfo" });

export interface OrgPolicyViolationInfo {
  /** Optional. Deprecated. Resource payload that is currently in scope and is subjected to orgpolicy conditions. This payload may be the subset of the actual Resource that may come in the request. */
  payload?: Record<string, unknown>;
  /** Optional. Resource type that the orgpolicy is checked against. Example: compute.googleapis.com/Instance, store.googleapis.com/bucket */
  resourceType?: string;
  /** Optional. Deprecated. Tags referenced on the resource at the time of evaluation. */
  resourceTags?: Record<string, string>;
  /** Optional. Policy violations */
  violationInfo?: ReadonlyArray<ViolationInfo>;
}

export const OrgPolicyViolationInfo: Schema.Schema<OrgPolicyViolationInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    resourceType: Schema.optional(Schema.String),
    resourceTags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    violationInfo: Schema.optional(Schema.Array(ViolationInfo)),
  }).annotate({ identifier: "OrgPolicyViolationInfo" });

export interface PolicyViolationInfo {
  /** Indicates the orgpolicy violations for this resource. */
  orgPolicyViolationInfo?: OrgPolicyViolationInfo;
}

export const PolicyViolationInfo: Schema.Schema<PolicyViolationInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    orgPolicyViolationInfo: Schema.optional(OrgPolicyViolationInfo),
  }).annotate({ identifier: "PolicyViolationInfo" });

export interface RequestMetadata {
  /** The IP address of the caller. For a caller from the internet, this will be the public IPv4 or IPv6 address. For calls made from inside Google's internal production network from one GCP service to another, `caller_ip` will be redacted to "private". For a caller from a Compute Engine VM with a external IP address, `caller_ip` will be the VM's external IP address. For a caller from a Compute Engine VM without a external IP address, if the VM is in the same organization (or project) as the accessed resource, `caller_ip` will be the VM's internal IPv4 address, otherwise `caller_ip` will be redacted to "gce-internal-ip". See https://cloud.google.com/compute/docs/vpc/ for more information. */
  callerIp?: string;
  /** The user agent of the caller. This information is not authenticated and should be treated accordingly. For example: + `google-api-python-client/1.4.0`: The request was made by the Google API client for Python. + `Cloud SDK Command Line Tool apitools-client/1.0 gcloud/0.9.62`: The request was made by the Google Cloud SDK CLI (gcloud). + `AppEngine-Google; (+http://code.google.com/appengine; appid: s~my-project`: The request was made from the `my-project` App Engine app. */
  callerSuppliedUserAgent?: string;
  /** The network of the caller. Set only if the network host project is part of the same GCP organization (or project) as the accessed resource. See https://cloud.google.com/compute/docs/vpc/ for more information. This is a scheme-less URI full resource name. For example: "//compute.googleapis.com/projects/PROJECT_ID/global/networks/NETWORK_ID" */
  callerNetwork?: string;
  /** Request attributes used in IAM condition evaluation. This field contains request attributes like request time and access levels associated with the request. To get the whole view of the attributes used in IAM condition evaluation, the user must also look into `AuditLog.authentication_info.resource_attributes`. */
  requestAttributes?: Request;
  /** The destination of a network activity, such as accepting a TCP connection. In a multi hop network activity, the destination represents the receiver of the last hop. Only two fields are used in this message, Peer.port and Peer.ip. These fields are optionally populated by those services utilizing the IAM condition feature. */
  destinationAttributes?: Peer;
}

export const RequestMetadata: Schema.Schema<RequestMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    callerIp: Schema.optional(Schema.String),
    callerSuppliedUserAgent: Schema.optional(Schema.String),
    callerNetwork: Schema.optional(Schema.String),
    requestAttributes: Schema.optional(Request),
    destinationAttributes: Schema.optional(Peer),
  }).annotate({ identifier: "RequestMetadata" });

export interface AuditLog {
  /** The name of the API service performing the operation. For example, `"compute.googleapis.com"`. */
  serviceName?: string;
  /** The name of the service method or operation. For API calls, this should be the name of the API method. For example, "google.cloud.bigquery.v2.TableService.InsertTable" "google.logging.v2.ConfigServiceV2.CreateSink" */
  methodName?: string;
  /** The resource or collection that is the target of the operation. The name is a scheme-less URI, not including the API service name. For example: "projects/PROJECT_ID/zones/us-central1-a/instances" "projects/PROJECT_ID/datasets/DATASET_ID" */
  resourceName?: string;
  /** The resource location information. */
  resourceLocation?: ResourceLocation;
  /** The resource's original state before mutation. Present only for operations which have successfully modified the targeted resource(s). In general, this field should contain all changed fields, except those that are already been included in `request`, `response`, `metadata` or `service_data` fields. When the JSON object represented here has a proto equivalent, the proto name will be indicated in the `@type` property. */
  resourceOriginalState?: Record<string, unknown>;
  /** The number of items returned from a List or Query API method, if applicable. */
  numResponseItems?: string;
  /** The status of the overall operation. */
  status?: Status;
  /** Authentication information. */
  authenticationInfo?: AuthenticationInfo;
  /** Authorization information. If there are multiple resources or permissions involved, then there is one AuthorizationInfo element for each {resource, permission} tuple. */
  authorizationInfo?: ReadonlyArray<AuthorizationInfo>;
  /** Indicates the policy violations for this request. If the request is denied by the policy, violation information will be logged here. */
  policyViolationInfo?: PolicyViolationInfo;
  /** Metadata about the operation. */
  requestMetadata?: RequestMetadata;
  /** The operation request. This may not include all request parameters, such as those that are too large, privacy-sensitive, or duplicated elsewhere in the log record. It should never include user-generated data, such as file contents. When the JSON object represented here has a proto equivalent, the proto name will be indicated in the `@type` property. */
  request?: Record<string, unknown>;
  /** The operation response. This may not include all response elements, such as those that are too large, privacy-sensitive, or duplicated elsewhere in the log record. It should never include user-generated data, such as file contents. When the JSON object represented here has a proto equivalent, the proto name will be indicated in the `@type` property. */
  response?: Record<string, unknown>;
  /** Other service-specific data about the request, response, and other information associated with the current audited event. */
  metadata?: Record<string, unknown>;
  /** Deprecated. Use the `metadata` field instead. Other service-specific data about the request, response, and other activities. */
  serviceData?: Record<string, unknown>;
}

export const AuditLog: Schema.Schema<AuditLog> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceName: Schema.optional(Schema.String),
    methodName: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
    resourceLocation: Schema.optional(ResourceLocation),
    resourceOriginalState: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    numResponseItems: Schema.optional(Schema.String),
    status: Schema.optional(Status),
    authenticationInfo: Schema.optional(AuthenticationInfo),
    authorizationInfo: Schema.optional(Schema.Array(AuthorizationInfo)),
    policyViolationInfo: Schema.optional(PolicyViolationInfo),
    requestMetadata: Schema.optional(RequestMetadata),
    request: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    serviceData: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "AuditLog" });

export interface SpanContext {
  /** The resource name of the span. The format is: projects/[PROJECT_ID_OR_NUMBER]/traces/[TRACE_ID]/spans/[SPAN_ID] `[TRACE_ID]` is a unique identifier for a trace within a project; it is a 32-character hexadecimal encoding of a 16-byte array. `[SPAN_ID]` is a unique identifier for a span within a trace; it is a 16-character hexadecimal encoding of an 8-byte array. */
  spanName?: string;
}

export const SpanContext: Schema.Schema<SpanContext> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    spanName: Schema.optional(Schema.String),
  }).annotate({ identifier: "SpanContext" });

export interface V2HttpRequest {
  /** The request method. Examples: `"GET"`, `"HEAD"`, `"PUT"`, `"POST"`. */
  requestMethod?: string;
  /** The scheme (http, https), the host name, the path, and the query portion of the URL that was requested. Example: `"http://example.com/some/info?color=red"`. */
  requestUrl?: string;
  /** The size of the HTTP request message in bytes, including the request headers and the request body. */
  requestSize?: string;
  /** The response code indicating the status of the response. Examples: 200, 404. */
  status?: number;
  /** The size of the HTTP response message sent back to the client, in bytes, including the response headers and the response body. */
  responseSize?: string;
  /** The user agent sent by the client. Example: `"Mozilla/4.0 (compatible; MSIE 6.0; Windows 98; Q312461; .NET CLR 1.0.3705)"`. */
  userAgent?: string;
  /** The IP address (IPv4 or IPv6) of the client that issued the HTTP request. Examples: `"192.168.1.1"`, `"FE80::0202:B3FF:FE1E:8329"`. */
  remoteIp?: string;
  /** The IP address (IPv4 or IPv6) of the origin server that the request was sent to. */
  serverIp?: string;
  /** The referer URL of the request, as defined in [HTTP/1.1 Header Field Definitions](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html). */
  referer?: string;
  /** The request processing latency on the server, from the time the request was received until the response was sent. */
  latency?: string;
  /** Whether or not a cache lookup was attempted. */
  cacheLookup?: boolean;
  /** Whether or not an entity was served from cache (with or without validation). */
  cacheHit?: boolean;
  /** Whether or not the response was validated with the origin server before being served from cache. This field is only meaningful if `cache_hit` is True. */
  cacheValidatedWithOriginServer?: boolean;
  /** The number of HTTP response bytes inserted into cache. Set only when a cache fill was attempted. */
  cacheFillBytes?: string;
  /** Protocol used for the request. Examples: "HTTP/1.1", "HTTP/2", "websocket" */
  protocol?: string;
}

export const V2HttpRequest: Schema.Schema<V2HttpRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestMethod: Schema.optional(Schema.String),
    requestUrl: Schema.optional(Schema.String),
    requestSize: Schema.optional(Schema.String),
    status: Schema.optional(Schema.Number),
    responseSize: Schema.optional(Schema.String),
    userAgent: Schema.optional(Schema.String),
    remoteIp: Schema.optional(Schema.String),
    serverIp: Schema.optional(Schema.String),
    referer: Schema.optional(Schema.String),
    latency: Schema.optional(Schema.String),
    cacheLookup: Schema.optional(Schema.Boolean),
    cacheHit: Schema.optional(Schema.Boolean),
    cacheValidatedWithOriginServer: Schema.optional(Schema.Boolean),
    cacheFillBytes: Schema.optional(Schema.String),
    protocol: Schema.optional(Schema.String),
  }).annotate({ identifier: "V2HttpRequest" });

export interface V2LogEntryOperation {
  /** Optional. An arbitrary operation identifier. Log entries with the same identifier are assumed to be part of the same operation. */
  id?: string;
  /** Optional. An arbitrary producer identifier. The combination of `id` and `producer` must be globally unique. Examples for `producer`: `"MyDivision.MyBigCompany.com"`, `"github.com/MyProject/MyApplication"`. */
  producer?: string;
  /** Optional. Set this to True if this is the first log entry in the operation. */
  first?: boolean;
  /** Optional. Set this to True if this is the last log entry in the operation. */
  last?: boolean;
}

export const V2LogEntryOperation: Schema.Schema<V2LogEntryOperation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    producer: Schema.optional(Schema.String),
    first: Schema.optional(Schema.Boolean),
    last: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "V2LogEntryOperation" });

export interface V2LogEntrySourceLocation {
  /** Optional. Source file name. Depending on the runtime environment, this might be a simple name or a fully-qualified name. */
  file?: string;
  /** Optional. Line within the source file. 1-based; 0 indicates no line number available. */
  line?: string;
  /** Optional. Human-readable name of the function or method being invoked, with optional context such as the class or package name. This information may be used in contexts such as the logs viewer, where a file and line number are less meaningful. The format can vary by language. For example: `qual.if.ied.Class.method` (Java), `dir/package.func` (Go), `function` (Python). */
  function?: string;
}

export const V2LogEntrySourceLocation: Schema.Schema<V2LogEntrySourceLocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    file: Schema.optional(Schema.String),
    line: Schema.optional(Schema.String),
    function: Schema.optional(Schema.String),
  }).annotate({ identifier: "V2LogEntrySourceLocation" });

export interface V2LogEntry {
  /** Required. The log to which this log entry belongs. Examples: `"syslog"`, `"book_log"`. */
  name?: string;
  /** The time the event described by the log entry occurred. If omitted, defaults to operation start time. */
  timestamp?: string;
  /** The severity of the log entry. The default value is `LogSeverity.DEFAULT`. */
  severity?:
    | "DEFAULT"
    | "DEBUG"
    | "INFO"
    | "NOTICE"
    | "WARNING"
    | "ERROR"
    | "CRITICAL"
    | "ALERT"
    | "EMERGENCY"
    | (string & {});
  /** Optional. Information about the HTTP request associated with this log entry, if applicable. */
  httpRequest?: V2HttpRequest;
  /** Optional. Resource name of the trace associated with the log entry, if any. If this field contains a relative resource name, you can assume the name is relative to `//tracing.googleapis.com`. Example: `projects/my-projectid/traces/06796866738c859f2f19b7cfb3214824` */
  trace?: string;
  /** A unique ID for the log entry used for deduplication. If omitted, the implementation will generate one based on operation_id. */
  insertId?: string;
  /** A set of user-defined (key, value) data that provides additional information about the log entry. */
  labels?: Record<string, string>;
  /** A set of user-defined (key, value) data that provides additional information about the moniotored resource that the log entry belongs to. */
  monitoredResourceLabels?: Record<string, string>;
  /** The log entry payload, represented as a protocol buffer that is expressed as a JSON object. The only accepted type currently is AuditLog. */
  protoPayload?: Record<string, unknown>;
  /** The log entry payload, represented as a Unicode string (UTF-8). */
  textPayload?: string;
  /** The log entry payload, represented as a structure that is expressed as a JSON object. */
  structPayload?: Record<string, unknown>;
  /** Optional. Information about an operation associated with the log entry, if applicable. */
  operation?: V2LogEntryOperation;
  /** Optional. Source code location information associated with the log entry, if any. */
  sourceLocation?: V2LogEntrySourceLocation;
}

export const V2LogEntry: Schema.Schema<V2LogEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    timestamp: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.String),
    httpRequest: Schema.optional(V2HttpRequest),
    trace: Schema.optional(Schema.String),
    insertId: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    monitoredResourceLabels: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    protoPayload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    textPayload: Schema.optional(Schema.String),
    structPayload: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    operation: Schema.optional(V2LogEntryOperation),
    sourceLocation: Schema.optional(V2LogEntrySourceLocation),
  }).annotate({ identifier: "V2LogEntry" });

export interface V2ResourceEvent {
  /** The payload contains metadata associated with the resource event. A ResourceEventPayloadStatus is provided instead if the original payload cannot be returned due to a limitation (e.g. size limit). */
  payload?: Record<string, unknown>;
  /** The resource event type determines how the backend service should process the event. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "CREATE"
    | "UPDATE"
    | "DELETE"
    | "UNDELETE"
    | (string & {});
  /** The destinations field determines which backend services should handle the event. This should be specified as a comma-delimited string. */
  destinations?: string;
  /** The resource associated with the event. */
  resource?: Resource;
  /** The parent resource for the resource. */
  parent?: Resource;
  /** The api path the resource event was created in. This should match the source of the `payload` field. For direct integrations with Chemist, this should generally be the RESPONSE. go/resource-event-pipeline-type */
  path?: "API_PATH_UNSPECIFIED" | "REQUEST" | "RESPONSE" | (string & {});
  /** The ESF unique context id of the api request, from which this resource event originated. This field is only needed for CAIS integration via api annotation. See go/cais-lro-delete for more details. */
  contextId?: string;
}

export const V2ResourceEvent: Schema.Schema<V2ResourceEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    type: Schema.optional(Schema.String),
    destinations: Schema.optional(Schema.String),
    resource: Schema.optional(Resource),
    parent: Schema.optional(Resource),
    path: Schema.optional(Schema.String),
    contextId: Schema.optional(Schema.String),
  }).annotate({ identifier: "V2ResourceEvent" });

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

export interface CheckServicesRequest {
  /** The service name as specified in its service configuration. For example, `"pubsub.googleapis.com"`. See [google.api.Service](https://cloud.google.com/service-management/reference/rpc/google.api#google.api.Service) for the definition of a service name. */
  serviceName: string;
  /** Request body */
  body?: CheckRequest;
}

export const CheckServicesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  serviceName: Schema.String.pipe(T.HttpPath("serviceName")),
  body: Schema.optional(CheckRequest).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "POST",
    path: "v2/services/{serviceName}:check",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<CheckServicesRequest>;

export type CheckServicesResponse = CheckResponse;
export const CheckServicesResponse = /*@__PURE__*/ /*#__PURE__*/ CheckResponse;

export type CheckServicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** This method provides admission control for services that are integrated with [Service Infrastructure](https://cloud.google.com/service-infrastructure). It checks whether an operation should be allowed based on the service configuration and relevant policies. It must be called before the operation is executed. For more information, see [Admission Control](https://cloud.google.com/service-infrastructure/docs/admission-control). NOTE: The admission control has an expected policy propagation delay of 60s. The caller **must** not depend on the most recent policy changes. NOTE: The admission control has a hard limit of 1 referenced resources per call. If an operation refers to more than 1 resources, the caller must call the Check method multiple times. This method requires the `servicemanagement.services.check` permission on the specified service. For more information, see [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control). */
export const checkServices: API.OperationMethod<
  CheckServicesRequest,
  CheckServicesResponse,
  CheckServicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CheckServicesRequest,
  output: CheckServicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ReportServicesRequest {
  /** The service name as specified in its service configuration. For example, `"pubsub.googleapis.com"`. See [google.api.Service](https://cloud.google.com/service-management/reference/rpc/google.api#google.api.Service) for the definition of a service name. */
  serviceName: string;
  /** Request body */
  body?: ReportRequest;
}

export const ReportServicesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  serviceName: Schema.String.pipe(T.HttpPath("serviceName")),
  body: Schema.optional(ReportRequest).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "POST",
    path: "v2/services/{serviceName}:report",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<ReportServicesRequest>;

export type ReportServicesResponse = ReportResponse;
export const ReportServicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ReportResponse;

export type ReportServicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** This method provides telemetry reporting for services that are integrated with [Service Infrastructure](https://cloud.google.com/service-infrastructure). It reports a list of operations that have occurred on a service. It must be called after the operations have been executed. For more information, see [Telemetry Reporting](https://cloud.google.com/service-infrastructure/docs/telemetry-reporting). NOTE: The telemetry reporting has a hard limit of 100 operations and 1MB per Report call. This method requires the `servicemanagement.services.report` permission on the specified service. For more information, see [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control). */
export const reportServices: API.OperationMethod<
  ReportServicesRequest,
  ReportServicesResponse,
  ReportServicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ReportServicesRequest,
  output: ReportServicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
