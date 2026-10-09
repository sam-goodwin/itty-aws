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
  sdkId: "Chime SDK Media Pipelines",
  serviceShapeName: "ChimeSDKMediaPipelinesService",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "chime" });
const ver = /*@__PURE__*/ T.ServiceVersion("2021-07-15");
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
              `https://media-pipelines-chime-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://media-pipelines-chime-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://media-pipelines-chime.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(
          `https://media-pipelines-chime.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
        );
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class BadRequestException
  extends /*@__PURE__*/ S.TaggedError<BadRequestException>()(
    "BadRequestException",
    {
      Code: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => S.String).annotate({ identifier: "ErrorCode" }),
      ),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestId: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    {
      Code: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => S.String).annotate({ identifier: "ErrorCode" }),
      ),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestId: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class ForbiddenException
  extends /*@__PURE__*/ S.TaggedError<ForbiddenException>()(
    "ForbiddenException",
    {
      Code: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => S.String).annotate({ identifier: "ErrorCode" }),
      ),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestId: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class NotFoundException
  extends /*@__PURE__*/ S.TaggedError<NotFoundException>()(
    "NotFoundException",
    {
      Code: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => S.String).annotate({ identifier: "ErrorCode" }),
      ),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestId: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ResourceLimitExceededException
  extends /*@__PURE__*/ S.TaggedError<ResourceLimitExceededException>()(
    "ResourceLimitExceededException",
    {
      Code: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => S.String).annotate({ identifier: "ErrorCode" }),
      ),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestId: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ServiceFailureException
  extends /*@__PURE__*/ S.TaggedError<ServiceFailureException>()(
    "ServiceFailureException",
    {
      Code: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => S.String).annotate({ identifier: "ErrorCode" }),
      ),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestId: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class ServiceUnavailableException
  extends /*@__PURE__*/ S.TaggedError<ServiceUnavailableException>()(
    "ServiceUnavailableException",
    {
      Code: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => S.String).annotate({ identifier: "ErrorCode" }),
      ),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestId: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(503),
  ).pipe(C.withServerError) {}
export class ThrottledClientException
  extends /*@__PURE__*/ S.TaggedError<ThrottledClientException>()(
    "ThrottledClientException",
    {
      Code: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => S.String).annotate({ identifier: "ErrorCode" }),
      ),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestId: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class UnauthorizedClientException
  extends /*@__PURE__*/ S.TaggedError<UnauthorizedClientException>()(
    "UnauthorizedClientException",
    {
      Code: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => S.String).annotate({ identifier: "ErrorCode" }),
      ),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestId: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(401),
  ).pipe(C.withAuthError) {}
export type MediaPipelineSourceType = "ChimeSdkMeeting" | (string & {});
export type Arn = string | redacted.Redacted<string>;
export type MediaPipelineSinkType = "S3Bucket" | (string & {});
export type ClientRequestToken = string | redacted.Redacted<string>;
export type GuidString = string;
export type AttendeeIdList = string[];
export type ExternalUserIdType = string | redacted.Redacted<string>;
export type ExternalUserIdList = (string | redacted.Redacted<string>)[];
export interface SelectedVideoStreams {
  AttendeeIds?: string[];
  ExternalUserIds?: (string | redacted.Redacted<string>)[];
}
export interface SourceConfiguration {
  SelectedVideoStreams?: SelectedVideoStreams;
}
export type AudioMuxType =
  | "AudioOnly"
  | "AudioWithActiveSpeakerVideo"
  | "AudioWithCompositedVideo"
  | (string & {});
export interface AudioArtifactsConfiguration {
  MuxType: AudioMuxType;
}
export type ArtifactsState = "Enabled" | "Disabled" | (string & {});
export type VideoMuxType = "VideoOnly" | (string & {});
export interface VideoArtifactsConfiguration {
  State: ArtifactsState;
  MuxType?: VideoMuxType;
}
export type ContentMuxType = "ContentOnly" | (string & {});
export interface ContentArtifactsConfiguration {
  State: ArtifactsState;
  MuxType?: ContentMuxType;
}
export type LayoutOption = "GridView" | (string & {});
export type ResolutionOption = "HD" | "FHD" | (string & {});
export type ContentShareLayoutOption =
  | "PresenterOnly"
  | "Horizontal"
  | "Vertical"
  | "ActiveSpeakerOnly"
  | (string & {});
export type PresenterPosition =
  | "TopLeft"
  | "TopRight"
  | "BottomLeft"
  | "BottomRight"
  | (string & {});
export interface PresenterOnlyConfiguration {
  PresenterPosition?: PresenterPosition;
}
export type ActiveSpeakerPosition =
  | "TopLeft"
  | "TopRight"
  | "BottomLeft"
  | "BottomRight"
  | (string & {});
export interface ActiveSpeakerOnlyConfiguration {
  ActiveSpeakerPosition?: ActiveSpeakerPosition;
}
export type TileOrder = "JoinSequence" | "SpeakerSequence" | (string & {});
export type HorizontalTilePosition = "Top" | "Bottom" | (string & {});
export type TileCount = number;
export type TileAspectRatio = string;
export interface HorizontalLayoutConfiguration {
  TileOrder?: TileOrder;
  TilePosition?: HorizontalTilePosition;
  TileCount?: number;
  TileAspectRatio?: string;
}
export type VerticalTilePosition = "Left" | "Right" | (string & {});
export interface VerticalLayoutConfiguration {
  TileOrder?: TileOrder;
  TilePosition?: VerticalTilePosition;
  TileCount?: number;
  TileAspectRatio?: string;
}
export type CornerRadius = number;
export type BorderColor = "Black" | "Blue" | "Red" | "Green" | "White" | "Yellow" | (string & {});
export type HighlightColor =
  | "Black"
  | "Blue"
  | "Red"
  | "Green"
  | "White"
  | "Yellow"
  | (string & {});
export type BorderThickness = number;
export interface VideoAttribute {
  CornerRadius?: number;
  BorderColor?: BorderColor;
  HighlightColor?: HighlightColor;
  BorderThickness?: number;
}
export type CanvasOrientation = "Landscape" | "Portrait" | (string & {});
export interface GridViewConfiguration {
  ContentShareLayout: ContentShareLayoutOption;
  PresenterOnlyConfiguration?: PresenterOnlyConfiguration;
  ActiveSpeakerOnlyConfiguration?: ActiveSpeakerOnlyConfiguration;
  HorizontalLayoutConfiguration?: HorizontalLayoutConfiguration;
  VerticalLayoutConfiguration?: VerticalLayoutConfiguration;
  VideoAttribute?: VideoAttribute;
  CanvasOrientation?: CanvasOrientation;
}
export interface CompositedVideoArtifactsConfiguration {
  Layout?: LayoutOption;
  Resolution?: ResolutionOption;
  GridViewConfiguration: GridViewConfiguration;
}
export interface ArtifactsConfiguration {
  Audio: AudioArtifactsConfiguration;
  Video: VideoArtifactsConfiguration;
  Content: ContentArtifactsConfiguration;
  CompositedVideo?: CompositedVideoArtifactsConfiguration;
}
export interface ChimeSdkMeetingConfiguration {
  SourceConfiguration?: SourceConfiguration;
  ArtifactsConfiguration?: ArtifactsConfiguration;
}
export interface SseAwsKeyManagementParams {
  AwsKmsKeyId: string;
  AwsKmsEncryptionContext?: string;
}
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  Key: string;
  Value: string;
}
export type TagList = Tag[];
export interface CreateMediaCapturePipelineRequest {
  SourceType: MediaPipelineSourceType;
  SourceArn: string | redacted.Redacted<string>;
  SinkType: MediaPipelineSinkType;
  SinkArn: string | redacted.Redacted<string>;
  ClientRequestToken?: string | redacted.Redacted<string>;
  ChimeSdkMeetingConfiguration?: ChimeSdkMeetingConfiguration;
  SseAwsKeyManagementParams?: SseAwsKeyManagementParams;
  SinkIamRoleArn?: string | redacted.Redacted<string>;
  Tags?: Tag[];
}
export type AmazonResourceName = string;
export type MediaPipelineStatus =
  | "Initializing"
  | "InProgress"
  | "Failed"
  | "Stopping"
  | "Stopped"
  | "Paused"
  | "NotStarted"
  | (string & {});
