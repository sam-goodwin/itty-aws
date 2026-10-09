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
  sdkId: "ivs",
  serviceShapeName: "AmazonInteractiveVideoService",
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
              `https://ivs-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://ivs-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(`https://ivs.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`);
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://ivs.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
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
export class ChannelNotBroadcasting
  extends /*@__PURE__*/ S.TaggedError<ChannelNotBroadcasting>()(
    "ChannelNotBroadcasting",
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
export class ServiceUnavailable
  extends /*@__PURE__*/ S.TaggedError<ServiceUnavailable>()(
    "ServiceUnavailable",
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
    /*@__PURE__*/ T.HttpError(503),
  ).pipe(C.withServerError) {}
export class StreamUnavailable
  extends /*@__PURE__*/ S.TaggedError<StreamUnavailable>()(
    "StreamUnavailable",
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
    /*@__PURE__*/ T.HttpError(503),
  ).pipe(C.withServerError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
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
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
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
export type ChannelArn = string;
export type ChannelArnList = string[];
export interface BatchGetChannelRequest {
  arns: string[];
}
export type ChannelName = string;
export type ChannelLatencyMode = string;
export type ChannelType = "BASIC" | "STANDARD" | "ADVANCED_SD" | "ADVANCED_HD" | (string & {});
export type ChannelRecordingConfigurationArn = string;
export type IngestEndpoint = string;
export type PlaybackURL = string;
export type IsAuthorized = boolean;
export type TagKey = string;
export type TagValue = string;
export type Tags = { [key: string]: string | undefined };
export type InsecureIngest = boolean;
export type TranscodePreset =
  | "HIGHER_BANDWIDTH_DELIVERY"
  | "CONSTRAINED_BANDWIDTH_DELIVERY"
  | (string & {});
export type SrtEndpoint = string;
export type SrtPassphrase = string | redacted.Redacted<string>;
export interface Srt {
  endpoint?: string;
  passphrase?: string | redacted.Redacted<string>;
}
export type ChannelPlaybackRestrictionPolicyArn = string;
export type IsMultitrackInputEnabled = boolean;
export type MultitrackPolicy = "ALLOW" | "REQUIRE" | (string & {});
export type MultitrackMaximumResolution = "SD" | "HD" | "FULL_HD" | (string & {});
export interface MultitrackInputConfiguration {
  enabled?: boolean;
  policy?: MultitrackPolicy;
  maximumResolution?: MultitrackMaximumResolution;
}
export type ContainerFormat = string;
export type ChannelAdConfigurationArn = string;
export interface Channel {
  arn?: string;
  name?: string;
  latencyMode?: string;
  type?: ChannelType;
  recordingConfigurationArn?: string;
  ingestEndpoint?: string;
  playbackUrl?: string;
  authorized?: boolean;
  tags?: { [key: string]: string | undefined };
  insecureIngest?: boolean;
  preset?: TranscodePreset;
  srt?: Srt;
  playbackRestrictionPolicyArn?: string;
  multitrackInputConfiguration?: MultitrackInputConfiguration;
  containerFormat?: string;
  adConfigurationArn?: string;
}
export type Channels = Channel[];
export type ResourceArn = string;
export type ErrorCode = string;
export type ErrorMessage = string;
export interface BatchError {
  arn?: string;
  code?: string;
  message?: string;
}
export type BatchErrors = BatchError[];
export interface BatchGetChannelResponse {
  accessControlAllowOrigin?: string;
  accessControlExposeHeaders?: string;
  cacheControl?: string;
  contentSecurityPolicy?: string;
  strictTransportSecurity?: string;
  xContentTypeOptions?: string;
  xFrameOptions?: string;
  channels?: Channel[];
  errors?: BatchError[];
}
export type StreamKeyArn = string;
export type StreamKeyArnList = string[];
export interface BatchGetStreamKeyRequest {
  arns: string[];
}
export type StreamKeyValue = string | redacted.Redacted<string>;
export interface StreamKey {
  arn?: string;
  value?: string | redacted.Redacted<string>;
  channelArn?: string;
  tags?: { [key: string]: string | undefined };
}
export type StreamKeys = StreamKey[];
export interface BatchGetStreamKeyResponse {
  accessControlAllowOrigin?: string;
  accessControlExposeHeaders?: string;
  cacheControl?: string;
  contentSecurityPolicy?: string;
  strictTransportSecurity?: string;
  xContentTypeOptions?: string;
  xFrameOptions?: string;
  streamKeys?: StreamKey[];
  errors?: BatchError[];
}
export type ViewerId = string;
export type ViewerSessionVersion = number;
export interface BatchStartViewerSessionRevocationViewerSession {
  channelArn: string;
  viewerId: string;
  viewerSessionVersionsLessThanOrEqualTo?: number;
}
export type BatchStartViewerSessionRevocationViewerSessionList =
  BatchStartViewerSessionRevocationViewerSession[];
export interface BatchStartViewerSessionRevocationRequest {
  viewerSessions: BatchStartViewerSessionRevocationViewerSession[];
}
export interface BatchStartViewerSessionRevocationError_ {
  channelArn: string;
  viewerId: string;
  code?: string;
  message?: string;
}
export type BatchStartViewerSessionRevocationErrors = BatchStartViewerSessionRevocationError_[];
export interface BatchStartViewerSessionRevocationResponse {
  accessControlAllowOrigin?: string;
  accessControlExposeHeaders?: string;
  cacheControl?: string;
  contentSecurityPolicy?: string;
  strictTransportSecurity?: string;
  xContentTypeOptions?: string;
  xFrameOptions?: string;
  errors?: BatchStartViewerSessionRevocationError_[];
}
export type AdConfigurationName = string;
export type MediaTailorPlaybackConfigurationArn = string;
export interface MediaTailorPlaybackConfiguration {
  playbackConfigurationArn?: string;
}
export type MediaTailorPlaybackConfigurationsList = MediaTailorPlaybackConfiguration[];
export type AdDurationSeconds = number;
export interface PostRollConfiguration {
  durationSeconds: number;
  enabled: boolean;
}
export interface CreateAdConfigurationRequest {
  name?: string;
  mediaTailorPlaybackConfigurations: MediaTailorPlaybackConfiguration[];
  postRollConfiguration?: PostRollConfiguration;
  tags?: { [key: string]: string | undefined };
}
export type AdConfigurationArn = string;
export interface AdConfiguration {
  arn: string;
  name?: string;
  mediaTailorPlaybackConfigurations: MediaTailorPlaybackConfiguration[];
  postRollConfiguration?: PostRollConfiguration;
  tags?: { [key: string]: string | undefined };
}
export interface CreateAdConfigurationResponse {
  adConfiguration: AdConfiguration;
}
export interface CreateChannelRequest {
  name?: string;
  latencyMode?: string;
  type?: ChannelType;
  authorized?: boolean;
  recordingConfigurationArn?: string;
  tags?: { [key: string]: string | undefined };
  insecureIngest?: boolean;
  preset?: TranscodePreset;
  playbackRestrictionPolicyArn?: string;
  multitrackInputConfiguration?: MultitrackInputConfiguration;
  containerFormat?: string;
  adConfigurationArn?: string;
}
export interface CreateChannelResponse {
  channel?: Channel;
  streamKey?: StreamKey;
}
export type PlaybackRestrictionPolicyAllowedCountry = string;
export type PlaybackRestrictionPolicyAllowedCountryList = string[];
export type PlaybackRestrictionPolicyAllowedOrigin = string;
export type PlaybackRestrictionPolicyAllowedOriginList = string[];
export type PlaybackRestrictionPolicyEnableStrictOriginEnforcement = boolean;
export type PlaybackRestrictionPolicyName = string;
export interface CreatePlaybackRestrictionPolicyRequest {
  allowedCountries?: string[];
  allowedOrigins?: string[];
  enableStrictOriginEnforcement?: boolean;
  name?: string;
  tags?: { [key: string]: string | undefined };
}
export type PlaybackRestrictionPolicyArn = string;
export interface PlaybackRestrictionPolicy {
  arn: string;
  allowedCountries: string[];
  allowedOrigins: string[];
  enableStrictOriginEnforcement?: boolean;
  name?: string;
  tags?: { [key: string]: string | undefined };
}
export interface CreatePlaybackRestrictionPolicyResponse {
  playbackRestrictionPolicy?: PlaybackRestrictionPolicy;
}
export type RecordingConfigurationName = string;
export type S3DestinationBucketName = string;
export interface S3DestinationConfiguration {
  bucketName: string;
}
export interface DestinationConfiguration {
  s3?: S3DestinationConfiguration;
}
export type RecordingMode = string;
export type TargetIntervalSeconds = number;
export type ThumbnailConfigurationResolution =
  | "SD"
  | "HD"
  | "FULL_HD"
  | "LOWEST_RESOLUTION"
  | (string & {});
export type ThumbnailConfigurationStorage = string;
export type ThumbnailConfigurationStorageList = string[];
export interface ThumbnailConfiguration {
  recordingMode?: string;
  targetIntervalSeconds?: number;
  resolution?: ThumbnailConfigurationResolution;
  storage?: string[];
}
export type RecordingReconnectWindowSeconds = number;
export type RenditionConfigurationRenditionSelection = string;
export type RenditionConfigurationRendition =
  | "SD"
  | "HD"
  | "FULL_HD"
  | "LOWEST_RESOLUTION"
  | (string & {});
export type RenditionConfigurationRenditionList = RenditionConfigurationRendition[];
export interface RenditionConfiguration {
  renditionSelection?: string;
  renditions?: RenditionConfigurationRendition[];
}
export interface CreateRecordingConfigurationRequest {
  name?: string;
  destinationConfiguration: DestinationConfiguration;
  tags?: { [key: string]: string | undefined };
  thumbnailConfiguration?: ThumbnailConfiguration;
  recordingReconnectWindowSeconds?: number;
  renditionConfiguration?: RenditionConfiguration;
}
export type RecordingConfigurationArn = string;
export type RecordingConfigurationState = string;
export interface RecordingConfiguration {
  arn: string;
  name?: string;
  destinationConfiguration: DestinationConfiguration;
  state: string;
  tags?: { [key: string]: string | undefined };
  thumbnailConfiguration?: ThumbnailConfiguration;
  recordingReconnectWindowSeconds?: number;
  renditionConfiguration?: RenditionConfiguration;
}
export interface CreateRecordingConfigurationResponse {
  recordingConfiguration?: RecordingConfiguration;
}
export interface CreateStreamKeyRequest {
  channelArn: string;
  tags?: { [key: string]: string | undefined };
}
export interface CreateStreamKeyResponse {
  streamKey?: StreamKey;
}
export interface DeleteAdConfigurationRequest {
  arn: string;
}
export interface DeleteAdConfigurationResponse {}
export interface DeleteChannelRequest {
  arn: string;
}
export interface DeleteChannelResponse {}
export type PlaybackKeyPairArn = string;
export interface DeletePlaybackKeyPairRequest {
  arn: string;
}
export interface DeletePlaybackKeyPairResponse {}
export interface DeletePlaybackRestrictionPolicyRequest {
  arn: string;
}
export interface DeletePlaybackRestrictionPolicyResponse {}
export interface DeleteRecordingConfigurationRequest {
  arn: string;
}
export interface DeleteRecordingConfigurationResponse {}
export interface DeleteStreamKeyRequest {
  arn: string;
}
export interface DeleteStreamKeyResponse {}
export interface GetAdConfigurationRequest {
  arn: string;
}
export interface GetAdConfigurationResponse {
  adConfiguration?: AdConfiguration;
}
export interface GetChannelRequest {
  arn: string;
}
export interface GetChannelResponse {
  channel?: Channel;
}
export interface GetPlaybackKeyPairRequest {
  arn: string;
}
export type PlaybackKeyPairName = string;
export type PlaybackKeyPairFingerprint = string;
export interface PlaybackKeyPair {
  arn?: string;
  name?: string;
  fingerprint?: string;
  tags?: { [key: string]: string | undefined };
}
export interface GetPlaybackKeyPairResponse {
  keyPair?: PlaybackKeyPair;
}
export interface GetPlaybackRestrictionPolicyRequest {
  arn: string;
}
export interface GetPlaybackRestrictionPolicyResponse {
  playbackRestrictionPolicy?: PlaybackRestrictionPolicy;
}
export interface GetRecordingConfigurationRequest {
  arn: string;
}
export interface GetRecordingConfigurationResponse {
  recordingConfiguration?: RecordingConfiguration;
}
export interface GetStreamRequest {
  channelArn: string;
}
export type StreamId = string;
export type StreamStartTime = Date;
export type StreamState = string;
export type StreamHealth = string;
export type StreamViewerCount = number;
export interface Stream {
  channelArn?: string;
  streamId?: string;
  playbackUrl?: string;
  startTime?: Date;
  state?: string;
  health?: string;
  viewerCount?: number;
}
export interface GetStreamResponse {
  stream?: Stream;
}
export interface GetStreamKeyRequest {
  arn: string;
}
export interface GetStreamKeyResponse {
  streamKey?: StreamKey;
}
export interface GetStreamSessionRequest {
  channelArn: string;
  streamId?: string;
}
export interface VideoConfiguration {
  avcProfile?: string;
  avcLevel?: string;
  codec?: string;
  encoder?: string;
  targetBitrate?: number;
  targetFramerate?: number;
  videoHeight?: number;
  videoWidth?: number;
  level?: string;
  track?: string;
  profile?: string;
}
export interface AudioConfiguration {
  codec?: string;
  targetBitrate?: number;
  sampleRate?: number;
  channels?: number;
  track?: string;
}
export interface IngestConfiguration {
  video?: VideoConfiguration;
  audio?: AudioConfiguration;
}
export type VideoConfigurationList = VideoConfiguration[];
export type AudioConfigurationList = AudioConfiguration[];
export interface IngestConfigurations {
  videoConfigurations: VideoConfiguration[];
  audioConfigurations: AudioConfiguration[];
}
export interface StreamEvent {
  name?: string;
  type?: string;
  eventTime?: Date;
  code?: string;
}
export type StreamEvents = StreamEvent[];
export interface StreamSession {
  streamId?: string;
  startTime?: Date;
  endTime?: Date;
  channel?: Channel;
  ingestConfiguration?: IngestConfiguration;
  ingestConfigurations?: IngestConfigurations;
  recordingConfiguration?: RecordingConfiguration;
  truncatedEvents?: StreamEvent[];
}
export interface GetStreamSessionResponse {
  streamSession?: StreamSession;
}
export type PlaybackPublicKeyMaterial = string;
export interface ImportPlaybackKeyPairRequest {
  publicKeyMaterial: string;
  name?: string;
  tags?: { [key: string]: string | undefined };
}
export interface ImportPlaybackKeyPairResponse {
  keyPair?: PlaybackKeyPair;
}
export interface InsertAdBreakRequest {
  channelArn: string;
  durationSeconds: number;
}
export type AdBreakId = string;
export interface InsertAdBreakResponse {
  adBreakId?: string;
}
export type PaginationToken = string;
export type MaxAdConfigurationResults = number;
export interface ListAdConfigurationsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface AdConfigurationSummary {
  arn: string;
  name?: string;
  mediaTailorPlaybackConfigurations: MediaTailorPlaybackConfiguration[];
  postRollConfiguration?: PostRollConfiguration;
  tags?: { [key: string]: string | undefined };
}
export type AdConfigurationList = AdConfigurationSummary[];
export interface ListAdConfigurationsResponse {
  adConfigurations: AdConfigurationSummary[];
  nextToken?: string;
}
export type MaxChannelResults = number;
export interface ListChannelsRequest {
  filterByName?: string;
  filterByRecordingConfigurationArn?: string;
  filterByPlaybackRestrictionPolicyArn?: string;
  filterByAdConfigurationArn?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ChannelSummary {
  arn?: string;
  name?: string;
  latencyMode?: string;
  authorized?: boolean;
  recordingConfigurationArn?: string;
  tags?: { [key: string]: string | undefined };
  insecureIngest?: boolean;
  type?: ChannelType;
  preset?: TranscodePreset;
  playbackRestrictionPolicyArn?: string;
  adConfigurationArn?: string;
}
export type ChannelList = ChannelSummary[];
export interface ListChannelsResponse {
  channels: ChannelSummary[];
  nextToken?: string;
}
export type MaxPlaybackKeyPairResults = number;
export interface ListPlaybackKeyPairsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface PlaybackKeyPairSummary {
  arn?: string;
  name?: string;
  tags?: { [key: string]: string | undefined };
}
export type PlaybackKeyPairList = PlaybackKeyPairSummary[];
export interface ListPlaybackKeyPairsResponse {
  keyPairs: PlaybackKeyPairSummary[];
  nextToken?: string;
}
export type MaxPlaybackRestrictionPolicyResults = number;
export interface ListPlaybackRestrictionPoliciesRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface PlaybackRestrictionPolicySummary {
  arn: string;
  allowedCountries: string[];
  allowedOrigins: string[];
  enableStrictOriginEnforcement?: boolean;
  name?: string;
  tags?: { [key: string]: string | undefined };
}
export type PlaybackRestrictionPolicyList = PlaybackRestrictionPolicySummary[];
export interface ListPlaybackRestrictionPoliciesResponse {
  playbackRestrictionPolicies: PlaybackRestrictionPolicySummary[];
  nextToken?: string;
}
export type MaxRecordingConfigurationResults = number;
export interface ListRecordingConfigurationsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface RecordingConfigurationSummary {
  arn: string;
  name?: string;
  destinationConfiguration: DestinationConfiguration;
  state: string;
  tags?: { [key: string]: string | undefined };
}
export type RecordingConfigurationList = RecordingConfigurationSummary[];
export interface ListRecordingConfigurationsResponse {
  recordingConfigurations: RecordingConfigurationSummary[];
  nextToken?: string;
}
export type MaxStreamKeyResults = number;
export interface ListStreamKeysRequest {
  channelArn: string;
  nextToken?: string;
  maxResults?: number;
}
export interface StreamKeySummary {
  arn?: string;
  channelArn?: string;
  tags?: { [key: string]: string | undefined };
}
export type StreamKeyList = StreamKeySummary[];
export interface ListStreamKeysResponse {
  streamKeys: StreamKeySummary[];
  nextToken?: string;
}
export interface StreamFilters {
  health?: string;
}
export type MaxStreamResults = number;
export interface ListStreamsRequest {
  filterBy?: StreamFilters;
  nextToken?: string;
  maxResults?: number;
}
export interface StreamSummary {
  channelArn?: string;
  streamId?: string;
  state?: string;
  health?: string;
  viewerCount?: number;
  startTime?: Date;
}
export type StreamList = StreamSummary[];
export interface ListStreamsResponse {
  streams: StreamSummary[];
  nextToken?: string;
}
export interface ListStreamSessionsRequest {
  channelArn: string;
  nextToken?: string;
  maxResults?: number;
}
export interface StreamSessionSummary {
  streamId?: string;
  startTime?: Date;
  endTime?: Date;
  hasErrorEvent?: boolean;
}
export type StreamSessionList = StreamSessionSummary[];
export interface ListStreamSessionsResponse {
  streamSessions: StreamSessionSummary[];
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags: { [key: string]: string | undefined };
}
export type StreamMetadata = string | redacted.Redacted<string>;
export interface PutMetadataRequest {
  channelArn: string;
  metadata: string | redacted.Redacted<string>;
}
export interface PutMetadataResponse {}
export interface StartViewerSessionRevocationRequest {
  channelArn: string;
  viewerId: string;
  viewerSessionVersionsLessThanOrEqualTo?: number;
}
export interface StartViewerSessionRevocationResponse {}
export interface StopStreamRequest {
  channelArn: string;
}
export interface StopStreamResponse {}
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
export interface UpdateAdConfigurationRequest {
  arn: string;
  name?: string;
  mediaTailorPlaybackConfigurations?: MediaTailorPlaybackConfiguration[];
  postRollConfiguration?: PostRollConfiguration;
}
export interface UpdateAdConfigurationResponse {
  adConfiguration: AdConfiguration;
}
export interface UpdateChannelRequest {
  arn: string;
  name?: string;
  latencyMode?: string;
  type?: ChannelType;
  authorized?: boolean;
  recordingConfigurationArn?: string;
  insecureIngest?: boolean;
  preset?: TranscodePreset;
  playbackRestrictionPolicyArn?: string;
  multitrackInputConfiguration?: MultitrackInputConfiguration;
  containerFormat?: string;
  adConfigurationArn?: string;
}
export interface UpdateChannelResponse {
  channel?: Channel;
}
export interface UpdatePlaybackRestrictionPolicyRequest {
  arn: string;
  allowedCountries?: string[];
  allowedOrigins?: string[];
  enableStrictOriginEnforcement?: boolean;
  name?: string;
}
export interface UpdatePlaybackRestrictionPolicyResponse {
  playbackRestrictionPolicy?: PlaybackRestrictionPolicy;
}
export type BatchGetChannelError =
  | AccessDeniedException
  | ServiceUnavailable
  | ValidationException
  | CommonErrors;
/**
 * Performs GetChannel on multiple ARNs simultaneously.
 */
export const batchGetChannel: API.OperationMethod<
  BatchGetChannelRequest,
  BatchGetChannelResponse,
  BatchGetChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(1, __c0, 1) as any as S.Schema<BatchGetChannelRequest>,
  output: __S(9, __c1, 1) as any as S.Schema<BatchGetChannelResponse>,
  errors: [AccessDeniedException, ServiceUnavailable, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetChannel",
}));

export type BatchGetStreamKeyError =
  | AccessDeniedException
  | ServiceUnavailable
  | ValidationException
  | CommonErrors;
/**
 * Performs GetStreamKey on multiple ARNs simultaneously.
 */
export const batchGetStreamKey: API.OperationMethod<
  BatchGetStreamKeyRequest,
  BatchGetStreamKeyResponse,
  BatchGetStreamKeyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(10, __c1, 2) as any as S.Schema<BatchGetStreamKeyRequest>,
  output: __S(13, __c1, 5) as any as S.Schema<BatchGetStreamKeyResponse>,
  errors: [AccessDeniedException, ServiceUnavailable, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetStreamKey",
}));

