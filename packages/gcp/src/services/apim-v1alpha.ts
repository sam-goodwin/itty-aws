// ==========================================================================
// API Management API (apim v1alpha)
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
  name: "apim",
  version: "v1alpha",
  rootUrl: "https://apim.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface ObservationJob {
  /** Output only. The observation job state */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "ENABLING"
    | "ENABLED"
    | "DISABLING"
    | "DISABLED"
    | "DELETING"
    | "ERROR"
    | (string & {});
  /** Output only. [Output only] Create time stamp */
  createTime?: string;
  /** Identifier. name of resource Format: projects/{project}/locations/{location}/observationJobs/{observation_job} */
  name?: string;
  /** Output only. [Output only] Update time stamp */
  updateTime?: string;
  /** Optional. These should be of the same kind of source. */
  sources?: ReadonlyArray<string>;
}

export const ObservationJob: Schema.Schema<ObservationJob> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    sources: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ObservationJob" });

export interface ListObservationJobsResponse {
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The ObservationJob from the specified project and location. */
  observationJobs?: ReadonlyArray<ObservationJob>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListObservationJobsResponse: Schema.Schema<ListObservationJobsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    observationJobs: Schema.optional(Schema.Array(ObservationJob)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListObservationJobsResponse" });

export interface DisableObservationJobRequest {}

export const DisableObservationJobRequest: Schema.Schema<DisableObservationJobRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "DisableObservationJobRequest",
  });

export interface TagAction {
  /** Required. Action to be applied */
  action?: "ACTION_UNSPECIFIED" | "ADD" | "REMOVE" | (string & {});
  /** Required. Tag to be added or removed */
  tag?: string;
}

export const TagAction: Schema.Schema<TagAction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    action: Schema.optional(Schema.String),
    tag: Schema.optional(Schema.String),
  }).annotate({ identifier: "TagAction" });

export interface EditTagsApiObservationsRequest {
  /** Required. Identifier of ApiObservation need to be edit tags Format example: "apigee.googleapis.com|us-west1|443" */
  apiObservationId?: string;
  /** Required. Tag actions to be applied */
  tagActions?: ReadonlyArray<TagAction>;
}

export const EditTagsApiObservationsRequest: Schema.Schema<EditTagsApiObservationsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiObservationId: Schema.optional(Schema.String),
    tagActions: Schema.optional(Schema.Array(TagAction)),
  }).annotate({ identifier: "EditTagsApiObservationsRequest" });

export interface ApiObservation {
  /** Style of ApiObservation */
  style?: "STYLE_UNSPECIFIED" | "REST" | "GRPC" | "GRAPHQL" | (string & {});
  /** Last event detected time stamp */
  lastEventDetectedTime?: string;
  /** Location of the Observation Source, for example "us-central1" or "europe-west1." */
  sourceLocations?: ReadonlyArray<string>;
  /** Create time stamp */
  createTime?: string;
  /** The hostname of requests processed for this Observation. */
  hostname?: string;
  /** Identifier. Name of resource */
  name?: string;
  /** Update time stamp */
  updateTime?: string;
  /** The IP address (IPv4 or IPv6) of the origin server that the request was sent to. This field can include port information. Examples: `"192.168.1.1"`, `"10.0.0.1:80"`, `"FE80::0202:B3FF:FE1E:8329"`. */
  serverIps?: ReadonlyArray<string>;
  /** User-defined tags to organize and sort */
  tags?: ReadonlyArray<string>;
  /** The number of observed API Operations. */
  apiOperationCount?: string;
}

export const ApiObservation: Schema.Schema<ApiObservation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    style: Schema.optional(Schema.String),
    lastEventDetectedTime: Schema.optional(Schema.String),
    sourceLocations: Schema.optional(Schema.Array(Schema.String)),
    createTime: Schema.optional(Schema.String),
    hostname: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    serverIps: Schema.optional(Schema.Array(Schema.String)),
    tags: Schema.optional(Schema.Array(Schema.String)),
    apiOperationCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "ApiObservation" });

export interface BatchEditTagsApiObservationsResponse {
  /** ApiObservations that were changed */
  apiObservations?: ReadonlyArray<ApiObservation>;
}

