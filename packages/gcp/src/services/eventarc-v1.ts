// ==========================================================================
// Eventarc API (eventarc v1)
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
  name: "eventarc",
  version: "v1",
  rootUrl: "https://eventarc.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface GoogleCloudEventarcV1PipelineDestinationAuthenticationConfigOAuthToken {
  /** Required. Service account email used to generate the [OAuth token](https://developers.google.com/identity/protocols/OAuth2). The principal who calls this API must have iam.serviceAccounts.actAs permission in the service account. See https://cloud.google.com/iam/docs/understanding-service-accounts for more information. Eventarc service agents must have roles/roles/iam.serviceAccountTokenCreator role to allow Pipeline to create OAuth2 tokens for authenticated requests. */
  serviceAccount?: string;
  /** Optional. OAuth scope to be used for generating OAuth access token. If not specified, "https://www.googleapis.com/auth/cloud-platform" will be used. */
  scope?: string;
}

export const GoogleCloudEventarcV1PipelineDestinationAuthenticationConfigOAuthToken: Schema.Schema<GoogleCloudEventarcV1PipelineDestinationAuthenticationConfigOAuthToken> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceAccount: Schema.optional(Schema.String),
    scope: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudEventarcV1PipelineDestinationAuthenticationConfigOAuthToken",
  });

export interface HttpEndpoint {
  /** Required. The URI of the HTTP endpoint. The value must be a RFC2396 URI string. Examples: `http://10.10.10.8:80/route`, `http://svc.us-central1.p.local:8080/`. Only HTTP and HTTPS protocols are supported. The host can be either a static IP addressable from the VPC specified by the network config, or an internal DNS hostname of the service resolvable via Cloud DNS. */
  uri?: string;
}

export const HttpEndpoint: Schema.Schema<HttpEndpoint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "HttpEndpoint" });

export interface CloudRun {
  /** Optional. The relative path on the Cloud Run service the events should be sent to. The value must conform to the definition of a URI path segment (section 3.3 of RFC2396). Examples: "/route", "route", "route/subroute". */
  path?: string;
  /** Required. The region the Cloud Run service is deployed in. */
  region?: string;
  /** Required. The name of the Cloud Run service being addressed. See https://cloud.google.com/run/docs/reference/rest/v1/namespaces.services. Only services located in the same project as the trigger object can be addressed. */
  service?: string;
}

export const CloudRun: Schema.Schema<CloudRun> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.optional(Schema.String),
    region: Schema.optional(Schema.String),
    service: Schema.optional(Schema.String),
  }).annotate({ identifier: "CloudRun" });

export interface ListMessageBusEnrollmentsResponse {
  /** The requested enrollments, up to the number specified in `page_size`. */
  enrollments?: ReadonlyArray<string>;
  /** A page token that can be sent to `ListMessageBusEnrollments` to request the next page. If this is empty, then there are no more pages. */
  nextPageToken?: string;
  /** Unreachable resources, if any. */
  unreachable?: ReadonlyArray<string>;
}

export const ListMessageBusEnrollmentsResponse: Schema.Schema<ListMessageBusEnrollmentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enrollments: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListMessageBusEnrollmentsResponse" });

export interface ProjectSubscriptions {
  /** Required. A list of projects to receive events from. All the projects must be in the same org. The listed projects should have the format project/{identifier} where identifier can be either the project id for project number. A single list may contain both formats. At most 100 projects can be listed. */
  list?: ReadonlyArray<string>;
}

export const ProjectSubscriptions: Schema.Schema<ProjectSubscriptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    list: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ProjectSubscriptions" });

export interface OrganizationSubscription {
  /** Required. Enable org level subscription. */
  enabled?: boolean;
}

export const OrganizationSubscription: Schema.Schema<OrganizationSubscription> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "OrganizationSubscription" });

export interface LoggingConfig {
  /** Optional. The minimum severity of logs that will be sent to Stackdriver/Platform Telemetry. Logs at severitiy ≥ this value will be sent, unless it is NONE. */
  logSeverity?:
    | "LOG_SEVERITY_UNSPECIFIED"
    | "NONE"
    | "DEBUG"
    | "INFO"
    | "NOTICE"
    | "WARNING"
    | "ERROR"
    | "CRITICAL"
    | "ALERT"
    | "EMERGENCY"
    | (string & {});
}

export const LoggingConfig: Schema.Schema<LoggingConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    logSeverity: Schema.optional(Schema.String),
  }).annotate({ identifier: "LoggingConfig" });

export interface GoogleApiSource {
  /** Identifier. Resource name of the form projects/{project}/locations/{location}/googleApiSources/{google_api_source} */
  name?: string;
  /** Optional. Config to enable subscribing to all events from a list of projects. All the projects must be in the same org as the GoogleApiSource. */
  projectSubscriptions?: ProjectSubscriptions;
  /** Optional. Resource annotations. */
  annotations?: Record<string, string>;
  /** Optional. Config to enable subscribing to events from all projects in the GoogleApiSource's org. */
  organizationSubscription?: OrganizationSubscription;
  /** Optional. Config to control Platform logging for the GoogleApiSource. */
  loggingConfig?: LoggingConfig;
  /** Output only. Server assigned unique identifier for the channel. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted. */
  uid?: string;
  /** Output only. This checksum is computed by the server based on the value of other fields, and might be sent only on update and delete requests to ensure that the client has an up-to-date value before proceeding. */
  etag?: string;
  /** Optional. Resource display name. */
  displayName?: string;
  /** Optional. Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data. It must match the pattern `projects/* /locations/* /keyRings/* /cryptoKeys/*`. */
  cryptoKeyName?: string;
  /** Required. Destination is the message bus that the GoogleApiSource is delivering to. It must be point to the full resource name of a MessageBus. Format: "projects/{PROJECT_ID}/locations/{region}/messagesBuses/{MESSAGE_BUS_ID) */
  destination?: string;
  /** Optional. Resource labels. */
  labels?: Record<string, string>;
  /** Output only. The last-modified time. */
  updateTime?: string;
  /** Output only. The creation time. */
  createTime?: string;
}

export const GoogleApiSource: Schema.Schema<GoogleApiSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    projectSubscriptions: Schema.optional(ProjectSubscriptions),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    organizationSubscription: Schema.optional(OrganizationSubscription),
    loggingConfig: Schema.optional(LoggingConfig),
    uid: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    cryptoKeyName: Schema.optional(Schema.String),
    destination: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    updateTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleApiSource" });

export interface Pubsub {
  /** Optional. The name of the Pub/Sub topic created and managed by Eventarc as a transport for the event delivery. Format: `projects/{PROJECT_ID}/topics/{TOPIC_NAME}`. You can set an existing topic for triggers of the type `google.cloud.pubsub.topic.v1.messagePublished`. The topic you provide here is not deleted by Eventarc at trigger deletion. */
  topic?: string;
  /** Output only. The name of the Pub/Sub subscription created and managed by Eventarc as a transport for the event delivery. Format: `projects/{PROJECT_ID}/subscriptions/{SUBSCRIPTION_NAME}`. */
  subscription?: string;
}

export const Pubsub: Schema.Schema<Pubsub> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    topic: Schema.optional(Schema.String),
    subscription: Schema.optional(Schema.String),
  }).annotate({ identifier: "Pubsub" });

export interface Transport {
  /** The Pub/Sub topic and subscription used by Eventarc as a transport intermediary. */
  pubsub?: Pubsub;
}

export const Transport: Schema.Schema<Transport> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pubsub: Schema.optional(Pubsub),
  }).annotate({ identifier: "Transport" });

export interface EventFilter {
  /** Required. The name of a CloudEvents attribute. Currently, only a subset of attributes are supported for filtering. You can [retrieve a specific provider's supported event types](/eventarc/docs/list-providers#describe-provider). All triggers MUST provide a filter for the 'type' attribute. */
  attribute?: string;
  /** Required. The value for the attribute. */
  value?: string;
  /** Optional. The operator used for matching the events with the value of the filter. If not specified, only events that have an exact key-value pair specified in the filter are matched. The allowed values are `path_pattern` and `match-path-pattern`. `path_pattern` is only allowed for GCFv1 triggers. */
  operator?: string;
}

export const EventFilter: Schema.Schema<EventFilter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    attribute: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
    operator: Schema.optional(Schema.String),
  }).annotate({ identifier: "EventFilter" });

export interface NetworkConfig {
  /** Required. Name of the NetworkAttachment that allows access to the customer's VPC. Format: `projects/{PROJECT_ID}/regions/{REGION}/networkAttachments/{NETWORK_ATTACHMENT_NAME}` */
  networkAttachment?: string;
}

export const NetworkConfig: Schema.Schema<NetworkConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    networkAttachment: Schema.optional(Schema.String),
  }).annotate({ identifier: "NetworkConfig" });

export interface GKE {
  /** Required. The name of the Google Compute Engine in which the cluster resides, which can either be compute zone (for example, us-central1-a) for the zonal clusters or region (for example, us-central1) for regional clusters. */
  location?: string;
  /** Optional. The relative path on the GKE service the events should be sent to. The value must conform to the definition of a URI path segment (section 3.3 of RFC2396). Examples: "/route", "route", "route/subroute". */
  path?: string;
  /** Required. Name of the GKE service. */
  service?: string;
  /** Required. The namespace the GKE service is running in. */
  namespace?: string;
  /** Required. The name of the cluster the GKE service is running in. The cluster must be running in the same project as the trigger being created. */
  cluster?: string;
}

export const GKE: Schema.Schema<GKE> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
    service: Schema.optional(Schema.String),
    namespace: Schema.optional(Schema.String),
    cluster: Schema.optional(Schema.String),
  }).annotate({ identifier: "GKE" });

export interface Destination {
  /** Optional. Network config is used to configure how Eventarc resolves and connect to a destination. This should only be used with HttpEndpoint destination type. */
  networkConfig?: NetworkConfig;
  /** Cloud Run fully-managed resource that receives the events. The resource should be in the same project as the trigger. */
  cloudRun?: CloudRun;
  /** An HTTP endpoint destination described by an URI. */
  httpEndpoint?: HttpEndpoint;
  /** A GKE service capable of receiving events. The service should be running in the same project as the trigger. */
  gke?: GKE;
  /** The resource name of the Workflow whose Executions are triggered by the events. The Workflow resource should be deployed in the same project as the trigger. Format: `projects/{project}/locations/{location}/workflows/{workflow}` */
  workflow?: string;
  /** The Cloud Function resource name. Cloud Functions V1 and V2 are supported. Format: `projects/{project}/locations/{location}/functions/{function}` This is a read-only field. Creating Cloud Functions V1/V2 triggers is only supported via the Cloud Functions product. An error will be returned if the user sets this value. */
  cloudFunction?: string;
}

export const Destination: Schema.Schema<Destination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    networkConfig: Schema.optional(NetworkConfig),
    cloudRun: Schema.optional(CloudRun),
    httpEndpoint: Schema.optional(HttpEndpoint),
    gke: Schema.optional(GKE),
    workflow: Schema.optional(Schema.String),
    cloudFunction: Schema.optional(Schema.String),
  }).annotate({ identifier: "Destination" });

export interface StateCondition {
  /** Human-readable message. */
  message?: string;
  /** The canonical code of the condition. */
  code?:
    | "OK"
    | "CANCELLED"
    | "UNKNOWN"
    | "INVALID_ARGUMENT"
    | "DEADLINE_EXCEEDED"
    | "NOT_FOUND"
    | "ALREADY_EXISTS"
    | "PERMISSION_DENIED"
    | "UNAUTHENTICATED"
    | "RESOURCE_EXHAUSTED"
    | "FAILED_PRECONDITION"
    | "ABORTED"
    | "OUT_OF_RANGE"
    | "UNIMPLEMENTED"
    | "INTERNAL"
    | "UNAVAILABLE"
    | "DATA_LOSS"
    | (string & {});
}

export const StateCondition: Schema.Schema<StateCondition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    code: Schema.optional(Schema.String),
  }).annotate({ identifier: "StateCondition" });

export interface RetryPolicy {
  /** Optional. The maximum number of delivery attempts for any message. The only valid value is 1. */
  maxAttempts?: number;
}

export const RetryPolicy: Schema.Schema<RetryPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxAttempts: Schema.optional(Schema.Number),
  }).annotate({ identifier: "RetryPolicy" });