export type BatchStartViewerSessionRevocationError =
  | AccessDeniedException
  | PendingVerification
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Performs StartViewerSessionRevocation on multiple channel ARN and viewer ID pairs simultaneously.
 */
export const batchStartViewerSessionRevocation: API.OperationMethod<
  BatchStartViewerSessionRevocationRequest,
  BatchStartViewerSessionRevocationResponse,
  BatchStartViewerSessionRevocationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(16, __c2, 0) as any as S.Schema<BatchStartViewerSessionRevocationRequest>,
  output: __S(19, __c2, 3) as any as S.Schema<BatchStartViewerSessionRevocationResponse>,
  errors: [AccessDeniedException, PendingVerification, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchStartViewerSessionRevocation",
}));

export type CreateAdConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | PendingVerification
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new ad configuration to be used for server-side ad insertion.
 */
export const createAdConfiguration: API.OperationMethod<
  CreateAdConfigurationRequest,
  CreateAdConfigurationResponse,
  CreateAdConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(23, __c2, 7) as any as S.Schema<CreateAdConfigurationRequest>,
  output: __S(25, __c3, 1) as any as S.Schema<CreateAdConfigurationResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    PendingVerification,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAdConfiguration",
}));

export type CreateChannelError =
  | AccessDeniedException
  | PendingVerification
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates a new channel and an associated stream key to start streaming.
 */
