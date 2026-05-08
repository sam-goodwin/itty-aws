// ==========================================================================
// Google Workspace Events API (workspaceevents v1)
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
  name: "workspaceevents",
  version: "v1",
  rootUrl: "https://workspaceevents.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface FilePart {
  fileWithUri?: string;
  name?: string;
  fileWithBytes?: string;
  mimeType?: string;
}

export const FilePart: Schema.Schema<FilePart> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fileWithUri: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    fileWithBytes: Schema.optional(Schema.String),
    mimeType: Schema.optional(Schema.String),
  }).annotate({ identifier: "FilePart" });

export interface DataPart {
  data?: Record<string, unknown>;
}

export const DataPart: Schema.Schema<DataPart> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "DataPart" });

export interface Part {
  file?: FilePart;
  /** Optional metadata associated with this part. */
  metadata?: Record<string, unknown>;
  text?: string;
  data?: DataPart;
}

export const Part: Schema.Schema<Part> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    file: Schema.optional(FilePart),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    text: Schema.optional(Schema.String),
    data: Schema.optional(DataPart),
  }).annotate({ identifier: "Part" });

export interface Message {
  /** protolint:enable REPEATED_FIELD_NAMES_PLURALIZED Any optional metadata to provide along with the message. */
  metadata?: Record<string, unknown>;
  /** The URIs of extensions that are present or contributed to this Message. */
  extensions?: ReadonlyArray<string>;
  /** protolint:disable REPEATED_FIELD_NAMES_PLURALIZED Content is the container of the message content. */
  content?: ReadonlyArray<Part>;
  /** A role for the message. */
  role?: "ROLE_UNSPECIFIED" | "ROLE_USER" | "ROLE_AGENT" | (string & {});
  /** The context id of the message. This is optional and if set, the message will be associated with the given context. */
  contextId?: string;
  /** The task id of the message. This is optional and if set, the message will be associated with the given task. */
  taskId?: string;
  /** The unique identifier (e.g. UUID)of the message. This is required and created by the message creator. */
  messageId?: string;
}

export const Message: Schema.Schema<Message> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    extensions: Schema.optional(Schema.Array(Schema.String)),
    content: Schema.optional(Schema.Array(Part)),
    role: Schema.optional(Schema.String),
    contextId: Schema.optional(Schema.String),
    taskId: Schema.optional(Schema.String),
    messageId: Schema.optional(Schema.String),
  }).annotate({ identifier: "Message" });

export interface TaskStatus {
  /** A message associated with the status. */
  message?: Message;
  /** The current state of this task */
  state?:
    | "TASK_STATE_UNSPECIFIED"
    | "TASK_STATE_SUBMITTED"
    | "TASK_STATE_WORKING"
    | "TASK_STATE_COMPLETED"
    | "TASK_STATE_FAILED"
    | "TASK_STATE_CANCELLED"
    | "TASK_STATE_INPUT_REQUIRED"
    | "TASK_STATE_REJECTED"
    | "TASK_STATE_AUTH_REQUIRED"
    | (string & {});
  /** Timestamp when the status was recorded. Example: "2023-10-27T10:00:00Z" */
  timestamp?: string;
}

export const TaskStatus: Schema.Schema<TaskStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Message),
    state: Schema.optional(Schema.String),
    timestamp: Schema.optional(Schema.String),
  }).annotate({ identifier: "TaskStatus" });

export interface Artifact {
  /** The content of the artifact. */
  parts?: ReadonlyArray<Part>;
  /** Unique identifier (e.g. UUID) for the artifact. It must be at least unique within a task. */
  artifactId?: string;
  /** A human readable description of the artifact, optional. */
  description?: string;
  /** A human readable name for the artifact. */
  name?: string;
  /** Optional metadata included with the artifact. */
  metadata?: Record<string, unknown>;
  /** The URIs of extensions that are present or contributed to this Artifact. */
  extensions?: ReadonlyArray<string>;
}

export const Artifact: Schema.Schema<Artifact> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parts: Schema.optional(Schema.Array(Part)),
    artifactId: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    extensions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Artifact" });

export interface Task {
  /** protolint:enable REPEATED_FIELD_NAMES_PLURALIZED A key/value object to store custom metadata about a task. */
  metadata?: Record<string, unknown>;
  /** Unique identifier (e.g. UUID) for the contextual collection of interactions (tasks and messages). Created by the A2A server. */
  contextId?: string;
  /** The current status of a Task, including state and a message. */
  status?: TaskStatus;
  /** Unique identifier (e.g. UUID) for the task, generated by the server for a new task. */
  id?: string;
  /** A set of output artifacts for a Task. */
  artifacts?: ReadonlyArray<Artifact>;
  /** protolint:disable REPEATED_FIELD_NAMES_PLURALIZED The history of interactions from a task. */
  history?: ReadonlyArray<Message>;
}

