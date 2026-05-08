// ==========================================================================
// Workload Manager API (workloadmanager v1)
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
  name: "workloadmanager",
  version: "v1",
  rootUrl: "https://workloadmanager.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface SqlLocationDetails {
  /** Required. network name */
  network?: string;
  /** Required. Internet Access */
  internetAccess?:
    | "INTERNET_ACCESS_UNSPECIFIED"
    | "ALLOW_EXTERNAL_IP"
    | "CONFIGURE_NAT"
    | (string & {});
  /** Required. the project that infrastructure deployed, currently only supports the same project where the deployment resource exists. */
  gcpProjectId?: string;
  /** Optional. create a new DNS Zone when the field is empty, Only show for `Using an existing DNS` List of existing DNS Zones tf variable name: existing_dns_zone_name */
  dnsZone?: string;
  /** Required. region name */
  region?: string;
  /** Required. primary zone */
  primaryZone?: string;
  /** Optional. secondary zone can't be same as primary_zone and is only for High Availability deployment mode */
  secondaryZone?: string;
  /** Required. subnetwork name */
  subnetwork?: string;
  /** Optional. teriary zone can't be same as primary_zone and secondary zone, and it is only for High Availability deployment mode */
  tertiaryZone?: string;
}

export const SqlLocationDetails: Schema.Schema<SqlLocationDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    network: Schema.optional(Schema.String),
    internetAccess: Schema.optional(Schema.String),
    gcpProjectId: Schema.optional(Schema.String),
    dnsZone: Schema.optional(Schema.String),
    region: Schema.optional(Schema.String),
    primaryZone: Schema.optional(Schema.String),
    secondaryZone: Schema.optional(Schema.String),
    subnetwork: Schema.optional(Schema.String),
    tertiaryZone: Schema.optional(Schema.String),
  }).annotate({ identifier: "SqlLocationDetails" });

export interface UpcomingMaintenanceEvent {
  /** Optional. End time */
  endTime?: string;
  /** Optional. Maintenance status */
  maintenanceStatus?: string;
  /** Optional. Instance maintenance behavior. Could be `MIGRATE` or `TERMINATE`. */
  onHostMaintenance?: string;
  /** Optional. Start time */
  startTime?: string;
  /** Optional. Type */
  type?: string;
}

export const UpcomingMaintenanceEvent: Schema.Schema<UpcomingMaintenanceEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endTime: Schema.optional(Schema.String),
    maintenanceStatus: Schema.optional(Schema.String),
    onHostMaintenance: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "UpcomingMaintenanceEvent" });

export interface IAMPermission {
  /** Output only. The name of the permission. */
  name?: string;
  /** Output only. Whether the permission is granted. */
  granted?: boolean;
}

export const IAMPermission: Schema.Schema<IAMPermission> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    granted: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "IAMPermission" });

export interface ServiceStates {
  /** Output only. The overall state of the service. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CONFIG_FAILURE"
    | "IAM_FAILURE"
    | "FUNCTIONALITY_FAILURE"
    | "ENABLED"
    | "DISABLED"
    | (string & {});
  /** Optional. Output only. The IAM permissions for the service. */
  iamPermissions?: ReadonlyArray<IAMPermission>;
}

export const ServiceStates: Schema.Schema<ServiceStates> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    iamPermissions: Schema.optional(Schema.Array(IAMPermission)),
  }).annotate({ identifier: "ServiceStates" });

export interface AgentStates {
  /** Optional. The Process metrics of the agent. */
  processMetrics?: ServiceStates;
  /** Optional. Whether the agent is fully enabled. If false, the agent is has some issues. */
  isFullyEnabled?: boolean;
  /** Optional. HANA monitoring metrics of the agent. */
  hanaMonitoring?: ServiceStates;
  /** Optional. The installed version of the agent on the host. */
  installedVersion?: string;
  /** Optional. The available version of the agent in artifact registry. */
  availableVersion?: string;
  /** Optional. The System discovery metrics of the agent. */
  systemDiscovery?: ServiceStates;
}

export const AgentStates: Schema.Schema<AgentStates> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    processMetrics: Schema.optional(ServiceStates),
    isFullyEnabled: Schema.optional(Schema.Boolean),
    hanaMonitoring: Schema.optional(ServiceStates),
    installedVersion: Schema.optional(Schema.String),
    availableVersion: Schema.optional(Schema.String),
    systemDiscovery: Schema.optional(ServiceStates),
  }).annotate({ identifier: "AgentStates" });

export interface SapInstanceProperties {
  /** Optional. SAP Instance numbers. They are from '00' to '99'. */
  numbers?: ReadonlyArray<string>;
  /** Optional. Sap Instance Agent status. */
  agentStates?: AgentStates;
}

export const SapInstanceProperties: Schema.Schema<SapInstanceProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    numbers: Schema.optional(Schema.Array(Schema.String)),
    agentStates: Schema.optional(AgentStates),
  }).annotate({ identifier: "SapInstanceProperties" });

export interface InstanceProperties {
  /** Optional. Instance machine type. */
  machineType?: string;
  /** Optional. the next maintenance event on VM */
  upcomingMaintenanceEvent?: UpcomingMaintenanceEvent;
  /** Optional. SAP Instance properties. */
  sapInstanceProperties?: SapInstanceProperties;
  /** Optional. Instance status. */
  status?: string;
  /** Optional. Instance number. */
  instanceNumber?: string;
  /** Optional. Instance roles. */
  roles?: ReadonlyArray<
    | "INSTANCE_ROLE_UNSPECIFIED"
    | "INSTANCE_ROLE_ASCS"
    | "INSTANCE_ROLE_ERS"
    | "INSTANCE_ROLE_APP_SERVER"
    | "INSTANCE_ROLE_HANA_PRIMARY"
    | "INSTANCE_ROLE_HANA_SECONDARY"
    | (string & {})
  >;
}

export const InstanceProperties: Schema.Schema<InstanceProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    machineType: Schema.optional(Schema.String),
    upcomingMaintenanceEvent: Schema.optional(UpcomingMaintenanceEvent),
    sapInstanceProperties: Schema.optional(SapInstanceProperties),
    status: Schema.optional(Schema.String),
    instanceNumber: Schema.optional(Schema.String),
    roles: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "InstanceProperties" });

export interface CloudResource {
  /** Output only. All instance properties. */
  instanceProperties?: InstanceProperties;
  /** Output only. */
  kind?:
    | "RESOURCE_KIND_UNSPECIFIED"
    | "RESOURCE_KIND_INSTANCE"
    | "RESOURCE_KIND_DISK"
    | "RESOURCE_KIND_ADDRESS"
    | "RESOURCE_KIND_FILESTORE"
    | "RESOURCE_KIND_HEALTH_CHECK"
    | "RESOURCE_KIND_FORWARDING_RULE"
    | "RESOURCE_KIND_BACKEND_SERVICE"
    | "RESOURCE_KIND_SUBNETWORK"
    | "RESOURCE_KIND_NETWORK"
    | "RESOURCE_KIND_PUBLIC_ADDRESS"
    | "RESOURCE_KIND_INSTANCE_GROUP"
    | (string & {});
  /** Output only. resource name Example: compute.googleapis.com/projects/wlm-obs-dev/zones/us-central1-a/instances/sap-pri */
  name?: string;
}

export const CloudResource: Schema.Schema<CloudResource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instanceProperties: Schema.optional(InstanceProperties),
    kind: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "CloudResource" });

export interface HealthCheck {
  /** Output only. The state of the health check. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PASSED"
    | "FAILED"
    | "DEGRADED"
    | "SKIPPED"
    | "UNSUPPORTED"
    | (string & {});
  /** Output only. The resource the check performs on. */
  resource?: CloudResource;
  /** Output only. The health check source metric name. */
  metric?: string;
  /** Output only. The message of the health check. */
  message?: string;
  /** Output only. The source of the health check. */
  source?: string;
}

export const HealthCheck: Schema.Schema<HealthCheck> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    resource: Schema.optional(CloudResource),
    metric: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    source: Schema.optional(Schema.String),
  }).annotate({ identifier: "HealthCheck" });

export interface ComponentHealth {
  /** Output only. The health state of the component. */
  state?:
    | "HEALTH_STATE_UNSPECIFIED"
    | "HEALTHY"
    | "UNHEALTHY"
    | "CRITICAL"
    | "UNSUPPORTED"
    | (string & {});
  /** The detailed health checks of the component. */
  componentHealthChecks?: ReadonlyArray<HealthCheck>;
  /** Sub component health. */
  subComponentsHealth?: ReadonlyArray<ComponentHealth>;
  /** The component of a workload. */
  component?: string;
  /** Output only. The type of the component health. */
  componentHealthType?:
    | "TYPE_UNSPECIFIED"
    | "TYPE_REQUIRED"
    | "TYPE_OPTIONAL"
    | "TYPE_SPECIAL"
    | (string & {});
}

export const ComponentHealth: Schema.Schema<ComponentHealth> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      state: Schema.optional(Schema.String),
      componentHealthChecks: Schema.optional(Schema.Array(HealthCheck)),
      subComponentsHealth: Schema.optional(Schema.Array(ComponentHealth)),
      component: Schema.optional(Schema.String),
      componentHealthType: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "ComponentHealth",
  }) as any as Schema.Schema<ComponentHealth>;

export interface WorkloadProfileHealth {
  /** Output only. The health state of the workload. */
  state?:
    | "HEALTH_STATE_UNSPECIFIED"
    | "HEALTHY"
    | "UNHEALTHY"
    | "CRITICAL"
    | "UNSUPPORTED"
    | (string & {});
  /** The detailed condition reports of each component. */
  componentsHealth?: ReadonlyArray<ComponentHealth>;
  /** The time when the health check was performed. */
  checkTime?: string;
}

export const WorkloadProfileHealth: Schema.Schema<WorkloadProfileHealth> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    componentsHealth: Schema.optional(Schema.Array(ComponentHealth)),
    checkTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "WorkloadProfileHealth" });

export interface RuleExecutionResult {
  /** Number of violations. */
  resultCount?: string;
  /** Execution message, if any. */
  message?: string;
  /** Number of total scanned resources. */
  scannedResourceCount?: string;
  /** Rule name as plain text like `sap-hana-configured`. */
  rule?: string;
  /** Output only. The execution status. */
  state?:
    | "STATE_UNSPECIFIED"
    | "STATE_SUCCESS"
    | "STATE_FAILURE"
    | "STATE_SKIPPED"
    | (string & {});
}

export const RuleExecutionResult: Schema.Schema<RuleExecutionResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resultCount: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    scannedResourceCount: Schema.optional(Schema.String),
    rule: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "RuleExecutionResult" });

export interface ExternalDataSources {
  /** Required. Type of external data source. */
  type?: "TYPE_UNSPECIFIED" | "BIG_QUERY_TABLE" | (string & {});
  /** Optional. Name of external data source. The name will be used inside the rego/sql to refer the external data. */
  name?: string;
  /** Required. URI of external data source. example of bq table {project_ID}.{dataset_ID}.{table_ID}. */
  uri?: string;
  /** Required. The asset type of the external data source. This can be a supported Cloud Asset Inventory asset type (see https://cloud.google.com/asset-inventory/docs/supported-asset-types) to override the default asset type, or it can be a custom type defined by the user. */
  assetType?: string;
}

export const ExternalDataSources: Schema.Schema<ExternalDataSources> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    assetType: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExternalDataSources" });

export interface Notice {
  /** Output only. Message of the notice. */
  message?: string;
}

export const Notice: Schema.Schema<Notice> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "Notice" });

export interface Summary {
  /** Output only. Number of new failures compared to the previous execution. */
  newFailures?: string;
  /** Output only. Number of failures. */
  failures?: string;
  /** Output only. Number of new fixes compared to the previous execution. */
  newFixes?: string;
}

export const Summary: Schema.Schema<Summary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    newFailures: Schema.optional(Schema.String),
    failures: Schema.optional(Schema.String),
    newFixes: Schema.optional(Schema.String),
  }).annotate({ identifier: "Summary" });

export interface Execution {
  /** Output only. [Output only] Evaluation ID. */
  evaluationId?: string;
  /** Output only. Execution result summary per rule. */
  ruleResults?: ReadonlyArray<RuleExecutionResult>;
  /** Output only. [Output only] State. */
  state?:
    | "STATE_UNSPECIFIED"
    | "RUNNING"
    | "SUCCEEDED"
    | "FAILED"
    | (string & {});
  /** Output only. [Output only] Inventory time stamp. */
  inventoryTime?: string;
  /** Output only. [Output only] Start time stamp. */
  startTime?: string;
  /** Type which represents whether the execution executed directly by user or scheduled according to the `Evaluation.schedule` field. */
  runType?: "TYPE_UNSPECIFIED" | "ONE_TIME" | "SCHEDULED" | (string & {});
  /** Optional. External data sources. */
  externalDataSources?: ReadonlyArray<ExternalDataSources>;
  /** Labels as key value pairs. */
  labels?: Record<string, string>;
  /** The name of execution resource. The format is projects/{project}/locations/{location}/evaluations/{evaluation}/executions/{execution}. */
  name?: string;
  /** Output only. [Output only] End time stamp. */
  endTime?: string;
  /** Optional. Engine. */
  engine?: "ENGINE_UNSPECIFIED" | "ENGINE_SCANNER" | "V2" | (string & {});
  /** Output only. Additional information generated by the execution. */
  notices?: ReadonlyArray<Notice>;
  /** Output only. [Output only] Result summary for the execution. */
  resultSummary?: Summary;
}

