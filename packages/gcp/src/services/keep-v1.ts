// ==========================================================================
// Google Keep API (keep v1)
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
  name: "keep",
  version: "v1",
  rootUrl: "https://keep.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface User {
  /** The user's email. */
  email?: string;
}

export const User: Schema.Schema<User> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email: Schema.optional(Schema.String),
  }).annotate({ identifier: "User" });

export interface TextContent {
  /** The text of the note. The limits on this vary with the specific field using this type. */
  text?: string;
}

export const TextContent: Schema.Schema<TextContent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
  }).annotate({ identifier: "TextContent" });

export interface ListItem {
  /** If set, list of list items nested under this list item. Only one level of nesting is allowed. */
  childListItems?: ReadonlyArray<ListItem>;
  /** The text of this item. Length must be less than 1,000 characters. */
  text?: TextContent;
  /** Whether this item has been checked off or not. */
  checked?: boolean;
}

export const ListItem: Schema.Schema<ListItem> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      childListItems: Schema.optional(Schema.Array(ListItem)),
      text: Schema.optional(TextContent),
      checked: Schema.optional(Schema.Boolean),
    }),
  ).annotate({ identifier: "ListItem" }) as any as Schema.Schema<ListItem>;

export interface ListContent {
  /** The items in the list. The number of items must be less than 1,000. */
  listItems?: ReadonlyArray<ListItem>;
}

export const ListContent: Schema.Schema<ListContent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    listItems: Schema.optional(Schema.Array(ListItem)),
  }).annotate({ identifier: "ListContent" });

export interface Section {
  /** Used if this section's content is a block of text. The length of the text content must be less than 20,000 characters. */
  text?: TextContent;
  /** Used if this section's content is a list. */
  list?: ListContent;
}

export const Section: Schema.Schema<Section> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(TextContent),
    list: Schema.optional(ListContent),
  }).annotate({ identifier: "Section" });

export interface Group {
  /** The group email. */
  email?: string;
}

export const Group: Schema.Schema<Group> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email: Schema.optional(Schema.String),
  }).annotate({ identifier: "Group" });

export interface Family {}

export const Family: Schema.Schema<Family> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Family",
  });

export interface Permission {
  /** Output only. The user to whom this role applies. */
  user?: User;
  /** Output only. Whether this member has been deleted. If the member is recovered, this value is set to false and the recovered member retains the role on the note. */
  deleted?: boolean;
  /** The email associated with the member. If set on create, the `email` field in the `User` or `Group` message must either be empty or match this field. On read, may be unset if the member does not have an associated email. */
  email?: string;
  /** Output only. The Google Family to which this role applies. */
  family?: Family;
  /** Output only. The resource name. */
  name?: string;
  /** Output only. The group to which this role applies. */
  group?: Group;
  /** The role granted by this permission. The role determines the entity’s ability to read, write, and share notes. */
  role?: "ROLE_UNSPECIFIED" | "OWNER" | "WRITER" | (string & {});
}

export const Permission: Schema.Schema<Permission> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    user: Schema.optional(User),
    deleted: Schema.optional(Schema.Boolean),
    email: Schema.optional(Schema.String),
    family: Schema.optional(Family),
    name: Schema.optional(Schema.String),
    group: Schema.optional(Group),
    role: Schema.optional(Schema.String),
  }).annotate({ identifier: "Permission" });

export interface CreatePermissionRequest {
  /** Required. The parent note where this permission will be created. Format: `notes/{note}` */
  parent?: string;
  /** Required. The permission to create. One of Permission.email, User.email or Group.email must be supplied. */
  permission?: Permission;
}

export const CreatePermissionRequest: Schema.Schema<CreatePermissionRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.optional(Schema.String),
    permission: Schema.optional(Permission),
  }).annotate({ identifier: "CreatePermissionRequest" });

export interface BatchDeletePermissionsRequest {
  /** Required. The names of the permissions to delete. Format: `notes/{note}/permissions/{permission}` */
  names?: ReadonlyArray<string>;
}

export const BatchDeletePermissionsRequest: Schema.Schema<BatchDeletePermissionsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    names: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "BatchDeletePermissionsRequest" });

export interface BatchCreatePermissionsResponse {
  /** Permissions created. */
  permissions?: ReadonlyArray<Permission>;
}

export const BatchCreatePermissionsResponse: Schema.Schema<BatchCreatePermissionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Permission)),
  }).annotate({ identifier: "BatchCreatePermissionsResponse" });

