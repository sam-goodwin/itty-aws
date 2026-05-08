// ==========================================================================
// Essential Contacts API (essentialcontacts v1)
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
  name: "essentialcontacts",
  version: "v1",
  rootUrl: "https://essentialcontacts.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface GoogleCloudEssentialcontactsV1Contact {
  /** Required. The preferred language for notifications, as a ISO 639-1 language code. See [Supported languages](https://cloud.google.com/resource-manager/docs/managing-notification-contacts#supported-languages) for a list of supported languages. */
  languageTag?: string;
  /** Output only. The identifier for the contact. Format: {resource_type}/{resource_id}/contacts/{contact_id} */
  name?: string;
  /** Required. The email address to send notifications to. The email address does not need to be a Google Account. */
  email?: string;
  /** Output only. The validity of the contact. A contact is considered valid if it is the correct recipient for notifications for a particular resource. */
  validationState?:
    | "VALIDATION_STATE_UNSPECIFIED"
    | "VALID"
    | "INVALID"
    | (string & {});
  /** Required. The categories of notifications that the contact will receive communications for. */
  notificationCategorySubscriptions?: ReadonlyArray<
    | "NOTIFICATION_CATEGORY_UNSPECIFIED"
    | "ALL"
    | "SUSPENSION"
    | "SECURITY"
    | "TECHNICAL"
    | "BILLING"
    | "LEGAL"
    | "PRODUCT_UPDATES"
    | "TECHNICAL_INCIDENTS"
    | (string & {})
  >;
  /** Output only. The last time the validation_state was updated, either manually or automatically. A contact is considered stale if its validation state was updated more than 1 year ago. */
  validateTime?: string;
}

export const GoogleCloudEssentialcontactsV1Contact: Schema.Schema<GoogleCloudEssentialcontactsV1Contact> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageTag: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
    validationState: Schema.optional(Schema.String),
    notificationCategorySubscriptions: Schema.optional(
      Schema.Array(Schema.String),
    ),
    validateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudEssentialcontactsV1Contact" });

export interface GoogleCloudEssentialcontactsV1SendTestMessageRequest {
  /** Required. The list of names of the contacts to send a test message to. Format: organizations/{organization}/contacts/{contact}, folders/{folder}/contacts/{contact} or projects/{project}/contacts/{contact} (where {project} is the project number) */
  contacts?: ReadonlyArray<string>;
  /** Required. The notification category to send the test message for. All contacts must be subscribed to this category. */
  notificationCategory?:
    | "NOTIFICATION_CATEGORY_UNSPECIFIED"
    | "ALL"
    | "SUSPENSION"
    | "SECURITY"
    | "TECHNICAL"
    | "BILLING"
    | "LEGAL"
    | "PRODUCT_UPDATES"
    | "TECHNICAL_INCIDENTS"
    | (string & {});
}

export const GoogleCloudEssentialcontactsV1SendTestMessageRequest: Schema.Schema<GoogleCloudEssentialcontactsV1SendTestMessageRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contacts: Schema.optional(Schema.Array(Schema.String)),
    notificationCategory: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudEssentialcontactsV1SendTestMessageRequest",
  });

export interface GoogleProtobufEmpty {}

export const GoogleProtobufEmpty: Schema.Schema<GoogleProtobufEmpty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleProtobufEmpty",
  });

export interface GoogleCloudEssentialcontactsV1ListContactsResponse {
  /** The contacts for the specified resource. */
  contacts?: ReadonlyArray<GoogleCloudEssentialcontactsV1Contact>;
  /** If there are more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token` and the rest of the parameters the same as the original request. */
  nextPageToken?: string;
}

export const GoogleCloudEssentialcontactsV1ListContactsResponse: Schema.Schema<GoogleCloudEssentialcontactsV1ListContactsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contacts: Schema.optional(
      Schema.Array(GoogleCloudEssentialcontactsV1Contact),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudEssentialcontactsV1ListContactsResponse",
  });

export interface GoogleCloudEssentialcontactsV1ComputeContactsResponse {
  /** All contacts for the resource that are subscribed to the specified notification categories, including contacts inherited from any parent resources. */
  contacts?: ReadonlyArray<GoogleCloudEssentialcontactsV1Contact>;
  /** If there are more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token` and the rest of the parameters the same as the original request. */
  nextPageToken?: string;
}

