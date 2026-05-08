// ==========================================================================
// Cloud TPU API (tpu v2)
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
  version: "v2",
  rootUrl: "https://tpu.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface Status {
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
}

export const Status: Schema.Schema<Status> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    code: Schema.optional(Schema.Number),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).annotate({ identifier: "Status" });

export interface Operation {
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    done: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    error: Schema.optional(Status),
  }).annotate({ identifier: "Operation" });

export interface MultisliceParams {
  /** Required. Number of nodes with this spec. The system will attempt to provision "node_count" nodes as part of the request. This needs to be > 1. */
  nodeCount?: number;
  /** Optional. Prefix of node_ids in case of multislice request. Should follow the `^[A-Za-z0-9_.~+%-]+$` regex format. If node_count = 3 and node_id_prefix = "np", node ids of nodes created will be "np-0", "np-1", "np-2". If this field is not provided we use queued_resource_id as the node_id_prefix. */
  nodeIdPrefix?: string;
}

export const MultisliceParams: Schema.Schema<MultisliceParams> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodeCount: Schema.optional(Schema.Number),
    nodeIdPrefix: Schema.optional(Schema.String),
  }).annotate({ identifier: "MultisliceParams" });

export interface OperationMetadata {
  /** The time the operation finished running. */
  endTime?: string;
  /** API version. */
  apiVersion?: string;
  /** Human-readable status of the operation, if any. */
  statusDetail?: string;
  /** The time the operation was created. */
  createTime?: string;
  /** Name of the verb executed by the operation. */
  verb?: string;
  /** Specifies if cancellation was requested for the operation. */
  cancelRequested?: boolean;
  /** Target of the operation - for example projects/project-1/connectivityTests/test-1 */
  target?: string;
}

export const OperationMetadata: Schema.Schema<OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endTime: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    statusDetail: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
    cancelRequested: Schema.optional(Schema.Boolean),
    target: Schema.optional(Schema.String),
  }).annotate({ identifier: "OperationMetadata" });

export interface SchedulingConfig {
  /** Defines whether the node is preemptible. */
  preemptible?: boolean;
  /** Whether the node is created under a reservation. */
  reserved?: boolean;
  /** Optional. Defines whether the node is Spot VM. */
  spot?: boolean;
}

export const SchedulingConfig: Schema.Schema<SchedulingConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    preemptible: Schema.optional(Schema.Boolean),
    reserved: Schema.optional(Schema.Boolean),
    spot: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "SchedulingConfig" });

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

export interface AcceleratorType {
  /** The resource name. */
  name?: string;
  /** The accelerator type. */
  type?: string;
  /** The accelerator config. */
  acceleratorConfigs?: ReadonlyArray<AcceleratorConfig>;
}

export const AcceleratorType: Schema.Schema<AcceleratorType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    acceleratorConfigs: Schema.optional(Schema.Array(AcceleratorConfig)),
  }).annotate({ identifier: "AcceleratorType" });

export interface CreatingData {}

export const CreatingData: Schema.Schema<CreatingData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CreatingData",
  });

export interface GuestAttributesEntry {
  /** Namespace for the guest attribute entry. */
  namespace?: string;
  /** Key for the guest attribute entry. */
  key?: string;
  /** Value for the guest attribute entry. */
  value?: string;
}

export const GuestAttributesEntry: Schema.Schema<GuestAttributesEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    namespace: Schema.optional(Schema.String),
    key: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "GuestAttributesEntry" });

export interface GuestAttributesValue {
  /** The list of guest attributes entries. */
  items?: ReadonlyArray<GuestAttributesEntry>;
}

export const GuestAttributesValue: Schema.Schema<GuestAttributesValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.optional(Schema.Array(GuestAttributesEntry)),
  }).annotate({ identifier: "GuestAttributesValue" });

export interface GuestAttributes {
  /** The value of the requested queried path. */
  queryValue?: GuestAttributesValue;
  /** The path to be queried. This can be the default namespace ('/') or a nested namespace ('/\/') or a specified key ('/\/\') */
  queryPath?: string;
}