export const Task: Schema.Schema<Task> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    contextId: Schema.optional(Schema.String),
    status: Schema.optional(TaskStatus),
    id: Schema.optional(Schema.String),
    artifacts: Schema.optional(Schema.Array(Artifact)),
    history: Schema.optional(Schema.Array(Message)),
  }).annotate({ identifier: "Task" });

export interface TaskStatusUpdateEvent {
  /** Optional metadata to associate with the task update. */
  metadata?: Record<string, unknown>;
  /** Whether this is the last status update expected for this task. */
  final?: boolean;
  /** The new status of the task. */
  status?: TaskStatus;
  /** The id of the task that is changed */
  taskId?: string;
  /** The id of the context that the task belongs to */
  contextId?: string;
}

export const TaskStatusUpdateEvent: Schema.Schema<TaskStatusUpdateEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    final: Schema.optional(Schema.Boolean),
    status: Schema.optional(TaskStatus),
    taskId: Schema.optional(Schema.String),
    contextId: Schema.optional(Schema.String),
  }).annotate({ identifier: "TaskStatusUpdateEvent" });

export interface TaskArtifactUpdateEvent {
  /** The id of the task for this artifact */
  taskId?: string;
  /** The id of the context that this task belongs too */
  contextId?: string;
  /** Whether this represents the last part of an artifact */
  lastChunk?: boolean;
  /** Optional metadata associated with the artifact update. */
  metadata?: Record<string, unknown>;
  /** The artifact itself */
  artifact?: Artifact;
  /** Whether this should be appended to a prior one produced */
  append?: boolean;
}

export const TaskArtifactUpdateEvent: Schema.Schema<TaskArtifactUpdateEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    taskId: Schema.optional(Schema.String),
    contextId: Schema.optional(Schema.String),
    lastChunk: Schema.optional(Schema.Boolean),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    artifact: Schema.optional(Artifact),
    append: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "TaskArtifactUpdateEvent" });

export interface StreamResponse {
  task?: Task;
  message?: Message;
  statusUpdate?: TaskStatusUpdateEvent;
  artifactUpdate?: TaskArtifactUpdateEvent;
}

export const StreamResponse: Schema.Schema<StreamResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    task: Schema.optional(Task),
    message: Schema.optional(Message),
    statusUpdate: Schema.optional(TaskStatusUpdateEvent),
    artifactUpdate: Schema.optional(TaskArtifactUpdateEvent),
  }).annotate({ identifier: "StreamResponse" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface AuthenticationInfo {
  /** Supported authentication schemes - e.g. Basic, Bearer, etc */
  schemes?: ReadonlyArray<string>;
  /** Optional credentials */
  credentials?: string;
}

export const AuthenticationInfo: Schema.Schema<AuthenticationInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    schemes: Schema.optional(Schema.Array(Schema.String)),
    credentials: Schema.optional(Schema.String),
  }).annotate({ identifier: "AuthenticationInfo" });

export interface PushNotificationConfig {
  /** A unique identifier (e.g. UUID) for this push notification. */
  id?: string;
  /** Information about the authentication to sent with the notification */
  authentication?: AuthenticationInfo;
  /** Url to send the notification too */
  url?: string;
  /** Token unique for this task/session */
  token?: string;
}

export const PushNotificationConfig: Schema.Schema<PushNotificationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    authentication: Schema.optional(AuthenticationInfo),
    url: Schema.optional(Schema.String),
    token: Schema.optional(Schema.String),
  }).annotate({ identifier: "PushNotificationConfig" });

export interface SendMessageConfiguration {
  /** A configuration of a webhook that can be used to receive updates */
  pushNotification?: PushNotificationConfig;
  /** The maximum number of messages to include in the history. if 0, the history will be unlimited. */
  historyLength?: number;
  /** If true, the message will be blocking until the task is completed. If false, the message will be non-blocking and the task will be returned immediately. It is the caller's responsibility to check for any task updates. */
  blocking?: boolean;
  /** The output modes that the agent is expected to respond with. */
  acceptedOutputModes?: ReadonlyArray<string>;
}

