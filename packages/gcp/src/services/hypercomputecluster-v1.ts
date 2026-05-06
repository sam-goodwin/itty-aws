// ==========================================================================
// Cluster Director API (hypercomputecluster v1)
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
  name: "hypercomputecluster",
  version: "v1",
  rootUrl: "https://hypercomputecluster.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface BucketReference {
  /** Output only. Name of the bucket. */
  bucket?: string;
}

export const BucketReference = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  bucket: Schema.optional(Schema.String),
}).annotate({ identifier: "BucketReference" });

export interface ExistingLustreConfig {
  /** Required. Immutable. Name of the Managed Lustre instance to import, in the format `projects/{project}/locations/{location}/instances/{instance}` */
  lustre?: string;
}

export const ExistingLustreConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  lustre: Schema.optional(Schema.String),
}).annotate({ identifier: "ExistingLustreConfig" });

export interface BootDisk {
  /** Required. Immutable. [Persistent disk type](https://cloud.google.com/compute/docs/disks#disk-types), in the format `projects/{project}/zones/{zone}/diskTypes/{disk_type}`. */
  type?: string;
  /** Required. Immutable. Size of the disk in gigabytes. Must be at least 10GB. */
  sizeGb?: string;
}

export const BootDisk = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.String),
  sizeGb: Schema.optional(Schema.String),
}).annotate({ identifier: "BootDisk" });

export interface NewSpotInstancesConfig {
  /** Required. Immutable. Name of the Compute Engine [machine type](https://cloud.google.com/compute/docs/machine-resource) to use, e.g. `n2-standard-2`. */
  machineType?: string;
  /** Required. Immutable. Name of the zone in which VM instances should run, e.g., `us-central1-a`. Must be in the same region as the cluster, and must match the zone of any other resources specified in the cluster. */
  zone?: string;
  /** Optional. Termination action for the instance. If not specified, Compute Engine sets the termination action to DELETE. */
  terminationAction?:
    | "TERMINATION_ACTION_UNSPECIFIED"
    | "STOP"
    | "DELETE"
    | (string & {});
}

export const NewSpotInstancesConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    machineType: Schema.optional(Schema.String),
    zone: Schema.optional(Schema.String),
    terminationAction: Schema.optional(Schema.String),
  },
).annotate({ identifier: "NewSpotInstancesConfig" });

export interface SlurmPartition {
  /** Required. IDs of the nodesets that make up this partition. Values must match SlurmNodeSet.id. */
  nodeSetIds?: ReadonlyArray<string>;
  /** Required. ID of the partition, which is how users will identify it. Must conform to [RFC-1034](https://datatracker.ietf.org/doc/html/rfc1034) (lower-case, alphanumeric, and at most 63 characters). */
  id?: string;
}

export const SlurmPartition = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nodeSetIds: Schema.optional(Schema.Array(Schema.String)),
  id: Schema.optional(Schema.String),
}).annotate({ identifier: "SlurmPartition" });

export interface ComputeInstanceSlurmNodeSet {
  /** Optional. Boot disk for the compute instance */
  bootDisk?: BootDisk;
  /** Optional. [Labels](https://cloud.google.com/compute/docs/labeling-resources) that should be applied to each VM instance in the nodeset. */
  labels?: Record<string, string>;
  /** Optional. [Startup script](https://cloud.google.com/compute/docs/instances/startup-scripts/linux) to be run on each VM instance in the nodeset. Max 256KB. */
  startupScript?: string;
}

export const ComputeInstanceSlurmNodeSet =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bootDisk: Schema.optional(BootDisk),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    startupScript: Schema.optional(Schema.String),
  }).annotate({ identifier: "ComputeInstanceSlurmNodeSet" });

export interface StorageConfig {
  /** Required. ID of the storage resource to mount, which must match a key in the cluster's storage_resources. */
  id?: string;
  /** Required. A directory inside the VM instance's file system where the storage resource should be mounted (e.g., `/mnt/share`). */
  localMount?: string;
}

export const StorageConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  localMount: Schema.optional(Schema.String),
}).annotate({ identifier: "StorageConfig" });

export interface SlurmNodeSet {
  /** Optional. Number of nodes to be statically created for this nodeset. The cluster will attempt to ensure that at least this many nodes exist at all times. */
  staticNodeCount?: string;
  /** Optional. If set, indicates that the nodeset should be backed by Compute Engine instances. */
  computeInstance?: ComputeInstanceSlurmNodeSet;
  /** Required. Identifier for the nodeset, which allows it to be referenced by partitions. Must conform to [RFC-1034](https://datatracker.ietf.org/doc/html/rfc1034) (lower-case, alphanumeric, and at most 63 characters). */
  id?: string;
  /** Optional. Controls how many additional nodes a cluster can bring online to handle workloads. Set this value to enable dynamic node creation and limit the number of additional nodes the cluster can bring online. Leave empty if you do not want the cluster to create nodes dynamically, and instead rely only on static nodes. */
  maxDynamicNodeCount?: string;
  /** Required. ID of the compute resource on which this nodeset will run. Must match a key in the cluster's compute_resources. */
  computeId?: string;
  /** Optional. How storage resources should be mounted on each compute node. */
  storageConfigs?: ReadonlyArray<StorageConfig>;
}

export const SlurmNodeSet = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  staticNodeCount: Schema.optional(Schema.String),
  computeInstance: Schema.optional(ComputeInstanceSlurmNodeSet),
  id: Schema.optional(Schema.String),
  maxDynamicNodeCount: Schema.optional(Schema.String),
  computeId: Schema.optional(Schema.String),
  storageConfigs: Schema.optional(Schema.Array(StorageConfig)),
}).annotate({ identifier: "SlurmNodeSet" });

