// ==========================================================================
// Observability API (observability v1)
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
  name: "observability",
  version: "v1",
  rootUrl: "https://observability.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface Dataset {
  /** Optional. User friendly display name. */
  displayName?: string;
  /** Output only. Create timestamp. */
  createTime?: string;
  /** Output only. Timestamp when the dataset in soft-deleted state is purged. */
  purgeTime?: string;
  /** Identifier. Name of the dataset. The format is: projects/[PROJECT_ID]/locations/[LOCATION]/buckets/[BUCKET_ID]/datasets/[DATASET_ID] */
  name?: string;
  /** Optional. Description of the dataset. */
  description?: string;
  /** Output only. Delete timestamp. */
  deleteTime?: string;
}

export const Dataset: Schema.Schema<Dataset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    purgeTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    deleteTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Dataset" });

export interface ListDatasetsResponse {
  /** The list of datasets. */
  datasets?: ReadonlyArray<Dataset>;
  /** A token that can be sent as `page_token` to retrieve the next page. When this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListDatasetsResponse: Schema.Schema<ListDatasetsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    datasets: Schema.optional(Schema.Array(Dataset)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListDatasetsResponse" });

export interface TraceScope {
  /** Required. Names of the projects that are included in this trace scope. * `projects/[PROJECT_ID]` A trace scope can include a maximum of 20 projects. */
  resourceNames?: ReadonlyArray<string>;
  /** Output only. The creation timestamp of the trace scope. */
  createTime?: string;
  /** Output only. The last update timestamp of the trace scope. */
  updateTime?: string;
  /** Identifier. The resource name of the trace scope. For example: projects/my-project/locations/global/traceScopes/my-trace-scope */
  name?: string;
  /** Optional. Describes this trace scope. The maximum length of the description is 8000 characters. */
  description?: string;
}

export const TraceScope: Schema.Schema<TraceScope> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceNames: Schema.optional(Schema.Array(Schema.String)),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "TraceScope" });

export interface Scope {
  /** Identifier. Name of the resource. The format is: projects/{project}/locations/{location}/scopes/{scope} The `{location}` field must be set to `global`. The `{scope}` field must be set to `_Default`. */
  name?: string;
  /** Required. The full resource name of the `LogScope`. For example: //logging.googleapis.com/projects/myproject/locations/global/logScopes/my-log-scope */
  logScope?: string;
  /** Output only. Update timestamp. Note: The Update timestamp for the default scope is initially unset. */
  updateTime?: string;
  /** Required. The resource name of the `TraceScope`. For example: projects/myproject/locations/global/traceScopes/my-trace-scope */
  traceScope?: string;
}

export const Scope: Schema.Schema<Scope> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    logScope: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    traceScope: Schema.optional(Schema.String),
  }).annotate({ identifier: "Scope" });

export interface CmekSettings {
  /** Optional. The resource name for the configured Cloud KMS key. The format is: projects/[PROJECT_ID]/locations/[LOCATION]/keyRings/[KEYRING]/cryptoKeys/[KEY] For example: projects/my-project/locations/us-central1/keyRings/my-ring/cryptoKeys/my-key */
  kmsKey?: string;
  /** Output only. The CryptoKeyVersion resource name for the configured Cloud KMS key. The format is: projects/[PROJECT_ID]/locations/[LOCATION]/keyRings/[KEYRING]/cryptoKeys/[KEY]/cryptoKeyVersions/[VERSION] For example: projects/my-project/locations/us-central1/keyRings/my-ring/cryptoKeys/my-key/cryptoKeyVersions/1 This read-only field is used to convey the specific configured CryptoKeyVersion of the `kms_key` that has been configured. It is populated when the CMEK settings are bound to a single key version. */
  kmsKeyVersion?: string;
  /** Output only. The service account used to access the key. */
  serviceAccountId?: string;
}

export const CmekSettings: Schema.Schema<CmekSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kmsKey: Schema.optional(Schema.String),
    kmsKeyVersion: Schema.optional(Schema.String),
    serviceAccountId: Schema.optional(Schema.String),
  }).annotate({ identifier: "CmekSettings" });

export interface Bucket {
  /** Optional. User friendly display name. */
  displayName?: string;
  /** Output only. Create timestamp. */
  createTime?: string;
  /** Output only. Update timestamp. */
  updateTime?: string;
  /** Output only. Timestamp when the bucket in soft-deleted state is purged. */
  purgeTime?: string;
  /** Optional. Settings for configuring CMEK on a bucket. */
  cmekSettings?: CmekSettings;
  /** Identifier. Name of the bucket. The format is: projects/[PROJECT_ID]/locations/[LOCATION]/buckets/[BUCKET_ID] */
  name?: string;
  /** Optional. Description of the bucket. */
  description?: string;
  /** Output only. Delete timestamp. */
  deleteTime?: string;
}

export const Bucket: Schema.Schema<Bucket> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    purgeTime: Schema.optional(Schema.String),
    cmekSettings: Schema.optional(CmekSettings),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    deleteTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Bucket" });

