// ==========================================================================
// Workflows API (workflows v1)
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
  name: "workflows",
  version: "v1",
  rootUrl: "https://workflows.googleapis.com/",
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

export interface StateError {
  /** The type of this state error. */
  type?: "TYPE_UNSPECIFIED" | "KMS_ERROR" | (string & {});
  /** Provides specifics about the error. */
  details?: string;
}

export const StateError: Schema.Schema<StateError> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    details: Schema.optional(Schema.String),
  }).annotate({ identifier: "StateError" });

export interface Workflow {
  /** Output only. The revision of the workflow. A new revision of a workflow is created as a result of updating the following properties of a workflow: - Service account - Workflow code to be executed The format is "000001-a4d", where the first six characters define the zero-padded revision ordinal number. They are followed by a hyphen and three hexadecimal random characters. */
  revisionId?: string;
  /** Output only. The timestamp for when the workflow was last updated. This is a workflow-wide field and is not tied to a specific revision. */
  updateTime?: string;
  /** Output only. A list of all KMS crypto key versions used to encrypt or decrypt the data associated with the workflow. */
  allKmsKeysVersions?: ReadonlyArray<string>;
  /** Optional. The resource name of a KMS crypto key used to encrypt or decrypt the data associated with the workflow. Format: projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{cryptoKey} Using `-` as a wildcard for the `{project}` or not providing one at all will infer the project from the account. If not provided, data associated with the workflow will not be CMEK-encrypted. */
  cryptoKeyName?: string;
  /** Output only. Error regarding the state of the workflow. For example, this field will have error details if the execution data is unavailable due to revoked KMS key permissions. */
  stateError?: StateError;
  /** Output only. The resource name of a KMS crypto key version used to encrypt or decrypt the data associated with the workflow. Format: projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{cryptoKey}/cryptoKeyVersions/{cryptoKeyVersion} */
  cryptoKeyVersion?: string;
  /** The service account associated with the latest workflow version. This service account represents the identity of the workflow and determines what permissions the workflow has. Format: projects/{project}/serviceAccounts/{account} or {account} Using `-` as a wildcard for the `{project}` or not providing one at all will infer the project from the account. The `{account}` value can be the `email` address or the `unique_id` of the service account. If not provided, workflow will use the project's default service account. Modifying this field for an existing workflow results in a new workflow revision. */
  serviceAccount?: string;
  /** Output only. The timestamp for the latest revision of the workflow's creation. */
  revisionCreateTime?: string;
  /** Optional. Describes the level of platform logging to apply to calls and call responses during executions of this workflow. If both the workflow and the execution specify a logging level, the execution level takes precedence. */
  callLogLevel?:
    | "CALL_LOG_LEVEL_UNSPECIFIED"
    | "LOG_ALL_CALLS"
    | "LOG_ERRORS_ONLY"
    | "LOG_NONE"
    | (string & {});
  /** Optional. Describes the execution history level to apply to this workflow. */
  executionHistoryLevel?:
    | "EXECUTION_HISTORY_LEVEL_UNSPECIFIED"
    | "EXECUTION_HISTORY_BASIC"
    | "EXECUTION_HISTORY_DETAILED"
    | (string & {});
  /** The resource name of the workflow. Format: projects/{project}/locations/{location}/workflows/{workflow}. This is a workflow-wide field and is not tied to a specific revision. */
  name?: string;
  /** Description of the workflow provided by the user. Must be at most 1000 Unicode characters long. This is a workflow-wide field and is not tied to a specific revision. */
  description?: string;
  /** Output only. A list of all KMS crypto keys used to encrypt or decrypt the data associated with the workflow. */
  allKmsKeys?: ReadonlyArray<string>;
  /** Optional. Input only. Immutable. Tags associated with this workflow. */
  tags?: Record<string, string>;
  /** Optional. User-defined environment variables associated with this workflow revision. This map has a maximum length of 20. Each string can take up to 4KiB. Keys cannot be empty strings and cannot start with "GOOGLE" or "WORKFLOWS". */
  userEnvVars?: Record<string, string>;
  /** Labels associated with this workflow. Labels can contain at most 64 entries. Keys and values can be no longer than 63 characters and can only contain lowercase letters, numeric characters, underscores, and dashes. Label keys must start with a letter. International characters are allowed. This is a workflow-wide field and is not tied to a specific revision. */
  labels?: Record<string, string>;
  /** Output only. The timestamp for when the workflow was created. This is a workflow-wide field and is not tied to a specific revision. */
  createTime?: string;
  /** Output only. State of the workflow deployment. */
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "UNAVAILABLE" | (string & {});
  /** Workflow code to be executed. The size limit is 128KB. */
  sourceContents?: string;
}