export const BatchEditTagsApiObservationsResponse: Schema.Schema<BatchEditTagsApiObservationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiObservations: Schema.optional(Schema.Array(ApiObservation)),
  }).annotate({ identifier: "BatchEditTagsApiObservationsResponse" });

export interface HttpOperationHeader {
  /** The number of occurrences of this Header across transactions. */
  count?: string;
  /** Header name. */
  name?: string;
  /** Data type of header */
  dataType?:
    | "DATA_TYPE_UNSPECIFIED"
    | "BOOL"
    | "INTEGER"
    | "FLOAT"
    | "STRING"
    | "UUID"
    | (string & {});
}

export const HttpOperationHeader: Schema.Schema<HttpOperationHeader> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    dataType: Schema.optional(Schema.String),
  }).annotate({ identifier: "HttpOperationHeader" });

export interface HttpOperationHttpRequest {
  /** Unordered map from header name to header metadata */
  headers?: Record<string, HttpOperationHeader>;
}

export const HttpOperationHttpRequest: Schema.Schema<HttpOperationHttpRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    headers: Schema.optional(Schema.Record(Schema.String, HttpOperationHeader)),
  }).annotate({ identifier: "HttpOperationHttpRequest" });

export interface HttpOperationQueryParam {
  /** Name of query param */
  name?: string;
  /** Data type of path param */
  dataType?:
    | "DATA_TYPE_UNSPECIFIED"
    | "BOOL"
    | "INTEGER"
    | "FLOAT"
    | "STRING"
    | "UUID"
    | (string & {});
  /** The number of occurrences of this query parameter across transactions. */
  count?: string;
}

export const HttpOperationQueryParam: Schema.Schema<HttpOperationQueryParam> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    dataType: Schema.optional(Schema.String),
    count: Schema.optional(Schema.String),
  }).annotate({ identifier: "HttpOperationQueryParam" });

export interface HttpOperationPathParam {
  /** Segment location in the path, 1-indexed */
  position?: number;
  /** Data type of path param */
  dataType?:
    | "DATA_TYPE_UNSPECIFIED"
    | "BOOL"
    | "INTEGER"
    | "FLOAT"
    | "STRING"
    | "UUID"
    | (string & {});
}

export const HttpOperationPathParam: Schema.Schema<HttpOperationPathParam> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    position: Schema.optional(Schema.Number),
    dataType: Schema.optional(Schema.String),
  }).annotate({ identifier: "HttpOperationPathParam" });

export interface HttpOperationHttpResponse {
  /** Unordered map from header name to header metadata */
  headers?: Record<string, HttpOperationHeader>;
  /** Map of status code to observed count */
  responseCodes?: Record<string, string>;
}

export const HttpOperationHttpResponse: Schema.Schema<HttpOperationHttpResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    headers: Schema.optional(Schema.Record(Schema.String, HttpOperationHeader)),
    responseCodes: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "HttpOperationHttpResponse" });

export interface HttpOperation {
  /** HTTP Method. */
  method?:
    | "HTTP_METHOD_UNSPECIFIED"
    | "GET"
    | "HEAD"
    | "POST"
    | "PUT"
    | "PATCH"
    | "DELETE"
    | "TRACE"
    | "OPTIONS"
    | "CONNECT"
    | (string & {});
  /** Request metadata. */
  request?: HttpOperationHttpRequest;
  /** Query params of HttpOperation */
  queryParams?: Record<string, HttpOperationQueryParam>;
  /** Path params of HttpOperation */
  pathParams?: ReadonlyArray<HttpOperationPathParam>;
  /** Response metadata. */
  response?: HttpOperationHttpResponse;
  /** Path of the HTTP request. */
  path?: string;
}

export const HttpOperation: Schema.Schema<HttpOperation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    method: Schema.optional(Schema.String),
    request: Schema.optional(HttpOperationHttpRequest),
    queryParams: Schema.optional(
      Schema.Record(Schema.String, HttpOperationQueryParam),
    ),
    pathParams: Schema.optional(Schema.Array(HttpOperationPathParam)),
    response: Schema.optional(HttpOperationHttpResponse),
    path: Schema.optional(Schema.String),
  }).annotate({ identifier: "HttpOperation" });