export const GoogleCloudEssentialcontactsV1ComputeContactsResponse: Schema.Schema<GoogleCloudEssentialcontactsV1ComputeContactsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contacts: Schema.optional(
      Schema.Array(GoogleCloudEssentialcontactsV1Contact),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudEssentialcontactsV1ComputeContactsResponse",
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

export interface ComputeFoldersContactsRequest {
  /** Required. The name of the resource to compute contacts for. Format: organizations/{organization}, folders/{folder} or projects/{project} (where {project} is the project number) */
  parent: string;
  /** The categories of notifications to compute contacts for. If ALL is included in this list, contacts subscribed to any notification category will be returned. */
  notificationCategories?:
    | "NOTIFICATION_CATEGORY_UNSPECIFIED"
    | "ALL"
    | "SUSPENSION"
    | "SECURITY"
    | "TECHNICAL"
    | "BILLING"
    | "LEGAL"
    | "PRODUCT_UPDATES"
    | "TECHNICAL_INCIDENTS"
    | (string & {})[];
  /** Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of `next_page_token` in the response indicates that more results might be available. If not specified, the default page_size is 100. */
  pageSize?: number;
  /** Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters should be identical to those in the previous call. */
  pageToken?: string;
}

export const ComputeFoldersContactsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    notificationCategories: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("notificationCategories"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/contacts:compute" }),
    svc,
  ) as unknown as Schema.Schema<ComputeFoldersContactsRequest>;

export type ComputeFoldersContactsResponse =
  GoogleCloudEssentialcontactsV1ComputeContactsResponse;
export const ComputeFoldersContactsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudEssentialcontactsV1ComputeContactsResponse;

export type ComputeFoldersContactsError = DefaultErrors | NotFound | Forbidden;

/** Lists all contacts for the resource that are subscribed to the specified notification categories, including contacts inherited from any parent resources. */
export const computeFoldersContacts: API.PaginatedOperationMethod<
  ComputeFoldersContactsRequest,
  ComputeFoldersContactsResponse,
  ComputeFoldersContactsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ComputeFoldersContactsRequest,
  output: ComputeFoldersContactsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetFoldersContactsRequest {
  /** Required. The name of the contact to retrieve. Format: organizations/{organization}/contacts/{contact}, folders/{folder}/contacts/{contact} or projects/{project}/contacts/{contact} (where {project} is the project number) */
  name: string;
}

export const GetFoldersContactsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetFoldersContactsRequest>;

export type GetFoldersContactsResponse = GoogleCloudEssentialcontactsV1Contact;
export const GetFoldersContactsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudEssentialcontactsV1Contact;

export type GetFoldersContactsError = DefaultErrors | NotFound | Forbidden;

/** Gets a single contact. */
export const getFoldersContacts: API.OperationMethod<
  GetFoldersContactsRequest,
  GetFoldersContactsResponse,
  GetFoldersContactsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetFoldersContactsRequest,
  output: GetFoldersContactsResponse,
  errors: [NotFound, Forbidden],
}));

export interface SendTestMessageFoldersContactsRequest {
  /** Required. The name of the resource to send the test message for. All contacts must either be set directly on this resource or inherited from another resource that is an ancestor of this one. Format: organizations/{organization}, folders/{folder} or projects/{project} (where {project} is the project number) */
  resource: string;
  /** Request body */
  body?: GoogleCloudEssentialcontactsV1SendTestMessageRequest;
}

export const SendTestMessageFoldersContactsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(
      GoogleCloudEssentialcontactsV1SendTestMessageRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}/contacts:sendTestMessage",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SendTestMessageFoldersContactsRequest>;

export type SendTestMessageFoldersContactsResponse = GoogleProtobufEmpty;
export const SendTestMessageFoldersContactsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type SendTestMessageFoldersContactsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Allows a contact admin to send a test message to contact to verify that it has been configured correctly. */
export const sendTestMessageFoldersContacts: API.OperationMethod<
  SendTestMessageFoldersContactsRequest,
  SendTestMessageFoldersContactsResponse,
  SendTestMessageFoldersContactsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SendTestMessageFoldersContactsRequest,
  output: SendTestMessageFoldersContactsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateFoldersContactsRequest {
  /** Required. The resource to save this contact for. Format: organizations/{organization}, folders/{folder} or projects/{project} (where {project} is the project number) */
  parent: string;
  /** Request body */
  body?: GoogleCloudEssentialcontactsV1Contact;
}

export const CreateFoldersContactsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudEssentialcontactsV1Contact).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/contacts", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateFoldersContactsRequest>;

