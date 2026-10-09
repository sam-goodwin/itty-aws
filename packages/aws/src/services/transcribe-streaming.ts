import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as stream from "effect/Stream";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import * as T from "../traits.ts";
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "Transcribe Streaming",
  serviceShapeName: "Transcribe",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "transcribe" });
const ver = /*@__PURE__*/ T.ServiceVersion("2017-10-26");
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
              `https://transcribestreaming-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://transcribestreaming-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://transcribestreaming.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(
          `https://transcribestreaming.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
        );
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class BadRequestException
  extends /*@__PURE__*/ S.TaggedError<BadRequestException>()(
    "BadRequestException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalFailureException
  extends /*@__PURE__*/ S.TaggedError<InternalFailureException>()(
    "InternalFailureException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class LimitExceededException
  extends /*@__PURE__*/ S.TaggedError<LimitExceededException>()(
    "LimitExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceUnavailableException
  extends /*@__PURE__*/ S.TaggedError<ServiceUnavailableException>()(
    "ServiceUnavailableException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(503),
  ).pipe(C.withServerError) {}
export type SessionId = string;
export interface GetMedicalScribeStreamRequest {
  SessionId: string;
}
const GetMedicalScribeStreamRequest = /*@__PURE__*/ __L.at(
  __c0,
  0,
) as any as S.Schema<GetMedicalScribeStreamRequest>;
export type MedicalScribeLanguageCode = "en-US" | (string & {});
const MedicalScribeLanguageCode = S.String;

export type MedicalScribeMediaSampleRateHertz = number;
export type MedicalScribeMediaEncoding = "pcm" | "ogg-opus" | "flac" | (string & {});
const MedicalScribeMediaEncoding = S.String;

export type VocabularyName = string;
export type VocabularyFilterName = string;
export type MedicalScribeVocabularyFilterMethod = "remove" | "mask" | "tag" | (string & {});
const MedicalScribeVocabularyFilterMethod = S.String;

export type IamRoleArn = string;
export type MedicalScribeChannelId = number;
export type MedicalScribeParticipantRole = "PATIENT" | "CLINICIAN" | (string & {});
const MedicalScribeParticipantRole = S.String;

export interface MedicalScribeChannelDefinition {
  ChannelId: number;
  ParticipantRole: MedicalScribeParticipantRole;
}
const MedicalScribeChannelDefinition = /*@__PURE__*/ __L.at(
  __c0,
  1,
) as any as S.Schema<MedicalScribeChannelDefinition>;
export type MedicalScribeChannelDefinitions = MedicalScribeChannelDefinition[];
const MedicalScribeChannelDefinitions = /*@__PURE__*/ __L.at(__c0, 2);
export type NonEmptyString = string;
export type KMSEncryptionContextMap = { [key: string]: string | undefined };
const KMSEncryptionContextMap = /*@__PURE__*/ __L.at(__c0, 3);
export type KMSKeyId = string;
export interface MedicalScribeEncryptionSettings {
  KmsEncryptionContext?: { [key: string]: string | undefined };
  KmsKeyId: string;
}
const MedicalScribeEncryptionSettings = /*@__PURE__*/ __L.at(
  __c0,
  4,
) as any as S.Schema<MedicalScribeEncryptionSettings>;
export type MedicalScribeStreamStatus =
  | "IN_PROGRESS"
  | "PAUSED"
  | "FAILED"
  | "COMPLETED"
  | (string & {});
const MedicalScribeStreamStatus = S.String;

export type BucketName = string;
export type MedicalScribeNoteTemplate =
  | "HISTORY_AND_PHYSICAL"
  | "GIRPP"
  | "DAP"
  | "SIRP"
  | "BIRP"
  | "BEHAVIORAL_SOAP"
  | "PHYSICAL_SOAP"
  | (string & {});
const MedicalScribeNoteTemplate = S.String;

export interface ClinicalNoteGenerationSettings {
  OutputBucketName: string;
  NoteTemplate?: MedicalScribeNoteTemplate;
}
const ClinicalNoteGenerationSettings = /*@__PURE__*/ __L.at(
  __c0,
  5,
) as any as S.Schema<ClinicalNoteGenerationSettings>;
export interface MedicalScribePostStreamAnalyticsSettings {
  ClinicalNoteGenerationSettings: ClinicalNoteGenerationSettings;
}
const MedicalScribePostStreamAnalyticsSettings = /*@__PURE__*/ __L.at(
  __c0,
  6,
) as any as S.Schema<MedicalScribePostStreamAnalyticsSettings>;
export type Uri = string;
export type ClinicalNoteGenerationStatus = "IN_PROGRESS" | "FAILED" | "COMPLETED" | (string & {});
const ClinicalNoteGenerationStatus = S.String;

export interface ClinicalNoteGenerationResult {
  ClinicalNoteOutputLocation?: string;
  TranscriptOutputLocation?: string;
  Status?: ClinicalNoteGenerationStatus;
  FailureReason?: string;
}
const ClinicalNoteGenerationResult = /*@__PURE__*/ __L.at(
  __c0,
  7,
) as any as S.Schema<ClinicalNoteGenerationResult>;
export interface MedicalScribePostStreamAnalyticsResult {
  ClinicalNoteGenerationResult?: ClinicalNoteGenerationResult;
}
const MedicalScribePostStreamAnalyticsResult = /*@__PURE__*/ __L.at(
  __c1,
  0,
) as any as S.Schema<MedicalScribePostStreamAnalyticsResult>;
export interface MedicalScribeStreamDetails {
  SessionId?: string;
  StreamCreatedAt?: Date;
  StreamEndedAt?: Date;
  LanguageCode?: MedicalScribeLanguageCode;
  MediaSampleRateHertz?: number;
  MediaEncoding?: MedicalScribeMediaEncoding;
  VocabularyName?: string;
  VocabularyFilterName?: string;
  VocabularyFilterMethod?: MedicalScribeVocabularyFilterMethod;
  ResourceAccessRoleArn?: string;
  ChannelDefinitions?: MedicalScribeChannelDefinition[];
  EncryptionSettings?: MedicalScribeEncryptionSettings;
  StreamStatus?: MedicalScribeStreamStatus;
  PostStreamAnalyticsSettings?: MedicalScribePostStreamAnalyticsSettings;
  PostStreamAnalyticsResult?: MedicalScribePostStreamAnalyticsResult;
  MedicalScribeContextProvided?: boolean;
}
const MedicalScribeStreamDetails = /*@__PURE__*/ __L.at(
  __c1,
  1,
) as any as S.Schema<MedicalScribeStreamDetails>;
export interface GetMedicalScribeStreamResponse {
  MedicalScribeStreamDetails?: MedicalScribeStreamDetails;
}
const GetMedicalScribeStreamResponse = /*@__PURE__*/ __L.at(
  __c1,
  2,
) as any as S.Schema<GetMedicalScribeStreamResponse>;
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
const CallAnalyticsLanguageCode = S.String;

export type MediaSampleRateHertz = number;
export type MediaEncoding =
  | "pcm"
  | "ogg-opus"
  | "flac"
  | "g711-alaw"
  | "g711-ulaw"
  | "g729"
  | (string & {});
const MediaEncoding = S.String;

export type AudioChunk = Uint8Array;
export interface AudioEvent {
  AudioChunk?: Uint8Array;
}
const AudioEvent = /*@__PURE__*/ __L.at(__c1, 3) as any as S.Schema<AudioEvent>;
export type ChannelId = number;
export type ParticipantRole = "AGENT" | "CUSTOMER" | (string & {});
const ParticipantRole = S.String;

export interface ChannelDefinition {
  ChannelId: number;
  ParticipantRole: ParticipantRole;
}
const ChannelDefinition = /*@__PURE__*/ __L.at(__c1, 4) as any as S.Schema<ChannelDefinition>;
export type ChannelDefinitions = ChannelDefinition[];
const ChannelDefinitions = /*@__PURE__*/ __L.at(__c1, 5);
export type ContentRedactionOutput = "redacted" | "redacted_and_unredacted" | (string & {});
const ContentRedactionOutput = S.String;

export interface PostCallAnalyticsSettings {
  OutputLocation: string;
  DataAccessRoleArn: string;
  ContentRedactionOutput?: ContentRedactionOutput;
  OutputEncryptionKMSKeyId?: string;
}
const PostCallAnalyticsSettings = /*@__PURE__*/ __L.at(
  __c1,
  6,
) as any as S.Schema<PostCallAnalyticsSettings>;
export interface ConfigurationEvent {
  ChannelDefinitions?: ChannelDefinition[];
  PostCallAnalyticsSettings?: PostCallAnalyticsSettings;
}
const ConfigurationEvent = /*@__PURE__*/ __L.at(__c1, 7) as any as S.Schema<ConfigurationEvent>;
export type AudioStream =
  | { AudioEvent: AudioEvent; ConfigurationEvent?: never }
  | { AudioEvent?: never; ConfigurationEvent: ConfigurationEvent };
const AudioStream = /*@__PURE__*/ __L.at(__c2, 0) as any as S.Schema<
  stream.Stream<AudioStream, Error, never>
>;
export type VocabularyFilterMethod = "remove" | "mask" | "tag" | (string & {});
const VocabularyFilterMethod = S.String;

export type ModelName = string;
export type LanguageOptions = string;
export type VocabularyNames = string;
export type VocabularyFilterNames = string;
export type PartialResultsStability = "high" | "medium" | "low" | (string & {});
const PartialResultsStability = S.String;

export type ContentIdentificationType = "PII" | (string & {});
const ContentIdentificationType = S.String;

export type ContentRedactionType = "PII" | (string & {});
const ContentRedactionType = S.String;

export type PiiEntityTypes = string;
export interface StartCallAnalyticsStreamTranscriptionRequest {
  LanguageCode?: CallAnalyticsLanguageCode;
  MediaSampleRateHertz: number;
  MediaEncoding: MediaEncoding;
  VocabularyName?: string;
  SessionId?: string;
  AudioStream: stream.Stream<AudioStream, Error, never>;
  VocabularyFilterName?: string;
  VocabularyFilterMethod?: VocabularyFilterMethod;
  LanguageModelName?: string;
  IdentifyLanguage?: boolean;
  LanguageOptions?: string;
  PreferredLanguage?: CallAnalyticsLanguageCode;
  VocabularyNames?: string;
  VocabularyFilterNames?: string;
  EnablePartialResultsStabilization?: boolean;
  PartialResultsStability?: PartialResultsStability;
  ContentIdentificationType?: ContentIdentificationType;
  ContentRedactionType?: ContentRedactionType;
  PiiEntityTypes?: string;
}
const StartCallAnalyticsStreamTranscriptionRequest = /*@__PURE__*/ __L.at(
  __c2,
  1,
) as any as S.Schema<StartCallAnalyticsStreamTranscriptionRequest>;
export type RequestId = string;
export type ItemType = "pronunciation" | "punctuation" | (string & {});
const ItemType = S.String;

export type Confidence = number;
export type Stable = boolean;
export interface CallAnalyticsItem {
  BeginOffsetMillis?: number;
  EndOffsetMillis?: number;
  Type?: ItemType;
  Content?: string;
  Confidence?: number;
  VocabularyFilterMatch?: boolean;
  Stable?: boolean;
}
const CallAnalyticsItem = /*@__PURE__*/ __L.at(__c2, 2) as any as S.Schema<CallAnalyticsItem>;
export type CallAnalyticsItemList = CallAnalyticsItem[];
const CallAnalyticsItemList = /*@__PURE__*/ __L.at(__c2, 3);
export interface CallAnalyticsEntity {
  BeginOffsetMillis?: number;
  EndOffsetMillis?: number;
  Category?: string;
  Type?: string;
  Content?: string;
  Confidence?: number;
}
const CallAnalyticsEntity = /*@__PURE__*/ __L.at(__c2, 4) as any as S.Schema<CallAnalyticsEntity>;
export type CallAnalyticsEntityList = CallAnalyticsEntity[];
const CallAnalyticsEntityList = /*@__PURE__*/ __L.at(__c2, 5);
export type Sentiment = "POSITIVE" | "NEGATIVE" | "MIXED" | "NEUTRAL" | (string & {});
const Sentiment = S.String;

export interface CharacterOffsets {
  Begin?: number;
  End?: number;
}
const CharacterOffsets = /*@__PURE__*/ __L.at(__c2, 6) as any as S.Schema<CharacterOffsets>;
export interface IssueDetected {
  CharacterOffsets?: CharacterOffsets;
}
const IssueDetected = /*@__PURE__*/ __L.at(__c2, 7) as any as S.Schema<IssueDetected>;
export type IssuesDetected = IssueDetected[];
const IssuesDetected = /*@__PURE__*/ __L.at(__c3, 0);
export interface CallAnalyticsLanguageWithScore {
  LanguageCode?: CallAnalyticsLanguageCode;
  Score?: number;
}
const CallAnalyticsLanguageWithScore = /*@__PURE__*/ __L.at(
  __c3,
  1,
) as any as S.Schema<CallAnalyticsLanguageWithScore>;
export type CallAnalyticsLanguageIdentification = CallAnalyticsLanguageWithScore[];
const CallAnalyticsLanguageIdentification = /*@__PURE__*/ __L.at(__c3, 2);
export interface UtteranceEvent {
  UtteranceId?: string;
  IsPartial?: boolean;
  ParticipantRole?: ParticipantRole;
  BeginOffsetMillis?: number;
  EndOffsetMillis?: number;
  Transcript?: string;
  Items?: CallAnalyticsItem[];
  Entities?: CallAnalyticsEntity[];
  Sentiment?: Sentiment;
  IssuesDetected?: IssueDetected[];
  LanguageCode?: CallAnalyticsLanguageCode;
  LanguageIdentification?: CallAnalyticsLanguageWithScore[];
}
const UtteranceEvent = /*@__PURE__*/ __L.at(__c3, 3) as any as S.Schema<UtteranceEvent>;
export type StringList = string[];
const StringList = /*@__PURE__*/ __L.at(__c3, 4);
export interface TimestampRange {
  BeginOffsetMillis?: number;
  EndOffsetMillis?: number;
}
const TimestampRange = /*@__PURE__*/ __L.at(__c3, 5) as any as S.Schema<TimestampRange>;
export type TimestampRanges = TimestampRange[];
const TimestampRanges = /*@__PURE__*/ __L.at(__c3, 6);
export interface PointsOfInterest {
  TimestampRanges?: TimestampRange[];
}
const PointsOfInterest = /*@__PURE__*/ __L.at(__c3, 7) as any as S.Schema<PointsOfInterest>;
export type MatchedCategoryDetails = { [key: string]: PointsOfInterest | undefined };
const MatchedCategoryDetails = /*@__PURE__*/ __L.at(__c4, 0);
export interface CategoryEvent {
  MatchedCategories?: string[];
  MatchedDetails?: { [key: string]: PointsOfInterest | undefined };
}
const CategoryEvent = /*@__PURE__*/ __L.at(__c4, 1) as any as S.Schema<CategoryEvent>;
export type CallAnalyticsTranscriptResultStream =
  | {
      UtteranceEvent: UtteranceEvent;
      CategoryEvent?: never;
      BadRequestException?: never;
      LimitExceededException?: never;
      InternalFailureException?: never;
      ConflictException?: never;
      ServiceUnavailableException?: never;
    }
  | {
      UtteranceEvent?: never;
      CategoryEvent: CategoryEvent;
      BadRequestException?: never;
      LimitExceededException?: never;
      InternalFailureException?: never;
      ConflictException?: never;
      ServiceUnavailableException?: never;
    }
  | {
      UtteranceEvent?: never;
      CategoryEvent?: never;
      BadRequestException: BadRequestException;
      LimitExceededException?: never;
      InternalFailureException?: never;
      ConflictException?: never;
      ServiceUnavailableException?: never;
    }
  | {
      UtteranceEvent?: never;
      CategoryEvent?: never;
      BadRequestException?: never;
      LimitExceededException: LimitExceededException;
      InternalFailureException?: never;
      ConflictException?: never;
      ServiceUnavailableException?: never;
    }
  | {
      UtteranceEvent?: never;
      CategoryEvent?: never;
      BadRequestException?: never;
      LimitExceededException?: never;
      InternalFailureException: InternalFailureException;
      ConflictException?: never;
      ServiceUnavailableException?: never;
    }
  | {
      UtteranceEvent?: never;
      CategoryEvent?: never;
      BadRequestException?: never;
      LimitExceededException?: never;
      InternalFailureException?: never;
      ConflictException: ConflictException;
      ServiceUnavailableException?: never;
    }
  | {
      UtteranceEvent?: never;
      CategoryEvent?: never;
      BadRequestException?: never;
      LimitExceededException?: never;
      InternalFailureException?: never;
      ConflictException?: never;
      ServiceUnavailableException: ServiceUnavailableException;
    };
const CallAnalyticsTranscriptResultStream = /*@__PURE__*/ __L.at(__c4, 2) as any as S.Schema<
  stream.Stream<CallAnalyticsTranscriptResultStream, Error, never>
>;
export interface StartCallAnalyticsStreamTranscriptionResponse {
  RequestId?: string;
  LanguageCode?: CallAnalyticsLanguageCode;
  MediaSampleRateHertz?: number;
  MediaEncoding?: MediaEncoding;
  VocabularyName?: string;
  SessionId?: string;
  CallAnalyticsTranscriptResultStream?: stream.Stream<
    CallAnalyticsTranscriptResultStream,
    Error,
    never
  >;
  VocabularyFilterName?: string;
  VocabularyFilterMethod?: VocabularyFilterMethod;
  LanguageModelName?: string;
  IdentifyLanguage?: boolean;
  LanguageOptions?: string;
  PreferredLanguage?: CallAnalyticsLanguageCode;
  VocabularyNames?: string;
  VocabularyFilterNames?: string;
  EnablePartialResultsStabilization?: boolean;
  PartialResultsStability?: PartialResultsStability;
  ContentIdentificationType?: ContentIdentificationType;
  ContentRedactionType?: ContentRedactionType;
  PiiEntityTypes?: string;
}
const StartCallAnalyticsStreamTranscriptionResponse = /*@__PURE__*/ __L.at(
  __c4,
  3,
) as any as S.Schema<StartCallAnalyticsStreamTranscriptionResponse>;
export interface MedicalScribeAudioEvent {
  AudioChunk: Uint8Array;
}
const MedicalScribeAudioEvent = /*@__PURE__*/ __L.at(
  __c4,
  4,
) as any as S.Schema<MedicalScribeAudioEvent>;
export type MedicalScribeSessionControlEventType = "END_OF_SESSION" | (string & {});
const MedicalScribeSessionControlEventType = S.String;

export interface MedicalScribeSessionControlEvent {
  Type: MedicalScribeSessionControlEventType;
}
const MedicalScribeSessionControlEvent = /*@__PURE__*/ __L.at(
  __c4,
  5,
) as any as S.Schema<MedicalScribeSessionControlEvent>;
export type Pronouns = "HE_HIM" | "SHE_HER" | "THEY_THEM" | (string & {});
const Pronouns = S.String;

export interface MedicalScribePatientContext {
  Pronouns?: Pronouns;
}
const MedicalScribePatientContext = /*@__PURE__*/ __L.at(
  __c4,
  6,
) as any as S.Schema<MedicalScribePatientContext>;
export interface MedicalScribeContext {
  PatientContext?: MedicalScribePatientContext;
}
const MedicalScribeContext = /*@__PURE__*/ __L.at(__c4, 7) as any as S.Schema<MedicalScribeContext>;
export interface MedicalScribeConfigurationEvent {
  VocabularyName?: string;
  VocabularyFilterName?: string;
  VocabularyFilterMethod?: MedicalScribeVocabularyFilterMethod;
  ResourceAccessRoleArn: string;
  ChannelDefinitions?: MedicalScribeChannelDefinition[];
  EncryptionSettings?: MedicalScribeEncryptionSettings;
  PostStreamAnalyticsSettings: MedicalScribePostStreamAnalyticsSettings;
  MedicalScribeContext?: MedicalScribeContext;
}
const MedicalScribeConfigurationEvent = /*@__PURE__*/ __L.at(
  __c5,
  0,
) as any as S.Schema<MedicalScribeConfigurationEvent>;
export type MedicalScribeInputStream =
  | { AudioEvent: MedicalScribeAudioEvent; SessionControlEvent?: never; ConfigurationEvent?: never }
  | {
      AudioEvent?: never;
      SessionControlEvent: MedicalScribeSessionControlEvent;
      ConfigurationEvent?: never;
    }
  | {
      AudioEvent?: never;
      SessionControlEvent?: never;
      ConfigurationEvent: MedicalScribeConfigurationEvent;
    };
const MedicalScribeInputStream = /*@__PURE__*/ __L.at(__c5, 1) as any as S.Schema<
  stream.Stream<MedicalScribeInputStream, Error, never>
>;
export interface StartMedicalScribeStreamRequest {
  SessionId?: string;
  LanguageCode: MedicalScribeLanguageCode;
  MediaSampleRateHertz: number;
  MediaEncoding: MedicalScribeMediaEncoding;
  InputStream: stream.Stream<MedicalScribeInputStream, Error, never>;
}
const StartMedicalScribeStreamRequest = /*@__PURE__*/ __L.at(
  __c5,
  2,
) as any as S.Schema<StartMedicalScribeStreamRequest>;
export type MedicalScribeTranscriptItemType = "pronunciation" | "punctuation" | (string & {});
const MedicalScribeTranscriptItemType = S.String;

export interface MedicalScribeTranscriptItem {
  BeginAudioTime?: number;
  EndAudioTime?: number;
  Type?: MedicalScribeTranscriptItemType;
  Confidence?: number;
  Content?: string;
  VocabularyFilterMatch?: boolean;
}
const MedicalScribeTranscriptItem = /*@__PURE__*/ __L.at(
  __c5,
  3,
) as any as S.Schema<MedicalScribeTranscriptItem>;
export type MedicalScribeTranscriptItemList = MedicalScribeTranscriptItem[];
const MedicalScribeTranscriptItemList = /*@__PURE__*/ __L.at(__c5, 4);
export interface MedicalScribeTranscriptSegment {
  SegmentId?: string;
  BeginAudioTime?: number;
  EndAudioTime?: number;
  Content?: string;
  Items?: MedicalScribeTranscriptItem[];
  IsPartial?: boolean;
  ChannelId?: string;
}
const MedicalScribeTranscriptSegment = /*@__PURE__*/ __L.at(
  __c5,
  5,
) as any as S.Schema<MedicalScribeTranscriptSegment>;
export interface MedicalScribeTranscriptEvent {
  TranscriptSegment?: MedicalScribeTranscriptSegment;
}
const MedicalScribeTranscriptEvent = /*@__PURE__*/ __L.at(
  __c5,
  6,
) as any as S.Schema<MedicalScribeTranscriptEvent>;
export type MedicalScribeResultStream =
  | {
      TranscriptEvent: MedicalScribeTranscriptEvent;
      BadRequestException?: never;
      LimitExceededException?: never;
      InternalFailureException?: never;
      ConflictException?: never;
      ServiceUnavailableException?: never;
    }
  | {
      TranscriptEvent?: never;
      BadRequestException: BadRequestException;
      LimitExceededException?: never;
      InternalFailureException?: never;
      ConflictException?: never;
      ServiceUnavailableException?: never;
    }
  | {
      TranscriptEvent?: never;
      BadRequestException?: never;
      LimitExceededException: LimitExceededException;
      InternalFailureException?: never;
      ConflictException?: never;
      ServiceUnavailableException?: never;
    }
  | {
      TranscriptEvent?: never;
      BadRequestException?: never;
      LimitExceededException?: never;
      InternalFailureException: InternalFailureException;
      ConflictException?: never;
      ServiceUnavailableException?: never;
    }
  | {
      TranscriptEvent?: never;
      BadRequestException?: never;
      LimitExceededException?: never;
      InternalFailureException?: never;
      ConflictException: ConflictException;
      ServiceUnavailableException?: never;
    }
  | {
      TranscriptEvent?: never;
      BadRequestException?: never;
      LimitExceededException?: never;
      InternalFailureException?: never;
      ConflictException?: never;
      ServiceUnavailableException: ServiceUnavailableException;
    };
const MedicalScribeResultStream = /*@__PURE__*/ __L.at(__c5, 7) as any as S.Schema<
  stream.Stream<MedicalScribeResultStream, Error, never>
>;
export interface StartMedicalScribeStreamResponse {
  SessionId?: string;
  RequestId?: string;
  LanguageCode?: MedicalScribeLanguageCode;
  MediaSampleRateHertz?: number;
  MediaEncoding?: MedicalScribeMediaEncoding;
  ResultStream?: stream.Stream<MedicalScribeResultStream, Error, never>;
}
const StartMedicalScribeStreamResponse = /*@__PURE__*/ __L.at(
  __c6,
  0,
) as any as S.Schema<StartMedicalScribeStreamResponse>;
export type LanguageCode =
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
  | "es-ES"
  | "ar-SA"
  | "pt-PT"
  | "ca-ES"
  | "ar-AE"
  | "hi-IN"
  | "zh-HK"
  | "nl-NL"
  | "no-NO"
  | "sv-SE"
  | "pl-PL"
  | "fi-FI"
  | "zh-TW"
  | "en-IN"
  | "en-IE"
  | "en-NZ"
  | "en-AB"
  | "en-ZA"
  | "en-WL"
  | "de-CH"
  | "af-ZA"
  | "eu-ES"
  | "hr-HR"
  | "cs-CZ"
  | "da-DK"
  | "fa-IR"
  | "gl-ES"
  | "el-GR"
  | "he-IL"
  | "id-ID"
  | "lv-LV"
  | "ms-MY"
  | "ro-RO"
  | "ru-RU"
  | "sr-RS"
  | "sk-SK"
  | "so-SO"
  | "tl-PH"
  | "uk-UA"
  | "vi-VN"
  | "zu-ZA"
  | "am-ET"
  | "be-BY"
  | "bg-BG"
  | "bn-IN"
  | "bs-BA"
  | "ckb-IQ"
  | "ckb-IR"
  | "cy-WL"
  | "es-MX"
  | "et-ET"
  | "fa-AF"
  | "gu-IN"
  | "ht-HT"
  | "hu-HU"
  | "hy-AM"
  | "is-IS"
  | "jv-ID"
  | "ka-GE"
  | "kab-DZ"
  | "kk-KZ"
  | "km-KH"
  | "kn-IN"
  | "lg-IN"
  | "lt-LT"
  | "mk-MK"
  | "ml-IN"
  | "mr-IN"
  | "my-MM"
  | "ne-NP"
  | "or-IN"
  | "pa-IN"
  | "ps-AF"
  | "si-LK"
  | "sl-SI"
  | "sq-AL"
  | "su-ID"
  | "sw-BI"
  | "sw-KE"
  | "sw-RW"
  | "sw-TZ"
  | "sw-UG"
  | "ta-IN"
  | "te-IN"
  | "tr-TR"
  | "uz-UZ"
  | (string & {});
const LanguageCode = S.String;

export type Specialty =
  | "PRIMARYCARE"
  | "CARDIOLOGY"
  | "NEUROLOGY"
  | "ONCOLOGY"
  | "RADIOLOGY"
  | "UROLOGY"
  | (string & {});
const Specialty = S.String;

export type Type = "CONVERSATION" | "DICTATION" | (string & {});
const Type = S.String;

export type NumberOfChannels = number;
export type MedicalContentIdentificationType = "PHI" | (string & {});
const MedicalContentIdentificationType = S.String;

export interface StartMedicalStreamTranscriptionRequest {
  LanguageCode: LanguageCode;
  MediaSampleRateHertz: number;
  MediaEncoding: MediaEncoding;
  VocabularyName?: string;
  Specialty: Specialty;
  Type: Type;
  ShowSpeakerLabel?: boolean;
  SessionId?: string;
  AudioStream: stream.Stream<AudioStream, Error, never>;
  EnableChannelIdentification?: boolean;
  NumberOfChannels?: number;
  ContentIdentificationType?: MedicalContentIdentificationType;
}
const StartMedicalStreamTranscriptionRequest = /*@__PURE__*/ __L.at(
  __c6,
  1,
) as any as S.Schema<StartMedicalStreamTranscriptionRequest>;
export interface MedicalItem {
  StartTime?: number;
  EndTime?: number;
  Type?: ItemType;
  Content?: string;
  Confidence?: number;
  Speaker?: string;
}
const MedicalItem = /*@__PURE__*/ __L.at(__c6, 2) as any as S.Schema<MedicalItem>;
export type MedicalItemList = MedicalItem[];
const MedicalItemList = /*@__PURE__*/ __L.at(__c6, 3);
export interface MedicalEntity {
  StartTime?: number;
  EndTime?: number;
  Category?: string;
  Content?: string;
  Confidence?: number;
}
const MedicalEntity = /*@__PURE__*/ __L.at(__c6, 4) as any as S.Schema<MedicalEntity>;
export type MedicalEntityList = MedicalEntity[];
const MedicalEntityList = /*@__PURE__*/ __L.at(__c6, 5);
export interface MedicalAlternative {
  Transcript?: string;
  Items?: MedicalItem[];
  Entities?: MedicalEntity[];
}
const MedicalAlternative = /*@__PURE__*/ __L.at(__c6, 6) as any as S.Schema<MedicalAlternative>;
export type MedicalAlternativeList = MedicalAlternative[];
const MedicalAlternativeList = /*@__PURE__*/ __L.at(__c6, 7);
export interface MedicalResult {
  ResultId?: string;
  StartTime?: number;
  EndTime?: number;
  IsPartial?: boolean;
  Alternatives?: MedicalAlternative[];
  ChannelId?: string;
}
const MedicalResult = /*@__PURE__*/ __L.at(__c7, 0) as any as S.Schema<MedicalResult>;
export type MedicalResultList = MedicalResult[];
const MedicalResultList = /*@__PURE__*/ __L.at(__c7, 1);
export interface MedicalTranscript {
  Results?: MedicalResult[];
}
const MedicalTranscript = /*@__PURE__*/ __L.at(__c7, 2) as any as S.Schema<MedicalTranscript>;
export interface MedicalTranscriptEvent {
  Transcript?: MedicalTranscript;
}
const MedicalTranscriptEvent = /*@__PURE__*/ __L.at(
  __c7,
  3,
) as any as S.Schema<MedicalTranscriptEvent>;
export type MedicalTranscriptResultStream =
  | {
      TranscriptEvent: MedicalTranscriptEvent;
      BadRequestException?: never;
      LimitExceededException?: never;
      InternalFailureException?: never;
      ConflictException?: never;
      ServiceUnavailableException?: never;
    }
  | {
      TranscriptEvent?: never;
      BadRequestException: BadRequestException;
      LimitExceededException?: never;
      InternalFailureException?: never;
      ConflictException?: never;
      ServiceUnavailableException?: never;
    }
  | {
      TranscriptEvent?: never;
      BadRequestException?: never;
      LimitExceededException: LimitExceededException;
      InternalFailureException?: never;
      ConflictException?: never;
      ServiceUnavailableException?: never;
    }
  | {
      TranscriptEvent?: never;
      BadRequestException?: never;
      LimitExceededException?: never;
      InternalFailureException: InternalFailureException;
      ConflictException?: never;
      ServiceUnavailableException?: never;
    }
  | {
      TranscriptEvent?: never;
      BadRequestException?: never;
      LimitExceededException?: never;
      InternalFailureException?: never;
      ConflictException: ConflictException;
      ServiceUnavailableException?: never;
    }
  | {
      TranscriptEvent?: never;
      BadRequestException?: never;
      LimitExceededException?: never;
      InternalFailureException?: never;
      ConflictException?: never;
      ServiceUnavailableException: ServiceUnavailableException;
    };
const MedicalTranscriptResultStream = /*@__PURE__*/ __L.at(__c7, 4) as any as S.Schema<
  stream.Stream<MedicalTranscriptResultStream, Error, never>
>;
export interface StartMedicalStreamTranscriptionResponse {
  RequestId?: string;
  LanguageCode?: LanguageCode;
  MediaSampleRateHertz?: number;
  MediaEncoding?: MediaEncoding;
  VocabularyName?: string;
  Specialty?: Specialty;
  Type?: Type;
  ShowSpeakerLabel?: boolean;
  SessionId?: string;
  TranscriptResultStream?: stream.Stream<MedicalTranscriptResultStream, Error, never>;
  EnableChannelIdentification?: boolean;
  NumberOfChannels?: number;
  ContentIdentificationType?: MedicalContentIdentificationType;
}
const StartMedicalStreamTranscriptionResponse = /*@__PURE__*/ __L.at(
  __c7,
  5,
) as any as S.Schema<StartMedicalStreamTranscriptionResponse>;
export type SessionResumeWindow = number;
export type TranscriptFormat = "spoken" | "written" | (string & {});
const TranscriptFormat = S.String;

export interface StartStreamTranscriptionRequest {
  LanguageCode?: LanguageCode;
  MediaSampleRateHertz: number;
  MediaEncoding: MediaEncoding;
  VocabularyName?: string;
  SessionId?: string;
  AudioStream: stream.Stream<AudioStream, Error, never>;
  VocabularyFilterName?: string;
  VocabularyFilterMethod?: VocabularyFilterMethod;
  ShowSpeakerLabel?: boolean;
  EnableChannelIdentification?: boolean;
  NumberOfChannels?: number;
  EnablePartialResultsStabilization?: boolean;
  PartialResultsStability?: PartialResultsStability;
  ContentIdentificationType?: ContentIdentificationType;
  ContentRedactionType?: ContentRedactionType;
  PiiEntityTypes?: string;
  LanguageModelName?: string;
  IdentifyLanguage?: boolean;
  LanguageOptions?: string;
  PreferredLanguage?: LanguageCode;
  IdentifyMultipleLanguages?: boolean;
  VocabularyNames?: string;
  VocabularyFilterNames?: string;
  SessionResumeWindow?: number;
  TranscriptFormat?: TranscriptFormat;
}
const StartStreamTranscriptionRequest = /*@__PURE__*/ __L.at(
  __c7,
  6,
) as any as S.Schema<StartStreamTranscriptionRequest>;
export interface Item {
  StartTime?: number;
  EndTime?: number;
  Type?: ItemType;
  Content?: string;
  VocabularyFilterMatch?: boolean;
  Speaker?: string;
  Confidence?: number;
  Stable?: boolean;
}
const Item = /*@__PURE__*/ __L.at(__c7, 7) as any as S.Schema<Item>;
export type ItemList = Item[];
const ItemList = /*@__PURE__*/ __L.at(__c8, 0);
export interface Entity {
  StartTime?: number;
  EndTime?: number;
  Category?: string;
  Type?: string;
  Content?: string;
  Confidence?: number;
}
const Entity = /*@__PURE__*/ __L.at(__c8, 1) as any as S.Schema<Entity>;
export type EntityList = Entity[];
const EntityList = /*@__PURE__*/ __L.at(__c8, 2);
export interface Alternative {
  Transcript?: string;
  Items?: Item[];
  Entities?: Entity[];
}
const Alternative = /*@__PURE__*/ __L.at(__c8, 3) as any as S.Schema<Alternative>;
export type AlternativeList = Alternative[];
const AlternativeList = /*@__PURE__*/ __L.at(__c8, 4);
export interface LanguageWithScore {
  LanguageCode?: LanguageCode;
  Score?: number;
}
const LanguageWithScore = /*@__PURE__*/ __L.at(__c8, 5) as any as S.Schema<LanguageWithScore>;
export type LanguageIdentification = LanguageWithScore[];
const LanguageIdentification = /*@__PURE__*/ __L.at(__c8, 6);
export interface Result {
  ResultId?: string;
  StartTime?: number;
  EndTime?: number;
  IsPartial?: boolean;
  Alternatives?: Alternative[];
  ChannelId?: string;
  LanguageCode?: LanguageCode;
  LanguageIdentification?: LanguageWithScore[];
}
const Result = /*@__PURE__*/ __L.at(__c8, 7) as any as S.Schema<Result>;
export type ResultList = Result[];
const ResultList = /*@__PURE__*/ __L.at(__c9, 0);
export interface Transcript {
  Results?: Result[];
}
const Transcript = /*@__PURE__*/ __L.at(__c9, 1) as any as S.Schema<Transcript>;
export interface TranscriptEvent {
  Transcript?: Transcript;
}
const TranscriptEvent = /*@__PURE__*/ __L.at(__c9, 2) as any as S.Schema<TranscriptEvent>;
export type TranscriptResultStream =
  | {
      TranscriptEvent: TranscriptEvent;
      BadRequestException?: never;
      LimitExceededException?: never;
      InternalFailureException?: never;
      ConflictException?: never;
      ServiceUnavailableException?: never;
    }
  | {
      TranscriptEvent?: never;
      BadRequestException: BadRequestException;
      LimitExceededException?: never;
      InternalFailureException?: never;
      ConflictException?: never;
      ServiceUnavailableException?: never;
    }
  | {
      TranscriptEvent?: never;
      BadRequestException?: never;
      LimitExceededException: LimitExceededException;
      InternalFailureException?: never;
      ConflictException?: never;
      ServiceUnavailableException?: never;
    }
  | {
      TranscriptEvent?: never;
      BadRequestException?: never;
      LimitExceededException?: never;
      InternalFailureException: InternalFailureException;
      ConflictException?: never;
      ServiceUnavailableException?: never;
    }
  | {
      TranscriptEvent?: never;
      BadRequestException?: never;
      LimitExceededException?: never;
      InternalFailureException?: never;
      ConflictException: ConflictException;
      ServiceUnavailableException?: never;
    }
  | {
      TranscriptEvent?: never;
      BadRequestException?: never;
      LimitExceededException?: never;
      InternalFailureException?: never;
      ConflictException?: never;
      ServiceUnavailableException: ServiceUnavailableException;
    };
const TranscriptResultStream = /*@__PURE__*/ __L.at(__c9, 3) as any as S.Schema<
  stream.Stream<TranscriptResultStream, Error, never>
>;
export interface StartStreamTranscriptionResponse {
  RequestId?: string;
  LanguageCode?: LanguageCode;
  MediaSampleRateHertz?: number;
  MediaEncoding?: MediaEncoding;
  VocabularyName?: string;
  SessionId?: string;
  TranscriptResultStream?: stream.Stream<TranscriptResultStream, Error, never>;
  VocabularyFilterName?: string;
  VocabularyFilterMethod?: VocabularyFilterMethod;
  ShowSpeakerLabel?: boolean;
  EnableChannelIdentification?: boolean;
  NumberOfChannels?: number;
  EnablePartialResultsStabilization?: boolean;
  PartialResultsStability?: PartialResultsStability;
  ContentIdentificationType?: ContentIdentificationType;
  ContentRedactionType?: ContentRedactionType;
  PiiEntityTypes?: string;
  LanguageModelName?: string;
  IdentifyLanguage?: boolean;
  LanguageOptions?: string;
  PreferredLanguage?: LanguageCode;
  IdentifyMultipleLanguages?: boolean;
  VocabularyNames?: string;
  VocabularyFilterNames?: string;
  SessionResumeWindow?: number;
  TranscriptFormat?: TranscriptFormat;
}
const StartStreamTranscriptionResponse = /*@__PURE__*/ __L.at(
  __c9,
  4,
) as any as S.Schema<StartStreamTranscriptionResponse>;
export type GetMedicalScribeStreamError =
  | BadRequestException
  | InternalFailureException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Provides details about the specified Amazon Web Services HealthScribe streaming session.
 * To view the status of the streaming session, check the `StreamStatus` field in the response. To get the
 * details of post-stream analytics, including its status, check the `PostStreamAnalyticsResult` field in the response.
 */
export const getMedicalScribeStream: API.OperationMethod<
  GetMedicalScribeStreamRequest,
  GetMedicalScribeStreamResponse,
  GetMedicalScribeStreamError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetMedicalScribeStreamRequest,
  output: GetMedicalScribeStreamResponse,
  errors: [
    BadRequestException,
    InternalFailureException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetMedicalScribeStream",
}));

export type StartCallAnalyticsStreamTranscriptionError =
  | BadRequestException
  | ConflictException
  | InternalFailureException
  | LimitExceededException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Starts a bidirectional HTTP/2 or WebSocket stream where audio is streamed to
 * Amazon Transcribe and the transcription results are streamed to your application. Use this operation
 * for Call Analytics transcriptions.
 *
 * The following parameters are required:
 *
 * - `language-code` or `identify-language`
 *
 * - `media-encoding`
 *
 * - `sample-rate`
 *
 * For more information on streaming with Amazon Transcribe, see Transcribing streaming audio.
 */
export const startCallAnalyticsStreamTranscription: API.OperationMethod<
  StartCallAnalyticsStreamTranscriptionRequest,
  StartCallAnalyticsStreamTranscriptionResponse,
  StartCallAnalyticsStreamTranscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartCallAnalyticsStreamTranscriptionRequest,
  output: StartCallAnalyticsStreamTranscriptionResponse,
  errors: [
    BadRequestException,
    ConflictException,
    InternalFailureException,
    LimitExceededException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartCallAnalyticsStreamTranscription",
}));

