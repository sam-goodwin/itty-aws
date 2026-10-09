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
const Video = /*@__PURE__*/ __L.at(__c0, 0) as any as S.Schema<Video>;
export type TagKey = string;
export type TagValue = string;
export type Tags = { [key: string]: string | undefined };
const Tags = /*@__PURE__*/ __L.at(__c0, 1);
export interface CreateEncoderConfigurationRequest {
  name?: string;
  video?: Video;
  tags?: { [key: string]: string | undefined };
}
const CreateEncoderConfigurationRequest = /*@__PURE__*/ __L.at(
  __c0,
  2,
) as any as S.Schema<CreateEncoderConfigurationRequest>;
export type EncoderConfigurationArn = string;
export interface EncoderConfiguration {
  arn: string;
  name?: string;
  video?: Video;
  tags?: { [key: string]: string | undefined };
}
const EncoderConfiguration = /*@__PURE__*/ __L.at(__c0, 3) as any as S.Schema<EncoderConfiguration>;
export interface CreateEncoderConfigurationResponse {
  encoderConfiguration?: EncoderConfiguration;
}
const CreateEncoderConfigurationResponse = /*@__PURE__*/ __L.at(
  __c0,
  4,
) as any as S.Schema<CreateEncoderConfigurationResponse>;
export type IngestConfigurationName = string;
export type IngestConfigurationStageArn = string;
export type UserId = string;
export type ParticipantAttributes = { [key: string]: string | undefined };
const ParticipantAttributes = /*@__PURE__*/ __L.at(__c0, 5);
export type IngestProtocol = "RTMP" | "RTMPS" | (string & {});
const IngestProtocol = S.String;

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
const CreateIngestConfigurationRequest = /*@__PURE__*/ __L.at(
  __c0,
  6,
) as any as S.Schema<CreateIngestConfigurationRequest>;
export type IngestConfigurationArn = string;
export type StreamKey = string | redacted.Redacted<string>;
export type ParticipantId = string;
export type IngestConfigurationState = string;
export interface RedundantIngestCredential {
  participantId?: string;
  streamKey?: string | redacted.Redacted<string>;
}
const RedundantIngestCredential = /*@__PURE__*/ __L.at(
  __c0,
  7,
) as any as S.Schema<RedundantIngestCredential>;
export type RedundantIngestCredentials = RedundantIngestCredential[];
const RedundantIngestCredentials = /*@__PURE__*/ __L.at(__c1, 0);
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
const IngestConfiguration = /*@__PURE__*/ __L.at(__c1, 1) as any as S.Schema<IngestConfiguration>;
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
const CreateIngestConfigurationResponse = /*@__PURE__*/ __L.at(
  __c1,
  2,
) as any as S.Schema<CreateIngestConfigurationResponse>;
export type StageArn = string;
export type ParticipantTokenDurationMinutes = number;
export type ParticipantTokenUserId = string;
export type ParticipantTokenAttributes = { [key: string]: string | undefined };
const ParticipantTokenAttributes =
  ParticipantAttributes as any as S.Schema<ParticipantTokenAttributes>;
export type ParticipantTokenCapability = string;
export type ParticipantTokenCapabilities = string[];
const ParticipantTokenCapabilities = /*@__PURE__*/ __L.at(__c1, 3);
export interface CreateParticipantTokenRequest {
  stageArn: string;
  duration?: number;
  userId?: string;
  attributes?: { [key: string]: string | undefined };
  capabilities?: string[];
}
const CreateParticipantTokenRequest = /*@__PURE__*/ __L.at(
  __c1,
  4,
) as any as S.Schema<CreateParticipantTokenRequest>;
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
const ParticipantToken = /*@__PURE__*/ __L.at(__c1, 5) as any as S.Schema<ParticipantToken>;
export interface CreateParticipantTokenResponse {
  participantToken?: ParticipantToken;
}
const CreateParticipantTokenResponse = /*@__PURE__*/ __L.at(
  __c1,
  6,
) as any as S.Schema<CreateParticipantTokenResponse>;
export type StageName = string;
export interface ParticipantTokenConfiguration {
  duration?: number;
  userId?: string;
  attributes?: { [key: string]: string | undefined };
  capabilities?: string[];
}
const ParticipantTokenConfiguration = /*@__PURE__*/ __L.at(
  __c1,
  7,
) as any as S.Schema<ParticipantTokenConfiguration>;
export type ParticipantTokenConfigurations = ParticipantTokenConfiguration[];
const ParticipantTokenConfigurations = /*@__PURE__*/ __L.at(__c2, 0);
export type AutoParticipantRecordingStorageConfigurationArn = string;
export type ParticipantRecordingMediaType = "AUDIO_VIDEO" | "AUDIO_ONLY" | "NONE" | (string & {});
const ParticipantRecordingMediaType = S.String;

export type ParticipantRecordingMediaTypeList = ParticipantRecordingMediaType[];
const ParticipantRecordingMediaTypeList = /*@__PURE__*/ __L.at(__c2, 1);
export type ThumbnailIntervalSeconds = number;
export type ThumbnailStorageType = "SEQUENTIAL" | "LATEST" | (string & {});
const ThumbnailStorageType = S.String;

export type ThumbnailStorageTypeList = ThumbnailStorageType[];
const ThumbnailStorageTypeList = /*@__PURE__*/ __L.at(__c2, 2);
export type ThumbnailRecordingMode = "INTERVAL" | "DISABLED" | (string & {});
const ThumbnailRecordingMode = S.String;

