// ==========================================================================
// Data Portability API (dataportability v1beta)
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
  name: "dataportability",
  version: "v1beta",
  rootUrl: "https://dataportability.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface RetryPortabilityArchiveResponse {
  /** The archive job ID that is initiated by the retry endpoint. This can be used to get the state of the new job. */
  archiveJobId?: string;
}

export const RetryPortabilityArchiveResponse: Schema.Schema<RetryPortabilityArchiveResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    archiveJobId: Schema.optional(Schema.String),
  }).annotate({ identifier: "RetryPortabilityArchiveResponse" });

export interface PortabilityArchiveState {
  /** Resource that represents the state of the Archive job. */
  state?:
    | "STATE_UNSPECIFIED"
    | "IN_PROGRESS"
    | "COMPLETE"
    | "FAILED"
    | "CANCELLED"
    | (string & {});
  /** The timestamp that represents the end point for the data you are exporting. If the end_time value is set in the InitiatePortabilityArchiveRequest, this field is set to that value. If end_time is not set, this value is set to the time the export was requested. */
  exportTime?: string;
  /** If the state is complete, this method returns the signed URLs of the objects in the Cloud Storage bucket. */
  urls?: ReadonlyArray<string>;
  /** The timestamp that represents the starting point for the data you are exporting. This field is set only if the start_time field is specified in the InitiatePortabilityArchiveRequest. */
  startTime?: string;
  /** The resource name of ArchiveJob's PortabilityArchiveState singleton. The format is: archiveJobs/{archive_job}/portabilityArchiveState. archive_job is the job ID provided in the request. */
  name?: string;
}

export const PortabilityArchiveState: Schema.Schema<PortabilityArchiveState> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    exportTime: Schema.optional(Schema.String),
    urls: Schema.optional(Schema.Array(Schema.String)),
    startTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "PortabilityArchiveState" });

export interface CancelPortabilityArchiveRequest {}

export const CancelPortabilityArchiveRequest: Schema.Schema<CancelPortabilityArchiveRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelPortabilityArchiveRequest",
  });

export interface CheckAccessTypeRequest {}

export const CheckAccessTypeRequest: Schema.Schema<CheckAccessTypeRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CheckAccessTypeRequest",
  });

export interface ResetAuthorizationRequest {}

export const ResetAuthorizationRequest: Schema.Schema<ResetAuthorizationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "ResetAuthorizationRequest",
  });

export interface RetryPortabilityArchiveRequest {}

export const RetryPortabilityArchiveRequest: Schema.Schema<RetryPortabilityArchiveRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "RetryPortabilityArchiveRequest",
  });

export interface InitiatePortabilityArchiveResponse {
  /** The archive job ID that is initiated in the API. This can be used to get the state of the job. */
  archiveJobId?: string;
  /** The access type of the Archive job initiated by the API. */
  accessType?:
    | "ACCESS_TYPE_UNSPECIFIED"
    | "ACCESS_TYPE_ONE_TIME"
    | "ACCESS_TYPE_TIME_BASED"
    | (string & {});
}

export const InitiatePortabilityArchiveResponse: Schema.Schema<InitiatePortabilityArchiveResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    archiveJobId: Schema.optional(Schema.String),
    accessType: Schema.optional(Schema.String),
  }).annotate({ identifier: "InitiatePortabilityArchiveResponse" });

export interface CheckAccessTypeResponse {
  /** Jobs initiated with this token will be time-based if all requested resources have time-based access. */
  timeBasedResources?: ReadonlyArray<string>;
  /** Jobs initiated with this token will be one-time if any requested resources have one-time access. */
  oneTimeResources?: ReadonlyArray<string>;
}

export const CheckAccessTypeResponse: Schema.Schema<CheckAccessTypeResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    timeBasedResources: Schema.optional(Schema.Array(Schema.String)),
    oneTimeResources: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "CheckAccessTypeResponse" });

export interface InitiatePortabilityArchiveRequest {
  /** Optional. The timestamp that represents the starting point for the data you are exporting. If the start_time is not specified in the InitiatePortabilityArchiveRequest, the field is set to the earliest available data. */
  startTime?: string;
  /** The resources from which you're exporting data. These values have a 1:1 correspondence with the OAuth scopes. */
  resources?: ReadonlyArray<string>;
  /** Optional. The timestamp that represents the end point for the data you are exporting. If the end_time is not specified in the InitiatePortabilityArchiveRequest, this field is set to the latest available data. */
  endTime?: string;
}

export const InitiatePortabilityArchiveRequest: Schema.Schema<InitiatePortabilityArchiveRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
    resources: Schema.optional(Schema.Array(Schema.String)),
    endTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "InitiatePortabilityArchiveRequest" });

export interface CancelPortabilityArchiveResponse {}

export const CancelPortabilityArchiveResponse: Schema.Schema<CancelPortabilityArchiveResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelPortabilityArchiveResponse",
  });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
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

export interface RetryArchiveJobsRequest {
  /** Required. The Archive job ID you're retrying. This is returned by the InitiatePortabilityArchiveResponse. Retrying is only executed if the initial job failed. */
  name: string;
  /** Request body */
  body?: RetryPortabilityArchiveRequest;
}

