// ==========================================================================
// Backup and DR Service API (backupdr v1)
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
  name: "backupdr",
  version: "v1",
  rootUrl: "https://backupdr.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface AllocationAffinity {
  /** Optional. Corresponds to the label values of a reservation resource. */
  values?: ReadonlyArray<string>;
  /** Optional. Corresponds to the label key of a reservation resource. */
  key?: string;
  /** Optional. Specifies the type of reservation from which this instance can consume */
  consumeReservationType?:
    | "TYPE_UNSPECIFIED"
    | "NO_RESERVATION"
    | "ANY_RESERVATION"
    | "SPECIFIC_RESERVATION"
    | (string & {});
}

export const AllocationAffinity: Schema.Schema<AllocationAffinity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    values: Schema.optional(Schema.Array(Schema.String)),
    key: Schema.optional(Schema.String),
    consumeReservationType: Schema.optional(Schema.String),
  }).annotate({ identifier: "AllocationAffinity" });

export interface EndTrialRequest {
  /** Required. The reason for ending the trial. */
  endReason?:
    | "END_REASON_UNSPECIFIED"
    | "MOVE_TO_PAID"
    | "DISCONTINUED"
    | (string & {});
}

export const EndTrialRequest: Schema.Schema<EndTrialRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endReason: Schema.optional(Schema.String),
  }).annotate({ identifier: "EndTrialRequest" });

export interface BackupApplianceBackupProperties {
  /** Optional. The earliest timestamp of data available in this Backup. */
  recoveryRangeStartTime?: string;
  /** Output only. The numeric generation ID of the backup (monotonically increasing). */
  generationId?: number;
  /** Optional. The latest timestamp of data available in this Backup. */
  recoveryRangeEndTime?: string;
  /** Output only. The time when this backup object was finalized (if none, backup is not finalized). */
  finalizeTime?: string;
}

export const BackupApplianceBackupProperties: Schema.Schema<BackupApplianceBackupProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    recoveryRangeStartTime: Schema.optional(Schema.String),
    generationId: Schema.optional(Schema.Number),
    recoveryRangeEndTime: Schema.optional(Schema.String),
    finalizeTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "BackupApplianceBackupProperties" });

export interface BackupApplianceLockInfo {
  /** Required. The name of the backup/recovery appliance that created this lock. */
  backupApplianceName?: string;
  /** The image name that depends on this Backup. */
  backupImage?: string;
  /** Required. The ID of the backup/recovery appliance that created this lock. */
  backupApplianceId?: string;
  /** The job name on the backup/recovery appliance that created this lock. */
  jobName?: string;
  /** The SLA on the backup/recovery appliance that owns the lock. */
  slaId?: string;
  /** Required. The reason for the lock: e.g. MOUNT/RESTORE/BACKUP/etc. The value of this string is only meaningful to the client and it is not interpreted by the BackupVault service. */
  lockReason?: string;
}

export const BackupApplianceLockInfo: Schema.Schema<BackupApplianceLockInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    backupApplianceName: Schema.optional(Schema.String),
    backupImage: Schema.optional(Schema.String),
    backupApplianceId: Schema.optional(Schema.String),
    jobName: Schema.optional(Schema.String),
    slaId: Schema.optional(Schema.String),
    lockReason: Schema.optional(Schema.String),
  }).annotate({ identifier: "BackupApplianceLockInfo" });

export interface ServiceLockInfo {
  /** Output only. The name of the operation that created this lock. The lock will automatically be released when the operation completes. */
  operation?: string;
}

export const ServiceLockInfo: Schema.Schema<ServiceLockInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operation: Schema.optional(Schema.String),
  }).annotate({ identifier: "ServiceLockInfo" });

export interface BackupLock {
  /** Required. The time after which this lock is not considered valid and will no longer protect the Backup from deletion. */
  lockUntilTime?: string;
  /** If the client is a backup and recovery appliance, this contains metadata about why the lock exists. */
  backupApplianceLockInfo?: BackupApplianceLockInfo;
  /** Output only. Contains metadata about the lock exist for Google Cloud native backups. */
  serviceLockInfo?: ServiceLockInfo;
}

export const BackupLock: Schema.Schema<BackupLock> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lockUntilTime: Schema.optional(Schema.String),
    backupApplianceLockInfo: Schema.optional(BackupApplianceLockInfo),
    serviceLockInfo: Schema.optional(ServiceLockInfo),
  }).annotate({ identifier: "BackupLock" });

export interface AlloyDbClusterBackupProperties {
  /** An optional text description for the backup. */
  description?: string;
  /** Output only. The chain id of this backup. Backups belonging to the same chain are sharing the same chain id. This property is calculated and maintained by BackupDR. */
  chainId?: string;
  /** Output only. Storage usage of this particular backup */
  storedBytes?: string;
  /** Output only. The PostgreSQL major version of the AlloyDB cluster when the backup was taken. */
  databaseVersion?: string;
}

export const AlloyDbClusterBackupProperties: Schema.Schema<AlloyDbClusterBackupProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    chainId: Schema.optional(Schema.String),
    storedBytes: Schema.optional(Schema.String),
    databaseVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "AlloyDbClusterBackupProperties" });

export interface BackupGcpResource {
  /** Name of the Google Cloud resource. */
  gcpResourcename?: string;
  /** Location of the resource: //"global"/"unspecified". */
  location?: string;
  /** Type of the resource. Use the Unified Resource Type, eg. compute.googleapis.com/Instance. */
  type?: string;
}

export const BackupGcpResource: Schema.Schema<BackupGcpResource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcpResourcename: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "BackupGcpResource" });

export interface GuestOsFeature {
  /** The ID of a supported feature. */
  type?:
    | "FEATURE_TYPE_UNSPECIFIED"
    | "VIRTIO_SCSI_MULTIQUEUE"
    | "WINDOWS"
    | "MULTI_IP_SUBNET"
    | "UEFI_COMPATIBLE"
    | "SECURE_BOOT"
    | "GVNIC"
    | "SEV_CAPABLE"
    | "BARE_METAL_LINUX_COMPATIBLE"
    | "SUSPEND_RESUME_COMPATIBLE"
    | "SEV_LIVE_MIGRATABLE"
    | "SEV_SNP_CAPABLE"
    | "TDX_CAPABLE"
    | "IDPF"
    | "SEV_LIVE_MIGRATABLE_V2"
    | (string & {});
}

export const GuestOsFeature: Schema.Schema<GuestOsFeature> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "GuestOsFeature" });

export interface DiskBackupProperties {
  /** Size(in GB) of the source disk. */
  sizeGb?: string;
  /** The access mode of the source disk. */
  accessMode?: string;
  /** A description of the source disk. */
  description?: string;
  /** The physical block size of the source disk. */
  physicalBlockSizeBytes?: string;
  /** A list of guest OS features that are applicable to this backup. */
  guestOsFeature?: ReadonlyArray<GuestOsFeature>;
  /** The URL of the type of the disk. */
  type?: string;
  /** Optional. Defines if the guest flush is enabled for the source disk. Default value is false. */
  guestFlush?: boolean;
  /** The source disk used to create this backup. */
  sourceDisk?: string;
  /** The number of throughput provisioned for the source disk. */
  provisionedThroughput?: string;
  /** The storage pool of the source disk. */
  storagePool?: string;
  /** Region and zone are mutually exclusive fields. The URL of the region of the source disk. */
  region?: string;
  /** The URL of the Zone where the source disk. */
  zone?: string;
  /** The number of IOPS provisioned for the source disk. */
  provisionedIops?: string;
  /** The architecture of the source disk. Valid values are ARM64 or X86_64. */
  architecture?:
    | "ARCHITECTURE_UNSPECIFIED"
    | "X86_64"
    | "ARM64"
    | (string & {});
  /** The URL of the Zones where the source disk should be replicated. */
  replicaZones?: ReadonlyArray<string>;
  /** The labels of the source disk. */
  labels?: Record<string, string>;
  /** Indicates whether the source disk is using confidential compute mode. */
  enableConfidentialCompute?: boolean;
  /** A list of publicly available licenses that are applicable to this backup. This is applicable if the original image had licenses attached, e.g. Windows image. */
  licenses?: ReadonlyArray<string>;
}

export const DiskBackupProperties: Schema.Schema<DiskBackupProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sizeGb: Schema.optional(Schema.String),
    accessMode: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    physicalBlockSizeBytes: Schema.optional(Schema.String),
    guestOsFeature: Schema.optional(Schema.Array(GuestOsFeature)),
    type: Schema.optional(Schema.String),
    guestFlush: Schema.optional(Schema.Boolean),
    sourceDisk: Schema.optional(Schema.String),
    provisionedThroughput: Schema.optional(Schema.String),
    storagePool: Schema.optional(Schema.String),
    region: Schema.optional(Schema.String),
    zone: Schema.optional(Schema.String),
    provisionedIops: Schema.optional(Schema.String),
    architecture: Schema.optional(Schema.String),
    replicaZones: Schema.optional(Schema.Array(Schema.String)),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    enableConfidentialCompute: Schema.optional(Schema.Boolean),
    licenses: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "DiskBackupProperties" });

export interface CloudSqlInstanceBackupProperties {
  /** Output only. Whether the backup is a final backup. */
  finalBackup?: boolean;
  /** Output only. The instance creation timestamp. */
  instanceCreateTime?: string;
  /** Output only. The instance delete timestamp. */
  instanceDeleteTime?: string;
  /** Output only. The installed database version of the Cloud SQL instance when the backup was taken. */
  databaseInstalledVersion?: string;
  /** Output only. The source instance of the backup. Format: projects/{project}/instances/{instance} */
  sourceInstance?: string;
  /** Output only. The tier (or machine type) for this instance. Example: `db-custom-1-3840` */
  instanceTier?: string;
}

export const CloudSqlInstanceBackupProperties: Schema.Schema<CloudSqlInstanceBackupProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    finalBackup: Schema.optional(Schema.Boolean),
    instanceCreateTime: Schema.optional(Schema.String),
    instanceDeleteTime: Schema.optional(Schema.String),
    databaseInstalledVersion: Schema.optional(Schema.String),
    sourceInstance: Schema.optional(Schema.String),
    instanceTier: Schema.optional(Schema.String),
  }).annotate({ identifier: "CloudSqlInstanceBackupProperties" });

export interface GCPBackupPlanInfo {
  /** The user friendly id of the backup plan revision which triggered this backup in case of scheduled backup or used for on demand backup. */
  backupPlanRevisionId?: string;
  /** Resource name of the backup plan revision which triggered this backup in case of scheduled backup or used for on demand backup. Format: projects/{project}/locations/{location}/backupPlans/{backupPlanId}/revisions/{revisionId} */
  backupPlanRevisionName?: string;
  /** Resource name of backup plan by which workload is protected at the time of the backup. Format: projects/{project}/locations/{location}/backupPlans/{backupPlanId} */
  backupPlan?: string;
  /** The rule id of the backup plan which triggered this backup in case of scheduled backup or used for */
  backupPlanRuleId?: string;
}

export const GCPBackupPlanInfo: Schema.Schema<GCPBackupPlanInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    backupPlanRevisionId: Schema.optional(Schema.String),
    backupPlanRevisionName: Schema.optional(Schema.String),
    backupPlan: Schema.optional(Schema.String),
    backupPlanRuleId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GCPBackupPlanInfo" });

export interface FilestoreInstanceBackupProperties {
  /** Output only. The source instance of the backup. */
  sourceInstance?: string;
}

export const FilestoreInstanceBackupProperties: Schema.Schema<FilestoreInstanceBackupProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceInstance: Schema.optional(Schema.String),
  }).annotate({ identifier: "FilestoreInstanceBackupProperties" });

export interface Tags {
  /** Optional. An array of tags. Each tag must be 1-63 characters long, and comply with RFC1035. */
  items?: ReadonlyArray<string>;
}

export const Tags: Schema.Schema<Tags> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Tags" });

export interface Entry {
  /** Optional. Key for the metadata entry. */
  key?: string;
  /** Optional. Value for the metadata entry. These are free-form strings, and only have meaning as interpreted by the image running in the instance. The only restriction placed on values is that their size must be less than or equal to 262144 bytes (256 KiB). */
  value?: string;
}

export const Entry: Schema.Schema<Entry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "Entry" });

export interface Metadata {
  /** Optional. Array of key/value pairs. The total size of all keys and values must be less than 512 KB. */
  items?: ReadonlyArray<Entry>;
}

export const Metadata: Schema.Schema<Metadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.optional(Schema.Array(Entry)),
  }).annotate({ identifier: "Metadata" });

export interface ServiceAccount {
  /** Optional. Email address of the service account. */
  email?: string;
  /** Optional. The list of scopes to be made available for this service account. */
  scopes?: ReadonlyArray<string>;
}

export const ServiceAccount: Schema.Schema<ServiceAccount> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email: Schema.optional(Schema.String),
    scopes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ServiceAccount" });

export interface AccessConfig {
  /** Optional. The external IP address of this access configuration. */
  natIP?: string;
  /** Optional. The external IPv6 address of this access configuration. */
  externalIpv6?: string;
  /** Optional. The name of this access configuration. */
  name?: string;
  /** Optional. This signifies the networking tier used for configuring this access */
  networkTier?:
    | "NETWORK_TIER_UNSPECIFIED"
    | "PREMIUM"
    | "STANDARD"
    | (string & {});
  /** Optional. In accessConfigs (IPv4), the default and only option is ONE_TO_ONE_NAT. In ipv6AccessConfigs, the default and only option is DIRECT_IPV6. */
  type?:
    | "ACCESS_TYPE_UNSPECIFIED"
    | "ONE_TO_ONE_NAT"
    | "DIRECT_IPV6"
    | (string & {});
  /** Optional. Specifies whether a public DNS 'PTR' record should be created to map the external IP address of the instance to a DNS domain name. */
  setPublicPtr?: boolean;
  /** Optional. The DNS domain name for the public PTR record. */
  publicPtrDomainName?: string;
  /** Optional. The prefix length of the external IPv6 range. */
  externalIpv6PrefixLength?: number;
}

export const AccessConfig: Schema.Schema<AccessConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    natIP: Schema.optional(Schema.String),
    externalIpv6: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    networkTier: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    setPublicPtr: Schema.optional(Schema.Boolean),
    publicPtrDomainName: Schema.optional(Schema.String),
    externalIpv6PrefixLength: Schema.optional(Schema.Number),
  }).annotate({ identifier: "AccessConfig" });

export interface AliasIpRange {
  /** Optional. The IP alias ranges to allocate for this interface. */
  ipCidrRange?: string;
  /** Optional. The name of a subnetwork secondary IP range from which to allocate an IP alias range. If not specified, the primary range of the subnetwork is used. */
  subnetworkRangeName?: string;
}

export const AliasIpRange: Schema.Schema<AliasIpRange> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ipCidrRange: Schema.optional(Schema.String),
    subnetworkRangeName: Schema.optional(Schema.String),
  }).annotate({ identifier: "AliasIpRange" });

export interface NetworkInterface {
  /** Optional. An array of configurations for this interface. Currently, only one access config,ONE_TO_ONE_NAT is supported. If there are no accessConfigs specified, then this instance will have no external internet access. */
  accessConfigs?: ReadonlyArray<AccessConfig>;
  /** Optional. An array of IPv6 access configurations for this interface. Currently, only one IPv6 access config, DIRECT_IPV6, is supported. If there is no ipv6AccessConfig specified, then this instance will have no external IPv6 Internet access. */
  ipv6AccessConfigs?: ReadonlyArray<AccessConfig>;
  /** Optional. The prefix length of the primary internal IPv6 range. */
  internalIpv6PrefixLength?: number;
  /** The stack type for this network interface. */
  stackType?:
    | "STACK_TYPE_UNSPECIFIED"
    | "IPV4_ONLY"
    | "IPV4_IPV6"
    | (string & {});
  /** Optional. URL of the VPC network resource for this instance. */
  network?: string;
  /** Optional. An IPv6 internal network address for this network interface. To use a static internal IP address, it must be unused and in the same region as the instance's zone. If not specified, Google Cloud will automatically assign an internal IPv6 address from the instance's subnetwork. */
  ipv6Address?: string;
  /** Optional. An array of alias IP ranges for this network interface. You can only specify this field for network interfaces in VPC networks. */
  aliasIpRanges?: ReadonlyArray<AliasIpRange>;
  /** Optional. [Output Only] One of EXTERNAL, INTERNAL to indicate whether the IP can be accessed from the Internet. This field is always inherited from its subnetwork. */
  ipv6AccessType?:
    | "UNSPECIFIED_IPV6_ACCESS_TYPE"
    | "INTERNAL"
    | "EXTERNAL"
    | (string & {});
  /** Optional. The URL of the network attachment that this interface should connect to in the following format: projects/{project_number}/regions/{region_name}/networkAttachments/{network_attachment_name}. */
  networkAttachment?: string;
  /** Optional. The type of vNIC to be used on this interface. This may be gVNIC or VirtioNet. */
  nicType?: "NIC_TYPE_UNSPECIFIED" | "VIRTIO_NET" | "GVNIC" | (string & {});
  /** Optional. The URL of the Subnetwork resource for this instance. */
  subnetwork?: string;
  /** Optional. An IPv4 internal IP address to assign to the instance for this network interface. If not specified by the user, an unused internal IP is assigned by the system. */
  networkIP?: string;
  /** Output only. [Output Only] The name of the network interface, which is generated by the server. */
  name?: string;
  /** Optional. The networking queue count that's specified by users for the network interface. Both Rx and Tx queues will be set to this number. It'll be empty if not specified by the users. */
  queueCount?: number;
}

export const NetworkInterface: Schema.Schema<NetworkInterface> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accessConfigs: Schema.optional(Schema.Array(AccessConfig)),
    ipv6AccessConfigs: Schema.optional(Schema.Array(AccessConfig)),
    internalIpv6PrefixLength: Schema.optional(Schema.Number),
    stackType: Schema.optional(Schema.String),
    network: Schema.optional(Schema.String),
    ipv6Address: Schema.optional(Schema.String),
    aliasIpRanges: Schema.optional(Schema.Array(AliasIpRange)),
    ipv6AccessType: Schema.optional(Schema.String),
    networkAttachment: Schema.optional(Schema.String),
    nicType: Schema.optional(Schema.String),
    subnetwork: Schema.optional(Schema.String),
    networkIP: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    queueCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "NetworkInterface" });

export interface NodeAffinity {
  /** Optional. Corresponds to the label values of Node resource. */
  values?: ReadonlyArray<string>;
  /** Optional. Corresponds to the label key of Node resource. */
  key?: string;
  /** Optional. Defines the operation of node selection. */
  operator?: "OPERATOR_UNSPECIFIED" | "IN" | "NOT_IN" | (string & {});
}

export const NodeAffinity: Schema.Schema<NodeAffinity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    values: Schema.optional(Schema.Array(Schema.String)),
    key: Schema.optional(Schema.String),
    operator: Schema.optional(Schema.String),
  }).annotate({ identifier: "NodeAffinity" });

export interface SchedulingDuration {
  /** Optional. Span of time at a resolution of a second. */
  seconds?: string;
  /** Optional. Span of time that's a fraction of a second at nanosecond resolution. */
  nanos?: number;
}

export const SchedulingDuration: Schema.Schema<SchedulingDuration> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    seconds: Schema.optional(Schema.String),
    nanos: Schema.optional(Schema.Number),
  }).annotate({ identifier: "SchedulingDuration" });

export interface Scheduling {
  /** Optional. Defines whether the instance is preemptible. */
  preemptible?: boolean;
  /** Optional. The minimum number of virtual CPUs this instance will consume when running on a sole-tenant node. */
  minNodeCpus?: number;
  /** Optional. Specifies the provisioning model of the instance. */
  provisioningModel?:
    | "PROVISIONING_MODEL_UNSPECIFIED"
    | "STANDARD"
    | "SPOT"
    | (string & {});
  /** Optional. Specifies whether the instance should be automatically restarted if it is terminated by Compute Engine (not terminated by a user). */
  automaticRestart?: boolean;
  /** Optional. Defines the maintenance behavior for this instance. */
  onHostMaintenance?:
    | "ON_HOST_MAINTENANCE_UNSPECIFIED"
    | "TERMINATE"
    | "MIGRATE"
    | (string & {});
  /** Optional. A set of node affinity and anti-affinity configurations. Overrides reservationAffinity. */
  nodeAffinities?: ReadonlyArray<NodeAffinity>;
  /** Optional. Specifies the termination action for the instance. */
  instanceTerminationAction?:
    | "INSTANCE_TERMINATION_ACTION_UNSPECIFIED"
    | "DELETE"
    | "STOP"
    | (string & {});
  /** Optional. Specifies the maximum amount of time a Local Ssd Vm should wait while recovery of the Local Ssd state is attempted. Its value should be in between 0 and 168 hours with hour granularity and the default value being 1 hour. */
  localSsdRecoveryTimeout?: SchedulingDuration;
}

export const Scheduling: Schema.Schema<Scheduling> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    preemptible: Schema.optional(Schema.Boolean),
    minNodeCpus: Schema.optional(Schema.Number),
    provisioningModel: Schema.optional(Schema.String),
    automaticRestart: Schema.optional(Schema.Boolean),
    onHostMaintenance: Schema.optional(Schema.String),
    nodeAffinities: Schema.optional(Schema.Array(NodeAffinity)),
    instanceTerminationAction: Schema.optional(Schema.String),
    localSsdRecoveryTimeout: Schema.optional(SchedulingDuration),
  }).annotate({ identifier: "Scheduling" });

export interface AcceleratorConfig {
  /** Optional. Full or partial URL of the accelerator type resource to attach to this instance. */
  acceleratorType?: string;
  /** Optional. The number of the guest accelerator cards exposed to this instance. */
  acceleratorCount?: number;
}

export const AcceleratorConfig: Schema.Schema<AcceleratorConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    acceleratorType: Schema.optional(Schema.String),
    acceleratorCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "AcceleratorConfig" });

export interface InitializeParams {
  /** Optional. Specifies the disk name. If not specified, the default is to use the name of the instance. */
  diskName?: string;
  /** Optional. URL of the zone where the disk should be created. Required for each regional disk associated with the instance. */
  replicaZones?: ReadonlyArray<string>;
}

export const InitializeParams: Schema.Schema<InitializeParams> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    diskName: Schema.optional(Schema.String),
    replicaZones: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "InitializeParams" });

export interface CustomerEncryptionKey {
  /** Optional. The name of the encryption key that is stored in Google Cloud KMS. */
  kmsKeyName?: string;
  /** Optional. Specifies a 256-bit customer-supplied encryption key. */
  rawKey?: string;
  /** Optional. RSA-wrapped 2048-bit customer-supplied encryption key to either encrypt or decrypt this resource. */
  rsaEncryptedKey?: string;
  /** Optional. The service account being used for the encryption request for the given KMS key. If absent, the Compute Engine default service account is used. */
  kmsKeyServiceAccount?: string;
}

export const CustomerEncryptionKey: Schema.Schema<CustomerEncryptionKey> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kmsKeyName: Schema.optional(Schema.String),
    rawKey: Schema.optional(Schema.String),
    rsaEncryptedKey: Schema.optional(Schema.String),
    kmsKeyServiceAccount: Schema.optional(Schema.String),
  }).annotate({ identifier: "CustomerEncryptionKey" });