export const Execution: Schema.Schema<Execution> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    evaluationId: Schema.optional(Schema.String),
    ruleResults: Schema.optional(Schema.Array(RuleExecutionResult)),
    state: Schema.optional(Schema.String),
    inventoryTime: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    runType: Schema.optional(Schema.String),
    externalDataSources: Schema.optional(Schema.Array(ExternalDataSources)),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    engine: Schema.optional(Schema.String),
    notices: Schema.optional(Schema.Array(Notice)),
    resultSummary: Schema.optional(Summary),
  }).annotate({ identifier: "Execution" });

export interface BackupProperties {
  /** The time when the latest backup was performed. */
  latestBackupTime?: string;
  /** Output only. The state of the latest backup. */
  latestBackupStatus?:
    | "BACKUP_STATE_UNSPECIFIED"
    | "BACKUP_STATE_SUCCESS"
    | "BACKUP_STATE_FAILURE"
    | (string & {});
}

export const BackupProperties: Schema.Schema<BackupProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latestBackupTime: Schema.optional(Schema.String),
    latestBackupStatus: Schema.optional(Schema.String),
  }).annotate({ identifier: "BackupProperties" });

export interface DatabaseProperties {
  /** Output only. Backup properties. */
  backupProperties?: BackupProperties;
  /** Output only. Type of the database. `HANA`, `DB2`, etc. */
  databaseType?:
    | "DATABASE_TYPE_UNSPECIFIED"
    | "HANA"
    | "MAX_DB"
    | "DB2"
    | "ORACLE"
    | "SQLSERVER"
    | "ASE"
    | (string & {});
}

export const DatabaseProperties: Schema.Schema<DatabaseProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    backupProperties: Schema.optional(BackupProperties),
    databaseType: Schema.optional(Schema.String),
  }).annotate({ identifier: "DatabaseProperties" });

export interface SapComponent {
  /** The detected topology of the component. */
  topologyType?:
    | "TOPOLOGY_TYPE_UNSPECIFIED"
    | "TOPOLOGY_SCALE_UP"
    | "TOPOLOGY_SCALE_OUT"
    | (string & {});
  /** Output only. sid is the sap component identificator */
  sid?: string;
  /** Output only. resources in the component */
  resources?: ReadonlyArray<CloudResource>;
  /** Output only. All instance properties. */
  databaseProperties?: DatabaseProperties;
  /** List of host URIs that are part of the HA configuration if present. An empty list indicates the component is not configured for HA. */
  haHosts?: ReadonlyArray<string>;
}

export const SapComponent: Schema.Schema<SapComponent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    topologyType: Schema.optional(Schema.String),
    sid: Schema.optional(Schema.String),
    resources: Schema.optional(Schema.Array(CloudResource)),
    databaseProperties: Schema.optional(DatabaseProperties),
    haHosts: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "SapComponent" });

export interface Product {
  /** Optional. Version of the product. */
  version?: string;
  /** Optional. Name of the product. */
  name?: string;
}

export const Product: Schema.Schema<Product> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Product" });

export interface SapWorkload {
  /** Output only. The metadata for SAP workload. */
  metadata?: Record<string, string>;
  /** Output only. database component */
  database?: SapComponent;
  /** Output only. application component */
  application?: SapComponent;
  /** Output only. The products on this workload. */
  products?: ReadonlyArray<Product>;
  /** Output only. The architecture. */
  architecture?:
    | "ARCHITECTURE_UNSPECIFIED"
    | "INVALID"
    | "CENTRALIZED"
    | "DISTRIBUTED"
    | "DISTRIBUTED_HA"
    | "STANDALONE_DATABASE"
    | "STANDALONE_DATABASE_HA"
    | (string & {});
}

export const SapWorkload: Schema.Schema<SapWorkload> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    database: Schema.optional(SapComponent),
    application: Schema.optional(SapComponent),
    products: Schema.optional(Schema.Array(Product)),
    architecture: Schema.optional(Schema.String),
  }).annotate({ identifier: "SapWorkload" });

export interface WorkloadProfile {
  /** The sap workload content */
  sapWorkload?: SapWorkload;
  /** Required. time when the workload data was refreshed */
  refreshedTime?: string;
  /** Optional. such as name, description, version. More example can be found in deployment */
  labels?: Record<string, string>;
  /** Required. The type of the workload */
  workloadType?: "WORKLOAD_TYPE_UNSPECIFIED" | "S4_HANA" | (string & {});
  /** Identifier. name of resource names have the form 'projects/{project_id}/locations/{location}/workloadProfiles/{workload_id}' */
  name?: string;
}

export const WorkloadProfile: Schema.Schema<WorkloadProfile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sapWorkload: Schema.optional(SapWorkload),
    refreshedTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    workloadType: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "WorkloadProfile" });

export interface TorsoValidation {
  /** Required. project_id lists the human readable cloud project that the data comes from. */
  projectId?: string;
  /** Optional. instance_name lists the human readable name of the instance that the data comes from. */
  instanceName?: string;
  /** Required. validation_details contains the pairs of validation data: field name & field value. */
  validationDetails?: Record<string, string>;
  /** Required. agent_version lists the version of the agent that collected this data. */
  agentVersion?: string;
  /** Required. workload_type specifies the type of torso workload. */
  workloadType?:
    | "WORKLOAD_TYPE_UNSPECIFIED"
    | "MYSQL"
    | "ORACLE"
    | "REDIS"
    | (string & {});
}

export const TorsoValidation: Schema.Schema<TorsoValidation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.optional(Schema.String),
    instanceName: Schema.optional(Schema.String),
    validationDetails: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    agentVersion: Schema.optional(Schema.String),
    workloadType: Schema.optional(Schema.String),
  }).annotate({ identifier: "TorsoValidation" });

export interface AgentStatusConfigValue {
  /** Output only. Whether the configuration value is the default value or overridden. */
  isDefault?: boolean;
  /** Output only. The name of the configuration value. */
  name?: string;
  /** Output only. The value of the configuration value. */
  value?: string;
}

export const AgentStatusConfigValue: Schema.Schema<AgentStatusConfigValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isDefault: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "AgentStatusConfigValue" });

export interface AgentStatusIAMPermission {
  /** Output only. The name of the permission. */
  name?: string;
  /** Output only. Whether the permission is granted. */
  granted?:
    | "UNSPECIFIED_STATE"
    | "SUCCESS_STATE"
    | "FAILURE_STATE"
    | "ERROR_STATE"
    | (string & {});
}

export const AgentStatusIAMPermission: Schema.Schema<AgentStatusIAMPermission> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    granted: Schema.optional(Schema.String),
  }).annotate({ identifier: "AgentStatusIAMPermission" });

export interface AgentStatusServiceStatus {
  /** Output only. The name of the service. */
  name?: string;
  /** Output only. The error message for the service if it is not fully functional. */
  errorMessage?: string;
  /** Output only. The configuration values for the service. */
  configValues?: ReadonlyArray<AgentStatusConfigValue>;
  /** Output only. The message to display when the service state is unspecified. */
  unspecifiedStateMessage?: string;
  /** Output only. Whether the service is fully functional (all checks passed). */
  fullyFunctional?:
    | "UNSPECIFIED_STATE"
    | "SUCCESS_STATE"
    | "FAILURE_STATE"
    | "ERROR_STATE"
    | (string & {});
  /** Output only. The state of the service (enabled or disabled in the configuration). */
  state?:
    | "UNSPECIFIED_STATE"
    | "SUCCESS_STATE"
    | "FAILURE_STATE"
    | "ERROR_STATE"
    | (string & {});
  /** Output only. The permissions required for the service. */
  iamPermissions?: ReadonlyArray<AgentStatusIAMPermission>;
}

export const AgentStatusServiceStatus: Schema.Schema<AgentStatusServiceStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    errorMessage: Schema.optional(Schema.String),
    configValues: Schema.optional(Schema.Array(AgentStatusConfigValue)),
    unspecifiedStateMessage: Schema.optional(Schema.String),
    fullyFunctional: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    iamPermissions: Schema.optional(Schema.Array(AgentStatusIAMPermission)),
  }).annotate({ identifier: "AgentStatusServiceStatus" });

export interface TerraformVariable {
  /** Optional. Input variable value. */
  inputValue?: unknown;
}

export const TerraformVariable: Schema.Schema<TerraformVariable> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inputValue: Schema.optional(Schema.Unknown),
  }).annotate({ identifier: "TerraformVariable" });

export interface AgentCommand {
  /** The name of the agent one-time executable that will be invoked. */
  command?: string;
  /** A map of key/value pairs that can be used to specify additional one-time executable settings. */
  parameters?: Record<string, string>;
}

export const AgentCommand: Schema.Schema<AgentCommand> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    command: Schema.optional(Schema.String),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "AgentCommand" });

export interface ShellCommand {
  /** Arguments to be passed to the command. */
  args?: string;
  /** Optional. If not specified, the default timeout is 60 seconds. */
  timeoutSeconds?: number;
  /** The name of the command to be executed. */
  command?: string;
}

export const ShellCommand: Schema.Schema<ShellCommand> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    args: Schema.optional(Schema.String),
    timeoutSeconds: Schema.optional(Schema.Number),
    command: Schema.optional(Schema.String),
  }).annotate({ identifier: "ShellCommand" });

export interface Command {
  /** AgentCommand specifies a one-time executable program for the agent to run. */
  agentCommand?: AgentCommand;
  /** ShellCommand is invoked via the agent's command line executor. */
  shellCommand?: ShellCommand;
}

export const Command: Schema.Schema<Command> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agentCommand: Schema.optional(AgentCommand),
    shellCommand: Schema.optional(ShellCommand),
  }).annotate({ identifier: "Command" });

export interface RuleOutput {
  /** Output only. Violation details generated by rule. */
  details?: Record<string, string>;
  /** Output only. The message generated by rule. */
  message?: string;
}

export const RuleOutput: Schema.Schema<RuleOutput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    details: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "RuleOutput" });

export interface ViolationDetails {
  /** The service account associated with the resource. */
  serviceAccount?: string;
  /** The name of the asset. */
  asset?: string;
  /** Details of the violation. */
  observed?: Record<string, string>;
  /** Output only. The rule output of the violation. */
  ruleOutput?: ReadonlyArray<RuleOutput>;
}

export const ViolationDetails: Schema.Schema<ViolationDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceAccount: Schema.optional(Schema.String),
    asset: Schema.optional(Schema.String),
    observed: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    ruleOutput: Schema.optional(Schema.Array(RuleOutput)),
  }).annotate({ identifier: "ViolationDetails" });

export interface Resource {
  /** The name of the resource. */
  name?: string;
  /** The service account associated with the resource. */
  serviceAccount?: string;
  /** The type of resource. */
  type?: string;
}

export const Resource: Schema.Schema<Resource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    serviceAccount: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "Resource" });

export interface ExecutionResult {
  /** The rule that is violated in an evaluation. */
  rule?: string;
  /** The URL for the documentation of the rule. */
  documentationUrl?: string;
  /** The commands to remediate the violation. */
  commands?: ReadonlyArray<Command>;
  /** Execution result type of the scanned resource. */
  type?: "TYPE_UNSPECIFIED" | "TYPE_PASSED" | "TYPE_VIOLATED" | (string & {});
  /** The details of violation in an evaluation result. */
  violationDetails?: ViolationDetails;
  /** The resource that violates the rule. */
  resource?: Resource;
  /** The violation message of an execution. */
  violationMessage?: string;
  /** The severity of violation. */
  severity?: string;
}

export const ExecutionResult: Schema.Schema<ExecutionResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rule: Schema.optional(Schema.String),
    documentationUrl: Schema.optional(Schema.String),
    commands: Schema.optional(Schema.Array(Command)),
    type: Schema.optional(Schema.String),
    violationDetails: Schema.optional(ViolationDetails),
    resource: Schema.optional(Resource),
    violationMessage: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExecutionResult" });

export interface Rule {
  /** Output only. The version of the rule. */
  revisionId?: string;
  /** The CAI asset type of the rule is evaluating, for joined asset types, it will be the corresponding primary asset types. */
  assetType?: string;
  /** The document url for the rule. */
  uri?: string;
  /** The remediation for the rule. */
  remediation?: string;
  /** The severity of the rule. */
  severity?: string;
  /** Rule name. */
  name?: string;
  /** The type of the rule. */
  ruleType?: "RULE_TYPE_UNSPECIFIED" | "BASELINE" | "CUSTOM" | (string & {});
  /** List of user-defined tags. */
  tags?: ReadonlyArray<string>;
  /** The primary category. */
  primaryCategory?: string;
  /** Describe rule in plain language. */
  description?: string;
  /** The name display in UI. */
  displayName?: string;
  /** The secondary category. */
  secondaryCategory?: string;
  /** The message template for rule. */
  errorMessage?: string;
}

export const Rule: Schema.Schema<Rule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    revisionId: Schema.optional(Schema.String),
    assetType: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    remediation: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    ruleType: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Array(Schema.String)),
    primaryCategory: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    secondaryCategory: Schema.optional(Schema.String),
    errorMessage: Schema.optional(Schema.String),
  }).annotate({ identifier: "Rule" });

