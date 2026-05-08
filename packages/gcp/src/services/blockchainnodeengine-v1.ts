// ==========================================================================
// Blockchain Node Engine API (blockchainnodeengine v1)
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
  name: "blockchainnodeengine",
  version: "v1",
  rootUrl: "https://blockchainnodeengine.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface EthereumEndpoints {
  /** Output only. The assigned URL for the node's Beacon API endpoint. */
  beaconApiEndpoint?: string;
  /** Output only. The assigned URL for the node's Beacon Prometheus metrics endpoint. See [Prometheus Metrics](https://lighthouse-book.sigmaprime.io/advanced_metrics.html) for more details. */
  beaconPrometheusMetricsApiEndpoint?: string;
  /** Output only. The assigned URL for the node's execution client's Prometheus metrics endpoint. */
  executionClientPrometheusMetricsApiEndpoint?: string;
}

export const EthereumEndpoints: Schema.Schema<EthereumEndpoints> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    beaconApiEndpoint: Schema.optional(Schema.String),
    beaconPrometheusMetricsApiEndpoint: Schema.optional(Schema.String),
    executionClientPrometheusMetricsApiEndpoint: Schema.optional(Schema.String),
  }).annotate({ identifier: "EthereumEndpoints" });

export interface CancelOperationRequest {}

export const CancelOperationRequest: Schema.Schema<CancelOperationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelOperationRequest",
  });

export interface EndpointInfo {
  /** Output only. The assigned URL for the node JSON-RPC API endpoint. */
  jsonRpcApiEndpoint?: string;
  /** Output only. The assigned URL for the node WebSockets API endpoint. */
  websocketsApiEndpoint?: string;
}

export const EndpointInfo: Schema.Schema<EndpointInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    jsonRpcApiEndpoint: Schema.optional(Schema.String),
    websocketsApiEndpoint: Schema.optional(Schema.String),
  }).annotate({ identifier: "EndpointInfo" });

export interface ConnectionInfo {
  /** Output only. The endpoint information through which to interact with a blockchain node. */
  endpointInfo?: EndpointInfo;
  /** Output only. A service attachment that exposes a node, and has the following format: projects/{project}/regions/{region}/serviceAttachments/{service_attachment_name} */
  serviceAttachment?: string;
}

export const ConnectionInfo: Schema.Schema<ConnectionInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endpointInfo: Schema.optional(EndpointInfo),
    serviceAttachment: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConnectionInfo" });

export interface Location {
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
}

export const Location: Schema.Schema<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    displayName: Schema.optional(Schema.String),
    locationId: Schema.optional(Schema.String),
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

export interface GoogleProtobufEmpty {}

export const GoogleProtobufEmpty: Schema.Schema<GoogleProtobufEmpty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleProtobufEmpty",
  });

export interface GethDetails {
  /** Immutable. Blockchain garbage collection mode. */
  garbageCollectionMode?:
    | "GARBAGE_COLLECTION_MODE_UNSPECIFIED"
    | "FULL"
    | "ARCHIVE"
    | (string & {});
}

export const GethDetails: Schema.Schema<GethDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    garbageCollectionMode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GethDetails" });

export interface ValidatorConfig {
  /** Immutable. When true, deploys a GCP-managed validator client alongside the beacon client. */
  managedValidatorClient?: boolean;
  /** URLs for MEV-relay services to use for block building. When set, a GCP-managed MEV-boost service is configured on the beacon client. */
  mevRelayUrls?: ReadonlyArray<string>;
  /** An Ethereum address which the beacon client will send fee rewards to if no recipient is configured in the validator client. See https://lighthouse-book.sigmaprime.io/suggested-fee-recipient.html or https://docs.prylabs.network/docs/execution-node/fee-recipient for examples of how this is used. Note that while this is often described as "suggested", as we run the execution node we can trust the execution node, and therefore this is considered enforced. */
  beaconFeeRecipient?: string;
}

export const ValidatorConfig: Schema.Schema<ValidatorConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    managedValidatorClient: Schema.optional(Schema.Boolean),
    mevRelayUrls: Schema.optional(Schema.Array(Schema.String)),
    beaconFeeRecipient: Schema.optional(Schema.String),
  }).annotate({ identifier: "ValidatorConfig" });

