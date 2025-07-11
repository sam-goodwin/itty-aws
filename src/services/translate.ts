import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";
import { AWSServiceClient } from "../client.ts";

export declare class Translate extends AWSServiceClient {
  createParallelData(
    input: CreateParallelDataRequest,
  ): Effect.Effect<
    CreateParallelDataResponse,
    | ConcurrentModificationException
    | ConflictException
    | InternalServerException
    | InvalidParameterValueException
    | InvalidRequestException
    | LimitExceededException
    | TooManyRequestsException
    | TooManyTagsException
    | CommonAwsError
  >;
  deleteParallelData(
    input: DeleteParallelDataRequest,
  ): Effect.Effect<
    DeleteParallelDataResponse,
    | ConcurrentModificationException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteTerminology(
    input: DeleteTerminologyRequest,
  ): Effect.Effect<
    {},
    | InternalServerException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  describeTextTranslationJob(
    input: DescribeTextTranslationJobRequest,
  ): Effect.Effect<
    DescribeTextTranslationJobResponse,
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getParallelData(
    input: GetParallelDataRequest,
  ): Effect.Effect<
    GetParallelDataResponse,
    | InternalServerException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getTerminology(
    input: GetTerminologyRequest,
  ): Effect.Effect<
    GetTerminologyResponse,
    | InternalServerException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  importTerminology(
    input: ImportTerminologyRequest,
  ): Effect.Effect<
    ImportTerminologyResponse,
    | ConcurrentModificationException
    | InternalServerException
    | InvalidParameterValueException
    | LimitExceededException
    | TooManyRequestsException
    | TooManyTagsException
    | CommonAwsError
  >;
  listLanguages(
    input: ListLanguagesRequest,
  ): Effect.Effect<
    ListLanguagesResponse,
    | InternalServerException
    | InvalidParameterValueException
    | TooManyRequestsException
    | UnsupportedDisplayLanguageCodeException
    | CommonAwsError
  >;
  listParallelData(
    input: ListParallelDataRequest,
  ): Effect.Effect<
    ListParallelDataResponse,
    | InternalServerException
    | InvalidParameterValueException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | InternalServerException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  listTerminologies(
    input: ListTerminologiesRequest,
  ): Effect.Effect<
    ListTerminologiesResponse,
    | InternalServerException
    | InvalidParameterValueException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listTextTranslationJobs(
    input: ListTextTranslationJobsRequest,
  ): Effect.Effect<
    ListTextTranslationJobsResponse,
    | InternalServerException
    | InvalidFilterException
    | InvalidRequestException
    | TooManyRequestsException
    | CommonAwsError
  >;
  startTextTranslationJob(
    input: StartTextTranslationJobRequest,
  ): Effect.Effect<
    StartTextTranslationJobResponse,
    | InternalServerException
    | InvalidParameterValueException
    | InvalidRequestException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UnsupportedLanguagePairException
    | CommonAwsError
  >;
  stopTextTranslationJob(
    input: StopTextTranslationJobRequest,
  ): Effect.Effect<
    StopTextTranslationJobResponse,
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | ConcurrentModificationException
    | InternalServerException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | TooManyTagsException
    | CommonAwsError
  >;
  translateDocument(
    input: TranslateDocumentRequest,
  ): Effect.Effect<
    TranslateDocumentResponse,
    | InternalServerException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnsupportedLanguagePairException
    | CommonAwsError
  >;
  translateText(
    input: TranslateTextRequest,
  ): Effect.Effect<
    TranslateTextResponse,
    | DetectedLanguageLowConfidenceException
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | TextSizeLimitExceededException
    | TooManyRequestsException
    | UnsupportedLanguagePairException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | ConcurrentModificationException
    | InternalServerException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  updateParallelData(
    input: UpdateParallelDataRequest,
  ): Effect.Effect<
    UpdateParallelDataResponse,
    | ConcurrentModificationException
    | ConflictException
    | InternalServerException
    | InvalidParameterValueException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
}

