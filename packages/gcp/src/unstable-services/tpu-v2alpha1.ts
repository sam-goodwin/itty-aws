// ==========================================================================
// Cloud TPU API (tpu v2alpha1)
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
  name: "tpu",
  version: "v2alpha1",
  rootUrl: "https://tpu.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

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
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    error: Schema.optional(Status),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    done: Schema.optional(Schema.Boolean),
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

export const ListOperationsResponse: Schema.Schema<ListOperationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    operations: Schema.optional(Schema.Array(Operation)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListOperationsResponse" });

export interface GuestAttributesEntry {
  /** Key for the guest attribute entry. */
  key?: string;
  /** Value for the guest attribute entry. */
  value?: string;
  /** Namespace for the guest attribute entry. */
  namespace?: string;
}

export const GuestAttributesEntry: Schema.Schema<GuestAttributesEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
    namespace: Schema.optional(Schema.String),
  }).annotate({ identifier: "GuestAttributesEntry" });

export interface GuestAttributesValue {
  /** The list of guest attributes entries. */
  items?: ReadonlyArray<GuestAttributesEntry>;
}

export const GuestAttributesValue: Schema.Schema<GuestAttributesValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.optional(Schema.Array(GuestAttributesEntry)),
  }).annotate({ identifier: "GuestAttributesValue" });

export interface AccessConfig {
  /** Output only. An external IP address associated with the TPU worker. */
  externalIp?: string;
}

export const AccessConfig: Schema.Schema<AccessConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    externalIp: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccessConfig" });

export interface GuestAttributes {
  /** The path to be queried. This can be the default namespace ('/') or a nested namespace ('/\/') or a specified key ('/\/\') */
  queryPath?: string;
  /** The value of the requested queried path. */
  queryValue?: GuestAttributesValue;
}

export const GuestAttributes: Schema.Schema<GuestAttributes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    queryPath: Schema.optional(Schema.String),
    queryValue: Schema.optional(GuestAttributesValue),
  }).annotate({ identifier: "GuestAttributes" });

export interface Usage {
  /** The real-time value of usage within the reservation, with the unit specified in field capacity_units. */
  total?: string;
}

export const Usage: Schema.Schema<Usage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    total: Schema.optional(Schema.String),
  }).annotate({ identifier: "Usage" });

export interface Interval {
  /** Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end. */
  endTime?: string;
  /** Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start. */
  startTime?: string;
}

export const Interval: Schema.Schema<Interval> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endTime: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Interval" });

export interface Standard {
  /** The resource type of the reservation. */
  resourceType?: string;
  /** The current usage of the reservation. */
  usage?: Usage;
  /** Capacity units this reservation is measured in. */
  capacityUnits?:
    | "CAPACITY_UNITS_UNSPECIFIED"
    | "CORES"
    | "CHIPS"
    | (string & {});
  /** The start and end time of the reservation. */
  interval?: Interval;
  /** The size of the reservation, in the units specified in the 'capacity_units' field. */
  size?: number;
}

export const Standard: Schema.Schema<Standard> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceType: Schema.optional(Schema.String),
    usage: Schema.optional(Usage),
    capacityUnits: Schema.optional(Schema.String),
    interval: Schema.optional(Interval),
    size: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Standard" });

export interface SchedulingConfig {
  /** Optional. Name of the reservation in which the node should be provisioned. */
  reservationName?: string;
  /** Optional. Defines the provisioning model for the node. */
  provisioningModel?:
    | "PROVISIONING_MODEL_UNSPECIFIED"
    | "STANDARD"
    | "SPOT"
    | "RESERVATION_BOUND"
    | (string & {});
  /** Output only. The time at which the node will be terminated. */
  terminationTimestamp?: string;
  /** Whether the node is created under a reservation. */
  reserved?: boolean;
  /** Optional. Defines whether the node is Spot VM. */
  spot?: boolean;
  /** Defines whether the node is preemptible. */
  preemptible?: boolean;
}

export const SchedulingConfig: Schema.Schema<SchedulingConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reservationName: Schema.optional(Schema.String),
    provisioningModel: Schema.optional(Schema.String),
    terminationTimestamp: Schema.optional(Schema.String),
    reserved: Schema.optional(Schema.Boolean),
    spot: Schema.optional(Schema.Boolean),
    preemptible: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "SchedulingConfig" });

export interface AcceleratorConfig {
  /** Required. Type of TPU. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "V2"
    | "V3"
    | "V4"
    | "V5LITE_POD"
    | "V5P"
    | "V6E"
    | (string & {});
  /** Required. Topology of TPU in chips. */
  topology?: string;
}

export const AcceleratorConfig: Schema.Schema<AcceleratorConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    topology: Schema.optional(Schema.String),
  }).annotate({ identifier: "AcceleratorConfig" });

export interface PerformMaintenanceRequest {}

export const PerformMaintenanceRequest: Schema.Schema<PerformMaintenanceRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "PerformMaintenanceRequest",
  });

export interface Location {
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
}

export const Location: Schema.Schema<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
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

export interface AttachedDisk {
  /** Specifies the full path to an existing disk. For example: "projects/my-project/zones/us-central1-c/disks/my-disk". */
  sourceDisk?: string;
  /** The mode in which to attach this disk. If not specified, the default is READ_WRITE mode. Only applicable to data_disks. */
  mode?: "DISK_MODE_UNSPECIFIED" | "READ_WRITE" | "READ_ONLY" | (string & {});
  /** Optional. The list of worker IDs this disk is attached to. */
  workerIds?: ReadonlyArray<string>;
}

export const AttachedDisk: Schema.Schema<AttachedDisk> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceDisk: Schema.optional(Schema.String),
    mode: Schema.optional(Schema.String),
    workerIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "AttachedDisk" });

export interface ShieldedInstanceConfig {
  /** Defines whether the instance has Secure Boot enabled. */
  enableSecureBoot?: boolean;
}

export const ShieldedInstanceConfig: Schema.Schema<ShieldedInstanceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableSecureBoot: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ShieldedInstanceConfig" });

export interface NetworkConfig {
  /** The name of the network for the TPU node. It must be a preexisting Google Compute Engine network. If none is provided, "default" will be used. */
  network?: string;
  /** The name of the subnetwork for the TPU node. It must be a preexisting Google Compute Engine subnetwork. If none is provided, "default" will be used. */
  subnetwork?: string;
  /** Indicates that external IP addresses would be associated with the TPU workers. If set to false, the specified subnetwork or network should have Private Google Access enabled. */
  enableExternalIps?: boolean;
  /** Allows the TPU node to send and receive packets with non-matching destination or source IPs. This is required if you plan to use the TPU workers to forward routes. */
  canIpForward?: boolean;
  /** Optional. Specifies networking queue count for TPU VM instance's network interface. */
  queueCount?: number;
}

export const NetworkConfig: Schema.Schema<NetworkConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    network: Schema.optional(Schema.String),
    subnetwork: Schema.optional(Schema.String),
    enableExternalIps: Schema.optional(Schema.Boolean),
    canIpForward: Schema.optional(Schema.Boolean),
    queueCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "NetworkConfig" });

