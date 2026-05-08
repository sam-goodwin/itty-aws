// ==========================================================================
// Cloud Filestore API (file v1)
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
  name: "file",
  version: "v1",
  rootUrl: "https://file.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface ResumeReplicaRequest {}

export const ResumeReplicaRequest: Schema.Schema<ResumeReplicaRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "ResumeReplicaRequest",
  });

export interface OperationMetadata {
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. Human-readable status of the operation, if any. */
  statusDetail?: string;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have google.longrunning.Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`. */
  cancelRequested?: boolean;
}

export const OperationMetadata: Schema.Schema<OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    verb: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    statusDetail: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    cancelRequested: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "OperationMetadata" });

export interface GoogleCloudSaasacceleratorManagementProvidersV1ProvisionedResource {
  /** Type of the resource. This can be either a GCP resource or a custom one (e.g. another cloud provider's VM). For GCP compute resources use singular form of the names listed in GCP compute API documentation (https://cloud.google.com/compute/docs/reference/rest/v1/), prefixed with 'compute-', for example: 'compute-instance', 'compute-disk', 'compute-autoscaler'. */
  resourceType?: string;
  /** URL identifying the resource, e.g. "https://www.googleapis.com/compute/v1/projects/...)". */
  resourceUrl?: string;
}

export const GoogleCloudSaasacceleratorManagementProvidersV1ProvisionedResource: Schema.Schema<GoogleCloudSaasacceleratorManagementProvidersV1ProvisionedResource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceType: Schema.optional(Schema.String),
    resourceUrl: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudSaasacceleratorManagementProvidersV1ProvisionedResource",
  });

export interface CancelOperationRequest {}

export const CancelOperationRequest: Schema.Schema<CancelOperationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelOperationRequest",
  });

export interface NfsExportOptions {
  /** Either READ_ONLY, for allowing only read requests on the exported directory, or READ_WRITE, for allowing both read and write requests. The default is READ_WRITE. */
  accessMode?:
    | "ACCESS_MODE_UNSPECIFIED"
    | "READ_ONLY"
    | "READ_WRITE"
    | (string & {});
  /** An integer representing the anonymous user id with a default value of 65534. Anon_uid may only be set with squash_mode of ROOT_SQUASH. An error will be returned if this field is specified for other squash_mode settings. */
  anonUid?: string;
  /** List of either an IPv4 addresses in the format `{octet1}.{octet2}.{octet3}.{octet4}` or CIDR ranges in the format `{octet1}.{octet2}.{octet3}.{octet4}/{mask size}` which may mount the file share. Overlapping IP ranges are not allowed, both within and across NfsExportOptions. An error will be returned. The limit is 64 IP ranges/addresses for each FileShareConfig among all NfsExportOptions. */
  ipRanges?: ReadonlyArray<string>;
  /** Optional. The source VPC network for ip_ranges. Required for instances using Private Service Connect, optional otherwise. If provided, must be the same network specified in the `NetworkConfig.network` field. */
  network?: string;
  /** Either NO_ROOT_SQUASH, for allowing root access on the exported directory, or ROOT_SQUASH, for not allowing root access. The default is NO_ROOT_SQUASH. */
  squashMode?:
    | "SQUASH_MODE_UNSPECIFIED"
    | "NO_ROOT_SQUASH"
    | "ROOT_SQUASH"
    | (string & {});
  /** An integer representing the anonymous group id with a default value of 65534. Anon_gid may only be set with squash_mode of ROOT_SQUASH. An error will be returned if this field is specified for other squash_mode settings. */
  anonGid?: string;
}

export const NfsExportOptions: Schema.Schema<NfsExportOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accessMode: Schema.optional(Schema.String),
    anonUid: Schema.optional(Schema.String),
    ipRanges: Schema.optional(Schema.Array(Schema.String)),
    network: Schema.optional(Schema.String),
    squashMode: Schema.optional(Schema.String),
    anonGid: Schema.optional(Schema.String),
  }).annotate({ identifier: "NfsExportOptions" });

export interface FileShareConfig {
  /** Nfs Export Options. There is a limit of 10 export options per file share. */
  nfsExportOptions?: ReadonlyArray<NfsExportOptions>;
  /** The resource name of the backup, in the format `projects/{project_number}/locations/{location_id}/backups/{backup_id}`, that this file share has been restored from. */
  sourceBackup?: string;
  /** Required. The name of the file share. Must use 1-16 characters for the basic service tier and 1-63 characters for all other service tiers. Must use lowercase letters, numbers, or underscores `[a-z0-9_]`. Must start with a letter. Immutable. */
  name?: string;
  /** The resource name of the BackupDR backup, in the format `projects/{project_id}/locations/{location_id}/backupVaults/{backupvault_id}/dataSources/{datasource_id}/backups/{backup_id}`, */
  sourceBackupdrBackup?: string;
  /** File share capacity in gigabytes (GB). Filestore defines 1 GB as 1024^3 bytes. */
  capacityGb?: string;
}

export const FileShareConfig: Schema.Schema<FileShareConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nfsExportOptions: Schema.optional(Schema.Array(NfsExportOptions)),
    sourceBackup: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    sourceBackupdrBackup: Schema.optional(Schema.String),
    capacityGb: Schema.optional(Schema.String),
  }).annotate({ identifier: "FileShareConfig" });

export interface Location {
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
}

export const Location: Schema.Schema<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locationId: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
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

export interface LdapConfig {
  /** Optional. The users Organizational Unit (OU) is optional. This parameter is a hint to allow faster lookup in the LDAP namespace. In case that this parameter is not provided, Filestore instance will query the whole LDAP namespace. */
  usersOu?: string;
  /** Required. The servers names are used for specifying the LDAP servers names. The LDAP servers names can come with two formats: 1. DNS name, for example: `ldap.example1.com`, `ldap.example2.com`. 2. IP address, for example: `10.0.0.1`, `10.0.0.2`, `10.0.0.3`. All servers names must be in the same format: either all DNS names or all IP addresses. */
  servers?: ReadonlyArray<string>;
  /** Optional. The groups Organizational Unit (OU) is optional. This parameter is a hint to allow faster lookup in the LDAP namespace. In case that this parameter is not provided, Filestore instance will query the whole LDAP namespace. */
  groupsOu?: string;
  /** Required. The LDAP domain name in the format of `my-domain.com`. */
  domain?: string;
}

export const LdapConfig: Schema.Schema<LdapConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    usersOu: Schema.optional(Schema.String),
    servers: Schema.optional(Schema.Array(Schema.String)),
    groupsOu: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
  }).annotate({ identifier: "LdapConfig" });

export interface TimeOfDay {
  /** Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59. */
  minutes?: number;
  /** Seconds of a minute. Must be greater than or equal to 0 and typically must be less than or equal to 59. An API may allow the value 60 if it allows leap-seconds. */
  seconds?: number;
  /** Hours of a day in 24 hour format. Must be greater than or equal to 0 and typically must be less than or equal to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time. */
  hours?: number;
  /** Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999. */
  nanos?: number;
}

export const TimeOfDay: Schema.Schema<TimeOfDay> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minutes: Schema.optional(Schema.Number),
    seconds: Schema.optional(Schema.Number),
    hours: Schema.optional(Schema.Number),
    nanos: Schema.optional(Schema.Number),
  }).annotate({ identifier: "TimeOfDay" });

export interface Schedule {
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
  /** Time within the window to start the operations. */
  startTime?: TimeOfDay;
  /** Output only. Duration of the time window, set by service producer. */
  duration?: string;
}

export const Schedule: Schema.Schema<Schedule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    day: Schema.optional(Schema.String),
    startTime: Schema.optional(TimeOfDay),
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

export interface DailyCycle {
  /** Output only. Duration of the time window, set by service producer. */
  duration?: string;
  /** Time within the day to start the operations. */
  startTime?: TimeOfDay;
}

export const DailyCycle: Schema.Schema<DailyCycle> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    duration: Schema.optional(Schema.String),
    startTime: Schema.optional(TimeOfDay),
  }).annotate({ identifier: "DailyCycle" });

export interface MaintenanceWindow {
  /** Weekly cycle. */
  weeklyCycle?: WeeklyCycle;
  /** Daily cycle. */
  dailyCycle?: DailyCycle;
}

export const MaintenanceWindow: Schema.Schema<MaintenanceWindow> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    weeklyCycle: Schema.optional(WeeklyCycle),
    dailyCycle: Schema.optional(DailyCycle),
  }).annotate({ identifier: "MaintenanceWindow" });

export interface File_Date {
  /** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
  month?: number;
  /** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
  day?: number;
  /** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
  year?: number;
}

export const File_Date: Schema.Schema<File_Date> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    month: Schema.optional(Schema.Number),
    day: Schema.optional(Schema.Number),
    year: Schema.optional(Schema.Number),
  }).annotate({ identifier: "File_Date" });

export interface DenyMaintenancePeriod {
  /** Deny period start date. This can be: * A full date, with non-zero year, month and day values. * A month and day value, with a zero year. Allows recurring deny periods each year. Date matching this period will have to be the same or after the start. */
  startDate?: File_Date;
  /** Deny period end date. This can be: * A full date, with non-zero year, month and day values. * A month and day value, with a zero year. Allows recurring deny periods each year. Date matching this period will have to be before the end. */
  endDate?: File_Date;
  /** Time in UTC when the Blackout period starts on start_date and ends on end_date. This can be: * Full time. * All zeros for 00:00:00 UTC */
  time?: TimeOfDay;
}

export const DenyMaintenancePeriod: Schema.Schema<DenyMaintenancePeriod> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startDate: Schema.optional(File_Date),
    endDate: Schema.optional(File_Date),
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

export interface MaintenancePolicy {
  /** Optional. Description of what this policy is for. Create/Update methods return INVALID_ARGUMENT if the length is greater than 512. */
  description?: string;
  /** Optional. The state of the policy. */
  state?: "STATE_UNSPECIFIED" | "READY" | "DELETING" | (string & {});
  /** Maintenance policy applicable to instance update. */
  updatePolicy?: UpdatePolicy;
  /** Required. MaintenancePolicy name using the form: `projects/{project_id}/locations/{location_id}/maintenancePolicies/{maintenance_policy_id}` where {project_id} refers to a GCP consumer project ID, {location_id} refers to a GCP region/zone, {maintenance_policy_id} must be 1-63 characters long and match the regular expression `[a-z0-9]([-a-z0-9]*[a-z0-9])?`. */
  name?: string;
  /** Output only. The time when the resource was created. */
  createTime?: string;
  /** Output only. The time when the resource was updated. */
  updateTime?: string;
  /** Optional. Resource labels to represent user provided metadata. Each label is a key-value pair, where both the key and the value are arbitrary strings provided by the user. */
  labels?: Record<string, string>;
}

export const MaintenancePolicy: Schema.Schema<MaintenancePolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    updatePolicy: Schema.optional(UpdatePolicy),
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "MaintenancePolicy" });

export interface PscConfig {
  /** Optional. Consumer service project in which the Private Service Connect endpoint would be set up. This is optional, and only relevant in case the network is a shared VPC. If this is not specified, the endpoint would be setup in the VPC host project. */
  endpointProject?: string;
}

export const PscConfig: Schema.Schema<PscConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endpointProject: Schema.optional(Schema.String),
  }).annotate({ identifier: "PscConfig" });

export interface PerformanceLimits {
  /** Output only. The maximum read throughput in bytes per second. */
  maxReadThroughputBps?: string;
  /** Output only. The maximum write throughput in bytes per second. */
  maxWriteThroughputBps?: string;
  /** Output only. The maximum write IOPS. */
  maxWriteIops?: string;
  /** Output only. The maximum read IOPS. */
  maxReadIops?: string;
  /** Output only. The maximum IOPS. */
  maxIops?: string;
}

export const PerformanceLimits: Schema.Schema<PerformanceLimits> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxReadThroughputBps: Schema.optional(Schema.String),
    maxWriteThroughputBps: Schema.optional(Schema.String),
    maxWriteIops: Schema.optional(Schema.String),
    maxReadIops: Schema.optional(Schema.String),
    maxIops: Schema.optional(Schema.String),
  }).annotate({ identifier: "PerformanceLimits" });

export interface NetworkConfig {
  /** Internet protocol versions for which the instance has IP addresses assigned. */
  modes?: ReadonlyArray<
    "ADDRESS_MODE_UNSPECIFIED" | "MODE_IPV4" | "MODE_IPV6" | (string & {})
  >;
  /** The name of the Google Compute Engine [VPC network](https://cloud.google.com/vpc/docs/vpc) to which the instance is connected. */
  network?: string;
  /** Output only. IPv4 addresses in the format `{octet1}.{octet2}.{octet3}.{octet4}` or IPv6 addresses in the format `{block1}:{block2}:{block3}:{block4}:{block5}:{block6}:{block7}:{block8}`. */
  ipAddresses?: ReadonlyArray<string>;
  /** Optional, reserved_ip_range can have one of the following two types of values. * CIDR range value when using DIRECT_PEERING connect mode. * [Allocated IP address range](https://cloud.google.com/compute/docs/ip-addresses/reserve-static-internal-ip-address) when using PRIVATE_SERVICE_ACCESS connect mode. When the name of an allocated IP address range is specified, it must be one of the ranges associated with the private service access connection. When specified as a direct CIDR value, it must be a /29 CIDR block for Basic tier, a /24 CIDR block for High Scale tier, or a /26 CIDR block for Enterprise tier in one of the [internal IP address ranges](https://www.arin.net/reference/research/statistics/address_filters/) that identifies the range of IP addresses reserved for this instance. For example, 10.0.0.0/29, 192.168.0.0/24 or 192.168.0.0/26, respectively. The range you specify can't overlap with either existing subnets or assigned IP address ranges for other Filestore instances in the selected VPC network. */
  reservedIpRange?: string;
  /** Optional. Private Service Connect configuration. Should only be set when connect_mode is PRIVATE_SERVICE_CONNECT. */
  pscConfig?: PscConfig;
  /** The network connect mode of the Filestore instance. If not provided, the connect mode defaults to DIRECT_PEERING. */
  connectMode?:
    | "CONNECT_MODE_UNSPECIFIED"
    | "DIRECT_PEERING"
    | "PRIVATE_SERVICE_ACCESS"
    | "PRIVATE_SERVICE_CONNECT"
    | (string & {});
}

export const NetworkConfig: Schema.Schema<NetworkConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    modes: Schema.optional(Schema.Array(Schema.String)),
    network: Schema.optional(Schema.String),
    ipAddresses: Schema.optional(Schema.Array(Schema.String)),
    reservedIpRange: Schema.optional(Schema.String),
    pscConfig: Schema.optional(PscConfig),
    connectMode: Schema.optional(Schema.String),
  }).annotate({ identifier: "NetworkConfig" });

export interface PauseReplicaRequest {}

export const PauseReplicaRequest: Schema.Schema<PauseReplicaRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "PauseReplicaRequest",
  });

export interface RevertInstanceRequest {
  /** Required. The snapshot resource ID, in the format 'my-snapshot', where the specified ID is the {snapshot_id} of the fully qualified name like `projects/{project_id}/locations/{location_id}/instances/{instance_id}/snapshots/{snapshot_id}` */
  targetSnapshotId?: string;
}

export const RevertInstanceRequest: Schema.Schema<RevertInstanceRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targetSnapshotId: Schema.optional(Schema.String),
  }).annotate({ identifier: "RevertInstanceRequest" });

export interface FixedIOPS {
  /** Required. Maximum IOPS. */
  maxIops?: string;
}

export const FixedIOPS: Schema.Schema<FixedIOPS> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxIops: Schema.optional(Schema.String),
  }).annotate({ identifier: "FixedIOPS" });

export interface Backup {
  /** Optional. Input only. Immutable. Tag key-value pairs bound to this resource. Each key must be a namespaced name and each value a short name. Example: "123456789012/environment" : "production", "123456789013/costCenter" : "marketing" See the documentation for more information: - Namespaced name: https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing#retrieving_tag_key - Short name: https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing#retrieving_tag_value */
  tags?: Record<string, string>;
  /** A description of the backup with 2048 characters or less. Requests with longer descriptions will be rejected. */
  description?: string;
  /** Output only. The size of the storage used by the backup. As backups share storage, this number is expected to change with backup creation/deletion. */
  storageBytes?: string;
  /** Output only. Capacity of the source file share when the backup was created. */
  capacityGb?: string;
  /** Output only. Reserved for future use. */
  satisfiesPzi?: boolean;
  /** Output only. The resource name of the backup, in the format `projects/{project_number}/locations/{location_id}/backups/{backup_id}`. */
  name?: string;
  /** Resource labels to represent user provided metadata. */
  labels?: Record<string, string>;
  /** The resource name of the source Filestore instance, in the format `projects/{project_number}/locations/{location_id}/instances/{instance_id}`, used to create this backup. */
  sourceInstance?: string;
  /** Name of the file share in the source Filestore instance that the backup is created from. */
  sourceFileShare?: string;
  /** Output only. Reserved for future use. */
  satisfiesPzs?: boolean;
  /** Output only. The file system protocol of the source Filestore instance that this backup is created from. */
  fileSystemProtocol?:
    | "FILE_PROTOCOL_UNSPECIFIED"
    | "NFS_V3"
    | "NFS_V4_1"
    | (string & {});
  /** Output only. The backup state. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "FINALIZING"
    | "READY"
    | "DELETING"
    | "INVALID"
    | (string & {});
  /** Output only. The service tier of the source Filestore instance that this backup is created from. */
  sourceInstanceTier?:
    | "TIER_UNSPECIFIED"
    | "STANDARD"
    | "PREMIUM"
    | "BASIC_HDD"
    | "BASIC_SSD"
    | "HIGH_SCALE_SSD"
    | "ENTERPRISE"
    | "ZONAL"
    | "REGIONAL"
    | (string & {});
  /** Output only. The time when the backup was created. */
  createTime?: string;
  /** Output only. Amount of bytes that will be downloaded if the backup is restored. This may be different than storage bytes, since sequential backups of the same disk will share storage. */
  downloadBytes?: string;
  /** Immutable. KMS key name used for data encryption. */
  kmsKey?: string;
}

export const Backup: Schema.Schema<Backup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    description: Schema.optional(Schema.String),
    storageBytes: Schema.optional(Schema.String),
    capacityGb: Schema.optional(Schema.String),
    satisfiesPzi: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    sourceInstance: Schema.optional(Schema.String),
    sourceFileShare: Schema.optional(Schema.String),
    satisfiesPzs: Schema.optional(Schema.Boolean),
    fileSystemProtocol: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    sourceInstanceTier: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    downloadBytes: Schema.optional(Schema.String),
    kmsKey: Schema.optional(Schema.String),
  }).annotate({ identifier: "Backup" });

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
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    done: Schema.optional(Schema.Boolean),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
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

export interface ReplicaConfig {
  /** Output only. Additional information about the replication state, if available. */
  stateReasons?: ReadonlyArray<
    | "STATE_REASON_UNSPECIFIED"
    | "PEER_INSTANCE_UNREACHABLE"
    | "REMOVE_FAILED"
    | "PAUSE_FAILED"
    | "RESUME_FAILED"
    | (string & {})
  >;
  /** Output only. The timestamp of the latest replication snapshot taken on the active instance and is already replicated safely. */
  lastActiveSyncTime?: string;
  /** Output only. The replica state. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "READY"
    | "REMOVING"
    | "FAILED"
    | "PROMOTING"
    | "PAUSING"
    | "PAUSED"
    | "RESUMING"
    | (string & {});
  /** Output only. The time when the replica state was updated. */
  stateUpdateTime?: string;
  /** Optional. The name of the source instance for the replica, in the format `projects/{project}/locations/{location}/instances/{instance}`. This field is required when creating a replica. */
  peerInstance?: string;
}

export const ReplicaConfig: Schema.Schema<ReplicaConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    stateReasons: Schema.optional(Schema.Array(Schema.String)),
    lastActiveSyncTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    stateUpdateTime: Schema.optional(Schema.String),
    peerInstance: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReplicaConfig" });

export interface Replication {
  /** Optional. The replication role. When creating a new replica, this field must be set to `STANDBY`. */
  role?: "ROLE_UNSPECIFIED" | "ACTIVE" | "STANDBY" | (string & {});
  /** Optional. Replication configuration for the replica instance associated with this instance. Only a single replica is supported. */
  replicas?: ReadonlyArray<ReplicaConfig>;
}

export const Replication: Schema.Schema<Replication> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    role: Schema.optional(Schema.String),
    replicas: Schema.optional(Schema.Array(ReplicaConfig)),
  }).annotate({ identifier: "Replication" });

export interface GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSchedule {
  /** The scheduled start time for the maintenance. */
  startTime?: string;
  /** The rollout management policy this maintenance schedule is associated with. When doing reschedule update request, the reschedule should be against this given policy. */
  rolloutManagementPolicy?: string;
  /** The scheduled end time for the maintenance. */
  endTime?: string;
  /** schedule_deadline_time is the time deadline any schedule start time cannot go beyond, including reschedule. It's normally the initial schedule start time plus maintenance window length (1 day or 1 week). Maintenance cannot be scheduled to start beyond this deadline. */
  scheduleDeadlineTime?: string;
  /** This field is deprecated, and will be always set to true since reschedule can happen multiple times now. This field should not be removed until all service producers remove this for their customers. */
  canReschedule?: boolean;
}

export const GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSchedule: Schema.Schema<GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSchedule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
    rolloutManagementPolicy: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    scheduleDeadlineTime: Schema.optional(Schema.String),
    canReschedule: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier:
      "GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSchedule",
  });

export interface GoogleCloudSaasacceleratorManagementProvidersV1SloEligibility {
  /** Whether an instance is eligible or ineligible. */
  eligible?: boolean;
  /** User-defined reason for the current value of instance eligibility. Usually, this can be directly mapped to the internal state. An empty reason is allowed. */
  reason?: string;
}

export const GoogleCloudSaasacceleratorManagementProvidersV1SloEligibility: Schema.Schema<GoogleCloudSaasacceleratorManagementProvidersV1SloEligibility> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eligible: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSaasacceleratorManagementProvidersV1SloEligibility",
  });

export interface GoogleCloudSaasacceleratorManagementProvidersV1PerSliSloEligibility {
  /** An entry in the eligibilities map specifies an eligibility for a particular SLI for the given instance. The SLI key in the name must be a valid SLI name specified in the Eligibility Exporter binary flags otherwise an error will be emitted by Eligibility Exporter and the oncaller will be alerted. If an SLI has been defined in the binary flags but the eligibilities map does not contain it, the corresponding SLI time series will not be emitted by the Eligibility Exporter. This ensures a smooth rollout and compatibility between the data produced by different versions of the Eligibility Exporters. If eligibilities map contains a key for an SLI which has not been declared in the binary flags, there will be an error message emitted in the Eligibility Exporter log and the metric for the SLI in question will not be emitted. */
  eligibilities?: Record<
    string,
    GoogleCloudSaasacceleratorManagementProvidersV1SloEligibility
  >;
}

export const GoogleCloudSaasacceleratorManagementProvidersV1PerSliSloEligibility: Schema.Schema<GoogleCloudSaasacceleratorManagementProvidersV1PerSliSloEligibility> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eligibilities: Schema.optional(
      Schema.Record(
        Schema.String,
        GoogleCloudSaasacceleratorManagementProvidersV1SloEligibility,
      ),
    ),
  }).annotate({
    identifier:
      "GoogleCloudSaasacceleratorManagementProvidersV1PerSliSloEligibility",
  });

export interface GoogleCloudSaasacceleratorManagementProvidersV1NodeSloMetadata {
  /** The id of the node. This should be equal to SaasInstanceNode.node_id. */
  nodeId?: string;
  /** The location of the node, if different from instance location. */
  location?: string;
  /** If present, this will override eligibility for the node coming from instance or exclusions for specified SLIs. */
  perSliEligibility?: GoogleCloudSaasacceleratorManagementProvidersV1PerSliSloEligibility;
}

export const GoogleCloudSaasacceleratorManagementProvidersV1NodeSloMetadata: Schema.Schema<GoogleCloudSaasacceleratorManagementProvidersV1NodeSloMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodeId: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    perSliEligibility: Schema.optional(
      GoogleCloudSaasacceleratorManagementProvidersV1PerSliSloEligibility,
    ),
  }).annotate({
    identifier:
      "GoogleCloudSaasacceleratorManagementProvidersV1NodeSloMetadata",
  });

export interface GoogleCloudSaasacceleratorManagementProvidersV1SloMetadata {
  /** Name of the SLO tier the Instance belongs to. This name will be expected to match the tiers specified in the service SLO configuration. Field is mandatory and must not be empty. */
  tier?: string;
  /** Optional. List of nodes. Some producers need to use per-node metadata to calculate SLO. This field allows such producers to publish per-node SLO meta data, which will be consumed by SSA Eligibility Exporter and published in the form of per node metric to Monarch. */
  nodes?: ReadonlyArray<GoogleCloudSaasacceleratorManagementProvidersV1NodeSloMetadata>;
  /** Optional. Multiple per-instance SLI eligibilities which apply for individual SLIs. */
  perSliEligibility?: GoogleCloudSaasacceleratorManagementProvidersV1PerSliSloEligibility;
}

export const GoogleCloudSaasacceleratorManagementProvidersV1SloMetadata: Schema.Schema<GoogleCloudSaasacceleratorManagementProvidersV1SloMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tier: Schema.optional(Schema.String),
    nodes: Schema.optional(
      Schema.Array(
        GoogleCloudSaasacceleratorManagementProvidersV1NodeSloMetadata,
      ),
    ),
    perSliEligibility: Schema.optional(
      GoogleCloudSaasacceleratorManagementProvidersV1PerSliSloEligibility,
    ),
  }).annotate({
    identifier: "GoogleCloudSaasacceleratorManagementProvidersV1SloMetadata",
  });

export interface GoogleCloudSaasacceleratorManagementProvidersV1NotificationParameter {
  /** Optional. Array of string values. e.g. instance's replica information. */
  values?: ReadonlyArray<string>;
}

export const GoogleCloudSaasacceleratorManagementProvidersV1NotificationParameter: Schema.Schema<GoogleCloudSaasacceleratorManagementProvidersV1NotificationParameter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    values: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier:
      "GoogleCloudSaasacceleratorManagementProvidersV1NotificationParameter",
  });

export interface GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSettings {
  /** Optional. The MaintenancePolicies that have been attached to the instance. The key must be of the type name of the oneof policy name defined in MaintenancePolicy, and the embedded policy must define the same policy type. For details, please refer to go/mr-user-guide. Should not be set if maintenance_policy_names is set. If only the name is needed, then only populate MaintenancePolicy.name. */
  maintenancePolicies?: Record<string, MaintenancePolicy>;
  /** Optional. Exclude instance from maintenance. When true, rollout service will not attempt maintenance on the instance. Rollout service will include the instance in reported rollout progress as not attempted. */
  exclude?: boolean;
  /** Optional. If the update call is triggered from rollback, set the value as true. */
  isRollback?: boolean;
}

export const GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSettings: Schema.Schema<GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maintenancePolicies: Schema.optional(
      Schema.Record(Schema.String, MaintenancePolicy),
    ),
    exclude: Schema.optional(Schema.Boolean),
    isRollback: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier:
      "GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSettings",
  });

export interface GoogleCloudSaasacceleratorManagementProvidersV1Instance {
  /** Output only. SLO metadata for instance classification in the Standardized dataplane SLO platform. See go/cloud-ssa-standard-slo for feature description. */
  sloMetadata?: GoogleCloudSaasacceleratorManagementProvidersV1SloMetadata;
  /** Software versions that are used to deploy this instance. This can be mutated by rollout services. */
  softwareVersions?: Record<string, string>;
  /** consumer_defined_name is the name of the instance set by the service consumers. Generally this is different from the `name` field which reperesents the system-assigned id of the instance which the service consumers do not recognize. This is a required field for tenants onboarding to Maintenance Window notifications (go/slm-rollout-maintenance-policies#prerequisites). */
  consumerDefinedName?: string;
  /** Optional. The consumer_project_number associated with this Apigee instance. This field is added specifically to support Apigee integration with SLM Rollout and UMM. It represents the numerical project ID of the GCP project that consumes this Apigee instance. It is used for SLM rollout notifications and UMM integration, enabling proper mapping to customer projects and log delivery for Apigee instances. This field complements consumer_project_id and may be used for specific Apigee scenarios where the numerical ID is required. */
  consumerProjectNumber?: string;
  /** Optional. Resource labels to represent user provided metadata. Each label is a key-value pair, where both the key and the value are arbitrary strings provided by the user. */
  labels?: Record<string, string>;
  /** Output only. The list of data plane resources provisioned for this instance, e.g. compute VMs. See go/get-instance-metadata. */
  provisionedResources?: ReadonlyArray<GoogleCloudSaasacceleratorManagementProvidersV1ProvisionedResource>;
  /** Optional. The instance_type of this instance of format: projects/{project_number}/locations/{location_id}/instanceTypes/{instance_type_id}. Instance Type represents a high-level tier or SKU of the service that this instance belong to. When enabled(eg: Maintenance Rollout), Rollout uses 'instance_type' along with 'software_versions' to determine whether instance needs an update or not. */
  instanceType?: string;
  /** Unique name of the resource. It uses the form: `projects/{project_number}/locations/{location_id}/instances/{instance_id}` Note: This name is passed, stored and logged across the rollout system. So use of consumer project_id or any other consumer PII in the name is strongly discouraged for wipeout (go/wipeout) compliance. See go/elysium/project_ids#storage-guidance for more details. */
  name?: string;
  /** Output only. Custom string attributes used primarily to expose producer-specific information in monitoring dashboards. See go/get-instance-metadata. */
  producerMetadata?: Record<string, string>;
  /** The MaintenanceSchedule contains the scheduling information of published maintenance schedule with same key as software_versions. */
  maintenanceSchedules?: Record<
    string,
    GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSchedule
  >;
  /** Optional. The MaintenancePolicies that have been attached to the instance. The key must be of the type name of the oneof policy name defined in MaintenancePolicy, and the referenced policy must define the same policy type. For details, please refer to go/mr-user-guide. Should not be set if maintenance_settings.maintenance_policies is set. */
  maintenancePolicyNames?: Record<string, string>;
  /** Link to the SLM instance template. Only populated when updating SLM instances via SSA's Actuation service adaptor. Service producers with custom control plane (e.g. Cloud SQL) doesn't need to populate this field. Instead they should use software_versions. */
  slmInstanceTemplate?: string;
  /** Output only. Timestamp when the resource was last modified. */
  updateTime?: string;
  /** Output only. ID of the associated GCP tenant project. See go/get-instance-metadata. */
  tenantProjectId?: string;
  /** Optional. notification_parameter are information that service producers may like to include that is not relevant to Rollout. This parameter will only be passed to Gamma and Cloud Logging for notification/logging purpose. */
  notificationParameters?: Record<
    string,
    GoogleCloudSaasacceleratorManagementProvidersV1NotificationParameter
  >;
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
  /** Optional. The MaintenanceSettings associated with instance. */
  maintenanceSettings?: GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSettings;
  /** Output only. Timestamp when the resource was created. */
  createTime?: string;
}

export const GoogleCloudSaasacceleratorManagementProvidersV1Instance: Schema.Schema<GoogleCloudSaasacceleratorManagementProvidersV1Instance> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sloMetadata: Schema.optional(
      GoogleCloudSaasacceleratorManagementProvidersV1SloMetadata,
    ),
    softwareVersions: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    consumerDefinedName: Schema.optional(Schema.String),
    consumerProjectNumber: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    provisionedResources: Schema.optional(
      Schema.Array(
        GoogleCloudSaasacceleratorManagementProvidersV1ProvisionedResource,
      ),
    ),
    instanceType: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    producerMetadata: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    maintenanceSchedules: Schema.optional(
      Schema.Record(
        Schema.String,
        GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSchedule,
      ),
    ),
    maintenancePolicyNames: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    slmInstanceTemplate: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    tenantProjectId: Schema.optional(Schema.String),
    notificationParameters: Schema.optional(
      Schema.Record(
        Schema.String,
        GoogleCloudSaasacceleratorManagementProvidersV1NotificationParameter,
      ),
    ),
    state: Schema.optional(Schema.String),
    maintenanceSettings: Schema.optional(
      GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSettings,
    ),
    createTime: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudSaasacceleratorManagementProvidersV1Instance",
  });

export interface RestoreInstanceRequest {
  /** Required. Name of the file share in the Filestore instance that the backup is being restored to. */
  fileShare?: string;
  /** The resource name of the backup, in the format `projects/{project_number}/locations/{location_id}/backups/{backup_id}`. */
  sourceBackup?: string;
}

export const RestoreInstanceRequest: Schema.Schema<RestoreInstanceRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fileShare: Schema.optional(Schema.String),
    sourceBackup: Schema.optional(Schema.String),
  }).annotate({ identifier: "RestoreInstanceRequest" });

export interface IOPSPerTB {
  /** Required. Maximum IOPS per TiB. */
  maxIopsPerTb?: string;
}

export const IOPSPerTB: Schema.Schema<IOPSPerTB> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxIopsPerTb: Schema.optional(Schema.String),
  }).annotate({ identifier: "IOPSPerTB" });

export interface DirectoryServicesConfig {
  /** Configuration for LDAP servers. */
  ldap?: LdapConfig;
}

export const DirectoryServicesConfig: Schema.Schema<DirectoryServicesConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ldap: Schema.optional(LdapConfig),
  }).annotate({ identifier: "DirectoryServicesConfig" });

export interface PerformanceConfig {
  /** Provision IOPS dynamically based on the capacity of the instance. Provisioned IOPS will be calculated by multiplying the capacity of the instance in TiB by the `iops_per_tb` value. For example, for a 2 TiB instance with an `iops_per_tb` value of 17000 the provisioned IOPS will be 34000. If the calculated value is outside the supported range for the instance's capacity during instance creation, instance creation will fail with an `InvalidArgument` error. Similarly, if an instance capacity update would result in a value outside the supported range, the update will fail with an `InvalidArgument` error. */
  iopsPerTb?: IOPSPerTB;
  /** Choose a fixed provisioned IOPS value for the instance, which will remain constant regardless of instance capacity. Value must be a multiple of 1000. If the chosen value is outside the supported range for the instance's capacity during instance creation, instance creation will fail with an `InvalidArgument` error. Similarly, if an instance capacity update would result in a value outside the supported range, the update will fail with an `InvalidArgument` error. */
  fixedIops?: FixedIOPS;
}

export const PerformanceConfig: Schema.Schema<PerformanceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    iopsPerTb: Schema.optional(IOPSPerTB),
    fixedIops: Schema.optional(FixedIOPS),
  }).annotate({ identifier: "PerformanceConfig" });

export interface Instance {
  /** Output only. The resource name of the instance, in the format `projects/{project}/locations/{location}/instances/{instance}`. */
  name?: string;
  /** Optional. Directory Services configuration for Kerberos-based authentication. Should only be set if protocol is "NFS_V4_1". */
  directoryServices?: DirectoryServicesConfig;
  /** Resource labels to represent user provided metadata. */
  labels?: Record<string, string>;
  /** Output only. The incremental increase or decrease in capacity, designated in some number of GB. */
  capacityStepSizeGb?: string;
  /** Output only. Field indicates all the reasons the instance is in "SUSPENDED" state. */
  suspensionReasons?: ReadonlyArray<
    "SUSPENSION_REASON_UNSPECIFIED" | "KMS_KEY_ISSUE" | (string & {})
  >;
  /** Optional. Replication configuration. */
  replication?: Replication;
  /** Output only. The time when the instance was created. */
  createTime?: string;
  /** Output only. The minimum capacity of the instance in GB. */
  minCapacityGb?: string;
  /** KMS key name used for data encryption. */
  kmsKeyName?: string;
  /** Immutable. The protocol indicates the access protocol for all shares in the instance. This field is immutable and it cannot be changed after the instance has been created. Default value: `NFS_V3`. */
  protocol?:
    | "FILE_PROTOCOL_UNSPECIFIED"
    | "NFS_V3"
    | "NFS_V4_1"
    | (string & {});
  /** Optional. Indicates whether the instance is protected against deletion. */
  deletionProtectionEnabled?: boolean;
  /** Output only. Reserved for future use. */
  satisfiesPzi?: boolean;
  /** Optional. The reason for enabling deletion protection. */
  deletionProtectionReason?: string;
  /** Output only. Reserved for future use. */
  satisfiesPzs?: boolean;
  /** The description of the instance (2048 characters or less). */
  description?: string;
  /** Output only. Additional information about the instance state, if available. */
  statusMessage?: string;
  /** Output only. The maximum capacity of the instance in GB. */
  maxCapacityGb?: string;
  /** Optional. Input only. Immutable. Tag key-value pairs bound to this resource. Each key must be a namespaced name and each value a short name. Example: "123456789012/environment" : "production", "123456789013/costCenter" : "marketing" See the documentation for more information: - Namespaced name: https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing#retrieving_tag_key - Short name: https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing#retrieving_tag_value */
  tags?: Record<string, string>;
  /** Server-specified ETag for the instance resource to prevent simultaneous updates from overwriting each other. */
  etag?: string;
  /** VPC networks to which the instance is connected. For this version, only a single network is supported. */
  networks?: ReadonlyArray<NetworkConfig>;
  /** Optional. Used to configure performance. */
  performanceConfig?: PerformanceConfig;
  /** Output only. Used for getting performance limits. */
  performanceLimits?: PerformanceLimits;
  /** Output only. The instance state. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "READY"
    | "REPAIRING"
    | "DELETING"
    | "ERROR"
    | "RESTORING"
    | "SUSPENDED"
    | "SUSPENDING"
    | "RESUMING"
    | "REVERTING"
    | "PROMOTING"
    | (string & {});
  /** File system shares on the instance. For this version, only a single file share is supported. */
  fileShares?: ReadonlyArray<FileShareConfig>;
  /** The service tier of the instance. */
  tier?:
    | "TIER_UNSPECIFIED"
    | "STANDARD"
    | "PREMIUM"
    | "BASIC_HDD"
    | "BASIC_SSD"
    | "HIGH_SCALE_SSD"
    | "ENTERPRISE"
    | "ZONAL"
    | "REGIONAL"
    | (string & {});
  /** Output only. Indicates whether this instance supports configuring its performance. If true, the user can configure the instance's performance by using the 'performance_config' field. */
  customPerformanceSupported?: boolean;
}

export const Instance: Schema.Schema<Instance> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    directoryServices: Schema.optional(DirectoryServicesConfig),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    capacityStepSizeGb: Schema.optional(Schema.String),
    suspensionReasons: Schema.optional(Schema.Array(Schema.String)),
    replication: Schema.optional(Replication),
    createTime: Schema.optional(Schema.String),
    minCapacityGb: Schema.optional(Schema.String),
    kmsKeyName: Schema.optional(Schema.String),
    protocol: Schema.optional(Schema.String),
    deletionProtectionEnabled: Schema.optional(Schema.Boolean),
    satisfiesPzi: Schema.optional(Schema.Boolean),
    deletionProtectionReason: Schema.optional(Schema.String),
    satisfiesPzs: Schema.optional(Schema.Boolean),
    description: Schema.optional(Schema.String),
    statusMessage: Schema.optional(Schema.String),
    maxCapacityGb: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    networks: Schema.optional(Schema.Array(NetworkConfig)),
    performanceConfig: Schema.optional(PerformanceConfig),
    performanceLimits: Schema.optional(PerformanceLimits),
    state: Schema.optional(Schema.String),
    fileShares: Schema.optional(Schema.Array(FileShareConfig)),
    tier: Schema.optional(Schema.String),
    customPerformanceSupported: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "Instance" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface PromoteReplicaRequest {
  /** Optional. The resource name of the peer instance to promote, in the format `projects/{project_id}/locations/{location_id}/instances/{instance_id}`. The peer instance is required if the operation is called on an active instance. */
  peerInstance?: string;
}

export const PromoteReplicaRequest: Schema.Schema<PromoteReplicaRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    peerInstance: Schema.optional(Schema.String),
  }).annotate({ identifier: "PromoteReplicaRequest" });

export interface Snapshot {
  /** Resource labels to represent user provided metadata. */
  labels?: Record<string, string>;
  /** Output only. The amount of bytes needed to allocate a full copy of the snapshot content */
  filesystemUsedBytes?: string;
  /** Output only. The time when the snapshot was created. */
  createTime?: string;
  /** Output only. The resource name of the snapshot, in the format `projects/{project_id}/locations/{location_id}/instances/{instance_id}/snapshots/{snapshot_id}`. */
  name?: string;
  /** Output only. The snapshot state. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "READY"
    | "DELETING"
    | (string & {});
  /** Optional. Input only. Immutable. Tag key-value pairs bound to this resource. Each key must be a namespaced name and each value a short name. Example: "123456789012/environment" : "production", "123456789013/costCenter" : "marketing" See the documentation for more information: - Namespaced name: https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing#retrieving_tag_key - Short name: https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing#retrieving_tag_value */
  tags?: Record<string, string>;
  /** A description of the snapshot with 2048 characters or less. Requests with longer descriptions will be rejected. */
  description?: string;
}

export const Snapshot: Schema.Schema<Snapshot> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    filesystemUsedBytes: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "Snapshot" });

export interface ListSnapshotsResponse {
  /** The token you can use to retrieve the next page of results. Not returned if there are no more results in the list. */
  nextPageToken?: string;
  /** A list of snapshots in the project for the specified instance. */
  snapshots?: ReadonlyArray<Snapshot>;
  /** Unordered list. Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListSnapshotsResponse: Schema.Schema<ListSnapshotsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    snapshots: Schema.optional(Schema.Array(Snapshot)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListSnapshotsResponse" });

export interface ListBackupsResponse {
  /** Unordered list. Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The token you can use to retrieve the next page of results. Not returned if there are no more results in the list. */
  nextPageToken?: string;
  /** A list of backups in the project for the specified location. If the `{location}` value in the request is "-", the response contains a list of backups from all locations. If any location is unreachable, the response will only return backups in reachable locations and the "unreachable" field will be populated with a list of unreachable locations. */
  backups?: ReadonlyArray<Backup>;
}

export const ListBackupsResponse: Schema.Schema<ListBackupsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
    backups: Schema.optional(Schema.Array(Backup)),
  }).annotate({ identifier: "ListBackupsResponse" });

export interface ListInstancesResponse {
  /** Unordered list. Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The token you can use to retrieve the next page of results. Not returned if there are no more results in the list. */
  nextPageToken?: string;
  /** A list of instances in the project for the specified location. If the `{location}` value in the request is "-", the response contains a list of instances from all locations. If any location is unreachable, the response will only return instances in reachable locations and the "unreachable" field will be populated with a list of unreachable locations. */
  instances?: ReadonlyArray<Instance>;
}

export const ListInstancesResponse: Schema.Schema<ListInstancesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
    instances: Schema.optional(Schema.Array(Instance)),
  }).annotate({ identifier: "ListInstancesResponse" });

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
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
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

export interface ListProjectsLocationsOperationsRequest {
  /** The standard list filter. */
  filter?: string;
  /** The standard list page token. */
  pageToken?: string;
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list page size. */
  pageSize?: number;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
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

export interface PatchProjectsLocationsBackupsRequest {
  /** Output only. The resource name of the backup, in the format `projects/{project_number}/locations/{location_id}/backups/{backup_id}`. */
  name: string;
  /** Required. Mask of fields to update. At least one path must be supplied in this field. */
  updateMask?: string;
  /** Request body */
  body?: Backup;
}

export const PatchProjectsLocationsBackupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Backup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsBackupsRequest>;

export type PatchProjectsLocationsBackupsResponse = Operation;
export const PatchProjectsLocationsBackupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsBackupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the settings of a specific backup. */
export const patchProjectsLocationsBackups: API.OperationMethod<
  PatchProjectsLocationsBackupsRequest,
  PatchProjectsLocationsBackupsResponse,
  PatchProjectsLocationsBackupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsBackupsRequest,
  output: PatchProjectsLocationsBackupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsBackupsRequest {
  /** Required. The project and location for which to retrieve backup information, in the format `projects/{project_number}/locations/{location}`. In Filestore, backup locations map to Google Cloud regions, for example **us-west1**. To retrieve backup information for all locations, use "-" for the `{location}` value. */
  parent: string;
  /** The maximum number of items to return. */
  pageSize?: number;
  /** Sort results. Supported values are "name", "name desc" or "" (unsorted). */
  orderBy?: string;
  /** The next_page_token value to use if there are additional results to retrieve for this list request. */
  pageToken?: string;
  /** List filter. */
  filter?: string;
}

export const ListProjectsLocationsBackupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/backups" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsBackupsRequest>;

export type ListProjectsLocationsBackupsResponse = ListBackupsResponse;
export const ListProjectsLocationsBackupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListBackupsResponse;

export type ListProjectsLocationsBackupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all backups in a project for either a specified location or for all locations. */
export const listProjectsLocationsBackups: API.PaginatedOperationMethod<
  ListProjectsLocationsBackupsRequest,
  ListProjectsLocationsBackupsResponse,
  ListProjectsLocationsBackupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsBackupsRequest,
  output: ListProjectsLocationsBackupsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsBackupsRequest {
  /** Required. The backup's project and location, in the format `projects/{project_number}/locations/{location}`. In Filestore, backup locations map to Google Cloud regions, for example **us-west1**. */
  parent: string;
  /** Required. The ID to use for the backup. The ID must be unique within the specified project and location. This value must start with a lowercase letter followed by up to 62 lowercase letters, numbers, or hyphens, and cannot end with a hyphen. Values that do not match this pattern will trigger an INVALID_ARGUMENT error. */
  backupId?: string;
  /** Request body */
  body?: Backup;
}

export const CreateProjectsLocationsBackupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    backupId: Schema.optional(Schema.String).pipe(T.HttpQuery("backupId")),
    body: Schema.optional(Backup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/backups", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsBackupsRequest>;

export type CreateProjectsLocationsBackupsResponse = Operation;
export const CreateProjectsLocationsBackupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsBackupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a backup. */
export const createProjectsLocationsBackups: API.OperationMethod<
  CreateProjectsLocationsBackupsRequest,
  CreateProjectsLocationsBackupsResponse,
  CreateProjectsLocationsBackupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsBackupsRequest,
  output: CreateProjectsLocationsBackupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsBackupsRequest {
  /** Required. The backup resource name, in the format `projects/{project_number}/locations/{location}/backups/{backup_id}`. */
  name: string;
}

export const GetProjectsLocationsBackupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsBackupsRequest>;

export type GetProjectsLocationsBackupsResponse = Backup;
export const GetProjectsLocationsBackupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Backup;

export type GetProjectsLocationsBackupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the details of a specific backup. */
export const getProjectsLocationsBackups: API.OperationMethod<
  GetProjectsLocationsBackupsRequest,
  GetProjectsLocationsBackupsResponse,
  GetProjectsLocationsBackupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsBackupsRequest,
  output: GetProjectsLocationsBackupsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsBackupsRequest {
  /** Required. The backup resource name, in the format `projects/{project_number}/locations/{location}/backups/{backup_id}` */
  name: string;
}

export const DeleteProjectsLocationsBackupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsBackupsRequest>;

export type DeleteProjectsLocationsBackupsResponse = Operation;
export const DeleteProjectsLocationsBackupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsBackupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a backup. */
export const deleteProjectsLocationsBackups: API.OperationMethod<
  DeleteProjectsLocationsBackupsRequest,
  DeleteProjectsLocationsBackupsResponse,
  DeleteProjectsLocationsBackupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsBackupsRequest,
  output: DeleteProjectsLocationsBackupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RestoreProjectsLocationsInstancesRequest {
  /** Required. The resource name of the instance, in the format `projects/{project_number}/locations/{location_id}/instances/{instance_id}`. */
  name: string;
  /** Request body */
  body?: RestoreInstanceRequest;
}

export const RestoreProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(RestoreInstanceRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:restore", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<RestoreProjectsLocationsInstancesRequest>;

export type RestoreProjectsLocationsInstancesResponse = Operation;
export const RestoreProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type RestoreProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Restores an existing instance's file share from a backup. The capacity of the instance needs to be equal to or larger than the capacity of the backup (and also equal to or larger than the minimum capacity of the tier). */
export const restoreProjectsLocationsInstances: API.OperationMethod<
  RestoreProjectsLocationsInstancesRequest,
  RestoreProjectsLocationsInstancesResponse,
  RestoreProjectsLocationsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RestoreProjectsLocationsInstancesRequest,
  output: RestoreProjectsLocationsInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RevertProjectsLocationsInstancesRequest {
  /** Required. The resource name of the instance, in the format `projects/{project_id}/locations/{location_id}/instances/{instance_id}`. */
  name: string;
  /** Request body */
  body?: RevertInstanceRequest;
}

export const RevertProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(RevertInstanceRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:revert", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<RevertProjectsLocationsInstancesRequest>;

export type RevertProjectsLocationsInstancesResponse = Operation;
export const RevertProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type RevertProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Revert an existing instance's file system to a specified snapshot. */
export const revertProjectsLocationsInstances: API.OperationMethod<
  RevertProjectsLocationsInstancesRequest,
  RevertProjectsLocationsInstancesResponse,
  RevertProjectsLocationsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RevertProjectsLocationsInstancesRequest,
  output: RevertProjectsLocationsInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PauseReplicaProjectsLocationsInstancesRequest {
  /** Required. The resource name of the instance, in the format `projects/{project_id}/locations/{location_id}/instances/{instance_id}`. */
  name: string;
  /** Request body */
  body?: PauseReplicaRequest;
}

export const PauseReplicaProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(PauseReplicaRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:pauseReplica", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PauseReplicaProjectsLocationsInstancesRequest>;

export type PauseReplicaProjectsLocationsInstancesResponse = Operation;
export const PauseReplicaProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PauseReplicaProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Pause the standby instance (replica). WARNING: This operation makes the standby instance's NFS filesystem writable. Any data written to the standby instance while paused will be lost when the replica is resumed or promoted. */
export const pauseReplicaProjectsLocationsInstances: API.OperationMethod<
  PauseReplicaProjectsLocationsInstancesRequest,
  PauseReplicaProjectsLocationsInstancesResponse,
  PauseReplicaProjectsLocationsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PauseReplicaProjectsLocationsInstancesRequest,
  output: PauseReplicaProjectsLocationsInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsInstancesRequest {
  /** List filter. */
  filter?: string;
  /** The next_page_token value to use if there are additional results to retrieve for this list request. */
  pageToken?: string;
  /** Required. The project and location for which to retrieve instance information, in the format `projects/{project_id}/locations/{location}`. In Cloud Filestore, locations map to Google Cloud zones, for example **us-west1-b**. To retrieve instance information for all locations, use "-" for the `{location}` value. */
  parent: string;
  /** The maximum number of items to return. */
  pageSize?: number;
  /** Sort results. Supported values are "name", "name desc" or "" (unsorted). */
  orderBy?: string;
}

export const ListProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/instances" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsInstancesRequest>;

export type ListProjectsLocationsInstancesResponse = ListInstancesResponse;
export const ListProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListInstancesResponse;

export type ListProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all instances in a project for either a specified location or for all locations. */
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

export interface GetProjectsLocationsInstancesRequest {
  /** Required. The instance resource name, in the format `projects/{project_id}/locations/{location}/instances/{instance_id}`. */
  name: string;
}

export const GetProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsInstancesRequest>;

export type GetProjectsLocationsInstancesResponse = Instance;
export const GetProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Instance;

export type GetProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the details of a specific instance. */
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

export interface DeleteProjectsLocationsInstancesRequest {
  /** Required. The instance resource name, in the format `projects/{project_id}/locations/{location}/instances/{instance_id}` */
  name: string;
  /** If set to true, all snapshots of the instance will also be deleted. (Otherwise, the request will only work if the instance has no snapshots.) */
  force?: boolean;
}

export const DeleteProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
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

/** Deletes an instance. */
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

export interface PatchProjectsLocationsInstancesRequest {
  /** Mask of fields to update. At least one path must be supplied in this field. The elements of the repeated paths field may only include these fields: * "description" * "file_shares" * "labels" * "performance_config" * "deletion_protection_enabled" * "deletion_protection_reason" */
  updateMask?: string;
  /** Output only. The resource name of the instance, in the format `projects/{project}/locations/{location}/instances/{instance}`. */
  name: string;
  /** Request body */
  body?: Instance;
}

export const PatchProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Instance).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
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

/** Updates the settings of a specific instance. */
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

export interface PromoteReplicaProjectsLocationsInstancesRequest {
  /** Required. The resource name of the instance, in the format `projects/{project_id}/locations/{location_id}/instances/{instance_id}`. */
  name: string;
  /** Request body */
  body?: PromoteReplicaRequest;
}

export const PromoteReplicaProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(PromoteReplicaRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+name}:promoteReplica",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PromoteReplicaProjectsLocationsInstancesRequest>;

export type PromoteReplicaProjectsLocationsInstancesResponse = Operation;
export const PromoteReplicaProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PromoteReplicaProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Promote the standby instance (replica). */
export const promoteReplicaProjectsLocationsInstances: API.OperationMethod<
  PromoteReplicaProjectsLocationsInstancesRequest,
  PromoteReplicaProjectsLocationsInstancesResponse,
  PromoteReplicaProjectsLocationsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PromoteReplicaProjectsLocationsInstancesRequest,
  output: PromoteReplicaProjectsLocationsInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ResumeReplicaProjectsLocationsInstancesRequest {
  /** Required. The resource name of the instance, in the format `projects/{project_id}/locations/{location_id}/instances/{instance_id}`. */
  name: string;
  /** Request body */
  body?: ResumeReplicaRequest;
}

export const ResumeReplicaProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ResumeReplicaRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:resumeReplica", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ResumeReplicaProjectsLocationsInstancesRequest>;

export type ResumeReplicaProjectsLocationsInstancesResponse = Operation;
export const ResumeReplicaProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type ResumeReplicaProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Resume the standby instance (replica). WARNING: Any data written to the standby instance while paused will be lost when the replica is resumed. */
export const resumeReplicaProjectsLocationsInstances: API.OperationMethod<
  ResumeReplicaProjectsLocationsInstancesRequest,
  ResumeReplicaProjectsLocationsInstancesResponse,
  ResumeReplicaProjectsLocationsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ResumeReplicaProjectsLocationsInstancesRequest,
  output: ResumeReplicaProjectsLocationsInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsInstancesRequest {
  /** Required. The instance's project and location, in the format `projects/{project_id}/locations/{location}`. In Filestore, locations map to Google Cloud zones, for example **us-west1-b**. */
  parent: string;
  /** Required. The name of the instance to create. The name must be unique for the specified project and location. */
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
    T.Http({ method: "POST", path: "v1/{+parent}/instances", hasBody: true }),
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

/** Creates an instance. When creating from a backup, the capacity of the new instance needs to be equal to or larger than the capacity of the backup (and also equal to or larger than the minimum capacity of the tier). */
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

export interface PatchProjectsLocationsInstancesSnapshotsRequest {
  /** Required. Mask of fields to update. At least one path must be supplied in this field. */
  updateMask?: string;
  /** Output only. The resource name of the snapshot, in the format `projects/{project_id}/locations/{location_id}/instances/{instance_id}/snapshots/{snapshot_id}`. */
  name: string;
  /** Request body */
  body?: Snapshot;
}

export const PatchProjectsLocationsInstancesSnapshotsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Snapshot).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsInstancesSnapshotsRequest>;

export type PatchProjectsLocationsInstancesSnapshotsResponse = Operation;
export const PatchProjectsLocationsInstancesSnapshotsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsInstancesSnapshotsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the settings of a specific snapshot. */
export const patchProjectsLocationsInstancesSnapshots: API.OperationMethod<
  PatchProjectsLocationsInstancesSnapshotsRequest,
  PatchProjectsLocationsInstancesSnapshotsResponse,
  PatchProjectsLocationsInstancesSnapshotsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsInstancesSnapshotsRequest,
  output: PatchProjectsLocationsInstancesSnapshotsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsInstancesSnapshotsRequest {
  /** Required. The instance for which to retrieve snapshot information, in the format `projects/{project_id}/locations/{location}/instances/{instance_id}`. */
  parent: string;
  /** The maximum number of items to return. */
  pageSize?: number;
  /** Sort results. Supported values are "name", "name desc" or "" (unsorted). */
  orderBy?: string;
  /** Optional. If true, allow partial responses for multi-regional Aggregated List requests. */
  returnPartialSuccess?: boolean;
  /** The next_page_token value to use if there are additional results to retrieve for this list request. */
  pageToken?: string;
  /** List filter. */
  filter?: string;
}

export const ListProjectsLocationsInstancesSnapshotsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/snapshots" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsInstancesSnapshotsRequest>;

export type ListProjectsLocationsInstancesSnapshotsResponse =
  ListSnapshotsResponse;
export const ListProjectsLocationsInstancesSnapshotsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListSnapshotsResponse;

export type ListProjectsLocationsInstancesSnapshotsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all snapshots in a project for either a specified location or for all locations. */
export const listProjectsLocationsInstancesSnapshots: API.PaginatedOperationMethod<
  ListProjectsLocationsInstancesSnapshotsRequest,
  ListProjectsLocationsInstancesSnapshotsResponse,
  ListProjectsLocationsInstancesSnapshotsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsInstancesSnapshotsRequest,
  output: ListProjectsLocationsInstancesSnapshotsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsInstancesSnapshotsRequest {
  /** Required. The Filestore Instance to create the snapshots of, in the format `projects/{project_id}/locations/{location}/instances/{instance_id}` */
  parent: string;
  /** Required. The ID to use for the snapshot. The ID must be unique within the specified instance. This value must start with a lowercase letter followed by up to 62 lowercase letters, numbers, or hyphens, and cannot end with a hyphen. */
  snapshotId?: string;
  /** Request body */
  body?: Snapshot;
}

export const CreateProjectsLocationsInstancesSnapshotsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    snapshotId: Schema.optional(Schema.String).pipe(T.HttpQuery("snapshotId")),
    body: Schema.optional(Snapshot).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/snapshots", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsInstancesSnapshotsRequest>;

export type CreateProjectsLocationsInstancesSnapshotsResponse = Operation;
export const CreateProjectsLocationsInstancesSnapshotsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsInstancesSnapshotsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a snapshot. */
export const createProjectsLocationsInstancesSnapshots: API.OperationMethod<
  CreateProjectsLocationsInstancesSnapshotsRequest,
  CreateProjectsLocationsInstancesSnapshotsResponse,
  CreateProjectsLocationsInstancesSnapshotsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsInstancesSnapshotsRequest,
  output: CreateProjectsLocationsInstancesSnapshotsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsInstancesSnapshotsRequest {
  /** Required. The snapshot resource name, in the format `projects/{project_id}/locations/{location}/instances/{instance_id}/snapshots/{snapshot_id}` */
  name: string;
}

export const GetProjectsLocationsInstancesSnapshotsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsInstancesSnapshotsRequest>;

export type GetProjectsLocationsInstancesSnapshotsResponse = Snapshot;
export const GetProjectsLocationsInstancesSnapshotsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Snapshot;

export type GetProjectsLocationsInstancesSnapshotsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the details of a specific snapshot. */
export const getProjectsLocationsInstancesSnapshots: API.OperationMethod<
  GetProjectsLocationsInstancesSnapshotsRequest,
  GetProjectsLocationsInstancesSnapshotsResponse,
  GetProjectsLocationsInstancesSnapshotsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsInstancesSnapshotsRequest,
  output: GetProjectsLocationsInstancesSnapshotsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsInstancesSnapshotsRequest {
  /** Required. The snapshot resource name, in the format `projects/{project_id}/locations/{location}/instances/{instance_id}/snapshots/{snapshot_id}` */
  name: string;
}

export const DeleteProjectsLocationsInstancesSnapshotsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsInstancesSnapshotsRequest>;

export type DeleteProjectsLocationsInstancesSnapshotsResponse = Operation;
export const DeleteProjectsLocationsInstancesSnapshotsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsInstancesSnapshotsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a snapshot. */
export const deleteProjectsLocationsInstancesSnapshots: API.OperationMethod<
  DeleteProjectsLocationsInstancesSnapshotsRequest,
  DeleteProjectsLocationsInstancesSnapshotsResponse,
  DeleteProjectsLocationsInstancesSnapshotsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsInstancesSnapshotsRequest,
  output: DeleteProjectsLocationsInstancesSnapshotsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