export interface ParticipantThumbnailConfiguration {
  targetIntervalSeconds?: number;
  storage?: ThumbnailStorageType[];
  recordingMode?: ThumbnailRecordingMode;
}
const ParticipantThumbnailConfiguration = /*@__PURE__*/ __L.at(
  __c2,
  3,
) as any as S.Schema<ParticipantThumbnailConfiguration>;
export type ParticipantRecordingReconnectWindowSeconds = number;
export type ParticipantRecordingTargetSegmentDurationSeconds = number;
export interface ParticipantRecordingHlsConfiguration {
  targetSegmentDurationSeconds?: number;
}
const ParticipantRecordingHlsConfiguration = /*@__PURE__*/ __L.at(
  __c2,
  4,
) as any as S.Schema<ParticipantRecordingHlsConfiguration>;
export type RecordParticipantReplicas = boolean;
export interface AutoParticipantRecordingConfiguration {
  storageConfigurationArn: string;
  mediaTypes?: ParticipantRecordingMediaType[];
  thumbnailConfiguration?: ParticipantThumbnailConfiguration;
  recordingReconnectWindowSeconds?: number;
  hlsConfiguration?: ParticipantRecordingHlsConfiguration;
  recordParticipantReplicas?: boolean;
}
const AutoParticipantRecordingConfiguration = /*@__PURE__*/ __L.at(
  __c2,
  5,
) as any as S.Schema<AutoParticipantRecordingConfiguration>;
export interface CreateStageRequest {
  name?: string;
  participantTokenConfigurations?: ParticipantTokenConfiguration[];
  tags?: { [key: string]: string | undefined };
  autoParticipantRecordingConfiguration?: AutoParticipantRecordingConfiguration;
}
const CreateStageRequest = /*@__PURE__*/ __L.at(__c2, 6) as any as S.Schema<CreateStageRequest>;
export type StageSessionId = string;
export type StageEndpoint = string;
export interface StageEndpoints {
  events?: string;
  whip?: string;
  rtmp?: string;
  rtmps?: string;
}
const StageEndpoints = /*@__PURE__*/ __L.at(__c2, 7) as any as S.Schema<StageEndpoints>;
export interface Stage {
  arn: string;
  name?: string;
  activeSessionId?: string;
  tags?: { [key: string]: string | undefined };
  autoParticipantRecordingConfiguration?: AutoParticipantRecordingConfiguration;
  endpoints?: StageEndpoints;
}
const Stage = /*@__PURE__*/ __L.at(__c3, 0) as any as S.Schema<Stage>;
export type ParticipantTokenList = ParticipantToken[];
const ParticipantTokenList = /*@__PURE__*/ __L.at(__c3, 1);
export interface CreateStageResponse {
  stage?: Stage;
  participantTokens?: ParticipantToken[];
}
const CreateStageResponse = /*@__PURE__*/ __L.at(__c3, 2) as any as S.Schema<CreateStageResponse>;
export type StorageConfigurationName = string;
export type S3BucketName = string;
export interface S3StorageConfiguration {
  bucketName: string;
}
const S3StorageConfiguration = /*@__PURE__*/ __L.at(
  __c3,
  3,
) as any as S.Schema<S3StorageConfiguration>;
export interface CreateStorageConfigurationRequest {
  name?: string;
  s3: S3StorageConfiguration;
  tags?: { [key: string]: string | undefined };
}
const CreateStorageConfigurationRequest = /*@__PURE__*/ __L.at(
  __c3,
  4,
) as any as S.Schema<CreateStorageConfigurationRequest>;
export type StorageConfigurationArn = string;
export interface StorageConfiguration {
  arn: string;
  name?: string;
  s3?: S3StorageConfiguration;
  tags?: { [key: string]: string | undefined };
}
const StorageConfiguration = /*@__PURE__*/ __L.at(__c3, 5) as any as S.Schema<StorageConfiguration>;
export interface CreateStorageConfigurationResponse {
  storageConfiguration?: StorageConfiguration;
}
const CreateStorageConfigurationResponse = /*@__PURE__*/ __L.at(
  __c3,
  6,
) as any as S.Schema<CreateStorageConfigurationResponse>;
export interface DeleteEncoderConfigurationRequest {
  arn: string;
}
const DeleteEncoderConfigurationRequest = /*@__PURE__*/ __L.at(
  __c3,
  7,
) as any as S.Schema<DeleteEncoderConfigurationRequest>;
export interface DeleteEncoderConfigurationResponse {}
const DeleteEncoderConfigurationResponse = /*@__PURE__*/ __L.at(
  __c4,
  0,
) as any as S.Schema<DeleteEncoderConfigurationResponse>;
export interface DeleteIngestConfigurationRequest {
  arn: string;
  force?: boolean;
}
const DeleteIngestConfigurationRequest = /*@__PURE__*/ __L.at(
  __c4,
  1,
) as any as S.Schema<DeleteIngestConfigurationRequest>;
export interface DeleteIngestConfigurationResponse {}
const DeleteIngestConfigurationResponse =
  DeleteEncoderConfigurationResponse as any as S.Schema<DeleteIngestConfigurationResponse>;
export type PublicKeyArn = string;
export interface DeletePublicKeyRequest {
  arn: string;
}
const DeletePublicKeyRequest = /*@__PURE__*/ __L.at(
  __c4,
  2,
) as any as S.Schema<DeletePublicKeyRequest>;
export interface DeletePublicKeyResponse {}
const DeletePublicKeyResponse = /*@__PURE__*/ __L.at(
  __c4,
  3,
) as any as S.Schema<DeletePublicKeyResponse>;
export interface DeleteStageRequest {
  arn: string;
}
const DeleteStageRequest = /*@__PURE__*/ __L.at(__c4, 4) as any as S.Schema<DeleteStageRequest>;
export interface DeleteStageResponse {}
const DeleteStageResponse = DeletePublicKeyResponse as any as S.Schema<DeleteStageResponse>;
export interface DeleteStorageConfigurationRequest {
  arn: string;
}
const DeleteStorageConfigurationRequest = /*@__PURE__*/ __L.at(
  __c4,
  5,
) as any as S.Schema<DeleteStorageConfigurationRequest>;
export interface DeleteStorageConfigurationResponse {}
const DeleteStorageConfigurationResponse =
  DeleteEncoderConfigurationResponse as any as S.Schema<DeleteStorageConfigurationResponse>;
export type DisconnectParticipantReason = string;
export interface DisconnectParticipantRequest {
  stageArn: string;
  participantId: string;
  reason?: string;
}
const DisconnectParticipantRequest = /*@__PURE__*/ __L.at(
  __c4,
  6,
) as any as S.Schema<DisconnectParticipantRequest>;
export interface DisconnectParticipantResponse {}
const DisconnectParticipantResponse =
  DeletePublicKeyResponse as any as S.Schema<DisconnectParticipantResponse>;
export type CompositionArn = string;
export interface GetCompositionRequest {
  arn: string;
}
const GetCompositionRequest = /*@__PURE__*/ __L.at(
  __c4,
  7,
) as any as S.Schema<GetCompositionRequest>;
export type CompositionState = string;
export type AttributeKey = string;
export type OmitStoppedVideo = boolean;
export type VideoAspectRatio = "AUTO" | "VIDEO" | "SQUARE" | "PORTRAIT" | (string & {});
const VideoAspectRatio = S.String;

export type VideoFillMode = "FILL" | "COVER" | "CONTAIN" | (string & {});
const VideoFillMode = S.String;

