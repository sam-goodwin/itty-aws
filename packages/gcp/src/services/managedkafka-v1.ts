// ==========================================================================
// Managed Service for Apache Kafka API (managedkafka v1)
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
  name: "managedkafka",
  version: "v1",
  rootUrl: "https://managedkafka.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface CapacityConfig {
  /** Required. The number of vCPUs to provision for the cluster. Minimum: 3. */
  vcpuCount?: string;
  /** Required. The memory to provision for the cluster in bytes. The CPU:memory ratio (vCPU:GiB) must be between 1:1 and 1:8. Minimum: 3221225472 (3 GiB). */
  memoryBytes?: string;
}

export const CapacityConfig: Schema.Schema<CapacityConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vcpuCount: Schema.optional(Schema.String),
    memoryBytes: Schema.optional(Schema.String),
  }).annotate({ identifier: "CapacityConfig" });

export interface PauseConnectorRequest {}

export const PauseConnectorRequest: Schema.Schema<PauseConnectorRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "PauseConnectorRequest",
  });

export interface TaskRetryPolicy {
  /** Optional. The minimum amount of time to wait before retrying a failed task. This sets a lower bound for the backoff delay. */
  minimumBackoff?: string;
  /** Optional. If true, task retry is disabled. */
  taskRetryDisabled?: boolean;
  /** Optional. The maximum amount of time to wait before retrying a failed task. This sets an upper bound for the backoff delay. */
  maximumBackoff?: string;
}

export const TaskRetryPolicy: Schema.Schema<TaskRetryPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minimumBackoff: Schema.optional(Schema.String),
    taskRetryDisabled: Schema.optional(Schema.Boolean),
    maximumBackoff: Schema.optional(Schema.String),
  }).annotate({ identifier: "TaskRetryPolicy" });

export interface Connector {
  /** Output only. The current state of the connector. */
  state?:
    | "STATE_UNSPECIFIED"
    | "UNASSIGNED"
    | "RUNNING"
    | "PAUSED"
    | "FAILED"
    | "RESTARTING"
    | "STOPPED"
    | (string & {});
  /** Optional. Restarts the individual tasks of a Connector. */
  taskRestartPolicy?: TaskRetryPolicy;
  /** Identifier. The name of the connector. Structured like: projects/{project}/locations/{location}/connectClusters/{connect_cluster}/connectors/{connector} */
  name?: string;
  /** Optional. Connector config as keys/values. The keys of the map are connector property names, for example: `connector.class`, `tasks.max`, `key.converter`. */
  configs?: Record<string, string>;
}

export const Connector: Schema.Schema<Connector> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    taskRestartPolicy: Schema.optional(TaskRetryPolicy),
    name: Schema.optional(Schema.String),
    configs: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "Connector" });

export interface NetworkConfig {
  /** Required. Name of the VPC subnet in which to create Private Service Connect (PSC) endpoints for the Kafka brokers and bootstrap address. Structured like: projects/{project}/regions/{region}/subnetworks/{subnet_id} The subnet must be located in the same region as the Kafka cluster. The project may differ. Multiple subnets from the same parent network must not be specified. */
  subnet?: string;
}

export const NetworkConfig: Schema.Schema<NetworkConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subnet: Schema.optional(Schema.String),
  }).annotate({ identifier: "NetworkConfig" });

export interface Location {
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
}

export const Location: Schema.Schema<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    displayName: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
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

export interface StopConnectorRequest {}

export const StopConnectorRequest: Schema.Schema<StopConnectorRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "StopConnectorRequest",
  });

export interface CheckCompatibilityResponse {
  /** The compatibility check result. If true, the schema is compatible with the resource. */
  is_compatible?: boolean;
  /** Failure reasons if verbose = true. */
  messages?: ReadonlyArray<string>;
}

export const CheckCompatibilityResponse: Schema.Schema<CheckCompatibilityResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    is_compatible: Schema.optional(Schema.Boolean),
    messages: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "CheckCompatibilityResponse" });

export interface AccessConfig {
  /** Required. Virtual Private Cloud (VPC) networks that must be granted direct access to the Kafka cluster. Minimum of 1 network is required. Maximum 10 networks can be specified. */
  networkConfigs?: ReadonlyArray<NetworkConfig>;
}

export const AccessConfig: Schema.Schema<AccessConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    networkConfigs: Schema.optional(Schema.Array(NetworkConfig)),
  }).annotate({ identifier: "AccessConfig" });

export interface SchemaReference {
  /** Required. The subject of the reference. */
  subject?: string;
  /** Required. The name of the reference. */
  name?: string;
  /** Required. The version of the reference. */
  version?: number;
}

export const SchemaReference: Schema.Schema<SchemaReference> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subject: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    version: Schema.optional(Schema.Number),
  }).annotate({ identifier: "SchemaReference" });

export interface CheckCompatibilityRequest {
  /** Required. The schema payload */
  schema?: string;
  /** Optional. The schema references used by the schema. */
  references?: ReadonlyArray<SchemaReference>;
  /** Optional. If true, the response will contain the compatibility check result with reasons for failed checks. The default is false. */
  verbose?: boolean;
  /** Optional. The schema type of the schema. */
  schemaType?:
    | "SCHEMA_TYPE_UNSPECIFIED"
    | "AVRO"
    | "JSON"
    | "PROTOBUF"
    | (string & {});
}

export const CheckCompatibilityRequest: Schema.Schema<CheckCompatibilityRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    schema: Schema.optional(Schema.String),
    references: Schema.optional(Schema.Array(SchemaReference)),
    verbose: Schema.optional(Schema.Boolean),
    schemaType: Schema.optional(Schema.String),
  }).annotate({ identifier: "CheckCompatibilityRequest" });

export interface AclEntry {
  /** Required. The principal. Specified as Google Cloud account, with the Kafka StandardAuthorizer prefix "User:". For example: "User:test-kafka-client@test-project.iam.gserviceaccount.com". Can be the wildcard "User:*" to refer to all users. */
  principal?: string;
  /** Required. The operation type. Allowed values are (case insensitive): ALL, READ, WRITE, CREATE, DELETE, ALTER, DESCRIBE, CLUSTER_ACTION, DESCRIBE_CONFIGS, ALTER_CONFIGS, and IDEMPOTENT_WRITE. See https://kafka.apache.org/documentation/#operations_resources_and_protocols for valid combinations of resource_type and operation for different Kafka API requests. */
  operation?: string;
  /** Required. The permission type. Accepted values are (case insensitive): ALLOW, DENY. */
  permissionType?: string;
  /** Required. The host. Must be set to "*" for Managed Service for Apache Kafka. */
  host?: string;
}

export const AclEntry: Schema.Schema<AclEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    principal: Schema.optional(Schema.String),
    operation: Schema.optional(Schema.String),
    permissionType: Schema.optional(Schema.String),
    host: Schema.optional(Schema.String),
  }).annotate({ identifier: "AclEntry" });

export interface ConnectNetworkConfig {
  /** Required. VPC subnet to make available to the Kafka Connect cluster. Structured like: projects/{project}/regions/{region}/subnetworks/{subnet_id} It is used to create a Private Service Connect (PSC) interface for the Kafka Connect workers. It must be located in the same region as the Kafka Connect cluster. The CIDR range of the subnet must be within the IPv4 address ranges for private networks, as specified in RFC 1918. The primary subnet CIDR range must have a minimum size of /22 (1024 addresses). */
  primarySubnet?: string;
  /** Optional. Additional DNS domain names from the subnet's network to be made visible to the Connect Cluster. When using MirrorMaker2, it's necessary to add the bootstrap address's dns domain name of the target cluster to make it visible to the connector. For example: my-kafka-cluster.us-central1.managedkafka.my-project.cloud.goog */
  dnsDomainNames?: ReadonlyArray<string>;
  /** Optional. Deprecated: Managed Kafka Connect clusters can now reach any endpoint accessible from the primary subnet without the need to define additional subnets. Please see https://cloud.google.com/managed-service-for-apache-kafka/docs/connect-cluster/create-connect-cluster#worker-subnet for more information. */
  additionalSubnets?: ReadonlyArray<string>;
}

export const ConnectNetworkConfig: Schema.Schema<ConnectNetworkConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    primarySubnet: Schema.optional(Schema.String),
    dnsDomainNames: Schema.optional(Schema.Array(Schema.String)),
    additionalSubnets: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ConnectNetworkConfig" });

export interface ConnectAccessConfig {
  /** Required. Virtual Private Cloud (VPC) networks that must be granted direct access to the Kafka Connect cluster. Minimum of 1 network is required. Maximum 10 networks can be specified. */
  networkConfigs?: ReadonlyArray<ConnectNetworkConfig>;
}

export const ConnectAccessConfig: Schema.Schema<ConnectAccessConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    networkConfigs: Schema.optional(Schema.Array(ConnectNetworkConfig)),
  }).annotate({ identifier: "ConnectAccessConfig" });

export interface ConnectGcpConfig {
  /** Optional. Secrets to load into workers. Exact SecretVersions from Secret Manager must be provided -- aliases are not supported. Up to 32 secrets may be loaded into one cluster. Format: projects//secrets//versions/ */
  secretPaths?: ReadonlyArray<string>;
  /** Required. Access configuration for the Kafka Connect cluster. */
  accessConfig?: ConnectAccessConfig;
}

export const ConnectGcpConfig: Schema.Schema<ConnectGcpConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    secretPaths: Schema.optional(Schema.Array(Schema.String)),
    accessConfig: Schema.optional(ConnectAccessConfig),
  }).annotate({ identifier: "ConnectGcpConfig" });

export interface ConsumerPartitionMetadata {
  /** Required. The current offset for this partition, or 0 if no offset has been committed. */
  offset?: string;
  /** Optional. The associated metadata for this partition, or empty if it does not exist. */
  metadata?: string;
}

export const ConsumerPartitionMetadata: Schema.Schema<ConsumerPartitionMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    offset: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConsumerPartitionMetadata" });

export interface ConsumerTopicMetadata {
  /** Optional. Metadata for this consumer group and topic for all partition indexes it has metadata for. */
  partitions?: Record<string, ConsumerPartitionMetadata>;
}

export const ConsumerTopicMetadata: Schema.Schema<ConsumerTopicMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    partitions: Schema.optional(
      Schema.Record(Schema.String, ConsumerPartitionMetadata),
    ),
  }).annotate({ identifier: "ConsumerTopicMetadata" });

export interface ConsumerGroup {
  /** Identifier. The name of the consumer group. The `consumer_group` segment is used when connecting directly to the cluster. Structured like: projects/{project}/locations/{location}/clusters/{cluster}/consumerGroups/{consumer_group} */
  name?: string;
  /** Optional. Metadata for this consumer group for all topics it has metadata for. The key of the map is a topic name, structured like: projects/{project}/locations/{location}/clusters/{cluster}/topics/{topic} */
  topics?: Record<string, ConsumerTopicMetadata>;
}

export const ConsumerGroup: Schema.Schema<ConsumerGroup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    topics: Schema.optional(
      Schema.Record(Schema.String, ConsumerTopicMetadata),
    ),
  }).annotate({ identifier: "ConsumerGroup" });

export interface CreateVersionRequest {
  /** Required. The schema payload */
  schema?: string;
  /** Optional. The schema references used by the schema. */
  references?: ReadonlyArray<SchemaReference>;
  /** Optional. The schema ID of the schema. If not specified, the schema ID will be generated by the server. If the schema ID is specified, it must not be used by an existing schema that is different from the schema to be created. */
  id?: number;
  /** Optional. The version to create. It is optional. If not specified, the version will be created with the max version ID of the subject increased by 1. If the version ID is specified, it will be used as the new version ID and must not be used by an existing version of the subject. */
  version?: number;
  /** Optional. If true, the schema will be normalized before being stored. The default is false. */
  normalize?: boolean;
  /** Optional. The type of the schema. It is optional. If not specified, the schema type will be AVRO. */
  schemaType?:
    | "SCHEMA_TYPE_UNSPECIFIED"
    | "AVRO"
    | "JSON"
    | "PROTOBUF"
    | (string & {});
}

export const CreateVersionRequest: Schema.Schema<CreateVersionRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    schema: Schema.optional(Schema.String),
    references: Schema.optional(Schema.Array(SchemaReference)),
    id: Schema.optional(Schema.Number),
    version: Schema.optional(Schema.Number),
    normalize: Schema.optional(Schema.Boolean),
    schemaType: Schema.optional(Schema.String),
  }).annotate({ identifier: "CreateVersionRequest" });

export interface OperationMetadata {
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
}

export const OperationMetadata: Schema.Schema<OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    target: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
    statusMessage: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "OperationMetadata" });

export interface CancelOperationRequest {}

export const CancelOperationRequest: Schema.Schema<CancelOperationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelOperationRequest",
  });

export interface Acl {
  /** Output only. The ACL pattern type derived from the name. One of: LITERAL, PREFIXED. */
  patternType?: string;
  /** Optional. `etag` is used for concurrency control. An `etag` is returned in the response to `GetAcl` and `CreateAcl`. Callers are required to put that etag in the request to `UpdateAcl` to ensure that their change will be applied to the same version of the acl that exists in the Kafka Cluster. A terminal 'T' character in the etag indicates that the AclEntries were truncated; more entries for the Acl exist on the Kafka Cluster, but can't be returned in the Acl due to repeated field limits. */
  etag?: string;
  /** Output only. The ACL resource name derived from the name. For cluster resource_type, this is always "kafka-cluster". Can be the wildcard literal "*". */
  resourceName?: string;
  /** Identifier. The name for the acl. Represents a single Resource Pattern. Structured like: projects/{project}/locations/{location}/clusters/{cluster}/acls/{acl_id} The structure of `acl_id` defines the Resource Pattern (resource_type, resource_name, pattern_type) of the acl. `acl_id` is structured like one of the following: For acls on the cluster: `cluster` For acls on a single resource within the cluster: `topic/{resource_name}` `consumerGroup/{resource_name}` `transactionalId/{resource_name}` For acls on all resources that match a prefix: `topicPrefixed/{resource_name}` `consumerGroupPrefixed/{resource_name}` `transactionalIdPrefixed/{resource_name}` For acls on all resources of a given type (i.e. the wildcard literal "*"): `allTopics` (represents `topic/*`) `allConsumerGroups` (represents `consumerGroup/*`) `allTransactionalIds` (represents `transactionalId/*`) */
  name?: string;
  /** Required. The ACL entries that apply to the resource pattern. The maximum number of allowed entries 100. */
  aclEntries?: ReadonlyArray<AclEntry>;
  /** Output only. The ACL resource type derived from the name. One of: CLUSTER, TOPIC, GROUP, TRANSACTIONAL_ID. */
  resourceType?: string;
}

export const Acl: Schema.Schema<Acl> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    patternType: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    aclEntries: Schema.optional(Schema.Array(AclEntry)),
    resourceType: Schema.optional(Schema.String),
  }).annotate({ identifier: "Acl" });

export interface ListAclsResponse {
  /** The list of acls in the requested parent. The order of the acls is unspecified. */
  acls?: ReadonlyArray<Acl>;
  /** A token that can be sent as `page_token` to retrieve the next page of results. If this field is omitted, there are no more results. */
  nextPageToken?: string;
}

export const ListAclsResponse: Schema.Schema<ListAclsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    acls: Schema.optional(Schema.Array(Acl)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListAclsResponse" });

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
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    done: Schema.optional(Schema.Boolean),
    error: Schema.optional(Status),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "Operation" });

export interface CertificateAuthorityServiceConfig {
  /** Required. The name of the CA pool to pull CA certificates from. Structured like: projects/{project}/locations/{location}/caPools/{ca_pool}. The CA pool does not need to be in the same project or location as the Kafka cluster. */
  caPool?: string;
}

export const CertificateAuthorityServiceConfig: Schema.Schema<CertificateAuthorityServiceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    caPool: Schema.optional(Schema.String),
  }).annotate({ identifier: "CertificateAuthorityServiceConfig" });

export interface TrustConfig {
  /** Optional. Configuration for the Google Certificate Authority Service. Maximum 10. */
  casConfigs?: ReadonlyArray<CertificateAuthorityServiceConfig>;
}

export const TrustConfig: Schema.Schema<TrustConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    casConfigs: Schema.optional(
      Schema.Array(CertificateAuthorityServiceConfig),
    ),
  }).annotate({ identifier: "TrustConfig" });

export interface ConnectCluster {
  /** Required. Configuration properties for a Kafka Connect cluster deployed to Google Cloud Platform. */
  gcpConfig?: ConnectGcpConfig;
  /** Output only. The time when the cluster was created. */
  createTime?: string;
  /** Identifier. The name of the Kafka Connect cluster. Structured like: projects/{project_number}/locations/{location}/connectClusters/{connect_cluster_id} */
  name?: string;
  /** Required. Capacity configuration for the Kafka Connect cluster. */
  capacityConfig?: CapacityConfig;
  /** Optional. Reserved for future use. This field is meant for worker config overrides, but is unsupported for now. */
  config?: Record<string, string>;
  /** Output only. The time when the cluster was last updated. */
  updateTime?: string;
  /** Output only. The current state of the Kafka Connect cluster. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "ACTIVE"
    | "DELETING"
    | "DETACHED"
    | (string & {});
  /** Optional. Labels as key value pairs. */
  labels?: Record<string, string>;
  /** Output only. Reserved for future use. */
  satisfiesPzs?: boolean;
  /** Required. Immutable. The name of the Kafka cluster this Kafka Connect cluster is attached to. Structured like: projects/{project}/locations/{location}/clusters/{cluster} */
  kafkaCluster?: string;
  /** Output only. Reserved for future use. */
  satisfiesPzi?: boolean;
}

