// ==========================================================================
// Web Search Indexing API (indexing v3)
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
  name: "indexing",
  version: "v3",
  rootUrl: "https://indexing.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface UrlNotification {
  /** Creation timestamp for this notification. Users should _not_ specify it, the field is ignored at the request time. */
  notifyTime?: string;
  /** The object of this notification. The URL must be owned by the publisher of this notification and, in case of `URL_UPDATED` notifications, it _must_ be crawlable by Google. */
  url?: string;
  /** The URL life cycle event that Google is being notified about. */
  type?:
    | "URL_NOTIFICATION_TYPE_UNSPECIFIED"
    | "URL_UPDATED"
    | "URL_DELETED"
    | (string & {});
}

export const UrlNotification: Schema.Schema<UrlNotification> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    notifyTime: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "UrlNotification" });

export interface UrlNotificationMetadata {
  /** URL to which this metadata refers. */
  url?: string;
  /** Latest notification received with type `URL_REMOVED`. */
  latestRemove?: UrlNotification;
  /** Latest notification received with type `URL_UPDATED`. */
  latestUpdate?: UrlNotification;
}

export const UrlNotificationMetadata: Schema.Schema<UrlNotificationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.optional(Schema.String),
    latestRemove: Schema.optional(UrlNotification),
    latestUpdate: Schema.optional(UrlNotification),
  }).annotate({ identifier: "UrlNotificationMetadata" });

export interface PublishUrlNotificationResponse {
  /** Description of the notification events received for this URL. */
  urlNotificationMetadata?: UrlNotificationMetadata;
}

export const PublishUrlNotificationResponse: Schema.Schema<PublishUrlNotificationResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    urlNotificationMetadata: Schema.optional(UrlNotificationMetadata),
  }).annotate({ identifier: "PublishUrlNotificationResponse" });

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

export interface PublishUrlNotificationsRequest {
  /** Request body */
  body?: UrlNotification;
}

export const PublishUrlNotificationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(UrlNotification).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v3/urlNotifications:publish",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PublishUrlNotificationsRequest>;

export type PublishUrlNotificationsResponse = PublishUrlNotificationResponse;
export const PublishUrlNotificationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PublishUrlNotificationResponse;

export type PublishUrlNotificationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Notifies that a URL has been updated or deleted. */
export const publishUrlNotifications: API.OperationMethod<
  PublishUrlNotificationsRequest,
  PublishUrlNotificationsResponse,
  PublishUrlNotificationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PublishUrlNotificationsRequest,
  output: PublishUrlNotificationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetMetadataUrlNotificationsRequest {
  /** URL that is being queried. */
  url?: string;
}

export const GetMetadataUrlNotificationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.optional(Schema.String).pipe(T.HttpQuery("url")),
  }).pipe(
    T.Http({ method: "GET", path: "v3/urlNotifications/metadata" }),
    svc,
  ) as unknown as Schema.Schema<GetMetadataUrlNotificationsRequest>;

export type GetMetadataUrlNotificationsResponse = UrlNotificationMetadata;
export const GetMetadataUrlNotificationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ UrlNotificationMetadata;

export type GetMetadataUrlNotificationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets metadata about a Web Document. This method can _only_ be used to query URLs that were previously seen in successful Indexing API notifications. Includes the latest `UrlNotification` received via this API. */
export const getMetadataUrlNotifications: API.OperationMethod<
  GetMetadataUrlNotificationsRequest,
  GetMetadataUrlNotificationsResponse,
  GetMetadataUrlNotificationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetMetadataUrlNotificationsRequest,
  output: GetMetadataUrlNotificationsResponse,
  errors: [NotFound, Forbidden],
}));