export interface Trigger {
  /** Output only. Server-assigned unique identifier for the trigger. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted. */
  uid?: string;
  /** Optional. To deliver messages, Eventarc might use other Google Cloud products as a transport intermediary. This field contains a reference to that transport intermediary. This information can be used for debugging purposes. */
  transport?: Transport;
  /** Required. Unordered list. The list of filters that applies to event attributes. Only events that match all the provided filters are sent to the destination. */
  eventFilters?: ReadonlyArray<EventFilter>;
  /** Output only. The last-modified time. */
  updateTime?: string;
  /** Optional. User labels attached to the triggers that can be used to group resources. */
  labels?: Record<string, string>;
  /** Required. Destination specifies where the events should be sent to. */
  destination?: Destination;
  /** Output only. This checksum is computed by the server based on the value of other fields, and might be sent only on create requests to ensure that the client has an up-to-date value before proceeding. */
  etag?: string;
  /** Output only. The creation time. */
  createTime?: string;
  /** Required. The resource name of the trigger. Must be unique within the location of the project and must be in `projects/{project}/locations/{location}/triggers/{trigger}` format. */
  name?: string;
  /** Output only. The reason(s) why a trigger is in FAILED state. */
  conditions?: Record<string, StateCondition>;
  /** Optional. The retry policy to use in the Trigger. If unset, event delivery will be retried for up to 24 hours by default: https://cloud.google.com/eventarc/docs/retry-events */
  retryPolicy?: RetryPolicy;
  /** Optional. The name of the channel associated with the trigger in `projects/{project}/locations/{location}/channels/{channel}` format. You must provide a channel to receive events from Eventarc SaaS partners. */
  channel?: string;
  /** Output only. Whether or not this Trigger satisfies the requirements of physical zone separation */
  satisfiesPzs?: boolean;
  /** Optional. EventDataContentType specifies the type of payload in MIME format that is expected from the CloudEvent data field. This is set to `application/json` if the value is not defined. */
  eventDataContentType?: string;
  /** Optional. The IAM service account email associated with the trigger. The service account represents the identity of the trigger. The `iam.serviceAccounts.actAs` permission must be granted on the service account to allow a principal to impersonate the service account. For more information, see the [Roles and permissions](/eventarc/docs/all-roles-permissions) page specific to the trigger destination. */
  serviceAccount?: string;
}

export const Trigger: Schema.Schema<Trigger> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uid: Schema.optional(Schema.String),
    transport: Schema.optional(Transport),
    eventFilters: Schema.optional(Schema.Array(EventFilter)),
    updateTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    destination: Schema.optional(Destination),
    etag: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    conditions: Schema.optional(Schema.Record(Schema.String, StateCondition)),
    retryPolicy: Schema.optional(RetryPolicy),
    channel: Schema.optional(Schema.String),
    satisfiesPzs: Schema.optional(Schema.Boolean),
    eventDataContentType: Schema.optional(Schema.String),
    serviceAccount: Schema.optional(Schema.String),
  }).annotate({ identifier: "Trigger" });

export interface FilteringAttribute {
  /** Output only. Description of the purpose of the attribute. */
  description?: string;
  /** Output only. If true, the attribute accepts matching expressions in the Eventarc PathPattern format. */
  pathPatternSupported?: boolean;
  /** Output only. Attribute used for filtering the event type. */
  attribute?: string;
  /** Output only. If true, the triggers for this provider should always specify a filter on these attributes. Trigger creation will fail otherwise. */
  required?: boolean;
}

export const FilteringAttribute: Schema.Schema<FilteringAttribute> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    pathPatternSupported: Schema.optional(Schema.Boolean),
    attribute: Schema.optional(Schema.String),
    required: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "FilteringAttribute" });

export interface EventType {
  /** Output only. Human friendly description of what the event type is about. For example "Bucket created in Cloud Storage". */
  description?: string;
  /** Output only. Filtering attributes for the event type. */
  filteringAttributes?: ReadonlyArray<FilteringAttribute>;
  /** Output only. The full name of the event type (for example, "google.cloud.storage.object.v1.finalized"). In the form of {provider-specific-prefix}.{resource}.{version}.{verb}. Types MUST be versioned and event schemas are guaranteed to remain backward compatible within one version. Note that event type versions and API versions do not need to match. */
  type?: string;
  /** Output only. URI for the event schema. For example "https://github.com/googleapis/google-cloudevents/blob/master/proto/google/events/cloud/storage/v1/events.proto" */
  eventSchemaUri?: string;
}

export const EventType: Schema.Schema<EventType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    filteringAttributes: Schema.optional(Schema.Array(FilteringAttribute)),
    type: Schema.optional(Schema.String),
    eventSchemaUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "EventType" });

export interface Provider {
  /** Output only. Human friendly name for the Provider. For example "Cloud Storage". */
  displayName?: string;
  /** Output only. Event types for this provider. */
  eventTypes?: ReadonlyArray<EventType>;
  /** Output only. In `projects/{project}/locations/{location}/providers/{provider_id}` format. */
  name?: string;
}

export const Provider: Schema.Schema<Provider> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    eventTypes: Schema.optional(Schema.Array(EventType)),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Provider" });

export interface GoogleRpcStatus {
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
}

export const GoogleRpcStatus: Schema.Schema<GoogleRpcStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    message: Schema.optional(Schema.String),
    code: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleRpcStatus" });

export interface GoogleCloudEventarcV1PipelineDestinationAuthenticationConfigOidcToken {
  /** Required. Service account email used to generate the OIDC Token. The principal who calls this API must have iam.serviceAccounts.actAs permission in the service account. See https://cloud.google.com/iam/docs/understanding-service-accounts for more information. Eventarc service agents must have roles/roles/iam.serviceAccountTokenCreator role to allow the Pipeline to create OpenID tokens for authenticated requests. */
  serviceAccount?: string;
  /** Optional. Audience to be used to generate the OIDC Token. The audience claim identifies the recipient that the JWT is intended for. If unspecified, the destination URI will be used. */
  audience?: string;
}

export const GoogleCloudEventarcV1PipelineDestinationAuthenticationConfigOidcToken: Schema.Schema<GoogleCloudEventarcV1PipelineDestinationAuthenticationConfigOidcToken> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceAccount: Schema.optional(Schema.String),
    audience: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudEventarcV1PipelineDestinationAuthenticationConfigOidcToken",
  });

export interface Enrollment {
  /** Required. Immutable. Resource name of the message bus identifying the source of the messages. It matches the form projects/{project}/locations/{location}/messageBuses/{messageBus}. */
  messageBus?: string;
  /** Required. A CEL expression identifying which messages this enrollment applies to. */
  celMatch?: string;
  /** Identifier. Resource name of the form projects/{project}/locations/{location}/enrollments/{enrollment} */
  name?: string;
  /** Output only. Server assigned unique identifier for the channel. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted. */
  uid?: string;
  /** Output only. The creation time. */
  createTime?: string;
  /** Optional. Resource labels. */
  labels?: Record<string, string>;
  /** Output only. The last-modified time. */
  updateTime?: string;
  /** Output only. This checksum is computed by the server based on the value of other fields, and might be sent only on update and delete requests to ensure that the client has an up-to-date value before proceeding. */
  etag?: string;
  /** Optional. Resource display name. */
  displayName?: string;
  /** Optional. Resource annotations. */
  annotations?: Record<string, string>;
  /** Required. Destination is the Pipeline that the Enrollment is delivering to. It must point to the full resource name of a Pipeline. Format: "projects/{PROJECT_ID}/locations/{region}/pipelines/{PIPELINE_ID)" */
  destination?: string;
}

export const Enrollment: Schema.Schema<Enrollment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    messageBus: Schema.optional(Schema.String),
    celMatch: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    updateTime: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    destination: Schema.optional(Schema.String),
  }).annotate({ identifier: "Enrollment" });

export interface Channel {
  /** Output only. The last-modified time. */
  updateTime?: string;
  /** Optional. Resource labels. */
  labels?: Record<string, string>;
  /** The name of the event provider (e.g. Eventarc SaaS partner) associated with the channel. This provider will be granted permissions to publish events to the channel. Format: `projects/{project}/locations/{location}/providers/{provider_id}`. */
  provider?: string;
  /** Optional. Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data. It must match the pattern `projects/* /locations/* /keyRings/* /cryptoKeys/*`. */
  cryptoKeyName?: string;
  /** Output only. The creation time. */
  createTime?: string;
  /** Output only. The activation token for the channel. The token must be used by the provider to register the channel for publishing. */
  activationToken?: string;
  /** Required. The resource name of the channel. Must be unique within the location on the project and must be in `projects/{project}/locations/{location}/channels/{channel_id}` format. */
  name?: string;
  /** Output only. Server assigned unique identifier for the channel. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted. */
  uid?: string;
  /** Output only. The name of the Pub/Sub topic created and managed by Eventarc system as a transport for the event delivery. Format: `projects/{project}/topics/{topic_id}`. */
  pubsubTopic?: string;
  /** Output only. The state of a Channel. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PENDING"
    | "ACTIVE"
    | "INACTIVE"
    | (string & {});
  /** Output only. Whether or not this Channel satisfies the requirements of physical zone separation */
  satisfiesPzs?: boolean;
}

export const Channel: Schema.Schema<Channel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    provider: Schema.optional(Schema.String),
    cryptoKeyName: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    activationToken: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    pubsubTopic: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    satisfiesPzs: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "Channel" });

export interface ListChannelsResponse {
  /** The requested channels, up to the number specified in `page_size`. */
  channels?: ReadonlyArray<Channel>;
  /** A page token that can be sent to `ListChannels` to request the next page. If this is empty, then there are no more pages. */
  nextPageToken?: string;
  /** Unreachable resources, if any. */
  unreachable?: ReadonlyArray<string>;
}

export const ListChannelsResponse: Schema.Schema<ListChannelsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    channels: Schema.optional(Schema.Array(Channel)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListChannelsResponse" });

export interface AuditLogConfig {
  /** The log type that this config enables. */
  logType?:
    | "LOG_TYPE_UNSPECIFIED"
    | "ADMIN_READ"
    | "DATA_WRITE"
    | "DATA_READ"
    | (string & {});
  /** Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members. */
  exemptedMembers?: ReadonlyArray<string>;
}

export const AuditLogConfig: Schema.Schema<AuditLogConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    logType: Schema.optional(Schema.String),
    exemptedMembers: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "AuditLogConfig" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface Location {
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
}

export const Location: Schema.Schema<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    locationId: Schema.optional(Schema.String),
  }).annotate({ identifier: "Location" });

export interface OperationMetadata {
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
}

export const OperationMetadata: Schema.Schema<OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
    statusMessage: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
    target: Schema.optional(Schema.String),
  }).annotate({ identifier: "OperationMetadata" });

export interface ListGoogleApiSourcesResponse {
  /** The requested GoogleApiSources, up to the number specified in `page_size`. */
  googleApiSources?: ReadonlyArray<GoogleApiSource>;
  /** A page token that can be sent to `ListMessageBusEnrollments` to request the next page. If this is empty, then there are no more pages. */
  nextPageToken?: string;
  /** Unreachable resources, if any. */
  unreachable?: ReadonlyArray<string>;
}

export const ListGoogleApiSourcesResponse: Schema.Schema<ListGoogleApiSourcesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    googleApiSources: Schema.optional(Schema.Array(GoogleApiSource)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListGoogleApiSourcesResponse" });

export interface Expr {
  /** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
  description?: string;
  /** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
  location?: string;
  /** Textual representation of an expression in Common Expression Language syntax. */
  expression?: string;
  /** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
  title?: string;
}

export const Expr: Schema.Schema<Expr> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    expression: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
  }).annotate({ identifier: "Expr" });

export interface GoogleCloudEventarcV1PipelineMessagePayloadFormatJsonFormat {}

export const GoogleCloudEventarcV1PipelineMessagePayloadFormatJsonFormat: Schema.Schema<GoogleCloudEventarcV1PipelineMessagePayloadFormatJsonFormat> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudEventarcV1PipelineMessagePayloadFormatJsonFormat",
  });

export interface GoogleCloudEventarcV1PipelineMessagePayloadFormatAvroFormat {
  /** Optional. The entire schema definition is stored in this field. */
  schemaDefinition?: string;
}

export const GoogleCloudEventarcV1PipelineMessagePayloadFormatAvroFormat: Schema.Schema<GoogleCloudEventarcV1PipelineMessagePayloadFormatAvroFormat> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    schemaDefinition: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudEventarcV1PipelineMessagePayloadFormatAvroFormat",
  });

export interface GoogleCloudEventarcV1PipelineMessagePayloadFormatProtobufFormat {
  /** Optional. The entire schema definition is stored in this field. */
  schemaDefinition?: string;
}

export const GoogleCloudEventarcV1PipelineMessagePayloadFormatProtobufFormat: Schema.Schema<GoogleCloudEventarcV1PipelineMessagePayloadFormatProtobufFormat> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    schemaDefinition: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudEventarcV1PipelineMessagePayloadFormatProtobufFormat",
  });

export interface GoogleCloudEventarcV1PipelineMessagePayloadFormat {
  /** Optional. JSON format. */
  json?: GoogleCloudEventarcV1PipelineMessagePayloadFormatJsonFormat;
  /** Optional. Avro format. */
  avro?: GoogleCloudEventarcV1PipelineMessagePayloadFormatAvroFormat;
  /** Optional. Protobuf format. */
  protobuf?: GoogleCloudEventarcV1PipelineMessagePayloadFormatProtobufFormat;
}

export const GoogleCloudEventarcV1PipelineMessagePayloadFormat: Schema.Schema<GoogleCloudEventarcV1PipelineMessagePayloadFormat> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    json: Schema.optional(
      GoogleCloudEventarcV1PipelineMessagePayloadFormatJsonFormat,
    ),
    avro: Schema.optional(
      GoogleCloudEventarcV1PipelineMessagePayloadFormatAvroFormat,
    ),
    protobuf: Schema.optional(
      GoogleCloudEventarcV1PipelineMessagePayloadFormatProtobufFormat,
    ),
  }).annotate({
    identifier: "GoogleCloudEventarcV1PipelineMessagePayloadFormat",
  });

