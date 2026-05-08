// ==========================================================================
// VM Migration API (vmmigration v1alpha1)
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
  name: "vmmigration",
  version: "v1alpha1",
  rootUrl: "https://vmmigration.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface ReplicatingStep {
  /** The source disks replication rate for the last 2 minutes in bytes per second. */
  lastTwoMinutesAverageBytesPerSecond?: string;
  /** Total bytes to be handled in the step. */
  totalBytes?: string;
  /** Replicated bytes in the step. */
  replicatedBytes?: string;
  /** The source disks replication rate for the last 30 minutes in bytes per second. */
  lastThirtyMinutesAverageBytesPerSecond?: string;
}

export const ReplicatingStep: Schema.Schema<ReplicatingStep> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastTwoMinutesAverageBytesPerSecond: Schema.optional(Schema.String),
    totalBytes: Schema.optional(Schema.String),
    replicatedBytes: Schema.optional(Schema.String),
    lastThirtyMinutesAverageBytesPerSecond: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReplicatingStep" });

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

export interface UpgradeStatus {
  /** Output only. Provides details on the state of the upgrade operation in case of an error. */
  error?: Status;
  /** The state of the upgradeAppliance operation. */
  state?:
    | "STATE_UNSPECIFIED"
    | "RUNNING"
    | "FAILED"
    | "SUCCEEDED"
    | (string & {});
  /** The version from which we upgraded. */
  previousVersion?: string;
  /** The version to upgrade to. */
  version?: string;
  /** The time the operation was started. */
  startTime?: string;
}

export const UpgradeStatus: Schema.Schema<UpgradeStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    error: Schema.optional(Status),
    state: Schema.optional(Schema.String),
    previousVersion: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "UpgradeStatus" });

export interface ApplianceVersion {
  /** Link to a page that contains the version release notes. */
  releaseNotesUri?: string;
  /** The appliance version. */
  version?: string;
  /** Determine whether it's critical to upgrade the appliance to this version. */
  critical?: boolean;
  /** A link for downloading the version. */
  uri?: string;
}

export const ApplianceVersion: Schema.Schema<ApplianceVersion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    releaseNotesUri: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    critical: Schema.optional(Schema.Boolean),
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "ApplianceVersion" });

export interface AvailableUpdates {
  /** The newest deployable version of the appliance. The current appliance can't be updated into this version, and the owner must manually deploy this OVA to a new appliance. */
  newDeployableAppliance?: ApplianceVersion;
  /** The latest version for in place update. The current appliance can be updated to this version using the API or m4c CLI. */
  inPlaceUpdate?: ApplianceVersion;
}

export const AvailableUpdates: Schema.Schema<AvailableUpdates> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    newDeployableAppliance: Schema.optional(ApplianceVersion),
    inPlaceUpdate: Schema.optional(ApplianceVersion),
  }).annotate({ identifier: "AvailableUpdates" });

export interface DatacenterConnector {
  /** Output only. Appliance last installed update bundle version. This is the version of the automatically updatable components on the appliance. */
  applianceSoftwareVersion?: string;
  /** Output only. The last time the connector was updated with an API call. */
  updateTime?: string;
  /** Output only. The connector's name. */
  name?: string;
  /** The version running in the DatacenterConnector. This is supplied by the OVA connector during the registration process and can not be modified. */
  version?: string;
  /** Output only. Provides details on the state of the Datacenter Connector in case of an error. */
  error?: Status;
  /** Output only. The time the connector was created (as an API call, not when it was actually installed). */
  createTime?: string;
  /** Output only. The status of the current / last upgradeAppliance operation. */
  upgradeStatus?: UpgradeStatus;
  /** Output only. The communication channel between the datacenter connector and Google Cloud. */
  bucket?: string;
  /** The service account to use in the connector when communicating with the cloud. */
  serviceAccount?: string;
  /** Output only. The available versions for updating this appliance. */
  availableVersions?: AvailableUpdates;
  /** Output only. State of the DatacenterConnector, as determined by the health checks. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PENDING"
    | "OFFLINE"
    | "FAILED"
    | "ACTIVE"
    | (string & {});
  /** Output only. Appliance OVA version. This is the OVA which is manually installed by the user and contains the infrastructure for the automatically updatable components on the appliance. */
  applianceInfrastructureVersion?: string;
  /** Immutable. A unique key for this connector. This key is internal to the OVA connector and is supplied with its creation during the registration process and can not be modified. */
  registrationId?: string;
  /** Output only. The time the state was last set. */
  stateTime?: string;
}

export const DatacenterConnector: Schema.Schema<DatacenterConnector> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applianceSoftwareVersion: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    error: Schema.optional(Status),
    createTime: Schema.optional(Schema.String),
    upgradeStatus: Schema.optional(UpgradeStatus),
    bucket: Schema.optional(Schema.String),
    serviceAccount: Schema.optional(Schema.String),
    availableVersions: Schema.optional(AvailableUpdates),
    state: Schema.optional(Schema.String),
    applianceInfrastructureVersion: Schema.optional(Schema.String),
    registrationId: Schema.optional(Schema.String),
    stateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "DatacenterConnector" });

export interface UpgradeApplianceRequest {
  /** A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const UpgradeApplianceRequest: Schema.Schema<UpgradeApplianceRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String),
  }).annotate({ identifier: "UpgradeApplianceRequest" });

export interface AwsDiskDetails {
  /** Output only. The ordinal number of the disk. */
  diskNumber?: number;
  /** Output only. Size in GB. */
  sizeGb?: string;
  /** Output only. AWS volume ID. */
  volumeId?: string;
}

export const AwsDiskDetails: Schema.Schema<AwsDiskDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    diskNumber: Schema.optional(Schema.Number),
    sizeGb: Schema.optional(Schema.String),
    volumeId: Schema.optional(Schema.String),
  }).annotate({ identifier: "AwsDiskDetails" });

export interface AdaptingOSStep {}

export const AdaptingOSStep: Schema.Schema<AdaptingOSStep> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AdaptingOSStep",
  });

export interface InstantiatingMigratedVMStep {}

export const InstantiatingMigratedVMStep: Schema.Schema<InstantiatingMigratedVMStep> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "InstantiatingMigratedVMStep",
  });

export interface PreparingVMDisksStep {}

export const PreparingVMDisksStep: Schema.Schema<PreparingVMDisksStep> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "PreparingVMDisksStep",
  });

export interface CloneStep {
  /** The time the step has ended. */
  endTime?: string;
  /** Adapting OS step. */
  adaptingOs?: AdaptingOSStep;
  /** The time the step has started. */
  startTime?: string;
  /** Instantiating migrated VM step. */
  instantiatingMigratedVm?: InstantiatingMigratedVMStep;
  /** Preparing VM disks step. */
  preparingVmDisks?: PreparingVMDisksStep;
}

export const CloneStep: Schema.Schema<CloneStep> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endTime: Schema.optional(Schema.String),
    adaptingOs: Schema.optional(AdaptingOSStep),
    startTime: Schema.optional(Schema.String),
    instantiatingMigratedVm: Schema.optional(InstantiatingMigratedVMStep),
    preparingVmDisks: Schema.optional(PreparingVMDisksStep),
  }).annotate({ identifier: "CloneStep" });

export interface CancelDiskMigrationJobRequest {}

export const CancelDiskMigrationJobRequest: Schema.Schema<CancelDiskMigrationJobRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelDiskMigrationJobRequest",
  });

export interface InitializingReplicationStep {}

export const InitializingReplicationStep: Schema.Schema<InitializingReplicationStep> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "InitializingReplicationStep",
  });

export interface PostProcessingStep {}

export const PostProcessingStep: Schema.Schema<PostProcessingStep> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "PostProcessingStep",
  });

export interface CycleStep {
  /** Initializing replication step. */
  initializingReplication?: InitializingReplicationStep;
  /** The time the cycle step has started. */
  startTime?: string;
  /** The time the cycle step has ended. */
  endTime?: string;
  /** Replicating step. */
  replicating?: ReplicatingStep;
  /** Post processing step. */
  postProcessing?: PostProcessingStep;
}

export const CycleStep: Schema.Schema<CycleStep> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    initializingReplication: Schema.optional(InitializingReplicationStep),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    replicating: Schema.optional(ReplicatingStep),
    postProcessing: Schema.optional(PostProcessingStep),
  }).annotate({ identifier: "CycleStep" });

export interface LocalizedMessage {
  /** The locale used following the specification defined at https://www.rfc-editor.org/rfc/bcp/bcp47.txt. Examples are: "en-US", "fr-CH", "es-MX" */
  locale?: string;
  /** The localized error message in the above locale. */
  message?: string;
}

export const LocalizedMessage: Schema.Schema<LocalizedMessage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locale: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "LocalizedMessage" });

export interface Link {
  /** Describes what the link offers. */
  description?: string;
  /** The URL of the link. */
  url?: string;
}

export const Link: Schema.Schema<Link> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
  }).annotate({ identifier: "Link" });

export interface MigrationWarning {
  /** The warning code. */
  code?: "WARNING_CODE_UNSPECIFIED" | "ADAPTATION_WARNING" | (string & {});
  /** Output only. Suggested action for solving the warning. */
  actionItem?: LocalizedMessage;
  /** The time the warning occurred. */
  warningTime?: string;
  /** Output only. The localized warning message. */
  warningMessage?: LocalizedMessage;
  /** Output only. URL(s) pointing to additional information on handling the current warning. */
  helpLinks?: ReadonlyArray<Link>;
}

export const MigrationWarning: Schema.Schema<MigrationWarning> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.String),
    actionItem: Schema.optional(LocalizedMessage),
    warningTime: Schema.optional(Schema.String),
    warningMessage: Schema.optional(LocalizedMessage),
    helpLinks: Schema.optional(Schema.Array(Link)),
  }).annotate({ identifier: "MigrationWarning" });

export interface ReplicationCycle {
  /** The accumulated duration the replication cycle was paused. */
  totalPauseDuration?: string;
  /** The time the replication cycle has ended. */
  endTime?: string;
  /** The identifier of the ReplicationCycle. */
  name?: string;
  /** The cycle's steps list representing its progress. */
  steps?: ReadonlyArray<CycleStep>;
  /** The current progress in percentage of this cycle. */
  progress?: number;
  /** The current progress in percentage of this cycle. Was replaced by 'steps' field, which breaks down the cycle progression more accurately. */
  progressPercent?: number;
  /** State of the ReplicationCycle. */
  state?:
    | "STATE_UNSPECIFIED"
    | "RUNNING"
    | "PAUSED"
    | "FAILED"
    | "SUCCEEDED"
    | (string & {});
  /** The cycle's ordinal number. */
  cycleNumber?: number;
  /** Output only. Provides details on the state of the cycle in case of an error. */
  error?: Status;
  /** The time the replication cycle has started. */
  startTime?: string;
  /** Output only. Warnings that occurred during the cycle. */
  warnings?: ReadonlyArray<MigrationWarning>;
}

export const ReplicationCycle: Schema.Schema<ReplicationCycle> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    totalPauseDuration: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    steps: Schema.optional(Schema.Array(CycleStep)),
    progress: Schema.optional(Schema.Number),
    progressPercent: Schema.optional(Schema.Number),
    state: Schema.optional(Schema.String),
    cycleNumber: Schema.optional(Schema.Number),
    error: Schema.optional(Status),
    startTime: Schema.optional(Schema.String),
    warnings: Schema.optional(Schema.Array(MigrationWarning)),
  }).annotate({ identifier: "ReplicationCycle" });

export interface ListReplicationCyclesResponse {
  /** Output only. Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** Output only. The list of replication cycles response. */
  replicationCycles?: ReadonlyArray<ReplicationCycle>;
}

export const ListReplicationCyclesResponse: Schema.Schema<ListReplicationCyclesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
    replicationCycles: Schema.optional(Schema.Array(ReplicationCycle)),
  }).annotate({ identifier: "ListReplicationCyclesResponse" });

export interface ListDatacenterConnectorsResponse {
  /** Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** Output only. The list of sources response. */
  datacenterConnectors?: ReadonlyArray<DatacenterConnector>;
  /** Output only. Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListDatacenterConnectorsResponse: Schema.Schema<ListDatacenterConnectorsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    datacenterConnectors: Schema.optional(Schema.Array(DatacenterConnector)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListDatacenterConnectorsResponse" });

export interface Encryption {
  /** Required. The name of the encryption key that is stored in Google Cloud KMS. */
  kmsKey?: string;
}

export const Encryption: Schema.Schema<Encryption> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kmsKey: Schema.optional(Schema.String),
  }).annotate({ identifier: "Encryption" });

export interface NetworkInterface {
  /** Optional. The networking tier used for optimizing connectivity between instances and systems on the internet. Applies only for external ephemeral IP addresses. If left empty, will default to PREMIUM. */
  networkTier?:
    | "COMPUTE_ENGINE_NETWORK_TIER_UNSPECIFIED"
    | "NETWORK_TIER_STANDARD"
    | "NETWORK_TIER_PREMIUM"
    | (string & {});
  /** Optional. The subnetwork to connect the NIC to. */
  subnetwork?: string;
  /** Optional. The internal IP to define in the NIC. The formats accepted are: `ephemeral` \ ipv4 address \ a named address resource full path. */
  internalIp?: string;
  /** Optional. The network to connect the NIC to. */
  network?: string;
  /** Optional. The external IP to define in the NIC. */
  externalIp?: string;
}

export const NetworkInterface: Schema.Schema<NetworkInterface> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    networkTier: Schema.optional(Schema.String),
    subnetwork: Schema.optional(Schema.String),
    internalIp: Schema.optional(Schema.String),
    network: Schema.optional(Schema.String),
    externalIp: Schema.optional(Schema.String),
  }).annotate({ identifier: "NetworkInterface" });

export interface SchedulingNodeAffinity {
  /** Corresponds to the label values of Node resource. */
  values?: ReadonlyArray<string>;
  /** The label key of Node resource to reference. */
  key?: string;
  /** The operator to use for the node resources specified in the `values` parameter. */
  operator?: "OPERATOR_UNSPECIFIED" | "IN" | "NOT_IN" | (string & {});
}

export const SchedulingNodeAffinity: Schema.Schema<SchedulingNodeAffinity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    values: Schema.optional(Schema.Array(Schema.String)),
    key: Schema.optional(Schema.String),
    operator: Schema.optional(Schema.String),
  }).annotate({ identifier: "SchedulingNodeAffinity" });

export interface ComputeScheduling {
  /** A set of node affinity and anti-affinity configurations for sole tenant nodes. */
  nodeAffinities?: ReadonlyArray<SchedulingNodeAffinity>;
  /** The minimum number of virtual CPUs this instance will consume when running on a sole-tenant node. Ignored if no node_affinites are configured. */
  minNodeCpus?: number;
  automaticRestart?: boolean;
  /** How the instance should behave when the host machine undergoes maintenance that may temporarily impact instance performance. */
  onHostMaintenance?:
    | "ON_HOST_MAINTENANCE_UNSPECIFIED"
    | "TERMINATE"
    | "MIGRATE"
    | (string & {});
  /** Whether the Instance should be automatically restarted whenever it is terminated by Compute Engine (not terminated by user). This configuration is identical to `automaticRestart` field in Compute Engine create instance under scheduling. It was changed to an enum (instead of a boolean) to match the default value in Compute Engine which is automatic restart. */
  restartType?:
    | "RESTART_TYPE_UNSPECIFIED"
    | "AUTOMATIC_RESTART"
    | "NO_AUTOMATIC_RESTART"
    | (string & {});
}

export const ComputeScheduling: Schema.Schema<ComputeScheduling> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodeAffinities: Schema.optional(Schema.Array(SchedulingNodeAffinity)),
    minNodeCpus: Schema.optional(Schema.Number),
    automaticRestart: Schema.optional(Schema.Boolean),
    onHostMaintenance: Schema.optional(Schema.String),
    restartType: Schema.optional(Schema.String),
  }).annotate({ identifier: "ComputeScheduling" });

export interface AdaptationModifier {
  /** Optional. The modifier name. */
  modifier?: string;
  /** Optional. The value of the modifier. The actual value depends on the modifier and can also be empty. */
  value?: string;
}

export const AdaptationModifier: Schema.Schema<AdaptationModifier> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    modifier: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "AdaptationModifier" });

export interface AppliedLicense {
  /** The license type that was used in OS adaptation. */
  type?: "TYPE_UNSPECIFIED" | "NONE" | "PAYG" | "BYOL" | (string & {});
  /** The OS license returned from the adaptation module's report. */
  osLicense?: string;
}

export const AppliedLicense: Schema.Schema<AppliedLicense> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    osLicense: Schema.optional(Schema.String),
  }).annotate({ identifier: "AppliedLicense" });

export interface ComputeEngineTargetDetails {
  /** The service account to associate the VM with. */
  serviceAccount?: string;
  /** The metadata key/value pairs to assign to the VM. */
  metadata?: Record<string, string>;
  /** Additional licenses to assign to the VM. */
  additionalLicenses?: ReadonlyArray<string>;
  /** The VM Boot Option, as set in the source VM. */
  bootOption?:
    | "COMPUTE_ENGINE_BOOT_OPTION_UNSPECIFIED"
    | "COMPUTE_ENGINE_BOOT_OPTION_EFI"
    | "COMPUTE_ENGINE_BOOT_OPTION_BIOS"
    | (string & {});
  /** The Google Cloud target project ID or project name. */
  project?: string;
  /** Defines whether the instance has Secure Boot enabled. This can be set to true only if the VM boot option is EFI. */
  secureBoot?: boolean;
  /** Optional. The encryption to apply to the VM disks. */
  encryption?: Encryption;
  /** List of NICs connected to this VM. */
  networkInterfaces?: ReadonlyArray<NetworkInterface>;
  /** The license type to use in OS adaptation. */
  licenseType?:
    | "COMPUTE_ENGINE_LICENSE_TYPE_DEFAULT"
    | "COMPUTE_ENGINE_LICENSE_TYPE_PAYG"
    | "COMPUTE_ENGINE_LICENSE_TYPE_BYOL"
    | (string & {});
  /** Optional. Defines whether the instance has integrity monitoring enabled. */
  enableIntegrityMonitoring?: boolean;
  /** Optional. Defines whether the instance has vTPM enabled. */
  enableVtpm?: boolean;
  /** Optional. The storage pool used for the VM disks. If specified this will be the storage pool in which the disk is created. This is the full path of the storage pool resource, for example: "projects/my-project/zones/us-central1-a/storagePools/my-storage-pool". The storage pool must be in the same project and zone as the target disks. The storage pool's type must match the disk type. */
  storagePool?: string;
  /** The machine type to create the VM with. */
  machineType?: string;
  /** Optional. By default the virtual machine will keep its existing boot option. Setting this property will trigger an internal process which will convert the virtual machine from using the existing boot option to another. */
  bootConversion?:
    | "BOOT_CONVERSION_UNSPECIFIED"
    | "NONE"
    | "BIOS_TO_EFI"
    | (string & {});
  /** The machine type series to create the VM with. */
  machineTypeSeries?: string;
  /** The name of the VM to create. */
  vmName?: string;
  /** The zone in which to create the VM. */
  zone?: string;
  /** A map of labels to associate with the VM. */
  labels?: Record<string, string>;
  /** Compute instance scheduling information (if empty default is used). */
  computeScheduling?: ComputeScheduling;
  /** Optional. Modifiers to be used as configuration of the OS adaptation process. */
  adaptationModifiers?: ReadonlyArray<AdaptationModifier>;
  /** A list of network tags to associate with the VM. */
  networkTags?: ReadonlyArray<string>;
  /** The OS license returned from the adaptation module report. */
  appliedLicense?: AppliedLicense;
  /** The hostname to assign to the VM. */
  hostname?: string;
  /** The disk type to use in the VM. */
  diskType?:
    | "COMPUTE_ENGINE_DISK_TYPE_UNSPECIFIED"
    | "COMPUTE_ENGINE_DISK_TYPE_STANDARD"
    | "COMPUTE_ENGINE_DISK_TYPE_SSD"
    | "COMPUTE_ENGINE_DISK_TYPE_BALANCED"
    | "COMPUTE_ENGINE_DISK_TYPE_HYPERDISK_BALANCED"
    | "COMPUTE_ENGINE_DISK_TYPE_HYPERDISK_BALANCED_HIGH_AVAILABILITY"
    | (string & {});
  /** Optional. Additional replica zones of the target regional disks. If this list is not empty a regional disk will be created. The first supported zone would be the one stated in the zone field. The rest are taken from this list. Please refer to the [regional disk creation API](https://cloud.google.com/compute/docs/regions-zones/global-regional-zonal-resources) for further details about regional vs zonal disks. If not specified, a zonal disk will be created in the same zone the VM is created. */
  diskReplicaZones?: ReadonlyArray<string>;
}

export const ComputeEngineTargetDetails: Schema.Schema<ComputeEngineTargetDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceAccount: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    additionalLicenses: Schema.optional(Schema.Array(Schema.String)),
    bootOption: Schema.optional(Schema.String),
    project: Schema.optional(Schema.String),
    secureBoot: Schema.optional(Schema.Boolean),
    encryption: Schema.optional(Encryption),
    networkInterfaces: Schema.optional(Schema.Array(NetworkInterface)),
    licenseType: Schema.optional(Schema.String),
    enableIntegrityMonitoring: Schema.optional(Schema.Boolean),
    enableVtpm: Schema.optional(Schema.Boolean),
    storagePool: Schema.optional(Schema.String),
    machineType: Schema.optional(Schema.String),
    bootConversion: Schema.optional(Schema.String),
    machineTypeSeries: Schema.optional(Schema.String),
    vmName: Schema.optional(Schema.String),
    zone: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    computeScheduling: Schema.optional(ComputeScheduling),
    adaptationModifiers: Schema.optional(Schema.Array(AdaptationModifier)),
    networkTags: Schema.optional(Schema.Array(Schema.String)),
    appliedLicense: Schema.optional(AppliedLicense),
    hostname: Schema.optional(Schema.String),
    diskType: Schema.optional(Schema.String),
    diskReplicaZones: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ComputeEngineTargetDetails" });

