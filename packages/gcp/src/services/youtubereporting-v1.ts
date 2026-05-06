// ==========================================================================
// YouTube Reporting API (youtubereporting v1)
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
  name: "youtubereporting",
  version: "v1",
  rootUrl: "https://youtubereporting.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface Job {
  /** The name of the job (max. 100 characters). */
  name?: string;
  /** The type of reports this job creates. Corresponds to the ID of a ReportType. */
  reportTypeId?: string;
  /** The creation date/time of the job. */
  createTime?: string;
  /** The date/time when this job will expire/expired. After a job expired, no new reports are generated. */
  expireTime?: string;
  /** True if this a system-managed job that cannot be modified by the user; otherwise false. */
  systemManaged?: boolean;
  /** The server-generated ID of the job (max. 40 characters). */
  id?: string;
}

export const Job = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  reportTypeId: Schema.optional(Schema.String),
  createTime: Schema.optional(Schema.String),
  expireTime: Schema.optional(Schema.String),
  systemManaged: Schema.optional(Schema.Boolean),
  id: Schema.optional(Schema.String),
}).annotate({ identifier: "Job" });

export interface Empty {}

export const Empty = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
  identifier: "Empty",
});

export interface ListJobsResponse {
  /** A token to retrieve next page of results. Pass this value in the ListJobsRequest.page_token field in the subsequent call to `ListJobs` method to retrieve the next page of results. */
  nextPageToken?: string;
  /** The list of jobs. */
  jobs?: ReadonlyArray<Job>;
}

export const ListJobsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextPageToken: Schema.optional(Schema.String),
  jobs: Schema.optional(Schema.Array(Job)),
}).annotate({ identifier: "ListJobsResponse" });

export interface ReportType {
  /** The ID of the report type (max. 100 characters). */
  id?: string;
  /** True if this a system-managed report type; otherwise false. Reporting jobs for system-managed report types are created automatically and can thus not be used in the `CreateJob` method. */
  systemManaged?: boolean;
  /** The name of the report type (max. 100 characters). */
  name?: string;
  /** The date/time when this report type was/will be deprecated. */
  deprecateTime?: string;
}

export const ReportType = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  systemManaged: Schema.optional(Schema.Boolean),
  name: Schema.optional(Schema.String),
  deprecateTime: Schema.optional(Schema.String),
}).annotate({ identifier: "ReportType" });

export interface GdataDownloadParameters {
  /** gdata */
  allowGzipCompression?: boolean;
  /** gdata */
  ignoreRange?: boolean;
}

export const GdataDownloadParameters =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowGzipCompression: Schema.optional(Schema.Boolean),
    ignoreRange: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GdataDownloadParameters" });

export interface Report {
  /** The date/time when this report was created. */
  createTime?: string;
  /** The date/time when the job this report belongs to will expire/expired. */
  jobExpireTime?: string;
  /** The server-generated ID of the report. */
  id?: string;
  /** The ID of the job that created this report. */
  jobId?: string;
  /** The start of the time period that the report instance covers. The value is inclusive. */
  startTime?: string;
  /** The end of the time period that the report instance covers. The value is exclusive. */
  endTime?: string;
  /** The URL from which the report can be downloaded (max. 1000 characters). */
  downloadUrl?: string;
}

export const Report = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  createTime: Schema.optional(Schema.String),
  jobExpireTime: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  jobId: Schema.optional(Schema.String),
  startTime: Schema.optional(Schema.String),
  endTime: Schema.optional(Schema.String),
  downloadUrl: Schema.optional(Schema.String),
}).annotate({ identifier: "Report" });

export interface ListReportsResponse {
  /** A token to retrieve next page of results. Pass this value in the ListReportsRequest.page_token field in the subsequent call to `ListReports` method to retrieve the next page of results. */
  nextPageToken?: string;
  /** The list of report types. */
  reports?: ReadonlyArray<Report>;
}

export const ListReportsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextPageToken: Schema.optional(Schema.String),
  reports: Schema.optional(Schema.Array(Report)),
}).annotate({ identifier: "ListReportsResponse" });