export type CreateFoldersContactsResponse =
  GoogleCloudEssentialcontactsV1Contact;
export const CreateFoldersContactsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudEssentialcontactsV1Contact;

export type CreateFoldersContactsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Adds a new contact for a resource. */
export const createFoldersContacts: API.OperationMethod<
  CreateFoldersContactsRequest,
  CreateFoldersContactsResponse,
  CreateFoldersContactsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateFoldersContactsRequest,
  output: CreateFoldersContactsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteFoldersContactsRequest {
  /** Required. The name of the contact to delete. Format: organizations/{organization}/contacts/{contact}, folders/{folder}/contacts/{contact} or projects/{project}/contacts/{contact} (where {project} is the project number) */
  name: string;
}

export const DeleteFoldersContactsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteFoldersContactsRequest>;

export type DeleteFoldersContactsResponse = GoogleProtobufEmpty;
export const DeleteFoldersContactsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteFoldersContactsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a contact. */
export const deleteFoldersContacts: API.OperationMethod<
  DeleteFoldersContactsRequest,
  DeleteFoldersContactsResponse,
  DeleteFoldersContactsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteFoldersContactsRequest,
  output: DeleteFoldersContactsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchFoldersContactsRequest {
  /** Output only. The identifier for the contact. Format: {resource_type}/{resource_id}/contacts/{contact_id} */
  name: string;
  /** Optional. The update mask applied to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask */
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudEssentialcontactsV1Contact;
}

export const PatchFoldersContactsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudEssentialcontactsV1Contact).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchFoldersContactsRequest>;

export type PatchFoldersContactsResponse =
  GoogleCloudEssentialcontactsV1Contact;
export const PatchFoldersContactsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudEssentialcontactsV1Contact;

export type PatchFoldersContactsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a contact. Note: A contact's email address cannot be changed. */
export const patchFoldersContacts: API.OperationMethod<
  PatchFoldersContactsRequest,
  PatchFoldersContactsResponse,
  PatchFoldersContactsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchFoldersContactsRequest,
  output: PatchFoldersContactsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListFoldersContactsRequest {
  /** Required. The parent resource name. Format: organizations/{organization}, folders/{folder} or projects/{project} (where {project} is the project number) */
  parent: string;
  /** Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of `next_page_token` in the response indicates that more results might be available. If not specified, the default page_size is 100. */
  pageSize?: number;
  /** Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters should be identical to those in the previous call. */
  pageToken?: string;
}

export const ListFoldersContactsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/contacts" }),
    svc,
  ) as unknown as Schema.Schema<ListFoldersContactsRequest>;

export type ListFoldersContactsResponse =
  GoogleCloudEssentialcontactsV1ListContactsResponse;
export const ListFoldersContactsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudEssentialcontactsV1ListContactsResponse;

export type ListFoldersContactsError = DefaultErrors | NotFound | Forbidden;

/** Lists the contacts that have been set on a resource. */
export const listFoldersContacts: API.PaginatedOperationMethod<
  ListFoldersContactsRequest,
  ListFoldersContactsResponse,
  ListFoldersContactsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListFoldersContactsRequest,
  output: ListFoldersContactsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsContactsRequest {
  /** Output only. The identifier for the contact. Format: {resource_type}/{resource_id}/contacts/{contact_id} */
  name: string;
  /** Optional. The update mask applied to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask */
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudEssentialcontactsV1Contact;
}

export const PatchProjectsContactsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudEssentialcontactsV1Contact).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsContactsRequest>;

export type PatchProjectsContactsResponse =
  GoogleCloudEssentialcontactsV1Contact;
export const PatchProjectsContactsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudEssentialcontactsV1Contact;

export type PatchProjectsContactsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a contact. Note: A contact's email address cannot be changed. */
export const patchProjectsContacts: API.OperationMethod<
  PatchProjectsContactsRequest,
  PatchProjectsContactsResponse,
  PatchProjectsContactsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsContactsRequest,
  output: PatchProjectsContactsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsContactsRequest {
  /** Required. The parent resource name. Format: organizations/{organization}, folders/{folder} or projects/{project} (where {project} is the project number) */
  parent: string;
  /** Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of `next_page_token` in the response indicates that more results might be available. If not specified, the default page_size is 100. */
  pageSize?: number;
  /** Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters should be identical to those in the previous call. */
  pageToken?: string;
}

