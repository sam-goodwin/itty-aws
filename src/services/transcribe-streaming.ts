import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface Transcribe {
  getMedicalScribeStream(
    input: GetMedicalScribeStreamRequest,
  ): Effect.Effect<
    GetMedicalScribeStreamResponse,
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  startCallAnalyticsStreamTranscription(
    input: StartCallAnalyticsStreamTranscriptionRequest,
  ): Effect.Effect<
    StartCallAnalyticsStreamTranscriptionResponse,
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | LimitExceededException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  startMedicalScribeStream(
    input: StartMedicalScribeStreamRequest,
  ): Effect.Effect<
    StartMedicalScribeStreamResponse,
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | LimitExceededException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  startMedicalStreamTranscription(
    input: StartMedicalStreamTranscriptionRequest,
  ): Effect.Effect<
    StartMedicalStreamTranscriptionResponse,
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | LimitExceededException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  startStreamTranscription(
    input: StartStreamTranscriptionRequest,
  ): Effect.Effect<
    StartStreamTranscriptionResponse,
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | LimitExceededException
    | ServiceUnavailableException
    | CommonAwsError
  >;
}

export type TranscribeStreaming = Transcribe;

export interface Alternative {
  Transcript?: string;
  Items?: Array<Item>;
  Entities?: Array<Entity>;
}
export type AlternativeList = Array<Alternative>;
export type AudioChunk = Uint8Array | string;

export interface AudioEvent {
  AudioChunk?: Uint8Array | string;
}
export type AudioStream =
  | { AudioEvent: AudioEvent }
  | { ConfigurationEvent: ConfigurationEvent };
export declare class BadRequestException extends Data.TaggedError(
  "BadRequestException",
)<{
  readonly Message?: string;
}> {}
export type BucketName = string;

export interface CallAnalyticsEntity {
  BeginOffsetMillis?: number;
  EndOffsetMillis?: number;
  Category?: string;
  Type?: string;
  Content?: string;
  Confidence?: number;
}
export type CallAnalyticsEntityList = Array<CallAnalyticsEntity>;
export interface CallAnalyticsItem {
  BeginOffsetMillis?: number;
  EndOffsetMillis?: number;
  Type?: ItemType;
  Content?: string;
  Confidence?: number;
  VocabularyFilterMatch?: boolean;
  Stable?: boolean;
}
export type CallAnalyticsItemList = Array<CallAnalyticsItem>;
export type CallAnalyticsLanguageCode =
  | "EN_US"
  | "EN_GB"
  | "ES_US"
  | "FR_CA"
  | "FR_FR"
  | "EN_AU"
  | "IT_IT"
  | "DE_DE"
  | "PT_BR";
export type CallAnalyticsTranscriptResultStream =
  | { UtteranceEvent: UtteranceEvent }
  | { CategoryEvent: CategoryEvent }
  | { BadRequestException: BadRequestException }
  | { LimitExceededException: LimitExceededException }
  | { InternalFailureException: InternalFailureException }
  | { ConflictException: ConflictException }
  | { ServiceUnavailableException: ServiceUnavailableException };
export interface CategoryEvent {
  MatchedCategories?: Array<string>;
  MatchedDetails?: Record<string, PointsOfInterest>;
}
export interface ChannelDefinition {
  ChannelId: number;
  ParticipantRole: ParticipantRole;
}
export type ChannelDefinitions = Array<ChannelDefinition>;
export type ChannelId = number;

export interface CharacterOffsets {
  Begin?: number;
  End?: number;
}
export interface ClinicalNoteGenerationResult {
  ClinicalNoteOutputLocation?: string;
  TranscriptOutputLocation?: string;
  Status?: ClinicalNoteGenerationStatus;
  FailureReason?: string;
}
export interface ClinicalNoteGenerationSettings {
  OutputBucketName: string;
  NoteTemplate?: MedicalScribeNoteTemplate;
}
export type ClinicalNoteGenerationStatus =
  | "IN_PROGRESS"
  | "FAILED"
  | "COMPLETED";
export type Confidence = number;