export const createChannel: API.OperationMethod<
  CreateChannelRequest,
  CreateChannelResponse,
  CreateChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(26, __c3, 2) as any as S.Schema<CreateChannelRequest>,
  output: __S(27, __c3, 3) as any as S.Schema<CreateChannelResponse>,
  errors: [
    AccessDeniedException,
    PendingVerification,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateChannel",
}));

export type CreatePlaybackRestrictionPolicyError =
  | AccessDeniedException
  | PendingVerification
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new playback restriction policy, for constraining playback by countries and/or origins.
 */
export const createPlaybackRestrictionPolicy: API.OperationMethod<
  CreatePlaybackRestrictionPolicyRequest,
  CreatePlaybackRestrictionPolicyResponse,
  CreatePlaybackRestrictionPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(28, __c3, 4) as any as S.Schema<CreatePlaybackRestrictionPolicyRequest>,
  output: __S(30, __c3, 6) as any as S.Schema<CreatePlaybackRestrictionPolicyResponse>,
  errors: [
    AccessDeniedException,
    PendingVerification,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreatePlaybackRestrictionPolicy",
}));

export type CreateRecordingConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | PendingVerification
  | ServiceQuotaExceededException
  | ValidationException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates a new recording configuration, used to enable recording to Amazon S3.
 *
 * **Known issue:** In the us-east-1 region, if you use the Amazon Web Services CLI to create a recording configuration, it returns success even if the S3 bucket is in a different region. In this case, the `state` of the recording configuration is `CREATE_FAILED` (instead of `ACTIVE`). (In other regions, the CLI correctly returns failure if the bucket is in a different region.)
 *
 * **Workaround:** Ensure that your S3 bucket is in the same region as the recording configuration. If you create a recording configuration in a different region as your S3 bucket, delete that recording configuration and create a new one with an S3 bucket from the correct region.
 */
