import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface KinesisVideo_20170930 {
  createSignalingChannel(
    input: CreateSignalingChannelInput,
  ): Effect.Effect<
    CreateSignalingChannelOutput,
    AccessDeniedException | AccountChannelLimitExceededException | ClientLimitExceededException | InvalidArgumentException | ResourceInUseException | TagsPerResourceExceededLimitException | CommonAwsError
  >;
  createStream(
    input: CreateStreamInput,
  ): Effect.Effect<
    CreateStreamOutput,
    AccountStreamLimitExceededException | ClientLimitExceededException | DeviceStreamLimitExceededException | InvalidArgumentException | InvalidDeviceException | ResourceInUseException | TagsPerResourceExceededLimitException | CommonAwsError
  >;
  deleteEdgeConfiguration(
    input: DeleteEdgeConfigurationInput,
  ): Effect.Effect<
    DeleteEdgeConfigurationOutput,
    AccessDeniedException | ClientLimitExceededException | InvalidArgumentException | ResourceNotFoundException | StreamEdgeConfigurationNotFoundException | CommonAwsError
  >;
  deleteSignalingChannel(
    input: DeleteSignalingChannelInput,
  ): Effect.Effect<
    DeleteSignalingChannelOutput,
    AccessDeniedException | ClientLimitExceededException | InvalidArgumentException | ResourceInUseException | ResourceNotFoundException | VersionMismatchException | CommonAwsError
  >;
  deleteStream(
    input: DeleteStreamInput,
  ): Effect.Effect<
    DeleteStreamOutput,
    ClientLimitExceededException | InvalidArgumentException | NotAuthorizedException | ResourceInUseException | ResourceNotFoundException | VersionMismatchException | CommonAwsError
  >;
  describeEdgeConfiguration(
    input: DescribeEdgeConfigurationInput,
  ): Effect.Effect<
    DescribeEdgeConfigurationOutput,
    AccessDeniedException | ClientLimitExceededException | InvalidArgumentException | ResourceNotFoundException | StreamEdgeConfigurationNotFoundException | CommonAwsError
  >;
  describeImageGenerationConfiguration(
    input: DescribeImageGenerationConfigurationInput,
  ): Effect.Effect<
    DescribeImageGenerationConfigurationOutput,
    AccessDeniedException | ClientLimitExceededException | InvalidArgumentException | ResourceNotFoundException | CommonAwsError
  >;
  describeMappedResourceConfiguration(
    input: DescribeMappedResourceConfigurationInput,
  ): Effect.Effect<
    DescribeMappedResourceConfigurationOutput,
    AccessDeniedException | ClientLimitExceededException | InvalidArgumentException | ResourceNotFoundException | CommonAwsError
  >;
  describeMediaStorageConfiguration(
    input: DescribeMediaStorageConfigurationInput,
  ): Effect.Effect<
    DescribeMediaStorageConfigurationOutput,
    AccessDeniedException | ClientLimitExceededException | InvalidArgumentException | ResourceNotFoundException | CommonAwsError
  >;
  describeNotificationConfiguration(
    input: DescribeNotificationConfigurationInput,
  ): Effect.Effect<
    DescribeNotificationConfigurationOutput,
    AccessDeniedException | ClientLimitExceededException | InvalidArgumentException | ResourceNotFoundException | CommonAwsError
  >;
  describeSignalingChannel(
    input: DescribeSignalingChannelInput,
  ): Effect.Effect<
    DescribeSignalingChannelOutput,
    AccessDeniedException | ClientLimitExceededException | InvalidArgumentException | ResourceNotFoundException | CommonAwsError
  >;
  describeStream(
    input: DescribeStreamInput,
  ): Effect.Effect<
    DescribeStreamOutput,
    ClientLimitExceededException | InvalidArgumentException | NotAuthorizedException | ResourceNotFoundException | CommonAwsError
  >;
  getDataEndpoint(
    input: GetDataEndpointInput,
  ): Effect.Effect<
    GetDataEndpointOutput,
    ClientLimitExceededException | InvalidArgumentException | NotAuthorizedException | ResourceNotFoundException | CommonAwsError
  >;
  getSignalingChannelEndpoint(
    input: GetSignalingChannelEndpointInput,
  ): Effect.Effect<
    GetSignalingChannelEndpointOutput,
    AccessDeniedException | ClientLimitExceededException | InvalidArgumentException | ResourceInUseException | ResourceNotFoundException | CommonAwsError
  >;
  listEdgeAgentConfigurations(
    input: ListEdgeAgentConfigurationsInput,
  ): Effect.Effect<
    ListEdgeAgentConfigurationsOutput,
    ClientLimitExceededException | InvalidArgumentException | NotAuthorizedException | CommonAwsError
  >;
  listSignalingChannels(
    input: ListSignalingChannelsInput,
  ): Effect.Effect<
    ListSignalingChannelsOutput,
    AccessDeniedException | ClientLimitExceededException | InvalidArgumentException | CommonAwsError
  >;
  listStreams(
    input: ListStreamsInput,
  ): Effect.Effect<
    ListStreamsOutput,
    ClientLimitExceededException | InvalidArgumentException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceInput,
  ): Effect.Effect<
    ListTagsForResourceOutput,
    AccessDeniedException | ClientLimitExceededException | InvalidArgumentException | ResourceNotFoundException | CommonAwsError
  >;
  listTagsForStream(
    input: ListTagsForStreamInput,
  ): Effect.Effect<
    ListTagsForStreamOutput,
    ClientLimitExceededException | InvalidArgumentException | InvalidResourceFormatException | NotAuthorizedException | ResourceNotFoundException | CommonAwsError
  >;
  startEdgeConfigurationUpdate(
    input: StartEdgeConfigurationUpdateInput,
  ): Effect.Effect<
    StartEdgeConfigurationUpdateOutput,
    AccessDeniedException | ClientLimitExceededException | InvalidArgumentException | NoDataRetentionException | ResourceInUseException | ResourceNotFoundException | CommonAwsError
  >;
  tagResource(
    input: TagResourceInput,
  ): Effect.Effect<
    TagResourceOutput,
    AccessDeniedException | ClientLimitExceededException | InvalidArgumentException | ResourceNotFoundException | TagsPerResourceExceededLimitException | CommonAwsError
  >;
  tagStream(
    input: TagStreamInput,
  ): Effect.Effect<
    TagStreamOutput,
    ClientLimitExceededException | InvalidArgumentException | InvalidResourceFormatException | NotAuthorizedException | ResourceNotFoundException | TagsPerResourceExceededLimitException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceInput,
  ): Effect.Effect<
    UntagResourceOutput,
    AccessDeniedException | ClientLimitExceededException | InvalidArgumentException | ResourceNotFoundException | CommonAwsError
  >;
  untagStream(
    input: UntagStreamInput,
  ): Effect.Effect<
    UntagStreamOutput,
    ClientLimitExceededException | InvalidArgumentException | InvalidResourceFormatException | NotAuthorizedException | ResourceNotFoundException | CommonAwsError
  >;
  updateDataRetention(
    input: UpdateDataRetentionInput,
  ): Effect.Effect<
    UpdateDataRetentionOutput,
    ClientLimitExceededException | InvalidArgumentException | NotAuthorizedException | ResourceInUseException | ResourceNotFoundException | VersionMismatchException | CommonAwsError
  >;
  updateImageGenerationConfiguration(
    input: UpdateImageGenerationConfigurationInput,
  ): Effect.Effect<
    UpdateImageGenerationConfigurationOutput,
    AccessDeniedException | ClientLimitExceededException | InvalidArgumentException | NoDataRetentionException | ResourceInUseException | ResourceNotFoundException | CommonAwsError
  >;
  updateMediaStorageConfiguration(
    input: UpdateMediaStorageConfigurationInput,
  ): Effect.Effect<
    UpdateMediaStorageConfigurationOutput,
    AccessDeniedException | ClientLimitExceededException | InvalidArgumentException | NoDataRetentionException | ResourceInUseException | ResourceNotFoundException | CommonAwsError
  >;
  updateNotificationConfiguration(
    input: UpdateNotificationConfigurationInput,
  ): Effect.Effect<
    UpdateNotificationConfigurationOutput,
    AccessDeniedException | ClientLimitExceededException | InvalidArgumentException | NoDataRetentionException | ResourceInUseException | ResourceNotFoundException | CommonAwsError
  >;
  updateSignalingChannel(
    input: UpdateSignalingChannelInput,
  ): Effect.Effect<
    UpdateSignalingChannelOutput,
    AccessDeniedException | ClientLimitExceededException | InvalidArgumentException | ResourceInUseException | ResourceNotFoundException | VersionMismatchException | CommonAwsError
  >;
  updateStream(
    input: UpdateStreamInput,
  ): Effect.Effect<
    UpdateStreamOutput,
    ClientLimitExceededException | InvalidArgumentException | NotAuthorizedException | ResourceInUseException | ResourceNotFoundException | VersionMismatchException | CommonAwsError
  >;
}