export interface EthereumDetails {
  /** Immutable. The execution client */
  executionClient?:
    | "EXECUTION_CLIENT_UNSPECIFIED"
    | "GETH"
    | "ERIGON"
    | (string & {});
  /** Immutable. The Ethereum environment being accessed. */
  network?:
    | "NETWORK_UNSPECIFIED"
    | "MAINNET"
    | "TESTNET_GOERLI_PRATER"
    | "TESTNET_SEPOLIA"
    | "TESTNET_HOLESKY"
    | (string & {});
  /** Immutable. The consensus client. */
  consensusClient?:
    | "CONSENSUS_CLIENT_UNSPECIFIED"
    | "LIGHTHOUSE"
    | "ERIGON_EMBEDDED_CONSENSUS_LAYER"
    | (string & {});
  /** Immutable. Enables JSON-RPC access to functions in the `debug` namespace. Defaults to `false`. */
  apiEnableDebug?: boolean;
  /** Output only. Ethereum-specific endpoint information. */
  additionalEndpoints?: EthereumEndpoints;
  /** Immutable. The type of Ethereum node. */
  nodeType?:
    | "NODE_TYPE_UNSPECIFIED"
    | "LIGHT"
    | "FULL"
    | "ARCHIVE"
    | (string & {});
  /** Details for the Geth execution client. */
  gethDetails?: GethDetails;
  /** Immutable. Enables JSON-RPC access to functions in the `admin` namespace. Defaults to `false`. */
  apiEnableAdmin?: boolean;
  /** Configuration for validator-related parameters on the beacon client, and for any GCP-managed validator client. */
  validatorConfig?: ValidatorConfig;
}

export const EthereumDetails: Schema.Schema<EthereumDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    executionClient: Schema.optional(Schema.String),
    network: Schema.optional(Schema.String),
    consensusClient: Schema.optional(Schema.String),
    apiEnableDebug: Schema.optional(Schema.Boolean),
    additionalEndpoints: Schema.optional(EthereumEndpoints),
    nodeType: Schema.optional(Schema.String),
    gethDetails: Schema.optional(GethDetails),
    apiEnableAdmin: Schema.optional(Schema.Boolean),
    validatorConfig: Schema.optional(ValidatorConfig),
  }).annotate({ identifier: "EthereumDetails" });

export interface BlockchainNode {
  /** Ethereum-specific blockchain node details. */
  ethereumDetails?: EthereumDetails;
  /** Output only. The connection information used to interact with a blockchain node. */
  connectionInfo?: ConnectionInfo;
  /** Output only. A status representing the state of the node. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "DELETING"
    | "RUNNING"
    | "ERROR"
    | "UPDATING"
    | "REPAIRING"
    | "RECONCILING"
    | "SYNCING"
    | (string & {});
  /** Output only. The fully qualified name of the blockchain node. e.g. `projects/my-project/locations/us-central1/blockchainNodes/my-node`. */
  name?: string;
  /** User-provided key-value pairs. */
  labels?: Record<string, string>;
  /** Immutable. The blockchain type of the node. */
  blockchainType?: "BLOCKCHAIN_TYPE_UNSPECIFIED" | "ETHEREUM" | (string & {});
  /** Optional. When true, the node is only accessible via Private Service Connect; no public endpoints are exposed. Otherwise, the node is only accessible via public endpoints. Warning: These nodes are deprecated, please use public endpoints instead. */
  privateServiceConnectEnabled?: boolean;
  /** Output only. The timestamp at which the blockchain node was first created. */
  createTime?: string;
  /** Output only. The timestamp at which the blockchain node was last updated. */
  updateTime?: string;
}

export const BlockchainNode: Schema.Schema<BlockchainNode> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ethereumDetails: Schema.optional(EthereumDetails),
    connectionInfo: Schema.optional(ConnectionInfo),
    state: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    blockchainType: Schema.optional(Schema.String),
    privateServiceConnectEnabled: Schema.optional(Schema.Boolean),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "BlockchainNode" });

export interface OperationMetadata {
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have `Operation.error` value with a `google.rpc.Status.code` of `1`, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
}

export const OperationMetadata: Schema.Schema<OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiVersion: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
    endTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    statusMessage: Schema.optional(Schema.String),
  }).annotate({ identifier: "OperationMetadata" });

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
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    done: Schema.optional(Schema.Boolean),
    error: Schema.optional(Status),
    name: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "Operation" });

export interface ListOperationsResponse {
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<Operation>;
  /** The standard List next-page token. */
  nextPageToken?: string;
}