export type GridGap = number;
export interface GridConfiguration {
  featuredParticipantAttribute?: string;
  omitStoppedVideo?: boolean;
  videoAspectRatio?: VideoAspectRatio;
  videoFillMode?: VideoFillMode;
  gridGap?: number;
  participantOrderAttribute?: string;
}
const GridConfiguration = /*@__PURE__*/ __L.at(__c5, 0) as any as S.Schema<GridConfiguration>;
export type PipBehavior = "STATIC" | "DYNAMIC" | (string & {});
const PipBehavior = S.String;

export type PipOffset = number;
export type PipPosition = "TOP_LEFT" | "TOP_RIGHT" | "BOTTOM_LEFT" | "BOTTOM_RIGHT" | (string & {});
const PipPosition = S.String;

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
const PipConfiguration = /*@__PURE__*/ __L.at(__c5, 1) as any as S.Schema<PipConfiguration>;
export interface LayoutConfiguration {
  grid?: GridConfiguration;
  pip?: PipConfiguration;
}
const LayoutConfiguration = /*@__PURE__*/ __L.at(__c5, 2) as any as S.Schema<LayoutConfiguration>;
export type DestinationState = string;
export type DestinationConfigurationName = string;
export type ChannelArn = string;
export interface ChannelDestinationConfiguration {
  channelArn: string;
  encoderConfigurationArn?: string;
}
const ChannelDestinationConfiguration = /*@__PURE__*/ __L.at(
  __c5,
  3,
) as any as S.Schema<ChannelDestinationConfiguration>;
export type EncoderConfigurationArnList = string[];
const EncoderConfigurationArnList =
  ParticipantTokenCapabilities as any as S.Schema<EncoderConfigurationArnList>;
export type CompositionRecordingTargetSegmentDurationSeconds = number;
export interface CompositionRecordingHlsConfiguration {
  targetSegmentDurationSeconds?: number;
}
const CompositionRecordingHlsConfiguration =
  ParticipantRecordingHlsConfiguration as any as S.Schema<CompositionRecordingHlsConfiguration>;
export type RecordingConfigurationFormat = string;
export interface RecordingConfiguration {
  hlsConfiguration?: CompositionRecordingHlsConfiguration;
  format?: string;
}
const RecordingConfiguration = /*@__PURE__*/ __L.at(
  __c5,
  4,
) as any as S.Schema<RecordingConfiguration>;
export interface CompositionThumbnailConfiguration {
  targetIntervalSeconds?: number;
  storage?: ThumbnailStorageType[];
}
const CompositionThumbnailConfiguration = /*@__PURE__*/ __L.at(
  __c5,
  5,
) as any as S.Schema<CompositionThumbnailConfiguration>;
export type CompositionThumbnailConfigurationList = CompositionThumbnailConfiguration[];
const CompositionThumbnailConfigurationList = /*@__PURE__*/ __L.at(__c5, 6);
export interface S3DestinationConfiguration {
  storageConfigurationArn: string;
  encoderConfigurationArns: string[];
  recordingConfiguration?: RecordingConfiguration;
  thumbnailConfigurations?: CompositionThumbnailConfiguration[];
}
const S3DestinationConfiguration = /*@__PURE__*/ __L.at(
  __c5,
  7,
) as any as S.Schema<S3DestinationConfiguration>;
export interface DestinationConfiguration {
  name?: string;
  channel?: ChannelDestinationConfiguration;
  s3?: S3DestinationConfiguration;
}
const DestinationConfiguration = /*@__PURE__*/ __L.at(
  __c6,
  0,
) as any as S.Schema<DestinationConfiguration>;
export interface S3Detail {
  recordingPrefix: string;
}
const S3Detail = /*@__PURE__*/ __L.at(__c6, 1) as any as S.Schema<S3Detail>;
export interface DestinationDetail {
  s3?: S3Detail;
}
const DestinationDetail = /*@__PURE__*/ __L.at(__c6, 2) as any as S.Schema<DestinationDetail>;
export interface Destination {
  id: string;
  state: string;
  startTime?: Date;
  endTime?: Date;
  configuration: DestinationConfiguration;
  detail?: DestinationDetail;
}
const Destination = /*@__PURE__*/ __L.at(__c6, 3) as any as S.Schema<Destination>;
export type DestinationList = Destination[];
const DestinationList = /*@__PURE__*/ __L.at(__c6, 4);
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
const Composition = /*@__PURE__*/ __L.at(__c6, 5) as any as S.Schema<Composition>;
export interface GetCompositionResponse {
  composition?: Composition;
}
const GetCompositionResponse = /*@__PURE__*/ __L.at(
  __c6,
  6,
) as any as S.Schema<GetCompositionResponse>;
export interface GetEncoderConfigurationRequest {
  arn: string;
}
const GetEncoderConfigurationRequest = /*@__PURE__*/ __L.at(
  __c6,
  7,
) as any as S.Schema<GetEncoderConfigurationRequest>;
export interface GetEncoderConfigurationResponse {
  encoderConfiguration?: EncoderConfiguration;
}
const GetEncoderConfigurationResponse =
  CreateEncoderConfigurationResponse as any as S.Schema<GetEncoderConfigurationResponse>;