export interface ConfigurationEvent {
  ChannelDefinitions?: Array<ChannelDefinition>;
  PostCallAnalyticsSettings?: PostCallAnalyticsSettings;
}
export declare class ConflictException extends Data.TaggedError(
  "ConflictException",
)<{
  readonly Message?: string;
}> {}
export type ContentIdentificationType = "PII";
export type ContentRedactionOutput = "REDACTED" | "REDACTED_AND_UNREDACTED";
export type ContentRedactionType = "PII";
export type DateTime = Date | string;

export type Double = number;

export interface Entity {
  StartTime?: number;
  EndTime?: number;
  Category?: string;
  Type?: string;
  Content?: string;
  Confidence?: number;
}
export type EntityList = Array<Entity>;
export interface GetMedicalScribeStreamRequest {
  SessionId: string;
}
export interface GetMedicalScribeStreamResponse {
  MedicalScribeStreamDetails?: MedicalScribeStreamDetails;
}
export type IamRoleArn = string;

export type Integer = number;

export declare class InternalFailureException extends Data.TaggedError(
  "InternalFailureException",
)<{
  readonly Message?: string;
}> {}
export interface IssueDetected {
  CharacterOffsets?: CharacterOffsets;
}
export type IssuesDetected = Array<IssueDetected>;
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
export type ItemList = Array<Item>;
export type ItemType = "PRONUNCIATION" | "PUNCTUATION";
export type KMSEncryptionContextMap = Record<string, string>;
export type KMSKeyId = string;

export type LanguageCode =
  | "EN_US"
  | "EN_GB"
  | "ES_US"
  | "FR_CA"
  | "FR_FR"
  | "EN_AU"
  | "IT_IT"
  | "DE_DE"
  | "PT_BR"
  | "JA_JP"
  | "KO_KR"
  | "ZH_CN"
  | "TH_TH"
  | "ES_ES"
  | "AR_SA"
  | "PT_PT"
  | "CA_ES"
  | "AR_AE"
  | "HI_IN"
  | "ZH_HK"
  | "NL_NL"
  | "NO_NO"
  | "SV_SE"
  | "PL_PL"
  | "FI_FI"
  | "ZH_TW"
  | "EN_IN"
  | "EN_IE"
  | "EN_NZ"
  | "EN_AB"
  | "EN_ZA"
  | "EN_WL"
  | "DE_CH"
  | "AF_ZA"
  | "EU_ES"
  | "HR_HR"
  | "CS_CZ"
  | "DA_DK"
  | "FA_IR"
  | "GL_ES"
  | "EL_GR"
  | "HE_IL"
  | "ID_ID"
  | "LV_LV"
  | "MS_MY"
  | "RO_RO"
  | "RU_RU"
  | "SR_RS"
  | "SK_SK"
  | "SO_SO"
  | "TL_PH"
  | "UK_UA"
  | "VI_VN"
  | "ZU_ZA";
export type LanguageIdentification = Array<LanguageWithScore>;
export type LanguageOptions = string;

export interface LanguageWithScore {
  LanguageCode?: LanguageCode;
  Score?: number;
}
export declare class LimitExceededException extends Data.TaggedError(
  "LimitExceededException",
)<{
  readonly Message?: string;
}> {}
export type Long = number;

export type MatchedCategoryDetails = Record<string, PointsOfInterest>;
export type MediaEncoding = "PCM" | "OGG_OPUS" | "FLAC";
export type MediaSampleRateHertz = number;

export interface MedicalAlternative {
  Transcript?: string;
  Items?: Array<MedicalItem>;
  Entities?: Array<MedicalEntity>;
}
export type MedicalAlternativeList = Array<MedicalAlternative>;
export type MedicalContentIdentificationType = "PHI";
export interface MedicalEntity {
  StartTime?: number;
  EndTime?: number;
  Category?: string;
  Content?: string;
  Confidence?: number;
}
export type MedicalEntityList = Array<MedicalEntity>;
export interface MedicalItem {
  StartTime?: number;
  EndTime?: number;
  Type?: ItemType;
  Content?: string;
  Confidence?: number;
  Speaker?: string;
}
export type MedicalItemList = Array<MedicalItem>;
export interface MedicalResult {
  ResultId?: string;
  StartTime?: number;
  EndTime?: number;
  IsPartial?: boolean;
  Alternatives?: Array<MedicalAlternative>;
  ChannelId?: string;
}
export type MedicalResultList = Array<MedicalResult>;
export interface MedicalScribeAudioEvent {
  AudioChunk: Uint8Array | string;
}
export interface MedicalScribeChannelDefinition {
  ChannelId: number;
  ParticipantRole: MedicalScribeParticipantRole;
}
export type MedicalScribeChannelDefinitions =
  Array<MedicalScribeChannelDefinition>;