export interface GdataBlobstore2Info {
  /** gdata */
  blobId?: string;
  /** gdata */
  uploadFragmentListCreationInfo?: string;
  /** gdata */
  blobGeneration?: string;
  /** gdata */
  readToken?: string;
  /** gdata */
  uploadMetadataContainer?: string;
  /** gdata */
  downloadReadHandle?: string;
  /** gdata */
  downloadExternalReadToken?: string;
}

export const GdataBlobstore2Info = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  blobId: Schema.optional(Schema.String),
  uploadFragmentListCreationInfo: Schema.optional(Schema.String),
  blobGeneration: Schema.optional(Schema.String),
  readToken: Schema.optional(Schema.String),
  uploadMetadataContainer: Schema.optional(Schema.String),
  downloadReadHandle: Schema.optional(Schema.String),
  downloadExternalReadToken: Schema.optional(Schema.String),
}).annotate({ identifier: "GdataBlobstore2Info" });

export interface GdataObjectId {
  /** gdata */
  bucketName?: string;
  /** gdata */
  objectName?: string;
  /** gdata */
  generation?: string;
}

export const GdataObjectId = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  bucketName: Schema.optional(Schema.String),
  objectName: Schema.optional(Schema.String),
  generation: Schema.optional(Schema.String),
}).annotate({ identifier: "GdataObjectId" });

export interface GdataCompositeMedia {
  /** gdata */
  path?: string;
  /** gdata */
  length?: string;
  /** gdata */
  cosmoBinaryReference?: string;
  /** gdata */
  inline?: string;
  /** gdata */
  crc32cHash?: number;
  /** gdata */
  referenceType?:
    | "PATH"
    | "BLOB_REF"
    | "INLINE"
    | "BIGSTORE_REF"
    | "COSMO_BINARY_REFERENCE"
    | (string & {});
  /** gdata */
  blobstore2Info?: GdataBlobstore2Info;
  /** gdata */
  md5Hash?: string;
  /** gdata */
  sha1Hash?: string;
  /** gdata */
  objectId?: GdataObjectId;
  /** gdata */
  blobRef?: string;
}

export const GdataCompositeMedia = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  path: Schema.optional(Schema.String),
  length: Schema.optional(Schema.String),
  cosmoBinaryReference: Schema.optional(Schema.String),
  inline: Schema.optional(Schema.String),
  crc32cHash: Schema.optional(Schema.Number),
  referenceType: Schema.optional(Schema.String),
  blobstore2Info: Schema.optional(GdataBlobstore2Info),
  md5Hash: Schema.optional(Schema.String),
  sha1Hash: Schema.optional(Schema.String),
  objectId: Schema.optional(GdataObjectId),
  blobRef: Schema.optional(Schema.String),
}).annotate({ identifier: "GdataCompositeMedia" });

export interface GdataDiffChecksumsResponse {
  /** gdata */
  checksumsLocation?: GdataCompositeMedia;
  /** gdata */
  chunkSizeBytes?: string;
  /** gdata */
  objectLocation?: GdataCompositeMedia;
  /** gdata */
  objectVersion?: string;
  /** gdata */
  objectSizeBytes?: string;
}

export const GdataDiffChecksumsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    checksumsLocation: Schema.optional(GdataCompositeMedia),
    chunkSizeBytes: Schema.optional(Schema.String),
    objectLocation: Schema.optional(GdataCompositeMedia),
    objectVersion: Schema.optional(Schema.String),
    objectSizeBytes: Schema.optional(Schema.String),
  }).annotate({ identifier: "GdataDiffChecksumsResponse" });

export interface GdataDiffDownloadResponse {
  /** gdata */
  objectLocation?: GdataCompositeMedia;
}

export const GdataDiffDownloadResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    objectLocation: Schema.optional(GdataCompositeMedia),
  }).annotate({ identifier: "GdataDiffDownloadResponse" });

export interface GdataDiffUploadResponse {
  /** gdata */
  originalObject?: GdataCompositeMedia;
  /** gdata */
  objectVersion?: string;
}

