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

export interface CreateNetwork {
  /** Output only. Name of the network to create, in the format `projects/{project}/global/networks/{network}`. */
  network?: string;
}

export const CreateNetwork: Schema.Schema<CreateNetwork> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    network: Schema.optional(Schema.String),
  }).annotate({ identifier: "CreateNetwork" });

export interface Location {
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
}

export const Location: Schema.Schema<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    locationId: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
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

export interface BootDisk {
  /** Optional. The size of the disk in gigabytes (GB), which must be at least 40 GB. */
  sizeGb?: string;
  /** Optional. [Persistent disk type](https://cloud.google.com/compute/docs/disks#disk-types), in the format `projects/{project}/zones/{zone}/diskTypes/{disk_type}`. */
  type?: string;
}

export const BootDisk: Schema.Schema<BootDisk> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sizeGb: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "BootDisk" });

export interface ComputeInstanceSlurmNodeSet {
  /** Optional. [Startup script](https://cloud.google.com/compute/docs/instances/startup-scripts/linux) to be run on each VM instance in the nodeset. Max 256KB. */
  startupScript?: string;
  /** Optional. Boot disk for the compute instance */
  bootDisk?: BootDisk;
  /** Optional. [Labels](https://cloud.google.com/compute/docs/labeling-resources) that should be applied to each VM instance in the nodeset. */
  labels?: Record<string, string>;
}

export const ComputeInstanceSlurmNodeSet: Schema.Schema<ComputeInstanceSlurmNodeSet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startupScript: Schema.optional(Schema.String),
    bootDisk: Schema.optional(BootDisk),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "ComputeInstanceSlurmNodeSet" });

export interface NetworkReference {
  /** Output only. Name of the network, in the format `projects/{project}/global/networks/{network}`. */
  network?: string;
  /** Output only. Name of the particular subnetwork being used by the cluster, in the format `projects/{project}/regions/{region}/subnetworks/{subnetwork}`. */
  subnetwork?: string;
}

export const NetworkReference: Schema.Schema<NetworkReference> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    network: Schema.optional(Schema.String),
    subnetwork: Schema.optional(Schema.String),
  }).annotate({ identifier: "NetworkReference" });

export interface ExistingNetworkConfig {
  /** Required. Immutable. Particular subnetwork to use, in the format `projects/{project}/regions/{region}/subnetworks/{subnetwork}`. */
  subnetwork?: string;
  /** Required. Immutable. Name of the network to import, in the format `projects/{project}/global/networks/{network}`. */
  network?: string;
}

export const ExistingNetworkConfig: Schema.Schema<ExistingNetworkConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subnetwork: Schema.optional(Schema.String),
    network: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExistingNetworkConfig" });

export interface NewNetworkConfig {
  /** Optional. Immutable. Description of the network. Maximum of 2048 characters. */
  description?: string;
  /** Required. Immutable. Name of the network to create, in the format `projects/{project}/global/networks/{network}`. */
  network?: string;
}

export const NewNetworkConfig: Schema.Schema<NewNetworkConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    network: Schema.optional(Schema.String),
  }).annotate({ identifier: "NewNetworkConfig" });

export interface NetworkResourceConfig {
  /** Optional. Immutable. If set, indicates that an existing network should be imported. */
  existingNetwork?: ExistingNetworkConfig;
  /** Optional. Immutable. If set, indicates that a new network should be created. */
  newNetwork?: NewNetworkConfig;
}

export const NetworkResourceConfig: Schema.Schema<NetworkResourceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    existingNetwork: Schema.optional(ExistingNetworkConfig),
    newNetwork: Schema.optional(NewNetworkConfig),
  }).annotate({ identifier: "NetworkResourceConfig" });

export interface NetworkResource {
  /** Output only. A reference to a network in Google Compute Engine. */
  network?: NetworkReference;
  /** Immutable. Configuration for this network resource, which describes how it should be created or imported. This field only controls how the network resource is initially created or imported. Subsequent changes to the network resource should be made via the resource's API and will not be reflected in the configuration. */
  config?: NetworkResourceConfig;
}

export const NetworkResource: Schema.Schema<NetworkResource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    network: Schema.optional(NetworkReference),
    config: Schema.optional(NetworkResourceConfig),
  }).annotate({ identifier: "NetworkResource" });

export interface CheckClusterHealth {}

export const CheckClusterHealth: Schema.Schema<CheckClusterHealth> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CheckClusterHealth",
  });

export interface NewOnDemandInstancesConfig {
  /** Required. Immutable. Name of the zone in which VM instances should run, e.g., `us-central1-a`. Must be in the same region as the cluster, and must match the zone of any other resources specified in the cluster. */
  zone?: string;
  /** Required. Immutable. Name of the Compute Engine [machine type](https://cloud.google.com/compute/docs/machine-resource) to use, e.g. `n2-standard-2`. */
  machineType?: string;
}

export const NewOnDemandInstancesConfig: Schema.Schema<NewOnDemandInstancesConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zone: Schema.optional(Schema.String),
    machineType: Schema.optional(Schema.String),
  }).annotate({ identifier: "NewOnDemandInstancesConfig" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface DeleteNetwork {
  /** Output only. Name of the network to delete, in the format `projects/{project}/global/networks/{network}`. */
  network?: string;
}

export const DeleteNetwork: Schema.Schema<DeleteNetwork> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    network: Schema.optional(Schema.String),
  }).annotate({ identifier: "DeleteNetwork" });

