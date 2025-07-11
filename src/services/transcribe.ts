import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface Transcribe {
  createCallAnalyticsCategory(
    input: CreateCallAnalyticsCategoryRequest,
  ): Effect.Effect<
    CreateCallAnalyticsCategoryResponse,
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | LimitExceededException
    | CommonAwsError
  >;
  createLanguageModel(
    input: CreateLanguageModelRequest,
  ): Effect.Effect<
    CreateLanguageModelResponse,
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | LimitExceededException
    | CommonAwsError
  >;
  createMedicalVocabulary(
    input: CreateMedicalVocabularyRequest,
  ): Effect.Effect<
    CreateMedicalVocabularyResponse,
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | LimitExceededException
    | CommonAwsError
  >;
  createVocabulary(
    input: CreateVocabularyRequest,
  ): Effect.Effect<
    CreateVocabularyResponse,
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | LimitExceededException
    | CommonAwsError
  >;
  createVocabularyFilter(
    input: CreateVocabularyFilterRequest,
  ): Effect.Effect<
    CreateVocabularyFilterResponse,
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | LimitExceededException
    | CommonAwsError
  >;
  deleteCallAnalyticsCategory(
    input: DeleteCallAnalyticsCategoryRequest,
  ): Effect.Effect<
    DeleteCallAnalyticsCategoryResponse,
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError
  >;
  deleteCallAnalyticsJob(
    input: DeleteCallAnalyticsJobRequest,
  ): Effect.Effect<
    DeleteCallAnalyticsJobResponse,
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | CommonAwsError
  >;
  deleteLanguageModel(
    input: DeleteLanguageModelRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | CommonAwsError
  >;
  deleteMedicalScribeJob(
    input: DeleteMedicalScribeJobRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | CommonAwsError
  >;
  deleteMedicalTranscriptionJob(
    input: DeleteMedicalTranscriptionJobRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | CommonAwsError
  >;
  deleteMedicalVocabulary(
    input: DeleteMedicalVocabularyRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError
  >;
  deleteTranscriptionJob(
    input: DeleteTranscriptionJobRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | CommonAwsError
  >;
  deleteVocabulary(
    input: DeleteVocabularyRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError
  >;
  deleteVocabularyFilter(
    input: DeleteVocabularyFilterRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError
  >;
  describeLanguageModel(
    input: DescribeLanguageModelRequest,
  ): Effect.Effect<
    DescribeLanguageModelResponse,
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError
  >;
  getCallAnalyticsCategory(
    input: GetCallAnalyticsCategoryRequest,
  ): Effect.Effect<
    GetCallAnalyticsCategoryResponse,
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError
  >;
  getCallAnalyticsJob(
    input: GetCallAnalyticsJobRequest,
  ): Effect.Effect<
    GetCallAnalyticsJobResponse,
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError
  >;
  getMedicalScribeJob(
    input: GetMedicalScribeJobRequest,
  ): Effect.Effect<
    GetMedicalScribeJobResponse,
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError
  >;
  getMedicalTranscriptionJob(
    input: GetMedicalTranscriptionJobRequest,
  ): Effect.Effect<
    GetMedicalTranscriptionJobResponse,
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError
  >;
  getMedicalVocabulary(
    input: GetMedicalVocabularyRequest,
  ): Effect.Effect<
    GetMedicalVocabularyResponse,
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError
  >;
  getTranscriptionJob(
    input: GetTranscriptionJobRequest,
  ): Effect.Effect<
    GetTranscriptionJobResponse,
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError
  >;
  getVocabulary(
    input: GetVocabularyRequest,
  ): Effect.Effect<
    GetVocabularyResponse,
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError
  >;
  getVocabularyFilter(
    input: GetVocabularyFilterRequest,
  ): Effect.Effect<
    GetVocabularyFilterResponse,
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError
  >;
  listCallAnalyticsCategories(
    input: ListCallAnalyticsCategoriesRequest,
  ): Effect.Effect<
    ListCallAnalyticsCategoriesResponse,
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | CommonAwsError
  >;
  listCallAnalyticsJobs(
    input: ListCallAnalyticsJobsRequest,
  ): Effect.Effect<
    ListCallAnalyticsJobsResponse,
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | CommonAwsError
  >;
  listLanguageModels(
    input: ListLanguageModelsRequest,
  ): Effect.Effect<
    ListLanguageModelsResponse,
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | CommonAwsError
  >;
  listMedicalScribeJobs(
    input: ListMedicalScribeJobsRequest,
  ): Effect.Effect<
    ListMedicalScribeJobsResponse,
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | CommonAwsError
  >;
  listMedicalTranscriptionJobs(
    input: ListMedicalTranscriptionJobsRequest,
  ): Effect.Effect<
    ListMedicalTranscriptionJobsResponse,
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | CommonAwsError
  >;
  listMedicalVocabularies(
    input: ListMedicalVocabulariesRequest,
  ): Effect.Effect<
    ListMedicalVocabulariesResponse,
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError
  >;
  listTranscriptionJobs(
    input: ListTranscriptionJobsRequest,
  ): Effect.Effect<
    ListTranscriptionJobsResponse,
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | CommonAwsError
  >;
  listVocabularies(
    input: ListVocabulariesRequest,
  ): Effect.Effect<
    ListVocabulariesResponse,
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | CommonAwsError
  >;
  listVocabularyFilters(
    input: ListVocabularyFiltersRequest,
  ): Effect.Effect<
    ListVocabularyFiltersResponse,
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | CommonAwsError
  >;
  startCallAnalyticsJob(
    input: StartCallAnalyticsJobRequest,
  ): Effect.Effect<
    StartCallAnalyticsJobResponse,
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | LimitExceededException
    | CommonAwsError
  >;
  startMedicalScribeJob(
    input: StartMedicalScribeJobRequest,
  ): Effect.Effect<
    StartMedicalScribeJobResponse,
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | LimitExceededException
    | CommonAwsError
  >;
  startMedicalTranscriptionJob(
    input: StartMedicalTranscriptionJobRequest,
  ): Effect.Effect<
    StartMedicalTranscriptionJobResponse,
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | LimitExceededException
    | CommonAwsError
  >;
  startTranscriptionJob(
    input: StartTranscriptionJobRequest,
  ): Effect.Effect<
    StartTranscriptionJobResponse,
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | LimitExceededException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError
  >;
  updateCallAnalyticsCategory(
    input: UpdateCallAnalyticsCategoryRequest,
  ): Effect.Effect<
    UpdateCallAnalyticsCategoryResponse,
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError
  >;
  updateMedicalVocabulary(
    input: UpdateMedicalVocabularyRequest,
  ): Effect.Effect<
    UpdateMedicalVocabularyResponse,
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError
  >;
  updateVocabulary(
    input: UpdateVocabularyRequest,
  ): Effect.Effect<
    UpdateVocabularyResponse,
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError
  >;
  updateVocabularyFilter(
    input: UpdateVocabularyFilterRequest,
  ): Effect.Effect<
    UpdateVocabularyFilterResponse,
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError
  >;
}

export interface AbsoluteTimeRange {
  StartTime?: number;
  EndTime?: number;
  First?: number;
  Last?: number;
}
export declare class BadRequestException extends Data.TaggedError(
  "BadRequestException",
)<{
  readonly Message?: string;
}> {}
export type BaseModelName = "NARROW_BAND" | "WIDE_BAND";
export type CallAnalyticsFeature = "GENERATIVE_SUMMARIZATION";
export interface CallAnalyticsJob {
  CallAnalyticsJobName?: string;
  CallAnalyticsJobStatus?: CallAnalyticsJobStatus;
  CallAnalyticsJobDetails?: CallAnalyticsJobDetails;
  LanguageCode?: LanguageCode;
  MediaSampleRateHertz?: number;
  MediaFormat?: MediaFormat;
  Media?: Media;
  Transcript?: Transcript;
  StartTime?: Date | string;
  CreationTime?: Date | string;
  CompletionTime?: Date | string;
  FailureReason?: string;
  DataAccessRoleArn?: string;
  IdentifiedLanguageScore?: number;
  Settings?: CallAnalyticsJobSettings;
  ChannelDefinitions?: Array<ChannelDefinition>;
  Tags?: Array<Tag>;
}
export interface CallAnalyticsJobDetails {
  Skipped?: Array<CallAnalyticsSkippedFeature>;
}
export type CallAnalyticsJobName = string;

export interface CallAnalyticsJobSettings {
  VocabularyName?: string;
  VocabularyFilterName?: string;
  VocabularyFilterMethod?: VocabularyFilterMethod;
  LanguageModelName?: string;
  ContentRedaction?: ContentRedaction;
  LanguageOptions?: Array<LanguageCode>;
  LanguageIdSettings?: Record<LanguageCode, LanguageIdSettings>;
  Summarization?: Summarization;
}
export type CallAnalyticsJobStatus =
  | "QUEUED"
  | "IN_PROGRESS"
  | "FAILED"
  | "COMPLETED";
export type CallAnalyticsJobSummaries = Array<CallAnalyticsJobSummary>;
export interface CallAnalyticsJobSummary {
  CallAnalyticsJobName?: string;
  CreationTime?: Date | string;
  StartTime?: Date | string;
  CompletionTime?: Date | string;
  LanguageCode?: LanguageCode;
  CallAnalyticsJobStatus?: CallAnalyticsJobStatus;
  CallAnalyticsJobDetails?: CallAnalyticsJobDetails;
  FailureReason?: string;
}
export interface CallAnalyticsSkippedFeature {
  Feature?: CallAnalyticsFeature;
  ReasonCode?: CallAnalyticsSkippedReasonCode;
  Message?: string;
}
export type CallAnalyticsSkippedFeatureList =
  Array<CallAnalyticsSkippedFeature>;
export type CallAnalyticsSkippedReasonCode =
  | "INSUFFICIENT_CONVERSATION_CONTENT"
  | "FAILED_SAFETY_GUIDELINES";
export type CategoryName = string;

export interface CategoryProperties {
  CategoryName?: string;
  Rules?: Array<Rule>;
  CreateTime?: Date | string;
  LastUpdateTime?: Date | string;
  Tags?: Array<Tag>;
  InputType?: InputType;
}
export type CategoryPropertiesList = Array<CategoryProperties>;
export interface ChannelDefinition {
  ChannelId?: number;
  ParticipantRole?: ParticipantRole;
}
export type ChannelDefinitions = Array<ChannelDefinition>;
export type ChannelId = number;

export interface ClinicalNoteGenerationSettings {
  NoteTemplate?: MedicalScribeNoteTemplate;
}
export type CLMLanguageCode =
  | "EN_US"
  | "HI_IN"
  | "ES_US"
  | "EN_GB"
  | "EN_AU"
  | "DE_DE"
  | "JA_JP";
export declare class ConflictException extends Data.TaggedError(
  "ConflictException",
)<{
  readonly Message?: string;
}> {}
export interface ContentRedaction {
  RedactionType: RedactionType;
  RedactionOutput: RedactionOutput;
  PiiEntityTypes?: Array<PiiEntityType>;
}
export interface CreateCallAnalyticsCategoryRequest {
  CategoryName: string;
  Rules: Array<Rule>;
  Tags?: Array<Tag>;
  InputType?: InputType;
}
export interface CreateCallAnalyticsCategoryResponse {
  CategoryProperties?: CategoryProperties;
}
export interface CreateLanguageModelRequest {
  LanguageCode: CLMLanguageCode;
  BaseModelName: BaseModelName;
  ModelName: string;
  InputDataConfig: InputDataConfig;
  Tags?: Array<Tag>;
}
export interface CreateLanguageModelResponse {
  LanguageCode?: CLMLanguageCode;
  BaseModelName?: BaseModelName;
  ModelName?: string;
  InputDataConfig?: InputDataConfig;
  ModelStatus?: ModelStatus;
}
export interface CreateMedicalVocabularyRequest {
  VocabularyName: string;
  LanguageCode: LanguageCode;
  VocabularyFileUri: string;
  Tags?: Array<Tag>;
}
export interface CreateMedicalVocabularyResponse {
  VocabularyName?: string;
  LanguageCode?: LanguageCode;
  VocabularyState?: VocabularyState;
  LastModifiedTime?: Date | string;
  FailureReason?: string;
}
export interface CreateVocabularyFilterRequest {
  VocabularyFilterName: string;
  LanguageCode: LanguageCode;
  Words?: Array<string>;
  VocabularyFilterFileUri?: string;
  Tags?: Array<Tag>;
  DataAccessRoleArn?: string;
}
export interface CreateVocabularyFilterResponse {
  VocabularyFilterName?: string;
  LanguageCode?: LanguageCode;
  LastModifiedTime?: Date | string;
}
export interface CreateVocabularyRequest {
  VocabularyName: string;
  LanguageCode: LanguageCode;
  Phrases?: Array<string>;
  VocabularyFileUri?: string;
  Tags?: Array<Tag>;
  DataAccessRoleArn?: string;
}
export interface CreateVocabularyResponse {
  VocabularyName?: string;
  LanguageCode?: LanguageCode;
  VocabularyState?: VocabularyState;
  LastModifiedTime?: Date | string;
  FailureReason?: string;
}
export type DataAccessRoleArn = string;

export type DateTime = Date | string;

export interface DeleteCallAnalyticsCategoryRequest {
  CategoryName: string;
}
export interface DeleteCallAnalyticsCategoryResponse {}
export interface DeleteCallAnalyticsJobRequest {
  CallAnalyticsJobName: string;
}
export interface DeleteCallAnalyticsJobResponse {}
export interface DeleteLanguageModelRequest {
  ModelName: string;
}
export interface DeleteMedicalScribeJobRequest {
  MedicalScribeJobName: string;
}
export interface DeleteMedicalTranscriptionJobRequest {
  MedicalTranscriptionJobName: string;
}
export interface DeleteMedicalVocabularyRequest {
  VocabularyName: string;
}
export interface DeleteTranscriptionJobRequest {
  TranscriptionJobName: string;
}
export interface DeleteVocabularyFilterRequest {
  VocabularyFilterName: string;
}
export interface DeleteVocabularyRequest {
  VocabularyName: string;
}
export interface DescribeLanguageModelRequest {
  ModelName: string;
}
export interface DescribeLanguageModelResponse {
  LanguageModel?: LanguageModel;
}
export type DurationInSeconds = number;

export type FailureReason = string;

export interface GetCallAnalyticsCategoryRequest {
  CategoryName: string;
}
export interface GetCallAnalyticsCategoryResponse {
  CategoryProperties?: CategoryProperties;
}
export interface GetCallAnalyticsJobRequest {
  CallAnalyticsJobName: string;
}
export interface GetCallAnalyticsJobResponse {
  CallAnalyticsJob?: CallAnalyticsJob;
}
export interface GetMedicalScribeJobRequest {
  MedicalScribeJobName: string;
}
export interface GetMedicalScribeJobResponse {
  MedicalScribeJob?: MedicalScribeJob;
}
export interface GetMedicalTranscriptionJobRequest {
  MedicalTranscriptionJobName: string;
}
export interface GetMedicalTranscriptionJobResponse {
  MedicalTranscriptionJob?: MedicalTranscriptionJob;
}
export interface GetMedicalVocabularyRequest {
  VocabularyName: string;
}
export interface GetMedicalVocabularyResponse {
  VocabularyName?: string;
  LanguageCode?: LanguageCode;
  VocabularyState?: VocabularyState;
  LastModifiedTime?: Date | string;
  FailureReason?: string;
  DownloadUri?: string;
}
export interface GetTranscriptionJobRequest {
  TranscriptionJobName: string;
}
export interface GetTranscriptionJobResponse {
  TranscriptionJob?: TranscriptionJob;
}
export interface GetVocabularyFilterRequest {
  VocabularyFilterName: string;
}
export interface GetVocabularyFilterResponse {
  VocabularyFilterName?: string;
  LanguageCode?: LanguageCode;
  LastModifiedTime?: Date | string;
  DownloadUri?: string;
}
export interface GetVocabularyRequest {
  VocabularyName: string;
}
export interface GetVocabularyResponse {
  VocabularyName?: string;
  LanguageCode?: LanguageCode;
  VocabularyState?: VocabularyState;
  LastModifiedTime?: Date | string;
  FailureReason?: string;
  DownloadUri?: string;
}
export type IdentifiedLanguageScore = number;

export interface InputDataConfig {
  S3Uri: string;
  TuningDataS3Uri?: string;
  DataAccessRoleArn: string;
}
export type InputType = "REAL_TIME" | "POST_CALL";
export declare class InternalFailureException extends Data.TaggedError(
  "InternalFailureException",
)<{
  readonly Message?: string;
}> {}
export interface InterruptionFilter {
  Threshold?: number;
  ParticipantRole?: ParticipantRole;
  AbsoluteTimeRange?: AbsoluteTimeRange;
  RelativeTimeRange?: RelativeTimeRange;
  Negate?: boolean;
}
export interface JobExecutionSettings {
  AllowDeferredExecution?: boolean;
  DataAccessRoleArn?: string;
}
export type KMSEncryptionContextMap = Record<string, string>;
export type KMSKeyId = string;

export type LanguageCode =
  | "AF_ZA"
  | "AR_AE"
  | "AR_SA"
  | "DA_DK"
  | "DE_CH"
  | "DE_DE"
  | "EN_AB"
  | "EN_AU"
  | "EN_GB"
  | "EN_IE"
  | "EN_IN"
  | "EN_US"
  | "EN_WL"
  | "ES_ES"
  | "ES_US"
  | "FA_IR"
  | "FR_CA"
  | "FR_FR"
  | "HE_IL"
  | "HI_IN"
  | "ID_ID"
  | "IT_IT"
  | "JA_JP"
  | "KO_KR"
  | "MS_MY"
  | "NL_NL"
  | "PT_BR"
  | "PT_PT"
  | "RU_RU"
  | "TA_IN"
  | "TE_IN"
  | "TR_TR"
  | "ZH_CN"
  | "ZH_TW"
  | "TH_TH"
  | "EN_ZA"
  | "EN_NZ"
  | "VI_VN"
  | "SV_SE"
  | "AB_GE"
  | "AST_ES"
  | "AZ_AZ"
  | "BA_RU"
  | "BE_BY"
  | "BG_BG"
  | "BN_IN"
  | "BS_BA"
  | "CA_ES"
  | "CKB_IQ"
  | "CKB_IR"
  | "CS_CZ"
  | "CY_WL"
  | "EL_GR"
  | "ET_EE"
  | "ET_ET"
  | "EU_ES"
  | "FI_FI"
  | "GL_ES"
  | "GU_IN"
  | "HA_NG"
  | "HR_HR"
  | "HU_HU"
  | "HY_AM"
  | "IS_IS"
  | "KA_GE"
  | "KAB_DZ"
  | "KK_KZ"
  | "KN_IN"
  | "KY_KG"
  | "LG_IN"
  | "LT_LT"
  | "LV_LV"
  | "MHR_RU"
  | "MI_NZ"
  | "MK_MK"
  | "ML_IN"
  | "MN_MN"
  | "MR_IN"
  | "MT_MT"
  | "NO_NO"
  | "OR_IN"
  | "PA_IN"
  | "PL_PL"
  | "PS_AF"
  | "RO_RO"
  | "RW_RW"
  | "SI_LK"
  | "SK_SK"
  | "SL_SI"
  | "SO_SO"
  | "SR_RS"
  | "SU_ID"
  | "SW_BI"
  | "SW_KE"
  | "SW_RW"
  | "SW_TZ"
  | "SW_UG"
  | "TL_PH"
  | "TT_RU"
  | "UG_CN"
  | "UK_UA"
  | "UZ_UZ"
  | "WO_SN"
  | "ZH_HK"
  | "ZU_ZA";
export interface LanguageCodeItem {
  LanguageCode?: LanguageCode;
  DurationInSeconds?: number;
}
export type LanguageCodeList = Array<LanguageCodeItem>;
export interface LanguageIdSettings {
  VocabularyName?: string;
  VocabularyFilterName?: string;
  LanguageModelName?: string;
}
export type LanguageIdSettingsMap = Record<LanguageCode, LanguageIdSettings>;
export interface LanguageModel {
  ModelName?: string;
  CreateTime?: Date | string;
  LastModifiedTime?: Date | string;
  LanguageCode?: CLMLanguageCode;
  BaseModelName?: BaseModelName;
  ModelStatus?: ModelStatus;
  UpgradeAvailability?: boolean;
  FailureReason?: string;
  InputDataConfig?: InputDataConfig;
}
export type LanguageOptions = Array<LanguageCode>;
export declare class LimitExceededException extends Data.TaggedError(
  "LimitExceededException",
)<{
  readonly Message?: string;
}> {}
export interface ListCallAnalyticsCategoriesRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListCallAnalyticsCategoriesResponse {
  NextToken?: string;
  Categories?: Array<CategoryProperties>;
}
export interface ListCallAnalyticsJobsRequest {
  Status?: CallAnalyticsJobStatus;
  JobNameContains?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListCallAnalyticsJobsResponse {
  Status?: CallAnalyticsJobStatus;
  NextToken?: string;
  CallAnalyticsJobSummaries?: Array<CallAnalyticsJobSummary>;
}
export interface ListLanguageModelsRequest {
  StatusEquals?: ModelStatus;
  NameContains?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListLanguageModelsResponse {
  NextToken?: string;
  Models?: Array<LanguageModel>;
}
export interface ListMedicalScribeJobsRequest {
  Status?: MedicalScribeJobStatus;
  JobNameContains?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListMedicalScribeJobsResponse {
  Status?: MedicalScribeJobStatus;
  NextToken?: string;
  MedicalScribeJobSummaries?: Array<MedicalScribeJobSummary>;
}
export interface ListMedicalTranscriptionJobsRequest {
  Status?: TranscriptionJobStatus;
  JobNameContains?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListMedicalTranscriptionJobsResponse {
  Status?: TranscriptionJobStatus;
  NextToken?: string;
  MedicalTranscriptionJobSummaries?: Array<MedicalTranscriptionJobSummary>;
}
export interface ListMedicalVocabulariesRequest {
  NextToken?: string;
  MaxResults?: number;
  StateEquals?: VocabularyState;
  NameContains?: string;
}
export interface ListMedicalVocabulariesResponse {
  Status?: VocabularyState;
  NextToken?: string;
  Vocabularies?: Array<VocabularyInfo>;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  ResourceArn?: string;
  Tags?: Array<Tag>;
}
export interface ListTranscriptionJobsRequest {
  Status?: TranscriptionJobStatus;
  JobNameContains?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListTranscriptionJobsResponse {
  Status?: TranscriptionJobStatus;
  NextToken?: string;
  TranscriptionJobSummaries?: Array<TranscriptionJobSummary>;
}
export interface ListVocabulariesRequest {
  NextToken?: string;
  MaxResults?: number;
  StateEquals?: VocabularyState;
  NameContains?: string;
}
export interface ListVocabulariesResponse {
  Status?: VocabularyState;
  NextToken?: string;
  Vocabularies?: Array<VocabularyInfo>;
}
export interface ListVocabularyFiltersRequest {
  NextToken?: string;
  MaxResults?: number;
  NameContains?: string;
}
export interface ListVocabularyFiltersResponse {
  NextToken?: string;
  VocabularyFilters?: Array<VocabularyFilterInfo>;
}
export type MaxAlternatives = number;

export type MaxResults = number;

export type MaxSpeakers = number;

export interface Media {
  MediaFileUri?: string;
  RedactedMediaFileUri?: string;
}
export type MediaFormat =
  | "MP3"
  | "MP4"
  | "WAV"
  | "FLAC"
  | "OGG"
  | "AMR"
  | "WEBM"
  | "M4A";
export type MediaSampleRateHertz = number;

export type MedicalContentIdentificationType = "PHI";
export type MedicalMediaSampleRateHertz = number;

export interface MedicalScribeChannelDefinition {
  ChannelId: number;
  ParticipantRole: MedicalScribeParticipantRole;
}
export type MedicalScribeChannelDefinitions =
  Array<MedicalScribeChannelDefinition>;
export type MedicalScribeChannelId = number;

export interface MedicalScribeJob {
  MedicalScribeJobName?: string;
  MedicalScribeJobStatus?: MedicalScribeJobStatus;
  LanguageCode?: MedicalScribeLanguageCode;
  Media?: Media;
  MedicalScribeOutput?: MedicalScribeOutput;
  StartTime?: Date | string;
  CreationTime?: Date | string;
  CompletionTime?: Date | string;
  FailureReason?: string;
  Settings?: MedicalScribeSettings;
  DataAccessRoleArn?: string;
  ChannelDefinitions?: Array<MedicalScribeChannelDefinition>;
  Tags?: Array<Tag>;
}
export type MedicalScribeJobStatus =
  | "QUEUED"
  | "IN_PROGRESS"
  | "FAILED"
  | "COMPLETED";
export type MedicalScribeJobSummaries = Array<MedicalScribeJobSummary>;
export interface MedicalScribeJobSummary {
  MedicalScribeJobName?: string;
  CreationTime?: Date | string;
  StartTime?: Date | string;
  CompletionTime?: Date | string;
  LanguageCode?: MedicalScribeLanguageCode;
  MedicalScribeJobStatus?: MedicalScribeJobStatus;
  FailureReason?: string;
}
export type MedicalScribeLanguageCode = "EN_US";
export type MedicalScribeNoteTemplate =
  | "HISTORY_AND_PHYSICAL"
  | "GIRPP"
  | "BIRP"
  | "SIRP"
  | "DAP"
  | "BEHAVIORAL_SOAP"
  | "PHYSICAL_SOAP";
export interface MedicalScribeOutput {
  TranscriptFileUri: string;
  ClinicalDocumentUri: string;
}
export type MedicalScribeParticipantRole = "PATIENT" | "CLINICIAN";
export interface MedicalScribeSettings {
  ShowSpeakerLabels?: boolean;
  MaxSpeakerLabels?: number;
  ChannelIdentification?: boolean;
  VocabularyName?: string;
  VocabularyFilterName?: string;
  VocabularyFilterMethod?: VocabularyFilterMethod;
  ClinicalNoteGenerationSettings?: ClinicalNoteGenerationSettings;
}
export interface MedicalTranscript {
  TranscriptFileUri?: string;
}
export interface MedicalTranscriptionJob {
  MedicalTranscriptionJobName?: string;
  TranscriptionJobStatus?: TranscriptionJobStatus;
  LanguageCode?: LanguageCode;
  MediaSampleRateHertz?: number;
  MediaFormat?: MediaFormat;
  Media?: Media;
  Transcript?: MedicalTranscript;
  StartTime?: Date | string;
  CreationTime?: Date | string;
  CompletionTime?: Date | string;
  FailureReason?: string;
  Settings?: MedicalTranscriptionSetting;
  ContentIdentificationType?: MedicalContentIdentificationType;
  Specialty?: Specialty;
  Type?: Type;
  Tags?: Array<Tag>;
}
export type MedicalTranscriptionJobSummaries =
  Array<MedicalTranscriptionJobSummary>;
export interface MedicalTranscriptionJobSummary {
  MedicalTranscriptionJobName?: string;
  CreationTime?: Date | string;
  StartTime?: Date | string;
  CompletionTime?: Date | string;
  LanguageCode?: LanguageCode;
  TranscriptionJobStatus?: TranscriptionJobStatus;
  FailureReason?: string;
  OutputLocationType?: OutputLocationType;
  Specialty?: Specialty;
  ContentIdentificationType?: MedicalContentIdentificationType;
  Type?: Type;
}
export interface MedicalTranscriptionSetting {
  ShowSpeakerLabels?: boolean;
  MaxSpeakerLabels?: number;
  ChannelIdentification?: boolean;
  ShowAlternatives?: boolean;
  MaxAlternatives?: number;
  VocabularyName?: string;
}
export type ModelName = string;

export type Models = Array<LanguageModel>;
export interface ModelSettings {
  LanguageModelName?: string;
}
export type ModelStatus = "IN_PROGRESS" | "FAILED" | "COMPLETED";
export type NextToken = string;

export type NonEmptyString = string;

export interface NonTalkTimeFilter {
  Threshold?: number;
  AbsoluteTimeRange?: AbsoluteTimeRange;
  RelativeTimeRange?: RelativeTimeRange;
  Negate?: boolean;
}
export declare class NotFoundException extends Data.TaggedError(
  "NotFoundException",
)<{
  readonly Message?: string;
}> {}
export type OutputBucketName = string;

export type OutputKey = string;

export type OutputLocationType = "CUSTOMER_BUCKET" | "SERVICE_BUCKET";
export type ParticipantRole = "AGENT" | "CUSTOMER";
export type Percentage = number;

export type Phrase = string;

export type Phrases = Array<string>;
export type PiiEntityType =
  | "BANK_ACCOUNT_NUMBER"
  | "BANK_ROUTING"
  | "CREDIT_DEBIT_NUMBER"
  | "CREDIT_DEBIT_CVV"
  | "CREDIT_DEBIT_EXPIRY"
  | "PIN"
  | "EMAIL"
  | "ADDRESS"
  | "NAME"
  | "PHONE"
  | "SSN"
  | "ALL";
export type PiiEntityTypes = Array<PiiEntityType>;
export type RedactionOutput = "REDACTED" | "REDACTED_AND_UNREDACTED";
export type RedactionType = "PII";
export interface RelativeTimeRange {
  StartPercentage?: number;
  EndPercentage?: number;
  First?: number;
  Last?: number;
}
export type Rule =
  | { NonTalkTimeFilter: NonTalkTimeFilter }
  | { InterruptionFilter: InterruptionFilter }
  | { TranscriptFilter: TranscriptFilter }
  | { SentimentFilter: SentimentFilter };
export type RuleList = Array<Rule>;
export interface SentimentFilter {
  Sentiments: Array<SentimentValue>;
  AbsoluteTimeRange?: AbsoluteTimeRange;
  RelativeTimeRange?: RelativeTimeRange;
  ParticipantRole?: ParticipantRole;
  Negate?: boolean;
}
export type SentimentValue = "POSITIVE" | "NEGATIVE" | "NEUTRAL" | "MIXED";
export type SentimentValueList = Array<SentimentValue>;
export interface Settings {
  VocabularyName?: string;
  ShowSpeakerLabels?: boolean;
  MaxSpeakerLabels?: number;
  ChannelIdentification?: boolean;
  ShowAlternatives?: boolean;
  MaxAlternatives?: number;
  VocabularyFilterName?: string;
  VocabularyFilterMethod?: VocabularyFilterMethod;
}
export type Specialty = "PRIMARYCARE";
export interface StartCallAnalyticsJobRequest {
  CallAnalyticsJobName: string;
  Media: Media;
  OutputLocation?: string;
  OutputEncryptionKMSKeyId?: string;
  DataAccessRoleArn?: string;
  Settings?: CallAnalyticsJobSettings;
  Tags?: Array<Tag>;
  ChannelDefinitions?: Array<ChannelDefinition>;
}
export interface StartCallAnalyticsJobResponse {
  CallAnalyticsJob?: CallAnalyticsJob;
}
export interface StartMedicalScribeJobRequest {
  MedicalScribeJobName: string;
  Media: Media;
  OutputBucketName: string;
  OutputEncryptionKMSKeyId?: string;
  KMSEncryptionContext?: Record<string, string>;
  DataAccessRoleArn: string;
  Settings: MedicalScribeSettings;
  ChannelDefinitions?: Array<MedicalScribeChannelDefinition>;
  Tags?: Array<Tag>;
}
export interface StartMedicalScribeJobResponse {
  MedicalScribeJob?: MedicalScribeJob;
}
export interface StartMedicalTranscriptionJobRequest {
  MedicalTranscriptionJobName: string;
  LanguageCode: LanguageCode;
  MediaSampleRateHertz?: number;
  MediaFormat?: MediaFormat;
  Media: Media;
  OutputBucketName: string;
  OutputKey?: string;
  OutputEncryptionKMSKeyId?: string;
  KMSEncryptionContext?: Record<string, string>;
  Settings?: MedicalTranscriptionSetting;
  ContentIdentificationType?: MedicalContentIdentificationType;
  Specialty: Specialty;
  Type: Type;
  Tags?: Array<Tag>;
}
export interface StartMedicalTranscriptionJobResponse {
  MedicalTranscriptionJob?: MedicalTranscriptionJob;
}
export interface StartTranscriptionJobRequest {
  TranscriptionJobName: string;
  LanguageCode?: LanguageCode;
  MediaSampleRateHertz?: number;
  MediaFormat?: MediaFormat;
  Media: Media;
  OutputBucketName?: string;
  OutputKey?: string;
  OutputEncryptionKMSKeyId?: string;
  KMSEncryptionContext?: Record<string, string>;
  Settings?: Settings;
  ModelSettings?: ModelSettings;
  JobExecutionSettings?: JobExecutionSettings;
  ContentRedaction?: ContentRedaction;
  IdentifyLanguage?: boolean;
  IdentifyMultipleLanguages?: boolean;
  LanguageOptions?: Array<LanguageCode>;
  Subtitles?: Subtitles;
  Tags?: Array<Tag>;
  LanguageIdSettings?: Record<LanguageCode, LanguageIdSettings>;
  ToxicityDetection?: Array<ToxicityDetectionSettings>;
}
export interface StartTranscriptionJobResponse {
  TranscriptionJob?: TranscriptionJob;
}
export type StringTargetList = Array<string>;
export type SubtitleFileUris = Array<string>;
export type SubtitleFormat = "VTT" | "SRT";
export type SubtitleFormats = Array<SubtitleFormat>;
export type SubtitleOutputStartIndex = number;

export interface Subtitles {
  Formats?: Array<SubtitleFormat>;
  OutputStartIndex?: number;
}
export interface SubtitlesOutput {
  Formats?: Array<SubtitleFormat>;
  SubtitleFileUris?: Array<string>;
  OutputStartIndex?: number;
}
export interface Summarization {
  GenerateAbstractiveSummary: boolean;
}
export interface Tag {
  Key: string;
  Value: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Array<Tag>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export type TimestampMilliseconds = number;

export type ToxicityCategories = Array<ToxicityCategory>;
export type ToxicityCategory = "ALL";
export type ToxicityDetection = Array<ToxicityDetectionSettings>;
export interface ToxicityDetectionSettings {
  ToxicityCategories: Array<ToxicityCategory>;
}
export type TranscribeArn = string;

export interface Transcript {
  TranscriptFileUri?: string;
  RedactedTranscriptFileUri?: string;
}
export interface TranscriptFilter {
  TranscriptFilterType: TranscriptFilterType;
  AbsoluteTimeRange?: AbsoluteTimeRange;
  RelativeTimeRange?: RelativeTimeRange;
  ParticipantRole?: ParticipantRole;
  Negate?: boolean;
  Targets: Array<string>;
}
export type TranscriptFilterType = "EXACT";
export interface TranscriptionJob {
  TranscriptionJobName?: string;
  TranscriptionJobStatus?: TranscriptionJobStatus;
  LanguageCode?: LanguageCode;
  MediaSampleRateHertz?: number;
  MediaFormat?: MediaFormat;
  Media?: Media;
  Transcript?: Transcript;
  StartTime?: Date | string;
  CreationTime?: Date | string;
  CompletionTime?: Date | string;
  FailureReason?: string;
  Settings?: Settings;
  ModelSettings?: ModelSettings;
  JobExecutionSettings?: JobExecutionSettings;
  ContentRedaction?: ContentRedaction;
  IdentifyLanguage?: boolean;
  IdentifyMultipleLanguages?: boolean;
  LanguageOptions?: Array<LanguageCode>;
  IdentifiedLanguageScore?: number;
  LanguageCodes?: Array<LanguageCodeItem>;
  Tags?: Array<Tag>;
  Subtitles?: SubtitlesOutput;
  LanguageIdSettings?: Record<LanguageCode, LanguageIdSettings>;
  ToxicityDetection?: Array<ToxicityDetectionSettings>;
}
export type TranscriptionJobName = string;

export type TranscriptionJobStatus =
  | "QUEUED"
  | "IN_PROGRESS"
  | "FAILED"
  | "COMPLETED";
export type TranscriptionJobSummaries = Array<TranscriptionJobSummary>;
export interface TranscriptionJobSummary {
  TranscriptionJobName?: string;
  CreationTime?: Date | string;
  StartTime?: Date | string;
  CompletionTime?: Date | string;
  LanguageCode?: LanguageCode;
  TranscriptionJobStatus?: TranscriptionJobStatus;
  FailureReason?: string;
  OutputLocationType?: OutputLocationType;
  ContentRedaction?: ContentRedaction;
  ModelSettings?: ModelSettings;
  IdentifyLanguage?: boolean;
  IdentifyMultipleLanguages?: boolean;
  IdentifiedLanguageScore?: number;
  LanguageCodes?: Array<LanguageCodeItem>;
  ToxicityDetection?: Array<ToxicityDetectionSettings>;
}
export type Type = "CONVERSATION" | "DICTATION";
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateCallAnalyticsCategoryRequest {
  CategoryName: string;
  Rules: Array<Rule>;
  InputType?: InputType;
}
export interface UpdateCallAnalyticsCategoryResponse {
  CategoryProperties?: CategoryProperties;
}
export interface UpdateMedicalVocabularyRequest {
  VocabularyName: string;
  LanguageCode: LanguageCode;
  VocabularyFileUri: string;
}
export interface UpdateMedicalVocabularyResponse {
  VocabularyName?: string;
  LanguageCode?: LanguageCode;
  LastModifiedTime?: Date | string;
  VocabularyState?: VocabularyState;
}
export interface UpdateVocabularyFilterRequest {
  VocabularyFilterName: string;
  Words?: Array<string>;
  VocabularyFilterFileUri?: string;
  DataAccessRoleArn?: string;
}
export interface UpdateVocabularyFilterResponse {
  VocabularyFilterName?: string;
  LanguageCode?: LanguageCode;
  LastModifiedTime?: Date | string;
}
export interface UpdateVocabularyRequest {
  VocabularyName: string;
  LanguageCode: LanguageCode;
  Phrases?: Array<string>;
  VocabularyFileUri?: string;
  DataAccessRoleArn?: string;
}
export interface UpdateVocabularyResponse {
  VocabularyName?: string;
  LanguageCode?: LanguageCode;
  LastModifiedTime?: Date | string;
  VocabularyState?: VocabularyState;
}
export type Uri = string;

export type Vocabularies = Array<VocabularyInfo>;
export interface VocabularyFilterInfo {
  VocabularyFilterName?: string;
  LanguageCode?: LanguageCode;
  LastModifiedTime?: Date | string;
}
export type VocabularyFilterMethod = "REMOVE" | "MASK" | "TAG";
export type VocabularyFilterName = string;

export type VocabularyFilters = Array<VocabularyFilterInfo>;
export interface VocabularyInfo {
  VocabularyName?: string;
  LanguageCode?: LanguageCode;
  LastModifiedTime?: Date | string;
  VocabularyState?: VocabularyState;
}
export type VocabularyName = string;

export type VocabularyState = "PENDING" | "READY" | "FAILED";
export type Word = string;

export type Words = Array<string>;
export declare namespace CreateCallAnalyticsCategory {
  export type Input = CreateCallAnalyticsCategoryRequest;
  export type Output = CreateCallAnalyticsCategoryResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace CreateLanguageModel {
  export type Input = CreateLanguageModelRequest;
  export type Output = CreateLanguageModelResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace CreateMedicalVocabulary {
  export type Input = CreateMedicalVocabularyRequest;
  export type Output = CreateMedicalVocabularyResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace CreateVocabulary {
  export type Input = CreateVocabularyRequest;
  export type Output = CreateVocabularyResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace CreateVocabularyFilter {
  export type Input = CreateVocabularyFilterRequest;
  export type Output = CreateVocabularyFilterResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace DeleteCallAnalyticsCategory {
  export type Input = DeleteCallAnalyticsCategoryRequest;
  export type Output = DeleteCallAnalyticsCategoryResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace DeleteCallAnalyticsJob {
  export type Input = DeleteCallAnalyticsJobRequest;
  export type Output = DeleteCallAnalyticsJobResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace DeleteLanguageModel {
  export type Input = DeleteLanguageModelRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace DeleteMedicalScribeJob {
  export type Input = DeleteMedicalScribeJobRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace DeleteMedicalTranscriptionJob {
  export type Input = DeleteMedicalTranscriptionJobRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace DeleteMedicalVocabulary {
  export type Input = DeleteMedicalVocabularyRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace DeleteTranscriptionJob {
  export type Input = DeleteTranscriptionJobRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace DeleteVocabulary {
  export type Input = DeleteVocabularyRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace DeleteVocabularyFilter {
  export type Input = DeleteVocabularyFilterRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace DescribeLanguageModel {
  export type Input = DescribeLanguageModelRequest;
  export type Output = DescribeLanguageModelResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace GetCallAnalyticsCategory {
  export type Input = GetCallAnalyticsCategoryRequest;
  export type Output = GetCallAnalyticsCategoryResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace GetCallAnalyticsJob {
  export type Input = GetCallAnalyticsJobRequest;
  export type Output = GetCallAnalyticsJobResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace GetMedicalScribeJob {
  export type Input = GetMedicalScribeJobRequest;
  export type Output = GetMedicalScribeJobResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace GetMedicalTranscriptionJob {
  export type Input = GetMedicalTranscriptionJobRequest;
  export type Output = GetMedicalTranscriptionJobResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace GetMedicalVocabulary {
  export type Input = GetMedicalVocabularyRequest;
  export type Output = GetMedicalVocabularyResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace GetTranscriptionJob {
  export type Input = GetTranscriptionJobRequest;
  export type Output = GetTranscriptionJobResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace GetVocabulary {
  export type Input = GetVocabularyRequest;
  export type Output = GetVocabularyResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace GetVocabularyFilter {
  export type Input = GetVocabularyFilterRequest;
  export type Output = GetVocabularyFilterResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace ListCallAnalyticsCategories {
  export type Input = ListCallAnalyticsCategoriesRequest;
  export type Output = ListCallAnalyticsCategoriesResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace ListCallAnalyticsJobs {
  export type Input = ListCallAnalyticsJobsRequest;
  export type Output = ListCallAnalyticsJobsResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace ListLanguageModels {
  export type Input = ListLanguageModelsRequest;
  export type Output = ListLanguageModelsResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace ListMedicalScribeJobs {
  export type Input = ListMedicalScribeJobsRequest;
  export type Output = ListMedicalScribeJobsResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace ListMedicalTranscriptionJobs {
  export type Input = ListMedicalTranscriptionJobsRequest;
  export type Output = ListMedicalTranscriptionJobsResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace ListMedicalVocabularies {
  export type Input = ListMedicalVocabulariesRequest;
  export type Output = ListMedicalVocabulariesResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace ListTranscriptionJobs {
  export type Input = ListTranscriptionJobsRequest;
  export type Output = ListTranscriptionJobsResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace ListVocabularies {
  export type Input = ListVocabulariesRequest;
  export type Output = ListVocabulariesResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace ListVocabularyFilters {
  export type Input = ListVocabularyFiltersRequest;
  export type Output = ListVocabularyFiltersResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace StartCallAnalyticsJob {
  export type Input = StartCallAnalyticsJobRequest;
  export type Output = StartCallAnalyticsJobResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace StartMedicalScribeJob {
  export type Input = StartMedicalScribeJobRequest;
  export type Output = StartMedicalScribeJobResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace StartMedicalTranscriptionJob {
  export type Input = StartMedicalTranscriptionJobRequest;
  export type Output = StartMedicalTranscriptionJobResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace StartTranscriptionJob {
  export type Input = StartTranscriptionJobRequest;
  export type Output = StartTranscriptionJobResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace UpdateCallAnalyticsCategory {
  export type Input = UpdateCallAnalyticsCategoryRequest;
  export type Output = UpdateCallAnalyticsCategoryResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace UpdateMedicalVocabulary {
  export type Input = UpdateMedicalVocabularyRequest;
  export type Output = UpdateMedicalVocabularyResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace UpdateVocabulary {
  export type Input = UpdateVocabularyRequest;
  export type Output = UpdateVocabularyResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace UpdateVocabularyFilter {
  export type Input = UpdateVocabularyFilterRequest;
  export type Output = UpdateVocabularyFilterResponse;
  export type Error =
    | BadRequestException
    | InternalFailureException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError;
}