export interface SapDiscoveryMetadata {
  /** Optional. This SAP product name */
  sapProduct?: string;
  /** Optional. Customer region string for customer's use. Does not represent GCP region. */
  customerRegion?: string;
  /** Optional. Should be "prod", "QA", "dev", "staging", etc. */
  environmentType?: string;
  /** Optional. Customer defined, something like "E-commerce pre prod" */
  definedSystem?: string;
}

export const SapDiscoveryMetadata: Schema.Schema<SapDiscoveryMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sapProduct: Schema.optional(Schema.String),
    customerRegion: Schema.optional(Schema.String),
    environmentType: Schema.optional(Schema.String),
    definedSystem: Schema.optional(Schema.String),
  }).annotate({ identifier: "SapDiscoveryMetadata" });

export interface SapDiscoveryComponentApplicationProperties {
  /** Optional. Resource URI of the recognized ASCS host of the application. */
  ascsUri?: string;
  /** Optional. Resource URI of the recognized shared NFS of the application. May be empty if the application server has only a single node. */
  nfsUri?: string;
  /** Optional. Instance number of the SAP application instance. */
  appInstanceNumber?: string;
  /** Required. Type of the application. Netweaver, etc. */
  applicationType?:
    | "APPLICATION_TYPE_UNSPECIFIED"
    | "NETWEAVER"
    | "NETWEAVER_ABAP"
    | "NETWEAVER_JAVA"
    | (string & {});
  /** Optional. Deprecated: ApplicationType now tells you whether this is ABAP or Java. */
  abap?: boolean;
  /** Optional. Instance number of the ERS instance. */
  ersInstanceNumber?: string;
  /** Optional. Instance number of the ASCS instance. */
  ascsInstanceNumber?: string;
  /** Optional. Kernel version for Netweaver running in the system. */
  kernelVersion?: string;
}

export const SapDiscoveryComponentApplicationProperties: Schema.Schema<SapDiscoveryComponentApplicationProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ascsUri: Schema.optional(Schema.String),
    nfsUri: Schema.optional(Schema.String),
    appInstanceNumber: Schema.optional(Schema.String),
    applicationType: Schema.optional(Schema.String),
    abap: Schema.optional(Schema.Boolean),
    ersInstanceNumber: Schema.optional(Schema.String),
    ascsInstanceNumber: Schema.optional(Schema.String),
    kernelVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "SapDiscoveryComponentApplicationProperties" });

export interface SapDiscoveryComponentDatabaseProperties {
  /** Required. URI of the recognized primary instance of the database. */
  primaryInstanceUri?: string;
  /** Required. Type of the database. HANA, DB2, etc. */
  databaseType?:
    | "DATABASE_TYPE_UNSPECIFIED"
    | "HANA"
    | "MAX_DB"
    | "DB2"
    | "ORACLE"
    | "SQLSERVER"
    | "ASE"
    | (string & {});
  /** Optional. SID of the system database. */
  databaseSid?: string;
  /** Optional. Instance number of the SAP instance. */
  instanceNumber?: string;
  /** Optional. The version of the database software running in the system. */
  databaseVersion?: string;
  /** Optional. Landscape ID from the HANA nameserver. */
  landscapeId?: string;
  /** Optional. URI of the recognized shared NFS of the database. May be empty if the database has only a single node. */
  sharedNfsUri?: string;
}

export const SapDiscoveryComponentDatabaseProperties: Schema.Schema<SapDiscoveryComponentDatabaseProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    primaryInstanceUri: Schema.optional(Schema.String),
    databaseType: Schema.optional(Schema.String),
    databaseSid: Schema.optional(Schema.String),
    instanceNumber: Schema.optional(Schema.String),
    databaseVersion: Schema.optional(Schema.String),
    landscapeId: Schema.optional(Schema.String),
    sharedNfsUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "SapDiscoveryComponentDatabaseProperties" });

export interface SapDiscoveryResourceInstancePropertiesAppInstance {
  /** Optional. Instance name of the SAP application instance. */
  name?: string;
  /** Optional. Instance number of the SAP application instance. */
  number?: string;
}

export const SapDiscoveryResourceInstancePropertiesAppInstance: Schema.Schema<SapDiscoveryResourceInstancePropertiesAppInstance> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    number: Schema.optional(Schema.String),
  }).annotate({
    identifier: "SapDiscoveryResourceInstancePropertiesAppInstance",
  });

export interface SapDiscoveryResourceInstancePropertiesDiskMount {
  /** Optional. Name of the disk. */
  name?: string;
  /** Optional. Filesystem mount point. */
  mountPoint?: string;
  /** Optional. Names of the disks providing this mount point. */
  diskNames?: ReadonlyArray<string>;
}

export const SapDiscoveryResourceInstancePropertiesDiskMount: Schema.Schema<SapDiscoveryResourceInstancePropertiesDiskMount> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    mountPoint: Schema.optional(Schema.String),
    diskNames: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "SapDiscoveryResourceInstancePropertiesDiskMount",
  });

export interface SapDiscoveryResourceInstancePropertiesKernelVersionVersion {
  /** Optional. The major version number. */
  major?: number;
  /** Optional. The minor version number. */
  minor?: number;
  /** Optional. The build version number. */
  build?: number;
  /** Optional. A catch-all for any unparsed version components. This is in case the number of points in the version string exceeds the expected count of 4. */
  remainder?: string;
  /** Optional. The patch version number. */
  patch?: number;
}

export const SapDiscoveryResourceInstancePropertiesKernelVersionVersion: Schema.Schema<SapDiscoveryResourceInstancePropertiesKernelVersionVersion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    major: Schema.optional(Schema.Number),
    minor: Schema.optional(Schema.Number),
    build: Schema.optional(Schema.Number),
    remainder: Schema.optional(Schema.String),
    patch: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "SapDiscoveryResourceInstancePropertiesKernelVersionVersion",
  });

export interface SapDiscoveryResourceInstancePropertiesKernelVersion {
  /** Optional. Captures the distro-specific kernel version, the portion of the string following the first dash. */
  distroKernel?: SapDiscoveryResourceInstancePropertiesKernelVersionVersion;
  /** Optional. Raw string of the kernel version. */
  rawString?: string;
  /** Optional. Captures the OS-specific kernel version, the portion of the string up to the first dash. */
  osKernel?: SapDiscoveryResourceInstancePropertiesKernelVersionVersion;
}

export const SapDiscoveryResourceInstancePropertiesKernelVersion: Schema.Schema<SapDiscoveryResourceInstancePropertiesKernelVersion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    distroKernel: Schema.optional(
      SapDiscoveryResourceInstancePropertiesKernelVersionVersion,
    ),
    rawString: Schema.optional(Schema.String),
    osKernel: Schema.optional(
      SapDiscoveryResourceInstancePropertiesKernelVersionVersion,
    ),
  }).annotate({
    identifier: "SapDiscoveryResourceInstancePropertiesKernelVersion",
  });

export interface SapDiscoveryResourceInstanceProperties {
  /** Optional. A virtual hostname of the instance if it has one. */
  virtualHostname?: string;
  /** Optional. The VM's instance number. */
  instanceNumber?: string;
  /** Optional. App server instances on the host */
  appInstances?: ReadonlyArray<SapDiscoveryResourceInstancePropertiesAppInstance>;
  /** Optional. Bitmask of instance role, a resource may have multiple roles at once. */
  instanceRole?:
    | "INSTANCE_ROLE_UNSPECIFIED"
    | "INSTANCE_ROLE_ASCS"
    | "INSTANCE_ROLE_ERS"
    | "INSTANCE_ROLE_APP_SERVER"
    | "INSTANCE_ROLE_DATABASE"
    | "INSTANCE_ROLE_ASCS_ERS"
    | "INSTANCE_ROLE_ASCS_APP_SERVER"
    | "INSTANCE_ROLE_ASCS_DATABASE"
    | "INSTANCE_ROLE_ERS_APP_SERVER"
    | "INSTANCE_ROLE_ERS_DATABASE"
    | "INSTANCE_ROLE_APP_SERVER_DATABASE"
    | "INSTANCE_ROLE_ASCS_ERS_APP_SERVER"
    | "INSTANCE_ROLE_ASCS_ERS_DATABASE"
    | "INSTANCE_ROLE_ASCS_APP_SERVER_DATABASE"
    | "INSTANCE_ROLE_ERS_APP_SERVER_DATABASE"
    | "INSTANCE_ROLE_ASCS_ERS_APP_SERVER_DATABASE"
    | (string & {});
  /** Optional. A list of instance URIs that are part of a cluster with this one. */
  clusterInstances?: ReadonlyArray<string>;
  /** Optional. Disk mounts on the instance. */
  diskMounts?: ReadonlyArray<SapDiscoveryResourceInstancePropertiesDiskMount>;
  /** Optional. The kernel version of the instance. */
  osKernelVersion?: SapDiscoveryResourceInstancePropertiesKernelVersion;
  /** Optional. Instance is part of a DR site. */
  isDrSite?: boolean;
}

export const SapDiscoveryResourceInstanceProperties: Schema.Schema<SapDiscoveryResourceInstanceProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    virtualHostname: Schema.optional(Schema.String),
    instanceNumber: Schema.optional(Schema.String),
    appInstances: Schema.optional(
      Schema.Array(SapDiscoveryResourceInstancePropertiesAppInstance),
    ),
    instanceRole: Schema.optional(Schema.String),
    clusterInstances: Schema.optional(Schema.Array(Schema.String)),
    diskMounts: Schema.optional(
      Schema.Array(SapDiscoveryResourceInstancePropertiesDiskMount),
    ),
    osKernelVersion: Schema.optional(
      SapDiscoveryResourceInstancePropertiesKernelVersion,
    ),
    isDrSite: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "SapDiscoveryResourceInstanceProperties" });

export interface SapDiscoveryResource {
  /** Optional. A list of resource URIs related to this resource. */
  relatedResources?: ReadonlyArray<string>;
  /** Optional. A set of properties only applying to instance type resources. */
  instanceProperties?: SapDiscoveryResourceInstanceProperties;
  /** Required. ComputeInstance, ComputeDisk, VPC, Bare Metal server, etc. */
  resourceKind?:
    | "RESOURCE_KIND_UNSPECIFIED"
    | "RESOURCE_KIND_INSTANCE"
    | "RESOURCE_KIND_DISK"
    | "RESOURCE_KIND_ADDRESS"
    | "RESOURCE_KIND_FILESTORE"
    | "RESOURCE_KIND_HEALTH_CHECK"
    | "RESOURCE_KIND_FORWARDING_RULE"
    | "RESOURCE_KIND_BACKEND_SERVICE"
    | "RESOURCE_KIND_SUBNETWORK"
    | "RESOURCE_KIND_NETWORK"
    | "RESOURCE_KIND_PUBLIC_ADDRESS"
    | "RESOURCE_KIND_INSTANCE_GROUP"
    | (string & {});
  /** Required. URI of the resource, includes project, location, and name. */
  resourceUri?: string;
  /** Required. Unix timestamp of when this resource last had its discovery data updated. */
  updateTime?: string;
  /** Required. The type of this resource. */
  resourceType?:
    | "RESOURCE_TYPE_UNSPECIFIED"
    | "RESOURCE_TYPE_COMPUTE"
    | "RESOURCE_TYPE_STORAGE"
    | "RESOURCE_TYPE_NETWORK"
    | (string & {});
}

export const SapDiscoveryResource: Schema.Schema<SapDiscoveryResource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    relatedResources: Schema.optional(Schema.Array(Schema.String)),
    instanceProperties: Schema.optional(SapDiscoveryResourceInstanceProperties),
    resourceKind: Schema.optional(Schema.String),
    resourceUri: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    resourceType: Schema.optional(Schema.String),
  }).annotate({ identifier: "SapDiscoveryResource" });

export interface SapDiscoveryComponentReplicationSite {
  /** Optional. The name of the source site from which this one replicates. */
  sourceSite?: string;
  /** Optional. The system component for the site. */
  component?: SapDiscoveryComponent;
}

export const SapDiscoveryComponentReplicationSite: Schema.Schema<SapDiscoveryComponentReplicationSite> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      sourceSite: Schema.optional(Schema.String),
      component: Schema.optional(SapDiscoveryComponent),
    }),
  ).annotate({
    identifier: "SapDiscoveryComponentReplicationSite",
  }) as any as Schema.Schema<SapDiscoveryComponentReplicationSite>;

export interface SapDiscoveryComponent {
  /** Optional. The detected topology of the component. */
  topologyType?:
    | "TOPOLOGY_TYPE_UNSPECIFIED"
    | "TOPOLOGY_SCALE_UP"
    | "TOPOLOGY_SCALE_OUT"
    | (string & {});
  /** Optional. The region this component's resources are primarily located in. */
  region?: string;
  /** Optional. The component is a SAP application. */
  applicationProperties?: SapDiscoveryComponentApplicationProperties;
  /** Optional. The SAP identifier, used by the SAP software and helps differentiate systems for customers. */
  sid?: string;
  /** Required. Pantheon Project in which the resources reside. */
  hostProject?: string;
  /** Optional. The component is a SAP database. */
  databaseProperties?: SapDiscoveryComponentDatabaseProperties;
  /** Optional. The resources in a component. */
  resources?: ReadonlyArray<SapDiscoveryResource>;
  /** Optional. A list of host URIs that are part of the HA configuration if present. An empty list indicates the component is not configured for HA. */
  haHosts?: ReadonlyArray<string>;
  /** Optional. A list of replication sites used in Disaster Recovery (DR) configurations. */
  replicationSites?: ReadonlyArray<SapDiscoveryComponentReplicationSite>;
}

