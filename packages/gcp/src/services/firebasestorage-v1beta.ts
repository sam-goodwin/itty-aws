// ==========================================================================
// Cloud Storage for Firebase API (firebasestorage v1beta)
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
  name: "firebasestorage",
  version: "v1beta",
  rootUrl: "https://firebasestorage.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface AddFirebaseRequest {}

export const AddFirebaseRequest: Schema.Schema<AddFirebaseRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AddFirebaseRequest",
  });

export interface Bucket {
  /** Output only. Resource name of the bucket. */
  name?: string;
}

export const Bucket: Schema.Schema<Bucket> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Bucket" });

export interface DefaultBucket {
  /** Output only. Underlying bucket resource. */
  bucket?: Bucket;
  /** Immutable. Storage class of the default bucket. Supported values are available at https://cloud.google.com/storage/docs/storage-classes#classes. */
  storageClass?: string;
  /** Identifier. Resource name of the default bucket. */
  name?: string;
  /** Immutable. Location of the default bucket. */
  location?: string;
}

export const DefaultBucket: Schema.Schema<DefaultBucket> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bucket: Schema.optional(Bucket),
    storageClass: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
  }).annotate({ identifier: "DefaultBucket" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface ListBucketsResponse {
  /** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** The list of linked buckets. */
  buckets?: ReadonlyArray<Bucket>;
}

export const ListBucketsResponse: Schema.Schema<ListBucketsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    buckets: Schema.optional(Schema.Array(Bucket)),
  }).annotate({ identifier: "ListBucketsResponse" });

export interface RemoveFirebaseRequest {}

export const RemoveFirebaseRequest: Schema.Schema<RemoveFirebaseRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "RemoveFirebaseRequest",
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

export interface GetDefaultBucketProjectsRequest {
  /** Required. The name of the default bucket to retrieve, `projects/{project_id_or_number}/defaultBucket`. */
  name: string;
}

export const GetDefaultBucketProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetDefaultBucketProjectsRequest>;

export type GetDefaultBucketProjectsResponse = DefaultBucket;
export const GetDefaultBucketProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ DefaultBucket;

export type GetDefaultBucketProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the default bucket. */
export const getDefaultBucketProjects: API.OperationMethod<
  GetDefaultBucketProjectsRequest,
  GetDefaultBucketProjectsResponse,
  GetDefaultBucketProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetDefaultBucketProjectsRequest,
  output: GetDefaultBucketProjectsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteDefaultBucketProjectsRequest {
  /** Required. The name of the default bucket to delete, `projects/{project_id_or_number}/defaultBucket`. */
  name: string;
}

export const DeleteDefaultBucketProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteDefaultBucketProjectsRequest>;

export type DeleteDefaultBucketProjectsResponse = Empty;
export const DeleteDefaultBucketProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteDefaultBucketProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Unlinks and deletes the default bucket. */
export const deleteDefaultBucketProjects: API.OperationMethod<
  DeleteDefaultBucketProjectsRequest,
  DeleteDefaultBucketProjectsResponse,
  DeleteDefaultBucketProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteDefaultBucketProjectsRequest,
  output: DeleteDefaultBucketProjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsBucketsRequest {
  /** A page token, received from a previous `ListBuckets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBuckets` must match the call that provided the page token. */
  pageToken?: string;
  /** Required. Resource name of the parent Firebase project, `projects/{project_id_or_number}`. */
  parent: string;
  /** The maximum number of buckets to return. If not set, the server will use a reasonable default. */
  pageSize?: number;
}

export const ListProjectsBucketsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+parent}/buckets" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsBucketsRequest>;

export type ListProjectsBucketsResponse = ListBucketsResponse;
export const ListProjectsBucketsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListBucketsResponse;

export type ListProjectsBucketsError = DefaultErrors | NotFound | Forbidden;

/** Lists the linked storage buckets for a project. */
export const listProjectsBuckets: API.PaginatedOperationMethod<
  ListProjectsBucketsRequest,
  ListProjectsBucketsResponse,
  ListProjectsBucketsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsBucketsRequest,
  output: ListProjectsBucketsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface AddFirebaseProjectsBucketsRequest {
  /** Required. Resource name of the bucket, mirrors the ID of the underlying Google Cloud Storage bucket, `projects/{project_id_or_number}/buckets/{bucket_id}`. */
  bucket: string;
  /** Request body */
  body?: AddFirebaseRequest;
}

export const AddFirebaseProjectsBucketsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bucket: Schema.String.pipe(T.HttpPath("bucket")),
    body: Schema.optional(AddFirebaseRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+bucket}:addFirebase",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AddFirebaseProjectsBucketsRequest>;

export type AddFirebaseProjectsBucketsResponse = Bucket;
export const AddFirebaseProjectsBucketsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Bucket;

export type AddFirebaseProjectsBucketsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Links a Google Cloud Storage bucket to a Firebase project. */
export const addFirebaseProjectsBuckets: API.OperationMethod<
  AddFirebaseProjectsBucketsRequest,
  AddFirebaseProjectsBucketsResponse,
  AddFirebaseProjectsBucketsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AddFirebaseProjectsBucketsRequest,
  output: AddFirebaseProjectsBucketsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RemoveFirebaseProjectsBucketsRequest {
  /** Required. Resource name of the bucket, mirrors the ID of the underlying Google Cloud Storage bucket, `projects/{project_id_or_number}/buckets/{bucket_id}`. */
  bucket: string;
  /** Request body */
  body?: RemoveFirebaseRequest;
}

export const RemoveFirebaseProjectsBucketsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bucket: Schema.String.pipe(T.HttpPath("bucket")),
    body: Schema.optional(RemoveFirebaseRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+bucket}:removeFirebase",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RemoveFirebaseProjectsBucketsRequest>;

export type RemoveFirebaseProjectsBucketsResponse = Empty;
export const RemoveFirebaseProjectsBucketsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type RemoveFirebaseProjectsBucketsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Unlinks a linked Google Cloud Storage bucket from a Firebase project. */
export const removeFirebaseProjectsBuckets: API.OperationMethod<
  RemoveFirebaseProjectsBucketsRequest,
  RemoveFirebaseProjectsBucketsResponse,
  RemoveFirebaseProjectsBucketsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RemoveFirebaseProjectsBucketsRequest,
  output: RemoveFirebaseProjectsBucketsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsBucketsRequest {
  /** Required. Resource name of the bucket, mirrors the ID of the underlying Google Cloud Storage bucket, `projects/{project_id_or_number}/buckets/{bucket_id}`. */
  name: string;
}

export const GetProjectsBucketsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsBucketsRequest>;

export type GetProjectsBucketsResponse = Bucket;
export const GetProjectsBucketsResponse = /*@__PURE__*/ /*#__PURE__*/ Bucket;

export type GetProjectsBucketsError = DefaultErrors | NotFound | Forbidden;

/** Gets a single linked storage bucket. */
export const getProjectsBuckets: API.OperationMethod<
  GetProjectsBucketsRequest,
  GetProjectsBucketsResponse,
  GetProjectsBucketsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsBucketsRequest,
  output: GetProjectsBucketsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsDefaultBucketRequest {
  /** Required. The parent resource where the default bucket will be created, `projects/{project_id_or_number}`. */
  parent: string;
  /** Request body */
  body?: DefaultBucket;
}

export const CreateProjectsDefaultBucketRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(DefaultBucket).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+parent}/defaultBucket",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsDefaultBucketRequest>;

export type CreateProjectsDefaultBucketResponse = DefaultBucket;
export const CreateProjectsDefaultBucketResponse =
  /*@__PURE__*/ /*#__PURE__*/ DefaultBucket;

export type CreateProjectsDefaultBucketError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a Spark tier-eligible Cloud Storage bucket and links it to your Firebase project. If the default bucket already exists, this method will re-link it to your Firebase project. See https://firebase.google.com/pricing for pricing details. */
export const createProjectsDefaultBucket: API.OperationMethod<
  CreateProjectsDefaultBucketRequest,
  CreateProjectsDefaultBucketResponse,
  CreateProjectsDefaultBucketError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsDefaultBucketRequest,
  output: CreateProjectsDefaultBucketResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