export interface AttachedDisk {
  /** Optional. A zero-based index to this disk, where 0 is reserved for the boot disk. */
  index?: string;
  /** Specifies the type of the disk. */
  diskTypeDeprecated?:
    | "DISK_TYPE_UNSPECIFIED"
    | "SCRATCH"
    | "PERSISTENT"
    | (string & {});
  /** Optional. The mode in which to attach this disk. */
  mode?:
    | "DISK_MODE_UNSPECIFIED"
    | "READ_WRITE"
    | "READ_ONLY"
    | "LOCKED"
    | (string & {});
  /** Optional. Output only. The URI of the disk type resource. For example: projects/project/zones/zone/diskTypes/pd-standard or pd-ssd */
  diskType?: string;
  /** Optional. Specifies the disk interface to use for attaching this disk. */
  diskInterface?:
    | "DISK_INTERFACE_UNSPECIFIED"
    | "SCSI"
    | "NVME"
    | "NVDIMM"
    | "ISCSI"
    | (string & {});
  /** Optional. Specifies whether the disk will be auto-deleted when the instance is deleted (but not when the disk is detached from the instance). */
  autoDelete?: boolean;
  /** Optional. Specifies the parameters to initialize this disk. */
  initializeParams?: InitializeParams;
  /** Optional. Output only. The state of the disk. */
  savedState?: "DISK_SAVED_STATE_UNSPECIFIED" | "PRESERVED" | (string & {});
  /** Optional. Indicates that this is a boot disk. The virtual machine will use the first partition of the disk for its root filesystem. */
  boot?: boolean;
  /** Optional. Specifies a valid partial or full URL to an existing Persistent Disk resource. */
  source?: string;
  /** Optional. This is used as an identifier for the disks. This is the unique name has to provided to modify disk parameters like disk_name and replica_zones (in case of RePDs) */
  deviceName?: string;
  /** Optional. A list of features to enable on the guest operating system. Applicable only for bootable images. */
  guestOsFeature?: ReadonlyArray<GuestOsFeature>;
  /** Optional. Specifies the type of the disk. */
  type?: "DISK_TYPE_UNSPECIFIED" | "SCRATCH" | "PERSISTENT" | (string & {});
  /** Optional. Any valid publicly visible licenses. */
  license?: ReadonlyArray<string>;
  /** Optional. The size of the disk in GB. */
  diskSizeGb?: string;
  /** Optional. Encrypts or decrypts a disk using a customer-supplied encryption key. */
  diskEncryptionKey?: CustomerEncryptionKey;
  /** Optional. Type of the resource. */
  kind?: string;
}

export const AttachedDisk: Schema.Schema<AttachedDisk> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    index: Schema.optional(Schema.String),
    diskTypeDeprecated: Schema.optional(Schema.String),
    mode: Schema.optional(Schema.String),
    diskType: Schema.optional(Schema.String),
    diskInterface: Schema.optional(Schema.String),
    autoDelete: Schema.optional(Schema.Boolean),
    initializeParams: Schema.optional(InitializeParams),
    savedState: Schema.optional(Schema.String),
    boot: Schema.optional(Schema.Boolean),
    source: Schema.optional(Schema.String),
    deviceName: Schema.optional(Schema.String),
    guestOsFeature: Schema.optional(Schema.Array(GuestOsFeature)),
    type: Schema.optional(Schema.String),
    license: Schema.optional(Schema.Array(Schema.String)),
    diskSizeGb: Schema.optional(Schema.String),
    diskEncryptionKey: Schema.optional(CustomerEncryptionKey),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "AttachedDisk" });

export interface ComputeInstanceBackupProperties {
  /** A list of tags to apply to the instances that are created from these properties. The tags identify valid sources or targets for network firewalls. The setTags method can modify this list of tags. Each tag within the list must comply with RFC1035 (https://www.ietf.org/rfc/rfc1035.txt). */
  tags?: Tags;
  /** The metadata key/value pairs to assign to instances that are created from these properties. These pairs can consist of custom metadata or predefined keys. See https://cloud.google.com/compute/docs/metadata/overview for more information. */
  metadata?: Metadata;
  /** A list of service accounts with specified scopes. Access tokens for these service accounts are available to the instances that are created from these properties. Use metadata queries to obtain the access tokens for these instances. */
  serviceAccount?: ReadonlyArray<ServiceAccount>;
  /** KeyRevocationActionType of the instance. Supported options are "STOP" and "NONE". The default value is "NONE" if it is not specified. */
  keyRevocationActionType?:
    | "KEY_REVOCATION_ACTION_TYPE_UNSPECIFIED"
    | "NONE"
    | "STOP"
    | (string & {});
  /** Optional. Indicates whether to perform a guest flush operation before taking a compute backup. When set to false, the system will create crash-consistent backups. Default value is false. */
  guestFlush?: boolean;
  /** An optional text description for the instances that are created from these properties. */
  description?: string;
  /** An array of network access configurations for this interface. */
  networkInterface?: ReadonlyArray<NetworkInterface>;
  /** Specifies the scheduling options for the instances that are created from these properties. */
  scheduling?: Scheduling;
  /** Enables instances created based on these properties to send packets with source IP addresses other than their own and receive packets with destination IP addresses other than their own. If these instances will be used as an IP gateway or it will be set as the next-hop in a Route resource, specify `true`. If unsure, leave this set to `false`. See the https://cloud.google.com/vpc/docs/using-routes#canipforward documentation for more information. */
  canIpForward?: boolean;
  /** The machine type to use for instances that are created from these properties. */
  machineType?: string;
  /** A list of guest accelerator cards' type and count to use for instances created from these properties. */
  guestAccelerator?: ReadonlyArray<AcceleratorConfig>;
  /** Minimum cpu/platform to be used by instances. The instance may be scheduled on the specified or newer cpu/platform. Applicable values are the friendly names of CPU platforms, such as `minCpuPlatform: Intel Haswell` or `minCpuPlatform: Intel Sandy Bridge`. For more information, read https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform. */
  minCpuPlatform?: string;
  /** Labels to apply to instances that are created from these properties. */
  labels?: Record<string, string>;
  /** An array of disks that are associated with the instances that are created from these properties. */
  disk?: ReadonlyArray<AttachedDisk>;
  /** The source instance used to create this backup. This can be a partial or full URL to the resource. For example, the following are valid values: -https://www.googleapis.com/compute/v1/projects/project/zones/zone/instances/instance -projects/project/zones/zone/instances/instance */
  sourceInstance?: string;
}

export const ComputeInstanceBackupProperties: Schema.Schema<ComputeInstanceBackupProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tags: Schema.optional(Tags),
    metadata: Schema.optional(Metadata),
    serviceAccount: Schema.optional(Schema.Array(ServiceAccount)),
    keyRevocationActionType: Schema.optional(Schema.String),
    guestFlush: Schema.optional(Schema.Boolean),
    description: Schema.optional(Schema.String),
    networkInterface: Schema.optional(Schema.Array(NetworkInterface)),
    scheduling: Schema.optional(Scheduling),
    canIpForward: Schema.optional(Schema.Boolean),
    machineType: Schema.optional(Schema.String),
    guestAccelerator: Schema.optional(Schema.Array(AcceleratorConfig)),
    minCpuPlatform: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    disk: Schema.optional(Schema.Array(AttachedDisk)),
    sourceInstance: Schema.optional(Schema.String),
  }).annotate({ identifier: "ComputeInstanceBackupProperties" });

export interface Backup {
  /** Output only. The time when the instance was updated. */
  updateTime?: string;
  /** Output only. The time when the instance was created. */
  createTime?: string;
  /** Output only. Identifier. Name of the backup to create. It must have the format`"projects//locations//backupVaults//dataSources/{datasource}/backups/{backup}"`. `{backup}` cannot be changed after creation. It must be between 3-63 characters long and must be unique within the datasource. */
  name?: string;
  /** Output only. Backup Appliance specific backup properties. */
  backupApplianceBackupProperties?: BackupApplianceBackupProperties;
  /** Optional. The list of BackupLocks taken by the accessor Backup Appliance. */
  backupApplianceLocks?: ReadonlyArray<BackupLock>;
  /** Output only. AlloyDB specific backup properties. */
  alloyDbBackupProperties?: AlloyDbClusterBackupProperties;
  /** Optional. Output only. Reserved for future use. */
  satisfiesPzi?: boolean;
  /** Optional. Output only. Reserved for future use. */
  satisfiesPzs?: boolean;
  /** Output only. Unique identifier of the GCP resource that is being backed up. */
  gcpResource?: BackupGcpResource;
  /** Output only. The Backup resource instance state. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "ACTIVE"
    | "DELETING"
    | "ERROR"
    | "UPLOADING"
    | (string & {});
  /** Optional. Output only. The list of KMS key versions used to encrypt the backup. */
  kmsKeyVersions?: ReadonlyArray<string>;
  /** Optional. Server specified ETag to prevent updates from overwriting each other. */
  etag?: string;
  /** Output only. The list of BackupLocks taken by the service to prevent the deletion of the backup. */
  serviceLocks?: ReadonlyArray<BackupLock>;
  /** Optional. The backup can not be deleted before this time. */
  enforcedRetentionEndTime?: string;
  /** Output only. Disk specific backup properties. */
  diskBackupProperties?: DiskBackupProperties;
  /** Output only. source resource size in bytes at the time of the backup. */
  resourceSizeBytes?: string;
  /** Output only. The description of the Backup instance (2048 characters or less). */
  description?: string;
  /** Optional. When this backup is automatically expired. */
  expireTime?: string;
  /** Output only. Cloud SQL specific backup properties. */
  cloudSqlInstanceBackupProperties?: CloudSqlInstanceBackupProperties;
  /** Optional. Resource labels to represent user provided metadata. No labels currently defined. */
  labels?: Record<string, string>;
  /** Output only. Configuration for a Google Cloud resource. */
  gcpBackupPlanInfo?: GCPBackupPlanInfo;
  /** Output only. Setting for how the enforced retention end time is inherited. This value is copied from this backup's BackupVault. */
  backupRetentionInheritance?:
    | "BACKUP_RETENTION_INHERITANCE_UNSPECIFIED"
    | "INHERIT_VAULT_RETENTION"
    | "MATCH_BACKUP_EXPIRE_TIME"
    | (string & {});
  /** Output only. The point in time when this backup was captured from the source. */
  consistencyTime?: string;
  /** Output only. Type of the backup, unspecified, scheduled or ondemand. */
  backupType?:
    | "BACKUP_TYPE_UNSPECIFIED"
    | "SCHEDULED"
    | "ON_DEMAND"
    | "ON_DEMAND_OPERATIONAL"
    | (string & {});
  /** Output only. Filestore specific backup properties. */
  filestoreInstanceBackupProperties?: FilestoreInstanceBackupProperties;
  /** Output only. Compute Engine specific backup properties. */
  computeInstanceBackupProperties?: ComputeInstanceBackupProperties;
}

export const Backup: Schema.Schema<Backup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    backupApplianceBackupProperties: Schema.optional(
      BackupApplianceBackupProperties,
    ),
    backupApplianceLocks: Schema.optional(Schema.Array(BackupLock)),
    alloyDbBackupProperties: Schema.optional(AlloyDbClusterBackupProperties),
    satisfiesPzi: Schema.optional(Schema.Boolean),
    satisfiesPzs: Schema.optional(Schema.Boolean),
    gcpResource: Schema.optional(BackupGcpResource),
    state: Schema.optional(Schema.String),
    kmsKeyVersions: Schema.optional(Schema.Array(Schema.String)),
    etag: Schema.optional(Schema.String),
    serviceLocks: Schema.optional(Schema.Array(BackupLock)),
    enforcedRetentionEndTime: Schema.optional(Schema.String),
    diskBackupProperties: Schema.optional(DiskBackupProperties),
    resourceSizeBytes: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    expireTime: Schema.optional(Schema.String),
    cloudSqlInstanceBackupProperties: Schema.optional(
      CloudSqlInstanceBackupProperties,
    ),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    gcpBackupPlanInfo: Schema.optional(GCPBackupPlanInfo),
    backupRetentionInheritance: Schema.optional(Schema.String),
    consistencyTime: Schema.optional(Schema.String),
    backupType: Schema.optional(Schema.String),
    filestoreInstanceBackupProperties: Schema.optional(
      FilestoreInstanceBackupProperties,
    ),
    computeInstanceBackupProperties: Schema.optional(
      ComputeInstanceBackupProperties,
    ),
  }).annotate({ identifier: "Backup" });

export interface FetchBackupsForResourceTypeResponse {
  /** The Backups from the specified parent. */
  backups?: ReadonlyArray<Backup>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const FetchBackupsForResourceTypeResponse: Schema.Schema<FetchBackupsForResourceTypeResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    backups: Schema.optional(Schema.Array(Backup)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "FetchBackupsForResourceTypeResponse" });

export interface DataSourceBackupApplianceApplication {
  /** Hostname of the host where the application is running. */
  hostname?: string;
  /** Appliance name. */
  backupAppliance?: string;
  /** Appliance Id of the Backup Appliance. */
  applianceId?: string;
  /** The appid field of the application within the Backup Appliance. */
  applicationId?: string;
  /** The name of the Application as known to the Backup Appliance. */
  applicationName?: string;
  /** The type of the application. e.g. VMBackup */
  type?: string;
  /** Hostid of the application host. */
  hostId?: string;
}

export const DataSourceBackupApplianceApplication: Schema.Schema<DataSourceBackupApplianceApplication> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hostname: Schema.optional(Schema.String),
    backupAppliance: Schema.optional(Schema.String),
    applianceId: Schema.optional(Schema.String),
    applicationId: Schema.optional(Schema.String),
    applicationName: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    hostId: Schema.optional(Schema.String),
  }).annotate({ identifier: "DataSourceBackupApplianceApplication" });

export interface EncryptionConfig {
  /** Optional. The Cloud KMS key name to encrypt backups in this backup vault. Must be in the same region as the vault. Some workload backups like compute disk backups may use their inherited source key instead. Format: projects/{project}/locations/{location}/keyRings/{ring}/cryptoKeys/{key} */
  kmsKeyName?: string;
}

export const EncryptionConfig: Schema.Schema<EncryptionConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kmsKeyName: Schema.optional(Schema.String),
  }).annotate({ identifier: "EncryptionConfig" });

export interface BackupVault {
  /** Optional. Resource labels to represent user provided metadata. No labels currently defined: */
  labels?: Record<string, string>;
  /** Required. The default and minimum enforced retention for each backup within the backup vault. The enforced retention for each backup can be extended. Note: Longer minimum enforced retention period impacts potential storage costs post introductory trial. We recommend starting with a short duration of 3 days or less. */
  backupMinimumEnforcedRetentionDuration?: string;
  /** Output only. Immutable after resource creation until resource deletion. */
  uid?: string;
  /** Optional. Setting for how a backup's enforced retention end time is inherited. */
  backupRetentionInheritance?:
    | "BACKUP_RETENTION_INHERITANCE_UNSPECIFIED"
    | "INHERIT_VAULT_RETENTION"
    | "MATCH_BACKUP_EXPIRE_TIME"
    | (string & {});
  /** Optional. User annotations. See https://google.aip.dev/128#annotations Stores small amounts of arbitrary data. */
  annotations?: Record<string, string>;
  /** Optional. Server specified ETag for the backup vault resource to prevent simultaneous updates from overwiting each other. */
  etag?: string;
  /** Output only. The number of backups in this backup vault. */
  backupCount?: string;
  /** Optional. The encryption config of the backup vault. */
  encryptionConfig?: EncryptionConfig;
  /** Output only. The time when the instance was created. */
  createTime?: string;
  /** Output only. Service account used by the BackupVault Service for this BackupVault. The user should grant this account permissions in their workload project to enable the service to run backups and restores there. */
  serviceAccount?: string;
  /** Output only. Identifier. Name of the backup vault to create. It must have the format`"projects/{project}/locations/{location}/backupVaults/{backupvault}"`. `{backupvault}` cannot be changed after creation. It must be between 3-63 characters long and must be unique within the project and location. */
  name?: string;
  /** Output only. Total size of the storage used by all backup resources. */
  totalStoredBytes?: string;
  /** Output only. The BackupVault resource instance state. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "ACTIVE"
    | "DELETING"
    | "ERROR"
    | "UPDATING"
    | (string & {});
  /** Output only. The time when the instance was updated. */
  updateTime?: string;
  /** Optional. Time after which the BackupVault resource is locked. */
  effectiveTime?: string;
  /** Optional. The description of the BackupVault instance (2048 characters or less). */
  description?: string;
  /** Optional. Note: This field is added for future use case and will not be supported in the current release. Access restriction for the backup vault. Default value is WITHIN_ORGANIZATION if not provided during creation. */
  accessRestriction?:
    | "ACCESS_RESTRICTION_UNSPECIFIED"
    | "WITHIN_PROJECT"
    | "WITHIN_ORGANIZATION"
    | "UNRESTRICTED"
    | "WITHIN_ORG_BUT_UNRESTRICTED_FOR_BA"
    | (string & {});
  /** Output only. Set to true when there are no backups nested under this resource. */
  deletable?: boolean;
}

export const BackupVault: Schema.Schema<BackupVault> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    backupMinimumEnforcedRetentionDuration: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    backupRetentionInheritance: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    backupCount: Schema.optional(Schema.String),
    encryptionConfig: Schema.optional(EncryptionConfig),
    createTime: Schema.optional(Schema.String),
    serviceAccount: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    totalStoredBytes: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    effectiveTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    accessRestriction: Schema.optional(Schema.String),
    deletable: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "BackupVault" });

export interface FetchUsableBackupVaultsResponse {
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The list of BackupVault instances in the project for the specified location. If the '{location}' value in the request is "-", the response contains a list of instances from all locations. In case any location is unreachable, the response will only return backup vaults in reachable locations and the 'unreachable' field will be populated with a list of unreachable locations. */
  backupVaults?: ReadonlyArray<BackupVault>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const FetchUsableBackupVaultsResponse: Schema.Schema<FetchUsableBackupVaultsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    backupVaults: Schema.optional(Schema.Array(BackupVault)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "FetchUsableBackupVaultsResponse" });

export interface CloudSqlInstanceBackupPlanAssociationProperties {
  /** Output only. The time when the instance was created. */
  instanceCreateTime?: string;
}

export const CloudSqlInstanceBackupPlanAssociationProperties: Schema.Schema<CloudSqlInstanceBackupPlanAssociationProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instanceCreateTime: Schema.optional(Schema.String),
  }).annotate({
    identifier: "CloudSqlInstanceBackupPlanAssociationProperties",
  });

export interface BackupDrPlanRule {
  /** Output only. Unique Id of the backup rule. */
  ruleId?: string;
  /** Output only. Timestamp of the latest successful backup created via this backup rule. */
  lastSuccessfulBackupTime?: string;
}

export const BackupDrPlanRule: Schema.Schema<BackupDrPlanRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ruleId: Schema.optional(Schema.String),
    lastSuccessfulBackupTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "BackupDrPlanRule" });

export interface PitrSettings {
  /** Output only. Number of days to retain the backup. */
  retentionDays?: number;
}

export const PitrSettings: Schema.Schema<PitrSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    retentionDays: Schema.optional(Schema.Number),
  }).annotate({ identifier: "PitrSettings" });

export interface BackupDrPlanConfig {
  /** Backup rules of the backup plan resource. */
  backupDrPlanRules?: ReadonlyArray<BackupDrPlanRule>;
}

export const BackupDrPlanConfig: Schema.Schema<BackupDrPlanConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    backupDrPlanRules: Schema.optional(Schema.Array(BackupDrPlanRule)),
  }).annotate({ identifier: "BackupDrPlanConfig" });

export interface BackupDrTemplateConfig {
  /** Output only. The URI of the BackupDr template resource for the first party identity users. */
  firstPartyManagementUri?: string;
  /** Output only. The URI of the BackupDr template resource for the third party identity users. */
  thirdPartyManagementUri?: string;
}

export const BackupDrTemplateConfig: Schema.Schema<BackupDrTemplateConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    firstPartyManagementUri: Schema.optional(Schema.String),
    thirdPartyManagementUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "BackupDrTemplateConfig" });

export interface BackupLocation {
  /** Output only. The type of the location. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "ZONAL"
    | "REGIONAL"
    | "MULTI_REGIONAL"
    | (string & {});
  /** Output only. The id of the cloud location. Example: "us-central1" */
  locationId?: string;
}

export const BackupLocation: Schema.Schema<BackupLocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    locationId: Schema.optional(Schema.String),
  }).annotate({ identifier: "BackupLocation" });

export interface BackupConfigDetails {
  /** Output only. Point in time recovery settings of the backup configuration resource. */
  pitrSettings?: PitrSettings;
  /** Google Cloud Backup and DR's Backup Plan specific data. */
  backupDrPlanConfig?: BackupDrPlanConfig;
  /** Google Cloud Backup and DR's Template specific data. */
  backupDrTemplateConfig?: BackupDrTemplateConfig;
  /** Output only. The type of the backup config resource. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "CLOUD_SQL_INSTANCE_BACKUP_CONFIG"
    | "COMPUTE_ENGINE_RESOURCE_POLICY"
    | "BACKUPDR_BACKUP_PLAN"
    | "BACKUPDR_TEMPLATE"
    | (string & {});
  /** Output only. The display name of the backup config source resource. */
  backupConfigSourceDisplayName?: string;
  /** The locations where the backups are to be stored. */
  backupLocations?: ReadonlyArray<BackupLocation>;
  /** Output only. The [full resource name](https://cloud.google.com/asset-inventory/docs/resource-name-format) of the resource that is applicable for the backup configuration. Example: "//compute.googleapis.com/projects/{project}/zones/{zone}/instances/{instance}" */
  applicableResource?: string;
  /** Output only. Timestamp of the latest successful backup created via this backup configuration. */
  latestSuccessfulBackupTime?: string;
  /** Output only. The [full resource name](https://cloud.google.com/asset-inventory/docs/resource-name-format) of the backup vault that will store the backups generated through this backup configuration. Example: "//backupdr.googleapis.com/v1/projects/{project}/locations/{region}/backupVaults/{backupvaultId}" */
  backupVault?: string;
  /** Output only. The state of the backup config resource. */
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "INACTIVE" | "ERROR" | (string & {});
  /** Output only. The full resource name of the backup config source resource. For example, "//backupdr.googleapis.com/v1/projects/{project}/locations/{region}/backupPlans/{backupplanId}" or "//compute.googleapis.com/projects/{project}/locations/{region}/resourcePolicies/{resourcePolicyId}". */
  backupConfigSource?: string;
}

export const BackupConfigDetails: Schema.Schema<BackupConfigDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pitrSettings: Schema.optional(PitrSettings),
    backupDrPlanConfig: Schema.optional(BackupDrPlanConfig),
    backupDrTemplateConfig: Schema.optional(BackupDrTemplateConfig),
    type: Schema.optional(Schema.String),
    backupConfigSourceDisplayName: Schema.optional(Schema.String),
    backupLocations: Schema.optional(Schema.Array(BackupLocation)),
    applicableResource: Schema.optional(Schema.String),
    latestSuccessfulBackupTime: Schema.optional(Schema.String),
    backupVault: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    backupConfigSource: Schema.optional(Schema.String),
  }).annotate({ identifier: "BackupConfigDetails" });