export const GuestAttributes: Schema.Schema<GuestAttributes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    queryValue: Schema.optional(GuestAttributesValue),
    queryPath: Schema.optional(Schema.String),
  }).annotate({ identifier: "GuestAttributes" });

export interface GetGuestAttributesResponse {
  /** The guest attributes for the TPU workers. */
  guestAttributes?: ReadonlyArray<GuestAttributes>;
}

export const GetGuestAttributesResponse: Schema.Schema<GetGuestAttributesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    guestAttributes: Schema.optional(Schema.Array(GuestAttributes)),
  }).annotate({ identifier: "GetGuestAttributesResponse" });

export interface AccessConfig {
  /** Output only. An external IP address associated with the TPU worker. */
  externalIp?: string;
}

export const AccessConfig: Schema.Schema<AccessConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    externalIp: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccessConfig" });

export interface ServiceAccount {
  /** The list of scopes to be made available for this service account. If empty, access to all Cloud APIs will be allowed. */
  scope?: ReadonlyArray<string>;
  /** Email address of the service account. If empty, default Compute service account will be used. */
  email?: string;
}

export const ServiceAccount: Schema.Schema<ServiceAccount> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scope: Schema.optional(Schema.Array(Schema.String)),
    email: Schema.optional(Schema.String),
  }).annotate({ identifier: "ServiceAccount" });

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

export interface ListRuntimeVersionsResponse {
  /** The listed nodes. */
  runtimeVersions?: ReadonlyArray<RuntimeVersion>;
  /** The next page token or empty if none. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListRuntimeVersionsResponse: Schema.Schema<ListRuntimeVersionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    runtimeVersions: Schema.optional(Schema.Array(RuntimeVersion)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListRuntimeVersionsResponse" });

export interface Location {
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
}

export const Location: Schema.Schema<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locationId: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
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

export interface ListAcceleratorTypesResponse {
  /** The listed nodes. */
  acceleratorTypes?: ReadonlyArray<AcceleratorType>;
  /** The next page token or empty if none. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListAcceleratorTypesResponse: Schema.Schema<ListAcceleratorTypesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    acceleratorTypes: Schema.optional(Schema.Array(AcceleratorType)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListAcceleratorTypesResponse" });

export interface StopNodeRequest {}

export const StopNodeRequest: Schema.Schema<StopNodeRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "StopNodeRequest",
  });

export interface AttachedDisk {
  /** The mode in which to attach this disk. If not specified, the default is READ_WRITE mode. Only applicable to data_disks. */
  mode?: "DISK_MODE_UNSPECIFIED" | "READ_WRITE" | "READ_ONLY" | (string & {});
  /** Specifies the full path to an existing disk. For example: "projects/my-project/zones/us-central1-c/disks/my-disk". */
  sourceDisk?: string;
}

export const AttachedDisk: Schema.Schema<AttachedDisk> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mode: Schema.optional(Schema.String),
    sourceDisk: Schema.optional(Schema.String),
  }).annotate({ identifier: "AttachedDisk" });

export interface NetworkEndpoint {
  /** The access config for the TPU worker. */
  accessConfig?: AccessConfig;
  /** The port of this network endpoint. */
  port?: number;
  /** The internal IP address of this network endpoint. */
  ipAddress?: string;
}

export const NetworkEndpoint: Schema.Schema<NetworkEndpoint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accessConfig: Schema.optional(AccessConfig),
    port: Schema.optional(Schema.Number),
    ipAddress: Schema.optional(Schema.String),
  }).annotate({ identifier: "NetworkEndpoint" });

export interface UpcomingMaintenance {
  /** Indicates if the maintenance can be customer triggered. */
  canReschedule?: boolean;
  /** The latest time for the planned maintenance window to start. This timestamp value is in RFC3339 text format. */
  latestWindowStartTime?: string;
  /** Defines the type of maintenance. */
  type?: "UNKNOWN_TYPE" | "SCHEDULED" | "UNSCHEDULED" | (string & {});
  /** The status of the maintenance. */
  maintenanceStatus?: "UNKNOWN" | "PENDING" | "ONGOING" | (string & {});
  /** The current start time of the maintenance window. This timestamp value is in RFC3339 text format. */
  windowStartTime?: string;
  /** The time by which the maintenance disruption will be completed. This timestamp value is in RFC3339 text format. */
  windowEndTime?: string;
}