export interface ComputeInstance {
  /** Output only. Name of the VM instance, in the format `projects/{project}/zones/{zone}/instances/{instance}`. */
  instance?: string;
}

export const ComputeInstance = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  instance: Schema.optional(Schema.String),
}).annotate({ identifier: "ComputeInstance" });

export interface SlurmLoginNodes {
  /** Required. Number of login node instances to create. */
  count?: string;
  /** Optional. [Startup script](https://cloud.google.com/compute/docs/instances/startup-scripts/linux) to be run on each login node instance. Max 256KB. The script must complete within the system-defined default timeout of 5 minutes. For tasks that require more time, consider running them in the background using methods such as `&` or `nohup`. */
  startupScript?: string;
  /** Optional. How storage resources should be mounted on each login node. */
  storageConfigs?: ReadonlyArray<StorageConfig>;
  /** Optional. Whether [OS Login](https://cloud.google.com/compute/docs/oslogin) should be enabled on login node instances. */
  enableOsLogin?: boolean;
  /** Optional. [Labels](https://cloud.google.com/compute/docs/labeling-resources) that should be applied to each login node instance. */
  labels?: Record<string, string>;
  /** Optional. Boot disk for the login node. */
  bootDisk?: BootDisk;
  /** Output only. Information about the login node instances that were created in Compute Engine. */
  instances?: ReadonlyArray<ComputeInstance>;
  /** Required. Name of the zone in which login nodes should run, e.g., `us-central1-a`. Must be in the same region as the cluster, and must match the zone of any other resources specified in the cluster. */
  zone?: string;
  /** Optional. Whether login node instances should be assigned [external IP addresses](https://cloud.google.com/compute/docs/ip-addresses#externaladdresses). */
  enablePublicIps?: boolean;
  /** Required. Name of the Compute Engine [machine type](https://cloud.google.com/compute/docs/machine-resource) to use for login nodes, e.g. `n2-standard-2`. */
  machineType?: string;
}

export const SlurmLoginNodes = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  count: Schema.optional(Schema.String),
  startupScript: Schema.optional(Schema.String),
  storageConfigs: Schema.optional(Schema.Array(StorageConfig)),
  enableOsLogin: Schema.optional(Schema.Boolean),
  labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  bootDisk: Schema.optional(BootDisk),
  instances: Schema.optional(Schema.Array(ComputeInstance)),
  zone: Schema.optional(Schema.String),
  enablePublicIps: Schema.optional(Schema.Boolean),
  machineType: Schema.optional(Schema.String),
}).annotate({ identifier: "SlurmLoginNodes" });

export interface SlurmOrchestrator {
  /** Optional. Configuration for the Slurm partitions in your cluster. Each partition can contain one or more nodesets, and you can submit separate jobs on each partition. If you don't specify at least one partition in your cluster, you can't submit jobs to the cluster. */
  partitions?: ReadonlyArray<SlurmPartition>;
  /** Optional. Compute resource configuration for the Slurm nodesets in your cluster. If not specified, the cluster won't create any nodes. */
  nodeSets?: ReadonlyArray<SlurmNodeSet>;
  /** Required. Configuration for login nodes, which allow users to access the cluster over SSH. */
  loginNodes?: SlurmLoginNodes;
  /** Optional. Default partition to use for submitted jobs that do not explicitly specify a partition. Required if and only if there is more than one partition, in which case it must match the id of one of the partitions. */
  defaultPartition?: string;
  /** Optional. Slurm [epilog scripts](https://slurm.schedmd.com/prolog_epilog.html), which will be executed by compute nodes whenever a node finishes running a job. Values must not be empty. */
  epilogBashScripts?: ReadonlyArray<string>;
  /** Optional. Slurm [prolog scripts](https://slurm.schedmd.com/prolog_epilog.html), which will be executed by compute nodes before a node begins running a new job. Values must not be empty. */
  prologBashScripts?: ReadonlyArray<string>;
}

export const SlurmOrchestrator = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  partitions: Schema.optional(Schema.Array(SlurmPartition)),
  nodeSets: Schema.optional(Schema.Array(SlurmNodeSet)),
  loginNodes: Schema.optional(SlurmLoginNodes),
  defaultPartition: Schema.optional(Schema.String),
  epilogBashScripts: Schema.optional(Schema.Array(Schema.String)),
  prologBashScripts: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "SlurmOrchestrator" });

export interface Orchestrator {
  /** Optional. If set, indicates that the cluster should use Slurm as the orchestrator. */
  slurm?: SlurmOrchestrator;
}

export const Orchestrator = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  slurm: Schema.optional(SlurmOrchestrator),
}).annotate({ identifier: "Orchestrator" });

export interface Status {
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
}

export const Status = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  message: Schema.optional(Schema.String),
  details: Schema.optional(
    Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
  ),
  code: Schema.optional(Schema.Number),
}).annotate({ identifier: "Status" });

export interface Operation {
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
}

export const Operation = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  done: Schema.optional(Schema.Boolean),
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  error: Schema.optional(Status),
  response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  name: Schema.optional(Schema.String),
}).annotate({ identifier: "Operation" });

export interface ListOperationsResponse {
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<Operation>;
  /** The standard List next-page token. */
  nextPageToken?: string;
}

export const ListOperationsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    operations: Schema.optional(Schema.Array(Operation)),
    nextPageToken: Schema.optional(Schema.String),
  },
).annotate({ identifier: "ListOperationsResponse" });