export interface AppliedTerminology {
  Name?: string;
  Terms?: Array<Term>;
}
export type AppliedTerminologyList = Array<AppliedTerminology>;
export type BoundedLengthString = string;

export type Brevity = "ON";
export type ClientTokenString = string;

export declare class ConcurrentModificationException extends EffectData.TaggedError(
  "ConcurrentModificationException",
)<{
  readonly Message?: string;
}> {}
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message?: string;
}> {}
export type ContentType = string;

export interface CreateParallelDataRequest {
  Name: string;
  Description?: string;
  ParallelDataConfig: ParallelDataConfig;
  EncryptionKey?: EncryptionKey;
  ClientToken: string;
  Tags?: Array<Tag>;
}
export interface CreateParallelDataResponse {
  Name?: string;
  Status?: ParallelDataStatus;
}
export interface DeleteParallelDataRequest {
  Name: string;
}
export interface DeleteParallelDataResponse {
  Name?: string;
  Status?: ParallelDataStatus;
}
export interface DeleteTerminologyRequest {
  Name: string;
}
export interface DescribeTextTranslationJobRequest {
  JobId: string;
}
export interface DescribeTextTranslationJobResponse {
  TextTranslationJobProperties?: TextTranslationJobProperties;
}
export type Description = string;

export declare class DetectedLanguageLowConfidenceException extends EffectData.TaggedError(
  "DetectedLanguageLowConfidenceException",
)<{
  readonly Message?: string;
  readonly DetectedLanguageCode?: string;
}> {}
export type Directionality = "UNI" | "MULTI";
export type DisplayLanguageCode =
  | "DE"
  | "EN"
  | "ES"
  | "FR"
  | "IT"
  | "JA"
  | "KO"
  | "PT"
  | "ZH"
  | "ZH_TW";
export interface Document {
  Content: Uint8Array | string;
  ContentType: string;
}
export type DocumentContent = Uint8Array | string;

export interface EncryptionKey {
  Type: EncryptionKeyType;
  Id: string;
}
export type EncryptionKeyID = string;

export type EncryptionKeyType = "KMS";
export type Formality = "FORMAL" | "INFORMAL";
export interface GetParallelDataRequest {
  Name: string;
}
export interface GetParallelDataResponse {
  ParallelDataProperties?: ParallelDataProperties;
  DataLocation?: ParallelDataDataLocation;
  AuxiliaryDataLocation?: ParallelDataDataLocation;
  LatestUpdateAttemptAuxiliaryDataLocation?: ParallelDataDataLocation;
}
export interface GetTerminologyRequest {
  Name: string;
  TerminologyDataFormat?: TerminologyDataFormat;
}
export interface GetTerminologyResponse {
  TerminologyProperties?: TerminologyProperties;
  TerminologyDataLocation?: TerminologyDataLocation;
  AuxiliaryDataLocation?: TerminologyDataLocation;
}
export type IamRoleArn = string;

export interface ImportTerminologyRequest {
  Name: string;
  MergeStrategy: MergeStrategy;
  Description?: string;
  TerminologyData: TerminologyData;
  EncryptionKey?: EncryptionKey;
  Tags?: Array<Tag>;
}
export interface ImportTerminologyResponse {
  TerminologyProperties?: TerminologyProperties;
  AuxiliaryDataLocation?: TerminologyDataLocation;
}
export interface InputDataConfig {
  S3Uri: string;
  ContentType: string;
}
export type Integer = number;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidFilterException extends EffectData.TaggedError(
  "InvalidFilterException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidParameterValueException extends EffectData.TaggedError(
  "InvalidParameterValueException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidRequestException extends EffectData.TaggedError(
  "InvalidRequestException",
)<{
  readonly Message?: string;
}> {}
export interface JobDetails {
  TranslatedDocumentsCount?: number;
  DocumentsWithErrorsCount?: number;
  InputDocumentsCount?: number;
}
export type JobId = string;

export type JobName = string;

export type JobStatus =
  | "SUBMITTED"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "COMPLETED_WITH_ERROR"
  | "FAILED"
  | "STOP_REQUESTED"
  | "STOPPED";