export type Iso8601Timestamp = Date;
export interface MediaCapturePipeline {
  MediaPipelineId?: string;
  MediaPipelineArn?: string;
  SourceType?: MediaPipelineSourceType;
  SourceArn?: string | redacted.Redacted<string>;
  Status?: MediaPipelineStatus;
  SinkType?: MediaPipelineSinkType;
  SinkArn?: string | redacted.Redacted<string>;
  CreatedTimestamp?: Date;
  UpdatedTimestamp?: Date;
  ChimeSdkMeetingConfiguration?: ChimeSdkMeetingConfiguration;
  SseAwsKeyManagementParams?: SseAwsKeyManagementParams;
  SinkIamRoleArn?: string | redacted.Redacted<string>;
}
export interface CreateMediaCapturePipelineResponse {
  MediaCapturePipeline?: MediaCapturePipeline;
}
export type ConcatenationSourceType = "MediaCapturePipeline" | (string & {});
export type AudioArtifactsConcatenationState = "Enabled" | (string & {});
export interface AudioConcatenationConfiguration {
  State: AudioArtifactsConcatenationState;
}
export type ArtifactsConcatenationState = "Enabled" | "Disabled" | (string & {});
export interface VideoConcatenationConfiguration {
  State: ArtifactsConcatenationState;
}
export interface ContentConcatenationConfiguration {
  State: ArtifactsConcatenationState;
}
export interface DataChannelConcatenationConfiguration {
  State: ArtifactsConcatenationState;
}
export interface TranscriptionMessagesConcatenationConfiguration {
  State: ArtifactsConcatenationState;
}
export interface MeetingEventsConcatenationConfiguration {
  State: ArtifactsConcatenationState;
}
export interface CompositedVideoConcatenationConfiguration {
  State: ArtifactsConcatenationState;
}
export interface ArtifactsConcatenationConfiguration {
  Audio: AudioConcatenationConfiguration;
  Video: VideoConcatenationConfiguration;
  Content: ContentConcatenationConfiguration;
  DataChannel: DataChannelConcatenationConfiguration;
  TranscriptionMessages: TranscriptionMessagesConcatenationConfiguration;
  MeetingEvents: MeetingEventsConcatenationConfiguration;
  CompositedVideo: CompositedVideoConcatenationConfiguration;
}
export interface ChimeSdkMeetingConcatenationConfiguration {
  ArtifactsConfiguration: ArtifactsConcatenationConfiguration;
}
export interface MediaCapturePipelineSourceConfiguration {
  MediaPipelineArn: string | redacted.Redacted<string>;
  ChimeSdkMeetingConfiguration: ChimeSdkMeetingConcatenationConfiguration;
}
export interface ConcatenationSource {
  Type: ConcatenationSourceType;
  MediaCapturePipelineSourceConfiguration: MediaCapturePipelineSourceConfiguration;
}
export type ConcatenationSourceList = ConcatenationSource[];
export type ConcatenationSinkType = "S3Bucket" | (string & {});
export interface S3BucketSinkConfiguration {
  Destination: string | redacted.Redacted<string>;
}
export interface ConcatenationSink {
  Type: ConcatenationSinkType;
  S3BucketSinkConfiguration: S3BucketSinkConfiguration;
}
export type ConcatenationSinkList = ConcatenationSink[];
export interface CreateMediaConcatenationPipelineRequest {
  Sources: ConcatenationSource[];
  Sinks: ConcatenationSink[];
  ClientRequestToken?: string | redacted.Redacted<string>;
  Tags?: Tag[];
}
export interface MediaConcatenationPipeline {
  MediaPipelineId?: string;
  MediaPipelineArn?: string;
  Sources?: ConcatenationSource[];
  Sinks?: ConcatenationSink[];
  Status?: MediaPipelineStatus;
  CreatedTimestamp?: Date;
  UpdatedTimestamp?: Date;
}
export interface CreateMediaConcatenationPipelineResponse {
  MediaConcatenationPipeline?: MediaConcatenationPipeline;
}
export type KinesisVideoStreamArn = string;
export type FragmentNumberString = string;
export type NumberOfChannels = number;
export type ChannelId = number;
export type ParticipantRole = "AGENT" | "CUSTOMER" | (string & {});
export interface ChannelDefinition {
  ChannelId: number;
  ParticipantRole?: ParticipantRole;
}
export type ChannelDefinitions = ChannelDefinition[];
export interface StreamChannelDefinition {
  NumberOfChannels: number;
  ChannelDefinitions?: ChannelDefinition[];
}
export interface StreamConfiguration {
  StreamArn: string;
  FragmentNumber?: string;
  StreamChannelDefinition: StreamChannelDefinition;
}
export type Streams = StreamConfiguration[];
export type MediaEncoding = "pcm" | (string & {});
export type MediaSampleRateHertz = number;
export interface KinesisVideoStreamSourceRuntimeConfiguration {
  Streams: StreamConfiguration[];
  MediaEncoding: MediaEncoding;
  MediaSampleRate: number;
}
export type NonEmptyString = string;
export type MediaInsightsRuntimeMetadata = { [key: string]: string | undefined };
export interface RecordingStreamConfiguration {
  StreamArn?: string;
}
export type RecordingStreamList = RecordingStreamConfiguration[];
export type FragmentSelectorType = "ProducerTimestamp" | "ServerTimestamp" | (string & {});
export interface TimestampRange {
  StartTimestamp: Date;
  EndTimestamp: Date;
}
export interface FragmentSelector {
  FragmentSelectorType: FragmentSelectorType;
  TimestampRange: TimestampRange;
}
export interface KinesisVideoStreamRecordingSourceRuntimeConfiguration {
  Streams: RecordingStreamConfiguration[];
  FragmentSelector: FragmentSelector;
}
export type RecordingFileFormat = "Wav" | "Opus" | (string & {});
export interface S3RecordingSinkRuntimeConfiguration {
  Destination: string | redacted.Redacted<string>;
  RecordingFileFormat: RecordingFileFormat;
}
export interface CreateMediaInsightsPipelineRequest {
  MediaInsightsPipelineConfigurationArn: string | redacted.Redacted<string>;
  KinesisVideoStreamSourceRuntimeConfiguration?: KinesisVideoStreamSourceRuntimeConfiguration;
  MediaInsightsRuntimeMetadata?: { [key: string]: string | undefined };
  KinesisVideoStreamRecordingSourceRuntimeConfiguration?: KinesisVideoStreamRecordingSourceRuntimeConfiguration;
  S3RecordingSinkRuntimeConfiguration?: S3RecordingSinkRuntimeConfiguration;
  Tags?: Tag[];
  ClientRequestToken?: string | redacted.Redacted<string>;
}
export type MediaInsightsPipelineConfigurationElementType =
  | "AmazonTranscribeCallAnalyticsProcessor"
  | "VoiceAnalyticsProcessor"
  | "AmazonTranscribeProcessor"
  | "KinesisDataStreamSink"
  | "LambdaFunctionSink"
  | "SqsQueueSink"
  | "SnsTopicSink"
  | "S3RecordingSink"
  | "VoiceEnhancementSink"
  | (string & {});
export type MediaPipelineElementStatus =
  | "NotStarted"
  | "NotSupported"
  | "Initializing"
  | "InProgress"
  | "Failed"
  | "Stopping"
  | "Stopped"
  | "Paused"
  | (string & {});
export interface MediaInsightsPipelineElementStatus {
  Type?: MediaInsightsPipelineConfigurationElementType;
  Status?: MediaPipelineElementStatus;
}
export type MediaInsightsPipelineElementStatuses = MediaInsightsPipelineElementStatus[];
export interface MediaInsightsPipeline {
  MediaPipelineId?: string;
  MediaPipelineArn?: string | redacted.Redacted<string>;
  MediaInsightsPipelineConfigurationArn?: string | redacted.Redacted<string>;
  Status?: MediaPipelineStatus;
  KinesisVideoStreamSourceRuntimeConfiguration?: KinesisVideoStreamSourceRuntimeConfiguration;
  MediaInsightsRuntimeMetadata?: { [key: string]: string | undefined };
  KinesisVideoStreamRecordingSourceRuntimeConfiguration?: KinesisVideoStreamRecordingSourceRuntimeConfiguration;
  S3RecordingSinkRuntimeConfiguration?: S3RecordingSinkRuntimeConfiguration;
  CreatedTimestamp?: Date;
  ElementStatuses?: MediaInsightsPipelineElementStatus[];
}
export interface CreateMediaInsightsPipelineResponse {
  MediaInsightsPipeline: MediaInsightsPipeline;
}
export type MediaInsightsPipelineConfigurationNameString = string;
export type RealTimeAlertRuleType = "KeywordMatch" | "Sentiment" | "IssueDetection" | (string & {});
export type RuleName = string;
export type Keyword = string;
export type KeywordMatchWordList = string[];
export interface KeywordMatchConfiguration {
  RuleName: string;
  Keywords: string[];
  Negate?: boolean;
}
export type SentimentType = "NEGATIVE" | (string & {});
export type SentimentTimePeriodInSeconds = number;
export interface SentimentConfiguration {
  RuleName: string;
  SentimentType: SentimentType;
  TimePeriod: number;
}
export interface IssueDetectionConfiguration {
  RuleName: string;
}
export interface RealTimeAlertRule {
  Type: RealTimeAlertRuleType;
  KeywordMatchConfiguration?: KeywordMatchConfiguration;
  SentimentConfiguration?: SentimentConfiguration;
  IssueDetectionConfiguration?: IssueDetectionConfiguration;
}
export type RealTimeAlertRuleList = RealTimeAlertRule[];
export interface RealTimeAlertConfiguration {
  Disabled?: boolean;
  Rules?: RealTimeAlertRule[];
}
export type CallAnalyticsLanguageCode =
  | "en-US"
  | "en-GB"
  | "es-US"
  | "fr-CA"
  | "fr-FR"
  | "en-AU"
  | "it-IT"
  | "de-DE"
  | "pt-BR"
  | (string & {});
export type VocabularyName = string;
export type VocabularyFilterName = string;
export type VocabularyFilterMethod = "remove" | "mask" | "tag" | (string & {});
export type ModelName = string;
export type PartialResultsStability = "high" | "medium" | "low" | (string & {});
export type ContentType = "PII" | (string & {});
export type PiiEntityTypes = string;
export type ContentRedactionOutput = "redacted" | "redacted_and_unredacted" | (string & {});
export interface PostCallAnalyticsSettings {
  OutputLocation: string;
  DataAccessRoleArn: string;
  ContentRedactionOutput?: ContentRedactionOutput;
  OutputEncryptionKMSKeyId?: string;
}
export type CategoryName = string;
export type CategoryNameList = string[];
export interface AmazonTranscribeCallAnalyticsProcessorConfiguration {
  LanguageCode: CallAnalyticsLanguageCode;
  VocabularyName?: string;
  VocabularyFilterName?: string;
  VocabularyFilterMethod?: VocabularyFilterMethod;
  LanguageModelName?: string;
  EnablePartialResultsStabilization?: boolean;
  PartialResultsStability?: PartialResultsStability;
  ContentIdentificationType?: ContentType;
  ContentRedactionType?: ContentType;
  PiiEntityTypes?: string;
  FilterPartialResults?: boolean;
  PostCallAnalyticsSettings?: PostCallAnalyticsSettings;
  CallAnalyticsStreamCategories?: string[];
}
export type LanguageOptions = string;
export type VocabularyNames = string;
export type VocabularyFilterNames = string;
export interface AmazonTranscribeProcessorConfiguration {
  LanguageCode?: CallAnalyticsLanguageCode;
  VocabularyName?: string;
  VocabularyFilterName?: string;
  VocabularyFilterMethod?: VocabularyFilterMethod;
  ShowSpeakerLabel?: boolean;
  EnablePartialResultsStabilization?: boolean;
  PartialResultsStability?: PartialResultsStability;
  ContentIdentificationType?: ContentType;
  ContentRedactionType?: ContentType;
  PiiEntityTypes?: string;
  LanguageModelName?: string;
  FilterPartialResults?: boolean;
  IdentifyLanguage?: boolean;
  IdentifyMultipleLanguages?: boolean;
  LanguageOptions?: string;
  PreferredLanguage?: CallAnalyticsLanguageCode;
  VocabularyNames?: string;
  VocabularyFilterNames?: string;
}
export interface KinesisDataStreamSinkConfiguration {
  InsightsTarget?: string | redacted.Redacted<string>;
}
export interface S3RecordingSinkConfiguration {
  Destination?: string | redacted.Redacted<string>;
  RecordingFileFormat?: RecordingFileFormat;
}
export type VoiceAnalyticsConfigurationStatus = "Enabled" | "Disabled" | (string & {});
export interface VoiceAnalyticsProcessorConfiguration {
  SpeakerSearchStatus?: VoiceAnalyticsConfigurationStatus;
  VoiceToneAnalysisStatus?: VoiceAnalyticsConfigurationStatus;
}
export interface LambdaFunctionSinkConfiguration {
  InsightsTarget?: string | redacted.Redacted<string>;
}
export interface SqsQueueSinkConfiguration {
  InsightsTarget?: string | redacted.Redacted<string>;
}
export interface SnsTopicSinkConfiguration {
  InsightsTarget?: string | redacted.Redacted<string>;
}
export interface VoiceEnhancementSinkConfiguration {
  Disabled?: boolean;
}
export interface MediaInsightsPipelineConfigurationElement {
  Type: MediaInsightsPipelineConfigurationElementType;
  AmazonTranscribeCallAnalyticsProcessorConfiguration?: AmazonTranscribeCallAnalyticsProcessorConfiguration;
  AmazonTranscribeProcessorConfiguration?: AmazonTranscribeProcessorConfiguration;
  KinesisDataStreamSinkConfiguration?: KinesisDataStreamSinkConfiguration;
  S3RecordingSinkConfiguration?: S3RecordingSinkConfiguration;
  VoiceAnalyticsProcessorConfiguration?: VoiceAnalyticsProcessorConfiguration;
  LambdaFunctionSinkConfiguration?: LambdaFunctionSinkConfiguration;
  SqsQueueSinkConfiguration?: SqsQueueSinkConfiguration;
  SnsTopicSinkConfiguration?: SnsTopicSinkConfiguration;
  VoiceEnhancementSinkConfiguration?: VoiceEnhancementSinkConfiguration;
}
export type MediaInsightsPipelineConfigurationElements =
  MediaInsightsPipelineConfigurationElement[];