export interface CreateStorageBucket {
  /** Output only. Name of the bucket. */
  bucket?: string;
}

export const CreateStorageBucket = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  bucket: Schema.optional(Schema.String),
}).annotate({ identifier: "CreateStorageBucket" });

export interface FileShareConfig {
  /** Required. Size of the filestore in GB. Must be between 1024 and 102400, and must meet scalability requirements described at https://cloud.google.com/filestore/docs/service-tiers. */
  capacityGb?: string;
  /** Required. Filestore share location */
  fileShare?: string;
}

export const FileShareConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  capacityGb: Schema.optional(Schema.String),
  fileShare: Schema.optional(Schema.String),
}).annotate({ identifier: "FileShareConfig" });

export interface NewFilestoreConfig {
  /** Required. Immutable. Name of the Filestore instance to create, in the format `projects/{project}/locations/{location}/instances/{instance}` */
  filestore?: string;
  /** Required. Immutable. Service tier to use for the instance. */
  tier?: "TIER_UNSPECIFIED" | "ZONAL" | "REGIONAL" | (string & {});
  /** Required. Immutable. File system shares on the instance. Exactly one file share must be specified. */
  fileShares?: ReadonlyArray<FileShareConfig>;
  /** Optional. Immutable. Description of the instance. Maximum of 2048 characters. */
  description?: string;
  /** Optional. Immutable. Access protocol to use for all file shares in the instance. Defaults to NFS V3 if not set. */
  protocol?: "PROTOCOL_UNSPECIFIED" | "NFSV3" | "NFSV41" | (string & {});
}

export const NewFilestoreConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  filestore: Schema.optional(Schema.String),
  tier: Schema.optional(Schema.String),
  fileShares: Schema.optional(Schema.Array(FileShareConfig)),
  description: Schema.optional(Schema.String),
  protocol: Schema.optional(Schema.String),
}).annotate({ identifier: "NewFilestoreConfig" });

export interface DeleteNetwork {
  /** Output only. Name of the network to delete, in the format `projects/{project}/global/networks/{network}`. */
  network?: string;
}

export const DeleteNetwork = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  network: Schema.optional(Schema.String),
}).annotate({ identifier: "DeleteNetwork" });

export interface NewOnDemandInstancesConfig {
  /** Required. Immutable. Name of the zone in which VM instances should run, e.g., `us-central1-a`. Must be in the same region as the cluster, and must match the zone of any other resources specified in the cluster. */
  zone?: string;
  /** Required. Immutable. Name of the Compute Engine [machine type](https://cloud.google.com/compute/docs/machine-resource) to use, e.g. `n2-standard-2`. */
  machineType?: string;
}

export const NewOnDemandInstancesConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zone: Schema.optional(Schema.String),
    machineType: Schema.optional(Schema.String),
  }).annotate({ identifier: "NewOnDemandInstancesConfig" });

export interface NewReservedInstancesConfig {
  /** Optional. Immutable. Name of the reservation from which VM instances should be created, in the format `projects/{project}/zones/{zone}/reservations/{reservation}`. */
  reservation?: string;
}

export const NewReservedInstancesConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reservation: Schema.optional(Schema.String),
  }).annotate({ identifier: "NewReservedInstancesConfig" });

export interface NewFlexStartInstancesConfig {
  /** Required. Immutable. Name of the zone in which VM instances should run, e.g., `us-central1-a`. Must be in the same region as the cluster, and must match the zone of any other resources specified in the cluster. */
  zone?: string;
  /** Required. Immutable. Name of the Compute Engine [machine type](https://cloud.google.com/compute/docs/machine-resource) to use, e.g. `n2-standard-2`. */
  machineType?: string;
  /** Required. Immutable. Specifies the time limit for created instances. Instances will be terminated at the end of this duration. */
  maxDuration?: string;
}

export const NewFlexStartInstancesConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zone: Schema.optional(Schema.String),
    machineType: Schema.optional(Schema.String),
    maxDuration: Schema.optional(Schema.String),
  }).annotate({ identifier: "NewFlexStartInstancesConfig" });

export interface ComputeResourceConfig {
  /** Optional. Immutable. If set, indicates that this resource should use on-demand VMs. */
  newOnDemandInstances?: NewOnDemandInstancesConfig;
  /** Optional. Immutable. If set, indicates that this resource should use reserved VMs. */
  newReservedInstances?: NewReservedInstancesConfig;
  /** Optional. Immutable. If set, indicates that this resource should use spot VMs. */
  newSpotInstances?: NewSpotInstancesConfig;
  /** Optional. Immutable. If set, indicates that this resource should use flex-start VMs. */
  newFlexStartInstances?: NewFlexStartInstancesConfig;
}

export const ComputeResourceConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  newOnDemandInstances: Schema.optional(NewOnDemandInstancesConfig),
  newReservedInstances: Schema.optional(NewReservedInstancesConfig),
  newSpotInstances: Schema.optional(NewSpotInstancesConfig),
  newFlexStartInstances: Schema.optional(NewFlexStartInstancesConfig),
}).annotate({ identifier: "ComputeResourceConfig" });

export interface ComputeResource {
  /** Required. Immutable. Configuration for this compute resource, which describes how it should be created at runtime. */
  config?: ComputeResourceConfig;
}

export const ComputeResource = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  config: Schema.optional(ComputeResourceConfig),
}).annotate({ identifier: "ComputeResource" });

export interface NewNetworkConfig {
  /** Required. Immutable. Name of the network to create, in the format `projects/{project}/global/networks/{network}`. */
  network?: string;
  /** Optional. Immutable. Description of the network. Maximum of 2048 characters. */
  description?: string;
}