export interface GetIngestConfigurationRequest {
  arn: string;
}
const GetIngestConfigurationRequest = /*@__PURE__*/ __L.at(
  __c7,
  0,
) as any as S.Schema<GetIngestConfigurationRequest>;
export interface GetIngestConfigurationResponse {
  ingestConfiguration?: IngestConfiguration;
}
const GetIngestConfigurationResponse = /*@__PURE__*/ __L.at(
  __c7,
  1,
) as any as S.Schema<GetIngestConfigurationResponse>;
export interface GetParticipantRequest {
  stageArn: string;
  sessionId: string;
  participantId: string;
}
const GetParticipantRequest = /*@__PURE__*/ __L.at(
  __c7,
  2,
) as any as S.Schema<GetParticipantRequest>;
export type ParticipantState = string;
export type Published = boolean;
export type ParticipantClientAttribute = string;
export type ParticipantRecordingS3BucketName = string;
export type ParticipantRecordingS3Prefix = string;
export type ParticipantRecordingState = string;
export type ParticipantProtocol = "UNKNOWN" | "WHIP" | "RTMP" | "RTMPS" | (string & {});
const ParticipantProtocol = S.String;

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
const Participant = /*@__PURE__*/ __L.at(__c7, 3) as any as S.Schema<Participant>;
export interface GetParticipantResponse {
  participant?: Participant;
}
const GetParticipantResponse = /*@__PURE__*/ __L.at(
  __c7,
  4,
) as any as S.Schema<GetParticipantResponse>;
export interface GetPublicKeyRequest {
  arn: string;
}
const GetPublicKeyRequest = /*@__PURE__*/ __L.at(__c7, 5) as any as S.Schema<GetPublicKeyRequest>;
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
const PublicKey = /*@__PURE__*/ __L.at(__c7, 6) as any as S.Schema<PublicKey>;
export interface GetPublicKeyResponse {
  publicKey?: PublicKey;
}
const GetPublicKeyResponse = /*@__PURE__*/ __L.at(__c7, 7) as any as S.Schema<GetPublicKeyResponse>;
export interface GetStageRequest {
  arn: string;
}
const GetStageRequest = /*@__PURE__*/ __L.at(__c8, 0) as any as S.Schema<GetStageRequest>;
export interface GetStageResponse {
  stage?: Stage;
}
const GetStageResponse = /*@__PURE__*/ __L.at(__c8, 1) as any as S.Schema<GetStageResponse>;
export interface GetStageSessionRequest {
  stageArn: string;
  sessionId: string;
}
const GetStageSessionRequest = /*@__PURE__*/ __L.at(
  __c8,
  2,
) as any as S.Schema<GetStageSessionRequest>;
export interface StageSession {
  sessionId?: string;
  startTime?: Date;
  endTime?: Date;
}
const StageSession = /*@__PURE__*/ __L.at(__c8, 3) as any as S.Schema<StageSession>;
export interface GetStageSessionResponse {
  stageSession?: StageSession;
}
const GetStageSessionResponse = /*@__PURE__*/ __L.at(
  __c8,
  4,
) as any as S.Schema<GetStageSessionResponse>;
export interface GetStorageConfigurationRequest {
  arn: string;
}
const GetStorageConfigurationRequest = /*@__PURE__*/ __L.at(
  __c8,
  5,
) as any as S.Schema<GetStorageConfigurationRequest>;
export interface GetStorageConfigurationResponse {
  storageConfiguration?: StorageConfiguration;
}
const GetStorageConfigurationResponse =
  CreateStorageConfigurationResponse as any as S.Schema<GetStorageConfigurationResponse>;
export interface ImportPublicKeyRequest {
  publicKeyMaterial: string;
  name?: string;
  tags?: { [key: string]: string | undefined };
}
const ImportPublicKeyRequest = /*@__PURE__*/ __L.at(
  __c8,
  6,
) as any as S.Schema<ImportPublicKeyRequest>;
export interface ImportPublicKeyResponse {
  publicKey?: PublicKey;
}
const ImportPublicKeyResponse = GetPublicKeyResponse as any as S.Schema<ImportPublicKeyResponse>;
export type PaginationToken = string;
export type MaxCompositionResults = number;
export interface ListCompositionsRequest {
  filterByStageArn?: string;
  filterByEncoderConfigurationArn?: string;
  nextToken?: string;
  maxResults?: number;
}
const ListCompositionsRequest = /*@__PURE__*/ __L.at(
  __c8,
  7,
) as any as S.Schema<ListCompositionsRequest>;
export interface DestinationSummary {
  id: string;
  state: string;
  startTime?: Date;
  endTime?: Date;
}
const DestinationSummary = /*@__PURE__*/ __L.at(__c9, 0) as any as S.Schema<DestinationSummary>;
export type DestinationSummaryList = DestinationSummary[];
const DestinationSummaryList = /*@__PURE__*/ __L.at(__c9, 1);
export interface CompositionSummary {
  arn: string;
  stageArn: string;
  destinations: DestinationSummary[];
  state: string;
  tags?: { [key: string]: string | undefined };
  startTime?: Date;
  endTime?: Date;
}
const CompositionSummary = /*@__PURE__*/ __L.at(__c9, 2) as any as S.Schema<CompositionSummary>;
export type CompositionSummaryList = CompositionSummary[];
const CompositionSummaryList = /*@__PURE__*/ __L.at(__c9, 3);
export interface ListCompositionsResponse {
  compositions: CompositionSummary[];
  nextToken?: string;
}
const ListCompositionsResponse = /*@__PURE__*/ __L.at(
  __c9,
  4,
) as any as S.Schema<ListCompositionsResponse>;
export type MaxEncoderConfigurationResults = number;
export interface ListEncoderConfigurationsRequest {
  nextToken?: string;
  maxResults?: number;
}
const ListEncoderConfigurationsRequest = /*@__PURE__*/ __L.at(
  __c9,
  5,
) as any as S.Schema<ListEncoderConfigurationsRequest>;
export interface EncoderConfigurationSummary {
  arn: string;
  name?: string;
  tags?: { [key: string]: string | undefined };
}
const EncoderConfigurationSummary = /*@__PURE__*/ __L.at(
  __c9,
  6,
) as any as S.Schema<EncoderConfigurationSummary>;
export type EncoderConfigurationSummaryList = EncoderConfigurationSummary[];
const EncoderConfigurationSummaryList = /*@__PURE__*/ __L.at(__c9, 7);
export interface ListEncoderConfigurationsResponse {
  encoderConfigurations: EncoderConfigurationSummary[];
  nextToken?: string;
}
const ListEncoderConfigurationsResponse = /*@__PURE__*/ __L.at(
  __c10,
  0,
) as any as S.Schema<ListEncoderConfigurationsResponse>;
export type MaxIngestConfigurationResults = number;
export interface ListIngestConfigurationsRequest {
  filterByStageArn?: string;
  filterByState?: string;
  nextToken?: string;
  maxResults?: number;
}
const ListIngestConfigurationsRequest = /*@__PURE__*/ __L.at(
  __c10,
  1,
) as any as S.Schema<ListIngestConfigurationsRequest>;
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
const IngestConfigurationSummary = /*@__PURE__*/ __L.at(
  __c10,
  2,
) as any as S.Schema<IngestConfigurationSummary>;
export type IngestConfigurationList = IngestConfigurationSummary[];
const IngestConfigurationList = /*@__PURE__*/ __L.at(__c10, 3);
export interface ListIngestConfigurationsResponse {
  ingestConfigurations: IngestConfigurationSummary[];
  nextToken?: string;
}
const ListIngestConfigurationsResponse = /*@__PURE__*/ __L.at(
  __c10,
  4,
) as any as S.Schema<ListIngestConfigurationsResponse>;
export type MaxParticipantEventResults = number;
export interface ListParticipantEventsRequest {
  stageArn: string;
  sessionId: string;
  participantId: string;
  nextToken?: string;
  maxResults?: number;
}
const ListParticipantEventsRequest = /*@__PURE__*/ __L.at(
  __c10,
  5,
) as any as S.Schema<ListParticipantEventsRequest>;
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
const EventErrorCode = S.String;

