import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface ChimeMessagingService {
  associateChannelFlow(
    input: AssociateChannelFlowRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  batchCreateChannelMembership(
    input: BatchCreateChannelMembershipRequest,
  ): Effect.Effect<
    BatchCreateChannelMembershipResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  channelFlowCallback(
    input: ChannelFlowCallbackRequest,
  ): Effect.Effect<
    ChannelFlowCallbackResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  createChannel(
    input: CreateChannelRequest,
  ): Effect.Effect<
    CreateChannelResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  createChannelBan(
    input: CreateChannelBanRequest,
  ): Effect.Effect<
    CreateChannelBanResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  createChannelFlow(
    input: CreateChannelFlowRequest,
  ): Effect.Effect<
    CreateChannelFlowResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  createChannelMembership(
    input: CreateChannelMembershipRequest,
  ): Effect.Effect<
    CreateChannelMembershipResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  createChannelModerator(
    input: CreateChannelModeratorRequest,
  ): Effect.Effect<
    CreateChannelModeratorResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  deleteChannel(
    input: DeleteChannelRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  deleteChannelBan(
    input: DeleteChannelBanRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  deleteChannelFlow(
    input: DeleteChannelFlowRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  deleteChannelMembership(
    input: DeleteChannelMembershipRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  deleteChannelMessage(
    input: DeleteChannelMessageRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  deleteChannelModerator(
    input: DeleteChannelModeratorRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  deleteMessagingStreamingConfigurations(
    input: DeleteMessagingStreamingConfigurationsRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  describeChannel(
    input: DescribeChannelRequest,
  ): Effect.Effect<
    DescribeChannelResponse,
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  describeChannelBan(
    input: DescribeChannelBanRequest,
  ): Effect.Effect<
    DescribeChannelBanResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  describeChannelFlow(
    input: DescribeChannelFlowRequest,
  ): Effect.Effect<
    DescribeChannelFlowResponse,
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  describeChannelMembership(
    input: DescribeChannelMembershipRequest,
  ): Effect.Effect<
    DescribeChannelMembershipResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  describeChannelMembershipForAppInstanceUser(
    input: DescribeChannelMembershipForAppInstanceUserRequest,
  ): Effect.Effect<
    DescribeChannelMembershipForAppInstanceUserResponse,
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  describeChannelModeratedByAppInstanceUser(
    input: DescribeChannelModeratedByAppInstanceUserRequest,
  ): Effect.Effect<
    DescribeChannelModeratedByAppInstanceUserResponse,
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  describeChannelModerator(
    input: DescribeChannelModeratorRequest,
  ): Effect.Effect<
    DescribeChannelModeratorResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  disassociateChannelFlow(
    input: DisassociateChannelFlowRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  getChannelMembershipPreferences(
    input: GetChannelMembershipPreferencesRequest,
  ): Effect.Effect<
    GetChannelMembershipPreferencesResponse,
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  getChannelMessage(
    input: GetChannelMessageRequest,
  ): Effect.Effect<
    GetChannelMessageResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  getChannelMessageStatus(
    input: GetChannelMessageStatusRequest,
  ): Effect.Effect<
    GetChannelMessageStatusResponse,
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  getMessagingSessionEndpoint(
    input: GetMessagingSessionEndpointRequest,
  ): Effect.Effect<
    GetMessagingSessionEndpointResponse,
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  getMessagingStreamingConfigurations(
    input: GetMessagingStreamingConfigurationsRequest,
  ): Effect.Effect<
    GetMessagingStreamingConfigurationsResponse,
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  listChannelBans(
    input: ListChannelBansRequest,
  ): Effect.Effect<
    ListChannelBansResponse,
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  listChannelFlows(
    input: ListChannelFlowsRequest,
  ): Effect.Effect<
    ListChannelFlowsResponse,
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  listChannelMemberships(
    input: ListChannelMembershipsRequest,
  ): Effect.Effect<
    ListChannelMembershipsResponse,
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  listChannelMembershipsForAppInstanceUser(
    input: ListChannelMembershipsForAppInstanceUserRequest,
  ): Effect.Effect<
    ListChannelMembershipsForAppInstanceUserResponse,
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  listChannelMessages(
    input: ListChannelMessagesRequest,
  ): Effect.Effect<
    ListChannelMessagesResponse,
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  listChannelModerators(
    input: ListChannelModeratorsRequest,
  ): Effect.Effect<
    ListChannelModeratorsResponse,
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  listChannels(
    input: ListChannelsRequest,
  ): Effect.Effect<
    ListChannelsResponse,
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  listChannelsAssociatedWithChannelFlow(
    input: ListChannelsAssociatedWithChannelFlowRequest,
  ): Effect.Effect<
    ListChannelsAssociatedWithChannelFlowResponse,
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  listChannelsModeratedByAppInstanceUser(
    input: ListChannelsModeratedByAppInstanceUserRequest,
  ): Effect.Effect<
    ListChannelsModeratedByAppInstanceUserResponse,
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  listSubChannels(
    input: ListSubChannelsRequest,
  ): Effect.Effect<
    ListSubChannelsResponse,
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  putChannelExpirationSettings(
    input: PutChannelExpirationSettingsRequest,
  ): Effect.Effect<
    PutChannelExpirationSettingsResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  putChannelMembershipPreferences(
    input: PutChannelMembershipPreferencesRequest,
  ): Effect.Effect<
    PutChannelMembershipPreferencesResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  putMessagingStreamingConfigurations(
    input: PutMessagingStreamingConfigurationsRequest,
  ): Effect.Effect<
    PutMessagingStreamingConfigurationsResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  redactChannelMessage(
    input: RedactChannelMessageRequest,
  ): Effect.Effect<
    RedactChannelMessageResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  searchChannels(
    input: SearchChannelsRequest,
  ): Effect.Effect<
    SearchChannelsResponse,
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  sendChannelMessage(
    input: SendChannelMessageRequest,
  ): Effect.Effect<
    SendChannelMessageResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  updateChannel(
    input: UpdateChannelRequest,
  ): Effect.Effect<
    UpdateChannelResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  updateChannelFlow(
    input: UpdateChannelFlowRequest,
  ): Effect.Effect<
    UpdateChannelFlowResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  updateChannelMessage(
    input: UpdateChannelMessageRequest,
  ): Effect.Effect<
    UpdateChannelMessageResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
  updateChannelReadMarker(
    input: UpdateChannelReadMarkerRequest,
  ): Effect.Effect<
    UpdateChannelReadMarkerResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError
  >;
}

export type ChimeSdkMessaging = ChimeMessagingService;

export type AllowNotifications = "ALL" | "NONE" | "FILTERED";
export interface AppInstanceUserMembershipSummary {
  Type?: ChannelMembershipType;
  ReadMarkerTimestamp?: Date | string;
  SubChannelId?: string;
}
export interface AssociateChannelFlowRequest {
  ChannelArn: string;
  ChannelFlowArn: string;
  ChimeBearer: string;
}
export declare class BadRequestException extends EffectData.TaggedError(
  "BadRequestException",
)<{
  readonly Code?: ErrorCode;
  readonly Message?: string;
}> {}
export interface BatchChannelMemberships {
  InvitedBy?: Identity;
  Type?: ChannelMembershipType;
  Members?: Array<Identity>;
  ChannelArn?: string;
  SubChannelId?: string;
}
export interface BatchCreateChannelMembershipError {
  MemberArn?: string;
  ErrorCode?: ErrorCode;
  ErrorMessage?: string;
}
export type BatchCreateChannelMembershipErrors =
  Array<BatchCreateChannelMembershipError>;
export interface BatchCreateChannelMembershipRequest {
  ChannelArn: string;
  Type?: ChannelMembershipType;
  MemberArns: Array<string>;
  ChimeBearer: string;
  SubChannelId?: string;
}
export interface BatchCreateChannelMembershipResponse {
  BatchChannelMemberships?: BatchChannelMemberships;
  Errors?: Array<BatchCreateChannelMembershipError>;
}
export type CallbackIdType = string;

export interface Channel {
  Name?: string;
  ChannelArn?: string;
  Mode?: ChannelMode;
  Privacy?: ChannelPrivacy;
  Metadata?: string;
  CreatedBy?: Identity;
  CreatedTimestamp?: Date | string;
  LastMessageTimestamp?: Date | string;
  LastUpdatedTimestamp?: Date | string;
  ChannelFlowArn?: string;
  ElasticChannelConfiguration?: ElasticChannelConfiguration;
  ExpirationSettings?: ExpirationSettings;
}
export interface ChannelAssociatedWithFlowSummary {
  Name?: string;
  ChannelArn?: string;
  Mode?: ChannelMode;
  Privacy?: ChannelPrivacy;
  Metadata?: string;
}
export type ChannelAssociatedWithFlowSummaryList =
  Array<ChannelAssociatedWithFlowSummary>;
export interface ChannelBan {
  Member?: Identity;
  ChannelArn?: string;
  CreatedTimestamp?: Date | string;
  CreatedBy?: Identity;
}
export interface ChannelBanSummary {
  Member?: Identity;
}
export type ChannelBanSummaryList = Array<ChannelBanSummary>;
export interface ChannelFlow {
  ChannelFlowArn?: string;
  Processors?: Array<Processor>;
  Name?: string;
  CreatedTimestamp?: Date | string;
  LastUpdatedTimestamp?: Date | string;
}
export interface ChannelFlowCallbackRequest {
  CallbackId: string;
  ChannelArn: string;
  DeleteResource?: boolean;
  ChannelMessage: ChannelMessageCallback;
}
export interface ChannelFlowCallbackResponse {
  ChannelArn?: string;
  CallbackId?: string;
}
export type ChannelFlowExecutionOrder = number;

export interface ChannelFlowSummary {
  ChannelFlowArn?: string;
  Name?: string;
  Processors?: Array<Processor>;
}
export type ChannelFlowSummaryList = Array<ChannelFlowSummary>;
export type ChannelId = string;

export type ChannelMemberArns = Array<string>;
export interface ChannelMembership {
  InvitedBy?: Identity;
  Type?: ChannelMembershipType;
  Member?: Identity;
  ChannelArn?: string;
  CreatedTimestamp?: Date | string;
  LastUpdatedTimestamp?: Date | string;
  SubChannelId?: string;
}
export interface ChannelMembershipForAppInstanceUserSummary {
  ChannelSummary?: ChannelSummary;
  AppInstanceUserMembershipSummary?: AppInstanceUserMembershipSummary;
}
export type ChannelMembershipForAppInstanceUserSummaryList =
  Array<ChannelMembershipForAppInstanceUserSummary>;
export interface ChannelMembershipPreferences {
  PushNotifications?: PushNotificationPreferences;
}
export interface ChannelMembershipSummary {
  Member?: Identity;
}
export type ChannelMembershipSummaryList = Array<ChannelMembershipSummary>;
export type ChannelMembershipType = "DEFAULT" | "HIDDEN";
export interface ChannelMessage {
  ChannelArn?: string;
  MessageId?: string;
  Content?: string;
  Metadata?: string;
  Type?: ChannelMessageType;
  CreatedTimestamp?: Date | string;
  LastEditedTimestamp?: Date | string;
  LastUpdatedTimestamp?: Date | string;
  Sender?: Identity;
  Redacted?: boolean;
  Persistence?: ChannelMessagePersistenceType;
  Status?: ChannelMessageStatusStructure;
  MessageAttributes?: Record<string, MessageAttributeValue>;
  SubChannelId?: string;
  ContentType?: string;
  Target?: Array<Target>;
}
export interface ChannelMessageCallback {
  MessageId: string;
  Content?: string;
  Metadata?: string;
  PushNotification?: PushNotificationConfiguration;
  MessageAttributes?: Record<string, MessageAttributeValue>;
  SubChannelId?: string;
  ContentType?: string;
}
export type ChannelMessagePersistenceType = "PERSISTENT" | "NON_PERSISTENT";
export type ChannelMessageStatus = "SENT" | "PENDING" | "FAILED" | "DENIED";
export interface ChannelMessageStatusStructure {
  Value?: ChannelMessageStatus;
  Detail?: string;
}
export interface ChannelMessageSummary {
  MessageId?: string;
  Content?: string;
  Metadata?: string;
  Type?: ChannelMessageType;
  CreatedTimestamp?: Date | string;
  LastUpdatedTimestamp?: Date | string;
  LastEditedTimestamp?: Date | string;
  Sender?: Identity;
  Redacted?: boolean;
  Status?: ChannelMessageStatusStructure;
  MessageAttributes?: Record<string, MessageAttributeValue>;
  ContentType?: string;
  Target?: Array<Target>;
}
export type ChannelMessageSummaryList = Array<ChannelMessageSummary>;
export type ChannelMessageType = "STANDARD" | "CONTROL";
export type ChannelMode = "UNRESTRICTED" | "RESTRICTED";
export interface ChannelModeratedByAppInstanceUserSummary {
  ChannelSummary?: ChannelSummary;
}
export type ChannelModeratedByAppInstanceUserSummaryList =
  Array<ChannelModeratedByAppInstanceUserSummary>;
export interface ChannelModerator {
  Moderator?: Identity;
  ChannelArn?: string;
  CreatedTimestamp?: Date | string;
  CreatedBy?: Identity;
}
export type ChannelModeratorArns = Array<string>;
export interface ChannelModeratorSummary {
  Moderator?: Identity;
}
export type ChannelModeratorSummaryList = Array<ChannelModeratorSummary>;
export type ChannelPrivacy = "PUBLIC" | "PRIVATE";
export interface ChannelSummary {
  Name?: string;
  ChannelArn?: string;
  Mode?: ChannelMode;
  Privacy?: ChannelPrivacy;
  Metadata?: string;
  LastMessageTimestamp?: Date | string;
}
export type ChannelSummaryList = Array<ChannelSummary>;
export type ChimeArn = string;

export type ClientRequestToken = string;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Code?: ErrorCode;
  readonly Message?: string;
}> {}
export type Content = string;

export type ContentType = string;

export interface CreateChannelBanRequest {
  ChannelArn: string;
  MemberArn: string;
  ChimeBearer: string;
}
export interface CreateChannelBanResponse {
  ChannelArn?: string;
  Member?: Identity;
}
export interface CreateChannelFlowRequest {
  AppInstanceArn: string;
  Processors: Array<Processor>;
  Name: string;
  Tags?: Array<Tag>;
  ClientRequestToken: string;
}
export interface CreateChannelFlowResponse {
  ChannelFlowArn?: string;
}
export interface CreateChannelMembershipRequest {
  ChannelArn: string;
  MemberArn: string;
  Type: ChannelMembershipType;
  ChimeBearer: string;
  SubChannelId?: string;
}
export interface CreateChannelMembershipResponse {
  ChannelArn?: string;
  Member?: Identity;
  SubChannelId?: string;
}
export interface CreateChannelModeratorRequest {
  ChannelArn: string;
  ChannelModeratorArn: string;
  ChimeBearer: string;
}
export interface CreateChannelModeratorResponse {
  ChannelArn?: string;
  ChannelModerator?: Identity;
}
export interface CreateChannelRequest {
  AppInstanceArn: string;
  Name: string;
  Mode?: ChannelMode;
  Privacy?: ChannelPrivacy;
  Metadata?: string;
  ClientRequestToken: string;
  Tags?: Array<Tag>;
  ChimeBearer: string;
  ChannelId?: string;
  MemberArns?: Array<string>;
  ModeratorArns?: Array<string>;
  ElasticChannelConfiguration?: ElasticChannelConfiguration;
  ExpirationSettings?: ExpirationSettings;
}
export interface CreateChannelResponse {
  ChannelArn?: string;
}
export interface DeleteChannelBanRequest {
  ChannelArn: string;
  MemberArn: string;
  ChimeBearer: string;
}
export interface DeleteChannelFlowRequest {
  ChannelFlowArn: string;
}
export interface DeleteChannelMembershipRequest {
  ChannelArn: string;
  MemberArn: string;
  ChimeBearer: string;
  SubChannelId?: string;
}
export interface DeleteChannelMessageRequest {
  ChannelArn: string;
  MessageId: string;
  ChimeBearer: string;
  SubChannelId?: string;
}
export interface DeleteChannelModeratorRequest {
  ChannelArn: string;
  ChannelModeratorArn: string;
  ChimeBearer: string;
}
export interface DeleteChannelRequest {
  ChannelArn: string;
  ChimeBearer: string;
}
export interface DeleteMessagingStreamingConfigurationsRequest {
  AppInstanceArn: string;
}
export interface DescribeChannelBanRequest {
  ChannelArn: string;
  MemberArn: string;
  ChimeBearer: string;
}
export interface DescribeChannelBanResponse {
  ChannelBan?: ChannelBan;
}
export interface DescribeChannelFlowRequest {
  ChannelFlowArn: string;
}
export interface DescribeChannelFlowResponse {
  ChannelFlow?: ChannelFlow;
}
export interface DescribeChannelMembershipForAppInstanceUserRequest {
  ChannelArn: string;
  AppInstanceUserArn: string;
  ChimeBearer: string;
}
export interface DescribeChannelMembershipForAppInstanceUserResponse {
  ChannelMembership?: ChannelMembershipForAppInstanceUserSummary;
}
export interface DescribeChannelMembershipRequest {
  ChannelArn: string;
  MemberArn: string;
  ChimeBearer: string;
  SubChannelId?: string;
}
export interface DescribeChannelMembershipResponse {
  ChannelMembership?: ChannelMembership;
}
export interface DescribeChannelModeratedByAppInstanceUserRequest {
  ChannelArn: string;
  AppInstanceUserArn: string;
  ChimeBearer: string;
}
export interface DescribeChannelModeratedByAppInstanceUserResponse {
  Channel?: ChannelModeratedByAppInstanceUserSummary;
}
export interface DescribeChannelModeratorRequest {
  ChannelArn: string;
  ChannelModeratorArn: string;
  ChimeBearer: string;
}
export interface DescribeChannelModeratorResponse {
  ChannelModerator?: ChannelModerator;
}
export interface DescribeChannelRequest {
  ChannelArn: string;
  ChimeBearer: string;
}
export interface DescribeChannelResponse {
  Channel?: Channel;
}
export interface DisassociateChannelFlowRequest {
  ChannelArn: string;
  ChannelFlowArn: string;
  ChimeBearer: string;
}
export interface ElasticChannelConfiguration {
  MaximumSubChannels: number;
  TargetMembershipsPerSubChannel: number;
  MinimumMembershipPercentage: number;
}
export type ErrorCode =
  | "BadRequest"
  | "Conflict"
  | "Forbidden"
  | "NotFound"
  | "PreconditionFailed"
  | "ResourceLimitExceeded"
  | "ServiceFailure"
  | "AccessDenied"
  | "ServiceUnavailable"
  | "Throttled"
  | "Throttling"
  | "Unauthorized"
  | "Unprocessable"
  | "VoiceConnectorGroupAssociationsExist"
  | "PhoneNumberAssociationsExist";
export type ExpirationCriterion =
  | "CREATED_TIMESTAMP"
  | "LAST_MESSAGE_TIMESTAMP";
export type ExpirationDays = number;

export interface ExpirationSettings {
  ExpirationDays: number;
  ExpirationCriterion: ExpirationCriterion;
}
export type FallbackAction = "CONTINUE" | "ABORT";
export type FilterRule = string;

export declare class ForbiddenException extends EffectData.TaggedError(
  "ForbiddenException",
)<{
  readonly Code?: ErrorCode;
  readonly Message?: string;
}> {}
export interface GetChannelMembershipPreferencesRequest {
  ChannelArn: string;
  MemberArn: string;
  ChimeBearer: string;
}
export interface GetChannelMembershipPreferencesResponse {
  ChannelArn?: string;
  Member?: Identity;
  Preferences?: ChannelMembershipPreferences;
}
export interface GetChannelMessageRequest {
  ChannelArn: string;
  MessageId: string;
  ChimeBearer: string;
  SubChannelId?: string;
}
export interface GetChannelMessageResponse {
  ChannelMessage?: ChannelMessage;
}
export interface GetChannelMessageStatusRequest {
  ChannelArn: string;
  MessageId: string;
  ChimeBearer: string;
  SubChannelId?: string;
}
export interface GetChannelMessageStatusResponse {
  Status?: ChannelMessageStatusStructure;
}
export interface GetMessagingSessionEndpointRequest {}
export interface GetMessagingSessionEndpointResponse {
  Endpoint?: MessagingSessionEndpoint;
}
export interface GetMessagingStreamingConfigurationsRequest {
  AppInstanceArn: string;
}
export interface GetMessagingStreamingConfigurationsResponse {
  StreamingConfigurations?: Array<StreamingConfiguration>;
}
export interface Identity {
  Arn?: string;
  Name?: string;
}
export type InvocationType = "ASYNC";
export interface LambdaConfiguration {
  ResourceArn: string;
  InvocationType: InvocationType;
}
export type LambdaFunctionArn = string;

export interface ListChannelBansRequest {
  ChannelArn: string;
  MaxResults?: number;
  NextToken?: string;
  ChimeBearer: string;
}
export interface ListChannelBansResponse {
  ChannelArn?: string;
  NextToken?: string;
  ChannelBans?: Array<ChannelBanSummary>;
}
export interface ListChannelFlowsRequest {
  AppInstanceArn: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListChannelFlowsResponse {
  ChannelFlows?: Array<ChannelFlowSummary>;
  NextToken?: string;
}
export interface ListChannelMembershipsForAppInstanceUserRequest {
  AppInstanceUserArn?: string;
  MaxResults?: number;
  NextToken?: string;
  ChimeBearer: string;
}
export interface ListChannelMembershipsForAppInstanceUserResponse {
  ChannelMemberships?: Array<ChannelMembershipForAppInstanceUserSummary>;
  NextToken?: string;
}
export interface ListChannelMembershipsRequest {
  ChannelArn: string;
  Type?: ChannelMembershipType;
  MaxResults?: number;
  NextToken?: string;
  ChimeBearer: string;
  SubChannelId?: string;
}
export interface ListChannelMembershipsResponse {
  ChannelArn?: string;
  ChannelMemberships?: Array<ChannelMembershipSummary>;
  NextToken?: string;
}
export interface ListChannelMessagesRequest {
  ChannelArn: string;
  SortOrder?: SortOrder;
  NotBefore?: Date | string;
  NotAfter?: Date | string;
  MaxResults?: number;
  NextToken?: string;
  ChimeBearer: string;
  SubChannelId?: string;
}
export interface ListChannelMessagesResponse {
  ChannelArn?: string;
  NextToken?: string;
  ChannelMessages?: Array<ChannelMessageSummary>;
  SubChannelId?: string;
}
export interface ListChannelModeratorsRequest {
  ChannelArn: string;
  MaxResults?: number;
  NextToken?: string;
  ChimeBearer: string;
}
export interface ListChannelModeratorsResponse {
  ChannelArn?: string;
  NextToken?: string;
  ChannelModerators?: Array<ChannelModeratorSummary>;
}
export interface ListChannelsAssociatedWithChannelFlowRequest {
  ChannelFlowArn: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListChannelsAssociatedWithChannelFlowResponse {
  Channels?: Array<ChannelAssociatedWithFlowSummary>;
  NextToken?: string;
}
export interface ListChannelsModeratedByAppInstanceUserRequest {
  AppInstanceUserArn?: string;
  MaxResults?: number;
  NextToken?: string;
  ChimeBearer: string;
}
export interface ListChannelsModeratedByAppInstanceUserResponse {
  Channels?: Array<ChannelModeratedByAppInstanceUserSummary>;
  NextToken?: string;
}
export interface ListChannelsRequest {
  AppInstanceArn: string;
  Privacy?: ChannelPrivacy;
  MaxResults?: number;
  NextToken?: string;
  ChimeBearer: string;
}
export interface ListChannelsResponse {
  Channels?: Array<ChannelSummary>;
  NextToken?: string;
}
export interface ListSubChannelsRequest {
  ChannelArn: string;
  ChimeBearer: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListSubChannelsResponse {
  ChannelArn?: string;
  SubChannels?: Array<SubChannelSummary>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceARN: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Array<Tag>;
}
export type MaximumSubChannels = number;

export type MaxResults = number;

export type MemberArns = Array<string>;
export type Members = Array<Identity>;
export type MembershipCount = number;

export type MessageAttributeMap = Record<string, MessageAttributeValue>;
export type MessageAttributeName = string;

export type MessageAttributeStringValue = string;

export type MessageAttributeStringValues = Array<string>;
export interface MessageAttributeValue {
  StringValues?: Array<string>;
}
export type MessageId = string;

export type MessagingDataType = "Channel" | "ChannelMessage";
export interface MessagingSessionEndpoint {
  Url?: string;
}
export type Metadata = string;

export type MinimumMembershipPercentage = number;

export type NextToken = string;

export type NonEmptyContent = string;

export type NonEmptyResourceName = string;

export type NonNullableBoolean = boolean;

export declare class NotFoundException extends EffectData.TaggedError(
  "NotFoundException",
)<{
  readonly Code?: ErrorCode;
  readonly Message?: string;
}> {}
export interface Processor {
  Name: string;
  Configuration: ProcessorConfiguration;
  ExecutionOrder: number;
  FallbackAction: FallbackAction;
}
export interface ProcessorConfiguration {
  Lambda: LambdaConfiguration;
}
export type ProcessorList = Array<Processor>;
export type PushNotificationBody = string;

export interface PushNotificationConfiguration {
  Title?: string;
  Body?: string;
  Type?: PushNotificationType;
}
export interface PushNotificationPreferences {
  AllowNotifications: AllowNotifications;
  FilterRule?: string;
}
export type PushNotificationTitle = string;

export type PushNotificationType = "DEFAULT" | "VOIP";
export interface PutChannelExpirationSettingsRequest {
  ChannelArn: string;
  ChimeBearer?: string;
  ExpirationSettings?: ExpirationSettings;
}
export interface PutChannelExpirationSettingsResponse {
  ChannelArn?: string;
  ExpirationSettings?: ExpirationSettings;
}
export interface PutChannelMembershipPreferencesRequest {
  ChannelArn: string;
  MemberArn: string;
  ChimeBearer: string;
  Preferences: ChannelMembershipPreferences;
}
export interface PutChannelMembershipPreferencesResponse {
  ChannelArn?: string;
  Member?: Identity;
  Preferences?: ChannelMembershipPreferences;
}
export interface PutMessagingStreamingConfigurationsRequest {
  AppInstanceArn: string;
  StreamingConfigurations: Array<StreamingConfiguration>;
}
export interface PutMessagingStreamingConfigurationsResponse {
  StreamingConfigurations?: Array<StreamingConfiguration>;
}
export interface RedactChannelMessageRequest {
  ChannelArn: string;
  MessageId: string;
  ChimeBearer: string;
  SubChannelId?: string;
}
export interface RedactChannelMessageResponse {
  ChannelArn?: string;
  MessageId?: string;
  SubChannelId?: string;
}
export declare class ResourceLimitExceededException extends EffectData.TaggedError(
  "ResourceLimitExceededException",
)<{
  readonly Code?: ErrorCode;
  readonly Message?: string;
}> {}
export type ResourceName = string;

export interface SearchChannelsRequest {
  ChimeBearer?: string;
  Fields: Array<SearchField>;
  MaxResults?: number;
  NextToken?: string;
}
export interface SearchChannelsResponse {
  Channels?: Array<ChannelSummary>;
  NextToken?: string;
}
export interface SearchField {
  Key: SearchFieldKey;
  Values: Array<string>;
  Operator: SearchFieldOperator;
}
export type SearchFieldKey = "MEMBERS";
export type SearchFieldOperator = "EQUALS" | "INCLUDES";
export type SearchFields = Array<SearchField>;
export type SearchFieldValue = string;

export type SearchFieldValues = Array<string>;
export interface SendChannelMessageRequest {
  ChannelArn: string;
  Content: string;
  Type: ChannelMessageType;
  Persistence: ChannelMessagePersistenceType;
  Metadata?: string;
  ClientRequestToken: string;
  ChimeBearer: string;
  PushNotification?: PushNotificationConfiguration;
  MessageAttributes?: Record<string, MessageAttributeValue>;
  SubChannelId?: string;
  ContentType?: string;
  Target?: Array<Target>;
}
export interface SendChannelMessageResponse {
  ChannelArn?: string;
  MessageId?: string;
  Status?: ChannelMessageStatusStructure;
  SubChannelId?: string;
}
export declare class ServiceFailureException extends EffectData.TaggedError(
  "ServiceFailureException",
)<{
  readonly Code?: ErrorCode;
  readonly Message?: string;
}> {}
export declare class ServiceUnavailableException extends EffectData.TaggedError(
  "ServiceUnavailableException",
)<{
  readonly Code?: ErrorCode;
  readonly Message?: string;
}> {}
export type SortOrder = "ASCENDING" | "DESCENDING";
export type StatusDetail = string;

export interface StreamingConfiguration {
  DataType: MessagingDataType;
  ResourceArn: string;
}
export type StreamingConfigurationList = Array<StreamingConfiguration>;
export type SubChannelId = string;

export interface SubChannelSummary {
  SubChannelId?: string;
  MembershipCount?: number;
}
export type SubChannelSummaryList = Array<SubChannelSummary>;
export interface Tag {
  Key: string;
  Value: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  ResourceARN: string;
  Tags: Array<Tag>;
}
export type TagValue = string;

export interface Target {
  MemberArn?: string;
}
export type TargetList = Array<Target>;
export type TargetMembershipsPerSubChannel = number;

export declare class ThrottledClientException extends EffectData.TaggedError(
  "ThrottledClientException",
)<{
  readonly Code?: ErrorCode;
  readonly Message?: string;
}> {}
export type Timestamp = Date | string;

export declare class UnauthorizedClientException extends EffectData.TaggedError(
  "UnauthorizedClientException",
)<{
  readonly Code?: ErrorCode;
  readonly Message?: string;
}> {}
export interface UntagResourceRequest {
  ResourceARN: string;
  TagKeys: Array<string>;
}
export interface UpdateChannelFlowRequest {
  ChannelFlowArn: string;
  Processors: Array<Processor>;
  Name: string;
}
export interface UpdateChannelFlowResponse {
  ChannelFlowArn?: string;
}
export interface UpdateChannelMessageRequest {
  ChannelArn: string;
  MessageId: string;
  Content: string;
  Metadata?: string;
  ChimeBearer: string;
  SubChannelId?: string;
  ContentType?: string;
}
export interface UpdateChannelMessageResponse {
  ChannelArn?: string;
  MessageId?: string;
  Status?: ChannelMessageStatusStructure;
  SubChannelId?: string;
}
export interface UpdateChannelReadMarkerRequest {
  ChannelArn: string;
  ChimeBearer: string;
}
export interface UpdateChannelReadMarkerResponse {
  ChannelArn?: string;
}
export interface UpdateChannelRequest {
  ChannelArn: string;
  Name?: string;
  Mode?: ChannelMode;
  Metadata?: string;
  ChimeBearer: string;
}
export interface UpdateChannelResponse {
  ChannelArn?: string;
}
export type UrlType = string;

export declare namespace AssociateChannelFlow {
  export type Input = AssociateChannelFlowRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace BatchCreateChannelMembership {
  export type Input = BatchCreateChannelMembershipRequest;
  export type Output = BatchCreateChannelMembershipResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace ChannelFlowCallback {
  export type Input = ChannelFlowCallbackRequest;
  export type Output = ChannelFlowCallbackResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace CreateChannel {
  export type Input = CreateChannelRequest;
  export type Output = CreateChannelResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace CreateChannelBan {
  export type Input = CreateChannelBanRequest;
  export type Output = CreateChannelBanResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace CreateChannelFlow {
  export type Input = CreateChannelFlowRequest;
  export type Output = CreateChannelFlowResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace CreateChannelMembership {
  export type Input = CreateChannelMembershipRequest;
  export type Output = CreateChannelMembershipResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace CreateChannelModerator {
  export type Input = CreateChannelModeratorRequest;
  export type Output = CreateChannelModeratorResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace DeleteChannel {
  export type Input = DeleteChannelRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace DeleteChannelBan {
  export type Input = DeleteChannelBanRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace DeleteChannelFlow {
  export type Input = DeleteChannelFlowRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace DeleteChannelMembership {
  export type Input = DeleteChannelMembershipRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace DeleteChannelMessage {
  export type Input = DeleteChannelMessageRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace DeleteChannelModerator {
  export type Input = DeleteChannelModeratorRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace DeleteMessagingStreamingConfigurations {
  export type Input = DeleteMessagingStreamingConfigurationsRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace DescribeChannel {
  export type Input = DescribeChannelRequest;
  export type Output = DescribeChannelResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace DescribeChannelBan {
  export type Input = DescribeChannelBanRequest;
  export type Output = DescribeChannelBanResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace DescribeChannelFlow {
  export type Input = DescribeChannelFlowRequest;
  export type Output = DescribeChannelFlowResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace DescribeChannelMembership {
  export type Input = DescribeChannelMembershipRequest;
  export type Output = DescribeChannelMembershipResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace DescribeChannelMembershipForAppInstanceUser {
  export type Input = DescribeChannelMembershipForAppInstanceUserRequest;
  export type Output = DescribeChannelMembershipForAppInstanceUserResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace DescribeChannelModeratedByAppInstanceUser {
  export type Input = DescribeChannelModeratedByAppInstanceUserRequest;
  export type Output = DescribeChannelModeratedByAppInstanceUserResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace DescribeChannelModerator {
  export type Input = DescribeChannelModeratorRequest;
  export type Output = DescribeChannelModeratorResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace DisassociateChannelFlow {
  export type Input = DisassociateChannelFlowRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace GetChannelMembershipPreferences {
  export type Input = GetChannelMembershipPreferencesRequest;
  export type Output = GetChannelMembershipPreferencesResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace GetChannelMessage {
  export type Input = GetChannelMessageRequest;
  export type Output = GetChannelMessageResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace GetChannelMessageStatus {
  export type Input = GetChannelMessageStatusRequest;
  export type Output = GetChannelMessageStatusResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace GetMessagingSessionEndpoint {
  export type Input = GetMessagingSessionEndpointRequest;
  export type Output = GetMessagingSessionEndpointResponse;
  export type Error =
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace GetMessagingStreamingConfigurations {
  export type Input = GetMessagingStreamingConfigurationsRequest;
  export type Output = GetMessagingStreamingConfigurationsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace ListChannelBans {
  export type Input = ListChannelBansRequest;
  export type Output = ListChannelBansResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace ListChannelFlows {
  export type Input = ListChannelFlowsRequest;
  export type Output = ListChannelFlowsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace ListChannelMemberships {
  export type Input = ListChannelMembershipsRequest;
  export type Output = ListChannelMembershipsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace ListChannelMembershipsForAppInstanceUser {
  export type Input = ListChannelMembershipsForAppInstanceUserRequest;
  export type Output = ListChannelMembershipsForAppInstanceUserResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace ListChannelMessages {
  export type Input = ListChannelMessagesRequest;
  export type Output = ListChannelMessagesResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace ListChannelModerators {
  export type Input = ListChannelModeratorsRequest;
  export type Output = ListChannelModeratorsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace ListChannels {
  export type Input = ListChannelsRequest;
  export type Output = ListChannelsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace ListChannelsAssociatedWithChannelFlow {
  export type Input = ListChannelsAssociatedWithChannelFlowRequest;
  export type Output = ListChannelsAssociatedWithChannelFlowResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace ListChannelsModeratedByAppInstanceUser {
  export type Input = ListChannelsModeratedByAppInstanceUserRequest;
  export type Output = ListChannelsModeratedByAppInstanceUserResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace ListSubChannels {
  export type Input = ListSubChannelsRequest;
  export type Output = ListSubChannelsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace PutChannelExpirationSettings {
  export type Input = PutChannelExpirationSettingsRequest;
  export type Output = PutChannelExpirationSettingsResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace PutChannelMembershipPreferences {
  export type Input = PutChannelMembershipPreferencesRequest;
  export type Output = PutChannelMembershipPreferencesResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace PutMessagingStreamingConfigurations {
  export type Input = PutMessagingStreamingConfigurationsRequest;
  export type Output = PutMessagingStreamingConfigurationsResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | NotFoundException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace RedactChannelMessage {
  export type Input = RedactChannelMessageRequest;
  export type Output = RedactChannelMessageResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace SearchChannels {
  export type Input = SearchChannelsRequest;
  export type Output = SearchChannelsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace SendChannelMessage {
  export type Input = SendChannelMessageRequest;
  export type Output = SendChannelMessageResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ResourceLimitExceededException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace UpdateChannel {
  export type Input = UpdateChannelRequest;
  export type Output = UpdateChannelResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace UpdateChannelFlow {
  export type Input = UpdateChannelFlowRequest;
  export type Output = UpdateChannelFlowResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace UpdateChannelMessage {
  export type Input = UpdateChannelMessageRequest;
  export type Output = UpdateChannelMessageResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}

export declare namespace UpdateChannelReadMarker {
  export type Input = UpdateChannelReadMarkerRequest;
  export type Output = UpdateChannelReadMarkerResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | ServiceFailureException
    | ServiceUnavailableException
    | ThrottledClientException
    | UnauthorizedClientException
    | CommonAwsError;
}