export const ListProjectsContactsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/contacts" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsContactsRequest>;

export type ListProjectsContactsResponse =
  GoogleCloudEssentialcontactsV1ListContactsResponse;
export const ListProjectsContactsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudEssentialcontactsV1ListContactsResponse;

export type ListProjectsContactsError = DefaultErrors | NotFound | Forbidden;

/** Lists the contacts that have been set on a resource. */
export const listProjectsContacts: API.PaginatedOperationMethod<
  ListProjectsContactsRequest,
  ListProjectsContactsResponse,
  ListProjectsContactsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsContactsRequest,
  output: ListProjectsContactsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsContactsRequest {
  /** Required. The name of the contact to delete. Format: organizations/{organization}/contacts/{contact}, folders/{folder}/contacts/{contact} or projects/{project}/contacts/{contact} (where {project} is the project number) */
  name: string;
}

export const DeleteProjectsContactsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsContactsRequest>;

export type DeleteProjectsContactsResponse = GoogleProtobufEmpty;
export const DeleteProjectsContactsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsContactsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a contact. */
export const deleteProjectsContacts: API.OperationMethod<
  DeleteProjectsContactsRequest,
  DeleteProjectsContactsResponse,
  DeleteProjectsContactsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsContactsRequest,
  output: DeleteProjectsContactsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsContactsRequest {
  /** Required. The resource to save this contact for. Format: organizations/{organization}, folders/{folder} or projects/{project} (where {project} is the project number) */
  parent: string;
  /** Request body */
  body?: GoogleCloudEssentialcontactsV1Contact;
}

export const CreateProjectsContactsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudEssentialcontactsV1Contact).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/contacts", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsContactsRequest>;

export type CreateProjectsContactsResponse =
  GoogleCloudEssentialcontactsV1Contact;
export const CreateProjectsContactsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudEssentialcontactsV1Contact;

export type CreateProjectsContactsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Adds a new contact for a resource. */
export const createProjectsContacts: API.OperationMethod<
  CreateProjectsContactsRequest,
  CreateProjectsContactsResponse,
  CreateProjectsContactsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsContactsRequest,
  output: CreateProjectsContactsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SendTestMessageProjectsContactsRequest {
  /** Required. The name of the resource to send the test message for. All contacts must either be set directly on this resource or inherited from another resource that is an ancestor of this one. Format: organizations/{organization}, folders/{folder} or projects/{project} (where {project} is the project number) */
  resource: string;
  /** Request body */
  body?: GoogleCloudEssentialcontactsV1SendTestMessageRequest;
}

export const SendTestMessageProjectsContactsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(
      GoogleCloudEssentialcontactsV1SendTestMessageRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}/contacts:sendTestMessage",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SendTestMessageProjectsContactsRequest>;

export type SendTestMessageProjectsContactsResponse = GoogleProtobufEmpty;
export const SendTestMessageProjectsContactsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type SendTestMessageProjectsContactsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Allows a contact admin to send a test message to contact to verify that it has been configured correctly. */
export const sendTestMessageProjectsContacts: API.OperationMethod<
  SendTestMessageProjectsContactsRequest,
  SendTestMessageProjectsContactsResponse,
  SendTestMessageProjectsContactsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SendTestMessageProjectsContactsRequest,
  output: SendTestMessageProjectsContactsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsContactsRequest {
  /** Required. The name of the contact to retrieve. Format: organizations/{organization}/contacts/{contact}, folders/{folder}/contacts/{contact} or projects/{project}/contacts/{contact} (where {project} is the project number) */
  name: string;
}

export const GetProjectsContactsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsContactsRequest>;

export type GetProjectsContactsResponse = GoogleCloudEssentialcontactsV1Contact;
export const GetProjectsContactsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudEssentialcontactsV1Contact;

export type GetProjectsContactsError = DefaultErrors | NotFound | Forbidden;

/** Gets a single contact. */
export const getProjectsContacts: API.OperationMethod<
  GetProjectsContactsRequest,
  GetProjectsContactsResponse,
  GetProjectsContactsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsContactsRequest,
  output: GetProjectsContactsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ComputeProjectsContactsRequest {
  /** Required. The name of the resource to compute contacts for. Format: organizations/{organization}, folders/{folder} or projects/{project} (where {project} is the project number) */
  parent: string;
  /** The categories of notifications to compute contacts for. If ALL is included in this list, contacts subscribed to any notification category will be returned. */
  notificationCategories?:
    | "NOTIFICATION_CATEGORY_UNSPECIFIED"
    | "ALL"
    | "SUSPENSION"
    | "SECURITY"
    | "TECHNICAL"
    | "BILLING"
    | "LEGAL"
    | "PRODUCT_UPDATES"
    | "TECHNICAL_INCIDENTS"
    | (string & {})[];
  /** Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of `next_page_token` in the response indicates that more results might be available. If not specified, the default page_size is 100. */
  pageSize?: number;
  /** Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters should be identical to those in the previous call. */
  pageToken?: string;
}