export interface Attachment {
  /** The resource name; */
  name?: string;
  /** The MIME types (IANA media types) in which the attachment is available. */
  mimeType?: ReadonlyArray<string>;
}

export const Attachment: Schema.Schema<Attachment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    mimeType: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Attachment" });

export interface BatchCreatePermissionsRequest {
  /** The request message specifying the resources to create. */
  requests?: ReadonlyArray<CreatePermissionRequest>;
}

export const BatchCreatePermissionsRequest: Schema.Schema<BatchCreatePermissionsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requests: Schema.optional(Schema.Array(CreatePermissionRequest)),
  }).annotate({ identifier: "BatchCreatePermissionsRequest" });

export interface Note {
  /** Output only. When this note was created. */
  createTime?: string;
  /** The title of the note. Length must be less than 1,000 characters. */
  title?: string;
  /** The body of the note. */
  body?: Section;
  /** Output only. The list of permissions set on the note. Contains at least one entry for the note owner. */
  permissions?: ReadonlyArray<Permission>;
  /** Output only. When this note was last modified. */
  updateTime?: string;
  /** Output only. The resource name of this note. See general note on identifiers in KeepService. */
  name?: string;
  /** Output only. `true` if this note has been trashed. If trashed, the note is eventually deleted. */
  trashed?: boolean;
  /** Output only. When this note was trashed. If `trashed`, the note is eventually deleted. If the note is not trashed, this field is not set (and the trashed field is `false`). */
  trashTime?: string;
  /** Output only. The attachments attached to this note. */
  attachments?: ReadonlyArray<Attachment>;
}

export const Note: Schema.Schema<Note> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    body: Schema.optional(Section),
    permissions: Schema.optional(Schema.Array(Permission)),
    updateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    trashed: Schema.optional(Schema.Boolean),
    trashTime: Schema.optional(Schema.String),
    attachments: Schema.optional(Schema.Array(Attachment)),
  }).annotate({ identifier: "Note" });

export interface ListNotesResponse {
  /** A page of notes. */
  notes?: ReadonlyArray<Note>;
  /** Next page's `page_token` field. */
  nextPageToken?: string;
}

export const ListNotesResponse: Schema.Schema<ListNotesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    notes: Schema.optional(Schema.Array(Note)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListNotesResponse" });

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

export interface CreateNotesRequest {
  /** Request body */
  body?: Note;
}

export const CreateNotesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  body: Schema.optional(Note).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "v1/notes", hasBody: true }),
  svc,
) as unknown as Schema.Schema<CreateNotesRequest>;

export type CreateNotesResponse = Note;
export const CreateNotesResponse = /*@__PURE__*/ /*#__PURE__*/ Note;

export type CreateNotesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new note. */
export const createNotes: API.OperationMethod<
  CreateNotesRequest,
  CreateNotesResponse,
  CreateNotesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateNotesRequest,
  output: CreateNotesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListNotesRequest {
  /** Filter for list results. If no filter is supplied, the `trashed` filter is applied by default. Valid fields to filter by are: `create_time`, `update_time`, `trash_time`, and `trashed`. Filter syntax follows the [Google AIP filtering spec](https://aip.dev/160). */
  filter?: string;
  /** The maximum number of results to return. */
  pageSize?: number;
  /** The previous page's `next_page_token` field. */
  pageToken?: string;
}

export const ListNotesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
}).pipe(
  T.Http({ method: "GET", path: "v1/notes" }),
  svc,
) as unknown as Schema.Schema<ListNotesRequest>;

export type ListNotesResponse_Op = ListNotesResponse;
export const ListNotesResponse_Op =
  /*@__PURE__*/ /*#__PURE__*/ ListNotesResponse;

export type ListNotesError = DefaultErrors | NotFound | Forbidden;

/** Lists notes. Every list call returns a page of results with `page_size` as the upper bound of returned items. A `page_size` of zero allows the server to choose the upper bound. The ListNotesResponse contains at most `page_size` entries. If there are more things left to list, it provides a `next_page_token` value. (Page tokens are opaque values.) To get the next page of results, copy the result's `next_page_token` into the next request's `page_token`. Repeat until the `next_page_token` returned with a page of results is empty. ListNotes return consistent results in the face of concurrent changes, or signals that it cannot with an ABORTED error. */
export const listNotes: API.PaginatedOperationMethod<
  ListNotesRequest,
  ListNotesResponse_Op,
  ListNotesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListNotesRequest,
  output: ListNotesResponse_Op,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetNotesRequest {
  /** Required. Name of the resource. */
  name: string;
}