export interface UpcomingMaintenance {
  /** The status of the maintenance. */
  maintenanceStatus?: "UNKNOWN" | "PENDING" | "ONGOING" | (string & {});
  /** Indicates if the maintenance can be customer triggered. */
  canReschedule?: boolean;
  /** The latest time for the planned maintenance window to start. This timestamp value is in RFC3339 text format. */
  latestWindowStartTime?: string;
  /** The time by which the maintenance disruption will be completed. This timestamp value is in RFC3339 text format. */
  windowEndTime?: string;
  /** Defines the type of maintenance. */
  type?: "UNKNOWN_TYPE" | "SCHEDULED" | "UNSCHEDULED" | (string & {});
  /** The current start time of the maintenance window. This timestamp value is in RFC3339 text format. */
  windowStartTime?: string;
}

export const UpcomingMaintenance: Schema.Schema<UpcomingMaintenance> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maintenanceStatus: Schema.optional(Schema.String),
    canReschedule: Schema.optional(Schema.Boolean),
    latestWindowStartTime: Schema.optional(Schema.String),
    windowEndTime: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    windowStartTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "UpcomingMaintenance" });

export interface Symptom {
  /** Timestamp when the Symptom is created. */
  createTime?: string;
  /** A string used to uniquely distinguish a worker within a TPU node. */
  workerId?: string;
  /** Detailed information of the current Symptom. */
  details?: string;
  /** Type of the Symptom. */
  symptomType?:
    | "SYMPTOM_TYPE_UNSPECIFIED"
    | "LOW_MEMORY"
    | "OUT_OF_MEMORY"
    | "EXECUTE_TIMED_OUT"
    | "MESH_BUILD_FAIL"
    | "HBM_OUT_OF_MEMORY"
    | "PROJECT_ABUSE"
    | (string & {});
}

export const Symptom: Schema.Schema<Symptom> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    workerId: Schema.optional(Schema.String),
    details: Schema.optional(Schema.String),
    symptomType: Schema.optional(Schema.String),
  }).annotate({ identifier: "Symptom" });

export interface NetworkEndpoint {
  /** The access config for the TPU worker. */
  accessConfig?: AccessConfig;
  /** The internal IP address of this network endpoint. */
  ipAddress?: string;
  /** The port of this network endpoint. */
  port?: number;
}

export const NetworkEndpoint: Schema.Schema<NetworkEndpoint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accessConfig: Schema.optional(AccessConfig),
    ipAddress: Schema.optional(Schema.String),
    port: Schema.optional(Schema.Number),
  }).annotate({ identifier: "NetworkEndpoint" });

export interface ServiceAccount {
  /** Email address of the service account. If empty, default Compute service account will be used. */
  email?: string;
  /** The list of scopes to be made available for this service account. If empty, access to all Cloud APIs will be allowed. */
  scope?: ReadonlyArray<string>;
}

export const ServiceAccount: Schema.Schema<ServiceAccount> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email: Schema.optional(Schema.String),
    scope: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ServiceAccount" });

export interface CustomerEncryptionKey {
  /** The name of the encryption key that is stored in Google Cloud KMS. For example: "kmsKeyName": "projects/KMS_PROJECT_ID/locations/REGION/keyRings/KEY_REGION/cryptoKeys/KEY The fully-qualifed key name may be returned for resource GET requests. For example: "kmsKeyName": "projects/KMS_PROJECT_ID/locations/REGION/keyRings/KEY_REGION/cryptoKeys/KEY/cryptoKeyVersions/1 */
  kmsKeyName?: string;
}

export const CustomerEncryptionKey: Schema.Schema<CustomerEncryptionKey> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kmsKeyName: Schema.optional(Schema.String),
  }).annotate({ identifier: "CustomerEncryptionKey" });

export interface BootDiskConfig {
  /** Optional. Size of the boot disk in GB. It must be larger than or equal to the size of the image. */
  diskSizeGb?: string;
  /** Optional. Customer encryption key for boot disk. */
  customerEncryptionKey?: CustomerEncryptionKey;
  /** Optional. The storage pool in which the boot disk is created. You can provide this as a partial or full URL to the resource. */
  storagePool?: string;
  /** Optional. Whether the boot disk will be created with confidential compute mode. */
  enableConfidentialCompute?: boolean;
  /** Optional. Indicates how many IOPS to provision for the disk. This sets the number of I/O operations per second that the disk can handle. To learn more about IOPS, see [Provisioning persistent disk performance](https://cloud.google.com/compute/docs/disks/performance#provisioned-iops). */
  provisionedIops?: string;
  /** Optional. Indicates how much throughput to provision for the disk. This sets the number of throughput MB per second that the disk can handle. */
  provisionedThroughput?: string;
  /** Optional. Image from which boot disk is to be created. If not specified, the default image for the runtime version will be used. Example: `projects/$PROJECT_ID/global/images/$IMAGE_NAME`. */
  sourceImage?: string;
}

export const BootDiskConfig: Schema.Schema<BootDiskConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    diskSizeGb: Schema.optional(Schema.String),
    customerEncryptionKey: Schema.optional(CustomerEncryptionKey),
    storagePool: Schema.optional(Schema.String),
    enableConfidentialCompute: Schema.optional(Schema.Boolean),
    provisionedIops: Schema.optional(Schema.String),
    provisionedThroughput: Schema.optional(Schema.String),
    sourceImage: Schema.optional(Schema.String),
  }).annotate({ identifier: "BootDiskConfig" });