export interface UpdateLoginNode {}

export const UpdateLoginNode: Schema.Schema<UpdateLoginNode> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "UpdateLoginNode",
  });

export interface CreateStorageBucket {
  /** Output only. Name of the bucket. */
  bucket?: string;
}

export const CreateStorageBucket: Schema.Schema<CreateStorageBucket> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bucket: Schema.optional(Schema.String),
  }).annotate({ identifier: "CreateStorageBucket" });

export interface CreateLustreInstance {
  /** Output only. Name of the Managed Lustre instance, in the format `projects/{project}/locations/{location}/instances/{instance}` */
  lustre?: string;
}

export const CreateLustreInstance: Schema.Schema<CreateLustreInstance> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lustre: Schema.optional(Schema.String),
  }).annotate({ identifier: "CreateLustreInstance" });

export interface CreateOrchestrator {}

export const CreateOrchestrator: Schema.Schema<CreateOrchestrator> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CreateOrchestrator",
  });

export interface UpdatePartition {
  /** Output only. Name of the partition to update */
  partitions?: ReadonlyArray<string>;
}

export const UpdatePartition: Schema.Schema<UpdatePartition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    partitions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "UpdatePartition" });

export interface DeleteFilestoreInstance {
  /** Output only. Name of the Filestore instance, in the format `projects/{project}/locations/{location}/instances/{instance}` */
  filestore?: string;
}

export const DeleteFilestoreInstance: Schema.Schema<DeleteFilestoreInstance> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filestore: Schema.optional(Schema.String),
  }).annotate({ identifier: "DeleteFilestoreInstance" });

export interface UpdateNodeset {
  /** Output only. Name of the nodeset to update */
  nodesets?: ReadonlyArray<string>;
}

export const UpdateNodeset: Schema.Schema<UpdateNodeset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodesets: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "UpdateNodeset" });

export interface DeleteStorageBucket {
  /** Output only. Name of the bucket. */
  bucket?: string;
}

export const DeleteStorageBucket: Schema.Schema<DeleteStorageBucket> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bucket: Schema.optional(Schema.String),
  }).annotate({ identifier: "DeleteStorageBucket" });

export interface DeleteLoginNode {}

export const DeleteLoginNode: Schema.Schema<DeleteLoginNode> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "DeleteLoginNode",
  });

export interface DeleteLustreInstance {
  /** Output only. Name of the Managed Lustre instance, in the format `projects/{project}/locations/{location}/instances/{instance}` */
  lustre?: string;
}

export const DeleteLustreInstance: Schema.Schema<DeleteLustreInstance> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lustre: Schema.optional(Schema.String),
  }).annotate({ identifier: "DeleteLustreInstance" });

export interface DeleteOrchestrator {}

export const DeleteOrchestrator: Schema.Schema<DeleteOrchestrator> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "DeleteOrchestrator",
  });

export interface CreateFilestoreInstance {
  /** Output only. Name of the Filestore instance, in the format `projects/{project}/locations/{location}/instances/{instance}` */
  filestore?: string;
}

export const CreateFilestoreInstance: Schema.Schema<CreateFilestoreInstance> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filestore: Schema.optional(Schema.String),
  }).annotate({ identifier: "CreateFilestoreInstance" });

export interface DeleteNodeset {
  /** Output only. Name of the nodeset to delete */
  nodesets?: ReadonlyArray<string>;
}

export const DeleteNodeset: Schema.Schema<DeleteNodeset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodesets: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "DeleteNodeset" });

export interface CreatePrivateServiceAccess {}

export const CreatePrivateServiceAccess: Schema.Schema<CreatePrivateServiceAccess> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CreatePrivateServiceAccess",
  });

export interface CreatePartition {
  /** Output only. Name of the partition to create */
  partitions?: ReadonlyArray<string>;
}

export const CreatePartition: Schema.Schema<CreatePartition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    partitions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "CreatePartition" });

export interface CreateNodeset {
  /** Output only. Name of the nodeset to create */
  nodesets?: ReadonlyArray<string>;
}

export const CreateNodeset: Schema.Schema<CreateNodeset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodesets: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "CreateNodeset" });

export interface DeletePartition {
  /** Output only. Name of the partition to delete */
  partitions?: ReadonlyArray<string>;
}

export const DeletePartition: Schema.Schema<DeletePartition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    partitions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "DeletePartition" });

export interface UpdateOrchestrator {}

export const UpdateOrchestrator: Schema.Schema<UpdateOrchestrator> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "UpdateOrchestrator",
  });

export interface CreateLoginNode {}

export const CreateLoginNode: Schema.Schema<CreateLoginNode> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CreateLoginNode",
  });

export interface DeletePrivateServiceAccess {}

export const DeletePrivateServiceAccess: Schema.Schema<DeletePrivateServiceAccess> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "DeletePrivateServiceAccess",
  });

