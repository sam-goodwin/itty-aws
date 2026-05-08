// ==========================================================================
// Connectors API (connectors v2)
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
  name: "connectors",
  version: "v2",
  rootUrl: "https://connectors.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface UpdateEntitiesWithConditionsResponse {
  /** Response returned by the external system. */
  response?: Record<string, unknown>;
  /** Metadata like service latency, etc. */
  metadata?: Record<string, Record<string, unknown>>;
}

export const UpdateEntitiesWithConditionsResponse: Schema.Schema<UpdateEntitiesWithConditionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    metadata: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.Record(Schema.String, Schema.Unknown),
      ),
    ),
  }).annotate({ identifier: "UpdateEntitiesWithConditionsResponse" });

export interface AccessCredentials {
  /** Duration till the access token expires. */
  expiresIn?: string;
  /** OAuth refresh token. */
  refreshToken?: string;
  /** OAuth access token. */
  accessToken?: string;
}

export const AccessCredentials: Schema.Schema<AccessCredentials> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expiresIn: Schema.optional(Schema.String),
    refreshToken: Schema.optional(Schema.String),
    accessToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccessCredentials" });

export interface ExecuteToolResponse {
  /** Metadata for the tool execution result. */
  _meta?: Record<string, unknown>;
  /** Output from the tool execution. */
  result?: Record<string, unknown>;
  /** Metadata like service latency, etc. */
  metadata?: Record<string, Record<string, unknown>>;
}

export const ExecuteToolResponse: Schema.Schema<ExecuteToolResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    _meta: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    result: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    metadata: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.Record(Schema.String, Schema.Unknown),
      ),
    ),
  }).annotate({ identifier: "ExecuteToolResponse" });

export interface TimeOfDay {
  /** Seconds of a minute. Must be greater than or equal to 0 and typically must be less than or equal to 59. An API may allow the value 60 if it allows leap-seconds. */
  seconds?: number;
  /** Hours of a day in 24 hour format. Must be greater than or equal to 0 and typically must be less than or equal to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time. */
  hours?: number;
  /** Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59. */
  minutes?: number;
  /** Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999. */
  nanos?: number;
}

export const TimeOfDay: Schema.Schema<TimeOfDay> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    seconds: Schema.optional(Schema.Number),
    hours: Schema.optional(Schema.Number),
    minutes: Schema.optional(Schema.Number),
    nanos: Schema.optional(Schema.Number),
  }).annotate({ identifier: "TimeOfDay" });

export interface DailyCycle {
  /** Time within the day to start the operations. */
  startTime?: TimeOfDay;
  /** Output only. Duration of the time window, set by service producer. */
  duration?: string;
}

export const DailyCycle: Schema.Schema<DailyCycle> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(TimeOfDay),
    duration: Schema.optional(Schema.String),
  }).annotate({ identifier: "DailyCycle" });

export interface Schedule {
  /** Time within the window to start the operations. */
  startTime?: TimeOfDay;
  /** Output only. Duration of the time window, set by service producer. */
  duration?: string;
  /** Allows to define schedule that runs specified day of the week. */
  day?:
    | "DAY_OF_WEEK_UNSPECIFIED"
    | "MONDAY"
    | "TUESDAY"
    | "WEDNESDAY"
    | "THURSDAY"
    | "FRIDAY"
    | "SATURDAY"
    | "SUNDAY"
    | (string & {});
}

export const Schedule: Schema.Schema<Schedule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(TimeOfDay),
    duration: Schema.optional(Schema.String),
    day: Schema.optional(Schema.String),
  }).annotate({ identifier: "Schedule" });

export interface WeeklyCycle {
  /** User can specify multiple windows in a week. Minimum of 1 window. */
  schedule?: ReadonlyArray<Schedule>;
}

export const WeeklyCycle: Schema.Schema<WeeklyCycle> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    schedule: Schema.optional(Schema.Array(Schedule)),
  }).annotate({ identifier: "WeeklyCycle" });

export interface MaintenanceWindow {
  /** Daily cycle. */
  dailyCycle?: DailyCycle;
  /** Weekly cycle. */
  weeklyCycle?: WeeklyCycle;
}

export const MaintenanceWindow: Schema.Schema<MaintenanceWindow> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dailyCycle: Schema.optional(DailyCycle),
    weeklyCycle: Schema.optional(WeeklyCycle),
  }).annotate({ identifier: "MaintenanceWindow" });

export interface Connectors_Date {
  /** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
  day?: number;
  /** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
  month?: number;
  /** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
  year?: number;
}

export const Connectors_Date: Schema.Schema<Connectors_Date> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    day: Schema.optional(Schema.Number),
    month: Schema.optional(Schema.Number),
    year: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Connectors_Date" });

export interface DenyMaintenancePeriod {
  /** Deny period start date. This can be: * A full date, with non-zero year, month and day values. * A month and day value, with a zero year. Allows recurring deny periods each year. Date matching this period will have to be the same or after the start. */
  startDate?: Connectors_Date;
  /** Deny period end date. This can be: * A full date, with non-zero year, month and day values. * A month and day value, with a zero year. Allows recurring deny periods each year. Date matching this period will have to be before the end. */
  endDate?: Connectors_Date;
  /** Time in UTC when the Blackout period starts on start_date and ends on end_date. This can be: * Full time. * All zeros for 00:00:00 UTC */
  time?: TimeOfDay;
}

export const DenyMaintenancePeriod: Schema.Schema<DenyMaintenancePeriod> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startDate: Schema.optional(Connectors_Date),
    endDate: Schema.optional(Connectors_Date),
    time: Schema.optional(TimeOfDay),
  }).annotate({ identifier: "DenyMaintenancePeriod" });

export interface UpdatePolicy {
  /** Optional. Maintenance window that is applied to resources covered by this policy. */
  window?: MaintenanceWindow;
  /** Optional. Relative scheduling channel applied to resource. */
  channel?:
    | "UPDATE_CHANNEL_UNSPECIFIED"
    | "EARLIER"
    | "LATER"
    | "WEEK1"
    | "WEEK2"
    | "WEEK5"
    | (string & {});
  /** Deny Maintenance Period that is applied to resource to indicate when maintenance is forbidden. The protocol supports zero-to-many such periods, but the current SLM Rollout implementation only supports zero-to-one. */
  denyMaintenancePeriods?: ReadonlyArray<DenyMaintenancePeriod>;
}

export const UpdatePolicy: Schema.Schema<UpdatePolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    window: Schema.optional(MaintenanceWindow),
    channel: Schema.optional(Schema.String),
    denyMaintenancePeriods: Schema.optional(
      Schema.Array(DenyMaintenancePeriod),
    ),
  }).annotate({ identifier: "UpdatePolicy" });

export interface NotificationParameter {
  /** Optional. Array of string values. e.g. instance's replica information. */
  values?: ReadonlyArray<string>;
}

export const NotificationParameter: Schema.Schema<NotificationParameter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    values: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "NotificationParameter" });

export interface MaintenanceSchedule {
  /** The scheduled start time for the maintenance. */
  startTime?: string;
  /** The rollout management policy this maintenance schedule is associated with. When doing reschedule update request, the reschedule should be against this given policy. */
  rolloutManagementPolicy?: string;
  /** The scheduled end time for the maintenance. */
  endTime?: string;
  /** This field is deprecated, and will be always set to true since reschedule can happen multiple times now. This field should not be removed until all service producers remove this for their customers. */
  canReschedule?: boolean;
  /** schedule_deadline_time is the time deadline any schedule start time cannot go beyond, including reschedule. It's normally the initial schedule start time plus maintenance window length (1 day or 1 week). Maintenance cannot be scheduled to start beyond this deadline. */
  scheduleDeadlineTime?: string;
}

export const MaintenanceSchedule: Schema.Schema<MaintenanceSchedule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
    rolloutManagementPolicy: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    canReschedule: Schema.optional(Schema.Boolean),
    scheduleDeadlineTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "MaintenanceSchedule" });

export interface ProvisionedResource {
  /** URL identifying the resource, e.g. "https://www.googleapis.com/compute/v1/projects/...)". */
  resourceUrl?: string;
  /** Type of the resource. This can be either a GCP resource or a custom one (e.g. another cloud provider's VM). For GCP compute resources use singular form of the names listed in GCP compute API documentation (https://cloud.google.com/compute/docs/reference/rest/v1/), prefixed with 'compute-', for example: 'compute-instance', 'compute-disk', 'compute-autoscaler'. */
  resourceType?: string;
}

export const ProvisionedResource: Schema.Schema<ProvisionedResource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUrl: Schema.optional(Schema.String),
    resourceType: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProvisionedResource" });

export interface SloEligibility {
  /** Whether an instance is eligible or ineligible. */
  eligible?: boolean;
  /** User-defined reason for the current value of instance eligibility. Usually, this can be directly mapped to the internal state. An empty reason is allowed. */
  reason?: string;
}

export const SloEligibility: Schema.Schema<SloEligibility> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eligible: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.String),
  }).annotate({ identifier: "SloEligibility" });

export interface PerSliSloEligibility {
  /** An entry in the eligibilities map specifies an eligibility for a particular SLI for the given instance. The SLI key in the name must be a valid SLI name specified in the Eligibility Exporter binary flags otherwise an error will be emitted by Eligibility Exporter and the oncaller will be alerted. If an SLI has been defined in the binary flags but the eligibilities map does not contain it, the corresponding SLI time series will not be emitted by the Eligibility Exporter. This ensures a smooth rollout and compatibility between the data produced by different versions of the Eligibility Exporters. If eligibilities map contains a key for an SLI which has not been declared in the binary flags, there will be an error message emitted in the Eligibility Exporter log and the metric for the SLI in question will not be emitted. */
  eligibilities?: Record<string, SloEligibility>;
}

export const PerSliSloEligibility: Schema.Schema<PerSliSloEligibility> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eligibilities: Schema.optional(
      Schema.Record(Schema.String, SloEligibility),
    ),
  }).annotate({ identifier: "PerSliSloEligibility" });

export interface NodeSloMetadata {
  /** The id of the node. This should be equal to SaasInstanceNode.node_id. */
  nodeId?: string;
  /** The location of the node, if different from instance location. */
  location?: string;
  /** If present, this will override eligibility for the node coming from instance or exclusions for specified SLIs. */
  perSliEligibility?: PerSliSloEligibility;
}

export const NodeSloMetadata: Schema.Schema<NodeSloMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodeId: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    perSliEligibility: Schema.optional(PerSliSloEligibility),
  }).annotate({ identifier: "NodeSloMetadata" });

export interface SloMetadata {
  /** Name of the SLO tier the Instance belongs to. This name will be expected to match the tiers specified in the service SLO configuration. Field is mandatory and must not be empty. */
  tier?: string;
  /** Optional. List of nodes. Some producers need to use per-node metadata to calculate SLO. This field allows such producers to publish per-node SLO meta data, which will be consumed by SSA Eligibility Exporter and published in the form of per node metric to Monarch. */
  nodes?: ReadonlyArray<NodeSloMetadata>;
  /** Optional. Multiple per-instance SLI eligibilities which apply for individual SLIs. */
  perSliEligibility?: PerSliSloEligibility;
}

export const SloMetadata: Schema.Schema<SloMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tier: Schema.optional(Schema.String),
    nodes: Schema.optional(Schema.Array(NodeSloMetadata)),
    perSliEligibility: Schema.optional(PerSliSloEligibility),
  }).annotate({ identifier: "SloMetadata" });

