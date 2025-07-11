import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface MediaTailor {
  configureLogsForPlaybackConfiguration(
    input: ConfigureLogsForPlaybackConfigurationRequest,
  ): Effect.Effect<
    ConfigureLogsForPlaybackConfigurationResponse,
    CommonAwsError
  >;
  listAlerts(
    input: ListAlertsRequest,
  ): Effect.Effect<ListAlertsResponse, CommonAwsError>;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    BadRequestException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<{}, BadRequestException | CommonAwsError>;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<{}, BadRequestException | CommonAwsError>;
}

export type Mediatailor = MediaTailor;

export type __adsInteractionExcludeEventTypesList =
  Array<AdsInteractionExcludeEventType>;
export type __adsInteractionPublishOptInEventTypesList =
  Array<AdsInteractionPublishOptInEventType>;
export type __boolean = boolean;

export type __integer = number;

export type __integerMin1 = number;

export type __integerMin1Max100 = number;

export type __listOf__string = Array<string>;
export type __listOfAdBreak = Array<AdBreak>;
export type __listOfAlert = Array<Alert>;
export type __listOfAlternateMedia = Array<AlternateMedia>;
export type __listOfAudienceMedia = Array<AudienceMedia>;
export type __listOfAvailMatchingCriteria = Array<AvailMatchingCriteria>;
export type __listOfChannel = Array<Channel>;
export type __listOfLiveSource = Array<LiveSource>;
export type __listOfLoggingStrategies = Array<LoggingStrategy>;
export type __listOfPlaybackConfiguration = Array<PlaybackConfiguration>;
export type __listOfPrefetchSchedule = Array<PrefetchSchedule>;
export type __listOfScheduleAdBreak = Array<ScheduleAdBreak>;
export type __listOfScheduleEntry = Array<ScheduleEntry>;
export type __listOfSegmentDeliveryConfiguration =
  Array<SegmentDeliveryConfiguration>;
export type __listOfSourceLocation = Array<SourceLocation>;
export type __listOfVodSource = Array<VodSource>;
export type __long = number;

export type __manifestServiceExcludeEventTypesList =
  Array<ManifestServiceExcludeEventType>;
export type __mapOf__string = Record<string, string>;
export type __string = string;

export type __timestampUnix = Date | string;

export interface AccessConfiguration {
  AccessType?: AccessType;
  SecretsManagerAccessTokenConfiguration?: SecretsManagerAccessTokenConfiguration;
}
export type AccessType =
  | "S3_SIGV4"
  | "SECRETS_MANAGER_ACCESS_TOKEN"
  | "AUTODETECT_SIGV4";
export interface AdBreak {
  MessageType?: MessageType;
  OffsetMillis: number;
  Slate?: SlateSource;
  SpliceInsertMessage?: SpliceInsertMessage;
  TimeSignalMessage?: TimeSignalMessage;
  AdBreakMetadata?: Array<KeyValuePair>;
}
export type AdBreakMetadataList = Array<KeyValuePair>;
export type AdBreakOpportunities = Array<AdBreakOpportunity>;
export interface AdBreakOpportunity {
  OffsetMillis: number;
}
export interface AdConditioningConfiguration {
  StreamingMediaFileConditioning: StreamingMediaFileConditioning;
}
export interface AdMarkerPassthrough {
  Enabled?: boolean;
}
export type AdMarkupType = "DATERANGE" | "SCTE35_ENHANCED";
export type adMarkupTypes = Array<AdMarkupType>;
export type AdsInteractionExcludeEventType =
  | "AD_MARKER_FOUND"
  | "NON_AD_MARKER_FOUND"
  | "MAKING_ADS_REQUEST"
  | "MODIFIED_TARGET_URL"
  | "VAST_REDIRECT"
  | "EMPTY_VAST_RESPONSE"
  | "EMPTY_VMAP_RESPONSE"
  | "VAST_RESPONSE"
  | "REDIRECTED_VAST_RESPONSE"
  | "FILLED_AVAIL"
  | "FILLED_OVERLAY_AVAIL"
  | "BEACON_FIRED"
  | "WARNING_NO_ADVERTISEMENTS"
  | "WARNING_VPAID_AD_DROPPED"
  | "WARNING_URL_VARIABLE_SUBSTITUTION_FAILED"
  | "ERROR_UNKNOWN"
  | "ERROR_UNKNOWN_HOST"
  | "ERROR_DISALLOWED_HOST"
  | "ERROR_ADS_IO"
  | "ERROR_ADS_TIMEOUT"
  | "ERROR_ADS_RESPONSE_PARSE"
  | "ERROR_ADS_RESPONSE_UNKNOWN_ROOT_ELEMENT"
  | "ERROR_ADS_INVALID_RESPONSE"
  | "ERROR_VAST_REDIRECT_EMPTY_RESPONSE"
  | "ERROR_VAST_REDIRECT_MULTIPLE_VAST"
  | "ERROR_VAST_REDIRECT_FAILED"
  | "ERROR_VAST_MISSING_MEDIAFILES"
  | "ERROR_VAST_MISSING_CREATIVES"
  | "ERROR_VAST_MISSING_OVERLAYS"
  | "ERROR_VAST_MISSING_IMPRESSION"
  | "ERROR_VAST_INVALID_VAST_AD_TAG_URI"
  | "ERROR_VAST_MULTIPLE_TRACKING_EVENTS"
  | "ERROR_VAST_MULTIPLE_LINEAR"
  | "ERROR_VAST_INVALID_MEDIA_FILE"
  | "ERROR_FIRING_BEACON_FAILED"
  | "ERROR_PERSONALIZATION_DISABLED"
  | "VOD_TIME_BASED_AVAIL_PLAN_VAST_RESPONSE_FOR_OFFSET"
  | "VOD_TIME_BASED_AVAIL_PLAN_SUCCESS"
  | "VOD_TIME_BASED_AVAIL_PLAN_WARNING_NO_ADVERTISEMENTS"
  | "INTERSTITIAL_VOD_SUCCESS"
  | "INTERSTITIAL_VOD_FAILURE";
