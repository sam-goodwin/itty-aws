// ==========================================================================
// Advisory Notifications API (advisorynotifications v1)
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
  name: "advisorynotifications",
  version: "v1",
  rootUrl: "https://advisorynotifications.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface GoogleCloudAdvisorynotificationsV1Text {
  /** The English copy. */
  enText?: string;
  /** The requested localized copy (if applicable). */
  localizedText?: string;
  /** Status of the localization. */
  localizationState?:
    | "LOCALIZATION_STATE_UNSPECIFIED"
    | "LOCALIZATION_STATE_NOT_APPLICABLE"
    | "LOCALIZATION_STATE_PENDING"
    | "LOCALIZATION_STATE_COMPLETED"
    | (string & {});
}

export const GoogleCloudAdvisorynotificationsV1Text: Schema.Schema<GoogleCloudAdvisorynotificationsV1Text> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enText: Schema.optional(Schema.String),
    localizedText: Schema.optional(Schema.String),
    localizationState: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudAdvisorynotificationsV1Text" });

export interface GoogleCloudAdvisorynotificationsV1MessageBody {
  /** The text content of the message body. */
  text?: GoogleCloudAdvisorynotificationsV1Text;
}

export const GoogleCloudAdvisorynotificationsV1MessageBody: Schema.Schema<GoogleCloudAdvisorynotificationsV1MessageBody> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(GoogleCloudAdvisorynotificationsV1Text),
  }).annotate({ identifier: "GoogleCloudAdvisorynotificationsV1MessageBody" });

export interface GoogleCloudAdvisorynotificationsV1CsvCsvRow {
  /** The data entries in a CSV file row, as a string array rather than a single comma-separated string. */
  entries?: ReadonlyArray<string>;
}

export const GoogleCloudAdvisorynotificationsV1CsvCsvRow: Schema.Schema<GoogleCloudAdvisorynotificationsV1CsvCsvRow> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entries: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudAdvisorynotificationsV1CsvCsvRow" });

export interface GoogleCloudAdvisorynotificationsV1Csv {
  /** The list of data rows in a CSV file, as string arrays rather than as a single comma-separated string. */
  dataRows?: ReadonlyArray<GoogleCloudAdvisorynotificationsV1CsvCsvRow>;
  /** The list of headers for data columns in a CSV file. */
  headers?: ReadonlyArray<string>;
}

export const GoogleCloudAdvisorynotificationsV1Csv: Schema.Schema<GoogleCloudAdvisorynotificationsV1Csv> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataRows: Schema.optional(
      Schema.Array(GoogleCloudAdvisorynotificationsV1CsvCsvRow),
    ),
    headers: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudAdvisorynotificationsV1Csv" });

export interface GoogleCloudAdvisorynotificationsV1Attachment {
  /** The title of the attachment. */
  displayName?: string;
  /** A CSV file attachment. Max size is 10 MB. */
  csv?: GoogleCloudAdvisorynotificationsV1Csv;
}

export const GoogleCloudAdvisorynotificationsV1Attachment: Schema.Schema<GoogleCloudAdvisorynotificationsV1Attachment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    csv: Schema.optional(GoogleCloudAdvisorynotificationsV1Csv),
  }).annotate({ identifier: "GoogleCloudAdvisorynotificationsV1Attachment" });

export interface GoogleCloudAdvisorynotificationsV1Message {
  /** The message content. */
  body?: GoogleCloudAdvisorynotificationsV1MessageBody;
  /** The attachments to download. */
  attachments?: ReadonlyArray<GoogleCloudAdvisorynotificationsV1Attachment>;
  /** The Message creation timestamp. */
  createTime?: string;
  /** Time when Message was localized */
  localizationTime?: string;
}

export const GoogleCloudAdvisorynotificationsV1Message: Schema.Schema<GoogleCloudAdvisorynotificationsV1Message> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(GoogleCloudAdvisorynotificationsV1MessageBody),
    attachments: Schema.optional(
      Schema.Array(GoogleCloudAdvisorynotificationsV1Attachment),
    ),
    createTime: Schema.optional(Schema.String),
    localizationTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudAdvisorynotificationsV1Message" });