export interface MaintenancePolicy {
  /** Maintenance policy applicable to instance update. */
  updatePolicy?: UpdatePolicy;
  /** Optional. Resource labels to represent user provided metadata. Each label is a key-value pair, where both the key and the value are arbitrary strings provided by the user. */
  labels?: Record<string, string>;
  /** Required. MaintenancePolicy name using the form: `projects/{project_id}/locations/{location_id}/maintenancePolicies/{maintenance_policy_id}` where {project_id} refers to a GCP consumer project ID, {location_id} refers to a GCP region/zone, {maintenance_policy_id} must be 1-63 characters long and match the regular expression `[a-z0-9]([-a-z0-9]*[a-z0-9])?`. */
  name?: string;
  /** Output only. The time when the resource was updated. */
  updateTime?: string;
  /** Optional. Description of what this policy is for. Create/Update methods return INVALID_ARGUMENT if the length is greater than 512. */
  description?: string;
  /** Optional. The state of the policy. */
  state?: "STATE_UNSPECIFIED" | "READY" | "DELETING" | (string & {});
  /** Output only. The time when the resource was created. */
  createTime?: string;
}

export const MaintenancePolicy: Schema.Schema<MaintenancePolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updatePolicy: Schema.optional(UpdatePolicy),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "MaintenancePolicy" });

export interface MaintenanceSettings {
  /** Optional. The MaintenancePolicies that have been attached to the instance. The key must be of the type name of the oneof policy name defined in MaintenancePolicy, and the embedded policy must define the same policy type. For details, please refer to go/mr-user-guide. Should not be set if maintenance_policy_names is set. If only the name is needed, then only populate MaintenancePolicy.name. */
  maintenancePolicies?: Record<string, MaintenancePolicy>;
  /** Optional. If the update call is triggered from rollback, set the value as true. */
  isRollback?: boolean;
  /** Optional. Exclude instance from maintenance. When true, rollout service will not attempt maintenance on the instance. Rollout service will include the instance in reported rollout progress as not attempted. */
  exclude?: boolean;
}

export const MaintenanceSettings: Schema.Schema<MaintenanceSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maintenancePolicies: Schema.optional(
      Schema.Record(Schema.String, MaintenancePolicy),
    ),
    isRollback: Schema.optional(Schema.Boolean),
    exclude: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "MaintenanceSettings" });

export interface Instance {
  /** consumer_defined_name is the name of the instance set by the service consumers. Generally this is different from the `name` field which reperesents the system-assigned id of the instance which the service consumers do not recognize. This is a required field for tenants onboarding to Maintenance Window notifications (go/slm-rollout-maintenance-policies#prerequisites). */
  consumerDefinedName?: string;
  /** Software versions that are used to deploy this instance. This can be mutated by rollout services. */
  softwareVersions?: Record<string, string>;
  /** Output only. Custom string attributes used primarily to expose producer-specific information in monitoring dashboards. See go/get-instance-metadata. */
  producerMetadata?: Record<string, string>;
  /** Optional. notification_parameter are information that service producers may like to include that is not relevant to Rollout. This parameter will only be passed to Gamma and Cloud Logging for notification/logging purpose. */
  notificationParameters?: Record<string, NotificationParameter>;
  /** Optional. Resource labels to represent user provided metadata. Each label is a key-value pair, where both the key and the value are arbitrary strings provided by the user. */
  labels?: Record<string, string>;
  /** Output only. Current lifecycle state of the resource (e.g. if it's being created or ready to use). */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "READY"
    | "UPDATING"
    | "REPAIRING"
    | "DELETING"
    | "ERROR"
    | (string & {});
  /** The MaintenanceSchedule contains the scheduling information of published maintenance schedule with same key as software_versions. */
  maintenanceSchedules?: Record<string, MaintenanceSchedule>;
  /** Output only. Timestamp when the resource was created. */
  createTime?: string;
  /** Optional. The MaintenancePolicies that have been attached to the instance. The key must be of the type name of the oneof policy name defined in MaintenancePolicy, and the referenced policy must define the same policy type. For details, please refer to go/mr-user-guide. Should not be set if maintenance_settings.maintenance_policies is set. */
  maintenancePolicyNames?: Record<string, string>;
  /** Optional. The consumer_project_number associated with this Apigee instance. This field is added specifically to support Apigee integration with SLM Rollout and UMM. It represents the numerical project ID of the GCP project that consumes this Apigee instance. It is used for SLM rollout notifications and UMM integration, enabling proper mapping to customer projects and log delivery for Apigee instances. This field complements consumer_project_id and may be used for specific Apigee scenarios where the numerical ID is required. */
  consumerProjectNumber?: string;
  /** Optional. The instance_type of this instance of format: projects/{project_number}/locations/{location_id}/instanceTypes/{instance_type_id}. Instance Type represents a high-level tier or SKU of the service that this instance belong to. When enabled(eg: Maintenance Rollout), Rollout uses 'instance_type' along with 'software_versions' to determine whether instance needs an update or not. */
  instanceType?: string;
  /** Unique name of the resource. It uses the form: `projects/{project_number}/locations/{location_id}/instances/{instance_id}` Note: This name is passed, stored and logged across the rollout system. So use of consumer project_id or any other consumer PII in the name is strongly discouraged for wipeout (go/wipeout) compliance. See go/elysium/project_ids#storage-guidance for more details. */
  name?: string;
  /** Output only. Timestamp when the resource was last modified. */
  updateTime?: string;
  /** Output only. ID of the associated GCP tenant project. See go/get-instance-metadata. */
  tenantProjectId?: string;
  /** Output only. The list of data plane resources provisioned for this instance, e.g. compute VMs. See go/get-instance-metadata. */
  provisionedResources?: ReadonlyArray<ProvisionedResource>;
  /** Output only. SLO metadata for instance classification in the Standardized dataplane SLO platform. See go/cloud-ssa-standard-slo for feature description. */
  sloMetadata?: SloMetadata;
  /** Link to the SLM instance template. Only populated when updating SLM instances via SSA's Actuation service adaptor. Service producers with custom control plane (e.g. Cloud SQL) doesn't need to populate this field. Instead they should use software_versions. */
  slmInstanceTemplate?: string;
  /** Optional. The MaintenanceSettings associated with instance. */
  maintenanceSettings?: MaintenanceSettings;
}

export const Instance: Schema.Schema<Instance> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    consumerDefinedName: Schema.optional(Schema.String),
    softwareVersions: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    producerMetadata: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    notificationParameters: Schema.optional(
      Schema.Record(Schema.String, NotificationParameter),
    ),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    state: Schema.optional(Schema.String),
    maintenanceSchedules: Schema.optional(
      Schema.Record(Schema.String, MaintenanceSchedule),
    ),
    createTime: Schema.optional(Schema.String),
    maintenancePolicyNames: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    consumerProjectNumber: Schema.optional(Schema.String),
    instanceType: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    tenantProjectId: Schema.optional(Schema.String),
    provisionedResources: Schema.optional(Schema.Array(ProvisionedResource)),
    sloMetadata: Schema.optional(SloMetadata),
    slmInstanceTemplate: Schema.optional(Schema.String),
    maintenanceSettings: Schema.optional(MaintenanceSettings),
  }).annotate({ identifier: "Instance" });

export interface Resource {
  /** The URI of this resource. */
  uri?: string;
  /** The size of the raw resource content, in bytes, if known. */
  size?: string;
  /** Metadata for the resource. */
  _meta?: Record<string, unknown>;
  /** A human-readable name for this resource. */
  name?: string;
  /** A description of what this resource represents. */
  description?: string;
  /** The MIME type of this resource, if known. */
  mimeType?: string;
}

export const Resource: Schema.Schema<Resource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    size: Schema.optional(Schema.String),
    _meta: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    mimeType: Schema.optional(Schema.String),
  }).annotate({ identifier: "Resource" });

export interface RefreshAccessTokenResponse {
  /** Metadata like service latency, etc. */
  metadata?: Record<string, Record<string, unknown>>;
  accessCredentials?: AccessCredentials;
}

export const RefreshAccessTokenResponse: Schema.Schema<RefreshAccessTokenResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.Record(Schema.String, Schema.Unknown),
      ),
    ),
    accessCredentials: Schema.optional(AccessCredentials),
  }).annotate({ identifier: "RefreshAccessTokenResponse" });

export interface ExecuteSqlQueryResponse {
  /** In the case of successful execution of the query the response contains results returned by the external system. For example, the result rows of the query are contained in the 'results' Struct list - "results": [ { "field1": "val1", "field2": "val2",.. },.. ] Each Struct row can contain fields any type of like nested Structs or lists. */
  results?: ReadonlyArray<Record<string, unknown>>;
}

export const ExecuteSqlQueryResponse: Schema.Schema<ExecuteSqlQueryResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).annotate({ identifier: "ExecuteSqlQueryResponse" });

export interface CheckReadinessResponse {
  status?: string;
}

export const CheckReadinessResponse: Schema.Schema<CheckReadinessResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.String),
  }).annotate({ identifier: "CheckReadinessResponse" });

export interface ExecutionConfig {
  /** headers to be used for the request. For example: headers:'{"x-integration-connectors-managed-connection-id":"conn-id","x-integration-connectors-runtime-config":"runtime-cfg"}' */
  headers?: string;
}

export const ExecutionConfig: Schema.Schema<ExecutionConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    headers: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExecutionConfig" });

export interface ToolSpec {
  /** List of tool definitions. */
  toolDefinitions?: ReadonlyArray<Record<string, unknown>>;
  /** Version of the tool spec. Format: providerId/connectorId/versionId/toolSpecId */
  toolSpecVersion?: string;
}

export const ToolSpec: Schema.Schema<ToolSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    toolDefinitions: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    toolSpecVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "ToolSpec" });

export interface GetResourcePostRequest {
  /** execution config for the request. */
  executionConfig?: ExecutionConfig;
  /** List of tool specifications. */
  toolSpec?: ToolSpec;
}

export const GetResourcePostRequest: Schema.Schema<GetResourcePostRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    executionConfig: Schema.optional(ExecutionConfig),
    toolSpec: Schema.optional(ToolSpec),
  }).annotate({ identifier: "GetResourcePostRequest" });

export interface ToolAnnotations {
  /** If true, the tool does not modify its environment. */
  readOnlyHint?: boolean;
  /** If true, the tool may perform destructive updates to its environment. If false, the tool performs only additive updates. (This property is meaningful only when `read_only_hint == false`) */
  destructiveHint?: boolean;
  /** If true, calling the tool repeatedly with the same arguments will have no additional effect on the environment. (This property is meaningful only when `read_only_hint == false`) */
  idempotentHint?: boolean;
  /** A human-readable title for the tool. */
  title?: string;
  /** If true, this tool may interact with an "open world" of external entities. If false, the tool's domain of interaction is closed. For example, the world of a web search tool is open, whereas that of a memory tool is not. */
  openWorldHint?: boolean;
}

export const ToolAnnotations: Schema.Schema<ToolAnnotations> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    readOnlyHint: Schema.optional(Schema.Boolean),
    destructiveHint: Schema.optional(Schema.Boolean),
    idempotentHint: Schema.optional(Schema.Boolean),
    title: Schema.optional(Schema.String),
    openWorldHint: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ToolAnnotations" });

export interface OAuth2Config {
  /** Client ID for the OAuth2 flow. */
  clientId?: string;
  /** Authorization Server URL/Token Endpoint for Authorization Code Flow */
  authUri?: string;
  /** Client secret for the OAuth2 flow. */
  clientSecret?: string;
}