export const UpcomingMaintenance: Schema.Schema<UpcomingMaintenance> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    canReschedule: Schema.optional(Schema.Boolean),
    latestWindowStartTime: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    maintenanceStatus: Schema.optional(Schema.String),
    windowStartTime: Schema.optional(Schema.String),
    windowEndTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "UpcomingMaintenance" });

export interface NetworkConfig {
  /** The name of the subnetwork for the TPU node. It must be a preexisting Google Compute Engine subnetwork. If none is provided, "default" will be used. */
  subnetwork?: string;
  /** Indicates that external IP addresses would be associated with the TPU workers. If set to false, the specified subnetwork or network should have Private Google Access enabled. */
  enableExternalIps?: boolean;
  /** The name of the network for the TPU node. It must be a preexisting Google Compute Engine network. If none is provided, "default" will be used. */
  network?: string;
  /** Optional. Specifies networking queue count for TPU VM instance's network interface. */
  queueCount?: number;
  /** Allows the TPU node to send and receive packets with non-matching destination or source IPs. This is required if you plan to use the TPU workers to forward routes. */
  canIpForward?: boolean;
}

export const NetworkConfig: Schema.Schema<NetworkConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subnetwork: Schema.optional(Schema.String),
    enableExternalIps: Schema.optional(Schema.Boolean),
    network: Schema.optional(Schema.String),
    queueCount: Schema.optional(Schema.Number),
    canIpForward: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "NetworkConfig" });

export interface ShieldedInstanceConfig {
  /** Defines whether the instance has Secure Boot enabled. */
  enableSecureBoot?: boolean;
}

export const ShieldedInstanceConfig: Schema.Schema<ShieldedInstanceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableSecureBoot: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ShieldedInstanceConfig" });

export interface CustomerEncryptionKey {
  /** The name of the encryption key that is stored in Google Cloud KMS. For example: "kmsKeyName": "projects/KMS_PROJECT_ID/locations/REGION/keyRings/KEY_REGION/cryptoKeys/KEY The fully-qualifed key name may be returned for resource GET requests. For example: "kmsKeyName": "projects/KMS_PROJECT_ID/locations/REGION/keyRings/KEY_REGION/cryptoKeys/KEY/cryptoKeyVersions/1 */
  kmsKeyName?: string;
}

export const CustomerEncryptionKey: Schema.Schema<CustomerEncryptionKey> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kmsKeyName: Schema.optional(Schema.String),
  }).annotate({ identifier: "CustomerEncryptionKey" });

export interface BootDiskConfig {
  /** Optional. Customer encryption key for boot disk. */
  customerEncryptionKey?: CustomerEncryptionKey;
}

export const BootDiskConfig: Schema.Schema<BootDiskConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customerEncryptionKey: Schema.optional(CustomerEncryptionKey),
  }).annotate({ identifier: "BootDiskConfig" });

