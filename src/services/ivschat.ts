import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";
import { AWSServiceClient } from "../client.ts";

export declare class ivschat extends AWSServiceClient {
  createChatToken(
    input: CreateChatTokenRequest,
  ): Effect.Effect<
    CreateChatTokenResponse,
    | AccessDeniedException
    | PendingVerification
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  createLoggingConfiguration(
    input: CreateLoggingConfigurationRequest,
  ): Effect.Effect<
    CreateLoggingConfigurationResponse,
    | AccessDeniedException
    | ConflictException
    | PendingVerification
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  createRoom(
    input: CreateRoomRequest,
  ): Effect.Effect<
    CreateRoomResponse,
    | AccessDeniedException
    | ConflictException
    | PendingVerification
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError
  >;
  deleteLoggingConfiguration(
    input: DeleteLoggingConfigurationRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConflictException
    | PendingVerification
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deleteMessage(
    input: DeleteMessageRequest,
  ): Effect.Effect<
    DeleteMessageResponse,
    | AccessDeniedException
    | PendingVerification
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteRoom(
    input: DeleteRoomRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | PendingVerification
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  disconnectUser(
    input: DisconnectUserRequest,
  ): Effect.Effect<
    DisconnectUserResponse,
    | AccessDeniedException
    | PendingVerification
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getLoggingConfiguration(
    input: GetLoggingConfigurationRequest,
  ): Effect.Effect<
    GetLoggingConfigurationResponse,
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getRoom(
    input: GetRoomRequest,
  ): Effect.Effect<
    GetRoomResponse,
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listLoggingConfigurations(
    input: ListLoggingConfigurationsRequest,
  ): Effect.Effect<
    ListLoggingConfigurationsResponse,
    AccessDeniedException | ValidationException | CommonAwsError
  >;
  listRooms(
    input: ListRoomsRequest,
  ): Effect.Effect<
    ListRoomsResponse,
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  sendEvent(
    input: SendEventRequest,
  ): Effect.Effect<
    SendEventResponse,
    | AccessDeniedException
    | PendingVerification
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updateLoggingConfiguration(
    input: UpdateLoggingConfigurationRequest,
  ): Effect.Effect<
    UpdateLoggingConfigurationResponse,
    | AccessDeniedException
    | ConflictException
    | PendingVerification
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updateRoom(
    input: UpdateRoomRequest,
  ): Effect.Effect<
    UpdateRoomResponse,
    | AccessDeniedException
    | PendingVerification
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class Ivschat extends ivschat {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export type BucketName = string;

export type ChatToken = string;

export type ChatTokenAttributes = Record<string, string>;
export type ChatTokenCapabilities = Array<string>;
export type ChatTokenCapability = string;

export interface CloudWatchLogsDestinationConfiguration {
  logGroupName: string;
}
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}> {}
export interface CreateChatTokenRequest {
  roomIdentifier: string;
  userId: string;
  capabilities?: Array<string>;
  sessionDurationInMinutes?: number;
  attributes?: Record<string, string>;
}
export interface CreateChatTokenResponse {
  token?: string;
  tokenExpirationTime?: Date | string;
  sessionExpirationTime?: Date | string;
}
export interface CreateLoggingConfigurationRequest {
  name?: string;
  destinationConfiguration: DestinationConfiguration;
  tags?: Record<string, string>;
}
export interface CreateLoggingConfigurationResponse {
  arn?: string;
  id?: string;
  createTime?: Date | string;
  updateTime?: Date | string;
  name?: string;
  destinationConfiguration?: DestinationConfiguration;
  state?: string;
  tags?: Record<string, string>;
}
export type CreateLoggingConfigurationState = string;

export interface CreateRoomRequest {
  name?: string;
  maximumMessageRatePerSecond?: number;
  maximumMessageLength?: number;
  messageReviewHandler?: MessageReviewHandler;
  tags?: Record<string, string>;
  loggingConfigurationIdentifiers?: Array<string>;
}
export interface CreateRoomResponse {
  arn?: string;
  id?: string;
  name?: string;
  createTime?: Date | string;
  updateTime?: Date | string;
  maximumMessageRatePerSecond?: number;
  maximumMessageLength?: number;
  messageReviewHandler?: MessageReviewHandler;
  tags?: Record<string, string>;
  loggingConfigurationIdentifiers?: Array<string>;
}
export interface DeleteLoggingConfigurationRequest {
  identifier: string;
}
export interface DeleteMessageRequest {
  roomIdentifier: string;
  id: string;
  reason?: string;
}
export interface DeleteMessageResponse {
  id?: string;
}
export interface DeleteRoomRequest {
  identifier: string;
}
export type DeliveryStreamName = string;

interface _DestinationConfiguration {
  s3?: S3DestinationConfiguration;
  cloudWatchLogs?: CloudWatchLogsDestinationConfiguration;
  firehose?: FirehoseDestinationConfiguration;
}

export type DestinationConfiguration =
  | (_DestinationConfiguration & { s3: S3DestinationConfiguration })
  | (_DestinationConfiguration & {
      cloudWatchLogs: CloudWatchLogsDestinationConfiguration;
    })
  | (_DestinationConfiguration & {
      firehose: FirehoseDestinationConfiguration;
    });
export interface DisconnectUserRequest {
  roomIdentifier: string;
  userId: string;
  reason?: string;
}
export interface DisconnectUserResponse {}
export type ErrorMessage = string;

export type EventAttributes = Record<string, string>;
export type EventName = string;

export type FallbackResult = string;

export type FieldName = string;

export interface FirehoseDestinationConfiguration {
  deliveryStreamName: string;
}
export interface GetLoggingConfigurationRequest {
  identifier: string;
}
export interface GetLoggingConfigurationResponse {
  arn?: string;
  id?: string;
  createTime?: Date | string;
  updateTime?: Date | string;
  name?: string;
  destinationConfiguration?: DestinationConfiguration;
  state?: string;
  tags?: Record<string, string>;
}
export interface GetRoomRequest {
  identifier: string;
}
export interface GetRoomResponse {
  arn?: string;
  id?: string;
  name?: string;
  createTime?: Date | string;
  updateTime?: Date | string;
  maximumMessageRatePerSecond?: number;
  maximumMessageLength?: number;
  messageReviewHandler?: MessageReviewHandler;
  tags?: Record<string, string>;
  loggingConfigurationIdentifiers?: Array<string>;
}
export type ID = string;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
}> {}
export type LambdaArn = string;

export type Limit = number;

export interface ListLoggingConfigurationsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListLoggingConfigurationsResponse {
  loggingConfigurations: Array<LoggingConfigurationSummary>;
  nextToken?: string;
}
export interface ListRoomsRequest {
  name?: string;
  nextToken?: string;
  maxResults?: number;
  messageReviewHandlerUri?: string;
  loggingConfigurationIdentifier?: string;
}
export interface ListRoomsResponse {
  rooms: Array<RoomSummary>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags: Record<string, string>;
}
export type LoggingConfigurationArn = string;

export type LoggingConfigurationID = string;

export type LoggingConfigurationIdentifier = string;

export type LoggingConfigurationIdentifierList = Array<string>;
export type LoggingConfigurationList = Array<LoggingConfigurationSummary>;
export type LoggingConfigurationName = string;

export type LoggingConfigurationState = string;

export interface LoggingConfigurationSummary {
  arn?: string;
  id?: string;
  createTime?: Date | string;
  updateTime?: Date | string;
  name?: string;
  destinationConfiguration?: DestinationConfiguration;
  state?: string;
  tags?: Record<string, string>;
}
export type LogGroupName = string;

export type MaxLoggingConfigurationResults = number;

export type MaxRoomResults = number;

export type MessageID = string;

export interface MessageReviewHandler {
  uri?: string;
  fallbackResult?: string;
}
export type PaginationToken = string;

export declare class PendingVerification extends EffectData.TaggedError(
  "PendingVerification",
)<{
  readonly message: string;
}> {}
export type Reason = string;

export type ResourceArn = string;

export type ResourceId = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}> {}
export type ResourceType = string;

export type RoomArn = string;

export type RoomID = string;

export type RoomIdentifier = string;

export type RoomList = Array<RoomSummary>;
export type RoomMaxMessageLength = number;

export type RoomMaxMessageRatePerSecond = number;

export type RoomName = string;

export interface RoomSummary {
  arn?: string;
  id?: string;
  name?: string;
  messageReviewHandler?: MessageReviewHandler;
  createTime?: Date | string;
  updateTime?: Date | string;
  tags?: Record<string, string>;
  loggingConfigurationIdentifiers?: Array<string>;
}
export interface S3DestinationConfiguration {
  bucketName: string;
}
export interface SendEventRequest {
  roomIdentifier: string;
  eventName: string;
  attributes?: Record<string, string>;
}
export interface SendEventResponse {
  id?: string;
}
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
  readonly limit: number;
}> {}
export type SessionDurationInMinutes = number;

