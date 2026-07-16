// ==========================================================================
// NetApp API (netapp v1beta1)
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
  name: "netapp",
  version: "v1beta1",
  rootUrl: "https://netapp.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface OntapVolumeTarget {
  /** Optional. Absolute directory path in the destination volume. */
  restoreDestinationPath?: string;
  /** Required. The UUID of the ONTAP volume to restore to. */
  volumeUuid?: string;
}

export const OntapVolumeTarget: Schema.Codec<OntapVolumeTarget> =
  /*@__PURE__*/ Schema.Struct({
    restoreDestinationPath: Schema.optional(Schema.String),
    volumeUuid: Schema.optional(Schema.String),
  }).annotate({ identifier: "OntapVolumeTarget" });

export interface OntapSource {
  /** Required. Name of the storage pool. This must be specified for creating backups for ONTAP mode volumes. Format: `projects/{projects_id}/locations/{location}/storagePools/{storage_pool_id}` */
  storagePool?: string;
  /** Optional. The UUID of the ONTAP source snapshot. */
  snapshotUuid?: string;
  /** Required. The UUID of the ONTAP source volume. */
  volumeUuid?: string;
}

export const OntapSource: Schema.Codec<OntapSource> =
  /*@__PURE__*/ Schema.Struct({
    storagePool: Schema.optional(Schema.String),
    snapshotUuid: Schema.optional(Schema.String),
    volumeUuid: Schema.optional(Schema.String),
  }).annotate({ identifier: "OntapSource" });

export interface Backup {
  /** Output only. The time when the backup was created. */
  createTime?: string;
  /** Output only. Type of backup, manually created or created by a backup policy. */
  backupType?: "TYPE_UNSPECIFIED" | "MANUAL" | "SCHEDULED" | (string & {});
  /** Output only. The backup state. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "UPLOADING"
    | "READY"
    | "DELETING"
    | "ERROR"
    | "UPDATING"
    | (string & {});
  /** Optional. Represents source details for ONTAP backups. Either source_volume or ontap_source should be provided. */
  ontapSource?: OntapSource;
  /** Output only. Size of the file system when the backup was created. When creating a new volume from the backup, the volume capacity will have to be at least as big. */
  volumeUsageBytes?: string;
  /** If specified, backup will be created from the given snapshot. If not specified, there will be a new snapshot taken to initiate the backup creation. Format: `projects/{project_id}/locations/{location}/volumes/{volume_id}/snapshots/{snapshot_id}` */
  sourceSnapshot?: string;
  /** The resource name of the volume that this backup belongs to. You must provide either `source_volume` or `ontap_source`. Format: `projects/{project_id}/locations/{location}/volumes/{volume_id}` */
  sourceVolume?: string;
  /** Identifier. The resource name of the backup. Format: `projects/{project_id}/locations/{location}/backupVaults/{backup_vault_id}/backups/{backup_id}`. */
  name?: string;
  /** A description of the backup with 2048 characters or less. Requests with longer descriptions will be rejected. */
  description?: string;
  /** Output only. Region of the volume from which the backup was created. Format: `projects/{project_id}/locations/{location}` */
  volumeRegion?: string;
  /** Output only. Region in which backup is stored. Format: `projects/{project_id}/locations/{location}` */
  backupRegion?: string;
  /** Output only. Reserved for future use */
  satisfiesPzi?: boolean;
  /** Resource labels to represent user provided metadata. */
  labels?: Record<string, string>;
  /** Output only. Total size of all backups in a chain in bytes = baseline backup size + sum(incremental backup size) */
  chainStorageBytes?: string;
  /** Output only. Reserved for future use */
  satisfiesPzs?: boolean;
  /** Output only. The time until which the backup is not deletable. */
  enforcedRetentionEndTime?: string;
}

export const Backup: Schema.Codec<Backup> =
  /*@__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    backupType: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    ontapSource: Schema.optional(OntapSource),
    volumeUsageBytes: Schema.optional(Schema.String),
    sourceSnapshot: Schema.optional(Schema.String),
    sourceVolume: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    volumeRegion: Schema.optional(Schema.String),
    backupRegion: Schema.optional(Schema.String),
    satisfiesPzi: Schema.optional(Schema.Boolean),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    chainStorageBytes: Schema.optional(Schema.String),
    satisfiesPzs: Schema.optional(Schema.Boolean),
    enforcedRetentionEndTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Backup" });

export interface ListBackupsResponse {
  /** A list of backups in the project. */
  backups?: ReadonlyArray<Backup>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The token you can use to retrieve the next page of results. Not returned if there are no more results in the list. */
  nextPageToken?: string;
}