export interface GoogleCloudAdvisorynotificationsV1Subject {
  /** The text content. */
  text?: GoogleCloudAdvisorynotificationsV1Text;
}

export const GoogleCloudAdvisorynotificationsV1Subject: Schema.Schema<GoogleCloudAdvisorynotificationsV1Subject> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(GoogleCloudAdvisorynotificationsV1Text),
  }).annotate({ identifier: "GoogleCloudAdvisorynotificationsV1Subject" });

export interface GoogleCloudAdvisorynotificationsV1Notification {
  /** A list of messages in the notification. */
  messages?: ReadonlyArray<GoogleCloudAdvisorynotificationsV1Message>;
  /** Output only. Time the notification was created. */
  createTime?: string;
  /** The resource name of the notification. Format: organizations/{organization}/locations/{location}/notifications/{notification} or projects/{project}/locations/{location}/notifications/{notification}. */
  name?: string;
  /** Type of notification */
  notificationType?:
    | "NOTIFICATION_TYPE_UNSPECIFIED"
    | "NOTIFICATION_TYPE_SECURITY_PRIVACY_ADVISORY"
    | "NOTIFICATION_TYPE_SENSITIVE_ACTIONS"
    | "NOTIFICATION_TYPE_SECURITY_MSA"
    | "NOTIFICATION_TYPE_THREAT_HORIZONS"
    | (string & {});
  /** The subject line of the notification. */
  subject?: GoogleCloudAdvisorynotificationsV1Subject;
}

export const GoogleCloudAdvisorynotificationsV1Notification: Schema.Schema<GoogleCloudAdvisorynotificationsV1Notification> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    messages: Schema.optional(
      Schema.Array(GoogleCloudAdvisorynotificationsV1Message),
    ),
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    notificationType: Schema.optional(Schema.String),
    subject: Schema.optional(GoogleCloudAdvisorynotificationsV1Subject),
  }).annotate({ identifier: "GoogleCloudAdvisorynotificationsV1Notification" });

export interface GoogleCloudAdvisorynotificationsV1NotificationSettings {
  /** Whether the associated NotificationType is enabled. */
  enabled?: boolean;
}

export const GoogleCloudAdvisorynotificationsV1NotificationSettings: Schema.Schema<GoogleCloudAdvisorynotificationsV1NotificationSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudAdvisorynotificationsV1NotificationSettings",
  });

export interface GoogleCloudAdvisorynotificationsV1Settings {
  /** Identifier. The resource name of the settings to retrieve. Format: organizations/{organization}/locations/{location}/settings or projects/{projects}/locations/{location}/settings. */
  name?: string;
  /** Required. Map of each notification type and its settings to get/set all settings at once. The server will validate the value for each notification type. */
  notificationSettings?: Record<
    string,
    GoogleCloudAdvisorynotificationsV1NotificationSettings
  >;
  /** Required. Fingerprint for optimistic concurrency returned in Get requests. Must be provided for Update requests. If the value provided does not match the value known to the server, ABORTED will be thrown, and the client should retry the read-modify-write cycle. */
  etag?: string;
}

export const GoogleCloudAdvisorynotificationsV1Settings: Schema.Schema<GoogleCloudAdvisorynotificationsV1Settings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    notificationSettings: Schema.optional(
      Schema.Record(
        Schema.String,
        GoogleCloudAdvisorynotificationsV1NotificationSettings,
      ),
    ),
    etag: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudAdvisorynotificationsV1Settings" });

export interface GoogleCloudAdvisorynotificationsV1ListNotificationsResponse {
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** Estimation of a total number of notifications. */
  totalSize?: number;
  /** List of notifications under a given parent. */
  notifications?: ReadonlyArray<GoogleCloudAdvisorynotificationsV1Notification>;
}

