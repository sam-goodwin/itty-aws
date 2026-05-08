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

export interface GdataBlobstore2Info {
  /** gdata */
  downloadReadHandle?: string;
  /** gdata */
  uploadMetadataContainer?: string;
  /** gdata */
  readToken?: string;
  /** gdata */
  downloadExternalReadToken?: string;
  /** gdata */
  blobId?: string;
  /** gdata */
  blobGeneration?: string;
  /** gdata */
  uploadFragmentListCreationInfo?: string;
}

export const GdataBlobstore2Info: Schema.Schema<GdataBlobstore2Info> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    downloadReadHandle: Schema.optional(Schema.String),
    uploadMetadataContainer: Schema.optional(Schema.String),
    readToken: Schema.optional(Schema.String),
    downloadExternalReadToken: Schema.optional(Schema.String),
    blobId: Schema.optional(Schema.String),
    blobGeneration: Schema.optional(Schema.String),
    uploadFragmentListCreationInfo: Schema.optional(Schema.String),
  }).annotate({ identifier: "GdataBlobstore2Info" });

export interface GdataDownloadParameters {
  /** gdata */
  allowGzipCompression?: boolean;
  /** gdata */
  ignoreRange?: boolean;
}

export const GdataDownloadParameters: Schema.Schema<GdataDownloadParameters> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowGzipCompression: Schema.optional(Schema.Boolean),
    ignoreRange: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GdataDownloadParameters" });

export interface ReportType {
  /** The date/time when this report type was/will be deprecated. */
  deprecateTime?: string;
  /** The name of the report type (max. 100 characters). */
  name?: string;
  /** The ID of the report type (max. 100 characters). */
  id?: string;
  /** True if this a system-managed report type; otherwise false. Reporting jobs for system-managed report types are created automatically and can thus not be used in the `CreateJob` method. */
  systemManaged?: boolean;
}

export const ReportType: Schema.Schema<ReportType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deprecateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    systemManaged: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ReportType" });

export interface ListReportTypesResponse {
  /** The list of report types. */
  reportTypes?: ReadonlyArray<ReportType>;
  /** A token to retrieve next page of results. Pass this value in the ListReportTypesRequest.page_token field in the subsequent call to `ListReportTypes` method to retrieve the next page of results. */
  nextPageToken?: string;
}

export const ListReportTypesResponse: Schema.Schema<ListReportTypesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reportTypes: Schema.optional(Schema.Array(ReportType)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListReportTypesResponse" });

export interface GdataObjectId {
  /** gdata */
  bucketName?: string;
  /** gdata */
  generation?: string;
  /** gdata */
  objectName?: string;
}

export const GdataObjectId: Schema.Schema<GdataObjectId> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bucketName: Schema.optional(Schema.String),
    generation: Schema.optional(Schema.String),
    objectName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GdataObjectId" });

export interface GdataCompositeMedia {
  /** gdata */
  path?: string;
  /** gdata */
  sha1Hash?: string;
  /** gdata */
  crc32cHash?: number;
  /** gdata */
  blobRef?: string;
  /** gdata */
  md5Hash?: string;
  /** gdata */
  length?: string;
  /** gdata */
  referenceType?:
    | "PATH"
    | "BLOB_REF"
    | "INLINE"
    | "BIGSTORE_REF"
    | "COSMO_BINARY_REFERENCE"
    | (string & {});
  /** gdata */
  inline?: string;
  /** gdata */
  objectId?: GdataObjectId;
  /** gdata */
  cosmoBinaryReference?: string;
  /** gdata */
  blobstore2Info?: GdataBlobstore2Info;
}

export const GdataCompositeMedia: Schema.Schema<GdataCompositeMedia> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.optional(Schema.String),
    sha1Hash: Schema.optional(Schema.String),
    crc32cHash: Schema.optional(Schema.Number),
    blobRef: Schema.optional(Schema.String),
    md5Hash: Schema.optional(Schema.String),
    length: Schema.optional(Schema.String),
    referenceType: Schema.optional(Schema.String),
    inline: Schema.optional(Schema.String),
    objectId: Schema.optional(GdataObjectId),
    cosmoBinaryReference: Schema.optional(Schema.String),
    blobstore2Info: Schema.optional(GdataBlobstore2Info),
  }).annotate({ identifier: "GdataCompositeMedia" });