export const ComputeProjectsContactsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    notificationCategories: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("notificationCategories"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/contacts:compute" }),
    svc,
  ) as unknown as Schema.Schema<ComputeProjectsContactsRequest>;

export type ComputeProjectsContactsResponse =
  GoogleCloudEssentialcontactsV1ComputeContactsResponse;
export const ComputeProjectsContactsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudEssentialcontactsV1ComputeContactsResponse;

export type ComputeProjectsContactsError = DefaultErrors | NotFound | Forbidden;

/** Lists all contacts for the resource that are subscribed to the specified notification categories, including contacts inherited from any parent resources. */
export const computeProjectsContacts: API.PaginatedOperationMethod<
  ComputeProjectsContactsRequest,
  ComputeProjectsContactsResponse,
  ComputeProjectsContactsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ComputeProjectsContactsRequest,
  output: ComputeProjectsContactsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateOrganizationsContactsRequest {
  /** Required. The resource to save this contact for. Format: organizations/{organization}, folders/{folder} or projects/{project} (where {project} is the project number) */
  parent: string;
  /** Request body */
  body?: GoogleCloudEssentialcontactsV1Contact;
}

export const CreateOrganizationsContactsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudEssentialcontactsV1Contact).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/contacts", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateOrganizationsContactsRequest>;

export type CreateOrganizationsContactsResponse =
  GoogleCloudEssentialcontactsV1Contact;
export const CreateOrganizationsContactsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudEssentialcontactsV1Contact;

export type CreateOrganizationsContactsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Adds a new contact for a resource. */
export const createOrganizationsContacts: API.OperationMethod<
  CreateOrganizationsContactsRequest,
  CreateOrganizationsContactsResponse,
  CreateOrganizationsContactsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateOrganizationsContactsRequest,
  output: CreateOrganizationsContactsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SendTestMessageOrganizationsContactsRequest {
  /** Required. The name of the resource to send the test message for. All contacts must either be set directly on this resource or inherited from another resource that is an ancestor of this one. Format: organizations/{organization}, folders/{folder} or projects/{project} (where {project} is the project number) */
  resource: string;
  /** Request body */
  body?: GoogleCloudEssentialcontactsV1SendTestMessageRequest;
}

export const SendTestMessageOrganizationsContactsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(
      GoogleCloudEssentialcontactsV1SendTestMessageRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+resource}/contacts:sendTestMessage",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SendTestMessageOrganizationsContactsRequest>;

export type SendTestMessageOrganizationsContactsResponse = GoogleProtobufEmpty;
export const SendTestMessageOrganizationsContactsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type SendTestMessageOrganizationsContactsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Allows a contact admin to send a test message to contact to verify that it has been configured correctly. */
export const sendTestMessageOrganizationsContacts: API.OperationMethod<
  SendTestMessageOrganizationsContactsRequest,
  SendTestMessageOrganizationsContactsResponse,
  SendTestMessageOrganizationsContactsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SendTestMessageOrganizationsContactsRequest,
  output: SendTestMessageOrganizationsContactsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetOrganizationsContactsRequest {
  /** Required. The name of the contact to retrieve. Format: organizations/{organization}/contacts/{contact}, folders/{folder}/contacts/{contact} or projects/{project}/contacts/{contact} (where {project} is the project number) */
  name: string;
}

export const GetOrganizationsContactsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsContactsRequest>;

export type GetOrganizationsContactsResponse =
  GoogleCloudEssentialcontactsV1Contact;
export const GetOrganizationsContactsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudEssentialcontactsV1Contact;