export interface AdsInteractionLog {
  PublishOptInEventTypes?: Array<AdsInteractionPublishOptInEventType>;
  ExcludeEventTypes?: Array<AdsInteractionExcludeEventType>;
}
export type AdsInteractionPublishOptInEventType = "RAW_ADS_RESPONSE";
export interface Alert {
  AlertCode: string;
  AlertMessage: string;
  LastModifiedTime: Date | string;
  RelatedResourceArns: Array<string>;
  ResourceArn: string;
  Category?: AlertCategory;
}
export type AlertCategory = "SCHEDULING_ERROR" | "PLAYBACK_WARNING" | "INFO";
export interface AlternateMedia {
  SourceLocationName?: string;
  LiveSourceName?: string;
  VodSourceName?: string;
  ClipRange?: ClipRange;
  ScheduledStartTimeMillis?: number;
  AdBreaks?: Array<AdBreak>;
  DurationMillis?: number;
}
export interface AudienceMedia {
  Audience?: string;
  AlternateMedia?: Array<AlternateMedia>;
}
export type Audiences = Array<string>;
export interface AvailMatchingCriteria {
  DynamicVariable: string;
  Operator: Operator;
}
export interface AvailSuppression {
  Mode?: Mode;
  Value?: string;
  FillPolicy?: FillPolicy;
}
export declare class BadRequestException extends EffectData.TaggedError(
  "BadRequestException",
)<{
  readonly Message?: string;
}> {}
export interface Bumper {
  EndUrl?: string;
  StartUrl?: string;
}
export interface CdnConfiguration {
  AdSegmentUrlPrefix?: string;
  ContentSegmentUrlPrefix?: string;
}
export interface Channel {
  Arn: string;
  ChannelName: string;
  ChannelState: string;
  CreationTime?: Date | string;
  FillerSlate?: SlateSource;
  LastModifiedTime?: Date | string;
  Outputs: Array<ResponseOutputItem>;
  PlaybackMode: string;
  Tags?: Record<string, string>;
  Tier: string;
  LogConfiguration: LogConfigurationForChannel;
  Audiences?: Array<string>;
}
export type ChannelState = "RUNNING" | "STOPPED";
export interface ClipRange {
  EndOffsetMillis?: number;
  StartOffsetMillis?: number;
}
export type ConfigurationAliasesRequest = Record<
  string,
  Record<string, string>
>;
export type ConfigurationAliasesResponse = Record<
  string,
  Record<string, string>