export const ConnectCluster: Schema.Schema<ConnectCluster> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcpConfig: Schema.optional(ConnectGcpConfig),
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    capacityConfig: Schema.optional(CapacityConfig),
    config: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    updateTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    satisfiesPzs: Schema.optional(Schema.Boolean),
    kafkaCluster: Schema.optional(Schema.String),
    satisfiesPzi: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ConnectCluster" });

export interface ListConnectClustersResponse {
  /** The list of Connect clusters in the requested parent. */
  connectClusters?: ReadonlyArray<ConnectCluster>;
  /** A token that can be sent as `page_token` to retrieve the next page of results. If this field is omitted, there are no more results. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListConnectClustersResponse: Schema.Schema<ListConnectClustersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    connectClusters: Schema.optional(Schema.Array(ConnectCluster)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListConnectClustersResponse" });

export interface PauseConnectorResponse {}

export const PauseConnectorResponse: Schema.Schema<PauseConnectorResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "PauseConnectorResponse",
  });

export interface SchemaRegistry {
  /** Identifier. The name of the schema registry instance. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}` The instance name {schema_registry} can contain the following: * Up to 255 characters. * Letters (uppercase or lowercase), numbers, and underscores. */
  name?: string;
  /** Output only. The contexts of the schema registry instance. */
  contexts?: ReadonlyArray<string>;
}

export const SchemaRegistry: Schema.Schema<SchemaRegistry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    contexts: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "SchemaRegistry" });

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

export interface ResumeConnectorResponse {}

export const ResumeConnectorResponse: Schema.Schema<ResumeConnectorResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "ResumeConnectorResponse",
  });

export interface UpdateOptions {
  /** Optional. If true, allows an update operation that increases the total vCPU and/or memory allocation of the cluster to significantly decrease the per-broker vCPU and/or memory allocation. This can result in reduced performance and availability. By default, the update operation will fail if an upscale request results in a vCPU or memory allocation for the brokers that is smaller than 90% of the current broker size. */
  allowBrokerDownscaleOnClusterUpscale?: boolean;
}

export const UpdateOptions: Schema.Schema<UpdateOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowBrokerDownscaleOnClusterUpscale: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "UpdateOptions" });

export interface RebalanceConfig {
  /** Optional. The rebalance behavior for the cluster. When not specified, defaults to `NO_REBALANCE`. */
  mode?:
    | "MODE_UNSPECIFIED"
    | "NO_REBALANCE"
    | "AUTO_REBALANCE_ON_SCALE_UP"
    | (string & {});
}

export const RebalanceConfig: Schema.Schema<RebalanceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mode: Schema.optional(Schema.String),
  }).annotate({ identifier: "RebalanceConfig" });

export interface CreateVersionResponse {
  /** The unique identifier of the schema created. */
  id?: number;
}

export const CreateVersionResponse: Schema.Schema<CreateVersionResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
  }).annotate({ identifier: "CreateVersionResponse" });

export interface Topic {
  /** Required. The number of partitions this topic has. The partition count can only be increased, not decreased. Please note that if partitions are increased for a topic that has a key, the partitioning logic or the ordering of the messages will be affected. */
  partitionCount?: number;
  /** Required. Immutable. The number of replicas of each partition. A replication factor of 3 is recommended for high availability. */
  replicationFactor?: number;
  /** Identifier. The name of the topic. The `topic` segment is used when connecting directly to the cluster. Structured like: projects/{project}/locations/{location}/clusters/{cluster}/topics/{topic} */
  name?: string;
  /** Optional. Configurations for the topic that are overridden from the cluster defaults. The key of the map is a Kafka topic property name, for example: `cleanup.policy`, `compression.type`. */
  configs?: Record<string, string>;
}

export const Topic: Schema.Schema<Topic> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    partitionCount: Schema.optional(Schema.Number),
    replicationFactor: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    configs: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "Topic" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface GcpConfig {
  /** Required. Access configuration for the Kafka cluster. */
  accessConfig?: AccessConfig;
  /** Optional. Immutable. The Cloud KMS Key name to use for encryption. The key must be located in the same region as the cluster and cannot be changed. Structured like: projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}. */
  kmsKey?: string;
}

export const GcpConfig: Schema.Schema<GcpConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accessConfig: Schema.optional(AccessConfig),
    kmsKey: Schema.optional(Schema.String),
  }).annotate({ identifier: "GcpConfig" });

export interface BrokerDetails {
  /** Output only. The index of the broker. */
  brokerIndex?: string;
  /** Output only. The node id of the broker. */
  nodeId?: string;
  /** Output only. The rack of the broker. */
  rack?: string;
}

export const BrokerDetails: Schema.Schema<BrokerDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    brokerIndex: Schema.optional(Schema.String),
    nodeId: Schema.optional(Schema.String),
    rack: Schema.optional(Schema.String),
  }).annotate({ identifier: "BrokerDetails" });

export interface TlsConfig {
  /** Optional. A list of rules for mapping from SSL principal names to short names. These are applied in order by Kafka. Refer to the Apache Kafka documentation for `ssl.principal.mapping.rules` for the precise formatting details and syntax. Example: "RULE:^CN=(.*?),OU=ServiceUsers.*$/$1@example.com/,DEFAULT" This is a static Kafka broker configuration. Setting or modifying this field will trigger a rolling restart of the Kafka brokers to apply the change. An empty string means no rules are applied (Kafka default). */
  sslPrincipalMappingRules?: string;
  /** Optional. The configuration of the broker truststore. If specified, clients can use mTLS for authentication. */
  trustConfig?: TrustConfig;
}

export const TlsConfig: Schema.Schema<TlsConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sslPrincipalMappingRules: Schema.optional(Schema.String),
    trustConfig: Schema.optional(TrustConfig),
  }).annotate({ identifier: "TlsConfig" });

export interface Cluster {
  /** Output only. Only populated when FULL view is requested. The Kafka version of the cluster. */
  kafkaVersion?: string;
  /** Required. Configuration properties for a Kafka cluster deployed to Google Cloud Platform. */
  gcpConfig?: GcpConfig;
  /** Output only. The time when the cluster was created. */
  createTime?: string;
  /** Optional. UpdateOptions represents options that control how updates to the cluster are applied. */
  updateOptions?: UpdateOptions;
  /** Identifier. The name of the cluster. Structured like: projects/{project_number}/locations/{location}/clusters/{cluster_id} */
  name?: string;
  /** Required. Capacity configuration for the Kafka cluster. */
  capacityConfig?: CapacityConfig;
  /** Optional. Labels as key value pairs. */
  labels?: Record<string, string>;
  /** Output only. Reserved for future use. */
  satisfiesPzs?: boolean;
  /** Output only. Only populated when FULL view is requested. Details of each broker in the cluster. */
  brokerDetails?: ReadonlyArray<BrokerDetails>;
  /** Output only. The time when the cluster was last updated. */
  updateTime?: string;
  /** Output only. The current state of the cluster. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "ACTIVE"
    | "DELETING"
    | "UPDATING"
    | (string & {});
  /** Output only. Reserved for future use. */
  satisfiesPzi?: boolean;
  /** Optional. TLS configuration for the Kafka cluster. */
  tlsConfig?: TlsConfig;
  /** Optional. Rebalance configuration for the Kafka cluster. */
  rebalanceConfig?: RebalanceConfig;
}

export const Cluster: Schema.Schema<Cluster> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kafkaVersion: Schema.optional(Schema.String),
    gcpConfig: Schema.optional(GcpConfig),
    createTime: Schema.optional(Schema.String),
    updateOptions: Schema.optional(UpdateOptions),
    name: Schema.optional(Schema.String),
    capacityConfig: Schema.optional(CapacityConfig),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    satisfiesPzs: Schema.optional(Schema.Boolean),
    brokerDetails: Schema.optional(Schema.Array(BrokerDetails)),
    updateTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    satisfiesPzi: Schema.optional(Schema.Boolean),
    tlsConfig: Schema.optional(TlsConfig),
    rebalanceConfig: Schema.optional(RebalanceConfig),
  }).annotate({ identifier: "Cluster" });

export interface ResumeConnectorRequest {}

export const ResumeConnectorRequest: Schema.Schema<ResumeConnectorRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "ResumeConnectorRequest",
  });

export interface SchemaVersion {
  /** Required. The subject of the version. */
  subject?: string;
  /** Optional. The schema type of the schema. */
  schemaType?:
    | "SCHEMA_TYPE_UNSPECIFIED"
    | "AVRO"
    | "JSON"
    | "PROTOBUF"
    | (string & {});
  /** Required. The version ID */
  version?: number;
  /** Required. The schema ID. */
  id?: number;
  /** Optional. The schema references used by the schema. */
  references?: ReadonlyArray<SchemaReference>;
  /** Required. The schema payload. */
  schema?: string;
}

export const SchemaVersion: Schema.Schema<SchemaVersion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subject: Schema.optional(Schema.String),
    schemaType: Schema.optional(Schema.String),
    version: Schema.optional(Schema.Number),
    id: Schema.optional(Schema.Number),
    references: Schema.optional(Schema.Array(SchemaReference)),
    schema: Schema.optional(Schema.String),
  }).annotate({ identifier: "SchemaVersion" });

export interface UpdateSchemaModeRequest {
  /** Required. The mode type. */
  mode?: "NONE" | "READONLY" | "READWRITE" | "IMPORT" | (string & {});
}

export const UpdateSchemaModeRequest: Schema.Schema<UpdateSchemaModeRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mode: Schema.optional(Schema.String),
  }).annotate({ identifier: "UpdateSchemaModeRequest" });

export interface RemoveAclEntryResponse {
  /** The updated acl. Returned if the removed acl entry was not the last entry in the acl. */
  acl?: Acl;
  /** Returned with value true if the removed acl entry was the last entry in the acl, resulting in acl deletion. */
  aclDeleted?: boolean;
}

export const RemoveAclEntryResponse: Schema.Schema<RemoveAclEntryResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    acl: Schema.optional(Acl),
    aclDeleted: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "RemoveAclEntryResponse" });

export interface ListConsumerGroupsResponse {
  /** The list of consumer group in the requested parent. The order of the consumer groups is unspecified. */
  consumerGroups?: ReadonlyArray<ConsumerGroup>;
  /** A token that can be sent as `page_token` to retrieve the next page of results. If this field is omitted, there are no more results. */
  nextPageToken?: string;
}

export const ListConsumerGroupsResponse: Schema.Schema<ListConsumerGroupsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    consumerGroups: Schema.optional(Schema.Array(ConsumerGroup)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListConsumerGroupsResponse" });

export interface AddAclEntryResponse {
  /** The updated acl. */
  acl?: Acl;
  /** Whether the acl was created as a result of adding the acl entry. */
  aclCreated?: boolean;
}

export const AddAclEntryResponse: Schema.Schema<AddAclEntryResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    acl: Schema.optional(Acl),
    aclCreated: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "AddAclEntryResponse" });

export interface ListClustersResponse {
  /** The list of Clusters in the requested parent. */
  clusters?: ReadonlyArray<Cluster>;
  /** A token that can be sent as `page_token` to retrieve the next page of results. If this field is omitted, there are no more results. */
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

export interface StopConnectorResponse {}

export const StopConnectorResponse: Schema.Schema<StopConnectorResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "StopConnectorResponse",
  });

export interface Managedkafka_Schema {
  /** Optional. The schema references used by the schema. */
  references?: ReadonlyArray<SchemaReference>;
  /** The schema payload. */
  schema?: string;
  /** Optional. The schema type of the schema. */
  schemaType?:
    | "SCHEMA_TYPE_UNSPECIFIED"
    | "AVRO"
    | "JSON"
    | "PROTOBUF"
    | (string & {});
}

export const Managedkafka_Schema: Schema.Schema<Managedkafka_Schema> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    references: Schema.optional(Schema.Array(SchemaReference)),
    schema: Schema.optional(Schema.String),
    schemaType: Schema.optional(Schema.String),
  }).annotate({ identifier: "Managedkafka_Schema" });

export interface Context {
  /** Identifier. The name of the context. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}` The context name {context} can contain the following: * Up to 255 characters. * Allowed characters: letters (uppercase or lowercase), numbers, and the following special characters: `.`, `-`, `_`, `+`, `%`, and `~`. */
  name?: string;
  /** Optional. The subjects of the context. */
  subjects?: ReadonlyArray<string>;
}

export const Context: Schema.Schema<Context> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    subjects: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Context" });

export interface RestartConnectorResponse {}

export const RestartConnectorResponse: Schema.Schema<RestartConnectorResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "RestartConnectorResponse",
  });

export interface UpdateSchemaConfigRequest {
  /** Optional. If true, the schema will be normalized before being stored or looked up. The default is false. Cannot be unset for a SchemaRegistry-level SchemaConfig. If unset on a SchemaSubject-level SchemaConfig, removes the normalize field for the SchemaConfig. */
  normalize?: boolean;
  /** Required. The compatibility type of the schemas. Cannot be unset for a SchemaRegistry-level SchemaConfig. If unset on a SchemaSubject-level SchemaConfig, removes the compatibility field for the SchemaConfig. */
  compatibility?:
    | "NONE"
    | "BACKWARD"
    | "BACKWARD_TRANSITIVE"
    | "FORWARD"
    | "FORWARD_TRANSITIVE"
    | "FULL"
    | "FULL_TRANSITIVE"
    | (string & {});
}

export const UpdateSchemaConfigRequest: Schema.Schema<UpdateSchemaConfigRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    normalize: Schema.optional(Schema.Boolean),
    compatibility: Schema.optional(Schema.String),
  }).annotate({ identifier: "UpdateSchemaConfigRequest" });

export interface SchemaMode {
  /** Required. The mode type of a schema registry (READWRITE by default) or of a subject (unset by default, which means use the global schema registry setting). */
  mode?: "NONE" | "READONLY" | "READWRITE" | "IMPORT" | (string & {});
}

export const SchemaMode: Schema.Schema<SchemaMode> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mode: Schema.optional(Schema.String),
  }).annotate({ identifier: "SchemaMode" });

export interface ListSchemaRegistriesResponse {
  /** The schema registry instances. */
  schemaRegistries?: ReadonlyArray<SchemaRegistry>;
}

export const ListSchemaRegistriesResponse: Schema.Schema<ListSchemaRegistriesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    schemaRegistries: Schema.optional(Schema.Array(SchemaRegistry)),
  }).annotate({ identifier: "ListSchemaRegistriesResponse" });

export interface HttpBody {
  /** The HTTP Content-Type header value specifying the content type of the body. */
  contentType?: string;
  /** The HTTP request/response body as raw binary. */
  data?: string;
  /** Application specific response metadata. Must be set in the first response for streaming APIs. */
  extensions?: ReadonlyArray<Record<string, unknown>>;
}

export const HttpBody: Schema.Schema<HttpBody> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contentType: Schema.optional(Schema.String),
    data: Schema.optional(Schema.String),
    extensions: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).annotate({ identifier: "HttpBody" });

export interface RestartConnectorRequest {}

export const RestartConnectorRequest: Schema.Schema<RestartConnectorRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "RestartConnectorRequest",
  });

export interface LookupVersionRequest {
  /** Optional. The schema references used by the schema. */
  references?: ReadonlyArray<SchemaReference>;
  /** Optional. If true, soft-deleted versions will be included in lookup, no matter if the subject is active or soft-deleted. If false, soft-deleted versions will be excluded. The default is false. */
  deleted?: boolean;
  /** Required. The schema payload */
  schema?: string;
  /** Optional. The schema type of the schema. */
  schemaType?:
    | "SCHEMA_TYPE_UNSPECIFIED"
    | "AVRO"
    | "JSON"
    | "PROTOBUF"
    | (string & {});
  /** Optional. If true, the schema will be normalized before being looked up. The default is false. */
  normalize?: boolean;
}

export const LookupVersionRequest: Schema.Schema<LookupVersionRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    references: Schema.optional(Schema.Array(SchemaReference)),
    deleted: Schema.optional(Schema.Boolean),
    schema: Schema.optional(Schema.String),
    schemaType: Schema.optional(Schema.String),
    normalize: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "LookupVersionRequest" });

export interface CreateSchemaRegistryRequest {
  /** Required. The schema registry instance ID to use for this schema registry. The ID must contain only letters (a-z, A-Z), numbers (0-9), and underscores (-). The maximum length is 63 characters. The ID must not start with a number. */
  schemaRegistryId?: string;
  /** Required. The schema registry instance to create. The name field is ignored. */
  schemaRegistry?: SchemaRegistry;
}