export const createRecordingConfiguration: API.OperationMethod<
  CreateRecordingConfigurationRequest,
  CreateRecordingConfigurationResponse,
  CreateRecordingConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(36, __c4, 4) as any as S.Schema<CreateRecordingConfigurationRequest>,
  output: __S(38, __c4, 6) as any as S.Schema<CreateRecordingConfigurationResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    PendingVerification,
    ServiceQuotaExceededException,
    ValidationException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateRecordingConfiguration",
}));

export type CreateStreamKeyError =
  | AccessDeniedException
  | PendingVerification
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates a stream key, used to initiate a stream, for the specified channel ARN.
 *
 * Note that CreateChannel creates a stream key. If you subsequently use CreateStreamKey on the same channel, it will fail because a stream key already exists and there is a limit of 1 stream key per channel. To reset the stream key on a channel, use DeleteStreamKey and then CreateStreamKey.
 */
export const createStreamKey: API.OperationMethod<
  CreateStreamKeyRequest,
  CreateStreamKeyResponse,
  CreateStreamKeyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(39, __c4, 7) as any as S.Schema<CreateStreamKeyRequest>,
  output: __S(40, __c5, 0) as any as S.Schema<CreateStreamKeyResponse>,
  errors: [
    AccessDeniedException,
    PendingVerification,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateStreamKey",
}));

export type DeleteAdConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes the specified ad configuration.
 */
export const deleteAdConfiguration: API.OperationMethod<
  DeleteAdConfigurationRequest,
  DeleteAdConfigurationResponse,
  DeleteAdConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(41, __c5, 1) as any as S.Schema<DeleteAdConfigurationRequest>,
  output: __S(42, __c5, 2) as any as S.Schema<DeleteAdConfigurationResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAdConfiguration",
}));

export type DeleteChannelError =
  | AccessDeniedException
  | ConflictException
  | PendingVerification
  | ResourceNotFoundException
  | ValidationException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes the specified channel and its associated stream keys.
 *
 * If you try to delete a live channel, you will get an error (409 ConflictException). To delete a channel that is live, call StopStream, wait for the Amazon EventBridge "Stream End" event (to verify that the stream's state is no longer Live), then call DeleteChannel. (See Using EventBridge with Amazon IVS.)
 */
export const deleteChannel: API.OperationMethod<
  DeleteChannelRequest,
  DeleteChannelResponse,
  DeleteChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(43, __c5, 3) as any as S.Schema<DeleteChannelRequest>,
  output: __S(42, __c5, 2) as any as S.Schema<DeleteChannelResponse>,
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
  operationName: "DeleteChannel",
}));

export type DeletePlaybackKeyPairError =
  | AccessDeniedException
  | PendingVerification
  | ResourceNotFoundException
  | ValidationException
  | ThrottlingException
  | InternalServerException
  | CommonErrors;
/**
 * Deletes a specified authorization key pair. This invalidates future viewer tokens generated using the key pair's `privateKey`. For more information, see Setting Up Private Channels in the *Amazon IVS User Guide*.
 */
export const deletePlaybackKeyPair: API.OperationMethod<
  DeletePlaybackKeyPairRequest,
  DeletePlaybackKeyPairResponse,
  DeletePlaybackKeyPairError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(44, __c5, 4) as any as S.Schema<DeletePlaybackKeyPairRequest>,
  output: __S(42, __c5, 2) as any as S.Schema<DeletePlaybackKeyPairResponse>,
  errors: [
    AccessDeniedException,
    PendingVerification,
    ResourceNotFoundException,
    ValidationException,
    ThrottlingException,
    InternalServerException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeletePlaybackKeyPair",
}));

export type DeletePlaybackRestrictionPolicyError =
  | AccessDeniedException
  | ConflictException
  | PendingVerification
  | ResourceNotFoundException
  | ValidationException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes the specified playback restriction policy.
 */
export const deletePlaybackRestrictionPolicy: API.OperationMethod<
  DeletePlaybackRestrictionPolicyRequest,
  DeletePlaybackRestrictionPolicyResponse,
  DeletePlaybackRestrictionPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(45, __c5, 5) as any as S.Schema<DeletePlaybackRestrictionPolicyRequest>,
  output: __S(46, __c5, 6) as any as S.Schema<DeletePlaybackRestrictionPolicyResponse>,
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
  operationName: "DeletePlaybackRestrictionPolicy",
}));

export type DeleteRecordingConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes the recording configuration for the specified ARN.
 *
 * If you try to delete a recording configuration that is associated with a channel, you will get an error (409 ConflictException). To avoid this, for all channels that reference the recording configuration, first use UpdateChannel to set the `recordingConfigurationArn` field to an empty string, then use DeleteRecordingConfiguration.
 */
export const deleteRecordingConfiguration: API.OperationMethod<
  DeleteRecordingConfigurationRequest,
  DeleteRecordingConfigurationResponse,
  DeleteRecordingConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(47, __c5, 7) as any as S.Schema<DeleteRecordingConfigurationRequest>,
  output: __S(46, __c5, 6) as any as S.Schema<DeleteRecordingConfigurationResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteRecordingConfiguration",
}));

export type DeleteStreamKeyError =
  | AccessDeniedException
  | PendingVerification
  | ResourceNotFoundException
  | ValidationException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes the stream key for the specified ARN, so it can no longer be used to stream.
 */
export const deleteStreamKey: API.OperationMethod<
  DeleteStreamKeyRequest,
  DeleteStreamKeyResponse,
  DeleteStreamKeyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(48, __c6, 0) as any as S.Schema<DeleteStreamKeyRequest>,
  output: __S(42, __c5, 2) as any as S.Schema<DeleteStreamKeyResponse>,
  errors: [
    AccessDeniedException,
    PendingVerification,
    ResourceNotFoundException,
    ValidationException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteStreamKey",
}));

export type GetAdConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets the ad configuration represented by the specified ARN.
 */
export const getAdConfiguration: API.OperationMethod<
  GetAdConfigurationRequest,
  GetAdConfigurationResponse,
  GetAdConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(49, __c6, 1) as any as S.Schema<GetAdConfigurationRequest>,
  output: __S(50, __c6, 2) as any as S.Schema<GetAdConfigurationResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAdConfiguration",
}));

export type GetChannelError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ValidationException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets the channel configuration for the specified channel ARN. See also BatchGetChannel.
 */
export const getChannel: API.OperationMethod<
  GetChannelRequest,
  GetChannelResponse,
  GetChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(51, __c6, 3) as any as S.Schema<GetChannelRequest>,
  output: __S(52, __c6, 4) as any as S.Schema<GetChannelResponse>,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ValidationException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetChannel",
}));

export type GetPlaybackKeyPairError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ValidationException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets a specified playback authorization key pair and returns the `arn` and `fingerprint`. The `privateKey` held by the caller can be used to generate viewer authorization tokens, to grant viewers access to private channels. For more information, see Setting Up Private Channels in the *Amazon IVS User Guide*.
 */
export const getPlaybackKeyPair: API.OperationMethod<
  GetPlaybackKeyPairRequest,
  GetPlaybackKeyPairResponse,
  GetPlaybackKeyPairError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(53, __c6, 5) as any as S.Schema<GetPlaybackKeyPairRequest>,
  output: __S(55, __c6, 7) as any as S.Schema<GetPlaybackKeyPairResponse>,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ValidationException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPlaybackKeyPair",
}));