export interface Node {
  /** The additional data disks for the Node. */
  dataDisks?: ReadonlyArray<AttachedDisk>;
  /** The scheduling options for this node. */
  schedulingConfig?: SchedulingConfig;
  /** Output only. The network endpoints where TPU workers can be accessed and sent work. It is recommended that runtime clients of the node reach out to the 0th entry in this map first. */
  networkEndpoints?: ReadonlyArray<NetworkEndpoint>;
  /** Output only. Upcoming maintenance on this TPU node. */
  upcomingMaintenance?: UpcomingMaintenance;
  /** Optional. Repeated network configurations for the TPU node. This field is used to specify multiple networks configs for the TPU node. network_config and network_configs are mutually exclusive, you can only specify one of them. If both are specified, an error will be returned. */
  networkConfigs?: ReadonlyArray<NetworkConfig>;
  /** The health status of the TPU node. */
  health?:
    | "HEALTH_UNSPECIFIED"
    | "HEALTHY"
    | "TIMEOUT"
    | "UNHEALTHY_TENSORFLOW"
    | "UNHEALTHY_MAINTENANCE"
    | (string & {});
  /** The user-supplied description of the TPU. Maximum of 512 characters. */
  description?: string;
  /** Custom metadata to apply to the TPU Node. Can set startup-script and shutdown-script */
  metadata?: Record<string, string>;
  /** Tags to apply to the TPU Node. Tags are used to identify valid sources or targets for network firewalls. */
  tags?: ReadonlyArray<string>;
  /** Shielded Instance options. */
  shieldedInstanceConfig?: ShieldedInstanceConfig;
  /** Output only. The qualified name of the QueuedResource that requested this Node. */
  queuedResource?: string;
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
  /** Optional. The type of hardware accelerators associated with this node. */
  acceleratorType?: string;
  /** Output only. Immutable. The name of the TPU. */
  name?: string;
  /** The Google Cloud Platform Service Account to be used by the TPU node VMs. If None is specified, the default compute service account will be used. */
  serviceAccount?: ServiceAccount;
  /** Network configurations for the TPU node. network_config and network_configs are mutually exclusive, you can only specify one of them. If both are specified, an error will be returned. */
  networkConfig?: NetworkConfig;
  /** Output only. The unique identifier for the TPU Node. */
  id?: string;
  /** Resource labels to represent user-provided metadata. */
  labels?: Record<string, string>;
  /** The CIDR block that the TPU node will use when selecting an IP address. This CIDR block must be a /29 block; the Compute Engine networks API forbids a smaller block, and using a larger block would be wasteful (a node can only consume one IP address). Errors will occur if the CIDR block has already been used for a currently existing TPU node, the CIDR block conflicts with any subnetworks in the user's provided network, or the provided network is peered with another network that is using that CIDR block. */
  cidrBlock?: string;
  /** Required. The runtime version running in the Node. */
  runtimeVersion?: string;
  /** Optional. Boot disk configuration. */
  bootDiskConfig?: BootDiskConfig;
  /** Output only. If this field is populated, it contains a description of why the TPU Node is unhealthy. */
  healthDescription?: string;
  /** Output only. The API version that created this Node. */
  apiVersion?:
    | "API_VERSION_UNSPECIFIED"
    | "V1_ALPHA1"
    | "V1"
    | "V2_ALPHA1"
    | "V2"
    | (string & {});
  /** Output only. Whether the Node belongs to a Multislice group. */
  multisliceNode?: boolean;
  /** Output only. The time when the node was created. */
  createTime?: string;
  /** Output only. The Symptoms that have occurred to the TPU Node. */
  symptoms?: ReadonlyArray<Symptom>;
  /** The AccleratorConfig for the TPU Node. */
  acceleratorConfig?: AcceleratorConfig;
}

export const Node: Schema.Schema<Node> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataDisks: Schema.optional(Schema.Array(AttachedDisk)),
    schedulingConfig: Schema.optional(SchedulingConfig),
    networkEndpoints: Schema.optional(Schema.Array(NetworkEndpoint)),
    upcomingMaintenance: Schema.optional(UpcomingMaintenance),
    networkConfigs: Schema.optional(Schema.Array(NetworkConfig)),
    health: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    tags: Schema.optional(Schema.Array(Schema.String)),
    shieldedInstanceConfig: Schema.optional(ShieldedInstanceConfig),
    queuedResource: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    acceleratorType: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    serviceAccount: Schema.optional(ServiceAccount),
    networkConfig: Schema.optional(NetworkConfig),
    id: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    cidrBlock: Schema.optional(Schema.String),
    runtimeVersion: Schema.optional(Schema.String),
    bootDiskConfig: Schema.optional(BootDiskConfig),
    healthDescription: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    multisliceNode: Schema.optional(Schema.Boolean),
    createTime: Schema.optional(Schema.String),
    symptoms: Schema.optional(Schema.Array(Symptom)),
    acceleratorConfig: Schema.optional(AcceleratorConfig),
  }).annotate({ identifier: "Node" });