export interface CreateMediaInsightsPipelineConfigurationRequest {
  MediaInsightsPipelineConfigurationName: string;
  ResourceAccessRoleArn: string | redacted.Redacted<string>;
  RealTimeAlertConfiguration?: RealTimeAlertConfiguration;
  Elements: MediaInsightsPipelineConfigurationElement[];
  Tags?: Tag[];
  ClientRequestToken?: string | redacted.Redacted<string>;
}
export interface MediaInsightsPipelineConfiguration {
  MediaInsightsPipelineConfigurationName?: string;
  MediaInsightsPipelineConfigurationArn?: string | redacted.Redacted<string>;
  ResourceAccessRoleArn?: string | redacted.Redacted<string>;
  RealTimeAlertConfiguration?: RealTimeAlertConfiguration;
  Elements?: MediaInsightsPipelineConfigurationElement[];
  MediaInsightsPipelineConfigurationId?: string;
  CreatedTimestamp?: Date;
  UpdatedTimestamp?: Date;
}
export interface CreateMediaInsightsPipelineConfigurationResponse {
  MediaInsightsPipelineConfiguration?: MediaInsightsPipelineConfiguration;
}
export type LiveConnectorSourceType = "ChimeSdkMeeting" | (string & {});
export type LiveConnectorMuxType =
  | "AudioWithCompositedVideo"
  | "AudioWithActiveSpeakerVideo"
  | (string & {});
export interface ChimeSdkMeetingLiveConnectorConfiguration {
  Arn: string | redacted.Redacted<string>;
  MuxType: LiveConnectorMuxType;
  CompositedVideo?: CompositedVideoArtifactsConfiguration;
  SourceConfiguration?: SourceConfiguration;
}
export interface LiveConnectorSourceConfiguration {
  SourceType: LiveConnectorSourceType;
  ChimeSdkMeetingLiveConnectorConfiguration: ChimeSdkMeetingLiveConnectorConfiguration;
}
export type LiveConnectorSourceList = LiveConnectorSourceConfiguration[];
export type LiveConnectorSinkType = "RTMP" | (string & {});
export type SensitiveString = string | redacted.Redacted<string>;
export type AudioChannelsOption = "Stereo" | "Mono" | (string & {});
export type AudioSampleRateOption = string;
export interface LiveConnectorRTMPConfiguration {
  Url: string | redacted.Redacted<string>;
  AudioChannels?: AudioChannelsOption;
  AudioSampleRate?: string;
}
export interface LiveConnectorSinkConfiguration {
  SinkType: LiveConnectorSinkType;
  RTMPConfiguration: LiveConnectorRTMPConfiguration;
}
export type LiveConnectorSinkList = LiveConnectorSinkConfiguration[];
export interface CreateMediaLiveConnectorPipelineRequest {
  Sources: LiveConnectorSourceConfiguration[];
  Sinks: LiveConnectorSinkConfiguration[];
  ClientRequestToken?: string | redacted.Redacted<string>;
  Tags?: Tag[];
}
export interface MediaLiveConnectorPipeline {
  Sources?: LiveConnectorSourceConfiguration[];
  Sinks?: LiveConnectorSinkConfiguration[];
  MediaPipelineId?: string;
  MediaPipelineArn?: string;
  Status?: MediaPipelineStatus;
  CreatedTimestamp?: Date;
  UpdatedTimestamp?: Date;
}
export interface CreateMediaLiveConnectorPipelineResponse {
  MediaLiveConnectorPipeline?: MediaLiveConnectorPipeline;
}
export type AwsRegion = string;
export type DataRetentionInHours = number;
export interface KinesisVideoStreamConfiguration {
  Region: string;
  DataRetentionInHours?: number;
}
export type KinesisVideoStreamPoolName = string;
export interface CreateMediaPipelineKinesisVideoStreamPoolRequest {
  StreamConfiguration: KinesisVideoStreamConfiguration;
  PoolName: string;
  ClientRequestToken?: string | redacted.Redacted<string>;
  Tags?: Tag[];
}
export type KinesisVideoStreamPoolId = string;
export type KinesisVideoStreamPoolStatus =
  | "CREATING"
  | "ACTIVE"
  | "UPDATING"
  | "DELETING"
  | "FAILED"
  | (string & {});
export type KinesisVideoStreamPoolSize = number;
export interface KinesisVideoStreamPoolConfiguration {
  PoolArn?: string | redacted.Redacted<string>;
  PoolName?: string;
  PoolId?: string;
  PoolStatus?: KinesisVideoStreamPoolStatus;
  PoolSize?: number;
  StreamConfiguration?: KinesisVideoStreamConfiguration;
  CreatedTimestamp?: Date;
  UpdatedTimestamp?: Date;
}
export interface CreateMediaPipelineKinesisVideoStreamPoolResponse {
  KinesisVideoStreamPoolConfiguration?: KinesisVideoStreamPoolConfiguration;
}
export interface MediaStreamSource {
  SourceType: MediaPipelineSourceType;
  SourceArn: string | redacted.Redacted<string>;
}
export type MediaStreamSourceList = MediaStreamSource[];
export type MediaStreamPipelineSinkType = "KinesisVideoStreamPool" | (string & {});
export type ReservedStreamCapacity = number;
export type MediaStreamType = "MixedAudio" | "IndividualAudio" | (string & {});
export interface MediaStreamSink {
  SinkArn: string | redacted.Redacted<string>;
  SinkType: MediaStreamPipelineSinkType;
  ReservedStreamCapacity: number;
  MediaStreamType: MediaStreamType;
}
export type MediaStreamSinkList = MediaStreamSink[];
export interface CreateMediaStreamPipelineRequest {
  Sources: MediaStreamSource[];
  Sinks: MediaStreamSink[];
  ClientRequestToken?: string | redacted.Redacted<string>;
  Tags?: Tag[];
}
export interface MediaStreamPipeline {
  MediaPipelineId?: string;
  MediaPipelineArn?: string;
  CreatedTimestamp?: Date;
  UpdatedTimestamp?: Date;
  Status?: MediaPipelineStatus;
  Sources?: MediaStreamSource[];
  Sinks?: MediaStreamSink[];
}
export interface CreateMediaStreamPipelineResponse {
  MediaStreamPipeline?: MediaStreamPipeline;
}
export interface DeleteMediaCapturePipelineRequest {
  MediaPipelineId: string;
}
export interface DeleteMediaCapturePipelineResponse {}
export interface DeleteMediaInsightsPipelineConfigurationRequest {
  Identifier: string;
}
export interface DeleteMediaInsightsPipelineConfigurationResponse {}
export interface DeleteMediaPipelineRequest {
  MediaPipelineId: string;
}
export interface DeleteMediaPipelineResponse {}
export interface DeleteMediaPipelineKinesisVideoStreamPoolRequest {
  Identifier: string;
}
export interface DeleteMediaPipelineKinesisVideoStreamPoolResponse {}
export interface GetMediaCapturePipelineRequest {
  MediaPipelineId: string;
}
export interface GetMediaCapturePipelineResponse {
  MediaCapturePipeline?: MediaCapturePipeline;
}
export interface GetMediaInsightsPipelineConfigurationRequest {
  Identifier: string;
}
export interface GetMediaInsightsPipelineConfigurationResponse {
  MediaInsightsPipelineConfiguration?: MediaInsightsPipelineConfiguration;
}
export interface GetMediaPipelineRequest {
  MediaPipelineId: string;
}
export interface MediaPipeline {
  MediaCapturePipeline?: MediaCapturePipeline;
  MediaLiveConnectorPipeline?: MediaLiveConnectorPipeline;
  MediaConcatenationPipeline?: MediaConcatenationPipeline;
  MediaInsightsPipeline?: MediaInsightsPipeline;
  MediaStreamPipeline?: MediaStreamPipeline;
}
export interface GetMediaPipelineResponse {
  MediaPipeline?: MediaPipeline;
}
export interface GetMediaPipelineKinesisVideoStreamPoolRequest {
  Identifier: string;
}
export interface GetMediaPipelineKinesisVideoStreamPoolResponse {
  KinesisVideoStreamPoolConfiguration?: KinesisVideoStreamPoolConfiguration;
}
export interface GetSpeakerSearchTaskRequest {
  Identifier: string;
  SpeakerSearchTaskId: string;
}
export type MediaPipelineTaskStatus =
  | "NotStarted"
  | "Initializing"
  | "InProgress"
  | "Failed"
  | "Stopping"
  | "Stopped"
  | (string & {});
export interface SpeakerSearchTask {
  SpeakerSearchTaskId?: string;
  SpeakerSearchTaskStatus?: MediaPipelineTaskStatus;
  CreatedTimestamp?: Date;
  UpdatedTimestamp?: Date;
}
export interface GetSpeakerSearchTaskResponse {
  SpeakerSearchTask?: SpeakerSearchTask;
}
export interface GetVoiceToneAnalysisTaskRequest {
  Identifier: string;
  VoiceToneAnalysisTaskId: string;
}
export interface VoiceToneAnalysisTask {
  VoiceToneAnalysisTaskId?: string;
  VoiceToneAnalysisTaskStatus?: MediaPipelineTaskStatus;
  CreatedTimestamp?: Date;
  UpdatedTimestamp?: Date;
}
export interface GetVoiceToneAnalysisTaskResponse {
  VoiceToneAnalysisTask?: VoiceToneAnalysisTask;
}
export type ResultMax = number;
export interface ListMediaCapturePipelinesRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface MediaCapturePipelineSummary {
  MediaPipelineId?: string;
  MediaPipelineArn?: string;
}
export type MediaCapturePipelineSummaryList = MediaCapturePipelineSummary[];
export interface ListMediaCapturePipelinesResponse {
  MediaCapturePipelines?: MediaCapturePipelineSummary[];
  NextToken?: string;
}
export interface ListMediaInsightsPipelineConfigurationsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface MediaInsightsPipelineConfigurationSummary {
  MediaInsightsPipelineConfigurationName?: string;
  MediaInsightsPipelineConfigurationId?: string;
  MediaInsightsPipelineConfigurationArn?: string | redacted.Redacted<string>;
}
export type MediaInsightsPipelineConfigurationSummaryList =
  MediaInsightsPipelineConfigurationSummary[];