export interface ResourceBackupConfig {
  /** Output only. The human friendly name of the target resource. */
  targetResourceDisplayName?: string;
  /** Labels associated with the target resource. */
  targetResourceLabels?: Record<string, string>;
  /** Output only. Whether the target resource is configured for backup. This is true if the backup_configs_details is not empty. */
  backupConfigured?: boolean;
  /** Output only. The [full resource name](https://cloud.google.com/asset-inventory/docs/resource-name-format) of the cloud resource that this configuration applies to. Supported resource types are ResourceBackupConfig.ResourceType. */
  targetResource?: string;
  /** Backup configurations applying to the target resource, including those targeting its related/child resources. For example, backup configuration applicable to Compute Engine disks will be populated in this field for a Compute Engine VM which has the disk associated. */
  backupConfigsDetails?: ReadonlyArray<BackupConfigDetails>;
  /** Output only. Whether the target resource is protected by a backup vault. This is true if the backup_configs_details is not empty and any of the ResourceBackupConfig.backup_configs_details has a backup configuration with BackupConfigDetails.backup_vault set. */
  vaulted?: boolean;
  /** Identifier. The resource name of the ResourceBackupConfig. Format: projects/{project}/locations/{location}/resourceBackupConfigs/{uid} */
  name?: string;
  /** Output only. The type of the target resource. */
  targetResourceType?:
    | "RESOURCE_TYPE_UNSPECIFIED"
    | "CLOUD_SQL_INSTANCE"
    | "COMPUTE_ENGINE_VM"
    | "COMPUTE_ENGINE_DISK"
    | "COMPUTE_ENGINE_REGIONAL_DISK"
    | "FILESTORE_INSTANCE"
    | (string & {});
  /** Output only. The unique identifier of the resource backup config. */
  uid?: string;
}

export const ResourceBackupConfig: Schema.Schema<ResourceBackupConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targetResourceDisplayName: Schema.optional(Schema.String),
    targetResourceLabels: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    backupConfigured: Schema.optional(Schema.Boolean),
    targetResource: Schema.optional(Schema.String),
    backupConfigsDetails: Schema.optional(Schema.Array(BackupConfigDetails)),
    vaulted: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    targetResourceType: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
  }).annotate({ identifier: "ResourceBackupConfig" });

export interface AlloyDBClusterBackupPlanAssociationProperties {
  /** Output only. The cluster UID of the AlloyDB cluster. */
  clusterUid?: string;
}

export const AlloyDBClusterBackupPlanAssociationProperties: Schema.Schema<AlloyDBClusterBackupPlanAssociationProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clusterUid: Schema.optional(Schema.String),
  }).annotate({ identifier: "AlloyDBClusterBackupPlanAssociationProperties" });

export interface FilestoreInstanceBackupPlanAssociationProperties {
  /** Output only. The time when the instance was created. */
  instanceCreateTime?: string;
}

export const FilestoreInstanceBackupPlanAssociationProperties: Schema.Schema<FilestoreInstanceBackupPlanAssociationProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instanceCreateTime: Schema.optional(Schema.String),
  }).annotate({
    identifier: "FilestoreInstanceBackupPlanAssociationProperties",
  });

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

export interface RuleConfigInfo {
  /** Output only. The point in time when the last successful backup was captured from the source. */
  lastSuccessfulBackupConsistencyTime?: string;
  /** Output only. Backup Rule id fetched from backup plan. */
  ruleId?: string;
  /** Output only. The last backup state for rule. */
  lastBackupState?:
    | "LAST_BACKUP_STATE_UNSPECIFIED"
    | "FIRST_BACKUP_PENDING"
    | "PERMISSION_DENIED"
    | "SUCCEEDED"
    | "FAILED"
    | (string & {});
  /** Output only. google.rpc.Status object to store the last backup error. */
  lastBackupError?: Status;
}

export const RuleConfigInfo: Schema.Schema<RuleConfigInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastSuccessfulBackupConsistencyTime: Schema.optional(Schema.String),
    ruleId: Schema.optional(Schema.String),
    lastBackupState: Schema.optional(Schema.String),
    lastBackupError: Schema.optional(Status),
  }).annotate({ identifier: "RuleConfigInfo" });

export interface BackupPlanAssociation {
  /** Required. Resource name of backup plan which needs to be applied on workload. Format: projects/{project}/locations/{location}/backupPlans/{backupPlanId} */
  backupPlan?: string;
  /** Output only. AlloyDB cluster's backup plan association properties. */
  alloydbClusterBackupPlanAssociationProperties?: AlloyDBClusterBackupPlanAssociationProperties;
  /** Required. Immutable. Resource name of workload on which the backup plan is applied. The format can either be the resource name (e.g., "projects/my-project/zones/us-central1-a/instances/my-instance") or the full resource URI (e.g., "https://www.googleapis.com/compute/v1/projects/my-project/zones/us-central1-a/instances/my-instance"). */
  resource?: string;
  /** Output only. Filestore instance's backup plan association properties. */
  filestoreInstanceBackupPlanAssociationProperties?: FilestoreInstanceBackupPlanAssociationProperties;
  /** Output only. The config info related to backup rules. */
  rulesConfigInfo?: ReadonlyArray<RuleConfigInfo>;
  /** Output only. Cloud SQL instance's backup plan association properties. */
  cloudSqlInstanceBackupPlanAssociationProperties?: CloudSqlInstanceBackupPlanAssociationProperties;
  /** Output only. The BackupPlanAssociation resource state. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "ACTIVE"
    | "DELETING"
    | "INACTIVE"
    | "UPDATING"
    | (string & {});
  /** Output only. The time when the instance was updated. */
  updateTime?: string;
  /** Output only. Resource name of data source which will be used as storage location for backups taken. Format : projects/{project}/locations/{location}/backupVaults/{backupvault}/dataSources/{datasource} */
  dataSource?: string;
  /** Output only. The time when the instance was created. */
  createTime?: string;
  /** Output only. Identifier. The resource name of BackupPlanAssociation in below format Format : projects/{project}/locations/{location}/backupPlanAssociations/{backupPlanAssociationId} */
  name?: string;
  /** Output only. The user friendly revision ID of the `BackupPlanRevision`. Example: v0, v1, v2, etc. */
  backupPlanRevisionId?: string;
  /** Required. Immutable. Resource type of workload on which backupplan is applied */
  resourceType?: string;
  /** Output only. The resource id of the `BackupPlanRevision`. Format: `projects/{project}/locations/{location}/backupPlans/{backup_plan}/revisions/{revision_id}` */
  backupPlanRevisionName?: string;
}

export const BackupPlanAssociation: Schema.Schema<BackupPlanAssociation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    backupPlan: Schema.optional(Schema.String),
    alloydbClusterBackupPlanAssociationProperties: Schema.optional(
      AlloyDBClusterBackupPlanAssociationProperties,
    ),
    resource: Schema.optional(Schema.String),
    filestoreInstanceBackupPlanAssociationProperties: Schema.optional(
      FilestoreInstanceBackupPlanAssociationProperties,
    ),
    rulesConfigInfo: Schema.optional(Schema.Array(RuleConfigInfo)),
    cloudSqlInstanceBackupPlanAssociationProperties: Schema.optional(
      CloudSqlInstanceBackupPlanAssociationProperties,
    ),
    state: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    dataSource: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    backupPlanRevisionId: Schema.optional(Schema.String),
    resourceType: Schema.optional(Schema.String),
    backupPlanRevisionName: Schema.optional(Schema.String),
  }).annotate({ identifier: "BackupPlanAssociation" });

export interface FetchBackupPlanAssociationsForResourceTypeResponse {
  /** Output only. The BackupPlanAssociations from the specified parent. */
  backupPlanAssociations?: ReadonlyArray<BackupPlanAssociation>;
  /** Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const FetchBackupPlanAssociationsForResourceTypeResponse: Schema.Schema<FetchBackupPlanAssociationsForResourceTypeResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    backupPlanAssociations: Schema.optional(
      Schema.Array(BackupPlanAssociation),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "FetchBackupPlanAssociationsForResourceTypeResponse",
  });

export interface TestIamPermissionsRequest {
  /** The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsRequest: Schema.Schema<TestIamPermissionsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsRequest" });

export interface FilestoreInstanceDataSourceProperties {
  /** Output only. The instance creation timestamp. */
  instanceCreateTime?: string;
  /** Output only. Name of the Filestore instance backed up by the datasource. */
  name?: string;
}

export const FilestoreInstanceDataSourceProperties: Schema.Schema<FilestoreInstanceDataSourceProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instanceCreateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "FilestoreInstanceDataSourceProperties" });

export interface CloudSqlInstanceDataSourceProperties {
  /** Output only. Name of the Cloud SQL instance backed up by the datasource. Format: projects/{project}/instances/{instance} */
  name?: string;
  /** Output only. The tier (or machine type) for this instance. Example: `db-custom-1-3840` */
  instanceTier?: string;
  /** Output only. The instance creation timestamp. */
  instanceCreateTime?: string;
  /** Output only. The installed database version of the Cloud SQL instance. */
  databaseInstalledVersion?: string;
}

export const CloudSqlInstanceDataSourceProperties: Schema.Schema<CloudSqlInstanceDataSourceProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    instanceTier: Schema.optional(Schema.String),
    instanceCreateTime: Schema.optional(Schema.String),
    databaseInstalledVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "CloudSqlInstanceDataSourceProperties" });

export interface ComputeInstanceDataSourceProperties {
  /** The machine type of the instance. */
  machineType?: string;
  /** The sum of all the disk sizes. */
  totalDiskSizeGb?: string;
  /** Name of the compute instance backed up by the datasource. */
  name?: string;
  /** The description of the Compute Engine instance. */
  description?: string;
  /** The total number of disks attached to the Instance. */
  totalDiskCount?: string;
}

export const ComputeInstanceDataSourceProperties: Schema.Schema<ComputeInstanceDataSourceProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    machineType: Schema.optional(Schema.String),
    totalDiskSizeGb: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    totalDiskCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "ComputeInstanceDataSourceProperties" });

export interface DiskDataSourceProperties {
  /** Name of the disk backed up by the datasource. */
  name?: string;
  /** The description of the disk. */
  description?: string;
  /** The type of the disk. */
  type?: string;
  /** The size of the disk in GB. */
  sizeGb?: string;
}

export const DiskDataSourceProperties: Schema.Schema<DiskDataSourceProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    sizeGb: Schema.optional(Schema.String),
  }).annotate({ identifier: "DiskDataSourceProperties" });

export interface AlloyDbPitrWindow {
  /** Output only. The end time of the PITR window. It is not set if the corresponding Backup Plan Association is active. */
  endTime?: string;
  /** Output only. Log retention days for the PITR window. */
  logRetentionDays?: string;
  /** Output only. The start time of the PITR window. */
  startTime?: string;
}

export const AlloyDbPitrWindow: Schema.Schema<AlloyDbPitrWindow> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endTime: Schema.optional(Schema.String),
    logRetentionDays: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "AlloyDbPitrWindow" });

export interface AlloyDBClusterDataSourceProperties {
  /** Output only. The cluster UID of the AlloyDB cluster backed up by the datasource. */
  clusterUid?: string;
  /** Output only. Name of the AlloyDB cluster backed up by the datasource. */
  name?: string;
  /** Output only. Point in time recovery windows. The order is guaranteed to be ascending by start time. */
  pitrWindows?: ReadonlyArray<AlloyDbPitrWindow>;
}

export const AlloyDBClusterDataSourceProperties: Schema.Schema<AlloyDBClusterDataSourceProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clusterUid: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    pitrWindows: Schema.optional(Schema.Array(AlloyDbPitrWindow)),
  }).annotate({ identifier: "AlloyDBClusterDataSourceProperties" });

export interface DataSourceGcpResource {
  /** Output only. FilestoreInstanceDataSourceProperties has a subset of FileStore instance properties that are useful at the Datasource level. */
  filestoreInstanceDatasourceProperties?: FilestoreInstanceDataSourceProperties;
  /** Output only. CloudSqlInstanceDataSourceProperties has a subset of Cloud SQL Instance properties that are useful at the Datasource level. */
  cloudSqlInstanceDatasourceProperties?: CloudSqlInstanceDataSourceProperties;
  /** ComputeInstanceDataSourceProperties has a subset of Compute Instance properties that are useful at the Datasource level. */
  computeInstanceDatasourceProperties?: ComputeInstanceDataSourceProperties;
  /** Output only. Full resource pathname URL of the source Google Cloud resource. */
  gcpResourcename?: string;
  /** Location of the resource: //"global"/"unspecified". */
  location?: string;
  /** The type of the Google Cloud resource. Use the Unified Resource Type, eg. compute.googleapis.com/Instance. */
  type?: string;
  /** DiskDataSourceProperties has a subset of Disk properties that are useful at the Datasource level. */
  diskDatasourceProperties?: DiskDataSourceProperties;
  /** Output only. AlloyDBClusterDataSourceProperties has a subset of AlloyDB cluster properties that are useful at the Datasource level. Currently none of its child properties are auditable. If new auditable properties are added, the AUDIT annotation should be added. */
  alloyDbClusterDatasourceProperties?: AlloyDBClusterDataSourceProperties;
}

export const DataSourceGcpResource: Schema.Schema<DataSourceGcpResource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filestoreInstanceDatasourceProperties: Schema.optional(
      FilestoreInstanceDataSourceProperties,
    ),
    cloudSqlInstanceDatasourceProperties: Schema.optional(
      CloudSqlInstanceDataSourceProperties,
    ),
    computeInstanceDatasourceProperties: Schema.optional(
      ComputeInstanceDataSourceProperties,
    ),
    gcpResourcename: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    diskDatasourceProperties: Schema.optional(DiskDataSourceProperties),
    alloyDbClusterDatasourceProperties: Schema.optional(
      AlloyDBClusterDataSourceProperties,
    ),
  }).annotate({ identifier: "DataSourceGcpResource" });

export interface BackupApplianceBackupConfig {
  /** The name of the backup appliance. */
  backupApplianceName?: string;
  /** The name of the application. */
  applicationName?: string;
  /** The ID of the backup appliance. */
  backupApplianceId?: string;
  /** The name of the host where the application is running. */
  hostName?: string;
  /** The ID of the SLA of this application. */
  slaId?: string;
  /** The name of the SLT associated with the application. */
  sltName?: string;
  /** The name of the SLP associated with the application. */
  slpName?: string;
}

export const BackupApplianceBackupConfig: Schema.Schema<BackupApplianceBackupConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    backupApplianceName: Schema.optional(Schema.String),
    applicationName: Schema.optional(Schema.String),
    backupApplianceId: Schema.optional(Schema.String),
    hostName: Schema.optional(Schema.String),
    slaId: Schema.optional(Schema.String),
    sltName: Schema.optional(Schema.String),
    slpName: Schema.optional(Schema.String),
  }).annotate({ identifier: "BackupApplianceBackupConfig" });

export interface GcpBackupConfig {
  /** The name of the backup plan association. */
  backupPlanAssociation?: string;
  /** The description of the backup plan. */
  backupPlanDescription?: string;
  /** The name of the backup plan revision. */
  backupPlanRevisionName?: string;
  /** The user friendly id of the backup plan revision. E.g. v0, v1 etc. */
  backupPlanRevisionId?: string;
  /** The name of the backup plan. */
  backupPlan?: string;
  /** The names of the backup plan rules which point to this backupvault */
  backupPlanRules?: ReadonlyArray<string>;
}

export const GcpBackupConfig: Schema.Schema<GcpBackupConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    backupPlanAssociation: Schema.optional(Schema.String),
    backupPlanDescription: Schema.optional(Schema.String),
    backupPlanRevisionName: Schema.optional(Schema.String),
    backupPlanRevisionId: Schema.optional(Schema.String),
    backupPlan: Schema.optional(Schema.String),
    backupPlanRules: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GcpBackupConfig" });

export interface BackupConfigInfo {
  /** Output only. If the last backup were successful, this field has the consistency date. */
  lastSuccessfulBackupConsistencyTime?: string;
  /** Output only. The status of the last backup to this BackupVault */
  lastBackupState?:
    | "LAST_BACKUP_STATE_UNSPECIFIED"
    | "FIRST_BACKUP_PENDING"
    | "SUCCEEDED"
    | "FAILED"
    | "PERMISSION_DENIED"
    | (string & {});
  /** Configuration for an application backed up by a Backup Appliance. */
  backupApplianceBackupConfig?: BackupApplianceBackupConfig;
  /** Output only. If the last backup failed, this field has the error message. */
  lastBackupError?: Status;
  /** Configuration for a Google Cloud resource. */
  gcpBackupConfig?: GcpBackupConfig;
}

export const BackupConfigInfo: Schema.Schema<BackupConfigInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastSuccessfulBackupConsistencyTime: Schema.optional(Schema.String),
    lastBackupState: Schema.optional(Schema.String),
    backupApplianceBackupConfig: Schema.optional(BackupApplianceBackupConfig),
    lastBackupError: Schema.optional(Status),
    gcpBackupConfig: Schema.optional(GcpBackupConfig),
  }).annotate({ identifier: "BackupConfigInfo" });

export interface DataSource {
  /** Number of backups in the data source. */
  backupCount?: string;
  /** Server specified ETag for the ManagementServer resource to prevent simultaneous updates from overwiting each other. */
  etag?: string;
  /** Output only. Identifier. Name of the datasource to create. It must have the format`"projects/{project}/locations/{location}/backupVaults/{backupvault}/dataSources/{datasource}"`. `{datasource}` cannot be changed after creation. It must be between 3-63 characters long and must be unique within the backup vault. */
  name?: string;
  /** Output only. The time when the instance was created. */
  createTime?: string;
  /** Output only. The backup configuration state. */
  configState?:
    | "BACKUP_CONFIG_STATE_UNSPECIFIED"
    | "ACTIVE"
    | "PASSIVE"
    | (string & {});
  /** Output only. The DataSource resource instance state. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "ACTIVE"
    | "DELETING"
    | "ERROR"
    | (string & {});
  /** The number of bytes (metadata and data) stored in this datasource. */
  totalStoredBytes?: string;
  /** Output only. The time when the instance was updated. */
  updateTime?: string;
  /** Output only. Details of how the resource is configured for backup. */
  backupConfigInfo?: BackupConfigInfo;
  /** Output only. This field is set to true if the backup is blocked by vault access restriction. */
  backupBlockedByVaultAccessRestriction?: boolean;
  /** Optional. Resource labels to represent user provided metadata. No labels currently defined: */
  labels?: Record<string, string>;
  /** The backed up resource is a backup appliance application. */
  dataSourceBackupApplianceApplication?: DataSourceBackupApplianceApplication;
  /** The backed up resource is a Google Cloud resource. The word 'DataSource' was included in the names to indicate that this is the representation of the Google Cloud resource used within the DataSource object. */
  dataSourceGcpResource?: DataSourceGcpResource;
}

export const DataSource: Schema.Schema<DataSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    backupCount: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    configState: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    totalStoredBytes: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    backupConfigInfo: Schema.optional(BackupConfigInfo),
    backupBlockedByVaultAccessRestriction: Schema.optional(Schema.Boolean),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    dataSourceBackupApplianceApplication: Schema.optional(
      DataSourceBackupApplianceApplication,
    ),
    dataSourceGcpResource: Schema.optional(DataSourceGcpResource),
  }).annotate({ identifier: "DataSource" });

export interface ListDataSourcesResponse {
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The list of DataSource instances in the project for the specified location. If the '{location}' value in the request is "-", the response contains a list of instances from all locations. In case any location is unreachable, the response will only return data sources in reachable locations and the 'unreachable' field will be populated with a list of unreachable locations. */
  dataSources?: ReadonlyArray<DataSource>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListDataSourcesResponse: Schema.Schema<ListDataSourcesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    dataSources: Schema.optional(Schema.Array(DataSource)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListDataSourcesResponse" });

export interface SetInternalStatusResponse {}

export const SetInternalStatusResponse: Schema.Schema<SetInternalStatusResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "SetInternalStatusResponse",
  });

export interface DisplayDevice {
  /** Optional. Enables display for the Compute Engine VM */
  enableDisplay?: boolean;
}

export const DisplayDevice: Schema.Schema<DisplayDevice> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableDisplay: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "DisplayDevice" });

export interface RemoveDataSourceRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const RemoveDataSourceRequest: Schema.Schema<RemoveDataSourceRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String),
  }).annotate({ identifier: "RemoveDataSourceRequest" });

export interface NetworkPerformanceConfig {
  /** Optional. The tier of the total egress bandwidth. */
  totalEgressBandwidthTier?:
    | "TIER_UNSPECIFIED"
    | "DEFAULT"
    | "TIER_1"
    | (string & {});
}

export const NetworkPerformanceConfig: Schema.Schema<NetworkPerformanceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    totalEgressBandwidthTier: Schema.optional(Schema.String),
  }).annotate({ identifier: "NetworkPerformanceConfig" });

export interface AdvancedMachineFeatures {
  /** Optional. Whether to enable UEFI networking for instance creation. */
  enableUefiNetworking?: boolean;
  /** Optional. The number of threads per physical core. To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed. */
  threadsPerCore?: number;
  /** Optional. Whether to enable nested virtualization or not (default is false). */
  enableNestedVirtualization?: boolean;
  /** Optional. The number of physical cores to expose to an instance. Multiply by the number of threads per core to compute the total number of virtual CPUs to expose to the instance. If unset, the number of cores is inferred from the instance's nominal CPU count and the underlying platform's SMT width. */
  visibleCoreCount?: number;
}

export const AdvancedMachineFeatures: Schema.Schema<AdvancedMachineFeatures> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableUefiNetworking: Schema.optional(Schema.Boolean),
    threadsPerCore: Schema.optional(Schema.Number),
    enableNestedVirtualization: Schema.optional(Schema.Boolean),
    visibleCoreCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "AdvancedMachineFeatures" });

export interface InstanceParams {
  /** Optional. Resource manager tags to be bound to the instance. */
  resourceManagerTags?: Record<string, string>;
}

export const InstanceParams: Schema.Schema<InstanceParams> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceManagerTags: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
  }).annotate({ identifier: "InstanceParams" });

export interface ConfidentialInstanceConfig {
  /** Optional. Defines whether the instance should have confidential compute enabled. */
  enableConfidentialCompute?: boolean;
}

export const ConfidentialInstanceConfig: Schema.Schema<ConfidentialInstanceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableConfidentialCompute: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ConfidentialInstanceConfig" });

export interface ComputeInstanceRestoreProperties {
  /** Optional. The private IPv6 google access type for the VM. If not specified, use INHERIT_FROM_SUBNETWORK as default. */
  privateIpv6GoogleAccess?:
    | "INSTANCE_PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED"
    | "INHERIT_FROM_SUBNETWORK"
    | "ENABLE_OUTBOUND_VM_ACCESS_TO_GOOGLE"
    | "ENABLE_BIDIRECTIONAL_ACCESS_TO_GOOGLE"
    | (string & {});
  /** Optional. Allows this instance to send and receive packets with non-matching destination or source IPs. */
  canIpForward?: boolean;
  /** Optional. An optional description of this resource. Provide this property when you create the resource. */
  description?: string;
  /** Optional. This includes custom metadata and predefined keys. */
  metadata?: Metadata;
  /** Optional. KeyRevocationActionType of the instance. */
  keyRevocationActionType?:
    | "KEY_REVOCATION_ACTION_TYPE_UNSPECIFIED"
    | "NONE"
    | "STOP"
    | (string & {});
  /** Optional. Whether the resource should be protected against deletion. */
  deletionProtection?: boolean;
  /** Optional. Specifies the reservations that this instance can consume from. */
  reservationAffinity?: AllocationAffinity;
  /** Optional. Array of disks associated with this instance. Persistent disks must be created before you can assign them. Source regional persistent disks will be restored with default replica zones if not specified. */
  disks?: ReadonlyArray<AttachedDisk>;
  /** Optional. Full or partial URL of the machine type resource to use for this instance. */
  machineType?: string;
  /** Optional. Configure network performance such as egress bandwidth tier. */
  networkPerformanceConfig?: NetworkPerformanceConfig;
  /** Optional. Labels to apply to this instance. */
  labels?: Record<string, string>;
  /** Optional. A list of the type and count of accelerator cards attached to the instance. */
  guestAccelerators?: ReadonlyArray<AcceleratorConfig>;
  /** Optional. Specifies the hostname of the instance. The specified hostname must be RFC1035 compliant. If hostname is not specified, the default hostname is [INSTANCE_NAME].c.[PROJECT_ID].internal when using the global DNS, and [INSTANCE_NAME].[ZONE].c.[PROJECT_ID].internal when using zonal DNS. */
  hostname?: string;
  /** Optional. An array of network configurations for this instance. These specify how interfaces are configured to interact with other network services, such as connecting to the internet. Multiple interfaces are supported per instance. Required to restore in different project or region. */
  networkInterfaces?: ReadonlyArray<NetworkInterface>;
  /** Optional. Sets the scheduling options for this instance. */
  scheduling?: Scheduling;
  /** Optional. Encrypts suspended data for an instance with a customer-managed encryption key. */
  instanceEncryptionKey?: CustomerEncryptionKey;
  /** Optional. A list of service accounts, with their specified scopes, authorized for this instance. Only one service account per VM instance is supported. */
  serviceAccounts?: ReadonlyArray<ServiceAccount>;
  /** Optional. Controls for advanced machine-related behavior features. */
  advancedMachineFeatures?: AdvancedMachineFeatures;
  /** Optional. Tags to apply to this instance. Tags are used to identify valid sources or targets for network firewalls and are specified by the client during instance creation. */
  tags?: Tags;
  /** Required. Name of the compute instance. */
  name?: string;
  /** Input only. Additional params passed with the request, but not persisted as part of resource payload. */
  params?: InstanceParams;
  /** Optional. Resource policies applied to this instance. By default, no resource policies will be applied. */
  resourcePolicies?: ReadonlyArray<string>;
  /** Optional. Controls Confidential compute options on the instance */
  confidentialInstanceConfig?: ConfidentialInstanceConfig;
  /** Optional. Minimum CPU platform to use for this instance. */
  minCpuPlatform?: string;
  /** Optional. Enables display device for the instance. */
  displayDevice?: DisplayDevice;
}