export interface OperationStep {
  /** Output only. If set, indicates that new Cloud Storage bucket creation is part of the operation. */
  createStorageBucket?: CreateStorageBucket;
  /** Output only. If set, indicates that new Lustre instance creation is part of the operation. */
  createLustreInstance?: CreateLustreInstance;
  /** Output only. If set, indicates that orchestrator creation is part of the operation. */
  createOrchestrator?: CreateOrchestrator;
  /** Output only. If set, indicates that partition update is part of the operation. */
  updatePartition?: UpdatePartition;
  /** Output only. If set, indicates that network deletion is part of the operation. */
  deleteNetwork?: DeleteNetwork;
  /** Output only. If set, indicates that Filestore instance deletion is part of the operation. */
  deleteFilestoreInstance?: DeleteFilestoreInstance;
  /** Output only. If set, indicates that nodeset update is part of the operation. */
  updateNodeset?: UpdateNodeset;
  /** Output only. If set, indicates that Cloud Storage bucket deletion is part of the operation. */
  deleteStorageBucket?: DeleteStorageBucket;
  /** Output only. If set, indicates that login node deletion is part of the operation. */
  deleteLoginNode?: DeleteLoginNode;
  /** Output only. If set, indicates that Lustre instance deletion is part of the operation. */
  deleteLustreInstance?: DeleteLustreInstance;
  /** Output only. If set, indicates that orchestrator deletion is part of the operation. */
  deleteOrchestrator?: DeleteOrchestrator;
  /** Output only. If set, indicates that new Filestore instance creation is part of the operation. */
  createFilestoreInstance?: CreateFilestoreInstance;
  /** Output only. If set, indicates that nodeset deletion is part of the operation. */
  deleteNodeset?: DeleteNodeset;
  /** Output only. If set, indicates that new private service access creation is part of the operation. */
  createPrivateServiceAccess?: CreatePrivateServiceAccess;
  /** Output only. If set, indicates that new partition creation is part of the operation. */
  createPartition?: CreatePartition;
  /** Output only. State of the operation step. */
  state?:
    | "STATE_UNSPECIFIED"
    | "WAITING"
    | "IN_PROGRESS"
    | "DONE"
    | (string & {});
  /** Output only. If set, indicates that new network creation is part of the operation. */
  createNetwork?: CreateNetwork;
  /** Output only. If set, indicates that new nodeset creation is part of the operation. */
  createNodeset?: CreateNodeset;
  /** Output only. If set, indicates that cluster health check is part of the operation. */
  checkClusterHealth?: CheckClusterHealth;
  /** Output only. If set, indicates that partition deletion is part of the operation. */
  deletePartition?: DeletePartition;
  /** Output only. If set, indicates that login node update is part of the operation. */
  updateLoginNode?: UpdateLoginNode;
  /** Output only. If set, indicates that an orchestrator update is part of the operation. */
  updateOrchestrator?: UpdateOrchestrator;
  /** Output only. If set, indicates that new login node creation is part of the operation. */
  createLoginNode?: CreateLoginNode;
  /** Output only. If set, indicates that private service access deletion is part of the operation. */
  deletePrivateServiceAccess?: DeletePrivateServiceAccess;
}

export const OperationStep: Schema.Schema<OperationStep> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createStorageBucket: Schema.optional(CreateStorageBucket),
    createLustreInstance: Schema.optional(CreateLustreInstance),
    createOrchestrator: Schema.optional(CreateOrchestrator),
    updatePartition: Schema.optional(UpdatePartition),
    deleteNetwork: Schema.optional(DeleteNetwork),
    deleteFilestoreInstance: Schema.optional(DeleteFilestoreInstance),
    updateNodeset: Schema.optional(UpdateNodeset),
    deleteStorageBucket: Schema.optional(DeleteStorageBucket),
    deleteLoginNode: Schema.optional(DeleteLoginNode),
    deleteLustreInstance: Schema.optional(DeleteLustreInstance),
    deleteOrchestrator: Schema.optional(DeleteOrchestrator),
    createFilestoreInstance: Schema.optional(CreateFilestoreInstance),
    deleteNodeset: Schema.optional(DeleteNodeset),
    createPrivateServiceAccess: Schema.optional(CreatePrivateServiceAccess),
    createPartition: Schema.optional(CreatePartition),
    state: Schema.optional(Schema.String),
    createNetwork: Schema.optional(CreateNetwork),
    createNodeset: Schema.optional(CreateNodeset),
    checkClusterHealth: Schema.optional(CheckClusterHealth),
    deletePartition: Schema.optional(DeletePartition),
    updateLoginNode: Schema.optional(UpdateLoginNode),
    updateOrchestrator: Schema.optional(UpdateOrchestrator),
    createLoginNode: Schema.optional(CreateLoginNode),
    deletePrivateServiceAccess: Schema.optional(DeletePrivateServiceAccess),
  }).annotate({ identifier: "OperationStep" });

export interface LustreReference {
  /** Output only. Name of the Managed Lustre instance, in the format `projects/{project}/locations/{location}/instances/{instance}` */
  lustre?: string;
}

export const LustreReference: Schema.Schema<LustreReference> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lustre: Schema.optional(Schema.String),
  }).annotate({ identifier: "LustreReference" });

export interface BucketReference {
  /** Output only. Name of the bucket. */
  bucket?: string;
}

export const BucketReference: Schema.Schema<BucketReference> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bucket: Schema.optional(Schema.String),
  }).annotate({ identifier: "BucketReference" });

