// ==========================================================================
// Connectors API (connectors v1)
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
  version: "v1",
  rootUrl: "https://connectors.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface HPAConfig {
  /** Output only. Percent CPU utilization where HPA triggers autoscaling. */
  cpuUtilizationThreshold?: string;
  /** Output only. Percent Memory utilization where HPA triggers autoscaling. */
  memoryUtilizationThreshold?: string;
}

export const HPAConfig: Schema.Schema<HPAConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cpuUtilizationThreshold: Schema.optional(Schema.String),
    memoryUtilizationThreshold: Schema.optional(Schema.String),
  }).annotate({ identifier: "HPAConfig" });

export interface ResourceLimits {
  /** Output only. CPU limit. */
  cpu?: string;
  /** Output only. Memory limit. */
  memory?: string;
}

export const ResourceLimits: Schema.Schema<ResourceLimits> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cpu: Schema.optional(Schema.String),
    memory: Schema.optional(Schema.String),
  }).annotate({ identifier: "ResourceLimits" });

export interface ResourceRequests {
  /** Output only. CPU request. */
  cpu?: string;
  /** Output only. Memory request. */
  memory?: string;
}

export const ResourceRequests: Schema.Schema<ResourceRequests> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cpu: Schema.optional(Schema.String),
    memory: Schema.optional(Schema.String),
  }).annotate({ identifier: "ResourceRequests" });

export interface ConnectorVersionInfraConfig {
  /** Output only. Max QPS supported by the connector version before throttling of requests. */
  ratelimitThreshold?: string;
  /** Output only. Status of the deployment model migration. */
  deploymentModelMigrationState?:
    | "DEPLOYMENT_MODEL_MIGRATION_STATE_UNSPECIFIED"
    | "IN_PROGRESS"
    | "COMPLETED"
    | "ROLLEDBACK"
    | "ROLLBACK_IN_PROGRESS"
    | (string & {});
  /** Output only. Max instance request concurrency. */
  maxInstanceRequestConcurrency?: number;
  /** Output only. HPA autoscaling config. */
  hpaConfig?: HPAConfig;
  /** Output only. System resource limits. */
  resourceLimits?: ResourceLimits;
  /** Output only. System resource requests. */
  resourceRequests?: ResourceRequests;
  /** Output only. Indicates whether connector is deployed on GKE/CloudRun */
  deploymentModel?:
    | "DEPLOYMENT_MODEL_UNSPECIFIED"
    | "GKE_MST"
    | "CLOUD_RUN_MST"
    | (string & {});
  /** Output only. Status of the TLS migration. */
  tlsMigrationState?:
    | "TLS_MIGRATION_STATE_UNSPECIFIED"
    | "TLS_MIGRATION_NOT_STARTED"
    | "TLS_MIGRATION_COMPLETED"
    | (string & {});
  /** Output only. The name of shared connector deployment. */
  sharedDeployment?: string;
  /** Output only. The window used for ratelimiting runtime requests to connections. */
  connectionRatelimitWindowSeconds?: string;
  /** Output only. Max QPS supported for internal requests originating from Connd. */
  internalclientRatelimitThreshold?: string;
}

export const ConnectorVersionInfraConfig: Schema.Schema<ConnectorVersionInfraConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ratelimitThreshold: Schema.optional(Schema.String),
    deploymentModelMigrationState: Schema.optional(Schema.String),
    maxInstanceRequestConcurrency: Schema.optional(Schema.Number),
    hpaConfig: Schema.optional(HPAConfig),
    resourceLimits: Schema.optional(ResourceLimits),
    resourceRequests: Schema.optional(ResourceRequests),
    deploymentModel: Schema.optional(Schema.String),
    tlsMigrationState: Schema.optional(Schema.String),
    sharedDeployment: Schema.optional(Schema.String),
    connectionRatelimitWindowSeconds: Schema.optional(Schema.String),
    internalclientRatelimitThreshold: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConnectorVersionInfraConfig" });

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

export interface NotificationParameter {
  /** Optional. Array of string values. e.g. instance's replica information. */
  values?: ReadonlyArray<string>;
}

export const NotificationParameter: Schema.Schema<NotificationParameter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    values: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "NotificationParameter" });

export interface TimeOfDay {
  /** Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59. */
  minutes?: number;
  /** Hours of a day in 24 hour format. Must be greater than or equal to 0 and typically must be less than or equal to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time. */
  hours?: number;
  /** Seconds of a minute. Must be greater than or equal to 0 and typically must be less than or equal to 59. An API may allow the value 60 if it allows leap-seconds. */
  seconds?: number;
  /** Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999. */
  nanos?: number;
}

export const TimeOfDay: Schema.Schema<TimeOfDay> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minutes: Schema.optional(Schema.Number),
    hours: Schema.optional(Schema.Number),
    seconds: Schema.optional(Schema.Number),
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
  /** Output only. Duration of the time window, set by service producer. */
  duration?: string;
}

export const Schedule: Schema.Schema<Schedule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(TimeOfDay),
    day: Schema.optional(Schema.String),
    duration: Schema.optional(Schema.String),
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
  /** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
  month?: number;
  /** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
  year?: number;
  /** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
  day?: number;
}

export const Connectors_Date: Schema.Schema<Connectors_Date> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    month: Schema.optional(Schema.Number),
    year: Schema.optional(Schema.Number),
    day: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Connectors_Date" });

export interface DenyMaintenancePeriod {
  /** Time in UTC when the Blackout period starts on start_date and ends on end_date. This can be: * Full time. * All zeros for 00:00:00 UTC */
  time?: TimeOfDay;
  /** Deny period end date. This can be: * A full date, with non-zero year, month and day values. * A month and day value, with a zero year. Allows recurring deny periods each year. Date matching this period will have to be before the end. */
  endDate?: Connectors_Date;
  /** Deny period start date. This can be: * A full date, with non-zero year, month and day values. * A month and day value, with a zero year. Allows recurring deny periods each year. Date matching this period will have to be the same or after the start. */
  startDate?: Connectors_Date;
}

export const DenyMaintenancePeriod: Schema.Schema<DenyMaintenancePeriod> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    time: Schema.optional(TimeOfDay),
    endDate: Schema.optional(Connectors_Date),
    startDate: Schema.optional(Connectors_Date),
  }).annotate({ identifier: "DenyMaintenancePeriod" });

export interface UpdatePolicy {
  /** Optional. Maintenance window that is applied to resources covered by this policy. */
  window?: MaintenanceWindow;
  /** Deny Maintenance Period that is applied to resource to indicate when maintenance is forbidden. The protocol supports zero-to-many such periods, but the current SLM Rollout implementation only supports zero-to-one. */
  denyMaintenancePeriods?: ReadonlyArray<DenyMaintenancePeriod>;
  /** Optional. Relative scheduling channel applied to resource. */
  channel?:
    | "UPDATE_CHANNEL_UNSPECIFIED"
    | "EARLIER"
    | "LATER"
    | "WEEK1"
    | "WEEK2"
    | "WEEK5"
    | (string & {});
}

export const UpdatePolicy: Schema.Schema<UpdatePolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    window: Schema.optional(MaintenanceWindow),
    denyMaintenancePeriods: Schema.optional(
      Schema.Array(DenyMaintenancePeriod),
    ),
    channel: Schema.optional(Schema.String),
  }).annotate({ identifier: "UpdatePolicy" });

export interface MaintenancePolicy {
  /** Maintenance policy applicable to instance update. */
  updatePolicy?: UpdatePolicy;
  /** Required. MaintenancePolicy name using the form: `projects/{project_id}/locations/{location_id}/maintenancePolicies/{maintenance_policy_id}` where {project_id} refers to a GCP consumer project ID, {location_id} refers to a GCP region/zone, {maintenance_policy_id} must be 1-63 characters long and match the regular expression `[a-z0-9]([-a-z0-9]*[a-z0-9])?`. */
  name?: string;
  /** Optional. Resource labels to represent user provided metadata. Each label is a key-value pair, where both the key and the value are arbitrary strings provided by the user. */
  labels?: Record<string, string>;
  /** Output only. The time when the resource was updated. */
  updateTime?: string;
  /** Optional. The state of the policy. */
  state?: "STATE_UNSPECIFIED" | "READY" | "DELETING" | (string & {});
  /** Output only. The time when the resource was created. */
  createTime?: string;
  /** Optional. Description of what this policy is for. Create/Update methods return INVALID_ARGUMENT if the length is greater than 512. */
  description?: string;
}

export const MaintenancePolicy: Schema.Schema<MaintenancePolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updatePolicy: Schema.optional(UpdatePolicy),
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    updateTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "MaintenancePolicy" });

export interface MaintenanceSettings {
  /** Optional. If the update call is triggered from rollback, set the value as true. */
  isRollback?: boolean;
  /** Optional. Exclude instance from maintenance. When true, rollout service will not attempt maintenance on the instance. Rollout service will include the instance in reported rollout progress as not attempted. */
  exclude?: boolean;
  /** Optional. The MaintenancePolicies that have been attached to the instance. The key must be of the type name of the oneof policy name defined in MaintenancePolicy, and the embedded policy must define the same policy type. For details, please refer to go/mr-user-guide. Should not be set if maintenance_policy_names is set. If only the name is needed, then only populate MaintenancePolicy.name. */
  maintenancePolicies?: Record<string, MaintenancePolicy>;
}

export const MaintenanceSettings: Schema.Schema<MaintenanceSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isRollback: Schema.optional(Schema.Boolean),
    exclude: Schema.optional(Schema.Boolean),
    maintenancePolicies: Schema.optional(
      Schema.Record(Schema.String, MaintenancePolicy),
    ),
  }).annotate({ identifier: "MaintenanceSettings" });

export interface ProvisionedResource {
  /** Type of the resource. This can be either a GCP resource or a custom one (e.g. another cloud provider's VM). For GCP compute resources use singular form of the names listed in GCP compute API documentation (https://cloud.google.com/compute/docs/reference/rest/v1/), prefixed with 'compute-', for example: 'compute-instance', 'compute-disk', 'compute-autoscaler'. */
  resourceType?: string;
  /** URL identifying the resource, e.g. "https://www.googleapis.com/compute/v1/projects/...)". */
  resourceUrl?: string;
}

export const ProvisionedResource: Schema.Schema<ProvisionedResource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceType: Schema.optional(Schema.String),
    resourceUrl: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProvisionedResource" });

export interface MaintenanceSchedule {
  /** The scheduled end time for the maintenance. */
  endTime?: string;
  /** This field is deprecated, and will be always set to true since reschedule can happen multiple times now. This field should not be removed until all service producers remove this for their customers. */
  canReschedule?: boolean;
  /** schedule_deadline_time is the time deadline any schedule start time cannot go beyond, including reschedule. It's normally the initial schedule start time plus maintenance window length (1 day or 1 week). Maintenance cannot be scheduled to start beyond this deadline. */
  scheduleDeadlineTime?: string;
  /** The scheduled start time for the maintenance. */
  startTime?: string;
  /** The rollout management policy this maintenance schedule is associated with. When doing reschedule update request, the reschedule should be against this given policy. */
  rolloutManagementPolicy?: string;
}

export const MaintenanceSchedule: Schema.Schema<MaintenanceSchedule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endTime: Schema.optional(Schema.String),
    canReschedule: Schema.optional(Schema.Boolean),
    scheduleDeadlineTime: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    rolloutManagementPolicy: Schema.optional(Schema.String),
  }).annotate({ identifier: "MaintenanceSchedule" });

export interface Instance {
  /** Output only. SLO metadata for instance classification in the Standardized dataplane SLO platform. See go/cloud-ssa-standard-slo for feature description. */
  sloMetadata?: SloMetadata;
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
  /** Optional. notification_parameter are information that service producers may like to include that is not relevant to Rollout. This parameter will only be passed to Gamma and Cloud Logging for notification/logging purpose. */
  notificationParameters?: Record<string, NotificationParameter>;
  /** Optional. Resource labels to represent user provided metadata. Each label is a key-value pair, where both the key and the value are arbitrary strings provided by the user. */
  labels?: Record<string, string>;
  /** consumer_defined_name is the name of the instance set by the service consumers. Generally this is different from the `name` field which reperesents the system-assigned id of the instance which the service consumers do not recognize. This is a required field for tenants onboarding to Maintenance Window notifications (go/slm-rollout-maintenance-policies#prerequisites). */
  consumerDefinedName?: string;
  /** Unique name of the resource. It uses the form: `projects/{project_number}/locations/{location_id}/instances/{instance_id}` Note: This name is passed, stored and logged across the rollout system. So use of consumer project_id or any other consumer PII in the name is strongly discouraged for wipeout (go/wipeout) compliance. See go/elysium/project_ids#storage-guidance for more details. */
  name?: string;
  /** Link to the SLM instance template. Only populated when updating SLM instances via SSA's Actuation service adaptor. Service producers with custom control plane (e.g. Cloud SQL) doesn't need to populate this field. Instead they should use software_versions. */
  slmInstanceTemplate?: string;
  /** Optional. The instance_type of this instance of format: projects/{project_number}/locations/{location_id}/instanceTypes/{instance_type_id}. Instance Type represents a high-level tier or SKU of the service that this instance belong to. When enabled(eg: Maintenance Rollout), Rollout uses 'instance_type' along with 'software_versions' to determine whether instance needs an update or not. */
  instanceType?: string;
  /** Optional. The MaintenanceSettings associated with instance. */
  maintenanceSettings?: MaintenanceSettings;
  /** Output only. Timestamp when the resource was last modified. */
  updateTime?: string;
  /** Optional. The consumer_project_number associated with this Apigee instance. This field is added specifically to support Apigee integration with SLM Rollout and UMM. It represents the numerical project ID of the GCP project that consumes this Apigee instance. It is used for SLM rollout notifications and UMM integration, enabling proper mapping to customer projects and log delivery for Apigee instances. This field complements consumer_project_id and may be used for specific Apigee scenarios where the numerical ID is required. */
  consumerProjectNumber?: string;
  /** Output only. Custom string attributes used primarily to expose producer-specific information in monitoring dashboards. See go/get-instance-metadata. */
  producerMetadata?: Record<string, string>;
  /** Output only. The list of data plane resources provisioned for this instance, e.g. compute VMs. See go/get-instance-metadata. */
  provisionedResources?: ReadonlyArray<ProvisionedResource>;
  /** Output only. Timestamp when the resource was created. */
  createTime?: string;
  /** Output only. ID of the associated GCP tenant project. See go/get-instance-metadata. */
  tenantProjectId?: string;
  /** Software versions that are used to deploy this instance. This can be mutated by rollout services. */
  softwareVersions?: Record<string, string>;
  /** Optional. The MaintenancePolicies that have been attached to the instance. The key must be of the type name of the oneof policy name defined in MaintenancePolicy, and the referenced policy must define the same policy type. For details, please refer to go/mr-user-guide. Should not be set if maintenance_settings.maintenance_policies is set. */
  maintenancePolicyNames?: Record<string, string>;
  /** The MaintenanceSchedule contains the scheduling information of published maintenance schedule with same key as software_versions. */
  maintenanceSchedules?: Record<string, MaintenanceSchedule>;
}

export const Instance: Schema.Schema<Instance> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sloMetadata: Schema.optional(SloMetadata),
    state: Schema.optional(Schema.String),
    notificationParameters: Schema.optional(
      Schema.Record(Schema.String, NotificationParameter),
    ),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    consumerDefinedName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    slmInstanceTemplate: Schema.optional(Schema.String),
    instanceType: Schema.optional(Schema.String),
    maintenanceSettings: Schema.optional(MaintenanceSettings),
    updateTime: Schema.optional(Schema.String),
    consumerProjectNumber: Schema.optional(Schema.String),
    producerMetadata: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    provisionedResources: Schema.optional(Schema.Array(ProvisionedResource)),
    createTime: Schema.optional(Schema.String),
    tenantProjectId: Schema.optional(Schema.String),
    softwareVersions: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    maintenancePolicyNames: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    maintenanceSchedules: Schema.optional(
      Schema.Record(Schema.String, MaintenanceSchedule),
    ),
  }).annotate({ identifier: "Instance" });

export interface PartnerMetadata {
  /** Optional. Marketplace product URL. */
  marketplaceProductUri?: string;
  /** Optional. Additional comments for the submission. */
  additionalComments?: string;
  /** Required. Partner connector display name. */
  partnerConnectorDisplayName?: string;
  /** Output only. Has dynamic open api spec uri. */
  hasDynamicSpecUri?: boolean;
  /** Output only. Local spec path. Required if has_dynamic_spec_uri is true. */
  localSpecPath?: string;
  /** Optional. Marketplace product name. */
  marketplaceProduct?: string;
  /** Required. Details about partner connector use cases. */
  useCases?: string;
  /** Required. Partner name. */
  partner?: string;
  /** Required. Marketplace product ID. */
  marketplaceProductId?: string;
  /** Optional. Marketplace product project ID. */
  marketplaceProductProjectId?: string;
  /** Required. Confirmation that connector meets all applicable requirements mentioned in the Partner Connector Publishing requirements list and Partner onboardiong requirements list (https://cloud.google.com/marketplace/docs/partners/get-started#requirements). */
  confirmPartnerRequirements?: boolean;
  /** Required. Target application for which partner connector is built. */
  targetApplication?: string;
  /** Required. Integration example templates for the custom connector. */
  integrationTemplates?: string;
  /** Required. Target customer segment for the partner connector. */
  targetCustomerSegment?: string;
  /** Required. Public URL for the demo video. */
  demoUri?: string;
  /** Output only. Publish request time. */
  publishRequestTime?: string;
  /** Required. Whether the user has accepted the Google Cloud Platform Terms of Service (https://cloud.google.com/terms/) and the Google Cloud Marketplace Terms of Service (https://cloud.google.com/terms/marketplace/launcher?hl=en). */
  acceptGcpTos?: boolean;
}

export const PartnerMetadata: Schema.Schema<PartnerMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    marketplaceProductUri: Schema.optional(Schema.String),
    additionalComments: Schema.optional(Schema.String),
    partnerConnectorDisplayName: Schema.optional(Schema.String),
    hasDynamicSpecUri: Schema.optional(Schema.Boolean),
    localSpecPath: Schema.optional(Schema.String),
    marketplaceProduct: Schema.optional(Schema.String),
    useCases: Schema.optional(Schema.String),
    partner: Schema.optional(Schema.String),
    marketplaceProductId: Schema.optional(Schema.String),
    marketplaceProductProjectId: Schema.optional(Schema.String),
    confirmPartnerRequirements: Schema.optional(Schema.Boolean),
    targetApplication: Schema.optional(Schema.String),
    integrationTemplates: Schema.optional(Schema.String),
    targetCustomerSegment: Schema.optional(Schema.String),
    demoUri: Schema.optional(Schema.String),
    publishRequestTime: Schema.optional(Schema.String),
    acceptGcpTos: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "PartnerMetadata" });

export interface Header {
  /** Optional. Key of Header. */
  key?: string;
  /** Optional. Value of Header. */
  value?: string;
}

export const Header: Schema.Schema<Header> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "Header" });

export interface EndPoint {
  /** Optional. The URI of the Endpoint. */
  endpointUri?: string;
  /** Optional. List of Header to be added to the Endpoint. */
  headers?: ReadonlyArray<Header>;
}

export const EndPoint: Schema.Schema<EndPoint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endpointUri: Schema.optional(Schema.String),
    headers: Schema.optional(Schema.Array(Header)),
  }).annotate({ identifier: "EndPoint" });

export interface Secret {
  /** Optional. The resource name of the secret version in the format, format as: `projects/* /secrets/* /versions/*`. */
  secretVersion?: string;
}

export const Secret: Schema.Schema<Secret> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    secretVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "Secret" });

export interface EncryptionKey {
  /** Optional. Specifies the type of the encryption key. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "GOOGLE_MANAGED"
    | "CUSTOMER_MANAGED"
    | (string & {});
  /** Optional. The [KMS key name] with which the content of the Operation is encrypted. The expected format: `projects/* /locations/* /keyRings/* /cryptoKeys/*`. Will be empty string if google managed. */
  kmsKeyName?: string;
}

export const EncryptionKey: Schema.Schema<EncryptionKey> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    kmsKeyName: Schema.optional(Schema.String),
  }).annotate({ identifier: "EncryptionKey" });

export interface ConfigVariable {
  /** Optional. Value is an integer */
  intValue?: string;
  /** Optional. Value is a secret. */
  secretValue?: Secret;
  /** Optional. Value is a bool. */
  boolValue?: boolean;
  /** Optional. Key of the config variable. */
  key?: string;
  /** Optional. Value is a string. */
  stringValue?: string;
  /** Optional. Value is a Encryption Key. */
  encryptionKeyValue?: EncryptionKey;
}

export const ConfigVariable: Schema.Schema<ConfigVariable> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intValue: Schema.optional(Schema.String),
    secretValue: Schema.optional(Secret),
    boolValue: Schema.optional(Schema.Boolean),
    key: Schema.optional(Schema.String),
    stringValue: Schema.optional(Schema.String),
    encryptionKeyValue: Schema.optional(EncryptionKey),
  }).annotate({ identifier: "ConfigVariable" });

export interface PubSub {
  /** Optional. Configuration for configuring the trigger */
  configVariables?: ReadonlyArray<ConfigVariable>;
  /** Required. The project id which has the Pub/Sub topic. */
  projectId?: string;
  /** Required. The topic id of the Pub/Sub topic. */
  topicId?: string;
  /** Optional. Pub/Sub message attributes to be added to the Pub/Sub message. */
  attributes?: Record<string, string>;
}

export const PubSub: Schema.Schema<PubSub> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    configVariables: Schema.optional(Schema.Array(ConfigVariable)),
    projectId: Schema.optional(Schema.String),
    topicId: Schema.optional(Schema.String),
    attributes: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "PubSub" });

export interface EventSubscriptionDestination {
  /** Optional. type of the destination */
  type?: "TYPE_UNSPECIFIED" | "ENDPOINT" | "GCS" | "PUBSUB" | (string & {});
  /** Optional. Service account needed for runtime plane to trigger IP workflow. */
  serviceAccount?: string;
  /** OPTION 1: Hit an endpoint when we receive an event. */
  endpoint?: EndPoint;
  /** OPTION 3: Write the event to Pub/Sub topic. */
  pubsub?: PubSub;
}

export const EventSubscriptionDestination: Schema.Schema<EventSubscriptionDestination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    serviceAccount: Schema.optional(Schema.String),
    endpoint: Schema.optional(EndPoint),
    pubsub: Schema.optional(PubSub),
  }).annotate({ identifier: "EventSubscriptionDestination" });

export interface EventSubscriptionStatus {
  /** Output only. State of Event Subscription resource. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "UPDATING"
    | "ACTIVE"
    | "SUSPENDED"
    | "ERROR"
    | (string & {});
  /** Output only. Description of the state. */
  description?: string;
}

export const EventSubscriptionStatus: Schema.Schema<EventSubscriptionStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "EventSubscriptionStatus" });

export interface JMS {
  /** Optional. Type of the JMS Source. i.e. Queue or Topic */
  type?: "TYPE_UNSPECIFIED" | "QUEUE" | "TOPIC" | (string & {});
  /** Optional. Name of the JMS source. i.e. queueName or topicName */
  name?: string;
}

export const JMS: Schema.Schema<JMS> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "JMS" });

export interface EventSubscription {
  /** Optional. The destination to hit when we receive an event */
  destinations?: EventSubscriptionDestination;
  /** Optional. Configuration for configuring the trigger */
  triggerConfigVariables?: ReadonlyArray<ConfigVariable>;
  /** Optional. Filter for the event subscription. Incoming events are filtered based on the filter expression. */
  filter?: string;
  /** Output only. Updated time. */
  updateTime?: string;
  /** Optional. name of the Subscriber for the current EventSubscription. */
  subscriber?: string;
  /** Optional. Status indicates the status of the event subscription resource */
  status?: EventSubscriptionStatus;
  /** Optional. Event type id of the event of current EventSubscription. */
  eventTypeId?: string;
  /** Required. Identifier. Resource name of the EventSubscription. Format: projects/{project}/locations/{location}/connections/{connection}/eventSubscriptions/{event_subscription} */
  name?: string;
  /** Optional. JMS is the source for the event listener. */
  jms?: JMS;
  /** Output only. Created time. */
  createTime?: string;
  /** Optional. Link for Subscriber of the current EventSubscription. */
  subscriberLink?: string;
}

export const EventSubscription: Schema.Schema<EventSubscription> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    destinations: Schema.optional(EventSubscriptionDestination),
    triggerConfigVariables: Schema.optional(Schema.Array(ConfigVariable)),
    filter: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    subscriber: Schema.optional(Schema.String),
    status: Schema.optional(EventSubscriptionStatus),
    eventTypeId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    jms: Schema.optional(JMS),
    createTime: Schema.optional(Schema.String),
    subscriberLink: Schema.optional(Schema.String),
  }).annotate({ identifier: "EventSubscription" });

export interface WithdrawCustomConnectorVersionRequest {}

export const WithdrawCustomConnectorVersionRequest: Schema.Schema<WithdrawCustomConnectorVersionRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "WithdrawCustomConnectorVersionRequest",
  });

export interface EventingStatus {
  /** Output only. Description of error if State is set to "ERROR". */
  description?: string;
  /** Output only. State. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "ERROR"
    | "INGRESS_ENDPOINT_REQUIRED"
    | (string & {});
}

export const EventingStatus: Schema.Schema<EventingStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "EventingStatus" });

export interface EUASecret {
  /** Optional. The plain string value of the secret. */
  secretValue?: string;
  /** Optional. The resource name of the secret version in the format, format as: `projects/* /secrets/* /versions/*`. */
  secretVersion?: string;
}

export const EUASecret: Schema.Schema<EUASecret> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    secretValue: Schema.optional(Schema.String),
    secretVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "EUASecret" });

export interface EndUserAuthenticationConfigOauth2ClientCredentials {
  /** The client identifier. */
  clientId?: string;
  /** Required. string value or secret version containing the client secret. */
  clientSecret?: EUASecret;
}

export const EndUserAuthenticationConfigOauth2ClientCredentials: Schema.Schema<EndUserAuthenticationConfigOauth2ClientCredentials> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clientId: Schema.optional(Schema.String),
    clientSecret: Schema.optional(EUASecret),
  }).annotate({
    identifier: "EndUserAuthenticationConfigOauth2ClientCredentials",
  });

export interface AuthField {
  /** Key of the field. */
  key?: string;
  /** Description of the field. */
  description?: string;
  /** Data type of the field. */
  dataType?: string;
}

export const AuthField: Schema.Schema<AuthField> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    dataType: Schema.optional(Schema.String),
  }).annotate({ identifier: "AuthField" });

export interface AuthSchema {
  /** Description of the schema. */
  description?: string;
  /** List of AuthFields. */
  authFields?: ReadonlyArray<AuthField>;
  /** Auth type of the schema. */
  authType?:
    | "AUTH_TYPE_UNSPECIFIED"
    | "USER_PASSWORD"
    | "OAUTH2_JWT_BEARER"
    | "OAUTH2_CLIENT_CREDENTIALS"
    | "SSH_PUBLIC_KEY"
    | "OAUTH2_AUTH_CODE_FLOW"
    | "GOOGLE_AUTHENTICATION"
    | "OAUTH2_AUTH_CODE_FLOW_GOOGLE_MANAGED"
    | (string & {});
  /** Display name of the schema. */
  displayName?: string;
  /** Auth key of the schema. */
  authKey?: string;
  /** Whether the auth schema is the default one. */
  isDefault?: boolean;
}

export const AuthSchema: Schema.Schema<AuthSchema> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    authFields: Schema.optional(Schema.Array(AuthField)),
    authType: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    authKey: Schema.optional(Schema.String),
    isDefault: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "AuthSchema" });

export interface SchemaRefreshConfig {
  /** Whether to use synchronous schema refresh. */
  useSynchronousSchemaRefresh?: boolean;
  /** Whether to use displayName for actions in UI. */
  useActionDisplayNames?: boolean;
}

export const SchemaRefreshConfig: Schema.Schema<SchemaRefreshConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    useSynchronousSchemaRefresh: Schema.optional(Schema.Boolean),
    useActionDisplayNames: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "SchemaRefreshConfig" });

export interface Destination {
  /** For publicly routable host. */
  host?: string;
  /** PSC service attachments. Format: projects/* /regions/* /serviceAttachments/* */
  serviceAttachment?: string;
  /** Optional. The port is the target port number that is accepted by the destination. */
  port?: number;
}

export const Destination: Schema.Schema<Destination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    host: Schema.optional(Schema.String),
    serviceAttachment: Schema.optional(Schema.String),
    port: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Destination" });

export interface DestinationConfig {
  /** Optional. The destinations for the key. */
  destinations?: ReadonlyArray<Destination>;
  /** Optional. The key is the destination identifier that is supported by the Connector. */
  key?: string;
}

export const DestinationConfig: Schema.Schema<DestinationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    destinations: Schema.optional(Schema.Array(Destination)),
    key: Schema.optional(Schema.String),
  }).annotate({ identifier: "DestinationConfig" });

export interface UserPassword {
  /** Optional. Secret version reference containing the password. */
  password?: Secret;
  /** Optional. Username. */
  username?: string;
}

export const UserPassword: Schema.Schema<UserPassword> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    password: Schema.optional(Secret),
    username: Schema.optional(Schema.String),
  }).annotate({ identifier: "UserPassword" });

export interface SshPublicKey {
  /** Optional. Format of SSH Client cert. */
  certType?: string;
  /** Optional. Password (passphrase) for ssh client certificate if it has one. */
  sshClientCertPass?: Secret;
  /** Optional. The user account used to authenticate. */
  username?: string;
  /** Optional. SSH Client Cert. It should contain both public and private key. */
  sshClientCert?: Secret;
}