export interface Language {
  LanguageName: string;
  LanguageCode: string;
}
export type LanguageCodeString = string;

export type LanguageCodeStringList = Array<string>;
export type LanguagesList = Array<Language>;
export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly Message?: string;
}> {}
export interface ListLanguagesRequest {
  DisplayLanguageCode?: DisplayLanguageCode;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListLanguagesResponse {
  Languages?: Array<Language>;
  DisplayLanguageCode?: DisplayLanguageCode;
  NextToken?: string;
}
export interface ListParallelDataRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListParallelDataResponse {
  ParallelDataPropertiesList?: Array<ParallelDataProperties>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Array<Tag>;
}
export interface ListTerminologiesRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListTerminologiesResponse {
  TerminologyPropertiesList?: Array<TerminologyProperties>;
  NextToken?: string;
}
export interface ListTextTranslationJobsRequest {
  Filter?: TextTranslationJobFilter;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListTextTranslationJobsResponse {
  TextTranslationJobPropertiesList?: Array<TextTranslationJobProperties>;
  NextToken?: string;
}
export type LocalizedNameString = string;

export type Long = number;

export type MaxResultsInteger = number;

export type MergeStrategy = "OVERWRITE";
export type NextToken = string;

export interface OutputDataConfig {
  S3Uri: string;
  EncryptionKey?: EncryptionKey;
}
export type ParallelDataArn = string;

export interface ParallelDataConfig {
  S3Uri?: string;
  Format?: ParallelDataFormat;
}
export interface ParallelDataDataLocation {
  RepositoryType: string;
  Location: string;
}
export type ParallelDataFormat = "TSV" | "CSV" | "TMX";
export interface ParallelDataProperties {
  Name?: string;
  Arn?: string;
  Description?: string;
  Status?: ParallelDataStatus;
  SourceLanguageCode?: string;
  TargetLanguageCodes?: Array<string>;
  ParallelDataConfig?: ParallelDataConfig;
  Message?: string;
  ImportedDataSize?: number;
  ImportedRecordCount?: number;
  FailedRecordCount?: number;
  SkippedRecordCount?: number;
  EncryptionKey?: EncryptionKey;
  CreatedAt?: Date | string;
  LastUpdatedAt?: Date | string;
  LatestUpdateAttemptStatus?: ParallelDataStatus;
  LatestUpdateAttemptAt?: Date | string;
}
export type ParallelDataPropertiesList = Array<ParallelDataProperties>;
export type ParallelDataStatus =
  | "CREATING"
  | "UPDATING"
  | "ACTIVE"
  | "DELETING"
  | "FAILED";
export type Profanity = "MASK";
export type ResourceArn = string;

export type ResourceName = string;

export type ResourceNameList = Array<string>;
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type S3Uri = string;

export declare class ServiceUnavailableException extends EffectData.TaggedError(
  "ServiceUnavailableException",
)<{
  readonly Message?: string;
}> {}
export interface StartTextTranslationJobRequest {
  JobName?: string;
  InputDataConfig: InputDataConfig;
  OutputDataConfig: OutputDataConfig;
  DataAccessRoleArn: string;
  SourceLanguageCode: string;
  TargetLanguageCodes: Array<string>;
  TerminologyNames?: Array<string>;
  ParallelDataNames?: Array<string>;
  ClientToken: string;
  Settings?: TranslationSettings;
}
export interface StartTextTranslationJobResponse {
  JobId?: string;
  JobStatus?: JobStatus;
}
export interface StopTextTranslationJobRequest {
  JobId: string;
}
export interface StopTextTranslationJobResponse {
  JobId?: string;
  JobStatus?: JobStatus;
}
export type TranslateString = string;

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

export type TargetLanguageCodeStringList = Array<string>;
export interface Term {
  SourceText?: string;
  TargetText?: string;
}
export type TerminologyArn = string;

export interface TerminologyData {
  File: Uint8Array | string;
  Format: TerminologyDataFormat;
  Directionality?: Directionality;
}
export type TerminologyDataFormat = "CSV" | "TMX" | "TSV";
export interface TerminologyDataLocation {
  RepositoryType: string;
  Location: string;
}
export type TerminologyFile = Uint8Array | string;

export interface TerminologyProperties {
  Name?: string;
  Description?: string;
  Arn?: string;
  SourceLanguageCode?: string;
  TargetLanguageCodes?: Array<string>;
  EncryptionKey?: EncryptionKey;
  SizeBytes?: number;
  TermCount?: number;
  CreatedAt?: Date | string;
  LastUpdatedAt?: Date | string;
  Directionality?: Directionality;
  Message?: string;
  SkippedTermCount?: number;
  Format?: TerminologyDataFormat;
}
export type TerminologyPropertiesList = Array<TerminologyProperties>;
export type TermList = Array<Term>;
export declare class TextSizeLimitExceededException extends EffectData.TaggedError(
  "TextSizeLimitExceededException",
)<{
  readonly Message?: string;
}> {}
export interface TextTranslationJobFilter {
  JobName?: string;
  JobStatus?: JobStatus;
  SubmittedBeforeTime?: Date | string;
  SubmittedAfterTime?: Date | string;
}
export interface TextTranslationJobProperties {
  JobId?: string;
  JobName?: string;
  JobStatus?: JobStatus;
  JobDetails?: JobDetails;
  SourceLanguageCode?: string;
  TargetLanguageCodes?: Array<string>;
  TerminologyNames?: Array<string>;
  ParallelDataNames?: Array<string>;
  Message?: string;
  SubmittedTime?: Date | string;
  EndTime?: Date | string;
  InputDataConfig?: InputDataConfig;
  OutputDataConfig?: OutputDataConfig;
  DataAccessRoleArn?: string;
  Settings?: TranslationSettings;
}
export type TextTranslationJobPropertiesList =
  Array<TextTranslationJobProperties>;
export type Timestamp = Date | string;

export declare class TooManyRequestsException extends EffectData.TaggedError(
  "TooManyRequestsException",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyTagsException extends EffectData.TaggedError(
  "TooManyTagsException",
)<{
  readonly message?: string;
  readonly ResourceArn?: string;
}> {}
export interface TranslatedDocument {
  Content: Uint8Array | string;
}
export type TranslatedDocumentContent = Uint8Array | string;

export interface TranslateDocumentRequest {
  Document: Document;
  TerminologyNames?: Array<string>;
  SourceLanguageCode: string;
  TargetLanguageCode: string;
  Settings?: TranslationSettings;
}
export interface TranslateDocumentResponse {
  TranslatedDocument: TranslatedDocument;
  SourceLanguageCode: string;
  TargetLanguageCode: string;
  AppliedTerminologies?: Array<AppliedTerminology>;
  AppliedSettings?: TranslationSettings;
}
export type TranslatedTextString = string;

export interface TranslateTextRequest {
  Text: string;
  TerminologyNames?: Array<string>;
  SourceLanguageCode: string;
  TargetLanguageCode: string;
  Settings?: TranslationSettings;
}
export interface TranslateTextResponse {
  TranslatedText: string;
  SourceLanguageCode: string;
  TargetLanguageCode: string;
  AppliedTerminologies?: Array<AppliedTerminology>;
  AppliedSettings?: TranslationSettings;
}
export interface TranslationSettings {
  Formality?: Formality;
  Profanity?: Profanity;
  Brevity?: Brevity;
}
export type UnboundedLengthString = string;

export declare class UnsupportedDisplayLanguageCodeException extends EffectData.TaggedError(
  "UnsupportedDisplayLanguageCodeException",
)<{
  readonly Message?: string;
  readonly DisplayLanguageCode?: string;
}> {}
export declare class UnsupportedLanguagePairException extends EffectData.TaggedError(
  "UnsupportedLanguagePairException",
)<{
  readonly Message?: string;
  readonly SourceLanguageCode?: string;
  readonly TargetLanguageCode?: string;
}> {}
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateParallelDataRequest {
  Name: string;
  Description?: string;
  ParallelDataConfig: ParallelDataConfig;
  ClientToken: string;
}
export interface UpdateParallelDataResponse {
  Name?: string;
  Status?: ParallelDataStatus;
  LatestUpdateAttemptStatus?: ParallelDataStatus;
  LatestUpdateAttemptAt?: Date | string;
}
export declare namespace CreateParallelData {
  export type Input = CreateParallelDataRequest;
  export type Output = CreateParallelDataResponse;
  export type Error =
    | ConcurrentModificationException
    | ConflictException
    | InternalServerException
    | InvalidParameterValueException
    | InvalidRequestException
    | LimitExceededException
    | TooManyRequestsException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace DeleteParallelData {
  export type Input = DeleteParallelDataRequest;
  export type Output = DeleteParallelDataResponse;
  export type Error =
    | ConcurrentModificationException
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteTerminology {
  export type Input = DeleteTerminologyRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeTextTranslationJob {
  export type Input = DescribeTextTranslationJobRequest;
  export type Output = DescribeTextTranslationJobResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetParallelData {
  export type Input = GetParallelDataRequest;
  export type Output = GetParallelDataResponse;
  export type Error =
    | InternalServerException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetTerminology {
  export type Input = GetTerminologyRequest;
  export type Output = GetTerminologyResponse;
  export type Error =
    | InternalServerException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ImportTerminology {
  export type Input = ImportTerminologyRequest;
  export type Output = ImportTerminologyResponse;
  export type Error =
    | ConcurrentModificationException
    | InternalServerException
    | InvalidParameterValueException
    | LimitExceededException
    | TooManyRequestsException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace ListLanguages {
  export type Input = ListLanguagesRequest;
  export type Output = ListLanguagesResponse;
  export type Error =
    | InternalServerException
    | InvalidParameterValueException
    | TooManyRequestsException
    | UnsupportedDisplayLanguageCodeException
    | CommonAwsError;
}

export declare namespace ListParallelData {
  export type Input = ListParallelDataRequest;
  export type Output = ListParallelDataResponse;
  export type Error =
    | InternalServerException
    | InvalidParameterValueException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InternalServerException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListTerminologies {
  export type Input = ListTerminologiesRequest;
  export type Output = ListTerminologiesResponse;
  export type Error =
    | InternalServerException
    | InvalidParameterValueException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListTextTranslationJobs {
  export type Input = ListTextTranslationJobsRequest;
  export type Output = ListTextTranslationJobsResponse;
  export type Error =
    | InternalServerException
    | InvalidFilterException
    | InvalidRequestException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace StartTextTranslationJob {
  export type Input = StartTextTranslationJobRequest;
  export type Output = StartTextTranslationJobResponse;
  export type Error =
    | InternalServerException
    | InvalidParameterValueException
    | InvalidRequestException
    | ResourceNotFoundException
    | TooManyRequestsException
    | UnsupportedLanguagePairException
    | CommonAwsError;
}

export declare namespace StopTextTranslationJob {
  export type Input = StopTextTranslationJobRequest;
  export type Output = StopTextTranslationJobResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | ConcurrentModificationException
    | InternalServerException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace TranslateDocument {
  export type Input = TranslateDocumentRequest;
  export type Output = TranslateDocumentResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnsupportedLanguagePairException
    | CommonAwsError;
}

export declare namespace TranslateText {
  export type Input = TranslateTextRequest;
  export type Output = TranslateTextResponse;
  export type Error =
    | DetectedLanguageLowConfidenceException
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | TextSizeLimitExceededException
    | TooManyRequestsException
    | UnsupportedLanguagePairException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | ConcurrentModificationException
    | InternalServerException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateParallelData {
  export type Input = UpdateParallelDataRequest;
  export type Output = UpdateParallelDataResponse;
  export type Error =
    | ConcurrentModificationException
    | ConflictException
    | InternalServerException
    | InvalidParameterValueException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}