export type StartMedicalScribeStreamError =
  | BadRequestException
  | ConflictException
  | InternalFailureException
  | LimitExceededException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Starts a bidirectional HTTP/2 stream, where audio is streamed to
 * Amazon Web Services HealthScribe
 * and the transcription results are streamed to your application.
 *
 * When you start a stream, you first specify the stream configuration in a `MedicalScribeConfigurationEvent`.
 * This event includes channel definitions, encryption settings, medical scribe context, and post-stream analytics settings, such as the output configuration for aggregated transcript and clinical note generation. These are additional
 * streaming session configurations beyond those provided in your initial start request headers. Whether you are starting a new session or resuming an existing session,
 * your first event must be a `MedicalScribeConfigurationEvent`.
 *
 * After you send a `MedicalScribeConfigurationEvent`, you start `AudioEvents` and Amazon Web Services HealthScribe
 * responds with real-time transcription results. When you are finished, to start processing the results with the post-stream analytics, send a `MedicalScribeSessionControlEvent` with a `Type` of
 * `END_OF_SESSION` and Amazon Web Services HealthScribe starts the analytics.
 *
 * You can pause or resume streaming.
 * To pause streaming, complete the input stream without sending the
 * `MedicalScribeSessionControlEvent`.
 * To resume streaming, call the `StartMedicalScribeStream` and specify the same SessionId you used to start the stream.
 *
 * The following parameters are required:
 *
 * - `language-code`
 *
 * - `media-encoding`
 *
 * - `media-sample-rate-hertz`
 *
 * For more information on streaming with
 * Amazon Web Services HealthScribe,
 * see Amazon Web Services HealthScribe.
 */