export const Workflow: Schema.Schema<Workflow> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    revisionId: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    allKmsKeysVersions: Schema.optional(Schema.Array(Schema.String)),
    cryptoKeyName: Schema.optional(Schema.String),
    stateError: Schema.optional(StateError),
    cryptoKeyVersion: Schema.optional(Schema.String),
    serviceAccount: Schema.optional(Schema.String),
    revisionCreateTime: Schema.optional(Schema.String),
    callLogLevel: Schema.optional(Schema.String),
    executionHistoryLevel: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    allKmsKeys: Schema.optional(Schema.Array(Schema.String)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    userEnvVars: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    createTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    sourceContents: Schema.optional(Schema.String),
  }).annotate({ identifier: "Workflow" });

export interface ListWorkflowsResponse {
  /** The workflows that match the request. */
  workflows?: ReadonlyArray<Workflow>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** Unreachable resources. */
  unreachable?: ReadonlyArray<string>;
}

export const ListWorkflowsResponse: Schema.Schema<ListWorkflowsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    workflows: Schema.optional(Schema.Array(Workflow)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListWorkflowsResponse" });

export interface Operation {
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    done: Schema.optional(Schema.Boolean),
    error: Schema.optional(Status),
  }).annotate({ identifier: "Operation" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface Location {
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
}

export const Location: Schema.Schema<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locationId: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
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

export interface OperationMetadata {
  /** The time the operation finished running. */
  endTime?: string;
  /** API version used to start the operation. */
  apiVersion?: string;
  /** Server-defined resource path for the target of the operation. */
  target?: string;
  /** The time the operation was created. */
  createTime?: string;
  /** Name of the verb executed by the operation. */
  verb?: string;
}

export const OperationMetadata: Schema.Schema<OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endTime: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
  }).annotate({ identifier: "OperationMetadata" });

export interface ListWorkflowRevisionsResponse {
  /** The revisions of the workflow, ordered in reverse chronological order. */
  workflows?: ReadonlyArray<Workflow>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListWorkflowRevisionsResponse: Schema.Schema<ListWorkflowRevisionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    workflows: Schema.optional(Schema.Array(Workflow)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListWorkflowRevisionsResponse" });

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

export interface ListProjectsLocationsRequest {
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
  /** Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    name: Schema.String.pipe(T.HttpPath("name")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
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

export interface ListProjectsLocationsOperationsRequest {
  /** The standard list page size. */
  pageSize?: number;
  /** The standard list page token. */
  pageToken?: string;
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list filter. */
  filter?: string;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
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

export interface ListProjectsLocationsWorkflowsRequest {
  /** Required. Project and location from which the workflows should be listed. Format: projects/{project}/locations/{location} */
  parent: string;
  /** Filter to restrict results to specific workflows. For details, see AIP-160. For example, if you are using the Google APIs Explorer: `state="SUCCEEDED"` or `createTime>"2023-08-01" AND state="FAILED"` */
  filter?: string;
  /** Maximum number of workflows to return per call. The service might return fewer than this value even if not at the end of the collection. If a value is not specified, a default value of 500 is used. The maximum permitted value is 1000 and values greater than 1000 are coerced down to 1000. */
  pageSize?: number;
  /** A page token, received from a previous `ListWorkflows` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListWorkflows` must match the call that provided the page token. */
  pageToken?: string;
  /** Comma-separated list of fields that specify the order of the results. Default sorting order for a field is ascending. To specify descending order for a field, append a "desc" suffix. If not specified, the results are returned in an unspecified order. */
  orderBy?: string;
}

export const ListProjectsLocationsWorkflowsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/workflows" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsWorkflowsRequest>;

export type ListProjectsLocationsWorkflowsResponse = ListWorkflowsResponse;
export const ListProjectsLocationsWorkflowsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListWorkflowsResponse;

export type ListProjectsLocationsWorkflowsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists workflows in a given project and location. The default order is not specified. */
export const listProjectsLocationsWorkflows: API.PaginatedOperationMethod<
  ListProjectsLocationsWorkflowsRequest,
  ListProjectsLocationsWorkflowsResponse,
  ListProjectsLocationsWorkflowsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsWorkflowsRequest,
  output: ListProjectsLocationsWorkflowsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsWorkflowsRequest {
  /** The resource name of the workflow. Format: projects/{project}/locations/{location}/workflows/{workflow}. This is a workflow-wide field and is not tied to a specific revision. */
  name: string;
  /** List of fields to be updated. If not present, the entire workflow will be updated. */
  updateMask?: string;
  /** Request body */
  body?: Workflow;
}

export const PatchProjectsLocationsWorkflowsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Workflow).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsWorkflowsRequest>;

export type PatchProjectsLocationsWorkflowsResponse = Operation;
export const PatchProjectsLocationsWorkflowsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsWorkflowsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing workflow. Running this method has no impact on already running executions of the workflow. A new revision of the workflow might be created as a result of a successful update operation. In that case, the new revision is used in new workflow executions. */
export const patchProjectsLocationsWorkflows: API.OperationMethod<
  PatchProjectsLocationsWorkflowsRequest,
  PatchProjectsLocationsWorkflowsResponse,
  PatchProjectsLocationsWorkflowsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsWorkflowsRequest,
  output: PatchProjectsLocationsWorkflowsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListRevisionsProjectsLocationsWorkflowsRequest {
  /** The maximum number of revisions to return per page. If a value is not specified, a default value of 20 is used. The maximum permitted value is 100. Values greater than 100 are coerced down to 100. */
  pageSize?: number;
  /** The page token, received from a previous ListWorkflowRevisions call. Provide this to retrieve the subsequent page. */
  pageToken?: string;
  /** Required. Workflow for which the revisions should be listed. Format: projects/{project}/locations/{location}/workflows/{workflow} */
  name: string;
}

export const ListRevisionsProjectsLocationsWorkflowsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}:listRevisions" }),
    svc,
  ) as unknown as Schema.Schema<ListRevisionsProjectsLocationsWorkflowsRequest>;