export interface NodeSpec {
  /** Required. The parent resource name. */
  parent?: string;
  /** Optional. Fields to specify in case of multislice request. */
  multisliceParams?: MultisliceParams;
  /** Required. The node. */
  node?: Node;
  /** Optional. The unqualified resource name. Should follow the `^[A-Za-z0-9_.~+%-]+$` regex format. This is only specified when requesting a single node. In case of multislice requests, multislice_params must be populated instead. */
  nodeId?: string;
}

export const NodeSpec: Schema.Schema<NodeSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.optional(Schema.String),
    multisliceParams: Schema.optional(MultisliceParams),
    node: Schema.optional(Node),
    nodeId: Schema.optional(Schema.String),
  }).annotate({ identifier: "NodeSpec" });

export interface SuspendingData {}

export const SuspendingData: Schema.Schema<SuspendingData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "SuspendingData",
  });

export interface SuspendedData {}

export const SuspendedData: Schema.Schema<SuspendedData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "SuspendedData",
  });

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

export interface Spot {}

export const Spot: Schema.Schema<Spot> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Spot",
  });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface ResetQueuedResourceRequest {}

export const ResetQueuedResourceRequest: Schema.Schema<ResetQueuedResourceRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "ResetQueuedResourceRequest",
  });

export interface DeletingData {}

export const DeletingData: Schema.Schema<DeletingData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "DeletingData",
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

export interface GenerateServiceIdentityRequest {}

export const GenerateServiceIdentityRequest: Schema.Schema<GenerateServiceIdentityRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GenerateServiceIdentityRequest",
  });

export interface FailedData {
  /** Output only. The error that caused the queued resource to enter the FAILED state. */
  error?: Status;
}

export const FailedData: Schema.Schema<FailedData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    error: Schema.optional(Status),
  }).annotate({ identifier: "FailedData" });

export interface ListNodesResponse {
  /** The next page token or empty if none. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The listed nodes. */
  nodes?: ReadonlyArray<Node>;
}

export const ListNodesResponse: Schema.Schema<ListNodesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nodes: Schema.optional(Schema.Array(Node)),
  }).annotate({ identifier: "ListNodesResponse" });

export interface Tpu {
  /** Optional. The TPU node(s) being requested. */
  nodeSpec?: ReadonlyArray<NodeSpec>;
}

export const Tpu: Schema.Schema<Tpu> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodeSpec: Schema.optional(Schema.Array(NodeSpec)),
  }).annotate({ identifier: "Tpu" });

export interface Guaranteed {
  /** Optional. Defines the minimum duration of the guarantee. If specified, the requested resources will only be provisioned if they can be allocated for at least the given duration. */
  minDuration?: string;
}

export const Guaranteed: Schema.Schema<Guaranteed> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minDuration: Schema.optional(Schema.String),
  }).annotate({ identifier: "Guaranteed" });

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

export interface AcceptedData {}

export const AcceptedData: Schema.Schema<AcceptedData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AcceptedData",
  });

export interface QueuedResourceState {
  /** Output only. Further data for the suspended state. */
  suspendedData?: SuspendedData;
  /** Output only. Further data for the provisioning state. */
  provisioningData?: ProvisioningData;
  /** Output only. The initiator of the QueuedResources's current state. Used to indicate whether the SUSPENDING/SUSPENDED state was initiated by the user or the service. */
  stateInitiator?:
    | "STATE_INITIATOR_UNSPECIFIED"
    | "USER"
    | "SERVICE"
    | (string & {});
  /** Output only. Further data for the suspending state. */
  suspendingData?: SuspendingData;
  /** Output only. State of the QueuedResource request. */
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
  /** Output only. Further data for the creating state. */
  creatingData?: CreatingData;
  /** Output only. Further data for the deleting state. */
  deletingData?: DeletingData;
  /** Output only. Further data for the failed state. */
  failedData?: FailedData;
  /** Output only. Further data for the active state. */
  activeData?: ActiveData;
  /** Output only. Further data for the accepted state. */
  acceptedData?: AcceptedData;
}

