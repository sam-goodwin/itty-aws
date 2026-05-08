// ==========================================================================
// Cloud Data Fusion API (datafusion v1beta1)
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
  name: "datafusion",
  version: "v1beta1",
  rootUrl: "https://datafusion.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface DnsPeering {
  /** Optional. Optional target project to which dns peering should happen. */
  targetProject?: string;
  /** Optional. Optional description of the dns zone. */
  description?: string;
  /** Required. The dns name suffix of the zone. */
  domain?: string;
  /** Identifier. The resource name of the dns peering zone. Format: projects/{project}/locations/{location}/instances/{instance}/dnsPeerings/{dns_peering} */
  name?: string;
  /** Optional. Optional target network to which dns peering should happen. */
  targetNetwork?: string;
}

export const DnsPeering: Schema.Schema<DnsPeering> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targetProject: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    targetNetwork: Schema.optional(Schema.String),
  }).annotate({ identifier: "DnsPeering" });

export interface ListDnsPeeringsResponse {
  /** List of dns peering. */
  dnsPeerings?: ReadonlyArray<DnsPeering>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListDnsPeeringsResponse: Schema.Schema<ListDnsPeeringsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dnsPeerings: Schema.optional(Schema.Array(DnsPeering)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListDnsPeeringsResponse" });

export interface CryptoKeyConfig {
  /** Optional. The name of the key which is used to encrypt/decrypt customer data. For key in Cloud KMS, the key should be in the format of `projects/* /locations/* /keyRings/* /cryptoKeys/*`. */
  keyReference?: string;
}

export const CryptoKeyConfig: Schema.Schema<CryptoKeyConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keyReference: Schema.optional(Schema.String),
  }).annotate({ identifier: "CryptoKeyConfig" });

export interface Status {
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
}

export const Status: Schema.Schema<Status> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    message: Schema.optional(Schema.String),
    code: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Status" });

export interface Operation {
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
    done: Schema.optional(Schema.Boolean),
    error: Schema.optional(Status),
  }).annotate({ identifier: "Operation" });

export interface Version {
  /** Type represents the release availability of the version */
  type?:
    | "TYPE_UNSPECIFIED"
    | "TYPE_PREVIEW"
    | "TYPE_GENERAL_AVAILABILITY"
    | "TYPE_DEPRECATED"
    | (string & {});
  /** The version number of the Data Fusion instance, such as '6.0.1.0'. */
  versionNumber?: string;
  /** Whether this is currently the default version for Cloud Data Fusion */
  defaultVersion?: boolean;
  /** Represents a list of available feature names for a given version. */
  availableFeatures?: ReadonlyArray<string>;
}

export const Version: Schema.Schema<Version> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    versionNumber: Schema.optional(Schema.String),
    defaultVersion: Schema.optional(Schema.Boolean),
    availableFeatures: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Version" });

export interface TimeWindow {
  /** Required. The start time of the time window provided in [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format. Example: "2024-01-01T12:04:06-04:00" */
  startTime?: string;
  /** Required. The end time of the time window provided in [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format. The end time should take place after the start time. Example: "2024-01-02T12:04:06-06:00" */
  endTime?: string;
}

export const TimeWindow: Schema.Schema<TimeWindow> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "TimeWindow" });

export interface RecurringTimeWindow {
  /** Required. The window representing the start and end time of recurrences. This field ignores the date components of the provided timestamps. Only the time of day and duration between start and end time are relevant. */
  window?: TimeWindow;
  /** Required. An RRULE with format [RFC-5545](https://tools.ietf.org/html/rfc5545#section-3.8.5.3) for how this window reccurs. They go on for the span of time between the start and end time. The only supported FREQ value is "WEEKLY". To have something repeat every weekday, use: "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR". This specifies how frequently the window starts. To have a 9 am - 5 pm UTC-4 window every weekday, use something like: ``` start time = 2019-01-01T09:00:00-0400 end time = 2019-01-01T17:00:00-0400 recurrence = FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR ``` */
  recurrence?: string;
}

export const RecurringTimeWindow: Schema.Schema<RecurringTimeWindow> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    window: Schema.optional(TimeWindow),
    recurrence: Schema.optional(Schema.String),
  }).annotate({ identifier: "RecurringTimeWindow" });

export interface MaintenanceWindow {
  /** Required. The recurring time window of the maintenance window. */
  recurringTimeWindow?: RecurringTimeWindow;
}

export const MaintenanceWindow: Schema.Schema<MaintenanceWindow> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    recurringTimeWindow: Schema.optional(RecurringTimeWindow),
  }).annotate({ identifier: "MaintenanceWindow" });