export const ComputeInstanceRestoreProperties: Schema.Schema<ComputeInstanceRestoreProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    privateIpv6GoogleAccess: Schema.optional(Schema.String),
    canIpForward: Schema.optional(Schema.Boolean),
    description: Schema.optional(Schema.String),
    metadata: Schema.optional(Metadata),
    keyRevocationActionType: Schema.optional(Schema.String),
    deletionProtection: Schema.optional(Schema.Boolean),
    reservationAffinity: Schema.optional(AllocationAffinity),
    disks: Schema.optional(Schema.Array(AttachedDisk)),
    machineType: Schema.optional(Schema.String),
    networkPerformanceConfig: Schema.optional(NetworkPerformanceConfig),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    guestAccelerators: Schema.optional(Schema.Array(AcceleratorConfig)),
    hostname: Schema.optional(Schema.String),
    networkInterfaces: Schema.optional(Schema.Array(NetworkInterface)),
    scheduling: Schema.optional(Scheduling),
    instanceEncryptionKey: Schema.optional(CustomerEncryptionKey),
    serviceAccounts: Schema.optional(Schema.Array(ServiceAccount)),
    advancedMachineFeatures: Schema.optional(AdvancedMachineFeatures),
    tags: Schema.optional(Tags),
    name: Schema.optional(Schema.String),
    params: Schema.optional(InstanceParams),
    resourcePolicies: Schema.optional(Schema.Array(Schema.String)),
    confidentialInstanceConfig: Schema.optional(ConfidentialInstanceConfig),
    minCpuPlatform: Schema.optional(Schema.String),
    displayDevice: Schema.optional(DisplayDevice),
  }).annotate({ identifier: "ComputeInstanceRestoreProperties" });

export interface ComputeInstanceTargetEnvironment {
  /** Required. Target project for the Compute Engine instance. */
  project?: string;
  /** Required. The zone of the Compute Engine instance. */
  zone?: string;
}

export const ComputeInstanceTargetEnvironment: Schema.Schema<ComputeInstanceTargetEnvironment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project: Schema.optional(Schema.String),
    zone: Schema.optional(Schema.String),
  }).annotate({ identifier: "ComputeInstanceTargetEnvironment" });

export interface CloudSqlInstanceDataSourceReferenceProperties {
  /** Output only. The installed database version of the Cloud SQL instance. */
  databaseInstalledVersion?: string;
  /** Output only. The instance creation timestamp. */
  instanceCreateTime?: string;
  /** Output only. Name of the Cloud SQL instance backed up by the datasource. Format: projects/{project}/instances/{instance} */
  name?: string;
  /** Output only. The tier (or machine type) for this instance. Example: `db-custom-1-3840` */
  instanceTier?: string;
}

export const CloudSqlInstanceDataSourceReferenceProperties: Schema.Schema<CloudSqlInstanceDataSourceReferenceProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    databaseInstalledVersion: Schema.optional(Schema.String),
    instanceCreateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    instanceTier: Schema.optional(Schema.String),
  }).annotate({ identifier: "CloudSqlInstanceDataSourceReferenceProperties" });

export interface AlloyDBClusterDataSourceReferenceProperties {
  /** Output only. Name of the AlloyDB cluster backed up by the datasource. Format: projects/{project}/locations/{location}/clusters/{cluster} */
  name?: string;
}

export const AlloyDBClusterDataSourceReferenceProperties: Schema.Schema<AlloyDBClusterDataSourceReferenceProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "AlloyDBClusterDataSourceReferenceProperties" });

export interface FilestoreInstanceDataSourceReferenceProperties {
  /** Output only. Name of the Filestore instance backed up by the datasource. Format: projects/{project}/instances/{instance} */
  name?: string;
  /** Output only. The instance creation timestamp. */
  instanceCreateTime?: string;
}

export const FilestoreInstanceDataSourceReferenceProperties: Schema.Schema<FilestoreInstanceDataSourceReferenceProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    instanceCreateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "FilestoreInstanceDataSourceReferenceProperties" });

export interface DataSourceGcpResourceInfo {
  /** Output only. The properties of the Cloud SQL instance. */
  cloudSqlInstanceProperties?: CloudSqlInstanceDataSourceReferenceProperties;
  /** Output only. The resource name of the Google Cloud resource. Ex: projects/{project}/zones/{zone}/instances/{instance} */
  gcpResourcename?: string;
  /** Output only. The type of the Google Cloud resource. Ex: compute.googleapis.com/Instance */
  type?: string;
  /** Output only. The location of the Google Cloud resource. Ex: //"global"/"unspecified" */
  location?: string;
  /** Output only. The properties of the AlloyDB cluster. */
  alloyDbClusterProperties?: AlloyDBClusterDataSourceReferenceProperties;
  /** Output only. The properties of the Filestore instance. */
  filestoreInstanceProperties?: FilestoreInstanceDataSourceReferenceProperties;
}

export const DataSourceGcpResourceInfo: Schema.Schema<DataSourceGcpResourceInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cloudSqlInstanceProperties: Schema.optional(
      CloudSqlInstanceDataSourceReferenceProperties,
    ),
    gcpResourcename: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    alloyDbClusterProperties: Schema.optional(
      AlloyDBClusterDataSourceReferenceProperties,
    ),
    filestoreInstanceProperties: Schema.optional(
      FilestoreInstanceDataSourceReferenceProperties,
    ),
  }).annotate({ identifier: "DataSourceGcpResourceInfo" });

export interface BackupWindow {
  /** Required. The hour of day (0-23) when the window starts for example if value of start hour of day is 6 that mean backup window start at 6:00. */
  startHourOfDay?: number;
  /** Required. The hour of day (1-24) when the window end for example if value of end hour of day is 10 that mean backup window end time is 10:00. End hour of day should be greater than start hour of day. 0 <= start_hour_of_day < end_hour_of_day <= 24 End hour of day is not include in backup window that mean if end_hour_of_day= 10 jobs should start before 10:00. */
  endHourOfDay?: number;
}

export const BackupWindow: Schema.Schema<BackupWindow> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startHourOfDay: Schema.optional(Schema.Number),
    endHourOfDay: Schema.optional(Schema.Number),
  }).annotate({ identifier: "BackupWindow" });

export interface WeekDayOfMonth {
  /** Required. Specifies the week of the month. */
  weekOfMonth?:
    | "WEEK_OF_MONTH_UNSPECIFIED"
    | "FIRST"
    | "SECOND"
    | "THIRD"
    | "FOURTH"
    | "LAST"
    | (string & {});
  /** Required. Specifies the day of the week. */
  dayOfWeek?:
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

export const WeekDayOfMonth: Schema.Schema<WeekDayOfMonth> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    weekOfMonth: Schema.optional(Schema.String),
    dayOfWeek: Schema.optional(Schema.String),
  }).annotate({ identifier: "WeekDayOfMonth" });

export interface StandardSchedule {
  /** Required. Specifies the `RecurrenceType` for the schedule. */
  recurrenceType?:
    | "RECURRENCE_TYPE_UNSPECIFIED"
    | "HOURLY"
    | "DAILY"
    | "WEEKLY"
    | "MONTHLY"
    | "YEARLY"
    | (string & {});
  /** Required. A BackupWindow defines the window of day during which backup jobs will run. Jobs are queued at the beginning of the window and will be marked as `NOT_RUN` if they do not start by the end of the window. Note: running jobs will not be cancelled at the end of the window. */
  backupWindow?: BackupWindow;
  /** Optional. Specifies frequency for hourly backups. A hourly frequency of 2 means jobs will run every 2 hours from start time till end time defined. This is required for `recurrence_type`, `HOURLY` and is not applicable otherwise. A validation error will occur if a value is supplied and `recurrence_type` is not `HOURLY`. Value of hourly frequency should be between 4 and 23. Reason for limit : We found that there is bandwidth limitation of 3GB/S for GMI while taking a backup and 5GB/S while doing a restore. Given the amount of parallel backups and restore we are targeting, this will potentially take the backup time to mins and hours (in worst case scenario). */
  hourlyFrequency?: number;
  /** Optional. Specifies days of months like 1, 5, or 14 on which jobs will run. Values for `days_of_month` are only applicable for `recurrence_type`, `MONTHLY` and `YEARLY`. A validation error will occur if other values are supplied. */
  daysOfMonth?: ReadonlyArray<number>;
  /** Optional. Specifies the months of year, like `FEBRUARY` and/or `MAY`, on which jobs will run. This field is only applicable when `recurrence_type` is `YEARLY`. A validation error will occur if other values are supplied. */
  months?: ReadonlyArray<
    | "MONTH_UNSPECIFIED"
    | "JANUARY"
    | "FEBRUARY"
    | "MARCH"
    | "APRIL"
    | "MAY"
    | "JUNE"
    | "JULY"
    | "AUGUST"
    | "SEPTEMBER"
    | "OCTOBER"
    | "NOVEMBER"
    | "DECEMBER"
    | (string & {})
  >;
  /** Optional. Specifies days of week like, MONDAY or TUESDAY, on which jobs will run. This is required for `recurrence_type`, `WEEKLY` and is not applicable otherwise. A validation error will occur if a value is supplied and `recurrence_type` is not `WEEKLY`. */
  daysOfWeek?: ReadonlyArray<
    | "DAY_OF_WEEK_UNSPECIFIED"
    | "MONDAY"
    | "TUESDAY"
    | "WEDNESDAY"
    | "THURSDAY"
    | "FRIDAY"
    | "SATURDAY"
    | "SUNDAY"
    | (string & {})
  >;
  /** Required. The time zone to be used when interpreting the schedule. The value of this field must be a time zone name from the IANA tz database. See https://en.wikipedia.org/wiki/List_of_tz_database_time_zones for the list of valid timezone names. For example, Europe/Paris. */
  timeZone?: string;
  /** Optional. Specifies a week day of the month like, FIRST SUNDAY or LAST MONDAY, on which jobs will run. This will be specified by two fields in `WeekDayOfMonth`, one for the day, e.g. `MONDAY`, and one for the week, e.g. `LAST`. This field is only applicable for `recurrence_type`, `MONTHLY` and `YEARLY`. A validation error will occur if other values are supplied. */
  weekDayOfMonth?: WeekDayOfMonth;
}

export const StandardSchedule: Schema.Schema<StandardSchedule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    recurrenceType: Schema.optional(Schema.String),
    backupWindow: Schema.optional(BackupWindow),
    hourlyFrequency: Schema.optional(Schema.Number),
    daysOfMonth: Schema.optional(Schema.Array(Schema.Number)),
    months: Schema.optional(Schema.Array(Schema.String)),
    daysOfWeek: Schema.optional(Schema.Array(Schema.String)),
    timeZone: Schema.optional(Schema.String),
    weekDayOfMonth: Schema.optional(WeekDayOfMonth),
  }).annotate({ identifier: "StandardSchedule" });

export interface BackupRule {
  /** Required. Immutable. The unique id of this `BackupRule`. The `rule_id` is unique per `BackupPlan`.The `rule_id` must start with a lowercase letter followed by up to 62 lowercase letters, numbers, or hyphens. Pattern, /a-z{,62}/. */
  ruleId?: string;
  /** Required. Configures the duration for which backup data will be kept. It is defined in “days”. The value should be greater than or equal to minimum enforced retention of the backup vault. Minimum value is 1 and maximum value is 36159 for custom retention on-demand backup. Minimum and maximum values are workload specific for all other rules. Note: Longer retention can lead to higher storage costs post introductory trial. We recommend starting with a short duration of 3 days or less. */
  backupRetentionDays?: number;
  /** Optional. Defines a schedule that runs within the confines of a defined window of time. */
  standardSchedule?: StandardSchedule;
}

export const BackupRule: Schema.Schema<BackupRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ruleId: Schema.optional(Schema.String),
    backupRetentionDays: Schema.optional(Schema.Number),
    standardSchedule: Schema.optional(StandardSchedule),
  }).annotate({ identifier: "BackupRule" });

export interface ComputeInstanceBackupPlanProperties {
  /** Optional. Indicates whether to perform a guest flush operation before taking a compute backup. When set to false, the system will create crash-consistent backups. Default value is false. */
  guestFlush?: boolean;
}

export const ComputeInstanceBackupPlanProperties: Schema.Schema<ComputeInstanceBackupPlanProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    guestFlush: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ComputeInstanceBackupPlanProperties" });

export interface DiskBackupPlanProperties {
  /** Optional. Indicates whether to perform a guest flush operation before taking a disk backup. When set to false, the system will create crash-consistent backups. Default value is false. */
  guestFlush?: boolean;
}

export const DiskBackupPlanProperties: Schema.Schema<DiskBackupPlanProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    guestFlush: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "DiskBackupPlanProperties" });

export interface BackupPlan {
  /** Optional. The description of the `BackupPlan` resource. The description allows for additional details about `BackupPlan` and its use cases to be provided. An example description is the following: "This is a backup plan that performs a daily backup at 6pm and retains data for 3 months". The description must be at most 2048 characters. */
  description?: string;
  /** Required. The resource type to which the `BackupPlan` will be applied. Examples include, "compute.googleapis.com/Instance", "sqladmin.googleapis.com/Instance", "alloydb.googleapis.com/Cluster", "compute.googleapis.com/Disk". */
  resourceType?: string;
  /** Optional. Applicable only for Cloud SQL resource_type. Configures how long logs will be stored. It is defined in “days”. This value should be greater than or equal to minimum enforced log retention duration of the backup vault. */
  logRetentionDays?: string;
  /** Output only. The `State` for the `BackupPlan`. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "ACTIVE"
    | "DELETING"
    | "INACTIVE"
    | "UPDATING"
    | (string & {});
  /** Output only. The resource id of the `BackupPlanRevision`. Format: `projects/{project}/locations/{location}/backupPlans/{backup_plan}/revisions/{revision_id}` */
  revisionName?: string;
  /** Output only. When the `BackupPlan` was last updated. */
  updateTime?: string;
  /** Required. Resource name of backup vault which will be used as storage location for backups. Format: projects/{project}/locations/{location}/backupVaults/{backupvault} */
  backupVault?: string;
  /** Output only. All resource types to which backupPlan can be applied. */
  supportedResourceTypes?: ReadonlyArray<string>;
  /** Optional. Optional field to configure the maximum number of days for which a backup can be retained. This field is only applicable for on-demand backups taken with custom retention value. */
  maxCustomOnDemandRetentionDays?: number;
  /** Optional. `etag` is returned from the service in the response. As a user of the service, you may provide an etag value in this field to prevent stale resources. */
  etag?: string;
  /** Output only. Identifier. The resource name of the `BackupPlan`. Format: `projects/{project}/locations/{location}/backupPlans/{backup_plan}` */
  name?: string;
  /** Output only. When the `BackupPlan` was created. */
  createTime?: string;
  /** Output only. The Google Cloud service account to be used by the BackupVault for taking backups. Specify the email address of the Backup Vault Service Account. */
  backupVaultServiceAccount?: string;
  /** Optional. The backup rules for this `BackupPlan`. */
  backupRules?: ReadonlyArray<BackupRule>;
  /** Optional. Defines optional properties specific to backups of disk-based resources, such as Compute Engine. This includes settings like whether to perform a guest flush. */
  computeInstanceBackupPlanProperties?: ComputeInstanceBackupPlanProperties;
  /** Output only. The user friendly revision ID of the `BackupPlanRevision`. Example: v0, v1, v2, etc. */
  revisionId?: string;
  /** Optional. This collection of key/value pairs allows for custom labels to be supplied by the user. Example, {"tag": "Weekly"}. */
  labels?: Record<string, string>;
  /** Optional. Defines optional properties specific to backups of disk-based resources, such as Compute Engine Persistent Disks. This includes settings like whether to perform a guest flush. */
  diskBackupPlanProperties?: DiskBackupPlanProperties;
}

export const BackupPlan: Schema.Schema<BackupPlan> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    resourceType: Schema.optional(Schema.String),
    logRetentionDays: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    revisionName: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    backupVault: Schema.optional(Schema.String),
    supportedResourceTypes: Schema.optional(Schema.Array(Schema.String)),
    maxCustomOnDemandRetentionDays: Schema.optional(Schema.Number),
    etag: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    backupVaultServiceAccount: Schema.optional(Schema.String),
    backupRules: Schema.optional(Schema.Array(BackupRule)),
    computeInstanceBackupPlanProperties: Schema.optional(
      ComputeInstanceBackupPlanProperties,
    ),
    revisionId: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    diskBackupPlanProperties: Schema.optional(DiskBackupPlanProperties),
  }).annotate({ identifier: "BackupPlan" });

export interface ListBackupPlansResponse {
  /** A token which may be sent as page_token in a subsequent `ListBackupPlans` call to retrieve the next page of results. If this field is omitted or empty, then there are no more results to return. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The list of `BackupPlans` in the project for the specified location. If the `{location}` value in the request is "-", the response contains a list of resources from all locations. In case any location is unreachable, the response will only return backup plans in reachable locations and the 'unreachable' field will be populated with a list of unreachable locations. BackupPlan */
  backupPlans?: ReadonlyArray<BackupPlan>;
}

export const ListBackupPlansResponse: Schema.Schema<ListBackupPlansResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    backupPlans: Schema.optional(Schema.Array(BackupPlan)),
  }).annotate({ identifier: "ListBackupPlansResponse" });

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

export interface NetworkConfig {
  /** Optional. The resource name of the Google Compute Engine VPC network to which the ManagementServer instance is connected. */
  network?: string;
  /** Optional. The network connect mode of the ManagementServer instance. For this version, only PRIVATE_SERVICE_ACCESS is supported. */
  peeringMode?:
    | "PEERING_MODE_UNSPECIFIED"
    | "PRIVATE_SERVICE_ACCESS"
    | (string & {});
}

export const NetworkConfig: Schema.Schema<NetworkConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    network: Schema.optional(Schema.String),
    peeringMode: Schema.optional(Schema.String),
  }).annotate({ identifier: "NetworkConfig" });

export interface ManagementURI {
  /** Output only. The ManagementServer AGM/RD WebUI URL. */
  webUi?: string;
  /** Output only. The ManagementServer AGM/RD API URL. */
  api?: string;
}

export const ManagementURI: Schema.Schema<ManagementURI> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webUi: Schema.optional(Schema.String),
    api: Schema.optional(Schema.String),
  }).annotate({ identifier: "ManagementURI" });

export interface WorkforceIdentityBasedOAuth2ClientID {
  /** Output only. Third party OAuth Client ID for External Identity Providers. */
  thirdPartyOauth2ClientId?: string;
  /** Output only. First party OAuth Client ID for Google Identities. */
  firstPartyOauth2ClientId?: string;
}

export const WorkforceIdentityBasedOAuth2ClientID: Schema.Schema<WorkforceIdentityBasedOAuth2ClientID> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    thirdPartyOauth2ClientId: Schema.optional(Schema.String),
    firstPartyOauth2ClientId: Schema.optional(Schema.String),
  }).annotate({ identifier: "WorkforceIdentityBasedOAuth2ClientID" });

export interface WorkforceIdentityBasedManagementURI {
  /** Output only. First party Management URI for Google Identities. */
  firstPartyManagementUri?: string;
  /** Output only. Third party Management URI for External Identity Providers. */
  thirdPartyManagementUri?: string;
}

export const WorkforceIdentityBasedManagementURI: Schema.Schema<WorkforceIdentityBasedManagementURI> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    firstPartyManagementUri: Schema.optional(Schema.String),
    thirdPartyManagementUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "WorkforceIdentityBasedManagementURI" });

export interface ManagementServer {
  /** Output only. Identifier. The resource name. */
  name?: string;
  /** Optional. VPC networks to which the ManagementServer instance is connected. For this version, only a single network is supported. This field is optional if MS is created without PSA */
  networks?: ReadonlyArray<NetworkConfig>;
  /** Output only. The time when the instance was created. */
  createTime?: string;
  /** Optional. Server specified ETag for the ManagementServer resource to prevent simultaneous updates from overwiting each other. */
  etag?: string;
  /** Output only. The time when the instance was updated. */
  updateTime?: string;
  /** Output only. The ManagementServer state. */
  state?:
    | "INSTANCE_STATE_UNSPECIFIED"
    | "CREATING"
    | "READY"
    | "UPDATING"
    | "DELETING"
    | "REPAIRING"
    | "MAINTENANCE"
    | "ERROR"
    | (string & {});
  /** Optional. The description of the ManagementServer instance (2048 characters or less). */
  description?: string;
  /** Optional. The type of the ManagementServer resource. */
  type?: "INSTANCE_TYPE_UNSPECIFIED" | "BACKUP_RESTORE" | (string & {});
  /** Output only. The hostname or ip address of the exposed AGM endpoints, used by clients to connect to AGM/RD graphical user interface and APIs. */
  managementUri?: ManagementURI;
  /** Optional. Resource labels to represent user provided metadata. Labels currently defined: 1. migrate_from_go= If set to true, the MS is created in migration ready mode. */
  labels?: Record<string, string>;
  /** Output only. The OAuth client IDs for both types of user i.e. 1p and 3p. */
  workforceIdentityBasedOauth2ClientId?: WorkforceIdentityBasedOAuth2ClientID;
  /** Output only. The hostname or ip address of the exposed AGM endpoints, used by BAs to connect to BA proxy. */
  baProxyUri?: ReadonlyArray<string>;
  /** Output only. The OAuth 2.0 client id is required to make API calls to the Backup and DR instance API of this ManagementServer. This is the value that should be provided in the 'aud' field of the OIDC ID Token (see openid specification https://openid.net/specs/openid-connect-core-1_0.html#IDToken). */
  oauth2ClientId?: string;
  /** Output only. Reserved for future use. */
  satisfiesPzs?: boolean;
  /** Output only. The hostnames of the exposed AGM endpoints for both types of user i.e. 1p and 3p, used to connect AGM/RM UI. */
  workforceIdentityBasedManagementUri?: WorkforceIdentityBasedManagementURI;
  /** Output only. Reserved for future use. */
  satisfiesPzi?: boolean;
}