export const SshPublicKey: Schema.Schema<SshPublicKey> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    certType: Schema.optional(Schema.String),
    sshClientCertPass: Schema.optional(Secret),
    username: Schema.optional(Schema.String),
    sshClientCert: Schema.optional(Secret),
  }).annotate({ identifier: "SshPublicKey" });

export interface Oauth2ClientCredentials {
  /** Optional. The client identifier. */
  clientId?: string;
  /** Optional. Secret version reference containing the client secret. */
  clientSecret?: Secret;
}

export const Oauth2ClientCredentials: Schema.Schema<Oauth2ClientCredentials> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clientId: Schema.optional(Schema.String),
    clientSecret: Schema.optional(Secret),
  }).annotate({ identifier: "Oauth2ClientCredentials" });

export interface JwtClaims {
  /** Optional. Value for the "iss" claim. */
  issuer?: string;
  /** Optional. Value for the "sub" claim. */
  subject?: string;
  /** Optional. Value for the "aud" claim. */
  audience?: string;
}

export const JwtClaims: Schema.Schema<JwtClaims> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    issuer: Schema.optional(Schema.String),
    subject: Schema.optional(Schema.String),
    audience: Schema.optional(Schema.String),
  }).annotate({ identifier: "JwtClaims" });

export interface Oauth2JwtBearer {
  /** Optional. Secret version reference containing a PKCS#8 PEM-encoded private key associated with the Client Certificate. This private key will be used to sign JWTs used for the jwt-bearer authorization grant. Specified in the form as: `projects/* /secrets/* /versions/*`. */
  clientKey?: Secret;
  /** Optional. JwtClaims providers fields to generate the token. */
  jwtClaims?: JwtClaims;
}

export const Oauth2JwtBearer: Schema.Schema<Oauth2JwtBearer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clientKey: Schema.optional(Secret),
    jwtClaims: Schema.optional(JwtClaims),
  }).annotate({ identifier: "Oauth2JwtBearer" });

export interface Oauth2AuthCodeFlowGoogleManaged {
  /** Required. Scopes the connection will request when the user performs the auth code flow. */
  scopes?: ReadonlyArray<string>;
  /** Optional. Authorization code to be exchanged for access and refresh tokens. */
  authCode?: string;
  /** Optional. Redirect URI to be provided during the auth code exchange. */
  redirectUri?: string;
}

export const Oauth2AuthCodeFlowGoogleManaged: Schema.Schema<Oauth2AuthCodeFlowGoogleManaged> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scopes: Schema.optional(Schema.Array(Schema.String)),
    authCode: Schema.optional(Schema.String),
    redirectUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "Oauth2AuthCodeFlowGoogleManaged" });

export interface Oauth2AuthCodeFlow {
  /** Optional. Client ID for user-provided OAuth app. */
  clientId?: string;
  /** Optional. Client secret for user-provided OAuth app. */
  clientSecret?: Secret;
  /** Optional. PKCE verifier to be used during the auth code exchange. */
  pkceVerifier?: string;
  /** Optional. Whether to enable PKCE when the user performs the auth code flow. */
  enablePkce?: boolean;
  /** Optional. Scopes the connection will request when the user performs the auth code flow. */
  scopes?: ReadonlyArray<string>;
  /** Optional. Auth URL for Authorization Code Flow */
  authUri?: string;
  /** Optional. Authorization code to be exchanged for access and refresh tokens. */
  authCode?: string;
  /** Optional. Redirect URI to be provided during the auth code exchange. */
  redirectUri?: string;
}

export const Oauth2AuthCodeFlow: Schema.Schema<Oauth2AuthCodeFlow> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clientId: Schema.optional(Schema.String),
    clientSecret: Schema.optional(Secret),
    pkceVerifier: Schema.optional(Schema.String),
    enablePkce: Schema.optional(Schema.Boolean),
    scopes: Schema.optional(Schema.Array(Schema.String)),
    authUri: Schema.optional(Schema.String),
    authCode: Schema.optional(Schema.String),
    redirectUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "Oauth2AuthCodeFlow" });

export interface AuthConfig {
  /** UserPassword. */
  userPassword?: UserPassword;
  /** Optional. Identifier key for auth config */
  authKey?: string;
  /** Optional. The type of authentication configured. */
  authType?:
    | "AUTH_TYPE_UNSPECIFIED"
    | "USER_PASSWORD"
    | "OAUTH2_JWT_BEARER"
    | "OAUTH2_CLIENT_CREDENTIALS"
    | "SSH_PUBLIC_KEY"
    | "OAUTH2_AUTH_CODE_FLOW"
    | "GOOGLE_AUTHENTICATION"
    | "OAUTH2_AUTH_CODE_FLOW_GOOGLE_MANAGED"
    | (string & {});
  /** SSH Public Key. */
  sshPublicKey?: SshPublicKey;
  /** Optional. List containing additional auth configs. */
  additionalVariables?: ReadonlyArray<ConfigVariable>;
  /** Oauth2ClientCredentials. */
  oauth2ClientCredentials?: Oauth2ClientCredentials;
  /** Oauth2JwtBearer. */
  oauth2JwtBearer?: Oauth2JwtBearer;
  /** Oauth2AuthCodeFlowGoogleManaged. */
  oauth2AuthCodeFlowGoogleManaged?: Oauth2AuthCodeFlowGoogleManaged;
  /** Oauth2AuthCodeFlow. */
  oauth2AuthCodeFlow?: Oauth2AuthCodeFlow;
}

export const AuthConfig: Schema.Schema<AuthConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userPassword: Schema.optional(UserPassword),
    authKey: Schema.optional(Schema.String),
    authType: Schema.optional(Schema.String),
    sshPublicKey: Schema.optional(SshPublicKey),
    additionalVariables: Schema.optional(Schema.Array(ConfigVariable)),
    oauth2ClientCredentials: Schema.optional(Oauth2ClientCredentials),
    oauth2JwtBearer: Schema.optional(Oauth2JwtBearer),
    oauth2AuthCodeFlowGoogleManaged: Schema.optional(
      Oauth2AuthCodeFlowGoogleManaged,
    ),
    oauth2AuthCodeFlow: Schema.optional(Oauth2AuthCodeFlow),
  }).annotate({ identifier: "AuthConfig" });

export interface Resource {
  /** Optional. Different types of resource supported. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "GCP_PROJECT"
    | "GCP_RESOURCE"
    | "GCP_SECRETMANAGER_SECRET"
    | "GCP_SECRETMANAGER_SECRET_VERSION"
    | (string & {});
  /** Optional. Template to uniquely represent a Google Cloud resource in a format IAM expects This is a template that can have references to other values provided in the config variable template. */
  pathTemplate?: string;
}

export const Resource: Schema.Schema<Resource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    pathTemplate: Schema.optional(Schema.String),
  }).annotate({ identifier: "Resource" });

export interface RoleGrant {
  /** Optional. List of roles that need to be granted. */
  roles?: ReadonlyArray<string>;
  /** Optional. Principal/Identity for whom the role need to assigned. */
  principal?: "PRINCIPAL_UNSPECIFIED" | "CONNECTOR_SA" | (string & {});
  /** Optional. Resource on which the roles needs to be granted for the principal. */
  resource?: Resource;
  /** Optional. Template that UI can use to provide helper text to customers. */
  helperTextTemplate?: string;
}

export const RoleGrant: Schema.Schema<RoleGrant> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    roles: Schema.optional(Schema.Array(Schema.String)),
    principal: Schema.optional(Schema.String),
    resource: Schema.optional(Resource),
    helperTextTemplate: Schema.optional(Schema.String),
  }).annotate({ identifier: "RoleGrant" });

export interface MultipleSelectOption {
  /** Required. Key of the option. */
  key?: string;
  /** Required. Display name of the option. */
  displayName?: string;
  /** Optional. Value of the option. */
  description?: string;
  /** Optional. Indicates if the option is preselected. */
  preselected?: boolean;
}

export const MultipleSelectOption: Schema.Schema<MultipleSelectOption> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    preselected: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "MultipleSelectOption" });

export interface MultipleSelectConfig {
  /** Required. Value separator. Only "," can be used for OAuth auth code flow scope field. */
  valueSeparator?: string;
  /** Required. Multiple select options. */
  multipleSelectOptions?: ReadonlyArray<MultipleSelectOption>;
  /** Optional. Allow custom values. */
  allowCustomValues?: boolean;
}

export const MultipleSelectConfig: Schema.Schema<MultipleSelectConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    valueSeparator: Schema.optional(Schema.String),
    multipleSelectOptions: Schema.optional(Schema.Array(MultipleSelectOption)),
    allowCustomValues: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "MultipleSelectConfig" });

export interface FieldComparison {
  /** Optional. Key of the field. */
  key?: string;
  /** String value */
  stringValue?: string;
  /** Integer value */
  intValue?: string;
  /** Boolean value */
  boolValue?: boolean;
  /** Optional. Comparator to use for comparing the field value. */
  comparator?:
    | "COMPARATOR_UNSPECIFIED"
    | "EQUALS"
    | "NOT_EQUALS"
    | (string & {});
}

export const FieldComparison: Schema.Schema<FieldComparison> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
    stringValue: Schema.optional(Schema.String),
    intValue: Schema.optional(Schema.String),
    boolValue: Schema.optional(Schema.Boolean),
    comparator: Schema.optional(Schema.String),
  }).annotate({ identifier: "FieldComparison" });

export interface LogicalExpression {
  /** Optional. A list of nested conditions to be compared. */
  logicalExpressions?: ReadonlyArray<LogicalExpression>;
  /** Optional. A list of fields to be compared. */
  fieldComparisons?: ReadonlyArray<FieldComparison>;
  /** Optional. The logical operator to use between the fields and conditions. */
  logicalOperator?: "OPERATOR_UNSPECIFIED" | "AND" | "OR" | (string & {});
}

export const LogicalExpression: Schema.Schema<LogicalExpression> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      logicalExpressions: Schema.optional(Schema.Array(LogicalExpression)),
      fieldComparisons: Schema.optional(Schema.Array(FieldComparison)),
      logicalOperator: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "LogicalExpression",
  }) as any as Schema.Schema<LogicalExpression>;

export interface AuthorizationCodeLink {
  /** Optional. Omit query params from the redirect URI. */
  omitQueryParams?: boolean;
  /** Optional. The base URI the user must click to trigger the authorization code login flow. */
  uri?: string;
  /** Optional. The scopes for which the user will authorize Google Cloud Connectors on the connector data source. */
  scopes?: ReadonlyArray<string>;
  /** Optional. Whether to enable PKCE for the auth code flow. */
  enablePkce?: boolean;
  /** Optional. The client ID assigned to the Google Cloud Connectors OAuth app for the connector data source. */
  clientId?: string;
  /** Optional. The client secret assigned to the Google Cloud Connectors OAuth app for the connector data source. */
  clientSecret?: Secret;
}

export const AuthorizationCodeLink: Schema.Schema<AuthorizationCodeLink> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    omitQueryParams: Schema.optional(Schema.Boolean),
    uri: Schema.optional(Schema.String),
    scopes: Schema.optional(Schema.Array(Schema.String)),
    enablePkce: Schema.optional(Schema.Boolean),
    clientId: Schema.optional(Schema.String),
    clientSecret: Schema.optional(Secret),
  }).annotate({ identifier: "AuthorizationCodeLink" });

export interface EnumOption {
  /** Optional. Id of the option. */
  id?: string;
  /** Optional. Display name of the option. */
  displayName?: string;
}

export const EnumOption: Schema.Schema<EnumOption> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "EnumOption" });

export interface ConfigVariableTemplate {
  /** Optional. Role grant configuration for the config variable. */
  roleGrant?: RoleGrant;
  /** Output only. State of the config variable. */
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "DEPRECATED" | (string & {});
  /** Optional. Location Type denotes where this value should be sent in BYOC connections. */
  locationType?:
    | "LOCATION_TYPE_UNSPECIFIED"
    | "HEADER"
    | "PAYLOAD"
    | "QUERY_PARAM"
    | "PATH_PARAM"
    | (string & {});
  /** Optional. MultipleSelectConfig represents the multiple options for a config variable. */
  multipleSelectConfig?: MultipleSelectConfig;
  /** Optional. Condition under which a field would be required. The condition can be represented in the form of a logical expression. */
  requiredCondition?: LogicalExpression;
  /** Optional. Type of the parameter: string, int, bool etc. consider custom type for the benefit for the validation. */
  valueType?:
    | "VALUE_TYPE_UNSPECIFIED"
    | "STRING"
    | "INT"
    | "BOOL"
    | "SECRET"
    | "ENUM"
    | "AUTHORIZATION_CODE"
    | "ENCRYPTION_KEY"
    | "MULTIPLE_SELECT"
    | (string & {});
  /** Optional. enum source denotes the source of api to fill the enum options */
  enumSource?: "ENUM_SOURCE_UNSPECIFIED" | "EVENT_TYPES_API" | (string & {});
  /** Optional. Regular expression in RE2 syntax used for validating the `value` of a `ConfigVariable`. */
  validationRegex?: string;
  /** Optional. Authorization code link options. To be populated if `ValueType` is `AUTHORIZATION_CODE` */
  authorizationCodeLink?: AuthorizationCodeLink;
  /** Optional. Description. */
  description?: string;
  /** Optional. Display name of the parameter. */
  displayName?: string;
  /** Optional. Indicates if current template is part of advanced settings */
  isAdvanced?: boolean;
  /** Optional. Key of the config variable. */
  key?: string;
  /** Optional. Flag represents that this `ConfigVariable` must be provided for a connection. */
  required?: boolean;
  /** Optional. Enum options. To be populated if `ValueType` is `ENUM` */
  enumOptions?: ReadonlyArray<EnumOption>;
}

export const ConfigVariableTemplate: Schema.Schema<ConfigVariableTemplate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    roleGrant: Schema.optional(RoleGrant),
    state: Schema.optional(Schema.String),
    locationType: Schema.optional(Schema.String),
    multipleSelectConfig: Schema.optional(MultipleSelectConfig),
    requiredCondition: Schema.optional(LogicalExpression),
    valueType: Schema.optional(Schema.String),
    enumSource: Schema.optional(Schema.String),
    validationRegex: Schema.optional(Schema.String),
    authorizationCodeLink: Schema.optional(AuthorizationCodeLink),
    description: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    isAdvanced: Schema.optional(Schema.Boolean),
    key: Schema.optional(Schema.String),
    required: Schema.optional(Schema.Boolean),
    enumOptions: Schema.optional(Schema.Array(EnumOption)),
  }).annotate({ identifier: "ConfigVariableTemplate" });

export interface AuthConfigTemplate {
  /** Connector specific description for an authentication template. */
  description?: string;
  /** Config variables to describe an `AuthConfig` for a `Connection`. */
  configVariableTemplates?: ReadonlyArray<ConfigVariableTemplate>;
  /** Identifier key for auth config */
  authKey?: string;
  /** The type of authentication configured. */
  authType?:
    | "AUTH_TYPE_UNSPECIFIED"
    | "USER_PASSWORD"
    | "OAUTH2_JWT_BEARER"
    | "OAUTH2_CLIENT_CREDENTIALS"
    | "SSH_PUBLIC_KEY"
    | "OAUTH2_AUTH_CODE_FLOW"
    | "GOOGLE_AUTHENTICATION"
    | "OAUTH2_AUTH_CODE_FLOW_GOOGLE_MANAGED"
    | (string & {});
  /** Display name for authentication template. */
  displayName?: string;
  /** Whether the auth config is the default one. */
  isDefault?: boolean;
}

export const AuthConfigTemplate: Schema.Schema<AuthConfigTemplate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    configVariableTemplates: Schema.optional(
      Schema.Array(ConfigVariableTemplate),
    ),
    authKey: Schema.optional(Schema.String),
    authType: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    isDefault: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "AuthConfigTemplate" });

export interface PublishStatus {
  /** Output only. Publish state of the custom connector. */
  publishState?:
    | "PUBLISH_STATE_UNSPECIFIED"
    | "PUBLISHED"
    | "PUBLISH_IN_PROGRESS"
    | "UNPUBLISHED"
    | (string & {});
  /** Output only. Partner connector name. Will be set on the custom connector. Format: providers/partner/connectors//versions/ */
  publishedAs?: string;
  /** Output only. Custom connector name. Will be set on the partner connector. Format: providers/customconnectors/connectors//versions/ */
  publishedSource?: string;
  /** Output only. Publish time. */
  publishTime?: string;
}

export const PublishStatus: Schema.Schema<PublishStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    publishState: Schema.optional(Schema.String),
    publishedAs: Schema.optional(Schema.String),
    publishedSource: Schema.optional(Schema.String),
    publishTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "PublishStatus" });

export interface CustomConnectorVersion {
  /** Output only. State of the custom connector version. */
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "DEPRECATED" | (string & {});
  /** Optional. Indicates if Async Operations/Connector Job is supported. This is only available for SDK based custom connectors. */
  asyncOperationsSupport?: boolean;
  /** Output only. Server URLs parsed from the Open API spec. This is only used for Open API based custom connectors. */
  specServerUrls?: ReadonlyArray<string>;
  /** Optional. Destination config(s) for accessing connector service (facade). This is used only when enable_backend_destination_config is true. */
  destinationConfigs?: ReadonlyArray<DestinationConfig>;
  /** Optional. Location of the custom connector spec. This is only used for Open API based custom connectors. The location can be either a public url like `https://public-url.com/spec` Or a Google Cloud Storage location like `gs:///`. */
  specLocation?: string;
  /** Optional. Service account used by runtime plane to access auth config secrets. */
  serviceAccount?: string;
  /** Optional. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources */
  labels?: Record<string, string>;
  /** Optional. Authentication config for accessing connector service (facade). This is used only when enable_backend_destination_config is true. */
  authConfig?: AuthConfig;
  /** Output only. Identifier. Resource name of the Version. Format: projects/{project}/locations/{location}/customConnectors/{custom_connector}/customConnectorVersions/{custom_connector_version} */
  name?: string;
  /** Optional. Indicates if an intermediatory connectorservice is used as backend. When this is enabled, the connector destination and connector auth config are required. For SDK based connectors, this is always enabled. */
  enableBackendDestinationConfig?: boolean;
  /** Optional. Auth Config Templates is only used when connector backend is enabled. This is used to specify the auth configs supported by the connector backend service to talk to the actual application backend. */
  authConfigTemplates?: ReadonlyArray<AuthConfigTemplate>;
  /** Output only. Updated time. */
  updateTime?: string;
  /** Optional. Partner metadata details. This should be populated only when publishing the custom connector to partner connector. */
  partnerMetadata?: PartnerMetadata;
  /** Output only. Publish status of a custom connector. */
  publishStatus?: PublishStatus;
  /** Output only. Created time. */
  createTime?: string;
  /** Optional. Auth override support. */
  authOverrideSupport?: boolean;
  /** Optional. Backend variable templates is only used when connector backend is enabled. This is used to specify the variables required by the connector backend service to talk to the actual application backend. This translates to additional variable templates in the connection config. */
  backendVariableTemplates?: ReadonlyArray<ConfigVariableTemplate>;
}

export const CustomConnectorVersion: Schema.Schema<CustomConnectorVersion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    asyncOperationsSupport: Schema.optional(Schema.Boolean),
    specServerUrls: Schema.optional(Schema.Array(Schema.String)),
    destinationConfigs: Schema.optional(Schema.Array(DestinationConfig)),
    specLocation: Schema.optional(Schema.String),
    serviceAccount: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    authConfig: Schema.optional(AuthConfig),
    name: Schema.optional(Schema.String),
    enableBackendDestinationConfig: Schema.optional(Schema.Boolean),
    authConfigTemplates: Schema.optional(Schema.Array(AuthConfigTemplate)),
    updateTime: Schema.optional(Schema.String),
    partnerMetadata: Schema.optional(PartnerMetadata),
    publishStatus: Schema.optional(PublishStatus),
    createTime: Schema.optional(Schema.String),
    authOverrideSupport: Schema.optional(Schema.Boolean),
    backendVariableTemplates: Schema.optional(
      Schema.Array(ConfigVariableTemplate),
    ),
  }).annotate({ identifier: "CustomConnectorVersion" });

export interface EventType {
  /** Output only. Created time. */
  createTime?: string;
  /** Output only. Schema of webhook event payload. */
  eventPayloadSchema?: string;
  /** Output only. Id path denotes the path of id in webhook payload. */
  idPath?: string;
  /** Output only. Updated time. */
  updateTime?: string;
  /** Output only. Resource name of the eventtype. Format: projects/{project}/locations/{location}/providers/{provider}/connectors/{connector}/versions/{version}/eventtypes/{eventtype} Only global location is supported for Connector resource. */
  name?: string;
  /** Output only. Schema of the event payload after enriched. Will be null if read before send is not supported. */
  enrichedEventPayloadSchema?: string;
  /** Output only. Event type id. Example: `ticket.created`. */
  eventTypeId?: string;
  /** Output only. Runtime entity type name. Will be null if entity type map is not available. Used for read before send feature. */
  entityType?: string;
}

export const EventType: Schema.Schema<EventType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    eventPayloadSchema: Schema.optional(Schema.String),
    idPath: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    enrichedEventPayloadSchema: Schema.optional(Schema.String),
    eventTypeId: Schema.optional(Schema.String),
    entityType: Schema.optional(Schema.String),
  }).annotate({ identifier: "EventType" });

export interface ListenEventRequest {
  /** Optional. Request payload. */
  payload?: Record<string, unknown>;
}

export const ListenEventRequest: Schema.Schema<ListenEventRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "ListenEventRequest" });

export interface EventingDetails {
  /** Output only. Custom Event Types. */
  customEventTypes?: boolean;
  /** Output only. Name of the Eventing trigger. */
  name?: string;
  /** Output only. Link to public documentation. */
  documentationLink?: string;
  /** Output only. The type of the event listener for a specific connector. */
  type?: "TYPE_UNSPECIFIED" | "WEBHOOK" | "JMS" | (string & {});
  /** Output only. Description. */
  description?: string;
  /** Output only. Cloud storage location of the icon. */
  iconLocation?: string;
  /** Output only. Eventing Launch Stage. */
  launchStage?:
    | "LAUNCH_STAGE_UNSPECIFIED"
    | "PREVIEW"
    | "GA"
    | "DEPRECATED"
    | "TEST"
    | "PRIVATE_PREVIEW"
    | (string & {});
  /** Output only. Array of search keywords. */
  searchTags?: ReadonlyArray<string>;
  /** The webhook model supported by this connector. */
  subscriptionType?:
    | "SUBSCRIPTION_TYPE_UNSPECIFIED"
    | "SHARED"
    | "USER_SPECIFIC"
    | (string & {});
}

export const EventingDetails: Schema.Schema<EventingDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customEventTypes: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    documentationLink: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    iconLocation: Schema.optional(Schema.String),
    launchStage: Schema.optional(Schema.String),
    searchTags: Schema.optional(Schema.Array(Schema.String)),
    subscriptionType: Schema.optional(Schema.String),
  }).annotate({ identifier: "EventingDetails" });

export interface NetworkEgressModeOverride {
  /** Determines the VPC Egress mode for the connector. */
  networkEgressMode?:
    | "NETWORK_EGRESS_MODE_UNSPECIFIED"
    | "SERVERLESS_VPC_ACCESS_CONNECTOR"
    | "DIRECT_VPC_EGRESS"
    | (string & {});
  /** boolean should be set to true to make sure only eventing enabled connections are migrated to direct vpc egress. */
  isEventingOverrideEnabled?: boolean;
  /** boolean should be set to true to make sure only async operations enabled connections are migrated to direct vpc egress. */
  isJobsOverrideEnabled?: boolean;
}

export const NetworkEgressModeOverride: Schema.Schema<NetworkEgressModeOverride> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    networkEgressMode: Schema.optional(Schema.String),
    isEventingOverrideEnabled: Schema.optional(Schema.Boolean),
    isJobsOverrideEnabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "NetworkEgressModeOverride" });

export interface LockConfig {
  /** Optional. Indicates whether or not the connection is locked. */
  locked?: boolean;
  /** Optional. Describes why a connection is locked. */
  reason?: string;
}

export const LockConfig: Schema.Schema<LockConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locked: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.String),
  }).annotate({ identifier: "LockConfig" });

export interface AuthProperty {
  /** Type of the property. */
  type?: string;
  /** Description of the property. */
  description?: string;
}

export const AuthProperty: Schema.Schema<AuthProperty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "AuthProperty" });

export interface AuthObject {
  /** Auth type of the object. */
  authType?: string;
  /** Properties of the object. */
  properties?: Record<string, AuthProperty>;
  /** Auth key of the object. */
  authKey?: string;
  /** Whether the object has additional properties. */
  additionalProperties?: boolean;
  /** Type of the object. */
  type?: string;
  /** Whether the object is the default one. */
  isDefault?: boolean;
  /** Description of the object. */
  description?: string;
}

export const AuthObject: Schema.Schema<AuthObject> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authType: Schema.optional(Schema.String),
    properties: Schema.optional(Schema.Record(Schema.String, AuthProperty)),
    authKey: Schema.optional(Schema.String),
    additionalProperties: Schema.optional(Schema.Boolean),
    type: Schema.optional(Schema.String),
    isDefault: Schema.optional(Schema.Boolean),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "AuthObject" });

export interface EndUserAuthenticationConfigVariable {
  /** Value is a bool. */
  boolValue?: boolean;
  /** Value is an integer */
  intValue?: string;
  /** Value is a secret */
  secretValue?: EUASecret;
  /** Required. Key of the config variable. */
  key?: string;
  /** Value is a string. */
  stringValue?: string;
}

export const EndUserAuthenticationConfigVariable: Schema.Schema<EndUserAuthenticationConfigVariable> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    boolValue: Schema.optional(Schema.Boolean),
    intValue: Schema.optional(Schema.String),
    secretValue: Schema.optional(EUASecret),
    key: Schema.optional(Schema.String),
    stringValue: Schema.optional(Schema.String),
  }).annotate({ identifier: "EndUserAuthenticationConfigVariable" });

export interface StandardEntity {
  /** Name of the standard entity. */
  name?: string;
}

export const StandardEntity: Schema.Schema<StandardEntity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "StandardEntity" });

export interface ConnectorInfraConfig {
  /** Indicate whether cloud spanner is required for connector job. */
  provisionCloudSpanner?: boolean;
  /** System resource requests. */
  resourceRequests?: ResourceRequests;
  /** The name of shared connector deployment. */
  sharedDeployment?: string;
  /** Indicate whether connector versioning is enabled. */
  connectorVersioningEnabled?: boolean;
  /** Indicate whether connector is being migrated to TLS. */
  migrateTls?: boolean;
  /** Max QPS supported by the connector version before throttling of requests. */
  ratelimitThreshold?: string;
  /** Max Instance Request Conncurrency for Cloud Run service. */
  maxInstanceRequestConcurrency?: number;
  /** Indicates that the Cloud Run CPU should always be allocated. */
  alwaysAllocateCpu?: boolean;
  /** Indicate whether connection service account is enabled. If false, the common runtime service agent is used. */
  connectionServiceAccountEnabled?: boolean;
  /** Indicate whether connector is being migrated to cloud run deployment model. */
  migrateDeploymentModel?: boolean;
  /** System resource limits. */
  resourceLimits?: ResourceLimits;
  /** Indicate whether memstore is required for connector job. */
  provisionMemstore?: boolean;
  /** Indicate whether public network ingress should be enabled. */
  publicNetworkIngressEnabled?: boolean;
  /** HPA autoscaling config. */
  hpaConfig?: HPAConfig;
  /** Indicate whether connector is deployed on GKE/CloudRun */
  deploymentModel?:
    | "DEPLOYMENT_MODEL_UNSPECIFIED"
    | "GKE_MST"
    | "CLOUD_RUN_MST"
    | (string & {});
  /** Network egress mode override to migrate to direct VPC egress. */
  networkEgressModeOverride?: NetworkEgressModeOverride;
  /** Max QPS supported for internal requests originating from Connd. */
  internalclientRatelimitThreshold?: string;
  /** The window used for ratelimiting runtime requests to connections. */
  connectionRatelimitWindowSeconds?: string;
}

export const ConnectorInfraConfig: Schema.Schema<ConnectorInfraConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provisionCloudSpanner: Schema.optional(Schema.Boolean),
    resourceRequests: Schema.optional(ResourceRequests),
    sharedDeployment: Schema.optional(Schema.String),
    connectorVersioningEnabled: Schema.optional(Schema.Boolean),
    migrateTls: Schema.optional(Schema.Boolean),
    ratelimitThreshold: Schema.optional(Schema.String),
    maxInstanceRequestConcurrency: Schema.optional(Schema.Number),
    alwaysAllocateCpu: Schema.optional(Schema.Boolean),
    connectionServiceAccountEnabled: Schema.optional(Schema.Boolean),
    migrateDeploymentModel: Schema.optional(Schema.Boolean),
    resourceLimits: Schema.optional(ResourceLimits),
    provisionMemstore: Schema.optional(Schema.Boolean),
    publicNetworkIngressEnabled: Schema.optional(Schema.Boolean),
    hpaConfig: Schema.optional(HPAConfig),
    deploymentModel: Schema.optional(Schema.String),
    networkEgressModeOverride: Schema.optional(NetworkEgressModeOverride),
    internalclientRatelimitThreshold: Schema.optional(Schema.String),
    connectionRatelimitWindowSeconds: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConnectorInfraConfig" });

export interface SslConfigTemplate {
  /** List of supported Server Cert Types */
  serverCertType?: ReadonlyArray<
    "CERT_TYPE_UNSPECIFIED" | "PEM" | (string & {})
  >;
  /** Controls the ssl type for the given connector version */
  sslType?: "SSL_TYPE_UNSPECIFIED" | "TLS" | "MTLS" | (string & {});
  /** Boolean for determining if the connector version mandates TLS. */
  isTlsMandatory?: boolean;
  /** List of supported Client Cert Types */
  clientCertType?: ReadonlyArray<
    "CERT_TYPE_UNSPECIFIED" | "PEM" | (string & {})
  >;
  /** Any additional fields that need to be rendered */
  additionalVariables?: ReadonlyArray<ConfigVariableTemplate>;
}