export const NewNetworkConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  network: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
}).annotate({ identifier: "NewNetworkConfig" });

export interface CreatePartition {
  /** Output only. Name of the partition to create */
  partitions?: ReadonlyArray<string>;
}

export const CreatePartition = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  partitions: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "CreatePartition" });

export interface CreateLustreInstance {
  /** Output only. Name of the Managed Lustre instance, in the format `projects/{project}/locations/{location}/instances/{instance}` */
  lustre?: string;
}

export const CreateLustreInstance = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  lustre: Schema.optional(Schema.String),
}).annotate({ identifier: "CreateLustreInstance" });

export interface DeleteLustreInstance {
  /** Output only. Name of the Managed Lustre instance, in the format `projects/{project}/locations/{location}/instances/{instance}` */
  lustre?: string;
}

export const DeleteLustreInstance = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  lustre: Schema.optional(Schema.String),
}).annotate({ identifier: "DeleteLustreInstance" });

export interface FilestoreReference {
  /** Output only. Name of the Filestore instance, in the format `projects/{project}/locations/{location}/instances/{instance}` */
  filestore?: string;
}

export const FilestoreReference = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  filestore: Schema.optional(Schema.String),
}).annotate({ identifier: "FilestoreReference" });

export interface GcsHierarchicalNamespaceConfig {
  /** Required. Enables hierarchical namespace setup for the bucket. */
  enabled?: boolean;
}

export const GcsHierarchicalNamespaceConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GcsHierarchicalNamespaceConfig" });

export interface GcsAutoclassConfig {
  /** Required. Enables Auto-class feature. */
  enabled?: boolean;
  /** Optional. Terminal storage class of the autoclass bucket */
  terminalStorageClass?: "TERMINAL_STORAGE_CLASS_UNSPECIFIED" | (string & {});
}

export const GcsAutoclassConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enabled: Schema.optional(Schema.Boolean),
  terminalStorageClass: Schema.optional(Schema.String),
}).annotate({ identifier: "GcsAutoclassConfig" });

export interface NewBucketConfig {
  /** Optional. Immutable. If set, indicates that the bucket should use [hierarchical namespaces](https://cloud.google.com/storage/docs/hns-overview). */
  hierarchicalNamespace?: GcsHierarchicalNamespaceConfig;
  /** Optional. Immutable. If set, indicates that the bucket should use [Autoclass](https://cloud.google.com/storage/docs/autoclass). */
  autoclass?: GcsAutoclassConfig;
  /** Required. Immutable. Name of the Cloud Storage bucket to create. */
  bucket?: string;
  /** Optional. Immutable. If set, uses the provided storage class as the bucket's default storage class. */
  storageClass?:
    | "STORAGE_CLASS_UNSPECIFIED"
    | "STANDARD"
    | "NEARLINE"
    | "COLDLINE"
    | "ARCHIVE"
    | (string & {});
}

export const NewBucketConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  hierarchicalNamespace: Schema.optional(GcsHierarchicalNamespaceConfig),
  autoclass: Schema.optional(GcsAutoclassConfig),
  bucket: Schema.optional(Schema.String),
  storageClass: Schema.optional(Schema.String),
}).annotate({ identifier: "NewBucketConfig" });

export interface ExistingNetworkConfig {
  /** Required. Immutable. Name of the network to import, in the format `projects/{project}/global/networks/{network}`. */
  network?: string;
  /** Required. Immutable. Particular subnetwork to use, in the format `projects/{project}/regions/{region}/subnetworks/{subnetwork}`. */
  subnetwork?: string;
}

export const ExistingNetworkConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  network: Schema.optional(Schema.String),
  subnetwork: Schema.optional(Schema.String),
}).annotate({ identifier: "ExistingNetworkConfig" });

export interface UpdatePartition {
  /** Output only. Name of the partition to update */
  partitions?: ReadonlyArray<string>;
}

export const UpdatePartition = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  partitions: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "UpdatePartition" });

export interface CreateOrchestrator {}

export const CreateOrchestrator = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "CreateOrchestrator" });

export interface DeletePartition {
  /** Output only. Name of the partition to delete */
  partitions?: ReadonlyArray<string>;
}

export const DeletePartition = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  partitions: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "DeletePartition" });

export interface ExistingBucketConfig {
  /** Required. Immutable. Name of the Cloud Storage bucket to import. */
  bucket?: string;
}

export const ExistingBucketConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  bucket: Schema.optional(Schema.String),
}).annotate({ identifier: "ExistingBucketConfig" });

export interface ExistingFilestoreConfig {
  /** Required. Immutable. Name of the Filestore instance to import, in the format `projects/{project}/locations/{location}/instances/{instance}` */
  filestore?: string;
}

export const ExistingFilestoreConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filestore: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExistingFilestoreConfig" });

export interface NewLustreConfig {
  /** Required. Immutable. Filesystem name for this instance. This name is used by client-side tools, including when mounting the instance. Must be 8 characters or less and can only contain letters and numbers. */
  filesystem?: string;
  /** Required. Immutable. Storage capacity of the instance in gibibytes (GiB). Allowed values are between 18000 and 7632000. */
  capacityGb?: string;
  /** Required. Immutable. Name of the Managed Lustre instance to create, in the format `projects/{project}/locations/{location}/instances/{instance}` */
  lustre?: string;
  /** Optional. Immutable. Description of the Managed Lustre instance. Maximum of 2048 characters. */
  description?: string;
}