export const ManagementServer: Schema.Schema<ManagementServer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    networks: Schema.optional(Schema.Array(NetworkConfig)),
    createTime: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    managementUri: Schema.optional(ManagementURI),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    workforceIdentityBasedOauth2ClientId: Schema.optional(
      WorkforceIdentityBasedOAuth2ClientID,
    ),
    baProxyUri: Schema.optional(Schema.Array(Schema.String)),
    oauth2ClientId: Schema.optional(Schema.String),
    satisfiesPzs: Schema.optional(Schema.Boolean),
    workforceIdentityBasedManagementUri: Schema.optional(
      WorkforceIdentityBasedManagementURI,
    ),
    satisfiesPzi: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ManagementServer" });

export interface ListManagementServersResponse {
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** The list of ManagementServer instances in the project for the specified location. If the '{location}' value in the request is "-", the response contains a list of instances from all locations. In case any location is unreachable, the response will only return management servers in reachable locations and the 'unreachable' field will be populated with a list of unreachable locations. */
  managementServers?: ReadonlyArray<ManagementServer>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListManagementServersResponse: Schema.Schema<ListManagementServersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    managementServers: Schema.optional(Schema.Array(ManagementServer)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListManagementServersResponse" });

export interface Location {
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
}

export const Location: Schema.Schema<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    locationId: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Location" });

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

export interface Expr {
  /** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
  title?: string;
  /** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
  description?: string;
  /** Textual representation of an expression in Common Expression Language syntax. */
  expression?: string;
  /** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
  location?: string;
}

export const Expr: Schema.Schema<Expr> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    expression: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
  }).annotate({ identifier: "Expr" });

export interface Binding {
  /** The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  condition?: Expr;
  /** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. For an overview of the IAM roles and permissions, see the [IAM documentation](https://cloud.google.com/iam/docs/roles-overview). For a list of the available pre-defined roles, see [here](https://cloud.google.com/iam/docs/understanding-roles). */
  role?: string;
  /** Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*`: All identities in a workload identity pool. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`. */
  members?: ReadonlyArray<string>;
}

export const Binding: Schema.Schema<Binding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    condition: Schema.optional(Expr),
    role: Schema.optional(Schema.String),
    members: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Binding" });

export interface Policy {
  /** Specifies cloud audit logging configuration for this policy. */
  auditConfigs?: ReadonlyArray<AuditConfig>;
  /** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
  etag?: string;
  /** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  version?: number;
  /** Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`. */
  bindings?: ReadonlyArray<Binding>;
}

export const Policy: Schema.Schema<Policy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    auditConfigs: Schema.optional(Schema.Array(AuditConfig)),
    etag: Schema.optional(Schema.String),
    version: Schema.optional(Schema.Number),
    bindings: Schema.optional(Schema.Array(Binding)),
  }).annotate({ identifier: "Policy" });

export interface TestIamPermissionsResponse {
  /** A subset of `TestPermissionsRequest.permissions` that the caller is allowed. */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsResponse: Schema.Schema<TestIamPermissionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsResponse" });

export interface InitiateBackupResponse {
  /** The name of the backup that was created. */
  backup?: string;
  /** The generation id of the base backup. It is needed for the incremental backups. */
  baseBackupGenerationId?: number;
  /** The generation id of the new backup. */
  newBackupGenerationId?: number;
}

export const InitiateBackupResponse: Schema.Schema<InitiateBackupResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    backup: Schema.optional(Schema.String),
    baseBackupGenerationId: Schema.optional(Schema.Number),
    newBackupGenerationId: Schema.optional(Schema.Number),
  }).annotate({ identifier: "InitiateBackupResponse" });

export interface DataSourceBackupConfigInfo {
  /** Output only. Timestamp of the last successful backup to this DataSource. */
  lastSuccessfulBackupConsistencyTime?: string;
  /** Output only. The status of the last backup in this DataSource */
  lastBackupState?:
    | "LAST_BACKUP_STATE_UNSPECIFIED"
    | "FIRST_BACKUP_PENDING"
    | "SUCCEEDED"
    | "FAILED"
    | "PERMISSION_DENIED"
    | (string & {});
}

export const DataSourceBackupConfigInfo: Schema.Schema<DataSourceBackupConfigInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastSuccessfulBackupConsistencyTime: Schema.optional(Schema.String),
    lastBackupState: Schema.optional(Schema.String),
  }).annotate({ identifier: "DataSourceBackupConfigInfo" });

export interface CancelOperationRequest {}

export const CancelOperationRequest: Schema.Schema<CancelOperationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelOperationRequest",
  });

export interface ListBackupVaultsResponse {
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** The list of BackupVault instances in the project for the specified location. If the '{location}' value in the request is "-", the response contains a list of instances from all locations. In case any location is unreachable, the response will only return backup vaults in reachable locations and the 'unreachable' field will be populated with a list of unreachable locations. */
  backupVaults?: ReadonlyArray<BackupVault>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListBackupVaultsResponse: Schema.Schema<ListBackupVaultsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    backupVaults: Schema.optional(Schema.Array(BackupVault)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListBackupVaultsResponse" });

export interface InitiateBackupRequest {
  /** Required. Resource ID of the Backup resource. */
  backupId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const InitiateBackupRequest: Schema.Schema<InitiateBackupRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    backupId: Schema.optional(Schema.String),
    requestId: Schema.optional(Schema.String),
  }).annotate({ identifier: "InitiateBackupRequest" });

export interface TriggerBackupRequest {
  /** Optional. The duration for which backup data will be kept, while taking an on-demand backup with custom retention. It is defined in "days". It is mutually exclusive with rule_id. This field is required if rule_id is not provided. */
  customRetentionDays?: number;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. backup rule_id for which a backup needs to be triggered. If not specified, on-demand backup with custom retention will be triggered. */
  ruleId?: string;
  /** Optional. Labels to be applied on the backup. */
  labels?: Record<string, string>;
}

export const TriggerBackupRequest: Schema.Schema<TriggerBackupRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customRetentionDays: Schema.optional(Schema.Number),
    requestId: Schema.optional(Schema.String),
    ruleId: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "TriggerBackupRequest" });

export interface DataSourceReference {
  /** Output only. Information of backup configuration on the DataSource. */
  dataSourceBackupConfigInfo?: DataSourceBackupConfigInfo;
  /** Output only. The resource name of the DataSource. Format: projects/{project}/locations/{location}/backupVaults/{backupVault}/dataSources/{dataSource} */
  dataSource?: string;
  /** Output only. The backup configuration state of the DataSource. */
  dataSourceBackupConfigState?:
    | "BACKUP_CONFIG_STATE_UNSPECIFIED"
    | "ACTIVE"
    | "PASSIVE"
    | (string & {});
  /** Output only. Number of backups in the DataSource. */
  dataSourceBackupCount?: string;
  /** Output only. Total size of the storage used by all backup resources for the referenced datasource. */
  totalStoredBytes?: string;
  /** Output only. The time when the DataSourceReference was created. */
  createTime?: string;
  /** Identifier. The resource name of the DataSourceReference. Format: projects/{project}/locations/{location}/dataSourceReferences/{data_source_reference} */
  name?: string;
  /** Output only. The Google Cloud resource that the DataSource is associated with. */
  dataSourceGcpResourceInfo?: DataSourceGcpResourceInfo;
}

export const DataSourceReference: Schema.Schema<DataSourceReference> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataSourceBackupConfigInfo: Schema.optional(DataSourceBackupConfigInfo),
    dataSource: Schema.optional(Schema.String),
    dataSourceBackupConfigState: Schema.optional(Schema.String),
    dataSourceBackupCount: Schema.optional(Schema.String),
    totalStoredBytes: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    dataSourceGcpResourceInfo: Schema.optional(DataSourceGcpResourceInfo),
  }).annotate({ identifier: "DataSourceReference" });

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

export interface CloudSqlInstanceInitializationConfig {
  /** Required. The edition of the Cloud SQL instance. */
  edition?:
    | "EDITION_UNSPECIFIED"
    | "ENTERPRISE"
    | "ENTERPRISE_PLUS"
    | (string & {});
}

export const CloudSqlInstanceInitializationConfig: Schema.Schema<CloudSqlInstanceInitializationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    edition: Schema.optional(Schema.String),
  }).annotate({ identifier: "CloudSqlInstanceInitializationConfig" });

export interface ListBackupsResponse {
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The list of Backup instances in the project for the specified location. If the '{location}' value in the request is "-", the response contains a list of instances from all locations. In case any location is unreachable, the response will only return data sources in reachable locations and the 'unreachable' field will be populated with a list of unreachable locations. */
  backups?: ReadonlyArray<Backup>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListBackupsResponse: Schema.Schema<ListBackupsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    backups: Schema.optional(Schema.Array(Backup)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListBackupsResponse" });

export interface FetchMsComplianceMetadataRequest {
  /** Required. The project id of the target project */
  projectId?: string;
}

export const FetchMsComplianceMetadataRequest: Schema.Schema<FetchMsComplianceMetadataRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.optional(Schema.String),
  }).annotate({ identifier: "FetchMsComplianceMetadataRequest" });

export interface FetchAccessTokenRequest {
  /** Required. The generation of the backup to update. */
  generationId?: number;
}

export const FetchAccessTokenRequest: Schema.Schema<FetchAccessTokenRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    generationId: Schema.optional(Schema.Number),
  }).annotate({ identifier: "FetchAccessTokenRequest" });

export interface DiskRestoreProperties {
  /** Optional. Indicates how many IOPS to provision for the disk. This sets the number of I/O operations per second that the disk can handle. */
  provisionedIops?: string;
  /** Optional. Resource manager tags to be bound to the disk. */
  resourceManagerTags?: Record<string, string>;
  /** Optional. A list of publicly available licenses that are applicable to this backup. This is applicable if the original image had licenses attached, e.g. Windows image */
  licenses?: ReadonlyArray<string>;
  /** Optional. Indicates whether this disk is using confidential compute mode. Encryption with a Cloud KMS key is required to enable this option. */
  enableConfidentialCompute?: boolean;
  /** Optional. The architecture of the source disk. Valid values are ARM64 or X86_64. */
  architecture?:
    | "ARCHITECTURE_UNSPECIFIED"
    | "X86_64"
    | "ARM64"
    | (string & {});
  /** Optional. Labels to apply to this disk. These can be modified later using setLabels method. Label values can be empty. */
  labels?: Record<string, string>;
  /** Optional. A list of features to enable in the guest operating system. This is applicable only for bootable images. */
  guestOsFeature?: ReadonlyArray<GuestOsFeature>;
  /** Required. URL of the disk type resource describing which disk type to use to create the disk. */
  type?: string;
  /** Optional. An optional description of this resource. Provide this property when you create the resource. */
  description?: string;
  /** Optional. Physical block size of the persistent disk, in bytes. If not present in a request, a default value is used. Currently, the supported size is 4096. */
  physicalBlockSizeBytes?: string;
  /** Optional. Resource policies applied to this disk. */
  resourcePolicy?: ReadonlyArray<string>;
  /** Required. The size of the disk in GB. */
  sizeGb?: string;
  /** Optional. The access mode of the disk. */
  accessMode?:
    | "READ_WRITE_SINGLE"
    | "READ_WRITE_MANY"
    | "READ_ONLY_MANY"
    | (string & {});
  /** Optional. Encrypts the disk using a customer-supplied encryption key or a customer-managed encryption key. */
  diskEncryptionKey?: CustomerEncryptionKey;
  /** Required. Name of the disk. */
  name?: string;
  /** Optional. Indicates how much throughput to provision for the disk. This sets the number of throughput MB per second that the disk can handle. */
  provisionedThroughput?: string;
  /** Optional. The storage pool in which the new disk is created. You can provide this as a partial or full URL to the resource. */
  storagePool?: string;
}

export const DiskRestoreProperties: Schema.Schema<DiskRestoreProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provisionedIops: Schema.optional(Schema.String),
    resourceManagerTags: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    licenses: Schema.optional(Schema.Array(Schema.String)),
    enableConfidentialCompute: Schema.optional(Schema.Boolean),
    architecture: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    guestOsFeature: Schema.optional(Schema.Array(GuestOsFeature)),
    type: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    physicalBlockSizeBytes: Schema.optional(Schema.String),
    resourcePolicy: Schema.optional(Schema.Array(Schema.String)),
    sizeGb: Schema.optional(Schema.String),
    accessMode: Schema.optional(Schema.String),
    diskEncryptionKey: Schema.optional(CustomerEncryptionKey),
    name: Schema.optional(Schema.String),
    provisionedThroughput: Schema.optional(Schema.String),
    storagePool: Schema.optional(Schema.String),
  }).annotate({ identifier: "DiskRestoreProperties" });

export interface BackupPlanRevision {
  /** Output only. The user friendly revision ID of the `BackupPlanRevision`. Example: v0, v1, v2, etc. */
  revisionId?: string;
  /** Output only. Resource State */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "ACTIVE"
    | "DELETING"
    | "INACTIVE"
    | (string & {});
  /** The Backup Plan being encompassed by this revision. */
  backupPlanSnapshot?: BackupPlan;
  /** Output only. The timestamp that the revision was created. */
  createTime?: string;
  /** Output only. Identifier. The resource name of the `BackupPlanRevision`. Format: `projects/{project}/locations/{location}/backupPlans/{backup_plan}/revisions/{revision}` */
  name?: string;
}

export const BackupPlanRevision: Schema.Schema<BackupPlanRevision> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    revisionId: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    backupPlanSnapshot: Schema.optional(BackupPlan),
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "BackupPlanRevision" });

export interface ListBackupPlanRevisionsResponse {
  /** The list of `BackupPlanRevisions` in the project for the specified location. If the `{location}` value in the request is "-", the response contains a list of resources from all locations. In case any location is unreachable, the response will only return backup plans in reachable locations and the 'unreachable' field will be populated with a list of unreachable locations. */
  backupPlanRevisions?: ReadonlyArray<BackupPlanRevision>;
  /** A token which may be sent as page_token in a subsequent `ListBackupPlanRevisions` call to retrieve the next page of results. If this field is omitted or empty, then there are no more results to return. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListBackupPlanRevisionsResponse: Schema.Schema<ListBackupPlanRevisionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    backupPlanRevisions: Schema.optional(Schema.Array(BackupPlanRevision)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListBackupPlanRevisionsResponse" });

export interface FetchMsComplianceMetadataResponse {
  /** The ms compliance metadata of the target project, if the project is an Assured Workloads project, values will be true, otherwise false. */
  isAssuredWorkload?: boolean;
}

export const FetchMsComplianceMetadataResponse: Schema.Schema<FetchMsComplianceMetadataResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isAssuredWorkload: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "FetchMsComplianceMetadataResponse" });

export interface FetchAccessTokenResponse {
  /** The location in bucket that can be used for reading. */
  readLocation?: string;
  /** The location in bucket that can be used for writing. */
  writeLocation?: string;
  /** The downscoped token that was created. */
  token?: string;
  /** The token is valid until this time. */
  expireTime?: string;
}

export const FetchAccessTokenResponse: Schema.Schema<FetchAccessTokenResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    readLocation: Schema.optional(Schema.String),
    writeLocation: Schema.optional(Schema.String),
    token: Schema.optional(Schema.String),
    expireTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "FetchAccessTokenResponse" });

export interface FinalizeBackupRequest {
  /** Required. Resource ID of the Backup resource to be finalized. This must be the same backup_id that was used in the InitiateBackupRequest. */
  backupId?: string;
  /** The ExpireTime on the backup will be set to FinalizeTime plus this duration. If the resulting ExpireTime is less than EnforcedRetentionEndTime, then ExpireTime is set to EnforcedRetentionEndTime. */
  retentionDuration?: string;
  /** The earliest timestamp of data available in this Backup. This will set on the newly created Backup. */
  recoveryRangeStartTime?: string;
  /** The point in time when this backup was captured from the source. This will be assigned to the consistency_time field of the newly created Backup. */
  consistencyTime?: string;
  /** The latest timestamp of data available in this Backup. This will be set on the newly created Backup. */
  recoveryRangeEndTime?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** This will be assigned to the description field of the newly created Backup. */
  description?: string;
}

export const FinalizeBackupRequest: Schema.Schema<FinalizeBackupRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    backupId: Schema.optional(Schema.String),
    retentionDuration: Schema.optional(Schema.String),
    recoveryRangeStartTime: Schema.optional(Schema.String),
    consistencyTime: Schema.optional(Schema.String),
    recoveryRangeEndTime: Schema.optional(Schema.String),
    requestId: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "FinalizeBackupRequest" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface RegionDiskTargetEnvironment {
  /** Required. Target project for the disk. */
  project?: string;
  /** Required. Target region for the disk. */
  region?: string;
  /** Required. Target URLs of the replica zones for the disk. */
  replicaZones?: ReadonlyArray<string>;
}

export const RegionDiskTargetEnvironment: Schema.Schema<RegionDiskTargetEnvironment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project: Schema.optional(Schema.String),
    region: Schema.optional(Schema.String),
    replicaZones: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "RegionDiskTargetEnvironment" });

export interface GcpResource {
  /** Name of the Google Cloud resource. */
  gcpResourcename?: string;
  /** Location of the resource: //"global"/"unspecified". */
  location?: string;
  /** Type of the resource. Use the Unified Resource Type, eg. compute.googleapis.com/Instance. */
  type?: string;
}

export const GcpResource: Schema.Schema<GcpResource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcpResourcename: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "GcpResource" });

export interface TargetResource {
  /** Details of the native Google Cloud resource created as part of restore. */
  gcpResource?: GcpResource;
}

export const TargetResource: Schema.Schema<TargetResource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcpResource: Schema.optional(GcpResource),
  }).annotate({ identifier: "TargetResource" });

export interface RestoreBackupResponse {
  /** Details of the target resource created/modified as part of restore. */
  targetResource?: TargetResource;
}

export const RestoreBackupResponse: Schema.Schema<RestoreBackupResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targetResource: Schema.optional(TargetResource),
  }).annotate({ identifier: "RestoreBackupResponse" });

export interface Operation {
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    error: Schema.optional(Status),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    done: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "Operation" });

export interface GoogleCloudBackupdrV1OperationMetadata {
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. AdditionalInfo contains additional Info related to backup plan association resource. */
  additionalInfo?: Record<string, string>;
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have google.longrunning.Operation.error value with a google.rpc.Status.code of 1, corresponding to 'Code.CANCELLED'. */
  requestedCancellation?: boolean;
}

export const GoogleCloudBackupdrV1OperationMetadata: Schema.Schema<GoogleCloudBackupdrV1OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    additionalInfo: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    statusMessage: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudBackupdrV1OperationMetadata" });

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

export interface FetchDataSourceReferencesForResourceTypeResponse {
  /** The DataSourceReferences from the specified parent. */
  dataSourceReferences?: ReadonlyArray<DataSourceReference>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const FetchDataSourceReferencesForResourceTypeResponse: Schema.Schema<FetchDataSourceReferencesForResourceTypeResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataSourceReferences: Schema.optional(Schema.Array(DataSourceReference)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "FetchDataSourceReferencesForResourceTypeResponse",
  });

export interface ListBackupPlanAssociationsResponse {
  /** The list of Backup Plan Associations in the project for the specified location. If the `{location}` value in the request is "-", the response contains a list of instances from all locations. In case any location is unreachable, the response will only return backup plan associations in reachable locations and the 'unreachable' field will be populated with a list of unreachable locations. */
  backupPlanAssociations?: ReadonlyArray<BackupPlanAssociation>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListBackupPlanAssociationsResponse: Schema.Schema<ListBackupPlanAssociationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    backupPlanAssociations: Schema.optional(
      Schema.Array(BackupPlanAssociation),
    ),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListBackupPlanAssociationsResponse" });

export interface DiskTargetEnvironment {
  /** Required. Target project for the disk. */
  project?: string;
  /** Required. Target zone for the disk. */
  zone?: string;
}

export const DiskTargetEnvironment: Schema.Schema<DiskTargetEnvironment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project: Schema.optional(Schema.String),
    zone: Schema.optional(Schema.String),
  }).annotate({ identifier: "DiskTargetEnvironment" });

export interface RestoreBackupRequest {
  /** Compute Engine instance properties to be overridden during restore. */
  computeInstanceRestoreProperties?: ComputeInstanceRestoreProperties;
  /** Optional. A field mask used to clear server-side default values for fields within the `instance_properties` oneof. When a field in this mask is cleared, the server will not apply its default logic (like inheriting a value from the source) for that field. The most common current use case is clearing default encryption keys. Examples of field mask paths: - Compute Instance Disks: `compute_instance_restore_properties.disks.*.disk_encryption_key` - Single Disk: `disk_restore_properties.disk_encryption_key` */
  clearOverridesFieldMask?: string;
  /** Disk properties to be overridden during restore. */
  diskRestoreProperties?: DiskRestoreProperties;
  /** Compute Engine target environment to be used during restore. */
  computeInstanceTargetEnvironment?: ComputeInstanceTargetEnvironment;
  /** Region disk target environment to be used during restore. */
  regionDiskTargetEnvironment?: RegionDiskTargetEnvironment;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Disk target environment to be used during restore. */
  diskTargetEnvironment?: DiskTargetEnvironment;
}

export const RestoreBackupRequest: Schema.Schema<RestoreBackupRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    computeInstanceRestoreProperties: Schema.optional(
      ComputeInstanceRestoreProperties,
    ),
    clearOverridesFieldMask: Schema.optional(Schema.String),
    diskRestoreProperties: Schema.optional(DiskRestoreProperties),
    computeInstanceTargetEnvironment: Schema.optional(
      ComputeInstanceTargetEnvironment,
    ),
    regionDiskTargetEnvironment: Schema.optional(RegionDiskTargetEnvironment),
    requestId: Schema.optional(Schema.String),
    diskTargetEnvironment: Schema.optional(DiskTargetEnvironment),
  }).annotate({ identifier: "RestoreBackupRequest" });

export interface LocationMetadata {
  /** List of features that are not supported in the location. */
  unsupportedFeatures?: ReadonlyArray<
    | "FEATURE_UNSPECIFIED"
    | "MANAGEMENT_SERVER"
    | "COMPUTE_INSTANCE"
    | "PROTECTION_SUMMARY"
    | "DISK"
    | "CLOUD_SQL"
    | "ALLOY_DB"
    | "FILESTORE"
    | "BV_AF"
    | "CEP_MONITORING_COMPUTE_INSTANCE"
    | "CEP_MONITORING_DISK"
    | "BV_CUSTOM_PROBERS"
    | "FT_CUSTOM_PROBERS"
    | (string & {})
  >;
}

export const LocationMetadata: Schema.Schema<LocationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unsupportedFeatures: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "LocationMetadata" });

export interface ListDataSourceReferencesResponse {
  /** The DataSourceReferences from the specified parent. */
  dataSourceReferences?: ReadonlyArray<DataSourceReference>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListDataSourceReferencesResponse: Schema.Schema<ListDataSourceReferencesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataSourceReferences: Schema.optional(Schema.Array(DataSourceReference)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListDataSourceReferencesResponse" });

export interface InitializeServiceRequest {
  /** Required. The resource type to which the default service config will be applied. Examples include, "compute.googleapis.com/Instance" and "storage.googleapis.com/Bucket". */
  resourceType?: string;
  /** Optional. If set, validates the request and returns the result, but does not actually run it. */
  validateOnly?: boolean;
  /** Optional. The location where the BackupPlan will be created. This field is required for multi-region BackupVaults and is optional for regional BackupVaults. It is useful when creating a Backup Vault in a multi-region, allowing the BackupPlan to reside in a specific region within that multi-region. If this field is not provided, the BackupPlan will be created in the same location as specified in the `name` field. */
  backupPlanLocation?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. The configuration for initializing a Cloud SQL instance. */
  cloudSqlInstanceInitializationConfig?: CloudSqlInstanceInitializationConfig;
}

export const InitializeServiceRequest: Schema.Schema<InitializeServiceRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceType: Schema.optional(Schema.String),
    validateOnly: Schema.optional(Schema.Boolean),
    backupPlanLocation: Schema.optional(Schema.String),
    requestId: Schema.optional(Schema.String),
    cloudSqlInstanceInitializationConfig: Schema.optional(
      CloudSqlInstanceInitializationConfig,
    ),
  }).annotate({ identifier: "InitializeServiceRequest" });