export const SendMessageConfiguration: Schema.Schema<SendMessageConfiguration> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pushNotification: Schema.optional(PushNotificationConfig),
    historyLength: Schema.optional(Schema.Number),
    blocking: Schema.optional(Schema.Boolean),
    acceptedOutputModes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "SendMessageConfiguration" });

export interface TaskPushNotificationConfig {
  /** The push notification configuration details. */
  pushNotificationConfig?: PushNotificationConfig;
  /** The resource name of the config. Format: tasks/{task_id}/pushNotificationConfigs/{config_id} */
  name?: string;
}

export const TaskPushNotificationConfig: Schema.Schema<TaskPushNotificationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pushNotificationConfig: Schema.optional(PushNotificationConfig),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "TaskPushNotificationConfig" });

export interface ListTaskPushNotificationConfigResponse {
  /** The list of push notification configurations. */
  configs?: ReadonlyArray<TaskPushNotificationConfig>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListTaskPushNotificationConfigResponse: Schema.Schema<ListTaskPushNotificationConfigResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    configs: Schema.optional(Schema.Array(TaskPushNotificationConfig)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListTaskPushNotificationConfigResponse" });

export interface PayloadOptions {
  /** Optional. If `include_resource` is set to `true`, the list of fields to include in the event payload. Separate fields with a comma. For example, to include a Google Chat message's sender and create time, enter `message.sender,message.createTime`. If omitted, the payload includes all fields for the resource. If you specify a field that doesn't exist for the resource, the system ignores the field. */
  fieldMask?: string;
  /** Optional. Whether the event payload includes data about the resource that changed. For example, for an event where a Google Chat message was created, whether the payload contains data about the [`Message`](https://developers.google.com/chat/api/reference/rest/v1/spaces.messages) resource. If false, the event payload only includes the name of the changed resource. */
  includeResource?: boolean;
}

export const PayloadOptions: Schema.Schema<PayloadOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fieldMask: Schema.optional(Schema.String),
    includeResource: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "PayloadOptions" });

export interface SendMessageRequest {
  /** Optional tenant, provided as a path parameter. Experimental, might still change for 1.0 release. */
  tenant?: string;
  /** Optional metadata for the request. */
  metadata?: Record<string, unknown>;
  /** Configuration for the send request. */
  configuration?: SendMessageConfiguration;
  /** Required. The message to send to the agent. */
  message?: Message;
}

export const SendMessageRequest: Schema.Schema<SendMessageRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tenant: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    configuration: Schema.optional(SendMessageConfiguration),
    message: Schema.optional(Message),
  }).annotate({ identifier: "SendMessageRequest" });

export interface NotificationEndpoint {
  /** Immutable. The Pub/Sub topic that receives events for the subscription. Format: `projects/{project}/topics/{topic}` You must create the topic in the same Google Cloud project where you create this subscription. Note: The Google Workspace Events API uses [ordering keys](https://cloud.google.com/pubsub/docs/ordering) for the benefit of sequential events. If the Cloud Pub/Sub topic has a [message storage policy](https://cloud.google.com/pubsub/docs/resource-location-restriction#exceptions) configured to exclude the nearest Google Cloud region, publishing events with ordering keys will fail. When the topic receives events, the events are encoded as Pub/Sub messages. For details, see the [Google Cloud Pub/Sub Protocol Binding for CloudEvents](https://github.com/googleapis/google-cloudevents/blob/main/docs/spec/pubsub.md). */
  pubsubTopic?: string;
}

export const NotificationEndpoint: Schema.Schema<NotificationEndpoint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pubsubTopic: Schema.optional(Schema.String),
  }).annotate({ identifier: "NotificationEndpoint" });