export const ListOperationsResponse: Schema.Schema<ListOperationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operations: Schema.optional(Schema.Array(Operation)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListOperationsResponse" });

export interface ListBlockchainNodesResponse {
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The list of nodes */
  blockchainNodes?: ReadonlyArray<BlockchainNode>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListBlockchainNodesResponse: Schema.Schema<ListBlockchainNodesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    blockchainNodes: Schema.optional(Schema.Array(BlockchainNode)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListBlockchainNodesResponse" });

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
  /** Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations. */
  extraLocationTypes?: string[];
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    name: Schema.String.pipe(T.HttpPath("name")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
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

/** Lists information about the supported locations for this service. */
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

export type CancelProjectsLocationsOperationsResponse = GoogleProtobufEmpty;
export const CancelProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

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
  /** The standard list page size. */
  pageSize?: number;
  /** The standard list page token. */
  pageToken?: string;
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list filter. */
  filter?: string;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    name: Schema.String.pipe(T.HttpPath("name")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
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

export type DeleteProjectsLocationsOperationsResponse = GoogleProtobufEmpty;
export const DeleteProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

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

export interface PatchProjectsLocationsBlockchainNodesRequest {
  /** Output only. The fully qualified name of the blockchain node. e.g. `projects/my-project/locations/us-central1/blockchainNodes/my-node`. */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Field mask is used to specify the fields to be overwritten in the Blockchain node resource by the update. The fields specified in the `update_mask` are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Request body */
  body?: BlockchainNode;
}

export const PatchProjectsLocationsBlockchainNodesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(BlockchainNode).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsBlockchainNodesRequest>;

export type PatchProjectsLocationsBlockchainNodesResponse = Operation;
export const PatchProjectsLocationsBlockchainNodesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsBlockchainNodesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single blockchain node. */
export const patchProjectsLocationsBlockchainNodes: API.OperationMethod<
  PatchProjectsLocationsBlockchainNodesRequest,
  PatchProjectsLocationsBlockchainNodesResponse,
  PatchProjectsLocationsBlockchainNodesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsBlockchainNodesRequest,
  output: PatchProjectsLocationsBlockchainNodesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsBlockchainNodesRequest {
  /** Required. Parent value for `ListNodesRequest`. */
  parent: string;
  /** A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Filtering results. */
  filter?: string;
  /** Hint for how to order the results. */
  orderBy?: string;
  /** Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
}

export const ListProjectsLocationsBlockchainNodesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/blockchainNodes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsBlockchainNodesRequest>;

export type ListProjectsLocationsBlockchainNodesResponse =
  ListBlockchainNodesResponse;
export const ListProjectsLocationsBlockchainNodesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListBlockchainNodesResponse;

export type ListProjectsLocationsBlockchainNodesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists blockchain nodes in a given project and location. */
export const listProjectsLocationsBlockchainNodes: API.PaginatedOperationMethod<
  ListProjectsLocationsBlockchainNodesRequest,
  ListProjectsLocationsBlockchainNodesResponse,
  ListProjectsLocationsBlockchainNodesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsBlockchainNodesRequest,
  output: ListProjectsLocationsBlockchainNodesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsBlockchainNodesRequest {
  /** Required. ID of the requesting object. */
  blockchainNodeId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Value for parent. */
  parent: string;
  /** Request body */
  body?: BlockchainNode;
}

export const CreateProjectsLocationsBlockchainNodesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    blockchainNodeId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("blockchainNodeId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(BlockchainNode).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/blockchainNodes",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsBlockchainNodesRequest>;

export type CreateProjectsLocationsBlockchainNodesResponse = Operation;
export const CreateProjectsLocationsBlockchainNodesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsBlockchainNodesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new blockchain node in a given project and location. */
export const createProjectsLocationsBlockchainNodes: API.OperationMethod<
  CreateProjectsLocationsBlockchainNodesRequest,
  CreateProjectsLocationsBlockchainNodesResponse,
  CreateProjectsLocationsBlockchainNodesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsBlockchainNodesRequest,
  output: CreateProjectsLocationsBlockchainNodesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsBlockchainNodesRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The fully qualified name of the blockchain node to delete. e.g. `projects/my-project/locations/us-central1/blockchainNodes/my-node`. */
  name: string;
}

export const DeleteProjectsLocationsBlockchainNodesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsBlockchainNodesRequest>;

export type DeleteProjectsLocationsBlockchainNodesResponse = Operation;
export const DeleteProjectsLocationsBlockchainNodesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsBlockchainNodesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single blockchain node. */
export const deleteProjectsLocationsBlockchainNodes: API.OperationMethod<
  DeleteProjectsLocationsBlockchainNodesRequest,
  DeleteProjectsLocationsBlockchainNodesResponse,
  DeleteProjectsLocationsBlockchainNodesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsBlockchainNodesRequest,
  output: DeleteProjectsLocationsBlockchainNodesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsBlockchainNodesRequest {
  /** Required. The fully qualified name of the blockchain node to fetch. e.g. `projects/my-project/locations/us-central1/blockchainNodes/my-node`. */
  name: string;
}

export const GetProjectsLocationsBlockchainNodesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsBlockchainNodesRequest>;

export type GetProjectsLocationsBlockchainNodesResponse = BlockchainNode;
export const GetProjectsLocationsBlockchainNodesResponse =
  /*@__PURE__*/ /*#__PURE__*/ BlockchainNode;

export type GetProjectsLocationsBlockchainNodesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single blockchain node. */
export const getProjectsLocationsBlockchainNodes: API.OperationMethod<
  GetProjectsLocationsBlockchainNodesRequest,
  GetProjectsLocationsBlockchainNodesResponse,
  GetProjectsLocationsBlockchainNodesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsBlockchainNodesRequest,
  output: GetProjectsLocationsBlockchainNodesResponse,
  errors: [NotFound, Forbidden],
}));