export type MedicalScribeChannelId = number;

export interface MedicalScribeConfigurationEvent {
  VocabularyName?: string;
  VocabularyFilterName?: string;
  VocabularyFilterMethod?: MedicalScribeVocabularyFilterMethod;
  ResourceAccessRoleArn: string;
  ChannelDefinitions?: Array<MedicalScribeChannelDefinition>;
  EncryptionSettings?: MedicalScribeEncryptionSettings;
  PostStreamAnalyticsSettings: MedicalScribePostStreamAnalyticsSettings;
}
export interface MedicalScribeEncryptionSettings {
  KmsEncryptionContext?: Record<string, string>;
  KmsKeyId: string;
}
export type MedicalScribeInputStream =
  | { AudioEvent: MedicalScribeAudioEvent }
  | { SessionControlEvent: MedicalScribeSessionControlEvent }
  | { ConfigurationEvent: MedicalScribeConfigurationEvent };
export type MedicalScribeLanguageCode = "EN_US";
export type MedicalScribeMediaEncoding = "PCM" | "OGG_OPUS" | "FLAC";
export type MedicalScribeMediaSampleRateHertz = number;

export type MedicalScribeNoteTemplate =
  | "HISTORY_AND_PHYSICAL"
  | "GIRPP"
  | "DAP"
  | "SIRP"
  | "BIRP"
  | "BEHAVIORAL_SOAP"
  | "PHYSICAL_SOAP";
export type MedicalScribeParticipantRole = "PATIENT" | "CLINICIAN";
export interface MedicalScribePostStreamAnalyticsResult {
  ClinicalNoteGenerationResult?: ClinicalNoteGenerationResult;
}
export interface MedicalScribePostStreamAnalyticsSettings {
  ClinicalNoteGenerationSettings: ClinicalNoteGenerationSettings;
}
export type MedicalScribeResultStream =
  | { TranscriptEvent: MedicalScribeTranscriptEvent }
  | { BadRequestException: BadRequestException }
  | { LimitExceededException: LimitExceededException }
  | { InternalFailureException: InternalFailureException }
  | { ConflictException: ConflictException }
  | { ServiceUnavailableException: ServiceUnavailableException };
export interface MedicalScribeSessionControlEvent {
  Type: MedicalScribeSessionControlEventType;
}
export type MedicalScribeSessionControlEventType = "END_OF_SESSION";
export interface MedicalScribeStreamDetails {
  SessionId?: string;
  StreamCreatedAt?: Date | string;
  StreamEndedAt?: Date | string;
  LanguageCode?: MedicalScribeLanguageCode;
  MediaSampleRateHertz?: number;
  MediaEncoding?: MedicalScribeMediaEncoding;
  VocabularyName?: string;
  VocabularyFilterName?: string;
  VocabularyFilterMethod?: MedicalScribeVocabularyFilterMethod;
  ResourceAccessRoleArn?: string;
  ChannelDefinitions?: Array<MedicalScribeChannelDefinition>;
  EncryptionSettings?: MedicalScribeEncryptionSettings;
  StreamStatus?: MedicalScribeStreamStatus;
  PostStreamAnalyticsSettings?: MedicalScribePostStreamAnalyticsSettings;
  PostStreamAnalyticsResult?: MedicalScribePostStreamAnalyticsResult;
}
export type MedicalScribeStreamStatus =
  | "IN_PROGRESS"
  | "PAUSED"
  | "FAILED"
  | "COMPLETED";
export interface MedicalScribeTranscriptEvent {
  TranscriptSegment?: MedicalScribeTranscriptSegment;
}
export interface MedicalScribeTranscriptItem {
  BeginAudioTime?: number;
  EndAudioTime?: number;
  Type?: MedicalScribeTranscriptItemType;
  Confidence?: number;
  Content?: string;
  VocabularyFilterMatch?: boolean;
}
export type MedicalScribeTranscriptItemList =
  Array<MedicalScribeTranscriptItem>;