export interface Node {
  /** The additional data disks for the Node. */
  dataDisks?: ReadonlyArray<AttachedDisk>;
  /** Output only. The current state for the TPU Node. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "READY"
    | "RESTARTING"
    | "REIMAGING"
    | "DELETING"
    | "REPAIRING"
    | "STOPPED"
    | "STOPPING"
    | "STARTING"
    | "PREEMPTED"
    | "TERMINATED"
    | "HIDING"
    | "HIDDEN"
    | "UNHIDING"
    | "UNKNOWN"
    | (string & {});
  /** Output only. Immutable. The name of the TPU. */
  name?: string;
  /** Resource labels to represent user-provided metadata. */
  labels?: Record<string, string>;
  /** Custom metadata to apply to the TPU Node. Can set startup-script and shutdown-script */
  metadata?: Record<string, string>;
  /** Output only. The qualified name of the QueuedResource that requested this Node. */
  queuedResource?: string;
  /** Shielded Instance options. */
  shieldedInstanceConfig?: ShieldedInstanceConfig;
  /** Output only. If this field is populated, it contains a description of why the TPU Node is unhealthy. */
  healthDescription?: string;
  /** Network configurations for the TPU node. network_config and network_configs are mutually exclusive, you can only specify one of them. If both are specified, an error will be returned. */
  networkConfig?: NetworkConfig;
  /** The health status of the TPU node. */
  health?:
    | "HEALTH_UNSPECIFIED"
    | "HEALTHY"
    | "TIMEOUT"
    | "UNHEALTHY_TENSORFLOW"
    | "UNHEALTHY_MAINTENANCE"
    | (string & {});
  /** Output only. Upcoming maintenance on this TPU node. */
  upcomingMaintenance?: UpcomingMaintenance;
  /** Output only. The unique identifier for the TPU Node. */
  id?: string;
  /** The AccleratorConfig for the TPU Node. */
  acceleratorConfig?: AcceleratorConfig;
  /** The user-supplied description of the TPU. Maximum of 512 characters. */
  description?: string;
  /** Output only. Whether the Node belongs to a Multislice group. */
  multisliceNode?: boolean;
  /** Output only. The Symptoms that have occurred to the TPU Node. */
  symptoms?: ReadonlyArray<Symptom>;
  /** The scheduling options for this node. */
  schedulingConfig?: SchedulingConfig;
  /** Output only. The API version that created this Node. */
  apiVersion?:
    | "API_VERSION_UNSPECIFIED"
    | "V1_ALPHA1"
    | "V1"
    | "V2_ALPHA1"
    | (string & {});
  /** Tags to apply to the TPU Node. Tags are used to identify valid sources or targets for network firewalls. */
  tags?: ReadonlyArray<string>;
  /** The CIDR block that the TPU node will use when selecting an IP address. This CIDR block must be a /29 block; the Compute Engine networks API forbids a smaller block, and using a larger block would be wasteful (a node can only consume one IP address). Errors will occur if the CIDR block has already been used for a currently existing TPU node, the CIDR block conflicts with any subnetworks in the user's provided network, or the provided network is peered with another network that is using that CIDR block. */
  cidrBlock?: string;
  /** The type of hardware accelerators associated with this node. */
  acceleratorType?: string;
  /** Output only. The network endpoints where TPU workers can be accessed and sent work. It is recommended that runtime clients of the node reach out to the 0th entry in this map first. */
  networkEndpoints?: ReadonlyArray<NetworkEndpoint>;
  /** Output only. The time when the node was created. */
  createTime?: string;
  /** Optional. Repeated network configurations for the TPU node. This field is used to specify multiple networks configs for the TPU node. network_config and network_configs are mutually exclusive, you can only specify one of them. If both are specified, an error will be returned. */
  networkConfigs?: ReadonlyArray<NetworkConfig>;
  /** The Google Cloud Platform Service Account to be used by the TPU node VMs. If None is specified, the default compute service account will be used. */
  serviceAccount?: ServiceAccount;
  /** Optional. Boot disk configuration. */
  bootDiskConfig?: BootDiskConfig;
  /** Required. The runtime version running in the Node. */
  runtimeVersion?: string;
  /** Optional. Whether Autocheckpoint is enabled. */
  autocheckpointEnabled?: boolean;
}

export const Node: Schema.Schema<Node> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataDisks: Schema.optional(Schema.Array(AttachedDisk)),
    state: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    queuedResource: Schema.optional(Schema.String),
    shieldedInstanceConfig: Schema.optional(ShieldedInstanceConfig),
    healthDescription: Schema.optional(Schema.String),
    networkConfig: Schema.optional(NetworkConfig),
    health: Schema.optional(Schema.String),
    upcomingMaintenance: Schema.optional(UpcomingMaintenance),
    id: Schema.optional(Schema.String),
    acceleratorConfig: Schema.optional(AcceleratorConfig),
    description: Schema.optional(Schema.String),
    multisliceNode: Schema.optional(Schema.Boolean),
    symptoms: Schema.optional(Schema.Array(Symptom)),
    schedulingConfig: Schema.optional(SchedulingConfig),
    apiVersion: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Array(Schema.String)),
    cidrBlock: Schema.optional(Schema.String),
    acceleratorType: Schema.optional(Schema.String),
    networkEndpoints: Schema.optional(Schema.Array(NetworkEndpoint)),
    createTime: Schema.optional(Schema.String),
    networkConfigs: Schema.optional(Schema.Array(NetworkConfig)),
    serviceAccount: Schema.optional(ServiceAccount),
    bootDiskConfig: Schema.optional(BootDiskConfig),
    runtimeVersion: Schema.optional(Schema.String),
    autocheckpointEnabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "Node" });

export interface MultiNodeParams {
  /** Required. Number of nodes with this spec. The system will attempt to provison "node_count" nodes as part of the request. This needs to be > 1. */
  nodeCount?: number;
  /** Optional. The workload type for the multi-node request. */
  workloadType?:
    | "WORKLOAD_TYPE_UNSPECIFIED"
    | "THROUGHPUT_OPTIMIZED"
    | "AVAILABILITY_OPTIMIZED"
    | (string & {});
  /** Prefix of node_ids in case of multi-node request Should follow the `^[A-Za-z0-9_.~+%-]+$` regex format. If node_count = 3 and node_id_prefix = "np", node ids of nodes created will be "np-0", "np-1", "np-2". If this field is not provided we use queued_resource_id as the node_id_prefix. */
  nodeIdPrefix?: string;
}

export const MultiNodeParams: Schema.Schema<MultiNodeParams> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodeCount: Schema.optional(Schema.Number),
    workloadType: Schema.optional(Schema.String),
    nodeIdPrefix: Schema.optional(Schema.String),
  }).annotate({ identifier: "MultiNodeParams" });

export interface NodeSpec {
  /** Required. The node. */
  node?: Node;
  /** The unqualified resource name. Should follow the `^[A-Za-z0-9_.~+%-]+$` regex format. This is only specified when requesting a single node. In case of multi-node requests, multi_node_params must be populated instead. It's an error to specify both node_id and multi_node_params. */
  nodeId?: string;
  /** Optional. Fields to specify in case of multi-node request. */
  multiNodeParams?: MultiNodeParams;
  /** Required. The parent resource name. */
  parent?: string;
}

export const NodeSpec: Schema.Schema<NodeSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    node: Schema.optional(Node),
    nodeId: Schema.optional(Schema.String),
    multiNodeParams: Schema.optional(MultiNodeParams),
    parent: Schema.optional(Schema.String),
  }).annotate({ identifier: "NodeSpec" });

export interface Tpu {
  /** The TPU node(s) being requested. */
  nodeSpec?: ReadonlyArray<NodeSpec>;
}

export const Tpu: Schema.Schema<Tpu> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodeSpec: Schema.optional(Schema.Array(NodeSpec)),
  }).annotate({ identifier: "Tpu" });

export interface GenerateServiceIdentityRequest {}

export const GenerateServiceIdentityRequest: Schema.Schema<GenerateServiceIdentityRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GenerateServiceIdentityRequest",
  });

export interface DeletingData {}

export const DeletingData: Schema.Schema<DeletingData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "DeletingData",
  });

export interface SuspendingData {}

export const SuspendingData: Schema.Schema<SuspendingData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "SuspendingData",
  });

export interface ResetQueuedResourceRequest {}

export const ResetQueuedResourceRequest: Schema.Schema<ResetQueuedResourceRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "ResetQueuedResourceRequest",
  });

export interface OperationMetadata {
  /** The time the operation was created. */
  createTime?: string;
  /** Target of the operation - for example projects/project-1/connectivityTests/test-1 */
  target?: string;
  /** Specifies if cancellation was requested for the operation. */
  cancelRequested?: boolean;
  /** API version. */
  apiVersion?: string;
  /** The time the operation finished running. */
  endTime?: string;
  /** Name of the verb executed by the operation. */
  verb?: string;
  /** Human-readable status of the operation, if any. */
  statusDetail?: string;
}