export const SslConfigTemplate: Schema.Schema<SslConfigTemplate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serverCertType: Schema.optional(Schema.Array(Schema.String)),
    sslType: Schema.optional(Schema.String),
    isTlsMandatory: Schema.optional(Schema.Boolean),
    clientCertType: Schema.optional(Schema.Array(Schema.String)),
    additionalVariables: Schema.optional(Schema.Array(ConfigVariableTemplate)),
  }).annotate({ identifier: "SslConfigTemplate" });

export interface SupportedRuntimeFeatures {
  /** Specifies if the connector supports entity apis like 'createEntity'. */
  entityApis?: boolean;
  /** Specifies if the connector supports 'ExecuteSqlQuery' operation. */
  sqlQuery?: boolean;
  /** Specifies if the connector supports action apis like 'executeAction'. */
  actionApis?: boolean;
  /** Specifies if the connector supports async long running operations. */
  asyncOperations?: boolean;
}

export const SupportedRuntimeFeatures: Schema.Schema<SupportedRuntimeFeatures> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityApis: Schema.optional(Schema.Boolean),
    sqlQuery: Schema.optional(Schema.Boolean),
    actionApis: Schema.optional(Schema.Boolean),
    asyncOperations: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "SupportedRuntimeFeatures" });

export interface DestinationConfigTemplate {
  /** Whether the current destination tempalate is part of Advanced settings */
  isAdvanced?: boolean;
  /** Regex pattern for host. */
  regexPattern?: string;
  /** Display name of the parameter. */
  displayName?: string;
  /** The maximum number of destinations supported for this key. */
  max?: number;
  /** Autocomplete suggestions for destination URL field. */
  autocompleteSuggestions?: ReadonlyArray<string>;
  /** Whether port number should be provided by customers. */
  portFieldType?:
    | "FIELD_TYPE_UNSPECIFIED"
    | "REQUIRED"
    | "OPTIONAL"
    | "NOT_USED"
    | (string & {});
  /** Key of the destination. */
  key?: string;
  /** Description. */
  description?: string;
  /** The minimum number of destinations supported for this key. */
  min?: number;
  /** The default port. */
  defaultPort?: number;
}

export const DestinationConfigTemplate: Schema.Schema<DestinationConfigTemplate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isAdvanced: Schema.optional(Schema.Boolean),
    regexPattern: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    max: Schema.optional(Schema.Number),
    autocompleteSuggestions: Schema.optional(Schema.Array(Schema.String)),
    portFieldType: Schema.optional(Schema.String),
    key: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    min: Schema.optional(Schema.Number),
    defaultPort: Schema.optional(Schema.Number),
  }).annotate({ identifier: "DestinationConfigTemplate" });

export interface EventingConfigTemplate {
  /** ListenerAuthConfigTemplates represents the auth values for the event listener. */
  listenerAuthConfigTemplates?: ReadonlyArray<AuthConfigTemplate>;
  /** AuthConfigTemplates represents the auth values for the webhook adapter. */
  authConfigTemplates?: ReadonlyArray<AuthConfigTemplate>;
  /** The type of the event listener for a specific connector. */
  eventListenerType?:
    | "EVENT_LISTENER_TYPE_UNSPECIFIED"
    | "WEBHOOK_LISTENER"
    | "JMS_LISTENER"
    | (string & {});
  /** SSL Config template for the connector version. */
  sslConfigTemplate?: SslConfigTemplate;
  /** Encryption key (can be either Google managed or CMEK). */
  encryptionKeyTemplate?: ConfigVariableTemplate;
  /** Is Eventing Supported. */
  isEventingSupported?: boolean;
  /** Enrichment Supported. */
  enrichmentSupported?: boolean;
  /** Auto Registration supported. */
  autoRegistrationSupported?: boolean;
  /** Additional fields that need to be rendered. */
  additionalVariables?: ReadonlyArray<ConfigVariableTemplate>;
  /** Trigger Config fields that needs to be rendered */
  triggerConfigVariables?: ReadonlyArray<ConfigVariableTemplate>;
  /** Auto refresh to extend webhook life. */
  autoRefresh?: boolean;
  /** Proxy destination config template. */
  proxyDestinationConfig?: DestinationConfigTemplate;
  /** Registration host destination config template. */
  registrationDestinationConfig?: DestinationConfigTemplate;
}

export const EventingConfigTemplate: Schema.Schema<EventingConfigTemplate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    listenerAuthConfigTemplates: Schema.optional(
      Schema.Array(AuthConfigTemplate),
    ),
    authConfigTemplates: Schema.optional(Schema.Array(AuthConfigTemplate)),
    eventListenerType: Schema.optional(Schema.String),
    sslConfigTemplate: Schema.optional(SslConfigTemplate),
    encryptionKeyTemplate: Schema.optional(ConfigVariableTemplate),
    isEventingSupported: Schema.optional(Schema.Boolean),
    enrichmentSupported: Schema.optional(Schema.Boolean),
    autoRegistrationSupported: Schema.optional(Schema.Boolean),
    additionalVariables: Schema.optional(Schema.Array(ConfigVariableTemplate)),
    triggerConfigVariables: Schema.optional(
      Schema.Array(ConfigVariableTemplate),
    ),
    autoRefresh: Schema.optional(Schema.Boolean),
    proxyDestinationConfig: Schema.optional(DestinationConfigTemplate),
    registrationDestinationConfig: Schema.optional(DestinationConfigTemplate),
  }).annotate({ identifier: "EventingConfigTemplate" });

export interface StandardAction {
  /** Name of the standard action. */
  name?: string;
}

export const StandardAction: Schema.Schema<StandardAction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "StandardAction" });

export interface Source {
  /** Type of the source. */
  sourceType?:
    | "SOURCE_TYPE_UNSPECIFIED"
    | "CONFIG_VARIABLE"
    | "AUTH_CONFIG_VARIABLE"
    | (string & {});
  /** Field identifier. For example config variable name. */
  fieldId?: string;
}

export const Source: Schema.Schema<Source> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceType: Schema.optional(Schema.String),
    fieldId: Schema.optional(Schema.String),
  }).annotate({ identifier: "Source" });

export interface ExtractionRule {
  /** Regex used to extract backend details from source. If empty, whole source value will be used. */
  extractionRegex?: string;
  /** Format string used to format the extracted backend details. If empty, extracted backend details will be returned as it is. */
  formatString?: string;
  /** Source on which the rule is applied. */
  source?: Source;
}

export const ExtractionRule: Schema.Schema<ExtractionRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    extractionRegex: Schema.optional(Schema.String),
    formatString: Schema.optional(Schema.String),
    source: Schema.optional(Source),
  }).annotate({ identifier: "ExtractionRule" });

export interface ExtractionRules {
  /** Collection of Extraction Rule. */
  extractionRule?: ReadonlyArray<ExtractionRule>;
}

export const ExtractionRules: Schema.Schema<ExtractionRules> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    extractionRule: Schema.optional(Schema.Array(ExtractionRule)),
  }).annotate({ identifier: "ExtractionRules" });

export interface EgressControlConfig {
  /** Optional. Used when access_mode is RESTRICTED or ACCESS_MODE_UNSPECIFIED. */
  allowlistedProjectNumbers?: ReadonlyArray<string>;
  /** Static Comma separated backends which are common for all Connection resources. Supported formats for each backend are host:port or just host (host can be ip address or domain name). */
  backends?: string;
  /** Launch environment for egress control. */
  launchEnvironment?:
    | "LAUNCH_ENVIRONMENT_UNSPECIFIED"
    | "AUTOPUSH"
    | "STAGING"
    | "PROD"
    | (string & {});
  /** Optional. Access mode for egress control. */
  accessMode?:
    | "ACCESS_MODE_UNSPECIFIED"
    | "RESTRICTED"
    | "ALLOW_ALL"
    | (string & {});
  /** Extractions Rules to extract the backends from customer provided configuration. */
  extractionRules?: ExtractionRules;
  /** Additional extraction rules to identity the backends from customer provided configuration in Connection resource. These rules are applied in addition to the ones specified in `oneof_backends`. */
  additionalExtractionRules?: ExtractionRules;
}

export const EgressControlConfig: Schema.Schema<EgressControlConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowlistedProjectNumbers: Schema.optional(Schema.Array(Schema.String)),
    backends: Schema.optional(Schema.String),
    launchEnvironment: Schema.optional(Schema.String),
    accessMode: Schema.optional(Schema.String),
    extractionRules: Schema.optional(ExtractionRules),
    additionalExtractionRules: Schema.optional(ExtractionRules),
  }).annotate({ identifier: "EgressControlConfig" });

export interface VpcscConfig {
  /** The list of allowlisted FQDNs for VPCSC. */
  defaultAllowlistedHost?: ReadonlyArray<string>;
  /** Whether to disable firewall VPCSC flow. */
  disableFirewallVpcscFlow?: boolean;
}

export const VpcscConfig: Schema.Schema<VpcscConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    defaultAllowlistedHost: Schema.optional(Schema.Array(Schema.String)),
    disableFirewallVpcscFlow: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "VpcscConfig" });

export interface ConnectorVersion {
  /** Output only. Role grant configurations for this connector version. */
  roleGrants?: ReadonlyArray<RoleGrant>;
  /** Output only. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources */
  labels?: Record<string, string>;
  /** Output only. Flag to mark the version indicating the launch stage. */
  launchStage?:
    | "LAUNCH_STAGE_UNSPECIFIED"
    | "PREVIEW"
    | "GA"
    | "DEPRECATED"
    | "TEST"
    | "PRIVATE_PREVIEW"
    | (string & {});
  /** Output only. List of config variables needed to create a connection. */
  configVariableTemplates?: ReadonlyArray<ConfigVariableTemplate>;
  /** Output only. Supported standard entities. */
  supportedStandardEntities?: ReadonlyArray<StandardEntity>;
  /** Output only. Is custom entities supported. */
  isCustomEntitiesSupported?: boolean;
  /** Output only. Infra configs supported by Connector. */
  connectorInfraConfig?: ConnectorInfraConfig;
  /** Output only. Flag to mark the dynamic auth override. */
  authOverrideEnabled?: boolean;
  /** Output only. Ssl configuration supported by the Connector. */
  sslConfigTemplate?: SslConfigTemplate;
  /** Output only. Information about the runtime features supported by the Connector. */
  supportedRuntimeFeatures?: SupportedRuntimeFeatures;
  /** Output only. Eventing configuration supported by the Connector. */
  eventingConfigTemplate?: EventingConfigTemplate;
  /** Output only. Display name. */
  displayName?: string;
  /** Output only. ReleaseVersion of the connector, for example: "1.0.1-alpha". */
  releaseVersion?: string;
  /** Connection Schema Refresh Config */
  schemaRefreshConfig?: SchemaRefreshConfig;
  /** Output only. Role grant configuration for this config variable. It will be DEPRECATED soon. */
  roleGrant?: RoleGrant;
  /** Output only. Unsupported connection types. */
  unsupportedConnectionTypes?: ReadonlyArray<
    | "CONNECTION_TYPE_UNSPECIFIED"
    | "CONNECTION_WITH_EVENTING"
    | "ONLY_CONNECTION"
    | "ONLY_EVENTING"
    | (string & {})
  >;
  /** Output only. Resource name of the Version. Format: projects/{project}/locations/{location}/providers/{provider}/connectors/{connector}/versions/{version} Only global location is supported for Connector resource. */
  name?: string;
  /** Output only. Is custom actions supported. */
  isCustomActionsSupported?: boolean;
  /** Output only. Updated time. */
  updateTime?: string;
  /** Output only. Supported standard actions. */
  supportedStandardActions?: ReadonlyArray<StandardAction>;
  /** Output only. List of auth configs supported by the Connector Version. */
  authConfigTemplates?: ReadonlyArray<AuthConfigTemplate>;
  /** Output only. List of destination configs needed to create a connection. */
  destinationConfigTemplates?: ReadonlyArray<DestinationConfigTemplate>;
  /** Output only. Configuration for Egress Control. */
  egressControlConfig?: EgressControlConfig;
  /** Output only. VPCSC config for the connector. */
  vpcscConfig?: VpcscConfig;
  /** Output only. Created time. */
  createTime?: string;
}

export const ConnectorVersion: Schema.Schema<ConnectorVersion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    roleGrants: Schema.optional(Schema.Array(RoleGrant)),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    launchStage: Schema.optional(Schema.String),
    configVariableTemplates: Schema.optional(
      Schema.Array(ConfigVariableTemplate),
    ),
    supportedStandardEntities: Schema.optional(Schema.Array(StandardEntity)),
    isCustomEntitiesSupported: Schema.optional(Schema.Boolean),
    connectorInfraConfig: Schema.optional(ConnectorInfraConfig),
    authOverrideEnabled: Schema.optional(Schema.Boolean),
    sslConfigTemplate: Schema.optional(SslConfigTemplate),
    supportedRuntimeFeatures: Schema.optional(SupportedRuntimeFeatures),
    eventingConfigTemplate: Schema.optional(EventingConfigTemplate),
    displayName: Schema.optional(Schema.String),
    releaseVersion: Schema.optional(Schema.String),
    schemaRefreshConfig: Schema.optional(SchemaRefreshConfig),
    roleGrant: Schema.optional(RoleGrant),
    unsupportedConnectionTypes: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
    isCustomActionsSupported: Schema.optional(Schema.Boolean),
    updateTime: Schema.optional(Schema.String),
    supportedStandardActions: Schema.optional(Schema.Array(StandardAction)),
    authConfigTemplates: Schema.optional(Schema.Array(AuthConfigTemplate)),
    destinationConfigTemplates: Schema.optional(
      Schema.Array(DestinationConfigTemplate),
    ),
    egressControlConfig: Schema.optional(EgressControlConfig),
    vpcscConfig: Schema.optional(VpcscConfig),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConnectorVersion" });

export interface EndUserAuthenticationNotifyEndpointDestinationEndPointHeader {
  /** Required. Key of Header. */
  key?: string;
  /** Required. Value of Header. */
  value?: string;
}

export const EndUserAuthenticationNotifyEndpointDestinationEndPointHeader: Schema.Schema<EndUserAuthenticationNotifyEndpointDestinationEndPointHeader> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({
    identifier: "EndUserAuthenticationNotifyEndpointDestinationEndPointHeader",
  });

export interface EndUserAuthenticationNotifyEndpointDestinationEndPoint {
  /** Required. The URI of the Endpoint. */
  endpointUri?: string;
  /** Optional. List of Header to be added to the Endpoint. */
  headers?: ReadonlyArray<EndUserAuthenticationNotifyEndpointDestinationEndPointHeader>;
}

export const EndUserAuthenticationNotifyEndpointDestinationEndPoint: Schema.Schema<EndUserAuthenticationNotifyEndpointDestinationEndPoint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endpointUri: Schema.optional(Schema.String),
    headers: Schema.optional(
      Schema.Array(
        EndUserAuthenticationNotifyEndpointDestinationEndPointHeader,
      ),
    ),
  }).annotate({
    identifier: "EndUserAuthenticationNotifyEndpointDestinationEndPoint",
  });

export interface EndUserAuthenticationNotifyEndpointDestination {
  /** Required. type of the destination */
  type?: "TYPE_UNSPECIFIED" | "ENDPOINT" | (string & {});
  /** Required. Service account needed for runtime plane to notify the backend. */
  serviceAccount?: string;
  /** Optional. OPTION 1: Hit an endpoint when the refresh token is expired. */
  endpoint?: EndUserAuthenticationNotifyEndpointDestinationEndPoint;
}

export const EndUserAuthenticationNotifyEndpointDestination: Schema.Schema<EndUserAuthenticationNotifyEndpointDestination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    serviceAccount: Schema.optional(Schema.String),
    endpoint: Schema.optional(
      EndUserAuthenticationNotifyEndpointDestinationEndPoint,
    ),
  }).annotate({ identifier: "EndUserAuthenticationNotifyEndpointDestination" });

export interface EndUserAuthenticationEndUserAuthenticationStatus {
  /** Output only. State of Event Subscription resource. */
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "ERROR" | (string & {});
  /** Output only. Description of the state. */
  description?: string;
}

export const EndUserAuthenticationEndUserAuthenticationStatus: Schema.Schema<EndUserAuthenticationEndUserAuthenticationStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({
    identifier: "EndUserAuthenticationEndUserAuthenticationStatus",
  });

export interface EndUserAuthenticationConfigUserPassword {
  /** Required. string value or secret version reference containing the password. */
  password?: EUASecret;
  /** Username. */
  username?: string;
}

export const EndUserAuthenticationConfigUserPassword: Schema.Schema<EndUserAuthenticationConfigUserPassword> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    password: Schema.optional(EUASecret),
    username: Schema.optional(Schema.String),
  }).annotate({ identifier: "EndUserAuthenticationConfigUserPassword" });

export interface EndUserAuthenticationConfigSshPublicKey {
  /** Required. Password (passphrase) for ssh client certificate if it has one. */
  sshClientCertPass?: EUASecret;
  /** Format of SSH Client cert. */
  certType?: string;
  /** Required. SSH Client Cert. It should contain both public and private key. */
  sshClientCert?: EUASecret;
  /** The user account used to authenticate. */
  username?: string;
}

export const EndUserAuthenticationConfigSshPublicKey: Schema.Schema<EndUserAuthenticationConfigSshPublicKey> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sshClientCertPass: Schema.optional(EUASecret),
    certType: Schema.optional(Schema.String),
    sshClientCert: Schema.optional(EUASecret),
    username: Schema.optional(Schema.String),
  }).annotate({ identifier: "EndUserAuthenticationConfigSshPublicKey" });

export interface EndUserAuthenticationConfigOauth2JwtBearerJwtClaims {
  /** Value for the "aud" claim. */
  audience?: string;
  /** Value for the "iss" claim. */
  issuer?: string;
  /** Value for the "sub" claim. */
  subject?: string;
}

export const EndUserAuthenticationConfigOauth2JwtBearerJwtClaims: Schema.Schema<EndUserAuthenticationConfigOauth2JwtBearerJwtClaims> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    audience: Schema.optional(Schema.String),
    issuer: Schema.optional(Schema.String),
    subject: Schema.optional(Schema.String),
  }).annotate({
    identifier: "EndUserAuthenticationConfigOauth2JwtBearerJwtClaims",
  });

export interface EndUserAuthenticationConfigOauth2JwtBearer {
  /** Required. secret version/value reference containing a PKCS#8 PEM-encoded private key associated with the Client Certificate. This private key will be used to sign JWTs used for the jwt-bearer authorization grant. Specified in the form as: `projects/* /strings/* /versions/*`. */
  clientKey?: EUASecret;
  /** JwtClaims providers fields to generate the token. */
  jwtClaims?: EndUserAuthenticationConfigOauth2JwtBearerJwtClaims;
}

export const EndUserAuthenticationConfigOauth2JwtBearer: Schema.Schema<EndUserAuthenticationConfigOauth2JwtBearer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clientKey: Schema.optional(EUASecret),
    jwtClaims: Schema.optional(
      EndUserAuthenticationConfigOauth2JwtBearerJwtClaims,
    ),
  }).annotate({ identifier: "EndUserAuthenticationConfigOauth2JwtBearer" });

export interface OAuthTokenData {
  /** Optional. Timestamp when the access token was created. */
  createTime?: string;
  /** Optional. Access token for the connection. */
  accessToken?: EUASecret;
  /** Optional. Refresh token for the connection. */
  refreshToken?: EUASecret;
  /** Optional. Time in seconds when the access token expires. */
  expiry?: string;
}

export const OAuthTokenData: Schema.Schema<OAuthTokenData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    accessToken: Schema.optional(EUASecret),
    refreshToken: Schema.optional(EUASecret),
    expiry: Schema.optional(Schema.String),
  }).annotate({ identifier: "OAuthTokenData" });

export interface EndUserAuthenticationConfigOauth2AuthCodeFlowGoogleManaged {
  /** Optional. Authorization code to be exchanged for access and refresh tokens. */
  authCode?: string;
  /** Optional. Redirect URI to be provided during the auth code exchange. */
  redirectUri?: string;
  /** Auth Code Data */
  oauthTokenData?: OAuthTokenData;
  /** Required. Scopes the connection will request when the user performs the auth code flow. */
  scopes?: ReadonlyArray<string>;
}

export const EndUserAuthenticationConfigOauth2AuthCodeFlowGoogleManaged: Schema.Schema<EndUserAuthenticationConfigOauth2AuthCodeFlowGoogleManaged> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authCode: Schema.optional(Schema.String),
    redirectUri: Schema.optional(Schema.String),
    oauthTokenData: Schema.optional(OAuthTokenData),
    scopes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "EndUserAuthenticationConfigOauth2AuthCodeFlowGoogleManaged",
  });

export interface EndUserAuthenticationConfigOauth2AuthCodeFlow {
  /** Optional. Client ID for user-provided OAuth app. */
  clientId?: string;
  /** Optional. Client secret for user-provided OAuth app. */
  clientSecret?: EUASecret;
  /** Optional. PKCE verifier to be used during the auth code exchange. */
  pkceVerifier?: string;
  /** Optional. Whether to enable PKCE when the user performs the auth code flow. */
  enablePkce?: boolean;
  /** Optional. Scopes the connection will request when the user performs the auth code flow. */
  scopes?: ReadonlyArray<string>;
  /** Optional. Authorization code to be exchanged for access and refresh tokens. */
  authCode?: string;
  /** Optional. Auth URL for Authorization Code Flow */
  authUri?: string;
  /** Optional. Auth Code Data */
  oauthTokenData?: OAuthTokenData;
  /** Optional. Redirect URI to be provided during the auth code exchange. */
  redirectUri?: string;
}

export const EndUserAuthenticationConfigOauth2AuthCodeFlow: Schema.Schema<EndUserAuthenticationConfigOauth2AuthCodeFlow> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clientId: Schema.optional(Schema.String),
    clientSecret: Schema.optional(EUASecret),
    pkceVerifier: Schema.optional(Schema.String),
    enablePkce: Schema.optional(Schema.Boolean),
    scopes: Schema.optional(Schema.Array(Schema.String)),
    authCode: Schema.optional(Schema.String),
    authUri: Schema.optional(Schema.String),
    oauthTokenData: Schema.optional(OAuthTokenData),
    redirectUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "EndUserAuthenticationConfigOauth2AuthCodeFlow" });

export interface EndUserAuthenticationConfig {
  /** UserPassword. */
  userPassword?: EndUserAuthenticationConfigUserPassword;
  /** Identifier key for auth config */
  authKey?: string;
  /** The type of authentication configured. */
  authType?:
    | "AUTH_TYPE_UNSPECIFIED"
    | "USER_PASSWORD"
    | "OAUTH2_JWT_BEARER"
    | "OAUTH2_CLIENT_CREDENTIALS"
    | "SSH_PUBLIC_KEY"
    | "OAUTH2_AUTH_CODE_FLOW"
    | "GOOGLE_AUTHENTICATION"
    | "OAUTH2_AUTH_CODE_FLOW_GOOGLE_MANAGED"
    | (string & {});
  /** SSH Public Key. */
  sshPublicKey?: EndUserAuthenticationConfigSshPublicKey;
  /** Optional. List containing additional auth configs. */
  additionalVariables?: ReadonlyArray<EndUserAuthenticationConfigVariable>;
  /** Oauth2ClientCredentials. */
  oauth2ClientCredentials?: EndUserAuthenticationConfigOauth2ClientCredentials;
  /** Oauth2JwtBearer. */
  oauth2JwtBearer?: EndUserAuthenticationConfigOauth2JwtBearer;
  /** Oauth2AuthCodeFlowGoogleManaged. */
  oauth2AuthCodeFlowGoogleManaged?: EndUserAuthenticationConfigOauth2AuthCodeFlowGoogleManaged;
  /** Oauth2AuthCodeFlow. */
  oauth2AuthCodeFlow?: EndUserAuthenticationConfigOauth2AuthCodeFlow;
}

export const EndUserAuthenticationConfig: Schema.Schema<EndUserAuthenticationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userPassword: Schema.optional(EndUserAuthenticationConfigUserPassword),
    authKey: Schema.optional(Schema.String),
    authType: Schema.optional(Schema.String),
    sshPublicKey: Schema.optional(EndUserAuthenticationConfigSshPublicKey),
    additionalVariables: Schema.optional(
      Schema.Array(EndUserAuthenticationConfigVariable),
    ),
    oauth2ClientCredentials: Schema.optional(
      EndUserAuthenticationConfigOauth2ClientCredentials,
    ),
    oauth2JwtBearer: Schema.optional(
      EndUserAuthenticationConfigOauth2JwtBearer,
    ),
    oauth2AuthCodeFlowGoogleManaged: Schema.optional(
      EndUserAuthenticationConfigOauth2AuthCodeFlowGoogleManaged,
    ),
    oauth2AuthCodeFlow: Schema.optional(
      EndUserAuthenticationConfigOauth2AuthCodeFlow,
    ),
  }).annotate({ identifier: "EndUserAuthenticationConfig" });

export interface EndUserAuthentication {
  /** Output only. Updated time. */
  updateTime?: string;
  /** Optional. Destination configs for the EndUserAuthentication. */
  destinationConfigs?: ReadonlyArray<DestinationConfig>;
  /** Optional. The destination to hit when we receive an event */
  notifyEndpointDestination?: EndUserAuthenticationNotifyEndpointDestination;
  /** Optional. Labels for the EndUserAuthentication. */
  labels?: ReadonlyArray<string>;
  /** Optional. The user id of the user. */
  userId?: string;
  /** Required. Identifier. Resource name of the EndUserAuthentication. Format: projects/{project}/locations/{location}/connections/{connection}/endUserAuthentications/{end_user_authentication} */
  name?: string;
  /** Optional. Config variables for the EndUserAuthentication. */
  configVariables?: ReadonlyArray<EndUserAuthenticationConfigVariable>;
  /** Optional. Status of the EndUserAuthentication. */
  status?: EndUserAuthenticationEndUserAuthenticationStatus;
  /** Output only. Created time. */
  createTime?: string;
  /** Optional. Roles for the EndUserAuthentication. */
  roles?: ReadonlyArray<
    | "ROLE_UNSPECIFIED"
    | "READER"
    | "READER_DOMAIN_WIDE_ACCESSIBLE"
    | (string & {})
  >;
  /** Optional. The EndUserAuthenticationConfig for the EndUserAuthentication. */
  endUserAuthenticationConfig?: EndUserAuthenticationConfig;
}

export const EndUserAuthentication: Schema.Schema<EndUserAuthentication> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    destinationConfigs: Schema.optional(Schema.Array(DestinationConfig)),
    notifyEndpointDestination: Schema.optional(
      EndUserAuthenticationNotifyEndpointDestination,
    ),
    labels: Schema.optional(Schema.Array(Schema.String)),
    userId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    configVariables: Schema.optional(
      Schema.Array(EndUserAuthenticationConfigVariable),
    ),
    status: Schema.optional(EndUserAuthenticationEndUserAuthenticationStatus),
    createTime: Schema.optional(Schema.String),
    roles: Schema.optional(Schema.Array(Schema.String)),
    endUserAuthenticationConfig: Schema.optional(EndUserAuthenticationConfig),
  }).annotate({ identifier: "EndUserAuthentication" });

export interface Location {
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
}

export const Location: Schema.Schema<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    locationId: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "Location" });