export const GdataDiffUploadResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    originalObject: Schema.optional(GdataCompositeMedia),
    objectVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "GdataDiffUploadResponse" });

export interface GdataDiffVersionResponse {
  /** gdata */
  objectVersion?: string;
  /** gdata */
  objectSizeBytes?: string;
}

export const GdataDiffVersionResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    objectVersion: Schema.optional(Schema.String),
    objectSizeBytes: Schema.optional(Schema.String),
  }).annotate({ identifier: "GdataDiffVersionResponse" });

export interface GdataDiffUploadRequest {
  /** gdata */
  objectVersion?: string;
  /** gdata */
  checksumsInfo?: GdataCompositeMedia;
  /** gdata */
  objectInfo?: GdataCompositeMedia;
}

export const GdataDiffUploadRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    objectVersion: Schema.optional(Schema.String),
    checksumsInfo: Schema.optional(GdataCompositeMedia),
    objectInfo: Schema.optional(GdataCompositeMedia),
  },
).annotate({ identifier: "GdataDiffUploadRequest" });

export interface GdataContentTypeInfo {
  /** gdata */
  fromUrlPath?: string;
  /** gdata */
  fromHeader?: string;
  /** gdata */
  fromBytes?: string;
  /** gdata */
  bestGuess?: string;
  /** gdata */
  fromFileName?: string;
}

export const GdataContentTypeInfo = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fromUrlPath: Schema.optional(Schema.String),
  fromHeader: Schema.optional(Schema.String),
  fromBytes: Schema.optional(Schema.String),
  bestGuess: Schema.optional(Schema.String),
  fromFileName: Schema.optional(Schema.String),
}).annotate({ identifier: "GdataContentTypeInfo" });

export interface GdataMedia {
  /** gdata */
  diffChecksumsResponse?: GdataDiffChecksumsResponse;
  /** gdata */
  compositeMedia?: ReadonlyArray<GdataCompositeMedia>;
  /** gdata */
  diffDownloadResponse?: GdataDiffDownloadResponse;
  /** gdata */
  timestamp?: string;
  /** gdata */
  diffUploadResponse?: GdataDiffUploadResponse;
  /** gdata */
  sha256Hash?: string;
  /** gdata */
  objectId?: GdataObjectId;
  /** gdata */
  sha1Hash?: string;
  /** gdata */
  isPotentialRetry?: boolean;
  /** gdata */
  hash?: string;
  /** gdata */
  downloadParameters?: GdataDownloadParameters;
  /** gdata */
  path?: string;
  /** gdata */
  mediaId?: string;
  /** gdata */
  inline?: string;
  /** gdata */
  diffVersionResponse?: GdataDiffVersionResponse;
  /** gdata */
  cosmoBinaryReference?: string;
  /** gdata */
  length?: string;
  /** gdata */
  bigstoreObjectRef?: string;
  /** gdata */
  referenceType?:
    | "PATH"
    | "BLOB_REF"
    | "INLINE"
    | "GET_MEDIA"
    | "COMPOSITE_MEDIA"
    | "BIGSTORE_REF"
    | "DIFF_VERSION_RESPONSE"
    | "DIFF_CHECKSUMS_RESPONSE"
    | "DIFF_DOWNLOAD_RESPONSE"
    | "DIFF_UPLOAD_REQUEST"
    | "DIFF_UPLOAD_RESPONSE"
    | "COSMO_BINARY_REFERENCE"
    | "ARBITRARY_BYTES"
    | (string & {});
  /** gdata */
  blobstore2Info?: GdataBlobstore2Info;
  /** gdata */
  contentType?: string;
  /** gdata */
  filename?: string;
  /** gdata */
  diffUploadRequest?: GdataDiffUploadRequest;
  /** gdata */
  contentTypeInfo?: GdataContentTypeInfo;
  /** gdata */
  crc32cHash?: number;
  /** gdata */
  token?: string;
  /** gdata */
  hashVerified?: boolean;
  /** gdata */
  md5Hash?: string;
  /** gdata */
  blobRef?: string;
  /** gdata */
  algorithm?: string;
}