export interface FilestoreReference {
  /** Output only. Name of the Filestore instance, in the format `projects/{project}/locations/{location}/instances/{instance}` */
  filestore?: string;
}

export const FilestoreReference: Schema.Schema<FilestoreReference> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filestore: Schema.optional(Schema.String),
  }).annotate({ identifier: "FilestoreReference" });

export interface FileShareConfig {
  /** Required. Size of the filestore in GB. Must be between 1024 and 102400, and must meet scalability requirements described at https://cloud.google.com/filestore/docs/service-tiers. */
  capacityGb?: string;
  /** Required. Filestore share location */
  fileShare?: string;
}

export const FileShareConfig: Schema.Schema<FileShareConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    capacityGb: Schema.optional(Schema.String),
    fileShare: Schema.optional(Schema.String),
  }).annotate({ identifier: "FileShareConfig" });

export interface NewFilestoreConfig {
  /** Optional. Immutable. Access protocol to use for all file shares in the instance. Defaults to NFS V3 if not set. */
  protocol?: "PROTOCOL_UNSPECIFIED" | "NFSV3" | "NFSV41" | (string & {});
  /** Required. Immutable. Name of the Filestore instance to create, in the format `projects/{project}/locations/{location}/instances/{instance}`. */
  filestore?: string;
  /** Required. Immutable. File system shares on the instance. Exactly one file share must be specified. */
  fileShares?: ReadonlyArray<FileShareConfig>;
  /** Optional. Immutable. Description of the instance. Maximum of 2048 characters. */
  description?: string;
  /** Required. Immutable. Service tier to use for the instance. */
  tier?: "TIER_UNSPECIFIED" | "ZONAL" | "REGIONAL" | (string & {});
}

export const NewFilestoreConfig: Schema.Schema<NewFilestoreConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    protocol: Schema.optional(Schema.String),
    filestore: Schema.optional(Schema.String),
    fileShares: Schema.optional(Schema.Array(FileShareConfig)),
    description: Schema.optional(Schema.String),
    tier: Schema.optional(Schema.String),
  }).annotate({ identifier: "NewFilestoreConfig" });

export interface NewLustreConfig {
  /** Optional. Immutable. Description of the Managed Lustre instance. Maximum of 2048 characters. */
  description?: string;
  /** Required. Immutable. Name of the Managed Lustre instance to create, in the format `projects/{project}/locations/{location}/instances/{instance}` */
  lustre?: string;
  /** Optional. Immutable. Throughput of the instance in MB/s/TiB. Valid values are 125, 250, 500, 1000. See [Performance tiers and maximum storage capacities](https://cloud.google.com/managed-lustre/docs/create-instance#performance-tiers) for more information. */
  perUnitStorageThroughput?: string;
  /** Required. Immutable. Filesystem name for this instance. This name is used by client-side tools, including when mounting the instance. Must be 8 characters or less and can only contain letters and numbers. */
  filesystem?: string;
  /** Required. Immutable. Storage capacity of the instance in gibibytes (GiB). Allowed values are between 18000 and 7632000. */
  capacityGb?: string;
}

export const NewLustreConfig: Schema.Schema<NewLustreConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    lustre: Schema.optional(Schema.String),
    perUnitStorageThroughput: Schema.optional(Schema.String),
    filesystem: Schema.optional(Schema.String),
    capacityGb: Schema.optional(Schema.String),
  }).annotate({ identifier: "NewLustreConfig" });

export interface ExistingLustreConfig {
  /** Required. Immutable. Name of the Managed Lustre instance to import, in the format `projects/{project}/locations/{location}/instances/{instance}` */
  lustre?: string;
}

export const ExistingLustreConfig: Schema.Schema<ExistingLustreConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lustre: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExistingLustreConfig" });

export interface GcsAutoclassConfig {
  /** Required. Enables Auto-class feature. */
  enabled?: boolean;
  /** Optional. Terminal storage class of the autoclass bucket */
  terminalStorageClass?:
    | "TERMINAL_STORAGE_CLASS_UNSPECIFIED"
    | "NEARLINE"
    | "ARCHIVE"
    | (string & {});
}

export const GcsAutoclassConfig: Schema.Schema<GcsAutoclassConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
    terminalStorageClass: Schema.optional(Schema.String),
  }).annotate({ identifier: "GcsAutoclassConfig" });

export interface GcsHierarchicalNamespaceConfig {
  /** Required. Enables hierarchical namespace setup for the bucket. */
  enabled?: boolean;
}

export const GcsHierarchicalNamespaceConfig: Schema.Schema<GcsHierarchicalNamespaceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GcsHierarchicalNamespaceConfig" });

export interface NewBucketConfig {
  /** Optional. Immutable. If set, indicates that the bucket should use [Autoclass](https://cloud.google.com/storage/docs/autoclass). */
  autoclass?: GcsAutoclassConfig;
  /** Optional. Immutable. If set, indicates that the bucket should use [hierarchical namespaces](https://cloud.google.com/storage/docs/hns-overview). */
  hierarchicalNamespace?: GcsHierarchicalNamespaceConfig;
  /** Optional. Immutable. If set, uses the provided storage class as the bucket's default storage class. */
  storageClass?:
    | "STORAGE_CLASS_UNSPECIFIED"
    | "STANDARD"
    | "NEARLINE"
    | "COLDLINE"
    | "ARCHIVE"
    | (string & {});
  /** Required. Immutable. Name of the Cloud Storage bucket to create. */
  bucket?: string;
}