export const ListBackupsResponse: Schema.Codec<ListBackupsResponse> =
  /*@__PURE__*/ Schema.Struct({
    backups: Schema.optional(Schema.Array(Backup)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListBackupsResponse" });

export interface BackupPolicy {
  /** Number of monthly backups to keep. Note that the sum of daily, weekly and monthly backups should be greater than 1. */
  monthlyBackupLimit?: number;
  /** If enabled, make backups automatically according to the schedules. This will be applied to all volumes that have this policy attached and enforced on volume level. If not specified, default is true. */
  enabled?: boolean;
  /** Output only. The time when the backup policy was created. */
  createTime?: string;
  /** Description of the backup policy. */
  description?: string;
  /** Number of weekly backups to keep. Note that the sum of daily, weekly and monthly backups should be greater than 1. */
  weeklyBackupLimit?: number;
  /** Number of daily backups to keep. Note that the minimum daily backup limit is 2. */
  dailyBackupLimit?: number;
  /** Identifier. The resource name of the backup policy. Format: `projects/{project_id}/locations/{location}/backupPolicies/{backup_policy_id}`. */
  name?: string;
  /** Output only. The backup policy state. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "READY"
    | "DELETING"
    | "ERROR"
    | "UPDATING"
    | (string & {});
  /** Output only. The total number of volumes assigned by this backup policy. */
  assignedVolumeCount?: number;
  /** Resource labels to represent user provided metadata. */
  labels?: Record<string, string>;
}

export const BackupPolicy: Schema.Codec<BackupPolicy> =
  /*@__PURE__*/ Schema.Struct({
    monthlyBackupLimit: Schema.optional(Schema.Number),
    enabled: Schema.optional(Schema.Boolean),
    createTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    weeklyBackupLimit: Schema.optional(Schema.Number),
    dailyBackupLimit: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    assignedVolumeCount: Schema.optional(Schema.Number),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "BackupPolicy" });

export interface ListBackupPoliciesResponse {
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** The list of backup policies. */
  backupPolicies?: ReadonlyArray<BackupPolicy>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListBackupPoliciesResponse: Schema.Codec<ListBackupPoliciesResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    backupPolicies: Schema.optional(Schema.Array(BackupPolicy)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListBackupPoliciesResponse" });

export interface ExecuteOntapGetResponse {
  /** The raw `JSON` body of the response. */
  body?: Record<string, unknown>;
}

export const ExecuteOntapGetResponse: Schema.Codec<ExecuteOntapGetResponse> =
  /*@__PURE__*/ Schema.Struct({
    body: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "ExecuteOntapGetResponse" });

export interface ExecuteOntapPatchRequest {
  /** Required. The raw `JSON` body of the request. The body should be in the format of the ONTAP resource. For example: ``` { "body": { "field1": "value1", "field2": "value2", } } ``` */
  body?: Record<string, unknown>;
}

export const ExecuteOntapPatchRequest: Schema.Codec<ExecuteOntapPatchRequest> =
  /*@__PURE__*/ Schema.Struct({
    body: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "ExecuteOntapPatchRequest" });

export interface CachePrePopulate {
  /** Optional. List of directory-paths to be excluded for pre-population for the FlexCache volume. */
  excludePathList?: ReadonlyArray<string>;
  /** Optional. Flag indicating whether the directories listed with the `path_list` need to be recursively pre-populated. */
  recursion?: boolean;
  /** Optional. List of directory-paths to be pre-populated for the FlexCache volume. */
  pathList?: ReadonlyArray<string>;
}

export const CachePrePopulate: Schema.Codec<CachePrePopulate> =
  /*@__PURE__*/ Schema.Struct({
    excludePathList: Schema.optional(Schema.Array(Schema.String)),
    recursion: Schema.optional(Schema.Boolean),
    pathList: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "CachePrePopulate" });

export interface CacheConfig {
  /** Optional. Pre-populate cache volume with data from the origin volume. */
  cachePrePopulate?: CachePrePopulate;
  /** Output only. State of the prepopulation job indicating how the prepopulation is progressing. */
  cachePrePopulateState?:
    | "CACHE_PRE_POPULATE_STATE_UNSPECIFIED"
    | "NOT_NEEDED"
    | "IN_PROGRESS"
    | "COMPLETE"
    | "ERROR"
    | (string & {});
  /** Optional. Flag indicating whether writeback is enabled for the FlexCache volume. */
  writebackEnabled?: boolean;
  /** Optional. Flag indicating whether a CIFS change notification is enabled for the FlexCache volume. */
  cifsChangeNotifyEnabled?: boolean;
}

export const CacheConfig: Schema.Codec<CacheConfig> =
  /*@__PURE__*/ Schema.Struct({
    cachePrePopulate: Schema.optional(CachePrePopulate),
    cachePrePopulateState: Schema.optional(Schema.String),
    writebackEnabled: Schema.optional(Schema.Boolean),
    cifsChangeNotifyEnabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "CacheConfig" });

export interface Status {
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
}

export const Status: Schema.Codec<Status> =
  /*@__PURE__*/ Schema.Struct({
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    code: Schema.optional(Schema.Number),
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "Status" });

export interface CacheParameters {
  /** Required. Name of the origin volume's SVM. */
  peerSvmName?: string;
  /** Output only. State of the cache volume indicating the peering status. */
  cacheState?:
    | "CACHE_STATE_UNSPECIFIED"
    | "PENDING_CLUSTER_PEERING"
    | "PENDING_SVM_PEERING"
    | "PEERED"
    | "ERROR"
    | (string & {});
  /** Output only. Temporary passphrase generated to accept cluster peering command. */
  passphrase?: string;
  /** Output only. Detailed description of the current cache state. */
  stateDetails?: string;
  /** Required. List of IC LIF addresses of the origin volume's ONTAP cluster. */
  peerIpAddresses?: ReadonlyArray<string>;
  /** Optional. Configuration of the cache volume. */
  cacheConfig?: CacheConfig;
  /** Required. Name of the origin volume for the cache volume. */
  peerVolumeName?: string;
  /** Required. Name of the origin volume's ONTAP cluster. */
  peerClusterName?: string;
  /** Output only. Copy-paste-able commands to be used on user's ONTAP to accept peering requests. */
  command?: string;
  /** Optional. Indicates whether the cache volume has global file lock enabled. */
  enableGlobalFileLock?: boolean;
  /** Optional. Expiration time for the peering command to be executed on user's ONTAP. */
  peeringCommandExpiryTime?: string;
}

export const CacheParameters: Schema.Codec<CacheParameters> =
  /*@__PURE__*/ Schema.Struct({
    peerSvmName: Schema.optional(Schema.String),
    cacheState: Schema.optional(Schema.String),
    passphrase: Schema.optional(Schema.String),
    stateDetails: Schema.optional(Schema.String),
    peerIpAddresses: Schema.optional(Schema.Array(Schema.String)),
    cacheConfig: Schema.optional(CacheConfig),
    peerVolumeName: Schema.optional(Schema.String),
    peerClusterName: Schema.optional(Schema.String),
    command: Schema.optional(Schema.String),
    enableGlobalFileLock: Schema.optional(Schema.Boolean),
    peeringCommandExpiryTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "CacheParameters" });

export interface RestoreParameters {
  /** Full name of the snapshot resource. Format: projects/{project}/locations/{location}/volumes/{volume}/snapshots/{snapshot} */
  sourceSnapshot?: string;
  /** Full name of the backup resource. Format for standard backup: projects/{project}/locations/{location}/backupVaults/{backup_vault_id}/backups/{backup_id}. Format for BackupDR backup: projects/{project}/locations/{location}/backupVaults/{backup_vault}/dataSources/{data_source}/backups/{backup} */
  sourceBackup?: string;
}

export const RestoreParameters: Schema.Codec<RestoreParameters> =
  /*@__PURE__*/ Schema.Struct({
    sourceSnapshot: Schema.optional(Schema.String),
    sourceBackup: Schema.optional(Schema.String),
  }).annotate({ identifier: "RestoreParameters" });

export interface MountOption {
  /** Instructions for mounting */
  instructions?: string;
  /** Output only. IP Address. */
  ipAddress?: string;
  /** Export string */
  export?: string;
  /** Full export string */
  exportFull?: string;
  /** Protocol to mount with. */
  protocol?:
    | "PROTOCOLS_UNSPECIFIED"
    | "NFSV3"
    | "NFSV4"
    | "SMB"
    | "ISCSI"
    | "NVME"
    | (string & {});
}

export const MountOption: Schema.Codec<MountOption> =
  /*@__PURE__*/ Schema.Struct({
    instructions: Schema.optional(Schema.String),
    ipAddress: Schema.optional(Schema.String),
    export: Schema.optional(Schema.String),
    exportFull: Schema.optional(Schema.String),
    protocol: Schema.optional(Schema.String),
  }).annotate({ identifier: "MountOption" });

export interface DailySchedule {
  /** Set the hour to start the snapshot (0-23), defaults to midnight (0). */
  hour?: number;
  /** Set the minute of the hour to start the snapshot (0-59), defaults to the top of the hour (0). */
  minute?: number;
  /** The maximum number of Snapshots to keep for the hourly schedule */
  snapshotsToKeep?: number;
}

export const DailySchedule: Schema.Codec<DailySchedule> =
  /*@__PURE__*/ Schema.Struct({
    hour: Schema.optional(Schema.Number),
    minute: Schema.optional(Schema.Number),
    snapshotsToKeep: Schema.optional(Schema.Number),
  }).annotate({ identifier: "DailySchedule" });

export interface WeeklySchedule {
  /** The maximum number of Snapshots to keep for the hourly schedule */
  snapshotsToKeep?: number;
  /** Set the minute of the hour to start the snapshot (0-59), defaults to the top of the hour (0). */
  minute?: number;
  /** Set the day or days of the week to make a snapshot. Accepts a comma separated days of the week. Defaults to 'Sunday'. */
  day?: string;
  /** Set the hour to start the snapshot (0-23), defaults to midnight (0). */
  hour?: number;
}

export const WeeklySchedule: Schema.Codec<WeeklySchedule> =
  /*@__PURE__*/ Schema.Struct({
    snapshotsToKeep: Schema.optional(Schema.Number),
    minute: Schema.optional(Schema.Number),
    day: Schema.optional(Schema.String),
    hour: Schema.optional(Schema.Number),
  }).annotate({ identifier: "WeeklySchedule" });

export interface HourlySchedule {
  /** Set the minute of the hour to start the snapshot (0-59), defaults to the top of the hour (0). */
  minute?: number;
  /** The maximum number of Snapshots to keep for the hourly schedule */
  snapshotsToKeep?: number;
}

export const HourlySchedule: Schema.Codec<HourlySchedule> =
  /*@__PURE__*/ Schema.Struct({
    minute: Schema.optional(Schema.Number),
    snapshotsToKeep: Schema.optional(Schema.Number),
  }).annotate({ identifier: "HourlySchedule" });

export interface MonthlySchedule {
  /** Set the hour to start the snapshot (0-23), defaults to midnight (0). */
  hour?: number;
  /** The maximum number of Snapshots to keep for the hourly schedule */
  snapshotsToKeep?: number;
  /** Set the minute of the hour to start the snapshot (0-59), defaults to the top of the hour (0). */
  minute?: number;
  /** Set the day or days of the month to make a snapshot (1-31). Accepts a comma separated number of days. Defaults to '1'. */
  daysOfMonth?: string;
}

export const MonthlySchedule: Schema.Codec<MonthlySchedule> =
  /*@__PURE__*/ Schema.Struct({
    hour: Schema.optional(Schema.Number),
    snapshotsToKeep: Schema.optional(Schema.Number),
    minute: Schema.optional(Schema.Number),
    daysOfMonth: Schema.optional(Schema.String),
  }).annotate({ identifier: "MonthlySchedule" });

export interface SnapshotPolicy {
  /** Daily schedule policy. */
  dailySchedule?: DailySchedule;
  /** Weekly schedule policy. */
  weeklySchedule?: WeeklySchedule;
  /** If enabled, make snapshots automatically according to the schedules. Default is false. */
  enabled?: boolean;
  /** Hourly schedule policy. */
  hourlySchedule?: HourlySchedule;
  /** Monthly schedule policy. */
  monthlySchedule?: MonthlySchedule;
}

export const SnapshotPolicy: Schema.Codec<SnapshotPolicy> =
  /*@__PURE__*/ Schema.Struct({
    dailySchedule: Schema.optional(DailySchedule),
    weeklySchedule: Schema.optional(WeeklySchedule),
    enabled: Schema.optional(Schema.Boolean),
    hourlySchedule: Schema.optional(HourlySchedule),
    monthlySchedule: Schema.optional(MonthlySchedule),
  }).annotate({ identifier: "SnapshotPolicy" });

export interface HybridReplicationParameters {
  /** Required. Name of the user's local source vserver svm to be peered with the destination vserver svm. */
  peerSvmName?: string;
  /** Optional. Name of source cluster location associated with the Hybrid replication. This is a free-form field for the display purpose only. */
  clusterLocation?: string;
  /** Optional. Replication Schedule for the replication created. */
  replicationSchedule?:
    | "HYBRID_REPLICATION_SCHEDULE_UNSPECIFIED"
    | "EVERY_10_MINUTES"
    | "HOURLY"
    | "DAILY"
    | (string & {});
  /** Required. List of node ip addresses to be peered with. */
  peerIpAddresses?: ReadonlyArray<string>;
  /** Optional. Constituent volume count for large volume. */
  largeVolumeConstituentCount?: number;
  /** Optional. Description of the replication. */
  description?: string;
  /** Required. Name of the user's local source volume to be peered with the destination volume. */
  peerVolumeName?: string;
  /** Required. Name of the user's local source cluster to be peered with the destination cluster. */
  peerClusterName?: string;
  /** Optional. Type of the hybrid replication. */
  hybridReplicationType?:
    | "VOLUME_HYBRID_REPLICATION_TYPE_UNSPECIFIED"
    | "MIGRATION"
    | "CONTINUOUS_REPLICATION"
    | "ONPREM_REPLICATION"
    | "REVERSE_ONPREM_REPLICATION"
    | (string & {});
  /** Required. Desired name for the replication of this volume. */
  replication?: string;
  /** Optional. Labels to be added to the replication as the key value pairs. */
  labels?: Record<string, string>;
}

export const HybridReplicationParameters: Schema.Codec<HybridReplicationParameters> =
  /*@__PURE__*/ Schema.Struct({
    peerSvmName: Schema.optional(Schema.String),
    clusterLocation: Schema.optional(Schema.String),
    replicationSchedule: Schema.optional(Schema.String),
    peerIpAddresses: Schema.optional(Schema.Array(Schema.String)),
    largeVolumeConstituentCount: Schema.optional(Schema.Number),
    description: Schema.optional(Schema.String),
    peerVolumeName: Schema.optional(Schema.String),
    peerClusterName: Schema.optional(Schema.String),
    hybridReplicationType: Schema.optional(Schema.String),
    replication: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "HybridReplicationParameters" });

export interface UserCommands {
  /** Output only. List of commands to be executed by the customer. */
  commands?: ReadonlyArray<string>;
}

export const UserCommands: Schema.Codec<UserCommands> =
  /*@__PURE__*/ Schema.Struct({
    commands: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "UserCommands" });

export interface TransferStats {
  /** Cumulative time taken across all transfers for the replication relationship. */
  totalTransferDuration?: string;
  /** Time taken during last transfer. */
  lastTransferDuration?: string;
  /** Time when progress was updated last. */
  updateTime?: string;
  /** A message describing the cause of the last transfer failure. */
  lastTransferError?: string;
  /** Last transfer size in bytes. */
  lastTransferBytes?: string;
  /** Time when last transfer completed. */
  lastTransferEndTime?: string;
  /** Cumulative bytes transferred so far for the replication relationship. */
  transferBytes?: string;
  /** Lag duration indicates the duration by which Destination region volume content lags behind the primary region volume content. */
  lagDuration?: string;
}

export const TransferStats: Schema.Codec<TransferStats> =
  /*@__PURE__*/ Schema.Struct({
    totalTransferDuration: Schema.optional(Schema.String),
    lastTransferDuration: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    lastTransferError: Schema.optional(Schema.String),
    lastTransferBytes: Schema.optional(Schema.String),
    lastTransferEndTime: Schema.optional(Schema.String),
    transferBytes: Schema.optional(Schema.String),
    lagDuration: Schema.optional(Schema.String),
  }).annotate({ identifier: "TransferStats" });

export interface HybridPeeringDetails {
  /** Output only. Temporary passphrase generated to accept cluster peering command. */
  passphrase?: string;
  /** Output only. Name of the user's local source volume to be peered with the destination volume. */
  peerVolumeName?: string;
  /** Output only. Name of the user's local source cluster to be peered with the destination cluster. */
  peerClusterName?: string;
  /** Output only. Name of the user's local source vserver svm to be peered with the destination vserver svm. */
  peerSvmName?: string;
  /** Output only. IP address of the subnet. */
  subnetIp?: string;
  /** Output only. Expiration time for the peering command to be executed on user's ONTAP. */
  commandExpiryTime?: string;
  /** Output only. Copy-paste-able commands to be used on user's ONTAP to accept peering requests. */
  command?: string;
}

export const HybridPeeringDetails: Schema.Codec<HybridPeeringDetails> =
  /*@__PURE__*/ Schema.Struct({
    passphrase: Schema.optional(Schema.String),
    peerVolumeName: Schema.optional(Schema.String),
    peerClusterName: Schema.optional(Schema.String),
    peerSvmName: Schema.optional(Schema.String),
    subnetIp: Schema.optional(Schema.String),
    commandExpiryTime: Schema.optional(Schema.String),
    command: Schema.optional(Schema.String),
  }).annotate({ identifier: "HybridPeeringDetails" });

export interface TieringPolicy {
  /** Optional. Flag indicating if the volume has tiering policy enable/pause. Default is PAUSED. */
  tierAction?: "TIER_ACTION_UNSPECIFIED" | "ENABLED" | "PAUSED" | (string & {});
  /** Optional. Time in days to mark the volume's data block as cold and make it eligible for tiering, can be range from 2-183. Default is 31. */
  coolingThresholdDays?: number;
  /** Optional. Flag indicating that the hot tier bypass mode is enabled. Default is false. This is only applicable to Flex service level. */
  hotTierBypassModeEnabled?: boolean;
}

export const TieringPolicy: Schema.Codec<TieringPolicy> =
  /*@__PURE__*/ Schema.Struct({
    tierAction: Schema.optional(Schema.String),
    coolingThresholdDays: Schema.optional(Schema.Number),
    hotTierBypassModeEnabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "TieringPolicy" });

export interface DestinationVolumeParameters {
  /** Description for the destination volume. */
  description?: string;
  /** Desired destination volume resource id. If not specified, source volume's resource id will be used. This value must start with a lowercase letter followed by up to 62 lowercase letters, numbers, or hyphens, and cannot end with a hyphen. */
  volumeId?: string;
  /** Destination volume's share name. If not specified, source volume's share name will be used. */
  shareName?: string;
  /** Optional. Tiering policy for the volume. */
  tieringPolicy?: TieringPolicy;
  /** Required. Existing destination StoragePool name. */
  storagePool?: string;
}

export const DestinationVolumeParameters: Schema.Codec<DestinationVolumeParameters> =
  /*@__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    volumeId: Schema.optional(Schema.String),
    shareName: Schema.optional(Schema.String),
    tieringPolicy: Schema.optional(TieringPolicy),
    storagePool: Schema.optional(Schema.String),
  }).annotate({ identifier: "DestinationVolumeParameters" });

export interface Replication {
  /** Output only. Full name of destination volume resource. Example : "projects/{project}/locations/{location}/volumes/{volume_id}" */
  destinationVolume?: string;
  /** Required. Indicates the schedule for replication. */
  replicationSchedule?:
    | "REPLICATION_SCHEDULE_UNSPECIFIED"
    | "EVERY_10_MINUTES"
    | "HOURLY"
    | "DAILY"
    | (string & {});
  /** Output only. Indicates whether this points to source or destination. */
  role?:
    | "REPLICATION_ROLE_UNSPECIFIED"
    | "SOURCE"
    | "DESTINATION"
    | (string & {});
  /** Output only. Replication create time. */
  createTime?: string;
  /** Identifier. The resource name of the Replication. Format: `projects/{project_id}/locations/{location}/volumes/{volume_id}/replications/{replication_id}`. */
  name?: string;
  /** Output only. Type of the hybrid replication. */
  hybridReplicationType?:
    | "HYBRID_REPLICATION_TYPE_UNSPECIFIED"
    | "MIGRATION"
    | "CONTINUOUS_REPLICATION"
    | "ONPREM_REPLICATION"
    | "REVERSE_ONPREM_REPLICATION"
    | (string & {});
  /** Output only. State of the replication. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "READY"
    | "UPDATING"
    | "DELETING"
    | "ERROR"
    | "PENDING_CLUSTER_PEERING"
    | "PENDING_SVM_PEERING"
    | "PENDING_REMOTE_RESYNC"
    | "EXTERNALLY_MANAGED_REPLICATION"
    | (string & {});
  /** Output only. Indicates the state of mirroring. */
  mirrorState?:
    | "MIRROR_STATE_UNSPECIFIED"
    | "PREPARING"
    | "MIRRORED"
    | "STOPPED"
    | "TRANSFERRING"
    | "BASELINE_TRANSFERRING"
    | "ABORTED"
    | "EXTERNALLY_MANAGED"
    | "PENDING_PEERING"
    | (string & {});
  /** Output only. Copy pastable snapmirror commands to be executed on onprem cluster by the customer. */
  hybridReplicationUserCommands?: UserCommands;
  /** Output only. Full name of source volume resource. Example : "projects/{project}/locations/{location}/volumes/{volume_id}" */
  sourceVolume?: string;
  /** Output only. Condition of the relationship. Can be one of the following: - true: The replication relationship is healthy. It has not missed the most recent scheduled transfer. - false: The replication relationship is not healthy. It has missed the most recent scheduled transfer. */
  healthy?: boolean;
  /** Output only. Replication transfer statistics. */
  transferStats?: TransferStats;
  /** Optional. Location of the user cluster. */
  clusterLocation?: string;
  /** Output only. State details of the replication. */
  stateDetails?: string;
  /** Output only. Hybrid peering details. */
  hybridPeeringDetails?: HybridPeeringDetails;
  /** A description about this replication relationship. */
  description?: string;
  /** Required. Input only. Destination volume parameters */
  destinationVolumeParameters?: DestinationVolumeParameters;
  /** Resource labels to represent user provided metadata. */
  labels?: Record<string, string>;
}

export const Replication: Schema.Codec<Replication> =
  /*@__PURE__*/ Schema.Struct({
    destinationVolume: Schema.optional(Schema.String),
    replicationSchedule: Schema.optional(Schema.String),
    role: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    hybridReplicationType: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    mirrorState: Schema.optional(Schema.String),
    hybridReplicationUserCommands: Schema.optional(UserCommands),
    sourceVolume: Schema.optional(Schema.String),
    healthy: Schema.optional(Schema.Boolean),
    transferStats: Schema.optional(TransferStats),
    clusterLocation: Schema.optional(Schema.String),
    stateDetails: Schema.optional(Schema.String),
    hybridPeeringDetails: Schema.optional(HybridPeeringDetails),
    description: Schema.optional(Schema.String),
    destinationVolumeParameters: Schema.optional(DestinationVolumeParameters),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "Replication" });

export interface QuotaRule {
  /** Output only. State of the quota rule */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "UPDATING"
    | "DELETING"
    | "READY"
    | "ERROR"
    | (string & {});
  /** Optional. Labels of the quota rule */
  labels?: Record<string, string>;
  /** Identifier. The resource name of the quota rule. Format: `projects/{project_number}/locations/{location_id}/volumes/volumes/{volume_id}/quotaRules/{quota_rule_id}`. */
  name?: string;
  /** Output only. Create time of the quota rule */
  createTime?: string;
  /** Optional. Description of the quota rule */
  description?: string;
  /** Optional. The quota rule applies to the specified user or group, identified by a Unix UID/GID, Windows SID, or null for default. */
  target?: string;
  /** Required. The type of quota rule. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "INDIVIDUAL_USER_QUOTA"
    | "INDIVIDUAL_GROUP_QUOTA"
    | "DEFAULT_USER_QUOTA"
    | "DEFAULT_GROUP_QUOTA"
    | (string & {});
  /** Output only. State details of the quota rule */
  stateDetails?: string;
  /** Required. The maximum allowed disk space in MiB. */
  diskLimitMib?: number;
}

export const QuotaRule: Schema.Codec<QuotaRule> =
  /*@__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    stateDetails: Schema.optional(Schema.String),
    diskLimitMib: Schema.optional(Schema.Number),
  }).annotate({ identifier: "QuotaRule" });

export interface ListQuotaRulesResponse {
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** List of quota rules */
  quotaRules?: ReadonlyArray<QuotaRule>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListQuotaRulesResponse: Schema.Codec<ListQuotaRulesResponse> =
  /*@__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    quotaRules: Schema.optional(Schema.Array(QuotaRule)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListQuotaRulesResponse" });

export interface CloneDetails {
  /** Output only. Shared space in GiB. Determined at volume creation time based on size of source snapshot. */
  sharedSpaceGib?: string;
  /** Output only. Full name of the source volume resource. Format: projects/{project}/locations/{location}/volumes/{volume} */
  sourceVolume?: string;
  /** Output only. The current state of the clone split operation. */
  splitState?:
    | "SPLIT_STATE_UNSPECIFIED"
    | "SPLIT_STATE_NOT_SPLITTING"
    | "SPLIT_STATE_IN_PROGRESS"
    | "SPLIT_STATE_FAILED"
    | (string & {});
  /** Output only. Specifies the full resource name of the source snapshot from which this volume was cloned. Format: projects/{project}/locations/{location}/volumes/{volume}/snapshots/{snapshot} */
  sourceSnapshot?: string;
}

export const CloneDetails: Schema.Codec<CloneDetails> =
  /*@__PURE__*/ Schema.Struct({
    sharedSpaceGib: Schema.optional(Schema.String),
    sourceVolume: Schema.optional(Schema.String),
    splitState: Schema.optional(Schema.String),
    sourceSnapshot: Schema.optional(Schema.String),
  }).annotate({ identifier: "CloneDetails" });

export interface BackupConfig {
  /** Optional. Name of backup vault. Format: projects/{project_id}/locations/{location}/backupVaults/{backup_vault_id} */
  backupVault?: string;
  /** Optional. When specified, schedule backups will be created based on the policy configuration. */
  backupPolicies?: ReadonlyArray<string>;
  /** Optional. When set to true, scheduled backup is enabled on the volume. This field should be nil when there's no backup policy attached. */
  scheduledBackupEnabled?: boolean;
  /** Output only. Total size of all backups in a chain in bytes = baseline backup size + sum(incremental backup size). */
  backupChainBytes?: string;
}

export const BackupConfig: Schema.Codec<BackupConfig> =
  /*@__PURE__*/ Schema.Struct({
    backupVault: Schema.optional(Schema.String),
    backupPolicies: Schema.optional(Schema.Array(Schema.String)),
    scheduledBackupEnabled: Schema.optional(Schema.Boolean),
    backupChainBytes: Schema.optional(Schema.String),
  }).annotate({ identifier: "BackupConfig" });

export interface BlockDevice {
  /** Output only. Device identifier of the block volume. This represents `lun_serial_number` for iSCSI volumes. */
  identifier?: string;
  /** Optional. User-defined name for the block device, unique within the volume. In case no user input is provided, name will be auto-generated in the backend. The name must meet the following requirements: * Be between 1 and 255 characters long. * Contain only uppercase or lowercase letters (A-Z, a-z), numbers (0-9), and the following special characters: "-", "_", "}", "{", ".". * Spaces are not allowed. */
  name?: string;
  /** Optional. The size of the block device in GiB. Any value provided for the `size_gib` field during volume creation is ignored. The block device's size is system-managed and will be set to match the parent Volume's `capacity_gib`. */
  sizeGib?: string;
  /** Required. Immutable. The OS type of the volume. This field can't be changed after the block device is created. */
  osType?: "OS_TYPE_UNSPECIFIED" | "LINUX" | "WINDOWS" | "ESXI" | (string & {});
  /** Optional. A list of host groups that identify hosts that can mount the block volume. Format: `projects/{project_id}/locations/{location}/hostGroups/{host_group_id}` This field can be updated after the block device is created. */
  hostGroups?: ReadonlyArray<string>;
}

export const BlockDevice: Schema.Codec<BlockDevice> =
  /*@__PURE__*/ Schema.Struct({
    identifier: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    sizeGib: Schema.optional(Schema.String),
    osType: Schema.optional(Schema.String),
    hostGroups: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "BlockDevice" });

export interface LargeCapacityConfig {
  /** Optional. The number of internal constituents (e.g., FlexVols) for this large volume. The minimum number of constituents is 2. */
  constituentCount?: number;
}

export const LargeCapacityConfig: Schema.Codec<LargeCapacityConfig> =
  /*@__PURE__*/ Schema.Struct({
    constituentCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "LargeCapacityConfig" });

export interface SimpleExportPolicyRule {
  /** If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'privacy' kerberos security mode. The 'kerberos5pReadOnly' value be ignored if this is enabled. */
  kerberos5pReadWrite?: boolean;
  /** If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'authentication' kerberos security mode. */
  kerberos5ReadOnly?: boolean;
  /** Comma separated list of allowed clients IP addresses */
  allowedClients?: string;
  /** If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'integrity' kerberos security mode. The 'kerberos5iReadOnly' value be ignored if this is enabled. */
  kerberos5iReadWrite?: boolean;
  /** Optional. Defines how user identity squashing is applied for this export rule. This field is the preferred way to configure squashing behavior and takes precedence over `has_root_access` if both are provided. */
  squashMode?:
    | "SQUASH_MODE_UNSPECIFIED"
    | "NO_ROOT_SQUASH"
    | "ROOT_SQUASH"
    | "ALL_SQUASH"
    | (string & {});
  /** Optional. An integer representing the anonymous user ID. Range is 0 to `4294967295`. Required when `squash_mode` is `ROOT_SQUASH` or `ALL_SQUASH`. */
  anonUid?: string;
  /** NFS V4 protocol. */
  nfsv4?: boolean;
  /** NFS V3 protocol. */
  nfsv3?: boolean;
  /** If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'integrity' kerberos security mode. */
  kerberos5iReadOnly?: boolean;
  /** If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'privacy' kerberos security mode. */
  kerberos5pReadOnly?: boolean;
  /** Whether Unix root access will be granted. */
  hasRootAccess?: string;
  /** Access type (ReadWrite, ReadOnly, None) */
  accessType?:
    | "ACCESS_TYPE_UNSPECIFIED"
    | "READ_ONLY"
    | "READ_WRITE"
    | "READ_NONE"
    | (string & {});
  /** If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'authentication' kerberos security mode. The 'kerberos5ReadOnly' value be ignored if this is enabled. */
  kerberos5ReadWrite?: boolean;
}

export const SimpleExportPolicyRule: Schema.Codec<SimpleExportPolicyRule> =
  /*@__PURE__*/ Schema.Struct({
    kerberos5pReadWrite: Schema.optional(Schema.Boolean),
    kerberos5ReadOnly: Schema.optional(Schema.Boolean),
    allowedClients: Schema.optional(Schema.String),
    kerberos5iReadWrite: Schema.optional(Schema.Boolean),
    squashMode: Schema.optional(Schema.String),
    anonUid: Schema.optional(Schema.String),
    nfsv4: Schema.optional(Schema.Boolean),
    nfsv3: Schema.optional(Schema.Boolean),
    kerberos5iReadOnly: Schema.optional(Schema.Boolean),
    kerberos5pReadOnly: Schema.optional(Schema.Boolean),
    hasRootAccess: Schema.optional(Schema.String),
    accessType: Schema.optional(Schema.String),
    kerberos5ReadWrite: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "SimpleExportPolicyRule" });

export interface ExportPolicy {
  /** Required. List of export policy rules */
  rules?: ReadonlyArray<SimpleExportPolicyRule>;
}

export const ExportPolicy: Schema.Codec<ExportPolicy> =
  /*@__PURE__*/ Schema.Struct({
    rules: Schema.optional(Schema.Array(SimpleExportPolicyRule)),
  }).annotate({ identifier: "ExportPolicy" });

export interface Volume {
  /** Optional. Security Style of the Volume */
  securityStyle?:
    | "SECURITY_STYLE_UNSPECIFIED"
    | "NTFS"
    | "UNIX"
    | (string & {});
  /** Optional. Flag indicating if the volume is a kerberos volume or not, export policy rules control kerberos security modes (krb5, krb5i, krb5p). */
  kerberosEnabled?: boolean;
  /** Output only. Specified the current volume encryption key source. */
  encryptionType?:
    | "ENCRYPTION_TYPE_UNSPECIFIED"
    | "SERVICE_MANAGED"
    | "CLOUD_KMS"
    | (string & {});
  /** Output only. Specifies the active zone for regional volume. */
  zone?: string;
  /** Required. Capacity in GIB of the volume */
  capacityGib?: string;
  /** Optional. SMB share settings for the volume. */
  smbSettings?: ReadonlyArray<
    | "SMB_SETTINGS_UNSPECIFIED"
    | "ENCRYPT_DATA"
    | "BROWSABLE"
    | "CHANGE_NOTIFY"
    | "NON_BROWSABLE"
    | "OPLOCKS"
    | "SHOW_SNAPSHOT"
    | "SHOW_PREVIOUS_VERSIONS"
    | "ACCESS_BASED_ENUMERATION"
    | "CONTINUOUSLY_AVAILABLE"
    | (string & {})
  >;
  /** Output only. Total hot tier data rounded down to the nearest GiB used by the Volume. This field is only used for flex Service Level */
  hotTierSizeUsedGib?: string;
  /** Output only. Flag indicating if the volume is NFS LDAP enabled or not. */
  ldapEnabled?: boolean;
  /** Output only. This field is not implemented. The values provided in this field are ignored. */
  psaRange?: string;
  /** Output only. Specifies the ActiveDirectory name of a SMB volume. */
  activeDirectory?: string;
  /** Output only. If this volume is a clone, this field contains details about the clone. */
  cloneDetails?: CloneDetails;
  /** Optional. Snap_reserve specifies percentage of volume storage reserved for snapshot storage. Default is 0 percent. */
  snapReserve?: number;
  /** Optional. Snapshot_directory if enabled (true) the volume will contain a read-only .snapshot directory which provides access to each of the volume's snapshots. */
  snapshotDirectory?: boolean;
  /** Output only. Specifies the replica zone for regional volume. */
  replicaZone?: string;
  /** BackupConfig of the volume. */
  backupConfig?: BackupConfig;
  /** Output only. State of the volume */
  state?:
    | "STATE_UNSPECIFIED"
    | "READY"
    | "CREATING"
    | "DELETING"
    | "UPDATING"
    | "RESTORING"
    | "DISABLED"
    | "ERROR"
    | "PREPARING"
    | "READ_ONLY"
    | (string & {});
  /** Output only. Used capacity in GIB of the volume. This is computed periodically and it does not represent the realtime usage. */
  usedGib?: string;
  /** Optional. Flag indicating if the volume will have an IP address per node for volumes supporting multiple IP endpoints. Only the volume with large_capacity will be allowed to have multiple endpoints. */
  multipleEndpoints?: boolean;
  /** Output only. Size of the volume cold tier data rounded down to the nearest GiB. */
  coldTierSizeGib?: string;
  /** Output only. Indicates whether the volume is part of a replication relationship. */
  hasReplication?: boolean;
  /** Output only. Service level of the volume */
  serviceLevel?:
    | "SERVICE_LEVEL_UNSPECIFIED"
    | "PREMIUM"
    | "EXTREME"
    | "STANDARD"
    | "FLEX"
    | (string & {});
  /** Optional. Cache parameters for the volume. */
  cacheParameters?: CacheParameters;
  /** Output only. VPC Network name. Format: projects/{project}/global/networks/{network} */
  network?: string;
  /** Optional. Block devices for the volume. Currently, only one block device is permitted per Volume. */
  blockDevices?: ReadonlyArray<BlockDevice>;
  /** Output only. Create time of the volume */
  createTime?: string;
  /** Optional. Throughput of the volume (in MiB/s) */
  throughputMibps?: number;
  /** Tiering policy for the volume. */
  tieringPolicy?: TieringPolicy;
  /** Required. StoragePool name of the volume */
  storagePool?: string;
  /** Optional. Labels as key value pairs */
  labels?: Record<string, string>;
  /** Optional. Specifies the source of the volume to be created from. */
  restoreParameters?: RestoreParameters;
  /** Optional. The Hybrid Replication parameters for the volume. */
  hybridReplicationParameters?: HybridReplicationParameters;
  /** Optional. Large capacity config for the volume. Enables and configures large capacity for volumes in Unified pools with File protocols. Not applicable for Block protocols in Unified pools. This field and the legacy `large_capacity` boolean field are mutually exclusive. */
  largeCapacityConfig?: LargeCapacityConfig;
  /** Required. Protocols required for the volume */
  protocols?: ReadonlyArray<
    | "PROTOCOLS_UNSPECIFIED"
    | "NFSV3"
    | "NFSV4"
    | "SMB"
    | "ISCSI"
    | "NVME"
    | (string & {})
  >;
  /** Optional. Description of the volume */
  description?: string;
  /** Output only. State details of the volume */
  stateDetails?: string;
  /** Optional. Export policy of the volume */
  exportPolicy?: ExportPolicy;
  /** Output only. Specifies the KMS config to be used for volume encryption. */
  kmsConfig?: string;
  /** Optional. SnapshotPolicy for a volume. */
  snapshotPolicy?: SnapshotPolicy;
  /** Required. Share name of the volume */
  shareName?: string;
  /** Optional. List of actions that are restricted on this volume. */
  restrictedActions?: ReadonlyArray<
    "RESTRICTED_ACTION_UNSPECIFIED" | "DELETE" | (string & {})
  >;
  /** Identifier. Name of the volume */
  name?: string;
  /** Optional. Default unix style permission (e.g. 777) the mount point will be created with. Applicable for NFS protocol types only. */
  unixPermissions?: string;
  /** Optional. Flag indicating if the volume will be a large capacity volume or a regular volume. This field is used for legacy FILE pools. For Unified pools, use the `large_capacity_config` field instead. This field and `large_capacity_config` are mutually exclusive. */
  largeCapacity?: boolean;
  /** Output only. Mount options of this volume */
  mountOptions?: ReadonlyArray<MountOption>;
}

export const Volume: Schema.Codec<Volume> =
  /*@__PURE__*/ Schema.Struct({
    securityStyle: Schema.optional(Schema.String),
    kerberosEnabled: Schema.optional(Schema.Boolean),
    encryptionType: Schema.optional(Schema.String),
    zone: Schema.optional(Schema.String),
    capacityGib: Schema.optional(Schema.String),
    smbSettings: Schema.optional(Schema.Array(Schema.String)),
    hotTierSizeUsedGib: Schema.optional(Schema.String),
    ldapEnabled: Schema.optional(Schema.Boolean),
    psaRange: Schema.optional(Schema.String),
    activeDirectory: Schema.optional(Schema.String),
    cloneDetails: Schema.optional(CloneDetails),
    snapReserve: Schema.optional(Schema.Number),
    snapshotDirectory: Schema.optional(Schema.Boolean),
    replicaZone: Schema.optional(Schema.String),
    backupConfig: Schema.optional(BackupConfig),
    state: Schema.optional(Schema.String),
    usedGib: Schema.optional(Schema.String),
    multipleEndpoints: Schema.optional(Schema.Boolean),
    coldTierSizeGib: Schema.optional(Schema.String),
    hasReplication: Schema.optional(Schema.Boolean),
    serviceLevel: Schema.optional(Schema.String),
    cacheParameters: Schema.optional(CacheParameters),
    network: Schema.optional(Schema.String),
    blockDevices: Schema.optional(Schema.Array(BlockDevice)),
    createTime: Schema.optional(Schema.String),
    throughputMibps: Schema.optional(Schema.Number),
    tieringPolicy: Schema.optional(TieringPolicy),
    storagePool: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    restoreParameters: Schema.optional(RestoreParameters),
    hybridReplicationParameters: Schema.optional(HybridReplicationParameters),
    largeCapacityConfig: Schema.optional(LargeCapacityConfig),
    protocols: Schema.optional(Schema.Array(Schema.String)),
    description: Schema.optional(Schema.String),
    stateDetails: Schema.optional(Schema.String),
    exportPolicy: Schema.optional(ExportPolicy),
    kmsConfig: Schema.optional(Schema.String),
    snapshotPolicy: Schema.optional(SnapshotPolicy),
    shareName: Schema.optional(Schema.String),
    restrictedActions: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
    unixPermissions: Schema.optional(Schema.String),
    largeCapacity: Schema.optional(Schema.Boolean),
    mountOptions: Schema.optional(Schema.Array(MountOption)),
  }).annotate({ identifier: "Volume" });

export interface ListVolumesResponse {
  /** The list of Volume */
  volumes?: ReadonlyArray<Volume>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListVolumesResponse: Schema.Codec<ListVolumesResponse> =
  /*@__PURE__*/ Schema.Struct({
    volumes: Schema.optional(Schema.Array(Volume)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListVolumesResponse" });

export interface ExecuteOntapPatchResponse {
  /** The raw `JSON` body of the response. */
  body?: Record<string, unknown>;
}

export const ExecuteOntapPatchResponse: Schema.Codec<ExecuteOntapPatchResponse> =
  /*@__PURE__*/ Schema.Struct({
    body: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "ExecuteOntapPatchResponse" });

export interface StopReplicationRequest {
  /** Indicates whether to stop replication forcefully while data transfer is in progress. Warning! if force is true, this will abort any current transfers and can lead to data loss due to partial transfer. If force is false, stop replication will fail while data transfer is in progress and you will need to retry later. */
  force?: boolean;
}

export const StopReplicationRequest: Schema.Codec<StopReplicationRequest> =
  /*@__PURE__*/ Schema.Struct({
    force: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "StopReplicationRequest" });

export interface ExecuteOntapDeleteResponse {
  /** The raw `JSON` body of the response. */
  body?: Record<string, unknown>;
}

export const ExecuteOntapDeleteResponse: Schema.Codec<ExecuteOntapDeleteResponse> =
  /*@__PURE__*/ Schema.Struct({
    body: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "ExecuteOntapDeleteResponse" });

export interface Location {
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
}

export const Location: Schema.Codec<Location> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    locationId: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Location" });

export interface KmsConfig {
  /** Identifier. Name of the `KmsConfig`. Format: `projects/{project}/locations/{location}/kmsConfigs/{kms_config}` */
  name?: string;
  /** Required. Customer-managed crypto key resource full name. Format: `projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}` */
  cryptoKeyName?: string;
  /** Labels as key value pairs */
  labels?: Record<string, string>;
  /** Output only. The Service account which will have access to the customer provided encryption key. */
  serviceAccount?: string;
  /** Output only. State of the KmsConfig. */
  state?:
    | "STATE_UNSPECIFIED"
    | "READY"
    | "CREATING"
    | "DELETING"
    | "UPDATING"
    | "IN_USE"
    | "ERROR"
    | "KEY_CHECK_PENDING"
    | "KEY_NOT_REACHABLE"
    | "DISABLING"
    | "DISABLED"
    | "MIGRATING"
    | (string & {});
  /** Output only. State details of the KmsConfig. */
  stateDetails?: string;
  /** Description of the KmsConfig. */
  description?: string;
  /** Output only. Create time of the KmsConfig. */
  createTime?: string;
  /** Output only. Instructions to provide the access to the customer provided encryption key. */
  instructions?: string;
}

export const KmsConfig: Schema.Codec<KmsConfig> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    cryptoKeyName: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    serviceAccount: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    stateDetails: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    instructions: Schema.optional(Schema.String),
  }).annotate({ identifier: "KmsConfig" });

export interface CancelOperationRequest {}

export const CancelOperationRequest: Schema.Codec<CancelOperationRequest> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelOperationRequest",
  });

export interface ExecuteOntapPostResponse {
  /** The raw `JSON` body of the response. */
  body?: Record<string, unknown>;
}

export const ExecuteOntapPostResponse: Schema.Codec<ExecuteOntapPostResponse> =
  /*@__PURE__*/ Schema.Struct({
    body: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "ExecuteOntapPostResponse" });

export interface BackupRetentionPolicy {
  /** Optional. Indicates if the monthly backups are immutable. At least one of daily_backup_immutable, weekly_backup_immutable, monthly_backup_immutable and manual_backup_immutable must be true. */
  monthlyBackupImmutable?: boolean;
  /** Required. Minimum retention duration in days for backups in the backup vault. */
  backupMinimumEnforcedRetentionDays?: number;
  /** Optional. Indicates if the daily backups are immutable. At least one of daily_backup_immutable, weekly_backup_immutable, monthly_backup_immutable and manual_backup_immutable must be true. */
  dailyBackupImmutable?: boolean;
  /** Optional. Indicates if the manual backups are immutable. At least one of daily_backup_immutable, weekly_backup_immutable, monthly_backup_immutable and manual_backup_immutable must be true. */
  manualBackupImmutable?: boolean;
  /** Optional. Indicates if the weekly backups are immutable. At least one of daily_backup_immutable, weekly_backup_immutable, monthly_backup_immutable and manual_backup_immutable must be true. */
  weeklyBackupImmutable?: boolean;
}

export const BackupRetentionPolicy: Schema.Codec<BackupRetentionPolicy> =
  /*@__PURE__*/ Schema.Struct({
    monthlyBackupImmutable: Schema.optional(Schema.Boolean),
    backupMinimumEnforcedRetentionDays: Schema.optional(Schema.Number),
    dailyBackupImmutable: Schema.optional(Schema.Boolean),
    manualBackupImmutable: Schema.optional(Schema.Boolean),
    weeklyBackupImmutable: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "BackupRetentionPolicy" });

export interface ActiveDirectory {
  /** Required. NetBIOSPrefix is used as a prefix for SMB server name. */
  netBiosPrefix?: string;
  /** Optional. Domain users to be given the SeSecurityPrivilege. */
  securityOperators?: ReadonlyArray<string>;
  /** Labels for the active directory. */
  labels?: Record<string, string>;
  /** If enabled, AES encryption will be enabled for SMB communication. */
  aesEncryption?: boolean;
  /** Optional. Users to be added to the Built-in Backup Operator active directory group. */
  backupOperators?: ReadonlyArray<string>;
  /** Required. Name of the Active Directory domain */
  domain?: string;
  /** Required. Password of the Active Directory domain administrator. */
  password?: string;
  /** Name of the active directory machine. This optional parameter is used only while creating kerberos volume */
  kdcHostname?: string;
  /** Required. Comma separated list of DNS server IP addresses for the Active Directory domain. */
  dns?: string;
  /** The Organizational Unit (OU) within the Windows Active Directory the user belongs to. */
  organizationalUnit?: string;
  /** Description of the active directory. */
  description?: string;
  /** If enabled, traffic between the SMB server to Domain Controller (DC) will be encrypted. */
  encryptDcConnections?: boolean;
  /** The Active Directory site the service will limit Domain Controller discovery too. */
  site?: string;
  /** Output only. The state details of the Active Directory. */
  stateDetails?: string;
  /** Optional. Users to be added to the Built-in Admininstrators group. */
  administrators?: ReadonlyArray<string>;
  /** Output only. The state of the AD. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "READY"
    | "UPDATING"
    | "IN_USE"
    | "DELETING"
    | "ERROR"
    | "DIAGNOSING"
    | (string & {});
  /** Required. Username of the Active Directory domain administrator. */
  username?: string;
  /** Identifier. The resource name of the active directory. Format: `projects/{project_number}/locations/{location_id}/activeDirectories/{active_directory_id}`. */
  name?: string;
  /** If enabled, will allow access to local users and LDAP users. If access is needed for only LDAP users, it has to be disabled. */
  nfsUsersWithLdap?: boolean;
  /** KDC server IP address for the active directory machine. */
  kdcIp?: string;
  /** Specifies whether or not the LDAP traffic needs to be signed. */
  ldapSigning?: boolean;
  /** Output only. Create time of the active directory. */
  createTime?: string;
}

export const ActiveDirectory: Schema.Codec<ActiveDirectory> =
  /*@__PURE__*/ Schema.Struct({
    netBiosPrefix: Schema.optional(Schema.String),
    securityOperators: Schema.optional(Schema.Array(Schema.String)),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    aesEncryption: Schema.optional(Schema.Boolean),
    backupOperators: Schema.optional(Schema.Array(Schema.String)),
    domain: Schema.optional(Schema.String),
    password: Schema.optional(Schema.String),
    kdcHostname: Schema.optional(Schema.String),
    dns: Schema.optional(Schema.String),
    organizationalUnit: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    encryptDcConnections: Schema.optional(Schema.Boolean),
    site: Schema.optional(Schema.String),
    stateDetails: Schema.optional(Schema.String),
    administrators: Schema.optional(Schema.Array(Schema.String)),
    state: Schema.optional(Schema.String),
    username: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    nfsUsersWithLdap: Schema.optional(Schema.Boolean),
    kdcIp: Schema.optional(Schema.String),
    ldapSigning: Schema.optional(Schema.Boolean),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "ActiveDirectory" });

export interface ListActiveDirectoriesResponse {
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** The list of active directories. */
  activeDirectories?: ReadonlyArray<ActiveDirectory>;
}

export const ListActiveDirectoriesResponse: Schema.Codec<ListActiveDirectoriesResponse> =
  /*@__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
    activeDirectories: Schema.optional(Schema.Array(ActiveDirectory)),
  }).annotate({ identifier: "ListActiveDirectoriesResponse" });

export interface VolumeBackupConfig {
  /** Backup configuration for the volume. */
  backupConfig?: BackupConfig;
  /** Provides the Ontap UUID of the volume within the pool. */
  volumeUuid?: string;
}

export const VolumeBackupConfig: Schema.Codec<VolumeBackupConfig> =
  /*@__PURE__*/ Schema.Struct({
    backupConfig: Schema.optional(BackupConfig),
    volumeUuid: Schema.optional(Schema.String),
  }).annotate({ identifier: "VolumeBackupConfig" });

export interface ListBackupConfigsResponse {
  /** A list of backup configurations for volumes in the pool. */
  volumeBackupConfigs?: ReadonlyArray<VolumeBackupConfig>;
  /** The token you can use to retrieve the next page of results. Not returned if there are no more results in the list. */
  nextPageToken?: string;
  /** Unordered list. Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListBackupConfigsResponse: Schema.Codec<ListBackupConfigsResponse> =
  /*@__PURE__*/ Schema.Struct({
    volumeBackupConfigs: Schema.optional(Schema.Array(VolumeBackupConfig)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListBackupConfigsResponse" });

export interface GoogleProtobufEmpty {}

export const GoogleProtobufEmpty: Schema.Codec<GoogleProtobufEmpty> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleProtobufEmpty",
  });

export interface ValidateDirectoryServiceRequest {
  /** Type of directory service policy attached to the storage pool. */
  directoryServiceType?:
    | "DIRECTORY_SERVICE_TYPE_UNSPECIFIED"
    | "ACTIVE_DIRECTORY"
    | (string & {});
}

export const ValidateDirectoryServiceRequest: Schema.Codec<ValidateDirectoryServiceRequest> =
  /*@__PURE__*/ Schema.Struct({
    directoryServiceType: Schema.optional(Schema.String),
  }).annotate({ identifier: "ValidateDirectoryServiceRequest" });

export interface SplitStatus {
  /** Output only. Human-readable details about the current state. Mostly used for displaying error messages during split failure Examples: "Split in progress", "Error: insufficient capacity". */
  stateDetails?: string;
  /** Output only. The current state of the clone split operation. */
  splitState?:
    | "SPLIT_STATE_UNSPECIFIED"
    | "SPLIT_STATE_NOT_SPLITTING"
    | "SPLIT_STATE_IN_PROGRESS"
    | "SPLIT_STATE_FAILED"
    | (string & {});
  /** Output only. The estimated progress percentage of the split operation (0-100). This is meaningful primarily when split_state is IN_PROGRESS. */
  progressPercent?: number;
}

export const SplitStatus: Schema.Codec<SplitStatus> =
  /*@__PURE__*/ Schema.Struct({
    stateDetails: Schema.optional(Schema.String),
    splitState: Schema.optional(Schema.String),
    progressPercent: Schema.optional(Schema.Number),
  }).annotate({ identifier: "SplitStatus" });

export interface HostGroup {
  /** Output only. State of the host group. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "READY"
    | "UPDATING"
    | "DELETING"
    | "DISABLED"
    | (string & {});
  /** Output only. Create time of the host group. */
  createTime?: string;
  /** Optional. Description of the host group. */
  description?: string;
  /** Optional. Labels of the host group. */
  labels?: Record<string, string>;
  /** Required. The list of hosts associated with the host group. */
  hosts?: ReadonlyArray<string>;
  /** Required. The OS type of the host group. It indicates the type of operating system used by all of the hosts in the HostGroup. All hosts in a HostGroup must be of the same OS type. This can be set only when creating a HostGroup. */
  osType?: "OS_TYPE_UNSPECIFIED" | "LINUX" | "WINDOWS" | "ESXI" | (string & {});
  /** Identifier. The resource name of the host group. Format: `projects/{project_number}/locations/{location_id}/hostGroups/{host_group_id}`. */
  name?: string;
  /** Required. Type of the host group. */
  type?: "TYPE_UNSPECIFIED" | "ISCSI_INITIATOR" | (string & {});
}

export const HostGroup: Schema.Codec<HostGroup> =
  /*@__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    hosts: Schema.optional(Schema.Array(Schema.String)),
    osType: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "HostGroup" });

export interface ListHostGroupsResponse {
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** The list of host groups. */
  hostGroups?: ReadonlyArray<HostGroup>;
}

export const ListHostGroupsResponse: Schema.Codec<ListHostGroupsResponse> =
  /*@__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
    hostGroups: Schema.optional(Schema.Array(HostGroup)),
  }).annotate({ identifier: "ListHostGroupsResponse" });

export interface RevertVolumeRequest {
  /** Required. The snapshot resource ID, in the format 'my-snapshot', where the specified ID is the {snapshot_id} of the fully qualified name like projects/{project_id}/locations/{location_id}/volumes/{volume_id}/snapshots/{snapshot_id} */
  snapshotId?: string;
}

export const RevertVolumeRequest: Schema.Codec<RevertVolumeRequest> =
  /*@__PURE__*/ Schema.Struct({
    snapshotId: Schema.optional(Schema.String),
  }).annotate({ identifier: "RevertVolumeRequest" });

export interface BackupVault {
  /** Identifier. The resource name of the backup vault. Format: `projects/{project_id}/locations/{location}/backupVaults/{backup_vault_id}`. */
  name?: string;
  /** Optional. Indicates if the backup vault is a cross project vault. */
  crossProjectVault?: boolean;
  /** Output only. The backup vault state. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "READY"
    | "DELETING"
    | "ERROR"
    | "UPDATING"
    | (string & {});
  /** Output only. Field indicating encryption state of CMEK backups. */
  encryptionState?:
    | "ENCRYPTION_STATE_UNSPECIFIED"
    | "ENCRYPTION_STATE_PENDING"
    | "ENCRYPTION_STATE_COMPLETED"
    | "ENCRYPTION_STATE_IN_PROGRESS"
    | "ENCRYPTION_STATE_FAILED"
    | (string & {});
  /** Output only. Name of the Backup vault created in backup region. Format: `projects/{project_id}/locations/{location}/backupVaults/{backup_vault_id}` */
  destinationBackupVault?: string;
  /** Output only. Create time of the backup vault. */
  createTime?: string;
  /** Optional. Type of backup vault to be created. Default is IN_REGION. */
  backupVaultType?:
    | "BACKUP_VAULT_TYPE_UNSPECIFIED"
    | "IN_REGION"
    | "CROSS_REGION"
    | (string & {});
  /** Resource labels to represent user provided metadata. */
  labels?: Record<string, string>;
  /** Output only. Region in which the backup vault is created. Format: `projects/{project_id}/locations/{location}` */
  sourceRegion?: string;
  /** Optional. Backup retention policy defining the retention of backups. */
  backupRetentionPolicy?: BackupRetentionPolicy;
  /** Optional. Specifies the Key Management System (KMS) configuration to be used for backup encryption. Format: `projects/{project}/locations/{location}/kmsConfigs/{kms_config}` */
  kmsConfig?: string;
  /** Output only. The crypto key version used to encrypt the backup vault. Format: `projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}/cryptoKeyVersions/{crypto_key_version}` */
  backupsCryptoKeyVersion?: string;
  /** Optional. Region where the backups are stored. Format: `projects/{project_id}/locations/{location}` */
  backupRegion?: string;
  /** Description of the backup vault. */
  description?: string;
  /** Output only. Name of the Backup vault created in source region. Format: `projects/{project_id}/locations/{location}/backupVaults/{backup_vault_id}` */
  sourceBackupVault?: string;
}

export const BackupVault: Schema.Codec<BackupVault> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    crossProjectVault: Schema.optional(Schema.Boolean),
    state: Schema.optional(Schema.String),
    encryptionState: Schema.optional(Schema.String),
    destinationBackupVault: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    backupVaultType: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    sourceRegion: Schema.optional(Schema.String),
    backupRetentionPolicy: Schema.optional(BackupRetentionPolicy),
    kmsConfig: Schema.optional(Schema.String),
    backupsCryptoKeyVersion: Schema.optional(Schema.String),
    backupRegion: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    sourceBackupVault: Schema.optional(Schema.String),
  }).annotate({ identifier: "BackupVault" });