export interface GoogleCloudEventarcV1PipelineMediationTransformation {
  /** Optional. The CEL expression template to apply to transform messages. The following CEL extension functions are provided for use in this CEL expression: - merge: map1.merge(map2) -> map3 - Merges the passed CEL map with the existing CEL map the function is applied to. - If the same key exists in both maps, if the key's value is type map both maps are merged else the value from the passed map is used. - denormalize: map.denormalize() -> map - Denormalizes a CEL map such that every value of type map or key in the map is expanded to return a single level map. - The resulting keys are "." separated indices of the map keys. - For example: { "a": 1, "b": { "c": 2, "d": 3 } "e": [4, 5] } .denormalize() -> { "a": 1, "b.c": 2, "b.d": 3, "e.0": 4, "e.1": 5 } - setField: map.setField(key, value) -> message - Sets the field of the message with the given key to the given value. - If the field is not present it will be added. - If the field is present it will be overwritten. - The key can be a dot separated path to set a field in a nested message. - Key must be of type string. - Value may be any valid type. - removeFields: map.removeFields([key1, key2, ...]) -> message - Removes the fields of the map with the given keys. - The keys can be a dot separated path to remove a field in a nested message. - If a key is not found it will be ignored. - Keys must be of type string. - toMap: [map1, map2, ...].toMap() -> map - Converts a CEL list of CEL maps to a single CEL map - toDestinationPayloadFormat(): message.data.toDestinationPayloadFormat() -> string or bytes - Converts the message data to the destination payload format specified in Pipeline.Destination.output_payload_format - This function is meant to be applied to the message.data field. - If the destination payload format is not set, the function will return the message data unchanged. - toCloudEventJsonWithPayloadFormat: message.toCloudEventJsonWithPayloadFormat() -> map - Converts a message to the corresponding structure of JSON format for CloudEvents - This function applies toDestinationPayloadFormat() to the message data. It also sets the corresponding datacontenttype of the CloudEvent, as indicated by Pipeline.Destination.output_payload_format. If no output_payload_format is set it will use the existing datacontenttype on the CloudEvent if present, else leave datacontenttype absent. - This function expects that the content of the message will adhere to the standard CloudEvent format. If it doesn't then this function will fail. - The result is a CEL map that corresponds to the JSON representation of the CloudEvent. To convert that data to a JSON string it can be chained with the toJsonString function. */
  transformationTemplate?: string;
}

export const GoogleCloudEventarcV1PipelineMediationTransformation: Schema.Schema<GoogleCloudEventarcV1PipelineMediationTransformation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transformationTemplate: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudEventarcV1PipelineMediationTransformation",
  });

export interface GoogleCloudEventarcV1PipelineMediation {
  /** Optional. How the Pipeline is to transform messages */
  transformation?: GoogleCloudEventarcV1PipelineMediationTransformation;
}

export const GoogleCloudEventarcV1PipelineMediation: Schema.Schema<GoogleCloudEventarcV1PipelineMediation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transformation: Schema.optional(
      GoogleCloudEventarcV1PipelineMediationTransformation,
    ),
  }).annotate({ identifier: "GoogleCloudEventarcV1PipelineMediation" });

export interface TestIamPermissionsResponse {
  /** A subset of `TestPermissionsRequest.permissions` that the caller is allowed. */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsResponse: Schema.Schema<TestIamPermissionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsResponse" });

export interface MessageBus {
  /** Output only. This checksum is computed by the server based on the value of other fields, and might be sent only on update and delete requests to ensure that the client has an up-to-date value before proceeding. */
  etag?: string;
  /** Optional. Resource display name. */
  displayName?: string;
  /** Optional. Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data. It must match the pattern `projects/* /locations/* /keyRings/* /cryptoKeys/*`. */
  cryptoKeyName?: string;
  /** Optional. Resource annotations. */
  annotations?: Record<string, string>;
  /** Optional. Resource labels. */
  labels?: Record<string, string>;
  /** Output only. The last-modified time. */
  updateTime?: string;
  /** Output only. The creation time. */
  createTime?: string;
  /** Optional. Config to control Platform logging for the Message Bus. This log configuration is applied to the Message Bus itself, and all the Enrollments attached to it. */
  loggingConfig?: LoggingConfig;
  /** Identifier. Resource name of the form projects/{project}/locations/{location}/messageBuses/{message_bus} */
  name?: string;
  /** Output only. Server assigned unique identifier for the channel. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted. */
  uid?: string;
}

export const MessageBus: Schema.Schema<MessageBus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    cryptoKeyName: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    updateTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    loggingConfig: Schema.optional(LoggingConfig),
    name: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
  }).annotate({ identifier: "MessageBus" });

export interface GoogleCloudEventarcV1PipelineDestinationHttpEndpoint {
  /** Required. The URI of the HTTP endpoint. The value must be a RFC2396 URI string. Examples: `https://svc.us-central1.p.local:8080/route`. Only the HTTPS protocol is supported. */
  uri?: string;
  /** Optional. The CEL expression used to modify how the destination-bound HTTP request is constructed. If a binding expression is not specified here, the message is treated as a CloudEvent and is mapped to the HTTP request according to the CloudEvent HTTP Protocol Binding Binary Content Mode (https://github.com/cloudevents/spec/blob/main/cloudevents/bindings/http-protocol-binding.md#31-binary-content-mode). In this representation, all fields except the `data` and `datacontenttype` field on the message are mapped to HTTP request headers with a prefix of `ce-`. To construct the HTTP request payload and the value of the content-type HTTP header, the payload format is defined as follows: 1) Use the output_payload_format_type on the Pipeline.Destination if it is set, else: 2) Use the input_payload_format_type on the Pipeline if it is set, else: 3) Treat the payload as opaque binary data. The `data` field of the message is converted to the payload format or left as-is for case 3) and then attached as the payload of the HTTP request. The `content-type` header on the HTTP request is set to the payload format type or left empty for case 3). However, if a mediation has updated the `datacontenttype` field on the message so that it is not the same as the payload format type but it is still a prefix of the payload format type, then the `content-type` header on the HTTP request is set to this `datacontenttype` value. For example, if the `datacontenttype` is "application/json" and the payload format type is "application/json; charset=utf-8", then the `content-type` header on the HTTP request is set to "application/json; charset=utf-8". If a non-empty binding expression is specified then this expression is used to modify the default CloudEvent HTTP Protocol Binding Binary Content representation. The result of the CEL expression must be a map of key/value pairs which is used as follows: - If a map named `headers` exists on the result of the expression, then its key/value pairs are directly mapped to the HTTP request headers. The headers values are constructed from the corresponding value type's canonical representation. If the `headers` field doesn't exist then the resulting HTTP request will be the headers of the CloudEvent HTTP Binding Binary Content Mode representation of the final message. Note: If the specified binding expression, has updated the `datacontenttype` field on the message so that it is not the same as the payload format type but it is still a prefix of the payload format type, then the `content-type` header in the `headers` map is set to this `datacontenttype` value. - If a field named `body` exists on the result of the expression then its value is directly mapped to the body of the request. If the value of the `body` field is of type bytes or string then it is used for the HTTP request body as-is, with no conversion. If the body field is of any other type then it is converted to a JSON string. If the body field does not exist then the resulting payload of the HTTP request will be data value of the CloudEvent HTTP Binding Binary Content Mode representation of the final message as described earlier. - Any other fields in the resulting expression will be ignored. The CEL expression may access the incoming CloudEvent message in its definition, as follows: - The `data` field of the incoming CloudEvent message can be accessed using the `message.data` value. Subfields of `message.data` may also be accessed if an input_payload_format has been specified on the Pipeline. - Each attribute of the incoming CloudEvent message can be accessed using the `message.` value, where is replaced with the name of the attribute. - Existing headers can be accessed in the CEL expression using the `headers` variable. The `headers` variable defines a map of key/value pairs corresponding to the HTTP headers of the CloudEvent HTTP Binding Binary Content Mode representation of the final message as described earlier. For example, the following CEL expression can be used to construct an HTTP request by adding an additional header to the HTTP headers of the CloudEvent HTTP Binding Binary Content Mode representation of the final message and by overwriting the body of the request: ``` { "headers": headers.merge({"new-header-key": "new-header-value"}), "body": "new-body" } ``` - The default binding for the message payload can be accessed using the `body` variable. It conatins a string representation of the message payload in the format specified by the `output_payload_format` field. If the `input_payload_format` field is not set, the `body` variable contains the same message payload bytes that were published. Additionally, the following CEL extension functions are provided for use in this CEL expression: - toBase64Url: map.toBase64Url() -> string - Converts a CelValue to a base64url encoded string - toJsonString: map.toJsonString() -> string - Converts a CelValue to a JSON string - merge: map1.merge(map2) -> map3 - Merges the passed CEL map with the existing CEL map the function is applied to. - If the same key exists in both maps, if the key's value is type map both maps are merged else the value from the passed map is used. - denormalize: map.denormalize() -> map - Denormalizes a CEL map such that every value of type map or key in the map is expanded to return a single level map. - The resulting keys are "." separated indices of the map keys. - For example: { "a": 1, "b": { "c": 2, "d": 3 } "e": [4, 5] } .denormalize() -> { "a": 1, "b.c": 2, "b.d": 3, "e.0": 4, "e.1": 5 } - setField: map.setField(key, value) -> message - Sets the field of the message with the given key to the given value. - If the field is not present it will be added. - If the field is present it will be overwritten. - The key can be a dot separated path to set a field in a nested message. - Key must be of type string. - Value may be any valid type. - removeFields: map.removeFields([key1, key2, ...]) -> message - Removes the fields of the map with the given keys. - The keys can be a dot separated path to remove a field in a nested message. - If a key is not found it will be ignored. - Keys must be of type string. - toMap: [map1, map2, ...].toMap() -> map - Converts a CEL list of CEL maps to a single CEL map - toCloudEventJsonWithPayloadFormat: message.toCloudEventJsonWithPayloadFormat() -> map - Converts a message to the corresponding structure of JSON format for CloudEvents. - It converts `data` to destination payload format specified in `output_payload_format`. If `output_payload_format` is not set, the data will remain unchanged. - It also sets the corresponding datacontenttype of the CloudEvent, as indicated by `output_payload_format`. If no `output_payload_format` is set it will use the value of the "datacontenttype" attribute on the CloudEvent if present, else remove "datacontenttype" attribute. - This function expects that the content of the message will adhere to the standard CloudEvent format. If it doesn't then this function will fail. - The result is a CEL map that corresponds to the JSON representation of the CloudEvent. To convert that data to a JSON string it can be chained with the toJsonString function. The Pipeline expects that the message it receives adheres to the standard CloudEvent format. If it doesn't then the outgoing message request may fail with a persistent error. */
  messageBindingTemplate?: string;
}

export const GoogleCloudEventarcV1PipelineDestinationHttpEndpoint: Schema.Schema<GoogleCloudEventarcV1PipelineDestinationHttpEndpoint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    messageBindingTemplate: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudEventarcV1PipelineDestinationHttpEndpoint",
  });

export interface GoogleCloudEventarcV1PipelineDestinationNetworkConfig {
  /** Required. Name of the NetworkAttachment that allows access to the consumer VPC. Format: `projects/{PROJECT_ID}/regions/{REGION}/networkAttachments/{NETWORK_ATTACHMENT_NAME}` */
  networkAttachment?: string;
}

export const GoogleCloudEventarcV1PipelineDestinationNetworkConfig: Schema.Schema<GoogleCloudEventarcV1PipelineDestinationNetworkConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    networkAttachment: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudEventarcV1PipelineDestinationNetworkConfig",
  });

export interface GoogleCloudEventarcV1PipelineDestinationAuthenticationConfig {
  /** Optional. This authenticate method will apply Google OIDC tokens signed by a Google Cloud service account to the requests. */
  googleOidc?: GoogleCloudEventarcV1PipelineDestinationAuthenticationConfigOidcToken;
  /** Optional. If specified, an [OAuth token](https://developers.google.com/identity/protocols/OAuth2) will be generated and attached as an `Authorization` header in the HTTP request. This type of authorization should generally only be used when calling Google APIs hosted on *.googleapis.com. */
  oauthToken?: GoogleCloudEventarcV1PipelineDestinationAuthenticationConfigOAuthToken;
}

export const GoogleCloudEventarcV1PipelineDestinationAuthenticationConfig: Schema.Schema<GoogleCloudEventarcV1PipelineDestinationAuthenticationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    googleOidc: Schema.optional(
      GoogleCloudEventarcV1PipelineDestinationAuthenticationConfigOidcToken,
    ),
    oauthToken: Schema.optional(
      GoogleCloudEventarcV1PipelineDestinationAuthenticationConfigOAuthToken,
    ),
  }).annotate({
    identifier: "GoogleCloudEventarcV1PipelineDestinationAuthenticationConfig",
  });

export interface GoogleCloudEventarcV1PipelineDestination {
  /** Optional. An HTTP endpoint destination described by an URI. If a DNS FQDN is provided as the endpoint, Pipeline will create a peering zone to the consumer VPC and forward DNS requests to the VPC specified by network config to resolve the service endpoint. See: https://cloud.google.com/dns/docs/zones/zones-overview#peering_zones */
  httpEndpoint?: GoogleCloudEventarcV1PipelineDestinationHttpEndpoint;
  /** Optional. Network config is used to configure how Pipeline resolves and connects to a destination. */
  networkConfig?: GoogleCloudEventarcV1PipelineDestinationNetworkConfig;
  /** Optional. An authentication config used to authenticate message requests, such that destinations can verify the source. For example, this can be used with private Google Cloud destinations that require Google Cloud credentials for access like Cloud Run. This field is optional and should be set only by users interested in authenticated push. */
  authenticationConfig?: GoogleCloudEventarcV1PipelineDestinationAuthenticationConfig;
  /** Optional. The resource name of the Pub/Sub topic to which events should be published. Format: `projects/{project}/locations/{location}/topics/{topic}` */
  topic?: string;
  /** Optional. The resource name of the Workflow whose Executions are triggered by the events. The Workflow resource should be deployed in the same project as the Pipeline. Format: `projects/{project}/locations/{location}/workflows/{workflow}` */
  workflow?: string;
  /** Optional. The resource name of the Message Bus to which events should be published. The Message Bus resource should exist in the same project as the Pipeline. Format: `projects/{project}/locations/{location}/messageBuses/{message_bus}` */
  messageBus?: string;
  /** Optional. The message format before it is delivered to the destination. If not set, the message will be delivered in the format it was originally delivered to the Pipeline. This field can only be set if Pipeline.input_payload_format is also set. */
  outputPayloadFormat?: GoogleCloudEventarcV1PipelineMessagePayloadFormat;
}