export interface ListMediaInsightsPipelineConfigurationsResponse {
  MediaInsightsPipelineConfigurations?: MediaInsightsPipelineConfigurationSummary[];
  NextToken?: string;
}
export interface ListMediaPipelineKinesisVideoStreamPoolsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface KinesisVideoStreamPoolSummary {
  PoolName?: string;
  PoolId?: string;
  PoolArn?: string | redacted.Redacted<string>;
}
export type KinesisVideoStreamPoolSummaryList = KinesisVideoStreamPoolSummary[];
export interface ListMediaPipelineKinesisVideoStreamPoolsResponse {
  KinesisVideoStreamPools?: KinesisVideoStreamPoolSummary[];
  NextToken?: string;
}
export interface ListMediaPipelinesRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface MediaPipelineSummary {
  MediaPipelineId?: string;
  MediaPipelineArn?: string;
}
export type MediaPipelineList = MediaPipelineSummary[];
export interface ListMediaPipelinesResponse {
  MediaPipelines?: MediaPipelineSummary[];
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceARN: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Tag[];
}
export interface KinesisVideoStreamSourceTaskConfiguration {
  StreamArn: string;
  ChannelId: number;
  FragmentNumber?: string;
}
export interface StartSpeakerSearchTaskRequest {
  Identifier: string;
  VoiceProfileDomainArn: string | redacted.Redacted<string>;
  KinesisVideoStreamSourceTaskConfiguration?: KinesisVideoStreamSourceTaskConfiguration;
  ClientRequestToken?: string | redacted.Redacted<string>;
}
export interface StartSpeakerSearchTaskResponse {
  SpeakerSearchTask?: SpeakerSearchTask;
}
export type VoiceAnalyticsLanguageCode = "en-US" | (string & {});
export interface StartVoiceToneAnalysisTaskRequest {
  Identifier: string;
  LanguageCode: VoiceAnalyticsLanguageCode;
  KinesisVideoStreamSourceTaskConfiguration?: KinesisVideoStreamSourceTaskConfiguration;
  ClientRequestToken?: string | redacted.Redacted<string>;
}
export interface StartVoiceToneAnalysisTaskResponse {
  VoiceToneAnalysisTask?: VoiceToneAnalysisTask;
}
export interface StopSpeakerSearchTaskRequest {
  Identifier: string;
  SpeakerSearchTaskId: string;
}
export interface StopSpeakerSearchTaskResponse {}
export interface StopVoiceToneAnalysisTaskRequest {
  Identifier: string;
  VoiceToneAnalysisTaskId: string;
}
export interface StopVoiceToneAnalysisTaskResponse {}
export interface TagResourceRequest {
  ResourceARN: string;
  Tags: Tag[];
}
export interface TagResourceResponse {}
export type TagKeyList = string[];
export interface UntagResourceRequest {
  ResourceARN: string;
  TagKeys: string[];
}
export interface UntagResourceResponse {}
export interface UpdateMediaInsightsPipelineConfigurationRequest {
  Identifier: string;
  ResourceAccessRoleArn: string | redacted.Redacted<string>;
  RealTimeAlertConfiguration?: RealTimeAlertConfiguration;
  Elements: MediaInsightsPipelineConfigurationElement[];
}
export interface UpdateMediaInsightsPipelineConfigurationResponse {
  MediaInsightsPipelineConfiguration?: MediaInsightsPipelineConfiguration;
}
export type MediaPipelineStatusUpdate = "Pause" | "Resume" | (string & {});
export interface UpdateMediaInsightsPipelineStatusRequest {
  Identifier: string;
  UpdateStatus: MediaPipelineStatusUpdate;
}
export interface UpdateMediaInsightsPipelineStatusResponse {}
export type DataRetentionChangeInHours = number;
export interface KinesisVideoStreamConfigurationUpdate {
  DataRetentionInHours?: number;
}
export interface UpdateMediaPipelineKinesisVideoStreamPoolRequest {
  Identifier: string;
  StreamConfiguration?: KinesisVideoStreamConfigurationUpdate;
}
export interface UpdateMediaPipelineKinesisVideoStreamPoolResponse {
  KinesisVideoStreamPoolConfiguration?: KinesisVideoStreamPoolConfiguration;
}
export type ErrorCode =
  | "BadRequest"
  | "Forbidden"
  | "NotFound"
  | "ResourceLimitExceeded"
  | "ServiceFailure"
  | "ServiceUnavailable"
  | "Throttling"
  | (string & {});
export type CreateMediaCapturePipelineError =
  | BadRequestException
  | ForbiddenException
  | ResourceLimitExceededException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Creates a media pipeline.
 */
export const createMediaCapturePipeline: API.OperationMethod<
  CreateMediaCapturePipelineRequest,
  CreateMediaCapturePipelineResponse,
  CreateMediaCapturePipelineError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(17, __c2, 1) as any as S.Schema<CreateMediaCapturePipelineRequest>,
  output: __S(19, __c2, 3) as any as S.Schema<CreateMediaCapturePipelineResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    ResourceLimitExceededException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateMediaCapturePipeline",
}));

export type CreateMediaConcatenationPipelineError =
  | BadRequestException
  | ForbiddenException
  | ResourceLimitExceededException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Creates a media concatenation pipeline.
 */
export const createMediaConcatenationPipeline: API.OperationMethod<
  CreateMediaConcatenationPipelineRequest,
  CreateMediaConcatenationPipelineResponse,
  CreateMediaConcatenationPipelineError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(29, __c3, 5) as any as S.Schema<CreateMediaConcatenationPipelineRequest>,
  output: __S(31, __c3, 7) as any as S.Schema<CreateMediaConcatenationPipelineResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    ResourceLimitExceededException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateMediaConcatenationPipeline",
}));

export type CreateMediaInsightsPipelineError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ResourceLimitExceededException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Creates a media insights pipeline.
 */
export const createMediaInsightsPipeline: API.OperationMethod<
  CreateMediaInsightsPipelineRequest,
  CreateMediaInsightsPipelineResponse,
  CreateMediaInsightsPipelineError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(45, __c5, 5) as any as S.Schema<CreateMediaInsightsPipelineRequest>,
  output: __S(49, __c6, 1) as any as S.Schema<CreateMediaInsightsPipelineResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ResourceLimitExceededException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateMediaInsightsPipeline",
}));

export type CreateMediaInsightsPipelineConfigurationError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ResourceLimitExceededException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * A structure that contains the static configurations for a media insights
 * pipeline.
 */
export const createMediaInsightsPipelineConfiguration: API.OperationMethod<
  CreateMediaInsightsPipelineConfigurationRequest,
  CreateMediaInsightsPipelineConfigurationResponse,
  CreateMediaInsightsPipelineConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(65, __c8, 1) as any as S.Schema<CreateMediaInsightsPipelineConfigurationRequest>,
  output: __S(67, __c8, 3) as any as S.Schema<CreateMediaInsightsPipelineConfigurationResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ResourceLimitExceededException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateMediaInsightsPipelineConfiguration",
}));

export type CreateMediaLiveConnectorPipelineError =
  | BadRequestException
  | ForbiddenException
  | ResourceLimitExceededException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Creates a media live connector pipeline in an Amazon Chime SDK meeting.
 */
export const createMediaLiveConnectorPipeline: API.OperationMethod<
  CreateMediaLiveConnectorPipelineRequest,
  CreateMediaLiveConnectorPipelineResponse,
  CreateMediaLiveConnectorPipelineError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(74, __c9, 2) as any as S.Schema<CreateMediaLiveConnectorPipelineRequest>,
  output: __S(76, __c9, 4) as any as S.Schema<CreateMediaLiveConnectorPipelineResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    ResourceLimitExceededException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateMediaLiveConnectorPipeline",
}));

export type CreateMediaPipelineKinesisVideoStreamPoolError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | ResourceLimitExceededException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Creates an Amazon Kinesis Video Stream pool for use with media stream
 * pipelines.
 *
 * If a meeting uses an opt-in Region as its
 * MediaRegion,
 * the KVS stream must be in that same Region. For example, if a meeting uses the `af-south-1` Region, the KVS stream must also be in `af-south-1`. However, if the meeting uses a
 * Region that AWS turns on by default, the KVS stream can be in any available Region, including an opt-in Region. For example, if the meeting uses `ca-central-1`, the KVS stream can be in
 * `eu-west-2`, `us-east-1`, `af-south-1`, or any other Region that the Amazon Chime SDK supports.
 *
 * To learn which AWS Region a meeting uses, call the GetMeeting API and
 * use the MediaRegion
 * parameter from the response.
 *
 * For more information about opt-in Regions, refer to Available Regions in the
 * *Amazon Chime SDK Developer Guide*, and
 * Specify which AWS Regions your account can use,
 * in the *AWS Account Management Reference Guide*.
 */
export const createMediaPipelineKinesisVideoStreamPool: API.OperationMethod<
  CreateMediaPipelineKinesisVideoStreamPoolRequest,
  CreateMediaPipelineKinesisVideoStreamPoolResponse,
  CreateMediaPipelineKinesisVideoStreamPoolError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(78, __c9, 6) as any as S.Schema<CreateMediaPipelineKinesisVideoStreamPoolRequest>,
  output: __S(80, __c10, 0) as any as S.Schema<CreateMediaPipelineKinesisVideoStreamPoolResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    ResourceLimitExceededException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateMediaPipelineKinesisVideoStreamPool",
}));

export type CreateMediaStreamPipelineError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ResourceLimitExceededException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Creates a streaming media pipeline.
 */
export const createMediaStreamPipeline: API.OperationMethod<
  CreateMediaStreamPipelineRequest,
  CreateMediaStreamPipelineResponse,
  CreateMediaStreamPipelineError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(85, __c10, 5) as any as S.Schema<CreateMediaStreamPipelineRequest>,
  output: __S(87, __c10, 7) as any as S.Schema<CreateMediaStreamPipelineResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ResourceLimitExceededException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateMediaStreamPipeline",
}));

export type DeleteMediaCapturePipelineError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Deletes the media pipeline.
 */