export type KinesisVideo = KinesisVideo_20170930;

export declare class AccessDeniedException extends Data.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
}> {}
export declare class AccountChannelLimitExceededException extends Data.TaggedError(
  "AccountChannelLimitExceededException",
)<{
  readonly Message?: string;
}> {}
export declare class AccountStreamLimitExceededException extends Data.TaggedError(
  "AccountStreamLimitExceededException",
)<{
  readonly Message?: string;
}> {}
export type APIName = "PUT_MEDIA" | "GET_MEDIA" | "LIST_FRAGMENTS" | "GET_MEDIA_FOR_FRAGMENT_LIST" | "GET_HLS_STREAMING_SESSION_URL" | "GET_DASH_STREAMING_SESSION_URL" | "GET_CLIP" | "GET_IMAGES";
export interface ChannelInfo {
  ChannelName?: string;
  ChannelARN?: string;
  ChannelType?: ChannelType;
  ChannelStatus?: Status;
  CreationTime?: Date | string;
  SingleMasterConfiguration?: SingleMasterConfiguration;
  Version?: string;
}
export type ChannelInfoList = Array<ChannelInfo>;
export type ChannelName = string;

export interface ChannelNameCondition {
  ComparisonOperator?: ComparisonOperator;
  ComparisonValue?: string;
}
export type ChannelProtocol = "WSS" | "HTTPS" | "WEBRTC";
export type ChannelRole = "MASTER" | "VIEWER";
export type ChannelType = "SINGLE_MASTER" | "FULL_MESH";
export declare class ClientLimitExceededException extends Data.TaggedError(
  "ClientLimitExceededException",
)<{
  readonly Message?: string;
}> {}
export type ComparisonOperator = "BEGINS_WITH";
export type ConfigurationStatus = "ENABLED" | "DISABLED";
export interface CreateSignalingChannelInput {
  ChannelName: string;
  ChannelType?: ChannelType;
  SingleMasterConfiguration?: SingleMasterConfiguration;
  Tags?: Array<Tag>;
}
export interface CreateSignalingChannelOutput {
  ChannelARN?: string;
}
export interface CreateStreamInput {
  DeviceName?: string;
  StreamName: string;
  MediaType?: string;
  KmsKeyId?: string;
  DataRetentionInHours?: number;
  Tags?: Record<string, string>;
}
export interface CreateStreamOutput {
  StreamARN?: string;
}
export type DataEndpoint = string;

