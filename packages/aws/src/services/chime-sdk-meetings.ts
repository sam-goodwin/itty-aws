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
  sdkId: "Chime SDK Meetings",
  serviceShapeName: "ChimeMeetingsSDKService",
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
              `https://meetings-chime-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://meetings-chime-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://meetings-chime.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://meetings-chime.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class BadRequestException
  extends /*@__PURE__*/ S.TaggedError<BadRequestException>()(
    "BadRequestException",
    {
      Code: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestId: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    {
      Code: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestId: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class ForbiddenException
  extends /*@__PURE__*/ S.TaggedError<ForbiddenException>()(
    "ForbiddenException",
    {
      Code: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestId: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class LimitExceededException
  extends /*@__PURE__*/ S.TaggedError<LimitExceededException>()(
    "LimitExceededException",
    {
      Code: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestId: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class NotFoundException
  extends /*@__PURE__*/ S.TaggedError<NotFoundException>()(
    "NotFoundException",
    {
      Code: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestId: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    {
      Code: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestId: /*@__PURE__*/ S.optional(S.String),
      ResourceName: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceFailureException
  extends /*@__PURE__*/ S.TaggedError<ServiceFailureException>()(
    "ServiceFailureException",
    {
      Code: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestId: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class ServiceUnavailableException
  extends /*@__PURE__*/ S.TaggedError<ServiceUnavailableException>()(
    "ServiceUnavailableException",
    {
      Code: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestId: /*@__PURE__*/ S.optional(S.String),
      RetryAfterSeconds: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("Retry-After"),
      ),
    },
    /*@__PURE__*/ T.HttpError(503),
  ).pipe(C.withServerError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    {
      Code: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestId: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class TooManyTagsException
  extends /*@__PURE__*/ S.TaggedError<TooManyTagsException>()(
    "TooManyTagsException",
    {
      Code: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestId: /*@__PURE__*/ S.optional(S.String),
      ResourceName: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class UnauthorizedException
  extends /*@__PURE__*/ S.TaggedError<UnauthorizedException>()(
    "UnauthorizedException",
    {
      Code: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestId: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(401),
  ).pipe(C.withAuthError) {}
export class UnprocessableEntityException
  extends /*@__PURE__*/ S.TaggedError<UnprocessableEntityException>()(
    "UnprocessableEntityException",
    {
      Code: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestId: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(422),
  ).pipe(C.withBadRequestError) {}
export type GuidString = string;
export type ExternalUserId = string | redacted.Redacted<string>;
export type MediaCapabilities = "SendReceive" | "Send" | "Receive" | "None" | (string & {});
const MediaCapabilities = S.String;

export interface AttendeeCapabilities {
  Audio: MediaCapabilities;
  Video: MediaCapabilities;
  Content: MediaCapabilities;
}
const AttendeeCapabilities = /*@__PURE__*/ __L.at(__c0, 0) as any as S.Schema<AttendeeCapabilities>;
export interface CreateAttendeeRequestItem {
  ExternalUserId: string | redacted.Redacted<string>;
  Capabilities?: AttendeeCapabilities;
}
const CreateAttendeeRequestItem = /*@__PURE__*/ __L.at(
  __c0,
  1,
) as any as S.Schema<CreateAttendeeRequestItem>;
export type CreateAttendeeRequestItemList = CreateAttendeeRequestItem[];
const CreateAttendeeRequestItemList = /*@__PURE__*/ __L.at(__c0, 2);
export interface BatchCreateAttendeeRequest {
  MeetingId: string;
  Attendees: CreateAttendeeRequestItem[];
}
const BatchCreateAttendeeRequest = /*@__PURE__*/ __L.at(
  __c0,
  3,
) as any as S.Schema<BatchCreateAttendeeRequest>;
export type JoinTokenString = string | redacted.Redacted<string>;
export interface Attendee {
  ExternalUserId?: string | redacted.Redacted<string>;
  AttendeeId?: string;
  JoinToken?: string | redacted.Redacted<string>;
  Capabilities?: AttendeeCapabilities;
}
const Attendee = /*@__PURE__*/ __L.at(__c0, 4) as any as S.Schema<Attendee>;
export type AttendeeList = Attendee[];
const AttendeeList = /*@__PURE__*/ __L.at(__c0, 5);
export interface CreateAttendeeError_ {
  ExternalUserId?: string | redacted.Redacted<string>;
  ErrorCode?: string;
  ErrorMessage?: string;
}
const CreateAttendeeError_ = /*@__PURE__*/ __L.at(__c0, 6) as any as S.Schema<CreateAttendeeError_>;
export type BatchCreateAttendeeErrorList = CreateAttendeeError_[];
const BatchCreateAttendeeErrorList = /*@__PURE__*/ __L.at(__c0, 7);
export interface BatchCreateAttendeeResponse {
  Attendees?: Attendee[];
  Errors?: CreateAttendeeError_[];
}
const BatchCreateAttendeeResponse = /*@__PURE__*/ __L.at(
  __c1,
  0,
) as any as S.Schema<BatchCreateAttendeeResponse>;
export interface AttendeeIdItem {
  AttendeeId: string;
}
const AttendeeIdItem = /*@__PURE__*/ __L.at(__c1, 1) as any as S.Schema<AttendeeIdItem>;
export type AttendeeIdsList = AttendeeIdItem[];
const AttendeeIdsList = /*@__PURE__*/ __L.at(__c1, 2);
export interface BatchUpdateAttendeeCapabilitiesExceptRequest {
  MeetingId: string;
  ExcludedAttendeeIds: AttendeeIdItem[];
  Capabilities: AttendeeCapabilities;
}
const BatchUpdateAttendeeCapabilitiesExceptRequest = /*@__PURE__*/ __L.at(
  __c1,
  3,
) as any as S.Schema<BatchUpdateAttendeeCapabilitiesExceptRequest>;
export interface BatchUpdateAttendeeCapabilitiesExceptResponse {}
const BatchUpdateAttendeeCapabilitiesExceptResponse = /*@__PURE__*/ __L.at(
  __c1,
  4,
) as any as S.Schema<BatchUpdateAttendeeCapabilitiesExceptResponse>;
export interface CreateAttendeeRequest {
  MeetingId: string;
  ExternalUserId: string | redacted.Redacted<string>;
  Capabilities?: AttendeeCapabilities;
}
const CreateAttendeeRequest = /*@__PURE__*/ __L.at(
  __c1,
  5,
) as any as S.Schema<CreateAttendeeRequest>;
export interface CreateAttendeeResponse {
  Attendee?: Attendee;
}
const CreateAttendeeResponse = /*@__PURE__*/ __L.at(
  __c1,
  6,
) as any as S.Schema<CreateAttendeeResponse>;
export type ClientRequestToken = string | redacted.Redacted<string>;
export type MediaRegion = string;
export type ExternalMeetingId = string | redacted.Redacted<string>;
export type Arn = string | redacted.Redacted<string>;
export interface NotificationsConfiguration {
  LambdaFunctionArn?: string | redacted.Redacted<string>;
  SnsTopicArn?: string | redacted.Redacted<string>;
  SqsQueueArn?: string | redacted.Redacted<string>;
}
const NotificationsConfiguration = /*@__PURE__*/ __L.at(
  __c1,
  7,
) as any as S.Schema<NotificationsConfiguration>;
export type MeetingFeatureStatus = "AVAILABLE" | "UNAVAILABLE" | (string & {});
const MeetingFeatureStatus = S.String;

export interface AudioFeatures {
  EchoReduction?: MeetingFeatureStatus;
}
const AudioFeatures = /*@__PURE__*/ __L.at(__c2, 0) as any as S.Schema<AudioFeatures>;
export type VideoResolution = "None" | "HD" | "FHD" | (string & {});
const VideoResolution = S.String;

export interface VideoFeatures {
  MaxResolution?: VideoResolution;
}
const VideoFeatures = /*@__PURE__*/ __L.at(__c2, 1) as any as S.Schema<VideoFeatures>;
export type ContentResolution = "None" | "FHD" | "UHD" | (string & {});
export interface ContentFeatures {
  MaxResolution?: ContentResolution;
}
const ContentFeatures = VideoFeatures as any as S.Schema<ContentFeatures>;
export type AttendeeMax = number;
export interface AttendeeFeatures {
  MaxCount?: number;
}
const AttendeeFeatures = /*@__PURE__*/ __L.at(__c2, 2) as any as S.Schema<AttendeeFeatures>;
export interface MeetingFeaturesConfiguration {
  Audio?: AudioFeatures;
  Video?: VideoFeatures;
  Content?: ContentFeatures;
  Attendee?: AttendeeFeatures;
}
const MeetingFeaturesConfiguration = /*@__PURE__*/ __L.at(
  __c2,
  3,
) as any as S.Schema<MeetingFeaturesConfiguration>;
export type PrimaryMeetingId = string;
export type TenantId = string;
export type TenantIdList = string[];
const TenantIdList = /*@__PURE__*/ __L.at(__c2, 4);
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  Key: string;
  Value: string;
}
const Tag = /*@__PURE__*/ __L.at(__c2, 5) as any as S.Schema<Tag>;
export type TagList = Tag[];
const TagList = /*@__PURE__*/ __L.at(__c2, 6);
export type MediaPlacementNetworkType = "Ipv4Only" | "DualStack" | (string & {});
const MediaPlacementNetworkType = S.String;

export interface CreateMeetingRequest {
  ClientRequestToken: string | redacted.Redacted<string>;
  MediaRegion: string;
  MeetingHostId?: string | redacted.Redacted<string>;
  ExternalMeetingId: string | redacted.Redacted<string>;
  NotificationsConfiguration?: NotificationsConfiguration;
  MeetingFeatures?: MeetingFeaturesConfiguration;
  PrimaryMeetingId?: string;
  TenantIds?: string[];
  Tags?: Tag[];
  MediaPlacementNetworkType?: MediaPlacementNetworkType;
}
const CreateMeetingRequest = /*@__PURE__*/ __L.at(__c2, 7) as any as S.Schema<CreateMeetingRequest>;
export interface MediaPlacement {
  AudioHostUrl?: string;
  AudioFallbackUrl?: string;
  SignalingUrl?: string;
  TurnControlUrl?: string;
  ScreenDataUrl?: string;
  ScreenViewingUrl?: string;
  ScreenSharingUrl?: string;
  EventIngestionUrl?: string;
}
const MediaPlacement = /*@__PURE__*/ __L.at(__c3, 0) as any as S.Schema<MediaPlacement>;
export type AmazonResourceName = string;
export interface Meeting {
  MeetingId?: string;
  MeetingHostId?: string | redacted.Redacted<string>;
  ExternalMeetingId?: string | redacted.Redacted<string>;
  MediaRegion?: string;
  MediaPlacement?: MediaPlacement;
  MeetingFeatures?: MeetingFeaturesConfiguration;
  PrimaryMeetingId?: string;
  TenantIds?: string[];
  MeetingArn?: string;
}
const Meeting = /*@__PURE__*/ __L.at(__c3, 1) as any as S.Schema<Meeting>;
export interface CreateMeetingResponse {
  Meeting?: Meeting;
}
const CreateMeetingResponse = /*@__PURE__*/ __L.at(
  __c3,
  2,
) as any as S.Schema<CreateMeetingResponse>;
export type CreateMeetingWithAttendeesRequestItemList = CreateAttendeeRequestItem[];
const CreateMeetingWithAttendeesRequestItemList =
  CreateAttendeeRequestItemList as any as S.Schema<CreateMeetingWithAttendeesRequestItemList>;
export interface CreateMeetingWithAttendeesRequest {
  ClientRequestToken: string | redacted.Redacted<string>;
  MediaRegion: string;
  MeetingHostId?: string | redacted.Redacted<string>;
  ExternalMeetingId: string | redacted.Redacted<string>;
  MeetingFeatures?: MeetingFeaturesConfiguration;
  NotificationsConfiguration?: NotificationsConfiguration;
  Attendees: CreateAttendeeRequestItem[];
  PrimaryMeetingId?: string;
  TenantIds?: string[];
  Tags?: Tag[];
  MediaPlacementNetworkType?: MediaPlacementNetworkType;
}
const CreateMeetingWithAttendeesRequest = /*@__PURE__*/ __L.at(
  __c3,
  3,
) as any as S.Schema<CreateMeetingWithAttendeesRequest>;
export interface CreateMeetingWithAttendeesResponse {
  Meeting?: Meeting;
  Attendees?: Attendee[];
  Errors?: CreateAttendeeError_[];
}
const CreateMeetingWithAttendeesResponse = /*@__PURE__*/ __L.at(
  __c3,
  4,
) as any as S.Schema<CreateMeetingWithAttendeesResponse>;
export interface DeleteAttendeeRequest {
  MeetingId: string;
  AttendeeId: string;
}
const DeleteAttendeeRequest = /*@__PURE__*/ __L.at(
  __c3,
  5,
) as any as S.Schema<DeleteAttendeeRequest>;
export interface DeleteAttendeeResponse {}
const DeleteAttendeeResponse = /*@__PURE__*/ __L.at(
  __c3,
  6,
) as any as S.Schema<DeleteAttendeeResponse>;
export interface DeleteMeetingRequest {
  MeetingId: string;
}
const DeleteMeetingRequest = /*@__PURE__*/ __L.at(__c3, 7) as any as S.Schema<DeleteMeetingRequest>;
export interface DeleteMeetingResponse {}
const DeleteMeetingResponse = DeleteAttendeeResponse as any as S.Schema<DeleteMeetingResponse>;
export interface GetAttendeeRequest {
  MeetingId: string;
  AttendeeId: string;
}
const GetAttendeeRequest = /*@__PURE__*/ __L.at(__c4, 0) as any as S.Schema<GetAttendeeRequest>;
export interface GetAttendeeResponse {
  Attendee?: Attendee;
}
const GetAttendeeResponse = CreateAttendeeResponse as any as S.Schema<GetAttendeeResponse>;
export interface GetMeetingRequest {
  MeetingId: string;
}
const GetMeetingRequest = /*@__PURE__*/ __L.at(__c4, 1) as any as S.Schema<GetMeetingRequest>;
export interface GetMeetingResponse {
  Meeting?: Meeting;
}
const GetMeetingResponse = CreateMeetingResponse as any as S.Schema<GetMeetingResponse>;
export type ResultMax = number;
export interface ListAttendeesRequest {
  MeetingId: string;
  NextToken?: string;
  MaxResults?: number;
}
const ListAttendeesRequest = /*@__PURE__*/ __L.at(__c4, 2) as any as S.Schema<ListAttendeesRequest>;
export interface ListAttendeesResponse {
  Attendees?: Attendee[];
  NextToken?: string;
}
const ListAttendeesResponse = /*@__PURE__*/ __L.at(
  __c4,
  3,
) as any as S.Schema<ListAttendeesResponse>;
export interface ListTagsForResourceRequest {
  ResourceARN: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c4,
  4,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  Tags?: Tag[];
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c4,
  5,
) as any as S.Schema<ListTagsForResourceResponse>;
export type TranscribeLanguageCode =
  | "en-US"
  | "en-GB"
  | "es-US"
  | "fr-CA"
  | "fr-FR"
  | "en-AU"
  | "it-IT"
  | "de-DE"
  | "pt-BR"
  | "ja-JP"
  | "ko-KR"
  | "zh-CN"
  | "th-TH"
  | "hi-IN"
  | (string & {});
const TranscribeLanguageCode = S.String;

export type TranscribeVocabularyFilterMethod = "remove" | "mask" | "tag" | (string & {});
const TranscribeVocabularyFilterMethod = S.String;

export type TranscribeRegion =
  | "us-east-2"
  | "us-east-1"
  | "us-west-2"
  | "ap-northeast-2"
  | "ap-southeast-2"
  | "ap-northeast-1"
  | "ca-central-1"
  | "eu-central-1"
  | "eu-west-1"
  | "eu-west-2"
  | "sa-east-1"
  | "auto"
  | "us-gov-west-1"
  | (string & {});
const TranscribeRegion = S.String;

export type TranscribePartialResultsStability = "low" | "medium" | "high" | (string & {});
const TranscribePartialResultsStability = S.String;

export type TranscribeContentIdentificationType = "PII" | (string & {});
const TranscribeContentIdentificationType = S.String;

export type TranscribeContentRedactionType = "PII" | (string & {});
const TranscribeContentRedactionType = S.String;

export type TranscribePiiEntityTypes = string;
export type TranscribeLanguageModelName = string;
export type TranscribeLanguageOptions = string;
export type TranscribeVocabularyNamesOrFilterNamesString = string;
export interface EngineTranscribeSettings {
  LanguageCode?: TranscribeLanguageCode;
  VocabularyFilterMethod?: TranscribeVocabularyFilterMethod;
  VocabularyFilterName?: string;
  VocabularyName?: string;
  Region?: TranscribeRegion;
  EnablePartialResultsStabilization?: boolean;
  PartialResultsStability?: TranscribePartialResultsStability;
  ContentIdentificationType?: TranscribeContentIdentificationType;
  ContentRedactionType?: TranscribeContentRedactionType;
  PiiEntityTypes?: string;
  LanguageModelName?: string;
  IdentifyLanguage?: boolean;
  LanguageOptions?: string;
  PreferredLanguage?: TranscribeLanguageCode;
  VocabularyNames?: string;
  VocabularyFilterNames?: string;
}
const EngineTranscribeSettings = /*@__PURE__*/ __L.at(
  __c4,
  6,
) as any as S.Schema<EngineTranscribeSettings>;
export type TranscribeMedicalLanguageCode = "en-US" | (string & {});
const TranscribeMedicalLanguageCode = S.String;

export type TranscribeMedicalSpecialty =
  | "PRIMARYCARE"
  | "CARDIOLOGY"
  | "NEUROLOGY"
  | "ONCOLOGY"
  | "RADIOLOGY"
  | "UROLOGY"
  | (string & {});
const TranscribeMedicalSpecialty = S.String;

export type TranscribeMedicalType = "CONVERSATION" | "DICTATION" | (string & {});
const TranscribeMedicalType = S.String;

export type TranscribeMedicalRegion =
  | "us-east-1"
  | "us-east-2"
  | "us-west-2"
  | "ap-southeast-2"
  | "ca-central-1"
  | "eu-west-1"
  | "auto"
  | (string & {});
const TranscribeMedicalRegion = S.String;

export type TranscribeMedicalContentIdentificationType = "PHI" | (string & {});
const TranscribeMedicalContentIdentificationType = S.String;

export interface EngineTranscribeMedicalSettings {
  LanguageCode: TranscribeMedicalLanguageCode;
  Specialty: TranscribeMedicalSpecialty;
  Type: TranscribeMedicalType;
  VocabularyName?: string;
  Region?: TranscribeMedicalRegion;
  ContentIdentificationType?: TranscribeMedicalContentIdentificationType;
}
const EngineTranscribeMedicalSettings = /*@__PURE__*/ __L.at(
  __c4,
  7,
) as any as S.Schema<EngineTranscribeMedicalSettings>;
export interface TranscriptionConfiguration {
  EngineTranscribeSettings?: EngineTranscribeSettings;
  EngineTranscribeMedicalSettings?: EngineTranscribeMedicalSettings;
}
const TranscriptionConfiguration = /*@__PURE__*/ __L.at(
  __c5,
  0,
) as any as S.Schema<TranscriptionConfiguration>;
export interface StartMeetingTranscriptionRequest {
  MeetingId: string;
  TranscriptionConfiguration: TranscriptionConfiguration;
}
const StartMeetingTranscriptionRequest = /*@__PURE__*/ __L.at(
  __c5,
  1,
) as any as S.Schema<StartMeetingTranscriptionRequest>;
export interface StartMeetingTranscriptionResponse {}
const StartMeetingTranscriptionResponse =
  BatchUpdateAttendeeCapabilitiesExceptResponse as any as S.Schema<StartMeetingTranscriptionResponse>;
export interface StopMeetingTranscriptionRequest {
  MeetingId: string;
}
const StopMeetingTranscriptionRequest = /*@__PURE__*/ __L.at(
  __c5,
  2,
) as any as S.Schema<StopMeetingTranscriptionRequest>;
export interface StopMeetingTranscriptionResponse {}
const StopMeetingTranscriptionResponse =
  BatchUpdateAttendeeCapabilitiesExceptResponse as any as S.Schema<StopMeetingTranscriptionResponse>;
export interface TagResourceRequest {
  ResourceARN: string;
  Tags: Tag[];
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c5, 3) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = DeleteAttendeeResponse as any as S.Schema<TagResourceResponse>;
export type TagKeyList = string[];
const TagKeyList = TenantIdList as any as S.Schema<TagKeyList>;
export interface UntagResourceRequest {
  ResourceARN: string;
  TagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(__c5, 4) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse = DeleteAttendeeResponse as any as S.Schema<UntagResourceResponse>;
export interface UpdateAttendeeCapabilitiesRequest {
  MeetingId: string;
  AttendeeId: string;
  Capabilities: AttendeeCapabilities;
}
const UpdateAttendeeCapabilitiesRequest = /*@__PURE__*/ __L.at(
  __c5,
  5,
) as any as S.Schema<UpdateAttendeeCapabilitiesRequest>;
export interface UpdateAttendeeCapabilitiesResponse {
  Attendee?: Attendee;
}
const UpdateAttendeeCapabilitiesResponse = /*@__PURE__*/ __L.at(
  __c5,
  6,
) as any as S.Schema<UpdateAttendeeCapabilitiesResponse>;
export type RetryAfterSeconds = string;
export type BatchCreateAttendeeError =
  | BadRequestException
  | ForbiddenException
  | LimitExceededException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | UnprocessableEntityException
  | CommonErrors;
/**
 * Creates up to 100 attendees for an active Amazon Chime SDK meeting. For more information about the Amazon Chime SDK, see
 * Using the Amazon Chime SDK in the *Amazon Chime Developer Guide*.
 */
export const batchCreateAttendee: API.OperationMethod<
  BatchCreateAttendeeRequest,
  BatchCreateAttendeeResponse,
  BatchCreateAttendeeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchCreateAttendeeRequest,
  output: BatchCreateAttendeeResponse,
  errors: [
    BadRequestException,
    ForbiddenException,
    LimitExceededException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
    UnprocessableEntityException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchCreateAttendee",
}));

export type BatchUpdateAttendeeCapabilitiesExceptError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Updates `AttendeeCapabilities` except the capabilities listed in an `ExcludedAttendeeIds` table.
 *
 * You use the capabilities with a set of values that control what the capabilities can do, such as `SendReceive` data. For more information about those values, see
 * .
 *
 * When using capabilities, be aware of these corner cases:
 *
 * - If you specify `MeetingFeatures:Video:MaxResolution:None` when you create a meeting, all API requests
 * that include `SendReceive`, `Send`, or `Receive` for `AttendeeCapabilities:Video` will be rejected with `ValidationError 400`.
 *
 * - If you specify `MeetingFeatures:Content:MaxResolution:None` when you create a meeting, all API requests that include `SendReceive`, `Send`, or
 * `Receive` for `AttendeeCapabilities:Content` will be rejected with `ValidationError 400`.
 *
 * - You can't set `content` capabilities to `SendReceive` or `Receive` unless you also set `video` capabilities to `SendReceive`
 * or `Receive`. If you don't set the `video` capability to receive, the response will contain an HTTP 400 Bad Request status code. However, you can set your `video` capability
 * to receive and you set your `content` capability to not receive.
 *
 * - If meeting features is defined as `Video:MaxResolution:None` but
 * `Content:MaxResolution` is defined as something other than
 * `None` and attendee capabilities are not defined in the API
 * request, then the default attendee video capability is set to
 * `Receive` and attendee content capability is set to
 * `SendReceive`. This is because content `SendReceive`
 * requires video to be at least `Receive`.
 *
 * - When you change an `audio` capability from `None` or `Receive` to `Send` or `SendReceive` ,
 * and if the attendee left their microphone unmuted, audio will flow from the attendee to the other meeting participants.
 *
 * - When you change a `video` or `content` capability from `None` or `Receive` to `Send` or `SendReceive` ,
 * and if the attendee turned on their video or content streams, remote attendees can receive those streams, but only after media renegotiation between the client and the Amazon Chime back-end server.
 */
export const batchUpdateAttendeeCapabilitiesExcept: API.OperationMethod<
  BatchUpdateAttendeeCapabilitiesExceptRequest,
  BatchUpdateAttendeeCapabilitiesExceptResponse,
  BatchUpdateAttendeeCapabilitiesExceptError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchUpdateAttendeeCapabilitiesExceptRequest,
  output: BatchUpdateAttendeeCapabilitiesExceptResponse,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchUpdateAttendeeCapabilitiesExcept",
}));

export type CreateAttendeeError =
  | BadRequestException
  | ForbiddenException
  | LimitExceededException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | UnprocessableEntityException
  | CommonErrors;
/**
 * Creates a new attendee for an active Amazon Chime SDK meeting. For more information about the Amazon Chime SDK, see
 * Using the Amazon Chime SDK
 * in the
 * *Amazon Chime Developer Guide*.
 */
export const createAttendee: API.OperationMethod<
  CreateAttendeeRequest,
  CreateAttendeeResponse,
  CreateAttendeeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAttendeeRequest,
  output: CreateAttendeeResponse,
  errors: [
    BadRequestException,
    ForbiddenException,
    LimitExceededException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
    UnprocessableEntityException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAttendee",
}));

export type CreateMeetingError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | LimitExceededException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Creates a new Amazon Chime SDK meeting in the specified media Region with no initial attendees. For more information about specifying media Regions, see
 * Available Regions and
 * Using meeting Regions, both
 * in the *Amazon Chime SDK Developer Guide*. For more information about the Amazon Chime SDK, see
 * Using the Amazon Chime SDK
 * in the
 * *Amazon Chime SDK Developer Guide*.
 *
 * If you use this API in conjuction with the and APIs, and you don't specify the
 * `MeetingFeatures.Content.MaxResolution` or `MeetingFeatures.Video.MaxResolution` parameters, the following defaults are used:
 *
 * - Content.MaxResolution: FHD
 *
 * - Video.MaxResolution: HD
 */
export const createMeeting: API.OperationMethod<
  CreateMeetingRequest,
  CreateMeetingResponse,
  CreateMeetingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateMeetingRequest,
  output: CreateMeetingResponse,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    LimitExceededException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateMeeting",
}));

export type CreateMeetingWithAttendeesError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | LimitExceededException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Creates a new Amazon Chime SDK meeting in the specified media Region, with attendees. For more information about specifying media Regions, see
 * Available Regions and
 * Using meeting Regions, both
 * in the *Amazon Chime SDK Developer Guide*. For more information about the Amazon Chime SDK, see
 * Using the Amazon Chime SDK
 * in the
 * *Amazon Chime SDK Developer Guide*.
 *
 * If you use this API in conjuction with the and APIs, and you don't specify the
 * `MeetingFeatures.Content.MaxResolution` or `MeetingFeatures.Video.MaxResolution` parameters, the following defaults are used:
 *
 * - Content.MaxResolution: FHD
 *
 * - Video.MaxResolution: HD
 */
export const createMeetingWithAttendees: API.OperationMethod<
  CreateMeetingWithAttendeesRequest,
  CreateMeetingWithAttendeesResponse,
  CreateMeetingWithAttendeesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateMeetingWithAttendeesRequest,
  output: CreateMeetingWithAttendeesResponse,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    LimitExceededException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateMeetingWithAttendees",
}));

export type DeleteAttendeeError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Deletes an attendee from the specified Amazon Chime SDK meeting and deletes their
 * `JoinToken`. Attendees are automatically deleted when a Amazon Chime SDK meeting is deleted. For more information about the Amazon Chime SDK, see
 * Using the Amazon Chime SDK
 * in the *Amazon Chime Developer Guide*.
 */
export const deleteAttendee: API.OperationMethod<
  DeleteAttendeeRequest,
  DeleteAttendeeResponse,
  DeleteAttendeeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAttendeeRequest,
  output: DeleteAttendeeResponse,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAttendee",
}));

export type DeleteMeetingError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Deletes the specified Amazon Chime SDK meeting. The operation deletes all attendees, disconnects all clients, and prevents new clients from
 * joining the meeting. For more information about the Amazon Chime SDK, see
 * Using the Amazon Chime SDK in the
 * *Amazon Chime Developer Guide*.
 */
export const deleteMeeting: API.OperationMethod<
  DeleteMeetingRequest,
  DeleteMeetingResponse,
  DeleteMeetingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteMeetingRequest,
  output: DeleteMeetingResponse,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteMeeting",
}));

export type GetAttendeeError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Gets the Amazon Chime SDK attendee details for a specified meeting ID and attendee ID. For more information about the Amazon Chime SDK, see
 * Using the Amazon Chime SDK
 * in the *Amazon Chime Developer Guide*.
 */
export const getAttendee: API.OperationMethod<
  GetAttendeeRequest,
  GetAttendeeResponse,
  GetAttendeeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAttendeeRequest,
  output: GetAttendeeResponse,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAttendee",
}));

export type GetMeetingError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Gets the Amazon Chime SDK meeting details for the specified meeting ID. For more information about the Amazon Chime SDK, see
 * Using the Amazon Chime SDK
 * in the *Amazon Chime Developer Guide*.
 */
export const getMeeting: API.OperationMethod<
  GetMeetingRequest,
  GetMeetingResponse,
  GetMeetingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetMeetingRequest,
  output: GetMeetingResponse,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetMeeting",
}));

export type ListAttendeesError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Lists the attendees for the specified Amazon Chime SDK meeting. For more information about the Amazon Chime SDK, see
 * Using the Amazon Chime SDK
 * in the *Amazon Chime Developer Guide*.
 */
export const listAttendees: API.PaginatedOperationMethod<
  ListAttendeesRequest,
  ListAttendeesResponse,
  ListAttendeesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAttendeesRequest,
  output: ListAttendeesResponse,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAttendees",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | BadRequestException
  | ForbiddenException
  | LimitExceededException
  | ResourceNotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Returns a list of the tags available for the specified resource.
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
    BadRequestException,
    ForbiddenException,
    LimitExceededException,
    ResourceNotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type StartMeetingTranscriptionError =
  | BadRequestException
  | ForbiddenException
  | LimitExceededException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | UnprocessableEntityException
  | CommonErrors;
/**
 * Starts transcription for the specified `meetingId`. For more information, refer to
 * Using Amazon Chime SDK live transcription
 * in the *Amazon Chime SDK Developer Guide*.
 *
 * If you specify an invalid configuration, a `TranscriptFailed` event will be sent with the contents of the `BadRequestException` generated by Amazon Transcribe.
 * For more information on each parameter and which combinations are valid, refer to the
 * StartStreamTranscription API in the
 * *Amazon Transcribe Developer Guide*.
 *
 * By default, Amazon Transcribe may use and store audio content processed by the service to develop and improve Amazon Web Services AI/ML services as
 * further described in section 50 of the Amazon Web Services Service Terms. Using Amazon Transcribe
 * may be subject to federal and state laws or regulations regarding the recording or interception of electronic communications. It is your and your end users'
 * responsibility to comply with all applicable laws regarding the recording, including properly notifying all participants in a recorded session or communication
 * that the session or communication is being recorded, and obtaining all necessary consents. You can opt out from Amazon Web Services using audio content to develop and
 * improve AWS AI/ML services by configuring an AI services opt out policy using Amazon Web Services Organizations.
 */
export const startMeetingTranscription: API.OperationMethod<
  StartMeetingTranscriptionRequest,
  StartMeetingTranscriptionResponse,
  StartMeetingTranscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartMeetingTranscriptionRequest,
  output: StartMeetingTranscriptionResponse,
  errors: [
    BadRequestException,
    ForbiddenException,
    LimitExceededException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
    UnprocessableEntityException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartMeetingTranscription",
}));

export type StopMeetingTranscriptionError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | UnprocessableEntityException
  | CommonErrors;
/**
 * Stops transcription for the specified `meetingId`. For more information, refer to
 * Using Amazon Chime SDK live transcription
 * in the *Amazon Chime SDK Developer Guide*.
 *
 * By default, Amazon Transcribe may use and store audio content processed by the service to develop and improve Amazon Web Services AI/ML services as
 * further described in section 50 of the Amazon Web Services Service Terms. Using Amazon Transcribe
 * may be subject to federal and state laws or regulations regarding the recording or interception of electronic communications. It is your and your end users'
 * responsibility to comply with all applicable laws regarding the recording, including properly notifying all participants in a recorded session or communication
 * that the session or communication is being recorded, and obtaining all necessary consents. You can opt out from Amazon Web Services using audio content to develop and
 * improve Amazon Web Services AI/ML services by configuring an AI services opt out policy using Amazon Web Services Organizations.
 */
export const stopMeetingTranscription: API.OperationMethod<
  StopMeetingTranscriptionRequest,
  StopMeetingTranscriptionResponse,
  StopMeetingTranscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StopMeetingTranscriptionRequest,
  output: StopMeetingTranscriptionResponse,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
    UnprocessableEntityException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopMeetingTranscription",
}));

export type TagResourceError =
  | BadRequestException
  | ForbiddenException
  | LimitExceededException
  | ResourceNotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottlingException
  | TooManyTagsException
  | UnauthorizedException
  | CommonErrors;
/**
 * The resource that supports tags.
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
    BadRequestException,
    ForbiddenException,
    LimitExceededException,
    ResourceNotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottlingException,
    TooManyTagsException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | BadRequestException
  | ForbiddenException
  | LimitExceededException
  | ResourceNotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * Removes the specified tags from the specified resources. When you specify a tag key, the action removes both that key and its associated value. The operation succeeds even if you
 * attempt to remove tags from a resource that were already removed. Note the following:
 *
 * - To remove tags from a resource, you need the necessary permissions for the service that the resource belongs to as well as permissions for removing tags. For more information,
 * see the documentation for the service whose resource you want to untag.
 *
 * - You can only tag resources that are located in the specified Amazon Web Services Region for the calling Amazon Web Services account.
 *
 * **Minimum permissions**
 *
 * In addition to the `tag:UntagResources` permission required by this operation, you must also have the remove tags permission defined by the service that created the resource.
 * For example, to remove the tags from an Amazon EC2 instance using the `UntagResources` operation, you must have both of the following permissions:
 *
 * `tag:UntagResource`
 *
 * `ChimeSDKMeetings:DeleteTags`
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
    BadRequestException,
    ForbiddenException,
    LimitExceededException,
    ResourceNotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateAttendeeCapabilitiesError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottlingException
  | UnauthorizedException
  | CommonErrors;
/**
 * The capabilities that you want to update.
 *
 * You use the capabilities with a set of values that control what the capabilities can do, such as `SendReceive` data. For more information about those values, see
 * .
 *
 * When using capabilities, be aware of these corner cases:
 *
 * - If you specify `MeetingFeatures:Video:MaxResolution:None` when you create a meeting, all API requests
 * that include `SendReceive`, `Send`, or `Receive` for `AttendeeCapabilities:Video` will be rejected with `ValidationError 400`.
 *
 * - If you specify `MeetingFeatures:Content:MaxResolution:None` when you create a meeting, all API requests that include `SendReceive`, `Send`, or
 * `Receive` for `AttendeeCapabilities:Content` will be rejected with `ValidationError 400`.
 *
 * - You can't set `content` capabilities to `SendReceive` or `Receive` unless you also set `video` capabilities to `SendReceive`
 * or `Receive`. If you don't set the `video` capability to receive, the response will contain an HTTP 400 Bad Request status code. However, you can set your `video` capability
 * to receive and you set your `content` capability to not receive.
 *
 * - If meeting features is defined as `Video:MaxResolution:None` but
 * `Content:MaxResolution` is defined as something other than
 * `None` and attendee capabilities are not defined in the API
 * request, then the default attendee video capability is set to
 * `Receive` and attendee content capability is set to
 * `SendReceive`. This is because content `SendReceive`
 * requires video to be at least `Receive`.
 *
 * - When you change an `audio` capability from `None` or `Receive` to `Send` or `SendReceive` ,
 * and if the attendee left their microphone unmuted, audio will flow from the attendee to the other meeting participants.
 *
 * - When you change a `video` or `content` capability from `None` or `Receive` to `Send` or `SendReceive` ,
 * and if the attendee turned on their video or content streams, remote attendees can receive those streams, but only after media renegotiation between the client and the Amazon Chime back-end server.
 */
export const updateAttendeeCapabilities: API.OperationMethod<
  UpdateAttendeeCapabilitiesRequest,
  UpdateAttendeeCapabilitiesResponse,
  UpdateAttendeeCapabilitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateAttendeeCapabilitiesRequest,
  output: UpdateAttendeeCapabilitiesResponse,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottlingException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAttendeeCapabilities",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Audio: MediaCapabilities,
          Video: MediaCapabilities,
          Content: MediaCapabilities,
        }),
      ).annotate({ identifier: "AttendeeCapabilities" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ExternalUserId: SensitiveString,
          Capabilities: S.optional(AttendeeCapabilities),
        }),
      ).annotate({
        identifier: "CreateAttendeeRequestItem",
      });
    case 2:
      return S.Array(CreateAttendeeRequestItem);
    case 3:
      return S.suspend(() =>
        S.Struct({
          MeetingId: S.String.pipe(T.HttpLabel("MeetingId")),
          Attendees: CreateAttendeeRequestItemList,
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/meetings/{MeetingId}/attendees?operation=batch-create",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchCreateAttendeeRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ExternalUserId: S.optional(SensitiveString),
          AttendeeId: S.optional(S.String),
          JoinToken: S.optional(SensitiveString),
          Capabilities: S.optional(AttendeeCapabilities),
        }),
      ).annotate({ identifier: "Attendee" });
    case 5:
      return S.Array(Attendee);
    case 6:
      return S.suspend(() =>
        S.Struct({
          ExternalUserId: S.optional(SensitiveString),
          ErrorCode: S.optional(S.String),
          ErrorMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "CreateAttendeeError" });
    case 7:
      return S.Array(CreateAttendeeError_);
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Attendees: S.optional(AttendeeList),
          Errors: S.optional(BatchCreateAttendeeErrorList),
        }),
      ).annotate({
        identifier: "BatchCreateAttendeeResponse",
      });
    case 1:
      return S.suspend(() => S.Struct({ AttendeeId: S.String })).annotate({
        identifier: "AttendeeIdItem",
      });
    case 2:
      return S.Array(AttendeeIdItem);
    case 3:
      return S.suspend(() =>
        S.Struct({
          MeetingId: S.String.pipe(T.HttpLabel("MeetingId")),
          ExcludedAttendeeIds: AttendeeIdsList,
          Capabilities: AttendeeCapabilities,
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/meetings/{MeetingId}/attendees/capabilities?operation=batch-update-except",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchUpdateAttendeeCapabilitiesExceptRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "BatchUpdateAttendeeCapabilitiesExceptResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          MeetingId: S.String.pipe(T.HttpLabel("MeetingId")),
          ExternalUserId: SensitiveString,
          Capabilities: S.optional(AttendeeCapabilities),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/meetings/{MeetingId}/attendees" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateAttendeeRequest" });
    case 6:
      return S.suspend(() => S.Struct({ Attendee: S.optional(Attendee) })).annotate({
        identifier: "CreateAttendeeResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          LambdaFunctionArn: S.optional(SensitiveString),
          SnsTopicArn: S.optional(SensitiveString),
          SqsQueueArn: S.optional(SensitiveString),
        }),
      ).annotate({
        identifier: "NotificationsConfiguration",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ EchoReduction: S.optional(MeetingFeatureStatus) }),
      ).annotate({ identifier: "AudioFeatures" });
    case 1:
      return S.suspend(() => S.Struct({ MaxResolution: S.optional(VideoResolution) })).annotate({
        identifier: "VideoFeatures",
      });
    case 2:
      return S.suspend(() => S.Struct({ MaxCount: S.optional(S.Number) })).annotate({
        identifier: "AttendeeFeatures",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Audio: S.optional(AudioFeatures),
          Video: S.optional(VideoFeatures),
          Content: S.optional(ContentFeatures),
          Attendee: S.optional(AttendeeFeatures),
        }),
      ).annotate({
        identifier: "MeetingFeaturesConfiguration",
      });
    case 4:
      return S.Array(S.String);
    case 5:
      return S.suspend(() => S.Struct({ Key: S.String, Value: S.String })).annotate({
        identifier: "Tag",
      });
    case 6:
      return S.Array(Tag);
    case 7:
      return S.suspend(() =>
        S.Struct({
          ClientRequestToken: SensitiveString.pipe(T.IdempotencyToken()),
          MediaRegion: S.String,
          MeetingHostId: S.optional(SensitiveString),
          ExternalMeetingId: SensitiveString,
          NotificationsConfiguration: S.optional(NotificationsConfiguration),
          MeetingFeatures: S.optional(MeetingFeaturesConfiguration),
          PrimaryMeetingId: S.optional(S.String),
          TenantIds: S.optional(TenantIdList),
          Tags: S.optional(TagList),
          MediaPlacementNetworkType: S.optional(MediaPlacementNetworkType),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/meetings" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateMeetingRequest" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AudioHostUrl: S.optional(S.String),
          AudioFallbackUrl: S.optional(S.String),
          SignalingUrl: S.optional(S.String),
          TurnControlUrl: S.optional(S.String),
          ScreenDataUrl: S.optional(S.String),
          ScreenViewingUrl: S.optional(S.String),
          ScreenSharingUrl: S.optional(S.String),
          EventIngestionUrl: S.optional(S.String),
        }),
      ).annotate({ identifier: "MediaPlacement" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          MeetingId: S.optional(S.String),
          MeetingHostId: S.optional(SensitiveString),
          ExternalMeetingId: S.optional(SensitiveString),
          MediaRegion: S.optional(S.String),
          MediaPlacement: S.optional(MediaPlacement),
          MeetingFeatures: S.optional(MeetingFeaturesConfiguration),
          PrimaryMeetingId: S.optional(S.String),
          TenantIds: S.optional(TenantIdList),
          MeetingArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "Meeting" });
    case 2:
      return S.suspend(() => S.Struct({ Meeting: S.optional(Meeting) })).annotate({
        identifier: "CreateMeetingResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ClientRequestToken: SensitiveString.pipe(T.IdempotencyToken()),
          MediaRegion: S.String,
          MeetingHostId: S.optional(SensitiveString),
          ExternalMeetingId: SensitiveString,
          MeetingFeatures: S.optional(MeetingFeaturesConfiguration),
          NotificationsConfiguration: S.optional(NotificationsConfiguration),
          Attendees: CreateMeetingWithAttendeesRequestItemList,
          PrimaryMeetingId: S.optional(S.String),
          TenantIds: S.optional(TenantIdList),
          Tags: S.optional(TagList),
          MediaPlacementNetworkType: S.optional(MediaPlacementNetworkType),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/meetings?operation=create-attendees" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateMeetingWithAttendeesRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Meeting: S.optional(Meeting),
          Attendees: S.optional(AttendeeList),
          Errors: S.optional(BatchCreateAttendeeErrorList),
        }),
      ).annotate({
        identifier: "CreateMeetingWithAttendeesResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          MeetingId: S.String.pipe(T.HttpLabel("MeetingId")),
          AttendeeId: S.String.pipe(T.HttpLabel("AttendeeId")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/meetings/{MeetingId}/attendees/{AttendeeId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteAttendeeRequest" });
    case 6:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteAttendeeResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ MeetingId: S.String.pipe(T.HttpLabel("MeetingId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/meetings/{MeetingId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteMeetingRequest" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          MeetingId: S.String.pipe(T.HttpLabel("MeetingId")),
          AttendeeId: S.String.pipe(T.HttpLabel("AttendeeId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/meetings/{MeetingId}/attendees/{AttendeeId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetAttendeeRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ MeetingId: S.String.pipe(T.HttpLabel("MeetingId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/meetings/{MeetingId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetMeetingRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          MeetingId: S.String.pipe(T.HttpLabel("MeetingId")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next-token")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/meetings/{MeetingId}/attendees" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListAttendeesRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ Attendees: S.optional(AttendeeList), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListAttendeesResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String.pipe(T.HttpQuery("arn")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/tags" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ Tags: S.optional(TagList) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          LanguageCode: S.optional(TranscribeLanguageCode),
          VocabularyFilterMethod: S.optional(TranscribeVocabularyFilterMethod),
          VocabularyFilterName: S.optional(S.String),
          VocabularyName: S.optional(S.String),
          Region: S.optional(TranscribeRegion),
          EnablePartialResultsStabilization: S.optional(S.Boolean),
          PartialResultsStability: S.optional(TranscribePartialResultsStability),
          ContentIdentificationType: S.optional(TranscribeContentIdentificationType),
          ContentRedactionType: S.optional(TranscribeContentRedactionType),
          PiiEntityTypes: S.optional(S.String),
          LanguageModelName: S.optional(S.String),
          IdentifyLanguage: S.optional(S.Boolean),
          LanguageOptions: S.optional(S.String),
          PreferredLanguage: S.optional(TranscribeLanguageCode),
          VocabularyNames: S.optional(S.String),
          VocabularyFilterNames: S.optional(S.String),
        }),
      ).annotate({ identifier: "EngineTranscribeSettings" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          LanguageCode: TranscribeMedicalLanguageCode,
          Specialty: TranscribeMedicalSpecialty,
          Type: TranscribeMedicalType,
          VocabularyName: S.optional(S.String),
          Region: S.optional(TranscribeMedicalRegion),
          ContentIdentificationType: S.optional(TranscribeMedicalContentIdentificationType),
        }),
      ).annotate({
        identifier: "EngineTranscribeMedicalSettings",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          EngineTranscribeSettings: S.optional(EngineTranscribeSettings),
          EngineTranscribeMedicalSettings: S.optional(EngineTranscribeMedicalSettings),
        }),
      ).annotate({
        identifier: "TranscriptionConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          MeetingId: S.String.pipe(T.HttpLabel("MeetingId")),
          TranscriptionConfiguration: TranscriptionConfiguration,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/meetings/{MeetingId}/transcription?operation=start" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartMeetingTranscriptionRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ MeetingId: S.String.pipe(T.HttpLabel("MeetingId")) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/meetings/{MeetingId}/transcription?operation=stop" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StopMeetingTranscriptionRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String, Tags: TagList }).pipe(
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
    case 4:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String, TagKeys: TagKeyList }).pipe(
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
    case 5:
      return S.suspend(() =>
        S.Struct({
          MeetingId: S.String.pipe(T.HttpLabel("MeetingId")),
          AttendeeId: S.String.pipe(T.HttpLabel("AttendeeId")),
          Capabilities: AttendeeCapabilities,
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/meetings/{MeetingId}/attendees/{AttendeeId}/capabilities",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateAttendeeCapabilitiesRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ Attendee: S.optional(Attendee) })).annotate({
        identifier: "UpdateAttendeeCapabilitiesResponse",
      });
  }
}