export const deleteMediaCapturePipeline: API.OperationMethod<
  DeleteMediaCapturePipelineRequest,
  DeleteMediaCapturePipelineResponse,
  DeleteMediaCapturePipelineError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(88, __c11, 0) as any as S.Schema<DeleteMediaCapturePipelineRequest>,
  output: __S(89, __c11, 1) as any as S.Schema<DeleteMediaCapturePipelineResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteMediaCapturePipeline",
}));

export type DeleteMediaInsightsPipelineConfigurationError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Deletes the specified configuration settings.
 */
export const deleteMediaInsightsPipelineConfiguration: API.OperationMethod<
  DeleteMediaInsightsPipelineConfigurationRequest,
  DeleteMediaInsightsPipelineConfigurationResponse,
  DeleteMediaInsightsPipelineConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(90, __c11, 2) as any as S.Schema<DeleteMediaInsightsPipelineConfigurationRequest>,
  output: __S(89, __c11, 1) as any as S.Schema<DeleteMediaInsightsPipelineConfigurationResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteMediaInsightsPipelineConfiguration",
}));

export type DeleteMediaPipelineError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Deletes the media pipeline.
 */
export const deleteMediaPipeline: API.OperationMethod<
  DeleteMediaPipelineRequest,
  DeleteMediaPipelineResponse,
  DeleteMediaPipelineError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(91, __c11, 3) as any as S.Schema<DeleteMediaPipelineRequest>,
  output: __S(92, __c11, 4) as any as S.Schema<DeleteMediaPipelineResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteMediaPipeline",
}));

export type DeleteMediaPipelineKinesisVideoStreamPoolError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Deletes an Amazon Kinesis Video Stream pool.
 */
export const deleteMediaPipelineKinesisVideoStreamPool: API.OperationMethod<
  DeleteMediaPipelineKinesisVideoStreamPoolRequest,
  DeleteMediaPipelineKinesisVideoStreamPoolResponse,
  DeleteMediaPipelineKinesisVideoStreamPoolError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(93, __c11, 5) as any as S.Schema<DeleteMediaPipelineKinesisVideoStreamPoolRequest>,
  output: __S(89, __c11, 1) as any as S.Schema<DeleteMediaPipelineKinesisVideoStreamPoolResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteMediaPipelineKinesisVideoStreamPool",
}));

export type GetMediaCapturePipelineError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Gets an existing media pipeline.
 */
export const getMediaCapturePipeline: API.OperationMethod<
  GetMediaCapturePipelineRequest,
  GetMediaCapturePipelineResponse,
  GetMediaCapturePipelineError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(94, __c11, 6) as any as S.Schema<GetMediaCapturePipelineRequest>,
  output: __S(19, __c2, 3) as any as S.Schema<GetMediaCapturePipelineResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetMediaCapturePipeline",
}));

export type GetMediaInsightsPipelineConfigurationError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Gets the configuration settings for a media insights pipeline.
 */
export const getMediaInsightsPipelineConfiguration: API.OperationMethod<
  GetMediaInsightsPipelineConfigurationRequest,
  GetMediaInsightsPipelineConfigurationResponse,
  GetMediaInsightsPipelineConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(95, __c11, 7) as any as S.Schema<GetMediaInsightsPipelineConfigurationRequest>,
  output: __S(67, __c8, 3) as any as S.Schema<GetMediaInsightsPipelineConfigurationResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetMediaInsightsPipelineConfiguration",
}));

export type GetMediaPipelineError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Gets an existing media pipeline.
 */
export const getMediaPipeline: API.OperationMethod<
  GetMediaPipelineRequest,
  GetMediaPipelineResponse,
  GetMediaPipelineError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(96, __c12, 0) as any as S.Schema<GetMediaPipelineRequest>,
  output: __S(98, __c12, 2) as any as S.Schema<GetMediaPipelineResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetMediaPipeline",
}));

export type GetMediaPipelineKinesisVideoStreamPoolError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Gets an Kinesis video stream pool.
 */
export const getMediaPipelineKinesisVideoStreamPool: API.OperationMethod<
  GetMediaPipelineKinesisVideoStreamPoolRequest,
  GetMediaPipelineKinesisVideoStreamPoolResponse,
  GetMediaPipelineKinesisVideoStreamPoolError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(99, __c12, 3) as any as S.Schema<GetMediaPipelineKinesisVideoStreamPoolRequest>,
  output: __S(80, __c10, 0) as any as S.Schema<GetMediaPipelineKinesisVideoStreamPoolResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetMediaPipelineKinesisVideoStreamPool",
}));

export type GetSpeakerSearchTaskError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Retrieves the details of the specified speaker search task.
 */
export const getSpeakerSearchTask: API.OperationMethod<
  GetSpeakerSearchTaskRequest,
  GetSpeakerSearchTaskResponse,
  GetSpeakerSearchTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(100, __c12, 4) as any as S.Schema<GetSpeakerSearchTaskRequest>,
  output: __S(102, __c12, 6) as any as S.Schema<GetSpeakerSearchTaskResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSpeakerSearchTask",
}));

export type GetVoiceToneAnalysisTaskError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Retrieves the details of a voice tone analysis task.
 */
export const getVoiceToneAnalysisTask: API.OperationMethod<
  GetVoiceToneAnalysisTaskRequest,
  GetVoiceToneAnalysisTaskResponse,
  GetVoiceToneAnalysisTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(103, __c12, 7) as any as S.Schema<GetVoiceToneAnalysisTaskRequest>,
  output: __S(105, __c13, 1) as any as S.Schema<GetVoiceToneAnalysisTaskResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetVoiceToneAnalysisTask",
}));

export type ListMediaCapturePipelinesError =
  | BadRequestException
  | ForbiddenException
  | ResourceLimitExceededException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Returns a list of media pipelines.
 */
export const listMediaCapturePipelines: API.PaginatedOperationMethod<
  ListMediaCapturePipelinesRequest,
  ListMediaCapturePipelinesResponse,
  ListMediaCapturePipelinesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(106, __c13, 2) as any as S.Schema<ListMediaCapturePipelinesRequest>,
  output: __S(109, __c13, 5) as any as S.Schema<ListMediaCapturePipelinesResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    ResourceLimitExceededException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListMediaCapturePipelines",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListMediaInsightsPipelineConfigurationsError =
  | BadRequestException
  | ForbiddenException
  | ResourceLimitExceededException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Lists the available media insights pipeline configurations.
 */
export const listMediaInsightsPipelineConfigurations: API.PaginatedOperationMethod<
  ListMediaInsightsPipelineConfigurationsRequest,
  ListMediaInsightsPipelineConfigurationsResponse,
  ListMediaInsightsPipelineConfigurationsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(110, __c13, 6) as any as S.Schema<ListMediaInsightsPipelineConfigurationsRequest>,
  output: __S(113, __c14, 1) as any as S.Schema<ListMediaInsightsPipelineConfigurationsResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    ResourceLimitExceededException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListMediaInsightsPipelineConfigurations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListMediaPipelineKinesisVideoStreamPoolsError =
  | BadRequestException
  | ForbiddenException
  | ResourceLimitExceededException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Lists the video stream pools in the media pipeline.
 */
export const listMediaPipelineKinesisVideoStreamPools: API.PaginatedOperationMethod<
  ListMediaPipelineKinesisVideoStreamPoolsRequest,
  ListMediaPipelineKinesisVideoStreamPoolsResponse,
  ListMediaPipelineKinesisVideoStreamPoolsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(114, __c14, 2) as any as S.Schema<ListMediaPipelineKinesisVideoStreamPoolsRequest>,
  output: __S(117, __c14, 5) as any as S.Schema<ListMediaPipelineKinesisVideoStreamPoolsResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    ResourceLimitExceededException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListMediaPipelineKinesisVideoStreamPools",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListMediaPipelinesError =
  | BadRequestException
  | ForbiddenException
  | ResourceLimitExceededException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Returns a list of media pipelines.
 */
export const listMediaPipelines: API.PaginatedOperationMethod<
  ListMediaPipelinesRequest,
  ListMediaPipelinesResponse,
  ListMediaPipelinesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(118, __c14, 6) as any as S.Schema<ListMediaPipelinesRequest>,
  output: __S(121, __c15, 1) as any as S.Schema<ListMediaPipelinesResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    ResourceLimitExceededException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListMediaPipelines",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Lists the tags available for a media pipeline.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(122, __c15, 2) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(123, __c15, 3) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type StartSpeakerSearchTaskError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Starts a speaker search task.
 *
 * Before starting any speaker search tasks, you must provide all notices and obtain all consents from the speaker as required under applicable privacy and biometrics laws, and as required under the
 * AWS service terms for the Amazon Chime SDK.
 */
export const startSpeakerSearchTask: API.OperationMethod<
  StartSpeakerSearchTaskRequest,
  StartSpeakerSearchTaskResponse,
  StartSpeakerSearchTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(125, __c15, 5) as any as S.Schema<StartSpeakerSearchTaskRequest>,
  output: __S(102, __c12, 6) as any as S.Schema<StartSpeakerSearchTaskResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartSpeakerSearchTask",
}));

export type StartVoiceToneAnalysisTaskError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Starts a voice tone analysis task. For more information about voice tone analysis, see
 * Using Amazon Chime SDK voice analytics
 * in the *Amazon Chime SDK Developer Guide*.
 *
 * Before starting any voice tone analysis tasks, you must provide all notices and obtain all consents from the speaker as required under applicable privacy and biometrics laws, and as required under the
 * AWS service terms for the Amazon Chime SDK.
 */
export const startVoiceToneAnalysisTask: API.OperationMethod<
  StartVoiceToneAnalysisTaskRequest,
  StartVoiceToneAnalysisTaskResponse,
  StartVoiceToneAnalysisTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(126, __c15, 6) as any as S.Schema<StartVoiceToneAnalysisTaskRequest>,
  output: __S(105, __c13, 1) as any as S.Schema<StartVoiceToneAnalysisTaskResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartVoiceToneAnalysisTask",
}));

export type StopSpeakerSearchTaskError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Stops a speaker search task.
 */
export const stopSpeakerSearchTask: API.OperationMethod<
  StopSpeakerSearchTaskRequest,
  StopSpeakerSearchTaskResponse,
  StopSpeakerSearchTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(127, __c15, 7) as any as S.Schema<StopSpeakerSearchTaskRequest>,
  output: __S(92, __c11, 4) as any as S.Schema<StopSpeakerSearchTaskResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopSpeakerSearchTask",
}));

export type StopVoiceToneAnalysisTaskError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Stops a voice tone analysis task.
 */