export const SapDiscoveryComponent: Schema.Schema<SapDiscoveryComponent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      topologyType: Schema.optional(Schema.String),
      region: Schema.optional(Schema.String),
      applicationProperties: Schema.optional(
        SapDiscoveryComponentApplicationProperties,
      ),
      sid: Schema.optional(Schema.String),
      hostProject: Schema.optional(Schema.String),
      databaseProperties: Schema.optional(
        SapDiscoveryComponentDatabaseProperties,
      ),
      resources: Schema.optional(Schema.Array(SapDiscoveryResource)),
      haHosts: Schema.optional(Schema.Array(Schema.String)),
      replicationSites: Schema.optional(
        Schema.Array(SapDiscoveryComponentReplicationSite),
      ),
    }),
  ).annotate({
    identifier: "SapDiscoveryComponent",
  }) as any as Schema.Schema<SapDiscoveryComponent>;

export interface SapDiscoveryWorkloadPropertiesProductVersion {
  /** Optional. Version of the product. */
  version?: string;
  /** Optional. Name of the product. */
  name?: string;
}

export const SapDiscoveryWorkloadPropertiesProductVersion: Schema.Schema<SapDiscoveryWorkloadPropertiesProductVersion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "SapDiscoveryWorkloadPropertiesProductVersion" });

export interface SapDiscoveryWorkloadPropertiesSoftwareComponentProperties {
  /** Optional. The component's minor version. */
  extVersion?: string;
  /** Optional. The component's major version. */
  version?: string;
  /** Optional. The component's type. */
  type?: string;
  /** Optional. Name of the component. */
  name?: string;
}

export const SapDiscoveryWorkloadPropertiesSoftwareComponentProperties: Schema.Schema<SapDiscoveryWorkloadPropertiesSoftwareComponentProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    extVersion: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier: "SapDiscoveryWorkloadPropertiesSoftwareComponentProperties",
  });

export interface SapDiscoveryWorkloadProperties {
  /** Optional. List of SAP Products and their versions running on the system. */
  productVersions?: ReadonlyArray<SapDiscoveryWorkloadPropertiesProductVersion>;
  /** Optional. A list of SAP software components and their versions running on the system. */
  softwareComponentVersions?: ReadonlyArray<SapDiscoveryWorkloadPropertiesSoftwareComponentProperties>;
}

export const SapDiscoveryWorkloadProperties: Schema.Schema<SapDiscoveryWorkloadProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    productVersions: Schema.optional(
      Schema.Array(SapDiscoveryWorkloadPropertiesProductVersion),
    ),
    softwareComponentVersions: Schema.optional(
      Schema.Array(SapDiscoveryWorkloadPropertiesSoftwareComponentProperties),
    ),
  }).annotate({ identifier: "SapDiscoveryWorkloadProperties" });

export interface SapDiscovery {
  /** Optional. The metadata for SAP system discovery data. */
  metadata?: SapDiscoveryMetadata;
  /** Required. An SAP System must have a database. */
  databaseLayer?: SapDiscoveryComponent;
  /** Optional. Whether to use DR reconciliation or not. */
  useDrReconciliation?: boolean;
  /** Optional. An SAP system may run without an application layer. */
  applicationLayer?: SapDiscoveryComponent;
  /** Optional. The GCP project number that this SapSystem belongs to. */
  projectNumber?: string;
  /** Optional. The properties of the workload. */
  workloadProperties?: SapDiscoveryWorkloadProperties;
  /** Output only. A combination of database SID, database instance URI and tenant DB name to make a unique identifier per-system. */
  systemId?: string;
  /** Required. Unix timestamp this system has been updated last. */
  updateTime?: string;
}

export const SapDiscovery: Schema.Schema<SapDiscovery> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(SapDiscoveryMetadata),
    databaseLayer: Schema.optional(SapDiscoveryComponent),
    useDrReconciliation: Schema.optional(Schema.Boolean),
    applicationLayer: Schema.optional(SapDiscoveryComponent),
    projectNumber: Schema.optional(Schema.String),
    workloadProperties: Schema.optional(SapDiscoveryWorkloadProperties),
    systemId: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "SapDiscovery" });

export interface SqlserverValidationDetails {
  /** Required. Collected data is in format. */
  fields?: Record<string, string>;
}

export const SqlserverValidationDetails: Schema.Schema<SqlserverValidationDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fields: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "SqlserverValidationDetails" });

export interface DeploymentOutput {
  /** name of the resource */
  name?: string;
  /** type of the resource */
  type?: string;
}

export const DeploymentOutput: Schema.Schema<DeploymentOutput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "DeploymentOutput" });

export interface Status {
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
}

export const Status: Schema.Schema<Status> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    code: Schema.optional(Schema.Number),
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "Status" });

export interface Operation {
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    error: Schema.optional(Status),
    done: Schema.optional(Schema.Boolean),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "Operation" });

export interface ListOperationsResponse {
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<Operation>;
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
}

export const ListOperationsResponse: Schema.Schema<ListOperationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    operations: Schema.optional(Schema.Array(Operation)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListOperationsResponse" });

export interface ListExecutionResultsResponse {
  /** The versions from the specified publisher. */
  executionResults?: ReadonlyArray<ExecutionResult>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListExecutionResultsResponse: Schema.Schema<ListExecutionResultsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    executionResults: Schema.optional(Schema.Array(ExecutionResult)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListExecutionResultsResponse" });

export interface ScannedResource {
  /** Resource name. */
  resource?: string;
  /** Resource type. */
  type?: string;
}

export const ScannedResource: Schema.Schema<ScannedResource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "ScannedResource" });

export interface ListRulesResponse {
  /** All rules in response. */
  rules?: ReadonlyArray<Rule>;
}

export const ListRulesResponse: Schema.Schema<ListRulesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rules: Schema.optional(Schema.Array(Rule)),
  }).annotate({ identifier: "ListRulesResponse" });

export interface ActuationOutput {
  /** A link to gcs file that store build logs */
  actuateLogs?: string;
  /** reference to terraform template used */
  terraformTemplate?: string;
  /** reference to Blueprint Controller deployment and revision resource */
  blueprintId?: string;
  /** Output only. error message return from terraform. */
  terraformError?: string;
  /** Cloud Build instance UUID associated with this revision, without any suffix or prefix */
  cloudbuildId?: string;
  /** A link to actuation cloud build log. */
  errorLogs?: string;
  /** Output only. Code describing any errors that may have occurred. If not specified, there is no error in actuation. */
  errorCode?:
    | "ERROR_CODE_UNSPECIFIED"
    | "TERRAFORM_FAILED"
    | "PERMISSION_DENIED_IN_TERRAFORM"
    | "QUOTA_EXCEED_IN_TERRAFORM"
    | "ANSIBLE_FAILED"
    | "CONSTRAINT_VIOLATION_IN_TERRAFORM"
    | "RESOURCE_ALREADY_EXISTS_IN_TERRAFORM"
    | "RESOURCE_UNAVAILABLE_IN_TERRAFORM"
    | "PERMISSION_DENIED_IN_ANSIBLE"
    | "INVALID_SECRET_IN_ANSIBLE"
    | "TERRAFORM_DELETION_FAILED"
    | "RESOURCE_IN_USE_IN_TERRAFORM_DELETION"
    | "ANSIBLE_START_FAILED"
    | (string & {});
  /** Output only. whether the error message is user facing. If true, the error message will be shown in the UI. */
  hasUserFacingErrorMsg?: boolean;
  /** Output only. error message return from ansible. */
  ansibleError?: string;
  /** Output only. failed task name return from ansible. */
  ansibleFailedTask?: ReadonlyArray<string>;
}

export const ActuationOutput: Schema.Schema<ActuationOutput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    actuateLogs: Schema.optional(Schema.String),
    terraformTemplate: Schema.optional(Schema.String),
    blueprintId: Schema.optional(Schema.String),
    terraformError: Schema.optional(Schema.String),
    cloudbuildId: Schema.optional(Schema.String),
    errorLogs: Schema.optional(Schema.String),
    errorCode: Schema.optional(Schema.String),
    hasUserFacingErrorMsg: Schema.optional(Schema.Boolean),
    ansibleError: Schema.optional(Schema.String),
    ansibleFailedTask: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ActuationOutput" });

export interface Actuation {
  /** The name of actuation resource. The format is projects/{project}/locations/{location}/deployments/{deployment}/actuations/{actuation} */
  name?: string;
  /** Output only. [Output only] Actuation output */
  actuationOutput?: ActuationOutput;
  /** Output only. [Output only] End time stamp */
  endTime?: string;
  /** Output only. [Output only] Deployment output */
  deploymentOutput?: ReadonlyArray<DeploymentOutput>;
  /** Output only. [Output only] Actuation state */
  state?:
    | "STATE_UNSPECIFIED"
    | "INFRA_CREATING"
    | "SUCCEEDED"
    | "FAILED"
    | "POST_INFRA_CONFIGURING"
    | "INFRA_DESTROYING"
    | "TIMEOUT"
    | (string & {});
  /** Output only. [Output only] Start time stamp */
  startTime?: string;
}

export const Actuation: Schema.Schema<Actuation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    actuationOutput: Schema.optional(ActuationOutput),
    endTime: Schema.optional(Schema.String),
    deploymentOutput: Schema.optional(Schema.Array(DeploymentOutput)),
    state: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Actuation" });

export interface Location {
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
}

export const Location: Schema.Schema<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locationId: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
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

export interface ActiveDirectory {
  /** Optional. domain username */
  domainUsername?: string;
  /** Required. secret_manager_secret */
  secretManagerSecret?: string;
  /** Optional. DNS IP address */
  dnsAddress?: string;
  /** Required. active directory type */
  type?:
    | "ACTIVE_DIRECTORY_TYPE_UNSPECIFIED"
    | "GCP_MANAGED"
    | "SELF_MANAGED"
    | (string & {});
  /** Optional. human readable form of a domain such as “google.com”. */
  domain?: string;
}

export const ActiveDirectory: Schema.Schema<ActiveDirectory> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domainUsername: Schema.optional(Schema.String),
    secretManagerSecret: Schema.optional(Schema.String),
    dnsAddress: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
  }).annotate({ identifier: "ActiveDirectory" });

export interface AgentStatusReference {
  /** Output only. The name of the reference. */
  name?: string;
  /** Output only. The URL of the reference. */
  url?: string;
}

export const AgentStatusReference: Schema.Schema<AgentStatusReference> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
  }).annotate({ identifier: "AgentStatusReference" });

export interface AgentStatus {
  /** Output only. Whether the agent service is running in systemd. */
  systemdServiceRunning?:
    | "UNSPECIFIED_STATE"
    | "SUCCESS_STATE"
    | "FAILURE_STATE"
    | "ERROR_STATE"
    | (string & {});
  /** Output only. The path to the agent configuration file. */
  configurationFilePath?: string;
  /** Output only. The URI of the instance. Format: projects//zones//instances/ */
  instanceUri?: string;
  /** Output only. The name of the agent. */
  agentName?: string;
  /** Output only. The available version of the agent in artifact registry. */
  availableVersion?: string;
  /** Output only. The installed version of the agent on the host. */
  installedVersion?: string;
  /** Output only. Whether the agent service is enabled in systemd. */
  systemdServiceEnabled?:
    | "UNSPECIFIED_STATE"
    | "SUCCESS_STATE"
    | "FAILURE_STATE"
    | "ERROR_STATE"
    | (string & {});
  /** Output only. Whether the agent configuration is valid. */
  configurationValid?:
    | "UNSPECIFIED_STATE"
    | "SUCCESS_STATE"
    | "FAILURE_STATE"
    | "ERROR_STATE"
    | (string & {});
  /** Output only. Optional references to public documentation. */
  references?: ReadonlyArray<AgentStatusReference>;
  /** Output only. The error message for the agent configuration if invalid. */
  configurationErrorMessage?: string;
  /** Output only. Whether the agent has full access to Cloud APIs. */
  cloudApiAccessFullScopesGranted?:
    | "UNSPECIFIED_STATE"
    | "SUCCESS_STATE"
    | "FAILURE_STATE"
    | "ERROR_STATE"
    | (string & {});
  /** Output only. The services (process metrics, host metrics, etc.). */
  services?: ReadonlyArray<AgentStatusServiceStatus>;
  /** Output only. The kernel version of the system. */
  kernelVersion?: SapDiscoveryResourceInstancePropertiesKernelVersion;
}

export const AgentStatus: Schema.Schema<AgentStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    systemdServiceRunning: Schema.optional(Schema.String),
    configurationFilePath: Schema.optional(Schema.String),
    instanceUri: Schema.optional(Schema.String),
    agentName: Schema.optional(Schema.String),
    availableVersion: Schema.optional(Schema.String),
    installedVersion: Schema.optional(Schema.String),
    systemdServiceEnabled: Schema.optional(Schema.String),
    configurationValid: Schema.optional(Schema.String),
    references: Schema.optional(Schema.Array(AgentStatusReference)),
    configurationErrorMessage: Schema.optional(Schema.String),
    cloudApiAccessFullScopesGranted: Schema.optional(Schema.String),
    services: Schema.optional(Schema.Array(AgentStatusServiceStatus)),
    kernelVersion: Schema.optional(
      SapDiscoveryResourceInstancePropertiesKernelVersion,
    ),
  }).annotate({ identifier: "AgentStatus" });