export interface Expr {
  /** Textual representation of an expression in Common Expression Language syntax. */
  expression?: string;
  /** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
  title?: string;
  /** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
  description?: string;
  /** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
  location?: string;
}

export const Expr: Schema.Schema<Expr> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expression: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
  }).annotate({ identifier: "Expr" });

export interface Accelerator {
  /** Optional. The type of an accelator for a Cloud Data Fusion instance. */
  acceleratorType?:
    | "ACCELERATOR_TYPE_UNSPECIFIED"
    | "CDC"
    | "HEALTHCARE"
    | "CCAI_INSIGHTS"
    | "CLOUDSEARCH"
    | (string & {});
  /** Output only. The state of the accelerator. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ENABLED"
    | "DISABLED"
    | "UNKNOWN"
    | (string & {});
}

export const Accelerator: Schema.Schema<Accelerator> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    acceleratorType: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "Accelerator" });

export interface MaintenanceEvent {
  /** Output only. The end time of the maintenance event provided in [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format. Example: "2024-01-02T12:04:06-06:00" This field will be empty if the maintenance event is not yet complete. */
  endTime?: string;
  /** Output only. The state of the maintenance event. */
  state?:
    | "STATE_UNSPECIFIED"
    | "SCHEDULED"
    | "STARTED"
    | "COMPLETED"
    | (string & {});
  /** Output only. The start time of the maintenance event provided in [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format. Example: "2024-01-01T12:04:06-04:00" */
  startTime?: string;
}

export const MaintenanceEvent: Schema.Schema<MaintenanceEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "MaintenanceEvent" });

export interface PrivateServiceConnectConfig {
  /** Optional. Input only. The CIDR block to which the CDF instance can't route traffic to in the consumer project VPC. The size of this block should be at least /25. This range should not overlap with the primary address range of any subnetwork used by the network attachment. This range can be used for other purposes in the consumer VPC as long as there is no requirement for CDF to reach destinations using these addresses. If this value is not provided, the server chooses a non RFC 1918 address range. The format of this field is governed by RFC 4632. Example: 192.168.0.0/25 */
  unreachableCidrBlock?: string;
  /** Required. The reference to the network attachment used to establish private connectivity. It will be of the form projects/{project-id}/regions/{region}/networkAttachments/{network-attachment-id}. */
  networkAttachment?: string;
  /** Output only. The CIDR block to which the CDF instance can't route traffic to in the consumer project VPC. The size of this block is /25. The format of this field is governed by RFC 4632. Example: 240.0.0.0/25 */
  effectiveUnreachableCidrBlock?: string;
}

export const PrivateServiceConnectConfig: Schema.Schema<PrivateServiceConnectConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachableCidrBlock: Schema.optional(Schema.String),
    networkAttachment: Schema.optional(Schema.String),
    effectiveUnreachableCidrBlock: Schema.optional(Schema.String),
  }).annotate({ identifier: "PrivateServiceConnectConfig" });

export interface NetworkConfig {
  /** Optional. Name of the network in the customer project with which the Tenant Project will be peered for executing pipelines. In case of shared VPC where the network resides in another host project the network should specified in the form of projects/{host-project-id}/global/networks/{network}. This is only required for connectivity type VPC_PEERING. */
  network?: string;
  /** Optional. Type of connection for establishing private IP connectivity between the Data Fusion customer project VPC and the corresponding tenant project from a predefined list of available connection modes. If this field is unspecified for a private instance, VPC peering is used. */
  connectionType?:
    | "CONNECTION_TYPE_UNSPECIFIED"
    | "VPC_PEERING"
    | "PRIVATE_SERVICE_CONNECT_INTERFACES"
    | (string & {});
  /** Optional. Configuration for Private Service Connect. This is required only when using connection type PRIVATE_SERVICE_CONNECT_INTERFACES. */
  privateServiceConnectConfig?: PrivateServiceConnectConfig;
  /** Optional. The IP range in CIDR notation to use for the managed Data Fusion instance nodes. This range must not overlap with any other ranges used in the Data Fusion instance network. This is required only when using connection type VPC_PEERING. Format: a.b.c.d/22 Example: 192.168.0.0/22 */
  ipAllocation?: string;
}

export const NetworkConfig: Schema.Schema<NetworkConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    network: Schema.optional(Schema.String),
    connectionType: Schema.optional(Schema.String),
    privateServiceConnectConfig: Schema.optional(PrivateServiceConnectConfig),
    ipAllocation: Schema.optional(Schema.String),
  }).annotate({ identifier: "NetworkConfig" });

export interface MonitoringConfig {
  /** Optional. Option to enable the instance v2 metrics for this instance. This field is supported only in CDF versions 6.11.1.1 and above. */
  enableInstanceV2Metrics?: boolean;
}

export const MonitoringConfig: Schema.Schema<MonitoringConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableInstanceV2Metrics: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "MonitoringConfig" });

export interface EventPublishConfig {
  /** Required. Option to enable Event Publishing. */
  enabled?: boolean;
  /** Required. The resource name of the Pub/Sub topic. Format: projects/{project_id}/topics/{topic_id} */
  topic?: string;
}

export const EventPublishConfig: Schema.Schema<EventPublishConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
    topic: Schema.optional(Schema.String),
  }).annotate({ identifier: "EventPublishConfig" });

export interface LoggingConfig {
  /** Optional. Option to determine whether instance logs should be written to Cloud Logging. By default, instance logs are written to Cloud Logging. */
  instanceCloudLoggingDisabled?: boolean;
  /** Optional. Option to enable the InstanceV2 logging for this instance. This field is supported only in CDF patch revision versions 6.11.1.1 and above. */
  enableInstanceV2Logs?: boolean;
}

export const LoggingConfig: Schema.Schema<LoggingConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instanceCloudLoggingDisabled: Schema.optional(Schema.Boolean),
    enableInstanceV2Logs: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "LoggingConfig" });