export const OperationMetadata: Schema.Schema<OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    cancelRequested: Schema.optional(Schema.Boolean),
    apiVersion: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
    statusDetail: Schema.optional(Schema.String),
  }).annotate({ identifier: "OperationMetadata" });

export interface Spot {}

export const Spot: Schema.Schema<Spot> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Spot",
  });

export interface RunDuration {
  /** The maximum duration of the requested resource. */
  maxRunDuration?: string;
  /** The time at which the requested resource will be terminated. */
  terminationTime?: string;
}

export const RunDuration: Schema.Schema<RunDuration> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxRunDuration: Schema.optional(Schema.String),
    terminationTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "RunDuration" });

export interface Guaranteed {
  /** Optional. Defines the minimum duration of the guarantee. If specified, the requested resources will only be provisioned if they can be allocated for at least the given duration. */
  minDuration?: string;
  /** Optional. Specifies the request should be scheduled on reserved capacity. */
  reserved?: boolean;
}

export const Guaranteed: Schema.Schema<Guaranteed> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minDuration: Schema.optional(Schema.String),
    reserved: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "Guaranteed" });

export interface QueueingPolicy {
  /** A relative time after which resources may be created. */
  validAfterDuration?: string;
  /** An absolute time at which resources may be created. */
  validAfterTime?: string;
  /** An absolute time interval within which resources may be created. */
  validInterval?: Interval;
  /** A relative time after which resources should not be created. If the request cannot be fulfilled by this time the request will be failed. */
  validUntilDuration?: string;
  /** An absolute time after which resources should not be created. If the request cannot be fulfilled by this time the request will be failed. */
  validUntilTime?: string;
}

export const QueueingPolicy: Schema.Schema<QueueingPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validAfterDuration: Schema.optional(Schema.String),
    validAfterTime: Schema.optional(Schema.String),
    validInterval: Schema.optional(Interval),
    validUntilDuration: Schema.optional(Schema.String),
    validUntilTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "QueueingPolicy" });

export interface SuspendedData {}

export const SuspendedData: Schema.Schema<SuspendedData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "SuspendedData",
  });

export interface AcceptedData {}

export const AcceptedData: Schema.Schema<AcceptedData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AcceptedData",
  });

export interface ProvisioningData {}

export const ProvisioningData: Schema.Schema<ProvisioningData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "ProvisioningData",
  });

export interface ActiveData {}

export const ActiveData: Schema.Schema<ActiveData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "ActiveData",
  });

export interface CreatingData {}

export const CreatingData: Schema.Schema<CreatingData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CreatingData",
  });

export interface FailedData {
  /** The error that caused the queued resource to enter the FAILED state. */
  error?: Status;
}

export const FailedData: Schema.Schema<FailedData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    error: Schema.optional(Status),
  }).annotate({ identifier: "FailedData" });

export interface QueuedResourceState {
  /** Further data for the deleting state. */
  deletingData?: DeletingData;
  /** Further data for the suspended state. */
  suspendedData?: SuspendedData;
  /** Further data for the suspending state. */
  suspendingData?: SuspendingData;
  /** Further data for the accepted state. */
  acceptedData?: AcceptedData;
  /** Further data for the provisioning state. */
  provisioningData?: ProvisioningData;
  /** Output only. The initiator of the QueuedResources's current state. Used to indicate whether the SUSPENDING/SUSPENDED state was initiated by the user or the service. */
  stateInitiator?:
    | "STATE_INITIATOR_UNSPECIFIED"
    | "USER"
    | "SERVICE"
    | (string & {});
  /** State of the QueuedResource request. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "ACCEPTED"
    | "PROVISIONING"
    | "FAILED"
    | "DELETING"
    | "ACTIVE"
    | "SUSPENDING"
    | "SUSPENDED"
    | "WAITING_FOR_RESOURCES"
    | (string & {});
  /** Further data for the active state. */
  activeData?: ActiveData;
  /** Further data for the creating state. */
  creatingData?: CreatingData;
  /** Further data for the failed state. */
  failedData?: FailedData;
}

export const QueuedResourceState: Schema.Schema<QueuedResourceState> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deletingData: Schema.optional(DeletingData),
    suspendedData: Schema.optional(SuspendedData),
    suspendingData: Schema.optional(SuspendingData),
    acceptedData: Schema.optional(AcceptedData),
    provisioningData: Schema.optional(ProvisioningData),
    stateInitiator: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    activeData: Schema.optional(ActiveData),
    creatingData: Schema.optional(CreatingData),
    failedData: Schema.optional(FailedData),
  }).annotate({ identifier: "QueuedResourceState" });

export interface BestEffort {}

export const BestEffort: Schema.Schema<BestEffort> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "BestEffort",
  });

export interface QueuedResource {
  /** Optional. The Spot tier. */
  spot?: Spot;
  /** Defines a TPU resource. */
  tpu?: Tpu;
  /** Optional. The duration of the requested resource. */
  runDuration?: RunDuration;
  /** Output only. Immutable. The name of the QueuedResource. */
  name?: string;
  /** The Guaranteed tier. */
  guaranteed?: Guaranteed;
  /** The queueing policy of the QueuedRequest. */
  queueingPolicy?: QueueingPolicy;
  /** Output only. State of the QueuedResource request. */
  state?: QueuedResourceState;
  /** Output only. The time when the QueuedResource was created. */
  createTime?: string;
  /** Name of the reservation in which the resource should be provisioned. Format: projects/{project}/locations/{zone}/reservations/{reservation} */
  reservationName?: string;
  /** Optional. The provisioning model for the resource. */
  provisioningModel?:
    | "PROVISIONING_MODEL_UNSPECIFIED"
    | "STANDARD"
    | "SPOT"
    | "RESERVATION_BOUND"
    | "FLEX_START"
    | (string & {});
  /** The BestEffort tier. */
  bestEffort?: BestEffort;
}

export const QueuedResource: Schema.Schema<QueuedResource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    spot: Schema.optional(Spot),
    tpu: Schema.optional(Tpu),
    runDuration: Schema.optional(RunDuration),
    name: Schema.optional(Schema.String),
    guaranteed: Schema.optional(Guaranteed),
    queueingPolicy: Schema.optional(QueueingPolicy),
    state: Schema.optional(QueuedResourceState),
    createTime: Schema.optional(Schema.String),
    reservationName: Schema.optional(Schema.String),
    provisioningModel: Schema.optional(Schema.String),
    bestEffort: Schema.optional(BestEffort),
  }).annotate({ identifier: "QueuedResource" });

export interface PerformMaintenanceQueuedResourceRequest {
  /** The names of the nodes to perform maintenance on. */
  nodeNames?: ReadonlyArray<string>;
}

export const PerformMaintenanceQueuedResourceRequest: Schema.Schema<PerformMaintenanceQueuedResourceRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodeNames: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "PerformMaintenanceQueuedResourceRequest" });

export interface SimulateMaintenanceEventRequest {
  /** The 0-based worker ID. If it is empty, worker ID 0 will be selected for maintenance event simulation. A maintenance event will only be fired on the first specified worker ID. Future implementations may support firing on multiple workers. */
  workerIds?: ReadonlyArray<string>;
}