export type ListRevisionsProjectsLocationsWorkflowsResponse =
  ListWorkflowRevisionsResponse;
export const ListRevisionsProjectsLocationsWorkflowsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListWorkflowRevisionsResponse;

export type ListRevisionsProjectsLocationsWorkflowsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists revisions for a given workflow. */
export const listRevisionsProjectsLocationsWorkflows: API.PaginatedOperationMethod<
  ListRevisionsProjectsLocationsWorkflowsRequest,
  ListRevisionsProjectsLocationsWorkflowsResponse,
  ListRevisionsProjectsLocationsWorkflowsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListRevisionsProjectsLocationsWorkflowsRequest,
  output: ListRevisionsProjectsLocationsWorkflowsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsWorkflowsRequest {
  /** Required. Project and location in which the workflow should be created. Format: projects/{project}/locations/{location} */
  parent: string;
  /** Required. The ID of the workflow to be created. It has to fulfill the following requirements: * Must contain only letters, numbers, underscores and hyphens. * Must start with a letter. * Must be between 1-64 characters. * Must end with a number or a letter. * Must be unique within the customer project and location. */
  workflowId?: string;
  /** Request body */
  body?: Workflow;
}

export const CreateProjectsLocationsWorkflowsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    workflowId: Schema.optional(Schema.String).pipe(T.HttpQuery("workflowId")),
    body: Schema.optional(Workflow).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/workflows", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsWorkflowsRequest>;

export type CreateProjectsLocationsWorkflowsResponse = Operation;
export const CreateProjectsLocationsWorkflowsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsWorkflowsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new workflow. If a workflow with the specified name already exists in the specified project and location, the long running operation returns a ALREADY_EXISTS error. */
export const createProjectsLocationsWorkflows: API.OperationMethod<
  CreateProjectsLocationsWorkflowsRequest,
  CreateProjectsLocationsWorkflowsResponse,
  CreateProjectsLocationsWorkflowsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsWorkflowsRequest,
  output: CreateProjectsLocationsWorkflowsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsWorkflowsRequest {
  /** Required. Name of the workflow to be deleted. Format: projects/{project}/locations/{location}/workflows/{workflow} */
  name: string;
}

export const DeleteProjectsLocationsWorkflowsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsWorkflowsRequest>;

export type DeleteProjectsLocationsWorkflowsResponse = Operation;
export const DeleteProjectsLocationsWorkflowsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsWorkflowsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a workflow with the specified name. This method also cancels and deletes all running executions of the workflow. */
export const deleteProjectsLocationsWorkflows: API.OperationMethod<
  DeleteProjectsLocationsWorkflowsRequest,
  DeleteProjectsLocationsWorkflowsResponse,
  DeleteProjectsLocationsWorkflowsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsWorkflowsRequest,
  output: DeleteProjectsLocationsWorkflowsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsWorkflowsRequest {
  /** Required. Name of the workflow for which information should be retrieved. Format: projects/{project}/locations/{location}/workflows/{workflow} */
  name: string;
  /** Optional. The revision of the workflow to retrieve. If the revision_id is empty, the latest revision is retrieved. The format is "000001-a4d", where the first six characters define the zero-padded decimal revision number. They are followed by a hyphen and three hexadecimal characters. */
  revisionId?: string;
}

export const GetProjectsLocationsWorkflowsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    revisionId: Schema.optional(Schema.String).pipe(T.HttpQuery("revisionId")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsWorkflowsRequest>;

export type GetProjectsLocationsWorkflowsResponse = Workflow;
export const GetProjectsLocationsWorkflowsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Workflow;

export type GetProjectsLocationsWorkflowsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single workflow. */
export const getProjectsLocationsWorkflows: API.OperationMethod<
  GetProjectsLocationsWorkflowsRequest,
  GetProjectsLocationsWorkflowsResponse,
  GetProjectsLocationsWorkflowsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsWorkflowsRequest,
  output: GetProjectsLocationsWorkflowsResponse,
  errors: [NotFound, Forbidden],
}));