export const CreateSchemaRegistryRequest: Schema.Schema<CreateSchemaRegistryRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    schemaRegistryId: Schema.optional(Schema.String),
    schemaRegistry: Schema.optional(SchemaRegistry),
  }).annotate({ identifier: "CreateSchemaRegistryRequest" });

export interface SchemaConfig {
  /** Optional. If true, the schema will be normalized before being stored or looked up. The default is false. If unset in a SchemaSubject-level SchemaConfig, the global value will be used. If unset in a SchemaRegistry-level SchemaConfig, reverts to the default value. */
  normalize?: boolean;
  /** Optional. The subject to which this subject is an alias of. Only applicable for subject config. */
  alias?: string;
  /** Required. The compatibility type of the schema. The default value is BACKWARD. If unset in a SchemaSubject-level SchemaConfig, defaults to the global value. If unset in a SchemaRegistry-level SchemaConfig, reverts to the default value. */
  compatibility?:
    | "NONE"
    | "BACKWARD"
    | "BACKWARD_TRANSITIVE"
    | "FORWARD"
    | "FORWARD_TRANSITIVE"
    | "FULL"
    | "FULL_TRANSITIVE"
    | (string & {});
}

export const SchemaConfig: Schema.Schema<SchemaConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    normalize: Schema.optional(Schema.Boolean),
    alias: Schema.optional(Schema.String),
    compatibility: Schema.optional(Schema.String),
  }).annotate({ identifier: "SchemaConfig" });

export interface ListTopicsResponse {
  /** The list of topics in the requested parent. The order of the topics is unspecified. */
  topics?: ReadonlyArray<Topic>;
  /** A token that can be sent as `page_token` to retrieve the next page of results. If this field is omitted, there are no more results. */
  nextPageToken?: string;
}