export interface MaintenancePolicy {
  /** Optional. The maintenance window of the instance. */
  maintenanceWindow?: MaintenanceWindow;
  /** Optional. The maintenance exclusion window of the instance. */
  maintenanceExclusionWindow?: TimeWindow;
}

export const MaintenancePolicy: Schema.Schema<MaintenancePolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maintenanceWindow: Schema.optional(MaintenanceWindow),
    maintenanceExclusionWindow: Schema.optional(TimeWindow),
  }).annotate({ identifier: "MaintenancePolicy" });

export interface Instance {
  /** Output only. If the instance state is DISABLED, the reason for disabling the instance. */
  disabledReason?: ReadonlyArray<
    | "DISABLED_REASON_UNSPECIFIED"
    | "KMS_KEY_ISSUE"
    | "PROJECT_STATE_OFF"
    | (string & {})
  >;
  /** Optional. Option to enable Dataproc Stackdriver Logging. */
  enableStackdriverLogging?: boolean;
  /** Output only. Endpoint on which the REST APIs is accessible. */
  apiEndpoint?: string;
  /** Output only. List of accelerators enabled for this CDF instance. */
  accelerators?: ReadonlyArray<Accelerator>;
  /** Optional. Option to enable granular role-based access control. */
  enableRbac?: boolean;
  /** Required. Instance type. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "BASIC"
    | "ENTERPRISE"
    | "DEVELOPER"
    | (string & {});
  /** Output only. Reserved for future use. */
  satisfiesPzs?: boolean;
  /** Optional. Specifies whether the Data Fusion instance should be private. If set to true, all Data Fusion nodes will have private IP addresses and will not be able to access the public internet. */
  privateInstance?: boolean;
  /** The resource labels for instance to use to annotate any related underlying resources such as Compute Engine VMs. The character '=' is not allowed to be used within the labels. */
  labels?: Record<string, string>;
  /** Output only. The current state of this Data Fusion instance. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "RUNNING"
    | "FAILED"
    | "DELETING"
    | "UPGRADING"
    | "RESTARTING"
    | "UPDATING"
    | "AUTO_UPDATING"
    | "AUTO_UPGRADING"
    | "DISABLED"
    | "ENABLING"
    | (string & {});
  /** Optional. Current version of Data Fusion. */
  version?: string;
  /** Output only. Option to enable zone separation. */
  enableZoneSeparation?: boolean;
  /** Optional. Current patch revision of the Data Fusion. */
  patchRevision?: string;
  /** Optional. Map of additional options used to configure the behavior of Data Fusion instance. */
  options?: Record<string, string>;
  /** Output only. The maintenance events for this instance. */
  maintenanceEvents?: ReadonlyArray<MaintenanceEvent>;
  /** Optional. Network configuration options. These are required when a private Data Fusion instance is to be created. */
  networkConfig?: NetworkConfig;
  /** Output only. Cloud Storage bucket generated by Data Fusion in the customer project. */
  gcsBucket?: string;
  /** Output only. Service agent for the customer project. */
  p4ServiceAccount?: string;
  /** Output only. Endpoint on which the Data Fusion UI is accessible to third-party users. */
  workforceIdentityServiceEndpoint?: string;
  /** Optional. User-managed service account to set on Dataproc when Cloud Data Fusion creates Dataproc to run data processing pipelines. This allows users to have fine-grained access control on Dataproc's accesses to cloud resources. */
  dataprocServiceAccount?: string;
  /** Output only. Endpoint on which the Data Fusion UI is accessible. */
  serviceEndpoint?: string;
  /** Output only. Additional information about the current state of this Data Fusion instance if available. */
  stateMessage?: string;
  /** Optional. The monitoring configuration for this instance. */
  monitoringConfig?: MonitoringConfig;
  /** Optional. Option to enable the Dataplex Lineage Integration feature. */
  dataplexDataLineageIntegrationEnabled?: boolean;
  /** Optional. Option to enable and pass metadata for event publishing. */
  eventPublishConfig?: EventPublishConfig;
  /** Output only. The time the instance was created. */
  createTime?: string;
  /** Optional. Input only. Immutable. Tag keys/values directly bound to this resource. For example: "123/environment": "production", "123/costCenter": "marketing" */
  tags?: Record<string, string>;
  /** Output only. Reserved for future use. */
  satisfiesPzi?: boolean;
  /** Output only. Available versions that the instance can be upgraded to using UpdateInstanceRequest. */
  availableVersion?: ReadonlyArray<Version>;
  /** Optional. Option to enable Stackdriver Monitoring. */
  enableStackdriverMonitoring?: boolean;
  /** Output only. The time the instance was last updated. */
  updateTime?: string;
  /** Optional. A description of this instance. */
  description?: string;
  /** Output only. The name of the tenant project. */
  tenantProjectId?: string;
  /** Optional. The logging configuration for this instance. This field is supported only in CDF versions 6.11.0 and above. */
  loggingConfig?: LoggingConfig;
  /** Optional. Configure the maintenance policy for this instance. */
  maintenancePolicy?: MaintenancePolicy;
  /** Optional. Name of the zone in which the Data Fusion instance will be created. Only DEVELOPER instances use this field. */
  zone?: string;
  /** Output only. Deprecated. Use tenant_project_id instead to extract the tenant project ID. */
  serviceAccount?: string;
  /** Optional. Display name for an instance. */
  displayName?: string;
  /** Output only. The name of this instance is in the form of projects/{project}/locations/{location}/instances/{instance}. */
  name?: string;
  /** Optional. The crypto key configuration. This field is used by the Customer-Managed Encryption Keys (CMEK) feature. */
  cryptoKeyConfig?: CryptoKeyConfig;
}