export interface ApiOperation {
  /** The number of occurrences of this API Operation. */
  count?: string;
  /** An HTTP Operation. */
  httpOperation?: HttpOperation;
  /** First seen time stamp */
  firstSeenTime?: string;
  /** Identifier. Name of resource */
  name?: string;
  /** Last seen time stamp */
  lastSeenTime?: string;
}

export const ApiOperation: Schema.Schema<ApiOperation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.String),
    httpOperation: Schema.optional(HttpOperation),
    firstSeenTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    lastSeenTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "ApiOperation" });

export interface BatchEditTagsApiObservationsRequest {
  /** Required. The request message specifying the resources to update. A maximum of 1000 apiObservations can be modified in a batch. */
  requests?: ReadonlyArray<EditTagsApiObservationsRequest>;
}

export const BatchEditTagsApiObservationsRequest: Schema.Schema<BatchEditTagsApiObservationsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requests: Schema.optional(Schema.Array(EditTagsApiObservationsRequest)),
  }).annotate({ identifier: "BatchEditTagsApiObservationsRequest" });

export interface GclbObservationSourcePscNetworkConfig {
  /** Required. The subnetwork in the source region that will be used to connect to the Cloud Load Balancers via PSC NEGs. Must belong to `network`. Format: projects/{project_id}/regions/{region}/subnetworks/{subnet} */
  subnetwork?: string;
  /** Required. The VPC network. Format: `projects/{project_id}/global/networks/{network}` */
  network?: string;
}

export const GclbObservationSourcePscNetworkConfig: Schema.Schema<GclbObservationSourcePscNetworkConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subnetwork: Schema.optional(Schema.String),
    network: Schema.optional(Schema.String),
  }).annotate({ identifier: "GclbObservationSourcePscNetworkConfig" });

export interface GclbObservationSource {
  /** Required. The VPC networks where traffic will be observed. All load balancers within this network will be observed. Currently, this is limited to only one network. */
  pscNetworkConfigs?: ReadonlyArray<GclbObservationSourcePscNetworkConfig>;
}

export const GclbObservationSource: Schema.Schema<GclbObservationSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pscNetworkConfigs: Schema.optional(
      Schema.Array(GclbObservationSourcePscNetworkConfig),
    ),
  }).annotate({ identifier: "GclbObservationSource" });

export interface ObservationSource {
  /** Output only. The observation source state */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "CREATED"
    | "DELETING"
    | "ERROR"
    | (string & {});
  /** Output only. [Output only] Create time stamp */
  createTime?: string;
  /** Identifier. name of resource For MVP, each region can only have 1 source. */
  name?: string;
  /** Output only. [Output only] Update time stamp */
  updateTime?: string;
  /** The GCLB observation source */
  gclbObservationSource?: GclbObservationSource;
}

export const ObservationSource: Schema.Schema<ObservationSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    gclbObservationSource: Schema.optional(GclbObservationSource),
  }).annotate({ identifier: "ObservationSource" });

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
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    done: Schema.optional(Schema.Boolean),
    error: Schema.optional(Status),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "Operation" });

export interface ListOperationsResponse {
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<Operation>;
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
  /** The standard List next-page token. */
  nextPageToken?: string;
}

export const ListOperationsResponse: Schema.Schema<ListOperationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operations: Schema.optional(Schema.Array(Operation)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListOperationsResponse" });

export interface ListApiObservationTagsResponse {
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** The tags from the specified project */
  apiObservationTags?: ReadonlyArray<string>;
}

export const ListApiObservationTagsResponse: Schema.Schema<ListApiObservationTagsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    apiObservationTags: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListApiObservationTagsResponse" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface ListApiOperationsResponse {
  /** The ApiOperations from the specified project and location and ObservationJob and ApiObservation. */
  apiOperations?: ReadonlyArray<ApiOperation>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListApiOperationsResponse: Schema.Schema<ListApiOperationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiOperations: Schema.optional(Schema.Array(ApiOperation)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListApiOperationsResponse" });

export interface EnableObservationJobRequest {}

export const EnableObservationJobRequest: Schema.Schema<EnableObservationJobRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "EnableObservationJobRequest",
  });