export interface Trial {
  /** Output only. The reason for ending the trial. */
  endReason?:
    | "END_REASON_UNSPECIFIED"
    | "MOVE_TO_PAID"
    | "DISCONTINUED"
    | (string & {});
  /** Identifier. The resource name of the trial. Format: projects/{project}/locations/{location}/trial */
  name?: string;
  /** Output only. The time when the trial will expire. */
  endTime?: string;
  /** Output only. The state of the trial. */
  state?:
    | "STATE_UNSPECIFIED"
    | "SUBSCRIBED"
    | "UNSUBSCRIBED"
    | "EXPIRED"
    | "ELIGIBLE"
    | "NOT_ELIGIBLE"
    | (string & {});
  /** Output only. The time when the trial was subscribed. */
  startTime?: string;
}

export const Trial: Schema.Schema<Trial> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endReason: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Trial" });

export interface SetInternalStatusRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The value required for this method to work. This field must be the 32-byte SHA256 hash of the DataSourceID. The DataSourceID used here is only the final piece of the fully qualified resource path for this DataSource (i.e. the part after '.../dataSources/'). This field exists to make this method difficult to call since it is intended for use only by Backup Appliances. */
  value?: string;
  /** Required. Output only. The new BackupConfigState to set for the DataSource. */
  backupConfigState?:
    | "BACKUP_CONFIG_STATE_UNSPECIFIED"
    | "ACTIVE"
    | "PASSIVE"
    | (string & {});
}

export const SetInternalStatusRequest: Schema.Schema<SetInternalStatusRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
    backupConfigState: Schema.optional(Schema.String),
  }).annotate({ identifier: "SetInternalStatusRequest" });

export interface SubscribeTrialRequest {}

export const SubscribeTrialRequest: Schema.Schema<SubscribeTrialRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "SubscribeTrialRequest",
  });

export interface ListResourceBackupConfigsResponse {
  /** The list of ResourceBackupConfigs for the specified scope. */
  resourceBackupConfigs?: ReadonlyArray<ResourceBackupConfig>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListResourceBackupConfigsResponse: Schema.Schema<ListResourceBackupConfigsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceBackupConfigs: Schema.optional(Schema.Array(ResourceBackupConfig)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListResourceBackupConfigsResponse" });

export interface FetchResourceBackupConfigsResponse {
  /** The list of ResourceBackupConfigs for the specified scope. */
  resourceBackupConfigs?: ReadonlyArray<ResourceBackupConfig>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const FetchResourceBackupConfigsResponse: Schema.Schema<FetchResourceBackupConfigsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceBackupConfigs: Schema.optional(Schema.Array(ResourceBackupConfig)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "FetchResourceBackupConfigsResponse" });

export interface AbandonBackupRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const AbandonBackupRequest: Schema.Schema<AbandonBackupRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String),
  }).annotate({ identifier: "AbandonBackupRequest" });

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

export interface FetchOrganizationsLocationsResourceBackupConfigsRequest {
  /** Required. The project, folder or organization and location for which to retrieve resource backup configs. Format: 'projects/{project_id}/locations/{location}', 'folders/{folder_id}/locations/{location}', or 'organizations/{organization_id}/locations/{location}'. */
  parent: string;
  /** Optional. Filtering results. */
  filter?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will use 100 as default. Maximum value is 500 and values above 500 will be coerced to 500. */
  pageSize?: number;
  /** Optional. Hint for how to order the results. */
  orderBy?: string;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
}

export const FetchOrganizationsLocationsResourceBackupConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/resourceBackupConfigs:fetch" }),
    svc,
  ) as unknown as Schema.Schema<FetchOrganizationsLocationsResourceBackupConfigsRequest>;

export type FetchOrganizationsLocationsResourceBackupConfigsResponse =
  FetchResourceBackupConfigsResponse;
export const FetchOrganizationsLocationsResourceBackupConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ FetchResourceBackupConfigsResponse;

export type FetchOrganizationsLocationsResourceBackupConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Fetches ResourceBackupConfigs. */
export const fetchOrganizationsLocationsResourceBackupConfigs: API.PaginatedOperationMethod<
  FetchOrganizationsLocationsResourceBackupConfigsRequest,
  FetchOrganizationsLocationsResourceBackupConfigsResponse,
  FetchOrganizationsLocationsResourceBackupConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: FetchOrganizationsLocationsResourceBackupConfigsRequest,
  output: FetchOrganizationsLocationsResourceBackupConfigsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetTrialProjectsLocationsRequest {
  /** Required. The project for which trial details need to be retrieved. Format: projects/{project}/locations/{location} Supported Locations are - us, eu and asia. */
  name: string;
}

export const GetTrialProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetTrialProjectsLocationsRequest>;

export type GetTrialProjectsLocationsResponse = Trial;
export const GetTrialProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Trial;

export type GetTrialProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the Trial state for a given project */
export const getTrialProjectsLocations: API.OperationMethod<
  GetTrialProjectsLocationsRequest,
  GetTrialProjectsLocationsResponse,
  GetTrialProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetTrialProjectsLocationsRequest,
  output: GetTrialProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsRequest {
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
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

export interface CreateProjectsLocationsBackupPlansRequest {
  /** Required. The name of the `BackupPlan` to create. The name must be unique for the specified project and location.The name must start with a lowercase letter followed by up to 62 lowercase letters, numbers, or hyphens. Pattern, /a-z{,62}/. */
  backupPlanId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The `BackupPlan` project and location in the format `projects/{project}/locations/{location}`. In Google Cloud Backup and DR locations map to Google Cloud regions, for example **us-central1**. */
  parent: string;
  /** Request body */
  body?: BackupPlan;
}

export const CreateProjectsLocationsBackupPlansRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    backupPlanId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("backupPlanId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(BackupPlan).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/backupPlans", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsBackupPlansRequest>;

export type CreateProjectsLocationsBackupPlansResponse = Operation;
export const CreateProjectsLocationsBackupPlansResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsBackupPlansError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a BackupPlan */
export const createProjectsLocationsBackupPlans: API.OperationMethod<
  CreateProjectsLocationsBackupPlansRequest,
  CreateProjectsLocationsBackupPlansResponse,
  CreateProjectsLocationsBackupPlansError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsBackupPlansRequest,
  output: CreateProjectsLocationsBackupPlansResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsBackupPlansRequest {
  /** Required. The resource name of the `BackupPlan` to retrieve. Format: `projects/{project}/locations/{location}/backupPlans/{backup_plan}` */
  name: string;
}

export const GetProjectsLocationsBackupPlansRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsBackupPlansRequest>;

export type GetProjectsLocationsBackupPlansResponse = BackupPlan;
export const GetProjectsLocationsBackupPlansResponse =
  /*@__PURE__*/ /*#__PURE__*/ BackupPlan;

export type GetProjectsLocationsBackupPlansError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single BackupPlan. */
export const getProjectsLocationsBackupPlans: API.OperationMethod<
  GetProjectsLocationsBackupPlansRequest,
  GetProjectsLocationsBackupPlansResponse,
  GetProjectsLocationsBackupPlansError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsBackupPlansRequest,
  output: GetProjectsLocationsBackupPlansResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsBackupPlansRequest {
  /** Required. The project and location for which to retrieve `BackupPlans` information. Format: `projects/{project}/locations/{location}`. In Google Cloud Backup and DR, locations map to Google Cloud regions, for example **us-central1**. To retrieve backup plans for all locations, use "-" for the `{location}` value. */
  parent: string;
  /** Optional. Field match expression used to filter the results. */
  filter?: string;
  /** Optional. The maximum number of `BackupPlans` to return in a single response. If not specified, a default value will be chosen by the service. Note that the response may include a partial list and a caller should only rely on the response's next_page_token to determine if there are more instances left to be queried. */
  pageSize?: number;
  /** Optional. Field by which to sort the results. */
  orderBy?: string;
  /** Optional. The value of next_page_token received from a previous `ListBackupPlans` call. Provide this to retrieve the subsequent page in a multi-page list of results. When paginating, all other parameters provided to `ListBackupPlans` must match the call that provided the page token. */
  pageToken?: string;
}

export const ListProjectsLocationsBackupPlansRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/backupPlans" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsBackupPlansRequest>;

export type ListProjectsLocationsBackupPlansResponse = ListBackupPlansResponse;
export const ListProjectsLocationsBackupPlansResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListBackupPlansResponse;

export type ListProjectsLocationsBackupPlansError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists BackupPlans in a given project and location. */
export const listProjectsLocationsBackupPlans: API.PaginatedOperationMethod<
  ListProjectsLocationsBackupPlansRequest,
  ListProjectsLocationsBackupPlansResponse,
  ListProjectsLocationsBackupPlansError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsBackupPlansRequest,
  output: ListProjectsLocationsBackupPlansResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsBackupPlansRequest {
  /** Required. The resource name of the `BackupPlan` to delete. Format: `projects/{project}/locations/{location}/backupPlans/{backup_plan}` */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsBackupPlansRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsBackupPlansRequest>;

export type DeleteProjectsLocationsBackupPlansResponse = Operation;
export const DeleteProjectsLocationsBackupPlansResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsBackupPlansError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single BackupPlan. */
export const deleteProjectsLocationsBackupPlans: API.OperationMethod<
  DeleteProjectsLocationsBackupPlansRequest,
  DeleteProjectsLocationsBackupPlansResponse,
  DeleteProjectsLocationsBackupPlansError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsBackupPlansRequest,
  output: DeleteProjectsLocationsBackupPlansResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsBackupPlansRequest {
  /** Output only. Identifier. The resource name of the `BackupPlan`. Format: `projects/{project}/locations/{location}/backupPlans/{backup_plan}` */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The list of fields to update. Field mask is used to specify the fields to be overwritten in the BackupPlan resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then the request will fail. Currently, these fields are supported in update: description, schedules, retention period, adding and removing Backup Rules. */
  updateMask?: string;
  /** Request body */
  body?: BackupPlan;
}

export const PatchProjectsLocationsBackupPlansRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(BackupPlan).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsBackupPlansRequest>;

export type PatchProjectsLocationsBackupPlansResponse = Operation;
export const PatchProjectsLocationsBackupPlansResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsBackupPlansError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update a BackupPlan. */
export const patchProjectsLocationsBackupPlans: API.OperationMethod<
  PatchProjectsLocationsBackupPlansRequest,
  PatchProjectsLocationsBackupPlansResponse,
  PatchProjectsLocationsBackupPlansError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsBackupPlansRequest,
  output: PatchProjectsLocationsBackupPlansResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsBackupPlansRevisionsRequest {
  /** Required. The resource name of the `BackupPlanRevision` to retrieve. Format: `projects/{project}/locations/{location}/backupPlans/{backup_plan}/revisions/{revision}` */
  name: string;
}

export const GetProjectsLocationsBackupPlansRevisionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsBackupPlansRevisionsRequest>;

export type GetProjectsLocationsBackupPlansRevisionsResponse =
  BackupPlanRevision;
export const GetProjectsLocationsBackupPlansRevisionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ BackupPlanRevision;

export type GetProjectsLocationsBackupPlansRevisionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single BackupPlanRevision. */
export const getProjectsLocationsBackupPlansRevisions: API.OperationMethod<
  GetProjectsLocationsBackupPlansRevisionsRequest,
  GetProjectsLocationsBackupPlansRevisionsResponse,
  GetProjectsLocationsBackupPlansRevisionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsBackupPlansRevisionsRequest,
  output: GetProjectsLocationsBackupPlansRevisionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsBackupPlansRevisionsRequest {
  /** Optional. The maximum number of `BackupPlans` to return in a single response. If not specified, a default value will be chosen by the service. Note that the response may include a partial list and a caller should only rely on the response's next_page_token to determine if there are more instances left to be queried. */
  pageSize?: number;
  /** Optional. The value of next_page_token received from a previous `ListBackupPlans` call. Provide this to retrieve the subsequent page in a multi-page list of results. When paginating, all other parameters provided to `ListBackupPlans` must match the call that provided the page token. */
  pageToken?: string;
  /** Required. The project and location for which to retrieve `BackupPlanRevisions` information. Format: `projects/{project}/locations/{location}/backupPlans/{backup_plan}`. In Google Cloud Backup and DR, locations map to Google Cloud regions, for example **us-central1**. */
  parent: string;
}

export const ListProjectsLocationsBackupPlansRevisionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/revisions" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsBackupPlansRevisionsRequest>;

export type ListProjectsLocationsBackupPlansRevisionsResponse =
  ListBackupPlanRevisionsResponse;
export const ListProjectsLocationsBackupPlansRevisionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListBackupPlanRevisionsResponse;

export type ListProjectsLocationsBackupPlansRevisionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists BackupPlanRevisions in a given project and location. */
export const listProjectsLocationsBackupPlansRevisions: API.PaginatedOperationMethod<
  ListProjectsLocationsBackupPlansRevisionsRequest,
  ListProjectsLocationsBackupPlansRevisionsResponse,
  ListProjectsLocationsBackupPlansRevisionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsBackupPlansRevisionsRequest,
  output: ListProjectsLocationsBackupPlansRevisionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface InitializeProjectsLocationsServiceConfigRequest {
  /** Required. The resource name of the serviceConfig used to initialize the service. The location must be the location of the BackupVault. Format: `projects/{project_id}/locations/{location}/serviceConfig`. */
  name: string;
  /** Request body */
  body?: InitializeServiceRequest;
}

export const InitializeProjectsLocationsServiceConfigRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(InitializeServiceRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:initialize", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<InitializeProjectsLocationsServiceConfigRequest>;

export type InitializeProjectsLocationsServiceConfigResponse = Operation;
export const InitializeProjectsLocationsServiceConfigResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type InitializeProjectsLocationsServiceConfigError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Initializes the service related config for a project. */
export const initializeProjectsLocationsServiceConfig: API.OperationMethod<
  InitializeProjectsLocationsServiceConfigRequest,
  InitializeProjectsLocationsServiceConfigResponse,
  InitializeProjectsLocationsServiceConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InitializeProjectsLocationsServiceConfigRequest,
  output: InitializeProjectsLocationsServiceConfigResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SubscribeProjectsLocationsTrialRequest {
  /** Required. The project where this trial will be created. Format: projects/{project}/locations/{location} Supported Locations are - us, eu and asia. */
  parent: string;
  /** Request body */
  body?: SubscribeTrialRequest;
}

export const SubscribeProjectsLocationsTrialRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(SubscribeTrialRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/trial:subscribe",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SubscribeProjectsLocationsTrialRequest>;

export type SubscribeProjectsLocationsTrialResponse = Trial;
export const SubscribeProjectsLocationsTrialResponse =
  /*@__PURE__*/ /*#__PURE__*/ Trial;

export type SubscribeProjectsLocationsTrialError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Subscribes to a trial for a project */
export const subscribeProjectsLocationsTrial: API.OperationMethod<
  SubscribeProjectsLocationsTrialRequest,
  SubscribeProjectsLocationsTrialResponse,
  SubscribeProjectsLocationsTrialError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SubscribeProjectsLocationsTrialRequest,
  output: SubscribeProjectsLocationsTrialResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface EndProjectsLocationsTrialRequest {
  /** Required. The parent resource where the trial has been created. Format: projects/{project}/locations/{location} */
  parent: string;
  /** Request body */
  body?: EndTrialRequest;
}

export const EndProjectsLocationsTrialRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(EndTrialRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/trial:end", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<EndProjectsLocationsTrialRequest>;

export type EndProjectsLocationsTrialResponse = Trial;
export const EndProjectsLocationsTrialResponse =
  /*@__PURE__*/ /*#__PURE__*/ Trial;

export type EndProjectsLocationsTrialError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Ends the trial for a project */
export const endProjectsLocationsTrial: API.OperationMethod<
  EndProjectsLocationsTrialRequest,
  EndProjectsLocationsTrialResponse,
  EndProjectsLocationsTrialError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: EndProjectsLocationsTrialRequest,
  output: EndProjectsLocationsTrialResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsOperationsRequest {
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list filter. */
  filter?: string;
  /** The standard list page size. */
  pageSize?: number;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The standard list page token. */
  pageToken?: string;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
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

export interface GetProjectsLocationsBackupPlanAssociationsRequest {
  /** Required. Name of the backup plan association resource, in the format `projects/{project}/locations/{location}/backupPlanAssociations/{backupPlanAssociationId}` */
  name: string;
}

export const GetProjectsLocationsBackupPlanAssociationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsBackupPlanAssociationsRequest>;

export type GetProjectsLocationsBackupPlanAssociationsResponse =
  BackupPlanAssociation;
export const GetProjectsLocationsBackupPlanAssociationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ BackupPlanAssociation;

export type GetProjectsLocationsBackupPlanAssociationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single BackupPlanAssociation. */
export const getProjectsLocationsBackupPlanAssociations: API.OperationMethod<
  GetProjectsLocationsBackupPlanAssociationsRequest,
  GetProjectsLocationsBackupPlanAssociationsResponse,
  GetProjectsLocationsBackupPlanAssociationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsBackupPlanAssociationsRequest,
  output: GetProjectsLocationsBackupPlanAssociationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsBackupPlanAssociationsRequest {
  /** Required. The project and location for which to retrieve backup Plan Associations information, in the format `projects/{project_id}/locations/{location}`. In Backup and DR, locations map to Google Cloud regions, for example **us-central1**. To retrieve backup plan associations for all locations, use "-" for the `{location}` value. */
  parent: string;
  /** Optional. Filtering results */
  filter?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
}

export const ListProjectsLocationsBackupPlanAssociationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/backupPlanAssociations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsBackupPlanAssociationsRequest>;

export type ListProjectsLocationsBackupPlanAssociationsResponse =
  ListBackupPlanAssociationsResponse;
export const ListProjectsLocationsBackupPlanAssociationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListBackupPlanAssociationsResponse;

export type ListProjectsLocationsBackupPlanAssociationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists BackupPlanAssociations in a given project and location. */
export const listProjectsLocationsBackupPlanAssociations: API.PaginatedOperationMethod<
  ListProjectsLocationsBackupPlanAssociationsRequest,
  ListProjectsLocationsBackupPlanAssociationsResponse,
  ListProjectsLocationsBackupPlanAssociationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsBackupPlanAssociationsRequest,
  output: ListProjectsLocationsBackupPlanAssociationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface TriggerBackupProjectsLocationsBackupPlanAssociationsRequest {
  /** Required. Name of the backup plan association resource, in the format `projects/{project}/locations/{location}/backupPlanAssociations/{backupPlanAssociationId}` */
  name: string;
  /** Request body */
  body?: TriggerBackupRequest;
}

export const TriggerBackupProjectsLocationsBackupPlanAssociationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(TriggerBackupRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:triggerBackup", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<TriggerBackupProjectsLocationsBackupPlanAssociationsRequest>;

export type TriggerBackupProjectsLocationsBackupPlanAssociationsResponse =
  Operation;
export const TriggerBackupProjectsLocationsBackupPlanAssociationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type TriggerBackupProjectsLocationsBackupPlanAssociationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Triggers a new Backup. */
export const triggerBackupProjectsLocationsBackupPlanAssociations: API.OperationMethod<
  TriggerBackupProjectsLocationsBackupPlanAssociationsRequest,
  TriggerBackupProjectsLocationsBackupPlanAssociationsResponse,
  TriggerBackupProjectsLocationsBackupPlanAssociationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TriggerBackupProjectsLocationsBackupPlanAssociationsRequest,
  output: TriggerBackupProjectsLocationsBackupPlanAssociationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsBackupPlanAssociationsRequest {
  /** Required. The backup plan association project and location in the format `projects/{project_id}/locations/{location}`. In Backup and DR locations map to Google Cloud regions, for example **us-central1**. */
  parent: string;
  /** Required. The name of the backup plan association to create. The name must be unique for the specified project and location. */
  backupPlanAssociationId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: BackupPlanAssociation;
}

export const CreateProjectsLocationsBackupPlanAssociationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    backupPlanAssociationId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("backupPlanAssociationId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(BackupPlanAssociation).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/backupPlanAssociations",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsBackupPlanAssociationsRequest>;

export type CreateProjectsLocationsBackupPlanAssociationsResponse = Operation;
export const CreateProjectsLocationsBackupPlanAssociationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsBackupPlanAssociationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a BackupPlanAssociation */
export const createProjectsLocationsBackupPlanAssociations: API.OperationMethod<
  CreateProjectsLocationsBackupPlanAssociationsRequest,
  CreateProjectsLocationsBackupPlanAssociationsResponse,
  CreateProjectsLocationsBackupPlanAssociationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsBackupPlanAssociationsRequest,
  output: CreateProjectsLocationsBackupPlanAssociationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsBackupPlanAssociationsRequest {
  /** Output only. Identifier. The resource name of BackupPlanAssociation in below format Format : projects/{project}/locations/{location}/backupPlanAssociations/{backupPlanAssociationId} */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The list of fields to update. Field mask is used to specify the fields to be overwritten in the BackupPlanAssociation resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then the request will fail. Currently backup_plan_association.backup_plan is the only supported field. */
  updateMask?: string;
  /** Request body */
  body?: BackupPlanAssociation;
}

export const PatchProjectsLocationsBackupPlanAssociationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(BackupPlanAssociation).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsBackupPlanAssociationsRequest>;

export type PatchProjectsLocationsBackupPlanAssociationsResponse = Operation;
export const PatchProjectsLocationsBackupPlanAssociationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsBackupPlanAssociationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update a BackupPlanAssociation. */
export const patchProjectsLocationsBackupPlanAssociations: API.OperationMethod<
  PatchProjectsLocationsBackupPlanAssociationsRequest,
  PatchProjectsLocationsBackupPlanAssociationsResponse,
  PatchProjectsLocationsBackupPlanAssociationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsBackupPlanAssociationsRequest,
  output: PatchProjectsLocationsBackupPlanAssociationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface FetchForResourceTypeProjectsLocationsBackupPlanAssociationsRequest {
  /** Optional. A page token, received from a previous call of `FetchBackupPlanAssociationsForResourceType`. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `FetchBackupPlanAssociationsForResourceType` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * name */
  orderBy?: string;
  /** Optional. The maximum number of BackupPlanAssociations to return. The service may return fewer than this value. If unspecified, at most 50 BackupPlanAssociations will be returned. The maximum value is 100; values above 100 will be coerced to 100. */
  pageSize?: number;
  /** Required. The parent resource name. Format: projects/{project}/locations/{location} */
  parent: string;
  /** Optional. A filter expression that filters the results fetched in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. Supported fields: * resource * backup_plan * state * data_source * cloud_sql_instance_backup_plan_association_properties.instance_create_time */
  filter?: string;
  /** Required. The type of the Google Cloud resource. Ex: sql.googleapis.com/Instance */
  resourceType?: string;
}

export const FetchForResourceTypeProjectsLocationsBackupPlanAssociationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    resourceType: Schema.optional(Schema.String).pipe(
      T.HttpQuery("resourceType"),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/{+parent}/backupPlanAssociations:fetchForResourceType",
    }),
    svc,
  ) as unknown as Schema.Schema<FetchForResourceTypeProjectsLocationsBackupPlanAssociationsRequest>;

export type FetchForResourceTypeProjectsLocationsBackupPlanAssociationsResponse =
  FetchBackupPlanAssociationsForResourceTypeResponse;
export const FetchForResourceTypeProjectsLocationsBackupPlanAssociationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ FetchBackupPlanAssociationsForResourceTypeResponse;

export type FetchForResourceTypeProjectsLocationsBackupPlanAssociationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List BackupPlanAssociations for a given resource type. */
export const fetchForResourceTypeProjectsLocationsBackupPlanAssociations: API.PaginatedOperationMethod<
  FetchForResourceTypeProjectsLocationsBackupPlanAssociationsRequest,
  FetchForResourceTypeProjectsLocationsBackupPlanAssociationsResponse,
  FetchForResourceTypeProjectsLocationsBackupPlanAssociationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: FetchForResourceTypeProjectsLocationsBackupPlanAssociationsRequest,
  output: FetchForResourceTypeProjectsLocationsBackupPlanAssociationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsBackupPlanAssociationsRequest {
  /** Required. Name of the backup plan association resource, in the format `projects/{project}/locations/{location}/backupPlanAssociations/{backupPlanAssociationId}` */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsBackupPlanAssociationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsBackupPlanAssociationsRequest>;

export type DeleteProjectsLocationsBackupPlanAssociationsResponse = Operation;
export const DeleteProjectsLocationsBackupPlanAssociationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsBackupPlanAssociationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single BackupPlanAssociation. */
export const deleteProjectsLocationsBackupPlanAssociations: API.OperationMethod<
  DeleteProjectsLocationsBackupPlanAssociationsRequest,
  DeleteProjectsLocationsBackupPlanAssociationsResponse,
  DeleteProjectsLocationsBackupPlanAssociationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsBackupPlanAssociationsRequest,
  output: DeleteProjectsLocationsBackupPlanAssociationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface FetchForResourceTypeProjectsLocationsDataSourceReferencesRequest {
  /** Optional. A page token, received from a previous call of `FetchDataSourceReferencesForResourceType`. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `FetchDataSourceReferencesForResourceType` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * name */
  orderBy?: string;
  /** Optional. The maximum number of DataSourceReferences to return. The service may return fewer than this value. If unspecified, at most 50 DataSourceReferences will be returned. The maximum value is 100; values above 100 will be coerced to 100. */
  pageSize?: number;
  /** Required. The type of the Google Cloud resource. Ex: sql.googleapis.com/Instance */
  resourceType?: string;
  /** Required. The parent resource name. Format: projects/{project}/locations/{location} */
  parent: string;
  /** Optional. A filter expression that filters the results fetched in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. Supported fields: * data_source * data_source_gcp_resource_info.gcp_resourcename * data_source_backup_config_state * data_source_backup_count * data_source_backup_config_info.last_backup_state * data_source_gcp_resource_info.gcp_resourcename * data_source_gcp_resource_info.type * data_source_gcp_resource_info.location * data_source_gcp_resource_info.cloud_sql_instance_properties.instance_create_time */
  filter?: string;
}

export const FetchForResourceTypeProjectsLocationsDataSourceReferencesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    resourceType: Schema.optional(Schema.String).pipe(
      T.HttpQuery("resourceType"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/{+parent}/dataSourceReferences:fetchForResourceType",
    }),
    svc,
  ) as unknown as Schema.Schema<FetchForResourceTypeProjectsLocationsDataSourceReferencesRequest>;

export type FetchForResourceTypeProjectsLocationsDataSourceReferencesResponse =
  FetchDataSourceReferencesForResourceTypeResponse;
export const FetchForResourceTypeProjectsLocationsDataSourceReferencesResponse =
  /*@__PURE__*/ /*#__PURE__*/ FetchDataSourceReferencesForResourceTypeResponse;

export type FetchForResourceTypeProjectsLocationsDataSourceReferencesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Fetch DataSourceReferences for a given project, location and resource type. */
export const fetchForResourceTypeProjectsLocationsDataSourceReferences: API.PaginatedOperationMethod<
  FetchForResourceTypeProjectsLocationsDataSourceReferencesRequest,
  FetchForResourceTypeProjectsLocationsDataSourceReferencesResponse,
  FetchForResourceTypeProjectsLocationsDataSourceReferencesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: FetchForResourceTypeProjectsLocationsDataSourceReferencesRequest,
  output: FetchForResourceTypeProjectsLocationsDataSourceReferencesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsDataSourceReferencesRequest {
  /** Required. The name of the DataSourceReference to retrieve. Format: projects/{project}/locations/{location}/dataSourceReferences/{data_source_reference} */
  name: string;
}

export const GetProjectsLocationsDataSourceReferencesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsDataSourceReferencesRequest>;

export type GetProjectsLocationsDataSourceReferencesResponse =
  DataSourceReference;
export const GetProjectsLocationsDataSourceReferencesResponse =
  /*@__PURE__*/ /*#__PURE__*/ DataSourceReference;

export type GetProjectsLocationsDataSourceReferencesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single DataSourceReference. */
export const getProjectsLocationsDataSourceReferences: API.OperationMethod<
  GetProjectsLocationsDataSourceReferencesRequest,
  GetProjectsLocationsDataSourceReferencesResponse,
  GetProjectsLocationsDataSourceReferencesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsDataSourceReferencesRequest,
  output: GetProjectsLocationsDataSourceReferencesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsDataSourceReferencesRequest {
  /** Optional. A page token, received from a previous `ListDataSourceReferences` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDataSourceReferences` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * data_source * data_source_gcp_resource_info.gcp_resourcename */
  orderBy?: string;
  /** Optional. The maximum number of DataSourceReferences to return. The service may return fewer than this value. If unspecified, at most 50 DataSourceReferences will be returned. The maximum value is 100; values above 100 will be coerced to 100. */
  pageSize?: number;
  /** Required. The parent resource name. Format: projects/{project}/locations/{location} */
  parent: string;
  /** Optional. A filter expression that filters the results listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The following field and operator combinations are supported: * data_source_gcp_resource_info.gcp_resourcename with `=`, `!=` * data_source_gcp_resource_info.type with `=`, `!=` */
  filter?: string;
}

export const ListProjectsLocationsDataSourceReferencesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/dataSourceReferences" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsDataSourceReferencesRequest>;

export type ListProjectsLocationsDataSourceReferencesResponse =
  ListDataSourceReferencesResponse;
export const ListProjectsLocationsDataSourceReferencesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListDataSourceReferencesResponse;

export type ListProjectsLocationsDataSourceReferencesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists DataSourceReferences for a given project and location. */
export const listProjectsLocationsDataSourceReferences: API.PaginatedOperationMethod<
  ListProjectsLocationsDataSourceReferencesRequest,
  ListProjectsLocationsDataSourceReferencesResponse,
  ListProjectsLocationsDataSourceReferencesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsDataSourceReferencesRequest,
  output: ListProjectsLocationsDataSourceReferencesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface FetchProjectsLocationsResourceBackupConfigsRequest {
  /** Required. The project, folder or organization and location for which to retrieve resource backup configs. Format: 'projects/{project_id}/locations/{location}', 'folders/{folder_id}/locations/{location}', or 'organizations/{organization_id}/locations/{location}'. */
  parent: string;
  /** Optional. Filtering results. */
  filter?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will use 100 as default. Maximum value is 500 and values above 500 will be coerced to 500. */
  pageSize?: number;
  /** Optional. Hint for how to order the results. */
  orderBy?: string;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
}

export const FetchProjectsLocationsResourceBackupConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/resourceBackupConfigs:fetch" }),
    svc,
  ) as unknown as Schema.Schema<FetchProjectsLocationsResourceBackupConfigsRequest>;

export type FetchProjectsLocationsResourceBackupConfigsResponse =
  FetchResourceBackupConfigsResponse;
export const FetchProjectsLocationsResourceBackupConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ FetchResourceBackupConfigsResponse;

export type FetchProjectsLocationsResourceBackupConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Fetches ResourceBackupConfigs. */
export const fetchProjectsLocationsResourceBackupConfigs: API.PaginatedOperationMethod<
  FetchProjectsLocationsResourceBackupConfigsRequest,
  FetchProjectsLocationsResourceBackupConfigsResponse,
  FetchProjectsLocationsResourceBackupConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: FetchProjectsLocationsResourceBackupConfigsRequest,
  output: FetchProjectsLocationsResourceBackupConfigsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsResourceBackupConfigsRequest {
  /** Required. The project and location for which to retrieve resource backup configs. Format: 'projects/{project_id}/locations/{location}'. In Google Cloud Backup and DR, locations map to Google Cloud regions, for example **us-central1**. */
  parent: string;
  /** Optional. Filtering results. */
  filter?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will use 100 as default. Maximum value is 500 and values above 500 will be coerced to 500. */
  pageSize?: number;
  /** Optional. Hint for how to order the results. */
  orderBy?: string;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
}

export const ListProjectsLocationsResourceBackupConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/resourceBackupConfigs" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsResourceBackupConfigsRequest>;

export type ListProjectsLocationsResourceBackupConfigsResponse =
  ListResourceBackupConfigsResponse;
export const ListProjectsLocationsResourceBackupConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListResourceBackupConfigsResponse;

export type ListProjectsLocationsResourceBackupConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists ResourceBackupConfigs. */
export const listProjectsLocationsResourceBackupConfigs: API.PaginatedOperationMethod<
  ListProjectsLocationsResourceBackupConfigsRequest,
  ListProjectsLocationsResourceBackupConfigsResponse,
  ListProjectsLocationsResourceBackupConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsResourceBackupConfigsRequest,
  output: ListProjectsLocationsResourceBackupConfigsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsManagementServersRequest {
  /** Required. Name of the resource */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsManagementServersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsManagementServersRequest>;

export type DeleteProjectsLocationsManagementServersResponse = Operation;
export const DeleteProjectsLocationsManagementServersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsManagementServersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single ManagementServer. */
export const deleteProjectsLocationsManagementServers: API.OperationMethod<
  DeleteProjectsLocationsManagementServersRequest,
  DeleteProjectsLocationsManagementServersResponse,
  DeleteProjectsLocationsManagementServersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsManagementServersRequest,
  output: DeleteProjectsLocationsManagementServersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsLocationsManagementServersRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsManagementServersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsManagementServersRequest>;

export type GetIamPolicyProjectsLocationsManagementServersResponse = Policy;
export const GetIamPolicyProjectsLocationsManagementServersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsManagementServersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsManagementServers: API.OperationMethod<
  GetIamPolicyProjectsLocationsManagementServersRequest,
  GetIamPolicyProjectsLocationsManagementServersResponse,
  GetIamPolicyProjectsLocationsManagementServersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsManagementServersRequest,
  output: GetIamPolicyProjectsLocationsManagementServersResponse,
  errors: [NotFound, Forbidden],
}));

export interface TestIamPermissionsProjectsLocationsManagementServersRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsManagementServersRequest =
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
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsManagementServersRequest>;

export type TestIamPermissionsProjectsLocationsManagementServersResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsManagementServersResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsManagementServersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsManagementServers: API.OperationMethod<
  TestIamPermissionsProjectsLocationsManagementServersRequest,
  TestIamPermissionsProjectsLocationsManagementServersResponse,
  TestIamPermissionsProjectsLocationsManagementServersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsManagementServersRequest,
  output: TestIamPermissionsProjectsLocationsManagementServersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsManagementServersRequest {
  /** Required. The management server project and location in the format 'projects/{project_id}/locations/{location}'. In Cloud Backup and DR locations map to Google Cloud regions, for example **us-central1**. */
  parent: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The name of the management server to create. The name must be unique for the specified project and location. */
  managementServerId?: string;
  /** Request body */
  body?: ManagementServer;
}

export const CreateProjectsLocationsManagementServersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    managementServerId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("managementServerId"),
    ),
    body: Schema.optional(ManagementServer).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/managementServers",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsManagementServersRequest>;

export type CreateProjectsLocationsManagementServersResponse = Operation;
export const CreateProjectsLocationsManagementServersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsManagementServersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new ManagementServer in a given project and location. */
export const createProjectsLocationsManagementServers: API.OperationMethod<
  CreateProjectsLocationsManagementServersRequest,
  CreateProjectsLocationsManagementServersResponse,
  CreateProjectsLocationsManagementServersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsManagementServersRequest,
  output: CreateProjectsLocationsManagementServersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsManagementServersRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsManagementServersRequest =
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
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsManagementServersRequest>;

export type SetIamPolicyProjectsLocationsManagementServersResponse = Policy;
export const SetIamPolicyProjectsLocationsManagementServersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsManagementServersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsManagementServers: API.OperationMethod<
  SetIamPolicyProjectsLocationsManagementServersRequest,
  SetIamPolicyProjectsLocationsManagementServersResponse,
  SetIamPolicyProjectsLocationsManagementServersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsManagementServersRequest,
  output: SetIamPolicyProjectsLocationsManagementServersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsManagementServersRequest {
  /** Optional. Hint for how to order the results. */
  orderBy?: string;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Required. The project and location for which to retrieve management servers information, in the format 'projects/{project_id}/locations/{location}'. In Google Cloud Backup and DR, locations map to Google Cloud regions, for example **us-central1**. To retrieve management servers for all locations, use "-" for the '{location}' value. */
  parent: string;
  /** Optional. Filtering results. */
  filter?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
}

export const ListProjectsLocationsManagementServersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/managementServers" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsManagementServersRequest>;

export type ListProjectsLocationsManagementServersResponse =
  ListManagementServersResponse;
export const ListProjectsLocationsManagementServersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListManagementServersResponse;

export type ListProjectsLocationsManagementServersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists ManagementServers in a given project and location. */
export const listProjectsLocationsManagementServers: API.PaginatedOperationMethod<
  ListProjectsLocationsManagementServersRequest,
  ListProjectsLocationsManagementServersResponse,
  ListProjectsLocationsManagementServersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsManagementServersRequest,
  output: ListProjectsLocationsManagementServersResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsManagementServersRequest {
  /** Required. Name of the management server resource name, in the format 'projects/{project_id}/locations/{location}/managementServers/{resource_name}' */
  name: string;
}

export const GetProjectsLocationsManagementServersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsManagementServersRequest>;

export type GetProjectsLocationsManagementServersResponse = ManagementServer;
export const GetProjectsLocationsManagementServersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ManagementServer;

export type GetProjectsLocationsManagementServersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single ManagementServer. */
export const getProjectsLocationsManagementServers: API.OperationMethod<
  GetProjectsLocationsManagementServersRequest,
  GetProjectsLocationsManagementServersResponse,
  GetProjectsLocationsManagementServersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsManagementServersRequest,
  output: GetProjectsLocationsManagementServersResponse,
  errors: [NotFound, Forbidden],
}));

