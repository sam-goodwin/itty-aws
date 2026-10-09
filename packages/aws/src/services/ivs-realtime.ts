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
  sdkId: "IVS RealTime",
  serviceShapeName: "AmazonInteractiveVideoServiceRealTime",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "ivs" });
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
              `https://ivsrealtime-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://ivsrealtime-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://ivsrealtime.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://ivsrealtime.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    {
      accessControlAllowOrigin: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("Access-Control-Allow-Origin"),
      ),
      accessControlExposeHeaders: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("Access-Control-Expose-Headers"),
      ),
      cacheControl: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("Cache-Control"),
      ),
      contentSecurityPolicy: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("Content-Security-Policy"),
      ),
      strictTransportSecurity: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("Strict-Transport-Security"),
      ),
      xContentTypeOptions: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("X-Content-Type-Options"),
      ),
      xFrameOptions: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("X-Frame-Options"),
      ),
      xAmznErrorType: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("x-amzn-ErrorType"),
      ),
      exceptionMessage: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    {
      accessControlAllowOrigin: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("Access-Control-Allow-Origin"),
      ),
      accessControlExposeHeaders: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("Access-Control-Expose-Headers"),
      ),
      cacheControl: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("Cache-Control"),
      ),
      contentSecurityPolicy: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("Content-Security-Policy"),
      ),
      strictTransportSecurity: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("Strict-Transport-Security"),
      ),
      xContentTypeOptions: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("X-Content-Type-Options"),
      ),
      xFrameOptions: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("X-Frame-Options"),
      ),
      xAmznErrorType: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("x-amzn-ErrorType"),
      ),
      exceptionMessage: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    {
      accessControlAllowOrigin: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("Access-Control-Allow-Origin"),
      ),
      accessControlExposeHeaders: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("Access-Control-Expose-Headers"),
      ),
      cacheControl: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("Cache-Control"),
      ),
      contentSecurityPolicy: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("Content-Security-Policy"),
      ),
      strictTransportSecurity: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("Strict-Transport-Security"),
      ),
      xContentTypeOptions: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("X-Content-Type-Options"),
      ),
      xFrameOptions: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("X-Frame-Options"),
      ),
      xAmznErrorType: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("x-amzn-ErrorType"),
      ),
      exceptionMessage: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class PendingVerification
  extends /*@__PURE__*/ S.TaggedError<PendingVerification>()(
    "PendingVerification",
    {
      accessControlAllowOrigin: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("Access-Control-Allow-Origin"),
      ),
      accessControlExposeHeaders: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("Access-Control-Expose-Headers"),
      ),
      cacheControl: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("Cache-Control"),
      ),
      contentSecurityPolicy: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("Content-Security-Policy"),
      ),
      strictTransportSecurity: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("Strict-Transport-Security"),
      ),
      xContentTypeOptions: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("X-Content-Type-Options"),
      ),
      xFrameOptions: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("X-Frame-Options"),
      ),
      xAmznErrorType: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("x-amzn-ErrorType"),
      ),
      exceptionMessage: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    {
      accessControlAllowOrigin: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("Access-Control-Allow-Origin"),
      ),
      accessControlExposeHeaders: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("Access-Control-Expose-Headers"),
      ),
      cacheControl: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("Cache-Control"),
      ),
      contentSecurityPolicy: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("Content-Security-Policy"),
      ),
      strictTransportSecurity: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("Strict-Transport-Security"),
      ),
      xContentTypeOptions: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("X-Content-Type-Options"),
      ),
      xFrameOptions: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("X-Frame-Options"),
      ),
      xAmznErrorType: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("x-amzn-ErrorType"),
      ),
      exceptionMessage: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    {
      accessControlAllowOrigin: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("Access-Control-Allow-Origin"),
      ),
      accessControlExposeHeaders: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("Access-Control-Expose-Headers"),
      ),
      cacheControl: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("Cache-Control"),
      ),
      contentSecurityPolicy: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("Content-Security-Policy"),
      ),
      strictTransportSecurity: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("Strict-Transport-Security"),
      ),
      xContentTypeOptions: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("X-Content-Type-Options"),
      ),
      xFrameOptions: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("X-Frame-Options"),
      ),
      xAmznErrorType: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("x-amzn-ErrorType"),
      ),
      exceptionMessage: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()("ThrottlingException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    {
      accessControlAllowOrigin: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("Access-Control-Allow-Origin"),
      ),
      accessControlExposeHeaders: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("Access-Control-Expose-Headers"),
      ),
      cacheControl: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("Cache-Control"),
      ),
      contentSecurityPolicy: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("Content-Security-Policy"),
      ),
      strictTransportSecurity: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("Strict-Transport-Security"),
      ),
      xContentTypeOptions: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("X-Content-Type-Options"),
      ),
      xFrameOptions: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("X-Frame-Options"),
      ),
      xAmznErrorType: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("x-amzn-ErrorType"),
      ),
      exceptionMessage: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type EncoderConfigurationName = string;
export type Width = number;
export type Height = number;
export type Framerate = number;
export type Bitrate = number;
export interface Video {
  width?: number;
  height?: number;
  framerate?: number;
  bitrate?: number;
}
export type TagKey = string;
export type TagValue = string;
export type Tags = { [key: string]: string | undefined };
export interface CreateEncoderConfigurationRequest {
  name?: string;
  video?: Video;
  tags?: { [key: string]: string | undefined };
}
export type EncoderConfigurationArn = string;
export interface EncoderConfiguration {
  arn: string;
  name?: string;
  video?: Video;
  tags?: { [key: string]: string | undefined };
}
export interface CreateEncoderConfigurationResponse {
  encoderConfiguration?: EncoderConfiguration;
}
export type IngestConfigurationName = string;
export type IngestConfigurationStageArn = string;
export type UserId = string;
export type ParticipantAttributes = { [key: string]: string | undefined };
export type IngestProtocol = "RTMP" | "RTMPS" | (string & {});
export type InsecureIngest = boolean;
export type RedundantIngest = boolean;
export interface CreateIngestConfigurationRequest {
  name?: string;
  stageArn?: string;
  userId?: string;
  attributes?: { [key: string]: string | undefined };
  ingestProtocol: IngestProtocol;
  insecureIngest?: boolean;
  redundantIngest?: boolean;
  tags?: { [key: string]: string | undefined };
}
export type IngestConfigurationArn = string;
export type StreamKey = string | redacted.Redacted<string>;
export type ParticipantId = string;
export type IngestConfigurationState = string;
export interface RedundantIngestCredential {
  participantId?: string;
  streamKey?: string | redacted.Redacted<string>;
}
export type RedundantIngestCredentials = RedundantIngestCredential[];
export interface IngestConfiguration {
  name?: string;
  arn: string;
  ingestProtocol: IngestProtocol;
  streamKey: string | redacted.Redacted<string>;
  stageArn: string;
  participantId: string;
  state: string;
  userId?: string;
  redundantIngest?: boolean;
  redundantIngestCredentials?: RedundantIngestCredential[];
  attributes?: { [key: string]: string | undefined };
  tags?: { [key: string]: string | undefined };
}
export interface CreateIngestConfigurationResponse {
  accessControlAllowOrigin?: string;
  accessControlExposeHeaders?: string;
  cacheControl?: string;
  contentSecurityPolicy?: string;
  strictTransportSecurity?: string;
  xContentTypeOptions?: string;
  xFrameOptions?: string;
  ingestConfiguration?: IngestConfiguration;
}
export type StageArn = string;
export type ParticipantTokenDurationMinutes = number;
export type ParticipantTokenUserId = string;
export type ParticipantTokenAttributes = { [key: string]: string | undefined };
export type ParticipantTokenCapability = string;
export type ParticipantTokenCapabilities = string[];
export interface CreateParticipantTokenRequest {
  stageArn: string;
  duration?: number;
  userId?: string;
  attributes?: { [key: string]: string | undefined };
  capabilities?: string[];
}
export type ParticipantTokenId = string;
export type ParticipantTokenString = string | redacted.Redacted<string>;
export type ParticipantTokenExpirationTime = Date;
export interface ParticipantToken {
  participantId?: string;
  token?: string | redacted.Redacted<string>;
  userId?: string;
  attributes?: { [key: string]: string | undefined };
  duration?: number;
  capabilities?: string[];
  expirationTime?: Date;
}
export interface CreateParticipantTokenResponse {
  participantToken?: ParticipantToken;
}
export type StageName = string;
export interface ParticipantTokenConfiguration {
  duration?: number;
  userId?: string;
  attributes?: { [key: string]: string | undefined };
  capabilities?: string[];
}
export type ParticipantTokenConfigurations = ParticipantTokenConfiguration[];
export type AutoParticipantRecordingStorageConfigurationArn = string;
export type ParticipantRecordingMediaType = "AUDIO_VIDEO" | "AUDIO_ONLY" | "NONE" | (string & {});
export type ParticipantRecordingMediaTypeList = ParticipantRecordingMediaType[];
export type ThumbnailIntervalSeconds = number;
export type ThumbnailStorageType = "SEQUENTIAL" | "LATEST" | (string & {});
export type ThumbnailStorageTypeList = ThumbnailStorageType[];
export type ThumbnailRecordingMode = "INTERVAL" | "DISABLED" | (string & {});
export interface ParticipantThumbnailConfiguration {
  targetIntervalSeconds?: number;
  storage?: ThumbnailStorageType[];
  recordingMode?: ThumbnailRecordingMode;
}
export type ParticipantRecordingReconnectWindowSeconds = number;
export type ParticipantRecordingTargetSegmentDurationSeconds = number;
export interface ParticipantRecordingHlsConfiguration {
  targetSegmentDurationSeconds?: number;
}
export type RecordParticipantReplicas = boolean;
export interface AutoParticipantRecordingConfiguration {
  storageConfigurationArn: string;
  mediaTypes?: ParticipantRecordingMediaType[];
  thumbnailConfiguration?: ParticipantThumbnailConfiguration;
  recordingReconnectWindowSeconds?: number;
  hlsConfiguration?: ParticipantRecordingHlsConfiguration;
  recordParticipantReplicas?: boolean;
}
export interface CreateStageRequest {
  name?: string;
  participantTokenConfigurations?: ParticipantTokenConfiguration[];
  tags?: { [key: string]: string | undefined };
  autoParticipantRecordingConfiguration?: AutoParticipantRecordingConfiguration;
}
export type StageSessionId = string;
export type StageEndpoint = string;
export interface StageEndpoints {
  events?: string;
  whip?: string;
  rtmp?: string;
  rtmps?: string;
}
export interface Stage {
  arn: string;
  name?: string;
  activeSessionId?: string;
  tags?: { [key: string]: string | undefined };
  autoParticipantRecordingConfiguration?: AutoParticipantRecordingConfiguration;
  endpoints?: StageEndpoints;
}
export type ParticipantTokenList = ParticipantToken[];
export interface CreateStageResponse {
  stage?: Stage;
  participantTokens?: ParticipantToken[];
}
export type StorageConfigurationName = string;
export type S3BucketName = string;
export interface S3StorageConfiguration {
  bucketName: string;
}
export interface CreateStorageConfigurationRequest {
  name?: string;
  s3: S3StorageConfiguration;
  tags?: { [key: string]: string | undefined };
}
export type StorageConfigurationArn = string;
export interface StorageConfiguration {
  arn: string;
  name?: string;
  s3?: S3StorageConfiguration;
  tags?: { [key: string]: string | undefined };
}
export interface CreateStorageConfigurationResponse {
  storageConfiguration?: StorageConfiguration;
}
export interface DeleteEncoderConfigurationRequest {
  arn: string;
}
export interface DeleteEncoderConfigurationResponse {}
export interface DeleteIngestConfigurationRequest {
  arn: string;
  force?: boolean;
}
export interface DeleteIngestConfigurationResponse {}
export type PublicKeyArn = string;
export interface DeletePublicKeyRequest {
  arn: string;
}
export interface DeletePublicKeyResponse {}
export interface DeleteStageRequest {
  arn: string;
}
export interface DeleteStageResponse {}
export interface DeleteStorageConfigurationRequest {
  arn: string;
}
export interface DeleteStorageConfigurationResponse {}
export type DisconnectParticipantReason = string;
export interface DisconnectParticipantRequest {
  stageArn: string;
  participantId: string;
  reason?: string;
}
export interface DisconnectParticipantResponse {}
export type CompositionArn = string;
export interface GetCompositionRequest {
  arn: string;
}
export type CompositionState = string;
export type AttributeKey = string;
export type OmitStoppedVideo = boolean;
export type VideoAspectRatio = "AUTO" | "VIDEO" | "SQUARE" | "PORTRAIT" | (string & {});
export type VideoFillMode = "FILL" | "COVER" | "CONTAIN" | (string & {});
export type GridGap = number;
export interface GridConfiguration {
  featuredParticipantAttribute?: string;
  omitStoppedVideo?: boolean;
  videoAspectRatio?: VideoAspectRatio;
  videoFillMode?: VideoFillMode;
  gridGap?: number;
  participantOrderAttribute?: string;
}
export type PipBehavior = "STATIC" | "DYNAMIC" | (string & {});
export type PipOffset = number;
export type PipPosition = "TOP_LEFT" | "TOP_RIGHT" | "BOTTOM_LEFT" | "BOTTOM_RIGHT" | (string & {});
export type PipWidth = number;
export type PipHeight = number;
export interface PipConfiguration {
  featuredParticipantAttribute?: string;
  omitStoppedVideo?: boolean;
  videoFillMode?: VideoFillMode;
  gridGap?: number;
  pipParticipantAttribute?: string;
  pipBehavior?: PipBehavior;
  pipOffset?: number;
  pipPosition?: PipPosition;
  pipWidth?: number;
  pipHeight?: number;
  participantOrderAttribute?: string;
}
export interface LayoutConfiguration {
  grid?: GridConfiguration;
  pip?: PipConfiguration;
}
export type DestinationState = string;
export type DestinationConfigurationName = string;
export type ChannelArn = string;
export interface ChannelDestinationConfiguration {
  channelArn: string;
  encoderConfigurationArn?: string;
}
export type EncoderConfigurationArnList = string[];
export type CompositionRecordingTargetSegmentDurationSeconds = number;
export interface CompositionRecordingHlsConfiguration {
  targetSegmentDurationSeconds?: number;
}
export type RecordingConfigurationFormat = string;
export interface RecordingConfiguration {
  hlsConfiguration?: CompositionRecordingHlsConfiguration;
  format?: string;
}
export interface CompositionThumbnailConfiguration {
  targetIntervalSeconds?: number;
  storage?: ThumbnailStorageType[];
}
export type CompositionThumbnailConfigurationList = CompositionThumbnailConfiguration[];
export interface S3DestinationConfiguration {
  storageConfigurationArn: string;
  encoderConfigurationArns: string[];
  recordingConfiguration?: RecordingConfiguration;
  thumbnailConfigurations?: CompositionThumbnailConfiguration[];
}
export interface DestinationConfiguration {
  name?: string;
  channel?: ChannelDestinationConfiguration;
  s3?: S3DestinationConfiguration;
}
export interface S3Detail {
  recordingPrefix: string;
}
export interface DestinationDetail {
  s3?: S3Detail;
}
export interface Destination {
  id: string;
  state: string;
  startTime?: Date;
  endTime?: Date;
  configuration: DestinationConfiguration;
  detail?: DestinationDetail;
}
export type DestinationList = Destination[];
export interface Composition {
  arn: string;
  stageArn: string;
  state: string;
  layout: LayoutConfiguration;
  destinations: Destination[];
  tags?: { [key: string]: string | undefined };
  startTime?: Date;
  endTime?: Date;
}
export interface GetCompositionResponse {
  composition?: Composition;
}
export interface GetEncoderConfigurationRequest {
  arn: string;
}
export interface GetEncoderConfigurationResponse {
  encoderConfiguration?: EncoderConfiguration;
}
export interface GetIngestConfigurationRequest {
  arn: string;
}
export interface GetIngestConfigurationResponse {
  ingestConfiguration?: IngestConfiguration;
}
export interface GetParticipantRequest {
  stageArn: string;
  sessionId: string;
  participantId: string;
}
export type ParticipantState = string;
export type Published = boolean;
export type ParticipantClientAttribute = string;
export type ParticipantRecordingS3BucketName = string;
export type ParticipantRecordingS3Prefix = string;
export type ParticipantRecordingState = string;
export type ParticipantProtocol = "UNKNOWN" | "WHIP" | "RTMP" | "RTMPS" | (string & {});
export type ReplicationType = string;
export type ReplicationState = string;
export interface Participant {
  participantId?: string;
  userId?: string;
  state?: string;
  firstJoinTime?: Date;
  attributes?: { [key: string]: string | undefined };
  published?: boolean;
  ispName?: string;
  osName?: string;
  osVersion?: string;
  browserName?: string;
  browserVersion?: string;
  sdkVersion?: string;
  recordingS3BucketName?: string;
  recordingS3Prefix?: string;
  recordingState?: string;
  protocol?: ParticipantProtocol;
  replicationType?: string;
  replicationState?: string;
  sourceStageArn?: string;
  sourceSessionId?: string;
  redundantIngest?: boolean;
  ingestConfigurationArn?: string;
}
export interface GetParticipantResponse {
  participant?: Participant;
}
export interface GetPublicKeyRequest {
  arn: string;
}
export type PublicKeyName = string;
export type PublicKeyMaterial = string;
export type PublicKeyFingerprint = string;
export interface PublicKey {
  arn?: string;
  name?: string;
  publicKeyMaterial?: string;
  fingerprint?: string;
  tags?: { [key: string]: string | undefined };
}
export interface GetPublicKeyResponse {
  publicKey?: PublicKey;
}
export interface GetStageRequest {
  arn: string;
}
export interface GetStageResponse {
  stage?: Stage;
}
export interface GetStageSessionRequest {
  stageArn: string;
  sessionId: string;
}
export interface StageSession {
  sessionId?: string;
  startTime?: Date;
  endTime?: Date;
}
export interface GetStageSessionResponse {
  stageSession?: StageSession;
}
export interface GetStorageConfigurationRequest {
  arn: string;
}
export interface GetStorageConfigurationResponse {
  storageConfiguration?: StorageConfiguration;
}
export interface ImportPublicKeyRequest {
  publicKeyMaterial: string;
  name?: string;
  tags?: { [key: string]: string | undefined };
}
export interface ImportPublicKeyResponse {
  publicKey?: PublicKey;
}
export type PaginationToken = string;
export type MaxCompositionResults = number;
export interface ListCompositionsRequest {
  filterByStageArn?: string;
  filterByEncoderConfigurationArn?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface DestinationSummary {
  id: string;
  state: string;
  startTime?: Date;
  endTime?: Date;
}
export type DestinationSummaryList = DestinationSummary[];
export interface CompositionSummary {
  arn: string;
  stageArn: string;
  destinations: DestinationSummary[];
  state: string;
  tags?: { [key: string]: string | undefined };
  startTime?: Date;
  endTime?: Date;
}
export type CompositionSummaryList = CompositionSummary[];
export interface ListCompositionsResponse {
  compositions: CompositionSummary[];
  nextToken?: string;
}
export type MaxEncoderConfigurationResults = number;
export interface ListEncoderConfigurationsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface EncoderConfigurationSummary {
  arn: string;
  name?: string;
  tags?: { [key: string]: string | undefined };
}
export type EncoderConfigurationSummaryList = EncoderConfigurationSummary[];
export interface ListEncoderConfigurationsResponse {
  encoderConfigurations: EncoderConfigurationSummary[];
  nextToken?: string;
}
export type MaxIngestConfigurationResults = number;
export interface ListIngestConfigurationsRequest {
  filterByStageArn?: string;
  filterByState?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface IngestConfigurationSummary {
  name?: string;
  arn: string;
  ingestProtocol: IngestProtocol;
  stageArn: string;
  participantId: string;
  state: string;
  userId?: string;
  redundantIngest?: boolean;
}
export type IngestConfigurationList = IngestConfigurationSummary[];
export interface ListIngestConfigurationsResponse {
  ingestConfigurations: IngestConfigurationSummary[];
  nextToken?: string;
}
export type MaxParticipantEventResults = number;
export interface ListParticipantEventsRequest {
  stageArn: string;
  sessionId: string;
  participantId: string;
  nextToken?: string;
  maxResults?: number;
}
export type EventName = string;
export type EventErrorCode =
  | "INSUFFICIENT_CAPABILITIES"
  | "QUOTA_EXCEEDED"
  | "PUBLISHER_NOT_FOUND"
  | "BITRATE_EXCEEDED"
  | "RESOLUTION_EXCEEDED"
  | "STREAM_DURATION_EXCEEDED"
  | "INVALID_AUDIO_CODEC"
  | "INVALID_VIDEO_CODEC"
  | "INVALID_PROTOCOL"
  | "INVALID_STREAM_KEY"
  | "REUSE_OF_STREAM_KEY"
  | "B_FRAME_PRESENT"
  | "INVALID_INPUT"
  | "INTERNAL_SERVER_EXCEPTION"
  | (string & {});
export type Replica = boolean;
export interface ExchangedParticipantToken {
  capabilities?: string[];
  attributes?: { [key: string]: string | undefined };
  userId?: string;
  expirationTime?: Date;
}
export interface Event {
  name?: string;
  participantId?: string;
  eventTime?: Date;
  remoteParticipantId?: string;
  errorCode?: EventErrorCode;
  destinationStageArn?: string;
  destinationSessionId?: string;
  replica?: boolean;
  previousToken?: ExchangedParticipantToken;
  newToken?: ExchangedParticipantToken;
}
export type EventList = Event[];
export interface ListParticipantEventsResponse {
  events: Event[];
  nextToken?: string;
}
export type MaxParticipantReplicaResults = number;
export interface ListParticipantReplicasRequest {
  sourceStageArn: string;
  participantId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ParticipantReplica {
  sourceStageArn: string;
  participantId: string;
  sourceSessionId: string;
  destinationStageArn: string;
  destinationSessionId: string;
  replicationState: string;
}
export type ParticipantReplicaList = ParticipantReplica[];
export interface ListParticipantReplicasResponse {
  replicas: ParticipantReplica[];
  nextToken?: string;
}
export type MaxParticipantResults = number;
export type ParticipantRecordingFilterByRecordingState = string;
export interface ListParticipantsRequest {
  stageArn: string;
  sessionId: string;
  filterByUserId?: string;
  filterByPublished?: boolean;
  filterByState?: string;
  nextToken?: string;
  maxResults?: number;
  filterByRecordingState?: string;
}
export interface ParticipantSummary {
  participantId?: string;
  userId?: string;
  state?: string;
  firstJoinTime?: Date;
  published?: boolean;
  recordingState?: string;
  replicationType?: string;
  replicationState?: string;
  sourceStageArn?: string;
  sourceSessionId?: string;
  redundantIngest?: boolean;
  ingestConfigurationArn?: string;
}
export type ParticipantList = ParticipantSummary[];
export interface ListParticipantsResponse {
  participants: ParticipantSummary[];
  nextToken?: string;
}
export type MaxPublicKeyResults = number;
export interface ListPublicKeysRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface PublicKeySummary {
  arn?: string;
  name?: string;
  tags?: { [key: string]: string | undefined };
}
export type PublicKeyList = PublicKeySummary[];
export interface ListPublicKeysResponse {
  publicKeys: PublicKeySummary[];
  nextToken?: string;
}
export type MaxStageResults = number;
export interface ListStagesRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface StageSummary {
  arn: string;
  name?: string;
  activeSessionId?: string;
  tags?: { [key: string]: string | undefined };
}
export type StageSummaryList = StageSummary[];
export interface ListStagesResponse {
  stages: StageSummary[];
  nextToken?: string;
}
export type MaxStageSessionResults = number;
export interface ListStageSessionsRequest {
  stageArn: string;
  nextToken?: string;
  maxResults?: number;
}
export interface StageSessionSummary {
  sessionId?: string;
  startTime?: Date;
  endTime?: Date;
}
export type StageSessionList = StageSessionSummary[];
export interface ListStageSessionsResponse {
  stageSessions: StageSessionSummary[];
  nextToken?: string;
}
export type MaxStorageConfigurationResults = number;
export interface ListStorageConfigurationsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface StorageConfigurationSummary {
  arn: string;
  name?: string;
  s3?: S3StorageConfiguration;
  tags?: { [key: string]: string | undefined };
}
export type StorageConfigurationSummaryList = StorageConfigurationSummary[];
export interface ListStorageConfigurationsResponse {
  storageConfigurations: StorageConfigurationSummary[];
  nextToken?: string;
}
export type ResourceArn = string;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags: { [key: string]: string | undefined };
}
export type CompositionClientToken = string;
export type DestinationConfigurationList = DestinationConfiguration[];
export interface StartCompositionRequest {
  stageArn: string;
  idempotencyToken?: string;
  layout?: LayoutConfiguration;
  destinations: DestinationConfiguration[];
  tags?: { [key: string]: string | undefined };
}
export interface StartCompositionResponse {
  composition?: Composition;
}
export type ReconnectWindowSeconds = number;
export interface StartParticipantReplicationRequest {
  sourceStageArn: string;
  destinationStageArn: string;
  participantId: string;
  reconnectWindowSeconds?: number;
  attributes?: { [key: string]: string | undefined };
}
export interface StartParticipantReplicationResponse {
  accessControlAllowOrigin?: string;
  accessControlExposeHeaders?: string;
  cacheControl?: string;
  contentSecurityPolicy?: string;
  strictTransportSecurity?: string;
  xContentTypeOptions?: string;
  xFrameOptions?: string;
}
export interface StopCompositionRequest {
  arn: string;
}
export interface StopCompositionResponse {}
export interface StopParticipantReplicationRequest {
  sourceStageArn: string;
  destinationStageArn: string;
  participantId: string;
}
export interface StopParticipantReplicationResponse {
  accessControlAllowOrigin?: string;
  accessControlExposeHeaders?: string;
  cacheControl?: string;
  contentSecurityPolicy?: string;
  strictTransportSecurity?: string;
  xContentTypeOptions?: string;
  xFrameOptions?: string;
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
export interface UpdateIngestConfigurationRequest {
  arn: string;
  stageArn?: string;
  redundantIngest?: boolean;
}
export interface UpdateIngestConfigurationResponse {
  accessControlAllowOrigin?: string;
  accessControlExposeHeaders?: string;
  cacheControl?: string;
  contentSecurityPolicy?: string;
  strictTransportSecurity?: string;
  xContentTypeOptions?: string;
  xFrameOptions?: string;
  ingestConfiguration?: IngestConfiguration;
}
export interface UpdateStageRequest {
  arn: string;
  name?: string;
  autoParticipantRecordingConfiguration?: AutoParticipantRecordingConfiguration;
}
export interface UpdateStageResponse {
  stage?: Stage;
}
export type ErrorMessage = string;
export type CreateEncoderConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | PendingVerification
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Creates an EncoderConfiguration object.
 */
export const createEncoderConfiguration: API.OperationMethod<
  CreateEncoderConfigurationRequest,
  CreateEncoderConfigurationResponse,
  CreateEncoderConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(2, __c0, 2) as any as S.Schema<CreateEncoderConfigurationRequest>,
  output: __S(4, __c0, 4) as any as S.Schema<CreateEncoderConfigurationResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    PendingVerification,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateEncoderConfiguration",
}));

export type CreateIngestConfigurationError =
  | AccessDeniedException
  | PendingVerification
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new IngestConfiguration resource, used to specify the ingest protocol for a stage.
 */
export const createIngestConfiguration: API.OperationMethod<
  CreateIngestConfigurationRequest,
  CreateIngestConfigurationResponse,
  CreateIngestConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(6, __c0, 6) as any as S.Schema<CreateIngestConfigurationRequest>,
  output: __S(10, __c1, 2) as any as S.Schema<CreateIngestConfigurationResponse>,
  errors: [
    AccessDeniedException,
    PendingVerification,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateIngestConfiguration",
}));

export type CreateParticipantTokenError =
  | AccessDeniedException
  | PendingVerification
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Creates an additional token for a specified stage. This can be done after stage creation or when tokens expire. Tokens always are scoped to the stage for which they are created.
 *
 * Encryption keys are owned by Amazon IVS and never used directly by your application.
 */
export const createParticipantToken: API.OperationMethod<
  CreateParticipantTokenRequest,
  CreateParticipantTokenResponse,
  CreateParticipantTokenError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(12, __c1, 4) as any as S.Schema<CreateParticipantTokenRequest>,
  output: __S(14, __c1, 6) as any as S.Schema<CreateParticipantTokenResponse>,
  errors: [
    AccessDeniedException,
    PendingVerification,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateParticipantToken",
}));

export type CreateStageError =
  | AccessDeniedException
  | PendingVerification
  | ServiceQuotaExceededException
  | ValidationException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates a new stage (and optionally participant tokens).
 */
export const createStage: API.OperationMethod<
  CreateStageRequest,
  CreateStageResponse,
  CreateStageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(22, __c2, 6) as any as S.Schema<CreateStageRequest>,
  output: __S(26, __c3, 2) as any as S.Schema<CreateStageResponse>,
  errors: [
    AccessDeniedException,
    PendingVerification,
    ServiceQuotaExceededException,
    ValidationException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateStage",
}));

export type CreateStorageConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | PendingVerification
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new storage configuration, used to enable recording to Amazon S3. When a StorageConfiguration is created, IVS will modify the S3 bucketPolicy of the provided bucket. This will ensure that IVS has sufficient permissions to write content to the provided bucket.
 */
export const createStorageConfiguration: API.OperationMethod<
  CreateStorageConfigurationRequest,
  CreateStorageConfigurationResponse,
  CreateStorageConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(28, __c3, 4) as any as S.Schema<CreateStorageConfigurationRequest>,
  output: __S(30, __c3, 6) as any as S.Schema<CreateStorageConfigurationResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    PendingVerification,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateStorageConfiguration",
}));

export type DeleteEncoderConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an EncoderConfiguration resource. Ensures that no Compositions are using this template; otherwise, returns an error.
 */
export const deleteEncoderConfiguration: API.OperationMethod<
  DeleteEncoderConfigurationRequest,
  DeleteEncoderConfigurationResponse,
  DeleteEncoderConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(31, __c3, 7) as any as S.Schema<DeleteEncoderConfigurationRequest>,
  output: __S(32, __c4, 0) as any as S.Schema<DeleteEncoderConfigurationResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteEncoderConfiguration",
}));

export type DeleteIngestConfigurationError =
  | AccessDeniedException
  | ConflictException
  | PendingVerification
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a specified IngestConfiguration, so it can no longer be used to broadcast. An IngestConfiguration cannot be deleted if the publisher is actively streaming to a stage, unless `force` is set to `true`.
 */
export const deleteIngestConfiguration: API.OperationMethod<
  DeleteIngestConfigurationRequest,
  DeleteIngestConfigurationResponse,
  DeleteIngestConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(33, __c4, 1) as any as S.Schema<DeleteIngestConfigurationRequest>,
  output: __S(32, __c4, 0) as any as S.Schema<DeleteIngestConfigurationResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    PendingVerification,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteIngestConfiguration",
}));

export type DeletePublicKeyError =
  | AccessDeniedException
  | ConflictException
  | PendingVerification
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified public key used to sign stage participant tokens. This invalidates future participant tokens generated using the key pair's private key.
 */
export const deletePublicKey: API.OperationMethod<
  DeletePublicKeyRequest,
  DeletePublicKeyResponse,
  DeletePublicKeyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(34, __c4, 2) as any as S.Schema<DeletePublicKeyRequest>,
  output: __S(35, __c4, 3) as any as S.Schema<DeletePublicKeyResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    PendingVerification,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeletePublicKey",
}));

export type DeleteStageError =
  | AccessDeniedException
  | ConflictException
  | PendingVerification
  | ResourceNotFoundException
  | ValidationException
  | ThrottlingException
  | CommonErrors;
/**
 * Shuts down and deletes the specified stage (disconnecting all participants). This operation also removes the `stageArn` from the associated IngestConfiguration, if there are participants using the IngestConfiguration to publish to the stage.
 */
export const deleteStage: API.OperationMethod<
  DeleteStageRequest,
  DeleteStageResponse,
  DeleteStageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(36, __c4, 4) as any as S.Schema<DeleteStageRequest>,
  output: __S(35, __c4, 3) as any as S.Schema<DeleteStageResponse>,
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
  operationName: "DeleteStage",
}));

export type DeleteStorageConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the storage configuration for the specified ARN.
 *
 * If you try to delete a storage configuration that is used by a Composition, you will get an error (409 ConflictException). To avoid this, for all Compositions that reference the storage configuration, first use StopComposition and wait for it to complete, then use DeleteStorageConfiguration.
 */
export const deleteStorageConfiguration: API.OperationMethod<
  DeleteStorageConfigurationRequest,
  DeleteStorageConfigurationResponse,
  DeleteStorageConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(37, __c4, 5) as any as S.Schema<DeleteStorageConfigurationRequest>,
  output: __S(32, __c4, 0) as any as S.Schema<DeleteStorageConfigurationResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteStorageConfiguration",
}));

export type DisconnectParticipantError =
  | AccessDeniedException
  | PendingVerification
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Disconnects a specified participant from a specified stage. If the participant is publishing using an IngestConfiguration, DisconnectParticipant also updates the `stageArn` in the IngestConfiguration to be an empty string.
 */
export const disconnectParticipant: API.OperationMethod<
  DisconnectParticipantRequest,
  DisconnectParticipantResponse,
  DisconnectParticipantError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(38, __c4, 6) as any as S.Schema<DisconnectParticipantRequest>,
  output: __S(35, __c4, 3) as any as S.Schema<DisconnectParticipantResponse>,
  errors: [
    AccessDeniedException,
    PendingVerification,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisconnectParticipant",
}));

export type GetCompositionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Get information about the specified Composition resource.
 */
export const getComposition: API.OperationMethod<
  GetCompositionRequest,
  GetCompositionResponse,
  GetCompositionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(39, __c4, 7) as any as S.Schema<GetCompositionRequest>,
  output: __S(54, __c6, 6) as any as S.Schema<GetCompositionResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetComposition",
}));

export type GetEncoderConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about the specified EncoderConfiguration resource.
 */
export const getEncoderConfiguration: API.OperationMethod<
  GetEncoderConfigurationRequest,
  GetEncoderConfigurationResponse,
  GetEncoderConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(55, __c6, 7) as any as S.Schema<GetEncoderConfigurationRequest>,
  output: __S(4, __c0, 4) as any as S.Schema<GetEncoderConfigurationResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEncoderConfiguration",
}));

export type GetIngestConfigurationError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about the specified IngestConfiguration.
 */
export const getIngestConfiguration: API.OperationMethod<
  GetIngestConfigurationRequest,
  GetIngestConfigurationResponse,
  GetIngestConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(56, __c7, 0) as any as S.Schema<GetIngestConfigurationRequest>,
  output: __S(57, __c7, 1) as any as S.Schema<GetIngestConfigurationResponse>,
  errors: [AccessDeniedException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetIngestConfiguration",
}));

export type GetParticipantError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about the specified participant token.
 */
export const getParticipant: API.OperationMethod<
  GetParticipantRequest,
  GetParticipantResponse,
  GetParticipantError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(58, __c7, 2) as any as S.Schema<GetParticipantRequest>,
  output: __S(60, __c7, 4) as any as S.Schema<GetParticipantResponse>,
  errors: [AccessDeniedException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetParticipant",
}));

export type GetPublicKeyError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Gets information for the specified public key.
 */
export const getPublicKey: API.OperationMethod<
  GetPublicKeyRequest,
  GetPublicKeyResponse,
  GetPublicKeyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(61, __c7, 5) as any as S.Schema<GetPublicKeyRequest>,
  output: __S(63, __c7, 7) as any as S.Schema<GetPublicKeyResponse>,
  errors: [AccessDeniedException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPublicKey",
}));

export type GetStageError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ValidationException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets information for the specified stage.
 */
export const getStage: API.OperationMethod<
  GetStageRequest,
  GetStageResponse,
  GetStageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(64, __c8, 0) as any as S.Schema<GetStageRequest>,
  output: __S(65, __c8, 1) as any as S.Schema<GetStageResponse>,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ValidationException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetStage",
}));

export type GetStageSessionError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Gets information for the specified stage session.
 */
export const getStageSession: API.OperationMethod<
  GetStageSessionRequest,
  GetStageSessionResponse,
  GetStageSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(66, __c8, 2) as any as S.Schema<GetStageSessionRequest>,
  output: __S(68, __c8, 4) as any as S.Schema<GetStageSessionResponse>,
  errors: [AccessDeniedException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetStageSession",
}));

export type GetStorageConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Gets the storage configuration for the specified ARN.
 */
export const getStorageConfiguration: API.OperationMethod<
  GetStorageConfigurationRequest,
  GetStorageConfigurationResponse,
  GetStorageConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(69, __c8, 5) as any as S.Schema<GetStorageConfigurationRequest>,
  output: __S(30, __c3, 6) as any as S.Schema<GetStorageConfigurationResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetStorageConfiguration",
}));

export type ImportPublicKeyError =
  | AccessDeniedException
  | ConflictException
  | PendingVerification
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Import a public key to be used for signing stage participant tokens.
 */
export const importPublicKey: API.OperationMethod<
  ImportPublicKeyRequest,
  ImportPublicKeyResponse,
  ImportPublicKeyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(70, __c8, 6) as any as S.Schema<ImportPublicKeyRequest>,
  output: __S(63, __c7, 7) as any as S.Schema<ImportPublicKeyResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    PendingVerification,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ImportPublicKey",
}));

export type ListCompositionsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Gets summary information about all Compositions in your account, in the AWS region where the API request is processed.
 */
export const listCompositions: API.PaginatedOperationMethod<
  ListCompositionsRequest,
  ListCompositionsResponse,
  ListCompositionsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(71, __c8, 7) as any as S.Schema<ListCompositionsRequest>,
  output: __S(76, __c9, 4) as any as S.Schema<ListCompositionsResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCompositions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListEncoderConfigurationsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Gets summary information about all EncoderConfigurations in your account, in the AWS region where the API request is processed.
 */
export const listEncoderConfigurations: API.PaginatedOperationMethod<
  ListEncoderConfigurationsRequest,
  ListEncoderConfigurationsResponse,
  ListEncoderConfigurationsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(77, __c9, 5) as any as S.Schema<ListEncoderConfigurationsRequest>,
  output: __S(80, __c10, 0) as any as S.Schema<ListEncoderConfigurationsResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListEncoderConfigurations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListIngestConfigurationsError =
  | AccessDeniedException
  | ValidationException
  | CommonErrors;
/**
 * Lists all IngestConfigurations in your account, in the AWS region where the API request is processed.
 */
export const listIngestConfigurations: API.PaginatedOperationMethod<
  ListIngestConfigurationsRequest,
  ListIngestConfigurationsResponse,
  ListIngestConfigurationsError,
  Credentials | HttpClient.HttpClient,
  IngestConfigurationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(81, __c10, 1) as any as S.Schema<ListIngestConfigurationsRequest>,
  output: __S(84, __c10, 4) as any as S.Schema<ListIngestConfigurationsResponse>,
  errors: [AccessDeniedException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListIngestConfigurations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "ingestConfigurations",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListParticipantEventsError = AccessDeniedException | ValidationException | CommonErrors;
/**
 * Lists events for a specified participant that occurred during a specified stage session.
 */
export const listParticipantEvents: API.PaginatedOperationMethod<
  ListParticipantEventsRequest,
  ListParticipantEventsResponse,
  ListParticipantEventsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(85, __c10, 5) as any as S.Schema<ListParticipantEventsRequest>,
  output: __S(89, __c11, 1) as any as S.Schema<ListParticipantEventsResponse>,
  errors: [AccessDeniedException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListParticipantEvents",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListParticipantReplicasError =
  | AccessDeniedException
  | ValidationException
  | CommonErrors;
/**
 * Lists all the replicas for a participant from a source stage.
 */
export const listParticipantReplicas: API.PaginatedOperationMethod<
  ListParticipantReplicasRequest,
  ListParticipantReplicasResponse,
  ListParticipantReplicasError,
  Credentials | HttpClient.HttpClient,
  ParticipantReplica
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(90, __c11, 2) as any as S.Schema<ListParticipantReplicasRequest>,
  output: __S(93, __c11, 5) as any as S.Schema<ListParticipantReplicasResponse>,
  errors: [AccessDeniedException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListParticipantReplicas",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "replicas",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListParticipantsError = AccessDeniedException | ValidationException | CommonErrors;
/**
 * Lists all participants in a specified stage session.
 */
export const listParticipants: API.PaginatedOperationMethod<
  ListParticipantsRequest,
  ListParticipantsResponse,
  ListParticipantsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(94, __c11, 6) as any as S.Schema<ListParticipantsRequest>,
  output: __S(97, __c12, 1) as any as S.Schema<ListParticipantsResponse>,
  errors: [AccessDeniedException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListParticipants",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListPublicKeysError = AccessDeniedException | ValidationException | CommonErrors;
/**
 * Gets summary information about all public keys in your account, in the AWS region where the API request is processed.
 */
export const listPublicKeys: API.PaginatedOperationMethod<
  ListPublicKeysRequest,
  ListPublicKeysResponse,
  ListPublicKeysError,
  Credentials | HttpClient.HttpClient,
  PublicKeySummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(98, __c12, 2) as any as S.Schema<ListPublicKeysRequest>,
  output: __S(101, __c12, 5) as any as S.Schema<ListPublicKeysResponse>,
  errors: [AccessDeniedException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPublicKeys",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "publicKeys",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListStagesError =
  | AccessDeniedException
  | ConflictException
  | ValidationException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets summary information about all stages in your account, in the AWS region where the API request is processed.
 */
export const listStages: API.PaginatedOperationMethod<
  ListStagesRequest,
  ListStagesResponse,
  ListStagesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(102, __c12, 6) as any as S.Schema<ListStagesRequest>,
  output: __S(105, __c13, 1) as any as S.Schema<ListStagesResponse>,
  errors: [AccessDeniedException, ConflictException, ValidationException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListStages",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListStageSessionsError = AccessDeniedException | ValidationException | CommonErrors;
/**
 * Gets all sessions for a specified stage.
 */
export const listStageSessions: API.PaginatedOperationMethod<
  ListStageSessionsRequest,
  ListStageSessionsResponse,
  ListStageSessionsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(106, __c13, 2) as any as S.Schema<ListStageSessionsRequest>,
  output: __S(108, __c13, 4) as any as S.Schema<ListStageSessionsResponse>,
  errors: [AccessDeniedException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListStageSessions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListStorageConfigurationsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Gets summary information about all storage configurations in your account, in the AWS region where the API request is processed.
 */
export const listStorageConfigurations: API.PaginatedOperationMethod<
  ListStorageConfigurationsRequest,
  ListStorageConfigurationsResponse,
  ListStorageConfigurationsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(109, __c13, 5) as any as S.Schema<ListStorageConfigurationsRequest>,
  output: __S(112, __c14, 0) as any as S.Schema<ListStorageConfigurationsResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListStorageConfigurations",
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
  input: __S(113, __c14, 1) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(114, __c14, 2) as any as S.Schema<ListTagsForResourceResponse>,
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

export type StartCompositionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | PendingVerification
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Starts a Composition from a stage based on the configuration provided in the request.
 *
 * A Composition is an ephemeral resource that exists after this operation returns successfully. Composition stops and the resource is deleted:
 *
 * - When StopComposition is called.
 *
 * - After a 1-minute timeout, when all participants are disconnected from the stage.
 *
 * - After a 1-minute timeout, if there are no participants in the stage when StartComposition is called.
 *
 * - When broadcasting to the IVS channel fails and all retries are exhausted.
 *
 * - When broadcasting is disconnected and all attempts to reconnect are exhausted.
 */
export const startComposition: API.OperationMethod<
  StartCompositionRequest,
  StartCompositionResponse,
  StartCompositionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(116, __c14, 4) as any as S.Schema<StartCompositionRequest>,
  output: __S(54, __c6, 6) as any as S.Schema<StartCompositionResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    PendingVerification,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartComposition",
}));

export type StartParticipantReplicationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | PendingVerification
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Starts replicating a publishing participant from a source stage to a destination stage.
 */
export const startParticipantReplication: API.OperationMethod<
  StartParticipantReplicationRequest,
  StartParticipantReplicationResponse,
  StartParticipantReplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(117, __c14, 5) as any as S.Schema<StartParticipantReplicationRequest>,
  output: __S(118, __c14, 6) as any as S.Schema<StartParticipantReplicationResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    PendingVerification,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartParticipantReplication",
}));

export type StopCompositionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Stops and deletes a Composition resource. Any broadcast from the Composition resource is stopped.
 */
export const stopComposition: API.OperationMethod<
  StopCompositionRequest,
  StopCompositionResponse,
  StopCompositionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(119, __c14, 7) as any as S.Schema<StopCompositionRequest>,
  output: __S(35, __c4, 3) as any as S.Schema<StopCompositionResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopComposition",
}));

export type StopParticipantReplicationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Stops a replicated participant session.
 */
export const stopParticipantReplication: API.OperationMethod<
  StopParticipantReplicationRequest,
  StopParticipantReplicationResponse,
  StopParticipantReplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(120, __c15, 0) as any as S.Schema<StopParticipantReplicationRequest>,
  output: __S(118, __c14, 6) as any as S.Schema<StopParticipantReplicationResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopParticipantReplication",
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
  input: __S(121, __c15, 1) as any as S.Schema<TagResourceRequest>,
  output: __S(35, __c4, 3) as any as S.Schema<TagResourceResponse>,
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
  input: __S(122, __c15, 2) as any as S.Schema<UntagResourceRequest>,
  output: __S(35, __c4, 3) as any as S.Schema<UntagResourceResponse>,
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

export type UpdateIngestConfigurationError =
  | AccessDeniedException
  | ConflictException
  | PendingVerification
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Updates a specified IngestConfiguration. Only the stage ARN attached to the IngestConfiguration can be updated. An IngestConfiguration that is active cannot be updated.
 */
export const updateIngestConfiguration: API.OperationMethod<
  UpdateIngestConfigurationRequest,
  UpdateIngestConfigurationResponse,
  UpdateIngestConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(123, __c15, 3) as any as S.Schema<UpdateIngestConfigurationRequest>,
  output: __S(10, __c1, 2) as any as S.Schema<UpdateIngestConfigurationResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    PendingVerification,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateIngestConfiguration",
}));

export type UpdateStageError =
  | AccessDeniedException
  | ConflictException
  | PendingVerification
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | ThrottlingException
  | CommonErrors;
/**
 * Updates a stage's configuration.
 */
export const updateStage: API.OperationMethod<
  UpdateStageRequest,
  UpdateStageResponse,
  UpdateStageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(124, __c15, 4) as any as S.Schema<UpdateStageRequest>,
  output: __S(65, __c8, 1) as any as S.Schema<UpdateStageResponse>,
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
  operationName: "UpdateStage",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          width: S.optional(S.Number),
          height: S.optional(S.Number),
          framerate: S.optional(S.Number),
          bitrate: S.optional(S.Number),
        }),
      ).annotate({ identifier: "Video" });
    case 1:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 2:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          video: S.optional(__S(0, __c0, 0)),
          tags: S.optional(__S(1, __c0, 1)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/CreateEncoderConfiguration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateEncoderConfigurationRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          name: S.optional(S.String),
          video: S.optional(__S(0, __c0, 0)),
          tags: S.optional(__S(1, __c0, 1)),
        }),
      ).annotate({ identifier: "EncoderConfiguration" });
    case 4:
      return S.suspend(() =>
        S.Struct({ encoderConfiguration: S.optional(__S(3, __c0, 3)) }),
      ).annotate({
        identifier: "CreateEncoderConfigurationResponse",
      });
    case 5:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          stageArn: S.optional(S.String),
          userId: S.optional(S.String),
          attributes: S.optional(__S(5, __c0, 5)),
          ingestProtocol: S.String,
          insecureIngest: S.optional(S.Boolean),
          redundantIngest: S.optional(S.Boolean),
          tags: S.optional(__S(1, __c0, 1)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/CreateIngestConfiguration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateIngestConfigurationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ participantId: S.optional(S.String), streamKey: S.optional(SensitiveString) }),
      ).annotate({
        identifier: "RedundantIngestCredential",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(7, __c0, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          arn: S.String,
          ingestProtocol: S.String,
          streamKey: SensitiveString,
          stageArn: S.String,
          participantId: S.String,
          state: S.String,
          userId: S.optional(S.String),
          redundantIngest: S.optional(S.Boolean),
          redundantIngestCredentials: S.optional(__S(8, __c1, 0)),
          attributes: S.optional(__S(5, __c0, 5)),
          tags: S.optional(__S(1, __c0, 1)),
        }),
      ).annotate({ identifier: "IngestConfiguration" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          accessControlAllowOrigin: S.optional(S.String).pipe(
            T.HttpHeader("Access-Control-Allow-Origin"),
          ),
          accessControlExposeHeaders: S.optional(S.String).pipe(
            T.HttpHeader("Access-Control-Expose-Headers"),
          ),
          cacheControl: S.optional(S.String).pipe(T.HttpHeader("Cache-Control")),
          contentSecurityPolicy: S.optional(S.String).pipe(T.HttpHeader("Content-Security-Policy")),
          strictTransportSecurity: S.optional(S.String).pipe(
            T.HttpHeader("Strict-Transport-Security"),
          ),
          xContentTypeOptions: S.optional(S.String).pipe(T.HttpHeader("X-Content-Type-Options")),
          xFrameOptions: S.optional(S.String).pipe(T.HttpHeader("X-Frame-Options")),
          ingestConfiguration: S.optional(__S(9, __c1, 1)),
        }),
      ).annotate({
        identifier: "CreateIngestConfigurationResponse",
      });
    case 3:
      return S.Array(S.String);
    case 4:
      return S.suspend(() =>
        S.Struct({
          stageArn: S.String,
          duration: S.optional(S.Number),
          userId: S.optional(S.String),
          attributes: S.optional(__S(5, __c0, 5)),
          capabilities: S.optional(__S(11, __c1, 3)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/CreateParticipantToken" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateParticipantTokenRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          participantId: S.optional(S.String),
          token: S.optional(SensitiveString),
          userId: S.optional(S.String),
          attributes: S.optional(__S(5, __c0, 5)),
          duration: S.optional(S.Number),
          capabilities: S.optional(__S(11, __c1, 3)),
          expirationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "ParticipantToken" });
    case 6:
      return S.suspend(() => S.Struct({ participantToken: S.optional(__S(13, __c1, 5)) })).annotate(
        {
          identifier: "CreateParticipantTokenResponse",
        },
      );
    case 7:
      return S.suspend(() =>
        S.Struct({
          duration: S.optional(S.Number),
          userId: S.optional(S.String),
          attributes: S.optional(__S(5, __c0, 5)),
          capabilities: S.optional(__S(11, __c1, 3)),
        }),
      ).annotate({
        identifier: "ParticipantTokenConfiguration",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(15, __c1, 7));
    case 1:
      return S.Array(S.String);
    case 2:
      return S.Array(S.String);
    case 3:
      return S.suspend(() =>
        S.Struct({
          targetIntervalSeconds: S.optional(S.Number),
          storage: S.optional(__S(18, __c2, 2)),
          recordingMode: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ParticipantThumbnailConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ targetSegmentDurationSeconds: S.optional(S.Number) }),
      ).annotate({
        identifier: "ParticipantRecordingHlsConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          storageConfigurationArn: S.String,
          mediaTypes: S.optional(__S(17, __c2, 1)),
          thumbnailConfiguration: S.optional(__S(19, __c2, 3)),
          recordingReconnectWindowSeconds: S.optional(S.Number),
          hlsConfiguration: S.optional(__S(20, __c2, 4)),
          recordParticipantReplicas: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "AutoParticipantRecordingConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          participantTokenConfigurations: S.optional(__S(16, __c2, 0)),
          tags: S.optional(__S(1, __c0, 1)),
          autoParticipantRecordingConfiguration: S.optional(__S(21, __c2, 5)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/CreateStage" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateStageRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          events: S.optional(S.String),
          whip: S.optional(S.String),
          rtmp: S.optional(S.String),
          rtmps: S.optional(S.String),
        }),
      ).annotate({ identifier: "StageEndpoints" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          name: S.optional(S.String),
          activeSessionId: S.optional(S.String),
          tags: S.optional(__S(1, __c0, 1)),
          autoParticipantRecordingConfiguration: S.optional(__S(21, __c2, 5)),
          endpoints: S.optional(__S(23, __c2, 7)),
        }),
      ).annotate({ identifier: "Stage" });
    case 1:
      return S.Array(__S(13, __c1, 5));
    case 2:
      return S.suspend(() =>
        S.Struct({
          stage: S.optional(__S(24, __c3, 0)),
          participantTokens: S.optional(__S(25, __c3, 1)),
        }),
      ).annotate({ identifier: "CreateStageResponse" });
    case 3:
      return S.suspend(() => S.Struct({ bucketName: S.String })).annotate({
        identifier: "S3StorageConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          s3: __S(27, __c3, 3),
          tags: S.optional(__S(1, __c0, 1)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/CreateStorageConfiguration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateStorageConfigurationRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          name: S.optional(S.String),
          s3: S.optional(__S(27, __c3, 3)),
          tags: S.optional(__S(1, __c0, 1)),
        }),
      ).annotate({ identifier: "StorageConfiguration" });
    case 6:
      return S.suspend(() =>
        S.Struct({ storageConfiguration: S.optional(__S(29, __c3, 5)) }),
      ).annotate({
        identifier: "CreateStorageConfigurationResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ arn: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DeleteEncoderConfiguration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteEncoderConfigurationRequest",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteEncoderConfigurationResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ arn: S.String, force: S.optional(S.Boolean) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DeleteIngestConfiguration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteIngestConfigurationRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ arn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/DeletePublicKey" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeletePublicKeyRequest" });
    case 3:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeletePublicKeyResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ arn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/DeleteStage" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteStageRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ arn: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DeleteStorageConfiguration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteStorageConfigurationRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          stageArn: S.String,
          participantId: S.String,
          reason: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DisconnectParticipant" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisconnectParticipantRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ arn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/GetComposition" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetCompositionRequest" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          featuredParticipantAttribute: S.optional(S.String),
          omitStoppedVideo: S.optional(S.Boolean),
          videoAspectRatio: S.optional(S.String),
          videoFillMode: S.optional(S.String),
          gridGap: S.optional(S.Number),
          participantOrderAttribute: S.optional(S.String),
        }),
      ).annotate({ identifier: "GridConfiguration" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          featuredParticipantAttribute: S.optional(S.String),
          omitStoppedVideo: S.optional(S.Boolean),
          videoFillMode: S.optional(S.String),
          gridGap: S.optional(S.Number),
          pipParticipantAttribute: S.optional(S.String),
          pipBehavior: S.optional(S.String),
          pipOffset: S.optional(S.Number),
          pipPosition: S.optional(S.String),
          pipWidth: S.optional(S.Number),
          pipHeight: S.optional(S.Number),
          participantOrderAttribute: S.optional(S.String),
        }),
      ).annotate({ identifier: "PipConfiguration" });
    case 2:
      return S.suspend(() =>
        S.Struct({ grid: S.optional(__S(40, __c5, 0)), pip: S.optional(__S(41, __c5, 1)) }),
      ).annotate({ identifier: "LayoutConfiguration" });
    case 3:
      return S.suspend(() =>
        S.Struct({ channelArn: S.String, encoderConfigurationArn: S.optional(S.String) }),
      ).annotate({
        identifier: "ChannelDestinationConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          hlsConfiguration: S.optional(__S(20, __c2, 4)),
          format: S.optional(S.String),
        }),
      ).annotate({ identifier: "RecordingConfiguration" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          targetIntervalSeconds: S.optional(S.Number),
          storage: S.optional(__S(18, __c2, 2)),
        }),
      ).annotate({
        identifier: "CompositionThumbnailConfiguration",
      });
    case 6:
      return S.Array(__S(45, __c5, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          storageConfigurationArn: S.String,
          encoderConfigurationArns: __S(11, __c1, 3),
          recordingConfiguration: S.optional(__S(44, __c5, 4)),
          thumbnailConfigurations: S.optional(__S(46, __c5, 6)),
        }),
      ).annotate({
        identifier: "S3DestinationConfiguration",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          channel: S.optional(__S(43, __c5, 3)),
          s3: S.optional(__S(47, __c5, 7)),
        }),
      ).annotate({ identifier: "DestinationConfiguration" });
    case 1:
      return S.suspend(() => S.Struct({ recordingPrefix: S.String })).annotate({
        identifier: "S3Detail",
      });
    case 2:
      return S.suspend(() => S.Struct({ s3: S.optional(__S(49, __c6, 1)) })).annotate({
        identifier: "DestinationDetail",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          state: S.String,
          startTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          endTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          configuration: __S(48, __c6, 0),
          detail: S.optional(__S(50, __c6, 2)),
        }),
      ).annotate({ identifier: "Destination" });
    case 4:
      return S.Array(__S(51, __c6, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          stageArn: S.String,
          state: S.String,
          layout: __S(42, __c5, 2),
          destinations: __S(52, __c6, 4),
          tags: S.optional(__S(1, __c0, 1)),
          startTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          endTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "Composition" });
    case 6:
      return S.suspend(() => S.Struct({ composition: S.optional(__S(53, __c6, 5)) })).annotate({
        identifier: "GetCompositionResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ arn: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/GetEncoderConfiguration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetEncoderConfigurationRequest",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ arn: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/GetIngestConfiguration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetIngestConfigurationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ingestConfiguration: S.optional(__S(9, __c1, 1)) }),
      ).annotate({
        identifier: "GetIngestConfigurationResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ stageArn: S.String, sessionId: S.String, participantId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/GetParticipant" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetParticipantRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          participantId: S.optional(S.String),
          userId: S.optional(S.String),
          state: S.optional(S.String),
          firstJoinTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          attributes: S.optional(__S(5, __c0, 5)),
          published: S.optional(S.Boolean),
          ispName: S.optional(S.String),
          osName: S.optional(S.String),
          osVersion: S.optional(S.String),
          browserName: S.optional(S.String),
          browserVersion: S.optional(S.String),
          sdkVersion: S.optional(S.String),
          recordingS3BucketName: S.optional(S.String),
          recordingS3Prefix: S.optional(S.String),
          recordingState: S.optional(S.String),
          protocol: S.optional(S.String),
          replicationType: S.optional(S.String),
          replicationState: S.optional(S.String),
          sourceStageArn: S.optional(S.String),
          sourceSessionId: S.optional(S.String),
          redundantIngest: S.optional(S.Boolean),
          ingestConfigurationArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "Participant" });
    case 4:
      return S.suspend(() => S.Struct({ participant: S.optional(__S(59, __c7, 3)) })).annotate({
        identifier: "GetParticipantResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ arn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/GetPublicKey" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetPublicKeyRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          name: S.optional(S.String),
          publicKeyMaterial: S.optional(S.String),
          fingerprint: S.optional(S.String),
          tags: S.optional(__S(1, __c0, 1)),
        }),
      ).annotate({ identifier: "PublicKey" });
    case 7:
      return S.suspend(() => S.Struct({ publicKey: S.optional(__S(62, __c7, 6)) })).annotate({
        identifier: "GetPublicKeyResponse",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ arn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/GetStage" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetStageRequest" });
    case 1:
      return S.suspend(() => S.Struct({ stage: S.optional(__S(24, __c3, 0)) })).annotate({
        identifier: "GetStageResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ stageArn: S.String, sessionId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/GetStageSession" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetStageSessionRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          sessionId: S.optional(S.String),
          startTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          endTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "StageSession" });
    case 4:
      return S.suspend(() => S.Struct({ stageSession: S.optional(__S(67, __c8, 3)) })).annotate({
        identifier: "GetStageSessionResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ arn: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/GetStorageConfiguration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetStorageConfigurationRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          publicKeyMaterial: S.String,
          name: S.optional(S.String),
          tags: S.optional(__S(1, __c0, 1)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/ImportPublicKey" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ImportPublicKeyRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          filterByStageArn: S.optional(S.String),
          filterByEncoderConfigurationArn: S.optional(S.String),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/ListCompositions" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListCompositionsRequest" });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          state: S.String,
          startTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          endTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "DestinationSummary" });
    case 1:
      return S.Array(__S(72, __c9, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          stageArn: S.String,
          destinations: __S(73, __c9, 1),
          state: S.String,
          tags: S.optional(__S(1, __c0, 1)),
          startTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          endTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "CompositionSummary" });
    case 3:
      return S.Array(__S(74, __c9, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ compositions: __S(75, __c9, 3), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListCompositionsResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), maxResults: S.optional(S.Number) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListEncoderConfigurations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListEncoderConfigurationsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ arn: S.String, name: S.optional(S.String), tags: S.optional(__S(1, __c0, 1)) }),
      ).annotate({
        identifier: "EncoderConfigurationSummary",
      });
    case 7:
      return S.Array(__S(78, __c9, 6));
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          encoderConfigurations: __S(79, __c9, 7),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListEncoderConfigurationsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          filterByStageArn: S.optional(S.String),
          filterByState: S.optional(S.String),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListIngestConfigurations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListIngestConfigurationsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          arn: S.String,
          ingestProtocol: S.String,
          stageArn: S.String,
          participantId: S.String,
          state: S.String,
          userId: S.optional(S.String),
          redundantIngest: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "IngestConfigurationSummary",
      });
    case 3:
      return S.Array(__S(82, __c10, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          ingestConfigurations: __S(83, __c10, 3),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListIngestConfigurationsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          stageArn: S.String,
          sessionId: S.String,
          participantId: S.String,
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListParticipantEvents" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListParticipantEventsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          capabilities: S.optional(__S(11, __c1, 3)),
          attributes: S.optional(__S(5, __c0, 5)),
          userId: S.optional(S.String),
          expirationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "ExchangedParticipantToken",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          participantId: S.optional(S.String),
          eventTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          remoteParticipantId: S.optional(S.String),
          errorCode: S.optional(S.String),
          destinationStageArn: S.optional(S.String),
          destinationSessionId: S.optional(S.String),
          replica: S.optional(S.Boolean),
          previousToken: S.optional(__S(86, __c10, 6)),
          newToken: S.optional(__S(86, __c10, 6)),
        }),
      ).annotate({ identifier: "Event" });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(87, __c10, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({ events: __S(88, __c11, 0), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListParticipantEventsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          sourceStageArn: S.String,
          participantId: S.String,
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListParticipantReplicas" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListParticipantReplicasRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          sourceStageArn: S.String,
          participantId: S.String,
          sourceSessionId: S.String,
          destinationStageArn: S.String,
          destinationSessionId: S.String,
          replicationState: S.String,
        }),
      ).annotate({ identifier: "ParticipantReplica" });
    case 4:
      return S.Array(__S(91, __c11, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({ replicas: __S(92, __c11, 4), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListParticipantReplicasResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          stageArn: S.String,
          sessionId: S.String,
          filterByUserId: S.optional(S.String),
          filterByPublished: S.optional(S.Boolean),
          filterByState: S.optional(S.String),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
          filterByRecordingState: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/ListParticipants" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListParticipantsRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          participantId: S.optional(S.String),
          userId: S.optional(S.String),
          state: S.optional(S.String),
          firstJoinTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          published: S.optional(S.Boolean),
          recordingState: S.optional(S.String),
          replicationType: S.optional(S.String),
          replicationState: S.optional(S.String),
          sourceStageArn: S.optional(S.String),
          sourceSessionId: S.optional(S.String),
          redundantIngest: S.optional(S.Boolean),
          ingestConfigurationArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "ParticipantSummary" });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(95, __c11, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({ participants: __S(96, __c12, 0), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListParticipantsResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), maxResults: S.optional(S.Number) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/ListPublicKeys" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListPublicKeysRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          name: S.optional(S.String),
          tags: S.optional(__S(1, __c0, 1)),
        }),
      ).annotate({ identifier: "PublicKeySummary" });
    case 4:
      return S.Array(__S(99, __c12, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({ publicKeys: __S(100, __c12, 4), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListPublicKeysResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), maxResults: S.optional(S.Number) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/ListStages" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListStagesRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          name: S.optional(S.String),
          activeSessionId: S.optional(S.String),
          tags: S.optional(__S(1, __c0, 1)),
        }),
      ).annotate({ identifier: "StageSummary" });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(103, __c12, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({ stages: __S(104, __c13, 0), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListStagesResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          stageArn: S.String,
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListStageSessions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListStageSessionsRequest" });
    case 3:
      return S.Array(__S(67, __c8, 3));
    case 4:
      return S.suspend(() =>
        S.Struct({ stageSessions: __S(107, __c13, 3), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListStageSessionsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), maxResults: S.optional(S.Number) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListStorageConfigurations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListStorageConfigurationsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          name: S.optional(S.String),
          s3: S.optional(__S(27, __c3, 3)),
          tags: S.optional(__S(1, __c0, 1)),
        }),
      ).annotate({
        identifier: "StorageConfigurationSummary",
      });
    case 7:
      return S.Array(__S(110, __c13, 6));
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          storageConfigurations: __S(111, __c13, 7),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListStorageConfigurationsResponse",
      });
    case 1:
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
    case 2:
      return S.suspend(() => S.Struct({ tags: __S(1, __c0, 1) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 3:
      return S.Array(__S(48, __c6, 0));
    case 4:
      return S.suspend(() =>
        S.Struct({
          stageArn: S.String,
          idempotencyToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          layout: S.optional(__S(42, __c5, 2)),
          destinations: __S(115, __c14, 3),
          tags: S.optional(__S(1, __c0, 1)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/StartComposition" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StartCompositionRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          sourceStageArn: S.String,
          destinationStageArn: S.String,
          participantId: S.String,
          reconnectWindowSeconds: S.optional(S.Number),
          attributes: S.optional(__S(5, __c0, 5)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/StartParticipantReplication" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartParticipantReplicationRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          accessControlAllowOrigin: S.optional(S.String).pipe(
            T.HttpHeader("Access-Control-Allow-Origin"),
          ),
          accessControlExposeHeaders: S.optional(S.String).pipe(
            T.HttpHeader("Access-Control-Expose-Headers"),
          ),
          cacheControl: S.optional(S.String).pipe(T.HttpHeader("Cache-Control")),
          contentSecurityPolicy: S.optional(S.String).pipe(T.HttpHeader("Content-Security-Policy")),
          strictTransportSecurity: S.optional(S.String).pipe(
            T.HttpHeader("Strict-Transport-Security"),
          ),
          xContentTypeOptions: S.optional(S.String).pipe(T.HttpHeader("X-Content-Type-Options")),
          xFrameOptions: S.optional(S.String).pipe(T.HttpHeader("X-Frame-Options")),
        }),
      ).annotate({
        identifier: "StartParticipantReplicationResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ arn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/StopComposition" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StopCompositionRequest" });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          sourceStageArn: S.String,
          destinationStageArn: S.String,
          participantId: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/StopParticipantReplication" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StopParticipantReplicationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tags: __S(1, __c0, 1),
        }).pipe(
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
          tagKeys: __S(11, __c1, 3).pipe(T.HttpQuery("tagKeys")),
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
          arn: S.String,
          stageArn: S.optional(S.String),
          redundantIngest: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/UpdateIngestConfiguration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateIngestConfigurationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          name: S.optional(S.String),
          autoParticipantRecordingConfiguration: S.optional(__S(21, __c2, 5)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/UpdateStage" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdateStageRequest" });
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