export const GdataMedia = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  diffChecksumsResponse: Schema.optional(GdataDiffChecksumsResponse),
  compositeMedia: Schema.optional(Schema.Array(GdataCompositeMedia)),
  diffDownloadResponse: Schema.optional(GdataDiffDownloadResponse),
  timestamp: Schema.optional(Schema.String),
  diffUploadResponse: Schema.optional(GdataDiffUploadResponse),
  sha256Hash: Schema.optional(Schema.String),
  objectId: Schema.optional(GdataObjectId),
  sha1Hash: Schema.optional(Schema.String),
  isPotentialRetry: Schema.optional(Schema.Boolean),
  hash: Schema.optional(Schema.String),
  downloadParameters: Schema.optional(GdataDownloadParameters),
  path: Schema.optional(Schema.String),
  mediaId: Schema.optional(Schema.String),
  inline: Schema.optional(Schema.String),
  diffVersionResponse: Schema.optional(GdataDiffVersionResponse),
  cosmoBinaryReference: Schema.optional(Schema.String),
  length: Schema.optional(Schema.String),
  bigstoreObjectRef: Schema.optional(Schema.String),
  referenceType: Schema.optional(Schema.String),
  blobstore2Info: Schema.optional(GdataBlobstore2Info),
  contentType: Schema.optional(Schema.String),
  filename: Schema.optional(Schema.String),
  diffUploadRequest: Schema.optional(GdataDiffUploadRequest),
  contentTypeInfo: Schema.optional(GdataContentTypeInfo),
  crc32cHash: Schema.optional(Schema.Number),
  token: Schema.optional(Schema.String),
  hashVerified: Schema.optional(Schema.Boolean),
  md5Hash: Schema.optional(Schema.String),
  blobRef: Schema.optional(Schema.String),
  algorithm: Schema.optional(Schema.String),
}).annotate({ identifier: "GdataMedia" });

export interface ListReportTypesResponse {
  /** The list of report types. */
  reportTypes?: ReadonlyArray<ReportType>;
  /** A token to retrieve next page of results. Pass this value in the ListReportTypesRequest.page_token field in the subsequent call to `ListReportTypes` method to retrieve the next page of results. */
  nextPageToken?: string;
}

export const ListReportTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reportTypes: Schema.optional(Schema.Array(ReportType)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListReportTypesResponse" });

// ==========================================================================
// Errors
// ==========================================================================

export class NotFound extends Schema.TaggedErrorClass<NotFound>()("NotFound", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
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
  },
) {}
T.applyErrorMatchers(BadRequest, [{ httpStatus: 400 }]);

export class Conflict extends Schema.TaggedErrorClass<Conflict>()("Conflict", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
}) {}
T.applyErrorMatchers(Conflict, [{ httpStatus: 409 }]);

// ==========================================================================
// Operations
// ==========================================================================

export interface ListReportTypesRequest {
  /** The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel). */
  onBehalfOfContentOwner?: string;
  /** A token identifying a page of results the server should return. Typically, this is the value of ListReportTypesResponse.next_page_token returned in response to the previous call to the `ListReportTypes` method. */
  pageToken?: string;
  /** Requested page size. Server may return fewer report types than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** If set to true, also system-managed report types will be returned; otherwise only the report types that can be used to create new reporting jobs will be returned. */
  includeSystemManaged?: boolean;
}

export const ListReportTypesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
      T.HttpQuery("onBehalfOfContentOwner"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    includeSystemManaged: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("includeSystemManaged"),
    ),
  },
).pipe(
  T.Http({ method: "GET", path: "v1/reportTypes" }),
  svc,
) as unknown as Schema.Schema<ListReportTypesRequest>;

export type ListReportTypesResponse_Op = ListReportTypesResponse;
export const ListReportTypesResponse_Op =
  /*@__PURE__*/ /*#__PURE__*/ ListReportTypesResponse;