export const NewLustreConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  filesystem: Schema.optional(Schema.String),
  capacityGb: Schema.optional(Schema.String),
  lustre: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
}).annotate({ identifier: "NewLustreConfig" });

export interface StorageResourceConfig {
  /** Optional. Immutable. If set, indicates that a new Filestore instance should be created. */
  newFilestore?: NewFilestoreConfig;
  /** Optional. Immutable. If set, indicates that a new Cloud Storage bucket should be created. */
  newBucket?: NewBucketConfig;
  /** Optional. Immutable. If set, indicates that an existing Managed Lustre instance should be imported. */
  existingLustre?: ExistingLustreConfig;
  /** Optional. Immutable. If set, indicates that an existing Cloud Storage bucket should be imported. */
  existingBucket?: ExistingBucketConfig;
  /** Optional. Immutable. If set, indicates that an existing Filestore instance should be imported. */
  existingFilestore?: ExistingFilestoreConfig;
  /** Optional. Immutable. If set, indicates that a new Managed Lustre instance should be created. */
  newLustre?: NewLustreConfig;
}

export const StorageResourceConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  newFilestore: Schema.optional(NewFilestoreConfig),
  newBucket: Schema.optional(NewBucketConfig),
  existingLustre: Schema.optional(ExistingLustreConfig),
  existingBucket: Schema.optional(ExistingBucketConfig),
  existingFilestore: Schema.optional(ExistingFilestoreConfig),
  newLustre: Schema.optional(NewLustreConfig),
}).annotate({ identifier: "StorageResourceConfig" });

export interface NetworkResourceConfig {
  /** Optional. Immutable. If set, indicates that a new network should be created. */
  newNetwork?: NewNetworkConfig;
  /** Optional. Immutable. If set, indicates that an existing network should be imported. */
  existingNetwork?: ExistingNetworkConfig;
}

export const NetworkResourceConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  newNetwork: Schema.optional(NewNetworkConfig),
  existingNetwork: Schema.optional(ExistingNetworkConfig),
}).annotate({ identifier: "NetworkResourceConfig" });

export interface NetworkReference {
  /** Output only. Name of the network, in the format `projects/{project}/global/networks/{network}`. */
  network?: string;
  /** Output only. Name of the particular subnetwork being used by the cluster, in the format `projects/{project}/regions/{region}/subnetworks/{subnetwork}`. */
  subnetwork?: string;
}

export const NetworkReference = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  network: Schema.optional(Schema.String),
  subnetwork: Schema.optional(Schema.String),
}).annotate({ identifier: "NetworkReference" });

export interface CheckClusterHealth {}

export const CheckClusterHealth = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "CheckClusterHealth" });

export interface DeleteNodeset {
  /** Output only. Name of the nodeset to delete */
  nodesets?: ReadonlyArray<string>;
}

export const DeleteNodeset = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nodesets: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "DeleteNodeset" });

export interface UpdateLoginNode {}

export const UpdateLoginNode = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "UpdateLoginNode" });

export interface UpdateNodeset {
  /** Output only. Name of the nodeset to update */
  nodesets?: ReadonlyArray<string>;
}

export const UpdateNodeset = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nodesets: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "UpdateNodeset" });

export interface CreateLoginNode {}

export const CreateLoginNode = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "CreateLoginNode" });

export interface DeleteFilestoreInstance {
  /** Output only. Name of the Filestore instance, in the format `projects/{project}/locations/{location}/instances/{instance}` */
  filestore?: string;
}

export const DeleteFilestoreInstance =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filestore: Schema.optional(Schema.String),
  }).annotate({ identifier: "DeleteFilestoreInstance" });

export interface CreateFilestoreInstance {
  /** Output only. Name of the Filestore instance, in the format `projects/{project}/locations/{location}/instances/{instance}` */
  filestore?: string;
}

export const CreateFilestoreInstance =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filestore: Schema.optional(Schema.String),
  }).annotate({ identifier: "CreateFilestoreInstance" });

export interface DeletePrivateServiceAccess {}

export const DeletePrivateServiceAccess =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "DeletePrivateServiceAccess",
  });

export interface CreateNodeset {
  /** Output only. Name of the nodeset to create */
  nodesets?: ReadonlyArray<string>;
}

export const CreateNodeset = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nodesets: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "CreateNodeset" });

export interface CreateNetwork {
  /** Output only. Name of the network to create, in the format `projects/{project}/global/networks/{network}`. */
  network?: string;
}

export const CreateNetwork = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  network: Schema.optional(Schema.String),
}).annotate({ identifier: "CreateNetwork" });

export interface CreatePrivateServiceAccess {}

export const CreatePrivateServiceAccess =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CreatePrivateServiceAccess",
  });

export interface UpdateOrchestrator {}

export const UpdateOrchestrator = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "UpdateOrchestrator" });

export interface DeleteStorageBucket {
  /** Output only. Name of the bucket. */
  bucket?: string;
}

export const DeleteStorageBucket = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  bucket: Schema.optional(Schema.String),
}).annotate({ identifier: "DeleteStorageBucket" });

export interface DeleteLoginNode {}

export const DeleteLoginNode = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "DeleteLoginNode" });

export interface DeleteOrchestrator {}

export const DeleteOrchestrator = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "DeleteOrchestrator" });