export interface MsComplianceMetadataProjectsLocationsManagementServersRequest {
  /** Required. The project and location to be used to check CSS metadata for target project information, in the format 'projects/{project_id}/locations/{location}'. In Google Cloud Backup and DR, locations map to Google Cloud regions, for example **us-central1**. */
  parent: string;
  /** Request body */
  body?: FetchMsComplianceMetadataRequest;
}

export const MsComplianceMetadataProjectsLocationsManagementServersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(FetchMsComplianceMetadataRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}:msComplianceMetadata",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<MsComplianceMetadataProjectsLocationsManagementServersRequest>;

export type MsComplianceMetadataProjectsLocationsManagementServersResponse =
  FetchMsComplianceMetadataResponse;
export const MsComplianceMetadataProjectsLocationsManagementServersResponse =
  /*@__PURE__*/ /*#__PURE__*/ FetchMsComplianceMetadataResponse;

export type MsComplianceMetadataProjectsLocationsManagementServersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns the Assured Workloads compliance metadata for a given project. */
export const msComplianceMetadataProjectsLocationsManagementServers: API.OperationMethod<
  MsComplianceMetadataProjectsLocationsManagementServersRequest,
  MsComplianceMetadataProjectsLocationsManagementServersResponse,
  MsComplianceMetadataProjectsLocationsManagementServersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: MsComplianceMetadataProjectsLocationsManagementServersRequest,
  output: MsComplianceMetadataProjectsLocationsManagementServersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsBackupVaultsRequest {
  /** Optional. If set to true, backupvault deletion will proceed even if there are backup plans referencing the backupvault. The default is 'false'. */
  ignoreBackupPlanReferences?: boolean;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. If set to true, any data source from this backup vault will also be deleted. */
  force?: boolean;
  /** The current etag of the backup vault. If an etag is provided and does not match the current etag of the connection, deletion will be blocked. */
  etag?: string;
  /** Required. Name of the resource. */
  name: string;
  /** Optional. Only validate the request, but do not perform mutations. The default is 'false'. */
  validateOnly?: boolean;
  /** Optional. If true and the BackupVault is not found, the request will succeed but no action will be taken. */
  allowMissing?: boolean;
}

export const DeleteProjectsLocationsBackupVaultsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ignoreBackupPlanReferences: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("ignoreBackupPlanReferences"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    name: Schema.String.pipe(T.HttpPath("name")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsBackupVaultsRequest>;

export type DeleteProjectsLocationsBackupVaultsResponse = Operation;
export const DeleteProjectsLocationsBackupVaultsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsBackupVaultsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a BackupVault. */
export const deleteProjectsLocationsBackupVaults: API.OperationMethod<
  DeleteProjectsLocationsBackupVaultsRequest,
  DeleteProjectsLocationsBackupVaultsResponse,
  DeleteProjectsLocationsBackupVaultsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsBackupVaultsRequest,
  output: DeleteProjectsLocationsBackupVaultsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsLocationsBackupVaultsRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsBackupVaultsRequest =
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
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsBackupVaultsRequest>;

export type TestIamPermissionsProjectsLocationsBackupVaultsResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsBackupVaultsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsBackupVaultsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns the caller's permissions on a BackupVault resource. A caller is not required to have Google IAM permission to make this request. */
export const testIamPermissionsProjectsLocationsBackupVaults: API.OperationMethod<
  TestIamPermissionsProjectsLocationsBackupVaultsRequest,
  TestIamPermissionsProjectsLocationsBackupVaultsResponse,
  TestIamPermissionsProjectsLocationsBackupVaultsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsBackupVaultsRequest,
  output: TestIamPermissionsProjectsLocationsBackupVaultsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsBackupVaultsRequest {
  /** Required. Field mask is used to specify the fields to be overwritten in the BackupVault resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then the request will fail. */
  updateMask?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. If set to true, will not check plan duration against backup vault enforcement duration. */
  force?: boolean;
  /** Output only. Identifier. Name of the backup vault to create. It must have the format`"projects/{project}/locations/{location}/backupVaults/{backupvault}"`. `{backupvault}` cannot be changed after creation. It must be between 3-63 characters long and must be unique within the project and location. */
  name: string;
  /** Optional. Only validate the request, but do not perform mutations. The default is 'false'. */
  validateOnly?: boolean;
  /** Optional. If set to true, we will force update access restriction even if some non compliant data sources are present. The default is 'false'. */
  forceUpdateAccessRestriction?: boolean;
  /** Request body */
  body?: BackupVault;
}

export const PatchProjectsLocationsBackupVaultsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    name: Schema.String.pipe(T.HttpPath("name")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    forceUpdateAccessRestriction: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("forceUpdateAccessRestriction"),
    ),
    body: Schema.optional(BackupVault).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsBackupVaultsRequest>;

export type PatchProjectsLocationsBackupVaultsResponse = Operation;
export const PatchProjectsLocationsBackupVaultsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsBackupVaultsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the settings of a BackupVault. */
export const patchProjectsLocationsBackupVaults: API.OperationMethod<
  PatchProjectsLocationsBackupVaultsRequest,
  PatchProjectsLocationsBackupVaultsResponse,
  PatchProjectsLocationsBackupVaultsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsBackupVaultsRequest,
  output: PatchProjectsLocationsBackupVaultsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsBackupVaultsRequest {
  /** Required. ID of the requesting object If auto-generating ID server-side, remove this field and backup_vault_id from the method_signature of Create RPC */
  backupVaultId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Value for parent. */
  parent: string;
  /** Optional. Only validate the request, but do not perform mutations. The default is 'false'. */
  validateOnly?: boolean;
  /** Request body */
  body?: BackupVault;
}

export const CreateProjectsLocationsBackupVaultsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    backupVaultId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("backupVaultId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(BackupVault).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/backupVaults",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsBackupVaultsRequest>;

export type CreateProjectsLocationsBackupVaultsResponse = Operation;
export const CreateProjectsLocationsBackupVaultsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsBackupVaultsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new BackupVault in a given project and location. */
export const createProjectsLocationsBackupVaults: API.OperationMethod<
  CreateProjectsLocationsBackupVaultsRequest,
  CreateProjectsLocationsBackupVaultsResponse,
  CreateProjectsLocationsBackupVaultsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsBackupVaultsRequest,
  output: CreateProjectsLocationsBackupVaultsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsBackupVaultsRequest {
  /** Optional. Hint for how to order the results. */
  orderBy?: string;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Required. The project and location for which to retrieve backupvault stores information, in the format 'projects/{project_id}/locations/{location}'. In Cloud Backup and DR, locations map to Google Cloud regions, for example **us-central1**. To retrieve backupvault stores for all locations, use "-" for the '{location}' value. */
  parent: string;
  /** Optional. Filtering results. */
  filter?: string;
  /** Optional. Reserved for future use to provide a BASIC & FULL view of Backup Vault. */
  view?:
    | "BACKUP_VAULT_VIEW_UNSPECIFIED"
    | "BACKUP_VAULT_VIEW_BASIC"
    | "BACKUP_VAULT_VIEW_FULL"
    | (string & {});
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
}

export const ListProjectsLocationsBackupVaultsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/backupVaults" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsBackupVaultsRequest>;

export type ListProjectsLocationsBackupVaultsResponse =
  ListBackupVaultsResponse;
export const ListProjectsLocationsBackupVaultsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListBackupVaultsResponse;

export type ListProjectsLocationsBackupVaultsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists BackupVaults in a given project and location. */
export const listProjectsLocationsBackupVaults: API.PaginatedOperationMethod<
  ListProjectsLocationsBackupVaultsRequest,
  ListProjectsLocationsBackupVaultsResponse,
  ListProjectsLocationsBackupVaultsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsBackupVaultsRequest,
  output: ListProjectsLocationsBackupVaultsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface FetchUsableProjectsLocationsBackupVaultsRequest {
  /** Optional. Hint for how to order the results. */
  orderBy?: string;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Required. The project and location for which to retrieve backupvault stores information, in the format 'projects/{project_id}/locations/{location}'. In Cloud Backup and DR, locations map to Google Cloud regions, for example **us-central1**. To retrieve backupvault stores for all locations, use "-" for the '{location}' value. */
  parent: string;
  /** Optional. Filtering results. */
  filter?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
}

export const FetchUsableProjectsLocationsBackupVaultsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/backupVaults:fetchUsable" }),
    svc,
  ) as unknown as Schema.Schema<FetchUsableProjectsLocationsBackupVaultsRequest>;

export type FetchUsableProjectsLocationsBackupVaultsResponse =
  FetchUsableBackupVaultsResponse;
export const FetchUsableProjectsLocationsBackupVaultsResponse =
  /*@__PURE__*/ /*#__PURE__*/ FetchUsableBackupVaultsResponse;

export type FetchUsableProjectsLocationsBackupVaultsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** FetchUsableBackupVaults lists usable BackupVaults in a given project and location. Usable BackupVault are the ones that user has backupdr.backupVaults.get permission. */
export const fetchUsableProjectsLocationsBackupVaults: API.PaginatedOperationMethod<
  FetchUsableProjectsLocationsBackupVaultsRequest,
  FetchUsableProjectsLocationsBackupVaultsResponse,
  FetchUsableProjectsLocationsBackupVaultsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: FetchUsableProjectsLocationsBackupVaultsRequest,
  output: FetchUsableProjectsLocationsBackupVaultsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsBackupVaultsRequest {
  /** Required. Name of the backupvault store resource name, in the format 'projects/{project_id}/locations/{location}/backupVaults/{resource_name}' */
  name: string;
  /** Optional. Reserved for future use to provide a BASIC & FULL view of Backup Vault */
  view?:
    | "BACKUP_VAULT_VIEW_UNSPECIFIED"
    | "BACKUP_VAULT_VIEW_BASIC"
    | "BACKUP_VAULT_VIEW_FULL"
    | (string & {});
}

export const GetProjectsLocationsBackupVaultsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsBackupVaultsRequest>;

export type GetProjectsLocationsBackupVaultsResponse = BackupVault;
export const GetProjectsLocationsBackupVaultsResponse =
  /*@__PURE__*/ /*#__PURE__*/ BackupVault;

export type GetProjectsLocationsBackupVaultsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a BackupVault. */
export const getProjectsLocationsBackupVaults: API.OperationMethod<
  GetProjectsLocationsBackupVaultsRequest,
  GetProjectsLocationsBackupVaultsResponse,
  GetProjectsLocationsBackupVaultsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsBackupVaultsRequest,
  output: GetProjectsLocationsBackupVaultsResponse,
  errors: [NotFound, Forbidden],
}));