export const OAuth2Config: Schema.Schema<OAuth2Config> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clientId: Schema.optional(Schema.String),
    authUri: Schema.optional(Schema.String),
    clientSecret: Schema.optional(Schema.String),
  }).annotate({ identifier: "OAuth2Config" });

export interface RefreshAccessTokenRequest {
  /** OAuth2Config contains the OAuth2 config for the connection. */
  oauth2Config?: OAuth2Config;
  /** ExecutionConfig contains the configuration for the execution of the request. */
  executionConfig?: ExecutionConfig;
  /** Optional. Refresh Token String. If the Refresh Token is not provided, the runtime will read the data from the secret manager. */
  refreshToken?: string;
}

export const RefreshAccessTokenRequest: Schema.Schema<RefreshAccessTokenRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    oauth2Config: Schema.optional(OAuth2Config),
    executionConfig: Schema.optional(ExecutionConfig),
    refreshToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "RefreshAccessTokenRequest" });

export interface ExecuteActionRequest {
  /** Parameters for executing the action. The parameters can be key/value pairs or nested structs. */
  parameters?: Record<string, unknown>;
  /** Execution config for the request. */
  executionConfig?: ExecutionConfig;
}

export const ExecuteActionRequest: Schema.Schema<ExecuteActionRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    executionConfig: Schema.optional(ExecutionConfig),
  }).annotate({ identifier: "ExecuteActionRequest" });

export interface JsonSchema {
  /** Whether the value is write-only. */
  writeOnly?: boolean;
  /** Number must be a multiple of this value. */
  multipleOf?: number;
  /** Schema that must be valid if the "if" schema is valid. */
  then?: JsonSchema;
  /** A reference to another schema. */
  $ref?: string;
  /** Maximum value of the number field. */
  maximum?: unknown;
  /** Schema for property names. */
  propertyNames?: JsonSchema;
  /** JSON Schema Validation: A Vocabulary for Structural Validation of JSON */
  type?: ReadonlyArray<string>;
  /** A comment on the schema. */
  $comment?: string;
  /** Schema for additional items. */
  additionalItems?: JsonSchema;
  /** Minimum number of properties. */
  minProperties?: number;
  /** Schema for additional properties. */
  additionalProperties?: JsonSchema;
  /** Definitions for the schema. */
  $defs?: Record<string, JsonSchema>;
  /** Format of the value as per https://json-schema.org/understanding-json-schema/reference/string.html#format */
  format?: string;
  /** Maximum number of properties. */
  maxProperties?: number;
  /** Definitions for the schema. */
  definitions?: Record<string, JsonSchema>;
  /** Whether the minimum number value is exclusive. */
  exclusiveMinimum?: unknown;
  /** Maximum number of items in the array field. */
  maxItems?: number;
  /** Additional details apart from standard json schema fields, this gives flexibility to store metadata about the schema */
  additionalDetails?: Record<string, unknown>;
  /** Encoding of the content. */
  contentEncoding?: string;
  /** Examples of the value. */
  examples?: ReadonlyArray<unknown>;
  /** Minimum number of items in the array field. */
  minItems?: number;
  /** The default value of the field or object described by this schema. */
  default?: unknown;
  /** Whether the maximum number value is exclusive. */
  exclusiveMaximum?: unknown;
  /** Maximum length of the string field. */
  maxLength?: number;
  /** Whether this property is required. */
  required?: ReadonlyArray<string>;
  /** JDBC datatype of the field. */
  jdbcType?:
    | "DATA_TYPE_UNSPECIFIED"
    | "INT"
    | "SMALLINT"
    | "DOUBLE"
    | "DATE"
    | "DATETIME"
    | "TIME"
    | "STRING"
    | "LONG"
    | "BOOLEAN"
    | "DECIMAL"
    | "UUID"
    | "BLOB"
    | "BIT"
    | "TINYINT"
    | "INTEGER"
    | "BIGINT"
    | "FLOAT"
    | "REAL"
    | "NUMERIC"
    | "CHAR"
    | "VARCHAR"
    | "LONGVARCHAR"
    | "TIMESTAMP"
    | "NCHAR"
    | "NVARCHAR"
    | "LONGNVARCHAR"
    | "NULL"
    | "OTHER"
    | "JAVA_OBJECT"
    | "DISTINCT"
    | "STRUCT"
    | "ARRAY"
    | "CLOB"
    | "REF"
    | "DATALINK"
    | "ROWID"
    | "BINARY"
    | "VARBINARY"
    | "LONGVARBINARY"
    | "NCLOB"
    | "SQLXML"
    | "REF_CURSOR"
    | "TIME_WITH_TIMEZONE"
    | "TIMESTAMP_WITH_TIMEZONE"
    | (string & {});
  /** A description of this schema. */
  description?: string;
  /** Schema that must be valid if the "if" schema is valid. */
  if?: JsonSchema;
  /** Minimum length of the string field. */
  minLength?: number;
  /** The URI defining the schema. */
  $schema?: string;
  /** Dependencies for the schema. */
  dependencies?: Record<string, unknown>;
  /** The child schemas, applicable only if this is of type `object`. The key is the name of the property and the value is the json schema that describes that property */
  properties?: Record<string, JsonSchema>;
  /** Possible values for an enumeration. This works in conjunction with `type` to represent types with a fixed set of legal values */
  enum?: ReadonlyArray<unknown>;
  /** The URI defining the core schema meta-schema. */
  $id?: string;
  /** A title of the schema. */
  title?: string;
  /** Whether the value is read-only. */
  readOnly?: boolean;
  /** Schema that must be valid if the "if" schema is invalid. */
  else?: JsonSchema;
  /** Schema that applies to array values, applicable only if this is of type `array`. */
  items?: JsonSchema;
  /** Whether the items in the array field are unique. */
  uniqueItems?: boolean;
  /** Minimum value of the number field. */
  minimum?: unknown;
  /** Schema that must be valid against at least one of the sub-schemas. */
  anyOf?: ReadonlyArray<JsonSchema>;
  /** Schema that must not be valid. */
  not?: JsonSchema;
  /** Media type of the content. */
  contentMediaType?: string;
  /** Const value that the data must match. */
  const?: unknown;
  /** Regex pattern of the string field. This is a string value that describes the regular expression that the string value should match. */
  pattern?: string;
  /** Schema that must be valid against all of the sub-schemas. */
  allOf?: ReadonlyArray<JsonSchema>;
  /** Schema that applies to at least one item in an array. */
  contains?: JsonSchema;
  /** Schema that must be valid against at least one of the sub-schemas. */
  oneOf?: ReadonlyArray<JsonSchema>;
  /** Pattern properties for the schema. */
  patternProperties?: Record<string, JsonSchema>;
}

export const JsonSchema: Schema.Schema<JsonSchema> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      writeOnly: Schema.optional(Schema.Boolean),
      multipleOf: Schema.optional(Schema.Number),
      then: Schema.optional(JsonSchema),
      $ref: Schema.optional(Schema.String),
      maximum: Schema.optional(Schema.Unknown),
      propertyNames: Schema.optional(JsonSchema),
      type: Schema.optional(Schema.Array(Schema.String)),
      $comment: Schema.optional(Schema.String),
      additionalItems: Schema.optional(JsonSchema),
      minProperties: Schema.optional(Schema.Number),
      additionalProperties: Schema.optional(JsonSchema),
      $defs: Schema.optional(Schema.Record(Schema.String, JsonSchema)),
      format: Schema.optional(Schema.String),
      maxProperties: Schema.optional(Schema.Number),
      definitions: Schema.optional(Schema.Record(Schema.String, JsonSchema)),
      exclusiveMinimum: Schema.optional(Schema.Unknown),
      maxItems: Schema.optional(Schema.Number),
      additionalDetails: Schema.optional(
        Schema.Record(Schema.String, Schema.Unknown),
      ),
      contentEncoding: Schema.optional(Schema.String),
      examples: Schema.optional(Schema.Array(Schema.Unknown)),
      minItems: Schema.optional(Schema.Number),
      default: Schema.optional(Schema.Unknown),
      exclusiveMaximum: Schema.optional(Schema.Unknown),
      maxLength: Schema.optional(Schema.Number),
      required: Schema.optional(Schema.Array(Schema.String)),
      jdbcType: Schema.optional(Schema.String),
      description: Schema.optional(Schema.String),
      if: Schema.optional(JsonSchema),
      minLength: Schema.optional(Schema.Number),
      $schema: Schema.optional(Schema.String),
      dependencies: Schema.optional(
        Schema.Record(Schema.String, Schema.Unknown),
      ),
      properties: Schema.optional(Schema.Record(Schema.String, JsonSchema)),
      enum: Schema.optional(Schema.Array(Schema.Unknown)),
      $id: Schema.optional(Schema.String),
      title: Schema.optional(Schema.String),
      readOnly: Schema.optional(Schema.Boolean),
      else: Schema.optional(JsonSchema),
      items: Schema.optional(JsonSchema),
      uniqueItems: Schema.optional(Schema.Boolean),
      minimum: Schema.optional(Schema.Unknown),
      anyOf: Schema.optional(Schema.Array(JsonSchema)),
      not: Schema.optional(JsonSchema),
      contentMediaType: Schema.optional(Schema.String),
      const: Schema.optional(Schema.Unknown),
      pattern: Schema.optional(Schema.String),
      allOf: Schema.optional(Schema.Array(JsonSchema)),
      contains: Schema.optional(JsonSchema),
      oneOf: Schema.optional(Schema.Array(JsonSchema)),
      patternProperties: Schema.optional(
        Schema.Record(Schema.String, JsonSchema),
      ),
    }),
  ).annotate({ identifier: "JsonSchema" }) as any as Schema.Schema<JsonSchema>;

export interface Tool {
  /** JSON schema for the input parameters of the tool. */
  inputSchema?: JsonSchema;
  /** List of tool names that this tool depends on. */
  dependsOn?: ReadonlyArray<string>;
  /** Annotations for the tool. */
  annotations?: ToolAnnotations;
  /** JSON schema for the output of the tool. */
  outputSchema?: JsonSchema;
  /** Metadata for the tool. */
  _meta?: Record<string, unknown>;
  /** Name of the tool. */
  name?: string;
  /** Description of the tool. */
  description?: string;
}

export const Tool: Schema.Schema<Tool> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inputSchema: Schema.optional(JsonSchema),
    dependsOn: Schema.optional(Schema.Array(Schema.String)),
    annotations: Schema.optional(ToolAnnotations),
    outputSchema: Schema.optional(JsonSchema),
    _meta: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "Tool" });

export interface AuthCodeData {
  /** OAuth PKCE verifier, needed if PKCE is enabled for this particular connection. */
  pkceVerifier?: string;
  /** OAuth authorization code. */
  authCode?: string;
  /** OAuth redirect URI passed in during the auth code flow, required by some OAuth backends. */
  redirectUri?: string;
  /** Scopes the connection will request when the user performs the auth code flow. */
  scopes?: ReadonlyArray<string>;
}

export const AuthCodeData: Schema.Schema<AuthCodeData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pkceVerifier: Schema.optional(Schema.String),
    authCode: Schema.optional(Schema.String),
    redirectUri: Schema.optional(Schema.String),
    scopes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "AuthCodeData" });

export interface ExchangeAuthCodeRequest {
  /** ExecutionConfig contains the configuration for the execution of the request. */
  executionConfig?: ExecutionConfig;
  /** Optional. AuthCodeData contains the data the runtime requires to exchange for access and refresh tokens. If the data is not provided, the runtime will read the data from the secret manager. */
  authCodeData?: AuthCodeData;
  /** OAuth2Config contains the OAuth2 config for the connection. */
  oauth2Config?: OAuth2Config;
}