export interface OperationStep {
  /** Output only. If set, indicates that Filestore instance deletion is part of the operation. */
  deleteFilestoreInstance?: DeleteFilestoreInstance;
  /** Output only. If set, indicates that cluster health check is part of the operation. */
  checkClusterHealth?: CheckClusterHealth;
  /** Output only. If set, indicates that new Filestore instance creation is part of the operation. */
  createFilestoreInstance?: CreateFilestoreInstance;
  /** Output only. If set, indicates that private service access deletion is part of the operation. */
  deletePrivateServiceAccess?: DeletePrivateServiceAccess;
  /** Output only. If set, indicates that partition update is part of the operation. */
  updatePartition?: UpdatePartition;
  /** Output only. If set, indicates that nodeset deletion is part of the operation. */
  deleteNodeset?: DeleteNodeset;
  /** Output only. State of the operation step. */
  state?:
    | "STATE_UNSPECIFIED"
    | "WAITING"
    | "IN_PROGRESS"
    | "DONE"
    | (string & {});
  /** Output only. If set, indicates that new Cloud Storage bucket creation is part of the operation. */
  createStorageBucket?: CreateStorageBucket;
  /** Output only. If set, indicates that new Lustre instance creation is part of the operation. */
  createLustreInstance?: CreateLustreInstance;
  /** Output only. If set, indicates that new partition creation is part of the operation. */
  createPartition?: CreatePartition;
  /** Output only. If set, indicates that login node update is part of the operation. */
  updateLoginNode?: UpdateLoginNode;
  /** Output only. If set, indicates that new nodeset creation is part of the operation. */
  createNodeset?: CreateNodeset;
  /** Output only. If set, indicates that new network creation is part of the operation. */
  createNetwork?: CreateNetwork;
  /** Output only. If set, indicates that new login node creation is part of the operation. */
  createLoginNode?: CreateLoginNode;
  /** Output only. If set, indicates that partition deletion is part of the operation. */
  deletePartition?: DeletePartition;
  /** Output only. If set, indicates that new private service access creation is part of the operation. */
  createPrivateServiceAccess?: CreatePrivateServiceAccess;
  /** Output only. If set, indicates that network deletion is part of the operation. */
  deleteNetwork?: DeleteNetwork;
  /** Output only. If set, indicates that an orchestrator update is part of the operation. */
  updateOrchestrator?: UpdateOrchestrator;
  /** Output only. If set, indicates that Cloud Storage bucket deletion is part of the operation. */
  deleteStorageBucket?: DeleteStorageBucket;
  /** Output only. If set, indicates that orchestrator creation is part of the operation. */
  createOrchestrator?: CreateOrchestrator;
  /** Output only. If set, indicates that Lustre instance deletion is part of the operation. */
  deleteLustreInstance?: DeleteLustreInstance;
  /** Output only. If set, indicates that login node deletion is part of the operation. */
  deleteLoginNode?: DeleteLoginNode;
  /** Output only. If set, indicates that nodeset update is part of the operation. */
  updateNodeset?: UpdateNodeset;
  /** Output only. If set, indicates that orchestrator deletion is part of the operation. */
  deleteOrchestrator?: DeleteOrchestrator;
}

export const OperationStep = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  deleteFilestoreInstance: Schema.optional(DeleteFilestoreInstance),
  checkClusterHealth: Schema.optional(CheckClusterHealth),
  createFilestoreInstance: Schema.optional(CreateFilestoreInstance),
  deletePrivateServiceAccess: Schema.optional(DeletePrivateServiceAccess),
  updatePartition: Schema.optional(UpdatePartition),
  deleteNodeset: Schema.optional(DeleteNodeset),
  state: Schema.optional(Schema.String),
  createStorageBucket: Schema.optional(CreateStorageBucket),
  createLustreInstance: Schema.optional(CreateLustreInstance),
  createPartition: Schema.optional(CreatePartition),
  updateLoginNode: Schema.optional(UpdateLoginNode),
  createNodeset: Schema.optional(CreateNodeset),
  createNetwork: Schema.optional(CreateNetwork),
  createLoginNode: Schema.optional(CreateLoginNode),
  deletePartition: Schema.optional(DeletePartition),
  createPrivateServiceAccess: Schema.optional(CreatePrivateServiceAccess),
  deleteNetwork: Schema.optional(DeleteNetwork),
  updateOrchestrator: Schema.optional(UpdateOrchestrator),
  deleteStorageBucket: Schema.optional(DeleteStorageBucket),
  createOrchestrator: Schema.optional(CreateOrchestrator),
  deleteLustreInstance: Schema.optional(DeleteLustreInstance),
  deleteLoginNode: Schema.optional(DeleteLoginNode),
  updateNodeset: Schema.optional(UpdateNodeset),
  deleteOrchestrator: Schema.optional(DeleteOrchestrator),
}).annotate({ identifier: "OperationStep" });

export interface OperationProgress {
  /** Output only. Steps and status of the operation. */
  steps?: ReadonlyArray<OperationStep>;
}

export const OperationProgress = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  steps: Schema.optional(Schema.Array(OperationStep)),
}).annotate({ identifier: "OperationProgress" });

export interface NetworkResource {
  /** Output only. Reference to a network in Google Compute Engine. */
  network?: NetworkReference;
  /** Immutable. Configuration for this network resource, which describes how it should be created or imported. This field only controls how the network resource is initially created or imported. Subsequent changes to the network resource should be made via the resource's API and will not be reflected in the configuration. */
  config?: NetworkResourceConfig;
}

export const NetworkResource = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  network: Schema.optional(NetworkReference),
  config: Schema.optional(NetworkResourceConfig),
}).annotate({ identifier: "NetworkResource" });

export interface LustreReference {
  /** Output only. Name of the Managed Lustre instance, in the format `projects/{project}/locations/{location}/instances/{instance}` */
  lustre?: string;
}