export const GoogleCloudEventarcV1PipelineDestination: Schema.Schema<GoogleCloudEventarcV1PipelineDestination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    httpEndpoint: Schema.optional(
      GoogleCloudEventarcV1PipelineDestinationHttpEndpoint,
    ),
    networkConfig: Schema.optional(
      GoogleCloudEventarcV1PipelineDestinationNetworkConfig,
    ),
    authenticationConfig: Schema.optional(
      GoogleCloudEventarcV1PipelineDestinationAuthenticationConfig,
    ),
    topic: Schema.optional(Schema.String),
    workflow: Schema.optional(Schema.String),
    messageBus: Schema.optional(Schema.String),
    outputPayloadFormat: Schema.optional(
      GoogleCloudEventarcV1PipelineMessagePayloadFormat,
    ),
  }).annotate({ identifier: "GoogleCloudEventarcV1PipelineDestination" });

export interface GoogleLongrunningOperation {
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** The error result of the operation in case of failure or cancellation. */
  error?: GoogleRpcStatus;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
}

export const GoogleLongrunningOperation: Schema.Schema<GoogleLongrunningOperation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    error: Schema.optional(GoogleRpcStatus),
    done: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "GoogleLongrunningOperation" });

export interface GoogleLongrunningListOperationsResponse {
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<GoogleLongrunningOperation>;
}

export const GoogleLongrunningListOperationsResponse: Schema.Schema<GoogleLongrunningListOperationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    operations: Schema.optional(Schema.Array(GoogleLongrunningOperation)),
  }).annotate({ identifier: "GoogleLongrunningListOperationsResponse" });

export interface GoogleChannelConfig {
  /** Optional. Resource labels. */
  labels?: Record<string, string>;
  /** Required. The resource name of the config. Must be in the format of, `projects/{project}/locations/{location}/googleChannelConfig`. In API responses, the config name always includes the projectID, regardless of whether the projectID or projectNumber was provided. */
  name?: string;
  /** Output only. The last-modified time. */
  updateTime?: string;
  /** Optional. Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data. It must match the pattern `projects/* /locations/* /keyRings/* /cryptoKeys/*`. */
  cryptoKeyName?: string;
}

export const GoogleChannelConfig: Schema.Schema<GoogleChannelConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    cryptoKeyName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleChannelConfig" });

export interface GoogleLongrunningCancelOperationRequest {}

export const GoogleLongrunningCancelOperationRequest: Schema.Schema<GoogleLongrunningCancelOperationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleLongrunningCancelOperationRequest",
  });

export interface ListProvidersResponse {
  /** The requested providers, up to the number specified in `page_size`. */
  providers?: ReadonlyArray<Provider>;
  /** A page token that can be sent to `ListProviders` to request the next page. If this is empty, then there are no more pages. */
  nextPageToken?: string;
  /** Unreachable resources, if any. */
  unreachable?: ReadonlyArray<string>;
}

export const ListProvidersResponse: Schema.Schema<ListProvidersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    providers: Schema.optional(Schema.Array(Provider)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListProvidersResponse" });

export interface ListLocationsResponse {
  /** A list of locations that matches the specified filter in the request. */
  locations?: ReadonlyArray<Location>;
  /** The standard List next-page token. */
  nextPageToken?: string;
}

export const ListLocationsResponse: Schema.Schema<ListLocationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locations: Schema.optional(Schema.Array(Location)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListLocationsResponse" });

export interface ChannelConnection {
  /** Input only. Activation token for the channel. The token will be used during the creation of ChannelConnection to bind the channel with the provider project. This field will not be stored in the provider resource. */
  activationToken?: string;
  /** Required. The name of the connected subscriber Channel. This is a weak reference to avoid cross project and cross accounts references. This must be in `projects/{project}/location/{location}/channels/{channel_id}` format. */
  channel?: string;
  /** Output only. The creation time. */
  createTime?: string;
  /** Optional. Resource labels. */
  labels?: Record<string, string>;
  /** Required. The name of the connection. */
  name?: string;
  /** Output only. Server assigned ID of the resource. The server guarantees uniqueness and immutability until deleted. */
  uid?: string;
  /** Output only. The last-modified time. */
  updateTime?: string;
}

export const ChannelConnection: Schema.Schema<ChannelConnection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    activationToken: Schema.optional(Schema.String),
    channel: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "ChannelConnection" });

export interface ListChannelConnectionsResponse {
  /** The requested channel connections, up to the number specified in `page_size`. */
  channelConnections?: ReadonlyArray<ChannelConnection>;
  /** A page token that can be sent to `ListChannelConnections` to request the next page. If this is empty, then there are no more pages. */
  nextPageToken?: string;
  /** Unreachable resources, if any. */
  unreachable?: ReadonlyArray<string>;
}

export const ListChannelConnectionsResponse: Schema.Schema<ListChannelConnectionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    channelConnections: Schema.optional(Schema.Array(ChannelConnection)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListChannelConnectionsResponse" });

export interface ListEnrollmentsResponse {
  /** The requested Enrollments, up to the number specified in `page_size`. */
  enrollments?: ReadonlyArray<Enrollment>;
  /** A page token that can be sent to `ListEnrollments` to request the next page. If this is empty, then there are no more pages. */
  nextPageToken?: string;
  /** Unreachable resources, if any. */
  unreachable?: ReadonlyArray<string>;
}

export const ListEnrollmentsResponse: Schema.Schema<ListEnrollmentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enrollments: Schema.optional(Schema.Array(Enrollment)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListEnrollmentsResponse" });

export interface GoogleCloudEventarcV1PipelineRetryPolicy {
  /** Optional. The maximum number of delivery attempts for any message. The value must be between 1 and 100. The default value for this field is 5. */
  maxAttempts?: number;
  /** Optional. The minimum amount of seconds to wait between retry attempts. The value must be between 1 and 600. The default value for this field is 5. */
  minRetryDelay?: string;
  /** Optional. The maximum amount of seconds to wait between retry attempts. The value must be between 1 and 600. The default value for this field is 60. */
  maxRetryDelay?: string;
}

export const GoogleCloudEventarcV1PipelineRetryPolicy: Schema.Schema<GoogleCloudEventarcV1PipelineRetryPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxAttempts: Schema.optional(Schema.Number),
    minRetryDelay: Schema.optional(Schema.String),
    maxRetryDelay: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudEventarcV1PipelineRetryPolicy" });

export interface Pipeline {
  /** Optional. User-defined annotations. See https://google.aip.dev/128#annotations. */
  annotations?: Record<string, string>;
  /** Required. List of destinations to which messages will be forwarded. Currently, exactly one destination is supported per Pipeline. */
  destinations?: ReadonlyArray<GoogleCloudEventarcV1PipelineDestination>;
  /** Optional. Config to control Platform Logging for Pipelines. */
  loggingConfig?: LoggingConfig;
  /** Identifier. The resource name of the Pipeline. Must be unique within the location of the project and must be in `projects/{project}/locations/{location}/pipelines/{pipeline}` format. */
  name?: string;
  /** Optional. The retry policy to use in the pipeline. */
  retryPolicy?: GoogleCloudEventarcV1PipelineRetryPolicy;
  /** Optional. The payload format expected for the messages received by the Pipeline. If input_payload_format is set then any messages not matching this format will be treated as persistent errors. If input_payload_format is not set, then the message data will be treated as an opaque binary and no output format can be set on the Pipeline through the Pipeline.Destination.output_payload_format field. Any Mediations on the Pipeline that involve access to the data field will fail as persistent errors. */
  inputPayloadFormat?: GoogleCloudEventarcV1PipelineMessagePayloadFormat;
  /** Output only. Whether or not this Pipeline satisfies the requirements of physical zone separation */
  satisfiesPzs?: boolean;
  /** Optional. Display name of resource. */
  displayName?: string;
  /** Optional. Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt the event data. If not set, an internal Google-owned key will be used to encrypt messages. It must match the pattern "projects/{project}/locations/{location}/keyRings/{keyring}/cryptoKeys/{key}". */
  cryptoKeyName?: string;
  /** Output only. This checksum is computed by the server based on the value of other fields, and might be sent only on create requests to ensure that the client has an up-to-date value before proceeding. */
  etag?: string;
  /** Output only. The last-modified time. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z". */
  updateTime?: string;
  /** Optional. User labels attached to the Pipeline that can be used to group resources. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }. */
  labels?: Record<string, string>;
  /** Output only. The creation time. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z". */
  createTime?: string;
  /** Output only. Server-assigned unique identifier for the Pipeline. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted. */
  uid?: string;
  /** Optional. List of mediation operations to be performed on the message. Currently, only one Transformation operation is allowed in each Pipeline. */
  mediations?: ReadonlyArray<GoogleCloudEventarcV1PipelineMediation>;
}

export const Pipeline: Schema.Schema<Pipeline> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    destinations: Schema.optional(
      Schema.Array(GoogleCloudEventarcV1PipelineDestination),
    ),
    loggingConfig: Schema.optional(LoggingConfig),
    name: Schema.optional(Schema.String),
    retryPolicy: Schema.optional(GoogleCloudEventarcV1PipelineRetryPolicy),
    inputPayloadFormat: Schema.optional(
      GoogleCloudEventarcV1PipelineMessagePayloadFormat,
    ),
    satisfiesPzs: Schema.optional(Schema.Boolean),
    displayName: Schema.optional(Schema.String),
    cryptoKeyName: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    createTime: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    mediations: Schema.optional(
      Schema.Array(GoogleCloudEventarcV1PipelineMediation),
    ),
  }).annotate({ identifier: "Pipeline" });

export interface ListPipelinesResponse {
  /** The requested pipelines, up to the number specified in `page_size`. */
  pipelines?: ReadonlyArray<Pipeline>;
  /** A page token that can be sent to `ListPipelines` to request the next page. If this is empty, then there are no more pages. */
  nextPageToken?: string;
  /** Unreachable resources, if any. */
  unreachable?: ReadonlyArray<string>;
}

export const ListPipelinesResponse: Schema.Schema<ListPipelinesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pipelines: Schema.optional(Schema.Array(Pipeline)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListPipelinesResponse" });

export interface AuditConfig {
  /** Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services. */
  service?: string;
  /** The configuration for logging of each type of permission. */
  auditLogConfigs?: ReadonlyArray<AuditLogConfig>;
}

export const AuditConfig: Schema.Schema<AuditConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    service: Schema.optional(Schema.String),
    auditLogConfigs: Schema.optional(Schema.Array(AuditLogConfig)),
  }).annotate({ identifier: "AuditConfig" });

export interface Binding {
  /** Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*`: All identities in a workload identity pool. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`. */
  members?: ReadonlyArray<string>;
  /** The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  condition?: Expr;
  /** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. For an overview of the IAM roles and permissions, see the [IAM documentation](https://cloud.google.com/iam/docs/roles-overview). For a list of the available pre-defined roles, see [here](https://cloud.google.com/iam/docs/understanding-roles). */
  role?: string;
}

export const Binding: Schema.Schema<Binding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    members: Schema.optional(Schema.Array(Schema.String)),
    condition: Schema.optional(Expr),
    role: Schema.optional(Schema.String),
  }).annotate({ identifier: "Binding" });

export interface Policy {
  /** Specifies cloud audit logging configuration for this policy. */
  auditConfigs?: ReadonlyArray<AuditConfig>;
  /** Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`. */
  bindings?: ReadonlyArray<Binding>;
  /** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  version?: number;
  /** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
  etag?: string;
}

export const Policy: Schema.Schema<Policy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    auditConfigs: Schema.optional(Schema.Array(AuditConfig)),
    bindings: Schema.optional(Schema.Array(Binding)),
    version: Schema.optional(Schema.Number),
    etag: Schema.optional(Schema.String),
  }).annotate({ identifier: "Policy" });

export interface SetIamPolicyRequest {
  /** REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them. */
  policy?: Policy;
  /** OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"` */
  updateMask?: string;
}

export const SetIamPolicyRequest: Schema.Schema<SetIamPolicyRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policy: Schema.optional(Policy),
    updateMask: Schema.optional(Schema.String),
  }).annotate({ identifier: "SetIamPolicyRequest" });

export interface TestIamPermissionsRequest {
  /** The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsRequest: Schema.Schema<TestIamPermissionsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsRequest" });

export interface ListMessageBusesResponse {
  /** The requested message buses, up to the number specified in `page_size`. */
  messageBuses?: ReadonlyArray<MessageBus>;
  /** A page token that can be sent to `ListMessageBuses` to request the next page. If this is empty, then there are no more pages. */
  nextPageToken?: string;
  /** Unreachable resources, if any. */
  unreachable?: ReadonlyArray<string>;
}