export const NewBucketConfig: Schema.Schema<NewBucketConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    autoclass: Schema.optional(GcsAutoclassConfig),
    hierarchicalNamespace: Schema.optional(GcsHierarchicalNamespaceConfig),
    storageClass: Schema.optional(Schema.String),
    bucket: Schema.optional(Schema.String),
  }).annotate({ identifier: "NewBucketConfig" });

export interface ExistingFilestoreConfig {
  /** Required. Immutable. Name of the Filestore instance to import, in the format `projects/{project}/locations/{location}/instances/{instance}` */
  filestore?: string;
}

export const ExistingFilestoreConfig: Schema.Schema<ExistingFilestoreConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filestore: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExistingFilestoreConfig" });

export interface ExistingBucketConfig {
  /** Required. Immutable. Name of the Cloud Storage bucket to import. */
  bucket?: string;
}

export const ExistingBucketConfig: Schema.Schema<ExistingBucketConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bucket: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExistingBucketConfig" });

export interface StorageResourceConfig {
  /** Optional. Immutable. If set, indicates that a new Filestore instance should be created. */
  newFilestore?: NewFilestoreConfig;
  /** Optional. Immutable. If set, indicates that a new Managed Lustre instance should be created. */
  newLustre?: NewLustreConfig;
  /** Optional. Immutable. If set, indicates that an existing Managed Lustre instance should be imported. */
  existingLustre?: ExistingLustreConfig;
  /** Optional. Immutable. If set, indicates that a new Cloud Storage bucket should be created. */
  newBucket?: NewBucketConfig;
  /** Optional. Immutable. If set, indicates that an existing Filestore instance should be imported. */
  existingFilestore?: ExistingFilestoreConfig;
  /** Optional. Immutable. If set, indicates that an existing Cloud Storage bucket should be imported. */
  existingBucket?: ExistingBucketConfig;
}

export const StorageResourceConfig: Schema.Schema<StorageResourceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    newFilestore: Schema.optional(NewFilestoreConfig),
    newLustre: Schema.optional(NewLustreConfig),
    existingLustre: Schema.optional(ExistingLustreConfig),
    newBucket: Schema.optional(NewBucketConfig),
    existingFilestore: Schema.optional(ExistingFilestoreConfig),
    existingBucket: Schema.optional(ExistingBucketConfig),
  }).annotate({ identifier: "StorageResourceConfig" });

export interface StorageResource {
  /** Output only. A reference to a Managed Lustre instance. Populated if and only if the storage resource was configured to use Managed Lustre. */
  lustre?: LustreReference;
  /** Output only. A reference to a Google Cloud Storage bucket. Populated if and only if the storage resource was configured to use Google Cloud Storage. */
  bucket?: BucketReference;
  /** Output only. A reference to a Filestore instance. Populated if and only if the storage resource was configured to use Filestore. */
  filestore?: FilestoreReference;
  /** Required. Immutable. Configuration for this storage resource, which describes how it should be created or imported. This field only controls how the storage resource is initially created or imported. Subsequent changes to the storage resource should be made via the resource's API and will not be reflected in the configuration. */
  config?: StorageResourceConfig;
}

export const StorageResource: Schema.Schema<StorageResource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lustre: Schema.optional(LustreReference),
    bucket: Schema.optional(BucketReference),
    filestore: Schema.optional(FilestoreReference),
    config: Schema.optional(StorageResourceConfig),
  }).annotate({ identifier: "StorageResource" });

export interface NewReservedInstancesConfig {
  /** Optional. Immutable. Name of the reservation from which VM instances should be created, in the format `projects/{project}/zones/{zone}/reservations/{reservation}`. */
  reservation?: string;
}

export const NewReservedInstancesConfig: Schema.Schema<NewReservedInstancesConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reservation: Schema.optional(Schema.String),
  }).annotate({ identifier: "NewReservedInstancesConfig" });

export interface NewFlexStartInstancesConfig {
  /** Required. Immutable. Specifies the time limit for created instances. Instances will be terminated at the end of this duration. */
  maxDuration?: string;
  /** Required. Immutable. Name of the zone in which VM instances should run, e.g., `us-central1-a`. Must be in the same region as the cluster, and must match the zone of any other resources specified in the cluster. */
  zone?: string;
  /** Required. Immutable. Name of the Compute Engine [machine type](https://cloud.google.com/compute/docs/machine-resource) to use, e.g. `n2-standard-2`. */
  machineType?: string;
}

export const NewFlexStartInstancesConfig: Schema.Schema<NewFlexStartInstancesConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxDuration: Schema.optional(Schema.String),
    zone: Schema.optional(Schema.String),
    machineType: Schema.optional(Schema.String),
  }).annotate({ identifier: "NewFlexStartInstancesConfig" });