export interface GdataDiffChecksumsResponse {
  /** gdata */
  checksumsLocation?: GdataCompositeMedia;
  /** gdata */
  objectLocation?: GdataCompositeMedia;
  /** gdata */
  objectVersion?: string;
  /** gdata */
  chunkSizeBytes?: string;
  /** gdata */
  objectSizeBytes?: string;
}

export const GdataDiffChecksumsResponse: Schema.Schema<GdataDiffChecksumsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    checksumsLocation: Schema.optional(GdataCompositeMedia),
    objectLocation: Schema.optional(GdataCompositeMedia),
    objectVersion: Schema.optional(Schema.String),
    chunkSizeBytes: Schema.optional(Schema.String),
    objectSizeBytes: Schema.optional(Schema.String),
  }).annotate({ identifier: "GdataDiffChecksumsResponse" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface GdataDiffVersionResponse {
  /** gdata */
  objectVersion?: string;
  /** gdata */
  objectSizeBytes?: string;
}

export const GdataDiffVersionResponse: Schema.Schema<GdataDiffVersionResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    objectVersion: Schema.optional(Schema.String),
    objectSizeBytes: Schema.optional(Schema.String),
  }).annotate({ identifier: "GdataDiffVersionResponse" });

export interface Job {
  /** The name of the job (max. 100 characters). */
  name?: string;
  /** The date/time when this job will expire/expired. After a job expired, no new reports are generated. */
  expireTime?: string;
  /** The creation date/time of the job. */
  createTime?: string;
  /** The type of reports this job creates. Corresponds to the ID of a ReportType. */
  reportTypeId?: string;
  /** The server-generated ID of the job (max. 40 characters). */
  id?: string;
  /** True if this a system-managed job that cannot be modified by the user; otherwise false. */
  systemManaged?: boolean;
}

export const Job: Schema.Schema<Job> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    expireTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    reportTypeId: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    systemManaged: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "Job" });

export interface ListJobsResponse {
  /** The list of jobs. */
  jobs?: ReadonlyArray<Job>;
  /** A token to retrieve next page of results. Pass this value in the ListJobsRequest.page_token field in the subsequent call to `ListJobs` method to retrieve the next page of results. */
  nextPageToken?: string;
}

export const ListJobsResponse: Schema.Schema<ListJobsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    jobs: Schema.optional(Schema.Array(Job)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListJobsResponse" });

export interface GdataDiffUploadRequest {
  /** gdata */
  objectVersion?: string;
  /** gdata */
  objectInfo?: GdataCompositeMedia;
  /** gdata */
  checksumsInfo?: GdataCompositeMedia;
}

export const GdataDiffUploadRequest: Schema.Schema<GdataDiffUploadRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    objectVersion: Schema.optional(Schema.String),
    objectInfo: Schema.optional(GdataCompositeMedia),
    checksumsInfo: Schema.optional(GdataCompositeMedia),
  }).annotate({ identifier: "GdataDiffUploadRequest" });

export interface GdataContentTypeInfo {
  /** gdata */
  bestGuess?: string;
  /** gdata */
  fromUrlPath?: string;
  /** gdata */
  fromBytes?: string;
  /** gdata */
  fromFileName?: string;
  /** gdata */
  fromHeader?: string;
  /** gdata */
  fromFusionId?: string;
  /** gdata */
  fusionIdDetectionMetadata?: string;
}

export const GdataContentTypeInfo: Schema.Schema<GdataContentTypeInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bestGuess: Schema.optional(Schema.String),
    fromUrlPath: Schema.optional(Schema.String),
    fromBytes: Schema.optional(Schema.String),
    fromFileName: Schema.optional(Schema.String),
    fromHeader: Schema.optional(Schema.String),
    fromFusionId: Schema.optional(Schema.String),
    fusionIdDetectionMetadata: Schema.optional(Schema.String),
  }).annotate({ identifier: "GdataContentTypeInfo" });

export interface GdataDiffDownloadResponse {
  /** gdata */
  objectLocation?: GdataCompositeMedia;
}

export const GdataDiffDownloadResponse: Schema.Schema<GdataDiffDownloadResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    objectLocation: Schema.optional(GdataCompositeMedia),
  }).annotate({ identifier: "GdataDiffDownloadResponse" });

export interface GdataDiffUploadResponse {
  /** gdata */
  objectVersion?: string;
  /** gdata */
  originalObject?: GdataCompositeMedia;
}

export const GdataDiffUploadResponse: Schema.Schema<GdataDiffUploadResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    objectVersion: Schema.optional(Schema.String),
    originalObject: Schema.optional(GdataCompositeMedia),
  }).annotate({ identifier: "GdataDiffUploadResponse" });