export interface Subscription {
  /** Output only. The user who authorized the creation of the subscription. The user must be able to view the `target_resource`. For Google Workspace users, the `{user}` value is the [`user.id`](https://developers.google.com/workspace/admin/directory/reference/rest/v1/users#User.FIELDS.id) field from the Directory API. Format: `users/{user}` */
  userAuthority?: string;
  /** Required. Unordered list. Input for creating a subscription. Otherwise, output only. One or more types of events to receive about the target resource. Formatted according to the CloudEvents specification. The supported event types depend on the target resource of your subscription. For details, see [Supported Google Workspace events](https://developers.google.com/workspace/events/guides#supported-events). By default, you also receive events about the [lifecycle of your subscription](https://developers.google.com/workspace/events/guides/events-lifecycle). You don't need to specify lifecycle events for this field. If you specify an event type that doesn't exist for the target resource, the request returns an HTTP `400 Bad Request` status code. */
  eventTypes?: ReadonlyArray<string>;
  /** Required. Immutable. The Google Workspace resource that's monitored for events, formatted as the [full resource name](https://google.aip.dev/122#full-resource-names). To learn about target resources and the events that they support, see [Supported Google Workspace events](https://developers.google.com/workspace/events#supported-events). A user can only authorize your app to create one subscription for a given target resource. If your app tries to create another subscription with the same user credentials, the request returns an `ALREADY_EXISTS` error. */
  targetResource?: string;
  /** Required. Immutable. The endpoint where the subscription delivers events, such as a Pub/Sub topic. */
  notificationEndpoint?: NotificationEndpoint;
  /** Output only. The last time that the subscription is updated. */
  updateTime?: string;
  /** Input only. The time-to-live (TTL) or duration for the subscription. If unspecified or set to `0`, uses the maximum possible duration. */
  ttl?: string;
  /** Identifier. Resource name of the subscription. Format: `subscriptions/{subscription}` */
  name?: string;
  /** Output only. The service account that was used to authorize the creation of the subscription. This service account must be owned by the same Google Cloud project where you created this subscription. Format: `projects/{project_id}/serviceAccounts/{service_account_id}` */
  serviceAccountAuthority?: string;
  /** Output only. The state of the subscription. Determines whether the subscription can receive events and deliver them to the notification endpoint. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "SUSPENDED"
    | "DELETED"
    | (string & {});
  /** Optional. This checksum is computed by the server based on the value of other fields, and might be sent on update requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
  /** Output only. System-assigned unique identifier for the subscription. */
  uid?: string;
  /** Optional. Options about what data to include in the event payload. Only supported for Google Chat and Google Drive events. */
  payloadOptions?: PayloadOptions;
  /** Output only. The error that suspended the subscription. To reactivate the subscription, resolve the error and call the `ReactivateSubscription` method. */
  suspensionReason?:
    | "ERROR_TYPE_UNSPECIFIED"
    | "USER_SCOPE_REVOKED"
    | "APP_SCOPE_REVOKED"
    | "RESOURCE_DELETED"
    | "USER_AUTHORIZATION_FAILURE"
    | "APP_AUTHORIZATION_FAILURE"
    | "ENDPOINT_PERMISSION_DENIED"
    | "ENDPOINT_NOT_FOUND"
    | "ENDPOINT_RESOURCE_EXHAUSTED"
    | "OTHER"
    | (string & {});
  /** Output only. The time when the subscription is created. */
  createTime?: string;
  /** Output only. The user who authorized the creation of the subscription. When a user authorizes the subscription, this field and the `user_authority` field have the same value and the format is: Format: `users/{user}` For Google Workspace users, the `{user}` value is the [`user.id`](https://developers.google.com/admin-sdk/directory/reference/rest/v1/users#User.FIELDS.ids) field from the Directory API. When a Chat app authorizes the subscription, only `service_account_authority` field populates and this field is empty. */
  authority?: string;
  /** Non-empty default. The timestamp in UTC when the subscription expires. Always displayed on output, regardless of what was used on input. */
  expireTime?: string;
  /** Output only. If `true`, the subscription is in the process of being updated. */
  reconciling?: boolean;
}

export const Subscription: Schema.Schema<Subscription> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userAuthority: Schema.optional(Schema.String),
    eventTypes: Schema.optional(Schema.Array(Schema.String)),
    targetResource: Schema.optional(Schema.String),
    notificationEndpoint: Schema.optional(NotificationEndpoint),
    updateTime: Schema.optional(Schema.String),
    ttl: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    serviceAccountAuthority: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    payloadOptions: Schema.optional(PayloadOptions),
    suspensionReason: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    authority: Schema.optional(Schema.String),
    expireTime: Schema.optional(Schema.String),
    reconciling: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "Subscription" });

export interface ListSubscriptionsResponse {
  /** List of subscriptions. */
  subscriptions?: ReadonlyArray<Subscription>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListSubscriptionsResponse: Schema.Schema<ListSubscriptionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptions: Schema.optional(Schema.Array(Subscription)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListSubscriptionsResponse" });

export interface CancelTaskRequest {
  /** Optional tenant, provided as a path parameter. Experimental, might still change for 1.0 release. */
  tenant?: string;
}

export const CancelTaskRequest: Schema.Schema<CancelTaskRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tenant: Schema.optional(Schema.String),
  }).annotate({ identifier: "CancelTaskRequest" });

export interface Status {
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
}

export const Status: Schema.Schema<Status> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    code: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Status" });

export interface ReactivateSubscriptionRequest {}