export type DataRetentionChangeInHours = number;

export type DataRetentionInHours = number;

export type DeleteAfterUpload = boolean;

export interface DeleteEdgeConfigurationInput {
  StreamName?: string;
  StreamARN?: string;
}
export interface DeleteEdgeConfigurationOutput {
}
export interface DeleteSignalingChannelInput {
  ChannelARN: string;
  CurrentVersion?: string;
}
export interface DeleteSignalingChannelOutput {
}
export interface DeleteStreamInput {
  StreamARN: string;
  CurrentVersion?: string;
}
export interface DeleteStreamOutput {
}
export interface DeletionConfig {
  EdgeRetentionInHours?: number;
  LocalSizeConfig?: LocalSizeConfig;
  DeleteAfterUpload?: boolean;
}
export interface DescribeEdgeConfigurationInput {
  StreamName?: string;
  StreamARN?: string;
}
export interface DescribeEdgeConfigurationOutput {
  StreamName?: string;
  StreamARN?: string;
  CreationTime?: Date | string;
  LastUpdatedTime?: Date | string;
  SyncStatus?: SyncStatus;
  FailedStatusDetails?: string;
  EdgeConfig?: EdgeConfig;
  EdgeAgentStatus?: EdgeAgentStatus;
}
export interface DescribeImageGenerationConfigurationInput {
  StreamName?: string;
  StreamARN?: string;
}
export interface DescribeImageGenerationConfigurationOutput {
  ImageGenerationConfiguration?: ImageGenerationConfiguration;
}
export interface DescribeMappedResourceConfigurationInput {
  StreamName?: string;
  StreamARN?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeMappedResourceConfigurationOutput {
  MappedResourceConfigurationList?: Array<MappedResourceConfigurationListItem>;
  NextToken?: string;
}
export interface DescribeMediaStorageConfigurationInput {
  ChannelName?: string;
  ChannelARN?: string;
}
export interface DescribeMediaStorageConfigurationOutput {
  MediaStorageConfiguration?: MediaStorageConfiguration;
}
export interface DescribeNotificationConfigurationInput {
  StreamName?: string;
  StreamARN?: string;
}
export interface DescribeNotificationConfigurationOutput {
  NotificationConfiguration?: NotificationConfiguration;
}
export interface DescribeSignalingChannelInput {
  ChannelName?: string;
  ChannelARN?: string;
}
export interface DescribeSignalingChannelOutput {
  ChannelInfo?: ChannelInfo;
}
export interface DescribeStreamInput {
  StreamName?: string;
  StreamARN?: string;
}
export interface DescribeStreamOutput {
  StreamInfo?: StreamInfo;
}
export type DestinationRegion = string;

export type DestinationUri = string;

export type DeviceName = string;

export declare class DeviceStreamLimitExceededException extends Data.TaggedError(
  "DeviceStreamLimitExceededException",
)<{
  readonly Message?: string;
}> {}
export type DurationInSeconds = number;

export interface EdgeAgentStatus {
  LastRecorderStatus?: LastRecorderStatus;
  LastUploaderStatus?: LastUploaderStatus;
}
export interface EdgeConfig {
  HubDeviceArn: string;
  RecorderConfig: RecorderConfig;
  UploaderConfig?: UploaderConfig;
  DeletionConfig?: DeletionConfig;
}
export type EdgeRetentionInHours = number;

export type ErrorMessage = string;

export type FailedStatusDetails = string;

export type Format = "JPEG" | "PNG";
export type FormatConfig = Record<FormatConfigKey, string>;
export type FormatConfigKey = "JPEGQuality";
export type FormatConfigValue = string;

export interface GetDataEndpointInput {
  StreamName?: string;
  StreamARN?: string;
  APIName: APIName;
}
export interface GetDataEndpointOutput {
  DataEndpoint?: string;
}
export interface GetSignalingChannelEndpointInput {
  ChannelARN: string;
  SingleMasterChannelEndpointConfiguration?: SingleMasterChannelEndpointConfiguration;
}
export interface GetSignalingChannelEndpointOutput {
  ResourceEndpointList?: Array<ResourceEndpointListItem>;
}
export type HeightPixels = number;

export type HubDeviceArn = string;

export interface ImageGenerationConfiguration {
  Status: ConfigurationStatus;
  ImageSelectorType: ImageSelectorType;
  DestinationConfig: ImageGenerationDestinationConfig;
  SamplingInterval: number;
  Format: Format;
  FormatConfig?: Record<FormatConfigKey, string>;
  WidthPixels?: number;
  HeightPixels?: number;
}
export interface ImageGenerationDestinationConfig {
  Uri: string;
  DestinationRegion: string;
}
export type ImageSelectorType = "SERVER_TIMESTAMP" | "PRODUCER_TIMESTAMP";
export declare class InvalidArgumentException extends Data.TaggedError(
  "InvalidArgumentException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidDeviceException extends Data.TaggedError(
  "InvalidDeviceException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidResourceFormatException extends Data.TaggedError(
  "InvalidResourceFormatException",
)<{
  readonly Message?: string;
}> {}
export type JobStatusDetails = string;

export type KmsKeyId = string;

export interface LastRecorderStatus {
  JobStatusDetails?: string;
  LastCollectedTime?: Date | string;
  LastUpdatedTime?: Date | string;
  RecorderStatus?: RecorderStatus;
}
export interface LastUploaderStatus {
  JobStatusDetails?: string;
  LastCollectedTime?: Date | string;
  LastUpdatedTime?: Date | string;
  UploaderStatus?: UploaderStatus;
}
export interface ListEdgeAgentConfigurationsEdgeConfig {
  StreamName?: string;
  StreamARN?: string;
  CreationTime?: Date | string;
  LastUpdatedTime?: Date | string;
  SyncStatus?: SyncStatus;
  FailedStatusDetails?: string;
  EdgeConfig?: EdgeConfig;
}
export type ListEdgeAgentConfigurationsEdgeConfigList = Array<ListEdgeAgentConfigurationsEdgeConfig>;
export interface ListEdgeAgentConfigurationsInput {
  HubDeviceArn: string;
  MaxResults?: number;
  NextToken?: string;
}
export type ListEdgeAgentConfigurationsInputLimit = number;

export interface ListEdgeAgentConfigurationsOutput {
  EdgeConfigs?: Array<ListEdgeAgentConfigurationsEdgeConfig>;
  NextToken?: string;
}
export type ListOfProtocols = Array<ChannelProtocol>;
export interface ListSignalingChannelsInput {
  MaxResults?: number;
  NextToken?: string;
  ChannelNameCondition?: ChannelNameCondition;
}
export interface ListSignalingChannelsOutput {
  ChannelInfoList?: Array<ChannelInfo>;
  NextToken?: string;
}
export interface ListStreamsInput {
  MaxResults?: number;
  NextToken?: string;
  StreamNameCondition?: StreamNameCondition;
}
export type ListStreamsInputLimit = number;

export interface ListStreamsOutput {
  StreamInfoList?: Array<StreamInfo>;
  NextToken?: string;
}
export interface ListTagsForResourceInput {
  NextToken?: string;
  ResourceARN: string;
}
export interface ListTagsForResourceOutput {
  NextToken?: string;
  Tags?: Record<string, string>;
}
export interface ListTagsForStreamInput {
  NextToken?: string;
  StreamARN?: string;
  StreamName?: string;
}
export interface ListTagsForStreamOutput {
  NextToken?: string;
  Tags?: Record<string, string>;
}
export interface LocalSizeConfig {
  MaxLocalMediaSizeInMB?: number;
  StrategyOnFullSize?: StrategyOnFullSize;
}
export type MappedResourceConfigurationList = Array<MappedResourceConfigurationListItem>;
export interface MappedResourceConfigurationListItem {
  Type?: string;
  ARN?: string;
}
export type MappedResourceConfigurationListLimit = number;

export type MaxLocalMediaSizeInMB = number;

export interface MediaSourceConfig {
  MediaUriSecretArn: string;
  MediaUriType: MediaUriType;
}
export interface MediaStorageConfiguration {
  StreamARN?: string;
  Status: MediaStorageConfigurationStatus;
}
export type MediaStorageConfigurationStatus = "ENABLED" | "DISABLED";
export type MediaType = string;

export type MediaUriSecretArn = string;

export type MediaUriType = "RTSP_URI" | "FILE_URI";
export type MessageTtlSeconds = number;

export type NextToken = string;

export declare class NoDataRetentionException extends Data.TaggedError(
  "NoDataRetentionException",
)<{
  readonly Message?: string;
}> {}
export declare class NotAuthorizedException extends Data.TaggedError(
  "NotAuthorizedException",
)<{
  readonly Message?: string;
}> {}
export interface NotificationConfiguration {
  Status: ConfigurationStatus;
  DestinationConfig: NotificationDestinationConfig;
}
export interface NotificationDestinationConfig {
  Uri: string;
}
export interface RecorderConfig {
  MediaSourceConfig: MediaSourceConfig;
  ScheduleConfig?: ScheduleConfig;
}
export type RecorderStatus = "SUCCESS" | "USER_ERROR" | "SYSTEM_ERROR";
export type ResourceARN = string;

export type ResourceEndpoint = string;

export type ResourceEndpointList = Array<ResourceEndpointListItem>;
export interface ResourceEndpointListItem {
  Protocol?: ChannelProtocol;
  ResourceEndpoint?: string;
}
export declare class ResourceInUseException extends Data.TaggedError(
  "ResourceInUseException",
)<{
  readonly Message?: string;
}> {}
export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type ResourceTags = Record<string, string>;
export type SamplingInterval = number;

export interface ScheduleConfig {
  ScheduleExpression: string;
  DurationInSeconds: number;
}
export type ScheduleExpression = string;

export interface SingleMasterChannelEndpointConfiguration {
  Protocols?: Array<ChannelProtocol>;
  Role?: ChannelRole;
}
export interface SingleMasterConfiguration {
  MessageTtlSeconds?: number;
}
export interface StartEdgeConfigurationUpdateInput {
  StreamName?: string;
  StreamARN?: string;
  EdgeConfig: EdgeConfig;
}
export interface StartEdgeConfigurationUpdateOutput {
  StreamName?: string;
  StreamARN?: string;
  CreationTime?: Date | string;
  LastUpdatedTime?: Date | string;
  SyncStatus?: SyncStatus;
  FailedStatusDetails?: string;
  EdgeConfig?: EdgeConfig;
}
export type Status = "CREATING" | "ACTIVE" | "UPDATING" | "DELETING";
export type StrategyOnFullSize = "DELETE_OLDEST_MEDIA" | "DENY_NEW_MEDIA";
export declare class StreamEdgeConfigurationNotFoundException extends Data.TaggedError(
  "StreamEdgeConfigurationNotFoundException",
)<{
  readonly Message?: string;
}> {}
export interface StreamInfo {
  DeviceName?: string;
  StreamName?: string;
  StreamARN?: string;
  MediaType?: string;
  KmsKeyId?: string;
  Version?: string;
  Status?: Status;
  CreationTime?: Date | string;
  DataRetentionInHours?: number;
}
export type StreamInfoList = Array<StreamInfo>;
export type StreamName = string;

export interface StreamNameCondition {
  ComparisonOperator?: ComparisonOperator;
  ComparisonValue?: string;
}
export type SyncStatus = "SYNCING" | "ACKNOWLEDGED" | "IN_SYNC" | "SYNC_FAILED" | "DELETING" | "DELETE_FAILED" | "DELETING_ACKNOWLEDGED";
export interface Tag {
  Key: string;
  Value: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export type TagOnCreateList = Array<Tag>;
export interface TagResourceInput {
  ResourceARN: string;
  Tags: Array<Tag>;
}
export interface TagResourceOutput {
}
export declare class TagsPerResourceExceededLimitException extends Data.TaggedError(
  "TagsPerResourceExceededLimitException",
)<{
  readonly Message?: string;
}> {}
export interface TagStreamInput {
  StreamARN?: string;
  StreamName?: string;
  Tags: Record<string, string>;
}
export interface TagStreamOutput {
}
export type TagValue = string;

export type Timestamp = Date | string;

export type Type = string;

export interface UntagResourceInput {
  ResourceARN: string;
  TagKeyList: Array<string>;
}
export interface UntagResourceOutput {
}
export interface UntagStreamInput {
  StreamARN?: string;
  StreamName?: string;
  TagKeyList: Array<string>;
}
export interface UntagStreamOutput {
}
export interface UpdateDataRetentionInput {
  StreamName?: string;
  StreamARN?: string;
  CurrentVersion: string;
  Operation: UpdateDataRetentionOperation;
  DataRetentionChangeInHours: number;
}
export type UpdateDataRetentionOperation = "INCREASE_DATA_RETENTION" | "DECREASE_DATA_RETENTION";
export interface UpdateDataRetentionOutput {
}
export interface UpdateImageGenerationConfigurationInput {
  StreamName?: string;
  StreamARN?: string;
  ImageGenerationConfiguration?: ImageGenerationConfiguration;
}
export interface UpdateImageGenerationConfigurationOutput {
}
export interface UpdateMediaStorageConfigurationInput {
  ChannelARN: string;
  MediaStorageConfiguration: MediaStorageConfiguration;
}
export interface UpdateMediaStorageConfigurationOutput {
}
export interface UpdateNotificationConfigurationInput {
  StreamName?: string;
  StreamARN?: string;
  NotificationConfiguration?: NotificationConfiguration;
}
export interface UpdateNotificationConfigurationOutput {
}
export interface UpdateSignalingChannelInput {
  ChannelARN: string;
  CurrentVersion: string;
  SingleMasterConfiguration?: SingleMasterConfiguration;
}
export interface UpdateSignalingChannelOutput {
}
export interface UpdateStreamInput {
  StreamName?: string;
  StreamARN?: string;
  CurrentVersion: string;
  DeviceName?: string;
  MediaType?: string;
}
export interface UpdateStreamOutput {
}
export interface UploaderConfig {
  ScheduleConfig: ScheduleConfig;
}
export type UploaderStatus = "SUCCESS" | "USER_ERROR" | "SYSTEM_ERROR";
export type Version = string;

export declare class VersionMismatchException extends Data.TaggedError(
  "VersionMismatchException",
)<{
  readonly Message?: string;
}> {}
export type WidthPixels = number;

export declare namespace CreateSignalingChannel {
  export type Input = CreateSignalingChannelInput;
  export type Output = CreateSignalingChannelOutput;
  export type Error =
    | AccessDeniedException
    | AccountChannelLimitExceededException
    | ClientLimitExceededException
    | InvalidArgumentException
    | ResourceInUseException
    | TagsPerResourceExceededLimitException
    | CommonAwsError;
}

export declare namespace CreateStream {
  export type Input = CreateStreamInput;
  export type Output = CreateStreamOutput;
  export type Error =
    | AccountStreamLimitExceededException
    | ClientLimitExceededException
    | DeviceStreamLimitExceededException
    | InvalidArgumentException
    | InvalidDeviceException
    | ResourceInUseException
    | TagsPerResourceExceededLimitException
    | CommonAwsError;
}

export declare namespace DeleteEdgeConfiguration {
  export type Input = DeleteEdgeConfigurationInput;
  export type Output = DeleteEdgeConfigurationOutput;
  export type Error =
    | AccessDeniedException
    | ClientLimitExceededException
    | InvalidArgumentException
    | ResourceNotFoundException
    | StreamEdgeConfigurationNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteSignalingChannel {
  export type Input = DeleteSignalingChannelInput;
  export type Output = DeleteSignalingChannelOutput;
  export type Error =
    | AccessDeniedException
    | ClientLimitExceededException
    | InvalidArgumentException
    | ResourceInUseException
    | ResourceNotFoundException
    | VersionMismatchException
    | CommonAwsError;
}

export declare namespace DeleteStream {
  export type Input = DeleteStreamInput;
  export type Output = DeleteStreamOutput;
  export type Error =
    | ClientLimitExceededException
    | InvalidArgumentException
    | NotAuthorizedException
    | ResourceInUseException
    | ResourceNotFoundException
    | VersionMismatchException
    | CommonAwsError;
}

export declare namespace DescribeEdgeConfiguration {
  export type Input = DescribeEdgeConfigurationInput;
  export type Output = DescribeEdgeConfigurationOutput;
  export type Error =
    | AccessDeniedException
    | ClientLimitExceededException
    | InvalidArgumentException
    | ResourceNotFoundException
    | StreamEdgeConfigurationNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeImageGenerationConfiguration {
  export type Input = DescribeImageGenerationConfigurationInput;
  export type Output = DescribeImageGenerationConfigurationOutput;
  export type Error =
    | AccessDeniedException
    | ClientLimitExceededException
    | InvalidArgumentException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeMappedResourceConfiguration {
  export type Input = DescribeMappedResourceConfigurationInput;
  export type Output = DescribeMappedResourceConfigurationOutput;
  export type Error =
    | AccessDeniedException
    | ClientLimitExceededException
    | InvalidArgumentException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeMediaStorageConfiguration {
  export type Input = DescribeMediaStorageConfigurationInput;
  export type Output = DescribeMediaStorageConfigurationOutput;
  export type Error =
    | AccessDeniedException
    | ClientLimitExceededException
    | InvalidArgumentException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeNotificationConfiguration {
  export type Input = DescribeNotificationConfigurationInput;
  export type Output = DescribeNotificationConfigurationOutput;
  export type Error =
    | AccessDeniedException
    | ClientLimitExceededException
    | InvalidArgumentException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeSignalingChannel {
  export type Input = DescribeSignalingChannelInput;
  export type Output = DescribeSignalingChannelOutput;
  export type Error =
    | AccessDeniedException
    | ClientLimitExceededException
    | InvalidArgumentException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeStream {
  export type Input = DescribeStreamInput;
  export type Output = DescribeStreamOutput;
  export type Error =
    | ClientLimitExceededException
    | InvalidArgumentException
    | NotAuthorizedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetDataEndpoint {
  export type Input = GetDataEndpointInput;
  export type Output = GetDataEndpointOutput;
  export type Error =
    | ClientLimitExceededException
    | InvalidArgumentException
    | NotAuthorizedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetSignalingChannelEndpoint {
  export type Input = GetSignalingChannelEndpointInput;
  export type Output = GetSignalingChannelEndpointOutput;
  export type Error =
    | AccessDeniedException
    | ClientLimitExceededException
    | InvalidArgumentException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListEdgeAgentConfigurations {
  export type Input = ListEdgeAgentConfigurationsInput;
  export type Output = ListEdgeAgentConfigurationsOutput;
  export type Error =
    | ClientLimitExceededException
    | InvalidArgumentException
    | NotAuthorizedException
    | CommonAwsError;
}

export declare namespace ListSignalingChannels {
  export type Input = ListSignalingChannelsInput;
  export type Output = ListSignalingChannelsOutput;
  export type Error =
    | AccessDeniedException
    | ClientLimitExceededException
    | InvalidArgumentException
    | CommonAwsError;
}

export declare namespace ListStreams {
  export type Input = ListStreamsInput;
  export type Output = ListStreamsOutput;
  export type Error =
    | ClientLimitExceededException
    | InvalidArgumentException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceInput;
  export type Output = ListTagsForResourceOutput;
  export type Error =
    | AccessDeniedException
    | ClientLimitExceededException
    | InvalidArgumentException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListTagsForStream {
  export type Input = ListTagsForStreamInput;
  export type Output = ListTagsForStreamOutput;
  export type Error =
    | ClientLimitExceededException
    | InvalidArgumentException
    | InvalidResourceFormatException
    | NotAuthorizedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace StartEdgeConfigurationUpdate {
  export type Input = StartEdgeConfigurationUpdateInput;
  export type Output = StartEdgeConfigurationUpdateOutput;
  export type Error =
    | AccessDeniedException
    | ClientLimitExceededException
    | InvalidArgumentException
    | NoDataRetentionException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceInput;
  export type Output = TagResourceOutput;
  export type Error =
    | AccessDeniedException
    | ClientLimitExceededException
    | InvalidArgumentException
    | ResourceNotFoundException
    | TagsPerResourceExceededLimitException
    | CommonAwsError;
}

export declare namespace TagStream {
  export type Input = TagStreamInput;
  export type Output = TagStreamOutput;
  export type Error =
    | ClientLimitExceededException
    | InvalidArgumentException
    | InvalidResourceFormatException
    | NotAuthorizedException
    | ResourceNotFoundException
    | TagsPerResourceExceededLimitException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceInput;
  export type Output = UntagResourceOutput;
  export type Error =
    | AccessDeniedException
    | ClientLimitExceededException
    | InvalidArgumentException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UntagStream {
  export type Input = UntagStreamInput;
  export type Output = UntagStreamOutput;
  export type Error =
    | ClientLimitExceededException
    | InvalidArgumentException
    | InvalidResourceFormatException
    | NotAuthorizedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateDataRetention {
  export type Input = UpdateDataRetentionInput;
  export type Output = UpdateDataRetentionOutput;
  export type Error =
    | ClientLimitExceededException
    | InvalidArgumentException
    | NotAuthorizedException
    | ResourceInUseException
    | ResourceNotFoundException
    | VersionMismatchException
    | CommonAwsError;
}

export declare namespace UpdateImageGenerationConfiguration {
  export type Input = UpdateImageGenerationConfigurationInput;
  export type Output = UpdateImageGenerationConfigurationOutput;
  export type Error =
    | AccessDeniedException
    | ClientLimitExceededException
    | InvalidArgumentException
    | NoDataRetentionException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateMediaStorageConfiguration {
  export type Input = UpdateMediaStorageConfigurationInput;
  export type Output = UpdateMediaStorageConfigurationOutput;
  export type Error =
    | AccessDeniedException
    | ClientLimitExceededException
    | InvalidArgumentException
    | NoDataRetentionException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateNotificationConfiguration {
  export type Input = UpdateNotificationConfigurationInput;
  export type Output = UpdateNotificationConfigurationOutput;
  export type Error =
    | AccessDeniedException
    | ClientLimitExceededException
    | InvalidArgumentException
    | NoDataRetentionException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateSignalingChannel {
  export type Input = UpdateSignalingChannelInput;
  export type Output = UpdateSignalingChannelOutput;
  export type Error =
    | AccessDeniedException
    | ClientLimitExceededException
    | InvalidArgumentException
    | ResourceInUseException
    | ResourceNotFoundException
    | VersionMismatchException
    | CommonAwsError;
}

export declare namespace UpdateStream {
  export type Input = UpdateStreamInput;
  export type Output = UpdateStreamOutput;
  export type Error =
    | ClientLimitExceededException
    | InvalidArgumentException
    | NotAuthorizedException
    | ResourceInUseException
    | ResourceNotFoundException
    | VersionMismatchException
    | CommonAwsError;
}