export interface JsonSchema {
  /** The URI defining the schema. */
  $schema?: string;
  /** A reference to another schema. */
  $ref?: string;
  /** Schema that must be valid if the "if" schema is valid. */
  if?: JsonSchema;
  /** Whether the maximum number value is exclusive. */
  exclusiveMaximum?: unknown;
  /** Whether the minimum number value is exclusive. */
  exclusiveMinimum?: unknown;
  /** Minimum number of items in the array field. */
  minItems?: number;
  /** Minimum number of properties. */
  minProperties?: number;
  /** A comment on the schema. */
  $comment?: string;
  /** Additional details apart from standard json schema fields, this gives flexibility to store metadata about the schema */
  additionalDetails?: Record<string, unknown>;
  /** Schema that must be valid if the "if" schema is valid. */
  then?: JsonSchema;
  /** Number must be a multiple of this value. */
  multipleOf?: number;
  /** A title of the schema. */
  title?: string;
  /** Whether the value is read-only. */
  readOnly?: boolean;
  /** Pattern properties for the schema. */
  patternProperties?: Record<string, JsonSchema>;
  /** Encoding of the content. */
  contentEncoding?: string;
  /** Media type of the content. */
  contentMediaType?: string;
  /** The child schemas, applicable only if this is of type `object`. The key is the name of the property and the value is the json schema that describes that property */
  properties?: Record<string, JsonSchema>;
  /** Schema that must not be valid. */
  not?: JsonSchema;
  /** Minimum length of the string field. */
  minLength?: number;
  /** Schema that must be valid against at least one of the sub-schemas. */
  anyOf?: ReadonlyArray<JsonSchema>;
  /** Schema for additional items. */
  additionalItems?: JsonSchema;
  /** Schema that must be valid if the "if" schema is invalid. */
  else?: JsonSchema;
  /** Schema that must be valid against all of the sub-schemas. */
  allOf?: ReadonlyArray<JsonSchema>;
  /** Schema that applies to array values, applicable only if this is of type `array`. */
  items?: JsonSchema;
  /** A description of this schema. */
  description?: string;
  /** Possible values for an enumeration. This works in conjunction with `type` to represent types with a fixed set of legal values */
  enum?: ReadonlyArray<unknown>;
  /** Whether the value is write-only. */
  writeOnly?: boolean;
  /** Definitions for the schema. */
  $defs?: Record<string, JsonSchema>;
  /** The URI defining the core schema meta-schema. */
  $id?: string;
  /** Format of the value as per https://json-schema.org/understanding-json-schema/reference/string.html#format */
  format?: string;
  /** Whether the items in the array field are unique. */
  uniqueItems?: boolean;
  /** Schema for additional properties. */
  additionalProperties?: JsonSchema;
  /** Maximum length of the string field. */
  maxLength?: number;
  /** The default value of the field or object described by this schema. */
  default?: unknown;
  /** Maximum number of properties. */
  maxProperties?: number;
  /** Definitions for the schema. */
  definitions?: Record<string, JsonSchema>;
  /** Examples of the value. */
  examples?: ReadonlyArray<unknown>;
  /** JSON Schema Validation: A Vocabulary for Structural Validation of JSON */
  type?: ReadonlyArray<string>;
  /** Regex pattern of the string field. This is a string value that describes the regular expression that the string value should match. */
  pattern?: string;
  /** Schema that must be valid against at least one of the sub-schemas. */
  oneOf?: ReadonlyArray<JsonSchema>;
  /** Schema that applies to at least one item in an array. */
  contains?: JsonSchema;
  /** Maximum number of items in the array field. */
  maxItems?: number;
  /** Dependencies for the schema. */
  dependencies?: Record<string, unknown>;
  /** Maximum value of the number field. */
  maximum?: unknown;
  /** Minimum value of the number field. */
  minimum?: unknown;
  /** Const value that the data must match. */
  const?: unknown;
  /** JDBC datatype of the field. */
  jdbcType?:
    | "DATA_TYPE_UNSPECIFIED"
    | "DATA_TYPE_INT"
    | "DATA_TYPE_SMALLINT"
    | "DATA_TYPE_DOUBLE"
    | "DATA_TYPE_DATE"
    | "DATA_TYPE_DATETIME"
    | "DATA_TYPE_TIME"
    | "DATA_TYPE_STRING"
    | "DATA_TYPE_LONG"
    | "DATA_TYPE_BOOLEAN"
    | "DATA_TYPE_DECIMAL"
    | "DATA_TYPE_UUID"
    | "DATA_TYPE_BLOB"
    | "DATA_TYPE_BIT"
    | "DATA_TYPE_TINYINT"
    | "DATA_TYPE_INTEGER"
    | "DATA_TYPE_BIGINT"
    | "DATA_TYPE_FLOAT"
    | "DATA_TYPE_REAL"
    | "DATA_TYPE_NUMERIC"
    | "DATA_TYPE_CHAR"
    | "DATA_TYPE_VARCHAR"
    | "DATA_TYPE_LONGVARCHAR"
    | "DATA_TYPE_TIMESTAMP"
    | "DATA_TYPE_NCHAR"
    | "DATA_TYPE_NVARCHAR"
    | "DATA_TYPE_LONGNVARCHAR"
    | "DATA_TYPE_NULL"
    | "DATA_TYPE_OTHER"
    | "DATA_TYPE_JAVA_OBJECT"
    | "DATA_TYPE_DISTINCT"
    | "DATA_TYPE_STRUCT"
    | "DATA_TYPE_ARRAY"
    | "DATA_TYPE_CLOB"
    | "DATA_TYPE_REF"
    | "DATA_TYPE_DATALINK"
    | "DATA_TYPE_ROWID"
    | "DATA_TYPE_BINARY"
    | "DATA_TYPE_VARBINARY"
    | "DATA_TYPE_LONGVARBINARY"
    | "DATA_TYPE_NCLOB"
    | "DATA_TYPE_SQLXML"
    | "DATA_TYPE_REF_CURSOR"
    | "DATA_TYPE_TIME_WITH_TIMEZONE"
    | "DATA_TYPE_TIMESTAMP_WITH_TIMEZONE"
    | (string & {});
  /** Schema for property names. */
  propertyNames?: JsonSchema;
  /** Whether this property is required. */
  required?: ReadonlyArray<string>;
}

export const JsonSchema: Schema.Schema<JsonSchema> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      $schema: Schema.optional(Schema.String),
      $ref: Schema.optional(Schema.String),
      if: Schema.optional(JsonSchema),
      exclusiveMaximum: Schema.optional(Schema.Unknown),
      exclusiveMinimum: Schema.optional(Schema.Unknown),
      minItems: Schema.optional(Schema.Number),
      minProperties: Schema.optional(Schema.Number),
      $comment: Schema.optional(Schema.String),
      additionalDetails: Schema.optional(
        Schema.Record(Schema.String, Schema.Unknown),
      ),
      then: Schema.optional(JsonSchema),
      multipleOf: Schema.optional(Schema.Number),
      title: Schema.optional(Schema.String),
      readOnly: Schema.optional(Schema.Boolean),
      patternProperties: Schema.optional(
        Schema.Record(Schema.String, JsonSchema),
      ),
      contentEncoding: Schema.optional(Schema.String),
      contentMediaType: Schema.optional(Schema.String),
      properties: Schema.optional(Schema.Record(Schema.String, JsonSchema)),
      not: Schema.optional(JsonSchema),
      minLength: Schema.optional(Schema.Number),
      anyOf: Schema.optional(Schema.Array(JsonSchema)),
      additionalItems: Schema.optional(JsonSchema),
      else: Schema.optional(JsonSchema),
      allOf: Schema.optional(Schema.Array(JsonSchema)),
      items: Schema.optional(JsonSchema),
      description: Schema.optional(Schema.String),
      enum: Schema.optional(Schema.Array(Schema.Unknown)),
      writeOnly: Schema.optional(Schema.Boolean),
      $defs: Schema.optional(Schema.Record(Schema.String, JsonSchema)),
      $id: Schema.optional(Schema.String),
      format: Schema.optional(Schema.String),
      uniqueItems: Schema.optional(Schema.Boolean),
      additionalProperties: Schema.optional(JsonSchema),
      maxLength: Schema.optional(Schema.Number),
      default: Schema.optional(Schema.Unknown),
      maxProperties: Schema.optional(Schema.Number),
      definitions: Schema.optional(Schema.Record(Schema.String, JsonSchema)),
      examples: Schema.optional(Schema.Array(Schema.Unknown)),
      type: Schema.optional(Schema.Array(Schema.String)),
      pattern: Schema.optional(Schema.String),
      oneOf: Schema.optional(Schema.Array(JsonSchema)),
      contains: Schema.optional(JsonSchema),
      maxItems: Schema.optional(Schema.Number),
      dependencies: Schema.optional(
        Schema.Record(Schema.String, Schema.Unknown),
      ),
      maximum: Schema.optional(Schema.Unknown),
      minimum: Schema.optional(Schema.Unknown),
      const: Schema.optional(Schema.Unknown),
      jdbcType: Schema.optional(Schema.String),
      propertyNames: Schema.optional(JsonSchema),
      required: Schema.optional(Schema.Array(Schema.String)),
    }),
  ).annotate({ identifier: "JsonSchema" }) as any as Schema.Schema<JsonSchema>;

export interface Field {
  /** The following boolean field specifies if the current Field acts as a primary key or id if the parent is of type entity. */
  key?: boolean;
  /** Name of the Field. */
  field?: string;
  /** The data type of the Field. */
  dataType?:
    | "DATA_TYPE_UNSPECIFIED"
    | "DATA_TYPE_INT"
    | "DATA_TYPE_SMALLINT"
    | "DATA_TYPE_DOUBLE"
    | "DATA_TYPE_DATE"
    | "DATA_TYPE_DATETIME"
    | "DATA_TYPE_TIME"
    | "DATA_TYPE_STRING"
    | "DATA_TYPE_LONG"
    | "DATA_TYPE_BOOLEAN"
    | "DATA_TYPE_DECIMAL"
    | "DATA_TYPE_UUID"
    | "DATA_TYPE_BLOB"
    | "DATA_TYPE_BIT"
    | "DATA_TYPE_TINYINT"
    | "DATA_TYPE_INTEGER"
    | "DATA_TYPE_BIGINT"
    | "DATA_TYPE_FLOAT"
    | "DATA_TYPE_REAL"
    | "DATA_TYPE_NUMERIC"
    | "DATA_TYPE_CHAR"
    | "DATA_TYPE_VARCHAR"
    | "DATA_TYPE_LONGVARCHAR"
    | "DATA_TYPE_TIMESTAMP"
    | "DATA_TYPE_NCHAR"
    | "DATA_TYPE_NVARCHAR"
    | "DATA_TYPE_LONGNVARCHAR"
    | "DATA_TYPE_NULL"
    | "DATA_TYPE_OTHER"
    | "DATA_TYPE_JAVA_OBJECT"
    | "DATA_TYPE_DISTINCT"
    | "DATA_TYPE_STRUCT"
    | "DATA_TYPE_ARRAY"
    | "DATA_TYPE_CLOB"
    | "DATA_TYPE_REF"
    | "DATA_TYPE_DATALINK"
    | "DATA_TYPE_ROWID"
    | "DATA_TYPE_BINARY"
    | "DATA_TYPE_VARBINARY"
    | "DATA_TYPE_LONGVARBINARY"
    | "DATA_TYPE_NCLOB"
    | "DATA_TYPE_SQLXML"
    | "DATA_TYPE_REF_CURSOR"
    | "DATA_TYPE_TIME_WITH_TIMEZONE"
    | "DATA_TYPE_TIMESTAMP_WITH_TIMEZONE"
    | (string & {});
  /** JsonSchema representation of this entity's schema */
  jsonSchema?: JsonSchema;
  /** Specifies if the Field is readonly. */
  readonly?: boolean;
  /** The following field specifies the default value of the Field provided by the external system if a value is not provided. */
  defaultValue?: unknown;
  /** A brief description of the Field. */
  description?: string;
  /** Specifies whether a null value is allowed. */
  nullable?: boolean;
  /** The following map contains fields that are not explicitly mentioned above,this give connectors the flexibility to add new metadata fields. */
  additionalDetails?: Record<string, unknown>;
}

export const Field: Schema.Schema<Field> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.Boolean),
    field: Schema.optional(Schema.String),
    dataType: Schema.optional(Schema.String),
    jsonSchema: Schema.optional(JsonSchema),
    readonly: Schema.optional(Schema.Boolean),
    defaultValue: Schema.optional(Schema.Unknown),
    description: Schema.optional(Schema.String),
    nullable: Schema.optional(Schema.Boolean),
    additionalDetails: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
  }).annotate({ identifier: "Field" });

export interface RuntimeEntitySchema {
  /** List of operations supported by this entity */
  operations?: ReadonlyArray<
    | "OPERATION_UNSPECIFIED"
    | "LIST"
    | "GET"
    | "CREATE"
    | "UPDATE"
    | "DELETE"
    | (string & {})
  >;
  /** Output only. Name of the entity. */
  entity?: string;
  /** Output only. List of fields in the entity. */
  fields?: ReadonlyArray<Field>;
  /** Output only. JsonSchema representation of this entity's metadata */
  jsonSchema?: JsonSchema;
}

export const RuntimeEntitySchema: Schema.Schema<RuntimeEntitySchema> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operations: Schema.optional(Schema.Array(Schema.String)),
    entity: Schema.optional(Schema.String),
    fields: Schema.optional(Schema.Array(Field)),
    jsonSchema: Schema.optional(JsonSchema),
  }).annotate({ identifier: "RuntimeEntitySchema" });

export interface ListRuntimeEntitySchemasResponse {
  /** Next page token. */
  nextPageToken?: string;
  /** Runtime entity schemas. */
  runtimeEntitySchemas?: ReadonlyArray<RuntimeEntitySchema>;
}

export const ListRuntimeEntitySchemasResponse: Schema.Schema<ListRuntimeEntitySchemasResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    runtimeEntitySchemas: Schema.optional(Schema.Array(RuntimeEntitySchema)),
  }).annotate({ identifier: "ListRuntimeEntitySchemasResponse" });

export interface ToolName {
  /** Required. Tool name that was generated in the list tools call. */
  name?: string;
  /** Optional. Operation for which the tool was generated. */
  operation?:
    | "OPERATION_UNSPECIFIED"
    | "LIST"
    | "GET"
    | "CREATE"
    | "UPDATE"
    | "DELETE"
    | (string & {});
  /** Optional. Entity type name for which the tool was generated. */
  entityType?: string;
}

export const ToolName: Schema.Schema<ToolName> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    operation: Schema.optional(Schema.String),
    entityType: Schema.optional(Schema.String),
  }).annotate({ identifier: "ToolName" });

export interface FetchConnectionToolspecOverrideRequest {
  /** Required. List of tools for which the tool spec override is to be generated. */
  toolNames?: ReadonlyArray<ToolName>;
}

export const FetchConnectionToolspecOverrideRequest: Schema.Schema<FetchConnectionToolspecOverrideRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    toolNames: Schema.optional(Schema.Array(ToolName)),
  }).annotate({ identifier: "FetchConnectionToolspecOverrideRequest" });

export interface DeadLetterConfig {
  /** Optional. Topic to push events which couldn't be processed. */
  topic?: string;
  /** Optional. Project which has the topic given. */
  projectId?: string;
}

export const DeadLetterConfig: Schema.Schema<DeadLetterConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    topic: Schema.optional(Schema.String),
    projectId: Schema.optional(Schema.String),
  }).annotate({ identifier: "DeadLetterConfig" });

export interface TrafficShapingConfig {
  /** Required. Maximum number of api calls allowed. */
  quotaLimit?: string;
  /** Required. Specifies the duration over which the API call quota limits are calculated. This duration is used to define the time window for evaluating if the number of API calls made by a user is within the allowed quota limits. For example: - To define a quota sampled over 16 seconds, set `seconds` to 16 - To define a quota sampled over 5 minutes, set `seconds` to 300 (5 * 60) - To define a quota sampled over 1 day, set `seconds` to 86400 (24 * 60 * 60) and so on. It is important to note that this duration is not the time the quota is valid for, but rather the time window over which the quota is evaluated. For example, if the quota is 100 calls per 10 seconds, then this duration field would be set to 10 seconds. */
  duration?: string;
}

export const TrafficShapingConfig: Schema.Schema<TrafficShapingConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    quotaLimit: Schema.optional(Schema.String),
    duration: Schema.optional(Schema.String),
  }).annotate({ identifier: "TrafficShapingConfig" });

export interface EncryptionConfig {
  /** Optional. KMS crypto key. This field accepts identifiers of the form `projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/ {crypto_key}` */
  kmsKeyName?: string;
  /** Optional. Encryption type for the region. */
  encryptionType?:
    | "ENCRYPTION_TYPE_UNSPECIFIED"
    | "GMEK"
    | "CMEK"
    | (string & {});
}

export const EncryptionConfig: Schema.Schema<EncryptionConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kmsKeyName: Schema.optional(Schema.String),
    encryptionType: Schema.optional(Schema.String),
  }).annotate({ identifier: "EncryptionConfig" });

export interface ConnectorsLogConfig {
  /** Optional. Enabled represents whether logging is enabled or not for a connection. */
  enabled?: boolean;
  /** Optional. Log configuration level. */
  level?: "LOG_LEVEL_UNSPECIFIED" | "ERROR" | "INFO" | "DEBUG" | (string & {});
}

export const ConnectorsLogConfig: Schema.Schema<ConnectorsLogConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
    level: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConnectorsLogConfig" });

export interface ToolspecOverride {
  /** Output only. Updated time. */
  updateTime?: string;
  /** Output only. Created time. */
  createTime?: string;
  /** Required. Represents the base version of the toolspec for which admin has added overrides. */
  baseVersion?: string;
  /** Required. List of tools defined in the tool spec. Marking this field as required as this is the only field that is editable by the user in modify API so we should have at least one tool in the list. */
  tools?: ReadonlyArray<Record<string, unknown>>;
}

export const ToolspecOverride: Schema.Schema<ToolspecOverride> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    baseVersion: Schema.optional(Schema.String),
    tools: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).annotate({ identifier: "ToolspecOverride" });

export interface GenerateConnectionToolspecOverrideResponse {
  /** Toolspec overrides for the connection. */
  toolspecOverride?: ToolspecOverride;
}

export const GenerateConnectionToolspecOverrideResponse: Schema.Schema<GenerateConnectionToolspecOverrideResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    toolspecOverride: Schema.optional(ToolspecOverride),
  }).annotate({ identifier: "GenerateConnectionToolspecOverrideResponse" });

export interface Provider {
  /** Output only. Updated time. */
  updateTime?: string;
  /** Output only. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources */
  labels?: Record<string, string>;
  /** Output only. Link to documentation page. */
  documentationUri?: string;
  /** Output only. Flag to mark the version indicating the launch stage. */
  launchStage?:
    | "LAUNCH_STAGE_UNSPECIFIED"
    | "PREVIEW"
    | "GA"
    | "DEPRECATED"
    | "TEST"
    | "PRIVATE_PREVIEW"
    | (string & {});
  /** Output only. Description of the resource. */
  description?: string;
  /** Output only. Cloud storage location of icons etc consumed by UI. */
  webAssetsLocation?: string;
  /** Output only. Resource name of the Provider. Format: projects/{project}/locations/{location}/providers/{provider} Only global location is supported for Provider resource. */
  name?: string;
  /** Output only. Display name. */
  displayName?: string;
  /** Output only. Created time. */
  createTime?: string;
  /** Output only. Link to external page. */
  externalUri?: string;
}

export const Provider: Schema.Schema<Provider> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    documentationUri: Schema.optional(Schema.String),
    launchStage: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    webAssetsLocation: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    externalUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "Provider" });

export interface ListProvidersResponse {
  /** A list of providers. */
  providers?: ReadonlyArray<Provider>;
  /** Next page token. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListProvidersResponse: Schema.Schema<ListProvidersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    providers: Schema.optional(Schema.Array(Provider)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListProvidersResponse" });

export interface SslConfig {
  /** Optional. Type of Client Cert (PEM/JKS/.. etc.) */
  clientCertType?: "CERT_TYPE_UNSPECIFIED" | "PEM" | (string & {});
  /** Optional. Additional SSL related field values */
  additionalVariables?: ReadonlyArray<ConfigVariable>;
  /** Optional. Trust Model of the SSL connection */
  trustModel?: "PUBLIC" | "PRIVATE" | "INSECURE" | (string & {});
  /** Optional. Client Private Key */
  clientPrivateKey?: Secret;
  /** Optional. Type of Server Cert (PEM/JKS/.. etc.) */
  serverCertType?: "CERT_TYPE_UNSPECIFIED" | "PEM" | (string & {});
  /** Optional. Controls the ssl type for the given connector version. */
  type?: "SSL_TYPE_UNSPECIFIED" | "TLS" | "MTLS" | (string & {});
  /** Optional. Secret containing the passphrase protecting the Client Private Key */
  clientPrivateKeyPass?: Secret;
  /** Optional. Private Server Certificate. Needs to be specified if trust model is `PRIVATE`. */
  privateServerCertificate?: Secret;
  /** Optional. Bool for enabling SSL */
  useSsl?: boolean;
  /** Optional. Client Certificate */
  clientCertificate?: Secret;
}

export const SslConfig: Schema.Schema<SslConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clientCertType: Schema.optional(Schema.String),
    additionalVariables: Schema.optional(Schema.Array(ConfigVariable)),
    trustModel: Schema.optional(Schema.String),
    clientPrivateKey: Schema.optional(Secret),
    serverCertType: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    clientPrivateKeyPass: Schema.optional(Secret),
    privateServerCertificate: Schema.optional(Secret),
    useSsl: Schema.optional(Schema.Boolean),
    clientCertificate: Schema.optional(Secret),
  }).annotate({ identifier: "SslConfig" });

export interface FetchConnectionToolspecOverrideResponse {
  /** Toolspec overrides for the connection. */
  toolspecOverride?: ToolspecOverride;
}

export const FetchConnectionToolspecOverrideResponse: Schema.Schema<FetchConnectionToolspecOverrideResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    toolspecOverride: Schema.optional(ToolspecOverride),
  }).annotate({ identifier: "FetchConnectionToolspecOverrideResponse" });

export interface ValidateCustomConnectorSpecResponse {
  /** Error message. The spec is valid if the error message is empty. */
  errorMessage?: string;
}

export const ValidateCustomConnectorSpecResponse: Schema.Schema<ValidateCustomConnectorSpecResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errorMessage: Schema.optional(Schema.String),
  }).annotate({ identifier: "ValidateCustomConnectorSpecResponse" });

export interface WebhookData {
  /** Output only. Additional webhook related field values. */
  additionalVariables?: ReadonlyArray<ConfigVariable>;
  /** Output only. Timestamp when the webhook was last updated. */
  updateTime?: string;
  /** Output only. List of event subscriptions which are using the webhook. */
  eventSubscriptions?: ReadonlyArray<string>;
  /** Output only. Name of the Webhook */
  name?: string;
  /** Output only. Next webhook refresh time. Will be null if refresh is not supported. */
  nextRefreshTime?: string;
  /** Output only. List of event types for the webhook. This is the event types subscribed by the current webhook. */
  eventTypes?: ReadonlyArray<string>;
  /** Output only. ID to uniquely identify webhook. */
  id?: string;
  /** Output only. Timestamp when the webhook was created. */
  createTime?: string;
}

export const WebhookData: Schema.Schema<WebhookData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    additionalVariables: Schema.optional(Schema.Array(ConfigVariable)),
    updateTime: Schema.optional(Schema.String),
    eventSubscriptions: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
    nextRefreshTime: Schema.optional(Schema.String),
    eventTypes: Schema.optional(Schema.Array(Schema.String)),
    id: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "WebhookData" });

export interface WebhookSubscriptions {
  /** Output only. Webhook data. */
  webhookData?: ReadonlyArray<WebhookData>;
}

export const WebhookSubscriptions: Schema.Schema<WebhookSubscriptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webhookData: Schema.optional(Schema.Array(WebhookData)),
  }).annotate({ identifier: "WebhookSubscriptions" });

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

export interface EventingRuntimeData {
  /** Output only. Events listener endpoint. The value will populated after provisioning the events listener. */
  eventsListenerEndpoint?: string;
  /** Output only. Webhook data. */
  webhookData?: WebhookData;
  /** Output only. Events listener PSC Service attachment. The value will be populated after provisioning the events listener with private connectivity enabled. */
  eventsListenerPscSa?: string;
  /** Output only. Current status of eventing. */
  status?: EventingStatus;
  /** Output only. Webhook subscriptions. */
  webhookSubscriptions?: WebhookSubscriptions;
}

export const EventingRuntimeData: Schema.Schema<EventingRuntimeData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eventsListenerEndpoint: Schema.optional(Schema.String),
    webhookData: Schema.optional(WebhookData),
    eventsListenerPscSa: Schema.optional(Schema.String),
    status: Schema.optional(EventingStatus),
    webhookSubscriptions: Schema.optional(WebhookSubscriptions),
  }).annotate({ identifier: "EventingRuntimeData" });

export interface EnrichmentConfig {
  /** Optional. Append ACL to the event. */
  appendAcl?: boolean;
}

export const EnrichmentConfig: Schema.Schema<EnrichmentConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    appendAcl: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "EnrichmentConfig" });

export interface EventingConfig {
  /** Optional. Ssl config of a connection */
  sslConfig?: SslConfig;
  /** Optional. List of allowed event types for the connection. */
  allowedEventTypes?: ReadonlyArray<string>;
  /** Optional. Proxy for Eventing auto-registration. */
  proxyDestinationConfig?: DestinationConfig;
  /** Optional. Registration endpoint for auto registration. */
  registrationDestinationConfig?: DestinationConfig;
  /** Optional. Dead letter configuration for eventing of a connection. */
  deadLetterConfig?: DeadLetterConfig;
  /** Optional. Auth details for the webhook adapter. */
  authConfig?: AuthConfig;
  /** Optional. Private Connectivity Enabled. */
  privateConnectivityEnabled?: boolean;
  /** Optional. Auth details for the event listener. */
  listenerAuthConfig?: AuthConfig;
  /** Optional. Additional eventing related field values */
  additionalVariables?: ReadonlyArray<ConfigVariable>;
  /** Optional. Data enrichment configuration. */
  enrichmentConfig?: EnrichmentConfig;
  /** Optional. Enrichment Enabled. */
  enrichmentEnabled?: boolean;
  /** Output only. Ingress endpoint of the event listener. This is used only when private connectivity is enabled. */
  eventsListenerIngressEndpoint?: string;
  /** Optional. List of projects to be allowlisted for the service attachment created in the tenant project for eventing ingress. */
  privateConnectivityAllowlistedProjects?: ReadonlyArray<string>;
  /** Optional. Filter to be applied on the events to be received by the connection. */
  globalEventFilter?: string;
}

export const EventingConfig: Schema.Schema<EventingConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sslConfig: Schema.optional(SslConfig),
    allowedEventTypes: Schema.optional(Schema.Array(Schema.String)),
    proxyDestinationConfig: Schema.optional(DestinationConfig),
    registrationDestinationConfig: Schema.optional(DestinationConfig),
    deadLetterConfig: Schema.optional(DeadLetterConfig),
    authConfig: Schema.optional(AuthConfig),
    privateConnectivityEnabled: Schema.optional(Schema.Boolean),
    listenerAuthConfig: Schema.optional(AuthConfig),
    additionalVariables: Schema.optional(Schema.Array(ConfigVariable)),
    enrichmentConfig: Schema.optional(EnrichmentConfig),
    enrichmentEnabled: Schema.optional(Schema.Boolean),
    eventsListenerIngressEndpoint: Schema.optional(Schema.String),
    privateConnectivityAllowlistedProjects: Schema.optional(
      Schema.Array(Schema.String),
    ),
    globalEventFilter: Schema.optional(Schema.String),
  }).annotate({ identifier: "EventingConfig" });

export interface BillingConfig {
  /** Output only. Billing category for the connector. */
  billingCategory?:
    | "BILLING_CATEGORY_UNSPECIFIED"
    | "GCP_AND_TECHNICAL_CONNECTOR"
    | "NON_GCP_CONNECTOR"
    | (string & {});
}

export const BillingConfig: Schema.Schema<BillingConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingCategory: Schema.optional(Schema.String),
  }).annotate({ identifier: "BillingConfig" });

export interface NodeConfig {
  /** Optional. Minimum number of nodes in the runtime nodes. */
  minNodeCount?: number;
  /** Optional. Maximum number of nodes in the runtime nodes. */
  maxNodeCount?: number;
}

export const NodeConfig: Schema.Schema<NodeConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minNodeCount: Schema.optional(Schema.Number),
    maxNodeCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "NodeConfig" });

export interface StringListValues {
  /** Required. The list of string values. */
  listValues?: ReadonlyArray<string>;
}

export const StringListValues: Schema.Schema<StringListValues> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    listValues: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "StringListValues" });

export interface AdminFilters {
  /** Optional. A single string value. */
  stringValue?: string;
  /** Required. Unique name for the filter, e.g., "SharePointSiteURL", "DocumentType", "ChatSpaceName". */
  filterKey?: string;
  /** Optional. List of string values. */
  stringListValues?: StringListValues;
  /** Optional. A single integer value. */
  intValue?: string;
  /** Required. Type of the filter. */
  filterType?:
    | "FILTER_TYPE_UNSPECIFIED"
    | "INCLUSION"
    | "EXCLUSION"
    | (string & {});
}

export const AdminFilters: Schema.Schema<AdminFilters> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    stringValue: Schema.optional(Schema.String),
    filterKey: Schema.optional(Schema.String),
    stringListValues: Schema.optional(StringListValues),
    intValue: Schema.optional(Schema.String),
    filterType: Schema.optional(Schema.String),
  }).annotate({ identifier: "AdminFilters" });

export interface ConnectionStatus {
  /** State. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "ACTIVE"
    | "INACTIVE"
    | "DELETING"
    | "UPDATING"
    | "ERROR"
    | "AUTHORIZATION_REQUIRED"
    | (string & {});
  /** Status provides detailed information for the state. */
  status?: string;
  /** Description. */
  description?: string;
}

export const ConnectionStatus: Schema.Schema<ConnectionStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConnectionStatus" });