export interface TargetVMDetails {
  /** The subnetwork to connect the VM to. */
  subnetwork?: string;
  /** A list of network tags to associate with the VM. */
  networkTags?: ReadonlyArray<string>;
  /** The name of the VM to create. */
  name?: string;
  /** The machine type to create the VM with. */
  machineType?: string;
  /** The disk type to use in the VM. */
  diskType?:
    | "DISK_TYPE_UNSPECIFIED"
    | "STANDARD"
    | "BALANCED"
    | "SSD"
    | "HYPERDISK_BALANCED"
    | "HYPERDISK_BALANCED_HIGH_AVAILABILITY"
    | (string & {});
  /** The full path of the resource of type TargetProject which represents the Compute Engine project in which to create this VM. */
  targetProject?: string;
  /** Output only. The OS license returned from the adaptation module report. */
  appliedLicense?: AppliedLicense;
  /** The internal IP to define in the VM. The formats accepted are: `ephemeral` \ ipv4 address \ a named address resource full path. */
  internalIp?: string;
  /** The metadata key/value pairs to assign to the VM. */
  metadata?: Record<string, string>;
  /** The zone in which to create the VM. */
  zone?: string;
  /** The machine type series to create the VM with. */
  machineTypeSeries?: string;
  /** The service account to associate the VM with. */
  serviceAccount?: string;
  /** List of NICs connected to this VM. */
  networkInterfaces?: ReadonlyArray<NetworkInterface>;
  /** The license type to use in OS adaptation. */
  licenseType?: "DEFAULT" | "PAYG" | "BYOL" | (string & {});
  /** A map of labels to associate with the VM. */
  labels?: Record<string, string>;
  /** Compute instance scheduling information (if empty default is used). */
  computeScheduling?: ComputeScheduling;
  /** Output only. The project in which to create the VM. */
  project?: string;
  /** Defines whether the instance has Secure Boot enabled. This can be set to true only if the vm boot option is EFI. */
  secureBoot?: boolean;
  /** Output only. The VM Boot Option, as set in the source VM. */
  bootOption?: "BOOT_OPTION_UNSPECIFIED" | "EFI" | "BIOS" | (string & {});
  /** The network to connect the VM to. */
  network?: string;
  /** The external IP to define in the VM. */
  externalIp?: string;
}

export const TargetVMDetails: Schema.Schema<TargetVMDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subnetwork: Schema.optional(Schema.String),
    networkTags: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
    machineType: Schema.optional(Schema.String),
    diskType: Schema.optional(Schema.String),
    targetProject: Schema.optional(Schema.String),
    appliedLicense: Schema.optional(AppliedLicense),
    internalIp: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    zone: Schema.optional(Schema.String),
    machineTypeSeries: Schema.optional(Schema.String),
    serviceAccount: Schema.optional(Schema.String),
    networkInterfaces: Schema.optional(Schema.Array(NetworkInterface)),
    licenseType: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    computeScheduling: Schema.optional(ComputeScheduling),
    project: Schema.optional(Schema.String),
    secureBoot: Schema.optional(Schema.Boolean),
    bootOption: Schema.optional(Schema.String),
    network: Schema.optional(Schema.String),
    externalIp: Schema.optional(Schema.String),
  }).annotate({ identifier: "TargetVMDetails" });

export interface DisksMigrationDisksTargetDetails {}

export const DisksMigrationDisksTargetDetails: Schema.Schema<DisksMigrationDisksTargetDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "DisksMigrationDisksTargetDetails",
  });

export interface PersistentDisk {
  /** The ordinal number of the source VM disk. */
  sourceDiskNumber?: number;
  /** The URI of the Persistent Disk. */
  diskUri?: string;
}

export const PersistentDisk: Schema.Schema<PersistentDisk> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceDiskNumber: Schema.optional(Schema.Number),
    diskUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "PersistentDisk" });

export interface DisksMigrationVmTargetDetails {
  /** Output only. The URI of the Compute Engine VM. */
  vmUri?: string;
}

export const DisksMigrationVmTargetDetails: Schema.Schema<DisksMigrationVmTargetDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vmUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "DisksMigrationVmTargetDetails" });

export interface ComputeEngineDisksTargetDetails {
  /** Details of the disks-only migration target. */
  disksTargetDetails?: DisksMigrationDisksTargetDetails;
  /** The details of each created Persistent Disk. */
  disks?: ReadonlyArray<PersistentDisk>;
  /** Details for the VM the migrated data disks are attached to. */
  vmTargetDetails?: DisksMigrationVmTargetDetails;
}

export const ComputeEngineDisksTargetDetails: Schema.Schema<ComputeEngineDisksTargetDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    disksTargetDetails: Schema.optional(DisksMigrationDisksTargetDetails),
    disks: Schema.optional(Schema.Array(PersistentDisk)),
    vmTargetDetails: Schema.optional(DisksMigrationVmTargetDetails),
  }).annotate({ identifier: "ComputeEngineDisksTargetDetails" });

export interface CloneJob {
  /** Output only. Details of the target VM in Compute Engine. */
  computeEngineTargetDetails?: ComputeEngineTargetDetails;
  /** Output only. The time the state was last updated. */
  stateTime?: string;
  /** Output only. Details of the VM to create as the target of this clone job. Deprecated: Use compute_engine_target_details instead. */
  targetDetails?: TargetVMDetails;
  /** Output only. Provides details for the errors that led to the Clone Job's state. */
  error?: Status;
  /** Output only. The time the clone job was created (as an API call, not when it was actually created in the target). */
  createTime?: string;
  /** Output only. State of the clone job. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PENDING"
    | "ACTIVE"
    | "FAILED"
    | "SUCCEEDED"
    | "CANCELLED"
    | "CANCELLING"
    | "ADAPTING_OS"
    | (string & {});
  /** Output only. Details of the VM in Compute Engine. Deprecated: Use compute_engine_target_details instead. */
  computeEngineVmDetails?: TargetVMDetails;
  /** Output only. Details of the target Persistent Disks in Compute Engine. */
  computeEngineDisksTargetDetails?: ComputeEngineDisksTargetDetails;
  /** Output only. The name of the clone. */
  name?: string;
  /** Output only. The clone steps list representing its progress. */
  steps?: ReadonlyArray<CloneStep>;
  /** Output only. The time the clone job was ended. */
  endTime?: string;
}

export const CloneJob: Schema.Schema<CloneJob> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    computeEngineTargetDetails: Schema.optional(ComputeEngineTargetDetails),
    stateTime: Schema.optional(Schema.String),
    targetDetails: Schema.optional(TargetVMDetails),
    error: Schema.optional(Status),
    createTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    computeEngineVmDetails: Schema.optional(TargetVMDetails),
    computeEngineDisksTargetDetails: Schema.optional(
      ComputeEngineDisksTargetDetails,
    ),
    name: Schema.optional(Schema.String),
    steps: Schema.optional(Schema.Array(CloneStep)),
    endTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "CloneJob" });

export interface ListCloneJobsResponse {
  /** Output only. The list of clone jobs response. */
  cloneJobs?: ReadonlyArray<CloneJob>;
  /** Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** Output only. Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListCloneJobsResponse: Schema.Schema<ListCloneJobsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cloneJobs: Schema.optional(Schema.Array(CloneJob)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListCloneJobsResponse" });

export interface Disk {
  /** The disk size in GB. */
  sizeGb?: number;
  /** The disk name. */
  name?: string;
  /** The disk's Logical Unit Number (LUN). */
  lun?: number;
}

export const Disk: Schema.Schema<Disk> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sizeGb: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    lun: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Disk" });

export interface AwsSourceDiskDetails {
  /** Output only. Size in GiB. */
  sizeGib?: string;
  /** Required. AWS volume ID. */
  volumeId?: string;
  /** Optional. Output only. A map of AWS volume tags. */
  tags?: Record<string, string>;
  /** Optional. Output only. Disk type. */
  diskType?:
    | "TYPE_UNSPECIFIED"
    | "GP2"
    | "GP3"
    | "IO1"
    | "IO2"
    | "ST1"
    | "SC1"
    | "STANDARD"
    | (string & {});
}

export const AwsSourceDiskDetails: Schema.Schema<AwsSourceDiskDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sizeGib: Schema.optional(Schema.String),
    volumeId: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    diskType: Schema.optional(Schema.String),
  }).annotate({ identifier: "AwsSourceDiskDetails" });

export interface SourceStorageResource {
  /** Source AWS volume details. */
  awsDiskDetails?: AwsSourceDiskDetails;
}

export const SourceStorageResource: Schema.Schema<SourceStorageResource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    awsDiskDetails: Schema.optional(AwsSourceDiskDetails),
  }).annotate({ identifier: "SourceStorageResource" });

export interface TargetProject {
  /** Required. The target project ID (number) or project name. */
  project?: string;
  /** The target project's description. */
  description?: string;
  /** Output only. The time this target project resource was created (not related to when the Compute Engine project it points to was created). */
  createTime?: string;
  /** Output only. The name of the target project. */
  name?: string;
  /** Output only. The last time the target project resource was updated. */
  updateTime?: string;
}

export const TargetProject: Schema.Schema<TargetProject> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "TargetProject" });

export interface Group {
  /** Display name is a user defined name for this group which can be updated. */
  displayName?: string;
  /** Output only. The Group name. */
  name?: string;
  /** Output only. The update time timestamp. */
  updateTime?: string;
  /** Output only. The create time timestamp. */
  createTime?: string;
  /** User-provided description of the group. */
  description?: string;
  /** Immutable. The target type of this group. */
  migrationTargetType?:
    | "MIGRATION_TARGET_TYPE_UNSPECIFIED"
    | "MIGRATION_TARGET_TYPE_GCE"
    | "MIGRATION_TARGET_TYPE_DISKS"
    | (string & {});
}

export const Group: Schema.Schema<Group> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    migrationTargetType: Schema.optional(Schema.String),
  }).annotate({ identifier: "Group" });

export interface ListGroupsResponse {
  /** Output only. The list of groups response. */
  groups?: ReadonlyArray<Group>;
  /** Output only. Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListGroupsResponse: Schema.Schema<ListGroupsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    groups: Schema.optional(Schema.Array(Group)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListGroupsResponse" });

export interface Operation {
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    done: Schema.optional(Schema.Boolean),
    error: Schema.optional(Status),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
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

export interface CreatingImageStep {}

export const CreatingImageStep: Schema.Schema<CreatingImageStep> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CreatingImageStep",
  });

export interface Tag {
  /** Required. Key of tag. */
  key?: string;
  /** Required. Value of tag. */
  value?: string;
}

export const Tag: Schema.Schema<Tag> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "Tag" });

export interface VmwareVmDetails {
  /** Output only. The VM Boot Option. */
  bootOption?: "BOOT_OPTION_UNSPECIFIED" | "EFI" | "BIOS" | (string & {});
  /** Output only. The CPU architecture. */
  architecture?:
    | "VM_ARCHITECTURE_UNSPECIFIED"
    | "VM_ARCHITECTURE_X86_FAMILY"
    | "VM_ARCHITECTURE_ARM64"
    | (string & {});
  /** The total size of the storage allocated to the VM in MB. */
  committedStorageMb?: string;
  /** The size of the memory of the VM in MB. */
  memoryMb?: number;
  /** The number of cpus in the VM. */
  cpuCount?: number;
  /** The number of disks the VM has. */
  diskCount?: number;
  /** The total size of the storage allocated to the VM in MB. */
  committedStorage?: string;
  /** The id of the vCenter's datacenter this VM is contained in. */
  datacenterId?: string;
  /** The display name of the VM. Note that this is not necessarily unique. */
  displayName?: string;
  /** The descriptive name of the vCenter's datacenter this VM is contained in. */
  datacenterDescription?: string;
  /** The VM's OS. See for example https://vdc-repo.vmware.com/vmwb-repository/dcr-public/da47f910-60ac-438b-8b9b-6122f4d14524/16b7274a-bf8b-4b4c-a05e-746f2aa93c8c/doc/vim.vm.GuestOsDescriptor.GuestOsIdentifier.html for types of strings this might hold. */
  guestDescription?: string;
  /** The power state of the VM at the moment list was taken. */
  powerState?:
    | "POWER_STATE_UNSPECIFIED"
    | "ON"
    | "OFF"
    | "SUSPENDED"
    | (string & {});
  /** The VM's id in the source (note that this is not the MigratingVm's id). This is the moref id of the VM. */
  vmId?: string;
  /** The unique identifier of the VM in vCenter. */
  uuid?: string;
}

export const VmwareVmDetails: Schema.Schema<VmwareVmDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bootOption: Schema.optional(Schema.String),
    architecture: Schema.optional(Schema.String),
    committedStorageMb: Schema.optional(Schema.String),
    memoryMb: Schema.optional(Schema.Number),
    cpuCount: Schema.optional(Schema.Number),
    diskCount: Schema.optional(Schema.Number),
    committedStorage: Schema.optional(Schema.String),
    datacenterId: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    datacenterDescription: Schema.optional(Schema.String),
    guestDescription: Schema.optional(Schema.String),
    powerState: Schema.optional(Schema.String),
    vmId: Schema.optional(Schema.String),
    uuid: Schema.optional(Schema.String),
  }).annotate({ identifier: "VmwareVmDetails" });

export interface VmUtilizationMetrics {
  /** Max network throughput (combined transmit-rates and receive-rates), in kilobytes per second. */
  networkThroughputMaxKbps?: string;
  /** Max memory usage, percent. */
  memoryMax?: number;
  /** Average memory usage, percent. */
  memoryAverage?: number;
  /** Average network throughput (combined transmit-rates and receive-rates), in kilobytes per second. */
  networkThroughputAverageKbps?: string;
  /** Average CPU usage, percent. */
  cpuAverage?: number;
  /** Max CPU usage, percent. */
  cpuMax?: number;
  /** Average CPU usage, percent. */
  cpuAveragePercent?: number;
  /** Max network throughput (combined transmit-rates and receive-rates), in kilobytes per second. */
  networkThroughputMax?: string;
  /** Max disk IO rate, in kilobytes per second. */
  diskIoRateMax?: string;
  /** Max disk IO rate, in kilobytes per second. */
  diskIoRateMaxKbps?: string;
  /** Max CPU usage, percent. */
  cpuMaxPercent?: number;
  /** Average disk IO rate, in kilobytes per second. */
  diskIoRateAverageKbps?: string;
  /** Max memory usage, percent. */
  memoryMaxPercent?: number;
  /** Average disk IO rate, in kilobytes per second. */
  diskIoRateAverage?: string;
  /** Average memory usage, percent. */
  memoryAveragePercent?: number;
  /** Average network throughput (combined transmit-rates and receive-rates), in kilobytes per second. */
  networkThroughputAverage?: string;
}

export const VmUtilizationMetrics: Schema.Schema<VmUtilizationMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    networkThroughputMaxKbps: Schema.optional(Schema.String),
    memoryMax: Schema.optional(Schema.Number),
    memoryAverage: Schema.optional(Schema.Number),
    networkThroughputAverageKbps: Schema.optional(Schema.String),
    cpuAverage: Schema.optional(Schema.Number),
    cpuMax: Schema.optional(Schema.Number),
    cpuAveragePercent: Schema.optional(Schema.Number),
    networkThroughputMax: Schema.optional(Schema.String),
    diskIoRateMax: Schema.optional(Schema.String),
    diskIoRateMaxKbps: Schema.optional(Schema.String),
    cpuMaxPercent: Schema.optional(Schema.Number),
    diskIoRateAverageKbps: Schema.optional(Schema.String),
    memoryMaxPercent: Schema.optional(Schema.Number),
    diskIoRateAverage: Schema.optional(Schema.String),
    memoryAveragePercent: Schema.optional(Schema.Number),
    networkThroughputAverage: Schema.optional(Schema.String),
  }).annotate({ identifier: "VmUtilizationMetrics" });

export interface VmUtilizationInfo {
  /** The description of the VM in a Source of type Vmware. */
  vmwareVmDetails?: VmwareVmDetails;
  /** The VM's ID in the source. */
  vmId?: string;
  /** Utilization metrics for this VM. */
  utilization?: VmUtilizationMetrics;
}

export const VmUtilizationInfo: Schema.Schema<VmUtilizationInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vmwareVmDetails: Schema.optional(VmwareVmDetails),
    vmId: Schema.optional(Schema.String),
    utilization: Schema.optional(VmUtilizationMetrics),
  }).annotate({ identifier: "VmUtilizationInfo" });

export interface UtilizationReport {
  /** Output only. Provides details on the state of the report in case of an error. */
  error?: Status;
  /** Output only. Total number of VMs included in the report. */
  vmsCount?: number;
  /** Output only. Current state of the report. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "SUCCEEDED"
    | "FAILED"
    | (string & {});
  /** Output only. The time the report was created (this refers to the time of the request, not the time the report creation completed). */
  createTime?: string;
  /** Output only. The time the state was last set. */
  stateTime?: string;
  /** List of utilization information per VM. When sent as part of the request, the "vm_id" field is used in order to specify which VMs to include in the report. In that case all other fields are ignored. */
  vms?: ReadonlyArray<VmUtilizationInfo>;
  /** The report display name, as assigned by the user. */
  displayName?: string;
  /** Time frame of the report. */
  timeFrame?:
    | "TIME_FRAME_UNSPECIFIED"
    | "WEEK"
    | "MONTH"
    | "YEAR"
    | (string & {});
  /** Output only. The point in time when the time frame ends. Notice that the time frame is counted backwards. For instance if the "frame_end_time" value is 2021/01/20 and the time frame is WEEK then the report covers the week between 2021/01/20 and 2021/01/14. */
  frameEndTime?: string;
  /** Output only. Total number of VMs included in the report. */
  vmCount?: number;
  /** Output only. The report unique name. */
  name?: string;
}

export const UtilizationReport: Schema.Schema<UtilizationReport> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    error: Schema.optional(Status),
    vmsCount: Schema.optional(Schema.Number),
    state: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    stateTime: Schema.optional(Schema.String),
    vms: Schema.optional(Schema.Array(VmUtilizationInfo)),
    displayName: Schema.optional(Schema.String),
    timeFrame: Schema.optional(Schema.String),
    frameEndTime: Schema.optional(Schema.String),
    vmCount: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "UtilizationReport" });

export interface OSDescription {
  /** OS publisher. */
  publisher?: string;
  /** OS type. */
  type?: string;
  /** OS offer. */
  offer?: string;
  /** OS plan. */
  plan?: string;
}

export const OSDescription: Schema.Schema<OSDescription> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    publisher: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    offer: Schema.optional(Schema.String),
    plan: Schema.optional(Schema.String),
  }).annotate({ identifier: "OSDescription" });

export interface DataDiskImageImport {
  /** Optional. A list of guest OS features to apply to the imported image. These features are flags that are used by Compute Engine to enable certain capabilities for virtual machine instances that are created from the image. This field does not change the OS of the image; it only marks the image with the specified features. The user must ensure that the OS is compatible with the features. For a list of available features, see https://cloud.google.com/compute/docs/images/create-custom#guest-os-features. */
  guestOsFeatures?: ReadonlyArray<string>;
}

export const DataDiskImageImport: Schema.Schema<DataDiskImageImport> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    guestOsFeatures: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "DataDiskImageImport" });

export interface ImageImportOsAdaptationParameters {
  /** Optional. Set to true in order to generalize the imported image. The generalization process enables co-existence of multiple VMs created from the same image. For Windows, generalizing the image removes computer-specific information such as installed drivers and the computer security identifier (SID). */
  generalize?: boolean;
  /** Optional. Choose which type of license to apply to the imported image. */
  licenseType?:
    | "COMPUTE_ENGINE_LICENSE_TYPE_DEFAULT"
    | "COMPUTE_ENGINE_LICENSE_TYPE_PAYG"
    | "COMPUTE_ENGINE_LICENSE_TYPE_BYOL"
    | (string & {});
  /** Optional. By default the image will keep its existing boot option. Setting this property will trigger an internal process which will convert the image from using the existing boot option to another. The size of the boot disk might be increased to allow the conversion */
  bootConversion?:
    | "BOOT_CONVERSION_UNSPECIFIED"
    | "NONE"
    | "BIOS_TO_EFI"
    | (string & {});
  /** Optional. Modifiers to be used as configuration of the OS adaptation process. */
  adaptationModifiers?: ReadonlyArray<AdaptationModifier>;
}

export const ImageImportOsAdaptationParameters: Schema.Schema<ImageImportOsAdaptationParameters> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    generalize: Schema.optional(Schema.Boolean),
    licenseType: Schema.optional(Schema.String),
    bootConversion: Schema.optional(Schema.String),
    adaptationModifiers: Schema.optional(Schema.Array(AdaptationModifier)),
  }).annotate({ identifier: "ImageImportOsAdaptationParameters" });

export interface DiskImageTargetDetails {
  /** Optional. Additional licenses to assign to the image. Format: https://www.googleapis.com/compute/v1/projects/PROJECT_ID/global/licenses/LICENSE_NAME Or https://www.googleapis.com/compute/beta/projects/PROJECT_ID/global/licenses/LICENSE_NAME */
  additionalLicenses?: ReadonlyArray<string>;
  /** Required. The name of the image to be created. */
  imageName?: string;
  /** Required. Reference to the TargetProject resource that represents the target project in which the imported image will be created. */
  targetProject?: string;
  /** Optional. An optional description of the image. */
  description?: string;
  /** Optional. Set to true to set the image storageLocations to the single region of the import job. When false, the closest multi-region is selected. */
  singleRegionStorage?: boolean;
  /** Immutable. The encryption to apply to the image. */
  encryption?: Encryption;
  /** Optional. A map of labels to associate with the image. */
  labels?: Record<string, string>;
  /** Optional. Use to skip OS adaptation process. */
  dataDiskImageImport?: DataDiskImageImport;
  /** Optional. Use to set the parameters relevant for the OS adaptation process. */
  osAdaptationParameters?: ImageImportOsAdaptationParameters;
  /** Optional. The name of the image family to which the new image belongs. */
  familyName?: string;
}