export interface GdataMedia {
  /** gdata */
  hash?: string;
  /** gdata */
  token?: string;
  /** gdata */
  diffVersionResponse?: GdataDiffVersionResponse;
  /** gdata */
  sha512Hash?: string;
  /** gdata */
  length?: string;
  /** gdata */
  compositeMedia?: ReadonlyArray<GdataCompositeMedia>;
  /** gdata */
  cosmoBinaryReference?: string;
  /** gdata */
  filename?: string;
  /** gdata */
  path?: string;
  /** gdata */
  sha1Hash?: string;
  /** gdata */
  blobRef?: string;
  /** gdata */
  crc32cHash?: number;
  /** gdata */
  diffDownloadResponse?: GdataDiffDownloadResponse;
  /** gdata */
  algorithm?: string;
  /** gdata */
  timestamp?: string;
  /** gdata */
  objectId?: GdataObjectId;
  /** gdata */
  bigstoreObjectRef?: string;
  /** gdata */
  blobstore2Info?: GdataBlobstore2Info;
  /** gdata */
  md5Hash?: string;
  /** gdata */
  hashVerified?: boolean;
  /** gdata */
  contentTypeInfo?: GdataContentTypeInfo;
  /** gdata */
  mediaId?: string;
  /** gdata */
  diffChecksumsResponse?: GdataDiffChecksumsResponse;
  /** gdata */
  downloadParameters?: GdataDownloadParameters;
  /** gdata */
  sha256Hash?: string;
  /** gdata */
  isPotentialRetry?: boolean;
  /** gdata */
  diffUploadRequest?: GdataDiffUploadRequest;
  /** gdata */
  diffUploadResponse?: GdataDiffUploadResponse;
  /** gdata */
  contentType?: string;
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
  inline?: string;
}

export const GdataMedia: Schema.Schema<GdataMedia> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hash: Schema.optional(Schema.String),
    token: Schema.optional(Schema.String),
    diffVersionResponse: Schema.optional(GdataDiffVersionResponse),
    sha512Hash: Schema.optional(Schema.String),
    length: Schema.optional(Schema.String),
    compositeMedia: Schema.optional(Schema.Array(GdataCompositeMedia)),
    cosmoBinaryReference: Schema.optional(Schema.String),
    filename: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
    sha1Hash: Schema.optional(Schema.String),
    blobRef: Schema.optional(Schema.String),
    crc32cHash: Schema.optional(Schema.Number),
    diffDownloadResponse: Schema.optional(GdataDiffDownloadResponse),
    algorithm: Schema.optional(Schema.String),
    timestamp: Schema.optional(Schema.String),
    objectId: Schema.optional(GdataObjectId),
    bigstoreObjectRef: Schema.optional(Schema.String),
    blobstore2Info: Schema.optional(GdataBlobstore2Info),
    md5Hash: Schema.optional(Schema.String),
    hashVerified: Schema.optional(Schema.Boolean),
    contentTypeInfo: Schema.optional(GdataContentTypeInfo),
    mediaId: Schema.optional(Schema.String),
    diffChecksumsResponse: Schema.optional(GdataDiffChecksumsResponse),
    downloadParameters: Schema.optional(GdataDownloadParameters),
    sha256Hash: Schema.optional(Schema.String),
    isPotentialRetry: Schema.optional(Schema.Boolean),
    diffUploadRequest: Schema.optional(GdataDiffUploadRequest),
    diffUploadResponse: Schema.optional(GdataDiffUploadResponse),
    contentType: Schema.optional(Schema.String),
    referenceType: Schema.optional(Schema.String),
    inline: Schema.optional(Schema.String),
  }).annotate({ identifier: "GdataMedia" });

export interface Report {
  /** The date/time when the job this report belongs to will expire/expired. */
  jobExpireTime?: string;
  /** The end of the time period that the report instance covers. The value is exclusive. */
  endTime?: string;
  /** The start of the time period that the report instance covers. The value is inclusive. */
  startTime?: string;
  /** The ID of the job that created this report. */
  jobId?: string;
  /** The date/time when this report was created. */
  createTime?: string;
  /** The server-generated ID of the report. */
  id?: string;
  /** The URL from which the report can be downloaded (max. 1000 characters). */
  downloadUrl?: string;
}

