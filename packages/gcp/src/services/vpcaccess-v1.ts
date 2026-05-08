// ==========================================================================
// Serverless VPC Access API (vpcaccess v1)
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
  name: "vpcaccess",
  version: "v1",
  rootUrl: "https://vpcaccess.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface Location {
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
}

export const Location: Schema.Schema<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    locationId: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    displayName: Schema.optional(Schema.String),
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

export interface Subnet {
  /** Optional. Subnet name (relative, not fully qualified). E.g. if the full subnet selfLink is https://compute.googleapis.com/compute/v1/projects/{project}/regions/{region}/subnetworks/{subnetName} the correct input for this field would be {subnetName} */
  name?: string;
  /** Optional. Project in which the subnet exists. If not set, this project is assumed to be the project for which the connector create request was issued. */
  projectId?: string;
}

export const Subnet: Schema.Schema<Subnet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    projectId: Schema.optional(Schema.String),
  }).annotate({ identifier: "Subnet" });

export interface Connector {
  /** Optional. The range of internal addresses that follows RFC 4632 notation. Example: `10.132.0.0/28`. */
  ipCidrRange?: string;
  /** Maximum value of instances in autoscaling group underlying the connector. */
  maxInstances?: number;
  /** Optional. Name of a VPC network. */
  network?: string;
  /** Output only. State of the VPC access connector. */
  state?:
    | "STATE_UNSPECIFIED"
    | "READY"
    | "CREATING"
    | "DELETING"
    | "ERROR"
    | "UPDATING"
    | (string & {});
  /** Output only. List of projects using the connector. */
  connectedProjects?: ReadonlyArray<string>;
  /** Optional. The subnet in which to house the VPC Access Connector. */
  subnet?: Subnet;
  /** Machine type of VM Instance underlying connector. Default is e2-micro */
  machineType?: string;
  /** The resource name in the format `projects/* /locations/* /connectors/*`. */
  name?: string;
  /** Maximum throughput of the connector in Mbps. Refers to the expected throughput when using an `e2-micro` machine type. Value must be a multiple of 100 from 300 through 1000. Must be higher than the value specified by --min-throughput. If both max-throughput and max-instances are provided, max-instances takes precedence over max-throughput. The use of `max-throughput` is discouraged in favor of `max-instances`. */
  maxThroughput?: number;
  /** Minimum value of instances in autoscaling group underlying the connector. */
  minInstances?: number;
  /** Minimum throughput of the connector in Mbps. Refers to the expected throughput when using an `e2-micro` machine type. Value must be a multiple of 100 from 200 through 900. Must be lower than the value specified by --max-throughput. If both min-throughput and min-instances are provided, min-instances takes precedence over min-throughput. The use of `min-throughput` is discouraged in favor of `min-instances`. */
  minThroughput?: number;
}

export const Connector: Schema.Schema<Connector> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ipCidrRange: Schema.optional(Schema.String),
    maxInstances: Schema.optional(Schema.Number),
    network: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    connectedProjects: Schema.optional(Schema.Array(Schema.String)),
    subnet: Schema.optional(Subnet),
    machineType: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    maxThroughput: Schema.optional(Schema.Number),
    minInstances: Schema.optional(Schema.Number),
    minThroughput: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Connector" });

export interface Operation {
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    done: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    error: Schema.optional(Status),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
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

export interface OperationMetadataV1Alpha1 {
  /** Output only. Method that initiated the operation e.g. google.cloud.vpcaccess.v1alpha1.Connectors.CreateConnector. */
  method?: string;
  /** Output only. Time when the operation was created. */
  insertTime?: string;
  /** Output only. Time when the operation completed. */
  endTime?: string;
  /** Output only. Name of the resource that this operation is acting on e.g. projects/my-project/locations/us-central1/connectors/v1. */
  target?: string;
}

export const OperationMetadataV1Alpha1: Schema.Schema<OperationMetadataV1Alpha1> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    method: Schema.optional(Schema.String),
    insertTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
  }).annotate({ identifier: "OperationMetadataV1Alpha1" });

export interface ListConnectorsResponse {
  /** List of Serverless VPC Access connectors. */
  connectors?: ReadonlyArray<Connector>;
  /** Continuation token. */
  nextPageToken?: string;
}

export const ListConnectorsResponse: Schema.Schema<ListConnectorsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    connectors: Schema.optional(Schema.Array(Connector)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListConnectorsResponse" });

export interface OperationMetadataV1Beta1 {
  /** Output only. Method that initiated the operation e.g. google.cloud.vpcaccess.v1beta1.Connectors.CreateConnector. */
  method?: string;
  /** Output only. Time when the operation completed. */
  endTime?: string;
  /** Output only. Name of the resource that this operation is acting on e.g. projects/my-project/locations/us-central1/connectors/v1. */
  target?: string;
  /** Output only. Time when the operation was created. */
  createTime?: string;
}

export const OperationMetadataV1Beta1: Schema.Schema<OperationMetadataV1Beta1> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    method: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "OperationMetadataV1Beta1" });

