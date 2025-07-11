import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface EtsCustomerService {
  cancelJob(
    input: CancelJobRequest,
  ): Effect.Effect<
    CancelJobResponse,
    | AccessDeniedException
    | IncompatibleVersionException
    | InternalServiceException
    | ResourceInUseException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  createJob(
    input: CreateJobRequest,
  ): Effect.Effect<
    CreateJobResponse,
    | AccessDeniedException
    | IncompatibleVersionException
    | InternalServiceException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  createPipeline(
    input: CreatePipelineRequest,
  ): Effect.Effect<
    CreatePipelineResponse,
    | AccessDeniedException
    | IncompatibleVersionException
    | InternalServiceException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  createPreset(
    input: CreatePresetRequest,
  ): Effect.Effect<
    CreatePresetResponse,
    | AccessDeniedException
    | IncompatibleVersionException
    | InternalServiceException
    | LimitExceededException
    | ValidationException
    | CommonAwsError
  >;
  deletePipeline(
    input: DeletePipelineRequest,
  ): Effect.Effect<
    DeletePipelineResponse,
    | AccessDeniedException
    | IncompatibleVersionException
    | InternalServiceException
    | ResourceInUseException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deletePreset(
    input: DeletePresetRequest,
  ): Effect.Effect<
    DeletePresetResponse,
    | AccessDeniedException
    | IncompatibleVersionException
    | InternalServiceException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listJobsByPipeline(
    input: ListJobsByPipelineRequest,
  ): Effect.Effect<
    ListJobsByPipelineResponse,
    | AccessDeniedException
    | IncompatibleVersionException
    | InternalServiceException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listJobsByStatus(
    input: ListJobsByStatusRequest,
  ): Effect.Effect<
    ListJobsByStatusResponse,
    | AccessDeniedException
    | IncompatibleVersionException
    | InternalServiceException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listPipelines(
    input: ListPipelinesRequest,
  ): Effect.Effect<
    ListPipelinesResponse,
    | AccessDeniedException
    | IncompatibleVersionException
    | InternalServiceException
    | ValidationException
    | CommonAwsError
  >;
  listPresets(
    input: ListPresetsRequest,
  ): Effect.Effect<
    ListPresetsResponse,
    | AccessDeniedException
    | IncompatibleVersionException
    | InternalServiceException
    | ValidationException
    | CommonAwsError
  >;
  readJob(
    input: ReadJobRequest,
  ): Effect.Effect<
    ReadJobResponse,
    | AccessDeniedException
    | IncompatibleVersionException
    | InternalServiceException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  readPipeline(
    input: ReadPipelineRequest,
  ): Effect.Effect<
    ReadPipelineResponse,
    | AccessDeniedException
    | IncompatibleVersionException
    | InternalServiceException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  readPreset(
    input: ReadPresetRequest,
  ): Effect.Effect<
    ReadPresetResponse,
    | AccessDeniedException
    | IncompatibleVersionException
    | InternalServiceException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  testRole(
    input: TestRoleRequest,
  ): Effect.Effect<
    TestRoleResponse,
    | AccessDeniedException
    | IncompatibleVersionException
    | InternalServiceException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updatePipeline(
    input: UpdatePipelineRequest,
  ): Effect.Effect<
    UpdatePipelineResponse,
    | AccessDeniedException
    | IncompatibleVersionException
    | InternalServiceException
    | ResourceInUseException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updatePipelineNotifications(
    input: UpdatePipelineNotificationsRequest,
  ): Effect.Effect<
    UpdatePipelineNotificationsResponse,
    | AccessDeniedException
    | IncompatibleVersionException
    | InternalServiceException
    | ResourceInUseException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updatePipelineStatus(
    input: UpdatePipelineStatusRequest,
  ): Effect.Effect<
    UpdatePipelineStatusResponse,
    | AccessDeniedException
    | IncompatibleVersionException
    | InternalServiceException
    | ResourceInUseException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
}

export type ElasticTranscoder = EtsCustomerService;

export type AccessControl = string;

export type AccessControls = Array<string>;
export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export interface Artwork {
  InputKey?: string;
  MaxWidth?: string;
  MaxHeight?: string;
  SizingPolicy?: string;
  PaddingPolicy?: string;
  AlbumArtFormat?: string;
  Encryption?: Encryption;
}
export type Artworks = Array<Artwork>;
export type Ascending = string;

export type AspectRatio = string;

export type AudioBitDepth = string;

export type AudioBitOrder = string;

export type AudioBitRate = string;

export type AudioChannels = string;

