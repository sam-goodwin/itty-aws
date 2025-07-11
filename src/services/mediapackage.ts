import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface MediaPackage {
  configureLogs(
    input: ConfigureLogsRequest,
  ): Effect.Effect<
    ConfigureLogsResponse,
    ForbiddenException | InternalServerErrorException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | UnprocessableEntityException | CommonAwsError
  >;
  createChannel(
    input: CreateChannelRequest,
  ): Effect.Effect<
    CreateChannelResponse,
    ForbiddenException | InternalServerErrorException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | UnprocessableEntityException | CommonAwsError
  >;
  createHarvestJob(
    input: CreateHarvestJobRequest,
  ): Effect.Effect<
    CreateHarvestJobResponse,
    ForbiddenException | InternalServerErrorException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | UnprocessableEntityException | CommonAwsError
  >;
  createOriginEndpoint(
    input: CreateOriginEndpointRequest,
  ): Effect.Effect<
    CreateOriginEndpointResponse,
    ForbiddenException | InternalServerErrorException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | UnprocessableEntityException | CommonAwsError
  >;
  deleteChannel(
    input: DeleteChannelRequest,
  ): Effect.Effect<
    DeleteChannelResponse,
    ForbiddenException | InternalServerErrorException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | UnprocessableEntityException | CommonAwsError
  >;
  deleteOriginEndpoint(
    input: DeleteOriginEndpointRequest,
  ): Effect.Effect<
    DeleteOriginEndpointResponse,
    ForbiddenException | InternalServerErrorException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | UnprocessableEntityException | CommonAwsError
  >;
  describeChannel(
    input: DescribeChannelRequest,
  ): Effect.Effect<
    DescribeChannelResponse,
    ForbiddenException | InternalServerErrorException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | UnprocessableEntityException | CommonAwsError
  >;
  describeHarvestJob(
    input: DescribeHarvestJobRequest,
  ): Effect.Effect<
    DescribeHarvestJobResponse,
    ForbiddenException | InternalServerErrorException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | UnprocessableEntityException | CommonAwsError
  >;
  describeOriginEndpoint(
    input: DescribeOriginEndpointRequest,
  ): Effect.Effect<
    DescribeOriginEndpointResponse,
    ForbiddenException | InternalServerErrorException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | UnprocessableEntityException | CommonAwsError
  >;
  listChannels(
    input: ListChannelsRequest,
  ): Effect.Effect<
    ListChannelsResponse,
    ForbiddenException | InternalServerErrorException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | UnprocessableEntityException | CommonAwsError
  >;
  listHarvestJobs(
    input: ListHarvestJobsRequest,
  ): Effect.Effect<
    ListHarvestJobsResponse,
    ForbiddenException | InternalServerErrorException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | UnprocessableEntityException | CommonAwsError
  >;
  listOriginEndpoints(
    input: ListOriginEndpointsRequest,
  ): Effect.Effect<
    ListOriginEndpointsResponse,
    ForbiddenException | InternalServerErrorException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | UnprocessableEntityException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    CommonAwsError
  >;
  rotateChannelCredentials(
    input: RotateChannelCredentialsRequest,
  ): Effect.Effect<
    RotateChannelCredentialsResponse,
    ForbiddenException | InternalServerErrorException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | UnprocessableEntityException | CommonAwsError
  >;
  rotateIngestEndpointCredentials(
    input: RotateIngestEndpointCredentialsRequest,
  ): Effect.Effect<
    RotateIngestEndpointCredentialsResponse,
    ForbiddenException | InternalServerErrorException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | UnprocessableEntityException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  updateChannel(
    input: UpdateChannelRequest,
  ): Effect.Effect<
    UpdateChannelResponse,
    ForbiddenException | InternalServerErrorException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | UnprocessableEntityException | CommonAwsError
  >;
  updateOriginEndpoint(
    input: UpdateOriginEndpointRequest,
  ): Effect.Effect<
    UpdateOriginEndpointResponse,
    ForbiddenException | InternalServerErrorException | NotFoundException | ServiceUnavailableException | TooManyRequestsException | UnprocessableEntityException | CommonAwsError
  >;
}