export interface EncryptVolumesRequest {}

export const EncryptVolumesRequest: Schema.Codec<EncryptVolumesRequest> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "EncryptVolumesRequest",
  });

export interface SwitchActiveReplicaZoneRequest {}

export const SwitchActiveReplicaZoneRequest: Schema.Codec<SwitchActiveReplicaZoneRequest> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "SwitchActiveReplicaZoneRequest",
  });

export interface RestoreBackupFilesRequest {
  /** Required. List of files to be restored, specified by their absolute path in the source volume. */
  fileList?: ReadonlyArray<string>;
  /** Required. The backup resource name, in the format `projects/{project_id}/locations/{location}/backupVaults/{backup_vault_id}/backups/{backup_id}` */
  backup?: string;
  /** Optional. Absolute directory path in the destination volume. This is required if the `file_list` is provided. */
  restoreDestinationPath?: string;
}

export const RestoreBackupFilesRequest: Schema.Codec<RestoreBackupFilesRequest> =
  /*@__PURE__*/ Schema.Struct({
    fileList: Schema.optional(Schema.Array(Schema.String)),
    backup: Schema.optional(Schema.String),
    restoreDestinationPath: Schema.optional(Schema.String),
  }).annotate({ identifier: "RestoreBackupFilesRequest" });