export const LustreReference = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  lustre: Schema.optional(Schema.String),
}).annotate({ identifier: "LustreReference" });

export interface StorageResource {
  /** Output only. Reference to a Filestore instance. Populated if and only if the storage resource was configured to use Filestore. */
  filestore?: FilestoreReference;
  /** Output only. Reference to a Managed Lustre instance. Populated if and only if the storage resource was configured to use Managed Lustre. */
  lustre?: LustreReference;
  /** Required. Immutable. Configuration for this storage resource, which describes how it should be created or imported. This field only controls how the storage resource is initially created or imported. Subsequent changes to the storage resource should be made via the resource's API and will not be reflected in the configuration. */
  config?: StorageResourceConfig;
  /** Output only. Reference to a Google Cloud Storage bucket. Populated if and only if the storage resource was configured to use Google Cloud Storage. */
  bucket?: BucketReference;
}

export const StorageResource = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  filestore: Schema.optional(FilestoreReference),
  lustre: Schema.optional(LustreReference),
  config: Schema.optional(StorageResourceConfig),
  bucket: Schema.optional(BucketReference),
}).annotate({ identifier: "StorageResource" });

export interface Cluster {
  /** Output only. Time that the cluster was originally created. */
  createTime?: string;
  /** Optional. User-provided description of the cluster. Maximum of 2048 characters. */
  description?: string;
  /** Output only. Indicates whether changes to the cluster are currently in flight. If this is `true`, then the current state might not match the cluster's intended state. */
  reconciling?: boolean;
  /** Optional. Network resources available to the cluster. Must contain exactly one value. Keys specify the ID of the network resource by which it can be referenced elsewhere, and must conform to [RFC-1034](https://datatracker.ietf.org/doc/html/rfc1034) (lower-case, alphanumeric, and at most 63 characters). */
  networkResources?: Record<string, NetworkResource>;
  /** Optional. Storage resources available to the cluster. Keys specify the ID of the storage resource by which it can be referenced elsewhere, and must conform to [RFC-1034](https://datatracker.ietf.org/doc/html/rfc1034) (lower-case, alphanumeric, and at most 63 characters). */
  storageResources?: Record<string, StorageResource>;
  /** Identifier. [Relative resource name](https://google.aip.dev/122) of the cluster, in the format `projects/{project}/locations/{location}/clusters/{cluster}`. */
  name?: string;
  /** Optional. [Labels](https://cloud.google.com/compute/docs/labeling-resources) applied to the cluster. Labels can be used to organize clusters and to filter them in queries. */
  labels?: Record<string, string>;
  /** Optional. Compute resources available to the cluster. Keys specify the ID of the compute resource by which it can be referenced elsewhere, and must conform to [RFC-1034](https://datatracker.ietf.org/doc/html/rfc1034) (lower-case, alphanumeric, and at most 63 characters). */
  computeResources?: Record<string, ComputeResource>;
  /** Output only. Time that the cluster was most recently updated. */
  updateTime?: string;
  /** Optional. Orchestrator that is responsible for scheduling and running jobs on the cluster. */
  orchestrator?: Orchestrator;
}

export const Cluster = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  createTime: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  reconciling: Schema.optional(Schema.Boolean),
  networkResources: Schema.optional(
    Schema.Record(Schema.String, NetworkResource),
  ),
  storageResources: Schema.optional(
    Schema.Record(Schema.String, StorageResource),
  ),
  name: Schema.optional(Schema.String),
  labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  computeResources: Schema.optional(
    Schema.Record(Schema.String, ComputeResource),
  ),
  updateTime: Schema.optional(Schema.String),
  orchestrator: Schema.optional(Orchestrator),
}).annotate({ identifier: "Cluster" });

export interface Empty {}

export const Empty = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
  identifier: "Empty",
});

export interface OperationMetadata {
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. Progress of the operation. */
  progress?: OperationProgress;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have google.longrunning.Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. The time the operation finished running. */
  endTime?: string;
}

export const OperationMetadata = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  apiVersion: Schema.optional(Schema.String),
  verb: Schema.optional(Schema.String),
  progress: Schema.optional(OperationProgress),
  requestedCancellation: Schema.optional(Schema.Boolean),
  createTime: Schema.optional(Schema.String),
  target: Schema.optional(Schema.String),
  endTime: Schema.optional(Schema.String),
}).annotate({ identifier: "OperationMetadata" });

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

export const Location = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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

export const ListLocationsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  locations: Schema.optional(Schema.Array(Location)),
  nextPageToken: Schema.optional(Schema.String),
}).annotate({ identifier: "ListLocationsResponse" });

export interface ListClustersResponse {
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** Clusters in the specified location. */
  clusters?: ReadonlyArray<Cluster>;
  /** A token that can be sent as `page_token` to retrieve the next page. If this field is absent, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListClustersResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  unreachable: Schema.optional(Schema.Array(Schema.String)),
  clusters: Schema.optional(Schema.Array(Cluster)),
  nextPageToken: Schema.optional(Schema.String),
}).annotate({ identifier: "ListClustersResponse" });

export interface CancelOperationRequest {}

export const CancelOperationRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "CancelOperationRequest" });

// ==========================================================================
// Errors
// ==========================================================================

export class NotFound extends Schema.TaggedErrorClass<NotFound>()("NotFound", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
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
  },
) {}
T.applyErrorMatchers(BadRequest, [{ httpStatus: 400 }]);

export class Conflict extends Schema.TaggedErrorClass<Conflict>()("Conflict", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
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
    T.Http({ method: "GET", path: "v1/{name}/locations" }),
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
    T.Http({ method: "GET", path: "v1/{name}" }),
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

export interface DeleteProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be deleted. */
  name: string;
}