export const DiskImageTargetDetails: Schema.Schema<DiskImageTargetDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    additionalLicenses: Schema.optional(Schema.Array(Schema.String)),
    imageName: Schema.optional(Schema.String),
    targetProject: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    singleRegionStorage: Schema.optional(Schema.Boolean),
    encryption: Schema.optional(Encryption),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    dataDiskImageImport: Schema.optional(DataDiskImageImport),
    osAdaptationParameters: Schema.optional(ImageImportOsAdaptationParameters),
    familyName: Schema.optional(Schema.String),
  }).annotate({ identifier: "DiskImageTargetDetails" });

export interface Expiration {
  /** Output only. The number of times expiration was extended. */
  extensionCount?: number;
  /** Output only. Timestamp of when this resource is considered expired. */
  expireTime?: string;
  /** Output only. Describes whether the expiration can be extended. */
  extendable?: boolean;
}

export const Expiration: Schema.Schema<Expiration> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    extensionCount: Schema.optional(Schema.Number),
    expireTime: Schema.optional(Schema.String),
    extendable: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "Expiration" });

export interface ComputeEngineTargetDefaults {
  /** Optional. Defines whether the instance has integrity monitoring enabled. This can be set to true only if the VM boot option is EFI, and vTPM is enabled. */
  enableIntegrityMonitoring?: boolean;
  /** Optional. Defines whether the instance has vTPM enabled. This can be set to true only if the VM boot option is EFI. */
  enableVtpm?: boolean;
  /** The full path of the resource of type TargetProject which represents the Compute Engine project in which to create this VM. */
  targetProject?: string;
  /** The machine type to create the VM with. */
  machineType?: string;
  /** Optional. By default the virtual machine will keep its existing boot option. Setting this property will trigger an internal process which will convert the virtual machine from using the existing boot option to another. */
  bootConversion?:
    | "BOOT_CONVERSION_UNSPECIFIED"
    | "NONE"
    | "BIOS_TO_EFI"
    | (string & {});
  /** Optional. If specified this will be the storage pool in which the disk is created. This is the full path of the storage pool resource, for example: "projects/my-project/zones/us-central1-a/storagePools/my-storage-pool". The storage pool must be in the same project and zone as the target disks. The storage pool's type must match the disk type. */
  storagePool?: string;
  /** Optional. The service account to associate the VM with. */
  serviceAccount?: string;
  /** The metadata key/value pairs to assign to the VM. */
  metadata?: Record<string, string>;
  /** Output only. The VM Boot Option, as set in the source VM. */
  bootOption?:
    | "COMPUTE_ENGINE_BOOT_OPTION_UNSPECIFIED"
    | "COMPUTE_ENGINE_BOOT_OPTION_EFI"
    | "COMPUTE_ENGINE_BOOT_OPTION_BIOS"
    | (string & {});
  /** Additional licenses to assign to the VM. */
  additionalLicenses?: ReadonlyArray<string>;
  /** List of NICs connected to this VM. */
  networkInterfaces?: ReadonlyArray<NetworkInterface>;
  /** The license type to use in OS adaptation. */
  licenseType?:
    | "COMPUTE_ENGINE_LICENSE_TYPE_DEFAULT"
    | "COMPUTE_ENGINE_LICENSE_TYPE_PAYG"
    | "COMPUTE_ENGINE_LICENSE_TYPE_BYOL"
    | (string & {});
  /** Defines whether the instance has Secure Boot enabled. This can be set to true only if the VM boot option is EFI. */
  secureBoot?: boolean;
  /** Optional. Immutable. The encryption to apply to the VM disks. */
  encryption?: Encryption;
  /** Optional. AdaptationModifiers are the set of modifiers used during OS adaptation. */
  adaptationModifiers?: ReadonlyArray<AdaptationModifier>;
  /** A list of network tags to associate with the VM. */
  networkTags?: ReadonlyArray<string>;
  /** Output only. The OS license returned from the adaptation module report. */
  appliedLicense?: AppliedLicense;
  /** The hostname to assign to the VM. */
  hostname?: string;
  /** Optional. Additional replica zones of the target regional disks. If this list is not empty a regional disk will be created. The first supported zone would be the one stated in the zone field. The rest are taken from this list. Please refer to the [regional disk creation API](https://cloud.google.com/compute/docs/regions-zones/global-regional-zonal-resources) for further details about regional vs zonal disks. If not specified, a zonal disk will be created in the same zone the VM is created. */
  diskReplicaZones?: ReadonlyArray<string>;
  /** The disk type to use in the VM. */
  diskType?:
    | "COMPUTE_ENGINE_DISK_TYPE_UNSPECIFIED"
    | "COMPUTE_ENGINE_DISK_TYPE_STANDARD"
    | "COMPUTE_ENGINE_DISK_TYPE_SSD"
    | "COMPUTE_ENGINE_DISK_TYPE_BALANCED"
    | "COMPUTE_ENGINE_DISK_TYPE_HYPERDISK_BALANCED"
    | "COMPUTE_ENGINE_DISK_TYPE_HYPERDISK_BALANCED_HIGH_AVAILABILITY"
    | (string & {});
  /** The machine type series to create the VM with. */
  machineTypeSeries?: string;
  /** The name of the VM to create. */
  vmName?: string;
  /** The zone in which to create the VM. */
  zone?: string;
  /** A map of labels to associate with the VM. */
  labels?: Record<string, string>;
  /** Compute instance scheduling information (if empty default is used). */
  computeScheduling?: ComputeScheduling;
}

export const ComputeEngineTargetDefaults: Schema.Schema<ComputeEngineTargetDefaults> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableIntegrityMonitoring: Schema.optional(Schema.Boolean),
    enableVtpm: Schema.optional(Schema.Boolean),
    targetProject: Schema.optional(Schema.String),
    machineType: Schema.optional(Schema.String),
    bootConversion: Schema.optional(Schema.String),
    storagePool: Schema.optional(Schema.String),
    serviceAccount: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    bootOption: Schema.optional(Schema.String),
    additionalLicenses: Schema.optional(Schema.Array(Schema.String)),
    networkInterfaces: Schema.optional(Schema.Array(NetworkInterface)),
    licenseType: Schema.optional(Schema.String),
    secureBoot: Schema.optional(Schema.Boolean),
    encryption: Schema.optional(Encryption),
    adaptationModifiers: Schema.optional(Schema.Array(AdaptationModifier)),
    networkTags: Schema.optional(Schema.Array(Schema.String)),
    appliedLicense: Schema.optional(AppliedLicense),
    hostname: Schema.optional(Schema.String),
    diskReplicaZones: Schema.optional(Schema.Array(Schema.String)),
    diskType: Schema.optional(Schema.String),
    machineTypeSeries: Schema.optional(Schema.String),
    vmName: Schema.optional(Schema.String),
    zone: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    computeScheduling: Schema.optional(ComputeScheduling),
  }).annotate({ identifier: "ComputeEngineTargetDefaults" });

export interface VmCapabilities {
  /** Output only. Unordered list. List of certain VM OS capabilities needed for some Compute Engine features. */
  osCapabilities?: ReadonlyArray<
    | "OS_CAPABILITY_UNSPECIFIED"
    | "OS_CAPABILITY_NVME_STORAGE_ACCESS"
    | "OS_CAPABILITY_GVNIC_NETWORK_INTERFACE"
    | "OS_CAPABILITY_IDPF_NETWORK_INTERFACE"
    | (string & {})
  >;
  /** Output only. The last time OS capabilities list was updated. */
  lastOsCapabilitiesUpdateTime?: string;
}

export const VmCapabilities: Schema.Schema<VmCapabilities> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    osCapabilities: Schema.optional(Schema.Array(Schema.String)),
    lastOsCapabilitiesUpdateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "VmCapabilities" });

export interface AwsSourceVmDetails {
  /** Output only. The firmware type of the source VM. */
  firmware?: "FIRMWARE_UNSPECIFIED" | "EFI" | "BIOS" | (string & {});
  /** Output only. The total size of the disks being migrated in bytes. */
  committedStorageBytes?: string;
  /** Output only. The disks attached to the source VM. */
  disks?: ReadonlyArray<AwsDiskDetails>;
  /** Output only. The VM architecture. */
  architecture?:
    | "VM_ARCHITECTURE_UNSPECIFIED"
    | "VM_ARCHITECTURE_X86_FAMILY"
    | "VM_ARCHITECTURE_ARM64"
    | (string & {});
  /** Output only. Information about VM capabilities needed for some Compute Engine features. */
  vmCapabilitiesInfo?: VmCapabilities;
}

export const AwsSourceVmDetails: Schema.Schema<AwsSourceVmDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    firmware: Schema.optional(Schema.String),
    committedStorageBytes: Schema.optional(Schema.String),
    disks: Schema.optional(Schema.Array(AwsDiskDetails)),
    architecture: Schema.optional(Schema.String),
    vmCapabilitiesInfo: Schema.optional(VmCapabilities),
  }).annotate({ identifier: "AwsSourceVmDetails" });

export interface ComputeEngineDisk {
  /** Optional. Replication zones of the regional disk. Should be of the form: projects/{target-project}/locations/{replica-zone} Currently only one replica zone is supported. */
  replicaZones?: ReadonlyArray<string>;
  /** Optional. Target Compute Engine Disk ID. This is the resource ID segment of the Compute Engine Disk to create. In the resource name compute/v1/projects/{project}/zones/{zone}/disks/disk1 "disk1" is the resource ID for the disk. */
  diskId?: string;
  /** Required. The Compute Engine zone in which to create the disk. Should be of the form: projects/{target-project}/locations/{zone} */
  zone?: string;
  /** Required. The disk type to use. */
  diskType?:
    | "COMPUTE_ENGINE_DISK_TYPE_UNSPECIFIED"
    | "COMPUTE_ENGINE_DISK_TYPE_STANDARD"
    | "COMPUTE_ENGINE_DISK_TYPE_SSD"
    | "COMPUTE_ENGINE_DISK_TYPE_BALANCED"
    | "COMPUTE_ENGINE_DISK_TYPE_HYPERDISK_BALANCED"
    | "COMPUTE_ENGINE_DISK_TYPE_HYPERDISK_BALANCED_HIGH_AVAILABILITY"
    | (string & {});
}

export const ComputeEngineDisk: Schema.Schema<ComputeEngineDisk> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    replicaZones: Schema.optional(Schema.Array(Schema.String)),
    diskId: Schema.optional(Schema.String),
    zone: Schema.optional(Schema.String),
    diskType: Schema.optional(Schema.String),
  }).annotate({ identifier: "ComputeEngineDisk" });

export interface DiskMigrationJobTargetDetails {
  /** Optional. A map of labels to associate with the disk. */
  labels?: Record<string, string>;
  /** Optional. The encryption to apply to the disk. If the DiskMigrationJob parent Source resource has an encryption, this field must be set to the same encryption key. */
  encryption?: Encryption;
  /** Required. The target disk. */
  targetDisk?: ComputeEngineDisk;
  /** Required. The name of the resource of type TargetProject which represents the Compute Engine project in which to create the disk. Should be of the form: projects/{project}/locations/global/targetProjects/{target-project} */
  targetProject?: string;
}

export const DiskMigrationJobTargetDetails: Schema.Schema<DiskMigrationJobTargetDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    encryption: Schema.optional(Encryption),
    targetDisk: Schema.optional(ComputeEngineDisk),
    targetProject: Schema.optional(Schema.String),
  }).annotate({ identifier: "DiskMigrationJobTargetDetails" });

export interface CreatingSourceDiskSnapshotStep {}

export const CreatingSourceDiskSnapshotStep: Schema.Schema<CreatingSourceDiskSnapshotStep> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CreatingSourceDiskSnapshotStep",
  });

export interface CopyingSourceDiskSnapshotStep {}

export const CopyingSourceDiskSnapshotStep: Schema.Schema<CopyingSourceDiskSnapshotStep> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CopyingSourceDiskSnapshotStep",
  });

export interface ProvisioningTargetDiskStep {}

export const ProvisioningTargetDiskStep: Schema.Schema<ProvisioningTargetDiskStep> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "ProvisioningTargetDiskStep",
  });

export interface DiskMigrationStep {
  /** Output only. The time the step has ended. */
  endTime?: string;
  /** Creating source disk snapshot step. */
  creatingSourceDiskSnapshot?: CreatingSourceDiskSnapshotStep;
  /** Copying source disk snapshot step. */
  copyingSourceDiskSnapshot?: CopyingSourceDiskSnapshotStep;
  /** Output only. The time the step has started. */
  startTime?: string;
  /** Creating target disk step. */
  provisioningTargetDisk?: ProvisioningTargetDiskStep;
}

export const DiskMigrationStep: Schema.Schema<DiskMigrationStep> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endTime: Schema.optional(Schema.String),
    creatingSourceDiskSnapshot: Schema.optional(CreatingSourceDiskSnapshotStep),
    copyingSourceDiskSnapshot: Schema.optional(CopyingSourceDiskSnapshotStep),
    startTime: Schema.optional(Schema.String),
    provisioningTargetDisk: Schema.optional(ProvisioningTargetDiskStep),
  }).annotate({ identifier: "DiskMigrationStep" });

export interface DiskMigrationJob {
  /** Details of the unattached AWS source disk. */
  awsSourceDiskDetails?: AwsSourceDiskDetails;
  /** Output only. Provides details on the errors that led to the disk migration job's state in case of an error. */
  errors?: ReadonlyArray<Status>;
  /** Output only. The time the DiskMigrationJob resource was created. */
  createTime?: string;
  /** Output only. State of the DiskMigrationJob. */
  state?:
    | "STATE_UNSPECIFIED"
    | "READY"
    | "RUNNING"
    | "SUCCEEDED"
    | "CANCELLING"
    | "CANCELLED"
    | "FAILED"
    | (string & {});
  /** Required. Details of the target Disk in Compute Engine. */
  targetDetails?: DiskMigrationJobTargetDetails;
  /** Output only. Identifier. The identifier of the DiskMigrationJob. */
  name?: string;
  /** Output only. The last time the DiskMigrationJob resource was updated. */
  updateTime?: string;
  /** Output only. The disk migration steps list representing its progress. */
  steps?: ReadonlyArray<DiskMigrationStep>;
}

export const DiskMigrationJob: Schema.Schema<DiskMigrationJob> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    awsSourceDiskDetails: Schema.optional(AwsSourceDiskDetails),
    errors: Schema.optional(Schema.Array(Status)),
    createTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    targetDetails: Schema.optional(DiskMigrationJobTargetDetails),
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    steps: Schema.optional(Schema.Array(DiskMigrationStep)),
  }).annotate({ identifier: "DiskMigrationJob" });

export interface FinalizeMigrationRequest {}

export const FinalizeMigrationRequest: Schema.Schema<FinalizeMigrationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "FinalizeMigrationRequest",
  });

export interface Location {
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
}

export const Location: Schema.Schema<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    locationId: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "Location" });

export interface ListLocationsResponse {
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** A list of locations that matches the specified filter in the request. */
  locations?: ReadonlyArray<Location>;
}

export const ListLocationsResponse: Schema.Schema<ListLocationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    locations: Schema.optional(Schema.Array(Location)),
  }).annotate({ identifier: "ListLocationsResponse" });

export interface LoadingImageSourceFilesStep {}

export const LoadingImageSourceFilesStep: Schema.Schema<LoadingImageSourceFilesStep> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "LoadingImageSourceFilesStep",
  });

export interface InitializingImageImportStep {}

export const InitializingImageImportStep: Schema.Schema<InitializingImageImportStep> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "InitializingImageImportStep",
  });

export interface ImageImportStep {
  /** Loading source files step. */
  loadingSourceFiles?: LoadingImageSourceFilesStep;
  /** Initializing step. */
  initializing?: InitializingImageImportStep;
  /** Creating image step. */
  creatingImage?: CreatingImageStep;
  /** Output only. The time the step has ended. */
  endTime?: string;
  /** Adapting OS step. */
  adaptingOs?: AdaptingOSStep;
  /** Output only. The time the step has started. */
  startTime?: string;
}

export const ImageImportStep: Schema.Schema<ImageImportStep> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    loadingSourceFiles: Schema.optional(LoadingImageSourceFilesStep),
    initializing: Schema.optional(InitializingImageImportStep),
    creatingImage: Schema.optional(CreatingImageStep),
    endTime: Schema.optional(Schema.String),
    adaptingOs: Schema.optional(AdaptingOSStep),
    startTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "ImageImportStep" });

export interface SkipOsAdaptation {}

export const SkipOsAdaptation: Schema.Schema<SkipOsAdaptation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "SkipOsAdaptation",
  });

export interface ShieldedInstanceConfig {
  /** Optional. Defines whether the instance created by the machine image has integrity monitoring enabled. This can be set to true only if the image boot option is EFI, and vTPM is enabled. */
  enableIntegrityMonitoring?: boolean;
  /** Optional. Defines whether the instance created by the machine image has Secure Boot enabled. This can be set to true only if the image boot option is EFI. */
  secureBoot?: "SECURE_BOOT_UNSPECIFIED" | "TRUE" | "FALSE" | (string & {});
  /** Optional. Defines whether the instance created by the machine image has vTPM enabled. This can be set to true only if the image boot option is EFI. */
  enableVtpm?: boolean;
}

export const ShieldedInstanceConfig: Schema.Schema<ShieldedInstanceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableIntegrityMonitoring: Schema.optional(Schema.Boolean),
    secureBoot: Schema.optional(Schema.String),
    enableVtpm: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ShieldedInstanceConfig" });

export interface ServiceAccount {
  /** Required. The email address of the service account. */
  email?: string;
  /** Optional. The list of scopes to be made available for this service account. */
  scopes?: ReadonlyArray<string>;
}

export const ServiceAccount: Schema.Schema<ServiceAccount> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email: Schema.optional(Schema.String),
    scopes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ServiceAccount" });

export interface MachineImageParametersOverrides {
  /** Optional. The machine type to create the MachineImage with. If empty, the service will choose a relevant machine type based on the information from the source image. For more information about machine types, please refer to https://cloud.google.com/compute/docs/machine-resource. */
  machineType?: string;
}

export const MachineImageParametersOverrides: Schema.Schema<MachineImageParametersOverrides> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    machineType: Schema.optional(Schema.String),
  }).annotate({ identifier: "MachineImageParametersOverrides" });

export interface MachineImageTargetDetails {
  /** Optional. The network interfaces to create with the instance created by the machine image. Internal and external IP addresses, and network tiers are ignored for machine image import. */
  networkInterfaces?: ReadonlyArray<NetworkInterface>;
  /** Optional. Set to true to set the machine image storageLocations to the single region of the import job. When false, the closest multi-region is selected. */
  singleRegionStorage?: boolean;
  /** Immutable. The encryption to apply to the machine image. If the Image Import resource has an encryption, this field must be set to the same encryption key. */
  encryption?: Encryption;
  /** Optional. The labels to apply to the instance created by the machine image. */
  labels?: Record<string, string>;
  /** Optional. Additional licenses to assign to the instance created by the machine image. Format: https://www.googleapis.com/compute/v1/projects/PROJECT_ID/global/licenses/LICENSE_NAME Or https://www.googleapis.com/compute/beta/projects/PROJECT_ID/global/licenses/LICENSE_NAME */
  additionalLicenses?: ReadonlyArray<string>;
  /** Optional. Use to skip OS adaptation process. */
  skipOsAdaptation?: SkipOsAdaptation;
  /** Optional. Use to set the parameters relevant for the OS adaptation process. */
  osAdaptationParameters?: ImageImportOsAdaptationParameters;
  /** Optional. Shielded instance configuration. */
  shieldedInstanceConfig?: ShieldedInstanceConfig;
  /** Optional. The service account to assign to the instance created by the machine image. */
  serviceAccount?: ServiceAccount;
  /** Required. The name of the machine image to be created. */
  machineImageName?: string;
  /** Optional. An optional description of the machine image. */
  description?: string;
  /** Optional. Parameters overriding decisions based on the source machine image configurations. */
  machineImageParametersOverrides?: MachineImageParametersOverrides;
  /** Required. Reference to the TargetProject resource that represents the target project in which the imported machine image will be created. */
  targetProject?: string;
  /** Optional. The tags to apply to the instance created by the machine image. */
  tags?: ReadonlyArray<string>;
}

export const MachineImageTargetDetails: Schema.Schema<MachineImageTargetDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    networkInterfaces: Schema.optional(Schema.Array(NetworkInterface)),
    singleRegionStorage: Schema.optional(Schema.Boolean),
    encryption: Schema.optional(Encryption),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    additionalLicenses: Schema.optional(Schema.Array(Schema.String)),
    skipOsAdaptation: Schema.optional(SkipOsAdaptation),
    osAdaptationParameters: Schema.optional(ImageImportOsAdaptationParameters),
    shieldedInstanceConfig: Schema.optional(ShieldedInstanceConfig),
    serviceAccount: Schema.optional(ServiceAccount),
    machineImageName: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    machineImageParametersOverrides: Schema.optional(
      MachineImageParametersOverrides,
    ),
    targetProject: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "MachineImageTargetDetails" });

export interface ImageImportJob {
  /** Output only. Provides details on the error that led to the image import state in case of an error. */
  errors?: ReadonlyArray<Status>;
  /** Output only. The state of the image import. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PENDING"
    | "RUNNING"
    | "SUCCEEDED"
    | "FAILED"
    | "CANCELLING"
    | "CANCELLED"
    | (string & {});
  /** Output only. The time the image import was created (as an API call, not when it was actually created in the target). */
  createTime?: string;
  /** Output only. Warnings that occurred during the image import. */
  warnings?: ReadonlyArray<MigrationWarning>;
  /** Output only. The path to the Cloud Storage file from which the image should be imported. */
  cloudStorageUri?: string;
  /** Output only. The resource paths of the resources created by the image import job. */
  createdResources?: ReadonlyArray<string>;
  /** Output only. The time the image import was ended. */
  endTime?: string;
  /** Output only. Target details used to import a disk image. */
  diskImageTargetDetails?: DiskImageTargetDetails;
  /** Output only. The resource path of the ImageImportJob. */
  name?: string;
  /** Output only. The image import steps list representing its progress. */
  steps?: ReadonlyArray<ImageImportStep>;
  /** Output only. Target details used to import a machine image. */
  machineImageTargetDetails?: MachineImageTargetDetails;
}