export const ReactivateSubscriptionRequest: Schema.Schema<ReactivateSubscriptionRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "ReactivateSubscriptionRequest",
  });

export interface Operation {
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    done: Schema.optional(Schema.Boolean),
    error: Schema.optional(Status),
    name: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "Operation" });

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

export interface CreateSubscriptionsRequest {
  /** Optional. If set to `true`, validates and previews the request, but doesn't create the subscription. */
  validateOnly?: boolean;
  /** Request body */
  body?: Subscription;
}

export const CreateSubscriptionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(Subscription).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/subscriptions", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateSubscriptionsRequest>;

export type CreateSubscriptionsResponse = Operation;
export const CreateSubscriptionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateSubscriptionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a Google Workspace subscription. To learn how to use this method, see [Create a Google Workspace subscription](https://developers.google.com/workspace/events/guides/create-subscription). For a subscription on a [Chat target resource](https://developers.google.com/workspace/events/guides/events-chat), you can create a subscription as: - A Chat app by specifying an authorization scope that begins with `chat.app` and getting one-time administrator approval. To learn more, see [Authorize as a Chat app with administrator approval](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app). - A user by specifying an authorization scope that doesn't include `app` in its name. To learn more, see [Authorize as a Chat user](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user). */
export const createSubscriptions: API.OperationMethod<
  CreateSubscriptionsRequest,
  CreateSubscriptionsResponse,
  CreateSubscriptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateSubscriptionsRequest,
  output: CreateSubscriptionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListSubscriptionsRequest {
  /** Optional. A page token, received from a previous list subscriptions call. Provide this parameter to retrieve the subsequent page. When paginating, the filter value should match the call that provided the page token. Passing a different value might lead to unexpected results. */
  pageToken?: string;
  /** Optional. The maximum number of subscriptions to return. The service might return fewer than this value. If unspecified or set to `0`, up to 50 subscriptions are returned. The maximum value is 100. If you specify a value more than 100, the system only returns 100 subscriptions. */
  pageSize?: number;
  /** Required. A query filter. You can filter subscriptions by event type (`event_types`) and target resource (`target_resource`). You must specify at least one event type in your query. To filter for multiple event types, use the `OR` operator. To filter by both event type and target resource, use the `AND` operator and specify the full resource name, such as `//chat.googleapis.com/spaces/{space}`. For example, the following queries are valid: ``` event_types:"google.workspace.chat.membership.v1.updated" OR event_types:"google.workspace.chat.message.v1.created" event_types:"google.workspace.chat.message.v1.created" AND target_resource="//chat.googleapis.com/spaces/{space}" ( event_types:"google.workspace.chat.membership.v1.updated" OR event_types:"google.workspace.chat.message.v1.created" ) AND target_resource="//chat.googleapis.com/spaces/{space}" ``` The server rejects invalid queries with an `INVALID_ARGUMENT` error. */
  filter?: string;
}

export const ListSubscriptionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/subscriptions" }),
    svc,
  ) as unknown as Schema.Schema<ListSubscriptionsRequest>;

export type ListSubscriptionsResponse_Op = ListSubscriptionsResponse;
export const ListSubscriptionsResponse_Op =
  /*@__PURE__*/ /*#__PURE__*/ ListSubscriptionsResponse;

export type ListSubscriptionsError = DefaultErrors | NotFound | Forbidden;

/** Lists Google Workspace subscriptions. To learn how to use this method, see [List Google Workspace subscriptions](https://developers.google.com/workspace/events/guides/list-subscriptions). */
export const listSubscriptions: API.PaginatedOperationMethod<
  ListSubscriptionsRequest,
  ListSubscriptionsResponse_Op,
  ListSubscriptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListSubscriptionsRequest,
  output: ListSubscriptionsResponse_Op,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteSubscriptionsRequest {
  /** Required. Resource name of the subscription to delete. Format: `subscriptions/{subscription}` */
  name: string;
  /** Optional. Etag of the subscription. If present, it must match with the server's etag. Otherwise, request fails with the status `ABORTED`. */
  etag?: string;
  /** Optional. If set to `true`, validates and previews the request, but doesn't delete the subscription. */
  validateOnly?: boolean;
  /** Optional. If set to `true` and the subscription isn't found, the request succeeds but doesn't delete the subscription. */
  allowMissing?: boolean;
}

export const DeleteSubscriptionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteSubscriptionsRequest>;