export type GetPlaybackRestrictionPolicyError =
  | AccessDeniedException
  | PendingVerification
  | ResourceNotFoundException
  | ValidationException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets the specified playback restriction policy.
 */
export const getPlaybackRestrictionPolicy: API.OperationMethod<
  GetPlaybackRestrictionPolicyRequest,
  GetPlaybackRestrictionPolicyResponse,
  GetPlaybackRestrictionPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(56, __c7, 0) as any as S.Schema<GetPlaybackRestrictionPolicyRequest>,
  output: __S(30, __c3, 6) as any as S.Schema<GetPlaybackRestrictionPolicyResponse>,
  errors: [
    AccessDeniedException,
    PendingVerification,
    ResourceNotFoundException,
    ValidationException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPlaybackRestrictionPolicy",
}));

export type GetRecordingConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets the recording configuration for the specified ARN.
 */
export const getRecordingConfiguration: API.OperationMethod<
  GetRecordingConfigurationRequest,
  GetRecordingConfigurationResponse,
  GetRecordingConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(57, __c7, 1) as any as S.Schema<GetRecordingConfigurationRequest>,
  output: __S(38, __c4, 6) as any as S.Schema<GetRecordingConfigurationResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRecordingConfiguration",
}));

export type GetStreamError =
  | AccessDeniedException
  | ChannelNotBroadcasting
  | ResourceNotFoundException
  | ValidationException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets information about the active (live) stream on a specified channel.
 */
export const getStream: API.OperationMethod<
  GetStreamRequest,
  GetStreamResponse,
  GetStreamError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(58, __c7, 2) as any as S.Schema<GetStreamRequest>,
  output: __S(60, __c7, 4) as any as S.Schema<GetStreamResponse>,
  errors: [
    AccessDeniedException,
    ChannelNotBroadcasting,
    ResourceNotFoundException,
    ValidationException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetStream",
}));

export type GetStreamKeyError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ValidationException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets stream-key information for a specified ARN.
 */
export const getStreamKey: API.OperationMethod<
  GetStreamKeyRequest,
  GetStreamKeyResponse,
  GetStreamKeyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(61, __c7, 5) as any as S.Schema<GetStreamKeyRequest>,
  output: __S(40, __c5, 0) as any as S.Schema<GetStreamKeyResponse>,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ValidationException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetStreamKey",
}));

export type GetStreamSessionError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ValidationException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets metadata on a specified stream.
 */
export const getStreamSession: API.OperationMethod<
  GetStreamSessionRequest,
  GetStreamSessionResponse,
  GetStreamSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(62, __c7, 6) as any as S.Schema<GetStreamSessionRequest>,
  output: __S(72, __c9, 0) as any as S.Schema<GetStreamSessionResponse>,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ValidationException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetStreamSession",
}));

export type ImportPlaybackKeyPairError =
  | AccessDeniedException
  | ConflictException
  | PendingVerification
  | ServiceQuotaExceededException
  | ValidationException
  | ThrottlingException
  | CommonErrors;
/**
 * Imports the public portion of a new key pair and returns its `arn` and `fingerprint`. The `privateKey` can then be used to generate viewer authorization tokens, to grant viewers access to private channels. For more information, see Setting Up Private Channels in the *Amazon IVS User Guide*.
 */
export const importPlaybackKeyPair: API.OperationMethod<
  ImportPlaybackKeyPairRequest,
  ImportPlaybackKeyPairResponse,
  ImportPlaybackKeyPairError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(73, __c9, 1) as any as S.Schema<ImportPlaybackKeyPairRequest>,
  output: __S(55, __c6, 7) as any as S.Schema<ImportPlaybackKeyPairResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    PendingVerification,
    ServiceQuotaExceededException,
    ValidationException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ImportPlaybackKeyPair",
}));

export type InsertAdBreakError =
  | AccessDeniedException
  | ChannelNotBroadcasting
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Inserts an ad marker in the playlist for the specified channel and duration using the ad configuration associated with the channel.
 *
 * **Note:** AWS Elemental MediaTailor (EMT), the service that handles ad requests, provides CloudWatch metrics to help you monitor the success or failure of each InsertAdBreak operation. See Monitoring AWS Elemental MediaTailor with Amazon CloudWatch metrics in the *AWS Elemental MediaTailor User Guide* for details on available metrics.
 */
export const insertAdBreak: API.OperationMethod<
  InsertAdBreakRequest,
  InsertAdBreakResponse,
  InsertAdBreakError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(74, __c9, 2) as any as S.Schema<InsertAdBreakRequest>,
  output: __S(75, __c9, 3) as any as S.Schema<InsertAdBreakResponse>,
  errors: [
    AccessDeniedException,
    ChannelNotBroadcasting,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "InsertAdBreak",
}));

export type ListAdConfigurationsError =
  | AccessDeniedException
  | InternalServerException
  | ValidationException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets summary information about all ad configurations in your account, in the AWS region where the API request is processed.
 */
export const listAdConfigurations: API.PaginatedOperationMethod<
  ListAdConfigurationsRequest,
  ListAdConfigurationsResponse,
  ListAdConfigurationsError,
  Credentials | HttpClient.HttpClient,
  AdConfigurationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(76, __c9, 4) as any as S.Schema<ListAdConfigurationsRequest>,
  output: __S(78, __c9, 6) as any as S.Schema<ListAdConfigurationsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ValidationException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAdConfigurations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "adConfigurations",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListChannelsError =
  | AccessDeniedException
  | ConflictException
  | ValidationException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets summary information about all channels in your account, in the Amazon Web Services region where the API request is processed. This list can be filtered to match a specified name or recording-configuration ARN. Filters are mutually exclusive and cannot be used together. If you try to use both filters, you will get an error (409 ConflictException).
 */