export const DeleteProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{name}" }),
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

export interface ListProjectsLocationsOperationsRequest {
  /** The standard list filter. */
  filter?: string;
  /** The standard list page token. */
  pageToken?: string;
  /** The name of the operation's parent resource. */
  name: string;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The standard list page size. */
  pageSize?: number;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    name: Schema.String.pipe(T.HttpPath("name")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}/operations" }),
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
    T.Http({ method: "GET", path: "v1/{name}" }),
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
    T.Http({ method: "POST", path: "v1/{name}:cancel", hasBody: true }),
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

export interface ListProjectsLocationsClustersRequest {
  /** Required. Parent location of the clusters to list, in the format `projects/{project}/locations/{location}`. */
  parent: string;
  /** Optional. Maximum number of clusters to return. The service may return fewer than this value. */
  pageSize?: number;
  /** Optional. A page token received from a previous `ListClusters` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListClusters` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. [Filter](https://google.aip.dev/160) to apply to the returned results. */
  filter?: string;
  /** Optional. How to order the resulting clusters. Must be one of the following strings: * `name` * `name desc` * `create_time` * `create_time desc` If not specified, clusters will be returned in an arbitrary order. */
  orderBy?: string;
}

export const ListProjectsLocationsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/clusters" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsClustersRequest>;

export type ListProjectsLocationsClustersResponse = ListClustersResponse;
export const ListProjectsLocationsClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListClustersResponse;

export type ListProjectsLocationsClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Clusters in a given project and location. */
export const listProjectsLocationsClusters: API.PaginatedOperationMethod<
  ListProjectsLocationsClustersRequest,
  ListProjectsLocationsClustersResponse,
  ListProjectsLocationsClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsClustersRequest,
  output: ListProjectsLocationsClustersResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsClustersRequest {
  /** Identifier. [Relative resource name](https://google.aip.dev/122) of the cluster, in the format `projects/{project}/locations/{location}/clusters/{cluster}`. */
  name: string;
  /** Optional. A unique identifier for this request. A random UUID is recommended. This request is idempotent if and only if `request_id` is provided. */
  requestId?: string;
  /** Optional. Mask specifying which fields in the cluster to update. All paths must be specified explicitly - wildcards are not supported. At least one path must be provided. */
  updateMask?: string;
  /** Request body */
  body?: Cluster;
}

export const PatchProjectsLocationsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Cluster).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsClustersRequest>;

export type PatchProjectsLocationsClustersResponse = Operation;
export const PatchProjectsLocationsClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single Cluster. */
export const patchProjectsLocationsClusters: API.OperationMethod<
  PatchProjectsLocationsClustersRequest,
  PatchProjectsLocationsClustersResponse,
  PatchProjectsLocationsClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsClustersRequest,
  output: PatchProjectsLocationsClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsClustersRequest {
  /** Required. ID of the cluster to create. Must conform to [RFC-1034](https://datatracker.ietf.org/doc/html/rfc1034) (lower-case, alphanumeric, and at most 63 characters). */
  clusterId?: string;
  /** Optional. A unique identifier for this request. A random UUID is recommended. This request is idempotent if and only if `request_id` is provided. */
  requestId?: string;
  /** Required. Parent location in which the cluster should be created, in the format `projects/{project}/locations/{location}`. */
  parent: string;
  /** Request body */
  body?: Cluster;
}

export const CreateProjectsLocationsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clusterId: Schema.optional(Schema.String).pipe(T.HttpQuery("clusterId")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Cluster).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{parent}/clusters", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsClustersRequest>;

export type CreateProjectsLocationsClustersResponse = Operation;
export const CreateProjectsLocationsClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new Cluster in a given project and location. */
export const createProjectsLocationsClusters: API.OperationMethod<
  CreateProjectsLocationsClustersRequest,
  CreateProjectsLocationsClustersResponse,
  CreateProjectsLocationsClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsClustersRequest,
  output: CreateProjectsLocationsClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsClustersRequest {
  /** Required. Name of the cluster to delete, in the format `projects/{project}/locations/{location}/clusters/{cluster}`. */
  name: string;
  /** Optional. A unique identifier for this request. A random UUID is recommended. This request is idempotent if and only if `request_id` is provided. */
  requestId?: string;
}

export const DeleteProjectsLocationsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsClustersRequest>;

export type DeleteProjectsLocationsClustersResponse = Operation;
export const DeleteProjectsLocationsClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single Cluster. */
export const deleteProjectsLocationsClusters: API.OperationMethod<
  DeleteProjectsLocationsClustersRequest,
  DeleteProjectsLocationsClustersResponse,
  DeleteProjectsLocationsClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsClustersRequest,
  output: DeleteProjectsLocationsClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsClustersRequest {
  /** Required. Name of the cluster to retrieve, in the format `projects/{project}/locations/{location}/clusters/{cluster}`. */
  name: string;
}

export const GetProjectsLocationsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsClustersRequest>;

export type GetProjectsLocationsClustersResponse = Cluster;
export const GetProjectsLocationsClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Cluster;

export type GetProjectsLocationsClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single Cluster. */
export const getProjectsLocationsClusters: API.OperationMethod<
  GetProjectsLocationsClustersRequest,
  GetProjectsLocationsClustersResponse,
  GetProjectsLocationsClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsClustersRequest,
  output: GetProjectsLocationsClustersResponse,
  errors: [NotFound, Forbidden],
}));