export const stopVoiceToneAnalysisTask: API.OperationMethod<
  StopVoiceToneAnalysisTaskRequest,
  StopVoiceToneAnalysisTaskResponse,
  StopVoiceToneAnalysisTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(128, __c16, 0) as any as S.Schema<StopVoiceToneAnalysisTaskRequest>,
  output: __S(89, __c11, 1) as any as S.Schema<StopVoiceToneAnalysisTaskResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopVoiceToneAnalysisTask",
}));

export type TagResourceError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * The ARN of the media pipeline that you want to tag. Consists of the pipeline's endpoint region, resource ID, and pipeline ID.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(129, __c16, 1) as any as S.Schema<TagResourceRequest>,
  output: __S(92, __c11, 4) as any as S.Schema<TagResourceResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Removes any tags from a media pipeline.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(130, __c16, 2) as any as S.Schema<UntagResourceRequest>,
  output: __S(92, __c11, 4) as any as S.Schema<UntagResourceResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateMediaInsightsPipelineConfigurationError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Updates the media insights pipeline's configuration settings.
 */
export const updateMediaInsightsPipelineConfiguration: API.OperationMethod<
  UpdateMediaInsightsPipelineConfigurationRequest,
  UpdateMediaInsightsPipelineConfigurationResponse,
  UpdateMediaInsightsPipelineConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(131, __c16, 3) as any as S.Schema<UpdateMediaInsightsPipelineConfigurationRequest>,
  output: __S(67, __c8, 3) as any as S.Schema<UpdateMediaInsightsPipelineConfigurationResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateMediaInsightsPipelineConfiguration",
}));

export type UpdateMediaInsightsPipelineStatusError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Updates the status of a media insights pipeline.
 */
export const updateMediaInsightsPipelineStatus: API.OperationMethod<
  UpdateMediaInsightsPipelineStatusRequest,
  UpdateMediaInsightsPipelineStatusResponse,
  UpdateMediaInsightsPipelineStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(132, __c16, 4) as any as S.Schema<UpdateMediaInsightsPipelineStatusRequest>,
  output: __S(89, __c11, 1) as any as S.Schema<UpdateMediaInsightsPipelineStatusResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateMediaInsightsPipelineStatus",
}));

export type UpdateMediaPipelineKinesisVideoStreamPoolError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Updates an Amazon Kinesis Video Stream pool in a media pipeline.
 */