export const listChannels: API.PaginatedOperationMethod<
  ListChannelsRequest,
  ListChannelsResponse,
  ListChannelsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(79, __c9, 7) as any as S.Schema<ListChannelsRequest>,
  output: __S(82, __c10, 2) as any as S.Schema<ListChannelsResponse>,
  errors: [AccessDeniedException, ConflictException, ValidationException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListChannels",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListPlaybackKeyPairsError =
  | AccessDeniedException
  | ValidationException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets summary information about playback key pairs. For more information, see Setting Up Private Channels in the *Amazon IVS User Guide*.
 */
export const listPlaybackKeyPairs: API.PaginatedOperationMethod<
  ListPlaybackKeyPairsRequest,
  ListPlaybackKeyPairsResponse,
  ListPlaybackKeyPairsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(83, __c10, 3) as any as S.Schema<ListPlaybackKeyPairsRequest>,
  output: __S(86, __c10, 6) as any as S.Schema<ListPlaybackKeyPairsResponse>,
  errors: [AccessDeniedException, ValidationException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPlaybackKeyPairs",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListPlaybackRestrictionPoliciesError =
  | AccessDeniedException
  | ConflictException
  | PendingVerification
  | ValidationException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets summary information about playback restriction policies.
 */
export const listPlaybackRestrictionPolicies: API.PaginatedOperationMethod<
  ListPlaybackRestrictionPoliciesRequest,
  ListPlaybackRestrictionPoliciesResponse,
  ListPlaybackRestrictionPoliciesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(87, __c10, 7) as any as S.Schema<ListPlaybackRestrictionPoliciesRequest>,
  output: __S(89, __c11, 1) as any as S.Schema<ListPlaybackRestrictionPoliciesResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    PendingVerification,
    ValidationException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPlaybackRestrictionPolicies",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListRecordingConfigurationsError =
  | AccessDeniedException
  | InternalServerException
  | ValidationException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets summary information about all recording configurations in your account, in the Amazon Web Services region where the API request is processed.
 */
export const listRecordingConfigurations: API.PaginatedOperationMethod<
  ListRecordingConfigurationsRequest,
  ListRecordingConfigurationsResponse,
  ListRecordingConfigurationsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(90, __c11, 2) as any as S.Schema<ListRecordingConfigurationsRequest>,
  output: __S(93, __c11, 5) as any as S.Schema<ListRecordingConfigurationsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ValidationException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRecordingConfigurations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListStreamKeysError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ValidationException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets summary information about stream keys for the specified channel.
 */
export const listStreamKeys: API.PaginatedOperationMethod<
  ListStreamKeysRequest,
  ListStreamKeysResponse,
  ListStreamKeysError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(94, __c11, 6) as any as S.Schema<ListStreamKeysRequest>,
  output: __S(97, __c12, 1) as any as S.Schema<ListStreamKeysResponse>,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ValidationException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListStreamKeys",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListStreamsError =
  | AccessDeniedException
  | ValidationException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets summary information about live streams in your account, in the Amazon Web Services region where the API request is processed.
 */
export const listStreams: API.PaginatedOperationMethod<
  ListStreamsRequest,
  ListStreamsResponse,
  ListStreamsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(99, __c12, 3) as any as S.Schema<ListStreamsRequest>,
  output: __S(102, __c12, 6) as any as S.Schema<ListStreamsResponse>,
  errors: [AccessDeniedException, ValidationException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListStreams",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListStreamSessionsError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ValidationException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets a summary of current and previous streams for a specified channel in your account, in the AWS region where the API request is processed.
 */
export const listStreamSessions: API.PaginatedOperationMethod<
  ListStreamSessionsRequest,
  ListStreamSessionsResponse,
  ListStreamSessionsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(103, __c12, 7) as any as S.Schema<ListStreamSessionsRequest>,
  output: __S(106, __c13, 2) as any as S.Schema<ListStreamSessionsResponse>,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ValidationException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListStreamSessions",
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
 * Gets information about Amazon Web Services tags for the specified ARN.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(107, __c13, 3) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(108, __c13, 4) as any as S.Schema<ListTagsForResourceResponse>,
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

export type PutMetadataError =
  | AccessDeniedException
  | ChannelNotBroadcasting
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Inserts metadata into the active stream of the specified channel. At most 5 requests per second per channel are allowed, each with a maximum 1 KB payload. (If 5 TPS is not sufficient for your needs, we recommend batching your data into a single PutMetadata call.) At most 155 requests per second per account are allowed. Also see Embedding Metadata within a Video Stream in the *Amazon IVS User Guide*.
 */
export const putMetadata: API.OperationMethod<
  PutMetadataRequest,
  PutMetadataResponse,
  PutMetadataError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(109, __c13, 5) as any as S.Schema<PutMetadataRequest>,
  output: __S(42, __c5, 2) as any as S.Schema<PutMetadataResponse>,
  errors: [
    AccessDeniedException,
    ChannelNotBroadcasting,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutMetadata",
}));

export type StartViewerSessionRevocationError =
  | AccessDeniedException
  | InternalServerException
  | PendingVerification
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts the process of revoking the viewer session associated with a specified channel ARN and viewer ID. Optionally, you can provide a version to revoke viewer sessions less than and including that version. For instructions on associating a viewer ID with a viewer session, see Setting Up Private Channels.
 */
export const startViewerSessionRevocation: API.OperationMethod<
  StartViewerSessionRevocationRequest,
  StartViewerSessionRevocationResponse,
  StartViewerSessionRevocationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(110, __c13, 6) as any as S.Schema<StartViewerSessionRevocationRequest>,
  output: __S(46, __c5, 6) as any as S.Schema<StartViewerSessionRevocationResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    PendingVerification,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartViewerSessionRevocation",
}));

export type StopStreamError =
  | AccessDeniedException
  | ChannelNotBroadcasting
  | ResourceNotFoundException
  | StreamUnavailable
  | ValidationException
  | ThrottlingException
  | CommonErrors;
/**
 * Disconnects the incoming RTMPS stream for the specified channel. Can be used in conjunction with DeleteStreamKey to prevent further streaming to a channel.
 *
 * Many streaming client-software libraries automatically reconnect a dropped RTMPS session, so to stop the stream permanently, you may want to first revoke the `streamKey` attached to the channel.
 */
export const stopStream: API.OperationMethod<
  StopStreamRequest,
  StopStreamResponse,
  StopStreamError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(111, __c13, 7) as any as S.Schema<StopStreamRequest>,
  output: __S(42, __c5, 2) as any as S.Schema<StopStreamResponse>,
  errors: [
    AccessDeniedException,
    ChannelNotBroadcasting,
    ResourceNotFoundException,
    StreamUnavailable,
    ValidationException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopStream",
}));

export type TagResourceError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | ThrottlingException
  | CommonErrors;
/**
 * Adds or updates tags for the Amazon Web Services resource with the specified ARN.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(112, __c14, 0) as any as S.Schema<TagResourceRequest>,
  output: __S(42, __c5, 2) as any as S.Schema<TagResourceResponse>,
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
  input: __S(113, __c14, 1) as any as S.Schema<UntagResourceRequest>,
  output: __S(42, __c5, 2) as any as S.Schema<UntagResourceResponse>,
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

export type UpdateAdConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | PendingVerification
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a specified ad configuration.
 */
export const updateAdConfiguration: API.OperationMethod<
  UpdateAdConfigurationRequest,
  UpdateAdConfigurationResponse,
  UpdateAdConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(114, __c14, 2) as any as S.Schema<UpdateAdConfigurationRequest>,
  output: __S(25, __c3, 1) as any as S.Schema<UpdateAdConfigurationResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    PendingVerification,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAdConfiguration",
}));

export type UpdateChannelError =
  | AccessDeniedException
  | ConflictException
  | PendingVerification
  | ResourceNotFoundException
  | ValidationException
  | ThrottlingException
  | CommonErrors;
/**
 * Updates a channel's configuration. Live channels cannot be updated. You must stop the ongoing stream, update the channel, and restart the stream for the changes to take effect.
 */
export const updateChannel: API.OperationMethod<
  UpdateChannelRequest,
  UpdateChannelResponse,
  UpdateChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(115, __c14, 3) as any as S.Schema<UpdateChannelRequest>,
  output: __S(52, __c6, 4) as any as S.Schema<UpdateChannelResponse>,
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
  operationName: "UpdateChannel",
}));

export type UpdatePlaybackRestrictionPolicyError =
  | AccessDeniedException
  | ConflictException
  | PendingVerification
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Updates a specified playback restriction policy.
 */