export const SimulateMaintenanceEventRequest: Schema.Schema<SimulateMaintenanceEventRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    workerIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "SimulateMaintenanceEventRequest" });

export interface AcceleratorType {
  /** The accelerator type. */
  type?: string;
  /** The resource name. */
  name?: string;
  /** The accelerator config. */
  acceleratorConfigs?: ReadonlyArray<AcceleratorConfig>;
}

export const AcceleratorType: Schema.Schema<AcceleratorType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    acceleratorConfigs: Schema.optional(Schema.Array(AcceleratorConfig)),
  }).annotate({ identifier: "AcceleratorType" });

export interface NodeUpcomingMaintenanceInfo {
  /** Upcoming maintenance info for this node. */
  upcomingMaintenance?: UpcomingMaintenance;
  /** Unqualified node name. */
  nodeName?: string;
  /** UID of this node. */
  nodeUid?: string;
}

export const NodeUpcomingMaintenanceInfo: Schema.Schema<NodeUpcomingMaintenanceInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    upcomingMaintenance: Schema.optional(UpcomingMaintenance),
    nodeName: Schema.optional(Schema.String),
    nodeUid: Schema.optional(Schema.String),
  }).annotate({ identifier: "NodeUpcomingMaintenanceInfo" });

export interface ServiceIdentity {
  /** The email address of the service identity. */
  email?: string;
}

export const ServiceIdentity: Schema.Schema<ServiceIdentity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email: Schema.optional(Schema.String),
  }).annotate({ identifier: "ServiceIdentity" });

export interface GenerateServiceIdentityResponse {
  /** ServiceIdentity that was created or retrieved. */
  identity?: ServiceIdentity;
}

export const GenerateServiceIdentityResponse: Schema.Schema<GenerateServiceIdentityResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    identity: Schema.optional(ServiceIdentity),
  }).annotate({ identifier: "GenerateServiceIdentityResponse" });

export interface RuntimeVersion {
  /** The resource name. */
  name?: string;
  /** The runtime version. */
  version?: string;
}

export const RuntimeVersion: Schema.Schema<RuntimeVersion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "RuntimeVersion" });

export interface GetMaintenanceInfoResponse {
  /** The list of upcoming maintenance entries. */
  nodeUpcomingMaintenances?: ReadonlyArray<NodeUpcomingMaintenanceInfo>;
}

export const GetMaintenanceInfoResponse: Schema.Schema<GetMaintenanceInfoResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodeUpcomingMaintenances: Schema.optional(
      Schema.Array(NodeUpcomingMaintenanceInfo),
    ),
  }).annotate({ identifier: "GetMaintenanceInfoResponse" });

export interface ListNodesResponse {
  /** The listed nodes. */
  nodes?: ReadonlyArray<Node>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The next page token or empty if none. */
  nextPageToken?: string;
}

export const ListNodesResponse: Schema.Schema<ListNodesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodes: Schema.optional(Schema.Array(Node)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListNodesResponse" });

export interface ListRuntimeVersionsResponse {
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The listed nodes. */
  runtimeVersions?: ReadonlyArray<RuntimeVersion>;
  /** The next page token or empty if none. */
  nextPageToken?: string;
}

export const ListRuntimeVersionsResponse: Schema.Schema<ListRuntimeVersionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    runtimeVersions: Schema.optional(Schema.Array(RuntimeVersion)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListRuntimeVersionsResponse" });

export interface Reservation {
  /** A standard reservation. */
  standard?: Standard;
  /** Output only. The state of the Reservation. */
  state?:
    | "STATE_UNSPECIFIED"
    | "APPROVED"
    | "PROVISIONING"
    | "ACTIVE"
    | "DEPROVISIONING"
    | "EXPIRED"
    | "FAILED"
    | (string & {});
  /** The reservation name with the format: projects/{projectID}/locations/{location}/reservations/{reservationID} */
  name?: string;
}

export const Reservation: Schema.Schema<Reservation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    standard: Schema.optional(Standard),
    state: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Reservation" });

export interface StartNodeRequest {}

export const StartNodeRequest: Schema.Schema<StartNodeRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "StartNodeRequest",
  });

export interface GetGuestAttributesRequest {
  /** The guest attributes path to be queried. */
  queryPath?: string;
  /** The 0-based worker ID. If it is empty, all workers' GuestAttributes will be returned. */
  workerIds?: ReadonlyArray<string>;
}

export const GetGuestAttributesRequest: Schema.Schema<GetGuestAttributesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    queryPath: Schema.optional(Schema.String),
    workerIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GetGuestAttributesRequest" });

export interface ListAcceleratorTypesResponse {
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The listed nodes. */
  acceleratorTypes?: ReadonlyArray<AcceleratorType>;
  /** The next page token or empty if none. */
  nextPageToken?: string;
}

export const ListAcceleratorTypesResponse: Schema.Schema<ListAcceleratorTypesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    acceleratorTypes: Schema.optional(Schema.Array(AcceleratorType)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListAcceleratorTypesResponse" });

export interface ListQueuedResourcesResponse {
  /** The listed queued resources. */
  queuedResources?: ReadonlyArray<QueuedResource>;
  /** The next page token or empty if none. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListQueuedResourcesResponse: Schema.Schema<ListQueuedResourcesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    queuedResources: Schema.optional(Schema.Array(QueuedResource)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListQueuedResourcesResponse" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface GetGuestAttributesResponse {
  /** The guest attributes for the TPU workers. */
  guestAttributes?: ReadonlyArray<GuestAttributes>;
}

export const GetGuestAttributesResponse: Schema.Schema<GetGuestAttributesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    guestAttributes: Schema.optional(Schema.Array(GuestAttributes)),
  }).annotate({ identifier: "GetGuestAttributesResponse" });

export interface ListReservationsResponse {
  /** The listed reservations. */
  reservations?: ReadonlyArray<Reservation>;
  /** The next page token or empty if none. */
  nextPageToken?: string;
}