export const ExchangeAuthCodeRequest: Schema.Schema<ExchangeAuthCodeRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    executionConfig: Schema.optional(ExecutionConfig),
    authCodeData: Schema.optional(AuthCodeData),
    oauth2Config: Schema.optional(OAuth2Config),
  }).annotate({ identifier: "ExchangeAuthCodeRequest" });

export interface ListToolsResponse {
  /** List of available tools. */
  tools?: ReadonlyArray<Tool>;
  /** Metadata like service latency, etc. */
  metadata?: Record<string, Record<string, unknown>>;
  /** Next page token. */
  nextPageToken?: string;
}

export const ListToolsResponse: Schema.Schema<ListToolsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tools: Schema.optional(Schema.Array(Tool)),
    metadata: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.Record(Schema.String, Schema.Unknown),
      ),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListToolsResponse" });

export interface Reference {
  /** Name of reference entity type. */
  type?: string;
  /** Name of the reference field. */
  name?: string;
}

export const Reference: Schema.Schema<Reference> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Reference" });

export interface QueryParameter {
  value?: unknown;
  dataType?:
    | "DATA_TYPE_UNSPECIFIED"
    | "INT"
    | "SMALLINT"
    | "DOUBLE"
    | "DATE"
    | "DATETIME"
    | "TIME"
    | "STRING"
    | "LONG"
    | "BOOLEAN"
    | "DECIMAL"
    | "UUID"
    | "BLOB"
    | "BIT"
    | "TINYINT"
    | "INTEGER"
    | "BIGINT"
    | "FLOAT"
    | "REAL"
    | "NUMERIC"
    | "CHAR"
    | "VARCHAR"
    | "LONGVARCHAR"
    | "TIMESTAMP"
    | "NCHAR"
    | "NVARCHAR"
    | "LONGNVARCHAR"
    | "NULL"
    | "OTHER"
    | "JAVA_OBJECT"
    | "DISTINCT"
    | "STRUCT"
    | "ARRAY"
    | "CLOB"
    | "REF"
    | "DATALINK"
    | "ROWID"
    | "BINARY"
    | "VARBINARY"
    | "LONGVARBINARY"
    | "NCLOB"
    | "SQLXML"
    | "REF_CURSOR"
    | "TIME_WITH_TIMEZONE"
    | "TIMESTAMP_WITH_TIMEZONE"
    | (string & {});
}

export const QueryParameter: Schema.Schema<QueryParameter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Unknown),
    dataType: Schema.optional(Schema.String),
  }).annotate({ identifier: "QueryParameter" });

export interface ExchangeAuthCodeResponse {
  accessCredentials?: AccessCredentials;
  /** Metadata like service latency, etc. */
  metadata?: Record<string, Record<string, unknown>>;
}

export const ExchangeAuthCodeResponse: Schema.Schema<ExchangeAuthCodeResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accessCredentials: Schema.optional(AccessCredentials),
    metadata: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.Record(Schema.String, Schema.Unknown),
      ),
    ),
  }).annotate({ identifier: "ExchangeAuthCodeResponse" });

export interface ExecuteToolRequest {
  /** Input parameters for the tool. */
  parameters?: Record<string, unknown>;
  /** execution config for the request. */
  executionConfig?: ExecutionConfig;
  /** Tool definition for the tool to be executed. */
  toolDefinition?: Record<string, unknown>;
}

export const ExecuteToolRequest: Schema.Schema<ExecuteToolRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    executionConfig: Schema.optional(ExecutionConfig),
    toolDefinition: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
  }).annotate({ identifier: "ExecuteToolRequest" });

export interface GetResourceResponse {
  /** The MIME type of the resource. */
  mimeType?: string;
  /** The content of the resource. */
  data?: string;
  /** Metadata like service latency, etc. */
  metadata?: Record<string, Record<string, unknown>>;
  /** Metadata for the resource. */
  _meta?: Record<string, unknown>;
}

export const GetResourceResponse: Schema.Schema<GetResourceResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mimeType: Schema.optional(Schema.String),
    data: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.Record(Schema.String, Schema.Unknown),
      ),
    ),
    _meta: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "GetResourceResponse" });

export interface Entity {
  /** Output only. Resource name of the Entity. Format: projects/{project}/locations/{location}/connections/{connection}/entityTypes/{type}/entities/{id} */
  name?: string;
  /** Fields of the entity. The key is name of the field and the value contains the applicable `google.protobuf.Value` entry for this field. */
  fields?: Record<string, unknown>;
  /** Metadata like service latency, etc. */
  metadata?: Record<string, Record<string, unknown>>;
}

export const Entity: Schema.Schema<Entity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    fields: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    metadata: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.Record(Schema.String, Schema.Unknown),
      ),
    ),
  }).annotate({ identifier: "Entity" });

export interface Query {
  /** Sets the limit for the maximum number of rows returned after the query execution. */
  maxRows?: string;
  /** Required. Sql query to execute. */
  query?: string;
  /** Sets the number of seconds the driver will wait for a query to execute. */
  timeout?: string;
  /** In the struct, the value corresponds to the value of query parameter and date type corresponds to the date type of the query parameter. */
  queryParameters?: ReadonlyArray<QueryParameter>;
}

export const Query: Schema.Schema<Query> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxRows: Schema.optional(Schema.String),
    query: Schema.optional(Schema.String),
    timeout: Schema.optional(Schema.String),
    queryParameters: Schema.optional(Schema.Array(QueryParameter)),
  }).annotate({ identifier: "Query" });

export interface ExecuteSqlQueryRequest {
  /** Required. SQL statement passed by clients like Integration Platform, the query is passed as-is to the driver used for interfacing with external systems. */
  query?: Query;
}

export const ExecuteSqlQueryRequest: Schema.Schema<ExecuteSqlQueryRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    query: Schema.optional(Query),
  }).annotate({ identifier: "ExecuteSqlQueryRequest" });

export interface Field {
  /** Specifies whether a null value is allowed. */
  nullable?: boolean;
  /** The data type of the Field. */
  dataType?:
    | "DATA_TYPE_UNSPECIFIED"
    | "INT"
    | "SMALLINT"
    | "DOUBLE"
    | "DATE"
    | "DATETIME"
    | "TIME"
    | "STRING"
    | "LONG"
    | "BOOLEAN"
    | "DECIMAL"
    | "UUID"
    | "BLOB"
    | "BIT"
    | "TINYINT"
    | "INTEGER"
    | "BIGINT"
    | "FLOAT"
    | "REAL"
    | "NUMERIC"
    | "CHAR"
    | "VARCHAR"
    | "LONGVARCHAR"
    | "TIMESTAMP"
    | "NCHAR"
    | "NVARCHAR"
    | "LONGNVARCHAR"
    | "NULL"
    | "OTHER"
    | "JAVA_OBJECT"
    | "DISTINCT"
    | "STRUCT"
    | "ARRAY"
    | "CLOB"
    | "REF"
    | "DATALINK"
    | "ROWID"
    | "BINARY"
    | "VARBINARY"
    | "LONGVARBINARY"
    | "NCLOB"
    | "SQLXML"
    | "REF_CURSOR"
    | "TIME_WITH_TIMEZONE"
    | "TIMESTAMP_WITH_TIMEZONE"
    | (string & {});
  /** The following map contains fields that are not explicitly mentioned above,this give connectors the flexibility to add new metadata fields. */
  additionalDetails?: Record<string, unknown>;
  /** The following boolean field specifies if the current Field acts as a primary key or id if the parent is of type entity. */
  key?: boolean;
  /** Reference captures the association between two different entity types. Value links to the reference of another entity type. */
  reference?: Reference;
  /** JsonSchema of the field, applicable only if field is of type `STRUCT` */
  jsonSchema?: JsonSchema;
  /** A brief description of the Field. */
  description?: string;
  /** The following field specifies the default value of the Field provided by the external system if a value is not provided. */
  defaultValue?: unknown;
  /** Name of the Field. */
  name?: string;
}

export const Field: Schema.Schema<Field> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nullable: Schema.optional(Schema.Boolean),
    dataType: Schema.optional(Schema.String),
    additionalDetails: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    key: Schema.optional(Schema.Boolean),
    reference: Schema.optional(Reference),
    jsonSchema: Schema.optional(JsonSchema),
    description: Schema.optional(Schema.String),
    defaultValue: Schema.optional(Schema.Unknown),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Field" });

export interface EntityType {
  /** JsonSchema representation of this entity's schema */
  jsonSchema?: JsonSchema;
  /** The name of the entity type. */
  name?: string;
  /** List containing metadata information about each field of the entity type. */
  fields?: ReadonlyArray<Field>;
  /** Metadata like service latency, etc. */
  metadata?: Record<string, Record<string, unknown>>;
  operations?: ReadonlyArray<
    | "OPERATION_UNSPECIFIED"
    | "LIST"
    | "GET"
    | "CREATE"
    | "UPDATE"
    | "DELETE"
    | (string & {})
  >;
  defaultSortBy?: string;
}

export const EntityType: Schema.Schema<EntityType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    jsonSchema: Schema.optional(JsonSchema),
    name: Schema.optional(Schema.String),
    fields: Schema.optional(Schema.Array(Field)),
    metadata: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.Record(Schema.String, Schema.Unknown),
      ),
    ),
    operations: Schema.optional(Schema.Array(Schema.String)),
    defaultSortBy: Schema.optional(Schema.String),
  }).annotate({ identifier: "EntityType" });

export interface ListEntityTypesResponse {
  /** Metadata like service latency, etc. */
  metadata?: Record<string, Record<string, unknown>>;
  /** List of metadata related to all entity types. */
  types?: ReadonlyArray<EntityType>;
  /** Next page token if more entity types available. */
  nextPageToken?: string;
  /** List of entity type names which contain unsupported Datatypes. Check datatype.proto for more information. */
  unsupportedTypeNames?: ReadonlyArray<string>;
}

export const ListEntityTypesResponse: Schema.Schema<ListEntityTypesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.Record(Schema.String, Schema.Unknown),
      ),
    ),
    types: Schema.optional(Schema.Array(EntityType)),
    nextPageToken: Schema.optional(Schema.String),
    unsupportedTypeNames: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListEntityTypesResponse" });

export interface ListToolsPostRequest {
  /** Page size. */
  pageSize?: number;
  /** Page token. */
  pageToken?: string;
  /** execution config for the request. */
  executionConfig?: ExecutionConfig;
  /** List of tool specifications. */
  toolSpec?: ToolSpec;
  /** List of tool names to for selective tool fetching. */
  toolNames?: ReadonlyArray<string>;
}

export const ListToolsPostRequest: Schema.Schema<ListToolsPostRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number),
    pageToken: Schema.optional(Schema.String),
    executionConfig: Schema.optional(ExecutionConfig),
    toolSpec: Schema.optional(ToolSpec),
    toolNames: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListToolsPostRequest" });

export interface ListEntitiesResponse {
  /** Metadata like service latency, etc. */
  metadata?: Record<string, Record<string, unknown>>;
  /** List containing entity rows. */
  entities?: ReadonlyArray<Entity>;
  /** Next page token if more records are available. */
  nextPageToken?: string;
}