export type MedicalScribeTranscriptItemType = "PRONUNCIATION" | "PUNCTUATION";
export interface MedicalScribeTranscriptSegment {
  SegmentId?: string;
  BeginAudioTime?: number;
  EndAudioTime?: number;
  Content?: string;
  Items?: Array<MedicalScribeTranscriptItem>;
  IsPartial?: boolean;
  ChannelId?: string;
}
export type MedicalScribeVocabularyFilterMethod = "REMOVE" | "MASK" | "TAG";
export interface MedicalTranscript {
  Results?: Array<MedicalResult>;
}
export interface MedicalTranscriptEvent {
  Transcript?: MedicalTranscript;
}
export type MedicalTranscriptResultStream =
  | { TranscriptEvent: MedicalTranscriptEvent }
  | { BadRequestException: BadRequestException }
  | { LimitExceededException: LimitExceededException }
  | { InternalFailureException: InternalFailureException }
  | { ConflictException: ConflictException }
  | { ServiceUnavailableException: ServiceUnavailableException };
export type ModelName = string;

export type NonEmptyString = string;

export type NullableBoolean = boolean;

export type NumberOfChannels = number;

export type PartialResultsStability = "HIGH" | "MEDIUM" | "LOW";
export type ParticipantRole = "AGENT" | "CUSTOMER";
export type PiiEntityTypes = string;

export interface PointsOfInterest {
  TimestampRanges?: Array<TimestampRange>;
}
export interface PostCallAnalyticsSettings {
  OutputLocation: string;
  DataAccessRoleArn: string;
  ContentRedactionOutput?: ContentRedactionOutput;
  OutputEncryptionKMSKeyId?: string;
}
export type RequestId = string;

export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export interface Result {
  ResultId?: string;
  StartTime?: number;
  EndTime?: number;
  IsPartial?: boolean;
  Alternatives?: Array<Alternative>;
  ChannelId?: string;
  LanguageCode?: LanguageCode;
  LanguageIdentification?: Array<LanguageWithScore>;
}
export type ResultList = Array<Result>;
export type Sentiment = "POSITIVE" | "NEGATIVE" | "MIXED" | "NEUTRAL";
export declare class ServiceUnavailableException extends Data.TaggedError(
  "ServiceUnavailableException",
)<{
  readonly Message?: string;
}> {}
export type SessionId = string;

export type Specialty =
  | "PRIMARYCARE"
  | "CARDIOLOGY"
  | "NEUROLOGY"
  | "ONCOLOGY"
  | "RADIOLOGY"
  | "UROLOGY";
export type Stable = boolean;