export interface SetInternalStatusProjectsLocationsBackupVaultsDataSourcesRequest {
  /** Required. The resource name of the instance, in the format 'projects/* /locations/* /backupVaults/* /dataSources/'. */
  dataSource: string;
  /** Request body */
  body?: SetInternalStatusRequest;
}

export const SetInternalStatusProjectsLocationsBackupVaultsDataSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataSource: Schema.String.pipe(T.HttpPath("dataSource")),
    body: Schema.optional(SetInternalStatusRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+dataSource}:setInternalStatus",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetInternalStatusProjectsLocationsBackupVaultsDataSourcesRequest>;

export type SetInternalStatusProjectsLocationsBackupVaultsDataSourcesResponse =
  Operation;
export const SetInternalStatusProjectsLocationsBackupVaultsDataSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type SetInternalStatusProjectsLocationsBackupVaultsDataSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the internal status of a DataSource. */
export const setInternalStatusProjectsLocationsBackupVaultsDataSources: API.OperationMethod<
  SetInternalStatusProjectsLocationsBackupVaultsDataSourcesRequest,
  SetInternalStatusProjectsLocationsBackupVaultsDataSourcesResponse,
  SetInternalStatusProjectsLocationsBackupVaultsDataSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetInternalStatusProjectsLocationsBackupVaultsDataSourcesRequest,
  output: SetInternalStatusProjectsLocationsBackupVaultsDataSourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RemoveProjectsLocationsBackupVaultsDataSourcesRequest {
  /** Required. Name of the resource. */
  name: string;
  /** Request body */
  body?: RemoveDataSourceRequest;
}

export const RemoveProjectsLocationsBackupVaultsDataSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(RemoveDataSourceRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:remove", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<RemoveProjectsLocationsBackupVaultsDataSourcesRequest>;

export type RemoveProjectsLocationsBackupVaultsDataSourcesResponse = Operation;
export const RemoveProjectsLocationsBackupVaultsDataSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type RemoveProjectsLocationsBackupVaultsDataSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a DataSource. This is a custom method instead of a standard delete method because external clients will not delete DataSources except for BackupDR backup appliances. */
export const removeProjectsLocationsBackupVaultsDataSources: API.OperationMethod<
  RemoveProjectsLocationsBackupVaultsDataSourcesRequest,
  RemoveProjectsLocationsBackupVaultsDataSourcesResponse,
  RemoveProjectsLocationsBackupVaultsDataSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RemoveProjectsLocationsBackupVaultsDataSourcesRequest,
  output: RemoveProjectsLocationsBackupVaultsDataSourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface InitiateBackupProjectsLocationsBackupVaultsDataSourcesRequest {
  /** Required. The resource name of the instance, in the format 'projects/* /locations/* /backupVaults/* /dataSources/'. */
  dataSource: string;
  /** Request body */
  body?: InitiateBackupRequest;
}

export const InitiateBackupProjectsLocationsBackupVaultsDataSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataSource: Schema.String.pipe(T.HttpPath("dataSource")),
    body: Schema.optional(InitiateBackupRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+dataSource}:initiateBackup",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InitiateBackupProjectsLocationsBackupVaultsDataSourcesRequest>;

export type InitiateBackupProjectsLocationsBackupVaultsDataSourcesResponse =
  InitiateBackupResponse;
export const InitiateBackupProjectsLocationsBackupVaultsDataSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ InitiateBackupResponse;

export type InitiateBackupProjectsLocationsBackupVaultsDataSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Internal only. Initiates a backup. */
export const initiateBackupProjectsLocationsBackupVaultsDataSources: API.OperationMethod<
  InitiateBackupProjectsLocationsBackupVaultsDataSourcesRequest,
  InitiateBackupProjectsLocationsBackupVaultsDataSourcesResponse,
  InitiateBackupProjectsLocationsBackupVaultsDataSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InitiateBackupProjectsLocationsBackupVaultsDataSourcesRequest,
  output: InitiateBackupProjectsLocationsBackupVaultsDataSourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface FinalizeBackupProjectsLocationsBackupVaultsDataSourcesRequest {
  /** Required. The resource name of the instance, in the format 'projects/* /locations/* /backupVaults/* /dataSources/'. */
  dataSource: string;
  /** Request body */
  body?: FinalizeBackupRequest;
}

export const FinalizeBackupProjectsLocationsBackupVaultsDataSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataSource: Schema.String.pipe(T.HttpPath("dataSource")),
    body: Schema.optional(FinalizeBackupRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+dataSource}:finalizeBackup",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<FinalizeBackupProjectsLocationsBackupVaultsDataSourcesRequest>;

export type FinalizeBackupProjectsLocationsBackupVaultsDataSourcesResponse =
  Operation;
export const FinalizeBackupProjectsLocationsBackupVaultsDataSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type FinalizeBackupProjectsLocationsBackupVaultsDataSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Internal only. Finalize a backup that was started by a call to InitiateBackup. */
export const finalizeBackupProjectsLocationsBackupVaultsDataSources: API.OperationMethod<
  FinalizeBackupProjectsLocationsBackupVaultsDataSourcesRequest,
  FinalizeBackupProjectsLocationsBackupVaultsDataSourcesResponse,
  FinalizeBackupProjectsLocationsBackupVaultsDataSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: FinalizeBackupProjectsLocationsBackupVaultsDataSourcesRequest,
  output: FinalizeBackupProjectsLocationsBackupVaultsDataSourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsBackupVaultsDataSourcesRequest {
  /** Optional. Enable upsert. */
  allowMissing?: boolean;
  /** Output only. Identifier. Name of the datasource to create. It must have the format`"projects/{project}/locations/{location}/backupVaults/{backupvault}/dataSources/{datasource}"`. `{datasource}` cannot be changed after creation. It must be between 3-63 characters long and must be unique within the backup vault. */
  name: string;
  /** Required. Field mask is used to specify the fields to be overwritten in the DataSource resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then the request will fail. */
  updateMask?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: DataSource;
}

export const PatchProjectsLocationsBackupVaultsDataSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(DataSource).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsBackupVaultsDataSourcesRequest>;

export type PatchProjectsLocationsBackupVaultsDataSourcesResponse = Operation;
export const PatchProjectsLocationsBackupVaultsDataSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsBackupVaultsDataSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the settings of a DataSource. */
export const patchProjectsLocationsBackupVaultsDataSources: API.OperationMethod<
  PatchProjectsLocationsBackupVaultsDataSourcesRequest,
  PatchProjectsLocationsBackupVaultsDataSourcesResponse,
  PatchProjectsLocationsBackupVaultsDataSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsBackupVaultsDataSourcesRequest,
  output: PatchProjectsLocationsBackupVaultsDataSourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface FetchAccessTokenProjectsLocationsBackupVaultsDataSourcesRequest {
  /** Required. The resource name for the location for which static IPs should be returned. Must be in the format 'projects/* /locations/* /backupVaults/* /dataSources'. */
  name: string;
  /** Request body */
  body?: FetchAccessTokenRequest;
}

export const FetchAccessTokenProjectsLocationsBackupVaultsDataSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(FetchAccessTokenRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+name}:fetchAccessToken",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<FetchAccessTokenProjectsLocationsBackupVaultsDataSourcesRequest>;

export type FetchAccessTokenProjectsLocationsBackupVaultsDataSourcesResponse =
  FetchAccessTokenResponse;
export const FetchAccessTokenProjectsLocationsBackupVaultsDataSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ FetchAccessTokenResponse;

export type FetchAccessTokenProjectsLocationsBackupVaultsDataSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Internal only. Fetch access token for a given data source. */
export const fetchAccessTokenProjectsLocationsBackupVaultsDataSources: API.OperationMethod<
  FetchAccessTokenProjectsLocationsBackupVaultsDataSourcesRequest,
  FetchAccessTokenProjectsLocationsBackupVaultsDataSourcesResponse,
  FetchAccessTokenProjectsLocationsBackupVaultsDataSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: FetchAccessTokenProjectsLocationsBackupVaultsDataSourcesRequest,
  output: FetchAccessTokenProjectsLocationsBackupVaultsDataSourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsBackupVaultsDataSourcesRequest {
  /** Required. The project and location for which to retrieve data sources information, in the format 'projects/{project_id}/locations/{location}'. In Cloud Backup and DR, locations map to Google Cloud regions, for example **us-central1**. To retrieve data sources for all locations, use "-" for the '{location}' value. */
  parent: string;
  /** Optional. Filtering results. */
  filter?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. Hint for how to order the results. */
  orderBy?: string;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
}

export const ListProjectsLocationsBackupVaultsDataSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/dataSources" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsBackupVaultsDataSourcesRequest>;

export type ListProjectsLocationsBackupVaultsDataSourcesResponse =
  ListDataSourcesResponse;
export const ListProjectsLocationsBackupVaultsDataSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListDataSourcesResponse;

export type ListProjectsLocationsBackupVaultsDataSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists DataSources in a given project and location. */
export const listProjectsLocationsBackupVaultsDataSources: API.PaginatedOperationMethod<
  ListProjectsLocationsBackupVaultsDataSourcesRequest,
  ListProjectsLocationsBackupVaultsDataSourcesResponse,
  ListProjectsLocationsBackupVaultsDataSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsBackupVaultsDataSourcesRequest,
  output: ListProjectsLocationsBackupVaultsDataSourcesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsBackupVaultsDataSourcesRequest {
  /** Required. Name of the data source resource name, in the format 'projects/{project_id}/locations/{location}/backupVaults/{resource_name}/dataSource/{resource_name}' */
  name: string;
}

export const GetProjectsLocationsBackupVaultsDataSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsBackupVaultsDataSourcesRequest>;

export type GetProjectsLocationsBackupVaultsDataSourcesResponse = DataSource;
export const GetProjectsLocationsBackupVaultsDataSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ DataSource;

export type GetProjectsLocationsBackupVaultsDataSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a DataSource. */
export const getProjectsLocationsBackupVaultsDataSources: API.OperationMethod<
  GetProjectsLocationsBackupVaultsDataSourcesRequest,
  GetProjectsLocationsBackupVaultsDataSourcesResponse,
  GetProjectsLocationsBackupVaultsDataSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsBackupVaultsDataSourcesRequest,
  output: GetProjectsLocationsBackupVaultsDataSourcesResponse,
  errors: [NotFound, Forbidden],
}));

export interface AbandonBackupProjectsLocationsBackupVaultsDataSourcesRequest {
  /** Required. The resource name of the instance, in the format 'projects/* /locations/* /backupVaults/* /dataSources/'. */
  dataSource: string;
  /** Request body */
  body?: AbandonBackupRequest;
}

export const AbandonBackupProjectsLocationsBackupVaultsDataSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataSource: Schema.String.pipe(T.HttpPath("dataSource")),
    body: Schema.optional(AbandonBackupRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+dataSource}:abandonBackup",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AbandonBackupProjectsLocationsBackupVaultsDataSourcesRequest>;

export type AbandonBackupProjectsLocationsBackupVaultsDataSourcesResponse =
  Operation;
export const AbandonBackupProjectsLocationsBackupVaultsDataSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type AbandonBackupProjectsLocationsBackupVaultsDataSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Internal only. Abandons a backup. */
export const abandonBackupProjectsLocationsBackupVaultsDataSources: API.OperationMethod<
  AbandonBackupProjectsLocationsBackupVaultsDataSourcesRequest,
  AbandonBackupProjectsLocationsBackupVaultsDataSourcesResponse,
  AbandonBackupProjectsLocationsBackupVaultsDataSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AbandonBackupProjectsLocationsBackupVaultsDataSourcesRequest,
  output: AbandonBackupProjectsLocationsBackupVaultsDataSourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsBackupVaultsDataSourcesBackupsRequest {
  /** Required. The project and location for which to retrieve backup information, in the format 'projects/{project_id}/locations/{location}'. In Cloud Backup and DR, locations map to Google Cloud regions, for example **us-central1**. To retrieve data sources for all locations, use "-" for the '{location}' value. */
  parent: string;
  /** Optional. Filtering results. */
  filter?: string;
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. Reserved for future use to provide a BASIC & FULL view of Backup resource. */
  view?:
    | "BACKUP_VIEW_UNSPECIFIED"
    | "BACKUP_VIEW_BASIC"
    | "BACKUP_VIEW_FULL"
    | (string & {});
  /** Optional. Hint for how to order the results. */
  orderBy?: string;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
}

export const ListProjectsLocationsBackupVaultsDataSourcesBackupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/backups" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsBackupVaultsDataSourcesBackupsRequest>;

export type ListProjectsLocationsBackupVaultsDataSourcesBackupsResponse =
  ListBackupsResponse;
export const ListProjectsLocationsBackupVaultsDataSourcesBackupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListBackupsResponse;

export type ListProjectsLocationsBackupVaultsDataSourcesBackupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Backups in a given project and location. */
export const listProjectsLocationsBackupVaultsDataSourcesBackups: API.PaginatedOperationMethod<
  ListProjectsLocationsBackupVaultsDataSourcesBackupsRequest,
  ListProjectsLocationsBackupVaultsDataSourcesBackupsResponse,
  ListProjectsLocationsBackupVaultsDataSourcesBackupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsBackupVaultsDataSourcesBackupsRequest,
  output: ListProjectsLocationsBackupVaultsDataSourcesBackupsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsBackupVaultsDataSourcesBackupsRequest {
  /** Required. Name of the data source resource name, in the format 'projects/{project_id}/locations/{location}/backupVaults/{backupVault}/dataSources/{datasource}/backups/{backup}' */
  name: string;
  /** Optional. Reserved for future use to provide a BASIC & FULL view of Backup resource. */
  view?:
    | "BACKUP_VIEW_UNSPECIFIED"
    | "BACKUP_VIEW_BASIC"
    | "BACKUP_VIEW_FULL"
    | (string & {});
}

export const GetProjectsLocationsBackupVaultsDataSourcesBackupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsBackupVaultsDataSourcesBackupsRequest>;

export type GetProjectsLocationsBackupVaultsDataSourcesBackupsResponse = Backup;
export const GetProjectsLocationsBackupVaultsDataSourcesBackupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Backup;

export type GetProjectsLocationsBackupVaultsDataSourcesBackupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a Backup. */
export const getProjectsLocationsBackupVaultsDataSourcesBackups: API.OperationMethod<
  GetProjectsLocationsBackupVaultsDataSourcesBackupsRequest,
  GetProjectsLocationsBackupVaultsDataSourcesBackupsResponse,
  GetProjectsLocationsBackupVaultsDataSourcesBackupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsBackupVaultsDataSourcesBackupsRequest,
  output: GetProjectsLocationsBackupVaultsDataSourcesBackupsResponse,
  errors: [NotFound, Forbidden],
}));

export interface FetchForResourceTypeProjectsLocationsBackupVaultsDataSourcesBackupsRequest {
  /** Required. Datasources are the parent resource for the backups. Format: projects/{project}/locations/{location}/backupVaults/{backupVaultId}/dataSources/{datasourceId} */
  parent: string;
  /** Optional. A filter expression that filters the results fetched in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. Supported fields: * name * state * backup_type * create_time * expire_time * enforced_retention_end_time * gcp_backup_plan_info.backup_plan * cloud_sql_instance_backup_properties.instance_tier * cloud_sql_instance_backup_properties.database_installed_version */
  filter?: string;
  /** Required. The type of the Google Cloud resource. Ex: sqladmin.googleapis.com/Instance */
  resourceType?: string;
  /** Optional. The maximum number of Backups to return. The service may return fewer than this value. If unspecified, at most 50 Backups will be returned. The maximum value is 100; values above 100 will be coerced to 100. */
  pageSize?: number;
  /** Optional. This parameter is used to specify the view of the backup. If not specified, the default view is BASIC. */
  view?:
    | "BACKUP_VIEW_UNSPECIFIED"
    | "BACKUP_VIEW_BASIC"
    | "BACKUP_VIEW_FULL"
    | (string & {});
  /** Optional. A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * name */
  orderBy?: string;
  /** Optional. A page token, received from a previous call of `FetchBackupsForResourceType`. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `FetchBackupsForResourceType` must match the call that provided the page token. */
  pageToken?: string;
}

export const FetchForResourceTypeProjectsLocationsBackupVaultsDataSourcesBackupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    resourceType: Schema.optional(Schema.String).pipe(
      T.HttpQuery("resourceType"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/{+parent}/backups:fetchForResourceType",
    }),
    svc,
  ) as unknown as Schema.Schema<FetchForResourceTypeProjectsLocationsBackupVaultsDataSourcesBackupsRequest>;

export type FetchForResourceTypeProjectsLocationsBackupVaultsDataSourcesBackupsResponse =
  FetchBackupsForResourceTypeResponse;
export const FetchForResourceTypeProjectsLocationsBackupVaultsDataSourcesBackupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ FetchBackupsForResourceTypeResponse;

export type FetchForResourceTypeProjectsLocationsBackupVaultsDataSourcesBackupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Fetch Backups for a given resource type. */
export const fetchForResourceTypeProjectsLocationsBackupVaultsDataSourcesBackups: API.PaginatedOperationMethod<
  FetchForResourceTypeProjectsLocationsBackupVaultsDataSourcesBackupsRequest,
  FetchForResourceTypeProjectsLocationsBackupVaultsDataSourcesBackupsResponse,
  FetchForResourceTypeProjectsLocationsBackupVaultsDataSourcesBackupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input:
    FetchForResourceTypeProjectsLocationsBackupVaultsDataSourcesBackupsRequest,
  output:
    FetchForResourceTypeProjectsLocationsBackupVaultsDataSourcesBackupsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsBackupVaultsDataSourcesBackupsRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Field mask is used to specify the fields to be overwritten in the Backup resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then the request will fail. */
  updateMask?: string;
  /** Output only. Identifier. Name of the backup to create. It must have the format`"projects//locations//backupVaults//dataSources/{datasource}/backups/{backup}"`. `{backup}` cannot be changed after creation. It must be between 3-63 characters long and must be unique within the datasource. */
  name: string;
  /** Request body */
  body?: Backup;
}

export const PatchProjectsLocationsBackupVaultsDataSourcesBackupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Backup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsBackupVaultsDataSourcesBackupsRequest>;

export type PatchProjectsLocationsBackupVaultsDataSourcesBackupsResponse =
  Operation;
export const PatchProjectsLocationsBackupVaultsDataSourcesBackupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsBackupVaultsDataSourcesBackupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the settings of a Backup. */
export const patchProjectsLocationsBackupVaultsDataSourcesBackups: API.OperationMethod<
  PatchProjectsLocationsBackupVaultsDataSourcesBackupsRequest,
  PatchProjectsLocationsBackupVaultsDataSourcesBackupsResponse,
  PatchProjectsLocationsBackupVaultsDataSourcesBackupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsBackupVaultsDataSourcesBackupsRequest,
  output: PatchProjectsLocationsBackupVaultsDataSourcesBackupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RestoreProjectsLocationsBackupVaultsDataSourcesBackupsRequest {
  /** Required. The resource name of the Backup instance, in the format 'projects/* /locations/* /backupVaults/* /dataSources/* /backups/'. */
  name: string;
  /** Request body */
  body?: RestoreBackupRequest;
}

export const RestoreProjectsLocationsBackupVaultsDataSourcesBackupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(RestoreBackupRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:restore", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<RestoreProjectsLocationsBackupVaultsDataSourcesBackupsRequest>;

export type RestoreProjectsLocationsBackupVaultsDataSourcesBackupsResponse =
  Operation;
export const RestoreProjectsLocationsBackupVaultsDataSourcesBackupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type RestoreProjectsLocationsBackupVaultsDataSourcesBackupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Restore from a Backup */
export const restoreProjectsLocationsBackupVaultsDataSourcesBackups: API.OperationMethod<
  RestoreProjectsLocationsBackupVaultsDataSourcesBackupsRequest,
  RestoreProjectsLocationsBackupVaultsDataSourcesBackupsResponse,
  RestoreProjectsLocationsBackupVaultsDataSourcesBackupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RestoreProjectsLocationsBackupVaultsDataSourcesBackupsRequest,
  output: RestoreProjectsLocationsBackupVaultsDataSourcesBackupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsBackupVaultsDataSourcesBackupsRequest {
  /** Required. Name of the resource. */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsBackupVaultsDataSourcesBackupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsBackupVaultsDataSourcesBackupsRequest>;

export type DeleteProjectsLocationsBackupVaultsDataSourcesBackupsResponse =
  Operation;
export const DeleteProjectsLocationsBackupVaultsDataSourcesBackupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsBackupVaultsDataSourcesBackupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a Backup. */
export const deleteProjectsLocationsBackupVaultsDataSourcesBackups: API.OperationMethod<
  DeleteProjectsLocationsBackupVaultsDataSourcesBackupsRequest,
  DeleteProjectsLocationsBackupVaultsDataSourcesBackupsResponse,
  DeleteProjectsLocationsBackupVaultsDataSourcesBackupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsBackupVaultsDataSourcesBackupsRequest,
  output: DeleteProjectsLocationsBackupVaultsDataSourcesBackupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface FetchFoldersLocationsResourceBackupConfigsRequest {
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will use 100 as default. Maximum value is 500 and values above 500 will be coerced to 500. */
  pageSize?: number;
  /** Required. The project, folder or organization and location for which to retrieve resource backup configs. Format: 'projects/{project_id}/locations/{location}', 'folders/{folder_id}/locations/{location}', or 'organizations/{organization_id}/locations/{location}'. */
  parent: string;
  /** Optional. Filtering results. */
  filter?: string;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Optional. Hint for how to order the results. */
  orderBy?: string;
}

export const FetchFoldersLocationsResourceBackupConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/resourceBackupConfigs:fetch" }),
    svc,
  ) as unknown as Schema.Schema<FetchFoldersLocationsResourceBackupConfigsRequest>;

export type FetchFoldersLocationsResourceBackupConfigsResponse =
  FetchResourceBackupConfigsResponse;
export const FetchFoldersLocationsResourceBackupConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ FetchResourceBackupConfigsResponse;

export type FetchFoldersLocationsResourceBackupConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Fetches ResourceBackupConfigs. */
export const fetchFoldersLocationsResourceBackupConfigs: API.PaginatedOperationMethod<
  FetchFoldersLocationsResourceBackupConfigsRequest,
  FetchFoldersLocationsResourceBackupConfigsResponse,
  FetchFoldersLocationsResourceBackupConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: FetchFoldersLocationsResourceBackupConfigsRequest,
  output: FetchFoldersLocationsResourceBackupConfigsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));