export type DeleteSubscriptionsResponse = Operation;
export const DeleteSubscriptionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteSubscriptionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a Google Workspace subscription. To learn how to use this method, see [Delete a Google Workspace subscription](https://developers.google.com/workspace/events/guides/delete-subscription). */
export const deleteSubscriptions: API.OperationMethod<
  DeleteSubscriptionsRequest,
  DeleteSubscriptionsResponse,
  DeleteSubscriptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteSubscriptionsRequest,
  output: DeleteSubscriptionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchSubscriptionsRequest {
  /** Identifier. Resource name of the subscription. Format: `subscriptions/{subscription}` */
  name: string;
  /** Optional. If set to `true`, validates and previews the request, but doesn't update the subscription. */
  validateOnly?: boolean;
  /** Optional. The field to update. If omitted, updates any fields included in the request. You can update one of the following fields in a subscription: * `expire_time`: The timestamp when the subscription expires. * `ttl`: The time-to-live (TTL) or duration of the subscription. * `event_types`: The list of event types to receive about the target resource. When using the `*` wildcard (equivalent to `PUT`), omitted fields are set to empty values and rejected if they're invalid. */
  updateMask?: string;
  /** Request body */
  body?: Subscription;
}

export const PatchSubscriptionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Subscription).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchSubscriptionsRequest>;

export type PatchSubscriptionsResponse = Operation;
export const PatchSubscriptionsResponse = /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchSubscriptionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates or renews a Google Workspace subscription. To learn how to use this method, see [Update or renew a Google Workspace subscription](https://developers.google.com/workspace/events/guides/update-subscription). For a subscription on a [Chat target resource](https://developers.google.com/workspace/events/guides/events-chat), you can update a subscription as: - A Chat app by specifying an authorization scope that begins with `chat.app` and getting one-time administrator approval. To learn more, see [Authorize as a Chat app with administrator approval](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app). - A user by specifying an authorization scope that doesn't include `app` in its name. To learn more, see [Authorize as a Chat user](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user). */
export const patchSubscriptions: API.OperationMethod<
  PatchSubscriptionsRequest,
  PatchSubscriptionsResponse,
  PatchSubscriptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchSubscriptionsRequest,
  output: PatchSubscriptionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetSubscriptionsRequest {
  /** Required. Resource name of the subscription. Format: `subscriptions/{subscription}` */
  name: string;
}

export const GetSubscriptionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetSubscriptionsRequest>;

export type GetSubscriptionsResponse = Subscription;
export const GetSubscriptionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Subscription;

export type GetSubscriptionsError = DefaultErrors | NotFound | Forbidden;

/** Gets details about a Google Workspace subscription. To learn how to use this method, see [Get details about a Google Workspace subscription](https://developers.google.com/workspace/events/guides/get-subscription). */
export const getSubscriptions: API.OperationMethod<
  GetSubscriptionsRequest,
  GetSubscriptionsResponse,
  GetSubscriptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSubscriptionsRequest,
  output: GetSubscriptionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ReactivateSubscriptionsRequest {
  /** Required. Resource name of the subscription. Format: `subscriptions/{subscription}` */
  name: string;
  /** Request body */
  body?: ReactivateSubscriptionRequest;
}

export const ReactivateSubscriptionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ReactivateSubscriptionRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:reactivate", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ReactivateSubscriptionsRequest>;

export type ReactivateSubscriptionsResponse = Operation;
export const ReactivateSubscriptionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type ReactivateSubscriptionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Reactivates a suspended Google Workspace subscription. This method resets your subscription's `State` field to `ACTIVE`. Before you use this method, you must fix the error that suspended the subscription. This method will ignore or reject any subscription that isn't currently in a suspended state. To learn how to use this method, see [Reactivate a Google Workspace subscription](https://developers.google.com/workspace/events/guides/reactivate-subscription). For a subscription on a [Chat target resource](https://developers.google.com/workspace/events/guides/events-chat), you can reactivate a subscription as: - A Chat app by specifying an authorization scope that begins with `chat.app` and getting one-time administrator approval. To learn more, see [Authorize as a Chat app with administrator approval](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app). - A user by specifying an authorization scope that doesn't include `app` in its name. To learn more, see [Authorize as a Chat user](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user). */
export const reactivateSubscriptions: API.OperationMethod<
  ReactivateSubscriptionsRequest,
  ReactivateSubscriptionsResponse,
  ReactivateSubscriptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ReactivateSubscriptionsRequest,
  output: ReactivateSubscriptionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SubscribeTasksRequest {
  /** The resource name of the task to subscribe to. Format: tasks/{task_id} */
  name: string;
  /** Optional tenant, provided as a path parameter. Experimental, might still change for 1.0 release. */
  tenant?: string;
}

export const SubscribeTasksRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.HttpPath("name")),
  tenant: Schema.optional(Schema.String).pipe(T.HttpQuery("tenant")),
}).pipe(
  T.Http({ method: "GET", path: "v1/{+name}:subscribe" }),
  svc,
) as unknown as Schema.Schema<SubscribeTasksRequest>;