export const ListMessageBusesResponse: Schema.Schema<ListMessageBusesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    messageBuses: Schema.optional(Schema.Array(MessageBus)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListMessageBusesResponse" });

export interface ListTriggersResponse {
  /** The requested triggers, up to the number specified in `page_size`. */
  triggers?: ReadonlyArray<Trigger>;
  /** A page token that can be sent to `ListTriggers` to request the next page. If this is empty, then there are no more pages. */
  nextPageToken?: string;
  /** Unreachable resources, if any. */
  unreachable?: ReadonlyArray<string>;
}

export const ListTriggersResponse: Schema.Schema<ListTriggersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    triggers: Schema.optional(Schema.Array(Trigger)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListTriggersResponse" });

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

export interface UpdateGoogleChannelConfigProjectsLocationsRequest {
  /** The fields to be updated; only fields explicitly provided are updated. If no field mask is provided, all provided fields in the request are updated. To update all fields, provide a field mask of "*". */
  updateMask?: string;
  /** Required. The resource name of the config. Must be in the format of, `projects/{project}/locations/{location}/googleChannelConfig`. In API responses, the config name always includes the projectID, regardless of whether the projectID or projectNumber was provided. */
  name: string;
  /** Request body */
  body?: GoogleChannelConfig;
}

export const UpdateGoogleChannelConfigProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleChannelConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateGoogleChannelConfigProjectsLocationsRequest>;

export type UpdateGoogleChannelConfigProjectsLocationsResponse =
  GoogleChannelConfig;
export const UpdateGoogleChannelConfigProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleChannelConfig;

export type UpdateGoogleChannelConfigProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update a single GoogleChannelConfig */
export const updateGoogleChannelConfigProjectsLocations: API.OperationMethod<
  UpdateGoogleChannelConfigProjectsLocationsRequest,
  UpdateGoogleChannelConfigProjectsLocationsResponse,
  UpdateGoogleChannelConfigProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateGoogleChannelConfigProjectsLocationsRequest,
  output: UpdateGoogleChannelConfigProjectsLocationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetGoogleChannelConfigProjectsLocationsRequest {
  /** Required. The name of the config to get. */
  name: string;
}

export const GetGoogleChannelConfigProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetGoogleChannelConfigProjectsLocationsRequest>;

export type GetGoogleChannelConfigProjectsLocationsResponse =
  GoogleChannelConfig;
export const GetGoogleChannelConfigProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleChannelConfig;

export type GetGoogleChannelConfigProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get a GoogleChannelConfig. The name of the GoogleChannelConfig in the response is ALWAYS coded with projectID. */
export const getGoogleChannelConfigProjectsLocations: API.OperationMethod<
  GetGoogleChannelConfigProjectsLocationsRequest,
  GetGoogleChannelConfigProjectsLocationsResponse,
  GetGoogleChannelConfigProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetGoogleChannelConfigProjectsLocationsRequest,
  output: GetGoogleChannelConfigProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
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

export interface ListProjectsLocationsRequest {
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
  /** Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
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

export interface DeleteProjectsLocationsTriggersRequest {
  /** If provided, the trigger will only be deleted if the etag matches the current etag on the resource. */
  etag?: string;
  /** Required. The name of the trigger to be deleted. */
  name: string;
  /** If set to true, and the trigger is not found, the request will succeed but no action will be taken on the server. */
  allowMissing?: boolean;
  /** Optional. If set, validate the request and preview the review, but do not post it. */
  validateOnly?: boolean;
}

export const DeleteProjectsLocationsTriggersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    name: Schema.String.pipe(T.HttpPath("name")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsTriggersRequest>;

export type DeleteProjectsLocationsTriggersResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsTriggersResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsTriggersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a single trigger. */
export const deleteProjectsLocationsTriggers: API.OperationMethod<
  DeleteProjectsLocationsTriggersRequest,
  DeleteProjectsLocationsTriggersResponse,
  DeleteProjectsLocationsTriggersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsTriggersRequest,
  output: DeleteProjectsLocationsTriggersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsTriggersRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsTriggersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsTriggersRequest>;

export type SetIamPolicyProjectsLocationsTriggersResponse = Policy;
export const SetIamPolicyProjectsLocationsTriggersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsTriggersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsTriggers: API.OperationMethod<
  SetIamPolicyProjectsLocationsTriggersRequest,
  SetIamPolicyProjectsLocationsTriggersResponse,
  SetIamPolicyProjectsLocationsTriggersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsTriggersRequest,
  output: SetIamPolicyProjectsLocationsTriggersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsLocationsTriggersRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsTriggersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(TestIamPermissionsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsTriggersRequest>;

export type TestIamPermissionsProjectsLocationsTriggersResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsTriggersResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsTriggersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsTriggers: API.OperationMethod<
  TestIamPermissionsProjectsLocationsTriggersRequest,
  TestIamPermissionsProjectsLocationsTriggersResponse,
  TestIamPermissionsProjectsLocationsTriggersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsTriggersRequest,
  output: TestIamPermissionsProjectsLocationsTriggersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsTriggersRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsTriggersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsTriggersRequest>;

export type GetIamPolicyProjectsLocationsTriggersResponse = Policy;
export const GetIamPolicyProjectsLocationsTriggersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsTriggersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsTriggers: API.OperationMethod<
  GetIamPolicyProjectsLocationsTriggersRequest,
  GetIamPolicyProjectsLocationsTriggersResponse,
  GetIamPolicyProjectsLocationsTriggersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsTriggersRequest,
  output: GetIamPolicyProjectsLocationsTriggersResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsTriggersRequest {
  /** The page token; provide the value from the `next_page_token` field in a previous `ListTriggers` call to retrieve the subsequent page. When paginating, all other parameters provided to `ListTriggers` must match the call that provided the page token. */
  pageToken?: string;
  /** The maximum number of triggers to return on each page. Note: The service may send fewer. */
  pageSize?: number;
  /** The sorting order of the resources returned. Value should be a comma-separated list of fields. The default sorting order is ascending. To specify descending order for a field, append a `desc` suffix; for example: `name desc, trigger_id`. */
  orderBy?: string;
  /** Required. The parent collection to list triggers on. */
  parent: string;
  /** Filter field. Used to filter the Triggers to be listed. Possible filters are described in https://google.aip.dev/160. For example, using "?filter=destination:gke" would list only Triggers with a gke destination. */
  filter?: string;
}

export const ListProjectsLocationsTriggersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/triggers" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsTriggersRequest>;

export type ListProjectsLocationsTriggersResponse = ListTriggersResponse;
export const ListProjectsLocationsTriggersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListTriggersResponse;

export type ListProjectsLocationsTriggersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List triggers. */
export const listProjectsLocationsTriggers: API.PaginatedOperationMethod<
  ListProjectsLocationsTriggersRequest,
  ListProjectsLocationsTriggersResponse,
  ListProjectsLocationsTriggersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsTriggersRequest,
  output: ListProjectsLocationsTriggersResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsTriggersRequest {
  /** The fields to be updated; only fields explicitly provided are updated. If no field mask is provided, all provided fields in the request are updated. To update all fields, provide a field mask of "*". */
  updateMask?: string;
  /** If set to true, and the trigger is not found, a new trigger will be created. In this situation, `update_mask` is ignored. */
  allowMissing?: boolean;
  /** Optional. If set, validate the request and preview the review, but do not post it. */
  validateOnly?: boolean;
  /** Required. The resource name of the trigger. Must be unique within the location of the project and must be in `projects/{project}/locations/{location}/triggers/{trigger}` format. */
  name: string;
  /** Request body */
  body?: Trigger;
}

export const PatchProjectsLocationsTriggersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Trigger).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsTriggersRequest>;

export type PatchProjectsLocationsTriggersResponse = GoogleLongrunningOperation;
export const PatchProjectsLocationsTriggersResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type PatchProjectsLocationsTriggersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update a single trigger. */
export const patchProjectsLocationsTriggers: API.OperationMethod<
  PatchProjectsLocationsTriggersRequest,
  PatchProjectsLocationsTriggersResponse,
  PatchProjectsLocationsTriggersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsTriggersRequest,
  output: PatchProjectsLocationsTriggersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsTriggersRequest {
  /** Required. The name of the trigger to get. */
  name: string;
}

export const GetProjectsLocationsTriggersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsTriggersRequest>;

export type GetProjectsLocationsTriggersResponse = Trigger;
export const GetProjectsLocationsTriggersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Trigger;

export type GetProjectsLocationsTriggersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get a single trigger. */
export const getProjectsLocationsTriggers: API.OperationMethod<
  GetProjectsLocationsTriggersRequest,
  GetProjectsLocationsTriggersResponse,
  GetProjectsLocationsTriggersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsTriggersRequest,
  output: GetProjectsLocationsTriggersResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsTriggersRequest {
  /** Required. The user-provided ID to be assigned to the trigger. */
  triggerId?: string;
  /** Required. The parent collection in which to add this trigger. */
  parent: string;
  /** Optional. If set, validate the request and preview the review, but do not post it. */
  validateOnly?: boolean;
  /** Request body */
  body?: Trigger;
}

export const CreateProjectsLocationsTriggersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    triggerId: Schema.optional(Schema.String).pipe(T.HttpQuery("triggerId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(Trigger).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/triggers", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsTriggersRequest>;

export type CreateProjectsLocationsTriggersResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsTriggersResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsTriggersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a new trigger in a particular project and location. */
export const createProjectsLocationsTriggers: API.OperationMethod<
  CreateProjectsLocationsTriggersRequest,
  CreateProjectsLocationsTriggersResponse,
  CreateProjectsLocationsTriggersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsTriggersRequest,
  output: CreateProjectsLocationsTriggersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsProvidersRequest {
  /** Required. The name of the provider to get. */
  name: string;
}

export const GetProjectsLocationsProvidersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsProvidersRequest>;

export type GetProjectsLocationsProvidersResponse = Provider;
export const GetProjectsLocationsProvidersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Provider;

export type GetProjectsLocationsProvidersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get a single Provider. */
export const getProjectsLocationsProviders: API.OperationMethod<
  GetProjectsLocationsProvidersRequest,
  GetProjectsLocationsProvidersResponse,
  GetProjectsLocationsProvidersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsProvidersRequest,
  output: GetProjectsLocationsProvidersResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsProvidersRequest {
  /** The page token; provide the value from the `next_page_token` field in a previous `ListProviders` call to retrieve the subsequent page. When paginating, all other parameters provided to `ListProviders` must match the call that provided the page token. */
  pageToken?: string;
  /** The maximum number of providers to return on each page. */
  pageSize?: number;
  /** The sorting order of the resources returned. Value should be a comma-separated list of fields. The default sorting oder is ascending. To specify descending order for a field, append a `desc` suffix; for example: `name desc, _id`. */
  orderBy?: string;
  /** Required. The parent of the provider to get. */
  parent: string;
  /** The filter field that the list request will filter on. */
  filter?: string;
}

export const ListProjectsLocationsProvidersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/providers" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsProvidersRequest>;

export type ListProjectsLocationsProvidersResponse = ListProvidersResponse;
export const ListProjectsLocationsProvidersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListProvidersResponse;

export type ListProjectsLocationsProvidersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List providers. */
export const listProjectsLocationsProviders: API.PaginatedOperationMethod<
  ListProjectsLocationsProvidersRequest,
  ListProjectsLocationsProvidersResponse,
  ListProjectsLocationsProvidersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsProvidersRequest,
  output: ListProjectsLocationsProvidersResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsChannelsRequest {
  /** Required. The name of the channel to get. */
  name: string;
}

export const GetProjectsLocationsChannelsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsChannelsRequest>;

export type GetProjectsLocationsChannelsResponse = Channel;
export const GetProjectsLocationsChannelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Channel;

export type GetProjectsLocationsChannelsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get a single Channel. */
export const getProjectsLocationsChannels: API.OperationMethod<
  GetProjectsLocationsChannelsRequest,
  GetProjectsLocationsChannelsResponse,
  GetProjectsLocationsChannelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsChannelsRequest,
  output: GetProjectsLocationsChannelsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsChannelsRequest {
  /** Required. The parent collection in which to add this channel. */
  parent: string;
  /** Required. The user-provided ID to be assigned to the channel. */
  channelId?: string;
  /** Optional. If set, validate the request and preview the review, but do not post it. */
  validateOnly?: boolean;
  /** Request body */
  body?: Channel;
}

export const CreateProjectsLocationsChannelsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    channelId: Schema.optional(Schema.String).pipe(T.HttpQuery("channelId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(Channel).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/channels", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsChannelsRequest>;

export type CreateProjectsLocationsChannelsResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsChannelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsChannelsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a new channel in a particular project and location. */
export const createProjectsLocationsChannels: API.OperationMethod<
  CreateProjectsLocationsChannelsRequest,
  CreateProjectsLocationsChannelsResponse,
  CreateProjectsLocationsChannelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsChannelsRequest,
  output: CreateProjectsLocationsChannelsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsChannelsRequest {
  /** The maximum number of channels to return on each page. Note: The service may send fewer. */
  pageSize?: number;
  /** The sorting order of the resources returned. Value should be a comma-separated list of fields. The default sorting order is ascending. To specify descending order for a field, append a `desc` suffix; for example: `name desc, channel_id`. */
  orderBy?: string;
  /** Required. The parent collection to list channels on. */
  parent: string;
  /** The page token; provide the value from the `next_page_token` field in a previous `ListChannels` call to retrieve the subsequent page. When paginating, all other parameters provided to `ListChannels` must match the call that provided the page token. */
  pageToken?: string;
}

export const ListProjectsLocationsChannelsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/channels" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsChannelsRequest>;

export type ListProjectsLocationsChannelsResponse = ListChannelsResponse;
export const ListProjectsLocationsChannelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListChannelsResponse;

export type ListProjectsLocationsChannelsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List channels. */
export const listProjectsLocationsChannels: API.PaginatedOperationMethod<
  ListProjectsLocationsChannelsRequest,
  ListProjectsLocationsChannelsResponse,
  ListProjectsLocationsChannelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsChannelsRequest,
  output: ListProjectsLocationsChannelsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsChannelsRequest {
  /** The fields to be updated; only fields explicitly provided are updated. If no field mask is provided, all provided fields in the request are updated. To update all fields, provide a field mask of "*". */
  updateMask?: string;
  /** Optional. If set, validate the request and preview the review, but do not post it. */
  validateOnly?: boolean;
  /** Required. The resource name of the channel. Must be unique within the location on the project and must be in `projects/{project}/locations/{location}/channels/{channel_id}` format. */
  name: string;
  /** Request body */
  body?: Channel;
}

export const PatchProjectsLocationsChannelsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Channel).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsChannelsRequest>;

export type PatchProjectsLocationsChannelsResponse = GoogleLongrunningOperation;
export const PatchProjectsLocationsChannelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type PatchProjectsLocationsChannelsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update a single channel. */
export const patchProjectsLocationsChannels: API.OperationMethod<
  PatchProjectsLocationsChannelsRequest,
  PatchProjectsLocationsChannelsResponse,
  PatchProjectsLocationsChannelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsChannelsRequest,
  output: PatchProjectsLocationsChannelsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsChannelsRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsChannelsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsChannelsRequest>;

export type GetIamPolicyProjectsLocationsChannelsResponse = Policy;
export const GetIamPolicyProjectsLocationsChannelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsChannelsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsChannels: API.OperationMethod<
  GetIamPolicyProjectsLocationsChannelsRequest,
  GetIamPolicyProjectsLocationsChannelsResponse,
  GetIamPolicyProjectsLocationsChannelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsChannelsRequest,
  output: GetIamPolicyProjectsLocationsChannelsResponse,
  errors: [NotFound, Forbidden],
}));

export interface TestIamPermissionsProjectsLocationsChannelsRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsChannelsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(TestIamPermissionsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsChannelsRequest>;

export type TestIamPermissionsProjectsLocationsChannelsResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsChannelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsChannelsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsChannels: API.OperationMethod<
  TestIamPermissionsProjectsLocationsChannelsRequest,
  TestIamPermissionsProjectsLocationsChannelsResponse,
  TestIamPermissionsProjectsLocationsChannelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsChannelsRequest,
  output: TestIamPermissionsProjectsLocationsChannelsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsChannelsRequest {
  /** Required. The name of the channel to be deleted. */
  name: string;
  /** Optional. If set, validate the request and preview the review, but do not post it. */
  validateOnly?: boolean;
}

export const DeleteProjectsLocationsChannelsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsChannelsRequest>;

export type DeleteProjectsLocationsChannelsResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsChannelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsChannelsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a single channel. */
export const deleteProjectsLocationsChannels: API.OperationMethod<
  DeleteProjectsLocationsChannelsRequest,
  DeleteProjectsLocationsChannelsResponse,
  DeleteProjectsLocationsChannelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsChannelsRequest,
  output: DeleteProjectsLocationsChannelsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsChannelsRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsChannelsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsChannelsRequest>;

export type SetIamPolicyProjectsLocationsChannelsResponse = Policy;
export const SetIamPolicyProjectsLocationsChannelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsChannelsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsChannels: API.OperationMethod<
  SetIamPolicyProjectsLocationsChannelsRequest,
  SetIamPolicyProjectsLocationsChannelsResponse,
  SetIamPolicyProjectsLocationsChannelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsChannelsRequest,
  output: SetIamPolicyProjectsLocationsChannelsResponse,
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

export type GetProjectsLocationsOperationsResponse = GoogleLongrunningOperation;
export const GetProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

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
  body?: GoogleLongrunningCancelOperationRequest;
}

export const CancelProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleLongrunningCancelOperationRequest).pipe(
      T.HttpBody(),
    ),
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

export interface ListProjectsLocationsOperationsRequest {
  /** The standard list page size. */
  pageSize?: number;
  /** The standard list page token. */
  pageToken?: string;
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list filter. */
  filter?: string;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    name: Schema.String.pipe(T.HttpPath("name")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/operations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsOperationsRequest>;

export type ListProjectsLocationsOperationsResponse =
  GoogleLongrunningListOperationsResponse;
export const ListProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningListOperationsResponse;

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

export interface ListProjectsLocationsPipelinesRequest {
  /** Optional. The maximum number of results to return on each page. Note: The service may send fewer. */
  pageSize?: number;
  /** Optional. The sorting order of the resources returned. Value should be a comma-separated list of fields. The default sorting order is ascending. To specify descending order for a field, append a `desc` suffix; for example: `name desc, update_time`. */
  orderBy?: string;
  /** Optional. The page token; provide the value from the `next_page_token` field in a previous call to retrieve the subsequent page. When paginating, all other parameters provided must match the previous call that provided the page token. */
  pageToken?: string;
  /** Required. The parent collection to list pipelines on. */
  parent: string;
  /** Optional. The filter field that the list request will filter on. Possible filters are described in https://google.aip.dev/160. */
  filter?: string;
}

export const ListProjectsLocationsPipelinesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/pipelines" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsPipelinesRequest>;

export type ListProjectsLocationsPipelinesResponse = ListPipelinesResponse;
export const ListProjectsLocationsPipelinesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListPipelinesResponse;

export type ListProjectsLocationsPipelinesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List pipelines. */
export const listProjectsLocationsPipelines: API.PaginatedOperationMethod<
  ListProjectsLocationsPipelinesRequest,
  ListProjectsLocationsPipelinesResponse,
  ListProjectsLocationsPipelinesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsPipelinesRequest,
  output: ListProjectsLocationsPipelinesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsPipelinesRequest {
  /** Identifier. The resource name of the Pipeline. Must be unique within the location of the project and must be in `projects/{project}/locations/{location}/pipelines/{pipeline}` format. */
  name: string;
  /** Optional. The fields to be updated; only fields explicitly provided are updated. If no field mask is provided, all provided fields in the request are updated. To update all fields, provide a field mask of "*". */
  updateMask?: string;
  /** Optional. If set to true, and the Pipeline is not found, a new Pipeline will be created. In this situation, `update_mask` is ignored. */
  allowMissing?: boolean;
  /** Optional. If set, validate the request and preview the review, but do not post it. */
  validateOnly?: boolean;
  /** Request body */
  body?: Pipeline;
}

export const PatchProjectsLocationsPipelinesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(Pipeline).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsPipelinesRequest>;

export type PatchProjectsLocationsPipelinesResponse =
  GoogleLongrunningOperation;
export const PatchProjectsLocationsPipelinesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type PatchProjectsLocationsPipelinesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update a single pipeline. */
export const patchProjectsLocationsPipelines: API.OperationMethod<
  PatchProjectsLocationsPipelinesRequest,
  PatchProjectsLocationsPipelinesResponse,
  PatchProjectsLocationsPipelinesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsPipelinesRequest,
  output: PatchProjectsLocationsPipelinesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsPipelinesRequest {
  /** Required. The name of the pipeline to get. */
  name: string;
}

export const GetProjectsLocationsPipelinesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsPipelinesRequest>;

export type GetProjectsLocationsPipelinesResponse = Pipeline;
export const GetProjectsLocationsPipelinesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Pipeline;

export type GetProjectsLocationsPipelinesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get a single Pipeline. */
export const getProjectsLocationsPipelines: API.OperationMethod<
  GetProjectsLocationsPipelinesRequest,
  GetProjectsLocationsPipelinesResponse,
  GetProjectsLocationsPipelinesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsPipelinesRequest,
  output: GetProjectsLocationsPipelinesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsPipelinesRequest {
  /** Required. The user-provided ID to be assigned to the Pipeline. It should match the format `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`. */
  pipelineId?: string;
  /** Optional. If set, validate the request and preview the review, but do not post it. */
  validateOnly?: boolean;
  /** Required. The parent collection in which to add this pipeline. */
  parent: string;
  /** Request body */
  body?: Pipeline;
}

export const CreateProjectsLocationsPipelinesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pipelineId: Schema.optional(Schema.String).pipe(T.HttpQuery("pipelineId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Pipeline).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/pipelines", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsPipelinesRequest>;

export type CreateProjectsLocationsPipelinesResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsPipelinesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsPipelinesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a new Pipeline in a particular project and location. */
export const createProjectsLocationsPipelines: API.OperationMethod<
  CreateProjectsLocationsPipelinesRequest,
  CreateProjectsLocationsPipelinesResponse,
  CreateProjectsLocationsPipelinesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsPipelinesRequest,
  output: CreateProjectsLocationsPipelinesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsPipelinesRequest {
  /** Optional. If provided, the Pipeline will only be deleted if the etag matches the current etag on the resource. */
  etag?: string;
  /** Required. The name of the Pipeline to be deleted. */
  name: string;
  /** Optional. If set to true, and the Pipeline is not found, the request will succeed but no action will be taken on the server. */
  allowMissing?: boolean;
  /** Optional. If set, validate the request and preview the review, but do not post it. */
  validateOnly?: boolean;
}

export const DeleteProjectsLocationsPipelinesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    name: Schema.String.pipe(T.HttpPath("name")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsPipelinesRequest>;

export type DeleteProjectsLocationsPipelinesResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsPipelinesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsPipelinesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a single pipeline. */
export const deleteProjectsLocationsPipelines: API.OperationMethod<
  DeleteProjectsLocationsPipelinesRequest,
  DeleteProjectsLocationsPipelinesResponse,
  DeleteProjectsLocationsPipelinesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsPipelinesRequest,
  output: DeleteProjectsLocationsPipelinesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsPipelinesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsPipelinesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsPipelinesRequest>;

export type SetIamPolicyProjectsLocationsPipelinesResponse = Policy;
export const SetIamPolicyProjectsLocationsPipelinesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsPipelinesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsPipelines: API.OperationMethod<
  SetIamPolicyProjectsLocationsPipelinesRequest,
  SetIamPolicyProjectsLocationsPipelinesResponse,
  SetIamPolicyProjectsLocationsPipelinesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsPipelinesRequest,
  output: SetIamPolicyProjectsLocationsPipelinesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsLocationsPipelinesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsPipelinesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(TestIamPermissionsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsPipelinesRequest>;

export type TestIamPermissionsProjectsLocationsPipelinesResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsPipelinesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsPipelinesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsPipelines: API.OperationMethod<
  TestIamPermissionsProjectsLocationsPipelinesRequest,
  TestIamPermissionsProjectsLocationsPipelinesResponse,
  TestIamPermissionsProjectsLocationsPipelinesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsPipelinesRequest,
  output: TestIamPermissionsProjectsLocationsPipelinesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsPipelinesRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsPipelinesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsPipelinesRequest>;

export type GetIamPolicyProjectsLocationsPipelinesResponse = Policy;
export const GetIamPolicyProjectsLocationsPipelinesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsPipelinesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsPipelines: API.OperationMethod<
  GetIamPolicyProjectsLocationsPipelinesRequest,
  GetIamPolicyProjectsLocationsPipelinesResponse,
  GetIamPolicyProjectsLocationsPipelinesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsPipelinesRequest,
  output: GetIamPolicyProjectsLocationsPipelinesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsEnrollmentsRequest {
  /** Required. The name of the Enrollment to get. */
  name: string;
}

export const GetProjectsLocationsEnrollmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsEnrollmentsRequest>;

export type GetProjectsLocationsEnrollmentsResponse = Enrollment;
export const GetProjectsLocationsEnrollmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Enrollment;

export type GetProjectsLocationsEnrollmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get a single Enrollment. */
export const getProjectsLocationsEnrollments: API.OperationMethod<
  GetProjectsLocationsEnrollmentsRequest,
  GetProjectsLocationsEnrollmentsResponse,
  GetProjectsLocationsEnrollmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsEnrollmentsRequest,
  output: GetProjectsLocationsEnrollmentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsEnrollmentsRequest {
  /** Required. The parent collection in which to add this enrollment. */
  parent: string;
  /** Required. The user-provided ID to be assigned to the Enrollment. It should match the format `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`. */
  enrollmentId?: string;
  /** Optional. If set, validate the request and preview the review, but do not post it. */
  validateOnly?: boolean;
  /** Request body */
  body?: Enrollment;
}

export const CreateProjectsLocationsEnrollmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    enrollmentId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("enrollmentId"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(Enrollment).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/enrollments", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsEnrollmentsRequest>;

export type CreateProjectsLocationsEnrollmentsResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsEnrollmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsEnrollmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a new Enrollment in a particular project and location. */
export const createProjectsLocationsEnrollments: API.OperationMethod<
  CreateProjectsLocationsEnrollmentsRequest,
  CreateProjectsLocationsEnrollmentsResponse,
  CreateProjectsLocationsEnrollmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsEnrollmentsRequest,
  output: CreateProjectsLocationsEnrollmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsEnrollmentsRequest {
  /** Required. The parent collection to list triggers on. */
  parent: string;
  /** Optional. The filter field that the list request will filter on. Possible filtersare described in https://google.aip.dev/160. */
  filter?: string;
  /** Optional. The maximum number of results to return on each page. Note: The service may send fewer. */
  pageSize?: number;
  /** Optional. The sorting order of the resources returned. Value should be a comma-separated list of fields. The default sorting order is ascending. To specify descending order for a field, append a `desc` suffix; for example: `name desc, update_time`. */
  orderBy?: string;
  /** Optional. The page token; provide the value from the `next_page_token` field in a previous call to retrieve the subsequent page. When paginating, all other parameters provided must match the previous call that provided the page token. */
  pageToken?: string;
}

export const ListProjectsLocationsEnrollmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/enrollments" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsEnrollmentsRequest>;

export type ListProjectsLocationsEnrollmentsResponse = ListEnrollmentsResponse;
export const ListProjectsLocationsEnrollmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListEnrollmentsResponse;

export type ListProjectsLocationsEnrollmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List Enrollments. */
export const listProjectsLocationsEnrollments: API.PaginatedOperationMethod<
  ListProjectsLocationsEnrollmentsRequest,
  ListProjectsLocationsEnrollmentsResponse,
  ListProjectsLocationsEnrollmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsEnrollmentsRequest,
  output: ListProjectsLocationsEnrollmentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsEnrollmentsRequest {
  /** Identifier. Resource name of the form projects/{project}/locations/{location}/enrollments/{enrollment} */
  name: string;
  /** Optional. The fields to be updated; only fields explicitly provided are updated. If no field mask is provided, all provided fields in the request are updated. To update all fields, provide a field mask of "*". */
  updateMask?: string;
  /** Optional. If set to true, and the Enrollment is not found, a new Enrollment will be created. In this situation, `update_mask` is ignored. */
  allowMissing?: boolean;
  /** Optional. If set, validate the request and preview the review, but do not post it. */
  validateOnly?: boolean;
  /** Request body */
  body?: Enrollment;
}

export const PatchProjectsLocationsEnrollmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(Enrollment).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsEnrollmentsRequest>;

export type PatchProjectsLocationsEnrollmentsResponse =
  GoogleLongrunningOperation;
export const PatchProjectsLocationsEnrollmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type PatchProjectsLocationsEnrollmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update a single Enrollment. */
export const patchProjectsLocationsEnrollments: API.OperationMethod<
  PatchProjectsLocationsEnrollmentsRequest,
  PatchProjectsLocationsEnrollmentsResponse,
  PatchProjectsLocationsEnrollmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsEnrollmentsRequest,
  output: PatchProjectsLocationsEnrollmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsEnrollmentsRequest {
  /** Required. The name of the Enrollment to be deleted. */
  name: string;
  /** Optional. If set to true, and the Enrollment is not found, the request will succeed but no action will be taken on the server. */
  allowMissing?: boolean;
  /** Optional. If set, validate the request and preview the review, but do not post it. */
  validateOnly?: boolean;
  /** Optional. If provided, the Enrollment will only be deleted if the etag matches the current etag on the resource. */
  etag?: string;
}

export const DeleteProjectsLocationsEnrollmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsEnrollmentsRequest>;

export type DeleteProjectsLocationsEnrollmentsResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsEnrollmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsEnrollmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a single Enrollment. */
export const deleteProjectsLocationsEnrollments: API.OperationMethod<
  DeleteProjectsLocationsEnrollmentsRequest,
  DeleteProjectsLocationsEnrollmentsResponse,
  DeleteProjectsLocationsEnrollmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsEnrollmentsRequest,
  output: DeleteProjectsLocationsEnrollmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsEnrollmentsRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsEnrollmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsEnrollmentsRequest>;

export type SetIamPolicyProjectsLocationsEnrollmentsResponse = Policy;
export const SetIamPolicyProjectsLocationsEnrollmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsEnrollmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsEnrollments: API.OperationMethod<
  SetIamPolicyProjectsLocationsEnrollmentsRequest,
  SetIamPolicyProjectsLocationsEnrollmentsResponse,
  SetIamPolicyProjectsLocationsEnrollmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsEnrollmentsRequest,
  output: SetIamPolicyProjectsLocationsEnrollmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsEnrollmentsRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsEnrollmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsEnrollmentsRequest>;

export type GetIamPolicyProjectsLocationsEnrollmentsResponse = Policy;
export const GetIamPolicyProjectsLocationsEnrollmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsEnrollmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsEnrollments: API.OperationMethod<
  GetIamPolicyProjectsLocationsEnrollmentsRequest,
  GetIamPolicyProjectsLocationsEnrollmentsResponse,
  GetIamPolicyProjectsLocationsEnrollmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsEnrollmentsRequest,
  output: GetIamPolicyProjectsLocationsEnrollmentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface TestIamPermissionsProjectsLocationsEnrollmentsRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsEnrollmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(TestIamPermissionsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsEnrollmentsRequest>;

export type TestIamPermissionsProjectsLocationsEnrollmentsResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsEnrollmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsEnrollmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsEnrollments: API.OperationMethod<
  TestIamPermissionsProjectsLocationsEnrollmentsRequest,
  TestIamPermissionsProjectsLocationsEnrollmentsResponse,
  TestIamPermissionsProjectsLocationsEnrollmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsEnrollmentsRequest,
  output: TestIamPermissionsProjectsLocationsEnrollmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListEnrollmentsProjectsLocationsMessageBusesRequest {
  /** Optional. The maximum number of results to return on each page. Note: The service may send fewer. */
  pageSize?: number;
  /** Required. The parent message bus to list enrollments on. */
  parent: string;
  /** Optional. The page token; provide the value from the `next_page_token` field in a previous call to retrieve the subsequent page. When paginating, all other parameters provided must match the previous call that provided the page token. */
  pageToken?: string;
}

export const ListEnrollmentsProjectsLocationsMessageBusesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}:listEnrollments" }),
    svc,
  ) as unknown as Schema.Schema<ListEnrollmentsProjectsLocationsMessageBusesRequest>;

export type ListEnrollmentsProjectsLocationsMessageBusesResponse =
  ListMessageBusEnrollmentsResponse;
export const ListEnrollmentsProjectsLocationsMessageBusesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListMessageBusEnrollmentsResponse;

export type ListEnrollmentsProjectsLocationsMessageBusesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List message bus enrollments. */
export const listEnrollmentsProjectsLocationsMessageBuses: API.PaginatedOperationMethod<
  ListEnrollmentsProjectsLocationsMessageBusesRequest,
  ListEnrollmentsProjectsLocationsMessageBusesResponse,
  ListEnrollmentsProjectsLocationsMessageBusesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListEnrollmentsProjectsLocationsMessageBusesRequest,
  output: ListEnrollmentsProjectsLocationsMessageBusesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsMessageBusesRequest {
  /** Required. The name of the message bus to get. */
  name: string;
}

export const GetProjectsLocationsMessageBusesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsMessageBusesRequest>;

export type GetProjectsLocationsMessageBusesResponse = MessageBus;
export const GetProjectsLocationsMessageBusesResponse =
  /*@__PURE__*/ /*#__PURE__*/ MessageBus;

export type GetProjectsLocationsMessageBusesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get a single MessageBus. */
export const getProjectsLocationsMessageBuses: API.OperationMethod<
  GetProjectsLocationsMessageBusesRequest,
  GetProjectsLocationsMessageBusesResponse,
  GetProjectsLocationsMessageBusesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsMessageBusesRequest,
  output: GetProjectsLocationsMessageBusesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsMessageBusesRequest {
  /** Required. The user-provided ID to be assigned to the MessageBus. It should match the format `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`. */
  messageBusId?: string;
  /** Optional. If set, validate the request and preview the review, but do not post it. */
  validateOnly?: boolean;
  /** Required. The parent collection in which to add this message bus. */
  parent: string;
  /** Request body */
  body?: MessageBus;
}

export const CreateProjectsLocationsMessageBusesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    messageBusId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("messageBusId"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(MessageBus).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/messageBuses",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsMessageBusesRequest>;

export type CreateProjectsLocationsMessageBusesResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsMessageBusesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsMessageBusesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a new MessageBus in a particular project and location. */
export const createProjectsLocationsMessageBuses: API.OperationMethod<
  CreateProjectsLocationsMessageBusesRequest,
  CreateProjectsLocationsMessageBusesResponse,
  CreateProjectsLocationsMessageBusesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsMessageBusesRequest,
  output: CreateProjectsLocationsMessageBusesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsMessageBusesRequest {
  /** Optional. The maximum number of results to return on each page. Note: The service may send fewer. */
  pageSize?: number;
  /** Optional. The sorting order of the resources returned. Value should be a comma-separated list of fields. The default sorting order is ascending. To specify descending order for a field, append a `desc` suffix; for example: `name desc, update_time`. */
  orderBy?: string;
  /** Optional. The page token; provide the value from the `next_page_token` field in a previous call to retrieve the subsequent page. When paginating, all other parameters provided must match the previous call that provided the page token. */
  pageToken?: string;
  /** Required. The parent collection to list message buses on. */
  parent: string;
  /** Optional. The filter field that the list request will filter on. Possible filtersare described in https://google.aip.dev/160. */
  filter?: string;
}

export const ListProjectsLocationsMessageBusesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/messageBuses" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsMessageBusesRequest>;

export type ListProjectsLocationsMessageBusesResponse =
  ListMessageBusesResponse;
export const ListProjectsLocationsMessageBusesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListMessageBusesResponse;

export type ListProjectsLocationsMessageBusesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List message buses. */
export const listProjectsLocationsMessageBuses: API.PaginatedOperationMethod<
  ListProjectsLocationsMessageBusesRequest,
  ListProjectsLocationsMessageBusesResponse,
  ListProjectsLocationsMessageBusesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsMessageBusesRequest,
  output: ListProjectsLocationsMessageBusesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsMessageBusesRequest {
  /** Identifier. Resource name of the form projects/{project}/locations/{location}/messageBuses/{message_bus} */
  name: string;
  /** Optional. The fields to be updated; only fields explicitly provided are updated. If no field mask is provided, all provided fields in the request are updated. To update all fields, provide a field mask of "*". */
  updateMask?: string;
  /** Optional. If set to true, and the MessageBus is not found, a new MessageBus will be created. In this situation, `update_mask` is ignored. */
  allowMissing?: boolean;
  /** Optional. If set, validate the request and preview the review, but do not post it. */
  validateOnly?: boolean;
  /** Request body */
  body?: MessageBus;
}

export const PatchProjectsLocationsMessageBusesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(MessageBus).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsMessageBusesRequest>;

export type PatchProjectsLocationsMessageBusesResponse =
  GoogleLongrunningOperation;
export const PatchProjectsLocationsMessageBusesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type PatchProjectsLocationsMessageBusesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update a single message bus. */
export const patchProjectsLocationsMessageBuses: API.OperationMethod<
  PatchProjectsLocationsMessageBusesRequest,
  PatchProjectsLocationsMessageBusesResponse,
  PatchProjectsLocationsMessageBusesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsMessageBusesRequest,
  output: PatchProjectsLocationsMessageBusesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsMessageBusesRequest {
  /** Optional. If provided, the MessageBus will only be deleted if the etag matches the current etag on the resource. */
  etag?: string;
  /** Optional. If set to true, and the MessageBus is not found, the request will succeed but no action will be taken on the server. */
  allowMissing?: boolean;
  /** Optional. If set, validate the request and preview the review, but do not post it. */
  validateOnly?: boolean;
  /** Required. The name of the MessageBus to be deleted. */
  name: string;
}

export const DeleteProjectsLocationsMessageBusesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsMessageBusesRequest>;

export type DeleteProjectsLocationsMessageBusesResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsMessageBusesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsMessageBusesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a single message bus. */
export const deleteProjectsLocationsMessageBuses: API.OperationMethod<
  DeleteProjectsLocationsMessageBusesRequest,
  DeleteProjectsLocationsMessageBusesResponse,
  DeleteProjectsLocationsMessageBusesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsMessageBusesRequest,
  output: DeleteProjectsLocationsMessageBusesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsMessageBusesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsMessageBusesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsMessageBusesRequest>;

export type SetIamPolicyProjectsLocationsMessageBusesResponse = Policy;
export const SetIamPolicyProjectsLocationsMessageBusesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsMessageBusesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsMessageBuses: API.OperationMethod<
  SetIamPolicyProjectsLocationsMessageBusesRequest,
  SetIamPolicyProjectsLocationsMessageBusesResponse,
  SetIamPolicyProjectsLocationsMessageBusesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsMessageBusesRequest,
  output: SetIamPolicyProjectsLocationsMessageBusesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsMessageBusesRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsMessageBusesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsMessageBusesRequest>;

export type GetIamPolicyProjectsLocationsMessageBusesResponse = Policy;
export const GetIamPolicyProjectsLocationsMessageBusesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsMessageBusesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsMessageBuses: API.OperationMethod<
  GetIamPolicyProjectsLocationsMessageBusesRequest,
  GetIamPolicyProjectsLocationsMessageBusesResponse,
  GetIamPolicyProjectsLocationsMessageBusesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsMessageBusesRequest,
  output: GetIamPolicyProjectsLocationsMessageBusesResponse,
  errors: [NotFound, Forbidden],
}));

export interface TestIamPermissionsProjectsLocationsMessageBusesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsMessageBusesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(TestIamPermissionsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsMessageBusesRequest>;

export type TestIamPermissionsProjectsLocationsMessageBusesResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsMessageBusesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsMessageBusesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsMessageBuses: API.OperationMethod<
  TestIamPermissionsProjectsLocationsMessageBusesRequest,
  TestIamPermissionsProjectsLocationsMessageBusesResponse,
  TestIamPermissionsProjectsLocationsMessageBusesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsMessageBusesRequest,
  output: TestIamPermissionsProjectsLocationsMessageBusesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsChannelConnectionsRequest {
  /** Required. The name of the channel connection to get. */
  name: string;
}

export const GetProjectsLocationsChannelConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsChannelConnectionsRequest>;

export type GetProjectsLocationsChannelConnectionsResponse = ChannelConnection;
export const GetProjectsLocationsChannelConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ChannelConnection;

export type GetProjectsLocationsChannelConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get a single ChannelConnection. */
export const getProjectsLocationsChannelConnections: API.OperationMethod<
  GetProjectsLocationsChannelConnectionsRequest,
  GetProjectsLocationsChannelConnectionsResponse,
  GetProjectsLocationsChannelConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsChannelConnectionsRequest,
  output: GetProjectsLocationsChannelConnectionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsChannelConnectionsRequest {
  /** Required. The parent collection in which to add this channel connection. */
  parent: string;
  /** Required. The user-provided ID to be assigned to the channel connection. */
  channelConnectionId?: string;
  /** Request body */
  body?: ChannelConnection;
}

export const CreateProjectsLocationsChannelConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    channelConnectionId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("channelConnectionId"),
    ),
    body: Schema.optional(ChannelConnection).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/channelConnections",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsChannelConnectionsRequest>;

export type CreateProjectsLocationsChannelConnectionsResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsChannelConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsChannelConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a new ChannelConnection in a particular project and location. */
export const createProjectsLocationsChannelConnections: API.OperationMethod<
  CreateProjectsLocationsChannelConnectionsRequest,
  CreateProjectsLocationsChannelConnectionsResponse,
  CreateProjectsLocationsChannelConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsChannelConnectionsRequest,
  output: CreateProjectsLocationsChannelConnectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsChannelConnectionsRequest {
  /** The maximum number of channel connections to return on each page. Note: The service may send fewer responses. */
  pageSize?: number;
  /** Required. The parent collection from which to list channel connections. */
  parent: string;
  /** The page token; provide the value from the `next_page_token` field in a previous `ListChannelConnections` call to retrieve the subsequent page. When paginating, all other parameters provided to `ListChannelConnetions` match the call that provided the page token. */
  pageToken?: string;
}

export const ListProjectsLocationsChannelConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/channelConnections" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsChannelConnectionsRequest>;

export type ListProjectsLocationsChannelConnectionsResponse =
  ListChannelConnectionsResponse;
export const ListProjectsLocationsChannelConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListChannelConnectionsResponse;

export type ListProjectsLocationsChannelConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List channel connections. */
export const listProjectsLocationsChannelConnections: API.PaginatedOperationMethod<
  ListProjectsLocationsChannelConnectionsRequest,
  ListProjectsLocationsChannelConnectionsResponse,
  ListProjectsLocationsChannelConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsChannelConnectionsRequest,
  output: ListProjectsLocationsChannelConnectionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetIamPolicyProjectsLocationsChannelConnectionsRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsChannelConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsChannelConnectionsRequest>;

export type GetIamPolicyProjectsLocationsChannelConnectionsResponse = Policy;
export const GetIamPolicyProjectsLocationsChannelConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsChannelConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsChannelConnections: API.OperationMethod<
  GetIamPolicyProjectsLocationsChannelConnectionsRequest,
  GetIamPolicyProjectsLocationsChannelConnectionsResponse,
  GetIamPolicyProjectsLocationsChannelConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsChannelConnectionsRequest,
  output: GetIamPolicyProjectsLocationsChannelConnectionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface TestIamPermissionsProjectsLocationsChannelConnectionsRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsChannelConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(TestIamPermissionsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsChannelConnectionsRequest>;

export type TestIamPermissionsProjectsLocationsChannelConnectionsResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsChannelConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsChannelConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsChannelConnections: API.OperationMethod<
  TestIamPermissionsProjectsLocationsChannelConnectionsRequest,
  TestIamPermissionsProjectsLocationsChannelConnectionsResponse,
  TestIamPermissionsProjectsLocationsChannelConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsChannelConnectionsRequest,
  output: TestIamPermissionsProjectsLocationsChannelConnectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsChannelConnectionsRequest {
  /** Required. The name of the channel connection to delete. */
  name: string;
}

export const DeleteProjectsLocationsChannelConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsChannelConnectionsRequest>;

export type DeleteProjectsLocationsChannelConnectionsResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsChannelConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsChannelConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a single ChannelConnection. */
export const deleteProjectsLocationsChannelConnections: API.OperationMethod<
  DeleteProjectsLocationsChannelConnectionsRequest,
  DeleteProjectsLocationsChannelConnectionsResponse,
  DeleteProjectsLocationsChannelConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsChannelConnectionsRequest,
  output: DeleteProjectsLocationsChannelConnectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsChannelConnectionsRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsChannelConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsChannelConnectionsRequest>;

export type SetIamPolicyProjectsLocationsChannelConnectionsResponse = Policy;
export const SetIamPolicyProjectsLocationsChannelConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsChannelConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsChannelConnections: API.OperationMethod<
  SetIamPolicyProjectsLocationsChannelConnectionsRequest,
  SetIamPolicyProjectsLocationsChannelConnectionsResponse,
  SetIamPolicyProjectsLocationsChannelConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsChannelConnectionsRequest,
  output: SetIamPolicyProjectsLocationsChannelConnectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsGoogleApiSourcesRequest {
  /** Optional. The page token; provide the value from the `next_page_token` field in a previous call to retrieve the subsequent page. When paginating, all other parameters provided must match the previous call that provided the page token. */
  pageToken?: string;
  /** Optional. The maximum number of results to return on each page. Note: The service may send fewer. */
  pageSize?: number;
  /** Optional. The sorting order of the resources returned. Value should be a comma-separated list of fields. The default sorting order is ascending. To specify descending order for a field, append a `desc` suffix; for example: `name desc, update_time`. */
  orderBy?: string;
  /** Required. The parent collection to list GoogleApiSources on. */
  parent: string;
  /** Optional. The filter field that the list request will filter on. Possible filtersare described in https://google.aip.dev/160. */
  filter?: string;
}

export const ListProjectsLocationsGoogleApiSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/googleApiSources" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsGoogleApiSourcesRequest>;

export type ListProjectsLocationsGoogleApiSourcesResponse =
  ListGoogleApiSourcesResponse;
export const ListProjectsLocationsGoogleApiSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListGoogleApiSourcesResponse;

export type ListProjectsLocationsGoogleApiSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List GoogleApiSources. */
export const listProjectsLocationsGoogleApiSources: API.PaginatedOperationMethod<
  ListProjectsLocationsGoogleApiSourcesRequest,
  ListProjectsLocationsGoogleApiSourcesResponse,
  ListProjectsLocationsGoogleApiSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsGoogleApiSourcesRequest,
  output: ListProjectsLocationsGoogleApiSourcesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsGoogleApiSourcesRequest {
  /** Identifier. Resource name of the form projects/{project}/locations/{location}/googleApiSources/{google_api_source} */
  name: string;
  /** Optional. The fields to be updated; only fields explicitly provided are updated. If no field mask is provided, all provided fields in the request are updated. To update all fields, provide a field mask of "*". */
  updateMask?: string;
  /** Optional. If set to true, and the GoogleApiSource is not found, a new GoogleApiSource will be created. In this situation, `update_mask` is ignored. */
  allowMissing?: boolean;
  /** Optional. If set, validate the request and preview the review, but do not post it. */
  validateOnly?: boolean;
  /** Request body */
  body?: GoogleApiSource;
}

export const PatchProjectsLocationsGoogleApiSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(GoogleApiSource).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsGoogleApiSourcesRequest>;

export type PatchProjectsLocationsGoogleApiSourcesResponse =
  GoogleLongrunningOperation;
export const PatchProjectsLocationsGoogleApiSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type PatchProjectsLocationsGoogleApiSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update a single GoogleApiSource. */
export const patchProjectsLocationsGoogleApiSources: API.OperationMethod<
  PatchProjectsLocationsGoogleApiSourcesRequest,
  PatchProjectsLocationsGoogleApiSourcesResponse,
  PatchProjectsLocationsGoogleApiSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsGoogleApiSourcesRequest,
  output: PatchProjectsLocationsGoogleApiSourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsGoogleApiSourcesRequest {
  /** Required. The name of the google api source to get. */
  name: string;
}

export const GetProjectsLocationsGoogleApiSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsGoogleApiSourcesRequest>;

export type GetProjectsLocationsGoogleApiSourcesResponse = GoogleApiSource;
export const GetProjectsLocationsGoogleApiSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleApiSource;

export type GetProjectsLocationsGoogleApiSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get a single GoogleApiSource. */
export const getProjectsLocationsGoogleApiSources: API.OperationMethod<
  GetProjectsLocationsGoogleApiSourcesRequest,
  GetProjectsLocationsGoogleApiSourcesResponse,
  GetProjectsLocationsGoogleApiSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsGoogleApiSourcesRequest,
  output: GetProjectsLocationsGoogleApiSourcesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsGoogleApiSourcesRequest {
  /** Required. The parent collection in which to add this google api source. */
  parent: string;
  /** Required. The user-provided ID to be assigned to the GoogleApiSource. It should match the format `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`. */
  googleApiSourceId?: string;
  /** Optional. If set, validate the request and preview the review, but do not post it. */
  validateOnly?: boolean;
  /** Request body */
  body?: GoogleApiSource;
}

export const CreateProjectsLocationsGoogleApiSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    googleApiSourceId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("googleApiSourceId"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(GoogleApiSource).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/googleApiSources",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsGoogleApiSourcesRequest>;

export type CreateProjectsLocationsGoogleApiSourcesResponse =
  GoogleLongrunningOperation;
export const CreateProjectsLocationsGoogleApiSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsLocationsGoogleApiSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a new GoogleApiSource in a particular project and location. */
export const createProjectsLocationsGoogleApiSources: API.OperationMethod<
  CreateProjectsLocationsGoogleApiSourcesRequest,
  CreateProjectsLocationsGoogleApiSourcesResponse,
  CreateProjectsLocationsGoogleApiSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsGoogleApiSourcesRequest,
  output: CreateProjectsLocationsGoogleApiSourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsLocationsGoogleApiSourcesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsGoogleApiSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(TestIamPermissionsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsGoogleApiSourcesRequest>;

export type TestIamPermissionsProjectsLocationsGoogleApiSourcesResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsGoogleApiSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsGoogleApiSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsGoogleApiSources: API.OperationMethod<
  TestIamPermissionsProjectsLocationsGoogleApiSourcesRequest,
  TestIamPermissionsProjectsLocationsGoogleApiSourcesResponse,
  TestIamPermissionsProjectsLocationsGoogleApiSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsGoogleApiSourcesRequest,
  output: TestIamPermissionsProjectsLocationsGoogleApiSourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsGoogleApiSourcesRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsGoogleApiSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsGoogleApiSourcesRequest>;

export type GetIamPolicyProjectsLocationsGoogleApiSourcesResponse = Policy;
export const GetIamPolicyProjectsLocationsGoogleApiSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsGoogleApiSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsGoogleApiSources: API.OperationMethod<
  GetIamPolicyProjectsLocationsGoogleApiSourcesRequest,
  GetIamPolicyProjectsLocationsGoogleApiSourcesResponse,
  GetIamPolicyProjectsLocationsGoogleApiSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsGoogleApiSourcesRequest,
  output: GetIamPolicyProjectsLocationsGoogleApiSourcesResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsGoogleApiSourcesRequest {
  /** Required. The name of the GoogleApiSource to be deleted. */
  name: string;
  /** Optional. If set to true, and the MessageBus is not found, the request will succeed but no action will be taken on the server. */
  allowMissing?: boolean;
  /** Optional. If set, validate the request and preview the review, but do not post it. */
  validateOnly?: boolean;
  /** Optional. If provided, the MessageBus will only be deleted if the etag matches the current etag on the resource. */
  etag?: string;
}

export const DeleteProjectsLocationsGoogleApiSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsGoogleApiSourcesRequest>;

export type DeleteProjectsLocationsGoogleApiSourcesResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsGoogleApiSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsGoogleApiSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a single GoogleApiSource. */
export const deleteProjectsLocationsGoogleApiSources: API.OperationMethod<
  DeleteProjectsLocationsGoogleApiSourcesRequest,
  DeleteProjectsLocationsGoogleApiSourcesResponse,
  DeleteProjectsLocationsGoogleApiSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsGoogleApiSourcesRequest,
  output: DeleteProjectsLocationsGoogleApiSourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsGoogleApiSourcesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsGoogleApiSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsGoogleApiSourcesRequest>;

export type SetIamPolicyProjectsLocationsGoogleApiSourcesResponse = Policy;
export const SetIamPolicyProjectsLocationsGoogleApiSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsGoogleApiSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsGoogleApiSources: API.OperationMethod<
  SetIamPolicyProjectsLocationsGoogleApiSourcesRequest,
  SetIamPolicyProjectsLocationsGoogleApiSourcesResponse,
  SetIamPolicyProjectsLocationsGoogleApiSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsGoogleApiSourcesRequest,
  output: SetIamPolicyProjectsLocationsGoogleApiSourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
