// ==========================================================================
// Admin SDK API (admin datatransfer_v1)
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
  name: "admin",
  version: "datatransfer_v1",
  rootUrl: "https://admin.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface ApplicationTransferParam {
  /** The value of the transfer parameter, such as `PRIVATE` or `SHARED`. */
  value?: ReadonlyArray<string>;
  /** The type of the transfer parameter, such as `PRIVACY_LEVEL`. */
  key?: string;
}

export const ApplicationTransferParam =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Array(Schema.String)),
    key: Schema.optional(Schema.String),
  }).annotate({ identifier: "ApplicationTransferParam" });

export interface Application {
  /** The application's ID. Retrievable by using the [`applications.list()`](https://developers.google.com/workspace/admin/data-transfer/reference/rest/v1/applications/list) method. */
  id?: string;
  /** The application's name. */
  name?: string;
  /** Identifies the resource as a DataTransfer Application Resource. */
  kind?: string;
  /** The list of all possible transfer parameters for this application. These parameters select which categories of the user's data to transfer. */
  transferParams?: ReadonlyArray<ApplicationTransferParam>;
  /** Etag of the resource. */
  etag?: string;
}

export const Application = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  transferParams: Schema.optional(Schema.Array(ApplicationTransferParam)),
  etag: Schema.optional(Schema.String),
}).annotate({ identifier: "Application" });

export interface ApplicationDataTransfer {
  /** The application's ID. */
  applicationId?: string;
  /** Read-only. Current status of transfer for this application. */
  applicationTransferStatus?: string;
  /** The transfer parameters for the application. These parameters are used to select the data which will get transferred in context of this application. For more information about the specific values available for each application, see the [Transfer parameters](https://developers.google.com/workspace/admin/data-transfer/v1/parameters) reference. */
  applicationTransferParams?: ReadonlyArray<ApplicationTransferParam>;
}

export const ApplicationDataTransfer =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applicationId: Schema.optional(Schema.String),
    applicationTransferStatus: Schema.optional(Schema.String),
    applicationTransferParams: Schema.optional(
      Schema.Array(ApplicationTransferParam),
    ),
  }).annotate({ identifier: "ApplicationDataTransfer" });

export interface DataTransfer {
  /** ETag of the resource. */
  etag?: string;
  /** Read-only. Overall transfer status. */
  overallTransferStatusCode?: string;
  /** Read-only. The time at which the data transfer was requested. */
  requestTime?: string;
  /** Identifies the resource as a DataTransfer request. */
  kind?: string;
  /** ID of the user to whom the data is being transferred. */
  newOwnerUserId?: string;
  /** The list of per-application data transfer resources. It contains details of the applications associated with this transfer resource, and also specifies the applications for which data transfer has to be done at the time of the transfer resource creation. */
  applicationDataTransfers?: ReadonlyArray<ApplicationDataTransfer>;
  /** Read-only. The transfer's ID. */
  id?: string;
  /** ID of the user whose data is being transferred. */
  oldOwnerUserId?: string;
}

export const DataTransfer = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  etag: Schema.optional(Schema.String),
  overallTransferStatusCode: Schema.optional(Schema.String),
  requestTime: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  newOwnerUserId: Schema.optional(Schema.String),
  applicationDataTransfers: Schema.optional(
    Schema.Array(ApplicationDataTransfer),
  ),
  id: Schema.optional(Schema.String),
  oldOwnerUserId: Schema.optional(Schema.String),
}).annotate({ identifier: "DataTransfer" });

export interface DataTransfersListResponse {
  /** Identifies the resource as a collection of data transfer requests. */
  kind?: string;
  /** List of data transfer requests. */
  dataTransfers?: ReadonlyArray<DataTransfer>;
  /** ETag of the resource. */
  etag?: string;
  /** Token to specify the next page in the list. */
  nextPageToken?: string;
}

export const DataTransfersListResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    dataTransfers: Schema.optional(Schema.Array(DataTransfer)),
    etag: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "DataTransfersListResponse" });

export interface ApplicationsListResponse {
  /** Identifies the resource as a collection of Applications. */
  kind?: string;
  /** Token to specify the next page in the list. */
  nextPageToken?: string;
  /** ETag of the resource. */
  etag?: string;
  /** The list of applications that support data transfer and are also installed for the customer. */
  applications?: ReadonlyArray<Application>;
}

export const ApplicationsListResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    applications: Schema.optional(Schema.Array(Application)),
  }).annotate({ identifier: "ApplicationsListResponse" });

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

export interface ListTransfersRequest {
  /** Token to specify the next page in the list. */
  pageToken?: string;
  /** Maximum number of results to return. Default is 100. */
  maxResults?: number;
  /** Destination user's profile ID. */
  newOwnerUserId?: string;
  /** Status of the transfer. */
  status?: string;
  /** Immutable ID of the Google Workspace account. */
  customerId?: string;
  /** Source user's profile ID. */
  oldOwnerUserId?: string;
}

