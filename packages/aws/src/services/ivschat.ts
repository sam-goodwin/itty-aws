import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as redacted from "effect/Redacted";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import { SensitiveString } from "../sensitive.ts";
import * as T from "../traits.ts";
// Schema table, filled on first reach (see __S at the end).
const __s: any[] = [];
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "ivschat",
  serviceShapeName: "AmazonInteractiveVideoServiceChat",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "ivschat" });
const ver = /*@__PURE__*/ T.ServiceVersion("2020-07-14");
const proto = /*@__PURE__*/ T.AwsProtocolsRestJson1();
const rules = /*@__PURE__*/ T.EndpointResolver((p, _) => {
  const { Region, UseDualStack = false, UseFIPS = false, Endpoint } = p;
  const e = (u: unknown, p = {}, h = {}): T.EndpointResolverResult => ({
    type: "endpoint" as const,
    endpoint: { url: u as string, properties: p, headers: h },
  });
  const err = (m: unknown): T.EndpointResolverResult => ({
    type: "error" as const,
    message: m as string,
  });
  if (Endpoint != null) {
    if (UseFIPS === true) {
      return err("Invalid Configuration: FIPS and custom endpoint are not supported");
    }
    if (UseDualStack === true) {
      return err("Invalid Configuration: Dualstack and custom endpoint are not supported");
    }
    return e(Endpoint);
  }
  if (Region != null) {
    {
      const PartitionResult = _.partition(Region);
      if (PartitionResult != null && PartitionResult !== false) {
        if (UseFIPS === true && UseDualStack === true) {
          if (
            true === _.getAttr(PartitionResult, "supportsFIPS") &&
            true === _.getAttr(PartitionResult, "supportsDualStack")
          ) {
            return e(
              `https://ivschat-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://ivschat-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://ivschat.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://ivschat.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: S.String,
      resourceType: S.String,
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class PendingVerification
  extends /*@__PURE__*/ S.TaggedError<PendingVerification>()(
    "PendingVerification",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: S.String,
      resourceType: S.String,
    },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: S.String,
      resourceType: S.String,
      limit: S.Number,
    },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: S.String,
      resourceType: S.String,
      limit: S.Number,
    },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      reason: /*@__PURE__*/ S.optional(S.String),
      fieldList: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => __S(38)).annotate({
          identifier: "ValidationExceptionFieldList",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type RoomIdentifier = string;
export type UserID = string | redacted.Redacted<string>;
export type ChatTokenCapability = string;
export type ChatTokenCapabilities = string[];
export type SessionDurationInMinutes = number;
export type ChatTokenAttributes = { [key: string]: string | undefined };
export interface CreateChatTokenRequest {
  roomIdentifier: string;
  userId: string | redacted.Redacted<string>;
  capabilities?: string[];
  sessionDurationInMinutes?: number;
  attributes?: { [key: string]: string | undefined };
}
export type ChatToken = string | redacted.Redacted<string>;
export interface CreateChatTokenResponse {
  token?: string | redacted.Redacted<string>;
  tokenExpirationTime?: Date;
  sessionExpirationTime?: Date;
}
export type LoggingConfigurationName = string;
export type BucketName = string;
export interface S3DestinationConfiguration {
  bucketName: string;
}
export type LogGroupName = string;
export interface CloudWatchLogsDestinationConfiguration {
  logGroupName: string;
}
export type DeliveryStreamName = string;
export interface FirehoseDestinationConfiguration {
  deliveryStreamName: string;
}
export type DestinationConfiguration =
  | { s3: S3DestinationConfiguration; cloudWatchLogs?: never; firehose?: never }
  | { s3?: never; cloudWatchLogs: CloudWatchLogsDestinationConfiguration; firehose?: never }
  | { s3?: never; cloudWatchLogs?: never; firehose: FirehoseDestinationConfiguration };
export type TagKey = string;
export type TagValue = string;
export type Tags = { [key: string]: string | undefined };
export interface CreateLoggingConfigurationRequest {
  name?: string;
  destinationConfiguration: DestinationConfiguration;
  tags?: { [key: string]: string | undefined };
}
export type LoggingConfigurationArn = string;
export type LoggingConfigurationID = string;
export type CreateLoggingConfigurationState = string;
export interface CreateLoggingConfigurationResponse {
  arn?: string;
  id?: string;
  createTime?: Date;
  updateTime?: Date;
  name?: string;
  destinationConfiguration?: DestinationConfiguration;
  state?: string;
  tags?: { [key: string]: string | undefined };
}
export type RoomName = string;
export type RoomMaxMessageRatePerSecond = number;
export type RoomMaxMessageLength = number;
export type LambdaArn = string;
export type FallbackResult = string;
export interface MessageReviewHandler {
  uri?: string;
  fallbackResult?: string;
}
export type LoggingConfigurationIdentifier = string;
export type LoggingConfigurationIdentifierList = string[];
export interface CreateRoomRequest {
  name?: string;
  maximumMessageRatePerSecond?: number;
  maximumMessageLength?: number;
  messageReviewHandler?: MessageReviewHandler;
  tags?: { [key: string]: string | undefined };
  loggingConfigurationIdentifiers?: string[];
}
export type RoomArn = string;
export type RoomID = string;
export interface CreateRoomResponse {
  arn?: string;
  id?: string;
  name?: string;
  createTime?: Date;
  updateTime?: Date;
  maximumMessageRatePerSecond?: number;
  maximumMessageLength?: number;
  messageReviewHandler?: MessageReviewHandler;
  tags?: { [key: string]: string | undefined };
  loggingConfigurationIdentifiers?: string[];
}
export interface DeleteLoggingConfigurationRequest {
  identifier: string;
}
export interface DeleteLoggingConfigurationResponse {}
export type MessageID = string;
export type Reason = string;
export interface DeleteMessageRequest {
  roomIdentifier: string;
  id: string;
  reason?: string;
}
export type ID = string;
export interface DeleteMessageResponse {
  id?: string;
}
export interface DeleteRoomRequest {
  identifier: string;
}
export interface DeleteRoomResponse {}
export interface DisconnectUserRequest {
  roomIdentifier: string;
  userId: string | redacted.Redacted<string>;
  reason?: string;
}
export interface DisconnectUserResponse {}
export interface GetLoggingConfigurationRequest {
  identifier: string;
}
export type LoggingConfigurationState = string;
export interface GetLoggingConfigurationResponse {
  arn?: string;
  id?: string;
  createTime?: Date;
  updateTime?: Date;
  name?: string;
  destinationConfiguration?: DestinationConfiguration;
  state?: string;
  tags?: { [key: string]: string | undefined };
}
export interface GetRoomRequest {
  identifier: string;
}
export interface GetRoomResponse {
  arn?: string;
  id?: string;
  name?: string;
  createTime?: Date;
  updateTime?: Date;
  maximumMessageRatePerSecond?: number;
  maximumMessageLength?: number;
  messageReviewHandler?: MessageReviewHandler;
  tags?: { [key: string]: string | undefined };
  loggingConfigurationIdentifiers?: string[];
}
export type PaginationToken = string;
export type MaxLoggingConfigurationResults = number;
export interface ListLoggingConfigurationsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface LoggingConfigurationSummary {
  arn?: string;
  id?: string;
  createTime?: Date;
  updateTime?: Date;
  name?: string;
  destinationConfiguration?: DestinationConfiguration;
  state?: string;
  tags?: { [key: string]: string | undefined };
}
export type LoggingConfigurationList = LoggingConfigurationSummary[];
export interface ListLoggingConfigurationsResponse {
  loggingConfigurations: LoggingConfigurationSummary[];
  nextToken?: string;
}
export type MaxRoomResults = number;
export interface ListRoomsRequest {
  name?: string;
  nextToken?: string;
  maxResults?: number;
  messageReviewHandlerUri?: string;
  loggingConfigurationIdentifier?: string;
}
export interface RoomSummary {
  arn?: string;
  id?: string;
  name?: string;
  messageReviewHandler?: MessageReviewHandler;
  createTime?: Date;
  updateTime?: Date;
  tags?: { [key: string]: string | undefined };
  loggingConfigurationIdentifiers?: string[];
}
export type RoomList = RoomSummary[];
export interface ListRoomsResponse {
  rooms: RoomSummary[];
  nextToken?: string;
}
export type ResourceArn = string;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags: { [key: string]: string | undefined };
}
export type EventName = string;
export type EventAttributes = { [key: string]: string | undefined };
export interface SendEventRequest {
  roomIdentifier: string;
  eventName: string;
  attributes?: { [key: string]: string | undefined };
}
export interface SendEventResponse {
  id?: string;
}
export interface TagResourceRequest {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
export interface TagResourceResponse {}
export type TagKeyList = string[];
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
export interface UntagResourceResponse {}
export interface UpdateLoggingConfigurationRequest {
  identifier: string;
  name?: string;
  destinationConfiguration?: DestinationConfiguration;
}
export type UpdateLoggingConfigurationState = string;
export interface UpdateLoggingConfigurationResponse {
  arn?: string;
  id?: string;
  createTime?: Date;
  updateTime?: Date;
  name?: string;
  destinationConfiguration?: DestinationConfiguration;
  state?: string;
  tags?: { [key: string]: string | undefined };
}
export interface UpdateRoomRequest {
  identifier: string;
  name?: string;
  maximumMessageRatePerSecond?: number;
  maximumMessageLength?: number;
  messageReviewHandler?: MessageReviewHandler;
  loggingConfigurationIdentifiers?: string[];
}
export interface UpdateRoomResponse {
  arn?: string;
  id?: string;
  name?: string;
  createTime?: Date;
  updateTime?: Date;
  maximumMessageRatePerSecond?: number;
  maximumMessageLength?: number;
  messageReviewHandler?: MessageReviewHandler;
  tags?: { [key: string]: string | undefined };
  loggingConfigurationIdentifiers?: string[];
}
export type ErrorMessage = string;
export type ResourceId = string;
export type ResourceType = string;
export type ValidationExceptionReason = string;
export type FieldName = string;
export interface ValidationExceptionField {
  name: string;
  message: string;
}
export type ValidationExceptionFieldList = ValidationExceptionField[];
export type Limit = number;
export type CreateChatTokenError =
  | AccessDeniedException
  | PendingVerification
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Creates an encrypted token that is used by a chat participant to establish an individual
 * WebSocket chat connection to a room. When the token is used to connect to chat, the
 * connection is valid for the session duration specified in the request. The token becomes
 * invalid at the token-expiration timestamp included in the response.
 *
 * Use the `capabilities` field to permit an end user to send messages or
 * moderate a room.
 *
 * The `attributes` field securely attaches structured data to the chat session; the data is
 * included within each message sent by the end user and received by other participants in the
 * room. Common use cases for attributes include passing end-user profile data like an icon,
 * display name, colors, badges, and other display features.
 *
 * Encryption keys are owned by Amazon IVS Chat and never used directly by your
 * application.
 */
export const createChatToken: API.OperationMethod<
  CreateChatTokenRequest,
  CreateChatTokenResponse,
  CreateChatTokenError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(2) as any as S.Schema<CreateChatTokenRequest>,
  output: __S(3) as any as S.Schema<CreateChatTokenResponse>,
  errors: [
    AccessDeniedException,
    PendingVerification,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateChatToken",
}));

export type CreateLoggingConfigurationError =
  | AccessDeniedException
  | ConflictException
  | PendingVerification
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates a logging configuration that allows clients to store and record sent
 * messages.
 */
export const createLoggingConfiguration: API.OperationMethod<
  CreateLoggingConfigurationRequest,
  CreateLoggingConfigurationResponse,
  CreateLoggingConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(9) as any as S.Schema<CreateLoggingConfigurationRequest>,
  output: __S(10) as any as S.Schema<CreateLoggingConfigurationResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    PendingVerification,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateLoggingConfiguration",
}));

export type CreateRoomError =
  | AccessDeniedException
  | ConflictException
  | PendingVerification
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates a room that allows clients to connect and pass messages.
 */
export const createRoom: API.OperationMethod<
  CreateRoomRequest,
  CreateRoomResponse,
  CreateRoomError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(12) as any as S.Schema<CreateRoomRequest>,
  output: __S(13) as any as S.Schema<CreateRoomResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    PendingVerification,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateRoom",
}));

export type DeleteLoggingConfigurationError =
  | AccessDeniedException
  | ConflictException
  | PendingVerification
  | ResourceNotFoundException
  | ValidationException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes the specified logging configuration.
 */
export const deleteLoggingConfiguration: API.OperationMethod<
  DeleteLoggingConfigurationRequest,
  DeleteLoggingConfigurationResponse,
  DeleteLoggingConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(14) as any as S.Schema<DeleteLoggingConfigurationRequest>,
  output: __S(15) as any as S.Schema<DeleteLoggingConfigurationResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    PendingVerification,
    ResourceNotFoundException,
    ValidationException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteLoggingConfiguration",
}));

export type DeleteMessageError =
  | AccessDeniedException
  | PendingVerification
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Sends an event to a specific room which directs clients to delete a specific message;
 * that is, unrender it from view and delete it from the client's chat history. This event's
 * `EventName` is `aws:DELETE_MESSAGE`. This replicates the
 * DeleteMessage WebSocket operation in the Amazon IVS Chat Messaging API.
 */
export const deleteMessage: API.OperationMethod<
  DeleteMessageRequest,
  DeleteMessageResponse,
  DeleteMessageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(16) as any as S.Schema<DeleteMessageRequest>,
  output: __S(17) as any as S.Schema<DeleteMessageResponse>,
  errors: [
    AccessDeniedException,
    PendingVerification,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteMessage",
}));

export type DeleteRoomError =
  | AccessDeniedException
  | PendingVerification
  | ResourceNotFoundException
  | ValidationException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes the specified room.
 */
export const deleteRoom: API.OperationMethod<
  DeleteRoomRequest,
  DeleteRoomResponse,
  DeleteRoomError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(18) as any as S.Schema<DeleteRoomRequest>,
  output: __S(19) as any as S.Schema<DeleteRoomResponse>,
  errors: [
    AccessDeniedException,
    PendingVerification,
    ResourceNotFoundException,
    ValidationException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteRoom",
}));

export type DisconnectUserError =
  | AccessDeniedException
  | PendingVerification
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disconnects all connections using a specified user ID from a room. This replicates the
 *
 * DisconnectUser WebSocket operation in the Amazon IVS Chat Messaging API.
 */
export const disconnectUser: API.OperationMethod<
  DisconnectUserRequest,
  DisconnectUserResponse,
  DisconnectUserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(20) as any as S.Schema<DisconnectUserRequest>,
  output: __S(19) as any as S.Schema<DisconnectUserResponse>,
  errors: [
    AccessDeniedException,
    PendingVerification,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisconnectUser",
}));

export type GetLoggingConfigurationError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ValidationException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets the specified logging configuration.
 */
export const getLoggingConfiguration: API.OperationMethod<
  GetLoggingConfigurationRequest,
  GetLoggingConfigurationResponse,
  GetLoggingConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(21) as any as S.Schema<GetLoggingConfigurationRequest>,
  output: __S(10) as any as S.Schema<GetLoggingConfigurationResponse>,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ValidationException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetLoggingConfiguration",
}));

export type GetRoomError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ValidationException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets the specified room.
 */
export const getRoom: API.OperationMethod<
  GetRoomRequest,
  GetRoomResponse,
  GetRoomError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(22) as any as S.Schema<GetRoomRequest>,
  output: __S(13) as any as S.Schema<GetRoomResponse>,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ValidationException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRoom",
}));

export type ListLoggingConfigurationsError =
  | AccessDeniedException
  | ValidationException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets summary information about all your logging configurations in the AWS region where
 * the API request is processed.
 */
export const listLoggingConfigurations: API.PaginatedOperationMethod<
  ListLoggingConfigurationsRequest,
  ListLoggingConfigurationsResponse,
  ListLoggingConfigurationsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(23) as any as S.Schema<ListLoggingConfigurationsRequest>,
  output: __S(25) as any as S.Schema<ListLoggingConfigurationsResponse>,
  errors: [AccessDeniedException, ValidationException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListLoggingConfigurations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListRoomsError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ValidationException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets summary information about all your rooms in the AWS region where the API request is
 * processed. Results are sorted in descending order of `updateTime`.
 */
export const listRooms: API.PaginatedOperationMethod<
  ListRoomsRequest,
  ListRoomsResponse,
  ListRoomsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(26) as any as S.Schema<ListRoomsRequest>,
  output: __S(29) as any as S.Schema<ListRoomsResponse>,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ValidationException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRooms",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets information about AWS tags for the specified ARN.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(30) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(31) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type SendEventError =
  | AccessDeniedException
  | PendingVerification
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Sends an event to a room. Use this within your application's business logic to send
 * events to clients of a room; e.g., to notify clients to change the way the chat UI is
 * rendered.
 */
export const sendEvent: API.OperationMethod<
  SendEventRequest,
  SendEventResponse,
  SendEventError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(32) as any as S.Schema<SendEventRequest>,
  output: __S(17) as any as S.Schema<SendEventResponse>,
  errors: [
    AccessDeniedException,
    PendingVerification,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SendEvent",
}));

export type TagResourceError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | ThrottlingException
  | CommonErrors;
/**
 * Adds or updates tags for the AWS resource with the specified ARN.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(33) as any as S.Schema<TagResourceRequest>,
  output: __S(19) as any as S.Schema<TagResourceResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | ThrottlingException
  | CommonErrors;
/**
 * Removes tags from the resource with the specified ARN.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(34) as any as S.Schema<UntagResourceRequest>,
  output: __S(19) as any as S.Schema<UntagResourceResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateLoggingConfigurationError =
  | AccessDeniedException
  | ConflictException
  | PendingVerification
  | ResourceNotFoundException
  | ValidationException
  | ThrottlingException
  | CommonErrors;
/**
 * Updates a specified logging configuration.
 */
export const updateLoggingConfiguration: API.OperationMethod<
  UpdateLoggingConfigurationRequest,
  UpdateLoggingConfigurationResponse,
  UpdateLoggingConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(35) as any as S.Schema<UpdateLoggingConfigurationRequest>,
  output: __S(10) as any as S.Schema<UpdateLoggingConfigurationResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    PendingVerification,
    ResourceNotFoundException,
    ValidationException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateLoggingConfiguration",
}));

export type UpdateRoomError =
  | AccessDeniedException
  | PendingVerification
  | ResourceNotFoundException
  | ValidationException
  | ThrottlingException
  | CommonErrors;
/**
 * Updates a room's configuration.
 */
export const updateRoom: API.OperationMethod<
  UpdateRoomRequest,
  UpdateRoomResponse,
  UpdateRoomError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(36) as any as S.Schema<UpdateRoomRequest>,
  output: __S(13) as any as S.Schema<UpdateRoomResponse>,
  errors: [
    AccessDeniedException,
    PendingVerification,
    ResourceNotFoundException,
    ValidationException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateRoom",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 2:
      return S.suspend(() =>
        S.Struct({
          roomIdentifier: S.String,
          userId: SensitiveString,
          capabilities: S.optional(__S(0)),
          sessionDurationInMinutes: S.optional(S.Number),
          attributes: S.optional(__S(1)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/CreateChatToken" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateChatTokenRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          token: S.optional(SensitiveString),
          tokenExpirationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          sessionExpirationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "CreateChatTokenResponse" });
    case 4:
      return S.suspend(() => S.Struct({ bucketName: S.String })).annotate({
        identifier: "S3DestinationConfiguration",
      });
    case 5:
      return S.suspend(() => S.Struct({ logGroupName: S.String })).annotate({
        identifier: "CloudWatchLogsDestinationConfiguration",
      });
    case 6:
      return S.suspend(() => S.Struct({ deliveryStreamName: S.String })).annotate({
        identifier: "FirehoseDestinationConfiguration",
      });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ s3: __S(4) }),
        /*@__PURE__*/ S.Struct({ cloudWatchLogs: __S(5) }),
        /*@__PURE__*/ S.Struct({ firehose: __S(6) }),
      ]);
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 1:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          destinationConfiguration: __S(7),
          tags: S.optional(__S(8)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/CreateLoggingConfiguration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateLoggingConfigurationRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          id: S.optional(S.String),
          createTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updateTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          name: S.optional(S.String),
          destinationConfiguration: S.optional(__S(7)),
          state: S.optional(S.String),
          tags: S.optional(__S(8)),
        }),
      ).annotate({
        identifier: "CreateLoggingConfigurationResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ uri: S.optional(S.String), fallbackResult: S.optional(S.String) }),
      ).annotate({ identifier: "MessageReviewHandler" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          maximumMessageRatePerSecond: S.optional(S.Number),
          maximumMessageLength: S.optional(S.Number),
          messageReviewHandler: S.optional(__S(11)),
          tags: S.optional(__S(8)),
          loggingConfigurationIdentifiers: S.optional(__S(0)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/CreateRoom" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateRoomRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          id: S.optional(S.String),
          name: S.optional(S.String),
          createTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updateTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          maximumMessageRatePerSecond: S.optional(S.Number),
          maximumMessageLength: S.optional(S.Number),
          messageReviewHandler: S.optional(__S(11)),
          tags: S.optional(__S(8)),
          loggingConfigurationIdentifiers: S.optional(__S(0)),
        }),
      ).annotate({ identifier: "CreateRoomResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({ identifier: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DeleteLoggingConfiguration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteLoggingConfigurationRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteLoggingConfigurationResponse",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ roomIdentifier: S.String, id: S.String, reason: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/DeleteMessage" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteMessageRequest" });
    case 1:
      return S.suspend(() => S.Struct({ id: S.optional(S.String) })).annotate({
        identifier: "DeleteMessageResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ identifier: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/DeleteRoom" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteRoomRequest" });
    case 3:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteRoomResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          roomIdentifier: S.String,
          userId: SensitiveString,
          reason: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/DisconnectUser" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DisconnectUserRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ identifier: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/GetLoggingConfiguration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetLoggingConfigurationRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ identifier: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/GetRoom" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetRoomRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), maxResults: S.optional(S.Number) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListLoggingConfigurations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListLoggingConfigurationsRequest",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(10));
    case 1:
      return S.suspend(() =>
        S.Struct({
          loggingConfigurations: __S(24),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListLoggingConfigurationsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
          messageReviewHandlerUri: S.optional(S.String),
          loggingConfigurationIdentifier: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/ListRooms" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListRoomsRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          id: S.optional(S.String),
          name: S.optional(S.String),
          messageReviewHandler: S.optional(__S(11)),
          createTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updateTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          tags: S.optional(__S(8)),
          loggingConfigurationIdentifiers: S.optional(__S(0)),
        }),
      ).annotate({ identifier: "RoomSummary" });
    case 4:
      return S.Array(__S(27));
    case 5:
      return S.suspend(() =>
        S.Struct({ rooms: __S(28), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListRoomsResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ tags: __S(8) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          roomIdentifier: S.String,
          eventName: S.String,
          attributes: S.optional(__S(1)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/SendEvent" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "SendEventRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")), tags: __S(8) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tagKeys: __S(0).pipe(T.HttpQuery("tagKeys")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          identifier: S.String,
          name: S.optional(S.String),
          destinationConfiguration: S.optional(__S(7)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/UpdateLoggingConfiguration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateLoggingConfigurationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          identifier: S.String,
          name: S.optional(S.String),
          maximumMessageRatePerSecond: S.optional(S.Number),
          maximumMessageLength: S.optional(S.Number),
          messageReviewHandler: S.optional(__S(11)),
          loggingConfigurationIdentifiers: S.optional(__S(0)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/UpdateRoom" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdateRoomRequest" });
    case 5:
      return S.suspend(() => S.Struct({ name: S.String, message: S.String })).annotate({
        identifier: "ValidationExceptionField",
      });
    case 6:
      return S.Array(__S(37));
  }
}

// Schema table: entry i is built from builder (i >> shift), case (i & mask), on first reach.
function __S(i: number): any {
  return (__s[i] ??= __L.at(__b, i));
}
function __b(i: number): any {
  switch (i >> 3) {
    case 0:
      return __c0(i & 7);
    case 1:
      return __c1(i & 7);
    case 2:
      return __c2(i & 7);
    case 3:
      return __c3(i & 7);
    case 4:
      return __c4(i & 7);
  }
}