export interface ListBucketsResponse {
  /** Optional. The list of buckets. */
  buckets?: ReadonlyArray<Bucket>;
  /** Optional. A token that can be sent as `page_token` to retrieve the next page. When this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListBucketsResponse: Schema.Schema<ListBucketsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    buckets: Schema.optional(Schema.Array(Bucket)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListBucketsResponse" });

export interface OperationMetadata {
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
}

export const OperationMetadata: Schema.Schema<OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    target: Schema.optional(Schema.String),
    statusMessage: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
    apiVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "OperationMetadata" });

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

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface Link {
  /** Optional. A user friendly display name. */
  displayName?: string;
  /** Output only. Create timestamp. */
  createTime?: string;
  /** Identifier. Name of the link. The format is: projects/[PROJECT_ID]/locations/[LOCATION]/buckets/[BUCKET_ID]/datasets/[DATASET_ID]/links/[LINK_ID] */
  name?: string;
  /** Optional. Description of the link. */
  description?: string;
}

export const Link: Schema.Schema<Link> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "Link" });

export interface Operation {
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    error: Schema.optional(Status),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    done: Schema.optional(Schema.Boolean),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "Operation" });

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

export interface Location {
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
}

export const Location: Schema.Schema<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locationId: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "Location" });

export interface View {
  /** Output only. Create timestamp. */
  createTime?: string;
  /** Optional. User friendly display name. */
  displayName?: string;
  /** Output only. Update timestamp. */
  updateTime?: string;
  /** Identifier. Name of the view. The format is: projects/[PROJECT_ID]/locations/[LOCATION]/buckets/[BUCKET_ID]/datasets/[DATASET_ID]/views/[VIEW_ID] */
  name?: string;
  /** Optional. Description of the view. */
  description?: string;
}

export const View: Schema.Schema<View> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "View" });

export interface ListViewsResponse {
  /** The list of views. */
  views?: ReadonlyArray<View>;
  /** Optional. A token that can be sent as `page_token` to retrieve the next page. When this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListViewsResponse: Schema.Schema<ListViewsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    views: Schema.optional(Schema.Array(View)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListViewsResponse" });

export interface ListTraceScopesResponse {
  /** Optional. A list of trace scopes. */
  traceScopes?: ReadonlyArray<TraceScope>;
  /** Optional. If there might be more results than appear in this response, then `next_page_token` is included. To get the next set of results, call the same method again using the value of `next_page_token` as `page_token`. */
  nextPageToken?: string;
}

export const ListTraceScopesResponse: Schema.Schema<ListTraceScopesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    traceScopes: Schema.optional(Schema.Array(TraceScope)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListTraceScopesResponse" });

export interface Settings {
  /** Optional. The location which should be used when any regional resources are provisioned by Google Cloud. */
  defaultStorageLocation?: string;
  /** Output only. The service account for the given resource container, such as project or folder. This will be used by Cloud Observability to perform actions in the container's project like access KMS keys or create Links. Always the same service account per resource container regardless of region. */
  serviceAccountId?: string;
  /** Identifier. The resource name of the settings. */
  name?: string;
  /** Optional. The resource name for the configured Cloud KMS key. KMS key name format: "projects/[PROJECT_ID]/locations/[LOCATION]/keyRings/[KEYRING]/cryptoKeys/[KEY]" For example: `"projects/my-project/locations/us-central1/keyRings/my-ring/cryptoKeys/my-key"` */
  kmsKeyName?: string;
}

export const Settings: Schema.Schema<Settings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    defaultStorageLocation: Schema.optional(Schema.String),
    serviceAccountId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    kmsKeyName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Settings" });

export interface ListLinksResponse {
  /** The list of links. */
  links?: ReadonlyArray<Link>;
  /** Optional. A token that can be sent as `page_token` to retrieve the next page. When this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListLinksResponse: Schema.Schema<ListLinksResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    links: Schema.optional(Schema.Array(Link)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListLinksResponse" });

export interface CancelOperationRequest {}

export const CancelOperationRequest: Schema.Schema<CancelOperationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelOperationRequest",
  });

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
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
  /** Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
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

export interface GetSettingsProjectsLocationsRequest {
  /** Required. Name of the settings to retrieve. Name format: "projects/[PROJECT_ID]/locations/[LOCATION]/settings" "folders/[FOLDER_ID]/locations/[LOCATION]/settings" "organizations/[ORGANIZATION_ID]/locations/[LOCATION]/settings" */
  name: string;
}

export const GetSettingsProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetSettingsProjectsLocationsRequest>;

export type GetSettingsProjectsLocationsResponse = Settings;
export const GetSettingsProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Settings;

export type GetSettingsProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get Settings */
export const getSettingsProjectsLocations: API.OperationMethod<
  GetSettingsProjectsLocationsRequest,
  GetSettingsProjectsLocationsResponse,
  GetSettingsProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSettingsProjectsLocationsRequest,
  output: GetSettingsProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateSettingsProjectsLocationsRequest {
  /** Identifier. The resource name of the settings. */
  name: string;
  /** Optional. The field mask specifying which fields of the settings are to be updated. */
  updateMask?: string;
  /** Request body */
  body?: Settings;
}

export const UpdateSettingsProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Settings).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateSettingsProjectsLocationsRequest>;

export type UpdateSettingsProjectsLocationsResponse = Operation;
export const UpdateSettingsProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type UpdateSettingsProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update Settings */
export const updateSettingsProjectsLocations: API.OperationMethod<
  UpdateSettingsProjectsLocationsRequest,
  UpdateSettingsProjectsLocationsResponse,
  UpdateSettingsProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateSettingsProjectsLocationsRequest,
  output: UpdateSettingsProjectsLocationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsScopesRequest {
  /** Required. Name of the resource. The format is: projects/{project}/locations/{location}/scopes/{scope} The `{location}` field must be set to `global`. The `{scope}` field must be set to `_Default`. */
  name: string;
}

export const GetProjectsLocationsScopesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsScopesRequest>;

export type GetProjectsLocationsScopesResponse = Scope;
export const GetProjectsLocationsScopesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Scope;

export type GetProjectsLocationsScopesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single Scope. */
export const getProjectsLocationsScopes: API.OperationMethod<
  GetProjectsLocationsScopesRequest,
  GetProjectsLocationsScopesResponse,
  GetProjectsLocationsScopesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsScopesRequest,
  output: GetProjectsLocationsScopesResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsScopesRequest {
  /** Identifier. Name of the resource. The format is: projects/{project}/locations/{location}/scopes/{scope} The `{location}` field must be set to `global`. The `{scope}` field must be set to `_Default`. */
  name: string;
  /** Optional. Field mask is used to specify the fields to be overwritten in the Scope resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field is overwritten when it is in the mask. If the user does not provide a mask, then all fields present in the request are overwritten. */
  updateMask?: string;
  /** Request body */
  body?: Scope;
}

export const PatchProjectsLocationsScopesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Scope).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsScopesRequest>;

export type PatchProjectsLocationsScopesResponse = Scope;
export const PatchProjectsLocationsScopesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Scope;

export type PatchProjectsLocationsScopesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single Scope. */
export const patchProjectsLocationsScopes: API.OperationMethod<
  PatchProjectsLocationsScopesRequest,
  PatchProjectsLocationsScopesResponse,
  PatchProjectsLocationsScopesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsScopesRequest,
  output: PatchProjectsLocationsScopesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsBucketsRequest {
  /** Required. Name of the bucket to retrieve. The format is: projects/[PROJECT_ID]/locations/[LOCATION]/buckets/[BUCKET_ID] */
  name: string;
}

export const GetProjectsLocationsBucketsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsBucketsRequest>;

export type GetProjectsLocationsBucketsResponse = Bucket;
export const GetProjectsLocationsBucketsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Bucket;

export type GetProjectsLocationsBucketsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get bucket resource. */
export const getProjectsLocationsBuckets: API.OperationMethod<
  GetProjectsLocationsBucketsRequest,
  GetProjectsLocationsBucketsResponse,
  GetProjectsLocationsBucketsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsBucketsRequest,
  output: GetProjectsLocationsBucketsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsBucketsRequest {
  /** Optional. The maximum number of buckets to return. If unspecified, then at most 100 buckets are returned. The maximum value is 1000; values above 1000 are coerced to 1000. */
  pageSize?: number;
  /** Optional. If true, then the response will include deleted buckets. */
  showDeleted?: boolean;
  /** Required. The parent, which owns this collection of buckets. The format is: projects/[PROJECT_ID]/locations/[LOCATION] */
  parent: string;
  /** Optional. A page token, received from a previous `ListBuckets` call. Provide this to retrieve the subsequent page. */
  pageToken?: string;
}

export const ListProjectsLocationsBucketsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    showDeleted: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showDeleted"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/buckets" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsBucketsRequest>;

export type ListProjectsLocationsBucketsResponse = ListBucketsResponse;
export const ListProjectsLocationsBucketsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListBucketsResponse;

export type ListProjectsLocationsBucketsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List buckets of a project in a particular location. */
export const listProjectsLocationsBuckets: API.PaginatedOperationMethod<
  ListProjectsLocationsBucketsRequest,
  ListProjectsLocationsBucketsResponse,
  ListProjectsLocationsBucketsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsBucketsRequest,
  output: ListProjectsLocationsBucketsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsBucketsDatasetsRequest {
  /** Required. Name of the dataset to retrieve. The format is: projects/[PROJECT_ID]/locations/[LOCATION]/buckets/[BUCKET_ID]/datasets/[DATASET_ID] */
  name: string;
}

export const GetProjectsLocationsBucketsDatasetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsBucketsDatasetsRequest>;

export type GetProjectsLocationsBucketsDatasetsResponse = Dataset;
export const GetProjectsLocationsBucketsDatasetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Dataset;

export type GetProjectsLocationsBucketsDatasetsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get a dataset. */
export const getProjectsLocationsBucketsDatasets: API.OperationMethod<
  GetProjectsLocationsBucketsDatasetsRequest,
  GetProjectsLocationsBucketsDatasetsResponse,
  GetProjectsLocationsBucketsDatasetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsBucketsDatasetsRequest,
  output: GetProjectsLocationsBucketsDatasetsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsBucketsDatasetsRequest {
  /** Required. The parent bucket that owns this collection of datasets. The format is: projects/[PROJECT_ID]/locations/[LOCATION]/buckets/[BUCKET_ID] */
  parent: string;
  /** Optional. A page token, received from a previous `ListDatasets` call. Provide this to retrieve the subsequent page. */
  pageToken?: string;
  /** Optional. The maximum number of datasets to return. If unspecified, then at most 100 datasets are returned. The maximum value is 1000; values above 1000 are coerced to 1000. */
  pageSize?: number;
  /** Optional. If true, then the response will include deleted datasets. */
  showDeleted?: boolean;
}

export const ListProjectsLocationsBucketsDatasetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    showDeleted: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showDeleted"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/datasets" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsBucketsDatasetsRequest>;

export type ListProjectsLocationsBucketsDatasetsResponse = ListDatasetsResponse;
export const ListProjectsLocationsBucketsDatasetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListDatasetsResponse;

export type ListProjectsLocationsBucketsDatasetsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List datasets of a bucket. */
export const listProjectsLocationsBucketsDatasets: API.PaginatedOperationMethod<
  ListProjectsLocationsBucketsDatasetsRequest,
  ListProjectsLocationsBucketsDatasetsResponse,
  ListProjectsLocationsBucketsDatasetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsBucketsDatasetsRequest,
  output: ListProjectsLocationsBucketsDatasetsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsBucketsDatasetsLinksRequest {
  /** Required. The parent dataset that owns this collection of links. The format is: projects/[PROJECT_ID]/locations/[LOCATION]/buckets/[BUCKET_ID]/datasets/[DATASET_ID] */
  parent: string;
  /** Optional. A page token, received from a previous `ListLinks` call. Provide this to retrieve the subsequent page. */
  pageToken?: string;
  /** Optional. The maximum number of links to return. If unspecified, then at most 100 links are returned. The maximum value is 1000; values above 1000 are coerced to 1000. */
  pageSize?: number;
}

export const ListProjectsLocationsBucketsDatasetsLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/links" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsBucketsDatasetsLinksRequest>;

export type ListProjectsLocationsBucketsDatasetsLinksResponse =
  ListLinksResponse;
export const ListProjectsLocationsBucketsDatasetsLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListLinksResponse;

export type ListProjectsLocationsBucketsDatasetsLinksError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List links of a dataset. */
export const listProjectsLocationsBucketsDatasetsLinks: API.PaginatedOperationMethod<
  ListProjectsLocationsBucketsDatasetsLinksRequest,
  ListProjectsLocationsBucketsDatasetsLinksResponse,
  ListProjectsLocationsBucketsDatasetsLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsBucketsDatasetsLinksRequest,
  output: ListProjectsLocationsBucketsDatasetsLinksResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsBucketsDatasetsLinksRequest {
  /** Required. Name of the link to delete. The format is: projects/[PROJECT_ID]/locations/[LOCATION]/buckets/[BUCKET_ID]/datasets/[DATASET_ID]/links/[LINK_ID] */
  name: string;
}

export const DeleteProjectsLocationsBucketsDatasetsLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsBucketsDatasetsLinksRequest>;

export type DeleteProjectsLocationsBucketsDatasetsLinksResponse = Operation;
export const DeleteProjectsLocationsBucketsDatasetsLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsBucketsDatasetsLinksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a link. */
export const deleteProjectsLocationsBucketsDatasetsLinks: API.OperationMethod<
  DeleteProjectsLocationsBucketsDatasetsLinksRequest,
  DeleteProjectsLocationsBucketsDatasetsLinksResponse,
  DeleteProjectsLocationsBucketsDatasetsLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsBucketsDatasetsLinksRequest,
  output: DeleteProjectsLocationsBucketsDatasetsLinksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsBucketsDatasetsLinksRequest {
  /** Required. Name of the link to retrieve. The format is: projects/[PROJECT_ID]/locations/[LOCATION]/buckets/[BUCKET_ID]/datasets/[DATASET_ID]/links/[LINK_ID] */
  name: string;
}

export const GetProjectsLocationsBucketsDatasetsLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsBucketsDatasetsLinksRequest>;

export type GetProjectsLocationsBucketsDatasetsLinksResponse = Link;
export const GetProjectsLocationsBucketsDatasetsLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ Link;

export type GetProjectsLocationsBucketsDatasetsLinksError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get a link. */
export const getProjectsLocationsBucketsDatasetsLinks: API.OperationMethod<
  GetProjectsLocationsBucketsDatasetsLinksRequest,
  GetProjectsLocationsBucketsDatasetsLinksResponse,
  GetProjectsLocationsBucketsDatasetsLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsBucketsDatasetsLinksRequest,
  output: GetProjectsLocationsBucketsDatasetsLinksResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsBucketsDatasetsLinksRequest {
  /** Required. Name of the containing dataset for this link. The format is: projects/[PROJECT_ID]/locations/[LOCATION]/buckets/[BUCKET_ID]/datasets/[DATASET_ID] */
  parent: string;
  /** Required. Id of the link to create. */
  linkId?: string;
  /** Request body */
  body?: Link;
}

export const CreateProjectsLocationsBucketsDatasetsLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    linkId: Schema.optional(Schema.String).pipe(T.HttpQuery("linkId")),
    body: Schema.optional(Link).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/links", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsBucketsDatasetsLinksRequest>;

export type CreateProjectsLocationsBucketsDatasetsLinksResponse = Operation;
export const CreateProjectsLocationsBucketsDatasetsLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsBucketsDatasetsLinksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a new link. */
export const createProjectsLocationsBucketsDatasetsLinks: API.OperationMethod<
  CreateProjectsLocationsBucketsDatasetsLinksRequest,
  CreateProjectsLocationsBucketsDatasetsLinksResponse,
  CreateProjectsLocationsBucketsDatasetsLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsBucketsDatasetsLinksRequest,
  output: CreateProjectsLocationsBucketsDatasetsLinksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsBucketsDatasetsLinksRequest {
  /** Identifier. Name of the link. The format is: projects/[PROJECT_ID]/locations/[LOCATION]/buckets/[BUCKET_ID]/datasets/[DATASET_ID]/links/[LINK_ID] */
  name: string;
  /** Optional. The list of fields to update. */
  updateMask?: string;
  /** Request body */
  body?: Link;
}

export const PatchProjectsLocationsBucketsDatasetsLinksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Link).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsBucketsDatasetsLinksRequest>;

export type PatchProjectsLocationsBucketsDatasetsLinksResponse = Operation;
export const PatchProjectsLocationsBucketsDatasetsLinksResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsBucketsDatasetsLinksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update a link. */
export const patchProjectsLocationsBucketsDatasetsLinks: API.OperationMethod<
  PatchProjectsLocationsBucketsDatasetsLinksRequest,
  PatchProjectsLocationsBucketsDatasetsLinksResponse,
  PatchProjectsLocationsBucketsDatasetsLinksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsBucketsDatasetsLinksRequest,
  output: PatchProjectsLocationsBucketsDatasetsLinksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsBucketsDatasetsViewsRequest {
  /** Required. Name of the view to retrieve. The format is: projects/[PROJECT_ID]/locations/[LOCATION]/buckets/[BUCKET_ID]/datasets/[DATASET_ID]/views/[VIEW_ID] */
  name: string;
}

export const GetProjectsLocationsBucketsDatasetsViewsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsBucketsDatasetsViewsRequest>;

export type GetProjectsLocationsBucketsDatasetsViewsResponse = View;
export const GetProjectsLocationsBucketsDatasetsViewsResponse =
  /*@__PURE__*/ /*#__PURE__*/ View;

export type GetProjectsLocationsBucketsDatasetsViewsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get a view. */
export const getProjectsLocationsBucketsDatasetsViews: API.OperationMethod<
  GetProjectsLocationsBucketsDatasetsViewsRequest,
  GetProjectsLocationsBucketsDatasetsViewsResponse,
  GetProjectsLocationsBucketsDatasetsViewsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsBucketsDatasetsViewsRequest,
  output: GetProjectsLocationsBucketsDatasetsViewsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsBucketsDatasetsViewsRequest {
  /** Required. Dataset whose views are to be listed. The format is: projects/[PROJECT_ID]/locations/[LOCATION]/buckets/[BUCKET_ID]/datasets/[DATASET_ID] */
  parent: string;
  /** Optional. A page token, received from a previous `ListViews` call. Provide this to retrieve the subsequent page. */
  pageToken?: string;
  /** Optional. The maximum number of views to return. If unspecified, then at most 100 views are returned. The maximum value is 1000; values above 1000 are coerced to 1000. */
  pageSize?: number;
}

export const ListProjectsLocationsBucketsDatasetsViewsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/views" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsBucketsDatasetsViewsRequest>;

export type ListProjectsLocationsBucketsDatasetsViewsResponse =
  ListViewsResponse;
export const ListProjectsLocationsBucketsDatasetsViewsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListViewsResponse;

export type ListProjectsLocationsBucketsDatasetsViewsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List views of a dataset. */
export const listProjectsLocationsBucketsDatasetsViews: API.PaginatedOperationMethod<
  ListProjectsLocationsBucketsDatasetsViewsRequest,
  ListProjectsLocationsBucketsDatasetsViewsResponse,
  ListProjectsLocationsBucketsDatasetsViewsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsBucketsDatasetsViewsRequest,
  output: ListProjectsLocationsBucketsDatasetsViewsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsTraceScopesRequest {
  /** Required. The full resource name of the trace scope to delete: projects/[PROJECT_ID]/locations/[LOCATION_ID]/traceScopes/[TRACE_SCOPE_ID] For example: projects/my-project/locations/global/traceScopes/my-trace-scope */
  name: string;
}

export const DeleteProjectsLocationsTraceScopesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsTraceScopesRequest>;

export type DeleteProjectsLocationsTraceScopesResponse = Empty;
export const DeleteProjectsLocationsTraceScopesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsTraceScopesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a TraceScope. */
export const deleteProjectsLocationsTraceScopes: API.OperationMethod<
  DeleteProjectsLocationsTraceScopesRequest,
  DeleteProjectsLocationsTraceScopesResponse,
  DeleteProjectsLocationsTraceScopesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsTraceScopesRequest,
  output: DeleteProjectsLocationsTraceScopesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsTraceScopesRequest {
  /** Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of `next_page_token` in the response indicates that more results might be available. */
  pageSize?: number;
  /** Required. The full resource name of the location to look for trace scopes: projects/[PROJECT_ID]/locations/[LOCATION_ID] For example: projects/my-project/locations/global */
  parent: string;
  /** Optional. If present, then retrieve the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters should be identical to those in the previous call. */
  pageToken?: string;
}

export const ListProjectsLocationsTraceScopesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/traceScopes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsTraceScopesRequest>;

export type ListProjectsLocationsTraceScopesResponse = ListTraceScopesResponse;
export const ListProjectsLocationsTraceScopesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListTraceScopesResponse;

export type ListProjectsLocationsTraceScopesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List TraceScopes of a project in a particular location. */
export const listProjectsLocationsTraceScopes: API.PaginatedOperationMethod<
  ListProjectsLocationsTraceScopesRequest,
  ListProjectsLocationsTraceScopesResponse,
  ListProjectsLocationsTraceScopesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsTraceScopesRequest,
  output: ListProjectsLocationsTraceScopesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsTraceScopesRequest {
  /** Required. The resource name of the trace scope: projects/[PROJECT_ID]/locations/[LOCATION_ID]/traceScopes/[TRACE_SCOPE_ID] For example: projects/my-project/locations/global/traceScopes/my-trace-scope */
  name: string;
}

export const GetProjectsLocationsTraceScopesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsTraceScopesRequest>;

export type GetProjectsLocationsTraceScopesResponse = TraceScope;
export const GetProjectsLocationsTraceScopesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TraceScope;

export type GetProjectsLocationsTraceScopesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get TraceScope resource. */
export const getProjectsLocationsTraceScopes: API.OperationMethod<
  GetProjectsLocationsTraceScopesRequest,
  GetProjectsLocationsTraceScopesResponse,
  GetProjectsLocationsTraceScopesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsTraceScopesRequest,
  output: GetProjectsLocationsTraceScopesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsTraceScopesRequest {
  /** Required. The full resource name of the location where the trace scope should be created projects/[PROJECT_ID]/locations/[LOCATION_ID] For example: projects/my-project/locations/global */
  parent: string;
  /** Required. A client-assigned identifier for the trace scope. */
  traceScopeId?: string;
  /** Request body */
  body?: TraceScope;
}

export const CreateProjectsLocationsTraceScopesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    traceScopeId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("traceScopeId"),
    ),
    body: Schema.optional(TraceScope).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/traceScopes", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsTraceScopesRequest>;

export type CreateProjectsLocationsTraceScopesResponse = TraceScope;
export const CreateProjectsLocationsTraceScopesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TraceScope;

export type CreateProjectsLocationsTraceScopesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a new TraceScope. */
export const createProjectsLocationsTraceScopes: API.OperationMethod<
  CreateProjectsLocationsTraceScopesRequest,
  CreateProjectsLocationsTraceScopesResponse,
  CreateProjectsLocationsTraceScopesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsTraceScopesRequest,
  output: CreateProjectsLocationsTraceScopesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsTraceScopesRequest {
  /** Identifier. The resource name of the trace scope. For example: projects/my-project/locations/global/traceScopes/my-trace-scope */
  name: string;
  /** Optional. The list of fields to update. */
  updateMask?: string;
  /** Request body */
  body?: TraceScope;
}

export const PatchProjectsLocationsTraceScopesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(TraceScope).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsTraceScopesRequest>;

export type PatchProjectsLocationsTraceScopesResponse = TraceScope;
export const PatchProjectsLocationsTraceScopesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TraceScope;

export type PatchProjectsLocationsTraceScopesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update a TraceScope. */
export const patchProjectsLocationsTraceScopes: API.OperationMethod<
  PatchProjectsLocationsTraceScopesRequest,
  PatchProjectsLocationsTraceScopesResponse,
  PatchProjectsLocationsTraceScopesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsTraceScopesRequest,
  output: PatchProjectsLocationsTraceScopesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export interface ListProjectsLocationsOperationsRequest {
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list page size. */
  pageSize?: number;
  /** The standard list page token. */
  pageToken?: string;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The standard list filter. */
  filter?: string;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
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

export interface GetSettingsFoldersLocationsRequest {
  /** Required. Name of the settings to retrieve. Name format: "projects/[PROJECT_ID]/locations/[LOCATION]/settings" "folders/[FOLDER_ID]/locations/[LOCATION]/settings" "organizations/[ORGANIZATION_ID]/locations/[LOCATION]/settings" */
  name: string;
}

export const GetSettingsFoldersLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetSettingsFoldersLocationsRequest>;

export type GetSettingsFoldersLocationsResponse = Settings;
export const GetSettingsFoldersLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Settings;

export type GetSettingsFoldersLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get Settings */
export const getSettingsFoldersLocations: API.OperationMethod<
  GetSettingsFoldersLocationsRequest,
  GetSettingsFoldersLocationsResponse,
  GetSettingsFoldersLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSettingsFoldersLocationsRequest,
  output: GetSettingsFoldersLocationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateSettingsFoldersLocationsRequest {
  /** Identifier. The resource name of the settings. */
  name: string;
  /** Optional. The field mask specifying which fields of the settings are to be updated. */
  updateMask?: string;
  /** Request body */
  body?: Settings;
}

export const UpdateSettingsFoldersLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Settings).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateSettingsFoldersLocationsRequest>;

export type UpdateSettingsFoldersLocationsResponse = Operation;
export const UpdateSettingsFoldersLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type UpdateSettingsFoldersLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update Settings */
export const updateSettingsFoldersLocations: API.OperationMethod<
  UpdateSettingsFoldersLocationsRequest,
  UpdateSettingsFoldersLocationsResponse,
  UpdateSettingsFoldersLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateSettingsFoldersLocationsRequest,
  output: UpdateSettingsFoldersLocationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListFoldersLocationsRequest {
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
  /** Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** The resource that owns the locations collection, if applicable. */
  name: string;
}

export const ListFoldersLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/locations" }),
    svc,
  ) as unknown as Schema.Schema<ListFoldersLocationsRequest>;

export type ListFoldersLocationsResponse = ListLocationsResponse;
export const ListFoldersLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListLocationsResponse;

export type ListFoldersLocationsError = DefaultErrors | NotFound | Forbidden;

/** Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the ListLocationsRequest.name field: * **Global locations**: If `name` is empty, the method lists the public locations available to all projects. * **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version. */
export const listFoldersLocations: API.PaginatedOperationMethod<
  ListFoldersLocationsRequest,
  ListFoldersLocationsResponse,
  ListFoldersLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListFoldersLocationsRequest,
  output: ListFoldersLocationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetFoldersLocationsRequest {
  /** Resource name for the location. */
  name: string;
}

export const GetFoldersLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetFoldersLocationsRequest>;

export type GetFoldersLocationsResponse = Location;
export const GetFoldersLocationsResponse = /*@__PURE__*/ /*#__PURE__*/ Location;

export type GetFoldersLocationsError = DefaultErrors | NotFound | Forbidden;

/** Gets information about a location. */
export const getFoldersLocations: API.OperationMethod<
  GetFoldersLocationsRequest,
  GetFoldersLocationsResponse,
  GetFoldersLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetFoldersLocationsRequest,
  output: GetFoldersLocationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListFoldersLocationsOperationsRequest {
  /** The standard list page size. */
  pageSize?: number;
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list filter. */
  filter?: string;
  /** The standard list page token. */
  pageToken?: string;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
}

export const ListFoldersLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    name: Schema.String.pipe(T.HttpPath("name")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/operations" }),
    svc,
  ) as unknown as Schema.Schema<ListFoldersLocationsOperationsRequest>;

export type ListFoldersLocationsOperationsResponse = ListOperationsResponse;
export const ListFoldersLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListOperationsResponse;

export type ListFoldersLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. */
export const listFoldersLocationsOperations: API.PaginatedOperationMethod<
  ListFoldersLocationsOperationsRequest,
  ListFoldersLocationsOperationsResponse,
  ListFoldersLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListFoldersLocationsOperationsRequest,
  output: ListFoldersLocationsOperationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetFoldersLocationsOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetFoldersLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetFoldersLocationsOperationsRequest>;

export type GetFoldersLocationsOperationsResponse = Operation;
export const GetFoldersLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type GetFoldersLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getFoldersLocationsOperations: API.OperationMethod<
  GetFoldersLocationsOperationsRequest,
  GetFoldersLocationsOperationsResponse,
  GetFoldersLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetFoldersLocationsOperationsRequest,
  output: GetFoldersLocationsOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CancelFoldersLocationsOperationsRequest {
  /** The name of the operation resource to be cancelled. */
  name: string;
  /** Request body */
  body?: CancelOperationRequest;
}

export const CancelFoldersLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CancelOperationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CancelFoldersLocationsOperationsRequest>;