export const ListTopicsResponse: Schema.Schema<ListTopicsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    topics: Schema.optional(Schema.Array(Topic)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListTopicsResponse" });

export interface ListConnectorsResponse {
  /** The list of connectors in the requested parent. */
  connectors?: ReadonlyArray<Connector>;
  /** A token that can be sent as `page_token` to retrieve the next page of results. If this field is omitted, there are no more results. */
  nextPageToken?: string;
}

export const ListConnectorsResponse: Schema.Schema<ListConnectorsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    connectors: Schema.optional(Schema.Array(Connector)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListConnectorsResponse" });

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
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    name: Schema.String.pipe(T.HttpPath("name")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
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

export interface ListProjectsLocationsOperationsRequest {
  /** The standard list page token. */
  pageToken?: string;
  /** The standard list page size. */
  pageSize?: number;
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list filter. */
  filter?: string;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    name: Schema.String.pipe(T.HttpPath("name")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
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

export interface PatchProjectsLocationsClustersRequest {
  /** Required. Field mask is used to specify the fields to be overwritten in the cluster resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. The mask is required and a value of * will update all fields. */
  updateMask?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID to avoid duplication of requests. If a request times out or fails, retrying with the same ID allows the server to recognize the previous attempt. For at least 60 minutes, the server ignores duplicate requests bearing the same ID. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID within 60 minutes of the last request, the server checks if an original operation with the same request ID was received. If so, the server ignores the second request. The request ID must be a valid UUID. A zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Identifier. The name of the cluster. Structured like: projects/{project_number}/locations/{location}/clusters/{cluster_id} */
  name: string;
  /** Request body */
  body?: Cluster;
}

export const PatchProjectsLocationsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
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

/** Updates the properties of a single cluster. */
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

export interface ListProjectsLocationsClustersRequest {
  /** Optional. The maximum number of clusters to return. The service may return fewer than this value. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. Filter expression for the result. */
  filter?: string;
  /** Optional. Order by fields for the result. */
  orderBy?: string;
  /** Required. The parent location whose clusters are to be listed. Structured like `projects/{project}/locations/{location}`. */
  parent: string;
  /** Optional. A page token, received from a previous `ListClusters` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListClusters` must match the call that provided the page token. */
  pageToken?: string;
}

export const ListProjectsLocationsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
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

/** Lists the clusters in a given project and location. */
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

export interface DeleteProjectsLocationsClustersRequest {
  /** Required. The name of the cluster to delete. */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID to avoid duplication of requests. If a request times out or fails, retrying with the same ID allows the server to recognize the previous attempt. For at least 60 minutes, the server ignores duplicate requests bearing the same ID. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID within 60 minutes of the last request, the server checks if an original operation with the same request ID was received. If so, the server ignores the second request. The request ID must be a valid UUID. A zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
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

/** Deletes a single cluster. */
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
  /** Optional. Specifies the view of the Cluster resource to be returned. Defaults to CLUSTER_VIEW_BASIC. See the ClusterView enum for possible values. */
  view?:
    | "CLUSTER_VIEW_UNSPECIFIED"
    | "CLUSTER_VIEW_BASIC"
    | "CLUSTER_VIEW_FULL"
    | (string & {});
  /** Required. The name of the cluster whose configuration to return. */
  name: string;
}

export const GetProjectsLocationsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
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

/** Returns the properties of a single cluster. */
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

export interface CreateProjectsLocationsClustersRequest {
  /** Required. The parent region in which to create the cluster. Structured like `projects/{project}/locations/{location}`. */
  parent: string;
  /** Required. The ID to use for the cluster, which will become the final component of the cluster's name. The ID must be 1-63 characters long, and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` to comply with RFC 1035. This value is structured like: `my-cluster-id`. */
  clusterId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID to avoid duplication of requests. If a request times out or fails, retrying with the same ID allows the server to recognize the previous attempt. For at least 60 minutes, the server ignores duplicate requests bearing the same ID. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID within 60 minutes of the last request, the server checks if an original operation with the same request ID was received. If so, the server ignores the second request. The request ID must be a valid UUID. A zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
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

/** Creates a new cluster in a given project and location. */
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

export interface PatchProjectsLocationsClustersTopicsRequest {
  /** Identifier. The name of the topic. The `topic` segment is used when connecting directly to the cluster. Structured like: projects/{project}/locations/{location}/clusters/{cluster}/topics/{topic} */
  name: string;
  /** Required. Field mask is used to specify the fields to be overwritten in the Topic resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. The mask is required and a value of * will update all fields. */
  updateMask?: string;
  /** Request body */
  body?: Topic;
}

export const PatchProjectsLocationsClustersTopicsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Topic).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsClustersTopicsRequest>;

export type PatchProjectsLocationsClustersTopicsResponse = Topic;
export const PatchProjectsLocationsClustersTopicsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Topic;

export type PatchProjectsLocationsClustersTopicsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the properties of a single topic. */
export const patchProjectsLocationsClustersTopics: API.OperationMethod<
  PatchProjectsLocationsClustersTopicsRequest,
  PatchProjectsLocationsClustersTopicsResponse,
  PatchProjectsLocationsClustersTopicsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsClustersTopicsRequest,
  output: PatchProjectsLocationsClustersTopicsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsClustersTopicsRequest {
  /** Required. The parent cluster whose topics are to be listed. Structured like `projects/{project}/locations/{location}/clusters/{cluster}`. */
  parent: string;
  /** Optional. A page token, received from a previous `ListTopics` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTopics` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. The maximum number of topics to return. The service may return fewer than this value. If unset or zero, all topics for the parent is returned. */
  pageSize?: number;
}

export const ListProjectsLocationsClustersTopicsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/topics" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsClustersTopicsRequest>;

export type ListProjectsLocationsClustersTopicsResponse = ListTopicsResponse;
export const ListProjectsLocationsClustersTopicsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListTopicsResponse;

export type ListProjectsLocationsClustersTopicsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the topics in a given cluster. */
export const listProjectsLocationsClustersTopics: API.PaginatedOperationMethod<
  ListProjectsLocationsClustersTopicsRequest,
  ListProjectsLocationsClustersTopicsResponse,
  ListProjectsLocationsClustersTopicsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsClustersTopicsRequest,
  output: ListProjectsLocationsClustersTopicsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsClustersTopicsRequest {
  /** Required. The name of the topic to delete. `projects/{project}/locations/{location}/clusters/{cluster}/topics/{topic}`. */
  name: string;
}

export const DeleteProjectsLocationsClustersTopicsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsClustersTopicsRequest>;

export type DeleteProjectsLocationsClustersTopicsResponse = Empty;
export const DeleteProjectsLocationsClustersTopicsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsClustersTopicsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single topic. */
export const deleteProjectsLocationsClustersTopics: API.OperationMethod<
  DeleteProjectsLocationsClustersTopicsRequest,
  DeleteProjectsLocationsClustersTopicsResponse,
  DeleteProjectsLocationsClustersTopicsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsClustersTopicsRequest,
  output: DeleteProjectsLocationsClustersTopicsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsClustersTopicsRequest {
  /** Required. The name of the topic whose configuration to return. Structured like: projects/{project}/locations/{location}/clusters/{cluster}/topics/{topic}. */
  name: string;
}

export const GetProjectsLocationsClustersTopicsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsClustersTopicsRequest>;

export type GetProjectsLocationsClustersTopicsResponse = Topic;
export const GetProjectsLocationsClustersTopicsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Topic;

export type GetProjectsLocationsClustersTopicsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns the properties of a single topic. */
export const getProjectsLocationsClustersTopics: API.OperationMethod<
  GetProjectsLocationsClustersTopicsRequest,
  GetProjectsLocationsClustersTopicsResponse,
  GetProjectsLocationsClustersTopicsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsClustersTopicsRequest,
  output: GetProjectsLocationsClustersTopicsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsClustersTopicsRequest {
  /** Required. The parent cluster in which to create the topic. Structured like `projects/{project}/locations/{location}/clusters/{cluster}`. */
  parent: string;
  /** Required. The ID to use for the topic, which will become the final component of the topic's name. This value is structured like: `my-topic-name`. */
  topicId?: string;
  /** Request body */
  body?: Topic;
}

export const CreateProjectsLocationsClustersTopicsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    topicId: Schema.optional(Schema.String).pipe(T.HttpQuery("topicId")),
    body: Schema.optional(Topic).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/topics", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsClustersTopicsRequest>;

export type CreateProjectsLocationsClustersTopicsResponse = Topic;
export const CreateProjectsLocationsClustersTopicsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Topic;

export type CreateProjectsLocationsClustersTopicsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new topic in a given project and location. */
export const createProjectsLocationsClustersTopics: API.OperationMethod<
  CreateProjectsLocationsClustersTopicsRequest,
  CreateProjectsLocationsClustersTopicsResponse,
  CreateProjectsLocationsClustersTopicsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsClustersTopicsRequest,
  output: CreateProjectsLocationsClustersTopicsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsClustersConsumerGroupsRequest {
  /** Required. The name of the consumer group whose configuration to return. `projects/{project}/locations/{location}/clusters/{cluster}/consumerGroups/{consumerGroup}`. */
  name: string;
}

export const GetProjectsLocationsClustersConsumerGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsClustersConsumerGroupsRequest>;

export type GetProjectsLocationsClustersConsumerGroupsResponse = ConsumerGroup;
export const GetProjectsLocationsClustersConsumerGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ConsumerGroup;

export type GetProjectsLocationsClustersConsumerGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns the properties of a single consumer group. */
export const getProjectsLocationsClustersConsumerGroups: API.OperationMethod<
  GetProjectsLocationsClustersConsumerGroupsRequest,
  GetProjectsLocationsClustersConsumerGroupsResponse,
  GetProjectsLocationsClustersConsumerGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsClustersConsumerGroupsRequest,
  output: GetProjectsLocationsClustersConsumerGroupsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsClustersConsumerGroupsRequest {
  /** Identifier. The name of the consumer group. The `consumer_group` segment is used when connecting directly to the cluster. Structured like: projects/{project}/locations/{location}/clusters/{cluster}/consumerGroups/{consumer_group} */
  name: string;
  /** Required. Field mask is used to specify the fields to be overwritten in the ConsumerGroup resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. The mask is required and a value of * will update all fields. */
  updateMask?: string;
  /** Request body */
  body?: ConsumerGroup;
}

export const PatchProjectsLocationsClustersConsumerGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(ConsumerGroup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsClustersConsumerGroupsRequest>;

export type PatchProjectsLocationsClustersConsumerGroupsResponse =
  ConsumerGroup;
export const PatchProjectsLocationsClustersConsumerGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ConsumerGroup;

export type PatchProjectsLocationsClustersConsumerGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the properties of a single consumer group. */
export const patchProjectsLocationsClustersConsumerGroups: API.OperationMethod<
  PatchProjectsLocationsClustersConsumerGroupsRequest,
  PatchProjectsLocationsClustersConsumerGroupsResponse,
  PatchProjectsLocationsClustersConsumerGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsClustersConsumerGroupsRequest,
  output: PatchProjectsLocationsClustersConsumerGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsClustersConsumerGroupsRequest {
  /** Optional. The maximum number of consumer groups to return. The service may return fewer than this value. If unset or zero, all consumer groups for the parent is returned. */
  pageSize?: number;
  /** Optional. Filter expression for the result. Only supports filtering by topic name as a key in the `topics` map. */
  filter?: string;
  /** Required. The parent cluster whose consumer groups are to be listed. Structured like `projects/{project}/locations/{location}/clusters/{cluster}`. */
  parent: string;
  /** Optional. A page token, received from a previous `ListConsumerGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConsumerGroups` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. Specifies the view (BASIC or FULL) of the ConsumerGroup resource to be returned in the response. Defaults to FULL view. */
  view?:
    | "CONSUMER_GROUP_VIEW_UNSPECIFIED"
    | "CONSUMER_GROUP_VIEW_BASIC"
    | "CONSUMER_GROUP_VIEW_FULL"
    | (string & {});
}

export const ListProjectsLocationsClustersConsumerGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/consumerGroups" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsClustersConsumerGroupsRequest>;

export type ListProjectsLocationsClustersConsumerGroupsResponse =
  ListConsumerGroupsResponse;
export const ListProjectsLocationsClustersConsumerGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListConsumerGroupsResponse;

export type ListProjectsLocationsClustersConsumerGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the consumer groups in a given cluster. */
export const listProjectsLocationsClustersConsumerGroups: API.PaginatedOperationMethod<
  ListProjectsLocationsClustersConsumerGroupsRequest,
  ListProjectsLocationsClustersConsumerGroupsResponse,
  ListProjectsLocationsClustersConsumerGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsClustersConsumerGroupsRequest,
  output: ListProjectsLocationsClustersConsumerGroupsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsClustersConsumerGroupsRequest {
  /** Required. The name of the consumer group to delete. `projects/{project}/locations/{location}/clusters/{cluster}/consumerGroups/{consumerGroup}`. */
  name: string;
}

export const DeleteProjectsLocationsClustersConsumerGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsClustersConsumerGroupsRequest>;

export type DeleteProjectsLocationsClustersConsumerGroupsResponse = Empty;
export const DeleteProjectsLocationsClustersConsumerGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsClustersConsumerGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single consumer group. */
export const deleteProjectsLocationsClustersConsumerGroups: API.OperationMethod<
  DeleteProjectsLocationsClustersConsumerGroupsRequest,
  DeleteProjectsLocationsClustersConsumerGroupsResponse,
  DeleteProjectsLocationsClustersConsumerGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsClustersConsumerGroupsRequest,
  output: DeleteProjectsLocationsClustersConsumerGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface AddAclEntryProjectsLocationsClustersAclsRequest {
  /** Required. The name of the acl to add the acl entry to. Structured like: `projects/{project}/locations/{location}/clusters/{cluster}/acls/{acl_id}`. The structure of `acl_id` defines the Resource Pattern (resource_type, resource_name, pattern_type) of the acl. See `Acl.name` for details. */
  acl: string;
  /** Request body */
  body?: AclEntry;
}

export const AddAclEntryProjectsLocationsClustersAclsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    acl: Schema.String.pipe(T.HttpPath("acl")),
    body: Schema.optional(AclEntry).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+acl}:addAclEntry", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<AddAclEntryProjectsLocationsClustersAclsRequest>;

export type AddAclEntryProjectsLocationsClustersAclsResponse =
  AddAclEntryResponse;
export const AddAclEntryProjectsLocationsClustersAclsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AddAclEntryResponse;

export type AddAclEntryProjectsLocationsClustersAclsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Incremental update: Adds an acl entry to an acl. Creates the acl if it does not exist yet. */
export const addAclEntryProjectsLocationsClustersAcls: API.OperationMethod<
  AddAclEntryProjectsLocationsClustersAclsRequest,
  AddAclEntryProjectsLocationsClustersAclsResponse,
  AddAclEntryProjectsLocationsClustersAclsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AddAclEntryProjectsLocationsClustersAclsRequest,
  output: AddAclEntryProjectsLocationsClustersAclsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsClustersAclsRequest {
  /** Identifier. The name for the acl. Represents a single Resource Pattern. Structured like: projects/{project}/locations/{location}/clusters/{cluster}/acls/{acl_id} The structure of `acl_id` defines the Resource Pattern (resource_type, resource_name, pattern_type) of the acl. `acl_id` is structured like one of the following: For acls on the cluster: `cluster` For acls on a single resource within the cluster: `topic/{resource_name}` `consumerGroup/{resource_name}` `transactionalId/{resource_name}` For acls on all resources that match a prefix: `topicPrefixed/{resource_name}` `consumerGroupPrefixed/{resource_name}` `transactionalIdPrefixed/{resource_name}` For acls on all resources of a given type (i.e. the wildcard literal "*"): `allTopics` (represents `topic/*`) `allConsumerGroups` (represents `consumerGroup/*`) `allTransactionalIds` (represents `transactionalId/*`) */
  name: string;
  /** Optional. Field mask is used to specify the fields to be overwritten in the Acl resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. */
  updateMask?: string;
  /** Request body */
  body?: Acl;
}

export const PatchProjectsLocationsClustersAclsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Acl).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsClustersAclsRequest>;

export type PatchProjectsLocationsClustersAclsResponse = Acl;
export const PatchProjectsLocationsClustersAclsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Acl;

export type PatchProjectsLocationsClustersAclsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the properties of a single acl. */
export const patchProjectsLocationsClustersAcls: API.OperationMethod<
  PatchProjectsLocationsClustersAclsRequest,
  PatchProjectsLocationsClustersAclsResponse,
  PatchProjectsLocationsClustersAclsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsClustersAclsRequest,
  output: PatchProjectsLocationsClustersAclsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RemoveAclEntryProjectsLocationsClustersAclsRequest {
  /** Required. The name of the acl to remove the acl entry from. Structured like: `projects/{project}/locations/{location}/clusters/{cluster}/acls/{acl_id}`. The structure of `acl_id` defines the Resource Pattern (resource_type, resource_name, pattern_type) of the acl. See `Acl.name` for details. */
  acl: string;
  /** Request body */
  body?: AclEntry;
}

export const RemoveAclEntryProjectsLocationsClustersAclsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    acl: Schema.String.pipe(T.HttpPath("acl")),
    body: Schema.optional(AclEntry).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+acl}:removeAclEntry", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<RemoveAclEntryProjectsLocationsClustersAclsRequest>;

export type RemoveAclEntryProjectsLocationsClustersAclsResponse =
  RemoveAclEntryResponse;
export const RemoveAclEntryProjectsLocationsClustersAclsResponse =
  /*@__PURE__*/ /*#__PURE__*/ RemoveAclEntryResponse;

export type RemoveAclEntryProjectsLocationsClustersAclsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Incremental update: Removes an acl entry from an acl. Deletes the acl if its acl entries become empty (i.e. if the removed entry was the last one in the acl). */
export const removeAclEntryProjectsLocationsClustersAcls: API.OperationMethod<
  RemoveAclEntryProjectsLocationsClustersAclsRequest,
  RemoveAclEntryProjectsLocationsClustersAclsResponse,
  RemoveAclEntryProjectsLocationsClustersAclsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RemoveAclEntryProjectsLocationsClustersAclsRequest,
  output: RemoveAclEntryProjectsLocationsClustersAclsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsClustersAclsRequest {
  /** Optional. The maximum number of acls to return. The service may return fewer than this value. If unset or zero, all acls for the parent is returned. */
  pageSize?: number;
  /** Required. The parent cluster whose acls are to be listed. Structured like `projects/{project}/locations/{location}/clusters/{cluster}`. */
  parent: string;
  /** Optional. A page token, received from a previous `ListAcls` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAcls` must match the call that provided the page token. */
  pageToken?: string;
}

export const ListProjectsLocationsClustersAclsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/acls" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsClustersAclsRequest>;

export type ListProjectsLocationsClustersAclsResponse = ListAclsResponse;
export const ListProjectsLocationsClustersAclsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAclsResponse;

export type ListProjectsLocationsClustersAclsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the acls in a given cluster. */
export const listProjectsLocationsClustersAcls: API.PaginatedOperationMethod<
  ListProjectsLocationsClustersAclsRequest,
  ListProjectsLocationsClustersAclsResponse,
  ListProjectsLocationsClustersAclsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsClustersAclsRequest,
  output: ListProjectsLocationsClustersAclsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsClustersAclsRequest {
  /** Required. The name of the acl to delete. Structured like: `projects/{project}/locations/{location}/clusters/{cluster}/acls/{acl_id}`. The structure of `acl_id` defines the Resource Pattern (resource_type, resource_name, pattern_type) of the acl. See `Acl.name` for details. */
  name: string;
}

export const DeleteProjectsLocationsClustersAclsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsClustersAclsRequest>;

export type DeleteProjectsLocationsClustersAclsResponse = Empty;
export const DeleteProjectsLocationsClustersAclsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsClustersAclsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an acl. */
export const deleteProjectsLocationsClustersAcls: API.OperationMethod<
  DeleteProjectsLocationsClustersAclsRequest,
  DeleteProjectsLocationsClustersAclsResponse,
  DeleteProjectsLocationsClustersAclsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsClustersAclsRequest,
  output: DeleteProjectsLocationsClustersAclsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsClustersAclsRequest {
  /** Required. The ID to use for the acl, which will become the final component of the acl's name. The structure of `acl_id` defines the Resource Pattern (resource_type, resource_name, pattern_type) of the acl. `acl_id` is structured like one of the following: For acls on the cluster: `cluster` For acls on a single resource within the cluster: `topic/{resource_name}` `consumerGroup/{resource_name}` `transactionalId/{resource_name}` For acls on all resources that match a prefix: `topicPrefixed/{resource_name}` `consumerGroupPrefixed/{resource_name}` `transactionalIdPrefixed/{resource_name}` For acls on all resources of a given type (i.e. the wildcard literal "*"): `allTopics` (represents `topic/*`) `allConsumerGroups` (represents `consumerGroup/*`) `allTransactionalIds` (represents `transactionalId/*`) */
  aclId?: string;
  /** Required. The parent cluster in which to create the acl. Structured like `projects/{project}/locations/{location}/clusters/{cluster}`. */
  parent: string;
  /** Request body */
  body?: Acl;
}

export const CreateProjectsLocationsClustersAclsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    aclId: Schema.optional(Schema.String).pipe(T.HttpQuery("aclId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Acl).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/acls", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsClustersAclsRequest>;

export type CreateProjectsLocationsClustersAclsResponse = Acl;
export const CreateProjectsLocationsClustersAclsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Acl;

export type CreateProjectsLocationsClustersAclsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new acl in the given project, location, and cluster. */
export const createProjectsLocationsClustersAcls: API.OperationMethod<
  CreateProjectsLocationsClustersAclsRequest,
  CreateProjectsLocationsClustersAclsResponse,
  CreateProjectsLocationsClustersAclsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsClustersAclsRequest,
  output: CreateProjectsLocationsClustersAclsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsClustersAclsRequest {
  /** Required. The name of the acl to return. Structured like: `projects/{project}/locations/{location}/clusters/{cluster}/acls/{acl_id}`. The structure of `acl_id` defines the Resource Pattern (resource_type, resource_name, pattern_type) of the acl. See `Acl.name` for details. */
  name: string;
}

export const GetProjectsLocationsClustersAclsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsClustersAclsRequest>;

export type GetProjectsLocationsClustersAclsResponse = Acl;
export const GetProjectsLocationsClustersAclsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Acl;

export type GetProjectsLocationsClustersAclsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns the properties of a single acl. */
export const getProjectsLocationsClustersAcls: API.OperationMethod<
  GetProjectsLocationsClustersAclsRequest,
  GetProjectsLocationsClustersAclsResponse,
  GetProjectsLocationsClustersAclsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsClustersAclsRequest,
  output: GetProjectsLocationsClustersAclsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsConnectClustersRequest {
  /** Optional. The maximum number of Connect clusters to return. The service may return fewer than this value. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. Filter expression for the result. */
  filter?: string;
  /** Optional. Order by fields for the result. */
  orderBy?: string;
  /** Required. The parent project/location whose Connect clusters are to be listed. Structured like `projects/{project}/locations/{location}`. */
  parent: string;
  /** Optional. A page token, received from a previous `ListConnectClusters` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConnectClusters` must match the call that provided the page token. */
  pageToken?: string;
}

export const ListProjectsLocationsConnectClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/connectClusters" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsConnectClustersRequest>;

export type ListProjectsLocationsConnectClustersResponse =
  ListConnectClustersResponse;
export const ListProjectsLocationsConnectClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListConnectClustersResponse;

export type ListProjectsLocationsConnectClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the Kafka Connect clusters in a given project and location. */
export const listProjectsLocationsConnectClusters: API.PaginatedOperationMethod<
  ListProjectsLocationsConnectClustersRequest,
  ListProjectsLocationsConnectClustersResponse,
  ListProjectsLocationsConnectClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsConnectClustersRequest,
  output: ListProjectsLocationsConnectClustersResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsConnectClustersRequest {
  /** Required. The name of the Kafka Connect cluster to delete. Structured like `projects/{project}/locations/{location}/connectClusters/{connect_cluster_id}`. */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID to avoid duplication of requests. If a request times out or fails, retrying with the same ID allows the server to recognize the previous attempt. For at least 60 minutes, the server ignores duplicate requests bearing the same ID. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID within 60 minutes of the last request, the server checks if an original operation with the same request ID was received. If so, the server ignores the second request. The request ID must be a valid UUID. A zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsConnectClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsConnectClustersRequest>;

export type DeleteProjectsLocationsConnectClustersResponse = Operation;
export const DeleteProjectsLocationsConnectClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsConnectClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single Connect cluster. */
export const deleteProjectsLocationsConnectClusters: API.OperationMethod<
  DeleteProjectsLocationsConnectClustersRequest,
  DeleteProjectsLocationsConnectClustersResponse,
  DeleteProjectsLocationsConnectClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsConnectClustersRequest,
  output: DeleteProjectsLocationsConnectClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsConnectClustersRequest {
  /** Required. The name of the Kafka Connect cluster whose configuration to return. Structured like `projects/{project}/locations/{location}/connectClusters/{connect_cluster_id}`. */
  name: string;
}

export const GetProjectsLocationsConnectClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsConnectClustersRequest>;

export type GetProjectsLocationsConnectClustersResponse = ConnectCluster;
export const GetProjectsLocationsConnectClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ConnectCluster;

export type GetProjectsLocationsConnectClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns the properties of a single Kafka Connect cluster. */
export const getProjectsLocationsConnectClusters: API.OperationMethod<
  GetProjectsLocationsConnectClustersRequest,
  GetProjectsLocationsConnectClustersResponse,
  GetProjectsLocationsConnectClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsConnectClustersRequest,
  output: GetProjectsLocationsConnectClustersResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsConnectClustersRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID to avoid duplication of requests. If a request times out or fails, retrying with the same ID allows the server to recognize the previous attempt. For at least 60 minutes, the server ignores duplicate requests bearing the same ID. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID within 60 minutes of the last request, the server checks if an original operation with the same request ID was received. If so, the server ignores the second request. The request ID must be a valid UUID. A zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The parent project/location in which to create the Kafka Connect cluster. Structured like `projects/{project}/locations/{location}/`. */
  parent: string;
  /** Required. The ID to use for the Connect cluster, which will become the final component of the cluster's name. The ID must be 1-63 characters long, and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` to comply with RFC 1035. This value is structured like: `my-cluster-id`. */
  connectClusterId?: string;
  /** Request body */
  body?: ConnectCluster;
}

export const CreateProjectsLocationsConnectClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    connectClusterId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("connectClusterId"),
    ),
    body: Schema.optional(ConnectCluster).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/connectClusters",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsConnectClustersRequest>;

export type CreateProjectsLocationsConnectClustersResponse = Operation;
export const CreateProjectsLocationsConnectClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsConnectClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new Kafka Connect cluster in a given project and location. */
export const createProjectsLocationsConnectClusters: API.OperationMethod<
  CreateProjectsLocationsConnectClustersRequest,
  CreateProjectsLocationsConnectClustersResponse,
  CreateProjectsLocationsConnectClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsConnectClustersRequest,
  output: CreateProjectsLocationsConnectClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsConnectClustersRequest {
  /** Required. Field mask is used to specify the fields to be overwritten in the cluster resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. The mask is required and a value of * will update all fields. */
  updateMask?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID to avoid duplication of requests. If a request times out or fails, retrying with the same ID allows the server to recognize the previous attempt. For at least 60 minutes, the server ignores duplicate requests bearing the same ID. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID within 60 minutes of the last request, the server checks if an original operation with the same request ID was received. If so, the server ignores the second request. The request ID must be a valid UUID. A zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Identifier. The name of the Kafka Connect cluster. Structured like: projects/{project_number}/locations/{location}/connectClusters/{connect_cluster_id} */
  name: string;
  /** Request body */
  body?: ConnectCluster;
}

export const PatchProjectsLocationsConnectClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ConnectCluster).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsConnectClustersRequest>;

export type PatchProjectsLocationsConnectClustersResponse = Operation;
export const PatchProjectsLocationsConnectClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsConnectClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the properties of a single Kafka Connect cluster. */
export const patchProjectsLocationsConnectClusters: API.OperationMethod<
  PatchProjectsLocationsConnectClustersRequest,
  PatchProjectsLocationsConnectClustersResponse,
  PatchProjectsLocationsConnectClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsConnectClustersRequest,
  output: PatchProjectsLocationsConnectClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PauseProjectsLocationsConnectClustersConnectorsRequest {
  /** Required. The name of the connector to pause. Structured like: projects/{project}/locations/{location}/connectClusters/{connectCluster}/connectors/{connector} */
  name: string;
  /** Request body */
  body?: PauseConnectorRequest;
}

export const PauseProjectsLocationsConnectClustersConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(PauseConnectorRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:pause", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PauseProjectsLocationsConnectClustersConnectorsRequest>;

export type PauseProjectsLocationsConnectClustersConnectorsResponse =
  PauseConnectorResponse;
export const PauseProjectsLocationsConnectClustersConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PauseConnectorResponse;

export type PauseProjectsLocationsConnectClustersConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Pauses the connector and its tasks. */
export const pauseProjectsLocationsConnectClustersConnectors: API.OperationMethod<
  PauseProjectsLocationsConnectClustersConnectorsRequest,
  PauseProjectsLocationsConnectClustersConnectorsResponse,
  PauseProjectsLocationsConnectClustersConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PauseProjectsLocationsConnectClustersConnectorsRequest,
  output: PauseProjectsLocationsConnectClustersConnectorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ResumeProjectsLocationsConnectClustersConnectorsRequest {
  /** Required. The name of the connector to pause. Structured like: projects/{project}/locations/{location}/connectClusters/{connectCluster}/connectors/{connector} */
  name: string;
  /** Request body */
  body?: ResumeConnectorRequest;
}

export const ResumeProjectsLocationsConnectClustersConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ResumeConnectorRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:resume", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ResumeProjectsLocationsConnectClustersConnectorsRequest>;

export type ResumeProjectsLocationsConnectClustersConnectorsResponse =
  ResumeConnectorResponse;
export const ResumeProjectsLocationsConnectClustersConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ResumeConnectorResponse;

export type ResumeProjectsLocationsConnectClustersConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Resumes the connector and its tasks. */
export const resumeProjectsLocationsConnectClustersConnectors: API.OperationMethod<
  ResumeProjectsLocationsConnectClustersConnectorsRequest,
  ResumeProjectsLocationsConnectClustersConnectorsResponse,
  ResumeProjectsLocationsConnectClustersConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ResumeProjectsLocationsConnectClustersConnectorsRequest,
  output: ResumeProjectsLocationsConnectClustersConnectorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsConnectClustersConnectorsRequest {
  /** Required. The parent Connect cluster in which to create the connector. Structured like `projects/{project}/locations/{location}/connectClusters/{connect_cluster_id}`. */
  parent: string;
  /** Required. The ID to use for the connector, which will become the final component of the connector's name. The ID must be 1-63 characters long, and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` to comply with RFC 1035. This value is structured like: `my-connector-id`. */
  connectorId?: string;
  /** Request body */
  body?: Connector;
}

export const CreateProjectsLocationsConnectClustersConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    connectorId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("connectorId"),
    ),
    body: Schema.optional(Connector).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/connectors", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsConnectClustersConnectorsRequest>;

export type CreateProjectsLocationsConnectClustersConnectorsResponse =
  Connector;
export const CreateProjectsLocationsConnectClustersConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Connector;

export type CreateProjectsLocationsConnectClustersConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new connector in a given Connect cluster. */
export const createProjectsLocationsConnectClustersConnectors: API.OperationMethod<
  CreateProjectsLocationsConnectClustersConnectorsRequest,
  CreateProjectsLocationsConnectClustersConnectorsResponse,
  CreateProjectsLocationsConnectClustersConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsConnectClustersConnectorsRequest,
  output: CreateProjectsLocationsConnectClustersConnectorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RestartProjectsLocationsConnectClustersConnectorsRequest {
  /** Required. The name of the connector to restart. Structured like: projects/{project}/locations/{location}/connectClusters/{connectCluster}/connectors/{connector} */
  name: string;
  /** Request body */
  body?: RestartConnectorRequest;
}

export const RestartProjectsLocationsConnectClustersConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(RestartConnectorRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:restart", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<RestartProjectsLocationsConnectClustersConnectorsRequest>;

export type RestartProjectsLocationsConnectClustersConnectorsResponse =
  RestartConnectorResponse;
export const RestartProjectsLocationsConnectClustersConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ RestartConnectorResponse;

export type RestartProjectsLocationsConnectClustersConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Restarts the connector. */
export const restartProjectsLocationsConnectClustersConnectors: API.OperationMethod<
  RestartProjectsLocationsConnectClustersConnectorsRequest,
  RestartProjectsLocationsConnectClustersConnectorsResponse,
  RestartProjectsLocationsConnectClustersConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RestartProjectsLocationsConnectClustersConnectorsRequest,
  output: RestartProjectsLocationsConnectClustersConnectorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsConnectClustersConnectorsRequest {
  /** Identifier. The name of the connector. Structured like: projects/{project}/locations/{location}/connectClusters/{connect_cluster}/connectors/{connector} */
  name: string;
  /** Required. Field mask is used to specify the fields to be overwritten in the cluster resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. The mask is required and a value of * will update all fields. */
  updateMask?: string;
  /** Request body */
  body?: Connector;
}

export const PatchProjectsLocationsConnectClustersConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Connector).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsConnectClustersConnectorsRequest>;

export type PatchProjectsLocationsConnectClustersConnectorsResponse = Connector;
export const PatchProjectsLocationsConnectClustersConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Connector;

export type PatchProjectsLocationsConnectClustersConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the properties of a connector. */
export const patchProjectsLocationsConnectClustersConnectors: API.OperationMethod<
  PatchProjectsLocationsConnectClustersConnectorsRequest,
  PatchProjectsLocationsConnectClustersConnectorsResponse,
  PatchProjectsLocationsConnectClustersConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsConnectClustersConnectorsRequest,
  output: PatchProjectsLocationsConnectClustersConnectorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface StopProjectsLocationsConnectClustersConnectorsRequest {
  /** Required. The name of the connector to stop. Structured like: projects/{project}/locations/{location}/connectClusters/{connectCluster}/connectors/{connector} */
  name: string;
  /** Request body */
  body?: StopConnectorRequest;
}

export const StopProjectsLocationsConnectClustersConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(StopConnectorRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:stop", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<StopProjectsLocationsConnectClustersConnectorsRequest>;

export type StopProjectsLocationsConnectClustersConnectorsResponse =
  StopConnectorResponse;
export const StopProjectsLocationsConnectClustersConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ StopConnectorResponse;

export type StopProjectsLocationsConnectClustersConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Stops the connector. */
export const stopProjectsLocationsConnectClustersConnectors: API.OperationMethod<
  StopProjectsLocationsConnectClustersConnectorsRequest,
  StopProjectsLocationsConnectClustersConnectorsResponse,
  StopProjectsLocationsConnectClustersConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StopProjectsLocationsConnectClustersConnectorsRequest,
  output: StopProjectsLocationsConnectClustersConnectorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsConnectClustersConnectorsRequest {
  /** Required. The parent Connect cluster whose connectors are to be listed. Structured like `projects/{project}/locations/{location}/connectClusters/{connect_cluster_id}`. */
  parent: string;
  /** Optional. A page token, received from a previous `ListConnectors` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConnectors` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. The maximum number of connectors to return. The service may return fewer than this value. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
}

export const ListProjectsLocationsConnectClustersConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/connectors" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsConnectClustersConnectorsRequest>;

export type ListProjectsLocationsConnectClustersConnectorsResponse =
  ListConnectorsResponse;
export const ListProjectsLocationsConnectClustersConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListConnectorsResponse;

export type ListProjectsLocationsConnectClustersConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the connectors in a given Connect cluster. */
export const listProjectsLocationsConnectClustersConnectors: API.PaginatedOperationMethod<
  ListProjectsLocationsConnectClustersConnectorsRequest,
  ListProjectsLocationsConnectClustersConnectorsResponse,
  ListProjectsLocationsConnectClustersConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsConnectClustersConnectorsRequest,
  output: ListProjectsLocationsConnectClustersConnectorsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsConnectClustersConnectorsRequest {
  /** Required. The name of the connector to delete. Structured like: projects/{project}/locations/{location}/connectClusters/{connectCluster}/connectors/{connector} */
  name: string;
}

export const DeleteProjectsLocationsConnectClustersConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsConnectClustersConnectorsRequest>;

export type DeleteProjectsLocationsConnectClustersConnectorsResponse = Empty;
export const DeleteProjectsLocationsConnectClustersConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsConnectClustersConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a connector. */
export const deleteProjectsLocationsConnectClustersConnectors: API.OperationMethod<
  DeleteProjectsLocationsConnectClustersConnectorsRequest,
  DeleteProjectsLocationsConnectClustersConnectorsResponse,
  DeleteProjectsLocationsConnectClustersConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsConnectClustersConnectorsRequest,
  output: DeleteProjectsLocationsConnectClustersConnectorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsConnectClustersConnectorsRequest {
  /** Required. The name of the connector whose configuration to return. Structured like: projects/{project}/locations/{location}/connectClusters/{connectCluster}/connectors/{connector} */
  name: string;
}

export const GetProjectsLocationsConnectClustersConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsConnectClustersConnectorsRequest>;

export type GetProjectsLocationsConnectClustersConnectorsResponse = Connector;
export const GetProjectsLocationsConnectClustersConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Connector;

export type GetProjectsLocationsConnectClustersConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns the properties of a single connector. */
export const getProjectsLocationsConnectClustersConnectors: API.OperationMethod<
  GetProjectsLocationsConnectClustersConnectorsRequest,
  GetProjectsLocationsConnectClustersConnectorsResponse,
  GetProjectsLocationsConnectClustersConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsConnectClustersConnectorsRequest,
  output: GetProjectsLocationsConnectClustersConnectorsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsSchemaRegistriesRequest {
  /** Required. The parent whose schema registry instance is to be created. Structured like: `projects/{project}/locations/{location}` */
  parent: string;
  /** Request body */
  body?: CreateSchemaRegistryRequest;
}

export const CreateProjectsLocationsSchemaRegistriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(CreateSchemaRegistryRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/schemaRegistries",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsSchemaRegistriesRequest>;

export type CreateProjectsLocationsSchemaRegistriesResponse = SchemaRegistry;
export const CreateProjectsLocationsSchemaRegistriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SchemaRegistry;

export type CreateProjectsLocationsSchemaRegistriesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a schema registry instance. */
export const createProjectsLocationsSchemaRegistries: API.OperationMethod<
  CreateProjectsLocationsSchemaRegistriesRequest,
  CreateProjectsLocationsSchemaRegistriesResponse,
  CreateProjectsLocationsSchemaRegistriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsSchemaRegistriesRequest,
  output: CreateProjectsLocationsSchemaRegistriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsSchemaRegistriesRequest {
  /** Required. The name of the schema registry instance to return. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}` */
  name: string;
}

export const GetProjectsLocationsSchemaRegistriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsSchemaRegistriesRequest>;

export type GetProjectsLocationsSchemaRegistriesResponse = SchemaRegistry;
export const GetProjectsLocationsSchemaRegistriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SchemaRegistry;

export type GetProjectsLocationsSchemaRegistriesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get the schema registry instance. */
export const getProjectsLocationsSchemaRegistries: API.OperationMethod<
  GetProjectsLocationsSchemaRegistriesRequest,
  GetProjectsLocationsSchemaRegistriesResponse,
  GetProjectsLocationsSchemaRegistriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsSchemaRegistriesRequest,
  output: GetProjectsLocationsSchemaRegistriesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsSchemaRegistriesRequest {
  /** Required. The parent whose schema registry instances are to be listed. Structured like: `projects/{project}/locations/{location}` */
  parent: string;
  /** Optional. Specifies the view to return for the schema registry instances. If not specified, the default view is SCHEMA_REGISTRY_VIEW_BASIC. */
  view?:
    | "SCHEMA_REGISTRY_VIEW_UNSPECIFIED"
    | "SCHEMA_REGISTRY_VIEW_BASIC"
    | "SCHEMA_REGISTRY_VIEW_FULL"
    | (string & {});
}

export const ListProjectsLocationsSchemaRegistriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/schemaRegistries" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsSchemaRegistriesRequest>;

export type ListProjectsLocationsSchemaRegistriesResponse =
  ListSchemaRegistriesResponse;
export const ListProjectsLocationsSchemaRegistriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListSchemaRegistriesResponse;

export type ListProjectsLocationsSchemaRegistriesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List schema registries. */
export const listProjectsLocationsSchemaRegistries: API.OperationMethod<
  ListProjectsLocationsSchemaRegistriesRequest,
  ListProjectsLocationsSchemaRegistriesResponse,
  ListProjectsLocationsSchemaRegistriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListProjectsLocationsSchemaRegistriesRequest,
  output: ListProjectsLocationsSchemaRegistriesResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsSchemaRegistriesRequest {
  /** Required. The name of the schema registry instance to delete. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}` */
  name: string;
}

export const DeleteProjectsLocationsSchemaRegistriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsSchemaRegistriesRequest>;

export type DeleteProjectsLocationsSchemaRegistriesResponse = Empty;
export const DeleteProjectsLocationsSchemaRegistriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsSchemaRegistriesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a schema registry instance. */
export const deleteProjectsLocationsSchemaRegistries: API.OperationMethod<
  DeleteProjectsLocationsSchemaRegistriesRequest,
  DeleteProjectsLocationsSchemaRegistriesResponse,
  DeleteProjectsLocationsSchemaRegistriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsSchemaRegistriesRequest,
  output: DeleteProjectsLocationsSchemaRegistriesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsSchemaRegistriesSchemasRequest {
  /** Required. The name of the schema to return. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/schemas/ids/{schema}` */
  name: string;
  /** Optional. Used to limit the search for the schema ID to a specific subject, otherwise the schema ID will be searched for in all subjects in the given specified context. */
  subject?: string;
}

export const GetProjectsLocationsSchemaRegistriesSchemasRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    subject: Schema.optional(Schema.String).pipe(T.HttpQuery("subject")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsSchemaRegistriesSchemasRequest>;

export type GetProjectsLocationsSchemaRegistriesSchemasResponse =
  Managedkafka_Schema;
export const GetProjectsLocationsSchemaRegistriesSchemasResponse =
  /*@__PURE__*/ /*#__PURE__*/ Managedkafka_Schema;

export type GetProjectsLocationsSchemaRegistriesSchemasError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get the schema for the given schema id. */
export const getProjectsLocationsSchemaRegistriesSchemas: API.OperationMethod<
  GetProjectsLocationsSchemaRegistriesSchemasRequest,
  GetProjectsLocationsSchemaRegistriesSchemasResponse,
  GetProjectsLocationsSchemaRegistriesSchemasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsSchemaRegistriesSchemasRequest,
  output: GetProjectsLocationsSchemaRegistriesSchemasResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetSchemaProjectsLocationsSchemaRegistriesSchemasRequest {
  /** Optional. Used to limit the search for the schema ID to a specific subject, otherwise the schema ID will be searched for in all subjects in the given specified context. */
  subject?: string;
  /** Required. The name of the schema to return. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/schemas/ids/{schema}` */
  name: string;
}

export const GetSchemaProjectsLocationsSchemaRegistriesSchemasRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subject: Schema.optional(Schema.String).pipe(T.HttpQuery("subject")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/schema" }),
    svc,
  ) as unknown as Schema.Schema<GetSchemaProjectsLocationsSchemaRegistriesSchemasRequest>;

export type GetSchemaProjectsLocationsSchemaRegistriesSchemasResponse =
  HttpBody;
export const GetSchemaProjectsLocationsSchemaRegistriesSchemasResponse =
  /*@__PURE__*/ /*#__PURE__*/ HttpBody;

export type GetSchemaProjectsLocationsSchemaRegistriesSchemasError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get the schema string for the given schema id. The response will be the schema string. */
export const getSchemaProjectsLocationsSchemaRegistriesSchemas: API.OperationMethod<
  GetSchemaProjectsLocationsSchemaRegistriesSchemasRequest,
  GetSchemaProjectsLocationsSchemaRegistriesSchemasResponse,
  GetSchemaProjectsLocationsSchemaRegistriesSchemasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSchemaProjectsLocationsSchemaRegistriesSchemasRequest,
  output: GetSchemaProjectsLocationsSchemaRegistriesSchemasResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsSchemaRegistriesSchemasVersionsRequest {
  /** Optional. The subject to filter the subjects by. */
  subject?: string;
  /** Required. The schema whose schema versions are to be listed. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/schemas/ids/{schema}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/schemas/ids/{schema}` */
  parent: string;
  /** Optional. If true, the response will include soft-deleted versions of the schema, even if the subject is soft-deleted. The default is false. */
  deleted?: boolean;
}

export const ListProjectsLocationsSchemaRegistriesSchemasVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subject: Schema.optional(Schema.String).pipe(T.HttpQuery("subject")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    deleted: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("deleted")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/versions" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsSchemaRegistriesSchemasVersionsRequest>;

export type ListProjectsLocationsSchemaRegistriesSchemasVersionsResponse =
  HttpBody;
export const ListProjectsLocationsSchemaRegistriesSchemasVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ HttpBody;

export type ListProjectsLocationsSchemaRegistriesSchemasVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List the schema versions for the given schema id. The response will be an array of subject-version pairs as: [{"subject":"subject1", "version":1}, {"subject":"subject2", "version":2}]. */
export const listProjectsLocationsSchemaRegistriesSchemasVersions: API.OperationMethod<
  ListProjectsLocationsSchemaRegistriesSchemasVersionsRequest,
  ListProjectsLocationsSchemaRegistriesSchemasVersionsResponse,
  ListProjectsLocationsSchemaRegistriesSchemasVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListProjectsLocationsSchemaRegistriesSchemasVersionsRequest,
  output: ListProjectsLocationsSchemaRegistriesSchemasVersionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsSchemaRegistriesSchemasSubjectsRequest {
  /** Required. The schema resource whose associated subjects are to be listed. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/schemas/ids/{schema}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/schemas/ids/{schema}` */
  parent: string;
  /** Optional. If true, the response will include soft-deleted subjects. The default is false. */
  deleted?: boolean;
  /** Optional. The subject to filter the subjects by. */
  subject?: string;
}

export const ListProjectsLocationsSchemaRegistriesSchemasSubjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    deleted: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("deleted")),
    subject: Schema.optional(Schema.String).pipe(T.HttpQuery("subject")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/subjects" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsSchemaRegistriesSchemasSubjectsRequest>;

export type ListProjectsLocationsSchemaRegistriesSchemasSubjectsResponse =
  HttpBody;
export const ListProjectsLocationsSchemaRegistriesSchemasSubjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ HttpBody;

export type ListProjectsLocationsSchemaRegistriesSchemasSubjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List subjects which reference a particular schema id. The response will be an array of subject names. */
export const listProjectsLocationsSchemaRegistriesSchemasSubjects: API.OperationMethod<
  ListProjectsLocationsSchemaRegistriesSchemasSubjectsRequest,
  ListProjectsLocationsSchemaRegistriesSchemasSubjectsResponse,
  ListProjectsLocationsSchemaRegistriesSchemasSubjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListProjectsLocationsSchemaRegistriesSchemasSubjectsRequest,
  output: ListProjectsLocationsSchemaRegistriesSchemasSubjectsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsSchemaRegistriesSchemasTypesRequest {
  /** Required. The parent schema registry whose schema types are to be listed. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}` */
  parent: string;
}

export const ListProjectsLocationsSchemaRegistriesSchemasTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/schemas/types" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsSchemaRegistriesSchemasTypesRequest>;

export type ListProjectsLocationsSchemaRegistriesSchemasTypesResponse =
  HttpBody;
export const ListProjectsLocationsSchemaRegistriesSchemasTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ HttpBody;

export type ListProjectsLocationsSchemaRegistriesSchemasTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List the supported schema types. The response will be an array of schema types. */
export const listProjectsLocationsSchemaRegistriesSchemasTypes: API.OperationMethod<
  ListProjectsLocationsSchemaRegistriesSchemasTypesRequest,
  ListProjectsLocationsSchemaRegistriesSchemasTypesResponse,
  ListProjectsLocationsSchemaRegistriesSchemasTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListProjectsLocationsSchemaRegistriesSchemasTypesRequest,
  output: ListProjectsLocationsSchemaRegistriesSchemasTypesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsSchemaRegistriesSubjectsRequest {
  /** Optional. The context to filter the subjects by, in the format of `:.{context}:`. If unset, all subjects in the registry are returned. Set to empty string or add as '?subjectPrefix=' at the end of this request to list subjects in the default context. */
  subjectPrefix?: string;
  /** Required. The parent schema registry/context whose subjects are to be listed. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}` */
  parent: string;
  /** Optional. If true, the response will include soft-deleted subjects. The default is false. */
  deleted?: boolean;
}

export const ListProjectsLocationsSchemaRegistriesSubjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subjectPrefix: Schema.optional(Schema.String).pipe(
      T.HttpQuery("subjectPrefix"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    deleted: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("deleted")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/subjects" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsSchemaRegistriesSubjectsRequest>;

export type ListProjectsLocationsSchemaRegistriesSubjectsResponse = HttpBody;
export const ListProjectsLocationsSchemaRegistriesSubjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ HttpBody;

export type ListProjectsLocationsSchemaRegistriesSubjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List subjects in the schema registry. The response will be an array of subject names. */
export const listProjectsLocationsSchemaRegistriesSubjects: API.OperationMethod<
  ListProjectsLocationsSchemaRegistriesSubjectsRequest,
  ListProjectsLocationsSchemaRegistriesSubjectsResponse,
  ListProjectsLocationsSchemaRegistriesSubjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListProjectsLocationsSchemaRegistriesSubjectsRequest,
  output: ListProjectsLocationsSchemaRegistriesSubjectsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsSchemaRegistriesSubjectsRequest {
  /** Required. The name of the subject to delete. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}` */
  name: string;
  /** Optional. If true, the subject and all associated metadata including the schema ID will be deleted permanently. Otherwise, only the subject is soft-deleted. The default is false. Soft-deleted subjects can still be searched in ListSubjects API call with deleted=true query parameter. A soft-delete of a subject must be performed before a hard-delete. */
  permanent?: boolean;
}

export const DeleteProjectsLocationsSchemaRegistriesSubjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    permanent: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("permanent")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsSchemaRegistriesSubjectsRequest>;

export type DeleteProjectsLocationsSchemaRegistriesSubjectsResponse = HttpBody;
export const DeleteProjectsLocationsSchemaRegistriesSubjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ HttpBody;

export type DeleteProjectsLocationsSchemaRegistriesSubjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a subject. The response will be an array of versions of the deleted subject. */
export const deleteProjectsLocationsSchemaRegistriesSubjects: API.OperationMethod<
  DeleteProjectsLocationsSchemaRegistriesSubjectsRequest,
  DeleteProjectsLocationsSchemaRegistriesSubjectsResponse,
  DeleteProjectsLocationsSchemaRegistriesSubjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsSchemaRegistriesSubjectsRequest,
  output: DeleteProjectsLocationsSchemaRegistriesSubjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface LookupVersionProjectsLocationsSchemaRegistriesSubjectsRequest {
  /** Required. The subject to lookup the schema in. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}` */
  parent: string;
  /** Request body */
  body?: LookupVersionRequest;
}

export const LookupVersionProjectsLocationsSchemaRegistriesSubjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(LookupVersionRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<LookupVersionProjectsLocationsSchemaRegistriesSubjectsRequest>;

export type LookupVersionProjectsLocationsSchemaRegistriesSubjectsResponse =
  SchemaVersion;
export const LookupVersionProjectsLocationsSchemaRegistriesSubjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SchemaVersion;

export type LookupVersionProjectsLocationsSchemaRegistriesSubjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Lookup a schema under the specified subject. */
export const lookupVersionProjectsLocationsSchemaRegistriesSubjects: API.OperationMethod<
  LookupVersionProjectsLocationsSchemaRegistriesSubjectsRequest,
  LookupVersionProjectsLocationsSchemaRegistriesSubjectsResponse,
  LookupVersionProjectsLocationsSchemaRegistriesSubjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: LookupVersionProjectsLocationsSchemaRegistriesSubjectsRequest,
  output: LookupVersionProjectsLocationsSchemaRegistriesSubjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsSchemaRegistriesSubjectsVersionsRequest {
  /** Required. The subject whose versions are to be listed. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}` */
  parent: string;
  /** Optional. If true, the response will include soft-deleted versions of an active or soft-deleted subject. The default is false. */
  deleted?: boolean;
}

export const ListProjectsLocationsSchemaRegistriesSubjectsVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    deleted: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("deleted")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/versions" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsSchemaRegistriesSubjectsVersionsRequest>;

export type ListProjectsLocationsSchemaRegistriesSubjectsVersionsResponse =
  HttpBody;
export const ListProjectsLocationsSchemaRegistriesSubjectsVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ HttpBody;

export type ListProjectsLocationsSchemaRegistriesSubjectsVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get all versions of a subject. The response will be an array of versions of the subject. */
export const listProjectsLocationsSchemaRegistriesSubjectsVersions: API.OperationMethod<
  ListProjectsLocationsSchemaRegistriesSubjectsVersionsRequest,
  ListProjectsLocationsSchemaRegistriesSubjectsVersionsResponse,
  ListProjectsLocationsSchemaRegistriesSubjectsVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListProjectsLocationsSchemaRegistriesSubjectsVersionsRequest,
  output: ListProjectsLocationsSchemaRegistriesSubjectsVersionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsSchemaRegistriesSubjectsVersionsRequest {
  /** Required. The name of the subject version to delete. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}/versions/{version}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}/versions/{version}` */
  name: string;
  /** Optional. If true, both the version and the referenced schema ID will be permanently deleted. The default is false. If false, the version will be deleted but the schema ID will be retained. Soft-deleted versions can still be searched in ListVersions API call with deleted=true query parameter. A soft-delete of a version must be performed before a hard-delete. */
  permanent?: boolean;
}

export const DeleteProjectsLocationsSchemaRegistriesSubjectsVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    permanent: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("permanent")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsSchemaRegistriesSubjectsVersionsRequest>;

export type DeleteProjectsLocationsSchemaRegistriesSubjectsVersionsResponse =
  HttpBody;
export const DeleteProjectsLocationsSchemaRegistriesSubjectsVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ HttpBody;

export type DeleteProjectsLocationsSchemaRegistriesSubjectsVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a version of a subject. The response will be the deleted version id. */
export const deleteProjectsLocationsSchemaRegistriesSubjectsVersions: API.OperationMethod<
  DeleteProjectsLocationsSchemaRegistriesSubjectsVersionsRequest,
  DeleteProjectsLocationsSchemaRegistriesSubjectsVersionsResponse,
  DeleteProjectsLocationsSchemaRegistriesSubjectsVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsSchemaRegistriesSubjectsVersionsRequest,
  output: DeleteProjectsLocationsSchemaRegistriesSubjectsVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsSchemaRegistriesSubjectsVersionsRequest {
  /** Optional. If true, no matter if the subject/version is soft-deleted or not, it returns the version details. If false, it returns NOT_FOUND error if the subject/version is soft-deleted. The default is false. */
  deleted?: boolean;
  /** Required. The name of the subject to return versions. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}/versions/{version}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}/versions/{version}` */
  name: string;
}

export const GetProjectsLocationsSchemaRegistriesSubjectsVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deleted: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("deleted")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsSchemaRegistriesSubjectsVersionsRequest>;

export type GetProjectsLocationsSchemaRegistriesSubjectsVersionsResponse =
  SchemaVersion;
export const GetProjectsLocationsSchemaRegistriesSubjectsVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SchemaVersion;

export type GetProjectsLocationsSchemaRegistriesSubjectsVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get a versioned schema (schema with subject/version) of a subject. */
export const getProjectsLocationsSchemaRegistriesSubjectsVersions: API.OperationMethod<
  GetProjectsLocationsSchemaRegistriesSubjectsVersionsRequest,
  GetProjectsLocationsSchemaRegistriesSubjectsVersionsResponse,
  GetProjectsLocationsSchemaRegistriesSubjectsVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsSchemaRegistriesSubjectsVersionsRequest,
  output: GetProjectsLocationsSchemaRegistriesSubjectsVersionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsSchemaRegistriesSubjectsVersionsRequest {
  /** Required. The subject to create the version for. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}` */
  parent: string;
  /** Request body */
  body?: CreateVersionRequest;
}

export const CreateProjectsLocationsSchemaRegistriesSubjectsVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(CreateVersionRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/versions", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsSchemaRegistriesSubjectsVersionsRequest>;

export type CreateProjectsLocationsSchemaRegistriesSubjectsVersionsResponse =
  CreateVersionResponse;
export const CreateProjectsLocationsSchemaRegistriesSubjectsVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CreateVersionResponse;

export type CreateProjectsLocationsSchemaRegistriesSubjectsVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Register a new version under a given subject with the given schema. */
export const createProjectsLocationsSchemaRegistriesSubjectsVersions: API.OperationMethod<
  CreateProjectsLocationsSchemaRegistriesSubjectsVersionsRequest,
  CreateProjectsLocationsSchemaRegistriesSubjectsVersionsResponse,
  CreateProjectsLocationsSchemaRegistriesSubjectsVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsSchemaRegistriesSubjectsVersionsRequest,
  output: CreateProjectsLocationsSchemaRegistriesSubjectsVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetSchemaProjectsLocationsSchemaRegistriesSubjectsVersionsRequest {
  /** Optional. If true, no matter if the subject/version is soft-deleted or not, it returns the version details. If false, it returns NOT_FOUND error if the subject/version is soft-deleted. The default is false. */
  deleted?: boolean;
  /** Required. The name of the subject to return versions. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}/versions/{version}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}/versions/{version}` */
  name: string;
}

export const GetSchemaProjectsLocationsSchemaRegistriesSubjectsVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deleted: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("deleted")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/schema" }),
    svc,
  ) as unknown as Schema.Schema<GetSchemaProjectsLocationsSchemaRegistriesSubjectsVersionsRequest>;

export type GetSchemaProjectsLocationsSchemaRegistriesSubjectsVersionsResponse =
  HttpBody;
export const GetSchemaProjectsLocationsSchemaRegistriesSubjectsVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ HttpBody;

export type GetSchemaProjectsLocationsSchemaRegistriesSubjectsVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get the schema string only for a version of a subject. The response will be the schema string. */
export const getSchemaProjectsLocationsSchemaRegistriesSubjectsVersions: API.OperationMethod<
  GetSchemaProjectsLocationsSchemaRegistriesSubjectsVersionsRequest,
  GetSchemaProjectsLocationsSchemaRegistriesSubjectsVersionsResponse,
  GetSchemaProjectsLocationsSchemaRegistriesSubjectsVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSchemaProjectsLocationsSchemaRegistriesSubjectsVersionsRequest,
  output: GetSchemaProjectsLocationsSchemaRegistriesSubjectsVersionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsSchemaRegistriesSubjectsVersionsReferencedbyRequest {
  /** Required. The version to list referenced by. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}/versions/{version}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}/versions/{version}` */
  parent: string;
}

export const ListProjectsLocationsSchemaRegistriesSubjectsVersionsReferencedbyRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/referencedby" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsSchemaRegistriesSubjectsVersionsReferencedbyRequest>;

export type ListProjectsLocationsSchemaRegistriesSubjectsVersionsReferencedbyResponse =
  HttpBody;
export const ListProjectsLocationsSchemaRegistriesSubjectsVersionsReferencedbyResponse =
  /*@__PURE__*/ /*#__PURE__*/ HttpBody;

export type ListProjectsLocationsSchemaRegistriesSubjectsVersionsReferencedbyError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get a list of IDs of schemas that reference the schema with the given subject and version. */
export const listProjectsLocationsSchemaRegistriesSubjectsVersionsReferencedby: API.OperationMethod<
  ListProjectsLocationsSchemaRegistriesSubjectsVersionsReferencedbyRequest,
  ListProjectsLocationsSchemaRegistriesSubjectsVersionsReferencedbyResponse,
  ListProjectsLocationsSchemaRegistriesSubjectsVersionsReferencedbyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    ListProjectsLocationsSchemaRegistriesSubjectsVersionsReferencedbyRequest,
  output:
    ListProjectsLocationsSchemaRegistriesSubjectsVersionsReferencedbyResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateProjectsLocationsSchemaRegistriesModeRequest {
  /** Required. The resource name of the mode. The format is * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/mode/{subject}: mode for a schema registry, or * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/mode/{subject}: mode for a specific subject in a specific context */
  name: string;
  /** Request body */
  body?: UpdateSchemaModeRequest;
}

export const UpdateProjectsLocationsSchemaRegistriesModeRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(UpdateSchemaModeRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PUT", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateProjectsLocationsSchemaRegistriesModeRequest>;

export type UpdateProjectsLocationsSchemaRegistriesModeResponse = SchemaMode;
export const UpdateProjectsLocationsSchemaRegistriesModeResponse =
  /*@__PURE__*/ /*#__PURE__*/ SchemaMode;

export type UpdateProjectsLocationsSchemaRegistriesModeError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update mode at global level or for a subject. */
export const updateProjectsLocationsSchemaRegistriesMode: API.OperationMethod<
  UpdateProjectsLocationsSchemaRegistriesModeRequest,
  UpdateProjectsLocationsSchemaRegistriesModeResponse,
  UpdateProjectsLocationsSchemaRegistriesModeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateProjectsLocationsSchemaRegistriesModeRequest,
  output: UpdateProjectsLocationsSchemaRegistriesModeResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsSchemaRegistriesModeRequest {
  /** Required. The resource name of subject to delete the mode for. The format is * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/mode/{subject} * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/mode/{subject} */
  name: string;
}

export const DeleteProjectsLocationsSchemaRegistriesModeRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsSchemaRegistriesModeRequest>;

export type DeleteProjectsLocationsSchemaRegistriesModeResponse = SchemaMode;
export const DeleteProjectsLocationsSchemaRegistriesModeResponse =
  /*@__PURE__*/ /*#__PURE__*/ SchemaMode;

export type DeleteProjectsLocationsSchemaRegistriesModeError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete schema mode for a subject. */
export const deleteProjectsLocationsSchemaRegistriesMode: API.OperationMethod<
  DeleteProjectsLocationsSchemaRegistriesModeRequest,
  DeleteProjectsLocationsSchemaRegistriesModeResponse,
  DeleteProjectsLocationsSchemaRegistriesModeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsSchemaRegistriesModeRequest,
  output: DeleteProjectsLocationsSchemaRegistriesModeResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsSchemaRegistriesModeRequest {
  /** Required. The resource name of the mode. The format is * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/mode/{subject}: mode for a schema registry, or * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/mode/{subject}: mode for a specific subject in a specific context */
  name: string;
}

export const GetProjectsLocationsSchemaRegistriesModeRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsSchemaRegistriesModeRequest>;

export type GetProjectsLocationsSchemaRegistriesModeResponse = SchemaMode;
export const GetProjectsLocationsSchemaRegistriesModeResponse =
  /*@__PURE__*/ /*#__PURE__*/ SchemaMode;

export type GetProjectsLocationsSchemaRegistriesModeError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get mode at global level or for a subject. */
export const getProjectsLocationsSchemaRegistriesMode: API.OperationMethod<
  GetProjectsLocationsSchemaRegistriesModeRequest,
  GetProjectsLocationsSchemaRegistriesModeResponse,
  GetProjectsLocationsSchemaRegistriesModeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsSchemaRegistriesModeRequest,
  output: GetProjectsLocationsSchemaRegistriesModeResponse,
  errors: [NotFound, Forbidden],
}));

export interface CheckCompatibilityProjectsLocationsSchemaRegistriesCompatibilityRequest {
  /** Required. The name of the resource to check compatibility for. The format is either of following: * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/compatibility/subjects/* /versions: Check compatibility with one or more versions of the specified subject. * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/compatibility/subjects/{subject}/versions/{version}: Check compatibility with a specific version of the subject. */
  name: string;
  /** Request body */
  body?: CheckCompatibilityRequest;
}

export const CheckCompatibilityProjectsLocationsSchemaRegistriesCompatibilityRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CheckCompatibilityRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CheckCompatibilityProjectsLocationsSchemaRegistriesCompatibilityRequest>;

export type CheckCompatibilityProjectsLocationsSchemaRegistriesCompatibilityResponse =
  CheckCompatibilityResponse;
export const CheckCompatibilityProjectsLocationsSchemaRegistriesCompatibilityResponse =
  /*@__PURE__*/ /*#__PURE__*/ CheckCompatibilityResponse;

export type CheckCompatibilityProjectsLocationsSchemaRegistriesCompatibilityError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Check compatibility of a schema with all versions or a specific version of a subject. */
export const checkCompatibilityProjectsLocationsSchemaRegistriesCompatibility: API.OperationMethod<
  CheckCompatibilityProjectsLocationsSchemaRegistriesCompatibilityRequest,
  CheckCompatibilityProjectsLocationsSchemaRegistriesCompatibilityResponse,
  CheckCompatibilityProjectsLocationsSchemaRegistriesCompatibilityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    CheckCompatibilityProjectsLocationsSchemaRegistriesCompatibilityRequest,
  output:
    CheckCompatibilityProjectsLocationsSchemaRegistriesCompatibilityResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateProjectsLocationsSchemaRegistriesConfigRequest {
  /** Required. The resource name to update the config for. It can be either of following: * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/config: Update config at global level. * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/config/{subject}: Update config for a specific subject. */
  name: string;
  /** Request body */
  body?: UpdateSchemaConfigRequest;
}

export const UpdateProjectsLocationsSchemaRegistriesConfigRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(UpdateSchemaConfigRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PUT", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateProjectsLocationsSchemaRegistriesConfigRequest>;

export type UpdateProjectsLocationsSchemaRegistriesConfigResponse =
  SchemaConfig;
export const UpdateProjectsLocationsSchemaRegistriesConfigResponse =
  /*@__PURE__*/ /*#__PURE__*/ SchemaConfig;

export type UpdateProjectsLocationsSchemaRegistriesConfigError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update config at global level or for a subject. Creates a SchemaSubject-level SchemaConfig if it does not exist. */
export const updateProjectsLocationsSchemaRegistriesConfig: API.OperationMethod<
  UpdateProjectsLocationsSchemaRegistriesConfigRequest,
  UpdateProjectsLocationsSchemaRegistriesConfigResponse,
  UpdateProjectsLocationsSchemaRegistriesConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateProjectsLocationsSchemaRegistriesConfigRequest,
  output: UpdateProjectsLocationsSchemaRegistriesConfigResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsSchemaRegistriesConfigRequest {
  /** Required. The resource name of subject to delete the config for. The format is * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/config/{subject} */
  name: string;
}

export const DeleteProjectsLocationsSchemaRegistriesConfigRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsSchemaRegistriesConfigRequest>;

export type DeleteProjectsLocationsSchemaRegistriesConfigResponse =
  SchemaConfig;
export const DeleteProjectsLocationsSchemaRegistriesConfigResponse =
  /*@__PURE__*/ /*#__PURE__*/ SchemaConfig;

export type DeleteProjectsLocationsSchemaRegistriesConfigError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete schema config for a subject. */
export const deleteProjectsLocationsSchemaRegistriesConfig: API.OperationMethod<
  DeleteProjectsLocationsSchemaRegistriesConfigRequest,
  DeleteProjectsLocationsSchemaRegistriesConfigResponse,
  DeleteProjectsLocationsSchemaRegistriesConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsSchemaRegistriesConfigRequest,
  output: DeleteProjectsLocationsSchemaRegistriesConfigResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsSchemaRegistriesConfigRequest {
  /** Required. The resource name to get the config for. It can be either of following: * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/config: Get config at global level. * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/config/{subject}: Get config for a specific subject. */
  name: string;
  /** Optional. If true, the config will fall back to the config at the global level if no subject level config is found. */
  defaultToGlobal?: boolean;
}

export const GetProjectsLocationsSchemaRegistriesConfigRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    defaultToGlobal: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("defaultToGlobal"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsSchemaRegistriesConfigRequest>;

export type GetProjectsLocationsSchemaRegistriesConfigResponse = SchemaConfig;
export const GetProjectsLocationsSchemaRegistriesConfigResponse =
  /*@__PURE__*/ /*#__PURE__*/ SchemaConfig;

export type GetProjectsLocationsSchemaRegistriesConfigError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get schema config at global level or for a subject. */
export const getProjectsLocationsSchemaRegistriesConfig: API.OperationMethod<
  GetProjectsLocationsSchemaRegistriesConfigRequest,
  GetProjectsLocationsSchemaRegistriesConfigResponse,
  GetProjectsLocationsSchemaRegistriesConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsSchemaRegistriesConfigRequest,
  output: GetProjectsLocationsSchemaRegistriesConfigResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsSchemaRegistriesContextsRequest {
  /** Required. The name of the context to return. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}` */
  name: string;
}

export const GetProjectsLocationsSchemaRegistriesContextsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsSchemaRegistriesContextsRequest>;

export type GetProjectsLocationsSchemaRegistriesContextsResponse = Context;
export const GetProjectsLocationsSchemaRegistriesContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Context;

export type GetProjectsLocationsSchemaRegistriesContextsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get the context. */
export const getProjectsLocationsSchemaRegistriesContexts: API.OperationMethod<
  GetProjectsLocationsSchemaRegistriesContextsRequest,
  GetProjectsLocationsSchemaRegistriesContextsResponse,
  GetProjectsLocationsSchemaRegistriesContextsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsSchemaRegistriesContextsRequest,
  output: GetProjectsLocationsSchemaRegistriesContextsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsSchemaRegistriesContextsRequest {
  /** Required. The parent of the contexts. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}` */
  parent: string;
}

export const ListProjectsLocationsSchemaRegistriesContextsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/contexts" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsSchemaRegistriesContextsRequest>;

export type ListProjectsLocationsSchemaRegistriesContextsResponse = HttpBody;
export const ListProjectsLocationsSchemaRegistriesContextsResponse =
  /*@__PURE__*/ /*#__PURE__*/ HttpBody;

export type ListProjectsLocationsSchemaRegistriesContextsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List contexts for a schema registry. */
export const listProjectsLocationsSchemaRegistriesContexts: API.OperationMethod<
  ListProjectsLocationsSchemaRegistriesContextsRequest,
  ListProjectsLocationsSchemaRegistriesContextsResponse,
  ListProjectsLocationsSchemaRegistriesContextsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListProjectsLocationsSchemaRegistriesContextsRequest,
  output: ListProjectsLocationsSchemaRegistriesContextsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsSchemaRegistriesContextsSchemasRequest {
  /** Required. The name of the schema to return. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/schemas/ids/{schema}` */
  name: string;
  /** Optional. Used to limit the search for the schema ID to a specific subject, otherwise the schema ID will be searched for in all subjects in the given specified context. */
  subject?: string;
}

export const GetProjectsLocationsSchemaRegistriesContextsSchemasRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    subject: Schema.optional(Schema.String).pipe(T.HttpQuery("subject")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsSchemaRegistriesContextsSchemasRequest>;

export type GetProjectsLocationsSchemaRegistriesContextsSchemasResponse =
  Managedkafka_Schema;
export const GetProjectsLocationsSchemaRegistriesContextsSchemasResponse =
  /*@__PURE__*/ /*#__PURE__*/ Managedkafka_Schema;

export type GetProjectsLocationsSchemaRegistriesContextsSchemasError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get the schema for the given schema id. */
export const getProjectsLocationsSchemaRegistriesContextsSchemas: API.OperationMethod<
  GetProjectsLocationsSchemaRegistriesContextsSchemasRequest,
  GetProjectsLocationsSchemaRegistriesContextsSchemasResponse,
  GetProjectsLocationsSchemaRegistriesContextsSchemasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsSchemaRegistriesContextsSchemasRequest,
  output: GetProjectsLocationsSchemaRegistriesContextsSchemasResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetSchemaProjectsLocationsSchemaRegistriesContextsSchemasRequest {
  /** Optional. Used to limit the search for the schema ID to a specific subject, otherwise the schema ID will be searched for in all subjects in the given specified context. */
  subject?: string;
  /** Required. The name of the schema to return. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/schemas/ids/{schema}` */
  name: string;
}

export const GetSchemaProjectsLocationsSchemaRegistriesContextsSchemasRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subject: Schema.optional(Schema.String).pipe(T.HttpQuery("subject")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/schema" }),
    svc,
  ) as unknown as Schema.Schema<GetSchemaProjectsLocationsSchemaRegistriesContextsSchemasRequest>;

export type GetSchemaProjectsLocationsSchemaRegistriesContextsSchemasResponse =
  HttpBody;
export const GetSchemaProjectsLocationsSchemaRegistriesContextsSchemasResponse =
  /*@__PURE__*/ /*#__PURE__*/ HttpBody;

export type GetSchemaProjectsLocationsSchemaRegistriesContextsSchemasError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get the schema string for the given schema id. The response will be the schema string. */
export const getSchemaProjectsLocationsSchemaRegistriesContextsSchemas: API.OperationMethod<
  GetSchemaProjectsLocationsSchemaRegistriesContextsSchemasRequest,
  GetSchemaProjectsLocationsSchemaRegistriesContextsSchemasResponse,
  GetSchemaProjectsLocationsSchemaRegistriesContextsSchemasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSchemaProjectsLocationsSchemaRegistriesContextsSchemasRequest,
  output: GetSchemaProjectsLocationsSchemaRegistriesContextsSchemasResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsSchemaRegistriesContextsSchemasTypesRequest {
  /** Required. The parent schema registry whose schema types are to be listed. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}` */
  parent: string;
}

export const ListProjectsLocationsSchemaRegistriesContextsSchemasTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/schemas/types" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsSchemaRegistriesContextsSchemasTypesRequest>;

export type ListProjectsLocationsSchemaRegistriesContextsSchemasTypesResponse =
  HttpBody;
export const ListProjectsLocationsSchemaRegistriesContextsSchemasTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ HttpBody;

export type ListProjectsLocationsSchemaRegistriesContextsSchemasTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List the supported schema types. The response will be an array of schema types. */
export const listProjectsLocationsSchemaRegistriesContextsSchemasTypes: API.OperationMethod<
  ListProjectsLocationsSchemaRegistriesContextsSchemasTypesRequest,
  ListProjectsLocationsSchemaRegistriesContextsSchemasTypesResponse,
  ListProjectsLocationsSchemaRegistriesContextsSchemasTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListProjectsLocationsSchemaRegistriesContextsSchemasTypesRequest,
  output: ListProjectsLocationsSchemaRegistriesContextsSchemasTypesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsSchemaRegistriesContextsSchemasSubjectsRequest {
  /** Required. The schema resource whose associated subjects are to be listed. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/schemas/ids/{schema}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/schemas/ids/{schema}` */
  parent: string;
  /** Optional. If true, the response will include soft-deleted subjects. The default is false. */
  deleted?: boolean;
  /** Optional. The subject to filter the subjects by. */
  subject?: string;
}

export const ListProjectsLocationsSchemaRegistriesContextsSchemasSubjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    deleted: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("deleted")),
    subject: Schema.optional(Schema.String).pipe(T.HttpQuery("subject")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/subjects" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsSchemaRegistriesContextsSchemasSubjectsRequest>;

export type ListProjectsLocationsSchemaRegistriesContextsSchemasSubjectsResponse =
  HttpBody;
export const ListProjectsLocationsSchemaRegistriesContextsSchemasSubjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ HttpBody;

export type ListProjectsLocationsSchemaRegistriesContextsSchemasSubjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List subjects which reference a particular schema id. The response will be an array of subject names. */
export const listProjectsLocationsSchemaRegistriesContextsSchemasSubjects: API.OperationMethod<
  ListProjectsLocationsSchemaRegistriesContextsSchemasSubjectsRequest,
  ListProjectsLocationsSchemaRegistriesContextsSchemasSubjectsResponse,
  ListProjectsLocationsSchemaRegistriesContextsSchemasSubjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListProjectsLocationsSchemaRegistriesContextsSchemasSubjectsRequest,
  output: ListProjectsLocationsSchemaRegistriesContextsSchemasSubjectsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsSchemaRegistriesContextsSchemasVersionsRequest {
  /** Required. The schema whose schema versions are to be listed. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/schemas/ids/{schema}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/schemas/ids/{schema}` */
  parent: string;
  /** Optional. If true, the response will include soft-deleted versions of the schema, even if the subject is soft-deleted. The default is false. */
  deleted?: boolean;
  /** Optional. The subject to filter the subjects by. */
  subject?: string;
}

export const ListProjectsLocationsSchemaRegistriesContextsSchemasVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    deleted: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("deleted")),
    subject: Schema.optional(Schema.String).pipe(T.HttpQuery("subject")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/versions" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsSchemaRegistriesContextsSchemasVersionsRequest>;

export type ListProjectsLocationsSchemaRegistriesContextsSchemasVersionsResponse =
  HttpBody;
export const ListProjectsLocationsSchemaRegistriesContextsSchemasVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ HttpBody;

export type ListProjectsLocationsSchemaRegistriesContextsSchemasVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List the schema versions for the given schema id. The response will be an array of subject-version pairs as: [{"subject":"subject1", "version":1}, {"subject":"subject2", "version":2}]. */
export const listProjectsLocationsSchemaRegistriesContextsSchemasVersions: API.OperationMethod<
  ListProjectsLocationsSchemaRegistriesContextsSchemasVersionsRequest,
  ListProjectsLocationsSchemaRegistriesContextsSchemasVersionsResponse,
  ListProjectsLocationsSchemaRegistriesContextsSchemasVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListProjectsLocationsSchemaRegistriesContextsSchemasVersionsRequest,
  output: ListProjectsLocationsSchemaRegistriesContextsSchemasVersionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsSchemaRegistriesContextsSubjectsRequest {
  /** Required. The parent schema registry/context whose subjects are to be listed. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}` */
  parent: string;
  /** Optional. If true, the response will include soft-deleted subjects. The default is false. */
  deleted?: boolean;
  /** Optional. The context to filter the subjects by, in the format of `:.{context}:`. If unset, all subjects in the registry are returned. Set to empty string or add as '?subjectPrefix=' at the end of this request to list subjects in the default context. */
  subjectPrefix?: string;
}

export const ListProjectsLocationsSchemaRegistriesContextsSubjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    deleted: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("deleted")),
    subjectPrefix: Schema.optional(Schema.String).pipe(
      T.HttpQuery("subjectPrefix"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/subjects" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsSchemaRegistriesContextsSubjectsRequest>;

export type ListProjectsLocationsSchemaRegistriesContextsSubjectsResponse =
  HttpBody;
export const ListProjectsLocationsSchemaRegistriesContextsSubjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ HttpBody;

export type ListProjectsLocationsSchemaRegistriesContextsSubjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List subjects in the schema registry. The response will be an array of subject names. */
export const listProjectsLocationsSchemaRegistriesContextsSubjects: API.OperationMethod<
  ListProjectsLocationsSchemaRegistriesContextsSubjectsRequest,
  ListProjectsLocationsSchemaRegistriesContextsSubjectsResponse,
  ListProjectsLocationsSchemaRegistriesContextsSubjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListProjectsLocationsSchemaRegistriesContextsSubjectsRequest,
  output: ListProjectsLocationsSchemaRegistriesContextsSubjectsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsSchemaRegistriesContextsSubjectsRequest {
  /** Required. The name of the subject to delete. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}` */
  name: string;
  /** Optional. If true, the subject and all associated metadata including the schema ID will be deleted permanently. Otherwise, only the subject is soft-deleted. The default is false. Soft-deleted subjects can still be searched in ListSubjects API call with deleted=true query parameter. A soft-delete of a subject must be performed before a hard-delete. */
  permanent?: boolean;
}

export const DeleteProjectsLocationsSchemaRegistriesContextsSubjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    permanent: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("permanent")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsSchemaRegistriesContextsSubjectsRequest>;

export type DeleteProjectsLocationsSchemaRegistriesContextsSubjectsResponse =
  HttpBody;
export const DeleteProjectsLocationsSchemaRegistriesContextsSubjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ HttpBody;

export type DeleteProjectsLocationsSchemaRegistriesContextsSubjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a subject. The response will be an array of versions of the deleted subject. */
export const deleteProjectsLocationsSchemaRegistriesContextsSubjects: API.OperationMethod<
  DeleteProjectsLocationsSchemaRegistriesContextsSubjectsRequest,
  DeleteProjectsLocationsSchemaRegistriesContextsSubjectsResponse,
  DeleteProjectsLocationsSchemaRegistriesContextsSubjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsSchemaRegistriesContextsSubjectsRequest,
  output: DeleteProjectsLocationsSchemaRegistriesContextsSubjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface LookupVersionProjectsLocationsSchemaRegistriesContextsSubjectsRequest {
  /** Required. The subject to lookup the schema in. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}` */
  parent: string;
  /** Request body */
  body?: LookupVersionRequest;
}

export const LookupVersionProjectsLocationsSchemaRegistriesContextsSubjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(LookupVersionRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<LookupVersionProjectsLocationsSchemaRegistriesContextsSubjectsRequest>;

export type LookupVersionProjectsLocationsSchemaRegistriesContextsSubjectsResponse =
  SchemaVersion;
export const LookupVersionProjectsLocationsSchemaRegistriesContextsSubjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SchemaVersion;

export type LookupVersionProjectsLocationsSchemaRegistriesContextsSubjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Lookup a schema under the specified subject. */
export const lookupVersionProjectsLocationsSchemaRegistriesContextsSubjects: API.OperationMethod<
  LookupVersionProjectsLocationsSchemaRegistriesContextsSubjectsRequest,
  LookupVersionProjectsLocationsSchemaRegistriesContextsSubjectsResponse,
  LookupVersionProjectsLocationsSchemaRegistriesContextsSubjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: LookupVersionProjectsLocationsSchemaRegistriesContextsSubjectsRequest,
  output:
    LookupVersionProjectsLocationsSchemaRegistriesContextsSubjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsSchemaRegistriesContextsSubjectsVersionsRequest {
  /** Required. The subject to create the version for. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}` */
  parent: string;
  /** Request body */
  body?: CreateVersionRequest;
}

export const CreateProjectsLocationsSchemaRegistriesContextsSubjectsVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(CreateVersionRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/versions", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsSchemaRegistriesContextsSubjectsVersionsRequest>;

export type CreateProjectsLocationsSchemaRegistriesContextsSubjectsVersionsResponse =
  CreateVersionResponse;
export const CreateProjectsLocationsSchemaRegistriesContextsSubjectsVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CreateVersionResponse;

export type CreateProjectsLocationsSchemaRegistriesContextsSubjectsVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Register a new version under a given subject with the given schema. */
export const createProjectsLocationsSchemaRegistriesContextsSubjectsVersions: API.OperationMethod<
  CreateProjectsLocationsSchemaRegistriesContextsSubjectsVersionsRequest,
  CreateProjectsLocationsSchemaRegistriesContextsSubjectsVersionsResponse,
  CreateProjectsLocationsSchemaRegistriesContextsSubjectsVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsSchemaRegistriesContextsSubjectsVersionsRequest,
  output:
    CreateProjectsLocationsSchemaRegistriesContextsSubjectsVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsSchemaRegistriesContextsSubjectsVersionsRequest {
  /** Optional. If true, no matter if the subject/version is soft-deleted or not, it returns the version details. If false, it returns NOT_FOUND error if the subject/version is soft-deleted. The default is false. */
  deleted?: boolean;
  /** Required. The name of the subject to return versions. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}/versions/{version}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}/versions/{version}` */
  name: string;
}

export const GetProjectsLocationsSchemaRegistriesContextsSubjectsVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deleted: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("deleted")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsSchemaRegistriesContextsSubjectsVersionsRequest>;

export type GetProjectsLocationsSchemaRegistriesContextsSubjectsVersionsResponse =
  SchemaVersion;
export const GetProjectsLocationsSchemaRegistriesContextsSubjectsVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SchemaVersion;

export type GetProjectsLocationsSchemaRegistriesContextsSubjectsVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get a versioned schema (schema with subject/version) of a subject. */
export const getProjectsLocationsSchemaRegistriesContextsSubjectsVersions: API.OperationMethod<
  GetProjectsLocationsSchemaRegistriesContextsSubjectsVersionsRequest,
  GetProjectsLocationsSchemaRegistriesContextsSubjectsVersionsResponse,
  GetProjectsLocationsSchemaRegistriesContextsSubjectsVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsSchemaRegistriesContextsSubjectsVersionsRequest,
  output: GetProjectsLocationsSchemaRegistriesContextsSubjectsVersionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsSchemaRegistriesContextsSubjectsVersionsRequest {
  /** Required. The subject whose versions are to be listed. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}` */
  parent: string;
  /** Optional. If true, the response will include soft-deleted versions of an active or soft-deleted subject. The default is false. */
  deleted?: boolean;
}

export const ListProjectsLocationsSchemaRegistriesContextsSubjectsVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    deleted: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("deleted")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/versions" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsSchemaRegistriesContextsSubjectsVersionsRequest>;

export type ListProjectsLocationsSchemaRegistriesContextsSubjectsVersionsResponse =
  HttpBody;
export const ListProjectsLocationsSchemaRegistriesContextsSubjectsVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ HttpBody;

export type ListProjectsLocationsSchemaRegistriesContextsSubjectsVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get all versions of a subject. The response will be an array of versions of the subject. */
export const listProjectsLocationsSchemaRegistriesContextsSubjectsVersions: API.OperationMethod<
  ListProjectsLocationsSchemaRegistriesContextsSubjectsVersionsRequest,
  ListProjectsLocationsSchemaRegistriesContextsSubjectsVersionsResponse,
  ListProjectsLocationsSchemaRegistriesContextsSubjectsVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListProjectsLocationsSchemaRegistriesContextsSubjectsVersionsRequest,
  output: ListProjectsLocationsSchemaRegistriesContextsSubjectsVersionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsSchemaRegistriesContextsSubjectsVersionsRequest {
  /** Required. The name of the subject version to delete. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}/versions/{version}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}/versions/{version}` */
  name: string;
  /** Optional. If true, both the version and the referenced schema ID will be permanently deleted. The default is false. If false, the version will be deleted but the schema ID will be retained. Soft-deleted versions can still be searched in ListVersions API call with deleted=true query parameter. A soft-delete of a version must be performed before a hard-delete. */
  permanent?: boolean;
}

export const DeleteProjectsLocationsSchemaRegistriesContextsSubjectsVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    permanent: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("permanent")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsSchemaRegistriesContextsSubjectsVersionsRequest>;

export type DeleteProjectsLocationsSchemaRegistriesContextsSubjectsVersionsResponse =
  HttpBody;
export const DeleteProjectsLocationsSchemaRegistriesContextsSubjectsVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ HttpBody;

export type DeleteProjectsLocationsSchemaRegistriesContextsSubjectsVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a version of a subject. The response will be the deleted version id. */
export const deleteProjectsLocationsSchemaRegistriesContextsSubjectsVersions: API.OperationMethod<
  DeleteProjectsLocationsSchemaRegistriesContextsSubjectsVersionsRequest,
  DeleteProjectsLocationsSchemaRegistriesContextsSubjectsVersionsResponse,
  DeleteProjectsLocationsSchemaRegistriesContextsSubjectsVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsSchemaRegistriesContextsSubjectsVersionsRequest,
  output:
    DeleteProjectsLocationsSchemaRegistriesContextsSubjectsVersionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetSchemaProjectsLocationsSchemaRegistriesContextsSubjectsVersionsRequest {
  /** Required. The name of the subject to return versions. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}/versions/{version}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}/versions/{version}` */
  name: string;
  /** Optional. If true, no matter if the subject/version is soft-deleted or not, it returns the version details. If false, it returns NOT_FOUND error if the subject/version is soft-deleted. The default is false. */
  deleted?: boolean;
}

export const GetSchemaProjectsLocationsSchemaRegistriesContextsSubjectsVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    deleted: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("deleted")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/schema" }),
    svc,
  ) as unknown as Schema.Schema<GetSchemaProjectsLocationsSchemaRegistriesContextsSubjectsVersionsRequest>;

export type GetSchemaProjectsLocationsSchemaRegistriesContextsSubjectsVersionsResponse =
  HttpBody;
export const GetSchemaProjectsLocationsSchemaRegistriesContextsSubjectsVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ HttpBody;

export type GetSchemaProjectsLocationsSchemaRegistriesContextsSubjectsVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get the schema string only for a version of a subject. The response will be the schema string. */
export const getSchemaProjectsLocationsSchemaRegistriesContextsSubjectsVersions: API.OperationMethod<
  GetSchemaProjectsLocationsSchemaRegistriesContextsSubjectsVersionsRequest,
  GetSchemaProjectsLocationsSchemaRegistriesContextsSubjectsVersionsResponse,
  GetSchemaProjectsLocationsSchemaRegistriesContextsSubjectsVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    GetSchemaProjectsLocationsSchemaRegistriesContextsSubjectsVersionsRequest,
  output:
    GetSchemaProjectsLocationsSchemaRegistriesContextsSubjectsVersionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsSchemaRegistriesContextsSubjectsVersionsReferencedbyRequest {
  /** Required. The version to list referenced by. Structured like: `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/subjects/{subject}/versions/{version}` or `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/subjects/{subject}/versions/{version}` */
  parent: string;
}

export const ListProjectsLocationsSchemaRegistriesContextsSubjectsVersionsReferencedbyRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/referencedby" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsSchemaRegistriesContextsSubjectsVersionsReferencedbyRequest>;

export type ListProjectsLocationsSchemaRegistriesContextsSubjectsVersionsReferencedbyResponse =
  HttpBody;
export const ListProjectsLocationsSchemaRegistriesContextsSubjectsVersionsReferencedbyResponse =
  /*@__PURE__*/ /*#__PURE__*/ HttpBody;

export type ListProjectsLocationsSchemaRegistriesContextsSubjectsVersionsReferencedbyError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get a list of IDs of schemas that reference the schema with the given subject and version. */
export const listProjectsLocationsSchemaRegistriesContextsSubjectsVersionsReferencedby: API.OperationMethod<
  ListProjectsLocationsSchemaRegistriesContextsSubjectsVersionsReferencedbyRequest,
  ListProjectsLocationsSchemaRegistriesContextsSubjectsVersionsReferencedbyResponse,
  ListProjectsLocationsSchemaRegistriesContextsSubjectsVersionsReferencedbyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    ListProjectsLocationsSchemaRegistriesContextsSubjectsVersionsReferencedbyRequest,
  output:
    ListProjectsLocationsSchemaRegistriesContextsSubjectsVersionsReferencedbyResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateProjectsLocationsSchemaRegistriesContextsConfigRequest {
  /** Required. The resource name to update the config for. It can be either of following: * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/config: Update config at global level. * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/config/{subject}: Update config for a specific subject. */
  name: string;
  /** Request body */
  body?: UpdateSchemaConfigRequest;
}

export const UpdateProjectsLocationsSchemaRegistriesContextsConfigRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(UpdateSchemaConfigRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PUT", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateProjectsLocationsSchemaRegistriesContextsConfigRequest>;

export type UpdateProjectsLocationsSchemaRegistriesContextsConfigResponse =
  SchemaConfig;
export const UpdateProjectsLocationsSchemaRegistriesContextsConfigResponse =
  /*@__PURE__*/ /*#__PURE__*/ SchemaConfig;

export type UpdateProjectsLocationsSchemaRegistriesContextsConfigError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update config at global level or for a subject. Creates a SchemaSubject-level SchemaConfig if it does not exist. */
export const updateProjectsLocationsSchemaRegistriesContextsConfig: API.OperationMethod<
  UpdateProjectsLocationsSchemaRegistriesContextsConfigRequest,
  UpdateProjectsLocationsSchemaRegistriesContextsConfigResponse,
  UpdateProjectsLocationsSchemaRegistriesContextsConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateProjectsLocationsSchemaRegistriesContextsConfigRequest,
  output: UpdateProjectsLocationsSchemaRegistriesContextsConfigResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsSchemaRegistriesContextsConfigRequest {
  /** Required. The resource name of subject to delete the config for. The format is * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/config/{subject} */
  name: string;
}

export const DeleteProjectsLocationsSchemaRegistriesContextsConfigRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsSchemaRegistriesContextsConfigRequest>;

export type DeleteProjectsLocationsSchemaRegistriesContextsConfigResponse =
  SchemaConfig;
export const DeleteProjectsLocationsSchemaRegistriesContextsConfigResponse =
  /*@__PURE__*/ /*#__PURE__*/ SchemaConfig;

export type DeleteProjectsLocationsSchemaRegistriesContextsConfigError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete schema config for a subject. */
export const deleteProjectsLocationsSchemaRegistriesContextsConfig: API.OperationMethod<
  DeleteProjectsLocationsSchemaRegistriesContextsConfigRequest,
  DeleteProjectsLocationsSchemaRegistriesContextsConfigResponse,
  DeleteProjectsLocationsSchemaRegistriesContextsConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsSchemaRegistriesContextsConfigRequest,
  output: DeleteProjectsLocationsSchemaRegistriesContextsConfigResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsSchemaRegistriesContextsConfigRequest {
  /** Required. The resource name to get the config for. It can be either of following: * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/config: Get config at global level. * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/config/{subject}: Get config for a specific subject. */
  name: string;
  /** Optional. If true, the config will fall back to the config at the global level if no subject level config is found. */
  defaultToGlobal?: boolean;
}

export const GetProjectsLocationsSchemaRegistriesContextsConfigRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    defaultToGlobal: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("defaultToGlobal"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsSchemaRegistriesContextsConfigRequest>;

export type GetProjectsLocationsSchemaRegistriesContextsConfigResponse =
  SchemaConfig;
export const GetProjectsLocationsSchemaRegistriesContextsConfigResponse =
  /*@__PURE__*/ /*#__PURE__*/ SchemaConfig;

export type GetProjectsLocationsSchemaRegistriesContextsConfigError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get schema config at global level or for a subject. */
export const getProjectsLocationsSchemaRegistriesContextsConfig: API.OperationMethod<
  GetProjectsLocationsSchemaRegistriesContextsConfigRequest,
  GetProjectsLocationsSchemaRegistriesContextsConfigResponse,
  GetProjectsLocationsSchemaRegistriesContextsConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsSchemaRegistriesContextsConfigRequest,
  output: GetProjectsLocationsSchemaRegistriesContextsConfigResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsSchemaRegistriesContextsModeRequest {
  /** Required. The resource name of the mode. The format is * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/mode/{subject}: mode for a schema registry, or * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/mode/{subject}: mode for a specific subject in a specific context */
  name: string;
}

export const GetProjectsLocationsSchemaRegistriesContextsModeRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsSchemaRegistriesContextsModeRequest>;

export type GetProjectsLocationsSchemaRegistriesContextsModeResponse =
  SchemaMode;
export const GetProjectsLocationsSchemaRegistriesContextsModeResponse =
  /*@__PURE__*/ /*#__PURE__*/ SchemaMode;

export type GetProjectsLocationsSchemaRegistriesContextsModeError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get mode at global level or for a subject. */
export const getProjectsLocationsSchemaRegistriesContextsMode: API.OperationMethod<
  GetProjectsLocationsSchemaRegistriesContextsModeRequest,
  GetProjectsLocationsSchemaRegistriesContextsModeResponse,
  GetProjectsLocationsSchemaRegistriesContextsModeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsSchemaRegistriesContextsModeRequest,
  output: GetProjectsLocationsSchemaRegistriesContextsModeResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateProjectsLocationsSchemaRegistriesContextsModeRequest {
  /** Required. The resource name of the mode. The format is * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/mode/{subject}: mode for a schema registry, or * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/mode/{subject}: mode for a specific subject in a specific context */
  name: string;
  /** Request body */
  body?: UpdateSchemaModeRequest;
}

export const UpdateProjectsLocationsSchemaRegistriesContextsModeRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(UpdateSchemaModeRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PUT", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateProjectsLocationsSchemaRegistriesContextsModeRequest>;

export type UpdateProjectsLocationsSchemaRegistriesContextsModeResponse =
  SchemaMode;
export const UpdateProjectsLocationsSchemaRegistriesContextsModeResponse =
  /*@__PURE__*/ /*#__PURE__*/ SchemaMode;

export type UpdateProjectsLocationsSchemaRegistriesContextsModeError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update mode at global level or for a subject. */
export const updateProjectsLocationsSchemaRegistriesContextsMode: API.OperationMethod<
  UpdateProjectsLocationsSchemaRegistriesContextsModeRequest,
  UpdateProjectsLocationsSchemaRegistriesContextsModeResponse,
  UpdateProjectsLocationsSchemaRegistriesContextsModeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateProjectsLocationsSchemaRegistriesContextsModeRequest,
  output: UpdateProjectsLocationsSchemaRegistriesContextsModeResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsSchemaRegistriesContextsModeRequest {
  /** Required. The resource name of subject to delete the mode for. The format is * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/mode/{subject} * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/mode/{subject} */
  name: string;
}

export const DeleteProjectsLocationsSchemaRegistriesContextsModeRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsSchemaRegistriesContextsModeRequest>;

export type DeleteProjectsLocationsSchemaRegistriesContextsModeResponse =
  SchemaMode;
export const DeleteProjectsLocationsSchemaRegistriesContextsModeResponse =
  /*@__PURE__*/ /*#__PURE__*/ SchemaMode;

export type DeleteProjectsLocationsSchemaRegistriesContextsModeError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete schema mode for a subject. */
export const deleteProjectsLocationsSchemaRegistriesContextsMode: API.OperationMethod<
  DeleteProjectsLocationsSchemaRegistriesContextsModeRequest,
  DeleteProjectsLocationsSchemaRegistriesContextsModeResponse,
  DeleteProjectsLocationsSchemaRegistriesContextsModeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsSchemaRegistriesContextsModeRequest,
  output: DeleteProjectsLocationsSchemaRegistriesContextsModeResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CheckCompatibilityProjectsLocationsSchemaRegistriesContextsCompatibilityRequest {
  /** Required. The name of the resource to check compatibility for. The format is either of following: * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/compatibility/subjects/* /versions: Check compatibility with one or more versions of the specified subject. * projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/compatibility/subjects/{subject}/versions/{version}: Check compatibility with a specific version of the subject. */
  name: string;
  /** Request body */
  body?: CheckCompatibilityRequest;
}

export const CheckCompatibilityProjectsLocationsSchemaRegistriesContextsCompatibilityRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CheckCompatibilityRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CheckCompatibilityProjectsLocationsSchemaRegistriesContextsCompatibilityRequest>;

export type CheckCompatibilityProjectsLocationsSchemaRegistriesContextsCompatibilityResponse =
  CheckCompatibilityResponse;
export const CheckCompatibilityProjectsLocationsSchemaRegistriesContextsCompatibilityResponse =
  /*@__PURE__*/ /*#__PURE__*/ CheckCompatibilityResponse;

export type CheckCompatibilityProjectsLocationsSchemaRegistriesContextsCompatibilityError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Check compatibility of a schema with all versions or a specific version of a subject. */
export const checkCompatibilityProjectsLocationsSchemaRegistriesContextsCompatibility: API.OperationMethod<
  CheckCompatibilityProjectsLocationsSchemaRegistriesContextsCompatibilityRequest,
  CheckCompatibilityProjectsLocationsSchemaRegistriesContextsCompatibilityResponse,
  CheckCompatibilityProjectsLocationsSchemaRegistriesContextsCompatibilityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    CheckCompatibilityProjectsLocationsSchemaRegistriesContextsCompatibilityRequest,
  output:
    CheckCompatibilityProjectsLocationsSchemaRegistriesContextsCompatibilityResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