export type Mediapackage = MediaPackage;

export type __AdTriggersElement = "SPLICE_INSERT" | "BREAK" | "PROVIDER_ADVERTISEMENT" | "DISTRIBUTOR_ADVERTISEMENT" | "PROVIDER_PLACEMENT_OPPORTUNITY" | "DISTRIBUTOR_PLACEMENT_OPPORTUNITY" | "PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY" | "DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY";
export type __boolean = boolean;

export type __integer = number;

export type __listOf__PeriodTriggersElement = Array<__PeriodTriggersElement>;
export type __listOf__string = Array<string>;
export type __listOfChannel = Array<Channel>;
export type __listOfHarvestJob = Array<HarvestJob>;
export type __listOfHlsManifest = Array<HlsManifest>;
export type __listOfHlsManifestCreateOrUpdateParameters = Array<HlsManifestCreateOrUpdateParameters>;
export type __listOfIngestEndpoint = Array<IngestEndpoint>;
export type __listOfOriginEndpoint = Array<OriginEndpoint>;
export type __mapOf__string = Record<string, string>;
export type __PeriodTriggersElement = "ADS";
export type __string = string;

export type AdMarkers = "NONE" | "SCTE35_ENHANCED" | "PASSTHROUGH" | "DATERANGE";
export type AdsOnDeliveryRestrictions = "NONE" | "RESTRICTED" | "UNRESTRICTED" | "BOTH";
export type AdTriggers = Array<__AdTriggersElement>;
export interface Authorization {
  CdnIdentifierSecret: string;
  SecretsRoleArn: string;
}
export interface Channel {
  Arn?: string;
  CreatedAt?: string;
  Description?: string;
  EgressAccessLogs?: EgressAccessLogs;
  HlsIngest?: HlsIngest;
  Id?: string;
  IngressAccessLogs?: IngressAccessLogs;
  Tags?: Record<string, string>;
}
export interface CmafEncryption {
  ConstantInitializationVector?: string;
  EncryptionMethod?: CmafEncryptionMethod;
  KeyRotationIntervalSeconds?: number;
  SpekeKeyProvider: SpekeKeyProvider;
}
export type CmafEncryptionMethod = "SAMPLE_AES" | "AES_CTR";
export interface CmafPackage {
  Encryption?: CmafEncryption;
  HlsManifests?: Array<HlsManifest>;
  SegmentDurationSeconds?: number;
  SegmentPrefix?: string;
  StreamSelection?: StreamSelection;
}
export interface CmafPackageCreateOrUpdateParameters {
  Encryption?: CmafEncryption;
  HlsManifests?: Array<HlsManifestCreateOrUpdateParameters>;
  SegmentDurationSeconds?: number;
  SegmentPrefix?: string;
  StreamSelection?: StreamSelection;
}
export interface ConfigureLogsRequest {
  EgressAccessLogs?: EgressAccessLogs;
  Id: string;
  IngressAccessLogs?: IngressAccessLogs;
}
export interface ConfigureLogsResponse {
  Arn?: string;
  CreatedAt?: string;
  Description?: string;
  EgressAccessLogs?: EgressAccessLogs;
  HlsIngest?: HlsIngest;
  Id?: string;
  IngressAccessLogs?: IngressAccessLogs;
  Tags?: Record<string, string>;
}
export interface CreateChannelRequest {
  Description?: string;
  Id: string;
  Tags?: Record<string, string>;
}
export interface CreateChannelResponse {
  Arn?: string;
  CreatedAt?: string;
  Description?: string;
  EgressAccessLogs?: EgressAccessLogs;
  HlsIngest?: HlsIngest;
  Id?: string;
  IngressAccessLogs?: IngressAccessLogs;
  Tags?: Record<string, string>;
}
export interface CreateHarvestJobRequest {
  EndTime: string;
  Id: string;
  OriginEndpointId: string;
  S3Destination: S3Destination;
  StartTime: string;
}
export interface CreateHarvestJobResponse {
  Arn?: string;
  ChannelId?: string;
  CreatedAt?: string;
  EndTime?: string;
  Id?: string;
  OriginEndpointId?: string;
  S3Destination?: S3Destination;
  StartTime?: string;
  Status?: Status;
}
export interface CreateOriginEndpointRequest {
  Authorization?: Authorization;
  ChannelId: string;
  CmafPackage?: CmafPackageCreateOrUpdateParameters;
  DashPackage?: DashPackage;
  Description?: string;
  HlsPackage?: HlsPackage;
  Id: string;
  ManifestName?: string;
  MssPackage?: MssPackage;
  Origination?: Origination;
  StartoverWindowSeconds?: number;
  Tags?: Record<string, string>;
  TimeDelaySeconds?: number;
  Whitelist?: Array<string>;
}
export interface CreateOriginEndpointResponse {
  Arn?: string;
  Authorization?: Authorization;
  ChannelId?: string;
  CmafPackage?: CmafPackage;
  CreatedAt?: string;
  DashPackage?: DashPackage;
  Description?: string;
  HlsPackage?: HlsPackage;
  Id?: string;
  ManifestName?: string;
  MssPackage?: MssPackage;
  Origination?: Origination;
  StartoverWindowSeconds?: number;
  Tags?: Record<string, string>;
  TimeDelaySeconds?: number;
  Url?: string;
  Whitelist?: Array<string>;
}
export interface DashEncryption {
  KeyRotationIntervalSeconds?: number;
  SpekeKeyProvider: SpekeKeyProvider;
}
export interface DashPackage {
  AdTriggers?: Array<__AdTriggersElement>;
  AdsOnDeliveryRestrictions?: AdsOnDeliveryRestrictions;
  Encryption?: DashEncryption;
  IncludeIframeOnlyStream?: boolean;
  ManifestLayout?: ManifestLayout;
  ManifestWindowSeconds?: number;
  MinBufferTimeSeconds?: number;
  MinUpdatePeriodSeconds?: number;
  PeriodTriggers?: Array<__PeriodTriggersElement>;
  Profile?: Profile;
  SegmentDurationSeconds?: number;
  SegmentTemplateFormat?: SegmentTemplateFormat;
  StreamSelection?: StreamSelection;
  SuggestedPresentationDelaySeconds?: number;
  UtcTiming?: UtcTiming;
  UtcTimingUri?: string;
}
export interface DeleteChannelRequest {
  Id: string;
}
export interface DeleteChannelResponse {
}
export interface DeleteOriginEndpointRequest {
  Id: string;
}
export interface DeleteOriginEndpointResponse {
}
export interface DescribeChannelRequest {
  Id: string;
}
export interface DescribeChannelResponse {
  Arn?: string;
  CreatedAt?: string;
  Description?: string;
  EgressAccessLogs?: EgressAccessLogs;
  HlsIngest?: HlsIngest;
  Id?: string;
  IngressAccessLogs?: IngressAccessLogs;
  Tags?: Record<string, string>;
}
export interface DescribeHarvestJobRequest {
  Id: string;
}
export interface DescribeHarvestJobResponse {
  Arn?: string;
  ChannelId?: string;
  CreatedAt?: string;
  EndTime?: string;
  Id?: string;
  OriginEndpointId?: string;
  S3Destination?: S3Destination;
  StartTime?: string;
  Status?: Status;
}
export interface DescribeOriginEndpointRequest {
  Id: string;
}
export interface DescribeOriginEndpointResponse {
  Arn?: string;
  Authorization?: Authorization;
  ChannelId?: string;
  CmafPackage?: CmafPackage;
  CreatedAt?: string;
  DashPackage?: DashPackage;
  Description?: string;
  HlsPackage?: HlsPackage;
  Id?: string;
  ManifestName?: string;
  MssPackage?: MssPackage;
  Origination?: Origination;
  StartoverWindowSeconds?: number;
  Tags?: Record<string, string>;
  TimeDelaySeconds?: number;
  Url?: string;
  Whitelist?: Array<string>;
}
export interface EgressAccessLogs {
  LogGroupName?: string;
}
export interface EncryptionContractConfiguration {
  PresetSpeke20Audio: PresetSpeke20Audio;
  PresetSpeke20Video: PresetSpeke20Video;
}
export type EncryptionMethod = "AES_128" | "SAMPLE_AES";
export declare class ForbiddenException extends Data.TaggedError(
  "ForbiddenException",
)<{
  readonly Message?: string;
}> {}
export interface HarvestJob {
  Arn?: string;
  ChannelId?: string;
  CreatedAt?: string;
  EndTime?: string;
  Id?: string;
  OriginEndpointId?: string;
  S3Destination?: S3Destination;
  StartTime?: string;
  Status?: Status;
}
export interface HlsEncryption {
  ConstantInitializationVector?: string;
  EncryptionMethod?: EncryptionMethod;
  KeyRotationIntervalSeconds?: number;
  RepeatExtXKey?: boolean;
  SpekeKeyProvider: SpekeKeyProvider;
}
export interface HlsIngest {
  IngestEndpoints?: Array<IngestEndpoint>;
}
export interface HlsManifest {
  AdMarkers?: AdMarkers;
  Id: string;
  IncludeIframeOnlyStream?: boolean;
  ManifestName?: string;
  PlaylistType?: PlaylistType;
  PlaylistWindowSeconds?: number;
  ProgramDateTimeIntervalSeconds?: number;
  Url?: string;
  AdTriggers?: Array<__AdTriggersElement>;
  AdsOnDeliveryRestrictions?: AdsOnDeliveryRestrictions;
}
export interface HlsManifestCreateOrUpdateParameters {
  AdMarkers?: AdMarkers;
  AdTriggers?: Array<__AdTriggersElement>;
  AdsOnDeliveryRestrictions?: AdsOnDeliveryRestrictions;
  Id: string;
  IncludeIframeOnlyStream?: boolean;
  ManifestName?: string;
  PlaylistType?: PlaylistType;
  PlaylistWindowSeconds?: number;
  ProgramDateTimeIntervalSeconds?: number;
}
export interface HlsPackage {
  AdMarkers?: AdMarkers;
  AdTriggers?: Array<__AdTriggersElement>;
  AdsOnDeliveryRestrictions?: AdsOnDeliveryRestrictions;
  Encryption?: HlsEncryption;
  IncludeDvbSubtitles?: boolean;
  IncludeIframeOnlyStream?: boolean;
  PlaylistType?: PlaylistType;
  PlaylistWindowSeconds?: number;
  ProgramDateTimeIntervalSeconds?: number;
  SegmentDurationSeconds?: number;
  StreamSelection?: StreamSelection;
  UseAudioRenditionGroup?: boolean;
}
export interface IngestEndpoint {
  Id?: string;
  Password?: string;
  Url?: string;
  Username?: string;
}
export interface IngressAccessLogs {
  LogGroupName?: string;
}
export declare class InternalServerErrorException extends Data.TaggedError(
  "InternalServerErrorException",
)<{
  readonly Message?: string;
}> {}
export interface ListChannelsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListChannelsResponse {
  Channels?: Array<Channel>;
  NextToken?: string;
}
export interface ListHarvestJobsRequest {
  IncludeChannelId?: string;
  IncludeStatus?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListHarvestJobsResponse {
  HarvestJobs?: Array<HarvestJob>;
  NextToken?: string;
}
export interface ListOriginEndpointsRequest {
  ChannelId?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListOriginEndpointsResponse {
  NextToken?: string;
  OriginEndpoints?: Array<OriginEndpoint>;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Record<string, string>;
}
export type ManifestLayout = "FULL" | "COMPACT" | "DRM_TOP_LEVEL_COMPACT";
export type MaxResults = number;

export interface MssEncryption {
  SpekeKeyProvider: SpekeKeyProvider;
}
export interface MssPackage {
  Encryption?: MssEncryption;
  ManifestWindowSeconds?: number;
  SegmentDurationSeconds?: number;
  StreamSelection?: StreamSelection;
}
export declare class NotFoundException extends Data.TaggedError(
  "NotFoundException",
)<{
  readonly Message?: string;
}> {}
export type Origination = "ALLOW" | "DENY";
export interface OriginEndpoint {
  Arn?: string;
  Authorization?: Authorization;
  ChannelId?: string;
  CmafPackage?: CmafPackage;
  CreatedAt?: string;
  DashPackage?: DashPackage;
  Description?: string;
  HlsPackage?: HlsPackage;
  Id?: string;
  ManifestName?: string;
  MssPackage?: MssPackage;
  Origination?: Origination;
  StartoverWindowSeconds?: number;
  Tags?: Record<string, string>;
  TimeDelaySeconds?: number;
  Url?: string;
  Whitelist?: Array<string>;
}
export type PlaylistType = "NONE" | "EVENT" | "VOD";
export type PresetSpeke20Audio = "PRESET_AUDIO_1" | "PRESET_AUDIO_2" | "PRESET_AUDIO_3" | "SHARED" | "UNENCRYPTED";
export type PresetSpeke20Video = "PRESET_VIDEO_1" | "PRESET_VIDEO_2" | "PRESET_VIDEO_3" | "PRESET_VIDEO_4" | "PRESET_VIDEO_5" | "PRESET_VIDEO_6" | "PRESET_VIDEO_7" | "PRESET_VIDEO_8" | "SHARED" | "UNENCRYPTED";
export type Profile = "NONE" | "HBBTV_1_5" | "HYBRIDCAST" | "DVB_DASH_2014";
export interface RotateChannelCredentialsRequest {
  Id: string;
}
export interface RotateChannelCredentialsResponse {
  Arn?: string;
  CreatedAt?: string;
  Description?: string;
  EgressAccessLogs?: EgressAccessLogs;
  HlsIngest?: HlsIngest;
  Id?: string;
  IngressAccessLogs?: IngressAccessLogs;
  Tags?: Record<string, string>;
}
export interface RotateIngestEndpointCredentialsRequest {
  Id: string;
  IngestEndpointId: string;
}
export interface RotateIngestEndpointCredentialsResponse {
  Arn?: string;
  CreatedAt?: string;
  Description?: string;
  EgressAccessLogs?: EgressAccessLogs;
  HlsIngest?: HlsIngest;
  Id?: string;
  IngressAccessLogs?: IngressAccessLogs;
  Tags?: Record<string, string>;
}
export interface S3Destination {
  BucketName: string;
  ManifestKey: string;
  RoleArn: string;
}
export type SegmentTemplateFormat = "NUMBER_WITH_TIMELINE" | "TIME_WITH_TIMELINE" | "NUMBER_WITH_DURATION";
export type SensitiveString = string;

export declare class ServiceUnavailableException extends Data.TaggedError(
  "ServiceUnavailableException",
)<{
  readonly Message?: string;
}> {}
export interface SpekeKeyProvider {
  CertificateArn?: string;
  EncryptionContractConfiguration?: EncryptionContractConfiguration;
  ResourceId: string;
  RoleArn: string;
  SystemIds: Array<string>;
  Url: string;
}
export type Status = "IN_PROGRESS" | "SUCCEEDED" | "FAILED";
export type StreamOrder = "ORIGINAL" | "VIDEO_BITRATE_ASCENDING" | "VIDEO_BITRATE_DESCENDING";
export interface StreamSelection {
  MaxVideoBitsPerSecond?: number;
  MinVideoBitsPerSecond?: number;
  StreamOrder?: StreamOrder;
}
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Record<string, string>;
}
export type Tags = Record<string, string>;
export declare class TooManyRequestsException extends Data.TaggedError(
  "TooManyRequestsException",
)<{
  readonly Message?: string;
}> {}
export declare class UnprocessableEntityException extends Data.TaggedError(
  "UnprocessableEntityException",
)<{
  readonly Message?: string;
}> {}
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UpdateChannelRequest {
  Description?: string;
  Id: string;
}
export interface UpdateChannelResponse {
  Arn?: string;
  CreatedAt?: string;
  Description?: string;
  EgressAccessLogs?: EgressAccessLogs;
  HlsIngest?: HlsIngest;
  Id?: string;
  IngressAccessLogs?: IngressAccessLogs;
  Tags?: Record<string, string>;
}
export interface UpdateOriginEndpointRequest {
  Authorization?: Authorization;
  CmafPackage?: CmafPackageCreateOrUpdateParameters;
  DashPackage?: DashPackage;
  Description?: string;
  HlsPackage?: HlsPackage;
  Id: string;
  ManifestName?: string;
  MssPackage?: MssPackage;
  Origination?: Origination;
  StartoverWindowSeconds?: number;
  TimeDelaySeconds?: number;
  Whitelist?: Array<string>;
}
export interface UpdateOriginEndpointResponse {
  Arn?: string;
  Authorization?: Authorization;
  ChannelId?: string;
  CmafPackage?: CmafPackage;
  CreatedAt?: string;
  DashPackage?: DashPackage;
  Description?: string;
  HlsPackage?: HlsPackage;
  Id?: string;
  ManifestName?: string;
  MssPackage?: MssPackage;
  Origination?: Origination;
  StartoverWindowSeconds?: number;
  Tags?: Record<string, string>;
  TimeDelaySeconds?: number;
  Url?: string;
  Whitelist?: Array<string>;
}
export type UtcTiming = "NONE" | "HTTP_HEAD" | "HTTP_ISO" | "HTTP_XSDATE";
export declare namespace ConfigureLogs {
  export type Input = ConfigureLogsRequest;
  export type Output = ConfigureLogsResponse;
  export type Error =
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace CreateChannel {
  export type Input = CreateChannelRequest;
  export type Output = CreateChannelResponse;
  export type Error =
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace CreateHarvestJob {
  export type Input = CreateHarvestJobRequest;
  export type Output = CreateHarvestJobResponse;
  export type Error =
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace CreateOriginEndpoint {
  export type Input = CreateOriginEndpointRequest;
  export type Output = CreateOriginEndpointResponse;
  export type Error =
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace DeleteChannel {
  export type Input = DeleteChannelRequest;
  export type Output = DeleteChannelResponse;
  export type Error =
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace DeleteOriginEndpoint {
  export type Input = DeleteOriginEndpointRequest;
  export type Output = DeleteOriginEndpointResponse;
  export type Error =
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace DescribeChannel {
  export type Input = DescribeChannelRequest;
  export type Output = DescribeChannelResponse;
  export type Error =
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace DescribeHarvestJob {
  export type Input = DescribeHarvestJobRequest;
  export type Output = DescribeHarvestJobResponse;
  export type Error =
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace DescribeOriginEndpoint {
  export type Input = DescribeOriginEndpointRequest;
  export type Output = DescribeOriginEndpointResponse;
  export type Error =
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace ListChannels {
  export type Input = ListChannelsRequest;
  export type Output = ListChannelsResponse;
  export type Error =
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace ListHarvestJobs {
  export type Input = ListHarvestJobsRequest;
  export type Output = ListHarvestJobsResponse;
  export type Error =
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace ListOriginEndpoints {
  export type Input = ListOriginEndpointsRequest;
  export type Output = ListOriginEndpointsResponse;
  export type Error =
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace RotateChannelCredentials {
  export type Input = RotateChannelCredentialsRequest;
  export type Output = RotateChannelCredentialsResponse;
  export type Error =
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace RotateIngestEndpointCredentials {
  export type Input = RotateIngestEndpointCredentialsRequest;
  export type Output = RotateIngestEndpointCredentialsResponse;
  export type Error =
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace UpdateChannel {
  export type Input = UpdateChannelRequest;
  export type Output = UpdateChannelResponse;
  export type Error =
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace UpdateOriginEndpoint {
  export type Input = UpdateOriginEndpointRequest;
  export type Output = UpdateOriginEndpointResponse;
  export type Error =
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnprocessableEntityException
    | CommonAwsError;
}