export const ImageImportJob: Schema.Schema<ImageImportJob> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errors: Schema.optional(Schema.Array(Status)),
    state: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    warnings: Schema.optional(Schema.Array(MigrationWarning)),
    cloudStorageUri: Schema.optional(Schema.String),
    createdResources: Schema.optional(Schema.Array(Schema.String)),
    endTime: Schema.optional(Schema.String),
    diskImageTargetDetails: Schema.optional(DiskImageTargetDetails),
    name: Schema.optional(Schema.String),
    steps: Schema.optional(Schema.Array(ImageImportStep)),
    machineImageTargetDetails: Schema.optional(MachineImageTargetDetails),
  }).annotate({ identifier: "ImageImportJob" });

export interface ListImageImportJobsResponse {
  /** Output only. The list of target response. */
  imageImportJobs?: ReadonlyArray<ImageImportJob>;
  /** Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** Output only. Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListImageImportJobsResponse: Schema.Schema<ListImageImportJobsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    imageImportJobs: Schema.optional(Schema.Array(ImageImportJob)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListImageImportJobsResponse" });

export interface ListDiskMigrationJobsResponse {
  /** Output only. The list of the disk migration jobs. */
  diskMigrationJobs?: ReadonlyArray<DiskMigrationJob>;
  /** Optional. Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** Output only. Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListDiskMigrationJobsResponse: Schema.Schema<ListDiskMigrationJobsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    diskMigrationJobs: Schema.optional(Schema.Array(DiskMigrationJob)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListDiskMigrationJobsResponse" });

export interface OSDisk {
  /** The disk's size in GB. */
  sizeGb?: number;
  /** The disk's type. */
  type?: string;
  /** The disk's full name. */
  name?: string;
}

export const OSDisk: Schema.Schema<OSDisk> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sizeGb: Schema.optional(Schema.Number),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "OSDisk" });

export interface SchedulePolicy {
  /** The idle duration between replication stages. */
  idleDuration?: string;
  /** A flag to indicate whether to skip OS adaptation during the replication sync. OS adaptation is a process where the VM's operating system undergoes changes and adaptations to fully function on Compute Engine. */
  skipOsAdaptation?: boolean;
}

export const SchedulePolicy: Schema.Schema<SchedulePolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    idleDuration: Schema.optional(Schema.String),
    skipOsAdaptation: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "SchedulePolicy" });

export interface ShuttingDownSourceVMStep {}

export const ShuttingDownSourceVMStep: Schema.Schema<ShuttingDownSourceVMStep> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "ShuttingDownSourceVMStep",
  });

export interface CutoverStep {
  /** A replication cycle prior cutover step. */
  previousReplicationCycle?: ReplicationCycle;
  /** Shutting down VM step. */
  shuttingDownSourceVm?: ShuttingDownSourceVMStep;
  /** Preparing VM disks step. */
  preparingVmDisks?: PreparingVMDisksStep;
  /** The time the step has ended. */
  endTime?: string;
  /** Instantiating migrated VM step. */
  instantiatingMigratedVm?: InstantiatingMigratedVMStep;
  /** Final sync step. */
  finalSync?: ReplicationCycle;
  /** The time the step has started. */
  startTime?: string;
}

export const CutoverStep: Schema.Schema<CutoverStep> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    previousReplicationCycle: Schema.optional(ReplicationCycle),
    shuttingDownSourceVm: Schema.optional(ShuttingDownSourceVMStep),
    preparingVmDisks: Schema.optional(PreparingVMDisksStep),
    endTime: Schema.optional(Schema.String),
    instantiatingMigratedVm: Schema.optional(InstantiatingMigratedVMStep),
    finalSync: Schema.optional(ReplicationCycle),
    startTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "CutoverStep" });

export interface CutoverJob {
  /** Output only. Details of the target Persistent Disks in Compute Engine. */
  computeEngineDisksTargetDetails?: ComputeEngineDisksTargetDetails;
  /** Output only. Details of the VM to create as the target of this cutover job. Deprecated: Use compute_engine_target_details instead. */
  targetDetails?: TargetVMDetails;
  /** Output only. The time the state was last updated. */
  stateTime?: string;
  /** Output only. Details of the target VM in Compute Engine. */
  computeEngineTargetDetails?: ComputeEngineTargetDetails;
  /** Output only. State of the cutover job. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PENDING"
    | "FAILED"
    | "SUCCEEDED"
    | "CANCELLED"
    | "CANCELLING"
    | "ACTIVE"
    | "ADAPTING_OS"
    | (string & {});
  /** Output only. The time the cutover job had finished. */
  endTime?: string;
  /** Output only. The name of the cutover job. */
  name?: string;
  /** Output only. The cutover steps list representing its progress. */
  steps?: ReadonlyArray<CutoverStep>;
  /** Output only. Details of the VM in Compute Engine. Deprecated: Use compute_engine_target_details instead. */
  computeEngineVmDetails?: TargetVMDetails;
  /** Output only. The current progress in percentage of the cutover job. */
  progress?: number;
  /** Output only. The time the cutover job was created (as an API call, not when it was actually created in the target). */
  createTime?: string;
  /** Output only. The current progress in percentage of the cutover job. */
  progressPercent?: number;
  /** Output only. Provides details for the errors that led to the Cutover Job's state. */
  error?: Status;
  /** Output only. A message providing possible extra details about the current state. */
  stateMessage?: string;
}

export const CutoverJob: Schema.Schema<CutoverJob> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    computeEngineDisksTargetDetails: Schema.optional(
      ComputeEngineDisksTargetDetails,
    ),
    targetDetails: Schema.optional(TargetVMDetails),
    stateTime: Schema.optional(Schema.String),
    computeEngineTargetDetails: Schema.optional(ComputeEngineTargetDetails),
    state: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    steps: Schema.optional(Schema.Array(CutoverStep)),
    computeEngineVmDetails: Schema.optional(TargetVMDetails),
    progress: Schema.optional(Schema.Number),
    createTime: Schema.optional(Schema.String),
    progressPercent: Schema.optional(Schema.Number),
    error: Schema.optional(Status),
    stateMessage: Schema.optional(Schema.String),
  }).annotate({ identifier: "CutoverJob" });

export interface AzureDiskDetails {
  /** Output only. Azure disk ID. */
  diskId?: string;
  /** Output only. Size in GB. */
  sizeGb?: string;
  /** Output only. The ordinal number of the disk. */
  diskNumber?: number;
}

export const AzureDiskDetails: Schema.Schema<AzureDiskDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    diskId: Schema.optional(Schema.String),
    sizeGb: Schema.optional(Schema.String),
    diskNumber: Schema.optional(Schema.Number),
  }).annotate({ identifier: "AzureDiskDetails" });

export interface AzureSourceVmDetails {
  /** Output only. Information about VM capabilities needed for some Compute Engine features. */
  vmCapabilitiesInfo?: VmCapabilities;
  /** Output only. The disks attached to the source VM. */
  disks?: ReadonlyArray<AzureDiskDetails>;
  /** Output only. The VM architecture. */
  architecture?:
    | "VM_ARCHITECTURE_UNSPECIFIED"
    | "VM_ARCHITECTURE_X86_FAMILY"
    | "VM_ARCHITECTURE_ARM64"
    | (string & {});
  /** Output only. The firmware type of the source VM. */
  firmware?: "FIRMWARE_UNSPECIFIED" | "EFI" | "BIOS" | (string & {});
  /** Output only. The total size of the disks being migrated in bytes. */
  committedStorageBytes?: string;
}

export const AzureSourceVmDetails: Schema.Schema<AzureSourceVmDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vmCapabilitiesInfo: Schema.optional(VmCapabilities),
    disks: Schema.optional(Schema.Array(AzureDiskDetails)),
    architecture: Schema.optional(Schema.String),
    firmware: Schema.optional(Schema.String),
    committedStorageBytes: Schema.optional(Schema.String),
  }).annotate({ identifier: "AzureSourceVmDetails" });

export interface CutoverForecast {
  /** Output only. Estimation of the CutoverJob duration. */
  estimatedCutoverJobDuration?: string;
}

export const CutoverForecast: Schema.Schema<CutoverForecast> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    estimatedCutoverJobDuration: Schema.optional(Schema.String),
  }).annotate({ identifier: "CutoverForecast" });

export interface ReplicationSync {
  /** The most updated snapshot created time in the source that finished replication. */
  lastSyncTime?: string;
}

export const ReplicationSync: Schema.Schema<ReplicationSync> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastSyncTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReplicationSync" });

export interface VmwareDiskDetails {
  /** Output only. The ordinal number of the disk. */
  diskNumber?: number;
  /** Output only. Size in GB. */
  sizeGb?: string;
  /** Output only. The disk label. */
  label?: string;
}

export const VmwareDiskDetails: Schema.Schema<VmwareDiskDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    diskNumber: Schema.optional(Schema.Number),
    sizeGb: Schema.optional(Schema.String),
    label: Schema.optional(Schema.String),
  }).annotate({ identifier: "VmwareDiskDetails" });

export interface VmwareSourceVmDetails {
  /** Output only. Information about VM capabilities needed for some Compute Engine features. */
  vmCapabilitiesInfo?: VmCapabilities;
  /** Output only. The firmware type of the source VM. */
  firmware?: "FIRMWARE_UNSPECIFIED" | "EFI" | "BIOS" | (string & {});
  /** Output only. The total size of the disks being migrated in bytes. */
  committedStorageBytes?: string;
  /** Output only. The disks attached to the source VM. */
  disks?: ReadonlyArray<VmwareDiskDetails>;
  /** Output only. The VM architecture. */
  architecture?:
    | "VM_ARCHITECTURE_UNSPECIFIED"
    | "VM_ARCHITECTURE_X86_FAMILY"
    | "VM_ARCHITECTURE_ARM64"
    | (string & {});
}

export const VmwareSourceVmDetails: Schema.Schema<VmwareSourceVmDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vmCapabilitiesInfo: Schema.optional(VmCapabilities),
    firmware: Schema.optional(Schema.String),
    committedStorageBytes: Schema.optional(Schema.String),
    disks: Schema.optional(Schema.Array(VmwareDiskDetails)),
    architecture: Schema.optional(Schema.String),
  }).annotate({ identifier: "VmwareSourceVmDetails" });

export interface VmAttachmentDetails {
  /** Optional. Specifies a unique device name of your choice that is reflected into the /dev/disk/by-id/google-* tree of a Linux operating system running within the instance. If not specified, the server chooses a default device name to apply to this disk, in the form persistent-disk-x, where x is a number assigned by Google Compute Engine. This field is only applicable for persistent disks. */
  deviceName?: string;
}

export const VmAttachmentDetails: Schema.Schema<VmAttachmentDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deviceName: Schema.optional(Schema.String),
  }).annotate({ identifier: "VmAttachmentDetails" });

export interface PersistentDiskDefaults {
  /** Optional. The name of the Persistent Disk to create. */
  diskName?: string;
  /** Required. The ordinal number of the source VM disk. */
  sourceDiskNumber?: number;
  /** The disk type to use. */
  diskType?:
    | "COMPUTE_ENGINE_DISK_TYPE_UNSPECIFIED"
    | "COMPUTE_ENGINE_DISK_TYPE_STANDARD"
    | "COMPUTE_ENGINE_DISK_TYPE_SSD"
    | "COMPUTE_ENGINE_DISK_TYPE_BALANCED"
    | "COMPUTE_ENGINE_DISK_TYPE_HYPERDISK_BALANCED"
    | "COMPUTE_ENGINE_DISK_TYPE_HYPERDISK_BALANCED_HIGH_AVAILABILITY"
    | (string & {});
  /** Optional. The encryption to apply to the disk. */
  encryption?: Encryption;
  /** A map of labels to associate with the Persistent Disk. */
  additionalLabels?: Record<string, string>;
  /** Optional. Details for attachment of the disk to a VM. Used when the disk is set to be attached to a target VM. */
  vmAttachmentDetails?: VmAttachmentDetails;
}

export const PersistentDiskDefaults: Schema.Schema<PersistentDiskDefaults> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    diskName: Schema.optional(Schema.String),
    sourceDiskNumber: Schema.optional(Schema.Number),
    diskType: Schema.optional(Schema.String),
    encryption: Schema.optional(Encryption),
    additionalLabels: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    vmAttachmentDetails: Schema.optional(VmAttachmentDetails),
  }).annotate({ identifier: "PersistentDiskDefaults" });

export interface DiskImageDefaults {
  /** Required. The Image resource used when creating the disk. */
  sourceImage?: string;
}

export const DiskImageDefaults: Schema.Schema<DiskImageDefaults> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceImage: Schema.optional(Schema.String),
  }).annotate({ identifier: "DiskImageDefaults" });

export interface BootDiskDefaults {
  /** The image to use when creating the disk. */
  image?: DiskImageDefaults;
  /** Optional. The name of the disk. */
  diskName?: string;
  /** Optional. Specifies a unique device name of your choice that is reflected into the /dev/disk/by-id/google-* tree of a Linux operating system running within the instance. If not specified, the server chooses a default device name to apply to this disk, in the form persistent-disk-x, where x is a number assigned by Google Compute Engine. This field is only applicable for persistent disks. */
  deviceName?: string;
  /** Optional. The type of disk provisioning to use for the VM. */
  diskType?:
    | "COMPUTE_ENGINE_DISK_TYPE_UNSPECIFIED"
    | "COMPUTE_ENGINE_DISK_TYPE_STANDARD"
    | "COMPUTE_ENGINE_DISK_TYPE_SSD"
    | "COMPUTE_ENGINE_DISK_TYPE_BALANCED"
    | "COMPUTE_ENGINE_DISK_TYPE_HYPERDISK_BALANCED"
    | "COMPUTE_ENGINE_DISK_TYPE_HYPERDISK_BALANCED_HIGH_AVAILABILITY"
    | (string & {});
  /** Optional. The encryption to apply to the boot disk. */
  encryption?: Encryption;
}

export const BootDiskDefaults: Schema.Schema<BootDiskDefaults> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    image: Schema.optional(DiskImageDefaults),
    diskName: Schema.optional(Schema.String),
    deviceName: Schema.optional(Schema.String),
    diskType: Schema.optional(Schema.String),
    encryption: Schema.optional(Encryption),
  }).annotate({ identifier: "BootDiskDefaults" });

export interface DisksMigrationVmTargetDefaults {
  /** Optional. The metadata key/value pairs to assign to the VM. */
  metadata?: Record<string, string>;
  /** Required. The name of the VM to create. */
  vmName?: string;
  /** Optional. The machine type series to create the VM with. For presentation only. */
  machineTypeSeries?: string;
  /** Optional. The service account to associate the VM with. */
  serviceAccount?: string;
  /** Optional. NICs to attach to the VM. */
  networkInterfaces?: ReadonlyArray<NetworkInterface>;
  /** Optional. Defines whether the instance has Secure Boot enabled. This can be set to true only if the VM boot option is EFI. */
  secureBoot?: boolean;
  /** Optional. The encryption to apply to the VM. */
  encryption?: Encryption;
  /** Optional. Compute instance scheduling information (if empty default is used). */
  computeScheduling?: ComputeScheduling;
  /** Optional. A map of labels to associate with the VM. */
  labels?: Record<string, string>;
  /** Optional. Additional licenses to assign to the VM. */
  additionalLicenses?: ReadonlyArray<string>;
  /** Optional. A list of network tags to associate with the VM. */
  networkTags?: ReadonlyArray<string>;
  /** Optional. Defines whether the instance has vTPM enabled. */
  enableVtpm?: boolean;
  /** Optional. Defines whether the instance has integrity monitoring enabled. */
  enableIntegrityMonitoring?: boolean;
  /** Required. The machine type to create the VM with. */
  machineType?: string;
  /** Optional. Details of the boot disk of the VM. */
  bootDiskDefaults?: BootDiskDefaults;
  /** Optional. The hostname to assign to the VM. */
  hostname?: string;
}

export const DisksMigrationVmTargetDefaults: Schema.Schema<DisksMigrationVmTargetDefaults> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    vmName: Schema.optional(Schema.String),
    machineTypeSeries: Schema.optional(Schema.String),
    serviceAccount: Schema.optional(Schema.String),
    networkInterfaces: Schema.optional(Schema.Array(NetworkInterface)),
    secureBoot: Schema.optional(Schema.Boolean),
    encryption: Schema.optional(Encryption),
    computeScheduling: Schema.optional(ComputeScheduling),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    additionalLicenses: Schema.optional(Schema.Array(Schema.String)),
    networkTags: Schema.optional(Schema.Array(Schema.String)),
    enableVtpm: Schema.optional(Schema.Boolean),
    enableIntegrityMonitoring: Schema.optional(Schema.Boolean),
    machineType: Schema.optional(Schema.String),
    bootDiskDefaults: Schema.optional(BootDiskDefaults),
    hostname: Schema.optional(Schema.String),
  }).annotate({ identifier: "DisksMigrationVmTargetDefaults" });

export interface DisksMigrationDisksTargetDefaults {}

export const DisksMigrationDisksTargetDefaults: Schema.Schema<DisksMigrationDisksTargetDefaults> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "DisksMigrationDisksTargetDefaults",
  });

export interface ComputeEngineDisksTargetDefaults {
  /** The full path of the resource of type TargetProject which represents the Compute Engine project in which to create the Persistent Disks. */
  targetProject?: string;
  /** The details of each Persistent Disk to create. */
  disks?: ReadonlyArray<PersistentDiskDefaults>;
  /** The zone in which to create the Persistent Disks. */
  zone?: string;
  /** Details of the VM migration target. */
  vmTargetDefaults?: DisksMigrationVmTargetDefaults;
  /** Details of the disk only migration target. */
  disksTargetDefaults?: DisksMigrationDisksTargetDefaults;
}

export const ComputeEngineDisksTargetDefaults: Schema.Schema<ComputeEngineDisksTargetDefaults> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targetProject: Schema.optional(Schema.String),
    disks: Schema.optional(Schema.Array(PersistentDiskDefaults)),
    zone: Schema.optional(Schema.String),
    vmTargetDefaults: Schema.optional(DisksMigrationVmTargetDefaults),
    disksTargetDefaults: Schema.optional(DisksMigrationDisksTargetDefaults),
  }).annotate({ identifier: "ComputeEngineDisksTargetDefaults" });

export interface MigratingVm {
  /** Output only. State of the MigratingVm. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PENDING"
    | "READY"
    | "FIRST_SYNC"
    | "ACTIVE"
    | "CUTTING_OVER"
    | "CUTOVER"
    | "FINAL_SYNC"
    | "PAUSED"
    | "FINALIZING"
    | "FINALIZED"
    | "ERROR"
    | "EXPIRED"
    | "FINALIZED_EXPIRED"
    | (string & {});
  /** The labels of the migrating VM. */
  labels?: Record<string, string>;
  /** The replication schedule policy. */
  policy?: SchedulePolicy;
  /** Output only. The last time the migrating VM state was updated. */
  stateTime?: string;
  /** Output only. The recent clone jobs performed on the migrating VM. This field holds the vm's last completed clone job and the vm's running clone job, if one exists. Note: To have this field populated you need to explicitly request it via the "view" parameter of the Get/List request. */
  recentCloneJobs?: ReadonlyArray<CloneJob>;
  /** The description attached to the migrating VM by the user. */
  description?: string;
  /** Output only. Provides details on the state of the Migrating VM in case of an error in replication. */
  error?: Status;
  /** Output only. The group this migrating vm is included in, if any. The group is represented by the full path of the appropriate Group resource. */
  group?: string;
  /** Details of the target VM in Compute Engine. */
  computeEngineTargetDefaults?: ComputeEngineTargetDefaults;
  /** The display name attached to the MigratingVm by the user. */
  displayName?: string;
  /** Output only. The recent cutover jobs performed on the migrating VM. This field holds the vm's last completed cutover job and the vm's running cutover job, if one exists. Note: To have this field populated you need to explicitly request it via the "view" parameter of the Get/List request. */
  recentCutoverJobs?: ReadonlyArray<CutoverJob>;
  /** Output only. Details of the last replication cycle. This will be updated whenever a replication cycle is finished and is not to be confused with last_sync which is only updated on successful replication cycles. */
  lastReplicationCycle?: ReplicationCycle;
  /** The unique ID of the VM in the source. The VM's name in vSphere can be changed, so this is not the VM's name but rather its moRef id. This id is of the form vm-. */
  sourceVmId?: string;
  /** Output only. Details of the VM from an Azure source. */
  azureSourceVmDetails?: AzureSourceVmDetails;
  /** The default configuration of the target VM that will be created in Google Cloud as a result of the migration. Deprecated: Use compute_engine_target_defaults instead. */
  targetDefaults?: TargetVMDetails;
  /** Output only. Provides details of future CutoverJobs of a MigratingVm. Set to empty when cutover forecast is unavailable. */
  cutoverForecast?: CutoverForecast;
  /** Output only. Provides details about the expiration state of the migrating VM. */
  expiration?: Expiration;
  /** Output only. Details of the current running replication cycle. */
  currentSyncInfo?: ReplicationCycle;
  /** Output only. The most updated snapshot created time in the source that finished replication. */
  lastSync?: ReplicationSync;
  /** Output only. The time the migrating VM was created (this refers to this resource and not to the time it was installed in the source). */
  createTime?: string;
  /** Output only. Details of the VM from a Vmware source. */
  vmwareSourceVmDetails?: VmwareSourceVmDetails;
  /** Details of the target Persistent Disks in Compute Engine. */
  computeEngineDisksTargetDefaults?: ComputeEngineDisksTargetDefaults;
  /** Details of the VM in Compute Engine. Deprecated: Use compute_engine_target_defaults instead. */
  computeEngineVmDefaults?: TargetVMDetails;
  /** Output only. Details of the VM from an AWS source. */
  awsSourceVmDetails?: AwsSourceVmDetails;
  /** Output only. The identifier of the MigratingVm. */
  name?: string;
  /** Output only. The last time the migrating VM resource was updated. */
  updateTime?: string;
}