export interface Connection {
  /** Optional. Auth override enabled for the connection. If Auth Override is enabled, Connection allows the backend service auth to be overridden in the entities/actions API. */
  authOverrideEnabled?: boolean;
  /** Optional. Ssl config of a connection */
  sslConfig?: SslConfig;
  /** Optional. Traffic shaping configuration for the connection. */
  trafficShapingConfigs?: ReadonlyArray<TrafficShapingConfig>;
  /** Output only. Eventing Runtime Data. */
  eventingRuntimeData?: EventingRuntimeData;
  /** Optional. Configuration for establishing the connection's authentication with an external system. */
  authConfig?: AuthConfig;
  /** Optional. Async operations enabled for the connection. If Async Operations is enabled, Connection allows the customers to initiate async long running operations using the actions API. */
  asyncOperationsEnabled?: boolean;
  /** Output only. Connection revision. This field is only updated when the connection is created or updated by User. */
  connectionRevision?: string;
  /** Output only. The name of the Service Directory service with TLS. */
  tlsServiceDirectory?: string;
  /** Optional. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources */
  labels?: Record<string, string>;
  /** Optional. Service account needed for runtime plane to access Google Cloud resources. */
  serviceAccount?: string;
  /** Output only. Is trusted tester program enabled for the project. */
  isTrustedTester?: boolean;
  /** Required. Connector version on which the connection is created. The format is: projects/* /locations/* /providers/* /connectors/* /versions/* Only global location is supported for ConnectorVersion resource. */
  connectorVersion?: string;
  /** Optional. Eventing config of a connection */
  eventingConfig?: EventingConfig;
  /** Optional. Configuration for configuring the connection with an external system. */
  configVariables?: ReadonlyArray<ConfigVariable>;
  /** Optional. Eventing enablement type. Will be nil if eventing is not enabled. */
  eventingEnablementType?:
    | "EVENTING_ENABLEMENT_TYPE_UNSPECIFIED"
    | "EVENTING_AND_CONNECTION"
    | "ONLY_EVENTING"
    | (string & {});
  /** Output only. The name of the Hostname of the Service Directory service with TLS. */
  host?: string;
  /** Optional. Description of the resource. */
  description?: string;
  /** Output only. Billing config for the connection. */
  billingConfig?: BillingConfig;
  /** Optional. Configuration that indicates whether or not the Connection can be edited. */
  lockConfig?: LockConfig;
  /** Output only. Resource name of the Connection. Format: projects/{project}/locations/{location}/connections/{connection} */
  name?: string;
  /** Optional. Node configuration for the connection. */
  nodeConfig?: NodeConfig;
  /** Optional. Additional Oauth2.0 Auth config for EUA. If the connection is configured using non-OAuth authentication but OAuth needs to be used for EUA, this field can be populated with the OAuth config. This should be a OAuth2AuthCodeFlow Auth type only. */
  euaOauthAuthConfig?: AuthConfig;
  /** Output only. GCR location where the runtime image is stored. formatted like: gcr.io/{bucketName}/{imageName} */
  imageLocation?: string;
  /** Optional. Configuration of the Connector's destination. Only accepted for Connectors that accepts user defined destination(s). */
  destinationConfigs?: ReadonlyArray<DestinationConfig>;
  /** Optional. Admin filters for the connection. These are used by Gemini Enterprise. */
  adminFilters?: ReadonlyArray<AdminFilters>;
  /** Output only. Created time. */
  createTime?: string;
  /** Optional. Suspended indicates if a user has suspended a connection or not. */
  suspended?: boolean;
  /** Output only. Current status of the connection. */
  status?: ConnectionStatus;
  /** Optional. Fallback on admin credentials for the connection. If this both auth_override_enabled and fallback_on_admin_credentials are set to true, the connection will use the admin credentials if the dynamic auth header is not present during auth override. */
  fallbackOnAdminCredentials?: boolean;
  /** Output only. GCR location where the envoy image is stored. formatted like: gcr.io/{bucketName}/{imageName} */
  envoyImageLocation?: string;
  /** Output only. The name of the Service Directory service name. Used for Private Harpoon to resolve the ILB address. e.g. "projects/cloud-connectors-e2e-testing/locations/us-central1/namespaces/istio-system/services/istio-ingressgateway-connectors" */
  serviceDirectory?: string;
  /** Optional. Log configuration for the connection. */
  logConfig?: ConnectorsLogConfig;
  /** Output only. Flag to mark the version indicating the launch stage. */
  connectorVersionLaunchStage?:
    | "LAUNCH_STAGE_UNSPECIFIED"
    | "PREVIEW"
    | "GA"
    | "DEPRECATED"
    | "TEST"
    | "PRIVATE_PREVIEW"
    | (string & {});
  /** Output only. This subscription type enum states the subscription type of the project. */
  subscriptionType?:
    | "SUBSCRIPTION_TYPE_UNSPECIFIED"
    | "PAY_G"
    | "PAID"
    | (string & {});
  /** Output only. Infra configs supported by Connector Version. */
  connectorVersionInfraConfig?: ConnectorVersionInfraConfig;
  /** Output only. Updated time. */
  updateTime?: string;
}

export const Connection: Schema.Schema<Connection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authOverrideEnabled: Schema.optional(Schema.Boolean),
    sslConfig: Schema.optional(SslConfig),
    trafficShapingConfigs: Schema.optional(Schema.Array(TrafficShapingConfig)),
    eventingRuntimeData: Schema.optional(EventingRuntimeData),
    authConfig: Schema.optional(AuthConfig),
    asyncOperationsEnabled: Schema.optional(Schema.Boolean),
    connectionRevision: Schema.optional(Schema.String),
    tlsServiceDirectory: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    serviceAccount: Schema.optional(Schema.String),
    isTrustedTester: Schema.optional(Schema.Boolean),
    connectorVersion: Schema.optional(Schema.String),
    eventingConfig: Schema.optional(EventingConfig),
    configVariables: Schema.optional(Schema.Array(ConfigVariable)),
    eventingEnablementType: Schema.optional(Schema.String),
    host: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    billingConfig: Schema.optional(BillingConfig),
    lockConfig: Schema.optional(LockConfig),
    name: Schema.optional(Schema.String),
    nodeConfig: Schema.optional(NodeConfig),
    euaOauthAuthConfig: Schema.optional(AuthConfig),
    imageLocation: Schema.optional(Schema.String),
    destinationConfigs: Schema.optional(Schema.Array(DestinationConfig)),
    adminFilters: Schema.optional(Schema.Array(AdminFilters)),
    createTime: Schema.optional(Schema.String),
    suspended: Schema.optional(Schema.Boolean),
    status: Schema.optional(ConnectionStatus),
    fallbackOnAdminCredentials: Schema.optional(Schema.Boolean),
    envoyImageLocation: Schema.optional(Schema.String),
    serviceDirectory: Schema.optional(Schema.String),
    logConfig: Schema.optional(ConnectorsLogConfig),
    connectorVersionLaunchStage: Schema.optional(Schema.String),
    subscriptionType: Schema.optional(Schema.String),
    connectorVersionInfraConfig: Schema.optional(ConnectorVersionInfraConfig),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Connection" });

export interface ResultMetadata {
  /** A brief description of the field. */
  description?: string;
  /** Specifies whether a null value is allowed. */
  nullable?: boolean;
  /** The following field specifies the default value of the Parameter provided by the external system if a value is not provided. */
  defaultValue?: unknown;
  /** Name of the result field. */
  field?: string;
  /** The data type of the field. */
  dataType?:
    | "DATA_TYPE_UNSPECIFIED"
    | "DATA_TYPE_INT"
    | "DATA_TYPE_SMALLINT"
    | "DATA_TYPE_DOUBLE"
    | "DATA_TYPE_DATE"
    | "DATA_TYPE_DATETIME"
    | "DATA_TYPE_TIME"
    | "DATA_TYPE_STRING"
    | "DATA_TYPE_LONG"
    | "DATA_TYPE_BOOLEAN"
    | "DATA_TYPE_DECIMAL"
    | "DATA_TYPE_UUID"
    | "DATA_TYPE_BLOB"
    | "DATA_TYPE_BIT"
    | "DATA_TYPE_TINYINT"
    | "DATA_TYPE_INTEGER"
    | "DATA_TYPE_BIGINT"
    | "DATA_TYPE_FLOAT"
    | "DATA_TYPE_REAL"
    | "DATA_TYPE_NUMERIC"
    | "DATA_TYPE_CHAR"
    | "DATA_TYPE_VARCHAR"
    | "DATA_TYPE_LONGVARCHAR"
    | "DATA_TYPE_TIMESTAMP"
    | "DATA_TYPE_NCHAR"
    | "DATA_TYPE_NVARCHAR"
    | "DATA_TYPE_LONGNVARCHAR"
    | "DATA_TYPE_NULL"
    | "DATA_TYPE_OTHER"
    | "DATA_TYPE_JAVA_OBJECT"
    | "DATA_TYPE_DISTINCT"
    | "DATA_TYPE_STRUCT"
    | "DATA_TYPE_ARRAY"
    | "DATA_TYPE_CLOB"
    | "DATA_TYPE_REF"
    | "DATA_TYPE_DATALINK"
    | "DATA_TYPE_ROWID"
    | "DATA_TYPE_BINARY"
    | "DATA_TYPE_VARBINARY"
    | "DATA_TYPE_LONGVARBINARY"
    | "DATA_TYPE_NCLOB"
    | "DATA_TYPE_SQLXML"
    | "DATA_TYPE_REF_CURSOR"
    | "DATA_TYPE_TIME_WITH_TIMEZONE"
    | "DATA_TYPE_TIMESTAMP_WITH_TIMEZONE"
    | (string & {});
  /** JsonSchema representation of this action's result */
  jsonSchema?: JsonSchema;
}

export const ResultMetadata: Schema.Schema<ResultMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    nullable: Schema.optional(Schema.Boolean),
    defaultValue: Schema.optional(Schema.Unknown),
    field: Schema.optional(Schema.String),
    dataType: Schema.optional(Schema.String),
    jsonSchema: Schema.optional(JsonSchema),
  }).annotate({ identifier: "ResultMetadata" });

export interface InputParameter {
  /** Name of the Parameter. */
  parameter?: string;
  /** The following field specifies the default value of the Parameter provided by the external system if a value is not provided. */
  defaultValue?: unknown;
  /** The data type of the Parameter. */
  dataType?:
    | "DATA_TYPE_UNSPECIFIED"
    | "DATA_TYPE_INT"
    | "DATA_TYPE_SMALLINT"
    | "DATA_TYPE_DOUBLE"
    | "DATA_TYPE_DATE"
    | "DATA_TYPE_DATETIME"
    | "DATA_TYPE_TIME"
    | "DATA_TYPE_STRING"
    | "DATA_TYPE_LONG"
    | "DATA_TYPE_BOOLEAN"
    | "DATA_TYPE_DECIMAL"
    | "DATA_TYPE_UUID"
    | "DATA_TYPE_BLOB"
    | "DATA_TYPE_BIT"
    | "DATA_TYPE_TINYINT"
    | "DATA_TYPE_INTEGER"
    | "DATA_TYPE_BIGINT"
    | "DATA_TYPE_FLOAT"
    | "DATA_TYPE_REAL"
    | "DATA_TYPE_NUMERIC"
    | "DATA_TYPE_CHAR"
    | "DATA_TYPE_VARCHAR"
    | "DATA_TYPE_LONGVARCHAR"
    | "DATA_TYPE_TIMESTAMP"
    | "DATA_TYPE_NCHAR"
    | "DATA_TYPE_NVARCHAR"
    | "DATA_TYPE_LONGNVARCHAR"
    | "DATA_TYPE_NULL"
    | "DATA_TYPE_OTHER"
    | "DATA_TYPE_JAVA_OBJECT"
    | "DATA_TYPE_DISTINCT"
    | "DATA_TYPE_STRUCT"
    | "DATA_TYPE_ARRAY"
    | "DATA_TYPE_CLOB"
    | "DATA_TYPE_REF"
    | "DATA_TYPE_DATALINK"
    | "DATA_TYPE_ROWID"
    | "DATA_TYPE_BINARY"
    | "DATA_TYPE_VARBINARY"
    | "DATA_TYPE_LONGVARBINARY"
    | "DATA_TYPE_NCLOB"
    | "DATA_TYPE_SQLXML"
    | "DATA_TYPE_REF_CURSOR"
    | "DATA_TYPE_TIME_WITH_TIMEZONE"
    | "DATA_TYPE_TIMESTAMP_WITH_TIMEZONE"
    | (string & {});
  /** JsonSchema representation of this action's parameter */
  jsonSchema?: JsonSchema;
  /** A brief description of the Parameter. */
  description?: string;
  /** Specifies whether a null value is allowed. */
  nullable?: boolean;
}

export const InputParameter: Schema.Schema<InputParameter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parameter: Schema.optional(Schema.String),
    defaultValue: Schema.optional(Schema.Unknown),
    dataType: Schema.optional(Schema.String),
    jsonSchema: Schema.optional(JsonSchema),
    description: Schema.optional(Schema.String),
    nullable: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "InputParameter" });

export interface RuntimeActionSchema {
  /** Output only. JsonSchema representation of this action's result metadata */
  resultJsonSchema?: JsonSchema;
  /** Output only. Brief Description of action */
  description?: string;
  /** Output only. Input schema as string. */
  inputSchemaAsString?: string;
  /** Output only. Result schema as string. */
  resultSchemaAsString?: string;
  /** Output only. List of result field metadata. */
  resultMetadata?: ReadonlyArray<ResultMetadata>;
  /** Output only. Name of the action. */
  action?: string;
  /** Output only. JsonSchema representation of this action's input metadata */
  inputJsonSchema?: JsonSchema;
  /** Output only. List of input parameter metadata for the action. */
  inputParameters?: ReadonlyArray<InputParameter>;
  /** Output only. Display Name of action to be shown on client side */
  displayName?: string;
}

export const RuntimeActionSchema: Schema.Schema<RuntimeActionSchema> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resultJsonSchema: Schema.optional(JsonSchema),
    description: Schema.optional(Schema.String),
    inputSchemaAsString: Schema.optional(Schema.String),
    resultSchemaAsString: Schema.optional(Schema.String),
    resultMetadata: Schema.optional(Schema.Array(ResultMetadata)),
    action: Schema.optional(Schema.String),
    inputJsonSchema: Schema.optional(JsonSchema),
    inputParameters: Schema.optional(Schema.Array(InputParameter)),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "RuntimeActionSchema" });

export interface SearchConnectionInstance {
  /** Output only. Connection details */
  connection?: Connection;
  /** Output only. Schema of a runtime entity. */
  entitySchema?: RuntimeEntitySchema;
  /** Output only. Schema of a runtime action. */
  actionSchema?: RuntimeActionSchema;
}

export const SearchConnectionInstance: Schema.Schema<SearchConnectionInstance> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    connection: Schema.optional(Connection),
    entitySchema: Schema.optional(RuntimeEntitySchema),
    actionSchema: Schema.optional(RuntimeActionSchema),
  }).annotate({ identifier: "SearchConnectionInstance" });

export interface SearchConnectionsResponse {
  /** A list of connectors. */
  connections?: ReadonlyArray<SearchConnectionInstance>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** Optional. page_token */
  nextPageToken?: string;
}

export const SearchConnectionsResponse: Schema.Schema<SearchConnectionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    connections: Schema.optional(Schema.Array(SearchConnectionInstance)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "SearchConnectionsResponse" });

export interface Binding {
  /** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. For an overview of the IAM roles and permissions, see the [IAM documentation](https://cloud.google.com/iam/docs/roles-overview). For a list of the available pre-defined roles, see [here](https://cloud.google.com/iam/docs/understanding-roles). */
  role?: string;
  /** The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  condition?: Expr;
  /** Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*`: All identities in a workload identity pool. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`. */
  members?: ReadonlyArray<string>;
}

export const Binding: Schema.Schema<Binding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    role: Schema.optional(Schema.String),
    condition: Schema.optional(Expr),
    members: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Binding" });

export interface ListEntityTypesResponse {
  /** list of entity types */
  entityTypes?: ReadonlyArray<RuntimeEntitySchema>;
  /** token for next page */
  nextPageToken?: string;
}

export const ListEntityTypesResponse: Schema.Schema<ListEntityTypesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityTypes: Schema.optional(Schema.Array(RuntimeEntitySchema)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListEntityTypesResponse" });

export interface Status {
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
}

export const Status: Schema.Schema<Status> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.Number),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "Status" });

export interface Operation {
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    done: Schema.optional(Schema.Boolean),
    error: Schema.optional(Status),
  }).annotate({ identifier: "Operation" });

export interface ListRuntimeActionSchemasResponse {
  /** Next page token. */
  nextPageToken?: string;
  /** Runtime action schemas. */
  runtimeActionSchemas?: ReadonlyArray<RuntimeActionSchema>;
}

export const ListRuntimeActionSchemasResponse: Schema.Schema<ListRuntimeActionSchemasResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    runtimeActionSchemas: Schema.optional(Schema.Array(RuntimeActionSchema)),
  }).annotate({ identifier: "ListRuntimeActionSchemasResponse" });

export interface MarketplaceConnectorDetails {
  /** Marketplace product URL. */
  marketplaceProductUri?: string;
  /** The name of the partner. */
  partner?: string;
  /** Marketplace product ID. */
  marketplaceProductId?: string;
  /** Marketplace product name. */
  marketplaceProduct?: string;
}

export const MarketplaceConnectorDetails: Schema.Schema<MarketplaceConnectorDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    marketplaceProductUri: Schema.optional(Schema.String),
    partner: Schema.optional(Schema.String),
    marketplaceProductId: Schema.optional(Schema.String),
    marketplaceProduct: Schema.optional(Schema.String),
  }).annotate({ identifier: "MarketplaceConnectorDetails" });

export interface ValidateCustomConnectorSpecRequest {
  /** Required. Location of the custom connector spec. The location can be either a public url like `https://public-url.com/spec` Or a Google Cloud Storage location like `gs:///` */
  specLocation?: string;
  /** Required. Service account to access the spec from Google Cloud Storage. */
  serviceAccount?: string;
  /** Required. Spec type of the custom connector spec. */
  specType?:
    | "CUSTOM_CONNECTOR_TYPE_UNSPECIFIED"
    | "OPEN_API"
    | "PROTO"
    | "SDK"
    | (string & {});
}

export const ValidateCustomConnectorSpecRequest: Schema.Schema<ValidateCustomConnectorSpecRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    specLocation: Schema.optional(Schema.String),
    serviceAccount: Schema.optional(Schema.String),
    specType: Schema.optional(Schema.String),
  }).annotate({ identifier: "ValidateCustomConnectorSpecRequest" });

export interface RuntimeConfig {
  /** Output only. Pub/Sub topic for control plne to send message. communication. E.g. projects/{project-id}/topics/{topic-id} */
  controlPlaneTopic?: string;
  /** Output only. Pub/Sub subscription for connd to receive message. E.g. projects/{project-id}/subscriptions/{topic-id} */
  conndSubscription?: string;
  /** Output only. Pub/Sub topic for connd to send message. E.g. projects/{project-id}/topics/{topic-id} */
  conndTopic?: string;
  /** Output only. Name of the runtimeConfig resource. Format: projects/{project}/locations/{location}/runtimeConfig */
  name?: string;
  /** Output only. The Cloud Storage bucket that stores connector's schema reports. */
  schemaGcsBucket?: string;
  /** Output only. The endpoint of the connectors runtime ingress. */
  runtimeEndpoint?: string;
  /** Output only. The state of the location. */
  state?:
    | "STATE_UNSPECIFIED"
    | "INACTIVE"
    | "ACTIVATING"
    | "ACTIVE"
    | "CREATING"
    | "DELETING"
    | "UPDATING"
    | (string & {});
  /** Output only. The name of the Service Directory service name. */
  serviceDirectory?: string;
  /** Output only. Pub/Sub subscription for control plane to receive message. E.g. projects/{project-id}/subscriptions/{topic-id} */
  controlPlaneSubscription?: string;
  /** Output only. location_id of the runtime location. E.g. "us-west1". */
  locationId?: string;
}

export const RuntimeConfig: Schema.Schema<RuntimeConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    controlPlaneTopic: Schema.optional(Schema.String),
    conndSubscription: Schema.optional(Schema.String),
    conndTopic: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    schemaGcsBucket: Schema.optional(Schema.String),
    runtimeEndpoint: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    serviceDirectory: Schema.optional(Schema.String),
    controlPlaneSubscription: Schema.optional(Schema.String),
    locationId: Schema.optional(Schema.String),
  }).annotate({ identifier: "RuntimeConfig" });

export interface RemoveConnectionToolspecOverrideRequest {}

export const RemoveConnectionToolspecOverrideRequest: Schema.Schema<RemoveConnectionToolspecOverrideRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "RemoveConnectionToolspecOverrideRequest",
  });

export interface ListEventSubscriptionsResponse {
  /** Subscriptions. */
  eventSubscriptions?: ReadonlyArray<EventSubscription>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** Next page token. */
  nextPageToken?: string;
}

export const ListEventSubscriptionsResponse: Schema.Schema<ListEventSubscriptionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eventSubscriptions: Schema.optional(Schema.Array(EventSubscription)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListEventSubscriptionsResponse" });

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

export interface CustomConnector {
  /** Optional. Description of the resource. */
  description?: string;
  /** Optional. Logo of the resource. */
  logo?: string;
  /** Output only. Active connector versions. */
  activeConnectorVersions?: ReadonlyArray<string>;
  /** Output only. All connector versions. */
  allConnectorVersions?: ReadonlyArray<string>;
  /** Output only. Updated time. */
  updateTime?: string;
  /** Optional. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources */
  labels?: Record<string, string>;
  /** Output only. All marketplace versions. */
  allMarketplaceVersions?: ReadonlyArray<string>;
  /** Output only. Published marketplace versions. */
  publishedMarketplaceVersions?: ReadonlyArray<string>;
  /** Output only. Created time. */
  createTime?: string;
  /** Required. Type of the custom connector. */
  customConnectorType?:
    | "CUSTOM_CONNECTOR_TYPE_UNSPECIFIED"
    | "OPEN_API"
    | "PROTO"
    | "SDK"
    | (string & {});
  /** Optional. Display name. */
  displayName?: string;
  /** Identifier. Resource name of the CustomConnector. Format: projects/{project}/locations/{location}/customConnectors/{connector} */
  name?: string;
}

export const CustomConnector: Schema.Schema<CustomConnector> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    logo: Schema.optional(Schema.String),
    activeConnectorVersions: Schema.optional(Schema.Array(Schema.String)),
    allConnectorVersions: Schema.optional(Schema.Array(Schema.String)),
    updateTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    allMarketplaceVersions: Schema.optional(Schema.Array(Schema.String)),
    publishedMarketplaceVersions: Schema.optional(Schema.Array(Schema.String)),
    createTime: Schema.optional(Schema.String),
    customConnectorType: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "CustomConnector" });

export interface GenerateConnectionToolspecOverrideRequest {
  /** Required. List of tools for which the tool spec override is to be generated. */
  toolNames?: ReadonlyArray<ToolName>;
}

export const GenerateConnectionToolspecOverrideRequest: Schema.Schema<GenerateConnectionToolspecOverrideRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    toolNames: Schema.optional(Schema.Array(ToolName)),
  }).annotate({ identifier: "GenerateConnectionToolspecOverrideRequest" });

export interface ListCustomConnectorsResponse {
  /** Next page token. */
  nextPageToken?: string;
  /** A list of customConnectors. */
  customConnectors?: ReadonlyArray<CustomConnector>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListCustomConnectorsResponse: Schema.Schema<ListCustomConnectorsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    customConnectors: Schema.optional(Schema.Array(CustomConnector)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListCustomConnectorsResponse" });

export interface TestIamPermissionsResponse {
  /** A subset of `TestPermissionsRequest.permissions` that the caller is allowed. */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsResponse: Schema.Schema<TestIamPermissionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsResponse" });

export interface ConnectionSchemaMetadata {
  /** Output only. List of actions. */
  actions?: ReadonlyArray<string>;
  /** Output only. Resource name. Format: projects/{project}/locations/{location}/connections/{connection}/connectionSchemaMetadata */
  name?: string;
  /** Output only. Timestamp when the connection runtime schema was updated. */
  updateTime?: string;
  /** Output only. Timestamp when the connection runtime schema refresh was triggered. */
  refreshTime?: string;
  /** Output only. The current state of runtime schema. */
  state?:
    | "STATE_UNSPECIFIED"
    | "REFRESHING"
    | "UPDATED"
    | "REFRESHING_SCHEMA_METADATA"
    | "UPDATED_SCHEMA_METADATA"
    | "REFRESH_SCHEMA_METADATA_FAILED"
    | "REFRESHING_FULL_SCHEMA"
    | "UPDATED_FULL_SCHEMA"
    | (string & {});
  /** Output only. List of entity names. */
  entities?: ReadonlyArray<string>;
  /** Error message for users. */
  errorMessage?: string;
}

export const ConnectionSchemaMetadata: Schema.Schema<ConnectionSchemaMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    actions: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    refreshTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    entities: Schema.optional(Schema.Array(Schema.String)),
    errorMessage: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConnectionSchemaMetadata" });

export interface DeprecateCustomConnectorVersionRequest {}

export const DeprecateCustomConnectorVersionRequest: Schema.Schema<DeprecateCustomConnectorVersionRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "DeprecateCustomConnectorVersionRequest",
  });

export interface ListOperationsResponse {
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<Operation>;
}

export const ListOperationsResponse: Schema.Schema<ListOperationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
    operations: Schema.optional(Schema.Array(Operation)),
  }).annotate({ identifier: "ListOperationsResponse" });

export interface EndpointAttachment {
  /** Optional. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources */
  labels?: Record<string, string>;
  /** Output only. Updated time. */
  updateTime?: string;
  /** Optional. Description of the resource. */
  description?: string;
  /** Output only. The Private Service Connect Connection Endpoint State. This value is only available in the Full view. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PENDING"
    | "ACCEPTED"
    | "REJECTED"
    | "CLOSED"
    | "FROZEN"
    | "NEEDS_ATTENTION"
    | "ACCEPTED_NOT_PROGRAMMED"
    | (string & {});
  /** Output only. Resource name of the Endpoint Attachment. Format: projects/{project}/locations/{location}/endpointAttachments/{endpoint_attachment} */
  name?: string;
  /** Optional. The Private Service Connect Connection Endpoint Global Access. https://cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints#global-access */
  endpointGlobalAccess?: boolean;
  /** Output only. Created time. */
  createTime?: string;
  /** Output only. The Private Service Connect connection endpoint ip */
  endpointIp?: string;
  /** Required. The path of the service attachment */
  serviceAttachment?: string;
}

export const EndpointAttachment: Schema.Schema<EndpointAttachment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    updateTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    endpointGlobalAccess: Schema.optional(Schema.Boolean),
    createTime: Schema.optional(Schema.String),
    endpointIp: Schema.optional(Schema.String),
    serviceAttachment: Schema.optional(Schema.String),
  }).annotate({ identifier: "EndpointAttachment" });

export interface ListConnectorVersionsResponse {
  /** A list of connector versions. */
  connectorVersions?: ReadonlyArray<ConnectorVersion>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** Next page token. */
  nextPageToken?: string;
}

export const ListConnectorVersionsResponse: Schema.Schema<ListConnectorVersionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    connectorVersions: Schema.optional(Schema.Array(ConnectorVersion)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListConnectorVersionsResponse" });

export interface ListEventTypesResponse {
  /** A list of connector versions. */
  eventTypes?: ReadonlyArray<EventType>;
  /** Next page token. */
  nextPageToken?: string;
}

export const ListEventTypesResponse: Schema.Schema<ListEventTypesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eventTypes: Schema.optional(Schema.Array(EventType)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListEventTypesResponse" });

export interface ListConnectionsResponse {
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** Next page token. */
  nextPageToken?: string;
  /** Connections. */
  connections?: ReadonlyArray<Connection>;
}

export const ListConnectionsResponse: Schema.Schema<ListConnectionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
    connections: Schema.optional(Schema.Array(Connection)),
  }).annotate({ identifier: "ListConnectionsResponse" });

export interface ListCustomConnectorVersionsResponse {
  /** Next page token. */
  nextPageToken?: string;
  /** A list of connector versions. */
  customConnectorVersions?: ReadonlyArray<CustomConnectorVersion>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListCustomConnectorVersionsResponse: Schema.Schema<ListCustomConnectorVersionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    customConnectorVersions: Schema.optional(
      Schema.Array(CustomConnectorVersion),
    ),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListCustomConnectorVersionsResponse" });

export interface NetworkConfig {
  /** Output only. Egress IPs */
  egressIps?: ReadonlyArray<string>;
  /** Optional. Egress mode for the network. */
  egressMode?:
    | "NETWORK_EGRESS_MODE_UNSPECIFIED"
    | "AUTO_IP"
    | "STATIC_IP"
    | (string & {});
}

export const NetworkConfig: Schema.Schema<NetworkConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    egressIps: Schema.optional(Schema.Array(Schema.String)),
    egressMode: Schema.optional(Schema.String),
  }).annotate({ identifier: "NetworkConfig" });

export interface RegionalSettings {
  /** Output only. Resource name of the Connection. Format: projects/{project}/locations/{location}/regionalSettings */
  name?: string;
  /** Optional. Regional encryption config to hold CMEK details. */
  encryptionConfig?: EncryptionConfig;
  /** Optional. Client type for the regional settings. */
  client?: string;
  /** Optional. Regional network config. */
  networkConfig?: NetworkConfig;
  /** Output only. Specifies whether the region is provisioned. */
  provisioned?: boolean;
}

export const RegionalSettings: Schema.Schema<RegionalSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    encryptionConfig: Schema.optional(EncryptionConfig),
    client: Schema.optional(Schema.String),
    networkConfig: Schema.optional(NetworkConfig),
    provisioned: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "RegionalSettings" });

export interface RepairEventingRequest {}

export const RepairEventingRequest: Schema.Schema<RepairEventingRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "RepairEventingRequest",
  });

export interface JsonAuthSchema {
  /** List of AuthObjects. */
  oneOf?: ReadonlyArray<AuthObject>;
  /** JSON schema of the AuthSchemas. */
  $schema?: string;
}

export const JsonAuthSchema: Schema.Schema<JsonAuthSchema> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    oneOf: Schema.optional(Schema.Array(AuthObject)),
    $schema: Schema.optional(Schema.String),
  }).annotate({ identifier: "JsonAuthSchema" });

export interface FetchAuthSchemaResponse {
  /** List of AuthSchemas. */
  authSchemas?: ReadonlyArray<AuthSchema>;
  /** JSON schema of the AuthSchemas. This is only populated if the view is JSON_SCHEMA. The schema is in draft-07 format. */
  jsonSchema?: JsonAuthSchema;
}

export const FetchAuthSchemaResponse: Schema.Schema<FetchAuthSchemaResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authSchemas: Schema.optional(Schema.Array(AuthSchema)),
    jsonSchema: Schema.optional(JsonAuthSchema),
  }).annotate({ identifier: "FetchAuthSchemaResponse" });

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