export interface NewSpotInstancesConfig {
  /** Required. Immutable. Name of the zone in which VM instances should run, e.g., `us-central1-a`. Must be in the same region as the cluster, and must match the zone of any other resources specified in the cluster. */
  zone?: string;
  /** Optional. Termination action for the instance. If not specified, Compute Engine sets the termination action to DELETE. */
  terminationAction?:
    | "TERMINATION_ACTION_UNSPECIFIED"
    | "STOP"
    | "DELETE"
    | (string & {});
  /** Required. Immutable. Name of the Compute Engine [machine type](https://cloud.google.com/compute/docs/machine-resource) to use, e.g. `n2-standard-2`. */
  machineType?: string;
}

export const NewSpotInstancesConfig: Schema.Schema<NewSpotInstancesConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zone: Schema.optional(Schema.String),
    terminationAction: Schema.optional(Schema.String),
    machineType: Schema.optional(Schema.String),
  }).annotate({ identifier: "NewSpotInstancesConfig" });

export interface ComputeResourceConfig {
  /** Optional. Immutable. If set, indicates that this resource should use on-demand VMs. */
  newOnDemandInstances?: NewOnDemandInstancesConfig;
  /** Optional. Immutable. If set, indicates that this resource should use reserved VMs. */
  newReservedInstances?: NewReservedInstancesConfig;
  /** Optional. Immutable. If set, indicates that this resource should use flex-start VMs. */
  newFlexStartInstances?: NewFlexStartInstancesConfig;
  /** Optional. Immutable. If set, indicates that this resource should use spot VMs. */
  newSpotInstances?: NewSpotInstancesConfig;
}

export const ComputeResourceConfig: Schema.Schema<ComputeResourceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    newOnDemandInstances: Schema.optional(NewOnDemandInstancesConfig),
    newReservedInstances: Schema.optional(NewReservedInstancesConfig),
    newFlexStartInstances: Schema.optional(NewFlexStartInstancesConfig),
    newSpotInstances: Schema.optional(NewSpotInstancesConfig),
  }).annotate({ identifier: "ComputeResourceConfig" });

export interface ComputeResource {
  /** Required. Immutable. Configuration for this compute resource, which describes how it should be created at runtime. */
  config?: ComputeResourceConfig;
}

export const ComputeResource: Schema.Schema<ComputeResource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    config: Schema.optional(ComputeResourceConfig),
  }).annotate({ identifier: "ComputeResource" });

export interface SlurmPartition {
  /** Required. ID of the partition, which is how users will identify it. Must conform to [RFC-1034](https://datatracker.ietf.org/doc/html/rfc1034) (lower-case, alphanumeric, and at most 63 characters). */
  id?: string;
  /** Required. IDs of the nodesets that make up this partition. Values must match SlurmNodeSet.id. */
  nodeSetIds?: ReadonlyArray<string>;
}

export const SlurmPartition: Schema.Schema<SlurmPartition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    nodeSetIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "SlurmPartition" });

export interface StorageConfig {
  /** Required. ID of the storage resource to mount, which must match a key in the cluster's storage_resources. */
  id?: string;
  /** Required. A directory inside the VM instance's file system where the storage resource should be mounted (e.g., `/mnt/share`). */
  localMount?: string;
}

export const StorageConfig: Schema.Schema<StorageConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    localMount: Schema.optional(Schema.String),
  }).annotate({ identifier: "StorageConfig" });

export interface SlurmNodeSet {
  /** Optional. Controls how many additional nodes a cluster can bring online to handle workloads. Set this value to enable dynamic node creation and limit the number of additional nodes the cluster can bring online. Leave empty if you do not want the cluster to create nodes dynamically, and instead rely only on static nodes. */
  maxDynamicNodeCount?: string;
  /** Required. The ID of the compute resource on which this nodeset runs. Must match a key in the cluster's compute_resources. */
  computeId?: string;
  /** Optional. How storage resources should be mounted on each compute node. */
  storageConfigs?: ReadonlyArray<StorageConfig>;
  /** Required. The ID for the nodeset, which allows it to be referenced by cluster partitions. The nodeset ID must start with a lowercase letter (`a`-`z`), use only lowercase letters or numbers, and contain up to 15 characters. For example, specify `nodeset001`. */
  id?: string;
  /** Optional. Number of nodes to be statically created for this nodeset. The cluster will attempt to ensure that at least this many nodes exist at all times. */
  staticNodeCount?: string;
  /** Optional. If set, indicates that the nodeset should be backed by Compute Engine instances. */
  computeInstance?: ComputeInstanceSlurmNodeSet;
}

export const SlurmNodeSet: Schema.Schema<SlurmNodeSet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxDynamicNodeCount: Schema.optional(Schema.String),
    computeId: Schema.optional(Schema.String),
    storageConfigs: Schema.optional(Schema.Array(StorageConfig)),
    id: Schema.optional(Schema.String),
    staticNodeCount: Schema.optional(Schema.String),
    computeInstance: Schema.optional(ComputeInstanceSlurmNodeSet),
  }).annotate({ identifier: "SlurmNodeSet" });

export interface ComputeInstance {
  /** Output only. Name of the VM instance, in the format `projects/{project}/zones/{zone}/instances/{instance}`. */
  instance?: string;
}

export const ComputeInstance: Schema.Schema<ComputeInstance> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instance: Schema.optional(Schema.String),
  }).annotate({ identifier: "ComputeInstance" });