export interface BackupSource {
  /** Required. The backup resource name. */
  backup?: string;
  /** Optional. List of files to be restored in the form of their absolute path as in source volume. If provided, only these files will be restored. If not provided, the entire backup will be restored (Full Backup Restore) */
  fileList?: ReadonlyArray<string>;
}

export const BackupSource: Schema.Codec<BackupSource> =
  /*@__PURE__*/ Schema.Struct({
    backup: Schema.optional(Schema.String),
    fileList: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "BackupSource" });

export interface Operation {
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
}

export const Operation: Schema.Codec<Operation> =
  /*@__PURE__*/ Schema.Struct({
    done: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    error: Schema.optional(Status),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "Operation" });

export interface LocationMetadata {
  /** Output only. Supported flex performance in a location. */
  supportedFlexPerformance?: ReadonlyArray<
    | "FLEX_PERFORMANCE_UNSPECIFIED"
    | "FLEX_PERFORMANCE_DEFAULT"
    | "FLEX_PERFORMANCE_CUSTOM"
    | (string & {})
  >;
  /** Output only. Supported service levels in a location. */
  supportedServiceLevels?: ReadonlyArray<
    | "SERVICE_LEVEL_UNSPECIFIED"
    | "PREMIUM"
    | "EXTREME"
    | "STANDARD"
    | "FLEX"
    | (string & {})
  >;
  /** Output only. Indicates if the location has VCP support. */
  hasVcp?: boolean;
  /** Output only. Indicates if the location has ONTAP Proxy support. */
  hasOntapProxy?: boolean;
}

export const LocationMetadata: Schema.Codec<LocationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    supportedFlexPerformance: Schema.optional(Schema.Array(Schema.String)),
    supportedServiceLevels: Schema.optional(Schema.Array(Schema.String)),
    hasVcp: Schema.optional(Schema.Boolean),
    hasOntapProxy: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "LocationMetadata" });

export interface ReverseReplicationDirectionRequest {}

export const ReverseReplicationDirectionRequest: Schema.Codec<ReverseReplicationDirectionRequest> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "ReverseReplicationDirectionRequest",
  });

export interface Snapshot {
  /** Output only. Current storage usage for the snapshot in bytes. */
  usedBytes?: number;
  /** A description of the snapshot with 2048 characters or less. Requests with longer descriptions will be rejected. */
  description?: string;
  /** Resource labels to represent user provided metadata. */
  labels?: Record<string, string>;
  /** Output only. The snapshot state. */
  state?:
    | "STATE_UNSPECIFIED"
    | "READY"
    | "CREATING"
    | "DELETING"
    | "UPDATING"
    | "DISABLED"
    | "ERROR"
    | (string & {});
  /** Output only. The time when the snapshot was created. */
  createTime?: string;
  /** Output only. State details of the storage pool */
  stateDetails?: string;
  /** Identifier. The resource name of the snapshot. Format: `projects/{project_id}/locations/{location}/volumes/{volume_id}/snapshots/{snapshot_id}`. */
  name?: string;
}