export interface Policy {
  /** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  version?: number;
  /** Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`. */
  bindings?: ReadonlyArray<Binding>;
  /** Specifies cloud audit logging configuration for this policy. */
  auditConfigs?: ReadonlyArray<AuditConfig>;
  /** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
  etag?: string;
}

export const Policy: Schema.Schema<Policy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.Number),
    bindings: Schema.optional(Schema.Array(Binding)),
    auditConfigs: Schema.optional(Schema.Array(AuditConfig)),
    etag: Schema.optional(Schema.String),
  }).annotate({ identifier: "Policy" });

export interface SetIamPolicyRequest {
  /** OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"` */
  updateMask?: string;
  /** REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them. */
  policy?: Policy;
}

export const SetIamPolicyRequest: Schema.Schema<SetIamPolicyRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String),
    policy: Schema.optional(Policy),
  }).annotate({ identifier: "SetIamPolicyRequest" });

export interface Settings {
  /** Output only. Resource name of the Connection. Format: projects/{project}/locations/global/settings} */
  name?: string;
  /** Output only. Tenant project id of the consumer project. */
  tenantProjectId?: string;
  /** Output only. Flag indicates if user is in PayG model */
  payg?: boolean;
  /** Optional. Flag indicates whether vpc-sc is enabled. */
  vpcsc?: boolean;
}

export const Settings: Schema.Schema<Settings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    tenantProjectId: Schema.optional(Schema.String),
    payg: Schema.optional(Schema.Boolean),
    vpcsc: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "Settings" });

export interface RefreshConnectionSchemaMetadataRequest {}

export const RefreshConnectionSchemaMetadataRequest: Schema.Schema<RefreshConnectionSchemaMetadataRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "RefreshConnectionSchemaMetadataRequest",
  });

export interface ManagedZone {
  /** Required. DNS Name of the resource */
  dns?: string;
  /** Required. The name of the Target Project VPC Network */
  targetVpc?: string;
  /** Output only. Resource name of the Managed Zone. Format: projects/{project}/locations/global/managedZones/{managed_zone} */
  name?: string;
  /** Optional. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources */
  labels?: Record<string, string>;
  /** Output only. Updated time. */
  updateTime?: string;
  /** Required. The name of the Target Project */
  targetProject?: string;
  /** Output only. Created time. */
  createTime?: string;
  /** Optional. Description of the resource. */
  description?: string;
}

export const ManagedZone: Schema.Schema<ManagedZone> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dns: Schema.optional(Schema.String),
    targetVpc: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    updateTime: Schema.optional(Schema.String),
    targetProject: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "ManagedZone" });

export interface ListManagedZonesResponse {
  /** ManagedZones. */
  managedZones?: ReadonlyArray<ManagedZone>;
  /** Next page token. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListManagedZonesResponse: Schema.Schema<ListManagedZonesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    managedZones: Schema.optional(Schema.Array(ManagedZone)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListManagedZonesResponse" });

export interface OperationMetadata {
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
}

export const OperationMetadata: Schema.Schema<OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    statusMessage: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
    apiVersion: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
  }).annotate({ identifier: "OperationMetadata" });

export interface ListEndpointAttachmentsResponse {
  /** Next page token. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** EndpointAttachments. */
  endpointAttachments?: ReadonlyArray<EndpointAttachment>;
}

export const ListEndpointAttachmentsResponse: Schema.Schema<ListEndpointAttachmentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    endpointAttachments: Schema.optional(Schema.Array(EndpointAttachment)),
  }).annotate({ identifier: "ListEndpointAttachmentsResponse" });

export interface TestIamPermissionsRequest {
  /** The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsRequest: Schema.Schema<TestIamPermissionsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsRequest" });

export interface PublishCustomConnectorVersionRequest {
  /** Required. Partner metadata details for validating and publishing the custom connector as a partner connector version. */
  partnerMetadata?: PartnerMetadata;
}

export const PublishCustomConnectorVersionRequest: Schema.Schema<PublishCustomConnectorVersionRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    partnerMetadata: Schema.optional(PartnerMetadata),
  }).annotate({ identifier: "PublishCustomConnectorVersionRequest" });

export interface RetryEventSubscriptionRequest {}

export const RetryEventSubscriptionRequest: Schema.Schema<RetryEventSubscriptionRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "RetryEventSubscriptionRequest",
  });

export interface Connector {
  /** Output only. Resource name of the Connector. Format: projects/{project}/locations/{location}/providers/{provider}/connectors/{connector} Only global location is supported for Connector resource. */
  name?: string;
  /** Output only. Cloud storage location of icons etc consumed by UI. */
  webAssetsLocation?: string;
  /** Output only. Category of the connector. */
  category?: string;
  /** Output only. Eventing details. Will be null if eventing is not supported. */
  eventingDetails?: EventingDetails;
  /** Output only. Link to external page. */
  externalUri?: string;
  /** Output only. The type of the connector. */
  connectorType?:
    | "CONNECTOR_TYPE_UNSPECIFIED"
    | "CONNECTOR_TYPE_GOOGLE"
    | "CONNECTOR_TYPE_TECHNICAL"
    | "CONNECTOR_TYPE_THIRD_PARTY"
    | (string & {});
  /** Output only. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources */
  labels?: Record<string, string>;
  /** Output only. Link to documentation page. */
  documentationUri?: string;
  /** Output only. Flag to mark the version indicating the launch stage. */
  launchStage?:
    | "LAUNCH_STAGE_UNSPECIFIED"
    | "PREVIEW"
    | "GA"
    | "DEPRECATED"
    | "TEST"
    | "PRIVATE_PREVIEW"
    | (string & {});
  /** Output only. Marketplace connector details. Will be null if the connector is not marketplace connector. */
  marketplaceConnectorDetails?: MarketplaceConnectorDetails;
  /** Output only. Display name. */
  displayName?: string;
  /** Output only. Created time. */
  createTime?: string;
  /** Output only. Updated time. */
  updateTime?: string;
  /** Output only. Tags of the connector. */
  tags?: ReadonlyArray<string>;
  /** Output only. Description of the resource. */
  description?: string;
}

export const Connector: Schema.Schema<Connector> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    webAssetsLocation: Schema.optional(Schema.String),
    category: Schema.optional(Schema.String),
    eventingDetails: Schema.optional(EventingDetails),
    externalUri: Schema.optional(Schema.String),
    connectorType: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    documentationUri: Schema.optional(Schema.String),
    launchStage: Schema.optional(Schema.String),
    marketplaceConnectorDetails: Schema.optional(MarketplaceConnectorDetails),
    displayName: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Array(Schema.String)),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "Connector" });

export interface ListConnectorsResponse {
  /** A list of connectors. */
  connectors?: ReadonlyArray<Connector>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** Next page token. */
  nextPageToken?: string;
}

export const ListConnectorsResponse: Schema.Schema<ListConnectorsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    connectors: Schema.optional(Schema.Array(Connector)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListConnectorsResponse" });

export interface ListActionsResponse {
  /** list of actions */
  actions?: ReadonlyArray<RuntimeActionSchema>;
  /** token for next page */
  nextPageToken?: string;
}

export const ListActionsResponse: Schema.Schema<ListActionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    actions: Schema.optional(Schema.Array(RuntimeActionSchema)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListActionsResponse" });

export interface ListEndUserAuthenticationsResponse {
  /** Subscriptions. */
  endUserAuthentications?: ReadonlyArray<EndUserAuthentication>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** Next page token. */
  nextPageToken?: string;
}

export const ListEndUserAuthenticationsResponse: Schema.Schema<ListEndUserAuthenticationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endUserAuthentications: Schema.optional(
      Schema.Array(EndUserAuthentication),
    ),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListEndUserAuthenticationsResponse" });

export interface ListenEventResponse {}

export const ListenEventResponse: Schema.Schema<ListenEventResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "ListenEventResponse",
  });

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

export interface ModifyConnectionToolspecOverrideResponse {
  /** Toolspec overrides for the connection. */
  toolspecOverrides?: ToolspecOverride;
}

export const ModifyConnectionToolspecOverrideResponse: Schema.Schema<ModifyConnectionToolspecOverrideResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    toolspecOverrides: Schema.optional(ToolspecOverride),
  }).annotate({ identifier: "ModifyConnectionToolspecOverrideResponse" });

export interface CancelOperationRequest {}

export const CancelOperationRequest: Schema.Schema<CancelOperationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelOperationRequest",
  });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface ModifyConnectionToolspecOverrideRequest {
  /** Required. Toolspec overrides to be modified. */
  toolspecOverride?: ToolspecOverride;
}

export const ModifyConnectionToolspecOverrideRequest: Schema.Schema<ModifyConnectionToolspecOverrideRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    toolspecOverride: Schema.optional(ToolspecOverride),
  }).annotate({ identifier: "ModifyConnectionToolspecOverrideRequest" });

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
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
  /** Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    name: Schema.String.pipe(T.HttpPath("name")),
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

export interface UpdateRegionalSettingsProjectsLocationsRequest {
  /** Output only. Resource name of the Connection. Format: projects/{project}/locations/{location}/regionalSettings */
  name: string;
  /** Required. The list of fields to update. */
  updateMask?: string;
  /** Request body */
  body?: RegionalSettings;
}

export const UpdateRegionalSettingsProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(RegionalSettings).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateRegionalSettingsProjectsLocationsRequest>;

export type UpdateRegionalSettingsProjectsLocationsResponse = Operation;
export const UpdateRegionalSettingsProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type UpdateRegionalSettingsProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update the settings of a region. */
export const updateRegionalSettingsProjectsLocations: API.OperationMethod<
  UpdateRegionalSettingsProjectsLocationsRequest,
  UpdateRegionalSettingsProjectsLocationsResponse,
  UpdateRegionalSettingsProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateRegionalSettingsProjectsLocationsRequest,
  output: UpdateRegionalSettingsProjectsLocationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetRuntimeConfigProjectsLocationsRequest {
  /** Required. Resource name of the form: `projects/* /locations/* /runtimeConfig` */
  name: string;
}

export const GetRuntimeConfigProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetRuntimeConfigProjectsLocationsRequest>;

export type GetRuntimeConfigProjectsLocationsResponse = RuntimeConfig;
export const GetRuntimeConfigProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ RuntimeConfig;

export type GetRuntimeConfigProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the runtimeConfig of a location. RuntimeConfig is a singleton resource for each location. */
export const getRuntimeConfigProjectsLocations: API.OperationMethod<
  GetRuntimeConfigProjectsLocationsRequest,
  GetRuntimeConfigProjectsLocationsResponse,
  GetRuntimeConfigProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetRuntimeConfigProjectsLocationsRequest,
  output: GetRuntimeConfigProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetRegionalSettingsProjectsLocationsRequest {
  /** Required. The resource name of the Regional Settings. */
  name: string;
}

export const GetRegionalSettingsProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetRegionalSettingsProjectsLocationsRequest>;

export type GetRegionalSettingsProjectsLocationsResponse = RegionalSettings;
export const GetRegionalSettingsProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ RegionalSettings;

export type GetRegionalSettingsProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** GetRegionalSettings gets settings of a region. RegionalSettings is a singleton resource. */
export const getRegionalSettingsProjectsLocations: API.OperationMethod<
  GetRegionalSettingsProjectsLocationsRequest,
  GetRegionalSettingsProjectsLocationsResponse,
  GetRegionalSettingsProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetRegionalSettingsProjectsLocationsRequest,
  output: GetRegionalSettingsProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ValidateCustomConnectorSpecProjectsLocationsCustomConnectorsRequest {
  /** Required. Location at which the custom connector is being created. */
  parent: string;
  /** Request body */
  body?: ValidateCustomConnectorSpecRequest;
}

export const ValidateCustomConnectorSpecProjectsLocationsCustomConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(ValidateCustomConnectorSpecRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/customConnectors:validateCustomConnectorSpec",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ValidateCustomConnectorSpecProjectsLocationsCustomConnectorsRequest>;

export type ValidateCustomConnectorSpecProjectsLocationsCustomConnectorsResponse =
  ValidateCustomConnectorSpecResponse;
export const ValidateCustomConnectorSpecProjectsLocationsCustomConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ValidateCustomConnectorSpecResponse;

export type ValidateCustomConnectorSpecProjectsLocationsCustomConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Validates a Custom Connector Spec. */
export const validateCustomConnectorSpecProjectsLocationsCustomConnectors: API.OperationMethod<
  ValidateCustomConnectorSpecProjectsLocationsCustomConnectorsRequest,
  ValidateCustomConnectorSpecProjectsLocationsCustomConnectorsResponse,
  ValidateCustomConnectorSpecProjectsLocationsCustomConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ValidateCustomConnectorSpecProjectsLocationsCustomConnectorsRequest,
  output: ValidateCustomConnectorSpecProjectsLocationsCustomConnectorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PublishProjectsLocationsCustomConnectorsCustomConnectorVersionsRequest {
  /** Required. Resource name of the form: `projects/{project}/locations/{location}/customConnectors/{custom_connector}/customConnectorVersions/{custom_connector_version}` */
  name: string;
  /** Request body */
  body?: PublishCustomConnectorVersionRequest;
}

export const PublishProjectsLocationsCustomConnectorsCustomConnectorVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(PublishCustomConnectorVersionRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:publish", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PublishProjectsLocationsCustomConnectorsCustomConnectorVersionsRequest>;

export type PublishProjectsLocationsCustomConnectorsCustomConnectorVersionsResponse =
  Operation;
export const PublishProjectsLocationsCustomConnectorsCustomConnectorVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PublishProjectsLocationsCustomConnectorsCustomConnectorVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Publish request for the CustomConnectorVersion. Once approved, the CustomConnectorVersion will be published as PartnerConnector. */
export const publishProjectsLocationsCustomConnectorsCustomConnectorVersions: API.OperationMethod<
  PublishProjectsLocationsCustomConnectorsCustomConnectorVersionsRequest,
  PublishProjectsLocationsCustomConnectorsCustomConnectorVersionsResponse,
  PublishProjectsLocationsCustomConnectorsCustomConnectorVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PublishProjectsLocationsCustomConnectorsCustomConnectorVersionsRequest,
  output:
    PublishProjectsLocationsCustomConnectorsCustomConnectorVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsCustomConnectorsCustomConnectorVersionsRequest {
  /** Required. Resource name of the form: `projects/{project}/locations/{location}/customConnectors/{custom_connector}/customConnectorVersions/{custom_connector_version}` */
  name: string;
}

export const DeleteProjectsLocationsCustomConnectorsCustomConnectorVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsCustomConnectorsCustomConnectorVersionsRequest>;

export type DeleteProjectsLocationsCustomConnectorsCustomConnectorVersionsResponse =
  Operation;
export const DeleteProjectsLocationsCustomConnectorsCustomConnectorVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsCustomConnectorsCustomConnectorVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single CustomConnectorVersion. */
export const deleteProjectsLocationsCustomConnectorsCustomConnectorVersions: API.OperationMethod<
  DeleteProjectsLocationsCustomConnectorsCustomConnectorVersionsRequest,
  DeleteProjectsLocationsCustomConnectorsCustomConnectorVersionsResponse,
  DeleteProjectsLocationsCustomConnectorsCustomConnectorVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsCustomConnectorsCustomConnectorVersionsRequest,
  output:
    DeleteProjectsLocationsCustomConnectorsCustomConnectorVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface WithdrawProjectsLocationsCustomConnectorsCustomConnectorVersionsRequest {
  /** Required. Resource name of the form: `projects/{project}/locations/{location}/customConnectors/{custom_connector}/customConnectorVersions/{custom_connector_version}` */
  name: string;
  /** Request body */
  body?: WithdrawCustomConnectorVersionRequest;
}

export const WithdrawProjectsLocationsCustomConnectorsCustomConnectorVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(WithdrawCustomConnectorVersionRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:withdraw", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<WithdrawProjectsLocationsCustomConnectorsCustomConnectorVersionsRequest>;

export type WithdrawProjectsLocationsCustomConnectorsCustomConnectorVersionsResponse =
  Operation;
export const WithdrawProjectsLocationsCustomConnectorsCustomConnectorVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type WithdrawProjectsLocationsCustomConnectorsCustomConnectorVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Withdraw the publish request for the CustomConnectorVersion. This can only be used before the CustomConnectorVersion is published. */
export const withdrawProjectsLocationsCustomConnectorsCustomConnectorVersions: API.OperationMethod<
  WithdrawProjectsLocationsCustomConnectorsCustomConnectorVersionsRequest,
  WithdrawProjectsLocationsCustomConnectorsCustomConnectorVersionsResponse,
  WithdrawProjectsLocationsCustomConnectorsCustomConnectorVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    WithdrawProjectsLocationsCustomConnectorsCustomConnectorVersionsRequest,
  output:
    WithdrawProjectsLocationsCustomConnectorsCustomConnectorVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeprecateProjectsLocationsCustomConnectorsCustomConnectorVersionsRequest {
  /** Required. Resource name of the form: `projects/{project}/locations/{location}/customConnectors/{custom_connector}/customConnectorVersions/{custom_connector_version}` */
  name: string;
  /** Request body */
  body?: DeprecateCustomConnectorVersionRequest;
}

export const DeprecateProjectsLocationsCustomConnectorsCustomConnectorVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(DeprecateCustomConnectorVersionRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:deprecate", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<DeprecateProjectsLocationsCustomConnectorsCustomConnectorVersionsRequest>;

export type DeprecateProjectsLocationsCustomConnectorsCustomConnectorVersionsResponse =
  Operation;
export const DeprecateProjectsLocationsCustomConnectorsCustomConnectorVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeprecateProjectsLocationsCustomConnectorsCustomConnectorVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deprecates a single CustomConnectorVersion. */
export const deprecateProjectsLocationsCustomConnectorsCustomConnectorVersions: API.OperationMethod<
  DeprecateProjectsLocationsCustomConnectorsCustomConnectorVersionsRequest,
  DeprecateProjectsLocationsCustomConnectorsCustomConnectorVersionsResponse,
  DeprecateProjectsLocationsCustomConnectorsCustomConnectorVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    DeprecateProjectsLocationsCustomConnectorsCustomConnectorVersionsRequest,
  output:
    DeprecateProjectsLocationsCustomConnectorsCustomConnectorVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsProvidersRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsProvidersRequest =
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
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsProvidersRequest>;

export type SetIamPolicyProjectsLocationsProvidersResponse = Policy;
export const SetIamPolicyProjectsLocationsProvidersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsProvidersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsProviders: API.OperationMethod<
  SetIamPolicyProjectsLocationsProvidersRequest,
  SetIamPolicyProjectsLocationsProvidersResponse,
  SetIamPolicyProjectsLocationsProvidersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsProvidersRequest,
  output: SetIamPolicyProjectsLocationsProvidersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsProvidersRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsProvidersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsProvidersRequest>;

export type GetIamPolicyProjectsLocationsProvidersResponse = Policy;
export const GetIamPolicyProjectsLocationsProvidersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsProvidersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsProviders: API.OperationMethod<
  GetIamPolicyProjectsLocationsProvidersRequest,
  GetIamPolicyProjectsLocationsProvidersResponse,
  GetIamPolicyProjectsLocationsProvidersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsProvidersRequest,
  output: GetIamPolicyProjectsLocationsProvidersResponse,
  errors: [NotFound, Forbidden],
}));

export interface TestIamPermissionsProjectsLocationsProvidersRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsProvidersRequest =
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
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsProvidersRequest>;

export type TestIamPermissionsProjectsLocationsProvidersResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsProvidersResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsProvidersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsProviders: API.OperationMethod<
  TestIamPermissionsProjectsLocationsProvidersRequest,
  TestIamPermissionsProjectsLocationsProvidersResponse,
  TestIamPermissionsProjectsLocationsProvidersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsProvidersRequest,
  output: TestIamPermissionsProjectsLocationsProvidersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsProvidersRequest {
  /** Required. Resource name of the form: `projects/* /locations/* /providers/*` Only global location is supported for Provider resource. */
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

/** Gets details of a provider. */
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
  /** Page token. */
  pageToken?: string;
  /** Required. Parent resource of the API, of the form: `projects/* /locations/*` Only global location is supported for Provider resource. */
  parent: string;
  /** Page size. */
  pageSize?: number;
}

export const ListProjectsLocationsProvidersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
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

/** Lists Providers in a given project and location. */
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

export interface ListProjectsLocationsProvidersConnectorsRequest {
  /** Filter string. */
  filter?: string;
  /** Page size. */
  pageSize?: number;
  /** Required. Parent resource of the connectors, of the form: `projects/* /locations/* /providers/*` Only global location is supported for Connector resource. */
  parent: string;
  /** Page token. */
  pageToken?: string;
}

export const ListProjectsLocationsProvidersConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/connectors" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsProvidersConnectorsRequest>;

export type ListProjectsLocationsProvidersConnectorsResponse =
  ListConnectorsResponse;
export const ListProjectsLocationsProvidersConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListConnectorsResponse;

export type ListProjectsLocationsProvidersConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Connectors in a given project and location. */
export const listProjectsLocationsProvidersConnectors: API.PaginatedOperationMethod<
  ListProjectsLocationsProvidersConnectorsRequest,
  ListProjectsLocationsProvidersConnectorsResponse,
  ListProjectsLocationsProvidersConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsProvidersConnectorsRequest,
  output: ListProjectsLocationsProvidersConnectorsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsProvidersConnectorsRequest {
  /** Required. Resource name of the form: `projects/* /locations/* /providers/* /connectors/*` Only global location is supported for Connector resource. */
  name: string;
}

export const GetProjectsLocationsProvidersConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsProvidersConnectorsRequest>;

export type GetProjectsLocationsProvidersConnectorsResponse = Connector;
export const GetProjectsLocationsProvidersConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Connector;

export type GetProjectsLocationsProvidersConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single Connector. */
export const getProjectsLocationsProvidersConnectors: API.OperationMethod<
  GetProjectsLocationsProvidersConnectorsRequest,
  GetProjectsLocationsProvidersConnectorsResponse,
  GetProjectsLocationsProvidersConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsProvidersConnectorsRequest,
  output: GetProjectsLocationsProvidersConnectorsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsProvidersConnectorsVersionsRequest {
  /** Required. Resource name of the form: `projects/* /locations/* /providers/* /connectors/* /versions/*` Only global location is supported for ConnectorVersion resource. */
  name: string;
  /** Specifies which fields of the ConnectorVersion are returned in the response. Defaults to `CUSTOMER` view. */
  view?:
    | "CONNECTOR_VERSION_VIEW_UNSPECIFIED"
    | "CONNECTOR_VERSION_VIEW_BASIC"
    | "CONNECTOR_VERSION_VIEW_FULL"
    | (string & {});
}

export const GetProjectsLocationsProvidersConnectorsVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsProvidersConnectorsVersionsRequest>;

export type GetProjectsLocationsProvidersConnectorsVersionsResponse =
  ConnectorVersion;
export const GetProjectsLocationsProvidersConnectorsVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ConnectorVersion;

export type GetProjectsLocationsProvidersConnectorsVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single connector version. */
export const getProjectsLocationsProvidersConnectorsVersions: API.OperationMethod<
  GetProjectsLocationsProvidersConnectorsVersionsRequest,
  GetProjectsLocationsProvidersConnectorsVersionsResponse,
  GetProjectsLocationsProvidersConnectorsVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsProvidersConnectorsVersionsRequest,
  output: GetProjectsLocationsProvidersConnectorsVersionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsProvidersConnectorsVersionsRequest {
  /** Specifies which fields of the ConnectorVersion are returned in the response. Defaults to `BASIC` view. */
  view?:
    | "CONNECTOR_VERSION_VIEW_UNSPECIFIED"
    | "CONNECTOR_VERSION_VIEW_BASIC"
    | "CONNECTOR_VERSION_VIEW_FULL"
    | (string & {});
  /** Page size. */
  pageSize?: number;
  parent: string;
  /** Page token. */
  pageToken?: string;
}

export const ListProjectsLocationsProvidersConnectorsVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/versions" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsProvidersConnectorsVersionsRequest>;

export type ListProjectsLocationsProvidersConnectorsVersionsResponse =
  ListConnectorVersionsResponse;
export const ListProjectsLocationsProvidersConnectorsVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListConnectorVersionsResponse;

export type ListProjectsLocationsProvidersConnectorsVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Connector Versions in a given project and location. */
export const listProjectsLocationsProvidersConnectorsVersions: API.PaginatedOperationMethod<
  ListProjectsLocationsProvidersConnectorsVersionsRequest,
  ListProjectsLocationsProvidersConnectorsVersionsResponse,
  ListProjectsLocationsProvidersConnectorsVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsProvidersConnectorsVersionsRequest,
  output: ListProjectsLocationsProvidersConnectorsVersionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface FetchAuthSchemaProjectsLocationsProvidersConnectorsVersionsRequest {
  /** Required. Parent resource of the Connector Version, of the form: `projects/* /locations/* /providers/* /connectors/* /versions/*` */
  name: string;
  /** Optional. View of the AuthSchema. The default value is BASIC. */
  view?:
    | "AUTH_SCHEMA_VIEW_UNSPECIFIED"
    | "BASIC"
    | "JSON_SCHEMA"
    | "EUA_SCHEMA"
    | (string & {});
}

export const FetchAuthSchemaProjectsLocationsProvidersConnectorsVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:fetchAuthSchema" }),
    svc,
  ) as unknown as Schema.Schema<FetchAuthSchemaProjectsLocationsProvidersConnectorsVersionsRequest>;

export type FetchAuthSchemaProjectsLocationsProvidersConnectorsVersionsResponse =
  FetchAuthSchemaResponse;
export const FetchAuthSchemaProjectsLocationsProvidersConnectorsVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ FetchAuthSchemaResponse;

export type FetchAuthSchemaProjectsLocationsProvidersConnectorsVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** fetch and return the list of auth config variables required to override the connection backend auth. */
export const fetchAuthSchemaProjectsLocationsProvidersConnectorsVersions: API.OperationMethod<
  FetchAuthSchemaProjectsLocationsProvidersConnectorsVersionsRequest,
  FetchAuthSchemaProjectsLocationsProvidersConnectorsVersionsResponse,
  FetchAuthSchemaProjectsLocationsProvidersConnectorsVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: FetchAuthSchemaProjectsLocationsProvidersConnectorsVersionsRequest,
  output: FetchAuthSchemaProjectsLocationsProvidersConnectorsVersionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsProvidersConnectorsVersionsEventtypesRequest {
  /** Page size. */
  pageSize?: number;
  /** Page token. */
  pageToken?: string;
  /** Required. Parent resource of the connectors, of the form: `projects/* /locations/* /providers/* /connectors/* /versions/*` Only global location is supported for EventType resource. */
  parent: string;
}

export const ListProjectsLocationsProvidersConnectorsVersionsEventtypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/eventtypes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsProvidersConnectorsVersionsEventtypesRequest>;

export type ListProjectsLocationsProvidersConnectorsVersionsEventtypesResponse =
  ListEventTypesResponse;
export const ListProjectsLocationsProvidersConnectorsVersionsEventtypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListEventTypesResponse;

export type ListProjectsLocationsProvidersConnectorsVersionsEventtypesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Event Types in a given Connector Version. */
export const listProjectsLocationsProvidersConnectorsVersionsEventtypes: API.PaginatedOperationMethod<
  ListProjectsLocationsProvidersConnectorsVersionsEventtypesRequest,
  ListProjectsLocationsProvidersConnectorsVersionsEventtypesResponse,
  ListProjectsLocationsProvidersConnectorsVersionsEventtypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsProvidersConnectorsVersionsEventtypesRequest,
  output: ListProjectsLocationsProvidersConnectorsVersionsEventtypesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsProvidersConnectorsVersionsEventtypesRequest {
  /** Required. Resource name of the form: `projects/* /locations/* /providers/* /connectors/* /versions/* /eventtypes/*` Only global location is supported for EventType resource. */
  name: string;
}

export const GetProjectsLocationsProvidersConnectorsVersionsEventtypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsProvidersConnectorsVersionsEventtypesRequest>;

export type GetProjectsLocationsProvidersConnectorsVersionsEventtypesResponse =
  EventType;
export const GetProjectsLocationsProvidersConnectorsVersionsEventtypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ EventType;

export type GetProjectsLocationsProvidersConnectorsVersionsEventtypesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single event type. */
export const getProjectsLocationsProvidersConnectorsVersionsEventtypes: API.OperationMethod<
  GetProjectsLocationsProvidersConnectorsVersionsEventtypesRequest,
  GetProjectsLocationsProvidersConnectorsVersionsEventtypesResponse,
  GetProjectsLocationsProvidersConnectorsVersionsEventtypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsProvidersConnectorsVersionsEventtypesRequest,
  output: GetProjectsLocationsProvidersConnectorsVersionsEventtypesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsOperationsRequest {
  /** The standard list page size. */
  pageSize?: number;
  /** The standard list filter. */
  filter?: string;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list page token. */
  pageToken?: string;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
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

export interface UpdateSettingsProjectsLocationsGlobalRequest {
  /** Output only. Resource name of the Connection. Format: projects/{project}/locations/global/settings} */
  name: string;
  /** Required. The list of fields to update. */
  updateMask?: string;
  /** Request body */
  body?: Settings;
}

export const UpdateSettingsProjectsLocationsGlobalRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Settings).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateSettingsProjectsLocationsGlobalRequest>;

export type UpdateSettingsProjectsLocationsGlobalResponse = Operation;
export const UpdateSettingsProjectsLocationsGlobalResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type UpdateSettingsProjectsLocationsGlobalError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update the global settings of a project. */
export const updateSettingsProjectsLocationsGlobal: API.OperationMethod<
  UpdateSettingsProjectsLocationsGlobalRequest,
  UpdateSettingsProjectsLocationsGlobalResponse,
  UpdateSettingsProjectsLocationsGlobalError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateSettingsProjectsLocationsGlobalRequest,
  output: UpdateSettingsProjectsLocationsGlobalResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetSettingsProjectsLocationsGlobalRequest {
  /** Required. The resource name of the Settings. */
  name: string;
}

export const GetSettingsProjectsLocationsGlobalRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetSettingsProjectsLocationsGlobalRequest>;

export type GetSettingsProjectsLocationsGlobalResponse = Settings;
export const GetSettingsProjectsLocationsGlobalResponse =
  /*@__PURE__*/ /*#__PURE__*/ Settings;

export type GetSettingsProjectsLocationsGlobalError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** GetGlobalSettings gets settings of a project. GlobalSettings is a singleton resource. */
export const getSettingsProjectsLocationsGlobal: API.OperationMethod<
  GetSettingsProjectsLocationsGlobalRequest,
  GetSettingsProjectsLocationsGlobalResponse,
  GetSettingsProjectsLocationsGlobalError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSettingsProjectsLocationsGlobalRequest,
  output: GetSettingsProjectsLocationsGlobalResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsGlobalCustomConnectorsRequest {
  /** Identifier. Resource name of the CustomConnector. Format: projects/{project}/locations/{location}/customConnectors/{connector} */
  name: string;
  /** Required. Field mask is used to specify the fields to be overwritten in the Connector resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. Set the mask as "*" for full replacement, which means all fields will be overwritten. */
  updateMask?: string;
  /** Request body */
  body?: CustomConnector;
}

export const PatchProjectsLocationsGlobalCustomConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(CustomConnector).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsGlobalCustomConnectorsRequest>;

export type PatchProjectsLocationsGlobalCustomConnectorsResponse = Operation;
export const PatchProjectsLocationsGlobalCustomConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsGlobalCustomConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a CustomConnector. */
export const patchProjectsLocationsGlobalCustomConnectors: API.OperationMethod<
  PatchProjectsLocationsGlobalCustomConnectorsRequest,
  PatchProjectsLocationsGlobalCustomConnectorsResponse,
  PatchProjectsLocationsGlobalCustomConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsGlobalCustomConnectorsRequest,
  output: PatchProjectsLocationsGlobalCustomConnectorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsGlobalCustomConnectorsRequest {
  /** Optional. If set to true, any customConnectorVersion which is a child resource will also be deleted. https://aip.dev/135#cascading-delete */
  force?: boolean;
  /** Required. Resource name of the form: `projects/{project}/locations/{location}/customConnectors/{connector}` */
  name: string;
}

export const DeleteProjectsLocationsGlobalCustomConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsGlobalCustomConnectorsRequest>;

export type DeleteProjectsLocationsGlobalCustomConnectorsResponse = Operation;
export const DeleteProjectsLocationsGlobalCustomConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsGlobalCustomConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single CustomConnector. */
export const deleteProjectsLocationsGlobalCustomConnectors: API.OperationMethod<
  DeleteProjectsLocationsGlobalCustomConnectorsRequest,
  DeleteProjectsLocationsGlobalCustomConnectorsResponse,
  DeleteProjectsLocationsGlobalCustomConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsGlobalCustomConnectorsRequest,
  output: DeleteProjectsLocationsGlobalCustomConnectorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsGlobalCustomConnectorsRequest {
  /** Page size. */
  pageSize?: number;
  /** Filter string. */
  filter?: string;
  /** Page token. */
  pageToken?: string;
  /** Required. Parent resource of the custom connectors, of the form: `projects/* /locations/*` Only global location is supported for CustomConnector resource. */
  parent: string;
}

export const ListProjectsLocationsGlobalCustomConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/customConnectors" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsGlobalCustomConnectorsRequest>;

export type ListProjectsLocationsGlobalCustomConnectorsResponse =
  ListCustomConnectorsResponse;
export const ListProjectsLocationsGlobalCustomConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListCustomConnectorsResponse;

export type ListProjectsLocationsGlobalCustomConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List CustomConnectorVersions in a given project */
export const listProjectsLocationsGlobalCustomConnectors: API.PaginatedOperationMethod<
  ListProjectsLocationsGlobalCustomConnectorsRequest,
  ListProjectsLocationsGlobalCustomConnectorsResponse,
  ListProjectsLocationsGlobalCustomConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsGlobalCustomConnectorsRequest,
  output: ListProjectsLocationsGlobalCustomConnectorsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsGlobalCustomConnectorsRequest {
  /** Required. Parent resource of the CreateCustomConnector, of the form: `projects/{project}/locations/*` */
  parent: string;
  /** Required. Identifier to assign to the CreateCustomConnector. Must be unique within scope of the parent resource. */
  customConnectorId?: string;
  /** Request body */
  body?: CustomConnector;
}

export const CreateProjectsLocationsGlobalCustomConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    customConnectorId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("customConnectorId"),
    ),
    body: Schema.optional(CustomConnector).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/customConnectors",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsGlobalCustomConnectorsRequest>;

export type CreateProjectsLocationsGlobalCustomConnectorsResponse = Operation;
export const CreateProjectsLocationsGlobalCustomConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsGlobalCustomConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new CustomConnector in a given project and location. */
export const createProjectsLocationsGlobalCustomConnectors: API.OperationMethod<
  CreateProjectsLocationsGlobalCustomConnectorsRequest,
  CreateProjectsLocationsGlobalCustomConnectorsResponse,
  CreateProjectsLocationsGlobalCustomConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsGlobalCustomConnectorsRequest,
  output: CreateProjectsLocationsGlobalCustomConnectorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsGlobalCustomConnectorsRequest {
  /** Required. Resource name of the form: `projects/* /locations/* /customConnectors/*` */
  name: string;
}

export const GetProjectsLocationsGlobalCustomConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsGlobalCustomConnectorsRequest>;

export type GetProjectsLocationsGlobalCustomConnectorsResponse =
  CustomConnector;
export const GetProjectsLocationsGlobalCustomConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CustomConnector;

export type GetProjectsLocationsGlobalCustomConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single CustomConnector. */
export const getProjectsLocationsGlobalCustomConnectors: API.OperationMethod<
  GetProjectsLocationsGlobalCustomConnectorsRequest,
  GetProjectsLocationsGlobalCustomConnectorsResponse,
  GetProjectsLocationsGlobalCustomConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsGlobalCustomConnectorsRequest,
  output: GetProjectsLocationsGlobalCustomConnectorsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsGlobalCustomConnectorsCustomConnectorVersionsRequest {
  /** Required. Resource name of the form: `projects/* /locations/{location}/customConnectors/* /customConnectorVersions/*` */
  name: string;
}

export const GetProjectsLocationsGlobalCustomConnectorsCustomConnectorVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsGlobalCustomConnectorsCustomConnectorVersionsRequest>;

export type GetProjectsLocationsGlobalCustomConnectorsCustomConnectorVersionsResponse =
  CustomConnectorVersion;
export const GetProjectsLocationsGlobalCustomConnectorsCustomConnectorVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CustomConnectorVersion;

export type GetProjectsLocationsGlobalCustomConnectorsCustomConnectorVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single CustomConnectorVersion. */
export const getProjectsLocationsGlobalCustomConnectorsCustomConnectorVersions: API.OperationMethod<
  GetProjectsLocationsGlobalCustomConnectorsCustomConnectorVersionsRequest,
  GetProjectsLocationsGlobalCustomConnectorsCustomConnectorVersionsResponse,
  GetProjectsLocationsGlobalCustomConnectorsCustomConnectorVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    GetProjectsLocationsGlobalCustomConnectorsCustomConnectorVersionsRequest,
  output:
    GetProjectsLocationsGlobalCustomConnectorsCustomConnectorVersionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsGlobalCustomConnectorsCustomConnectorVersionsRequest {
  /** Page size. */
  pageSize?: number;
  /** Required. Parent resource of the connectors, of the form: `projects/* /locations/{location}/customConnectors/* /customConnectorVersions/*` */
  parent: string;
  /** Page token. */
  pageToken?: string;
}

export const ListProjectsLocationsGlobalCustomConnectorsCustomConnectorVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/customConnectorVersions" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsGlobalCustomConnectorsCustomConnectorVersionsRequest>;

export type ListProjectsLocationsGlobalCustomConnectorsCustomConnectorVersionsResponse =
  ListCustomConnectorVersionsResponse;
export const ListProjectsLocationsGlobalCustomConnectorsCustomConnectorVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListCustomConnectorVersionsResponse;

export type ListProjectsLocationsGlobalCustomConnectorsCustomConnectorVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List CustomConnectorVersions in a given project */
export const listProjectsLocationsGlobalCustomConnectorsCustomConnectorVersions: API.PaginatedOperationMethod<
  ListProjectsLocationsGlobalCustomConnectorsCustomConnectorVersionsRequest,
  ListProjectsLocationsGlobalCustomConnectorsCustomConnectorVersionsResponse,
  ListProjectsLocationsGlobalCustomConnectorsCustomConnectorVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input:
    ListProjectsLocationsGlobalCustomConnectorsCustomConnectorVersionsRequest,
  output:
    ListProjectsLocationsGlobalCustomConnectorsCustomConnectorVersionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsGlobalCustomConnectorsCustomConnectorVersionsRequest {
  /** Required. Parent resource of the CreateCustomConnector, of the form: `projects/{project}/locations/{location}/customConnectors/{custom_connector}` */
  parent: string;
  /** Required. Identifier to assign to the CreateCustomConnectorVersion. Must be unique within scope of the parent resource. */
  customConnectorVersionId?: string;
  /** Request body */
  body?: CustomConnectorVersion;
}

export const CreateProjectsLocationsGlobalCustomConnectorsCustomConnectorVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    customConnectorVersionId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("customConnectorVersionId"),
    ),
    body: Schema.optional(CustomConnectorVersion).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/customConnectorVersions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsGlobalCustomConnectorsCustomConnectorVersionsRequest>;

export type CreateProjectsLocationsGlobalCustomConnectorsCustomConnectorVersionsResponse =
  Operation;
export const CreateProjectsLocationsGlobalCustomConnectorsCustomConnectorVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsGlobalCustomConnectorsCustomConnectorVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new CustomConnectorVersion in a given project and location. */
export const createProjectsLocationsGlobalCustomConnectorsCustomConnectorVersions: API.OperationMethod<
  CreateProjectsLocationsGlobalCustomConnectorsCustomConnectorVersionsRequest,
  CreateProjectsLocationsGlobalCustomConnectorsCustomConnectorVersionsResponse,
  CreateProjectsLocationsGlobalCustomConnectorsCustomConnectorVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    CreateProjectsLocationsGlobalCustomConnectorsCustomConnectorVersionsRequest,
  output:
    CreateProjectsLocationsGlobalCustomConnectorsCustomConnectorVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsGlobalManagedZonesRequest {
  /** Required. Resource name of the form: `projects/* /locations/global/managedZones/*` */
  name: string;
}

export const GetProjectsLocationsGlobalManagedZonesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsGlobalManagedZonesRequest>;

export type GetProjectsLocationsGlobalManagedZonesResponse = ManagedZone;
export const GetProjectsLocationsGlobalManagedZonesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ManagedZone;

export type GetProjectsLocationsGlobalManagedZonesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single ManagedZone. */
export const getProjectsLocationsGlobalManagedZones: API.OperationMethod<
  GetProjectsLocationsGlobalManagedZonesRequest,
  GetProjectsLocationsGlobalManagedZonesResponse,
  GetProjectsLocationsGlobalManagedZonesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsGlobalManagedZonesRequest,
  output: GetProjectsLocationsGlobalManagedZonesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsGlobalManagedZonesRequest {
  /** Filter. */
  filter?: string;
  /** Order by parameters. */
  orderBy?: string;
  /** Optional. If true, allow partial responses for multi-regional Aggregated List requests. */
  returnPartialSuccess?: boolean;
  /** Required. Parent resource of the Managed Zone, of the form: `projects/* /locations/global` */
  parent: string;
  /** Page token. */
  pageToken?: string;
  /** Page size. */
  pageSize?: number;
}

export const ListProjectsLocationsGlobalManagedZonesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/managedZones" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsGlobalManagedZonesRequest>;

export type ListProjectsLocationsGlobalManagedZonesResponse =
  ListManagedZonesResponse;
export const ListProjectsLocationsGlobalManagedZonesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListManagedZonesResponse;

export type ListProjectsLocationsGlobalManagedZonesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List ManagedZones in a given project */
export const listProjectsLocationsGlobalManagedZones: API.PaginatedOperationMethod<
  ListProjectsLocationsGlobalManagedZonesRequest,
  ListProjectsLocationsGlobalManagedZonesResponse,
  ListProjectsLocationsGlobalManagedZonesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsGlobalManagedZonesRequest,
  output: ListProjectsLocationsGlobalManagedZonesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsGlobalManagedZonesRequest {
  /** Required. Resource name of the form: `projects/* /locations/global/managedZones/*` */
  name: string;
}

export const DeleteProjectsLocationsGlobalManagedZonesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsGlobalManagedZonesRequest>;

export type DeleteProjectsLocationsGlobalManagedZonesResponse = Operation;
export const DeleteProjectsLocationsGlobalManagedZonesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsGlobalManagedZonesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single ManagedZone. */
export const deleteProjectsLocationsGlobalManagedZones: API.OperationMethod<
  DeleteProjectsLocationsGlobalManagedZonesRequest,
  DeleteProjectsLocationsGlobalManagedZonesResponse,
  DeleteProjectsLocationsGlobalManagedZonesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsGlobalManagedZonesRequest,
  output: DeleteProjectsLocationsGlobalManagedZonesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsGlobalManagedZonesRequest {
  /** Required. Identifier to assign to the ManagedZone. Must be unique within scope of the parent resource. */
  managedZoneId?: string;
  /** Required. Parent resource of the ManagedZone, of the form: `projects/* /locations/global` */
  parent: string;
  /** Request body */
  body?: ManagedZone;
}

export const CreateProjectsLocationsGlobalManagedZonesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    managedZoneId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("managedZoneId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(ManagedZone).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/managedZones",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsGlobalManagedZonesRequest>;

export type CreateProjectsLocationsGlobalManagedZonesResponse = Operation;
export const CreateProjectsLocationsGlobalManagedZonesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsGlobalManagedZonesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new ManagedZone in a given project and location. */
export const createProjectsLocationsGlobalManagedZones: API.OperationMethod<
  CreateProjectsLocationsGlobalManagedZonesRequest,
  CreateProjectsLocationsGlobalManagedZonesResponse,
  CreateProjectsLocationsGlobalManagedZonesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsGlobalManagedZonesRequest,
  output: CreateProjectsLocationsGlobalManagedZonesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsGlobalManagedZonesRequest {
  /** Output only. Resource name of the Managed Zone. Format: projects/{project}/locations/global/managedZones/{managed_zone} */
  name: string;
  /** Required. The list of fields to update. Fields are specified relative to the managedZone. A field will be overwritten if it is in the mask. You can modify only the fields listed below. To update the managedZone details: * `description` * `labels` * `target_project` * `target_network` */
  updateMask?: string;
  /** Request body */
  body?: ManagedZone;
}

export const PatchProjectsLocationsGlobalManagedZonesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(ManagedZone).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsGlobalManagedZonesRequest>;

export type PatchProjectsLocationsGlobalManagedZonesResponse = Operation;
export const PatchProjectsLocationsGlobalManagedZonesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsGlobalManagedZonesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single ManagedZone. */
export const patchProjectsLocationsGlobalManagedZones: API.OperationMethod<
  PatchProjectsLocationsGlobalManagedZonesRequest,
  PatchProjectsLocationsGlobalManagedZonesResponse,
  PatchProjectsLocationsGlobalManagedZonesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsGlobalManagedZonesRequest,
  output: PatchProjectsLocationsGlobalManagedZonesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsConnectionsRequest {
  /** Required. Resource name of the form: `projects/* /locations/* /connections/*` */
  name: string;
  /** Specifies which fields of the Connection are returned in the response. Defaults to `BASIC` view. */
  view?: "CONNECTION_VIEW_UNSPECIFIED" | "BASIC" | "FULL" | (string & {});
}

export const GetProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsConnectionsRequest>;

export type GetProjectsLocationsConnectionsResponse = Connection;
export const GetProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Connection;

export type GetProjectsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single Connection. */
export const getProjectsLocationsConnections: API.OperationMethod<
  GetProjectsLocationsConnectionsRequest,
  GetProjectsLocationsConnectionsResponse,
  GetProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsConnectionsRequest,
  output: GetProjectsLocationsConnectionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsConnectionsRequest {
  /** Required. Parent resource of the Connection, of the form: `projects/* /locations/*` */
  parent: string;
  /** Required. Identifier to assign to the Connection. Must be unique within scope of the parent resource. */
  connectionId?: string;
  /** Request body */
  body?: Connection;
}

export const CreateProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    connectionId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("connectionId"),
    ),
    body: Schema.optional(Connection).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/connections", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsConnectionsRequest>;

export type CreateProjectsLocationsConnectionsResponse = Operation;
export const CreateProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new Connection in a given project and location. */
export const createProjectsLocationsConnections: API.OperationMethod<
  CreateProjectsLocationsConnectionsRequest,
  CreateProjectsLocationsConnectionsResponse,
  CreateProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsConnectionsRequest,
  output: CreateProjectsLocationsConnectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsConnectionsRequest {
  /** Optional. If set to true, any child EndUserAuthentication/EventSubscription resources will also be deleted. Otherwise, the request will fail if the connection has any children. Followed the best practice from https://aip.dev/135#cascading-delete */
  force?: boolean;
  /** Required. Resource name of the form: `projects/* /locations/* /connections/*` */
  name: string;
}

export const DeleteProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsConnectionsRequest>;

export type DeleteProjectsLocationsConnectionsResponse = Operation;
export const DeleteProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single Connection. */
export const deleteProjectsLocationsConnections: API.OperationMethod<
  DeleteProjectsLocationsConnectionsRequest,
  DeleteProjectsLocationsConnectionsResponse,
  DeleteProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsConnectionsRequest,
  output: DeleteProjectsLocationsConnectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GenerateToolspecOverrideProjectsLocationsConnectionsRequest {
  /** Required. Resource name format: projects/{project}/locations/{location}/connections/{connection} */
  name: string;
  /** Request body */
  body?: GenerateConnectionToolspecOverrideRequest;
}

export const GenerateToolspecOverrideProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GenerateConnectionToolspecOverrideRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+name}:generateToolspecOverride",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GenerateToolspecOverrideProjectsLocationsConnectionsRequest>;

export type GenerateToolspecOverrideProjectsLocationsConnectionsResponse =
  GenerateConnectionToolspecOverrideResponse;
export const GenerateToolspecOverrideProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GenerateConnectionToolspecOverrideResponse;

export type GenerateToolspecOverrideProjectsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Generates Toolspec Override for a connection for the given list of entityTypes and operations. Returns results from the db if the entityType and operation are already present. */
export const generateToolspecOverrideProjectsLocationsConnections: API.OperationMethod<
  GenerateToolspecOverrideProjectsLocationsConnectionsRequest,
  GenerateToolspecOverrideProjectsLocationsConnectionsResponse,
  GenerateToolspecOverrideProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GenerateToolspecOverrideProjectsLocationsConnectionsRequest,
  output: GenerateToolspecOverrideProjectsLocationsConnectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface FetchToolspecOverrideProjectsLocationsConnectionsRequest {
  /** Required. Resource name format: projects/{project}/locations/{location}/connections/{connection} */
  name: string;
  /** Request body */
  body?: FetchConnectionToolspecOverrideRequest;
}

export const FetchToolspecOverrideProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(FetchConnectionToolspecOverrideRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+name}:fetchToolspecOverride",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<FetchToolspecOverrideProjectsLocationsConnectionsRequest>;

export type FetchToolspecOverrideProjectsLocationsConnectionsResponse =
  FetchConnectionToolspecOverrideResponse;
export const FetchToolspecOverrideProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ FetchConnectionToolspecOverrideResponse;

export type FetchToolspecOverrideProjectsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Fetches Toolspec Override for a connection for the given list of tools. Returns results from the db if the tool is already present. */
export const fetchToolspecOverrideProjectsLocationsConnections: API.OperationMethod<
  FetchToolspecOverrideProjectsLocationsConnectionsRequest,
  FetchToolspecOverrideProjectsLocationsConnectionsResponse,
  FetchToolspecOverrideProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: FetchToolspecOverrideProjectsLocationsConnectionsRequest,
  output: FetchToolspecOverrideProjectsLocationsConnectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ModifyToolspecOverrideProjectsLocationsConnectionsRequest {
  /** Required. Resource name format: projects/{project}/locations/{location}/connections/{connection} */
  name: string;
  /** Request body */
  body?: ModifyConnectionToolspecOverrideRequest;
}

export const ModifyToolspecOverrideProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ModifyConnectionToolspecOverrideRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+name}:modifyToolspecOverride",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ModifyToolspecOverrideProjectsLocationsConnectionsRequest>;

export type ModifyToolspecOverrideProjectsLocationsConnectionsResponse =
  ModifyConnectionToolspecOverrideResponse;
export const ModifyToolspecOverrideProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ModifyConnectionToolspecOverrideResponse;

export type ModifyToolspecOverrideProjectsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates Toolspec Override for a connection with the admin provided descriptions. */
export const modifyToolspecOverrideProjectsLocationsConnections: API.OperationMethod<
  ModifyToolspecOverrideProjectsLocationsConnectionsRequest,
  ModifyToolspecOverrideProjectsLocationsConnectionsResponse,
  ModifyToolspecOverrideProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ModifyToolspecOverrideProjectsLocationsConnectionsRequest,
  output: ModifyToolspecOverrideProjectsLocationsConnectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsConnectionsRequest {
  /** Filter. */
  filter?: string;
  /** Order by parameters. */
  orderBy?: string;
  /** Specifies which fields of the Connection are returned in the response. Defaults to `BASIC` view. */
  view?: "CONNECTION_VIEW_UNSPECIFIED" | "BASIC" | "FULL" | (string & {});
  /** Required. Parent resource of the Connection, of the form: `projects/* /locations/*` */
  parent: string;
  /** Page token. */
  pageToken?: string;
  /** Page size. */
  pageSize?: number;
}

export const ListProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/connections" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsConnectionsRequest>;

export type ListProjectsLocationsConnectionsResponse = ListConnectionsResponse;
export const ListProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListConnectionsResponse;

export type ListProjectsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Connections in a given project and location. */
export const listProjectsLocationsConnections: API.PaginatedOperationMethod<
  ListProjectsLocationsConnectionsRequest,
  ListProjectsLocationsConnectionsResponse,
  ListProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsConnectionsRequest,
  output: ListProjectsLocationsConnectionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface SetIamPolicyProjectsLocationsConnectionsRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsConnectionsRequest =
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
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsConnectionsRequest>;

export type SetIamPolicyProjectsLocationsConnectionsResponse = Policy;
export const SetIamPolicyProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsConnections: API.OperationMethod<
  SetIamPolicyProjectsLocationsConnectionsRequest,
  SetIamPolicyProjectsLocationsConnectionsResponse,
  SetIamPolicyProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsConnectionsRequest,
  output: SetIamPolicyProjectsLocationsConnectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsConnectionsRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsConnectionsRequest>;

export type GetIamPolicyProjectsLocationsConnectionsResponse = Policy;
export const GetIamPolicyProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsConnections: API.OperationMethod<
  GetIamPolicyProjectsLocationsConnectionsRequest,
  GetIamPolicyProjectsLocationsConnectionsResponse,
  GetIamPolicyProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsConnectionsRequest,
  output: GetIamPolicyProjectsLocationsConnectionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface SearchProjectsLocationsConnectionsRequest {
  /** Optional. The number of top matching connectors to return */
  pageSize?: number;
  /** Required. The query against which the search needs to be done. */
  query?: string;
  /** Optional. page_token */
  pageToken?: string;
  /** Required. Parent resource of the Connection, of the form: `projects/* /locations/* /connections` */
  name: string;
}

export const SearchProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    query: Schema.optional(Schema.String).pipe(T.HttpQuery("query")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:search" }),
    svc,
  ) as unknown as Schema.Schema<SearchProjectsLocationsConnectionsRequest>;

export type SearchProjectsLocationsConnectionsResponse =
  SearchConnectionsResponse;
export const SearchProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SearchConnectionsResponse;

export type SearchProjectsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns Top matching Connections for a given query. */
export const searchProjectsLocationsConnections: API.PaginatedOperationMethod<
  SearchProjectsLocationsConnectionsRequest,
  SearchProjectsLocationsConnectionsResponse,
  SearchProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: SearchProjectsLocationsConnectionsRequest,
  output: SearchProjectsLocationsConnectionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetConnectionSchemaMetadataProjectsLocationsConnectionsRequest {
  /** Required. Connection name Format: projects/{project}/locations/{location}/connections/{connection}/connectionSchemaMetadata */
  name: string;
}

export const GetConnectionSchemaMetadataProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetConnectionSchemaMetadataProjectsLocationsConnectionsRequest>;

export type GetConnectionSchemaMetadataProjectsLocationsConnectionsResponse =
  ConnectionSchemaMetadata;
export const GetConnectionSchemaMetadataProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ConnectionSchemaMetadata;

export type GetConnectionSchemaMetadataProjectsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets schema metadata of a connection. SchemaMetadata is a singleton resource for each connection. */
export const getConnectionSchemaMetadataProjectsLocationsConnections: API.OperationMethod<
  GetConnectionSchemaMetadataProjectsLocationsConnectionsRequest,
  GetConnectionSchemaMetadataProjectsLocationsConnectionsResponse,
  GetConnectionSchemaMetadataProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetConnectionSchemaMetadataProjectsLocationsConnectionsRequest,
  output: GetConnectionSchemaMetadataProjectsLocationsConnectionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface RemoveToolspecOverrideProjectsLocationsConnectionsRequest {
  /** Required. Resource name format: projects/{project}/locations/{location}/connections/{connection} */
  name: string;
  /** Request body */
  body?: RemoveConnectionToolspecOverrideRequest;
}

export const RemoveToolspecOverrideProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(RemoveConnectionToolspecOverrideRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+name}:removeToolspecOverride",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RemoveToolspecOverrideProjectsLocationsConnectionsRequest>;

export type RemoveToolspecOverrideProjectsLocationsConnectionsResponse = Empty;
export const RemoveToolspecOverrideProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type RemoveToolspecOverrideProjectsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes all Toolspec Override for a connection. */
export const removeToolspecOverrideProjectsLocationsConnections: API.OperationMethod<
  RemoveToolspecOverrideProjectsLocationsConnectionsRequest,
  RemoveToolspecOverrideProjectsLocationsConnectionsResponse,
  RemoveToolspecOverrideProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RemoveToolspecOverrideProjectsLocationsConnectionsRequest,
  output: RemoveToolspecOverrideProjectsLocationsConnectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListenEventProjectsLocationsConnectionsRequest {
  /** Required. Resource path for request. */
  resourcePath: string;
  /** Request body */
  body?: ListenEventRequest;
}

export const ListenEventProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourcePath: Schema.String.pipe(T.HttpPath("resourcePath")),
    body: Schema.optional(ListenEventRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resourcePath}:listenEvent",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ListenEventProjectsLocationsConnectionsRequest>;

export type ListenEventProjectsLocationsConnectionsResponse =
  ListenEventResponse;
export const ListenEventProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListenEventResponse;

export type ListenEventProjectsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** ListenEvent listens to the event. */
export const listenEventProjectsLocationsConnections: API.OperationMethod<
  ListenEventProjectsLocationsConnectionsRequest,
  ListenEventProjectsLocationsConnectionsResponse,
  ListenEventProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListenEventProjectsLocationsConnectionsRequest,
  output: ListenEventProjectsLocationsConnectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RepairEventingProjectsLocationsConnectionsRequest {
  /** Required. Resource name of the form: `projects/* /locations/* /connections/*` */
  name: string;
  /** Request body */
  body?: RepairEventingRequest;
}

export const RepairEventingProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(RepairEventingRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+name}:repairEventing",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RepairEventingProjectsLocationsConnectionsRequest>;

export type RepairEventingProjectsLocationsConnectionsResponse = Operation;
export const RepairEventingProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type RepairEventingProjectsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** RepaiEventing tries to repair eventing related event subscriptions. */
export const repairEventingProjectsLocationsConnections: API.OperationMethod<
  RepairEventingProjectsLocationsConnectionsRequest,
  RepairEventingProjectsLocationsConnectionsResponse,
  RepairEventingProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RepairEventingProjectsLocationsConnectionsRequest,
  output: RepairEventingProjectsLocationsConnectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsLocationsConnectionsRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsConnectionsRequest =
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
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsConnectionsRequest>;

export type TestIamPermissionsProjectsLocationsConnectionsResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsConnections: API.OperationMethod<
  TestIamPermissionsProjectsLocationsConnectionsRequest,
  TestIamPermissionsProjectsLocationsConnectionsResponse,
  TestIamPermissionsProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsConnectionsRequest,
  output: TestIamPermissionsProjectsLocationsConnectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsConnectionsRequest {
  /** Output only. Resource name of the Connection. Format: projects/{project}/locations/{location}/connections/{connection} */
  name: string;
  /** Required. The list of fields to update. Fields are specified relative to the connection. A field will be overwritten if it is in the mask. The field mask must not be empty, and it must not contain fields that are immutable or only set by the server. You can modify only the fields listed below. To lock/unlock a connection: * `lock_config` To suspend/resume a connection: * `suspended` To update the connection details: * `description` * `labels` * `connector_version` * `config_variables` * `auth_config` * `destination_configs` * `node_config` * `log_config` * `ssl_config` * `eventing_enablement_type` * `eventing_config` * `auth_override_enabled` * `async_operations_enabled` */
  updateMask?: string;
  /** Request body */
  body?: Connection;
}

export const PatchProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Connection).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsConnectionsRequest>;