export const Report: Schema.Schema<Report> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    jobExpireTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    jobId: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    downloadUrl: Schema.optional(Schema.String),
  }).annotate({ identifier: "Report" });

export interface ListReportsResponse {
  /** A token to retrieve next page of results. Pass this value in the ListReportsRequest.page_token field in the subsequent call to `ListReports` method to retrieve the next page of results. */
  nextPageToken?: string;
  /** The list of report types. */
  reports?: ReadonlyArray<Report>;
}

export const ListReportsResponse: Schema.Schema<ListReportsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    reports: Schema.optional(Schema.Array(Report)),
  }).annotate({ identifier: "ListReportsResponse" });

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

export interface ListJobsRequest {
  /** If set to true, also system-managed jobs will be returned; otherwise only user-created jobs will be returned. System-managed jobs can neither be modified nor deleted. */
  includeSystemManaged?: boolean;
  /** A token identifying a page of results the server should return. Typically, this is the value of ListReportTypesResponse.next_page_token returned in response to the previous call to the `ListJobs` method. */
  pageToken?: string;
  /** Requested page size. Server may return fewer jobs than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel). */
  onBehalfOfContentOwner?: string;
}

export const ListJobsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  includeSystemManaged: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("includeSystemManaged"),
  ),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
    T.HttpQuery("onBehalfOfContentOwner"),
  ),
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

export interface GetJobsRequest {
  /** The ID of the job to retrieve. */
  jobId: string;
  /** The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel). */
  onBehalfOfContentOwner?: string;
}

export const GetJobsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  jobId: Schema.String.pipe(T.HttpPath("jobId")),
  onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
    T.HttpQuery("onBehalfOfContentOwner"),
  ),
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

export interface DeleteJobsRequest {
  /** The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel). */
  onBehalfOfContentOwner?: string;
  /** The ID of the job to delete. */
  jobId: string;
}

export const DeleteJobsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
    T.HttpQuery("onBehalfOfContentOwner"),
  ),
  jobId: Schema.String.pipe(T.HttpPath("jobId")),
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

export interface ListJobsReportsRequest {
  /** If set, only reports whose start time is smaller than the specified date/time are returned. */
  startTimeBefore?: string;
  /** The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel). */
  onBehalfOfContentOwner?: string;
  /** The ID of the job. */
  jobId: string;
  /** Requested page size. Server may return fewer report types than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** If set, only reports created after the specified date/time are returned. */
  createdAfter?: string;
  /** A token identifying a page of results the server should return. Typically, this is the value of ListReportsResponse.next_page_token returned in response to the previous call to the `ListReports` method. */
  pageToken?: string;
  /** If set, only reports whose start time is greater than or equal the specified date/time are returned. */
  startTimeAtOrAfter?: string;
}

export const ListJobsReportsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    startTimeBefore: Schema.optional(Schema.String).pipe(
      T.HttpQuery("startTimeBefore"),
    ),
    onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
      T.HttpQuery("onBehalfOfContentOwner"),
    ),
    jobId: Schema.String.pipe(T.HttpPath("jobId")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    createdAfter: Schema.optional(Schema.String).pipe(
      T.HttpQuery("createdAfter"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    startTimeAtOrAfter: Schema.optional(Schema.String).pipe(
      T.HttpQuery("startTimeAtOrAfter"),
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

export interface GetJobsReportsRequest {
  /** The ID of the job. */
  jobId: string;
  /** The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel). */
  onBehalfOfContentOwner?: string;
  /** The ID of the report to retrieve. */
  reportId: string;
}

export const GetJobsReportsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  jobId: Schema.String.pipe(T.HttpPath("jobId")),
  onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
    T.HttpQuery("onBehalfOfContentOwner"),
  ),
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

export interface ListReportTypesRequest {
  /** If set to true, also system-managed report types will be returned; otherwise only the report types that can be used to create new reporting jobs will be returned. */
  includeSystemManaged?: boolean;
  /** A token identifying a page of results the server should return. Typically, this is the value of ListReportTypesResponse.next_page_token returned in response to the previous call to the `ListReportTypes` method. */
  pageToken?: string;
  /** Requested page size. Server may return fewer report types than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel). */
  onBehalfOfContentOwner?: string;
}

export const ListReportTypesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    includeSystemManaged: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("includeSystemManaged"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    onBehalfOfContentOwner: Schema.optional(Schema.String).pipe(
      T.HttpQuery("onBehalfOfContentOwner"),
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
  T.Http({ method: "GET", path: "v1/media/{+resourceName}" }),
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