export type AudioCodec = string;

export interface AudioCodecOptions {
  Profile?: string;
  BitDepth?: string;
  BitOrder?: string;
  Signed?: string;
}
export type AudioCodecProfile = string;

export type AudioPackingMode = string;

export interface AudioParameters {
  Codec?: string;
  SampleRate?: string;
  BitRate?: string;
  Channels?: string;
  AudioPackingMode?: string;
  CodecOptions?: AudioCodecOptions;
}
export type AudioSampleRate = string;

export type AudioSigned = string;

export type Base64EncodedString = string;

export type BucketName = string;

export interface CancelJobRequest {
  Id: string;
}
export interface CancelJobResponse {}
export interface CaptionFormat {
  Format?: string;
  Pattern?: string;
  Encryption?: Encryption;
}
export type CaptionFormatFormat = string;

export type CaptionFormatPattern = string;

export type CaptionFormats = Array<CaptionFormat>;
export type CaptionMergePolicy = string;

export interface Captions {
  MergePolicy?: string;
  CaptionSources?: Array<CaptionSource>;
  CaptionFormats?: Array<CaptionFormat>;
}
export interface CaptionSource {
  Key?: string;
  Language?: string;
  TimeOffset?: string;
  Label?: string;
  Encryption?: Encryption;
}
export type CaptionSources = Array<CaptionSource>;
export interface Clip {
  TimeSpan?: TimeSpan;
}
export type CodecOption = string;

export type CodecOptions = Record<string, string>;
export type Composition = Array<Clip>;
export interface CreateJobOutput {
  Key?: string;
  ThumbnailPattern?: string;
  ThumbnailEncryption?: Encryption;
  Rotate?: string;
  PresetId?: string;
  SegmentDuration?: string;
  Watermarks?: Array<JobWatermark>;
  AlbumArt?: JobAlbumArt;
  Composition?: Array<Clip>;
  Captions?: Captions;
  Encryption?: Encryption;
}
export type CreateJobOutputs = Array<CreateJobOutput>;
export interface CreateJobPlaylist {
  Name?: string;
  Format?: string;
  OutputKeys?: Array<string>;
  HlsContentProtection?: HlsContentProtection;
  PlayReadyDrm?: PlayReadyDrm;
}
export type CreateJobPlaylists = Array<CreateJobPlaylist>;
export interface CreateJobRequest {
  PipelineId: string;
  Input?: JobInput;
  Inputs?: Array<JobInput>;
  Output?: CreateJobOutput;
  Outputs?: Array<CreateJobOutput>;
  OutputKeyPrefix?: string;
  Playlists?: Array<CreateJobPlaylist>;
  UserMetadata?: Record<string, string>;
}
export interface CreateJobResponse {
  Job?: Job;
}
export interface CreatePipelineRequest {
  Name: string;
  InputBucket: string;
  OutputBucket?: string;
  Role: string;
  AwsKmsKeyArn?: string;
  Notifications?: Notifications;
  ContentConfig?: PipelineOutputConfig;
  ThumbnailConfig?: PipelineOutputConfig;
}
export interface CreatePipelineResponse {
  Pipeline?: Pipeline;
  Warnings?: Array<Warning>;
}
export interface CreatePresetRequest {
  Name: string;
  Description?: string;
  Container: string;
  Video?: VideoParameters;
  Audio?: AudioParameters;
  Thumbnails?: Thumbnails;
}
export interface CreatePresetResponse {
  Preset?: Preset;
  Warning?: string;
}
export interface DeletePipelineRequest {
  Id: string;
}
export interface DeletePipelineResponse {}
export interface DeletePresetRequest {
  Id: string;
}
export interface DeletePresetResponse {}
export type Description = string;

export interface DetectedProperties {
  Width?: number;
  Height?: number;
  FrameRate?: string;
  FileSize?: number;
  DurationMillis?: number;
}
export type Digits = string;

export type DigitsOrAuto = string;

export interface Encryption {
  Mode?: string;
  Key?: string;
  KeyMd5?: string;
  InitializationVector?: string;
}
export type EncryptionMode = string;

export type ExceptionMessage = string;

export type ExceptionMessages = Array<string>;
export type Filename = string;

export type FixedGOP = string;

export type FloatString = string;

export type FrameRate = string;

export type Grantee = string;

export type GranteeType = string;

export interface HlsContentProtection {
  Method?: string;
  Key?: string;
  KeyMd5?: string;
  InitializationVector?: string;
  LicenseAcquisitionUrl?: string;
  KeyStoragePolicy?: string;
}
export type HlsContentProtectionMethod = string;