export const MigratingVm: Schema.Schema<MigratingVm> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    policy: Schema.optional(SchedulePolicy),
    stateTime: Schema.optional(Schema.String),
    recentCloneJobs: Schema.optional(Schema.Array(CloneJob)),
    description: Schema.optional(Schema.String),
    error: Schema.optional(Status),
    group: Schema.optional(Schema.String),
    computeEngineTargetDefaults: Schema.optional(ComputeEngineTargetDefaults),
    displayName: Schema.optional(Schema.String),
    recentCutoverJobs: Schema.optional(Schema.Array(CutoverJob)),
    lastReplicationCycle: Schema.optional(ReplicationCycle),
    sourceVmId: Schema.optional(Schema.String),
    azureSourceVmDetails: Schema.optional(AzureSourceVmDetails),
    targetDefaults: Schema.optional(TargetVMDetails),
    cutoverForecast: Schema.optional(CutoverForecast),
    expiration: Schema.optional(Expiration),
    currentSyncInfo: Schema.optional(ReplicationCycle),
    lastSync: Schema.optional(ReplicationSync),
    createTime: Schema.optional(Schema.String),
    vmwareSourceVmDetails: Schema.optional(VmwareSourceVmDetails),
    computeEngineDisksTargetDefaults: Schema.optional(
      ComputeEngineDisksTargetDefaults,
    ),
    computeEngineVmDefaults: Schema.optional(TargetVMDetails),
    awsSourceVmDetails: Schema.optional(AwsSourceVmDetails),
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "MigratingVm" });

export interface ListMigratingVmsResponse {
  /** Output only. Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** Output only. The list of Migrating VMs response. */
  migratingVms?: ReadonlyArray<MigratingVm>;
  /** Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListMigratingVmsResponse: Schema.Schema<ListMigratingVmsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    migratingVms: Schema.optional(Schema.Array(MigratingVm)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListMigratingVmsResponse" });

export interface ListTargetProjectsResponse {
  /** Output only. The list of target response. */
  targetProjects?: ReadonlyArray<TargetProject>;
  /** Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** Output only. Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListTargetProjectsResponse: Schema.Schema<ListTargetProjectsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targetProjects: Schema.optional(Schema.Array(TargetProject)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListTargetProjectsResponse" });

export interface ClientSecretCredentials {
  /** Input only. Azure client secret. */
  clientSecret?: string;
  /** Azure client ID. */
  clientId?: string;
  /** Azure tenant ID. */
  tenantId?: string;
}

export const ClientSecretCredentials: Schema.Schema<ClientSecretCredentials> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clientSecret: Schema.optional(Schema.String),
    clientId: Schema.optional(Schema.String),
    tenantId: Schema.optional(Schema.String),
  }).annotate({ identifier: "ClientSecretCredentials" });

export interface AzureSourceDetails {
  /** Immutable. Azure subscription ID. */
  subscriptionId?: string;
  /** Output only. Provides details on the state of the Source in case of an error. */
  error?: Status;
  /** Output only. State of the source as determined by the health check. */
  state?: "STATE_UNSPECIFIED" | "PENDING" | "FAILED" | "ACTIVE" | (string & {});
  /** Output only. The ID of the Azure resource group that contains all resources related to the migration process of this source. */
  resourceGroupId?: string;
  /** Immutable. The Azure location (region) that the source VMs will be migrated from. */
  azureLocation?: string;
  /** User specified tags to add to every M2VM generated resource in Azure. These tags will be set in addition to the default tags that are set as part of the migration process. The tags must not begin with the reserved prefix `m4ce` or `m2vm`. */
  migrationResourcesUserTags?: Record<string, string>;
  /** Azure Credentials using tenant ID, client ID and secret. */
  clientSecretCreds?: ClientSecretCredentials;
}

export const AzureSourceDetails: Schema.Schema<AzureSourceDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.optional(Schema.String),
    error: Schema.optional(Status),
    state: Schema.optional(Schema.String),
    resourceGroupId: Schema.optional(Schema.String),
    azureLocation: Schema.optional(Schema.String),
    migrationResourcesUserTags: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    clientSecretCreds: Schema.optional(ClientSecretCredentials),
  }).annotate({ identifier: "AzureSourceDetails" });

export interface ImageImport {
  /** Immutable. Target details for importing a disk image, will be used by ImageImportJob. */
  diskImageTargetDefaults?: DiskImageTargetDetails;
  /** Output only. The result of the most recent runs for this ImageImport. All jobs for this ImageImport can be listed via ListImageImportJobs. */
  recentImageImportJobs?: ReadonlyArray<ImageImportJob>;
  /** Immutable. The path to the Cloud Storage file from which the image should be imported. */
  cloudStorageUri?: string;
  /** Immutable. Target details for importing a machine image, will be used by ImageImportJob. */
  machineImageTargetDefaults?: MachineImageTargetDetails;
  /** Output only. The time the image import was created. */
  createTime?: string;
  /** Immutable. The encryption details used by the image import process during the image adaptation for Compute Engine. */
  encryption?: Encryption;
  /** Output only. The resource path of the ImageImport. */
  name?: string;
}

export const ImageImport: Schema.Schema<ImageImport> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    diskImageTargetDefaults: Schema.optional(DiskImageTargetDetails),
    recentImageImportJobs: Schema.optional(Schema.Array(ImageImportJob)),
    cloudStorageUri: Schema.optional(Schema.String),
    machineImageTargetDefaults: Schema.optional(MachineImageTargetDetails),
    createTime: Schema.optional(Schema.String),
    encryption: Schema.optional(Encryption),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "ImageImport" });

export interface ListImageImportsResponse {
  /** Output only. Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** Output only. The list of target response. */
  imageImports?: ReadonlyArray<ImageImport>;
}

export const ListImageImportsResponse: Schema.Schema<ListImageImportsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
    imageImports: Schema.optional(Schema.Array(ImageImport)),
  }).annotate({ identifier: "ListImageImportsResponse" });

export interface AwsSecurityGroup {
  /** The AWS security group id. */
  id?: string;
  /** The AWS security group name. */
  name?: string;
}

export const AwsSecurityGroup: Schema.Schema<AwsSecurityGroup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "AwsSecurityGroup" });

export interface AwsVmDetails {
  /** The VM's OS. */
  osDescription?: string;
  /** The AWS zone of the VM. */
  zone?: string;
  /** The number of CPU cores the VM has. */
  cpuCount?: number;
  /** The number of disks the VM has. */
  diskCount?: number;
  /** The id of the AWS's source this VM is connected to. */
  sourceId?: string;
  /** The virtualization type. */
  virtualizationType?:
    | "VM_VIRTUALIZATION_TYPE_UNSPECIFIED"
    | "HVM"
    | "PARAVIRTUAL"
    | (string & {});
  /** The memory size of the VM in MB. */
  memoryMb?: number;
  /** The descriptive name of the AWS's source this VM is connected to. */
  sourceDescription?: string;
  /** The total size of the storage allocated to the VM in MB. */
  committedStorageMb?: string;
  /** The VM Boot Option. */
  bootOption?: "BOOT_OPTION_UNSPECIFIED" | "EFI" | "BIOS" | (string & {});
  /** The CPU architecture. */
  architecture?:
    | "VM_ARCHITECTURE_UNSPECIFIED"
    | "I386"
    | "X86_64"
    | "ARM64"
    | "X86_64_MAC"
    | (string & {});
  /** The number of vCPUs the VM has. It is calculated as the number of CPU cores * threads per CPU the VM has. */
  vcpuCount?: number;
  /** The instance type of the VM. */
  instanceType?: string;
  /** The security groups the VM belongs to. */
  securityGroups?: ReadonlyArray<AwsSecurityGroup>;
  /** Output only. The power state of the VM at the moment list was taken. */
  powerState?:
    | "POWER_STATE_UNSPECIFIED"
    | "ON"
    | "OFF"
    | "SUSPENDED"
    | "PENDING"
    | (string & {});
  /** The tags of the VM. */
  tags?: Record<string, string>;
  /** The VM ID in AWS. */
  vmId?: string;
  /** The VPC ID the VM belongs to. */
  vpcId?: string;
  /** The display name of the VM. Note that this value is not necessarily unique. */
  displayName?: string;
}

export const AwsVmDetails: Schema.Schema<AwsVmDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    osDescription: Schema.optional(Schema.String),
    zone: Schema.optional(Schema.String),
    cpuCount: Schema.optional(Schema.Number),
    diskCount: Schema.optional(Schema.Number),
    sourceId: Schema.optional(Schema.String),
    virtualizationType: Schema.optional(Schema.String),
    memoryMb: Schema.optional(Schema.Number),
    sourceDescription: Schema.optional(Schema.String),
    committedStorageMb: Schema.optional(Schema.String),
    bootOption: Schema.optional(Schema.String),
    architecture: Schema.optional(Schema.String),
    vcpuCount: Schema.optional(Schema.Number),
    instanceType: Schema.optional(Schema.String),
    securityGroups: Schema.optional(Schema.Array(AwsSecurityGroup)),
    powerState: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    vmId: Schema.optional(Schema.String),
    vpcId: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "AwsVmDetails" });

export interface CancelCutoverJobRequest {}

export const CancelCutoverJobRequest: Schema.Schema<CancelCutoverJobRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelCutoverJobRequest",
  });

export interface ListCutoverJobsResponse {
  /** Output only. The list of cutover jobs response. */
  cutoverJobs?: ReadonlyArray<CutoverJob>;
  /** Output only. Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListCutoverJobsResponse: Schema.Schema<ListCutoverJobsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cutoverJobs: Schema.optional(Schema.Array(CutoverJob)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListCutoverJobsResponse" });

export interface CancelImageImportJobRequest {}

export const CancelImageImportJobRequest: Schema.Schema<CancelImageImportJobRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelImageImportJobRequest",
  });

export interface FetchStorageInventoryResponse {
  /** Output only. The timestamp when the source was last queried (if the result is from the cache). */
  updateTime?: string;
  /** Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** The list of storage resources in the source. */
  resources?: ReadonlyArray<SourceStorageResource>;
}

export const FetchStorageInventoryResponse: Schema.Schema<FetchStorageInventoryResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
    resources: Schema.optional(Schema.Array(SourceStorageResource)),
  }).annotate({ identifier: "FetchStorageInventoryResponse" });

export interface ListUtilizationReportsResponse {
  /** Output only. The list of reports. */
  utilizationReports?: ReadonlyArray<UtilizationReport>;
  /** Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** Output only. Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListUtilizationReportsResponse: Schema.Schema<ListUtilizationReportsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    utilizationReports: Schema.optional(Schema.Array(UtilizationReport)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListUtilizationReportsResponse" });

export interface CancelCloneJobRequest {}

export const CancelCloneJobRequest: Schema.Schema<CancelCloneJobRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelCloneJobRequest",
  });

export interface RunDiskMigrationJobRequest {}

export const RunDiskMigrationJobRequest: Schema.Schema<RunDiskMigrationJobRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "RunDiskMigrationJobRequest",
  });

export interface AccessKeyCredentials {
  /** AWS access key ID. */
  accessKeyId?: string;
  /** Input only. AWS secret access key. */
  secretAccessKey?: string;
  /** Input only. AWS session token. Used only when AWS security token service (STS) is responsible for creating the temporary credentials. */
  sessionToken?: string;
}

export const AccessKeyCredentials: Schema.Schema<AccessKeyCredentials> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accessKeyId: Schema.optional(Schema.String),
    secretAccessKey: Schema.optional(Schema.String),
    sessionToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccessKeyCredentials" });

export interface AwsSourceDetails {
  /** AWS resource tags to limit the scope of the source inventory. */
  inventoryTagList?: ReadonlyArray<Tag>;
  /** AWS security group names to limit the scope of the source inventory. */
  inventorySecurityGroupNames?: ReadonlyArray<string>;
  /** Output only. State of the source as determined by the health check. */
  state?: "STATE_UNSPECIFIED" | "PENDING" | "FAILED" | "ACTIVE" | (string & {});
  /** AWS Credentials using access key id and secret. */
  accessKeyCreds?: AccessKeyCredentials;
  /** Output only. Provides details on the state of the Source in case of an error. */
  error?: Status;
  /** Output only. The source's public IP. All communication initiated by this source will originate from this IP. */
  publicIp?: string;
  /** Immutable. The AWS region that the source VMs will be migrated from. */
  awsRegion?: string;
  /** User specified tags to add to every M2VM generated resource in AWS. These tags will be set in addition to the default tags that are set as part of the migration process. The tags must not begin with the reserved prefix `m2vm`. */
  migrationResourcesUserTags?: Record<string, string>;
}

export const AwsSourceDetails: Schema.Schema<AwsSourceDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inventoryTagList: Schema.optional(Schema.Array(Tag)),
    inventorySecurityGroupNames: Schema.optional(Schema.Array(Schema.String)),
    state: Schema.optional(Schema.String),
    accessKeyCreds: Schema.optional(AccessKeyCredentials),
    error: Schema.optional(Status),
    publicIp: Schema.optional(Schema.String),
    awsRegion: Schema.optional(Schema.String),
    migrationResourcesUserTags: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
  }).annotate({ identifier: "AwsSourceDetails" });

export interface VmwareSourceDetails {
  /** The hostname of the vcenter. */
  resolvedVcenterHost?: string;
  /** The credentials username. */
  username?: string;
  /** The thumbprint representing the certificate for the vcenter. */
  thumbprint?: string;
  /** Input only. The credentials password. This is write only and can not be read in a GET operation. */
  password?: string;
  /** The ip address of the vcenter this Source represents. */
  vcenterIp?: string;
}

export const VmwareSourceDetails: Schema.Schema<VmwareSourceDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resolvedVcenterHost: Schema.optional(Schema.String),
    username: Schema.optional(Schema.String),
    thumbprint: Schema.optional(Schema.String),
    password: Schema.optional(Schema.String),
    vcenterIp: Schema.optional(Schema.String),
  }).annotate({ identifier: "VmwareSourceDetails" });

export interface Source {
  /** Output only. The create time timestamp. */
  createTime?: string;
  /** User-provided description of the source. */
  description?: string;
  /** Optional. Immutable. The encryption details of the source data stored by the service. */
  encryption?: Encryption;
  /** The labels of the source. */
  labels?: Record<string, string>;
  /** Output only. Provides details on the state of the Source in case of an error. */
  error?: Status;
  /** AWS type source details. */
  aws?: AwsSourceDetails;
  /** Azure type source details. */
  azure?: AzureSourceDetails;
  /** Vmware type source details. */
  vmware?: VmwareSourceDetails;
  /** Output only. The Source name. */
  name?: string;
  /** Output only. The update time timestamp. */
  updateTime?: string;
}

export const Source: Schema.Schema<Source> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    encryption: Schema.optional(Encryption),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    error: Schema.optional(Status),
    aws: Schema.optional(AwsSourceDetails),
    azure: Schema.optional(AzureSourceDetails),
    vmware: Schema.optional(VmwareSourceDetails),
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Source" });

export interface ExtendMigrationRequest {}

export const ExtendMigrationRequest: Schema.Schema<ExtendMigrationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "ExtendMigrationRequest",
  });

export interface VmwareVmsDetails {
  /** The details of the vmware VMs. */
  details?: ReadonlyArray<VmwareVmDetails>;
}

export const VmwareVmsDetails: Schema.Schema<VmwareVmsDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    details: Schema.optional(Schema.Array(VmwareVmDetails)),
  }).annotate({ identifier: "VmwareVmsDetails" });

export interface AwsVmsDetails {
  /** The details of the AWS VMs. */
  details?: ReadonlyArray<AwsVmDetails>;
}

export const AwsVmsDetails: Schema.Schema<AwsVmsDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    details: Schema.optional(Schema.Array(AwsVmDetails)),
  }).annotate({ identifier: "AwsVmsDetails" });

export interface AzureVmDetails {
  /** Description of the data disks. */
  disks?: ReadonlyArray<Disk>;
  /** The VM Boot Option. */
  bootOption?: "BOOT_OPTION_UNSPECIFIED" | "EFI" | "BIOS" | (string & {});
  /** The CPU architecture. */
  architecture?:
    | "VM_ARCHITECTURE_UNSPECIFIED"
    | "VM_ARCHITECTURE_X86_FAMILY"
    | "VM_ARCHITECTURE_ARM64"
    | (string & {});
  /** The total size of the storage allocated to the VM in MB. */
  committedStorageMb?: string;
  /** Description of the OS disk. */
  osDisk?: OSDisk;
  /** The memory size of the VM in MB. */
  memoryMb?: number;
  /** Description of the OS. */
  osDescription?: OSDescription;
  /** The number of cpus the VM has. */
  cpuCount?: number;
  /** The number of disks the VM has, including OS disk. */
  diskCount?: number;
  /** The VM's ComputerName. */
  computerName?: string;
  /** The power state of the VM at the moment list was taken. */
  powerState?:
    | "POWER_STATE_UNSPECIFIED"
    | "STARTING"
    | "RUNNING"
    | "STOPPING"
    | "STOPPED"
    | "DEALLOCATING"
    | "DEALLOCATED"
    | "UNKNOWN"
    | (string & {});
  /** The VM full path in Azure. */
  vmId?: string;
  /** VM size as configured in Azure. Determines the VM's hardware spec. */
  vmSize?: string;
  /** The tags of the VM. */
  tags?: Record<string, string>;
}

export const AzureVmDetails: Schema.Schema<AzureVmDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    disks: Schema.optional(Schema.Array(Disk)),
    bootOption: Schema.optional(Schema.String),
    architecture: Schema.optional(Schema.String),
    committedStorageMb: Schema.optional(Schema.String),
    osDisk: Schema.optional(OSDisk),
    memoryMb: Schema.optional(Schema.Number),
    osDescription: Schema.optional(OSDescription),
    cpuCount: Schema.optional(Schema.Number),
    diskCount: Schema.optional(Schema.Number),
    computerName: Schema.optional(Schema.String),
    powerState: Schema.optional(Schema.String),
    vmId: Schema.optional(Schema.String),
    vmSize: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "AzureVmDetails" });

export interface AzureVmsDetails {
  /** The details of the Azure VMs. */
  details?: ReadonlyArray<AzureVmDetails>;
}

export const AzureVmsDetails: Schema.Schema<AzureVmsDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    details: Schema.optional(Schema.Array(AzureVmDetails)),
  }).annotate({ identifier: "AzureVmsDetails" });

export interface FetchInventoryResponse {
  /** The description of the VMs in a Source of type Vmware. */
  vmwareVms?: VmwareVmsDetails;
  /** The description of the VMs in a Source of type AWS. */
  awsVms?: AwsVmsDetails;
  /** Output only. The timestamp when the source was last queried (if the result is from the cache). */
  updateTime?: string;
  /** The description of the VMs in a Source of type Azure. */
  azureVms?: AzureVmsDetails;
  /** Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const FetchInventoryResponse: Schema.Schema<FetchInventoryResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vmwareVms: Schema.optional(VmwareVmsDetails),
    awsVms: Schema.optional(AwsVmsDetails),
    updateTime: Schema.optional(Schema.String),
    azureVms: Schema.optional(AzureVmsDetails),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "FetchInventoryResponse" });

export interface MigrationError {
  /** Output only. The error code. */
  code?:
    | "ERROR_CODE_UNSPECIFIED"
    | "UNKNOWN_ERROR"
    | "SOURCE_VALIDATION_ERROR"
    | "SOURCE_REPLICATION_ERROR"
    | "TARGET_REPLICATION_ERROR"
    | "OS_ADAPTATION_ERROR"
    | "CLONE_ERROR"
    | "CUTOVER_ERROR"
    | "UTILIZATION_REPORT_ERROR"
    | "APPLIANCE_UPGRADE_ERROR"
    | "IMAGE_IMPORT_ERROR"
    | "DISK_MIGRATION_ERROR"
    | (string & {});
  /** Output only. The localized error message. */
  errorMessage?: LocalizedMessage;
  /** Output only. URL(s) pointing to additional information on handling the current error. */
  helpLinks?: ReadonlyArray<Link>;
  /** Output only. The time the error occurred. */
  errorTime?: string;
  /** Output only. Suggested action for solving the error. */
  actionItem?: LocalizedMessage;
}

export const MigrationError: Schema.Schema<MigrationError> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.String),
    errorMessage: Schema.optional(LocalizedMessage),
    helpLinks: Schema.optional(Schema.Array(Link)),
    errorTime: Schema.optional(Schema.String),
    actionItem: Schema.optional(LocalizedMessage),
  }).annotate({ identifier: "MigrationError" });

export interface ResumeMigrationRequest {}

export const ResumeMigrationRequest: Schema.Schema<ResumeMigrationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "ResumeMigrationRequest",
  });

export interface StartMigrationRequest {}

export const StartMigrationRequest: Schema.Schema<StartMigrationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "StartMigrationRequest",
  });

export interface AddGroupMigrationRequest {
  /** The full path name of the MigratingVm to add. */
  migratingVm?: string;
}

export const AddGroupMigrationRequest: Schema.Schema<AddGroupMigrationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    migratingVm: Schema.optional(Schema.String),
  }).annotate({ identifier: "AddGroupMigrationRequest" });

export interface CancelOperationRequest {}

export const CancelOperationRequest: Schema.Schema<CancelOperationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelOperationRequest",
  });

export interface RemoveGroupMigrationRequest {
  /** The MigratingVm to remove. */
  migratingVm?: string;
}

export const RemoveGroupMigrationRequest: Schema.Schema<RemoveGroupMigrationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    migratingVm: Schema.optional(Schema.String),
  }).annotate({ identifier: "RemoveGroupMigrationRequest" });

export interface OperationMetadata {
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
}

export const OperationMetadata: Schema.Schema<OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    statusMessage: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "OperationMetadata" });

export interface PauseMigrationRequest {}

export const PauseMigrationRequest: Schema.Schema<PauseMigrationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "PauseMigrationRequest",
  });

export interface ListSourcesResponse {
  /** Output only. Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** Output only. The list of sources response. */
  sources?: ReadonlyArray<Source>;
  /** Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListSourcesResponse: Schema.Schema<ListSourcesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    sources: Schema.optional(Schema.Array(Source)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListSourcesResponse" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

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

export interface GetProjectsLocationsRequest {
  /** Resource name for the location. */
  name: string;
}

export const GetProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+name}" }),
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
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** The resource that owns the locations collection, if applicable. */
  name: string;
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+name}/locations" }),
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