export const Instance: Schema.Schema<Instance> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    disabledReason: Schema.optional(Schema.Array(Schema.String)),
    enableStackdriverLogging: Schema.optional(Schema.Boolean),
    apiEndpoint: Schema.optional(Schema.String),
    accelerators: Schema.optional(Schema.Array(Accelerator)),
    enableRbac: Schema.optional(Schema.Boolean),
    type: Schema.optional(Schema.String),
    satisfiesPzs: Schema.optional(Schema.Boolean),
    privateInstance: Schema.optional(Schema.Boolean),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    state: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    enableZoneSeparation: Schema.optional(Schema.Boolean),
    patchRevision: Schema.optional(Schema.String),
    options: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    maintenanceEvents: Schema.optional(Schema.Array(MaintenanceEvent)),
    networkConfig: Schema.optional(NetworkConfig),
    gcsBucket: Schema.optional(Schema.String),
    p4ServiceAccount: Schema.optional(Schema.String),
    workforceIdentityServiceEndpoint: Schema.optional(Schema.String),
    dataprocServiceAccount: Schema.optional(Schema.String),
    serviceEndpoint: Schema.optional(Schema.String),
    stateMessage: Schema.optional(Schema.String),
    monitoringConfig: Schema.optional(MonitoringConfig),
    dataplexDataLineageIntegrationEnabled: Schema.optional(Schema.Boolean),
    eventPublishConfig: Schema.optional(EventPublishConfig),
    createTime: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    satisfiesPzi: Schema.optional(Schema.Boolean),
    availableVersion: Schema.optional(Schema.Array(Version)),
    enableStackdriverMonitoring: Schema.optional(Schema.Boolean),
    updateTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    tenantProjectId: Schema.optional(Schema.String),
    loggingConfig: Schema.optional(LoggingConfig),
    maintenancePolicy: Schema.optional(MaintenancePolicy),
    zone: Schema.optional(Schema.String),
    serviceAccount: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    cryptoKeyConfig: Schema.optional(CryptoKeyConfig),
  }).annotate({ identifier: "Instance" });

export interface ListInstancesResponse {
  /** Represents a list of Data Fusion instances. */
  instances?: ReadonlyArray<Instance>;
  /** Token to retrieve the next page of results or empty if there are no more results in the list. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListInstancesResponse: Schema.Schema<ListInstancesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instances: Schema.optional(Schema.Array(Instance)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListInstancesResponse" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface ListOperationsResponse {
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<Operation>;
}

export const ListOperationsResponse: Schema.Schema<ListOperationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    operations: Schema.optional(Schema.Array(Operation)),
  }).annotate({ identifier: "ListOperationsResponse" });

export interface TestIamPermissionsRequest {
  /** The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsRequest: Schema.Schema<TestIamPermissionsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsRequest" });

export interface CancelOperationRequest {}

export const CancelOperationRequest: Schema.Schema<CancelOperationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelOperationRequest",
  });

export interface RemoveIamPolicyResponse {}

export const RemoveIamPolicyResponse: Schema.Schema<RemoveIamPolicyResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "RemoveIamPolicyResponse",
  });

export interface Binding {
  /** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. For an overview of the IAM roles and permissions, see the [IAM documentation](https://cloud.google.com/iam/docs/roles-overview). For a list of the available pre-defined roles, see [here](https://cloud.google.com/iam/docs/understanding-roles). */
  role?: string;
  /** Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*`: All identities in a workload identity pool. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`. */
  members?: ReadonlyArray<string>;
  /** The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  condition?: Expr;
}

export const Binding: Schema.Schema<Binding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    role: Schema.optional(Schema.String),
    members: Schema.optional(Schema.Array(Schema.String)),
    condition: Schema.optional(Expr),
  }).annotate({ identifier: "Binding" });

export interface AuditLogConfig {
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

export const AuditLogConfig: Schema.Schema<AuditLogConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exemptedMembers: Schema.optional(Schema.Array(Schema.String)),
    logType: Schema.optional(Schema.String),
  }).annotate({ identifier: "AuditLogConfig" });

export interface AuditConfig {
  /** The configuration for logging of each type of permission. */
  auditLogConfigs?: ReadonlyArray<AuditLogConfig>;
  /** Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services. */
  service?: string;
}

export const AuditConfig: Schema.Schema<AuditConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    auditLogConfigs: Schema.optional(Schema.Array(AuditLogConfig)),
    service: Schema.optional(Schema.String),
  }).annotate({ identifier: "AuditConfig" });

export interface Policy {
  /** Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`. */
  bindings?: ReadonlyArray<Binding>;
  /** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  version?: number;
  /** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
  etag?: string;
  /** Specifies cloud audit logging configuration for this policy. */
  auditConfigs?: ReadonlyArray<AuditConfig>;
}