export type IvschatString = string;

export type TagKey = string;

export type TagKeyList = Array<string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type Tags = Record<string, string>;
export type TagValue = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
  readonly limit: number;
}> {}
export type Time = Date | string;

export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateLoggingConfigurationRequest {
  identifier: string;
  name?: string;
  destinationConfiguration?: DestinationConfiguration;
}
export interface UpdateLoggingConfigurationResponse {
  arn?: string;
  id?: string;
  createTime?: Date | string;
  updateTime?: Date | string;
  name?: string;
  destinationConfiguration?: DestinationConfiguration;
  state?: string;
  tags?: Record<string, string>;
}
export type UpdateLoggingConfigurationState = string;

export interface UpdateRoomRequest {
  identifier: string;
  name?: string;
  maximumMessageRatePerSecond?: number;
  maximumMessageLength?: number;
  messageReviewHandler?: MessageReviewHandler;
  loggingConfigurationIdentifiers?: Array<string>;
}
export interface UpdateRoomResponse {
  arn?: string;
  id?: string;
  name?: string;
  createTime?: Date | string;
  updateTime?: Date | string;
  maximumMessageRatePerSecond?: number;
  maximumMessageLength?: number;
  messageReviewHandler?: MessageReviewHandler;
  tags?: Record<string, string>;
  loggingConfigurationIdentifiers?: Array<string>;
}
export type UserID = string;