export interface SlurmLoginNodes {
  /** Optional. [Labels](https://cloud.google.com/compute/docs/labeling-resources) that should be applied to each login node instance. */
  labels?: Record<string, string>;
  /** Optional. How storage resources should be mounted on each login node. */
  storageConfigs?: ReadonlyArray<StorageConfig>;
  /** Optional. [Startup script](https://cloud.google.com/compute/docs/instances/startup-scripts/linux) to be run on each login node instance. Max 256KB. The script must complete within the system-defined default timeout of 5 minutes. For tasks that require more time, consider running them in the background using methods such as `&` or `nohup`. */
  startupScript?: string;
  /** Optional. Boot disk for the login node. */
  bootDisk?: BootDisk;
  /** Required. Number of login node instances to create. */
  count?: string;
  /** Required. Name of the Compute Engine [machine type](https://cloud.google.com/compute/docs/machine-resource) to use for login nodes, e.g. `n2-standard-2`. */
  machineType?: string;
  /** Optional. Whether login node instances should be assigned [external IP addresses](https://cloud.google.com/compute/docs/ip-addresses#externaladdresses). */
  enablePublicIps?: boolean;
  /** Optional. Whether [OS Login](https://cloud.google.com/compute/docs/oslogin) should be enabled on login node instances. */
  enableOsLogin?: boolean;
  /** Required. Name of the zone in which login nodes should run, e.g., `us-central1-a`. Must be in the same region as the cluster, and must match the zone of any other resources specified in the cluster. */
  zone?: string;
  /** Output only. Information about the login node instances that were created in Compute Engine. */
  instances?: ReadonlyArray<ComputeInstance>;
}

export const SlurmLoginNodes: Schema.Schema<SlurmLoginNodes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    storageConfigs: Schema.optional(Schema.Array(StorageConfig)),
    startupScript: Schema.optional(Schema.String),
    bootDisk: Schema.optional(BootDisk),
    count: Schema.optional(Schema.String),
    machineType: Schema.optional(Schema.String),
    enablePublicIps: Schema.optional(Schema.Boolean),
    enableOsLogin: Schema.optional(Schema.Boolean),
    zone: Schema.optional(Schema.String),
    instances: Schema.optional(Schema.Array(ComputeInstance)),
  }).annotate({ identifier: "SlurmLoginNodes" });

export interface SlurmOrchestrator {
  /** Optional. Slurm [epilog scripts](https://slurm.schedmd.com/prolog_epilog.html), which will be executed by compute nodes whenever a node finishes running a job. Values must not be empty. */
  epilogBashScripts?: ReadonlyArray<string>;
  /** Optional. Default partition to use for submitted jobs that do not explicitly specify a partition. Required if and only if there is more than one partition, in which case it must match the id of one of the partitions. */
  defaultPartition?: string;
  /** Optional. Configuration for the Slurm partitions in your cluster. Each partition can contain one or more nodesets, and you can submit separate jobs on each partition. If you don't specify at least one partition in your cluster, you can't submit jobs to the cluster. */
  partitions?: ReadonlyArray<SlurmPartition>;
  /** Optional. Compute resource configuration for the Slurm nodesets in your cluster. If not specified, the cluster won't create any nodes. */
  nodeSets?: ReadonlyArray<SlurmNodeSet>;
  /** Optional. Slurm [prolog scripts](https://slurm.schedmd.com/prolog_epilog.html), which will be executed by compute nodes before a node begins running a new job. Values must not be empty. */
  prologBashScripts?: ReadonlyArray<string>;
  /** Required. Configuration for login nodes, which allow users to access the cluster over SSH. */
  loginNodes?: SlurmLoginNodes;
}

export const SlurmOrchestrator: Schema.Schema<SlurmOrchestrator> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    epilogBashScripts: Schema.optional(Schema.Array(Schema.String)),
    defaultPartition: Schema.optional(Schema.String),
    partitions: Schema.optional(Schema.Array(SlurmPartition)),
    nodeSets: Schema.optional(Schema.Array(SlurmNodeSet)),
    prologBashScripts: Schema.optional(Schema.Array(Schema.String)),
    loginNodes: Schema.optional(SlurmLoginNodes),
  }).annotate({ identifier: "SlurmOrchestrator" });

export interface Orchestrator {
  /** Optional. If set, indicates that the cluster should use Slurm as the orchestrator. */
  slurm?: SlurmOrchestrator;
}

export const Orchestrator: Schema.Schema<Orchestrator> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    slurm: Schema.optional(SlurmOrchestrator),
  }).annotate({ identifier: "Orchestrator" });