export type HorizontalAlign = string;

export type Id = string;

export declare class IncompatibleVersionException extends EffectData.TaggedError(
  "IncompatibleVersionException",
)<{
  readonly message: string;
}> {}
export interface InputCaptions {
  MergePolicy?: string;
  CaptionSources?: Array<CaptionSource>;
}
export type Interlaced = string;

export declare class InternalServiceException extends EffectData.TaggedError(
  "InternalServiceException",
)<{
  readonly message: string;
}> {}
export interface Job {
  Id?: string;
  Arn?: string;
  PipelineId?: string;
  Input?: JobInput;
  Inputs?: Array<JobInput>;
  Output?: JobOutput;
  Outputs?: Array<JobOutput>;
  OutputKeyPrefix?: string;
  Playlists?: Array<Playlist>;
  Status?: string;
  UserMetadata?: Record<string, string>;
  Timing?: Timing;
}
export interface JobAlbumArt {
  MergePolicy?: string;
  Artwork?: Array<Artwork>;
}
export type JobContainer = string;

export interface JobInput {
  Key?: string;
  FrameRate?: string;
  Resolution?: string;
  AspectRatio?: string;
  Interlaced?: string;
  Container?: string;
  Encryption?: Encryption;
  TimeSpan?: TimeSpan;
  InputCaptions?: InputCaptions;
  DetectedProperties?: DetectedProperties;
}
export type JobInputs = Array<JobInput>;
export interface JobOutput {
  Id?: string;
  Key?: string;
  ThumbnailPattern?: string;
  ThumbnailEncryption?: Encryption;
  Rotate?: string;
  PresetId?: string;
  SegmentDuration?: string;
  Status?: string;
  StatusDetail?: string;
  Duration?: number;
  Width?: number;
  Height?: number;
  FrameRate?: string;
  FileSize?: number;
  DurationMillis?: number;
  Watermarks?: Array<JobWatermark>;
  AlbumArt?: JobAlbumArt;
  Composition?: Array<Clip>;
  Captions?: Captions;
  Encryption?: Encryption;
  AppliedColorSpaceConversion?: string;
}
export type JobOutputs = Array<JobOutput>;
export type Jobs = Array<Job>;
export type JobStatus = string;

export interface JobWatermark {
  PresetWatermarkId?: string;
  InputKey?: string;
  Encryption?: Encryption;
}
export type JobWatermarks = Array<JobWatermark>;
export type JpgOrPng = string;

export type Key = string;

export type KeyArn = string;

export type KeyframesMaxDist = string;

export type KeyIdGuid = string;

export type KeyStoragePolicy = string;

export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly message: string;
}> {}
export interface ListJobsByPipelineRequest {
  PipelineId: string;
  Ascending?: string;
  PageToken?: string;
}
export interface ListJobsByPipelineResponse {
  Jobs?: Array<Job>;
  NextPageToken?: string;
}
export interface ListJobsByStatusRequest {
  Status: string;
  Ascending?: string;
  PageToken?: string;
}
export interface ListJobsByStatusResponse {
  Jobs?: Array<Job>;
  NextPageToken?: string;
}
export interface ListPipelinesRequest {
  Ascending?: string;
  PageToken?: string;
}
export interface ListPipelinesResponse {
  Pipelines?: Array<Pipeline>;
  NextPageToken?: string;
}
export interface ListPresetsRequest {
  Ascending?: string;
  PageToken?: string;
}
export interface ListPresetsResponse {
  Presets?: Array<Preset>;
  NextPageToken?: string;
}
export type LongKey = string;

export type MaxFrameRate = string;

export type MergePolicy = string;

export type Name = string;

export type NonEmptyBase64EncodedString = string;

export interface Notifications {
  Progressing?: string;
  Completed?: string;
  Warning?: string;
  Error?: string;
}
export type NullableInteger = number;

export type NullableLong = number;

export type OneTo512String = string;

export type Opacity = string;

export type OutputKeys = Array<string>;
export type PaddingPolicy = string;

export interface Permission {
  GranteeType?: string;
  Grantee?: string;
  Access?: Array<string>;
}
export type Permissions = Array<Permission>;
export interface Pipeline {
  Id?: string;
  Arn?: string;
  Name?: string;
  Status?: string;
  InputBucket?: string;
  OutputBucket?: string;
  Role?: string;
  AwsKmsKeyArn?: string;
  Notifications?: Notifications;
  ContentConfig?: PipelineOutputConfig;
  ThumbnailConfig?: PipelineOutputConfig;
}
export interface PipelineOutputConfig {
  Bucket?: string;
  StorageClass?: string;
  Permissions?: Array<Permission>;
}
export type Pipelines = Array<Pipeline>;
export type PipelineStatus = string;