export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
  readonly reason: string;
  readonly fieldList?: Array<ValidationExceptionField>;
}> {}
export interface ValidationExceptionField {
  name: string;
  message: string;
}
export type ValidationExceptionFieldList = Array<ValidationExceptionField>;
export type ValidationExceptionReason = string;

export declare namespace CreateChatToken {
  export type Input = CreateChatTokenRequest;
  export type Output = CreateChatTokenResponse;
  export type Error =
    | AccessDeniedException
    | PendingVerification
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateLoggingConfiguration {
  export type Input = CreateLoggingConfigurationRequest;
  export type Output = CreateLoggingConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | PendingVerification
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateRoom {
  export type Input = CreateRoomRequest;
  export type Output = CreateRoomResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | PendingVerification
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteLoggingConfiguration {
  export type Input = DeleteLoggingConfigurationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | PendingVerification
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteMessage {
  export type Input = DeleteMessageRequest;
  export type Output = DeleteMessageResponse;
  export type Error =
    | AccessDeniedException
    | PendingVerification
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteRoom {
  export type Input = DeleteRoomRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | PendingVerification
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DisconnectUser {
  export type Input = DisconnectUserRequest;
  export type Output = DisconnectUserResponse;
  export type Error =
    | AccessDeniedException
    | PendingVerification
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetLoggingConfiguration {
  export type Input = GetLoggingConfigurationRequest;
  export type Output = GetLoggingConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetRoom {
  export type Input = GetRoomRequest;
  export type Output = GetRoomResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListLoggingConfigurations {
  export type Input = ListLoggingConfigurationsRequest;
  export type Output = ListLoggingConfigurationsResponse;
  export type Error =
    | AccessDeniedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListRooms {
  export type Input = ListRoomsRequest;
  export type Output = ListRoomsResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SendEvent {
  export type Input = SendEventRequest;
  export type Output = SendEventResponse;
  export type Error =
    | AccessDeniedException
    | PendingVerification
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateLoggingConfiguration {
  export type Input = UpdateLoggingConfigurationRequest;
  export type Output = UpdateLoggingConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | PendingVerification
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateRoom {
  export type Input = UpdateRoomRequest;
  export type Output = UpdateRoomResponse;
  export type Error =
    | AccessDeniedException
    | PendingVerification
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}