export const Snapshot: Schema.Codec<Snapshot> =
  /*@__PURE__*/ Schema.Struct({
    usedBytes: Schema.optional(Schema.Number),
    description: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    state: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    stateDetails: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Snapshot" });

export interface ListBackupVaultsResponse {
  /** A list of backupVaults in the project for the specified location. */
  backupVaults?: ReadonlyArray<BackupVault>;
  /** The token you can use to retrieve the next page of results. Not returned if there are no more results in the list. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListBackupVaultsResponse: Schema.Codec<ListBackupVaultsResponse> =
  /*@__PURE__*/ Schema.Struct({
    backupVaults: Schema.optional(Schema.Array(BackupVault)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListBackupVaultsResponse" });

export interface VerifyKmsConfigResponse {
  /** Output only. If the customer key configured correctly to the encrypt volume. */
  healthy?: boolean;
  /** Output only. Error message if config is not healthy. */
  healthError?: string;
  /** Output only. Instructions for the customers to provide the access to the encryption key. */
  instructions?: string;
}

export const VerifyKmsConfigResponse: Schema.Codec<VerifyKmsConfigResponse> =
  /*@__PURE__*/ Schema.Struct({
    healthy: Schema.optional(Schema.Boolean),
    healthError: Schema.optional(Schema.String),
    instructions: Schema.optional(Schema.String),
  }).annotate({ identifier: "VerifyKmsConfigResponse" });

export interface ListReplicationsResponse {
  /** A list of replications in the project for the specified volume. */
  replications?: ReadonlyArray<Replication>;
  /** The token you can use to retrieve the next page of results. Not returned if there are no more results in the list. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListReplicationsResponse: Schema.Codec<ListReplicationsResponse> =
  /*@__PURE__*/ Schema.Struct({
    replications: Schema.optional(Schema.Array(Replication)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListReplicationsResponse" });

export interface ExecuteOntapPostRequest {
  /** Required. The raw `JSON` body of the request. The body should be in the format of the ONTAP resource. For example: ``` { "body": { "field1": "value1", "field2": "value2", } } ``` */
  body?: Record<string, unknown>;
}

export const ExecuteOntapPostRequest: Schema.Codec<ExecuteOntapPostRequest> =
  /*@__PURE__*/ Schema.Struct({
    body: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "ExecuteOntapPostRequest" });

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

export interface VerifyKmsConfigRequest {}

export const VerifyKmsConfigRequest: Schema.Codec<VerifyKmsConfigRequest> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "VerifyKmsConfigRequest",
  });

export interface EstablishPeeringRequest {
  /** Required. Name of the user's local source cluster to be peered with the destination cluster. */
  peerClusterName?: string;
  /** Required. Name of the user's local source vserver svm to be peered with the destination vserver svm. */
  peerSvmName?: string;
  /** Optional. List of IPv4 ip addresses to be used for peering. */
  peerIpAddresses?: ReadonlyArray<string>;
  /** Required. Name of the user's local source volume to be peered with the destination volume. */
  peerVolumeName?: string;
}

export const EstablishPeeringRequest: Schema.Codec<EstablishPeeringRequest> =
  /*@__PURE__*/ Schema.Struct({
    peerClusterName: Schema.optional(Schema.String),
    peerSvmName: Schema.optional(Schema.String),
    peerIpAddresses: Schema.optional(Schema.Array(Schema.String)),
    peerVolumeName: Schema.optional(Schema.String),
  }).annotate({ identifier: "EstablishPeeringRequest" });

export interface ResumeReplicationRequest {}

export const ResumeReplicationRequest: Schema.Codec<ResumeReplicationRequest> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "ResumeReplicationRequest",
  });

export interface ListKmsConfigsResponse {
  /** The list of KmsConfigs */
  kmsConfigs?: ReadonlyArray<KmsConfig>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListKmsConfigsResponse: Schema.Codec<ListKmsConfigsResponse> =
  /*@__PURE__*/ Schema.Struct({
    kmsConfigs: Schema.optional(Schema.Array(KmsConfig)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListKmsConfigsResponse" });

export interface UpdateBackupConfigRequest {
  /** Required. The UUID of the ONTAP-mode volume. */
  volumeUuid?: string;
  /** Required. Field mask is used to specify the fields to be overwritten in the BackupConfig for the Volume. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. */
  updateMask?: string;
  /** Required. Backup configuration to apply. */
  backupConfig?: BackupConfig;
}

export const UpdateBackupConfigRequest: Schema.Codec<UpdateBackupConfigRequest> =
  /*@__PURE__*/ Schema.Struct({
    volumeUuid: Schema.optional(Schema.String),
    updateMask: Schema.optional(Schema.String),
    backupConfig: Schema.optional(BackupConfig),
  }).annotate({ identifier: "UpdateBackupConfigRequest" });

export interface OperationMetadata {
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been canceled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
}

export const OperationMetadata: Schema.Codec<OperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    target: Schema.optional(Schema.String),
    statusMessage: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "OperationMetadata" });

export interface ListSnapshotsResponse {
  /** The token you can use to retrieve the next page of results. Not returned if there are no more results in the list. */
  nextPageToken?: string;
  /** A list of snapshots in the project for the specified volume. */
  snapshots?: ReadonlyArray<Snapshot>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListSnapshotsResponse: Schema.Codec<ListSnapshotsResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    snapshots: Schema.optional(Schema.Array(Snapshot)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListSnapshotsResponse" });

export interface StoragePool {
  /** Optional. Flag indicating if the pool is NFS LDAP enabled or not. */
  ldapEnabled?: boolean;
  /** Optional. This field is not implemented. The values provided in this field are ignored. */
  psaRange?: string;
  /** Optional. True if the storage pool supports Auto Tiering enabled volumes. Default is false. Auto-tiering can be enabled after storage pool creation but it can't be disabled once enabled. */
  allowAutoTiering?: boolean;
  /** Optional. Deprecated: Use scale_type instead. The effective scale tier of the storage pool. If `scale_tier` is not specified during creation, this defaults to `SCALE_TIER_STANDARD`. */
  scaleTier?:
    | "SCALE_TIER_UNSPECIFIED"
    | "SCALE_TIER_STANDARD"
    | "SCALE_TIER_ENTERPRISE"
    | (string & {});
  /** Optional. Specifies the replica zone for regional storagePool. */
  replicaZone?: string;
  /** Optional. Specifies the Active Directory to be used for creating a SMB volume. */
  activeDirectory?: string;
  /** Output only. Reserved for future use */
  satisfiesPzi?: boolean;
  /** Output only. Specifies the current pool encryption key source. */
  encryptionType?:
    | "ENCRYPTION_TYPE_UNSPECIFIED"
    | "SERVICE_MANAGED"
    | "CLOUD_KMS"
    | (string & {});
  /** Optional. Specifies the active zone for regional storagePool. */
  zone?: string;
  /** Required. Capacity in GIB of the pool */
  capacityGib?: string;
  /** Output only. Total hot tier data rounded down to the nearest GiB used by the storage pool. */
  hotTierSizeUsedGib?: string;
  /** Output only. Create time of the storage pool */
  createTime?: string;
  /** Optional. Total hot tier capacity for the Storage Pool. It is applicable only to Flex service level. It should be less than the minimum storage pool size and cannot be more than the current storage pool size. It cannot be decreased once set. */
  hotTierSizeGib?: string;
  /** Required. VPC Network name. Format: projects/{project}/global/networks/{network} */
  network?: string;
  /** Optional. Type of the storage pool. This field is used to control whether the pool supports `FILE` based volumes only or `UNIFIED` (both `FILE` and `BLOCK`) volumes. If not specified during creation, it defaults to `FILE`. */
  type?: "STORAGE_POOL_TYPE_UNSPECIFIED" | "FILE" | "UNIFIED" | (string & {});
  /** Output only. State of the storage pool */
  state?:
    | "STATE_UNSPECIFIED"
    | "READY"
    | "CREATING"
    | "DELETING"
    | "UPDATING"
    | "RESTORING"
    | "DISABLED"
    | "ERROR"
    | (string & {});
  /** Required. Service level of the storage pool */
  serviceLevel?:
    | "SERVICE_LEVEL_UNSPECIFIED"
    | "PREMIUM"
    | "EXTREME"
    | "STANDARD"
    | "FLEX"
    | (string & {});
  /** Output only. Allocated size of all volumes in GIB in the storage pool */
  volumeCapacityGib?: string;
  /** Optional. True if using Independent Scaling of capacity and performance (Hyperdisk) By default set to false */
  customPerformanceEnabled?: boolean;
  /** Optional. Description of the storage pool */
  description?: string;
  /** Optional. Specifies the KMS config to be used for volume encryption. */
  kmsConfig?: string;
  /** Output only. State details of the storage pool */
  stateDetails?: string;
  /** Optional. Mode of the storage pool. This field is used to control whether the user can perform ONTAP operations on the storage pool using the GCNV ONTAP Mode APIs. If not specified during creation, it defaults to `DEFAULT`. */
  mode?: "MODE_UNSPECIFIED" | "DEFAULT" | "ONTAP" | (string & {});
  /** Optional. Labels as key value pairs */
  labels?: Record<string, string>;
  /** Optional. Custom Performance Total Throughput of the pool (in MiBps) */
  totalThroughputMibps?: string;
  /** Output only. Total cold tier data rounded down to the nearest GiB used by the storage pool. */
  coldTierSizeUsedGib?: string;
  /** Output only. Reserved for future use */
  satisfiesPzs?: boolean;
  /** Optional. Flag indicating that the hot-tier threshold will be auto-increased by 10% of the hot-tier when it hits 100%. Default is true. The increment will kick in only if the new size after increment is still less than or equal to storage pool size. */
  enableHotTierAutoResize?: boolean;
  /** Deprecated. Used to allow SO pool to access AD or DNS server from other regions. */
  globalAccessAllowed?: boolean;
  /** Optional. Custom Performance Total IOPS of the pool if not provided, it will be calculated based on the total_throughput_mibps */
  totalIops?: string;
  /** Optional. The scale type of the storage pool. Defaults to `SCALE_TYPE_DEFAULT` if not specified. */
  scaleType?:
    | "SCALE_TYPE_UNSPECIFIED"
    | "SCALE_TYPE_DEFAULT"
    | "SCALE_TYPE_SCALEOUT"
    | (string & {});
  /** Output only. Available throughput of the storage pool (in MiB/s). */
  availableThroughputMibps?: number;
  /** Optional. QoS (Quality of Service) Type of the storage pool */
  qosType?: "QOS_TYPE_UNSPECIFIED" | "AUTO" | "MANUAL" | (string & {});
  /** Identifier. Name of the storage pool */
  name?: string;
  /** Output only. Volume count of the storage pool */
  volumeCount?: number;
}

export const StoragePool: Schema.Codec<StoragePool> =
  /*@__PURE__*/ Schema.Struct({
    ldapEnabled: Schema.optional(Schema.Boolean),
    psaRange: Schema.optional(Schema.String),
    allowAutoTiering: Schema.optional(Schema.Boolean),
    scaleTier: Schema.optional(Schema.String),
    replicaZone: Schema.optional(Schema.String),
    activeDirectory: Schema.optional(Schema.String),
    satisfiesPzi: Schema.optional(Schema.Boolean),
    encryptionType: Schema.optional(Schema.String),
    zone: Schema.optional(Schema.String),
    capacityGib: Schema.optional(Schema.String),
    hotTierSizeUsedGib: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    hotTierSizeGib: Schema.optional(Schema.String),
    network: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    serviceLevel: Schema.optional(Schema.String),
    volumeCapacityGib: Schema.optional(Schema.String),
    customPerformanceEnabled: Schema.optional(Schema.Boolean),
    description: Schema.optional(Schema.String),
    kmsConfig: Schema.optional(Schema.String),
    stateDetails: Schema.optional(Schema.String),
    mode: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    totalThroughputMibps: Schema.optional(Schema.String),
    coldTierSizeUsedGib: Schema.optional(Schema.String),
    satisfiesPzs: Schema.optional(Schema.Boolean),
    enableHotTierAutoResize: Schema.optional(Schema.Boolean),
    globalAccessAllowed: Schema.optional(Schema.Boolean),
    totalIops: Schema.optional(Schema.String),
    scaleType: Schema.optional(Schema.String),
    availableThroughputMibps: Schema.optional(Schema.Number),
    qosType: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    volumeCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "StoragePool" });

export interface ListStoragePoolsResponse {
  /** The list of StoragePools */
  storagePools?: ReadonlyArray<StoragePool>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListStoragePoolsResponse: Schema.Codec<ListStoragePoolsResponse> =
  /*@__PURE__*/ Schema.Struct({
    storagePools: Schema.optional(Schema.Array(StoragePool)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListStoragePoolsResponse" });

export interface StartSplitRequest {}

export const StartSplitRequest: Schema.Codec<StartSplitRequest> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "StartSplitRequest",
  });

export interface ListOperationsResponse {
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<Operation>;
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
  /** The standard List next-page token. */
  nextPageToken?: string;
}

export const ListOperationsResponse: Schema.Codec<ListOperationsResponse> =
  /*@__PURE__*/ Schema.Struct({
    operations: Schema.optional(Schema.Array(Operation)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListOperationsResponse" });

export interface EstablishVolumePeeringRequest {
  /** Required. Name of the user's local source cluster to be peered with the destination cluster. */
  peerClusterName?: string;
  /** Required. Name of the user's local source vserver svm to be peered with the destination vserver svm. */
  peerSvmName?: string;
  /** Optional. List of IPv4 IP addresses to be used for peering. */
  peerIpAddresses?: ReadonlyArray<string>;
  /** Required. Name of the user's local source volume to be peered with the destination volume. */
  peerVolumeName?: string;
}

export const EstablishVolumePeeringRequest: Schema.Codec<EstablishVolumePeeringRequest> =
  /*@__PURE__*/ Schema.Struct({
    peerClusterName: Schema.optional(Schema.String),
    peerSvmName: Schema.optional(Schema.String),
    peerIpAddresses: Schema.optional(Schema.Array(Schema.String)),
    peerVolumeName: Schema.optional(Schema.String),
  }).annotate({ identifier: "EstablishVolumePeeringRequest" });

export interface SyncReplicationRequest {}

export const SyncReplicationRequest: Schema.Codec<SyncReplicationRequest> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "SyncReplicationRequest",
  });

export interface RestoreVolumeRequest {
  /** The backup source of the restore operation. */
  backupSource?: BackupSource;
  /** The ONTAP volume target of the restore operation. */
  ontapVolumeTarget?: OntapVolumeTarget;
}

export const RestoreVolumeRequest: Schema.Codec<RestoreVolumeRequest> =
  /*@__PURE__*/ Schema.Struct({
    backupSource: Schema.optional(BackupSource),
    ontapVolumeTarget: Schema.optional(OntapVolumeTarget),
  }).annotate({ identifier: "RestoreVolumeRequest" });

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
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
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

export interface CreateProjectsLocationsVolumesRequest {
  /** Required. Value for parent. */
  parent: string;
  /** Required. Id of the requesting volume. Must be unique within the parent resource. Must contain only letters, numbers and hyphen, with the first character a letter, the last a letter or a number, and a 63 character maximum. */
  volumeId?: string;
  /** Request body */
  body?: Volume;
}

export const CreateProjectsLocationsVolumesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    volumeId: Schema.optional(Schema.String).pipe(T.HttpQuery("volumeId")),
    body: Schema.optional(Volume).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/volumes",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsVolumesRequest>;

export type CreateProjectsLocationsVolumesResponse = Operation;
export const CreateProjectsLocationsVolumesResponse = /*@__PURE__*/ Operation;

export type CreateProjectsLocationsVolumesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new Volume in a given project and location. */
export const createProjectsLocationsVolumes: API.OperationMethod<
  CreateProjectsLocationsVolumesRequest,
  CreateProjectsLocationsVolumesResponse,
  CreateProjectsLocationsVolumesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsVolumesRequest,
  output: CreateProjectsLocationsVolumesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface StartSplitProjectsLocationsVolumesRequest {
  /** Required. The full name of the clone volume to be split from its source. Format: projects/{project_number}/locations/{location}/volumes/{volume_id} */
  name: string;
  /** Request body */
  body?: StartSplitRequest;
}

export const StartSplitProjectsLocationsVolumesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(StartSplitRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+name}:startSplit",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<StartSplitProjectsLocationsVolumesRequest>;

export type StartSplitProjectsLocationsVolumesResponse = Operation;
export const StartSplitProjectsLocationsVolumesResponse =
  /*@__PURE__*/ Operation;

export type StartSplitProjectsLocationsVolumesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Splits a clone volume from its source volume. This operation will only work for volumes which have clone_details set(clones). For volumes that are not clones, this operation will return an error. */
export const startSplitProjectsLocationsVolumes: API.OperationMethod<
  StartSplitProjectsLocationsVolumesRequest,
  StartSplitProjectsLocationsVolumesResponse,
  StartSplitProjectsLocationsVolumesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartSplitProjectsLocationsVolumesRequest,
  output: StartSplitProjectsLocationsVolumesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsVolumesRequest {
  /** Required. Name of the volume */
  name: string;
}

export const GetProjectsLocationsVolumesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsVolumesRequest>;

export type GetProjectsLocationsVolumesResponse = Volume;
export const GetProjectsLocationsVolumesResponse = /*@__PURE__*/ Volume;

export type GetProjectsLocationsVolumesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single Volume. */
export const getProjectsLocationsVolumes: API.OperationMethod<
  GetProjectsLocationsVolumesRequest,
  GetProjectsLocationsVolumesResponse,
  GetProjectsLocationsVolumesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsVolumesRequest,
  output: GetProjectsLocationsVolumesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsVolumesRequest {
  /** A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Required. Parent value for ListVolumesRequest */
  parent: string;
  /** Filtering results */
  filter?: string;
  /** Hint for how to order the results */
  orderBy?: string;
  /** Requested page size. Server may return fewer items than requested. If unspecified, the server will pick an appropriate default. */
  pageSize?: number;
}

export const ListProjectsLocationsVolumesRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/volumes" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsVolumesRequest>;

export type ListProjectsLocationsVolumesResponse = ListVolumesResponse;
export const ListProjectsLocationsVolumesResponse =
  /*@__PURE__*/ ListVolumesResponse;

export type ListProjectsLocationsVolumesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Volumes in a given project. */
export const listProjectsLocationsVolumes: API.PaginatedOperationMethod<
  ListProjectsLocationsVolumesRequest,
  ListProjectsLocationsVolumesResponse,
  ListProjectsLocationsVolumesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsVolumesRequest,
  output: ListProjectsLocationsVolumesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsVolumesRequest {
  /** Required. Field mask is used to specify the fields to be overwritten in the Volume resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Identifier. Name of the volume */
  name: string;
  /** Request body */
  body?: Volume;
}

export const PatchProjectsLocationsVolumesRequest =
  /*@__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Volume).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsVolumesRequest>;

export type PatchProjectsLocationsVolumesResponse = Operation;
export const PatchProjectsLocationsVolumesResponse = /*@__PURE__*/ Operation;

export type PatchProjectsLocationsVolumesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single Volume. */
export const patchProjectsLocationsVolumes: API.OperationMethod<
  PatchProjectsLocationsVolumesRequest,
  PatchProjectsLocationsVolumesResponse,
  PatchProjectsLocationsVolumesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsVolumesRequest,
  output: PatchProjectsLocationsVolumesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RevertProjectsLocationsVolumesRequest {
  /** Required. The resource name of the volume, in the format of projects/{project_id}/locations/{location}/volumes/{volume_id}. */
  name: string;
  /** Request body */
  body?: RevertVolumeRequest;
}

export const RevertProjectsLocationsVolumesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(RevertVolumeRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta1/{+name}:revert", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<RevertProjectsLocationsVolumesRequest>;

export type RevertProjectsLocationsVolumesResponse = Operation;
export const RevertProjectsLocationsVolumesResponse = /*@__PURE__*/ Operation;

export type RevertProjectsLocationsVolumesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Revert an existing volume to a specified snapshot. Warning! This operation will permanently revert all changes made after the snapshot was created. */
export const revertProjectsLocationsVolumes: API.OperationMethod<
  RevertProjectsLocationsVolumesRequest,
  RevertProjectsLocationsVolumesResponse,
  RevertProjectsLocationsVolumesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RevertProjectsLocationsVolumesRequest,
  output: RevertProjectsLocationsVolumesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RestoreProjectsLocationsVolumesRequest {
  /** Required. The volume resource name, in the format `projects/{project_id}/locations/{location}/volumes/{volume_id}` */
  name: string;
  /** Request body */
  body?: RestoreBackupFilesRequest;
}

export const RestoreProjectsLocationsVolumesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(RestoreBackupFilesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta1/{+name}:restore", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<RestoreProjectsLocationsVolumesRequest>;

export type RestoreProjectsLocationsVolumesResponse = Operation;
export const RestoreProjectsLocationsVolumesResponse = /*@__PURE__*/ Operation;

export type RestoreProjectsLocationsVolumesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Restore files from a backup to a volume. */
export const restoreProjectsLocationsVolumes: API.OperationMethod<
  RestoreProjectsLocationsVolumesRequest,
  RestoreProjectsLocationsVolumesResponse,
  RestoreProjectsLocationsVolumesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RestoreProjectsLocationsVolumesRequest,
  output: RestoreProjectsLocationsVolumesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsVolumesRequest {
  /** Required. Name of the volume */
  name: string;
  /** If this field is set as true, CCFE will not block the volume resource deletion even if it has any snapshots resource. (Otherwise, the request will only work if the volume has no snapshots.) */
  force?: boolean;
}

export const DeleteProjectsLocationsVolumesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsVolumesRequest>;

export type DeleteProjectsLocationsVolumesResponse = Operation;
export const DeleteProjectsLocationsVolumesResponse = /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsVolumesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single Volume. */
export const deleteProjectsLocationsVolumes: API.OperationMethod<
  DeleteProjectsLocationsVolumesRequest,
  DeleteProjectsLocationsVolumesResponse,
  DeleteProjectsLocationsVolumesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsVolumesRequest,
  output: DeleteProjectsLocationsVolumesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetSplitStatusProjectsLocationsVolumesRequest {
  /** Required. The full name of the volume. Format: projects/{project_number}/locations/{location}/volumes/{volume_id} */
  name: string;
}

export const GetSplitStatusProjectsLocationsVolumesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}:getSplitStatus" }),
    svc,
  ) as unknown as Schema.Codec<GetSplitStatusProjectsLocationsVolumesRequest>;

export type GetSplitStatusProjectsLocationsVolumesResponse = SplitStatus;
export const GetSplitStatusProjectsLocationsVolumesResponse =
  /*@__PURE__*/ SplitStatus;

export type GetSplitStatusProjectsLocationsVolumesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves the current state, progress, and details of a split operation for a volume. This method is relevant when the volume is a clone. For volumes that are not clones, this method will return an error. */
export const getSplitStatusProjectsLocationsVolumes: API.OperationMethod<
  GetSplitStatusProjectsLocationsVolumesRequest,
  GetSplitStatusProjectsLocationsVolumesResponse,
  GetSplitStatusProjectsLocationsVolumesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSplitStatusProjectsLocationsVolumesRequest,
  output: GetSplitStatusProjectsLocationsVolumesResponse,
  errors: [NotFound, Forbidden],
}));

export interface EstablishPeeringProjectsLocationsVolumesRequest {
  /** Required. The volume resource name, in the format `projects/{project_id}/locations/{location}/volumes/{volume_id}` */
  name: string;
  /** Request body */
  body?: EstablishVolumePeeringRequest;
}

export const EstablishPeeringProjectsLocationsVolumesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(EstablishVolumePeeringRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+name}:establishPeering",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<EstablishPeeringProjectsLocationsVolumesRequest>;

export type EstablishPeeringProjectsLocationsVolumesResponse = Operation;
export const EstablishPeeringProjectsLocationsVolumesResponse =
  /*@__PURE__*/ Operation;

export type EstablishPeeringProjectsLocationsVolumesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Establish volume peering. This is used to establish cluster and svm peerings between the GCNV and OnPrem clusters. */
export const establishPeeringProjectsLocationsVolumes: API.OperationMethod<
  EstablishPeeringProjectsLocationsVolumesRequest,
  EstablishPeeringProjectsLocationsVolumesResponse,
  EstablishPeeringProjectsLocationsVolumesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: EstablishPeeringProjectsLocationsVolumesRequest,
  output: EstablishPeeringProjectsLocationsVolumesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ResumeProjectsLocationsVolumesReplicationsRequest {
  /** Required. The resource name of the replication, in the format of projects/{project_id}/locations/{location}/volumes/{volume_id}/replications/{replication_id}. */
  name: string;
  /** Request body */
  body?: ResumeReplicationRequest;
}

export const ResumeProjectsLocationsVolumesReplicationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ResumeReplicationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta1/{+name}:resume", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<ResumeProjectsLocationsVolumesReplicationsRequest>;

export type ResumeProjectsLocationsVolumesReplicationsResponse = Operation;
export const ResumeProjectsLocationsVolumesReplicationsResponse =
  /*@__PURE__*/ Operation;

export type ResumeProjectsLocationsVolumesReplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Resume Cross Region Replication. */
export const resumeProjectsLocationsVolumesReplications: API.OperationMethod<
  ResumeProjectsLocationsVolumesReplicationsRequest,
  ResumeProjectsLocationsVolumesReplicationsResponse,
  ResumeProjectsLocationsVolumesReplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ResumeProjectsLocationsVolumesReplicationsRequest,
  output: ResumeProjectsLocationsVolumesReplicationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsVolumesReplicationsRequest {
  /** Required. The replication resource name, in the format `projects/* /locations/* /volumes/* /replications/{replication_id}` */
  name: string;
}

export const DeleteProjectsLocationsVolumesReplicationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsVolumesReplicationsRequest>;

export type DeleteProjectsLocationsVolumesReplicationsResponse = Operation;
export const DeleteProjectsLocationsVolumesReplicationsResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsVolumesReplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a replication. */
export const deleteProjectsLocationsVolumesReplications: API.OperationMethod<
  DeleteProjectsLocationsVolumesReplicationsRequest,
  DeleteProjectsLocationsVolumesReplicationsResponse,
  DeleteProjectsLocationsVolumesReplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsVolumesReplicationsRequest,
  output: DeleteProjectsLocationsVolumesReplicationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface EstablishPeeringProjectsLocationsVolumesReplicationsRequest {
  /** Required. The resource name of the replication, in the format of projects/{project_id}/locations/{location}/volumes/{volume_id}/replications/{replication_id}. */
  name: string;
  /** Request body */
  body?: EstablishPeeringRequest;
}

export const EstablishPeeringProjectsLocationsVolumesReplicationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(EstablishPeeringRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+name}:establishPeering",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<EstablishPeeringProjectsLocationsVolumesReplicationsRequest>;

export type EstablishPeeringProjectsLocationsVolumesReplicationsResponse =
  Operation;
export const EstablishPeeringProjectsLocationsVolumesReplicationsResponse =
  /*@__PURE__*/ Operation;

export type EstablishPeeringProjectsLocationsVolumesReplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Establish replication peering. */
export const establishPeeringProjectsLocationsVolumesReplications: API.OperationMethod<
  EstablishPeeringProjectsLocationsVolumesReplicationsRequest,
  EstablishPeeringProjectsLocationsVolumesReplicationsResponse,
  EstablishPeeringProjectsLocationsVolumesReplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: EstablishPeeringProjectsLocationsVolumesReplicationsRequest,
  output: EstablishPeeringProjectsLocationsVolumesReplicationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SyncProjectsLocationsVolumesReplicationsRequest {
  /** Required. The resource name of the replication, in the format of projects/{project_id}/locations/{location}/volumes/{volume_id}/replications/{replication_id}. */
  name: string;
  /** Request body */
  body?: SyncReplicationRequest;
}

export const SyncProjectsLocationsVolumesReplicationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SyncReplicationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta1/{+name}:sync", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<SyncProjectsLocationsVolumesReplicationsRequest>;

export type SyncProjectsLocationsVolumesReplicationsResponse = Operation;
export const SyncProjectsLocationsVolumesReplicationsResponse =
  /*@__PURE__*/ Operation;

export type SyncProjectsLocationsVolumesReplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Syncs the replication. This will invoke one time volume data transfer from source to destination. */
export const syncProjectsLocationsVolumesReplications: API.OperationMethod<
  SyncProjectsLocationsVolumesReplicationsRequest,
  SyncProjectsLocationsVolumesReplicationsResponse,
  SyncProjectsLocationsVolumesReplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SyncProjectsLocationsVolumesReplicationsRequest,
  output: SyncProjectsLocationsVolumesReplicationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsVolumesReplicationsRequest {
  /** Required. The NetApp volume to create the replications of, in the format `projects/{project_id}/locations/{location}/volumes/{volume_id}` */
  parent: string;
  /** Required. ID of the replication to create. Must be unique within the parent resource. Must contain only letters, numbers and hyphen, with the first character a letter, the last a letter or a number, and a 63 character maximum. */
  replicationId?: string;
  /** Request body */
  body?: Replication;
}

export const CreateProjectsLocationsVolumesReplicationsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    replicationId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("replicationId"),
    ),
    body: Schema.optional(Replication).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/replications",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsVolumesReplicationsRequest>;

export type CreateProjectsLocationsVolumesReplicationsResponse = Operation;
export const CreateProjectsLocationsVolumesReplicationsResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsVolumesReplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a new replication for a volume. */
export const createProjectsLocationsVolumesReplications: API.OperationMethod<
  CreateProjectsLocationsVolumesReplicationsRequest,
  CreateProjectsLocationsVolumesReplicationsResponse,
  CreateProjectsLocationsVolumesReplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsVolumesReplicationsRequest,
  output: CreateProjectsLocationsVolumesReplicationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ReverseDirectionProjectsLocationsVolumesReplicationsRequest {
  /** Required. The resource name of the replication, in the format of projects/{project_id}/locations/{location}/volumes/{volume_id}/replications/{replication_id}. */
  name: string;
  /** Request body */
  body?: ReverseReplicationDirectionRequest;
}

export const ReverseDirectionProjectsLocationsVolumesReplicationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ReverseReplicationDirectionRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+name}:reverseDirection",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<ReverseDirectionProjectsLocationsVolumesReplicationsRequest>;

export type ReverseDirectionProjectsLocationsVolumesReplicationsResponse =
  Operation;
export const ReverseDirectionProjectsLocationsVolumesReplicationsResponse =
  /*@__PURE__*/ Operation;

export type ReverseDirectionProjectsLocationsVolumesReplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Reverses direction of replication. Source becomes destination and destination becomes source. */
export const reverseDirectionProjectsLocationsVolumesReplications: API.OperationMethod<
  ReverseDirectionProjectsLocationsVolumesReplicationsRequest,
  ReverseDirectionProjectsLocationsVolumesReplicationsResponse,
  ReverseDirectionProjectsLocationsVolumesReplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ReverseDirectionProjectsLocationsVolumesReplicationsRequest,
  output: ReverseDirectionProjectsLocationsVolumesReplicationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsVolumesReplicationsRequest {
  /** Required. The replication resource name, in the format `projects/{project_id}/locations/{location}/volumes/{volume_id}/replications/{replication_id}` */
  name: string;
}

export const GetProjectsLocationsVolumesReplicationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsVolumesReplicationsRequest>;

export type GetProjectsLocationsVolumesReplicationsResponse = Replication;
export const GetProjectsLocationsVolumesReplicationsResponse =
  /*@__PURE__*/ Replication;

export type GetProjectsLocationsVolumesReplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Describe a replication for a volume. */
export const getProjectsLocationsVolumesReplications: API.OperationMethod<
  GetProjectsLocationsVolumesReplicationsRequest,
  GetProjectsLocationsVolumesReplicationsResponse,
  GetProjectsLocationsVolumesReplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsVolumesReplicationsRequest,
  output: GetProjectsLocationsVolumesReplicationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface StopProjectsLocationsVolumesReplicationsRequest {
  /** Required. The resource name of the replication, in the format of projects/{project_id}/locations/{location}/volumes/{volume_id}/replications/{replication_id}. */
  name: string;
  /** Request body */
  body?: StopReplicationRequest;
}

export const StopProjectsLocationsVolumesReplicationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(StopReplicationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta1/{+name}:stop", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<StopProjectsLocationsVolumesReplicationsRequest>;

export type StopProjectsLocationsVolumesReplicationsResponse = Operation;
export const StopProjectsLocationsVolumesReplicationsResponse =
  /*@__PURE__*/ Operation;

export type StopProjectsLocationsVolumesReplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Stop Cross Region Replication. */
export const stopProjectsLocationsVolumesReplications: API.OperationMethod<
  StopProjectsLocationsVolumesReplicationsRequest,
  StopProjectsLocationsVolumesReplicationsResponse,
  StopProjectsLocationsVolumesReplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StopProjectsLocationsVolumesReplicationsRequest,
  output: StopProjectsLocationsVolumesReplicationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsVolumesReplicationsRequest {
  /** Identifier. The resource name of the Replication. Format: `projects/{project_id}/locations/{location}/volumes/{volume_id}/replications/{replication_id}`. */
  name: string;
  /** Required. Mask of fields to update. At least one path must be supplied in this field. */
  updateMask?: string;
  /** Request body */
  body?: Replication;
}

export const PatchProjectsLocationsVolumesReplicationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Replication).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsVolumesReplicationsRequest>;

export type PatchProjectsLocationsVolumesReplicationsResponse = Operation;
export const PatchProjectsLocationsVolumesReplicationsResponse =
  /*@__PURE__*/ Operation;

export type PatchProjectsLocationsVolumesReplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the settings of a specific replication. */
export const patchProjectsLocationsVolumesReplications: API.OperationMethod<
  PatchProjectsLocationsVolumesReplicationsRequest,
  PatchProjectsLocationsVolumesReplicationsResponse,
  PatchProjectsLocationsVolumesReplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsVolumesReplicationsRequest,
  output: PatchProjectsLocationsVolumesReplicationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsVolumesReplicationsRequest {
  /** The next_page_token value to use if there are additional results to retrieve for this list request. */
  pageToken?: string;
  /** Required. The volume for which to retrieve replication information, in the format `projects/{project_id}/locations/{location}/volumes/{volume_id}`. */
  parent: string;
  /** Sort results. Supported values are "name", "name desc" or "" (unsorted). */
  orderBy?: string;
  /** List filter. */
  filter?: string;
  /** The maximum number of items to return. */
  pageSize?: number;
}

export const ListProjectsLocationsVolumesReplicationsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/replications" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsVolumesReplicationsRequest>;

export type ListProjectsLocationsVolumesReplicationsResponse =
  ListReplicationsResponse;
export const ListProjectsLocationsVolumesReplicationsResponse =
  /*@__PURE__*/ ListReplicationsResponse;

export type ListProjectsLocationsVolumesReplicationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns descriptions of all replications for a volume. */
export const listProjectsLocationsVolumesReplications: API.PaginatedOperationMethod<
  ListProjectsLocationsVolumesReplicationsRequest,
  ListProjectsLocationsVolumesReplicationsResponse,
  ListProjectsLocationsVolumesReplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsVolumesReplicationsRequest,
  output: ListProjectsLocationsVolumesReplicationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsVolumesQuotaRulesRequest {
  /** Optional. Field mask is used to specify the fields to be overwritten in the Quota Rule resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Identifier. The resource name of the quota rule. Format: `projects/{project_number}/locations/{location_id}/volumes/volumes/{volume_id}/quotaRules/{quota_rule_id}`. */
  name: string;
  /** Request body */
  body?: QuotaRule;
}

export const PatchProjectsLocationsVolumesQuotaRulesRequest =
  /*@__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(QuotaRule).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsVolumesQuotaRulesRequest>;

export type PatchProjectsLocationsVolumesQuotaRulesResponse = Operation;
export const PatchProjectsLocationsVolumesQuotaRulesResponse =
  /*@__PURE__*/ Operation;

export type PatchProjectsLocationsVolumesQuotaRulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a quota rule. */
export const patchProjectsLocationsVolumesQuotaRules: API.OperationMethod<
  PatchProjectsLocationsVolumesQuotaRulesRequest,
  PatchProjectsLocationsVolumesQuotaRulesResponse,
  PatchProjectsLocationsVolumesQuotaRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsVolumesQuotaRulesRequest,
  output: PatchProjectsLocationsVolumesQuotaRulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsVolumesQuotaRulesRequest {
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Required. Parent value for ListQuotaRulesRequest */
  parent: string;
  /** Optional. Filtering results */
  filter?: string;
  /** Optional. Hint for how to order the results */
  orderBy?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, the server will pick an appropriate default. */
  pageSize?: number;
}

export const ListProjectsLocationsVolumesQuotaRulesRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/quotaRules" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsVolumesQuotaRulesRequest>;

export type ListProjectsLocationsVolumesQuotaRulesResponse =
  ListQuotaRulesResponse;
export const ListProjectsLocationsVolumesQuotaRulesResponse =
  /*@__PURE__*/ ListQuotaRulesResponse;

export type ListProjectsLocationsVolumesQuotaRulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns list of all quota rules in a location. */
export const listProjectsLocationsVolumesQuotaRules: API.PaginatedOperationMethod<
  ListProjectsLocationsVolumesQuotaRulesRequest,
  ListProjectsLocationsVolumesQuotaRulesResponse,
  ListProjectsLocationsVolumesQuotaRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsVolumesQuotaRulesRequest,
  output: ListProjectsLocationsVolumesQuotaRulesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsVolumesQuotaRulesRequest {
  /** Required. Name of the quota rule. */
  name: string;
}

export const DeleteProjectsLocationsVolumesQuotaRulesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsVolumesQuotaRulesRequest>;

export type DeleteProjectsLocationsVolumesQuotaRulesResponse = Operation;
export const DeleteProjectsLocationsVolumesQuotaRulesResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsVolumesQuotaRulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a quota rule. */
export const deleteProjectsLocationsVolumesQuotaRules: API.OperationMethod<
  DeleteProjectsLocationsVolumesQuotaRulesRequest,
  DeleteProjectsLocationsVolumesQuotaRulesResponse,
  DeleteProjectsLocationsVolumesQuotaRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsVolumesQuotaRulesRequest,
  output: DeleteProjectsLocationsVolumesQuotaRulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsVolumesQuotaRulesRequest {
  /** Required. Name of the quota rule */
  name: string;
}

export const GetProjectsLocationsVolumesQuotaRulesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsVolumesQuotaRulesRequest>;

export type GetProjectsLocationsVolumesQuotaRulesResponse = QuotaRule;
export const GetProjectsLocationsVolumesQuotaRulesResponse =
  /*@__PURE__*/ QuotaRule;

export type GetProjectsLocationsVolumesQuotaRulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns details of the specified quota rule. */
export const getProjectsLocationsVolumesQuotaRules: API.OperationMethod<
  GetProjectsLocationsVolumesQuotaRulesRequest,
  GetProjectsLocationsVolumesQuotaRulesResponse,
  GetProjectsLocationsVolumesQuotaRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsVolumesQuotaRulesRequest,
  output: GetProjectsLocationsVolumesQuotaRulesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsVolumesQuotaRulesRequest {
  /** Required. Parent value for CreateQuotaRuleRequest */
  parent: string;
  /** Required. ID of the quota rule to create. Must be unique within the parent resource. Must contain only letters, numbers, underscore and hyphen, with the first character a letter or underscore, the last a letter or underscore or a number, and a 63 character maximum. */
  quotaRuleId?: string;
  /** Request body */
  body?: QuotaRule;
}

export const CreateProjectsLocationsVolumesQuotaRulesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    quotaRuleId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("quotaRuleId"),
    ),
    body: Schema.optional(QuotaRule).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/quotaRules",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsVolumesQuotaRulesRequest>;

export type CreateProjectsLocationsVolumesQuotaRulesResponse = Operation;
export const CreateProjectsLocationsVolumesQuotaRulesResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsVolumesQuotaRulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new quota rule. */
export const createProjectsLocationsVolumesQuotaRules: API.OperationMethod<
  CreateProjectsLocationsVolumesQuotaRulesRequest,
  CreateProjectsLocationsVolumesQuotaRulesResponse,
  CreateProjectsLocationsVolumesQuotaRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsVolumesQuotaRulesRequest,
  output: CreateProjectsLocationsVolumesQuotaRulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsVolumesSnapshotsRequest {
  /** The next_page_token value to use if there are additional results to retrieve for this list request. */
  pageToken?: string;
  /** Required. The volume for which to retrieve snapshot information, in the format `projects/{project_id}/locations/{location}/volumes/{volume_id}`. */
  parent: string;
  /** Sort results. Supported values are "name", "name desc" or "" (unsorted). */
  orderBy?: string;
  /** List filter. */
  filter?: string;
  /** The maximum number of items to return. */
  pageSize?: number;
}

export const ListProjectsLocationsVolumesSnapshotsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/snapshots" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsVolumesSnapshotsRequest>;

export type ListProjectsLocationsVolumesSnapshotsResponse =
  ListSnapshotsResponse;
export const ListProjectsLocationsVolumesSnapshotsResponse =
  /*@__PURE__*/ ListSnapshotsResponse;

export type ListProjectsLocationsVolumesSnapshotsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns descriptions of all snapshots for a volume. */
export const listProjectsLocationsVolumesSnapshots: API.PaginatedOperationMethod<
  ListProjectsLocationsVolumesSnapshotsRequest,
  ListProjectsLocationsVolumesSnapshotsResponse,
  ListProjectsLocationsVolumesSnapshotsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsVolumesSnapshotsRequest,
  output: ListProjectsLocationsVolumesSnapshotsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsVolumesSnapshotsRequest {
  /** Required. Mask of fields to update. At least one path must be supplied in this field. */
  updateMask?: string;
  /** Identifier. The resource name of the snapshot. Format: `projects/{project_id}/locations/{location}/volumes/{volume_id}/snapshots/{snapshot_id}`. */
  name: string;
  /** Request body */
  body?: Snapshot;
}

export const PatchProjectsLocationsVolumesSnapshotsRequest =
  /*@__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Snapshot).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsVolumesSnapshotsRequest>;

export type PatchProjectsLocationsVolumesSnapshotsResponse = Operation;
export const PatchProjectsLocationsVolumesSnapshotsResponse =
  /*@__PURE__*/ Operation;

export type PatchProjectsLocationsVolumesSnapshotsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the settings of a specific snapshot. */
export const patchProjectsLocationsVolumesSnapshots: API.OperationMethod<
  PatchProjectsLocationsVolumesSnapshotsRequest,
  PatchProjectsLocationsVolumesSnapshotsResponse,
  PatchProjectsLocationsVolumesSnapshotsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsVolumesSnapshotsRequest,
  output: PatchProjectsLocationsVolumesSnapshotsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsVolumesSnapshotsRequest {
  /** Required. The snapshot resource name, in the format `projects/* /locations/* /volumes/* /snapshots/{snapshot_id}` */
  name: string;
}

export const DeleteProjectsLocationsVolumesSnapshotsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsVolumesSnapshotsRequest>;

export type DeleteProjectsLocationsVolumesSnapshotsResponse = Operation;
export const DeleteProjectsLocationsVolumesSnapshotsResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsVolumesSnapshotsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a snapshot. */
export const deleteProjectsLocationsVolumesSnapshots: API.OperationMethod<
  DeleteProjectsLocationsVolumesSnapshotsRequest,
  DeleteProjectsLocationsVolumesSnapshotsResponse,
  DeleteProjectsLocationsVolumesSnapshotsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsVolumesSnapshotsRequest,
  output: DeleteProjectsLocationsVolumesSnapshotsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsVolumesSnapshotsRequest {
  /** Required. The snapshot resource name, in the format `projects/{project_id}/locations/{location}/volumes/{volume_id}/snapshots/{snapshot_id}` */
  name: string;
}

export const GetProjectsLocationsVolumesSnapshotsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsVolumesSnapshotsRequest>;

export type GetProjectsLocationsVolumesSnapshotsResponse = Snapshot;
export const GetProjectsLocationsVolumesSnapshotsResponse =
  /*@__PURE__*/ Snapshot;

export type GetProjectsLocationsVolumesSnapshotsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Describe a snapshot for a volume. */
export const getProjectsLocationsVolumesSnapshots: API.OperationMethod<
  GetProjectsLocationsVolumesSnapshotsRequest,
  GetProjectsLocationsVolumesSnapshotsResponse,
  GetProjectsLocationsVolumesSnapshotsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsVolumesSnapshotsRequest,
  output: GetProjectsLocationsVolumesSnapshotsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsVolumesSnapshotsRequest {
  /** Required. The NetApp volume to create the snapshots of, in the format `projects/{project_id}/locations/{location}/volumes/{volume_id}` */
  parent: string;
  /** Required. ID of the snapshot to create. Must be unique within the parent resource. Must contain only letters, numbers and hyphen, with the first character a letter, the last a letter or a number, and a 63 character maximum. */
  snapshotId?: string;
  /** Request body */
  body?: Snapshot;
}

export const CreateProjectsLocationsVolumesSnapshotsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    snapshotId: Schema.optional(Schema.String).pipe(T.HttpQuery("snapshotId")),
    body: Schema.optional(Snapshot).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/snapshots",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsVolumesSnapshotsRequest>;

export type CreateProjectsLocationsVolumesSnapshotsResponse = Operation;
export const CreateProjectsLocationsVolumesSnapshotsResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsVolumesSnapshotsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a new snapshot for a volume. */
export const createProjectsLocationsVolumesSnapshots: API.OperationMethod<
  CreateProjectsLocationsVolumesSnapshotsRequest,
  CreateProjectsLocationsVolumesSnapshotsResponse,
  CreateProjectsLocationsVolumesSnapshotsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsVolumesSnapshotsRequest,
  output: CreateProjectsLocationsVolumesSnapshotsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsHostGroupsRequest {
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, the server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Required. Parent value for ListHostGroupsRequest */
  parent: string;
  /** Optional. Filter to apply to the request. */
  filter?: string;
  /** Optional. Hint for how to order the results */
  orderBy?: string;
}

export const ListProjectsLocationsHostGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/hostGroups" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsHostGroupsRequest>;

export type ListProjectsLocationsHostGroupsResponse = ListHostGroupsResponse;
export const ListProjectsLocationsHostGroupsResponse =
  /*@__PURE__*/ ListHostGroupsResponse;

export type ListProjectsLocationsHostGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns a list of host groups in a `location`. Use `-` as location to list host groups across all locations. */
export const listProjectsLocationsHostGroups: API.PaginatedOperationMethod<
  ListProjectsLocationsHostGroupsRequest,
  ListProjectsLocationsHostGroupsResponse,
  ListProjectsLocationsHostGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsHostGroupsRequest,
  output: ListProjectsLocationsHostGroupsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsHostGroupsRequest {
  /** Optional. The list of fields to update. */
  updateMask?: string;
  /** Identifier. The resource name of the host group. Format: `projects/{project_number}/locations/{location_id}/hostGroups/{host_group_id}`. */
  name: string;
  /** Request body */
  body?: HostGroup;
}

export const PatchProjectsLocationsHostGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(HostGroup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsHostGroupsRequest>;

export type PatchProjectsLocationsHostGroupsResponse = Operation;
export const PatchProjectsLocationsHostGroupsResponse = /*@__PURE__*/ Operation;

export type PatchProjectsLocationsHostGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing host group. */
export const patchProjectsLocationsHostGroups: API.OperationMethod<
  PatchProjectsLocationsHostGroupsRequest,
  PatchProjectsLocationsHostGroupsResponse,
  PatchProjectsLocationsHostGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsHostGroupsRequest,
  output: PatchProjectsLocationsHostGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsHostGroupsRequest {
  /** Required. The resource name of the host group. Format: `projects/{project_number}/locations/{location_id}/hostGroups/{host_group_id}`. */
  name: string;
}

export const DeleteProjectsLocationsHostGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsHostGroupsRequest>;

export type DeleteProjectsLocationsHostGroupsResponse = Operation;
export const DeleteProjectsLocationsHostGroupsResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsHostGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a host group. */
export const deleteProjectsLocationsHostGroups: API.OperationMethod<
  DeleteProjectsLocationsHostGroupsRequest,
  DeleteProjectsLocationsHostGroupsResponse,
  DeleteProjectsLocationsHostGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsHostGroupsRequest,
  output: DeleteProjectsLocationsHostGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsHostGroupsRequest {
  /** Required. The resource name of the host group. Format: `projects/{project_number}/locations/{location_id}/hostGroups/{host_group_id}`. */
  name: string;
}

export const GetProjectsLocationsHostGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsHostGroupsRequest>;

export type GetProjectsLocationsHostGroupsResponse = HostGroup;
export const GetProjectsLocationsHostGroupsResponse = /*@__PURE__*/ HostGroup;

export type GetProjectsLocationsHostGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns details of the specified host group. */
export const getProjectsLocationsHostGroups: API.OperationMethod<
  GetProjectsLocationsHostGroupsRequest,
  GetProjectsLocationsHostGroupsResponse,
  GetProjectsLocationsHostGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsHostGroupsRequest,
  output: GetProjectsLocationsHostGroupsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsHostGroupsRequest {
  /** Required. Parent value for CreateHostGroupRequest */
  parent: string;
  /** Required. ID of the host group to create. Must be unique within the parent resource. Must contain only letters, numbers, and hyphen, with the first character a letter or underscore, the last a letter or underscore or a number, and a 63 character maximum. */
  hostGroupId?: string;
  /** Request body */
  body?: HostGroup;
}

export const CreateProjectsLocationsHostGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    hostGroupId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("hostGroupId"),
    ),
    body: Schema.optional(HostGroup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/hostGroups",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsHostGroupsRequest>;

export type CreateProjectsLocationsHostGroupsResponse = Operation;
export const CreateProjectsLocationsHostGroupsResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsHostGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new host group. */
export const createProjectsLocationsHostGroups: API.OperationMethod<
  CreateProjectsLocationsHostGroupsRequest,
  CreateProjectsLocationsHostGroupsResponse,
  CreateProjectsLocationsHostGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsHostGroupsRequest,
  output: CreateProjectsLocationsHostGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsActiveDirectoriesRequest {
  /** Required. Name of the active directory. */
  name: string;
}

export const DeleteProjectsLocationsActiveDirectoriesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsActiveDirectoriesRequest>;

export type DeleteProjectsLocationsActiveDirectoriesResponse = Operation;
export const DeleteProjectsLocationsActiveDirectoriesResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsActiveDirectoriesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete the active directory specified in the request. */
export const deleteProjectsLocationsActiveDirectories: API.OperationMethod<
  DeleteProjectsLocationsActiveDirectoriesRequest,
  DeleteProjectsLocationsActiveDirectoriesResponse,
  DeleteProjectsLocationsActiveDirectoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsActiveDirectoriesRequest,
  output: DeleteProjectsLocationsActiveDirectoriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsActiveDirectoriesRequest {
  /** A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Required. Parent value for ListActiveDirectoriesRequest */
  parent: string;
  /** Filtering results */
  filter?: string;
  /** Hint for how to order the results */
  orderBy?: string;
  /** Requested page size. Server may return fewer items than requested. If unspecified, the server will pick an appropriate default. */
  pageSize?: number;
}

export const ListProjectsLocationsActiveDirectoriesRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/activeDirectories" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsActiveDirectoriesRequest>;

export type ListProjectsLocationsActiveDirectoriesResponse =
  ListActiveDirectoriesResponse;
export const ListProjectsLocationsActiveDirectoriesResponse =
  /*@__PURE__*/ ListActiveDirectoriesResponse;

export type ListProjectsLocationsActiveDirectoriesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists active directories. */
export const listProjectsLocationsActiveDirectories: API.PaginatedOperationMethod<
  ListProjectsLocationsActiveDirectoriesRequest,
  ListProjectsLocationsActiveDirectoriesResponse,
  ListProjectsLocationsActiveDirectoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsActiveDirectoriesRequest,
  output: ListProjectsLocationsActiveDirectoriesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsActiveDirectoriesRequest {
  /** Required. Field mask is used to specify the fields to be overwritten in the Active Directory resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Identifier. The resource name of the active directory. Format: `projects/{project_number}/locations/{location_id}/activeDirectories/{active_directory_id}`. */
  name: string;
  /** Request body */
  body?: ActiveDirectory;
}

export const PatchProjectsLocationsActiveDirectoriesRequest =
  /*@__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ActiveDirectory).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsActiveDirectoriesRequest>;

export type PatchProjectsLocationsActiveDirectoriesResponse = Operation;
export const PatchProjectsLocationsActiveDirectoriesResponse =
  /*@__PURE__*/ Operation;

export type PatchProjectsLocationsActiveDirectoriesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update the parameters of an active directories. */
export const patchProjectsLocationsActiveDirectories: API.OperationMethod<
  PatchProjectsLocationsActiveDirectoriesRequest,
  PatchProjectsLocationsActiveDirectoriesResponse,
  PatchProjectsLocationsActiveDirectoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsActiveDirectoriesRequest,
  output: PatchProjectsLocationsActiveDirectoriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsActiveDirectoriesRequest {
  /** Required. Value for parent. */
  parent: string;
  /** Required. ID of the active directory to create. Must be unique within the parent resource. Must contain only letters, numbers and hyphen, with the first character a letter , the last a letter or a number, and a 63 character maximum. */
  activeDirectoryId?: string;
  /** Request body */
  body?: ActiveDirectory;
}

export const CreateProjectsLocationsActiveDirectoriesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    activeDirectoryId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("activeDirectoryId"),
    ),
    body: Schema.optional(ActiveDirectory).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/activeDirectories",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsActiveDirectoriesRequest>;

export type CreateProjectsLocationsActiveDirectoriesResponse = Operation;
export const CreateProjectsLocationsActiveDirectoriesResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsActiveDirectoriesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** CreateActiveDirectory Creates the active directory specified in the request. */
export const createProjectsLocationsActiveDirectories: API.OperationMethod<
  CreateProjectsLocationsActiveDirectoriesRequest,
  CreateProjectsLocationsActiveDirectoriesResponse,
  CreateProjectsLocationsActiveDirectoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsActiveDirectoriesRequest,
  output: CreateProjectsLocationsActiveDirectoriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsActiveDirectoriesRequest {
  /** Required. Name of the active directory. */
  name: string;
}

export const GetProjectsLocationsActiveDirectoriesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsActiveDirectoriesRequest>;

export type GetProjectsLocationsActiveDirectoriesResponse = ActiveDirectory;
export const GetProjectsLocationsActiveDirectoriesResponse =
  /*@__PURE__*/ ActiveDirectory;

export type GetProjectsLocationsActiveDirectoriesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Describes a specified active directory. */
export const getProjectsLocationsActiveDirectories: API.OperationMethod<
  GetProjectsLocationsActiveDirectoriesRequest,
  GetProjectsLocationsActiveDirectoriesResponse,
  GetProjectsLocationsActiveDirectoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsActiveDirectoriesRequest,
  output: GetProjectsLocationsActiveDirectoriesResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsBackupVaultsRequest {
  /** Identifier. The resource name of the backup vault. Format: `projects/{project_id}/locations/{location}/backupVaults/{backup_vault_id}`. */
  name: string;
  /** Required. Field mask is used to specify the fields to be overwritten in the Backup resource to be updated. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Request body */
  body?: BackupVault;
}

export const PatchProjectsLocationsBackupVaultsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(BackupVault).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsBackupVaultsRequest>;

export type PatchProjectsLocationsBackupVaultsResponse = Operation;
export const PatchProjectsLocationsBackupVaultsResponse =
  /*@__PURE__*/ Operation;

export type PatchProjectsLocationsBackupVaultsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the settings of a specific backup vault. */
export const patchProjectsLocationsBackupVaults: API.OperationMethod<
  PatchProjectsLocationsBackupVaultsRequest,
  PatchProjectsLocationsBackupVaultsResponse,
  PatchProjectsLocationsBackupVaultsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsBackupVaultsRequest,
  output: PatchProjectsLocationsBackupVaultsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsBackupVaultsRequest {
  /** The maximum number of items to return. */
  pageSize?: number;
  /** Required. The location for which to retrieve backupVault information, in the format `projects/{project_id}/locations/{location}`. */
  parent: string;
  /** Sort results. Supported values are "name", "name desc" or "" (unsorted). */
  orderBy?: string;
  /** List filter. */
  filter?: string;
  /** The next_page_token value to use if there are additional results to retrieve for this list request. */
  pageToken?: string;
}

export const ListProjectsLocationsBackupVaultsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/backupVaults" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsBackupVaultsRequest>;

export type ListProjectsLocationsBackupVaultsResponse =
  ListBackupVaultsResponse;
export const ListProjectsLocationsBackupVaultsResponse =
  /*@__PURE__*/ ListBackupVaultsResponse;

export type ListProjectsLocationsBackupVaultsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns list of all available backup vaults. */
export const listProjectsLocationsBackupVaults: API.PaginatedOperationMethod<
  ListProjectsLocationsBackupVaultsRequest,
  ListProjectsLocationsBackupVaultsResponse,
  ListProjectsLocationsBackupVaultsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsBackupVaultsRequest,
  output: ListProjectsLocationsBackupVaultsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsBackupVaultsRequest {
  /** Required. The backupVault resource name, in the format `projects/{project_id}/locations/{location}/backupVaults/{backup_vault_id}` */
  name: string;
}

export const DeleteProjectsLocationsBackupVaultsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsBackupVaultsRequest>;

export type DeleteProjectsLocationsBackupVaultsResponse = Operation;
export const DeleteProjectsLocationsBackupVaultsResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsBackupVaultsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Warning! This operation will permanently delete the backup vault. */
export const deleteProjectsLocationsBackupVaults: API.OperationMethod<
  DeleteProjectsLocationsBackupVaultsRequest,
  DeleteProjectsLocationsBackupVaultsResponse,
  DeleteProjectsLocationsBackupVaultsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsBackupVaultsRequest,
  output: DeleteProjectsLocationsBackupVaultsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsBackupVaultsRequest {
  /** Required. The backupVault resource name, in the format `projects/{project_id}/locations/{location}/backupVaults/{backup_vault_id}` */
  name: string;
}

export const GetProjectsLocationsBackupVaultsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsBackupVaultsRequest>;

export type GetProjectsLocationsBackupVaultsResponse = BackupVault;
export const GetProjectsLocationsBackupVaultsResponse =
  /*@__PURE__*/ BackupVault;

export type GetProjectsLocationsBackupVaultsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns the description of the specified backup vault */
export const getProjectsLocationsBackupVaults: API.OperationMethod<
  GetProjectsLocationsBackupVaultsRequest,
  GetProjectsLocationsBackupVaultsResponse,
  GetProjectsLocationsBackupVaultsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsBackupVaultsRequest,
  output: GetProjectsLocationsBackupVaultsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsBackupVaultsRequest {
  /** Required. The location to create the backup vaults, in the format `projects/{project_id}/locations/{location}` */
  parent: string;
  /** Required. The ID to use for the backupVault. The ID must be unique within the specified location. Must contain only letters, numbers and hyphen, with the first character a letter, the last a letter or a number, and a 63 character maximum. */
  backupVaultId?: string;
  /** Request body */
  body?: BackupVault;
}

export const CreateProjectsLocationsBackupVaultsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    backupVaultId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("backupVaultId"),
    ),
    body: Schema.optional(BackupVault).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/backupVaults",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsBackupVaultsRequest>;

export type CreateProjectsLocationsBackupVaultsResponse = Operation;
export const CreateProjectsLocationsBackupVaultsResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsBackupVaultsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates new backup vault */
export const createProjectsLocationsBackupVaults: API.OperationMethod<
  CreateProjectsLocationsBackupVaultsRequest,
  CreateProjectsLocationsBackupVaultsResponse,
  CreateProjectsLocationsBackupVaultsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsBackupVaultsRequest,
  output: CreateProjectsLocationsBackupVaultsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsBackupVaultsBackupsRequest {
  /** Required. The backup resource name, in the format `projects/{project_id}/locations/{location}/backupVaults/{backup_vault_id}/backups/{backup_id}` */
  name: string;
}

export const GetProjectsLocationsBackupVaultsBackupsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsBackupVaultsBackupsRequest>;

export type GetProjectsLocationsBackupVaultsBackupsResponse = Backup;
export const GetProjectsLocationsBackupVaultsBackupsResponse =
  /*@__PURE__*/ Backup;

export type GetProjectsLocationsBackupVaultsBackupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns the description of the specified backup */
export const getProjectsLocationsBackupVaultsBackups: API.OperationMethod<
  GetProjectsLocationsBackupVaultsBackupsRequest,
  GetProjectsLocationsBackupVaultsBackupsResponse,
  GetProjectsLocationsBackupVaultsBackupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsBackupVaultsBackupsRequest,
  output: GetProjectsLocationsBackupVaultsBackupsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsBackupVaultsBackupsRequest {
  /** Required. The NetApp backupVault to create the backups of, in the format `projects/* /locations/* /backupVaults/{backup_vault_id}` */
  parent: string;
  /** Required. The ID to use for the backup. The ID must be unique within the specified backupVault. Must contain only letters, numbers and hyphen, with the first character a letter, the last a letter or a number, and a 63 character maximum. */
  backupId?: string;
  /** Request body */
  body?: Backup;
}

export const CreateProjectsLocationsBackupVaultsBackupsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    backupId: Schema.optional(Schema.String).pipe(T.HttpQuery("backupId")),
    body: Schema.optional(Backup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/backups",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsBackupVaultsBackupsRequest>;

export type CreateProjectsLocationsBackupVaultsBackupsResponse = Operation;
export const CreateProjectsLocationsBackupVaultsBackupsResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsBackupVaultsBackupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a backup from the volume specified in the request The backup can be created from the given snapshot if specified in the request. If no snapshot specified, there'll be a new snapshot taken to initiate the backup creation. */
export const createProjectsLocationsBackupVaultsBackups: API.OperationMethod<
  CreateProjectsLocationsBackupVaultsBackupsRequest,
  CreateProjectsLocationsBackupVaultsBackupsResponse,
  CreateProjectsLocationsBackupVaultsBackupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsBackupVaultsBackupsRequest,
  output: CreateProjectsLocationsBackupVaultsBackupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsBackupVaultsBackupsRequest {
  /** The maximum number of items to return. The service may return fewer than this value. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** The next_page_token value to use if there are additional results to retrieve for this list request. */
  pageToken?: string;
  /** Required. The backupVault for which to retrieve backup information, in the format `projects/{project_id}/locations/{location}/backupVaults/{backup_vault_id}`. To retrieve backup information for all locations, use "-" for the `{location}` value. To retrieve backup information for all backupVaults, use "-" for the `{backup_vault_id}` value. To retrieve backup information for a volume, use "-" for the `{backup_vault_id}` value and specify volume full name with the filter. */
  parent: string;
  /** Sort results. Supported values are "name", "name desc" or "" (unsorted). */
  orderBy?: string;
  /** The standard list filter. If specified, backups will be returned based on the attribute name that matches the filter expression. If empty, then no backups are filtered out. See https://google.aip.dev/160 */
  filter?: string;
}

export const ListProjectsLocationsBackupVaultsBackupsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/backups" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsBackupVaultsBackupsRequest>;

export type ListProjectsLocationsBackupVaultsBackupsResponse =
  ListBackupsResponse;
export const ListProjectsLocationsBackupVaultsBackupsResponse =
  /*@__PURE__*/ ListBackupsResponse;

export type ListProjectsLocationsBackupVaultsBackupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns descriptions of all backups for a backupVault. */
export const listProjectsLocationsBackupVaultsBackups: API.PaginatedOperationMethod<
  ListProjectsLocationsBackupVaultsBackupsRequest,
  ListProjectsLocationsBackupVaultsBackupsResponse,
  ListProjectsLocationsBackupVaultsBackupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsBackupVaultsBackupsRequest,
  output: ListProjectsLocationsBackupVaultsBackupsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsBackupVaultsBackupsRequest {
  /** Required. Field mask is used to specify the fields to be overwritten in the Backup resource to be updated. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Identifier. The resource name of the backup. Format: `projects/{project_id}/locations/{location}/backupVaults/{backup_vault_id}/backups/{backup_id}`. */
  name: string;
  /** Request body */
  body?: Backup;
}

export const PatchProjectsLocationsBackupVaultsBackupsRequest =
  /*@__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Backup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsBackupVaultsBackupsRequest>;

export type PatchProjectsLocationsBackupVaultsBackupsResponse = Operation;
export const PatchProjectsLocationsBackupVaultsBackupsResponse =
  /*@__PURE__*/ Operation;

export type PatchProjectsLocationsBackupVaultsBackupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update backup with full spec. */
export const patchProjectsLocationsBackupVaultsBackups: API.OperationMethod<
  PatchProjectsLocationsBackupVaultsBackupsRequest,
  PatchProjectsLocationsBackupVaultsBackupsResponse,
  PatchProjectsLocationsBackupVaultsBackupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsBackupVaultsBackupsRequest,
  output: PatchProjectsLocationsBackupVaultsBackupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsBackupVaultsBackupsRequest {
  /** Required. The backup resource name, in the format `projects/{project_id}/locations/{location}/backupVaults/{backup_vault_id}/backups/{backup_id}` */
  name: string;
}

export const DeleteProjectsLocationsBackupVaultsBackupsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsBackupVaultsBackupsRequest>;

export type DeleteProjectsLocationsBackupVaultsBackupsResponse = Operation;
export const DeleteProjectsLocationsBackupVaultsBackupsResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsBackupVaultsBackupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Warning! This operation will permanently delete the backup. */
export const deleteProjectsLocationsBackupVaultsBackups: API.OperationMethod<
  DeleteProjectsLocationsBackupVaultsBackupsRequest,
  DeleteProjectsLocationsBackupVaultsBackupsResponse,
  DeleteProjectsLocationsBackupVaultsBackupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsBackupVaultsBackupsRequest,
  output: DeleteProjectsLocationsBackupVaultsBackupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsStoragePoolsRequest {
  /** Required. Field mask is used to specify the fields to be overwritten in the StoragePool resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Identifier. Name of the storage pool */
  name: string;
  /** Request body */
  body?: StoragePool;
}

export const PatchProjectsLocationsStoragePoolsRequest =
  /*@__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(StoragePool).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsStoragePoolsRequest>;

export type PatchProjectsLocationsStoragePoolsResponse = Operation;
export const PatchProjectsLocationsStoragePoolsResponse =
  /*@__PURE__*/ Operation;

export type PatchProjectsLocationsStoragePoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the storage pool properties with the full spec */
export const patchProjectsLocationsStoragePools: API.OperationMethod<
  PatchProjectsLocationsStoragePoolsRequest,
  PatchProjectsLocationsStoragePoolsResponse,
  PatchProjectsLocationsStoragePoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsStoragePoolsRequest,
  output: PatchProjectsLocationsStoragePoolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsStoragePoolsRequest {
  /** Optional. The next_page_token value to use if there are additional results to retrieve for this list request. */
  pageToken?: string;
  /** Required. Parent value */
  parent: string;
  /** Optional. Sort results. Supported values are "name", "name desc" or "" (unsorted). */
  orderBy?: string;
  /** Optional. List filter. */
  filter?: string;
  /** Optional. The maximum number of items to return. */
  pageSize?: number;
}

export const ListProjectsLocationsStoragePoolsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/storagePools" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsStoragePoolsRequest>;

export type ListProjectsLocationsStoragePoolsResponse =
  ListStoragePoolsResponse;
export const ListProjectsLocationsStoragePoolsResponse =
  /*@__PURE__*/ ListStoragePoolsResponse;

export type ListProjectsLocationsStoragePoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns descriptions of all storage pools owned by the caller. */
export const listProjectsLocationsStoragePools: API.PaginatedOperationMethod<
  ListProjectsLocationsStoragePoolsRequest,
  ListProjectsLocationsStoragePoolsResponse,
  ListProjectsLocationsStoragePoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsStoragePoolsRequest,
  output: ListProjectsLocationsStoragePoolsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface UpdateBackupConfigProjectsLocationsStoragePoolsRequest {
  /** Required. The resource name of the StoragePool, in the format: projects/{projectNumber}/locations/{locationId}/storagePools/{poolId} */
  name: string;
  /** Request body */
  body?: UpdateBackupConfigRequest;
}

export const UpdateBackupConfigProjectsLocationsStoragePoolsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(UpdateBackupConfigRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+name}:updateBackupConfig",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<UpdateBackupConfigProjectsLocationsStoragePoolsRequest>;

export type UpdateBackupConfigProjectsLocationsStoragePoolsResponse = Operation;
export const UpdateBackupConfigProjectsLocationsStoragePoolsResponse =
  /*@__PURE__*/ Operation;

export type UpdateBackupConfigProjectsLocationsStoragePoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the backup configuration for an ONTAP-mode volume. */
export const updateBackupConfigProjectsLocationsStoragePools: API.OperationMethod<
  UpdateBackupConfigProjectsLocationsStoragePoolsRequest,
  UpdateBackupConfigProjectsLocationsStoragePoolsResponse,
  UpdateBackupConfigProjectsLocationsStoragePoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateBackupConfigProjectsLocationsStoragePoolsRequest,
  output: UpdateBackupConfigProjectsLocationsStoragePoolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsStoragePoolsRequest {
  /** Required. Name of the storage pool */
  name: string;
}

export const GetProjectsLocationsStoragePoolsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsStoragePoolsRequest>;

export type GetProjectsLocationsStoragePoolsResponse = StoragePool;
export const GetProjectsLocationsStoragePoolsResponse =
  /*@__PURE__*/ StoragePool;

export type GetProjectsLocationsStoragePoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns the description of the specified storage pool by poolId. */
export const getProjectsLocationsStoragePools: API.OperationMethod<
  GetProjectsLocationsStoragePoolsRequest,
  GetProjectsLocationsStoragePoolsResponse,
  GetProjectsLocationsStoragePoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsStoragePoolsRequest,
  output: GetProjectsLocationsStoragePoolsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsStoragePoolsRequest {
  /** Required. Value for parent. */
  parent: string;
  /** Required. Id of the requesting storage pool. Must be unique within the parent resource. Must contain only letters, numbers and hyphen, with the first character a letter, the last a letter or a number, and a 63 character maximum. */
  storagePoolId?: string;
  /** Request body */
  body?: StoragePool;
}

export const CreateProjectsLocationsStoragePoolsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    storagePoolId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("storagePoolId"),
    ),
    body: Schema.optional(StoragePool).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/storagePools",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsStoragePoolsRequest>;

export type CreateProjectsLocationsStoragePoolsResponse = Operation;
export const CreateProjectsLocationsStoragePoolsResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsStoragePoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new storage pool. */
export const createProjectsLocationsStoragePools: API.OperationMethod<
  CreateProjectsLocationsStoragePoolsRequest,
  CreateProjectsLocationsStoragePoolsResponse,
  CreateProjectsLocationsStoragePoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsStoragePoolsRequest,
  output: CreateProjectsLocationsStoragePoolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsStoragePoolsRequest {
  /** Required. Name of the storage pool */
  name: string;
}

export const DeleteProjectsLocationsStoragePoolsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsStoragePoolsRequest>;

export type DeleteProjectsLocationsStoragePoolsResponse = Operation;
export const DeleteProjectsLocationsStoragePoolsResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsStoragePoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Warning! This operation will permanently delete the storage pool. */
export const deleteProjectsLocationsStoragePools: API.OperationMethod<
  DeleteProjectsLocationsStoragePoolsRequest,
  DeleteProjectsLocationsStoragePoolsResponse,
  DeleteProjectsLocationsStoragePoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsStoragePoolsRequest,
  output: DeleteProjectsLocationsStoragePoolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ValidateDirectoryServiceProjectsLocationsStoragePoolsRequest {
  /** Required. Name of the storage pool */
  name: string;
  /** Request body */
  body?: ValidateDirectoryServiceRequest;
}

export const ValidateDirectoryServiceProjectsLocationsStoragePoolsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ValidateDirectoryServiceRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+name}:validateDirectoryService",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<ValidateDirectoryServiceProjectsLocationsStoragePoolsRequest>;

export type ValidateDirectoryServiceProjectsLocationsStoragePoolsResponse =
  Operation;
export const ValidateDirectoryServiceProjectsLocationsStoragePoolsResponse =
  /*@__PURE__*/ Operation;

export type ValidateDirectoryServiceProjectsLocationsStoragePoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** ValidateDirectoryService does a connectivity check for a directory service policy attached to the storage pool. */
export const validateDirectoryServiceProjectsLocationsStoragePools: API.OperationMethod<
  ValidateDirectoryServiceProjectsLocationsStoragePoolsRequest,
  ValidateDirectoryServiceProjectsLocationsStoragePoolsResponse,
  ValidateDirectoryServiceProjectsLocationsStoragePoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ValidateDirectoryServiceProjectsLocationsStoragePoolsRequest,
  output: ValidateDirectoryServiceProjectsLocationsStoragePoolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SwitchProjectsLocationsStoragePoolsRequest {
  /** Required. Name of the storage pool */
  name: string;
  /** Request body */
  body?: SwitchActiveReplicaZoneRequest;
}

export const SwitchProjectsLocationsStoragePoolsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SwitchActiveReplicaZoneRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta1/{+name}:switch", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<SwitchProjectsLocationsStoragePoolsRequest>;

export type SwitchProjectsLocationsStoragePoolsResponse = Operation;
export const SwitchProjectsLocationsStoragePoolsResponse =
  /*@__PURE__*/ Operation;

export type SwitchProjectsLocationsStoragePoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** This operation will switch the active/replica zone for a regional storagePool. */
export const switchProjectsLocationsStoragePools: API.OperationMethod<
  SwitchProjectsLocationsStoragePoolsRequest,
  SwitchProjectsLocationsStoragePoolsResponse,
  SwitchProjectsLocationsStoragePoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SwitchProjectsLocationsStoragePoolsRequest,
  output: SwitchProjectsLocationsStoragePoolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RestoreVolumeProjectsLocationsStoragePoolsRequest {
  /** Required. The resource name of the ONTAP mode storage pool, in the format of `projects/{project}/locations/{location}/storagePools/{storage_pool}` */
  name: string;
  /** Request body */
  body?: RestoreVolumeRequest;
}

export const RestoreVolumeProjectsLocationsStoragePoolsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(RestoreVolumeRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+name}:restoreVolume",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<RestoreVolumeProjectsLocationsStoragePoolsRequest>;

export type RestoreVolumeProjectsLocationsStoragePoolsResponse = Operation;
export const RestoreVolumeProjectsLocationsStoragePoolsResponse =
  /*@__PURE__*/ Operation;

export type RestoreVolumeProjectsLocationsStoragePoolsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Restores a backup to an ONTAP-mode volume. */
export const restoreVolumeProjectsLocationsStoragePools: API.OperationMethod<
  RestoreVolumeProjectsLocationsStoragePoolsRequest,
  RestoreVolumeProjectsLocationsStoragePoolsResponse,
  RestoreVolumeProjectsLocationsStoragePoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RestoreVolumeProjectsLocationsStoragePoolsRequest,
  output: RestoreVolumeProjectsLocationsStoragePoolsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ExecuteOntapPostProjectsLocationsStoragePoolsOntapRequest {
  /** Required. The path of the ONTAP resource. Format: `projects/{project_number}/locations/{location_id}/storagePools/{storage_pool_id}/ontap/{ontap_resource_path}`. For example: `projects/123456789/locations/us-central1/storagePools/my-storage-pool/ontap/api/storage/volumes`. */
  ontapPath: string;
  /** Request body */
  body?: ExecuteOntapPostRequest;
}

export const ExecuteOntapPostProjectsLocationsStoragePoolsOntapRequest =
  /*@__PURE__*/ Schema.Struct({
    ontapPath: Schema.String.pipe(T.HttpPath("ontapPath")),
    body: Schema.optional(ExecuteOntapPostRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta1/{+ontapPath}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<ExecuteOntapPostProjectsLocationsStoragePoolsOntapRequest>;

export type ExecuteOntapPostProjectsLocationsStoragePoolsOntapResponse =
  ExecuteOntapPostResponse;
export const ExecuteOntapPostProjectsLocationsStoragePoolsOntapResponse =
  /*@__PURE__*/ ExecuteOntapPostResponse;

export type ExecuteOntapPostProjectsLocationsStoragePoolsOntapError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** `ExecuteOntapPost` sends the ONTAP `POST` request to the `StoragePool` cluster. */
export const executeOntapPostProjectsLocationsStoragePoolsOntap: API.OperationMethod<
  ExecuteOntapPostProjectsLocationsStoragePoolsOntapRequest,
  ExecuteOntapPostProjectsLocationsStoragePoolsOntapResponse,
  ExecuteOntapPostProjectsLocationsStoragePoolsOntapError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ExecuteOntapPostProjectsLocationsStoragePoolsOntapRequest,
  output: ExecuteOntapPostProjectsLocationsStoragePoolsOntapResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ExecuteOntapGetProjectsLocationsStoragePoolsOntapRequest {
  /** Required. The resource path of the ONTAP resource. Format: `projects/{project_number}/locations/{location_id}/storagePools/{storage_pool_id}/ontap/{ontap_resource_path}`. For example: `projects/123456789/locations/us-central1/storagePools/my-storage-pool/ontap/api/storage/volumes`. */
  ontapPath: string;
}

export const ExecuteOntapGetProjectsLocationsStoragePoolsOntapRequest =
  /*@__PURE__*/ Schema.Struct({
    ontapPath: Schema.String.pipe(T.HttpPath("ontapPath")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+ontapPath}" }),
    svc,
  ) as unknown as Schema.Codec<ExecuteOntapGetProjectsLocationsStoragePoolsOntapRequest>;

export type ExecuteOntapGetProjectsLocationsStoragePoolsOntapResponse =
  ExecuteOntapGetResponse;
export const ExecuteOntapGetProjectsLocationsStoragePoolsOntapResponse =
  /*@__PURE__*/ ExecuteOntapGetResponse;

export type ExecuteOntapGetProjectsLocationsStoragePoolsOntapError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** `ExecuteOntapGet` sends the ONTAP `GET` request to the `StoragePool` cluster. */
export const executeOntapGetProjectsLocationsStoragePoolsOntap: API.OperationMethod<
  ExecuteOntapGetProjectsLocationsStoragePoolsOntapRequest,
  ExecuteOntapGetProjectsLocationsStoragePoolsOntapResponse,
  ExecuteOntapGetProjectsLocationsStoragePoolsOntapError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ExecuteOntapGetProjectsLocationsStoragePoolsOntapRequest,
  output: ExecuteOntapGetProjectsLocationsStoragePoolsOntapResponse,
  errors: [NotFound, Forbidden],
}));

export interface ExecuteOntapPatchProjectsLocationsStoragePoolsOntapRequest {
  /** Required. The resource path of the ONTAP resource. Format: `projects/{project_number}/locations/{location_id}/storagePools/{storage_pool_id}/ontap/{ontap_resource_path}`. For example: `projects/123456789/locations/us-central1/storagePools/my-storage-pool/ontap/api/storage/volumes`. */
  ontapPath: string;
  /** Request body */
  body?: ExecuteOntapPatchRequest;
}

export const ExecuteOntapPatchProjectsLocationsStoragePoolsOntapRequest =
  /*@__PURE__*/ Schema.Struct({
    ontapPath: Schema.String.pipe(T.HttpPath("ontapPath")),
    body: Schema.optional(ExecuteOntapPatchRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+ontapPath}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<ExecuteOntapPatchProjectsLocationsStoragePoolsOntapRequest>;

export type ExecuteOntapPatchProjectsLocationsStoragePoolsOntapResponse =
  ExecuteOntapPatchResponse;
export const ExecuteOntapPatchProjectsLocationsStoragePoolsOntapResponse =
  /*@__PURE__*/ ExecuteOntapPatchResponse;

export type ExecuteOntapPatchProjectsLocationsStoragePoolsOntapError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** `ExecuteOntapPatch` sends the ONTAP `PATCH` request to the `StoragePool` cluster. */
export const executeOntapPatchProjectsLocationsStoragePoolsOntap: API.OperationMethod<
  ExecuteOntapPatchProjectsLocationsStoragePoolsOntapRequest,
  ExecuteOntapPatchProjectsLocationsStoragePoolsOntapResponse,
  ExecuteOntapPatchProjectsLocationsStoragePoolsOntapError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ExecuteOntapPatchProjectsLocationsStoragePoolsOntapRequest,
  output: ExecuteOntapPatchProjectsLocationsStoragePoolsOntapResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ExecuteOntapDeleteProjectsLocationsStoragePoolsOntapRequest {
  /** Required. The resource path of the ONTAP resource. Format: `projects/{project_number}/locations/{location_id}/storagePools/{storage_pool_id}/ontap/{ontap_resource_path}`. For example: `projects/123456789/locations/us-central1/storagePools/my-storage-pool/ontap/api/storage/volumes`. */
  ontapPath: string;
}

export const ExecuteOntapDeleteProjectsLocationsStoragePoolsOntapRequest =
  /*@__PURE__*/ Schema.Struct({
    ontapPath: Schema.String.pipe(T.HttpPath("ontapPath")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+ontapPath}" }),
    svc,
  ) as unknown as Schema.Codec<ExecuteOntapDeleteProjectsLocationsStoragePoolsOntapRequest>;

export type ExecuteOntapDeleteProjectsLocationsStoragePoolsOntapResponse =
  ExecuteOntapDeleteResponse;
export const ExecuteOntapDeleteProjectsLocationsStoragePoolsOntapResponse =
  /*@__PURE__*/ ExecuteOntapDeleteResponse;

export type ExecuteOntapDeleteProjectsLocationsStoragePoolsOntapError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** `ExecuteOntapDelete` sends the ONTAP `DELETE` request to the `StoragePool` cluster. */
export const executeOntapDeleteProjectsLocationsStoragePoolsOntap: API.OperationMethod<
  ExecuteOntapDeleteProjectsLocationsStoragePoolsOntapRequest,
  ExecuteOntapDeleteProjectsLocationsStoragePoolsOntapResponse,
  ExecuteOntapDeleteProjectsLocationsStoragePoolsOntapError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ExecuteOntapDeleteProjectsLocationsStoragePoolsOntapRequest,
  output: ExecuteOntapDeleteProjectsLocationsStoragePoolsOntapResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsStoragePoolsBackupConfigsRequest {
  /** Optional. The maximum number of items to return. The service may return fewer than this value. The maximum value is 1000; values above 1000 will be coerced to 1000. If unspecified or set to 0, a default of 50 will be used. */
  pageSize?: number;
  /** Optional. The next_page_token value to use if there are additional results to retrieve for this list request. */
  pageToken?: string;
  /** Required. The ONTAP StoragePool for which to retrieve backup configuration information, in the format `projects/{project}/locations/{location}/storagePools/{storage_pool}`. */
  parent: string;
  /** Optional. Sort results. Supported values are "volume_id" or "" */
  orderBy?: string;
  /** Optional. The standard list filter. */
  filter?: string;
}

export const ListProjectsLocationsStoragePoolsBackupConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/backupConfigs" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsStoragePoolsBackupConfigsRequest>;

export type ListProjectsLocationsStoragePoolsBackupConfigsResponse =
  ListBackupConfigsResponse;
export const ListProjectsLocationsStoragePoolsBackupConfigsResponse =
  /*@__PURE__*/ ListBackupConfigsResponse;

export type ListProjectsLocationsStoragePoolsBackupConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists backup configurations for all volumes in an ONTAP-mode Storage Pool. */
export const listProjectsLocationsStoragePoolsBackupConfigs: API.PaginatedOperationMethod<
  ListProjectsLocationsStoragePoolsBackupConfigsRequest,
  ListProjectsLocationsStoragePoolsBackupConfigsResponse,
  ListProjectsLocationsStoragePoolsBackupConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsStoragePoolsBackupConfigsRequest,
  output: ListProjectsLocationsStoragePoolsBackupConfigsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsKmsConfigsRequest {
  /** The maximum number of items to return. */
  pageSize?: number;
  /** Required. Parent value */
  parent: string;
  /** Sort results. Supported values are "name", "name desc" or "" (unsorted). */
  orderBy?: string;
  /** List filter. */
  filter?: string;
  /** The next_page_token value to use if there are additional results to retrieve for this list request. */
  pageToken?: string;
}

export const ListProjectsLocationsKmsConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/kmsConfigs" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsKmsConfigsRequest>;

export type ListProjectsLocationsKmsConfigsResponse = ListKmsConfigsResponse;
export const ListProjectsLocationsKmsConfigsResponse =
  /*@__PURE__*/ ListKmsConfigsResponse;

export type ListProjectsLocationsKmsConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns descriptions of all KMS configs owned by the caller. */
export const listProjectsLocationsKmsConfigs: API.PaginatedOperationMethod<
  ListProjectsLocationsKmsConfigsRequest,
  ListProjectsLocationsKmsConfigsResponse,
  ListProjectsLocationsKmsConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsKmsConfigsRequest,
  output: ListProjectsLocationsKmsConfigsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsKmsConfigsRequest {
  /** Identifier. Name of the `KmsConfig`. Format: `projects/{project}/locations/{location}/kmsConfigs/{kms_config}` */
  name: string;
  /** Required. Field mask is used to specify the fields to be overwritten in the KmsConfig resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Request body */
  body?: KmsConfig;
}

export const PatchProjectsLocationsKmsConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(KmsConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsKmsConfigsRequest>;

export type PatchProjectsLocationsKmsConfigsResponse = Operation;
export const PatchProjectsLocationsKmsConfigsResponse = /*@__PURE__*/ Operation;

export type PatchProjectsLocationsKmsConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the Kms config properties with the full spec */
export const patchProjectsLocationsKmsConfigs: API.OperationMethod<
  PatchProjectsLocationsKmsConfigsRequest,
  PatchProjectsLocationsKmsConfigsResponse,
  PatchProjectsLocationsKmsConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsKmsConfigsRequest,
  output: PatchProjectsLocationsKmsConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface EncryptProjectsLocationsKmsConfigsRequest {
  /** Required. Name of the KmsConfig. */
  name: string;
  /** Request body */
  body?: EncryptVolumesRequest;
}

export const EncryptProjectsLocationsKmsConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(EncryptVolumesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta1/{+name}:encrypt", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<EncryptProjectsLocationsKmsConfigsRequest>;

export type EncryptProjectsLocationsKmsConfigsResponse = Operation;
export const EncryptProjectsLocationsKmsConfigsResponse =
  /*@__PURE__*/ Operation;

export type EncryptProjectsLocationsKmsConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Encrypt the existing volumes without CMEK encryption with the desired the KMS config for the whole region. */
export const encryptProjectsLocationsKmsConfigs: API.OperationMethod<
  EncryptProjectsLocationsKmsConfigsRequest,
  EncryptProjectsLocationsKmsConfigsResponse,
  EncryptProjectsLocationsKmsConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: EncryptProjectsLocationsKmsConfigsRequest,
  output: EncryptProjectsLocationsKmsConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsKmsConfigsRequest {
  /** Required. Name of the KmsConfig. */
  name: string;
}

export const DeleteProjectsLocationsKmsConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsKmsConfigsRequest>;

export type DeleteProjectsLocationsKmsConfigsResponse = Operation;
export const DeleteProjectsLocationsKmsConfigsResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsKmsConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Warning! This operation will permanently delete the Kms config. */
export const deleteProjectsLocationsKmsConfigs: API.OperationMethod<
  DeleteProjectsLocationsKmsConfigsRequest,
  DeleteProjectsLocationsKmsConfigsResponse,
  DeleteProjectsLocationsKmsConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsKmsConfigsRequest,
  output: DeleteProjectsLocationsKmsConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface VerifyProjectsLocationsKmsConfigsRequest {
  /** Required. Name of the KMS Config to be verified. */
  name: string;
  /** Request body */
  body?: VerifyKmsConfigRequest;
}

export const VerifyProjectsLocationsKmsConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(VerifyKmsConfigRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta1/{+name}:verify", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<VerifyProjectsLocationsKmsConfigsRequest>;

export type VerifyProjectsLocationsKmsConfigsResponse = VerifyKmsConfigResponse;
export const VerifyProjectsLocationsKmsConfigsResponse =
  /*@__PURE__*/ VerifyKmsConfigResponse;

export type VerifyProjectsLocationsKmsConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Verifies KMS config reachability. */
export const verifyProjectsLocationsKmsConfigs: API.OperationMethod<
  VerifyProjectsLocationsKmsConfigsRequest,
  VerifyProjectsLocationsKmsConfigsResponse,
  VerifyProjectsLocationsKmsConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: VerifyProjectsLocationsKmsConfigsRequest,
  output: VerifyProjectsLocationsKmsConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsKmsConfigsRequest {
  /** Required. Name of the KmsConfig */
  name: string;
}

export const GetProjectsLocationsKmsConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsKmsConfigsRequest>;

export type GetProjectsLocationsKmsConfigsResponse = KmsConfig;
export const GetProjectsLocationsKmsConfigsResponse = /*@__PURE__*/ KmsConfig;

export type GetProjectsLocationsKmsConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns the description of the specified KMS config by kms_config_id. */
export const getProjectsLocationsKmsConfigs: API.OperationMethod<
  GetProjectsLocationsKmsConfigsRequest,
  GetProjectsLocationsKmsConfigsResponse,
  GetProjectsLocationsKmsConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsKmsConfigsRequest,
  output: GetProjectsLocationsKmsConfigsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsKmsConfigsRequest {
  /** Required. Value for parent. */
  parent: string;
  /** Required. Id of the requesting KmsConfig. Must be unique within the parent resource. Must contain only letters, numbers and hyphen, with the first character a letter, the last a letter or a number, and a 63 character maximum. */
  kmsConfigId?: string;
  /** Request body */
  body?: KmsConfig;
}

export const CreateProjectsLocationsKmsConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    kmsConfigId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("kmsConfigId"),
    ),
    body: Schema.optional(KmsConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/kmsConfigs",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsKmsConfigsRequest>;

export type CreateProjectsLocationsKmsConfigsResponse = Operation;
export const CreateProjectsLocationsKmsConfigsResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsKmsConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new KMS config. */
export const createProjectsLocationsKmsConfigs: API.OperationMethod<
  CreateProjectsLocationsKmsConfigsRequest,
  CreateProjectsLocationsKmsConfigsResponse,
  CreateProjectsLocationsKmsConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsKmsConfigsRequest,
  output: CreateProjectsLocationsKmsConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export type DeleteProjectsLocationsOperationsResponse = GoogleProtobufEmpty;
export const DeleteProjectsLocationsOperationsResponse =
  /*@__PURE__*/ GoogleProtobufEmpty;

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
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
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

export type CancelProjectsLocationsOperationsResponse = GoogleProtobufEmpty;
export const CancelProjectsLocationsOperationsResponse =
  /*@__PURE__*/ GoogleProtobufEmpty;

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

export interface DeleteProjectsLocationsBackupPoliciesRequest {
  /** Required. The backup policy resource name, in the format `projects/{project_id}/locations/{location}/backupPolicies/{backup_policy_id}` */
  name: string;
}

export const DeleteProjectsLocationsBackupPoliciesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsBackupPoliciesRequest>;

export type DeleteProjectsLocationsBackupPoliciesResponse = Operation;
export const DeleteProjectsLocationsBackupPoliciesResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsBackupPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Warning! This operation will permanently delete the backup policy. */
export const deleteProjectsLocationsBackupPolicies: API.OperationMethod<
  DeleteProjectsLocationsBackupPoliciesRequest,
  DeleteProjectsLocationsBackupPoliciesResponse,
  DeleteProjectsLocationsBackupPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsBackupPoliciesRequest,
  output: DeleteProjectsLocationsBackupPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsBackupPoliciesRequest {
  /** Identifier. The resource name of the backup policy. Format: `projects/{project_id}/locations/{location}/backupPolicies/{backup_policy_id}`. */
  name: string;
  /** Required. Field mask is used to specify the fields to be overwritten in the Backup Policy resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Request body */
  body?: BackupPolicy;
}

export const PatchProjectsLocationsBackupPoliciesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(BackupPolicy).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsBackupPoliciesRequest>;

export type PatchProjectsLocationsBackupPoliciesResponse = Operation;
export const PatchProjectsLocationsBackupPoliciesResponse =
  /*@__PURE__*/ Operation;

export type PatchProjectsLocationsBackupPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates settings of a specific backup policy. */
export const patchProjectsLocationsBackupPolicies: API.OperationMethod<
  PatchProjectsLocationsBackupPoliciesRequest,
  PatchProjectsLocationsBackupPoliciesResponse,
  PatchProjectsLocationsBackupPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsBackupPoliciesRequest,
  output: PatchProjectsLocationsBackupPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsBackupPoliciesRequest {
  /** Requested page size. Server may return fewer items than requested. If unspecified, the server will pick an appropriate default. */
  pageSize?: number;
  /** Required. Parent value for ListBackupPoliciesRequest */
  parent: string;
  /** Filtering results */
  filter?: string;
  /** Hint for how to order the results */
  orderBy?: string;
  /** A token identifying a page of results the server should return. */
  pageToken?: string;
}

export const ListProjectsLocationsBackupPoliciesRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/backupPolicies" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsBackupPoliciesRequest>;

export type ListProjectsLocationsBackupPoliciesResponse =
  ListBackupPoliciesResponse;
export const ListProjectsLocationsBackupPoliciesResponse =
  /*@__PURE__*/ ListBackupPoliciesResponse;

export type ListProjectsLocationsBackupPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns list of all available backup policies. */
export const listProjectsLocationsBackupPolicies: API.PaginatedOperationMethod<
  ListProjectsLocationsBackupPoliciesRequest,
  ListProjectsLocationsBackupPoliciesResponse,
  ListProjectsLocationsBackupPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsBackupPoliciesRequest,
  output: ListProjectsLocationsBackupPoliciesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsBackupPoliciesRequest {
  /** Required. The location to create the backup policies of, in the format `projects/{project_id}/locations/{location}` */
  parent: string;
  /** Required. The ID to use for the backup policy. The ID must be unique within the specified location. Must contain only letters, numbers and hyphen, with the first character a letter, the last a letter or a number, and a 63 character maximum. */
  backupPolicyId?: string;
  /** Request body */
  body?: BackupPolicy;
}

export const CreateProjectsLocationsBackupPoliciesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    backupPolicyId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("backupPolicyId"),
    ),
    body: Schema.optional(BackupPolicy).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/backupPolicies",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsBackupPoliciesRequest>;

export type CreateProjectsLocationsBackupPoliciesResponse = Operation;
export const CreateProjectsLocationsBackupPoliciesResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsBackupPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates new backup policy */
export const createProjectsLocationsBackupPolicies: API.OperationMethod<
  CreateProjectsLocationsBackupPoliciesRequest,
  CreateProjectsLocationsBackupPoliciesResponse,
  CreateProjectsLocationsBackupPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsBackupPoliciesRequest,
  output: CreateProjectsLocationsBackupPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsBackupPoliciesRequest {
  /** Required. The backupPolicy resource name, in the format `projects/{project_id}/locations/{location}/backupPolicies/{backup_policy_id}` */
  name: string;
}

export const GetProjectsLocationsBackupPoliciesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsBackupPoliciesRequest>;

export type GetProjectsLocationsBackupPoliciesResponse = BackupPolicy;
export const GetProjectsLocationsBackupPoliciesResponse =
  /*@__PURE__*/ BackupPolicy;

export type GetProjectsLocationsBackupPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns the description of the specified backup policy by backup_policy_id. */
export const getProjectsLocationsBackupPolicies: API.OperationMethod<
  GetProjectsLocationsBackupPoliciesRequest,
  GetProjectsLocationsBackupPoliciesResponse,
  GetProjectsLocationsBackupPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsBackupPoliciesRequest,
  output: GetProjectsLocationsBackupPoliciesResponse,
  errors: [NotFound, Forbidden],
}));