export const updateMediaPipelineKinesisVideoStreamPool: API.OperationMethod<
  UpdateMediaPipelineKinesisVideoStreamPoolRequest,
  UpdateMediaPipelineKinesisVideoStreamPoolResponse,
  UpdateMediaPipelineKinesisVideoStreamPoolError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(134, __c16, 6) as any as S.Schema<UpdateMediaPipelineKinesisVideoStreamPoolRequest>,
  output: __S(80, __c10, 0) as any as S.Schema<UpdateMediaPipelineKinesisVideoStreamPoolResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateMediaPipelineKinesisVideoStreamPool",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.Array(SensitiveString);
    case 2:
      return S.suspend(() =>
        S.Struct({
          AttendeeIds: S.optional(__S(0, __c0, 0)),
          ExternalUserIds: S.optional(__S(1, __c0, 1)),
        }),
      ).annotate({ identifier: "SelectedVideoStreams" });
    case 3:
      return S.suspend(() =>
        S.Struct({ SelectedVideoStreams: S.optional(__S(2, __c0, 2)) }),
      ).annotate({ identifier: "SourceConfiguration" });
    case 4:
      return S.suspend(() => S.Struct({ MuxType: S.String })).annotate({
        identifier: "AudioArtifactsConfiguration",
      });
    case 5:
      return S.suspend(() => S.Struct({ State: S.String, MuxType: S.optional(S.String) })).annotate(
        {
          identifier: "VideoArtifactsConfiguration",
        },
      );
    case 6:
      return S.suspend(() => S.Struct({ PresenterPosition: S.optional(S.String) })).annotate({
        identifier: "PresenterOnlyConfiguration",
      });
    case 7:
      return S.suspend(() => S.Struct({ ActiveSpeakerPosition: S.optional(S.String) })).annotate({
        identifier: "ActiveSpeakerOnlyConfiguration",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          TileOrder: S.optional(S.String),
          TilePosition: S.optional(S.String),
          TileCount: S.optional(S.Number),
          TileAspectRatio: S.optional(S.String),
        }),
      ).annotate({
        identifier: "HorizontalLayoutConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          CornerRadius: S.optional(S.Number),
          BorderColor: S.optional(S.String),
          HighlightColor: S.optional(S.String),
          BorderThickness: S.optional(S.Number),
        }),
      ).annotate({ identifier: "VideoAttribute" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ContentShareLayout: S.String,
          PresenterOnlyConfiguration: S.optional(__S(6, __c0, 6)),
          ActiveSpeakerOnlyConfiguration: S.optional(__S(7, __c0, 7)),
          HorizontalLayoutConfiguration: S.optional(__S(8, __c1, 0)),
          VerticalLayoutConfiguration: S.optional(__S(8, __c1, 0)),
          VideoAttribute: S.optional(__S(9, __c1, 1)),
          CanvasOrientation: S.optional(S.String),
        }),
      ).annotate({ identifier: "GridViewConfiguration" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Layout: S.optional(S.String),
          Resolution: S.optional(S.String),
          GridViewConfiguration: __S(10, __c1, 2),
        }),
      ).annotate({
        identifier: "CompositedVideoArtifactsConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Audio: __S(4, __c0, 4),
          Video: __S(5, __c0, 5),
          Content: __S(5, __c0, 5),
          CompositedVideo: S.optional(__S(11, __c1, 3)),
        }),
      ).annotate({ identifier: "ArtifactsConfiguration" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          SourceConfiguration: S.optional(__S(3, __c0, 3)),
          ArtifactsConfiguration: S.optional(__S(12, __c1, 4)),
        }),
      ).annotate({
        identifier: "ChimeSdkMeetingConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ AwsKmsKeyId: S.String, AwsKmsEncryptionContext: S.optional(S.String) }),
      ).annotate({
        identifier: "SseAwsKeyManagementParams",
      });
    case 7:
      return S.suspend(() => S.Struct({ Key: S.String, Value: S.String })).annotate({
        identifier: "Tag",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(15, __c1, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          SourceType: S.String,
          SourceArn: SensitiveString,
          SinkType: S.String,
          SinkArn: SensitiveString,
          ClientRequestToken: S.optional(SensitiveString).pipe(T.IdempotencyToken()),
          ChimeSdkMeetingConfiguration: S.optional(__S(13, __c1, 5)),
          SseAwsKeyManagementParams: S.optional(__S(14, __c1, 6)),
          SinkIamRoleArn: S.optional(SensitiveString),
          Tags: S.optional(__S(16, __c2, 0)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/sdk-media-capture-pipelines" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateMediaCapturePipelineRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          MediaPipelineId: S.optional(S.String),
          MediaPipelineArn: S.optional(S.String),
          SourceType: S.optional(S.String),
          SourceArn: S.optional(SensitiveString),
          Status: S.optional(S.String),
          SinkType: S.optional(S.String),
          SinkArn: S.optional(SensitiveString),
          CreatedTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          UpdatedTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          ChimeSdkMeetingConfiguration: S.optional(__S(13, __c1, 5)),
          SseAwsKeyManagementParams: S.optional(__S(14, __c1, 6)),
          SinkIamRoleArn: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "MediaCapturePipeline" });
    case 3:
      return S.suspend(() =>
        S.Struct({ MediaCapturePipeline: S.optional(__S(18, __c2, 2)) }),
      ).annotate({
        identifier: "CreateMediaCapturePipelineResponse",
      });
    case 4:
      return S.suspend(() => S.Struct({ State: S.String })).annotate({
        identifier: "AudioConcatenationConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Audio: __S(20, __c2, 4),
          Video: __S(20, __c2, 4),
          Content: __S(20, __c2, 4),
          DataChannel: __S(20, __c2, 4),
          TranscriptionMessages: __S(20, __c2, 4),
          MeetingEvents: __S(20, __c2, 4),
          CompositedVideo: __S(20, __c2, 4),
        }),
      ).annotate({
        identifier: "ArtifactsConcatenationConfiguration",
      });
    case 6:
      return S.suspend(() => S.Struct({ ArtifactsConfiguration: __S(21, __c2, 5) })).annotate({
        identifier: "ChimeSdkMeetingConcatenationConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          MediaPipelineArn: SensitiveString,
          ChimeSdkMeetingConfiguration: __S(22, __c2, 6),
        }),
      ).annotate({
        identifier: "MediaCapturePipelineSourceConfiguration",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Type: S.String,
          MediaCapturePipelineSourceConfiguration: __S(23, __c2, 7),
        }),
      ).annotate({ identifier: "ConcatenationSource" });
    case 1:
      return S.Array(__S(24, __c3, 0));
    case 2:
      return S.suspend(() => S.Struct({ Destination: SensitiveString })).annotate({
        identifier: "S3BucketSinkConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Type: S.String,
          S3BucketSinkConfiguration: __S(26, __c3, 2),
        }),
      ).annotate({ identifier: "ConcatenationSink" });
    case 4:
      return S.Array(__S(27, __c3, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          Sources: __S(25, __c3, 1),
          Sinks: __S(28, __c3, 4),
          ClientRequestToken: S.optional(SensitiveString).pipe(T.IdempotencyToken()),
          Tags: S.optional(__S(16, __c2, 0)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/sdk-media-concatenation-pipelines" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateMediaConcatenationPipelineRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          MediaPipelineId: S.optional(S.String),
          MediaPipelineArn: S.optional(S.String),
          Sources: S.optional(__S(25, __c3, 1)),
          Sinks: S.optional(__S(28, __c3, 4)),
          Status: S.optional(S.String),
          CreatedTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          UpdatedTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "MediaConcatenationPipeline",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ MediaConcatenationPipeline: S.optional(__S(30, __c3, 6)) }),
      ).annotate({
        identifier: "CreateMediaConcatenationPipelineResponse",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ChannelId: S.Number, ParticipantRole: S.optional(S.String) }),
      ).annotate({ identifier: "ChannelDefinition" });
    case 1:
      return S.Array(__S(32, __c4, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          NumberOfChannels: S.Number,
          ChannelDefinitions: S.optional(__S(33, __c4, 1)),
        }),
      ).annotate({ identifier: "StreamChannelDefinition" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          StreamArn: S.String,
          FragmentNumber: S.optional(S.String),
          StreamChannelDefinition: __S(34, __c4, 2),
        }),
      ).annotate({ identifier: "StreamConfiguration" });
    case 4:
      return S.Array(__S(35, __c4, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({ Streams: __S(36, __c4, 4), MediaEncoding: S.String, MediaSampleRate: S.Number }),
      ).annotate({
        identifier: "KinesisVideoStreamSourceRuntimeConfiguration",
      });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 7:
      return S.suspend(() => S.Struct({ StreamArn: S.optional(S.String) })).annotate({
        identifier: "RecordingStreamConfiguration",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(39, __c4, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          StartTimestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          EndTimestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "TimestampRange" });
    case 2:
      return S.suspend(() =>
        S.Struct({ FragmentSelectorType: S.String, TimestampRange: __S(41, __c5, 1) }),
      ).annotate({ identifier: "FragmentSelector" });
    case 3:
      return S.suspend(() =>
        S.Struct({ Streams: __S(40, __c5, 0), FragmentSelector: __S(42, __c5, 2) }),
      ).annotate({
        identifier: "KinesisVideoStreamRecordingSourceRuntimeConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Destination: SensitiveString, RecordingFileFormat: S.String }),
      ).annotate({
        identifier: "S3RecordingSinkRuntimeConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          MediaInsightsPipelineConfigurationArn: SensitiveString,
          KinesisVideoStreamSourceRuntimeConfiguration: S.optional(__S(37, __c4, 5)),
          MediaInsightsRuntimeMetadata: S.optional(__S(38, __c4, 6)),
          KinesisVideoStreamRecordingSourceRuntimeConfiguration: S.optional(__S(43, __c5, 3)),
          S3RecordingSinkRuntimeConfiguration: S.optional(__S(44, __c5, 4)),
          Tags: S.optional(__S(16, __c2, 0)),
          ClientRequestToken: S.optional(SensitiveString).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/media-insights-pipelines" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateMediaInsightsPipelineRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(S.String),
          Status: S.optional(S.String),
        }),
      ).annotate({
        identifier: "MediaInsightsPipelineElementStatus",
      });
    case 7:
      return S.Array(__S(46, __c5, 6));
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          MediaPipelineId: S.optional(S.String),
          MediaPipelineArn: S.optional(SensitiveString),
          MediaInsightsPipelineConfigurationArn: S.optional(SensitiveString),
          Status: S.optional(S.String),
          KinesisVideoStreamSourceRuntimeConfiguration: S.optional(__S(37, __c4, 5)),
          MediaInsightsRuntimeMetadata: S.optional(__S(38, __c4, 6)),
          KinesisVideoStreamRecordingSourceRuntimeConfiguration: S.optional(__S(43, __c5, 3)),
          S3RecordingSinkRuntimeConfiguration: S.optional(__S(44, __c5, 4)),
          CreatedTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          ElementStatuses: S.optional(__S(47, __c5, 7)),
        }),
      ).annotate({ identifier: "MediaInsightsPipeline" });
    case 1:
      return S.suspend(() => S.Struct({ MediaInsightsPipeline: __S(48, __c6, 0) })).annotate({
        identifier: "CreateMediaInsightsPipelineResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          RuleName: S.String,
          Keywords: __S(0, __c0, 0),
          Negate: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "KeywordMatchConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ RuleName: S.String, SentimentType: S.String, TimePeriod: S.Number }),
      ).annotate({ identifier: "SentimentConfiguration" });
    case 4:
      return S.suspend(() => S.Struct({ RuleName: S.String })).annotate({
        identifier: "IssueDetectionConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Type: S.String,
          KeywordMatchConfiguration: S.optional(__S(50, __c6, 2)),
          SentimentConfiguration: S.optional(__S(51, __c6, 3)),
          IssueDetectionConfiguration: S.optional(__S(52, __c6, 4)),
        }),
      ).annotate({ identifier: "RealTimeAlertRule" });
    case 6:
      return S.Array(__S(53, __c6, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({ Disabled: S.optional(S.Boolean), Rules: S.optional(__S(54, __c6, 6)) }),
      ).annotate({
        identifier: "RealTimeAlertConfiguration",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          OutputLocation: S.String,
          DataAccessRoleArn: S.String,
          ContentRedactionOutput: S.optional(S.String),
          OutputEncryptionKMSKeyId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "PostCallAnalyticsSettings",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          LanguageCode: S.String,
          VocabularyName: S.optional(S.String),
          VocabularyFilterName: S.optional(S.String),
          VocabularyFilterMethod: S.optional(S.String),
          LanguageModelName: S.optional(S.String),
          EnablePartialResultsStabilization: S.optional(S.Boolean),
          PartialResultsStability: S.optional(S.String),
          ContentIdentificationType: S.optional(S.String),
          ContentRedactionType: S.optional(S.String),
          PiiEntityTypes: S.optional(S.String),
          FilterPartialResults: S.optional(S.Boolean),
          PostCallAnalyticsSettings: S.optional(__S(56, __c7, 0)),
          CallAnalyticsStreamCategories: S.optional(__S(0, __c0, 0)),
        }),
      ).annotate({
        identifier: "AmazonTranscribeCallAnalyticsProcessorConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          LanguageCode: S.optional(S.String),
          VocabularyName: S.optional(S.String),
          VocabularyFilterName: S.optional(S.String),
          VocabularyFilterMethod: S.optional(S.String),
          ShowSpeakerLabel: S.optional(S.Boolean),
          EnablePartialResultsStabilization: S.optional(S.Boolean),
          PartialResultsStability: S.optional(S.String),
          ContentIdentificationType: S.optional(S.String),
          ContentRedactionType: S.optional(S.String),
          PiiEntityTypes: S.optional(S.String),
          LanguageModelName: S.optional(S.String),
          FilterPartialResults: S.optional(S.Boolean),
          IdentifyLanguage: S.optional(S.Boolean),
          IdentifyMultipleLanguages: S.optional(S.Boolean),
          LanguageOptions: S.optional(S.String),
          PreferredLanguage: S.optional(S.String),
          VocabularyNames: S.optional(S.String),
          VocabularyFilterNames: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AmazonTranscribeProcessorConfiguration",
      });
    case 3:
      return S.suspend(() => S.Struct({ InsightsTarget: S.optional(SensitiveString) })).annotate({
        identifier: "KinesisDataStreamSinkConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Destination: S.optional(SensitiveString),
          RecordingFileFormat: S.optional(S.String),
        }),
      ).annotate({
        identifier: "S3RecordingSinkConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          SpeakerSearchStatus: S.optional(S.String),
          VoiceToneAnalysisStatus: S.optional(S.String),
        }),
      ).annotate({
        identifier: "VoiceAnalyticsProcessorConfiguration",
      });
    case 6:
      return S.suspend(() => S.Struct({ Disabled: S.optional(S.Boolean) })).annotate({
        identifier: "VoiceEnhancementSinkConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Type: S.String,
          AmazonTranscribeCallAnalyticsProcessorConfiguration: S.optional(__S(57, __c7, 1)),
          AmazonTranscribeProcessorConfiguration: S.optional(__S(58, __c7, 2)),
          KinesisDataStreamSinkConfiguration: S.optional(__S(59, __c7, 3)),
          S3RecordingSinkConfiguration: S.optional(__S(60, __c7, 4)),
          VoiceAnalyticsProcessorConfiguration: S.optional(__S(61, __c7, 5)),
          LambdaFunctionSinkConfiguration: S.optional(__S(59, __c7, 3)),
          SqsQueueSinkConfiguration: S.optional(__S(59, __c7, 3)),
          SnsTopicSinkConfiguration: S.optional(__S(59, __c7, 3)),
          VoiceEnhancementSinkConfiguration: S.optional(__S(62, __c7, 6)),
        }),
      ).annotate({
        identifier: "MediaInsightsPipelineConfigurationElement",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(63, __c7, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          MediaInsightsPipelineConfigurationName: S.String,
          ResourceAccessRoleArn: SensitiveString,
          RealTimeAlertConfiguration: S.optional(__S(55, __c6, 7)),
          Elements: __S(64, __c8, 0),
          Tags: S.optional(__S(16, __c2, 0)),
          ClientRequestToken: S.optional(SensitiveString).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/media-insights-pipeline-configurations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateMediaInsightsPipelineConfigurationRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          MediaInsightsPipelineConfigurationName: S.optional(S.String),
          MediaInsightsPipelineConfigurationArn: S.optional(SensitiveString),
          ResourceAccessRoleArn: S.optional(SensitiveString),
          RealTimeAlertConfiguration: S.optional(__S(55, __c6, 7)),
          Elements: S.optional(__S(64, __c8, 0)),
          MediaInsightsPipelineConfigurationId: S.optional(S.String),
          CreatedTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          UpdatedTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "MediaInsightsPipelineConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          MediaInsightsPipelineConfiguration: S.optional(__S(66, __c8, 2)),
        }),
      ).annotate({
        identifier: "CreateMediaInsightsPipelineConfigurationResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Arn: SensitiveString,
          MuxType: S.String,
          CompositedVideo: S.optional(__S(11, __c1, 3)),
          SourceConfiguration: S.optional(__S(3, __c0, 3)),
        }),
      ).annotate({
        identifier: "ChimeSdkMeetingLiveConnectorConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          SourceType: S.String,
          ChimeSdkMeetingLiveConnectorConfiguration: __S(68, __c8, 4),
        }),
      ).annotate({
        identifier: "LiveConnectorSourceConfiguration",
      });
    case 6:
      return S.Array(__S(69, __c8, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          Url: SensitiveString,
          AudioChannels: S.optional(S.String),
          AudioSampleRate: S.optional(S.String),
        }),
      ).annotate({
        identifier: "LiveConnectorRTMPConfiguration",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          SinkType: S.String,
          RTMPConfiguration: __S(71, __c8, 7),
        }),
      ).annotate({
        identifier: "LiveConnectorSinkConfiguration",
      });
    case 1:
      return S.Array(__S(72, __c9, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          Sources: __S(70, __c8, 6),
          Sinks: __S(73, __c9, 1),
          ClientRequestToken: S.optional(SensitiveString).pipe(T.IdempotencyToken()),
          Tags: S.optional(__S(16, __c2, 0)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/sdk-media-live-connector-pipelines" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateMediaLiveConnectorPipelineRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Sources: S.optional(__S(70, __c8, 6)),
          Sinks: S.optional(__S(73, __c9, 1)),
          MediaPipelineId: S.optional(S.String),
          MediaPipelineArn: S.optional(S.String),
          Status: S.optional(S.String),
          CreatedTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          UpdatedTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "MediaLiveConnectorPipeline",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ MediaLiveConnectorPipeline: S.optional(__S(75, __c9, 3)) }),
      ).annotate({
        identifier: "CreateMediaLiveConnectorPipelineResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Region: S.String, DataRetentionInHours: S.optional(S.Number) }),
      ).annotate({
        identifier: "KinesisVideoStreamConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          StreamConfiguration: __S(77, __c9, 5),
          PoolName: S.String,
          ClientRequestToken: S.optional(SensitiveString).pipe(T.IdempotencyToken()),
          Tags: S.optional(__S(16, __c2, 0)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/media-pipeline-kinesis-video-stream-pools" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateMediaPipelineKinesisVideoStreamPoolRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          PoolArn: S.optional(SensitiveString),
          PoolName: S.optional(S.String),
          PoolId: S.optional(S.String),
          PoolStatus: S.optional(S.String),
          PoolSize: S.optional(S.Number),
          StreamConfiguration: S.optional(__S(77, __c9, 5)),
          CreatedTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          UpdatedTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "KinesisVideoStreamPoolConfiguration",
      });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          KinesisVideoStreamPoolConfiguration: S.optional(__S(79, __c9, 7)),
        }),
      ).annotate({
        identifier: "CreateMediaPipelineKinesisVideoStreamPoolResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ SourceType: S.String, SourceArn: SensitiveString }),
      ).annotate({ identifier: "MediaStreamSource" });
    case 2:
      return S.Array(__S(81, __c10, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          SinkArn: SensitiveString,
          SinkType: S.String,
          ReservedStreamCapacity: S.Number,
          MediaStreamType: S.String,
        }),
      ).annotate({ identifier: "MediaStreamSink" });
    case 4:
      return S.Array(__S(83, __c10, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          Sources: __S(82, __c10, 2),
          Sinks: __S(84, __c10, 4),
          ClientRequestToken: S.optional(SensitiveString).pipe(T.IdempotencyToken()),
          Tags: S.optional(__S(16, __c2, 0)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/sdk-media-stream-pipelines" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateMediaStreamPipelineRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          MediaPipelineId: S.optional(S.String),
          MediaPipelineArn: S.optional(S.String),
          CreatedTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          UpdatedTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Status: S.optional(S.String),
          Sources: S.optional(__S(82, __c10, 2)),
          Sinks: S.optional(__S(84, __c10, 4)),
        }),
      ).annotate({ identifier: "MediaStreamPipeline" });
    case 7:
      return S.suspend(() =>
        S.Struct({ MediaStreamPipeline: S.optional(__S(86, __c10, 6)) }),
      ).annotate({
        identifier: "CreateMediaStreamPipelineResponse",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ MediaPipelineId: S.String.pipe(T.HttpLabel("MediaPipelineId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/sdk-media-capture-pipelines/{MediaPipelineId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteMediaCapturePipelineRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteMediaCapturePipelineResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ Identifier: S.String.pipe(T.HttpLabel("Identifier")) }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/media-insights-pipeline-configurations/{Identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteMediaInsightsPipelineConfigurationRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ MediaPipelineId: S.String.pipe(T.HttpLabel("MediaPipelineId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/sdk-media-pipelines/{MediaPipelineId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteMediaPipelineRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteMediaPipelineResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Identifier: S.String.pipe(T.HttpLabel("Identifier")) }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/media-pipeline-kinesis-video-stream-pools/{Identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteMediaPipelineKinesisVideoStreamPoolRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ MediaPipelineId: S.String.pipe(T.HttpLabel("MediaPipelineId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/sdk-media-capture-pipelines/{MediaPipelineId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetMediaCapturePipelineRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Identifier: S.String.pipe(T.HttpLabel("Identifier")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/media-insights-pipeline-configurations/{Identifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetMediaInsightsPipelineConfigurationRequest",
      });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ MediaPipelineId: S.String.pipe(T.HttpLabel("MediaPipelineId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/sdk-media-pipelines/{MediaPipelineId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetMediaPipelineRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          MediaCapturePipeline: S.optional(__S(18, __c2, 2)),
          MediaLiveConnectorPipeline: S.optional(__S(75, __c9, 3)),
          MediaConcatenationPipeline: S.optional(__S(30, __c3, 6)),
          MediaInsightsPipeline: S.optional(__S(48, __c6, 0)),
          MediaStreamPipeline: S.optional(__S(86, __c10, 6)),
        }),
      ).annotate({ identifier: "MediaPipeline" });
    case 2:
      return S.suspend(() => S.Struct({ MediaPipeline: S.optional(__S(97, __c12, 1)) })).annotate({
        identifier: "GetMediaPipelineResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ Identifier: S.String.pipe(T.HttpLabel("Identifier")) }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/media-pipeline-kinesis-video-stream-pools/{Identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetMediaPipelineKinesisVideoStreamPoolRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Identifier: S.String.pipe(T.HttpLabel("Identifier")),
          SpeakerSearchTaskId: S.String.pipe(T.HttpLabel("SpeakerSearchTaskId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/media-insights-pipelines/{Identifier}/speaker-search-tasks/{SpeakerSearchTaskId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetSpeakerSearchTaskRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          SpeakerSearchTaskId: S.optional(S.String),
          SpeakerSearchTaskStatus: S.optional(S.String),
          CreatedTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          UpdatedTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "SpeakerSearchTask" });
    case 6:
      return S.suspend(() =>
        S.Struct({ SpeakerSearchTask: S.optional(__S(101, __c12, 5)) }),
      ).annotate({
        identifier: "GetSpeakerSearchTaskResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Identifier: S.String.pipe(T.HttpLabel("Identifier")),
          VoiceToneAnalysisTaskId: S.String.pipe(T.HttpLabel("VoiceToneAnalysisTaskId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/media-insights-pipelines/{Identifier}/voice-tone-analysis-tasks/{VoiceToneAnalysisTaskId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetVoiceToneAnalysisTaskRequest",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          VoiceToneAnalysisTaskId: S.optional(S.String),
          VoiceToneAnalysisTaskStatus: S.optional(S.String),
          CreatedTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          UpdatedTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "VoiceToneAnalysisTask" });
    case 1:
      return S.suspend(() =>
        S.Struct({ VoiceToneAnalysisTask: S.optional(__S(104, __c13, 0)) }),
      ).annotate({
        identifier: "GetVoiceToneAnalysisTaskResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next-token")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/sdk-media-capture-pipelines" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListMediaCapturePipelinesRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ MediaPipelineId: S.optional(S.String), MediaPipelineArn: S.optional(S.String) }),
      ).annotate({
        identifier: "MediaCapturePipelineSummary",
      });
    case 4:
      return S.Array(__S(107, __c13, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          MediaCapturePipelines: S.optional(__S(108, __c13, 4)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListMediaCapturePipelinesResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next-token")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/media-insights-pipeline-configurations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListMediaInsightsPipelineConfigurationsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          MediaInsightsPipelineConfigurationName: S.optional(S.String),
          MediaInsightsPipelineConfigurationId: S.optional(S.String),
          MediaInsightsPipelineConfigurationArn: S.optional(SensitiveString),
        }),
      ).annotate({
        identifier: "MediaInsightsPipelineConfigurationSummary",
      });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(111, __c13, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          MediaInsightsPipelineConfigurations: S.optional(__S(112, __c14, 0)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListMediaInsightsPipelineConfigurationsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next-token")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/media-pipeline-kinesis-video-stream-pools" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListMediaPipelineKinesisVideoStreamPoolsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          PoolName: S.optional(S.String),
          PoolId: S.optional(S.String),
          PoolArn: S.optional(SensitiveString),
        }),
      ).annotate({
        identifier: "KinesisVideoStreamPoolSummary",
      });
    case 4:
      return S.Array(__S(115, __c14, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          KinesisVideoStreamPools: S.optional(__S(116, __c14, 4)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListMediaPipelineKinesisVideoStreamPoolsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next-token")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/sdk-media-pipelines" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListMediaPipelinesRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ MediaPipelineId: S.optional(S.String), MediaPipelineArn: S.optional(S.String) }),
      ).annotate({ identifier: "MediaPipelineSummary" });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(119, __c14, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          MediaPipelines: S.optional(__S(120, __c15, 0)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListMediaPipelinesResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String.pipe(T.HttpQuery("arn")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/tags" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ Tags: S.optional(__S(16, __c2, 0)) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          StreamArn: S.String,
          ChannelId: S.Number,
          FragmentNumber: S.optional(S.String),
        }),
      ).annotate({
        identifier: "KinesisVideoStreamSourceTaskConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Identifier: S.String.pipe(T.HttpLabel("Identifier")),
          VoiceProfileDomainArn: SensitiveString,
          KinesisVideoStreamSourceTaskConfiguration: S.optional(__S(124, __c15, 4)),
          ClientRequestToken: S.optional(SensitiveString).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/media-insights-pipelines/{Identifier}/speaker-search-tasks?operation=start",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartSpeakerSearchTaskRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Identifier: S.String.pipe(T.HttpLabel("Identifier")),
          LanguageCode: S.String,
          KinesisVideoStreamSourceTaskConfiguration: S.optional(__S(124, __c15, 4)),
          ClientRequestToken: S.optional(SensitiveString).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/media-insights-pipelines/{Identifier}/voice-tone-analysis-tasks?operation=start",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartVoiceToneAnalysisTaskRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Identifier: S.String.pipe(T.HttpLabel("Identifier")),
          SpeakerSearchTaskId: S.String.pipe(T.HttpLabel("SpeakerSearchTaskId")),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/media-insights-pipelines/{Identifier}/speaker-search-tasks/{SpeakerSearchTaskId}?operation=stop",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StopSpeakerSearchTaskRequest",
      });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Identifier: S.String.pipe(T.HttpLabel("Identifier")),
          VoiceToneAnalysisTaskId: S.String.pipe(T.HttpLabel("VoiceToneAnalysisTaskId")),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/media-insights-pipelines/{Identifier}/voice-tone-analysis-tasks/{VoiceToneAnalysisTaskId}?operation=stop",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StopVoiceToneAnalysisTaskRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String, Tags: __S(16, __c2, 0) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/tags?operation=tag-resource" }),
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
        S.Struct({ ResourceARN: S.String, TagKeys: __S(0, __c0, 0) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/tags?operation=untag-resource" }),
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
          Identifier: S.String.pipe(T.HttpLabel("Identifier")),
          ResourceAccessRoleArn: SensitiveString,
          RealTimeAlertConfiguration: S.optional(__S(55, __c6, 7)),
          Elements: __S(64, __c8, 0),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/media-insights-pipeline-configurations/{Identifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateMediaInsightsPipelineConfigurationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Identifier: S.String.pipe(T.HttpLabel("Identifier")),
          UpdateStatus: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/media-insights-pipeline-status/{Identifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateMediaInsightsPipelineStatusRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ DataRetentionInHours: S.optional(S.Number) })).annotate({
        identifier: "KinesisVideoStreamConfigurationUpdate",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Identifier: S.String.pipe(T.HttpLabel("Identifier")),
          StreamConfiguration: S.optional(__S(133, __c16, 5)),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/media-pipeline-kinesis-video-stream-pools/{Identifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateMediaPipelineKinesisVideoStreamPoolRequest",
      });
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