export interface DatabaseDetails {
  /** Required. machine type */
  machineType?: string;
  /** Optional. primary db vm name */
  primaryDbVm?: string;
  /** Optional. secondary db vm name */
  secondaryDbVm?: string;
  /** Required. image for database server */
  image?: string;
  /** Database service account - let custoemrs bring their own SA for database */
  databaseServiceAccount?: string;
  /** Required. disk_type */
  diskType?: string;
  /** Required. secret_manager_secret */
  secretManagerSecret?: string;
  /** Required. The SID is a three-digit server-specific unique identification code. */
  sid?: string;
  /** Optional. instance id */
  instanceId?: string;
}

export const DatabaseDetails: Schema.Schema<DatabaseDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    machineType: Schema.optional(Schema.String),
    primaryDbVm: Schema.optional(Schema.String),
    secondaryDbVm: Schema.optional(Schema.String),
    image: Schema.optional(Schema.String),
    databaseServiceAccount: Schema.optional(Schema.String),
    diskType: Schema.optional(Schema.String),
    secretManagerSecret: Schema.optional(Schema.String),
    sid: Schema.optional(Schema.String),
    instanceId: Schema.optional(Schema.String),
  }).annotate({ identifier: "DatabaseDetails" });

export interface Database {
  /** Optional. only useful for Linux High Availability setup */
  floatingIpAddress?: string;
  /** Optional. the name of a secondary-sole-tenant node/node group */
  secondarySoleTenantNode?: string;
  /** Required. whether to have TempDB on local SSD */
  tempdbOnSsd?: boolean;
  /** Optional. the type of a primary sole-tenant node/node group e.g. compute.googleapis.com/node-name */
  soleTenantNodeType?: string;
  /** Required. SHARED or SOLE_TENANT */
  tenancyModel?:
    | "TENANCY_MODEL_UNSPECIFIED"
    | "SHARED"
    | "SOLE_TENANT"
    | (string & {});
  /** Optional. the name of a primary sole-tenant node/node group */
  soleTenantNode?: string;
  /** Optional. the type of a secondary-sole-tenant node/node group e.g. compute.googleapis.com/node-name */
  secondarySoleTenantNodeType?: string;
  /** Required. disk_type */
  diskType?: string;
  /** Required. secret_manager_secret */
  secretManagerSecret?: string;
  /** Required. machine type */
  machineType?: string;
  /** Required. whether simultaneous multithreading is enabled or not */
  smt?: boolean;
}

export const Database: Schema.Schema<Database> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    floatingIpAddress: Schema.optional(Schema.String),
    secondarySoleTenantNode: Schema.optional(Schema.String),
    tempdbOnSsd: Schema.optional(Schema.Boolean),
    soleTenantNodeType: Schema.optional(Schema.String),
    tenancyModel: Schema.optional(Schema.String),
    soleTenantNode: Schema.optional(Schema.String),
    secondarySoleTenantNodeType: Schema.optional(Schema.String),
    diskType: Schema.optional(Schema.String),
    secretManagerSecret: Schema.optional(Schema.String),
    machineType: Schema.optional(Schema.String),
    smt: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "Database" });

export interface Pacemaker {
  /** Required. sql pacemaker secret name */
  sqlPacemakerSecret?: string;
  /** Required. pacemaker cluster username */
  pacemakerClusterUsername?: string;
  /** Required. bucket location for node certificates */
  bucketNameNodeCertificates?: string;
  /** Required. pacemaker cluster name */
  pacemakerCluster?: string;
  /** Required. pacemaker cluster secret name */
  pacemakerClusterSecret?: string;
  /** Required. sql pacemaker username */
  sqlPacemakerUsername?: string;
}

export const Pacemaker: Schema.Schema<Pacemaker> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sqlPacemakerSecret: Schema.optional(Schema.String),
    pacemakerClusterUsername: Schema.optional(Schema.String),
    bucketNameNodeCertificates: Schema.optional(Schema.String),
    pacemakerCluster: Schema.optional(Schema.String),
    pacemakerClusterSecret: Schema.optional(Schema.String),
    sqlPacemakerUsername: Schema.optional(Schema.String),
  }).annotate({ identifier: "Pacemaker" });

export interface SqlServerWorkload {
  /** Required. HIGH_AVAILABILITY or SINGLE_INSTANCE */
  deploymentModel?:
    | "DEPLOYMENT_MODEL_UNSPECIFIED"
    | "HIGH_AVAILABILITY"
    | "SINGLE_INSTANCE"
    | (string & {});
  /** Required. should be unique in the project */
  vmPrefix?: string;
  /** Required. name of the media storing SQL server installation files */
  mediaBucket?: string;
  /** Required. active directory details */
  activeDirectory?: ActiveDirectory;
  /** Required. deployment environment */
  environmentType?:
    | "ENVIRONMENT_TYPE_UNSPECIFIED"
    | "NON_PRODUCTION"
    | "PRODUCTION"
    | (string & {});
  /** Optional. AOAG or FCI, it is only needed for High Availability deployment mode */
  haType?: "HA_TYPE_UNSPECIFIED" | "AOAG" | "FCI" | (string & {});
  /** Required. SQL licensing type */
  isSqlPayg?: boolean;
  /** Required. database details */
  database?: Database;
  /** Optional. pacemaker configuration, only applicable for Linux HA deployments */
  pacemaker?: Pacemaker;
  /** Optional. 2017 or 2019 or 2022 */
  sqlServerVersion?:
    | "SQL_SERVER_VERSION_TYPE_UNSPECIFIED"
    | "SQL_SERVER_VERSION_TYPE_2017"
    | "SQL_SERVER_VERSION_TYPE_2019"
    | "SQL_SERVER_VERSION_TYPE_2022"
    | (string & {});
  /** Compute engine service account - let customers bring their own SA for Compute engine */
  computeEngineServiceAccount?: string;
  /** Required. the image of the operating system */
  osImage?: string;
  /** Optional. SHARED_DISK or S2D */
  fciType?: "FCI_TYPE_UNSPECIFIED" | "SHARED_DISK" | "S2D" | (string & {});
  /** Required. location details */
  location?: SqlLocationDetails;
  /** Optional. OS image type, it's used to create boot disks for VM instances When either Windows licensing type or SQL licensing type is BYOL, this option is disabled and default to custom image */
  osImageType?:
    | "OS_IMAGE_TYPE_UNSPECIFIED"
    | "PUBLIC_IMAGE"
    | "CUSTOM_IMAGE"
    | (string & {});
  /** Required. type of the operating system the SQL server is going to run on top of */
  operatingSystemType?:
    | "OPERATING_SYSTEM_TYPE_UNSPECIFIED"
    | "WINDOWS"
    | "UBUNTU"
    | "RED_HAT_ENTERPRISE_LINUX"
    | "SUSE"
    | (string & {});
  /** Optional. SQL Server Edition type, only applicable when Operating System is Linux */
  sqlServerEdition?:
    | "SQL_SERVER_EDITION_TYPE_UNSPECIFIED"
    | "SQL_SERVER_EDITION_TYPE_DEVELOPER"
    | "SQL_SERVER_EDITION_TYPE_ENTERPRISE"
    | "SQL_SERVER_EDITION_TYPE_STANDARD"
    | "SQL_SERVER_EDITION_TYPE_WEB"
    | (string & {});
}

export const SqlServerWorkload: Schema.Schema<SqlServerWorkload> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deploymentModel: Schema.optional(Schema.String),
    vmPrefix: Schema.optional(Schema.String),
    mediaBucket: Schema.optional(Schema.String),
    activeDirectory: Schema.optional(ActiveDirectory),
    environmentType: Schema.optional(Schema.String),
    haType: Schema.optional(Schema.String),
    isSqlPayg: Schema.optional(Schema.Boolean),
    database: Schema.optional(Database),
    pacemaker: Schema.optional(Pacemaker),
    sqlServerVersion: Schema.optional(Schema.String),
    computeEngineServiceAccount: Schema.optional(Schema.String),
    osImage: Schema.optional(Schema.String),
    fciType: Schema.optional(Schema.String),
    location: Schema.optional(SqlLocationDetails),
    osImageType: Schema.optional(Schema.String),
    operatingSystemType: Schema.optional(Schema.String),
    sqlServerEdition: Schema.optional(Schema.String),
  }).annotate({ identifier: "SqlServerWorkload" });

export interface AppDetails {
  /** Optional. instance id for ascs */
  ascsInstanceId?: string;
  /** Required. image for app server and ascs server */
  image?: string;
  /** Optional. ERS vm name */
  ersVm?: string;
  /** Required. machine type */
  machineType?: string;
  /** Required. image for ascs server */
  ascsImage?: string;
  /** Required. ascs_machine_type */
  ascsMachineType?: string;
  /** Optional. instance id for app */
  appInstanceId?: string;
  /** Optional. instance id for ers */
  ersInstanceId?: string;
  /** Optional. Storage location */
  sharedStorage?: string;
  /** Optional. ASCS vm name */
  ascsVm?: string;
  /** Required. vms_multiplier */
  vmsMultiplier?: number;
  /** Application service account - let custoemrs bring their own SA for application */
  appServiceAccount?: string;
  /** Optional. Customized vm names */
  appVmNames?: ReadonlyArray<string>;
  /** Required. The SAP SID is a three-digit server-specific unique identification code. */
  sid?: string;
  /** Required. secret_manager_secret */
  secretManagerSecret?: string;
  /** ASCS service account - let custoemrs bring their own SA for ASCS */
  ascsServiceAccount?: string;
}

export const AppDetails: Schema.Schema<AppDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ascsInstanceId: Schema.optional(Schema.String),
    image: Schema.optional(Schema.String),
    ersVm: Schema.optional(Schema.String),
    machineType: Schema.optional(Schema.String),
    ascsImage: Schema.optional(Schema.String),
    ascsMachineType: Schema.optional(Schema.String),
    appInstanceId: Schema.optional(Schema.String),
    ersInstanceId: Schema.optional(Schema.String),
    sharedStorage: Schema.optional(Schema.String),
    ascsVm: Schema.optional(Schema.String),
    vmsMultiplier: Schema.optional(Schema.Number),
    appServiceAccount: Schema.optional(Schema.String),
    appVmNames: Schema.optional(Schema.Array(Schema.String)),
    sid: Schema.optional(Schema.String),
    secretManagerSecret: Schema.optional(Schema.String),
    ascsServiceAccount: Schema.optional(Schema.String),
  }).annotate({ identifier: "AppDetails" });

export interface LocationDetails {
  /** Optional. dns_zone_name_suffix */
  dnsZoneNameSuffix?: string;
  /** Required. subnet_name */
  subnetName?: string;
  /** Optional. network tags */
  customTags?: ReadonlyArray<string>;
  /** Optional. dns zone name */
  dnsZone?: string;
  /** Optional. network project */
  networkProject?: string;
  /** Optional. when user skip DNS configuration from UI, deployment_dns_enabled=false otherwise deployment_dns_enabled=true */
  deploymentDnsEnabled?: boolean;
  /** Required. vpc_name */
  vpcName?: string;
  /** Required. region_name */
  regionName?: string;
  internetAccess?:
    | "INTERNETACCESS_UNSPECIFIED"
    | "ALLOW_EXTERNAL_IP"
    | "CONFIGURE_NAT"
    | (string & {});
  /** Optional. create firewall, if true, create firewall for the deployment. This field provides an option to not always create firewall for the deployment. */
  createCommsFirewall?: boolean;
  /** Required. zone1_name */
  zone1Name?: string;
  /** Optional. zone2_name */
  zone2Name?: string;
}

export const LocationDetails: Schema.Schema<LocationDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dnsZoneNameSuffix: Schema.optional(Schema.String),
    subnetName: Schema.optional(Schema.String),
    customTags: Schema.optional(Schema.Array(Schema.String)),
    dnsZone: Schema.optional(Schema.String),
    networkProject: Schema.optional(Schema.String),
    deploymentDnsEnabled: Schema.optional(Schema.Boolean),
    vpcName: Schema.optional(Schema.String),
    regionName: Schema.optional(Schema.String),
    internetAccess: Schema.optional(Schema.String),
    createCommsFirewall: Schema.optional(Schema.Boolean),
    zone1Name: Schema.optional(Schema.String),
    zone2Name: Schema.optional(Schema.String),
  }).annotate({ identifier: "LocationDetails" });