>;
export interface ConfigureLogsForChannelRequest {
  ChannelName: string;
  LogTypes: Array<LogType>;
}
export interface ConfigureLogsForChannelResponse {
  ChannelName?: string;
  LogTypes?: Array<LogType>;
}
export interface ConfigureLogsForPlaybackConfigurationRequest {
  PercentEnabled: number;
  PlaybackConfigurationName: string;
  EnabledLoggingStrategies?: Array<LoggingStrategy>;
  AdsInteractionLog?: AdsInteractionLog;
  ManifestServiceInteractionLog?: ManifestServiceInteractionLog;
}
export interface ConfigureLogsForPlaybackConfigurationResponse {
  PercentEnabled: number;
  PlaybackConfigurationName?: string;
  EnabledLoggingStrategies?: Array<LoggingStrategy>;
  AdsInteractionLog?: AdsInteractionLog;
  ManifestServiceInteractionLog?: ManifestServiceInteractionLog;
}
export interface CreateChannelRequest {
  ChannelName: string;
  FillerSlate?: SlateSource;
  Outputs: Array<RequestOutputItem>;
  PlaybackMode: PlaybackMode;
  Tags?: Record<string, string>;
  Tier?: Tier;
  TimeShiftConfiguration?: TimeShiftConfiguration;
  Audiences?: Array<string>;
}
export interface CreateChannelResponse {
  Arn?: string;
  ChannelName?: string;
  ChannelState?: ChannelState;
  CreationTime?: Date | string;
  FillerSlate?: SlateSource;
  LastModifiedTime?: Date | string;
  Outputs?: Array<ResponseOutputItem>;
  PlaybackMode?: string;
  Tags?: Record<string, string>;
  Tier?: string;
  TimeShiftConfiguration?: TimeShiftConfiguration;
  Audiences?: Array<string>;
}
export interface CreateLiveSourceRequest {
  HttpPackageConfigurations: Array<HttpPackageConfiguration>;
  LiveSourceName: string;
  SourceLocationName: string;
  Tags?: Record<string, string>;
}
export interface CreateLiveSourceResponse {
  Arn?: string;
  CreationTime?: Date | string;
  HttpPackageConfigurations?: Array<HttpPackageConfiguration>;
  LastModifiedTime?: Date | string;
  LiveSourceName?: string;
  SourceLocationName?: string;
  Tags?: Record<string, string>;
}
export interface CreatePrefetchScheduleRequest {
  Consumption?: PrefetchConsumption;
  Name: string;
  PlaybackConfigurationName: string;
  Retrieval?: PrefetchRetrieval;
  RecurringPrefetchConfiguration?: RecurringPrefetchConfiguration;
  ScheduleType?: PrefetchScheduleType;
  StreamId?: string;
}
export interface CreatePrefetchScheduleResponse {
  Arn?: string;
  Consumption?: PrefetchConsumption;
  Name?: string;
  PlaybackConfigurationName?: string;
  Retrieval?: PrefetchRetrieval;
  RecurringPrefetchConfiguration?: RecurringPrefetchConfiguration;
  ScheduleType?: PrefetchScheduleType;
  StreamId?: string;
}
export interface CreateProgramRequest {
  AdBreaks?: Array<AdBreak>;
  ChannelName: string;
  LiveSourceName?: string;
  ProgramName: string;
  ScheduleConfiguration: ScheduleConfiguration;
  SourceLocationName: string;
  VodSourceName?: string;
  AudienceMedia?: Array<AudienceMedia>;
}
export interface CreateProgramResponse {
  AdBreaks?: Array<AdBreak>;
  Arn?: string;
  ChannelName?: string;
  CreationTime?: Date | string;
  LiveSourceName?: string;
  ProgramName?: string;
  ScheduledStartTime?: Date | string;
  SourceLocationName?: string;
  VodSourceName?: string;
  ClipRange?: ClipRange;
  DurationMillis?: number;
  AudienceMedia?: Array<AudienceMedia>;
}
export interface CreateSourceLocationRequest {
  AccessConfiguration?: AccessConfiguration;
  DefaultSegmentDeliveryConfiguration?: DefaultSegmentDeliveryConfiguration;
  HttpConfiguration: HttpConfiguration;
  SegmentDeliveryConfigurations?: Array<SegmentDeliveryConfiguration>;
  SourceLocationName: string;
  Tags?: Record<string, string>;
}
export interface CreateSourceLocationResponse {
  AccessConfiguration?: AccessConfiguration;
  Arn?: string;
  CreationTime?: Date | string;
  DefaultSegmentDeliveryConfiguration?: DefaultSegmentDeliveryConfiguration;
  HttpConfiguration?: HttpConfiguration;
  LastModifiedTime?: Date | string;
  SegmentDeliveryConfigurations?: Array<SegmentDeliveryConfiguration>;
  SourceLocationName?: string;
  Tags?: Record<string, string>;
}
export interface CreateVodSourceRequest {
  HttpPackageConfigurations: Array<HttpPackageConfiguration>;
  SourceLocationName: string;
  Tags?: Record<string, string>;
  VodSourceName: string;
}
export interface CreateVodSourceResponse {
  Arn?: string;
  CreationTime?: Date | string;
  HttpPackageConfigurations?: Array<HttpPackageConfiguration>;
  LastModifiedTime?: Date | string;
  SourceLocationName?: string;
  Tags?: Record<string, string>;
  VodSourceName?: string;
}
export interface DashConfiguration {
  ManifestEndpointPrefix?: string;
  MpdLocation?: string;
  OriginManifestType?: OriginManifestType;
}
export interface DashConfigurationForPut {
  MpdLocation?: string;
  OriginManifestType?: OriginManifestType;
}
export interface DashPlaylistSettings {
  ManifestWindowSeconds?: number;
  MinBufferTimeSeconds?: number;
  MinUpdatePeriodSeconds?: number;
  SuggestedPresentationDelaySeconds?: number;
}
export interface DefaultSegmentDeliveryConfiguration {
  BaseUrl?: string;
}
export interface DeleteChannelPolicyRequest {
  ChannelName: string;
}
export interface DeleteChannelPolicyResponse {}
export interface DeleteChannelRequest {
  ChannelName: string;
}
export interface DeleteChannelResponse {}
export interface DeleteLiveSourceRequest {
  LiveSourceName: string;
  SourceLocationName: string;
}
export interface DeleteLiveSourceResponse {}
export interface DeletePlaybackConfigurationRequest {
  Name: string;
}
export interface DeletePlaybackConfigurationResponse {}
export interface DeletePrefetchScheduleRequest {
  Name: string;
  PlaybackConfigurationName: string;
}
export interface DeletePrefetchScheduleResponse {}
export interface DeleteProgramRequest {
  ChannelName: string;
  ProgramName: string;
}
export interface DeleteProgramResponse {}
export interface DeleteSourceLocationRequest {
  SourceLocationName: string;
}
export interface DeleteSourceLocationResponse {}
export interface DeleteVodSourceRequest {
  SourceLocationName: string;
  VodSourceName: string;
}
export interface DeleteVodSourceResponse {}
export interface DescribeChannelRequest {
  ChannelName: string;
}
export interface DescribeChannelResponse {
  Arn?: string;
  ChannelName?: string;
  ChannelState?: ChannelState;
  CreationTime?: Date | string;
  FillerSlate?: SlateSource;
  LastModifiedTime?: Date | string;
  Outputs?: Array<ResponseOutputItem>;
  PlaybackMode?: string;
  Tags?: Record<string, string>;
  Tier?: string;
  LogConfiguration: LogConfigurationForChannel;
  TimeShiftConfiguration?: TimeShiftConfiguration;
  Audiences?: Array<string>;
}
export interface DescribeLiveSourceRequest {
  LiveSourceName: string;
  SourceLocationName: string;
}
export interface DescribeLiveSourceResponse {
  Arn?: string;
  CreationTime?: Date | string;
  HttpPackageConfigurations?: Array<HttpPackageConfiguration>;
  LastModifiedTime?: Date | string;
  LiveSourceName?: string;
  SourceLocationName?: string;
  Tags?: Record<string, string>;
}
export interface DescribeProgramRequest {
  ChannelName: string;
  ProgramName: string;
}
export interface DescribeProgramResponse {
  AdBreaks?: Array<AdBreak>;
  Arn?: string;
  ChannelName?: string;
  CreationTime?: Date | string;
  LiveSourceName?: string;
  ProgramName?: string;
  ScheduledStartTime?: Date | string;
  SourceLocationName?: string;
  VodSourceName?: string;
  ClipRange?: ClipRange;
  DurationMillis?: number;
  AudienceMedia?: Array<AudienceMedia>;
}
export interface DescribeSourceLocationRequest {
  SourceLocationName: string;
}
export interface DescribeSourceLocationResponse {
  AccessConfiguration?: AccessConfiguration;
  Arn?: string;
  CreationTime?: Date | string;
  DefaultSegmentDeliveryConfiguration?: DefaultSegmentDeliveryConfiguration;
  HttpConfiguration?: HttpConfiguration;
  LastModifiedTime?: Date | string;
  SegmentDeliveryConfigurations?: Array<SegmentDeliveryConfiguration>;
  SourceLocationName?: string;
  Tags?: Record<string, string>;
}
export interface DescribeVodSourceRequest {
  SourceLocationName: string;
  VodSourceName: string;
}
export interface DescribeVodSourceResponse {
  AdBreakOpportunities?: Array<AdBreakOpportunity>;
  Arn?: string;
  CreationTime?: Date | string;
  HttpPackageConfigurations?: Array<HttpPackageConfiguration>;
  LastModifiedTime?: Date | string;
  SourceLocationName?: string;
  Tags?: Record<string, string>;
  VodSourceName?: string;
}
export type FillPolicy = "FULL_AVAIL_ONLY" | "PARTIAL_AVAIL";
export interface GetChannelPolicyRequest {
  ChannelName: string;
}
export interface GetChannelPolicyResponse {
  Policy?: string;
}
export interface GetChannelScheduleRequest {
  ChannelName: string;
  DurationMinutes?: string;
  MaxResults?: number;
  NextToken?: string;
  Audience?: string;
}
export interface GetChannelScheduleResponse {
  Items?: Array<ScheduleEntry>;
  NextToken?: string;
}
export interface GetPlaybackConfigurationRequest {
  Name: string;
}
export interface GetPlaybackConfigurationResponse {
  AdDecisionServerUrl?: string;
  AvailSuppression?: AvailSuppression;
  Bumper?: Bumper;
  CdnConfiguration?: CdnConfiguration;
  ConfigurationAliases?: Record<string, Record<string, string>>;
  DashConfiguration?: DashConfiguration;
  HlsConfiguration?: HlsConfiguration;
  InsertionMode?: InsertionMode;
  LivePreRollConfiguration?: LivePreRollConfiguration;
  LogConfiguration?: LogConfiguration;
  ManifestProcessingRules?: ManifestProcessingRules;
  Name?: string;
  PersonalizationThresholdSeconds?: number;
  PlaybackConfigurationArn?: string;
  PlaybackEndpointPrefix?: string;
  SessionInitializationEndpointPrefix?: string;
  SlateAdUrl?: string;
  Tags?: Record<string, string>;
  TranscodeProfileName?: string;
  VideoContentSourceUrl?: string;
  AdConditioningConfiguration?: AdConditioningConfiguration;
}
export interface GetPrefetchScheduleRequest {
  Name: string;
  PlaybackConfigurationName: string;
}
export interface GetPrefetchScheduleResponse {
  Arn?: string;
  Consumption?: PrefetchConsumption;
  Name?: string;
  PlaybackConfigurationName?: string;
  Retrieval?: PrefetchRetrieval;
  ScheduleType?: PrefetchScheduleType;
  RecurringPrefetchConfiguration?: RecurringPrefetchConfiguration;
  StreamId?: string;
}
export interface HlsConfiguration {
  ManifestEndpointPrefix?: string;
}
export interface HlsPlaylistSettings {
  ManifestWindowSeconds?: number;
  AdMarkupType?: Array<AdMarkupType>;
}
export interface HttpConfiguration {
  BaseUrl: string;
}
export interface HttpPackageConfiguration {
  Path: string;
  SourceGroup: string;
  Type: Type;
}
export type HttpPackageConfigurations = Array<HttpPackageConfiguration>;
export type InsertionMode = "STITCHED_ONLY" | "PLAYER_SELECT";
export interface KeyValuePair {
  Key: string;
  Value: string;
}
export interface ListAlertsRequest {
  MaxResults?: number;
  NextToken?: string;
  ResourceArn: string;
}
export interface ListAlertsResponse {
  Items?: Array<Alert>;
  NextToken?: string;
}
export interface ListChannelsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListChannelsResponse {
  Items?: Array<Channel>;
  NextToken?: string;
}
export interface ListLiveSourcesRequest {
  MaxResults?: number;
  NextToken?: string;
  SourceLocationName: string;
}
export interface ListLiveSourcesResponse {
  Items?: Array<LiveSource>;
  NextToken?: string;
}
export interface ListPlaybackConfigurationsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListPlaybackConfigurationsResponse {
  Items?: Array<PlaybackConfiguration>;
  NextToken?: string;
}
export interface ListPrefetchSchedulesRequest {
  MaxResults?: number;
  NextToken?: string;
  PlaybackConfigurationName: string;
  ScheduleType?: ListPrefetchScheduleType;
  StreamId?: string;
}
export interface ListPrefetchSchedulesResponse {
  Items?: Array<PrefetchSchedule>;
  NextToken?: string;
}
export type ListPrefetchScheduleType = "SINGLE" | "RECURRING" | "ALL";
export interface ListSourceLocationsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListSourceLocationsResponse {
  Items?: Array<SourceLocation>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Record<string, string>;
}
export interface ListVodSourcesRequest {
  MaxResults?: number;
  NextToken?: string;
  SourceLocationName: string;
}
export interface ListVodSourcesResponse {
  Items?: Array<VodSource>;
  NextToken?: string;
}
export interface LivePreRollConfiguration {
  AdDecisionServerUrl?: string;
  MaxDurationSeconds?: number;
}
export interface LiveSource {
  Arn: string;
  CreationTime?: Date | string;
  HttpPackageConfigurations: Array<HttpPackageConfiguration>;
  LastModifiedTime?: Date | string;
  LiveSourceName: string;
  SourceLocationName: string;
  Tags?: Record<string, string>;
}
export interface LogConfiguration {
  PercentEnabled: number;
  EnabledLoggingStrategies: Array<LoggingStrategy>;
  AdsInteractionLog?: AdsInteractionLog;
  ManifestServiceInteractionLog?: ManifestServiceInteractionLog;
}
export interface LogConfigurationForChannel {
  LogTypes?: Array<LogType>;
}
export type LoggingStrategy = "VENDED_LOGS" | "LEGACY_CLOUDWATCH";
export type LogType = "AS_RUN";
export type LogTypes = Array<LogType>;
export interface ManifestProcessingRules {
  AdMarkerPassthrough?: AdMarkerPassthrough;
}
export type ManifestServiceExcludeEventType =
  | "GENERATED_MANIFEST"
  | "ORIGIN_MANIFEST"
  | "SESSION_INITIALIZED"
  | "TRACKING_RESPONSE"
  | "CONFIG_SYNTAX_ERROR"
  | "CONFIG_SECURITY_ERROR"
  | "UNKNOWN_HOST"
  | "TIMEOUT_ERROR"
  | "CONNECTION_ERROR"
  | "IO_ERROR"
  | "UNKNOWN_ERROR"
  | "HOST_DISALLOWED"
  | "PARSING_ERROR"
  | "MANIFEST_ERROR"
  | "NO_MASTER_OR_MEDIA_PLAYLIST"
  | "NO_MASTER_PLAYLIST"
  | "NO_MEDIA_PLAYLIST"
  | "INCOMPATIBLE_HLS_VERSION"
  | "SCTE35_PARSING_ERROR"
  | "INVALID_SINGLE_PERIOD_DASH_MANIFEST"
  | "UNSUPPORTED_SINGLE_PERIOD_DASH_MANIFEST"
  | "LAST_PERIOD_MISSING_AUDIO"
  | "LAST_PERIOD_MISSING_AUDIO_WARNING"
  | "ERROR_ORIGIN_PREFIX_INTERPOLATION"
  | "ERROR_ADS_INTERPOLATION"
  | "ERROR_LIVE_PRE_ROLL_ADS_INTERPOLATION"
  | "ERROR_CDN_AD_SEGMENT_INTERPOLATION"
  | "ERROR_CDN_CONTENT_SEGMENT_INTERPOLATION"
  | "ERROR_SLATE_AD_URL_INTERPOLATION"
  | "ERROR_PROFILE_NAME_INTERPOLATION"
  | "ERROR_BUMPER_START_INTERPOLATION"
  | "ERROR_BUMPER_END_INTERPOLATION";