export const RetryArchiveJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(RetryPortabilityArchiveRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta/{+name}:retry", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<RetryArchiveJobsRequest>;

export type RetryArchiveJobsResponse = RetryPortabilityArchiveResponse;
export const RetryArchiveJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ RetryPortabilityArchiveResponse;

export type RetryArchiveJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Retries a failed Portability Archive job. */
export const retryArchiveJobs: API.OperationMethod<
  RetryArchiveJobsRequest,
  RetryArchiveJobsResponse,
  RetryArchiveJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RetryArchiveJobsRequest,
  output: RetryArchiveJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetPortabilityArchiveStateArchiveJobsRequest {
  /** Required. The archive job ID that is returned when you request the state of the job. The format is: archiveJobs/{archive_job}/portabilityArchiveState. archive_job is the job ID returned by the InitiatePortabilityArchiveResponse. */
  name: string;
}

export const GetPortabilityArchiveStateArchiveJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetPortabilityArchiveStateArchiveJobsRequest>;

export type GetPortabilityArchiveStateArchiveJobsResponse =
  PortabilityArchiveState;
export const GetPortabilityArchiveStateArchiveJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PortabilityArchiveState;

export type GetPortabilityArchiveStateArchiveJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves the state of an Archive job for the Portability API. */
export const getPortabilityArchiveStateArchiveJobs: API.OperationMethod<
  GetPortabilityArchiveStateArchiveJobsRequest,
  GetPortabilityArchiveStateArchiveJobsResponse,
  GetPortabilityArchiveStateArchiveJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPortabilityArchiveStateArchiveJobsRequest,
  output: GetPortabilityArchiveStateArchiveJobsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CancelArchiveJobsRequest {
  /** Required. The Archive job ID you're canceling. This is returned by the InitiatePortabilityArchive response. The format is: archiveJobs/{archive_job}. Canceling is only executed if the job is in progress. */
  name: string;
  /** Request body */
  body?: CancelPortabilityArchiveRequest;
}

export const CancelArchiveJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CancelPortabilityArchiveRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CancelArchiveJobsRequest>;

export type CancelArchiveJobsResponse = CancelPortabilityArchiveResponse;
export const CancelArchiveJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CancelPortabilityArchiveResponse;

export type CancelArchiveJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Cancels a Portability Archive job. */
export const cancelArchiveJobs: API.OperationMethod<
  CancelArchiveJobsRequest,
  CancelArchiveJobsResponse,
  CancelArchiveJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelArchiveJobsRequest,
  output: CancelArchiveJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ResetAuthorizationRequest_Op {
  /** Request body */
  body?: ResetAuthorizationRequest;
}

export const ResetAuthorizationRequest_Op =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(ResetAuthorizationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/authorization:reset",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ResetAuthorizationRequest_Op>;

export type ResetAuthorizationResponse = Empty;
export const ResetAuthorizationResponse = /*@__PURE__*/ /*#__PURE__*/ Empty;

export type ResetAuthorizationError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Revokes OAuth tokens and resets exhausted scopes for a user/project pair. This method allows you to initiate a request after a new consent is granted. This method also indicates that previous archives can be garbage collected. You should call this method when all jobs are complete and all archives are downloaded. Do not call it only when you start a new job. */
export const resetAuthorization: API.OperationMethod<
  ResetAuthorizationRequest_Op,
  ResetAuthorizationResponse,
  ResetAuthorizationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ResetAuthorizationRequest_Op,
  output: ResetAuthorizationResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface InitiatePortabilityArchiveRequest_Op {
  /** Request body */
  body?: InitiatePortabilityArchiveRequest;
}

export const InitiatePortabilityArchiveRequest_Op =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(InitiatePortabilityArchiveRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/portabilityArchive:initiate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InitiatePortabilityArchiveRequest_Op>;

export type InitiatePortabilityArchiveResponse_Op =
  InitiatePortabilityArchiveResponse;
export const InitiatePortabilityArchiveResponse_Op =
  /*@__PURE__*/ /*#__PURE__*/ InitiatePortabilityArchiveResponse;

export type InitiatePortabilityArchiveError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Initiates a new Archive job for the Portability API. */
export const initiatePortabilityArchive: API.OperationMethod<
  InitiatePortabilityArchiveRequest_Op,
  InitiatePortabilityArchiveResponse_Op,
  InitiatePortabilityArchiveError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InitiatePortabilityArchiveRequest_Op,
  output: InitiatePortabilityArchiveResponse_Op,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CheckAccessTypeRequest_Op {
  /** Request body */
  body?: CheckAccessTypeRequest;
}

export const CheckAccessTypeRequest_Op =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(CheckAccessTypeRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta/accessType:check", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CheckAccessTypeRequest_Op>;

export type CheckAccessTypeResponse_Op = CheckAccessTypeResponse;
export const CheckAccessTypeResponse_Op =
  /*@__PURE__*/ /*#__PURE__*/ CheckAccessTypeResponse;

export type CheckAccessTypeError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Gets the access type of the token. */
export const checkAccessType: API.OperationMethod<
  CheckAccessTypeRequest_Op,
  CheckAccessTypeResponse_Op,
  CheckAccessTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CheckAccessTypeRequest_Op,
  output: CheckAccessTypeResponse_Op,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