export interface Cluster {
  /** Optional. Network resources available to the cluster. Must contain exactly one value. Keys specify the ID of the network resource by which it can be referenced elsewhere, and must conform to [RFC-1034](https://datatracker.ietf.org/doc/html/rfc1034) (lower-case, alphanumeric, and at most 63 characters). */
  networkResources?: Record<string, NetworkResource>;
  /** Optional. Storage resources available to the cluster. Keys specify the ID of the storage resource by which it can be referenced elsewhere, and must conform to [RFC-1034](https://datatracker.ietf.org/doc/html/rfc1034) (lower-case, alphanumeric, and at most 63 characters). */
  storageResources?: Record<string, StorageResource>;
  /** Output only. Indicates whether changes to the cluster are currently in flight. If this is `true`, then the current state might not match the cluster's intended state. */
  reconciling?: boolean;
  /** Optional. A description for your cluster. You can use up to 2,048 characters. */
  description?: string;
  /** Output only. Time that the cluster was most recently updated. */
  updateTime?: string;
  /** Identifier. [Relative resource name](https://google.aip.dev/122) of the cluster, in the format `projects/{project}/locations/{location}/clusters/{cluster}`. */
  name?: string;
  /** Optional. [Labels](https://cloud.google.com/compute/docs/labeling-resources) applied to the cluster. Labels can be used to organize clusters and to filter them in queries. */
  labels?: Record<string, string>;
  /** Output only. Time that the cluster was originally created. */
  createTime?: string;
  /** Optional. Compute resources available to the cluster. Keys specify the ID of the compute resource by which it can be referenced elsewhere, and must conform to [RFC-1034](https://datatracker.ietf.org/doc/html/rfc1034) (lower-case, alphanumeric, and at most 63 characters). */
  computeResources?: Record<string, ComputeResource>;
  /** Optional. Orchestrator that is responsible for scheduling and running jobs on the cluster. */
  orchestrator?: Orchestrator;
}

export const Cluster: Schema.Schema<Cluster> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    networkResources: Schema.optional(
      Schema.Record(Schema.String, NetworkResource),
    ),
    storageResources: Schema.optional(
      Schema.Record(Schema.String, StorageResource),
    ),
    reconciling: Schema.optional(Schema.Boolean),
    description: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    createTime: Schema.optional(Schema.String),
    computeResources: Schema.optional(
      Schema.Record(Schema.String, ComputeResource),
    ),
    orchestrator: Schema.optional(Orchestrator),
  }).annotate({ identifier: "Cluster" });

export interface ListClustersResponse {
  /** Clusters in the specified location. */
  clusters?: ReadonlyArray<Cluster>;
  /** A token that can be sent as `page_token` to retrieve the next page. If this field is absent, there are no subsequent pages. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListClustersResponse: Schema.Schema<ListClustersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clusters: Schema.optional(Schema.Array(Cluster)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListClustersResponse" });

export interface OperationProgress {
  /** Output only. Steps and status of the operation. */
  steps?: ReadonlyArray<OperationStep>;
}

export const OperationProgress: Schema.Schema<OperationProgress> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    steps: Schema.optional(Schema.Array(OperationStep)),
  }).annotate({ identifier: "OperationProgress" });

export interface OperationMetadata {
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have google.longrunning.Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. Progress of the operation. */
  progress?: OperationProgress;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
}

export const OperationMetadata: Schema.Schema<OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    target: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
    endTime: Schema.optional(Schema.String),
    progress: Schema.optional(OperationProgress),
    apiVersion: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
  }).annotate({ identifier: "OperationMetadata" });

export interface CancelOperationRequest {}

export const CancelOperationRequest: Schema.Schema<CancelOperationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelOperationRequest",
  });

export interface Status {
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
}

export const Status: Schema.Schema<Status> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    code: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Status" });

export interface Operation {
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    error: Schema.optional(Status),
    done: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Operation" });

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
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    name: Schema.String.pipe(T.HttpPath("name")),
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

export interface ListProjectsLocationsOperationsRequest {
  /** The standard list page token. */
  pageToken?: string;
  /** The standard list page size. */
  pageSize?: number;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The standard list filter. */
  filter?: string;
  /** The name of the operation's parent resource. */
  name: string;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    name: Schema.String.pipe(T.HttpPath("name")),
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

export interface CreateProjectsLocationsClustersRequest {
  /** Required. Parent location in which the cluster should be created, in the format `projects/{project}/locations/{location}`. */
  parent: string;
  /** Required. The ID of the cluster to create. The cluster ID must start with a lowercase letter (`a`-`z`), use only lowercase letters or numbers, and contain up to 10 characters. For example, specify `cluster001`. */
  clusterId?: string;
  /** Optional. A unique identifier for this request. A random UUID is recommended. This request is idempotent if and only if `request_id` is provided. */
  requestId?: string;
  /** Request body */
  body?: Cluster;
}

export const CreateProjectsLocationsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    clusterId: Schema.optional(Schema.String).pipe(T.HttpQuery("clusterId")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(Cluster).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/clusters", hasBody: true }),
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
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
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
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
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

export interface ListProjectsLocationsClustersRequest {
  /** Optional. A page token received from a previous `ListClusters` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListClusters` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. Maximum number of clusters to return. The service may return fewer than this value. */
  pageSize?: number;
  /** Required. Parent location of the clusters to list, in the format `projects/{project}/locations/{location}`. */
  parent: string;
  /** Optional. [Filter](https://google.aip.dev/160) to apply to the returned results. */
  filter?: string;
  /** Optional. How to order the resulting clusters. Must be one of the following strings: * `name` * `name desc` * `create_time` * `create_time desc` If not specified, clusters will be returned in an arbitrary order. */
  orderBy?: string;
}

export const ListProjectsLocationsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/clusters" }),
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

export interface GetProjectsLocationsClustersRequest {
  /** Required. Name of the cluster to retrieve, in the format `projects/{project}/locations/{location}/clusters/{cluster}`. */
  name: string;
}

export const GetProjectsLocationsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
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