export const startMedicalScribeStream: API.OperationMethod<
  StartMedicalScribeStreamRequest,
  StartMedicalScribeStreamResponse,
  StartMedicalScribeStreamError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartMedicalScribeStreamRequest,
  output: StartMedicalScribeStreamResponse,
  errors: [
    BadRequestException,
    ConflictException,
    InternalFailureException,
    LimitExceededException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartMedicalScribeStream",
}));

export type StartMedicalStreamTranscriptionError =
  | BadRequestException
  | ConflictException
  | InternalFailureException
  | LimitExceededException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Starts a bidirectional HTTP/2 or WebSocket stream where audio is streamed to
 * Amazon Transcribe Medical and the transcription results are streamed to your
 * application.
 *
 * The following parameters are required:
 *
 * - `language-code`
 *
 * - `media-encoding`
 *
 * - `sample-rate`
 *
 * For more information on streaming with Amazon Transcribe Medical, see
 * Transcribing
 * streaming audio.
 */
export const startMedicalStreamTranscription: API.OperationMethod<
  StartMedicalStreamTranscriptionRequest,
  StartMedicalStreamTranscriptionResponse,
  StartMedicalStreamTranscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartMedicalStreamTranscriptionRequest,
  output: StartMedicalStreamTranscriptionResponse,
  errors: [
    BadRequestException,
    ConflictException,
    InternalFailureException,
    LimitExceededException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartMedicalStreamTranscription",
}));