export const QueuedResourceState: Schema.Schema<QueuedResourceState> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    suspendedData: Schema.optional(SuspendedData),
    provisioningData: Schema.optional(ProvisioningData),
    stateInitiator: Schema.optional(Schema.String),
    suspendingData: Schema.optional(SuspendingData),
    state: Schema.optional(Schema.String),
    creatingData: Schema.optional(CreatingData),
    deletingData: Schema.optional(DeletingData),
    failedData: Schema.optional(FailedData),
    activeData: Schema.optional(ActiveData),
    acceptedData: Schema.optional(AcceptedData),
  }).annotate({ identifier: "QueuedResourceState" });

export interface Interval {
  /** Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start. */
  startTime?: string;
  /** Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end. */
  endTime?: string;
}

export const Interval: Schema.Schema<Interval> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Interval" });

export interface QueueingPolicy {
  /** Optional. An absolute time interval within which resources may be created. */
  validInterval?: Interval;
  /** Optional. A relative time after which resources should not be created. If the request cannot be fulfilled by this time the request will be failed. */
  validUntilDuration?: string;
  /** Optional. An absolute time after which resources should not be created. If the request cannot be fulfilled by this time the request will be failed. */
  validUntilTime?: string;
  /** Optional. A relative time after which resources may be created. */
  validAfterDuration?: string;
  /** Optional. An absolute time after which resources may be created. */
  validAfterTime?: string;
}

export const QueueingPolicy: Schema.Schema<QueueingPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validInterval: Schema.optional(Interval),
    validUntilDuration: Schema.optional(Schema.String),
    validUntilTime: Schema.optional(Schema.String),
    validAfterDuration: Schema.optional(Schema.String),
    validAfterTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "QueueingPolicy" });

export interface QueuedResource {
  /** Optional. Defines a TPU resource. */
  tpu?: Tpu;
  /** Optional. The Guaranteed tier */
  guaranteed?: Guaranteed;
  /** Output only. The time when the QueuedResource was created. */
  createTime?: string;
  /** Output only. State of the QueuedResource request. */
  state?: QueuedResourceState;
  /** Output only. Immutable. The name of the QueuedResource. */
  name?: string;
  /** Optional. Name of the reservation in which the resource should be provisioned. Format: projects/{project}/locations/{zone}/reservations/{reservation} */
  reservationName?: string;
  /** Optional. The queueing policy of the QueuedRequest. */
  queueingPolicy?: QueueingPolicy;
  /** Optional. The Spot tier. */
  spot?: Spot;
}

export const QueuedResource: Schema.Schema<QueuedResource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tpu: Schema.optional(Tpu),
    guaranteed: Schema.optional(Guaranteed),
    createTime: Schema.optional(Schema.String),
    state: Schema.optional(QueuedResourceState),
    name: Schema.optional(Schema.String),
    reservationName: Schema.optional(Schema.String),
    queueingPolicy: Schema.optional(QueueingPolicy),
    spot: Schema.optional(Spot),
  }).annotate({ identifier: "QueuedResource" });

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

export interface StartNodeRequest {}

export const StartNodeRequest: Schema.Schema<StartNodeRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "StartNodeRequest",
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
      path: "v2/{+parent}:generateServiceIdentity",
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