export interface FetchStorageInventoryProjectsLocationsSourcesRequest {
  /** Optional. If this flag is set to true, the source will be queried instead of using cached results. Using this flag will make the call slower. */
  forceRefresh?: boolean;
  /** Optional. A page token, received from a previous `FetchStorageInventory` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `FetchStorageInventory` must match the call that provided the page token. */
  pageToken?: string;
  /** Required. The name of the Source. */
  source: string;
  /** Optional. The maximum number of VMs to return. The service may return fewer than this value. */
  pageSize?: number;
  /** Required. The type of the storage inventory to fetch. */
  type?: "STORAGE_TYPE_UNSPECIFIED" | "DISKS" | "SNAPSHOTS" | (string & {});
}

export const FetchStorageInventoryProjectsLocationsSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    forceRefresh: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("forceRefresh"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    source: Schema.String.pipe(T.HttpPath("source")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    type: Schema.optional(Schema.String).pipe(T.HttpQuery("type")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+source}:fetchStorageInventory" }),
    svc,
  ) as unknown as Schema.Schema<FetchStorageInventoryProjectsLocationsSourcesRequest>;

export type FetchStorageInventoryProjectsLocationsSourcesResponse =
  FetchStorageInventoryResponse;
export const FetchStorageInventoryProjectsLocationsSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ FetchStorageInventoryResponse;

export type FetchStorageInventoryProjectsLocationsSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List remote source's inventory of storage resources. The remote source is another cloud vendor (e.g. AWS, Azure). The inventory describes the list of existing storage resources in that source. Note that this operation lists the resources on the remote source, as opposed to listing the MigratingVms resources in the vmmigration service. */
export const fetchStorageInventoryProjectsLocationsSources: API.PaginatedOperationMethod<
  FetchStorageInventoryProjectsLocationsSourcesRequest,
  FetchStorageInventoryProjectsLocationsSourcesResponse,
  FetchStorageInventoryProjectsLocationsSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: FetchStorageInventoryProjectsLocationsSourcesRequest,
  output: FetchStorageInventoryProjectsLocationsSourcesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsSourcesRequest {
  /** Required. The Source name. */
  name: string;
}

export const GetProjectsLocationsSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsSourcesRequest>;

export type GetProjectsLocationsSourcesResponse = Source;
export const GetProjectsLocationsSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Source;

export type GetProjectsLocationsSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single Source. */
export const getProjectsLocationsSources: API.OperationMethod<
  GetProjectsLocationsSourcesRequest,
  GetProjectsLocationsSourcesResponse,
  GetProjectsLocationsSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsSourcesRequest,
  output: GetProjectsLocationsSourcesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsSourcesRequest {
  /** Required. The source identifier. */
  sourceId?: string;
  /** A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The Source's parent. */
  parent: string;
  /** Request body */
  body?: Source;
}

export const CreateProjectsLocationsSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceId: Schema.optional(Schema.String).pipe(T.HttpQuery("sourceId")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Source).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+parent}/sources",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsSourcesRequest>;

export type CreateProjectsLocationsSourcesResponse = Operation;
export const CreateProjectsLocationsSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new Source in a given project and location. */
export const createProjectsLocationsSources: API.OperationMethod<
  CreateProjectsLocationsSourcesRequest,
  CreateProjectsLocationsSourcesResponse,
  CreateProjectsLocationsSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsSourcesRequest,
  output: CreateProjectsLocationsSourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsSourcesRequest {
  /** Required. The Source name. */
  name: string;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsSourcesRequest>;

export type DeleteProjectsLocationsSourcesResponse = Operation;
export const DeleteProjectsLocationsSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single Source. */
export const deleteProjectsLocationsSources: API.OperationMethod<
  DeleteProjectsLocationsSourcesRequest,
  DeleteProjectsLocationsSourcesResponse,
  DeleteProjectsLocationsSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsSourcesRequest,
  output: DeleteProjectsLocationsSourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsSourcesRequest {
  /** Optional. The maximum number of sources to return. The service may return fewer than this value. If unspecified, at most 500 sources will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. the order by fields for the result. */
  orderBy?: string;
  /** Required. The parent, which owns this collection of sources. */
  parent: string;
  /** Required. A page token, received from a previous `ListSources` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSources` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. The filter request. */
  filter?: string;
}

export const ListProjectsLocationsSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+parent}/sources" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsSourcesRequest>;

export type ListProjectsLocationsSourcesResponse = ListSourcesResponse;
export const ListProjectsLocationsSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListSourcesResponse;

export type ListProjectsLocationsSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Sources in a given project and location. */
export const listProjectsLocationsSources: API.PaginatedOperationMethod<
  ListProjectsLocationsSourcesRequest,
  ListProjectsLocationsSourcesResponse,
  ListProjectsLocationsSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsSourcesRequest,
  output: ListProjectsLocationsSourcesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface FetchInventoryProjectsLocationsSourcesRequest {
  /** If this flag is set to true, the source will be queried instead of using cached results. Using this flag will make the call slower. */
  forceRefresh?: boolean;
  /** The maximum number of VMs to return. The service may return fewer than this value. For AWS source: If unspecified, at most 500 VMs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. For VMWare source: If unspecified, all VMs will be returned. There is no limit for maximum value. */
  pageSize?: number;
  /** A page token, received from a previous `FetchInventory` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `FetchInventory` must match the call that provided the page token. */
  pageToken?: string;
  /** Required. The name of the Source. */
  source: string;
}

export const FetchInventoryProjectsLocationsSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    forceRefresh: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("forceRefresh"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    source: Schema.String.pipe(T.HttpPath("source")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+source}:fetchInventory" }),
    svc,
  ) as unknown as Schema.Schema<FetchInventoryProjectsLocationsSourcesRequest>;

export type FetchInventoryProjectsLocationsSourcesResponse =
  FetchInventoryResponse;
export const FetchInventoryProjectsLocationsSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ FetchInventoryResponse;

export type FetchInventoryProjectsLocationsSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List remote source's inventory of VMs. The remote source is the onprem vCenter (remote in the sense it's not in Compute Engine). The inventory describes the list of existing VMs in that source. Note that this operation lists the VMs on the remote source, as opposed to listing the MigratingVms resources in the vmmigration service. */
export const fetchInventoryProjectsLocationsSources: API.PaginatedOperationMethod<
  FetchInventoryProjectsLocationsSourcesRequest,
  FetchInventoryProjectsLocationsSourcesResponse,
  FetchInventoryProjectsLocationsSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: FetchInventoryProjectsLocationsSourcesRequest,
  output: FetchInventoryProjectsLocationsSourcesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsSourcesRequest {
  /** Output only. The Source name. */
  name: string;
  /** Field mask is used to specify the fields to be overwritten in the Source resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: Source;
}

export const PatchProjectsLocationsSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(Source).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsSourcesRequest>;

export type PatchProjectsLocationsSourcesResponse = Operation;
export const PatchProjectsLocationsSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single Source. */
export const patchProjectsLocationsSources: API.OperationMethod<
  PatchProjectsLocationsSourcesRequest,
  PatchProjectsLocationsSourcesResponse,
  PatchProjectsLocationsSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsSourcesRequest,
  output: PatchProjectsLocationsSourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsSourcesUtilizationReportsRequest {
  /** Optional. The maximum number of reports to return. The service may return fewer than this value. If unspecified, at most 500 reports will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. the order by fields for the result. */
  orderBy?: string;
  /** Optional. The level of details of each report. Defaults to BASIC. */
  view?:
    | "UTILIZATION_REPORT_VIEW_UNSPECIFIED"
    | "BASIC"
    | "FULL"
    | (string & {});
  /** Required. The Utilization Reports parent. */
  parent: string;
  /** Optional. The filter request. */
  filter?: string;
  /** Required. A page token, received from a previous `ListUtilizationReports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUtilizationReports` must match the call that provided the page token. */
  pageToken?: string;
}

export const ListProjectsLocationsSourcesUtilizationReportsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+parent}/utilizationReports" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsSourcesUtilizationReportsRequest>;

export type ListProjectsLocationsSourcesUtilizationReportsResponse =
  ListUtilizationReportsResponse;
export const ListProjectsLocationsSourcesUtilizationReportsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListUtilizationReportsResponse;

export type ListProjectsLocationsSourcesUtilizationReportsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Utilization Reports of the given Source. */
export const listProjectsLocationsSourcesUtilizationReports: API.PaginatedOperationMethod<
  ListProjectsLocationsSourcesUtilizationReportsRequest,
  ListProjectsLocationsSourcesUtilizationReportsResponse,
  ListProjectsLocationsSourcesUtilizationReportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsSourcesUtilizationReportsRequest,
  output: ListProjectsLocationsSourcesUtilizationReportsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsSourcesUtilizationReportsRequest {
  /** Required. The Utilization Report name. */
  name: string;
  /** Optional. The level of details of the report. Defaults to FULL */
  view?:
    | "UTILIZATION_REPORT_VIEW_UNSPECIFIED"
    | "BASIC"
    | "FULL"
    | (string & {});
}

export const GetProjectsLocationsSourcesUtilizationReportsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsSourcesUtilizationReportsRequest>;

export type GetProjectsLocationsSourcesUtilizationReportsResponse =
  UtilizationReport;
export const GetProjectsLocationsSourcesUtilizationReportsResponse =
  /*@__PURE__*/ /*#__PURE__*/ UtilizationReport;

export type GetProjectsLocationsSourcesUtilizationReportsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a single Utilization Report. */
export const getProjectsLocationsSourcesUtilizationReports: API.OperationMethod<
  GetProjectsLocationsSourcesUtilizationReportsRequest,
  GetProjectsLocationsSourcesUtilizationReportsResponse,
  GetProjectsLocationsSourcesUtilizationReportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsSourcesUtilizationReportsRequest,
  output: GetProjectsLocationsSourcesUtilizationReportsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsSourcesUtilizationReportsRequest {
  /** Required. The ID to use for the report, which will become the final component of the reports's resource name. This value maximum length is 63 characters, and valid characters are /a-z-/. It must start with an english letter and must not end with a hyphen. */
  utilizationReportId?: string;
  /** A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The Utilization Report's parent. */
  parent: string;
  /** Request body */
  body?: UtilizationReport;
}

export const CreateProjectsLocationsSourcesUtilizationReportsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    utilizationReportId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("utilizationReportId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(UtilizationReport).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+parent}/utilizationReports",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsSourcesUtilizationReportsRequest>;

export type CreateProjectsLocationsSourcesUtilizationReportsResponse =
  Operation;
export const CreateProjectsLocationsSourcesUtilizationReportsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsSourcesUtilizationReportsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new UtilizationReport. */
export const createProjectsLocationsSourcesUtilizationReports: API.OperationMethod<
  CreateProjectsLocationsSourcesUtilizationReportsRequest,
  CreateProjectsLocationsSourcesUtilizationReportsResponse,
  CreateProjectsLocationsSourcesUtilizationReportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsSourcesUtilizationReportsRequest,
  output: CreateProjectsLocationsSourcesUtilizationReportsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsSourcesUtilizationReportsRequest {
  /** Required. The Utilization Report name. */
  name: string;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsSourcesUtilizationReportsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsSourcesUtilizationReportsRequest>;

export type DeleteProjectsLocationsSourcesUtilizationReportsResponse =
  Operation;
export const DeleteProjectsLocationsSourcesUtilizationReportsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsSourcesUtilizationReportsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single Utilization Report. */
export const deleteProjectsLocationsSourcesUtilizationReports: API.OperationMethod<
  DeleteProjectsLocationsSourcesUtilizationReportsRequest,
  DeleteProjectsLocationsSourcesUtilizationReportsResponse,
  DeleteProjectsLocationsSourcesUtilizationReportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsSourcesUtilizationReportsRequest,
  output: DeleteProjectsLocationsSourcesUtilizationReportsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsSourcesMigratingVmsRequest {
  /** A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The MigratingVm's parent. */
  parent: string;
  /** Required. The migratingVm identifier. */
  migratingVmId?: string;
  /** Request body */
  body?: MigratingVm;
}

export const CreateProjectsLocationsSourcesMigratingVmsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    migratingVmId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("migratingVmId"),
    ),
    body: Schema.optional(MigratingVm).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+parent}/migratingVms",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsSourcesMigratingVmsRequest>;

export type CreateProjectsLocationsSourcesMigratingVmsResponse = Operation;
export const CreateProjectsLocationsSourcesMigratingVmsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsSourcesMigratingVmsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new MigratingVm in a given Source. */
export const createProjectsLocationsSourcesMigratingVms: API.OperationMethod<
  CreateProjectsLocationsSourcesMigratingVmsRequest,
  CreateProjectsLocationsSourcesMigratingVmsResponse,
  CreateProjectsLocationsSourcesMigratingVmsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsSourcesMigratingVmsRequest,
  output: CreateProjectsLocationsSourcesMigratingVmsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsSourcesMigratingVmsRequest {
  /** Required. The name of the MigratingVm. */
  name: string;
  /** Optional. The level of details of the migrating VM. */
  view?:
    | "MIGRATING_VM_VIEW_UNSPECIFIED"
    | "MIGRATING_VM_VIEW_BASIC"
    | "MIGRATING_VM_VIEW_FULL"
    | (string & {});
}

export const GetProjectsLocationsSourcesMigratingVmsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsSourcesMigratingVmsRequest>;

export type GetProjectsLocationsSourcesMigratingVmsResponse = MigratingVm;
export const GetProjectsLocationsSourcesMigratingVmsResponse =
  /*@__PURE__*/ /*#__PURE__*/ MigratingVm;

export type GetProjectsLocationsSourcesMigratingVmsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single MigratingVm. */
export const getProjectsLocationsSourcesMigratingVms: API.OperationMethod<
  GetProjectsLocationsSourcesMigratingVmsRequest,
  GetProjectsLocationsSourcesMigratingVmsResponse,
  GetProjectsLocationsSourcesMigratingVmsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsSourcesMigratingVmsRequest,
  output: GetProjectsLocationsSourcesMigratingVmsResponse,
  errors: [NotFound, Forbidden],
}));

export interface FinalizeMigrationProjectsLocationsSourcesMigratingVmsRequest {
  /** Required. The name of the MigratingVm. */
  migratingVm: string;
  /** Request body */
  body?: FinalizeMigrationRequest;
}

export const FinalizeMigrationProjectsLocationsSourcesMigratingVmsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    migratingVm: Schema.String.pipe(T.HttpPath("migratingVm")),
    body: Schema.optional(FinalizeMigrationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+migratingVm}:finalizeMigration",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<FinalizeMigrationProjectsLocationsSourcesMigratingVmsRequest>;

export type FinalizeMigrationProjectsLocationsSourcesMigratingVmsResponse =
  Operation;
export const FinalizeMigrationProjectsLocationsSourcesMigratingVmsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type FinalizeMigrationProjectsLocationsSourcesMigratingVmsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Marks a migration as completed, deleting migration resources that are no longer being used. Only applicable after cutover is done. */
export const finalizeMigrationProjectsLocationsSourcesMigratingVms: API.OperationMethod<
  FinalizeMigrationProjectsLocationsSourcesMigratingVmsRequest,
  FinalizeMigrationProjectsLocationsSourcesMigratingVmsResponse,
  FinalizeMigrationProjectsLocationsSourcesMigratingVmsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: FinalizeMigrationProjectsLocationsSourcesMigratingVmsRequest,
  output: FinalizeMigrationProjectsLocationsSourcesMigratingVmsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PauseMigrationProjectsLocationsSourcesMigratingVmsRequest {
  /** Required. The name of the MigratingVm. */
  migratingVm: string;
  /** Request body */
  body?: PauseMigrationRequest;
}

export const PauseMigrationProjectsLocationsSourcesMigratingVmsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    migratingVm: Schema.String.pipe(T.HttpPath("migratingVm")),
    body: Schema.optional(PauseMigrationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+migratingVm}:pauseMigration",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PauseMigrationProjectsLocationsSourcesMigratingVmsRequest>;

export type PauseMigrationProjectsLocationsSourcesMigratingVmsResponse =
  Operation;
export const PauseMigrationProjectsLocationsSourcesMigratingVmsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PauseMigrationProjectsLocationsSourcesMigratingVmsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Pauses a migration for a VM. If cycle tasks are running they will be cancelled, preserving source task data. Further replication cycles will not be triggered while the VM is paused. */
export const pauseMigrationProjectsLocationsSourcesMigratingVms: API.OperationMethod<
  PauseMigrationProjectsLocationsSourcesMigratingVmsRequest,
  PauseMigrationProjectsLocationsSourcesMigratingVmsResponse,
  PauseMigrationProjectsLocationsSourcesMigratingVmsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PauseMigrationProjectsLocationsSourcesMigratingVmsRequest,
  output: PauseMigrationProjectsLocationsSourcesMigratingVmsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface StartMigrationProjectsLocationsSourcesMigratingVmsRequest {
  /** Required. The name of the MigratingVm. */
  migratingVm: string;
  /** Request body */
  body?: StartMigrationRequest;
}

export const StartMigrationProjectsLocationsSourcesMigratingVmsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    migratingVm: Schema.String.pipe(T.HttpPath("migratingVm")),
    body: Schema.optional(StartMigrationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+migratingVm}:startMigration",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<StartMigrationProjectsLocationsSourcesMigratingVmsRequest>;

export type StartMigrationProjectsLocationsSourcesMigratingVmsResponse =
  Operation;
export const StartMigrationProjectsLocationsSourcesMigratingVmsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type StartMigrationProjectsLocationsSourcesMigratingVmsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Starts migration for a VM. Starts the process of uploading data and creating snapshots, in replication cycles scheduled by the policy. */
export const startMigrationProjectsLocationsSourcesMigratingVms: API.OperationMethod<
  StartMigrationProjectsLocationsSourcesMigratingVmsRequest,
  StartMigrationProjectsLocationsSourcesMigratingVmsResponse,
  StartMigrationProjectsLocationsSourcesMigratingVmsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StartMigrationProjectsLocationsSourcesMigratingVmsRequest,
  output: StartMigrationProjectsLocationsSourcesMigratingVmsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsSourcesMigratingVmsRequest {
  /** Required. The name of the MigratingVm. */
  name: string;
}

export const DeleteProjectsLocationsSourcesMigratingVmsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsSourcesMigratingVmsRequest>;

export type DeleteProjectsLocationsSourcesMigratingVmsResponse = Operation;
export const DeleteProjectsLocationsSourcesMigratingVmsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsSourcesMigratingVmsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single MigratingVm. */
export const deleteProjectsLocationsSourcesMigratingVms: API.OperationMethod<
  DeleteProjectsLocationsSourcesMigratingVmsRequest,
  DeleteProjectsLocationsSourcesMigratingVmsResponse,
  DeleteProjectsLocationsSourcesMigratingVmsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsSourcesMigratingVmsRequest,
  output: DeleteProjectsLocationsSourcesMigratingVmsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsSourcesMigratingVmsRequest {
  /** Optional. The filter request. */
  filter?: string;
  /** Required. A page token, received from a previous `ListMigratingVms` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMigratingVms` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. The level of details of each migrating VM. */
  view?:
    | "MIGRATING_VM_VIEW_UNSPECIFIED"
    | "MIGRATING_VM_VIEW_BASIC"
    | "MIGRATING_VM_VIEW_FULL"
    | (string & {});
  /** Required. The parent, which owns this collection of MigratingVms. */
  parent: string;
  /** Optional. The maximum number of migrating VMs to return. The service may return fewer than this value. If unspecified, at most 500 migrating VMs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. the order by fields for the result. */
  orderBy?: string;
}

export const ListProjectsLocationsSourcesMigratingVmsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+parent}/migratingVms" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsSourcesMigratingVmsRequest>;

export type ListProjectsLocationsSourcesMigratingVmsResponse =
  ListMigratingVmsResponse;
export const ListProjectsLocationsSourcesMigratingVmsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListMigratingVmsResponse;

export type ListProjectsLocationsSourcesMigratingVmsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists MigratingVms in a given Source. */
export const listProjectsLocationsSourcesMigratingVms: API.PaginatedOperationMethod<
  ListProjectsLocationsSourcesMigratingVmsRequest,
  ListProjectsLocationsSourcesMigratingVmsResponse,
  ListProjectsLocationsSourcesMigratingVmsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsSourcesMigratingVmsRequest,
  output: ListProjectsLocationsSourcesMigratingVmsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ResumeMigrationProjectsLocationsSourcesMigratingVmsRequest {
  /** Required. The name of the MigratingVm. */
  migratingVm: string;
  /** Request body */
  body?: ResumeMigrationRequest;
}

export const ResumeMigrationProjectsLocationsSourcesMigratingVmsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    migratingVm: Schema.String.pipe(T.HttpPath("migratingVm")),
    body: Schema.optional(ResumeMigrationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+migratingVm}:resumeMigration",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ResumeMigrationProjectsLocationsSourcesMigratingVmsRequest>;

export type ResumeMigrationProjectsLocationsSourcesMigratingVmsResponse =
  Operation;
export const ResumeMigrationProjectsLocationsSourcesMigratingVmsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type ResumeMigrationProjectsLocationsSourcesMigratingVmsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Resumes a migration for a VM. When called on a paused migration, will start the process of uploading data and creating snapshots; when called on a completed cut-over migration, will update the migration to active state and start the process of uploading data and creating snapshots. */
export const resumeMigrationProjectsLocationsSourcesMigratingVms: API.OperationMethod<
  ResumeMigrationProjectsLocationsSourcesMigratingVmsRequest,
  ResumeMigrationProjectsLocationsSourcesMigratingVmsResponse,
  ResumeMigrationProjectsLocationsSourcesMigratingVmsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ResumeMigrationProjectsLocationsSourcesMigratingVmsRequest,
  output: ResumeMigrationProjectsLocationsSourcesMigratingVmsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsSourcesMigratingVmsRequest {
  /** Field mask is used to specify the fields to be overwritten in the MigratingVm resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Output only. The identifier of the MigratingVm. */
  name: string;
  /** Request body */
  body?: MigratingVm;
}

export const PatchProjectsLocationsSourcesMigratingVmsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(MigratingVm).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsSourcesMigratingVmsRequest>;

export type PatchProjectsLocationsSourcesMigratingVmsResponse = Operation;
export const PatchProjectsLocationsSourcesMigratingVmsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsSourcesMigratingVmsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single MigratingVm. */
export const patchProjectsLocationsSourcesMigratingVms: API.OperationMethod<
  PatchProjectsLocationsSourcesMigratingVmsRequest,
  PatchProjectsLocationsSourcesMigratingVmsResponse,
  PatchProjectsLocationsSourcesMigratingVmsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsSourcesMigratingVmsRequest,
  output: PatchProjectsLocationsSourcesMigratingVmsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ExtendMigrationProjectsLocationsSourcesMigratingVmsRequest {
  /** Required. The name of the MigratingVm. */
  migratingVm: string;
  /** Request body */
  body?: ExtendMigrationRequest;
}

export const ExtendMigrationProjectsLocationsSourcesMigratingVmsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    migratingVm: Schema.String.pipe(T.HttpPath("migratingVm")),
    body: Schema.optional(ExtendMigrationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+migratingVm}:extendMigration",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ExtendMigrationProjectsLocationsSourcesMigratingVmsRequest>;

export type ExtendMigrationProjectsLocationsSourcesMigratingVmsResponse =
  Operation;
export const ExtendMigrationProjectsLocationsSourcesMigratingVmsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type ExtendMigrationProjectsLocationsSourcesMigratingVmsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Extend the migrating VM time to live. */
export const extendMigrationProjectsLocationsSourcesMigratingVms: API.OperationMethod<
  ExtendMigrationProjectsLocationsSourcesMigratingVmsRequest,
  ExtendMigrationProjectsLocationsSourcesMigratingVmsResponse,
  ExtendMigrationProjectsLocationsSourcesMigratingVmsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExtendMigrationProjectsLocationsSourcesMigratingVmsRequest,
  output: ExtendMigrationProjectsLocationsSourcesMigratingVmsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsSourcesMigratingVmsCutoverJobsRequest {
  /** A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The Cutover's parent. */
  parent: string;
  /** Required. The cutover job identifier. */
  cutoverJobId?: string;
  /** Request body */
  body?: CutoverJob;
}

export const CreateProjectsLocationsSourcesMigratingVmsCutoverJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    cutoverJobId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("cutoverJobId"),
    ),
    body: Schema.optional(CutoverJob).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+parent}/cutoverJobs",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsSourcesMigratingVmsCutoverJobsRequest>;

export type CreateProjectsLocationsSourcesMigratingVmsCutoverJobsResponse =
  Operation;
export const CreateProjectsLocationsSourcesMigratingVmsCutoverJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsSourcesMigratingVmsCutoverJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Initiates a Cutover of a specific migrating VM. The returned LRO is completed when the cutover job resource is created and the job is initiated. */
export const createProjectsLocationsSourcesMigratingVmsCutoverJobs: API.OperationMethod<
  CreateProjectsLocationsSourcesMigratingVmsCutoverJobsRequest,
  CreateProjectsLocationsSourcesMigratingVmsCutoverJobsResponse,
  CreateProjectsLocationsSourcesMigratingVmsCutoverJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsSourcesMigratingVmsCutoverJobsRequest,
  output: CreateProjectsLocationsSourcesMigratingVmsCutoverJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsSourcesMigratingVmsCutoverJobsRequest {
  /** Required. The name of the CutoverJob. */
  name: string;
}

export const GetProjectsLocationsSourcesMigratingVmsCutoverJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsSourcesMigratingVmsCutoverJobsRequest>;

export type GetProjectsLocationsSourcesMigratingVmsCutoverJobsResponse =
  CutoverJob;
export const GetProjectsLocationsSourcesMigratingVmsCutoverJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CutoverJob;

export type GetProjectsLocationsSourcesMigratingVmsCutoverJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single CutoverJob. */
export const getProjectsLocationsSourcesMigratingVmsCutoverJobs: API.OperationMethod<
  GetProjectsLocationsSourcesMigratingVmsCutoverJobsRequest,
  GetProjectsLocationsSourcesMigratingVmsCutoverJobsResponse,
  GetProjectsLocationsSourcesMigratingVmsCutoverJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsSourcesMigratingVmsCutoverJobsRequest,
  output: GetProjectsLocationsSourcesMigratingVmsCutoverJobsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CancelProjectsLocationsSourcesMigratingVmsCutoverJobsRequest {
  /** Required. The cutover job id */
  name: string;
  /** Request body */
  body?: CancelCutoverJobRequest;
}

export const CancelProjectsLocationsSourcesMigratingVmsCutoverJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CancelCutoverJobRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1alpha1/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CancelProjectsLocationsSourcesMigratingVmsCutoverJobsRequest>;

export type CancelProjectsLocationsSourcesMigratingVmsCutoverJobsResponse =
  Operation;
export const CancelProjectsLocationsSourcesMigratingVmsCutoverJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CancelProjectsLocationsSourcesMigratingVmsCutoverJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Initiates the cancellation of a running cutover job. */
export const cancelProjectsLocationsSourcesMigratingVmsCutoverJobs: API.OperationMethod<
  CancelProjectsLocationsSourcesMigratingVmsCutoverJobsRequest,
  CancelProjectsLocationsSourcesMigratingVmsCutoverJobsResponse,
  CancelProjectsLocationsSourcesMigratingVmsCutoverJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelProjectsLocationsSourcesMigratingVmsCutoverJobsRequest,
  output: CancelProjectsLocationsSourcesMigratingVmsCutoverJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsSourcesMigratingVmsCutoverJobsRequest {
  /** Required. A page token, received from a previous `ListCutoverJobs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCutoverJobs` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. The filter request. */
  filter?: string;
  /** Required. The parent, which owns this collection of migrating VMs. */
  parent: string;
  /** Optional. The maximum number of cutover jobs to return. The service may return fewer than this value. If unspecified, at most 500 cutover jobs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. the order by fields for the result. */
  orderBy?: string;
}

export const ListProjectsLocationsSourcesMigratingVmsCutoverJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+parent}/cutoverJobs" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsSourcesMigratingVmsCutoverJobsRequest>;

export type ListProjectsLocationsSourcesMigratingVmsCutoverJobsResponse =
  ListCutoverJobsResponse;
export const ListProjectsLocationsSourcesMigratingVmsCutoverJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListCutoverJobsResponse;

export type ListProjectsLocationsSourcesMigratingVmsCutoverJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the CutoverJobs of a migrating VM. Only 25 most recent CutoverJobs are listed. */
export const listProjectsLocationsSourcesMigratingVmsCutoverJobs: API.PaginatedOperationMethod<
  ListProjectsLocationsSourcesMigratingVmsCutoverJobsRequest,
  ListProjectsLocationsSourcesMigratingVmsCutoverJobsResponse,
  ListProjectsLocationsSourcesMigratingVmsCutoverJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsSourcesMigratingVmsCutoverJobsRequest,
  output: ListProjectsLocationsSourcesMigratingVmsCutoverJobsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CancelProjectsLocationsSourcesMigratingVmsCloneJobsRequest {
  /** Required. The clone job id */
  name: string;
  /** Request body */
  body?: CancelCloneJobRequest;
}

export const CancelProjectsLocationsSourcesMigratingVmsCloneJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CancelCloneJobRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1alpha1/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CancelProjectsLocationsSourcesMigratingVmsCloneJobsRequest>;

export type CancelProjectsLocationsSourcesMigratingVmsCloneJobsResponse =
  Operation;
export const CancelProjectsLocationsSourcesMigratingVmsCloneJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CancelProjectsLocationsSourcesMigratingVmsCloneJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Initiates the cancellation of a running clone job. */
export const cancelProjectsLocationsSourcesMigratingVmsCloneJobs: API.OperationMethod<
  CancelProjectsLocationsSourcesMigratingVmsCloneJobsRequest,
  CancelProjectsLocationsSourcesMigratingVmsCloneJobsResponse,
  CancelProjectsLocationsSourcesMigratingVmsCloneJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelProjectsLocationsSourcesMigratingVmsCloneJobsRequest,
  output: CancelProjectsLocationsSourcesMigratingVmsCloneJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsSourcesMigratingVmsCloneJobsRequest {
  /** Required. The parent, which owns this collection of source VMs. */
  parent: string;
  /** Required. A page token, received from a previous `ListCloneJobs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCloneJobs` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. The filter request. */
  filter?: string;
  /** Optional. The maximum number of clone jobs to return. The service may return fewer than this value. If unspecified, at most 500 clone jobs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. the order by fields for the result. */
  orderBy?: string;
}

export const ListProjectsLocationsSourcesMigratingVmsCloneJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+parent}/cloneJobs" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsSourcesMigratingVmsCloneJobsRequest>;

export type ListProjectsLocationsSourcesMigratingVmsCloneJobsResponse =
  ListCloneJobsResponse;
export const ListProjectsLocationsSourcesMigratingVmsCloneJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListCloneJobsResponse;

export type ListProjectsLocationsSourcesMigratingVmsCloneJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the CloneJobs of a migrating VM. Only 25 most recent CloneJobs are listed. */
export const listProjectsLocationsSourcesMigratingVmsCloneJobs: API.PaginatedOperationMethod<
  ListProjectsLocationsSourcesMigratingVmsCloneJobsRequest,
  ListProjectsLocationsSourcesMigratingVmsCloneJobsResponse,
  ListProjectsLocationsSourcesMigratingVmsCloneJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsSourcesMigratingVmsCloneJobsRequest,
  output: ListProjectsLocationsSourcesMigratingVmsCloneJobsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsSourcesMigratingVmsCloneJobsRequest {
  /** Required. The Clone's parent. */
  parent: string;
  /** Required. The clone job identifier. */
  cloneJobId?: string;
  /** A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: CloneJob;
}

export const CreateProjectsLocationsSourcesMigratingVmsCloneJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    cloneJobId: Schema.optional(Schema.String).pipe(T.HttpQuery("cloneJobId")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(CloneJob).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+parent}/cloneJobs",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsSourcesMigratingVmsCloneJobsRequest>;

export type CreateProjectsLocationsSourcesMigratingVmsCloneJobsResponse =
  Operation;
export const CreateProjectsLocationsSourcesMigratingVmsCloneJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsSourcesMigratingVmsCloneJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Initiates a Clone of a specific migrating VM. */
export const createProjectsLocationsSourcesMigratingVmsCloneJobs: API.OperationMethod<
  CreateProjectsLocationsSourcesMigratingVmsCloneJobsRequest,
  CreateProjectsLocationsSourcesMigratingVmsCloneJobsResponse,
  CreateProjectsLocationsSourcesMigratingVmsCloneJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsSourcesMigratingVmsCloneJobsRequest,
  output: CreateProjectsLocationsSourcesMigratingVmsCloneJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsSourcesMigratingVmsCloneJobsRequest {
  /** Required. The name of the CloneJob. */
  name: string;
}

export const GetProjectsLocationsSourcesMigratingVmsCloneJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsSourcesMigratingVmsCloneJobsRequest>;

export type GetProjectsLocationsSourcesMigratingVmsCloneJobsResponse = CloneJob;
export const GetProjectsLocationsSourcesMigratingVmsCloneJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CloneJob;

export type GetProjectsLocationsSourcesMigratingVmsCloneJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single CloneJob. */
export const getProjectsLocationsSourcesMigratingVmsCloneJobs: API.OperationMethod<
  GetProjectsLocationsSourcesMigratingVmsCloneJobsRequest,
  GetProjectsLocationsSourcesMigratingVmsCloneJobsResponse,
  GetProjectsLocationsSourcesMigratingVmsCloneJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsSourcesMigratingVmsCloneJobsRequest,
  output: GetProjectsLocationsSourcesMigratingVmsCloneJobsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsSourcesMigratingVmsReplicationCyclesRequest {
  /** Optional. The maximum number of replication cycles to return. The service may return fewer than this value. If unspecified, at most 100 migrating VMs will be returned. The maximum value is 100; values above 100 will be coerced to 100. */
  pageSize?: number;
  /** Optional. the order by fields for the result. */
  orderBy?: string;
  /** Required. A page token, received from a previous `ListReplicationCycles` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListReplicationCycles` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. The filter request. */
  filter?: string;
  /** Required. The parent, which owns this collection of ReplicationCycles. */
  parent: string;
}

export const ListProjectsLocationsSourcesMigratingVmsReplicationCyclesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+parent}/replicationCycles" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsSourcesMigratingVmsReplicationCyclesRequest>;

export type ListProjectsLocationsSourcesMigratingVmsReplicationCyclesResponse =
  ListReplicationCyclesResponse;
export const ListProjectsLocationsSourcesMigratingVmsReplicationCyclesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListReplicationCyclesResponse;

export type ListProjectsLocationsSourcesMigratingVmsReplicationCyclesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists ReplicationCycles in a given MigratingVM. */
export const listProjectsLocationsSourcesMigratingVmsReplicationCycles: API.PaginatedOperationMethod<
  ListProjectsLocationsSourcesMigratingVmsReplicationCyclesRequest,
  ListProjectsLocationsSourcesMigratingVmsReplicationCyclesResponse,
  ListProjectsLocationsSourcesMigratingVmsReplicationCyclesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsSourcesMigratingVmsReplicationCyclesRequest,
  output: ListProjectsLocationsSourcesMigratingVmsReplicationCyclesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsSourcesMigratingVmsReplicationCyclesRequest {
  /** Required. The name of the ReplicationCycle. */
  name: string;
}

export const GetProjectsLocationsSourcesMigratingVmsReplicationCyclesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsSourcesMigratingVmsReplicationCyclesRequest>;

export type GetProjectsLocationsSourcesMigratingVmsReplicationCyclesResponse =
  ReplicationCycle;
export const GetProjectsLocationsSourcesMigratingVmsReplicationCyclesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ReplicationCycle;

export type GetProjectsLocationsSourcesMigratingVmsReplicationCyclesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single ReplicationCycle. */
export const getProjectsLocationsSourcesMigratingVmsReplicationCycles: API.OperationMethod<
  GetProjectsLocationsSourcesMigratingVmsReplicationCyclesRequest,
  GetProjectsLocationsSourcesMigratingVmsReplicationCyclesResponse,
  GetProjectsLocationsSourcesMigratingVmsReplicationCyclesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsSourcesMigratingVmsReplicationCyclesRequest,
  output: GetProjectsLocationsSourcesMigratingVmsReplicationCyclesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CancelProjectsLocationsSourcesDiskMigrationJobsRequest {
  /** Required. The name of the DiskMigrationJob. */
  name: string;
  /** Request body */
  body?: CancelDiskMigrationJobRequest;
}

export const CancelProjectsLocationsSourcesDiskMigrationJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CancelDiskMigrationJobRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1alpha1/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CancelProjectsLocationsSourcesDiskMigrationJobsRequest>;

export type CancelProjectsLocationsSourcesDiskMigrationJobsResponse = Operation;
export const CancelProjectsLocationsSourcesDiskMigrationJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CancelProjectsLocationsSourcesDiskMigrationJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Cancels the disk migration job. */
export const cancelProjectsLocationsSourcesDiskMigrationJobs: API.OperationMethod<
  CancelProjectsLocationsSourcesDiskMigrationJobsRequest,
  CancelProjectsLocationsSourcesDiskMigrationJobsResponse,
  CancelProjectsLocationsSourcesDiskMigrationJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelProjectsLocationsSourcesDiskMigrationJobsRequest,
  output: CancelProjectsLocationsSourcesDiskMigrationJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsSourcesDiskMigrationJobsRequest {
  /** Optional. Field mask is used to specify the fields to be overwritten in the DiskMigrationJob resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask, then a mask equivalent to all fields that are populated (have a non-empty value), will be implied. */
  updateMask?: string;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request timed out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Output only. Identifier. The identifier of the DiskMigrationJob. */
  name: string;
  /** Request body */
  body?: DiskMigrationJob;
}

export const PatchProjectsLocationsSourcesDiskMigrationJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(DiskMigrationJob).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsSourcesDiskMigrationJobsRequest>;

export type PatchProjectsLocationsSourcesDiskMigrationJobsResponse = Operation;
export const PatchProjectsLocationsSourcesDiskMigrationJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsSourcesDiskMigrationJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single DiskMigrationJob. */
export const patchProjectsLocationsSourcesDiskMigrationJobs: API.OperationMethod<
  PatchProjectsLocationsSourcesDiskMigrationJobsRequest,
  PatchProjectsLocationsSourcesDiskMigrationJobsResponse,
  PatchProjectsLocationsSourcesDiskMigrationJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsSourcesDiskMigrationJobsRequest,
  output: PatchProjectsLocationsSourcesDiskMigrationJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsSourcesDiskMigrationJobsRequest {
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request timed out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The DiskMigrationJob identifier. The maximum length of this value is 63 characters. Valid characters are lower case Latin letters, digits and hyphen. It must start with a Latin letter and must not end with a hyphen. */
  diskMigrationJobId?: string;
  /** Required. The DiskMigrationJob's parent. */
  parent: string;
  /** Request body */
  body?: DiskMigrationJob;
}

export const CreateProjectsLocationsSourcesDiskMigrationJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    diskMigrationJobId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("diskMigrationJobId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(DiskMigrationJob).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+parent}/diskMigrationJobs",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsSourcesDiskMigrationJobsRequest>;

export type CreateProjectsLocationsSourcesDiskMigrationJobsResponse = Operation;
export const CreateProjectsLocationsSourcesDiskMigrationJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsSourcesDiskMigrationJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new disk migration job in a given Source. */
export const createProjectsLocationsSourcesDiskMigrationJobs: API.OperationMethod<
  CreateProjectsLocationsSourcesDiskMigrationJobsRequest,
  CreateProjectsLocationsSourcesDiskMigrationJobsResponse,
  CreateProjectsLocationsSourcesDiskMigrationJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsSourcesDiskMigrationJobsRequest,
  output: CreateProjectsLocationsSourcesDiskMigrationJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsSourcesDiskMigrationJobsRequest {
  /** Required. The name of the DiskMigrationJob. */
  name: string;
}

export const GetProjectsLocationsSourcesDiskMigrationJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsSourcesDiskMigrationJobsRequest>;

export type GetProjectsLocationsSourcesDiskMigrationJobsResponse =
  DiskMigrationJob;
export const GetProjectsLocationsSourcesDiskMigrationJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ DiskMigrationJob;

export type GetProjectsLocationsSourcesDiskMigrationJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single DiskMigrationJob. */
export const getProjectsLocationsSourcesDiskMigrationJobs: API.OperationMethod<
  GetProjectsLocationsSourcesDiskMigrationJobsRequest,
  GetProjectsLocationsSourcesDiskMigrationJobsResponse,
  GetProjectsLocationsSourcesDiskMigrationJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsSourcesDiskMigrationJobsRequest,
  output: GetProjectsLocationsSourcesDiskMigrationJobsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsSourcesDiskMigrationJobsRequest {
  /** Required. The name of the DiskMigrationJob. */
  name: string;
}

export const DeleteProjectsLocationsSourcesDiskMigrationJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsSourcesDiskMigrationJobsRequest>;

export type DeleteProjectsLocationsSourcesDiskMigrationJobsResponse = Operation;
export const DeleteProjectsLocationsSourcesDiskMigrationJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsSourcesDiskMigrationJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single DiskMigrationJob. */
export const deleteProjectsLocationsSourcesDiskMigrationJobs: API.OperationMethod<
  DeleteProjectsLocationsSourcesDiskMigrationJobsRequest,
  DeleteProjectsLocationsSourcesDiskMigrationJobsResponse,
  DeleteProjectsLocationsSourcesDiskMigrationJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsSourcesDiskMigrationJobsRequest,
  output: DeleteProjectsLocationsSourcesDiskMigrationJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsSourcesDiskMigrationJobsRequest {
  /** Required. The parent, which owns this collection of DiskMigrationJobs. */
  parent: string;
  /** Optional. A page token, received from a previous `ListDiskMigrationJobs` call. Provide this to retrieve the subsequent page. When paginating, all parameters provided to `ListDiskMigrationJobs` except `page_size` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. The filter request (according to AIP-160). */
  filter?: string;
  /** Optional. The maximum number of disk migration jobs to return. The service may return fewer than this value. If unspecified, at most 500 disk migration jobs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. Ordering of the result list. */
  orderBy?: string;
}

export const ListProjectsLocationsSourcesDiskMigrationJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+parent}/diskMigrationJobs" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsSourcesDiskMigrationJobsRequest>;

export type ListProjectsLocationsSourcesDiskMigrationJobsResponse =
  ListDiskMigrationJobsResponse;
export const ListProjectsLocationsSourcesDiskMigrationJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListDiskMigrationJobsResponse;

export type ListProjectsLocationsSourcesDiskMigrationJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists DiskMigrationJobs in a given Source. */
export const listProjectsLocationsSourcesDiskMigrationJobs: API.PaginatedOperationMethod<
  ListProjectsLocationsSourcesDiskMigrationJobsRequest,
  ListProjectsLocationsSourcesDiskMigrationJobsResponse,
  ListProjectsLocationsSourcesDiskMigrationJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsSourcesDiskMigrationJobsRequest,
  output: ListProjectsLocationsSourcesDiskMigrationJobsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface RunProjectsLocationsSourcesDiskMigrationJobsRequest {
  /** Required. The name of the DiskMigrationJob. */
  name: string;
  /** Request body */
  body?: RunDiskMigrationJobRequest;
}