export const ListTransfersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  newOwnerUserId: Schema.optional(Schema.String).pipe(
    T.HttpQuery("newOwnerUserId"),
  ),
  status: Schema.optional(Schema.String).pipe(T.HttpQuery("status")),
  customerId: Schema.optional(Schema.String).pipe(T.HttpQuery("customerId")),
  oldOwnerUserId: Schema.optional(Schema.String).pipe(
    T.HttpQuery("oldOwnerUserId"),
  ),
}).pipe(
  T.Http({ method: "GET", path: "admin/datatransfer/v1/transfers" }),
  svc,
) as unknown as Schema.Schema<ListTransfersRequest>;

export type ListTransfersResponse = DataTransfersListResponse;
export const ListTransfersResponse =
  /*@__PURE__*/ /*#__PURE__*/ DataTransfersListResponse;

export type ListTransfersError = DefaultErrors | NotFound | Forbidden;

/** Lists the transfers for a customer by source user, destination user, or status. */
export const listTransfers: API.PaginatedOperationMethod<
  ListTransfersRequest,
  ListTransfersResponse,
  ListTransfersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListTransfersRequest,
  output: ListTransfersResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface InsertTransfersRequest {
  /** Request body */
  body?: DataTransfer;
}

export const InsertTransfersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    body: Schema.optional(DataTransfer).pipe(T.HttpBody()),
  },
).pipe(
  T.Http({
    method: "POST",
    path: "admin/datatransfer/v1/transfers",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<InsertTransfersRequest>;

export type InsertTransfersResponse = DataTransfer;
export const InsertTransfersResponse = /*@__PURE__*/ /*#__PURE__*/ DataTransfer;

export type InsertTransfersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a data transfer request. See the [Transfer parameters](https://developers.google.com/workspace/admin/data-transfer/v1/parameters) reference for specific application requirements. */
export const insertTransfers: API.OperationMethod<
  InsertTransfersRequest,
  InsertTransfersResponse,
  InsertTransfersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertTransfersRequest,
  output: InsertTransfersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetTransfersRequest {
  /** ID of the resource to be retrieved. This is returned in the response from the insert method. */
  dataTransferId: string;
}

export const GetTransfersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dataTransferId: Schema.String.pipe(T.HttpPath("dataTransferId")),
}).pipe(
  T.Http({
    method: "GET",
    path: "admin/datatransfer/v1/transfers/{dataTransferId}",
  }),
  svc,
) as unknown as Schema.Schema<GetTransfersRequest>;

export type GetTransfersResponse = DataTransfer;
export const GetTransfersResponse = /*@__PURE__*/ /*#__PURE__*/ DataTransfer;

export type GetTransfersError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a data transfer request by its resource ID. */
export const getTransfers: API.OperationMethod<
  GetTransfersRequest,
  GetTransfersResponse,
  GetTransfersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetTransfersRequest,
  output: GetTransfersResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetApplicationsRequest {
  /** ID of the application resource to be retrieved. */
  applicationId: string;
}

export const GetApplicationsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    applicationId: Schema.String.pipe(T.HttpPath("applicationId")),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "admin/datatransfer/v1/applications/{applicationId}",
  }),
  svc,
) as unknown as Schema.Schema<GetApplicationsRequest>;

export type GetApplicationsResponse = Application;
export const GetApplicationsResponse = /*@__PURE__*/ /*#__PURE__*/ Application;

export type GetApplicationsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves information about an application for the given application ID. */
export const getApplications: API.OperationMethod<
  GetApplicationsRequest,
  GetApplicationsResponse,
  GetApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetApplicationsRequest,
  output: GetApplicationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListApplicationsRequest {
  /** Immutable ID of the Google Workspace account. */
  customerId?: string;
  /** Token to specify next page in the list. */
  pageToken?: string;
  /** Maximum number of results to return. Default is 100. */
  maxResults?: number;
}

export const ListApplicationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customerId: Schema.optional(Schema.String).pipe(T.HttpQuery("customerId")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  }).pipe(
    T.Http({ method: "GET", path: "admin/datatransfer/v1/applications" }),
    svc,
  ) as unknown as Schema.Schema<ListApplicationsRequest>;

export type ListApplicationsResponse = ApplicationsListResponse;
export const ListApplicationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ApplicationsListResponse;

export type ListApplicationsError = DefaultErrors | NotFound | Forbidden;

/** Lists the applications available for data transfer for a customer. */
export const listApplications: API.PaginatedOperationMethod<
  ListApplicationsRequest,
  ListApplicationsResponse,
  ListApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListApplicationsRequest,
  output: ListApplicationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));