export type Replica = boolean;
export interface ExchangedParticipantToken {
  capabilities?: string[];
  attributes?: { [key: string]: string | undefined };
  userId?: string;
  expirationTime?: Date;
}
const ExchangedParticipantToken = /*@__PURE__*/ __L.at(
  __c10,
  6,
) as any as S.Schema<ExchangedParticipantToken>;
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
const Event = /*@__PURE__*/ __L.at(__c10, 7) as any as S.Schema<Event>;
export type EventList = Event[];
const EventList = /*@__PURE__*/ __L.at(__c11, 0);
export interface ListParticipantEventsResponse {
  events: Event[];
  nextToken?: string;
}
const ListParticipantEventsResponse = /*@__PURE__*/ __L.at(
  __c11,
  1,
) as any as S.Schema<ListParticipantEventsResponse>;
export type MaxParticipantReplicaResults = number;
export interface ListParticipantReplicasRequest {
  sourceStageArn: string;
  participantId: string;
  nextToken?: string;
  maxResults?: number;
}
const ListParticipantReplicasRequest = /*@__PURE__*/ __L.at(
  __c11,
  2,
) as any as S.Schema<ListParticipantReplicasRequest>;
export interface ParticipantReplica {
  sourceStageArn: string;
  participantId: string;
  sourceSessionId: string;
  destinationStageArn: string;
  destinationSessionId: string;
  replicationState: string;
}
const ParticipantReplica = /*@__PURE__*/ __L.at(__c11, 3) as any as S.Schema<ParticipantReplica>;
export type ParticipantReplicaList = ParticipantReplica[];
const ParticipantReplicaList = /*@__PURE__*/ __L.at(__c11, 4);
export interface ListParticipantReplicasResponse {
  replicas: ParticipantReplica[];
  nextToken?: string;
}
const ListParticipantReplicasResponse = /*@__PURE__*/ __L.at(
  __c11,
  5,
) as any as S.Schema<ListParticipantReplicasResponse>;
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
const ListParticipantsRequest = /*@__PURE__*/ __L.at(
  __c11,
  6,
) as any as S.Schema<ListParticipantsRequest>;
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
const ParticipantSummary = /*@__PURE__*/ __L.at(__c11, 7) as any as S.Schema<ParticipantSummary>;
export type ParticipantList = ParticipantSummary[];
const ParticipantList = /*@__PURE__*/ __L.at(__c12, 0);
export interface ListParticipantsResponse {
  participants: ParticipantSummary[];
  nextToken?: string;
}
const ListParticipantsResponse = /*@__PURE__*/ __L.at(
  __c12,
  1,
) as any as S.Schema<ListParticipantsResponse>;
export type MaxPublicKeyResults = number;
export interface ListPublicKeysRequest {
  nextToken?: string;
  maxResults?: number;
}
const ListPublicKeysRequest = /*@__PURE__*/ __L.at(
  __c12,
  2,
) as any as S.Schema<ListPublicKeysRequest>;
export interface PublicKeySummary {
  arn?: string;
  name?: string;
  tags?: { [key: string]: string | undefined };
}
const PublicKeySummary = /*@__PURE__*/ __L.at(__c12, 3) as any as S.Schema<PublicKeySummary>;
export type PublicKeyList = PublicKeySummary[];
const PublicKeyList = /*@__PURE__*/ __L.at(__c12, 4);
export interface ListPublicKeysResponse {
  publicKeys: PublicKeySummary[];
  nextToken?: string;
}
const ListPublicKeysResponse = /*@__PURE__*/ __L.at(
  __c12,
  5,
) as any as S.Schema<ListPublicKeysResponse>;
export type MaxStageResults = number;
export interface ListStagesRequest {
  nextToken?: string;
  maxResults?: number;
}
const ListStagesRequest = /*@__PURE__*/ __L.at(__c12, 6) as any as S.Schema<ListStagesRequest>;
export interface StageSummary {
  arn: string;
  name?: string;
  activeSessionId?: string;
  tags?: { [key: string]: string | undefined };
}
const StageSummary = /*@__PURE__*/ __L.at(__c12, 7) as any as S.Schema<StageSummary>;
export type StageSummaryList = StageSummary[];
const StageSummaryList = /*@__PURE__*/ __L.at(__c13, 0);
export interface ListStagesResponse {
  stages: StageSummary[];
  nextToken?: string;
}
const ListStagesResponse = /*@__PURE__*/ __L.at(__c13, 1) as any as S.Schema<ListStagesResponse>;
export type MaxStageSessionResults = number;
export interface ListStageSessionsRequest {
  stageArn: string;
  nextToken?: string;
  maxResults?: number;
}
const ListStageSessionsRequest = /*@__PURE__*/ __L.at(
  __c13,
  2,
) as any as S.Schema<ListStageSessionsRequest>;
export interface StageSessionSummary {
  sessionId?: string;
  startTime?: Date;
  endTime?: Date;
}
const StageSessionSummary = StageSession as any as S.Schema<StageSessionSummary>;
export type StageSessionList = StageSessionSummary[];
const StageSessionList = /*@__PURE__*/ __L.at(__c13, 3);
export interface ListStageSessionsResponse {
  stageSessions: StageSessionSummary[];
  nextToken?: string;
}
const ListStageSessionsResponse = /*@__PURE__*/ __L.at(
  __c13,
  4,
) as any as S.Schema<ListStageSessionsResponse>;
export type MaxStorageConfigurationResults = number;
export interface ListStorageConfigurationsRequest {
  nextToken?: string;
  maxResults?: number;
}
const ListStorageConfigurationsRequest = /*@__PURE__*/ __L.at(
  __c13,
  5,
) as any as S.Schema<ListStorageConfigurationsRequest>;
export interface StorageConfigurationSummary {
  arn: string;
  name?: string;
  s3?: S3StorageConfiguration;
  tags?: { [key: string]: string | undefined };
}
const StorageConfigurationSummary = /*@__PURE__*/ __L.at(
  __c13,
  6,
) as any as S.Schema<StorageConfigurationSummary>;
export type StorageConfigurationSummaryList = StorageConfigurationSummary[];
const StorageConfigurationSummaryList = /*@__PURE__*/ __L.at(__c13, 7);
export interface ListStorageConfigurationsResponse {
  storageConfigurations: StorageConfigurationSummary[];
  nextToken?: string;
}
const ListStorageConfigurationsResponse = /*@__PURE__*/ __L.at(
  __c14,
  0,
) as any as S.Schema<ListStorageConfigurationsResponse>;
export type ResourceArn = string;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c14,
  1,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  tags: { [key: string]: string | undefined };
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c14,
  2,
) as any as S.Schema<ListTagsForResourceResponse>;
export type CompositionClientToken = string;
export type DestinationConfigurationList = DestinationConfiguration[];
const DestinationConfigurationList = /*@__PURE__*/ __L.at(__c14, 3);
export interface StartCompositionRequest {
  stageArn: string;
  idempotencyToken?: string;
  layout?: LayoutConfiguration;
  destinations: DestinationConfiguration[];
  tags?: { [key: string]: string | undefined };
}
const StartCompositionRequest = /*@__PURE__*/ __L.at(
  __c14,
  4,
) as any as S.Schema<StartCompositionRequest>;
export interface StartCompositionResponse {
  composition?: Composition;
}
const StartCompositionResponse =
  GetCompositionResponse as any as S.Schema<StartCompositionResponse>;