export const Policy: Schema.Schema<Policy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bindings: Schema.optional(Schema.Array(Binding)),
    version: Schema.optional(Schema.Number),
    etag: Schema.optional(Schema.String),
    auditConfigs: Schema.optional(Schema.Array(AuditConfig)),
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

export interface Location {
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
}

export const Location: Schema.Schema<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    displayName: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    locationId: Schema.optional(Schema.String),
  }).annotate({ identifier: "Location" });

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

export interface IAMPolicy {
  /** Policy definition if IAM policy fetching is successful, otherwise empty. */
  policy?: Policy;
  /** Status of iam policy fetching. */
  status?: Status;
}

export const IAMPolicy: Schema.Schema<IAMPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policy: Schema.optional(Policy),
    status: Schema.optional(Status),
  }).annotate({ identifier: "IAMPolicy" });

export interface Namespace {
  /** Name of the given namespace. */
  name?: string;
  /** IAM policy associated with this namespace. */
  iamPolicy?: IAMPolicy;
}

export const Namespace: Schema.Schema<Namespace> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    iamPolicy: Schema.optional(IAMPolicy),
  }).annotate({ identifier: "Namespace" });

export interface UpgradeInstanceRequest {}

export const UpgradeInstanceRequest: Schema.Schema<UpgradeInstanceRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "UpgradeInstanceRequest",
  });

export interface OperationMetadata {
  /** Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Name of the verb executed by the operation. */
  verb?: string;
  /** API version used to start the operation. */
  apiVersion?: string;
  /** Map to hold any additional status info for the operation If there is an accelerator being enabled/disabled/deleted, this will be populated with accelerator name as key and status as ENABLING, DISABLING or DELETING */
  additionalStatus?: Record<string, string>;
  /** The time the operation was created. */
  createTime?: string;
  /** Server-defined resource path for the target of the operation. */
  target?: string;
  /** The time the operation finished running. */
  endTime?: string;
  /** Human-readable status of the operation if any. */
  statusDetail?: string;
}

export const OperationMetadata: Schema.Schema<OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestedCancellation: Schema.optional(Schema.Boolean),
    verb: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    additionalStatus: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    createTime: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    statusDetail: Schema.optional(Schema.String),
  }).annotate({ identifier: "OperationMetadata" });

export interface RemoveIamPolicyRequest {}

export const RemoveIamPolicyRequest: Schema.Schema<RemoveIamPolicyRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "RemoveIamPolicyRequest",
  });

export interface TestIamPermissionsResponse {
  /** A subset of `TestPermissionsRequest.permissions` that the caller is allowed. */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsResponse: Schema.Schema<TestIamPermissionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsResponse" });

export interface RestartInstanceRequest {}

export const RestartInstanceRequest: Schema.Schema<RestartInstanceRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "RestartInstanceRequest",
  });

export interface ListNamespacesResponse {
  /** List of namespaces */
  namespaces?: ReadonlyArray<Namespace>;
  /** Token to retrieve the next page of results or empty if there are no more results in the list. */
  nextPageToken?: string;
}

export const ListNamespacesResponse: Schema.Schema<ListNamespacesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    namespaces: Schema.optional(Schema.Array(Namespace)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListNamespacesResponse" });

export interface ListAvailableVersionsResponse {
  /** Token to retrieve the next page of results or empty if there are no more results in the list. */
  nextPageToken?: string;
  /** Represents a list of all versions. */
  versions?: ReadonlyArray<Version>;
  /** Represents a list of versions that are supported. Deprecated: Use versions field instead. */
  availableVersions?: ReadonlyArray<Version>;
}

export const ListAvailableVersionsResponse: Schema.Schema<ListAvailableVersionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    versions: Schema.optional(Schema.Array(Version)),
    availableVersions: Schema.optional(Schema.Array(Version)),
  }).annotate({ identifier: "ListAvailableVersionsResponse" });

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
  /** Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}/locations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRequest>;

export type ListProjectsLocationsResponse = ListLocationsResponse;
export const ListProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListLocationsResponse;

export type ListProjectsLocationsError = DefaultErrors | NotFound | Forbidden;

/** Lists information about the supported locations for this service. */
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
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
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

export interface RemoveIamPolicyProjectsLocationsRequest {
  /** Required. The resource on which IAM policy to be removed is attached to. */
  resource: string;
  /** Request body */
  body?: RemoveIamPolicyRequest;
}

export const RemoveIamPolicyProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(RemoveIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+resource}:removeIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RemoveIamPolicyProjectsLocationsRequest>;

export type RemoveIamPolicyProjectsLocationsResponse = RemoveIamPolicyResponse;
export const RemoveIamPolicyProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ RemoveIamPolicyResponse;

export type RemoveIamPolicyProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Remove IAM policy that is currently set on the given resource. */
export const removeIamPolicyProjectsLocations: API.OperationMethod<
  RemoveIamPolicyProjectsLocationsRequest,
  RemoveIamPolicyProjectsLocationsResponse,
  RemoveIamPolicyProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RemoveIamPolicyProjectsLocationsRequest,
  output: RemoveIamPolicyProjectsLocationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsVersionsRequest {
  /** The maximum number of items to return. */
  pageSize?: number;
  /** The next_page_token value to use if there are additional results to retrieve for this list request. */
  pageToken?: string;
  /** Whether or not to return the latest patch of every available minor version. If true, only the latest patch will be returned. Ex. if allowed versions is [6.1.1, 6.1.2, 6.2.0] then response will be [6.1.2, 6.2.0] */
  latestPatchOnly?: boolean;
  /** Required. The project and location for which to retrieve instance information in the format projects/{project}/locations/{location}. */
  parent: string;
}