export interface Entitlement {
  /** Project number of associated billing project that has Apigee and Advanced API Security entitled. */
  billingProjectNumber?: string;
  /** Identifier. The entitlement resource name `projects/{project}/locations/{location}/entitlement` */
  name?: string;
  /** Output only. The time of the entitlement update. */
  updateTime?: string;
  /** Whether API Observation is entitled. */
  apiObservationEntitled?: boolean;
  /** Output only. The time of the entitlement creation. */
  createTime?: string;
}

export const Entitlement: Schema.Schema<Entitlement> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingProjectNumber: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    apiObservationEntitled: Schema.optional(Schema.Boolean),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Entitlement" });

export interface ListApiObservationsResponse {
  /** The ApiObservation from the specified project and location and ObservationJobs. */
  apiObservations?: ReadonlyArray<ApiObservation>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListApiObservationsResponse: Schema.Schema<ListApiObservationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiObservations: Schema.optional(Schema.Array(ApiObservation)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListApiObservationsResponse" });

export interface ListObservationSourcesResponse {
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** The ObservationSource from the specified project and location. */
  observationSources?: ReadonlyArray<ObservationSource>;
}

export const ListObservationSourcesResponse: Schema.Schema<ListObservationSourcesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
    observationSources: Schema.optional(Schema.Array(ObservationSource)),
  }).annotate({ identifier: "ListObservationSourcesResponse" });

export interface Location {
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
}

export const Location: Schema.Schema<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    locationId: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
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

export interface CancelOperationRequest {}

export const CancelOperationRequest: Schema.Schema<CancelOperationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelOperationRequest",
  });

export interface OperationMetadata {
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
}

export const OperationMetadata: Schema.Schema<OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endTime: Schema.optional(Schema.String),
    statusMessage: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
    verb: Schema.optional(Schema.String),
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

export interface GetProjectsLocationsRequest {
  /** Resource name for the location. */
  name: string;
}

export const GetProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
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

export interface ListApiObservationTagsProjectsLocationsRequest {
  /** Required. The parent, which owns this collection of tags. Format: projects/{project}/locations/{location} */
  parent: string;
  /** Optional. The maximum number of tags to return. The service may return fewer than this value. If unspecified, at most 10 tags will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. A page token, received from a previous `ListApiObservationTags` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListApiObservationTags` must match the call that provided the page token. */
  pageToken?: string;
}

export const ListApiObservationTagsProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+parent}:listApiObservationTags" }),
    svc,
  ) as unknown as Schema.Schema<ListApiObservationTagsProjectsLocationsRequest>;

export type ListApiObservationTagsProjectsLocationsResponse =
  ListApiObservationTagsResponse;
export const ListApiObservationTagsProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListApiObservationTagsResponse;

export type ListApiObservationTagsProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** ListApiObservationTags lists all extant tags on any observation in the given project. */
export const listApiObservationTagsProjectsLocations: API.PaginatedOperationMethod<
  ListApiObservationTagsProjectsLocationsRequest,
  ListApiObservationTagsProjectsLocationsResponse,
  ListApiObservationTagsProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListApiObservationTagsProjectsLocationsRequest,
  output: ListApiObservationTagsProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetEntitlementProjectsLocationsRequest {
  /** Required. The entitlement resource name Format: projects/{project}/locations/{location}/entitlement */
  name: string;
}

export const GetEntitlementProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetEntitlementProjectsLocationsRequest>;

export type GetEntitlementProjectsLocationsResponse = Entitlement;
export const GetEntitlementProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Entitlement;

export type GetEntitlementProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** GetEntitlement returns the entitlement for the provided project. */
export const getEntitlementProjectsLocations: API.OperationMethod<
  GetEntitlementProjectsLocationsRequest,
  GetEntitlementProjectsLocationsResponse,
  GetEntitlementProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetEntitlementProjectsLocationsRequest,
  output: GetEntitlementProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsRequest {
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}/locations" }),
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

export interface DeleteProjectsLocationsObservationJobsRequest {
  /** Required. Name of the resource Format: projects/{project}/locations/{location}/observationJobs/{observation_job} */
  name: string;
}

export const DeleteProjectsLocationsObservationJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsObservationJobsRequest>;

export type DeleteProjectsLocationsObservationJobsResponse = Operation;
export const DeleteProjectsLocationsObservationJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsObservationJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** DeleteObservationJob deletes an ObservationJob. This method will fail if the observation job is currently being used by any ObservationSource, even if not enabled. */
export const deleteProjectsLocationsObservationJobs: API.OperationMethod<
  DeleteProjectsLocationsObservationJobsRequest,
  DeleteProjectsLocationsObservationJobsResponse,
  DeleteProjectsLocationsObservationJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsObservationJobsRequest,
  output: DeleteProjectsLocationsObservationJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsObservationJobsRequest {
  /** Optional. A page token, received from a previous `ListObservationJobs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListObservationJobs` must match the call that provided the page token. */
  pageToken?: string;
  /** Required. The parent, which owns this collection of ObservationJobs. Format: projects/{project}/locations/{location} */
  parent: string;
  /** Optional. The maximum number of ObservationJobs to return. The service may return fewer than this value. If unspecified, at most 10 ObservationJobs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
}

export const ListProjectsLocationsObservationJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+parent}/observationJobs" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsObservationJobsRequest>;

export type ListProjectsLocationsObservationJobsResponse =
  ListObservationJobsResponse;
export const ListProjectsLocationsObservationJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListObservationJobsResponse;

export type ListProjectsLocationsObservationJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** ListObservationJobs gets all ObservationJobs for a given project and location. */
export const listProjectsLocationsObservationJobs: API.PaginatedOperationMethod<
  ListProjectsLocationsObservationJobsRequest,
  ListProjectsLocationsObservationJobsResponse,
  ListProjectsLocationsObservationJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsObservationJobsRequest,
  output: ListProjectsLocationsObservationJobsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsObservationJobsRequest {
  /** Required. The parent resource where this ObservationJob will be created. Format: projects/{project}/locations/{location} */
  parent: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The ID to use for the Observation Job. This value should be 4-63 characters, and valid characters are /a-z-/. */
  observationJobId?: string;
  /** Request body */
  body?: ObservationJob;
}

export const CreateProjectsLocationsObservationJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    observationJobId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("observationJobId"),
    ),
    body: Schema.optional(ObservationJob).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+parent}/observationJobs",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsObservationJobsRequest>;

export type CreateProjectsLocationsObservationJobsResponse = Operation;
export const CreateProjectsLocationsObservationJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsObservationJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** CreateObservationJob creates a new ObservationJob but does not have any effecton its own. It is a configuration that can be used in an Observation Job to collect data about existing APIs. */
export const createProjectsLocationsObservationJobs: API.OperationMethod<
  CreateProjectsLocationsObservationJobsRequest,
  CreateProjectsLocationsObservationJobsResponse,
  CreateProjectsLocationsObservationJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsObservationJobsRequest,
  output: CreateProjectsLocationsObservationJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsObservationJobsRequest {
  /** Required. The name of the ObservationJob to retrieve. Format: projects/{project}/locations/{location}/observationJobs/{job} */
  name: string;
}

export const GetProjectsLocationsObservationJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsObservationJobsRequest>;

export type GetProjectsLocationsObservationJobsResponse = ObservationJob;
export const GetProjectsLocationsObservationJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ObservationJob;

export type GetProjectsLocationsObservationJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** GetObservationJob retrieves a single ObservationJob by name. */
export const getProjectsLocationsObservationJobs: API.OperationMethod<
  GetProjectsLocationsObservationJobsRequest,
  GetProjectsLocationsObservationJobsResponse,
  GetProjectsLocationsObservationJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsObservationJobsRequest,
  output: GetProjectsLocationsObservationJobsResponse,
  errors: [NotFound, Forbidden],
}));

export interface EnableProjectsLocationsObservationJobsRequest {
  /** Required. The name of the ObservationJob to enable. Format: projects/{project}/locations/{location}/observationJobs/{job} */
  name: string;
  /** Request body */
  body?: EnableObservationJobRequest;
}

export const EnableProjectsLocationsObservationJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(EnableObservationJobRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1alpha/{+name}:enable", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<EnableProjectsLocationsObservationJobsRequest>;

export type EnableProjectsLocationsObservationJobsResponse = Operation;
export const EnableProjectsLocationsObservationJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type EnableProjectsLocationsObservationJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Enables the given ObservationJob. */
export const enableProjectsLocationsObservationJobs: API.OperationMethod<
  EnableProjectsLocationsObservationJobsRequest,
  EnableProjectsLocationsObservationJobsResponse,
  EnableProjectsLocationsObservationJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: EnableProjectsLocationsObservationJobsRequest,
  output: EnableProjectsLocationsObservationJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DisableProjectsLocationsObservationJobsRequest {
  /** Required. The name of the ObservationJob to disable. Format: projects/{project}/locations/{location}/observationJobs/{job} */
  name: string;
  /** Request body */
  body?: DisableObservationJobRequest;
}

export const DisableProjectsLocationsObservationJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(DisableObservationJobRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1alpha/{+name}:disable", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<DisableProjectsLocationsObservationJobsRequest>;

export type DisableProjectsLocationsObservationJobsResponse = Operation;
export const DisableProjectsLocationsObservationJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DisableProjectsLocationsObservationJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Disables the given ObservationJob. */
export const disableProjectsLocationsObservationJobs: API.OperationMethod<
  DisableProjectsLocationsObservationJobsRequest,
  DisableProjectsLocationsObservationJobsResponse,
  DisableProjectsLocationsObservationJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DisableProjectsLocationsObservationJobsRequest,
  output: DisableProjectsLocationsObservationJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsObservationJobsApiObservationsRequest {
  /** Optional. A page token, received from a previous `ListApiObservations` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListApiObservations` must match the call that provided the page token. */
  pageToken?: string;
  /** Required. The parent, which owns this collection of ApiObservations. Format: projects/{project}/locations/{location}/observationJobs/{observation_job} */
  parent: string;
  /** Optional. The maximum number of ApiObservations to return. The service may return fewer than this value. If unspecified, at most 10 ApiObservations will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
}

export const ListProjectsLocationsObservationJobsApiObservationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+parent}/apiObservations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsObservationJobsApiObservationsRequest>;

export type ListProjectsLocationsObservationJobsApiObservationsResponse =
  ListApiObservationsResponse;
export const ListProjectsLocationsObservationJobsApiObservationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListApiObservationsResponse;

export type ListProjectsLocationsObservationJobsApiObservationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** ListApiObservations gets all ApiObservations for a given project and location and ObservationJob. */
export const listProjectsLocationsObservationJobsApiObservations: API.PaginatedOperationMethod<
  ListProjectsLocationsObservationJobsApiObservationsRequest,
  ListProjectsLocationsObservationJobsApiObservationsResponse,
  ListProjectsLocationsObservationJobsApiObservationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsObservationJobsApiObservationsRequest,
  output: ListProjectsLocationsObservationJobsApiObservationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface BatchEditTagsProjectsLocationsObservationJobsApiObservationsRequest {
  /** Required. The parent resource shared by all ApiObservations being edited. Format: projects/{project}/locations/{location}/observationJobs/{observation_job} */
  parent: string;
  /** Request body */
  body?: BatchEditTagsApiObservationsRequest;
}

export const BatchEditTagsProjectsLocationsObservationJobsApiObservationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(BatchEditTagsApiObservationsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+parent}/apiObservations:batchEditTags",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchEditTagsProjectsLocationsObservationJobsApiObservationsRequest>;

export type BatchEditTagsProjectsLocationsObservationJobsApiObservationsResponse =
  BatchEditTagsApiObservationsResponse;
export const BatchEditTagsProjectsLocationsObservationJobsApiObservationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ BatchEditTagsApiObservationsResponse;

export type BatchEditTagsProjectsLocationsObservationJobsApiObservationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** BatchEditTagsApiObservations adds or removes Tags for ApiObservations. */
export const batchEditTagsProjectsLocationsObservationJobsApiObservations: API.OperationMethod<
  BatchEditTagsProjectsLocationsObservationJobsApiObservationsRequest,
  BatchEditTagsProjectsLocationsObservationJobsApiObservationsResponse,
  BatchEditTagsProjectsLocationsObservationJobsApiObservationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchEditTagsProjectsLocationsObservationJobsApiObservationsRequest,
  output: BatchEditTagsProjectsLocationsObservationJobsApiObservationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsObservationJobsApiObservationsRequest {
  /** Required. The name of the ApiObservation to retrieve. Format: projects/{project}/locations/{location}/observationJobs/{observation_job}/apiObservations/{api_observation} */
  name: string;
}

export const GetProjectsLocationsObservationJobsApiObservationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsObservationJobsApiObservationsRequest>;

export type GetProjectsLocationsObservationJobsApiObservationsResponse =
  ApiObservation;
export const GetProjectsLocationsObservationJobsApiObservationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ApiObservation;

export type GetProjectsLocationsObservationJobsApiObservationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** GetApiObservation retrieves a single ApiObservation by name. */
export const getProjectsLocationsObservationJobsApiObservations: API.OperationMethod<
  GetProjectsLocationsObservationJobsApiObservationsRequest,
  GetProjectsLocationsObservationJobsApiObservationsResponse,
  GetProjectsLocationsObservationJobsApiObservationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsObservationJobsApiObservationsRequest,
  output: GetProjectsLocationsObservationJobsApiObservationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsObservationJobsApiObservationsApiOperationsRequest {
  /** Required. The name of the ApiOperation to retrieve. Format: projects/{project}/locations/{location}/observationJobs/{observation_job}/apiObservations/{api_observation}/apiOperation/{api_operation} */
  name: string;
}

export const GetProjectsLocationsObservationJobsApiObservationsApiOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsObservationJobsApiObservationsApiOperationsRequest>;

export type GetProjectsLocationsObservationJobsApiObservationsApiOperationsResponse =
  ApiOperation;
export const GetProjectsLocationsObservationJobsApiObservationsApiOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ApiOperation;

export type GetProjectsLocationsObservationJobsApiObservationsApiOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** GetApiOperation retrieves a single ApiOperation by name. */
export const getProjectsLocationsObservationJobsApiObservationsApiOperations: API.OperationMethod<
  GetProjectsLocationsObservationJobsApiObservationsApiOperationsRequest,
  GetProjectsLocationsObservationJobsApiObservationsApiOperationsResponse,
  GetProjectsLocationsObservationJobsApiObservationsApiOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsObservationJobsApiObservationsApiOperationsRequest,
  output:
    GetProjectsLocationsObservationJobsApiObservationsApiOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsObservationJobsApiObservationsApiOperationsRequest {
  /** Optional. A page token, received from a previous `ListApiApiOperations` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListApiApiOperations` must match the call that provided the page token. */
  pageToken?: string;
  /** Required. The parent, which owns this collection of ApiOperations. Format: projects/{project}/locations/{location}/observationJobs/{observation_job}/apiObservations/{api_observation} */
  parent: string;
  /** Optional. The maximum number of ApiOperations to return. The service may return fewer than this value. If unspecified, at most 10 ApiOperations will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
}

export const ListProjectsLocationsObservationJobsApiObservationsApiOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+parent}/apiOperations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsObservationJobsApiObservationsApiOperationsRequest>;

export type ListProjectsLocationsObservationJobsApiObservationsApiOperationsResponse =
  ListApiOperationsResponse;
export const ListProjectsLocationsObservationJobsApiObservationsApiOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListApiOperationsResponse;

export type ListProjectsLocationsObservationJobsApiObservationsApiOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** ListApiOperations gets all ApiOperations for a given project and location and ObservationJob and ApiObservation. */
export const listProjectsLocationsObservationJobsApiObservationsApiOperations: API.PaginatedOperationMethod<
  ListProjectsLocationsObservationJobsApiObservationsApiOperationsRequest,
  ListProjectsLocationsObservationJobsApiObservationsApiOperationsResponse,
  ListProjectsLocationsObservationJobsApiObservationsApiOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input:
    ListProjectsLocationsObservationJobsApiObservationsApiOperationsRequest,
  output:
    ListProjectsLocationsObservationJobsApiObservationsApiOperationsResponse,
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
    T.Http({ method: "POST", path: "v1alpha/{+name}:cancel", hasBody: true }),
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
  /** The standard list page token. */
  pageToken?: string;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list page size. */
  pageSize?: number;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}/operations" }),
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
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
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
    T.Http({ method: "DELETE", path: "v1alpha/{+name}" }),
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

export interface ListProjectsLocationsObservationSourcesRequest {
  /** Required. The parent, which owns this collection of ObservationSources. Format: projects/{project}/locations/{location} */
  parent: string;
  /** Optional. The maximum number of ObservationSources to return. The service may return fewer than this value. If unspecified, at most 10 ObservationSources will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. A page token, received from a previous `ListObservationSources` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListObservationSources` must match the call that provided the page token. */
  pageToken?: string;
}

export const ListProjectsLocationsObservationSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+parent}/observationSources" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsObservationSourcesRequest>;

export type ListProjectsLocationsObservationSourcesResponse =
  ListObservationSourcesResponse;
export const ListProjectsLocationsObservationSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListObservationSourcesResponse;

export type ListProjectsLocationsObservationSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** ListObservationSources gets all ObservationSources for a given project and location. */
export const listProjectsLocationsObservationSources: API.PaginatedOperationMethod<
  ListProjectsLocationsObservationSourcesRequest,
  ListProjectsLocationsObservationSourcesResponse,
  ListProjectsLocationsObservationSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsObservationSourcesRequest,
  output: ListProjectsLocationsObservationSourcesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsObservationSourcesRequest {
  /** Required. The name of the ObservationSource to retrieve. Format: projects/{project}/locations/{location}/observationSources/{source} */
  name: string;
}

export const GetProjectsLocationsObservationSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsObservationSourcesRequest>;

export type GetProjectsLocationsObservationSourcesResponse = ObservationSource;
export const GetProjectsLocationsObservationSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ObservationSource;

export type GetProjectsLocationsObservationSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** GetObservationSource retrieves a single ObservationSource by name. */
export const getProjectsLocationsObservationSources: API.OperationMethod<
  GetProjectsLocationsObservationSourcesRequest,
  GetProjectsLocationsObservationSourcesResponse,
  GetProjectsLocationsObservationSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsObservationSourcesRequest,
  output: GetProjectsLocationsObservationSourcesResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsObservationSourcesRequest {
  /** Required. Name of the resource Format: projects/{project}/locations/{location}/observationSources/{source} */
  name: string;
}

export const DeleteProjectsLocationsObservationSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsObservationSourcesRequest>;

export type DeleteProjectsLocationsObservationSourcesResponse = Operation;
export const DeleteProjectsLocationsObservationSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsObservationSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** DeleteObservationSource deletes an observation source. This method will fail if the observation source is currently being used by any ObservationJob, even if not enabled. */
export const deleteProjectsLocationsObservationSources: API.OperationMethod<
  DeleteProjectsLocationsObservationSourcesRequest,
  DeleteProjectsLocationsObservationSourcesResponse,
  DeleteProjectsLocationsObservationSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsObservationSourcesRequest,
  output: DeleteProjectsLocationsObservationSourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsObservationSourcesRequest {
  /** Required. Value for parent. */
  parent: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The ID to use for the Observation Source. This value should be 4-63 characters, and valid characters are /a-z-/. */
  observationSourceId?: string;
  /** Request body */
  body?: ObservationSource;
}

export const CreateProjectsLocationsObservationSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    observationSourceId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("observationSourceId"),
    ),
    body: Schema.optional(ObservationSource).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha/{+parent}/observationSources",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsObservationSourcesRequest>;

export type CreateProjectsLocationsObservationSourcesResponse = Operation;
export const CreateProjectsLocationsObservationSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsObservationSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** CreateObservationSource creates a new ObservationSource but does not affect any deployed infrastructure. It is a configuration that can be used in an Observation Job to collect data about APIs running in user's dataplane. */
export const createProjectsLocationsObservationSources: API.OperationMethod<
  CreateProjectsLocationsObservationSourcesRequest,
  CreateProjectsLocationsObservationSourcesResponse,
  CreateProjectsLocationsObservationSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsObservationSourcesRequest,
  output: CreateProjectsLocationsObservationSourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