export interface SapSystemS4Config {
  /** vm_prefix */
  vmPrefix?: string;
  /** instance details */
  app?: AppDetails;
  /** Required. two model non-HA and HA supported */
  deploymentModel?:
    | "DEPLOYMENT_MODEL_UNSPECIFIED"
    | "DISTRIBUTED"
    | "DISTRIBUTED_HA"
    | (string & {});
  /** Required. deployment environment */
  environmentType?:
    | "ENVIRONMENT_TYPE_UNSPECIFIED"
    | "NON_PRODUCTION"
    | "PRODUCTION"
    | (string & {});
  /** database details */
  database?: DatabaseDetails;
  /** Required. support scale up and scale out */
  scalingMethod?:
    | "SCALE_METHOD_UNSPECIFIED"
    | "SCALE_UP"
    | "SCALE_OUT"
    | (string & {});
  /** database details */
  location?: LocationDetails;
  /** Ansible runner service account - let custoemrs bring their own SA for Ansible runner */
  ansibleRunnerServiceAccount?: string;
  /** Required. sap hana version */
  version?:
    | "VERSION_UNSPECIFIED"
    | "S4_HANA_2021"
    | "S4_HANA_2022"
    | "S4_HANA_2023"
    | (string & {});
  /** Required. media_bucket_name */
  mediaBucketName?: string;
  /** the project that infrastructure deployed, current only support the same project where the deployment resource exist. */
  gcpProjectId?: string;
  allowStoppingForUpdate?: boolean;
  /** Optional. sap_boot_disk_image */
  sapBootDiskImage?: string;
}

export const SapSystemS4Config: Schema.Schema<SapSystemS4Config> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vmPrefix: Schema.optional(Schema.String),
    app: Schema.optional(AppDetails),
    deploymentModel: Schema.optional(Schema.String),
    environmentType: Schema.optional(Schema.String),
    database: Schema.optional(DatabaseDetails),
    scalingMethod: Schema.optional(Schema.String),
    location: Schema.optional(LocationDetails),
    ansibleRunnerServiceAccount: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    mediaBucketName: Schema.optional(Schema.String),
    gcpProjectId: Schema.optional(Schema.String),
    allowStoppingForUpdate: Schema.optional(Schema.Boolean),
    sapBootDiskImage: Schema.optional(Schema.String),
  }).annotate({ identifier: "SapSystemS4Config" });

export interface Deployment {
  /** Output only. [Output only] Update time stamp */
  updateTime?: string;
  /** Optional. terraform_variables represents all the Terraform variables for the deployment workload. The key is the name of the Terraform variable, and the value is the TerraformVariable. For example: { "project_id": { "input_value": { "string_value": "my-project-id" } }, "zone": { "input_value": { "string_value": "us-central1-a" } } } */
  terraformVariables?: Record<string, TerraformVariable>;
  /** Optional. Workload type of the deployment */
  workloadType?:
    | "WORKLOAD_TYPE_UNSPECIFIED"
    | "SAP_S4"
    | "SQL_SERVER"
    | "ORACLE"
    | (string & {});
  /** MS SQL workload input */
  sqlServerWorkload?: SqlServerWorkload;
  /** The name of deployment resource. The format will be 'projects/{project_id}/locations/{location_id}/deployments/{deployment_id}' */
  name?: string;
  /** SAP system workload input */
  sapSystemS4Config?: SapSystemS4Config;
  /** Output only. Current state of the deployment. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "ACTIVE"
    | "UPDATING"
    | "DELETING"
    | "FAILED"
    | (string & {});
  /** User-specified Service Account (SA) credentials to be used for cloud build Format: `projects/{projectID}/serviceAccounts/{serviceAccount}` The default Cloud Build SA will be used initially if this field is not set during deployment creation */
  serviceAccount?: string;
  /** Description of the Deployment */
  description?: string;
  /** Output only. [Output only] Create time stamp */
  createTime?: string;
  /** Optional. The user-specified Cloud Build worker pool resource in which the Cloud Build job will execute. Format: `projects/{project}/locations/{location}/workerPools/{workerPoolId}`. If this field is unspecified, the default Cloud Build worker pool will be used. */
  workerPool?: string;
}

export const Deployment: Schema.Schema<Deployment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    terraformVariables: Schema.optional(
      Schema.Record(Schema.String, TerraformVariable),
    ),
    workloadType: Schema.optional(Schema.String),
    sqlServerWorkload: Schema.optional(SqlServerWorkload),
    name: Schema.optional(Schema.String),
    sapSystemS4Config: Schema.optional(SapSystemS4Config),
    state: Schema.optional(Schema.String),
    serviceAccount: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    workerPool: Schema.optional(Schema.String),
  }).annotate({ identifier: "Deployment" });

export interface ListDeploymentsResponse {
  /** The list of Deployment */
  deployments?: ReadonlyArray<Deployment>;
  /** Unordered list. Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListDeploymentsResponse: Schema.Schema<ListDeploymentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deployments: Schema.optional(Schema.Array(Deployment)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListDeploymentsResponse" });

export interface OpenShiftValidation {
  /** Required. The validation details of the OpenShift cluster in JSON format. */
  validationDetails?: Record<string, unknown>;
  /** Required. The OpenShift cluster ID (e.g. 8371bb05-7cac-4d38-82c0-0f58c4f6f936). */
  clusterId?: string;
}

export const OpenShiftValidation: Schema.Schema<OpenShiftValidation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validationDetails: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    clusterId: Schema.optional(Schema.String),
  }).annotate({ identifier: "OpenShiftValidation" });

export interface BigQueryDestination {
  /** Optional. Destination dataset to save evaluation results. */
  destinationDataset?: string;
  /** Optional. Determines if a new results table will be created when an Execution is created. */
  createNewResultsTable?: boolean;
}

export const BigQueryDestination: Schema.Schema<BigQueryDestination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    destinationDataset: Schema.optional(Schema.String),
    createNewResultsTable: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "BigQueryDestination" });

export interface GceInstanceFilter {
  /** If non-empty, only Compute Engine instances associated with at least one of the provided service accounts will be included in the evaluation. */
  serviceAccounts?: ReadonlyArray<string>;
}

export const GceInstanceFilter: Schema.Schema<GceInstanceFilter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceAccounts: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GceInstanceFilter" });

export interface ResourceFilter {
  /** The scopes of evaluation resource. Format: * `projects/{project_id}` * `folders/{folder_id}` * `organizations/{organization_id}` */
  scopes?: ReadonlyArray<string>;
  /** Filter compute engine resources. */
  gceInstanceFilter?: GceInstanceFilter;
  /** The pattern to filter resources by their id For example, a pattern of ".*prod-cluster.*" will match all resources that contain "prod-cluster" in their ID. */
  resourceIdPatterns?: ReadonlyArray<string>;
  /** Labels to filter resources by. Each key-value pair in the map must exist on the resource for it to be included (e.g. VM instance labels). For example, specifying `{ "env": "prod", "database": "nosql" }` will only include resources that have labels `env=prod` and `database=nosql`. */
  inclusionLabels?: Record<string, string>;
}

export const ResourceFilter: Schema.Schema<ResourceFilter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scopes: Schema.optional(Schema.Array(Schema.String)),
    gceInstanceFilter: Schema.optional(GceInstanceFilter),
    resourceIdPatterns: Schema.optional(Schema.Array(Schema.String)),
    inclusionLabels: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
  }).annotate({ identifier: "ResourceFilter" });

export interface ResourceStatus {
  /** State of the Evaluation resource. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "ACTIVE"
    | "DELETING"
    | (string & {});
}

export const ResourceStatus: Schema.Schema<ResourceStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "ResourceStatus" });

export interface Evaluation {
  /** Name of resource that has the form `projects/{project_id}/locations/{location_id}/evaluations/{evaluation_id}`. */
  name?: string;
  /** Labels as key value pairs. */
  labels?: Record<string, string>;
  /** Evaluation type. */
  evaluationType?:
    | "EVALUATION_TYPE_UNSPECIFIED"
    | "SAP"
    | "SQL_SERVER"
    | "OTHER"
    | (string & {});
  /** Optional. The BigQuery destination for detailed evaluation results. If this field is specified, the results of each evaluation execution are exported to BigQuery. */
  bigQueryDestination?: BigQueryDestination;
  /** Optional. Immutable. Customer-managed encryption key name, in the format projects/* /locations/* /keyRings/* /cryptoKeys/*. The key will be used for CMEK encryption of the evaluation resource. */
  kmsKey?: string;
  /** Output only. [Output only] Update time stamp. */
  updateTime?: string;
  /** The Cloud Storage bucket name for custom rules. */
  customRulesBucket?: string;
  /** Resource filter for an evaluation defining the scope of resources to be evaluated. */
  resourceFilter?: ResourceFilter;
  /** Description of the Evaluation. */
  description?: string;
  /** Output only. [Output only] The current lifecycle state of the evaluation resource. */
  resourceStatus?: ResourceStatus;
  /** Output only. [Output only] Create time stamp. */
  createTime?: string;
  /** Crontab format schedule for scheduled evaluation, currently only supports the following fixed schedules: * `0 * /1 * * *` # Hourly * `0 * /6 * * *` # Every 6 hours * `0 * /12 * * *` # Every 12 hours * `0 0 * /1 * *` # Daily * `0 0 * /7 * *` # Weekly * `0 0 * /14 * *` # Every 14 days * `0 0 1 * /1 *` # Monthly */
  schedule?: string;
  /** The names of the rules used for this evaluation. */
  ruleNames?: ReadonlyArray<string>;
}

export const Evaluation: Schema.Schema<Evaluation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    evaluationType: Schema.optional(Schema.String),
    bigQueryDestination: Schema.optional(BigQueryDestination),
    kmsKey: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    customRulesBucket: Schema.optional(Schema.String),
    resourceFilter: Schema.optional(ResourceFilter),
    description: Schema.optional(Schema.String),
    resourceStatus: Schema.optional(ResourceStatus),
    createTime: Schema.optional(Schema.String),
    schedule: Schema.optional(Schema.String),
    ruleNames: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Evaluation" });

export interface CancelOperationRequest {}

export const CancelOperationRequest: Schema.Schema<CancelOperationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelOperationRequest",
  });

export interface ListActuationsResponse {
  /** Unordered list. Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The list of Actuation */
  actuations?: ReadonlyArray<Actuation>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListActuationsResponse: Schema.Schema<ListActuationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    actuations: Schema.optional(Schema.Array(Actuation)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListActuationsResponse" });

export interface ListEvaluationsResponse {
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The list of evaluations. */
  evaluations?: ReadonlyArray<Evaluation>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListEvaluationsResponse: Schema.Schema<ListEvaluationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    evaluations: Schema.optional(Schema.Array(Evaluation)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListEvaluationsResponse" });

export interface WriteInsightResponse {}

export const WriteInsightResponse: Schema.Schema<WriteInsightResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "WriteInsightResponse",
  });

export interface ListScannedResourcesResponse {
  /** All scanned resources in response. */
  scannedResources?: ReadonlyArray<ScannedResource>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListScannedResourcesResponse: Schema.Schema<ListScannedResourcesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scannedResources: Schema.optional(Schema.Array(ScannedResource)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListScannedResourcesResponse" });

export interface SqlserverValidationValidationDetail {
  /** Optional. The Sqlserver system that the validation data is from. */
  type?:
    | "SQLSERVER_VALIDATION_TYPE_UNSPECIFIED"
    | "OS"
    | "DB_LOG_DISK_SEPARATION"
    | "DB_MAX_PARALLELISM"
    | "DB_CXPACKET_WAITS"
    | "DB_TRANSACTION_LOG_HANDLING"
    | "DB_VIRTUAL_LOG_FILE_COUNT"
    | "DB_BUFFER_POOL_EXTENSION"
    | "DB_MAX_SERVER_MEMORY"
    | "INSTANCE_METRICS"
    | "DB_INDEX_FRAGMENTATION"
    | "DB_TABLE_INDEX_COMPRESSION"
    | "DB_BACKUP_POLICY"
    | (string & {});
  /** Required. Details wraps map that represents collected data names and values. */
  details?: ReadonlyArray<SqlserverValidationDetails>;
}

export const SqlserverValidationValidationDetail: Schema.Schema<SqlserverValidationValidationDetail> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    details: Schema.optional(Schema.Array(SqlserverValidationDetails)),
  }).annotate({ identifier: "SqlserverValidationValidationDetail" });

export interface SqlserverValidation {
  /** Optional. The agent version collected this data point */
  agentVersion?: string;
  /** Required. The project_id of the cloud project that the Insight data comes from. */
  projectId?: string;
  /** Optional. A list of SqlServer validation metrics data. */
  validationDetails?: ReadonlyArray<SqlserverValidationValidationDetail>;
  /** Required. The instance_name of the instance that the Insight data comes from. According to https://linter.aip.dev/122/name-suffix: field names should not use the _name suffix unless the field would be ambiguous without it. */
  instance?: string;
}

export const SqlserverValidation: Schema.Schema<SqlserverValidation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agentVersion: Schema.optional(Schema.String),
    projectId: Schema.optional(Schema.String),
    validationDetails: Schema.optional(
      Schema.Array(SqlserverValidationValidationDetail),
    ),
    instance: Schema.optional(Schema.String),
  }).annotate({ identifier: "SqlserverValidation" });

export interface ListExecutionsResponse {
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** The list of Execution. */
  executions?: ReadonlyArray<Execution>;
}

export const ListExecutionsResponse: Schema.Schema<ListExecutionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
    executions: Schema.optional(Schema.Array(Execution)),
  }).annotate({ identifier: "ListExecutionsResponse" });

export interface RunEvaluationRequest {
  /** Required. ID of the execution which will be created. */
  executionId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The resource being created. */
  execution?: Execution;
}