export type PatchProjectsLocationsConnectionsResponse = Operation;
export const PatchProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single Connection. */
export const patchProjectsLocationsConnections: API.OperationMethod<
  PatchProjectsLocationsConnectionsRequest,
  PatchProjectsLocationsConnectionsResponse,
  PatchProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsConnectionsRequest,
  output: PatchProjectsLocationsConnectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsConnectionsRuntimeActionSchemasRequest {
  /** Page size. */
  pageSize?: number;
  /** Required. Parent resource of RuntimeActionSchema Format: projects/{project}/locations/{location}/connections/{connection} */
  parent: string;
  /** Optional. Flag to indicate if schema should be returned as string or not */
  schemaAsString?: boolean;
  /** Page token. */
  pageToken?: string;
  /** Required. Filter Format: action="{actionId}" Only action field is supported with literal equality operator. Accepted filter example: action="CancelOrder" Wildcards are not supported in the filter currently. */
  filter?: string;
}

export const ListProjectsLocationsConnectionsRuntimeActionSchemasRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    schemaAsString: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("schemaAsString"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/runtimeActionSchemas" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsConnectionsRuntimeActionSchemasRequest>;

export type ListProjectsLocationsConnectionsRuntimeActionSchemasResponse =
  ListRuntimeActionSchemasResponse;
export const ListProjectsLocationsConnectionsRuntimeActionSchemasResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListRuntimeActionSchemasResponse;

export type ListProjectsLocationsConnectionsRuntimeActionSchemasError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List schema of a runtime actions filtered by action name. */
export const listProjectsLocationsConnectionsRuntimeActionSchemas: API.PaginatedOperationMethod<
  ListProjectsLocationsConnectionsRuntimeActionSchemasRequest,
  ListProjectsLocationsConnectionsRuntimeActionSchemasResponse,
  ListProjectsLocationsConnectionsRuntimeActionSchemasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsConnectionsRuntimeActionSchemasRequest,
  output: ListProjectsLocationsConnectionsRuntimeActionSchemasResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsConnectionsEndUserAuthenticationsRequest {
  /** Required. Identifier. Resource name of the EndUserAuthentication. Format: projects/{project}/locations/{location}/connections/{connection}/endUserAuthentications/{end_user_authentication} */
  name: string;
  /** Required. The list of fields to update. A field will be overwritten if it is in the mask. You can modify only the fields listed below. To update the EndUserAuthentication details: * `notify_endpoint_destination` */
  updateMask?: string;
  /** Request body */
  body?: EndUserAuthentication;
}

export const PatchProjectsLocationsConnectionsEndUserAuthenticationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(EndUserAuthentication).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsConnectionsEndUserAuthenticationsRequest>;

export type PatchProjectsLocationsConnectionsEndUserAuthenticationsResponse =
  Operation;
export const PatchProjectsLocationsConnectionsEndUserAuthenticationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsConnectionsEndUserAuthenticationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single EndUserAuthentication. */
export const patchProjectsLocationsConnectionsEndUserAuthentications: API.OperationMethod<
  PatchProjectsLocationsConnectionsEndUserAuthenticationsRequest,
  PatchProjectsLocationsConnectionsEndUserAuthenticationsResponse,
  PatchProjectsLocationsConnectionsEndUserAuthenticationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsConnectionsEndUserAuthenticationsRequest,
  output: PatchProjectsLocationsConnectionsEndUserAuthenticationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsConnectionsEndUserAuthenticationsRequest {
  /** Required. Resource name of the form: `projects/* /locations/* /connections/* /EndUserAuthentications/*` */
  name: string;
  /** Optional. View of the EndUserAuthentication to return. */
  view?:
    | "END_USER_AUTHENTICATION_VIEW_UNSPECIFIED"
    | "BASIC_VIEW"
    | "FULL_VIEW"
    | (string & {});
}

export const GetProjectsLocationsConnectionsEndUserAuthenticationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsConnectionsEndUserAuthenticationsRequest>;

export type GetProjectsLocationsConnectionsEndUserAuthenticationsResponse =
  EndUserAuthentication;
export const GetProjectsLocationsConnectionsEndUserAuthenticationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ EndUserAuthentication;

export type GetProjectsLocationsConnectionsEndUserAuthenticationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single EndUserAuthentication. */
export const getProjectsLocationsConnectionsEndUserAuthentications: API.OperationMethod<
  GetProjectsLocationsConnectionsEndUserAuthenticationsRequest,
  GetProjectsLocationsConnectionsEndUserAuthenticationsResponse,
  GetProjectsLocationsConnectionsEndUserAuthenticationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsConnectionsEndUserAuthenticationsRequest,
  output: GetProjectsLocationsConnectionsEndUserAuthenticationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsConnectionsEndUserAuthenticationsRequest {
  /** Required. Identifier to assign to the EndUserAuthentication. Must be unique within scope of the parent resource. */
  endUserAuthenticationId?: string;
  /** Required. Parent resource of the EndUserAuthentication, of the form: `projects/* /locations/* /connections/*` */
  parent: string;
  /** Request body */
  body?: EndUserAuthentication;
}

export const CreateProjectsLocationsConnectionsEndUserAuthenticationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endUserAuthenticationId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("endUserAuthenticationId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(EndUserAuthentication).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/endUserAuthentications",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsConnectionsEndUserAuthenticationsRequest>;

export type CreateProjectsLocationsConnectionsEndUserAuthenticationsResponse =
  Operation;
export const CreateProjectsLocationsConnectionsEndUserAuthenticationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsConnectionsEndUserAuthenticationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new EndUserAuthentication in a given project,location and connection. */
export const createProjectsLocationsConnectionsEndUserAuthentications: API.OperationMethod<
  CreateProjectsLocationsConnectionsEndUserAuthenticationsRequest,
  CreateProjectsLocationsConnectionsEndUserAuthenticationsResponse,
  CreateProjectsLocationsConnectionsEndUserAuthenticationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsConnectionsEndUserAuthenticationsRequest,
  output: CreateProjectsLocationsConnectionsEndUserAuthenticationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsConnectionsEndUserAuthenticationsRequest {
  /** Filter. */
  filter?: string;
  /** Order by parameters. */
  orderBy?: string;
  /** Page token. */
  pageToken?: string;
  /** Required. Parent resource of the EndUserAuthentication, of the form: `projects/* /locations/* /connections/*` */
  parent: string;
  /** Page size. */
  pageSize?: number;
}

export const ListProjectsLocationsConnectionsEndUserAuthenticationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/endUserAuthentications" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsConnectionsEndUserAuthenticationsRequest>;

export type ListProjectsLocationsConnectionsEndUserAuthenticationsResponse =
  ListEndUserAuthenticationsResponse;
export const ListProjectsLocationsConnectionsEndUserAuthenticationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListEndUserAuthenticationsResponse;

export type ListProjectsLocationsConnectionsEndUserAuthenticationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List EndUserAuthentications in a given project,location and connection. */
export const listProjectsLocationsConnectionsEndUserAuthentications: API.PaginatedOperationMethod<
  ListProjectsLocationsConnectionsEndUserAuthenticationsRequest,
  ListProjectsLocationsConnectionsEndUserAuthenticationsResponse,
  ListProjectsLocationsConnectionsEndUserAuthenticationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsConnectionsEndUserAuthenticationsRequest,
  output: ListProjectsLocationsConnectionsEndUserAuthenticationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsConnectionsEndUserAuthenticationsRequest {
  /** Required. Resource name of the form: `projects/* /locations/* /connections/* /endUserAuthentication/*` */
  name: string;
}

export const DeleteProjectsLocationsConnectionsEndUserAuthenticationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsConnectionsEndUserAuthenticationsRequest>;

export type DeleteProjectsLocationsConnectionsEndUserAuthenticationsResponse =
  Operation;
export const DeleteProjectsLocationsConnectionsEndUserAuthenticationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsConnectionsEndUserAuthenticationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single EndUserAuthentication. */
export const deleteProjectsLocationsConnectionsEndUserAuthentications: API.OperationMethod<
  DeleteProjectsLocationsConnectionsEndUserAuthenticationsRequest,
  DeleteProjectsLocationsConnectionsEndUserAuthenticationsResponse,
  DeleteProjectsLocationsConnectionsEndUserAuthenticationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsConnectionsEndUserAuthenticationsRequest,
  output: DeleteProjectsLocationsConnectionsEndUserAuthenticationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListEntityTypesProjectsLocationsConnectionsConnectionSchemaMetadataRequest {
  /** Page size. If unspecified, at most 50 entity types will be returned. */
  pageSize?: number;
  /** Required. Filter Wildcards are not supported in the filter currently. */
  filter?: string;
  /** Specifies which fields are returned in response. Defaults to BASIC view. */
  view?: "VIEW_UNSPECIFIED" | "BASIC" | (string & {});
  /** Page token. */
  pageToken?: string;
  /** Required. Resource name format: projects/{project}/locations/{location}/connections/{connection}/connectionSchemaMetadata */
  name: string;
}

export const ListEntityTypesProjectsLocationsConnectionsConnectionSchemaMetadataRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:listEntityTypes" }),
    svc,
  ) as unknown as Schema.Schema<ListEntityTypesProjectsLocationsConnectionsConnectionSchemaMetadataRequest>;

export type ListEntityTypesProjectsLocationsConnectionsConnectionSchemaMetadataResponse =
  ListEntityTypesResponse;
export const ListEntityTypesProjectsLocationsConnectionsConnectionSchemaMetadataResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListEntityTypesResponse;

export type ListEntityTypesProjectsLocationsConnectionsConnectionSchemaMetadataError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List entity types. */
export const listEntityTypesProjectsLocationsConnectionsConnectionSchemaMetadata: API.PaginatedOperationMethod<
  ListEntityTypesProjectsLocationsConnectionsConnectionSchemaMetadataRequest,
  ListEntityTypesProjectsLocationsConnectionsConnectionSchemaMetadataResponse,
  ListEntityTypesProjectsLocationsConnectionsConnectionSchemaMetadataError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input:
    ListEntityTypesProjectsLocationsConnectionsConnectionSchemaMetadataRequest,
  output:
    ListEntityTypesProjectsLocationsConnectionsConnectionSchemaMetadataResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListActionsProjectsLocationsConnectionsConnectionSchemaMetadataRequest {
  /** Required. Resource name format. projects/{project}/locations/{location}/connections/{connection}/connectionSchemaMetadata */
  name: string;
  /** Page token. */
  pageToken?: string;
  /** Required. Filter Wildcards are not supported in the filter currently. */
  filter?: string;
  /** Specifies which fields are returned in response. Defaults to BASIC view. */
  view?: "VIEW_UNSPECIFIED" | "BASIC" | (string & {});
  /** Page size. If unspecified, at most 50 actions will be returned. */
  pageSize?: number;
}

export const ListActionsProjectsLocationsConnectionsConnectionSchemaMetadataRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:listActions" }),
    svc,
  ) as unknown as Schema.Schema<ListActionsProjectsLocationsConnectionsConnectionSchemaMetadataRequest>;

export type ListActionsProjectsLocationsConnectionsConnectionSchemaMetadataResponse =
  ListActionsResponse;
export const ListActionsProjectsLocationsConnectionsConnectionSchemaMetadataResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListActionsResponse;

export type ListActionsProjectsLocationsConnectionsConnectionSchemaMetadataError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List actions. */
export const listActionsProjectsLocationsConnectionsConnectionSchemaMetadata: API.PaginatedOperationMethod<
  ListActionsProjectsLocationsConnectionsConnectionSchemaMetadataRequest,
  ListActionsProjectsLocationsConnectionsConnectionSchemaMetadataResponse,
  ListActionsProjectsLocationsConnectionsConnectionSchemaMetadataError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListActionsProjectsLocationsConnectionsConnectionSchemaMetadataRequest,
  output:
    ListActionsProjectsLocationsConnectionsConnectionSchemaMetadataResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetEntityTypeProjectsLocationsConnectionsConnectionSchemaMetadataRequest {
  /** Required. Id of the entity type. */
  entityId?: string;
  /** Required. Resource name format: projects/{project}/locations/{location}/connections/{connection}/connectionSchemaMetadata */
  name: string;
}

export const GetEntityTypeProjectsLocationsConnectionsConnectionSchemaMetadataRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityId: Schema.optional(Schema.String).pipe(T.HttpQuery("entityId")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:getEntityType" }),
    svc,
  ) as unknown as Schema.Schema<GetEntityTypeProjectsLocationsConnectionsConnectionSchemaMetadataRequest>;

export type GetEntityTypeProjectsLocationsConnectionsConnectionSchemaMetadataResponse =
  Operation;
export const GetEntityTypeProjectsLocationsConnectionsConnectionSchemaMetadataResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type GetEntityTypeProjectsLocationsConnectionsConnectionSchemaMetadataError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get entity type. */
export const getEntityTypeProjectsLocationsConnectionsConnectionSchemaMetadata: API.OperationMethod<
  GetEntityTypeProjectsLocationsConnectionsConnectionSchemaMetadataRequest,
  GetEntityTypeProjectsLocationsConnectionsConnectionSchemaMetadataResponse,
  GetEntityTypeProjectsLocationsConnectionsConnectionSchemaMetadataError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    GetEntityTypeProjectsLocationsConnectionsConnectionSchemaMetadataRequest,
  output:
    GetEntityTypeProjectsLocationsConnectionsConnectionSchemaMetadataResponse,
  errors: [NotFound, Forbidden],
}));

export interface RefreshProjectsLocationsConnectionsConnectionSchemaMetadataRequest {
  /** Required. Resource name. Format: projects/{project}/locations/{location}/connections/{connection}/connectionSchemaMetadata */
  name: string;
  /** Request body */
  body?: RefreshConnectionSchemaMetadataRequest;
}

export const RefreshProjectsLocationsConnectionsConnectionSchemaMetadataRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(RefreshConnectionSchemaMetadataRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:refresh", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<RefreshProjectsLocationsConnectionsConnectionSchemaMetadataRequest>;

export type RefreshProjectsLocationsConnectionsConnectionSchemaMetadataResponse =
  Operation;
export const RefreshProjectsLocationsConnectionsConnectionSchemaMetadataResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type RefreshProjectsLocationsConnectionsConnectionSchemaMetadataError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Refresh runtime schema of a connection. */
export const refreshProjectsLocationsConnectionsConnectionSchemaMetadata: API.OperationMethod<
  RefreshProjectsLocationsConnectionsConnectionSchemaMetadataRequest,
  RefreshProjectsLocationsConnectionsConnectionSchemaMetadataResponse,
  RefreshProjectsLocationsConnectionsConnectionSchemaMetadataError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RefreshProjectsLocationsConnectionsConnectionSchemaMetadataRequest,
  output: RefreshProjectsLocationsConnectionsConnectionSchemaMetadataResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetActionProjectsLocationsConnectionsConnectionSchemaMetadataRequest {
  /** Required. Resource name format: projects/{project}/locations/{location}/connections/{connection}/connectionSchemaMetadata */
  name: string;
  /** Required. Id of the action. */
  actionId?: string;
}

export const GetActionProjectsLocationsConnectionsConnectionSchemaMetadataRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    actionId: Schema.optional(Schema.String).pipe(T.HttpQuery("actionId")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:getAction" }),
    svc,
  ) as unknown as Schema.Schema<GetActionProjectsLocationsConnectionsConnectionSchemaMetadataRequest>;

export type GetActionProjectsLocationsConnectionsConnectionSchemaMetadataResponse =
  Operation;
export const GetActionProjectsLocationsConnectionsConnectionSchemaMetadataResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type GetActionProjectsLocationsConnectionsConnectionSchemaMetadataError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get action. */
export const getActionProjectsLocationsConnectionsConnectionSchemaMetadata: API.OperationMethod<
  GetActionProjectsLocationsConnectionsConnectionSchemaMetadataRequest,
  GetActionProjectsLocationsConnectionsConnectionSchemaMetadataResponse,
  GetActionProjectsLocationsConnectionsConnectionSchemaMetadataError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetActionProjectsLocationsConnectionsConnectionSchemaMetadataRequest,
  output: GetActionProjectsLocationsConnectionsConnectionSchemaMetadataResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsConnectionsEventSubscriptionsRequest {
  /** Required. Identifier. Resource name of the EventSubscription. Format: projects/{project}/locations/{location}/connections/{connection}/eventSubscriptions/{event_subscription} */
  name: string;
  /** Required. The list of fields to update. Fields are specified relative to the Subscription. A field will be overwritten if it is in the mask. You can modify only the fields listed below. To update the EventSubscription details: * `serviceAccount` */
  updateMask?: string;
  /** Request body */
  body?: EventSubscription;
}

export const PatchProjectsLocationsConnectionsEventSubscriptionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(EventSubscription).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsConnectionsEventSubscriptionsRequest>;

export type PatchProjectsLocationsConnectionsEventSubscriptionsResponse =
  Operation;
export const PatchProjectsLocationsConnectionsEventSubscriptionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsConnectionsEventSubscriptionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single EventSubscription. */
export const patchProjectsLocationsConnectionsEventSubscriptions: API.OperationMethod<
  PatchProjectsLocationsConnectionsEventSubscriptionsRequest,
  PatchProjectsLocationsConnectionsEventSubscriptionsResponse,
  PatchProjectsLocationsConnectionsEventSubscriptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsConnectionsEventSubscriptionsRequest,
  output: PatchProjectsLocationsConnectionsEventSubscriptionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsConnectionsEventSubscriptionsRequest {
  /** Filter. */
  filter?: string;
  /** Order by parameters. */
  orderBy?: string;
  /** Page token. */
  pageToken?: string;
  /** Required. Parent resource of the EventSubscription, of the form: `projects/* /locations/* /connections/*` */
  parent: string;
  /** Page size. */
  pageSize?: number;
}

export const ListProjectsLocationsConnectionsEventSubscriptionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/eventSubscriptions" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsConnectionsEventSubscriptionsRequest>;

export type ListProjectsLocationsConnectionsEventSubscriptionsResponse =
  ListEventSubscriptionsResponse;
export const ListProjectsLocationsConnectionsEventSubscriptionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListEventSubscriptionsResponse;

export type ListProjectsLocationsConnectionsEventSubscriptionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List EventSubscriptions in a given project,location and connection. */
export const listProjectsLocationsConnectionsEventSubscriptions: API.PaginatedOperationMethod<
  ListProjectsLocationsConnectionsEventSubscriptionsRequest,
  ListProjectsLocationsConnectionsEventSubscriptionsResponse,
  ListProjectsLocationsConnectionsEventSubscriptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsConnectionsEventSubscriptionsRequest,
  output: ListProjectsLocationsConnectionsEventSubscriptionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsConnectionsEventSubscriptionsRequest {
  /** Required. Resource name of the form: `projects/* /locations/* /connections/* /eventsubscriptions/*` */
  name: string;
}

export const DeleteProjectsLocationsConnectionsEventSubscriptionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsConnectionsEventSubscriptionsRequest>;

export type DeleteProjectsLocationsConnectionsEventSubscriptionsResponse =
  Operation;
export const DeleteProjectsLocationsConnectionsEventSubscriptionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsConnectionsEventSubscriptionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single EventSubscription. */
export const deleteProjectsLocationsConnectionsEventSubscriptions: API.OperationMethod<
  DeleteProjectsLocationsConnectionsEventSubscriptionsRequest,
  DeleteProjectsLocationsConnectionsEventSubscriptionsResponse,
  DeleteProjectsLocationsConnectionsEventSubscriptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsConnectionsEventSubscriptionsRequest,
  output: DeleteProjectsLocationsConnectionsEventSubscriptionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsConnectionsEventSubscriptionsRequest {
  /** Required. Identifier to assign to the Event Subscription. Must be unique within scope of the parent resource. */
  eventSubscriptionId?: string;
  /** Required. Parent resource of the EventSubscription, of the form: `projects/* /locations/* /connections/*` */
  parent: string;
  /** Request body */
  body?: EventSubscription;
}

export const CreateProjectsLocationsConnectionsEventSubscriptionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eventSubscriptionId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("eventSubscriptionId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(EventSubscription).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/eventSubscriptions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsConnectionsEventSubscriptionsRequest>;

export type CreateProjectsLocationsConnectionsEventSubscriptionsResponse =
  Operation;
export const CreateProjectsLocationsConnectionsEventSubscriptionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsConnectionsEventSubscriptionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new EventSubscription in a given project,location and connection. */
export const createProjectsLocationsConnectionsEventSubscriptions: API.OperationMethod<
  CreateProjectsLocationsConnectionsEventSubscriptionsRequest,
  CreateProjectsLocationsConnectionsEventSubscriptionsResponse,
  CreateProjectsLocationsConnectionsEventSubscriptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsConnectionsEventSubscriptionsRequest,
  output: CreateProjectsLocationsConnectionsEventSubscriptionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RetryProjectsLocationsConnectionsEventSubscriptionsRequest {
  /** Required. Resource name of the form: `projects/* /locations/* /connections/* /eventSubscriptions/*` */
  name: string;
  /** Request body */
  body?: RetryEventSubscriptionRequest;
}

export const RetryProjectsLocationsConnectionsEventSubscriptionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(RetryEventSubscriptionRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:retry", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<RetryProjectsLocationsConnectionsEventSubscriptionsRequest>;

export type RetryProjectsLocationsConnectionsEventSubscriptionsResponse =
  Operation;
export const RetryProjectsLocationsConnectionsEventSubscriptionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type RetryProjectsLocationsConnectionsEventSubscriptionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** RetryEventSubscription retries the registration of Subscription. */
export const retryProjectsLocationsConnectionsEventSubscriptions: API.OperationMethod<
  RetryProjectsLocationsConnectionsEventSubscriptionsRequest,
  RetryProjectsLocationsConnectionsEventSubscriptionsResponse,
  RetryProjectsLocationsConnectionsEventSubscriptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RetryProjectsLocationsConnectionsEventSubscriptionsRequest,
  output: RetryProjectsLocationsConnectionsEventSubscriptionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsConnectionsEventSubscriptionsRequest {
  /** Required. Resource name of the form: `projects/* /locations/* /connections/* /eventSubscriptions/*` */
  name: string;
}

export const GetProjectsLocationsConnectionsEventSubscriptionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsConnectionsEventSubscriptionsRequest>;

export type GetProjectsLocationsConnectionsEventSubscriptionsResponse =
  EventSubscription;
export const GetProjectsLocationsConnectionsEventSubscriptionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ EventSubscription;

export type GetProjectsLocationsConnectionsEventSubscriptionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single EventSubscription. */
export const getProjectsLocationsConnectionsEventSubscriptions: API.OperationMethod<
  GetProjectsLocationsConnectionsEventSubscriptionsRequest,
  GetProjectsLocationsConnectionsEventSubscriptionsResponse,
  GetProjectsLocationsConnectionsEventSubscriptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsConnectionsEventSubscriptionsRequest,
  output: GetProjectsLocationsConnectionsEventSubscriptionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsConnectionsRuntimeEntitySchemasRequest {
  /** Page size. */
  pageSize?: number;
  /** Required. Filter Format: entity="{entityId}" Only entity field is supported with literal equality operator. Accepted filter example: entity="Order" Wildcards are not supported in the filter currently. */
  filter?: string;
  /** Page token. */
  pageToken?: string;
  /** Required. Parent resource of RuntimeEntitySchema Format: projects/{project}/locations/{location}/connections/{connection} */
  parent: string;
}

export const ListProjectsLocationsConnectionsRuntimeEntitySchemasRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/runtimeEntitySchemas" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsConnectionsRuntimeEntitySchemasRequest>;

export type ListProjectsLocationsConnectionsRuntimeEntitySchemasResponse =
  ListRuntimeEntitySchemasResponse;
export const ListProjectsLocationsConnectionsRuntimeEntitySchemasResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListRuntimeEntitySchemasResponse;

export type ListProjectsLocationsConnectionsRuntimeEntitySchemasError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List schema of a runtime entities filtered by entity name. */
export const listProjectsLocationsConnectionsRuntimeEntitySchemas: API.PaginatedOperationMethod<
  ListProjectsLocationsConnectionsRuntimeEntitySchemasRequest,
  ListProjectsLocationsConnectionsRuntimeEntitySchemasResponse,
  ListProjectsLocationsConnectionsRuntimeEntitySchemasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsConnectionsRuntimeEntitySchemasRequest,
  output: ListProjectsLocationsConnectionsRuntimeEntitySchemasResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsEndpointAttachmentsRequest {
  /** Output only. Resource name of the Endpoint Attachment. Format: projects/{project}/locations/{location}/endpointAttachments/{endpoint_attachment} */
  name: string;
  /** Required. The list of fields to update. Fields are specified relative to the endpointAttachment. A field will be overwritten if it is in the mask. You can modify only the fields listed below. To update the endpointAttachment details: * `description` * `labels` */
  updateMask?: string;
  /** Request body */
  body?: EndpointAttachment;
}

export const PatchProjectsLocationsEndpointAttachmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(EndpointAttachment).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsEndpointAttachmentsRequest>;

export type PatchProjectsLocationsEndpointAttachmentsResponse = Operation;
export const PatchProjectsLocationsEndpointAttachmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsEndpointAttachmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single EndpointAttachment. */
export const patchProjectsLocationsEndpointAttachments: API.OperationMethod<
  PatchProjectsLocationsEndpointAttachmentsRequest,
  PatchProjectsLocationsEndpointAttachmentsResponse,
  PatchProjectsLocationsEndpointAttachmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsEndpointAttachmentsRequest,
  output: PatchProjectsLocationsEndpointAttachmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsEndpointAttachmentsRequest {
  /** Required. Resource name of the form: `projects/* /locations/* /endpointAttachments/*` */
  name: string;
  /** Optional. Specifies which fields of the EndpointAttachment are returned in the response. Defaults to `ENDPOINT_ATTACHMENT_VIEW_BASIC` view. */
  view?:
    | "ENDPOINT_ATTACHMENT_VIEW_UNSPECIFIED"
    | "ENDPOINT_ATTACHMENT_VIEW_BASIC"
    | "ENDPOINT_ATTACHMENT_VIEW_FULL"
    | (string & {});
}

export const GetProjectsLocationsEndpointAttachmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsEndpointAttachmentsRequest>;

export type GetProjectsLocationsEndpointAttachmentsResponse =
  EndpointAttachment;
export const GetProjectsLocationsEndpointAttachmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ EndpointAttachment;

export type GetProjectsLocationsEndpointAttachmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single EndpointAttachment. */
export const getProjectsLocationsEndpointAttachments: API.OperationMethod<
  GetProjectsLocationsEndpointAttachmentsRequest,
  GetProjectsLocationsEndpointAttachmentsResponse,
  GetProjectsLocationsEndpointAttachmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsEndpointAttachmentsRequest,
  output: GetProjectsLocationsEndpointAttachmentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsEndpointAttachmentsRequest {
  /** Page size. */
  pageSize?: number;
  /** Filter. */
  filter?: string;
  /** Order by parameters. */
  orderBy?: string;
  /** Optional. Specifies which fields of the EndpointAttachment are returned in the response. Defaults to `ENDPOINT_ATTACHMENT_VIEW_BASIC` view. */
  view?:
    | "ENDPOINT_ATTACHMENT_VIEW_UNSPECIFIED"
    | "ENDPOINT_ATTACHMENT_VIEW_BASIC"
    | "ENDPOINT_ATTACHMENT_VIEW_FULL"
    | (string & {});
  /** Page token. */
  pageToken?: string;
  /** Required. Parent resource od the EndpointAttachment, of the form: `projects/* /locations/*` */
  parent: string;
}

export const ListProjectsLocationsEndpointAttachmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/endpointAttachments" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsEndpointAttachmentsRequest>;

export type ListProjectsLocationsEndpointAttachmentsResponse =
  ListEndpointAttachmentsResponse;
export const ListProjectsLocationsEndpointAttachmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListEndpointAttachmentsResponse;

export type ListProjectsLocationsEndpointAttachmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List EndpointAttachments in a given project */
export const listProjectsLocationsEndpointAttachments: API.PaginatedOperationMethod<
  ListProjectsLocationsEndpointAttachmentsRequest,
  ListProjectsLocationsEndpointAttachmentsResponse,
  ListProjectsLocationsEndpointAttachmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsEndpointAttachmentsRequest,
  output: ListProjectsLocationsEndpointAttachmentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsEndpointAttachmentsRequest {
  /** Required. Resource name of the form: `projects/* /locations/* /endpointAttachments/*` */
  name: string;
}

export const DeleteProjectsLocationsEndpointAttachmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsEndpointAttachmentsRequest>;

export type DeleteProjectsLocationsEndpointAttachmentsResponse = Operation;
export const DeleteProjectsLocationsEndpointAttachmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsEndpointAttachmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single EndpointAttachment. */
export const deleteProjectsLocationsEndpointAttachments: API.OperationMethod<
  DeleteProjectsLocationsEndpointAttachmentsRequest,
  DeleteProjectsLocationsEndpointAttachmentsResponse,
  DeleteProjectsLocationsEndpointAttachmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsEndpointAttachmentsRequest,
  output: DeleteProjectsLocationsEndpointAttachmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsEndpointAttachmentsRequest {
  /** Required. Identifier to assign to the EndpointAttachment. Must be unique within scope of the parent resource. The regex is: `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`. */
  endpointAttachmentId?: string;
  /** Required. Parent resource of the EndpointAttachment, of the form: `projects/* /locations/*` */
  parent: string;
  /** Request body */
  body?: EndpointAttachment;
}

export const CreateProjectsLocationsEndpointAttachmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endpointAttachmentId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("endpointAttachmentId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(EndpointAttachment).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/endpointAttachments",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsEndpointAttachmentsRequest>;

export type CreateProjectsLocationsEndpointAttachmentsResponse = Operation;
export const CreateProjectsLocationsEndpointAttachmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsEndpointAttachmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new EndpointAttachment in a given project and location. */
export const createProjectsLocationsEndpointAttachments: API.OperationMethod<
  CreateProjectsLocationsEndpointAttachmentsRequest,
  CreateProjectsLocationsEndpointAttachmentsResponse,
  CreateProjectsLocationsEndpointAttachmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsEndpointAttachmentsRequest,
  output: CreateProjectsLocationsEndpointAttachmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