export type GetOrganizationsContactsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a single contact. */
export const getOrganizationsContacts: API.OperationMethod<
  GetOrganizationsContactsRequest,
  GetOrganizationsContactsResponse,
  GetOrganizationsContactsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationsContactsRequest,
  output: GetOrganizationsContactsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ComputeOrganizationsContactsRequest {
  /** Required. The name of the resource to compute contacts for. Format: organizations/{organization}, folders/{folder} or projects/{project} (where {project} is the project number) */
  parent: string;
  /** The categories of notifications to compute contacts for. If ALL is included in this list, contacts subscribed to any notification category will be returned. */
  notificationCategories?:
    | "NOTIFICATION_CATEGORY_UNSPECIFIED"
    | "ALL"
    | "SUSPENSION"
    | "SECURITY"
    | "TECHNICAL"
    | "BILLING"
    | "LEGAL"
    | "PRODUCT_UPDATES"
    | "TECHNICAL_INCIDENTS"
    | (string & {})[];
  /** Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of `next_page_token` in the response indicates that more results might be available. If not specified, the default page_size is 100. */
  pageSize?: number;
  /** Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters should be identical to those in the previous call. */
  pageToken?: string;
}

export const ComputeOrganizationsContactsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    notificationCategories: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("notificationCategories"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/contacts:compute" }),
    svc,
  ) as unknown as Schema.Schema<ComputeOrganizationsContactsRequest>;

export type ComputeOrganizationsContactsResponse =
  GoogleCloudEssentialcontactsV1ComputeContactsResponse;
export const ComputeOrganizationsContactsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudEssentialcontactsV1ComputeContactsResponse;

export type ComputeOrganizationsContactsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all contacts for the resource that are subscribed to the specified notification categories, including contacts inherited from any parent resources. */
export const computeOrganizationsContacts: API.PaginatedOperationMethod<
  ComputeOrganizationsContactsRequest,
  ComputeOrganizationsContactsResponse,
  ComputeOrganizationsContactsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ComputeOrganizationsContactsRequest,
  output: ComputeOrganizationsContactsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchOrganizationsContactsRequest {
  /** Output only. The identifier for the contact. Format: {resource_type}/{resource_id}/contacts/{contact_id} */
  name: string;
  /** Optional. The update mask applied to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask */
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudEssentialcontactsV1Contact;
}

export const PatchOrganizationsContactsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudEssentialcontactsV1Contact).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchOrganizationsContactsRequest>;

export type PatchOrganizationsContactsResponse =
  GoogleCloudEssentialcontactsV1Contact;
export const PatchOrganizationsContactsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudEssentialcontactsV1Contact;

export type PatchOrganizationsContactsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a contact. Note: A contact's email address cannot be changed. */
export const patchOrganizationsContacts: API.OperationMethod<
  PatchOrganizationsContactsRequest,
  PatchOrganizationsContactsResponse,
  PatchOrganizationsContactsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchOrganizationsContactsRequest,
  output: PatchOrganizationsContactsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOrganizationsContactsRequest {
  /** Required. The parent resource name. Format: organizations/{organization}, folders/{folder} or projects/{project} (where {project} is the project number) */
  parent: string;
  /** Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of `next_page_token` in the response indicates that more results might be available. If not specified, the default page_size is 100. */
  pageSize?: number;
  /** Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters should be identical to those in the previous call. */
  pageToken?: string;
}

export const ListOrganizationsContactsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/contacts" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsContactsRequest>;

export type ListOrganizationsContactsResponse =
  GoogleCloudEssentialcontactsV1ListContactsResponse;
export const ListOrganizationsContactsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudEssentialcontactsV1ListContactsResponse;

export type ListOrganizationsContactsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the contacts that have been set on a resource. */
export const listOrganizationsContacts: API.PaginatedOperationMethod<
  ListOrganizationsContactsRequest,
  ListOrganizationsContactsResponse,
  ListOrganizationsContactsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsContactsRequest,
  output: ListOrganizationsContactsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteOrganizationsContactsRequest {
  /** Required. The name of the contact to delete. Format: organizations/{organization}/contacts/{contact}, folders/{folder}/contacts/{contact} or projects/{project}/contacts/{contact} (where {project} is the project number) */
  name: string;
}

export const DeleteOrganizationsContactsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteOrganizationsContactsRequest>;

export type DeleteOrganizationsContactsResponse = GoogleProtobufEmpty;
export const DeleteOrganizationsContactsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteOrganizationsContactsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a contact. */
export const deleteOrganizationsContacts: API.OperationMethod<
  DeleteOrganizationsContactsRequest,
  DeleteOrganizationsContactsResponse,
  DeleteOrganizationsContactsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteOrganizationsContactsRequest,
  output: DeleteOrganizationsContactsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