export type ListReportTypesError = DefaultErrors | NotFound | Forbidden;

/** Lists report types. */
export const listReportTypes: API.PaginatedOperationMethod<
  ListReportTypesRequest,
  ListReportTypesResponse_Op,
  ListReportTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListReportTypesRequest,
  output: ListReportTypesResponse_Op,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DownloadMediaRequest {
  /** Name of the media that is being downloaded. */
  resourceName: string;
}

export const DownloadMediaRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceName: Schema.String.pipe(T.HttpPath("resourceName")),
}).pipe(
  T.Http({ method: "GET", path: "v1/media/{resourceName}" }),
  svc,
) as unknown as Schema.Schema<DownloadMediaRequest>;

export type DownloadMediaResponse = GdataMedia;
export const DownloadMediaResponse = /*@__PURE__*/ /*#__PURE__*/ GdataMedia;

export type DownloadMediaError = DefaultErrors | NotFound | Forbidden;

/** Method for media download. Download is supported on the URI `/v1/media/{+name}?alt=media`. */
export const downloadMedia: API.OperationMethod<
  DownloadMediaRequest,
  DownloadMediaResponse,
  DownloadMediaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DownloadMediaRequest,
  output: DownloadMediaResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateJobsRequest {
  /** The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel). */
  onBehalfOfContentOwner?: string;
  /** Request body */
  body?: Job;
}

export const CreateJobsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
    T.HttpQuery("onBehalfOfContentOwner"),
  ),
  body: Schema.optional(Job).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "v1/jobs", hasBody: true }),
  svc,
) as unknown as Schema.Schema<CreateJobsRequest>;

export type CreateJobsResponse = Job;
export const CreateJobsResponse = /*@__PURE__*/ /*#__PURE__*/ Job;

export type CreateJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a job and returns it. */
export const createJobs: API.OperationMethod<
  CreateJobsRequest,
  CreateJobsResponse,
  CreateJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateJobsRequest,
  output: CreateJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetJobsRequest {
  /** The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel). */
  onBehalfOfContentOwner?: string;
  /** The ID of the job to retrieve. */
  jobId: string;
}

export const GetJobsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
    T.HttpQuery("onBehalfOfContentOwner"),
  ),
  jobId: Schema.String.pipe(T.HttpPath("jobId")),
}).pipe(
  T.Http({ method: "GET", path: "v1/jobs/{jobId}" }),
  svc,
) as unknown as Schema.Schema<GetJobsRequest>;

export type GetJobsResponse = Job;
export const GetJobsResponse = /*@__PURE__*/ /*#__PURE__*/ Job;

export type GetJobsError = DefaultErrors | NotFound | Forbidden;

/** Gets a job. */
export const getJobs: API.OperationMethod<
  GetJobsRequest,
  GetJobsResponse,
  GetJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetJobsRequest,
  output: GetJobsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListJobsRequest {
  /** Requested page size. Server may return fewer jobs than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** If set to true, also system-managed jobs will be returned; otherwise only user-created jobs will be returned. System-managed jobs can neither be modified nor deleted. */
  includeSystemManaged?: boolean;
  /** The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel). */
  onBehalfOfContentOwner?: string;
  /** A token identifying a page of results the server should return. Typically, this is the value of ListReportTypesResponse.next_page_token returned in response to the previous call to the `ListJobs` method. */
  pageToken?: string;
}

export const ListJobsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  includeSystemManaged: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("includeSystemManaged"),
  ),
  onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
    T.HttpQuery("onBehalfOfContentOwner"),
  ),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
}).pipe(
  T.Http({ method: "GET", path: "v1/jobs" }),
  svc,
) as unknown as Schema.Schema<ListJobsRequest>;

export type ListJobsResponse_Op = ListJobsResponse;
export const ListJobsResponse_Op = /*@__PURE__*/ /*#__PURE__*/ ListJobsResponse;

export type ListJobsError = DefaultErrors | NotFound | Forbidden;