export const ListReservationsResponse: Schema.Schema<ListReservationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reservations: Schema.optional(Schema.Array(Reservation)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListReservationsResponse" });

export interface StopNodeRequest {}

export const StopNodeRequest: Schema.Schema<StopNodeRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "StopNodeRequest",
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

export interface ListProjectsLocationsRequest {
  /** Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v2alpha1/{+name}/locations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRequest>;

export type ListProjectsLocationsResponse = ListLocationsResponse;
export const ListProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListLocationsResponse;

export type ListProjectsLocationsError = DefaultErrors | NotFound | Forbidden;

/** Lists information about the supported locations for this service. This method can be called in two ways: * **List all public locations:** Use the path `GET /v1/locations`. * **List project-visible locations:** Use the path `GET /v1/projects/{project_id}/locations`. This may include public locations as well as private or other locations specifically visible to the project. */
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
    T.Http({ method: "GET", path: "v2alpha1/{+name}" }),
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

export interface GenerateServiceIdentityProjectsLocationsRequest {
  /** Required. The parent resource name. */
  parent: string;
  /** Request body */
  body?: GenerateServiceIdentityRequest;
}

export const GenerateServiceIdentityProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GenerateServiceIdentityRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2alpha1/{+parent}:generateServiceIdentity",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GenerateServiceIdentityProjectsLocationsRequest>;

export type GenerateServiceIdentityProjectsLocationsResponse =
  GenerateServiceIdentityResponse;
export const GenerateServiceIdentityProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GenerateServiceIdentityResponse;

export type GenerateServiceIdentityProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Generates the Cloud TPU service identity for the project. */
export const generateServiceIdentityProjectsLocations: API.OperationMethod<
  GenerateServiceIdentityProjectsLocationsRequest,
  GenerateServiceIdentityProjectsLocationsResponse,
  GenerateServiceIdentityProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GenerateServiceIdentityProjectsLocationsRequest,
  output: GenerateServiceIdentityProjectsLocationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsRuntimeVersionsRequest {
  /** List filter. */
  filter?: string;
  /** The next_page_token value returned from a previous List request, if any. */
  pageToken?: string;
  /** Required. The parent resource name. */
  parent: string;
  /** The maximum number of items to return. */
  pageSize?: number;
  /** Sort results. */
  orderBy?: string;
}

export const ListProjectsLocationsRuntimeVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v2alpha1/{+parent}/runtimeVersions" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRuntimeVersionsRequest>;

export type ListProjectsLocationsRuntimeVersionsResponse =
  ListRuntimeVersionsResponse;
export const ListProjectsLocationsRuntimeVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListRuntimeVersionsResponse;

export type ListProjectsLocationsRuntimeVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists runtime versions supported by this API. */
export const listProjectsLocationsRuntimeVersions: API.PaginatedOperationMethod<
  ListProjectsLocationsRuntimeVersionsRequest,
  ListProjectsLocationsRuntimeVersionsResponse,
  ListProjectsLocationsRuntimeVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRuntimeVersionsRequest,
  output: ListProjectsLocationsRuntimeVersionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsRuntimeVersionsRequest {
  /** Required. The resource name. */
  name: string;
}

export const GetProjectsLocationsRuntimeVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsRuntimeVersionsRequest>;

export type GetProjectsLocationsRuntimeVersionsResponse = RuntimeVersion;
export const GetProjectsLocationsRuntimeVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ RuntimeVersion;

export type GetProjectsLocationsRuntimeVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a runtime version. */
export const getProjectsLocationsRuntimeVersions: API.OperationMethod<
  GetProjectsLocationsRuntimeVersionsRequest,
  GetProjectsLocationsRuntimeVersionsResponse,
  GetProjectsLocationsRuntimeVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRuntimeVersionsRequest,
  output: GetProjectsLocationsRuntimeVersionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsQueuedResourcesRequest {
  /** Required. The parent resource name. */
  parent: string;
  /** The maximum number of items to return. */
  pageSize?: number;
  /** The next_page_token value returned from a previous List request, if any. */
  pageToken?: string;
}

export const ListProjectsLocationsQueuedResourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2alpha1/{+parent}/queuedResources" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsQueuedResourcesRequest>;

export type ListProjectsLocationsQueuedResourcesResponse =
  ListQueuedResourcesResponse;
export const ListProjectsLocationsQueuedResourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListQueuedResourcesResponse;

export type ListProjectsLocationsQueuedResourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists queued resources. */
export const listProjectsLocationsQueuedResources: API.PaginatedOperationMethod<
  ListProjectsLocationsQueuedResourcesRequest,
  ListProjectsLocationsQueuedResourcesResponse,
  ListProjectsLocationsQueuedResourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsQueuedResourcesRequest,
  output: ListProjectsLocationsQueuedResourcesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsQueuedResourcesRequest {
  /** Idempotent request UUID. */
  requestId?: string;
  /** Required. The resource name. */
  name: string;
  /** If set to true, all running nodes belonging to this queued resource will be deleted first and then the queued resource will be deleted. Otherwise (i.e. force=false), the queued resource will only be deleted if its nodes have already been deleted or the queued resource is in the ACCEPTED, FAILED, or SUSPENDED state. */
  force?: boolean;
}

export const DeleteProjectsLocationsQueuedResourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsQueuedResourcesRequest>;

export type DeleteProjectsLocationsQueuedResourcesResponse = Operation;
export const DeleteProjectsLocationsQueuedResourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsQueuedResourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a QueuedResource TPU instance. */
export const deleteProjectsLocationsQueuedResources: API.OperationMethod<
  DeleteProjectsLocationsQueuedResourcesRequest,
  DeleteProjectsLocationsQueuedResourcesResponse,
  DeleteProjectsLocationsQueuedResourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsQueuedResourcesRequest,
  output: DeleteProjectsLocationsQueuedResourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetMaintenanceInfoProjectsLocationsQueuedResourcesRequest {
  /** Required. The QueuedResource name. */
  name: string;
}

export const GetMaintenanceInfoProjectsLocationsQueuedResourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2alpha1/{+name}:getMaintenanceInfo" }),
    svc,
  ) as unknown as Schema.Schema<GetMaintenanceInfoProjectsLocationsQueuedResourcesRequest>;

export type GetMaintenanceInfoProjectsLocationsQueuedResourcesResponse =
  GetMaintenanceInfoResponse;
export const GetMaintenanceInfoProjectsLocationsQueuedResourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GetMaintenanceInfoResponse;

export type GetMaintenanceInfoProjectsLocationsQueuedResourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the maintenance info for a queued resource. */
export const getMaintenanceInfoProjectsLocationsQueuedResources: API.OperationMethod<
  GetMaintenanceInfoProjectsLocationsQueuedResourcesRequest,
  GetMaintenanceInfoProjectsLocationsQueuedResourcesResponse,
  GetMaintenanceInfoProjectsLocationsQueuedResourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetMaintenanceInfoProjectsLocationsQueuedResourcesRequest,
  output: GetMaintenanceInfoProjectsLocationsQueuedResourcesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ResetProjectsLocationsQueuedResourcesRequest {
  /** Required. The name of the queued resource. */
  name: string;
  /** Request body */
  body?: ResetQueuedResourceRequest;
}

export const ResetProjectsLocationsQueuedResourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ResetQueuedResourceRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2alpha1/{+name}:reset", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ResetProjectsLocationsQueuedResourcesRequest>;

export type ResetProjectsLocationsQueuedResourcesResponse = Operation;
export const ResetProjectsLocationsQueuedResourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type ResetProjectsLocationsQueuedResourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Resets a QueuedResource TPU instance */
export const resetProjectsLocationsQueuedResources: API.OperationMethod<
  ResetProjectsLocationsQueuedResourcesRequest,
  ResetProjectsLocationsQueuedResourcesResponse,
  ResetProjectsLocationsQueuedResourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ResetProjectsLocationsQueuedResourcesRequest,
  output: ResetProjectsLocationsQueuedResourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PerformMaintenanceQueuedResourceProjectsLocationsQueuedResourcesRequest {
  /** Required. The name of the QueuedResource which holds the nodes to perform maintenance on. */
  name: string;
  /** Request body */
  body?: PerformMaintenanceQueuedResourceRequest;
}

export const PerformMaintenanceQueuedResourceProjectsLocationsQueuedResourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(PerformMaintenanceQueuedResourceRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2alpha1/{+name}:performMaintenanceQueuedResource",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PerformMaintenanceQueuedResourceProjectsLocationsQueuedResourcesRequest>;

export type PerformMaintenanceQueuedResourceProjectsLocationsQueuedResourcesResponse =
  Operation;
export const PerformMaintenanceQueuedResourceProjectsLocationsQueuedResourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PerformMaintenanceQueuedResourceProjectsLocationsQueuedResourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Perform manual maintenance on specific nodes of a QueuedResource. */
export const performMaintenanceQueuedResourceProjectsLocationsQueuedResources: API.OperationMethod<
  PerformMaintenanceQueuedResourceProjectsLocationsQueuedResourcesRequest,
  PerformMaintenanceQueuedResourceProjectsLocationsQueuedResourcesResponse,
  PerformMaintenanceQueuedResourceProjectsLocationsQueuedResourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    PerformMaintenanceQueuedResourceProjectsLocationsQueuedResourcesRequest,
  output:
    PerformMaintenanceQueuedResourceProjectsLocationsQueuedResourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsQueuedResourcesRequest {
  /** Idempotent request UUID. */
  requestId?: string;
  /** The unqualified resource name. Should follow the `^[A-Za-z0-9_.~+%-]+$` regex format. */
  queuedResourceId?: string;
  /** Required. The parent resource name. */
  parent: string;
  /** Request body */
  body?: QueuedResource;
}

export const CreateProjectsLocationsQueuedResourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    queuedResourceId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("queuedResourceId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(QueuedResource).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2alpha1/{+parent}/queuedResources",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsQueuedResourcesRequest>;

export type CreateProjectsLocationsQueuedResourcesResponse = Operation;
export const CreateProjectsLocationsQueuedResourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsQueuedResourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a QueuedResource TPU instance. */
export const createProjectsLocationsQueuedResources: API.OperationMethod<
  CreateProjectsLocationsQueuedResourcesRequest,
  CreateProjectsLocationsQueuedResourcesResponse,
  CreateProjectsLocationsQueuedResourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsQueuedResourcesRequest,
  output: CreateProjectsLocationsQueuedResourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsQueuedResourcesRequest {
  /** Required. The resource name. */
  name: string;
}

export const GetProjectsLocationsQueuedResourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsQueuedResourcesRequest>;

export type GetProjectsLocationsQueuedResourcesResponse = QueuedResource;
export const GetProjectsLocationsQueuedResourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ QueuedResource;

export type GetProjectsLocationsQueuedResourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a queued resource. */
export const getProjectsLocationsQueuedResources: API.OperationMethod<
  GetProjectsLocationsQueuedResourcesRequest,
  GetProjectsLocationsQueuedResourcesResponse,
  GetProjectsLocationsQueuedResourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsQueuedResourcesRequest,
  output: GetProjectsLocationsQueuedResourcesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsAcceleratorTypesRequest {
  /** Required. The resource name. */
  name: string;
}

export const GetProjectsLocationsAcceleratorTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAcceleratorTypesRequest>;

export type GetProjectsLocationsAcceleratorTypesResponse = AcceleratorType;
export const GetProjectsLocationsAcceleratorTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ AcceleratorType;

export type GetProjectsLocationsAcceleratorTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets AcceleratorType. */
export const getProjectsLocationsAcceleratorTypes: API.OperationMethod<
  GetProjectsLocationsAcceleratorTypesRequest,
  GetProjectsLocationsAcceleratorTypesResponse,
  GetProjectsLocationsAcceleratorTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAcceleratorTypesRequest,
  output: GetProjectsLocationsAcceleratorTypesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsAcceleratorTypesRequest {
  /** List filter. */
  filter?: string;
  /** The next_page_token value returned from a previous List request, if any. */
  pageToken?: string;
  /** Required. The parent resource name. */
  parent: string;
  /** The maximum number of items to return. */
  pageSize?: number;
  /** Sort results. */
  orderBy?: string;
}

export const ListProjectsLocationsAcceleratorTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v2alpha1/{+parent}/acceleratorTypes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAcceleratorTypesRequest>;

export type ListProjectsLocationsAcceleratorTypesResponse =
  ListAcceleratorTypesResponse;
export const ListProjectsLocationsAcceleratorTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAcceleratorTypesResponse;

export type ListProjectsLocationsAcceleratorTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists accelerator types supported by this API. */
export const listProjectsLocationsAcceleratorTypes: API.PaginatedOperationMethod<
  ListProjectsLocationsAcceleratorTypesRequest,
  ListProjectsLocationsAcceleratorTypesResponse,
  ListProjectsLocationsAcceleratorTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAcceleratorTypesRequest,
  output: ListProjectsLocationsAcceleratorTypesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsNodesRequest {
  /** Required. The resource name. */
  name: string;
}

export const GetProjectsLocationsNodesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsNodesRequest>;

export type GetProjectsLocationsNodesResponse = Node;
export const GetProjectsLocationsNodesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Node;

export type GetProjectsLocationsNodesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the details of a node. */
export const getProjectsLocationsNodes: API.OperationMethod<
  GetProjectsLocationsNodesRequest,
  GetProjectsLocationsNodesResponse,
  GetProjectsLocationsNodesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsNodesRequest,
  output: GetProjectsLocationsNodesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsNodesRequest {
  /** The unqualified resource name. */
  nodeId?: string;
  /** Required. The parent resource name. */
  parent: string;
  /** Idempotent request UUID. */
  requestId?: string;
  /** Request body */
  body?: Node;
}

export const CreateProjectsLocationsNodesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodeId: Schema.optional(Schema.String).pipe(T.HttpQuery("nodeId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(Node).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2alpha1/{+parent}/nodes", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsNodesRequest>;

export type CreateProjectsLocationsNodesResponse = Operation;
export const CreateProjectsLocationsNodesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsNodesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a node. */
export const createProjectsLocationsNodes: API.OperationMethod<
  CreateProjectsLocationsNodesRequest,
  CreateProjectsLocationsNodesResponse,
  CreateProjectsLocationsNodesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsNodesRequest,
  output: CreateProjectsLocationsNodesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface StopProjectsLocationsNodesRequest {
  /** Required. The resource name. */
  name: string;
  /** Request body */
  body?: StopNodeRequest;
}

export const StopProjectsLocationsNodesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(StopNodeRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2alpha1/{+name}:stop", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<StopProjectsLocationsNodesRequest>;

export type StopProjectsLocationsNodesResponse = Operation;
export const StopProjectsLocationsNodesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type StopProjectsLocationsNodesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Stops a node. This operation is only available with single TPU nodes. */
export const stopProjectsLocationsNodes: API.OperationMethod<
  StopProjectsLocationsNodesRequest,
  StopProjectsLocationsNodesResponse,
  StopProjectsLocationsNodesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StopProjectsLocationsNodesRequest,
  output: StopProjectsLocationsNodesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PerformMaintenanceProjectsLocationsNodesRequest {
  /** Required. The resource name. */
  name: string;
  /** Request body */
  body?: PerformMaintenanceRequest;
}

export const PerformMaintenanceProjectsLocationsNodesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(PerformMaintenanceRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2alpha1/{+name}:performMaintenance",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PerformMaintenanceProjectsLocationsNodesRequest>;

export type PerformMaintenanceProjectsLocationsNodesResponse = Operation;
export const PerformMaintenanceProjectsLocationsNodesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PerformMaintenanceProjectsLocationsNodesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Perform manual maintenance on a node. */
export const performMaintenanceProjectsLocationsNodes: API.OperationMethod<
  PerformMaintenanceProjectsLocationsNodesRequest,
  PerformMaintenanceProjectsLocationsNodesResponse,
  PerformMaintenanceProjectsLocationsNodesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PerformMaintenanceProjectsLocationsNodesRequest,
  output: PerformMaintenanceProjectsLocationsNodesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SimulateMaintenanceEventProjectsLocationsNodesRequest {
  /** Required. The resource name. */
  name: string;
  /** Request body */
  body?: SimulateMaintenanceEventRequest;
}

export const SimulateMaintenanceEventProjectsLocationsNodesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SimulateMaintenanceEventRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2alpha1/{+name}:simulateMaintenanceEvent",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SimulateMaintenanceEventProjectsLocationsNodesRequest>;

export type SimulateMaintenanceEventProjectsLocationsNodesResponse = Operation;
export const SimulateMaintenanceEventProjectsLocationsNodesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type SimulateMaintenanceEventProjectsLocationsNodesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Simulates a maintenance event. */
export const simulateMaintenanceEventProjectsLocationsNodes: API.OperationMethod<
  SimulateMaintenanceEventProjectsLocationsNodesRequest,
  SimulateMaintenanceEventProjectsLocationsNodesResponse,
  SimulateMaintenanceEventProjectsLocationsNodesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SimulateMaintenanceEventProjectsLocationsNodesRequest,
  output: SimulateMaintenanceEventProjectsLocationsNodesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsNodesRequest {
  /** Idempotent request UUID. */
  requestId?: string;
  /** Required. The resource name. */
  name: string;
}

export const DeleteProjectsLocationsNodesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsNodesRequest>;

export type DeleteProjectsLocationsNodesResponse = Operation;
export const DeleteProjectsLocationsNodesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsNodesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a node. */
export const deleteProjectsLocationsNodes: API.OperationMethod<
  DeleteProjectsLocationsNodesRequest,
  DeleteProjectsLocationsNodesResponse,
  DeleteProjectsLocationsNodesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsNodesRequest,
  output: DeleteProjectsLocationsNodesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface StartProjectsLocationsNodesRequest {
  /** Required. The resource name. */
  name: string;
  /** Request body */
  body?: StartNodeRequest;
}

export const StartProjectsLocationsNodesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(StartNodeRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2alpha1/{+name}:start", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<StartProjectsLocationsNodesRequest>;

export type StartProjectsLocationsNodesResponse = Operation;
export const StartProjectsLocationsNodesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type StartProjectsLocationsNodesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Starts a node. */
export const startProjectsLocationsNodes: API.OperationMethod<
  StartProjectsLocationsNodesRequest,
  StartProjectsLocationsNodesResponse,
  StartProjectsLocationsNodesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StartProjectsLocationsNodesRequest,
  output: StartProjectsLocationsNodesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsNodesRequest {
  /** Required. Mask of fields from Node to update. Supported fields: [description, tags, labels, metadata, network_config.enable_external_ips]. */
  updateMask?: string;
  /** Output only. Immutable. The name of the TPU. */
  name: string;
  /** Request body */
  body?: Node;
}

export const PatchProjectsLocationsNodesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Node).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2alpha1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsNodesRequest>;

export type PatchProjectsLocationsNodesResponse = Operation;
export const PatchProjectsLocationsNodesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsNodesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the configurations of a node. */
export const patchProjectsLocationsNodes: API.OperationMethod<
  PatchProjectsLocationsNodesRequest,
  PatchProjectsLocationsNodesResponse,
  PatchProjectsLocationsNodesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsNodesRequest,
  output: PatchProjectsLocationsNodesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetGuestAttributesProjectsLocationsNodesRequest {
  /** Required. The resource name. */
  name: string;
  /** Request body */
  body?: GetGuestAttributesRequest;
}

export const GetGuestAttributesProjectsLocationsNodesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GetGuestAttributesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2alpha1/{+name}:getGuestAttributes",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GetGuestAttributesProjectsLocationsNodesRequest>;

export type GetGuestAttributesProjectsLocationsNodesResponse =
  GetGuestAttributesResponse;
export const GetGuestAttributesProjectsLocationsNodesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GetGuestAttributesResponse;

export type GetGuestAttributesProjectsLocationsNodesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Retrieves the guest attributes for the node. */
export const getGuestAttributesProjectsLocationsNodes: API.OperationMethod<
  GetGuestAttributesProjectsLocationsNodesRequest,
  GetGuestAttributesProjectsLocationsNodesResponse,
  GetGuestAttributesProjectsLocationsNodesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetGuestAttributesProjectsLocationsNodesRequest,
  output: GetGuestAttributesProjectsLocationsNodesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsNodesRequest {
  /** Required. The parent resource name. */
  parent: string;
  /** The maximum number of items to return. */
  pageSize?: number;
  /** The next_page_token value returned from a previous List request, if any. */
  pageToken?: string;
}

export const ListProjectsLocationsNodesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2alpha1/{+parent}/nodes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsNodesRequest>;

export type ListProjectsLocationsNodesResponse = ListNodesResponse;
export const ListProjectsLocationsNodesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListNodesResponse;

export type ListProjectsLocationsNodesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists nodes. */
export const listProjectsLocationsNodes: API.PaginatedOperationMethod<
  ListProjectsLocationsNodesRequest,
  ListProjectsLocationsNodesResponse,
  ListProjectsLocationsNodesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsNodesRequest,
  output: ListProjectsLocationsNodesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CancelProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be cancelled. */
  name: string;
}

export const CancelProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "POST", path: "v2alpha1/{+name}:cancel", hasBody: true }),
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
  /** The standard list filter. */
  filter?: string;
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list page size. */
  pageSize?: number;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v2alpha1/{+name}/operations" }),
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
    T.Http({ method: "DELETE", path: "v2alpha1/{+name}" }),
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
    T.Http({ method: "GET", path: "v2alpha1/{+name}" }),
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

export interface ListProjectsLocationsReservationsRequest {
  /** The next_page_token value returned from a previous List request, if any. */
  pageToken?: string;
  /** Required. The parent for reservations. */
  parent: string;
  /** The maximum number of items to return. Defaults to 0 if not specified, which means no limit. */
  pageSize?: number;
}

export const ListProjectsLocationsReservationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v2alpha1/{+parent}/reservations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsReservationsRequest>;

export type ListProjectsLocationsReservationsResponse =
  ListReservationsResponse;
export const ListProjectsLocationsReservationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListReservationsResponse;

export type ListProjectsLocationsReservationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves the reservations for the given project in the given location. */
export const listProjectsLocationsReservations: API.PaginatedOperationMethod<
  ListProjectsLocationsReservationsRequest,
  ListProjectsLocationsReservationsResponse,
  ListProjectsLocationsReservationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsReservationsRequest,
  output: ListProjectsLocationsReservationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));
