// ==========================================================================
// Firebase ML API (firebaseml v1beta2)
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
  name: "firebaseml",
  version: "v1beta2",
  rootUrl: "https://firebaseml.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface DownloadModelResponse {
  /** Output only. A download URI for the model/zip file. */
  downloadUri?: string;
  /** Output only. The time that the download URI link expires. If the link has expired, the REST call must be repeated. */
  expireTime?: string;
  /** Output only. The format of the model being downloaded. */
  modelFormat?: "MODEL_FORMAT_UNSPECIFIED" | "TFLITE" | (string & {});
  /** Output only. The size of the file(s), if this information is available. */
  sizeBytes?: string;
}

export const DownloadModelResponse: Schema.Schema<DownloadModelResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    downloadUri: Schema.optional(Schema.String),
    expireTime: Schema.optional(Schema.String),
    modelFormat: Schema.optional(Schema.String),
    sizeBytes: Schema.optional(Schema.String),
  }).annotate({ identifier: "DownloadModelResponse" });

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

export interface ModelState {
  /** Output only. Indicates the latest validation error on the model if any. A model may have validation errors if there were problems during the model creation/update. e.g. in the case of a TfLiteModel, if a tflite model file was missing or in the wrong format. This field will be empty for valid models. */
  validationError?: Status;
  /** Indicates if this model has been published. */
  published?: boolean;
}

export const ModelState: Schema.Schema<ModelState> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validationError: Schema.optional(Status),
    published: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ModelState" });

export interface TfLiteModel {
  /** The TfLite file containing the model. (Stored in Google Cloud). The gcs_tflite_uri should have form: gs://some-bucket/some-model.tflite Note: If you update the file in the original location, it is necessary to call UpdateModel for ML to pick up and validate the updated file. */
  gcsTfliteUri?: string;
  /** The AutoML model id referencing a model you created with the AutoML API. The name should have format 'projects//locations//models/' (This is the model resource name returned from the AutoML API) */
  automlModel?: string;
  /** Output only. The size of the TFLite model */
  sizeBytes?: string;
}

export const TfLiteModel: Schema.Schema<TfLiteModel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcsTfliteUri: Schema.optional(Schema.String),
    automlModel: Schema.optional(Schema.String),
    sizeBytes: Schema.optional(Schema.String),
  }).annotate({ identifier: "TfLiteModel" });

export interface ModelOperationMetadata {
  basicOperationStatus?:
    | "BASIC_OPERATION_STATUS_UNSPECIFIED"
    | "BASIC_OPERATION_STATUS_UPLOADING"
    | "BASIC_OPERATION_STATUS_VERIFYING"
    | (string & {});
  /** The name of the model we are creating/updating The name must have the form `projects/{project_id}/models/{model_id}` */
  name?: string;
}

export const ModelOperationMetadata: Schema.Schema<ModelOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    basicOperationStatus: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "ModelOperationMetadata" });

export interface Operation {
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    error: Schema.optional(Status),
    done: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "Operation" });

export interface Model {
  /** User defined tags which can be used to group/filter models during listing */
  tags?: ReadonlyArray<string>;
  /** Required. The name of the model to create. The name can be up to 32 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscores(_) and ASCII digits 0-9. It must start with a letter. */
  displayName?: string;
  /** Output only. Lists operation ids associated with this model whose status is NOT done. */
  activeOperations?: ReadonlyArray<Operation>;
  /** State common to all model types. Includes publishing and validation information. */
  state?: ModelState;
  /** Output only. The model_hash will change if a new file is available for download. */
  modelHash?: string;
  /** Output only. See RFC7232 https://tools.ietf.org/html/rfc7232#section-2.3 */
  etag?: string;
  /** Output only. Timestamp when this model was updated in Firebase ML. */
  updateTime?: string;
  /** A TFLite Model */
  tfliteModel?: TfLiteModel;
  /** The resource name of the Model. Model names have the form `projects/{project_id}/models/{model_id}` The name is ignored when creating a model. */
  name?: string;
  /** Output only. Timestamp when this model was created in Firebase ML. */
  createTime?: string;
}

export const Model: Schema.Schema<Model> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tags: Schema.optional(Schema.Array(Schema.String)),
    displayName: Schema.optional(Schema.String),
    activeOperations: Schema.optional(Schema.Array(Operation)),
    state: Schema.optional(ModelState),
    modelHash: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    tfliteModel: Schema.optional(TfLiteModel),
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Model" });

export interface ListModelsResponse {
  /** The list of models */
  models?: ReadonlyArray<Model>;
  /** Token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
}

export const ListModelsResponse: Schema.Schema<ListModelsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    models: Schema.optional(Schema.Array(Model)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListModelsResponse" });

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

export interface DeleteProjectsModelsRequest {
  /** Required. The name of the model to delete. The name must have the form `projects/{project_id}/models/{model_id}` */
  name: string;
}