export type ReconnectWindowSeconds = number;
export interface StartParticipantReplicationRequest {
  sourceStageArn: string;
  destinationStageArn: string;
  participantId: string;
  reconnectWindowSeconds?: number;
  attributes?: { [key: string]: string | undefined };
}
const StartParticipantReplicationRequest = /*@__PURE__*/ __L.at(
  __c14,
  5,
) as any as S.Schema<StartParticipantReplicationRequest>;
export interface StartParticipantReplicationResponse {
  accessControlAllowOrigin?: string;
  accessControlExposeHeaders?: string;
  cacheControl?: string;
  contentSecurityPolicy?: string;
  strictTransportSecurity?: string;
  xContentTypeOptions?: string;
  xFrameOptions?: string;
}
const StartParticipantReplicationResponse = /*@__PURE__*/ __L.at(
  __c14,
  6,
) as any as S.Schema<StartParticipantReplicationResponse>;
export interface StopCompositionRequest {
  arn: string;
}
const StopCompositionRequest = /*@__PURE__*/ __L.at(
  __c14,
  7,
) as any as S.Schema<StopCompositionRequest>;
export interface StopCompositionResponse {}
const StopCompositionResponse = DeletePublicKeyResponse as any as S.Schema<StopCompositionResponse>;
export interface StopParticipantReplicationRequest {
  sourceStageArn: string;
  destinationStageArn: string;
  participantId: string;
}
const StopParticipantReplicationRequest = /*@__PURE__*/ __L.at(
  __c15,
  0,
) as any as S.Schema<StopParticipantReplicationRequest>;
export interface StopParticipantReplicationResponse {
  accessControlAllowOrigin?: string;
  accessControlExposeHeaders?: string;
  cacheControl?: string;
  contentSecurityPolicy?: string;
  strictTransportSecurity?: string;
  xContentTypeOptions?: string;
  xFrameOptions?: string;
}
const StopParticipantReplicationResponse =
  StartParticipantReplicationResponse as any as S.Schema<StopParticipantReplicationResponse>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c15, 1) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = DeletePublicKeyResponse as any as S.Schema<TagResourceResponse>;
export type TagKeyList = string[];
const TagKeyList = ParticipantTokenCapabilities as any as S.Schema<TagKeyList>;
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(
  __c15,
  2,
) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse = DeletePublicKeyResponse as any as S.Schema<UntagResourceResponse>;
export interface UpdateIngestConfigurationRequest {
  arn: string;
  stageArn?: string;
  redundantIngest?: boolean;
}
const UpdateIngestConfigurationRequest = /*@__PURE__*/ __L.at(
  __c15,
  3,
) as any as S.Schema<UpdateIngestConfigurationRequest>;
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
const UpdateIngestConfigurationResponse =
  CreateIngestConfigurationResponse as any as S.Schema<UpdateIngestConfigurationResponse>;