export type CancelFoldersLocationsOperationsResponse = Empty;
export const CancelFoldersLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type CancelFoldersLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`. */
export const cancelFoldersLocationsOperations: API.OperationMethod<
  CancelFoldersLocationsOperationsRequest,
  CancelFoldersLocationsOperationsResponse,
  CancelFoldersLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelFoldersLocationsOperationsRequest,
  output: CancelFoldersLocationsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteFoldersLocationsOperationsRequest {
  /** The name of the operation resource to be deleted. */
  name: string;
}

export const DeleteFoldersLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteFoldersLocationsOperationsRequest>;

export type DeleteFoldersLocationsOperationsResponse = Empty;
export const DeleteFoldersLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteFoldersLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. */
export const deleteFoldersLocationsOperations: API.OperationMethod<
  DeleteFoldersLocationsOperationsRequest,
  DeleteFoldersLocationsOperationsResponse,
  DeleteFoldersLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteFoldersLocationsOperationsRequest,
  output: DeleteFoldersLocationsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOrganizationsLocationsRequest {
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
  /** Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** The resource that owns the locations collection, if applicable. */
  name: string;
}

export const ListOrganizationsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/locations" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsLocationsRequest>;

export type ListOrganizationsLocationsResponse = ListLocationsResponse;
export const ListOrganizationsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListLocationsResponse;

export type ListOrganizationsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the ListLocationsRequest.name field: * **Global locations**: If `name` is empty, the method lists the public locations available to all projects. * **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version. */
export const listOrganizationsLocations: API.PaginatedOperationMethod<
  ListOrganizationsLocationsRequest,
  ListOrganizationsLocationsResponse,
  ListOrganizationsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsLocationsRequest,
  output: ListOrganizationsLocationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetOrganizationsLocationsRequest {
  /** Resource name for the location. */
  name: string;
}

export const GetOrganizationsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsLocationsRequest>;

export type GetOrganizationsLocationsResponse = Location;
export const GetOrganizationsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Location;

export type GetOrganizationsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets information about a location. */
export const getOrganizationsLocations: API.OperationMethod<
  GetOrganizationsLocationsRequest,
  GetOrganizationsLocationsResponse,
  GetOrganizationsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationsLocationsRequest,
  output: GetOrganizationsLocationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetSettingsOrganizationsLocationsRequest {
  /** Required. Name of the settings to retrieve. Name format: "projects/[PROJECT_ID]/locations/[LOCATION]/settings" "folders/[FOLDER_ID]/locations/[LOCATION]/settings" "organizations/[ORGANIZATION_ID]/locations/[LOCATION]/settings" */
  name: string;
}

export const GetSettingsOrganizationsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetSettingsOrganizationsLocationsRequest>;

export type GetSettingsOrganizationsLocationsResponse = Settings;
export const GetSettingsOrganizationsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Settings;

export type GetSettingsOrganizationsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get Settings */
export const getSettingsOrganizationsLocations: API.OperationMethod<
  GetSettingsOrganizationsLocationsRequest,
  GetSettingsOrganizationsLocationsResponse,
  GetSettingsOrganizationsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSettingsOrganizationsLocationsRequest,
  output: GetSettingsOrganizationsLocationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateSettingsOrganizationsLocationsRequest {
  /** Identifier. The resource name of the settings. */
  name: string;
  /** Optional. The field mask specifying which fields of the settings are to be updated. */
  updateMask?: string;
  /** Request body */
  body?: Settings;
}

export const UpdateSettingsOrganizationsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Settings).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateSettingsOrganizationsLocationsRequest>;

export type UpdateSettingsOrganizationsLocationsResponse = Operation;
export const UpdateSettingsOrganizationsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type UpdateSettingsOrganizationsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update Settings */
export const updateSettingsOrganizationsLocations: API.OperationMethod<
  UpdateSettingsOrganizationsLocationsRequest,
  UpdateSettingsOrganizationsLocationsResponse,
  UpdateSettingsOrganizationsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateSettingsOrganizationsLocationsRequest,
  output: UpdateSettingsOrganizationsLocationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CancelOrganizationsLocationsOperationsRequest {
  /** The name of the operation resource to be cancelled. */
  name: string;
  /** Request body */
  body?: CancelOperationRequest;
}

export const CancelOrganizationsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CancelOperationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CancelOrganizationsLocationsOperationsRequest>;

export type CancelOrganizationsLocationsOperationsResponse = Empty;
export const CancelOrganizationsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type CancelOrganizationsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`. */
export const cancelOrganizationsLocationsOperations: API.OperationMethod<
  CancelOrganizationsLocationsOperationsRequest,
  CancelOrganizationsLocationsOperationsResponse,
  CancelOrganizationsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelOrganizationsLocationsOperationsRequest,
  output: CancelOrganizationsLocationsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOrganizationsLocationsOperationsRequest {
  /** The standard list page size. */
  pageSize?: number;
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list page token. */
  pageToken?: string;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The standard list filter. */
  filter?: string;
}

export const ListOrganizationsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/operations" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsLocationsOperationsRequest>;

export type ListOrganizationsLocationsOperationsResponse =
  ListOperationsResponse;
export const ListOrganizationsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListOperationsResponse;

export type ListOrganizationsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. */
export const listOrganizationsLocationsOperations: API.PaginatedOperationMethod<
  ListOrganizationsLocationsOperationsRequest,
  ListOrganizationsLocationsOperationsResponse,
  ListOrganizationsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsLocationsOperationsRequest,
  output: ListOrganizationsLocationsOperationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetOrganizationsLocationsOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetOrganizationsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsLocationsOperationsRequest>;

export type GetOrganizationsLocationsOperationsResponse = Operation;
export const GetOrganizationsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type GetOrganizationsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getOrganizationsLocationsOperations: API.OperationMethod<
  GetOrganizationsLocationsOperationsRequest,
  GetOrganizationsLocationsOperationsResponse,
  GetOrganizationsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationsLocationsOperationsRequest,
  output: GetOrganizationsLocationsOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteOrganizationsLocationsOperationsRequest {
  /** The name of the operation resource to be deleted. */
  name: string;
}

export const DeleteOrganizationsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteOrganizationsLocationsOperationsRequest>;

export type DeleteOrganizationsLocationsOperationsResponse = Empty;
export const DeleteOrganizationsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteOrganizationsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. */
export const deleteOrganizationsLocationsOperations: API.OperationMethod<
  DeleteOrganizationsLocationsOperationsRequest,
  DeleteOrganizationsLocationsOperationsResponse,
  DeleteOrganizationsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteOrganizationsLocationsOperationsRequest,
  output: DeleteOrganizationsLocationsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