export interface StartCallAnalyticsStreamTranscriptionRequest {
  LanguageCode: CallAnalyticsLanguageCode;
  MediaSampleRateHertz: number;
  MediaEncoding: MediaEncoding;
  VocabularyName?: string;
  SessionId?: string;
  AudioStream: AudioStream;
  VocabularyFilterName?: string;
  VocabularyFilterMethod?: VocabularyFilterMethod;
  LanguageModelName?: string;
  EnablePartialResultsStabilization?: boolean;
  PartialResultsStability?: PartialResultsStability;
  ContentIdentificationType?: ContentIdentificationType;
  ContentRedactionType?: ContentRedactionType;
  PiiEntityTypes?: string;
}
export interface StartCallAnalyticsStreamTranscriptionResponse {
  RequestId?: string;
  LanguageCode?: CallAnalyticsLanguageCode;
  MediaSampleRateHertz?: number;
  MediaEncoding?: MediaEncoding;
  VocabularyName?: string;
  SessionId?: string;
  CallAnalyticsTranscriptResultStream?: CallAnalyticsTranscriptResultStream;
  VocabularyFilterName?: string;
  VocabularyFilterMethod?: VocabularyFilterMethod;
  LanguageModelName?: string;
  EnablePartialResultsStabilization?: boolean;
  PartialResultsStability?: PartialResultsStability;
  ContentIdentificationType?: ContentIdentificationType;
  ContentRedactionType?: ContentRedactionType;
  PiiEntityTypes?: string;
}
export interface StartMedicalScribeStreamRequest {
  SessionId?: string;
  LanguageCode: MedicalScribeLanguageCode;
  MediaSampleRateHertz: number;
  MediaEncoding: MedicalScribeMediaEncoding;
  InputStream: MedicalScribeInputStream;
}
export interface StartMedicalScribeStreamResponse {
  SessionId?: string;
  RequestId?: string;
  LanguageCode?: MedicalScribeLanguageCode;
  MediaSampleRateHertz?: number;
  MediaEncoding?: MedicalScribeMediaEncoding;
  ResultStream?: MedicalScribeResultStream;
}
export interface StartMedicalStreamTranscriptionRequest {
  LanguageCode: LanguageCode;
  MediaSampleRateHertz: number;
  MediaEncoding: MediaEncoding;
  VocabularyName?: string;
  Specialty: Specialty;
  Type: Type;
  ShowSpeakerLabel?: boolean;
  SessionId?: string;
  AudioStream: AudioStream;
  EnableChannelIdentification?: boolean;
  NumberOfChannels?: number;
  ContentIdentificationType?: MedicalContentIdentificationType;
}
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
  TranscriptResultStream?: MedicalTranscriptResultStream;
  EnableChannelIdentification?: boolean;
  NumberOfChannels?: number;
  ContentIdentificationType?: MedicalContentIdentificationType;
}
export interface StartStreamTranscriptionRequest {
  LanguageCode?: LanguageCode;
  MediaSampleRateHertz: number;
  MediaEncoding: MediaEncoding;
  VocabularyName?: string;
  SessionId?: string;
  AudioStream: AudioStream;
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
}
export interface StartStreamTranscriptionResponse {
  RequestId?: string;
  LanguageCode?: LanguageCode;
  MediaSampleRateHertz?: number;
  MediaEncoding?: MediaEncoding;
  VocabularyName?: string;
  SessionId?: string;
  TranscriptResultStream?: TranscriptResultStream;
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
}
export type StringList = Array<string>;
export interface TimestampRange {
  BeginOffsetMillis?: number;
  EndOffsetMillis?: number;
}
export type TimestampRanges = Array<TimestampRange>;
export interface Transcript {
  Results?: Array<Result>;
}
export interface TranscriptEvent {
  Transcript?: Transcript;
}
export type TranscriptResultStream =
  | { TranscriptEvent: TranscriptEvent }
  | { BadRequestException: BadRequestException }
  | { LimitExceededException: LimitExceededException }
  | { InternalFailureException: InternalFailureException }
  | { ConflictException: ConflictException }
  | { ServiceUnavailableException: ServiceUnavailableException };
export type Type = "CONVERSATION" | "DICTATION";
export type Uri = string;

export interface UtteranceEvent {
  UtteranceId?: string;
  IsPartial?: boolean;
  ParticipantRole?: ParticipantRole;
  BeginOffsetMillis?: number;
  EndOffsetMillis?: number;
  Transcript?: string;
  Items?: Array<CallAnalyticsItem>;
  Entities?: Array<CallAnalyticsEntity>;
  Sentiment?: Sentiment;
  IssuesDetected?: Array<IssueDetected>;
}
export type VocabularyFilterMethod = "REMOVE" | "MASK" | "TAG";
export type VocabularyFilterName = string;

export type VocabularyFilterNames = string;

export type VocabularyName = string;

export type VocabularyNames = string;

export declare namespace GetMedicalScribeStream {
  export type Input = GetMedicalScribeStreamRequest;
  export type Output = GetMedicalScribeStreamResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace StartCallAnalyticsStreamTranscription {
  export type Input = StartCallAnalyticsStreamTranscriptionRequest;
  export type Output = StartCallAnalyticsStreamTranscriptionResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | LimitExceededException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace StartMedicalScribeStream {
  export type Input = StartMedicalScribeStreamRequest;
  export type Output = StartMedicalScribeStreamResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | LimitExceededException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace StartMedicalStreamTranscription {
  export type Input = StartMedicalStreamTranscriptionRequest;
  export type Output = StartMedicalStreamTranscriptionResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | LimitExceededException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace StartStreamTranscription {
  export type Input = StartStreamTranscriptionRequest;
  export type Output = StartStreamTranscriptionResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | LimitExceededException
    | ServiceUnavailableException
    | CommonAwsError;
}