export interface OperationMetadata {
  /** Output only. Time when the operation was created. */
  createTime?: string;
  /** Output only. Method that initiated the operation e.g. google.cloud.vpcaccess.v1.Connectors.CreateConnector. */
  method?: string;
  /** Output only. Time when the operation completed. */
  endTime?: string;
  /** Output only. Name of the resource that this operation is acting on e.g. projects/my-project/locations/us-central1/connectors/v1. */
  target?: string;
}

export const OperationMetadata: Schema.Schema<OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    method: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
  }).annotate({ identifier: "OperationMetadata" });

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
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
  /** The resource that owns the locations collection, if applicable. */
  name: string;
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/locations" }),
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

export interface ListProjectsLocationsOperationsRequest {
  /** The standard list page size. */
  pageSize?: number;
  /** The standard list page token. */
  pageToken?: string;
  /** The standard list filter. */
  filter?: string;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The name of the operation's parent resource. */
  name: string;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
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

export interface PatchProjectsLocationsConnectorsRequest {
  /** The resource name in the format `projects/* /locations/* /connectors/*`. */
  name: string;
  /** The fields to update on the entry group. If absent or empty, all modifiable fields are updated. */
  updateMask?: string;
  /** Request body */
  body?: Connector;
}

export const PatchProjectsLocationsConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Connector).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsConnectorsRequest>;

export type PatchProjectsLocationsConnectorsResponse = Operation;
export const PatchProjectsLocationsConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a Serverless VPC Access connector, returns an operation. */
export const patchProjectsLocationsConnectors: API.OperationMethod<
  PatchProjectsLocationsConnectorsRequest,
  PatchProjectsLocationsConnectorsResponse,
  PatchProjectsLocationsConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsConnectorsRequest,
  output: PatchProjectsLocationsConnectorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsConnectorsRequest {
  /** Required. Name of a Serverless VPC Access connector to get. */
  name: string;
}

export const GetProjectsLocationsConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsConnectorsRequest>;

export type GetProjectsLocationsConnectorsResponse = Connector;
export const GetProjectsLocationsConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Connector;

export type GetProjectsLocationsConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a Serverless VPC Access connector. Returns NOT_FOUND if the resource does not exist. */
export const getProjectsLocationsConnectors: API.OperationMethod<
  GetProjectsLocationsConnectorsRequest,
  GetProjectsLocationsConnectorsResponse,
  GetProjectsLocationsConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsConnectorsRequest,
  output: GetProjectsLocationsConnectorsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsConnectorsRequest {
  /** Maximum number of functions to return per call. */
  pageSize?: number;
  /** Continuation token. */
  pageToken?: string;
  /** Required. The project and location from which the routes should be listed. */
  parent: string;
}

export const ListProjectsLocationsConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/connectors" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsConnectorsRequest>;

export type ListProjectsLocationsConnectorsResponse = ListConnectorsResponse;
export const ListProjectsLocationsConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListConnectorsResponse;

export type ListProjectsLocationsConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Serverless VPC Access connectors. */
export const listProjectsLocationsConnectors: API.PaginatedOperationMethod<
  ListProjectsLocationsConnectorsRequest,
  ListProjectsLocationsConnectorsResponse,
  ListProjectsLocationsConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsConnectorsRequest,
  output: ListProjectsLocationsConnectorsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsConnectorsRequest {
  /** Required. The project ID and location in which the configuration should be created, specified in the format `projects/* /locations/*`. */
  parent: string;
  /** Required. The ID to use for this connector. */
  connectorId?: string;
  /** Request body */
  body?: Connector;
}

export const CreateProjectsLocationsConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    connectorId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("connectorId"),
    ),
    body: Schema.optional(Connector).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/connectors", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsConnectorsRequest>;

export type CreateProjectsLocationsConnectorsResponse = Operation;
export const CreateProjectsLocationsConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a Serverless VPC Access connector, returns an operation. */
export const createProjectsLocationsConnectors: API.OperationMethod<
  CreateProjectsLocationsConnectorsRequest,
  CreateProjectsLocationsConnectorsResponse,
  CreateProjectsLocationsConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsConnectorsRequest,
  output: CreateProjectsLocationsConnectorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsConnectorsRequest {
  /** Required. Name of a Serverless VPC Access connector to delete. */
  name: string;
}

export const DeleteProjectsLocationsConnectorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsConnectorsRequest>;

export type DeleteProjectsLocationsConnectorsResponse = Operation;
export const DeleteProjectsLocationsConnectorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsConnectorsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a Serverless VPC Access connector. Returns NOT_FOUND if the resource does not exist. */
export const deleteProjectsLocationsConnectors: API.OperationMethod<
  DeleteProjectsLocationsConnectorsRequest,
  DeleteProjectsLocationsConnectorsResponse,
  DeleteProjectsLocationsConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsConnectorsRequest,
  output: DeleteProjectsLocationsConnectorsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