export type PixelsOrPercent = string;

export interface Playlist {
  Name?: string;
  Format?: string;
  OutputKeys?: Array<string>;
  HlsContentProtection?: HlsContentProtection;
  PlayReadyDrm?: PlayReadyDrm;
  Status?: string;
  StatusDetail?: string;
}
export type PlaylistFormat = string;

export type Playlists = Array<Playlist>;
export interface PlayReadyDrm {
  Format?: string;
  Key?: string;
  KeyMd5?: string;
  KeyId?: string;
  InitializationVector?: string;
  LicenseAcquisitionUrl?: string;
}
export type PlayReadyDrmFormatString = string;

export interface Preset {
  Id?: string;
  Arn?: string;
  Name?: string;
  Description?: string;
  Container?: string;
  Audio?: AudioParameters;
  Video?: VideoParameters;
  Thumbnails?: Thumbnails;
  Type?: string;
}
export type PresetContainer = string;

export type Presets = Array<Preset>;
export type PresetType = string;

export interface PresetWatermark {
  Id?: string;
  MaxWidth?: string;
  MaxHeight?: string;
  SizingPolicy?: string;
  HorizontalAlign?: string;
  HorizontalOffset?: string;
  VerticalAlign?: string;
  VerticalOffset?: string;
  Opacity?: string;
  Target?: string;
}
export type PresetWatermarkId = string;

export type PresetWatermarks = Array<PresetWatermark>;
export interface ReadJobRequest {
  Id: string;
}
export interface ReadJobResponse {
  Job?: Job;
}
export interface ReadPipelineRequest {
  Id: string;
}
export interface ReadPipelineResponse {
  Pipeline?: Pipeline;
  Warnings?: Array<Warning>;
}
export interface ReadPresetRequest {
  Id: string;
}
export interface ReadPresetResponse {
  Preset?: Preset;
}
export type Resolution = string;

export declare class ResourceInUseException extends EffectData.TaggedError(
  "ResourceInUseException",
)<{
  readonly message: string;
}> {}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
}> {}
export type Role = string;

export type Rotate = string;

export type SizingPolicy = string;

export type SnsTopic = string;

export type SnsTopics = Array<string>;
export type StorageClass = string;

export type ElasticTranscoderString = string;

export type Success = string;

export type Target = string;

export interface TestRoleRequest {
  Role: string;
  InputBucket: string;
  OutputBucket: string;
  Topics: Array<string>;
}
export interface TestRoleResponse {
  Success?: string;
  Messages?: Array<string>;
}
export type ThumbnailPattern = string;

export type ThumbnailResolution = string;

export interface Thumbnails {
  Format?: string;
  Interval?: string;
  Resolution?: string;
  AspectRatio?: string;
  MaxWidth?: string;
  MaxHeight?: string;
  SizingPolicy?: string;
  PaddingPolicy?: string;
}
export type Time = string;

export type TimeOffset = string;

export interface TimeSpan {
  StartTime?: string;
  Duration?: string;
}
export interface Timing {
  SubmitTimeMillis?: number;
  StartTimeMillis?: number;
  FinishTimeMillis?: number;
}
export interface UpdatePipelineNotificationsRequest {
  Id: string;
  Notifications: Notifications;
}
export interface UpdatePipelineNotificationsResponse {
  Pipeline?: Pipeline;
}
export interface UpdatePipelineRequest {
  Id: string;
  Name?: string;
  InputBucket?: string;
  Role?: string;
  AwsKmsKeyArn?: string;
  Notifications?: Notifications;
  ContentConfig?: PipelineOutputConfig;
  ThumbnailConfig?: PipelineOutputConfig;
}
export interface UpdatePipelineResponse {
  Pipeline?: Pipeline;
  Warnings?: Array<Warning>;
}
export interface UpdatePipelineStatusRequest {
  Id: string;
  Status: string;
}
export interface UpdatePipelineStatusResponse {
  Pipeline?: Pipeline;
}
export type UserMetadata = Record<string, string>;
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
}> {}
export type VerticalAlign = string;

export type VideoBitRate = string;

export type VideoCodec = string;