export const GoogleCloudAdvisorynotificationsV1ListNotificationsResponse: Schema.Schema<GoogleCloudAdvisorynotificationsV1ListNotificationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    totalSize: Schema.optional(Schema.Number),
    notifications: Schema.optional(
      Schema.Array(GoogleCloudAdvisorynotificationsV1Notification),
    ),
  }).annotate({
    identifier: "GoogleCloudAdvisorynotificationsV1ListNotificationsResponse",
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

export interface GetSettingsOrganizationsLocationsRequest {
  /** Required. The resource name of the settings to retrieve. Format: organizations/{organization}/locations/{location}/settings or projects/{projects}/locations/{location}/settings. */
  name: string;
}

export const GetSettingsOrganizationsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetSettingsOrganizationsLocationsRequest>;

export type GetSettingsOrganizationsLocationsResponse =
  GoogleCloudAdvisorynotificationsV1Settings;
export const GetSettingsOrganizationsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudAdvisorynotificationsV1Settings;

export type GetSettingsOrganizationsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get notification settings. */
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
  /** Identifier. The resource name of the settings to retrieve. Format: organizations/{organization}/locations/{location}/settings or projects/{projects}/locations/{location}/settings. */
  name: string;
  /** Request body */
  body?: GoogleCloudAdvisorynotificationsV1Settings;
}

export const UpdateSettingsOrganizationsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudAdvisorynotificationsV1Settings).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateSettingsOrganizationsLocationsRequest>;

export type UpdateSettingsOrganizationsLocationsResponse =
  GoogleCloudAdvisorynotificationsV1Settings;
export const UpdateSettingsOrganizationsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudAdvisorynotificationsV1Settings;

export type UpdateSettingsOrganizationsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update notification settings. */
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

export interface ListOrganizationsLocationsNotificationsRequest {
  /** ISO code for requested localization language. If unset, will be interpereted as "en". If the requested language is valid, but not supported for this notification, English will be returned with an "Not applicable" LocalizationState. If the ISO code is invalid (i.e. not a real language), this RPC will throw an error. */
  languageCode?: string;
  /** Required. The parent, which owns this collection of notifications. Must be of the form "organizations/{organization}/locations/{location}" or "projects/{project}/locations/{location}". */
  parent: string;
  /** The maximum number of notifications to return. The service may return fewer than this value. If unspecified or equal to 0, at most 50 notifications will be returned. The maximum value is 50; values above 50 will be coerced to 50. */
  pageSize?: number;
  /** A page token returned from a previous request. When paginating, all other parameters provided in the request must match the call that returned the page token. */
  pageToken?: string;
  /** Specifies which parts of the notification resource should be returned in the response. */
  view?: "NOTIFICATION_VIEW_UNSPECIFIED" | "BASIC" | "FULL" | (string & {});
}

export const ListOrganizationsLocationsNotificationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/notifications" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsLocationsNotificationsRequest>;

export type ListOrganizationsLocationsNotificationsResponse =
  GoogleCloudAdvisorynotificationsV1ListNotificationsResponse;
export const ListOrganizationsLocationsNotificationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudAdvisorynotificationsV1ListNotificationsResponse;

export type ListOrganizationsLocationsNotificationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists notifications under a given parent. */
export const listOrganizationsLocationsNotifications: API.PaginatedOperationMethod<
  ListOrganizationsLocationsNotificationsRequest,
  ListOrganizationsLocationsNotificationsResponse,
  ListOrganizationsLocationsNotificationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsLocationsNotificationsRequest,
  output: ListOrganizationsLocationsNotificationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetOrganizationsLocationsNotificationsRequest {
  /** ISO code for requested localization language. If unset, will be interpereted as "en". If the requested language is valid, but not supported for this notification, English will be returned with an "Not applicable" LocalizationState. If the ISO code is invalid (i.e. not a real language), this RPC will throw an error. */
  languageCode?: string;
  /** Required. A name of the notification to retrieve. Format: organizations/{organization}/locations/{location}/notifications/{notification} or projects/{projects}/locations/{location}/notifications/{notification}. */
  name: string;
}

export const GetOrganizationsLocationsNotificationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsLocationsNotificationsRequest>;

export type GetOrganizationsLocationsNotificationsResponse =
  GoogleCloudAdvisorynotificationsV1Notification;
export const GetOrganizationsLocationsNotificationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudAdvisorynotificationsV1Notification;

export type GetOrganizationsLocationsNotificationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a notification. */
export const getOrganizationsLocationsNotifications: API.OperationMethod<
  GetOrganizationsLocationsNotificationsRequest,
  GetOrganizationsLocationsNotificationsResponse,
  GetOrganizationsLocationsNotificationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationsLocationsNotificationsRequest,
  output: GetOrganizationsLocationsNotificationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetSettingsProjectsLocationsRequest {
  /** Required. The resource name of the settings to retrieve. Format: organizations/{organization}/locations/{location}/settings or projects/{projects}/locations/{location}/settings. */
  name: string;
}

export const GetSettingsProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetSettingsProjectsLocationsRequest>;

export type GetSettingsProjectsLocationsResponse =
  GoogleCloudAdvisorynotificationsV1Settings;
export const GetSettingsProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudAdvisorynotificationsV1Settings;

export type GetSettingsProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get notification settings. */
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
  /** Identifier. The resource name of the settings to retrieve. Format: organizations/{organization}/locations/{location}/settings or projects/{projects}/locations/{location}/settings. */
  name: string;
  /** Request body */
  body?: GoogleCloudAdvisorynotificationsV1Settings;
}

export const UpdateSettingsProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudAdvisorynotificationsV1Settings).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateSettingsProjectsLocationsRequest>;

export type UpdateSettingsProjectsLocationsResponse =
  GoogleCloudAdvisorynotificationsV1Settings;
export const UpdateSettingsProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudAdvisorynotificationsV1Settings;

export type UpdateSettingsProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update notification settings. */
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

export interface ListProjectsLocationsNotificationsRequest {
  /** Required. The parent, which owns this collection of notifications. Must be of the form "organizations/{organization}/locations/{location}" or "projects/{project}/locations/{location}". */
  parent: string;
  /** The maximum number of notifications to return. The service may return fewer than this value. If unspecified or equal to 0, at most 50 notifications will be returned. The maximum value is 50; values above 50 will be coerced to 50. */
  pageSize?: number;
  /** A page token returned from a previous request. When paginating, all other parameters provided in the request must match the call that returned the page token. */
  pageToken?: string;
  /** ISO code for requested localization language. If unset, will be interpereted as "en". If the requested language is valid, but not supported for this notification, English will be returned with an "Not applicable" LocalizationState. If the ISO code is invalid (i.e. not a real language), this RPC will throw an error. */
  languageCode?: string;
  /** Specifies which parts of the notification resource should be returned in the response. */
  view?: "NOTIFICATION_VIEW_UNSPECIFIED" | "BASIC" | "FULL" | (string & {});
}

export const ListProjectsLocationsNotificationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/notifications" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsNotificationsRequest>;

export type ListProjectsLocationsNotificationsResponse =
  GoogleCloudAdvisorynotificationsV1ListNotificationsResponse;
export const ListProjectsLocationsNotificationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudAdvisorynotificationsV1ListNotificationsResponse;

export type ListProjectsLocationsNotificationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists notifications under a given parent. */
export const listProjectsLocationsNotifications: API.PaginatedOperationMethod<
  ListProjectsLocationsNotificationsRequest,
  ListProjectsLocationsNotificationsResponse,
  ListProjectsLocationsNotificationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsNotificationsRequest,
  output: ListProjectsLocationsNotificationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsNotificationsRequest {
  /** Required. A name of the notification to retrieve. Format: organizations/{organization}/locations/{location}/notifications/{notification} or projects/{projects}/locations/{location}/notifications/{notification}. */
  name: string;
  /** ISO code for requested localization language. If unset, will be interpereted as "en". If the requested language is valid, but not supported for this notification, English will be returned with an "Not applicable" LocalizationState. If the ISO code is invalid (i.e. not a real language), this RPC will throw an error. */
  languageCode?: string;
}

export const GetProjectsLocationsNotificationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsNotificationsRequest>;

export type GetProjectsLocationsNotificationsResponse =
  GoogleCloudAdvisorynotificationsV1Notification;
export const GetProjectsLocationsNotificationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudAdvisorynotificationsV1Notification;

export type GetProjectsLocationsNotificationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a notification. */
export const getProjectsLocationsNotifications: API.OperationMethod<
  GetProjectsLocationsNotificationsRequest,
  GetProjectsLocationsNotificationsResponse,
  GetProjectsLocationsNotificationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsNotificationsRequest,
  output: GetProjectsLocationsNotificationsResponse,
  errors: [NotFound, Forbidden],
}));