export const DeleteProjectsModelsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsModelsRequest>;

export type DeleteProjectsModelsResponse = Empty;
export const DeleteProjectsModelsResponse = /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsModelsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a model */
export const deleteProjectsModels: API.OperationMethod<
  DeleteProjectsModelsRequest,
  DeleteProjectsModelsResponse,
  DeleteProjectsModelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsModelsRequest,
  output: DeleteProjectsModelsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsModelsRequest {
  /** The update mask */
  updateMask?: string;
  /** The resource name of the Model. Model names have the form `projects/{project_id}/models/{model_id}` The name is ignored when creating a model. */
  name: string;
  /** Request body */
  body?: Model;
}

export const PatchProjectsModelsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Model).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsModelsRequest>;

export type PatchProjectsModelsResponse = Operation;
export const PatchProjectsModelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsModelsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a model. The longrunning operation will eventually return a Model. */
export const patchProjectsModels: API.OperationMethod<
  PatchProjectsModelsRequest,
  PatchProjectsModelsResponse,
  PatchProjectsModelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsModelsRequest,
  output: PatchProjectsModelsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsModelsRequest {
  /** Required. The name of the model to get. The name must have the form `projects/{project_id}/models/{model_id}` */
  name: string;
}

export const GetProjectsModelsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsModelsRequest>;

export type GetProjectsModelsResponse = Model;
export const GetProjectsModelsResponse = /*@__PURE__*/ /*#__PURE__*/ Model;

export type GetProjectsModelsError = DefaultErrors | NotFound | Forbidden;

/** Gets a model resource. */
export const getProjectsModels: API.OperationMethod<
  GetProjectsModelsRequest,
  GetProjectsModelsResponse,
  GetProjectsModelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsModelsRequest,
  output: GetProjectsModelsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DownloadProjectsModelsRequest {
  /** Required. The name of the model to download. The name must have the form `projects/{project}/models/{model}` */
  name: string;
}

export const DownloadProjectsModelsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}:download" }),
    svc,
  ) as unknown as Schema.Schema<DownloadProjectsModelsRequest>;

export type DownloadProjectsModelsResponse = DownloadModelResponse;
export const DownloadProjectsModelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ DownloadModelResponse;

export type DownloadProjectsModelsError = DefaultErrors | NotFound | Forbidden;

/** Gets Download information for a model. This is meant for downloading model resources onto devices. It gives very limited information about the model. */
export const downloadProjectsModels: API.OperationMethod<
  DownloadProjectsModelsRequest,
  DownloadProjectsModelsResponse,
  DownloadProjectsModelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DownloadProjectsModelsRequest,
  output: DownloadProjectsModelsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsModelsRequest {
  /** Required. The parent project resource where the model is to be created. The parent must have the form `projects/{project_id}` */
  parent: string;
  /** Request body */
  body?: Model;
}

export const CreateProjectsModelsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Model).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta2/{+parent}/models", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsModelsRequest>;

export type CreateProjectsModelsResponse = Operation;
export const CreateProjectsModelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsModelsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a model in Firebase ML. The longrunning operation will eventually return a Model */
export const createProjectsModels: API.OperationMethod<
  CreateProjectsModelsRequest,
  CreateProjectsModelsResponse,
  CreateProjectsModelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsModelsRequest,
  output: CreateProjectsModelsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsModelsRequest {
  /** The maximum number of items to return */
  pageSize?: number;
  /** Required. The name of the parent to list models for. The parent must have the form `projects/{project_id}' */
  parent: string;
  /** A filter for the list e.g. 'tags: abc' to list models which are tagged with "abc" */
  filter?: string;
  /** The next_page_token value returned from a previous List request, if any. */
  pageToken?: string;
}

export const ListProjectsModelsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+parent}/models" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsModelsRequest>;

export type ListProjectsModelsResponse = ListModelsResponse;
export const ListProjectsModelsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListModelsResponse;

export type ListProjectsModelsError = DefaultErrors | NotFound | Forbidden;

/** Lists the models */
export const listProjectsModels: API.PaginatedOperationMethod<
  ListProjectsModelsRequest,
  ListProjectsModelsResponse,
  ListProjectsModelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsModelsRequest,
  output: ListProjectsModelsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetProjectsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsOperationsRequest>;

export type GetProjectsOperationsResponse = Operation;
export const GetProjectsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type GetProjectsOperationsError = DefaultErrors | NotFound | Forbidden;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getProjectsOperations: API.OperationMethod<
  GetProjectsOperationsRequest,
  GetProjectsOperationsResponse,
  GetProjectsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsOperationsRequest,
  output: GetProjectsOperationsResponse,
  errors: [NotFound, Forbidden],
}));