export interface ListProjectsLocationsRequest {
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage. */
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
    T.Http({ method: "GET", path: "v2/{+name}/locations" }),
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
    T.Http({ method: "GET", path: "v2/{+name}" }),
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

export interface ListProjectsLocationsQueuedResourcesRequest {
  /** Required. The parent resource name. */
  parent: string;
  /** Optional. The maximum number of items to return. */
  pageSize?: number;
  /** Optional. The next_page_token value returned from a previous List request, if any. */
  pageToken?: string;
}

export const ListProjectsLocationsQueuedResourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/queuedResources" }),
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

export interface GetProjectsLocationsQueuedResourcesRequest {
  /** Required. The resource name. */
  name: string;
}

export const GetProjectsLocationsQueuedResourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
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

export interface CreateProjectsLocationsQueuedResourcesRequest {
  /** Required. The parent resource name. */
  parent: string;
  /** Optional. The unqualified resource name. Should follow the `^[A-Za-z0-9_.~+%-]+$` regex format. */
  queuedResourceId?: string;
  /** Optional. Idempotent request UUID. */
  requestId?: string;
  /** Request body */
  body?: QueuedResource;
}

export const CreateProjectsLocationsQueuedResourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    queuedResourceId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("queuedResourceId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(QueuedResource).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/queuedResources",
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

export interface DeleteProjectsLocationsQueuedResourcesRequest {
  /** Required. The resource name. */
  name: string;
  /** Optional. Idempotent request UUID. */
  requestId?: string;
  /** Optional. If set to true, all running nodes belonging to this queued resource will be deleted first and then the queued resource will be deleted. Otherwise (i.e. force=false), the queued resource will only be deleted if its nodes have already been deleted or the queued resource is in the ACCEPTED, FAILED, or SUSPENDED state. */
  force?: boolean;
}

export const DeleteProjectsLocationsQueuedResourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
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
    T.Http({ method: "POST", path: "v2/{+name}:reset", hasBody: true }),
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

export interface ListProjectsLocationsAcceleratorTypesRequest {
  /** The maximum number of items to return. */
  pageSize?: number;
  /** List filter. */
  filter?: string;
  /** Required. The parent resource name. */
  parent: string;
  /** Sort results. */
  orderBy?: string;
  /** The next_page_token value returned from a previous List request, if any. */
  pageToken?: string;
}

export const ListProjectsLocationsAcceleratorTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/acceleratorTypes" }),
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

export interface GetProjectsLocationsAcceleratorTypesRequest {
  /** Required. The resource name. */
  name: string;
}

export const GetProjectsLocationsAcceleratorTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
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

export interface CancelProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be cancelled. */
  name: string;
}

export const CancelProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+name}:cancel", hasBody: true }),
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
  /** The standard list page size. */
  pageSize?: number;
  /** The name of the operation's parent resource. */
  name: string;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The standard list page token. */
  pageToken?: string;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    name: Schema.String.pipe(T.HttpPath("name")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}/operations" }),
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
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
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
    T.Http({ method: "GET", path: "v2/{+name}" }),
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

export interface GetProjectsLocationsNodesRequest {
  /** Required. The resource name. */
  name: string;
}

export const GetProjectsLocationsNodesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
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
  /** Required. The parent resource name. */
  parent: string;
  /** The unqualified resource name. */
  nodeId?: string;
  /** Request body */
  body?: Node;
}

export const CreateProjectsLocationsNodesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    nodeId: Schema.optional(Schema.String).pipe(T.HttpQuery("nodeId")),
    body: Schema.optional(Node).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+parent}/nodes", hasBody: true }),
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

export interface DeleteProjectsLocationsNodesRequest {
  /** Required. The resource name. */
  name: string;
}

export const DeleteProjectsLocationsNodesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
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
    T.Http({ method: "POST", path: "v2/{+name}:stop", hasBody: true }),
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
    T.Http({ method: "POST", path: "v2/{+name}:start", hasBody: true }),
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
    T.Http({ method: "GET", path: "v2/{+parent}/nodes" }),
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

export interface PatchProjectsLocationsNodesRequest {
  /** Output only. Immutable. The name of the TPU. */
  name: string;
  /** Required. Mask of fields from Node to update. Supported fields: [description, tags, labels, metadata, network_config.enable_external_ips]. */
  updateMask?: string;
  /** Request body */
  body?: Node;
}

export const PatchProjectsLocationsNodesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Node).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
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
      path: "v2/{+name}:getGuestAttributes",
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

export interface ListProjectsLocationsRuntimeVersionsRequest {
  /** The maximum number of items to return. */
  pageSize?: number;
  /** Required. The parent resource name. */
  parent: string;
  /** List filter. */
  filter?: string;
  /** The next_page_token value returned from a previous List request, if any. */
  pageToken?: string;
  /** Sort results. */
  orderBy?: string;
}

export const ListProjectsLocationsRuntimeVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/runtimeVersions" }),
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
    T.Http({ method: "GET", path: "v2/{+name}" }),
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