export type StartStreamTranscriptionError =
  | BadRequestException
  | ConflictException
  | InternalFailureException
  | LimitExceededException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Starts a bidirectional HTTP/2 or WebSocket stream where audio is streamed to
 * Amazon Transcribe and the transcription results are streamed to your application.
 *
 * The following parameters are required:
 *
 * - `language-code` or `identify-language` or `identify-multiple-language`
 *
 * - `media-encoding`
 *
 * - `sample-rate`
 *
 * For more information on streaming with Amazon Transcribe, see Transcribing streaming audio.
 */
export const startStreamTranscription: API.OperationMethod<
  StartStreamTranscriptionRequest,
  StartStreamTranscriptionResponse,
  StartStreamTranscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartStreamTranscriptionRequest,
  output: StartStreamTranscriptionResponse,
  errors: [
    BadRequestException,
    ConflictException,
    InternalFailureException,
    LimitExceededException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartStreamTranscription",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ SessionId: S.String.pipe(T.HttpLabel("SessionId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/medical-scribe-stream/{SessionId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetMedicalScribeStreamRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ChannelId: S.Number, ParticipantRole: MedicalScribeParticipantRole }),
      ).annotate({
        identifier: "MedicalScribeChannelDefinition",
      });
    case 2:
      return S.Array(MedicalScribeChannelDefinition);
    case 3:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 4:
      return S.suspend(() =>
        S.Struct({ KmsEncryptionContext: S.optional(KMSEncryptionContextMap), KmsKeyId: S.String }),
      ).annotate({
        identifier: "MedicalScribeEncryptionSettings",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          OutputBucketName: S.String,
          NoteTemplate: S.optional(MedicalScribeNoteTemplate),
        }),
      ).annotate({
        identifier: "ClinicalNoteGenerationSettings",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ ClinicalNoteGenerationSettings: ClinicalNoteGenerationSettings }),
      ).annotate({
        identifier: "MedicalScribePostStreamAnalyticsSettings",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ClinicalNoteOutputLocation: S.optional(S.String),
          TranscriptOutputLocation: S.optional(S.String),
          Status: S.optional(ClinicalNoteGenerationStatus),
          FailureReason: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ClinicalNoteGenerationResult",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ClinicalNoteGenerationResult: S.optional(ClinicalNoteGenerationResult) }),
      ).annotate({
        identifier: "MedicalScribePostStreamAnalyticsResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          SessionId: S.optional(S.String),
          StreamCreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          StreamEndedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LanguageCode: S.optional(MedicalScribeLanguageCode),
          MediaSampleRateHertz: S.optional(S.Number),
          MediaEncoding: S.optional(MedicalScribeMediaEncoding),
          VocabularyName: S.optional(S.String),
          VocabularyFilterName: S.optional(S.String),
          VocabularyFilterMethod: S.optional(MedicalScribeVocabularyFilterMethod),
          ResourceAccessRoleArn: S.optional(S.String),
          ChannelDefinitions: S.optional(MedicalScribeChannelDefinitions),
          EncryptionSettings: S.optional(MedicalScribeEncryptionSettings),
          StreamStatus: S.optional(MedicalScribeStreamStatus),
          PostStreamAnalyticsSettings: S.optional(MedicalScribePostStreamAnalyticsSettings),
          PostStreamAnalyticsResult: S.optional(MedicalScribePostStreamAnalyticsResult),
          MedicalScribeContextProvided: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "MedicalScribeStreamDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ MedicalScribeStreamDetails: S.optional(MedicalScribeStreamDetails) }),
      ).annotate({
        identifier: "GetMedicalScribeStreamResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ AudioChunk: S.optional(T.Blob).pipe(T.EventPayload()) }),
      ).annotate({ identifier: "AudioEvent" });
    case 4:
      return S.suspend(() =>
        S.Struct({ ChannelId: S.Number, ParticipantRole: ParticipantRole }),
      ).annotate({ identifier: "ChannelDefinition" });
    case 5:
      return S.Array(ChannelDefinition);
    case 6:
      return S.suspend(() =>
        S.Struct({
          OutputLocation: S.String,
          DataAccessRoleArn: S.String,
          ContentRedactionOutput: S.optional(ContentRedactionOutput),
          OutputEncryptionKMSKeyId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "PostCallAnalyticsSettings",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ChannelDefinitions: S.optional(ChannelDefinitions),
          PostCallAnalyticsSettings: S.optional(PostCallAnalyticsSettings),
        }),
      ).annotate({ identifier: "ConfigurationEvent" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return T.InputEventStream(
        /*@__PURE__*/ S.Union([
          /*@__PURE__*/ S.Struct({ AudioEvent: AudioEvent }),
          /*@__PURE__*/ S.Struct({ ConfigurationEvent: ConfigurationEvent }),
        ]),
      );
    case 1:
      return S.suspend(() =>
        S.Struct({
          LanguageCode: S.optional(CallAnalyticsLanguageCode).pipe(
            T.HttpHeader("x-amzn-transcribe-language-code"),
          ),
          MediaSampleRateHertz: S.Number.pipe(T.HttpHeader("x-amzn-transcribe-sample-rate")),
          MediaEncoding: MediaEncoding.pipe(T.HttpHeader("x-amzn-transcribe-media-encoding")),
          VocabularyName: S.optional(S.String).pipe(
            T.HttpHeader("x-amzn-transcribe-vocabulary-name"),
          ),
          SessionId: S.optional(S.String).pipe(T.HttpHeader("x-amzn-transcribe-session-id")),
          AudioStream: AudioStream.pipe(T.HttpPayload()),
          VocabularyFilterName: S.optional(S.String).pipe(
            T.HttpHeader("x-amzn-transcribe-vocabulary-filter-name"),
          ),
          VocabularyFilterMethod: S.optional(VocabularyFilterMethod).pipe(
            T.HttpHeader("x-amzn-transcribe-vocabulary-filter-method"),
          ),
          LanguageModelName: S.optional(S.String).pipe(
            T.HttpHeader("x-amzn-transcribe-language-model-name"),
          ),
          IdentifyLanguage: S.optional(S.Boolean).pipe(
            T.HttpHeader("x-amzn-transcribe-identify-language"),
          ),
          LanguageOptions: S.optional(S.String).pipe(
            T.HttpHeader("x-amzn-transcribe-language-options"),
          ),
          PreferredLanguage: S.optional(CallAnalyticsLanguageCode).pipe(
            T.HttpHeader("x-amzn-transcribe-preferred-language"),
          ),
          VocabularyNames: S.optional(S.String).pipe(
            T.HttpHeader("x-amzn-transcribe-vocabulary-names"),
          ),
          VocabularyFilterNames: S.optional(S.String).pipe(
            T.HttpHeader("x-amzn-transcribe-vocabulary-filter-names"),
          ),
          EnablePartialResultsStabilization: S.optional(S.Boolean).pipe(
            T.HttpHeader("x-amzn-transcribe-enable-partial-results-stabilization"),
          ),
          PartialResultsStability: S.optional(PartialResultsStability).pipe(
            T.HttpHeader("x-amzn-transcribe-partial-results-stability"),
          ),
          ContentIdentificationType: S.optional(ContentIdentificationType).pipe(
            T.HttpHeader("x-amzn-transcribe-content-identification-type"),
          ),
          ContentRedactionType: S.optional(ContentRedactionType).pipe(
            T.HttpHeader("x-amzn-transcribe-content-redaction-type"),
          ),
          PiiEntityTypes: S.optional(S.String).pipe(
            T.HttpHeader("x-amzn-transcribe-pii-entity-types"),
          ),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/call-analytics-stream-transcription" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartCallAnalyticsStreamTranscriptionRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          BeginOffsetMillis: S.optional(S.Number),
          EndOffsetMillis: S.optional(S.Number),
          Type: S.optional(ItemType),
          Content: S.optional(S.String),
          Confidence: S.optional(S.Number),
          VocabularyFilterMatch: S.optional(S.Boolean),
          Stable: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "CallAnalyticsItem" });
    case 3:
      return S.Array(CallAnalyticsItem);
    case 4:
      return S.suspend(() =>
        S.Struct({
          BeginOffsetMillis: S.optional(S.Number),
          EndOffsetMillis: S.optional(S.Number),
          Category: S.optional(S.String),
          Type: S.optional(S.String),
          Content: S.optional(S.String),
          Confidence: S.optional(S.Number),
        }),
      ).annotate({ identifier: "CallAnalyticsEntity" });
    case 5:
      return S.Array(CallAnalyticsEntity);
    case 6:
      return S.suspend(() =>
        S.Struct({ Begin: S.optional(S.Number), End: S.optional(S.Number) }),
      ).annotate({ identifier: "CharacterOffsets" });
    case 7:
      return S.suspend(() => S.Struct({ CharacterOffsets: S.optional(CharacterOffsets) })).annotate(
        { identifier: "IssueDetected" },
      );
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.Array(IssueDetected);
    case 1:
      return S.suspend(() =>
        S.Struct({
          LanguageCode: S.optional(CallAnalyticsLanguageCode),
          Score: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "CallAnalyticsLanguageWithScore",
      });
    case 2:
      return S.Array(CallAnalyticsLanguageWithScore);
    case 3:
      return S.suspend(() =>
        S.Struct({
          UtteranceId: S.optional(S.String),
          IsPartial: S.optional(S.Boolean),
          ParticipantRole: S.optional(ParticipantRole),
          BeginOffsetMillis: S.optional(S.Number),
          EndOffsetMillis: S.optional(S.Number),
          Transcript: S.optional(S.String),
          Items: S.optional(CallAnalyticsItemList),
          Entities: S.optional(CallAnalyticsEntityList),
          Sentiment: S.optional(Sentiment),
          IssuesDetected: S.optional(IssuesDetected),
          LanguageCode: S.optional(CallAnalyticsLanguageCode),
          LanguageIdentification: S.optional(CallAnalyticsLanguageIdentification),
        }),
      ).annotate({ identifier: "UtteranceEvent" });
    case 4:
      return S.Array(S.String);
    case 5:
      return S.suspend(() =>
        S.Struct({
          BeginOffsetMillis: S.optional(S.Number),
          EndOffsetMillis: S.optional(S.Number),
        }),
      ).annotate({ identifier: "TimestampRange" });
    case 6:
      return S.Array(TimestampRange);
    case 7:
      return S.suspend(() => S.Struct({ TimestampRanges: S.optional(TimestampRanges) })).annotate({
        identifier: "PointsOfInterest",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ PointsOfInterest.pipe(S.optional));
    case 1:
      return S.suspend(() =>
        S.Struct({
          MatchedCategories: S.optional(StringList),
          MatchedDetails: S.optional(MatchedCategoryDetails),
        }),
      ).annotate({ identifier: "CategoryEvent" });
    case 2:
      return T.EventStream(
        /*@__PURE__*/ S.Union([
          /*@__PURE__*/ S.Struct({ UtteranceEvent: UtteranceEvent }),
          /*@__PURE__*/ S.Struct({ CategoryEvent: CategoryEvent }),
          /*@__PURE__*/ S.Struct({
            BadRequestException: /*@__PURE__*/ S.suspend(() => BadRequestException).annotate({
              identifier: "BadRequestException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            LimitExceededException: /*@__PURE__*/ S.suspend(() => LimitExceededException).annotate({
              identifier: "LimitExceededException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            InternalFailureException: /*@__PURE__*/ S.suspend(
              () => InternalFailureException,
            ).annotate({
              identifier: "InternalFailureException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            ConflictException: /*@__PURE__*/ S.suspend(() => ConflictException).annotate({
              identifier: "ConflictException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            ServiceUnavailableException: /*@__PURE__*/ S.suspend(
              () => ServiceUnavailableException,
            ).annotate({
              identifier: "ServiceUnavailableException",
            }),
          }),
        ]),
      );
    case 3:
      return S.suspend(() =>
        S.Struct({
          RequestId: S.optional(S.String).pipe(T.HttpHeader("x-amzn-request-id")),
          LanguageCode: S.optional(CallAnalyticsLanguageCode).pipe(
            T.HttpHeader("x-amzn-transcribe-language-code"),
          ),
          MediaSampleRateHertz: S.optional(S.Number).pipe(
            T.HttpHeader("x-amzn-transcribe-sample-rate"),
          ),
          MediaEncoding: S.optional(MediaEncoding).pipe(
            T.HttpHeader("x-amzn-transcribe-media-encoding"),
          ),
          VocabularyName: S.optional(S.String).pipe(
            T.HttpHeader("x-amzn-transcribe-vocabulary-name"),
          ),
          SessionId: S.optional(S.String).pipe(T.HttpHeader("x-amzn-transcribe-session-id")),
          CallAnalyticsTranscriptResultStream: S.optional(CallAnalyticsTranscriptResultStream).pipe(
            T.HttpPayload(),
          ),
          VocabularyFilterName: S.optional(S.String).pipe(
            T.HttpHeader("x-amzn-transcribe-vocabulary-filter-name"),
          ),
          VocabularyFilterMethod: S.optional(VocabularyFilterMethod).pipe(
            T.HttpHeader("x-amzn-transcribe-vocabulary-filter-method"),
          ),
          LanguageModelName: S.optional(S.String).pipe(
            T.HttpHeader("x-amzn-transcribe-language-model-name"),
          ),
          IdentifyLanguage: S.optional(S.Boolean).pipe(
            T.HttpHeader("x-amzn-transcribe-identify-language"),
          ),
          LanguageOptions: S.optional(S.String).pipe(
            T.HttpHeader("x-amzn-transcribe-language-options"),
          ),
          PreferredLanguage: S.optional(CallAnalyticsLanguageCode).pipe(
            T.HttpHeader("x-amzn-transcribe-preferred-language"),
          ),
          VocabularyNames: S.optional(S.String).pipe(
            T.HttpHeader("x-amzn-transcribe-vocabulary-names"),
          ),
          VocabularyFilterNames: S.optional(S.String).pipe(
            T.HttpHeader("x-amzn-transcribe-vocabulary-filter-names"),
          ),
          EnablePartialResultsStabilization: S.optional(S.Boolean).pipe(
            T.HttpHeader("x-amzn-transcribe-enable-partial-results-stabilization"),
          ),
          PartialResultsStability: S.optional(PartialResultsStability).pipe(
            T.HttpHeader("x-amzn-transcribe-partial-results-stability"),
          ),
          ContentIdentificationType: S.optional(ContentIdentificationType).pipe(
            T.HttpHeader("x-amzn-transcribe-content-identification-type"),
          ),
          ContentRedactionType: S.optional(ContentRedactionType).pipe(
            T.HttpHeader("x-amzn-transcribe-content-redaction-type"),
          ),
          PiiEntityTypes: S.optional(S.String).pipe(
            T.HttpHeader("x-amzn-transcribe-pii-entity-types"),
          ),
        }),
      ).annotate({
        identifier: "StartCallAnalyticsStreamTranscriptionResponse",
      });
    case 4:
      return S.suspend(() => S.Struct({ AudioChunk: T.Blob.pipe(T.EventPayload()) })).annotate({
        identifier: "MedicalScribeAudioEvent",
      });
    case 5:
      return S.suspend(() => S.Struct({ Type: MedicalScribeSessionControlEventType })).annotate({
        identifier: "MedicalScribeSessionControlEvent",
      });
    case 6:
      return S.suspend(() => S.Struct({ Pronouns: S.optional(Pronouns) })).annotate({
        identifier: "MedicalScribePatientContext",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ PatientContext: S.optional(MedicalScribePatientContext) }),
      ).annotate({ identifier: "MedicalScribeContext" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          VocabularyName: S.optional(S.String),
          VocabularyFilterName: S.optional(S.String),
          VocabularyFilterMethod: S.optional(MedicalScribeVocabularyFilterMethod),
          ResourceAccessRoleArn: S.String,
          ChannelDefinitions: S.optional(MedicalScribeChannelDefinitions),
          EncryptionSettings: S.optional(MedicalScribeEncryptionSettings),
          PostStreamAnalyticsSettings: MedicalScribePostStreamAnalyticsSettings,
          MedicalScribeContext: S.optional(MedicalScribeContext),
        }),
      ).annotate({
        identifier: "MedicalScribeConfigurationEvent",
      });
    case 1:
      return T.InputEventStream(
        /*@__PURE__*/ S.Union([
          /*@__PURE__*/ S.Struct({ AudioEvent: MedicalScribeAudioEvent }),
          /*@__PURE__*/ S.Struct({ SessionControlEvent: MedicalScribeSessionControlEvent }),
          /*@__PURE__*/ S.Struct({ ConfigurationEvent: MedicalScribeConfigurationEvent }),
        ]),
      );
    case 2:
      return S.suspend(() =>
        S.Struct({
          SessionId: S.optional(S.String).pipe(T.HttpHeader("x-amzn-transcribe-session-id")),
          LanguageCode: MedicalScribeLanguageCode.pipe(
            T.HttpHeader("x-amzn-transcribe-language-code"),
          ),
          MediaSampleRateHertz: S.Number.pipe(T.HttpHeader("x-amzn-transcribe-sample-rate")),
          MediaEncoding: MedicalScribeMediaEncoding.pipe(
            T.HttpHeader("x-amzn-transcribe-media-encoding"),
          ),
          InputStream: MedicalScribeInputStream.pipe(T.HttpPayload()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/medical-scribe-stream" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartMedicalScribeStreamRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          BeginAudioTime: S.optional(S.Number),
          EndAudioTime: S.optional(S.Number),
          Type: S.optional(MedicalScribeTranscriptItemType),
          Confidence: S.optional(S.Number),
          Content: S.optional(S.String),
          VocabularyFilterMatch: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "MedicalScribeTranscriptItem",
      });
    case 4:
      return S.Array(MedicalScribeTranscriptItem);
    case 5:
      return S.suspend(() =>
        S.Struct({
          SegmentId: S.optional(S.String),
          BeginAudioTime: S.optional(S.Number),
          EndAudioTime: S.optional(S.Number),
          Content: S.optional(S.String),
          Items: S.optional(MedicalScribeTranscriptItemList),
          IsPartial: S.optional(S.Boolean),
          ChannelId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "MedicalScribeTranscriptSegment",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ TranscriptSegment: S.optional(MedicalScribeTranscriptSegment) }),
      ).annotate({
        identifier: "MedicalScribeTranscriptEvent",
      });
    case 7:
      return T.EventStream(
        /*@__PURE__*/ S.Union([
          /*@__PURE__*/ S.Struct({ TranscriptEvent: MedicalScribeTranscriptEvent }),
          /*@__PURE__*/ S.Struct({
            BadRequestException: /*@__PURE__*/ S.suspend(() => BadRequestException).annotate({
              identifier: "BadRequestException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            LimitExceededException: /*@__PURE__*/ S.suspend(() => LimitExceededException).annotate({
              identifier: "LimitExceededException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            InternalFailureException: /*@__PURE__*/ S.suspend(
              () => InternalFailureException,
            ).annotate({
              identifier: "InternalFailureException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            ConflictException: /*@__PURE__*/ S.suspend(() => ConflictException).annotate({
              identifier: "ConflictException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            ServiceUnavailableException: /*@__PURE__*/ S.suspend(
              () => ServiceUnavailableException,
            ).annotate({
              identifier: "ServiceUnavailableException",
            }),
          }),
        ]),
      );
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          SessionId: S.optional(S.String).pipe(T.HttpHeader("x-amzn-transcribe-session-id")),
          RequestId: S.optional(S.String).pipe(T.HttpHeader("x-amzn-request-id")),
          LanguageCode: S.optional(MedicalScribeLanguageCode).pipe(
            T.HttpHeader("x-amzn-transcribe-language-code"),
          ),
          MediaSampleRateHertz: S.optional(S.Number).pipe(
            T.HttpHeader("x-amzn-transcribe-sample-rate"),
          ),
          MediaEncoding: S.optional(MedicalScribeMediaEncoding).pipe(
            T.HttpHeader("x-amzn-transcribe-media-encoding"),
          ),
          ResultStream: S.optional(MedicalScribeResultStream).pipe(T.HttpPayload()),
        }),
      ).annotate({
        identifier: "StartMedicalScribeStreamResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          LanguageCode: LanguageCode.pipe(T.HttpHeader("x-amzn-transcribe-language-code")),
          MediaSampleRateHertz: S.Number.pipe(T.HttpHeader("x-amzn-transcribe-sample-rate")),
          MediaEncoding: MediaEncoding.pipe(T.HttpHeader("x-amzn-transcribe-media-encoding")),
          VocabularyName: S.optional(S.String).pipe(
            T.HttpHeader("x-amzn-transcribe-vocabulary-name"),
          ),
          Specialty: Specialty.pipe(T.HttpHeader("x-amzn-transcribe-specialty")),
          Type: Type.pipe(T.HttpHeader("x-amzn-transcribe-type")),
          ShowSpeakerLabel: S.optional(S.Boolean).pipe(
            T.HttpHeader("x-amzn-transcribe-show-speaker-label"),
          ),
          SessionId: S.optional(S.String).pipe(T.HttpHeader("x-amzn-transcribe-session-id")),
          AudioStream: AudioStream.pipe(T.HttpPayload()),
          EnableChannelIdentification: S.optional(S.Boolean).pipe(
            T.HttpHeader("x-amzn-transcribe-enable-channel-identification"),
          ),
          NumberOfChannels: S.optional(S.Number).pipe(
            T.HttpHeader("x-amzn-transcribe-number-of-channels"),
          ),
          ContentIdentificationType: S.optional(MedicalContentIdentificationType).pipe(
            T.HttpHeader("x-amzn-transcribe-content-identification-type"),
          ),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/medical-stream-transcription" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartMedicalStreamTranscriptionRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          StartTime: S.optional(S.Number),
          EndTime: S.optional(S.Number),
          Type: S.optional(ItemType),
          Content: S.optional(S.String),
          Confidence: S.optional(S.Number),
          Speaker: S.optional(S.String),
        }),
      ).annotate({ identifier: "MedicalItem" });
    case 3:
      return S.Array(MedicalItem);
    case 4:
      return S.suspend(() =>
        S.Struct({
          StartTime: S.optional(S.Number),
          EndTime: S.optional(S.Number),
          Category: S.optional(S.String),
          Content: S.optional(S.String),
          Confidence: S.optional(S.Number),
        }),
      ).annotate({ identifier: "MedicalEntity" });
    case 5:
      return S.Array(MedicalEntity);
    case 6:
      return S.suspend(() =>
        S.Struct({
          Transcript: S.optional(S.String),
          Items: S.optional(MedicalItemList),
          Entities: S.optional(MedicalEntityList),
        }),
      ).annotate({ identifier: "MedicalAlternative" });
    case 7:
      return S.Array(MedicalAlternative);
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ResultId: S.optional(S.String),
          StartTime: S.optional(S.Number),
          EndTime: S.optional(S.Number),
          IsPartial: S.optional(S.Boolean),
          Alternatives: S.optional(MedicalAlternativeList),
          ChannelId: S.optional(S.String),
        }),
      ).annotate({ identifier: "MedicalResult" });
    case 1:
      return S.Array(MedicalResult);
    case 2:
      return S.suspend(() => S.Struct({ Results: S.optional(MedicalResultList) })).annotate({
        identifier: "MedicalTranscript",
      });
    case 3:
      return S.suspend(() => S.Struct({ Transcript: S.optional(MedicalTranscript) })).annotate({
        identifier: "MedicalTranscriptEvent",
      });
    case 4:
      return T.EventStream(
        /*@__PURE__*/ S.Union([
          /*@__PURE__*/ S.Struct({ TranscriptEvent: MedicalTranscriptEvent }),
          /*@__PURE__*/ S.Struct({
            BadRequestException: /*@__PURE__*/ S.suspend(() => BadRequestException).annotate({
              identifier: "BadRequestException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            LimitExceededException: /*@__PURE__*/ S.suspend(() => LimitExceededException).annotate({
              identifier: "LimitExceededException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            InternalFailureException: /*@__PURE__*/ S.suspend(
              () => InternalFailureException,
            ).annotate({
              identifier: "InternalFailureException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            ConflictException: /*@__PURE__*/ S.suspend(() => ConflictException).annotate({
              identifier: "ConflictException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            ServiceUnavailableException: /*@__PURE__*/ S.suspend(
              () => ServiceUnavailableException,
            ).annotate({
              identifier: "ServiceUnavailableException",
            }),
          }),
        ]),
      );
    case 5:
      return S.suspend(() =>
        S.Struct({
          RequestId: S.optional(S.String).pipe(T.HttpHeader("x-amzn-request-id")),
          LanguageCode: S.optional(LanguageCode).pipe(
            T.HttpHeader("x-amzn-transcribe-language-code"),
          ),
          MediaSampleRateHertz: S.optional(S.Number).pipe(
            T.HttpHeader("x-amzn-transcribe-sample-rate"),
          ),
          MediaEncoding: S.optional(MediaEncoding).pipe(
            T.HttpHeader("x-amzn-transcribe-media-encoding"),
          ),
          VocabularyName: S.optional(S.String).pipe(
            T.HttpHeader("x-amzn-transcribe-vocabulary-name"),
          ),
          Specialty: S.optional(Specialty).pipe(T.HttpHeader("x-amzn-transcribe-specialty")),
          Type: S.optional(Type).pipe(T.HttpHeader("x-amzn-transcribe-type")),
          ShowSpeakerLabel: S.optional(S.Boolean).pipe(
            T.HttpHeader("x-amzn-transcribe-show-speaker-label"),
          ),
          SessionId: S.optional(S.String).pipe(T.HttpHeader("x-amzn-transcribe-session-id")),
          TranscriptResultStream: S.optional(MedicalTranscriptResultStream).pipe(T.HttpPayload()),
          EnableChannelIdentification: S.optional(S.Boolean).pipe(
            T.HttpHeader("x-amzn-transcribe-enable-channel-identification"),
          ),
          NumberOfChannels: S.optional(S.Number).pipe(
            T.HttpHeader("x-amzn-transcribe-number-of-channels"),
          ),
          ContentIdentificationType: S.optional(MedicalContentIdentificationType).pipe(
            T.HttpHeader("x-amzn-transcribe-content-identification-type"),
          ),
        }),
      ).annotate({
        identifier: "StartMedicalStreamTranscriptionResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          LanguageCode: S.optional(LanguageCode).pipe(
            T.HttpHeader("x-amzn-transcribe-language-code"),
          ),
          MediaSampleRateHertz: S.Number.pipe(T.HttpHeader("x-amzn-transcribe-sample-rate")),
          MediaEncoding: MediaEncoding.pipe(T.HttpHeader("x-amzn-transcribe-media-encoding")),
          VocabularyName: S.optional(S.String).pipe(
            T.HttpHeader("x-amzn-transcribe-vocabulary-name"),
          ),
          SessionId: S.optional(S.String).pipe(T.HttpHeader("x-amzn-transcribe-session-id")),
          AudioStream: AudioStream.pipe(T.HttpPayload()),
          VocabularyFilterName: S.optional(S.String).pipe(
            T.HttpHeader("x-amzn-transcribe-vocabulary-filter-name"),
          ),
          VocabularyFilterMethod: S.optional(VocabularyFilterMethod).pipe(
            T.HttpHeader("x-amzn-transcribe-vocabulary-filter-method"),
          ),
          ShowSpeakerLabel: S.optional(S.Boolean).pipe(
            T.HttpHeader("x-amzn-transcribe-show-speaker-label"),
          ),
          EnableChannelIdentification: S.optional(S.Boolean).pipe(
            T.HttpHeader("x-amzn-transcribe-enable-channel-identification"),
          ),
          NumberOfChannels: S.optional(S.Number).pipe(
            T.HttpHeader("x-amzn-transcribe-number-of-channels"),
          ),
          EnablePartialResultsStabilization: S.optional(S.Boolean).pipe(
            T.HttpHeader("x-amzn-transcribe-enable-partial-results-stabilization"),
          ),
          PartialResultsStability: S.optional(PartialResultsStability).pipe(
            T.HttpHeader("x-amzn-transcribe-partial-results-stability"),
          ),
          ContentIdentificationType: S.optional(ContentIdentificationType).pipe(
            T.HttpHeader("x-amzn-transcribe-content-identification-type"),
          ),
          ContentRedactionType: S.optional(ContentRedactionType).pipe(
            T.HttpHeader("x-amzn-transcribe-content-redaction-type"),
          ),
          PiiEntityTypes: S.optional(S.String).pipe(
            T.HttpHeader("x-amzn-transcribe-pii-entity-types"),
          ),
          LanguageModelName: S.optional(S.String).pipe(
            T.HttpHeader("x-amzn-transcribe-language-model-name"),
          ),
          IdentifyLanguage: S.optional(S.Boolean).pipe(
            T.HttpHeader("x-amzn-transcribe-identify-language"),
          ),
          LanguageOptions: S.optional(S.String).pipe(
            T.HttpHeader("x-amzn-transcribe-language-options"),
          ),
          PreferredLanguage: S.optional(LanguageCode).pipe(
            T.HttpHeader("x-amzn-transcribe-preferred-language"),
          ),
          IdentifyMultipleLanguages: S.optional(S.Boolean).pipe(
            T.HttpHeader("x-amzn-transcribe-identify-multiple-languages"),
          ),
          VocabularyNames: S.optional(S.String).pipe(
            T.HttpHeader("x-amzn-transcribe-vocabulary-names"),
          ),
          VocabularyFilterNames: S.optional(S.String).pipe(
            T.HttpHeader("x-amzn-transcribe-vocabulary-filter-names"),
          ),
          SessionResumeWindow: S.optional(S.Number).pipe(
            T.HttpHeader("x-amzn-transcribe-session-resume-window"),
          ),
          TranscriptFormat: S.optional(TranscriptFormat).pipe(
            T.HttpHeader("x-amzn-transcribe-transcript-format"),
          ),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/stream-transcription" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartStreamTranscriptionRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          StartTime: S.optional(S.Number),
          EndTime: S.optional(S.Number),
          Type: S.optional(ItemType),
          Content: S.optional(S.String),
          VocabularyFilterMatch: S.optional(S.Boolean),
          Speaker: S.optional(S.String),
          Confidence: S.optional(S.Number),
          Stable: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "Item" });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.Array(Item);
    case 1:
      return S.suspend(() =>
        S.Struct({
          StartTime: S.optional(S.Number),
          EndTime: S.optional(S.Number),
          Category: S.optional(S.String),
          Type: S.optional(S.String),
          Content: S.optional(S.String),
          Confidence: S.optional(S.Number),
        }),
      ).annotate({ identifier: "Entity" });
    case 2:
      return S.Array(Entity);
    case 3:
      return S.suspend(() =>
        S.Struct({
          Transcript: S.optional(S.String),
          Items: S.optional(ItemList),
          Entities: S.optional(EntityList),
        }),
      ).annotate({ identifier: "Alternative" });
    case 4:
      return S.Array(Alternative);
    case 5:
      return S.suspend(() =>
        S.Struct({ LanguageCode: S.optional(LanguageCode), Score: S.optional(S.Number) }),
      ).annotate({ identifier: "LanguageWithScore" });
    case 6:
      return S.Array(LanguageWithScore);
    case 7:
      return S.suspend(() =>
        S.Struct({
          ResultId: S.optional(S.String),
          StartTime: S.optional(S.Number),
          EndTime: S.optional(S.Number),
          IsPartial: S.optional(S.Boolean),
          Alternatives: S.optional(AlternativeList),
          ChannelId: S.optional(S.String),
          LanguageCode: S.optional(LanguageCode),
          LanguageIdentification: S.optional(LanguageIdentification),
        }),
      ).annotate({ identifier: "Result" });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.Array(Result);
    case 1:
      return S.suspend(() => S.Struct({ Results: S.optional(ResultList) })).annotate({
        identifier: "Transcript",
      });
    case 2:
      return S.suspend(() => S.Struct({ Transcript: S.optional(Transcript) })).annotate({
        identifier: "TranscriptEvent",
      });
    case 3:
      return T.EventStream(
        /*@__PURE__*/ S.Union([
          /*@__PURE__*/ S.Struct({ TranscriptEvent: TranscriptEvent }),
          /*@__PURE__*/ S.Struct({
            BadRequestException: /*@__PURE__*/ S.suspend(() => BadRequestException).annotate({
              identifier: "BadRequestException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            LimitExceededException: /*@__PURE__*/ S.suspend(() => LimitExceededException).annotate({
              identifier: "LimitExceededException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            InternalFailureException: /*@__PURE__*/ S.suspend(
              () => InternalFailureException,
            ).annotate({
              identifier: "InternalFailureException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            ConflictException: /*@__PURE__*/ S.suspend(() => ConflictException).annotate({
              identifier: "ConflictException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            ServiceUnavailableException: /*@__PURE__*/ S.suspend(
              () => ServiceUnavailableException,
            ).annotate({
              identifier: "ServiceUnavailableException",
            }),
          }),
        ]),
      );
    case 4:
      return S.suspend(() =>
        S.Struct({
          RequestId: S.optional(S.String).pipe(T.HttpHeader("x-amzn-request-id")),
          LanguageCode: S.optional(LanguageCode).pipe(
            T.HttpHeader("x-amzn-transcribe-language-code"),
          ),
          MediaSampleRateHertz: S.optional(S.Number).pipe(
            T.HttpHeader("x-amzn-transcribe-sample-rate"),
          ),
          MediaEncoding: S.optional(MediaEncoding).pipe(
            T.HttpHeader("x-amzn-transcribe-media-encoding"),
          ),
          VocabularyName: S.optional(S.String).pipe(
            T.HttpHeader("x-amzn-transcribe-vocabulary-name"),
          ),
          SessionId: S.optional(S.String).pipe(T.HttpHeader("x-amzn-transcribe-session-id")),
          TranscriptResultStream: S.optional(TranscriptResultStream).pipe(T.HttpPayload()),
          VocabularyFilterName: S.optional(S.String).pipe(
            T.HttpHeader("x-amzn-transcribe-vocabulary-filter-name"),
          ),
          VocabularyFilterMethod: S.optional(VocabularyFilterMethod).pipe(
            T.HttpHeader("x-amzn-transcribe-vocabulary-filter-method"),
          ),
          ShowSpeakerLabel: S.optional(S.Boolean).pipe(
            T.HttpHeader("x-amzn-transcribe-show-speaker-label"),
          ),
          EnableChannelIdentification: S.optional(S.Boolean).pipe(
            T.HttpHeader("x-amzn-transcribe-enable-channel-identification"),
          ),
          NumberOfChannels: S.optional(S.Number).pipe(
            T.HttpHeader("x-amzn-transcribe-number-of-channels"),
          ),
          EnablePartialResultsStabilization: S.optional(S.Boolean).pipe(
            T.HttpHeader("x-amzn-transcribe-enable-partial-results-stabilization"),
          ),
          PartialResultsStability: S.optional(PartialResultsStability).pipe(
            T.HttpHeader("x-amzn-transcribe-partial-results-stability"),
          ),
          ContentIdentificationType: S.optional(ContentIdentificationType).pipe(
            T.HttpHeader("x-amzn-transcribe-content-identification-type"),
          ),
          ContentRedactionType: S.optional(ContentRedactionType).pipe(
            T.HttpHeader("x-amzn-transcribe-content-redaction-type"),
          ),
          PiiEntityTypes: S.optional(S.String).pipe(
            T.HttpHeader("x-amzn-transcribe-pii-entity-types"),
          ),
          LanguageModelName: S.optional(S.String).pipe(
            T.HttpHeader("x-amzn-transcribe-language-model-name"),
          ),
          IdentifyLanguage: S.optional(S.Boolean).pipe(
            T.HttpHeader("x-amzn-transcribe-identify-language"),
          ),
          LanguageOptions: S.optional(S.String).pipe(
            T.HttpHeader("x-amzn-transcribe-language-options"),
          ),
          PreferredLanguage: S.optional(LanguageCode).pipe(
            T.HttpHeader("x-amzn-transcribe-preferred-language"),
          ),
          IdentifyMultipleLanguages: S.optional(S.Boolean).pipe(
            T.HttpHeader("x-amzn-transcribe-identify-multiple-languages"),
          ),
          VocabularyNames: S.optional(S.String).pipe(
            T.HttpHeader("x-amzn-transcribe-vocabulary-names"),
          ),
          VocabularyFilterNames: S.optional(S.String).pipe(
            T.HttpHeader("x-amzn-transcribe-vocabulary-filter-names"),
          ),
          SessionResumeWindow: S.optional(S.Number).pipe(
            T.HttpHeader("x-amzn-transcribe-session-resume-window"),
          ),
          TranscriptFormat: S.optional(TranscriptFormat).pipe(
            T.HttpHeader("x-amzn-transcribe-transcript-format"),
          ),
        }),
      ).annotate({
        identifier: "StartStreamTranscriptionResponse",
      });
  }
}