export const RunProjectsLocationsSourcesDiskMigrationJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(RunDiskMigrationJobRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1alpha1/{+name}:run", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<RunProjectsLocationsSourcesDiskMigrationJobsRequest>;

export type RunProjectsLocationsSourcesDiskMigrationJobsResponse = Operation;
export const RunProjectsLocationsSourcesDiskMigrationJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type RunProjectsLocationsSourcesDiskMigrationJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Runs the disk migration job. */
export const runProjectsLocationsSourcesDiskMigrationJobs: API.OperationMethod<
  RunProjectsLocationsSourcesDiskMigrationJobsRequest,
  RunProjectsLocationsSourcesDiskMigrationJobsResponse,
  RunProjectsLocationsSourcesDiskMigrationJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RunProjectsLocationsSourcesDiskMigrationJobsRequest,
  output: RunProjectsLocationsSourcesDiskMigrationJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpgradeApplianceProjectsLocationsSourcesDatacenterConnectorsRequest {
  /** Required. The DatacenterConnector name. */
  datacenterConnector: string;
  /** Request body */
  body?: UpgradeApplianceRequest;
}

export const UpgradeApplianceProjectsLocationsSourcesDatacenterConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    datacenterConnector: Schema.String.pipe(T.HttpPath("datacenterConnector")),
    body: Schema.optional(UpgradeApplianceRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+datacenterConnector}:upgradeAppliance",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpgradeApplianceProjectsLocationsSourcesDatacenterConnectorsRequest>;

export type UpgradeApplianceProjectsLocationsSourcesDatacenterConnectorsResponse =
  Operation;
export const UpgradeApplianceProjectsLocationsSourcesDatacenterConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type UpgradeApplianceProjectsLocationsSourcesDatacenterConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Upgrades the appliance relate to this DatacenterConnector to the in-place updateable version. */
export const upgradeApplianceProjectsLocationsSourcesDatacenterConnectors: API.OperationMethod<
  UpgradeApplianceProjectsLocationsSourcesDatacenterConnectorsRequest,
  UpgradeApplianceProjectsLocationsSourcesDatacenterConnectorsResponse,
  UpgradeApplianceProjectsLocationsSourcesDatacenterConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpgradeApplianceProjectsLocationsSourcesDatacenterConnectorsRequest,
  output: UpgradeApplianceProjectsLocationsSourcesDatacenterConnectorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsSourcesDatacenterConnectorsRequest {
  /** Required. The name of the DatacenterConnector. */
  name: string;
}

export const GetProjectsLocationsSourcesDatacenterConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsSourcesDatacenterConnectorsRequest>;

export type GetProjectsLocationsSourcesDatacenterConnectorsResponse =
  DatacenterConnector;
export const GetProjectsLocationsSourcesDatacenterConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ DatacenterConnector;

export type GetProjectsLocationsSourcesDatacenterConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single DatacenterConnector. */
export const getProjectsLocationsSourcesDatacenterConnectors: API.OperationMethod<
  GetProjectsLocationsSourcesDatacenterConnectorsRequest,
  GetProjectsLocationsSourcesDatacenterConnectorsResponse,
  GetProjectsLocationsSourcesDatacenterConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsSourcesDatacenterConnectorsRequest,
  output: GetProjectsLocationsSourcesDatacenterConnectorsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsSourcesDatacenterConnectorsRequest {
  /** A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The datacenterConnector identifier. */
  datacenterConnectorId?: string;
  /** Required. The DatacenterConnector's parent. Required. The Source in where the new DatacenterConnector will be created. For example: `projects/my-project/locations/us-central1/sources/my-source` */
  parent: string;
  /** Request body */
  body?: DatacenterConnector;
}

export const CreateProjectsLocationsSourcesDatacenterConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    datacenterConnectorId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("datacenterConnectorId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(DatacenterConnector).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+parent}/datacenterConnectors",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsSourcesDatacenterConnectorsRequest>;

export type CreateProjectsLocationsSourcesDatacenterConnectorsResponse =
  Operation;
export const CreateProjectsLocationsSourcesDatacenterConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsSourcesDatacenterConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new DatacenterConnector in a given Source. */
export const createProjectsLocationsSourcesDatacenterConnectors: API.OperationMethod<
  CreateProjectsLocationsSourcesDatacenterConnectorsRequest,
  CreateProjectsLocationsSourcesDatacenterConnectorsResponse,
  CreateProjectsLocationsSourcesDatacenterConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsSourcesDatacenterConnectorsRequest,
  output: CreateProjectsLocationsSourcesDatacenterConnectorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsSourcesDatacenterConnectorsRequest {
  /** Required. The DatacenterConnector name. */
  name: string;
  /** A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsSourcesDatacenterConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsSourcesDatacenterConnectorsRequest>;

export type DeleteProjectsLocationsSourcesDatacenterConnectorsResponse =
  Operation;
export const DeleteProjectsLocationsSourcesDatacenterConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsSourcesDatacenterConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single DatacenterConnector. */
export const deleteProjectsLocationsSourcesDatacenterConnectors: API.OperationMethod<
  DeleteProjectsLocationsSourcesDatacenterConnectorsRequest,
  DeleteProjectsLocationsSourcesDatacenterConnectorsResponse,
  DeleteProjectsLocationsSourcesDatacenterConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsSourcesDatacenterConnectorsRequest,
  output: DeleteProjectsLocationsSourcesDatacenterConnectorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsSourcesDatacenterConnectorsRequest {
  /** Optional. The maximum number of connectors to return. The service may return fewer than this value. If unspecified, at most 500 sources will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. the order by fields for the result. */
  orderBy?: string;
  /** Optional. The filter request. */
  filter?: string;
  /** Required. A page token, received from a previous `ListDatacenterConnectors` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDatacenterConnectors` must match the call that provided the page token. */
  pageToken?: string;
  /** Required. The parent, which owns this collection of connectors. */
  parent: string;
}

export const ListProjectsLocationsSourcesDatacenterConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+parent}/datacenterConnectors" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsSourcesDatacenterConnectorsRequest>;

export type ListProjectsLocationsSourcesDatacenterConnectorsResponse =
  ListDatacenterConnectorsResponse;
export const ListProjectsLocationsSourcesDatacenterConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListDatacenterConnectorsResponse;

export type ListProjectsLocationsSourcesDatacenterConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists DatacenterConnectors in a given Source. */
export const listProjectsLocationsSourcesDatacenterConnectors: API.PaginatedOperationMethod<
  ListProjectsLocationsSourcesDatacenterConnectorsRequest,
  ListProjectsLocationsSourcesDatacenterConnectorsResponse,
  ListProjectsLocationsSourcesDatacenterConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsSourcesDatacenterConnectorsRequest,
  output: ListProjectsLocationsSourcesDatacenterConnectorsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsTargetProjectsRequest {
  /** Required. The TargetProject name. */
  name: string;
}

export const GetProjectsLocationsTargetProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsTargetProjectsRequest>;

export type GetProjectsLocationsTargetProjectsResponse = TargetProject;
export const GetProjectsLocationsTargetProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TargetProject;

export type GetProjectsLocationsTargetProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`. */
export const getProjectsLocationsTargetProjects: API.OperationMethod<
  GetProjectsLocationsTargetProjectsRequest,
  GetProjectsLocationsTargetProjectsResponse,
  GetProjectsLocationsTargetProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsTargetProjectsRequest,
  output: GetProjectsLocationsTargetProjectsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsTargetProjectsRequest {
  /** Required. The TargetProject's parent. */
  parent: string;
  /** Required. The target_project identifier. */
  targetProjectId?: string;
  /** A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: TargetProject;
}

export const CreateProjectsLocationsTargetProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    targetProjectId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("targetProjectId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(TargetProject).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+parent}/targetProjects",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsTargetProjectsRequest>;

export type CreateProjectsLocationsTargetProjectsResponse = Operation;
export const CreateProjectsLocationsTargetProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsTargetProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new TargetProject in a given project. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`. */
export const createProjectsLocationsTargetProjects: API.OperationMethod<
  CreateProjectsLocationsTargetProjectsRequest,
  CreateProjectsLocationsTargetProjectsResponse,
  CreateProjectsLocationsTargetProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsTargetProjectsRequest,
  output: CreateProjectsLocationsTargetProjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsTargetProjectsRequest {
  /** Required. The TargetProject name. */
  name: string;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsTargetProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsTargetProjectsRequest>;

export type DeleteProjectsLocationsTargetProjectsResponse = Operation;
export const DeleteProjectsLocationsTargetProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsTargetProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`. */
export const deleteProjectsLocationsTargetProjects: API.OperationMethod<
  DeleteProjectsLocationsTargetProjectsRequest,
  DeleteProjectsLocationsTargetProjectsResponse,
  DeleteProjectsLocationsTargetProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsTargetProjectsRequest,
  output: DeleteProjectsLocationsTargetProjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsTargetProjectsRequest {
  /** Required. The parent, which owns this collection of targets. */
  parent: string;
  /** Optional. The filter request. */
  filter?: string;
  /** Required. A page token, received from a previous `ListTargets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTargets` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. The maximum number of targets to return. The service may return fewer than this value. If unspecified, at most 500 targets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. the order by fields for the result. */
  orderBy?: string;
}

export const ListProjectsLocationsTargetProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+parent}/targetProjects" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsTargetProjectsRequest>;

export type ListProjectsLocationsTargetProjectsResponse =
  ListTargetProjectsResponse;
export const ListProjectsLocationsTargetProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListTargetProjectsResponse;

export type ListProjectsLocationsTargetProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists TargetProjects in a given project. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`. */
export const listProjectsLocationsTargetProjects: API.PaginatedOperationMethod<
  ListProjectsLocationsTargetProjectsRequest,
  ListProjectsLocationsTargetProjectsResponse,
  ListProjectsLocationsTargetProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsTargetProjectsRequest,
  output: ListProjectsLocationsTargetProjectsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsTargetProjectsRequest {
  /** Field mask is used to specify the fields to be overwritten in the TargetProject resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Output only. The name of the target project. */
  name: string;
  /** Request body */
  body?: TargetProject;
}

export const PatchProjectsLocationsTargetProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(TargetProject).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsTargetProjectsRequest>;

export type PatchProjectsLocationsTargetProjectsResponse = Operation;
export const PatchProjectsLocationsTargetProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsTargetProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`. */
export const patchProjectsLocationsTargetProjects: API.OperationMethod<
  PatchProjectsLocationsTargetProjectsRequest,
  PatchProjectsLocationsTargetProjectsResponse,
  PatchProjectsLocationsTargetProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsTargetProjectsRequest,
  output: PatchProjectsLocationsTargetProjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsImageImportsRequest {
  /** Required. The ImageImport name. */
  name: string;
}

export const GetProjectsLocationsImageImportsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsImageImportsRequest>;

export type GetProjectsLocationsImageImportsResponse = ImageImport;
export const GetProjectsLocationsImageImportsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ImageImport;

export type GetProjectsLocationsImageImportsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single ImageImport. */
export const getProjectsLocationsImageImports: API.OperationMethod<
  GetProjectsLocationsImageImportsRequest,
  GetProjectsLocationsImageImportsResponse,
  GetProjectsLocationsImageImportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsImageImportsRequest,
  output: GetProjectsLocationsImageImportsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsImageImportsRequest {
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The image import identifier. This value maximum length is 63 characters, and valid characters are /a-z-/. It must start with an english letter and must not end with a hyphen. */
  imageImportId?: string;
  /** Required. The ImageImport's parent. */
  parent: string;
  /** Request body */
  body?: ImageImport;
}

export const CreateProjectsLocationsImageImportsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    imageImportId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("imageImportId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(ImageImport).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+parent}/imageImports",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsImageImportsRequest>;

export type CreateProjectsLocationsImageImportsResponse = Operation;
export const CreateProjectsLocationsImageImportsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsImageImportsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new ImageImport in a given project. */
export const createProjectsLocationsImageImports: API.OperationMethod<
  CreateProjectsLocationsImageImportsRequest,
  CreateProjectsLocationsImageImportsResponse,
  CreateProjectsLocationsImageImportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsImageImportsRequest,
  output: CreateProjectsLocationsImageImportsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsImageImportsRequest {
  /** Required. The ImageImport name. */
  name: string;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsImageImportsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsImageImportsRequest>;

export type DeleteProjectsLocationsImageImportsResponse = Operation;
export const DeleteProjectsLocationsImageImportsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsImageImportsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single ImageImport. */
export const deleteProjectsLocationsImageImports: API.OperationMethod<
  DeleteProjectsLocationsImageImportsRequest,
  DeleteProjectsLocationsImageImportsResponse,
  DeleteProjectsLocationsImageImportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsImageImportsRequest,
  output: DeleteProjectsLocationsImageImportsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsImageImportsRequest {
  /** Optional. The maximum number of targets to return. The service may return fewer than this value. If unspecified, at most 500 targets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. The order by fields for the result (according to AIP-132). Currently ordering is only possible by "name" field. */
  orderBy?: string;
  /** Optional. The filter request (according to AIP-160). */
  filter?: string;
  /** Optional. A page token, received from a previous `ListImageImports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListImageImports` must match the call that provided the page token. */
  pageToken?: string;
  /** Required. The parent, which owns this collection of targets. */
  parent: string;
}

export const ListProjectsLocationsImageImportsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+parent}/imageImports" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsImageImportsRequest>;

export type ListProjectsLocationsImageImportsResponse =
  ListImageImportsResponse;
export const ListProjectsLocationsImageImportsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListImageImportsResponse;

export type ListProjectsLocationsImageImportsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists ImageImports in a given project. */
export const listProjectsLocationsImageImports: API.PaginatedOperationMethod<
  ListProjectsLocationsImageImportsRequest,
  ListProjectsLocationsImageImportsResponse,
  ListProjectsLocationsImageImportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsImageImportsRequest,
  output: ListProjectsLocationsImageImportsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsImageImportsImageImportJobsRequest {
  /** Optional. A page token, received from a previous `ListImageImportJobs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListImageImportJobs` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. The filter request (according to AIP-160). */
  filter?: string;
  /** Required. The parent, which owns this collection of targets. */
  parent: string;
  /** Optional. The maximum number of targets to return. The service may return fewer than this value. If unspecified, at most 500 targets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. The order by fields for the result (according to AIP-132). Currently ordering is only possible by "name" field. */
  orderBy?: string;
}

export const ListProjectsLocationsImageImportsImageImportJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+parent}/imageImportJobs" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsImageImportsImageImportJobsRequest>;

export type ListProjectsLocationsImageImportsImageImportJobsResponse =
  ListImageImportJobsResponse;
export const ListProjectsLocationsImageImportsImageImportJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListImageImportJobsResponse;

export type ListProjectsLocationsImageImportsImageImportJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists ImageImportJobs in a given project. */
export const listProjectsLocationsImageImportsImageImportJobs: API.PaginatedOperationMethod<
  ListProjectsLocationsImageImportsImageImportJobsRequest,
  ListProjectsLocationsImageImportsImageImportJobsResponse,
  ListProjectsLocationsImageImportsImageImportJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsImageImportsImageImportJobsRequest,
  output: ListProjectsLocationsImageImportsImageImportJobsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CancelProjectsLocationsImageImportsImageImportJobsRequest {
  /** Required. The image import job id. */
  name: string;
  /** Request body */
  body?: CancelImageImportJobRequest;
}

export const CancelProjectsLocationsImageImportsImageImportJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CancelImageImportJobRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1alpha1/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CancelProjectsLocationsImageImportsImageImportJobsRequest>;

export type CancelProjectsLocationsImageImportsImageImportJobsResponse =
  Operation;
export const CancelProjectsLocationsImageImportsImageImportJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CancelProjectsLocationsImageImportsImageImportJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Initiates the cancellation of a running ImageImportJob. */
export const cancelProjectsLocationsImageImportsImageImportJobs: API.OperationMethod<
  CancelProjectsLocationsImageImportsImageImportJobsRequest,
  CancelProjectsLocationsImageImportsImageImportJobsResponse,
  CancelProjectsLocationsImageImportsImageImportJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelProjectsLocationsImageImportsImageImportJobsRequest,
  output: CancelProjectsLocationsImageImportsImageImportJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsImageImportsImageImportJobsRequest {
  /** Required. The ImageImportJob name. */
  name: string;
}

export const GetProjectsLocationsImageImportsImageImportJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsImageImportsImageImportJobsRequest>;

export type GetProjectsLocationsImageImportsImageImportJobsResponse =
  ImageImportJob;
export const GetProjectsLocationsImageImportsImageImportJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ImageImportJob;

export type GetProjectsLocationsImageImportsImageImportJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single ImageImportJob. */
export const getProjectsLocationsImageImportsImageImportJobs: API.OperationMethod<
  GetProjectsLocationsImageImportsImageImportJobsRequest,
  GetProjectsLocationsImageImportsImageImportJobsResponse,
  GetProjectsLocationsImageImportsImageImportJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsImageImportsImageImportJobsRequest,
  output: GetProjectsLocationsImageImportsImageImportJobsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsOperationsRequest {
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The standard list page size. */
  pageSize?: number;
  /** The name of the operation's parent resource. */
  name: string;
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
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    name: Schema.String.pipe(T.HttpPath("name")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+name}/operations" }),
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
    T.Http({ method: "POST", path: "v1alpha1/{+name}:cancel", hasBody: true }),
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
    T.Http({ method: "GET", path: "v1alpha1/{+name}" }),
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
    T.Http({ method: "DELETE", path: "v1alpha1/{+name}" }),
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

export interface RemoveGroupMigrationProjectsLocationsGroupsRequest {
  /** Required. The name of the Group. */
  group: string;
  /** Request body */
  body?: RemoveGroupMigrationRequest;
}

export const RemoveGroupMigrationProjectsLocationsGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    group: Schema.String.pipe(T.HttpPath("group")),
    body: Schema.optional(RemoveGroupMigrationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+group}:removeGroupMigration",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RemoveGroupMigrationProjectsLocationsGroupsRequest>;

export type RemoveGroupMigrationProjectsLocationsGroupsResponse = Operation;
export const RemoveGroupMigrationProjectsLocationsGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type RemoveGroupMigrationProjectsLocationsGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Removes a MigratingVm from a Group. */
export const removeGroupMigrationProjectsLocationsGroups: API.OperationMethod<
  RemoveGroupMigrationProjectsLocationsGroupsRequest,
  RemoveGroupMigrationProjectsLocationsGroupsResponse,
  RemoveGroupMigrationProjectsLocationsGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RemoveGroupMigrationProjectsLocationsGroupsRequest,
  output: RemoveGroupMigrationProjectsLocationsGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsGroupsRequest {
  /** Field mask is used to specify the fields to be overwritten in the Group resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Output only. The Group name. */
  name: string;
  /** Request body */
  body?: Group;
}

export const PatchProjectsLocationsGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Group).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsGroupsRequest>;

export type PatchProjectsLocationsGroupsResponse = Operation;
export const PatchProjectsLocationsGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single Group. */
export const patchProjectsLocationsGroups: API.OperationMethod<
  PatchProjectsLocationsGroupsRequest,
  PatchProjectsLocationsGroupsResponse,
  PatchProjectsLocationsGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsGroupsRequest,
  output: PatchProjectsLocationsGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface AddGroupMigrationProjectsLocationsGroupsRequest {
  /** Required. The full path name of the Group to add to. */
  group: string;
  /** Request body */
  body?: AddGroupMigrationRequest;
}

export const AddGroupMigrationProjectsLocationsGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    group: Schema.String.pipe(T.HttpPath("group")),
    body: Schema.optional(AddGroupMigrationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+group}:addGroupMigration",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AddGroupMigrationProjectsLocationsGroupsRequest>;

export type AddGroupMigrationProjectsLocationsGroupsResponse = Operation;
export const AddGroupMigrationProjectsLocationsGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type AddGroupMigrationProjectsLocationsGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Adds a MigratingVm to a Group. */
export const addGroupMigrationProjectsLocationsGroups: API.OperationMethod<
  AddGroupMigrationProjectsLocationsGroupsRequest,
  AddGroupMigrationProjectsLocationsGroupsResponse,
  AddGroupMigrationProjectsLocationsGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AddGroupMigrationProjectsLocationsGroupsRequest,
  output: AddGroupMigrationProjectsLocationsGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsGroupsRequest {
  /** Optional. The maximum number of groups to return. The service may return fewer than this value. If unspecified, at most 500 groups will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. the order by fields for the result. */
  orderBy?: string;
  /** Optional. The filter request. */
  filter?: string;
  /** Required. A page token, received from a previous `ListGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListGroups` must match the call that provided the page token. */
  pageToken?: string;
  /** Required. The parent, which owns this collection of groups. */
  parent: string;
}

export const ListProjectsLocationsGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+parent}/groups" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsGroupsRequest>;

export type ListProjectsLocationsGroupsResponse = ListGroupsResponse;
export const ListProjectsLocationsGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListGroupsResponse;

export type ListProjectsLocationsGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Groups in a given project and location. */
export const listProjectsLocationsGroups: API.PaginatedOperationMethod<
  ListProjectsLocationsGroupsRequest,
  ListProjectsLocationsGroupsResponse,
  ListProjectsLocationsGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsGroupsRequest,
  output: ListProjectsLocationsGroupsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsGroupsRequest {
  /** Required. The group name. */
  name: string;
}

export const GetProjectsLocationsGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsGroupsRequest>;

export type GetProjectsLocationsGroupsResponse = Group;
export const GetProjectsLocationsGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Group;

export type GetProjectsLocationsGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single Group. */
export const getProjectsLocationsGroups: API.OperationMethod<
  GetProjectsLocationsGroupsRequest,
  GetProjectsLocationsGroupsResponse,
  GetProjectsLocationsGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsGroupsRequest,
  output: GetProjectsLocationsGroupsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsGroupsRequest {
  /** A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The group identifier. */
  groupId?: string;
  /** Required. The Group's parent. */
  parent: string;
  /** Request body */
  body?: Group;
}

export const CreateProjectsLocationsGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    groupId: Schema.optional(Schema.String).pipe(T.HttpQuery("groupId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Group).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+parent}/groups",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsGroupsRequest>;

export type CreateProjectsLocationsGroupsResponse = Operation;
export const CreateProjectsLocationsGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new Group in a given project and location. */
export const createProjectsLocationsGroups: API.OperationMethod<
  CreateProjectsLocationsGroupsRequest,
  CreateProjectsLocationsGroupsResponse,
  CreateProjectsLocationsGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsGroupsRequest,
  output: CreateProjectsLocationsGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsGroupsRequest {
  /** Required. The Group name. */
  name: string;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsGroupsRequest>;

export type DeleteProjectsLocationsGroupsResponse = Operation;
export const DeleteProjectsLocationsGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single Group. */
export const deleteProjectsLocationsGroups: API.OperationMethod<
  DeleteProjectsLocationsGroupsRequest,
  DeleteProjectsLocationsGroupsResponse,
  DeleteProjectsLocationsGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsGroupsRequest,
  output: DeleteProjectsLocationsGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