export interface ManifestServiceInteractionLog {
  ExcludeEventTypes?: Array<ManifestServiceExcludeEventType>;
}
export type MaxResults = number;

export type MessageType = "SPLICE_INSERT" | "TIME_SIGNAL";
export type Mode = "OFF" | "BEHIND_LIVE_EDGE" | "AFTER_LIVE_EDGE";
export type Operator = "EQUALS";
export type OriginManifestType = "SINGLE_PERIOD" | "MULTI_PERIOD";
export interface PlaybackConfiguration {
  AdDecisionServerUrl?: string;
  AvailSuppression?: AvailSuppression;
  Bumper?: Bumper;
  CdnConfiguration?: CdnConfiguration;
  ConfigurationAliases?: Record<string, Record<string, string>>;
  DashConfiguration?: DashConfiguration;
  HlsConfiguration?: HlsConfiguration;
  InsertionMode?: InsertionMode;
  LivePreRollConfiguration?: LivePreRollConfiguration;
  LogConfiguration?: LogConfiguration;
  ManifestProcessingRules?: ManifestProcessingRules;
  Name?: string;
  PersonalizationThresholdSeconds?: number;
  PlaybackConfigurationArn?: string;
  PlaybackEndpointPrefix?: string;
  SessionInitializationEndpointPrefix?: string;
  SlateAdUrl?: string;
  Tags?: Record<string, string>;
  TranscodeProfileName?: string;
  VideoContentSourceUrl?: string;
  AdConditioningConfiguration?: AdConditioningConfiguration;
}
export type PlaybackMode = "LOOP" | "LINEAR";
export interface PrefetchConsumption {
  AvailMatchingCriteria?: Array<AvailMatchingCriteria>;
  EndTime: Date | string;
  StartTime?: Date | string;
}
export interface PrefetchRetrieval {
  DynamicVariables?: Record<string, string>;
  EndTime: Date | string;
  StartTime?: Date | string;
  TrafficShapingType?: TrafficShapingType;
  TrafficShapingRetrievalWindow?: TrafficShapingRetrievalWindow;
}
export interface PrefetchSchedule {
  Arn: string;
  Consumption?: PrefetchConsumption;
  Name: string;
  PlaybackConfigurationName: string;
  Retrieval?: PrefetchRetrieval;
  ScheduleType?: PrefetchScheduleType;
  RecurringPrefetchConfiguration?: RecurringPrefetchConfiguration;
  StreamId?: string;
}
export type PrefetchScheduleType = "SINGLE" | "RECURRING";
export interface PutChannelPolicyRequest {
  ChannelName: string;
  Policy: string;
}
export interface PutChannelPolicyResponse {}
export interface PutPlaybackConfigurationRequest {
  AdDecisionServerUrl?: string;
  AvailSuppression?: AvailSuppression;
  Bumper?: Bumper;
  CdnConfiguration?: CdnConfiguration;
  ConfigurationAliases?: Record<string, Record<string, string>>;
  DashConfiguration?: DashConfigurationForPut;
  InsertionMode?: InsertionMode;
  LivePreRollConfiguration?: LivePreRollConfiguration;
  ManifestProcessingRules?: ManifestProcessingRules;
  Name: string;
  PersonalizationThresholdSeconds?: number;
  SlateAdUrl?: string;
  Tags?: Record<string, string>;
  TranscodeProfileName?: string;
  VideoContentSourceUrl?: string;
  AdConditioningConfiguration?: AdConditioningConfiguration;
}
export interface PutPlaybackConfigurationResponse {
  AdDecisionServerUrl?: string;
  AvailSuppression?: AvailSuppression;
  Bumper?: Bumper;
  CdnConfiguration?: CdnConfiguration;
  ConfigurationAliases?: Record<string, Record<string, string>>;
  DashConfiguration?: DashConfiguration;
  HlsConfiguration?: HlsConfiguration;
  InsertionMode?: InsertionMode;
  LivePreRollConfiguration?: LivePreRollConfiguration;
  LogConfiguration?: LogConfiguration;
  ManifestProcessingRules?: ManifestProcessingRules;
  Name?: string;
  PersonalizationThresholdSeconds?: number;
  PlaybackConfigurationArn?: string;
  PlaybackEndpointPrefix?: string;
  SessionInitializationEndpointPrefix?: string;
  SlateAdUrl?: string;
  Tags?: Record<string, string>;
  TranscodeProfileName?: string;
  VideoContentSourceUrl?: string;
  AdConditioningConfiguration?: AdConditioningConfiguration;
}
export interface RecurringConsumption {
  RetrievedAdExpirationSeconds?: number;
  AvailMatchingCriteria?: Array<AvailMatchingCriteria>;
}
export interface RecurringPrefetchConfiguration {
  StartTime?: Date | string;
  EndTime: Date | string;
  RecurringConsumption: RecurringConsumption;
  RecurringRetrieval: RecurringRetrieval;
}
export interface RecurringRetrieval {
  DynamicVariables?: Record<string, string>;
  DelayAfterAvailEndSeconds?: number;
  TrafficShapingType?: TrafficShapingType;
  TrafficShapingRetrievalWindow?: TrafficShapingRetrievalWindow;
}
export type RelativePosition = "BEFORE_PROGRAM" | "AFTER_PROGRAM";
export interface RequestOutputItem {
  DashPlaylistSettings?: DashPlaylistSettings;
  HlsPlaylistSettings?: HlsPlaylistSettings;
  ManifestName: string;
  SourceGroup: string;
}
export type RequestOutputs = Array<RequestOutputItem>;
export interface ResponseOutputItem {
  DashPlaylistSettings?: DashPlaylistSettings;
  HlsPlaylistSettings?: HlsPlaylistSettings;
  ManifestName: string;
  PlaybackUrl: string;
  SourceGroup: string;
}
export type ResponseOutputs = Array<ResponseOutputItem>;
export interface ScheduleAdBreak {
  ApproximateDurationSeconds?: number;
  ApproximateStartTime?: Date | string;
  SourceLocationName?: string;
  VodSourceName?: string;
}
export interface ScheduleConfiguration {
  Transition: Transition;
  ClipRange?: ClipRange;
}
export interface ScheduleEntry {
  ApproximateDurationSeconds?: number;
  ApproximateStartTime?: Date | string;
  Arn: string;
  ChannelName: string;
  LiveSourceName?: string;
  ProgramName: string;
  ScheduleAdBreaks?: Array<ScheduleAdBreak>;
  ScheduleEntryType?: ScheduleEntryType;
  SourceLocationName: string;
  VodSourceName?: string;
  Audiences?: Array<string>;
}
export type ScheduleEntryType = "PROGRAM" | "FILLER_SLATE" | "ALTERNATE_MEDIA";
export interface SecretsManagerAccessTokenConfiguration {
  HeaderName?: string;
  SecretArn?: string;
  SecretStringKey?: string;
}
export interface SegmentationDescriptor {
  SegmentationEventId?: number;
  SegmentationUpidType?: number;
  SegmentationUpid?: string;
  SegmentationTypeId?: number;
  SegmentNum?: number;
  SegmentsExpected?: number;
  SubSegmentNum?: number;
  SubSegmentsExpected?: number;
}
export type SegmentationDescriptorList = Array<SegmentationDescriptor>;
export interface SegmentDeliveryConfiguration {
  BaseUrl?: string;
  Name?: string;
}
export interface SlateSource {
  SourceLocationName?: string;
  VodSourceName?: string;
}
export interface SourceLocation {
  AccessConfiguration?: AccessConfiguration;
  Arn: string;
  CreationTime?: Date | string;
  DefaultSegmentDeliveryConfiguration?: DefaultSegmentDeliveryConfiguration;
  HttpConfiguration: HttpConfiguration;
  LastModifiedTime?: Date | string;
  SegmentDeliveryConfigurations?: Array<SegmentDeliveryConfiguration>;
  SourceLocationName: string;
  Tags?: Record<string, string>;
}
export interface SpliceInsertMessage {
  AvailNum?: number;
  AvailsExpected?: number;
  SpliceEventId?: number;
  UniqueProgramId?: number;
}
export interface StartChannelRequest {
  ChannelName: string;
}
export interface StartChannelResponse {}
export interface StopChannelRequest {
  ChannelName: string;
}
export interface StopChannelResponse {}
export type StreamingMediaFileConditioning = "TRANSCODE" | "NONE";
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Record<string, string>;
}
export type Tier = "BASIC" | "STANDARD";
export interface TimeShiftConfiguration {
  MaxTimeDelaySeconds: number;
}
export interface TimeSignalMessage {
  SegmentationDescriptors?: Array<SegmentationDescriptor>;
}
export interface TrafficShapingRetrievalWindow {
  RetrievalWindowDurationSeconds?: number;
}
export type TrafficShapingType = "RETRIEVAL_WINDOW";
export interface Transition {
  DurationMillis?: number;
  RelativePosition: RelativePosition;
  RelativeProgram?: string;
  ScheduledStartTimeMillis?: number;
  Type: string;
}
export type Type = "DASH" | "HLS";
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UpdateChannelRequest {
  ChannelName: string;
  FillerSlate?: SlateSource;
  Outputs: Array<RequestOutputItem>;
  TimeShiftConfiguration?: TimeShiftConfiguration;
  Audiences?: Array<string>;
}
export interface UpdateChannelResponse {
  Arn?: string;
  ChannelName?: string;
  ChannelState?: ChannelState;
  CreationTime?: Date | string;
  FillerSlate?: SlateSource;
  LastModifiedTime?: Date | string;
  Outputs?: Array<ResponseOutputItem>;
  PlaybackMode?: string;
  Tags?: Record<string, string>;
  Tier?: string;
  TimeShiftConfiguration?: TimeShiftConfiguration;
  Audiences?: Array<string>;
}
export interface UpdateLiveSourceRequest {
  HttpPackageConfigurations: Array<HttpPackageConfiguration>;
  LiveSourceName: string;
  SourceLocationName: string;
}
export interface UpdateLiveSourceResponse {
  Arn?: string;
  CreationTime?: Date | string;
  HttpPackageConfigurations?: Array<HttpPackageConfiguration>;
  LastModifiedTime?: Date | string;
  LiveSourceName?: string;
  SourceLocationName?: string;
  Tags?: Record<string, string>;
}
export interface UpdateProgramRequest {
  AdBreaks?: Array<AdBreak>;
  ChannelName: string;
  ProgramName: string;
  ScheduleConfiguration: UpdateProgramScheduleConfiguration;
  AudienceMedia?: Array<AudienceMedia>;
}
export interface UpdateProgramResponse {
  AdBreaks?: Array<AdBreak>;
  Arn?: string;
  ChannelName?: string;
  CreationTime?: Date | string;
  ProgramName?: string;
  SourceLocationName?: string;
  VodSourceName?: string;
  LiveSourceName?: string;
  ClipRange?: ClipRange;
  DurationMillis?: number;
  ScheduledStartTime?: Date | string;
  AudienceMedia?: Array<AudienceMedia>;
}
export interface UpdateProgramScheduleConfiguration {
  Transition?: UpdateProgramTransition;
  ClipRange?: ClipRange;
}
export interface UpdateProgramTransition {
  ScheduledStartTimeMillis?: number;
  DurationMillis?: number;
}
export interface UpdateSourceLocationRequest {
  AccessConfiguration?: AccessConfiguration;
  DefaultSegmentDeliveryConfiguration?: DefaultSegmentDeliveryConfiguration;
  HttpConfiguration: HttpConfiguration;
  SegmentDeliveryConfigurations?: Array<SegmentDeliveryConfiguration>;
  SourceLocationName: string;
}
export interface UpdateSourceLocationResponse {
  AccessConfiguration?: AccessConfiguration;
  Arn?: string;
  CreationTime?: Date | string;
  DefaultSegmentDeliveryConfiguration?: DefaultSegmentDeliveryConfiguration;
  HttpConfiguration?: HttpConfiguration;
  LastModifiedTime?: Date | string;
  SegmentDeliveryConfigurations?: Array<SegmentDeliveryConfiguration>;
  SourceLocationName?: string;
  Tags?: Record<string, string>;
}
export interface UpdateVodSourceRequest {
  HttpPackageConfigurations: Array<HttpPackageConfiguration>;
  SourceLocationName: string;
  VodSourceName: string;
}
export interface UpdateVodSourceResponse {
  Arn?: string;
  CreationTime?: Date | string;
  HttpPackageConfigurations?: Array<HttpPackageConfiguration>;
  LastModifiedTime?: Date | string;
  SourceLocationName?: string;
  Tags?: Record<string, string>;
  VodSourceName?: string;
}
export interface VodSource {
  Arn: string;
  CreationTime?: Date | string;
  HttpPackageConfigurations: Array<HttpPackageConfiguration>;
  LastModifiedTime?: Date | string;
  SourceLocationName: string;
  Tags?: Record<string, string>;
  VodSourceName: string;
}
export declare namespace ConfigureLogsForPlaybackConfiguration {
  export type Input = ConfigureLogsForPlaybackConfigurationRequest;
  export type Output = ConfigureLogsForPlaybackConfigurationResponse;
  export type Error = CommonAwsError;
}

export declare namespace ListAlerts {
  export type Input = ListAlertsRequest;
  export type Output = ListAlertsResponse;
  export type Error = CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = {};
  export type Error = BadRequestException | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = {};
  export type Error = BadRequestException | CommonAwsError;
}