export const GetNotesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.HttpPath("name")),
}).pipe(
  T.Http({ method: "GET", path: "v1/{+name}" }),
  svc,
) as unknown as Schema.Schema<GetNotesRequest>;

export type GetNotesResponse = Note;
export const GetNotesResponse = /*@__PURE__*/ /*#__PURE__*/ Note;

export type GetNotesError = DefaultErrors | NotFound | Forbidden;

/** Gets a note. */
export const getNotes: API.OperationMethod<
  GetNotesRequest,
  GetNotesResponse,
  GetNotesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetNotesRequest,
  output: GetNotesResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteNotesRequest {
  /** Required. Name of the note to delete. */
  name: string;
}

export const DeleteNotesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.HttpPath("name")),
}).pipe(
  T.Http({ method: "DELETE", path: "v1/{+name}" }),
  svc,
) as unknown as Schema.Schema<DeleteNotesRequest>;

export type DeleteNotesResponse = Empty;
export const DeleteNotesResponse = /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteNotesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a note. Caller must have the `OWNER` role on the note to delete. Deleting a note removes the resource immediately and cannot be undone. Any collaborators will lose access to the note. */
export const deleteNotes: API.OperationMethod<
  DeleteNotesRequest,
  DeleteNotesResponse,
  DeleteNotesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteNotesRequest,
  output: DeleteNotesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface BatchDeleteNotesPermissionsRequest {
  /** The parent resource shared by all permissions being deleted. Format: `notes/{note}` If this is set, the parent of all of the permissions specified in the DeletePermissionRequest messages must match this field. */
  parent: string;
  /** Request body */
  body?: BatchDeletePermissionsRequest;
}

export const BatchDeleteNotesPermissionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(BatchDeletePermissionsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/permissions:batchDelete",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchDeleteNotesPermissionsRequest>;

export type BatchDeleteNotesPermissionsResponse = Empty;
export const BatchDeleteNotesPermissionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type BatchDeleteNotesPermissionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes one or more permissions on the note. The specified entities will immediately lose access. A permission with the `OWNER` role can't be removed. If removing a permission fails, then the entire request fails and no changes are made. Returns a 400 bad request error if a specified permission does not exist on the note. */
export const batchDeleteNotesPermissions: API.OperationMethod<
  BatchDeleteNotesPermissionsRequest,
  BatchDeleteNotesPermissionsResponse,
  BatchDeleteNotesPermissionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchDeleteNotesPermissionsRequest,
  output: BatchDeleteNotesPermissionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface BatchCreateNotesPermissionsRequest {
  /** The parent resource shared by all Permissions being created. Format: `notes/{note}` If this is set, the parent field in the CreatePermission messages must either be empty or match this field. */
  parent: string;
  /** Request body */
  body?: BatchCreatePermissionsRequest;
}

export const BatchCreateNotesPermissionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(BatchCreatePermissionsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/permissions:batchCreate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchCreateNotesPermissionsRequest>;

export type BatchCreateNotesPermissionsResponse =
  BatchCreatePermissionsResponse;
export const BatchCreateNotesPermissionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ BatchCreatePermissionsResponse;

export type BatchCreateNotesPermissionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates one or more permissions on the note. Only permissions with the `WRITER` role may be created. If adding any permission fails, then the entire request fails and no changes are made. */
export const batchCreateNotesPermissions: API.OperationMethod<
  BatchCreateNotesPermissionsRequest,
  BatchCreateNotesPermissionsResponse,
  BatchCreateNotesPermissionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchCreateNotesPermissionsRequest,
  output: BatchCreateNotesPermissionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DownloadMediaRequest {
  /** Required. The name of the attachment. */
  name: string;
  /** The IANA MIME type format requested. The requested MIME type must be one specified in the attachment.mime_type. Required when downloading attachment media and ignored otherwise. */
  mimeType?: string;
}

export const DownloadMediaRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.HttpPath("name")),
  mimeType: Schema.optional(Schema.String).pipe(T.HttpQuery("mimeType")),
}).pipe(
  T.Http({ method: "GET", path: "v1/{+name}" }),
  svc,
) as unknown as Schema.Schema<DownloadMediaRequest>;

export type DownloadMediaResponse = Attachment;
export const DownloadMediaResponse = /*@__PURE__*/ /*#__PURE__*/ Attachment;

export type DownloadMediaError = DefaultErrors | NotFound | Forbidden;

/** Gets an attachment. To download attachment media via REST requires the alt=media query parameter. Returns a 400 bad request error if attachment media is not available in the requested MIME type. */
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