/** Lists jobs. */
export const listJobs: API.PaginatedOperationMethod<
  ListJobsRequest,
  ListJobsResponse_Op,
  ListJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListJobsRequest,
  output: ListJobsResponse_Op,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteJobsRequest {
  /** The ID of the job to delete. */
  jobId: string;
  /** The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel). */
  onBehalfOfContentOwner?: string;
}

export const DeleteJobsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  jobId: Schema.String.pipe(T.HttpPath("jobId")),
  onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
    T.HttpQuery("onBehalfOfContentOwner"),
  ),
}).pipe(
  T.Http({ method: "DELETE", path: "v1/jobs/{jobId}" }),
  svc,
) as unknown as Schema.Schema<DeleteJobsRequest>;

export type DeleteJobsResponse = Empty;
export const DeleteJobsResponse = /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a job. */
export const deleteJobs: API.OperationMethod<
  DeleteJobsRequest,
  DeleteJobsResponse,
  DeleteJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteJobsRequest,
  output: DeleteJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetJobsReportsRequest {
  /** The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel). */
  onBehalfOfContentOwner?: string;
  /** The ID of the job. */
  jobId: string;
  /** The ID of the report to retrieve. */
  reportId: string;
}

export const GetJobsReportsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
    T.HttpQuery("onBehalfOfContentOwner"),
  ),
  jobId: Schema.String.pipe(T.HttpPath("jobId")),
  reportId: Schema.String.pipe(T.HttpPath("reportId")),
}).pipe(
  T.Http({ method: "GET", path: "v1/jobs/{jobId}/reports/{reportId}" }),
  svc,
) as unknown as Schema.Schema<GetJobsReportsRequest>;

export type GetJobsReportsResponse = Report;
export const GetJobsReportsResponse = /*@__PURE__*/ /*#__PURE__*/ Report;

export type GetJobsReportsError = DefaultErrors | NotFound | Forbidden;

/** Gets the metadata of a specific report. */
export const getJobsReports: API.OperationMethod<
  GetJobsReportsRequest,
  GetJobsReportsResponse,
  GetJobsReportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetJobsReportsRequest,
  output: GetJobsReportsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListJobsReportsRequest {
  /** If set, only reports whose start time is greater than or equal the specified date/time are returned. */
  startTimeAtOrAfter?: string;
  /** The ID of the job. */
  jobId: string;
  /** Requested page size. Server may return fewer report types than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** A token identifying a page of results the server should return. Typically, this is the value of ListReportsResponse.next_page_token returned in response to the previous call to the `ListReports` method. */
  pageToken?: string;
  /** If set, only reports whose start time is smaller than the specified date/time are returned. */
  startTimeBefore?: string;
  /** The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel). */
  onBehalfOfContentOwner?: string;
  /** If set, only reports created after the specified date/time are returned. */
  createdAfter?: string;
}

export const ListJobsReportsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    startTimeAtOrAfter: Schema.optional(Schema.String).pipe(
      T.HttpQuery("startTimeAtOrAfter"),
    ),
    jobId: Schema.String.pipe(T.HttpPath("jobId")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    startTimeBefore: Schema.optional(Schema.String).pipe(
      T.HttpQuery("startTimeBefore"),
    ),
    onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
      T.HttpQuery("onBehalfOfContentOwner"),
    ),
    createdAfter: Schema.optional(Schema.String).pipe(
      T.HttpQuery("createdAfter"),
    ),
  },
).pipe(
  T.Http({ method: "GET", path: "v1/jobs/{jobId}/reports" }),
  svc,
) as unknown as Schema.Schema<ListJobsReportsRequest>;

export type ListJobsReportsResponse = ListReportsResponse;
export const ListJobsReportsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListReportsResponse;

export type ListJobsReportsError = DefaultErrors | NotFound | Forbidden;

/** Lists reports created by a specific job. Returns NOT_FOUND if the job does not exist. */
export const listJobsReports: API.PaginatedOperationMethod<
  ListJobsReportsRequest,
  ListJobsReportsResponse,
  ListJobsReportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListJobsReportsRequest,
  output: ListJobsReportsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));