export const ListEntitiesResponse: Schema.Schema<ListEntitiesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.Record(Schema.String, Schema.Unknown),
      ),
    ),
    entities: Schema.optional(Schema.Array(Entity)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListEntitiesResponse" });

export interface ResultMetadata {
  /** The following field specifies the default value of the Parameter provided by the external system if a value is not provided. */
  defaultValue?: unknown;
  /** The data type of the metadata field */
  dataType?:
    | "DATA_TYPE_UNSPECIFIED"
    | "INT"
    | "SMALLINT"
    | "DOUBLE"
    | "DATE"
    | "DATETIME"
    | "TIME"
    | "STRING"
    | "LONG"
    | "BOOLEAN"
    | "DECIMAL"
    | "UUID"
    | "BLOB"
    | "BIT"
    | "TINYINT"
    | "INTEGER"
    | "BIGINT"
    | "FLOAT"
    | "REAL"
    | "NUMERIC"
    | "CHAR"
    | "VARCHAR"
    | "LONGVARCHAR"
    | "TIMESTAMP"
    | "NCHAR"
    | "NVARCHAR"
    | "LONGNVARCHAR"
    | "NULL"
    | "OTHER"
    | "JAVA_OBJECT"
    | "DISTINCT"
    | "STRUCT"
    | "ARRAY"
    | "CLOB"
    | "REF"
    | "DATALINK"
    | "ROWID"
    | "BINARY"
    | "VARBINARY"
    | "LONGVARBINARY"
    | "NCLOB"
    | "SQLXML"
    | "REF_CURSOR"
    | "TIME_WITH_TIMEZONE"
    | "TIMESTAMP_WITH_TIMEZONE"
    | (string & {});
  /** Specifies whether a null value is allowed. */
  nullable?: boolean;
  /** Name of the metadata field. */
  name?: string;
  /** A brief description of the metadata field. */
  description?: string;
  /** JsonSchema of the result, applicable only if parameter is of type `STRUCT` */
  jsonSchema?: JsonSchema;
}

export const ResultMetadata: Schema.Schema<ResultMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    defaultValue: Schema.optional(Schema.Unknown),
    dataType: Schema.optional(Schema.String),
    nullable: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    jsonSchema: Schema.optional(JsonSchema),
  }).annotate({ identifier: "ResultMetadata" });

export interface InputParameter {
  /** Name of the Parameter. */
  name?: string;
  /** A brief description of the Parameter. */
  description?: string;
  /** JsonSchema of the parameter, applicable only if parameter is of type `STRUCT` */
  jsonSchema?: JsonSchema;
  /** The following field specifies the default value of the Parameter provided by the external system if a value is not provided. */
  defaultValue?: unknown;
  /** The following map contains fields that are not explicitly mentioned above,this give connectors the flexibility to add new metadata fields. */
  additionalDetails?: Record<string, unknown>;
  /** The data type of the Parameter */
  dataType?:
    | "DATA_TYPE_UNSPECIFIED"
    | "INT"
    | "SMALLINT"
    | "DOUBLE"
    | "DATE"
    | "DATETIME"
    | "TIME"
    | "STRING"
    | "LONG"
    | "BOOLEAN"
    | "DECIMAL"
    | "UUID"
    | "BLOB"
    | "BIT"
    | "TINYINT"
    | "INTEGER"
    | "BIGINT"
    | "FLOAT"
    | "REAL"
    | "NUMERIC"
    | "CHAR"
    | "VARCHAR"
    | "LONGVARCHAR"
    | "TIMESTAMP"
    | "NCHAR"
    | "NVARCHAR"
    | "LONGNVARCHAR"
    | "NULL"
    | "OTHER"
    | "JAVA_OBJECT"
    | "DISTINCT"
    | "STRUCT"
    | "ARRAY"
    | "CLOB"
    | "REF"
    | "DATALINK"
    | "ROWID"
    | "BINARY"
    | "VARBINARY"
    | "LONGVARBINARY"
    | "NCLOB"
    | "SQLXML"
    | "REF_CURSOR"
    | "TIME_WITH_TIMEZONE"
    | "TIMESTAMP_WITH_TIMEZONE"
    | (string & {});
  /** Specifies whether a null value is allowed. */
  nullable?: boolean;
}

export const InputParameter: Schema.Schema<InputParameter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    jsonSchema: Schema.optional(JsonSchema),
    defaultValue: Schema.optional(Schema.Unknown),
    additionalDetails: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    dataType: Schema.optional(Schema.String),
    nullable: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "InputParameter" });

export interface Action {
  /** List containing the metadata of result fields. */
  resultMetadata?: ReadonlyArray<ResultMetadata>;
  /** List containing input parameter metadata. */
  inputParameters?: ReadonlyArray<InputParameter>;
  /** Display Name of action to be shown on client side */
  displayName?: string;
  /** Name of the action. */
  name?: string;
  /** Brief Description of action */
  description?: string;
  /** JsonSchema representation of this actions's input schema */
  inputJsonSchema?: JsonSchema;
  /** JsonSchema representation of this actions's result schema */
  resultJsonSchema?: JsonSchema;
  /** Metadata like service latency, etc. */
  metadata?: Record<string, Record<string, unknown>>;
}

export const Action: Schema.Schema<Action> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resultMetadata: Schema.optional(Schema.Array(ResultMetadata)),
    inputParameters: Schema.optional(Schema.Array(InputParameter)),
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    inputJsonSchema: Schema.optional(JsonSchema),
    resultJsonSchema: Schema.optional(JsonSchema),
    metadata: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.Record(Schema.String, Schema.Unknown),
      ),
    ),
  }).annotate({ identifier: "Action" });

export interface ToolName {
  /** Tool name that was generated in the list tools call. */
  name?: string;
  /** Entity name for which the tool was generated. */
  entityName?: string;
  /** Operation for which the tool was generated. */
  operation?:
    | "OPERATION_UNSPECIFIED"
    | "LIST"
    | "GET"
    | "CREATE"
    | "UPDATE"
    | "DELETE"
    | (string & {});
}

export const ToolName: Schema.Schema<ToolName> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    entityName: Schema.optional(Schema.String),
    operation: Schema.optional(Schema.String),
  }).annotate({ identifier: "ToolName" });

export interface GenerateCustomToolspecRequest {
  /** list of tools to be generated. */
  toolNames?: ReadonlyArray<ToolName>;
}

export const GenerateCustomToolspecRequest: Schema.Schema<GenerateCustomToolspecRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    toolNames: Schema.optional(Schema.Array(ToolName)),
  }).annotate({ identifier: "GenerateCustomToolspecRequest" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface GenerateCustomToolspecResponse {
  /** tool spec that has tool_defitions array containing the tools for all sted tool_names. */
  toolSpec?: ToolSpec;
}

export const GenerateCustomToolspecResponse: Schema.Schema<GenerateCustomToolspecResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    toolSpec: Schema.optional(ToolSpec),
  }).annotate({ identifier: "GenerateCustomToolspecResponse" });

export interface ListResourcesResponse {
  /** Next page token if more resources available. */
  nextPageToken?: string;
  /** Metadata like service latency, etc. */
  metadata?: Record<string, Record<string, unknown>>;
  /** List of available resources. */
  resources?: ReadonlyArray<Resource>;
}

export const ListResourcesResponse: Schema.Schema<ListResourcesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.Record(Schema.String, Schema.Unknown),
      ),
    ),
    resources: Schema.optional(Schema.Array(Resource)),
  }).annotate({ identifier: "ListResourcesResponse" });

export interface ExecuteActionResponse {
  /** Metadata like service latency, etc. */
  metadata?: Record<string, Record<string, unknown>>;
  /** In the case of successful invocation of the specified action, the results Struct contains values based on the response of the action invoked. 1. If the action execution produces any entities as a result, they are returned as an array of Structs with the 'key' being the field name and the 'value' being the value of that field in each result row. { 'results': [{'key': 'value'}, ...] } */
  results?: ReadonlyArray<Record<string, unknown>>;
}

export const ExecuteActionResponse: Schema.Schema<ExecuteActionResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.Record(Schema.String, Schema.Unknown),
      ),
    ),
    results: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).annotate({ identifier: "ExecuteActionResponse" });

export interface CheckStatusResponse {
  /** When the connector is not in ACTIVE state, the description must be populated to specify the reason why it's not in ACTIVE state. */
  description?: string;
  /** State of the connector. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "ERROR"
    | "AUTH_ERROR"
    | (string & {});
  /** Metadata like service latency, etc. */
  metadata?: Record<string, Record<string, unknown>>;
}

export const CheckStatusResponse: Schema.Schema<CheckStatusResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.Record(Schema.String, Schema.Unknown),
      ),
    ),
  }).annotate({ identifier: "CheckStatusResponse" });

export interface ListCustomToolNamesResponse {
  /** List of custom tools. */
  toolNames?: ReadonlyArray<ToolName>;
}

export const ListCustomToolNamesResponse: Schema.Schema<ListCustomToolNamesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    toolNames: Schema.optional(Schema.Array(ToolName)),
  }).annotate({ identifier: "ListCustomToolNamesResponse" });

export interface ListActionsResponse {
  /** List of action metadata. */
  actions?: ReadonlyArray<Action>;
  /** Next page token if more actions available. */
  nextPageToken?: string;
  /** List of actions which contain unsupported Datatypes. Check datatype.proto for more information. */
  unsupportedActionNames?: ReadonlyArray<string>;
  /** Metadata like service latency, etc. */
  metadata?: Record<string, Record<string, unknown>>;
}

export const ListActionsResponse: Schema.Schema<ListActionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    actions: Schema.optional(Schema.Array(Action)),
    nextPageToken: Schema.optional(Schema.String),
    unsupportedActionNames: Schema.optional(Schema.Array(Schema.String)),
    metadata: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.Record(Schema.String, Schema.Unknown),
      ),
    ),
  }).annotate({ identifier: "ListActionsResponse" });

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

export interface CheckStatusProjectsLocationsConnectionsRequest {
  name: string;
  /** headers to be used for the request. For example: headers:'{"x-integration-connectors-managed-connection-id":"conn-id","x-integration-connectors-runtime-config":"runtime-cfg"}' */
  "executionConfig.headers"?: string;
}

export const CheckStatusProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    "executionConfig.headers": Schema.optional(Schema.String).pipe(
      T.HttpQuery("executionConfig.headers"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}:checkStatus" }),
    svc,
  ) as unknown as Schema.Schema<CheckStatusProjectsLocationsConnectionsRequest>;

export type CheckStatusProjectsLocationsConnectionsResponse =
  CheckStatusResponse;
export const CheckStatusProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CheckStatusResponse;

export type CheckStatusProjectsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Reports the status of the connection. Note that when the connection is in a state that is not ACTIVE, the implementation of this RPC method must return a Status with the corresponding State instead of returning a gRPC status code that is not "OK", which indicates that ConnectionStatus itself, not the connection, failed. */
export const checkStatusProjectsLocationsConnections: API.OperationMethod<
  CheckStatusProjectsLocationsConnectionsRequest,
  CheckStatusProjectsLocationsConnectionsResponse,
  CheckStatusProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CheckStatusProjectsLocationsConnectionsRequest,
  output: CheckStatusProjectsLocationsConnectionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ExchangeAuthCodeProjectsLocationsConnectionsRequest {
  name: string;
  /** Request body */
  body?: ExchangeAuthCodeRequest;
}

export const ExchangeAuthCodeProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ExchangeAuthCodeRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+name}:exchangeAuthCode",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ExchangeAuthCodeProjectsLocationsConnectionsRequest>;

export type ExchangeAuthCodeProjectsLocationsConnectionsResponse =
  ExchangeAuthCodeResponse;