export interface VideoParameters {
  Codec?: string;
  CodecOptions?: Record<string, string>;
  KeyframesMaxDist?: string;
  FixedGOP?: string;
  BitRate?: string;
  FrameRate?: string;
  MaxFrameRate?: string;
  Resolution?: string;
  AspectRatio?: string;
  MaxWidth?: string;
  MaxHeight?: string;
  DisplayAspectRatio?: string;
  SizingPolicy?: string;
  PaddingPolicy?: string;
  Watermarks?: Array<PresetWatermark>;
}
export interface Warning {
  Code?: string;
  Message?: string;
}
export type Warnings = Array<Warning>;
export type WatermarkKey = string;

export type WatermarkSizingPolicy = string;

export type ZeroTo255String = string;

export type ZeroTo512String = string;

export declare namespace CancelJob {
  export type Input = CancelJobRequest;
  export type Output = CancelJobResponse;
  export type Error =
    | AccessDeniedException
    | IncompatibleVersionException
    | InternalServiceException
    | ResourceInUseException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateJob {
  export type Input = CreateJobRequest;
  export type Output = CreateJobResponse;
  export type Error =
    | AccessDeniedException
    | IncompatibleVersionException
    | InternalServiceException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreatePipeline {
  export type Input = CreatePipelineRequest;
  export type Output = CreatePipelineResponse;
  export type Error =
    | AccessDeniedException
    | IncompatibleVersionException
    | InternalServiceException
    | LimitExceededException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreatePreset {
  export type Input = CreatePresetRequest;
  export type Output = CreatePresetResponse;
  export type Error =
    | AccessDeniedException
    | IncompatibleVersionException
    | InternalServiceException
    | LimitExceededException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeletePipeline {
  export type Input = DeletePipelineRequest;
  export type Output = DeletePipelineResponse;
  export type Error =
    | AccessDeniedException
    | IncompatibleVersionException
    | InternalServiceException
    | ResourceInUseException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeletePreset {
  export type Input = DeletePresetRequest;
  export type Output = DeletePresetResponse;
  export type Error =
    | AccessDeniedException
    | IncompatibleVersionException
    | InternalServiceException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListJobsByPipeline {
  export type Input = ListJobsByPipelineRequest;
  export type Output = ListJobsByPipelineResponse;
  export type Error =
    | AccessDeniedException
    | IncompatibleVersionException
    | InternalServiceException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListJobsByStatus {
  export type Input = ListJobsByStatusRequest;
  export type Output = ListJobsByStatusResponse;
  export type Error =
    | AccessDeniedException
    | IncompatibleVersionException
    | InternalServiceException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPipelines {
  export type Input = ListPipelinesRequest;
  export type Output = ListPipelinesResponse;
  export type Error =
    | AccessDeniedException
    | IncompatibleVersionException
    | InternalServiceException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPresets {
  export type Input = ListPresetsRequest;
  export type Output = ListPresetsResponse;
  export type Error =
    | AccessDeniedException
    | IncompatibleVersionException
    | InternalServiceException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ReadJob {
  export type Input = ReadJobRequest;
  export type Output = ReadJobResponse;
  export type Error =
    | AccessDeniedException
    | IncompatibleVersionException
    | InternalServiceException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ReadPipeline {
  export type Input = ReadPipelineRequest;
  export type Output = ReadPipelineResponse;
  export type Error =
    | AccessDeniedException
    | IncompatibleVersionException
    | InternalServiceException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ReadPreset {
  export type Input = ReadPresetRequest;
  export type Output = ReadPresetResponse;
  export type Error =
    | AccessDeniedException
    | IncompatibleVersionException
    | InternalServiceException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TestRole {
  export type Input = TestRoleRequest;
  export type Output = TestRoleResponse;
  export type Error =
    | AccessDeniedException
    | IncompatibleVersionException
    | InternalServiceException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdatePipeline {
  export type Input = UpdatePipelineRequest;
  export type Output = UpdatePipelineResponse;
  export type Error =
    | AccessDeniedException
    | IncompatibleVersionException
    | InternalServiceException
    | ResourceInUseException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdatePipelineNotifications {
  export type Input = UpdatePipelineNotificationsRequest;
  export type Output = UpdatePipelineNotificationsResponse;
  export type Error =
    | AccessDeniedException
    | IncompatibleVersionException
    | InternalServiceException
    | ResourceInUseException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdatePipelineStatus {
  export type Input = UpdatePipelineStatusRequest;
  export type Output = UpdatePipelineStatusResponse;
  export type Error =
    | AccessDeniedException
    | IncompatibleVersionException
    | InternalServiceException
    | ResourceInUseException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}