export const RunEvaluationRequest: Schema.Schema<RunEvaluationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    executionId: Schema.optional(Schema.String),
    requestId: Schema.optional(Schema.String),
    execution: Schema.optional(Execution),
  }).annotate({ identifier: "RunEvaluationRequest" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface ListDiscoveredProfilesResponse {
  /** Output only. A token identifying a page of results the server should return */
  nextPageToken?: string;
  /** Output only. The list of workload profiles */
  workloadProfiles?: ReadonlyArray<WorkloadProfile>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListDiscoveredProfilesResponse: Schema.Schema<ListDiscoveredProfilesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    workloadProfiles: Schema.optional(Schema.Array(WorkloadProfile)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListDiscoveredProfilesResponse" });

export interface SapValidationValidationDetail {
  /** Optional. The SAP system that the validation data is from. */
  sapValidationType?:
    | "SAP_VALIDATION_TYPE_UNSPECIFIED"
    | "SYSTEM"
    | "COROSYNC"
    | "PACEMAKER"
    | "HANA"
    | "NETWEAVER"
    | "HANA_SECURITY"
    | "CUSTOM"
    | (string & {});
  /** Optional. The pairs of metrics data: field name & field value. */
  details?: Record<string, string>;
  /** Optional. Was there a SAP system detected for this validation type. */
  isPresent?: boolean;
}

export const SapValidationValidationDetail: Schema.Schema<SapValidationValidationDetail> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sapValidationType: Schema.optional(Schema.String),
    details: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    isPresent: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "SapValidationValidationDetail" });

export interface SapValidation {
  /** Required. The project_id of the cloud project that the Insight data comes from. */
  projectId?: string;
  /** Optional. The zone of the instance that the Insight data comes from. */
  zone?: string;
  /** Optional. A list of SAP validation metrics data. */
  validationDetails?: ReadonlyArray<SapValidationValidationDetail>;
}

export const SapValidation: Schema.Schema<SapValidation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.optional(Schema.String),
    zone: Schema.optional(Schema.String),
    validationDetails: Schema.optional(
      Schema.Array(SapValidationValidationDetail),
    ),
  }).annotate({ identifier: "SapValidation" });

export interface Insight {
  /** Output only. [Output only] Create time stamp */
  sentTime?: string;
  /** The insights data for the sqlserver workload validation. */
  sqlserverValidation?: SqlserverValidation;
  /** Optional. The instance id where the insight is generated from */
  instanceId?: string;
  /** The insights data for the SAP workload validation. */
  sapValidation?: SapValidation;
  /** The insights data for SAP system discovery. This is a copy of SAP System proto and should get updated whenever that one changes. */
  sapDiscovery?: SapDiscovery;
  /** The insights data for the agent status. */
  agentStatus?: AgentStatus;
  /** The insights data for the OpenShift workload validation. */
  openShiftValidation?: OpenShiftValidation;
  /** The insights data for workload validation of torso workloads. */
  torsoValidation?: TorsoValidation;
}

export const Insight: Schema.Schema<Insight> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sentTime: Schema.optional(Schema.String),
    sqlserverValidation: Schema.optional(SqlserverValidation),
    instanceId: Schema.optional(Schema.String),
    sapValidation: Schema.optional(SapValidation),
    sapDiscovery: Schema.optional(SapDiscovery),
    agentStatus: Schema.optional(AgentStatus),
    openShiftValidation: Schema.optional(OpenShiftValidation),
    torsoValidation: Schema.optional(TorsoValidation),
  }).annotate({ identifier: "Insight" });

export interface WriteInsightRequest {
  /** Required. The metrics data details. */
  insight?: Insight;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. The agent version collected this data point. */
  agentVersion?: string;
}

export const WriteInsightRequest: Schema.Schema<WriteInsightRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    insight: Schema.optional(Insight),
    requestId: Schema.optional(Schema.String),
    agentVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "WriteInsightRequest" });

export interface OperationMetadata {
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
}

export const OperationMetadata: Schema.Schema<OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    statusMessage: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "OperationMetadata" });

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
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
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

/** Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the [ListLocationsRequest.name] field: * **Global locations**: If `name` is empty, the method lists the public locations available to all projects. * **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version. */
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

export interface CreateProjectsLocationsEvaluationsRequest {
  /** Required. The resource prefix of the evaluation location using the form: `projects/{project_id}/locations/{location_id}`. */
  parent: string;
  /** Required. Id of the requesting object. */
  evaluationId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: Evaluation;
}

export const CreateProjectsLocationsEvaluationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    evaluationId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("evaluationId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(Evaluation).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/evaluations", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsEvaluationsRequest>;

export type CreateProjectsLocationsEvaluationsResponse = Operation;
export const CreateProjectsLocationsEvaluationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsEvaluationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new Evaluation in a given project and location. */
export const createProjectsLocationsEvaluations: API.OperationMethod<
  CreateProjectsLocationsEvaluationsRequest,
  CreateProjectsLocationsEvaluationsResponse,
  CreateProjectsLocationsEvaluationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsEvaluationsRequest,
  output: CreateProjectsLocationsEvaluationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsEvaluationsRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Name of the resource. */
  name: string;
  /** Optional. Followed the best practice from https://aip.dev/135#cascading-delete. */
  force?: boolean;
}

export const DeleteProjectsLocationsEvaluationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsEvaluationsRequest>;

export type DeleteProjectsLocationsEvaluationsResponse = Operation;
export const DeleteProjectsLocationsEvaluationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsEvaluationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single Evaluation. */
export const deleteProjectsLocationsEvaluations: API.OperationMethod<
  DeleteProjectsLocationsEvaluationsRequest,
  DeleteProjectsLocationsEvaluationsResponse,
  DeleteProjectsLocationsEvaluationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsEvaluationsRequest,
  output: DeleteProjectsLocationsEvaluationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsEvaluationsRequest {
  /** A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Filter to be applied when listing the evaluation results. */
  filter?: string;
  /** Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Required. Parent value for ListEvaluationsRequest. */
  parent: string;
  /** Hint for how to order the results. */
  orderBy?: string;
}

export const ListProjectsLocationsEvaluationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/evaluations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsEvaluationsRequest>;

export type ListProjectsLocationsEvaluationsResponse = ListEvaluationsResponse;
export const ListProjectsLocationsEvaluationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListEvaluationsResponse;

export type ListProjectsLocationsEvaluationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Evaluations in a given project and location. */
export const listProjectsLocationsEvaluations: API.PaginatedOperationMethod<
  ListProjectsLocationsEvaluationsRequest,
  ListProjectsLocationsEvaluationsResponse,
  ListProjectsLocationsEvaluationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsEvaluationsRequest,
  output: ListProjectsLocationsEvaluationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsEvaluationsRequest {
  /** Required. Name of the resource. */
  name: string;
}

export const GetProjectsLocationsEvaluationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsEvaluationsRequest>;

export type GetProjectsLocationsEvaluationsResponse = Evaluation;
export const GetProjectsLocationsEvaluationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Evaluation;

export type GetProjectsLocationsEvaluationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single Evaluation. */
export const getProjectsLocationsEvaluations: API.OperationMethod<
  GetProjectsLocationsEvaluationsRequest,
  GetProjectsLocationsEvaluationsResponse,
  GetProjectsLocationsEvaluationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsEvaluationsRequest,
  output: GetProjectsLocationsEvaluationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsEvaluationsRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Field mask is used to specify the fields to be overwritten in the Evaluation resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. */
  updateMask?: string;
  /** Name of resource that has the form `projects/{project_id}/locations/{location_id}/evaluations/{evaluation_id}`. */
  name: string;
  /** Request body */
  body?: Evaluation;
}

export const PatchProjectsLocationsEvaluationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Evaluation).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsEvaluationsRequest>;

export type PatchProjectsLocationsEvaluationsResponse = Operation;
export const PatchProjectsLocationsEvaluationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsEvaluationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single Evaluation. */
export const patchProjectsLocationsEvaluations: API.OperationMethod<
  PatchProjectsLocationsEvaluationsRequest,
  PatchProjectsLocationsEvaluationsResponse,
  PatchProjectsLocationsEvaluationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsEvaluationsRequest,
  output: PatchProjectsLocationsEvaluationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsEvaluationsExecutionsRequest {
  /** A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Filtering results. */
  filter?: string;
  /** Field to sort by. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Required. The resource prefix of the Execution using the form: `projects/{project}/locations/{location}/evaluations/{evaluation}`. */
  parent: string;
  /** Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
}

export const ListProjectsLocationsEvaluationsExecutionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/executions" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsEvaluationsExecutionsRequest>;

export type ListProjectsLocationsEvaluationsExecutionsResponse =
  ListExecutionsResponse;
export const ListProjectsLocationsEvaluationsExecutionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListExecutionsResponse;

export type ListProjectsLocationsEvaluationsExecutionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Executions in a given project and location. */
export const listProjectsLocationsEvaluationsExecutions: API.PaginatedOperationMethod<
  ListProjectsLocationsEvaluationsExecutionsRequest,
  ListProjectsLocationsEvaluationsExecutionsResponse,
  ListProjectsLocationsEvaluationsExecutionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsEvaluationsExecutionsRequest,
  output: ListProjectsLocationsEvaluationsExecutionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsEvaluationsExecutionsRequest {
  /** Required. Name of the resource. */
  name: string;
}

export const GetProjectsLocationsEvaluationsExecutionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsEvaluationsExecutionsRequest>;

export type GetProjectsLocationsEvaluationsExecutionsResponse = Execution;
export const GetProjectsLocationsEvaluationsExecutionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Execution;

export type GetProjectsLocationsEvaluationsExecutionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single Execution. */
export const getProjectsLocationsEvaluationsExecutions: API.OperationMethod<
  GetProjectsLocationsEvaluationsExecutionsRequest,
  GetProjectsLocationsEvaluationsExecutionsResponse,
  GetProjectsLocationsEvaluationsExecutionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsEvaluationsExecutionsRequest,
  output: GetProjectsLocationsEvaluationsExecutionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface RunProjectsLocationsEvaluationsExecutionsRequest {
  /** Required. The resource name of the Evaluation using the form: `projects/{project}/locations/{location}/evaluations/{evaluation}`. */
  name: string;
  /** Request body */
  body?: RunEvaluationRequest;
}

export const RunProjectsLocationsEvaluationsExecutionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(RunEvaluationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+name}/executions:run",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RunProjectsLocationsEvaluationsExecutionsRequest>;

export type RunProjectsLocationsEvaluationsExecutionsResponse = Operation;
export const RunProjectsLocationsEvaluationsExecutionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type RunProjectsLocationsEvaluationsExecutionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new Execution in a given project and location. */
export const runProjectsLocationsEvaluationsExecutions: API.OperationMethod<
  RunProjectsLocationsEvaluationsExecutionsRequest,
  RunProjectsLocationsEvaluationsExecutionsResponse,
  RunProjectsLocationsEvaluationsExecutionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RunProjectsLocationsEvaluationsExecutionsRequest,
  output: RunProjectsLocationsEvaluationsExecutionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsEvaluationsExecutionsRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Name of the resource. */
  name: string;
}

export const DeleteProjectsLocationsEvaluationsExecutionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsEvaluationsExecutionsRequest>;

export type DeleteProjectsLocationsEvaluationsExecutionsResponse = Operation;
export const DeleteProjectsLocationsEvaluationsExecutionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsEvaluationsExecutionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single Execution. */
export const deleteProjectsLocationsEvaluationsExecutions: API.OperationMethod<
  DeleteProjectsLocationsEvaluationsExecutionsRequest,
  DeleteProjectsLocationsEvaluationsExecutionsResponse,
  DeleteProjectsLocationsEvaluationsExecutionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsEvaluationsExecutionsRequest,
  output: DeleteProjectsLocationsEvaluationsExecutionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsEvaluationsExecutionsResultsRequest {
  /** Required. The execution results. Format: {parent}/evaluations/* /executions/* /results. */
  parent: string;
  /** Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Filtering results. */
  filter?: string;
}

export const ListProjectsLocationsEvaluationsExecutionsResultsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/results" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsEvaluationsExecutionsResultsRequest>;

export type ListProjectsLocationsEvaluationsExecutionsResultsResponse =
  ListExecutionResultsResponse;
export const ListProjectsLocationsEvaluationsExecutionsResultsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListExecutionResultsResponse;

export type ListProjectsLocationsEvaluationsExecutionsResultsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the result of a single evaluation. */
export const listProjectsLocationsEvaluationsExecutionsResults: API.PaginatedOperationMethod<
  ListProjectsLocationsEvaluationsExecutionsResultsRequest,
  ListProjectsLocationsEvaluationsExecutionsResultsResponse,
  ListProjectsLocationsEvaluationsExecutionsResultsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsEvaluationsExecutionsResultsRequest,
  output: ListProjectsLocationsEvaluationsExecutionsResultsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsEvaluationsExecutionsScannedResourcesRequest {
  /** Required. Parent for ListScannedResourcesRequest. */
  parent: string;
  /** Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Field to sort by. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Rule name. */
  rule?: string;
  /** A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Filtering results. */
  filter?: string;
}