export const updatePlaybackRestrictionPolicy: API.OperationMethod<
  UpdatePlaybackRestrictionPolicyRequest,
  UpdatePlaybackRestrictionPolicyResponse,
  UpdatePlaybackRestrictionPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(116, __c14, 4) as any as S.Schema<UpdatePlaybackRestrictionPolicyRequest>,
  output: __S(30, __c3, 6) as any as S.Schema<UpdatePlaybackRestrictionPolicyResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    PendingVerification,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdatePlaybackRestrictionPolicy",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({ arns: __S(0, __c0, 0) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/BatchGetChannel" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "BatchGetChannelRequest" });
    case 2:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 3:
      return S.suspend(() =>
        S.Struct({ endpoint: S.optional(S.String), passphrase: S.optional(SensitiveString) }),
      ).annotate({ identifier: "Srt" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          enabled: S.optional(S.Boolean),
          policy: S.optional(S.String),
          maximumResolution: S.optional(S.String),
        }),
      ).annotate({
        identifier: "MultitrackInputConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          name: S.optional(S.String),
          latencyMode: S.optional(S.String),
          type: S.optional(S.String),
          recordingConfigurationArn: S.optional(S.String),
          ingestEndpoint: S.optional(S.String),
          playbackUrl: S.optional(S.String),
          authorized: S.optional(S.Boolean),
          tags: S.optional(__S(2, __c0, 2)),
          insecureIngest: S.optional(S.Boolean),
          preset: S.optional(S.String),
          srt: S.optional(__S(3, __c0, 3)),
          playbackRestrictionPolicyArn: S.optional(S.String),
          multitrackInputConfiguration: S.optional(__S(4, __c0, 4)),
          containerFormat: S.optional(S.String),
          adConfigurationArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "Channel" });
    case 6:
      return S.Array(__S(5, __c0, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          code: S.optional(S.String),
          message: S.optional(S.String),
        }),
      ).annotate({ identifier: "BatchError" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(7, __c0, 7));
    case 1:
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
          channels: S.optional(__S(6, __c0, 6)),
          errors: S.optional(__S(8, __c1, 0)),
        }),
      ).annotate({ identifier: "BatchGetChannelResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({ arns: __S(0, __c0, 0) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/BatchGetStreamKey" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "BatchGetStreamKeyRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          value: S.optional(SensitiveString),
          channelArn: S.optional(S.String),
          tags: S.optional(__S(2, __c0, 2)),
        }),
      ).annotate({ identifier: "StreamKey" });
    case 4:
      return S.Array(__S(11, __c1, 3));
    case 5:
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
          streamKeys: S.optional(__S(12, __c1, 4)),
          errors: S.optional(__S(8, __c1, 0)),
        }),
      ).annotate({
        identifier: "BatchGetStreamKeyResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          channelArn: S.String,
          viewerId: S.String,
          viewerSessionVersionsLessThanOrEqualTo: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "BatchStartViewerSessionRevocationViewerSession",
      });
    case 7:
      return S.Array(__S(14, __c1, 6));
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ viewerSessions: __S(15, __c1, 7) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/BatchStartViewerSessionRevocation" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchStartViewerSessionRevocationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          channelArn: S.String,
          viewerId: S.String,
          code: S.optional(S.String),
          message: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BatchStartViewerSessionRevocationError",
      });
    case 2:
      return S.Array(__S(17, __c2, 1));
    case 3:
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
          errors: S.optional(__S(18, __c2, 2)),
        }),
      ).annotate({
        identifier: "BatchStartViewerSessionRevocationResponse",
      });
    case 4:
      return S.suspend(() => S.Struct({ playbackConfigurationArn: S.optional(S.String) })).annotate(
        {
          identifier: "MediaTailorPlaybackConfiguration",
        },
      );
    case 5:
      return S.Array(__S(20, __c2, 4));
    case 6:
      return S.suspend(() => S.Struct({ durationSeconds: S.Number, enabled: S.Boolean })).annotate({
        identifier: "PostRollConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          mediaTailorPlaybackConfigurations: __S(21, __c2, 5),
          postRollConfiguration: S.optional(__S(22, __c2, 6)),
          tags: S.optional(__S(2, __c0, 2)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/CreateAdConfiguration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateAdConfigurationRequest",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          name: S.optional(S.String),
          mediaTailorPlaybackConfigurations: __S(21, __c2, 5),
          postRollConfiguration: S.optional(__S(22, __c2, 6)),
          tags: S.optional(__S(2, __c0, 2)),
        }),
      ).annotate({ identifier: "AdConfiguration" });
    case 1:
      return S.suspend(() => S.Struct({ adConfiguration: __S(24, __c3, 0) })).annotate({
        identifier: "CreateAdConfigurationResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          latencyMode: S.optional(S.String),
          type: S.optional(S.String),
          authorized: S.optional(S.Boolean),
          recordingConfigurationArn: S.optional(S.String),
          tags: S.optional(__S(2, __c0, 2)),
          insecureIngest: S.optional(S.Boolean),
          preset: S.optional(S.String),
          playbackRestrictionPolicyArn: S.optional(S.String),
          multitrackInputConfiguration: S.optional(__S(4, __c0, 4)),
          containerFormat: S.optional(S.String),
          adConfigurationArn: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/CreateChannel" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateChannelRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ channel: S.optional(__S(5, __c0, 5)), streamKey: S.optional(__S(11, __c1, 3)) }),
      ).annotate({ identifier: "CreateChannelResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          allowedCountries: S.optional(__S(0, __c0, 0)),
          allowedOrigins: S.optional(__S(0, __c0, 0)),
          enableStrictOriginEnforcement: S.optional(S.Boolean),
          name: S.optional(S.String),
          tags: S.optional(__S(2, __c0, 2)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/CreatePlaybackRestrictionPolicy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreatePlaybackRestrictionPolicyRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          allowedCountries: __S(0, __c0, 0),
          allowedOrigins: __S(0, __c0, 0),
          enableStrictOriginEnforcement: S.optional(S.Boolean),
          name: S.optional(S.String),
          tags: S.optional(__S(2, __c0, 2)),
        }),
      ).annotate({
        identifier: "PlaybackRestrictionPolicy",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ playbackRestrictionPolicy: S.optional(__S(29, __c3, 5)) }),
      ).annotate({
        identifier: "CreatePlaybackRestrictionPolicyResponse",
      });
    case 7:
      return S.suspend(() => S.Struct({ bucketName: S.String })).annotate({
        identifier: "S3DestinationConfiguration",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ s3: S.optional(__S(31, __c3, 7)) })).annotate({
        identifier: "DestinationConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          recordingMode: S.optional(S.String),
          targetIntervalSeconds: S.optional(S.Number),
          resolution: S.optional(S.String),
          storage: S.optional(__S(0, __c0, 0)),
        }),
      ).annotate({ identifier: "ThumbnailConfiguration" });
    case 2:
      return S.Array(S.String);
    case 3:
      return S.suspend(() =>
        S.Struct({
          renditionSelection: S.optional(S.String),
          renditions: S.optional(__S(34, __c4, 2)),
        }),
      ).annotate({ identifier: "RenditionConfiguration" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          destinationConfiguration: __S(32, __c4, 0),
          tags: S.optional(__S(2, __c0, 2)),
          thumbnailConfiguration: S.optional(__S(33, __c4, 1)),
          recordingReconnectWindowSeconds: S.optional(S.Number),
          renditionConfiguration: S.optional(__S(35, __c4, 3)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/CreateRecordingConfiguration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateRecordingConfigurationRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          name: S.optional(S.String),
          destinationConfiguration: __S(32, __c4, 0),
          state: S.String,
          tags: S.optional(__S(2, __c0, 2)),
          thumbnailConfiguration: S.optional(__S(33, __c4, 1)),
          recordingReconnectWindowSeconds: S.optional(S.Number),
          renditionConfiguration: S.optional(__S(35, __c4, 3)),
        }),
      ).annotate({ identifier: "RecordingConfiguration" });
    case 6:
      return S.suspend(() =>
        S.Struct({ recordingConfiguration: S.optional(__S(37, __c4, 5)) }),
      ).annotate({
        identifier: "CreateRecordingConfigurationResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ channelArn: S.String, tags: S.optional(__S(2, __c0, 2)) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/CreateStreamKey" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateStreamKeyRequest" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ streamKey: S.optional(__S(11, __c1, 3)) })).annotate({
        identifier: "CreateStreamKeyResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ arn: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DeleteAdConfiguration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteAdConfigurationRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteAdConfigurationResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ arn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/DeleteChannel" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteChannelRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ arn: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DeletePlaybackKeyPair" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeletePlaybackKeyPairRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ arn: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DeletePlaybackRestrictionPolicy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeletePlaybackRestrictionPolicyRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeletePlaybackRestrictionPolicyResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ arn: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DeleteRecordingConfiguration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteRecordingConfigurationRequest",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ arn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/DeleteStreamKey" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteStreamKeyRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ arn: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/GetAdConfiguration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetAdConfigurationRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ adConfiguration: S.optional(__S(24, __c3, 0)) })).annotate({
        identifier: "GetAdConfigurationResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ arn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/GetChannel" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetChannelRequest" });
    case 4:
      return S.suspend(() => S.Struct({ channel: S.optional(__S(5, __c0, 5)) })).annotate({
        identifier: "GetChannelResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ arn: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/GetPlaybackKeyPair" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetPlaybackKeyPairRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          name: S.optional(S.String),
          fingerprint: S.optional(S.String),
          tags: S.optional(__S(2, __c0, 2)),
        }),
      ).annotate({ identifier: "PlaybackKeyPair" });
    case 7:
      return S.suspend(() => S.Struct({ keyPair: S.optional(__S(54, __c6, 6)) })).annotate({
        identifier: "GetPlaybackKeyPairResponse",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ arn: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/GetPlaybackRestrictionPolicy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetPlaybackRestrictionPolicyRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ arn: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/GetRecordingConfiguration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetRecordingConfigurationRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ channelArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/GetStream" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetStreamRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          channelArn: S.optional(S.String),
          streamId: S.optional(S.String),
          playbackUrl: S.optional(S.String),
          startTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          state: S.optional(S.String),
          health: S.optional(S.String),
          viewerCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "Stream" });
    case 4:
      return S.suspend(() => S.Struct({ stream: S.optional(__S(59, __c7, 3)) })).annotate({
        identifier: "GetStreamResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ arn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/GetStreamKey" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetStreamKeyRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ channelArn: S.String, streamId: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/GetStreamSession" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetStreamSessionRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          avcProfile: S.optional(S.String),
          avcLevel: S.optional(S.String),
          codec: S.optional(S.String),
          encoder: S.optional(S.String),
          targetBitrate: S.optional(S.Number),
          targetFramerate: S.optional(S.Number),
          videoHeight: S.optional(S.Number),
          videoWidth: S.optional(S.Number),
          level: S.optional(S.String),
          track: S.optional(S.String),
          profile: S.optional(S.String),
        }),
      ).annotate({ identifier: "VideoConfiguration" });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          codec: S.optional(S.String),
          targetBitrate: S.optional(S.Number),
          sampleRate: S.optional(S.Number),
          channels: S.optional(S.Number),
          track: S.optional(S.String),
        }),
      ).annotate({ identifier: "AudioConfiguration" });
    case 1:
      return S.suspend(() =>
        S.Struct({ video: S.optional(__S(63, __c7, 7)), audio: S.optional(__S(64, __c8, 0)) }),
      ).annotate({ identifier: "IngestConfiguration" });
    case 2:
      return S.Array(__S(63, __c7, 7));
    case 3:
      return S.Array(__S(64, __c8, 0));
    case 4:
      return S.suspend(() =>
        S.Struct({
          videoConfigurations: __S(66, __c8, 2),
          audioConfigurations: __S(67, __c8, 3),
        }),
      ).annotate({ identifier: "IngestConfigurations" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          type: S.optional(S.String),
          eventTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          code: S.optional(S.String),
        }),
      ).annotate({ identifier: "StreamEvent" });
    case 6:
      return S.Array(__S(69, __c8, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          streamId: S.optional(S.String),
          startTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          endTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          channel: S.optional(__S(5, __c0, 5)),
          ingestConfiguration: S.optional(__S(65, __c8, 1)),
          ingestConfigurations: S.optional(__S(68, __c8, 4)),
          recordingConfiguration: S.optional(__S(37, __c4, 5)),
          truncatedEvents: S.optional(__S(70, __c8, 6)),
        }),
      ).annotate({ identifier: "StreamSession" });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ streamSession: S.optional(__S(71, __c8, 7)) })).annotate({
        identifier: "GetStreamSessionResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          publicKeyMaterial: S.String,
          name: S.optional(S.String),
          tags: S.optional(__S(2, __c0, 2)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ImportPlaybackKeyPair" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ImportPlaybackKeyPairRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ channelArn: S.String, durationSeconds: S.Number }).pipe(
          T.all(T.Http({ method: "POST", uri: "/InsertAdBreak" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "InsertAdBreakRequest" });
    case 3:
      return S.suspend(() => S.Struct({ adBreakId: S.optional(S.String) })).annotate({
        identifier: "InsertAdBreakResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), maxResults: S.optional(S.Number) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListAdConfigurations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAdConfigurationsRequest",
      });
    case 5:
      return S.Array(__S(24, __c3, 0));
    case 6:
      return S.suspend(() =>
        S.Struct({ adConfigurations: __S(77, __c9, 5), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListAdConfigurationsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          filterByName: S.optional(S.String),
          filterByRecordingConfigurationArn: S.optional(S.String),
          filterByPlaybackRestrictionPolicyArn: S.optional(S.String),
          filterByAdConfigurationArn: S.optional(S.String),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/ListChannels" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListChannelsRequest" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          name: S.optional(S.String),
          latencyMode: S.optional(S.String),
          authorized: S.optional(S.Boolean),
          recordingConfigurationArn: S.optional(S.String),
          tags: S.optional(__S(2, __c0, 2)),
          insecureIngest: S.optional(S.Boolean),
          type: S.optional(S.String),
          preset: S.optional(S.String),
          playbackRestrictionPolicyArn: S.optional(S.String),
          adConfigurationArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "ChannelSummary" });
    case 1:
      return S.Array(__S(80, __c10, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({ channels: __S(81, __c10, 1), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListChannelsResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), maxResults: S.optional(S.Number) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListPlaybackKeyPairs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListPlaybackKeyPairsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          name: S.optional(S.String),
          tags: S.optional(__S(2, __c0, 2)),
        }),
      ).annotate({ identifier: "PlaybackKeyPairSummary" });
    case 5:
      return S.Array(__S(84, __c10, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({ keyPairs: __S(85, __c10, 5), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListPlaybackKeyPairsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), maxResults: S.optional(S.Number) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListPlaybackRestrictionPolicies" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListPlaybackRestrictionPoliciesRequest",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(29, __c3, 5));
    case 1:
      return S.suspend(() =>
        S.Struct({
          playbackRestrictionPolicies: __S(88, __c11, 0),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListPlaybackRestrictionPoliciesResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), maxResults: S.optional(S.Number) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListRecordingConfigurations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListRecordingConfigurationsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          name: S.optional(S.String),
          destinationConfiguration: __S(32, __c4, 0),
          state: S.String,
          tags: S.optional(__S(2, __c0, 2)),
        }),
      ).annotate({
        identifier: "RecordingConfigurationSummary",
      });
    case 4:
      return S.Array(__S(91, __c11, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          recordingConfigurations: __S(92, __c11, 4),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListRecordingConfigurationsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          channelArn: S.String,
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/ListStreamKeys" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListStreamKeysRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          channelArn: S.optional(S.String),
          tags: S.optional(__S(2, __c0, 2)),
        }),
      ).annotate({ identifier: "StreamKeySummary" });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(95, __c11, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({ streamKeys: __S(96, __c12, 0), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListStreamKeysResponse" });
    case 2:
      return S.suspend(() => S.Struct({ health: S.optional(S.String) })).annotate({
        identifier: "StreamFilters",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          filterBy: S.optional(__S(98, __c12, 2)),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/ListStreams" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListStreamsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          channelArn: S.optional(S.String),
          streamId: S.optional(S.String),
          state: S.optional(S.String),
          health: S.optional(S.String),
          viewerCount: S.optional(S.Number),
          startTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "StreamSummary" });
    case 5:
      return S.Array(__S(100, __c12, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({ streams: __S(101, __c12, 5), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListStreamsResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          channelArn: S.String,
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListStreamSessions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListStreamSessionsRequest",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          streamId: S.optional(S.String),
          startTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          endTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          hasErrorEvent: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "StreamSessionSummary" });
    case 1:
      return S.Array(__S(104, __c13, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({ streamSessions: __S(105, __c13, 1), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListStreamSessionsResponse",
      });
    case 3:
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
    case 4:
      return S.suspend(() => S.Struct({ tags: __S(2, __c0, 2) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ channelArn: S.String, metadata: SensitiveString }).pipe(
          T.all(T.Http({ method: "POST", uri: "/PutMetadata" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "PutMetadataRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          channelArn: S.String,
          viewerId: S.String,
          viewerSessionVersionsLessThanOrEqualTo: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/StartViewerSessionRevocation" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartViewerSessionRevocationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ channelArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/StopStream" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StopStreamRequest" });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tags: __S(2, __c0, 2),
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
    case 1:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tagKeys: __S(0, __c0, 0).pipe(T.HttpQuery("tagKeys")),
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
    case 2:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          name: S.optional(S.String),
          mediaTailorPlaybackConfigurations: S.optional(__S(21, __c2, 5)),
          postRollConfiguration: S.optional(__S(22, __c2, 6)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/UpdateAdConfiguration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateAdConfigurationRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          name: S.optional(S.String),
          latencyMode: S.optional(S.String),
          type: S.optional(S.String),
          authorized: S.optional(S.Boolean),
          recordingConfigurationArn: S.optional(S.String),
          insecureIngest: S.optional(S.Boolean),
          preset: S.optional(S.String),
          playbackRestrictionPolicyArn: S.optional(S.String),
          multitrackInputConfiguration: S.optional(__S(4, __c0, 4)),
          containerFormat: S.optional(S.String),
          adConfigurationArn: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/UpdateChannel" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdateChannelRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          allowedCountries: S.optional(__S(0, __c0, 0)),
          allowedOrigins: S.optional(__S(0, __c0, 0)),
          enableStrictOriginEnforcement: S.optional(S.Boolean),
          name: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/UpdatePlaybackRestrictionPolicy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdatePlaybackRestrictionPolicyRequest",
      });
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