export interface UpdateStageRequest {
  arn: string;
  name?: string;
  autoParticipantRecordingConfiguration?: AutoParticipantRecordingConfiguration;
}
const UpdateStageRequest = /*@__PURE__*/ __L.at(__c15, 4) as any as S.Schema<UpdateStageRequest>;
export interface UpdateStageResponse {
  stage?: Stage;
}
const UpdateStageResponse = GetStageResponse as any as S.Schema<UpdateStageResponse>;
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
  input: CreateEncoderConfigurationRequest,
  output: CreateEncoderConfigurationResponse,
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
  input: CreateIngestConfigurationRequest,
  output: CreateIngestConfigurationResponse,
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
  input: CreateParticipantTokenRequest,
  output: CreateParticipantTokenResponse,
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
  input: CreateStageRequest,
  output: CreateStageResponse,
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
  input: CreateStorageConfigurationRequest,
  output: CreateStorageConfigurationResponse,
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
  input: DeleteEncoderConfigurationRequest,
  output: DeleteEncoderConfigurationResponse,
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
  input: DeleteIngestConfigurationRequest,
  output: DeleteIngestConfigurationResponse,
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
  input: DeletePublicKeyRequest,
  output: DeletePublicKeyResponse,
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
  input: DeleteStageRequest,
  output: DeleteStageResponse,
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
  input: DeleteStorageConfigurationRequest,
  output: DeleteStorageConfigurationResponse,
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
  input: DisconnectParticipantRequest,
  output: DisconnectParticipantResponse,
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
  input: GetCompositionRequest,
  output: GetCompositionResponse,
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
  input: GetEncoderConfigurationRequest,
  output: GetEncoderConfigurationResponse,
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
  input: GetIngestConfigurationRequest,
  output: GetIngestConfigurationResponse,
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
  input: GetParticipantRequest,
  output: GetParticipantResponse,
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
  input: GetPublicKeyRequest,
  output: GetPublicKeyResponse,
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
  input: GetStageRequest,
  output: GetStageResponse,
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
  input: GetStageSessionRequest,
  output: GetStageSessionResponse,
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
  input: GetStorageConfigurationRequest,
  output: GetStorageConfigurationResponse,
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
  input: ImportPublicKeyRequest,
  output: ImportPublicKeyResponse,
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
  input: ListCompositionsRequest,
  output: ListCompositionsResponse,
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
  input: ListEncoderConfigurationsRequest,
  output: ListEncoderConfigurationsResponse,
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
  input: ListIngestConfigurationsRequest,
  output: ListIngestConfigurationsResponse,
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
  input: ListParticipantEventsRequest,
  output: ListParticipantEventsResponse,
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
  input: ListParticipantReplicasRequest,
  output: ListParticipantReplicasResponse,
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
  input: ListParticipantsRequest,
  output: ListParticipantsResponse,
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
  input: ListPublicKeysRequest,
  output: ListPublicKeysResponse,
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
  input: ListStagesRequest,
  output: ListStagesResponse,
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
  input: ListStageSessionsRequest,
  output: ListStageSessionsResponse,
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
  input: ListStorageConfigurationsRequest,
  output: ListStorageConfigurationsResponse,
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
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResponse,
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
  input: StartCompositionRequest,
  output: StartCompositionResponse,
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
  input: StartParticipantReplicationRequest,
  output: StartParticipantReplicationResponse,
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
  input: StopCompositionRequest,
  output: StopCompositionResponse,
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
  input: StopParticipantReplicationRequest,
  output: StopParticipantReplicationResponse,
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
  input: TagResourceRequest,
  output: TagResourceResponse,
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
  input: UntagResourceRequest,
  output: UntagResourceResponse,
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
  input: UpdateIngestConfigurationRequest,
  output: UpdateIngestConfigurationResponse,
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
  input: UpdateStageRequest,
  output: UpdateStageResponse,
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
          video: S.optional(Video),
          tags: S.optional(Tags),
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
          video: S.optional(Video),
          tags: S.optional(Tags),
        }),
      ).annotate({ identifier: "EncoderConfiguration" });
    case 4:
      return S.suspend(() =>
        S.Struct({ encoderConfiguration: S.optional(EncoderConfiguration) }),
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
          attributes: S.optional(ParticipantAttributes),
          ingestProtocol: IngestProtocol,
          insecureIngest: S.optional(S.Boolean),
          redundantIngest: S.optional(S.Boolean),
          tags: S.optional(Tags),
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
      return S.Array(RedundantIngestCredential);
    case 1:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          arn: S.String,
          ingestProtocol: IngestProtocol,
          streamKey: SensitiveString,
          stageArn: S.String,
          participantId: S.String,
          state: S.String,
          userId: S.optional(S.String),
          redundantIngest: S.optional(S.Boolean),
          redundantIngestCredentials: S.optional(RedundantIngestCredentials),
          attributes: S.optional(ParticipantAttributes),
          tags: S.optional(Tags),
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
          ingestConfiguration: S.optional(IngestConfiguration),
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
          attributes: S.optional(ParticipantTokenAttributes),
          capabilities: S.optional(ParticipantTokenCapabilities),
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
          attributes: S.optional(ParticipantTokenAttributes),
          duration: S.optional(S.Number),
          capabilities: S.optional(ParticipantTokenCapabilities),
          expirationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "ParticipantToken" });
    case 6:
      return S.suspend(() => S.Struct({ participantToken: S.optional(ParticipantToken) })).annotate(
        {
          identifier: "CreateParticipantTokenResponse",
        },
      );
    case 7:
      return S.suspend(() =>
        S.Struct({
          duration: S.optional(S.Number),
          userId: S.optional(S.String),
          attributes: S.optional(ParticipantTokenAttributes),
          capabilities: S.optional(ParticipantTokenCapabilities),
        }),
      ).annotate({
        identifier: "ParticipantTokenConfiguration",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Array(ParticipantTokenConfiguration);
    case 1:
      return S.Array(ParticipantRecordingMediaType);
    case 2:
      return S.Array(ThumbnailStorageType);
    case 3:
      return S.suspend(() =>
        S.Struct({
          targetIntervalSeconds: S.optional(S.Number),
          storage: S.optional(ThumbnailStorageTypeList),
          recordingMode: S.optional(ThumbnailRecordingMode),
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
          mediaTypes: S.optional(ParticipantRecordingMediaTypeList),
          thumbnailConfiguration: S.optional(ParticipantThumbnailConfiguration),
          recordingReconnectWindowSeconds: S.optional(S.Number),
          hlsConfiguration: S.optional(ParticipantRecordingHlsConfiguration),
          recordParticipantReplicas: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "AutoParticipantRecordingConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          participantTokenConfigurations: S.optional(ParticipantTokenConfigurations),
          tags: S.optional(Tags),
          autoParticipantRecordingConfiguration: S.optional(AutoParticipantRecordingConfiguration),
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
          tags: S.optional(Tags),
          autoParticipantRecordingConfiguration: S.optional(AutoParticipantRecordingConfiguration),
          endpoints: S.optional(StageEndpoints),
        }),
      ).annotate({ identifier: "Stage" });
    case 1:
      return S.Array(ParticipantToken);
    case 2:
      return S.suspend(() =>
        S.Struct({ stage: S.optional(Stage), participantTokens: S.optional(ParticipantTokenList) }),
      ).annotate({ identifier: "CreateStageResponse" });
    case 3:
      return S.suspend(() => S.Struct({ bucketName: S.String })).annotate({
        identifier: "S3StorageConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          s3: S3StorageConfiguration,
          tags: S.optional(Tags),
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
          s3: S.optional(S3StorageConfiguration),
          tags: S.optional(Tags),
        }),
      ).annotate({ identifier: "StorageConfiguration" });
    case 6:
      return S.suspend(() =>
        S.Struct({ storageConfiguration: S.optional(StorageConfiguration) }),
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
          videoAspectRatio: S.optional(VideoAspectRatio),
          videoFillMode: S.optional(VideoFillMode),
          gridGap: S.optional(S.Number),
          participantOrderAttribute: S.optional(S.String),
        }),
      ).annotate({ identifier: "GridConfiguration" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          featuredParticipantAttribute: S.optional(S.String),
          omitStoppedVideo: S.optional(S.Boolean),
          videoFillMode: S.optional(VideoFillMode),
          gridGap: S.optional(S.Number),
          pipParticipantAttribute: S.optional(S.String),
          pipBehavior: S.optional(PipBehavior),
          pipOffset: S.optional(S.Number),
          pipPosition: S.optional(PipPosition),
          pipWidth: S.optional(S.Number),
          pipHeight: S.optional(S.Number),
          participantOrderAttribute: S.optional(S.String),
        }),
      ).annotate({ identifier: "PipConfiguration" });
    case 2:
      return S.suspend(() =>
        S.Struct({ grid: S.optional(GridConfiguration), pip: S.optional(PipConfiguration) }),
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
          hlsConfiguration: S.optional(CompositionRecordingHlsConfiguration),
          format: S.optional(S.String),
        }),
      ).annotate({ identifier: "RecordingConfiguration" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          targetIntervalSeconds: S.optional(S.Number),
          storage: S.optional(ThumbnailStorageTypeList),
        }),
      ).annotate({
        identifier: "CompositionThumbnailConfiguration",
      });
    case 6:
      return S.Array(CompositionThumbnailConfiguration);
    case 7:
      return S.suspend(() =>
        S.Struct({
          storageConfigurationArn: S.String,
          encoderConfigurationArns: EncoderConfigurationArnList,
          recordingConfiguration: S.optional(RecordingConfiguration),
          thumbnailConfigurations: S.optional(CompositionThumbnailConfigurationList),
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
          channel: S.optional(ChannelDestinationConfiguration),
          s3: S.optional(S3DestinationConfiguration),
        }),
      ).annotate({ identifier: "DestinationConfiguration" });
    case 1:
      return S.suspend(() => S.Struct({ recordingPrefix: S.String })).annotate({
        identifier: "S3Detail",
      });
    case 2:
      return S.suspend(() => S.Struct({ s3: S.optional(S3Detail) })).annotate({
        identifier: "DestinationDetail",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          state: S.String,
          startTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          endTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          configuration: DestinationConfiguration,
          detail: S.optional(DestinationDetail),
        }),
      ).annotate({ identifier: "Destination" });
    case 4:
      return S.Array(Destination);
    case 5:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          stageArn: S.String,
          state: S.String,
          layout: LayoutConfiguration,
          destinations: DestinationList,
          tags: S.optional(Tags),
          startTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          endTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "Composition" });
    case 6:
      return S.suspend(() => S.Struct({ composition: S.optional(Composition) })).annotate({
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
        S.Struct({ ingestConfiguration: S.optional(IngestConfiguration) }),
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
          attributes: S.optional(ParticipantAttributes),
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
          protocol: S.optional(ParticipantProtocol),
          replicationType: S.optional(S.String),
          replicationState: S.optional(S.String),
          sourceStageArn: S.optional(S.String),
          sourceSessionId: S.optional(S.String),
          redundantIngest: S.optional(S.Boolean),
          ingestConfigurationArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "Participant" });
    case 4:
      return S.suspend(() => S.Struct({ participant: S.optional(Participant) })).annotate({
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
          tags: S.optional(Tags),
        }),
      ).annotate({ identifier: "PublicKey" });
    case 7:
      return S.suspend(() => S.Struct({ publicKey: S.optional(PublicKey) })).annotate({
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
      return S.suspend(() => S.Struct({ stage: S.optional(Stage) })).annotate({
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
      return S.suspend(() => S.Struct({ stageSession: S.optional(StageSession) })).annotate({
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
          tags: S.optional(Tags),
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
      return S.Array(DestinationSummary);
    case 2:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          stageArn: S.String,
          destinations: DestinationSummaryList,
          state: S.String,
          tags: S.optional(Tags),
          startTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          endTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "CompositionSummary" });
    case 3:
      return S.Array(CompositionSummary);
    case 4:
      return S.suspend(() =>
        S.Struct({ compositions: CompositionSummaryList, nextToken: S.optional(S.String) }),
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
        S.Struct({ arn: S.String, name: S.optional(S.String), tags: S.optional(Tags) }),
      ).annotate({
        identifier: "EncoderConfigurationSummary",
      });
    case 7:
      return S.Array(EncoderConfigurationSummary);
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          encoderConfigurations: EncoderConfigurationSummaryList,
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
          ingestProtocol: IngestProtocol,
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
      return S.Array(IngestConfigurationSummary);
    case 4:
      return S.suspend(() =>
        S.Struct({
          ingestConfigurations: IngestConfigurationList,
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
          capabilities: S.optional(ParticipantTokenCapabilities),
          attributes: S.optional(ParticipantTokenAttributes),
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
          errorCode: S.optional(EventErrorCode),
          destinationStageArn: S.optional(S.String),
          destinationSessionId: S.optional(S.String),
          replica: S.optional(S.Boolean),
          previousToken: S.optional(ExchangedParticipantToken),
          newToken: S.optional(ExchangedParticipantToken),
        }),
      ).annotate({ identifier: "Event" });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.Array(Event);
    case 1:
      return S.suspend(() =>
        S.Struct({ events: EventList, nextToken: S.optional(S.String) }),
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
      return S.Array(ParticipantReplica);
    case 5:
      return S.suspend(() =>
        S.Struct({ replicas: ParticipantReplicaList, nextToken: S.optional(S.String) }),
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
      return S.Array(ParticipantSummary);
    case 1:
      return S.suspend(() =>
        S.Struct({ participants: ParticipantList, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListParticipantsResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), maxResults: S.optional(S.Number) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/ListPublicKeys" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListPublicKeysRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ arn: S.optional(S.String), name: S.optional(S.String), tags: S.optional(Tags) }),
      ).annotate({ identifier: "PublicKeySummary" });
    case 4:
      return S.Array(PublicKeySummary);
    case 5:
      return S.suspend(() =>
        S.Struct({ publicKeys: PublicKeyList, nextToken: S.optional(S.String) }),
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
          tags: S.optional(Tags),
        }),
      ).annotate({ identifier: "StageSummary" });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.Array(StageSummary);
    case 1:
      return S.suspend(() =>
        S.Struct({ stages: StageSummaryList, nextToken: S.optional(S.String) }),
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
      return S.Array(StageSessionSummary);
    case 4:
      return S.suspend(() =>
        S.Struct({ stageSessions: StageSessionList, nextToken: S.optional(S.String) }),
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
          s3: S.optional(S3StorageConfiguration),
          tags: S.optional(Tags),
        }),
      ).annotate({
        identifier: "StorageConfigurationSummary",
      });
    case 7:
      return S.Array(StorageConfigurationSummary);
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          storageConfigurations: StorageConfigurationSummaryList,
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
      return S.suspend(() => S.Struct({ tags: Tags })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 3:
      return S.Array(DestinationConfiguration);
    case 4:
      return S.suspend(() =>
        S.Struct({
          stageArn: S.String,
          idempotencyToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          layout: S.optional(LayoutConfiguration),
          destinations: DestinationConfigurationList,
          tags: S.optional(Tags),
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
          attributes: S.optional(ParticipantAttributes),
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
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")), tags: Tags }).pipe(
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
          tagKeys: TagKeyList.pipe(T.HttpQuery("tagKeys")),
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
          autoParticipantRecordingConfiguration: S.optional(AutoParticipantRecordingConfiguration),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/UpdateStage" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdateStageRequest" });
  }
}