export const ListProjectsLocationsEvaluationsExecutionsScannedResourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    rule: Schema.optional(Schema.String).pipe(T.HttpQuery("rule")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/scannedResources" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsEvaluationsExecutionsScannedResourcesRequest>;

export type ListProjectsLocationsEvaluationsExecutionsScannedResourcesResponse =
  ListScannedResourcesResponse;
export const ListProjectsLocationsEvaluationsExecutionsScannedResourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListScannedResourcesResponse;

export type ListProjectsLocationsEvaluationsExecutionsScannedResourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List all scanned resources for a single Execution. */
export const listProjectsLocationsEvaluationsExecutionsScannedResources: API.PaginatedOperationMethod<
  ListProjectsLocationsEvaluationsExecutionsScannedResourcesRequest,
  ListProjectsLocationsEvaluationsExecutionsScannedResourcesResponse,
  ListProjectsLocationsEvaluationsExecutionsScannedResourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsEvaluationsExecutionsScannedResourcesRequest,
  output: ListProjectsLocationsEvaluationsExecutionsScannedResourcesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsRulesRequest {
  /** Optional. The evaluation type of the rules will be applied to. The Cloud Storage bucket name for custom rules. */
  evaluationType?:
    | "EVALUATION_TYPE_UNSPECIFIED"
    | "SAP"
    | "SQL_SERVER"
    | "OTHER"
    | (string & {});
  /** Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Required. The [project] on which to execute the request. The format is: projects/{project_id}/locations/{location} Currently, the pre-defined rules are global available to all projects and all regions. */
  parent: string;
  /** A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Filter based on primary_category, secondary_category. */
  filter?: string;
  /** The Cloud Storage bucket name for custom rules. */
  customRulesBucket?: string;
}

export const ListProjectsLocationsRulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    evaluationType: Schema.optional(Schema.String).pipe(
      T.HttpQuery("evaluationType"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    customRulesBucket: Schema.optional(Schema.String).pipe(
      T.HttpQuery("customRulesBucket"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/rules" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRulesRequest>;

export type ListProjectsLocationsRulesResponse = ListRulesResponse;
export const ListProjectsLocationsRulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListRulesResponse;

export type ListProjectsLocationsRulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists rules in a given project. */
export const listProjectsLocationsRules: API.OperationMethod<
  ListProjectsLocationsRulesRequest,
  ListProjectsLocationsRulesResponse,
  ListProjectsLocationsRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListProjectsLocationsRulesRequest,
  output: ListProjectsLocationsRulesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsDeploymentsRequest {
  /** Optional. Field to sort by. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Required. The resource prefix of the Deployment using the form: `projects/{project_id}/locations/{location_id}` */
  parent: string;
  /** Optional. Requested page size. Server may return fewer items than requested. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Optional. Filter resource follow https://google.aip.dev/160 */
  filter?: string;
}

export const ListProjectsLocationsDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/deployments" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsDeploymentsRequest>;

export type ListProjectsLocationsDeploymentsResponse = ListDeploymentsResponse;
export const ListProjectsLocationsDeploymentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListDeploymentsResponse;

export type ListProjectsLocationsDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Deployments in a given project and location. */
export const listProjectsLocationsDeployments: API.PaginatedOperationMethod<
  ListProjectsLocationsDeploymentsRequest,
  ListProjectsLocationsDeploymentsResponse,
  ListProjectsLocationsDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsDeploymentsRequest,
  output: ListProjectsLocationsDeploymentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsDeploymentsRequest {
  /** Required. Name of the resource. The format will be 'projects/{project_id}/locations/{location_id}/deployments/{deployment_id}' */
  name: string;
}

export const GetProjectsLocationsDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsDeploymentsRequest>;

export type GetProjectsLocationsDeploymentsResponse = Deployment;
export const GetProjectsLocationsDeploymentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Deployment;

export type GetProjectsLocationsDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single Deployment. */
export const getProjectsLocationsDeployments: API.OperationMethod<
  GetProjectsLocationsDeploymentsRequest,
  GetProjectsLocationsDeploymentsResponse,
  GetProjectsLocationsDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsDeploymentsRequest,
  output: GetProjectsLocationsDeploymentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsDeploymentsRequest {
  /** Required. Id of the deployment */
  deploymentId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The resource prefix of the Deployment using the form: `projects/{project_id}/locations/{location_id}` */
  parent: string;
  /** Request body */
  body?: Deployment;
}

export const CreateProjectsLocationsDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deploymentId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("deploymentId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Deployment).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/deployments", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsDeploymentsRequest>;

export type CreateProjectsLocationsDeploymentsResponse = Operation;
export const CreateProjectsLocationsDeploymentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new Deployment in a given project and location. */
export const createProjectsLocationsDeployments: API.OperationMethod<
  CreateProjectsLocationsDeploymentsRequest,
  CreateProjectsLocationsDeploymentsResponse,
  CreateProjectsLocationsDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsDeploymentsRequest,
  output: CreateProjectsLocationsDeploymentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsDeploymentsRequest {
  /** Optional. If set to true, any actuation will also be deleted. Followed the best practice from https://aip.dev/135#cascading-delete */
  force?: boolean;
  /** Required. Name of the resource */
  name: string;
}

export const DeleteProjectsLocationsDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsDeploymentsRequest>;

export type DeleteProjectsLocationsDeploymentsResponse = Operation;
export const DeleteProjectsLocationsDeploymentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single Deployment. */
export const deleteProjectsLocationsDeployments: API.OperationMethod<
  DeleteProjectsLocationsDeploymentsRequest,
  DeleteProjectsLocationsDeploymentsResponse,
  DeleteProjectsLocationsDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsDeploymentsRequest,
  output: DeleteProjectsLocationsDeploymentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsDeploymentsActuationsRequest {
  /** Required. The name of the book to delete. project/{project_id}/locations/{location_id}/deployments/{deployment_id}/actuations/{actuation_id} */
  name: string;
}

export const DeleteProjectsLocationsDeploymentsActuationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsDeploymentsActuationsRequest>;

export type DeleteProjectsLocationsDeploymentsActuationsResponse = Operation;
export const DeleteProjectsLocationsDeploymentsActuationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsDeploymentsActuationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single Actuation */
export const deleteProjectsLocationsDeploymentsActuations: API.OperationMethod<
  DeleteProjectsLocationsDeploymentsActuationsRequest,
  DeleteProjectsLocationsDeploymentsActuationsResponse,
  DeleteProjectsLocationsDeploymentsActuationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsDeploymentsActuationsRequest,
  output: DeleteProjectsLocationsDeploymentsActuationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsDeploymentsActuationsRequest {
  /** Required. The resource prefix of the Actuation using the form: 'projects/{project_id}/locations/{location}/deployments/{deployment}' */
  parent: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. Field to sort by. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Optional. Filtering results */
  filter?: string;
}

export const ListProjectsLocationsDeploymentsActuationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/actuations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsDeploymentsActuationsRequest>;

export type ListProjectsLocationsDeploymentsActuationsResponse =
  ListActuationsResponse;
export const ListProjectsLocationsDeploymentsActuationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListActuationsResponse;

export type ListProjectsLocationsDeploymentsActuationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Actuations in a given project, location and deployment. */
export const listProjectsLocationsDeploymentsActuations: API.PaginatedOperationMethod<
  ListProjectsLocationsDeploymentsActuationsRequest,
  ListProjectsLocationsDeploymentsActuationsResponse,
  ListProjectsLocationsDeploymentsActuationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsDeploymentsActuationsRequest,
  output: ListProjectsLocationsDeploymentsActuationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsDeploymentsActuationsRequest {
  /** Required. Name of the resource */
  name: string;
}

export const GetProjectsLocationsDeploymentsActuationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsDeploymentsActuationsRequest>;

export type GetProjectsLocationsDeploymentsActuationsResponse = Actuation;
export const GetProjectsLocationsDeploymentsActuationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Actuation;

export type GetProjectsLocationsDeploymentsActuationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single Actuation. */
export const getProjectsLocationsDeploymentsActuations: API.OperationMethod<
  GetProjectsLocationsDeploymentsActuationsRequest,
  GetProjectsLocationsDeploymentsActuationsResponse,
  GetProjectsLocationsDeploymentsActuationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsDeploymentsActuationsRequest,
  output: GetProjectsLocationsDeploymentsActuationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsDeploymentsActuationsRequest {
  /** Required. The resource name of the Actuation location using the form: 'projects/{project_id}/locations/{location}/deployments/{deployment}' */
  parent: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: Actuation;
}

export const CreateProjectsLocationsDeploymentsActuationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(Actuation).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/actuations", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsDeploymentsActuationsRequest>;

export type CreateProjectsLocationsDeploymentsActuationsResponse = Operation;
export const CreateProjectsLocationsDeploymentsActuationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsDeploymentsActuationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new actuation for an existing Deployment. */
export const createProjectsLocationsDeploymentsActuations: API.OperationMethod<
  CreateProjectsLocationsDeploymentsActuationsRequest,
  CreateProjectsLocationsDeploymentsActuationsResponse,
  CreateProjectsLocationsDeploymentsActuationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsDeploymentsActuationsRequest,
  output: CreateProjectsLocationsDeploymentsActuationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsDiscoveredprofilesRequest {
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Required. Parent value for ListDiscoveredProfilesRequest */
  parent: string;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Optional. Filtering results */
  filter?: string;
}

export const ListProjectsLocationsDiscoveredprofilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/discoveredprofiles" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsDiscoveredprofilesRequest>;

export type ListProjectsLocationsDiscoveredprofilesResponse =
  ListDiscoveredProfilesResponse;
export const ListProjectsLocationsDiscoveredprofilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListDiscoveredProfilesResponse;

export type ListProjectsLocationsDiscoveredprofilesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List discovered workload profiles */
export const listProjectsLocationsDiscoveredprofiles: API.PaginatedOperationMethod<
  ListProjectsLocationsDiscoveredprofilesRequest,
  ListProjectsLocationsDiscoveredprofilesResponse,
  ListProjectsLocationsDiscoveredprofilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsDiscoveredprofilesRequest,
  output: ListProjectsLocationsDiscoveredprofilesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsDiscoveredprofilesRequest {
  /** Required. Name of the resource */
  name: string;
}

export const GetProjectsLocationsDiscoveredprofilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsDiscoveredprofilesRequest>;

export type GetProjectsLocationsDiscoveredprofilesResponse = WorkloadProfile;
export const GetProjectsLocationsDiscoveredprofilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ WorkloadProfile;

export type GetProjectsLocationsDiscoveredprofilesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a discovered workload profile. */
export const getProjectsLocationsDiscoveredprofiles: API.OperationMethod<
  GetProjectsLocationsDiscoveredprofilesRequest,
  GetProjectsLocationsDiscoveredprofilesResponse,
  GetProjectsLocationsDiscoveredprofilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsDiscoveredprofilesRequest,
  output: GetProjectsLocationsDiscoveredprofilesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsDiscoveredprofilesHealthRequest {
  /** Required. The resource name */
  name: string;
}

export const GetProjectsLocationsDiscoveredprofilesHealthRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsDiscoveredprofilesHealthRequest>;

export type GetProjectsLocationsDiscoveredprofilesHealthResponse =
  WorkloadProfileHealth;
export const GetProjectsLocationsDiscoveredprofilesHealthResponse =
  /*@__PURE__*/ /*#__PURE__*/ WorkloadProfileHealth;

export type GetProjectsLocationsDiscoveredprofilesHealthError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get the health of a discovered workload profile. */
export const getProjectsLocationsDiscoveredprofilesHealth: API.OperationMethod<
  GetProjectsLocationsDiscoveredprofilesHealthRequest,
  GetProjectsLocationsDiscoveredprofilesHealthResponse,
  GetProjectsLocationsDiscoveredprofilesHealthError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsDiscoveredprofilesHealthRequest,
  output: GetProjectsLocationsDiscoveredprofilesHealthResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsOperationsRequest {
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list page size. */
  pageSize?: number;
  /** The standard list filter. */
  filter?: string;
  /** The standard list page token. */
  pageToken?: string;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
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

export interface WriteInsightProjectsLocationsInsightsRequest {
  /** Required. The GCP location. The format is: projects/{project}/locations/{location}. */
  location: string;
  /** Request body */
  body?: WriteInsightRequest;
}

export const WriteInsightProjectsLocationsInsightsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.String.pipe(T.HttpPath("location")),
    body: Schema.optional(WriteInsightRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+location}/insights:writeInsight",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<WriteInsightProjectsLocationsInsightsRequest>;

export type WriteInsightProjectsLocationsInsightsResponse =
  WriteInsightResponse;
export const WriteInsightProjectsLocationsInsightsResponse =
  /*@__PURE__*/ /*#__PURE__*/ WriteInsightResponse;

export type WriteInsightProjectsLocationsInsightsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Write the data insights to workload manager data warehouse. */
export const writeInsightProjectsLocationsInsights: API.OperationMethod<
  WriteInsightProjectsLocationsInsightsRequest,
  WriteInsightProjectsLocationsInsightsResponse,
  WriteInsightProjectsLocationsInsightsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: WriteInsightProjectsLocationsInsightsRequest,
  output: WriteInsightProjectsLocationsInsightsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsInsightsRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The system id of the SAP system resource to delete. Formatted as projects/{project}/locations/{location}/sapSystems/{sap_system_id} */
  name: string;
}

export const DeleteProjectsLocationsInsightsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsInsightsRequest>;

export type DeleteProjectsLocationsInsightsResponse = Empty;
export const DeleteProjectsLocationsInsightsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsInsightsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete the data insights from workload manager data warehouse. */
export const deleteProjectsLocationsInsights: API.OperationMethod<
  DeleteProjectsLocationsInsightsRequest,
  DeleteProjectsLocationsInsightsResponse,
  DeleteProjectsLocationsInsightsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsInsightsRequest,
  output: DeleteProjectsLocationsInsightsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