export type SubscribeTasksResponse = StreamResponse;
export const SubscribeTasksResponse =
  /*@__PURE__*/ /*#__PURE__*/ StreamResponse;

export type SubscribeTasksError = DefaultErrors | NotFound | Forbidden;

/** TaskSubscription is a streaming call that will return a stream of task update events. This attaches the stream to an existing in process task. If the task is complete the stream will return the completed task (like GetTask) and close the stream. */
export const subscribeTasks: API.OperationMethod<
  SubscribeTasksRequest,
  SubscribeTasksResponse,
  SubscribeTasksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SubscribeTasksRequest,
  output: SubscribeTasksResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetTasksRequest {
  /** Optional tenant, provided as a path parameter. Experimental, might still change for 1.0 release. */
  tenant?: string;
  /** Required. The resource name of the task. Format: tasks/{task_id} */
  name: string;
  /** The number of most recent messages from the task's history to retrieve. */
  historyLength?: number;
}

export const GetTasksRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  tenant: Schema.optional(Schema.String).pipe(T.HttpQuery("tenant")),
  name: Schema.String.pipe(T.HttpPath("name")),
  historyLength: Schema.optional(Schema.Number).pipe(
    T.HttpQuery("historyLength"),
  ),
}).pipe(
  T.Http({ method: "GET", path: "v1/{+name}" }),
  svc,
) as unknown as Schema.Schema<GetTasksRequest>;

export type GetTasksResponse = Task;
export const GetTasksResponse = /*@__PURE__*/ /*#__PURE__*/ Task;

export type GetTasksError = DefaultErrors | NotFound | Forbidden;

/** Get the current state of a task from the agent. */
export const getTasks: API.OperationMethod<
  GetTasksRequest,
  GetTasksResponse,
  GetTasksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetTasksRequest,
  output: GetTasksResponse,
  errors: [NotFound, Forbidden],
}));

export interface CancelTasksRequest {
  /** The resource name of the task to cancel. Format: tasks/{task_id} */
  name: string;
  /** Request body */
  body?: CancelTaskRequest;
}

export const CancelTasksRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.HttpPath("name")),
  body: Schema.optional(CancelTaskRequest).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "v1/{+name}:cancel", hasBody: true }),
  svc,
) as unknown as Schema.Schema<CancelTasksRequest>;

export type CancelTasksResponse = Task;
export const CancelTasksResponse = /*@__PURE__*/ /*#__PURE__*/ Task;

export type CancelTasksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Cancel a task from the agent. If supported one should expect no more task updates for the task. */
export const cancelTasks: API.OperationMethod<
  CancelTasksRequest,
  CancelTasksResponse,
  CancelTasksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelTasksRequest,
  output: CancelTasksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateTasksPushNotificationConfigsRequest {
  /** Required. The ID for the new config. */
  configId?: string;
  /** Required. The parent task resource for this config. Format: tasks/{task_id} */
  parent: string;
  /** Optional tenant, provided as a path parameter. Experimental, might still change for 1.0 release. */
  tenant?: string;
  /** Request body */
  body?: TaskPushNotificationConfig;
}

export const CreateTasksPushNotificationConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    configId: Schema.optional(Schema.String).pipe(T.HttpQuery("configId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    tenant: Schema.optional(Schema.String).pipe(T.HttpQuery("tenant")),
    body: Schema.optional(TaskPushNotificationConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateTasksPushNotificationConfigsRequest>;

export type CreateTasksPushNotificationConfigsResponse =
  TaskPushNotificationConfig;
export const CreateTasksPushNotificationConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TaskPushNotificationConfig;

export type CreateTasksPushNotificationConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Set a push notification config for a task. */
export const createTasksPushNotificationConfigs: API.OperationMethod<
  CreateTasksPushNotificationConfigsRequest,
  CreateTasksPushNotificationConfigsResponse,
  CreateTasksPushNotificationConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateTasksPushNotificationConfigsRequest,
  output: CreateTasksPushNotificationConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetTasksPushNotificationConfigsRequest {
  /** The resource name of the config to retrieve. Format: tasks/{task_id}/pushNotificationConfigs/{config_id} */
  name: string;
  /** Optional tenant, provided as a path parameter. Experimental, might still change for 1.0 release. */
  tenant?: string;
}

export const GetTasksPushNotificationConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    tenant: Schema.optional(Schema.String).pipe(T.HttpQuery("tenant")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetTasksPushNotificationConfigsRequest>;

export type GetTasksPushNotificationConfigsResponse =
  TaskPushNotificationConfig;
export const GetTasksPushNotificationConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TaskPushNotificationConfig;

export type GetTasksPushNotificationConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get a push notification config for a task. */
export const getTasksPushNotificationConfigs: API.OperationMethod<
  GetTasksPushNotificationConfigsRequest,
  GetTasksPushNotificationConfigsResponse,
  GetTasksPushNotificationConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetTasksPushNotificationConfigsRequest,
  output: GetTasksPushNotificationConfigsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListTasksPushNotificationConfigsRequest {
  /** A page token received from a previous ListTaskPushNotificationConfigRequest call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTaskPushNotificationConfigRequest` must match the call that provided the page token. */
  pageToken?: string;
  /** The parent task resource. Format: tasks/{task_id} */
  parent: string;
  /** Optional tenant, provided as a path parameter. Experimental, might still change for 1.0 release. */
  tenant?: string;
  /** For AIP-158 these fields are present. Usually not used/needed. The maximum number of configurations to return. If unspecified, all configs will be returned. */
  pageSize?: number;
}

export const ListTasksPushNotificationConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    tenant: Schema.optional(Schema.String).pipe(T.HttpQuery("tenant")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/pushNotificationConfigs" }),
    svc,
  ) as unknown as Schema.Schema<ListTasksPushNotificationConfigsRequest>;

export type ListTasksPushNotificationConfigsResponse =
  ListTaskPushNotificationConfigResponse;
export const ListTasksPushNotificationConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListTaskPushNotificationConfigResponse;

export type ListTasksPushNotificationConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get a list of push notifications configured for a task. */
export const listTasksPushNotificationConfigs: API.PaginatedOperationMethod<
  ListTasksPushNotificationConfigsRequest,
  ListTasksPushNotificationConfigsResponse,
  ListTasksPushNotificationConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListTasksPushNotificationConfigsRequest,
  output: ListTasksPushNotificationConfigsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteTasksPushNotificationConfigsRequest {
  /** The resource name of the config to delete. Format: tasks/{task_id}/pushNotificationConfigs/{config_id} */
  name: string;
  /** Optional tenant, provided as a path parameter. Experimental, might still change for 1.0 release. */
  tenant?: string;
}

export const DeleteTasksPushNotificationConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    tenant: Schema.optional(Schema.String).pipe(T.HttpQuery("tenant")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteTasksPushNotificationConfigsRequest>;

export type DeleteTasksPushNotificationConfigsResponse = Empty;
export const DeleteTasksPushNotificationConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteTasksPushNotificationConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a push notification config for a task. */
export const deleteTasksPushNotificationConfigs: API.OperationMethod<
  DeleteTasksPushNotificationConfigsRequest,
  DeleteTasksPushNotificationConfigsResponse,
  DeleteTasksPushNotificationConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteTasksPushNotificationConfigsRequest,
  output: DeleteTasksPushNotificationConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetOperationsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.HttpPath("name")),
}).pipe(
  T.Http({ method: "GET", path: "v1/{+name}" }),
  svc,
) as unknown as Schema.Schema<GetOperationsRequest>;

export type GetOperationsResponse = Operation;
export const GetOperationsResponse = /*@__PURE__*/ /*#__PURE__*/ Operation;

export type GetOperationsError = DefaultErrors | NotFound | Forbidden;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getOperations: API.OperationMethod<
  GetOperationsRequest,
  GetOperationsResponse,
  GetOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOperationsRequest,
  output: GetOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface StreamMessageRequest {
  /** Request body */
  body?: SendMessageRequest;
}

export const StreamMessageRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  body: Schema.optional(SendMessageRequest).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "v1/message:stream", hasBody: true }),
  svc,
) as unknown as Schema.Schema<StreamMessageRequest>;

export type StreamMessageResponse = StreamResponse;
export const StreamMessageResponse = /*@__PURE__*/ /*#__PURE__*/ StreamResponse;

export type StreamMessageError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** SendStreamingMessage is a streaming call that will return a stream of task update events until the Task is in an interrupted or terminal state. */
export const streamMessage: API.OperationMethod<
  StreamMessageRequest,
  StreamMessageResponse,
  StreamMessageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StreamMessageRequest,
  output: StreamMessageResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