export const ExchangeAuthCodeProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ExchangeAuthCodeResponse;

export type ExchangeAuthCodeProjectsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** ExchangeAuthCode exchanges the OAuth authorization code (and other necessary data) for an access token (and associated credentials). */
export const exchangeAuthCodeProjectsLocationsConnections: API.OperationMethod<
  ExchangeAuthCodeProjectsLocationsConnectionsRequest,
  ExchangeAuthCodeProjectsLocationsConnectionsResponse,
  ExchangeAuthCodeProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExchangeAuthCodeProjectsLocationsConnectionsRequest,
  output: ExchangeAuthCodeProjectsLocationsConnectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListCustomToolNamesProjectsLocationsConnectionsRequest {
  /** Required. Resource name of the Connection. Format: projects/{project}/locations/{location}/connections/{connection} */
  name: string;
}

export const ListCustomToolNamesProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}:listCustomToolNames" }),
    svc,
  ) as unknown as Schema.Schema<ListCustomToolNamesProjectsLocationsConnectionsRequest>;

export type ListCustomToolNamesProjectsLocationsConnectionsResponse =
  ListCustomToolNamesResponse;
export const ListCustomToolNamesProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListCustomToolNamesResponse;

export type ListCustomToolNamesProjectsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists custom tool names. */
export const listCustomToolNamesProjectsLocationsConnections: API.OperationMethod<
  ListCustomToolNamesProjectsLocationsConnectionsRequest,
  ListCustomToolNamesProjectsLocationsConnectionsResponse,
  ListCustomToolNamesProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListCustomToolNamesProjectsLocationsConnectionsRequest,
  output: ListCustomToolNamesProjectsLocationsConnectionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface RefreshAccessTokenProjectsLocationsConnectionsRequest {
  name: string;
  /** Request body */
  body?: RefreshAccessTokenRequest;
}

export const RefreshAccessTokenProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(RefreshAccessTokenRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+name}:refreshAccessToken",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RefreshAccessTokenProjectsLocationsConnectionsRequest>;

export type RefreshAccessTokenProjectsLocationsConnectionsResponse =
  RefreshAccessTokenResponse;
export const RefreshAccessTokenProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ RefreshAccessTokenResponse;

export type RefreshAccessTokenProjectsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** RefreshAccessToken exchanges the OAuth refresh token (and other necessary data) for a new access token (and new associated credentials). */
export const refreshAccessTokenProjectsLocationsConnections: API.OperationMethod<
  RefreshAccessTokenProjectsLocationsConnectionsRequest,
  RefreshAccessTokenProjectsLocationsConnectionsResponse,
  RefreshAccessTokenProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RefreshAccessTokenProjectsLocationsConnectionsRequest,
  output: RefreshAccessTokenProjectsLocationsConnectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GenerateConnectionToolspecOverrideProjectsLocationsConnectionsRequest {
  /** Required. Resource name of the Connection. Format: projects/{project}/locations/{location}/connections/{connection} */
  name: string;
  /** Request body */
  body?: GenerateCustomToolspecRequest;
}

export const GenerateConnectionToolspecOverrideProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GenerateCustomToolspecRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+name}:generateConnectionToolspecOverride",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GenerateConnectionToolspecOverrideProjectsLocationsConnectionsRequest>;

export type GenerateConnectionToolspecOverrideProjectsLocationsConnectionsResponse =
  GenerateCustomToolspecResponse;
export const GenerateConnectionToolspecOverrideProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GenerateCustomToolspecResponse;

export type GenerateConnectionToolspecOverrideProjectsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Generate toolspec override for the given list of toolNames. */
export const generateConnectionToolspecOverrideProjectsLocationsConnections: API.OperationMethod<
  GenerateConnectionToolspecOverrideProjectsLocationsConnectionsRequest,
  GenerateConnectionToolspecOverrideProjectsLocationsConnectionsResponse,
  GenerateConnectionToolspecOverrideProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GenerateConnectionToolspecOverrideProjectsLocationsConnectionsRequest,
  output:
    GenerateConnectionToolspecOverrideProjectsLocationsConnectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CheckReadinessProjectsLocationsConnectionsRequest {
  name: string;
}

export const CheckReadinessProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}:checkReadiness" }),
    svc,
  ) as unknown as Schema.Schema<CheckReadinessProjectsLocationsConnectionsRequest>;

export type CheckReadinessProjectsLocationsConnectionsResponse =
  CheckReadinessResponse;
export const CheckReadinessProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CheckReadinessResponse;

export type CheckReadinessProjectsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Reports readiness status of the connector. Similar logic to GetStatus but modified for kubernetes health check to understand. */
export const checkReadinessProjectsLocationsConnections: API.OperationMethod<
  CheckReadinessProjectsLocationsConnectionsRequest,
  CheckReadinessProjectsLocationsConnectionsResponse,
  CheckReadinessProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CheckReadinessProjectsLocationsConnectionsRequest,
  output: CheckReadinessProjectsLocationsConnectionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ExecuteSqlQueryProjectsLocationsConnectionsRequest {
  /** Required. Resource name of the Connection. Format: projects/{project}/locations/{location}/connections/{connection} */
  connection: string;
  /** Request body */
  body?: ExecuteSqlQueryRequest;
}

export const ExecuteSqlQueryProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    connection: Schema.String.pipe(T.HttpPath("connection")),
    body: Schema.optional(ExecuteSqlQueryRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+connection}:executeSqlQuery",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ExecuteSqlQueryProjectsLocationsConnectionsRequest>;

export type ExecuteSqlQueryProjectsLocationsConnectionsResponse =
  ExecuteSqlQueryResponse;
export const ExecuteSqlQueryProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ExecuteSqlQueryResponse;

export type ExecuteSqlQueryProjectsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Executes a SQL statement specified in the body of the request. An example of this SQL statement in the case of Salesforce connector would be 'select * from Account a, Order o where a.Id = o.AccountId'. */
export const executeSqlQueryProjectsLocationsConnections: API.OperationMethod<
  ExecuteSqlQueryProjectsLocationsConnectionsRequest,
  ExecuteSqlQueryProjectsLocationsConnectionsResponse,
  ExecuteSqlQueryProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExecuteSqlQueryProjectsLocationsConnectionsRequest,
  output: ExecuteSqlQueryProjectsLocationsConnectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ToolsProjectsLocationsConnectionsRequest {
  /** Required. Resource name of the Connection. Format: projects/{project}/locations/{location}/connections/{connection} */
  parent: string;
  /** Request body */
  body?: ListToolsPostRequest;
}

export const ToolsProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(ListToolsPostRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+parent}/tools", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ToolsProjectsLocationsConnectionsRequest>;

export type ToolsProjectsLocationsConnectionsResponse = ListToolsResponse;
export const ToolsProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListToolsResponse;

export type ToolsProjectsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Lists all available tools with POST. */
export const toolsProjectsLocationsConnections: API.OperationMethod<
  ToolsProjectsLocationsConnectionsRequest,
  ToolsProjectsLocationsConnectionsResponse,
  ToolsProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ToolsProjectsLocationsConnectionsRequest,
  output: ToolsProjectsLocationsConnectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsConnectionsToolsRequest {
  /** Required. Resource name of the Connection. Format: projects/{project}/locations/{location}/connections/{connection} */
  parent: string;
  /** Page token. */
  pageToken?: string;
  /** headers to be used for the request. For example: headers:'{"x-integration-connectors-managed-connection-id":"conn-id","x-integration-connectors-runtime-config":"runtime-cfg"}' */
  "executionConfig.headers"?: string;
  /** Page size. */
  pageSize?: number;
}

export const ListProjectsLocationsConnectionsToolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    "executionConfig.headers": Schema.optional(Schema.String).pipe(
      T.HttpQuery("executionConfig.headers"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/tools" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsConnectionsToolsRequest>;

export type ListProjectsLocationsConnectionsToolsResponse = ListToolsResponse;
export const ListProjectsLocationsConnectionsToolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListToolsResponse;

export type ListProjectsLocationsConnectionsToolsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all available tools. */
export const listProjectsLocationsConnectionsTools: API.PaginatedOperationMethod<
  ListProjectsLocationsConnectionsToolsRequest,
  ListProjectsLocationsConnectionsToolsResponse,
  ListProjectsLocationsConnectionsToolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsConnectionsToolsRequest,
  output: ListProjectsLocationsConnectionsToolsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ExecuteProjectsLocationsConnectionsToolsRequest {
  /** Required. Resource name of the Tool. Format: projects/{project}/locations/{location}/connections/{connection}/tools/{tool} */
  name: string;
  /** Request body */
  body?: ExecuteToolRequest;
}

export const ExecuteProjectsLocationsConnectionsToolsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ExecuteToolRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+name}:execute", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ExecuteProjectsLocationsConnectionsToolsRequest>;

export type ExecuteProjectsLocationsConnectionsToolsResponse =
  ExecuteToolResponse;
export const ExecuteProjectsLocationsConnectionsToolsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ExecuteToolResponse;

export type ExecuteProjectsLocationsConnectionsToolsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Executes a specific tool. */
export const executeProjectsLocationsConnectionsTools: API.OperationMethod<
  ExecuteProjectsLocationsConnectionsToolsRequest,
  ExecuteProjectsLocationsConnectionsToolsResponse,
  ExecuteProjectsLocationsConnectionsToolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExecuteProjectsLocationsConnectionsToolsRequest,
  output: ExecuteProjectsLocationsConnectionsToolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsConnectionsEntityTypesRequest {
  /** Specifies which fields of the Entity Type are returned in the response. */
  view?:
    | "ENTITY_TYPE_VIEW_UNSPECIFIED"
    | "ENTITY_TYPE_VIEW_BASIC"
    | "ENTITY_TYPE_VIEW_FULL"
    | (string & {});
  /** Required. Resource name of the Entity Type. Format: projects/{project}/locations/{location}/connections/{connection} */
  parent: string;
  /** headers to be used for the request. For example: headers:'{"x-integration-connectors-managed-connection-id":"conn-id","x-integration-connectors-runtime-config":"runtime-cfg"}' */
  "executionConfig.headers"?: string;
  /** Number of entity types to return. Defaults to 25. */
  pageSize?: number;
  /** Page token, return from a previous ListEntityTypes call, that can be used retrieve the next page of content. If unspecified, the request returns the first page of entity types. */
  pageToken?: string;
}

export const ListProjectsLocationsConnectionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    "executionConfig.headers": Schema.optional(Schema.String).pipe(
      T.HttpQuery("executionConfig.headers"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/entityTypes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsConnectionsEntityTypesRequest>;

export type ListProjectsLocationsConnectionsEntityTypesResponse =
  ListEntityTypesResponse;
export const ListProjectsLocationsConnectionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListEntityTypesResponse;

export type ListProjectsLocationsConnectionsEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists metadata related to all entity types present in the external system. */
export const listProjectsLocationsConnectionsEntityTypes: API.PaginatedOperationMethod<
  ListProjectsLocationsConnectionsEntityTypesRequest,
  ListProjectsLocationsConnectionsEntityTypesResponse,
  ListProjectsLocationsConnectionsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsConnectionsEntityTypesRequest,
  output: ListProjectsLocationsConnectionsEntityTypesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsConnectionsEntityTypesRequest {
  /** Context metadata for request could be used to fetch customization of entity type schema. */
  contextMetadata?: string;
  /** Required. Resource name of the Entity Type. Format: projects/{project}/locations/{location}/connections/{connection}/entityTypes/{entityType} */
  name: string;
  /** Specifies view for entity type schema. */
  view?:
    | "ENTITY_TYPE_SCHEMA_VIEW_UNSPECIFIED"
    | "ENTITY_TYPE_SCHEMA_VIEW_BASIC"
    | "ENTITY_TYPE_SCHEMA_VIEW_ENRICHED"
    | (string & {});
  /** headers to be used for the request. For example: headers:'{"x-integration-connectors-managed-connection-id":"conn-id","x-integration-connectors-runtime-config":"runtime-cfg"}' */
  "executionConfig.headers"?: string;
}

export const GetProjectsLocationsConnectionsEntityTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contextMetadata: Schema.optional(Schema.String).pipe(
      T.HttpQuery("contextMetadata"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    "executionConfig.headers": Schema.optional(Schema.String).pipe(
      T.HttpQuery("executionConfig.headers"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsConnectionsEntityTypesRequest>;

export type GetProjectsLocationsConnectionsEntityTypesResponse = EntityType;
export const GetProjectsLocationsConnectionsEntityTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ EntityType;

export type GetProjectsLocationsConnectionsEntityTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets metadata of given entity type */
export const getProjectsLocationsConnectionsEntityTypes: API.OperationMethod<
  GetProjectsLocationsConnectionsEntityTypesRequest,
  GetProjectsLocationsConnectionsEntityTypesResponse,
  GetProjectsLocationsConnectionsEntityTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsConnectionsEntityTypesRequest,
  output: GetProjectsLocationsConnectionsEntityTypesResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsConnectionsEntityTypesEntitiesRequest {
  /** headers to be used for the request. For example: headers:'{"x-integration-connectors-managed-connection-id":"conn-id","x-integration-connectors-runtime-config":"runtime-cfg"}' */
  "executionConfig.headers"?: string;
  /** Required. Resource name of the Entity Type. Format: projects/{project}/locations/{location}/connections/{connection}/entityTypes/{type}/entities/{id} */
  name: string;
}

export const DeleteProjectsLocationsConnectionsEntityTypesEntitiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "executionConfig.headers": Schema.optional(Schema.String).pipe(
      T.HttpQuery("executionConfig.headers"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsConnectionsEntityTypesEntitiesRequest>;

export type DeleteProjectsLocationsConnectionsEntityTypesEntitiesResponse =
  Empty;
export const DeleteProjectsLocationsConnectionsEntityTypesEntitiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsConnectionsEntityTypesEntitiesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an existing entity row matching the entity type and entity id specified in the request. */
export const deleteProjectsLocationsConnectionsEntityTypesEntities: API.OperationMethod<
  DeleteProjectsLocationsConnectionsEntityTypesEntitiesRequest,
  DeleteProjectsLocationsConnectionsEntityTypesEntitiesResponse,
  DeleteProjectsLocationsConnectionsEntityTypesEntitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsConnectionsEntityTypesEntitiesRequest,
  output: DeleteProjectsLocationsConnectionsEntityTypesEntitiesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsConnectionsEntityTypesEntitiesRequest {
  /** Required. Resource name of the Entity Type. Format: projects/{project}/locations/{location}/connections/{connection}/entityTypes/{type} */
  parent: string;
  /** List of 'sort_order' columns to use when returning the results. */
  sortOrder?: string[];
  /** Page token value if available from a previous request. */
  pageToken?: string;
  /** List of 'sort_by' columns to use when returning the results. */
  sortBy?: string[];
  /** Conditions to be used when listing entities. From a proto standpoint, There are no restrictions on what can be passed using this field. The connector documentation should have information about what format of filters/conditions are supported. */
  conditions?: string;
  /** headers to be used for the request. For example: headers:'{"x-integration-connectors-managed-connection-id":"conn-id","x-integration-connectors-runtime-config":"runtime-cfg"}' */
  "executionConfig.headers"?: string;
  /** Number of entity rows to return. Defaults page size = 25. Max page size = 200. */
  pageSize?: number;
}

export const ListProjectsLocationsConnectionsEntityTypesEntitiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    sortOrder: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("sortOrder"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    sortBy: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("sortBy"),
    ),
    conditions: Schema.optional(Schema.String).pipe(T.HttpQuery("conditions")),
    "executionConfig.headers": Schema.optional(Schema.String).pipe(
      T.HttpQuery("executionConfig.headers"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/entities" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsConnectionsEntityTypesEntitiesRequest>;

export type ListProjectsLocationsConnectionsEntityTypesEntitiesResponse =
  ListEntitiesResponse;
export const ListProjectsLocationsConnectionsEntityTypesEntitiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListEntitiesResponse;

export type ListProjectsLocationsConnectionsEntityTypesEntitiesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists entity rows of a particular entity type contained in the request. Note: 1. Currently, only max of one 'sort_by' column is supported. 2. If no 'sort_by' column is provided, the primary key of the table is used. If zero or more than one primary key is available, we default to the unpaginated list entities logic which only returns the first page. 3. The values of the 'sort_by' columns must uniquely identify an entity row, otherwise undefined behaviors may be observed during pagination. 4. Since transactions are not supported, any updates, inserts or deletes during pagination can lead to stale data being returned or other unexpected behaviors. */
export const listProjectsLocationsConnectionsEntityTypesEntities: API.PaginatedOperationMethod<
  ListProjectsLocationsConnectionsEntityTypesEntitiesRequest,
  ListProjectsLocationsConnectionsEntityTypesEntitiesResponse,
  ListProjectsLocationsConnectionsEntityTypesEntitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsConnectionsEntityTypesEntitiesRequest,
  output: ListProjectsLocationsConnectionsEntityTypesEntitiesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsConnectionsEntityTypesEntitiesRequest {
  /** Required. Resource name of the Entity Type. Format: projects/{project}/locations/{location}/connections/{connection}/entityTypes/{type} */
  parent: string;
  /** headers to be used for the request. For example: headers:'{"x-integration-connectors-managed-connection-id":"conn-id","x-integration-connectors-runtime-config":"runtime-cfg"}' */
  "executionConfig.headers"?: string;
  /** Request body */
  body?: Entity;
}

export const CreateProjectsLocationsConnectionsEntityTypesEntitiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    "executionConfig.headers": Schema.optional(Schema.String).pipe(
      T.HttpQuery("executionConfig.headers"),
    ),
    body: Schema.optional(Entity).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+parent}/entities", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsConnectionsEntityTypesEntitiesRequest>;

export type CreateProjectsLocationsConnectionsEntityTypesEntitiesResponse =
  Entity;
export const CreateProjectsLocationsConnectionsEntityTypesEntitiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Entity;

export type CreateProjectsLocationsConnectionsEntityTypesEntitiesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new entity row of the specified entity type in the external system. The field values for creating the row are contained in the body of the request. The response message contains a `Entity` message object returned as a response by the external system. */
export const createProjectsLocationsConnectionsEntityTypesEntities: API.OperationMethod<
  CreateProjectsLocationsConnectionsEntityTypesEntitiesRequest,
  CreateProjectsLocationsConnectionsEntityTypesEntitiesResponse,
  CreateProjectsLocationsConnectionsEntityTypesEntitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsConnectionsEntityTypesEntitiesRequest,
  output: CreateProjectsLocationsConnectionsEntityTypesEntitiesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsConnectionsEntityTypesEntitiesRequest {
  /** headers to be used for the request. For example: headers:'{"x-integration-connectors-managed-connection-id":"conn-id","x-integration-connectors-runtime-config":"runtime-cfg"}' */
  "executionConfig.headers"?: string;
  /** Required. Resource name of the Entity Type. Format: projects/{project}/locations/{location}/connections/{connection}/entityTypes/{type}/entities/{id} */
  name: string;
}

export const GetProjectsLocationsConnectionsEntityTypesEntitiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "executionConfig.headers": Schema.optional(Schema.String).pipe(
      T.HttpQuery("executionConfig.headers"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsConnectionsEntityTypesEntitiesRequest>;

export type GetProjectsLocationsConnectionsEntityTypesEntitiesResponse = Entity;
export const GetProjectsLocationsConnectionsEntityTypesEntitiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Entity;

export type GetProjectsLocationsConnectionsEntityTypesEntitiesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a single entity row matching the entity type and entity id specified in the request. */
export const getProjectsLocationsConnectionsEntityTypesEntities: API.OperationMethod<
  GetProjectsLocationsConnectionsEntityTypesEntitiesRequest,
  GetProjectsLocationsConnectionsEntityTypesEntitiesResponse,
  GetProjectsLocationsConnectionsEntityTypesEntitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsConnectionsEntityTypesEntitiesRequest,
  output: GetProjectsLocationsConnectionsEntityTypesEntitiesResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsConnectionsEntityTypesEntitiesRequest {
  /** headers to be used for the request. For example: headers:'{"x-integration-connectors-managed-connection-id":"conn-id","x-integration-connectors-runtime-config":"runtime-cfg"}' */
  "executionConfig.headers"?: string;
  /** Output only. Resource name of the Entity. Format: projects/{project}/locations/{location}/connections/{connection}/entityTypes/{type}/entities/{id} */
  name: string;
  /** Request body */
  body?: Entity;
}

export const PatchProjectsLocationsConnectionsEntityTypesEntitiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "executionConfig.headers": Schema.optional(Schema.String).pipe(
      T.HttpQuery("executionConfig.headers"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Entity).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsConnectionsEntityTypesEntitiesRequest>;

export type PatchProjectsLocationsConnectionsEntityTypesEntitiesResponse =
  Entity;
export const PatchProjectsLocationsConnectionsEntityTypesEntitiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Entity;

export type PatchProjectsLocationsConnectionsEntityTypesEntitiesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing entity row matching the entity type and entity id specified in the request. The fields in the entity row that need to be modified are contained in the body of the request. All unspecified fields are left unchanged. The response message contains a `Entity` message object returned as a response by the external system. */
export const patchProjectsLocationsConnectionsEntityTypesEntities: API.OperationMethod<
  PatchProjectsLocationsConnectionsEntityTypesEntitiesRequest,
  PatchProjectsLocationsConnectionsEntityTypesEntitiesResponse,
  PatchProjectsLocationsConnectionsEntityTypesEntitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsConnectionsEntityTypesEntitiesRequest,
  output: PatchProjectsLocationsConnectionsEntityTypesEntitiesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateEntitiesWithConditionsProjectsLocationsConnectionsEntityTypesEntitiesRequest {
  /** Required. Conditions to be used when updating entities. From a proto standpoint, There are no restrictions on what can be passed using this field. The connector documentation should have information about what format of filters/conditions are supported. Note: If this conditions field is left empty, an exception is thrown. We don't want to consider 'empty conditions' to be a match-all case. Connector developers can determine and document what a match-all case constraint would be. */
  conditions?: string;
  /** Required. Resource name of the Entity Type. Format: projects/{project}/locations/{location}/connections/{connection}/entityTypes/{type} */
  entityType: string;
  /** headers to be used for the request. For example: headers:'{"x-integration-connectors-managed-connection-id":"conn-id","x-integration-connectors-runtime-config":"runtime-cfg"}' */
  "executionConfig.headers"?: string;
  /** Request body */
  body?: Entity;
}

export const UpdateEntitiesWithConditionsProjectsLocationsConnectionsEntityTypesEntitiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conditions: Schema.optional(Schema.String).pipe(T.HttpQuery("conditions")),
    entityType: Schema.String.pipe(T.HttpPath("entityType")),
    "executionConfig.headers": Schema.optional(Schema.String).pipe(
      T.HttpQuery("executionConfig.headers"),
    ),
    body: Schema.optional(Entity).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+entityType}/entities:updateEntitiesWithConditions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateEntitiesWithConditionsProjectsLocationsConnectionsEntityTypesEntitiesRequest>;

export type UpdateEntitiesWithConditionsProjectsLocationsConnectionsEntityTypesEntitiesResponse =
  UpdateEntitiesWithConditionsResponse;
export const UpdateEntitiesWithConditionsProjectsLocationsConnectionsEntityTypesEntitiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ UpdateEntitiesWithConditionsResponse;

export type UpdateEntitiesWithConditionsProjectsLocationsConnectionsEntityTypesEntitiesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates entities based on conditions specified in the request and not on entity id. */
export const updateEntitiesWithConditionsProjectsLocationsConnectionsEntityTypesEntities: API.OperationMethod<
  UpdateEntitiesWithConditionsProjectsLocationsConnectionsEntityTypesEntitiesRequest,
  UpdateEntitiesWithConditionsProjectsLocationsConnectionsEntityTypesEntitiesResponse,
  UpdateEntitiesWithConditionsProjectsLocationsConnectionsEntityTypesEntitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    UpdateEntitiesWithConditionsProjectsLocationsConnectionsEntityTypesEntitiesRequest,
  output:
    UpdateEntitiesWithConditionsProjectsLocationsConnectionsEntityTypesEntitiesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteEntitiesWithConditionsProjectsLocationsConnectionsEntityTypesEntitiesRequest {
  /** Required. Conditions to be used when deleting entities. From a proto standpoint, There are no restrictions on what can be passed using this field. The connector documentation should have information about what format of filters/conditions are supported. Note: If this conditions field is left empty, an exception is thrown. We don't want to consider 'empty conditions' to be a match-all case. Connector developers can determine and document what a match-all case constraint would be. */
  conditions?: string;
  /** Required. Resource name of the Entity Type. Format: projects/{project}/locations/{location}/connections/{connection}/entityTypes/{type} */
  entityType: string;
  /** headers to be used for the request. For example: headers:'{"x-integration-connectors-managed-connection-id":"conn-id","x-integration-connectors-runtime-config":"runtime-cfg"}' */
  "executionConfig.headers"?: string;
}

export const DeleteEntitiesWithConditionsProjectsLocationsConnectionsEntityTypesEntitiesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conditions: Schema.optional(Schema.String).pipe(T.HttpQuery("conditions")),
    entityType: Schema.String.pipe(T.HttpPath("entityType")),
    "executionConfig.headers": Schema.optional(Schema.String).pipe(
      T.HttpQuery("executionConfig.headers"),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+entityType}/entities:deleteEntitiesWithConditions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteEntitiesWithConditionsProjectsLocationsConnectionsEntityTypesEntitiesRequest>;

export type DeleteEntitiesWithConditionsProjectsLocationsConnectionsEntityTypesEntitiesResponse =
  Empty;
export const DeleteEntitiesWithConditionsProjectsLocationsConnectionsEntityTypesEntitiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteEntitiesWithConditionsProjectsLocationsConnectionsEntityTypesEntitiesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes entities based on conditions specified in the request and not on entity id. */
export const deleteEntitiesWithConditionsProjectsLocationsConnectionsEntityTypesEntities: API.OperationMethod<
  DeleteEntitiesWithConditionsProjectsLocationsConnectionsEntityTypesEntitiesRequest,
  DeleteEntitiesWithConditionsProjectsLocationsConnectionsEntityTypesEntitiesResponse,
  DeleteEntitiesWithConditionsProjectsLocationsConnectionsEntityTypesEntitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    DeleteEntitiesWithConditionsProjectsLocationsConnectionsEntityTypesEntitiesRequest,
  output:
    DeleteEntitiesWithConditionsProjectsLocationsConnectionsEntityTypesEntitiesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsConnectionsResourcesRequest {
  /** Required. Resource name of the Resource. Format: projects/{project}/locations/{location}/connections/{connection}/resources/{resource} */
  name: string;
  /** headers to be used for the request. For example: headers:'{"x-integration-connectors-managed-connection-id":"conn-id","x-integration-connectors-runtime-config":"runtime-cfg"}' */
  "executionConfig.headers"?: string;
}

export const GetProjectsLocationsConnectionsResourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    "executionConfig.headers": Schema.optional(Schema.String).pipe(
      T.HttpQuery("executionConfig.headers"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsConnectionsResourcesRequest>;

export type GetProjectsLocationsConnectionsResourcesResponse =
  GetResourceResponse;
export const GetProjectsLocationsConnectionsResourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GetResourceResponse;

export type GetProjectsLocationsConnectionsResourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a specific resource. */
export const getProjectsLocationsConnectionsResources: API.OperationMethod<
  GetProjectsLocationsConnectionsResourcesRequest,
  GetProjectsLocationsConnectionsResourcesResponse,
  GetProjectsLocationsConnectionsResourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsConnectionsResourcesRequest,
  output: GetProjectsLocationsConnectionsResourcesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetResourcePostProjectsLocationsConnectionsResourcesRequest {
  /** Required. Resource name of the Resource. Format: projects/{project}/locations/{location}/connections/{connection}/resources/{resource} */
  name: string;
  /** Request body */
  body?: GetResourcePostRequest;
}

export const GetResourcePostProjectsLocationsConnectionsResourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GetResourcePostRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<GetResourcePostProjectsLocationsConnectionsResourcesRequest>;

export type GetResourcePostProjectsLocationsConnectionsResourcesResponse =
  GetResourceResponse;
export const GetResourcePostProjectsLocationsConnectionsResourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GetResourceResponse;

export type GetResourcePostProjectsLocationsConnectionsResourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Gets a specific resource with POST. */
export const getResourcePostProjectsLocationsConnectionsResources: API.OperationMethod<
  GetResourcePostProjectsLocationsConnectionsResourcesRequest,
  GetResourcePostProjectsLocationsConnectionsResourcesResponse,
  GetResourcePostProjectsLocationsConnectionsResourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetResourcePostProjectsLocationsConnectionsResourcesRequest,
  output: GetResourcePostProjectsLocationsConnectionsResourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsConnectionsResourcesRequest {
  /** Required. Resource name of the connection. Format: projects/{project}/locations/{location}/connections/{connection} */
  parent: string;
  /** Optional. Page token for the request. */
  pageToken?: string;
  /** headers to be used for the request. For example: headers:'{"x-integration-connectors-managed-connection-id":"conn-id","x-integration-connectors-runtime-config":"runtime-cfg"}' */
  "executionConfig.headers"?: string;
  /** Optional. Page size for the request. */
  pageSize?: number;
}

export const ListProjectsLocationsConnectionsResourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    "executionConfig.headers": Schema.optional(Schema.String).pipe(
      T.HttpQuery("executionConfig.headers"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/resources" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsConnectionsResourcesRequest>;

export type ListProjectsLocationsConnectionsResourcesResponse =
  ListResourcesResponse;
export const ListProjectsLocationsConnectionsResourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListResourcesResponse;

export type ListProjectsLocationsConnectionsResourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all available resources. */
export const listProjectsLocationsConnectionsResources: API.PaginatedOperationMethod<
  ListProjectsLocationsConnectionsResourcesRequest,
  ListProjectsLocationsConnectionsResourcesResponse,
  ListProjectsLocationsConnectionsResourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsConnectionsResourcesRequest,
  output: ListProjectsLocationsConnectionsResourcesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsConnectionsActionsRequest {
  /** Specifies which fields of the Action are returned in the response. */
  view?:
    | "ACTION_VIEW_UNSPECIFIED"
    | "ACTION_VIEW_BASIC"
    | "ACTION_VIEW_FULL"
    | (string & {});
  /** Required. Parent resource name of the Action. Format: projects/{project}/locations/{location}/connections/{connection} */
  parent: string;
  /** headers to be used for the request. For example: headers:'{"x-integration-connectors-managed-connection-id":"conn-id","x-integration-connectors-runtime-config":"runtime-cfg"}' */
  "executionConfig.headers"?: string;
  /** Number of Actions to return. Defaults to 25. */
  pageSize?: number;
  /** Page token, return from a previous ListActions call, that can be used retrieve the next page of content. If unspecified, the request returns the first page of actions. */
  pageToken?: string;
}

export const ListProjectsLocationsConnectionsActionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    "executionConfig.headers": Schema.optional(Schema.String).pipe(
      T.HttpQuery("executionConfig.headers"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/actions" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsConnectionsActionsRequest>;

export type ListProjectsLocationsConnectionsActionsResponse =
  ListActionsResponse;
export const ListProjectsLocationsConnectionsActionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListActionsResponse;

export type ListProjectsLocationsConnectionsActionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the schema of all the actions supported by the connector. */
export const listProjectsLocationsConnectionsActions: API.PaginatedOperationMethod<
  ListProjectsLocationsConnectionsActionsRequest,
  ListProjectsLocationsConnectionsActionsResponse,
  ListProjectsLocationsConnectionsActionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsConnectionsActionsRequest,
  output: ListProjectsLocationsConnectionsActionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsConnectionsActionsRequest {
  /** Required. Resource name of the Action. Format: projects/{project}/locations/{location}/connections/{connection}/actions/{action} */
  name: string;
  /** Specified view of the action schema. */
  view?:
    | "ACTION_SCHEMA_VIEW_UNSPECIFIED"
    | "ACTION_SCHEMA_VIEW_BASIC"
    | "ACTION_SCHEMA_VIEW_ENRICHED"
    | (string & {});
  /** headers to be used for the request. For example: headers:'{"x-integration-connectors-managed-connection-id":"conn-id","x-integration-connectors-runtime-config":"runtime-cfg"}' */
  "executionConfig.headers"?: string;
}

export const GetProjectsLocationsConnectionsActionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    "executionConfig.headers": Schema.optional(Schema.String).pipe(
      T.HttpQuery("executionConfig.headers"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsConnectionsActionsRequest>;

export type GetProjectsLocationsConnectionsActionsResponse = Action;
export const GetProjectsLocationsConnectionsActionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Action;

export type GetProjectsLocationsConnectionsActionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the schema of the given action. */
export const getProjectsLocationsConnectionsActions: API.OperationMethod<
  GetProjectsLocationsConnectionsActionsRequest,
  GetProjectsLocationsConnectionsActionsResponse,
  GetProjectsLocationsConnectionsActionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsConnectionsActionsRequest,
  output: GetProjectsLocationsConnectionsActionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ExecuteProjectsLocationsConnectionsActionsRequest {
  /** Required. Resource name of the Action. Format: projects/{project}/locations/{location}/connections/{connection}/actions/{action} */
  name: string;
  /** Request body */
  body?: ExecuteActionRequest;
}

export const ExecuteProjectsLocationsConnectionsActionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ExecuteActionRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+name}:execute", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ExecuteProjectsLocationsConnectionsActionsRequest>;

export type ExecuteProjectsLocationsConnectionsActionsResponse =
  ExecuteActionResponse;
export const ExecuteProjectsLocationsConnectionsActionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ExecuteActionResponse;

export type ExecuteProjectsLocationsConnectionsActionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Executes an action with the name specified in the request. The input parameters for executing the action are passed through the body of the ExecuteAction request. */
export const executeProjectsLocationsConnectionsActions: API.OperationMethod<
  ExecuteProjectsLocationsConnectionsActionsRequest,
  ExecuteProjectsLocationsConnectionsActionsResponse,
  ExecuteProjectsLocationsConnectionsActionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExecuteProjectsLocationsConnectionsActionsRequest,
  output: ExecuteProjectsLocationsConnectionsActionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