export const ListProjectsLocationsVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    latestPatchOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("latestPatchOnly"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/versions" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsVersionsRequest>;

export type ListProjectsLocationsVersionsResponse =
  ListAvailableVersionsResponse;
export const ListProjectsLocationsVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAvailableVersionsResponse;

export type ListProjectsLocationsVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists possible versions for Data Fusion instances in the specified project and location. */
export const listProjectsLocationsVersions: API.PaginatedOperationMethod<
  ListProjectsLocationsVersionsRequest,
  ListProjectsLocationsVersionsResponse,
  ListProjectsLocationsVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsVersionsRequest,
  output: ListProjectsLocationsVersionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsInstancesRequest {
  /** Optional. If set to true, any nested resources from this instance will also be deleted. */
  force?: boolean;
  /** Required. The instance resource name in the format projects/{project}/locations/{location}/instances/{instance} */
  name: string;
}

export const DeleteProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsInstancesRequest>;

export type DeleteProjectsLocationsInstancesResponse = Operation;
export const DeleteProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single Data Fusion instance. */
export const deleteProjectsLocationsInstances: API.OperationMethod<
  DeleteProjectsLocationsInstancesRequest,
  DeleteProjectsLocationsInstancesResponse,
  DeleteProjectsLocationsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsInstancesRequest,
  output: DeleteProjectsLocationsInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpgradeProjectsLocationsInstancesRequest {
  /** Required. Name of the Data Fusion instance which need to be upgraded in the form of projects/{project}/locations/{location}/instances/{instance} Instance will be upgraded with the latest stable version of the Data Fusion. */
  name: string;
  /** Request body */
  body?: UpgradeInstanceRequest;
}

export const UpgradeProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(UpgradeInstanceRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta1/{+name}:upgrade", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpgradeProjectsLocationsInstancesRequest>;

export type UpgradeProjectsLocationsInstancesResponse = Operation;
export const UpgradeProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type UpgradeProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Upgrade a single Data Fusion instance. At the end of an operation instance is fully upgraded. */
export const upgradeProjectsLocationsInstances: API.OperationMethod<
  UpgradeProjectsLocationsInstancesRequest,
  UpgradeProjectsLocationsInstancesResponse,
  UpgradeProjectsLocationsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpgradeProjectsLocationsInstancesRequest,
  output: UpgradeProjectsLocationsInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsInstancesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsInstancesRequest>;

export type SetIamPolicyProjectsLocationsInstancesResponse = Policy;
export const SetIamPolicyProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsInstances: API.OperationMethod<
  SetIamPolicyProjectsLocationsInstancesRequest,
  SetIamPolicyProjectsLocationsInstancesResponse,
  SetIamPolicyProjectsLocationsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsInstancesRequest,
  output: SetIamPolicyProjectsLocationsInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsInstancesRequest {
  /** Required. The instance's project and location in the format projects/{project}/locations/{location}. */
  parent: string;
  /** Required. The name of the instance to create. Instance name can only contain lowercase alphanumeric characters and hyphens. It must start with a letter and must not end with a hyphen. It can have a maximum of 30 characters. */
  instanceId?: string;
  /** Request body */
  body?: Instance;
}

export const CreateProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    instanceId: Schema.optional(Schema.String).pipe(T.HttpQuery("instanceId")),
    body: Schema.optional(Instance).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/instances",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsInstancesRequest>;

export type CreateProjectsLocationsInstancesResponse = Operation;
export const CreateProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new Data Fusion instance in the specified project and location. */
export const createProjectsLocationsInstances: API.OperationMethod<
  CreateProjectsLocationsInstancesRequest,
  CreateProjectsLocationsInstancesResponse,
  CreateProjectsLocationsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsInstancesRequest,
  output: CreateProjectsLocationsInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsInstancesRequest {
  /** The next_page_token value to use if there are additional results to retrieve for this list request. */
  pageToken?: string;
  /** List filter. */
  filter?: string;
  /** Required. The project and location for which to retrieve instance information in the format projects/{project}/locations/{location}. If the location is specified as '-' (wildcard), then all regions available to the project are queried, and the results are aggregated. */
  parent: string;
  /** The maximum number of items to return. */
  pageSize?: number;
  /** Sort results. Supported values are "name", "name desc", or "" (unsorted). */
  orderBy?: string;
}

export const ListProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/instances" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsInstancesRequest>;

export type ListProjectsLocationsInstancesResponse = ListInstancesResponse;
export const ListProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListInstancesResponse;

export type ListProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Data Fusion instances in the specified project and location. */
export const listProjectsLocationsInstances: API.PaginatedOperationMethod<
  ListProjectsLocationsInstancesRequest,
  ListProjectsLocationsInstancesResponse,
  ListProjectsLocationsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsInstancesRequest,
  output: ListProjectsLocationsInstancesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface RestartProjectsLocationsInstancesRequest {
  /** Required. Name of the Data Fusion instance which need to be restarted in the form of projects/{project}/locations/{location}/instances/{instance} */
  name: string;
  /** Request body */
  body?: RestartInstanceRequest;
}

export const RestartProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(RestartInstanceRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta1/{+name}:restart", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<RestartProjectsLocationsInstancesRequest>;

export type RestartProjectsLocationsInstancesResponse = Operation;
export const RestartProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type RestartProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Restart a single Data Fusion instance. At the end of an operation instance is fully restarted. */
export const restartProjectsLocationsInstances: API.OperationMethod<
  RestartProjectsLocationsInstancesRequest,
  RestartProjectsLocationsInstancesResponse,
  RestartProjectsLocationsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RestartProjectsLocationsInstancesRequest,
  output: RestartProjectsLocationsInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsLocationsInstancesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(TestIamPermissionsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsInstancesRequest>;

export type TestIamPermissionsProjectsLocationsInstancesResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsInstances: API.OperationMethod<
  TestIamPermissionsProjectsLocationsInstancesRequest,
  TestIamPermissionsProjectsLocationsInstancesResponse,
  TestIamPermissionsProjectsLocationsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsInstancesRequest,
  output: TestIamPermissionsProjectsLocationsInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsInstancesRequest {
  /** Output only. The name of this instance is in the form of projects/{project}/locations/{location}/instances/{instance}. */
  name: string;
  /** Field mask is used to specify the fields that the update will overwrite in an instance resource. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask, all the supported fields (labels and options currently) will be overwritten. */
  updateMask?: string;
  /** Request body */
  body?: Instance;
}

export const PatchProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Instance).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsInstancesRequest>;

export type PatchProjectsLocationsInstancesResponse = Operation;
export const PatchProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a single Data Fusion instance. */
export const patchProjectsLocationsInstances: API.OperationMethod<
  PatchProjectsLocationsInstancesRequest,
  PatchProjectsLocationsInstancesResponse,
  PatchProjectsLocationsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsInstancesRequest,
  output: PatchProjectsLocationsInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsInstancesRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsInstancesRequest>;

export type GetIamPolicyProjectsLocationsInstancesResponse = Policy;
export const GetIamPolicyProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsInstances: API.OperationMethod<
  GetIamPolicyProjectsLocationsInstancesRequest,
  GetIamPolicyProjectsLocationsInstancesResponse,
  GetIamPolicyProjectsLocationsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsInstancesRequest,
  output: GetIamPolicyProjectsLocationsInstancesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsInstancesRequest {
  /** Required. The instance resource name in the format projects/{project}/locations/{location}/instances/{instance}. */
  name: string;
}

export const GetProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsInstancesRequest>;

export type GetProjectsLocationsInstancesResponse = Instance;
export const GetProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Instance;

export type GetProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single Data Fusion instance. */
export const getProjectsLocationsInstances: API.OperationMethod<
  GetProjectsLocationsInstancesRequest,
  GetProjectsLocationsInstancesResponse,
  GetProjectsLocationsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsInstancesRequest,
  output: GetProjectsLocationsInstancesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsInstancesNamespacesRequest {
  /** Required. The instance to list its namespaces. */
  parent: string;
  /** By default, only basic information about a namespace is returned (e.g. name). When `NAMESPACE_VIEW_FULL` is specified, additional information associated with a namespace gets returned (e.g. IAM policy set on the namespace) */
  view?:
    | "NAMESPACE_VIEW_UNSPECIFIED"
    | "NAMESPACE_VIEW_BASIC"
    | "NAMESPACE_VIEW_FULL"
    | (string & {});
  /** The maximum number of items to return. */
  pageSize?: number;
  /** The next_page_token value to use if there are additional results to retrieve for this list request. */
  pageToken?: string;
}

export const ListProjectsLocationsInstancesNamespacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/namespaces" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsInstancesNamespacesRequest>;

export type ListProjectsLocationsInstancesNamespacesResponse =
  ListNamespacesResponse;
export const ListProjectsLocationsInstancesNamespacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListNamespacesResponse;

export type ListProjectsLocationsInstancesNamespacesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List namespaces in a given instance */
export const listProjectsLocationsInstancesNamespaces: API.PaginatedOperationMethod<
  ListProjectsLocationsInstancesNamespacesRequest,
  ListProjectsLocationsInstancesNamespacesResponse,
  ListProjectsLocationsInstancesNamespacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsInstancesNamespacesRequest,
  output: ListProjectsLocationsInstancesNamespacesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface SetIamPolicyProjectsLocationsInstancesNamespacesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsInstancesNamespacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsInstancesNamespacesRequest>;

export type SetIamPolicyProjectsLocationsInstancesNamespacesResponse = Policy;
export const SetIamPolicyProjectsLocationsInstancesNamespacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsInstancesNamespacesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsInstancesNamespaces: API.OperationMethod<
  SetIamPolicyProjectsLocationsInstancesNamespacesRequest,
  SetIamPolicyProjectsLocationsInstancesNamespacesResponse,
  SetIamPolicyProjectsLocationsInstancesNamespacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsInstancesNamespacesRequest,
  output: SetIamPolicyProjectsLocationsInstancesNamespacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsLocationsInstancesNamespacesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsInstancesNamespacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(TestIamPermissionsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsInstancesNamespacesRequest>;

export type TestIamPermissionsProjectsLocationsInstancesNamespacesResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsInstancesNamespacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsInstancesNamespacesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsInstancesNamespaces: API.OperationMethod<
  TestIamPermissionsProjectsLocationsInstancesNamespacesRequest,
  TestIamPermissionsProjectsLocationsInstancesNamespacesResponse,
  TestIamPermissionsProjectsLocationsInstancesNamespacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsInstancesNamespacesRequest,
  output: TestIamPermissionsProjectsLocationsInstancesNamespacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsInstancesNamespacesRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsInstancesNamespacesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsInstancesNamespacesRequest>;

export type GetIamPolicyProjectsLocationsInstancesNamespacesResponse = Policy;
export const GetIamPolicyProjectsLocationsInstancesNamespacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsInstancesNamespacesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsInstancesNamespaces: API.OperationMethod<
  GetIamPolicyProjectsLocationsInstancesNamespacesRequest,
  GetIamPolicyProjectsLocationsInstancesNamespacesResponse,
  GetIamPolicyProjectsLocationsInstancesNamespacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsInstancesNamespacesRequest,
  output: GetIamPolicyProjectsLocationsInstancesNamespacesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsInstancesDnsPeeringsRequest {
  /** Required. The resource on which DNS peering will be created. */
  parent: string;
  /** Required. The name of the peering to create. */
  dnsPeeringId?: string;
  /** Request body */
  body?: DnsPeering;
}

export const CreateProjectsLocationsInstancesDnsPeeringsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    dnsPeeringId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("dnsPeeringId"),
    ),
    body: Schema.optional(DnsPeering).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/dnsPeerings",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsInstancesDnsPeeringsRequest>;

export type CreateProjectsLocationsInstancesDnsPeeringsResponse = DnsPeering;
export const CreateProjectsLocationsInstancesDnsPeeringsResponse =
  /*@__PURE__*/ /*#__PURE__*/ DnsPeering;

export type CreateProjectsLocationsInstancesDnsPeeringsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates DNS peering on the given resource. */
export const createProjectsLocationsInstancesDnsPeerings: API.OperationMethod<
  CreateProjectsLocationsInstancesDnsPeeringsRequest,
  CreateProjectsLocationsInstancesDnsPeeringsResponse,
  CreateProjectsLocationsInstancesDnsPeeringsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsInstancesDnsPeeringsRequest,
  output: CreateProjectsLocationsInstancesDnsPeeringsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsInstancesDnsPeeringsRequest {
  /** Required. The name of the DNS peering zone to delete. Format: projects/{project}/locations/{location}/instances/{instance}/dnsPeerings/{dns_peering} */
  name: string;
}

export const DeleteProjectsLocationsInstancesDnsPeeringsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsInstancesDnsPeeringsRequest>;

export type DeleteProjectsLocationsInstancesDnsPeeringsResponse = Empty;
export const DeleteProjectsLocationsInstancesDnsPeeringsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsInstancesDnsPeeringsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes DNS peering on the given resource. */
export const deleteProjectsLocationsInstancesDnsPeerings: API.OperationMethod<
  DeleteProjectsLocationsInstancesDnsPeeringsRequest,
  DeleteProjectsLocationsInstancesDnsPeeringsResponse,
  DeleteProjectsLocationsInstancesDnsPeeringsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsInstancesDnsPeeringsRequest,
  output: DeleteProjectsLocationsInstancesDnsPeeringsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsInstancesDnsPeeringsRequest {
  /** The maximum number of dns peerings to return. The service may return fewer than this value. If unspecified, at most 50 dns peerings will be returned. The maximum value is 200; values above 200 will be coerced to 200. */
  pageSize?: number;
  /** A page token, received from a previous `ListDnsPeerings` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDnsPeerings` must match the call that provided the page token. */
  pageToken?: string;
  /** Required. The parent, which owns this collection of dns peerings. Format: projects/{project}/locations/{location}/instances/{instance} */
  parent: string;
}

export const ListProjectsLocationsInstancesDnsPeeringsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/dnsPeerings" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsInstancesDnsPeeringsRequest>;

export type ListProjectsLocationsInstancesDnsPeeringsResponse =
  ListDnsPeeringsResponse;
export const ListProjectsLocationsInstancesDnsPeeringsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListDnsPeeringsResponse;

export type ListProjectsLocationsInstancesDnsPeeringsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists DNS peerings for a given resource. */
export const listProjectsLocationsInstancesDnsPeerings: API.PaginatedOperationMethod<
  ListProjectsLocationsInstancesDnsPeeringsRequest,
  ListProjectsLocationsInstancesDnsPeeringsResponse,
  ListProjectsLocationsInstancesDnsPeeringsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsInstancesDnsPeeringsRequest,
  output: ListProjectsLocationsInstancesDnsPeeringsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
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
    T.Http({ method: "POST", path: "v1beta1/{+name}:cancel", hasBody: true }),
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
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
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
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
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

export interface ListProjectsLocationsOperationsRequest {
  /** The standard list page size. */
  pageSize?: number;
  /** The standard list filter. */
  filter?: string;
  /** The standard list page token. */
  pageToken?: string;
  /** The name of the operation's parent resource. */
  name: string;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    name: Schema.String.pipe(T.HttpPath("name")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}/operations" }),
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
